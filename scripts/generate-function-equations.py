#!/usr/bin/env python3
"""Render the extension's function reference equations as bundled SVG paths."""

from pathlib import Path

import matplotlib as mpl
import matplotlib.pyplot as plt


EQUATIONS = {
    "sinc": r"f_{\mathrm{sinc}}(x)=1\ (x=0),\ \frac{\sin(\pi x)}{\pi x}\ (x\ne0)",
    "clamp": r"f_{\mathrm{clamp}}(x,a,b)=\min(\max(x,a),b)",
    "lerp": r"f_{\mathrm{lerp}}(a,b,t)=a+(b-a)t",
    "frac": r"f_{\mathrm{frac}}(x)=x-\lfloor x\rfloor",
    "hypot": r"f_{\mathrm{hypot}}(x,y)=\sqrt{x^2+y^2}",
    "logistic": r"f_{\mathrm{logistic}}(x)=\frac{1}{1+e^{-x}}",
    "sign": r"f_{\mathrm{sign}}(x)=1\ (x>0),\ -1\ (x<0),\ 0\ (x=0)",
    "roundto": r"f_{\mathrm{roundto}}(x,n)=\frac{\mathrm{round}(10^n x)}{10^n}",
    "versin": r"f_{\mathrm{versin}}(x)=1-\cos(x)",
    "haversin": r"f_{\mathrm{haversin}}(x)=\sin^2\!\left(\frac{x}{2}\right)",
    "asinh": r"f_{\mathrm{asinh}}(x)=\ln\!\left(x+\sqrt{x^2+1}\right)",
    "acosh": r"f_{\mathrm{acosh}}(x)=\ln\!\left(x+\sqrt{x^2-1}\right)",
    "atanh": r"f_{\mathrm{atanh}}(x)=\frac{1}{2}\ln\!\left(\frac{1+x}{1-x}\right)",
    "wrap": r"f_{\mathrm{wrap}}(x,a,b)=a+\mathrm{mod}(x-a,b-a)",
}


def main() -> None:
    output = Path(__file__).resolve().parents[1] / "extension" / "equations"
    output.mkdir(parents=True, exist_ok=True)
    mpl.rcParams.update({
        "mathtext.fontset": "dejavusans",
        "svg.fonttype": "path",
        "svg.hashsalt": "desmosplus-function-equations",
    })

    for name, equation in EQUATIONS.items():
        figure = plt.figure(figsize=(0.01, 0.01), dpi=120)
        figure.patch.set_alpha(0)
        figure.text(0, 0, f"${equation}$", color="#000000", fontsize=14)
        figure.savefig(
            output / f"{name}.svg",
            format="svg",
            transparent=True,
            bbox_inches="tight",
            pad_inches=0.02,
            metadata={"Date": None},
        )
        plt.close(figure)


if __name__ == "__main__":
    main()
