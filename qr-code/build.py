#!/usr/bin/env python3
"""Build a native Desmos Version 1-L QR encoder (no runtime QR library).

Nayuki's MIT-licensed reference supplies fixed QR layout and the binary linear
Reed-Solomon transform. Desmos computes message bits and parity on every edit.
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / 'vendor'))
from qrcodegen import QrCode, QrSegment


class Layout(QrCode):
    def _draw_codewords(self, data):
        self.positions = []
        for right in range(20, 0, -2):
            if right <= 6:
                right -= 1
            for vert in range(21):
                for j in range(2):
                    x = right - j
                    y = 20 - vert if (right + 1) & 2 == 0 else vert
                    if not self._isfunction[y][x]:
                        self.positions.append((x, y))
        super()._draw_codewords(data)


def constants():
    layout = Layout(1, QrCode.Ecc.LOW, bytes(19), 0)
    indices = [209] * 441
    offsets = [int(layout.get_module(x, y)) for y in range(21) for x in range(21)]
    for i, (x, y) in enumerate(layout.positions):
        indices[y * 21 + x] = i + 1
        offsets[y * 21 + x] = int((x + y) % 2 == 0)
    divisor = QrCode._reed_solomon_compute_divisor(7)
    parity = [[] for _ in range(56)]
    for i in range(152):
        basis = bytearray(19)
        basis[i // 8] = 1 << (7 - i % 8)
        result = QrCode._reed_solomon_compute_remainder(basis, divisor)
        for k in range(56):
            if result[k // 8] >> (7 - k % 8) & 1:
                parity[k].append(i + 1)
    return indices, offsets, parity


def native_bits(a):
    n = len(a)
    result = []
    for i in range(152):
        if i < 4:
            bit = (4 >> (3 - i)) & 1
        elif i < 12:
            bit = (n >> (11 - i)) & 1
        elif i < 12 + 8 * n:
            bit = (a[(i - 12) // 8] >> (7 - (i - 12) % 8)) & 1
        elif i < 16 + 8 * n:
            bit = 0
        else:
            pad = 236 if ((i - 16 - 8 * n) // 8) % 2 == 0 else 17
            bit = (pad >> (7 - i % 8)) & 1
        result.append(bit)
    return result


def build():
    indices, offsets, parity = constants()
    expressions = []
    def note(text):
        expressions.append(dict(type='text', id=f'note-{len(expressions)}', text=text))
    def expr(id, latex, folder=None, **kw):
        entry = dict(type='expression', id=id, latex=latex, hidden=id not in ('paper', 'qr'), **kw)
        if folder:
            entry['folderId'] = folder
        expressions.append(entry)
    def folder(id, title):
        expressions.append(dict(type='folder', id=id, title=title, collapsed=True))
    arr = lambda xs: '[' + ','.join(map(str, xs)) + ']'
    note('NATIVE QR GENERATOR • Change A below. All encoding and error correction runs in Desmos. Version 1-L, fixed mask 0, 21 × 21 modules.')
    note('A contains 1–17 ASCII character codes (integers 0–127). Default: desmos.com. Example HELLO: [72,69,76,76,79]. Space=32, .=46, /=47, :=58. Invalid input hides the QR.')
    expr('input', 'A=' + arr(b'desmos.com'))
    expr('length', r'n=\operatorname{length}\left(A\right)')
    expr('valid', r'v=\left\{1\le n\le17:\left\{\min\left(A\right)\ge0:\left\{\max\left(A\right)\le127:\left\{\operatorname{total}\left(\left|A-\operatorname{floor}\left(A\right)\right|\right)=0:1,0\right\},0\right\},0\right\},0\right\}')
    note('Keep the white border and square modules visible when scanning. Open the folders to inspect the byte encoding, Reed–Solomon parity, and QR placement. Change A to regenerate; no script or image is involved.')
    folder('bits', '1 · Byte mode, length, message, terminator, padding')
    expr('bit-helper', r'h\left(a,k\right)=\operatorname{mod}\left(\operatorname{floor}\left(\frac{a}{2^{k}}\right),2\right)', 'bits')
    expr('bit-function', r'b\left(i\right)=\left\{i<4:h\left(4,3-i\right),i<12:h\left(n,11-i\right),i<12+8n:h\left(A\left[1+\operatorname{floor}\left(\frac{i-12}{8}\right)\right],7-\operatorname{mod}\left(i-12,8\right)\right),i<16+8n:0,h\left(\left\{\operatorname{mod}\left(\operatorname{floor}\left(\frac{i-16-8n}{8}\right),2\right)=0:236,17\right\},7-\operatorname{mod}\left(i,8\right)\right)\right\}', 'bits')
    expr('data-bits', r'B=b\left([0...151]\right)', 'bits')
    folder('ecc', '2 · Reed–Solomon error correction (56 parity bits)')
    for k, selected in enumerate(parity, 1):
        expr(f'parity-{k}', rf'e_{{{k}}}=\operatorname{{mod}}\left(\operatorname{{total}}\left(B\left[{arr(selected)}\right]\right),2\right)', 'ecc')
    expr('codeword-bits', r'D=\operatorname{join}\left(B,[' + ','.join(f'e_{{{k}}}' for k in range(1,57)) + r'],[0]\right)', 'ecc')
    folder('layout', '3 · Fixed patterns, placement, and mask 0')
    expr('indices', 'T='+arr(indices), 'layout')
    expr('offsets', 'U='+arr(offsets), 'layout')
    expr('modules', r'C=\operatorname{mod}\left(D\left[T\right]+U,2\right)', 'layout')
    expr('grid', 'I=[0...440]', 'layout')
    expr('dark', r'J=I\left[C=1\right]', 'layout')
    expr('x', r'X=\operatorname{mod}\left(J,21\right)', 'layout')
    expr('y', r'Y=20-\operatorname{floor}\left(\frac{J}{21}\right)', 'layout')
    folder('drawing', '4 · QR modules and four-module quiet zone')
    expr('paper', r'\operatorname{polygon}\left((-4,-4),(25,-4),(25,25),(-4,25)\right)', 'drawing', color='#ffffff', fillOpacity='1', lineOpacity='0')
    expr('qr', r'\operatorname{polygon}\left((X,Y),(X+1,Y),(X+1,Y+1),(X,Y+1)\right)\left\{v=1\right\}', 'drawing', color='#000000', fillOpacity='1', lineOpacity='0')
    state = dict(version=11, randomSeed='desmos-native-qr', graph=dict(viewport=dict(xmin=-5,ymin=-5,xmax=26,ymax=26), showGrid=False, showXAxis=False, showYAxis=False, squareAxes=True), expressions=dict(list=expressions))
    (ROOT / 'qr-generator-state.json').write_text(json.dumps(state, indent=2)+'\n')
    (ROOT / 'qr-generator.desmos').write_text(json.dumps(dict(format='desmosplus.graph',version=1,product='2dcalculator',name='Native QR Generator',category='QR Codes',state=state),indent=2)+'\n')
    (ROOT / 'expressions.txt').write_text('\n'.join(e['latex'] for e in expressions if e['type']=='expression')+'\n')
    return indices, offsets, parity


if __name__ == '__main__':
    indices, offsets, parity = build()
    import random
    random.seed(42)
    cases = [b'desmos.com',b'HELLO',b'https://a.co',b'A',b'12345678901234567']
    cases += [bytes(random.randrange(128) for _ in range(n)) for n in range(1,18) for _ in range(5)]
    for message in cases:
        bits = native_bits(message)
        encoded = bits + [sum(bits[i-1] for i in selected)%2 for selected in parity] + [0]
        modules = [(encoded[i-1]+offset)%2 for i,offset in zip(indices,offsets)]
        qr = QrCode.encode_segments([QrSegment.make_bytes(message)], QrCode.Ecc.LOW, 1, 1, 0, False)
        expected = [int(qr.get_module(x,y)) for y in range(21) for x in range(21)]
        assert modules == expected, message
    print(f'Built graph; all 441 modules match the reference for {len(cases)} messages.')
