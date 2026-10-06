(()=>{var HN=Object.create;var fh=Object.defineProperty;var KN=Object.getOwnPropertyDescriptor;var WN=Object.getOwnPropertyNames;var jN=Object.getPrototypeOf,QN=Object.prototype.hasOwnProperty;var ji=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}},md=(e,t)=>{for(var r in t)fh(e,r,{get:t[r],enumerable:!0})},YN=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of WN(t))!QN.call(e,o)&&o!==r&&fh(e,o,{get:()=>t[o],enumerable:!(n=KN(t,o))||n.enumerable});return e};var Pv=(e,t,r)=>(r=e!=null?HN(jN(e)):{},YN(t||!e||!e.__esModule?fh(r,"default",{value:e,enumerable:!0}):r,e));var JT=ji((Gz,ZT)=>{ZT.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}});var tS=ji((Uz,eS)=>{var mD=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,gD=JT();eS.exports=function(e){var t=0,r,n=!0,o={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(mD,function(a){if(a==="="){n=!0,t++;return}n?t===0?((gD[a]||e.charAt(e.length-2)==="/")&&(o.voidElement=!0),o.name=a):(o.attrs[r]=a.replace(/^['"]|['"]$/g,""),r=void 0):(r&&(o.attrs[r]=r),r=a),t++,n=!1}),o}});var nS=ji((zz,rS)=>{var hD=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"|'[^']*'|[^'">])+>)/g,fD=tS(),yD=Object.create?Object.create(null):{};function Mf(e,t,r,n,o){var a=t.indexOf("<",n),i=t.slice(n,a===-1?void 0:a);/^\s*$/.test(i)&&(i=" "),(!o&&a>-1&&r+e.length>=0||i!==" ")&&e.push({type:"text",content:i})}rS.exports=function(t,r){r||(r={}),r.components||(r.components=yD);var n=[],o,a=-1,i=[],s={},c=!1;return t.replace(hD,function(l,p){if(c){if(l!=="</"+o.name+">")return;c=!1}var y=l.charAt(1)!=="/",x=l.indexOf("<!--")===0,M=p+l.length,L=t.charAt(M),T;y&&!x&&(a++,o=fD(l),o.type==="tag"&&r.components[o.name]&&(o.type="component",c=!0),!o.voidElement&&!c&&L&&L!=="<"&&Mf(o.children,t,a,M,r.ignoreWhitespace),s[o.tagName]=o,a===0&&n.push(o),T=i[a-1],T&&T.children.push(o),i[a]=o),(x||!y||o.voidElement)&&(x||a--,!c&&L!=="<"&&L&&(T=a===-1?n:i[a].children,Mf(T,t,a,M,r.ignoreWhitespace)))}),!n.length&&t.length&&Mf(n,t,0,0,r.ignoreWhitespace),n}});var iS=ji((Hz,aS)=>{function bD(e){var t=[];for(var r in e)t.push(r+'="'+e[r]+'"');return t.length?" "+t.join(" "):""}function oS(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?bD(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(oS,"")+"</"+t.name+">"}}aS.exports=function(e){return e.reduce(function(t,r){return t+oS("",r)},"")}});var cS=ji((Kz,sS)=>{sS.exports={parse:nS(),stringify:iS()}});var DS=ji((RS,$f)=>{(function(e){if(typeof RS=="object"&&typeof $f!="undefined")$f.exports=e();else{var t;typeof window!="undefined"?t=window:typeof global!="undefined"?t=global:typeof self!="undefined"?t=self:t=this,t.Bugsnag=e()}})(function(){var e,t,r,n=function(m){var f;return function(g){return f||m(f={exports:{},parent:g},f.exports),f.exports}},o=n(function(d,m){var f=yv.createUrlFilter,g=yv.getDuration;function v(C,E){return C===void 0&&(C=[]),E===void 0&&(E=window),{name:"requestTracker",load:function(G){try{var R=mv(E),Q=hv(E),W=f(G,C);return{fetchTracker:R,xhrTracker:Q,urlFilter:W,getDuration:g}}catch(Y){throw G._logger.error("Failed to load request tracker:",Y),new Error("Request tracking is not available: "+Y.message)}}}}d.exports={RequestTracker:lh,createFetchTracker:mv,createXhrTracker:hv,createUrlFilter:f,getDuration:g,createRequestTrackerPlugin:v}}),a=n(function(d,m){(function(f,g){"use strict";typeof e=="function"&&e.amd?e("stackframe",[],g):typeof m=="object"?d.exports=g():f.StackFrame=g()})(this,function(){"use strict";function f(ye){return!isNaN(parseFloat(ye))&&isFinite(ye)}function g(ye){return ye.charAt(0).toUpperCase()+ye.substring(1)}function v(ye){return function(){return this[ye]}}var C=["isConstructor","isEval","isNative","isToplevel"],E=["columnNumber","lineNumber"],G=["fileName","functionName","source"],R=["args"],Q=["evalOrigin"],W=C.concat(E,G,R,Q);function Y(ye){if(ye)for(var X=0;X<W.length;X++)ye[W[X]]!==void 0&&this["set"+g(W[X])](ye[W[X]])}Y.prototype={getArgs:function(){return this.args},setArgs:function(ye){if(Object.prototype.toString.call(ye)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=ye},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(ye){if(ye instanceof Y)this.evalOrigin=ye;else if(ye instanceof Object)this.evalOrigin=new Y(ye);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var ye=this.getFileName()||"",X=this.getLineNumber()||"",Me=this.getColumnNumber()||"",dt=this.getFunctionName()||"";return this.getIsEval()?ye?"[eval] ("+ye+":"+X+":"+Me+")":"[eval]:"+X+":"+Me:dt?dt+" ("+ye+":"+X+":"+Me+")":ye+":"+X+":"+Me}},Y.fromString=function(X){var Me=X.indexOf("("),dt=X.lastIndexOf(")"),Yt=X.substring(0,Me),It=X.substring(Me+1,dt).split(","),jr=X.substring(dt+1);if(jr.indexOf("@")===0)var $n=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(jr,""),wn=$n[1],gh=$n[2],hh=$n[3];return new Y({functionName:Yt,args:It||void 0,fileName:wn,lineNumber:gh||void 0,columnNumber:hh||void 0})};for(var he=0;he<C.length;he++)Y.prototype["get"+g(C[he])]=v(C[he]),Y.prototype["set"+g(C[he])]=(function(ye){return function(X){this[ye]=!!X}})(C[he]);for(var je=0;je<E.length;je++)Y.prototype["get"+g(E[je])]=v(E[je]),Y.prototype["set"+g(E[je])]=(function(ye){return function(X){if(!f(X))throw new TypeError(ye+" must be a Number");this[ye]=Number(X)}})(E[je]);for(var Ke=0;Ke<G.length;Ke++)Y.prototype["get"+g(G[Ke])]=v(G[Ke]),Y.prototype["set"+g(G[Ke])]=(function(ye){return function(X){this[ye]=String(X)}})(G[Ke]);return Y})}),i=function(d,m,f){for(var g=f,v=0,C=d.length;v<C;v++)g=m(g,d[v],v,d);return g},s=function(d,m){return i(d,function(f,g,v,C){return m(g,v,C)?f.concat(g):f},[])},c=!{toString:null}.propertyIsEnumerable("toString"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(d){var m=[],f;for(f in d)Object.prototype.hasOwnProperty.call(d,f)&&m.push(f);if(!c)return m;for(var g=0,v=l.length;g<v;g++)Object.prototype.hasOwnProperty.call(d,l[g])&&m.push(l[g]);return m},y=function(d){return Object.prototype.toString.call(d)==="[object Array]"},x=function(d,m){return i(d,function(f,g,v,C){return f===!0||g===m},!1)},M=function(d,m){return d===void 0&&(d=1),m===void 0&&(m=1/0),function(f){return typeof f=="number"&&parseInt(""+f,10)===f&&f>=d&&f<=m}},L=function(d){return typeof d=="string"&&!!d.length},T=function(d){return typeof d=="function"||y(d)&&s(d,function(m){return typeof m=="function"}).length===d.length},w=["navigation","request","process","log","user","state","error","manual"],k={},V=function(){return{unhandledExceptions:!0,unhandledRejections:!0}};k.schema={apiKey:{defaultValue:function(){return null},message:"is required",validate:L},appVersion:{defaultValue:function(){},message:"should be a string",validate:function(d){return d===void 0||L(d)}},appType:{defaultValue:function(){},message:"should be a string",validate:function(d){return d===void 0||L(d)}},autoDetectErrors:{defaultValue:function(){return!0},message:"should be true|false",validate:function(d){return d===!0||d===!1}},enabledErrorTypes:{defaultValue:function(){return V()},message:"should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",allowPartialObject:!0,validate:function(d){if(typeof d!="object"||!d)return!1;var m=p(d),f=p(V());return!(s(m,function(g){return x(f,g)}).length<m.length||s(p(d),function(g){return typeof d[g]!="boolean"}).length>0)}},onError:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:T},onSession:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:T},onBreadcrumb:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:T},endpoints:{defaultValue:function(d){return typeof d=="undefined"?{notify:"https://notify.bugsnag.com",sessions:"https://sessions.bugsnag.com"}:{notify:null,sessions:null}},message:"should be an object containing endpoint URLs { notify, sessions }",validate:function(d){return d&&typeof d=="object"&&L(d.notify)&&L(d.sessions)&&s(p(d),function(m){return!x(["notify","sessions"],m)}).length===0}},autoTrackSessions:{defaultValue:function(d){return!0},message:"should be true|false",validate:function(d){return d===!0||d===!1}},enabledReleaseStages:{defaultValue:function(){return null},message:"should be an array of strings",validate:function(d){return d===null||y(d)&&s(d,function(m){return typeof m=="string"}).length===d.length}},releaseStage:{defaultValue:function(){return"production"},message:"should be a string",validate:function(d){return typeof d=="string"&&d.length}},maxBreadcrumbs:{defaultValue:function(){return 25},message:"should be a number \u2264100",validate:function(d){return M(0,100)(d)}},enabledBreadcrumbTypes:{defaultValue:function(){return w},message:"should be null or a list of available breadcrumb types ("+w.join(",")+")",validate:function(d){return d===null||y(d)&&i(d,function(m,f){return m===!1?m:x(w,f)},!0)}},context:{defaultValue:function(){},message:"should be a string",validate:function(d){return d===void 0||typeof d=="string"}},user:{defaultValue:function(){return{}},message:"should be an object with { id, email, name } properties",validate:function(d){return d===null||d&&i(p(d),function(m,f){return m&&x(["id","email","name"],f)},!0)}},metadata:{defaultValue:function(){return{}},message:"should be an object",validate:function(d){return typeof d=="object"&&d!==null}},logger:{defaultValue:function(){},message:"should be null or an object with methods { debug, info, warn, error }",validate:function(d){return!d||d&&i(["debug","info","warn","error"],function(m,f){return m&&typeof d[f]=="function"},!0)}},redactedKeys:{defaultValue:function(){return["password"]},message:"should be an array of strings|regexes",validate:function(d){return y(d)&&d.length===s(d,function(m){return typeof m=="string"||m&&typeof m.test=="function"}).length}},plugins:{defaultValue:function(){return[]},message:"should be an array of plugin objects",validate:function(d){return y(d)&&d.length===s(d,function(m){return m&&typeof m=="object"&&typeof m.load=="function"}).length}},featureFlags:{defaultValue:function(){return[]},message:'should be an array of objects that have a "name" property',validate:function(d){return y(d)&&d.length===s(d,function(m){return m&&typeof m=="object"&&typeof m.name=="string"}).length}},reportUnhandledPromiseRejectionsAsHandled:{defaultValue:function(){return!1},message:"should be true|false",validate:function(d){return d===!0||d===!1}},sendPayloadChecksums:{defaultValue:function(){return!1},message:"should be true|false",validate:function(d){return d===!0||d===!1}}};var j={};(function(d,m){"use strict";typeof e=="function"&&e.amd?e("error-stack-parser",["stackframe"],m):typeof j=="object"?j=m(a({})):d.ErrorStackParser=m(d.StackFrame)})(this,function(m){"use strict";var f=/(^|@)\S+:\d+/,g=/^\s*at .*(\S+:\d+|\(native\))/m,v=/^(eval@)?(\[native code])?$/;return{parse:function(E){if(typeof E.stacktrace!="undefined"||typeof E["opera#sourceloc"]!="undefined")return this.parseOpera(E);if(E.stack&&E.stack.match(g))return this.parseV8OrIE(E);if(E.stack)return this.parseFFOrSafari(E);throw new Error("Cannot parse given Error object")},extractLocation:function(E){if(E.indexOf(":")===-1)return[E];var G=/(.+?)(?::(\d+))?(?::(\d+))?$/,R=G.exec(E.replace(/[()]/g,""));return[R[1],R[2]||void 0,R[3]||void 0]},parseV8OrIE:function(E){var G=E.stack.split(`
`).filter(function(R){return!!R.match(g)},this);return G.map(function(R){R.indexOf("(eval ")>-1&&(R=R.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var Q=R.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),W=Q.match(/ (\(.+\)$)/);Q=W?Q.replace(W[0],""):Q;var Y=this.extractLocation(W?W[1]:Q),he=W&&Q||void 0,je=["eval","<anonymous>"].indexOf(Y[0])>-1?void 0:Y[0];return new m({functionName:he,fileName:je,lineNumber:Y[1],columnNumber:Y[2],source:R})},this)},parseFFOrSafari:function(E){var G=E.stack.split(`
`).filter(function(R){return!R.match(v)},this);return G.map(function(R){if(R.indexOf(" > eval")>-1&&(R=R.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),R.indexOf("@")===-1&&R.indexOf(":")===-1)return new m({functionName:R});var Q=/((.*".+"[^@]*)?[^@]*)(?:@)/,W=R.match(Q),Y=W&&W[1]?W[1]:void 0,he=this.extractLocation(R.replace(Q,""));return new m({functionName:Y,fileName:he[0],lineNumber:he[1],columnNumber:he[2],source:R})},this)},parseOpera:function(E){return!E.stacktrace||E.message.indexOf(`
`)>-1&&E.message.split(`
`).length>E.stacktrace.split(`
`).length?this.parseOpera9(E):E.stack?this.parseOpera11(E):this.parseOpera10(E)},parseOpera9:function(E){for(var G=/Line (\d+).*script (?:in )?(\S+)/i,R=E.message.split(`
`),Q=[],W=2,Y=R.length;W<Y;W+=2){var he=G.exec(R[W]);he&&Q.push(new m({fileName:he[2],lineNumber:he[1],source:R[W]}))}return Q},parseOpera10:function(E){for(var G=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,R=E.stacktrace.split(`
`),Q=[],W=0,Y=R.length;W<Y;W+=2){var he=G.exec(R[W]);he&&Q.push(new m({functionName:he[3]||void 0,fileName:he[2],lineNumber:he[1],source:R[W]}))}return Q},parseOpera11:function(E){var G=E.stack.split(`
`).filter(function(R){return!!R.match(f)&&!R.match(/^Error created at/)},this);return G.map(function(R){var Q=R.split("@"),W=this.extractLocation(Q.pop()),Y=Q.shift()||"",he=Y.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0,je;Y.match(/\(([^)]*)\)/)&&(je=Y.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var Ke=je===void 0||je==="[arguments not available]"?void 0:je.split(",");return new m({functionName:he,args:Ke,fileName:W[0],lineNumber:W[1],columnNumber:W[2],source:R})},this)}}});var te=j,Te={};(function(d,m){"use strict";typeof e=="function"&&e.amd?e("stack-generator",["stackframe"],m):typeof Te=="object"?Te=m(a({})):d.StackGenerator=m(d.StackFrame)})(this,function(d){return{backtrace:function(f){var g=[],v=10;typeof f=="object"&&typeof f.maxStackSize=="number"&&(v=f.maxStackSize);for(var C=arguments.callee;C&&g.length<v&&C.arguments;){for(var E=new Array(C.arguments.length),G=0;G<E.length;++G)E[G]=C.arguments[G];/function(?:\s+([\w$]+))+\s*\(/.test(C.toString())?g.push(new d({functionName:RegExp.$1||void 0,args:E})):g.push(new d({args:E}));try{C=C.caller}catch(R){break}}return g}}});var P=function(d){return!!d&&(!!d.stack||!!d.stacktrace||!!d["opera#sourceloc"])&&typeof(d.stack||d.stacktrace||d["opera#sourceloc"])=="string"&&d.stack!==d.name+": "+d.message},D=function(d,m){return i(d,function(f,g,v,C){return f.concat(m(g,v,C))},[])},B=function(d){for(var m=1;m<arguments.length;m++){var f=arguments[m];for(var g in f)Object.prototype.hasOwnProperty.call(f,g)&&(d[g]=f[g])}return d},I=function(d,m,f,g){var v;if(m){var C;if(f===null)return Ie(d,m);typeof f=="object"&&(C=f),typeof f=="string"&&(C=(v={},v[f]=g,v)),C&&(m==="__proto__"||m==="constructor"||m==="prototype"||(d[m]||(d[m]={}),d[m]=B({},d[m],C)))}},oe=function(d,m,f){if(typeof m=="string"){if(!f)return d[m];if(d[m])return d[m][f]}},Ie=function(d,m,f){if(typeof m=="string"){if(!f){delete d[m];return}m==="__proto__"||m==="constructor"||m==="prototype"||d[m]&&delete d[m][f]}},_t={add:I,get:oe,clear:Ie},yr=function(d,m,f,g){var v=g&&g.redactedKeys?g.redactedKeys:[],C=g&&g.redactedPaths?g.redactedPaths:[];return JSON.stringify(Ga(d,v,C),m,f)},cr=20,_o=25e3,Lo=8,lo="...";function $a(d){return d instanceof Error||/^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(d))}function Et(d){return"[Throws: "+(d?d.message:"?")+"]"}function Ct(d,m){for(var f=0,g=d.length;f<g;f++)if(d[f]===m)return!0;return!1}function bt(d,m){for(var f=0,g=d.length;f<g;f++)if(m.indexOf(d[f])===0)return!0;return!1}function lr(d,m){for(var f=0,g=d.length;f<g;f++)if(typeof d[f]=="string"&&d[f].toLowerCase()===m.toLowerCase()||d[f]&&typeof d[f].test=="function"&&d[f].test(m))return!0;return!1}function Wr(d){return Object.prototype.toString.call(d)==="[object Array]"}function qe(d,m){try{return d[m]}catch(f){return Et(f)}}function Ga(d,m,f){var g=[],v=0;function C(E,G){function R(){return G.length>Lo&&v>_o}if(v++,G.length>cr||R())return lo;if(E===null||typeof E!="object")return E;if(Ct(g,E))return"[Circular]";if(g.push(E),typeof E.toJSON=="function")try{v--;var Q=C(E.toJSON(),G);return g.pop(),Q}catch(Me){return Et(Me)}var W=$a(E);if(W){v--;var Y=C({name:E.name,message:E.message},G);return g.pop(),Y}if(Wr(E)){for(var he=[],je=0,Ke=E.length;je<Ke;je++){if(R()){he.push(lo);break}he.push(C(E[je],G.concat("[]")))}return g.pop(),he}var ye={};try{for(var X in E)if(Object.prototype.hasOwnProperty.call(E,X)){if(bt(f,G.join("."))&&lr(m,X)){ye[X]="[REDACTED]";continue}if(R()){ye[X]=lo;break}ye[X]=C(qe(E,X),G.concat(X))}}catch(Me){}return g.pop(),ye}return C(d,[])}function ld(d,m,f,g){if(typeof f=="string"){g===void 0?g=null:g!==null&&typeof g!="string"&&(g=yr(g));var v=m[f];if(typeof v=="number"){d[v]={name:f,variant:g};return}d.push({name:f,variant:g}),m[f]=d.length-1}}function PP(d,m,f){if(y(m)){for(var g=0;g<m.length;++g){var v=m[g];v===null||typeof v!="object"||ld(d,f,v.name,v.variant)}return d}}function NP(d){return D(s(d,Boolean),function(m){var f=m.name,g=m.variant,v={featureFlag:f};return typeof g=="string"&&(v.variant=g),v})}function _P(d,m,f){var g=m[f];typeof g=="number"&&(d[g]=null,delete m[f])}var Ua={add:ld,clear:_P,merge:PP,toEventApi:NP},LP=RP;function RP(d){switch(Object.prototype.toString.call(d)){case"[object Error]":return!0;case"[object Exception]":return!0;case"[object DOMException]":return!0;default:return d instanceof Error}}var ud=LP;function Zg(){return Zg=Object.assign?Object.assign.bind():function(d){for(var m=1;m<arguments.length;m++){var f=arguments[m];for(var g in f)({}).hasOwnProperty.call(f,g)&&(d[g]=f[g])}return d},Zg.apply(null,arguments)}var aa=(function(){function d(f,g,v,C,E){v===void 0&&(v=[]),C===void 0&&(C=OP()),this.apiKey=void 0,this.context=void 0,this.groupingHash=void 0,this.originalError=E,this._handledState=C,this.severity=this._handledState.severity,this.unhandled=this._handledState.unhandled,this.app={},this.device={},this.request={},this.response={},this.breadcrumbs=[],this.threads=[],this._metadata={},this._features=[],this._featuresIndex={},this._user={},this._session=void 0,this._correlation=void 0,this._groupingDiscriminator=void 0,this.errors=[ev(f,g,d.__type,v)]}var m=d.prototype;return m.addMetadata=function(g,v,C){return _t.add(this._metadata,g,v,C)},m.setTraceCorrelation=function(g,v){typeof g=="string"&&(this._correlation=Zg({traceId:g},typeof v=="string"?{spanId:v}:{}))},m.getGroupingDiscriminator=function(){return this._groupingDiscriminator},m.setGroupingDiscriminator=function(g){var v=this._groupingDiscriminator;return(typeof g=="string"||g===null||g===void 0)&&(this._groupingDiscriminator=g),v},m.getMetadata=function(g,v){return _t.get(this._metadata,g,v)},m.clearMetadata=function(g,v){return _t.clear(this._metadata,g,v)},m.addFeatureFlag=function(g,v){v===void 0&&(v=null),Ua.add(this._features,this._featuresIndex,g,v)},m.addFeatureFlags=function(g){Ua.merge(this._features,g,this._featuresIndex)},m.getFeatureFlags=function(){return Ua.toEventApi(this._features)},m.clearFeatureFlag=function(g){Ua.clear(this._features,this._featuresIndex,g)},m.clearFeatureFlags=function(){this._features=[],this._featuresIndex={}},m.getUser=function(){return this._user},m.setUser=function(g,v,C){this._user={id:g,email:v,name:C}},m.toJSON=function(){return{payloadVersion:"4",exceptions:D(this.errors,function(g){return B({},g,{message:g.errorMessage})}),severity:this.severity,unhandled:this._handledState.unhandled,severityReason:this._handledState.severityReason,app:this.app,device:this.device,request:this.request,response:this.response,breadcrumbs:this.breadcrumbs,context:this.context,groupingHash:this.groupingHash,groupingDiscriminator:this._groupingDiscriminator,metaData:this._metadata,user:this._user,session:this._session,featureFlags:this.getFeatureFlags(),correlation:this._correlation}},d})(),DP=function(d){var m={file:d.fileName,method:qP(d.functionName),lineNumber:d.lineNumber,columnNumber:d.columnNumber,code:void 0,inProject:void 0};return m.lineNumber>-1&&!m.file&&!m.method&&(m.file="global code"),m},qP=function(d){return/^global code$/i.test(d)?"global code":d},OP=function(){return{unhandled:!1,severity:"warning",severityReason:{type:"handledException"}}},Jx=function(d){return typeof d=="string"?d:""};function ev(d,m,f,g){return{errorClass:Jx(d),errorMessage:Jx(m),type:f,stacktrace:i(g,function(v,C){var E=DP(C);try{return JSON.stringify(E)==="{}"?v:v.concat(E)}catch(G){return v}},[])}}function tv(d){return d.cause?[d].concat(tv(d.cause)):[d]}aa.getStacktrace=function(d,m,f){if(P(d))return te.parse(d).slice(m);try{return s(Te.backtrace(),function(g){return(g.functionName||"").indexOf("StackGenerator$$")===-1}).slice(1+f)}catch(g){return[]}},aa.create=function(d,m,f,g,v,C){v===void 0&&(v=0);var E=nv(d,m,g,C),G=E[0],R=E[1],Q;try{var W=aa.getStacktrace(G,R>0?1+R+v:0,1+v);Q=new aa(G.name,G.message,W,f,d)}catch(Ke){Q=new aa(G.name,G.message,[],f,d)}if(G.name==="InvalidError"&&Q.addMetadata(""+g,"non-error parameter",rv(d)),G.cause){var Y,he=tv(G).slice(1),je=D(he,function(Ke){var ye=ud(Ke)&&P(Ke)?te.parse(Ke):[],X=nv(Ke,!0,"error cause"),Me=X[0];return Me.name==="InvalidError"&&Q.addMetadata("error cause",rv(Ke)),ev(Me.name,Me.message,aa.__type,ye)});(Y=Q.errors).push.apply(Y,je)}return Q};var rv=function(d){return d===null?"null":d===void 0?"undefined":d},nv=function(d,m,f,g){var v,C=0,E=function(G){var R=f==="error cause"?"was":"received";g&&g.warn(f+" "+R+' a non-error: "'+G+'"');var Q=new Error(f+" "+R+' a non-error. See "'+f+'" tab for more detail.');return Q.name="InvalidError",Q};if(!m)ud(d)?v=d:(v=E(typeof d),C+=2);else switch(typeof d){case"string":case"number":case"boolean":v=new Error(String(d)),C+=1;break;case"function":v=E("function"),C+=2;break;case"object":d!==null&&ud(d)?v=d:d!==null&&FP(d)?(v=new Error(d.message||d.errorMessage),v.name=d.name||d.errorClass,C+=1):(v=E(d===null?"null":"unsupported object"),C+=2);break;default:v=E("nothing"),C+=2}if(!P(v))try{throw v}catch(G){P(G)&&(v=G,C=1)}return[v,C]};aa.__type="browserjs";var FP=function(d){return(typeof d.name=="string"||typeof d.errorClass=="string")&&(typeof d.message=="string"||typeof d.errorMessage=="string")},Jg=aa,BP=(function(){function d(f,g,v,C){C===void 0&&(C=new Date),this.type=v,this.message=f,this.metadata=g,this.timestamp=C}var m=d.prototype;return m.toJSON=function(){return{type:this.type,name:this.message,timestamp:this.timestamp,metaData:this.metadata}},d})(),eh=BP;function VP(d,m){var f="000000000"+d;return f.substr(f.length-m)}var th=VP,ov=typeof window=="object"?window:self,av=0;for(var $P in ov)Object.hasOwnProperty.call(ov,$P)&&av++;var GP=navigator.mimeTypes?navigator.mimeTypes.length:0,UP=th((GP+navigator.userAgent.length).toString(36)+av.toString(36),4);function zP(){return UP}var HP=zP;function KP(d){return typeof d=="string"&&/^c[a-z0-9]{20,32}$/.test(d)}var WP=KP;function jP(d){var m=4,f=36,g=Math.pow(f,m),v=0;function C(){return th((Math.random()*g<<0).toString(f),m)}function E(){return v=v<g?v:0,v++,v-1}function G(){var R="c",Q=new Date().getTime().toString(f),W=th(E().toString(f),m),Y=d(),he=C()+C();return R+Q+W+Y+he}return G.fingerprint=d,G.isCuid=WP,G}var QP=jP,YP=QP(HP),rh=YP,XP=(function(){function d(){this.id=rh(),this.startedAt=new Date,this._handled=0,this._unhandled=0,this._user={},this.app={},this.device={}}var m=d.prototype;return m.getUser=function(){return this._user},m.setUser=function(g,v,C){this._user={id:g,email:v,name:C}},m.toJSON=function(){return{id:this.id,startedAt:this.startedAt,events:{handled:this._handled,unhandled:this._unhandled}}},m._track=function(g){this[g._handledState.unhandled?"_unhandled":"_handled"]+=1},d})(),nh=XP,ZP=function(d,m,f){var g=0,v=function(){if(g>=d.length)return f(null,!0);m(d[g],function(C,E){if(C)return f(C);if(E===!1)return f(null,!1);g++,v()})};v()},JP=function(d,m,f,g){var v=function(C,E){if(typeof C!="function")return E(null);try{if(C.length!==2){var G=C(m);return G&&typeof G.then=="function"?G.then(function(R){return setTimeout(function(){return E(null,R)})},function(R){setTimeout(function(){return f(R),E(null,!0)})}):E(null,G)}C(m,function(R,Q){if(R)return f(R),E(null);E(null,Q)})}catch(R){f(R),E(null)}};ZP(d,v,g)},iv=function(d,m,f,g){for(var v=!1,C=d.slice();!v&&C.length;)try{v=C.pop()(m)===!1}catch(E){g.error("Error occurred in "+f+" callback, continuing anyway\u2026"),g.error(E)}return v},eN=Ua.add,tN=Ua.clear,oh=Ua.merge,rN="00000",nN="https://notify.bugsnag.smartbear.com",oN="https://sessions.bugsnag.smartbear.com",ia=function(){},aN=(function(){function d(f,g,v,C){var E=this;g===void 0&&(g=k.schema),v===void 0&&(v=[]),this._notifier=C,this._config={},this._schema=g,this._delivery={sendSession:ia,sendEvent:ia},this._logger={debug:ia,info:ia,warn:ia,error:ia},this._plugins={},this._breadcrumbs=[],this._session=null,this._metadata={},this._featuresIndex={},this._features=[],this._context=void 0,this._user={},this._groupingDiscriminator=void 0,this._cbs={e:[],s:[],sp:[],b:[]},this.Client=d,this.Event=Jg,this.Breadcrumb=eh,this.Session=nh,this._config=this._configure(f,v),D(v.concat(this._config.plugins),function(Q){Q&&E._loadPlugin(Q)}),this._depth=1;var G=this,R=this.notify;this.notify=function(){return R.apply(G,arguments)}}var m=d.prototype;return m.addMetadata=function(g,v,C){return _t.add(this._metadata,g,v,C)},m.getMetadata=function(g,v){return _t.get(this._metadata,g,v)},m.clearMetadata=function(g,v){return _t.clear(this._metadata,g,v)},m.addFeatureFlag=function(g,v){v===void 0&&(v=null),eN(this._features,this._featuresIndex,g,v)},m.addFeatureFlags=function(g){oh(this._features,g,this._featuresIndex)},m.clearFeatureFlag=function(g){tN(this._features,this._featuresIndex,g)},m.clearFeatureFlags=function(){this._features=[],this._featuresIndex={}},m.getContext=function(){return this._context},m.setContext=function(g){this._context=g},m.getGroupingDiscriminator=function(){return this._groupingDiscriminator},m.setGroupingDiscriminator=function(g){var v=this._groupingDiscriminator;return(typeof g=="string"||g===null||g===void 0)&&(this._groupingDiscriminator=g),v},m._configure=function(g,v){var C=i(v,function(Q,W){return W&&W.configSchema?B({},Q,W.configSchema):Q},this._schema);g.endpoints||(g.sendPayloadChecksums="sendPayloadChecksums"in g?g.sendPayloadChecksums:!0);var E=i(p(C),function(Q,W){var Y=C[W].defaultValue(g[W]);if(g[W]!==void 0){var he=C[W].validate(g[W]);he?C[W].allowPartialObject?Q.config[W]=B(Y,g[W]):Q.config[W]=g[W]:(Q.errors[W]=C[W].message,Q.config[W]=Y)}else Q.config[W]=Y;return Q},{errors:{},config:{}}),G=E.errors,R=E.config;if(C.apiKey){if(!R.apiKey)throw new Error("No Bugsnag API Key set");/^[0-9a-f]{32}$/i.test(R.apiKey)||(G.apiKey="should be a string of 32 hexadecimal characters"),g.endpoints===void 0&&R.apiKey.indexOf(rN)===0&&(R.endpoints={notify:nN,sessions:oN})}return this._metadata=B({},R.metadata),oh(this._features,R.featureFlags,this._featuresIndex),this._user=B({},R.user),this._context=R.context,R.logger&&(this._logger=R.logger),R.onError&&(this._cbs.e=this._cbs.e.concat(R.onError)),R.onBreadcrumb&&(this._cbs.b=this._cbs.b.concat(R.onBreadcrumb)),R.onSession&&(this._cbs.s=this._cbs.s.concat(R.onSession)),p(G).length&&this._logger.warn(iN(G,g)),R},m.getUser=function(){return this._user},m.setUser=function(g,v,C){this._user={id:g,email:v,name:C}},m._loadPlugin=function(g){var v=g.load(this);g.name&&(this._plugins["~"+g.name+"~"]=v)},m.getPlugin=function(g){return this._plugins["~"+g+"~"]},m._setDelivery=function(g){this._delivery=g(this)},m.startSession=function(){var g=new nh;g.app.releaseStage=this._config.releaseStage,g.app.version=this._config.appVersion,g.app.type=this._config.appType,g._user=B({},this._user);var v=iv(this._cbs.s,g,"onSession",this._logger);return v?(this._logger.debug("Session not started due to onSession callback"),this):this._sessionDelegate.startSession(this,g)},m.addOnError=function(g,v){v===void 0&&(v=!1),this._cbs.e[v?"unshift":"push"](g)},m.removeOnError=function(g){this._cbs.e=s(this._cbs.e,function(v){return v!==g})},m._addOnSessionPayload=function(g){this._cbs.sp.push(g)},m.addOnSession=function(g){this._cbs.s.push(g)},m.removeOnSession=function(g){this._cbs.s=s(this._cbs.s,function(v){return v!==g})},m.addOnBreadcrumb=function(g,v){v===void 0&&(v=!1),this._cbs.b[v?"unshift":"push"](g)},m.removeOnBreadcrumb=function(g){this._cbs.b=s(this._cbs.b,function(v){return v!==g})},m.pauseSession=function(){return this._sessionDelegate.pauseSession(this)},m.resumeSession=function(){return this._sessionDelegate.resumeSession(this)},m.leaveBreadcrumb=function(g,v,C){if(g=typeof g=="string"?g:"",C=typeof C=="string"&&x(w,C)?C:"manual",v=typeof v=="object"&&v!==null?v:{},!!g){var E=new eh(g,v,C),G=iv(this._cbs.b,E,"onBreadcrumb",this._logger);if(G){this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback");return}this._breadcrumbs.push(E),this._breadcrumbs.length>this._config.maxBreadcrumbs&&(this._breadcrumbs=this._breadcrumbs.slice(this._breadcrumbs.length-this._config.maxBreadcrumbs))}},m._isBreadcrumbTypeEnabled=function(g){var v=this._config.enabledBreadcrumbTypes;return v===null||x(v,g)},m.notify=function(g,v,C){C===void 0&&(C=ia);var E=Jg.create(g,!0,void 0,"notify()",this._depth+1,this._logger);this._notify(E,v,C)},m._notify=function(g,v,C){var E=this;if(C===void 0&&(C=ia),g.app=B({},g.app,{releaseStage:this._config.releaseStage,version:this._config.appVersion,type:this._config.appType}),g.context=g.context||this._context,g._metadata=B({},g._metadata,this._metadata),g._user=B({},g._user,this._user),g.breadcrumbs=this._breadcrumbs.slice(),g.setGroupingDiscriminator(this._groupingDiscriminator),oh(g._features,this._features,g._featuresIndex),this._config.enabledReleaseStages!==null&&!x(this._config.enabledReleaseStages,this._config.releaseStage))return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"),C(null,g);var G=g.severity,R=function(W){E._logger.error("Error occurred in onError callback, continuing anyway\u2026"),E._logger.error(W)},Q=[].concat(this._cbs.e).concat(v);JP(Q,g,R,function(W,Y){if(W&&R(W),!Y)return E._logger.debug("Event not sent due to onError callback"),C(null,g);E._isBreadcrumbTypeEnabled("error")&&d.prototype.leaveBreadcrumb.call(E,g.errors[0].errorClass,{errorClass:g.errors[0].errorClass,errorMessage:g.errors[0].errorMessage,severity:g.severity},"error"),G!==g.severity&&(g._handledState.severityReason={type:"userCallbackSetSeverity"}),g.unhandled!==g._handledState.unhandled&&(g._handledState.severityReason.unhandledOverridden=!0,g._handledState.unhandled=g.unhandled),E._session&&(E._session._track(g),g._session=E._session),E._delivery.sendEvent({apiKey:g.apiKey||E._config.apiKey,notifier:E._notifier,events:[g]},function(he){return C(he,g)})})},d})(),iN=function(d,m){var f=new Error(`Invalid configuration
`+D(p(d),function(g){return"  - "+g+" "+d[g]+", got "+sN(m[g])}).join(`

`));return f},sN=function(d){switch(typeof d){case"string":case"number":case"object":return JSON.stringify(d);default:return String(d)}},ah=aN;function ih(){return ih=Object.assign?Object.assign.bind():function(d){for(var m=1;m<arguments.length;m++){var f=arguments[m];for(var g in f)({}).hasOwnProperty.call(f,g)&&(d[g]=f[g])}return d},ih.apply(null,arguments)}var sh=k.schema,cN={releaseStage:B({},sh.releaseStage,{defaultValue:function(){return/^localhost(:\d+)?$/.test(window.location.host)?"development":"production"}}),appType:ih({},sh.appType,{defaultValue:function(){return"browser"}}),logger:B({},sh.logger,{defaultValue:function(){return typeof console!="undefined"&&typeof console.debug=="function"?lN():void 0}})},lN=function(){var d={},m=console.log;return D(["debug","info","warn","error"],function(f){var g=console[f];d[f]=typeof g=="function"?g.bind(console,"[bugsnag]"):m.bind(console,"[bugsnag]")}),d},uN=function(d,m){return d===void 0&&(d=window),m===void 0&&(m="window onerror"),{load:function(f){if(!f._config.autoDetectErrors||!f._config.enabledErrorTypes.unhandledExceptions)return;function g(C,E,G,R,Q){if(G===0&&/Script error\.?/.test(C))f._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z");else{var W={severity:"error",unhandled:!0,severityReason:{type:"unhandledException"}},Y;if(Q)Y=f.Event.create(Q,!0,W,m,1),sv(Y.errors[0].stacktrace,E,G,R);else if(typeof C=="object"&&C!==null&&(!E||typeof E!="string")&&!G&&!R&&!Q){var he=C.type?"Event: "+C.type:"Error",je=C.message||C.detail||"";Y=f.Event.create({name:he,message:je},!0,W,m,1),Y.originalError=C,Y.addMetadata(m,{event:C,extraParameters:E})}else Y=f.Event.create(C,!0,W,m,1),sv(Y.errors[0].stacktrace,E,G,R);f._notify(Y)}try{v.apply(this,arguments)}catch(Ke){}}var v=d.onerror;d.onerror=g}}},sv=function(d,m,f,g){d[0]||d.push({});var v=d[0];!v.file&&typeof m=="string"&&(v.file=m),!v.lineNumber&&ch(f)&&(v.lineNumber=f),v.columnNumber||(ch(g)?v.columnNumber=g:window.event&&ch(window.event.errorCharacter)&&(v.columnNumber=window.event.errorCharacter))},ch=function(d){return typeof d=="number"&&String.call(d)!=="NaN"},dN,pN=function(d){d===void 0&&(d=window);var m={load:function(f){if(!(!f._config.autoDetectErrors||!f._config.enabledErrorTypes.unhandledRejections)){var g=function(v){var C=v.reason,E=!1;try{v.detail&&v.detail.reason&&(C=v.detail.reason,E=!0)}catch(Q){}var G=!f._config.reportUnhandledPromiseRejectionsAsHandled,R=f.Event.create(C,!1,{severity:"error",unhandled:G,severityReason:{type:"unhandledPromiseRejection"}},"unhandledrejection handler",1,f._logger);E&&D(R.errors[0].stacktrace,mN(C)),f._notify(R,function(Q){if(ud(Q.originalError)&&!Q.originalError.stack){var W;Q.addMetadata("unhandledRejection handler",(W={},W[Object.prototype.toString.call(Q.originalError)]={name:Q.originalError.name,message:Q.originalError.message,code:Q.originalError.code},W))}})};"addEventListener"in d?d.addEventListener("unhandledrejection",g):d.onunhandledrejection=function(v,C){g({detail:{reason:v,promise:C}})},dN=g}}};return m},mN=function(d){return function(m){m.file!==d.toString()&&m.method&&(m.method=m.method.replace(/^\s+/,""))}},cv=new Date,gN=function(){cv=new Date},hN={name:"appDuration",load:function(d){return d.addOnError(function(m){var f=new Date;m.app.duration=f-cv},!0),{reset:gN}}},lv="bugsnag-anonymous-id",fN=function(d){try{var m=d.localStorage,f=m.getItem(lv);return f&&rh.isCuid(f)||(f=rh(),m.setItem(lv,f)),f}catch(g){}},yN=function(d,m){return d===void 0&&(d=navigator),m===void 0&&(m=window),{load:function(f){var g={locale:d.browserLanguage||d.systemLanguage||d.userLanguage||d.language,userAgent:d.userAgent};m&&m.screen&&m.screen.orientation&&m.screen.orientation.type?g.orientation=m.screen.orientation.type:m&&m.document&&(g.orientation=m.document.documentElement.clientWidth>m.document.documentElement.clientHeight?"landscape":"portrait"),f._config.generateAnonymousId&&(g.id=fN(m)),f.addOnSession(function(v){v.device=B({},v.device,g),f._config.collectUserIp||uv(v)}),f.addOnError(function(v){v.device=B({},v.device,g,{time:new Date}),f._config.collectUserIp||uv(v)},!0)},configSchema:{generateAnonymousId:{validate:function(f){return f===!0||f===!1},defaultValue:function(){return!0},message:"should be true|false"}}}},uv=function(d){var m=d.getUser();(!m||!m.id)&&d.setUser(d.device.id)},bN=function(d){return d===void 0&&(d=window),{load:function(m){m.addOnError(function(f){f.context===void 0&&(f.context=d.location.pathname)},!0)}}},xN=function(d){return d===void 0&&(d=window),{load:function(m){m.addOnError(function(f){f.request&&f.request.url||(f.request=B({},f.request,{url:d.location.href}))},!0)}}},vN={load:function(d){var m=0;d.addOnError(function(f){if(m>=d._config.maxEvents)return d._logger.warn("Cancelling event send due to maxEvents per session limit of "+d._config.maxEvents+" being reached"),!1;m++}),d.resetEventCount=function(){m=0}},configSchema:{maxEvents:{defaultValue:function(){return 10},message:"should be a positive integer \u2264100",validate:function(d){return M(1,100)(d)}}}},dv={};dv.load=function(d){var m=/^(local-)?dev(elopment)?$/.test(d._config.releaseStage);m||!d._isBreadcrumbTypeEnabled("log")||D(wN,function(f){var g=console[f];console[f]=function(){for(var v=arguments.length,C=new Array(v),E=0;E<v;E++)C[E]=arguments[E];d.leaveBreadcrumb("Console output",i(C,function(G,R,Q){var W="[Unknown value]";try{W=String(R)}catch(Y){}if(W==="[object Object]")try{W=JSON.stringify(R)}catch(Y){}return G["["+Q+"]"]=W,G},{severity:f.indexOf("group")===0?"log":f}),"log"),g.apply(console,C)},console[f]._restore=function(){console[f]=g}})};var wN=s(["log","debug","info","warn","error"],function(d){return typeof console!="undefined"&&typeof console[d]=="function"}),TN=(function(){function d(){this.callbacks=[]}var m=d.prototype;return m.onStart=function(g){if(typeof g!="function")throw new Error("RequestTracker onStart callback must be a function");this.callbacks.push(g)},m.start=function(g){var v=this.callbacks.map(function(C){try{return C(g)}catch(E){return console.error("RequestTracker callback error:",E),null}}).filter(function(C){return C&&typeof C=="object"});return{onRequestEnd:function(C){v.forEach(function(E){if(typeof E.onRequestEnd=="function")try{E.onRequestEnd(C)}catch(G){console.error("RequestTracker onRequestEnd callback error:",G)}})},extraRequestHeaders:v.map(function(C){return C.extraRequestHeaders}).filter(function(C){return C&&typeof C=="object"}).reduce(function(C,E){return Object.assign(C,E)},{})}},m._reset=function(){this.callbacks=[]},d})(),lh=TN,pv=function(d){if(!d)return{};var m={};if(typeof d.entries=="function")for(var f=d.entries(),g=f.next();!g.done;){var v=g.value,C=v[0],E=v[1];m[C]=E,g=f.next()}else d.forEach&&d.forEach(function(G,R){m[R]=G});return m};function SN(d,m){if(m===void 0&&(m={}),!(!("fetch"in d)||d.fetch.polyfill)){if(!d.__bugsnag_fetch_tracker__){var f=new lh,g=d.fetch;d.fetch=function(C,E){E===void 0&&(E={});var G=null,R="GET";C&&typeof C=="object"?(G=C.url,E&&"method"in E?R=E.method:C&&"method"in C&&(R=C.method)):(G=C,E&&"method"in E&&(R=E.method)),R===void 0&&(R="GET");var Q={};E&&E.headers&&(E.headers instanceof Headers?Q=pv(E.headers):typeof E.headers=="object"&&(Q=E.headers));var W=Date.now(),Y={url:String(G),method:String(R),startTime:W,type:"fetch",input:C,headers:Q,body:E?E.body:void 0},he=f.start(Y),je=he.onRequestEnd;return g.call.apply(g,[this].concat(Array.prototype.slice.call(arguments))).then(function(Ke){return je({endTime:Date.now(),status:Ke.status,state:"success",headers:pv(Ke.headers)}),Ke},function(Ke){throw je({endTime:Date.now(),state:"error",error:Ke}),Ke})},d.__bugsnag_fetch_tracker__=f}return d.__bugsnag_fetch_tracker__}}var mv=SN,MN=function(d){if(!d)return{};var m=d.trim().split(/[\r\n]+/),f={};return m.forEach(function(g){var v=g.split(": "),C=v.shift(),E=v.join(": ");f[C]=E}),f},gv=function(m){var f=m.response,g=m.responseType;if(f!=null)switch(g){case"arraybuffer":case"blob":return"[Binary Data]";case"document":return"[Document]";case"json":try{return JSON.stringify(f)}catch(v){return"[Unserializable JSON]"}default:return String(f)}};function kN(d,m){if(m===void 0&&(m={}),!(!("addEventListener"in d.XMLHttpRequest.prototype)||!("WeakMap"in d))){if(!d.__bugsnag_xhr_tracker__){var f=new lh,g=new WeakMap,v=new WeakMap,C=d.XMLHttpRequest.prototype.open,E=d.XMLHttpRequest.prototype.send,G=d.XMLHttpRequest.prototype.setRequestHeader;d.XMLHttpRequest.prototype.open=function(Q,W){this&&g.set(this,{method:String(Q),url:String(W)}),C.apply(this,arguments)},d.XMLHttpRequest.prototype.setRequestHeader=function(Q,W){if(this){var Y=g.get(this);Y&&(Y.headers=Y.headers||{},Y.headers[String(Q)]=(Y.headers[String(Q)]||"")+String(W))}G.apply(this,arguments)},d.XMLHttpRequest.prototype.send=function(Q){var W=this,Y=g.get(this);if(Y){var he=v.get(this);he&&(this.removeEventListener("load",he.load),this.removeEventListener("error",he.error));var je=Date.now(),Ke={url:Y.url,method:Y.method,startTime:je,type:"xmlhttprequest",body:Q,headers:Y.headers},ye=f.start(Ke),X=ye.onRequestEnd,Me=function(){return MN(W.getAllResponseHeaders())},dt=function(){X({endTime:Date.now(),status:W.status,state:"success",headers:Me(),body:gv(W)})},Yt=function(){X({endTime:Date.now(),state:"error",headers:Me(),body:gv(W)})};this.addEventListener("load",dt),this.addEventListener("error",Yt),this&&v.set(this,{load:dt,error:Yt})}E.apply(this,arguments)},d.__bugsnag_xhr_tracker__=f}return d.__bugsnag_xhr_tracker__}}var hv=kN;function fv(d,m){if(m===void 0&&(m=[]),!d||typeof d!="string")return!0;var f=d.replace(/\?.*$/,"");return x(m,f)}function EN(d,m){m===void 0&&(m=[]);var f=[d._config.endpoints.notify,d._config.endpoints.sessions].concat(m).filter(Boolean);return function(g){return fv(g,f)}}function CN(d){return d&&Date.now()-d}var yv={shouldIgnoreUrl:fv,createUrlFilter:EN,getDuration:CN},uh="request",IN=function(d,m){d===void 0&&(d=[]),m===void 0&&(m=window);var f=[],g={load:function(v){if(!v._isBreadcrumbTypeEnabled("request"))return;var C=v.getPlugin("requestTracker");if(!C)try{var E=o({}),G=E.createRequestTrackerPlugin,R=G(d,m);v._loadPlugin(R),C=v.getPlugin("requestTracker")}catch(W){v._logger.warn("Failed to auto-load request tracker, falling back to direct monkey-patching:",W.message)}if(C)return Q(C);function Q(W){var Y=W.fetchTracker,he=W.xhrTracker,je=W.urlFilter,Ke=W.getDuration,ye=function(X){if(!je(X.url))return{onRequestEnd:function(Me){var dt=Ke(X.startTime),Yt={method:X.method,status:Me.status,url:X.url,duration:dt},It=X.type==="fetch"?"fetch()":"XMLHttpRequest";Me.state==="error"?v.leaveBreadcrumb(It+" error",{method:X.method,url:X.url,duration:dt},uh):Me.status>=400?v.leaveBreadcrumb(It+" failed",Yt,uh):v.leaveBreadcrumb(It+" succeeded",Yt,uh)}}};Y&&(Y.onStart(ye),f.push(Y._restore)),he&&(he.onStart(ye),f.push(he._restore))}}};return g},bv={};bv=function(d){d===void 0&&(d=window);var m={load:function(f){if("addEventListener"in d&&f._isBreadcrumbTypeEnabled("navigation")){var g=function(v){return function(){return f.leaveBreadcrumb(v,{},"navigation")}};d.addEventListener("pagehide",g("Page hidden"),!0),d.addEventListener("pageshow",g("Page shown"),!0),d.addEventListener("load",g("Page loaded"),!0),d.document.addEventListener("DOMContentLoaded",g("DOMContentLoaded"),!0),d.addEventListener("load",function(){return d.addEventListener("popstate",g("Navigated back"),!0)}),d.addEventListener("hashchange",function(v){var C=v.oldURL?{from:dd(v.oldURL,d),to:dd(v.newURL,d),state:vv(d)}:{to:dd(d.location.href,d)};f.leaveBreadcrumb("Hash changed",C,"navigation")},!0),d.history.pushState&&xv(f,d.history,"pushState",d,!0),d.history.replaceState&&xv(f,d.history,"replaceState",d)}}};return m};var dd=function(d,m){var f=m.document.createElement("A");return f.href=d,""+f.pathname+f.search+f.hash},AN=function(d,m,f,g){var v=dd(d.location.href,d);return{title:f,state:m,prevState:vv(d),to:g||v,from:v}},xv=function(d,m,f,g,v){v===void 0&&(v=!1);var C=m[f];m[f]=function(E,G,R){d.leaveBreadcrumb("History "+f,AN(g,E,G,R),"navigation"),v&&typeof d.resetEventCount=="function"&&d.resetEventCount(),C.apply(m,[E,G].concat(R!==void 0?R:[]))}},vv=function(d){try{return d.history.state}catch(m){}},PN=function(d){return d===void 0&&(d=window),{load:function(m){"addEventListener"in d&&m._isBreadcrumbTypeEnabled("user")&&d.addEventListener("click",function(f){var g,v;try{g=_N(f.target),v=wv(f.target,d)}catch(C){g="[hidden]",v="[hidden]",m._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z")}m.leaveBreadcrumb("UI click",{targetText:g,targetSelector:v},"user")},!0)}}},NN=/^\s*([^\s][\s\S]{0,139}[^\s])?\s*/;function _N(d){var m=d.textContent||d.innerText||"";return!m&&(d.type==="submit"||d.type==="button")&&(m=d.value),m=m.replace(NN,"$1"),m.length>140?m.slice(0,135)+"(...)":m}function wv(d,m){var f=[d.tagName];if(d.id&&f.push("#"+d.id),d.className&&d.className.length&&f.push("."+d.className.split(" ").join(".")),!m.document.querySelectorAll||!Array.prototype.indexOf)return f.join("");try{if(m.document.querySelectorAll(f.join("")).length===1)return f.join("")}catch(v){return f.join("")}if(d.parentNode.childNodes.length>1){var g=Array.prototype.indexOf.call(d.parentNode.childNodes,d)+1;f.push(":nth-child("+g+")")}return m.document.querySelectorAll(f.join("")).length===1?f.join(""):d.parentNode?wv(d.parentNode,m)+" > "+f.join(""):f.join("")}var Tv=200,Sv=5e5,LN=function(d,m){return d===void 0&&(d=document),m===void 0&&(m=window),{load:function(f){if(!f._config.trackInlineScripts)return;var g=m.location.href,v="",C=!!d.attachEvent,E=C?d.readyState==="complete":d.readyState!=="loading",G=function(){return d.documentElement.outerHTML};v=G();var R=d.onreadystatechange;d.onreadystatechange=function(){d.readyState==="interactive"&&(v=G(),E=!0);try{R.apply(this,arguments)}catch(X){}};var Q=null,W=function(X){Q=X},Y=function(){var X=d.currentScript||Q;if(!X&&!E){var Me=d.scripts||d.getElementsByTagName("script");X=Me[Me.length-1]}return X},he=function(X){(!E||!v)&&(v=G());var Me=["<!-- DOC START -->"].concat(v.split(`
`)),dt=X-1,Yt=Math.max(dt-3,0),It=Math.min(dt+3,Me.length);return i(Me.slice(Yt,It),function(jr,$n,wn){return jr[Yt+1+wn]=$n.length<=Tv?$n:$n.substr(0,Tv),jr},{})};f.addOnError(function(X){X.errors[0].stacktrace=s(X.errors[0].stacktrace,function(jr){return!/__trace__$/.test(jr.method)});var Me=X.errors[0].stacktrace[0],dt=function(jr){return jr.replace(/#.*$/,"").replace(/\?.*$/,"")};if(!(Me&&Me.file&&dt(Me.file)!==dt(g))){var Yt=Y();if(Yt){var It=Yt.innerHTML;X.addMetadata("script","content",It.length<=Sv?It:It.substr(0,Sv)),Me&&Me.lineNumber&&(Me.code=he(Me.lineNumber))}}},!0);var je=D(["setTimeout","setInterval","setImmediate","requestAnimationFrame"],function(X){return dh(m,X,function(Me){return ye(Me,function(dt){return{get:function(){return dt[0]},replace:function(Yt){dt[0]=Yt}}})})}),Ke=je[0];D(["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload","MediaSource","MediaRecorder","MediaStream","ServiceWorker","ServiceWorkerContainer","ServiceWorkerRegistration","BroadcastChannel","RTCPeerConnection","RTCDataChannel","AbortSignal","MediaQueryList","ShadowRoot","FontFaceSet","Animation","PermissionStatus","PaymentRequest","VideoTrackList"],function(X){!m[X]||!m[X].prototype||!Object.prototype.hasOwnProperty.call(m[X].prototype,"addEventListener")||(dh(m[X].prototype,"addEventListener",function(Me){return ye(Me,Mv)}),dh(m[X].prototype,"removeEventListener",function(Me){return ye(Me,Mv,!0)}))});function ye(X,Me,dt){return dt===void 0&&(dt=!1),function(){for(var Yt=arguments.length,It=new Array(Yt),jr=0;jr<Yt;jr++)It[jr]=arguments[jr];try{var $n=Me(It),wn=$n.get();if(dt&&X.apply(this,It),typeof wn!="function")return X.apply(this,It);if(wn.__trace__)$n.replace(wn.__trace__);else{var gh=Y();wn.__trace__=function(){W(gh),Ke(function(){W(null)},0);for(var Iv=arguments.length,Av=new Array(Iv),pd=0;pd<Iv;pd++)Av[pd]=arguments[pd];var zN=wn.apply(this,Av);return W(null),zN},wn.__trace__.__trace__=wn.__trace__,$n.replace(wn.__trace__)}}catch(hh){}if(X.apply)return X.apply(this,It);switch(It.length){case 1:return X(It[0]);case 2:return X(It[0],It[1]);default:return X()}}}},configSchema:{trackInlineScripts:{validate:function(f){return f===!0||f===!1},defaultValue:function(){return!0},message:"should be true|false"}}}};function dh(d,m,f){var g=d[m];if(!g)return g;var v=f(g);return d[m]=v,g}function Mv(d){var m=!!d[1]&&typeof d[1].handleEvent=="function";return{get:function(){return m?d[1].handleEvent:d[1]},replace:function(f){m?d[1].handleEvent=f:d[1]=f}}}var RN={load:function(d){d._sessionDelegate=DN}},DN={startSession:function(d,m){var f=d;return f._session=m,f._pausedSession=null,f._config.enabledReleaseStages!==null&&!x(f._config.enabledReleaseStages,f._config.releaseStage)?(f._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"),f):(f._delivery.sendSession({notifier:f._notifier,device:m.device,app:m.app,sessions:[{id:m.id,startedAt:m.startedAt,user:m._user}]}),f)},resumeSession:function(d){return d._session?d:d._pausedSession?(d._session=d._pausedSession,d._pausedSession=null,d):d.startSession()},pauseSession:function(d){d._pausedSession=d._session,d._session=null}},qN={load:function(d){d._config.collectUserIp||d.addOnError(function(m){m._user&&typeof m._user.id=="undefined"&&delete m._user.id,m._user=B({id:"[REDACTED]"},m._user),m.request=B({clientIp:"[REDACTED]"},m.request)})},configSchema:{collectUserIp:{defaultValue:function(){return!0},message:"should be true|false",validate:function(d){return d===!0||d===!1}}}},ph={};ph={load:function(d){d.addOnError(function(m){var f=i(m.errors,function(g,v){return g.concat(v.stacktrace)},[]);D(f,function(g){g.file=ON(g.file)})})}};var ON=ph._strip=function(d){return typeof d=="string"?d.replace(/\?.*$/,"").replace(/#.*$/,""):d},Wi={},kv=["events.[].metaData","events.[].breadcrumbs.[].metaData","events.[].request","events.[].response"];Wi.event=function(d,m){var f=yr(d,null,null,{redactedPaths:kv,redactedKeys:m});return f.length>1e6&&(d.events[0]._metadata={notifier:`WARNING!
Serialized payload was `+f.length/1e6+`MB (limit = 1MB)
metadata was removed`},f=yr(d,null,null,{redactedPaths:kv,redactedKeys:m})),f},Wi.session=function(d,m){var f=yr(d,null,null);return f};var mh={};mh=function(d,m){return m===void 0&&(m=window),{sendEvent:function(f,g){if(g===void 0&&(g=function(){}),d._config.endpoints.notify===null){var v=new Error("Event not sent due to incomplete endpoint configuration");return g(v)}var C=Ev(d._config,"notify","4",m),E=Wi.event(f,d._config.redactedKeys),G=new m.XDomainRequest;G.onload=function(){g(null)},G.onerror=function(){var R=new Error("Event failed to send");d._logger.error("Event failed to send\u2026",R),E.length>1e6&&d._logger.warn("Event oversized ("+(E.length/1e6).toFixed(2)+" MB)"),g(R)},G.open("POST",C),setTimeout(function(){try{G.send(E)}catch(R){d._logger.error(R),g(R)}},0)},sendSession:function(f,g){if(g===void 0&&(g=function(){}),d._config.endpoints.sessions===null){var v=new Error("Session not sent due to incomplete endpoint configuration");return g(v)}var C=Ev(d._config,"sessions","1",m),E=new m.XDomainRequest;E.onload=function(){g(null)},E.open("POST",C),setTimeout(function(){try{E.send(Wi.session(f,d._config.redactedKeys))}catch(G){d._logger.error(G),g(G)}},0)}}};var Ev=function(d,m,f,g){var v=JSON.parse(JSON.stringify(new Date)),C=FN(d.endpoints[m],g.location.protocol);return C+"?apiKey="+encodeURIComponent(d.apiKey)+"&payloadVersion="+f+"&sentAt="+encodeURIComponent(v)},FN=mh._matchPageProtocol=function(d,m){return m==="http:"?d.replace(/^https:/,"http:"):d};function Cv(d,m){if(d.isSecureContext&&d.crypto&&d.crypto.subtle&&d.crypto.subtle.digest&&typeof TextEncoder=="function"){var f=new TextEncoder().encode(m);return d.crypto.subtle.digest("SHA-1",f).then(function(g){var v=Array.from(new Uint8Array(g)),C=v.map(function(E){return E.toString(16).padStart(2,"0")}).join("");return"sha1 "+C})}return Promise.resolve()}var BN=function(d,m){return m===void 0&&(m=window),{sendEvent:function(f,g){g===void 0&&(g=function(){});try{var v=d._config.endpoints.notify;if(v===null){var C=new Error("Event not sent due to incomplete endpoint configuration");return g(C)}var E=new m.XMLHttpRequest,G=Wi.event(f,d._config.redactedKeys);E.onreadystatechange=function(){if(E.readyState===m.XMLHttpRequest.DONE){var R=E.status;if(R===0||R>=400){var Q=new Error("Request failed with status "+R);d._logger.error("Event failed to send\u2026",Q),G.length>1e6&&d._logger.warn("Event oversized ("+(G.length/1e6).toFixed(2)+" MB)"),g(Q)}else g(null)}},E.open("POST",v),E.setRequestHeader("Content-Type","application/json"),E.setRequestHeader("Bugsnag-Api-Key",f.apiKey||d._config.apiKey),E.setRequestHeader("Bugsnag-Payload-Version","4"),E.setRequestHeader("Bugsnag-Sent-At",new Date().toISOString()),d._config.sendPayloadChecksums&&typeof Promise!="undefined"&&Promise.toString().indexOf("[native code]")!==-1?Cv(m,G).then(function(R){R&&E.setRequestHeader("Bugsnag-Integrity",R),E.send(G)}).catch(function(R){d._logger.error(R),E.send(G)}):E.send(G)}catch(R){d._logger.error(R)}},sendSession:function(f,g){g===void 0&&(g=function(){});try{var v=d._config.endpoints.sessions;if(v===null){var C=new Error("Session not sent due to incomplete endpoint configuration");return g(C)}var E=new m.XMLHttpRequest,G=Wi.session(f,d._config.redactedKeys);E.onreadystatechange=function(){if(E.readyState===m.XMLHttpRequest.DONE){var R=E.status;if(R===0||R>=400){var Q=new Error("Request failed with status "+R);d._logger.error("Session failed to send\u2026",Q),g(Q)}else g(null)}},E.open("POST",v),E.setRequestHeader("Content-Type","application/json"),E.setRequestHeader("Bugsnag-Api-Key",d._config.apiKey),E.setRequestHeader("Bugsnag-Payload-Version","1"),E.setRequestHeader("Bugsnag-Sent-At",new Date().toISOString()),d._config.sendPayloadChecksums&&typeof Promise!="undefined"&&Promise.toString().indexOf("[native code]")!==-1?Cv(m,G).then(function(R){R&&E.setRequestHeader("Bugsnag-Integrity",R),E.send(G)}).catch(function(R){d._logger.error(R),E.send(G)}):E.send(G)}catch(R){d._logger.error(R)}}}},za={},VN="Bugsnag JavaScript",$N="9.0.0",GN="https://github.com/bugsnag/bugsnag-js",UN=B({},k.schema,cN),Rr={_client:null,createClient:function(d){typeof d=="string"&&(d={apiKey:d}),d||(d={});var m=[hN,yN(),bN(),xN(),vN,RN,qN,ph,uN(),pN(),bv(),PN(),IN(),dv,LN()],f=new ah(d,UN,m,{name:VN,version:$N,url:GN});return f._setDelivery(window.XDomainRequest?mh:BN),f._logger.debug("Loaded!"),f.leaveBreadcrumb("Bugsnag loaded",{},"state"),f._config.autoTrackSessions?f.startSession():f},start:function(d){return Rr._client?(Rr._client._logger.warn("Bugsnag.start() was called more than once. Ignoring."),Rr._client):(Rr._client=Rr.createClient(d),Rr._client)},isStarted:function(){return Rr._client!=null}};return D(["resetEventCount"].concat(p(ah.prototype)),function(d){/^_/.test(d)||(Rr[d]=function(){if(!Rr._client)return console.log("Bugsnag."+d+"() was called before Bugsnag.start()");Rr._client._depth+=1;var m=Rr._client[d].apply(Rr._client,arguments);return Rr._client._depth-=1,m})}),za=Rr,za.Client=ah,za.Event=Jg,za.Session=nh,za.Breadcrumb=eh,za.default=Rr,za})});var sn;function Nv(e){sn=e}function Qi(e,t){sn==null||sn.notify(e,t)}function gd(e,t,r){sn==null||sn.leaveBreadcrumb(e,t,r)}function _v(e){sn==null||sn.setBeforeSendCB(e)}function yh(e){sn==null||sn.setUserId(e)}function cn(e){let t=e;if(t&&typeof t.toJSON=="function"&&(t=t.toJSON()),!t||typeof t!="object")return t;if(Array.isArray(t))return t.map(cn);let r={};for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=cn(t[n]));return r}var XN=500*1024,Lv=[];function Rv(){let e=[],t=0;for(let r=0;r<Lv.length;r++){let n=Lv[r];if(t+=n.size,t>XN)break;e.push(n.payload)}return e}var Qr=e=>Object.keys(e);var ZN=/lang=[A-Za-z]+/,JN=/(cl|learn|help).desmos.com/,e_=/^(?:https?:)?(?:\/\/)?([^\s:\/\?]+)/i,t_=/(^desmos\.com$)|(\.desmos.com$)/;function r_(e){var n;let[t,r]=(n=e_.exec(e))!=null?n:[];return r}function bh(e){let t=r_(e);return t?t_.test(t):!0}function Dv(e,t){if(e===""||!t||ZN.test(e)||JN.test(e)||!bh(e))return e;let r=encodeURIComponent(t);if(e.length){let n=e.split("#"),o=/\?/.test(e)?`${n[0]}&lang=${r}`:`${n[0]}?lang=${r}`;return n[1]!==void 0?`${o}#${n[1]}`:o}else return`?lang=${r}`}var n_=["3d","actions","advancedStyling","audioTraceKeypad","authorFeatures","autoplay","beta3d","clickableObjects","collaborate","complex","crossOriginSaveTest","debugProgressUpdates","decimalToFraction","debug","defaultLogModeRegressions","degreeMode","reflectionArc","disableMouseInteractions","disableWebGL2Support","disableWorkerOnZoom","editOnWeb","expressionsCollapsed","keypadActivated","fastAutoSave","fastAutoSaveForTests","forceEnableGeometryFunctions","forceLogModeRegressions","forceMobile","forceTouchDevice","hidden","invertedColors","jim","lockViewport","logAria","logInternalErrors","showIDs","maintenance","nativeOnscreenKeypad","outofdom","pauseWhenOffscreen","projectorMode","reflectionArc","reloadcss","replaceCommaWith10Exp","replaceRoundWithReciprocal","restrictedEditing","restrictedFunctions","showIDs","showNavigationWarning","showPerformanceMeter","debugCompiler","showQuestsList","showResetButtonOnGraphpaper","simulationFPS","singleExpression","testing","timeInWorker","translucentSurfaces","transparentBackground","typingAsteriskWritesTimesSymbol","ueb","upcomingMaintenance","wireframe","raycastHeatmap","raycastDisableIntervals","showEvaluationCopyButtons","reportPositionNone"],o_=["adaptivePeeling","actions","allowComplex","audio","brailleControls","branding","calculus","concat","customRegressions","decimalToFraction","degreeMode","distributions","expressions","expressionsTopbar","folders","functionDefinition","graphpaper","images","intervalComprehensions","invertedColorsControl","keypad","links","logScales","notes","plotImplicits","plotInequalities","plotSingleVariableImplicitEquations","pointsOfInterest","qwertyKeyboard","recursion","settingsMenu","sliders","substitutions","regressionTemplates","tone","trace","zoomButtons","zoomFit"],a_=["debugPeelLayers","nworkers","peelUpsample","recursionDepth","workerThrottle"],i_=["timeoutLoop","translucentOpacity"];var qv=e=>bh(e)||e==="localhost",Fc=e=>{let{search:t,hostname:r}=typeof location!="undefined"?location:typeof window!="undefined"?window.location:new Location;return qv(r)?new URLSearchParams(e!=null?e:t):new URLSearchParams},Ov=e=>{let t=Fc(e),r=new Map;for(let[n,o]of t)r.set(n,o!=null?o:"");return r};function xt(e,t=Fc()){let r=t.get(e);if(n_.includes(e)||e.startsWith("no")&&o_.includes(e.slice(2)))return t.has(e)&&r!=="false";if(r!=null){if(a_.includes(e)){let n=parseInt(r,10);return isNaN(n)?void 0:n}if(i_.includes(e)){let n=parseFloat(r);return isNaN(n)?void 0:n}return r}}var Fv=(e,t=Fc())=>t.has(e);var Bv=(e,t,r)=>{let n=new URLSearchParams(e);return n.set(t,r),`?${n.toString()}`},s_=e=>e.toString().split("&").map(t=>t.replace(/=(true)?$/,"")).join("&");var c_=e=>{qv(new URL(e).hostname)&&history.replaceState({},"",e)},l_=()=>window.location.toString();function Vv(e,t=l_()){let r=new URL(t);r.search=s_(e),c_(r.toString())}var Xt={},ur=Ov(),u_={sciKeypad:1,"4fnKeypad":1,singleExpression:1,restrictedEditing:1,degreeMode:1,decimalToFraction:1};typeof Desmos!="undefined"&&Desmos.config&&Qr(u_).forEach(e=>{Desmos.config[e]&&ur.set(e,"true"),Xt[e]=Desmos.config[e]});var Yi=e=>xt(e,ur),Se=e=>{Xt[e]=Yi(e)},De=e=>{Xt[e]=!Yi(`no${e}`)};Se("testing");Se("maintenance");Se("nativeOnscreenKeypad");Se("hidden");Se("disableMouseInteractions");Se("advancedStyling");Se("outofdom");ur.has("cacheRenderedSvgs")&&(Xt.cacheRenderedSvgs=!0);var d_=["lang","fontSize","gestureHandling","translucentOpacity","peelUpsample","debugPeelLayers","debug3dRender","recursionDepthLimit"];d_.forEach(e=>{ur.has(e)&&(Xt[e]=ur.get(e))});ur.has("backgroundColor")&&(Xt.backgroundColor="#"+ur.get("backgroundColor"));ur.has("textColor")&&(Xt.textColor="#"+ur.get("textColor"));ur.has("accentColor")&&(Xt.accentColor="#"+ur.get("accentColor"));Se("lockViewport");Se("authorFeatures");ur.has("degreeMode")&&Se("degreeMode");ur.has("nodegreeMode")&&De("degreeMode");Se("wireframe");Se("raycastHeatmap");Se("raycastDisableIntervals");Se("editOnWeb");Se("crossOriginSaveTest");Se("showResetButtonOnGraphpaper");Se("debugProgressUpdates");Se("debugCompiler");Se("transparentBackground");Se("forceLogModeRegressions");Se("defaultLogModeRegressions");Se("reflectionArc");Se("logInternalErrors");Se("showIDs");De("links");De("trace");De("zoomFit");Se("expressionsCollapsed");Se("keypadActivated");Se("invertedColors");De("invertedColorsControl");Se("projectorMode");De("images");De("folders");De("settingsMenu");De("expressionsTopbar");De("zoomButtons");De("keypad");De("graphpaper");De("expressions");De("branding");De("pointsOfInterest");De("plotSingleVariableImplicitEquations");De("plotImplicits");De("plotInequalities");De("notes");De("sliders");Se("pauseWhenOffscreen");De("brailleControls");Se("audioTraceKeypad");De("audio");De("tone");Se("showEvaluationCopyButtons");Se("reportPositionNone");De("qwertyKeyboard");Se("restrictedFunctions");Se("forceEnableGeometryFunctions");De("functionDefinition");Se("singleExpression");Se("restrictedEditing");Se("replaceCommaWith10Exp");Se("replaceRoundWithReciprocal");Yi("typingAsteriskWritesTimesSymbol")&&(Xt.typingAsteriskWritesTimesSymbol=!0);De("substitutions");De("intervalComprehensions");De("recursion");De("calculus");De("logScales");De("regressionTemplates");De("distributions");Xt["4fnKeypad"]?Se("decimalToFraction"):De("decimalToFraction");Se("translucentSurfaces");Se("3d");Se("disableWorkerOnZoom");Se("showPerformanceMeter");De("adaptivePeeling");Se("complex");De("allowComplex");De("customRegressions");var $v;ur.has("additionalFunctions")&&(Xt.additionalFunctions=($v=ur.get("additionalFunctions"))==null?void 0:$v.split(","));ur.has("disableParentheses")&&(Xt.disableParentheses=!0);ur.has("limitNumberScale")&&(Xt.limitNumberScale=!0);Yi("actions")?Xt.actions=!0:Yi("noactions")?Xt.actions=!1:Yi("clickableObjects")&&(Xt.actions=!0);function Gv(e){return Xt[e]}function Uv(){return cn(Xt)}function Hv(e){return crypto.getRandomValues(new Uint8Array(e))}var Kv=4096,hd=[],sa=0,xh;for(;sa<256;sa++)hd[sa]=(sa+256).toString(16).substring(1);function fd(){(!xh||sa+16>Kv)&&(xh=Hv(Kv),sa=0);for(var e=0,t,r="";e<16;e++)t=xh[sa+e],e==6?r+=hd[t&15|64]:e==8?r+=hd[t&63|128]:r+=hd[t],e&1&&e>1&&e<11&&(r+="-");return sa+=16,r}var ca=fd;var bd=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},vd=Array.prototype,Th=Object.prototype,Wv=typeof Symbol!="undefined"?Symbol.prototype:null,_V=vd.push,p_=vd.slice,xd=Th.toString,m_=Th.hasOwnProperty,g_=Array.isArray,jv=Object.keys,Qv=Object.create,h_=bd.isNaN,LV=bd.isFinite,vh=function(){};function Ot(e){if(e instanceof Ot)return e;if(!(this instanceof Ot))return new Ot(e);this._wrapped=e}var RV=Ot.VERSION="1.10.2";function wd(e,t,r){if(t===void 0)return e;switch(r==null?3:r){case 1:return function(n){return e.call(t,n)};case 3:return function(n,o,a){return e.call(t,n,o,a)};case 4:return function(n,o,a,i){return e.call(t,n,o,a,i)}}return function(){return e.apply(t,arguments)}}function Zv(e,t,r){return e==null?V_:Ro(e)?wd(e,t,r):rs(e)&&!Vc(e)?$_(e):pw(e)}Ot.iteratee=Jv;function Jv(e,t){return Zv(e,t,1/0)}function Ha(e,t,r){return Ot.iteratee!==Jv?Ot.iteratee(e,t):Zv(e,t,r)}function ln(e,t){return t=t==null?e.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),n=Array(r),o=0;o<r;o++)n[o]=arguments[o+t];switch(t){case 0:return e.call(this,n);case 1:return e.call(this,arguments[0],n);case 2:return e.call(this,arguments[0],arguments[1],n)}var a=Array(t+1);for(o=0;o<t;o++)a[o]=arguments[o];return a[t]=n,e.apply(this,a)}}function f_(e){if(!rs(e))return{};if(Qv)return Qv(e);vh.prototype=e;var t=new vh;return vh.prototype=null,t}function ew(e){return function(t){return t==null?void 0:t[e]}}function Zi(e,t){return e!=null&&m_.call(e,t)}function tw(e,t){for(var r=t.length,n=0;n<r;n++){if(e==null)return;e=e[t[n]]}return r?e:void 0}var y_=Math.pow(2,53)-1,Ka=ew("length");function Ji(e){var t=Ka(e);return typeof t=="number"&&t>=0&&t<=y_}function Bc(e,t,r){t=wd(t,r);var n,o;if(Ji(e))for(n=0,o=e.length;n<o;n++)t(e[n],n,e);else{var a=uo(e);for(n=0,o=a.length;n<o;n++)t(e[a[n]],a[n],e)}return e}function Sh(e,t,r){t=Ha(t,r);for(var n=!Ji(e)&&uo(e),o=(n||e).length,a=Array(o),i=0;i<o;i++){var s=n?n[i]:i;a[i]=t(e[s],s,e)}return a}function rw(e){var t=function(r,n,o,a){var i=!Ji(r)&&uo(r),s=(i||r).length,c=e>0?0:s-1;for(a||(o=r[i?i[c]:c],c+=e);c>=0&&c<s;c+=e){var l=i?i[c]:c;o=n(o,r[l],l,r)}return o};return function(r,n,o,a){var i=arguments.length>=3;return t(r,wd(n,a,4),o,i)}}var DV=rw(1),qV=rw(-1);function b_(e,t,r){var n=[];return t=Ha(t,r),Bc(e,function(o,a,i){t(o,a,i)&&n.push(o)}),n}function Xi(e,t,r,n){return Ji(e)||(e=uw(e)),(typeof r!="number"||n)&&(r=0),E_(e,t,r)>=0}var OV=ln(function(e,t,r){var n,o;return Ro(t)?o=t:Vc(t)&&(n=t.slice(0,-1),t=t[t.length-1]),Sh(e,function(a){var i=o;if(!i){if(n&&n.length&&(a=tw(a,n)),a==null)return;i=a[t]}return i==null?i:i.apply(a,r)})});function x_(e,t){return Sh(e,pw(t))}function v_(e,t,r){var n=-1/0,o=-1/0,a,i;if(t==null||typeof t=="number"&&typeof e[0]!="object"&&e!=null){e=Ji(e)?e:uw(e);for(var s=0,c=e.length;s<c;s++)a=e[s],a!=null&&a>n&&(n=a)}else t=Ha(t,r),Bc(e,function(l,p,y){i=t(l,p,y),(i>o||i===-1/0&&n===-1/0)&&(n=l,o=i)});return n}function Td(e,t){return function(r,n,o){var a=t?[[],[]]:{};return n=Ha(n,o),Bc(r,function(i,s){var c=n(i,s,r);e(a,i,c)}),a}}var FV=Td(function(e,t,r){Zi(e,r)?e[r].push(t):e[r]=[t]}),BV=Td(function(e,t,r){e[r]=t}),VV=Td(function(e,t,r){Zi(e,r)?e[r]++:e[r]=1});var $V=Td(function(e,t,r){e[r?0:1].push(t)},!0);function es(e,t,r,n){n=n||[];for(var o=n.length,a=0,i=Ka(e);a<i;a++){var s=e[a];if(Ji(s)&&(Vc(s)||wh(s)))if(t)for(var c=0,l=s.length;c<l;)n[o++]=s[c++];else es(s,t,r,n),o=n.length;else r||(n[o++]=s)}return n}var GV=ln(function(e,t){return T_(e,t)});function w_(e,t,r,n){B_(t)||(n=r,r=t,t=!1),r!=null&&(r=Ha(r,n));for(var o=[],a=[],i=0,s=Ka(e);i<s;i++){var c=e[i],l=r?r(c,i,e):c;t&&!r?((!i||a!==l)&&o.push(c),a=l):r?Xi(a,l)||(a.push(l),o.push(c)):Xi(o,c)||o.push(c)}return o}var UV=ln(function(e){return w_(es(e,!0,!0))});var T_=ln(function(e,t){return t=es(t,!0,!0),b_(e,function(r){return!Xi(t,r)})});function S_(e){for(var t=e&&v_(e,Ka).length||0,r=Array(t),n=0;n<t;n++)r[n]=x_(e,n);return r}var zV=ln(S_);function nw(e){return function(t,r,n){r=Ha(r,n);for(var o=Ka(t),a=e>0?0:o-1;a>=0&&a<o;a+=e)if(r(t[a],a,t))return a;return-1}}var M_=nw(1),Mh=nw(-1);function k_(e,t,r,n){r=Ha(r,n,1);for(var o=r(t),a=0,i=Ka(e);a<i;){var s=Math.floor((a+i)/2);r(e[s])<o?a=s+1:i=s}return a}function ow(e,t,r){return function(n,o,a){var i=0,s=Ka(n);if(typeof a=="number")e>0?i=a>=0?a:Math.max(a+s,i):s=a>=0?Math.min(a+1,s):a+s+1;else if(r&&a&&s)return a=r(n,o),n[a]===o?a:-1;if(o!==o)return a=t(p_.call(n,i,s),F_),a>=0?a+i:-1;for(a=e>0?i:s-1;a>=0&&a<s;a+=e)if(n[a]===o)return a;return-1}}var E_=ow(1,M_,k_),HV=ow(-1,Mh);function aw(e,t,r,n,o){if(!(n instanceof t))return e.apply(r,o);var a=f_(e.prototype),i=e.apply(a,o);return rs(i)?i:a}var C_=ln(function(e,t,r){if(!Ro(e))throw new TypeError("Bind must be called on a function");var n=ln(function(o){return aw(e,n,t,this,r.concat(o))});return n}),Sd=ln(function(e,t){var r=Sd.placeholder,n=function(){for(var o=0,a=t.length,i=Array(a),s=0;s<a;s++)i[s]=t[s]===r?arguments[o++]:t[s];for(;o<arguments.length;)i.push(arguments[o++]);return aw(e,n,this,this,i)};return n});Sd.placeholder=Ot;var KV=ln(function(e,t){t=es(t,!1,!1);var r=t.length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var n=t[r];e[n]=C_(e[n],e)}});var iw=ln(function(e,t,r){return setTimeout(function(){return e.apply(null,r)},t)}),WV=Sd(iw,Ot,1);function Md(e,t,r){var n,o,a,i,s=0;r||(r={});var c=function(){s=r.leading===!1?0:Xv(),n=null,i=e.apply(o,a),n||(o=a=null)},l=function(){var p=Xv();!s&&r.leading===!1&&(s=p);var y=t-(p-s);return o=this,a=arguments,y<=0||y>t?(n&&(clearTimeout(n),n=null),s=p,i=e.apply(o,a),n||(o=a=null)):!n&&r.trailing!==!1&&(n=setTimeout(c,y)),i};return l.cancel=function(){clearTimeout(n),s=0,n=o=a=null},l}function sw(e,t,r){var n,o,a=function(s,c){n=null,c&&(o=e.apply(s,c))},i=ln(function(s){if(n&&clearTimeout(n),r){var c=!n;n=setTimeout(a,t),c&&(o=e.apply(this,s))}else n=iw(a,t,this,s);return o});return i.cancel=function(){clearTimeout(n),n=null},i}function I_(e){return function(){return!e.apply(this,arguments)}}function A_(e,t){var r;return function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=null),r}}var jV=Sd(A_,2),cw=!{toString:null}.propertyIsEnumerable("toString"),Yv=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function lw(e,t){var r=Yv.length,n=e.constructor,o=Ro(n)&&n.prototype||Th,a="constructor";for(Zi(e,a)&&!Xi(t,a)&&t.push(a);r--;)a=Yv[r],a in e&&e[a]!==o[a]&&!Xi(t,a)&&t.push(a)}function uo(e){if(!rs(e))return[];if(jv)return jv(e);var t=[];for(var r in e)Zi(e,r)&&t.push(r);return cw&&lw(e,t),t}function kh(e){if(!rs(e))return[];var t=[];for(var r in e)t.push(r);return cw&&lw(e,t),t}function uw(e){for(var t=uo(e),r=t.length,n=Array(r),o=0;o<r;o++)n[o]=e[t[o]];return n}function P_(e){for(var t={},r=uo(e),n=0,o=r.length;n<o;n++)t[e[r[n]]]=r[n];return t}function Eh(e,t){return function(r){var n=arguments.length;if(t&&(r=Object(r)),n<2||r==null)return r;for(var o=1;o<n;o++)for(var a=arguments[o],i=e(a),s=i.length,c=0;c<s;c++){var l=i[c];(!t||r[l]===void 0)&&(r[l]=a[l])}return r}}var N_=Eh(kh),__=Eh(uo);function L_(e,t,r){return t in r}var ts=ln(function(e,t){var r={},n=t[0];if(e==null)return r;Ro(n)?(t.length>1&&(n=wd(n,t[1])),t=kh(e)):(n=L_,t=es(t,!1,!1),e=Object(e));for(var o=0,a=t.length;o<a;o++){var i=t[o],s=e[i];n(s,i,e)&&(r[i]=s)}return r}),QV=ln(function(e,t){var r=t[0],n;return Ro(r)?(r=I_(r),t.length>1&&(n=t[1])):(t=Sh(es(t,!1,!1),String),r=function(o,a){return!Xi(t,a)}),ts(e,r,n)}),YV=Eh(kh,!0);function dw(e){return rs(e)?Vc(e)?e.slice():N_({},e):e}function R_(e,t){var r=uo(t),n=r.length;if(e==null)return!n;for(var o=Object(e),a=0;a<n;a++){var i=r[a];if(t[i]!==o[i]||!(i in o))return!1}return!0}function yd(e,t,r,n){if(e===t)return e!==0||1/e===1/t;if(e==null||t==null)return!1;if(e!==e)return t!==t;var o=typeof e;return o!=="function"&&o!=="object"&&typeof t!="object"?!1:D_(e,t,r,n)}function D_(e,t,r,n){e instanceof Ot&&(e=e._wrapped),t instanceof Ot&&(t=t._wrapped);var o=xd.call(e);if(o!==xd.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:+e==0?1/+e===1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return Wv.valueOf.call(e)===Wv.valueOf.call(t)}var a=o==="[object Array]",i=o==="[object Set]",s=o==="[object Map]",c=a||i||s;if(!c){if(typeof e!="object"||typeof t!="object")return!1;var l=e.constructor,p=t.constructor;if(l!==p&&!(Ro(l)&&l instanceof l&&Ro(p)&&p instanceof p)&&"constructor"in e&&"constructor"in t)return!1}r=r||[],n=n||[];for(var y=r.length;y--;)if(r[y]===e)return n[y]===t;if(r.push(e),n.push(t),a){if(y=e.length,y!==t.length)return!1;for(;y--;)if(!yd(e[y],t[y],r,n))return!1}else if(s){if(e.size!==t.size)return!1;for(let[L,T]of e.entries())if(!yd(T,t.get(L),r,n))return!1}else if(i){if(e.size!==t.size)return!1;for(let L of e.values())if(!t.has(L))return!1}else{var x=uo(e),M;if(y=x.length,uo(t).length!==y)return!1;for(;y--;)if(M=x[y],!(Zi(t,M)&&yd(e[M],t[M],r,n)))return!1}return r.pop(),n.pop(),!0}function Qe(e,t){return yd(e,t)}function un(e){return function(t){return xd.call(t)==="[object "+e+"]"}}var Vc=g_||un("Array");function rs(e){var t=typeof e;return t==="function"||t==="object"&&!!e}var wh=un("Arguments"),Ro=un("Function"),XV=un("String"),q_=un("Number"),ZV=un("Date"),JV=un("RegExp"),e$=un("Error"),t$=un("Symbol"),r$=un("Map"),n$=un("WeakMap"),o$=un("Set"),a$=un("WeakSet");(function(){wh(arguments)||(wh=function(e){return Zi(e,"callee")})})();var O_=bd.document&&bd.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof O_!="function"&&(Ro=function(e){return typeof e=="function"||!1});function F_(e){return q_(e)&&h_(e)}function B_(e){return e===!0||e===!1||xd.call(e)==="[object Boolean]"}function V_(e){return e}function pw(e){return Vc(e)?function(t){return tw(t,e)}:ew(e)}function $_(e){return e=__({},e),function(t){return R_(t,e)}}var Xv=Date.now||function(){return new Date().getTime()},mw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},G_=P_(mw);function gw(e){var t=function(a){return e[a]},r="(?:"+uo(e).join("|")+")",n=RegExp(r),o=RegExp(r,"g");return function(a){return a=a==null?"":""+a,n.test(a)?a.replace(o,t):a}}var U_=gw(mw),i$=gw(G_);function hw(e,t){return e._chain?Ot(t).chain():t}Bc(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=vd[e];Ot.prototype[e]=function(){var r=this._wrapped;return t.apply(r,arguments),(e==="shift"||e==="splice")&&r.length===0&&delete r[0],hw(this,r)}});Bc(["concat","join","slice"],function(e){var t=vd[e];Ot.prototype[e]=function(){return hw(this,t.apply(this._wrapped,arguments))}});Ot.prototype.value=function(){return this._wrapped};Ot.prototype.valueOf=Ot.prototype.toJSON=Ot.prototype.value;Ot.prototype.toString=function(){return String(this._wrapped)};var z_=50,kd=class{constructor(t,r){this.throttledFlushBatchedLogs=Md(async()=>{if(this.requestInFlight||this.batchedLogs.length==0)return;let t=this.batchedLogs.splice(0,z_);this.requestInFlight=!0;try{await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({events:t})})}catch(r){}this.requestInFlight=!1,this.throttledFlushBatchedLogs()},1e3,{leading:!1});this.batchedLogs=[],this.requestInFlight=!1,this.getSessionData=r,this.apiUrl=t}log(t){this.batchedLogs.push({...this.getSessionData(),...t}),this.throttledFlushBatchedLogs()}};var H_={event_type:"eventType",source:"browser",app:"knox",user_agent:navigator.userAgent},K_=new kd("/usage-stats",()=>H_);function fw(e,t,r){K_.log({event_type:e,url:document.location.href,payload:JSON.stringify(r),page_load_id:t})}var W_="usage-ping",yw=15*1e3,j_=60*1e3,Q_=60*1e3,Y_={scientific:.03,matrix:.8,graphing:.02,"geometry-calculator":.5,fourfunction:.8,"graphing-3d":.4,"assessment-scientific":.5,"assessment-graphing":.3,"assessment-fourfunction":.7,practice:.7,notebook:1,"notebook-view":1},$c=class{constructor(t){this.samplingInterval={current:yw,lessFrequent:j_,moreFrequent:yw,moreFrequentPeriod:180*1e3};this.sampleStartTime=0;this.minutesOfMathData={lastCheckedMinutesOfMath:Date.now(),lastChangeEventTime:void 0,minutesOfMath:0};this.minutesOfMathCheckInterval=Q_;this.handleFocus=()=>this.onFocus();this.handleBlur=()=>this.onBlur();this.handleVisibilityChange=()=>this.onVisibilityChange();var r;this.samplingProbability=(r=window.sampleProbabilityOverride)!=null?r:Y_[t],this.shouldSample=Math.random()<this.samplingProbability,this.pageLoadId=ca(),this.pageLoadTime=Date.now(),this.focused=document.hasFocus(),this.focused&&(this.focusIntervalStart=Date.now()),this.totalTimeFocused=0,window.addEventListener("focus",this.handleFocus),window.addEventListener("blur",this.handleBlur),document.visibilityState==="visible"&&(this.visibleIntervalStart=Date.now()),this.totalTimeVisible=0,document.addEventListener("visibilitychange",this.handleVisibilityChange),Gv("testing")&&(window.usageMonitor=this)}onFocus(){this.focused=!0,this.focusIntervalStart=Date.now()}onBlur(){this.focused=!1,this.addTimeFocused(),this.focusIntervalStart=void 0}onVisibilityChange(){document.visibilityState==="hidden"?(this.addTimeVisible(),this.visibleIntervalStart=void 0):this.visibleIntervalStart=Date.now()}destroy(){this.stop(),window.removeEventListener("focus",this.handleFocus),window.removeEventListener("blur",this.handleBlur),document.removeEventListener("visibilitychange",this.handleVisibilityChange),delete window.usageMonitor}handleUserChangeEvent(){this.minutesOfMathData.lastChangeEventTime=Date.now(),this.getTotalMinutesOfMath()}getUsageData(){return{...{timeSincePageload:this.getTimeSincePageload(),totalTimeFocused:this.getTotalTimeFocused(),totalTimeVisible:this.getTotalTimeVisible(),...this.getTotalMinutesOfMath(),samplingInterval:this.samplingInterval.current,samplingProbability:this.samplingProbability},version:3}}addTimeFocused(){if(this.focusIntervalStart===void 0)return;let t=Date.now(),r=t-this.focusIntervalStart;this.totalTimeFocused+=r,this.focusIntervalStart=t}addTimeVisible(){if(this.visibleIntervalStart===void 0)return;let t=Date.now(),r=t-this.visibleIntervalStart;this.totalTimeVisible+=r,this.visibleIntervalStart=t}getTotalTimeFocused(){return this.focused?(this.addTimeFocused(),this.totalTimeFocused):this.totalTimeFocused}getTotalTimeVisible(){return document.visibilityState==="hidden"?this.totalTimeVisible:(this.addTimeVisible(),this.totalTimeVisible)}start(){if(!this.shouldSample||this.sampleTimeout)return;this.sampleStartTime=Date.now();let t=()=>{this.sampleTimeout!==void 0&&clearTimeout(this.sampleTimeout),this.shouldSample&&(Date.now()-this.sampleStartTime>this.samplingInterval.moreFrequentPeriod&&(this.samplingInterval.current=this.samplingInterval.lessFrequent),this.sampleTimeout=setTimeout(t,this.samplingInterval.current),this.callLogger())};this.sampleTimeout=setTimeout(t)}stop(){this.sampleTimeout!==void 0&&clearTimeout(this.sampleTimeout),this.sampleTimeout=void 0}callLogger(){fw(W_,this.pageLoadId,this.getUsageData())}getTimeSincePageload(){return Date.now()-this.pageLoadTime}setMinutesOfMathCheckInterval(t){this.minutesOfMathCheckInterval=t}overrideSamplingInterval(t){this.samplingInterval={...this.samplingInterval,...t}}setShouldSample(t){this.shouldSample=t,this.start()}getTotalMinutesOfMath(){var r;let t=Date.now();return(!this.minutesOfMathData.lastCheckedMinutesOfMath||t-this.minutesOfMathData.lastCheckedMinutesOfMath>=this.minutesOfMathCheckInterval)&&(((r=this.minutesOfMathData.lastChangeEventTime)!=null?r:0)>t-this.minutesOfMathCheckInterval&&(this.minutesOfMathData.minutesOfMath+=this.minutesOfMathCheckInterval*1/(60*1e3)),this.minutesOfMathData.lastCheckedMinutesOfMath=t),{minutesOfMath:this.minutesOfMathData.minutesOfMath}}};function Gc(){var e;return(e=window.__dcgIframeConnect)!=null&&e.shouldSuppressProgrammaticFocus?window.__dcgIframeConnect.shouldSuppressProgrammaticFocus():!1}function bw(e,t){var n;let r="";return t!==void 0?r=t:typeof window!="undefined"&&window.location&&window.location.search&&(r=(n=new URLSearchParams(window.location.search).get("lang"))!=null?n:""),Dv(e,r)}var Oo=[],X_=Object.getPrototypeOf,Ed=Oo.slice,Z_=Oo.flat?function(e){return Oo.flat.call(e)}:function(e){return Oo.concat.apply([],e)},Aw=Oo.push,J_=Oo.indexOf,Pd={},Pw=Pd.toString,Cd=Pd.hasOwnProperty,Nw=Cd.toString,eL=Nw.call(Object),Bt={},Fo=function(t){return typeof t=="function"&&typeof t.nodeType!="number"&&typeof t.item!="function"},ss=function(t){return t!=null&&t===t.window},Ft=window.document;function Nd(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?Pd[Pw.call(e)]||"object":typeof e}var _w="3.6.0",A=function(e,t){return new A.fn.init(e,t)};A.fn=A.prototype={jquery:_w,constructor:A,length:0,toArray:function(){return Ed.call(this)},get:function(e){return e==null?Ed.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=A.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return A.each(this,e)},map:function(e){return this.pushStack(A.map(this,function(t,r){return e.call(t,r,t)}))},slice:function(){return this.pushStack(Ed.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(A.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(A.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,r=+e+(e<0?t:0);return this.pushStack(r>=0&&r<t?[this[r]]:[])},end:function(){return this.prevObject||this.constructor()},push:Aw,sort:Oo.sort,splice:Oo.splice};A.extend=A.fn.extend=function(){var e,t,r,n,o,a,i=arguments[0]||{},s=1,c=arguments.length,l=!1;for(typeof i=="boolean"&&(l=i,i=arguments[s]||{},s++),typeof i!="object"&&!Fo(i)&&(i={}),s===c&&(i=this,s--);s<c;s++)if((e=arguments[s])!=null)for(t in e)n=e[t],!(t==="__proto__"||i===n)&&(l&&n&&(A.isPlainObject(n)||(o=Array.isArray(n)))?(r=i[t],o&&!Array.isArray(r)?a=[]:!o&&!A.isPlainObject(r)?a={}:a=r,o=!1,i[t]=A.extend(l,a,n)):n!==void 0&&(i[t]=n));return i};A.extend({expando:"jQuery"+(_w+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,r;return!e||Pw.call(e)!=="[object Object]"?!1:(t=X_(e),t?(r=Cd.call(t,"constructor")&&t.constructor,typeof r=="function"&&Nw.call(r)===eL):!0)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},each:function(e,t){var r,n=0;if(Ch(e))for(r=e.length;n<r&&t.call(e[n],n,e[n])!==!1;n++);else for(n in e)if(t.call(e[n],n,e[n])===!1)break;return e},makeArray:function(e,t){var r=t||[];return e!=null&&(Ch(Object(e))?A.merge(r,typeof e=="string"?[e]:e):Aw.call(r,e)),r},inArray:function(e,t,r){return t==null?-1:J_.call(t,e,r)},merge:function(e,t){for(var r=+t.length,n=0,o=e.length;n<r;n++)e[o++]=t[n];return e.length=o,e},grep:function(e,t,r){for(var n,o=[],a=0,i=e.length,s=!r;a<i;a++)n=!t(e[a],a),n!==s&&o.push(e[a]);return o},map:function(e,t,r){var n,o,a=0,i=[];if(Ch(e))for(n=e.length;a<n;a++)o=t(e[a],a,r),o!=null&&i.push(o);else for(a in e)o=t(e[a],a,r),o!=null&&i.push(o);return Z_(i)},guid:1,support:Bt});typeof Symbol=="function"&&(A.fn[Symbol.iterator]=Oo[Symbol.iterator]);A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){Pd["[object "+t+"]"]=t.toLowerCase()});function Ch(e){var t=!!e&&"length"in e&&e.length,r=Nd(e);return Fo(e)||ss(e)?!1:r==="array"||t===0||typeof t=="number"&&t>0&&t-1 in e}var tL=(function(e){var t,r,n,o,a,i,s,c=e.document,l=[],p=l.push,y=l.push,x=l.slice,M=/HTML$/i,L=/^[^{]+\{\s*\[native \w/,T=function(){n()};try{y.apply(l=x.call(c.childNodes),c.childNodes),l[c.childNodes.length].nodeType}catch(V){y={apply:l.length?function(j,te){p.apply(j,x.call(te))}:function(j,te){for(var Te=j.length,P=0;j[Te++]=te[P++];);j.length=Te-1}}}function w(){}function k(V){var j=o.createElement("fieldset");try{return!!V(j)}catch(te){return!1}finally{j.parentNode&&j.parentNode.removeChild(j),j=null}}return t=w.support={},r=w.isXML=function(V){var j=V&&V.namespaceURI,te=V&&(V.ownerDocument||V).documentElement;return!M.test(j||te&&te.nodeName||"HTML")},n=w.setDocument=function(V){var j,te,Te=V?V.ownerDocument||V:c;return Te==o||Te.nodeType!==9||!Te.documentElement||(o=Te,a=o.documentElement,i=!r(o),c!=o&&(te=o.defaultView)&&te.top!==te&&(te.addEventListener?te.addEventListener("unload",T,!1):te.attachEvent&&te.attachEvent("onunload",T)),t.attributes=k(function(P){return P.className="i",!P.getAttribute("className")}),t.getElementsByTagName=k(function(P){return P.appendChild(o.createComment("")),!P.getElementsByTagName("*").length}),j=L.test(a.compareDocumentPosition),s=j||L.test(a.contains)?function(P,D){var B=P.nodeType===9?P.documentElement:P,I=D&&D.parentNode;return P===I||!!(I&&I.nodeType===1&&(B.contains?B.contains(I):P.compareDocumentPosition&&P.compareDocumentPosition(I)&16))}:function(P,D){if(D){for(;D=D.parentNode;)if(D===P)return!0}return!1}),o},w.contains=function(V,j){return(V.ownerDocument||V)!=o&&n(V),s(V,j)},n(),t.sortDetached=k(function(V){return V.compareDocumentPosition(o.createElement("fieldset"))&1}),w})(window);A.contains=tL.contains;function ns(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var Lw,rL=A.fn.init=function(e,t,r){if(!e)return this;if(r=r||Lw,typeof e=="string")throw new Error("$(string) implementation has been removed");if(e.nodeType)return this[0]=e,this.length=1,this;if(Fo(e))throw new Error("$(function) implementation has been removed");return A.makeArray(e,this)};rL.prototype=A.fn;Lw=A(Ft);var Ah=/[^\x20\t\r\n\f]+/g,zc=function(e,t,r,n,o,a,i){var s=0,c=e.length,l=r==null;if(Nd(r)==="object"){o=!0;for(s in r)zc(e,t,s,r[s],!0,a,i)}else if(n!==void 0&&(o=!0,Fo(n)||(i=!0),l&&(i?(t.call(e,n),t=null):(l=t,t=function(p,y,x){return l.call(A(p),x)})),t))for(;s<c;s++)t(e[s],r,i?n:n.call(e[s],s,t(e[s],r)));return o?e:l?t.call(e):c?t(e[0],r):a},nL=/^-ms-/,oL=/-([a-z])/g;function aL(e,t){return t.toUpperCase()}function Do(e){return e.replace(nL,"ms-").replace(oL,aL)}var Id=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function Hc(){this.expando=A.expando+Hc.uid++}Hc.uid=1;Hc.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Id(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,r){var n,o=this.cache(e);if(typeof t=="string")o[Do(t)]=r;else for(n in t)o[Do(n)]=t[n];return o},get:function(e,t){return t===void 0?this.cache(e):e[this.expando]&&e[this.expando][Do(t)]},access:function(e,t,r){return t===void 0||t&&typeof t=="string"&&r===void 0?this.get(e,t):(this.set(e,t,r),r!==void 0?r:t)},remove:function(e,t){var r,n=e[this.expando];if(n!==void 0){if(t!==void 0)for(Array.isArray(t)?t=t.map(Do):(t=Do(t),t=t in n?[t]:t.match(Ah)||[]),r=t.length;r--;)delete n[t[r]];(t===void 0||A.isEmptyObject(n))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return t!==void 0&&!A.isEmptyObject(t)}};var ut=new Hc,qo=new Hc,iL=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,sL=/[A-Z]/g;function cL(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:iL.test(e)?JSON.parse(e):e}function xw(e,t,r){var n;if(r===void 0&&e.nodeType===1)if(n="data-"+t.replace(sL,"-$&").toLowerCase(),r=e.getAttribute(n),typeof r=="string"){try{r=cL(r)}catch(o){}qo.set(e,t,r)}else r=void 0;return r}A.extend({hasData:function(e){return qo.hasData(e)||ut.hasData(e)},data:function(e,t,r){return qo.access(e,t,r)},removeData:function(e,t){qo.remove(e,t)},_data:function(e,t,r){return ut.access(e,t,r)},_removeData:function(e,t){ut.remove(e,t)}});A.fn.extend({data:function(e,t){var r,n,o,a=this[0],i=a&&a.attributes;if(e===void 0){if(this.length&&(o=qo.get(a),a.nodeType===1&&!ut.get(a,"hasDataAttrs"))){for(r=i.length;r--;)i[r]&&(n=i[r].name,n.indexOf("data-")===0&&(n=Do(n.slice(5)),xw(a,n,o[n])));ut.set(a,"hasDataAttrs",!0)}return o}return typeof e=="object"?this.each(function(){qo.set(this,e)}):zc(this,function(s){var c;if(a&&s===void 0)return c=qo.get(a,e),c!==void 0||(c=xw(a,e),c!==void 0)?c:void 0;this.each(function(){qo.set(this,e,s)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){qo.remove(this,e)})}});var Rw=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_d=new RegExp("^(?:([+-])=|)("+Rw+")([a-z%]*)$","i"),la=["Top","Right","Bottom","Left"],os=Ft.documentElement,Dw=function(e){return A.contains(e.ownerDocument,e)},lL={composed:!0};os.getRootNode&&(Dw=function(e){return A.contains(e.ownerDocument,e)||e.getRootNode(lL)===e.ownerDocument});function uL(e,t,r,n){var o,a,i=20,s=n?function(){return n.cur()}:function(){return A.css(e,t,"")},c=s(),l=r&&r[3]||(A.cssNumber[t]?"":"px"),p=e.nodeType&&(A.cssNumber[t]||l!=="px"&&+c)&&_d.exec(A.css(e,t));if(p&&p[3]!==l){for(c=c/2,l=l||p[3],p=+c||1;i--;)A.style(e,t,p+l),(1-a)*(1-(a=s()/c||.5))<=0&&(i=0),p=p/a;p=p*2,A.style(e,t,p+l),r=r||[]}return r&&(p=+p||+c||0,o=r[1]?p+(r[1]+1)*r[2]:+r[2],n&&(n.unit=l,n.start=p,n.end=o)),o}var Ih=/^(?:checkbox|radio)$/i;(function(){var e=Ft.createDocumentFragment(),t=e.appendChild(Ft.createElement("div")),r=Ft.createElement("input");r.setAttribute("type","radio"),r.setAttribute("checked","checked"),r.setAttribute("name","t"),t.appendChild(r),Bt.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Bt.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,t.innerHTML="<option></option>",Bt.option=!!t.lastChild})();var vw=/^([^.]*)(?:\.(.+)|)/;function as(){return!0}function is(){return!1}function dL(e,t){return e===pL()==(t==="focus")}function pL(){try{return Ft.activeElement}catch(e){}}function Ph(e,t,r,n,o,a){var i,s;if(typeof t=="object"){typeof r!="string"&&(n=n||r,r=void 0);for(s in t)Ph(e,s,r,n,t[s],a);return e}if(n==null&&o==null?(o=r,n=r=void 0):o==null&&(typeof r=="string"?(o=n,n=void 0):(o=n,n=r,r=void 0)),o===!1)o=is;else if(!o)return e;return a===1&&(i=o,o=function(c){return A().off(c),i.apply(this,arguments)},o.guid=i.guid||(i.guid=A.guid++)),e.each(function(){A.event.add(this,t,o,n,r)})}A.event={global:{},add:function(e,t,r,n,o){var a,i,s,c,l,p,y,x,M,L,T,w=ut.get(e);if(Id(e)){if(r.handler&&(a=r,r=a.handler,o=a.selector),o)throw new Error("Support for event delegation has been removed");for(r.guid||(r.guid=A.guid++),(c=w.events)||(c=w.events=Object.create(null)),(i=w.handle)||(i=w.handle=function(k){return typeof A!="undefined"&&A.event.triggered!==k.type?A.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Ah)||[""],l=t.length;l--;)if(s=vw.exec(t[l])||[],M=T=s[1],L=(s[2]||"").split(".").sort(),!!M){if(y=A.event.special[M]||{},M=(o?y.delegateType:y.bindType)||M,y=A.event.special[M]||{},p=A.extend({type:M,origType:T,data:n,handler:r,guid:r.guid,selector:o,namespace:L.join(".")},a),(x=c[M])||(x=c[M]=[],x.delegateCount=0,(!y.setup||y.setup.call(e,n,L,i)===!1)&&e.addEventListener&&e.addEventListener(M,i)),y.add&&(y.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),o)throw new Error("Support for event delegation has been removed");x.push(p),A.event.global[M]=!0}}},remove:function(e,t,r,n,o){var a,i,s,c,l,p,y,x,M,L,T,w=ut.hasData(e)&&ut.get(e);if(!(!w||!(c=w.events))){for(t=(t||"").match(Ah)||[""],l=t.length;l--;){if(s=vw.exec(t[l])||[],M=T=s[1],L=(s[2]||"").split(".").sort(),!M){for(M in c)A.event.remove(e,M+t[l],r,n,!0);continue}for(y=A.event.special[M]||{},M=(n?y.delegateType:y.bindType)||M,x=c[M]||[],s=s[2]&&new RegExp("(^|\\.)"+L.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=a=x.length;a--;)p=x[a],(o||T===p.origType)&&(!r||r.guid===p.guid)&&(!s||s.test(p.namespace))&&(!n||n===p.selector||n==="**"&&p.selector)&&(x.splice(a,1),p.selector&&x.delegateCount--,y.remove&&y.remove.call(e,p));i&&!x.length&&((!y.teardown||y.teardown.call(e,L,w.handle)===!1)&&A.removeEvent(e,M,w.handle),delete c[M])}A.isEmptyObject(c)&&ut.remove(e,"handle events")}},dispatch:function(e){var t,r,n,o,a,i,s=new Array(arguments.length),c=A.event.fix(e),l=(ut.get(this,"events")||Object.create(null))[c.type]||[],p=A.event.special[c.type]||{};for(s[0]=c,t=1;t<arguments.length;t++)s[t]=arguments[t];if(c.delegateTarget=this,!(p.preDispatch&&p.preDispatch.call(this,c)===!1)){for(i=A.event.handlers.call(this,c,l),t=0;(o=i[t++])&&!c.isPropagationStopped();)for(c.currentTarget=o.elem,r=0;(a=o.handlers[r++])&&!c.isImmediatePropagationStopped();)(!c.rnamespace||a.namespace===!1||c.rnamespace.test(a.namespace))&&(c.handleObj=a,c.data=a.data,n=((A.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,s),n!==void 0&&(c.result=n)===!1&&(c.preventDefault(),c.stopPropagation()));return p.postDispatch&&p.postDispatch.call(this,c),c.result}},handlers:function(e,t){var r=[],n=t.delegateCount,o=e.target;if(n)throw new Error("Support for event delegtaion has been removed");return o=this,n<t.length&&r.push({elem:o,handlers:t.slice(n)}),r},addProp:function(e,t){Object.defineProperty(A.Event.prototype,e,{enumerable:!0,configurable:!0,get:Fo(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(r){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r})}})},fix:function(e){return e[A.expando]?e:new A.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Ih.test(t.type)&&t.click&&ns(t,"input")&&Ad(t,"click",as),!1},trigger:function(e){var t=this||e;return Ih.test(t.type)&&t.click&&ns(t,"input")&&Ad(t,"click"),!0},_default:function(e){var t=e.target;return Ih.test(t.type)&&t.click&&ns(t,"input")&&ut.get(t,"click")||ns(t,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}};function Ad(e,t,r){if(!r){ut.get(e,t)===void 0&&A.event.add(e,t,as);return}ut.set(e,t,!1),A.event.add(e,t,{namespace:!1,handler:function(n){var o,a,i=ut.get(this,t);if(n.isTrigger&1&&this[t]){if(i.length)(A.event.special[t]||{}).delegateType&&n.stopPropagation();else if(i=Ed.call(arguments),ut.set(this,t,i),o=r(this,t),this[t](),a=ut.get(this,t),i!==a||o?ut.set(this,t,!1):a={},i!==a)return n.stopImmediatePropagation(),n.preventDefault(),a&&a.value}else i.length&&(ut.set(this,t,{value:A.event.trigger(A.extend(i[0],A.Event.prototype),i.slice(1),this)}),n.stopImmediatePropagation())}})}A.removeEvent=function(e,t,r){e.removeEventListener&&e.removeEventListener(t,r)};A.Event=function(e,t){if(!(this instanceof A.Event))return new A.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?as:is,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&A.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[A.expando]=!0};A.Event.prototype={constructor:A.Event,isDefaultPrevented:is,isPropagationStopped:is,isImmediatePropagationStopped:is,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=as,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=as,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=as,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}};A.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},A.event.addProp);A.each({focus:"focusin",blur:"focusout"},function(e,t){A.event.special[e]={setup:function(){return Ad(this,e,dL),!1},trigger:function(){return Ad(this,e),!0},_default:function(){return!0},delegateType:t}});A.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){A.event.special[e]={delegateType:t,bindType:t,handle:function(r){var n,o=this,a=r.relatedTarget,i=r.handleObj;return(!a||a!==o&&!A.contains(o,a))&&(r.type=i.origType,n=i.handler.apply(this,arguments),r.type=t),n}}});A.fn.extend({on:function(e,t,r,n){return Ph(this,e,t,r,n)},one:function(e,t,r,n){return Ph(this,e,t,r,n,1)},off:function(e,t,r){var n,o;if(e&&e.preventDefault&&e.handleObj)return n=e.handleObj,A(e.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if(typeof e=="object"){for(o in e)this.off(o,t,e[o]);return this}return(t===!1||typeof t=="function")&&(r=t,t=void 0),r===!1&&(r=is),this.each(function(){A.event.remove(this,e,r,t)})}});var Lh=new RegExp("^("+Rw+")(?!px)[a-z%]+$","i"),Ld=function(e){var t=e.ownerDocument.defaultView;return(!t||!t.opener)&&(t=window),t.getComputedStyle(e)},qw=function(e,t,r){var n,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];n=r.call(e);for(o in t)e.style[o]=a[o];return n},mL=new RegExp(la.join("|"),"i");(function(){function e(){if(l){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",os.appendChild(c).appendChild(l);var p=window.getComputedStyle(l);r=p.top!=="1%",s=t(p.marginLeft)===12,l.style.right="60%",a=t(p.right)===36,n=t(p.width)===36,l.style.position="absolute",o=t(l.offsetWidth/3)===12,os.removeChild(c),l=null}}function t(p){return Math.round(parseFloat(p))}var r,n,o,a,i,s,c=Ft.createElement("div"),l=Ft.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",Bt.clearCloneStyle=l.style.backgroundClip==="content-box",A.extend(Bt,{boxSizingReliable:function(){return e(),n},pixelBoxStyles:function(){return e(),a},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var p,y,x,M;return i==null&&(p=Ft.createElement("table"),y=Ft.createElement("tr"),x=Ft.createElement("div"),p.style.cssText="position:absolute;left:-11111px;border-collapse:separate",y.style.cssText="border:1px solid",y.style.height="1px",x.style.height="9px",x.style.display="block",os.appendChild(p).appendChild(y).appendChild(x),M=window.getComputedStyle(y),i=parseInt(M.height,10)+parseInt(M.borderTopWidth,10)+parseInt(M.borderBottomWidth,10)===y.offsetHeight,os.removeChild(p)),i}}))})();function Uc(e,t,r){var n,o,a,i,s=e.style;return r=r||Ld(e),r&&(i=r.getPropertyValue(t)||r[t],i===""&&!Dw(e)&&(i=A.style(e,t)),!Bt.pixelBoxStyles()&&Lh.test(i)&&mL.test(t)&&(n=s.width,o=s.minWidth,a=s.maxWidth,s.minWidth=s.maxWidth=s.width=i,i=r.width,s.width=n,s.minWidth=o,s.maxWidth=a)),i!==void 0?i+"":i}function Ow(e,t){return{get:function(){if(e()){delete this.get;return}return(this.get=t).apply(this,arguments)}}}var ww=["Webkit","Moz","ms"],Fw=Ft.createElement("div").style,Tw={};function gL(e){for(var t=e[0].toUpperCase()+e.slice(1),r=ww.length;r--;)if(e=ww[r]+t,e in Fw)return e}function Sw(e){var t=A.cssProps[e]||Tw[e];return t||(e in Fw?e:Tw[e]=gL(e)||e)}var hL=/^(none|table(?!-c[ea]).+)/,Mw=/^--/,fL={position:"absolute",visibility:"hidden",display:"block"},kw={letterSpacing:"0",fontWeight:"400"};function Bw(e,t,r){var n=_d.exec(t);return n?Math.max(0,n[2]-(r||0))+(n[3]||"px"):t}function Nh(e,t,r,n,o,a){var i=t==="width"?1:0,s=0,c=0;if(r===(n?"border":"content"))return 0;for(;i<4;i+=2)r==="margin"&&(c+=A.css(e,r+la[i],!0,o)),n?(r==="content"&&(c-=A.css(e,"padding"+la[i],!0,o)),r!=="margin"&&(c-=A.css(e,"border"+la[i]+"Width",!0,o))):(c+=A.css(e,"padding"+la[i],!0,o),r!=="padding"?c+=A.css(e,"border"+la[i]+"Width",!0,o):s+=A.css(e,"border"+la[i]+"Width",!0,o));return!n&&a>=0&&(c+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-a-c-s-.5))||0),c}function Ew(e,t,r){var n=Ld(e),o=!Bt.boxSizingReliable()||r,a=o&&A.css(e,"boxSizing",!1,n)==="border-box",i=a,s=Uc(e,t,n),c="offset"+t[0].toUpperCase()+t.slice(1);if(Lh.test(s)){if(!r)return s;s="auto"}return(!Bt.boxSizingReliable()&&a||!Bt.reliableTrDimensions()&&ns(e,"tr")||s==="auto"||!parseFloat(s)&&A.css(e,"display",!1,n)==="inline")&&e.getClientRects().length&&(a=A.css(e,"boxSizing",!1,n)==="border-box",i=c in e,i&&(s=e[c])),s=parseFloat(s)||0,s+Nh(e,t,r||(a?"border":"content"),i,n,s)+"px"}A.extend({cssHooks:{opacity:{get:function(e,t){if(t){var r=Uc(e,"opacity");return r===""?"1":r}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,r,n){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var o,a,i,s=Do(t),c=Mw.test(t),l=e.style;if(c||(t=Sw(s)),i=A.cssHooks[t]||A.cssHooks[s],r!==void 0){if(a=typeof r,a==="string"&&(o=_d.exec(r))&&o[1]&&(r=uL(e,t,o),a="number"),r==null||r!==r)return;a==="number"&&!c&&(r+=o&&o[3]||(A.cssNumber[s]?"":"px")),!Bt.clearCloneStyle&&r===""&&t.indexOf("background")===0&&(l[t]="inherit"),(!i||!("set"in i)||(r=i.set(e,r,n))!==void 0)&&(c?l.setProperty(t,r):l[t]=r)}else return i&&"get"in i&&(o=i.get(e,!1,n))!==void 0?o:l[t]}},css:function(e,t,r,n){var o,a,i,s=Do(t),c=Mw.test(t);return c||(t=Sw(s)),i=A.cssHooks[t]||A.cssHooks[s],i&&"get"in i&&(o=i.get(e,!0,r)),o===void 0&&(o=Uc(e,t,n)),o==="normal"&&t in kw&&(o=kw[t]),r===""||r?(a=parseFloat(o),r===!0||isFinite(a)?a||0:o):o}});A.each(["height","width"],function(e,t){A.cssHooks[t]={get:function(r,n,o){if(n)return hL.test(A.css(r,"display"))&&(!r.getClientRects().length||!r.getBoundingClientRect().width)?qw(r,fL,function(){return Ew(r,t,o)}):Ew(r,t,o)},set:function(r,n,o){var a,i=Ld(r),s=!Bt.scrollboxSize()&&i.position==="absolute",c=s||o,l=c&&A.css(r,"boxSizing",!1,i)==="border-box",p=o?Nh(r,t,o,l,i):0;return l&&s&&(p-=Math.ceil(r["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(i[t])-Nh(r,t,"border",!1,i)-.5)),p&&(a=_d.exec(n))&&(a[3]||"px")!=="px"&&(r.style[t]=n,n=A.css(r,t)),Bw(r,n,p)}}});A.cssHooks.marginLeft=Ow(Bt.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Uc(e,"marginLeft"))||e.getBoundingClientRect().left-qw(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"});A.each({margin:"",padding:"",border:"Width"},function(e,t){A.cssHooks[e+t]={expand:function(r){for(var n=0,o={},a=typeof r=="string"?r.split(" "):[r];n<4;n++)o[e+la[n]+t]=a[n]||a[n-2]||a[0];return o}},e!=="margin"&&(A.cssHooks[e+t].set=Bw)});A.fn.extend({css:function(e,t){return zc(this,function(r,n,o){var a,i,s={},c=0;if(Array.isArray(n)){for(a=Ld(r),i=n.length;c<i;c++)s[n[c]]=A.css(r,n[c],!1,a);return s}return o!==void 0?A.style(r,n,o):A.css(r,n)},e,t,arguments.length>1)}});(function(){var e=Ft.createElement("input"),t=Ft.createElement("select"),r=t.appendChild(Ft.createElement("option"));e.type="checkbox",Bt.checkOn=e.value!=="",Bt.optSelected=r.selected,e=Ft.createElement("input"),e.value="t",e.type="radio",Bt.radioValue=e.value==="t"})();Bt.focusin="onfocusin"in window;var Cw=/^(?:focusinfocus|focusoutblur)$/,Iw=function(e){e.stopPropagation()};A.extend(A.event,{trigger:function(e,t,r,n){var o,a,i,s,c,l,p,y,x=[r||Ft],M=Cd.call(e,"type")?e.type:e,L=Cd.call(e,"namespace")?e.namespace.split("."):[];if(a=y=i=r=r||Ft,!(r.nodeType===3||r.nodeType===8)&&!Cw.test(M+A.event.triggered)&&(M.indexOf(".")>-1&&(L=M.split("."),M=L.shift(),L.sort()),c=M.indexOf(":")<0&&"on"+M,e=e[A.expando]?e:new A.Event(M,typeof e=="object"&&e),e.isTrigger=n?2:3,e.namespace=L.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+L.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=t==null?[e]:A.makeArray(t,[e]),p=A.event.special[M]||{},!(!n&&p.trigger&&p.trigger.apply(r,t)===!1))){if(!n&&!p.noBubble&&!ss(r)){for(s=p.delegateType||M,Cw.test(s+M)||(a=a.parentNode);a;a=a.parentNode)x.push(a),i=a;i===(r.ownerDocument||Ft)&&x.push(i.defaultView||i.parentWindow||window)}for(o=0;(a=x[o++])&&!e.isPropagationStopped();)y=a,e.type=o>1?s:p.bindType||M,l=(ut.get(a,"events")||Object.create(null))[e.type]&&ut.get(a,"handle"),l&&l.apply(a,t),l=c&&a[c],l&&l.apply&&Id(a)&&(e.result=l.apply(a,t),e.result===!1&&e.preventDefault());return e.type=M,!n&&!e.isDefaultPrevented()&&(!p._default||p._default.apply(x.pop(),t)===!1)&&Id(r)&&c&&Fo(r[M])&&!ss(r)&&(i=r[c],i&&(r[c]=null),A.event.triggered=M,e.isPropagationStopped()&&y.addEventListener(M,Iw),r[M](),e.isPropagationStopped()&&y.removeEventListener(M,Iw),A.event.triggered=void 0,i&&(r[c]=i)),e.result}},simulate:function(e,t,r){var n=A.extend(new A.Event,r,{type:e,isSimulated:!0});A.event.trigger(n,null,t)}});A.fn.extend({trigger:function(e,t){return this.each(function(){A.event.trigger(e,t,this)})},triggerHandler:function(e,t){var r=this[0];if(r)return A.event.trigger(e,t,r,!0)}});Bt.focusin||A.each({focus:"focusin",blur:"focusout"},function(e,t){var r=function(n){A.event.simulate(t,n.target,A.event.fix(n))};A.event.special[t]={setup:function(){var n=this.ownerDocument||this.document||this,o=ut.access(n,t);o||n.addEventListener(e,r,!0),ut.access(n,t,(o||0)+1)},teardown:function(){var n=this.ownerDocument||this.document||this,o=ut.access(n,t)-1;o?ut.access(n,t,o):(n.removeEventListener(e,r,!0),ut.remove(n,t))}}});var yL=/\[\]$/;function _h(e,t,r,n){var o;if(Array.isArray(t))A.each(t,function(a,i){r||yL.test(e)?n(e,i):_h(e+"["+(typeof i=="object"&&i!=null?a:"")+"]",i,r,n)});else if(!r&&Nd(t)==="object")for(o in t)_h(e+"["+o+"]",t[o],r,n);else n(e,t)}A.param=function(e,t){var r,n=[],o=function(a,i){var s=Fo(i)?i():i;n[n.length]=encodeURIComponent(a)+"="+encodeURIComponent(s==null?"":s)};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!A.isPlainObject(e))A.each(e,function(){o(this.name,this.value)});else for(r in e)_h(r,e[r],t,o);return n.join("&")};A.offset={setOffset:function(e,t,r){var n,o,a,i,s,c,l,p=A.css(e,"position"),y=A(e),x={};p==="static"&&(e.style.position="relative"),s=y.offset(),a=A.css(e,"top"),c=A.css(e,"left"),l=(p==="absolute"||p==="fixed")&&(a+c).indexOf("auto")>-1,l?(n=y.position(),i=n.top,o=n.left):(i=parseFloat(a)||0,o=parseFloat(c)||0),Fo(t)&&(t=t.call(e,r,A.extend({},s))),t.top!=null&&(x.top=t.top-s.top+i),t.left!=null&&(x.left=t.left-s.left+o),"using"in t?t.using.call(e,x):y.css(x)}};A.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(o){A.offset.setOffset(this,e,o)});var t,r,n=this[0];if(n)return n.getClientRects().length?(t=n.getBoundingClientRect(),r=n.ownerDocument.defaultView,{top:t.top+r.pageYOffset,left:t.left+r.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,r,n=this[0],o={top:0,left:0};if(A.css(n,"position")==="fixed")t=n.getBoundingClientRect();else{for(t=this.offset(),r=n.ownerDocument,e=n.offsetParent||r.documentElement;e&&(e===r.body||e===r.documentElement)&&A.css(e,"position")==="static";)e=e.parentNode;e&&e!==n&&e.nodeType===1&&(o=A(e).offset(),o.top+=A.css(e,"borderTopWidth",!0),o.left+=A.css(e,"borderLeftWidth",!0))}return{top:t.top-o.top-A.css(n,"marginTop",!0),left:t.left-o.left-A.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&A.css(e,"position")==="static";)e=e.offsetParent;return e||os})}});A.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var r=t==="pageYOffset";A.fn[e]=function(n){return zc(this,function(o,a,i){var s;if(ss(o)?s=o:o.nodeType===9&&(s=o.defaultView),i===void 0)return s?s[t]:o[a];s?s.scrollTo(r?s.pageXOffset:i,r?i:s.pageYOffset):o[a]=i},e,n,arguments.length)}});A.each(["top","left"],function(e,t){A.cssHooks[t]=Ow(Bt.pixelPosition,function(r,n){if(n)return n=Uc(r,t),Lh.test(n)?A(r).position()[t]+"px":n})});A.each({Height:"height",Width:"width"},function(e,t){A.each({padding:"inner"+e,content:t,"":"outer"+e},function(r,n){A.fn[n]=function(o,a){var i=arguments.length&&(r||typeof o!="boolean"),s=r||(o===!0||a===!0?"margin":"border");return zc(this,function(c,l,p){var y;return ss(c)?n.indexOf("outer")===0?c["inner"+e]:c.document.documentElement["client"+e]:c.nodeType===9?(y=c.documentElement,Math.max(c.body["scroll"+e],y["scroll"+e],c.body["offset"+e],y["offset"+e],y["client"+e])):p===void 0?A.css(c,l,s):A.style(c,l,p,s)},t,i?o:void 0,i)}})});A.fn.extend({bind:function(e,t,r){return this.on(e,null,t,r)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,r,n){return this.on(t,e,r,n)},undelegate:function(e,t,r){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});A.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){A.fn[t]=function(r,n){return arguments.length>0?this.on(t,null,r,n):this.trigger(t)}});var bL=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;A.isArray=Array.isArray;A.parseJSON=JSON.parse;A.nodeName=ns;A.isFunction=Fo;A.isWindow=ss;A.camelCase=Do;A.type=Nd;A.now=Date.now;A.isNumeric=function(e){var t=A.type(e);return(t==="number"||t==="string")&&!isNaN(e-parseFloat(e))};A.trim=function(e){return e==null?"":(e+"").replace(bL,"")};var xL=window.jQuery,vL=window.$;A.noConflict=function(e){return window.$===A&&(window.$=vL),e&&window.jQuery===A&&(window.jQuery=xL),A};typeof noGlobal=="undefined"&&(window.jQuery=window.$=A);var ge=A;function ue(e=void 0){let t=()=>e;return t.isDCGViewConst=!0,t}function Wa(e){return typeof e=="function"&&!!e.isDCGViewConst}function Vw(e){let t=e();if(t!=null)return typeof t=="string"?t:Object.entries(t).filter(([,r])=>r!=null).map(([r,n])=>`${r}:${n}`).join(";")||void 0}function wL(e){let t=Vw(e);return Wa(e)?{value:t}:{value:t,bindings:{onUpdate:r=>{let n=Vw(e);t!==n&&(Uw(r,"style",n),t=n)}}}}function $w(e){let t=e();if(t!=null)return typeof t=="string"?t:Object.entries(t).filter(([,r])=>r).map(([r])=>r).join(" ")||void 0}var TL=/\s+/,SL=new Set;function Gw(e){let t=e==null?void 0:e.trim();return t?new Set(t.split(TL)):SL}function ML(e){let t=$w(e);if(Wa(e))return{value:t};let r=Gw(t);return{value:t,bindings:{onUpdate:n=>{let o=$w(e);if(t===o)return;let a=Gw(o);for(let i of r)a.has(i)||n.classList.remove(i);for(let i of a)r.has(i)||n.classList.add(i);r=a,t=o}}}}function Bo(e){return t=>({bindings:{[e]:t}})}var Rh={style:wL,class:ML,willMount:Bo("willMount"),onMount:Bo("onMount"),didMount:Bo("didMount"),willUnmount:Bo("willUnmount"),onUnmount:Bo("onUnmount"),didUnmount:Bo("didUnmount"),willUpdate:Bo("willUpdate"),onUpdate:Bo("onUpdate"),didUpdate:Bo("didUpdate")};function cs(e,t){Rh[e]=t}function kL(e){return Rh.hasOwnProperty(e)}var EL=e=>e.startsWith("on")&&e[2]===e[2].toUpperCase();function CL(e,t){let r=e.toLowerCase(),n=r==="onfocusin"||r==="onfocusout"?r.slice(2):void 0,o;return{bindings:{onMount(a){o=(...i)=>{i[0]&&t.apply(a,i)},n?a.addEventListener(n,o):a[r]=o},willUnmount(a){n&&a.removeEventListener(n,o)}}}}function Uw(e,t,r){return r==null?e.removeAttribute(t):e.setAttribute(t,String(r))}function IL(e,t){let r=t();return Wa(t)?{value:r}:{value:r,bindings:{onUpdate(n){let o=t();o!==r&&(r=o,Uw(n,e,o))}}}}function zw(e,t){if(t==null)return{value:void 0};let r=typeof t=="function"?t:ue(t);return kL(e)?Rh[e](r):EL(e)?CL(e,r):IL(e,r)}var Dh=()=>{};Dh();function Hw(e,t,r){let n=e._bindings[t];e._bindings[t]=n?[...n,r]:[r]}function Gn(e,t){var n;((n=e._bindings[t])!=null?n:[]).forEach(o=>o())}var ls=class{findAllRootDOMNodes(){let t=this.findFirstRootDOMNode(),r=this.findLastRootDOMNode(),n=[],o=t;for(;o&&(n.push(o),o!==r);)o=o.nextSibling;return n}},Rd=class extends ls{constructor(t,r){super(),this.tagName=t,this.props=r}findFirstRootDOMNode(){return this._node}findLastRootDOMNode(){return this._node}renderTo(t,r){let n=document.createElement(this.tagName);if(this._node=n,r.bindAttributesTo(n,this.props),t.appendChild(n),"children"in this.props){let o=Array.isArray(this.props.children)?this.props.children:[this.props.children];Kw(o,r,n,this)}}},Dd=class extends ls{constructor(t=[]){super(),this.children=t,t.length?this._nodes=[document.createTextNode(""),document.createTextNode("")]:this._nodes=[document.createTextNode("")]}findFirstRootDOMNode(){return this._nodes[0]}findLastRootDOMNode(){return this._nodes.length===2?this._nodes[1]:this._nodes[0]}renderTo(t,r){t.appendChild(this._nodes[0]),Kw(this.children,r,t,this),this._nodes.length===2&&t.appendChild(this._nodes[1])}};function Kw(e,t,r,n){e.forEach(o=>{if(Un(o)){let a=Vo(o);a.renderTo(r,t),a._parentElement=n;return}if(Wa(o)){r.appendChild(document.createTextNode(String(o())));return}if(typeof o=="function"){t.bindText(r,()=>{let a=o();return a==null?"":typeof a=="string"?a:String(a)});return}r.appendChild(document.createTextNode(String(o)))})}var qd=Symbol(),Ww=(e,t)=>{e!=null&&(Array.isArray(e)?e.forEach(r=>Ww(r,t)):t.push(e))};function Un(e){return!!(e!=null&&e.isDCGElementSpec)}function Vo(e){switch(e.type){case"fragment":return new Dd(e.children);case"element":return new Rd(e.tagName,e.props);case"view":let t=new e.viewClass(e.props)._construct();return e.viewName&&(t._viewName=e.viewName),t;default:}throw new Error("could not init DCGElementSpec.")}function br(e,t={}){let r=[];if("children"in t&&(Array.isArray(t.children)?t.children:[t.children]).forEach(o=>Ww(o,r)),e===qd)return{isDCGElementSpec:!0,type:"fragment",children:r};if(typeof e=="string")return{isDCGElementSpec:!0,type:"element",tagName:e,props:{...t,children:r}};if(e.IS_DCGVIEW){let n;return r.length===1?n=r[0]:r.length>1&&(n=r),{isDCGElementSpec:!0,type:"view",viewClass:e,props:{...t,children:n}}}throw new Error(`Expected type to be a Fragment symbol, string, or View class, but got ${e}.`)}var AL=e=>Array.isArray(e),jw=e=>AL(e)?br(qd,{children:e}):e;var Od=e=>e instanceof K;Dh();var K=class extends ls{constructor(r){var n,o;super();this._childViews=[];this._bindings={};this._isMounted=!1;this.const=ue;this.props=r,this._viewName=(o=(n=this.constructor)==null?void 0:n.name)!=null?o:"Anonymous DCGView"}template(){throw new Error("template() must be implemented")}_construct(){var r;return(r=this.init)==null||r.call(this),this._elementSpec=this.template(),this}bindFn(r){return r.bind(this)}bindIfMounted(r){return this.bindFn((...n)=>{if(this._isMounted)return r.apply(this,n)})}traceViewHierarchy(){let r=[],n=this._parentElement;for(;n;)r.unshift(n),n=n._parentElement;let o=i=>Od(i)&&!(i._viewName==="Switch"&&Od(i._parentElement)&&i._parentElement._viewName==="If")&&!["ForWrapper","SwitchWrapper"].includes(i._viewName),a=[...r,this].filter(o).map((i,s)=>"  ".repeat(s)+"<"+i._viewName+">").join(`
`);return{ancestors:r,formatted:a}}renderTo(r,n){n&&n._childViews.push(this),this._element=Vo(this._elementSpec),this._element._parentElement=this,this._element.renderTo(r,this)}findFirstRootDOMNode(){return this._element.findFirstRootDOMNode()}findLastRootDOMNode(){return this._element.findLastRootDOMNode()}update(){var r,n,o;if(!this._isMounted)return qh("Trying to update view that is not mounted. Ignoring update.",this);this.shouldUpdate&&!this.shouldUpdate()||((r=this.willUpdate)==null||r.call(this),Gn(this,"willUpdate"),Gn(this,"onUpdate"),(n=this.onUpdate)==null||n.call(this),this.updateChildren(),Gn(this,"didUpdate"),(o=this.didUpdate)==null||o.call(this))}updateChildren(){this._childViews.forEach(r=>r.update())}bindText(r,n){let o=n(),a=document.createTextNode(o);r.appendChild(a),Hw(this,"onUpdate",()=>{let i=n();o!==i&&(a.nodeValue=i,o=i)})}addAttributeBindingsTo(r,n){Object.entries(n).forEach(([o,a])=>{if(!a)return;if(["onMount","didMount","willUnmount","willUpdate","onUpdate","didUpdate"].includes(o)&&(a=a.bind(null,r)),["willMount","onMount","didMount","willUnmount","onUnmount","didUnmount"].includes(o)){let l=!1,p=a;a=(...y)=>{if(l){qh(`${o} is a one-time binding but was called multiple times`,this);return}l=!0,p(...y)}}let c=this._bindings[o];this._bindings[o]=c?[...c,a]:[a]})}bindAttributesTo(r,n){Object.keys(n).filter(o=>o!=="children").forEach(o=>{let a=zw(o,n[o]);"value"in a&&a.value!==void 0&&r.setAttribute(o,String(a.value)),a.bindings&&this.addAttributeBindingsTo(r,a.bindings)})}};K.IS_DCGVIEW=!0;var Qw=[];function Oh(e){Qw.push(e)}function qh(e,t){if(Od(t)){let n=`[${t._viewName}]`,o=t.traceViewHierarchy(),a=o.ancestors.length>0?`
View Hierarchy:
${o.formatted}`:"";e=`${e} ${n}${a}`}let r=new Error(e);console.warn(r),Qw.forEach(n=>n(r))}var Yw=e=>{let t=e.length,r=new Array(t),n=new Array(t+1),o=0,a;for(let c=0;c<t;c++){if(e[n[o]]<e[c])a=o+1;else{let l=1,p=o-1;for(;l<=p;){let y=Math.ceil((l+p)/2);e[n[y]]<e[c]?l=y+1:p=y-1}a=l}r[c]=n[a-1],n[a]=c,a>o&&(o=a)}let i=new Array(o),s=n[o];for(let c=o-1;c>=0;c--)i[c]=e[s],s=r[s];return i};function Xw(e,t){let r=new Map(t.map((c,l)=>[c,l])),n=e.filter(c=>!r.has(c)),o=e.filter(c=>r.has(c)).map(c=>r.get(c)),a=Yw(o),i=new Set(a.map(c=>t[c])),s=t.reduceRight((c,l,p)=>{if(!i.has(l)){let y=p+1;c.push({key:l,...y in t?{beforeKey:t[y]}:{}})}return c},[]);return{removes:n,inserts:s}}function ja(e,t,r){if(!t||t.nodeType!==1)throw new Error("Must pass an HTMLElement for the node");if(t._mountedDCGView)throw new Error("This node is already mounted by a view");let n=new e(r)._construct(),o=document.createDocumentFragment();return n.renderTo(o),t.innerHTML="",us(n),t._mountedDCGView=n,t.appendChild(o),ds(n),ps(n),n}function Kc(e){let t=e._mountedDCGView;if(!t)throw new Error("This node is not mounted by a View");ms(t),e.innerHTML="",delete e._mountedDCGView,gs(t),hs(t)}function us(e){e.willMount&&e.willMount(),Gn(e,"willMount"),e._childViews.forEach(us)}function ds(e){e._isMounted=!0,e.onMount&&e.onMount(),Gn(e,"onMount"),e._childViews.forEach(ds)}function ps(e){e.didMount&&e.didMount(),Gn(e,"didMount"),e._childViews.forEach(ps)}function ms(e){e.willUnmount&&e.willUnmount(),Gn(e,"willUnmount"),e._childViews.forEach(ms)}function gs(e){e._isMounted=!1,e._childViews.forEach(gs),Gn(e,"onUnmount"),e.onUnmount&&e.onUnmount()}function hs(e){e._childViews.forEach(hs),Gn(e,"didUnmount"),e.didUnmount&&e.didUnmount()}function Fd(e,t){let r=document.createDocumentFragment();return e.renderTo(r,t),r}function u(e,t,...r){return br(e,!("key"in t)&&r.length>=1?{...t,key:r[0]}:t)}function N(e,t,...r){return u(e,t,...r)}var Dr=qd;var Fh=class extends K{constructor(){super(...arguments);this._viewName="For.Simple"}template(){let{children:r}=this.props;return u(Ye,{each:this.props.each,children:(n,o)=>r(n(),o)},n=>n)}},Bh=class extends K{constructor(){super(...arguments);this._viewName="For.Count"}makeStepsArray(){let r=this.props.from?this.props.from():0,n=Math.floor(this.props.count());return!isFinite(r)||!isFinite(n)?[]:Array.from({length:n},(o,a)=>r+a)}template(){return u(Ye,{each:()=>this.makeStepsArray(),children:r=>this.props.children(r())},r=>r)}},Vh=class extends K{constructor(){super(...arguments);this._viewName="ForWrapper"}template(){return this.props.children}},Ye=class extends K{constructor(){super(...arguments);this._viewName="For";this._keyToData=new Map;this._keyToView=new Map}getKeys(){this._keyToData.clear();let r=this.props.each(),n=r.map((o,a)=>this.props.key(o,a,r));return n.forEach((o,a)=>{if(this._keyToData.has(o))throw new Error(`The key: ${JSON.stringify(o)} is not unique`);this._keyToData.set(o,{item:r[a],index:a})}),n}createViewForKey(r){let n=this._keyToData.get(r),o=this._viewFunction.call(this,()=>(this._keyToData.has(r)&&(n=this._keyToData.get(r)),n.item),()=>(this._keyToData.has(r)&&(n=this._keyToData.get(r)),n.index));if(Un(o)&&o.type==="view"){let i=Vo(o);return this._keyToView.set(r,i),i}let a=Vo(br(Vh,{children:o}));return this._keyToView.set(r,a),a}detachAllRemovedViews(r){let n=this._childViews,o=0;for(let a=0;a<n.length;a++){let i=n[a];r.has(i)?o++:n[a-o]=i}n.splice(n.length-o,o)}updateChildren(){let r=this._keys,n=this.getKeys();this._keys=n;let o=Xw(r,n),a=new Set;for(let s=o.removes.length-1;s>=0;s--){let c=o.removes[s],l=this._keyToView.get(c);ms(l),this._keyToView.delete(c),l.findAllRootDOMNodes().forEach(p=>p.remove()),a.add(l)}a.size>0&&(this.detachAllRemovedViews(a),a.forEach(gs),a.forEach(hs));let i=[];for(let s=o.inserts.length-1;s>=0;s--){let c=o.inserts[s].key;if(this._keyToView.has(c))continue;let l=this.createViewForKey(c);Fd(l,this),i.push(l)}i.forEach(us),o.inserts.forEach(s=>{let c=this._keyToView.get(s.key).findAllRootDOMNodes(),l;"beforeKey"in s?l=this._keyToView.get(s.beforeKey).findFirstRootDOMNode():l=this.findLastRootDOMNode(),c.forEach(p=>{l.before(p)})}),i.forEach(ds),i.forEach(ps);for(let s=0;s<this._childViews.length-i.length;s++)this._childViews[s].update()}renderTo(r,n){var i;super.renderTo(r,n);for(let s of this._keys)this._keyToView.get(s).renderTo(r,this);let o=document.createTextNode("");r.appendChild(o),(i=this._element._nodes[1])==null||i.remove(),this._element._nodes=[this._element._nodes[0],o]}template(){let{children:r}=this.props;return this._viewFunction=r,this._keys=this.getKeys(),this._keys.map(n=>{let o=this.createViewForKey(n);return o._parentElement=this,o}),u(Dr,{})}};Ye.Simple=Fh,Ye.Count=Bh;var $h=class extends K{constructor(){super(...arguments);this._viewName="SwitchWrapper"}template(){return this.props.children}},Vt=class extends K{constructor(){super(...arguments);this._viewName="Switch"}updateKey(){this._key=this.props.key()}createViewSpec(){var n;let r=(n=this._viewFunction(this._key))!=null?n:u(Dr,{});return br($h,{children:r})}createView(){let r=this.createViewSpec(),n=Vo(r);return n._parentElement=this,n}template(){let{children:r}=this.props;return this._viewFunction=r,this.updateKey(),this.createViewSpec()}updateChildren(){let r=this._key;this.updateKey();let n=this._key;if(r===n){this._element.update();return}let o=this.findAllRootDOMNodes(),a=document.createTextNode("");o[0].before(a),ms(this._element),this._childViews=[],o.forEach(s=>s.remove()),gs(this._element),hs(this._element),this._element=this.createView();let i=Fd(this._element,this);us(this._element),a.before(i),a.remove(),ds(this._element),ps(this._element)}};var pt=class extends K{template(){return u(Vt,{children:t=>t?jw(this.props.children):void 0},()=>this.props.when())}};var Wc=class extends K{template(){return u(pt,{when:()=>!this.props.when(),children:this.props.children})}};var J=class extends K{constructor(){super(...arguments);this._viewName="If"}template(){let{predicate:r,children:n}=this.props;return br(Vt,{key:()=>!!r(),children:i=>i?n():void 0})}};function Yr(e,t,r){return{...br(Vt,{key:()=>{let o=e();return o!=null},children:o=>o?t(e):r==null?void 0:r()}),viewName:"IfDefined"}}function xr(e,t,r){let n=typeof r=="undefined",o,a;return n?(o=e,a=i=>{var c;let s=t;return(c=s[i])==null?void 0:c.call(s,()=>i)}):(o=()=>{let i=e();return i&&i[t]},a=i=>{var c;let s=r;return(c=s[i])==null?void 0:c.call(s,e)}),{...br(Vt,{key:o,children:a}),viewName:"SwitchUnion"}}function dr(e,t){return{...xr(()=>e()?"true":"false",t),viewName:"IfElse"}}Oh(e=>Qi(e));var Zw=e=>{let t=e();if(t!=null)return bw(String(t))};cs("href",e=>{let t=Zw(e);return{value:t,bindings:{onUpdate(r){let n=Zw(e);if(t!==n){if(t=n,n===void 0){r.removeAttribute("href");return}r.setAttribute("href",n)}}}}});var jc=(e,t,r)=>cs(e,n=>({value:r,bindings:{onMount(o){ge(o).on(t,n)}}}));jc("onTap","dcg-tap","");jc("onTapStart","dcg-tapstart");jc("onTapMove","dcg-tapmove");jc("onTapEnd","dcg-tapend");jc("onLongHold","dcg-longhold");cs("ignoreRealClick",e=>({bindings:{onMount(t){ge(t).on("click",r=>{!(r.altKey||r.shiftKey||r.metaKey||r.ctrlKey)&&e()&&r.preventDefault()})}}}));cs("manageFocus",e=>({bindings:{onMount(t){let r=e();r!=null&&r.shouldBeFocused()&&!Gc()&&t.focus(),t.onfocus=function(n){let o=e();o!=null&&o.shouldBeFocused()||o==null||o.onFocusedChanged(!0,n)},t.onblur=function(n){let o=e();!(o!=null&&o.shouldBeFocused())||n.target===document.activeElement||o.onFocusedChanged(!1,n)}},onUpdate(t){let r=e();if(r===void 0)return;let n=!!(r!=null&&r.shouldBeFocused()),o=document.activeElement===t;n&&!o?Gc()||t.focus():o&&!n&&t.blur()},willUnmount(t){var r;document.activeElement===t&&((r=e())==null||r.onFocusedChanged(!1)),t.onfocus=null,t.onblur=null}}}));var PL=1,NL={calculator:3,"3d":4,geometry:5,notebook:6},Bd=!1;function e1(){Bd=!0}function $o(e){var r,n;if(!Bd)return;let t=["trackEvent",e.category,e.action,e.name,e.value];xt("testing")?(r=window.paqTest)==null||r.push(t):(window._paq=window._paq||[],(n=window._paq)==null||n.push(t))}var Jw;function fs({force:e}={force:!1}){if(!Bd)return;let t=document.location.href,r=document.referrer;if(!e&&Jw===t)return;if(Jw=t,xt("testing")){window.paqTest=window.paqTest||[],window.paqTest.push(["trackPageView"]);return}let n=window._paq=window._paq||[];n==null||n.push(["setReferrerUrl",r]),n==null||n.push(["setDocumentTitle",window.document.title]),n==null||n.push(["setCustomDimension",PL,window.location!==window.parent.location]);let o=window.location.pathname.split("/")[1],a=NL[o];a!==void 0&&(n==null||n.push(["setCustomDimension",a,!0])),n==null||n.push(["trackPageView"])}function Gh(e){if(!Bd)return;let t=window._paq=window._paq||[],r=xt("testing")?window.paqTest=window.paqTest||[]:t;e?(r.push(["setUserId",e]),fs({force:!0})):(r.push(["resetUserId"]),r.push(["appendToTrackingUrl","new_visit=1"]),fs({force:!0}),r.push(["appendToTrackingUrl",""]))}function t1(e=window.location.pathname){let t=e.split("/");return t.length>1?`/${t[1]}`:"/"}var r1={cb20221031:"1"};var $t={};md($t,{createDictionaryLookupFunction:()=>vs,currentLanguage:()=>ws,detectLanguage:()=>Ms,fetchLanguage:()=>Qa,hasTranslation:()=>xs,i18nWithLanguage:()=>ks,localeAvailable:()=>Zh,locale_dict:()=>uR,raw:()=>Sn,restrictToHomepageLanguages:()=>Qd,s:()=>re,unpack:()=>Ts});function Qc(e){let t=[];for(let r of e){if(!r||typeof r!="string")continue;let n=r.split("-")[0];t.push(r),t.push(n);for(let o in zn){let a=zn[o];o.split("-")[0]===n&&a.useAsRoot&&t.push(o)}}return t}function Vd(){let e={},t=Object.keys(zn);for(let r in t){let n=t[r];e[n]={code:n,display_name:zn[n].displayName}}return e}var _L="https://docs.google.com/document/d/1gV-WgDjgR9hKKb32ffeUpjwggNAgfqxl0Gsg6xocbok/preview",zn={en:{displayName:"English (US)",userGuideURL:_L,useAsRoot:!1},es:{displayName:"Espa\xF1ol (LATAM)",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_ES-ES.pdf",useAsRoot:!0},et:{displayName:"Eesti",useAsRoot:!1},ru:{displayName:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_RU.pdf",useAsRoot:!1},da:{displayName:"Dansk",useAsRoot:!1},de:{displayName:"Deutsch",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_DE.pdf",useAsRoot:!1},"pt-BR":{displayName:"Portugu\xEAs (Brasil)",useAsRoot:!0},"pt-PT":{displayName:"Portugu\xEAs (Portugal)",useAsRoot:!1},ca:{displayName:"Catal\xE0",useAsRoot:!1},fr:{displayName:"Fran\xE7ais",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_FR.pdf",useAsRoot:!0},"fr-CA":{displayName:"Fran\xE7ais (Canada)",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_FR.pdf",useAsRoot:!0},it:{displayName:"Italiano",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_IT.pdf",useAsRoot:!1},is:{displayName:"\xCDslenska",useAsRoot:!1},nl:{displayName:"Nederlands",useAsRoot:!1},no:{displayName:"Norsk",useAsRoot:!1},"sv-SE":{displayName:"Svenska",useAsRoot:!0},hu:{displayName:"Magyar",useAsRoot:!1},cs:{displayName:"\u010Ce\u0161tina",useAsRoot:!1},pl:{displayName:"Polski",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_PL.pdf",useAsRoot:!1},id:{displayName:"Bahasa Indonesia",useAsRoot:!1},vi:{displayName:"Ti\u1EBFng Vi\u1EC7t",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_VI.pdf",useAsRoot:!1},el:{displayName:"\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_EL.pdf",useAsRoot:!1},uk:{displayName:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",useAsRoot:!1},ka:{displayName:"\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8",useAsRoot:!1},th:{displayName:"\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",useAsRoot:!1},tr:{displayName:"T\xFCrk\xE7e",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_TR.pdf",useAsRoot:!1},"zh-CN":{displayName:"\u7B80\u4F53\u4E2D\u6587",useAsRoot:!0,userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_ZH-CN.pdf"},"zh-TW":{displayName:"\u7E41\u9AD4\u4E2D\u6587",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_ZH-TW.pdf",useAsRoot:!1},ko:{displayName:"\uD55C\uAD6D\uC5B4",useAsRoot:!1},ja:{displayName:"\u65E5\u672C\u8A9E",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_JA.pdf",useAsRoot:!1}};var po=class{constructor(t){this.value=t}valueOf(){return this.value}},at=class extends po{constructor(t="???"){super(t)}toString(t){return`{${this.value}}`}},Xr=class extends po{constructor(t,r={}){super(t),this.opts=r}toString(t){if(t)try{return t.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(r){t.reportError(r)}return this.value.toString(10)}},mo=class e extends po{static supportsValue(t){if(typeof t=="number"||t instanceof Date)return!0;if(t instanceof po)return e.supportsValue(t.valueOf());if("Temporal"in globalThis){let r=globalThis.Temporal;if(t instanceof r.Instant||t instanceof r.PlainDateTime||t instanceof r.PlainDate||t instanceof r.PlainMonthDay||t instanceof r.PlainTime||t instanceof r.PlainYearMonth)return!0}return!1}constructor(t,r={}){t instanceof e?(r={...t.opts,...r},t=t.value):t instanceof po&&(t=t.valueOf()),typeof t=="object"&&"calendarId"in t&&r.calendar===void 0&&(r={...r,calendar:t.calendarId}),super(t),this.opts=r}[Symbol.toPrimitive](t){return t==="string"?this.toString():this.toNumber()}toNumber(){let t=this.value;if(typeof t=="number")return t;if(t instanceof Date)return t.getTime();if("epochMilliseconds"in t)return t.epochMilliseconds;if("toZonedDateTime"in t)return t.toZonedDateTime("UTC").epochMilliseconds;throw new TypeError("Unwrapping a non-number value as a number")}toString(t){if(t)try{return t.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(r){t.reportError(r)}return typeof this.value=="number"||this.value instanceof Date?new Date(this.value).toISOString():this.value.toString()}};var n1=100,LL="\u2068",RL="\u2069";function DL(e,t,r){if(r===t||r instanceof Xr&&t instanceof Xr&&r.value===t.value)return!0;if(t instanceof Xr&&typeof r=="string"){let n=e.memoizeIntlObject(Intl.PluralRules,t.opts).select(t.value);if(r===n)return!0}return!1}function o1(e,t,r){return t[r]?ys(e,t[r].value):(e.reportError(new RangeError("No default")),new at)}function Uh(e,t){let r=[],n=Object.create(null);for(let o of t)o.type==="narg"?n[o.name]=Yc(e,o.value):r.push(Yc(e,o));return{positional:r,named:n}}function Yc(e,t){switch(t.type){case"str":return t.value;case"num":return new Xr(t.value,{minimumFractionDigits:t.precision});case"var":return qL(e,t);case"mesg":return OL(e,t);case"term":return FL(e,t);case"func":return BL(e,t);case"select":return VL(e,t);default:return new at}}function qL(e,{name:t}){let r;if(e.params)if(Object.prototype.hasOwnProperty.call(e.params,t))r=e.params[t];else return new at(`$${t}`);else if(e.args&&Object.prototype.hasOwnProperty.call(e.args,t))r=e.args[t];else return e.reportError(new ReferenceError(`Unknown variable: $${t}`)),new at(`$${t}`);if(r instanceof po)return r;switch(typeof r){case"string":return r;case"number":return new Xr(r);case"object":if(mo.supportsValue(r))return new mo(r);default:return e.reportError(new TypeError(`Variable type not supported: $${t}, ${typeof r}`)),new at(`$${t}`)}}function OL(e,{name:t,attr:r}){let n=e.bundle._messages.get(t);if(!n)return e.reportError(new ReferenceError(`Unknown message: ${t}`)),new at(t);if(r){let o=n.attributes[r];return o?ys(e,o):(e.reportError(new ReferenceError(`Unknown attribute: ${r}`)),new at(`${t}.${r}`))}return n.value?ys(e,n.value):(e.reportError(new ReferenceError(`No value: ${t}`)),new at(t))}function FL(e,{name:t,attr:r,args:n}){let o=`-${t}`,a=e.bundle._terms.get(o);if(!a)return e.reportError(new ReferenceError(`Unknown term: ${o}`)),new at(o);if(r){let s=a.attributes[r];if(s){e.params=Uh(e,n).named;let c=ys(e,s);return e.params=null,c}return e.reportError(new ReferenceError(`Unknown attribute: ${r}`)),new at(`${o}.${r}`)}e.params=Uh(e,n).named;let i=ys(e,a.value);return e.params=null,i}function BL(e,{name:t,args:r}){let n=e.bundle._functions[t];if(!n)return e.reportError(new ReferenceError(`Unknown function: ${t}()`)),new at(`${t}()`);if(typeof n!="function")return e.reportError(new TypeError(`Function ${t}() is not callable`)),new at(`${t}()`);try{let o=Uh(e,r);return n(o.positional,o.named)}catch(o){return e.reportError(o),new at(`${t}()`)}}function VL(e,{selector:t,variants:r,star:n}){let o=Yc(e,t);if(o instanceof at)return o1(e,r,n);for(let a of r){let i=Yc(e,a.key);if(DL(e,o,i))return ys(e,a.value)}return o1(e,r,n)}function zh(e,t){if(e.dirty.has(t))return e.reportError(new RangeError("Cyclic reference")),new at;e.dirty.add(t);let r=[],n=e.bundle._useIsolating&&t.length>1;for(let o of t){if(typeof o=="string"){r.push(e.bundle._transform(o));continue}if(e.placeables++,e.placeables>n1)throw e.dirty.delete(t),new RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${n1}`);n&&r.push(LL),r.push(Yc(e,o).toString(e)),n&&r.push(RL)}return e.dirty.delete(t),r.join("")}function ys(e,t){return typeof t=="string"?e.bundle._transform(t):zh(e,t)}var $d=class{constructor(t,r,n){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=t,this.errors=r,this.args=n}reportError(t){if(!this.errors||!(t instanceof Error))throw t;this.errors.push(t)}memoizeIntlObject(t,r){let n=this.bundle._intls.get(t);n||(n={},this.bundle._intls.set(t,n));let o=JSON.stringify(r);return n[o]||(n[o]=new t(this.bundle.locales,r)),n[o]}};function Hh(e,t){let r=Object.create(null);for(let[n,o]of Object.entries(e))t.includes(n)&&(r[n]=o.valueOf());return r}var a1=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function i1(e,t){let r=e[0];if(r instanceof at)return new at(`NUMBER(${r.valueOf()})`);if(r instanceof Xr)return new Xr(r.valueOf(),{...r.opts,...Hh(t,a1)});if(r instanceof mo)return new Xr(r.toNumber(),{...Hh(t,a1)});throw new TypeError("Invalid argument to NUMBER")}var $L=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function s1(e,t){let r=e[0];if(r instanceof at)return new at(`DATETIME(${r.valueOf()})`);if(r instanceof mo||r instanceof Xr)return new mo(r,Hh(t,$L));throw new TypeError("Invalid argument to DATETIME")}var c1=new Map;function l1(e){let t=Array.isArray(e)?e.join(" "):e,r=c1.get(t);return r===void 0&&(r=new Map,c1.set(t,r)),r}var Xc=class{constructor(t,{functions:r,useIsolating:n=!0,transform:o=a=>a}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(t)?t:[t],this._functions={NUMBER:i1,DATETIME:s1,...r},this._useIsolating=n,this._transform=o,this._intls=l1(t)}hasMessage(t){return this._messages.has(t)}getMessage(t){return this._messages.get(t)}addResource(t,{allowOverrides:r=!1}={}){let n=[];for(let o=0;o<t.body.length;o++){let a=t.body[o];if(a.id.startsWith("-")){if(r===!1&&this._terms.has(a.id)){n.push(new Error(`Attempt to override an existing term: "${a.id}"`));continue}this._terms.set(a.id,a)}else{if(r===!1&&this._messages.has(a.id)){n.push(new Error(`Attempt to override an existing message: "${a.id}"`));continue}this._messages.set(a.id,a)}}return n}formatPattern(t,r=null,n=null){if(typeof t=="string")return this._transform(t);let o=new $d(this,n,r);try{return zh(o,t).toString(o)}catch(a){if(o.errors&&a instanceof Error)return o.errors.push(a),new at().toString(o);throw a}}};var Kh=/^(-?[a-zA-Z][\w-]*) *= */gm,u1=/\.([a-zA-Z][\w-]*) *= */y,GL=/\*?\[/y,Wh=/(-?[0-9]+(?:\.([0-9]+))?)/y,UL=/([a-zA-Z][\w-]*)/y,d1=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,zL=/^[A-Z][A-Z0-9_-]*$/,Gd=/([^{}\n\r]+)/y,HL=/([^\\"\n\r]*)/y,p1=/\\([\\"])/y,m1=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,KL=/^\n+/,g1=/ +$/,WL=/ *\r?\n/g,jL=/( *)$/,QL=/{\s*/y,h1=/\s*}/y,YL=/\[\s*/y,XL=/\s*] */y,ZL=/\s*\(\s*/y,JL=/\s*->\s*/y,eR=/\s*:\s*/y,tR=/\s*,?\s*/y,rR=/\s+/y,bs=class{constructor(t){this.body=[],Kh.lastIndex=0;let r=0;for(;;){let I=Kh.exec(t);if(I===null)break;r=Kh.lastIndex;try{this.body.push(c(I[1]))}catch(oe){if(oe instanceof SyntaxError)continue;throw oe}}function n(I){return I.lastIndex=r,I.test(t)}function o(I,oe){if(t[r]===I)return r++,!0;if(oe)throw new oe(`Expected ${I}`);return!1}function a(I,oe){if(n(I))return r=I.lastIndex,!0;if(oe)throw new oe(`Expected ${I.toString()}`);return!1}function i(I){I.lastIndex=r;let oe=I.exec(t);if(oe===null)throw new SyntaxError(`Expected ${I.toString()}`);return r=I.lastIndex,oe}function s(I){return i(I)[1]}function c(I){let oe=p(),Ie=l();if(oe===null&&Object.keys(Ie).length===0)throw new SyntaxError("Expected message value or attributes");return{id:I,value:oe,attributes:Ie}}function l(){let I=Object.create(null);for(;n(u1);){let oe=s(u1),Ie=p();if(Ie===null)throw new SyntaxError("Expected attribute value");I[oe]=Ie}return I}function p(){let I;if(n(Gd)&&(I=s(Gd)),t[r]==="{"||t[r]==="}")return y(I?[I]:[],1/0);let oe=P();return oe?I?y([I,oe],oe.length):(oe.value=D(oe.value,KL),y([oe],oe.length)):I?D(I,g1):null}function y(I=[],oe){for(;;){if(n(Gd)){I.push(s(Gd));continue}if(t[r]==="{"){I.push(x());continue}if(t[r]==="}")throw new SyntaxError("Unbalanced closing brace");let cr=P();if(cr){I.push(cr),oe=Math.min(oe,cr.length);continue}break}let Ie=I.length-1,_t=I[Ie];typeof _t=="string"&&(I[Ie]=D(_t,g1));let yr=[];for(let cr of I)cr instanceof Ud&&(cr=cr.value.slice(0,cr.value.length-oe)),cr&&yr.push(cr);return yr}function x(){a(QL,SyntaxError);let I=M();if(a(h1))return I;if(a(JL)){let oe=w();return a(h1,SyntaxError),{type:"select",selector:I,...oe}}throw new SyntaxError("Unclosed placeable")}function M(){if(t[r]==="{")return x();if(n(d1)){let[,I,oe,Ie=null]=i(d1);if(I==="$")return{type:"var",name:oe};if(a(ZL)){let _t=L();if(I==="-")return{type:"term",name:oe,attr:Ie,args:_t};if(zL.test(oe))return{type:"func",name:oe,args:_t};throw new SyntaxError("Function names must be all upper-case")}return I==="-"?{type:"term",name:oe,attr:Ie,args:[]}:{type:"mesg",name:oe,attr:Ie}}return V()}function L(){let I=[];for(;;){switch(t[r]){case")":return r++,I;case void 0:throw new SyntaxError("Unclosed argument list")}I.push(T()),a(tR)}}function T(){let I=M();return I.type!=="mesg"?I:a(eR)?{type:"narg",name:I.name,value:V()}:I}function w(){let I=[],oe=0,Ie;for(;n(GL);){o("*")&&(Ie=oe);let _t=k(),yr=p();if(yr===null)throw new SyntaxError("Expected variant value");I[oe++]={key:_t,value:yr}}if(oe===0)return null;if(Ie===void 0)throw new SyntaxError("Expected default variant");return{variants:I,star:Ie}}function k(){a(YL,SyntaxError);let I;return n(Wh)?I=j():I={type:"str",value:s(UL)},a(XL,SyntaxError),I}function V(){if(n(Wh))return j();if(t[r]==='"')return te();throw new SyntaxError("Invalid expression")}function j(){let[,I,oe=""]=i(Wh),Ie=oe.length;return{type:"num",value:parseFloat(I),precision:Ie}}function te(){o('"',SyntaxError);let I="";for(;;){if(I+=s(HL),t[r]==="\\"){I+=Te();continue}if(o('"'))return{type:"str",value:I};throw new SyntaxError("Unclosed string literal")}}function Te(){if(n(p1))return s(p1);if(n(m1)){let[,I,oe]=i(m1),Ie=parseInt(I||oe,16);return Ie<=55295||57344<=Ie?String.fromCodePoint(Ie):"\uFFFD"}throw new SyntaxError("Unknown escape sequence")}function P(){let I=r;switch(a(rR),t[r]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return B(t.slice(I,r))}return t[r-1]===" "?B(t.slice(I,r)):!1}function D(I,oe){return I.replace(oe,"")}function B(I){let oe=I.replace(WL,`
`),Ie=jL.exec(I)[1].length;return new Ud(oe,Ie)}}},Ud=class{constructor(t,r){this.value=t,this.length=r}};function zd(e){return{__isLocalizableNumericValue:!0,value:e}}function Hd(e){return e&&e.__isLocalizableNumericValue}var oR=["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"],Kd=class e{constructor(t,r){this.bundles=t,this.onError=r}static fromSources(t,r,n){let o=[];for(let{lang:a,source:i}of t){let s=a.split("-")[0],c=new Xc(a,{...n,useIsolating:oR.indexOf(s)>=0});c.addResource(new bs(i),{allowOverrides:!1}),c.addResource(new bs(`
l10n-internal-date-day-month-year = {DATETIME($d, month: "short", day: "numeric", year: "numeric")}
l10n-internal-date-day-month = {DATETIME($d, month: "short", day: "numeric")}
l10n-internal-time = {DATETIME($d, minute: "numeric", hour: "numeric")}
      `),{allowOverrides:!1}),o.push(c)}return new e(o,r)}format(t,r){for(let n of this.bundles){if(!n.hasMessage(t))continue;let o=n.getMessage(t);if(!(o!=null&&o.value))return;let a=[],i=n.formatPattern(o.value,this.coerceNumericVariables(r),a);for(let s of a)this.onError(`Error formatting ${t} for locale ${n.locales.join(",")}: ${s}`);return i}this.onError(`Couldn't find message for key ${t} for locales ${this.getLocales().join(",")}`)}formatDate(t,r){return r.showYear?this.format("l10n-internal-date-day-month-year",{d:t}):this.format("l10n-internal-date-day-month",{d:t})}formatTime(t){let r=this.format("l10n-internal-time",{d:t});return this.getLocales()[0]==="en"?r==null?void 0:r.toLowerCase():r}hasTranslation(t,r){for(let n of this.bundles)if(n.locales.indexOf(r)>=0)return n.hasMessage(t);return!1}coerceNumericVariables(t){let r={};for(let n in t){let o=t[n];Hd(o)?r[n]=o.value:typeof o=="number"?r[n]=`${o}`:r[n]=o}return r}getLocales(){return this.bundles.reduce((t,r)=>t.concat(r.locales),[])}};var f1=`account-shell-button-workspace = Workspace { $name }
account-shell-error-connection-failed = Connection failed. Try checking your internet connection.
account-shell-error-logging-out = Error logging out.
account-shell-error-unexpected-server = Unexpected server error. Try again, or e-mail { $email }.
account-shell-error-unknown = Sorry! Something went wrong. Please try again later.
account-shell-link-account-settings = Account Settings
account-shell-link-log-out = Log Out
account-shell-link-manage-workspaces = Manage Workspaces
account-shell-text-login-window-blocked-apple = Login window blocked. Please allow popups from desmos.com to sign in with Apple
account-shell-text-login-window-blocked-google = Login window blocked. Please allow popups from desmos.com to sign in with Google.
account-shell-text-personal-workspace = Personal
account-shell-text-pick-language = Pick a Language
account-shell-text-sole-team-owner-note = Note: You can't delete your account or change your email since this account is the only owner of a team workspace.
account-shell-text-team-change-email = Note: You can't change your email since this account is associated with a team workspace.
shared-button-back = Back
shared-button-cancel = Cancel
shared-button-change-email-address = Change email address
shared-button-change-email-and-password = Change email and password
shared-button-close-dialog = Close Dialog
shared-button-confirm-log-out-all-devices = Yes, Log Out
shared-button-confirm-name = Confirm Name
shared-button-continue-to-desmos = Continue to Desmos
shared-button-delete-account-question = Delete your Desmos account?
shared-button-explore-professional = Explore Professional
shared-button-fun-classification = I'm here for fun
shared-button-hide-password = Hide Password
shared-button-login-capitalized = Log In
shared-button-next = Next
shared-button-non-education-classification = I work outside of education
shared-button-recover-password = Recover Password
shared-button-save = Save
shared-button-send-delete-account-email = Send Delete Account Email
shared-button-send-email = Send Email
shared-button-show-password = Show Password
shared-button-sign-up = Sign Up
shared-button-student-classification = I'm a student
shared-button-teacher-classification = I'm an educator
shared-button-try-again = Didn't work? Try again!
shared-calculator-button-clear = clear
shared-calculator-button-clear-all = clear all
shared-calculator-button-language = Language
shared-calculator-button-print = Print
shared-calculator-button-reverse-contrast = Reverse Contrast
shared-calculator-error-add-type-error = Cannot add { $symbol1 } and { $symbol2 }.
shared-calculator-error-adjacent-mixed-number = Sorry, I don't know what to do with mixed number '{ $mixedNumber }'. Try using a '*' symbol around it.
shared-calculator-error-adjacent-numbers = Sorry, I don't know what to do with adjacent numbers '{ $left }' and '{ $right }'. Try using parentheses or a '*' symbol.
shared-calculator-error-ambiguous-conditions = Ambiguous use of 'and' and 'or'. Try adding parentheses.
shared-calculator-error-bad-implicit-call = Use parentheses around the argument of '{ $symbol }'.
shared-calculator-error-bad-log-exponent = Only { $form } is supported. Otherwise, use parens.
shared-calculator-error-bad-symbol-context = You can't use '{ $symbol }' in this context.
shared-calculator-error-bad-trig-exponent = Only { $form1 } and { $form2 } are supported. Otherwise, use parens.
shared-calculator-error-binary-operator-missing-operand = You need something on both sides of the '{ $symbol }' symbol.
shared-calculator-error-blank-expression = You haven't written anything yet.
shared-calculator-error-cannot-subscript = '{ $symbol }' cannot have a subscript.
shared-calculator-error-colon-missing-condition = The left side of a ':' must be a condition, like 'x>1'.
shared-calculator-error-comma-with-logical-operators = Commas cannot be combined with 'and' or 'or' in the same condition. Replace the comma with 'or'.
shared-calculator-error-comprehension-semicolon-comma-mix = Cannot mix ';' and ',' on the right-hand side of 'for'.
shared-calculator-error-derivative-missing-body = What do you want to take the derivative of?
shared-calculator-error-differential-with-superscript = Integration variable cannot have a superscript.
shared-calculator-error-divide-type-error = Cannot divide { $symbol1 } by { $symbol2 }.
shared-calculator-error-dot-lhs-constant-number = Sorry, I don't understand this use of '.' after a constant number.
shared-calculator-error-dot-rhs-property-error = '.{ $symbol }' cannot be followed by parentheses.
shared-calculator-error-empty-matrix-literal = A matrix literal must have at least one element.
shared-calculator-error-empty-paren = Parentheses cannot be empty.
shared-calculator-error-empty-pipe = Absolute value symbol cannot be empty.
shared-calculator-error-empty-radical = Radical cannot be empty.
shared-calculator-error-empty-radical-index = Radical index cannot be empty.
shared-calculator-error-empty-square-bracket = Square brackets cannot be empty.
shared-calculator-error-empty-subscript = Subscripts cannot be empty.
shared-calculator-error-empty-superscript = Superscripts cannot be empty.
shared-calculator-error-equations-unsupported = This calculator does not support this type of equation.
shared-calculator-error-exponent-type-error = Cannot raise { $symbol1 } to { $symbol2 }.
shared-calculator-error-feature-unavailable = This feature is not available in the current calculator.
shared-calculator-error-fraction-empty = You need a numerator and denominator for your fraction.
shared-calculator-error-fraction-missing-denominator = You need a denominator for the bottom of your fraction.
shared-calculator-error-fraction-missing-numerator = You need a numerator for the top of your fraction.
shared-calculator-error-function-definition-unsupported = This calculator does not support function definitions.
shared-calculator-error-function-not-defined = Function '{ $dependency }' is not defined.
shared-calculator-error-function-only-works-in-complex = The '{ $symbol }' function is only available in complex mode.
shared-calculator-error-function-type-error-1 = Function '{ $fn }' cannot be applied to { $arg }.
shared-calculator-error-function-type-error-2 = Function '{ $fn }' cannot be applied to { $arg1 } and { $arg2 }.
shared-calculator-error-function-type-error-many = Function '{ $fn }' cannot be applied to these arguments.
shared-calculator-error-function-unsupported = This calculator does not support the '{ $symbol }' function.
shared-calculator-error-incorrect-list-comprehension-input = Definitions on the right-hand side of 'for' must set a variable equal to a list. Try i=[1...10].
shared-calculator-error-incorrect-product-lower-bound = Lower bound of a product must set a variable equal to a number. Try n=1.
shared-calculator-error-incorrect-sum-lower-bound = Lower bound of a sum must set a variable equal to a number. Try n=1.
shared-calculator-error-inequalities-unsupported = This calculator does not support inequalities.
shared-calculator-error-integral-missing-body = What do you want to take the integral of?
shared-calculator-error-integral-missing-bound = Integrals must have upper and lower bounds.
shared-calculator-error-integral-missing-differential = Integrand must end with an integration variable, like dx.
shared-calculator-error-internal-error = [internal] { $msg }
shared-calculator-error-invalid-half-empty-range = Range must have an upper and lower bound.
shared-calculator-error-invalid-interval-comprehension-invalid-bound = Parameter bounds on the right-hand side of 'for' must be of the form '0<{ $identifier }<1'.
shared-calculator-error-invalid-operator-name = Operator names may only contain letters.
shared-calculator-error-invalid-subscript = Subscripts may only contain letters and digits. '{ $symbol }' is not allowed.
shared-calculator-error-logical-operator-outside-condition = '{ $symbol }' can only be used as part of a condition.
shared-calculator-error-logical-operator-requires-conditions = Both sides of '{ $symbol }' must be conditions.
shared-calculator-error-matrix-add-dimensions = Cannot add matrices with different dimensions.
shared-calculator-error-matrix-assignment = This calculator does not support this type of variable definition. Try using 'New Matrix'.
shared-calculator-error-matrix-element-type-error = Cannot use { $arg } as an element of a matrix.
shared-calculator-error-matrix-fractional-power = A matrix can only be raised to integer powers.
shared-calculator-error-matrix-index-too-many-semicolons = A matrix index must have only one ';'.
shared-calculator-error-matrix-invalid-variable = Cannot use '{ $symbol }' as a variable.
shared-calculator-error-matrix-multiply-dimensions = Cannot multiply matrices with incompatible dimensions.
shared-calculator-error-matrix-point-dimensions = Cannot multiply a { $rows }\xD7{ $cols } matrix by { $point }. Both matrix dimensions must equal the point's dimension.
shared-calculator-error-matrix-power-dimensions = Only square matrices can be raised to a power.
shared-calculator-error-matrix-shortcut-hint = Use # to make a matrix. Type #22 for a 2\xD72 matrix.
shared-calculator-error-matrix-subtract-dimensions = Cannot subtract matrices with different dimensions.
shared-calculator-error-mismatched-braces = Expected '{ $symbol1 }' to match '{ $symbol2 }'.
shared-calculator-error-multiply-type-error = Cannot multiply { $symbol1 } by { $symbol2 }.
shared-calculator-error-negative-type-error = Cannot negate { $symbol }.
shared-calculator-error-non-singular-inverse = Singular matrices do not have an inverse.
shared-calculator-error-non-square-determinant = Only square matrices have a determinant.
shared-calculator-error-non-square-inverse = Only square matrices have an inverse.
shared-calculator-error-non-square-trace = Only square matrices have a trace.
shared-calculator-error-parse-error = Sorry, I don't understand this.
shared-calculator-error-percent-missing-of = '%' must be used with 'of'. Try '25% of 12'.
shared-calculator-error-piecewise-missing-condition = A piecewise expression must have at least one condition.
shared-calculator-error-piecewise-part-missing-condition = Every part of a piecewise expression must have a condition except the last.
shared-calculator-error-points-unsupported = This calculator does not support points.
shared-calculator-error-polygon-unsupported-in-3d = This calculator does not support the 'polygon' function. Try 'triangle' instead.
shared-calculator-error-prime-without-paren = Primed function calls must use parentheses.
shared-calculator-error-primed-function-arity = Prime notation can only be used for functions of a single argument.
shared-calculator-error-product-missing-body = What do you want to take the product of?
shared-calculator-error-product-missing-bound = Products must have upper and lower bounds.
shared-calculator-error-regressions-unsupported = This calculator does not support regressions.
shared-calculator-error-substitution-ambiguous-comma = Ambiguous use of ',' and '{ $operation }'. Add parentheses around the '{ $operation }' expression.
shared-calculator-error-substitution-invalid-assignments = 'with' must be followed by one or more variable definitions.
shared-calculator-error-substitution-nested = Using one 'with' expression inside another 'with' expression is not allowed.
shared-calculator-error-substitution-unsupported-interval = Intervals are not allowed on the right-hand side of 'with'. You might want to try using 'for' instead.
shared-calculator-error-subtract-type-error = Cannot subtract { $symbol2 } from { $symbol1 }.
shared-calculator-error-sum-missing-body = What do you want to take the sum of?
shared-calculator-error-sum-missing-bound = Sums must have upper and lower bounds.
shared-calculator-error-superscript-with-prime = Superscripts and primes cannot be combined.
shared-calculator-error-token-with-subscript = Tokens may not have subscripts.
shared-calculator-error-too-many-variables-many-symbols = Too many variables. Try defining '{ $variables }' or '{ $lastVariable }'.
shared-calculator-error-too-many-variables-no-symbols = Too many variables, I don't know what to do with this.
shared-calculator-error-too-many-variables-one-symbol = Too many variables. Try defining '{ $variable }'.
shared-calculator-error-unary-operator-missing-left = You need something before the '{ $symbol }' symbol.
shared-calculator-error-unary-operator-missing-right = You need something after the '{ $symbol }' symbol.
shared-calculator-error-unexpected-equality = Cannot use an equality here.
shared-calculator-error-unexpected-inequality = Cannot use an inequality here.
shared-calculator-error-unexpected-prime = Sorry, I don't understand this use of prime notation.
shared-calculator-error-unexpected-subscript = Only functions and variables may have subscripts.
shared-calculator-error-unexpected-symbol = Sorry, I don't understand the way that '{ $symbol }' is used here.
shared-calculator-error-unrecognized-symbol = Sorry, I don't understand the '{ $symbol }' symbol.
shared-calculator-error-update-rule-non-identifier-lhs = The left hand side of '{ $arrow }' should be a variable name like '{ $example }'.
shared-calculator-error-variable-as-function = Variable '{ $dependency }' can't be used as a function.
shared-calculator-error-write-integral = Type '{ $command }' for { $symbol }.
shared-calculator-error-wrong-arity-many-arg = Function '{ $dependency }' requires { $assignment_arity } arguments. { $supplement }
shared-calculator-error-wrong-arity-single-arg-too-few = Function '{ $dependency }' requires an argument. { $supplement }
shared-calculator-error-wrong-arity-single-arg-too-many = Function '{ $dependency }' requires only 1 argument. { $supplement }
shared-calculator-error-wrong-arity-supplement = For example, try typing: { $recommendation }.
shared-calculator-label-accessibility = Accessibility
shared-calculator-label-tooltip-convert-to-decimal = Convert to decimal.
shared-calculator-label-tooltip-convert-to-fraction = Convert to fraction.
shared-calculator-label-undefined = undefined
shared-calculator-label-value-type-action = an action
shared-calculator-label-value-type-angle = an angle
shared-calculator-label-value-type-any = an unknown object
shared-calculator-label-value-type-arc = an arc
shared-calculator-label-value-type-bool = a true/false value
shared-calculator-label-value-type-chi-square-goodness-of-fit = a chi-square goodness of fit test
shared-calculator-label-value-type-chi-square-test-of-independence = a chi-square test for independence
shared-calculator-label-value-type-circle = a circle
shared-calculator-label-value-type-color = a color
shared-calculator-label-value-type-complex = a complex number
shared-calculator-label-value-type-confidence-interval = a confidence interval
shared-calculator-label-value-type-directed-angle = a directed angle
shared-calculator-label-value-type-distribution = a distribution
shared-calculator-label-value-type-empty-list = an empty list
shared-calculator-label-value-type-error = an error object
shared-calculator-label-value-type-lambda-complex = a parameterized complex number
shared-calculator-label-value-type-lambda-point = a parameterized point
shared-calculator-label-value-type-lambda-point3d = a parameterized 3d point
shared-calculator-label-value-type-line = a line
shared-calculator-label-value-type-list-of-2d-points = a list of 2d points
shared-calculator-label-value-type-list-of-3d-points = a list of 3d points
shared-calculator-label-value-type-list-of-angles = a list of angles
shared-calculator-label-value-type-list-of-any = a list of unknown objects
shared-calculator-label-value-type-list-of-arcs = a list of arcs
shared-calculator-label-value-type-list-of-bool = a list of true/false values
shared-calculator-label-value-type-list-of-chi-square-goodness-of-fit = a list of chi-square tests of goodness of fit
shared-calculator-label-value-type-list-of-chi-square-test-of-independence = a list of chi-square tests of independence
shared-calculator-label-value-type-list-of-circles = a list of circles
shared-calculator-label-value-type-list-of-colors = a list of colors
shared-calculator-label-value-type-list-of-complex = a list of complex numbers
shared-calculator-label-value-type-list-of-confidence-interval = a list of confidence intervals
shared-calculator-label-value-type-list-of-directed-angles = a list of directed angles
shared-calculator-label-value-type-list-of-distributions = a list of distributions
shared-calculator-label-value-type-list-of-lambda-complex = a list of parameterized complex numbers
shared-calculator-label-value-type-list-of-lambda-point = a list of parameterized points
shared-calculator-label-value-type-list-of-lambda-point3d = a list of parameterized 3d points
shared-calculator-label-value-type-list-of-lines = a list of lines
shared-calculator-label-value-type-list-of-matrices = a list of matrices
shared-calculator-label-value-type-list-of-numbers = a list of numbers
shared-calculator-label-value-type-list-of-one-proportion-z-inference = a list of one-proportion z-inference objects
shared-calculator-label-value-type-list-of-one-sample-t-inference = a list of one-sample t-inference objects
shared-calculator-label-value-type-list-of-one-sample-z-inference = a list of one-sample z-inference objects
shared-calculator-label-value-type-list-of-points = a list of points
shared-calculator-label-value-type-list-of-polygons = a list of polygons
shared-calculator-label-value-type-list-of-rays = a list of rays
shared-calculator-label-value-type-list-of-regression-t-inference = a list of regression t-inference objects
shared-calculator-label-value-type-list-of-restrictions = a list of restrictions
shared-calculator-label-value-type-list-of-segment3d = a list of 3d segments
shared-calculator-label-value-type-list-of-segments = a list of segments
shared-calculator-label-value-type-list-of-sphere3d = a list of 3d sphere
shared-calculator-label-value-type-list-of-string = a list of strings
shared-calculator-label-value-type-list-of-t-significance-test = a list of t tests
shared-calculator-label-value-type-list-of-tone = a list of tones
shared-calculator-label-value-type-list-of-transformations = a list of transformations
shared-calculator-label-value-type-list-of-triangle3d = a list of 3d triangles
shared-calculator-label-value-type-list-of-two-proportion-z-inference = a list of two-proportion z-inference objects
shared-calculator-label-value-type-list-of-two-sample-t-inference = a list of two-sample t-inference objects
shared-calculator-label-value-type-list-of-two-sample-z-inference = a list of two-sample z-inference objects
shared-calculator-label-value-type-list-of-vector3d = a list of 3d vectors
shared-calculator-label-value-type-list-of-vectors = a list of vectors
shared-calculator-label-value-type-list-of-z-significance-test = a list of z tests
shared-calculator-label-value-type-matrix = a matrix
shared-calculator-label-value-type-number = a number
shared-calculator-label-value-type-one-proportion-z-inference = a one-proportion z-inference object
shared-calculator-label-value-type-one-sample-t-inference = a one-sample t-inference object
shared-calculator-label-value-type-one-sample-z-inference = a one-sample z-inference object
shared-calculator-label-value-type-point = a point
shared-calculator-label-value-type-point2d = a 2d point
shared-calculator-label-value-type-point3d = a 3d point
shared-calculator-label-value-type-polygon = a polygon
shared-calculator-label-value-type-ray = a ray
shared-calculator-label-value-type-regression-t-inference = a regression t-inference object
shared-calculator-label-value-type-restriction = a restriction
shared-calculator-label-value-type-seed = a string
shared-calculator-label-value-type-segment = a segment
shared-calculator-label-value-type-segment3d = a 3d segment
shared-calculator-label-value-type-sphere3d = a 3d sphere
shared-calculator-label-value-type-string = a string
shared-calculator-label-value-type-t-significance-test = a t test
shared-calculator-label-value-type-tone = a tone
shared-calculator-label-value-type-transformation = a transformation
shared-calculator-label-value-type-triangle3d = a 3d triangle
shared-calculator-label-value-type-two-proportion-z-inference = a two-proportion z-inference object
shared-calculator-label-value-type-two-sample-t-inference = a two-sample t-inference object
shared-calculator-label-value-type-two-sample-z-inference = a two-sample z-inference object
shared-calculator-label-value-type-vector = a vector
shared-calculator-label-value-type-vector3d = a 3d vector
shared-calculator-label-value-type-z-significance-test = a z test
shared-calculator-narration-display-as-decimal = Displaying as fraction. Press Enter to display as Decimal
shared-calculator-narration-display-as-fraction = Displaying as decimal. Press Enter to display as Fraction
shared-calculator-narration-evaluation = equals { $answer }
shared-calculator-narration-expression = Expression
shared-calculator-narration-expression-list = Expression List
shared-calculator-narration-keypad = keypad
shared-calculator-narration-keypad-controlbar = Control Bar
shared-calculator-narration-keypad-key-10-n = Times ten to the power of
shared-calculator-narration-keypad-key-abs = Absolute Value
shared-calculator-narration-keypad-key-action-to = Set Value To
shared-calculator-narration-keypad-key-action-with = Substitute With
shared-calculator-narration-keypad-key-alpha = Alpha
shared-calculator-narration-keypad-key-angle = Angle
shared-calculator-narration-keypad-key-angles = Angles
shared-calculator-narration-keypad-key-ans = Answer
shared-calculator-narration-keypad-key-arc = Arc
shared-calculator-narration-keypad-key-arccos = Inverse Cosine
shared-calculator-narration-keypad-key-arccot = Inverse Cotangent
shared-calculator-narration-keypad-key-arccsc = Inverse Cosecant
shared-calculator-narration-keypad-key-arcsec = Inverse Secant
shared-calculator-narration-keypad-key-arcsin = Inverse Sine
shared-calculator-narration-keypad-key-arctan = Inverse Tangent
shared-calculator-narration-keypad-key-area = Area
shared-calculator-narration-keypad-key-arg = Argument
shared-calculator-narration-keypad-key-backspace = Backspace
shared-calculator-narration-keypad-key-beta = Beta
shared-calculator-narration-keypad-key-binomialdist = Binomial Distribution
shared-calculator-narration-keypad-key-boxplot = Box Plot
shared-calculator-narration-keypad-key-ceil = Ceiling
shared-calculator-narration-keypad-key-center = Center
shared-calculator-narration-keypad-key-chisqdist = Chi-Square Distribution
shared-calculator-narration-keypad-key-chisqgof = Chi-Square Goodness of Fit Test
shared-calculator-narration-keypad-key-chisqtest = Chi-Square Test
shared-calculator-narration-keypad-key-circle = Circle
shared-calculator-narration-keypad-key-columns = Columns
shared-calculator-narration-keypad-key-conf = Confidence Level
shared-calculator-narration-keypad-key-conj = Complex conjugate
shared-calculator-narration-keypad-key-corr = Correlation
shared-calculator-narration-keypad-key-cos = Cosine
shared-calculator-narration-keypad-key-cosh = Hyperbolic Cosine
shared-calculator-narration-keypad-key-cot = Cotangent
shared-calculator-narration-keypad-key-coterminal = Coterminal
shared-calculator-narration-keypad-key-coth = Hyperbolic Cotangent
shared-calculator-narration-keypad-key-cov = Co Variance
shared-calculator-narration-keypad-key-covp = Population Co Variance
shared-calculator-narration-keypad-key-csc = Cosecant
shared-calculator-narration-keypad-key-csch = Hyperbolic Cosecant
shared-calculator-narration-keypad-key-cubed = Cubed
shared-calculator-narration-keypad-key-decimal = Decimal
shared-calculator-narration-keypad-key-dilate = Dilate
shared-calculator-narration-keypad-key-directed-angle = Directed Angle
shared-calculator-narration-keypad-key-directed-angles = Directed Angles
shared-calculator-narration-keypad-key-discretedist = Discrete Distribution
shared-calculator-narration-keypad-key-distance = Distance
shared-calculator-narration-keypad-key-divide = Divide
shared-calculator-narration-keypad-key-dof = Degrees of Freedom
shared-calculator-narration-keypad-key-dotplot = Dot Plot
shared-calculator-narration-keypad-key-enter = Enter
shared-calculator-narration-keypad-key-erf = Error Function
shared-calculator-narration-keypad-key-exp = Exponent
shared-calculator-narration-keypad-key-factorial = Factorial
shared-calculator-narration-keypad-key-floor = Floor
shared-calculator-narration-keypad-key-fraction = A over B
shared-calculator-narration-keypad-key-geodist = Geometric Distribution
shared-calculator-narration-keypad-key-glider = Glider
shared-calculator-narration-keypad-key-histogram = Histogram
shared-calculator-narration-keypad-key-imag = Imaginary
shared-calculator-narration-keypad-key-int = Integral
shared-calculator-narration-keypad-key-intersection = Intersection
shared-calculator-narration-keypad-key-inversecdf = Inverse CDF function
shared-calculator-narration-keypad-key-left-arrow = Left Arrow
shared-calculator-narration-keypad-key-left-bracket = Left Bracket
shared-calculator-narration-keypad-key-left-paren = Left Parenthesis
shared-calculator-narration-keypad-key-line = Line
shared-calculator-narration-keypad-key-ln = Natural Log
shared-calculator-narration-keypad-key-log = Log
shared-calculator-narration-keypad-key-loga = Log A
shared-calculator-narration-keypad-key-mean = Mean
shared-calculator-narration-keypad-key-median = Median
shared-calculator-narration-keypad-key-midpoint = Midpoint
shared-calculator-narration-keypad-key-minus = Minus
shared-calculator-narration-keypad-key-normaldist = Normal Distribution
shared-calculator-narration-keypad-key-nthroot = Nth Root
shared-calculator-narration-keypad-key-parallel = Parallel
shared-calculator-narration-keypad-key-pdf = Probability Density Function
shared-calculator-narration-keypad-key-percent-of = Percent Of
shared-calculator-narration-keypad-key-perimeter = Perimeter
shared-calculator-narration-keypad-key-perpendicular = Perpendicular
shared-calculator-narration-keypad-key-phi = Phi
shared-calculator-narration-keypad-key-pi = Pi
shared-calculator-narration-keypad-key-pleft = P Left
shared-calculator-narration-keypad-key-plus = Plus
shared-calculator-narration-keypad-key-poissondist = Poisson Distribution
shared-calculator-narration-keypad-key-polygon = Polygon
shared-calculator-narration-keypad-key-pright = P Right
shared-calculator-narration-keypad-key-prime = Function derivative
shared-calculator-narration-keypad-key-product = Product
shared-calculator-narration-keypad-key-quantile = Quantile
shared-calculator-narration-keypad-key-quartile = Quartile
shared-calculator-narration-keypad-key-radius = Radius
shared-calculator-narration-keypad-key-random = Random Number
shared-calculator-narration-keypad-key-rank = Rank
shared-calculator-narration-keypad-key-ray = Ray
shared-calculator-narration-keypad-key-real = Real
shared-calculator-narration-keypad-key-reciprocal = Reciprocal
shared-calculator-narration-keypad-key-reflect = Reflect
shared-calculator-narration-keypad-key-rho = Rho
shared-calculator-narration-keypad-key-right-arrow = Right Arrow
shared-calculator-narration-keypad-key-right-bracket = Right Bracket
shared-calculator-narration-keypad-key-right-paren = Right Parenthesis
shared-calculator-narration-keypad-key-rotate = Rotate
shared-calculator-narration-keypad-key-round = Round
shared-calculator-narration-keypad-key-rows = Rows
shared-calculator-narration-keypad-key-sec = Secant
shared-calculator-narration-keypad-key-segment = Segment
shared-calculator-narration-keypad-key-segments = Segments
shared-calculator-narration-keypad-key-shift = Shift
shared-calculator-narration-keypad-key-sin = Sine
shared-calculator-narration-keypad-key-sinh = Hyperbolic Sine
shared-calculator-narration-keypad-key-spearman = Spearman Rank Correlation
shared-calculator-narration-keypad-key-sphere = Sphere
shared-calculator-narration-keypad-key-sqrt = Square Root
shared-calculator-narration-keypad-key-squared = Squared
shared-calculator-narration-keypad-key-stats = Summary statistics
shared-calculator-narration-keypad-key-stderr = Standard Error
shared-calculator-narration-keypad-key-stdev = Standard Deviation
shared-calculator-narration-keypad-key-stdevp = Standard Deviation of Population
shared-calculator-narration-keypad-key-subscript = Subscript
shared-calculator-narration-keypad-key-sum = Sum
shared-calculator-narration-keypad-key-superscript = Superscript
shared-calculator-narration-keypad-key-supplement = Supplement
shared-calculator-narration-keypad-key-tan = Tangent
shared-calculator-narration-keypad-key-tanh = Hyperbolic Tangent
shared-calculator-narration-keypad-key-tau = Tau
shared-calculator-narration-keypad-key-tdist = Student-t Distribution
shared-calculator-narration-keypad-key-theta = Theta
shared-calculator-narration-keypad-key-times = Times
shared-calculator-narration-keypad-key-toggle-audio-trace = Toggle Audio Trace
shared-calculator-narration-keypad-key-toggle-letters = Toggle Letters
shared-calculator-narration-keypad-key-toggle-numbers = Toggle Numbers
shared-calculator-narration-keypad-key-tone = Tone
shared-calculator-narration-keypad-key-translate = Translate
shared-calculator-narration-keypad-key-triangle = Triangle
shared-calculator-narration-keypad-key-tscore = T Score
shared-calculator-narration-keypad-key-ttest = T Test
shared-calculator-narration-keypad-key-uniformdist = Uniform Distribution
shared-calculator-narration-keypad-key-vector = Vector
shared-calculator-narration-keypad-key-vertices = Vertices
shared-calculator-narration-keypad-key-ythroot = Yth Root
shared-calculator-narration-keypad-key-zproptest = Z Test of Proportions
shared-calculator-narration-keypad-key-ztest = Z Test
shared-calculator-narration-keypad-plus-minus = Plus-Minus
shared-calculator-narration-redo = redo
shared-calculator-narration-settings-display-size = Display Size
shared-calculator-narration-settings-display-size-default = Display size: default
shared-calculator-narration-settings-display-size-large = Display size: large
shared-calculator-narration-table-cell-coordinates = Row { $rowNumber } Column { $columnNumber }
shared-calculator-narration-undo = undo
shared-label-choose-all-that-describe = Choose all that describe you:
shared-label-continue-with-email = Continue with email:
shared-label-create-password = Create Password
shared-label-email = Email
shared-label-enter-password = Enter password:
shared-label-family-name = Last Name (optional)
shared-label-first-name = First Name
shared-label-given-name-or-nickname = First Name or Nickname
shared-label-last-name = Last Name
shared-label-name = Name
shared-label-new-email-address = New Email Address
shared-label-optional = (optional)
shared-label-password = Password
shared-message-account-reactivated = You previously requested to delete your account, but because you logged back in within 30 days, we will not delete your account. Welcome back!
shared-message-change-password-email-sent = We will send a link to your email address ({ $emailAddress }) so you can change your password.
shared-message-check-email-for-delete-link = Please check your email ({ $emailAddress }) for the link to delete your account.
shared-message-check-email-for-link = Please check { $emailAddress } for the Change Email link.
shared-message-check-email-for-password-link = Please check your email ({ $emailAddress }) for the link to change your password.
shared-message-check-email-for-password-recovery-link = Message sent. Please check your email for a password recovery link.
shared-message-delete-account-notice = When you delete your account, <1>we will retain your data for 30 days.</1> You can reactivate your account at any time during those 30 days by logging back in. If there's something about Desmos we can improve, please <2>let us know.</2>
shared-message-delete-account-will-send-email = We will send you a link to your email address ({ $email }) so you can delete your account.
shared-message-email-sent = Email sent
shared-message-email-settings-will-send-email = We will send a Change Email link to { $emailAddress }.
shared-message-google-login-not-available = Google Login is not available on this device.
shared-message-information-saved = Saved!
shared-message-maintenance-starts-at = Saving, sharing, and signing in will be temporarily disabled on { $localizedStartDate } starting at approximately { $localizedStartTime }.
shared-message-maintenance-window = Saving, sharing, and signing in will be temporarily disabled on { $localizedStartDate } between approximately { $localizedStartTime } and { $localizedEndTime }.
shared-message-please-review-name = We tried to split your name into first and last name. Please review your name below and edit any mistakes.
shared-message-set-new-email-address = Set a new email address and password.
shared-prompt-continue-with-apple = Continue with Apple
shared-prompt-continue-with-google = Continue with Google
shared-prompt-enter-email-for-password-recovery-link = Enter your email address to get a password recovery link.
shared-prompt-forgot-password = Forgot password?
shared-prompt-log-out-all-devices = Log Out of All Devices
shared-prompt-log-out-all-sessions = Log Out of All Sessions
shared-prompt-set-password = Set a password instead
shared-text-cookie-notice = We use cookies only for logged in users. Please stay logged out to use Desmos without cookies.
shared-text-log-out-all-devices = Log out everywhere you're signed in, including this device.
shared-text-or = or
shared-text-previous-apple = You've previously signed in with Apple. Click the button below to sign in.
shared-text-previous-google = You've previously signed in with Google. Click the button below to sign in.
shared-text-privacy-notice = By signing up, you agree to our <1>Privacy Policy</1> & <2>Terms</2>.
shared-text-professional-description = Built for teams that want to use Desmos tools, including notebook, at work. Share folders across your workspace, control file access, and more.
shared-title-account-finish-set-up = You signed up with <1>{$v0}</1>. Finish setting up your account below.
shared-title-account-reactivated = Your account has been reactivated.
shared-title-account-settings = Account Settings
shared-title-authenticate = Log In or Sign Up
shared-title-change-email-address = Change your Desmos email address
shared-title-change-password-wide = Change Password
shared-title-delete-account = Are you sure you want to delete your account?
shared-title-desmos-professional = Introducing Desmos Professional
shared-title-email-settings = Email
shared-title-language-menu = Language
shared-title-login = Log In
shared-title-profile-information-narrow = Profile
shared-title-profile-information-wide = Profile Information
shared-title-recover-password = Recover Password
shared-title-security = Security
shared-title-using-for-sign-up = You're signing up with <1>{$v0}</1>.
shared-title-welcome = Welcome!
shared-title-welcome-with-name = Welcome, { $name }!
basic-calculator-error-fractions-unavailable = Fractions are not available in the current calculator.
basic-calculator-error-parentheses-unavailable = Parentheses are not available in this calculator.
basic-calculator-link-help = Help
basic-calculator-link-privacy-policy = Privacy Policy
basic-calculator-link-terms-of-service = Terms of Service
graphing-calculator-button-audio-trace-hear-graph = Hear Graph
graphing-calculator-button-audio-trace-stop-graph = Stop Graph
graphing-calculator-button-done = Done
graphing-calculator-button-keypad-audio-trace-off = Audio Trace Off
graphing-calculator-link-learn-more = Learn more.
graphing-calculator-narration-keypad-key-next-curve = Next Curve
graphing-calculator-narration-keypad-key-next-poi = Next Point of Interest
graphing-calculator-narration-keypad-key-next-point = Next Point
graphing-calculator-narration-keypad-key-previous-curve = Previous Curve
graphing-calculator-narration-keypad-key-previous-poi = Previous Point of Interest
graphing-calculator-narration-keypad-key-previous-point = Previous Point
graphing-calculator-narration-keypad-key-speed-down = Speed Down
graphing-calculator-narration-keypad-key-speed-up = Speed Up
graphing-calculator-narration-keypad-key-volume-down = Volume Down
graphing-calculator-narration-keypad-key-volume-up = Volume Up
matrix-calculator-button-new = New Matrix
matrix-calculator-button-settings = settings
matrix-calculator-heading-edit-matrix = Edit Matrix { $variable }
matrix-calculator-label-columns = Columns
matrix-calculator-label-rows = Rows
matrix-calculator-narration-add-column = Add Column
matrix-calculator-narration-add-row = Add Row
matrix-calculator-narration-evaluation = equals { $rowCount } by { $columnCount } matrix.
matrix-calculator-narration-evaluation-row = Row { $rowNumber }: { $values }.
matrix-calculator-narration-keypad-key-det = Determinant
matrix-calculator-narration-keypad-key-inverse = Inverse
matrix-calculator-narration-keypad-key-rref = Reduced row echelon form
matrix-calculator-narration-keypad-key-trace = Trace
matrix-calculator-narration-keypad-key-transpose = Transpose
matrix-calculator-narration-matrix-with-variable = Matrix { $variable }
matrix-calculator-narration-matrix-without-variable = Matrix
matrix-calculator-narration-new-dimensions = Matrix size: { $rows } by { $cols }
matrix-calculator-narration-remove-column = Remove Column
matrix-calculator-narration-remove-row = Remove Row
matrix-calculator-narration-resize-controls = Resize Matrix Controls
matrix-calculator-narration-title = Desmos Matrix Calculator
frontpage-button-account-menu = Account Menu
frontpage-error-something-went-wrong-try-again-later = Sorry! Something went wrong. Please try again later.
frontpage-label-partners-company-website = Company Website (Optional)
frontpage-label-partners-how-work-with-us = How would you like to work with us?
frontpage-label-partners-send = Send
frontpage-label-partners-sending = Sending...
frontpage-label-partners-your-email = Your Email
frontpage-label-partners-your-name = Your Name
frontpage-link-header-math-tools = Math Tools
frontpage-link-header-resources = Resources
frontpage-link-shared-3d-calculator = 3D Calculator
frontpage-link-shared-3d-calculator-short = 3D
frontpage-link-shared-about-us = About Us
frontpage-link-shared-api-documentation = API Documentation
frontpage-link-shared-assessments = Assessments
frontpage-link-shared-blog = Des-Blog
frontpage-link-shared-careers = Careers
frontpage-link-shared-design-principles = Design Principles
frontpage-link-shared-desmos-professional = Desmos Professional
frontpage-link-shared-education-partnerships = Education Partnerships
frontpage-link-shared-educator-pd = Educator PD
frontpage-link-shared-four-function-calculator = Four-Function Calculator
frontpage-link-shared-four-function-calculator-short = Four Function
frontpage-link-shared-geometry-short = Geometry
frontpage-link-shared-geometry-tool = Geometry Tool
frontpage-link-shared-graphing-calculator = Graphing Calculator
frontpage-link-shared-graphing-calculator-short = Graphing
frontpage-link-shared-guiding-principles = Guiding Principles
frontpage-link-shared-help-center = Help Center
frontpage-link-shared-log-in = Log In
frontpage-link-shared-matrix-calculator = Matrix Calculator
frontpage-link-shared-matrix-calculator-short = Matrix
frontpage-link-shared-notebook = Notebook
frontpage-link-shared-partnerships = Partnerships
frontpage-link-shared-scientific-calculator = Scientific Calculator
frontpage-link-shared-scientific-calculator-short = Scientific
frontpage-link-shared-test-practice = Test Practice
frontpage-narration-shared-assessment-calculator = Assessment { $calculatorType }
frontpage-narration-shared-desmos-logo = Desmos Logo
frontpage-text-header-app-links = Download our apps in the <1>Google Play Store</1> and <2>iOS App Store</2>.
frontpage-text-header-terms-update = We've updated our Terms of Service.
frontpage-text-header-terms-update-link = Read about the changes.
frontpage-text-partners-email-sent = Email Sent! We'll be in touch soon!
frontpage-text-professional-link-tag = New
mq-narration-absolute-value = absolute value
mq-narration-absolute-value-end = End absolute value
mq-narration-absolute-value-start = Start absolute value
mq-narration-after = after { $expr }
mq-narration-approximately-equal = \u2248
mq-narration-before = before { $expr }
mq-narration-beginning-of = beginning of { $expr }
mq-narration-binomial = Start binomial, { $num } Choose { $den } , End binomial
mq-narration-block-angle-bracket = angle-bracket block
mq-narration-block-brace = brace block
mq-narration-block-bracket = bracket block
mq-narration-block-double-vertical-line = double vertical line block
mq-narration-block-is-empty = block is empty
mq-narration-block-parenthesis = parenthesis block
mq-narration-block-pipe = pipe block
mq-narration-bound-lower = lower bound
mq-narration-bound-upper = upper bound
mq-narration-capital-upsilon = capital upsilon
mq-narration-choose = Choose
mq-narration-circle = circle
mq-narration-co-product = co product
mq-narration-congruent = congruent
mq-narration-cube-root = Start Cube Root, { $radicand }, End Cube Root
mq-narration-degrees = degrees
mq-narration-denominator = denominator
mq-narration-divided-by = divided by
mq-narration-dollar = dollar
mq-narration-double-prime = double prime
mq-narration-empty-subscript-was-deleted = Subscript, , Baseline
mq-narration-end-of = end of { $expr }
mq-narration-end-string = EndString
mq-narration-equals = equals
mq-narration-fraction = StartFraction, { $num } Over { $den } , EndFraction
mq-narration-fraction-and = and
mq-narration-fraction-nested = StartNestedFraction, { $num } NestedOver { $den } , EndNestedFraction
mq-narration-fraction-shorthand =
    { $num ->
        [one]
            { $den ->
                [2] { $numPrefix } { $num } half
                [3] { $numPrefix } { $num } third
                [4] { $numPrefix } { $num } fourth
                [5] { $numPrefix } { $num } fifth
                [6] { $numPrefix } { $num } sixth
                [7] { $numPrefix } { $num } seventh
                [8] { $numPrefix } { $num } eighth
                [9] { $numPrefix } { $num } ninth
                [10] { $numPrefix } { $num } tenth
                [11] { $numPrefix } { $num } eleventh
                [12] { $numPrefix } { $num } twelfth
                [100] { $numPrefix } { $num } hundredth
               *[other] { $full }
            }
       *[other]
            { $den ->
                [2] { $numPrefix } { $num } halves
                [3] { $numPrefix } { $num } thirds
                [4] { $numPrefix } { $num } fourths
                [5] { $numPrefix } { $num } fifths
                [6] { $numPrefix } { $num } sixths
                [7] { $numPrefix } { $num } sevenths
                [8] { $numPrefix } { $num } eighths
                [9] { $numPrefix } { $num } ninths
                [10] { $numPrefix } { $num } tenths
                [11] { $numPrefix } { $num } elevenths
                [12] { $numPrefix } { $num } twelfths
                [100] { $numPrefix } { $num } hundredths
               *[other] { $full }
            }
    }
mq-narration-greater-than = greater than
mq-narration-greater-than-or-equal-to = greater than or equal to
mq-narration-index = index
mq-narration-index-lower = lower index
mq-narration-index-upper = upper index
mq-narration-infinity = infinity
mq-narration-integral = integral
mq-narration-left-angle-bracket = left angle-bracket
mq-narration-left-brace = left brace
mq-narration-left-bracket = left bracket
mq-narration-left-double-vertical-line = left double vertical line
mq-narration-left-parenthesis = left parenthesis
mq-narration-left-pipe = left pipe
mq-narration-less-than = less than
mq-narration-less-than-or-equal-to = less than or equal to
mq-narration-math-input = Math Input
mq-narration-matrix-column-start =
    { $category ->
        [one] { $index }st Column
        [two] { $index }nd Column
        [few] { $index }rd Column
       *[other] { $index }th Column
    }
mq-narration-matrix-end = EndMatrix
mq-narration-matrix-invalid-resize = Invalid resize. Matrices must be between 1 by 1 and { $maxSize } by { $maxSize }
mq-narration-matrix-new-dimensions = Matrix size: { $rows } by { $columns }
mq-narration-matrix-pull-handle = Resizing { $rows } by { $columns } Matrix. Press Arrows to resize.
mq-narration-matrix-row-start =
    { $category ->
        [one] { $index }st Row
        [two] { $index }nd Row
        [few] { $index }rd Row
       *[other] { $index }th Row
    }
mq-narration-matrix-start = Start { $rows } by { $columns } Matrix
mq-narration-measured-angle = measured angle
mq-narration-minus = minus
mq-narration-minus-or-plus = minus-or-plus
mq-narration-negative = negative
mq-narration-no-answer = no answer
mq-narration-not-congruent = not congruent
mq-narration-not-equal = not equal
mq-narration-not-parallel = not parallel
mq-narration-not-similar = not similar
mq-narration-nothing-above = nothing above
mq-narration-nothing-selected = nothing selected
mq-narration-nothing-to-the-left = nothing to the left
mq-narration-nothing-to-the-right = nothing to the right
mq-narration-nth-root = Root Index { $index }, Start Root, { $radicand }, End Root
mq-narration-numerator = numerator
mq-narration-op-abs = absolute value
mq-narration-op-and = and
mq-narration-op-angle = angle
mq-narration-op-anglebisector = angle bisector
mq-narration-op-angles = angles
mq-narration-op-arc = arc
mq-narration-op-arccos = arc cosine
mq-narration-op-arccosh = hyperbolic arc cosine
mq-narration-op-arccot = arc co tangent
mq-narration-op-arccoth = hyperbolic arc co tangent
mq-narration-op-arccsc = arc co secant
mq-narration-op-arccsch = hyperbolic arc co secant
mq-narration-op-arcosh = hyperbolic ar cosine
mq-narration-op-arcoth = hyperbolic ar co tangent
mq-narration-op-arcs = arcs
mq-narration-op-arcsch = hyperbolic ar co secant
mq-narration-op-arcsec = arc secant
mq-narration-op-arcsech = hyperbolic arc secant
mq-narration-op-arcsin = arc sine
mq-narration-op-arcsinh = hyperbolic arc sine
mq-narration-op-arctan = arc tangent
mq-narration-op-arctanh = hyperbolic arc tangent
mq-narration-op-area = area
mq-narration-op-arg = argument
mq-narration-op-arsech = hyperbolic ar secant
mq-narration-op-arsinh = hyperbolic ar sine
mq-narration-op-artanh = hyperbolic ar tangent
mq-narration-op-binomialdist = binomial distribution
mq-narration-op-boxplot = boxplot
mq-narration-op-cdf = cdf
mq-narration-op-ceil = ceiling
mq-narration-op-center = center
mq-narration-op-chisqdist = chi square distribution
mq-narration-op-chisqgof = chi square goodness of fit
mq-narration-op-chisqtest = chi square test
mq-narration-op-circle = circle
mq-narration-op-circles = circles
mq-narration-op-columns = columns
mq-narration-op-conf = confidence
mq-narration-op-conj = conjugate
mq-narration-op-construction = construction
mq-narration-op-corr = correlation
mq-narration-op-cos = cosine
mq-narration-op-cosh = hyperbolic cosine
mq-narration-op-cot = co tangent
mq-narration-op-coterminal = coterminal
mq-narration-op-coth = hyperbolic co tangent
mq-narration-op-count = count
mq-narration-op-cov = co variance
mq-narration-op-covp = co variance population
mq-narration-op-csc = co secant
mq-narration-op-csch = hyperbolic co secant
mq-narration-op-det = determinant
mq-narration-op-dilate = dilate
mq-narration-op-directedangle = directed angle
mq-narration-op-directedangles = directed angles
mq-narration-op-discretedist = discrete distribution
mq-narration-op-distance = distance
mq-narration-op-dof = degrees of freedom
mq-narration-op-dotplot = dotplot
mq-narration-op-end = end
mq-narration-op-erf = error function
mq-narration-op-estimate = estimate
mq-narration-op-exp = exponent
mq-narration-op-floor = floor
mq-narration-op-for = for
mq-narration-op-gcd = gcd
mq-narration-op-gcf = gcf
mq-narration-op-geodist = geometric distribution
mq-narration-op-glider = glider
mq-narration-op-height = height
mq-narration-op-histogram = histogram
mq-narration-op-hsv = hsv
mq-narration-op-imag = imaginary part
mq-narration-op-intersection = intersection
mq-narration-op-inv = inverse
mq-narration-op-inversecdf = inverse cumulative distribution function
mq-narration-op-inverseCdf = inverse cumulative distribution function
mq-narration-op-join = join
mq-narration-op-lcm = lcm
mq-narration-op-length = length
mq-narration-op-line = line
mq-narration-op-lines = lines
mq-narration-op-ln = natural log
mq-narration-op-log = log
mq-narration-op-lower = lower
mq-narration-op-mad = mean absolute deviation
mq-narration-op-max = max
mq-narration-op-mcd = greatest common divisor
mq-narration-op-mcm = least common multiple
mq-narration-op-mean = mean
mq-narration-op-median = median
mq-narration-op-midpoint = midpoint
mq-narration-op-min = min
mq-narration-op-mod = mod
mq-narration-op-nCr = n choose r
mq-narration-op-normaldist = normal distribution
mq-narration-op-nPr = n permute r
mq-narration-op-null = null
mq-narration-op-okhsv = ok hsv
mq-narration-op-oklab = ok lab
mq-narration-op-oklch = ok lch
mq-narration-op-or = or
mq-narration-op-parallel = parallel
mq-narration-op-pdf = pdf
mq-narration-op-perimeter = perimeter
mq-narration-op-perpendicular = perpendicular
mq-narration-op-pleft = p left
mq-narration-op-points = points
mq-narration-op-poissondist = poisson distribution
mq-narration-op-polygon = polygon
mq-narration-op-polygons = polygons
mq-narration-op-pright = p right
mq-narration-op-quantile = quantile
mq-narration-op-quartile = quartile
mq-narration-op-radius = radius
mq-narration-op-random = random
mq-narration-op-rank = rank
mq-narration-op-ray = ray
mq-narration-op-rays = rays
mq-narration-op-real = real
mq-narration-op-reflect = reflect
mq-narration-op-repeat = repeat
mq-narration-op-rgb = rgb
mq-narration-op-rotate = rotate
mq-narration-op-round = round
mq-narration-op-rows = rows
mq-narration-op-rref = reduced row echelon form
mq-narration-op-score = score
mq-narration-op-sec = secant
mq-narration-op-sech = hyperbolic secant
mq-narration-op-segment = segment
mq-narration-op-segments = segments
mq-narration-op-sgn = signum
mq-narration-op-shuffle = shuffle
mq-narration-op-sign = signum
mq-narration-op-signum = signum
mq-narration-op-sin = sine
mq-narration-op-sinh = hyperbolic sine
mq-narration-op-sort = sort
mq-narration-op-spearman = spearman
mq-narration-op-sphere = sphere
mq-narration-op-start = start
mq-narration-op-stats = stats
mq-narration-op-stddev = standard deviation
mq-narration-op-stdDev = standard deviation
mq-narration-op-stddevp = standard deviation population
mq-narration-op-stdDevP = standard deviation population
mq-narration-op-stderr = standard error
mq-narration-op-stdev = standard deviation
mq-narration-op-stdevp = standard deviation population
mq-narration-op-strictintersection = strict intersection
mq-narration-op-supplement = supplement
mq-narration-op-tan = tangent
mq-narration-op-tanh = hyperbolic tangent
mq-narration-op-tdist = t distribution
mq-narration-op-tone = tone
mq-narration-op-total = total
mq-narration-op-trace = trace
mq-narration-op-translate = translate
mq-narration-op-transpose = transpose
mq-narration-op-triangle = triangle
mq-narration-op-tscore = t score
mq-narration-op-TScore = t score
mq-narration-op-ttest = t test
mq-narration-op-uniformdist = uniform distribution
mq-narration-op-unique = unique
mq-narration-op-upper = upper
mq-narration-op-var = variance
mq-narration-op-variance = variance
mq-narration-op-varp = variance population
mq-narration-op-vector = vector
mq-narration-op-vertices = vertices
mq-narration-op-width = width
mq-narration-op-with = with
mq-narration-op-zproptest = z prop test
mq-narration-op-ztest = z test
mq-narration-over = over
mq-narration-percent-of = percent of
mq-narration-perpendicular = perpendicular
mq-narration-plus = plus
mq-narration-plus-or-minus = plus-or-minus
mq-narration-positive = positive
mq-narration-power = to the { $power } power
mq-narration-power-0 = to the 0 power
mq-narration-power-cubed = cubed
mq-narration-power-negative-ordinal =
    { $category ->
        [one] to the negative { $power }st power
        [two] to the negative { $power }nd power
        [few] to the negative { $power }rd power
       *[other] to the negative { $power }th power
    }
mq-narration-power-ordinal =
    { $category ->
        [one] to the { $power }st power
        [two] to the { $power }nd power
        [few] to the { $power }rd power
       *[other] to the { $power }th power
    }
mq-narration-power-squared = squared
mq-narration-prime = prime
mq-narration-product = product
mq-narration-question-mark = question mark
mq-narration-radicand = radicand
mq-narration-right-angle-bracket = right angle-bracket
mq-narration-right-brace = right brace
mq-narration-right-bracket = right bracket
mq-narration-right-double-vertical-line = right double vertical line
mq-narration-right-parenthesis = right parenthesis
mq-narration-right-pipe = right pipe
mq-narration-root = root
mq-narration-selected = selected
mq-narration-similar = similar
mq-narration-space = space
mq-narration-square-root = Start Root, { $radicand } , End Root
mq-narration-start-fraction = Start Fraction
mq-narration-start-root = Start Root
mq-narration-start-string = StartString
mq-narration-string = string
mq-narration-style-bold-font = Bold Font
mq-narration-style-bold-font-end = End Bold Font
mq-narration-style-bold-font-start = Start Bold Font
mq-narration-style-color-end = End { $color }
mq-narration-style-color-start = Start { $color }
mq-narration-style-dot = dot
mq-narration-style-dot-end = End dot
mq-narration-style-dot-start = Start dot
mq-narration-style-hat = hat
mq-narration-style-hat-end = End hat
mq-narration-style-hat-start = Start hat
mq-narration-style-italic-font = Italic Font
mq-narration-style-italic-font-end = End Italic Font
mq-narration-style-italic-font-start = Start Italic Font
mq-narration-style-math-text = Math Text
mq-narration-style-math-text-end = End Math Text
mq-narration-style-math-text-start = Start Math Text
mq-narration-style-over-arc = Over Arc
mq-narration-style-over-arc-end = End Over Arc
mq-narration-style-over-arc-start = Start Over Arc
mq-narration-style-over-left-and-right-arrow = Over Left and Right Arrow
mq-narration-style-over-left-and-right-arrow-end = End Over Left and Right Arrow
mq-narration-style-over-left-and-right-arrow-start = Start Over Left and Right Arrow
mq-narration-style-over-left-arrow = Over Left Arrow
mq-narration-style-over-left-arrow-end = End Over Left Arrow
mq-narration-style-over-left-arrow-start = Start Over Left Arrow
mq-narration-style-over-right-arrow = Over Right Arrow
mq-narration-style-over-right-arrow-end = End Over Right Arrow
mq-narration-style-over-right-arrow-start = Start Over Right Arrow
mq-narration-style-overline = Overline
mq-narration-style-overline-end = End Overline
mq-narration-style-overline-start = Start Overline
mq-narration-style-serif-font = Serif Font
mq-narration-style-serif-font-end = End Serif Font
mq-narration-style-serif-font-start = Start Serif Font
mq-narration-style-tilde = tilde
mq-narration-style-tilde-end = End tilde
mq-narration-style-tilde-start = Start tilde
mq-narration-style-underline = Underline
mq-narration-style-underline-end = End Underline
mq-narration-style-underline-start = Start Underline
mq-narration-style-vec = vector
mq-narration-style-vec-end = End vector
mq-narration-style-vec-start = Start vector
mq-narration-sub = Subscript, { $sub } , Baseline
mq-narration-subscript = subscript
mq-narration-sum = sum
mq-narration-summation-co-product = Start co product from { $start } to { $end }, end co product
mq-narration-summation-integral = Start integral from { $start } to { $end }, end integral
mq-narration-summation-product = Start product from { $start } to { $end }, end product
mq-narration-summation-sum = Start sum from { $start } to { $end }, end sum
mq-narration-sup = Superscript, { $sup } , Baseline
mq-narration-superscript = superscript
mq-narration-times = times
mq-narration-token = token




























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































`;var iR={ar:!0,de:!0,en:!0,es:!0,et:!0,fr:!0,"fr-CA":!0,id:!0,it:!0,ja:!0,ko:!0,nl:!0,pl:!0,"pt-BR":!0,ru:!0,"sv-SE":!0,th:!0,tr:!0,vi:!0,"zh-CN":!0,"zh-TW":!0};function y1(e){return Object.keys(iR).includes(e)}var Wd="",jh={},b1={},Qh={},sR=["ar","hy-AM","hi","tr","xx-XX"];function jd(e){Wd=e||""}function Yh(e){for(let t in e)delete Qh[t],b1[t]=e[t]}function Qd(){for(let e in zn)y1(e)||delete zn[e]}function xs(e,t){let r=t!=null?t:Wd;return v1(r).hasTranslation(e,r)}function Sn(e,t){if(t)for(let r in t)t.hasOwnProperty(r)&&(e=e.split("{ $"+r+" }").join(t[r]));return e}function re(e,t,r){return x1(e,t!=null?t:{},r!=null?r:Wd)}function vs(e){function t(r,n){return x1(r,n!=null?n:{},e())}return t}function cR(e){let t={};for(let r in e){let n=e[r];n!==void 0&&(t[r]=n)}return t}function x1(e,t,r){let o=v1(r).format(e,cR(t));return o==null?(console.warn(`Could not format string ${e}`),""):o}function v1(e){let t=Qh[e];if(!t){jh[e]||(jh[e]=Qc([e]));let r=[];for(let o of jh[e]){let a=b1[o];a&&r.push({lang:o,source:a})}let n={};e==="xx-XX"&&(n.transform=o=>o.replace(/[a-z]/gi,"\u2666")),t=Qh[e]=Kd.fromSources([...r,{lang:"en",source:f1}],o=>{console.warn(o)},n)}return t}function ws(){return Wd}function Xh(e){return zn.hasOwnProperty(e)||sR.includes(e)}function Ts(e,t){if(e==null)return"";if(typeof e=="string")return e;if(typeof e=="number")return""+e;let r=e.vars,n;if(r){n={};for(let o in r){if(!r.hasOwnProperty(o))continue;let a=r[o];Hd(a)?n[o]=a:n[o]=Ts(a,t)}}return re(e.key,n,t)}var Ss=typeof desmosLocaleData=="object"?desmosLocaleData:{},uR={};function Ms(){let e=Qc([xt("lang"),navigator.userLanguage,navigator.language]);for(let t=0;t<e.length;t++){let r=e[t];if(Xh(r))return r}return"en"}async function Qa(e){if(Ss[e]||e==="en"||e==="xx-XX")return jd(e),!0;if(!Xh(e)){let t=e.indexOf("-")!==-1?e.split("-")[0]:e;for(let r in zn)if(t===r.split("-")[0]&&zn[r].useAsRoot){e=r;break}}try{let t=await xe.get(`/api/v1/calculator/language/${e}.ftl`);return Ss[e]=t[e],Yh(Ss),jd(e),!0}catch(t){throw t.status===404&&console.warn(e+" is not an available language."),t}}function Zh(e){if(Ss[e])return!0;let t=Qc([e]);for(let r of t)if(Ss[r])return!0;return!1}Yh(Ss);jd(Ms());var ks={s:re,raw:Sn,getLanguage:ws};var ef="";function dR(){return ef}function pR(e){ef=e}var Jh={pendingRequests:0,completedRequests:0};window.dcgTestOnlyFetchMonitor=Jh;function mR(){let e=xt("dcgTestOnlyOnBeforeNetworkRequests");if(e)try{let t=window.top;for(;t!=null&&t.opener;)t=t.opener.top;t&&t.dcgOnBeforeNetworkRequests(e)}catch(t){}}mR();var T1=[];function S1(e){T1.push(e)}function gR(e){if(e.status===401)for(let t of T1)t()}function M1(e){let t=new URLSearchParams;return Object.entries(e).forEach(([r,n])=>{Array.isArray(n)?n.forEach(o=>t.append(r,String(o))):t.set(r,String(n))}),t}var w1=async e=>{try{return await e.json()}catch(t){return null}},Zc=class extends Error{constructor(){super(...arguments);this.name="NetworkError"}},Yd=class extends Zc{constructor(){super(...arguments);this.name="AbortError"}},Xd=class extends Error{constructor(r,n,o=[]){super([...new Set(o.map(({message:a})=>a.trim()))].join(`
`));this.name="ResponseError";this.status=r,this.statusText=n,this.messageObjects=o}},k1=(e,t,r=t("account-shell-error-unexpected-server",{email:"support@desmos.com"}))=>{if(e instanceof xe.NetworkError)return[{key:"connection_failed",message:t("account-shell-error-connection-failed")}];let n=[{key:"unknown_error",message:r}];return e instanceof xe.ResponseError?e.messageObjects.length===0?n:e.messageObjects:n},E1=(e,t,r)=>[...new Set(k1(e,t,r).map(({message:n})=>n.trim()))],hR=(e,t,r)=>E1(e,t,r).join(`
`);async function fR(e){var r,n;let t;try{t=await e}catch(o){throw o instanceof DOMException&&o.name==="AbortError"?new Yd:new Zc}if(gR(t),!t.ok){let o=await w1(t);throw new Xd(t.status,t.statusText,(n=(r=o==null?void 0:o.errors)==null?void 0:r.map(a=>{var i;return{key:(i=a.key)!=null?i:"unknown_error",message:"msg"in a?a.msg:a.message}}))!=null?n:[])}return await w1(t)}var Es=(e,{method:t="get",query:r,body:n,withCacheBusting:o=t==="get",signal:a}={})=>{let i={method:t.toUpperCase(),credentials:"include",headers:{Accept:"application/json"},signal:a};t!=="get"&&(i.headers["Content-Type"]="application/json",i.body=JSON.stringify({...n||{},lang:(n==null?void 0:n.lang)||ws()}));let s=e.includes("?")?"&":"?",c=o?{...r,...r1}:r,l=c?`${s}${M1(c).toString()}`:"";return Jh.pendingRequests+=1,fR(fetch(`${ef}${e}${l}`,i)).finally(()=>{Jh.pendingRequests-=1})},yR=(e,t)=>Es(e,{query:t}),bR=(e,t={})=>Es(e,{method:"post",...t}),xR=(e,t={})=>Es(e,{method:"put",...t}),vR=async(e,t={})=>Es(e,{method:"patch",...t}),wR=(e,t={})=>Es(e,{method:"delete",...t}),xe={getBaseURL:dR,setBaseURL:pR,safelyMakeURLSearchParamsFromObject:M1,NetworkError:Zc,AbortError:Yd,ResponseError:Xd,parseErrors:k1,parseErrorMessages:E1,parseErrorMessage:hR,request:Es,get:yR,post:bR,put:xR,patch:vR,delete:wR};function tf(){return xe.post("/account/logout_xhr")}function C1(){return xe.post("/account/logout_all_devices")}async function I1(e){return await tf(),await xe.post("/account/login_xhr",{body:e}),Cs({lang:e.lang})}function A1(e){if("loggedIn"in e&&!e.loggedIn)throw e;return e}async function Cs(e){return A1(await xe.get("/account/user_info",e))}async function Zd(){return A1(await xe.get("/account/user_info?no401"))}var P1=e=>xe.post("/account/check_account_status",{body:e}),N1=async e=>(await xe.post("/account/register_xhr",{body:e}),Cs({lang:e.lang})),TR={google:"/drive_api/calculator/login",apple:"/apple_api/calculator/login"},_1=e=>`${xe.getBaseURL()}${TR[e]}`;function L1(e,{classifications:t}){return xe.put(`/account/${e}/metadata`,{body:{metadata:{selfClassifications:t}}})}function R1(e){return xe.patch("/account/current-workspace",{body:{teamId:e||null}})}async function D1(e){return await xe.post("/account/change_name",{body:e}),Cs({lang:e.lang})}async function q1(e){return await xe.post("/account/change_name_detail",{body:{lang:e.lang,userProvidedName:{given:e.given,family:e.family}}}),Cs({lang:e.lang})}function O1(e){return xe.post("/account/recover_xhr",{body:e})}function F1(e){return xe.get("/account/initiate_delete_account",e)}function B1(e){return xe.get("/account/initiate_email_change",e)}async function V1(e){return await xe.post("/account/set_email",{body:e}),Cs({lang:e.lang})}async function $1(e){return await xe.post("/account/update_feature_flags",{body:e}),Cs({lang:e.lang})}var G1=()=>xe.get("/account/dismissed-notices"),U1=async e=>{await xe.post(`/account/dismissed-notices/${e}`)};var z1=e=>xe.get(`/account/${e}/registration`);var Hn=null,H1=e=>{if(Hn!=null&&Hn.closed){e.askServerIfLoggedIn({fromSsoWindow:!0});return}setTimeout(()=>{H1(e)},1e3)},MR=({url:e,blockedMessage:t,userController:r})=>{if(Hn&&!Hn.closed){Hn.focus();return}if(Hn=window.open(e,"login_window","width=650,height=530,resizable,scrollbars"),!Hn){alert(t);return}H1(r)},rf=()=>{Hn&&!Hn.closed&&Hn.close()},K1=({userController:e,i18n:t})=>{window.userController=e,window.addEventListener("beforeunload",rf),e.observeEvent("ssoLogin",(r,n)=>{!n||typeof n!="string"||!["google","apple"].includes(n)||MR({url:_1(n),userController:e,blockedMessage:t(n==="google"?"account-shell-text-login-window-blocked-google":"account-shell-text-login-window-blocked-apple")})})};function W1(e){if(!e)return"";if(e.match(/[\d@_&\.\']/))return e;let t=e.split(" ");return t[0].length>=3?t[0]:e}var kR=0,ER=`guid_${Math.round(Math.random()*1e6)}_${new Date().getTime()}_`;function nf(e,t,r){var n;(n=e[t])==null||n.forEach(o=>o.callback(t,r))}function of(e,t){t.split(" ").forEach(r=>{var a,i;let[n,o]=r.split(".");if(n&&o)e[n]=(a=e[n])==null?void 0:a.filter(s=>s.namespace!==o);else if(n)delete e[n];else if(o)for(let s in e)e[s]=(i=e[s])==null?void 0:i.filter(c=>c.namespace!==o)})}function af(e,t,r){t.split(" ").forEach(n=>{var s;let[o,a]=n.split("."),i={namespace:a,callback:r};e[o]||(e[o]=[]),(s=e[o])==null||s.push(i)})}var ua=class{constructor(){this.__eventObservers={},this.guid=ER+ ++kR}triggerEvent(t,r){nf(this.__eventObservers,t,r)}observeEvent(t,r){af(this.__eventObservers,t,r)}unobserveEvent(t){of(this.__eventObservers,t)}};var Zr={type:"personal"},Is="personal";function Jc(e){return e.type==="personal"?Is:sf(e.id)}function sf(e){return`team-${e}`}function j1(e){return e.type==="team"?e.id:void 0}function cf(e,t){return e.type==="personal"?t.s("account-shell-text-personal-workspace"):t.raw(e.name)}var CR=e=>{var r,n,o;let t=e;return!!(t!=null&&t.isMaintenanceMode)||(t==null?void 0:t.status)===503&&((o=(n=(r=t==null?void 0:t.responseJSON)==null?void 0:r.errors)==null?void 0:n[0])==null?void 0:o.key)==="maintenance_mode"},Jd=class extends ua{constructor(r,n,o){super();this._authenticationStep={name:"authenticate"};this.loggedIn="not-checked";this.loggingOut=!1;this.userId="";this.name="";this.email="";this.featureFlags=[];this.workspaces={[Is]:Zr};this.currentWorkspace=Zr;this.isSoleTeamOwner=!1;this.emailVerificationStatus="";this.dispatch=r,this.i18n=n,S1(()=>this.logout()),o&&(this.initUser(o),this.triggerEvent("userUpdated",void 0)),window.addEventListener("pageshow",a=>{a.persisted&&(fs({force:!0}),this.askServerIfLoggedIn())})}setOpenModalAfterAuthentication(r){this.openModalAfterAuthentication=r}getCurrentWorkspace(){return this.currentWorkspace}setWorkspace(r){this.currentWorkspace=r,this.isLoggedIn()&&R1(j1(r)).catch(()=>Qi("Error saving current workspace"))}perform(r){switch(r.type){case"set-user":this.setUser(r.payload.account);break;case"set-authentication-step":this._authenticationStep=r.payload;break;case"reset-authentication-step":this._authenticationStep={name:"authenticate",email:"payload"in r?r.payload.email:void 0};break;case"get-email-registration-status":this.onGetEmailRegistrationStatus(r.payload);break;case"email-log-in":this.onEmailLogIn(r.payload);break;case"email-sign-up":this.onEmailSignUp(r.payload);break;case"previous-step":this.onPreviousStep();break;case"update-classifications":this.onUpdateClassifications(r.payload);break;case"sso-log-in":this.onSsoLogin(r.payload.provider);break;case"log-out-all-devices":this.onLogOutAllDevices();break;default:}}getAuthenticationStep(){return this._authenticationStep}async desmosLogin(r){let n=await I1(r);return this.completeLogin(n)}triggerSsoLoginEvent(r){this.triggerEvent("ssoLogin",r)}onSsoLogin(r){this._authenticationStep={...this._authenticationStep,status:{type:"loading"}},this.triggerSsoLoginEvent(r)}async askServerIfLoggedIn({fromSsoWindow:r=!1}={fromSsoWindow:!1}){let n;try{n=await Zd()}catch(o){CR(o)&&this.triggerEvent("detectedMaintenanceMode",void 0),r&&this.dispatch({type:"reset-authentication-step"}),this.completeLogout();return}n.isMaintenanceMode&&this.triggerEvent("detectedMaintenanceMode",void 0),this.completeLogin(n)}async driveCallback({isNewUser:r}){r?this.dispatch({type:"set-authentication-step",payload:{name:"sso-confirmation"}}):this.openModalAfterAuthentication||this.dispatch({type:"close-modal"});let n;try{n=await Zd()}catch(o){this.logout();return}this.completeLogin(n)}async setNameLegacy(r){let n=await D1(r);this.name=n.name||"",this.triggerEvent("userUpdated",void 0),this.dispatch({type:"render"})}async setNameDetail(r){let n=await q1({...r,source:"user"});this.name=n.name||"",this.nameDetail=n.nameDetail,this.triggerEvent("userUpdated",void 0),this.dispatch({type:"render"})}recoverPassword(r){return O1(r)}initUser(r){yh(r.userId),Gh(r.userId),this.setUser(r)}setUser(r){this.loggedIn="logged-in",this.userId=r.userId,this.name=r.name,this.nameDetail=r.nameDetail,this.email=r.email,this.featureFlags=r.featureFlags,this.workspaces={[Is]:Zr},this.currentWorkspace=Zr,r.teams.forEach(n=>{let o={type:"team",id:n.id,name:n.name,role:n.role,color:n.color,thumbnailUrl:n.thumbnailUrl,privacyDefault:n.privacyDefault};this.addTeamWorkspace(o),r.metadata.currentWorkspace===n.id&&(this.currentWorkspace=o)}),this.emailVerificationStatus=r.emailVerificationStatus,this.isSoleTeamOwner=!!(r!=null&&r.isSoleTeamOwner)}completeLogin(r){if(this.loggedIn==="logged-in"&&this.userId===r.userId){this.dispatch({type:"set-user",payload:{account:r}});return}let o=this.loggedIn;this.initUser(r),this.dispatch({type:"login-changed",previousStatus:o}),this.triggerEvent("userUpdated",void 0),this.openModalAfterAuthentication&&(this.openModalAfterAuthentication(),this.openModalAfterAuthentication=void 0)}async logout(){this.loggingOut=!0,this.triggerEvent("logout",void 0),this.setWorkspace(Zr),this.dispatch({type:"render"});try{await tf(),this.completeLogout()}catch(r){await Zd().then(()=>this._onLogoutFailure()).catch(n=>{"loggedIn"in n&&!n.loggedIn?this.completeLogout():this._onLogoutFailure()})}finally{this.loggingOut=!1,this.triggerEvent("logoutFinished",void 0),this.dispatch({type:"render"})}}completeLogout(){let r=this.loggedIn;yh(void 0),Gh(void 0),this.loggedIn="logged-out",this.userId="",this.email="",this.name="",this.featureFlags=[],this.emailVerificationStatus="",this.workspaces={[Is]:Zr},this.isSoleTeamOwner=!1,this.dispatch({type:"login-changed",previousStatus:r}),this.triggerEvent("userUpdated",void 0)}_onLogoutFailure(){this.dispatch({type:"toast/show",toast:{message:this.i18n("account-shell-error-logging-out")}})}initiateAccountDeletion(r){return F1(r)}async onLogOutAllDevices(){try{await C1()}catch(r){this.dispatch({type:"toast/show",toast:{message:xe.parseErrorMessage(r,this.i18n)}});return}await this.logout()}getEmailChangeToken(){return xt("changeToken")}initiateEmailChange(r){return B1(r)}async setEmail(r){await V1(r),this.email=r.newEmail||"",this.emailVerificationStatus="VERIFYING",this.triggerEvent("userUpdated",void 0),this.dispatch({type:"render"})}async updateFeatureFlags(r){let n=await $1(r);this.featureFlags=n.featureFlags,this.triggerEvent("userUpdated",void 0)}getFeatureFlags(){return this.featureFlags}hasFeatureFlag(r){return this.featureFlags.some(n=>n===r)}removeFeatureFlag(r){this.featureFlags=this.featureFlags.filter(n=>n!==r),this.triggerEvent("userUpdated",void 0)}getWorkspaceByKey(r){return this.workspaces[r]}getWorkspaces(){return Object.values(this.workspaces)}getTeamWorkspaces(){return this.getWorkspaces().filter(r=>r.type==="team")}hasTeamWorkspace(){return Object.values(this.workspaces).some(r=>r.type==="team")}updateTeamWorkspace(r,n){let o=this.getWorkspaceByKey(r);if((o==null?void 0:o.type)==="team")return this.workspaces[r]={...o,...n},this.workspaces[r]}addTeamWorkspace(r){this.workspaces[sf(r.id)]=r}getIsSoleTeamOwner(){return this.isSoleTeamOwner}hasWorkspace(r){return r in this.workspaces}isCurrentWorkspaceKey({workspaceKey:r}){let n=Jc(this.getCurrentWorkspace());return r===n}getLoginStatus(){return this.loggedIn}isLoggedIn(){return this.loggingOut?!1:this.loggedIn==="logged-in"}getEmail(){return this.email}getFirstName(){return W1(this.name)}getFullName(){return this.name}getNameDetail(){return this.nameDetail}getUserId(){return this.userId}getVerificationStatus(){return this.emailVerificationStatus}getUserAsJSON(){if(this.isLoggedIn())return{userId:this.userId,email:this.email,name:this.name,nameDetail:this.nameDetail,emailVerificationStatus:this.emailVerificationStatus,featureFlags:this.featureFlags,teams:[],metadata:{},isSoleTeamOwner:this.isSoleTeamOwner}}fetchEmailRegistration(r){return z1(r)}async onGetEmailRegistrationStatus({email:r}){var a,i;if(this._authenticationStep.name!=="authenticate")throw new Error("Cannot get email registration status outside of authentication step.");if(((i=(a=this._authenticationStep)==null?void 0:a.status)==null?void 0:i.type)==="loading")return;this._authenticationStep={name:"authenticate",status:{type:"loading"}};let n;try{n=await this.fetchEmailRegistration(r)}catch(s){this.dispatch({type:"set-authentication-step",payload:{name:"authenticate",status:{type:"error",message:xe.parseErrorMessage(s,this.i18n)}}});return}if(!n.isRegistered){this.dispatch({type:"set-authentication-step",payload:{name:"email-signup"}});return}if(!n.ssoProvider||n.usesPassword){this.dispatch({type:"set-authentication-step",payload:{name:"email-login"}});return}let o;switch(n.ssoProvider){case"googleSso":o="google";break;case"appleSso":o="apple";break;default:let s=n.ssoProvider;throw new Error(`Unexpected ssoProvider ${s}`)}this.dispatch({type:"set-authentication-step",payload:{name:"previously-sso",ssoProvider:o}}),$o({category:"authentication",action:"show-previous-sso-login"})}async onEmailLogIn({language:r,email:n,password:o}){var s;if(this._authenticationStep.name!=="email-login")throw new Error("Cannot log in with email outside of email-login step.");if(((s=this._authenticationStep.status)==null?void 0:s.type)==="loading")return;this._authenticationStep={name:"email-login",status:{type:"loading"}};let a=!1;try{a=(await P1({lang:r,email:n})).pendingDeletion}catch(c){}let i=!!this.openModalAfterAuthentication;try{await this.desmosLogin({email:n,password:o,lang:r})}catch(c){this.dispatch({type:"set-authentication-step",payload:{name:"email-login",status:{type:"error",message:xe.parseErrorMessage(c,this.i18n)}}});return}a?this.dispatch({type:"show-modal",modal:"account-reenabled"}):i||this.dispatch({type:"close-modal"})}async onEmailSignUp({language:r,firstName:n,lastName:o,email:a,password:i,classifications:s}){var p;if(this._authenticationStep.name!=="email-signup")throw new Error("Cannot sign up with email outside of email-signup step.");if(((p=this._authenticationStep.status)==null?void 0:p.type)==="loading")return;this._authenticationStep={name:"email-signup",status:{type:"loading"}};let c;try{c=await N1({lang:r,name:n,userProvidedName:{given:n,family:o||void 0},email:a,password:i,metadata:s?{selfClassifications:s}:void 0})}catch(y){this.dispatch({type:"set-authentication-step",payload:{name:"email-signup",status:{type:"error",message:xe.parseErrorMessage(y,this.i18n)}}});return}let l=!!this.openModalAfterAuthentication;this.completeLogin(c),this.shouldShowProfessionalPreview(s)?this.dispatch({type:"set-authentication-step",payload:{name:"professional-preview"}}):l||this.dispatch({type:"close-modal"})}onPreviousStep(){["email-login","email-signup","previously-sso"].includes(this._authenticationStep.name)&&($o({category:"authentication",action:"navigate-back",name:this._authenticationStep.name}),this._authenticationStep={name:"authenticate"})}onUpdateClassifications({classifications:r}){r.length!==0&&L1(this.getUserId(),{classifications:r})}shouldShowProfessionalPreview(r){let n=window.location.pathname,o=n==="/professional"||n.startsWith("/professional-team/invite/");return(r==null?void 0:r.length)===1&&r[0]==="non-education"&&!o}async fetchPermanentlyDismissedNotices(){let r;try{r=await G1()}catch(n){return}this.permanentlyDismissedNotices=r}hasPermanentlyDismissedNotice(r){var n;return this.isLoggedIn()&&(!this.permanentlyDismissedNotices||((n=this.permanentlyDismissedNotices)==null?void 0:n.includes(r)))}async dismissNoticePermanently(r){var n;try{await U1(r)}catch(o){Qi(`Error dismissing notice: ${r}.`);return}$o({category:"notice",action:r,name:"dismiss-permanently"}),this.permanentlyDismissedNotices=[...(n=this.permanentlyDismissedNotices)!=null?n:[],r]}resetPermanentDismissedNotices(){this.permanentlyDismissedNotices=void 0}};var X8=navigator.userAgent.match(/MSIE 8.0/i)!==null,Z8=navigator.userAgent.match(/MSIE 9.0/i)!==null,J8=navigator.userAgent.match(/MSIE/i)!==null||navigator.userAgent.match(/Trident/i)!==null&&navigator.userAgent.match(/rv:11/i)!==null,e5=navigator.userAgent.match(/Edge/i)!==null,t5=navigator.userAgent.match(/iPad/i)!==null,r5=navigator.userAgent.match(/Mobile|Android/i)!==null||xt("forceMobile"),el=navigator.userAgent.match(/Android/i)!==null,da=navigator.userAgent.match(/(iPad|iPhone|iPod)/i)!==null||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n5=navigator.userAgent.match(/Chrome/i)!==null,Y1=navigator.userAgent.match(/Firefox/i)!==null,X1=navigator.userAgent.match(/^((?!chrome|android).)*safari/i)!==null,tl=navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)!==null,o5=navigator.platform.match(/(Win32)/i)!==null,a5=navigator.userAgent.match(/Touch/i)!==null,i5=navigator.userAgent.match(/Kindle/i)!==null||navigator.userAgent.match(/Silk/i)!==null,s5=navigator.userAgent.match(/KeyWeb/i)!==null,c5=window.parent!==window;var IR=da||el||!!navigator.userAgent.match(/webOS/i)||!!navigator.userAgent.match(/BlackBerry/i)||!!navigator.userAgent.match(/Windows Phone/i)||xt("forceTouchDevice"),dn=IR,ep=(()=>{let e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||"0",10)]:null})(),l5=(()=>{let e=navigator.appVersion.match(/OS X (\d+)_(\d+)_?(\d+)?/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||"0",10)]:null})(),u5=(()=>{let e=navigator.appVersion.match(/Chrom(e|ium)\/([0-9]+)\.([0-9]+)\.?([0-9]+)?/);return e?[parseInt(e[2],10),parseInt(e[3],10),parseInt(e[4]||"0",10)]:null})(),Z1=!(!("inputMode"in document.createElement("textarea"))||da&&ep&&ep[0]<15),d5=(()=>{let e=document.createElement("canvas");return!!(e.getContext&&e.getContext("2d"))})(),p5=window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.location.search.indexOf("prefersReducedMotion")>=0,m5=(()=>{let e=document.createElement("video");return e.canPlayType&&!!e.canPlayType('video/webm; codecs="vp8, vorbis"')})(),Q1,g5=(Q1=window.matchMedia("(forced-colors: active)"))==null?void 0:Q1.matches;var AR=["assertive","polite"];function tp(e){return AR.some(t=>t===e)}var rp=class{constructor(t,r,n=["assertive","polite"]){this.observedAriaLiveElements=new WeakMap;this.destroyed=!1;this.onAriaLabelFocus=t=>{let r=t.target;if(this.isElement(r)){let n=r.getAttribute("aria-label");n&&this.logger(n,"label")}};this.logger=t,this.document=r,this.observedPolitenesses=new Set(n),this.document.documentElement.addEventListener("focus",this.onAriaLabelFocus,!0),this.ariaLiveSelector=n.map(o=>`[aria-live="${o}"]`).join(", "),this.ariaLiveContentObserver=new MutationObserver(o=>this.handleAriaLiveContentMutations(o)),r.documentElement.querySelectorAll(this.ariaLiveSelector).forEach(o=>this.startObservingAriaLiveElement(o)),this.treeObserver=new MutationObserver(o=>this.handleDocumentTreeMutations(o)),this.treeObserver.observe(r.documentElement,{childList:!0,subtree:!0,attributeFilter:["aria-live"]})}destroy(){this.destroyed=!0,this.document.documentElement.removeEventListener("focus",this.onAriaLabelFocus,!0),this.ariaLiveContentObserver.disconnect(),this.treeObserver.disconnect()}isObservingElement(t){return!!this.observedAriaLiveElements.get(t)}handleAriaLiveContentMutations(t){var n,o;let r=new Map;for(let a of t){if(!this.observedAriaLiveElements.get(a.target))continue;let i=r.get(a.target);i||(i=[],r.set(a.target,i)),i.push(a)}for(let[a,i]of r){let s=a.cloneNode(!0),c=[s.textContent||""];for(let y=i.length-1;y>=0;y--){let x=i[y];switch(x.type){case"attributes":{x.attributeName!==null&&s.setAttribute(x.attributeName,x.oldValue||""),c.push(s.textContent||"");break}case"characterData":{x.oldValue!==null&&(s.textContent=x.oldValue),s.textContent&&s.textContent!==c[c.length-1]&&c.push(s.textContent);break}case"childList":{if(x.addedNodes.length>1||x.removedNodes.length>1)throw new Error(`Expected at most one removed node and one added node, but got ${x.removedNodes.length} removed nodes and ${x.addedNodes.length} added nodes`);x.addedNodes.length===1&&((n=s.firstChild)==null||n.remove()),x.removedNodes.length===1&&x.removedNodes.forEach(M=>s.appendChild(M.cloneNode(!0))),s.textContent&&s.textContent!==c[c.length-1]&&c.push(s.textContent);break}}}let l=this.getAriaLiveElementForNode(a),p=(o=l==null?void 0:l.getAttribute("aria-live"))!=null?o:null;if(!(!tp(p)||!this.observedPolitenesses.has(p)))for(let y of c.reverse())this.logger(y,"alert",p)}}startObservingAriaLiveElement(t){if(this.destroyed)return;let r=t.getAttribute("aria-live");!tp(r)||!this.observedPolitenesses.has(r)||this.observedAriaLiveElements.get(t)||(this.observedAriaLiveElements.set(t,!0),t.textContent&&this.logger(t.textContent,"alert",r),this.ariaLiveContentObserver.observe(t,{attributes:!0,characterData:!0,childList:!0,attributeOldValue:!0,characterDataOldValue:!0}))}stopObservingAriaLiveElement(t){this.observedAriaLiveElements.set(t,!1)}getAriaLiveElementForNode(t){return this.isElement(t)?t:t.parentElement}handleDocumentTreeMutations(t){for(let r of t){if(r.addedNodes.forEach(n=>{if(!this.isElement(n))return;let o=n.getAttribute("aria-live");tp(o)&&this.startObservingAriaLiveElement(n)}),this.isElement(r.target)&&r.attributeName==="aria-live"){let n=r.target.getAttribute("aria-live");tp(n)?this.startObservingAriaLiveElement(r.target):this.stopObservingAriaLiveElement(r.target)}r.removedNodes.forEach(n=>{this.isElement(n)&&(this.stopObservingAriaLiveElement(n),n.querySelectorAll(this.ariaLiveSelector).forEach(o=>this.stopObservingAriaLiveElement(o)))})}}isElement(t){var n;let r=(n=this.document.defaultView)==null?void 0:n.Element;return r?t instanceof r:!1}};var np=new WeakMap,As=class e{static getInstance(t,r="dcg-aria-alert"){let n=np.get(t);return n||(n=new e(t,r),np.set(t,n)),n}static getExisting(t){return np.get(t)}constructor(t,r="dcg-aria-alert"){this.rootElement=t,this.liveRegions={assertive:{elt:this.createLiveRegion("assertive",r),items:[],oldMsg:""},polite:{elt:this.createLiveRegion("polite",r),items:[],oldMsg:""}},xt("logAria")&&(this.spy=new rp((n,o,a)=>console.log(a?`[aria ${o} ${a}] ${n}`:`[aria ${o}] ${n}`),document,["assertive","polite"]))}createLiveRegion(t,r){let n=document.createElement("span");return n.setAttribute("aria-live",t),n.setAttribute("aria-atomic","true"),n.classList.add(r),n.textContent="\xA0",this.rootElement.appendChild(n),n.textContent="",n}clear(){for(let t of Object.values(this.liveRegions))t.elt&&(t.elt.textContent="")}queue(t,r="assertive"){this.liveRegions[r].items.push(t)}alert(t,r="assertive"){let n=this.liveRegions[r];if(t!==void 0&&this.queue(t,r),n.elt&&n.items.length>0){let o=n.items.join(" ").replace(/ +(?= )/g,"");n.elt.setAttribute("aria-relevant",n.oldMsg===o&&tl?"all":"additions text"),n.elt.textContent=o,n.oldMsg=o}n.items.length=0}destroy(){for(let t of Object.values(this.liveRegions))t.elt&&(t.elt.parentNode&&t.elt.parentNode.removeChild(t.elt),t.elt=void 0);this.spy&&(this.spy.destroy(),this.spy=void 0),np.delete(this.rootElement)}};var J1=(async()=>{if(Fv("autoplay"))return xt("autoplay");let e=document.createElement("video");e.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAu1tZGF0AAACrQYF//+p3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE1NSByMjkwMSA3ZDBmZjIyIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxOCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTMgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz1jcmYgbWJ0cmVlPTEgY3JmPTI4LjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAAwZYiEAD//8m+P5OXfBeLGOfKE3xkODvFZuBflHv/+VwJIta6cbpIo4ABLoKBaYTkTAAAC7m1vb3YAAABsbXZoZAAAAAAAAAAAAAAAAAAAA+gAAAPoAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIYdHJhawAAAFx0a2hkAAAAAwAAAAAAAAAAAAAAAQAAAAAAAAPoAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAACgAAAAWgAAAAAAJGVkdHMAAAAcZWxzdAAAAAAAAAABAAAD6AAAAAAAAQAAAAABkG1kaWEAAAAgbWRoZAAAAAAAAAAAAAAAAAAAQAAAAEAAVcQAAAAAAC1oZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAVmlkZW9IYW5kbGVyAAAAATttaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAD7c3RibAAAAJdzdHNkAAAAAAAAAAEAAACHYXZjMQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAACgAFoASAAAAEgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj//wAAADFhdmNDAWQACv/hABhnZAAKrNlCjfkhAAADAAEAAAMAAg8SJZYBAAZo6+JLIsAAAAAYc3R0cwAAAAAAAAABAAAAAQAAQAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAEAAAABAAAAFHN0c3oAAAAAAAAC5QAAAAEAAAAUc3RjbwAAAAAAAAABAAAAMAAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTguMTIuMTAw",e.muted=!0,e.playsInline=!0,e.style.display="none";let t=await new Promise(r=>{document.readyState!=="loading"?r(document.body):document.addEventListener("DOMContentLoaded",()=>r(document.body))});t.appendChild(e);try{await e.play()}catch(r){return!1}finally{t.removeChild(e)}return!0})();function eT(e){return e.type==="set-focus-location"||e.type==="blur-focus-location"}function lf(e){return e.type==="unknown"}var Ps=class{constructor(t){this.controller=t}shouldBeFocused(t){let r=this.controller.getFocusLocation();return lf(r)||!Qe(r,t)?!1:this.upcoming===void 0||Qe(this.upcoming.location,t)}captureMidDispatchFocusAction(t){return!this.controller.dispatcher.isDispatching()||!eT(t)?!1:(t.type==="set-focus-location"?this.upcoming={location:t.location}:Qe(this.upcomingLocation(),t.location)&&(this.upcoming={location:{type:"unknown"}}),!0)}upcomingLocation(){return this.upcoming?this.upcoming.location:this.controller.getFocusLocation()}syncAfterDispatch(){if(this.upcoming===void 0)return;let{location:t}=this.upcoming,r=this.controller.getFocusLocation();this.upcoming=void 0,!Qe(t,r)&&(lf(t)?this.controller.dispatch({type:"blur-focus-location",location:r}):this.controller.dispatch({type:"set-focus-location",location:t}))}};function Xa(e){let t={shouldBeFocused:()=>!!PR(e),onFocusedChanged:(r,n)=>{var o;!r&&n&&((o=e.suppressBlurEvent)!=null&&o.call(e,n))||NR(e,r)}};return t}function op(e){return Xa(e)}var k5=ue({shouldBeFocused:()=>!1,onFocusedChanged:()=>{}});function PR(e){return e.controller.focusTracker.shouldBeFocused(e.location)}function NR(e,t){t?e.controller.dispatch({type:"set-focus-location",location:e.location}):e.controller.dispatch({type:"blur-focus-location",location:e.location})}var _R={real:!0,imag:!0,conj:!0,arg:!0},ap=Object.keys(_R);var tT={segment:!0,line:!0,ray:!0,circle:!0,arc:!0,vector:!0,glider:!0,parallel:!0,perpendicular:!0,center:!0,radius:!0,area:!0,perimeter:!0,start:!0,end:!0,angles:!0,angle:!0,directedangles:!0,directedangle:!0,coterminal:!0,supplement:!0,vertices:!0,segments:!0,intersection:!0,strictintersection:!0,translate:!0,dilate:!0,rotate:!0,reflect:!0,construction:!0,points:!0,lines:!0,circles:!0,arcs:!0,polygons:!0,rays:!0,anglebisector:!0};var LR={"+":!0,"-":!0,"*":!0,"\\cdot":!0,"\\times":!0,"/":!0,"!":!0,"(":!0,")":!0,"\\{":!0,"\\}":!0,"(|":!0,"|)":!0,"[":!0,"]":!0,",":!0,";":!0,"...":!0,":":!0,"=":!0,">":!0,"<":!0,">=":!0,"<=":!0,"->":!0,"~":!0,"%":!0,".":!0,for:!0,with:!0,and:!0,or:!0,Letter:!0,Decimal:!0,Cmd:!0,TokenNode:!0,Differential:!0,End:!0,Trig:!0,Ln:!0,Log:!0,Int:!0,Sum:!0,Prod:!0,Err:!0};var go={"\\lt":"<","\\gt":">","\\le":"<=","\\ge":">=","\\leq":"<=","\\geq":">=","\\ldots":"...","\\sim":"~","\\to":"->","\\cdot":"\\cdot","\\times":"\\times","\\div":"/","\\ln":"Ln","\\log":"Log","\\int":"Int","\\sum":"Sum","\\prod":"Prod","\\backslash":"Err","\\for":"for","\\with":"with","\\and":"and","\\or":"or"},RR=["sin","cos","tan","cot","sec","csc"];for(let e of RR)go["\\"+e]="Trig",go["\\"+e+"h"]="Trig",go["\\arc"+e]="Trig",go["\\arc"+e+"h"]="Trig",go["\\ar"+e+"h"]="Trig";var uf={"+":"+","-":"-","*":"*","/":"/","!":"!","(":"(",")":")","[":"[","]":"]",",":",",";":";","...":"...",":":":","=":"=",">=":">=","<=":"<=",">":">","<":"<","~":"~",".":"."},rT={"\\{":"\\{","\\}":"\\}","\\%":"%"},nT={"|":"(|","\\{":"\\{","[":"[","(":"("},oT={"|":"|)","\\}":"\\}","]":"]",")":")"},aT=Object.keys(LR);var iT=["chisqtest","chisqgof","score","conf","pleft","pright","ztest","zproptest","score","dof","estimate","stderr","null","upper","lower"];var sT={segment:!0,triangle:!0,vector:!0,start:!0,end:!0,sphere:!0};var DR={exp:"mq-narration-op-exp",ln:"mq-narration-op-ln",log:"mq-narration-op-log",total:"mq-narration-op-total",length:"mq-narration-op-length",count:"mq-narration-op-count",mean:"mq-narration-op-mean",median:"mq-narration-op-median",quantile:"mq-narration-op-quantile",quartile:"mq-narration-op-quartile",nCr:"mq-narration-op-nCr",nPr:"mq-narration-op-nPr",stats:"mq-narration-op-stats",stdev:"mq-narration-op-stdev",stddev:"mq-narration-op-stddev",stdDev:"mq-narration-op-stdDev",stdevp:"mq-narration-op-stdevp",stddevp:"mq-narration-op-stddevp",stdDevP:"mq-narration-op-stdDevP",mad:"mq-narration-op-mad",var:"mq-narration-op-var",varp:"mq-narration-op-varp",variance:"mq-narration-op-variance",cov:"mq-narration-op-cov",covp:"mq-narration-op-covp",corr:"mq-narration-op-corr",spearman:"mq-narration-op-spearman",lcm:"mq-narration-op-lcm",mcm:"mq-narration-op-mcm",gcd:"mq-narration-op-gcd",mcd:"mq-narration-op-mcd",gcf:"mq-narration-op-gcf",mod:"mq-narration-op-mod",ceil:"mq-narration-op-ceil",floor:"mq-narration-op-floor",round:"mq-narration-op-round",abs:"mq-narration-op-abs",min:"mq-narration-op-min",max:"mq-narration-op-max",sign:"mq-narration-op-sign",signum:"mq-narration-op-signum",sgn:"mq-narration-op-sgn",sin:"mq-narration-op-sin",cos:"mq-narration-op-cos",tan:"mq-narration-op-tan",csc:"mq-narration-op-csc",sec:"mq-narration-op-sec",cot:"mq-narration-op-cot",sinh:"mq-narration-op-sinh",cosh:"mq-narration-op-cosh",tanh:"mq-narration-op-tanh",csch:"mq-narration-op-csch",sech:"mq-narration-op-sech",coth:"mq-narration-op-coth",arcsin:"mq-narration-op-arcsin",arccos:"mq-narration-op-arccos",arctan:"mq-narration-op-arctan",arccsc:"mq-narration-op-arccsc",arcsec:"mq-narration-op-arcsec",arccot:"mq-narration-op-arccot",arcsinh:"mq-narration-op-arcsinh",arccosh:"mq-narration-op-arccosh",arctanh:"mq-narration-op-arctanh",arccsch:"mq-narration-op-arccsch",arcsech:"mq-narration-op-arcsech",arccoth:"mq-narration-op-arccoth",arsinh:"mq-narration-op-arsinh",arcosh:"mq-narration-op-arcosh",artanh:"mq-narration-op-artanh",arcsch:"mq-narration-op-arcsch",arsech:"mq-narration-op-arsech",arcoth:"mq-narration-op-arcoth",polygon:"mq-narration-op-polygon",distance:"mq-narration-op-distance",midpoint:"mq-narration-op-midpoint",sort:"mq-narration-op-sort",shuffle:"mq-narration-op-shuffle",join:"mq-narration-op-join",unique:"mq-narration-op-unique",erf:"mq-narration-op-erf",ttest:"mq-narration-op-ttest",TScore:"mq-narration-op-TScore",tscore:"mq-narration-op-tscore",normaldist:"mq-narration-op-normaldist",tdist:"mq-narration-op-tdist",poissondist:"mq-narration-op-poissondist",binomialdist:"mq-narration-op-binomialdist",uniformdist:"mq-narration-op-uniformdist",chisqdist:"mq-narration-op-chisqdist",geodist:"mq-narration-op-geodist",pdf:"mq-narration-op-pdf",cdf:"mq-narration-op-cdf",random:"mq-narration-op-random",inverseCdf:"mq-narration-op-inverseCdf",inversecdf:"mq-narration-op-inversecdf",histogram:"mq-narration-op-histogram",dotplot:"mq-narration-op-dotplot",boxplot:"mq-narration-op-boxplot",rgb:"mq-narration-op-rgb",hsv:"mq-narration-op-hsv",okhsv:"mq-narration-op-okhsv",oklab:"mq-narration-op-oklab",oklch:"mq-narration-op-oklch",for:"mq-narration-op-for",and:"mq-narration-op-and",or:"mq-narration-op-or",width:"mq-narration-op-width",height:"mq-narration-op-height",with:"mq-narration-op-with",repeat:"mq-narration-op-repeat",real:"mq-narration-op-real",imag:"mq-narration-op-imag",conj:"mq-narration-op-conj",arg:"mq-narration-op-arg",det:"mq-narration-op-det",inv:"mq-narration-op-inv",transpose:"mq-narration-op-transpose",rref:"mq-narration-op-rref",trace:"mq-narration-op-trace",rows:"mq-narration-op-rows",columns:"mq-narration-op-columns",rank:"mq-narration-op-rank",chisqtest:"mq-narration-op-chisqtest",chisqgof:"mq-narration-op-chisqgof",score:"mq-narration-op-score",conf:"mq-narration-op-conf",pleft:"mq-narration-op-pleft",pright:"mq-narration-op-pright",ztest:"mq-narration-op-ztest",zproptest:"mq-narration-op-zproptest",dof:"mq-narration-op-dof",estimate:"mq-narration-op-estimate",stderr:"mq-narration-op-stderr",null:"mq-narration-op-null",upper:"mq-narration-op-upper",lower:"mq-narration-op-lower",segment:"mq-narration-op-segment",line:"mq-narration-op-line",ray:"mq-narration-op-ray",circle:"mq-narration-op-circle",arc:"mq-narration-op-arc",vector:"mq-narration-op-vector",glider:"mq-narration-op-glider",parallel:"mq-narration-op-parallel",perpendicular:"mq-narration-op-perpendicular",center:"mq-narration-op-center",radius:"mq-narration-op-radius",area:"mq-narration-op-area",perimeter:"mq-narration-op-perimeter",start:"mq-narration-op-start",end:"mq-narration-op-end",angles:"mq-narration-op-angles",angle:"mq-narration-op-angle",directedangles:"mq-narration-op-directedangles",directedangle:"mq-narration-op-directedangle",coterminal:"mq-narration-op-coterminal",supplement:"mq-narration-op-supplement",vertices:"mq-narration-op-vertices",segments:"mq-narration-op-segments",intersection:"mq-narration-op-intersection",strictintersection:"mq-narration-op-strictintersection",translate:"mq-narration-op-translate",dilate:"mq-narration-op-dilate",rotate:"mq-narration-op-rotate",reflect:"mq-narration-op-reflect",construction:"mq-narration-op-construction",points:"mq-narration-op-points",lines:"mq-narration-op-lines",circles:"mq-narration-op-circles",arcs:"mq-narration-op-arcs",polygons:"mq-narration-op-polygons",rays:"mq-narration-op-rays",anglebisector:"mq-narration-op-anglebisector",triangle:"mq-narration-op-triangle",sphere:"mq-narration-op-sphere",tone:"mq-narration-op-tone",discretedist:"mq-narration-op-discretedist"},cT=["exp ln log","total length count mean median quantile quartile nCr nPr stats","stdev stddev stdDev stdevp stddevp stdDevP mad var varp variance cov covp corr spearman","lcm mcm gcd mcd gcf mod ceil floor round abs min max sign signum sgn","sin cos tan csc sec cot","sinh cosh tanh csch sech coth","arcsin arccos arctan arccsc arcsec arccot","arcsinh arccosh arctanh arccsch arcsech arccoth","arsinh arcosh artanh arcsch arsech arcoth","polygon","distance midpoint","sort shuffle join unique","erf","ttest TScore tscore","normaldist tdist poissondist binomialdist uniformdist chisqdist geodist","pdf cdf random inverseCdf inversecdf","histogram dotplot boxplot","rgb hsv okhsv oklab oklch","for","width height","with","and or","repeat","tone",...ap].join(" "),qR=["det","inv","transpose","rref","trace","rows","columns","rank"].join(" ");cT+=" "+qR;var OR="alpha beta sqrt theta phi rho pi tau nthroot cbrt sum prod integral percent infinity infty cross";function Ns(e){e||(e={});let t=[OR];return e.disallowAns||t.push("ans"),e.disallowFrac||t.push("frac"),e.additionalCommands&&(t=t.concat(e.additionalCommands)),t.join(" ")}function FR(e){e||(e={});let t=cT;return e.additionalOperators&&e.additionalOperators.length&&(t=`${t} ${e.additionalOperators.join(" ")}`),e.includeGeometryFunctions&&(t+=" "+Object.keys(tT).join(" ")),e.include3DFunctions&&(t+=" "+Object.keys(sT).join(" ")),t+=" "+iT.join(" "),t+=" discretedist",t.split(" ").map(n=>{var a;let o=DR[n];if(o===void 0&&!((a=e.additionalOperators)!=null&&a.includes(n)))throw new Error(`Programming Error: missing dictionary key for ${n}`);return o?`${n}|${o}`:n}).join(" ")}function BR(){return"for with and or"}function VR(){let e="ln log";for(let[t,r]of Object.entries(go))r=="Trig"&&(e+=" "+t.replace(/^\\/,""));return e}function _s(e){return{autoOperatorNames:FR(e),infixOperatorNames:BR(),prefixOperatorNames:VR()}}var ip=class{constructor(){this.raw=Sn;this.s=re}getBrailleMode(){return"none"}getSixKeyInput(){return!1}isKeypadEnabled(){return!1}insideNotebook(){return!1}getMathquillConfig(t){return{language:"en",autoCommands:Ns({disallowAns:!0}),..._s()}}};var pa=class{constructor(){this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}register(t){let r="ID_"+this._lastID++;return this._callbacks[r]=t,r}unregister(t){this._callbacks[t]||rl(!1,"Dispatcher.unregister(...): `%s` does not map to a registered callback.",t),delete this._callbacks[t]}waitFor(t){this._isDispatching||rl(!1,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(let r=0;r<t.length;r++){let n=t[r];if(this._isPending[n]){this._isHandled[n]||rl(!1,"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",n);continue}this._callbacks[n]||rl(!1,"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",n),this._invokeCallback(n)}}dispatch(t){this._isDispatching&&rl(!1,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this._startDispatching(t);try{for(let r in this._callbacks)this._isPending[r]||this._invokeCallback(r)}finally{this._stopDispatching()}}isDispatching(){return this._isDispatching}_invokeCallback(t){this._isPending[t]=!0,this._callbacks[t](this._pendingPayload),this._isHandled[t]=!0}_startDispatching(t){for(let r in this._callbacks)this._isPending[r]=!1,this._isHandled[r]=!1;this._pendingPayload=t,this._isDispatching=!0}_stopDispatching(){delete this._pendingPayload,this._isDispatching=!1}};function rl(e,t,...r){if(!e){let n;if(t===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let o=0;n=new Error(t.replace(/%s/g,()=>r[o++])),n.name="Invariant Violation"}throw n.framesToPop=1,n}}var GR=6e3,UR=["authentication","account-reenabled","recover-password","account-settings","small-screen-language","change-email","partner-contact-us"],lT=e=>UR.includes(e),sp=class{constructor({showLanguagePicker:t,allowAllLanguages:r,displayUpcomingMaintenanceNotice:n=!1}){this._queuedCallbacks=[];this.brailleController=new ip;this.isAutoplayEnabled=!1;this.focusLocation={type:"unknown"};this.modal=void 0;this.toastData={};this.dispatch=t=>{if(this.focusTracker.captureMidDispatchFocusAction(t))return;gd("dispatch::frontpage-controller",{type:t.type}),this.dispatcher.dispatch(t),this.focusTracker.syncAfterDispatch();let r;for(;r=this._queuedCallbacks.shift();)r()};this.s=vs(()=>this.language);e1(),this.setupUserController(),this.dispatcher=new pa,this.focusTracker=new Ps({dispatcher:this.dispatcher,dispatch:o=>this.dispatch(o),getFocusLocation:()=>this.getFocusLocation()}),this.dispatcher.register(o=>{this.handleAction(o),this.updateViews()}),this.language=Ms(),this.showLanguagePicker=t,r||Qd(),this.ariaManager=As.getInstance(document.body),this.displayUpcomingMaintenanceNotice=n,J1.then(o=>{o&&this.dispatch({type:"set-autoplay-enabled",value:o})})}setupUserController(){this.userController=new Jd(this.dispatch,this.s),this.userController.askServerIfLoggedIn(),fs(),K1({userController:this.userController,i18n:this.s.bind(this)})}getDispatcher(){return this.dispatcher}runAfterDispatch(t){this.dispatcher.isDispatching()?this._queuedCallbacks.push(t):t()}enqueueEvent(t){this.runAfterDispatch(()=>{this.onEventEmitted&&this.onEventEmitted(t)})}updateViews(){var t;(t=this.onViewUpdate)==null||t.call(this)}logEvent(t){$o(t)}getFocusLocation(){return this.focusLocation}isFrontpageAction(t){switch(t.type){case"render":case"login-changed":case"fetch-language":case"set-language":case"set-header-menu-open":case"set-workspace-from-switcher":case"toast/show":case"toast/close":case"set-autoplay-enabled":case"set-user":case"set-authentication-step":case"reset-authentication-step":case"get-email-registration-status":case"email-log-in":case"email-sign-up":case"previous-step":case"update-classifications":case"sso-log-in":case"log-out-all-devices":case"show-modal":case"close-modal":case"set-focus-location":case"blur-focus-location":return!0;default:return!1}}handleAction(t){var r,n;if(this.isFrontpageAction(t)){if(t.type==="render")return;switch(t.type){case"set-focus-location":this.focusLocation=t.location;break;case"blur-focus-location":Qe(this.focusLocation,t.location)&&(this.focusLocation={type:"unknown"});break;case"set-autoplay-enabled":this.isAutoplayEnabled=t.value;break;case"close-modal":this.closeModal();break;case"show-modal":this.showModal(t);break;case"login-changed":this.onLoginChanged(t.previousStatus);break;case"fetch-language":this.fetchLanguage(t.code);break;case"set-language":this.language=t.language,this.updateUrlForLang(this.language),this.enqueueEvent("changeLang"),this.openHeaderMenu==="language"&&(this.setHeaderMenu(void 0),(r=document.querySelector(".dcg-language-picker-anchor"))==null||r.focus());break;case"set-workspace-from-switcher":this.logEvent({category:"workspace",action:"switch-workspace",name:(n=t.payload.source)!=null?n:"frontpage-switcher"}),this.userController.setWorkspace(t.payload.workspace),(this.isHeaderMenuOpen("account")||this.isHeaderMenuOpen("small-screen"))&&this.setHeaderMenu(void 0);break;case"set-header-menu-open":t.isOpen===!1?t.menu===this.openHeaderMenu&&this.setHeaderMenu(void 0):this.setHeaderMenu(t.menu);break;case"toast/show":this.showToast(t.toast);break;case"toast/close":this.closeToast();break;case"set-user":case"set-authentication-step":case"reset-authentication-step":case"get-email-registration-status":case"email-log-in":case"email-sign-up":case"previous-step":case"update-classifications":case"sso-log-in":case"log-out-all-devices":this.userController.perform(t);break;default:return}}else this.handlePageAction(t)}handlePageAction(t){}raw(t,r){return Sn(t,r)}hasTranslation(t){return xs(t,this.language)}async fetchLanguage(t){await Qa(t),this.dispatch({type:"set-language",language:t})}updateUrlForLang(t){if(!(window.history&&history.replaceState))return;let{origin:r,pathname:n,search:o,hash:a}=location,i=Bv(o,"lang",t),s=`${r}${n}${i}${a}`;history.replaceState(null,"",s)}getAutoplayEnabled(){return this.isAutoplayEnabled}getLanguage(){return this.language}getShowLanguagePicker(){return this.showLanguagePicker}isHeaderMenuOpen(t){return this.openHeaderMenu===t}setHeaderMenu(t){this.openHeaderMenu=t}onLoginChanged(t){}getModal(){return this.modal}showModal(t){this.resetAuthenticationModal(t),this.setHeaderMenu(void 0),this.onModalWillShow(t),this.modal=t.modal}onModalWillShow(t){}resetAuthenticationModal(t){if(t.modal!=="authentication")return;this.userController.perform({type:"reset-authentication-step",payload:{email:"email"in t?t.email:void 0}});let r="fromButton"in t?t.fromButton:void 0;if(!r)return;let n;switch(r){case"log-in":n="open-modal--login";break;case"sign-up":n="open-modal--signup";break;default:return}this.logEvent({category:"authentication",action:n,name:t1()})}closeModal(){if(this.userController.setOpenModalAfterAuthentication(void 0),this.modal==="authentication"&&!this.userController.isLoggedIn()&&$o({category:"authentication",action:"close-modal",name:this.userController.getAuthenticationStep().name}),this.modal==="change-email"){let t=Fc();t.delete("changeToken"),Vv(t)}this.onModalWillClose(this.modal),this.modal=void 0}onModalWillClose(t){}shouldShowUpcomingMaintenanceNotice(){return this.displayUpcomingMaintenanceNotice}shouldShowTopBanner(){return!1}closeExternalLoginPopupWindow(){rf()}getAriaManager(){return this.ariaManager}showToast(t){var n;this.toastData=t,clearTimeout(this.hideToastTimeout);let r=(n=t.hideAfter)!=null?n:GR;r>0&&(this.hideToastTimeout=setTimeout(()=>{this.dispatch({type:"toast/close"})},r))}closeToast(){clearTimeout(this.hideToastTimeout);let t=this.toastData.onHide;this.toastData={},t&&this.runAfterDispatch(t)}getToastData(){return this.toastData}destroy(){var t;(t=this.ariaManager)==null||t.destroy(),clearTimeout(this.hideToastTimeout)}};function uT(e){switch(e){case"geometry-calculator":return"geometry";case"graphing":return"2d";case"graphing-3d":return"3d";default:return e}}var Za=class extends K{template(){return xr(()=>this.props.workspace(),"type",{personal:()=>u("i",{class:"dcg-icon-user dcg-workspace-icon--personal","aria-hidden":"true"}),team:t=>dr(()=>!!t().thumbnailUrl,{true:()=>u("img",{src:()=>t().thumbnailUrl,class:"dcg-workspace-icon",alt:()=>`${t().name} team logo`,"aria-hidden":()=>{var r,n,o;return(o=(n=(r=this.props).ariaHidden)==null?void 0:n.call(r))!=null?o:!1}}),false:()=>u("span",{class:"dcg-workspace-icon","aria-hidden":"true",style:()=>({"background-color":t().color}),children:()=>t().name.charAt(0).toUpperCase()})})})}};var cp=class extends K{constructor(){super(...arguments);this.controller=this.props.controller();this.userController=this.controller.userController}selectWorkspace(r){this.controller.dispatch({type:"set-workspace-from-switcher",payload:{workspace:r}})}isWorkspaceSelected(r){let n=this.controller.userController.getCurrentWorkspace();return Jc(n)===Jc(r)}template(){return u("div",{class:"dcg-workspace-switcher__workspaces",children:N("ul",{class:"dcg-unstyled-list",children:[u(Ye,{each:()=>this.userController.getTeamWorkspaces(),children:r=>u("li",{children:u("button",{class:()=>({"dcg-unstyled-button":!0,"dcg-workspace-switcher__workspace":!0,"dcg-selected":this.isWorkspaceSelected(r())}),onTap:()=>this.selectWorkspace(r()),"aria-label":()=>this.controller.s("account-shell-button-workspace",{name:r().name}),role:"tab","aria-selected":()=>this.isWorkspaceSelected(r()),children:N("span",{class:"dcg-workspace-switcher__label-icon",children:[u(Za,{controller:this.const(this.controller),workspace:this.const(r())}),u("label",{class:"dcg-workspace-switcher__label",children:()=>r().name})]})})})},r=>r.id),u("li",{children:N("button",{class:()=>({"dcg-unstyled-button":!0,"dcg-workspace-switcher__workspace":!0,"dcg-selected":this.isWorkspaceSelected(Zr)}),onTap:()=>this.selectWorkspace(Zr),"aria-label":()=>this.controller.s("account-shell-button-workspace",{name:cf(Zr,this.controller)}),role:"tab","aria-selected":()=>this.isWorkspaceSelected(Zr),children:[N("span",{class:"dcg-workspace-switcher__label-icon",children:[u(Za,{controller:this.const(this.controller),workspace:this.const(Zr)}),u("label",{class:"dcg-workspace-switcher__label",children:()=>cf(Zr,this.controller)})]}),u("span",{class:"dcg-workspace-switcher__workspace-badge dcg-workspace-switcher__workspace-badge--free",children:"Free"})]})})]})})}};var lp=class extends K{constructor(){super(...arguments);this.controller=this.props.controller();this.userController=this.controller.userController}closeMenu(){"closeOpenMenuAndRefocus"in this.controller?this.controller.closeOpenMenuAndRefocus():this.controller.dispatch({type:"set-header-menu-open",isOpen:!1,menu:"account"})}handleManageWorkspacesClick(r){window.location.pathname==="/my-workspaces"&&(r.preventDefault(),this.closeMenu())}template(){return N(Dr,{children:[N("div",{class:"dcg-account-menu__user-info",children:[u("div",{class:"dcg-account-menu__account-name",children:()=>this.userController.getFullName()}),u("div",{class:"dcg-account-menu__account-email",children:()=>this.userController.getEmail()})]}),u(pt,{when:()=>this.userController.hasTeamWorkspace(),children:N(Dr,{children:[u(cp,{controller:this.props.controller}),u("a",{class:"dcg-action-manage-workspaces dcg-account-menu__manage-workspaces dcg-account-menu__link",href:"/my-workspaces",onClick:r=>this.handleManageWorkspacesClick(r),children:()=>this.controller.s("account-shell-link-manage-workspaces")})]})}),u("a",{class:"dcg-action-accountsettings dcg-account-menu__account-settings dcg-account-menu__link",role:"link",tabIndex:0,onTap:()=>this.controller.dispatch({type:"show-modal",modal:"account-settings"}),children:()=>this.controller.s("account-shell-link-account-settings")}),u("a",{class:"dcg-action-logout dcg-account-menu__logout dcg-account-menu__link",role:"link",tabIndex:0,onTap:()=>this.logout(),children:()=>this.controller.s("account-shell-link-log-out")})]})}logout(){this.props.onLogout?this.props.onLogout():this.userController.logout()}};var dT="v1.13";var zR=["graphing","geometry-calculator","graphing-3d"];var NU=[...zR,"notebook"];var pT={graphing:"dcg-icon-graphing",scientific:"dcg-icon-scientific",fourfunction:"dcg-icon-four-function",matrix:"dcg-icon-matrix","graphing-3d":"dcg-icon-3d","geometry-calculator":"dcg-icon-geometry",practice:"dcg-icon-test-mode","assessment-fourfunction":"dcg-icon-assessment-four","assessment-scientific":"dcg-icon-assessment-sci","assessment-graphing":"dcg-icon-assessment-graphing",notebook:"dcg-icon-notebook","notebook-inside":"dcg-icon-notebook-inside"};var HR=["education","commercial","generic","prospect"],_U=[...HR,"uncategorized"];var df=2025,LU=df-1;var mT={start:new Date("2026-07-25T08:00:00.000-04:00"),end:new Date("2026-07-25T10:00:00.000-04:00")};var KR=["#000000","#D31B29","#B45309","#8A7300","#008046","#276EF1","#6E1EFF","#666666"],RU=KR[0];var up=({id:e,product:t,lookupKey:r,unitAmount:n})=>({id:e,object:"price",active:!0,currency:"usd",unit_amount:n,lookup_key:r,product:t,recurring:{interval:"month",interval_count:1,usage_type:"licensed"}}),DU=[up({id:"price_test_professional",unitAmount:800,lookupKey:"professional_monthly",product:"prod_test_professional"}),up({id:"price_test_professional_2",unitAmount:1600,lookupKey:"professional_monthly_2",product:"prod_test_professional"})],qU=[up({id:"price_test_api_starter",unitAmount:1e4,lookupKey:"api_starter_monthly",product:"prod_test_api_team"}),up({id:"price_test_api_mid",unitAmount:2e4,lookupKey:"api_mid_monthly",product:"prod_test_api_team"})];var WR=["authenticate","terms",`art-contest-${df}`,"upcoming-maintenance"],$U=new Set([...WR,"professional-team-onboarding"]);var jR=Symbol("HANDLE_EVENT_GLOBAL_NAMESPACE"),Ja=class Ja{constructor(){this.handledBy=new Set}static getOrCreate(t){let r=Ja.metadataMap.get(t);return r||(r=new Ja,Ja.metadataMap.set(t,r)),r}static get(t){return Ja.metadataMap.get(t)}};Ja.metadataMap=new WeakMap;var dp=Ja;function gT(e){return"originalEvent"in e?e.originalEvent:e}function ma(e,t){let r=e&&gT(e);if(!r)return;let n=dp.getOrCreate(r);n==null||n.handledBy.add(t!=null?t:jR)}function hT(e,t){let r=e&&gT(e),n=r&&dp.get(r);return t!==void 0?n==null?void 0:n.handledBy.has(t):!!(n!=null&&n.handledBy.size)}var ol={apple:{metaKey:!0},other:{ctrlKey:!0}},nl={apple:{metaKey:!0,shiftKey:!0},other:{ctrlKey:!0,shiftKey:!0}},Lt={apple:{metaKey:!0,ctrlKey:!0},other:{ctrlKey:!0,altKey:!0}},TT={apple:{ctrlKey:!0,shiftKey:!0},other:{ctrlKey:!0,shiftKey:!0}},ST={apple:{ctrlKey:!0,altKey:!0},other:{ctrlKey:!0,altKey:!0}},pf={apple:{ctrlKey:!0,altKey:!0},other:{ctrlKey:!0,shiftKey:!0}},pn={apple:{ctrlKey:!0},other:{altKey:!0}},fT={apple:{metaKey:!0},other:{altKey:!0}},ga={apple:{metaKey:!0,shiftKey:!0},other:{altKey:!0,shiftKey:!0}};var QR={apple:{altKey:!0,shiftKey:!0},other:{altKey:!0,shiftKey:!0}},Ls={apple:{},other:{}},YR={apple:{ctrlKey:!0},other:{ctrlKey:!0}},XR=["F6",Ls];var Rs={undo:["Z",ol],redo:[["Z",nl],["Y",ol]]};var MT={brailleNemeth:["N",pn],brailleUEB:["U",pn],toggleSixKeyInput:["6",pn],exitBraille:[["Q",pn],["X",pn]]},WU={...Rs,clearAll:["L",TT],toggleFractionEvaluation:["A",ga],toggleDegrees:["D",pn],...MT},jU={...Rs,expressionZoomFit:["Z",QR],toggleFractionEvaluation:["A",ga],toggleItemHidden:["H",ga],toggleAuthorMode:["O",ga],toggleExpressionList:["E",ga],toggleKeyboardReorder:["M",ga],collapseAllFolders:["Up",ga],expandAllFolders:["Down",ga],collapseFolder:["Up",fT],expandFolder:["Down",fT],openExpressionSearch:["F",ol],openExpressionSearchRename:["F",nl],focusExpressionList:["E",Lt],newExpression:["X",Lt],newNote:["O",Lt],newFolder:["F",Lt],newImage:["I",Lt],newTable:["T",Lt],newTableRegression:["R",Lt],focusGeoToolbar:["M",Lt],openObjectNavigator:["C",Lt],toggleGraphSettings:["G",Lt],focusGraphPaper:["P",Lt],toggleEditListMode:["D",ST],clearGraph:["L",TT],switchPane:XR,...MT,toggleDegrees:["D",pn],toggleKeypad:["K",pn],toggleMute:["M",pn],zoomIn:[["+",pn],["=",pn]],zoomOut:["-",pn],zoomDefault:["0",pn],escape:["Esc",Ls],backspace:["Backspace",Ls]};var QU={...Rs,formattingToolbar:["M",Lt],backtick:["`",Ls]},YU={escape:["Esc",Ls],insertExpressionCell:["Enter",ol],...Rs,save:["S",ol],formatParagraph:["0",ST],formatTitle:["1",pf],formatHeading:["2",pf],formatSubheading:["3",pf],alignLeft:["L",nl],alignCenter:["E",nl],alignRight:["R",nl],commitGraphCellModal:["Enter",YR],insertColumnLeft:["[",Lt],insertColumnRight:["]",Lt],deleteColumn:[["Backspace",Lt],["Del",Lt]],focusFormattingToolbar:["M",Lt],openCommandPalette:["O",Lt],focusExpressionListSidebar:["E",Lt],openPublishedPreviewModal:["V",Lt]};function kT(e,t){let r=tl?t.apple:t.other;return!!e.shiftKey==!!r.shiftKey&&!!e.altKey==!!r.altKey&&!!e.metaKey==!!r.metaKey&&!!e.ctrlKey==!!r.ctrlKey}function Jr(e){e&&(e.stopPropagation(),e.preventDefault(),ma(e))}function ha(e){return kT(e,Ls)}var ET=e=>tt(e)==="Tab"&&!ZR(e),ZR=e=>!!e.ctrlKey||!!e.altKey||!!e.metaKey;function JR(e){return typeof e[0]=="string"}function CT(e,t){let r=JR(t)?[t]:t,n=tt(e),o=iD(e);return r.some(([a,i])=>kT(e,i)&&(n===a||o===a||eD(e,a)))}function eD(e,t){return t>="0"&&t<="9"&&"code"in e&&e.code===`Digit${t}`}var IT=e=>CT(e,Rs.undo),AT=e=>CT(e,Rs.redo);var tD="Backspace",rD="Tab",PT="Enter",NT="Shift",_T="Control",LT="Alt",RT="Meta",DT="CapsLock",qT="Esc",OT="Space",mf="PageUp",gf="PageDown",FT="End",BT="Home",hf="Left",ff="Up",yf="Right",bf="Down",nD="Del",oD="F6",aD={direction:[ff,bf,hf,yf],line:[BT,FT],page:[mf,gf]},Ds=(e,t)=>!!e&&aD[t].includes(e),yT={Backspace:tD,F6:oD,Tab:rD,Enter:PT,Shift:NT,Control:_T,Alt:LT,Meta:RT,CapsLock:DT,Escape:qT," ":OT,PageUp:mf,PageDown:gf,End:FT,Home:BT,ArrowLeft:hf,ArrowUp:ff,ArrowRight:yf,ArrowDown:bf,Delete:nD},pp=e=>{let t=[NT,LT,_T,DT,RT];return!!e.key&&t.includes(e.key)},ei=e=>tt(e)===PT||tt(e)===OT,bT={UIKeyInputUpArrow:ff,UIKeyInputDownArrow:bf,UIKeyInputLeftArrow:hf,UIKeyInputRightArrow:yf,UIKeyInputEscape:qT,UIKeyInputPageUp:mf,UIKeyInputPageDown:gf},xf=["0123456789abcdefghijklmnopqrstuvwxyz","\xBA\xA1\u2122\xA3\xA2\u221E\xA7\xB6\u2022\xAA\xE5\u222B\xE7\u2202 \u0192\xA9\u02D9 \u2206\u02DA\xAC\xB5 \xF8\u03C0\u0153\xAE\xDF\u2020 \u221A\u2211\u2248\xA5\u03A9","\u201A\u2044\u20AC\u2039\u203A\uFB01\uFB02\u2021\xB0\xB7\xC5\u0131\xC7\xCE\xB4\xCF\u02DD\xD3\u02C6\xD4\uF8FF\xD2\xC2\u02DC\xD8\u220F\u0152\u2030\xCD\u02C7\xA8\u25CA\u201E\u02DB\xC1\xB8"].map(e=>e.split("")),xT=xf[0],vT=xf[1],wT=xf[2],VT={},$T={};for(let e=0;e<xT.length;e++){let t=xT[e];vT[e]!==" "&&(VT[vT[e]]=t.toUpperCase()),wT[e]!==" "&&($T[wT[e]]=t.toUpperCase())}var tt=e=>{if(e.key&&yT[e.key])return yT[e.key];if(e.key&&bT[e.key])return bT[e.key]},iD=e=>{if(e.key){if(tl&&e.altKey){let t=e.shiftKey?$T:VT;if(t[e.key])return t[e.key]}if(e.key.length===1)return e.key.toUpperCase();if(e.key==="Enter")return"\r";if(e.key==="Tab")return"	"}};var vf=function(e){if(!e)return;let t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX}},Go=function(e,t){Object.assign(e.style,t)};function al(e){return!!(e&&(e.getClientRects().length||"offsetWidth"in e&&e.offsetWidth||"offsetHeight"in e&&e.offsetHeight))}function GT(e){if(document.readyState!=="loading")e();else{let t=function(){document.removeEventListener("DOMContentLoaded",t),e()};document.addEventListener("DOMContentLoaded",t)}}function qs(e){return Array.from(e.querySelectorAll('input:enabled, button:enabled, select:enabled, textarea:enabled, [tabindex="0"], a[href], summary, iframe')).filter(t=>!t.matches('[aria-hidden="true"], [aria-hidden="true"] *, [aria-disabled="true"], [aria-disabled="true"] *, [tabindex="-1"]')&&al(t))}function UT(e){return function(r){if(tt(r)=="Tab"&&e){let n=qs(e);if(n.length===0)return;let o=n[0],a=n[n.length-1];r.shiftKey&&document.activeElement===o?(r.preventDefault(),ge(a).trigger("focus")):!r.shiftKey&&document.activeElement===a?(r.preventDefault(),ge(o).trigger("focus")):document.activeElement&&!e.contains(document.activeElement)&&(r.preventDefault(),ge(o).trigger("focus"))}}}var sD=500,ho=5,il=2,wf=class extends K{constructor(){super(...arguments);this.uuid=this.props.uuid();this.offsetLeft=0}gravity(){var r,n;return((n=(r=this.props).gravity)==null?void 0:n.call(r))||"s"}template(){return N("div",{class:()=>{var r,n,o,a;return{"dcg-tooltip-positioning-container":!0,"dcg-tooltip-gravity-n-s":this.gravity()==="n"||this.gravity()==="s","dcg-tooltip-gravity-e-w":this.gravity()==="e"||this.gravity()==="w","dcg-tooltip-theme-light":((n=(r=this.props).theme)==null?void 0:n.call(r))==="light","dcg-tooltip-theme-dark":((a=(o=this.props).theme)==null?void 0:a.call(o))!=="light"}},style:()=>{var r,n,o,a;return{top:`${this.props.hitAreaRect().top+(((n=(r=this.props).offset)==null?void 0:n.call(r).top)||0)}px`,left:`${this.props.hitAreaRect().left+(((a=(o=this.props).offset)==null?void 0:a.call(o).left)||0)}px`,width:`${this.props.hitAreaRect().width}px`,height:`${this.props.hitAreaRect().height}px`}},children:[u("div",{class:"dcg-tooltip-message-container",style:this.bindFn(this.getMessageStyle),children:u("div",{role:"tooltip",id:this.const(this.uuid),class:()=>{var r,n;return{"dcg-tooltip-message":!0,"dcg-text-selectable":(n=(r=this.props).sticky)==null?void 0:n.call(r),"dcg-sticky-not-stuck":this.props.isStickyAndNotStuck()}},onMount:r=>this.tooltipMessage=r,style:()=>({left:`${Math.round(this.offsetLeft)}px`}),children:dr(()=>!!this.props.customTooltipView,{true:()=>this.props.customTooltipView(),false:()=>u("span",{children:this.props.tooltip})})})}),u("div",{class:()=>({"dcg-tooltip-arrow":!0,[this.getTooltipGravityClass()]:!0}),style:()=>{var r,n;return((n=(r=this.props).theme)==null?void 0:n.call(r))==="light"?this.getArrowWithBorderStyle():this.getSolidArrowStyle()}})]})}updatePositionIfNecessary(){if(this.gravity()!=="s"&&this.gravity()!=="n")return;let r=this.tooltipMessage.getBoundingClientRect(),n=this.tooltipMessage.closest(".dcg-tap-container");if(!n)return;let o=n.getBoundingClientRect();r.right+il>o.right?this.offsetLeft=o.right-r.right-il:r.left-il<o.left&&(this.offsetLeft=o.left-r.left+il),this.offsetLeft!==0&&this.update()}didMount(){this.updatePositionIfNecessary()}getTooltipGravityClass(){switch(this.gravity()){case"n":return"dcg-tooltip-gravity-n";case"s":return"dcg-tooltip-gravity-s";case"e":return"dcg-tooltip-gravity-e";case"w":return"dcg-tooltip-gravity-w"}}getArrowWithBorderStyle(){let r=this.gravity(),n=this.getBackgroundColor(),o="var(--dcg-custom-border-color, #bbb)",a="8px",i={width:a,height:a,border:`1px solid ${o}`,background:n};switch(r){case"s":return{...i,top:"100%",left:"50%","margin-top":"1px","border-right":"0","border-bottom":"0"};case"n":return{...i,bottom:"100%",left:"50%","margin-bottom":"1px","border-left":"0","border-top":"0"};case"e":return{...i,top:"50%",left:"100%","margin-left":"1px","border-right":"0","border-top":"0"};case"w":return{...i,top:"50%",right:"100%","margin-right":"1px","border-left":"0","border-bottom":"0"};default:return r}}getSolidArrowStyle(){let r=this.gravity(),n=this.getBackgroundColor(),o=`transparent transparent ${n} transparent`,a=`${n} transparent transparent transparent`,i=`transparent ${n} transparent transparent`,s=`transparent transparent transparent ${n}`,c=`-${ho}px`;switch(r){case"s":return{top:"100%",left:"50%",border:`${ho}px solid transparent`,"border-color":o,"margin-top":c,"margin-left":c};case"n":return{bottom:"100%",left:"50%",border:`${ho}px solid transparent`,"border-color":a,"margin-bottom":c,"margin-left":c};case"e":return{top:"50%",left:"100%",border:`${ho}px solid transparent`,"border-color":i,"margin-left":`-${ho}px`,"margin-top":c};case"w":return{top:"50%",right:"100%",border:`${ho}px solid transparent`,"border-color":s,"margin-right":c,"margin-top":c};default:return r}}getBackgroundColor(){var r,n;return((n=(r=this.props).theme)==null?void 0:n.call(r))==="light"?"var(--dcg-custom-background-color, #fff)":this.props.isStickyAndNotStuck()?"var(--dcg-custom-secondary-text-color, #666)":"var(--dcg-custom-text-color, #000)"}getMessageStyle(){let r=this.props.hitAreaRect(),n=this.gravity(),o=this.props.maxWidth();switch(n){case"s":return{top:"100%",width:`${o}px`,transform:"translate(-50%, 0)",left:`${.5*r.width}px`,"margin-top":`${ho}px`,"text-align":"center"};case"n":return{bottom:"100%",width:`${o}px`,transform:"translate(-50%, 0)",left:`${.5*r.width}px`,"margin-bottom":`${ho}px`,"text-align":"center"};case"e":return{transform:"translate(0, -50%)",left:"100%",width:`${o}px`,top:`${.5*r.height}px`,"margin-left":`${ho}px`,"text-align":"left"};case"w":return{transform:"translate(0, -50%)",right:"100%",width:`${o}px`,top:`${.5*r.height}px`,"margin-right":`${ho}px`,"text-align":"right"};default:return n}}};function cD(){return document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement}var qr=class extends K{constructor(){super(...arguments);this.uuid=`dcg-tooltip-${ca()}`;this.onFocus=()=>{this.isSticky()&&(this.showTooltip(),this.stickTooltip())}}template(){return u("div",{class:()=>{var r,n,o,a,i,s;return{"dcg-tooltip-hit-area-container":!0,"dcg-display-block":(n=(r=this.props).displayBlock)==null?void 0:n.call(r),"dcg-do-not-blur":!0,"dcg-sticky-tooltip":this.isSticky(),"dcg-tooltip-disabled":this.props.disabled&&this.props.disabled(),"dcg-cursor-default":!this.isSticky(),[((a=(o=this.props).additionalClass)==null?void 0:a.call(o))||""]:!!((s=(i=this.props).additionalClass)!=null&&s.call(i))}},didMount:r=>{this.isMounted=!0,this.hitAreaNode=r,this.setupEventListeners(this.hitAreaNode),this.hitAreaNode.addEventListener("focus",this.onFocus)},tabIndex:()=>{var r,n;return this.isSticky()&&!((n=(r=this.props).excludeFromTabOrder)!=null&&n.call(r))?"0":"-1"},"aria-label":()=>this.isSticky()?this.props.tooltip():void 0,role:()=>{var r,n;return this.isSticky()&&!((n=(r=this.props).excludeFromTabOrder)!=null&&n.call(r))?"note":void 0},manageFocus:this.props.manageFocus,onTap:r=>{var n,o,a,i,s;if(this.isSticky())if(r.stopPropagation(),this.isStuck)this.hideTooltipImmediately();else{if((o=(n=this.props).disabled)!=null&&o.call(n))return;this.showTooltip(),this.stickTooltip(),(a=this.hitAreaNode)==null||a.focus()}else if(this.shouldShowOnTapstart()){if((s=(i=this.props).disabled)!=null&&s.call(i))return;this.showTooltip(),this.setUpHideOnExternalMousedown()}else this.hideTooltipImmediately()},children:this.props.children})}isSticky(){var r,n,o,a;return!!((n=(r=this.props).sticky)!=null&&n.call(r))&&!((a=(o=this.props).disabled)!=null&&a.call(o))}shouldShowOnTapstart(){var r,n;return!!((n=(r=this.props).showOnTapstart)!=null&&n.call(r))}didUpdate(){this.updateTooltip()}updateTooltip(){if(!this.wrapperRef)return;if(!this.props.tooltip()){this.hideTooltip();return}let r=this.hitAreaNode.getBoundingClientRect(),n=this.wrapperRef.elt.getBoundingClientRect(),{originalTop:o,originalLeft:a}=this.wrapperRef,i=r.top-n.top,s=r.left-n.left;Math.abs(i-o)>3||Math.abs(s-a)>3?this.hideTooltip():this.wrapperRef.view.update()}handleShowEvent(r){var o,a;if((a=(o=this.props).disabled)!=null&&a.call(o))return;let n=this.props.delay?this.props.delay():sD;this.clearTimeouts(),this.showTooltipTimeout=setTimeout(r,n)}hideTooltipImmediately(){this.clearTimeouts(),this.hideTooltip()}handleHideEvent(){this.clearTimeouts(),this.hideTooltipTimeout=setTimeout(this.bindFn(this.hideTooltip),150)}setupEventListeners(r){ge(r).on("tipsyshow",n=>{n.target===r&&this.handleShowEvent(()=>{this.showTooltip()})}).on("tipsyhide",n=>{n.target!==r||this.isStuck||this.handleHideEvent()}).on("keydown",n=>{!pp(n)&&!ei(n)&&this.isStuck&&this.hideTooltipImmediately()})}willUnmount(){this.hitAreaNode.removeEventListener("focus",this.onFocus),this.clearTimeouts(),this.isMounted=!1,this.hideTooltip()}setUpHideOnExternalMousedown(){ge(document).on(`mousedown.dcg-tooltip-${this.uuid} touchstart.dcg-tooltip-${this.uuid} pointerdown.dcg-tooltip-${this.uuid}`,r=>{this.wrapperRef&&(this.hitAreaNode.contains(r.target)||this.wrapperRef.elt.contains(r.target)||this.hideTooltip())})}stickTooltip(){this.isMounted&&this.wrapperRef&&(this.isStuck||(this.setUpHideOnExternalMousedown(),this.isStuck=!0,this.updateTooltip()))}clearTimeouts(){clearTimeout(this.showTooltipTimeout),clearTimeout(this.hideTooltipTimeout)}showTooltip(){var L,T,w;if(!this.isMounted||this.wrapperRef||!this.props.tooltip())return;let r=this.hitAreaNode.getBoundingClientRect(),n=document.createElement("div");n.className="dcg-tooltip-mount-pt";let o=this.hitAreaNode.closest(".dcg-tap-container"),a=cD();(!!a&&a.contains(this.hitAreaNode)&&a.closest(".dcg-tap-container")?a:o).appendChild(n);let s=n.getBoundingClientRect(),c=r.left-s.left,l=r.top-s.top,p=200;if((T=(L=this.props).noWrap)!=null&&T.call(L)){let k=(w=n.closest(".dcg-tap-container"))==null?void 0:w.getBoundingClientRect();k&&(p=k.width-2*il)}let y={...this.props,isStickyAndNotStuck:()=>this.isSticky()&&!this.isStuck,maxWidth:()=>p,hitAreaRect:()=>({top:l||0,left:c||0,width:r.width||0,height:r.height||0}),uuid:()=>this.uuid};this.setupEventListeners(n),ge(n).on("dcg-tap",()=>{this.isSticky()&&this.stickTooltip()});let x=ja(wf,n,y);ge(document).on(`keydown.dcg-tooltip-${this.uuid}`,k=>{tt(k)==="Esc"&&this.hideTooltip()});let M=()=>this.updateTooltip();window.addEventListener("scroll",M,!0),this.wrapperRef={elt:n,view:x,originalLeft:c,originalTop:l,onScroll:M},this.assignAriaDescribedBy()}hideTooltip(){this.clearTimeouts(),this.wrapperRef&&(this.isStuck=!1,ge(document).off(`.dcg-tooltip-${this.uuid}`),window.removeEventListener("scroll",this.wrapperRef.onScroll,!0),this.restoreAriaDescribedBy(),Kc(this.wrapperRef.elt),this.wrapperRef.elt.parentNode&&this.wrapperRef.elt.parentNode.removeChild(this.wrapperRef.elt),this.wrapperRef=void 0)}assignAriaDescribedBy(){var n,o;if((o=(n=this.props).sticky)!=null&&o.call(n))return;let r=qs(this.hitAreaNode)[0]||this.hitAreaNode;this.originalDescribedBy=r.getAttribute("aria-describedby"),r.setAttribute("aria-describedby",this.uuid)}restoreAriaDescribedBy(){var n,o;if((o=(n=this.props).sticky)!=null&&o.call(n))return;let r=qs(this.hitAreaNode)[0]||this.hitAreaNode;this.originalDescribedBy?r.setAttribute("aria-describedby",this.originalDescribedBy):r.removeAttribute("aria-describedby")}};function zT(e,t){let{start:r,end:n}=mT,o=new Intl.DateTimeFormat(e,{year:"numeric",month:"short",day:"numeric",weekday:"short"}),a=new Intl.DateTimeFormat(e,{hour:"numeric",timeZoneName:"short"});return n?t("shared-message-maintenance-window",{localizedStartDate:o.format(r),localizedStartTime:r.toLocaleString(e,{hour:"numeric"}),localizedEndTime:a.format(n)}):t("shared-message-maintenance-starts-at",{localizedStartDate:o.format(r),localizedStartTime:a.format(r)})}var mp=function(e,t,r){if(!e||!t||!t.contains(e))return!1;let n,o=t.getBoundingClientRect().height,a=e.getBoundingClientRect().height,i=vf(e),s=vf(t);if(!i||!s)return!1;let c=t.scrollTop,l=i.top+c-s.top,p=l-r,y=a+l+r-o;if(p>=y)n=Math.min(Math.max(c,y),p);else{let x=.5*(p+y),M=p+r;n=Math.min(x,M)}return n!==c?(t.scrollTop=n,t.scrollTop!=c):!1};function lD(e){let t=e.parentElement;for(;t;){let r=getComputedStyle(t).overflowY;if(r==="auto"||r==="scroll")return t;t=t.parentElement}return null}var HT=(e,t,r)=>{if(t===void 0&&(t=lD(e)),!t)return!1;let n=(r==null?void 0:r.measureFrom)||"bottom",o=e.getBoundingClientRect();return(n==="bottom"?o.bottom:o.top+.5*o.height)<t.getBoundingClientRect().top};var KT='a[href], a[tabindex], input:not([disabled]), button:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex], summary, [contenteditable]:not([contenteditable="false"]), iframe';function sl(e){return e.matches(KT)&&e.getAttribute("tabindex")!=="-1"&&uD(e)}function uD(e){if(!al(e))return!1;let t=e;for(;t;){if(getComputedStyle(t).visibility==="hidden")return!1;t=t.parentElement}return!0}function Tf(e,t=al){return Array.from(e.querySelectorAll(KT)).filter(r=>!r.closest("[inert]")&&t(r))}function WT(e,t){if(!e)return!1;let r=Tf(e),n=r.findIndex(a=>a.matches(":focus")),o;if(n!==-1&&(o=(t===1?r.slice(n+1):r.slice(0,n).reverse()).filter(sl)[0]),!o)if(t===1)o=r.find(sl);else{let a=Mh(r,sl);o=a>-1?r[a]:void 0}return o?(o.focus(),!0):!1}function jT(e){return WT(e,1)}function QT(e){return WT(e,-1)}var gp=class{constructor({isOpen:t,closeMenu:r,anchorSelector:n,focusTrappingBodySelector:o,itemNavigationKey:a}){this.handleKeydown=t=>{switch(this.itemNavigationKey){case"arrow":return this.onKeydownWithArrowTrapping(t);case"tab":return this.onKeydownWithTabTrapping(t)}};this.handleTap=t=>{let r=document.querySelector(this.focusTrappingBodySelector);if(!r)return;let{target:n}=t,o=this.anchorSelector;o&&n.closest(o)||r.contains(n)||Array.from(document.querySelectorAll(".dcg-keypad,.dcg-show-keypad-container")).some(i=>i.contains(n))||this.closeMenu()};this.isOpen=t,this.closeMenu=r,this.anchorSelector=n,this.focusTrappingBodySelector=o,this.itemNavigationKey=a}getPopoverView(){var t;return(t=document.querySelector(this.focusTrappingBodySelector))!=null?t:void 0}getFocusableItems(){let t=this.getPopoverView();return t?Tf(t,sl):[]}focusAnchor(){var t;this.anchorSelector&&((t=document.querySelector(this.anchorSelector))==null||t.focus())}focusItemAtIdx(t){let r=this.getFocusableItems();return r.length&&r.length>t?(r[t].focus(),!0):!1}focusFirstItem(t){if(t){let r=this.getFocusableItems().find(n=>n.matches(t));if(r){r.focus();return}}this.focusItemAtIdx(0)}focusLastItem(){this.focusItemAtIdx(this.getFocusableItems().length-1)}getFocusedElement(){return this.getFocusableItems().find(t=>t.matches(":focus"))}isAnchorFocused(){var t;return this.anchorSelector?(t=document.querySelector(this.anchorSelector))==null?void 0:t.matches(":focus"):!1}isFirstItemFocused(){var r;let t=this.getFocusableItems();return t.length>0&&((r=t[0])==null?void 0:r.matches(":focus"))}isLastItemFocused(){var r;let t=this.getFocusableItems();return t.length>0&&((r=t[t.length-1])==null?void 0:r.matches(":focus"))}onKeydownWithArrowTrapping(t){if(this.isOpen())switch(tt(t)){case"Up":QT(this.getPopoverView())&&t.preventDefault();break;case"Down":jT(this.getPopoverView())&&t.preventDefault();break;case"End":t.preventDefault(),this.focusLastItem();break;case"Tab":t.preventDefault(),this.closeMenu(),this.focusAnchor();break;case"Esc":Jr(t),this.closeMenu(),this.focusAnchor();break}}onKeydownWithTabTrapping(t){if(!this.isOpen())return;if(tt(t)==="Esc"){Jr(t),this.focusAnchor(),this.closeMenu();return}if(ET(t)){if(this.isAnchorFocused()){t.shiftKey?this.focusLastItem():this.focusFirstItem(),Jr(t);return}if(this.isLastItemFocused()&&!t.shiftKey){this.anchorSelector?this.focusAnchor():this.focusFirstItem(),Jr(t);return}if(this.isFirstItemFocused()&&t.shiftKey){this.anchorSelector?this.focusAnchor():this.focusLastItem(),Jr(t);return}}}};var dD=12,Os=4,Sf=10,hp=5,pD=150,cl=[],YT,XT,fa=class extends K{constructor(){super(...arguments);this.lastOrientation=this.props.orientation();this.lastContainerMargin={...(XT=(YT=this.props).containerMargin)==null?void 0:XT.call(YT)};this.showDropdown=!1;this.guid=ca();this.anchorId=`dcg-popover-anchor--${this.guid}`;this.popoverId=`dcg-popover--${this.guid}`;this.boundingParentElement=void 0;this.dropdownStyle={};this.arrowStyle={};this.availableHeight=void 0;this.resizeObserver=new ResizeObserver(r=>{r.forEach(()=>{this.positionPopover()})});this.debouncedPositionDynamically=sw(this.bindFn(this.positionPopover),50);this.handleWindowPointerDown=r=>{this.eventShouldClosePopover(r.target)&&this.setDropdownOpen(!1)};this.handleDocumentKeydown=r=>{var n;cl[cl.length-1]===this&&((n=this.focusHelper)==null||n.handleKeydown(r))}}getArrowSize(){var r,n,o;return(o=(n=(r=this.props).arrowSize)==null?void 0:n.call(r))!=null?o:dD}init(){var r,n,o;this.focusHelper=new gp({anchorSelector:`#${this.anchorId}`,focusTrappingBodySelector:`#${this.popoverId}`,isOpen:()=>this.isDropdownOpen(),closeMenu:()=>this.setDropdownOpen(!1),itemNavigationKey:(o=(n=(r=this.props).focusTrappingKey)==null?void 0:n.call(r))!=null?o:"tab"})}isDropdownOpen(){return this.props.openState?this.props.openState().isOpen:this.showDropdown}setDropdownOpen(r){var n,o;(o=(n=this.props).disabled)!=null&&o.call(n)||(this.lastPosition=void 0,this.props.openState?this.props.openState().setDropdownOpen(r):(this.showDropdown=r,this.update()))}eventShouldClosePopover(r){var o,a,i,s;if(!this.isDropdownOpen()||!this.rootNode||r===this.rootNode||ge.contains(this.rootNode,r)||(o=this.dropdownNode)!=null&&o.contains(r))return!1;let n=(i=(a=this.props).additionalDoNotCloseSelector)==null?void 0:i.call(a);return!(n&&r.closest(n)||r.closest(".dcg-keypad-interaction-container")&&((s=document.activeElement)!=null&&s.closest(".dcg-mq-editable-field")))}didMountWrapper(r){this.rootNode=r}didMountDropdown(r){var a,i,s,c,l,p,y,x,M;this.dropdownNode=r,cl.push(this);let n=(i=(a=this.props).mountToPortal)==null?void 0:i.call(a);n&&(n===!0?this.portalTarget=(c=(s=this.rootNode)==null?void 0:s.closest(".dcg-tap-container"))!=null?c:void 0:this.portalTarget=n,this.portalTarget&&this.portalTarget.appendChild(r)),window.addEventListener("resize",this.debouncedPositionDynamically),window.addEventListener("pointerdown",this.handleWindowPointerDown),this.resizeObserver.observe(r),this.rootNode&&this.resizeObserver.observe(this.rootNode);let o=((p=(l=this.props).boundingParentSelector)==null?void 0:p.call(l))||".dcg-tap-container";if(this.boundingParentElement=((y=this.rootNode)==null?void 0:y.closest(o))||void 0,this.boundingParentElement&&this.resizeObserver.observe(this.boundingParentElement),this.positionPopover(),this.focusHelper){document.addEventListener("keydown",this.handleDocumentKeydown);let L=this.getfocusDestinationOnOpen();L.type==="popover"&&this.focusHelper.focusFirstItem(L.initialLocationSelector)}(M=(x=this.props).mountToPortal)!=null&&M.call(x)&&(this.computeInitialPosition(),requestAnimationFrame(this.bindFn(this.checkForMovement)))}getfocusDestinationOnOpen(){var r,n;return((n=(r=this.props).focusDestinationOnOpen)==null?void 0:n.call(r))||{type:"popover"}}getMaxHeight(){if(!(this.availableHeight===void 0||this.availableHeight<=0))return this.props.maxHeight?this.props.maxHeight(this.availableHeight):Math.max(this.availableHeight,pD)}didUpdate(){var o,a;let r=this.props.orientation(),n={...(a=(o=this.props).containerMargin)==null?void 0:a.call(o)};(r!==this.lastOrientation||!Qe(n,this.lastContainerMargin))&&(this.lastOrientation=r,this.lastContainerMargin=n,this.positionPopover()),this.cachedMaxHeight!==this.getMaxHeight()&&this.interiorNode&&(this.cachedMaxHeight=this.getMaxHeight(),mp(document.activeElement,this.interiorNode,50))}willUnmount(){var r,n,o;(n=(r=this.props).mountToPortal)!=null&&n.call(r)&&((o=this.dropdownNode)==null||o.remove()),this.props.onUnmountWhileOpen&&this.isDropdownOpen()&&this.props.onUnmountWhileOpen()}computeInitialPosition(){if(!this.rootNode)return;let r=this.rootNode.getBoundingClientRect();this.lastPosition={x:r.x,y:r.y}}checkForMovement(){var o,a;if(!this._isMounted||!this.rootNode||!this.isDropdownOpen()||!this.lastPosition)return;if(this.isAnchorScrolledOutOfViewUp())return this.setDropdownOpen(!1);let r=this.rootNode.getBoundingClientRect();if((a=(o=this.props).keepVisibleOnAnchorMovement)!=null&&a.call(o)){(this.lastPosition.x!==r.x||this.lastPosition.y!==r.y)&&(this.lastPosition={x:r.x,y:r.y},this.positionPopover()),requestAnimationFrame(this.bindFn(this.checkForMovement));return}let n=2;if(Math.abs(r.x-this.lastPosition.x)>n||Math.abs(r.y-this.lastPosition.y)>n){this.setDropdownOpen(!1);return}requestAnimationFrame(this.bindFn(this.checkForMovement))}didUnmountDropdown(){var r,n;(n=(r=this.props).mountToPortal)!=null&&n.call(r)&&this.dropdownNode&&this.dropdownNode.remove(),this.resizeObserver.disconnect(),this.focusHelper&&document.removeEventListener("keydown",this.handleDocumentKeydown),cl=cl.filter(o=>o!==this),this.showDropdown=!1,window.removeEventListener("pointerdown",this.handleWindowPointerDown),window.removeEventListener("resize",this.debouncedPositionDynamically),this.portalTarget=void 0,this.dropdownNode=void 0,this.interiorNode=void 0}isAnchorScrolledOutOfViewUp(){if(!this.rootNode)return!1;let r=this.props.orientation();return HT(this.rootNode,void 0,{measureFrom:r==="bottom-left"||r=="bottom-right"?"bottom":"center"})}getAlignmentElement(r){var o,a;let n=(a=(o=this.props).alignmentParentSelector)==null?void 0:a.call(o);return n&&r.closest(n)||r}convertToPortalPosition(){if(!this.rootNode||!this.dropdownNode)return;let r=this.getAlignmentElement(this.rootNode).getBoundingClientRect(),{width:n,height:o}=this.dropdownNode.getBoundingClientRect(),a;this.dropdownStyle.bottom!==void 0?a=r.bottom-parseFloat(this.dropdownStyle.bottom)-o:a=r.top+parseFloat(this.dropdownStyle.top||"0");let i;this.dropdownStyle.right!==void 0&&this.dropdownStyle.left===void 0?i=r.right-parseFloat(this.dropdownStyle.right)-n:i=r.left+parseFloat(this.dropdownStyle.left||"0");let s=this.dropdownNode.offsetParent;if(s){let c=s.getBoundingClientRect();a-=c.top-s.scrollTop,i-=c.left-s.scrollLeft}this.dropdownStyle={position:"absolute",top:a+"px",left:i+"px",right:"auto",bottom:"auto"}}positionPopover(){var r,n;this.lastOrientation=this.props.orientation(),!(!this._isMounted||!this.rootNode||!this.dropdownNode)&&(this.availableHeight=void 0,this.computePosition(),(n=(r=this.props).mountToPortal)!=null&&n.call(r)&&this.convertToPortalPosition(),this.update())}computePosition(){var T,w,k,V,j,te,Te,P,D,B,I,oe,Ie,_t,yr,cr,_o,Lo,lo,$a;if(!this.rootNode||!this.dropdownNode||!this.isDropdownOpen())return;this.dropdownStyle={},this.arrowStyle={};let r=this.getArrowSize()+(((w=(T=this.props).offsetFromAnchor)==null?void 0:w.call(T))||0),n=this.props.anchorTargetSubselector&&this.rootNode.querySelector(this.props.anchorTargetSubselector())||this.rootNode,o=this.dropdownNode.getBoundingClientRect(),a=Math.max(o.height,(V=(k=this.interiorNode)==null?void 0:k.scrollHeight)!=null?V:0),i=n.getBoundingClientRect(),s=this.getAlignmentElement(this.rootNode).getBoundingClientRect(),c=(j=this.boundingParentElement)==null?void 0:j.getBoundingClientRect(),l=(Te=(te=this.props).containerMargin)==null?void 0:Te.call(te),p={left:((P=c==null?void 0:c.left)!=null?P:0)+((D=l==null?void 0:l.left)!=null?D:hp),right:((B=c==null?void 0:c.right)!=null?B:window.innerWidth)-((I=l==null?void 0:l.right)!=null?I:hp),bottom:((oe=c==null?void 0:c.bottom)!=null?oe:window.innerHeight)-((Ie=l==null?void 0:l.bottom)!=null?Ie:hp),top:((_t=c==null?void 0:c.top)!=null?_t:0)+((yr=l==null?void 0:l.top)!=null?yr:hp)},y=this.props.orientation();y==="left"||y==="right"||(_o=(cr=this.props).allowShiftFromAnchor)!=null&&_o.call(cr)?this.availableHeight=p.bottom-p.top:y==="top-left"?this.availableHeight=s.top-r-p.top:this.availableHeight=p.bottom-s.bottom-r;let x=i.left+i.width/2,M=i.top+i.height/2,L=(Et,Ct,bt)=>Math.max(bt,Math.min(Ct-2*this.getArrowSize()-bt,Et));switch(y){case"left":this.dropdownStyle.right=`${s.width+r}px`;break;case"right":this.dropdownStyle.left=`${s.width+r}px`;break;case"bottom":case"bottom-left":case"bottom-right":this.dropdownStyle.top=`${s.height+r}px`;break;case"top-left":this.dropdownStyle.bottom=`${s.height+r}px`;break}if(y==="left"||y==="right"){let Et=M-s.top-this.getArrowSize(),Ct=L(Et,a,Sf),bt=Et-Ct,lr=p.top-s.top,Wr=p.bottom-s.top-a;bt=Math.max(lr,Math.min(Wr,bt));let qe=Et-bt;(qe<Os||qe>a-2*this.getArrowSize()-Os)&&(this.arrowStyle.visibility="hidden"),this.dropdownStyle.top=`${bt}px`,this.arrowStyle.top=`${qe}px`}else if(y==="bottom-right"||y==="bottom"){let Et=x-s.left-this.getArrowSize(),Ct;if(y==="bottom")Ct=x-s.left-o.width/2;else{let qe=L(Et,o.width,Sf);Ct=Et-qe}let bt=p.left-s.left,lr=p.right-s.left-o.width;Ct=lr<bt?(bt+lr)/2:Math.max(bt,Math.min(lr,Ct));let Wr=Et-Ct;(Wr<Os||Wr>o.width-2*this.getArrowSize()-Os)&&(this.arrowStyle.visibility="hidden"),this.dropdownStyle.left=`${Ct}px`,this.arrowStyle.left=`${Wr}px`}else{let Et=s.right-x-this.getArrowSize(),Ct=L(Et,o.width,Sf),bt=Et-Ct,lr=s.right-p.right,Wr=s.right-p.left-o.width;bt=Wr<lr?(lr+Wr)/2:Math.max(lr,Math.min(Wr,bt));let qe=Et-bt;(qe<Os||qe>o.width-2*this.getArrowSize()-Os)&&(this.arrowStyle.visibility="hidden"),this.dropdownStyle.right=`${bt}px`,this.arrowStyle.right=`${qe}px`}if((y==="bottom-right"||y==="bottom-left"||y==="bottom")&&((lo=(Lo=this.props).allowShiftFromAnchor)!=null&&lo.call(Lo))){let Et=Math.min(a,($a=this.getMaxHeight())!=null?$a:1/0),Ct=parseFloat(this.dropdownStyle.top||"0"),bt=p.bottom-s.top-Et,lr=Math.min(Ct,bt);this.dropdownStyle.top=`${lr}px`,Ct-lr>i.height/2&&(this.arrowStyle.visibility="hidden")}}getOrientationClasses(){let r=this.props.orientation();return{"dcg-left":r==="left","dcg-right":r==="right","dcg-bottom":r==="bottom-left"||r==="bottom-right"||r==="bottom","dcg-top":r==="top-left"}}getContainerClasses(){var r,n,o,a,i;return{"dcg-popover-with-anchor":!0,"dcg-disabled":(n=(r=this.props).disabled)==null?void 0:n.call(r),...(i=(a=(o=this.props).containerClassMap)==null?void 0:a.call(o))!=null?i:{}}}getAriaHaspopup(){var r,n,o,a;if(!((n=(r=this.props).disabled)!=null&&n.call(r)))return((a=(o=this.props).focusTrappingKey)==null?void 0:a.call(o))==="arrow"?"menu":"dialog"}getTabIndex(){var r,n;return this.props.tabIndex?this.props.tabIndex():(n=(r=this.props).disabled)!=null&&n.call(r)?-1:0}getTooltipMessage(){var r,n,o,a;return(a=(o=(n=(r=this.props).tooltip)==null?void 0:n.call(r))==null?void 0:o.message)!=null?a:""}template(){var r,n;return N("div",{class:this.bindFn(this.getContainerClasses),didMount:this.bindFn(this.didMountWrapper),children:[u(qr,{tooltip:this.bindFn(this.getTooltipMessage),gravity:()=>{var o,a,i;return((i=(a=(o=this.props).tooltip)==null?void 0:a.call(o))==null?void 0:i.gravity)||"s"},disabled:()=>!this.getTooltipMessage()||this.isDropdownOpen(),displayBlock:this.const(!0),children:u("div",{role:"button",id:this.const(this.anchorId),tabIndex:()=>this.getTabIndex(),"aria-label":()=>{var o,a;return(a=(o=this.props).anchorAriaLabel)==null?void 0:a.call(o)},"aria-disabled":()=>{var o,a;return((a=(o=this.props).disabled)==null?void 0:a.call(o))||void 0},"aria-expanded":this.bindFn(this.isDropdownOpen),"aria-haspopup":()=>this.getAriaHaspopup(),"aria-controls":()=>this.isDropdownOpen()?this.popoverId:void 0,class:()=>{var o,a,i,s;return{...(a=(o=this.props).anchorClassMap)==null?void 0:a.call(o),"dcg-popover-with-anchor__anchor":!0,"dcg-disabled":((s=(i=this.props).disabled)==null?void 0:s.call(i))||!1,"dcg-popover-with-anchor__open":this.isDropdownOpen()}},onTap:o=>{var a,i,s;(i=(a=this.props).disabled)!=null&&i.call(a)||hT(o,"dragdrop")||(ma(o,"dropdown-popover-tap"),this.props.onTapAnchor?this.props.onTapAnchor(o):this.setDropdownOpen(!this.isDropdownOpen()),this.getfocusDestinationOnOpen().type==="anchor"&&((s=this.focusHelper)==null||s.focusAnchor()))},onKeyDown:o=>{var i,s,c,l;let a=tt(o);!this.isDropdownOpen()&&((s=(i=this.props).openOnUpOrDown)!=null&&s.call(i))&&(a==="Up"||a==="Down")&&(Jr(o),this.setDropdownOpen(!0)),ei(o)&&ma(o),(l=(c=this.props).onKeyDownAnchor)==null||l.call(c,o)},onLongHold:o=>{var a,i;return(i=(a=this.props).onLongHoldAnchor)==null?void 0:i.call(a,o)},onTapStart:o=>{ma(o,"dropdown-popover-tap")},manageFocus:this.props.manageFocus,...(n=(r=this.props).customAnchorAttrs)==null?void 0:n.call(r),children:this.props.anchor()})}),u(pt,{when:()=>this.isDropdownOpen(),children:N("div",{role:()=>{var o,a;return((a=(o=this.props).focusTrappingKey)==null?void 0:a.call(o))==="arrow"?"none":"dialog"},id:this.const(this.popoverId),"aria-labelledby":()=>{var o,a;return((a=(o=this.props).focusTrappingKey)==null?void 0:a.call(o))==="arrow"?void 0:this.anchorId},class:()=>{var o,a;return{"dcg-dropdown-popover":!0,...this.getOrientationClasses(),"dcg-popover-with-anchor__popover":!0,"dcg-portal-popover":!!((a=(o=this.props).mountToPortal)!=null&&a.call(o))}},style:()=>{var o,a;return{width:(a=(o=this.props).width)!=null&&a.call(o)?`${this.props.width()}px`:void 0,...this.dropdownStyle,"--dcg-arrow-size":`${this.getArrowSize()}px`}},onTap:o=>{ma(o,"dropdown-popover-tap")},onTapStart:o=>{ma(o,"dropdown-popover-tap")},didMount:this.bindFn(this.didMountDropdown),didUnmount:this.bindFn(this.didUnmountDropdown),children:[u("div",{class:()=>{var o,a;return{"dcg-dropdown-popover__interior":!0,"dcg-dropdown-popover__interior-no-arrow":this.getArrowSize()===0,...(a=(o=this.props).popoverClassMap)==null?void 0:a.call(o)}},style:()=>{var o;return{"max-height":isFinite((o=this.getMaxHeight())!=null?o:1/0)?`${this.getMaxHeight()}px`:void 0}},didMount:o=>this.interiorNode=o,children:this.props.popoverBody()}),u("div",{class:"dcg-arrow",style:()=>this.arrowStyle||{}})]})})]})}};var fp=Pv(cS(),1);var kf=/\{\$([a-zA-Z0-9\-]+([a-zA-Z0-9\-]+_)*[a-zA-Z0-9\-]+)\}/;function lS(e,t){let r=0,n=0,o={},a={},i=s(e);if(!/^<0>/.test(i)||!/<\/0>$/.test(i))throw new Error("Expected template string to start and end with <0> and </0>, but found "+JSON.stringify(i));return i.slice(3,-4).trim();function s(l){if(t.isConst(l))return t.getConstValue(l);if(t.isNamedBinding(l)){let p=c(o,t.getBindingName(l)),y=`{$${p}}`;if(!kf.test(y))throw new Error(`Invalid <Localize> variable: ${y}.`);return t.addBinding&&t.addBinding(p,l),o[p]=!0,y}else if(l!==e&&t.isView(l)){let p=c(a,t.getViewName(l));if(!/[a-zA-Z0-9\-_]/.test(p))throw new Error(`Invalid <Localize> subview identifier: ${p}.`);return t.addView&&t.addView(p,l),a[p]=!0,`<${p}/>`}else if(t.isBinding(l)){let p=c(o,`v${r++}`),y=`{$${p}}`;return t.addBinding&&t.addBinding(p,l),o[p]=!0,y}else{let p=`${n++}`;t.addElement&&t.addElement(p,l);let y=[];return t.forEachChild(l,x=>{y.push(s(x))}),a[p]=!0,y.length>0?`<${p}>${y.join("")}</${p}>`:`<${p}/>`}}function c(l,p){let y=0,x=p;for(;l[x];)x=`${p}-${++y}`;return x}}function xD(e){return e.__DCGViewLocalizeBindingName}function uS(e){return Un(e)&&"__DCGViewLocalizeViewName"in e}var Kn=class extends K{init(){this.viewMap={},this.elementMap={},this.bindingMap={},this.i18n=this.props.i18n();let t=u("div",{style:"display: contents;",children:this.props.children});if(Un(t)&&t.type==="element")this.templateString=this.serializeToTemplateString(t);else throw new Error("programming error: expected root localize to be DCGElementSpec")}template(){return u(Vt,{children:t=>this.renderDeserializedTemplateNode(this.parseAndValidate(t))},()=>Ef(this.translatedString()))}translatedString(){let t={};for(let r in this.bindingMap)t[r]=Sn(`{$${r}}`);return this.i18n.s(this.props.key(),t)}static variable(t,r){let n=()=>r();return n.__DCGViewLocalizeBindingName=t,n}static subview(t,r){let n=r();if(Un(n)||(n=u("span",{})),Un(n))return{...n,__DCGViewLocalizeViewName:t};throw new Error("expected a DCGElementSpec")}parseAndValidate(t){let r=(0,fp.parse)(t),n={},o={};a(r);for(let i in this.elementMap)if(!o[i])return(0,fp.parse)(Ef(this.templateString));for(let i in this.bindingMap)if(!n[i])return(0,fp.parse)(Ef(this.templateString));return r;function a(i){if(Array.isArray(i)){for(let s of i)a(s);return}i.name==="token"?n[i.attrs.id]=!0:i.type!=="text"&&(o[i.name]=!0,a(i.children))}}renderDeserializedTemplateNode(t){if(Array.isArray(t))return t.map(r=>this.renderDeserializedTemplateNode(r));if(t.type==="text")return ue(t.content||"");if(t.name==="token"){let r=this.bindingMap[t.attrs.id];return r||(()=>"")}else if(this.elementMap[t.name]){let r=this.elementMap[t.name],n=t.children.map(o=>this.renderDeserializedTemplateNode(o));return{...r,props:{...r.props,children:n}}}else return this.viewMap[t.name]?this.viewMap[t.name]:{isDCGElementSpec:!0,type:"element",tagName:"span",props:{children:[]}}}serializeToTemplateString(t){return lS(t,{isView:uS,isConst:vD,isBinding:r=>typeof r=="function",isNamedBinding:xD,getConstValue:r=>r(),getBindingName:r=>r.__DCGViewLocalizeBindingName,getViewName:r=>r.__DCGViewLocalizeViewName,addBinding:(r,n)=>{this.bindingMap[r]=n},addElement:(r,n)=>{this.elementMap[r]=n},addView:(r,n)=>{if(this.viewMap[r])throw new Error(`Unexpected duplicate view ${r}.`);this.viewMap[r]=n},forEachChild:(r,n)=>{for(let o of r.props.children){if(typeof o=="string"&&(o=this.const(o)),Un(o)){if(o.type==="view"&&!uS(o))throw new Error("Bare DCGViews are not allowed inside <Localize>. Use Localize.subview().");if(o.type==="fragment")throw new Error("<Localize> does not support fragments yet")}if(typeof o=="boolean")throw new Error("<Localize> does not expect boolean as children. Must be wrapped in getter");if(typeof o=="number")throw new Error("<Localize> does not expect number as children. Must be wrapped in getter");if(o===null)throw new Error("<Localize> does not expect null as children. Must be wrapped in getter");if(o===void 0)throw new Error("<Localize> does not expect undefined as children. Must be wrapped in getter");n(o)}}})}};function vD(e){return typeof e=="function"&&e.isDCGViewConst}function Ef(e){return`<0>${e}</0>`.replace(new RegExp(kf.source,"g"),(r,n)=>`<token id="${n}"/>`)}function wD(e){switch(e){case"graphing":return re("frontpage-link-shared-graphing-calculator-short");case"assessment-graphing":return re("frontpage-narration-shared-assessment-calculator",{calculatorType:re("frontpage-link-shared-graphing-calculator-short")});case"scientific":return re("frontpage-link-shared-scientific-calculator-short");case"assessment-scientific":return re("frontpage-narration-shared-assessment-calculator",{calculatorType:re("frontpage-link-shared-scientific-calculator-short")});case"fourfunction":return re("frontpage-link-shared-four-function-calculator-short");case"assessment-fourfunction":return re("frontpage-narration-shared-assessment-calculator",{calculatorType:re("frontpage-link-shared-four-function-calculator-short")});case"matrix":return re("frontpage-link-shared-matrix-calculator-short");case"graphing-3d":return re("frontpage-link-shared-3d-calculator-short");case"geometry-calculator":return re("frontpage-link-shared-geometry-short");case"practice":return re("frontpage-link-shared-test-practice");case"notebook":return re("frontpage-link-shared-notebook")}}var yp=class extends K{template(){return u("i",{class:()=>{var t,r,n,o,a,i;return{"dcg-shared-product-icon":!0,[pT[((r=(t=this.props).iconOverride)==null?void 0:r.call(t))||this.props.name()]]:!0,"dcg-disabled":(o=(n=this.props).disabled)==null?void 0:o.call(n),"dcg-shared-product-icon--outlined":(i=(a=this.props).withOutline)==null?void 0:i.call(a)}},"aria-hidden":()=>{var t,r;return(r=(t=this.props).ariaHidden)==null?void 0:r.call(t)},role:()=>{var t,r;return((r=(t=this.props).role)==null?void 0:r.call(t))||"img"},"aria-label":this.bindFn(this.getAriaLabel)})}getAriaLabel(){return this.props.ariaLabel?this.props.ariaLabel():wD(this.props.name())}};var bp=class extends K{template(){return u("span",{onMount:this.bindFn(this.addSVGLogo)})}addSVGLogo(t){t.innerHTML=`<svg version="1.1" class="dcg-desmos-svg-logo" id="svg-desmos" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 909.3 188.4" xml:space="preserve">
    <title>${re("frontpage-narration-shared-desmos-logo")}</title>
    <g>
      <path d="M129.6,0c-6.8,0-12.4,5.5-12.4,12.4v48c-27.7-25.4-70.6-24-96.7,3.1c-27.4,28.4-27.4,73.4,0,101.8
        c26.1,27.1,69.1,28.4,96.8,3v8.8c2,6.5,9,10.2,15.5,8.2c3.9-1.2,7-4.3,8.2-8.2V12.4C141.1,5.9,136.1,0.5,129.6,0z M103.9,148.7
        c-17.3,18.2-46.1,18.9-64.3,1.6c-0.6-0.5-1.1-1.1-1.6-1.6c-18.4-19.2-18.4-49.5,0-68.7c17.3-18.2,46.1-18.9,64.3-1.6
        c0.6,0.5,1.1,1.1,1.6,1.6C122.3,99.3,122.3,129.6,103.9,148.7z"/>
      <path d="M298.3,124c2.2-2.3,3.4-5.3,3.5-8.4c-0.1-19-7.6-37.2-20.9-50.7c-26.6-27.6-70.6-28.4-98.2-1.8c-0.6,0.6-1.2,1.2-1.8,1.8
        c-27.4,28.4-27.4,73.4,0,101.8c21.8,22.6,56.2,27.7,83.7,12.4c10-5.6,18.5-13.5,24.8-23.1c3.4-5.5,1.9-12.7-3.3-16.5
        c-5.5-3.3-12.6-1.7-16.4,3.5c-4.2,6.4-9.9,11.6-16.6,15.4c-6.8,3.8-14.4,5.8-22.2,5.8c-12.5,0-24.4-5.1-33.1-14.1
        c-6-6.3-10.3-14-12.4-22.4h104C292.7,127.6,296,126.3,298.3,124z M231.3,67.2c12.4,0.1,24.3,5.2,33,14.1
        c6.1,6.3,10.4,14.1,12.4,22.6h-90.7c2.1-8.5,6.3-16.3,12.4-22.6C207,72.4,218.8,67.3,231.3,67.2z"/>
      <path d="M763.5,63c-26.7-28.1-71.1-29.2-99.2-2.5c-0.8,0.8-1.7,1.6-2.5,2.5c-13.7,13.9-21.3,32.7-20.9,52.2
        c-0.2,19.3,7.2,37.8,20.7,51.6c27.7,28.2,73.1,28.7,101.3,0.9c0.3-0.3,0.6-0.6,0.9-0.9c13.4-13.8,20.9-32.4,20.7-51.7
        c0.2-19.4-7.3-38.2-21.1-51.9 M712.8,66.7c12.4,0,24.2,5.2,32.5,14.4c8.9,9.2,13.8,21.5,13.6,34.3c0.2,12.7-4.6,25-13.5,34.1
        c-8.5,9.2-20.5,14.2-33,13.9c-12.3,0.3-24.2-4.7-32.5-13.8c-8.8-9.1-13.6-21.4-13.3-34.1c-0.3-12.9,4.7-25.4,13.8-34.6
        c8.2-9.3,20-14.6,32.4-14.4"/>
      <path d="M623.8,92.6v81.9c0.3,6.8-4.9,12.7-11.8,13c-6.8,0.3-12.7-4.9-13-11.8V93.1c0-7.5-3-14.6-8.3-19.8
        c-4.3-4.7-10.2-7.6-16.5-8.1h-1.9c-7-0.1-13.6,2.9-18.2,8.2c-4.8,4.9-7.5,11.5-7.7,18.3v2l0,0v81.1c0,6.8-5.5,12.4-12.4,12.4
        c-6.5,0-11.9-4.9-12.4-11.4V91.5c-0.6-4.3-1.8-8.4-3.5-12.4c-1.2-2.3-2.6-4.5-4.3-6.4c-4.7-5.2-11.3-8.3-18.3-8.3
        c-7,0-13.6,3-18.1,8.3c-5.1,5.2-8,12.3-7.9,19.6V176c-0.8,6.3-6.1,11-12.4,10.9c-6.8,0-12.4-5.5-12.4-12.4V52.9
        c-0.7-6.8,4.2-12.9,11-13.6c5.9-0.6,11.4,3,13.1,8.7l2.9-1.9c7.4-3.9,15.6-6,23.9-5.9c12.3-0.1,24.1,4.3,33.3,12.4
        c1.1,0.9,2.1,2,3,3.1c0.9,0.7,1.7,1.5,2.5,2.4l2.2-2.4c0.9-1.1,1.9-2.2,3-3.1c9.2-8.1,21-12.5,33.2-12.4h4.3
        c10.8,0.8,21,5.1,29,12.4c0.9,1,2,1.9,3,2.9C618.9,65.3,624,78.7,623.8,92.6"/>
      <path d="M427.2,145.4c0.1,23.4-18.6,42.5-42,43h-50.8c-6.8,0-12.4-5.5-12.4-12.4s5.5-12.4,12.4-12.4H384c10-0.2,17.9-8.4,17.8-18.3
        c0.1-9.9-7.9-18-17.8-18.1c0,0-0.1,0-0.1,0h-24.8c-23.8-1.3-42-21.6-40.8-45.4c1.2-22,18.8-39.6,40.8-40.8h50.2
        c6.8,0,12.4,5.5,12.4,12.4s-5.5,12.4-12.4,12.4h-49.1c-10,0.8-17.5,9.6-16.7,19.7c0.7,8.9,7.8,15.9,16.7,16.7H385
        c5.9,0,11.8,1.2,17.2,3.7C417.7,112.8,427.2,128.4,427.2,145.4"/>
      <path d="M908.9,145.2c0,23.4-18.3,42.7-41.6,43.3h-50.8c-6.8,0-12.4-5.5-12.4-12.4s5.5-12.4,12.4-12.4h50.2
        c10-0.2,17.9-8.4,17.8-18.3c0.1-9.9-7.9-18-17.8-18.1c0,0-0.1,0-0.1,0h-24.8c-23.8-1.3-42-21.6-40.8-45.4
        c1.2-22,18.8-39.6,40.8-40.8h49.6c6.8,0,12.4,5.5,12.4,12.4s-5.5,12.4-12.4,12.4h-49.6c-10.1,0-18.2,8.2-18.2,18.2c0,0,0,0,0,0
        c0,9.9,8,18,17.8,18.1h24.8c5.9,0,11.8,1.3,17.2,3.7C898.9,112.8,908.9,128.2,908.9,145.2"/>
    </g>
    </svg>
    `}};var Fs=class extends K{constructor(){super(...arguments);this.i18n=this.props.i18n()}template(){return u("div",{class:()=>({"dcg-language-picker":!0,"dcg-two-columns":this.getLanguages().length>7}),children:u("ul",{class:"dcg-unstyled-list dcg-languages-list",role:"menu",children:u(Ye.Simple,{each:()=>this.getLanguages(),children:r=>u("li",{class:()=>({"dcg-listitem":!0,"dcg-language-option":!0,"dcg-selected":this.isLanguageSelected(r)}),lang:this.const(this.getLangCode(r)),role:"menuitem",tabIndex:"0","aria-current":()=>this.isLanguageSelected(r),onTap:()=>this.updateLang(r),children:()=>this.i18n.raw(this.getLanguageDisplayName(r))})})})})}getCurrentLang(){return this.props.currentLang()}getLanguages(){return Object.keys(this.props.getAllLangs())}getLanguageDisplayName(r){return this.props.getAllLangs()[r].display_name}updateLang(r){let n=this.props.getAllLangs()[r].code;return this.props.onLangChosen(n)}getLangCode(r){return this.props.getAllLangs()[r].code}isLanguageSelected(r){return this.getLangCode(r)===this.getCurrentLang()}};var TD=0,dS=(e="")=>`${e}${++TD}`;var Cf=class{constructor(){this.handlers=[],ge(document).on("keydown.delegator",t=>this.handleEvent(t))}push(t){let r=dS("delegator_");return this.handlers.push({token:r,handler:t}),()=>this.handlers=this.handlers.filter(n=>n.token!=r)}handleEvent(t){if(!t.isDefaultPrevented()&&this.handlers.length){let r=!1,n=()=>r=!0;for(let{handler:o}of this.handlers.slice().reverse())if(o(t,n),r)return}}},pS=new Cf;var vr=class extends K{constructor(){super(...arguments);this.i18n=this.props.i18n();this.isMounted=!1;this.isTitleStuck=!1}template(){return N("div",{class:()=>({"dcg-shared-modal":!0,"dcg-shared-has-close-button":this.showX(),"dcg-shared-modal-fullscreen":this.props.size()==="fullscreen","dcg-shared-modal-wide":this.props.size()==="wide","dcg-shared-modal-medium":this.props.size()==="medium","dcg-shared-modal-narrow":this.props.size()==="narrow","dcg-shared-modal-tiny":this.props.size()==="tiny","dcg-shared-modal-extra-tiny":this.props.size()==="extra-tiny",[this.props.class?this.props.class():""]:!!this.props.class}),didMount:this.bindFn(this.didMountRoot),children:[u("div",{class:"dcg-shared-modal-background",onTap:this.props.onClose,didMount:this.bindFn(this.preventGhostClicks)}),N("dialog",{open:!0,class:"dcg-unstyled-dialog dcg-shared-modal-dialog","aria-modal":"true","aria-label":()=>{var r,n,o,a,i,s;return(s=(i=(n=(r=this.props).ariaLabel)==null?void 0:n.call(r))!=null?i:(a=(o=this.props).title)==null?void 0:a.call(o))!=null?s:""},children:[u(pt,{when:()=>this.showX(),children:u(qr,{tooltip:()=>this.i18n.s("shared-button-close-dialog"),children:u("button",{class:"dcg-unstyled-button dcg-shared-close-cross action-close-modal","aria-label":()=>this.i18n.s("shared-button-close-dialog"),onTap:this.props.onClose,didMount:this.bindFn(this.preventGhostClicks),children:u("i",{class:"dcg-icon-remove","aria-hidden":"true"})})})}),N("div",{class:"dcg-shared-modal-box",didMount:this.bindFn(this.didMountScrollable),willUnmount:this.bindFn(this.willUnmountScrollable),children:[Yr(()=>{var r,n;return((n=(r=this.props).title)==null?void 0:n.call(r))||void 0},r=>N("h1",{class:()=>{var n,o;return{"dcg-shared-modal-title":!0,"dcg-shared-modal-title--sticky":!!((o=(n=this.props).withStickyTitle)!=null&&o.call(n)),"dcg-shared-modal-title--stuck":this.isTitleStuck}},children:[Yr(()=>{var n,o;return(o=(n=this.props).withBackButton)==null?void 0:o.call(n)},n=>u("button",{class:"dcg-shared-back-button","aria-label":()=>this.i18n.s("shared-button-back"),tabIndex:0,onTap:n(),children:u("i",{class:"dcg-icon-chevron-left dcg-shared-back-button__icon","aria-hidden":"true"})})),Yr(()=>{var n,o;return(o=(n=this.props).titleIcon)==null?void 0:o.call(n)},n=>u("i",{class:()=>({"dcg-shared-modal__title-icon":!0,[n()]:!0}),"aria-hidden":"true"})),()=>r()]})),u("div",{class:"dcg-shared-modal-body",children:this.props.children})]})]})]})}preventGhostClicks(r){r.addEventListener("touchend",n=>n.preventDefault())}willUnmountScrollable(r){this.scrollCallback&&(r.removeEventListener("scroll",this.scrollCallback),this.scrollCallback=void 0)}didMountScrollable(r){this.props.onScroll&&(this.scrollCallback=()=>{var n,o;(o=(n=this.props).onScroll)==null||o.call(n,r)},r.addEventListener("scroll",this.scrollCallback))}showX(){var r,n,o,a;return((n=(r=this.props).setFocus)==null?void 0:n.call(r))==="close"||!((a=(o=this.props).hideX)!=null&&a.call(o))}didMountRoot(r){var s,c;if(this.isMounted)return;this.isMounted=!0;let n=document.activeElement;if(n instanceof HTMLElement&&n!==document.body&&(this.elementToRestoreFocusTo=n),document.documentElement.scrollHeight>window.innerHeight){let l=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=`${l}px`}document.body.classList.add("dcg-modal-open");let o=r.querySelector(".dcg-shared-modal-box"),a=r.querySelector(".dcg-shared-modal-title");if((c=(s=this.props).withStickyTitle)!=null&&c.call(s)&&o&&a){let l=()=>{this.intersectionObserver&&this.intersectionObserver.disconnect();let p=getComputedStyle(o).getPropertyValue("--dcg-modal-padding").trim();this.intersectionObserver=new IntersectionObserver(([y])=>{this.isTitleStuck=y.intersectionRatio<1,this.update()},{root:o,rootMargin:X1||p===""?void 0:`-${p} 0px 0px 0px`,threshold:[1]}),this.intersectionObserver.observe(a)};l(),this.resizeObserver=new ResizeObserver(l),this.resizeObserver.observe(o)}this.setInitialFocus(r);let i=UT(r);this.unsub=pS.push((l,p)=>{var x,M,L,T,w,k;tt(l)=="Esc"&&((M=(x=this.props).interceptEscape)!=null&&M.call(x)||this.onClose(),p());let y=l.altKey||l.shiftKey||l.metaKey||l.ctrlKey;tt(l)==="Left"&&!y&&((T=(L=this.props).onArrowKey)==null||T.call(L,"Left")),tt(l)==="Right"&&!y&&((k=(w=this.props).onArrowKey)==null||k.call(w,"Right")),i(l)})}setInitialFocus(r){var i,s,c;if(r.contains(document.activeElement))return;let n=r.querySelector(".dcg-shared-close-cross");if(((s=(i=this.props).setFocus)==null?void 0:s.call(i))==="close"){n==null||n.focus();return}let o=r.querySelector(".dcg-shared-modal-box"),a=o?qs(o)[0]:void 0;dn&&(a!=null&&a.matches("input, textarea, [contenteditable]"))&&(a=void 0),(c=a!=null?a:n)==null||c.focus()}onClose(){this.props.onClose&&this.props.onClose()}didUnmount(){var o,a;if(!this.isMounted)return;this.isMounted=!1,(o=this.intersectionObserver)==null||o.disconnect(),(a=this.resizeObserver)==null||a.disconnect(),this.unsub(),document.body.style.paddingRight="",document.body.classList.remove("dcg-modal-open");let r=this.elementToRestoreFocusTo;this.elementToRestoreFocusTo=void 0;let n=document.activeElement;r!=null&&r.isConnected&&(!n||n===document.body)&&r.focus()}};var SD=Vd(),xp=class extends K{template(){return N(vr,{size:this.const("tiny"),onClose:()=>this.props.onClose(),i18n:()=>$t,class:this.const("dcg-small-screen-language-modal"),children:[u("h1",{class:"dcg-small-screen-modal__title dcg-unstyled-heading",children:()=>re("account-shell-text-pick-language")}),u("div",{class:"dcg-small-screen-language-modal__contents",children:u(Fs,{getAllLangs:()=>SD,currentLang:()=>this.props.currentLang(),onLangChosen:t=>{this.props.onLangChosen(t),this.props.onClose()},i18n:()=>$t})})]})}};var mS="/assets/build/eye-closed-UJEGA3IU.svg";var gS="/assets/build/eye-open-BCWR7SYV.svg";var hS="/assets/build/professional-preview-I2D3WIHQ.png";var CD=500,ID=document.location.href.indexOf("dcgDebugTouchTracking=dcgYES")!==-1,ya,Bs;window._touchtracking_id_counter==null&&(window._touchtracking_id_counter=0);window._touchtracking_id_counter+=1;var dl="touchtracking_id_"+window._touchtracking_id_counter,mt=function(e){Bs&&(Bs.value="("+Date.now()+") "+e+`
`+Bs.value)};function pl(e){if(e.classList.add("dcg-tap-container",dl),da&&e.style.setProperty("--dcg-minimum-input-font-size","16px"),ID){ya&&ya.remove(),ya=document.createElement("div"),Go(ya,{position:"absolute",bottom:"10px",right:"10px"});let t=document.createElement("textarea");t.setAttribute("rows","30"),t.setAttribute("cols","40"),ya.append(t);let r=document.createElement("div");r.id="dcg-touchtracking-debug-copy",r.classList.add("dcg-btn-blue"),r.innerText="COPY LOGS",ya.append(r),Bs=ya.querySelector("textarea"),e.append(ya),r.addEventListener("mousedown",()=>{Bs&&(Bs.select(),document.execCommand("copy"))},!0),mt("monitor touches")}}var $s=0,kn=1,Gs=2,ul=3,zo=4,Ae=$s,If={},Wn={},Uo=[],Af=0,ll=null,wp=null,ti=!1,vp=null,fS=ti,ba=function(e){let t=document.activeElement;e.type.startsWith("key")?pp(e)||(ti=!0):e.type.startsWith("pointer")&&(ti=!1);let r=!!(t&&ri(t));t&&!t.closest(".dcg-tap-container."+dl)&&(t=null),t!==vp?(vp&&vp.classList.remove("dcg-focus-visible"),t&&(ti||r||t.classList.contains("dcg-always-show-focus-visible"))&&t.classList.add("dcg-focus-visible")):fS!==ti&&t&&!r&&(ti||t.classList.contains("dcg-always-show-focus-visible")?t.classList.add("dcg-focus-visible"):t.classList.remove("dcg-focus-visible")),fS=ti,vp=t};document.addEventListener("keydown",ba,{capture:!0});document.addEventListener("keydown",ba);document.addEventListener("pointerdown",ba);document.addEventListener("pointerdown",ba,{capture:!0});document.addEventListener("focusin",ba,{capture:!0});document.addEventListener("focusin",ba);document.addEventListener("focusout",ba,{capture:!0});document.addEventListener("focusout",ba);var yS,en=[],wS=function(e){let t=[],r=!1;for(let n=e.length-1;n>=0;n--){let o=e[n];o.classList.contains("dcg-touchtracking-prevent-dom-mutations")?r=!0:o.classList.contains("dcg-touchtracking-allow-dom-mutations")&&(r=!1),r||t.push(o)}return t.reverse(),t},Pf=function(e){if(!(e instanceof Element))return[];let t=e.closest(".dcg-tap-container."+dl);if(!t)return[];let r=e,n=[];for(;r;){if(n.push(r),r===t||r.classList.contains("dcg-stop-touchtracking-class-propagation"))return n;r=r.parentNode}return[]},Tp=function(e,t){wp=null,Ae=e,mt("beginMode:"+Ae),Ae===kn?Uo=Pf(t.originalEvent.touches[0].target):Uo=Pf(t.target),wS(Uo).forEach(n=>{n.classList.add("dcg-depressed")}),Uo.forEach(n=>{let o=ge(n);o.data({originalScrollTop:o.scrollTop(),originalScrollLeft:o.scrollLeft()})}),Wn={}};function ri(e){let t=["text","password","email","number","url","search"];return e.matches("input")&&t.indexOf(e.type)>=0||e.matches('textarea, [role="textbox"], [contenteditable=true]')}var ml=function(e){if(!(e instanceof Element))return!1;let t=e.closest(".dcg-tap-container");return t?t.matches(".dcg-tap-container."+dl):!1},Us=function(e,t){wp=null;let r=!1;if(mt("endMode:"+Ae),document.querySelectorAll(".dcg-depressed").forEach(n=>{n.classList.remove("dcg-depressed")}),Uo.forEach(n=>{let o=ge(n),a=o.data("originalScrollTop")-o.scrollTop(),i=o.data("originalScrollLeft")-o.scrollLeft();(a||i)&&(Wn.scroll=!0)}),Wn["dcg-tapstart"]===1&&Wn["dcg-tapend"]===1&&!Wn["dcg-tapcancel"]&&!Wn.scroll){mt("potential dcg-tap");let n=t.changedTouches[0].clientX,o=t.changedTouches[0].clientY;if(e&&!e.device&&n===0&&o===0){mt("event appears to be simulated"),r=!0,Ae=ul;let s=e.target.getBoundingClientRect();n=(s.left+s.right)/2,o=(s.top+s.bottom)/2}mt("potential dcg-tap coords:"+n+":"+o);let a=!1,i=!1;for(let s of Uo){if(a)break;let c;if(typeof s.getBoundingClientRect=="function"&&(c=s.getBoundingClientRect()),typeof s.getAttribute=="function"&&s.getAttribute("tapboundary")==="true"&&(a=!0),!(c&&(n<c.left||o<c.top||n>c.right||o>c.bottom))){wp=s,i=!0,Or("dcg-tap",e,{target:wp,touches:t.touches,changedTouches:t.changedTouches});break}}mt("result of dcg-tap:  did_dispatch="+i+"  did_escape="+a)}Ae===kn||Ae===zo?ll=setTimeout(()=>{ll=null,Af=new Date().getTime()},1e3):r&&(ll=setTimeout(()=>{ll=null,Af=new Date().getTime()},100)),Uo=[],Ae=$s},Vs=function(){return ll||new Date().getTime()-Af<500},TS=function(e){return e.identifier!==void 0?e.identifier:e.pointerId},bS=function(e){let t=[];for(let r of e)t.push({identifier:TS(r),x:r.pageX,y:r.pageY,screenX:r.screenX,screenY:r.screenY,pageX:r.pageX,pageY:r.pageY,clientX:r.clientX,clientY:r.clientY,target:r.target});return t},Or=function(e,t,r){let n=TS(t),o=bS(r.touches),a=bS(r.changedTouches);if(mt("dispatchEvent:"+e),e==="dcg-tapstart")If[n]={type:e,pageX:a[0].pageX,pageY:a[0].pageY};else if(e==="dcg-tapmove"){let l=a[0],p=If[n];if(p&&l.pageX===p.pageX&&l.pageY===p.pageY||(Ae===kn||Ae===zo)&&p&&p.type==="dcg-tapstart"&&Math.abs(p.pageX-l.pageX)+Math.abs(p.pageY-l.pageY)<2)return;If[n]={type:e,pageX:a[0].pageX,pageY:a[0].pageY}}let i=e.toLowerCase();Wn[i]===void 0?Wn[i]=1:Wn[i]+=1;let s=ge.event.fix(t.originalEvent);s.type=e,s.device=Ae===kn||Ae===zo?"touch":Ae===ul?"keyboard":"mouse",xt("forceTouchDevice")&&Ae===Gs&&(s.device="touch"),s.touches=o,s.changedTouches=a,s.target=r.target?r.target:t.target;let c=s.device!=="keyboard"&&Wn["dcg-longhold"]>0;s.wasLongheld=function(){return c},clearTimeout(yS),s.type==="dcg-tapstart"&&s.device!=="keyboard"&&s.touches.length===1&&(yS=setTimeout(()=>{Or("dcg-longhold",t,r)},CD)),s.target&&s.target.nodeName&&s.target.nodeName.toLowerCase()==="a"&&s.type==="dcg-tap"&&s.device==="keyboard"&&s.target.click&&s.target.click(),mt("trigger event:"+s.type),ge(s.target).trigger(s)},Sp=function(e){let t=Uo,r=!!Uo.length,n=document.querySelectorAll(".dcg-tap-container."+dl+" .dcg-hovered"),o=Array.from(n).filter(ml),a=[],i=[],s=[];if(e){let c=Pf(e);wS(c).forEach(p=>{(!r||t.indexOf(p)!==-1)&&(o.indexOf(p)===-1&&s.push(p),a.push(p))})}for(let c of o)a.indexOf(c)===-1&&i.push(c);i.forEach(c=>{c&&c.classList.remove("dcg-hovered"),ge(c).trigger("tipsyhide")}),s.forEach(c=>{c&&c.classList.add("dcg-hovered"),ge(c).trigger("tipsyshow")})},Mp=function(e){for(let t of en)if(t.pointerId===e)return!0;return!1},Nf=function(e){for(let t=0;t<en.length;t++)en[t].pointerId===e&&en.splice(t,1)},SS=function(e){Ae===$s&&Tp(zo,e),_f(),Sp(null),en.push(e.originalEvent),Or("dcg-tapstart",e,{touches:en,changedTouches:[e.originalEvent]})},xS=function(e){Nf(e.originalEvent.pointerId);let t={touches:en,changedTouches:[e.originalEvent]};Or("dcg-tapcancel",e,t),en.length===0&&Us(e,t)},vS=function(e){Nf(e.originalEvent.pointerId);let t={touches:en,changedTouches:[e.originalEvent]};Or("dcg-tapend",e,t),en.length===0&&Us(e,t)},kp=function(e){return e.originalEvent.pointerType==="touch"},zs=function(e,t){e.trim().split(/\s+/).forEach(r=>{let n=AD?{passive:!1}:void 0;document.addEventListener(r,o=>{mt("document.on:"+o.type),t(ge.event.fix(o))},n)})};zs("pointerdown MSPointerDown",e=>{if(!(Ae===Gs||Ae===kn||!kp(e))){if(Mp(e.originalEvent.pointerId)){mt("exit. pointer id already exists: "+e.originalEvent.pointerId);return}SS(e)}});zs("pointermove MSPointerMove",e=>{Ae===Gs||Ae===kn||!kp(e)||(Mp(e.originalEvent.pointerId)||(mt("pointer id already exists: "+e.originalEvent.pointerId),SS(e)),Nf(e.originalEvent.pointerId),en.push(e.originalEvent),Or("dcg-tapmove",e,{touches:en,changedTouches:[e.originalEvent]}))});ge(document).on("pointercancel MSPointerCancel",e=>{if(mt("document.on:"+e.type),Ae!==zo||!kp(e)||!Mp(e.originalEvent.pointerId))return;xS(e);let t;for(;t=en.pop();){let r=ge.Event(t,{originalEvent:t});xS(r)}});ge(document).on("pointerup MSPointerUp",e=>{if(mt("document.on:"+e.type),Ae!==zo||!kp(e)||!Mp(e.originalEvent.pointerId))return;vS(e);let t;for(;t=en.pop();){let r=ge.Event(t,{originalEvent:t});vS(r)}});var AD=(function(){let e=!1;try{let t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",()=>{},t),window.removeEventListener("test",()=>{},t)}catch(t){}return e})();zs("touchstart",e=>{Ae===Gs||Ae===zo||(_f(),Ae===$s&&Tp(kn,e),Sp(null),Or("dcg-tapstart",e,{touches:e.originalEvent.touches,changedTouches:e.originalEvent.changedTouches}))});zs("touchmove",e=>{Ae===kn&&Or("dcg-tapmove",e,{touches:e.originalEvent.touches,changedTouches:e.originalEvent.changedTouches})});zs("touchcancel",e=>{if(Ae!==kn)return;let t={touches:e.originalEvent.touches,changedTouches:e.originalEvent.changedTouches};Or("dcg-tapcancel",e,t),e.originalEvent.touches.length===0&&Us(e,t)});zs("touchend",e=>{if(Ae!==kn)return;let t={touches:e.originalEvent.touches,changedTouches:e.originalEvent.changedTouches};Or("dcg-tapend",e,t),e.originalEvent.touches.length===0&&Us(e,t)});function MS(){return!!(Ae===kn||Ae===zo||Vs())}ge(document).on("mousedown",e=>{if(mt("document.on:"+e.type),!(e.button===1||e.button===2)){if(MS()){!e.target.matches("input, textarea, select")&&ml(e.target)&&e.preventDefault(),mt("abort mousedown: "+Ae+":"+Vs());return}Tp(Gs,e),Or("dcg-tapstart",e,{touches:[e],changedTouches:[e]})}});var PD=function(e){return!(e instanceof Element)||!ml(e)||e.closest(".dcg-do-blur")||e.closest(".dcg-text-selectable")?!1:!!e.closest(".dcg-do-not-blur")},_f=function(){try{let e=window.getSelection();if((e==null?void 0:e.rangeCount)===1){let t=e.getRangeAt(0).commonAncestorContainer;t.nodeType===Node.TEXT_NODE&&(t=t.parentNode),t&&t.closest(".dcg-text-selectable")&&e.removeAllRanges()}}catch(e){}};ge(document).on("mousedown",e=>{mt("document.on:"+e.type);let t=e.target;PD(t)&&(!ri(t)||t.classList.contains("dcg-do-not-blur"))&&e.preventDefault(),_f()});ge(document).on("mouseleave",e=>{if(mt("document.on:"+e.type),Ae===$s){if(Vs()){mt("abort mouseleave: "+Ae+":"+Vs());return}Sp(null)}});ge(document).on("mousemove",e=>{if(mt("document.on:"+e.type),!(e.button===1||e.button===2)&&!(Ae===kn||Ae===zo)){if(Vs()){mt("abort mousemove: "+Ae+":"+Vs());return}Sp(e.target),Or("dcg-tapmove",e,{touches:[e],changedTouches:[e]})}});ge(document).on("mouseup",e=>{if(mt("document.on:"+e.type),e.button===1||e.button===2||Ae!==Gs)return;let t={touches:[],changedTouches:[e]};Or("dcg-tapend",e,t),Us(e,t)});ge(document).on("keydown",e=>{if(mt("document.on:"+e.type),!(!ei(e)||!ml(e.target))&&Ae!==ul){if(e.target.matches('a:not([ontap]), button:not([ontap]), input:not([type="checkbox"]), textarea, select, [role="textbox"], [contenteditable="true"], summary'))return;e.preventDefault(),Tp(ul,e),Or("dcg-tapstart",e,{touches:[e],changedTouches:[e]})}});ge(document).on("keyup",e=>{if(mt("document.on:"+e.type),!ei(e)||!ml(e.target)||Ae!==ul)return;let t={touches:[],changedTouches:[e]};Or("dcg-tapend",e,t),Us(e,t)});function ND(){return Ae!==$s}function _D(){Wn["dcg-tapcancel"]=1}var kS={monitor:pl,isTapActive:ND,elIsTypeable:ri,shouldIgnoreMouseDown:MS,preventTapEvent:_D};function ES(){document.activeElement&&ri(document.activeElement)&&ge(document.activeElement).trigger("blur")}var En=null,Ep=null,Df=!1,gl={},CS=0;function LD(){let e=window.fetch;window.fetch=function(t,r){let n=new Request(t,r);if(n.url.startsWith("data:"))return e(t,r);let o=CS+"";CS+=1;let a=new Promise((s,c)=>{gl[o]={resolve:s,reject:c}}),i={};for(let[s,c]of n.headers.entries())i[s]=c;return n.text().then(s=>{En.methods.proxyXHR(JSON.stringify({id:o,url:n.url,method:n.method,headers:i,body:s}))},()=>{gl[o].reject(new TypeError("Could not decode request body")),delete gl[o]}),a}}function RD(e){var r;let t=(r=e.target)==null?void 0:r.closest("a[href]");if(t&&t.protocol==="file:"){let n=t.getAttribute("href");n[0]!=="/"&&(n="/"+n),t.setAttribute("href",xe.getBaseURL()+n)}}if(da){let e=[],t=[],r=function(o){let a=t.length?t.pop():e.length;return e[a]=o,a},n=function(o){let a=e[o];return e[o]=null,t.push(o),a};En={loaded:!1,methods:{},queuedMethodCalls:[]},GT(()=>{let o=[];window.ObjC_callback=function(i){En.loaded=!0,i.split(" ").forEach(s=>{En.methods[s]=function(c,l){let p=l?r(l):-1;o.push("desmos:"+s+"/"+p+"/"+encodeURIComponent(c)),o.length===1&&a.setAttribute("src",o[0])}}),this.ObjC_callback=function(s,c){try{s!==-1&&n(s)(c)}finally{o.shift(),o.length>0&&a.setAttribute("src",o[0])}},En.methods.proxyXHR&&LD(),En.queuedMethodCalls.forEach(s=>{Cp[s.methodName](...s.args)})};let a=document.createElement("iframe");Go(a,{position:"absolute",left:"-1000px",zIndex:"-1"}),a.setAttribute("id","objc-bridge"),a.setAttribute("src","desmos:loaded"),document.body.append(a)})}else el?Ep=window.Android:Df=!0;var DD=["hideLoadingScreen","gaEvent","openGoogleLogin","openAppleLogin","logout","saveCookies","deleteCookies","startSingleAppMode","endSingleAppMode","setWWWSubdomain","sendSerializedAnalyticsEvent","sendStoredLogsToDesmos"],Rf=class{constructor(){this._eventBus=new ua;this.heartbeatTimeout=void 0,this._eventBus.observeEvent("started resumed",t=>{this.gaEvent(t+":"+this.versionNumber),this.incrementHeartbeat(0)}),document.location.search.indexOf("simulateVersionNumber")!==-1&&(this.versionNumber="?.?.?");for(let t of DD)this[t]=(...r)=>{Df||(Ep?Ep[t]?Ep[t](...r):console.log("call to missing Android method",t,r):En&&(En.loaded?En.methods[t]?En.methods[t].apply(En,r):console.log("call to missing ObjC method",t,r):En.queuedMethodCalls.push({methodName:t,args:r})))}}heartbeat(t){clearTimeout(this.heartbeatTimeout),this.gaEvent("heartbeat-"+10*t),this.incrementHeartbeat(t)}incrementHeartbeat(t){clearTimeout(this.heartbeatTimeout),this.heartbeatTimeout=setTimeout(()=>{this.heartbeat(t+1)},600*1e3)}_started(t,r){this.appId=t,this.versionNumber=r,this._eventBus.triggerEvent("started",void 0)}_resumed(){this._eventBus.triggerEvent("resumed",void 0)}handleAndroidBackButtonAndReturnIfShouldMoveToBackground(){let t=window.Calc&&window.Calc.controller;return t&&t.isKeypadOpen()?(ES(),"false"):(t=window.MainController,t&&t.handleAndroidBackButton()?"false":"true")}isInApp(){return window.platform&&window.platform!=="www"}isInAndroidApp(){return window.platform==="android"}onGoogleAuthResult(t){this._eventBus.triggerEvent("onGoogleAuthResult",t)}onAppleAuthResult(t){this._eventBus.triggerEvent("onAppleAuthResult",t)}onObjCXHRProxyResult(t){let r=t.id,{resolve:n,reject:o}=gl[r];delete gl[r],t.status===0?o(new TypeError("Network error")):n(new Response(t.body,{status:t.status,headers:t.headers}))}sendAnalyticsEvent(t,r){this.sendSerializedAnalyticsEvent(JSON.stringify({type:t,payload:r}))}observeEvent(t,r){return this._eventBus.observeEvent(t,r)}},Cp=new Rf;Df||(window.AppBridge=Cp,document.addEventListener("click",RD,!0));window.__dcgAppBridgeDefined=!0;function IS(e){var n,o;let t=(n=e.selectionStart)!=null?n:0,r=(o=e.selectionEnd)!=null?o:0;return e.selectionDirection==="backward"?{anchor:r,head:t}:{anchor:t,head:r}}var AS=["select","keyup","mouseup"],At=class extends K{constructor(){super(...arguments);this._viewName="Input"}computeValue(){let r=this.props.value();return r==null?"":`${r}`}reportSelectionChange(){var r,n;document.activeElement===this.rootDOM&&((n=(r=this.props).onSelectionChange)==null||n.call(r,IS(this.rootDOM)))}restoreSelection(){var i,s;let r=(s=(i=this.props).selection)==null?void 0:s.call(i);if(!r)return;let n=IS(this.rootDOM);if(n.anchor===r.anchor&&n.head===r.head)return;let{anchor:o,head:a}=r;this.rootDOM.setSelectionRange(Math.min(o,a),Math.max(o,a),a<o?"backward":"forward")}template(){let{selection:r,onSelectionChange:n,...o}=this.props,{onInput:a,onEnterPressed:i,disabled:s,readOnly:c}=o,l={...o,value:this.const(this.computeValue()),onInput:(p=>{a==null||a(p.target.value),this._isMounted&&this.update()}).bind(this)};return i&&(l.onKeyPress=p=>{p.key==="Enter"&&i()}),s&&(l.disabled=()=>s()?!0:void 0),c&&(l.readOnly=()=>c()?!0:void 0),l.hasOwnProperty("tabIndex")||(l.tabIndex=()=>s&&s()?"-1":"0"),l.onMount=p=>{if(this.rootDOM=p,this.props.onSelectionChange){this.selectionListener=()=>this.reportSelectionChange();for(let y of AS)p.addEventListener(y,this.selectionListener)}this.props.onMount&&this.props.onMount(p)},u("input",{...l})}willUnmount(){if(this.selectionListener)for(let r of AS)this.rootDOM.removeEventListener(r,this.selectionListener)}didUpdate(){let r=this.computeValue();this.rootDOM.value!==r&&(this.rootDOM.value=r),this.restoreSelection()}};var Hs="[^@\\s]+@[^@\\s]+\\.[^@\\s]+";function PS(){return window.googleAuthConnectionFailed}var Ip=class extends K{template(){return u("input",{class:"dcg-authentication-modal__input dcg-authentication-modal__input--email dcg-authentication-modal__input--hidden",type:"email",value:this.bindFn(this.props.email),disabled:!0,tabIndex:-1})}},Ap=class extends K{constructor(){super(...arguments);this.passwordElementType="password"}onInputMount(r){var n,o;dn||!((o=(n=this.props).withAutoFocus)!=null&&o.call(n))||(r.focus(),r.select())}onPasswordToggle(){this.passwordElementType=this.passwordElementType==="password"?"text":"password",this.update()}template(){return N("div",{class:"dcg-authentication-modal__control dcg-authentication-modal__control--password",children:[N("label",{class:()=>{var r,n;return{"dcg-authentication-modal__label":!0,"dcg-authentication-modal__label--password":!0,"dcg-authentication-modal__label--standalone":!!((n=(r=this.props).isSignUp)!=null&&n.call(r))}},children:[()=>{var r,n;return(n=(r=this.props).isSignUp)!=null&&n.call(r)?this.props.i18n("shared-label-create-password"):this.props.i18n("shared-label-enter-password")},u(At,{id:this.const("authenticationModalPassword"),class:()=>{var r,n;return{"dcg-input-blue-outline":!0,"dcg-authentication-modal__input":!0,"dcg-authentication-modal__input--password":!0,"dcg-disabled":!!((n=(r=this.props).isDisabled)!=null&&n.call(r))}},type:()=>this.passwordElementType,onInput:this.bindFn(this.props.onInput),value:this.bindFn(this.props.value),onMount:this.bindFn(this.onInputMount),onUnmount:this.bindFn(this.props.onUnmount),onEnterPressed:this.bindFn(this.props.onEnterPressed),disabled:()=>{var r,n;return!!((n=(r=this.props).isDisabled)!=null&&n.call(r))||void 0},autocomplete:()=>{var r,n;return(n=(r=this.props).isSignUp)!=null&&n.call(r)?"new-password":"current-password"}})]}),u(At,{class:this.const("dcg-authentication-modal__button dcg-authentication-modal__button--password"),type:this.const("image"),src:()=>this.passwordElementType==="password"?gS:mS,alt:()=>this.passwordElementType==="password"?this.props.i18n("shared-button-show-password"):this.props.i18n("shared-button-hide-password"),onTap:this.bindFn(this.onPasswordToggle),onEnterPressed:this.bindFn(this.onPasswordToggle),value:this.const("")})]})}},Pp=class extends K{template(){return N("label",{class:"dcg-authentication-modal__label dcg-authentication-modal__label--standalone",children:[()=>this.props.i18n("shared-label-choose-all-that-describe")," ",u("span",{class:"dcg-authentication-modal__sublabel",children:()=>this.props.i18n("shared-label-optional")}),u("ul",{class:"dcg-unstyled-list dcg-authentication-modal__tag-control",role:"listbox","aria-multiselectable":"true",onKeyDown:this.bindFn(this.onKeyDown),children:u(Ye,{each:this.bindFn(this.props.tags),children:t=>{let r=t();return N("li",{class:()=>({"dcg-authentication-modal__tag":!0,"dcg-authentication-modal__tag--selected":r.isSelected()}),onTap:()=>this.props.onSelect(r),"aria-selected":()=>r.isSelected(),tabIndex:()=>r.isSelected()||this.isFirstAndNoneSelected(r)?0:-1,role:"option",children:[u(J,{predicate:()=>r.isSelected(),children:()=>u("i",{class:"dcg-icon-check","aria-hidden":"true"})}),()=>r.label]})}},t=>t.id)})]})}isFirstAndNoneSelected(t){let r=this.props.tags()[0];return t.id===r.id&&!r.isSelected()}onKeyDown(t){var i,s,c,l;let r=tt(t);if(!r||!["Up","Down","Right","Left"].includes(r)||!ha(t))return;t.preventDefault(),t.stopPropagation();let n=["Up","Left"].includes(r)?-1:1,o=".dcg-authentication-modal__tag",a=n===1?(s=(i=document.activeElement)==null?void 0:i.closest(o))==null?void 0:s.nextSibling:(l=(c=document.activeElement)==null?void 0:c.closest(o))==null?void 0:l.previousSibling;a&&"focus"in a&&typeof a.focus=="function"&&a.focus()}},hl=class extends K{getClassName(){switch(this.props.provider()){case"apple":return"dcg-authentication-modal__button--apple";case"google":return"dcg-authentication-modal__button--google"}}getButtonText(){switch(this.props.provider()){case"apple":return this.props.controller().s("shared-prompt-continue-with-apple");case"google":return this.props.controller().s("shared-prompt-continue-with-google")}}onSsoTap(t){this.props.controller().dispatch({type:"sso-log-in",payload:{provider:t}})}stepIsLoading(){var t;return((t=this.props.controller().userController.getAuthenticationStep().status)==null?void 0:t.type)==="loading"}isDisabled(){return this.props.provider()==="google"?PS()||this.stepIsLoading():this.stepIsLoading()}template(){return u("button",{class:()=>({"dcg-authentication-modal__button":!0,"dcg-authentication-modal__button--sso":!0,"dcg-btn-gray-outline":!0,"dcg-disabled":this.isDisabled(),[this.getClassName()]:!0}),didMount:t=>{var r,n;(n=(r=this.props).focusOnMount)!=null&&n.call(r)&&t.focus()},"aria-disabled":()=>this.isDisabled()?!0:void 0,disabled:()=>this.isDisabled()?!0:void 0,onTap:()=>this.onSsoTap(this.props.provider()),children:()=>this.getButtonText()})}},Np=class extends K{constructor(){super(...arguments);this.controller=this.props.controller();this.userController=this.controller.userController;this.email=(()=>{let r=this.userController.getAuthenticationStep();return r.name!=="authenticate"||!r.email?"":r.email})();this.password="";this.firstName="";this.lastName="";this.selectedTags=new Set;this.tagLabels={student:this.controller.s("shared-button-student-classification"),teacher:this.controller.s("shared-button-teacher-classification"),"non-education":this.controller.s("shared-button-non-education-classification"),fun:this.controller.s("shared-button-fun-classification")}}getTags(){return Object.keys(this.tagLabels).map(r=>({id:r,label:this.tagLabels[r],isSelected:()=>this.selectedTags.has(r)}))}onClose(){this.controller.closeExternalLoginPopupWindow(),this.controller.dispatch({type:"close-modal"})}getTitle(){switch(this.userController.getAuthenticationStep().name){case"authenticate":return this.controller.s("shared-title-authenticate");case"email-login":case"previously-sso":return this.controller.s("shared-title-login");case"email-signup":return this.controller.s("shared-title-welcome");case"sso-confirmation":return this.controller.s("shared-title-welcome-with-name",{name:this.userController.getFullName()});case"professional-preview":return this.controller.s("shared-title-desmos-professional")}}withBackButton(){return["email-login","email-signup","previously-sso"].includes(this.userController.getAuthenticationStep().name)}onBack(){this.controller.dispatch({type:"previous-step"})}onEmailInputMount(r){this.emailElement=r,!dn&&(r.focus(),r.select())}onEmailInputUnmount(){this.emailElement=void 0}onEmailInput(r){this.email=r,this.update()}isAuthenticateStepLoading(){var n;let r=this.userController.getAuthenticationStep();return r.name==="authenticate"&&((n=r.status)==null?void 0:n.type)==="loading"}isEmailInputDisabled(){return this.isAuthenticateStepLoading()}getAuthenticationStepError(r="authenticate"){var o;let n=this.userController.getAuthenticationStep();if(n.name===r&&((o=n.status)==null?void 0:o.type)==="error")return this.controller.s("account-shell-error-unknown");if(PS())return this.controller.s("shared-message-google-login-not-available")}onNext(){var r;!((r=this.emailElement)!=null&&r.reportValidity())||this.isNextButtonDisabled()||this.controller.dispatch({type:"get-email-registration-status",payload:{email:this.email}})}isNextButtonDisabled(){return!this.email||this.isAuthenticateStepLoading()}onPasswordUnmount(){this.password=""}onPasswordInput(r){this.password=r,this.update()}isPasswordInputDisabled(){var n,o;let r=this.userController.getAuthenticationStep();return r.name==="email-login"&&((n=r.status)==null?void 0:n.type)==="loading"||r.name==="email-signup"&&((o=r.status)==null?void 0:o.type)==="loading"}isLogInButtonDisabled(){var n;let r=this.userController.getAuthenticationStep();return r.name==="email-login"&&(((n=r.status)==null?void 0:n.type)==="loading"||!this.password)}onPasswordEnterPressed(){if(!(this.isLogInButtonDisabled()||this.isSignUpButtonDisabled())){if(this.userController.getAuthenticationStep().name==="email-signup"){this.controller.dispatch({type:"email-sign-up",payload:{i18n:this.controller.s,language:this.controller.getLanguage(),firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password,classifications:this.getSelectedTags().map(r=>r.id)}});return}this.controller.dispatch({type:"email-log-in",payload:{language:this.controller.getLanguage(),email:this.email,password:this.password,i18n:this.controller.s}})}}onSaveSsoConfirmationTap(){let r=this.getSelectedTags().map(n=>n.id);this.getSelectedTags().length>0&&this.controller.dispatch({type:"update-classifications",payload:{classifications:r}}),this.userController.shouldShowProfessionalPreview(r)?this.controller.dispatch({type:"set-authentication-step",payload:{name:"professional-preview"}}):this.controller.dispatch({type:"close-modal"})}hasEmailLogInError(r=this.userController.getAuthenticationStep()){var n;return r.name==="email-login"&&((n=r.status)==null?void 0:n.type)==="error"}onFirstNameMount(r){dn||r.focus()}onFirstNameInput(r){this.firstName=r,this.update()}isFirstNameInputDisabled(){var n;let r=this.userController.getAuthenticationStep();return r.name==="email-signup"&&((n=r.status)==null?void 0:n.type)==="loading"}onLastNameInput(r){this.lastName=r,this.update()}isLastNameInputDisabled(){var n;let r=this.userController.getAuthenticationStep();return r.name==="email-signup"&&((n=r.status)==null?void 0:n.type)==="loading"}isSignUpButtonDisabled(){var n;let r=this.userController.getAuthenticationStep();return r.name==="email-signup"&&(!this.firstName||!this.password||((n=r.status)==null?void 0:n.type)==="loading")}getSelectedTags(){return this.getTags().filter(r=>r.isSelected())}onTagSelect(r){r.isSelected()?this.selectedTags.delete(r.id):this.selectedTags.add(r.id),this.update()}hasEmailSignUpError(r=this.userController.getAuthenticationStep()){var n;return r.name==="email-signup"&&((n=r.status)==null?void 0:n.type)==="error"}onForgotPassword(){this.controller.emailForResetPassword=this.email,this.controller.dispatch({type:"show-modal",modal:"recover-password"})}getPreviousSsoSubtitle(r){switch(r){case"google":return this.controller.s("shared-text-previous-google");case"apple":return this.controller.s("shared-text-previous-apple")}}showTerms(){let r=this.userController.getAuthenticationStep().name;return["email-sign-up","authenticate","sso-confirmation"].includes(r)}template(){return N(vr,{title:this.bindFn(this.getTitle),withStickyTitle:this.const(!0),withBackButton:()=>this.withBackButton()?this.bindFn(this.onBack):void 0,size:this.const("tiny"),onClose:this.bindFn(this.onClose),i18n:this.const(this.controller),class:this.const("dcg-authentication-modal"),children:[xr(()=>this.userController.getAuthenticationStep(),"name",{authenticate:()=>N("div",{class:"dcg-authentication-modal__step dcg-authentication-modal__step--authenticate",children:[u(hl,{provider:this.const("google"),controller:()=>this.controller}),u(pt,{when:()=>this.shouldShowLoginWithApple(),children:u(hl,{provider:this.const("apple"),controller:()=>this.controller})}),u("div",{role:"separator",class:"dcg-authentication-modal__divider",children:()=>this.controller.s("shared-text-or")}),N("div",{class:"dcg-authentication-modal__control dcg-authentication-modal__control--email",children:[N("label",{children:[()=>this.controller.s("shared-label-continue-with-email"),u(At,{id:this.const("authenticationModalEmail"),class:()=>({"dcg-input-blue-outline":!0,"dcg-authentication-modal__input":!0,"dcg-authentication-modal__input--email":!0,"dcg-disabled":this.isEmailInputDisabled()}),disabled:()=>this.isEmailInputDisabled(),type:this.const("email"),pattern:this.const(Hs),onInput:this.bindFn(this.onEmailInput),value:()=>this.email,onMount:this.bindFn(this.onEmailInputMount),onUnmount:this.bindFn(this.onEmailInputUnmount),onEnterPressed:this.bindFn(this.onNext),autocomplete:this.const("username")})]}),u("button",{class:()=>({"dcg-btn-blue":!0,"dcg-disabled":this.isNextButtonDisabled(),"dcg-authentication-modal__button":!0,"dcg-authentication-modal__button--next":!0}),disabled:()=>this.isNextButtonDisabled()||void 0,onTap:this.bindFn(this.onNext),children:()=>this.controller.s("shared-button-next")})]}),Yr(()=>this.getAuthenticationStepError(),r=>u("div",{class:"dcg-authentication-modal__error",role:"alert",children:r})),u("small",{class:"dcg-authentication-modal__detail dcg-authentication-modal__detail--cookies",children:u(Kn,{i18n:this.const(this.controller),children:"We use cookies only for logged in users. Please stay logged out to use Desmos without cookies."},this.const("shared-text-cookie-notice"))})]}),"email-login":()=>N("div",{class:"dcg-authentication-modal__step dcg-authentication-modal__step--email-login",children:[u(Ip,{email:()=>this.email}),u(Ap,{i18n:this.controller.s,withAutoFocus:this.const(!0),isDisabled:this.bindFn(this.isPasswordInputDisabled),onUnmount:this.bindFn(this.onPasswordUnmount),onInput:this.bindFn(this.onPasswordInput),value:()=>this.password,onEnterPressed:this.bindFn(this.onPasswordEnterPressed)}),N("div",{class:"dcg-authentication-modal__button-group",children:[u("button",{class:"dcg-authentication-modal__detail dcg-authentication-modal__detail--forgot-password",tabIndex:0,onTap:this.bindFn(this.onForgotPassword),children:()=>this.controller.s("shared-prompt-forgot-password")}),u("button",{class:()=>({"dcg-btn-blue":!0,"dcg-disabled":this.isLogInButtonDisabled(),"dcg-authentication-modal__button":!0,"dcg-authentication-modal__button--log-in":!0}),disabled:()=>this.isLogInButtonDisabled()||void 0,onTap:this.bindFn(this.onPasswordEnterPressed),children:()=>this.controller.s("shared-button-login-capitalized")})]}),u(J,{predicate:this.bindFn(this.hasEmailLogInError),children:()=>u("div",{class:"dcg-authentication-modal__error",role:"alert",children:()=>{let r=this.userController.getAuthenticationStep();if(this.hasEmailLogInError(r))return r.status.message}})})]}),"email-signup":()=>N("div",{class:"dcg-authentication-modal__step",children:[u(Ip,{email:()=>this.email}),u("h2",{class:"dcg-authentication-modal__subtitle",children:N(Kn,{i18n:this.const(this.controller),children:["You're signing up with ",u("b",{children:()=>this.email}),"."]},this.const("shared-title-using-for-sign-up"))}),N("div",{class:"dcg-authentication-modal__input-group",children:[N("label",{children:[()=>this.controller.s("shared-label-first-name"),u(At,{class:()=>({"dcg-input-blue-outline":!0,"dcg-authentication-modal__input":!0,"dcg-authentication-modal__input--first-name":!0,"dcg-disabled":this.isFirstNameInputDisabled()}),type:this.const("text"),onInput:this.bindFn(this.onFirstNameInput),value:()=>this.firstName,onMount:this.bindFn(this.onFirstNameMount),disabled:()=>this.isFirstNameInputDisabled()||void 0,autocomplete:this.const("given-name")})]}),N("label",{children:[()=>this.controller.s("shared-label-last-name")," ",u("span",{class:"dcg-authentication-modal__sublabel dcg-authentication-modal__sublabel--shrunk",children:()=>this.controller.s("shared-label-optional")}),u(At,{class:()=>({"dcg-input-blue-outline":!0,"dcg-authentication-modal__input":!0,"dcg-authentication-modal__input--last-name":!0,"dcg-disabled":this.isLastNameInputDisabled()}),type:this.const("text"),onInput:this.bindFn(this.onLastNameInput),value:()=>this.lastName,disabled:()=>this.isLastNameInputDisabled()||void 0,autocomplete:this.const("family-name")})]})]}),u(Ap,{i18n:this.controller.s,isSignUp:this.const(!0),isDisabled:this.bindFn(this.isPasswordInputDisabled),onUnmount:this.bindFn(this.onPasswordUnmount),onInput:this.bindFn(this.onPasswordInput),value:()=>this.password,onEnterPressed:this.bindFn(this.onPasswordEnterPressed)}),u(Pp,{i18n:this.controller.s,onSelect:this.bindFn(this.onTagSelect),tags:this.bindFn(this.getTags)}),u("button",{class:()=>({"dcg-btn-blue":!0,"dcg-disabled":this.isSignUpButtonDisabled(),"dcg-authentication-modal__button":!0,"dcg-authentication-modal__button--full-width":!0,"dcg-authentication-modal__button--sign-up":!0}),"aria-disabled":()=>this.isSignUpButtonDisabled()?"":void 0,onTap:this.bindFn(this.onPasswordEnterPressed),children:()=>this.controller.s("shared-button-sign-up")}),u(J,{predicate:this.bindFn(this.hasEmailSignUpError),children:()=>u("div",{class:"dcg-authentication-modal__error",role:"alert",children:()=>{let r=this.userController.getAuthenticationStep();if(this.hasEmailSignUpError(r))return r.status.message}})})]}),"previously-sso":r=>N("div",{class:"dcg-authentication-modal__step dcg-authentication-modal__step--previously-sso",children:[u("h2",{class:"dcg-authentication-modal__subtitle dcg-authentication-modal__subtitle-large-font",children:()=>this.getPreviousSsoSubtitle(r().ssoProvider)}),u(hl,{provider:()=>r().ssoProvider,controller:()=>this.controller,focusOnMount:this.const(!0)}),u("button",{class:"dcg-authentication-modal__detail dcg-unstyled-button dcg-authentication-modal__detail--set-password dcg-blue-link",tabIndex:0,onTap:this.bindFn(this.onForgotPassword),children:()=>this.controller.s("shared-prompt-set-password")}),Yr(()=>this.getAuthenticationStepError(),n=>u("div",{class:"dcg-authentication-modal__error",role:"alert",children:n}))]}),"sso-confirmation":()=>N("div",{class:"dcg-authentication-modal__step dcg-authentication-modal__step--sso-confirmation",children:[u("h2",{class:"dcg-authentication-modal__subtitle",children:N(Kn,{i18n:this.const(this.controller),children:["You signed up with"," ",u("b",{children:()=>this.userController.getEmail()}),". Finish setting up your account below."]},this.const("shared-title-account-finish-set-up"))}),u(Pp,{i18n:this.controller.s,onSelect:this.bindFn(this.onTagSelect),tags:this.bindFn(this.getTags)}),u("button",{class:()=>({"dcg-btn-blue":!0,"dcg-authentication-modal__button":!0,"dcg-authentication-modal__button--full-width":!0,"dcg-authentication-modal__button--save":!0}),onTap:this.bindFn(this.onSaveSsoConfirmationTap),children:()=>this.controller.s("graphing-calculator-button-done")})]}),"professional-preview":()=>N("div",{class:"dcg-authentication-modal__step dcg-authentication-modal__step--professional-preview",children:[u("img",{class:"dcg-authentication-modal__professional-preview-image",src:this.const(hS),alt:""}),u("h2",{class:"dcg-authentication-modal__subtitle dcg-authentication-modal__professional-preview-description",children:()=>this.controller.s("shared-text-professional-description")}),u("a",{class:()=>({"dcg-btn-blue":!0,"dcg-authentication-modal__button":!0,"dcg-authentication-modal__button--explore-professional":!0}),href:"/professional",didMount:r=>r.focus(),children:()=>this.controller.s("shared-button-explore-professional")})]})}),u(J,{predicate:()=>this.showTerms(),children:()=>u("small",{class:"dcg-authentication-modal__detail dcg-authentication-modal__detail--privacy",children:N(Kn,{i18n:this.props.controller,children:["By signing up, you agree to our"," ",u("a",{class:"dcg-blue-link",href:"/privacy",target:"_blank",children:"Privacy Policy"})," ","&"," ",u("a",{class:"dcg-blue-link",href:"/terms",target:"_blank",children:"Terms"}),"."]},this.const("shared-text-privacy-notice"))})})]})}shouldShowLoginWithApple(){return!Cp.isInAndroidApp()}};var _p=class extends K{constructor(){super(...arguments);this.controller=this.props.controller()}template(){return u(vr,{title:()=>this.controller.s("shared-title-account-reactivated"),size:this.const("narrow"),onClose:()=>this.controller.dispatch({type:"close-modal"}),i18n:this.props.controller,children:N("div",{class:"dcg-shared-recover-password-dialog dcg-shared-account-dialog dcg-shared-account-dialog--account-reenabled",children:[u("div",{class:"dcg-shared-account-paragraph",children:()=>this.controller.s("shared-message-account-reactivated")}),u("div",{class:"dcg-shared-modal-actions-container",children:u("button",{class:()=>({"dcg-btn-blue":!0}),onTap:()=>this.controller.dispatch({type:"close-modal"}),children:()=>this.controller.s("shared-button-continue-to-desmos")})})]})})}};var ni=class extends K{constructor(){super(...arguments);this._viewName="Button"}template(){let{disabled:r}=this.props;return u("button",{type:this.const("button"),...this.props,disabled:r?()=>r()||void 0:void 0})}};var Fr=class extends K{constructor(){super(...arguments);this.controller=this.props.controller()}template(){return u(J,{predicate:()=>!!this.props.errors().length,children:()=>u("span",{children:u(Ye.Simple,{each:this.props.errors,children:r=>u("div",{class:"dcg-shared-account-modal-errors",role:"alert",children:u("span",{children:()=>this.controller.raw(r)})})})})})}};var qD=0,qf=1,NS=2,Lp=class extends K{constructor(){super(...arguments);this.controller=this.props.controller();this.mode=qf;this.formErrors=[];this.confirmingLogOutAllDevices=!1}template(){return N("div",{class:"dcg-account-settings__content",children:[N("div",{class:"dcg-account-settings__section",children:[u("h2",{class:"dcg-account-settings__title dcg-unstyled-heading",children:()=>this.controller.s("shared-title-change-password-wide")}),u(J,{predicate:()=>this.mode===qf,children:()=>N("div",{class:"dcg-account-settings__subsection",children:[u("p",{class:"dcg-account-settings__change-password-text dcg-unstyled-paragraph",children:()=>this.controller.s("shared-message-change-password-email-sent",{emailAddress:this.controller.raw(this.controller.userController.getEmail())})}),u(Fr,{controller:this.props.controller,errors:()=>this.formErrors}),u("div",{children:u(ni,{class:()=>({"dcg-account-settings__change-password-btn":!0,"dcg-btn-light-gray":!0,"dcg-disabled":this.emailDisabled}),onTap:()=>this.sendResetPasswordEmail(),disabled:()=>this.emailDisabled,children:()=>this.controller.s("shared-button-send-email")})})]})}),u(J,{predicate:()=>this.mode===NS,children:()=>N("div",{"aria-live":"assertive","aria-atomic":"true",class:"dcg-shared-confirmation-message-container",children:[N("p",{class:"dcg-shared-confirmation-message dcg-unstyled-paragraph",children:[u("i",{class:()=>({"dcg-icon-check":!0,"dcg-success-marker":!0}),"aria-hidden":"true"}),()=>this.controller.s("shared-message-email-sent")]}),u("div",{children:()=>this.controller.s("shared-message-check-email-for-password-link",{emailAddress:this.controller.raw(this.controller.userController.getEmail())})})]})})]}),N("div",{class:"dcg-account-settings__section",children:[u("h2",{class:"dcg-account-settings__title dcg-unstyled-heading",children:()=>this.controller.s("shared-prompt-log-out-all-sessions")}),N("div",{class:"dcg-account-settings__subsection",children:[u("p",{class:"dcg-unstyled-paragraph",children:()=>this.controller.s("shared-text-log-out-all-devices")}),u("div",{class:"dcg-account-settings__action",children:dr(()=>this.confirmingLogOutAllDevices,{true:()=>N(Dr,{children:[u(ni,{class:this.const("dcg-account-settings__logout-all-devices-confirm-btn dcg-btn-red"),manageFocus:this.const(this.manageFocusFor("log-out-all-devices-confirm-btn")),onTap:()=>this.onLogOutAllDevices(),children:()=>this.controller.s("shared-button-confirm-log-out-all-devices")}),u(ni,{class:this.const("dcg-account-settings__logout-all-devices-cancel-btn dcg-gray-link dcg-unstyled-button"),onTap:()=>this.setConfirmingLogOutAllDevices(!1),children:()=>this.controller.s("shared-button-cancel")})]}),false:()=>u(ni,{class:this.const("dcg-account-settings__logout-all-devices-btn dcg-btn-light-gray"),manageFocus:this.const(this.manageFocusFor("log-out-all-devices-prompt-btn")),onTap:()=>this.setConfirmingLogOutAllDevices(!0),children:()=>this.controller.s("shared-prompt-log-out-all-devices")})})})]})]})]})}onEmailSent(){this.mode=NS,this.update(),setTimeout(this.bindIfMounted(()=>{this.mode=qD,this.update()}),5e3),setTimeout(this.bindIfMounted(()=>{this.mode=qf,this.update()}),5200)}onEmailSendingFailed(r){this.formErrors=xe.parseErrorMessages(r,this.controller.s),this.update()}sendResetPasswordEmail(){this.controller.userController.recoverPassword({email:this.controller.userController.getEmail(),lang:this.controller.getLanguage()}).then(this.bindIfMounted(this.onEmailSent),this.bindIfMounted(this.onEmailSendingFailed))}setConfirmingLogOutAllDevices(r){this.confirmingLogOutAllDevices=r,this.focusTarget=r?"log-out-all-devices-confirm-btn":"log-out-all-devices-prompt-btn",this.update()}manageFocusFor(r){return{shouldBeFocused:()=>this.focusTarget===r,onFocusedChanged:n=>{n?this.focusTarget=r:this.focusTarget===r&&(this.focusTarget=void 0)}}}onLogOutAllDevices(){this.controller.dispatch({type:"close-modal"}),this.controller.dispatch({type:"log-out-all-devices"})}};var Rp=class extends K{constructor(){super(...arguments);this.controller=this.props.controller();this.formErrors=[]}template(){return N("div",{class:"dcg-shared-delete-account dcg-shared-account-settings-section",children:[u("h1",{class:"dcg-shared-account-title dcg-shared-left-align-title",children:()=>this.controller.s("shared-title-delete-account")}),u("div",{class:"dcg-shared-account-paragraph",children:N(Kn,{i18n:this.props.controller,children:["When you delete your account,"," ",u("b",{children:"we will retain your data for 30 days."})," You can reactivate your account at any time during those 30 days by logging back in. If there's something about Desmos we can improve, please"," ",u("a",{href:"mailto:support@desmos.com",class:"dcg-blue-link",children:"let us know."})]},this.const("shared-message-delete-account-notice"))}),u("div",{class:"dcg-shared-account-paragraph",children:()=>this.controller.s("shared-message-delete-account-will-send-email",{email:this.controller.raw(this.controller.userController.getEmail())})}),N("form",{onSubmit:this.bindFn(this.onSubmit),children:[u(Fr,{controller:this.props.controller,errors:()=>this.formErrors}),N("div",{class:"dcg-shared-modal-actions-container",children:[u("div",{role:"link",tabIndex:0,class:"dcg-gray-link",onTap:()=>this.props.hideForm(),children:()=>this.controller.s("shared-button-cancel")}),u("button",{class:()=>({"dcg-btn-red":!0,"dcg-disabled":this.disabled}),"aria-disabled":()=>this.disabled,tabIndex:()=>this.disabled?"-1":"0",type:"submit",children:()=>this.controller.s("shared-button-send-delete-account-email")})]})]})]})}onAccountDeleted(){this.props.submitForm()}onAccountDeletionFailed(r){this.formErrors=xe.parseErrorMessages(r,this.controller.s),this.update()}doDeleteAccount(){this.disabled||(this.controller.logEvent({category:"accounts",action:"send-delete-email"}),this.controller.userController.initiateAccountDeletion({lang:this.controller.getLanguage()}).then(this.bindFn(this.onAccountDeleted),this.bindIfMounted(this.onAccountDeletionFailed)))}onSubmit(r){r.preventDefault(),this.doDeleteAccount()}};var Dp=class extends K{constructor(){super(...arguments);this.controller=this.props.controller();this.i18n=this.controller;this.layout="informational";this.emailDisabled=!1;this.formErrors=[]}template(){return u("div",{class:"dcg-shared-email-field-container",children:xr(()=>this.layout,{informational:()=>u("div",{class:"dcg-shared-email-field",children:N("div",{class:"dcg-shared-profile-info-container",children:[u("span",{class:"dcg-shared-profile-info-title",role:"heading","aria-level":"1",children:()=>this.i18n.s("shared-title-email-settings")}),N("div",{class:"dcg-shared-profile-info-content",children:[()=>this.i18n.raw(this.controller.userController.getEmail()),u("br",{}),u(Wc,{when:()=>this.controller.userController.getIsSoleTeamOwner(),children:dr(()=>this.controller.userController.hasTeamWorkspace(),{true:()=>u("span",{class:"dcg-shared-email-field__note",children:()=>this.controller.s("account-shell-text-team-change-email")}),false:()=>u("span",{role:"link",tabIndex:0,class:"dcg-blue-link dcg-shared-email-field__change-email-link",onTap:()=>this.setLayout("initiate-email-change"),children:()=>this.i18n.s("shared-button-change-email-address")})})})]})]})}),"initiate-email-change":()=>N("div",{class:"dcg-shared-change-email-container",children:[u("div",{class:"dcg-shared-change-email-description",children:()=>this.i18n.s("shared-message-email-settings-will-send-email",{emailAddress:this.i18n.raw(this.controller.userController.getEmail())})}),u(Fr,{controller:this.props.controller,errors:()=>this.formErrors}),N("div",{class:"dcg-shared-modal-actions-container",children:[u("span",{role:"link",tabIndex:0,class:"dcg-gray-link",onTap:()=>this.setLayout("informational"),children:()=>this.i18n.s("shared-button-cancel")}),u("button",{class:()=>({"dcg-btn-blue":!0,"dcg-disabled":this.emailDisabled}),disabled:()=>this.emailDisabled?!0:void 0,tabIndex:()=>this.emailDisabled?-1:0,type:"submit",onTap:()=>this.emailDisabled||this.sendChangeEmail(),children:()=>this.i18n.s("shared-button-send-email")})]})]}),"email-change-initiated":()=>N("div",{"aria-live":"assertive","aria-atomic":"true",class:"dcg-shared-confirmation-message-container",children:[N("div",{class:"dcg-shared-confirmation-message",children:[u("i",{class:()=>({"dcg-icon-check":!0,"dcg-success-marker":!0}),"aria-hidden":"true"}),()=>this.i18n.s("shared-message-email-sent")]}),u("div",{children:()=>this.i18n.s("shared-message-check-email-for-link",{emailAddress:this.i18n.raw(this.controller.userController.getEmail())})})]})})})}setLayout(r){this.layout=r,this.formErrors=[],this.update()}onEmailSent(){this.layout="email-change-initiated",this.emailDisabled=!1,this.update(),setTimeout(this.bindIfMounted(()=>{this.layout="informational",this.update()}),5e3),setTimeout(this.bindIfMounted(()=>{this.layout="informational",this.update()}),5200)}onEmailSendingFailed(r){this.formErrors=xe.parseErrorMessages(r,this.controller.s),this.emailDisabled=!1,this.update()}sendChangeEmail(){this.emailDisabled=!0,this.update(),this.controller.userController.initiateEmailChange({lang:this.controller.getLanguage()}).then(this.bindIfMounted(this.onEmailSent),this.bindIfMounted(this.onEmailSendingFailed))}};var qp=class extends K{constructor(){super(...arguments);this.controller=this.props.controller();this.layout="informational"}template(){return u("div",{class:"dcg-shared-profile-info dcg-shared-account-settings-section",children:xr(()=>this.layout,{informational:()=>N(Dr,{children:[N("div",{class:"dcg-shared-profile-info__name-email-container",children:[u("div",{class:"dcg-shared-email-form-container",children:u(Of,{controller:this.props.controller})}),u(Dp,{controller:this.props.controller})]}),dr(()=>this.controller.userController.getIsSoleTeamOwner(),{true:()=>u("span",{class:"dcg-shared-email-field__note dcg-shared-email-field__note--delete",children:()=>this.controller.s("account-shell-text-sole-team-owner-note")}),false:()=>u("button",{class:"dcg-gray-link dcg-shared-delete-link",onTap:()=>this.setLayout("initiate-deletion"),children:()=>this.controller.s("shared-button-delete-account-question")})})]}),"initiate-deletion":()=>u(Rp,{hideForm:()=>this.setLayout("informational"),submitForm:()=>this.setLayout("deletion-initiated"),controller:this.props.controller}),"deletion-initiated":()=>N("div",{"aria-live":"assertive","aria-atomic":"true",class:"dcg-shared-confirmation-message-container",children:[N("div",{class:"dcg-shared-confirmation-message",children:[u("i",{class:()=>({"dcg-icon-check":!0,"dcg-success-marker":!0}),"aria-hidden":"true"}),()=>this.controller.s("shared-message-email-sent")]}),u("div",{children:()=>this.controller.s("shared-message-check-email-for-delete-link",{emailAddress:this.controller.raw(this.controller.userController.getEmail())})})]})})})}setLayout(r){this.layout=r,r==="deletion-initiated"&&setTimeout(()=>{this.controller.userController.logout().then(()=>{this.controller.dispatch({type:"close-modal"})})},5e3),this._isMounted&&this.update()}},Of=class extends K{constructor(){super(...arguments);this.controller=this.props.controller();this.formErrors=[]}init(){let r=this.controller.userController.getNameDetail();r.source=="legacy"?this.state={state:"legacy",name:r.given,previousName:r.given}:r.source=="parsed"?this.state={state:"name-detail",confirm:!0,given:r.given,family:r.family||"",previousGiven:"",previousFamily:""}:this.state={state:"name-detail",confirm:!1,given:r.given,family:r.family||"",previousGiven:r.given,previousFamily:r.family||""}}template(){return xr(()=>this.state,"state",{legacy:r=>u(Ff,{state:r,controller:this.props.controller,onSaveName:this.bindFn(this.onSaveName),formErrors:()=>this.formErrors,showSavedNotice:()=>this.showSavedNotice,updateState:n=>{this.state.state=="legacy"&&(this.state={...this.state,...n},this._isMounted&&this.update())}}),"name-detail":r=>u(Bf,{state:r,controller:this.props.controller,showSavedNotice:()=>this.showSavedNotice,onSaveName:this.bindFn(this.onSaveName),formErrors:()=>this.formErrors,updateState:n=>{this.state.state=="name-detail"&&(this.state={...this.state,...n},this._isMounted&&this.update())}})})}onSaveName(){switch(this.state.state){case"legacy":this.controller.userController.setNameLegacy({name:this.state.name,lang:this.controller.getLanguage()}).then(this.bindIfMounted(this.onSaved)).catch(this.bindIfMounted(r=>{this.formErrors=xe.parseErrorMessages(r,this.controller.s),this.update()}));break;case"name-detail":this.controller.userController.setNameDetail({given:this.state.given,family:this.state.family,lang:this.controller.getLanguage()}).then(this.bindIfMounted(this.onSaved)).catch(this.bindIfMounted(r=>{this.formErrors=xe.parseErrorMessages(r,this.controller.s),this.update()}));break}}onSaved(){switch(this.state.state){case"legacy":this.state.previousName=this.state.name;break;case"name-detail":this.state.previousGiven=this.state.given,this.state.previousFamily=this.state.family,this.state.confirm=!1;break}this.showSavedNotice=!0,this.update(),setTimeout(this.bindIfMounted(()=>{this.showSavedNotice=!1,this.update()}),3e3)}},Ff=class extends K{constructor(){super(...arguments);this.controller=this.props.controller()}template(){return N("form",{class:"dcg-shared-name-field",onSubmit:this.bindFn(this.onSaveName),children:[N("div",{class:"dcg-shared-profile-info-container",children:[u("label",{class:"dcg-shared-profile-info-title",for:"dcg-profile-name",children:()=>this.controller.s("shared-label-name")}),u(At,{type:this.const("text"),name:this.const("dcg-profile-name"),id:this.const("dcg-profile-name"),class:this.const("dcg-input-blue-outline dcg-shared-profile-info-content"),didMount:this.bindFn(this.didMountName),onInput:this.bindFn(this.onNameInput),value:()=>this.props.state().name,autocomplete:this.const("off")})]}),N("div",{class:"dcg-shared-modal-actions-container",children:[u(Op,{showSavedNotice:this.props.showSavedNotice,controller:this.props.controller}),u("button",{type:"submit",disabled:()=>this.nameFieldDisabled()?!0:void 0,class:()=>({"dcg-btn-blue":!0,"dcg-disabled":this.nameFieldDisabled()}),children:()=>this.controller.s("shared-button-save")})]}),u(J,{predicate:()=>this.props.formErrors().length>0,children:()=>u(Fr,{controller:this.props.controller,errors:()=>this.props.formErrors()})})]})}onNameInput(r){this.props.updateState({name:r})}didMountName(r){dn||r.focus()}onSaveName(r){r.preventDefault(),!this.nameFieldDisabled()&&this.props.onSaveName()}nameFieldDisabled(){let r=this.props.state();return!r.name||r.name===r.previousName}},Bf=class extends K{constructor(){super(...arguments);this.controller=this.props.controller()}template(){return u("form",{class:"dcg-shared-name-field",onSubmit:this.bindFn(this.onSaveName),children:N("div",{class:()=>({"dcg-shared-confirm-name":this.props.state().confirm}),children:[u(J,{predicate:()=>this.props.state().confirm,children:()=>u("span",{children:()=>this.controller.s("shared-message-please-review-name")})}),N("div",{class:"dcg-shared-profile-info-container",children:[N("div",{class:"dcg-shared-name-input",children:[u("label",{class:"dcg-shared-profile-info-title",for:"dcg-profile-given-name",children:()=>this.controller.s("shared-label-given-name-or-nickname")}),u(At,{type:this.const("text"),name:this.const("dcg-profile-given-name"),id:this.const("dcg-profile-given-name"),class:this.const("dcg-input-blue-outline dcg-shared-profile-info-content"),didMount:this.bindFn(this.didMountName),onInput:r=>this.props.updateState({given:r}),value:()=>this.props.state().given,autocomplete:this.const("off")})]}),N("div",{class:"dcg-shared-name-input",children:[u("label",{class:"dcg-shared-profile-info-title",for:"dcg-profile-family-name",children:()=>this.controller.s("shared-label-family-name")}),u(At,{type:this.const("text"),name:this.const("dcg-profile-family-name"),id:this.const("dcg-profile-family-name"),class:this.const("dcg-input-blue-outline dcg-shared-profile-info-content"),onInput:r=>this.props.updateState({family:r}),value:()=>this.props.state().family,autocomplete:this.const("off")})]})]}),N("div",{class:"dcg-shared-modal-actions-container",children:[u(Op,{controller:this.props.controller,showSavedNotice:this.props.showSavedNotice}),u("button",{type:"submit",disabled:()=>this.canSubmit()?void 0:!0,class:()=>({"dcg-btn-blue":!0,"dcg-disabled":!this.canSubmit()}),children:()=>this.props.state().confirm?this.controller.s("shared-button-confirm-name"):this.controller.s("shared-button-save")})]}),u(J,{predicate:()=>this.props.formErrors().length>0,children:()=>u(Fr,{controller:this.props.controller,errors:()=>this.props.formErrors()})})]})})}didMountName(r){dn||r.focus()}onSaveName(r){r.preventDefault(),this.canSubmit()&&this.props.onSaveName()}canSubmit(){let r=this.props.state();return r.given?r.confirm?!0:!(r.given===r.previousGiven&&r.family===r.previousFamily):!1}},Op=class extends K{template(){return u(J,{predicate:()=>this.props.showSavedNotice(),children:()=>N("span",{"aria-live":"assertive","aria-atomic":"true",class:"dcg-shared-confirmation-message",children:[u("i",{class:()=>({"dcg-icon-check":!0,"dcg-success-marker":!0}),"aria-hidden":"true"}),()=>this.props.controller().s("shared-message-information-saved")]})})}};var Vf="profile-info",_S="security",Fp=class extends K{constructor(){super(...arguments);this.controller=this.props.controller();this.i18n=this.controller;this.breakPoint=660}init(){this.settingsView=this.props.initialTab&&this.props.initialTab()||Vf,this.measureWindow()}template(){return u(vr,{title:()=>this.i18n.s("shared-title-account-settings"),size:this.const("wide"),onClose:()=>this.controller.dispatch({type:"close-modal"}),i18n:this.props.controller,children:N("div",{class:"dcg-shared-account-settings-dialog dcg-shared-account-dialog",children:[u("div",{class:"dcg-shared-navigation-tabs",role:"tablist",didMount:r=>this.tablistElement=r,children:u(Ye,{each:()=>this.getTabs(),children:r=>u("div",{"aria-orientation":"vertical",role:"tab",tabIndex:()=>this.settingsView===r().key?0:-1,"aria-selected":()=>this.settingsView===r().key,class:()=>({"dcg-shared-tab-gray-underline":!0,[r().class]:!0,"dcg-selected":this.settingsView===r().key}),onKeyDown:this.bindFn(this.handleTablistKeyDown),onTap:()=>this.updateSettingsView(r().key),children:()=>r().label()})},r=>""+r.key)}),u("div",{class:"dcg-shared-content-container",role:"tabpanel","aria-label":this.bindFn(this.getLabelForTab),children:u(Vt,{children:r=>r===Vf?u(qp,{controller:this.props.controller}):r===_S?u(Lp,{controller:this.props.controller}):this.props.extraTabs?u("div",{class:"dcg-shared-profile-info dcg-shared-account-settings-section",children:this.props.extraTabs().createView(r)}):u("span",{})},()=>this.settingsView)})]})})}getTabs(){let r=[{key:Vf,label:this.bindFn(this.profileTitle),class:"profile-view-button"},{key:_S,label:this.const(this.controller.s("shared-title-security")),class:"dcg-security-view-button"}];return this.props.extraTabs?[...r,...this.props.extraTabs().tabs.map(({key:n,narrowLabel:o,wideLabel:a,className:i})=>({key:n,label:()=>this.windowWidth>this.breakPoint?o():a(),class:i}))]:r}updateSettingsView(r){this.settingsView=r,this._isMounted&&this.update()}handleTablistKeyDown(r){var p;if(!this.tablistElement||!ha(r))return;let n=tt(r);if(!Ds(n,"direction")&&!Ds(n,"line"))return;r.preventDefault();let o='[role="tab"]',a=Array.from(this.tablistElement.querySelectorAll(o));if(!a)return;let i=(p=document.activeElement)==null?void 0:p.closest(o);if(!i)return;let s=a.indexOf(i),c=0;n==="Up"||n==="Left"?c=(s-1+a.length)%a.length:n==="Down"||n==="Right"?c=(s+1)%a.length:n==="Home"?c=0:n==="End"&&(c=a.length-1);let l=a[c];l&&l.focus()}getLabelForTab(){let r=this.getTabs().find(n=>n.key===this.settingsView);return r==null?void 0:r.label()}profileTitle(){return this.windowWidth>this.breakPoint?this.i18n.s("shared-title-profile-information-wide"):this.i18n.s("shared-title-profile-information-narrow")}measureWindow(){return this.windowWidth=ge(window).width()}didMount(){ge(window).on("resize.account-dialog",Md(()=>{this.measureWindow(),this._isMounted&&this.update()},200))}didUnmount(){ge(window).off("resize.account-dialog")}};var Bp=class extends K{constructor(){super(...arguments);this.controller=this.props.controller();this.formErrors=[]}template(){return u(vr,{title:()=>this.controller.s("shared-title-change-email-address"),size:this.const("narrow"),onClose:()=>this.controller.dispatch({type:"close-modal"}),i18n:this.props.controller,children:N("div",{class:"dcg-shared-change-email dcg-shared-account-dialog",children:[u("div",{class:"dcg-shared-account-paragraph",children:()=>this.controller.s("shared-message-set-new-email-address")}),N("form",{onSubmit:this.bindFn(this.onSubmit),method:"post",class:"dcg-shared-email-form-container",children:[N("label",{children:[u("span",{class:"dcg-shared-input-title",children:()=>this.controller.s("shared-label-new-email-address")}),u(At,{type:this.const("email"),pattern:this.const(Hs),name:this.const("newEmail"),class:this.const("dcg-input-blue-outline"),"aria-label":()=>this.controller.s("shared-label-new-email-address"),required:this.const("true"),didMount:r=>{dn||r.focus()},value:()=>this.newEmail,onInput:r=>{this.newEmail=r,this._isMounted&&this.update()}})]}),N("label",{for:"password",children:[u("span",{children:()=>this.controller.s("shared-label-password")}),u(At,{type:this.const("password"),class:this.const("dcg-input-blue-outline"),"aria-label":()=>this.controller.s("shared-label-password"),required:this.const("true"),value:()=>this.password,name:this.const("password"),onInput:r=>{if(this.password=r,this._isMounted)return this.update()}})]}),u(Fr,{controller:this.props.controller,errors:()=>this.formErrors}),u("div",{class:"dcg-shared-sign-in-options",children:u("button",{class:()=>({"dcg-btn-blue":!0,"dcg-disabled":!this.submitEnabled()}),"aria-disabled":()=>!this.submitEnabled(),tabIndex:()=>this.submitEnabled()?"0":"-1",type:"submit",children:()=>this.controller.s("shared-button-change-email-and-password")})})]})]})})}submitEnabled(){return!!(this.password&&this.newEmail)}async onSubmit(r){if(r.preventDefault(),this.submitEnabled())try{await this.controller.userController.setEmail({changeToken:this.getChangeToken(),password:this.password,newEmail:this.newEmail,lang:this.controller.getLanguage()}),this.controller.dispatch({type:"close-modal"}),history.replaceState(null,null,document.location.pathname)}catch(n){if(!this._isMounted)return;this.formErrors=xe.parseErrorMessages(n,this.controller.s),this.update()}}getChangeToken(){return this.controller.userController.getEmailChangeToken()||""}};var Vp=class extends K{constructor(){super(...arguments);this.controller=this.props.controller();this.email=this.props.controller().emailForResetPassword||"";this.formErrors=[];this.isSubmittingForm=!1;this.didSendRecoveryEmail=!1}template(){return u(vr,{title:()=>this.controller.s("shared-title-recover-password"),size:this.const("tiny"),class:this.const("dcg-authentication-modal"),onClose:()=>this.controller.dispatch({type:"close-modal"}),i18n:this.props.controller,withBackButton:()=>this.bindFn(this.onBack),withStickyTitle:this.const(!0),children:N("div",{class:"dcg-shared-recover-password-dialog dcg-shared-account-dialog",children:[u(Fr,{controller:this.props.controller,errors:()=>this.formErrors}),u(J,{predicate:()=>this.didSendRecoveryEmail,children:()=>N("div",{role:"alert",class:"dcg-shared-account-paragraph",children:[()=>this.controller.s("shared-message-check-email-for-password-recovery-link")," ",u("a",{href:"#",class:"dcg-blue-link",onTap:()=>(this.didSendRecoveryEmail=!1,this.controller.dispatch({type:"show-modal",modal:"recover-password"})),children:()=>this.controller.s("shared-button-try-again")})]})}),u(J,{predicate:()=>!this.didSendRecoveryEmail,children:()=>N("form",{class:"dcg-shared-email-form-container",onSubmit:this.bindFn(this.onSubmit),children:[u("div",{class:"dcg-shared-account-paragraph",children:()=>this.controller.s("shared-prompt-enter-email-for-password-recovery-link")}),u("div",{class:"dcg-authentication-modal__control",children:N("label",{children:[()=>this.controller.s("shared-label-email"),u(At,{type:this.const("email"),pattern:this.const(Hs),name:this.const("email"),class:()=>({"dcg-input-blue-outline":!0,"dcg-authentication-modal__input":!0,"dcg-authentication-modal__input--email":!0}),"aria-label":()=>this.controller.s("shared-label-email"),required:this.const("true"),didMount:r=>{dn||(r.focus(),r.select())},value:()=>this.email,onInput:r=>{this.email=r,this._isMounted&&this.update()}})]})}),N("div",{class:"dcg-shared-sign-in-options",children:[u(J,{predicate:()=>this.isSubmittingForm,children:()=>u("div",{class:"dcg-shared-progress-indicator dcg-shared-create-account-progress",children:u("div",{class:"dcg-shared-spinner"})})}),u(J,{predicate:()=>!this.isSubmittingForm,children:()=>u("button",{class:()=>({"dcg-btn-blue":!0,"dcg-authentication-modal__button":!0,"dcg-authentication-modal__button-no-top-padding":!0,"dcg-disabled":this.isSubmitButtonDisabled()}),disabled:()=>this.isSubmitButtonDisabled()||void 0,type:"submit",children:()=>this.controller.s("shared-button-recover-password")})})]})]})})]})})}onBack(){this.controller.dispatch({type:"show-modal",modal:"authentication"})}isSubmitButtonDisabled(){return!this.email}onSubmit(r){r.preventDefault(),this.submitForm()}async submitForm(){this.formErrors=[],this.isSubmittingForm=!0;try{if(await this.controller.userController.recoverPassword({email:this.email,lang:this.controller.getLanguage()}),!this._isMounted)return;this.didSendRecoveryEmail=!0}catch(r){if(!this._isMounted)return;this.formErrors=xe.parseErrorMessages(r,this.controller.s)}finally{this._isMounted&&(this.isSubmittingForm=!1,this.update())}}};var $p=class extends K{constructor(){super(...arguments);this._viewName="Textarea"}computeValue(){let r=this.props.value();return r==null?"":`${r}`}template(){let{disabled:r,readOnly:n}=this.props,o={...this.props,children:this.const(this.computeValue()),onInput:(a=>{this.props.onInput(a.target.value),this._isMounted&&this.update()}).bind(this)};return r&&(o.disabled=()=>r()?!0:void 0),n&&(o.readOnly=()=>n()?!0:void 0),o.onMount=a=>{this.rootDOM=a,this.props.onMount&&this.props.onMount(a)},delete o.value,br("textarea",o)}didUpdate(){let r=this.computeValue();this.rootDOM.value!==r&&(this.rootDOM.value=r)}};function LS(e){return xe.post("/api/v1/partner_email",{body:e})}var fl=class extends K{constructor(){super(...arguments);this.controller=this.props.controller();this.emailSendStatus="idle"}init(){this.controller.userController.isLoggedIn()&&(this.name=this.controller.userController.getFullName(),this.email=this.controller.userController.getEmail())}template(){return u(vr,{title:()=>"Contact Us",size:this.const("medium"),onClose:()=>this.controller.dispatch({type:"close-modal"}),i18n:this.props.controller,children:dr(()=>this.emailSendStatus==="success",{true:()=>N("div",{class:"dcg-success-container",children:[u("i",{class:"dcg-icon-check dcg-success-icon","aria-hidden":"true"}),u("div",{"aria-live":"assertive","aria-atomic":"true",children:()=>this.controller.s("frontpage-text-partners-email-sent")})]}),false:()=>N("form",{onSubmit:this.bindFn(this.submitContactUsForm),class:"dcg-partner-form",children:[N("div",{class:"dcg-input-container",children:[u("label",{for:"partner-name",children:()=>this.controller.s("frontpage-label-partners-your-name")}),u(At,{type:this.const("text"),name:this.const("partner-name"),id:this.const("partner-name"),class:this.const("dcg-input-blue-outline"),autocomplete:this.const("off"),required:this.const(!0),onInput:r=>this.setUserName(r),value:this.bindFn(this.getUserName),didMount:this.bindFn(this.focusInput)})]}),N("div",{class:"dcg-input-container",children:[u("label",{for:"partner-email",children:()=>this.controller.s("frontpage-label-partners-your-email")}),u(At,{type:this.const("email"),name:this.const("partner-email"),id:this.const("partner-email"),class:this.const("dcg-input-blue-outline"),required:this.const(!0),onInput:r=>this.setEmail(r),value:this.bindFn(this.getEmail)})]}),N("div",{class:"dcg-input-container",children:[u("label",{for:"partner-company-website",children:()=>this.controller.s("frontpage-label-partners-company-website")}),u(At,{type:this.const("text"),name:this.const("partner-company-website"),id:this.const("partner-company-website"),class:this.const("dcg-input-blue-outline"),onInput:r=>this.setCompany(r),value:this.bindFn(this.getCompany)})]}),N("div",{class:"dcg-input-container",children:[u("label",{for:"partner-details",children:()=>this.controller.s("frontpage-label-partners-how-work-with-us")}),u($p,{class:this.const("dcg-input-blue-outline"),name:this.const("partner-details"),id:this.const("partner-details"),value:()=>this.getMessage(),onInput:this.bindFn(this.setMessage),required:this.const(!0)})]}),N("div",{class:"dcg-action-buttons",children:[N("div",{children:[u(J,{predicate:()=>this.emailSendStatus==="sending",children:()=>u("div",{"aria-live":"assertive","aria-atomic":"true",children:()=>this.controller.s("frontpage-label-partners-sending")})}),u(J,{predicate:()=>this.emailSendStatus==="error",children:()=>u("div",{"aria-live":"assertive","aria-atomic":"true",children:()=>this.controller.s("frontpage-error-something-went-wrong-try-again-later")})})]}),u("button",{type:"submit",class:()=>({"dcg-btn-blue":!0,"dcg-disabled":this.isFormSubmissionDisabled()==="disabled"}),"aria-disabled":this.bindFn(this.isFormSubmissionDisabled),children:()=>this.controller.s("frontpage-label-partners-send")})]})]})})})}focusInput(r){r.focus()}getUserName(){return this.name||""}setUserName(r){this.name=r,this.update()}getEmail(){return this.email||""}setEmail(r){this.email=r,this.update()}getCompany(){return this.company||""}setCompany(r){this.company=r,this.update()}getMessage(){return this.message||""}setMessage(r){this.message=r,this.update()}isFormSubmissionDisabled(){if(!this.name||!this.email||!this.message||this.emailSendStatus==="sending")return"disabled"}async submitContactUsForm(r){if(r.preventDefault(),this.isFormSubmissionDisabled()==="disabled")return;this.emailSendStatus="sending",this.update();let n={name:this.getUserName(),email:this.getEmail(),website:this.getCompany(),message:this.getMessage()};try{await LS(n),this.emailSendStatus="success"}catch(o){this.emailSendStatus="error"}finally{this.update()}}};var Gp=class extends K{getFrontpageModal(){let t=this.props.controller().getModal();return t&&lT(t)?t:void 0}template(){return Yr(()=>this.getFrontpageModal(),t=>xr(t,{authentication:()=>u(Np,{controller:this.props.controller}),"account-reenabled":()=>u(_p,{controller:this.props.controller}),"recover-password":()=>u(Vp,{controller:this.props.controller}),"account-settings":()=>u(Fp,{controller:this.props.controller}),"change-email":()=>u(Bp,{controller:this.props.controller}),"partner-contact-us":()=>u(fl,{controller:this.props.controller}),"small-screen-language":()=>u(xp,{currentLang:()=>this.props.controller().getLanguage(),onLangChosen:r=>{this.props.controller().dispatch({type:"fetch-language",code:r})},onClose:()=>this.props.controller().dispatch({type:"close-modal"})})}))}};var OD=Vd(),FD={en:{code:"en",display_name:"English"},de:{code:"de",display_name:"Deutsch"},es:{code:"es",display_name:"Espa\xF1ol (LATAM)"},et:{code:"et",display_name:"Eesti"},fr:{code:"fr",display_name:"Fran\xE7ais"},"fr-CA":{code:"fr-CA",display_name:"Fran\xE7ais (Canada)"},id:{code:"id",display_name:"Bahasa Indonesia"},it:{code:"it",display_name:"Italiano"},ja:{code:"ja",display_name:"\u65E5\u672C\u8A9E"},ko:{code:"ko",display_name:"\uD55C\uAD6D\uC5B4"},nl:{code:"nl",display_name:"Nederlands"},pl:{code:"pl",display_name:"Polski"},"pt-BR":{code:"pt-BR",display_name:"Portugu\xEAs (Brasil)"},ru:{code:"ru",display_name:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},"sv-SE":{code:"sv-SE",display_name:"Svenska"},th:{code:"th",display_name:"\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"},tr:{code:"tr",display_name:"T\xFCrk\xE7e"},vi:{code:"vi",display_name:"Ti\u1EBFng Vi\u1EC7t"},"zh-CN":{code:"zh-CN",display_name:"\u7B80\u4F53\u4E2D\u6587"},"zh-TW":{code:"zh-TW",display_name:"\u7E41\u9AD4\u4E2D\u6587"}},Up=class extends K{constructor(){super(...arguments);this.controller=this.props.controller()}template(){return u(J,{predicate:this.bindFn(this.isDisplayed),children:()=>u(fa,{tooltip:()=>({message:re("shared-calculator-button-language")}),containerClassMap:this.const({"dcg-language-picker-container":!0}),anchorAriaLabel:()=>re("shared-calculator-button-language"),openState:()=>({isOpen:this.controller.isHeaderMenuOpen("language"),setDropdownOpen:r=>this.controller.dispatch({type:"set-header-menu-open",menu:"language",isOpen:r})}),orientation:this.const("bottom-right"),popoverClassMap:this.const({"dcg-language-picker-dropdown":!0}),anchorClassMap:this.const({"dcg-language-picker-anchor":!0}),width:this.const(310),anchor:()=>u("div",{class:()=>{var r,n;return{"dcg-language-picker__anchor-container":!0,"dcg-language-picker__anchor-container--light":!!((n=(r=this.props).isLight)!=null&&n.call(r))}},children:u("i",{class:this.const("dcg-icon-language"),"aria-hidden":"true"})}),popoverBody:()=>N(Dr,{children:[u("h2",{class:"dcg-unstyled-heading dcg-dropdown-popover__title",children:()=>this.controller.s("shared-title-language-menu")}),u(Fs,{i18n:this.props.controller,getAllLangs:()=>{var r,n;return(n=(r=this.props).showAllLanguages)!=null&&n.call(r)?OD:FD},onLangChosen:this.bindFn(this.onLangChosen),currentLang:()=>this.controller.getLanguage()})]})})})}isDisplayed(){return this.controller.getShowLanguagePicker()}onLangChosen(r){Qa(r).then(()=>{this.controller.dispatch({type:"set-language",language:r})})}};var zp=class extends K{template(){return u(pt,{when:this.props.isDisplayed,children:u("div",{class:"dcg-header-print-button-container",children:u(qr,{tooltip:()=>re("shared-calculator-button-print"),gravity:this.const("s"),children:u("i",{role:"button",tabIndex:"0","aria-label":()=>re("shared-calculator-button-print"),class:"dcg-icon-print",onTap:()=>window.print()})})})})}};var BD=[{href:"/calculator",name:"graphing",text:()=>re("frontpage-link-shared-graphing-calculator")},{href:"/scientific",name:"scientific",text:()=>re("frontpage-link-shared-scientific-calculator")},{href:"/fourfunction",name:"fourfunction",text:()=>re("frontpage-link-shared-four-function-calculator")},{href:"/notebook",name:"notebook",text:()=>re("frontpage-link-shared-notebook")},{href:"/matrix",name:"matrix",text:()=>re("frontpage-link-shared-matrix-calculator")},{href:"/geometry",name:"geometry-calculator",text:()=>re("frontpage-link-shared-geometry-tool")},{href:"/3d",name:"graphing-3d",text:()=>re("frontpage-link-shared-3d-calculator")}],VD=[{href:"/about",text:()=>re("frontpage-link-shared-about-us")},{href:"/careers",text:()=>re("frontpage-link-shared-careers")},{href:"https://help.desmos.com",text:()=>re("frontpage-link-shared-help-center")},{href:"/accessibility",text:()=>re("shared-calculator-label-accessibility")},{href:"/testing",text:()=>re("frontpage-link-shared-assessments")},{href:"https://help.desmos.com/hc/en-us/articles/4410614482061",text:()=>re("frontpage-link-shared-educator-pd")},{href:"/guiding-principles",text:()=>re("frontpage-link-shared-guiding-principles")},{href:"/design-principles",text:()=>re("frontpage-link-shared-design-principles")},{href:"https://blog.desmos.com",text:()=>re("frontpage-link-shared-blog")}],$D=[{href:"/professional",text:()=>re("frontpage-link-shared-desmos-professional")},{href:"/partners",text:()=>re("frontpage-link-shared-education-partnerships")},{href:"/api",text:()=>re("frontpage-link-shared-api-documentation")}],oi={MATH_TOOLS:{links:BD,title:()=>re("frontpage-link-header-math-tools")},RESOURCES:{links:VD,title:()=>re("frontpage-link-header-resources")},PARTNERSHIPS:{links:$D,title:()=>re("frontpage-link-shared-partnerships")}};var Ks=class extends K{constructor(){super(...arguments);this.controller=this.props.controller()}getContainerClassMap(){return{"dcg-header-link":!0,"dcg-math-tools":this.props.menuType()==="math-tools"}}template(){return u(fa,{anchor:()=>N("span",{class:"dcg-header-link-title-container",children:[u(pt,{when:()=>{var r,n;return(n=(r=this.props).showWorkspace)==null?void 0:n.call(r)},children:u(Za,{controller:this.const(this.controller),workspace:()=>this.controller.userController.getCurrentWorkspace()})}),u("span",{class:"dcg-header-link-title-toplevel",children:this.props.title}),u("i",{class:"dcg-icon-caret-down","aria-hidden":"true"})]}),anchorTargetSubselector:this.const(".dcg-icon-caret-down"),offsetFromAnchor:this.const(-3),anchorAriaLabel:this.props.ariaLabel,containerClassMap:this.bindFn(this.getContainerClassMap),orientation:this.const("bottom-left"),popoverClassMap:this.props.popoverClassMap,popoverBody:this.props.children,openState:()=>({isOpen:this.controller.isHeaderMenuOpen(this.props.menuType()),setDropdownOpen:r=>this.controller.dispatch({type:"set-header-menu-open",menu:this.props.menuType(),isOpen:r})})})}},Hp=class extends K{constructor(){super(...arguments);this.controller=this.props.controller()}template(){return N("header",{class:"dcg-header-container",didMount:this.bindFn(this.didMountRoot),didUnmount:this.bindFn(this.didUnmountRoot),children:[u(pt,{when:()=>this.controller.shouldShowUpcomingMaintenanceNotice(),children:N("div",{role:"banner",class:"dcg-top-banner",children:[u("i",{class:"dcg-icon-maintenance","aria-hidden":"true"}),()=>zT(this.controller.getLanguage(),this.controller.s)," ",u("a",{role:"link",tabIndex:0,target:"_blank",href:"https://help.desmos.com/hc/en-us/articles/29072368846093-Maintenance-Mode",children:()=>this.controller.s("graphing-calculator-link-learn-more")})]})}),u(pt,{when:()=>this.controller.shouldShowTopBanner(),children:N("div",{role:"banner",class:"dcg-top-banner",children:[()=>this.controller.s("frontpage-text-header-terms-update"),u("a",{class:"dcg-blue-link",target:"_blank",href:"https://blog.desmos.com/articles/desmos-studio-terms-update/",children:()=>this.controller.s("frontpage-text-header-terms-update-link")})]})}),N("div",{class:"dcg-main-header-container",children:[u("div",{class:"dcg-header-left-content",children:u("a",{class:"dcg-home-link",href:"/",children:u(bp,{})})}),N("nav",{class:"dcg-header-center-content",children:[u(Ks,{title:oi.MATH_TOOLS.title,menuType:this.const("math-tools"),controller:this.props.controller,popoverClassMap:this.const({"dcg-frontpage-header-options-popover":!0}),children:()=>N("ul",{class:"dcg-unstyled-list",children:[u(Ye,{each:()=>oi.MATH_TOOLS.links,children:r=>u("li",{children:N("a",{href:()=>r().href,class:"dcg-dropdown-link dcg-shared-product-icon-container",onTap:()=>$o({category:"navigation",action:uT(r().name),name:"menu"}),children:[u("div",{class:"dcg-math-tool-icon-container",children:u(yp,{name:()=>r().name,ariaHidden:this.const("true"),iconOverride:()=>r().name==="notebook"?"notebook-inside":r().name})}),u("span",{class:"dcg-dropdown-text",children:()=>r().text()})]})})},({href:r})=>r),u("li",{class:"dcg-app-links",children:N(Kn,{i18n:this.const(this.controller),children:["Download our apps in the"," ",u("a",{class:"dcg-blue-link",href:"https://play.google.com/store/apps/developer?id=Desmos+Inc",children:"Google Play Store"})," ","and"," ",u("a",{class:"dcg-blue-link",href:"https://apps.apple.com/us/developer/desmos/id653517543",children:"iOS App Store"}),"."]},this.const("frontpage-text-header-app-links"))})]})}),u(Ks,{title:oi.RESOURCES.title,menuType:this.const("resources"),controller:this.props.controller,popoverClassMap:this.const({"dcg-frontpage-header-options-popover":!0}),children:()=>u("ul",{class:"dcg-unstyled-list",children:u(Ye,{each:()=>oi.RESOURCES.links,children:r=>u("li",{children:u("a",{href:()=>r().href,class:"dcg-dropdown-link",children:()=>r().text()})})},({href:r})=>r)})}),u(Ks,{title:oi.PARTNERSHIPS.title,menuType:this.const("partnerships"),controller:this.props.controller,popoverClassMap:this.const({"dcg-frontpage-header-options-popover":!0}),children:()=>u("ul",{class:"dcg-unstyled-list",children:u(Ye,{each:()=>oi.PARTNERSHIPS.links,children:r=>u("li",{children:N("a",{href:()=>r().href,class:"dcg-dropdown-link dcg-dropdown-link--tagged",children:[u("span",{class:"dcg-header__link-text",children:()=>r().text()}),u(pt,{when:()=>r().href==="/professional",children:u("span",{class:"dcg-header__link-tag",children:()=>this.controller.s("frontpage-text-professional-link-tag")})})]})})},({href:r})=>r)})})]}),N("div",{class:"dcg-header-right-content",children:[u(pt,{when:()=>!this.hideAccounts(),children:N("div",{children:[u(pt,{when:()=>this.controller.userController.getLoginStatus()==="not-checked",children:u("div",{class:"dcg-frontpage-account-container"})}),u(pt,{when:()=>this.controller.userController.getLoginStatus()==="logged-out",children:N("div",{class:"dcg-frontpage-account-container",children:[u("button",{class:"dcg-log-in dcg-btn-gray-outline",onTap:()=>{this.controller.dispatch({type:"show-modal",modal:"authentication",fromButton:"log-in"})},children:()=>this.controller.s("frontpage-link-shared-log-in")}),u("button",{class:"dcg-sign-up dcg-btn-blue",onTap:()=>{this.controller.dispatch({type:"show-modal",modal:"authentication",fromButton:"sign-up"})},children:()=>this.controller.s("shared-button-sign-up")})]})}),u(pt,{when:()=>this.controller.userController.getLoginStatus()==="logged-in",children:u("div",{class:"dcg-account-dropdown-container",children:u(Ks,{title:()=>this.controller.userController.getFirstName(),ariaLabel:()=>this.controller.s("frontpage-button-account-menu"),menuType:this.const("account"),controller:this.props.controller,showWorkspace:this.bindFn(this.showWorkspaceInfo),popoverClassMap:this.const({"dcg-frontpage-account-popover":!0}),children:()=>u(lp,{controller:this.props.controller})})})})]})}),u(Up,{controller:this.props.controller,showAllLanguages:this.props.showAllLanguages}),u(zp,{isDisplayed:this.bindFn(this.shouldShowPrintIcon)})]})]}),u(Gp,{controller:this.props.controller})]})}showWorkspaceInfo(){var r,n;return!(!this.controller.userController.hasTeamWorkspace()||(n=(r=this.props).hideWorkspaces)!=null&&n.call(r))}didMountRoot(r){this.observer=new IntersectionObserver(([n])=>n.target.classList.toggle("dcg-is-pinned",n.intersectionRatio<1),{threshold:[1]}),this.observer.observe(r)}didUnmountRoot(){this.observer.disconnect()}hideAccounts(){return this.props.hideAccounts&&this.props.hideAccounts()}shouldShowPrintIcon(){var r,n;return!!((n=(r=this.props).showPrintIcon)!=null&&n.call(r))}};var Kp=class extends K{template(){return N("div",{id:"navigation",role:"navigation",children:[u(Hp,{controller:this.props.controller,showPrintIcon:this.props.showPrintIcon,showAllLanguages:this.const(!0)}),N("div",{class:"dcg-basic-calculator-footer",children:[u("a",{href:"/terms",children:()=>re("basic-calculator-link-terms-of-service")}),"|",u("a",{href:"/privacy",children:()=>re("basic-calculator-link-privacy-policy")}),"|",u("a",{href:this.props.helpLink,children:()=>re("basic-calculator-link-help")})]})]})}};var OS=Pv(DS(),1);var qS="c36092377d03284490063da5eb3e247140ad7fbb";function UD(e){return e.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&")}var zD=["UnhandledRejection","lnrAppboy","socratic","MyAppGet","SymBrowser_","mobincube_","_avast_submit","Cannot redefine property: googletag","jcarousel","SyntaxError: Unexpected identifier 'script'","__gCrWeb.autofill.extractForms","BrowseITEXT","Can't find variable: removeAllHighlights","aAttribruteValue.parentNode.getAttribute","vid_mate_check","GetImageTagSrcFromPoint","Can't find variable: didEnterViewPort","tinyMCE is not defined","div:has(> iframe[id='198230182308109283091823098102938908128390'])","https://asset.goguardian/asset.js","https://utq.vvipquan.com/suv4/rMainB.bundle.js","https://lottingem.com/re.php","promiseReactionJobWithoutPromise","promiseReactionJob","runTaskInternal","wsimtgo.destroy","wsimtgo_device_info.destroy","global code:1:1","global code:43:3","https://www.desmos.com/__DLD__"],Gf=new RegExp(zD.map(UD).join("|"));function HD(){let e="production";if(location&&location.hostname){let r=location.hostname.split("."),n=r.slice(0,r.length-2).join(".");r.slice(r.length-2).join(".")==="desmos.com"&&(!n||n==="www"?e="production":e=n)}return e}var Wp=class{constructor(){this.numberOfSentErrors=0;this.pageLoadId=ca();this.bugsnagClient=OS.default.start({apiKey:"7f7807097671acbc4557e64bbf5eb529",maxBreadcrumbs:40,appVersion:qS,releaseStage:HD(),onError:t=>this.onError(t),enabledBreadcrumbTypes:["error","navigation","request","user"]})}onError(t){let r=ep;return r&&r[0]<=13||t.originalError instanceof Error&&t.originalError.stack&&Gf.test(t.originalError.stack)||t.errors.some(n=>Gf.test(n.errorClass)||Gf.test(n.errorMessage))?!1:(this.beforeSendCb&&this.beforeSendCb(t),this.attachWebGLReport&&this.attachWebGLReport(t),this.numberOfSentErrors+=1,t.addMetadata("custom",{errorNumber:this.numberOfSentErrors,pageLoadId:this.pageLoadId}),!0)}setBeforeSendCB(t){this.beforeSendCb=t}setAttachWebGLReport(t){this.attachWebGLReport=t}setUserId(t){this.bugsnagClient.setUser(t)}leaveBreadcrumb(t,r,n){if(r){r={...r};for(let o in r)try{r[o]=JSON.stringify(r[o],null,2)}catch(a){r[o]="[[could not stringify]]"}}this.bugsnagClient.leaveBreadcrumb(t,r,n)}notify(t,r){this.bugsnagClient&&this.bugsnagClient.notify(t,n=>(r&&r.metaData&&n.addMetadata("custom",r.metaData),r&&r.context&&(n.context=r.context),r&&r.severity&&(n.severity=r.severity),!0))}};var FS=!1;function BS(){FS||(FS=!0,window.TestBridge={})}function VS(){var e;return(e=document.fonts)!=null&&e.ready?document.fonts.ready:Promise.resolve()}async function $S(e,t){pl(document.body);let r=document.getElementById("main-container");if(!r)throw'Expected to find an element with id="main-container"';let n=ja(e,r,t);return await VS(),document.querySelector(".dcg-loading-div-container").style.display="none",BS(),n}function GS(e,t={}){var r;return/testing/.test(document.location.search)||Nv(new Wp),window.frontpageController=(r=t.frontpageController)==null?void 0:r.call(t),$S(e,{...t,frontpageController:t.frontpageController})}function KD(e){Y1?setTimeout(e,25):requestAnimationFrame(e)}function WD(){let e=window.visualViewport;if(!e)return 1;let t=document.documentElement.clientWidth/e.width,r=document.documentElement.clientHeight/e.height,n=Math.abs(Math.log(t))<Math.abs(Math.log(r))?t:r;return isFinite(n)?n:1}var US=1,Ws={},yl=!1;function HS(){yl=!0,KD(jD)}var zS={};function jD(){zS.rafSPY&&zS.rafSPY(),yl=!1;for(let e in Ws)Ws[e].detectAndEnqueueEvent(),yl=!0;if(yl){HS();for(let e in Ws)Ws[e].dispatchQueuedEvent()}}var bl=class{constructor(t,r){this.destroyed=!1;this.lastOffscreen=!1;this.elt=t,this.cb=r,this.id=US.toString(),this.appliedScale={x:1,y:1},US++}stopWatching(){delete Ws[this.id]}startWatching(){this.checkForChanges(),Ws[this.id]=this,yl||HS()}resetAppliedScalingAndGetBoundingClientRect(){let t=this.elt.getBoundingClientRect();if(this.elt.offsetWidth===0||this.elt.offsetHeight===0)return t;let r={x:t.width/this.elt.offsetWidth,y:t.height/this.elt.offsetHeight};if(r.x===this.appliedScale.x&&r.y===this.appliedScale.y)return t;let n=this.elt.querySelector(".dcg-dom-change-wrapper");return n&&(this.appliedScale=r,Go(n,{transform:"scale("+1/this.appliedScale.x+","+1/this.appliedScale.y+")",width:100*this.appliedScale.x+"%",height:100*this.appliedScale.y+"%",transformOrigin:"0 0"})),t}detectAndEnqueueEvent(){if(this.destroyed)return;let t=!0;if(!(document.body&&document.body.contains(this.elt)))this.lastSize&&(this.lastSize=void 0,this.queuedEvent={type:"removed",target:this.elt,isOffscreen:!0});else{let n=this.resetAppliedScalingAndGetBoundingClientRect(),o=WD();t=n.top>window.innerHeight||n.bottom<0||n.left>window.innerWidth||n.right<0,this.lastSize?(n.width!==this.lastSize.width||n.height!==this.lastSize.height||o!==this.lastSize.pinchZoom||window.devicePixelRatio!==this.lastSize.pixelRatio)&&(this.lastSize.width=n.width,this.lastSize.height=n.height,this.lastSize.pinchZoom=o,this.lastSize.pixelRatio=window.devicePixelRatio,this.queuedEvent={type:"resized",target:this.elt,size:{...this.lastSize},isOffscreen:t}):(this.lastSize={width:n.width,height:n.height,pinchZoom:o,pixelRatio:window.devicePixelRatio},this.queuedEvent={type:"added",target:this.elt,size:{...this.lastSize},isOffscreen:t})}t!==this.lastOffscreen&&(this.lastOffscreen=t,this.queuedEvent||(this.queuedEvent={type:"offscreen-noop",target:this.elt,isOffscreen:t}))}dispatchQueuedEvent(){let t=this.queuedEvent;t&&(this.queuedEvent=void 0,this.cb(t))}checkForChanges(){this.detectAndEnqueueEvent(),this.dispatchQueuedEvent()}destroy(){this.stopWatching();for(let t in this)this.hasOwnProperty(t)&&delete this[t];this.destroyed=!0}};var xl=class{constructor(t){this.eventModel=new ua;if(this.rootElt=t,!t)throw new Error("must pass an HTMLElement to the API")}setupDomChangeDetector(t){this.autoSize=t,this.domChangeDetector=new bl(this.rootElt,r=>{switch(r.type){case"added":this.view=this.onCreateView(),this.onResizeView(r.size);break;case"removed":this.onDestroyView(),this.view=void 0;break;case"resized":this.onResizeView(r.size);break}}),this.autoSize!==!1?this.domChangeDetector.startWatching():this.domChangeDetector.checkForChanges()}detach(){console.warn(".detach() is deprecated. It should no longer be necessary")}destroy(){this.view&&this.onDestroyView(),this.domChangeDetector.destroy();function t(o){console.warn("You've destroyed this API instance. You can no longer call ."+o+"()")}let r={},n=this;for(;n;)Object.getOwnPropertyNames(n).forEach(a=>r[a]=!0),n=Object.getPrototypeOf(n);for(let o in r)typeof this[o]=="function"?this[o]=t.bind(this,o):this.hasOwnProperty(o)&&delete this[o];this.destroy=function(){}}resize(){this.domChangeDetector.checkForChanges()}updateView(){this.view&&document.body&&document.body.contains(this.rootElt)&&this.view.update()}triggerEvent(t,r){this.eventModel.triggerEvent(t,r)}observeEvent(t,r){this.eventModel.observeEvent(t,r)}unobserveEvent(t){this.eventModel.unobserveEvent(t)}};function Uf(e){return e==="es-ES"?(console.warn("{language: 'es-ES'} has been deprecated. Proceeding with {language: 'es'}"),"es"):e}function zf(e){return vl(e)?(e.match(/^#([A-Fa-f0-9]{3})$/g)&&(e="#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),e.toLowerCase()):e}function vl(e){return typeof e=="string"&&(e.match(/^#([A-Fa-f0-9]{3})$/g)||e.match(/^#([A-Fa-f0-9]{6})$/g))}var mn={RED:"#c74440",BLUE:"#2d70b3",GREEN:"#348543",PURPLE:"#6042a6",ORANGE:"#fa7e19",BLACK:"#000000",GRAY:"#aaaaaa",LIGHT_GRAY:"#cccccc",CHARCOAL_BLUE:"#475569",FOCUS_OUTLINE:"#2f72dc",FOCUS_OUTLINE_OUTER:"#fff"},T9={RED:mn.RED,BLUE:mn.BLUE,GREEN:mn.GREEN,ORANGE:mn.ORANGE,PURPLE:mn.PURPLE,GRAY:mn.GRAY};var QD=0,YD="guid_"+Math.round(Math.random()*1e6)+"_"+new Date().getTime()+"_",Hf=class{constructor(t){this.__observers={},this.guid=YD+ ++QD,t&&this.setProperties(t)}unobserveAll(){this.__observers={}}getProperty(t){return this[t]}setProperty(t,r){let n=this[t];this.setPropertyWithoutNotifying(t,r),!Qe(n,r)&&this.notifyPropertyChange(t)}setPropertyWithoutNotifying(t,r){this[t]=r}setProperties(t){let r=[];for(let n of Qr(t)){let o=this[n];this.setPropertyWithoutNotifying(n,t[n]),Qe(o,t[n])||r.push(n)}r.forEach(n=>this.notifyPropertyChange(n))}notifyPropertyChange(t){nf(this.__observers,t,this)}observe(t,r){af(this.__observers,t,r)}unobserve(t){of(this.__observers,t)}observeAndSync(t,r){this.observe(t,r);let n=t.split(" ");for(let o=0;o<n.length;o++){let i=n[o].split(".")[0];this.hasOwnProperty(i)&&r(i,this)}}},KS=Hf;function WS(e){return 48<=e&&e<=57}function XD(e){return 97<=e&&e<=122}function ZD(e){return 65<=e&&e<=90}function jp(e){return XD(e)||ZD(e)}function Qp(e){return e===92}function Kf(e){return e===39}function jS(e){if(9<=e&&e<=13||8192<=e&&e<=8202)return!0;switch(e){case 32:case 160:case 5760:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0;default:return!1}}function Gt(e,t,r){return{input:e,start:t,end:r}}function tn(e,t){return Gt(e,t,t)}function Zt(e,t){if(e.input!==t.input)throw new Error("Programming Error: cannot form a span on different inputs");return Gt(e.input,e.start,t.end)}function Ut(e){return e.input.slice(e.start,e.end)}function jn(e,t){return Zt(e.token.span,t.prevSpan)}function Br(e,t,r){return{type:e,span:t,val:r}}function YS(e,t,r,n){return{input:e,prevSpan:t,pos:r,token:n}}function Yp(e){return XS(e,0,tn(e,0))}function XS(e,t,r){for(;jS(e.charCodeAt(t));)t+=1;let n=rq(e,t);return YS(e,r,t,n)}function Jt(e){return XS(e.input,e.token.span.end,e.token.span)}function JD(e,t,r){let n=nq(e,t);return YS(e,r,t,n)}function ZS(e){return JD(e.input,e.token.span.end,e.token.span)}function wr(e){return e.token}function Tr(e,t){if(wr(e).type!==t)throw new Error(`Parse Error: expected ${t}.`);return Jt(e)}function ai(e,t){return wr(e).type===t}function Ho(e){return e.pos>=e.input.length}var eq={"[":"[","]":"]","{":"{","}":"}","^":"^",_:"_","&":"&"},tq={"\\\\":"\\\\"};function rq(e,t){let r=t;if(t>=e.length)return Br("EOF",tn(e,t),"");let n=e.charCodeAt(t);if(WS(n)){let o=Gt(e,r,t+1);return Br("Digit",o,e.charAt(r))}else if(jp(n)){let o=Gt(e,r,t+1);return Br("Letter",o,e.charAt(r))}else if(Qp(n))if(t+=1,jp(e.charCodeAt(t))){for(;jp(e.charCodeAt(t));)t+=1;let o=Gt(e,r,t),a=Ut(o);return Br(a==="\\left"?"Left":a==="\\right"?"Right":a==="\\begin"?"Begin":a==="\\end"?"End":a==="\\text"?"Text":"Cmd",o,a)}else{t+=1;let o=Gt(e,r,t),a=Ut(o),i=tq[a]||"EscapedSymbol";return Br(i,o,a)}else if(Kf(n)){for(t+=1;Kf(e.charCodeAt(t));)t+=1;if(e.charAt(t)==="^"){t+=1;let o=Gt(e,r,t),a=Ut(o);return Br("Primes^",o,a)}else{let o=Gt(e,r,t),a=Ut(o);return Br("Primes",o,a)}}else{let o=Gt(e,r,t+1),a=e.charAt(r),i=eq[a]||"Symbol";return Br(i,o,a)}}function nq(e,t){if(t>=e.length)return Br("EOF",tn(e,t),"");let r=t,n=!0;for(;t<e.length;){let i=e.charAt(t);if(i==="}"&&n)break;i==="\\"?n=!n:n=!0,t+=1}let o=Gt(e,r,t),a=Ut(o);return Br("TextGroup",o,a)}function Xp(e){let t=Yp(e),r=0;for(;!Ho(t);)r+=1,t=Jt(t);return r}function JS(e,t){return{latex:e,startIndex:t,endIndex:t,anchorIndex:t,headIndex:t}}var oq={loga:(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"\\log_{}\\left(\\right)")&&(e.write("\\log_{}"),e.typedText("("),e.keystroke("Left"),e.keystroke("Down"))},nthroot:(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"\\sqrt[]{}")&&(e.write("\\sqrt[]{}"),e.keystroke("Left"),e.keystroke("Left"))},ddx:(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"\\frac{d}{dx}")&&e.write("\\frac{d}{dx}")},arcsin:(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"\\sin^{-1}\\left(\\right)")&&(e.write("sin^{-1}"),e.typedText("("))},arccos:(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"\\cos^{-1}\\left(\\right)")&&(e.write("cos^{-1}"),e.typedText("("))},arctan:(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"\\tan^{-1}\\left(\\right)")&&(e.write("tan^{-1}"),e.typedText("("))},arcsec:(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"\\sec^{-1}\\left(\\right)")&&(e.write("sec^{-1}"),e.typedText("("))},arccsc:(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"\\csc^{-1}\\left(\\right)")&&(e.write("csc^{-1}"),e.typedText("("))},arccot:(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"\\cot^{-1}\\left(\\right)")&&(e.write("cot^{-1}"),e.typedText("("))},"A^T":(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"^{T}")&&(e.typedText("^T"),e.keystroke("Right"))},"A^-1":(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"^{-1}")&&(e.typedText("^-1"),e.keystroke("Right"))},"A^2":(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"^{2}")&&(e.typedText("^2"),e.keystroke("Right"))},"a^2":(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"^{2}")&&(e.typedText("^2"),e.keystroke("Right"))},"a^3":(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"^{3}")&&(e.typedText("^3"),e.keystroke("Right"))},"a/b":(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"\\frac{}{}")&&(e.write("\\frac{}{}"),e.keystroke("Left"))},integral:(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"\\int_{}^{}")&&(e.write("\\int"),e.keystroke("Down"))},sqrt:(e,t)=>{Ve.canAcceptText(e,t.capExpressionSize,"\\sqrt{}")&&(e.write("\\sqrt{}"),e.keystroke("Left"))}};function Zp(e,t,r){oq[t](e,r)}function tM(e){if(window.clipboardData&&window.clipboardData.getData)return window.clipboardData.getData("Text");if(e&&e.clipboardData&&e.clipboardData.getData)return e.clipboardData.getData("text/plain")}function Wf(e){let t;if(typeof e=="number")t=e+"";else if(typeof e=="string")t=e;else return!1;return!!t.trim().match(/^-?[0-9]*\.?[0-9]*$/)}var fo={delimiter:"",header:!1,dynamicTyping:!1,preview:0,step:void 0,encoding:"",comments:!1,complete:void 0,error:void 0,download:!1,chunk:void 0,keepEmptyRows:!1},zt={};zt.parse=aq;zt.RECORD_SEP="";zt.UNIT_SEP="";zt.BYTE_ORDER_MARK="\uFEFF";zt.BAD_DELIMITERS=["\r",`
`,'"',zt.BYTE_ORDER_MARK];zt.LocalChunkSize=1024*1024*10;zt.RemoteChunkSize=1024*1024*5;zt.DefaultDelimiter=",";zt.Parser=Jp;zt.ParserHandle=rM;function aq(e,t){var r=iq(t),n=new rM(r),o=n.parse(e);return o}function rM(e){var t=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,r=this,n,o,a=!1,i,s=[],c={data:[],errors:[],meta:{}};e=jf(e),this.parse=function(w){if(i=!1,!e.delimiter){var k=M(w);k.successful?e.delimiter=k.bestDelimiter:(i=!0,e.delimiter=zt.DefaultDelimiter),c.meta.delimiter=e.delimiter}if(js(e.step)){var V=e.step;e.step=function(j){c=j,p()?l():V(l(),r)}}return e.preview&&e.header&&e.preview++,n=w,o=new Jp(e),c=o.parse(n),l(),js(e.complete)&&!a&&e.complete(c),a?{meta:{paused:!0}}:c},this.pause=function(){a=!0,o.abort(),n=n.substr(o.getCharIndex())},this.resume=function(){a=!1,o=new Jp(e),o.parse(n),js(e.complete)&&!a&&e.complete(c)},this.abort=function(){o.abort(),js(e.complete)&&e.complete(c),n=""};function l(){return c&&i&&(T("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+zt.DefaultDelimiter+"'"),i=!1),p()&&y(),x()}function p(){return e.header&&s.length==0}function y(){if(c){for(var w=0;p()&&w<c.data.length;w++)for(var k=0;k<c.data[w].length;k++)s.push(c.data[w][k]);c.data.splice(0,1)}}function x(){if(!c||!e.header&&!e.dynamicTyping)return c;for(var w=0;w<c.data.length;w++){for(var k={},V=0;V<c.data[w].length;V++){if(e.dynamicTyping){var j=c.data[w][V];j=="true"?c.data[w][V]=!0:j=="false"?c.data[w][V]=!1:c.data[w][V]=L(j)}e.header&&(V>=s.length?(k.__parsed_extra||(k.__parsed_extra=[]),k.__parsed_extra.push(c.data[w][V])):k[s[V]]=c.data[w][V])}e.header&&(c.data[w]=k,V>s.length?T("FieldMismatch","TooManyFields","Too many fields: expected "+s.length+" fields but parsed "+V,w):V<s.length&&T("FieldMismatch","TooFewFields","Too few fields: expected "+s.length+" fields but parsed "+V,w))}return e.header&&c.meta&&(c.meta.fields=s),c}function M(w){for(var k=[",","	","|",";",zt.RECORD_SEP,zt.UNIT_SEP],V,j,te,Te=0;Te<k.length;Te++){var P=k[Te],D=0,B=0;te=void 0;for(var I=new Jp({delimiter:P,preview:10}).parse(w),oe=0;oe<I.data.length;oe++){var Ie=I.data[oe].length;if(B+=Ie,typeof te=="undefined"){te=Ie;continue}else Ie>1&&(D+=Math.abs(Ie-te),te=Ie)}B/=I.data.length,(typeof j=="undefined"||D<j)&&B>1.99&&(j=D,V=P)}return e.delimiter=V,{successful:!!V,bestDelimiter:V}}function L(w){var k=t.test(w);return k?parseFloat(w):w}function T(w,k,V,j){c.errors.push({type:w,code:k,message:V,row:j})}}function Jp(e){var t=/^\s*$/,r,n,o,a,i,s,c,l,p,y,x,M,L,T,w,k=!1;e=e||{},n=e.delimiter,o=e.comments,a=e.step,s=e.preview,(typeof n!="string"||n.length!=1||zt.BAD_DELIMITERS.indexOf(n)>-1)&&(n=","),o===!0?o="#":(typeof o!="string"||o.length!=1||zt.BAD_DELIMITERS.indexOf(o)>-1||o==n)&&(o=!1),this.parse=function(qe){if(typeof qe!="string")throw"Input must be a string";return bt(qe),V()},this.abort=function(){k=!0},this.getCharIndex=function(){return l};function V(){for(;l<r.length&&!(k||s>0&&w>=s);)c=='"'?Te():p?P():D(),j();return te()}function j(){l++,c=r[l]}function te(){if(k&&Ct("Abort","ParseAbort","Parsing was aborted by the user's step function"),p&&Ct("Quotes","MissingQuotes","Unescaped or mismatched quotes"),yr(),!js(a))return Wr()}function Te(){$a()&&!lo()?p=!p:(oe(),p&&lo()?l++:Ct("Quotes","UnexpectedQuotes","Unexpected quotes"))}function P(){(_o(l)||Lo(l))&&y++,oe()}function D(){c==n?Ie():_o(l)?(_t(),j()):Lo(l)?_t():B()?I():oe()}function B(){if(!o)return!1;var qe=l==0||Lo(l-1)||_o(l-2);return qe&&r[l]===o}function I(){for(;!_o(l)&&!Lo(l)&&l<r.length;)j()}function oe(){x[L][T]+=c}function Ie(){x[L].push(""),T=x[L].length-1}function _t(){yr(),y++,w++,x.push([]),L=x.length-1,Ie()}function yr(){cr(),js(a)&&(x[L]&&a(Wr()),lr())}function cr(){x[L].length==1&&t.test(x[L][0])&&(e.keepEmptyRows?x[L].splice(0,1):x.splice(L,1),L=x.length-1)}function _o(qe){return qe<r.length-1&&(r[qe]=="\r"&&r[qe+1]==`
`||r[qe]==`
`&&r[qe+1]=="\r")}function Lo(qe){return r[qe]=="\r"||r[qe]==`
`}function lo(){return!$a()&&l<r.length-1&&r[l+1]=='"'}function $a(){return!p&&Et(l-1)||Et(l+1)}function Et(qe){typeof qe!="number"&&(qe=l);var Ga=r[qe];return qe<=-1||qe>=r.length||Ga==n||Ga=="\r"||Ga==`
`}function Ct(qe,Ga,ld){M.push({type:qe,code:Ga,message:ld,line:y,row:L,index:l})}function bt(qe){r=qe,p=!1,l=0,w=0,y=1,lr(),x=[[""]],c=r[l]}function lr(){x=[],M=[],L=0,T=0}function Wr(){return{data:x,errors:M,meta:{lines:y,delimiter:n,aborted:k,truncated:s>0&&l<r.length}}}}function iq(e){typeof e!="object"&&(e={});var t=jf(e);return(typeof t.delimiter!="string"||t.delimiter.length!=1||zt.BAD_DELIMITERS.indexOf(t.delimiter)>-1)&&(t.delimiter=fo.delimiter),typeof t.header!="boolean"&&(t.header=fo.header),typeof t.dynamicTyping!="boolean"&&(t.dynamicTyping=fo.dynamicTyping),typeof t.preview!="number"&&(t.preview=fo.preview),typeof t.step!="function"&&(t.step=fo.step),typeof t.complete!="function"&&(t.complete=fo.complete),typeof t.error!="function"&&(t.error=fo.error),typeof t.encoding!="string"&&(t.encoding=fo.encoding),typeof t.download!="boolean"&&(t.download=fo.download),typeof t.keepEmptyRows!="boolean"&&(t.keepEmptyRows=fo.keepEmptyRows),t}function jf(e){if(typeof e!="object")return e;var t=e instanceof Array?[]:{};for(var r in e)t[r]=jf(e[r]);return t}function js(e){return typeof e=="function"}var{parse:sq}=zt;function nM(e){let t=e.split(/\r?\n/),r=[],n=!1;if(!(t.length<2)){for(let o=0;o<t.length;o++){let a=t[o];if(!a.trim())continue;o>0&&!Wf(a.replace(/,(\d{3})/g,"$1"))&&(n=!0);let i={content:a};r.push(i)}if(!n){let o=r.map(a=>a.content).map(a=>a.replace(/,(\d{3})/g,"$1"));return Wf(o[0])||(o=o.slice(1)),[{content:"\\left["+o.join(",")+"\\right]",numberList:!0}]}return r}}var Vy={};md(Vy,{EditableField:()=>Q3,MathField:()=>I0,MqMathFieldApi:()=>Bl,StaticMath:()=>j3,config:()=>Y3,getApiInstanceForElement:()=>C0});function lq(e,t){return e.left<=t&&t<e.right}function ii(e,t){let r=0,n=e.length-1;for(;r<=n;){let o=Math.floor((r+n)/2),a=e[o];if(lq(a,t))return a;t<a.left?n=o-1:r=o+1}}function xa(e,t){return!!ii(e,t)}function Cn(e,t){var r;return((r=ii(e,t))==null?void 0:r.right)===t+1}function si(e,t){var r;return((r=ii(e,t))==null?void 0:r.left)===t}function uq(e,t,r){let n,o=r.getTrieRoot();for(let a=t;o&&a<e.length;a++){let i=e[a];if(i.type!=="char")break;o=o.followPath(i.latex),o!=null&&o.endWord&&(n=o.endWord)}return n}function oM(e,t,r){let{children:n,marks:o}=e;if(o.mutable_operatorName=[],o.mutable_infixOperatorName=[],o.mutable_prefixOperatorName=[],!r){for(let a=0;a<n.length;a++){let i=uq(n,a,t.autoOperatorNames);if(i){let s={left:a,right:a+i.length,word:i};o.mutable_operatorName.push(s),t.infixOperatorNames.has(i)?o.mutable_infixOperatorName.push(s):t.prefixOperatorNames.has(i)&&o.mutable_prefixOperatorName.push(s),a+=i.length-1}}return o}}function aM(e){let t=[],r=0;for(let n=0;n<e.length;n++){let o=e[n];o.type==="char"&&o.latex==="."?r+=1:r=0,r===3&&(t.push({left:n-2,right:n+1,word:"..."}),r=0)}return t}function Ze(e){return e==="left"?"right":"left"}function iM(e){return e==="up"?"down":"up"}var it=class{constructor(t,r){this.group=t,this.index=r}eq(t){return this.group.eq(t.group)&&this.index===t.index}nodeInDirection(t){return t==="left"?this.nodeBefore():this.nodeAfter()}nodeBefore(){return this.group.nthChild(this.index-1)}nodeAfter(){return this.group.nthChild(this.index)}};var Qf;function sM(e,t){if(t<0||t>=e.length)throw new Error("Offset out of bounds");if(!Intl.Segmenter)return{segment:e[t],from:t,to:t+1};Qf||(Qf=new Intl.Segmenter(void 0,{granularity:"grapheme"}));let n=Qf.segment(e).containing(t);if(!n)throw new Error("Intl unreachable: Offset out of bounds");let{segment:o,index:a}=n;return{segment:o,from:a,to:a+o.length}}function*cM(e){yield*lM(e)}function*lM(e){yield new it(e,0);for(let t=0;t<e.children.length;t++){let r=e.children[t],n=In(r);for(let o=0;o<n;o++){let a=va(r,o);if(a.type!=="group")throw new Error("Non-group containing non-group.");yield*lM(a)}yield new it(e,t+1)}}function*gn(e){yield e;for(let t of e.children){let r=In(t);for(let n=0;n<r;n++){let o=va(t,n);if(o.type!=="group")throw new Error("Non-group containing non-group.");yield*gn(o)}}}function*ci(e){yield e;for(let t of e.children){yield t;let r=In(t);for(let n=0;n<r;n++){let o=va(t,n);if(o.type!=="group")throw new Error("Non-group containing non-group.");yield*ci(o)}}}function uM(e){for(let t of ci(e)){let r=In(t);for(let n=0;n<r;n++)va(t,n).updateParent(t,n)}}function Yf(e){let t=In(e),r=[];for(let n=0;n<t;n++)r.push(e.nthChild(n));return r}var em=new Map([["~","\\textasciitilde"],["\\","\\textbackslash"],["`","\\textasciigrave"],["'","\\textquotesingle"],["|","\\textbar"],["<","\\textless"],[">","\\textgreater"],["^","\\textasciicircum"],[" ","\\ "],["$","\\$"],["&","\\&"],["%","\\%"],["#","\\#"],["{","\\{"],["}","\\}"],["_","\\_"]]),dq=new RegExp("["+[...em.keys()].join("").replace(/[\^\-\]\\]/g,"\\$&")+"]","g"),gM=new Map;for(let[e,t]of em)gM.set(t,e);function Xf(e){return e.replace(dq,t=>{let r=em.get(t);return r.length>2?r+" ":r})}function hM(e){return/[\r\n\v\f\u2028\u2029]/.test(e)}function pq(e){return e.replace(/[\t\r\n\v\f\u2028\u2029]/g," ")}function Qs(e){let t="";e=pq(e),e=e.replace(/ {2,}/g," ");let r=0;for(;r<e.length;){let n=mq(e,r);if(!n)return;r=n.nextPos,t+=n.text}return t}function mq(e,t){let r=t;if(t>=e.length)return;let n=e.charAt(t);if(t+=1,n==="\\")if(pM(e.charAt(t))){do t+=1;while(pM(e.charAt(t)));let o=e.slice(r,t);mM(e.charAt(t))&&t++;let a=dM(o);return a===void 0?void 0:{nextPos:t,text:a}}else{t+=1;let o=e.slice(r,t),a=dM(o);return a===void 0?void 0:{nextPos:t,text:a}}else{if(mM(n))return{nextPos:t,text:" "};if(em.has(n))return;{let o=e.slice(r,t);return{nextPos:t,text:o}}}}function dM(e){return gM.get(e)}function pM(e){return/^[A-Za-z]$/.test(e)}function mM(e){return e==" "}function Qn(e,t={}){let r=Sr(e,t);return yM(r)}function fM(e,t){let r=bM(e,t);return yM(r)}function yM(e){return e.replace(/(\\(?:[a-z](?:\{\{cursor\}\})?)+) (?!(?:\{\{cursor\}\})?[a-z])/gi,"$1")}function gq(e){return/^\\[a-z]+$/i.test(e)?e+" ":e}function yo(e){return e===""?" ":e}var wa="{{cursor}}";function bM(e,t,r={}){var a,i;let n="",o="";for(let s of t){let c=s.getIndex(),l=Sr(s,r);if(((a=r.emitCursor)==null?void 0:a.group)===e&&r.emitCursor.index===c&&!o&&(n+=wa),si(e.marks.mutable_operatorName,c))o+=l;else if(Cn(e.marks.mutable_operatorName,c)){o+=l,r.emitCursorAtEveryPosition&&(n+=wa);let p=o;if(r.emitCursorAtEveryPosition)p=o.split("").join(wa);else if(((i=r.emitCursor)==null?void 0:i.group)===e){let y=c-o.length+2,x=c;if(r.emitCursor.index>=y&&r.emitCursor.index<=x){let M=r.emitCursor.index-y+1;p=o.slice(0,M)+wa+o.slice(M)}}xM.has(o)?n+="\\"+p+" ":n+="\\operatorname{"+p+"}",o=""}else o?o+=l:(r.emitCursorAtEveryPosition&&(n+=wa),n+=l)}return n}function Sr(e,t){var r,n;switch(e.type){case"char":return gq(e.latex);case"percentof":return"\\%\\operatorname{of}";case"ans":return"\\operatorname{ans}";case"token":return`\\${e.variant}{`+e.id+"}";case"brackets":{let i=Sr(e.middle,t);return`\\left${e.leftLatex}${i}\\right${e.rightLatex}`}case"sqrt":{let i=e.index?`[${Sr(e.index,t)}]`:"",s=Sr(e.radicand,t);return e.index||(s=yo(s)),`\\sqrt${i}{${s}}`}case"frac":{let i=yo(Sr(e.num,t)),s=yo(Sr(e.den,t));return`\\frac{${i}}{${s}}`}case"binom":{let i=yo(Sr(e.num,t)),s=yo(Sr(e.den,t));return`\\binom{${i}}{${s}}`}case"supsub":let o=e.sub?`_{${yo(Sr(e.sub,t))}}`:"",a=e.sup?`^{${yo(Sr(e.sup,t))}}`:"";return o+a;case"summation":{let i=e.kind,s=Sr(e.sub,t),c=Sr(e.sup,t),l=((r=e.nextSibling())==null?void 0:r.type)==="supsub"?"{}":"";return i+`_{${yo(s)}}^{${yo(c)}}`+l}case"group":{let i=bM(e,e.children,t);return(t.emitCursorAtEveryPosition||((n=t.emitCursor)==null?void 0:n.group)===e&&t.emitCursor.index===e.children.length)&&(i+=wa),i}case"style-cmd":{let i=e.val;e.styleParam!==void 0&&(i+="{"+e.styleParam+"}");let s=Sr(e.arg,t);return e.val!=="\\textcolor"&&(s=yo(s)),i+="{"+s+"}",i}case"matrix":{let i="\\begin{bmatrix}",{numRows:s,numCols:c}=e.getDimensions();for(let l=0;l<s;l++){l>0&&(i+="\\\\");for(let p=0;p<c;p++)p>0&&(i+="&"),i+=Sr(e.getChildAt(p,l),t)}return c===1&&e.getChildAt(0,s-1).children.length===0&&(i+="{}"),i+="\\end{bmatrix}",i}case"string":return"\\text{``"+Sr(e.body,t)+"''}";case"text-char":return Xf(e.text);default:throw new Error(`Invalid node: ${e.type}`)}}function wl(e){let t=e.group.getRoot();return Qn(t,{emitCursor:{group:e.group,index:e.index}}).indexOf(wa)}function Tl(e,t){let r=Qn(e,{emitCursorAtEveryPosition:!0}),n=hq(r,t);if(n===void 0)return;let o=0;for(let a of cM(e)){if(o===n)return tm(a)?a:void 0;o+=1}}function tm(e){return!Ta(e.group)||e.index===0||e.index===e.group.children.length?!0:e.index==e.nodeAfter().containingSelection().left.index}function hq(e,t){let r=0,n=0;for(let o of e.matchAll(/\{\{cursor\}\}/g)){if(o.index-r===t)return n;n+=1,r+=o[0].length}}function wM(e){let t=e.group;if(Ta(t)&&(!tm(e.anchor)||!tm(e.head)))throw new Error("Programming Error: selection cannot split a grapheme cluster.")}function An(e){if(!e.matrixPullHandleType)return;let t=e.head.nodeBefore();if((t==null?void 0:t.type)!=="matrix")throw new Error("Programming Error: misplaced pull handle");return t}function*Zf(e){let t=e.group,r=t.parent();for(;r;)yield{group:t,parent:r},t=r.parent(),r=t.parent()}function rm(e){for(let{group:t,parent:r}of Zf(e))if(r.type==="matrix")return{cell:t,matrix:r}}function nm(e){let t=An(e);return t?Sl(t,"keyboard"):e}function Jf(e){let{left:t,right:r,anchor:n,head:o,group:a}=e;return{latex:Qn(a.getRoot()),startIndex:wl(t),endIndex:wl(r),anchorIndex:wl(n),headIndex:wl(o)}}function TM(e){let t=fn(e);return t.length===0?"":fM(e.group,t)}function vt(e,t){return t==="left"?e.left:e.right}function Je(e){return e.left.eq(e.right)}function se(e){return{anchor:e,head:e,left:e,right:e,group:e.group}}function Sl(e,t){let r=e.cursorOnSide("right");return{anchor:r,head:r,left:r,right:r,group:r.group,matrixPullHandleType:t}}function hn(e,t,r){t=Math.min(t,r),r=Math.max(t,r);let n=new it(e,t),o=new it(e,r);return{anchor:n,head:o,left:n,right:o,group:o.group}}function Pt(e,t){let r=yq(e,t);if(r===void 0)return;let n=Math.min(t.index,r),o=Math.max(t.index,r),a=new it(t.group,n),i=new it(t.group,o);if(e.group.getRoot()!==t.group.getRoot())throw new Error("Programming Error: anchor and head must be from same root");return{anchor:e,head:t,left:a,right:i,group:i.group}}function fq(e,t){return t.group.contains(e.group)}function yq(e,t){let r=t.group.depth();if(!fq(e,t))return;let n;return e.group.depth()===r?n=e.index:(n=e.group.ancestorAtDepth(r+1).getIndex(),n>=t.index&&(n+=1)),n}function om(e,t){let r=ey(e.group,t.group);if(r.eq(t.group))return Pt(e,t);let n=vM(r,e),o=vM(r,t),a=bq(n,o);return Pt(e,new it(r,a))}function bq(e,t){return t.type==="cursor"?t.index:e.index===t.index?e.type==="node"?e.groupIndex<=t.groupIndex?t.index+1:t.index:t.index+1:e.index<t.index?t.index+1:t.index}function vM(e,t){if(t.group.eq(e))return{type:"cursor",index:t.index};{let r=t.group.ancestorAtDepth(e.depth()+2);return{type:"node",index:r.parent().getIndex(),groupIndex:r.getIndex()}}}function ey(e,t){let r=e;for(;!r.contains(t);){let n=r.parent();if(!n)throw new Error("Programming error: tried to take the common ancestor of two groups in different trees.");r=n.parent()}return r}function fn(e){let{left:t,right:r,group:n}=e,o=t.index,a=r.index;return n.children.slice(o,a)}function SM(e,t){let r=e.group.children;for(let n=e.left.index;n<e.right.index;n++){let o=r[n].find(t);if(o)return o}}function Ue(e,t){let{root:r,insertedSelections:n}=li(e,[t]);return{root:r,insertedSelection:n[0]}}function et(e,t){let{root:r,insertedSelection:n}=Ue(e,[t]),o=n.left.nodeAfter();if(!o||o!==t)throw new Error("Programming error: node not inserted right");return{root:r,inserted:o}}function li(e,t){let{left:r,right:n,group:o}=e,a=r.index,i=n.index,s=o.children,c=s.slice(0,a).concat(...t,s.slice(i)),l=c.length-s.length,p=ve(c);ty(o,p),Ml(o,p,M=>M<=a?M:M>=i?M+l:i+l);let y=[],x=a;for(let M of t)y.push(hn(p,x,x+M.length)),x+=M.length;return{root:p.getRoot(),insertedSelections:y}}function am(e){return Ue(e.containingSelection(),e.middle.children)}function MM(e,t,r){let n=[e.selection].concat(e.tabHistory.selections);xq(n);let{root:o}=Ue(t,r()),a=wq(o,n);vq(n);let i={selections:a.slice(1),dir:e.tabHistory.dir};return e.withRootAndSelection(o,a[0]).withTabHistory(i)}function ry(e){if(e==="upDown")return{type:"upDown"};if(e.startsWith("head"))return{type:"head",index:parseInt(e.slice(5))};if(e.startsWith("anchor"))return{type:"anchor",index:parseInt(e.slice(7))};throw new Error("Programming Error: Invalid stashed cursor")}function xq(e){let t=0;for(let r of e){let{head:n,anchor:o}=r;Sa(n.group,`head-${t}`,n.index),Sa(o.group,`anchor-${t}`,o.index),t++}}function vq(e){var r,n;let t=0;for(let o of e){let{head:a,anchor:i}=o;(r=a.group.mutable_cursorIndices)==null||r.delete(`head-${t}`),(n=i.group.mutable_cursorIndices)==null||n.delete(`anchor-${t}`),t++}}function wq(e,t){let r=t.length,n=new Array(r),o=new Array(r);for(let i of gn(e)){let s=i;if(s.mutable_cursorIndices)for(let[c,l]of s.mutable_cursorIndices){let p=ry(c);switch(p.type){case"upDown":break;case"head":if(n[p.index]!==void 0)throw new Error("Programming Error: Duplicate head");n[p.index]=new it(i,l),s.mutable_cursorIndices.delete(c);break;case"anchor":if(o[p.index]!==void 0)throw new Error("Programming Error: Duplicate anchor");o[p.index]=new it(i,l),s.mutable_cursorIndices.delete(c);break}}}let a=[];for(let i=0;i<r;i++){let s=n[i],c=o[i];if(s===void 0||c===void 0)throw new Error("Programming Error: Missing head or anchor.");a.push(Tq(s,c,t[i]))}return a}function Tq(e,t,r){if(r.matrixPullHandleType){let n=e.nodeBefore();if((n==null?void 0:n.type)==="matrix"&&e.eq(t))return Sl(n,r.matrixPullHandleType);throw new Error("Programming Error: Invalid pull handle.")}else return om(t,e)}function kM(e){for(let t of gn(e))t.mutable_upDownGroup&&(t.mutable_upDownGroup=void 0),t.mutable_cursorIndices&&t.mutable_cursorIndices.delete("upDown")}function Sa(e,t,r){e.mutable_cursorIndices||(e.mutable_cursorIndices=new Map),e.mutable_cursorIndices.set(t,r)}function Ml(e,t,r){if(e.mutable_cursorIndices)for(let[n,o]of e.mutable_cursorIndices){let a=r(o);Sa(t,n,a)}}function EM(e,t){if(!e.mutable_cursorIndices)return!1;for(let r of e.mutable_cursorIndices.values())if(t(r))return!0;return!1}function*CM(e){for(let t of gn(e))if(t.mutable_cursorIndices){for(let r of t.mutable_cursorIndices.keys())yield r;t.mutable_cursorIndices=void 0}}var im=class{constructor(t){this._index=-1;for(let r=0;r<t.length;r++){let n=t[r];n._parent=this,n._index=r}}parent(){return this._parent}getIndex(){return this._index}updateParent(t,r){this._parent=t,this._index=r}getRoot(){let t=this;for(;t.parent();)t=t.parent();if(t.type!=="group")throw new Error("Invariant failed: root is not group");return t}eq(t){return this===t}printLatex(){return Qn(this)}siblingInDirection(t){let r=t+this.getIndex(),n=this.parent();if(n&&!(r<0||r>=In(n)))return va(n,r)}numChildren(){return In(this)}nextSiblingInDir(t){return t==="right"?this.nextSibling():this.prevSibling()}nextSibling(){return this.siblingInDirection(1)}prevSibling(){return this.siblingInDirection(-1)}nthChild(t){let r=In(this);return t<0||t>=r?void 0:va(this,t)}firstChild(){return this.nthChild(0)}lastChild(){let t=In(this);return this.nthChild(t-1)}lastChildInDir(t){return t==="left"?this.firstChild():this.lastChild()}firstCursor(){return new it(this,0)}lastCursor(){return new it(this,In(this))}lastCursorInDir(t){return t==="left"?this.firstCursor():this.lastCursor()}cursorOnSide(t){return t==="left"?new it(this.parent(),this.getIndex()):new it(this.parent(),this.getIndex()+1)}allParents(){let t=[];for(let r=this;r!==void 0;r=r.parent())t.push(r);return t}depth(){let t=0,r=this;for(;r.parent();)r=r.parent(),t+=1;return t}ancestorAtDepth(t){let r=this,n=this.depth();if(t<0||t>n)throw new Error(`Invalid depth ${t} for node of depth ${n}`);for(;n>t;)r=r.parent(),n-=1;return r}contains(t){return this.depth()<=t.depth()&&this.eq(t.ancestorAtDepth(this.depth()))}smallestAncestorGroup(){if(this.type==="group")return this;let t=this.parent();if(t===void 0)throw new Error("Programming Error: Non-group as root of the tree.");if(t.type==="group")return t;throw new Error("Programming error: non-group containing non-group.")}containingSelection(){if(this.type==="group")return hn(this,0,this.numChildren());if(this.type==="text-char")return this.containingGraphemeClusterSelection();{let t=this.parent(),r=this.getIndex();return hn(t,r,r+1)}}getDomNode(){var t;return this.type==="group"?this.mutable_domNode:(t=this.parent().mutable_domChildren)==null?void 0:t[this.getIndex()]}boundingClientRect(){let t=this.getDomNode();if(t&&t.getClientRects().length!==0)return t.getBoundingClientRect()}find(t){var r;if(t(this))return this;for(let n=0;n<this.numChildren();n++){let o=(r=this.nthChild(n))==null?void 0:r.find(t);if(o)return o}}},Mr=class extends im{};function ty(e,t){if(t.type==="group"!=(e.type==="group"))throw new Error("Cannot replace group with non-group or vice-versa.");let r=e.parent();if(r!==void 0){let n=e.getIndex(),o=Eq(r,n,t);ty(r,o)}}var wt=class extends Mr{constructor(r){super([]);this.type="char";this.latex=r}};function Ta(e){var t;return((t=e.parent())==null?void 0:t.type)==="string"}var Ys=class extends Mr{constructor(r){super([]);this.type="text-char";if(this.text=r,r.length!==1)throw new Error(`Char ${JSON.stringify(r)} is not one code unit.`)}containingGraphemeClusterSelection(){let r=this.containingString(),n=this.getIndex(),{from:o,to:a}=sM(r.fullText(),n);return hn(this.parent(),o,a)}containingString(){let r=this.parent().parent();if((r==null?void 0:r.type)!=="string")throw new Error("Invariant violation: text-char not inside string");return r}},Ma=class extends Mr{constructor({body:r,ghostSide:n}){super([r]);this.type="string";let o=r.children.find(a=>a.type!=="text-char");if(o)throw new Error(`Unexpected string child of type ${o.type}.`);this.body=r,this.ghostSide=n,this.text=this.body.children.map(a=>a.type!=="text-char"?"":a.text).join("")}fullText(){return this.text}};function Ea(e,t){return new Ma({body:e.body,ghostSide:t})}var kl=class extends im{constructor(r){r=Sq(r);super(r);this.type="group";let n=aM(r);this.marks={mutable_operatorName:[],mutable_infixOperatorName:[],mutable_prefixOperatorName:[],ellipsis:n},this.children=r}};function ve(e){return new kl(e)}function IM(e){e.mutable_domChildren=void 0,e.mutable_domNode=void 0,e.marks.mutable_infixOperatorName=[],e.marks.mutable_prefixOperatorName=[],e.marks.mutable_operatorName=[]}function AM(e,t){let r=ve(e.children.concat(t.children));return Ml(e,r,n=>n),Ml(t,r,n=>n+e.children.length),r}function Sq(e){let t;for(let r=0;r<e.length;r++){let n=e[r];n.type==="brackets"&&(n.ghostSide==="left"&&r>0||n.ghostSide==="right"&&r<e.length-1)&&(t||(t=Array.from(e)),t[r]=PM(n,void 0))}return t!=null?t:e}var ka=class extends Mr{constructor({radicand:r,index:n}){let o=[];n&&o.push(n),o.push(r);super(o);this.type="sqrt";this.radicand=r,this.index=n}},Ht=class extends Mr{constructor({sub:r,sup:n}){let o=[];r&&o.push(r),n&&o.push(n);super(o);this.type="supsub";this.sup=n,this.sub=r}},Ko=class extends Mr{constructor({num:r,den:n}){super([r,n]);this.type="frac";this.num=r,this.den=n}},ui=class extends Mr{constructor({num:r,den:n}){super([r,n]);this.type="binom";this.num=r,this.den=n}},Xs=class extends Mr{constructor(){super([]);this.type="ans"}},sm=class extends Mr{constructor({variant:r,id:n}){super([]);this.type="token";this.variant=r,this.id=n}},di=class extends Mr{constructor({kind:r,sub:n,sup:o}){let a=[];n&&a.push(n),o&&a.push(o);super(a);this.type="summation";this.kind=r,this.sub=n,this.sup=o}},yn=class extends Mr{constructor({leftSymbol:r,rightSymbol:n,leftLatex:o,rightLatex:a,ghostSide:i,middle:s}){super([s]);this.type="brackets";this.leftSymbol=r,this.rightSymbol=n,this.leftLatex=o,this.rightLatex=a,this.ghostSide=i,this.middle=s}};function PM(e,t){return new yn({leftSymbol:e.leftSymbol,rightSymbol:e.rightSymbol,leftLatex:e.leftLatex,rightLatex:e.rightLatex,ghostSide:t,middle:e.middle})}function El(e,t){return new yn({leftSymbol:e.leftSymbol,rightSymbol:e.rightSymbol,leftLatex:e.leftLatex,rightLatex:e.rightLatex,ghostSide:e.ghostSide,middle:t})}function ny(e,t,r,n){return new yn({leftSymbol:t==="left"?r:e.leftSymbol,rightSymbol:t==="right"?r:e.rightSymbol,leftLatex:t==="left"?n:e.leftLatex,rightLatex:t==="right"?n:e.rightLatex,ghostSide:void 0,middle:e.middle})}function cm(e,t){return t==="left"?e.leftSymbol:e.rightSymbol}function NM(e,t){return t==="left"?e.leftLatex:e.rightLatex}var Zs=class extends Mr{constructor(){super([]);this.type="percentof"}},Js=class extends Mr{constructor({val:r,styleParam:n,arg:o}){super([o]);this.type="style-cmd";this.val=r,this.styleParam=n,this.arg=o}};function lm(e,t){return e.numCols===t.numCols&&e.numRows===t.numRows}var Yn=class e extends Mr{constructor({children:r,numCols:n,resizingInfo:o}){if(r.length===0||r.length%n!==0)throw new Error("Programming Error: invalid child count");super(r);this.type="matrix";this.children=r,this.numCols=n,this.resizingInfo=o}getNumCols(){return this.numCols}getNumRows(){return this.children.length/this.numCols}getDimensions(){return{numCols:this.getNumCols(),numRows:this.getNumRows()}}getChildAt(r,n){if(0<=n&&n<this.getNumRows()&&0<=r&&r<this.numCols)return this.children[n*this.numCols+r]}getPosOfChild(r){if(r.parent()!==this)throw new Error("Programming Error: getPosOfChild on not my child.");let n=r.getIndex(),o=this.numCols;return{x:n%o,y:Math.floor(n/o)}}withResizingStarted(){let r={colThresholds:void 0,rowThresholds:void 0,originalMatrix:this};return new e({children:this.children,numCols:this.numCols,resizingInfo:r})}withResizingDone(){return new e({children:this.children,numCols:this.numCols})}isBeingResized(){return this.resizingInfo!==void 0}};function In(e){switch(e.type){case"char":case"text-char":case"percentof":case"ans":case"token":return 0;case"brackets":case"string":return 1;case"sqrt":return e.index?2:1;case"frac":case"binom":return 2;case"supsub":case"summation":return(e.sub?1:0)+(e.sup?1:0);case"group":case"matrix":return e.children.length;case"style-cmd":return 1;default:throw new Error(`Invalid node: ${e.type}`)}}function pi(e){return In(e)===0}function va(e,t){let r=Mq(e,t);if(r.type==="group"==(e.type==="group"))throw new Error("Cannot put a group inside a group or non-group inside a non-group.");return r}function _M(e){if(e.type==="group")return e.children;let t=[];for(let r=0;r<e.numChildren();r++)t.push(va(e,r));return t}function oy(e){let t=0;for(let r of _M(e)){let n=oy(r);n>t&&(t=n)}return(e.type==="group"?1:0)+t}function ay(e,t){return e.type==="matrix"&&(e.getNumRows()>t||e.getNumCols()>t)?!0:_M(e).some(r=>ay(r,t))}function LM(e){switch(e.type){case"char":case"percentof":case"ans":case"token":return!0;case"text-char":case"group":case"frac":case"binom":case"sqrt":case"supsub":case"summation":case"brackets":case"style-cmd":case"matrix":case"string":return!1;default:throw new Error(`Invalid node: ${e.type}`)}}function Mq(e,t){switch(e.type){case"char":case"text-char":case"percentof":case"ans":case"token":break;case"brackets":if(t==0)return e.middle;break;case"string":if(t==0)return e.body;break;case"sqrt":if(e.index){if(t==0)return e.index;if(t==1)return e.radicand}else if(t==0)return e.radicand;break;case"binom":case"frac":if(t==0)return e.num;if(t==1)return e.den;break;case"supsub":case"summation":if(e.sub&&e.sup){if(t==0)return e.sub;if(t==1)return e.sup}else if(e.sub){if(t==0)return e.sub}else if(e.sup){if(t==0)return e.sup}else throw new Error("SupSub or Summation missing sup or sub.");break;case"group":case"matrix":if(0<=t&&t<e.children.length)return e.children[t];break;case"style-cmd":if(t==0)return e.arg;break;default:throw new Error(`Invalid node: ${e.type}`)}throw new Error(`Child not present with index ${t}.`)}function Cl(e,t){if(e.index){if(t==0)return"index";if(t==1)return"radicand"}else if(t==0)return"radicand";throw new Error(`Child not present with index ${t}.`)}function mi(e,t){if(e.sub&&e.sup){if(t==0)return"sub";if(t==1)return"sup"}else if(e.sub){if(t==0)return"sub"}else if(e.sup){if(t==0)return"sup"}else throw new Error("SupSub or Summation missing sup or sub.");throw new Error(`Child not present with index ${t}.`)}function ec(e,t){if(t==0)return"num";if(t==1)return"den";throw new Error(`Child not present with index ${t}.`)}function kq(e,t){switch(e.type){case"char":case"text-char":case"percentof":case"ans":case"token":break;case"brackets":if(t==0)return"middle";break;case"string":if(t==0)return"body";break;case"sqrt":return Cl(e,t);case"binom":case"frac":return ec(e,t);case"supsub":case"summation":return mi(e,t);case"style-cmd":if(t==0)return"arg";break;default:throw new Error(`Invalid node: ${e.type}`)}throw new Error(`Child not present with index ${t}.`)}function Eq(e,t,r){if(e.type==="group"){if(r.type==="group")throw new Error("Invariant violation: A group should not have a non-group as child.");let o=e.children.slice(0,t).concat([r],e.children.slice(t+1)),a=ve(o);return a.mutable_cursorIndices=e.mutable_cursorIndices,a}if(r.type!=="group")throw new Error("Invariant violation: A non-group should not have a group as child.");if(e.type==="matrix"){let o=Array.from(e.children);return o[t]=r,new Yn({children:o,numCols:e.getNumCols()})}if(pi(e))throw new Error("Programming Error: leaves have no children.");let n=kq(e,t);switch(e.type){case"frac":return new Ko({...e,[n]:r});case"binom":return new ui({...e,[n]:r});case"sqrt":return new ka({...e,[n]:r});case"supsub":return new Ht({...e,[n]:r});case"summation":return new di({...e,[n]:r});case"brackets":return new yn({...e,[n]:r});case"style-cmd":return new Js({...e,[n]:r});case"string":return new Ma({...e,[n]:r})}}function RM(e,t){switch(e.type){case"brackets":return PM(e,t);case"string":return Ea(e,t);default:throw new Error(`Programming Error: ${e.type} is not brackets or string`)}}var um={" ":"\\ ",pm:"\\pm",mp:"\\mp",times:"\\times",div:"\\div",cdot:"\\cdot",le:"\\le",ge:"\\ge",sim:"\\sim",tildeNbsp:"~",approx:"\\approx",cong:"\\cong",ncong:"\\ncong",nsim:"\\nsim",ne:"\\ne",parallel:"\\parallel",nparallel:"\\nparallel",perp:"\\perp",to:"\\to",forall:"\\forall",square:"\\square",mid:"\\mid",bigcirc:"\\bigcirc",angle:"\\angle",measuredangle:"\\measuredangle",triangle:"\\triangle",degree:"\\degree",parallelogram:"\\parallelogram",infty:"\\infty",backslash:"\\backslash","\\":"\\backslash",$:"\\$","?":"?","!":"!","@":"@","&":"\\&","#":"#","%":"\\%",",":",",".":"."},Cq=["alpha","beta","gamma","delta","epsilon","varepsilon","zeta","eta","theta","vartheta","iota","kappa","varkappa","lambda","mu","nu","xi","pi","varpi","rho","varrho","sigma","varsigma","tau","upsilon","phi","varphi","chi","psi","omega","digamma","Gamma","Delta","Theta","Lambda","Xi","Pi","Sigma","Upsilon","Phi","Psi","Omega"],DM={};for(let e of Cq){let t="\\"+e;um[e]=t,DM[t]=!0}function tc(e){return um[e]||e}function qM(e){if(e.type!=="char")return!1;let t=e.latex;return!!(/^[a-zA-Z]$/.test(t)||DM[t])}var Iq={space:" ",bar:"overline",dfrac:"frac",cfrac:"frac",fraction:"frac",choose:"binom",binomial:"binom","\u2211":"sum",summation:"sum","\u220F":"prod",product:"prod",coproduct:"coprod","\u222B":"int",integral:"int",subscript:"_",superscript:"^",supscript:"^",\u03B1:"alpha",\u03B2:"beta",\u03B3:"gamma",\u03B4:"delta","\u03F5":"epsilon",\u03B5:"varepsilon",epsiv:"varepsilon",\u03B6:"zeta",\u03B7:"eta",\u03B8:"theta",thetav:"vartheta",thetasym:"vartheta",\u03D1:"vartheta",\u03B9:"iota",\u03BA:"kappa",kappav:"varkappa",\u03F0:"varkappa",\u03BB:"lambda",\u03BC:"mu",\u03BD:"nu",\u03BE:"xi",\u03C0:"pi",piv:"varpi",\u03D6:"varpi",\u03C1:"rho",rhov:"varrho",\u03F1:"varrho",\u03C3:"sigma",sigmaf:"varsigma",sigmav:"varsigma",\u03C2:"varsigma",\u03C4:"tau",upsi:"upsilon",\u03C5:"upsilon",\u03D5:"phi",\u03C6:"varphi",phiv:"varphi",\u03C7:"chi",\u03C8:"psi",\u03C9:"omega",gammad:"digamma",Gammad:"digamma",\u03DC:"digamma",\u0393:"Gamma",\u0394:"Delta",\u0398:"Theta",\u039B:"Lambda",\u039E:"Xi",\u03A0:"Pi",\u03A3:"Sigma",\u03A5:"Upsilon",Upsi:"Upsilon",upsih:"Upsilon",Upsih:"Upsilon",\u03A6:"Phi",\u03A8:"Psi",\u03A9:"Omega","\u2212":"-","\u2014":"-","\u2013":"-","\xB1":"pm",plusminus:"pm",plusmn:"pm","\u2213":"mp",mnplus:"mp",minusplus:"mp","\xD7":"times",cross:"times","\xF7":"div",divide:"div",divides:"div",sdot:"cdot","~":"sim","\u2241":"nsim","\u2248":"approx","\u2260":"ne",neq:"ne","\u2245":"cong","\u2247":"ncong",gt:">","\u2265":"ge",geq:"ge",lt:"<","\u2264":"le",leq:"le",prime:"'",dprime:"\u2033","\u25EF":"bigcirc","\u2225":"parallel","\u2226":"nparallel","\u27C2":"perp","\u2192":"to","\u2200":"forall","\u2220":"angle",ang:"angle","\u2221":"measuredangle","\u25B3":"triangle","\xB0":"degree","\u25B1":"parallelogram","\u25A1":"square","\u221E":"infty",infin:"infty",infinity:"infty"};function gi(e){return Iq[e]||e}var Aq={arg:"cmd-operatorname",deg:"cmd-operatorname",det:"cmd-operatorname",dim:"cmd-operatorname",exp:"cmd-operatorname",gcd:"cmd-operatorname",hom:"cmd-operatorname",inf:"cmd-operatorname",ker:"cmd-operatorname",lg:"cmd-operatorname",lim:"cmd-operatorname",ln:"cmd-operatorname",log:"cmd-operatorname",max:"cmd-operatorname",min:"cmd-operatorname",sup:"cmd-operatorname",limsup:"cmd-operatorname",liminf:"cmd-operatorname",injlim:"cmd-operatorname",projlim:"cmd-operatorname",Pr:"cmd-operatorname",arcsinh:"cmd-operatorname",arsinh:"cmd-operatorname",sinh:"cmd-operatorname",arcsin:"cmd-operatorname",sin:"cmd-operatorname",arccosh:"cmd-operatorname",arcosh:"cmd-operatorname",cosh:"cmd-operatorname",arccos:"cmd-operatorname",cos:"cmd-operatorname",arctanh:"cmd-operatorname",artanh:"cmd-operatorname",tanh:"cmd-operatorname",arctan:"cmd-operatorname",tan:"cmd-operatorname",arcsech:"cmd-operatorname",arsech:"cmd-operatorname",sech:"cmd-operatorname",arcsec:"cmd-operatorname",sec:"cmd-operatorname",arccosech:"cmd-operatorname",arcosech:"cmd-operatorname",cosech:"cmd-operatorname",arccosec:"cmd-operatorname",cosec:"cmd-operatorname",arccsch:"cmd-operatorname",arcsch:"cmd-operatorname",csch:"cmd-operatorname",arccsc:"cmd-operatorname",csc:"cmd-operatorname",arccotanh:"cmd-operatorname",arcotanh:"cmd-operatorname",cotanh:"cmd-operatorname",arccotan:"cmd-operatorname",cotan:"cmd-operatorname",arccoth:"cmd-operatorname",arcoth:"cmd-operatorname",coth:"cmd-operatorname",arccot:"cmd-operatorname",cot:"cmd-operatorname",arcctgh:"cmd-operatorname",arctgh:"cmd-operatorname",ctgh:"cmd-operatorname",arcctg:"cmd-operatorname",ctg:"cmd-operatorname",gcf:"cmd-operatorname",hcf:"cmd-operatorname",lcm:"cmd-operatorname",proj:"cmd-operatorname",span:"cmd-operatorname",operatorname:"operatorname",f:"symbol",space:"symbol"," ":"symbol",".":"symbol",prime:"symbol","'":"symbol",dprime:"symbol","\u2033":"fragment",backslash:"symbol",$:"symbol","?":"symbol",square:"symbol",mid:"symbol",",":"symbol","@":"symbol","&":"symbol","%":"percent",parallel:"symbol",nparallel:"symbol",perp:"symbol",alpha:"symbol",beta:"symbol",gamma:"symbol",delta:"symbol",zeta:"symbol",eta:"symbol",theta:"symbol",iota:"symbol",kappa:"symbol",mu:"symbol",nu:"symbol",xi:"symbol",rho:"symbol",sigma:"symbol",tau:"symbol",chi:"symbol",psi:"symbol",omega:"symbol",phi:"symbol",varphi:"symbol",epsilon:"symbol",varepsilon:"symbol",varpi:"symbol",varsigma:"symbol",vartheta:"symbol",upsilon:"symbol",digamma:"symbol",varkappa:"symbol",varrho:"symbol",pi:"symbol",lambda:"symbol",Upsilon:"symbol",Gamma:"symbol",Delta:"symbol",Theta:"symbol",Lambda:"symbol",Xi:"symbol",Pi:"symbol",Sigma:"symbol",Phi:"symbol",Psi:"symbol",Omega:"symbol",forall:"symbol","\u2070":"fragment","\xB9":"fragment","\xB2":"fragment","\xB3":"fragment","\u2074":"fragment","\u2075":"fragment","\u2076":"fragment","\u2077":"fragment","\u2078":"fragment","\u2079":"fragment","\xBC":"fragment","\xBD":"fragment","\xBE":"fragment","\u2153":"fragment","\u2154":"fragment","\u2155":"fragment","\u2156":"fragment","\u2157":"fragment","\u2158":"fragment","\u2159":"fragment","\u215A":"fragment","\u215B":"fragment","\u215C":"fragment","\u215D":"fragment","\u215E":"fragment","\u2150":"fragment","\u2151":"fragment","\u2152":"fragment","\u221A":"fragment","\u2018":"fragment","\u2019":"fragment",\u02BC:"fragment","+":"symbol","-":"symbol",pm:"symbol",mp:"symbol",cdot:"symbol",to:"symbol","<":"symbol",">":"symbol",le:"symbol",ge:"symbol",infty:"symbol",ne:"symbol",times:"symbol",div:"symbol",tildeNbsp:"symbol",sim:"symbol",approx:"symbol",bigcirc:"symbol",angle:"symbol",degree:"symbol",triangle:"symbol",cong:"symbol",measuredangle:"symbol",parallelogram:"symbol",ncong:"symbol",nsim:"symbol",mathrm:"math-command",mathit:"math-command",mathbf:"math-command",mathsf:"math-command",mathtt:"math-command",underline:"math-command",bar:"math-command",overline:"math-command",overrightarrow:"math-command",overleftarrow:"math-command",overleftrightarrow:"math-command",overarc:"math-command",dot:"math-command",textcolor:"textcolor",_:"math-command","^":"math-command",sum:"summation",prod:"summation",coprod:"summation",int:"summation",frac:"math-command-2",over:"math-command",ans:"symbol",percentof:"symbol",percent:"symbol",token:"math-command",tokenName:"math-command",sqrt:"sqrt",hat:"math-command",nthroot:"sqrt",cbrt:"cbrt",vec:"math-command",tilde:"math-command",langle:"solo-bracket",rangle:"solo-bracket",lVert:"solo-bracket",rVert:"solo-bracket",left:"left",right:"right",begin:"begin",text:"text",binomial:"math-command-2",binom:"math-command-2",choose:"math-command-2"},Pq={"\u2070":"^0","\xB9":"^1","\xB2":"^2","\xB3":"^3","\u2074":"^4","\u2075":"^5","\u2076":"^6","\u2077":"^7","\u2078":"^8","\u2079":"^9","\xBC":"\\frac14","\xBD":"\\frac12","\xBE":"\\frac34","\u2153":"\\frac13","\u2154":"\\frac23","\u2155":"\\frac15","\u2156":"\\frac25","\u2157":"\\frac35","\u2158":"\\frac45","\u2159":"\\frac16","\u215A":"\\frac56","\u215B":"\\frac18","\u215C":"\\frac38","\u215D":"\\frac58","\u215E":"\\frac78","\u2150":"\\frac17","\u2151":"\\frac19","\u2152":"\\frac{1}{10}","\u221A":"\\sqrt{}","\u2033":"''","\u2018":"'","\u2019":"'",\u02BC:"'"};function OM(e){return Aq[e]}function dm(e){return Pq[e]||""}function iy(e){return e.stream[0]}function Nq(e){return{...e,stream:e.stream.slice(1)}}function FM(e){return iy(e)===void 0}function kr(e,t){if(e.stream.startsWith(t))return{val:t,state:{stream:e.stream.slice(t.length)}}}function BM(e){return{stream:e}}function _q(e){return FM(e)?void 0:{val:iy(e),state:Nq(e)}}function Nn(e,t){let r=t.exec(e.stream);if(r){let n=r[0];return{val:r[0],state:{stream:e.stream.slice(n.length)}}}else return}function gt(e,t){return{state:e,tree:t}}function Lq(e,t){return{state:e,result:t}}function Rq(e){{let t=kr(e,"\\");if(!t)return Nn(e,/^[^\\a-z]/i);e=t.state}{let t=Nn(e,/^[a-z]+/i);if(t)return t}{let t=Nn(e,/^\s+/);if(t)return{val:" ",state:t.state}}{let t=_q(e);if(t)return t}}function Dq(e,t){let r=Rq(e);if(!r)return;e=r.state;let n=gi(r.val);return qq(e,n)}function qq(e,t){let r=OM(t);if(r)switch(r){case"cmd-operatorname":return gt(e,t.split("").map(n=>({type:"letter",content:n,latex:n})));case"fragment":{let n=dm(t);if(!n)return;let o=pm(BM(n));return o?gt(e,o.tree.children):void 0}case"left":{e=bn(e);let n="",o="";{let c=Nn(e,/^(?:[([|]|\\\{|\\langle(?![a-zA-Z])|\\lVert(?![a-zA-Z]))/);if(!c)return;e=c.state,o=c.val,n=o.replace("\\",""),(o==="\\langle"||o==="\\lVert")&&(o+=" ")}let a;{let c=pm(e);if(!c)return;e=c.state,a=c.tree}{let c=kr(e,"\\right");if(!c)return;e=c.state,e=bn(e)}let i="",s="";{let c=Nn(e,/^(?:[\])|]|\\\}|\\rangle(?![a-zA-Z])|\\rVert(?![a-zA-Z]))/);if(!c)return;e=c.state,s=c.val,i=s.replace("\\",""),(s==="\\rangle"||s==="\\rVert")&&(s+=" ")}return gt(e,{type:"brackets",leftSymbol:n,leftLatex:o,rightSymbol:i,rightLatex:s,middle:a})}case"right":return;case"solo-bracket":{let n=bo(e);if(!n)return;if(e=n.state,t==="langle"||t==="rangle")return gt(e,{type:"brackets",leftSymbol:"langle",leftLatex:"\\langle ",rightSymbol:"rangle",rightLatex:"\\rangle ",ghostSide:t==="langle"?"right":"left",middle:n.tree});if(t==="lVert"||t==="rVert")return gt(e,{type:"brackets",leftSymbol:"lVert",leftLatex:"\\lVert ",rightSymbol:"rVert",rightLatex:"\\rVert ",ghostSide:t==="lVert"?"right":"left",middle:n.tree});throw new Error("unrecognized. solo-bracket ctrlSeq: "+t)}break;case"math-command":case"math-command-2":{let n=r==="math-command-2"?2:1,o=[];for(let a=0;a<n;a++){let i=bo(e);if(!i)return;e=i.state,o.push(i.tree)}return gt(e,{type:"command",ctrlSeq:t,blocks:o})}case"operatorname":{let n=bo(e);if(!n)return;let o="";for(let a of n.tree.children)if(a.type!=="letter"){o="";break}else o+=a.content;return o==="ans"?gt(n.state,{type:"ans"}):gt(n.state,n.tree.children)}case"percent":{e=bn(e);let n=kr(e,"\\operatorname{of}");return n?gt(n.state,{type:"percentof"}):gt(e,{type:"symbol",content:"%",latex:"\\%"})}case"sqrt":{let n=Kq(e);n&&(e=n.state);let o=bo(e);return o?(e=o.state,gt(e,{type:"sqrt",index:n==null?void 0:n.tree,radicand:o.tree})):void 0}case"cbrt":{let n=bo(e);return n?(e=n.state,gt(e,{type:"sqrt",index:{type:"block",children:[{type:"digit",content:"3"}]},radicand:n.tree})):void 0}case"summation":{let n={type:"block",children:[]},o={type:"block",children:[]};for(;;){e=bn(e);let a;{let i=Nn(e,/^[_^]/);if(!i)break;e=i.state,a=i.val==="_"?"sub":"sup"}{let i=bo(e);if(!i)return;e=i.state;let s=a==="sub"?n.children:o.children;for(let c of i.tree.children)s.push(c)}}switch(t){case"int":case"sum":case"prod":case"coprod":return gt(e,{type:"summation",kind:"\\"+t,sub:n,sup:o});default:throw new Error("Programming Error: summation sub-parser incorrect.")}}case"symbol":return gt(e,{type:"symbol",latex:t,content:t});case"textcolor":{e=bn(e);{let o=kr(e,"{");if(!o)return;e=o.state}let n;{let o=Nn(e,/^[#\w\s.,()%-]*/);if(!o)return;e=o.state,n=o.val}{let o=kr(e,"}");if(!o)return;e=o.state}{let o=bo(e);return o?(e=o.state,gt(e,{type:"style-cmd",ctrlSeq:"\\textcolor",styleParam:n,arg:o.tree})):void 0}}case"begin":return Uq(e);case"text":return zq(e);default:return}}function bn(e){let t=Nn(e,/^\s*/);return t?t.state:e}function Oq(e){let t=Nn(e,/^[a-z]/i);if(t!=null&&t.val)return gt(t.state,{type:"letter",latex:t.val,content:t.val})}function Fq(e){let t=Nn(e,/^[0-9]/);if(t!=null&&t.val)return gt(t.state,{type:"digit",latex:t.val,content:t.val})}function Bq(e){let t=Nn(e,/^[^${}\\_^]/);if(t!=null&&t.val)return gt(t.state,{type:"symbol",latex:t.val,content:t.val})}function Vq(e){let t=Dq(e);if(t||(t=Oq(e),t)||(t=Fq(e),t)||(t=Bq(e),t))return t}function pm(e){let t={type:"block",children:[]},r;for(;r=bo(e);){e=r.state;for(let n of r.tree.children)t.children.push(n)}return e=bn(e),gt(e,t)}function $q(e){e=bn(e);{let t=kr(e,"\\end{bmatrix}");if(t)return{state:t.state,result:"\\end{bmatrix}"}}{let t=kr(e,"&");if(t)return{state:t.state,result:"&"}}{let t=kr(e,"\\\\");if(t)return{state:t.state,result:"\\\\"}}}function Gq(e){let t={type:"block",children:[]},r;for(;;){if(r=$q(e),r!==void 0){e=r.state;break}let n=bo(e);if(!n)return;e=n.state;for(let o of n.tree.children)t.children.push(o)}return e=bn(e),Lq(e,{tree:t,stopSymbol:r.result})}function Uq(e){{let n=kr(e,"{bmatrix}");if(!n)return;e=bn(n.state)}let t=[],r=[];e:for(;;){if(r.length===0){let o=kr(e,"\\end{bmatrix}");if(o){e=o.state;break}}let n=Gq(e);if(!n)return;switch(e=bn(n.state),r.push(n.result.tree),n.result.stopSymbol){case"&":break;case"\\\\":t.push(r),r=[];break;case"\\end{bmatrix}":{t.push(r);break e}}}return gt(e,{type:"matrix",rows:t})}function zq(e){{let r=kr(e,"{");if(!r)return;e=r.state}let t;{let r=Nn(e,/^(?:[^}\\]|\\.)*/);if(!r)return;e=r.state;let n=r.val;if(!n.startsWith("``")||!n.endsWith("''")||(t=Qs(n.slice(2,-2)),t===void 0))return}{let r=kr(e,"}");if(!r)return;e=r.state}return gt(e,{type:"string",text:t})}function Hq(e){{let r=kr(e,"{");if(!r)return;e=r.state}let t;{let r=pm(e);if(!r)return;e=r.state,t=r.tree}{let r=kr(e,"}");if(!r)return;e=r.state}return gt(e,t)}function bo(e){e=bn(e);let t=Hq(e);if(t)return t;let r=Vq(e);if(r)return gt(r.state,{type:"block",children:Array.isArray(r.tree)?r.tree:[r.tree]})}function Kq(e){{let r=kr(e,"[");if(!r)return;e=r.state}let t=[];{let r;for(;iy(e)!=="]"&&(r=bo(e));){e=r.state;for(let n of r.tree.children)t.push(n)}}e=bn(e);{let r=kr(e,"]");if(!r)return;e=r.state}return gt(e,{type:"block",children:t})}function Wq(e,t){let r;for(let n=t;n<e.children.length;n++){let o=e.children[n];if(o.type!=="command")return;let a=o.ctrlSeq;if(a!=="_"&&a!=="^")return;e.children.splice(n,1),n-=1,r||(r={type:"supsub",sub:void 0,sup:void 0},n+=1,e.children.splice(n,0,r));let i=a==="_"?"sub":"sup";r[i]||(r[i]={type:"block",children:[]});let s=r[i].children;for(let c of o.blocks[0].children)s.push(c)}}function Pn(e,t){for(let r=0;r<e.children.length;r++)Wq(e,r);for(let r of e.children)switch(r.type){case"command":for(let n of r.blocks)Pn(n,t);break;case"supsub":r.sub&&Pn(r.sub,t),r.sup&&Pn(r.sup,t);break;case"summation":r.sub&&Pn(r.sub,t),r.sup&&Pn(r.sup,t);break;case"brackets":Pn(r.middle,t);break;case"sqrt":r.index&&Pn(r.index,t),Pn(r.radicand,t);break;case"block":Pn(r,t);break;case"style-cmd":Pn(r.arg,t);break;case"matrix":{for(let n of r.rows)for(let o of n)Pn(o,t);break}case"digit":case"ans":case"percentof":case"symbol":case"letter":case"string":break;default:}}function VM(e,t){let r=BM(e),n={type:"block",children:[]};r=bn(r);let o=pm(r);return!o||(r=o.state,!FM(r))?n:(Pn(o.tree,t),o.tree)}var jq={",":!0,";":!0,":":!0},Qq={"+":!0,"-":!0,"\\pm":!0,"\\mp":!0},sy={"+":!0,"-":!0,"=":!0,"<":!0,">":!0,"\\ge":!0,"\\le":!0,"\\sim":!0,"\\approx":!0,"\\to":!0,"\\ne":!0,"\\cong":!0,"\\ncong":!0,"\\pm":!0,"\\mp":!0,"\\times":!0,"\\div":!0,"\\cdot":!0};function cy(e,t,r){return e.type!=="char"?!1:!!(sy[e.latex]||Cn(t.marks.mutable_infixOperatorName,r))}function Yq(e){let t=e.parent();if((t==null?void 0:t.type)==="group"){let r=e.getIndex();if(r!==-1)return{group:t,index:r}}throw new Error("could not find groupAndIndex")}function $M(e){var n;let t=e.prevSibling();if(t){let{group:o,index:a}=Yq(t);return!(cy(t,o,a)||Cn(o.marks.mutable_prefixOperatorName,a)||t.type==="char"&&/^(\\ )|[,;:\(\[]$/.test(t.latex)||t.type==="summation")}let r=(n=e.parent())==null?void 0:n.parent();return r&&r.type==="style-cmd"&&r.val==="\\textcolor"?$M(r):!1}function hi(e){if(e.type!=="char")return!1;let t=e.latex;if(t==="+"||t==="-"||t==="\\pm"||t==="\\mp")return $M(e);if(Qq[t]){let r=e.prevSibling();if(r&&r.type==="char"){let n=r.latex;if(!sy[n]&&!jq[n])return!0}return!1}return!!sy[t]}function Xq(e){return(e==null?void 0:e.type)==="char"&&/^(\\ )|[0-9.]$/.test(e.latex)}function ly(e){return(e==null?void 0:e.type)==="char"&&e.latex==="\\ "}function Zq(e){return(e==null?void 0:e.type)==="char"&&e.latex==="."}function gm(e,t){return e.digitGroupingMap.get(t)}function hm(e,t){let r;for(let n=t.length-1;n>=0;n--)Xq(t[n])?r||(r=n):r!==void 0&&(mm(e,t,n+1,r),r=void 0);r!==void 0&&mm(e,t,0,r)}function mm(e,t,r,n){for(;ly(t[r]);)r+=1;for(;ly(t[n]);)n-=1;if(r>n)return;let o=0,a=0,i=[];for(let c=r;c<=n;c++){let l=t[c];if(ly(l)?(o+=1,a=0):Zq(l)?(i.push(c),a+=1):a=0,a===3)break}if(a===3){let c=i.pop();i.pop();let l=i.pop();mm(e,t,r,l-1),mm(e,t,c+1,n);return}o>0||i.length>1||(i.length?i[0]!==r&&GM(e,t,r,i[0]-1):GM(e,t,r,n))}function GM(e,t,r,n){let o=0,a=0;for(let s=n;s>=r;s--)a+=1;let i=a%3;i===0&&(i=3);for(let s=n;s>=r;s--){o+=1;let c;a>=4&&(o===a?i===1?c="dcg-mq-group-leading-1":i===2?c="dcg-mq-group-leading-2":c="dcg-mq-group-leading-3":o%3===0&&o!==a&&(c="dcg-mq-group-start"),c||(c="dcg-mq-group-other")),e.digitGroupingMap.set(t[s],c)}}function Jq(){return!!document.querySelector(".immersive-translate-target-wrapper,[data-imt-dynamic-skip],[data-imt-p]")}function eO(){return!!document.querySelector("wpstranslate-translation,.migaku-sentence,#MigakuShadowDom,#SL_balloon_obj")}function tO(){return document.designMode==="on"||document.body.isContentEditable}var rO=[{name:"kick-ass",sel:".KICKASSELEMENT"},{name:"laser-cat",sel:"laser-cat-app"}];function nO(){var e;return(e=rO.find(({sel:t})=>document.querySelector(t)))==null?void 0:e.name}var oO=/^((?:chrome|moz|safari-web|ms-browser)-extension):\/\/([^/]+)/;function UM(e){var t;for(let r of e){if(!r)continue;let n=[r,...Array.from(r.querySelectorAll("*"))];for(let o of n){let a=(t=o.getAttribute("src"))!=null?t:o.getAttribute("href"),i=a==null?void 0:a.match(oO);if(i)return i[1]+"://"+i[2]}}}function zM(e){var t;return Jq()?"immersive-translate":eO()?"translator":tO()?"page-editing":(t=nO())!=null?t:e?"extension":void 0}function HM(e,t){switch(e){case"immersive-translate":return"Programming Error: Immersive Translate mutated our DOM";case"translator":return"Programming Error: Translation extension mutated our DOM";case"page-editing":return"Programming Error: User edited our DOM as page text";case void 0:return t;default:return"Programming Error: Browser extension injected into our DOM"}}function KM(){return{docAttrs:document.documentElement.getAttributeNames().join(" "),bodyAttrs:document.body.getAttributeNames().join(" "),bodyChildren:Array.from(document.body.children).map(e=>e.tagName+"#"+e.id+"."+e.className).join(" ").slice(-500)}}function WM(e,t,r){var s,c;let n=(s=e.mutable_domChildren)!=null?s:[],o=UM([e.mutable_domNode]),a=zM(o),i=new Error(HM(a,"Programming error: mutable_domChildren length doesn't match group child count. (Instrumented)"));return i.dcgExtraErrorMetaData={isRoot:t,childCount:e.children.length,domChildCount:n.length,domChildTags:n.map(l=>l.tagName+"."+l.className),firstExtraDomChildIndex:r,groupDomHtml:(c=e.mutable_domNode)==null?void 0:c.outerHTML.slice(0,500),htmlClass:document.documentElement.className,extensionId:o,foreignMutator:a,...KM()},i}function jM(e,t,r,n){var c,l;let o=UM([t,...r.filter(p=>!n(p)).map(p=>p.parentElement)]),a=zM(o),i=HM(a,"Programming Error: Group child dom is not child of group dom. (Instrumented)"),s=new Error(i);return s.dcgExtraErrorMetaData={childParents:r.map(p=>p.parentNode===t?"self":n(p)?"scripted":p.parentElement?p.parentElement.tagName+"."+p.parentElement.className:String(p.parentNode)),childCount:e.children.length,domChildCount:r.length,groupDomHtml:t.outerHTML.slice(0,500),foreignParentHtml:(l=(c=r.find(p=>!n(p)&&p.parentElement))==null?void 0:c.parentElement)==null?void 0:l.outerHTML.slice(0,300),detachedHtml:r.filter(p=>!n(p)).map(p=>p.outerHTML).join("").slice(0,500),htmlClass:document.documentElement.className,extensionId:o,foreignMutator:a,...KM()},s}function YM(e,t,r,n,o,a){var Te;let i,s=QM(r);if(s){if(i=QM(o),!i||i.prefix!==s.prefix)return!1}else return!1;let c=[...gn(n)],l=[...gn(t)];if(c.length!==l.length)return!1;a==null||a();let p={digitGroupingMap:new Map};hm(p,t.children);let y=i.digits,x=s.digits,M=!1,L=!1;y[0]==="-"&&(M=!0),x[0]==="-"&&(L=!0);let T=n.children.length-y.length,w=(Te=n.mutable_domChildren)==null?void 0:Te.slice(0,T);if(!w)return!1;let k=n.children[T],V=t.children[T];if(M&&!L){let P=k;if((P==null?void 0:P.type)!=="char"||P.latex!=="-")return!1;let D=P.getDomNode();if(!D)return!1;D.remove()}let j;if(M&&L&&(j=k.getDomNode()),!M&&L){j=document.createElement("span"),j.textContent="\u2212";let P=k==null?void 0:k.getDomNode();if(!P)return!1;e.insertBefore(j,P)}if(j){w.push(j);let P=hi(V);j.classList.toggle("dcg-mq-binary-operator",P)}M&&(k=k==null?void 0:k.nextSibling()),L&&(V=V==null?void 0:V.nextSibling());function te(P){let D="dcg-mq-digit",B=gm(p,P);return B&&(D+=" "+B),D}for(;V&&k;V=V.nextSibling(),k=k.nextSibling()){if((V==null?void 0:V.type)!=="char"||(k==null?void 0:k.type)!=="char")return!1;let P=k.getDomNode();if(!P)return!1;P.textContent!==V.latex&&(P.textContent=V.latex),P.className=te(V),w.push(P)}for(;k;k=k.nextSibling()){let P=k.getDomNode();if(!P)return!1;P.remove()}if(V){let P=document.createDocumentFragment();for(;V;V=V.nextSibling()){if(V.type!=="char")return!1;let D=document.createElement("span");D.className=te(V),D.textContent=V.latex,P.appendChild(D),w.push(D)}e.appendChild(P)}if(w.length!==t.children.length)return!1;for(let P=1;P<l.length;P++)l[P].mutable_domNode=c[P].mutable_domNode,l[P].mutable_domChildren=c[P].mutable_domChildren;return t.mutable_domChildren=w,t.mutable_domNode=e,!0}function QM(e){if(typeof e!="string")return;let t=e.match(/-?[0-9.]+$/g);if(t&&t.length===1)return{latex:e,prefix:e.substring(0,e.length-t[0].length),digits:t[0]}}var Il={"\\ ":"\xA0","~":"\xA0","-":"\u2212","'":"\u2032","\\square":"\u25A1","\\mid":"\u2223","\\parallel":"\u2225","\\nparallel":"\u2226","\\perp":"\u27C2","\\infty":"\u221E","\\approx":"\u2248","\\to":"\u2192","\\ne":"\u2260","\\degree":"\xB0","\\bigcirc":"\u25EF","\\angle":"\u2220","\\triangle":"\u25B3","\\cong":"\u2245","\\measuredangle":"\u2221","\\parallelogram":"\u25B1","\\ncong":"\u2247","\\nsim":"\u2241","\\$":"$","\\%":"%","\\&":"&","\\int":"\u222B","\\sum":"\u2211","\\prod":"\u220F","\\coprod":"\u2210","\\cdot":"\xB7","\\ge":"\u2265","\\geq":"\u2265","\\le":"\u2264","\\sim":"~","\\pm":"\xB1","\\mp":"\u2213","\\times":"\xD7","\\div":"\xF7","\\backslash":"\\","\\varphi":"\u03C6","\\epsilon":"\u03F5","\\varepsilon":"\u03B5","\\varpi":"\u03D6","\\varsigma":"\u03C2","\\vartheta":"\u03D1","\\digamma":"\u03DD","\\varkappa":"\u03F0","\\varrho":"\u03F1","\\alpha":"\u03B1","\\beta":"\u03B2","\\gamma":"\u03B3","\\delta":"\u03B4","\\zeta":"\u03B6","\\eta":"\u03B7","\\theta":"\u03B8","\\iota":"\u03B9","\\kappa":"\u03BA","\\lambda":"\u03BB","\\mu":"\u03BC","\\nu":"\u03BD","\\xi":"\u03BE","\\pi":"\u03C0","\\rho":"\u03C1","\\sigma":"\u03C3","\\tau":"\u03C4","\\upsilon":"\u03C5","\\phi":"\u03D5","\\chi":"\u03C7","\\psi":"\u03C8","\\omega":"\u03C9","\\Gamma":"\u0393","\\Delta":"\u0394","\\Theta":"\u0398","\\Lambda":"\u039B","\\Xi":"\u039E","\\Pi":"\u03A0","\\Sigma":"\u03A3","\\Upsilon":"\u03D2","\\Phi":"\u03A6","\\Psi":"\u03A8","\\Omega":"\u03A9","\\forall":"\u2200"},aO={"'":"span","\u2033":"span","\\square":"span","\\mid":"span","\\parallel":"span","\\nparallel":"span","\\perp":"span","\\backslash":"span","\\phi":"var","\\varphi":"var","\\epsilon":"var","\\varepsilon":"var","\\varpi":"var","\\varsigma":"var","\\vartheta":"var","\\digamma":"var","\\varkappa":"var","\\varrho":"var","\\alpha":"var","\\beta":"var","\\gamma":"var","\\delta":"var","\\zeta":"var","\\eta":"var","\\theta":"var","\\iota":"var","\\kappa":"var","\\lambda":"span","\\mu":"var","\\nu":"var","\\xi":"var","\\pi":"span","\\rho":"var","\\sigma":"var","\\tau":"var","\\chi":"var","\\psi":"var","\\omega":"var","\\upsilon":"var","\\Gamma":"span","\\Delta":"span","\\Theta":"span","\\Lambda":"span","\\Xi":"span","\\Pi":"span","\\Sigma":"span","\\Phi":"span","\\Psi":"span","\\Omega":"span","\\Upsilon":"var","\\forall":"span",ge:"span",le:"span"," ":"span",".":"span",degree:"span",$:"span",":":"span","`":"span",",":"span",infty:"span",approx:"span"},iO={"\\pi":"dcg-mq-nonSymbola","\\lambda":"dcg-mq-nonSymbola","@":"dcg-mq-nonSymbola","\\&":"dcg-mq-nonSymbola","\\%":"dcg-mq-nonSymbola",f:"dcg-mq-f",",":"dcg-mq-comma",".":"dcg-mq-digit",0:"dcg-mq-digit",1:"dcg-mq-digit",2:"dcg-mq-digit",3:"dcg-mq-digit",4:"dcg-mq-digit",5:"dcg-mq-digit",6:"dcg-mq-digit",7:"dcg-mq-digit",8:"dcg-mq-digit",9:"dcg-mq-digit"},sO={"\\Upsilon":"font-family: serif"};function XM(e){return/^[a-z]$/i.test(e)?"var":aO[e]||"span"}function ZM(e){return e==="\\ "||e===" "?Il["\\ "]:(e=e.trim(),Il[e]||Il["\\"+e]||void 0)}function JM(e){return iO[e]}function ek(e){return sO[e]}var Al={sqrt:{width:"",html:'<svg preserveAspectRatio="none" viewBox="0 0 32 54"><path d="M0 33 L7 27 L12.5 47 L13 47 L30 0 L32 0 L13 54 L11 54 L4.5 31 L0 33" /></svg>'},"|":{width:".4em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M4.4 0 L4.4 54 L5.6 54 L5.6 0" /></svg>'},"[":{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 11 24" style="overflow:visible"><path fill="none" stroke="currentColor" stroke-width="0.05em" vector-effect="non-scaling-stroke" d="M8 0.5 L3.5 0.5 L3.5 23.5 L8 23.5" /></svg>'},"]":{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 11 24" style="overflow:visible"><path fill="none" stroke="currentColor" stroke-width="0.05em" vector-effect="non-scaling-stroke" d="M3 0.5 L7.5 0.5 L7.5 23.5 L3 23.5" /></svg>'},"(":{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="3 0 106 186"><path d="M85 0 A61 101 0 0 0 85 186 L75 186 A75 101 0 0 1 75 0" /></svg>'},")":{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="3 0 106 186"><path d="M24 0 A61 101 0 0 1 24 186 L34 186 A75 101 0 0 0 34 0" /></svg>'},"{":{width:".7em",html:'<svg preserveAspectRatio="none" viewBox="10 0 210 350"><path d="M170 0 L170 6 A47 52 0 0 0 123 60 L123 127 A35 48 0 0 1 88 175 A35 48 0 0 1 123 223 L123 290 A47 52 0 0 0 170 344 L170 350 L160 350 A58 49 0 0 1 102 301 L103 220 A45 40 0 0 0 58 180 L58 170 A45 40 0 0 0 103 130 L103 49 A58 49 0 0 1 161 0" /></svg>'},"}":{width:".7em",html:'<svg preserveAspectRatio="none" viewBox="10 0 210 350"><path d="M60 0 L60 6 A47 52 0 0 1 107 60 L107 127 A35 48 0 0 0 142 175 A35 48 0 0 0 107 223 L107 290 A47 52 0 0 1 60 344 L60 350 L70 350 A58 49 0 0 0 128 301 L127 220 A45 40 0 0 1 172 180 L172 170 A45 40 0 0 1 127 130 L127 49 A58 49 0 0 0 70 0" /></svg>'},lVert:{width:".7em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M3.2 0 L3.2 54 L4 54 L4 0 M6.8 0 L6.8 54 L6 54 L6 0" /></svg>'},rVert:{width:".7em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M3.2 0 L3.2 54 L4 54 L4 0 M6.8 0 L6.8 54 L6 54 L6 0" /></svg>'},langle:{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M6.8 0 L3.2 27 L6.8 54 L7.8 54 L4.2 27 L7.8 0" /></svg>'},rangle:{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M3.2 0 L6.8 27 L3.2 54 L2.2 54 L5.8 27 L2.2 0" /></svg>'}},tk={left:{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 11 24" style="overflow:visible"><path fill="none" stroke="currentColor" stroke-width="0.09em" vector-effect="non-scaling-stroke" d="M9.5 0 L3.5 0 L3.5 24 L9.5 24" /></svg>'},right:{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 11 24" style="overflow:visible"><path fill="none" stroke="currentColor" stroke-width="0.09em" vector-effect="non-scaling-stroke" d="M1.5 0 L7.5 0 L7.5 24 L1.5 24" /></svg>'}};function Z(e,t,r,n){let o=document.createElement(t);o.textContent=r,e.appendChild(o),n!=null&&n.style&&o.setAttribute("style",n.style);let a=n==null?void 0:n.className;return a&&(o.className=a),o}function py(e){Z(e,"span","\u200B",{style:"display:inline-block;width:0"})}function Vr(e,t,r){!r||r.children.length===0?(t.className+=" dcg-mq-empty",r&&(r.mutable_domNode=t,r.mutable_domChildren=[])):my(e,r,t)}function my(e,t,r){hm(e,t.children),t.mutable_domNode=r;let n=[];for(let o=0;o<t.children.length;o++){let a=t.children[o],i=t.children[o+1];if(nk(a)&&(i==null?void 0:i.type)==="supsub"){let s=Z(r,"span","",{className:"dcg-mq-scripted"+(i.sup?" dcg-mq-scripted-sup":"")+(i.sub?" dcg-mq-scripted-sub":"")}),c=Z(s,"span","",{className:"dcg-mq-scripted-base"});n.push(uy(e,c,t,a,o)),n.push(uy(e,s,t,i,o+1)),o++}else n.push(uy(e,r,t,a,o))}t.mutable_domChildren=n}function nk(e){return!!e&&!pi(e)}function fm(e){let t=e.parentElement,r=t!=null&&t.classList.contains("dcg-mq-scripted-base")?t.parentElement:t;return r!=null&&r.classList.contains("dcg-mq-scripted")?r:void 0}function uy(e,t,r,n,o){switch(n.type){case"char":let a="";hi(n)&&(a+=" dcg-mq-binary-operator");let s=gm(e,n);if(s&&(a+=" "+s),si(r.marks.ellipsis,o)?a+=" dcg-mq-ellipsis-start":Cn(r.marks.ellipsis,o)?a+=" dcg-mq-ellipsis-end":xa(r.marks.ellipsis,o)&&(a+=" dcg-mq-ellipsis-middle"),si(r.marks.mutable_operatorName,o))a+=" dcg-mq-operator-name",dy(r.children[o-1])||(a+=" dcg-mq-first");else if(Cn(r.marks.mutable_operatorName,o)){a+=" dcg-mq-operator-name";let M=r.children[o+1];if(!dy(M)){let L=Cn(r.marks.mutable_infixOperatorName,o);(M==null?void 0:M.type)==="supsub"||(M.type!=="brackets"||L)&&(a+=" dcg-mq-last")}}else xa(r.marks.mutable_operatorName,o)&&(a+=" dcg-mq-operator-name");let c=XM(n.latex),l=ZM(n.latex)||n.latex,p=ek(n.latex),y=JM(n.latex);return y&&(l==="f"&&a||(a+=" "+y)),Z(t,c,l,{className:a,style:p});case"text-char":return Z(t,"span",n.text,{className:"dcg-mq-string-char"});case"ans":return Z(t,"span","ans",{className:"dcg-mq-ans"});case"token":return hO(e,t,n);case"supsub":return pO(e,t,n,o,r.marks,r.children[o+1],nk(r.children[o-1]));case"brackets":return fO(e,t,n);case"sqrt":return mO(e,t,n);case"frac":return cO(e,t,n);case"binom":return lO(e,t,n);case"summation":return gO(e,t,n);case"group":throw new Error("should not have MQGroup as child of MQGroup");case"percentof":return Z(t,"span","% of ",{className:"dcg-mq-nonSymbola dcg-mq-operator-name"});case"style-cmd":return dO(e,t,n);case"matrix":return uO(e,t,n);case"string":return yO(e,t,n);default:return n}}function cO(e,t,r){let n=Z(t,"span","",{className:"dcg-mq-fraction dcg-mq-non-leaf"}),o=Z(n,"span","",{className:"dcg-mq-numerator"}),a=Z(n,"span","",{className:"dcg-mq-denominator"});return py(n),Vr(e,o,r.num),Vr(e,a,r.den),n}function lO(e,t,r){let n=Z(t,"span","",{className:"dcg-mq-bracket-container dcg-mq-non-leaf"}),o=Al["("],a=Al[")"];fi(n,o,"dcg-mq-bracket-l dcg-mq-paren");let i=Z(n,"span","",{className:"dcg-mq-bracket-middle dcg-mq-non-leaf",style:`margin-left:${o.width}; margin-right:${a.width}`}),s=Z(i,"span","",{className:"dcg-mq-array dcg-mq-non-leaf"}),c=Z(s,"span",""),l=Z(s,"span","");return Vr(e,c,r.num),Vr(e,l,r.den),fi(n,a,"dcg-mq-bracket-r dcg-mq-paren"),n}function uO(e,t,r){let n=Z(t,"span","",{className:"dcg-mq-matrix__container dcg-mq-non-leaf"}),o=tk.left,a=tk.right;fi(n,o,"dcg-mq-bracket-l dcg-mq-paren");let i=Z(n,"span","",{className:"dcg-mq-matrix"}),{numRows:s,numCols:c}=r.getDimensions(),l=e.config.maxResizingMatrixSize,p=e.config.static&&s>l,y=e.config.static&&c>l,x=p?l-1:s,M=y?l-1:c;for(let w=0;w<x;w++){let k=Z(i,"span","",{className:"dcg-mq-matrix__row"});for(let V=0;V<M;V++){let j=Z(k,"span","",{className:"dcg-mq-matrix__cell-container"}),te=Z(j,"span","",{className:"dcg-mq-matrix__cell dcg-mq-non-leaf"}),Te=r.getChildAt(V,w);my(e,Te,te),Te.children.length===0&&te.classList.add("dcg-mq-matrix__cell--empty")}y&&rk(k)}if(p){let w=Z(i,"span","",{className:"dcg-mq-matrix__row"});for(let k=0;k<M+(y?1:0);k++)rk(w)}fi(n,a,"dcg-mq-bracket-r dcg-mq-paren");let L=Z(n,"span","",{className:"dcg-mq-matrix__pull-handle"}),T=`${s} \xD7 ${c}`;return Z(L,"span",T,{className:"dcg-mq-matrix__dimensions"}),(p||y)&&(n.classList.add("dcg-mq-matrix__container--truncated"),Z(n,"span",T,{className:"dcg-mq-matrix__truncated-dimensions"})),n}function rk(e){let t=Z(e,"span","",{className:"dcg-mq-matrix__cell-container"}),r=Z(t,"span","",{className:"dcg-mq-matrix__cell dcg-mq-non-leaf"});Z(r,"span","\u22EF",{className:"dcg-mq-matrix-ellipsis"})}function dO(e,t,r){return ok(t,r,n=>{Vr(e,n,r.arg)})}function pO(e,t,r,n,o,a,i){let c=Cn(o.mutable_operatorName,n-1)&&!dy(r)&&(a==null?void 0:a.type)!=="brackets",l=Z(t,"span","",{className:"dcg-mq-supsub dcg-mq-non-leaf"+(c?" dcg-mq-after-operator-name":"")});if(r.sup){let p=Z(l,"span","",{className:"dcg-mq-sup"});Vr(e,p,r.sup),r.sub||(l.className+=" dcg-mq-sup-only")}if(r.sub){let p=Z(l,"span","",{className:"dcg-mq-sub"});Vr(e,p,r.sub)}return r.sub&&!i&&py(l),l}function fi(e,t,r=""){let n=Z(e,"span","",{className:"dcg-mq-scaled "+r,style:t.width?`width:${t.width}`:void 0});return n.innerHTML=t.html,n}function mO(e,t,r){let n;if(r.index){n=t=Z(t,"span","",{className:"dcg-mq-nthroot-container dcg-mq-non-leaf"});let i=Z(t,"sup","",{className:"dcg-mq-nthroot dcg-mq-non-leaf"});Vr(e,i,r.index)}let o=Z(t,"span","",{className:"dcg-mq-sqrt-container "+(r.index?"dcg-mq-scaled":"dcg-mq-non-leaf")});n!=null||(n=o),fi(o,Al.sqrt,"dcg-mq-sqrt-prefix");let a=Z(o,"span","",{className:"dcg-mq-non-leaf dcg-mq-sqrt-stem"});return Vr(e,a,r.radicand),n}function gO(e,t,r){let n=Il[r.kind];if(!n)throw new Error("could not find summation symbol: "+r.kind);if(r.kind==="\\int"){let o=Z(t,"span","",{className:"dcg-mq-int dcg-mq-non-leaf"});Z(o,"big",n);let a=Z(o,"span","",{className:"dcg-mq-supsub dcg-mq-non-leaf"}),i=Z(a,"span","",{className:"dcg-mq-sup"});i=Z(i,"span","",{className:"dcg-mq-sup-inner"}),Vr(e,i,r.sup);let s=Z(a,"span","",{className:"dcg-mq-sub"});return Vr(e,s,r.sub),py(a),o}else{let o=Z(t,"span","",{className:"dcg-mq-large-operator dcg-mq-non-leaf"}),a=Z(o,"span","",{className:"dcg-mq-to"});a=Z(a,"span",""),Vr(e,a,r.sup),Z(o,"big",n);let i=Z(o,"span","",{className:"dcg-mq-from"});return i=Z(i,"span",""),Vr(e,i,r.sub),o}}function hO(e,t,r){let n=e.previousTokenNodes.get(r);if(n)return t.appendChild(n),e.currentTokenNodes.set(r,n),n;let o=Z(t,"span","",{className:"dcg-mq-ignore-mousedown dcg-mq-token"});return o.setAttribute("data-dcg-mq-token",r.id),e.currentTokenNodes.set(r,o),o}function fO(e,t,r){let n=Al[r.leftSymbol],o=Al[r.rightSymbol],a=r.ghostSide==="left"?" dcg-mq-ghost":"",i=r.ghostSide==="right"?" dcg-mq-ghost":"",s=Z(t,"span","",{className:"dcg-mq-non-leaf dcg-mq-bracket-container"});fi(s,n,"dcg-mq-bracket-l dcg-mq-paren"+a);let c="dcg-mq-bracket-middle dcg-mq-non-leaf";r.middle.children.length===0&&e.config.quietEmptyDelimeters.has(r.leftSymbol)&&(c+=" dcg-mq-quiet-delimiter");let l=Z(s,"span","",{className:c,style:`margin-left:${n.width};margin-right:${o.width}`});return fi(s,o,"dcg-mq-bracket-r dcg-mq-paren"+i),Vr(e,l,r.middle),s}function yO(e,t,r){let n=Z(t,"span","",{className:"dcg-mq-string"}),o=r.ghostSide==="left"?" dcg-mq-ghost":"";Z(n,"span","\u201C",{className:"dcg-mq-string__lquote"+o});let a=Z(n,"span","",{className:"dcg-mq-string__body"});Vr(e,a,r.body);let i=r.ghostSide==="right"?" dcg-mq-ghost":"";return Z(n,"span","\u201D",{className:"dcg-mq-string__rquote"+i}),n}function bO(e,t){var x,M,L;let{selection:r}=e,n=e.mouseDownState.type==="mouse-down-selecting",{left:o,right:a,group:i}=r,s=i.mutable_domNode,c=i.mutable_domChildren;if(!s||!c)throw new Error("Programming Error: We just rendered. Where's the DOM pointers?");let l=T=>{var w;return T.parentNode===s||((w=fm(T))==null?void 0:w.parentNode)===s};if(!c.every(l))throw jM(i,s,c,l);let p=An(r);if(r.matrixPullHandleType&&p)return xO(e,p,r.matrixPullHandleType);let y=e.config.static?void 0:vO(r);if(o.eq(a)){let T="dcg-mq-cursor";n||(T+=" dcg-mq-should-blink");let w=Z(s,"span","\u200B",{className:T}),k=c[o.index];if(k){let P=fm(k);P&&k.parentNode===P?(x=P.firstElementChild)==null||x.appendChild(w):k.before(w)}else s.appendChild(w);let V=i.children.length===0,te=((M=i.parent())==null?void 0:M.type)==="matrix"?"dcg-mq-matrix__cell--empty":"dcg-mq-empty";return V&&s.classList.remove(te),e.selectionDom=w,{unSelect:()=>{w.remove(),V&&s.classList.add(te),y==null||y()}}}else{let T="dcg-mq-selection";t&&(T+=" dcg-mq-blur");let w=[],k=[],V=[],j=()=>{if(V.length===0)return;let P=Z(s,"span","",{className:T});s.insertBefore(P,V[0]);for(let D of V)P.appendChild(D);k.push(P),V=[]};for(let P=o.index;P<a.index;P++){let D=c[P],B=fm(D);B&&P+1<a.index&&fm(c[P+1])===B?(V.push(B),P++):B?(j(),D.classList.add("dcg-mq-selection"),D.classList.toggle("dcg-mq-blur",t),w.push(D)):V.push(D)}j();let te=c[r.head.eq(a)?a.index-1:o.index];return e.selectionDom=(L=k.find(P=>P.contains(te)))!=null?L:te,{unSelect:()=>{for(let P of w)P.classList.remove("dcg-mq-selection","dcg-mq-blur");for(let P of k){let D=Array.from(P.childNodes),B=D[D.length-1];P.replaceWith(B);for(let I=0;I<D.length-1;I++)s.insertBefore(D[I],B)}y==null||y()}}}}function xO(e,t,r){let n=t.getDomNode();if(!n)throw new Error("Programming error: No matrix DOM");return n.classList.add("dcg-mq-matrix--resizing"),r==="keyboard"&&n.classList.add("dcg-mq-matrix--resizing-keyboard"),e.mouseDownState.type==="mouse-down-resizing-matrix"&&n.classList.add("dcg-mq-matrix--resizing-drag"),{unSelect:()=>{n.classList.remove("dcg-mq-matrix--resizing"),n.classList.remove("dcg-mq-matrix--resizing-keyboard"),n.classList.remove("dcg-mq-matrix--resizing-drag")}}}function vO(e){let t=rm(e),r=t==null?void 0:t.cell.getDomNode(),n=t==null?void 0:t.matrix.getDomNode();if(!(!r&&!n))return r==null||r.classList.add("dcg-mq-matrix__cell--selected"),n==null||n.classList.add("dcg-mq-matrix--selected"),()=>{r==null||r.classList.remove("dcg-mq-matrix__cell--selected"),n==null||n.classList.remove("dcg-mq-matrix--selected")}}var ym=class{constructor(t){this.container=t}render(t,r){var c;let{root:n}=t,o=ts(t.config,ak),a=Qe(o,this.lastConfig),i=n.mutable_domNode===void 0||!a,s=Qn(t.root);i?(a&&this.lastLatex&&this.lastRoot&&YM(this.container,n,s,this.lastRoot,this.lastLatex,this.unSelect)||this.renderFromScratch(t,o),this.unSelect=this.insertSelection(t,r)):((c=this.unSelect)==null||c.call(this),this.unSelect=this.insertSelection(t,r)),this.lastConfig=o,this.lastLatex=s,this.lastRoot=n}renderFromScratch(t,r){var i;let{root:n}=t,{unsuppressBlurs:o}=wO(this.container);this.container.innerHTML="";let a={config:r,digitGroupingMap:new Map,previousTokenNodes:(i=this.previousTokenNodes)!=null?i:new Map,currentTokenNodes:new Map};my(a,n,this.container),this.previousTokenNodes=a.currentTokenNodes,o()}insertSelection(t,r){let{config:n,selection:o}=t,a=(r!=="focused"||n.static)&&Je(o),i=r==="unintentional-blurred";if(!a){let{unSelect:s}=bO(t,i);return s}return()=>{}}};function dy(e){return!!(!e||e.type==="char"&&e.latex==="."||hi(e)||e.type==="summation")}function wO(e){let t=document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)?document.activeElement:null,r=a=>a.stopImmediatePropagation(),n=["blur","focusout","focus","focusin"];if(t)for(let a of n)document.addEventListener(a,r,!0);function o(){if(t){t.isConnected&&t.focus();for(let a of n)document.removeEventListener(a,r,!0)}}return{unsuppressBlurs:o}}var ik="\u27A4",TO="\u02D9",ck={"\\mathrm":Ca("span","dcg-mq-roman dcg-mq-font"),"\\mathit":Ca("i","dcg-mq-font"),"\\mathbf":Ca("b","dcg-mq-font"),"\\mathsf":Ca("span","dcg-mq-sans-serif dcg-mq-font"),"\\mathtt":Ca("span","dcg-mq-monospace dcg-mq-font"),"\\underline":Ca("span","dcg-mq-non-leaf dcg-mq-underline"),"\\overline":Ca("span","dcg-mq-non-leaf dcg-mq-overline"),"\\overrightarrow":gy(!1,!0),"\\overleftarrow":gy(!0,!1),"\\overleftrightarrow":gy(!0,!0),"\\overarc":Ca("span","dcg-mq-non-leaf dcg-mq-overarc"),"\\dot":{makeDOM:(e,t,r)=>{let n=Z(e,"span","",{className:"dcg-mq-non-leaf"}),o=Z(n,"span","",{className:"dcg-mq-dot-recurring-inner"});Z(o,"span",TO,{className:"dcg-mq-dot-recurring"});let a=Z(o,"span","",{className:"dcg-mq-empty-box"});return r(a),n}},"\\textcolor":{makeDOM:(e,t,r)=>{let n=Z(e,"span","",{className:"dcg-mq-textcolor",style:`color:${t.styleParam}`});return r(n),n}},"\\vec":sk("\u2192"),"\\tilde":sk("~"),"\\hat":{makeDOM:(e,t,r)=>{let n=Z(e,"span","",{className:"dcg-mq-non-leaf"});Z(n,"span","^",{className:"dcg-mq-hat-prefix"});let o=Z(n,"span","",{className:"dcg-mq-hat-stem"});return r(o),n}}};function lk(e){return ck.hasOwnProperty(e)}function Ca(e,t){return{makeDOM:(r,n,o)=>{let a=Z(r,e,"",{className:t});return o(a),a}}}function gy(e,t){return{makeDOM:(r,n,o)=>{let a=Z(r,"span","",{className:"dcg-mq-non-leaf dcg-mq-overarrow"});return e&&Z(a,"span",ik,{className:"dcg-mq-arrow-left-content"}),o(a),t&&Z(a,"span",ik,{className:"dcg-mq-arrow-right-content"}),a}}}function sk(e){return{makeDOM:(t,r,n)=>{let o=Z(t,"span","",{className:"dcg-mq-non-leaf"});Z(o,"span",e,{className:"dcg-mq-diacritic-above"});let a=Z(o,"span","",{className:"dcg-mq-diacritic-stem"});return n(a),o}}}function ok(e,t,r){return ck[t.val].makeDOM(e,t,r)}function uk(e){return e.type==="style-cmd"&&e.val==="\\mathrm"}function bm(e,t,r){t.push(r)}function Er(e,t){let r=[];return dk(e,t,r),ve(r)}function dk(e,t,r){for(let n=0;n<t.children.length;n++){let o=t.children[n];switch(o.type){case"digit":bm(e,r,new wt(o.content));break;case"symbol":bm(e,r,new wt(tc(o.content)));break;case"letter":bm(e,r,new wt(o.content));break;case"sqrt":r.push(new ka({index:o.index&&Er(e,o.index),radicand:Er(e,o.radicand)}));break;case"brackets":r.push(new yn({leftSymbol:o.leftSymbol,rightSymbol:o.rightSymbol,leftLatex:o.leftLatex,rightLatex:o.rightLatex,ghostSide:o.ghostSide,middle:Er(e,o.middle)}));break;case"summation":r.push(new di({kind:o.kind,sup:Er(e,o.sup),sub:Er(e,o.sub)}));break;case"supsub":r.push(new Ht({sup:o.sup&&Er(e,o.sup),sub:o.sub&&Er(e,o.sub)}));break;case"command":if(o.ctrlSeq==="frac")r.push(new Ko({num:Er(e,o.blocks[0]),den:Er(e,o.blocks[1])}));else if(o.ctrlSeq==="binom")r.push(new ui({num:Er(e,o.blocks[0]),den:Er(e,o.blocks[1])}));else if(lk("\\"+o.ctrlSeq))r.push(new Js({val:"\\"+o.ctrlSeq,styleParam:void 0,arg:Er(e,o.blocks[0])}));else if(o.ctrlSeq==="token"||o.ctrlSeq==="tokenName"){let i=Er(e,o.blocks[0]).children.map(s=>s.type==="char"?s.latex:"").join("");r.push(new sm({variant:o.ctrlSeq,id:i}))}else{let i=tc(o.ctrlSeq);bm(e,r,new wt(i))}break;case"percentof":r.push(new Zs);break;case"ans":r.push(new Xs);break;case"block":dk(e,o,r);break;case"style-cmd":r.push(new Js({styleParam:o.styleParam,arg:Er(e,o.arg),val:o.ctrlSeq}));break;case"matrix":{let i=o.rows.length===0?[[{type:"block",children:[]}]]:o.rows,s=i.reduce((l,p)=>Math.max(l,p.length),1),c=[];for(let l of i){for(let p of l)c.push(Er(e,p));for(let p=l.length;p<s;p++)c.push(ve([]))}r.push(new Yn({children:c,numCols:s}));break}case"string":{let i=mk(o.text);r.push(new Ma({body:i,ghostSide:void 0}));break}default:return o}}}function pk(e){let t=Qs(e);return t?mk(t):ve([])}function mk(e){let t=[];for(let r=0;r<e.length;r++)t.push(new Ys(e[r]));return new kl(t)}function Pl(e,t){let r={autoOperatorNames:t.autoOperatorNames},n=VM(e,t.autoOperatorNames),o=Er(r,n);if(!t.matrices){for(let a of ci(o))if(a.type==="matrix")return ve([])}if(!t.strings){for(let a of ci(o))if(a.type==="string")return ve([])}return o}function SO(e,t){let r=ii(e.marks.mutable_operatorName,t-1);return(r==null?void 0:r.word)==="log"&&r.right===t}function gk(e,t){return rn(e,{config:t,fracDepth:0})}function rn(e,t,r){oM(e,t.config,!!(r!=null&&r.isInNonLogSubscript));for(let n=0;n<e.children.length;n++){let o=e.children[n];switch(o.type){case"binom":rn(o.num,t),rn(o.den,t);break;case"frac":t.fracDepth++,o.mutable_fracDepth=t.fracDepth,rn(o.num,t),rn(o.den,t),t.fracDepth--;break;case"brackets":rn(o.middle,t);break;case"supsub":o.sub&&rn(o.sub,t,{isInNonLogSubscript:!SO(e,n)}),o.sup&&rn(o.sup,t);break;case"sqrt":o.index&&rn(o.index,t),rn(o.radicand,t);break;case"style-cmd":rn(o.arg,t);break;case"summation":o.sub&&rn(o.sub,t),o.sup&&rn(o.sup,t);break;case"char":case"text-char":case"percentof":case"ans":case"token":case"string":break;case"matrix":for(let a of o.children)rn(a,t);break;default:throw new Error(`Invalid node: ${o.type}`)}}}var MO={"-":"mq-narration-minus","+":"mq-narration-plus","?":"mq-narration-question-mark","<":"mq-narration-less-than",">":"mq-narration-greater-than","\\ge":"mq-narration-greater-than-or-equal-to","\\le":"mq-narration-less-than-or-equal-to","\\sim":"mq-narration-similar","=":"mq-narration-equals","\\approx":"mq-narration-approximately-equal","\\ne":"mq-narration-not-equal","\\ ":"","'":"mq-narration-prime","\u2033":"mq-narration-double-prime","\\pm":"mq-narration-plus-or-minus","\\mp":"mq-narration-minus-or-plus","\\cdot":"mq-narration-times","\\infty":"mq-narration-infinity","\\degree":"mq-narration-degrees","\\cong":"mq-narration-congruent","\\ncong":"mq-narration-not-congruent","\\$":"mq-narration-dollar","\\nparallel":"mq-narration-not-parallel","\\perp":"mq-narration-perpendicular","\\div":"mq-narration-divided-by","\\bigcirc":"mq-narration-circle","\\measuredangle":"mq-narration-measured-angle","\\nsim":"mq-narration-not-similar","\\Upsilon":"mq-narration-capital-upsilon","~":""};function kO(e,t){let r=MO[e];return r===""?"":r!==void 0?t(r):e.startsWith("\\")?e.slice(1):e}function EO(e){return e=e.replace(/ +/g," "),e=e.replace(/(\.)([0-9]+)/g,(t,r,n)=>r+n.split("").join(" ").trim()),e.trim()}function vm(e,t,r){return((/[A-Za-z0-9]$/.test(e)?e+":":e)+" "+t+" "+r).trim()}function _n(e,t){let r=e.type==="group"?Cr(e,t):yk(e,t);return EO(r)}function fy(e,t){if(Je(e))return"";let r="";for(let n=e.left.index;n<e.right.index;n++){let o=e.group.nthChild(n);r+=_n(o,t),o.type!=="text-char"&&(r+=" ")}return r.trim()}function hk(e,t){let r=fy(e,t);return r===""?t.localize("mq-narration-nothing-selected"):r+" "+t.localize("mq-narration-selected")}function Cr(e,t){var a,i;if(e.children.length===0&&((a=e.parent())==null?void 0:a.type)==="matrix")return"0";let r="",n="",o=e.numChildren();for(let s=0;s<o;s++){let c=e.nthChild(s);if(c.type==="char"){if(si(e.marks.mutable_operatorName,s)){n+=c.latex;continue}else if(Cn(e.marks.mutable_operatorName,s)){n+=c.latex;let y="",x=(i=t.autoOperatorNames)==null?void 0:i.get(n);typeof x=="string"&&x.startsWith("mq-narration-op")?y=t.localize(x):typeof x=="string"&&x!=""&&(y=x),r+=y||n,r+=" ",n="";continue}else if(n){n+=c.latex;continue}}let l=yk(c,t),p=c.type==="char"?c.latex:"";c.type!=="text-char"&&(p.length!==1||!/^[0-9.]$/.test(p)&&!fk(e))?r+=" "+l+" ":r+=l}return r}function fk(e){let t=e.parent();return t&&uk(t)}function yk(e,t){switch(e.type){case"ans":return" ans";case"percentof":return" "+t.localize("mq-narration-percent-of")+" ";case"style-cmd":return FO(e,t);case"summation":return IO(e,t);case"token":{let n=e.getDomNode();if(n){let o=[];for(let a of n.children){let i=a.getAttribute("aria-label");typeof i=="string"&&i!==""&&o.push(i.trim())}if(o.length>0)return o.join(" ")}return" "+t.localize("mq-narration-token")+" "+e.id}case"brackets":return PO(e,t);case"sqrt":return NO(e,t);case"binom":{let n=Cr(e.num,t),o=Cr(e.den,t);return t.localize("mq-narration-binomial",{num:n,den:o})}case"frac":return BO(e,t);case"supsub":return LO(e,t);case"char":let r=hi(e);return e.latex==="-"&&!r?" "+t.localize("mq-narration-negative"):e.latex==="+"&&!r?" "+t.localize("mq-narration-positive"):/^[a-z]$/i.test(e.latex)?fk(e.parent())?e.latex:`"${e.latex}"`:kO(e.latex,t.localize);case"matrix":return RO(e,t);case"string":return t.localize("mq-narration-start-string")+" "+e.fullText()+" "+t.localize("mq-narration-end-string");case"text-char":return t.speakSpace&&/^\s$/.test(e.text)?t.localize("mq-narration-space"):e.text;default:return""}}var bk={"\\int":"mq-narration-integral","\\sum":"mq-narration-sum","\\prod":"mq-narration-product","\\coprod":"mq-narration-co-product"},CO={"\\int":"mq-narration-summation-integral","\\sum":"mq-narration-summation-sum","\\prod":"mq-narration-summation-product","\\coprod":"mq-narration-summation-co-product"};function IO(e,t){let r=Cr(e.sub,t),n=Cr(e.sup,t);return t.localize(CO[e.kind],{start:r,end:n})+","}var xm={"(":"parenthesis",")":"parenthesis","|":"pipe","{":"brace","}":"brace","[":"bracket","]":"bracket",langle:"angle-bracket",rangle:"angle-bracket",lVert:"double-vertical-line",rVert:"double-vertical-line"},xk={"angle-bracket":"mq-narration-left-angle-bracket",brace:"mq-narration-left-brace",bracket:"mq-narration-left-bracket","double-vertical-line":"mq-narration-left-double-vertical-line",parenthesis:"mq-narration-left-parenthesis",pipe:"mq-narration-left-pipe"},vk={"angle-bracket":"mq-narration-right-angle-bracket",brace:"mq-narration-right-brace",bracket:"mq-narration-right-bracket","double-vertical-line":"mq-narration-right-double-vertical-line",parenthesis:"mq-narration-right-parenthesis",pipe:"mq-narration-right-pipe"},AO={"angle-bracket":"mq-narration-block-angle-bracket",brace:"mq-narration-block-brace",bracket:"mq-narration-block-bracket","double-vertical-line":"mq-narration-block-double-vertical-line",parenthesis:"mq-narration-block-parenthesis",pipe:"mq-narration-block-pipe"};function wm(e,t,r){let n=cm(e,t),o=xm[n];if(!o)return"";let{leftSymbol:a,rightSymbol:i}=e;return a==="|"&&i==="|"?r.localize(t==="left"?"mq-narration-absolute-value-start":"mq-narration-absolute-value-end"):r.localize(t==="left"?xk[o]:vk[o])}function PO(e,t){let{leftSymbol:r,rightSymbol:n}=e;if(r==="|"&&n==="|")return["",t.localize("mq-narration-absolute-value-start")+",",Cr(e.middle,t)+",",t.localize("mq-narration-absolute-value-end")].join(" ");let o=xm[r],a=xm[n],i=o?t.localize(xk[o]):"",s=a?t.localize(vk[a]):"";return["",i+",",Cr(e.middle,t)+" ,",s].join(" ")}function NO(e,t){let r=Cr(e.radicand,t);if(e.index){if(e.index.children.length===1&&e.index.children[0].type==="char"&&e.index.children[0].latex==="3")return" "+t.localize("mq-narration-cube-root",{radicand:r});{let n=Cr(e.index,t);return" "+t.localize("mq-narration-nth-root",{index:n,radicand:r})}}return" "+t.localize("mq-narration-square-root",{radicand:r})}function _O(e,t){let r=hy(e);if(!Nl.test(r)||t!=null&&t.ignoreShorthand)return;if(r==="0")return t.localize("mq-narration-power-0");if(r==="2")return t.localize("mq-narration-power-squared");if(r==="3")return t.localize("mq-narration-power-cubed");let n=/^([+-]?)(\d{1,3})$/.exec(r);if(n){let[,a,i]=n,s=parseInt(i,10),c=yy(s,t.language),l=`${s}`;return a==="-"?t.localize("mq-narration-power-negative-ordinal",{power:l,category:c}):t.localize("mq-narration-power-ordinal",{power:l,category:c})}let o=Cr(e,t);return t.localize("mq-narration-power",{power:o})}function yy(e,t){return new Intl.PluralRules(t,{type:"ordinal"}).select(e)}function LO(e,t){let r="";if(e.sub){let n=Cr(e.sub,t);r+=" "+t.localize("mq-narration-sub",{sub:n})+" "}if(e.sup){let n=_O(e.sup,t);if(n)r+=n;else{let o=Cr(e.sup,t);r+=" "+t.localize("mq-narration-sup",{sup:o})+" "}}return r}function RO(e,t){let r="",{numRows:n,numCols:o}=e.getDimensions();r+=t.localize("mq-narration-matrix-start",{rows:n,columns:o});let a=t.maxResizingMatrixSize,i=t.static&&n>a,s=t.static&&o>a,c=i?a-1:n,l=s?a-1:o,p=DO(e);for(let y=0;y<c;y++){r+=" "+wk(y,t);for(let x=0;x<l;x++)p||(r+=" "+Tk(x,t)),r+=" "+Cr(e.getChildAt(x,y),t);s&&(r+=" \u22EF")}return i&&(r+=" \u22EF"),r+=" "+t.localize("mq-narration-matrix-end"),r}function DO(e){return e.children.every(t=>t.children.length===0?!0:t.children.length!==1?!1:t.children[0].type==="char")}function wk(e,t){return e+=1,t.localize("mq-narration-matrix-row-start",{index:`${e}`,category:yy(e,t.language)})}function Tk(e,t){return e+=1,t.localize("mq-narration-matrix-column-start",{index:`${e}`,category:yy(e,t.language)})}function qO(e,t){switch(e.val){case"\\textcolor":return" "+e.styleParam;case"\\mathbf":return t.localize("mq-narration-style-bold-font");case"\\mathit":return t.localize("mq-narration-style-italic-font");case"\\mathrm":return"";case"\\mathsf":return t.localize("mq-narration-style-serif-font");case"\\mathtt":return t.localize("mq-narration-style-math-text");case"\\overarc":return t.localize("mq-narration-style-over-arc");case"\\overleftarrow":return t.localize("mq-narration-style-over-left-arrow");case"\\overleftrightarrow":return t.localize("mq-narration-style-over-left-and-right-arrow");case"\\overline":return t.localize("mq-narration-style-overline");case"\\overrightarrow":return t.localize("mq-narration-style-over-right-arrow");case"\\underline":return t.localize("mq-narration-style-underline");case"\\dot":return t.localize("mq-narration-style-dot");case"\\tilde":return t.localize("mq-narration-style-tilde");case"\\hat":return t.localize("mq-narration-style-hat");case"\\vec":return t.localize("mq-narration-style-vec");default:return e.val,""}}function by(e,t){var r;switch(e.val){case"\\textcolor":return t.localize("mq-narration-style-color-start",{color:(r=e.styleParam)!=null?r:""});case"\\mathbf":return t.localize("mq-narration-style-bold-font-start");case"\\mathit":return t.localize("mq-narration-style-italic-font-start");case"\\mathrm":return"";case"\\mathsf":return t.localize("mq-narration-style-serif-font-start");case"\\mathtt":return t.localize("mq-narration-style-math-text-start");case"\\overarc":return t.localize("mq-narration-style-over-arc-start");case"\\overleftarrow":return t.localize("mq-narration-style-over-left-arrow-start");case"\\overleftrightarrow":return t.localize("mq-narration-style-over-left-and-right-arrow-start");case"\\overline":return t.localize("mq-narration-style-overline-start");case"\\overrightarrow":return t.localize("mq-narration-style-over-right-arrow-start");case"\\underline":return t.localize("mq-narration-style-underline-start");case"\\dot":return t.localize("mq-narration-style-dot-start");case"\\tilde":return t.localize("mq-narration-style-tilde-start");case"\\hat":return t.localize("mq-narration-style-hat-start");case"\\vec":return t.localize("mq-narration-style-vec-start");default:return e.val,""}}function OO(e,t){var r;switch(e.val){case"\\textcolor":return t.localize("mq-narration-style-color-end",{color:(r=e.styleParam)!=null?r:""});case"\\mathbf":return t.localize("mq-narration-style-bold-font-end");case"\\mathit":return t.localize("mq-narration-style-italic-font-end");case"\\mathrm":return"";case"\\mathsf":return t.localize("mq-narration-style-serif-font-end");case"\\mathtt":return t.localize("mq-narration-style-math-text-end");case"\\overarc":return t.localize("mq-narration-style-over-arc-end");case"\\overleftarrow":return t.localize("mq-narration-style-over-left-arrow-end");case"\\overleftrightarrow":return t.localize("mq-narration-style-over-left-and-right-arrow-end");case"\\overline":return t.localize("mq-narration-style-overline-end");case"\\overrightarrow":return t.localize("mq-narration-style-over-right-arrow-end");case"\\underline":return t.localize("mq-narration-style-underline-end");case"\\dot":return t.localize("mq-narration-style-dot-end");case"\\tilde":return t.localize("mq-narration-style-tilde-end");case"\\hat":return t.localize("mq-narration-style-hat-end");case"\\vec":return t.localize("mq-narration-style-vec-end");default:return e.val,""}}function FO(e,t){let r=Cr(e.arg,t),n=by(e,t),o=OO(e,t);return n?n+", "+r+" "+o:r}function hy(e){let t="";for(let r of e.children){if(r.type!=="char")return"";t+=r.latex}return t}var Nl=/^[\+\-]?[\d]+$/;function BO(e,t){let r=hy(e.num),n=hy(e.den),o=Cr(e.num,t),a=Cr(e.den,t),i=e.mutable_fracDepth&&e.mutable_fracDepth>1?t.localize("mq-narration-fraction-nested",{num:o,den:a}):t.localize("mq-narration-fraction",{num:o,den:a});if(!(t!=null&&t.ignoreShorthand)&&Nl.test(r)&&Nl.test(n)){let y="";r[0]=="-"&&(y=t.localize("mq-narration-negative")),r[0]=="+"&&(y=t.localize("mq-narration-positive")),i=t.localize("mq-narration-fraction-shorthand",{num:zd(Math.abs(parseInt(r))),den:zd(parseInt(n)),numPrefix:y,full:i})}let s=!1,c;for(c=e.prevSibling();(c==null?void 0:c.type)==="char"&&(c.latex==="\\ "||Nl.test(c.latex));c=c.prevSibling())Nl.test(c.latex)&&(s=!0);let l=c;return s&&!((l==null?void 0:l.type)==="char"&&l.latex===".")?" "+t.localize("mq-narration-fraction-and")+" "+i:i}function Sk(e,t,r){switch(e.type){case"char":case"text-char":case"percentof":case"ans":case"token":return"";case"brackets":if(e.leftLatex==="|"&&e.rightLatex==="|")return r.localize("mq-narration-absolute-value");let n=xm[e.leftLatex];return n?r.localize(AO[n]):"";case"sqrt":return e.index===void 0?r.localize("mq-narration-root"):r.localize(Cl(e,t)==="index"?"mq-narration-index":"mq-narration-radicand");case"binom":return r.localize(ec(e,t)==="num"?"mq-narration-index-upper":"mq-narration-index-lower");case"frac":return r.localize(ec(e,t)==="num"?"mq-narration-numerator":"mq-narration-denominator");case"supsub":return r.localize(mi(e,t)==="sub"?"mq-narration-subscript":"mq-narration-superscript");case"summation":return r.localize(mi(e,t)==="sub"?"mq-narration-bound-lower":"mq-narration-bound-upper");case"style-cmd":return qO(e,r);case"matrix":{let{x:o,y:a}=e.getPosOfChild(e.children[t]);return wk(a,r)+" "+Tk(o,r)}case"string":return r.localize("mq-narration-string");default:throw new Error(`Invalid node: ${e.type}`)}}var rc={"(":")",")":"(","[":"]","]":"[","{":"}","}":"{","\\{":"\\}","\\}":"\\{",langle:"rangle",rangle:"langle","\\langle ":"\\rangle ","\\rangle ":"\\langle ","|":"|",lVert:"rVert",rVert:"lVert","\\lVert ":"\\rVert ","\\rVert ":"\\lVert "};function _l(e,t,r,n,o,a){let i=t==="either"?"left":t;if(!Je(e.selection))return Mk(e,r,o,n,a,i,void 0);let s=e.selection.head,c=e.selection.group;if(t==="left"||t==="either"){let x=s.nodeAfter();if((x==null?void 0:x.type)==="brackets"){let M=Tm(e,x,x.middle.firstCursor(),"left",r,n);if(M)return M}}if(t==="right"||t==="either"){let x=s.nodeBefore();if((x==null?void 0:x.type)==="brackets"){let M=Tm(e,x,x.middle.lastCursor(),"right",o,a);if(M)return M}}let l=c.parent();if((l==null?void 0:l.type)==="brackets"){if(t==="left"||t==="either"){let x=Tm(e,l,s,"left",r,n);if(x)return x}if(t==="right"||t==="either"){let x=Tm(e,l,s,"right",o,a);if(x)return x}}let p=c.lastCursorInDir(Ze(i)),y=Pt(s,p);return e=e.withSelection(y),Mk(e,r,o,n,a,i,Ze(i))}function Tm(e,t,r,n,o,a){if(!r.group.eq(t.firstChild()))throw new Error("Programming Error: typedCursor not inside bracketNode");if(t.ghostSide!==n)return;let i=n==="left"?o:t.leftSymbol,s=n==="right"?o:t.rightSymbol;if(!kk(e.config,i,s))return;let c=t.containingSelection(),l=t.firstChild(),p=fn(Pt(l.lastCursorInDir(n),r)),y=fn(Pt(l.lastCursorInDir(Ze(n)),r)),{insertedSelection:x}=Ue(c,p),{root:M,inserted:L}=et(se(vt(x,Ze(n))),ny(El(t,ve(y)),n,o,a)),T;return n==="left"?T=L.middle.firstCursor():T=L.containingSelection().right,e=e.withRootAndSelection(M,se(T)),{model:e,inserted:L}}function kk(e,t,r){if(rc[t]==r)return!0;switch(e.restrictMismatchedBrackets){case"none":return!1;case!1:default:return!0;case!0:return t==="("&&r==="]"||t==="["&&r===")"}}function xy(e,t,r,n){let o=n==="right"?t.leftSymbol:r.leftSymbol,a=n==="right"?r.rightSymbol:t.rightSymbol;return kk(e,o,a)}function Sm(e,t,r){return ny(e,r,cm(t,r),NM(t,r))}function Mk(e,t,r,n,o,a,i){let s=fn(e.selection),c=new yn({leftLatex:n,leftSymbol:t,rightLatex:o,rightSymbol:r,ghostSide:i,middle:ve(s)}),{root:l,inserted:p}=et(e.selection,c);if(a==="right"){let y=p.cursorOnSide("right");e=e.withRootAndSelection(l,se(y))}else{let x=p.middle.firstCursor();e=e.withRootAndSelection(l,se(x))}return{model:e,inserted:p}}function Ek(e){for(;;){let t=e.root.find(r=>r.type!=="string"?!1:!VO(e,r));if(!t)return e;if(t.type!=="string")throw new Error("Unreachable: expected string");e=e.withSplicedMqTree(t.containingSelection(),()=>[Ea(t,void 0)])}}function VO(e,t){if(t.ghostSide===void 0)return!0;if(!Je(e.selection))return!1;let r=e.selection.head;switch(t.ghostSide){case"left":return r.eq(t.cursorOnSide("left"));case"right":return r.eq(t.body.lastCursor())}}function Mm(e){return vy(e,"selection")}function vy(e,t){for(;;){let r=t==="root"?e.root.containingSelection():e.selection,n=SM(r,o=>(o.type==="brackets"||o.type==="string")&&!!o.ghostSide);if(!n)break;if(n.type!=="brackets"&&n.type!=="string")throw new Error(`Unreachable: ${n.type} is not brackets or string`);e=e.withSplicedMqTree(n.containingSelection(),()=>[RM(n,void 0)])}return e}function wy(e,t){let r=e.s(t==="frac"?"mq-narration-over":"mq-narration-choose");if(!Je(e.selection))return Ck(e,t).withAriaQueueItem(r);e=$O(e,e.selection.head,t);let n=e.selection.group.parent();return(n==null?void 0:n.type)==="frac"&&n.num.numChildren()===0?e.withAriaQueueItem(e.s("mq-narration-start-fraction")):e.withAriaQueueItem(r)}function $O(e,t,r){let n=t,o=e.selection.left;for(;;){let s=o.nodeBefore();if(!s||GO(s,s.getIndex(),s.parent()))break;o=s.cursorOnSide("left")}let a=Pt(o,n);if(a===void 0)throw new Error("Programming Error: selection should be valid because left and right have the same parent.");let i=e.withSelection(a);return Ck(i,r)}function Ck(e,t){e=Mm(e);let r=fn(e.selection),n=t==="frac"?Ko:ui,o=new n({num:ve(r),den:ve([])}),{root:a,inserted:i}=et(e.selection,o),s=i.num,c=i.den,l=s.children.length===0?s:c,p=se(l.firstCursor());return e.withRootAndSelection(a,p)}function GO(e,t,r){switch(e.type){case"summation":return!0;case"group":case"frac":case"binom":case"percentof":case"ans":case"token":case"sqrt":case"supsub":case"brackets":case"style-cmd":case"matrix":case"text-char":case"string":return!1;case"char":return e.latex==="."?xa(r.marks.ellipsis,t):e.latex==="\\ "||e.latex===";"||e.latex===","||e.latex===":"||cy(e,r,t)}}function km(e,t){var y;e=Mm(e);let r=fn(e.selection),n=e.selection.left.nodeBefore();if((n==null?void 0:n.type)==="supsub"){Ue(e.selection,[]);let x=Ik(n,t),M=x.lastCursor(),{root:L,insertedSelection:T}=Ue(se(M),r),w=se(T.right);return e=e.withRootAndSelection(L,w),e.withAriaQueueDirEndOf("right",x)}if(n===void 0&&e.config.supSubsRequireOperand&&Je(e.selection))return e;let o=e.selection.right.nodeAfter();if((o==null?void 0:o.type)==="supsub"){Ue(e.selection,[]);let x=Ik(o,t),M=x.firstCursor(),{root:L,insertedSelection:T}=Ue(se(M),r),w=se(T.right);return e=e.withRootAndSelection(L,w),e.withAriaQueueDirEndOf("left",x)}let a=t==="sup"?KO(r):HO(r),{root:i,inserted:s}=et(e.selection,a),c=(y=s.sup)!=null?y:s.sub,l=se(c.lastCursor());e=e.withRootAndSelection(i,l);let p=e.s(t==="sup"?"mq-narration-superscript":"mq-narration-subscript");return e.withAriaQueueItem(p)}function Ik(e,t){return t==="sup"?zO(e):UO(e)}function UO(e){if(e.sub===void 0){let t=new Ht({sup:e.sup,sub:ve([])});e=et(e.containingSelection(),t).inserted}return e.sub}function zO(e){if(e.sup===void 0){let t=new Ht({sup:ve([]),sub:e.sub});e=et(e.containingSelection(),t).inserted}return e.sup}function HO(e){return new Ht({sup:void 0,sub:ve(e)})}function KO(e){return new Ht({sup:ve(e),sub:void 0})}function xo(e,t,r){let{root:n,inserted:o}=et(t,r),a=o.cursorOnSide("right");return e.withRootAndSelection(n,se(a)).withAriaQueueNode(o,{speakSpace:!0})}var Ak={"\u221A":"sqrt","*":"cdot"};function Em(e,t,r){let o=e.selection.head.nodeBefore();if(!o||o.type!=="char"||o.latex!==t)return;let a=o.containingSelection();return xo(e,a,new wt(r))}function WO(e,t){if(e.config.charsThatBreakOutOfSupSub.indexOf(t)>-1&&Je(e.selection)){let{group:r,head:n}=e.selection,o=n.nodeBefore(),a=n.nodeAfter();if(o&&!a){let i=r.parent();if(i&&i.type==="supsub"){let s=i.cursorOnSide("right");e=e.withPointSelection(s)}}}return e}function jO(e,t){if(!e.config.autoSubscriptNumerals||!t.match(/^[0-9]$/)||!Je(e.selection))return;let{head:r,group:n}=e.selection,o=r.nodeBefore();if(!o)return;let a=n.parent();if((a==null?void 0:a.type)==="supsub"&&a.sub===n)return;let i,s;if((o==null?void 0:o.type)==="supsub"?(i=o,s=i.prevSibling()):s=o,!s||!qM(s))return;let c=s==null?void 0:s.parent(),l=s==null?void 0:s.getIndex();if(xa(c.marks.mutable_operatorName,l))return;if(!i)return Pk(e,se(r),new Ht({sup:void 0,sub:ve([new wt(t)])}));let p=i.sub?i.sub.children:[];return Pk(e,o.containingSelection(),new Ht({sup:i.sup,sub:ve(p.concat(new wt(t)))}))}function Pk(e,t,r){let{root:n,inserted:o}=et(t,r),a=o.cursorOnSide("right");return e.withRootAndSelection(n,se(a))}function Rk(e,t){if(Je(e.selection)){let i=(t==='"'||t==="\u201D")&&JO(e);if(i)return i;let s=(t==='"'||t==="\u201C")&&e3(e);if(s)return s}if(Ta(e.selection.group)){if(t.length!==1)throw new Error(`Char ${JSON.stringify(t)} is not one code unit (typeChar).`);if(hM(t))return e;let i=new Ys(t);return xo(e,e.selection,i)}if(t.match(/^[0-9]$/)&&!Je(e.selection)){let{root:i,insertedSelection:s}=Ue(e.selection,[]);e=e.withRootAndSelection(i,s)}let r=jO(e,t);if(r)return r;if(e=WO(e,t),t.match(/^[a-zA-Z0-9]$/))return e=xo(e,e.selection,new wt(t)),e=QO(e,e.selection.right),e;if(e.config.typingSlashWritesDivisionSymbol&&t==="/")return xo(e,e.selection,new wt("\\div"));if(e.config.typingAsteriskWritesTimesSymbol&&t==="*")return xo(e,e.selection,new wt("\\times"));switch(t){case"/":return wy(e,"frac");case"^":return km(e,"sup");case"_":return km(e,"sub");case"(":case")":{let i=t==="("?"left":"right";({model:e}=_l(e,i,"(","(",")",")"));let s=e.s(i==="left"?"mq-narration-left-parenthesis":"mq-narration-right-parenthesis");return e.withAriaQueueItem(s)}case"[":case"]":{let i=t==="["?"left":"right";({model:e}=_l(e,i,"[","[","]","]"));let s=e.s(i==="left"?"mq-narration-left-bracket":"mq-narration-right-bracket");return e.withAriaQueueItem(s)}case"{":case"}":{let i=t==="{"?"left":"right";({model:e}=_l(e,i,"{","\\{","}","\\}"));let s=e.s(i==="left"?"mq-narration-left-brace":"mq-narration-right-brace");return e.withAriaQueueItem(s)}case"|":{({model:e}=_l(e,"either","|","|","|","|"));let{head:i,group:s}=e.selection,c=i.nodeBefore(),l=c!=null?c:s.parent();if((l==null?void 0:l.type)!=="brackets")throw new Error("Programming error: bracket expected");let y=wm(l,c?"right":"left",e.getMathspeakOptions());return e.withAriaQueueItem(y)}case'"':case"\u201C":{if(!e.config.strings)break;let{root:i,inserted:s}=et(e.selection,new Ma({body:ve([]),ghostSide:"right"})),c=s.body.firstCursor();return e.withRootAndSelection(i,se(c)).withAriaQueueItem(e.s("mq-narration-start-string"))}case"\u201D":{if(!e.config.strings)break;return e}case"=":{let i=Em(e,">","\\ge");if(i||(i=Em(e,"<","\\le"),i))return i;break}case">":{let i=Em(e,"-","\\to");if(i)return i;break}case"~":{let i=Em(e,"\\sim","\\approx");if(i)return i;break}case`
`:return e;default:{let i=dm(t);if(i.match(/^\^[0-9]$/)){let s=i[1];return e=km(e,"sup"),xo(e,e.selection,new wt(s))}else if(i&&!Ak[t]){let s=Pl(i,e.config),c=Ue(e.selection,s.children),l=se(c.insertedSelection.right);return e.withRootAndSelection(c.root,l)}}}let n=Ak[t]||gi(t);t==="%"&&e.config.typingPercentWritesPercentOf&&(n="percent");let o=Dk(e,e.selection,n);if(o)return o;let a=tc(n);return xo(e,e.selection,new wt(a))}function QO(e,t){var y,x;let r=t.group.parent();if((r==null?void 0:r.type)==="supsub"){let M=r.parent(),L=r.getIndex(),T=M.marks.mutable_operatorName,w=t.group===r.sub,k=((y=ii(T,L-1))==null?void 0:y.word)==="log";if(w&&!k)return e}let n=(x=t.nodeBefore())==null?void 0:x.getIndex();if(n===void 0)return e;let o=t.group;if(e.config.matrices){let M=ZO(e,o,n);if(M!==void 0)return M}let a=XO(o,n,e.config.autoCommands);if(a===void 0)return e;let i=n-a.length+1,s=hn(o,i,n+1),c=gi(a),l=Dk(e,s,c);if(l)return l;let p=tc(c);return xo(e,s,new wt(p))}var YO=["sqrt","nthroot","cbrt","sum","prod","coprod","int","percent","ans","frac","binom","matrix"];function Ty(e){return YO.includes(e)}function Dk(e,t,r){if(Ty(r))switch(r){case"sqrt":case"nthroot":{let n=new ka({radicand:ve([]),index:r==="nthroot"?ve([]):void 0}),{root:o,inserted:a}=et(t,n),i=se(a.firstChild().firstCursor());return e.withRootAndSelection(o,i)}case"cbrt":{let n=new ka({radicand:ve([]),index:ve([new wt("3")])}),{root:o,inserted:a}=et(t,n),i=se(a.radicand.firstCursor());return e.withRootAndSelection(o,i)}case"sum":case"prod":case"coprod":case"int":{let n=new di({kind:"\\"+r,sub:r!=="int"&&e.config.sumStartsWithNEquals?ve([new wt("n"),new wt("=")]):ve([]),sup:ve([])}),{root:o,inserted:a}=et(t,n),i=se(a.sub.lastCursor());return e.withRootAndSelection(o,i)}case"percent":return xo(e,t,new Zs);case"ans":return xo(e,t,new Xs);case"frac":{let n=new Ko({num:ve([]),den:ve([])}),{root:o,inserted:a}=et(t,n),i=se(a.num.firstCursor());return e.withRootAndSelection(o,i)}case"binom":{let{root:n,insertedSelection:o}=Ue(t,[]);return e=e.withRootAndSelection(n,o),wy(e,"binom")}case"matrix":return e.config.matrices?qk(e,t,{numRows:2,numCols:2}):e;default:return}}function XO(e,t,r){let n,o=r.getReverseTrieRoot();for(let a=t;o&&a>=0;a--){let i=e.children[a];if(i.type!=="char"||xa(e.marks.mutable_operatorName,a))break;o=o.followPath(i.latex),o!=null&&o.endWord&&(n=o.endWord)}return n}var Nk=/^[1-9]$/;function ZO(e,t,r){if(r<2)return;let n=t.children[r-2];if(n.type!=="char"||n.latex!=="#")return;let o=t.children[r-1];if(o.type!=="char"||!Nk.test(o.latex))return;let a=t.children[r];if(a.type!=="char"||!Nk.test(a.latex))return;let i=parseInt(o.latex),s=parseInt(a.latex);return qk(e,hn(t,r-2,r+1),{numRows:i,numCols:s})}function qk(e,t,{numRows:r,numCols:n}){let o=[];for(let l=0;l<r*n;l++)o.push(ve([]));let a=new Yn({children:o,numCols:n}),{root:i,inserted:s}=et(t,a),c=s.getChildAt(0,0).firstCursor();return e.withRootAndSelection(i,se(c)).withAriaQueueItem(e.s("mq-narration-matrix-start",{rows:r,columns:n}))}function JO(e){var a;let t=(a=_k(e.selection.head.nodeBefore()))!=null?a:e.selection.right.nodeAfter()===void 0&&_k(e.selection.group.parent());if(!t)return;let{root:r,inserted:n}=et(t.containingSelection(),Ea(t,void 0)),o=n.cursorOnSide("right");return e.withRootAndSelection(r,se(o)).withAriaQueueItem(e.s("mq-narration-end-string"))}function _k(e){if((e==null?void 0:e.type)==="string"&&e.ghostSide==="right")return e}function e3(e){var a;let t=(a=Lk(e.selection.head.nodeAfter()))!=null?a:Lk(e.selection.group.parent());if(!t)return;let{root:r,inserted:n}=et(t.containingSelection(),Ea(t,void 0)),o=n.body.firstCursor();return e.withRootAndSelection(r,se(o)).withAriaQueueItem(e.s("mq-narration-start-string"))}function Lk(e){if((e==null?void 0:e.type)==="string"&&e.ghostSide==="left")return e}var Ok=e=>Object.entries(e);var t3=["autoOperatorNames","prefixOperatorNames","infixOperatorNames"],ky=t3,ak=["quietEmptyDelimeters","static","maxResizingMatrixSize"],Cm=class e{constructor(){this.children={}}buildPath(t){let r=this.children[t];return r||(r=new e,this.children[t]=r),r}followPath(t){return this.children[t]}},Ll=class{constructor(){this.trieRoot=new Cm;this.reverseTrieRoot=new Cm;this.map=new Map}getTrieRoot(){return this.trieRoot}getReverseTrieRoot(){return this.reverseTrieRoot}set(t,r){this.map.set(t,r);{let n=this.trieRoot;for(let o=0;o<t.length;o++)n=n.buildPath(t[o]);n.endWord=t}{let n=this.reverseTrieRoot;for(let o=t.length-1;o>=0;o--)n=n.buildPath(t[o]);n.endWord=t}}has(t){return this.map.has(t)}get(t){return this.map.get(t)}keys(){return this.map.keys()}},{BuiltInOpNames:xM,AutoOpNames:r3}=n3();function n3(){let e=new Set,t=new Ll,r="arg deg det dim exp gcd hom inf ker lg lim ln log max min sup limsup liminf injlim projlim Pr".split(" ");for(let i=0;i<r.length;i+=1){let s=r[i];e.add(s),t.set(s,1)}let n="sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" ");for(let i=0;i<n.length;i+=1)e.add(n[i]);let o="sin cos tan sec cosec csc cotan cot ctg".split(" ");for(let i=0;i<o.length;i+=1)t.set(o[i],1),t.set("arc"+o[i],1),t.set(o[i]+"h",1),t.set("ar"+o[i]+"h",1),t.set("arc"+o[i]+"h",1);let a="gcf hcf lcm proj span".split(" ");for(let i=0;i<a.length;i+=1)t.set(a[i],1);return{BuiltInOpNames:e,AutoOpNames:t}}function Ey(e,t){let r={...e};for(let[n,o]of Ok(t))switch(n){case"autoOperatorNames":if(o===void 0)break;r[n]=o3(o);break;case"autoCommands":if(o===void 0)break;r[n]=Fk(o);break;case"leftRightIntoCmdGoes":r[n]=a3(o);break;case"infixOperatorNames":case"prefixOperatorNames":if(o===void 0)break;r[n]=Sy(o);break;case"quietEmptyDelimeters":if(o===void 0)break;r[n]=Bk(o);break;default:r[n]=o;break}return r}function Sy(e){if(e.length===0)return new Set;if(typeof e!="string")throw'"'+e+'" not a space-delimited list';if(!/^[a-z]+(?: [a-z]+)*$/i.test(e))throw'"'+e+'" not a space-delimited list of letters';let t=e.split(" "),r=new Set;for(let n=0;n<t.length;n+=1){let o=t[n];if(o.length<2)throw'"'+o+'" not minimum length of 2';r.add(o)}return r}function o3(e){if(typeof e!="string")throw'"'+e+'" not a space-delimited list';if(!/^[a-z\|\-]+(?: [a-z\|\-]+)*$/i.test(e))throw'"'+e+'" not a space-delimited list of letters or "|"';let t=e.split(" "),r=new Ll;for(let n=0;n<t.length;n+=1){let o=t[n];if(o.length<2)throw'"'+o+'" not minimum length of 2';if(o.indexOf("|")<0)r.set(o,o);else{let a=o.split("|");if(a.length>2)throw'"'+o+'" has more than 1 mathspeak delimiter';if(a[0].length<2)throw'"'+o[0]+'" not minimum length of 2';a[1].startsWith("mq-narration-op-")?r.set(a[0],a[1]):r.set(a[0],a[1].replace(/-/g," "))}}return r}function Fk(e){if(typeof e!="string"||!/^[a-z]+(?: [a-z]+)*$/i.test(e))throw'"'+e+'" not a space-delimited list of only letters';let t=e.split(" ");t.push("matrix");let r=new Ll;for(let n=0;n<t.length;n+=1){let o=t[n];if(o.length<2)throw new Error('Autocommand "'+o+'" not minimum length of 2');let a=gi(o);if(!(a in um||Ty(a)))throw new Error(`Invalid auto-command: ${JSON.stringify(o)}`);r.set(o,1)}return r}function Bk(e){return new Set(e.split(" "))}function a3(e){if(e==="up")return"up";if(e==="down")return"down";if(e!==void 0)throw'"up" or "down" required for leftRightIntoCmdGoes option, got "'+e+'"'}var My={strings:!1,matrices:!1,maxResizingMatrixSize:9,logAriaAlerts:!1,needsSystemKeypad:!1,resetCursorOnBlur:!1,autoSubscriptNumerals:!1,supSubsRequireOperand:!1,autoCommands:Fk("alpha beta sqrt theta phi rho pi tau nthroot cbrt sum prod integral percent infinity infty cross ans frac"),infixOperatorNames:Sy(""),prefixOperatorNames:Sy(""),autoOperatorNames:r3,leftRightIntoCmdGoes:void 0,restrictMismatchedBrackets:!1,typingSlashWritesDivisionSymbol:!1,typingAsteriskWritesTimesSymbol:!1,typingPercentWritesPercentOf:!1,sumStartsWithNEquals:!1,charsThatBreakOutOfSupSub:"",enableDigitGrouping:!1,static:!1,tabindex:void 0,quietEmptyDelimeters:Bk("( ["),scrollAnimationDuration:100,localize:()=>{throw new Error("Programming Error: mq localization function not set")},language:"en"},Vk=!1;function $k(){return Vk=!0,My}function Gk(e){if(Vk)throw new Error("Cannot update global config after an MQ field has already been instantiated.");My=Ey(My,e)}function Im({clientX:e,clientY:t}){return{type:"click",clientX:e,clientY:t}}function yi(e,t){let{clientX:r}=t,n=e.lastChild();if(!n)return e.lastCursor();let o=n,a=o.boundingClientRect();if(a){if(r>a.right)return e.lastCursor();for(;r<a.left;){let i=o.prevSibling();if(!i)break;if(o=i,a=o.boundingClientRect(),!a)return}return zk(o,t)}}function zk(e,t){let{clientX:r}=t;if(e.type==="matrix")return s3(e,t);let n=e.boundingClientRect();if(n){if(pi(e)){let o=n.left+n.width/2,a=r<o?"left":"right",i=e.containingSelection();return vt(i,a)}switch(e.type){case"frac":case"binom":return Uk(e,e.num,e.den,t);case"supsub":case"summation":return!e.sup||!e.sub?Cy(e,Yf(e),t):Uk(e,e.sup,e.sub,t);case"sqrt":case"style-cmd":case"brackets":case"string":return Cy(e,Yf(e),t);default:return}}}function Uk(e,t,r,n){let o=e.boundingClientRect(),a=t.boundingClientRect(),i=r.boundingClientRect();if(!o||!a||!i)return;let s=Math.max(a.right,i.right),c=Math.min(a.left,i.left);if(n.clientX>(o.right+s)/2)return e.cursorOnSide("right");if(n.clientX<(o.left+c)/2)return e.cursorOnSide("left");switch(n.type){case"click":{let l=n.clientY>(a.bottom+i.top)/2;return yi(l?r:t,n)}case"updown":return n.updown==="up"?yi(r,n):yi(t,n);default:return}}function i3(e,t){let{numRows:r}=e.getDimensions();if(t.type==="updown")return t.updown==="up"?r-1:0;let n=t.clientY,o=[];for(let i=0;i<r;i++)o.push(e.getChildAt(0,i));let a=c3(n,e,o);if(a)switch(a.type){case"before-container":return 0;case"after-container":return r-1;default:return a.index}}function s3(e,t){if(!e.boundingClientRect())return;let{numCols:n}=e.getDimensions(),o=i3(e,t);if(o===void 0)return;let a=[];for(let i=0;i<n;i++)a.push(e.getChildAt(i,o));return Cy(e,a,t)}function Cy(e,t,r){let{clientX:n}=r,o=l3(n,e,t);if(o)switch(o.type){case"before-container":return e.cursorOnSide("left");case"after-container":return e.cursorOnSide("right");case"before":return t[o.index].firstCursor();case"after":return t[o.index].lastCursor();case"inside":return yi(t[o.index],r);default:return}}function c3(e,t,r){let n=[];for(let i of r){let s=i.boundingClientRect();if(!s)return;n.push({start:s.top,end:s.bottom})}let o=t.boundingClientRect();if(!o)return;let a={start:o.top,end:o.bottom};return Hk(e,a,n)}function l3(e,t,r){let n=[];for(let i of r){let s=i.boundingClientRect();if(!s)return;n.push({start:s.left,end:s.right})}let o=t.boundingClientRect();if(!o)return;let a={start:o.left,end:o.right};return Hk(e,a,n)}function Hk(e,t,r){let n=t.start;for(let i=0;i<r.length;i++)if(e<r[i].start){let s=(n+r[i].start)/2;return e<s?i>0?{type:"after",index:i-1}:{type:"before-container"}:{type:"before",index:i}}else if(e>r[i].end)n=r[i].end;else return{type:"inside",index:i};let o=r.length-1,a=(t.end+r[o].end)/2;return e<a?{type:"after",index:o}:{type:"after-container"}}function Am(e,t,r){var o,a,i;let n=(o=Pm(e,t))!=null?o:e.root;return n.type==="group"?(a=yi(n,r))!=null?a:n.lastCursor():(i=zk(n,r))!=null?i:n.cursorOnSide("right")}function Pm(e,t){if(e.domToMqNode===void 0)throw new Error("Programming Error: Not yet rendered to DOM.");if(t)for(;;){let r=e.domToMqNode.get(t);if(r)return r;if(!t.parentElement)return;t=t.parentElement}}function jk(e,t){let r=e.selection;if(!u3(r)){let n=Kk(r.head,t,"right");if(n)return e.withPointSelection(n).withAriaQueueDirEndOf("left",n.group);let o=Kk(r.head,t,"left");if(o)return e.withPointSelection(o).withAriaQueueDirEndOf("right",o.group)}return d3(e,t)}function u3(e){var r;let t=e.group;return((r=t.parent())==null?void 0:r.type)==="matrix"&&e.left.eq(t.firstCursor())&&e.right.eq(t.lastCursor())}function Kk(e,t,r){let n=e.nodeInDirection(r);if(!n)return;let o=t==="up"?Nm(n):_m(n);if(o)return o.lastCursorInDir(Ze(r))}function d3(e,t){let{head:r,group:n}=e.selection,o=m3(n,t);if(o===void 0)return e.withPointSelection(e.selection.head);let{ancestor:a,ancestorGroup:i,moveTo:s}=o;if(s){let c=h3(e,i,s,t),l=se(c),p=p3(n,c);return p&&(l=p.containingSelection()),e.withSelection(l).withAriaQueueNode(l.group,{shouldDescribe:!0})}else{let c=g3(r,a)?"right":"left";return e.withPointSelection(a.cursorOnSide(c)).withAriaQueueDirOf(c,a)}}function p3(e,t){let r=t.group,o=ey(e,r).depth(),a=r,i=r.depth(),s;for(let c of a.allParents()){if(c.type==="group"){let l=c.parent();(l==null?void 0:l.type)==="matrix"&&(s=c)}if(i--,i<=o)break}return s}function m3(e,t){for(;;){let r=e.parent();if(!r)return;if(r.type==="matrix"){let{x:o,y:a}=r.getPosOfChild(e);if(t==="up"&&a>0)return{ancestor:r,ancestorGroup:e,moveTo:r.getChildAt(o,a-1)};if(t==="down"&&a<r.getNumRows()-1)return{ancestor:r,ancestorGroup:e,moveTo:r.getChildAt(o,a+1)}}let n=Wk(r,iM(t));if(n&&n.eq(e)){let o=Wk(r,t);return{ancestor:r,ancestorGroup:e,moveTo:o}}e=r.parent()}}function g3(e,t){if(!e.eq(e.group.lastCursor()))return!1;let r=e.group.parent();if(r===void 0)throw new Error("Programming Error: ancestor is not ancestor of cursor.");let n=r;for(;!n.eq(t);){let o=n.parent();if(!n.eq(o.lastChild()))return!1;let a=o.parent();if(a===void 0)throw new Error("Programming Error: ancestor is not ancestor of cursor.");n=a}return!0}function h3(e,t,r,n){var l;let o=e.selection.head;Sa(o.group,"upDown",o.index),t.mutable_upDownGroup=o.group;let a=r.mutable_upDownGroup;if(a){let p=(l=a==null?void 0:a.mutable_cursorIndices)==null?void 0:l.get("upDown");if(p!==void 0)return new it(a,p)}let i=Iy(e);if(i===void 0)return r.lastCursor();let c=yi(r,{type:"updown",updown:n,clientX:i});return c===void 0?r.lastCursor():c}function Iy(e){let{selection:t,selectionDom:r}=e;if(!r)return;let n=r.getBoundingClientRect();return t.head.eq(t.right)?n.right:n.left}function Wk(e,t){return t==="up"?Nm(e):_m(e)}function Nm(e){switch(e.type){case"frac":case"binom":return e.num;case"supsub":case"summation":return e.sup;case"sqrt":case"brackets":case"style-cmd":case"char":case"text-char":case"percentof":case"token":case"ans":case"string":case"matrix":return}}function _m(e){switch(e.type){case"frac":case"binom":return e.den;case"supsub":case"summation":return e.sub;case"sqrt":case"brackets":case"style-cmd":case"char":case"text-char":case"percentof":case"token":case"matrix":case"string":case"ans":return}}function Qk(e,t){let r=e.selection;if(Je(r))return f3(e,r.anchor,t);let n=vt(r,t);return e.withPointSelection(n)}function f3(e,t,r){let n=t.nodeInDirection(r);return n?y3(e,n,r):Py(e,t.group,r)}function y3(e,t,r){var o;if(pi(t)||t.type==="supsub"&&!t.sup&&e.config.autoSubscriptNumerals){let a=t.containingSelection();return e.withPointSelection(vt(a,r)).withAriaQueueBareSelection(a,{speakSpace:!0})}if(t.type==="matrix")return Ay(e,t,r);{let a=(o=Yk(e,t))!=null?o:t.lastChildInDir(Ze(r)),i=a.lastCursorInDir(Ze(r));return e.withPointSelection(i).withAriaQueueDirEndOf(Ze(r),a)}}function Ay(e,t,r){let n=r==="left"?t.getNumCols()-1:0,o=t.getChildAt(n,0);return bi(e,o)}function Py(e,t,r){let n=t.parent();if(n===void 0)return e.withPointSelection(t.lastCursorInDir(r));if(n.type==="matrix"){let i=Ny(n,t,r);return i?bi(e,i):Wo(e,n,r)}let o=Yk(e,n),a=t.nextSiblingInDir(r);return!o&&a?e.withPointSelection(a.lastCursorInDir(Ze(r))).withAriaQueueDirEndOf(Ze(r),a):Wo(e,n,r)}function bi(e,t){return e.withSelection(t.containingSelection()).withAriaQueueNode(t,{shouldDescribe:!0})}function Wo(e,t,r){return e.withPointSelection(t.cursorOnSide(r)).withAriaQueueDirOf(r,t)}function Ny(e,t,r){let{x:n,y:o}=e.getPosOfChild(t);return r==="left"&&n>0?e.getChildAt(n-1,o):r==="right"&&n<e.getNumCols()-1?e.getChildAt(n+1,o):void 0}function Yk(e,t){let r=e.config.leftRightIntoCmdGoes;return r==="up"?Nm(t):r==="down"?_m(t):void 0}var b3={"\\le":"<","\\ge":">","\\approx":"\\sim","\\to":"-"};function Rm(e,t){let r=e.selection;if(Je(r))return x3(e,r.anchor,t);let{root:n,insertedSelection:o}=Ue(r,[]);return e.withRootAndSelection(n,o).withAriaQueueBareSelection(r)}function Zk(e,t){let r=e.selection,{head:n,group:o}=r;if(!Je(r)||r.head.nodeInDirection(t)===void 0)return Rm(e,t);let a=o.lastCursorInDir(t),i=Pt(n,a),{root:s,insertedSelection:c}=Ue(i,[]);return e.withRootAndSelection(s,c).withAriaQueueBareSelection(i)}function x3(e,t,r){let n=t.nodeInDirection(r);return n?v3(e,n,r):w3(e,t.group,r)}function Lm(e){let t=e.numChildren();for(let r=0;r<t;r++)if(e.nthChild(r).children.length!==0)return!1;return!0}function xi(e,t){let r=t.containingSelection();return Jk(e,r)}function Jk(e,t){let{root:r,insertedSelection:n}=Ue(t,[]);return e.withRootAndSelection(r,n).withAriaQueueBareSelection(t)}function Rl(e,t,r){if(t.type==="matrix")return Ay(e,t,r);let n=Ze(r),o=t.lastChildInDir(n);return e.withPointSelection(o.lastCursorInDir(n)).withAriaQueueDirEndOf(n,o)}function v3(e,t,r){switch(t.type){case"style-cmd":return Lm(t)?xi(e,t):Rl(e,t,r);case"char":{if(r==="left"){let n=b3[t.latex];if(n){let o=t.containingSelection(),{root:a,inserted:i}=et(o,new wt(n)),s=se(i.cursorOnSide("right"));return e.withRootAndSelection(a,s).withAriaQueueBareSelection(o)}}return xi(e,t)}case"ans":case"token":case"percentof":return xi(e,t);case"binom":case"frac":case"summation":return Lm(t)?xi(e,t):Rl(e,t,r);case"matrix":return Rl(e,t,r);case"sqrt":{if(Lm(t))return xi(e,t);if(r==="right"&&!t.index){let n=t.containingSelection(),{root:o,insertedSelection:a}=Ue(n,t.radicand.children);return e.withRootAndSelection(o,se(a.left)).withAriaQueueBareSelection(n)}return Rl(e,t,r)}case"brackets":return t0(e,t,Ze(r),!1);case"string":return e0(e,t,Ze(r),!1);case"supsub":{if(e.config.autoSubscriptNumerals&&t.sub!==void 0){let n=t.sub,o=n.lastChildInDir(Ze(r)),a=t;if(o!==void 0)if(LM(o)){let{root:s,insertedSelection:c}=Ue(o.containingSelection(),[]);a=c.group.parent();let l=a.cursorOnSide(Ze(r));e=e.withRootAndSelection(s,se(l)).withAriaQueueNode(o)}else e=e.withPointSelection(n.lastCursorInDir(Ze(r))),e=Rm(e,r),a=e.selection.group.parent();else e=e.withAriaQueueItem(e.s("mq-narration-empty-subscript-was-deleted"));let i=a;if(i.sub===void 0)return e;if(i.sub.children.length===0)if(i.sup){let s=new Ht({sub:void 0,sup:i.sup}),{root:c,insertedSelection:l}=Ue(a.containingSelection(),[s]),p=vt(l,Ze(r));return e.withRootAndSelection(c,se(p))}else{let{root:s,insertedSelection:c}=Ue(a.containingSelection(),[]);return e.withRootAndSelection(s,c)}else return e}return Lm(t)?xi(e,t):Rl(e,t,r)}case"text-char":{let n=t.containingGraphemeClusterSelection();return Jk(e,n)}default:throw new Error(`Invalid node: ${t.type}`)}}function w3(e,t,r){var a,i;let n=t.parent();if(n===void 0)return e;let o=t.getIndex();switch(n.type){case"binom":case"frac":{let s=ec(n,o),{root:c,insertedSelections:l}=li(n.containingSelection(),[n.num.children,n.den.children]),p=s==="num"?l[0]:l[1],y=vt(p,r),x=e.s(n.type==="frac"?"mq-narration-over":"mq-narration-choose");return e.withRootAndSelection(c,se(y)).withAriaQueueItem(x)}case"style-cmd":{let{root:s,insertedSelection:c}=Ue(n.containingSelection(),n.arg.children),l=vt(c,r),p=by(n,e.getMathspeakOptions());return e.withRootAndSelection(s,se(l)).withAriaQueueItem(p)}case"sqrt":{let s=Cl(n,o),{root:c,insertedSelections:[l,p]}=li(n.containingSelection(),[(i=(a=n.index)==null?void 0:a.children)!=null?i:[],n.radicand.children]),x=vt(s==="index"?l:p,r);return e.withRootAndSelection(c,se(x)).withAriaQueueItem(e.s("mq-narration-start-root")+",")}case"summation":{let s=mi(n,o),{root:c,insertedSelections:[l,p]}=li(n.containingSelection(),[n.sub.children,n.sup.children]),x=vt(s==="sub"?l:p,r),M=e.s(bk[n.kind]);return e.withRootAndSelection(c,se(x)).withAriaQueueItem(M)}case"brackets":return t0(e,n,r,!0);case"string":return e0(e,n,r,!0);case"supsub":{let s=mi(n,o);if(s==="sup")if(n.sub){let c=new Ht({sub:n.sub,sup:void 0}),{root:l,insertedSelections:[p,y]}=li(n.containingSelection(),[[c],n.sup.children]),x=vt(y,r);return e.withRootAndSelection(l,se(x)).withAriaQueueItem(e.s("mq-narration-superscript"))}else{let{root:c,insertedSelection:l}=Ue(n.containingSelection(),n.sup.children),p=vt(l,r);return e.withRootAndSelection(c,se(p)).withAriaQueueItem(e.s("mq-narration-superscript"))}else if(n.sup){let c=new Ht({sub:void 0,sup:n.sup}),{root:l,insertedSelections:[p,y]}=li(n.containingSelection(),[n.sub.children,[c]]),x=vt(p,r);return e.withRootAndSelection(l,se(x)).withAriaQueueItem(e.s("mq-narration-subscript"))}else{let{root:c,insertedSelection:l}=Ue(n.containingSelection(),n.sub.children),p=vt(l,r);return e.withRootAndSelection(c,se(p)).withAriaQueueItem(e.s("mq-narration-subscript"))}}case"matrix":{let s=Ny(n,t,r);return s?bi(e,s):t.children.length===0?xi(e,n):Wo(e,n,r)}default:throw new Error(`Invalid node: ${n.type}`)}}function e0(e,t,r,n){let o=r==="left"?e.s("mq-narration-start-string"):e.s("mq-narration-end-string");if(n&&t.body.children.length===0){let{root:l,insertedSelection:p}=Ue(t.containingSelection(),[]);return e.withRootAndSelection(l,p).withAriaQueueNode(t)}let a=n?r==="right":r==="left";if(t.ghostSide===r||a){let l=Xk(t,r,n);return e.withPointSelection(l).withAriaQueueItem(o)}let{root:i,inserted:s}=et(t.containingSelection(),Ea(t,r)),c=Xk(s,r,n);return e.withRootAndSelection(i,se(c)).withAriaQueueItem(o)}function Xk(e,t,r){return r?e.cursorOnSide(t):e.body.lastCursorInDir(t)}function t0(e,t,r,n){var i;let o=Ze(r),a=wm(t,r,e.getMathspeakOptions());if(t.ghostSide===o){let{root:s,insertedSelection:c}=am(t),l=vt(c,r);return e.withRootAndSelection(s,se(l)).withAriaQueueItem(a)}{let s=t.middle.lastChildInDir(o);if((s==null?void 0:s.type)==="brackets"&&s.ghostSide===o&&xy(e.config,t,s,r)){let{inserted:c}=et(s.containingSelection(),Sm(s,t,o)),l=c.parent().parent();if(l.type!=="brackets")throw new Error("Programming Error: Incorrect mapping");let{root:p,insertedSelection:y}=am(l),x=vt(y,r);return e.withRootAndSelection(p,se(x)).withAriaQueueItem(a)}}{let s=(i=t.parent())==null?void 0:i.parent();if((s==null?void 0:s.type)==="brackets"&&s.ghostSide===o&&xy(e.config,s,t,o)){let c=s.middle,l=fn(Pt(c.lastCursorInDir(o),t.cursorOnSide(o))),p=t.middle.children,y=fn(Pt(t.cursorOnSide(r),c.lastCursorInDir(r)));if(r==="right"){let x=El(Sm(t,s,"right"),ve(p.concat(y))),{root:M,insertedSelection:L}=Ue(s.containingSelection(),l.concat(x)),T;if(n&&y.length===0)T=L.right;else{let w=L.right.nodeBefore();if(w!==x)throw new Error("Programming Error: mapping not tracked correctly.");let k=w.middle;T=new it(k,p.length)}return e.withRootAndSelection(M,se(T)).withAriaQueueItem(a)}else{let x=El(Sm(t,s,"left"),ve(y.concat(p))),{root:M,insertedSelection:L}=Ue(s.containingSelection(),[x].concat(l)),T;if(n&&y.length===0)T=L.left;else{let w=L.left.nodeAfter();if(w!==x)throw new Error("Programming Error: mapping not tracked correctly.");let k=w.middle;T=new it(k,y.length)}return e.withRootAndSelection(M,se(T)).withAriaQueueItem(a)}}}if(n&&t.ghostSide===void 0){let{root:s,insertedSelection:c}=am(t),l=vt(c,r);return e.withRootAndSelection(s,se(l)).withAriaQueueItem(a)}{let s=t.middle.children,c=t.parent().lastCursorInDir(r),l=fn(Pt(t.cursorOnSide(r),c)),p=Pt(t.cursorOnSide(Ze(r)),c);if(r==="right"){let y=rc[t.leftLatex],x=rc[t.leftSymbol];if(y===void 0||x===void 0)throw new Error("Programming error: Bracket not included in OPP_BRACKS");let M=new yn({leftLatex:t.leftLatex,leftSymbol:t.leftSymbol,rightLatex:y,rightSymbol:x,ghostSide:"right",middle:ve(s.concat(l))}),{root:L,inserted:T}=et(p,M),w;return n&&l.length===0?w=T.cursorOnSide("right"):w=new it(T.middle,s.length),e.withRootAndSelection(L,se(w)).withAriaQueueItem(a)}else{let y=rc[t.rightLatex],x=rc[t.rightSymbol];if(y===void 0||x===void 0)throw new Error("Programming error: Bracket not included in OPP_BRACKS");let M=new yn({leftLatex:y,leftSymbol:x,rightLatex:t.rightLatex,rightSymbol:t.rightSymbol,ghostSide:"left",middle:ve(l.concat(s))}),{root:L,inserted:T}=et(p,M),w;return n&&l.length===0?w=T.cursorOnSide("left"):w=new it(T.middle,l.length),e.withRootAndSelection(L,se(w)).withAriaQueueItem(a)}}}function Dm(e,t,r){return e.withSelection(Sl(t,r)).withAriaQueueItem(_y(e,t))}function _y(e,t){return e.s("mq-narration-matrix-pull-handle",{rows:t.getNumRows(),columns:t.getNumCols()})}var T3=1.2,S3=1.3;function n0(e){return e=M3(e),e=k3(e),e}function M3(e){let t=jo(e);if(!t)return e;let r=An(e.selection);return!r||!t.eq(r)?ql(e,t,()=>t.withResizingDone()):e}function k3(e){let t=An(e.selection);return t?t.isBeingResized()?e:ql(e,t,()=>t.withResizingStarted()):e}function ql(e,t,r){return e.withSplicedMqTree(t.containingSelection(),()=>[r()])}function jo(e){for(let t of ci(e.root))if(t.type==="matrix"&&t.isBeingResized())return t}function E3(e,t){for(let r=t.length;r>=0;r--)if(t[r]<e)return r;return 0}function r0(e,t,r){let n=t[t.length-1];return e<n?1+E3(e,t):t.length+Math.floor((e-n)/r)}function C3(e,t,r,n,o,a){let i=t.boundingClientRect(),s=t.getDomNode();if(!s||!i)throw new Error("Resizing before rendered");let c=parseFloat(getComputedStyle(s).fontSize),l=r0(n-a.clientX,r.colThresholds,T3*c),p=r0(o-a.clientY,r.rowThresholds,S3*c);return Ol({numCols:l,numRows:p},e,r.originalMatrix.getDimensions())}function Ol({numCols:e,numRows:t},r,n){let o=r.maxResizingMatrixSize;return{numCols:Math.max(1,Math.min(e,Math.max(o,n.numCols))),numRows:Math.max(1,Math.min(t,Math.max(o,n.numRows)))}}function o0(e,t,r,n){let o=jo(e);if(!o||!o.resizingInfo)return e;let a=o.resizingInfo.colThresholds;(!a||o.getNumCols()>a.length)&&(a=A3(o));let i=o.resizingInfo.rowThresholds;(!i||o.getNumRows()>i.length)&&(i=P3(o));let s={colThresholds:a,rowThresholds:i,originalMatrix:o.resizingInfo.originalMatrix},c=C3(e.config,o,s,t,r,n);return i0(e,o,s,c)}function a0(e,t,r){let n=jo(e);if(!n||!n.resizingInfo)return e;let{numCols:o,numRows:a}=n.getDimensions(),i=n.resizingInfo,s=Ol({numCols:o+t,numRows:a+r},e.config,i.originalMatrix.getDimensions());return e=i0(e,n,i,s),e.selection.matrixPullHandleType==="mouse"&&(e=e.withSelection(nm(e.selection))),e}function i0(e,t,r,n){return lm(t.getDimensions(),n)?e:(e=ql(e,t,()=>Ly(t,r,n)),qm(e,n))}function qm(e,{numCols:t,numRows:r}){return e.withAriaQueueItem(e.s("mq-narration-matrix-new-dimensions",{rows:r,columns:t}))}function Ly(e,t,{numCols:r,numRows:n}){var i,s;let o=Array(r*n);for(let c=0;c<n;c++)for(let l=0;l<r;l++)o[c*r+l]=(s=(i=t==null?void 0:t.originalMatrix.getChildAt(l,c))!=null?i:e.getChildAt(l,c))!=null?s:ve([]);let a=new Yn({children:o,numCols:r,resizingInfo:t});return I3(e,a),a}function I3(e,t){let{numCols:r,numRows:n}=t.getDimensions(),{numCols:o,numRows:a}=e.getDimensions();if(!(r>=o&&n>=a))for(let i=0;i<a;i++)for(let s=0;s<o;s++){if(s<r&&i<n)continue;let c=e.getChildAt(s,i);for(let l of CM(c)){let p=ry(l).type;switch(p){case"upDown":break;case"anchor":{let y=Dl(t,{x:s,y:i});Sa(y,l,0);break}case"head":{let y=Dl(t,{x:s,y:i});Sa(y,l,y.numChildren());break}default:}}}}function Dl(e,{x:t,y:r}){let{numCols:n,numRows:o}=e.getDimensions();return t=Math.max(0,Math.min(n-1,t)),r=Math.max(0,Math.min(o-1,r)),e.getChildAt(t,r)}function A3(e){let t=e.getNumCols(),r=e.boundingClientRect();if(!r)throw new Error("Resizing before rendered");let n=Array(t);for(let o=0;o<t;o++){let i=e.getChildAt(o,0).boundingClientRect();if(!i)throw new Error("Resizing before rendered");n[o]=(i.left+i.right)/2-r.left}return n}function P3(e){let t=e.getNumRows(),r=Array(t),n=e.boundingClientRect();if(!n)throw new Error("Resizing before rendered");for(let o=0;o<t;o++){let i=e.getChildAt(0,o).boundingClientRect();if(!i)throw new Error("Resizing before rendered");r[o]=(i.top+i.bottom)/2-n.top}return r}function s0(e,t,r){let n=Ry(e,t,r);return n?n.type==="matrix"?_3(e,n.matrix,n.cursorPos,t,r):L3(e,n.brackets,t,r):e}function Ry(e,t,r){for(let{group:n,parent:o}of Zf(e.selection)){if(o.type==="matrix")return{type:"matrix",matrix:o,cursorPos:o.getPosOfChild(n)};if(o.type==="brackets"&&o.leftSymbol==="["&&o.rightSymbol==="]")return(t>0||r>0)&&e.config.matrices&&!N3(o.middle)?{type:"convert-list",brackets:o}:void 0}}function N3(e){return e.children.some(t=>t.type==="char"&&t.latex===",")}function _3(e,t,r,n,o){let a=t.getDimensions(),i=Ol({numCols:a.numCols+n,numRows:a.numRows+o},e.config,a);if(lm(i,a))return e.withAriaQueueItem(e.s("mq-narration-matrix-invalid-resize",{maxSize:e.config.maxResizingMatrixSize}));let s;if(e=ql(e,t,()=>(s=Ly(t,void 0,i),s)),!s)throw new Error("Programming Error: matrix not created");let{numCols:c,numRows:l}=i;if(c>a.numCols||l>a.numRows){let p=c>a.numCols?c-1:r.x,y=l>a.numRows?l-1:r.y;e=e.withPointSelection(Dl(s,{x:p,y}).firstCursor())}else(r.x>=c||r.y>=l)&&(e=e.withPointSelection(Dl(s,r).lastCursor()));return qm(e,i)}function L3(e,t,r,n){let{numCols:o,numRows:a}=Ol({numCols:1+r,numRows:1+n},e.config,{numCols:1,numRows:1});if(o<=1&&a<=1)return e;let i=[t.middle];for(;i.length<o*a;)i.push(ve([]));let s=new Yn({children:i,numCols:o}),{root:c}=et(t.containingSelection(),s);return e=e.withRootAndSelection(c,se(s.getChildAt(o-1,a-1).firstCursor())),qm(e,{numCols:o,numRows:a})}function nc(e,t){let{selection:r}=e,n=r.head.nodeInDirection(t);return n?R3(e,n,t):D3(e,r.group,t)}function R3(e,t,r){let{selection:n}=e,{anchor:o,group:a}=n,i=t.containingSelection(),s=vt(i,r),c=Pt(o,s);if(!c)throw new Error("Programming Error: head group did not change, so `makeSelection` should succeed.");if(n.left.eq(c.left)&&n.right.eq(c.right)){let p=a.depth()+2;if(p>o.group.depth())throw new Error("Programming Error: Selection flip despite not being in a bigger group.");let y=o.group.ancestorAtDepth(p);if(y.type!=="group")throw new Error("Programming Error: Violated invariant of alternative group and non-group.");let x=y.lastCursorInDir(Ze(r)),M=Pt(o,x);if(!M)throw new Error("Programming Error: head group is an ancestor of the anchor group, so `makeSelection` should succeed.");return M}else return c}function D3(e,t,r){let n=t.parent();if(!n)return e.selection;let o=n.cursorOnSide(r),a=Pt(e.selection.anchor,o);if(!a)throw new Error("Programming Error: head group is an ancestor of the anchor group, so `makeSelection` should succeed.");return a}function Om(e,t){return e.head.nodeInDirection(t)!==void 0}function c0(e,t){let r=t==="up"?"left":"right";if(Om(e.selection,r))do e=e.withSelection(nc(e,r));while(Om(e.selection,r));else e=e.withSelection(nc(e,r));return e}function l0(e,t){for(;Om(e.selection,t);)e=e.withSelection(nc(e,t));return e}function u0(e,t){for(;e.selection.group.depth()>0||Om(e.selection,t);)e=e.withSelection(nc(e,t));return e}function Fm(e){let t=e.root,r=t.firstCursor(),n=t.lastCursor(),o=Pt(n,r);if(!o)throw new Error("Programming Error: selection-all selection should always be valid.");return e.withSelection(o)}function d0(e,t){return((n,o)=>e(n,o,t))}var Fl={selections:[],dir:"right"},Bm=class e{constructor(t,r,n,o,a,i,s,c){this.ariaLabel="";this.ariaPostLabel="";this.ariaQueue=[];if(this.root=t,wM(r),this.selection=r,this.config=n,this.mouseDownState=o,this.ariaLabel=a,this.ariaPostLabel=i,this.ariaQueue=s,this.tabHistory=c,this.s=d0(this.config.localize,this.config.language),r.group.getRoot()!==t)throw new Error("Programming Error: selection must be inside root");gk(t,this.config)}static empty(){let t=ve([]),r=se(t.lastCursor());return new e(t,r,$k(),{type:"none"},"","",[],Fl)}withConfig(t){return Qe(ts(t,ky),ts(this.config,ky))||q3(this.root),new e(this.root,this.selection,t,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withRootAndSelection(t,r){return new e(t,r,this.config,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withSelection(t){return new e(this.root,t,this.config,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withTabHistory(t){return new e(this.root,this.selection,this.config,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,t)}withPointSelection(t){let r=se(t);return this.withSelection(r)}withMouseDownState(t){return new e(this.root,this.selection,this.config,t,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withAriaLabel(t){return new e(this.root,this.selection,this.config,this.mouseDownState,t,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withAriaPostLabel(t){return new e(this.root,this.selection,this.config,this.mouseDownState,this.ariaLabel,t,this.ariaQueue,this.tabHistory)}withAriaQueue(t){return new e(this.root,this.selection,this.config,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,t,this.tabHistory)}withAriaQueueItem(t){return this.withAriaQueue(this.ariaQueue.concat(t))}withAriaQueueSelection(t){let r=hk(t,this.getMathspeakOptions());return this.withAriaQueueItem(r)}withAriaQueueBareSelection(t,{speakSpace:r=!1}={}){let n=fy(t,this.getMathspeakOptions({speakSpace:r}));return this.withAriaQueueItem(n)}withAriaQueueNode(t,{shouldDescribe:r=!1,speakSpace:n=!1,ignoreShorthand:o=!1}={}){let a=_n(t,this.getMathspeakOptions({ignoreShorthand:o,speakSpace:n}));return r&&t.type==="group"&&(a=p0(this,t)+" "+a),this.withAriaQueueItem(a)}withAriaQueueDirOf(t,r){let n=_n(r,this.getMathspeakOptions({ignoreShorthand:!0}));return this.withAriaQueueItem(this.s(t==="left"?"mq-narration-before":"mq-narration-after",{expr:n}))}withAriaQueueDirEndOf(t,r){let n=p0(this,r)+" "+_n(r,this.getMathspeakOptions());return this.withAriaQueueItem(this.s(t==="left"?"mq-narration-beginning-of":"mq-narration-end-of",{expr:n}))}withSplicedMqTree(t,r){return MM(this,t,r)}markAfterRender(){this.ariaQueue=[],this.domToMqNode=new Map;for(let t of gn(this.root))if(t.mutable_domNode&&this.domToMqNode.set(t.mutable_domNode,t),t.mutable_domChildren)for(let r=0;r<t.mutable_domChildren.length;r++){let n=t.mutable_domChildren[r],o=t.nthChild(r);if(!o)throw WM(t,t===this.root,r);this.domToMqNode.set(n,o)}}getRawAriaLabel(){return this.ariaLabel}getAriaLabel(){return!this.ariaLabel&&!this.config.static?this.s("mq-narration-math-input"):this.ariaLabel}getAriaPostLabel(){return this.ariaPostLabel}getMathspeakOptions(t){var r,n;return{ignoreShorthand:(r=t==null?void 0:t.ignoreShorthand)!=null?r:!1,autoOperatorNames:this.config.autoOperatorNames,speakSpace:(n=t==null?void 0:t.speakSpace)!=null?n:!1,localize:this.s,language:this.config.language,maxResizingMatrixSize:this.config.maxResizingMatrixSize,static:this.config.static}}};function q3(e){for(let t of gn(e))IM(t)}function p0(e,t){let r=t.parent();return r?Sk(r,t.getIndex(),e.getMathspeakOptions()):e.getAriaLabel()}function Dy(e,t){let r=e.selection.group;if(!r.eq(r.getRoot()))return Py(e,r,t)}function m0(e,t){let r=An(e.selection);if(r&&t==="left"){let s=r.getChildAt(r.getNumCols()-1,r.getNumRows()-1);if(s)return bi(e,s).withTabHistory(Fl)}let{selections:n,dir:o}=e.tabHistory,a=n.length;if(a>0&&t!==o){let s=nm(n[a-1]);return e=e.withSelection(s).withTabHistory({selections:n.slice(0,a-1),dir:o}),O3(e,t)}let i=F3(e,t);if(i)return i.withTabHistory({selections:n.concat(e.selection),dir:t})}function O3(e,t){let r=e.selection,n=An(r);if(n)return e.withAriaQueueItem(_y(e,n));if(r.anchor.eq(r.head)){let o=r.head.nodeInDirection(Ze(t));return o?e.withAriaQueueDirOf(t,o):e.withAriaQueueDirEndOf(Ze(t),r.group)}else return e.withAriaQueueSelection(r)}function F3(e,t){let r=An(e.selection);if(r)return Wo(e,r,t);let n=e.selection.group.parent();if((n==null?void 0:n.type)==="matrix"){let o=e.selection.group.nextSiblingInDir(t);return o?bi(e,o):t==="right"?Dm(e,n,"keyboard"):Wo(e,n,t)}else return Dy(e,t)}function h0(e){for(;;){let t=!1,r=e.selection;e:for(let n of gn(e.root)){let o=n.numChildren();for(let a=0;a<o-1;a++){let i=n.nthChild(a),s=n.nthChild(a+1);if(i.type==="supsub"&&s.type==="supsub"&&![r.left,r.right,r.anchor].some(c=>i.cursorOnSide("right").eq(c))&&!EM(n,c=>c===a+1)){e=e.withSplicedMqTree(hn(n,a,a+2),()=>[B3(i,s)]),t=!0;break e}}}if(!t)return e}}function B3(e,t){return new Ht({sub:g0(e.sub,t.sub),sup:g0(e.sup,t.sup)})}function g0(e,t){var r;return e&&t?AM(e,t):(r=e!=null?e:t)!=null?r:void 0}function f0(e){switch(e.type){case"tick":case"focus":case"blur":case"set-config":case"api-set-latex":case"api-clear-selection":case"api-set-selection":case"mouse-down":case"mouse-move":case"mouse-up":case"set-aria-label":case"set-aria-post-label":return!0;default:return!1}}var Vm=class{constructor(){this.nextSubscription=0;this.subscriptions=new Map;this.focusState="blurred";this.mostRecentAriaMessage="";this.showGrouping=!0;this._queuedCallbacks=[];this.model=Bm.empty(),this.dispatcher=new pa,this.dispatcher.register(t=>{this.onAction(t)})}runAfterDispatch(t){this._queuedCallbacks.push(t)}rejectPaste(t){this.runAfterDispatch(()=>{var r,n;(n=(r=this.model.config).onPasteRejected)==null||n.call(r,t)})}dispatch(t){if(t.type==="focus"&&this.dispatcher.isDispatching()){this.runAfterDispatch(()=>{this.dispatch(t)});return}this.dispatcher.dispatch(t);let r;for(;r=this._queuedCallbacks.shift();)r()}onAction(t){let r=this.model;this.handleAction(t);let n=this.model.root!==r.root;if(this.getConfig().static||r.root.children.length===0?this.showGrouping=!0:n&&(this.showGrouping=!1,this.showGroupingTimeout!==void 0&&clearTimeout(this.showGroupingTimeout),this.showGroupingTimeout=setTimeout(()=>{this.showGroupingTimeout=void 0,this.dispatch({type:"show-grouping"})},1e3)),t.type!=="show-grouping"&&(t.type!=="arrow-up-down"&&kM(this.model.root),t.type!=="tab-dir"&&this.model.tabHistory.selections.length>0&&(this.model=this.model.withTabHistory(Fl))),this.model=Ek(this.model),this.model=h0(this.model),this.model=n0(this.model),this.model.config.maxDepth!==void 0){let a=oy(this.model.root);a>this.model.config.maxDepth&&this.lastDepth!==void 0&&a>this.lastDepth?(this.model=r,uM(r.root),t.type==="write-latex"&&t.fromPaste&&this.rejectPaste("exceeds-max-depth")):this.lastDepth=a}this.isDragResizingMatrix()&&this.getMatrixBeingResized()===void 0&&(this.model=this.model.withMouseDownState({type:"mouse-down-selecting"})),this.updateViews()}subscribeToChanges(t){let r=this.nextSubscription;return this.nextSubscription+=1,this.subscriptions.set(r,t),()=>{this.subscriptions.delete(r)}}updateViews(){for(let t of this.subscriptions.values())t()}markAfterRender(){this.model.markAfterRender()}handleAction(t){var r,n,o;if(!(this.getConfig().static&&!f0(t)))switch(t.type){case"show-grouping":{this.showGrouping=!0;break}case"focus":this.focusState="focused",this.getConfig().static&&Je(this.model.selection)&&(this.model=Fm(this.model));break;case"blur":if(t.intentional){if(this.focusState="blurred",this.model.config.resetCursorOnBlur){let a=this.model.selection;this.model=this.model.withPointSelection(this.getRoot().lastCursor()),this.model.selectionBeforeBlur=a}this.model=vy(this.model,"root")}else this.focusState="unintentional-blurred";break;case"tick":break;case"set-config":this.model=this.model.withConfig(t.config);break;case"api-set-latex":{this.lastDepth=void 0;let a=Pl(t.latex,this.model.config),i=a.lastCursor(),s=se(i);this.model=this.model.withRootAndSelection(a,s);break}case"api-clear-selection":{this.model=this.model.withPointSelection(this.getSelection().head);break}case"api-set-selection":{let{startIndex:a,endIndex:i,anchorIndex:s,headIndex:c,latex:l}=t.selection;if(Qn(this.getRoot())!==l)return;let p,y;if(s!==void 0&&c!==void 0)p=Tl(this.getRoot(),s),y=Tl(this.getRoot(),c);else{if(a>i)return;p=Tl(this.getRoot(),i),y=Tl(this.getRoot(),a)}if(p===void 0||y===void 0)return;let x=Pt(p,y);if(!x)return;this.model=this.model.withSelection(x);break}case"select-all":{this.model=Fm(this.model);break}case"jump-to-field-end":case"jump-to-field-start":{let a=t.type==="jump-to-field-end"?"right":"left",i=this.getRoot(),s=i.lastCursorInDir(a),c=_n(i,this.model.getMathspeakOptions()),l=vm(this.model.getAriaLabel(),c,this.model.getAriaPostLabel()),p=this.model.s(a==="left"?"mq-narration-beginning-of":"mq-narration-end-of",{expr:l});this.model=this.model.withPointSelection(s).withAriaQueueItem(p);break}case"write-latex":{let a;if(Ta(this.getSelection().group)?a=pk(t.latex):a=Pl(t.latex,this.model.config),t.fromPaste){if(a.children.length===0&&t.latex.trim()!==""){this.rejectPaste("unrecognized-latex");break}if(ay(a,this.model.config.maxResizingMatrixSize)){this.rejectPaste("matrix-too-large");break}}let{root:i,insertedSelection:s}=Ue(this.getSelection(),a.children),c=se(s.right);this.model=this.model.withRootAndSelection(i,c),t.fromPaste&&this.runAfterDispatch(()=>{this.model.config.onPaste&&this.model.config.onPaste()});break}case"delete-in-direction":{this.model=Rm(this.getModel(),t.direction);break}case"ctrl-delete-in-direction":{this.model=Zk(this.getModel(),t.direction);break}case"cut-selected":{let{root:a,insertedSelection:i}=Ue(this.getSelection(),[]);this.model=this.model.withRootAndSelection(a,i),this.runAfterDispatch(()=>{this.model.config.onCut&&this.model.config.onCut()});break}case"arrow-left-right":this.model=Qk(this.model,t.dir);break;case"shift-left-right":{let a=nc(this.model,t.dir);this.model=this.model.withSelection(a);break}case"arrow-up-down":{this.model=jk(this.model,t.updown);break}case"shift-up-down":{this.model=c0(this.model,t.updown);break}case"home-end":{let a=this.model.selection.group,i=a.lastCursorInDir(t.dir);this.model=this.model.withPointSelection(i).withAriaQueueDirEndOf(t.dir,a);break}case"shift-home-end":{this.model=l0(this.model,t.dir);break}case"ctrl-shift-home-end":{this.model=u0(this.model,t.dir);break}case"escape-dir":{let a=this.getMatrixAtCursor(),i=a?Wo(this.model,a,t.direction):Dy(this.model,t.direction);i!==void 0&&((r=t.evt)==null||r.preventDefault(),this.model=i);break}case"tab-dir":{let a=m0(this.model,t.direction);a&&((n=t.evt)==null||n.preventDefault(),this.model=a);break}case"mouse-down":{if((o=t.target)!=null&&o.closest(".dcg-mq-matrix__pull-handle")){let i=t.target.closest(".dcg-mq-matrix__container");if(!i)throw new Error("Missing matrix DOM");let s=Pm(this.model,i);if(!s||s.type!=="matrix")throw new Error("Missing matrix");this.model=Dm(this.model,s,"mouse");let c=i.getBoundingClientRect();this.model=this.model.withMouseDownState({type:"mouse-down-resizing-matrix",originalMatrixTopLeft:{clientX:c.left,clientY:c.top}});return}let a=Am(this.model,t.target,Im(t));this.model=this.model.withPointSelection(a).withMouseDownState({type:"mouse-down-selecting"});break}case"mouse-move":{if(this.model.mouseDownState.type==="mouse-down-resizing-matrix"){if(!jo(this.model))return;let c=this.model.mouseDownState.originalMatrixTopLeft;this.model=o0(this.model,t.clientX,t.clientY,c),this.model=this.model.withMouseDownState({type:"mouse-down-resizing-matrix",originalMatrixTopLeft:c}),this.runAfterDispatch(()=>{var l,p;(p=(l=this.model.config).onMatrixResize)==null||p.call(l)});return}let a=Am(this.model,t.target,Im(t));this.model.config.resetCursorOnBlur&&this.getFocusState()!=="focused"&&this.model.selectionBeforeBlur&&(this.model=this.model.withSelection(this.model.selectionBeforeBlur));let i=om(this.model.selection.anchor,a);this.model=this.model.withSelection(i).withMouseDownState({type:"mouse-down-selecting"}),Je(i)||(this.model=this.model.withAriaQueueSelection(i));break}case"mouse-up":{if(this.model=this.model.withMouseDownState({type:"none"}),jo(this.model))return;Je(this.model.selection)&&(this.getConfig().static?this.model=Fm(this.model):this.model=this.model.withAriaQueueNode(this.model.selection.group));break}case"resize-matrix-by-arrow":{this.model=a0(this.model,t.dx,t.dy),this.runAfterDispatch(()=>{var a,i;(i=(a=this.model.config).onMatrixResize)==null||i.call(a)});break}case"resize-matrix-at-cursor":{this.model=s0(this.model,t.dx,t.dy),this.runAfterDispatch(()=>{var a,i;(i=(a=this.model.config).onMatrixResize)==null||i.call(a)});break}case"click-at":{let a=Am(this.model,t.target,Im(t));this.model=this.model.withPointSelection(a);break}case"type-char":{this.model=Rk(this.model,t.char);break}case"set-aria-label":this.model=this.model.withAriaLabel(t.label);break;case"set-aria-post-label":this.model=this.model.withAriaPostLabel(t.label),this.ariaAlertTimeout!==void 0&&clearTimeout(this.ariaAlertTimeout),t.label!==""&&t.timeout!==void 0&&(this.ariaAlertTimeout=setTimeout(()=>{this.dispatch({type:"speak-aria-post-after-timeout"})},t.timeout));break;case"speak-aria-post-after-timeout":this.getFocusState()==="focused"&&(this.model=this.model.withAriaQueueItem(_n(this.getRoot(),this.model.getMathspeakOptions()).trim()+" "+this.model.getAriaPostLabel().trim()));break;case"speak-parent-block":{let a=this.model.selection.group.parent();if(a)this.model=this.model.withAriaQueueNode(a);else{let i=this.model.s("mq-narration-nothing-above");this.model=this.model.withAriaQueueItem(i)}break}case"speak-current-block":{let a=this.model.selection.group;if(a.numChildren()>0)this.model=this.model.withAriaQueueNode(a);else{let i=this.model.s("mq-narration-block-is-empty");this.model=this.model.withAriaQueueItem(i)}break}case"speak-block-dir":{let a=this.model.selection.group.parent(),i=a==null?void 0:a.nextSiblingInDir(t.dir);if(i)this.model=this.model.withAriaQueueNode(i);else if(t.dir==="right"){let s=this.model.s("mq-narration-nothing-to-the-right");this.model=this.model.withAriaQueueItem(s)}else{let s=this.model.s("mq-narration-nothing-to-the-left");this.model=this.model.withAriaQueueItem(s)}break}case"speak-selection":{this.model=this.model.withAriaQueueSelection(this.model.selection);break}case"speak-aria-post":{let a=this.model.getAriaPostLabel();if(a.length>0)this.model=this.model.withAriaQueueItem(a);else{let i=this.model.s("mq-narration-no-answer");this.model=this.model.withAriaQueueItem(i)}break}default:throw new Error(`Invalid action type: ${t.type}`)}}getLatexSelection(){return Jf(this.getSelection())}domNodeToSpan(t){let r=Pm(this.model,t);if(!r)return;let n=r.type==="group"?hn(r,0,r.children.length):r.containingSelection();return Jf(n)}debugGetCursorSelection(){return this.getSelection()}getSelection(){return this.model.selection}getRoot(){return this.model.root}isSelecting(){return this.model.mouseDownState.type==="mouse-down-selecting"}getFocusState(){return this.focusState}fakeFocus(){this.focusState="focused"}selectedLatex(){return TM(this.getSelection())}getLatex(){return Qn(this.getRoot())}getModel(){return this.model}getConfig(){return this.model.config}getAriaLabel(){return this.model.getAriaLabel()}getAriaPostLabel(){return this.model.getAriaPostLabel()}setMostRecentAriaMessage(t){this.mostRecentAriaMessage=t}getMostRecentAriaMessage(){return this.mostRecentAriaMessage}getShowGrouping(){return this.showGrouping&&this.getConfig().enableDigitGrouping}getMatrixBeingResized(){return jo(this.model)}getMatrixAtCursor(){var t,r;return(r=An(this.model.selection))!=null?r:(t=rm(this.model.selection))==null?void 0:t.matrix}canResizeMatrixAtCursor(t,r){return Ry(this.model,t,r)!==void 0}isDragResizingMatrix(){return this.model.mouseDownState.type==="mouse-down-resizing-matrix"}};var qy;function b0(){return qy===void 0&&(qy=V3()),qy}function V3(){let e=document.createElement("span");e.style.display="inline-block";for(let n=0;n<9;n++)y0(e);let t=y0(e);document.body.appendChild(e);let r=e.getBoundingClientRect().right-t.getBoundingClientRect().right;return e.remove(),r>.05}function y0(e){let t=document.createElement("span");return t.style.display="inline-block",t.innerText="0",t.style.marginLeft="0.7px",e.appendChild(t),t}function x0(){}var Fy=class{constructor(){this.fn=x0}listen(t){this.fn=t,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(this.fn)}listenOnce(t){this.listen((...r)=>{this.clearListener(),t(...r)})}clearListener(){this.fn=x0,clearTimeout(this.timeoutId)}trigger(...t){this.fn(...t)}},$3={8:"Backspace",9:"Tab",10:"Enter",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Esc",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Del",144:"NumLock"},G3={ArrowRight:"Right",ArrowLeft:"Left",ArrowDown:"Down",ArrowUp:"Up",Delete:"Del",Escape:"Esc",UIKeyInputEscape:"Esc"," ":"Spacebar"};function Oy(e){switch(T0(e)){case"Right":case"Left":case"Down":case"Up":return!0;default:return!1}}function U3(e){return e.length===1&&e>="a"&&e<="z"}function T0(e){var t;if(e.key===void 0){let r=e.which||e.keyCode;return $3[r]||String.fromCharCode(r)}return U3(e.key)?e.key.toUpperCase():(t=G3[e.key])!=null?t:e.key}function v0(e){let t=T0(e),r=[];return e.ctrlKey&&r.push("Ctrl"),e.metaKey&&r.push("Meta"),e.altKey&&r.push("Alt"),e.shiftKey&&r.push("Shift"),r.length?(t!=="Alt"&&t!=="Control"&&t!=="Meta"&&t!=="Shift"&&r.push(t),r.join("-")):t}function w0(e,t){for(let[r,n]of Object.entries(t)){let o=r;e.addEventListener(o,n)}}function S0(e,t){let r=null,n=null,o=new Fy;function a(){try{e instanceof HTMLTextAreaElement&&e.select()}catch(w){}}function i(){return!("selectionStart"in e)||!(e instanceof HTMLTextAreaElement)?!1:e.selectionStart!==e.selectionEnd}function s(){t.keystroke(v0(r),r)}function c(w){o.trigger(w),w.target===e&&(r=w,n=null,Oy(w)&&w.preventDefault(),s())}function l(w){o.trigger(w),w.target===e&&(r&&n&&s(),n=w,Oy(w)?o.listenOnce(x):o.listen(y))}function p(w){o.trigger(w),w.target===e&&r&&!n&&(Oy(w)?o.listenOnce(x):o.listen(y))}function y(){if(i()||!(e instanceof HTMLTextAreaElement))return;let w=e.value;r&&(r.key==="Unidentified"||!r.altKey&&r.ctrlKey&&!r.metaKey&&r.shiftKey&&(r.key==="U"||r.key==="Process"))||(w.length===1?(e.value="",t.typedText(w)):x())}function x(){e instanceof HTMLTextAreaElement&&e.value.length>1&&a()}function M(){r=null,n=null,o.clearListener(),e instanceof HTMLTextAreaElement&&(e.value="")}function L(w){var j,te,Te;if(o.trigger(),w.target!==e)return;document.activeElement!==e&&e.focus(),w.preventDefault();let k=(j=w.clipboardData)==null?void 0:j.getData("text/plain");!k||(Te=(te=t.options).overridePaste)!=null&&Te.call(te,w)||t.paste(k)}function T(w){o.trigger(w)}if(t.KIND_OF_MQ==="StaticMath"){w0(e,{keydown:w=>{t.keystroke(v0(w),w)}});return}w0(e,{keydown:c,keypress:l,keyup:p,focusout:M,cut:function(w){var j,te;if(!w.clipboardData||((te=(j=t.options).overrideCut)==null?void 0:te.call(j,w)))return;let V=t.cut();w.clipboardData.setData("text/plain",V),w.clipboardData.setData("application/x-latex",V),w.preventDefault(),w.stopPropagation()},copy:function(w){var j,te;if(!w.clipboardData||((te=(j=t.options).overrideCopy)==null?void 0:te.call(j,w)))return;let V=t.copy();w.clipboardData.setData("text/plain",V),w.clipboardData.setData("application/x-latex",V),w.preventDefault()},paste:L,input:T})}function M0(e,t){let r=Date.now(),n,o=0;function a(){let c=(Date.now()-r)/e;c<=o?s():o=c,t(o,s,i)}function i(){n!==void 0&&cancelAnimationFrame(n),n=void 0}function s(){i(),n=requestAnimationFrame(a)}t(e<=0?1:0,s,i)}function k0(e){e.isScrolling=!1;let r=e.getRoot().getDomNode();if(!r)return;let n=r.getBoundingClientRect();if(!n)return;let o=z3(e,n,r);if(o===0||o<0&&r.scrollLeft===0||o>0&&r.scrollWidth<=r.scrollLeft+n.width)return;e.cancelScrollHoriz&&(e.cancelScrollHoriz(),e.cancelScrollHoriz=void 0),e.isScrolling=!0;let a=r.scrollLeft,i=e.getModel().config.scrollAnimationDuration;M0(i,(s,c,l)=>{s>=1?(e.cancelScrollHoriz=void 0,e.isScrolling=!1,r.scrollLeft=Math.round(a+o)):(e.cancelScrollHoriz=l,c(),r.scrollLeft=Math.round(a+s*o)),By(e)})}function z3(e,t,r){let n=e.getModel(),o=e.getModel().selection;if(e.isSelecting()&&(o=se(o.head)),e.getFocusState()!=="focused")return-r.scrollLeft;let a=jo(e.getModel()),i=a&&H3(t,a);if(i!==void 0)return i;if(Je(o)){let s=Iy(n);return s===void 0?0:E0(t,s)}else return K3(t,o)}function H3(e,t){let r=t==null?void 0:t.getDomNode();if(r){for(let n of r.children)if(n.classList.contains("dcg-mq-matrix__pull-handle")){let a=n.getBoundingClientRect().right;return E0(e,a)}}}function E0(e,t){return t>e.right-20?t-(e.right-20):t<e.left+20?t-(e.left+20):0}function K3(e,t){var i,s,c,l;let r=(s=(i=t.left.nodeAfter())==null?void 0:i.boundingClientRect())==null?void 0:s.left,n=(l=(c=t.right.nodeBefore())==null?void 0:c.boundingClientRect())==null?void 0:l.right;if(r===void 0||n===void 0)return 0;let o=r-(e.left+20),a=n-(e.right-20);return t.head.eq(t.left)?o<0?o:a>0?r-a<e.left+20?o:a:0:a>0?a:o<0?n-o>e.right-20?a:o:0}function By(e){let r=e.getRoot().getDomNode();if(!r)return;let n=!1;e.getFocusState()==="focused"&&(n=r.scrollLeft>0),r.classList.toggle("dcg-mq-editing-overflow-left",n)}var $m=class{constructor(t,r,n){this.scrollHorizQueued=!1;this.firstMessageSent=!1;this.firstMessageTimeout=null;this.controller=t,this.rootElt=r,r.classList.add("dcg-mq-math-mode"),r.translate=!1,r.classList.add("notranslate"),r.childNodes.forEach(M=>M.remove());let o=this.handleMouseDown.bind(this);r.addEventListener("mousedown",o);let a=this.handlePointerDown.bind(this);r.addEventListener("pointerdown",a);let i=document.createElement("span");i.className="dcg-mq-aria-alert",i.ariaLive="assertive",i.ariaAtomic="true",this.ariaAlertElt=i;let s=document.createElement("span");s.className="dcg-mq-textarea",r.appendChild(s);let c=fd(),l=document.createElement("span");l.className="dcg-mq-mathspeak",l.id=c,l.setAttribute("aria-hidden","true"),this.mathspeakElt=l,s.appendChild(l);let p=document.createElement("textarea");p.inputMode="none",p.setAttribute("autocorrect","off"),p.setAttribute("aria-labelledby",c),p.autocapitalize="none",p.spellcheck=!1,p.autocomplete="off",s.appendChild(p),this.textarea=p,S0(p,n),this.addFocusAndBlurListeners();let y=document.createElement("span"),x=b0()?" dcg-mq-has-spacing-bug":"";y.className="dcg-mq-root-block"+x,y.setAttribute("aria-hidden","true"),r.appendChild(y),this.rootBlock=y,this.updateAttributes(),this.renderer=new ym(this.rootBlock)}updateAttributes(){this.updateTabIndex(),this.rootBlock.classList.toggle("dcg-mq-show-grouping",this.controller.getShowGrouping());let t=this.controller.getConfig();this.rootElt.classList.toggle("dcg-mq-editable-field",!t.static),t.needsSystemKeypad?this.textarea.removeAttribute("inputmode"):this.textarea.inputMode="none"}updateTabIndex(){let t=this.tabIndex();this.textarea.tabIndex=t;let r=this.controller.getConfig();t<0&&r.static?this.textarea.setAttribute("aria-hidden","true"):this.textarea.removeAttribute("aria-hidden"),t>=0?this.mathspeakElt.setAttribute("aria-hidden","true"):this.mathspeakElt.removeAttribute("aria-hidden")}tabIndex(){let t=this.controller.getConfig();return t.tabindex!==void 0?t.tabindex:t.static?-1:0}containerHasFocus(){return document.activeElement&&this.rootElt.contains(document.activeElement)}updateAriaView(){let t=this.controller.getModel();if(t.ariaQueue.length===0)return;let r=t.ariaQueue.join(" ").replace(/ +(?= )/g,"").trim();this.controller.setMostRecentAriaMessage(r),this.containerHasFocus()&&(t.config.logAriaAlerts&&r&&console.log(r),this.ariaAlertElt.parentNode!==this.rootElt&&this.rootElt.prepend(this.ariaAlertElt),this.firstMessageSent?this.ariaAlertElt.textContent=r:(this.firstMessageTimeout!==null&&clearTimeout(this.firstMessageTimeout),this.firstMessageTimeout=setTimeout(()=>{this.firstMessageSent=!0,this.firstMessageTimeout=null,this.ariaAlertElt.textContent=r},50)))}updateView(){let t=this.controller.getRoot(),r=this.controller.getFocusState(),n=this.controller.getModel();this.updateAttributes(),this.updateAriaView(),this.renderer.render(n,r),this.setTextareaSelection();let o=n.getAriaLabel();if(this.controller.getFocusState()!=="focused"){let s=_n(n.root,n.getMathspeakOptions());this.mathspeakElt.textContent=vm(o,s,n.getAriaPostLabel())}let a=t.children.length===0,i=this.controller.getFocusState()==="focused";this.rootElt.classList.toggle("dcg-mq-focused",i),this.rootBlock.classList.toggle("dcg-mq-hasCursor",i),this.rootBlock.classList.toggle("dcg-mq-empty",a&&!i),this.controller.markAfterRender(),this.scrollHorizQueued||(this.scrollHorizQueued=!0,this.controller.isScrolling=!0,requestAnimationFrame(()=>{this.scrollHorizQueued=!1,k0(this.controller)})),By(this.controller),this.updateResizeCover()}updateResizeCover(){var t;if(this.controller.isDragResizingMatrix()){if(this.resizeCover)return;let r=document.createElement("div");r.className="dcg-mq-resize-cover",this.rootElt.appendChild(r),this.resizeCover=r}else(t=this.resizeCover)==null||t.remove(),this.resizeCover=void 0}setTextareaSelection(){if(document.activeElement!==this.textarea)return;let t=this.controller.getLatexSelection(),r=t.latex.slice(t.startIndex,t.endIndex);this.textarea.value=r,r!==""&&this.textarea.select()}focus(){this.textarea.focus()}blur(){this.textarea.blur()}handlePointerDown(t){if(!t.isPrimary||this.activePullHandlePointerId!==void 0||!(t.target instanceof Element))return;let r=t.target.closest(".dcg-mq-matrix__pull-handle");if(!r)return;t.preventDefault(),this.focus(),this.activePullHandlePointerId=t.pointerId;let n=this.rootElt.ownerDocument,o=i=>{i.pointerId===this.activePullHandlePointerId&&(this.controller.dispatch({type:"mouse-move",clientX:i.clientX,clientY:i.clientY,target:void 0}),this.textarea!==document.activeElement&&this.focus())},a=i=>{i.pointerId===this.activePullHandlePointerId&&(this.activePullHandlePointerId=void 0,n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",a),n.removeEventListener("pointercancel",a),this.controller.dispatch({type:"mouse-up"}))};n.addEventListener("pointermove",o),n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),this.controller.dispatch({type:"mouse-down",target:r,clientX:t.clientX,clientY:t.clientY})}handleMouseDown(t){var p;if(t.target===null||(t.preventDefault(),t.target.closest(".dcg-mq-matrix__pull-handle")))return;let r=this.rootElt.ownerDocument,n=this.controller.getConfig().ignoreNextMousedown;if(n!=null&&n(t)||t.target.closest(".dcg-mq-ignore-mousedown"))return;this.focus();let o,a=this.controller.getConfig().askIfShouldIgnoreMousemove,i=y=>{var x;a!=null&&a(y,this.rootElt)||(o=(x=y.target)!=null?x:void 0)},s=y=>{a!=null&&a(y,this.rootElt)||(this.controller.dispatch({type:"mouse-move",clientX:y.clientX,clientY:y.clientY,target:o}),this.textarea!==document.activeElement&&this.focus(),o=void 0)},c=()=>{this.rootElt.removeEventListener("mousemove",i),r.removeEventListener("mousemove",s),r.removeEventListener("mouseup",l)},l=()=>{c(),this.controller.dispatch({type:"mouse-up"})};this.rootElt.addEventListener("mousemove",i),r.addEventListener("mousemove",s),r.addEventListener("mouseup",l),this.controller.dispatch({type:"mouse-down",target:(p=t.target)!=null?p:void 0,clientX:t.clientX,clientY:t.clientY})}addFocusAndBlurListeners(){this.textarea.addEventListener("focus",()=>{clearTimeout(this.blurTimeout),this.controller.dispatch({type:"focus"})}),this.textarea.addEventListener("blur",()=>{this.blurTimeout=setTimeout(()=>{this.controller.dispatch({type:"blur",intentional:document.hasFocus()})})})}};function C0(e){return e.__dcgMqApiInstance}function W3(e,t){e.__dcgMqApiInstance=t}function j3(e,t){return new Bl(e,{static:!0,...t})}function I0(e,t){return new Bl(e,t)}var Q3=I0,Bl=class{constructor(t,r){let n=t.textContent;if(this.container=t,this.controller=new Vm,C0(t)!==void 0)throw new Error("MQ Error: cannot attach another API to the same element.");W3(t,this);let o={keystroke:(a,i)=>{let s=this.controller.getConfig();s.overrideKeystroke?s.overrideKeystroke(a,i):this._keystrokeSingle(a,i)},typedText:a=>{let i=this.controller.getConfig();i.overrideTypedText?i.overrideTypedText(a):this.typedText(a)},paste:a=>this._paste(a),cut:()=>this._cut(),copy:()=>this._copy(),options:{overridePaste:a=>{var i,s,c;return(c=(s=(i=this.controller.getConfig()).overridePaste)==null?void 0:s.call(i,a))!=null?c:!1},overrideCopy:a=>{var i,s,c;return(c=(s=(i=this.controller.getConfig()).overrideCopy)==null?void 0:s.call(i,a))!=null?c:!1},overrideCut:a=>{var i,s,c;return(c=(s=(i=this.controller.getConfig()).overrideCut)==null?void 0:s.call(i,a))!=null?c:!1}},KIND_OF_MQ:"MathField"};this.view=new $m(this.controller,t,o),this.config(r),this.view.updateAttributes(),this.controller.subscribeToChanges(()=>this.view.updateView()),n.trim()&&this.latex(n)}latex(t){return t!==void 0?(this.controller.dispatch({type:"api-set-latex",latex:t}),this):this.controller.getLatex()}mathspeak(){return _n(this.controller.getRoot(),this.controller.getModel().getMathspeakOptions()).replace(/ {2,}/g," ")}selection(t){return t?(this.focus(),this.controller.dispatch({type:"api-set-selection",selection:t}),this):this.controller.getLatexSelection()}domNodeToSpan(t){return this.controller.domNodeToSpan(t)}clearSelection(){this.controller.dispatch({type:"api-clear-selection"})}select(){this.focus(),this.controller.dispatch({type:"select-all"})}write(t){return this.controller.dispatch({type:"write-latex",latex:t,fromPaste:!1}),this}keystroke(t,r){let n=t.replace(/^\s+|\s+$/g,"").split(/\s+/);for(let o=0;o<n.length;o+=1)this._keystrokeSingle(n[o],r);return this}_keystrokeSingle(t,r){switch(t){case"Left":case"Right":{r==null||r.preventDefault(),this.controller.getMatrixBeingResized()?this.controller.dispatch({type:"resize-matrix-by-arrow",dx:t==="Left"?-1:1,dy:0}):this.controller.dispatch({type:"arrow-left-right",dir:t==="Left"?"left":"right"});break}case"Up":case"Down":{r==null||r.preventDefault(),this.controller.getMatrixBeingResized()?this.controller.dispatch({type:"resize-matrix-by-arrow",dx:0,dy:t==="Up"?-1:1}):this.controller.dispatch({type:"arrow-up-down",updown:t==="Up"?"up":"down"});break}case"Meta-Shift-Left":case"Meta-Shift-Right":case"Meta-Shift-Up":case"Meta-Shift-Down":case"Ctrl-Shift-Left":case"Ctrl-Shift-Right":case"Ctrl-Shift-Up":case"Ctrl-Shift-Down":{let n=t.endsWith("-Left")?-1:t.endsWith("-Right")?1:0,o=t.endsWith("-Up")?-1:t.endsWith("-Down")?1:0;if(!this.controller.canResizeMatrixAtCursor(n,o))break;r==null||r.preventDefault(),r==null||r.stopPropagation(),this.controller.dispatch({type:"resize-matrix-at-cursor",dx:n,dy:o});break}case"Shift-Left":case"Shift-Right":r==null||r.preventDefault(),this.controller.dispatch({type:"shift-left-right",dir:t==="Shift-Left"?"left":"right"});break;case"Shift-Up":case"Shift-Down":r==null||r.preventDefault(),this.controller.dispatch({type:"shift-up-down",updown:t==="Shift-Up"?"up":"down"});break;case"Home":case"End":r==null||r.preventDefault(),this.controller.dispatch({type:"home-end",dir:t==="Home"?"left":"right"});break;case"Shift-Home":case"Shift-End":r==null||r.preventDefault(),this.controller.dispatch({type:"shift-home-end",dir:t==="Shift-Home"?"left":"right"});break;case"Ctrl-Shift-Home":case"Ctrl-Shift-End":r==null||r.preventDefault(),this.controller.dispatch({type:"ctrl-shift-home-end",dir:t==="Ctrl-Shift-Home"?"left":"right"});break;case"Backspace":case"Del":{r==null||r.preventDefault(),this.controller.dispatch({type:"delete-in-direction",direction:t==="Backspace"?"left":"right"});break}case"Ctrl-Backspace":case"Ctrl-Del":{r==null||r.preventDefault(),this.controller.dispatch({type:"ctrl-delete-in-direction",direction:t==="Ctrl-Backspace"?"left":"right"});break}case"Tab":case"Shift-Tab":{this.controller.dispatch({type:"tab-dir",direction:t==="Tab"?"right":"left",evt:r});break}case"Esc":case"Shift-Esc":{this.controller.dispatch({type:"escape-dir",direction:t==="Esc"?"right":"left",evt:r});break}case"Ctrl-A":case"Meta-A":r==null||r.preventDefault(),this.select();break;case"Ctrl-End":r==null||r.preventDefault(),this.moveToRightEnd();break;case"Ctrl-Home":r==null||r.preventDefault(),this.moveToLeftEnd();break;case"Ctrl-Alt-Left":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-block-dir",dir:"left"});break;case"Ctrl-Alt-Right":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-block-dir",dir:"right"});break;case"Ctrl-Alt-Up":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-parent-block"});break;case"Ctrl-Alt-Down":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-current-block"});break;case"Ctrl-Alt-Shift-Down":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-selection"});break;case"Ctrl-Alt-=":case"Ctrl-Alt-Shift-Right":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-aria-post"});break}}moveToLeftEnd(){return this.controller.dispatch({type:"jump-to-field-start"}),this}moveToRightEnd(){return this.controller.dispatch({type:"jump-to-field-end"}),this}typedText(t){for(let r=0;r<t.length;r+=1)this._typedTextSingle(t.charAt(r));return this}_typedTextSingle(t){this.controller.dispatch({type:"type-char",char:t})}debugGetMostRecentAriaMessage(){return this.controller.getMostRecentAriaMessage()}debugGetCursorSelection(){return this.controller.debugGetCursorSelection()}debugGetRoot(){return this.controller.getRoot()}debugGetModel(){return this.controller.getModel()}focus(){return this.view.focus(),this}fakeFocus(){this.controller.fakeFocus()}blur(){return this.view.blur(),this}subscribeToChanges(t){return this.controller.subscribeToChanges(t)}config(t){let r=this.controller.getConfig(),n=Ey(r,t);if(!Qe(n,r))return this.controller.dispatch({type:"set-config",config:n}),this}ignoreNextMousedown(t){return this.config({ignoreNextMousedown:t}),this}getAriaLabel(){return this.controller.getAriaLabel()}setAriaLabel(t){return this.controller.getModel().getRawAriaLabel()!==t&&this.controller.dispatch({type:"set-aria-label",label:t}),this}getAriaPostLabel(){return this.controller.getAriaPostLabel()}setAriaPostLabel(t,r){return this.getAriaPostLabel()!==t&&this.controller.dispatch({type:"set-aria-post-label",label:t,timeout:r}),this}clickAt(t,r,n){return this.focus(),this.controller.dispatch({type:"click-at",clientX:t,clientY:r,target:n}),this}isUserSelecting(){return this.controller.isSelecting()}isResizingMatrix(){return this.controller.getMatrixBeingResized()!==void 0}isCursorInMatrix(){return this.controller.getMatrixAtCursor()!==void 0}isScrolling(){return this.controller.isScrolling}el(){return this.container}_paste(t){this.controller.dispatch({type:"write-latex",latex:t,fromPaste:!0})}_copy(){return this.controller.selectedLatex()}_cut(){let t=this.controller.selectedLatex();return this.controller.dispatch({type:"cut-selected"}),t}};function Y3(e){Gk(e)}var $y=Vy,A0=!1;function X3(){A0||($y.config({localize:re,leftRightIntoCmdGoes:"up",sumStartsWithNEquals:!0,supSubsRequireOperand:!0,charsThatBreakOutOfSupSub:"+-=<>*",autoCommands:Ns({disallowAns:!0}),autoSubscriptNumerals:!0,restrictMismatchedBrackets:"none",typingPercentWritesPercentOf:!0,..._s(),resetCursorOnBlur:!0,enableDigitGrouping:!0}),A0=!0)}X3();var Qo=Object.assign(e=>$y.getApiInstanceForElement(e),$y);var Gm=class{constructor(t,r,n){this.wasFocusedLastUpdate=!1;this.mathField=t,this.props=n,this.$textarea=ge(r[0].querySelector("textarea")),this.$textarea.on("focusin.view focusout.view",o=>this.onFocusEvent(o))}willUnmount(){this.isFocused()&&this.props.manageFocus().onFocusedChanged(!1),this.$textarea.off(".view")}updateMathquillFocused(){var n,o,a,i,s,c,l;if(!this.mathField)return;let t=this.isFocused(),r=this.shouldBeFocused();if(r&&r!==this.wasFocusedLastUpdate&&(o=(n=this.props).selectOnFocus)!=null&&o.call(n)&&((i=(a=this.mathField).select)==null||i.call(a)),this.wasFocusedLastUpdate=r,t!==r&&(r?Gc()||this.mathField.focus():this.mathField.blur()),r){let p=this.mathField,y=(c=(s=this.props).selection)==null?void 0:c.call(s);if(!y||p.isUserSelecting()||(l=p.isResizingMatrix)!=null&&l.call(p))return;let x=p.selection();if(this.lastSelection=y,Qe(y,x))return;p.selection(y)}}isFocused(){var t;return!!(document.activeElement&&((t=this.mathField)!=null&&t.el().contains(document.activeElement)))}shouldBeFocused(){return this.props.manageFocus().shouldBeFocused()}onFocusEvent(t){let r=this.isFocused();r!==this.shouldBeFocused()&&this.props.manageFocus().onFocusedChanged(r,t)}maybeTriggerOnSelectionChange(){let t=this.props.onSelectionChanged;if(!t||!this.mathField)return;let r=this.mathField.selection();Qe(r,this.lastSelection)||(t(r,this.lastSelection),this.lastSelection=r)}};var $r=class extends K{template(){return this.props.children?this.props.children:u("div",{onMount:t=>this.onMountMathquill(t)})}onMount(){if(this.props.children){let t=this.findAllRootDOMNodes();if(t.length!==1)throw new Error(`StaticMathquillView expects exactly 1 child DOM Node. Got: ${t.length}`);let r=t[0];if(r instanceof HTMLElement)this.onMountMathquill(r);else throw new Error("StaticMathquillView expects an HTMLElement as child DOM node")}}onMountMathquill(t){var n,o,a,i,s,c,l,p;if(this.staticMath=Qo.StaticMath(t,{...(o=(n=this.props).config)==null?void 0:o.call(n),tabindex:(i=(a=this.props).tabbable)!=null&&i.call(a)?0:-1,overrideKeystroke:(y,x)=>{var M,L;(L=(M=this.props).onUserPressedKey)!=null&&L.call(M,y,x)&&x.stopPropagation()}}),!this.staticMath)return;let r=(c=(s=this.props).tokenController)==null?void 0:c.call(s);r&&(this.mathquillTokenHelper=r.instantiateNewMathquillTokenHelper(t,this.staticMath)),this.updateMathquill(),t.classList.add("dcg-static-mathquill-view"),(p=(l=this.props).didMountMathquill)==null||p.call(l,this.staticMath)}didUpdate(){this.updateMathquill()}updateMathquill(){var t;this.updateTabbable(),this.updateMathquillAria(),this.updateMathquillLatex(),(t=this.mathquillTokenHelper)==null||t.updateTokens(this.props.latex())}updateTabbable(){var t;this.props.tabbable&&((t=this.staticMath)==null||t.config({tabindex:this.props.tabbable()?0:-1}))}willUnmount(){var t;(t=this.mathquillTokenHelper)==null||t.destroy(),this.mathquillTokenHelper=void 0}updateMathquillLatex(){if(!this.staticMath)return;let t=this.props.latex();this.lastLatex!==t&&(this.staticMath.latex(t),this.lastLatex=t,this.props.onReflow&&this.props.onReflow())}updateMathquillAria(){this.staticMath&&this.props.getAriaLabel&&this.staticMath.setAriaLabel(this.props.getAriaLabel())}};var P0=500,Z3=30,J3=100,Ve=class e extends K{constructor(){super(...arguments);this.lastLatexProp=""}template(){return N("div",{class:"dcg-mq-container",children:[u(J,{predicate:()=>this.getPlaceholder().trim().length>0,children:()=>u("span",{class:"dcg-mq-placeholder",children:u($r,{config:()=>this.props.config(),latex:()=>this.getPlaceholder()})})}),u("div",{class:()=>({"dcg-math-field":!0,"dcg-no-fadeout":this.props.noFadeout&&this.props.noFadeout(),"dcg-invalid":this.props.hasError(),"dcg-focus":this.props.manageFocus().shouldBeFocused()}),onMount:r=>this.didMountMathquill(r),"data-dcg-label":()=>this.props.dataLabelAttributeValue?this.props.dataLabelAttributeValue():void 0})]})}willUnmount(){var r,n;(r=this.mathquillFocus)==null||r.willUnmount(),this.mathField=void 0,(n=this.mathquillTokenHelper)==null||n.destroy(),this.mathquillTokenHelper=void 0}getPlaceholder(){return!this.props.placeholder||this.props.manageFocus().shouldBeFocused()||this.props.latex()?"":this.props.placeholder()}didMountMathquill(r){var i,s,c,l;this.cachedConfig=this.getCacheableMQConfig();let n={...this.cachedConfig,onCut:()=>this.notifyUserChangedLatex(),onPaste:()=>this.notifyUserChangedLatex(),onMatrixResize:()=>this.notifyUserChangedLatex(),overridePaste:p=>{var M,L,T;if(!p||!this.mathField)return!1;if((L=(M=this.cachedConfig).overridePaste)!=null&&L.call(M,p)||rF(p))return!0;let y=(T=p.clipboardData)==null?void 0:T.getData("text/html"),x=this.getTextFromNotebookHtmlWithTokens(y);return x?(p.preventDefault(),this.mathField.write(x),this.notifyUserChangedLatex(),!0):!1},overrideTypedText:p=>{this.mathField&&this.viewCanAcceptText(p)&&(this.mathField.typedText(p),this.notifyUserChangedLatex())},overrideKeystroke:(p,y)=>{var M;if(p==="Backspace"&&y.preventDefault(),!this.mathField)return;if(p==="Spacebar"&&this.props.disableSpace&&this.props.disableSpace())return y.preventDefault();let x=tt(y);if(x==="Up"||x==="Down"||x==="Left"||x==="Right"||x==="Esc"){let L=[];y.ctrlKey&&L.push("Ctrl"),y.metaKey&&L.push("Meta"),y.altKey&&L.push("Alt"),y.shiftKey&&L.push("Shift"),L.length?(L.push(x),p=L.join("-")):p=x}if((p==="Left"||p==="Right")&&(M=this.mathquillTokenHelper)!=null&&M.maybeMoveFocusToTokenInDirection(p)){this.maybeTriggerOnSelectionChange();return}this.props.onUserPressedKey?this.props.onUserPressedKey(p,y):(this.mathField.keystroke(p,y),this.notifyUserChangedLatex()),this.maybeTriggerOnSelectionChange()}};(s=(i=this.props).needsSystemKeypad)!=null&&s.call(i)&&(n.needsSystemKeypad=!0),this.$mathField=ge(r);let o=Qo.MathField(r,n);this.mathField=o;let a=(l=(c=this.props).tokenController)==null?void 0:l.call(c);a&&(this.mathquillTokenHelper=a.instantiateNewMathquillTokenHelper(r,o)),r._mqMathFieldInstance=this.mathField,r._mqViewInstance=this,this.mathquillFocus=new Gm(o,this.$mathField,this.props),this.$mathField.on("paste.view",p=>this.onPasteEvent(p)),!Z1&&(da||el)&&this.$mathField.on("keypress.view",p=>this.onKeypressEvent(p)),this.hookupMQTapTouch(o),this.updateMathquill()}getCacheableMQConfig(){let r={...this.props.config()};return r.maxDepth=this.props.capExpressionSize()?Z3:J3,this.props.tabIndex&&(r.tabindex=this.props.tabIndex()),r}didUpdate(){this.updateMathquill()}getTextFromNotebookHtmlWithTokens(r){if(!r)return;let n=new DOMParser().parseFromString(r,"text/html"),o=n.querySelectorAll('span[data-dcg-node-type="interpolated-expression"][data-dcg-identifier]');return o.length===0?"":(o.forEach(a=>{let i=a.getAttribute("data-dcg-identifier");i&&a.replaceWith(n.createTextNode(i))}),n.body.textContent)}updateMathquill(){var r,n;this.updateMathquillConfig(),this.updateMathquillAria(),this.updateMathquillLatex(),(r=this.mathquillFocus)==null||r.updateMathquillFocused(),this.updateMathquillPostLabel(),(n=this.mathquillTokenHelper)==null||n.updateTokens(this.props.latex())}onPasteEvent(r){let n="",o=window.clipboardData,a=r.originalEvent;o&&o.getData?n=o.getData("Text"):a&&a.clipboardData&&a.clipboardData.getData&&(n=a.clipboardData.getData("text/plain"));let i=this.viewCanAcceptText(n);return!i&&this.props.onExpressionSizeExceeded&&this.props.onExpressionSizeExceeded(),i}viewCanAcceptText(r){return e.canAcceptText(this.mathField,this.props.capExpressionSize(),r)}static canAcceptText(r,n,o){if(!r)return!1;if(!n)return!0;let a=r.latex();return Xp(a)+Xp(o)<=P0}onKeypressEvent(r){if(Jr(r),!this.mathField)return;let n=r.key&&r.key.length===1?r.key:void 0;n&&this.viewCanAcceptText(n)&&(this.mathField.typedText(n),this.notifyUserChangedLatex())}hookupMQTapTouch(r){this.$mathField.on("dcg-tapstart.view",()=>{let n="dcg-tapend.mathquill-selection-change";this.maybeTriggerOnSelectionChange(),ge(document).on(n,()=>{this.maybeTriggerOnSelectionChange(),ge(document).off(n)})}),r.ignoreNextMousedown(()=>kS.shouldIgnoreMouseDown()),this.$mathField.on("dcg-tap.view",n=>{var i;let o=n;if(o.device!=="touch"||o.target.closest(".dcg-mq-ignore-mousedown"))return;let a=o.changedTouches[0];r.clickAt(a.clientX,a.clientY,a.target),(i=this.mathquillFocus)!=null&&i.isFocused()||r.focus(),this.maybeTriggerOnSelectionChange()})}updateMathquillConfig(r={}){if(!this.mathField)return;let n={...this.getCacheableMQConfig(),...r};if(Qe(n,this.cachedConfig))return;this.cachedConfig=n;let o={...n};delete o.overridePaste,this.mathField.config(o)}updateMathquillAria(){if(!this.mathField)return;let r=this.props.getAriaLabel();r!==this.mathField.getAriaLabel()&&this.mathField.setAriaLabel(r)}updateMathquillPostLabel(){this.mathField&&this.mathField.setAriaPostLabel(this.props.getAriaPostLabel(),1e3)}updateMathquillLatex(){let r=this.props.latex();this.mathField&&this.lastLatexProp!==r&&(this.props.capExpressionSize()&&Xp(r)>P0||(this.lastLatexProp=r,this.mathField.latex()!==r&&this.mathField.latex(r)))}maybeTriggerOnSelectionChange(){var r;(r=this.mathquillFocus)==null||r.maybeTriggerOnSelectionChange()}notifyUserChangedLatex(){if(!this.mathField)return;let r=this.mathField.selection();this.props.onUserChangedLatex(r.latex,r),this.maybeTriggerOnSelectionChange()}static notifyUserChangedLatexOn(r){if(typeof r.notifyUserChangedLatex=="function"){r.notifyUserChangedLatex();return}if(!r.mathField)return;let n=r.mathField.latex();r.props.onUserChangedLatex(n,JS(n,n.length)),r.maybeTriggerOnSelectionChange()}static getFocusedMathquill(){if(!document.activeElement)return;let r=document.activeElement.closest(".dcg-mq-editable-field");if(r)return r._mqMathFieldInstance}static getChildMathquill(r){if(!document.activeElement)return;let n=r.querySelectorAll(".dcg-mq-editable-field");if(n.length===1)return n[0]._mqMathFieldInstance}static getMQViewInstance(r){let n=r.el();if(n)return n._mqViewInstance}static applyArrowKeyAndReturnIfWasAtBounds(r,n,o){let a=r.selection(),i=a.startIndex===0&&a.endIndex===a.latex.length;if(/(Up|Down)$/.test(n)&&i)return r.keystroke(n,o),!0;if(r.keystroke(n,o),r.el().querySelector(".dcg-mq-matrix--resizing"))return!1;let s=r.selection();return!(s.latex!==a.latex||s.startIndex!==a.startIndex||s.endIndex!==a.endIndex)}static temporarilyOverrideLeftRightIntoCommandGoes(r,n){var i;let o=e.getMQViewInstance(r);if(!o)return()=>{};let a=(i=o.getCacheableMQConfig().leftRightIntoCmdGoes)!=null?i:"up";return o.updateMathquillConfig({leftRightIntoCmdGoes:n}),()=>o.updateMathquillConfig({leftRightIntoCmdGoes:a})}static simulateKeypressFromKeypad(r,n){var i;let o=e.getMQViewInstance(r);if(!o)return;let a=(i=o.getCacheableMQConfig().leftRightIntoCmdGoes)!=null?i:"up";(n==="Left"||n==="Right")&&o.updateMathquillConfig({leftRightIntoCmdGoes:void 0}),o.props.onUserPressedKey?o.props.onUserPressedKey(n):(r.keystroke(n),e.notifyUserChangedLatexOn(o)),o.maybeTriggerOnSelectionChange(),(n==="Left"||n==="Right")&&o.updateMathquillConfig({leftRightIntoCmdGoes:a})}static simulateUserChangedLatex(r){let n=e.getMQViewInstance(r);n&&e.notifyUserChangedLatexOn(n)}static handleTypeTextFromKeypad(r,n){let o=e.getFocusedMathquill();o&&e.canAcceptText(o,n,r)&&(o.typedText(r),e.simulateUserChangedLatex(o))}static handlePressKeyFromKeypad(r){let n=e.getFocusedMathquill();n&&e.simulateKeypressFromKeypad(n,r)}static handleCustomCommandFromKeypad(r,n){let o=e.getFocusedMathquill();o&&(Zp(o,r,{capExpressionSize:n}),e.simulateUserChangedLatex(o))}static handleKeystrokeAndDecideIfSpecialEvent(r,n,o){return n==="Enter"||n==="Delete"&&r.latex()===""||n==="Backspace"&&r.latex()===""?!0:n==="Up"||n==="Down"||n==="Left"||n==="Right"?e.applyArrowKeyAndReturnIfWasAtBounds(r,n,o):(r.keystroke(n,o),!1)}static normalizeLatex(r,n){if(r==="")return"";let o=eF(n);return o.latex(r),o.latex()}},Vl;function eF(e){if(!Vl){let r=Qo.MathField(document.createElement("div"),e);return Vl={mq:r,config:e},r}let t=Vl.mq;return Qe(e,Vl.config)||(Vl.config=e,t.config(e)),t}function tF(e){if(!e)return;let t=nM(e);return(t==null?void 0:t.length)===1&&t[0].numberList?t[0].content:void 0}function rF(e){if(!e)return!1;let t=tF(tM(e));if(t){let r=Ve.getFocusedMathquill();return r?(r.write(t),Ve.simulateUserChangedLatex(r),e.stopPropagation(),e.preventDefault(),!0):!1}return!1}var $l=class e{constructor(t=100){this.clear(),this._sizeLimit=t}clone(){let t=new e(this._sizeLimit);return t._stack=this._stack.slice(),t._stackPointer=this._stackPointer,t}clear(){this._stack=[],this._stackPointer=-1}getState(){return this._stack[this._stackPointer]}serializeForBugsnag(){function t(r){try{return JSON.stringify(r,null,2)}catch(n){return"[[could not jsonify]]"}}return{currentState:t(this._stack[this._stackPointer]),undoState:t(this._stack[this._stackPointer-1]),redoState:t(this._stack[this._stackPointer+1])}}addState(t){this.canRedo()&&this._stack.splice(this._stackPointer+1),this._stack.push(t),this._stack.length>this._sizeLimit&&this._stack.shift(),this._stackPointer=this._stack.length-1}replaceState(t){this.canRedo()&&this._stack.splice(this._stackPointer+1),this.replaceInteriorState(t)}replaceInteriorState(t){this._stack.length===0?(this._stack.push(t),this._stackPointer=0):this._stack[this._stackPointer]=t}canUndo(){return this._stackPointer>0}canRedo(){return this._stackPointer<this._stack.length-1}undo(){this.canUndo()&&(this._stackPointer-=1)}redo(){this.canRedo()&&(this._stackPointer+=1)}};var Gl=class{constructor(t,r){this._queuedCallbacks=[];this.raw=(t,r)=>Sn(t,r);this.s=vs(this.getLanguage.bind(this));this.hasTranslation=t=>xs(t,this.getLanguage());this.unpack=t=>Ts(t,this.getLanguage());this.dispatch=t=>{if(this.focusTracker.captureMidDispatchFocusAction(t))return;gd("dispatch",{type:t.type}),this.dispatcher.dispatch(t),this.focusTracker.syncAfterDispatch();let r;for(;r=this._queuedCallbacks.shift();)r()};this.model=t,this.dispatcher=new pa,this.focusTracker=new Ps({dispatcher:this.dispatcher,dispatch:n=>this.dispatch(n),getFocusLocation:()=>this.getFocusLocation()}),this.stateStack=new $l,this.stateStack.addState(this.getPersistedState()),this.settingsProxy=r,this.syncPublicSettings(),this.dispatcher.register(n=>{let o=!1;switch(n.type){case"clear-all":this.model.clearAll(),this.model.focusLastExpression();break;case"clear-focused-expression":this.model.clearFocusedExpression();break;case"undo":this.undo(),o=!0;break;case"redo":this.redo(),o=!0;break;case"set-state-from-api":n.opts.allowUndo||this.stateStack.clear(),this.model.setStateFromAPI(n.state);break;case"clear-from-api":n.opts.allowUndo||this.stateStack.clear(),this.model.clearAll();break;case"add-new-matrix":let a=this.model.addNewMatrixExpression();this.model.focusMatrixExpressionCell(a,0,0);break;case"set-focus-location":this.model.setFocus(n.location);break;case"blur-focus-location":Qe(this.model.getFocus(),n.location)&&this.model.setFocus({type:"unknown"});break;case"focus-first-expression":this.model.focusFirstExpression();break;case"focus-last-expression":this.model.focusLastExpression();break;case"mq-updated-latex":if(n.latex.match(/(.*)matrix$/)&&t.hasUnusedMatrixVariables()){t.setLatexAtFocus(n.latex.replace(/(.*)matrix$/,"$1"));let s=this.model.addNewMatrixExpression();this.model.focusMatrixExpressionCell(s,0,0)}else t.setLatexAtFocus(n.latex);break;case"add-matrix-row":t.addMatrixRow(n.id),this.alertSizeOfMatrix(n.id);break;case"remove-matrix-row":t.removeMatrixRow(n.id),this.alertSizeOfMatrix(n.id);break;case"add-matrix-col":t.addMatrixCol(n.id),this.alertSizeOfMatrix(n.id);break;case"remove-matrix-col":t.removeMatrixCol(n.id),this.alertSizeOfMatrix(n.id);break;case"set-display-as-fraction":this.model.setDisplayAsFraction(n.id,n.value);break;case"keypad/press-key":this.applyPressedKey(n);break;case"edit-bar/press-key":this.editBarPressedKey(n.key,n.evt);break;case"keypad/type-text":this.applyTypedText(n.text);break;case"keypad/custom-command":this.applyCustomCommand(n.command);break;case"tab-backward-from-control-bar":this.model.attemptToMoveFocusWithTab({shiftKey:!0})&&n.evt.preventDefault();break;case"update-inverted-colors":this.model.setOption("invertedColors",!!n.invertedColors);break;case"update-projector-mode":this.model.setOption("projectorMode",!!n.mode);break;case"update-cap-expression-size":this.model.setOption("capExpressionSize",!!n.mode);break;case"update-text-color":this.model.setOption("textColor",n.textColor);break;case"update-background-color":this.model.setOption("backgroundColor",n.backgroundColor);break;case"update-font-size":this.model.setOption("fontSize",n.fontSize);break;case"update-decimal-to-fraction":this.model.setOption("decimalToFraction",n.value);break;case"keypad/shift":case"keypad/123":case"keypad/abc":case"keypad/audio":case"keypad/functions":case"keypad/set-minimized":case"audio-trace-command":break;case"update-language":this.setLanguage(n.language);break;case"enable-settings-menu":this.model.setOption("settingsMenu",!0);break;case"disable-settings-menu":this.model.setOption("settingsMenu",!1);break;case"open-settings-menu":this.openSettingsMenu();break;case"close-settings-menu":this.closeSettingsMenu();break;case"ui/container-resized":this.model.setContainerSize(n.size);break;default:return n}this.model.updateTheComputedWorld(),o||(this.model.getShouldDebounceUndoRedo()?(this.commitUndoRedoDebounced(),this.model.clearShouldDebounceUndoRedo()):this.commitUndoRedoSynchronously()),this.runAfterDispatch(this.syncPublicSettings.bind(this)),this.updateViews()})}runAfterDispatch(t){this.dispatcher.isDispatching()?this._queuedCallbacks.push(t):t()}enqueueEvent(t){this.runAfterDispatch(()=>{this.onEventEmitted&&this.onEventEmitted(t)})}updateViews(){var t;(t=this.onViewUpdate)==null||t.call(this)}getPersistedState(){return this.model.getPersistedState()}setStateFromAPI(t,r){this.dispatch({type:"set-state-from-api",state:t,opts:r})}clearFromAPI(t){this.dispatch({type:"clear-from-api",opts:t})}focusFirstExpression(){this.dispatch({type:"focus-first-expression"})}getFocusLocation(){return this.model.getFocus()}syncPublicSettings(){this.settingsProxy.setProperty("invertedColors",this.model.isEnabled("invertedColors")),this.settingsProxy.setProperty("projectorMode",this.model.isEnabled("projectorMode")),this.settingsProxy.setProperty("capExpressionSize",this.model.isEnabled("capExpressionSize")),this.settingsProxy.setProperty("invertedColors",this.getInvertedColors()),this.settingsProxy.setProperty("textColor",this.getTextColor()),this.settingsProxy.setProperty("backgroundColor",this.getBackgroundColor()),this.settingsProxy.setProperty("fontSize",this.getFontSize()),this.settingsProxy.setProperty("language",this.getLanguage())}ensureMathquillIsFocusedAndReturnFocusedMathquill(){let t=Ve.getFocusedMathquill();if(t)return t;if(this.model.setFocusInPreparationForKeypadEvent(),this.updateViews(),t=Ve.getFocusedMathquill(),!t)throw new Error("No focused mathquill found");return t}applyTypedText(t){let r=this.ensureMathquillIsFocusedAndReturnFocusedMathquill();r&&Ve.canAcceptText(r,this.model.isEnabled("capExpressionSize"),t)&&(r.typedText(t),this.model.setLatexAtFocus(r.latex()))}applyCustomCommand(t){let r=this.ensureMathquillIsFocusedAndReturnFocusedMathquill();r&&(Zp(r,t,{capExpressionSize:this.model.isEnabled("capExpressionSize")}),this.model.setLatexAtFocus(r.latex()))}applyPressedKey(t){let r=this.ensureMathquillIsFocusedAndReturnFocusedMathquill();if(!r)return;let{key:n,source:o,evt:a}=t;if(n==="Up"||n==="Down"||n==="Left"||n==="Right"){let i=o==="keypad"?Ve.temporarilyOverrideLeftRightIntoCommandGoes(r,void 0):void 0,s=Ve.applyArrowKeyAndReturnIfWasAtBounds(r,n,a);i==null||i(),s&&this.model.moveFocusInDirection(n)}else n==="Enter"?(a&&Jr(a),this.model.addBlankLatexExpressionAfterFocus()):n==="Backspace"?this.model.attemptToMoveFocusWithBackspace()||(r.keystroke(n,a),this.model.setLatexAtFocus(r.latex())):n==="Delete"?(r.keystroke(n,a),this.model.setLatexAtFocus(r.latex())):n==="Tab"||n==="Shift-Tab"?this.model.attemptToMoveFocusWithTab({shiftKey:n==="Shift-Tab"})?a&&(a.preventDefault(),a.stopPropagation()):(r.keystroke(n,a),this.model.setLatexAtFocus(r.latex())):(r.keystroke(n,a),this.model.setLatexAtFocus(r.latex()))}editBarPressedKey(t,r){t==="Tab"&&this.model.attemptToMoveFocusWithTab({shiftKey:!!(r!=null&&r.shiftKey)})&&r&&r.preventDefault()}commitUndoRedoDebounced(){let t=this.getPersistedState(),r=this.stateStack.getState();if(Qe(r,t))return;let n=new Date().getTime();n-this._lastDebouncedTime<1e3?this.stateStack.replaceState(t):this.stateStack.addState(t),this._lastDebouncedTime=n,this.enqueueEvent("change")}commitUndoRedoSynchronously(){let t=this.getPersistedState(),r=this.stateStack.getState();Qe(r,t)||(this._lastDebouncedTime=0,this.stateStack.addState(t),this.enqueueEvent("change"))}undo(){this.stateStack.canUndo()&&(this.stateStack.undo(),this.model.setState(this.stateStack.getState()),this.enqueueEvent("change"))}redo(){this.stateStack.canRedo()&&(this.stateStack.redo(),this.model.setState(this.stateStack.getState()),this.enqueueEvent("change"))}canUndo(){return this.stateStack.canUndo()}canRedo(){return this.stateStack.canRedo()}addMetadataToBugsnagReport(t){t.addMetadata("states",this.stateStack.serializeForBugsnag())}getInvertedColors(){return this.model.isEnabled("invertedColors")}hasTextColor(){return this.getTextColor()!=="#000000"}getTextColor(){return zf(this.model.getTextColor()||"#000")}hasBackgroundColor(){return this.getBackgroundColor()!=="#ffffff"}getBackgroundColor(){return zf(this.model.getBackgroundColor()||"#fff")}getFontSize(){return this.model.getFontSize()}setLanguage(t){t!=="en"&&!Zh(t)?console.warn(`Translation for '${t}' isn't currently available. Using '${this.getLanguage()}' instead.`):this.model.setOption("language",t)}getLanguage(){return this.model.getLanguage()}setRootElement(t){this.rootElt=t}getAriaManager(){if(this.rootElt)return As.getInstance(this.rootElt)}getSettingsMenu(){return this.model.isEnabled("settingsMenu")}openSettingsMenu(){this.model.setSettingsMenuOpen({isOpen:!0})}closeSettingsMenu(){this.model.setSettingsMenuOpen({isOpen:!1})}isSettingsMenuOpen(){return this.model.isSettingsMenuOpen()}isProjectorMode(){return this.model.isEnabled("projectorMode")}getContainerSize(){return this.model.getContainerSize()}isNarrow(){return this.getContainerSize().width<570}isVeryNarrow(){return this.getContainerSize().width<420}isVeryVeryNarrow(){return this.getContainerSize().width<370}shouldShowClear(){return this.model.shouldShowClear()}shouldRender(){let{width:t,height:r}=this.getContainerSize();return t>0&&r>0}alertSizeOfMatrix(t){var a;let r=this.model.getExpressionById(t);if(!r||r.type!=="matrix")return;let n=r.matrix.length,o=n===0?0:r.matrix[0].length;(a=this.getAriaManager())==null||a.alert(this.s("matrix-calculator-narration-new-dimensions",{rows:n,cols:o}))}getStaticMqConfig(){return{language:this.getLanguage()}}getMathquillConfig(){return{autoCommands:Ns({disallowAns:!0}),language:this.getLanguage(),..._s()}}destroy(){var t;(t=this.getAriaManager())==null||t.destroy(),this.rootElt=void 0}};var N0=dT.replace(/\./g,"_"),jY=`dcg-calculator-api-container-${N0}`,_0=`dcg-matrix-api-container-${N0}`;var Tt=class extends K{getLanguage(){return this.controller.getLanguage()}init(){this.controller=this.props.controller(),this.model=this.controller.model,this.dispatch=this.controller.dispatch,this.s=this.controller.s,this.raw=this.controller.raw}};var vi=class extends K{constructor(){super(...arguments);this.controller=this.props.controller()}};var Ul=class extends vi{template(){return u("div",{class:"dcg-keypad-control-bar dcg-do-not-blur",role:"group","aria-label":()=>this.controller.s("shared-calculator-narration-keypad-controlbar"),children:u("div",{class:"dcg-keypad-control-bar-contents",children:this.props.children})})}};var Ia=class extends K{template(){return u("div",{didMount:e=>{this.props.didMount&&this.props.didMount(e)},manageFocus:this.props.manageFocus,class:()=>({"dcg-keypad-control-btn":!0,"dcg-menu-btn":!!this.props.menu(),"dcg-btn-blue":!!this.props.menu(),"dcg-disabled":!!this.props.disabled(),"dcg-selected":!!this.props.disabled()&&this.props.selected(),"dcg-selectable-btn":this.props.disabled()&&this.props.selectable()}),role:"button","aria-disabled":()=>this.props.disabled(),"aria-label":this.props.ariaLabel||this.props.command,"dcg-command":this.props.command,onTap:e=>{this.props.disabled()||this.props.onTap(e)},onKeyDown:e=>{this.props.onKeyDown&&this.props.onKeyDown(e)},"aria-pressed":()=>!this.hasPopup()&&this.props.selectable()&&!this.props.disabled()&&this.props.selected()||void 0,"aria-expanded":()=>this.hasPopup()&&this.props.selectable()&&!this.props.disabled()&&this.props.selected()||void 0,tabIndex:()=>this.props.disabled()||this.props.ignoreInTabOrder()?-1:0,children:this.props.children})}hasPopup(){return this.props.ariaPopup?this.props.ariaPopup():!1}};var Um=class extends K{onTap(t){var n,o,a,i;let r=t.target;r&&r.tagName.toLowerCase()==="a"||(o=(n=this.props).disabled)!=null&&o.call(n)||((i=(a=this.props).stopPropagationOnTap)!=null&&i.call(a)&&t.stopPropagation(),this.props.onChange(!this.props.checked(),t))}onInputMount(t){this.inputElement=t,this.inputElement.addEventListener("invalid",()=>{this.update()})}didUpdate(){if(!this.inputElement)return;let t=!!this.props.checked();this.inputElement.checked!==t&&(this.inputElement.checked=t)}template(){return N("label",{class:()=>{var t,r,n,o,a,i,s;return{"dcg-checkbox":!0,"dcg-checkbox--small":!!((r=(t=this.props).small)!=null&&r.call(t)),"dcg-checked":this.props.checked(),"dcg-disabled":!!((o=(n=this.props).disabled)!=null&&o.call(n)),[(s=(i=(a=this.props).class)==null?void 0:i.call(a))!=null?s:""]:!!this.props.class}},style:()=>{var t,r,n;return(n=(r=(t=this.props).style)==null?void 0:r.call(t))!=null?n:{}},onTap:this.bindFn(this.onTap),children:[u("input",{type:this.const("checkbox"),"aria-label":()=>{var t,r;return(r=(t=this.props).ariaLabel)==null?void 0:r.call(t)},class:()=>{var t,r;return{"dcg-checkbox__box":!0,"dcg-icon-check":!0,"dcg-checked":this.props.checked(),"dcg-disabled":!!((r=(t=this.props).disabled)!=null&&r.call(t))}},checked:()=>{var t,r;return((r=(t=this.props).checked)==null?void 0:r.call(t))||void 0},onChange:this.bindFn(this.update),onMount:this.bindFn(this.onInputMount),disabled:()=>{var t,r;return((r=(t=this.props).disabled)==null?void 0:r.call(t))||void 0},required:()=>{var t,r;return((r=(t=this.props).required)==null?void 0:r.call(t))||void 0},tabIndex:()=>{var t,r,n,o,a;return((a=(r=(t=this.props).tabIndex)==null?void 0:r.call(t))!=null?a:(o=(n=this.props).disabled)!=null&&o.call(n))?-1:0},manageFocus:this.props.manageFocus}),u("span",{class:"dcg-checkbox__content",children:this.props.children})]})}};var zm=class extends K{constructor(){super(...arguments);this.config=this.props.staticConfig();this.btnViews={}}template(){return u("div",{class:()=>({"dcg-segmented-control-container":!0,"dcg-theme-mini":this.getTheme()==="mini","dcg-theme-full-width-mini":this.getTheme()==="full-width-mini","dcg-theme-default":this.getTheme()==="default","dcg-theme-default-blue":this.getTheme()==="default-blue","dcg-theme-vertical":this.getTheme()==="vertical"}),role:()=>{var r,n;return(n=(r=this.props).treatAsMultiSelect)!=null&&n.call(r)?"listbox":"radiogroup"},"aria-multiselectable":()=>{var r,n;return(n=(r=this.props).treatAsMultiSelect)!=null&&n.call(r)?!0:void 0},onKeyDown:this.bindFn(this.handleRadioKeydown),"aria-label":this.props.ariaGroupLabel,children:u(Ye,{each:()=>this.config,children:r=>{let n=r();return u("div",{class:()=>{var o;return{"dcg-segmented-control-btn":!0,"dcg-selected":n.selected(),"dcg-disabled":this.isDisabled()||((o=n.disabled)==null?void 0:o.call(n)),[n.class?n.class():""]:!!n.class}},role:()=>{var o,a;return(a=(o=this.props).treatAsMultiSelect)!=null&&a.call(o)?"option":"radio"},tabIndex:()=>this.getTabIndexForOption(n),"aria-label":()=>this.getAriaLabel(n),style:()=>({"min-width":this.props.minButtonWidth?this.props.minButtonWidth()+"px":void 0}),"aria-checked":()=>{var o,a;return(a=(o=this.props).treatAsMultiSelect)!=null&&a.call(o)?void 0:n.selected()},"aria-selected":()=>{var o,a;return(a=(o=this.props).treatAsMultiSelect)!=null&&a.call(o)?n.selected():void 0},onTap:o=>{var a,i,s,c;this.isDisabled()||(a=n.disabled)!=null&&a.call(n)||(n.onSelect(o.device),(s=(i=this.props).focusOnTap)!=null&&s.call(i)&&((c=this.btnViews[n.key])==null||c.focus()))},didMount:o=>this.btnViews[n.key]=o,manageFocus:()=>{if(n.focusHelperOptions)return Xa(n.focusHelperOptions)},children:u(qr,{tooltip:()=>{var o;return((o=n.tooltip)==null?void 0:o.call(n))||""},gravity:()=>{var o;return((o=n.tooltipGravity)==null?void 0:o.call(n))||"s"},disabled:()=>!(n.tooltip&&n.tooltip()),children:dr(()=>!!n.template,{false:()=>N("div",{class:"dcg-segmented-control-interior",children:[Yr(()=>{var o;return((o=n.icon)==null?void 0:o.call(n))||void 0},o=>u("i",{class:()=>({"dcg-segmented-control__icon":!0,[o()]:!0})})),()=>n.label?n.label():""]}),true:n.template})})})}},r=>r.key)})}getAriaLabel(r){return r.ariaLabel?r.ariaLabel():r.label?r.label():r.tooltip?r.tooltip():""}isDisabled(){var r,n;return!!((n=(r=this.props).disabled)!=null&&n.call(r))}getTheme(){return this.props.theme?this.props.theme():"default"}handleRadioKeydown(r){var x,M,L,T,w;if((M=(x=this.props).onKeydown)==null?void 0:M.call(x,r).handled)return;let o=tt(r);if(!Ds(o,"direction")&&!Ds(o,"line")||!ha(r))return;Jr(r);let a=this.config.findIndex(k=>this.btnViews[k.key]===document.activeElement),i=this.config.length,s=a;o==="Home"&&(s=0),o==="End"&&(s=this.config.length-1),o==="Left"&&(s=(a-1+i)%i),o==="Right"&&(s=(a+1)%i);let c=this.props.numRows?this.props.numRows():1,l=Math.ceil(i/c),p=c===1?1:l;o==="Up"&&(s=(a-p+i)%i),o==="Down"&&(s=(a+p)%i);let y=this.config[s];y&&((L=this.btnViews[y.key])==null||L.focus(),!((w=(T=this.props).treatAsMultiSelect)!=null&&w.call(T))&&y.onSelect("keyboard"))}getTabIndexForOption(r){if(this.isDisabled())return-1;let n=r.key===this.config[0].key,o=this.config.find(a=>a.selected());return r.key===(o==null?void 0:o.key)||n&&!o?0:-1}};var Hm=class extends Tt{setDropdownOpen(t){t?this.controller.dispatch({type:"open-settings-menu"}):(this.controller.dispatch({type:"close-settings-menu"}),this.controller.dispatch({type:"focus-last-expression"}))}template(){return u(fa,{openState:()=>({isOpen:this.controller.isSettingsMenuOpen(),setDropdownOpen:t=>this.setDropdownOpen(t)}),boundingParentSelector:this.const(".dcg-matrix-container"),containerClassMap:this.const({"dcg-matrix-settings-container":!0}),anchorAriaLabel:()=>this.controller.s("matrix-calculator-button-settings"),anchorClassMap:()=>({"dcg-matrix-settings-button":!0,"dcg-keypad-control-btn":!0}),anchor:()=>u("i",{class:"dcg-icon-wrench","aria-hidden":"true"}),focusDestinationOnOpen:this.const({type:"anchor"}),orientation:()=>this.controller.getContainerSize().height<=420?"left":"top-left",popoverClassMap:()=>({"dcg-matrix-settings-dropdown":!0,"dcg-has-background-color":this.controller.hasBackgroundColor()}),width:this.const(240),popoverBody:()=>N(Dr,{children:[u("div",{class:()=>({"dcg-settings-menu-option":!0,"dcg-displaysize-container":!0}),children:u(zm,{ariaGroupLabel:()=>this.controller.s("shared-calculator-narration-settings-display-size"),staticConfig:this.bindFn(this.getProjectorModeOptions)})}),u(Um,{onChange:this.bindFn(this.onToggleInvertedColors),checked:()=>this.controller.getInvertedColors(),class:this.const("dcg-settings-menu-option dcg-do-not-blur dcg-reverse-contrast"),children:u("span",{class:"dcg-checkbox-label",children:()=>this.controller.s("shared-calculator-button-reverse-contrast")})}),u(J,{predicate:()=>!!this.getVersionNumber(),children:()=>N("div",{class:"dcg-version-number",children:["Version: ",()=>this.getVersionNumber()]})})]})})}getProjectorModeOptions(){return[{key:"default",label:()=>"A",ariaLabel:()=>this.controller.s("shared-calculator-narration-settings-display-size-default"),class:()=>"dcg-displaysize-default",selected:()=>!this.controller.isProjectorMode(),onSelect:()=>this.onSelectProjectorModeOption(!1)},{key:"large",label:()=>"A",ariaLabel:()=>this.controller.s("shared-calculator-narration-settings-display-size-large"),class:()=>"dcg-displaysize-large",selected:()=>this.controller.isProjectorMode(),onSelect:()=>this.onSelectProjectorModeOption(!0)}]}onSelectProjectorModeOption(t){this.controller.dispatch({type:"update-projector-mode",mode:t})}getVersionNumber(){let t=window;if(t&&t.AppBridge)return t.AppBridge.versionNumber}onToggleInvertedColors(){this.controller.dispatch({type:"update-inverted-colors",invertedColors:!this.controller.getInvertedColors()})}};var Km=class extends Tt{template(){return N(Ul,{controller:this.props.controller,children:[u(Ia,{menu:()=>!0,disabled:()=>!this.model.hasUnusedMatrixVariables(),selected:()=>!1,selectable:()=>!1,ignoreInTabOrder:()=>!1,command:()=>"add-matrix",ariaLabel:()=>this.controller.s("matrix-calculator-button-new"),onTap:()=>{this.model.hasUnusedMatrixVariables()&&this.dispatch({type:"add-new-matrix"})},onKeyDown:e=>{e.key==="Tab"&&e.shiftKey&&this.dispatch({type:"tab-backward-from-control-bar",evt:e})},manageFocus:this.const(Xa({controller:this.controller,location:{type:"add-matrix-button"}})),children:u("span",{children:()=>this.controller.s("matrix-calculator-button-new")})}),u(Ia,{menu:()=>!1,disabled:()=>!this.controller.canUndo(),selected:()=>!1,selectable:()=>!1,ignoreInTabOrder:()=>!1,command:()=>"undo",ariaLabel:()=>this.controller.s("shared-calculator-narration-undo"),onTap:()=>this.dispatch({type:"undo"}),children:u("i",{class:"dcg-icon-undo","aria-hidden":"true"})}),u(Ia,{menu:()=>!1,disabled:()=>!this.controller.canRedo(),selected:()=>!1,selectable:()=>!1,ignoreInTabOrder:()=>!1,command:()=>"redo",ariaLabel:()=>this.controller.s("shared-calculator-narration-redo"),onTap:()=>this.dispatch({type:"redo"}),children:u("i",{class:"dcg-icon-redo","aria-hidden":"true"})}),u(J,{predicate:()=>this.controller.shouldShowClear(),children:()=>u(Ia,{menu:()=>!1,disabled:()=>!1,selected:()=>!1,selectable:()=>!1,ignoreInTabOrder:()=>!1,command:()=>"clear",ariaLabel:()=>this.controller.s("shared-calculator-button-clear"),onTap:()=>this.dispatch({type:"clear-focused-expression"}),children:()=>this.controller.s("shared-calculator-button-clear")})}),u(J,{predicate:()=>!this.controller.shouldShowClear(),children:()=>u(Ia,{menu:()=>!1,disabled:()=>!this.model.canClear(),selected:()=>!1,selectable:()=>!1,ignoreInTabOrder:()=>!1,command:()=>"clear-all",ariaLabel:()=>this.controller.s("shared-calculator-button-clear-all"),onTap:()=>this.dispatch({type:"clear-all"}),children:()=>this.controller.s("shared-calculator-button-clear-all")})}),u(J,{predicate:()=>this.props.controller().getSettingsMenu(),children:()=>u(Hm,{controller:this.props.controller})})]})}};var nF=(function(){"use strict";function e(T,w){let k=(T&65535)+(w&65535);return(T>>16)+(w>>16)+(k>>16)<<16|k&65535}function t(T,w){return T<<w|T>>>32-w}function r(T,w,k,V,j,te){return e(t(e(e(w,T),e(V,te)),j),k)}function n(T,w,k,V,j,te,Te){return r(w&k|~w&V,T,w,j,te,Te)}function o(T,w,k,V,j,te,Te){return r(w&V|k&~V,T,w,j,te,Te)}function a(T,w,k,V,j,te,Te){return r(w^k^V,T,w,j,te,Te)}function i(T,w,k,V,j,te,Te){return r(k^(w|~V),T,w,j,te,Te)}function s(T,w){T[w>>5]|=128<<w%32,T[(w+64>>>9<<4)+14]=w;let k,V,j,te,Te,P=1732584193,D=-271733879,B=-1732584194,I=271733878;for(k=0;k<T.length;k+=16)V=P,j=D,te=B,Te=I,P=n(P,D,B,I,T[k],7,-680876936),I=n(I,P,D,B,T[k+1],12,-389564586),B=n(B,I,P,D,T[k+2],17,606105819),D=n(D,B,I,P,T[k+3],22,-1044525330),P=n(P,D,B,I,T[k+4],7,-176418897),I=n(I,P,D,B,T[k+5],12,1200080426),B=n(B,I,P,D,T[k+6],17,-1473231341),D=n(D,B,I,P,T[k+7],22,-45705983),P=n(P,D,B,I,T[k+8],7,1770035416),I=n(I,P,D,B,T[k+9],12,-1958414417),B=n(B,I,P,D,T[k+10],17,-42063),D=n(D,B,I,P,T[k+11],22,-1990404162),P=n(P,D,B,I,T[k+12],7,1804603682),I=n(I,P,D,B,T[k+13],12,-40341101),B=n(B,I,P,D,T[k+14],17,-1502002290),D=n(D,B,I,P,T[k+15],22,1236535329),P=o(P,D,B,I,T[k+1],5,-165796510),I=o(I,P,D,B,T[k+6],9,-1069501632),B=o(B,I,P,D,T[k+11],14,643717713),D=o(D,B,I,P,T[k],20,-373897302),P=o(P,D,B,I,T[k+5],5,-701558691),I=o(I,P,D,B,T[k+10],9,38016083),B=o(B,I,P,D,T[k+15],14,-660478335),D=o(D,B,I,P,T[k+4],20,-405537848),P=o(P,D,B,I,T[k+9],5,568446438),I=o(I,P,D,B,T[k+14],9,-1019803690),B=o(B,I,P,D,T[k+3],14,-187363961),D=o(D,B,I,P,T[k+8],20,1163531501),P=o(P,D,B,I,T[k+13],5,-1444681467),I=o(I,P,D,B,T[k+2],9,-51403784),B=o(B,I,P,D,T[k+7],14,1735328473),D=o(D,B,I,P,T[k+12],20,-1926607734),P=a(P,D,B,I,T[k+5],4,-378558),I=a(I,P,D,B,T[k+8],11,-2022574463),B=a(B,I,P,D,T[k+11],16,1839030562),D=a(D,B,I,P,T[k+14],23,-35309556),P=a(P,D,B,I,T[k+1],4,-1530992060),I=a(I,P,D,B,T[k+4],11,1272893353),B=a(B,I,P,D,T[k+7],16,-155497632),D=a(D,B,I,P,T[k+10],23,-1094730640),P=a(P,D,B,I,T[k+13],4,681279174),I=a(I,P,D,B,T[k],11,-358537222),B=a(B,I,P,D,T[k+3],16,-722521979),D=a(D,B,I,P,T[k+6],23,76029189),P=a(P,D,B,I,T[k+9],4,-640364487),I=a(I,P,D,B,T[k+12],11,-421815835),B=a(B,I,P,D,T[k+15],16,530742520),D=a(D,B,I,P,T[k+2],23,-995338651),P=i(P,D,B,I,T[k],6,-198630844),I=i(I,P,D,B,T[k+7],10,1126891415),B=i(B,I,P,D,T[k+14],15,-1416354905),D=i(D,B,I,P,T[k+5],21,-57434055),P=i(P,D,B,I,T[k+12],6,1700485571),I=i(I,P,D,B,T[k+3],10,-1894986606),B=i(B,I,P,D,T[k+10],15,-1051523),D=i(D,B,I,P,T[k+1],21,-2054922799),P=i(P,D,B,I,T[k+8],6,1873313359),I=i(I,P,D,B,T[k+15],10,-30611744),B=i(B,I,P,D,T[k+6],15,-1560198380),D=i(D,B,I,P,T[k+13],21,1309151649),P=i(P,D,B,I,T[k+4],6,-145523070),I=i(I,P,D,B,T[k+11],10,-1120210379),B=i(B,I,P,D,T[k+2],15,718787259),D=i(D,B,I,P,T[k+9],21,-343485551),P=e(P,V),D=e(D,j),B=e(B,te),I=e(I,Te);return[P,D,B,I]}function c(T){let w,k="",V=T.length*32;for(w=0;w<V;w+=8)k+=String.fromCharCode(T[w>>5]>>>w%32&255);return k}function l(T){let w,k=[];for(k[(T.length>>2)-1]=void 0,w=0;w<k.length;w+=1)k[w]=0;let V=T.length*8;for(w=0;w<V;w+=8)k[w>>5]|=(T.charCodeAt(w/8)&255)<<w%32;return k}function p(T){return c(s(l(T),T.length*8))}function y(T){let w="0123456789abcdef",k="",V,j;for(j=0;j<T.length;j+=1)V=T.charCodeAt(j),k+=w.charAt(V>>>4&15)+w.charAt(V&15);return k}function x(T){return unescape(encodeURIComponent(T))}function M(T){return p(x(T))}function L(T){return y(M(T))}return L})();function Wm(e,t,r=1){if(e===t)return!0;if(!isFinite(e)||!isFinite(t))return!1;if(r>50)throw new Error("Within "+(52-r)+" bits isn't really approximate any more");let n=Math.max(Math.max(Math.abs(e),Math.abs(t)),1),o=r===1?.5:Math.pow(.5,r);return n===n+o*Math.abs(t-e)}function wi(e,t=1e6){if(e===1/0)return{n:1/0,d:1};if(e===-1/0)return{n:-1/0,d:1};if(!isFinite(e))return{n:NaN,d:1};let r,n=0,o=1,a=1,i=0,s,c;for(;r=Math.floor(e),s=r*o+n,c=r*i+a,!(c>t||(n=o,a=i,o=s,i=c,e===r));)e=1/(e-r);return{n:o,d:i}}function oc(e,t){if(!isFinite(e)||!isFinite(t))return NaN;if(e=Math.round(e),t=Math.round(t),e<0&&(e=-e),t<0&&(t=-t),t>e){let n=t;t=e,e=n}if(t===0)return e;let r=e%t;for(;r>0;)e=t,t=r,r=e%t;return t}function ac(e,t){if(isNaN(e)&&t===0)return NaN;if(e>=0||t===Math.floor(t))return Math.pow(e,t);let r=wi(t,100);return Wm(r.n/r.d,t,2)&&r.d%2===1?(r.n%2===0?1:-1)*Math.pow(-e,t):NaN}function Uy(e,t){return{n:e,d:t,__float:e/t}}function St(e){return typeof e=="object"&&typeof e.n=="number"&&typeof e.d=="number"}var zl=Math.pow(2,53)-1;function Hl(e){let t=e.match(/^(-)?(\d*)?(?:\.(\d*))?$/);if(!t)return NaN;let r=t[1],n=t[2],o=t[3];if(!n&&!o)return NaN;let a=!!r;if(o){let i=o.replace(/0+$/,""),s=i.length,c=Math.pow(10,s),l=parseInt(n||"0",10)*c+parseInt(i||"0",10);return l>zl||c>zl?parseFloat(e):Le(a?-l:l,c)}else{let i=parseInt(n,10);return i>zl?parseFloat(e):Le(a?-i:i,1)}}function we(e){return St(e)?e.__float:+e}function Le(e,t){if(!isFinite(e)||!isFinite(t)||t===0||Math.floor(e)!==e||Math.floor(t)!==t||Math.abs(e)>zl||Math.abs(t)>zl)return e/t;t<0&&(e=-e,t=-t);let r=oc(e,t);return Uy(e/r,t/r)}function Xn(e){return St(e)?Uy(-e.n,e.d):-e}function L0(e){return St(e)?e.n===0?e.d/e.n:Uy(e.n<0?-e.d:e.d,Math.abs(e.n)):1/e}function Ln(e,t){if(!St(e)||!St(t))return we(e)+we(t);let r=oc(e.d,t.d);return Le(e.n*(t.d/r)+t.n*(e.d/r),e.d/r*t.d)}function Rn(e,t){if(!St(e)||!St(t))return we(e)*we(t);let r=oc(e.n,t.d),n=oc(t.n,e.d);return Le(e.n/r*(t.n/n),e.d/n*(t.d/r))}function Aa(e,t){return Ln(e,Xn(t))}function Zn(e,t){return!St(e)||!St(t)?we(e)/we(t):Rn(e,L0(t))}function sF(e,t){let r=e,n=t;if(t.n<0&&(n=Xn(t),r=L0(e)),!St(r)||!St(n))return ac(we(e),we(t));if(e=r,t=n,t.d===1)return Le(Math.pow(e.n,t.n),Math.pow(e.d,t.n));let o=e.n<0;if(o&&t.d%2!==1)return NaN;let i=(o?-1:1)*Math.round(Math.pow(Math.abs(e.n),1/t.d)),s=Math.round(Math.pow(Math.abs(e.d),1/t.d));return Math.pow(i,t.d)!==e.n||Math.pow(s,t.d)!==e.d?ac(we(e),we(t)):Le(Math.pow(i,t.n),Math.pow(s,t.n))}function R0(e,t){if(!St(e)||!St(t))return ac(we(e),we(t));let r=sF(e,t);return St(r)?r:ac(we(e),we(t))}function D0(e){if(!St(e))return Math.sqrt(e);let t=Math.round(Math.sqrt(e.n)),r=Math.round(Math.sqrt(e.d));return t*t!==e.n||r*r!==e.d?Math.sqrt(we(e)):Le(t,r)}var cF=()=>({type:"empty"}),q0=()=>lF([-1/0,1/0]);var lF=e=>uF(e,!1),uF=(e,t)=>isNaN(e[0])||isNaN(e[1])||e[1]<e[0]?cF():{type:"interval",bounds:e,tight:t};function O0(e,t){return e===vo&&Rt(t)||t===er&&Rt(e)||t===Ir&&!Rt(e)?!0:e===t}function jm(e,t){if(e===void 0)return!1;if(O0(e,t))return!0;Rt(e)&&Rt(t)&&t!==vo&&(e=Pa(e),t=Pa(t));let r=t;switch(e){case We:case Fe:case xn:case h:case _:case le:return r===h||r===_;default:return!1}}function F0(e,t){return t===h&&e===_||t===ne&&e===mr?!1:jm(e,t)}function S(e,t){return{key:e,vars:t}}var Ir=0,h=1,Gr=2,$=3,Ar=4,Xo=5,er=6,ne=7,Si=8,Dn=9,Na=10,vo=11,Qm=12,Mt=13,Pr=14,ic=15,ze=16,Kl=17,Xe=18,Mi=19,$e=20,Wl=21,Oe=22,jl=23,Re=24,Ql=25,rt=26,Yl=27,We=28,ki=29,Fe=30,Ei=31,Ce=32,Xl=33,nt=34,Zl=35,xn=36,Jl=37,_=38,mr=39,wo=40,Ci=41,le=42,Jn=43,To=50,eu=51,vn=52,sc=53,Ur=60,tu=61,Kt=62,ru=63,Wt=64,nu=65,tr=66,ou=67,rr=68,au=69,nr=70,iu=71,or=72,su=73,jt=76,cu=77,eo=78,lu=79,to=80,uu=81,nn=82,du=83,zr=84,pu=85,fe=100,_a=101,gr=102,mu=103,So=104,gu=105,Mo=106,hu=107,ar=108,fu=109,Ii=200,Ai=201,cc=202,lc=203,yu=204,bu=205,xu=206,vu=207,Pi=208,uc=209,wu=210,Tu=211,pF={Any:Ir,Number:h,Bool:Gr,Complex:_,ListOfComplex:mr,Point:$,Point3D:fe,Distribution:Ar,Action:Xo,ListOfAny:er,ListOfNumber:ne,ListOfBool:Si,ListOfPoint:Dn,ListOfPoint3D:_a,ListOfDistribution:Na,EmptyList:vo,ErrorType:Qm,SeedType:Mt,RGBColor:Pr,ListOfColor:ic,Polygon:ze,ListOfPolygon:Kl,TrapezoidDescriptor:wo,ListOfTrapezoidDescriptor:Ci,Matrix:le,ListOfMatrix:Jn,Segment:Xe,ListOfSegment:Mi,Circle:$e,ListOfCircle:Wl,Arc:Oe,ListOfArc:jl,Line:Re,ListOfLine:Ql,Ray:rt,ListOfRay:Yl,Vector:nt,ListOfVector:Zl,Restriction:xn,ListOfRestriction:Jl,AngleMarker:We,ListOfAngleMarker:ki,DirectedAngleMarker:Fe,ListOfDirectedAngleMarker:Ei,Transformation:Ce,ListOfTransformation:Xl,Segment3D:gr,ListOfSegment3D:mu,Triangle3D:So,ListOfTriangle3D:gu,Sphere3D:Mo,ListOfSphere3D:hu,Vector3D:ar,ListOfVector3D:fu,Tone:To,ListOfTone:eu,StringType:vn,ListOfString:sc,ConfidenceInterval:Ur,ListOfConfidenceInterval:tu,OneSampleTInference:Kt,ListOfOneSampleTInference:ru,TwoSampleTInference:Wt,ListOfTwoSampleTInference:nu,RegressionTInference:jt,ListOfRegressionTInference:cu,OneSampleZInference:tr,ListOfOneSampleZInference:ou,TwoSampleZInference:rr,ListOfTwoSampleZInference:au,OneProportionZInference:nr,ListOfOneProportionZInference:iu,TwoProportionZInference:or,ListOfTwoProportionZInference:su,ChiSquareGoodnessOfFit:eo,ListOfChiSquareGoodnessOfFit:lu,ChiSquareIndependence:to,ListOfChiSquareIndependence:uu,ZSignificanceTest:nn,ListOfZSignificanceTest:du,TSignificanceTest:zr,ListOfTSignificanceTest:pu,MapIntervalPoint:Ii,MapIntervalComplex:Pi,MapIntervalPoint3D:Ai,MapInterval2DPoint:cc,MapInterval2DComplex:uc,MapInterval2DPoint3D:lc,ListOfMapIntervalPoint:yu,ListOfMapIntervalComplex:wu,ListOfMapIntervalPoint3D:bu,ListOfMapInterval2DPoint:xu,ListOfMapInterval2DComplex:Tu,ListOfMapInterval2DPoint3D:vu},V0={[$]:[["x",h],["y",h]],[fe]:[["x",h],["y",h],["z",h]],[_]:[["real",h],["imag",h]],[Ur]:[["min",h],["max",h],["standardError",h],["dof",h]],[Kt]:[["count",h],["mean",h],["stdev",h],["dof",h]],[Wt]:[["count1",h],["mean1",h],["stdev1",h],["count2",h],["mean2",h],["stdev2",h],["dof",h]],[jt]:[["pointEstimate",h],["standardError",h],["dof",h]],[tr]:[["count",h],["mean",h],["stdevp",h]],[rr]:[["count1",h],["mean1",h],["stdevp1",h],["count2",h],["mean2",h],["stdevp2",h]],[nr]:[["successes",h],["count",h]],[or]:[["successes1",h],["count1",h],["successes2",h],["count2",h]],[nn]:[["p",h],["score",h],["hypothesis",h],["pleft",h],["pright",h]],[zr]:[["p",h],["score",h],["hypothesis",h],["pleft",h],["pright",h],["dof",h]],[eo]:[["p",h],["score",h],["dof",h],["observed",ne],["expected",ne],["contributions",ne],["total",h]],[to]:[["p",h],["score",h],["dof",h],["observed",ne],["expected",ne],["contributions",ne],["rows",h],["columns",h],["rowTotals",ne],["columnTotals",ne],["total",h]],[wo]:[["l0",h],["l1",h],["r0",h],["r1",h],["b0",h],["b1",h],["b2",h],["b3",h],["t0",h],["t1",h],["t2",h],["t3",h]]};function mF(){let e={};for(let[t,r]of Object.entries(V0))e[t]=r.map(n=>n[1]);return e}function gF(){let e={};for(let[t,r]of Object.entries(V0))e[t]=r.map(n=>n[0]);return e}var hF=mF(),iZ=gF();var Dt=class e{constructor(t,{coerceComplexToReal:r}){this.types=t,this.coerceComplexToReal=r}static of(t,r={coerceComplexToReal:!0}){return new e(t,r)}getTypes(){return this.types}},sZ=Object.values(pF),fF=Object.keys(hF).map(parseFloat),cZ=Dt.of(fF);function Ni(e){if(Rt(e))return e===vo?"EmptyList":`ListOf${Ni(Pa(e))}`;switch(e){case Ir:return"Any";case h:return"Number";case Gr:return"Bool";case _:return"Complex";case $:return"Point";case fe:return"Point3D";case Ar:return"Distribution";case Ur:return"ConfidenceInterval";case Kt:return"OneSampleTInference";case Wt:return"TwoSampleTInference";case jt:return"RegressionTInference";case tr:return"OneSampleZInference";case rr:return"TwoSampleZInference";case nr:return"OneProportionZInference";case or:return"TwoProportionZInference";case nn:return"ZSignificanceTest";case zr:return"TSignificanceTest";case eo:return"ChiSquareGoodnessOfFit";case to:return"ChiSquareIndependence";case Xo:return"Action";case Qm:return"ErrorType";case Mt:return"SeedType";case Pr:return"RGBColor";case ze:return"Polygon";case wo:return"TrapezoidDescriptor";case le:return"Matrix";case Xe:return"Segment";case $e:return"Circle";case Oe:return"Arc";case Re:return"Line";case rt:return"Ray";case nt:return"Vector";case xn:return"Restriction";case We:return"Angle";case Fe:return"DirectedAngle";case Ce:return"Transformation";case gr:return"Segment3D";case ar:return"Vector3D";case So:return"Triangle3D";case Mo:return"Sphere3D";case To:return"Tone";case vn:return"String";case Ii:return"MapIntervalPoint";case Pi:return"MapIntervalComplex";case Ai:return"MapIntervalPoint3D";case cc:return"MapInterval2ToPoint";case uc:return"MapInterval2ToComplex";case lc:return"MapInterval2DPoint3D";default:let t=e;throw new Error(`Invalid type: ${t}`)}}function dc(e,t){var n;let r=(n=t==null?void 0:t.specifyPointDimensions)!=null?n:!1;switch(e){case Ir:return S("shared-calculator-label-value-type-any");case h:return S("shared-calculator-label-value-type-number");case Gr:return S("shared-calculator-label-value-type-bool");case _:return S("shared-calculator-label-value-type-complex");case $:return r?S("shared-calculator-label-value-type-point2d"):S("shared-calculator-label-value-type-point");case fe:return S("shared-calculator-label-value-type-point3d");case Ar:return S("shared-calculator-label-value-type-distribution");case Xo:return S("shared-calculator-label-value-type-action");case er:return S("shared-calculator-label-value-type-list-of-any");case ne:return S("shared-calculator-label-value-type-list-of-numbers");case Si:return S("shared-calculator-label-value-type-list-of-bool");case mr:return S("shared-calculator-label-value-type-list-of-complex");case Dn:return r?S("shared-calculator-label-value-type-list-of-2d-points"):S("shared-calculator-label-value-type-list-of-points");case _a:return S("shared-calculator-label-value-type-list-of-3d-points");case Na:return S("shared-calculator-label-value-type-list-of-distributions");case vo:return S("shared-calculator-label-value-type-empty-list");case Qm:return S("shared-calculator-label-value-type-error");case Mt:return S("shared-calculator-label-value-type-seed");case Pr:return S("shared-calculator-label-value-type-color");case ic:return S("shared-calculator-label-value-type-list-of-colors");case ze:return S("shared-calculator-label-value-type-polygon");case Kl:return S("shared-calculator-label-value-type-list-of-polygons");case wo:return S("shared-calculator-label-value-type-any");case Ci:return S("shared-calculator-label-value-type-list-of-any");case le:return S("shared-calculator-label-value-type-matrix");case Jn:return S("shared-calculator-label-value-type-list-of-matrices");case Xe:return S("shared-calculator-label-value-type-segment");case Mi:return S("shared-calculator-label-value-type-list-of-segments");case $e:return S("shared-calculator-label-value-type-circle");case Wl:return S("shared-calculator-label-value-type-list-of-circles");case Oe:return S("shared-calculator-label-value-type-arc");case jl:return S("shared-calculator-label-value-type-list-of-arcs");case Re:return S("shared-calculator-label-value-type-line");case Ql:return S("shared-calculator-label-value-type-list-of-lines");case rt:return S("shared-calculator-label-value-type-ray");case Yl:return S("shared-calculator-label-value-type-list-of-rays");case nt:return S("shared-calculator-label-value-type-vector");case Zl:return S("shared-calculator-label-value-type-list-of-vectors");case xn:return S("shared-calculator-label-value-type-restriction");case Jl:return S("shared-calculator-label-value-type-list-of-restrictions");case We:return S("shared-calculator-label-value-type-angle");case ki:return S("shared-calculator-label-value-type-list-of-angles");case Fe:return S("shared-calculator-label-value-type-directed-angle");case Ei:return S("shared-calculator-label-value-type-list-of-directed-angles");case Ce:return S("shared-calculator-label-value-type-transformation");case Xl:return S("shared-calculator-label-value-type-list-of-transformations");case gr:return S("shared-calculator-label-value-type-segment3d");case mu:return S("shared-calculator-label-value-type-list-of-segment3d");case ar:return S("shared-calculator-label-value-type-vector3d");case fu:return S("shared-calculator-label-value-type-list-of-vector3d");case So:return S("shared-calculator-label-value-type-triangle3d");case gu:return S("shared-calculator-label-value-type-list-of-triangle3d");case Mo:return S("shared-calculator-label-value-type-sphere3d");case hu:return S("shared-calculator-label-value-type-list-of-sphere3d");case To:return S("shared-calculator-label-value-type-tone");case eu:return S("shared-calculator-label-value-type-list-of-tone");case vn:return S("shared-calculator-label-value-type-string");case sc:return S("shared-calculator-label-value-type-list-of-string");case Ur:return S("shared-calculator-label-value-type-confidence-interval");case tu:return S("shared-calculator-label-value-type-list-of-confidence-interval");case nn:return S("shared-calculator-label-value-type-z-significance-test");case zr:return S("shared-calculator-label-value-type-t-significance-test");case du:return S("shared-calculator-label-value-type-list-of-z-significance-test");case pu:return S("shared-calculator-label-value-type-list-of-t-significance-test");case Kt:return S("shared-calculator-label-value-type-one-sample-t-inference");case Wt:return S("shared-calculator-label-value-type-two-sample-t-inference");case jt:return S("shared-calculator-label-value-type-regression-t-inference");case tr:return S("shared-calculator-label-value-type-one-sample-z-inference");case rr:return S("shared-calculator-label-value-type-two-sample-z-inference");case nr:return S("shared-calculator-label-value-type-one-proportion-z-inference");case or:return S("shared-calculator-label-value-type-two-proportion-z-inference");case ru:return S("shared-calculator-label-value-type-list-of-one-sample-t-inference");case nu:return S("shared-calculator-label-value-type-list-of-two-sample-t-inference");case cu:return S("shared-calculator-label-value-type-list-of-regression-t-inference");case ou:return S("shared-calculator-label-value-type-list-of-one-sample-z-inference");case au:return S("shared-calculator-label-value-type-list-of-two-sample-z-inference");case iu:return S("shared-calculator-label-value-type-list-of-one-proportion-z-inference");case su:return S("shared-calculator-label-value-type-list-of-two-proportion-z-inference");case to:return S("shared-calculator-label-value-type-chi-square-test-of-independence");case eo:return S("shared-calculator-label-value-type-chi-square-goodness-of-fit");case uu:return S("shared-calculator-label-value-type-list-of-chi-square-test-of-independence");case lu:return S("shared-calculator-label-value-type-list-of-chi-square-goodness-of-fit");case Ii:case cc:return S("shared-calculator-label-value-type-lambda-point");case Pi:case uc:return S("shared-calculator-label-value-type-lambda-complex");case Ai:case lc:return S("shared-calculator-label-value-type-lambda-point3d");case yu:case xu:return S("shared-calculator-label-value-type-list-of-lambda-point");case wu:case Tu:return S("shared-calculator-label-value-type-list-of-lambda-complex");case bu:case vu:return S("shared-calculator-label-value-type-list-of-lambda-point3d");default:throw new Error(`Invalid type: ${e}`)}}var yF=[er,ne,Si,mr,Jl,Dn,_a,Na,vo,ic,Kl,Ci,Jn,Mi,Wl,jl,Ql,Yl,Zl,ki,Ei,Xl,mu,fu,gu,hu,eu,sc,tu,ru,nu,cu,ou,au,iu,su,du,pu,lu,uu,yu,wu,bu,xu,Tu,vu],Zo=Dt.of(yF,{coerceComplexToReal:!1}),Hy={[er]:Ir,[vo]:h,[ne]:h,[Si]:Gr,[mr]:_,[Jl]:xn,[Dn]:$,[_a]:fe,[Na]:Ar,[ic]:Pr,[Kl]:ze,[Ci]:wo,[Jn]:le,[Mi]:Xe,[Wl]:$e,[jl]:Oe,[Ql]:Re,[Yl]:rt,[Zl]:nt,[ki]:We,[Ei]:Fe,[Xl]:Ce,[mu]:gr,[fu]:ar,[gu]:So,[hu]:Mo,[eu]:To,[sc]:vn,[tu]:Ur,[ru]:Kt,[nu]:Wt,[cu]:jt,[ou]:tr,[au]:rr,[iu]:nr,[su]:or,[du]:nn,[pu]:zr,[lu]:eo,[uu]:to,[yu]:Ii,[wu]:Pi,[bu]:Ai,[xu]:cc,[Tu]:uc,[vu]:lc},$0=Dt.of(Object.values(Hy),{coerceComplexToReal:!1});function Rt(e){return e===void 0?!1:e in Hy}function Pa(e){if(!Rt(e))throw new Error("Type "+Ni(e)+" does not implement elementType.");return Hy[e]}function Yo(e){if(!Ti(e))throw new Error("Type "+Ni(e)+" does not implement listType.");switch(e){case Ir:return er;case h:return ne;case Gr:return Si;case _:return mr;case xn:return Jl;case $:return Dn;case fe:return _a;case Ar:return Na;case Pr:return ic;case ze:return Kl;case wo:return Ci;case le:return Jn;case Xe:return Mi;case $e:return Wl;case Oe:return jl;case Re:return Ql;case rt:return Yl;case nt:return Zl;case We:return ki;case Fe:return Ei;case Ce:return Xl;case gr:return mu;case ar:return fu;case So:return gu;case Mo:return hu;case To:return eu;case vn:return sc;case Ur:return tu;case Kt:return ru;case Wt:return nu;case jt:return cu;case tr:return ou;case rr:return au;case nr:return iu;case or:return su;case nn:return du;case zr:return pu;case eo:return lu;case to:return uu;case Ii:return yu;case Pi:return wu;case Ai:return bu;case cc:return xu;case uc:return Tu;case lc:return vu;default:throw new Error(`Invalid type: ${e}`)}}function Ti(e){if(Rt(e))return!1;switch(e){case Mt:case Xo:case Qm:return!1;default:return!0}}var lZ=Dt.of([Re,rt,Xe,nt]),uZ=Dt.of([nt,ar]),G0=Dt.of([We,Fe]);var dZ={[$]:Ii,[_]:Pi,[fe]:Ai},pZ={[$]:cc,[_]:uc,[fe]:lc};function z0(e){return typeof e=="object"&&e.type==="variadic"}var Ky=class{constructor(t,r){this.argTypes=t,this.productContext=r,this.minArity=this.argTypes.length,this.maxArity=this.argTypes.length}argTypeAtIndex(t){if(!(t>this.argTypes.length-1))return this.argTypes[t]}matches(t){return H0(this,t)}satisfiesPolicy(t){return t.is3dProduct()?this.productContext["3d"]:t.isGeometryEnabled()?this.productContext.geometry:this.productContext.graphing}},Wy=class{constructor(t,r){this.maxArity=void 0;this.productContext=r,this.initial=t.initial,this.rest=t.rest,this.minArity=this.initial.length}argTypeAtIndex(t){return t<this.initial.length?this.initial[t]:this.rest}matches(t){return H0(this,t)}satisfiesPolicy(t){return t.is3dProduct()?this.productContext["3d"]:t.isGeometryEnabled()?this.productContext.geometry:this.productContext.graphing}};function H0(e,t){return e.maxArity!==void 0&&e.maxArity<t.length?!1:!!t.every((r,n)=>{if(r===void 0)return!0;let o=e.argTypeAtIndex(n);return o===void 0?!1:bF(r,o)})}var Ym=class{constructor(t){this.coerceComplexToReal=!1;this.arg=t}getTypes(){return typeof this.arg=="number"?[this.arg]:this.arg.getTypes()}},Pe=new Ym(h),Yy=new Ym(ne),jy=class{constructor(t){typeof t=="number"?(this.coerceComplexToReal=t===h,this.nodeTypes=[Yo(t)]):(this.coerceComplexToReal=t.coerceComplexToReal,this.nodeTypes=t.getTypes().map(Yo))}getTypes(){return this.nodeTypes}};function Xm(e){return new jy(e)}var Qy=class{constructor(t){if(typeof t=="number")this.coerceComplexToReal=t===h,this.nodeTypes=[t,Yo(t)];else{this.coerceComplexToReal=t.coerceComplexToReal,this.nodeTypes=[];for(let r of t.getTypes())this.nodeTypes.push(r,Yo(r))}}getTypes(){return this.nodeTypes}};function Jo(e){return new Qy(e)}function hr(e,t={}){let r={geometry:!0,"3d":!0,graphing:!0,...t};return z0(e)?new Wy(e,r):new Ky(e,r)}function O(e,t={}){return z0(e)?hr({type:"variadic",initial:e.initial.map(Jo),rest:Jo(e.rest)},t):hr(e.map(Jo),t)}function bF(e,t){if(typeof t=="number")return jm(e,t);{let r=t.getTypes();return t.coerceComplexToReal?r.some(n=>jm(e,n)):r.some(n=>F0(e,n))}}var st=class{constructor(){this.tableFrameID=void 0;this.clearDependencies(),this._exports=[],this.metaData={extraDepNodes:[]},this.userData={}}clearDependencies(){this._dependencies=[],this._optionalDependencies=[],this._scope={definitions:[],dependencies:[],substitutionDependencies:[],scopes:[]},this._updateSymbols=[]}setInputSpan(t){this._inputSpan=t}getInputString(){return this._inputSpan===void 0?"":Ut(this._inputSpan)}getInputSpan(){return this._inputSpan}shouldExportAns(){return!1}getAnsVariable(){return this.shouldExportAns()&&this.userData&&this.userData.hasOwnProperty("index")?["ans_"+this.userData.index]:[]}addDependency(t){this._dependencies.indexOf(t)===-1&&this._dependencies.push(t),this._scope.dependencies.indexOf(t)===-1&&this._scope.dependencies.push(t)}addDependencies(t){for(let r=0;r<t.length;r++)this.addDependency(t[r])}addOptionalDependencies(t){for(let r=0;r<t.length;r++){let n=t[r];this._dependencies.indexOf(n)===-1&&this._dependencies.push(n),this._optionalDependencies.indexOf(n)===-1&&this._optionalDependencies.push(n)}}addUpdateSymbol(t){this._dependencies.indexOf(t)===-1&&this._dependencies.push(t),this._updateSymbols.indexOf(t)===-1&&this._updateSymbols.push(t)}addSubstitutionDependencies(t){for(let r=0;r<t.length;r++){let n=t[r];if(this._dependencies.indexOf(n)===-1)throw new Error("Programming error: substitution dependency "+n+" must also be registered as a regular dependency");this._scope.substitutionDependencies.indexOf(n)===-1&&this._scope.substitutionDependencies.push(n)}}mergeDependencies(...t){for(let r=0;r<t.length;r++){let n=t[r];for(let o=0;o<n._dependencies.length;o++)this._dependencies.indexOf(n._dependencies[o])===-1&&this._dependencies.push(n._dependencies[o]);for(let o=0;o<n._updateSymbols.length;o++)this._updateSymbols.indexOf(n._updateSymbols[o])===-1&&this._updateSymbols.push(n._updateSymbols[o]);for(let o=0;o<n._scope.dependencies.length;o++)this._scope.dependencies.indexOf(n._scope.dependencies[o])===-1&&this._scope.dependencies.push(n._scope.dependencies[o]);for(let o=0;o<n._scope.substitutionDependencies.length;o++)this._scope.substitutionDependencies.indexOf(n._scope.substitutionDependencies[o])===-1&&this._scope.substitutionDependencies.push(n._scope.substitutionDependencies[o]);this.addOptionalDependencies(n.getOptionalDependencies()),Array.prototype.push.apply(this._scope.scopes,n._scope.scopes)}}mergeDependenciesInScope(t,r,n,o){let a=n.getScope(),i={kind:t,definitions:r,dependencies:a.dependencies,substitutionDependencies:a.substitutionDependencies,scopes:a.scopes,functionDefinitionSymbol:o==null?void 0:o.functionDefinitionSymbol};this._scope.scopes.push(i);for(let s=0;s<n._dependencies.length;s++){let c=n._dependencies[s];!r.includes(c)&&!this._dependencies.includes(c)&&this._dependencies.push(c)}for(let s=0;s<n._updateSymbols.length;s++)this._updateSymbols.indexOf(n._updateSymbols[s])===-1&&this._updateSymbols.push(n._updateSymbols[s]);this.addOptionalDependencies(n.getOptionalDependencies())}getDependencies(){return this._dependencies}graphmodeDependencies(t,r){return this.getDependencies()}getOptionalDependencies(){return this._optionalDependencies}getUpdateSymbols(){return this._updateSymbols}getScope(){return this._scope}dependsOn(t){return this._dependencies.indexOf(t)>-1}getExports(t){let r=this._exports||[],n=this.getIdref();return n&&(r=r.concat([n])),t.ansEnabled()&&(r=r.concat(this.getAnsVariable())),r}getIdref(){var r;if(!this.userData)return;let t=(r=this.userData.unprefixedId)!=null?r:this.userData.id;return t?`idref_${t}`:void 0}getLegalExports(t){return this.getExports(t).filter(r=>!t.assignmentForbidden(r))}exportsSymbol(t){return this._exports.indexOf(t)>-1}getOperator(){return this.operator||"="}isInequality(){return!1}isShadeBetween(){return!1}shouldPromoteToSlider(t){return!1}getSliderVariables(t,r,n){let o=t.sliderVariables(n!=null?n:r.getDependencies());return r.valueType===$||r.valueType===Dn||r.valueType===fe||r.valueType===_a||r.valueType===_||r.valueType===mr?t.is3dPolicy()?o.includes("t")&&!o.includes("u")&&!o.includes("v")?o.filter(a=>a!="t"):!o.includes("t")&&(o.includes("u")||o.includes("v"))?o.filter(a=>a!="u"&&a!="v"):o:o.filter(a=>!t.validParametricVariable(a)):o}asValue(){}boundDomain(t){return q0()}getCursorContext(){}asCompilerValue(){}substitute(t){}getExpressionType(t,r){}tableInfo(t,r){}getGraphMode(t,r){}getMoveStrategy(t,r,n,o){}};var ie=class extends st{constructor(t,r){if(!Array.isArray(t))throw new TypeError("Argument to expression constructor must be an Array.");super(),this.args=t,(!r||!r.skipRegisterDependencies)&&this.registerDependencies()}shouldExportAns(){return!0}registerDependencies(){for(let t=0;t<this.args.length;t++)this.mergeDependencies(this.args[t])}copyWithArgs(t){throw new Error(`Programming Error: copyWithArgs not implemented for ${this.constructor.name}`)}};var pc=class extends ie{constructor(t){super([]),typeof t=="number"&&(t=Le(t,1)),this._constantValue=t}asValue(){let t=this._constantValue;return typeof t=="boolean"?t:we(t)}asCompilerValue(){return this._constantValue}scalarExprString(){return this.asValue()>0?String(this.asValue()):"("+String(this.asValue())+")"}isNaN(){let t=this.asValue();return typeof t=="number"&&isNaN(t)}},Hr=class extends pc{constructor(){super(...arguments);this.type="Constant"}};var gc={Cold:0,Unknown:1,Hot:2};function xb(e){if(!St(e))throw new Error("Programming Error: numeric constants should be rational");return{type:1,valueType:h,value:e,mobility:gc.Cold}}var ta=xb(Le(0,1)),La=xb(Le(1,1)),bc=xb(Le(1,2));function pe(e){return e.map(t=>O(t))}function qn(e){return e.map(t=>hr(t))}function H(e,t){var M,L,T,w,k;let r=t==null?void 0:t.defaultArguments,n=1/0,o=0,a=(M=r==null?void 0:r.length)!=null?M:0;for(let V of e){let j=V.minArity-a;j<n&&(n=j);let te=(L=V.maxArity)!=null?L:1/0;te>o&&(o=te)}let i=(T=t==null?void 0:t.fallthroughUnlessDistribution)!=null?T:!1,s=(w=t==null?void 0:t.allowDotCall)!=null?w:!1,c=(k=t==null?void 0:t.isSeeded)!=null?k:!1,l=t==null?void 0:t.minArityExampleArgs,p=t==null?void 0:t.maxArityExampleArgs,y=t==null?void 0:t.dotMinArityExampleArgs,x=t==null?void 0:t.dotMaxArityExampleArgs;return{minArity:n,getSignatures:V=>e.filter(j=>j.satisfiesPolicy(V)),maxArity:o,defaultArguments:r,fallthroughUnlessDistribution:i,minArityExampleArgs:l,maxArityExampleArgs:p,dotMinArityExampleArgs:y,dotMaxArityExampleArgs:x,allowDotCall:s,isSeeded:c}}function Nu(){return H(pe([{type:"variadic",initial:[],rest:Ir}]),{})}var cg=Dt.of([Xe,$e,Re,rt,Oe]),fb=Dt.of([Xe,Re,rt,nt]),fc=Dt.of([$,Xe,$e,Re,rt,nt,Oe,ze,We,Fe,Ce]),yb=Dt.of([...Zo.types.filter(e=>e!==Na),Ar]),bb=Dt.of([Ir,er],{coerceComplexToReal:!1});function ot(e){return[hr([Xm(e)]),hr([e]),O({type:"variadic",initial:[e,e],rest:e})]}function yc(e){return[hr([Xm(e),Xm(e)])]}var vb={midpoint:H([...pe([[$,$],[Xe]]),...pe([[fe,fe],[gr]])],{allowDotCall:!0}),segment:H([O([$,$]),O([fe,fe])]),vector:H([O([$,$]),O([fe,fe])]),sphere:H([O([$,h]),O([fe,h])]),distance:H(pe([[$,$],[fe,fe]])),glider:H(pe([[Dt.of([Xe,$e,Re,rt,Oe,ze]),h]])),circle:H(pe([[$,Xe],[$,$],[$,h]]),{}),center:H(pe([[$e],[Oe]]),{allowDotCall:!0}),radius:H(pe([[$e],[Oe]]),{allowDotCall:!0}),intersection:H(pe([[cg,cg]])),strictintersection:H(pe([[cg,cg]])),parallel:H(pe([[fb,$]])),perpendicular:H(pe([[fb,$]])),anglebisector:H(pe([[G0]])),start:H([O([nt]),O([ar])],{allowDotCall:!0}),end:H([O([nt]),O([ar])],{allowDotCall:!0}),area:H([O([ze])]),length:H([hr([Zo],{geometry:!1,"3d":!1}),O([gr]),O([ar]),O([Xe]),O([nt]),O([Oe]),hr({type:"variadic",initial:[Ir],rest:Ir},{geometry:!1,"3d":!1})],{allowDotCall:!0}),translate:H(pe([[fc,nt],[fc,$,$]])),dilate:H(pe([[fc,$,h]])),rotate:H(pe([[fc,$,h]])),reflect:H(pe([[fc,fb]])),apply:H(pe([[Ce,fc]])),points:H([]),lines:H([]),circles:H([]),arcs:H([]),polygons:H([]),rays:H([]),vectors:H([]),angle:H(pe([[$,$,$]])),directedangle:H(pe([[$,$,$]])),angles:H(qn([[ze]]),{allowDotCall:!0}),perimeter:H(pe([[ze]]),{allowDotCall:!0}),directedangles:H(qn([[ze]]),{allowDotCall:!0}),coterminal:H(pe([[We],[Fe]])),round:H([...pe([[Pe],[Pe,h]]),...pe([[_],[_,h]])]),mod:H([...pe([[Pe,Pe]]),...pe([[_,_]])]),floor:H([...pe([[Pe]]),...pe([[_]])]),ceil:H([...pe([[Pe]]),...pe([[_]])]),abs:H([...pe([[Pe]]),...pe([[_]])]),sign:H([O([Pe]),O([_])]),coerceToReal:H([...pe([[Ir]])]),real:H([O([_])],{allowDotCall:!0}),imag:H([O([_])],{allowDotCall:!0}),conj:H([...pe([[Pe]]),...pe([[_]])]),exp:H([O([Pe]),O([_])]),sin:H([O([Pe]),O([_])]),cos:H([O([Pe]),O([_])]),tan:H([O([Pe]),O([_])]),sinh:H([O([Pe]),O([_])]),cosh:H([O([Pe]),O([_])]),tanh:H([O([Pe]),O([_])]),sec:H([O([Pe]),O([_])]),csc:H([O([Pe]),O([_])]),cot:H([O([Pe]),O([_])]),sech:H([O([Pe]),O([_])]),csch:H([O([Pe]),O([_])]),coth:H([O([Pe]),O([_])]),arctan:H([O([Pe]),O([_]),...pe([[h,h]])]),arcsinh:H([O([Pe]),O([_])]),arccot:H([O([Pe]),O([_])]),arccsch:H([O([Pe]),O([_])]),nthroot:H([...pe([[h,h]])]),complexNthRoot:H([...pe([[_,_]])]),repeat:H(qn([[$0,h],[Zo,ne]])),sort:H(qn([[Yy],[mr],[Zo,Yy],[Zo,mr]]),{minArityExampleArgs:"([3,2,1])",maxArityExampleArgs:"([1,2,3],[3,2,1])",dotMaxArityExampleArgs:"([3,4])",allowDotCall:!0}),shuffle:H(qn([[Mt,Zo],[Mt,Zo,h]]),{minArityExampleArgs:"([1,2,3])",maxArityExampleArgs:"([1,2,3],2)",dotMaxArityExampleArgs:"(2)",allowDotCall:!0,isSeeded:!0}),join:H(qn([{type:"variadic",initial:[bb,bb],rest:bb}]),{minArityExampleArgs:"([1,2],[3,4])",dotMinArityExampleArgs:"([3,4])",allowDotCall:!0}),unique:H(qn([[Dt.of(Zo.types.filter(e=>e!==Na&&e!==er),{coerceComplexToReal:!1})]]),{minArityExampleArgs:"([1,2,3])",maxArityExampleArgs:"([1,2,3])",allowDotCall:!0}),normaldist:H(pe([[h,h]]),{defaultArguments:[ta,La]}),tdist:H(pe([[h,h,h]]),{defaultArguments:[ta,La]}),chisqdist:H(pe([[h]])),binomialdist:H(pe([[h,h]]),{defaultArguments:[bc]}),poissondist:H(pe([[h]])),geodist:H(pe([[h]]),{defaultArguments:[bc]}),uniformdist:H(pe([[h,h]]),{defaultArguments:[ta,La]}),discretedist:H(qn([[ne],[ne,ne]])),pdf:H(pe([[Ar,h]]),{allowDotCall:!0}),cdf:H(pe([[Ar,h],[Ar,h,h]]),{allowDotCall:!0}),median:H([...pe([[Ar]]),...ot(h)],{fallthroughUnlessDistribution:!0,allowDotCall:!0}),stdev:H([...pe([[Ar]]),...ot(Pe),...ot(_)],{fallthroughUnlessDistribution:!0,allowDotCall:!0}),stdevp:H([...ot(Pe),...ot(_)],{allowDotCall:!0}),var:H([...pe([[Ar]]),...ot(Pe),...ot(_)],{fallthroughUnlessDistribution:!0,allowDotCall:!0}),cov:H([...yc(Pe),...yc(_)]),covp:H([...yc(Pe),...yc(_)]),corr:H([...yc(Pe),...yc(_)]),quantile:H([...pe([[Ar,h]]),hr([ne,Jo(h)])],{fallthroughUnlessDistribution:!0,allowDotCall:!0,minArityExampleArgs:"([1,2,3], 1)",maxArityExampleArgs:"([1,2,3], 1)",dotMinArityExampleArgs:"(x)",dotMaxArityExampleArgs:"(x)"}),random:H([hr([Mt]),...qn([[Mt,h],[Mt,h,h],[Mt,yb],[Mt,yb,h],[Mt,yb,h,h]])],{allowDotCall:!0,isSeeded:!0}),polygon:H([hr([]),...ot($),...qn([[ne,ne],[h,ne],[ne,h]])]),total:H([...ot(Pe),...ot(_),...ot($),...ot(fe)],{allowDotCall:!0}),mean:H([O([Ar]),...ot(Pe),...ot(_),...ot($),...ot(fe)],{fallthroughUnlessDistribution:!0,allowDotCall:!0}),varp:H([O([Ar]),...ot(Pe),...ot(_)],{fallthroughUnlessDistribution:!0,allowDotCall:!0}),mad:H([...ot(Pe),...ot(_)]),lcm:H([...ot(Pe),...ot(_)],{allowDotCall:!0}),gcd:H([...ot(Pe),...ot(_)],{allowDotCall:!0}),min:H([...ot(h),O([Ur])],{allowDotCall:!0}),lower:H([O([Ur])],{allowDotCall:!0}),max:H([...ot(h),O([Ur])],{allowDotCall:!0}),upper:H([O([Ur])],{allowDotCall:!0}),ztest:H([hr([ne,Jo(h)]),O([h,h,h]),hr([ne,Jo(h),ne,Jo(h)]),O([h,h,h,h,h,h])]),zproptest:H(pe([[h,h],[h,h,h,h]])),ttest:H([hr([ne]),O([h,h,h]),hr([ne,ne]),O([h,h,h,h,h,h])]),null:H([O([Kt,h]),O([Wt,h]),O([jt,h]),O([tr,h]),O([rr,h]),O([nr,h]),O([or,h])],{allowDotCall:!0}),conf:H([O([Kt,h]),O([Wt,h]),O([jt,h]),O([tr,h]),O([rr,h]),O([nr,h]),O([or,h])],{allowDotCall:!0}),score:H([O([nn]),O([zr]),O([Kt]),O([Wt]),O([jt]),O([tr]),O([rr]),O([nr]),O([or]),O([eo]),O([to])],{allowDotCall:!0}),pleft:H([O([nn]),O([zr]),O([Kt]),O([Wt]),O([jt]),O([tr]),O([rr]),O([nr]),O([or])],{allowDotCall:!0}),pright:H([O([nn]),O([zr]),O([Kt]),O([Wt]),O([jt]),O([tr]),O([rr]),O([nr]),O([or])],{allowDotCall:!0}),dof:H([O([Kt]),O([Wt]),O([jt]),O([zr]),O([eo]),O([to])],{allowDotCall:!0}),stderr:H([O([Kt]),O([Wt]),O([jt]),O([tr]),O([rr]),O([nr]),O([or])],{allowDotCall:!0}),estimate:H([O([Kt]),O([Wt]),O([jt]),O([tr]),O([rr]),O([nr]),O([or])],{allowDotCall:!0}),chisqtest:H(qn([{type:"variadic",initial:[ne,ne],rest:ne}])),chisqgof:H(qn([[ne],[ne,ne]])),histogram:Nu(),dotplot:Nu(),boxplot:Nu(),stats:Nu(),inv:Nu()};function xF(e){switch(e){case"default":case"trig":case"inverseTrig":case"trig2":case"never-broadcast":return[h];case"reducer":return[ne];case"doubleReducer":return[ne,ne];case"parameterizedReducer":return[ne,h];case"color":return[h,h,h]}}function vF(e){switch(e){case"default":case"trig":case"inverseTrig":case"trig2":case"doubleReducer":case"color":case"never-broadcast":return!1;case"reducer":case"parameterizedReducer":return!0}}function wF(e,t,r){return e==="reducer"?1/0:t+r}function b(e,t,r){var M,L,T,w,k;r===void 0&&(r={});let n=(M=r.tag)!=null?M:"default",o=(L=r.argumentTypes)!=null?L:xF(n),a=r.defaultArguments?r.defaultArguments.length:0,i=o.length-a,s=wF(n,i,a),c=(T=r.allowDotCall)!=null?T:vF(n),l=(w=r.noPeel)!=null?w:!1,{defaultArguments:p,minArityExampleArgs:y,maxArityExampleArgs:x}=r;return{module:e,symbol:t,argumentTypes:o,defaultArguments:p,returnType:(k=r.returnType)!=null?k:h,tag:n,minArity:i,maxArity:s,allowDotCall:c,noPeel:l,minArityExampleArgs:y,maxArityExampleArgs:x,intervalName:r.intervalName}}function Lu(e){let t;return e in _u&&(t=_u[e].tag),t==="trig"||t==="trig2"||t==="inverseTrig"?!0:e==="angle"||e==="angles"||e==="directedangle"||e==="directedangles"||e==="rotate"}var _u={sin:b("BuiltIn","sin",{tag:"trig",intervalName:"IBuiltIn.sin"}),cos:b("BuiltIn","cos",{tag:"trig",intervalName:"IBuiltIn.cos"}),tan:b("BuiltIn","tan",{tag:"trig"}),cot:b("BuiltIn","cot",{tag:"trig"}),sec:b("BuiltIn","sec",{tag:"trig"}),csc:b("BuiltIn","csc",{tag:"trig"}),arcsin:b("Math","asin",{tag:"inverseTrig"}),arccos:b("Math","acos",{tag:"inverseTrig"}),arctan:b("Math","atan2",{argumentTypes:[h,h],tag:"inverseTrig"}),arccot:b("BuiltIn","acot",{tag:"inverseTrig"}),arcsec:b("BuiltIn","asec",{tag:"inverseTrig"}),arccsc:b("BuiltIn","acsc",{tag:"inverseTrig"}),sinh:b("BuiltIn","sinh"),cosh:b("BuiltIn","cosh"),tanh:b("BuiltIn","tanh"),coth:b("BuiltIn","coth"),sech:b("BuiltIn","sech"),csch:b("BuiltIn","csch"),arcsinh:b("BuiltIn","asinh"),arccosh:b("BuiltIn","acosh"),arctanh:b("BuiltIn","atanh"),arccoth:b("BuiltIn","acoth"),arcsech:b("BuiltIn","asech"),arccsch:b("BuiltIn","acsch"),sqrt:b("Math","sqrt",{intervalName:"IBuiltIn.sqrt"}),rtxsqpone:b("BuiltIn","sqrtxsqp1"),rtxsqmone:b("BuiltIn","sqrtxsqm1"),hypot:b("BuiltIn","hypot",{argumentTypes:[h,h],intervalName:"IBuiltIn.hypot"}),log:b("BuiltIn","common_log"),logbase:b("BuiltIn","log_base",{argumentTypes:[h,h]}),ln:b("BuiltIn","log"),exp:b("Math","exp"),floor:b("Math","floor"),complexFloor:b("BuiltIn","complexFloor",{argumentTypes:[_],returnType:_}),ceil:b("Math","ceil"),complexCeil:b("BuiltIn","complexCeil",{argumentTypes:[_],returnType:_}),round:b("Math","round"),complexRound:b("BuiltIn","complexRound",{argumentTypes:[_],returnType:_}),abs:b("Math","abs",{intervalName:"IBuiltIn.abs"}),sign:b("BuiltIn","sign"),mod:b("BuiltIn","mod",{argumentTypes:[h,h],intervalName:"IBuiltIn.mod"}),complexMod:b("BuiltIn","complexMod",{argumentTypes:[_,_],returnType:_}),nCr:b("BuiltIn","nCr",{argumentTypes:[h,h]}),nPr:b("BuiltIn","nPr",{argumentTypes:[h,h]}),factorial:b("BuiltIn","factorial"),polyGamma:b("BuiltIn","polyGamma",{argumentTypes:[h,h]}),lcm:b("BuiltIn","listLCM",{tag:"reducer"}),complexLCM:b("BuiltIn","complexListLCM",{argumentTypes:[mr],returnType:_,tag:"reducer"}),gcd:b("BuiltIn","listGCD",{tag:"reducer"}),complexGCD:b("BuiltIn","complexListGCD",{argumentTypes:[mr],returnType:_,tag:"reducer"}),distance:b("BuiltIn","distance",{argumentTypes:[$,$]}),polygon:b("BuiltIn","polygon",{tag:"reducer",argumentTypes:[Dn],returnType:ze}),rowMatrix:b("BuiltIn","rowMatrix",{argumentTypes:[ne],returnType:le,tag:"never-broadcast"}),vcat:b("BuiltIn","vcat",{argumentTypes:[Jn],returnType:le,tag:"never-broadcast"}),rows:b("BuiltIn","rows",{argumentTypes:[le],returnType:Jn,tag:"never-broadcast",allowDotCall:!0}),hcat:b("BuiltIn","hcat",{argumentTypes:[Jn],returnType:le,tag:"never-broadcast"}),assertColCount:b("BuiltIn","assertColCount",{argumentTypes:[le,h],returnType:le,tag:"never-broadcast"}),zeroMatrix:b("BuiltIn","zeroMatrix",{argumentTypes:[h,h],returnType:le,tag:"never-broadcast"}),columns:b("BuiltIn","columns",{argumentTypes:[le],returnType:Jn,tag:"never-broadcast",allowDotCall:!0}),matrixAdd:b("BuiltIn","matrixAdd",{argumentTypes:[le,le],returnType:le}),matrixSubtract:b("BuiltIn","matrixSubtract",{argumentTypes:[le,le],returnType:le}),matrixMultiply:b("BuiltIn","matrixMultiply",{argumentTypes:[le,le],returnType:le}),matrixTimesPoint:b("BuiltIn","matrixTimesPoint",{argumentTypes:[le,$],returnType:$}),matrixTimesPointThreeD:b("BuiltIn","matrixTimesPointThreeD",{argumentTypes:[le,fe],returnType:fe}),matrixPow:b("BuiltIn","matrixPow",{argumentTypes:[le,h],returnType:le}),matrixNegate:b("BuiltIn","matrixNegate",{argumentTypes:[le],returnType:le}),matrixScale:b("BuiltIn","matrixScale",{argumentTypes:[le,h],returnType:le}),matrixScalarDivide:b("BuiltIn","matrixScalarDivide",{argumentTypes:[le,h],returnType:le}),det:b("BuiltIn","det",{argumentTypes:[le],returnType:h,allowDotCall:!0}),trace:b("BuiltIn","trace",{argumentTypes:[le],returnType:h,allowDotCall:!0,noPeel:!0}),rref:b("BuiltIn","rref",{argumentTypes:[le],returnType:le,allowDotCall:!0}),rank:b("BuiltIn","matrixRank",{argumentTypes:[le],returnType:h,allowDotCall:!0}),transpose:b("BuiltIn","transpose",{argumentTypes:[le],returnType:le,allowDotCall:!0}),matrixElement:b("BuiltIn","matrixElement",{argumentTypes:[le,h,h],returnType:h,tag:"never-broadcast",noPeel:!0}),rowCount:b("BuiltIn","rowCount",{argumentTypes:[le],returnType:h,noPeel:!0}),colCount:b("BuiltIn","colCount",{argumentTypes:[le],returnType:h,noPeel:!0}),submatrix:b("BuiltIn","submatrix",{argumentTypes:[le,ne,ne],returnType:le,tag:"never-broadcast",noPeel:!0}),trapezoidalPartition:b("BuiltIn","trapezoidalPartition",{argumentTypes:[ze],returnType:Ci,noPeel:!0}),pointDet:b("BuiltIn","pointDet",{argumentTypes:[$,$]}),pointDot:b("BuiltIn","pointDot",{argumentTypes:[$,$]}),pointPerp:b("BuiltIn","pointPerp",{argumentTypes:[$],returnType:$}),complexMultiplyPoints:b("BuiltIn","complexMultiplyPoints",{argumentTypes:[$,$],returnType:$}),segment:b("BuiltIn","segment",{argumentTypes:[$,$],returnType:Xe}),line:b("BuiltIn","line",{argumentTypes:[$,$],returnType:Re}),ray:b("BuiltIn","ray",{argumentTypes:[$,$],returnType:rt}),vector:b("BuiltIn","vector",{argumentTypes:[$,$],returnType:nt}),vectorThreeD:b("BuiltIn","vectorThreeD",{argumentTypes:[fe,fe],returnType:ar}),mathVector:b("BuiltIn","mathVector",{argumentTypes:[$,$],returnType:nt}),mathVectorThreeD:b("BuiltIn","mathVectorThreeD",{argumentTypes:[fe,fe],returnType:ar}),vectorDisplacementAsPoint:b("BuiltIn","vectorDisplacementAsPoint",{argumentTypes:[nt],returnType:$,noPeel:!0}),vectorThreeDDisplacementAsPoint:b("BuiltIn","vectorThreeDDisplacementAsPoint",{argumentTypes:[ar],returnType:fe,noPeel:!0}),basePointFromVector:b("BuiltIn","basePointFromVector",{argumentTypes:[nt],returnType:$,noPeel:!0}),basePointFromVectorThreeD:b("BuiltIn","basePointFromVectorThreeD",{argumentTypes:[ar],returnType:fe,noPeel:!0}),circle:b("BuiltIn","circle",{argumentTypes:[$,h],returnType:$e}),center:b("BuiltIn","center",{argumentTypes:[$e],returnType:$,allowDotCall:!0,noPeel:!0}),radius:b("BuiltIn","radius",{argumentTypes:[$e],returnType:h,allowDotCall:!0,noPeel:!0}),arc:b("BuiltIn","arc",{argumentTypes:[$,$,$],returnType:Oe}),arcCenter:b("BuiltIn","arcCenter",{argumentTypes:[Oe],returnType:$}),arcFirstPoint:b("BuiltIn","arcFirstPoint",{argumentTypes:[Oe],returnType:$,noPeel:!0}),arcMiddlePoint:b("BuiltIn","arcMiddlePoint",{argumentTypes:[Oe],returnType:$,noPeel:!0}),arcThirdPoint:b("BuiltIn","arcThirdPoint",{argumentTypes:[Oe],returnType:$,noPeel:!0}),arcOmega:b("BuiltIn","arcOmega",{argumentTypes:[Oe],returnType:h}),undirectedAngleMarker:b("BuiltIn","undirectedAngleMarker",{argumentTypes:[Fe],returnType:We}),directedAngleMarker:b("BuiltIn","directedAngleMarker",{argumentTypes:[$,h,h,h],returnType:Fe}),directedCoterminalAngle:b("BuiltIn","directedCoterminalAngle",{argumentTypes:[Fe],returnType:Fe}),undirectedCoterminalAngle:b("BuiltIn","undirectedCoterminalAngle",{argumentTypes:[We],returnType:We}),supplement:b("BuiltIn","supplementAngle",{argumentTypes:[Fe],returnType:Fe}),directedAngleMarkerRawDelta:b("BuiltIn","angleMarkerRawDelta",{argumentTypes:[Fe],returnType:h,noPeel:!0}),undirectedAngleMarkerRawDelta:b("BuiltIn","angleMarkerRawDelta",{argumentTypes:[We],returnType:h,noPeel:!0}),directedAngleMarkerMultiplier:b("BuiltIn","angleMarkerMultiplier",{argumentTypes:[Fe],returnType:h,noPeel:!0}),undirectedAngleMarkerMultiplier:b("BuiltIn","angleMarkerMultiplier",{argumentTypes:[We],returnType:h,noPeel:!0}),polygonInteriorUndirectedAngles:b("BuiltIn","polygonInteriorUndirectedAngles",{argumentTypes:[ze,h],returnType:ki,allowDotCall:!0,tag:"never-broadcast"}),polygonInteriorDirectedAngles:b("BuiltIn","polygonInteriorDirectedAngles",{argumentTypes:[ze,h],returnType:Ei,allowDotCall:!0,tag:"never-broadcast"}),vertices:b("BuiltIn","vertices",{argumentTypes:[ze],returnType:Dn,allowDotCall:!0,tag:"never-broadcast"}),segments:b("BuiltIn","polygonEdges",{argumentTypes:[ze],returnType:Mi,allowDotCall:!0,tag:"never-broadcast"}),scaleTangentTransformation:b("BuiltIn","scaleTangentTransformation",{argumentTypes:[Ce,h],returnType:ze}),scaleTangentPolygon:b("BuiltIn","scaleTangentPolygon",{argumentTypes:[ze,h],returnType:ze}),scaleTangentSegment:b("BuiltIn","scaleTangentSegment",{argumentTypes:[Xe,h],returnType:Xe}),scaleTangentLine:b("BuiltIn","scaleTangentLine",{argumentTypes:[Re,h],returnType:Re}),scaleTangentRay:b("BuiltIn","scaleTangentRay",{argumentTypes:[rt,h],returnType:rt}),scaleTangentCircle:b("BuiltIn","scaleTangentCircle",{argumentTypes:[$e,h],returnType:$e}),scaleTangentArc:b("BuiltIn","scaleTangentArc",{argumentTypes:[Oe,h],returnType:$e}),scaleTangentDirectedAngleMarker:b("BuiltIn","scaleTangentAngle",{argumentTypes:[Fe,h],returnType:Fe}),scaleTangentUndirectedAngleMarker:b("BuiltIn","scaleTangentAngle",{argumentTypes:[We,h],returnType:We}),addTangentPolygon:b("BuiltIn","addTangentPolygon",{argumentTypes:[ze,ze],returnType:ze}),addTangentSegment:b("BuiltIn","addTangentSegment",{argumentTypes:[Xe,Xe],returnType:Xe}),addTangentSegmentThreeD:b("BuiltIn","addTangentSegmentThreeD",{argumentTypes:[gr,gr],returnType:gr}),addTangentLine:b("BuiltIn","addTangentLine",{argumentTypes:[Re,Re],returnType:Re}),addTangentRay:b("BuiltIn","addTangentRay",{argumentTypes:[rt,rt],returnType:rt}),addTangentVector:b("BuiltIn","addTangentVector",{argumentTypes:[nt,nt],returnType:nt}),addTangentCircle:b("BuiltIn","addTangentCircle",{argumentTypes:[$e,$e],returnType:$e}),addTangentArc:b("BuiltIn","addTangentArc",{argumentTypes:[Oe,Oe],returnType:Oe}),addTangentTransformation:b("BuiltIn","addTangentTransformation",{argumentTypes:[Ce,Ce],returnType:Ce}),addTangentDirectedAngleMarker:b("BuiltIn","addTangentAngle",{argumentTypes:[Fe,Fe],returnType:Fe}),addTangentUndirectedAngleMarker:b("BuiltIn","addTangentAngle",{argumentTypes:[We,We],returnType:We}),segmentGlider:b("BuiltIn","segmentGlider",{argumentTypes:[Xe,h],returnType:$}),segmentThreeDGlider:b("BuiltIn","segmentThreeDGlider",{argumentTypes:[gr,h],returnType:fe}),lineGlider:b("BuiltIn","lineGlider",{argumentTypes:[Re,h],returnType:$}),rayGlider:b("BuiltIn","rayGlider",{argumentTypes:[rt,h],returnType:$}),circleGlider:b("BuiltIn","circleGlider",{argumentTypes:[$e,h],returnType:$}),arcGlider:b("BuiltIn","arcGlider",{argumentTypes:[Oe,h],returnType:$}),polygonEdgeByParameter:b("BuiltIn","polygonEdgeByParameter",{argumentTypes:[ze,h],returnType:Xe,noPeel:!0}),polygonGlider:b("BuiltIn","polygonGlider",{argumentTypes:[ze,h],returnType:$,noPeel:!0}),chooseNonIncidentPoint:b("BuiltIn","chooseNonIncidentPoint",{argumentTypes:[$,$,$],returnType:$,noPeel:!0}),circleCircleIntersection:b("BuiltIn","circleCircleIntersection",{argumentTypes:[$e,$e,h],returnType:$}),circleArcIntersection:b("BuiltIn","circleArcIntersection",{argumentTypes:[$e,Oe,h],returnType:$}),circleLineIntersection:b("BuiltIn","circleLineIntersection",{argumentTypes:[$e,Re,h],returnType:$}),arcCircleIntersection:b("BuiltIn","arcCircleIntersection",{argumentTypes:[Oe,$e,h],returnType:$}),arcArcIntersection:b("BuiltIn","arcArcIntersection",{argumentTypes:[Oe,Oe,h],returnType:$}),arcLineIntersection:b("BuiltIn","arcLineIntersection",{argumentTypes:[Oe,Re,h],returnType:$}),lineCircleIntersection:b("BuiltIn","lineCircleIntersection",{argumentTypes:[Re,$e,h],returnType:$}),lineArcIntersection:b("BuiltIn","lineArcIntersection",{argumentTypes:[Re,Oe,h],returnType:$}),lineLineIntersection:b("BuiltIn","lineLineIntersection",{argumentTypes:[Re,Re,h],returnType:$}),lineFromSegment:b("BuiltIn","identity",{argumentTypes:[Xe],returnType:Re}),lineFromRay:b("BuiltIn","identity",{argumentTypes:[rt],returnType:Re}),parallel:b("BuiltIn","parallel",{argumentTypes:[Re,$],returnType:Re}),perpendicular:b("BuiltIn","perpendicular",{argumentTypes:[Re,$],returnType:Re}),anglebisector:b("BuiltIn","anglebisector",{argumentTypes:[We],returnType:rt}),directedanglebisector:b("BuiltIn","anglebisector",{argumentTypes:[Fe],returnType:rt}),rawTransform:b("BuiltIn","rawTransform",{argumentTypes:[$,$],returnType:Ce}),rawTransformConj:b("BuiltIn","rawTransformConj",{argumentTypes:[$,$],returnType:Ce}),transformWithoutTranslation:b("BuiltIn","transformWithoutTranslation",{argumentTypes:[Ce],returnType:Ce,noPeel:!0}),transformScaleFactor:b("BuiltIn","transformScaleFactor",{argumentTypes:[Ce],returnType:$,noPeel:!0}),translation:b("BuiltIn","translation",{argumentTypes:[$],returnType:Ce}),dilation:b("BuiltIn","dilation",{argumentTypes:[$,h],returnType:Ce}),rotation:b("BuiltIn","rotation",{tag:"trig2",argumentTypes:[$,h],returnType:Ce}),reflection:b("BuiltIn","reflection",{argumentTypes:[Re],returnType:Ce}),compose:b("BuiltIn","composeTransformation",{argumentTypes:[Ce,Ce],returnType:Ce}),inverse:b("BuiltIn","invertTransformation",{argumentTypes:[Ce],returnType:Ce}),transformPoint:b("BuiltIn","transformPoint",{argumentTypes:[Ce,$],returnType:$}),transformSegment:b("BuiltIn","transformSegment",{argumentTypes:[Ce,Xe],returnType:Xe}),transformLine:b("BuiltIn","transformLine",{argumentTypes:[Ce,Re],returnType:Re}),transformRay:b("BuiltIn","transformRay",{argumentTypes:[Ce,rt],returnType:rt}),transformVector:b("BuiltIn","transformVector",{argumentTypes:[Ce,nt],returnType:nt}),transformCircle:b("BuiltIn","transformCircle",{argumentTypes:[Ce,$e],returnType:$e}),transformArc:b("BuiltIn","transformArc",{argumentTypes:[Ce,Oe],returnType:Oe}),transformPolygon:b("BuiltIn","transformPolygon",{argumentTypes:[Ce,ze],returnType:ze}),transformAngleMarker:b("BuiltIn","transformAngleMarker",{argumentTypes:[Ce,We],returnType:We}),transformDirectedAngleMarker:b("BuiltIn","transformAngleMarker",{argumentTypes:[Ce,Fe],returnType:Fe}),distanceThreeD:b("BuiltIn","distanceThreeD",{argumentTypes:[fe,fe]}),segmentThreeD:b("BuiltIn","segmentThreeD",{argumentTypes:[fe,fe],returnType:gr}),triangle:b("BuiltIn","triangle",{argumentTypes:[fe,fe,fe],returnType:So}),sphere:b("BuiltIn","sphere",{argumentTypes:[fe,h],returnType:Mo}),mean:b("BuiltIn","mean",{tag:"reducer"}),total:b("BuiltIn","total",{tag:"reducer"}),cumulativeSum:b("BuiltIn","cumulativeSum",{argumentTypes:[ne],returnType:ne,tag:"never-broadcast"}),stdev:b("BuiltIn","stdev",{tag:"reducer"}),stdevp:b("BuiltIn","stdevp",{tag:"reducer"}),mad:b("BuiltIn","mad",{tag:"reducer"}),count:b("BuiltIn","listLength",{tag:"reducer",argumentTypes:[er],noPeel:!0}),listMin:b("BuiltIn","listMin",{tag:"reducer"}),listMax:b("BuiltIn","listMax",{tag:"reducer"}),min:b("Math","min",{argumentTypes:[h,h],returnType:h,intervalName:"IBuiltIn.min"}),max:b("Math","max",{argumentTypes:[h,h],returnType:h,intervalName:"IBuiltIn.max"}),argmin:b("BuiltIn","argMin",{tag:"reducer",noPeel:!0}),argmax:b("BuiltIn","argMax",{tag:"reducer",noPeel:!0}),median:b("BuiltIn","median",{tag:"reducer"}),var:b("BuiltIn","variance",{tag:"reducer"}),varp:b("BuiltIn","varp",{tag:"reducer"}),cov:b("BuiltIn","cov",{tag:"doubleReducer",noPeel:!0}),covp:b("BuiltIn","covp",{tag:"doubleReducer",noPeel:!0}),corr:b("BuiltIn","corr",{tag:"doubleReducer",noPeel:!0}),spearman:b("BuiltIn","spearman",{tag:"doubleReducer",noPeel:!0}),quantile:b("BuiltIn","quantile",{tag:"parameterizedReducer"}),quartile:b("BuiltIn","quartile",{tag:"parameterizedReducer"}),upperQuantileIndex:b("BuiltIn","upperQuantileIndex",{tag:"parameterizedReducer",noPeel:!0}),lowerQuantileIndex:b("BuiltIn","lowerQuantileIndex",{tag:"parameterizedReducer",noPeel:!0}),quartileIndex:b("BuiltIn","quartileIndex",{tag:"parameterizedReducer",noPeel:!0}),upperQuartileIndex:b("BuiltIn","upperQuartileIndex",{tag:"parameterizedReducer",noPeel:!0}),lowerQuartileIndex:b("BuiltIn","lowerQuartileIndex",{tag:"parameterizedReducer",noPeel:!0}),sortedLastLessIndex:b("BuiltIn","sortedLastLessIndex",{tag:"parameterizedReducer",noPeel:!0}),sortedLastLessEqualIndex:b("BuiltIn","sortedLastLessEqualIndex",{tag:"parameterizedReducer",noPeel:!0}),normalcdf:b("BuiltIn","normalcdf",{argumentTypes:[h,h,h,h],defaultArguments:[ta,La]}),normalpdf:b("BuiltIn","normalpdf",{argumentTypes:[h,h,h],defaultArguments:[ta,La]}),binomcdf:b("BuiltIn","binomcdf",{argumentTypes:[h,h,h,h],defaultArguments:[bc]}),binompdf:b("BuiltIn","binompdf",{argumentTypes:[h,h,h],defaultArguments:[bc]}),poissoncdf:b("BuiltIn","poissoncdf",{argumentTypes:[h,h,h]}),poissonpdf:b("BuiltIn","poissonpdf",{argumentTypes:[h,h]}),geocdf:b("BuiltIn","geocdf",{argumentTypes:[h,h,h]}),geopdf:b("BuiltIn","geopdf",{argumentTypes:[h,h]}),uniformcdf:b("BuiltIn","uniformcdf",{argumentTypes:[h,h,h,h],defaultArguments:[ta,La]}),uniformpdf:b("BuiltIn","uniformpdf",{argumentTypes:[h,h,h],defaultArguments:[ta,La]}),invT:b("BuiltIn","invT",{argumentTypes:[h,h]}),invPoisson:b("BuiltIn","invPoisson",{argumentTypes:[h,h]}),invGeo:b("BuiltIn","invGeo",{argumentTypes:[h,h]}),invBinom:b("BuiltIn","invBinom",{argumentTypes:[h,h,h]}),invUniform:b("BuiltIn","invUniform",{argumentTypes:[h,h,h]}),tpdf:b("BuiltIn","tpdf",{argumentTypes:[h,h]}),tcdf:b("BuiltIn","tcdf",{argumentTypes:[h,h,h,h,h]}),erf:b("BuiltIn","erf"),invNorm:b("BuiltIn","invNorm"),tscore:b("BuiltIn","tscore",{tag:"parameterizedReducer",defaultArguments:[ta]}),normalSample:b("BuiltIn","normalSample",{argumentTypes:[Mt,h,h]}),uniformSample:b("BuiltIn","uniformSample",{argumentTypes:[Mt,h,h]}),tSample:b("BuiltIn","tSample",{argumentTypes:[Mt,h]}),poissonSample:b("BuiltIn","poissonSample",{argumentTypes:[Mt,h]}),binomSample:b("BuiltIn","binomSample",{argumentTypes:[Mt,h,h]}),rgb:b("BuiltIn","rgb",{returnType:Pr,tag:"color"}),hsv:b("BuiltIn","hsv",{returnType:Pr,tag:"color"}),okhsv:b("BuiltIn","okhsv",{returnType:Pr,tag:"color"}),oklab:b("BuiltIn","oklab",{returnType:Pr,tag:"color"}),oklch:b("BuiltIn","oklch",{returnType:Pr,tag:"color"}),tone:b("BuiltIn","tone",{argumentTypes:[h,h],returnType:To,defaultArguments:[bc],minArityExampleArgs:"(440)",maxArityExampleArgs:"(440, 0.5)"}),validateRangeLength:b("BuiltIn","validateRangeLength",{returnType:h,argumentTypes:[ne,ne,h,h],tag:"never-broadcast",noPeel:!0}),validateSampleCount:b("BuiltIn","validateSampleCount",{returnType:h,argumentTypes:[h],noPeel:!0}),repeat:b("BuiltIn","repeat",{argumentTypes:[Ir,h],returnType:e=>Yo(e[0]),tag:"never-broadcast",noPeel:!0}),frequencyList:b("BuiltIn","frequencyList",{argumentTypes:[er,ne],returnType:e=>e[0],tag:"never-broadcast",noPeel:!0}),repeatAssert:b("BuiltIn","repeatAssert",{argumentTypes:[Ir,h],returnType:e=>Yo(e[0]),tag:"never-broadcast",noPeel:!0}),frequencyListAssert:b("BuiltIn","frequencyListAssert",{argumentTypes:[er,ne],returnType:e=>e[0],tag:"never-broadcast",noPeel:!0}),select:b("BuiltIn","select",{argumentTypes:[er,Si],returnType:e=>e[0],tag:"never-broadcast",noPeel:!0}),shuffle:b("BuiltIn","shuffle",{argumentTypes:[Mt,er],returnType:e=>e[1],tag:"never-broadcast"}),sortPerm:b("BuiltIn","sortPerm",{argumentTypes:[ne],returnType:ne,tag:"never-broadcast",noPeel:!0}),complexSortPerm:b("BuiltIn","complexSortPerm",{argumentTypes:[mr],returnType:ne,tag:"never-broadcast",noPeel:!0}),elementsAt:b("BuiltIn","elementsAt",{argumentTypes:[er,ne],returnType:e=>e[0],tag:"never-broadcast",noPeel:!0}),uniquePerm:b("BuiltIn","uniquePerm",{argumentTypes:[er],returnType:ne,tag:"never-broadcast",noPeel:!0}),restriction:b("BuiltIn","restriction",{argumentTypes:[Gr],returnType:xn}),restrictionToBoolean:b("BuiltIn","restrictionToBoolean",{argumentTypes:[xn],returnType:Gr}),complex:b("BuiltIn","complex",{argumentTypes:[h,h],returnType:_}),arg:b("BuiltIn","arg",{argumentTypes:[_],returnType:h}),wirtingerEqualOrWarning:b("BuiltIn","wirtingerEqualOrWarning",{argumentTypes:[_,_],returnType:_,noPeel:!0}),complexDivide:b("BuiltIn","complexDivide",{argumentTypes:[_,_],returnType:_}),peelableCoerceComplexToReal:b("BuiltIn","coerceComplexToReal",{argumentTypes:[_],returnType:h}),peelableCoerceComplexToRealWithTolerance:b("BuiltIn","coerceComplexToReal",{argumentTypes:[_],returnType:h}),coerceComplexToReal:b("BuiltIn","coerceComplexToReal",{argumentTypes:[_],returnType:h}),coerceComplexToRealWithTolerance:b("BuiltIn","coerceComplexToRealWithTolerance",{argumentTypes:[_],returnType:h}),coerceRealToComplex:b("BuiltIn","coerceRealToComplex",{argumentTypes:[h],returnType:_}),coerceMatrixToNumber:b("BuiltIn","coerceMatrixToNumber",{argumentTypes:[le],returnType:h}),complexSqrt:b("BuiltIn","complexSqrt",{argumentTypes:[_],returnType:_}),complexLn:b("BuiltIn","complexLog",{argumentTypes:[_],returnType:_}),complexLogbase:b("BuiltIn","complexLogbase",{argumentTypes:[_,_],returnType:_}),complexLog:b("BuiltIn","complexCommonLog",{argumentTypes:[_],returnType:_}),complexExp:b("BuiltIn","complexExp",{argumentTypes:[_],returnType:_}),complexPow:b("BuiltIn","complexPow",{argumentTypes:[_,_],returnType:_}),complexSin:b("BuiltIn","complexSin",{argumentTypes:[_],returnType:_}),complexCos:b("BuiltIn","complexCos",{argumentTypes:[_],returnType:_}),complexTan:b("BuiltIn","complexTan",{argumentTypes:[_],returnType:_}),complexSinh:b("BuiltIn","complexSinh",{argumentTypes:[_],returnType:_}),complexCosh:b("BuiltIn","complexCosh",{argumentTypes:[_],returnType:_}),complexTanh:b("BuiltIn","complexTanh",{argumentTypes:[_],returnType:_}),complexSec:b("BuiltIn","complexSec",{argumentTypes:[_],returnType:_}),complexCsc:b("BuiltIn","complexCsc",{argumentTypes:[_],returnType:_}),complexCot:b("BuiltIn","complexCot",{argumentTypes:[_],returnType:_}),complexSech:b("BuiltIn","complexSech",{argumentTypes:[_],returnType:_}),complexCsch:b("BuiltIn","complexCsch",{argumentTypes:[_],returnType:_}),complexCoth:b("BuiltIn","complexCoth",{argumentTypes:[_],returnType:_}),complexArcsin:b("BuiltIn","complexAsin",{argumentTypes:[_],returnType:_}),complexArccos:b("BuiltIn","complexAcos",{argumentTypes:[_],returnType:_}),complexArctan:b("BuiltIn","complexAtan",{argumentTypes:[_],returnType:_}),complexArcsec:b("BuiltIn","complexAsec",{argumentTypes:[_],returnType:_}),complexArccsc:b("BuiltIn","complexAcsc",{argumentTypes:[_],returnType:_}),complexArccot:b("BuiltIn","complexAcot",{argumentTypes:[_],returnType:_}),complexArcsinh:b("BuiltIn","complexAsinh",{argumentTypes:[_],returnType:_}),complexArccosh:b("BuiltIn","complexAcosh",{argumentTypes:[_],returnType:_}),complexArctanh:b("BuiltIn","complexAtanh",{argumentTypes:[_],returnType:_}),complexArcsech:b("BuiltIn","complexAsech",{argumentTypes:[_],returnType:_}),complexArccsch:b("BuiltIn","complexAcsch",{argumentTypes:[_],returnType:_}),complexArccoth:b("BuiltIn","complexAcoth",{argumentTypes:[_],returnType:_}),angleVertex:b("BuiltIn","angleVertex",{argumentTypes:[We],returnType:$,noPeel:!0}),angleStart:b("BuiltIn","angleStart",{argumentTypes:[We],returnType:h,noPeel:!0}),directedAngleVertex:b("BuiltIn","angleVertex",{argumentTypes:[Fe],returnType:$,noPeel:!0}),directedAngleStart:b("BuiltIn","angleStart",{argumentTypes:[Fe],returnType:h,noPeel:!0}),chisqIndependenceRowTotals:b("BuiltIn","chisqIndependenceRowTotals",{argumentTypes:[ne,h,h],returnType:ne,tag:"never-broadcast"}),chisqIndependenceColTotals:b("BuiltIn","chisqIndependenceColTotals",{argumentTypes:[ne,h,h],returnType:ne,tag:"never-broadcast"}),chisqIndependenceExpectedValues:b("BuiltIn","chisqIndependenceExpectedValues",{argumentTypes:[ne,ne],returnType:ne,tag:"never-broadcast"}),chisqcdf:b("BuiltIn","chisqcdf",{argumentTypes:[h,h,h],returnType:h}),chisqpdf:b("BuiltIn","chisqpdf",{argumentTypes:[h,h],returnType:h}),invChisq:b("BuiltIn","invChisq",{argumentTypes:[h,h]}),stringsEqual:b("BuiltIn","stringsEqual",{argumentTypes:[vn,vn],returnType:Gr})};var On=class extends ie{constructor(t){super([]),this._symbol=wb(t),this._errorSymbol=this._symbol,this.addDependency(this._symbol)}setInputSpan(t){super.setInputSpan(t),this._errorSymbol=wb(this.getInputString())}getInputSpan(){return this._inputSpan===void 0?Gt(this._symbol,0,this._symbol.length):this._inputSpan}},no=class extends On{constructor(){super(...arguments);this.type="Identifier"}};var Di=class extends ie{constructor(t,r){super(r,{skipRegisterDependencies:!0}),typeof t=="string"&&(t=new no(t)),this._identifier=t,this._symbol=t._symbol,this._errorSymbol=t._errorSymbol==="logbase"?"log":t._errorSymbol,this.registerDependencies()}registerDependencies(){this.addDependency(this._symbol),super.registerDependencies(),Lu(this._symbol)&&this.addDependency("trigAngleMultiplier")}},Eo=class extends Di{constructor(){super(...arguments);this.type="FunctionCall"}};var Ru=class extends ie{slot(t){return this.args[t]}},xc=class extends Ru{constructor(){super(...arguments);this.type="ParenSeq"}};var Tb={pi:new Hr(Math.PI),tau:new Hr(2*Math.PI),e:new Hr(Math.E),trigAngleMultiplier:new Hr(Le(1,1)),ambiguousSupTIsTranspose:new Hr(!1),infty:new Hr(1/0),identityTransformation:new Eo("translation",[new xc([new Hr(0),new Hr(0)])])};var z=class extends st{constructor(r){super();this.type="Error";this.isError=!0;this.isList=!1;this.blocksExport=!1;this._msg=r,this.blocksExport=!0}evaluateOnce(r){return this._msg}getError(){return this._msg}setDependencies(r){return this.addDependencies(r),this}setActionValue(r){this.actionValue=r}allowExport(){return this.blocksExport=!1,this}setCursorContext(r){this.cursorContext=r}getCursorContext(){return this.cursorContext}};var ug=class{constructor(t){this.singleExpression=t.singleExpression,this.limitNumberScale=t.limitNumberScale}isGeometryEnabled(){return!1}is3dProduct(){return!1}is3dPolicy(){return!1}isComplexEnabled(){return!1}areStringsEnabled(){return!1}areMatricesEnabled(){return!1}isRecursionEnabled(){return!1}isRayCastEnabled(){return!1}polygonUnsupportedPreferTriangle(){return!1}areAllScalesLinear(){return!0}assignmentForbidden(t){return t.slice(0,3)!=="ans"}isValidSlider(t){return!1}isValidColorFunction(){return!1}sliderVariables(){return[]}graphingEnabled(){return!1}ansEnabled(){return!this.singleExpression}dimensionVarsEnabled(){return!1}disabledFeatures(){return["Sum","Product","Integral","List","Derivative","Prime","Piecewise","Restriction","Norm","Exponent","PercentOf","Substitution","MatrixAccess","Matrix"]}shouldIncludeFunctionParametersInRandomSeed(){return!0}isNumberScaleLimited(){return this.limitNumberScale}};var tE=!1;function MF(...e){tE&&console.error(...e)}function ir(e){if(tE){let t=e instanceof Error?e:new Error(`${e}`);return MF(t.stack),new z(S("shared-calculator-error-internal-error",{msg:t.message}))}return new z(S("shared-calculator-error-parse-error"))}function Sb(e){return e=ct(e),new z(S("shared-calculator-error-unrecognized-symbol",{symbol:e}))}function rE(){return new z(S("shared-calculator-error-matrix-shortcut-hint"))}function Mb(){return new z(S("shared-calculator-error-unexpected-inequality"))}function nE(){return new z(S("shared-calculator-error-unexpected-equality"))}function oo(e){return e=ct(e),new z(S("shared-calculator-error-unexpected-symbol",{symbol:e}))}function oE(e,{blockExport:t}){let r=new z(S("shared-calculator-error-add-type-error",{symbol1:e[0],symbol2:e[1]}));return t||r.allowExport(),r}function aE(e,{blockExport:t}){let r=new z(S("shared-calculator-error-subtract-type-error",{symbol1:e[0],symbol2:e[1]}));return t||r.allowExport(),r}function iE(e,{blockExport:t}){let r=new z(S("shared-calculator-error-multiply-type-error",{symbol1:e[0],symbol2:e[1]}));return t||r.allowExport(),r}function sE(e,{blockExport:t}){let r=new z(S("shared-calculator-error-divide-type-error",{symbol1:e[0],symbol2:e[1]}));return t||r.allowExport(),r}function cE(e,{blockExport:t}){let r=new z(S("shared-calculator-error-exponent-type-error",{symbol1:e[0],symbol2:e[1]}));return t||r.allowExport(),r}function lE(e,{blockExport:t}){let r=new z(S("shared-calculator-error-negative-type-error",{symbol:e[0]}));return t||r.allowExport(),r}function uE(){return new z(S("shared-calculator-error-ambiguous-conditions"))}function dE(){return new z(S("shared-calculator-error-comma-with-logical-operators"))}function pE(e){return new z(S("shared-calculator-error-logical-operator-requires-conditions",{symbol:e}))}function kb(e){return new z(S("shared-calculator-error-logical-operator-outside-condition",{symbol:e}))}function mE(){return new z(S("shared-calculator-error-matrix-index-too-many-semicolons"))}function gE(e,t,{blockExport:r}){let n;switch(t.length){case 1:n=new z(S("shared-calculator-error-function-type-error-1",{fn:ct(e),arg:t[0]}));break;case 2:n=new z(S("shared-calculator-error-function-type-error-2",{fn:ct(e),arg1:t[0],arg2:t[1]}));break;default:n=new z(S("shared-calculator-error-function-type-error-many",{fn:ct(e)}));break}return r||n.allowExport(),n}function Eb(){return new z(S("shared-calculator-error-dot-lhs-constant-number"))}function hE(e){return new z(S("shared-calculator-error-dot-rhs-property-error",{symbol:ct(e)}))}function fE(){return new z(S("shared-calculator-error-update-rule-non-identifier-lhs",{arrow:"\u2192",example:"a"}))}function Du(e,t,r,n){e=ct(e);let o,a;if(t===1)a=n.includeUsageExample?S("shared-calculator-error-wrong-arity-supplement",{recommendation:n.usageExample||e+"(x)"}):"",r>1?o=S("shared-calculator-error-wrong-arity-single-arg-too-many",{dependency:e,supplement:a}):o=S("shared-calculator-error-wrong-arity-single-arg-too-few",{dependency:e,supplement:a});else{let i=[],s=n.usageExample;if(!s){for(let c=0;c<t;c++)i[c]=c+1;s=ct(e)+"("+i.join(", ")+")"}a=n.includeUsageExample?S("shared-calculator-error-wrong-arity-supplement",{recommendation:s}):"",o=S("shared-calculator-error-wrong-arity-many-arg",{dependency:e,assignment_arity:t,supplement:a})}return new z(o)}function Cb(){return new z(S("shared-calculator-error-primed-function-arity"))}function Ib(e){return e=ct(e),new z(S("shared-calculator-error-bad-implicit-call",{symbol:e}))}function yE(e,t){return new z(S("shared-calculator-error-adjacent-numbers",{left:e,right:t}))}function Ab(e){return new z(S("shared-calculator-error-adjacent-mixed-number",{mixedNumber:e}))}function bE(){return new z(S("shared-calculator-error-token-with-subscript"))}function Pb(e){return e=ct(e),e==="%"&&(e="% of"),new z(S("shared-calculator-error-binary-operator-missing-operand",{symbol:e}))}function xE(e){return e=ct(e),new z(S("shared-calculator-error-unary-operator-missing-left",{symbol:e}))}function vE(e){return e=ct(e),new z(S("shared-calculator-error-unary-operator-missing-right",{symbol:e}))}function wE(){return new z(S("shared-calculator-error-fraction-missing-numerator"))}function TE(){return new z(S("shared-calculator-error-fraction-missing-denominator"))}function SE(){return new z(S("shared-calculator-error-fraction-empty"))}function Nb(){return new z(S("shared-calculator-error-empty-subscript"))}function ME(){return new z(S("shared-calculator-error-empty-superscript"))}function kE(e){return e=ct(e),new z(S("shared-calculator-error-invalid-subscript",{symbol:e}))}function EE(){return new z(S("shared-calculator-error-invalid-operator-name"))}function CE(){return new z(S("shared-calculator-error-unexpected-subscript"))}function IE(){return new z(S("shared-calculator-error-superscript-with-prime"))}function _b(){return new z(S("shared-calculator-error-unexpected-prime"))}function Lb(){return new z(S("shared-calculator-error-prime-without-paren"))}function AE(){return new z(S("shared-calculator-error-empty-radical"))}function PE(){return new z(S("shared-calculator-error-empty-radical-index"))}function NE(){return new z(S("shared-calculator-error-empty-matrix-literal"))}function _E(){return new z(S("shared-calculator-error-empty-paren"))}function LE(){return new z(S("shared-calculator-error-empty-square-bracket"))}function RE(){return new z(S("shared-calculator-error-empty-pipe"))}function DE(e){let t=e+"^2",r=e+"^-1";return new z(S("shared-calculator-error-bad-trig-exponent",{form1:t,form2:r}))}function qE(e){let t=e+"^2";return new z(S("shared-calculator-error-bad-log-exponent",{form:t}))}function OE(){return new z(S("shared-calculator-error-piecewise-missing-condition"))}function FE(){return new z(S("shared-calculator-error-piecewise-part-missing-condition"))}function BE(){return new z(S("shared-calculator-error-colon-missing-condition"))}function VE(){let e=new z(S("shared-calculator-error-blank-expression"));return e.silent=!0,e}function $E(e){return e=ct(e),new z(S("shared-calculator-error-function-not-defined",{dependency:e}))}function GE(e){return e=ct(e),new z(S("shared-calculator-error-cannot-subscript",{symbol:e}))}function UE(e){if(e=e.map(ct),e.length===0)return new z(S("shared-calculator-error-too-many-variables-no-symbols"));let t=e.pop()||"";return e.length>0?new z(S("shared-calculator-error-too-many-variables-many-symbols",{variables:e.join("', '"),lastVariable:t})):new z(S("shared-calculator-error-too-many-variables-one-symbol",{variable:t}))}function zE(e){return e=ct(e),new z(S("shared-calculator-error-variable-as-function",{dependency:e}))}function HE(){return new z(S("shared-calculator-error-invalid-half-empty-range"))}function KE(){return new z(S("shared-calculator-error-sum-missing-bound"))}function WE(){return new z(S("shared-calculator-error-product-missing-bound"))}function jE(){return new z(S("shared-calculator-error-incorrect-sum-lower-bound"))}function QE(){return new z(S("shared-calculator-error-incorrect-product-lower-bound"))}function YE(){return new z(S("shared-calculator-error-integral-missing-bound"))}function XE(){return new z(S("shared-calculator-error-integral-missing-differential"))}function ZE(){return new z(S("shared-calculator-error-differential-with-superscript"))}function JE(){return new z(S("shared-calculator-error-sum-missing-body"))}function eC(){return new z(S("shared-calculator-error-product-missing-body"))}function tC(){return new z(S("shared-calculator-error-integral-missing-body"))}function rC(){return new z(S("shared-calculator-error-derivative-missing-body"))}function nC(e,t){return e=ct(e),t=ct(t),new z(S("shared-calculator-error-mismatched-braces",{symbol1:e,symbol2:t}))}function oC(){return new z(S("shared-calculator-error-percent-missing-of"))}function vc(e){return new z(S("shared-calculator-error-bad-symbol-context",{symbol:ct(e)}))}function Rb(){return new z(S("shared-calculator-error-write-integral",{command:"integral",symbol:"\u222B"}))}function kF(){return new z(S("shared-calculator-error-polygon-unsupported-in-3d"))}function EF(e){return new z(S("shared-calculator-error-function-only-works-in-complex",{symbol:ct(e)}))}function dg(e,t){return t!=null&&t.is3dPolicy()&&e==="polygon"?kF():!!t&&!(t!=null&&t.isGeometryEnabled())&&!(t instanceof ug)&&!t.isComplexEnabled()&&ap.indexOf(e)!==-1?EF(e):new z(S("shared-calculator-error-function-unsupported",{symbol:ct(e)}))}function aC(){return new z(S("shared-calculator-error-function-definition-unsupported"))}function qu(){return new z(S("shared-calculator-error-equations-unsupported"))}function qi(){return new z(S("shared-calculator-error-inequalities-unsupported"))}function iC(){return new z(S("shared-calculator-error-regressions-unsupported"))}function sC(){return new z(S("shared-calculator-error-points-unsupported"))}function Ne(){return new z(S("shared-calculator-error-feature-unavailable"))}function Db(){return new z(S("basic-calculator-error-fractions-unavailable"))}function cC(){return new z(S("basic-calculator-error-parentheses-unavailable"))}function lC(){return new z(S("shared-calculator-error-non-square-determinant"))}function uC(){return new z(S("shared-calculator-error-non-square-trace"))}function dC(){return new z(S("shared-calculator-error-non-square-inverse"))}function qb(){return new z(S("shared-calculator-error-non-singular-inverse"))}function pC(){return new z(S("shared-calculator-error-matrix-assignment"))}function mC(){return new z(S("shared-calculator-error-matrix-add-dimensions"))}function gC(){return new z(S("shared-calculator-error-matrix-subtract-dimensions"))}function hC(){return new z(S("shared-calculator-error-matrix-multiply-dimensions"))}function fC(e,t,r){return new z(S("shared-calculator-error-matrix-point-dimensions",{rows:e,cols:t,point:dc(r,{specifyPointDimensions:!0})}))}function Ob(){return new z(S("shared-calculator-error-matrix-fractional-power"))}function Fb(){return new z(S("shared-calculator-error-matrix-power-dimensions"))}function yC(e){return new z(S("shared-calculator-error-matrix-element-type-error",{arg:e[0]}))}function bC(e){return new z(S("shared-calculator-error-matrix-invalid-variable",{symbol:ct(e)}))}function Bb(){return new z(S("shared-calculator-error-incorrect-list-comprehension-input"))}function xC(){return new z(S("shared-calculator-error-substitution-invalid-assignments"))}function Vb(){return new z(S("shared-calculator-error-substitution-nested"))}function Oi(e){return new z(S("shared-calculator-error-substitution-ambiguous-comma",{operation:e}))}function vC(){return new z(S("shared-calculator-error-comprehension-semicolon-comma-mix"))}function Ou(e){return new z(S("shared-calculator-error-invalid-interval-comprehension-invalid-bound",{identifier:e}))}function $b(){return new z(S("shared-calculator-error-substitution-unsupported-interval"))}var wC=1;function CF(){return wC+=1,wC}var Fu=class e{constructor(t){this.map=new Map;this.dependencyOrder=void 0;this.frameContext=void 0;this.moduleID=void 0;this.lastChanged=new Map;this.isMarkedCacheAnchor=!1;this.regressionParameterSymbols=new Set;this.parent=t}markPersistentCacheAnchor(){this.isMarkedCacheAnchor=!0}isCacheAnchor(){return this.isMarkedCacheAnchor||this.parent===void 0}getParent(){return this.parent}symbolLastChanged(t){let r=0,n=this;do{let o=n.lastChanged.get(t);o!==void 0&&o>r&&(r=o),n=n.parent}while(n!==void 0);return r}*chainRegressionParameterSymbols(){let t=this;do yield*t.regressionParameterSymbols,t=t.parent;while(t!==void 0)}get(t){let r=this;do{let n=r.map.get(t);if(n!==void 0)return n;if(r.map.has(t))return;r=r.parent}while(r!==void 0)}has(t){let r=this;do{if(r.map.has(t))return!0;r=r.parent}while(r!==void 0);return!1}hasOwn(t){return this.map.has(t)}markSymbolRevised(t){this.lastChanged.set(t,CF())}set(t,r){this.markSymbolRevised(t),r!==void 0&&r.type==="RegressionParameter"?this.regressionParameterSymbols.add(t):this.regressionParameterSymbols.delete(t),this.map.set(t,r)}delete(t){this.markSymbolRevised(t),this.regressionParameterSymbols.delete(t),this.map.delete(t)}ownKeys(){return this.map.keys()}ownEntries(){return this.map.entries()}*allEntries(){let t=new Set,r=this;do{for(let n of r.map)t.has(n[0])||(t.add(n[0]),yield n);r=r.parent}while(r!==void 0)}setParent(t){this.parent=t}setDependencyOrder(t){this.dependencyOrder=t}getDependencyOrder(){let t=this;do{if(t.dependencyOrder)return t.dependencyOrder;t=t.parent}while(t!==void 0);throw ir("Missing dependency order.")}setFrameContext(t){this.frameContext=t}getFrameContext(){let t=this;do{if(t.frameContext)return t.frameContext;t=t.parent}while(t!==void 0);throw ir("Missing frame context.")}setModuleID(t){this.moduleID=t}getModuleID(){let t=this;do{if(t.moduleID)return t.moduleID;t=t.parent}while(t!==void 0);throw ir("Missing module ID.")}childFrame(t){let r=new e(this);if(t)for(let n of Qr(t))r.set(n,t[n]);return r}snapshot(){return new Map(this.map)}};var wc=class extends st{constructor(){super(...arguments);this.type="Placeholder"}};var Fi=new Fu;for(let e of Qr(Tb))Fi.set(e,Tb[e]);for(let e of Qr(_u))Fi.set(e,new wc);for(let e of Qr(vb))Fi.set(e,new wc);var TC=[Gr,xn,h,_,$,fe,gr,ar,So,Mo,Xo,Pr,ze,wo,Xe,$e,Oe,Re,rt,nt,We,Fe,Ce,To,Ur,nn,zr,Kt,Wt,jt,tr,rr,nr,or],Ub=[...TC,le,vn],GJ=new Set(Ub),UJ=new Set(TC),zJ=Dt.of(Ub.filter(e=>Ti(e))),HJ=Dt.of(Ub.filter(e=>!Ti(e)));var hg={};md(hg,{add:()=>RC,det:()=>$C,div:()=>qC,inv:()=>VF,isMatrix:()=>gg,leftScale:()=>qF,mul:()=>OC,mulPoint:()=>FC,nadd:()=>_F,ndiv:()=>RF,neg:()=>LC,nmul:()=>DF,nneg:()=>NF,npow:()=>OF,nsqrt:()=>BF,nsub:()=>LF,pow:()=>VC,powChecked:()=>FF,rank:()=>zC,rightScale:()=>BC,rref:()=>UC,sub:()=>DC,trace:()=>GC,transpose:()=>$F,zeros:()=>Yb});var IF=Math.pow(2,-52);function zb(e){let t=[];for(let r of e)t.push(r.slice());return t}function Hb(e){let{numRows:t,numCols:r}=_r(e),n=[];for(let o=0;o<r;o++)n.push([]);for(let o=0;o<t;o++)for(let a=0;a<r;a++)n[a].push(e[o][a]);return n}function _r(e){let t=e.length,r=t>0?e[0].length:0;return{numRows:t,numCols:r}}function Co(e){let{numRows:t,numCols:r}=_r(e);return t===r}function Bu(e,t){let r=_r(e),n=_r(t);return r.numCols===n.numCols&&r.numRows===n.numRows}function Vu(e){if(!Co(e))return!0;let t=we(jb(e));return!isFinite(t)||t===0}function pg(){throw new Error("Matrix dimension mismatch")}function Kb(){throw new Error("Expected square matrix")}function MC(e,t){Bu(e,t)||pg();let r=[];for(let n=0;n<e.length;n++){let o=[];for(let a=0;a<e[n].length;a++)o.push(Ln(e[n][a],t[n][a]));r.push(o)}return r}function kC(e,t){Bu(e,t)||pg();let r=[];for(let n=0;n<e.length;n++){let o=[];for(let a=0;a<e[n].length;a++)o.push(Aa(e[n][a],t[n][a]));r.push(o)}return r}function Tc(e,t){let r=_r(e),n=_r(t);r.numCols!==n.numRows&&pg();let o=[];for(let a=0;a<r.numRows;a++){let i=[];for(let s=0;s<n.numCols;s++){let c=Le(0,1);for(let l=0;l<e[a].length;l++)c=Ln(c,Rn(e[a][l],t[l][s]));i.push(c)}o.push(i)}return o}function EC(e,t){let{numRows:r,numCols:n}=_r(e);(r!==t.length||n!==t.length)&&pg();let o=[];for(let a=0;a<r;a++){let i=Le(0,1);for(let s=0;s<n;s++)i=Ln(i,Rn(e[a][s],t[s]));o.push(i)}return o}function Wb(e,t){if(Co(e)||Kb(),t=we(t),!Number.isInteger(t))throw new Error("A matrix can only be raised to integer powers");let r=AF(_r(e).numCols);if(t===0)return r;t<0&&(t=-t,e=Qb(e));let n=r;for(;t>1;)t%2===1?(n=Tc(e,n),e=Tc(e,e),t=(t-1)/2):(e=Tc(e,e),t=t/2);return Tc(e,n)}function Sc(e,t){let r=[];for(let n of e){let o=[];for(let a of n)o.push(Rn(a,t));r.push(o)}return r}function CC(e,t){let r=[];for(let n of e){let o=[];for(let a of n)o.push(Zn(a,t));r.push(o)}return r}function IC(e){let t=[];for(let r of e){let n=[];for(let o of r)n.push(Xn(o));t.push(n)}return t}function jb(e){let{determinant:t}=mg(zb(e));return t}function AC(e){Co(e)||Kb();let{numRows:t}=_r(e),r=Le(0,1);for(let n=0;n<t;n++)r=Ln(r,e[n][n]);return r}function Qb(e){if(Co(e)||Kb(),Vu(e))throw new Error("Cannot invert a singular matrix");let{numRows:t,numCols:r}=_r(e),n=[];for(let a=0;a<t;a++){let i=e[a].slice();for(let s=0;s<r;s++)i.push(Le(a===s?1:0,1));n.push(i)}mg(n);let o=[];for(let a of n)o.push(a.slice(r));return o}function AF(e){let t=[];for(let r=0;r<e;r++){let n=[];for(let o=0;o<e;o++)n.push(Le(r===o?1:0,1));t.push(n)}return t}function PC(e){return mg(zb(e)).rank}function NC(e){let t=zb(e);return mg(t),t}function PF(e){let t=0;for(let r of e)for(let n of r){let o=Math.abs(we(n));if(!isFinite(o))return NaN;o>t&&(t=o)}return t}function SC(e){for(let t=0;t<e.length;t++)for(let r=0;r<e[t].length;r++)e[t][r]=NaN}function mg(e){let{numRows:t,numCols:r}=_r(e),n=PF(e);if(!isFinite(n))return SC(e),{determinant:NaN,rank:NaN};let o=Math.max(t,r)*n*IF,a=Le(1,1),i=0,s=0;for(;i<t&&s<r;){let c=i,l=Math.abs(we(e[i][s]));for(let y=i+1;y<t;y++){let x=Math.abs(we(e[y][s]));(!isFinite(x)||x>l)&&(l=x,c=y)}if(!isFinite(l))return SC(e),{determinant:NaN,rank:NaN};if(l===0){a=Le(0,1),s+=1;continue}if(!St(e[c][s])&&l<o){for(let y=i;y<t;y++)e[y][s]=0;a=0,s+=1;continue}if(c!==i){a=Xn(a);let y=e[i];e[i]=e[c],e[c]=y}for(let y=0;y<t;y++){if(y===i)continue;let x=Zn(e[y][s],e[i][s]);e[y][s]=Le(0,1);for(let M=s+1;M<r;M++)e[y][M]=Aa(e[y][M],Rn(x,e[i][M]))}let p=e[i][s];a=Rn(a,p),e[i][s]=Le(1,1);for(let y=s+1;y<r;y++)e[i][y]=Zn(e[i][y],p);i+=1,s+=1}return{rank:i,determinant:i===t&&i===r?a:Le(0,1)}}function Yb(e,t){let r=we(e),n=we(t),o=[];for(let a=0;a<r;a++){let i=[];for(let s=0;s<n;s++)i.push(Le(0,1));o.push(i)}return o}var NF=Xn,LC=IC,_F=Ln;function RC(e,t){if(!Bu(e,t))throw mC();return MC(e,t)}var LF=Aa;function DC(e,t){if(!Bu(e,t))throw gC();return kC(e,t)}var RF=Zn,qC=CC,DF=Rn;function gg(e){return Array.isArray(e)}function Xb(e){let{numRows:t,numCols:r}=_r(e);return t===1&&r===1}function OC(e,t){if(_r(e).numCols!==_r(t).numRows){if(Xb(e))return Sc(t,e[0][0]);if(Xb(t))return Sc(e,t[0][0]);throw hC()}return Tc(e,t)}function FC(e,t){let{numRows:r,numCols:n}=_r(e);if(r!==t.length||n!==t.length){if(Xb(e))return t.map(o=>Rn(o,e[0][0]));throw fC(r,n,t.length===3?fe:$)}return EC(e,t)}var BC=Sc;function qF(e,t){return Sc(t,e)}var OF=R0;function VC(e,t){if(t=we(t),!Number.isInteger(t))throw Ob();if(!Co(e))throw Fb();return t<0&&Vu(e)?Sc(e,NaN):Wb(e,t)}function FF(e,t){if(t=we(t),!Number.isInteger(t))throw Ob();if(!Co(e))throw Fb();if(t<0&&Vu(e))throw qb();return Wb(e,t)}var BF=D0;function VF(e){if(!Co(e))throw dC();if(Vu(e))throw qb();return Qb(e)}function $C(e){if(!Co(e))throw lC();return jb(e)}function GC(e){if(!Co(e))throw uC();return AC(e)}var $F=Hb,UC=NC,zC=PC;var{PI:UF,tan:zF,hypot:HF}=Math;var KF=50/8,WF=950,jF=134e3;var QF=KF*zF(UF/180*28),YF=WF*HF(1,QF),YJ=YF*(jF/4);var aee=(Math.sqrt(5)-1)/2;var ZF=3.154019550531224,HC=Math.pow(2,-13),KC=HC*HC,hee=KC*KC;var WC=32,JF=[],Zb=[];function e2(e,t){for(let r=WC;r>0;r--){let n=ZF/WC*r,o=Math.sinh(n),a=Math.cosh(Math.PI/2*o),i=1/(Math.exp(Math.PI/2*o)*a),s=Math.cosh(n)/(a*a);e.push(i),t.push(s)}}e2(JF,Zb);var jC=0;for(let e=0;e<Zb.length;e++)jC+=Zb[e];var fee=1/(1+2*jC);var Mc=1,on=2,fg=3,$u=4;function de(e,t,r){return{l:e,u:t,deco:r}}function ra(e,t){return{l:e,u:t}}var yg={};md(yg,{ANY_NUMBER:()=>n2,abs:()=>ex,add:()=>nI,and:()=>v2,cos:()=>S2,dContinuous:()=>$u,dDefined:()=>fg,dNaN:()=>Mc,dUnionNaN:()=>on,div:()=>aI,equal:()=>w2,greater:()=>y2,greaterEqual:()=>b2,guardValue:()=>c2,hypot:()=>m2,ibool:()=>ao,ifloat:()=>Ra,less:()=>h2,lessEqual:()=>f2,max:()=>C2,min:()=>E2,mod:()=>k2,mul:()=>tx,neg:()=>rI,or:()=>x2,pow:()=>d2,sin:()=>iI,sqrt:()=>p2,square:()=>g2,sub:()=>oI,ternary:()=>T2});var{min:Bn,max:an,PI:Gu,round:r2,floor:xg}=Math,tI=de(0,0,1),n2=de(-1/0,1/0,2),QC=340282347e30,YC=2**-126;function XC(e){return e<-QC?-1/0:e>QC?1/0:e}function o2(e){let t=XC(e.l),r=XC(e.u);return t===e.l&&r===e.u?e:de(t,r,Io(e.deco))}function a2(e){return e.l>0&&e.l<YC?de(0,e.u,e.deco):e.u<0&&e.u>-YC?de(e.l,0,e.deco):e}function i2(e){return a2(o2(e))}function s2(e){return typeof e=="object"&&e!==null&&"deco"in e}function c2(e){return s2(e)?i2(e):e}function io(e,t){return Bn(e,t)}function Io(e){return io(e,2)}function Fn(e){return io(e,3)}function Ra(e,t){return de(e,e,t)}function ao(e){return ra(e,e)}function rI(e){return de(-e.u,-e.l,e.deco)}function nI(e,t){let r=io(e.deco,t.deco);return e.u===1/0&&t.l===-1/0||e.l===-1/0&&t.u===1/0?de(-1/0,1/0,Io(r)):de(e.l+t.l,e.u+t.u,r)}function oI(e,t){let r=io(e.deco,t.deco);return e.u===1/0&&t.u===1/0||e.l===-1/0&&t.l===-1/0?de(-1/0,1/0,Io(r)):de(e.l-t.u,e.u-t.l,r)}function Jb(e,t,r,n,o){return de(Bn(e,Bn(t,Bn(r,n))),an(e,an(t,an(r,n))),o)}function ZC(e){return e.l<=0&&e.u>=0}function JC(e){return e.l===-1/0||e.u===1/0}function tx(e,t){let r=io(e.deco,t.deco);return ZC(e)&&JC(t)||ZC(t)&&JC(e)?de(-1/0,1/0,Io(r)):Jb(e.l*t.l,e.l*t.u,e.u*t.l,e.u*t.u,r)}function l2(e){return e.l>0||e.u<0?de(1/e.u,1/e.l,e.deco):e.l<0&&e.u>0?de(-1/0,1/0,Fn(e.deco)):e.u==0?de(-1/0,1/0,Fn(e.deco)):de(1/e.u,1/0,e.deco)}function aI(e,t){return tx(e,l2(t))}function u2(e){return e-xg(e)}function eI(e,t){return e-t*xg(e/t)}function bg(e){return e>=3?4:e}function d2(e,t){let r=io(t.deco,e.deco);if(e.l<0&&t.l==t.u&&u2(t.l)==0){let n=t.l;return n==0?Ra(1,bg(r)):n>0?eI(n,2)==1?de(-Math.pow(-e.l,n),Math.pow(Math.abs(e.u),n)*Math.sign(e.u),r):e.u>0?de(0,Math.pow(an(-e.l,e.u),n),r):de(Math.pow(-e.u,n),Math.pow(-e.l,n),r):eI(n,2)==1?e.u>0?de(-1/0,1/0,r):e.u==0?de(-1/0,-Math.pow(-e.l,n),r):de(-Math.pow(-e.u,n),-Math.pow(-e.l,n),r):e.u>0?de(Bn(Math.pow(-e.l,n),Math.pow(e.u,n)),1/0,r):e.u==0?de(Math.pow(-e.l,n),1/0,r):de(Math.pow(-e.l,n),Math.pow(-e.u,n),r)}if(e.u<0)return tI;if(e.l<0&&(r=Io(e.deco)),e.u==0)return t.l>0?Ra(0,bg(r)):t.l==0?t.u>0?de(0,1,Fn(r)):Ra(1,bg(r)):t.u>0?de(0,1/0,Fn(r)):t.u==0?de(1,1/0,Fn(r)):Ra(1/0,bg(r));if(e.l<=0){if(t.u<=0)return t.l==0?Ra(1,r):e.u<1?de(Math.pow(e.u,t.u),1/0,Fn(r)):de(Math.pow(e.u,t.l),1/0,Fn(r));if(t.l<0)return de(0,1/0,Fn(r));if(t.l==0)return de(0,an(1,Math.pow(e.u,t.u)),Fn(r));if(e.l<0)return Jb(0,0,Math.pow(e.u,t.l),Math.pow(e.u,t.u),r)}return Jb(Math.pow(e.l,t.l),Math.pow(e.l,t.u),Math.pow(e.u,t.l),Math.pow(e.u,t.u),r)}function p2(e){return e.u<0?tI:e.u==0?Ra(0,e.l==0?e.deco:Io(e.deco)):e.l<0?de(0,Math.sqrt(e.u),Io(e.deco)):de(Math.sqrt(e.l),Math.sqrt(e.u),e.deco)}function ex(e){return e.l>=0?e:e.u<=0?rI(e):de(0,an(-e.l,e.u),e.deco)}function m2(e,t){let r=ex(e),n=ex(t);return de(Math.hypot(r.l,n.l),Math.hypot(r.u,n.u),io(e.deco,t.deco))}function g2(e){if(e.u<=0)return de(e.u*e.u,e.l*e.l,e.deco);if(e.l>=0)return de(e.l*e.l,e.u*e.u,e.deco);let t=an(-e.l,e.u);return de(0,t*t,e.deco)}function h2(e,t){return e.l>=t.u?ao(!1):e.u<t.l&&e.deco>2&&t.deco>2?ao(!0):ra(!1,!0)}function f2(e,t){return e.l>t.u?ao(!1):e.u<=t.l&&e.deco>2&&t.deco>2?ao(!0):ra(!1,!0)}function y2(e,t){return e.u<=t.l?ao(!1):e.l>t.u&&e.deco>2&&t.deco>2?ao(!0):ra(!1,!0)}function b2(e,t){return e.u<t.l?ao(!1):e.l>=t.u&&e.deco>2&&t.deco>2?ao(!0):ra(!1,!0)}function x2(e,t){return ra(e.l||t.l,e.u||t.u)}function v2(e,t){return ra(e.l&&t.l,e.u&&t.u)}function w2(e,t){return e.l==e.u&&e.u==t.l&&t.l==t.u&&e.deco>2&&t.deco>2?ao(!0):e.l<=t.u&&t.l<=e.u?ra(!1,!0):ao(!1)}function T2(e,t,r){if(e.l)return t;if(!e.u)return r;if(t.deco==1)return de(r.l,r.u,Io(r.deco));if(r.deco==1)return de(t.l,t.u,Io(t.deco));{let n=Fn(io(t.deco,r.deco));return de(Bn(t.l,r.l),an(t.u,r.u),n)}}function iI(e){let t=Gu*r2(e.l/Gu)+Gu*1.5;if(t<e.u)return de(-1,1,e.deco);t-=Gu;let r=Math.sin(e.l),n=Math.sin(e.u),o=de(Bn(r,n),an(r,n),e.deco);if(t<e.u){let a=Math.sin(t);return de(Bn(o.l,a),an(o.u,a),e.deco)}return o}function S2(e){return iI(nI(e,Ra(Gu/2,4)))}function M2(e){let t=xg(e.l),r=xg(e.u);return de(t,r,t==r?e.deco:Fn(e.deco))}function k2(e,t){let r=Bn(0,t.l),n=an(0,t.u);if(t.l<=0&&t.u>=0||!isFinite(e.l)||!isFinite(e.u)||!isFinite(t.l)||!isFinite(t.u))return de(r,n,Io(io(e.deco,t.deco)));let o=oI(e,tx(t,M2(aI(e,t)))),a=an(o.l,r),i=Bn(o.u,n);return a<=i?de(a,i,o.deco):de(r,n,Fn(o.deco))}function E2(e,t){return de(Bn(e.l,t.l),Bn(e.u,t.u),io(e.deco,t.deco))}function C2(e,t){return de(an(e.l,t.l),an(e.u,t.u),io(e.deco,t.deco))}var{cosh:cte,sinh:lte,tanh:ute,acosh:dte,asinh:pte,atanh:mte,expm1:gte,log1p:hte,sign:fte,hypot:yte}=Math;var vg=class vg{constructor(t=vg.defaultLimit,r){this.currentSize=0;this.limit=t,this.computeSize=r,this.cache=new Map}get(t){let r=this.cache.get(t);return r&&(this.cache.delete(t),this.cache.set(t,r)),r==null?void 0:r.value}set(t,r){let n=this.computeSize?this.computeSize(r):1;if(this.currentSize+n>=this.limit){let o=this.cache.keys().next().value;o&&this.cache.delete(o)}this.cache.set(t,{size:n,value:r})}};vg.defaultLimit=1e5;var sI=vg,A2=1e4,bte=A2*2;function Gb(e,t,r){return Math.max(t,Math.min(r,e))}var xte=Math.pow(2,27)+1;var vte=[1/6,-1/30,1/42,-1/30,5/66,-691/2730,7/6,-3617/510,43867/798,-174611/330,854513/138,-236364091/2730,8553103/6,-23749461029/870];var wte=1/Math.PI;var Tte=[1/4,1/96,-1/384,-1/10240,19/368640,79/61931520,-55/49545216,-2339/118908518400,11813/475634073600,677/1993133260800,-2117/3720515420160];var Ste=Math.sqrt(Number.MAX_VALUE)/4;var P2=/\.?0+$/,N2=/\.?0+e/;function cI(e){return e.indexOf(".")===-1?e:e.indexOf("e")!==-1?e.replace(N2,"e"):e.replace(P2,"")}function _2(e){let t=e.match(/e([+\-]?\d+)/);return t?parseInt(t[1],10):void 0}var L2={zeroCutoff:0,smallCutoff:.001,bigCutoff:1e6,digits:10,displayAsFraction:!1,addEllipses:!1,alwaysEmitImaginary:!1,spaceConstrained:!1},lI={smallCutoff:1e-6,bigCutoff:1e9,digits:12},Ote={...lI,smallCutoff:1e-4,bigCutoff:1e6,digits:9,scientificNotationDigits:4,spaceConstrained:!0},R2={...lI,smallCutoff:.001,bigCutoff:1e6,digits:4,spaceConstrained:!0};function uI(e){return 1e6/Math.sqrt(Math.abs(e))}function wg(e){let t=uI(e);if(t<1||t>1e12)return!1;let{n:r,d:n}=wi(e,t);return n===1?!1:e===e+Math.pow(2,-3)*Math.abs(r/n-e)}function dI(e,t){var L;let{zeroCutoff:r,smallCutoff:n,bigCutoff:o,digits:a,displayAsFraction:i,addEllipses:s,spaceConstrained:c}={...L2,...t},l=(L=t==null?void 0:t.scientificNotationDigits)!=null?L:a-2;if(n<=0)throw new Error("smallCutoff must be positive");if(!isFinite(o))throw new Error("bigCutoff must be finite");if(a+Math.ceil(-Math.log10(n))>101)throw new Error("smallCutoff is too small for the requested number of digits");if(isNaN(e)||!isFinite(e))return{type:"undefined"};if(e===0||Math.abs(e)<r)return{type:"decimal",value:"0"};let y=cI(e.toExponential(l)).match(/([\d\.\-]+)e\+?([\d\-]+)/);if(!y)return{type:"undefined"};let x=parseInt(y[2],10);if(wg(e)&&i){let T=wi(e,uI(e));return{type:"fraction",numerator:T.n.toString(),denominator:T.d.toString()}}else{if(Math.abs(e)>o||Math.abs(e)<n)return{type:"scientific",mantissa:y[1],exponent:y[2]};{let T=Gb(c&&x<0?a+x:a,1,100),w=e.toPrecision(T),k=_2(w);if(k!==void 0){if(k>=T)return{type:"scientific",mantissa:y[1],exponent:y[2]};w=e.toFixed(Math.max(0,T-k-1))}return w=cI(w),e!==Number(w)&&s&&(w+="..."),{type:"decimal",value:w}}}}function D2(e,t){let r=dI(e,t);switch(r.type){case"undefined":return"undefined";case"decimal":return r.value;case"scientific":return r.mantissa+" * 10^"+r.exponent;case"fraction":return r.denominator==="1"?r.numerator:`${r.numerator}/${r.denominator}`;default:return r}}function kc(e,t){let r=dI(e,t);switch(r.type){case"undefined":return"undefined";case"decimal":return r.value;case"scientific":return r.mantissa+"\\times10^{"+r.exponent+"}";case"fraction":return r.denominator==="1"?r.numerator:r.numerator[0]==="-"?`-\\frac{${r.numerator.slice(1)}}{${r.denominator}}`:`\\frac{${r.numerator}}{${r.denominator}}`;default:return r}}function ct(e){if(e.startsWith("_base_case")){let[r,n,o]=e.split(":"),a=[];for(let i of o.split(",")){let s=parseFloat(i);isNaN(s)?a.push(ct(i)):a.push(D2(s))}return`${ct(n)}(${a.join(",")})`}e=e.replace("\\","");let t={alpha:"\u03B1",beta:"\u03B2",gamma:"\u03B3",delta:"\u03B4",epsilon:"\u03F5",varepsilon:"\u03B5",zeta:"\u03B6",eta:"\u03B7",theta:"\u03B8",vartheta:"\u03D1",iota:"\u03B9",kappa:"\u03BA",varkappa:"\u03F0",lambda:"\u03BB",mu:"\u03BC",xi:"\u03BE",pi:"\u03C0",varpi:"\u03D6",rho:"\u03C1",varrho:"\u03F1",sigma:"\u03C3",varsigma:"\u03C2",tau:"\u03C4",phi:"\u03D5",varphi:"\u03C6",chi:"\u03C7",psi:"\u03C8",omega:"\u03C9",Gamma:"\u0393",Delta:"\u0394",Theta:"\u0398",Lambda:"\u039B",Xi:"\u039E",Pi:"\u03A0",Sigma:"\u03A3",Phi:"\u03A6",Psi:"\u03A8",Omega:"\u03A9",div:"\xF7",cdot:"\u22C5",times:"\xD7",lt:"<",gt:">",le:"\u2264",ge:"\u2265",sim:"\u223C",ldots:"\u2026",prime:"\u2032",approx:"\u2248",to:"\u2192","->":"\u2192","<=":"\u2264",">=":"\u2265"};return t.hasOwnProperty(e)?t[e]:e}function wb(e){let t=e.match(/\\token(?:Name)?\{(\d+)\}/);return t?`$${t[1]}`:(e=e.replace(/\\operatorname\{(.*)\}/,"$1"),e.replace(/[{}\\]/g,""))}var Ec=class extends K{template(){return u(qr,{tooltip:this.props.error,sticky:()=>{var t,r,n;return(n=(r=(t=this.props).sticky)==null?void 0:r.call(t))!=null?n:!0},gravity:this.props.gravity,additionalClass:this.const("dcg-tooltipped-error-container"),children:u("div",{class:()=>{var t,r,n,o,a,i;return{"dcg-tooltipped-error":!0,"dcg-small":((r=(t=this.props).size)==null?void 0:r.call(t))==="small","dcg-medium-small":((o=(n=this.props).size)==null?void 0:o.call(n))==="medium-small","dcg-white":this.props.isWhite&&this.props.isWhite(),"dcg-tooltipped-error__instant":(i=(a=this.props).instant)==null?void 0:i.call(a)}},children:u("i",{class:"dcg-icon-error","aria-hidden":"true"})})})}};var One=Le(0,1),Fne=Le(1,1);function K2(e){return e.type==="IRExpression"||e instanceof Da}function ix(e){return K2(e)&&e.isList}function fI(e){let t=1/0;for(let r=0;r<e.length;r++)(e[r].isList||e[r].isBroadcast)&&(t=Math.min(t,e[r].length));return t}var Da=class extends ie{constructor(r){super(r);this.isList=!0;this.length=r.length}elementAt(r){if(r=Math.floor(r),r>=0&&r<this.args.length)return this.args[r];throw new Error("Out of bounds list access")}eachElement(r){for(let n=0;n<this.length;n++)r(this.elementAt(n),n)}mapElements(r){let n=[];for(let o=0;o<this.length;o++)n.push(r(this.elementAt(o),o));return n}asValue(){let r=[];for(let n=0;n<this.args.length;n++)r.push(this.args[n].asValue());return r}asCompilerValue(){let r=[];for(let n=0;n<this.args.length;n++)r.push(this.args[n].asCompilerValue());return r}},Uu=class Uu extends Da{constructor(){super(...arguments);this.type="List"}};Uu.eachArgs=function(r,n){let o=fI(r);if(!isFinite(o)){n(r);return}for(let a=0;a<o;a++){let i=[];for(let s=0;s<r.length;s++)i.push(ix(r[s])||Rt(r[s].valueType)?r[s].elementAt(a):r[s]);n(i,a)}},Uu.wrap=function(r){return r instanceof Da||Rt(r.valueType)?r:new Uu([r])};var Sg=Uu,Cc=class Cc extends Da{constructor(){super(...arguments);this.type="List"}};Cc.eachArgs=function(r,n){let o=fI(r);if(!isFinite(o)){n(r);return}for(let a=0;a<o;a++){let i=[];for(let s=0;s<r.length;s++)i.push(ix(r[s])||Rt(r[s].valueType)?r[s].elementAt(a):r[s]);n(i,a)}},Cc.wrap=function(r){return r instanceof Cc||Rt(r.valueType)?r:new Cc([r])};var sx=Cc;var Xde=mn.RED,Zde=mn.BLUE,Jde=mn.GREEN,epe=mn.PURPLE,tpe=mn.ORANGE,rpe=mn.BLACK;var aB=/^[\+\-]?[\d]*(\.\d+)?$/;var Mg;function iB(e){let t={strings:!0,matrices:!0,language:e.getLanguage()};return Mg?Mg.config(t):Mg=Qo.StaticMath(document.createElement("span"),t),Mg}function cx(e){if(e==="undefined")return ks.s("shared-calculator-label-undefined");let t="";if(aB.test(e))/^\+/.test(e)?(t=ks.s("mq-narration-positive")+" ",e=e.slice(1)):/^\-/.test(e)&&(t=ks.s("mq-narration-negative")+" ",e=e.slice(1)),t+=e.replace(/(\.)([0-9]+)/g,(r,n,o)=>n+o.split("").join(" ").trim());else{let r=iB(ks);r.latex(e),t=r.mathspeak().trim()}return t}var Ic=class extends Tt{constructor(){super(...arguments);this.id=this.props.editableId()||""}template(){return N("div",{class:"dcg-matrix-container",style:()=>({"border-color":this.controller.getTextColor()}),children:[u("div",{class:"dcg-top-occluder"}),u("div",{class:"dcg-bottom-occluder"}),u("div",{"aria-label":()=>this.props.variable?this.controller.s("matrix-calculator-narration-matrix-with-variable",{variable:this.props.variable()}):this.controller.s("matrix-calculator-narration-matrix-without-variable"),role:"grid",class:"dcg-matrix-view",children:u(Ye.Simple,{each:()=>this.getRowKeys(),children:t=>u("div",{role:"row",class:"dcg-matrix-view-row",children:u(Ye.Simple,{each:()=>this.getColumnKeys(),children:r=>u(lx,{controller:this.props.controller,isEditable:()=>!!this.props.editableId(),manageFocus:this.const(op({controller:this.controller,location:{type:"matrix-cell",id:this.id,row:t,col:r}})),ariaLabel:()=>this.controller.s("shared-calculator-narration-table-cell-coordinates",{rowNumber:t+1,columnNumber:r+1}),latex:()=>this.getCellContents(t,r)})})})})})]})}getCellContents(t,r){return this.props.matrix()[t][r]}getRowKeys(){let t=[],r=this.props.matrix();if(r)for(let n=0;n<r.length;n++)t.push(n);return t}getColumnKeys(){let t=[],r=this.props.matrix(),n=r&&r[0];if(n)for(let o=0;o<n.length;o++)t.push(o);return t}},lx=class extends Tt{template(){return u("div",{role:"gridcell",class:"dcg-matrix-view-cell",children:dr(this.props.isEditable,{true:()=>u(Ve,{latex:this.props.latex,manageFocus:this.props.manageFocus,capExpressionSize:()=>this.model.isEnabled("capExpressionSize"),config:()=>this.controller.getMathquillConfig(),getAriaLabel:()=>this.props.ariaLabel(),getAriaPostLabel:()=>"",noFadeout:this.const(!0),hasError:()=>!1,placeholder:this.const("0"),selectOnFocus:this.const(!0),onUserPressedKey:(t,r)=>{this.dispatch({type:"keypad/press-key",key:t,evt:r,source:"keyboard"})},onUserChangedLatex:t=>{this.dispatch({type:"mq-updated-latex",latex:t})}}),false:()=>u($r,{config:()=>this.controller.getStaticMqConfig(),latex:this.props.latex})})})}};var kg=class extends Tt{constructor(){super(...arguments);this.id=this.props.id()}template(){return N("div",{class:()=>({"dcg-latex-expression":!0,"dcg-focused":this.model.isLatexExpressionFocused(this.id),"dcg-do-not-blur":!0}),children:[u(Ve,{latex:()=>this.getItem().latex,manageFocus:this.const(op({controller:this.controller,location:{type:"latex-expression",id:this.id}})),capExpressionSize:()=>this.model.isEnabled("capExpressionSize"),config:()=>this.controller.getMathquillConfig(),getAriaLabel:()=>this.controller.s("shared-calculator-narration-expression"),getAriaPostLabel:()=>{if(this.hasError())return this.getError();let t=this.getAnswer();switch(t.type){case"number":return this.controller.s("shared-calculator-narration-evaluation",{answer:cx(kc(we(t.value),{displayAsFraction:this.shouldDisplayEvaluationAsFraction()}))});case"matrix":let r=this.getMatrixEvaluationAria(t.matrix);try{let n=this.controller.s("matrix-calculator-narration-evaluation",{rowCount:r.length,columnCount:r[0].length});for(let o=0;o<r.length;o++)n+=" "+this.controller.s("matrix-calculator-narration-evaluation-row",{rowNumber:o+1,values:r[o].map(a=>a.toString()).join(", ")});return n}catch(n){return this.controller.raw("")}default:return this.controller.raw("")}},hasError:()=>this.hasError(),onUserPressedKey:(t,r)=>{this.dispatch({type:"keypad/press-key",key:t,evt:r,source:"keyboard"})},onUserChangedLatex:t=>{this.dispatch({type:"mq-updated-latex",latex:t})}}),xr(()=>this.getAnswer(),"type",{number:t=>N("div",{class:"dcg-evaluation dcg-number-evaluation",children:[u("span",{class:"dcg-output",children:u($r,{latex:()=>"="+kc(we(t().value),{displayAsFraction:this.shouldDisplayEvaluationAsFraction()}),config:()=>this.controller.getStaticMqConfig()})}),this.fractionToggleTemplate()]}),matrix:t=>N("div",{class:"dcg-evaluation dcg-matrix-evaluation",children:[u("span",{class:"dcg-equals-sign",children:"="}),u(Ic,{controller:this.props.controller,editableId:this.const(void 0),matrix:()=>this.getMatrixEvaluationLatex(t().matrix)}),this.fractionToggleTemplate()]}),none:()=>{}}),u(J,{predicate:()=>this.hasError(),children:()=>u("div",{class:"dcg-latex-expression-error",children:u(Ec,{error:this.bindFn(this.getError),gravity:this.const("w")})})})]})}fractionToggleTemplate(){return u(J,{predicate:this.bindFn(this.canDisplayEvaluationAsFraction),children:()=>u(qr,{tooltip:this.bindFn(this.getFractionMessage),gravity:this.const("s"),children:u("span",{role:"button",tabIndex:"0","aria-label":this.bindFn(this.getFractionDisplayAriaLabel),class:()=>({"dcg-basic-fraction-toggle":!0,"dcg-selected":this.isFractionEvaluation()}),onTap:this.bindFn(this.toggleFractionEvaluation),children:u("i",{class:"dcg-icon-fraction","aria-hidden":"true"})})})})}getItem(){return this.model.getExpressionById(this.id)}hasError(){return!!this.model.getEvaluations()[this.id].error}getError(){let t=this.model.getEvaluations()[this.id].error;return t!==void 0?this.controller.unpack(t):this.controller.raw("")}getAnswer(){let t=this.model.getEvaluations()[this.id].answer;return t===void 0?{type:"none"}:gg(t)?{type:"matrix",matrix:t}:{type:"number",value:t}}getMatrixEvaluationLatex(t){let r=this.isFractionEvaluation(),n=[];for(let o of t){let a=[];for(let i of o)a.push(kc(we(i),{digits:6,bigCutoff:1e6,smallCutoff:.001,displayAsFraction:r}));n.push(a)}return n}getMatrixEvaluationAria(t){let r=this.isFractionEvaluation(),n=[];for(let o of t){let a=[];for(let i of o)a.push(cx(kc(we(i),{digits:6,bigCutoff:1e6,smallCutoff:.001,displayAsFraction:r})));n.push(a)}return n}canDisplayEvaluationAsFraction(){if(!this.model.isEnabled("decimalToFraction"))return!1;let t=this.model.getEvaluations()[this.id].answer;if(t===void 0)return!1;if(gg(t)){let r=!1;for(let n of t)for(let o of n){if(!St(o))return!1;wg(we(o))&&(r=!0)}return r}return wg(we(t))}getFractionMessage(){return this.shouldDisplayEvaluationAsFraction()?this.controller.s("shared-calculator-label-tooltip-convert-to-decimal"):this.controller.s("shared-calculator-label-tooltip-convert-to-fraction")}getFractionDisplayAriaLabel(){return this.shouldDisplayEvaluationAsFraction()?this.controller.s("shared-calculator-narration-display-as-decimal"):this.controller.s("shared-calculator-narration-display-as-fraction")}shouldDisplayEvaluationAsFraction(){return this.canDisplayEvaluationAsFraction()&&this.isFractionEvaluation()}toggleFractionEvaluation(){this.controller.dispatch({type:"set-display-as-fraction",id:this.id,value:!this.getItem().displayAsFraction})}isFractionEvaluation(){return this.getItem().displayAsFraction}};var Eg=class extends Tt{template(){return N("div",{class:()=>({"dcg-matrix-expression":!0,"dcg-focused":this.model.isExpressionFocused(this.props.id()),"dcg-do-not-blur":!0}),onTapStart:e=>this.onTapBlankSpace(e),children:[u("span",{class:"dcg-variable-definition",children:u($r,{config:()=>this.controller.getStaticMqConfig(),latex:()=>this.getItem().variable+"="})}),u(Ic,{controller:this.props.controller,editableId:this.props.id,matrix:()=>this.getItem().matrix,variable:()=>this.getItem().variable}),u(J,{predicate:()=>!!this.getEvaluation().error,children:()=>u("div",{class:"dcg-matrix-expression-error-container",children:u(Ec,{error:this.bindFn(this.getError),gravity:this.const("w")})})})]})}getItem(){return this.model.getExpressionById(this.props.id())}getError(){let e=this.getEvaluation().error;return e!==void 0?this.controller.unpack(e):this.controller.raw("")}onTapBlankSpace(e){e.target.classList.contains("dcg-matrix-expression")&&this.dispatch({type:"set-focus-location",location:{type:"matrix-cell",id:this.props.id(),row:0,col:0}})}getEvaluation(){return this.model.getEvaluations()[this.props.id()]}};var Cg=class extends Tt{template(){return N("div",{class:"dcg-matrix-list-container",didMount:e=>this.didMountNode(e),children:[u("div",{class:"dcg-matrix-list-placeholder"}),u("div",{class:()=>({"dcg-matrix-list":!0,"dcg-projector-mode":this.controller.isProjectorMode()}),role:"region","aria-label":()=>this.controller.s("shared-calculator-narration-expression-list"),children:u(Ye.Simple,{each:()=>this.model.getExpressionOrder(),children:e=>u(Vt,{children:t=>t==="latex"?u(kg,{controller:this.props.controller,id:this.const(e)}):t==="matrix"?u(Eg,{controller:this.props.controller,id:this.const(e)}):u("span",{})},()=>this.model.getExpressionById(e).type)})})]})}didMountNode(e){this.node=e}didUpdate(){let e=this.node.querySelector(".dcg-focused");e&&mp(e,this.node,0)}};var zu=class extends vi{template(){return u("div",{class:"dcg-basic-keypad dcg-do-not-blur",children:this.props.children})}};var Be=class extends K{template(){return u("div",{class:()=>{var t,r,n,o,a;return{"dcg-keypad-btn-container":!0,"dcg-disabled":this.isDisabled(),[(n=(r=(t=this.props).additionalClass)==null?void 0:r.call(t))!=null?n:""]:!!((a=(o=this.props).additionalClass)!=null&&a.call(o))}},style:()=>{var t;return{"flex-grow":(t=this.getColSpan())==null?void 0:t.toString()}},children:N("span",{role:"button",class:()=>({"dcg-keypad-btn":!0,"dcg-btn-light-on-gray":this.props.style()==="default","dcg-btn-dark-on-gray":this.props.style()==="highlight","dcg-btn-light-gray":this.props.style()==="popover","dcg-btn-blue":this.props.style()==="blue","dcg-cursor-default":this.isDisabled()}),"dcg-command":this.props.command,"aria-label":this.bindFn(this.getAriaLabel),"aria-disabled":this.bindFn(this.isDisabled),"aria-controls":this.props.ariaControls?this.props.ariaControls:this.const(void 0),"aria-expanded":this.props.ariaExpanded?this.bindFn(this.getAriaExpanded):this.const(void 0),onTap:t=>{!this.isDisabled()&&!t.target.closest("a")&&this.props.onTap()},children:[u("span",{class:"dcg-keypad-btn-content",children:this.props.children}),Yr(()=>{var t,r;return(r=(t=this.props).helpLink)==null?void 0:r.call(t)},t=>u("a",{href:t,class:"dcg-unstyled-link dcg-stop-touchtracking-class-propagation",target:"_blank",children:u("i",{class:"dcg-icon-question-sign"})}))]})})}getAriaLabel(){return this.props.ariaLabel?this.props.ariaLabel():this.props.command()}getColSpan(){if(this.props.colspan)return this.props.colspan()}isDisabled(){return this.props.disabled&&this.props.disabled()}getAriaExpanded(){return this.props.ariaExpanded?this.props.ariaExpanded():void 0}};function Ee(e,t){return e===void 0?ue(t):typeof e=="function"?e:ue(e)}function ux(e){return{language:e.getLanguage()}}function Ao(e){let t=e.keys[e.key];return(r,n,o={},a)=>u(Be,{command:ue(t),ariaLabel:()=>e.ariaLabelKey?a.s(e.ariaLabelKey):t,colspan:Ee(o.colspan,1),style:()=>o.style||"default",onTap:()=>n({type:"keypad/type-text",text:t}),children:u("span",{class:"dcg-mq-math-mode dcg-either-or-btn",children:u(Ye.Simple,{each:ue(e.keys),children:(i,s)=>u("span",{class:()=>({"dcg-either-or-option":!0,"dcg-either-or-option__selected":s()===e.key}),"data-letter":()=>i,children:()=>i==="'"?"\u2032":i})})})})}function sB(e){return(t,r,n={},o)=>N(Be,{command:ue(e.command),ariaLabel:()=>e.ariaLabelKey?o.s(e.ariaLabelKey):t,colspan:Ee(n.colspan,1),style:()=>n.style||"default",onTap:()=>{r({type:"audio-trace-command",fromKeypad:!0,command:e.command})},children:[u(J,{predicate:ue(e.iconClass!==void 0),children:()=>u("span",{class:()=>({"dcg-button-icon":!0,"dcg-icon-only":e.contentKey===void 0}),children:u("i",{class:ue(e.iconClass),"aria-hidden":"true"})})}),u(J,{predicate:ue(e.contentKey!==void 0),children:()=>u("span",{children:()=>o.s(e.contentKey)||t})})]})}function U(e){return(t,r,n={},o)=>u(Be,{command:ue(e.command||t),ariaLabel:()=>e.ariaLabelKey?o.s(e.ariaLabelKey):t,colspan:Ee(n.colspan,1),style:()=>n.style||"default",onTap:()=>r({type:"keypad/type-text",text:e.typedText||t}),helpLink:()=>e.helpLink,children:u($r,{config:ue(ux(o)),latex:ue(e.content||t)})})}function bI(e){return(t,r,n={},o)=>u(Be,{command:ue(e.command||t),ariaLabel:()=>e.ariaLabelKey?o.s(e.ariaLabelKey):t,colspan:Ee(n.colspan,1),style:()=>n.style||"default",onTap:()=>r({type:"keypad/type-text",text:e.typedText||t}),children:u("span",{class:"dcg-mq-math-mode",children:ue(e.content||t)})})}function F(e){return(t,r,n={},o)=>u(Be,{command:ue(t),ariaLabel:()=>e.ariaLabelKey?o.s(e.ariaLabelKey):t,colspan:Ee(n.colspan,1),style:()=>n.style||"default",onTap:()=>r({type:"keypad/type-text",text:t+"("}),helpLink:()=>e.helpLink,children:u(Vt,{children:a=>a?u("span",{class:"dcg-mq-math-mode dcg-static-mathquill-view",children:u("span",{class:"dcg-mq-root-block",children:u("span",{class:"dcg-mq-operator-name",children:()=>t})})}):u($r,{config:ue(ux(o)),latex:ue(t)})},()=>!!t.match(/^[a-z]{2,}$/))})}function qt(e){return(t,r,n={},o)=>u(Be,{command:ue(e.command),ariaLabel:()=>e.ariaLabelKey?o.s(e.ariaLabelKey):e.command,colspan:Ee(n.colspan,1),style:()=>n.style||"default",onTap:()=>{r({type:"keypad/custom-command",command:e.command})},children:u($r,{config:ue(ux(o)),latex:ue(e.content)})})}var cB={"{":bI({ariaLabelKey:"shared-calculator-narration-keypad-key-left-bracket"}),"}":bI({ariaLabelKey:"shared-calculator-narration-keypad-key-right-bracket"}),"(":U({ariaLabelKey:"shared-calculator-narration-keypad-key-left-paren"}),")":U({ariaLabelKey:"shared-calculator-narration-keypad-key-right-paren"}),sqrt:qt({command:"sqrt",content:"\\sqrt{}",ariaLabelKey:"shared-calculator-narration-keypad-key-sqrt"}),"/":U({ariaLabelKey:"shared-calculator-narration-keypad-key-divide"}),division:U({content:"\xF7",typedText:"/",command:"/",ariaLabelKey:"shared-calculator-narration-keypad-key-divide"}),obelus:U({content:"\xF7",typedText:"\xF7",ariaLabelKey:"shared-calculator-narration-keypad-key-divide"}),"*":U({ariaLabelKey:"shared-calculator-narration-keypad-key-times"}),multiplication:U({content:"\xD7",typedText:"*",command:"*",ariaLabelKey:"shared-calculator-narration-keypad-key-times"}),"\xB1":U({ariaLabelKey:"shared-calculator-narration-keypad-plus-minus"}),"-":U({ariaLabelKey:"shared-calculator-narration-keypad-key-minus"}),"+":U({ariaLabelKey:"shared-calculator-narration-keypad-key-plus"}),".":U({ariaLabelKey:"shared-calculator-narration-keypad-key-decimal"}),ans:(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("shared-calculator-narration-keypad-key-ans"),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"keypad/type-text",text:e}),children:"ans"}),enter:(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("shared-calculator-narration-keypad-key-enter"),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"keypad/press-key",key:"Enter",source:"keypad"}),children:u("i",{class:"dcg-icon-arrow-enter","aria-hidden":"true"})}),undo:(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("shared-calculator-narration-keypad-key-enter"),colspan:Ee(r.colspan,1),disabled:Ee(r.disabled,!1),style:()=>r.style||"default",onTap:()=>t({type:"undo",source:"button-tap"}),children:u("i",{class:"dcg-icon-undo","aria-hidden":"true"})}),redo:(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("shared-calculator-narration-keypad-key-enter"),colspan:Ee(r.colspan,1),disabled:Ee(r.disabled,!1),style:()=>r.style||"default",onTap:()=>t({type:"redo",source:"button-tap"}),children:u("i",{class:"dcg-icon-redo","aria-hidden":"true"})}),shift:(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("shared-calculator-narration-keypad-key-shift"),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"keypad/shift"}),children:u("i",{class:"dcg-icon-shift","aria-hidden":"true"})}),left:(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("shared-calculator-narration-keypad-key-left-arrow"),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"keypad/press-key",key:"Left",source:"keypad"}),children:u("i",{class:"dcg-icon-arrow-left","aria-hidden":"true"})}),right:(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("shared-calculator-narration-keypad-key-right-arrow"),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"keypad/press-key",key:"Right",source:"keypad"}),children:u("i",{class:"dcg-icon-arrow-right","aria-hidden":"true"})}),123:(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("shared-calculator-narration-keypad-key-toggle-numbers"),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"keypad/123"}),children:"1 2 3"}),ABC:(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("shared-calculator-narration-keypad-key-toggle-letters"),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"keypad/abc"}),children:"A B C"}),Audio:(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("shared-calculator-narration-keypad-key-toggle-audio-trace"),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"audio-trace-command",fromKeypad:!0,command:"on"}),children:u("i",{class:"dcg-icon-volume","aria-hidden":"true"})}),backspace:(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("shared-calculator-narration-keypad-key-backspace"),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"keypad/press-key",key:"Backspace",source:"keypad"}),children:u("i",{class:"dcg-icon-delete","aria-hidden":"true"})}),pi:U({content:"\\pi",ariaLabelKey:"shared-calculator-narration-keypad-key-pi"}),alpha:U({content:"\\alpha",ariaLabelKey:"shared-calculator-narration-keypad-key-alpha"}),beta:U({content:"\\beta",ariaLabelKey:"shared-calculator-narration-keypad-key-beta"}),theta:U({content:"\\theta",ariaLabelKey:"shared-calculator-narration-keypad-key-theta"}),tau:U({content:"\\tau",ariaLabelKey:"shared-calculator-narration-keypad-key-tau"}),phi:U({content:"\\phi",ariaLabelKey:"shared-calculator-narration-keypad-key-phi"}),rho:U({content:"\\rho",ariaLabelKey:"shared-calculator-narration-keypad-key-rho"}),"a^2":qt({command:"a^2",content:"a^2",ariaLabelKey:"shared-calculator-narration-keypad-key-squared"}),"a^3":qt({command:"a^3",content:"a^3",ariaLabelKey:"shared-calculator-narration-keypad-key-cubed"}),"x^3":qt({command:"a^3",content:"x^3",ariaLabelKey:"shared-calculator-narration-keypad-key-cubed"}),"a^b":U({content:"a^b",typedText:"^",ariaLabelKey:"shared-calculator-narration-keypad-key-superscript"}),a_b:U({content:"a_b",typedText:"_",ariaLabelKey:"shared-calculator-narration-keypad-key-subscript"}),"a/b":qt({content:"\\frac{a}{b}",command:"a/b",ariaLabelKey:"shared-calculator-narration-keypad-key-fraction"}),"x^2":qt({command:"a^2",content:"x^2",ariaLabelKey:"shared-calculator-narration-keypad-key-squared"}),"x^y":U({content:"x^y",typedText:"^",ariaLabelKey:"shared-calculator-narration-keypad-key-superscript"}),"x/y":U({content:"\\frac{x}{y}",typedText:"/",ariaLabelKey:"shared-calculator-narration-keypad-key-fraction"}),nthroot:qt({command:"nthroot",content:"\\sqrt[n]{}",ariaLabelKey:"shared-calculator-narration-keypad-key-nthroot"}),ythroot:qt({command:"nthroot",content:"\\sqrt[y]{}",ariaLabelKey:"shared-calculator-narration-keypad-key-ythroot"}),sin:F({ariaLabelKey:"shared-calculator-narration-keypad-key-sin"}),cos:F({ariaLabelKey:"shared-calculator-narration-keypad-key-cos"}),tan:F({ariaLabelKey:"shared-calculator-narration-keypad-key-tan"}),tone:F({ariaLabelKey:"shared-calculator-narration-keypad-key-tone",helpLink:"https://help.desmos.com/hc/en-us/articles/21373904717197-Tone"}),sec:F({ariaLabelKey:"shared-calculator-narration-keypad-key-sec"}),csc:F({ariaLabelKey:"shared-calculator-narration-keypad-key-csc"}),cot:F({ariaLabelKey:"shared-calculator-narration-keypad-key-cot"}),sinh:F({ariaLabelKey:"shared-calculator-narration-keypad-key-sinh"}),cosh:F({ariaLabelKey:"shared-calculator-narration-keypad-key-cosh"}),tanh:F({ariaLabelKey:"shared-calculator-narration-keypad-key-tanh"}),sech:F({ariaLabelKey:"shared-calculator-narration-keypad-key-csch"}),csch:F({ariaLabelKey:"shared-calculator-narration-keypad-key-csch"}),coth:F({ariaLabelKey:"shared-calculator-narration-keypad-key-coth"}),arcsin:qt({command:"arcsin",content:"sin^{-1}",ariaLabelKey:"shared-calculator-narration-keypad-key-arcsin"}),arccos:qt({command:"arccos",content:"cos^{-1}",ariaLabelKey:"shared-calculator-narration-keypad-key-arccos"}),arctan:qt({command:"arctan",content:"tan^{-1}",ariaLabelKey:"shared-calculator-narration-keypad-key-arctan"}),arccsc:qt({command:"arccsc",content:"csc^{-1}",ariaLabelKey:"shared-calculator-narration-keypad-key-arccsc"}),arcsec:qt({command:"arcsec",content:"sec^{-1}",ariaLabelKey:"shared-calculator-narration-keypad-key-arcsec"}),arccot:qt({command:"arccot",content:"cot^{-1}",ariaLabelKey:"shared-calculator-narration-keypad-key-arccot"}),"|a|":U({typedText:"|",ariaLabelKey:"shared-calculator-narration-keypad-key-abs"}),"|x|":U({typedText:"|",ariaLabelKey:"shared-calculator-narration-keypad-key-abs"}),ln:F({ariaLabelKey:"shared-calculator-narration-keypad-key-ln"}),midpoint:F({ariaLabelKey:"shared-calculator-narration-keypad-key-midpoint"}),segment:F({ariaLabelKey:"shared-calculator-narration-keypad-key-segment"}),line:F({ariaLabelKey:"shared-calculator-narration-keypad-key-line"}),ray:F({ariaLabelKey:"shared-calculator-narration-keypad-key-ray"}),parallel:F({ariaLabelKey:"shared-calculator-narration-keypad-key-parallel"}),perpendicular:F({ariaLabelKey:"shared-calculator-narration-keypad-key-perpendicular"}),circle:F({ariaLabelKey:"shared-calculator-narration-keypad-key-circle"}),arc:F({ariaLabelKey:"shared-calculator-narration-keypad-key-arc"}),angle:F({ariaLabelKey:"shared-calculator-narration-keypad-key-angle"}),directedangle:F({ariaLabelKey:"shared-calculator-narration-keypad-key-directed-angle"}),glider:F({ariaLabelKey:"shared-calculator-narration-keypad-key-glider"}),coterminal:F({ariaLabelKey:"shared-calculator-narration-keypad-key-coterminal"}),supplement:F({ariaLabelKey:"shared-calculator-narration-keypad-key-supplement"}),dilate:F({ariaLabelKey:"shared-calculator-narration-keypad-key-dilate"}),rotate:F({ariaLabelKey:"shared-calculator-narration-keypad-key-rotate"}),translate:F({ariaLabelKey:"shared-calculator-narration-keypad-key-translate"}),reflect:F({ariaLabelKey:"shared-calculator-narration-keypad-key-reflect"}),vertices:F({ariaLabelKey:"shared-calculator-narration-keypad-key-vertices"}),angles:F({ariaLabelKey:"shared-calculator-narration-keypad-key-angles"}),directedangles:F({ariaLabelKey:"shared-calculator-narration-keypad-key-directed-angles"}),segments:F({ariaLabelKey:"shared-calculator-narration-keypad-key-segments"}),radius:F({ariaLabelKey:"shared-calculator-narration-keypad-key-radius"}),center:F({ariaLabelKey:"shared-calculator-narration-keypad-key-center"}),intersection:F({ariaLabelKey:"shared-calculator-narration-keypad-key-intersection"}),area:F({ariaLabelKey:"shared-calculator-narration-keypad-key-area"}),perimeter:F({ariaLabelKey:"shared-calculator-narration-keypad-key-perimeter"}),log:F({ariaLabelKey:"shared-calculator-narration-keypad-key-log"}),quantile:F({ariaLabelKey:"shared-calculator-narration-keypad-key-quantile"}),quartile:F({ariaLabelKey:"shared-calculator-narration-keypad-key-quartile"}),var:F({}),varp:F({}),nCr:F({}),loga:qt({command:"loga",content:"log_a",ariaLabelKey:"shared-calculator-narration-keypad-key-loga"}),stdev:F({ariaLabelKey:"shared-calculator-narration-keypad-key-stdev"}),mad:F({}),nPr:F({}),total:F({}),count:F({}),length:F({}),for:F({}),min:F({}),max:F({}),cov:F({ariaLabelKey:"shared-calculator-narration-keypad-key-cov"}),covp:F({ariaLabelKey:"shared-calculator-narration-keypad-key-covp"}),corr:F({ariaLabelKey:"shared-calculator-narration-keypad-key-corr"}),spearman:F({ariaLabelKey:"shared-calculator-narration-keypad-key-spearman"}),stats:F({ariaLabelKey:"shared-calculator-narration-keypad-key-stats"}),polygon:F({ariaLabelKey:"shared-calculator-narration-keypad-key-polygon"}),distance:F({ariaLabelKey:"shared-calculator-narration-keypad-key-distance"}),triangle:F({ariaLabelKey:"shared-calculator-narration-keypad-key-triangle"}),sphere:F({ariaLabelKey:"shared-calculator-narration-keypad-key-sphere"}),vector:F({ariaLabelKey:"shared-calculator-narration-keypad-key-vector"}),mean:F({ariaLabelKey:"shared-calculator-narration-keypad-key-mean"}),stdevp:F({ariaLabelKey:"shared-calculator-narration-keypad-key-stdevp"}),mod:F({}),"e^x":U({typedText:"e^",ariaLabelKey:"shared-calculator-narration-keypad-key-exp"}),"10^n":U({content:"\\times10^{n}",typedText:"*10^",ariaLabelKey:"shared-calculator-narration-keypad-key-10-n"}),"a^{-1}":U({typedText:"^-1",ariaLabelKey:"shared-calculator-narration-keypad-key-reciprocal"}),sum:U({content:"\\sum",ariaLabelKey:"shared-calculator-narration-keypad-key-sum"}),prod:U({content:"\\prod",ariaLabelKey:"shared-calculator-narration-keypad-key-product"}),floor:F({ariaLabelKey:"shared-calculator-narration-keypad-key-floor"}),ceil:F({ariaLabelKey:"shared-calculator-narration-keypad-key-ceil"}),round:F({ariaLabelKey:"shared-calculator-narration-keypad-key-round"}),abs:F({ariaLabelKey:"shared-calculator-narration-keypad-key-abs"}),"!":U({ariaLabelKey:"shared-calculator-narration-keypad-key-factorial"}),"n!":U({typedText:"!",ariaLabelKey:"shared-calculator-narration-keypad-key-factorial"}),median:F({ariaLabelKey:"shared-calculator-narration-keypad-key-median"}),lcm:F({}),gcd:F({}),gcf:F({}),ddx:qt({command:"ddx",content:"\\frac{d}{dx}"}),integral:qt({command:"integral",content:"\\int",ariaLabelKey:"shared-calculator-narration-keypad-key-int"}),"%":U({content:"\\%",ariaLabelKey:"shared-calculator-narration-keypad-key-percent-of"}),"->":U({content:"\\to",ariaLabelKey:"shared-calculator-narration-keypad-key-action-to",helpLink:"https://help.desmos.com/hc/en-us/articles/4407725009165-Actions#h_01FB2RRQ5ZHN6Q66WWWK545SGX"}),with:U({typedText:"with",content:"with",helpLink:"https://help.desmos.com/hc/en-us/articles/12349196836749-Substitution",ariaLabelKey:"shared-calculator-narration-keypad-key-action-with"}),and:U({typedText:"and",content:"and",helpLink:"https://help.desmos.com/hc/en-us/articles/4407885334285-Inequalities-and-Restrictions#h_01K9G4BWJDT3YZP4RJ9G6JKPZK"}),or:U({typedText:"or",content:"or",helpLink:"https://help.desmos.com/hc/en-us/articles/4407885334285-Inequalities-and-Restrictions#h_01K9G4BWJDT3YZP4RJ9G6JKPZK"}),prime:U({typedText:"'",content:"f'",ariaLabelKey:"shared-calculator-narration-keypad-key-prime"}),exp:F({}),sign:F({}),normaldist:F({ariaLabelKey:"shared-calculator-narration-keypad-key-normaldist"}),poissondist:F({ariaLabelKey:"shared-calculator-narration-keypad-key-poissondist"}),geodist:F({ariaLabelKey:"shared-calculator-narration-keypad-key-geodist"}),discretedist:F({ariaLabelKey:"shared-calculator-narration-keypad-key-discretedist"}),binomialdist:F({ariaLabelKey:"shared-calculator-narration-keypad-key-binomialdist"}),uniformdist:F({ariaLabelKey:"shared-calculator-narration-keypad-key-uniformdist"}),erf:F({ariaLabelKey:"shared-calculator-narration-keypad-key-erf"}),histogram:F({ariaLabelKey:"shared-calculator-narration-keypad-key-histogram"}),boxplot:F({ariaLabelKey:"shared-calculator-narration-keypad-key-boxplot"}),dotplot:F({ariaLabelKey:"shared-calculator-narration-keypad-key-dotplot"}),tscore:F({ariaLabelKey:"shared-calculator-narration-keypad-key-tscore"}),ttest:F({ariaLabelKey:"shared-calculator-narration-keypad-key-ttest"}),ztest:F({ariaLabelKey:"shared-calculator-narration-keypad-key-ztest"}),zproptest:F({ariaLabelKey:"shared-calculator-narration-keypad-key-zproptest"}),chisqtest:F({ariaLabelKey:"shared-calculator-narration-keypad-key-chisqtest"}),chisqgof:F({ariaLabelKey:"shared-calculator-narration-keypad-key-chisqgof"}),conf:F({ariaLabelKey:"shared-calculator-narration-keypad-key-conf"}),null:F({}),pleft:F({ariaLabelKey:"shared-calculator-narration-keypad-key-pleft"}),pright:F({ariaLabelKey:"shared-calculator-narration-keypad-key-pright"}),score:F({}),dof:F({ariaLabelKey:"shared-calculator-narration-keypad-key-dof"}),estimate:F({}),stderr:F({ariaLabelKey:"shared-calculator-narration-keypad-key-stderr"}),lower:F({}),upper:F({}),tdist:F({ariaLabelKey:"shared-calculator-narration-keypad-key-tdist"}),chisqdist:F({ariaLabelKey:"shared-calculator-narration-keypad-key-chisqdist"}),pdf:F({ariaLabelKey:"shared-calculator-narration-keypad-key-pdf"}),cdf:F({ariaLabelKey:"shared-calculator-narration-keypad-key-pdf"}),random:F({ariaLabelKey:"shared-calculator-narration-keypad-key-random"}),inversecdf:F({ariaLabelKey:"shared-calculator-narration-keypad-key-inversecdf"}),hsv:F({}),rgb:F({}),oklab:F({}),oklch:F({}),okhsv:F({}),sort:F({}),shuffle:F({}),unique:F({}),join:F({}),repeat:F({}),"A^-1":qt({command:"A^-1",content:"A^{-1}",ariaLabelKey:"matrix-calculator-narration-keypad-key-inverse"}),"A^T":qt({command:"A^T",content:"A^T",ariaLabelKey:"matrix-calculator-narration-keypad-key-transpose"}),"A^2":qt({command:"A^2",content:"A^2",ariaLabelKey:"shared-calculator-narration-keypad-key-squared"}),"A^n":U({content:"A^n",typedText:"^",ariaLabelKey:"shared-calculator-narration-keypad-key-exp"}),det:F({ariaLabelKey:"matrix-calculator-narration-keypad-key-det"}),trace:F({ariaLabelKey:"matrix-calculator-narration-keypad-key-trace"}),rref:F({ariaLabelKey:"matrix-calculator-narration-keypad-key-rref"}),rows:F({ariaLabelKey:"shared-calculator-narration-keypad-key-rows"}),columns:F({ariaLabelKey:"shared-calculator-narration-keypad-key-columns"}),rank:F({ariaLabelKey:"shared-calculator-narration-keypad-key-rank"}),a:U({}),b:U({}),c:U({}),d:U({}),e:U({}),f:U({}),g:U({}),h:U({}),i:U({}),j:U({}),k:U({}),l:U({}),m:U({}),n:U({}),o:U({}),p:U({}),q:U({}),r:U({}),s:U({}),t:U({}),u:U({}),v:U({}),w:U({}),x:U({}),boldX:U({content:"x",typedText:"x"}),y:U({}),boldY:U({content:"y",typedText:"y"}),z:U({}),boldZ:U({content:"z",typedText:"z"}),A:U({}),B:U({}),C:U({}),D:U({}),E:U({}),F:U({}),G:U({}),H:U({}),I:U({}),J:U({}),K:U({}),L:U({}),M:U({}),N:U({}),O:U({}),P:U({}),Q:U({}),R:U({}),S:U({}),T:U({}),U:U({}),V:U({}),W:U({}),X:U({}),Y:U({}),Z:U({}),0:U({}),1:U({}),2:U({}),3:U({}),4:U({}),5:U({}),6:U({}),7:U({}),8:U({}),9:U({}),",":U({}),"#":U({}),matrix:(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("matrix-calculator-narration-matrix-without-variable"),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"keypad/type-text",text:"matrix"}),children:u("i",{class:"dcg-icon-matrix","aria-hidden":"true"})}),";":U({}),"=":U({}),"[":U({}),"]":U({}),"{}_left":Ao({keys:["{","}"],key:0}),"{}_right":Ao({keys:["{","}"],key:1}),"[]_left":Ao({keys:["[","]"],key:0}),"[]_right":Ao({keys:["[","]"],key:1}),"~%_left":Ao({keys:["~","%"],key:0}),"~%_right":Ao({keys:["~","%"],key:1}),'"':U({}),"'":U({}),"~":U({}),":":U({}),">":U({}),"<":U({}),">=":U({content:"\\ge"}),"<=":U({content:"\\le"}),"!'_left":Ao({keys:["!","'"],key:0}),"!'_right":Ao({keys:["!","'"],key:1}),":;_left":Ao({keys:[":",";"],key:0}),":;_right":Ao({keys:[":",";"],key:1}),real:F({ariaLabelKey:"shared-calculator-narration-keypad-key-real"}),imag:F({ariaLabelKey:"shared-calculator-narration-keypad-key-imag"}),conj:F({ariaLabelKey:"shared-calculator-narration-keypad-key-conj"}),arg:F({ariaLabelKey:"shared-calculator-narration-keypad-key-arg"}),"audio-trace-off":sB({contentKey:"graphing-calculator-button-keypad-audio-trace-off",command:"off"}),"hear-graph":(e,t,r={},n)=>N(Be,{command:ue(e),disabled:Ee(r.disabled,!1),colspan:Ee(r.colspan,1),style:Ee(r.style,"blue"),ariaLabel:ue(void 0),onTap:()=>{t({type:"audio-trace-command",fromKeypad:!0,command:"hear-graph"})},children:[u("span",{class:"dcg-play-icon-container",children:u("i",{class:"dcg-icon-play","aria-hidden":"true"})}),u("span",{children:()=>n.s("graphing-calculator-button-audio-trace-hear-graph")})]}),"stop-graph":(e,t,r={},n)=>N(Be,{command:ue(e),disabled:Ee(r.disabled,!1),colspan:Ee(r.colspan,1),style:Ee(r.style,"blue"),onTap:()=>{t({type:"audio-trace-command",fromKeypad:!0,command:"stop-graph"})},children:[u("span",{class:"dcg-stop-icon-container",children:u("span",{class:"dcg-stop-icon"})}),u("span",{children:()=>n.s("graphing-calculator-button-audio-trace-stop-graph")})]}),"volume-down":(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("graphing-calculator-narration-keypad-key-volume-down"),disabled:Ee(r.disabled,!1),style:()=>r.style||"default",onTap:()=>t({type:"audio-trace-command",fromKeypad:!0,command:"volume-down"}),children:u("span",{class:"dcg-button-icon dcg-icon-only",children:u("i",{class:"dcg-icon-volume-down","aria-hidden":"true"})})}),"volume-up":(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("graphing-calculator-narration-keypad-key-volume-up"),disabled:Ee(r.disabled,!1),style:()=>r.style||"default",onTap:()=>t({type:"audio-trace-command",fromKeypad:!0,command:"volume-up"}),children:u("span",{class:"dcg-button-icon dcg-icon-only",children:u("i",{class:"dcg-icon-volume-up","aria-hidden":"true"})})}),"speed-down":(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("graphing-calculator-narration-keypad-key-speed-down"),disabled:Ee(r.disabled,!1),style:()=>r.style||"default",onTap:()=>t({type:"audio-trace-command",fromKeypad:!0,command:"speed-down"}),children:u("span",{class:"dcg-button-icon dcg-icon-only",children:u("i",{class:"dcg-icon-hide","aria-hidden":"true"})})}),"speed-up":(e,t,r={},n)=>u(Be,{command:ue(e),ariaLabel:()=>n.s("graphing-calculator-narration-keypad-key-speed-up"),disabled:Ee(r.disabled,!1),style:()=>r.style||"default",onTap:()=>t({type:"audio-trace-command",fromKeypad:!0,command:"speed-up"}),children:u("span",{class:"dcg-button-icon dcg-icon-only",children:u("i",{class:"dcg-icon-show","aria-hidden":"true"})})}),"previous-point":(e,t,r={},n)=>u(Be,{ariaLabel:()=>n.s("graphing-calculator-narration-keypad-key-previous-point"),command:ue(e),disabled:Ee(r.disabled,!1),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"audio-trace-command",fromKeypad:!0,command:"previous-point"}),children:u("span",{class:"dcg-button-icon dcg-icon-only",children:u("i",{class:"dcg-icon-thin-arrow-left","aria-hidden":"true"})})}),"next-point":(e,t,r={},n)=>u(Be,{ariaLabel:()=>n.s("graphing-calculator-narration-keypad-key-next-point"),command:ue(e),disabled:Ee(r.disabled,!1),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"audio-trace-command",fromKeypad:!0,command:"next-point"}),children:u("span",{class:"dcg-button-icon dcg-icon-only",children:u("i",{class:"dcg-icon-thin-arrow-right","aria-hidden":"true"})})}),"previous-poi":(e,t,r={},n)=>u(Be,{ariaLabel:()=>n.s("graphing-calculator-narration-keypad-key-previous-poi"),command:ue(e),disabled:Ee(r.disabled,!1),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"audio-trace-command",fromKeypad:!0,command:"previous-poi"}),children:u("span",{class:"dcg-button-icon dcg-icon-only",children:u("i",{class:"dcg-icon-hide","aria-hidden":"true"})})}),"next-poi":(e,t,r={},n)=>u(Be,{ariaLabel:()=>n.s("graphing-calculator-narration-keypad-key-next-poi"),command:ue(e),disabled:Ee(r.disabled,!1),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"audio-trace-command",fromKeypad:!0,command:"next-poi"}),children:u("span",{class:"dcg-button-icon dcg-icon-only",children:u("i",{class:"dcg-icon-show","aria-hidden":"true"})})}),"previous-curve":(e,t,r={},n)=>u(Be,{ariaLabel:()=>n.s("graphing-calculator-narration-keypad-key-previous-curve"),command:ue(e),disabled:Ee(r.disabled,!1),colspan:Ee(r.colspan,1),style:()=>r.style||"default",onTap:()=>t({type:"audio-trace-command",fromKeypad:!0,command:"previous-curve"}),children:u("span",{class:"dcg-button-icon dcg-icon-only",children:u("i",{class:"dcg-icon-caret-up","aria-hidden":"true"})})}),"next-curve":(e,t,r={},n)=>u(Be,{ariaLabel:()=>n.s("graphing-calculator-narration-keypad-key-next-curve"),command:ue(e),disabled:Ee(r.disabled,!1),style:()=>r.style||"default",onTap:()=>t({type:"audio-trace-command",fromKeypad:!0,command:"next-curve"}),children:u("span",{class:"dcg-button-icon dcg-icon-only",children:u("i",{class:"dcg-icon-caret-down","aria-hidden":"true"})})})};function _e(e,t,r={}){let n=e.dispatch;return cB[t](t,n,r,e)}function Bi(e=1){return u("div",{style:ue(`flex-grow:${e}`)})}var qa=class extends K{template(){return u("div",{class:"dcg-keypad-row",children:this.props.children})}};var Hu=class extends Tt{template(){return N("div",{class:"dcg-edit-matrix-bar dcg-do-not-blur",role:"toolbar","aria-label":()=>this.controller.s("matrix-calculator-narration-resize-controls"),children:[u("div",{class:"dcg-edit-section-title",children:()=>this.controller.s("matrix-calculator-heading-edit-matrix",{variable:this.getItem().variable})}),N("div",{class:"dcg-resize-section",children:[u(Ac,{id:()=>this.props.id(),op:this.const("remove-matrix-row"),ariaLabel:()=>this.controller.s("matrix-calculator-narration-remove-row"),iconClass:this.const("dcg-icon-minus"),controller:()=>this.props.controller()}),N("span",{class:"dcg-resize-info",children:[u("span",{class:"dcg-resize-category",children:()=>this.controller.s("matrix-calculator-label-rows")}),u("span",{class:"dcg-resize-count",children:()=>this.numRows()})]}),u(Ac,{id:()=>this.props.id(),op:this.const("add-matrix-row"),ariaLabel:()=>this.controller.s("matrix-calculator-narration-add-row"),iconClass:this.const("dcg-icon-plus"),controller:()=>this.props.controller()})]}),N("div",{class:"dcg-resize-section",children:[u(Ac,{id:()=>this.props.id(),op:this.const("remove-matrix-col"),ariaLabel:()=>this.controller.s("matrix-calculator-narration-remove-column"),iconClass:this.const("dcg-icon-minus"),controller:()=>this.props.controller()}),N("span",{class:"dcg-resize-info",children:[u("span",{class:"dcg-resize-category",children:()=>this.controller.s("matrix-calculator-label-columns")}),u("span",{class:"dcg-resize-count",children:()=>this.numCols()})]}),u(Ac,{id:()=>this.props.id(),op:this.const("add-matrix-col"),ariaLabel:()=>this.controller.s("matrix-calculator-narration-add-column"),iconClass:this.const("dcg-icon-plus"),controller:()=>this.props.controller()})]})]})}numRows(){return this.getItem().matrix.length}numCols(){let t=this.getItem().matrix;return t.length===0?0:t[0].length}getItem(){return this.model.getExpressionById(this.props.id())}},Ac=class extends Tt{template(){return u("span",{class:()=>({"dcg-resize-action":!0,"dcg-disabled":this.isDisabled()}),tabIndex:()=>this.isDisabled()?-1:0,onTap:()=>{this.isDisabled()||this.controller.dispatch({type:this.props.op(),id:this.props.id()})},manageFocus:()=>Xa({controller:this.controller,location:{type:"matrix-resize-button",id:this.props.id(),op:this.props.op()}}),onKeyDown:t=>this.onKey(t),role:"button","aria-label":()=>this.props.ariaLabel(),"aria-disabled":()=>this.isDisabled(),"dcg-command":()=>this.props.op(),children:u("i",{class:()=>this.props.iconClass(),"aria-hidden":"true"})})}isDisabled(){return this.model.isResizeOpDisabled(this.props.id(),this.props.op())}onKey(t){t.key==="Tab"&&this.controller.dispatch({type:"edit-bar/press-key",key:t.key,evt:t})}};var Ig=class extends Tt{template(){return N("div",{role:"region","aria-label":()=>this.controller.s("shared-calculator-narration-keypad"),class:"dcg-basic-keypad-container",children:[N(zu,{controller:this.props.controller,children:[N(qa,{children:[u(J,{predicate:this.bindFn(this.shouldShowEditMatrixBar),children:()=>Bi(4)}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"A")}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"B")}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"C")}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"D")}),u("div",{class:"dcg-partition-placeholder"}),_e(this,"7",{style:"highlight"}),_e(this,"8",{style:"highlight"}),_e(this,"9",{style:"highlight"}),_e(this,"division"),u("div",{class:"dcg-partition-placeholder"}),_e(this,"("),_e(this,")")]}),N(qa,{children:[u(J,{predicate:this.bindFn(this.shouldShowEditMatrixBar),children:()=>Bi(4)}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"E")}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"F")}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"G")}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"H")}),u("div",{class:"dcg-partition-placeholder"}),_e(this,"4",{style:"highlight"}),_e(this,"5",{style:"highlight"}),_e(this,"6",{style:"highlight"}),_e(this,"multiplication"),u("div",{class:"dcg-partition-placeholder"}),_e(this,"left",{style:"highlight"}),_e(this,"right",{style:"highlight"})]}),N(qa,{children:[u(J,{predicate:this.bindFn(this.shouldShowEditMatrixBar),children:()=>Bi(4)}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"A^2")}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"A^-1")}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"A^T")}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"A^n")}),u("div",{class:"dcg-partition-placeholder"}),_e(this,"1",{style:"highlight"}),_e(this,"2",{style:"highlight"}),_e(this,"3",{style:"highlight"}),_e(this,"+"),u("div",{class:"dcg-partition-placeholder"}),Bi(.5),_e(this,"backspace",{style:"highlight",colspan:1.5})]}),N(qa,{children:[u(J,{predicate:this.bindFn(this.shouldShowEditMatrixBar),children:()=>Bi(4)}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"rref")}),u(J,{predicate:this.bindFn(this.showBtn),children:()=>_e(this,"det")}),u(J,{predicate:()=>!this.controller.isNarrow()&&this.showBtn(),children:()=>_e(this,"trace")}),u(J,{predicate:()=>!this.controller.isNarrow()&&this.showBtn(),children:()=>Bi(1)}),u(J,{predicate:()=>this.controller.isNarrow()&&this.showBtn(),children:()=>_e(this,"trace",{colspan:2})}),u("div",{class:"dcg-partition-placeholder"}),_e(this,"0",{style:"highlight"}),_e(this,".",{style:"highlight"}),_e(this,"sqrt"),_e(this,"-"),u("div",{class:"dcg-partition-placeholder"}),_e(this,"enter",{style:"blue",colspan:2})]})]}),u(J,{predicate:()=>this.shouldShowEditMatrixBar(),children:()=>u(Hu,{id:()=>this.model.getIdOfFocus(),controller:this.props.controller})})]})}showBtn(){return!this.shouldShowEditMatrixBar()}shouldShowEditMatrixBar(){let e=this.model.getIdOfFocus();return e===void 0?!1:this.model.getExpressionById(e).type==="matrix"}};var Ag=class extends Tt{template(){return u(J,{predicate:()=>this.controller.shouldRender(),children:()=>u("div",{class:this.const(_0),style:"width: 100%; height: 100%; position: relative;",children:u("div",{class:()=>({"dcg-calc-matrix-main-wrapper":!0,"dcg-container":!0,"dcg-has-background-color":this.controller.hasBackgroundColor(),"dcg-narrow":this.controller.isNarrow(),"dcg-very-narrow":this.controller.isVeryNarrow(),"dcg-very-very-narrow":this.controller.isVeryVeryNarrow()}),didMount:this.bindFn(this.didMountRoot),onKeyDown:this.bindFn(this.handleRootKeydown),"x-ms-format-detection":"none",style:()=>({"--dcg-custom-background-color":this.controller.hasBackgroundColor()?this.controller.getBackgroundColor():void 0,"--dcg-custom-text-color":this.controller.hasTextColor()?this.controller.getTextColor():void 0,filter:this.model.isEnabled("invertedColors")?"invert(100%)":"none"}),children:N("div",{class:()=>({"dcg-calc-matrix-main":!0,"dcg-projector-mode":this.controller.isProjectorMode()}),style:()=>({"font-size":`${this.controller.getFontSize()}px`}),role:"application","aria-label":()=>this.props.controller().s("matrix-calculator-narration-title"),children:[u(Cg,{controller:this.props.controller}),u(Km,{controller:this.props.controller}),u(Ig,{controller:this.props.controller})]})})})})}didMountRoot(e){pl(e)}handleRootKeydown(e){return IT(e)?(this.dispatch({type:"undo"}),!1):AT(e)?(this.dispatch({type:"redo"}),!1):!(ha(e)&&tt(e)==="Backspace"&&(!document.activeElement||!ri(document.activeElement)))}};function so(e){return dw(e)}function na(e){this.setState(e)}na.prototype.setState=function(e){this.state=e};na.prototype.getState=function(){return this.state};na.prototype.set=function(e,t){if(arguments.length===1){this.state=e;return}else if(typeof e=="string"){this.state=so(this.state),this.state[e]=t;return}let r=e.length-2,n=e[r+1],o;this.state=o=so(this.state);for(let a=0;a<=r;a++){let i=e[a];o=o[i]=so(o[i])}o[n]=t};na.prototype.deepMutate=function(e,t){if(arguments.length===1){t=e,this.state=cn(this.state),t(this.state);return}else if(typeof e=="string"){this.state=so(this.state),this.state[e]=cn(this.state[e]),t(this.state[e]);return}let r=e.length-2,n=e[r+1],o=this.state=so(this.state);for(let a=0;a<=r;a++){let i=e[a];o=o[i]=so(o[i])}o=o[n]=cn(o[n]),t(o)};na.prototype.shallowMutate=function(e,t){if(arguments.length===1){t=e,this.state=so(this.state),t(this.state);return}else if(typeof e=="string"){this.state=so(this.state),this.state[e]=so(this.state[e]),t(this.state[e]);return}let r=e.length-1,n=this.state=so(this.state);for(let o=0;o<=r;o++){let a=e[o];n=n[a]=so(n[a])}t(n)};na.areShallowEqual=function(e,t){};na.areDeepEqual=function(e,t){};var uB={mcd:"gcd",gcf:"gcd",mcm:"lcm",signum:"sign",sgn:"sign",stdDevP:"stdevp",stddevp:"stdevp",stdDev:"stdev",stddev:"stdev",variance:"var",TScore:"tscore",inverseCdf:"quantile",inversecdf:"quantile",arsinh:"arcsinh",arcosh:"arccosh",artanh:"arctanh",arcsch:"arccsch",arsech:"arcsech",arcoth:"arccoth"};function xI(e){let t=0;for(;Qp(e.charCodeAt(t));)t+=1;return t>0&&(e=e.slice(t)),uB[e]||e}function vI(e,t,r){return{type:"Comparator",span:e,symbol:t,args:r}}function wI(e,t,r){if(t.length<1)throw"Programming Error: ComparatorChain must have at least one comparator.";if(r.length!==t.length+1)throw"Programming Error: ComparatorChain must have one more arg than symbols";return{type:"ComparatorChain",span:e,args:r,symbols:t}}function TI(e,t){return{type:"Tilde",span:e,args:t}}function SI(e,t){return{type:"Pos",span:e,args:t}}function MI(e,t){return{type:"Neg",span:e,args:t}}function kI(e,t){return{type:"Add",span:e,args:t}}function EI(e,t){return{type:"Sub",span:e,args:t}}function CI(e,t){return{type:"Mul",span:e,args:t}}function II(e,t){return{type:"DotMul",span:e,args:t}}function AI(e,t){return{type:"CrossMul",span:e,args:t}}function PI(e,t){return{type:"Div",span:e,args:t}}function NI(e,t){return{type:"Bang",span:e,args:t}}function Ku(e,t){return{type:"Call",span:e,args:t}}function dx(e,t){return{type:"ImplicitCall",span:e,args:t}}function _I(e,t){return{type:"Index",span:e,args:t}}function px(e,t){return{type:"Paren",span:e,args:t}}function mx(e,t){return{type:"List",span:e,args:t}}function LI(e,t){return{type:"Pipes",span:e,args:t}}function gx(e,t){return{type:"Subscript",span:e,args:t}}function Pg(e,t){return{type:"Superscript",span:e,args:t}}function Wu(e,t,r){return{type:"Prime",span:e,nprimes:t,args:r}}function Ng(e,t){return{type:"Seq",span:e,args:t}}function RI(e,t){return{type:"SemicolonSeq",span:e,args:t}}function DI(e,t){return{type:"Row",span:e,args:t}}function qI(e,t){return{type:"Matrix",span:e,args:t}}function OI(e){return{type:"EmptyCell",span:e}}function FI(e,t){return{type:"Sqrt",span:e,args:t}}function BI(e,t){return{type:"Nthroot",span:e,args:t}}function VI(e,t){return{type:"Frac",span:e,args:t}}function $I(e,t){return{type:"Derivative",span:e,args:t}}function GI(e,t){return{type:"Integral",span:e,args:t}}function UI(e,t){return{type:"EmptyIntegral",span:e,args:t}}function zI(e,t){return{type:"Sum",span:e,args:t}}function HI(e,t){return{type:"Product",span:e,args:t}}function KI(e,t){return{type:"Piecewise",span:e,args:t}}function WI(e){return{type:"EmptyPiecewise",span:e}}function hx(e){return{type:"EmptyRangeBound",span:e}}function fx(e){return{type:"EmptySemicolonSegment",span:e}}function jI(e,t){return{type:"Colon",span:e,args:t}}function yx(e,t){return{type:"Ellipsis",span:e,args:t}}function QI(e,t){return{type:"For",span:e,args:t}}function YI(e,t){return{type:"With",span:e,args:t}}function XI(e,t){return{type:"And",span:e,args:t}}function ZI(e,t){return{type:"Or",span:e,args:t}}function JI(e,t){return{type:"Dot",span:e,args:t}}function eA(e,t){return{type:"PercentOf",span:e,args:t}}function tA(e,t){return{type:"RightArrow",span:e,args:t}}function bx(e,t){return{type:"Juxt",span:e,args:t}}function rA(e,t){return{type:"Letter",span:e,val:t}}function _g(e,t){return{type:"Decimal",span:e,val:t}}function Vi(e,t){return{type:"Cmd",span:e,val:xI(t)}}function nA(e,t){return{type:"Alphanumeric",span:e,val:t}}function oA(e,t){return{type:"StringNode",span:e,val:t}}function aA(e,t,r,n){return{type:"MixedNumber",span:e,whole:t,num:r,den:n}}function ft(e){if(e.type==="Subscript"){if(e.args[1].type!=="Alphanumeric")return!1;e=e.args[0]}switch(e.type){case"Cmd":return!0;case"Letter":return!0;default:return!1}}function iA(e){return e.type!=="Superscript"?!1:ft(e.args[0])}function sA(e,t){if(e.type!=="Letter"||e.val!=="d"||t.type!=="Juxt")return!1;let[r,n]=t.args;return r.type!=="Letter"||r.val!=="d"?!1:ft(n)}function Qt(e){return e.type==="Seq"?e.args:[e]}function cA(e,t,r,n,o,a,i,s){return{opts:e,input:t,prevSpan:r,startIndex:n,endIndex:o,token:a,mode:i,parent:s}}function ee(e,t){return Zt(e.token.span,t.prevSpan)}function lt(e,t){return Zt(e,t.prevSpan)}function Pc(e){return tn(e.token.span.input,e.token.span.start)}function pB(e,t){return{type:"Differential",span:e,val:t}}function fr(e,t,r){return{type:e,span:t,val:r}}function Po(e,t){let r=tn(e.span.input,e.span.start);return vx(t,e,0,r,void 0,void 0)}function vx(e,t,r,n,o,a){let i=t.args;if(r>i.length&&a)return lA(a,n);r=ju(i,r);let{token:s,endIndex:c}=uA(t,r,o);if(s.type==="End"&&a){let l=a.input.args[a.startIndex];if(l.type==="LeftRight"){let p=l.right,y=oT[p.val]||"Err",x=fr(y,p.span,p.val);return cA(e,t,n,r,c,x,o,a)}}else s.type==="Int"?o=mB(o):s.type==="Differential"&&(o=gB(o));return cA(e,t,n,r,c,s,o,a)}function ce(e){let t=e.input.args[e.startIndex],r=e.token.span;return t&&t.type==="LeftRight"?vx(e.opts,t.arg,0,r,e.mode,e):lA(e,r)}function lA(e,t){let{input:r,endIndex:n,mode:o,parent:a}=e;return vx(e.opts,r,n+1,t,o,a)}function Nt(e){return e.token}function mB(e){return{type:"integral",parent:e}}function gB(e){if(!e||e.type!=="integral")throw new Error("Programming Error: expected lexer to be in integral mode.");return e.parent}function sr(e,t){return Nt(e).type===t}function Qu(e){if(e.startIndex<e.input.args.length)return!1;let t=e.parent;return!(t&&t.input.args[t.startIndex].type==="LeftRight"&&e.startIndex===e.input.args.length)}function wx(e,t){return t.token.span.start>e.token.span.start}function kt(e,t){return{token:t,endIndex:e}}function uA(e,t,r){let n=e.args;if(t>=n.length){let a=tn(e.span.input,e.span.end);return kt(t,fr("End",a,""))}let o=e.args[t];switch(o.type){case"Sqrt":case"Frac":case"SupSub":case"BMatrix":case"StringNode":return kt(t,o);case"Letter":{if(!r||r.type!=="integral"||o.val!="d")return kt(t,o);let{endIndex:l,token:p}=uA(e,t+1,r);if(p.type==="Letter"||p.type==="Cmd"){let y=pB(Zt(o.span,p.span),p.val);return kt(l,y)}else return kt(t,o)}case"LeftRight":{let l=o.left,p=nT[l.val]||"Err",y=Zt(o.span,l.span);return kt(t,fr(p,y,l.val))}case"OperatorName":let a=[];for(let l of o.arg.args){if(l.type!=="Letter")return kt(t,fr("Err",o.span,Ut(o.arg.span)));a.push(l.val)}let i="\\"+a.join(""),s=go[i]||"Cmd";return kt(t,fr(s,o.span,i));case"TokenNode":{let l="$";if(o.arg.args.length===0)return kt(t,fr("Err",o.span,Ut(o.arg.span)));for(let p of o.arg.args){if(p.type!=="Digit")return kt(t,fr("Err",o.span,Ut(o.arg.span)));l+=p.val}return kt(t,fr("TokenNode",o.span,l))}case"Cmd":{let l=go[o.val]||"Cmd";return kt(t,fr(l,o.span,o.val))}case"EscapedSymbol":{let l=rT[o.val]||"Err";return kt(t,fr(l,o.span,o.val))}case"Symbol":return hB(e,t,o);case"Digit":return dA(e,t);default:throw`Unexpected atom ${o.type}.`}}function hB(e,t,r){switch(r.val){case".":return fB(e,t);case"-":{let o=e.args[t+1];if(o&&Lg(o,">")){let a=fr("->",Zt(r.span,o.span),"->");return kt(t+1,a)}break}case"<":{let o=e.args[t+1];if(o&&Lg(o,"=")){let a=fr("<=",Zt(r.span,o.span),"<=");return kt(t+1,a)}break}case">":{let o=e.args[t+1];if(o&&Lg(o,"=")){let a=fr(">=",Zt(r.span,o.span),">=");return kt(t+1,a)}break}}let n=uf[r.val]||"Err";return kt(t,fr(n,r.span,r.val))}function fB(e,t){let r=e.args[t];if(r.type!=="Symbol"||r.val!==".")throw new Error("Programming Error: expected '.'");if(t+2<e.args.length&&Rg(e.args[t+1])&&Rg(e.args[t+2])){let a=Zt(r.span,e.args[t+2].span);return kt(t+2,fr("...",a,Ut(a)))}let n=ju(e.args,t+1);if(n<e.args.length&&e.args[n].type==="Digit")return dA(e,t);let o=uf[r.val]||"Err";return kt(t,fr(o,r.span,r.val))}function dA(e,t){let r=yB(e,t);if(r)return r;let n=e.args,o=e.args[t].span,a=[],i=!1,s=!1;for(;t<n.length;t++){let l=ju(n,t);if(l>=n.length)break;let p=n[l];if(p.type==="Digit")t=l,i=!0,a.push(p.val);else if(!s&&Rg(p)){if(l+1<n.length&&Rg(e.args[l+1]))break;t=l,s=!0,a.push(".")}else break}if(!i)throw new Error("Programming Error: decimals must have at least one digit.");let c=Zt(o,e.args[t-1].span);return kt(t-1,fr("Decimal",c,a.join("")))}function yB(e,t){let r=e.args,n=r[t].span,o=[];for(;t<r.length;t++){let l=ju(r,t);if(l>=r.length)break;let p=r[l];if(p.type!=="Digit")break;t=l,o.push(p.val)}if(t=ju(r,t),t>=r.length)return;let a=r[t];if(a.type!=="Frac")return;let i=[],s=[];for(let l of a.num.args)if(!xx(l)){if(l.type!=="Digit")return;i.push(l.val)}for(let l of a.den.args)if(!xx(l)){if(l.type!=="Digit")return;s.push(l.val)}let c=Zt(n,a.span);return kt(t,aA(c,o.join(""),i.join(""),s.join("")))}function xx(e){switch(e.type){case"Sqrt":case"Frac":case"SupSub":case"LeftRight":case"OperatorName":case"TokenNode":case"Symbol":case"Letter":case"Digit":case"BMatrix":case"StringNode":return!1;case"Cmd":return e.val==="\\space";case"EscapedSymbol":return e.val==="\\ "||e.val==="\\:"||e.val==="\\,"||e.val==="\\;";default:throw`Unexpected atom ${e.type}.`}}function ju(e,t){for(;t<e.length&&xx(e[t]);)t+=1;return t}function Rg(e){return Lg(e,".")}function Lg(e,t){return e.type==="Symbol"&&e.val===t}var Nc={},bB=["sin","cos","tan","cot","sec","csc","sinh","cosh","tanh","coth","sech","csch"];bB.forEach(e=>{Nc[e]="arc"+e,Nc["arc"+e]=e});var xB=0;function bA(e,t){return vB(e,t)}function me(e,t){let r=[];for(let n=0;n<t.length;n++)r.push(Ge(e,t[n]));return r}function pA(e,t,r){let n=e.nodes,[o,a]=me(e,t);if(Og(r)){let i=tn(r.span.input,r.span.end),s=e.setInput(wA(e),i);a=e.setInput(new n.SeededFunctionCall(a,[s]),r.span)}return[o,a]}function vB(e,t){return e.setInput(TB(e,t),t.span)}function wB(e){if(e.type!=="Call")return;let[t,r]=e.args,n=Qt(r);if(ft(t)&&n.every(ft))return{base:t,args:n}}function xA(e){if(e.type!=="Call")return!1;let[t,r]=e.args;return ft(t)}function Ix(e){return ft(e)}function TB(e,t){let r=e.nodes;switch(t.type){case"Comparator":if(t.symbol==="="){let[n,o]=t.args,a=wB(n);if(a){let{base:i,args:s}=a,c=me(e,s),l=e;if(e.includeFunctionParametersInRandomSeed)for(let y of c)l=Xu(l,{prefix:"fc",expr:y});let p=Ge(l,o);return new r.FunctionDefinition(Ge(e,i),c,p)}else{if(n.type==="Call"&&ft(n.args[0]))return new r.CallAssignment(Ge(e,n),Ge(e,o));if(Ix(n)){let i;return o.type==="For"?i=e.setInput(Dg(e,o,{parentIsList:!1}),o.span):i=Ge(e,o),new r.Assignment(Ge(e,n),i)}}return new r.Equation(Ge(e,n),Ge(e,o))}else return co(e,t);case"Tilde":{let[n,o]=me(e,t.args);return new r.Regression(n,o)}case"ComparatorChain":{if(!e.specializeDoubleInequalities||t.symbols.length!==2)return co(e,t);let[n,o,a]=t.args,[i,s]=t.symbols;return!ft(o)||t.symbols.includes("=")?co(e,t):new r.DoubleInequality([Ge(e,n),i,Ge(e,o),s,Ge(e,a)])}case"Call":{let[n,o]=t.args;if(n.type==="Cmd")switch(n.val){case"histogram":return new r.Histogram(me(e,Qt(o)));case"dotplot":return new r.DotPlot(me(e,Qt(o)));case"boxplot":return new r.BoxPlot(me(e,Qt(o)));case"stats":return new r.Stats(me(e,Qt(o)));default:return Yu(e,t)}return Yu(e,t)}case"For":return Dg(e,t,{parentIsList:!1});default:return Yu(e,t)}}function mA(e,t,r,n){let o=SB(e,r,n);if(o!==void 0)return e.setInput(o,Zt(t.args[0].span,n.span))}function SB(e,t,r){let n=e.nodes;if(r.type==="Letter")switch(r.val){case"x":case"y":case"z":case"p":return new n.NamedCoordinateAccess(r.val,[t])}else if(r.type==="Cmd")switch(r.val){case"real":case"imag":throw hE(r.val)}}function Ge(e,t){return e.setInput(Yu(e,t),t.span)}function Yu(e,t){let r=e.nodes;switch(t.type){case"Pos":{let[o]=t.args;switch(o.type){case"Decimal":return new r.Constant(Sx(o));case"MixedNumber":return new r.MixedNumber(Mx(o));default:return new r.Positive([Ge(e,o)])}}case"Neg":{let[o]=t.args;switch(o.type){case"Decimal":return new r.Constant(Xn(Sx(o)));case"MixedNumber":return new r.MixedNumber(Xn(Mx(o)));default:return new r.Negative([Ge(e,o)])}}case"Add":return new r.Add(me(e,t.args));case"Sub":return new r.Subtract(me(e,t.args));case"Mul":return new r.Multiply(me(e,t.args));case"DotMul":return new r.DotMultiply(me(e,t.args));case"CrossMul":return new r.CrossMultiply(me(e,t.args));case"Div":return new r.Divide(me(e,t.args));case"Bang":{let[o]=t.args;return o.type==="Call"&&ft(o.args[0])&&!Og(o.args[0])&&Qt(o.args[1]).length===1?new r.FunctionFactorial(me(e,o.args)):new r.FunctionCall("\\factorial",me(e,t.args))}case"PercentOf":return new r.PercentOf(me(e,t.args));case"Call":return fA(e,t);case"ImplicitCall":return NB(t),fA(e,t);case"Dot":{let o=t.args[1],[a,i]=pA(e,t.args,o);if(o.type==="Letter")switch(o.val){case"x":case"y":case"z":case"p":return new r.NamedCoordinateAccess(o.val,[a]);default:break}else if(o.type==="Call"){let s=o.args[0],c=mA(e,t,a,s);if(c!==void 0){let l=hA(o);return new r.Multiply([c,Tx(e,o.args[1],Gt(t.span.input,l,o.span.end))])}}return new r.DotAccess([a,i])}case"Prime":{let[o]=t.args;if(o.type==="Call"){let[a,i]=o.args,s=Qt(i).length;if(a.type==="Cmd"&&a.val==="logbase"){if(s!==2)throw Cb()}else if(s!==1)throw Cb();return new r.Prime(t.nprimes,me(e,t.args))}else throw o.type==="ImplicitCall"?Lb():_b()}case"Index":{let[o,a]=t.args;if(a.type==="SemicolonSeq"){if(a.args.length!==2)throw e.matricesEnabled?mE():oo(";");return new r.MatrixAccess([Ge(e,o),gA(e,a.args[0]),gA(e,a.args[1])])}if(a.type==="Seq")return new r.ListAccess([Ge(e,o),e.setInput(new r.List(me(e,a.args)),void 0)]);if(a.type==="Ellipsis"){let[i,s]=a.args;return new r.ListAccess([Ge(e,o),Ex(e,i,s,a.span)])}return $i(a)?new r.ListAccess([Ge(e,o),e.setInput(co(e,a),void 0)]):new r.ListAccess(me(e,t.args))}case"Paren":{let[o]=t.args;return Tx(e,o,t.span)}case"List":{if(t.args.length===0)return new r.List([]);let o=t.args[0];if(o.type==="Ellipsis"){let[a,i]=o.args;return new r.Range([e.setInput(new r.List(me(e,Qt(a))),void 0),e.setInput(new r.List(me(e,Qt(i))),void 0)])}else if(o.type==="For")return Dg(e,o,{parentIsList:!0});return new r.List(me(e,Qt(o)))}case"Pipes":{let[o]=t.args;return new r.Norm([Ge(e,o)])}case"Subscript":{let[o,a]=t.args;if(a.val.length===0)throw Nb();let i;switch(o.type){case"Letter":i=o.val;break;case"Cmd":i=o.val;break;default:throw CE()}if(i==="ans")throw oo("ans");return new r.Identifier(`${i}_${a.val}`)}case"Superscript":{let[o,a]=t.args;if(o.type==="Call"&&o.args[1].type!=="Seq"&&!Og(o.args[0])&&!_B(o))return new r.FunctionExponent(me(e,[o.args[0],o.args[1],a]));if(o.type==="Dot"){let i=o.args[1],[s,c]=pA(e,o.args,i),l=Ge(e,a);if(i.type==="Letter")switch(i.val){case"x":case"y":case"z":return new r.Exponent([e.setInput(new r.NamedCoordinateAccess(i.val,[s]),o.span),l]);default:break}else if(i.type==="Call"){let p=i.args[0],y=mA(e,o,s,p);if(y!==void 0){let x=hA(i);return new r.Multiply([y,e.setInput(new r.Exponent([Tx(e,i.args[1],Gt(t.span.input,x,i.span.end)),l]),Gt(t.span.input,x,a.span.end))])}}return new r.Exponent([e.setInput(new r.DotAccess([s,c]),o.span),l])}else return new r.Exponent(me(e,t.args))}case"Sqrt":return new r.FunctionCall("sqrt",me(e,t.args));case"Nthroot":return new r.FunctionCall("nthroot",me(e,[t.args[1],t.args[0]]));case"Frac":return new r.Divide(me(e,t.args));case"Derivative":{let o=me(e,t.args);if(!ft(t.args[0]))throw ir(`Expected identifier in derivative, but found ${t.args[0].type}`);return new r.Derivative(o[0],[o[1]])}case"Integral":{let[o,a,i,s]=t.args,c=me(e,[o,a,i,s]);return new r.Integral(c)}case"EmptyIntegral":{let[o,a,i]=me(e,t.args),s=e.setInput(new r.Constant(Le(1,1)),void 0);return new r.Integral([o,a,i,s])}case"Sum":{let[o,a,i]=t.args;if(a.type!=="Comparator"||!Gi(a))throw jE();let s=me(e,[a.args[0],a.args[1],i]),c=Ge(Xu(e,{prefix:"ro",expr:s[0]}),o);return new r.Sum(s.concat(c))}case"Product":{let[o,a,i]=t.args;if(a.type!=="Comparator"||!Gi(a))throw QE();let s=me(e,[a.args[0],a.args[1],i]),c=Ge(Xu(e,{prefix:"ro",expr:s[0]}),o);return new r.Product(s.concat(c))}case"Juxt":{if(e.writeIntegral){let[i,s]=t.args;if(s.type==="Letter"&&s.val==="t"&&i.type==="Juxt"&&([i,s]=i.args,s.type==="Letter"&&s.val==="n")){if(i.type==="Juxt"){if([i,s]=i.args,s.type==="Letter"&&s.val==="i")throw Rb()}else if(i.type==="Letter"&&i.val==="i")throw Rb()}}let[o,a]=t.args;if(o.type==="MixedNumber"&&!(ft(a)||a.type==="Piecewise"||a.type==="Call"||a.type==="Paren"))throw Ab(qg(o));if(a.type==="MixedNumber")throw Ab(qg(a));return new r.Multiply(me(e,t.args))}case"Letter":return new r.Identifier(t.val);case"Cmd":{let o=t.val;switch(o){case"ans":{if(e.index===void 0)throw vc("ans");return new r.Ans(`ans_{${e.index-1}}`)}case"approx":throw Sb(o);case"dt":{if(!e.allowDt)throw vc(o);return new r.Identifier(o)}case"index":{if(!e.allowIndex)throw vc(o);return new r.Identifier(o)}default:return new r.Identifier(o)}}case"With":{if(e.isSubstitutionRHS)throw Vb();let[o,a]=t.args,i={...e,isSubstitutionRHS:!0};return new r.Substitution(Ge(i,o),IB(i,a))}case"Decimal":return new r.Constant(Sx(t));case"MixedNumber":return new r.MixedNumber(Mx(t));case"Piecewise":return PB(e,t);case"RightArrow":return AB(e,t);case"Seq":return new r.BareSeq(me(e,t.args));case"SemicolonSeq":throw oo(";");case"EmptyPiecewise":return new r.Restriction([e.setInput(new r.Constant(!0),tn(t.span.input,t.span.start))]);case"Comparator":throw t.symbol==="="?oo("="):Mb();case"ComparatorChain":throw t.symbols.includes("=")?nE():Mb();case"And":throw e.disallowLogicalOperators?Ne():kb("and");case"Or":throw e.disallowLogicalOperators?Ne():kb("or");case"Tilde":throw oo("~");case"Colon":throw oo(":");case"Ellipsis":throw oo("...");case"For":return Dg(e,t,{parentIsList:!1});case"EmptyRangeBound":throw HE();case"EmptySemicolonSegment":throw Pb(";");case"Err":throw LB(t.error,e.matricesEnabled);case"Matrix":{if(t.args.length===0)throw NE();return new r.Matrix(me(e,t.args))}case"Row":return new r.MatrixRow(me(e,t.args));case"EmptyCell":return new r.EmptyCell([]);case"StringNode":return new r.StringNode(t.val);default:throw`Unexpected surface node ${t.type}.`}}function kx(e){return Nc.hasOwnProperty(e)}function gA(e,t){let r=e.nodes;if(t.type==="Seq")return e.setInput(new r.List(me(e,t.args)),t.span);if(t.type==="Ellipsis"){let[n,o]=t.args;return Ex(e,n,o,t.span)}return t.type==="EmptySemicolonSegment"?Ex(e,t,t,t.span):Ge(e,t)}function Ex(e,t,r,n){let o=e.nodes,a=t.type==="EmptyRangeBound"||t.type==="EmptySemicolonSegment",i=r.type==="EmptyRangeBound"||r.type==="EmptySemicolonSegment",s=a?[]:me(e,Qt(t)),c=i?[]:me(e,Qt(r));return e.setInput(new o.Range([e.setInput(new o.List(s),t.span),e.setInput(new o.List(c),r.span)]),n)}function Tx(e,t,r){let n=e.nodes;if(t.type==="Seq"){if(t.args.length===0)throw _E();return e.setInput(new n.ParenSeq(me(e,t.args)),r)}return e.setInput(new n.Paren([Ge(e,t)]),r)}function vA(e){return e==="ln"||e==="log"||e==="logbase"}function MB(e){return e.type==="Decimal"&&e.val==="2"}function kB(e){return e.type!=="Neg"?!1:(e=e.args[0],e.type==="Decimal"&&e.val==="1")}function hA(e){return e.args[0].span.end}function fA(e,t){let r=e.nodes,[n,o]=t.args,a=Ge(e,n),i=Qt(o),s=me(e,i);if(Og(n)){let c=tn(o.span.input,o.span.start),l=e.setInput(wA(e),c);return new r.SeededFunctionCall(a,[l].concat(s))}if(ft(n))return new r.FunctionCall(a,s);if(n.type==="Superscript"){let[c,l]=n.args;if(c.type==="Cmd"){let p=c.val;if(kx(p)||vA(p)){if(MB(l))return new r.Exponent([e.setInput(new r.FunctionCall(p,s),void 0),Ge(e,l)]);if(kB(l)&&Nc[p]!==void 0)return new r.FunctionCall(Nc[p],s);throw kx(p)?DE(p):qE(p==="logbase"?"log":p)}}}return new r.Multiply([a,Ge(e,o)])}function Dg(e,t,{parentIsList:r}){let n=e.nodes,[o,a]=t.args,i=e.setInput(new n.Identifier(`_comprehensionIndex_${xB++}`),void 0);if(o.type==="For")throw Oi("for");let s=Ge(Xu(e,{prefix:"li",expr:i}),o);if(a.type==="SemicolonSeq"){if(!e.matricesEnabled)throw oo(";");return CB(e,i,s,a)}a.type==="Seq"&&EB(e,a);let c=[],l=[];for(let y of Qt(a))if(e.allowIntervalComprehensions&&y.type==="ComparatorChain"){let x=Cx(y),{min:M,identifier:L,max:T,open:w}=x;l.push({identifier:Ge(e,L),bounds:[Ge(e,M),Ge(e,T)],open:w})}else if(y.type==="Comparator"&&Gi(y)){let x=e.setInput(new n.AssignmentExpression(me(e,y.args)),y.span);c.push(x)}else{if(y.type==="Comparator")throw Ou("a");{let x=Bb();throw y.type==="Cmd"&&y.val==="cursor"&&x.setCursorContext({type:"for-assignment-lhs",allowedTypes:[$]}),x}}let p=r;return new n.ListComprehension(i,s,c,p,l)}function EB(e,t){let r=!1,n=!1,o=!1;for(let a=0;a<t.args.length;a++){let i=t.args[a];Gi(i)||e.allowIntervalComprehensions&&i.type==="ComparatorChain"?r=!0:n=!0,i.type==="Cmd"&&i.val==="cursor"&&(o=!0)}if(r&&n){let a=Oi("for");throw o&&a.setCursorContext({type:"for-assignment-lhs",allowedTypes:[$]}),a}}function CB(e,t,r,n){let o=e.nodes,a=[];for(let i of n.args)if(i.type==="Comparator"&&Gi(i)){let s=e.setInput(new o.AssignmentExpression(me(e,i.args)),i.span);a.push(s)}else throw i.type==="Seq"?vC():Bb();return new o.MatrixComprehension(t,r,a)}function IB(e,t){let r=e.nodes;if(t.type==="Seq"){let a=!1,i=!1,s=!1;for(let c=0;c<t.args.length;c++){let l=t.args[c];if(l.type==="With")throw Oi("with");if(Gi(l)||yA(l))a=!0;else if(e.allowIntervalComprehensions&&l.type==="ComparatorChain")try{Cx(l),i=!0}catch(p){s=!0}else s=!0}if((a||i)&&s)throw Oi("with");if(i)throw $b()}if(e.allowIntervalComprehensions&&t.type==="ComparatorChain"){let a;try{Cx(t),a=!0}catch(i){a=!1}if(a)throw $b()}if(t.type==="With")throw Vb();let n=Qt(t),o=[];for(let a of n){if(a.type!="Comparator"||!Gi(a)&&!yA(a))throw xC();let i=e.setInput(new r.AssignmentExpression(me(e,a.args)),a.span);o.push(i)}return o}function yA(e){if(e.type!=="Comparator"||e.symbol!=="=")return!1;let t=e.args[0];if(t.type!=="Call")return!1;let[r]=t.args;return!!ft(r)}function Cx(e){if(e.symbols.length!==2)throw Ou("a");let[t,r,n]=e.args,[o,a]=e.symbols;if(!ft(r))throw Ou("a");if(o!=="<"&&o!=="<="||a!=="<"&&a!=="<="||e.symbols.includes("="))throw Ou(Ut(r.span));return{min:t,identifier:r,max:n,open:[o==="<",a==="<"]}}function AB(e,t){let r=e.nodes;if(!ft(t.args[0]))throw fE();return e=Xu(e,{prefix:"ec",expr:e.setInput(new r.Identifier("globalEventCount"),void 0)}),new r.UpdateRule(me(e,t.args))}function PB(e,t){let r=e.nodes,[n]=t.args,o=Qt(n);if(o.length===1&&$i(o[0])){let x=o[0];return new r.Restriction([e.setInput(co(e,x),x.span)])}if(o.length>1&&o.every($i)){if(o.some(M=>{let L=Ax(M).type;return L==="And"||L==="Or"}))throw dE();let x=e.setInput(co(e,o[0]),o[0].span);for(let M=1;M<o.length;M++){let L=e.setInput(co(e,o[M]),o[M].span);x=e.setInput(new r.Or([x,L]),Zt(o[0].span,o[M].span))}return new r.Restriction([x])}let a,i=[];e:for(a=0;a<o.length;a++){let x=o[a];if($i(x)){i.push({condition:e.setInput(co(e,x),x.span),if_expr:e.setInput(new r.Constant(Le(1,1)),Gt("1",0,1))});continue}switch(x.type){case"Colon":{let[M,L]=x.args;if(!$i(M))throw BE();if(L.type==="With"&&L.args[1].type==="Seq")throw Oi("with");i.push({condition:e.setInput(co(e,M),M.span),if_expr:Ge(e,L)});break}case"For":throw Oi("for");default:break e}}if(a===0)throw OE();if(a<o.length-1)throw FE();let s,c;a===o.length-1?(s=Yu(e,o[a]),c=o[a]):s=new r.Constant(NaN);let l=s,p=c==null?void 0:c.span,y;for(;i.length;)y=i.pop(),l=new r.Piecewise([y.condition,y.if_expr,e.setInput(l,p)]),p=void 0;return l}function Ax(e){for(;e.type==="Paren";)e=e.args[0];return e}function $i(e){switch(Ax(e).type){case"Comparator":case"ComparatorChain":case"And":case"Or":return!0;default:return!1}}function co(e,t){let r=e.nodes;switch(t=Ax(t),t.type){case"Comparator":switch(t.symbol){case"<":return new r["Comparator['<']"](me(e,t.args));case"<=":return new r["Comparator['<=']"](me(e,t.args));case">":return new r["Comparator['>']"](me(e,t.args));case">=":return new r["Comparator['>=']"](me(e,t.args));case"=":return new r["Comparator['=']"](me(e,t.args));default:throw new Error(`Unexpected symbol ${t.symbol}`)}case"ComparatorChain":return new r.ComparatorChain(t.symbols,me(e,t.args));case"And":case"Or":{if(e.disallowLogicalOperators)throw Ne();if(!t.args.every($i))throw pE(t.type==="And"?"and":"or");let n=t.type==="And"?"Or":"And";if(t.args.some(a=>a.type===n))throw uE();let o=t.args.map(a=>e.setInput(co(e,a),a.span));return t.type==="And"?new r.And(o):new r.Or(o)}default:throw ir(`Unexpected type for condition: ${t.type}`)}}function NB(e){let[t,r]=e.args;if(t.type==="Superscript"&&(t=t.args[0]),t.type==="Cmd"&&t.val==="logbase"&&r.type==="Seq"&&r.args.length===2){if(!No(r.args[0]))throw Ib("log")}else if(!No(r))throw t.type==="Cmd"?Ib(t.val):ir(`Unexpected type for args of implicit call: ${r.type}`)}function Sx(e){return Hl(e.val)}function Mx(e){let t=Hl(e.whole),r=Hl(e.num),n=Hl(e.den);return Ln(t,Zn(r,n))}function _B(e){if(e.type!=="Call")return!1;let t=e.args[0];for(;t.type==="Superscript"||t.type==="Subscript"||t.type==="Prime";)t=t.args[0];return t.type!=="Cmd"?!1:kx(t.val)||vA(t.val)}function Gi(e){return e.type==="Comparator"&&e.symbol==="="&&ft(e.args[0])}function LB(e,t){switch(e.type){case"UnexpectedParseError":case"MissingBound":case"EmptyGroup":case"UnexpectedDifferential":case"UnexpectedEnd":return ir(`Unexpected error type: ${e.type}`);case"InvalidOperatorName":return EE();case"UnexpectedCloseDelimiter":case"MissingCloseDelimiter":return nC(e.open,e.close);case"UnrecognizedSymbol":return e.val==="."?oo(e.val):t&&e.val==="#"?rE():Sb(e.val);case"EmptyInput":return VE();case"BinaryOperatorMissingRight":case"BinaryOperatorMissingLeft":return Pb(e.val==="%"?"% of":e.val);case"UnaryOperatorMissingLeft":return xE(e.val);case"UnaryOperatorMissingRight":return vE(e.val);case"UnexpectedSubscript":return GE(e.base);case"PercentMissingOf":return oC();case"SumMissingBound":return KE();case"ProductMissingBound":return WE();case"IntegralMissingBound":return YE();case"SumMissingBody":return JE();case"ProductMissingBody":return eC();case"IntegralMissingBody":return tC();case"DerivativeMissingBody":return rC();case"IntegralMissingDifferential":return XE();case"DifferentialWithSuperscript":return ZE();case"FractionMissingNumerator":return wE();case"FractionMissingDenominator":return TE();case"FractionEmpty":return SE();case"EmptySuperscript":return ME();case"EmptySubscript":return Nb();case"InvalidSubscript":return kE(e.val);case"SuperscriptWithPrime":return IE();case"PrimeWithoutParen":return Lb();case"UnexpectedPrime":return _b();case"EmptyRadical":return AE();case"EmptyRadicalIndex":return PE();case"EmptySquareBracket":return LE();case"EmptyPipe":return RE();case"FunctionMissingArgument":return Du(e.val,1,0,{includeUsageExample:!0});case"AdjacentNumbers":return yE(qg(e.args[0]),qg(e.args[1]));case"TokenWithSubscript":return bE();case"UnexpectedFor":return oo("for");default:throw`Unexpected surface node ${e.type}.`}}function qg(e){switch(e.type){case"Decimal":return e.val;case"MixedNumber":return`${e.whole} ${e.num}/${e.den}`;default:let t=e;throw new Error(`Unexpected node type ${t.type}`)}}function No(e){switch(e.type){case"Letter":case"Decimal":case"MixedNumber":case"Cmd":case"EmptyPiecewise":return!0;case"Neg":case"Pos":{let[r]=e.args;return r.type==="Decimal"||r.type==="MixedNumber"}case"Paren":return No(e.args[0]);case"Juxt":case"Mul":case"DotMul":case"CrossMul":case"Div":return No(e.args[0])&&No(e.args[1]);case"Subscript":return No(e.args[0]);case"Superscript":case"Frac":case"Add":case"Sub":return No(e.args[0])&&No(e.args[1]);case"Piecewise":{let[r]=e.args;return $i(r)}case"Call":{let[r,n]=e.args;return ft(r)||iA(r)?!1:No(r)&&No(n)}case"Derivative":case"Sqrt":case"Nthroot":case"Pipes":case"Bang":return!1;case"Comparator":case"ComparatorChain":case"And":case"Or":case"Tilde":case"ImplicitCall":case"Index":case"List":case"Seq":case"SemicolonSeq":case"Matrix":case"Row":case"EmptyCell":case"StringNode":case"Integral":case"EmptyIntegral":case"Sum":case"Product":case"Colon":case"Ellipsis":case"For":case"With":case"Dot":case"PercentOf":case"Prime":case"EmptyRangeBound":case"EmptySemicolonSegment":case"RightArrow":return!1;default:throw`Unexpected surface node ${e.type}.`}}function Og(e){return e.type!=="Cmd"?!1:e.val==="random"||e.val==="shuffle"}function wA(e){let t=new e.nodes.ExtendSeed("",[e.setInput(new e.nodes.Identifier("globalRandomSeed"),void 0),e.setInput(new e.nodes.Seed(e.nextSeed()),void 0)]);if(!e.seedExtensions)return t;for(let{prefix:r,expr:n}of e.seedExtensions)t=new e.nodes.ExtendSeed(r,[e.setInput(t,void 0),n]);return t}function Xu(e,t){let r=e.seedExtensions||[];return{...e,seedExtensions:r.concat(t)}}function _c(e){return{type:"initial",tokenType:e}}function Zu(e){return{type:"l",tokenType:e}}function Ju(e){return{type:"r",tokenType:e}}function ke(e){return{type:"la",tokenType:e}}function Lc(e){return{type:"ra",tokenType:e}}function TA(e,t){for(let r of aT)if(t[r]===void 0)throw new Error(`Programming Error: token ${r} must be a assigned a ${e} precedence`)}function Ui(e,t,r,n){if(t[r]!==void 0)throw new Error(`Programming Error: duplicate ${e} entry for token ${r}.`);t[r]=n}function SA(e){let t={},r={},n={};for(let s=0;s<e.length;s++){let c=e[s];for(let{type:l,tokenType:p}of c)switch(l){case"initial":Ui("initial",t,p,s);break;case"l":Ui("left",r,p,s);break;case"r":Ui("right",n,p,s);break;case"la":Ui("left",r,p,s),Ui("right",n,p,s);break;case"ra":Ui("left",r,p,s),Ui("right",n,p,s-1);break}}TA("left",r),TA("right",n);function o(s){return n[s]}function a(s){return r[s]}function i(s){let c=t[s];return c===void 0?o(s):c}return{rightPrec:o,leftPrec:a,initialPrec:i}}function ae(e,t){return{type:"Err",span:e,error:t}}function MA(){return{type:"UnexpectedParseError"}}function kA(){return{type:"EmptyInput"}}function EA(){return{type:"EmptyGroup"}}function Px(){return{type:"EmptySubscript"}}function CA(){return{type:"EmptySuperscript"}}function Nx(){return{type:"EmptyRadical"}}function IA(){return{type:"EmptySquareBracket"}}function AA(){return{type:"EmptyPipe"}}function PA(){return{type:"EmptyRadicalIndex"}}function _x(){return{type:"UnexpectedEnd"}}function Oa(e){return{type:"BinaryOperatorMissingRight",val:e}}function NA(e){return{type:"BinaryOperatorMissingLeft",val:e}}function Lx(e){return{type:"UnaryOperatorMissingRight",val:e}}function Rx(e){return{type:"UnaryOperatorMissingLeft",val:e}}function _A(e,t){return{type:"MissingCloseDelimiter",open:e,close:t}}function ed(e,t){return{type:"UnexpectedCloseDelimiter",open:e,close:t}}function LA(){return{type:"UnexpectedDifferential"}}function RA(e){return{type:"UnrecognizedSymbol",val:e}}function DA(e){return{type:"InvalidSubscript",val:e}}function qA(e){return{type:"UnexpectedSubscript",base:e}}function Dx(e){return{type:"FunctionMissingArgument",val:e}}function OA(){return{type:"PercentMissingOf"}}function qx(){return{type:"PrimeWithoutParen"}}function FA(){return{type:"SuperscriptWithPrime"}}function Fg(){return{type:"UnexpectedPrime"}}function BA(){return{type:"SumMissingBound"}}function VA(){return{type:"ProductMissingBound"}}function Ox(){return{type:"MissingBound"}}function $A(){return{type:"IntegralMissingBound"}}function GA(){return{type:"SumMissingBody"}}function UA(){return{type:"ProductMissingBody"}}function zA(){return{type:"IntegralMissingBody"}}function HA(){return{type:"DerivativeMissingBody"}}function KA(){return{type:"IntegralMissingDifferential"}}function WA(){return{type:"DifferentialWithSuperscript"}}function jA(){return{type:"FractionMissingNumerator"}}function QA(){return{type:"FractionMissingDenominator"}}function YA(){return{type:"FractionEmpty"}}function Fx(e){return{type:"AdjacentNumbers",args:e}}function XA(){return{type:"TokenWithSubscript"}}var DB=[[_c("("),ke(")"),_c("\\{"),ke("\\}"),Ju("["),ke("]"),_c("(|"),ke("|)"),ke("Differential"),ke("End")],[ke("for")],[Ju("with")],[ke(";")],[Lc("...")],[ke(",")],[Lc(":")],[Ju("->")],[Zu("with")],[ke("or")],[ke("and")],[ke("="),ke(">"),ke("<"),ke(">="),ke("<="),ke("~")],[Zu("->")],[ke("+"),ke("-")],[ke("*"),ke("\\cdot"),ke("\\times"),ke("/"),ke("Decimal"),ke("MixedNumber"),ke("Letter"),ke("Cmd"),ke("TokenNode"),ke("%"),Ju("("),ke("\\{"),ke("(|"),ke("Frac"),ke("Sqrt"),ke("BMatrix"),ke("Trig"),ke("Ln"),ke("Log"),Lc("Int"),Lc("Sum"),Lc("Prod")],[_c("+"),_c("-")],[ke("!")],[ke("SupSub")],[Zu("["),ke(".")],[Zu("(")],[ke("Err")]],{leftPrec:td,rightPrec:ZA,initialPrec:$x}=SA(DB),JA={trailingComma:!1};function rP(e,t){let r=t?{...JA,...t}:JA,n=Po(e,r),o=qB(n);return o.type==="Err"&&o.error.type==="EmptyGroup"?ae(o.span,kA()):o}function qB(e){return oa(e,{isToplevel:!0})}function oa(e,{isToplevel:t}={isToplevel:!1}){if(Qu(e))return ae(ee(e,e),EA());let{state:r,tree:n}=yt(e,0,{isToplevel:t});return n.type!=="Err"&&!Qu(r)?Gx(r).tree:n}function q(e,t){return{state:e,tree:t}}function yt(e,t,{isToplevel:r}={isToplevel:!1}){let n=e,o;if({state:n,tree:o}=OB(n),o.type==="Err")return q(n,o);if(!wx(e,n))throw new Error("Programming Error: parseInitial did not advance state.");for(;!Qu(n);){let a;if(sr(n,"(")&&!BB(o)?a=ZA("("):a=td(Nt(n).type),t>=a)break;let i=n,s=FB(n,o,r)?$x("("):ZA(Nt(n).type);if({state:n,tree:o}=Vx(n,o,s),o.type==="Err")return q(n,o);if(!wx(i,n))throw new Error("Programming Error: parseSuccessor did not advance state.")}return q(n,o)}function Kr(e){return e.type==="UnexpectedDifferential"||e.type==="UnexpectedCloseDelimiter"||e.type==="UnexpectedEnd"}function OB(e){let t=e,r=Nt(e),n=$x(r.type),o;switch(r.type){case"+":{if(e=ce(e),{state:e,tree:o}=yt(e,n),o.type==="Err"){if(!Kr(o.error))return q(e,o);let i=ee(t,e),s=ae(i,Lx(r.val));return q(e,s)}return q(e,SI(ee(t,e),[o]))}case"-":if(e=ce(e),{state:e,tree:o}=yt(e,n),o.type==="Err"){if(!Kr(o.error))return q(e,o);let i=ee(t,e),s=ae(i,Lx(r.val));return q(e,s)}else return q(e,MI(ee(t,e),[o]));case"(":return rd(e);case"\\{":return e=ce(e),sr(e,"\\}")?(e=ce(e),q(e,WI(ee(t,e)))):({state:e,tree:o}=yt(e,n),{state:e,tree:o}=nd(t,e,o,"\\{","\\}"),o.type==="Err"?q(e,o):q(e,KI(ee(t,e),[o])));case"[":return e=ce(e),sr(e,"]")?(e=ce(e),q(e,mx(ee(t,e),[]))):({state:e,tree:o}=yt(e,n),{state:e,tree:o}=nd(t,e,o,"[","]"),o.type==="Err"?q(e,o):q(e,mx(ee(t,e),[o])));case"(|":{if(e=ce(e),sr(e,"|)")){e=ce(e);let i=ee(t,e);return q(e,ae(i,AA()))}return{state:e,tree:o}=yt(e,n),{state:e,tree:o}=nd(t,e,o,"(|","|)"),o.type==="Err"?q(e,o):q(e,LI(ee(t,e),[o]))}case"Frac":{if(e.opts.disallowFrac)throw Db();e=ce(e);let i=oa(Po(r.num,e.opts)),s=oa(Po(r.den,e.opts));if(i.type==="Err"&&i.error.type==="EmptyGroup"&&s.type==="Err"&&s.error.type==="EmptyGroup"){let c=ee(t,e),l=ae(c,YA());return q(e,l)}if(i.type==="Err"&&i.error.type==="EmptyGroup"){let c=ee(t,e),l=ae(c,jA());return q(e,l)}if(s.type==="Err"&&s.error.type==="EmptyGroup"){let c=ee(t,e),l=ae(c,QA());return q(e,l)}if(i.type==="Err")return q(e,i);if(s.type==="Err")return q(e,s);if(sA(i,s)&&s.type==="Juxt"){let c=s.args[1],l;if({state:e,tree:l}=yt(e,td("*")-1),l.type==="Err"){if(Kr(l.error)){let p=ee(t,e);return q(e,ae(p,HA()))}return q(e,l)}return q(e,$I(ee(t,e),[c,l]))}return q(e,VI(ee(t,e),[i,s]))}case"Sqrt":if(e=ce(e),r.optArg){let i=oa(Po(r.optArg,e.opts));if(i.type==="Err")return i.error.type==="EmptyGroup"?q(e,ae(i.span,PA())):q(e,i);let s=oa(Po(r.arg,e.opts));return s.type==="Err"?s.error.type==="EmptyGroup"?q(e,ae(s.span,Nx())):q(e,s):q(e,BI(ee(t,e),[i,s]))}else{let i=oa(Po(r.arg,e.opts));return i.type==="Err"?i.error.type==="EmptyGroup"?q(e,ae(i.span,Nx())):q(e,i):q(e,FI(ee(t,e),[i]))}case"BMatrix":{e=ce(e);let i=[];for(let s of r.rows){let c=[];for(let p of s){let y=Po(p,e.opts);if(Qu(y)){c.push(OI(p.span));continue}let x=oa(y);if(x.type==="Err")return q(e,x);c.push(x)}let l=Zt(s[0].span,s[s.length-1].span);i.push(DI(l,c))}return q(e,qI(ee(t,e),i))}case"StringNode":return e=ce(e),q(e,oA(ee(t,e),r.text));case"Trig":case"Ln":{e=ce(e);let i=Vi(ee(t,e),r.val),s=0,c=Nt(e);if(c.type==="SupSub"){if(e=ce(e),c.sub){let y=ee(t,e),x=ae(y,qA(i.val));return q(e,x)}let p=Bg(c,e.opts);if(p){if(p.type==="Err")return q(e,p);i=Pg(ee(t,e),[i,p])}s=c.nprimes}let l=sr(e,"(");if(l){if({state:e,tree:o}=rd(e),o.type==="Err")return q(e,o);o=Ku(ee(t,e),[i,o.args[0]])}else{if({state:e,tree:o}=yt(e,n-1),o.type==="Err")return Kr(o.error)?q(e,ae(ee(t,e),Dx(r.val))):q(e,o);o=dx(ee(t,e),[i,o])}if(s>0){let p=ee(t,e);if(!l){let y=ae(p,qx());return q(e,y)}o=Wu(p,s,[o])}return q(e,o)}case"Log":{e=ce(e);let i=ee(t,e),s=Vi(i,r.val),c=0,l,p,y=Nt(e);if(y.type==="SupSub"&&(e=ce(e),l=nP(y,e.opts),p=Bg(y,e.opts),c=y.nprimes),l&&l.type==="Err")return q(e,l);if(p&&p.type==="Err")return q(e,p);let x=sr(e,"(");if(x){if({state:e,tree:o}=rd(e),o.type==="Err")return q(e,o);o=o.args[0]}else if({state:e,tree:o}=yt(e,n-1),o.type==="Err")return Kr(o.error)?q(e,ae(ee(t,e),Dx(r.val))):q(e,o);let M=l?Vi(i,"\\logbase"):s,L=l?Ng(ee(t,e),Qt(o).concat(l)):o;if(p&&(M=Pg(ee(t,e),[M,p])),x?o=Ku(ee(t,e),[M,L]):o=dx(ee(t,e),[M,L]),c>0){let T=ee(t,e);if(!x){let w=ae(T,qx());return q(e,w)}o=Wu(T,c,[o])}return q(e,o)}case"Int":{e=ce(e);let i=Nt(e);e=ce(e);let s=Bx(i,t,e);if(s.type==="Err")return s.error.type==="MissingBound"?q(e,ae(s.span,$A())):q(e,s);let{sup:c,sub:l}=s,p;if(sr(e,"Differential"))return{state:e,tree:p}=tP(e),p.type==="Err"?q(e,p):q(e,UI(ee(t,e),[p,l,c]));if({state:e,tree:o}=yt(e,n),o.type==="Err")return Kr(o.error)?q(e,ae(o.span,zA())):q(e,o);let y=o;return sr(e,"Differential")?({state:e,tree:p}=tP(e),p.type==="Err"?q(e,p):q(e,GI(ee(t,e),[p,l,c,y]))):q(e,ae(ee(t,e),KA()))}case"Sum":{e=ce(e);let i=Nt(e);e=ce(e);let s=Bx(i,t,e);if(s.type==="Err")return s.error.type==="MissingBound"?q(e,ae(s.span,BA())):q(e,s);let{sup:c,sub:l}=s;return{state:e,tree:o}=yt(e,n),o.type==="Err"?Kr(o.error)?q(e,ae(o.span,GA())):q(e,o):q(e,zI(ee(t,e),[o,l,c]))}case"Prod":{e=ce(e);let i=Nt(e);e=ce(e);let s=Bx(i,t,e);if(s.type==="Err")return s.error.type==="MissingBound"?q(e,ae(s.span,VA())):q(e,s);let{sup:c,sub:l}=s;return{state:e,tree:o}=yt(e,n),o.type==="Err"?Kr(o.error)?q(e,ae(o.span,UA())):q(e,o):q(e,HI(ee(t,e),[o,l,c]))}case"Cmd":return e=ce(e),o=Vi(ee(t,e),r.val),q(e,o);case"TokenNode":{e=ce(e);let i=Nt(e);return i.type==="SupSub"&&i.sub?(e=ce(e),q(e,ae(ee(t,e),XA()))):(o=Vi(ee(t,e),r.val),q(e,o))}case"Letter":return e=ce(e),o=rA(ee(t,e),r.val),q(e,o);case"Decimal":{e=ce(e);let i=_g(ee(t,e),r.val),s=e.token;if(s.type==="Decimal"||s.type==="MixedNumber"){let c=e;e=ce(e);let l=ee(t,e),p=s.type==="MixedNumber"?s:_g(ee(c,e),s.val);return q(e,ae(l,Fx([i,p])))}if(r.val.endsWith(".")&&s.type==="Cmd"&&(s.val==="\\real"||s.val==="\\imag"))throw Eb();return q(e,i)}case"MixedNumber":{if(e.opts.disallowFrac)throw Db();e=ce(e);let i=e.token;if(i.type==="Decimal"||i.type==="MixedNumber"){let s=e;e=ce(e);let c=ee(t,e),l=i.type==="MixedNumber"?i:_g(ee(s,e),i.val);return q(e,ae(c,Fx([r,l])))}return q(e,r)}case"*":case"\\cdot":case"\\times":case"/":case",":case"=":case">":case"<":case">=":case"<=":case"->":case"~":case":":case"%":case".":case"for":case"with":case"and":case"or":{e=ce(e);let i=ee(t,e),s=ae(i,NA(r.val));return q(e,s)}case";":{let i=fx(Pc(t));return Vx(e,i,n)}case"...":{let i=hx(Pc(t));return Vx(e,i,n)}case"!":{e=ce(e);let i=ee(t,e),s=ae(i,Rx(r.val));return q(e,s)}case"SupSub":{e=ce(e);let i="supsub";r.sub?i="subscript":r.sup?i="superscript":r.nprimes>0&&(i="prime");let s=ee(t,e),c=ae(s,Rx(i));return q(e,c)}case")":case"\\}":case"]":case"|)":case"Differential":return Gx(e);case"Err":{e=ce(e);let i=ee(t,e),s=ae(i,RA(r.val));return q(e,s)}case"End":{let i=ee(t,e),s=ae(i,_x());return q(e,s)}default:throw`Unexpected token type ${r.type}.`}}function FB(e,t,r){return sr(e,"=")&&r&&(xA(t)||Ix(t))}function Vx(e,t,r){let n=Nt(e),o;switch(n.type){case"+":case"-":case"*":case"\\cdot":case"\\times":case"/":case"~":case":":case".":case"->":case"for":{if(e=ce(e),{state:e,tree:o}=yt(e,r),o.type==="Err")if(Kr(o.error)){let i=lt(t.span,e),s=ae(i,Oa(n.val));return q(e,s)}else return q(e,o);return q(e,eP(n.type,lt(t.span,e),[t,o]))}case"and":case"or":case"with":{if(e=ce(e),{state:e,tree:o}=yt(e,r),o.type==="Err")if(Kr(o.error)){let i=lt(t.span,e),s=ae(i,Oa(n.val));return q(e,s)}else return q(e,o);return q(e,eP(n.type,lt(t.span,e),[t,o]))}case"%":{e=ce(e);let i=Nt(e);if(i.type!=="Cmd"||i.val!=="of"&&i.val!=="\\of"){let s=ae(n.span,OA());return q(e,s)}if(e=ce(e),{state:e,tree:o}=yt(e,r),o.type==="Err")if(Kr(o.error)){let s=lt(t.span,e),c=ae(s,Oa(n.val));return q(e,c)}else return q(e,o);return q(e,eA(lt(t.span,e),[t,o]))}case"=":case">=":case"<=":case">":case"<":{let i=[t],s=[];for(;;){let l=Nt(e).type;if(l!=="="&&l!==">="&&l!=="<="&&l!==">"&&l!=="<")break;if(s.push(l),e=ce(e),{state:e,tree:o}=yt(e,r),o.type==="Err")if(Kr(o.error)){let p=lt(t.span,e),y=ae(p,Oa(n.val));return q(e,y)}else return q(e,o);i.push(o)}let c=i[i.length-1];return c.type==="Comparator"?(i.pop(),Array.prototype.push.apply(i,c.args),s.push(c.symbol)):c.type==="ComparatorChain"&&(i.pop(),Array.prototype.push.apply(i,c.args),Array.prototype.push.apply(s,c.symbols)),i.length===2?q(e,vI(lt(t.span,e),s[0],i)):q(e,wI(lt(t.span,e),s,i))}case"!":return e=ce(e),q(e,NI(lt(t.span,e),[t]));case"[":{let i=e;if(e=ce(e),sr(e,"]")){e=ce(e);let s=ee(i,e);return q(e,ae(s,IA()))}return{state:e,tree:o}=yt(e,r),{state:e,tree:o}=nd(i,e,o,"[","]"),o.type==="Err"?q(e,o):q(e,_I(lt(t.span,e),[t,o]))}case"Sqrt":case"Frac":case"BMatrix":case"StringNode":case"Letter":case"Cmd":case"TokenNode":case"Trig":case"Ln":case"Log":case"Sum":case"Int":case"Prod":case"Decimal":case"MixedNumber":case"\\{":case"(|":return{state:e,tree:o}=yt(e,r),o.type==="Err"?q(e,o):q(e,bx(lt(t.span,e),[t,o]));case"(":if(ft(t)){if({state:e,tree:o}=rd(e),o.type==="Err")return q(e,o);let i=lt(t.span,e);return q(e,Ku(i,[t,o.args[0]]))}else if(t.type==="Prime"&&ft(t.args[0])){if({state:e,tree:o}=rd(e),o.type==="Err")return q(e,o);let i=lt(t.span,e);return q(e,Wu(i,t.nprimes,[Ku(i,[t.args[0],o.args[0]])]))}else return{state:e,tree:o}=yt(e,r),o.type==="Err"?q(e,o):q(e,bx(lt(t.span,e),[t,o]));case"SupSub":{e=ce(e);let i=oP(n),s=Bg(n,e.opts);if(i&&i.type==="Err")return q(e,i);if(s&&s.type==="Err")return q(e,s);if(i&&(t=gx(lt(t.span,e),[t,i])),s&&(t=Pg(lt(t.span,e),[t,s])),n.nprimes>0){let c=lt(t.span,e);if(!ft(t)){let l=ae(c,Fg());return q(e,l)}t=Wu(c,n.nprimes,[t])}return q(e,t)}case",":{let i=[t];for(;sr(e,",")&&(e=ce(e),!(sr(e,"...")||e.opts.trailingComma&&r>td(Nt(e).type)));){if({state:e,tree:o}=yt(e,r),o.type==="Err")if(Kr(o.error)){let s=lt(t.span,e),c=ae(s,Oa(n.val));return q(e,c)}else return q(e,o);i.push(o)}return q(e,Ng(lt(t.span,e),i))}case";":{let i=[t];for(;sr(e,";");){if(e=ce(e),r>=td(Nt(e).type)){i.push(fx(Pc(e)));continue}if({state:e,tree:o}=yt(e,r),o.type==="Err")if(Kr(o.error)){let s=lt(t.span,e),c=ae(s,Oa(n.val));return q(e,c)}else return q(e,o);i.push(o)}return q(e,RI(lt(t.span,e),i))}case"...":{if(e=ce(e),sr(e,",")&&(e=ce(e)),r>=td(Nt(e).type))return q(e,yx(lt(t.span,e),[t,hx(Pc(e))]));if({state:e,tree:o}=yt(e,r),o.type==="Err")if(Kr(o.error)){let i=lt(t.span,e),s=ae(i,Oa(n.val));return q(e,s)}else return q(e,o);return q(e,yx(lt(t.span,e),[t,o]))}case"]":case")":case"\\}":case"|)":case"Differential":return Gx(e);case"Err":return yt(e,r);case"End":{let i=ee(e,e),s=ae(i,_x());return q(e,s)}default:throw`Unexpected token type ${n.type}.`}}function BB(e){return!!(ft(e)||e.type==="Prime"&&ft(e.args[0]))}function eP(e,t,r){switch(e){case"+":return kI(t,r);case"-":return EI(t,r);case"*":return CI(t,r);case"\\cdot":return II(t,r);case"\\times":return AI(t,r);case"/":return PI(t,r);case"~":return TI(t,r);case":":return jI(t,r);case".":switch(r[0].type){case"Decimal":case"MixedNumber":throw Eb();default:return JI(t,r)}case"->":return tA(t,r);case"for":return QI(t,r);case"with":return YI(t,r);case"and":return XI(t,r);case"or":return ZI(t,r);default:throw`Unexpected token type ${e}.`}}function nP(e,t){if(!e.sub)return;let r=e.sub,n=oa(Po(r,t));return n.type==="Err"&&n.error.type==="EmptyGroup"?ae(n.span,Px()):n}function oP(e){if(!e.sub)return;let t=e.sub;if(t.args.length===0)return ae(t.span,Px());let r=[];for(let n of t.args)if(n.type==="Digit"||n.type==="Letter")r.push(n.val);else{let o=n.span;return ae(o,DA(Ut(o)))}return nA(t.span,r.join(""))}function Bg(e,t){if(!e.sup)return;let r=oa(Po(e.sup,t));return r.type==="Err"?r.error.type==="EmptyGroup"?ae(r.span,CA()):r:e.nprimes>0?ae(e.span,FA()):r}function Bx(e,t,r){if(e.type!=="SupSub"){let a=ee(t,r);return ae(a,Ox())}if(e.nprimes>0){let a=ee(t,r);return ae(a,Fg())}let n=nP(e,r.opts),o=Bg(e,r.opts);if(!n||n.type==="Err"&&n.error.type==="EmptySubscript"||!o||o.type==="Err"&&o.error.type==="EmptySuperscript"){let a=ee(t,r);return ae(a,Ox())}return n.type==="Err"?n:o.type==="Err"?o:{type:"Bounds",sup:o,sub:n}}function rd(e){if(e.opts.disableParentheses)throw cC();let t=e,r=Nt(e),n=$x(r.type);if(sr(e,"("))e=ce(e);else throw new Error("Programming Error: expected '(' at start of parseParen.");if(sr(e,")")){let a=Ng(Pc(e),[]);e=ce(e);let i=ee(t,e);return q(e,px(i,[a]))}let o;return{state:e,tree:o}=yt(e,n),{state:e,tree:o}=nd(t,e,o,"(",")"),o.type==="Err"?q(e,o):q(e,px(ee(t,e),[o]))}function tP(e){let t=e,r=Nt(e);if(r.type!=="Differential")throw new Error("Programming Error: expected differential");e=ce(e);let n=Vi(r.span,r.val),o=Nt(e);if(o.type==="SupSub"){e=ce(e);let a=ee(t,e),i=oP(o);if(i){if(i.type==="Err")return q(e,i);n=gx(a,[n,i])}if(o.sup)return q(e,ae(a,WA()));if(o.nprimes>0)return q(e,ae(a,Fg()))}return q(e,n)}function nd(e,t,r,n,o){if(r.type==="Err"&&r.error.type!=="UnexpectedEnd")return q(t,r);if(r.type==="Err"||!sr(t,o)){let a=ee(e,t),i=ae(a,_A(n,o));return q(t,i)}return t=ce(t),q(t,r)}function Gx(e){let t=e;switch(Nt(e).type){case")":{e=ce(e);let n=ee(t,e);return q(e,ae(n,ed("(",")")))}case"]":{e=ce(e);let n=ee(t,e);return q(e,ae(n,ed("[","]")))}case"\\}":{e=ce(e);let n=ee(t,e);return q(e,ae(n,ed("\\{","\\}")))}case"|)":{e=ce(e);let n=ee(t,e);return q(e,ae(n,ed("|","|")))}case"Differential":{e=ce(e);let n=ee(t,e);return q(e,ae(n,LA()))}default:{e=ce(e);let n=ee(t,e);return q(e,ae(n,MA()))}}}function od(e,t){return{type:"Group",span:e,args:t}}function aP(e,t,r){return{type:"Sqrt",span:e,optArg:t,arg:r}}function iP(e,t,r){return{type:"Frac",span:e,num:t,den:r}}function sP(e,t,r,n){return{type:"SupSub",span:e,sup:t,sub:r,nprimes:n}}function cP(e,t,r,n){return{type:"LeftRight",span:e,left:t,right:r,arg:n}}function lP(e,t){return{type:"BMatrix",span:e,rows:t}}function uP(e,t){return{type:"OperatorName",span:e,arg:t}}function dP(e,t){return{type:"TokenNode",span:e,arg:t}}function pP(e,t){return{type:"Symbol",span:e,val:t}}function mP(e,t){return{type:"StringNode",span:e,text:t}}var Ux={type:"primitive",errorName:"^"},hP={type:"primitive",errorName:"_"},$B={"\\frac":{type:"macro",errorName:"\\frac",expandsToSingleAtom:!0},"\\operatorname":{type:"macro",errorName:"\\operatorname",expandsToSingleAtom:!1},"\\token":{type:"macro",errorName:"\\token",expandsToSingleAtom:!1},"\\tokenName":{type:"macro",errorName:"\\tokenName",expandsToSingleAtom:!1}};function fP(e){let t=wr(e);if(t.type==="Cmd")return t.val==="\\sqrt"?ai(Jt(e),"[")?{type:"macro",errorName:"\\sqrt[*]",expandsToSingleAtom:!1}:{type:"primitive",errorName:"\\sqrt"}:$B[t.val];if(t.type==="^"||t.type==="Primes^")return Ux;if(t.type==="_")return hP}function yP(e){let{state:t,tree:r}=ad(Yp(e),!1);if(!Ho(t))throw new Error(`Parse error: unexpected ${Ut(wr(t).span)}.`);return r}function Lr(e,t){return{state:e,tree:t}}function ad(e,t){let r=e,n=[];e:for(;!Ho(e);){let a=wr(e);switch(a.type){case"Cmd":case"EscapedSymbol":case"Letter":case"Digit":case"Symbol":case"[":case"{":case"^":case"_":case"Primes":case"Primes^":case"Left":case"Begin":case"Text":case"TextGroup":case"]":case"&":case"\\\\":{if(a.type==="]"&&t)break e;let s;if({state:e,tree:s}=zx(e),s.type==="Group")for(let c of s.args)n.push(c);else n.push(s);break}case"}":case"Right":case"End":case"EOF":break e;default:let i=a.type;throw new Error(`Unexpected token type ${i}.`)}}let o=jn(r,e);return Lr(e,od(o,n))}function zx(e){let t=wr(e);switch(t.type){case"EscapedSymbol":case"Letter":case"Digit":case"Symbol":return e=Jt(e),Lr(e,t);case"[":case"]":return e=Jt(e),Lr(e,pP(t.span,t.val));case"{":{e=Jt(e);let n;return{state:e,tree:n}=ad(e,!1),e=Tr(e,"}"),Lr(e,n)}case"^":case"_":case"Primes":case"Primes^":return JB(e);case"Left":return ZB(e);case"Begin":return WB(e);case"Text":return jB(e);case"Cmd":return GB(e);case"&":case"\\\\":throw new Error(`Parse Error: unexpected ${t.val}.`);case"}":case"Right":case"End":throw new Error(`Parse Error: unexpected ${t.val}.`);case"EOF":throw new Error("Parse Error: unexpected end.");case"TextGroup":throw new Error("Parse Error: unexpected TextGroup.");default:let r=t.type;throw new Error(`Unexpected token type ${r}.`)}}function GB(e){let t=fP(e),r=wr(e);if(!t)return e=Tr(e,"Cmd"),Lr(e,r);switch(r.val){case"\\operatorname":return UB(e,t);case"\\token":case"\\tokenName":return zB(e,t);case"\\sqrt":return HB(e,t);case"\\frac":return KB(e,t);default:throw new Error(`Unexpected command ${r.val}.`)}}function UB(e,t){let r=e;e=Tr(e,"Cmd");let n;({state:e,tree:n}=Fa(e,t));let o=jn(r,e);return Lr(e,uP(o,n))}function zB(e,t){let r=e;e=Tr(e,"Cmd");let n;({state:e,tree:n}=Fa(e,t));let o=jn(r,e);return Lr(e,dP(o,n))}function HB(e,t){let r=e;e=Tr(e,"Cmd");let n;ai(e,"[")&&({state:e,tree:n}=eV(e));let o;({state:e,tree:o}=Fa(e,t));let a=jn(r,e);return Lr(e,aP(a,n,o))}function KB(e,t){let r=e;e=Tr(e,"Cmd");let n;({state:e,tree:n}=Fa(e,t));let o;({state:e,tree:o}=Fa(e,t));let a=jn(r,e);return Lr(e,iP(a,n,o))}function WB(e){let t=e;e=Tr(e,"Begin");let r;switch({state:e,name:r}=gP(e),r){case"bmatrix":{let n;if({state:e,rows:n}=QB(e),ai(e,"End"))e=Jt(e);else throw new Error(`Parse Error: unterminated \\begin{${r}}.`);let o;if({state:e,name:o}=gP(e),o!==r)throw new Error(`Parse Error: \\begin{${r}} closed by \\end{${o}}.`);let a=jn(t,e);return Lr(e,lP(a,n))}default:throw new Error(`Parse Error: unsupported environment ${r}.`)}}function gP(e){let t=wr(e);e=Tr(e,"{"),{state:e}=ad(e,!1);let r=wr(e);return e=Tr(e,"}"),{state:e,name:t.span.input.slice(t.span.end,r.span.start)}}function jB(e){let t=e;if(e=Tr(e,"Text"),wr(e).val!=="{")throw new Error("Parse Error: expected {.");e=ZS(e);let n=wr(e);if(n.type!=="TextGroup")throw new Error("Parse Error: expected text.");if(e=Jt(e),e=Tr(e,"}"),!n.val.startsWith("``")||!n.val.endsWith("''"))throw new Error("Parse Error: expected quotes inside \\text.");let o=n.val.slice(2,-2),a=Qs(o);if(a===void 0)throw new Error("Parse Error: expected valid text.");let i=jn(t,e);return Lr(e,mP(i,a))}function QB(e){let t=[],r=0;for(;!Ho(e)&&!ai(e,"End");){let n;if({state:e,row:n}=YB(e),r=Math.max(r,n.length),t.push(n),ai(e,"\\\\"))e=Jt(e);else break}for(let n of t){let o=n[n.length-1].span;for(let a=n.length;a<r;a++)n.push(od(tn(o.input,o.end),[]))}return{state:e,rows:t}}function YB(e){let t=[];for(;!Ho(e);){let r;if({state:e,tree:r}=XB(e),t.push(r),ai(e,"&"))e=Jt(e);else break}return{state:e,row:t}}function XB(e){let t=e,r=[];e:for(;!Ho(e);)switch(wr(e).type){case"End":case"&":case"\\\\":break e;default:let a;if({state:e,tree:a}=zx(e),a.type==="Group")for(let i of a.args)r.push(i);else r.push(a);break}let n=jn(t,e);return Lr(e,od(n,r))}function ZB(e){let t=e;e=Tr(e,"Left");let r=wr(e);e=Jt(e);let n;({state:e,tree:n}=ad(e,!1)),e=Tr(e,"Right");let o=wr(e);e=Jt(e);let a=jn(t,e);return Lr(e,cP(a,r,o,n))}function JB(e){let t=e,r,n,o=0;e:for(;!Ho(e);){let i=wr(e);switch(i.type){case"^":if(e=Jt(e),r)throw new Error("Parse Error: double superscript.");({state:e,tree:r}=Fa(e,Ux));break;case"_":if(e=Jt(e),n)throw new Error("Parse Error: double subscript.");({state:e,tree:n}=Fa(e,hP));break;case"Primes":if(e=Jt(e),o>0)throw new Error("Parse Error: double primes.");o=i.val.length;break;case"Primes^":if(e=Jt(e),o>0)throw new Error("Parse Error: double primes.");if(r)throw new Error("Parse Error: double superscript");o=i.val.length-1,{state:e,tree:r}=Fa(e,Ux);break;default:break e}}let a=jn(t,e);return Lr(e,sP(a,r,n,o))}function Fa(e,t){let r,n=fP(e);if(n&&(t.type!=="primitive"||!(n.type==="macro"&&n.expandsToSingleAtom)))throw new Error(`Parse Error: can't use ${n.errorName} as argument of ${t.errorName}. Use {}.`);return{state:e,tree:r}=zx(e),r.type!=="Group"&&(r=od(r.span,[r])),Lr(e,r)}function eV(e){e=Tr(e,"[");let t;return{state:e,tree:t}=ad(e,!0),e=Tr(e,"]"),Lr(e,t)}function bP(e){return{type:"constant",value:e,valueType:"number"}}function xP(e){return{type:"matrix",elements:e,valueType:"matrix"}}function Vg(e,t,r){return{type:"intrinsic",symbol:e,args:t,valueType:r}}var Rc=class{constructor(t){this.type="constant";this.value=t}},$g=class{constructor(t){this.type="matrix";this.elements=t}},Dc=class{constructor(t){this.type="identifier";this.symbol=t}},id=class{constructor(t,r){this.type="functionCall";this.symbol=t,this.args=r}},Gg=class{constructor(t,r){this.type="functionExponent";this.symbol=t,this.args=r}},Ba=class{constructor(t,r){this.type="op";this.symbol=t,this.args=r}},Ug=class extends Ba{constructor(t){super("add",t),this.args=t}},zg=class extends Ba{constructor(t){super("sub",t),this.args=t}},Va=class extends Ba{constructor(t){super("mul",t),this.args=t}},Hg=class extends Ba{constructor(t){super("div",t),this.args=t}},qc=class extends Ba{constructor(t){super("pow",t),this.args=t}},Kg=class extends Ba{constructor(t){super("neg",t),this.args=t}},Wg=class{constructor(t){this.type="pos";this.args=t}},jg=class{constructor(t){this.type="paren";this.args=t}};var nV=["det","rref","trace","inv","transpose"];function wP(e){return e=e.replace(/\\operatorname\{(.*)\}/,"$1"),e.replace(/[{}\\]/g,"")}var be=function(e){return class{constructor(){throw e()}}},Kx=class extends Dc{constructor(t){super(wP(t))}},Wx=class extends id{constructor(t,r){let n;typeof t=="string"?n=wP(t):n=t.symbol,super(n,r)}},jx=class extends Gg{constructor(t){super(t[0].symbol,t.slice(1))}},oV={Constant:Rc,MixedNumber:Rc,Identifier:Kx,FunctionCall:Wx,FunctionExponent:jx,Add:Ug,Subtract:zg,Multiply:Va,DotMultiply:Va,CrossMultiply:Va,Divide:Hg,Exponent:qc,Negative:Kg,Positive:Wg,Paren:jg,And:be(Ne),Or:be(Ne),Ans:be(()=>vc("ans")),Assignment:be(pC),"Comparator['<']":be(qi),"Comparator['>']":be(qi),"Comparator['<=']":be(qi),"Comparator['>=']":be(qi),"Comparator['=']":be(qu),Derivative:be(Ne),ComparatorChain:function(e){throw e.includes("=")?qu():qi()},DoubleInequality:be(qi),Equation:be(qu),CallAssignment:be(qu),FunctionDefinition:be(aC),Integral:be(Ne),List:be(Ne),Matrix:be(Ne),MatrixRow:be(Ne),EmptyCell:be(Ne),ListAccess:be(Ne),MatrixAccess:be(Ne),ParenSeq:be(sC),NamedCoordinateAccess:be(Ne),Norm:be(()=>dg("abs")),Piecewise:be(Ne),Restriction:be(Ne),Prime:be(Ne),Product:be(Ne),Range:be(Ne),Regression:be(iC),StringNode:be(Ne),Sum:be(Ne),DotAccess:be(Ne),Histogram:be(Ne),DotPlot:be(Ne),BoxPlot:be(Ne),Stats:be(Ne),PercentOf:be(Ne),FunctionFactorial:be(Ne),SeededFunctionCall:be(Ne),BareSeq:be(Ne),AssignmentExpression:be(Ne),ListComprehension:be(Ne),MatrixComprehension:be(Ne),Substitution:be(Ne),UpdateRule:be(Ne),Seed:be(Ne),ExtendSeed:be(Ne)};function aV(e,t){return e}function iV(){throw new Error("Programming error: function 'sample' not implemented in the matrix calculator.")}function Qx(e){let t=yP(e),r=rP(t);return bA({nodes:oV,setInput:aV,nextSeed:iV,allowIndex:!1,allowDt:!1,writeIntegral:!1,allowIntervalComprehensions:!1,specializeDoubleInequalities:!1,disallowLogicalOperators:!0,includeFunctionParametersInRandomSeed:!0},r)}function Yx(e){let t=[];for(let r of e){let n=[];for(let o of r)o===""?n.push(new Rc(Le(0,1))):n.push(Qx(o));t.push(n)}return new $g(t)}var sV={canDefine:e=>/^[A-F]$/.test(e)};function TP(){return{frame:{},policy:sV}}function Qg(e){throw new Error("Unexpected object: "+e)}var Hx={add:[[["number","number"],"number","nadd"],[["matrix","matrix"],"matrix","add"]],sub:[[["number","number"],"number","nsub"],[["matrix","matrix"],"matrix","sub"]],mul:[[["number","number"],"number","nmul"],[["number","matrix"],"matrix","leftScale"],[["matrix","number"],"matrix","rightScale"],[["matrix","matrix"],"matrix","mul"]],div:[[["number","number"],"number","ndiv"],[["matrix","number"],"matrix","div"]],pow:[[["number","number"],"number","npow"],[["matrix","number"],"matrix","powChecked"]],sqrt:[[["number"],"number","nsqrt"]],neg:[[["number"],"number","nneg"],[["matrix"],"matrix","neg"]],inv:[[["matrix"],"matrix","inv"]],det:[[["matrix"],"number","det"]],trace:[[["matrix"],"number","trace"]],transpose:[[["matrix"],"matrix","transpose"]],rref:[[["matrix"],"matrix","rref"]]};function vP(e,t){for(let r=0;r<e.length;r++){if(t.length!==e[r][0].length)continue;let n=!0;for(let o=0;o<t.length;o++)if(t[o].valueType!==e[r][0][o]){n=!1;break}if(n)return e[r]}}function cV(e){let t=e[0][0].length;for(let r=1;r<e.length;r++)if(e[r][0].length!==t)return-1;return t}function SP(e){switch(e){case"matrix":return re("shared-calculator-label-value-type-matrix");case"number":return re("shared-calculator-label-value-type-number");default:return Qg(e)}}function zi(e){return e.map(t=>SP(t.valueType))}function Vn(e,t){var r,n;switch(t.type){case"constant":return bP(t.value);case"matrix":{let o=t.elements.map(a=>a.map(i=>Vn(e,i)));return o.forEach(a=>a.forEach(i=>{if(i.valueType!=="number")throw yC([SP(i.valueType)])})),xP(o)}case"pos":case"paren":return Vn(e,t.args[0]);case"op":{if(t.symbol==="pow"&&t.args.length===2){let c=Vn(e,t.args[0]),l=t.args[1];if(c.valueType==="matrix"&&l.type==="identifier"&&l.symbol==="T")return Vg("transpose",[c],"matrix")}let o=t.args.map(c=>Vn(e,c)),a=Hx[t.symbol],i=vP(a,o),s=!0;if(!i){let c=t.symbol;switch(c){case"add":throw oE(zi(o),{blockExport:s});case"sub":throw aE(zi(o),{blockExport:s});case"mul":throw iE(zi(o),{blockExport:s});case"div":throw sE(zi(o),{blockExport:s});case"pow":throw cE(zi(o),{blockExport:s});case"neg":throw lE(zi(o),{blockExport:s});default:return Qg(c)}}return Vg(i[2],o,i[1])}case"functionCall":{let o=Hx[t.symbol];if(!o){if(t.args.length===1)return Vn(e,new Va([new Dc(t.symbol),t.args[0]]));throw e.frame[t.symbol]?zE(t.symbol):((r=Fi.get(t.symbol))==null?void 0:r.type)==="Placeholder"?dg(t.symbol):$E(t.symbol)}let a=t.args.map(s=>Vn(e,s)),i=vP(o,a);if(!i){let s=cV(o);throw s>=0&&s!==a.length?Du(t.symbol,s,a.length,{includeUsageExample:!0}):gE(t.symbol,zi(a),{blockExport:!0})}return Vg(i[2],a,i[1])}case"functionExponent":{let o=Hx[t.symbol];return t.args.length===2&&!o?Vn(e,new Va([new Dc(t.symbol),new qc([t.args[0],t.args[1]])])):Vn(e,new qc([new id(t.symbol,[t.args[0]]),t.args[1]]))}case"identifier":{if(e.frame[t.symbol])return Vn(e,e.frame[t.symbol]);throw e.policy.canDefine(t.symbol)?UE([t.symbol]):nV.includes(t.symbol)?Du(t.symbol,1,0,{includeUsageExample:!1}):((n=Fi.get(t.symbol))==null?void 0:n.type)==="Placeholder"?dg(t.symbol):bC(t.symbol)}default:return Qg(t)}}function sd(e){switch(e.type){case"constant":return e.value;case"matrix":return e.elements.map(t=>t.map(r=>sd(r)));case"intrinsic":return hg[e.symbol].apply(void 0,e.args.map(sd));default:return Qg(e)}}function MP(e){let t={},{expressions:r,order:n}=e,o=TP();return n.forEach(a=>{let i=r[a];if(i.type==="matrix")try{o.frame[i.variable]=Yx(i.matrix)}catch(s){}}),n.forEach(a=>{let i=r[a],s={};try{if(i.type==="latex"){if(i.latex){let c=Qx(i.latex);c.type!=="constant"&&(s.answer=sd(Vn(o,c)))}}else if(i.type==="matrix")sd(Vn(o,Yx(i.matrix)));else return i}catch(c){c instanceof z?s.error=c.getError():s.error=ir(c).getError()}t[i.id]=s}),t}var kP=6,EP="1",CP=["A","B","C","D","E","F","G","H"],Hi=["remove-matrix-row","add-matrix-row","remove-matrix-col","add-matrix-col"],cd=class{constructor(t){this._nextObjectId=0;this.clearAll(),this.config=t}setOption(t,r){this.config[t]=r}generateObjectId(){return(this._nextObjectId++).toString()}updateNextObjectId(){let t=this.getState().order,r=/^[0-9]+$/;for(let n of t)if(r.test(n)){let o=parseInt(n,10);o>=this._nextObjectId&&(this._nextObjectId=o+1)}}generateMatrixVariable(){let t={},{expressions:r}=this.getState();for(let n in r){let o=r[n];o.type==="matrix"&&(t[o.variable]=!0)}for(let n of CP)if(!t[n])return n;return""}isEnabled(t){return!!this.config[t]}getTextColor(){return this.config.textColor}getBackgroundColor(){return this.config.backgroundColor}getFontSize(){return this.config.fontSize||16}getLanguage(){return this.config.language}hasUnusedMatrixVariables(){let{expressions:t}=this.getState();return Object.values(t).filter(r=>r.type==="matrix").length<CP.length}clearShouldDebounceUndoRedo(){this._shouldDebounceUndoRedo=!1}markShouldDebounceUndoRedo(){this._shouldDebounceUndoRedo=!0}getShouldDebounceUndoRedo(){return this._shouldDebounceUndoRedo}clearAll(){let t=this.store?this.store.getState().ui.containerSize:{width:0,height:0},r={version:EP,expressions:{1:{id:"1",type:"latex",latex:"",displayAsFraction:!1}},order:["1"],ui:{focus:{type:"unknown"},settingsMenuOpen:!1,containerSize:t}};this.store?this.store.set(r):this.store=new na(r),this.updateNextObjectId()}getPersistedState(){let{version:t,expressions:r,order:n}=this.getState();return{version:t,expressions:r,order:n}}getState(){return this.store.getState()}setState(t){this.store.set({version:t.version,expressions:t.expressions,order:t.order,ui:this.getState().ui}),this.updateNextObjectId()}setStateFromAPI(t){let r=t||{},n=r.expressions||{},o=r.order||[];this.store.set({version:EP,expressions:n,order:o,ui:this.getState().ui}),this.updateNextObjectId()}shouldShowClear(){if(this.getNumberOfExpressions()===1)return!1;let t=this.getIdOfFocus();if(!t)return!1;let r=this.getExpressionById(t);return r?!!(r.type==="matrix"||r.latex):!1}canClear(){if(this.getNumberOfExpressions()>1)return!0;let t=this.getExpressionOrder()[0],r=this.getExpressionById(t);return r.type!=="latex"?!0:r.latex!==""}deleteExpression(t){this.store.shallowMutate("expressions",n=>{delete n[t]});let r=this.getState().order.filter(n=>n!==t);this.store.shallowMutate(n=>{n.order=r})}addBlankLatexExpressionAfterFocus(){let t=this.getIndexOfFocus(),r;t===-1?r=this.getState().order.length:r=t+1;let n=this.addNewLatexExpression(r,"");this.focusLatexExpression(n)}addNewLatexExpression(t,r){let n=this.generateObjectId();return this.store.shallowMutate("expressions",o=>{o[n]={id:n,type:"latex",latex:r,displayAsFraction:!1}}),this.store.shallowMutate("order",o=>{o.splice(t,0,n)}),n}clearFocusedExpression(){let t=this.getIdOfFocus();t&&(this.store.shallowMutate("expressions",r=>{r[t]={id:t,type:"latex",latex:"",displayAsFraction:!1}}),this.store.set(["ui","focus"],{type:"latex-expression",id:t}))}setExpressionLatex(t,r){this.store.shallowMutate(["expressions",t],n=>{n.type==="latex"&&(n.latex=r)})}addNewMatrixExpression(){let t=!1,r=this.getExpressionOrder(),n=r.length,o=this.generateMatrixVariable(),a=2,i=2,s,c,l=this.getIdOfFocus();l?(c=l,s=this.getIndexOfFocus()):(s=r.length-1,c=r[r.length-1]);let p=this.getExpressionById(c);if(p&&p.type==="latex"){let M=p.latex.replace(/\\ /gi,""),L=M.match(/^([A-Z])=?$/);if(M=="")n=s,t=!0;else if(L){let T=L[1],w=this.getState().expressions,k=!1;for(let V in w)w[V].type==="matrix"&&w[V].variable===T&&(k=!0);k||(o=T,t=!0,n=s)}}let y=[];for(let M=0;M<a;M++){let L=[];y.push(L);for(let T=0;T<i;T++)L.push("")}let x=this.generateObjectId();return this.store.shallowMutate("expressions",M=>{c&&t&&delete M[c],M[x]={id:x,type:"matrix",variable:o,matrix:y}}),this.store.shallowMutate("order",M=>{M.splice(n,t?1:0,x)}),x}addMatrixRow(t){this.store.deepMutate(["expressions",t],r=>{if(r.type!=="matrix"||r.matrix.length===0)return;let n=[];for(let o=0;o<r.matrix[0].length;o++)n.push("");r.matrix.push(n)})}removeMatrixRow(t){this.store.deepMutate(["expressions",t],r=>{r.type==="matrix"&&r.matrix.pop()})}addMatrixCol(t){this.store.deepMutate(["expressions",t],r=>{if(r.type==="matrix")for(let n of r.matrix)n.push("")})}removeMatrixCol(t){this.store.deepMutate(["expressions",t],r=>{if(r.type==="matrix")for(let n of r.matrix)n.pop()})}setLatexAtFocus(t){let r=this.getState().ui.focus;switch(r.type){case"latex-expression":this.setExpressionLatex(r.id,t);break;case"matrix-cell":this.setMatrixCellLatex(r.id,r.row,r.col,t);break;case"matrix-resize-button":case"add-matrix-button":case"unknown":break;default:return r}}setDisplayAsFraction(t,r){this.store.deepMutate(["expressions",t],n=>{n.type==="latex"&&(n.displayAsFraction=r)})}setMatrixCellLatex(t,r,n,o){this.store.deepMutate(["expressions",t],a=>{a.type==="matrix"&&(a.matrix[r][n]=o)})}setMatrixVariable(t,r){this.store.shallowMutate(["expressions",t],n=>{n.type==="matrix"&&(n.variable=r)})}isResizeOpDisabled(t,r){let n=this.getExpressionById(t);if(n.type!=="matrix")return!0;let o=n.matrix.length,a=o===0?0:n.matrix[0].length;switch(r){case"remove-matrix-row":return o<=1;case"add-matrix-row":return o>=kP;case"remove-matrix-col":return a<=1;case"add-matrix-col":return a>=kP}}setContainerSize(t){this.store.set(["ui","containerSize"],t)}getContainerSize(){return this.getState().ui.containerSize}setFocus(t){this.store.set(["ui","focus"],t)}getFocus(){return this.getState().ui.focus}setFocusInPreparationForKeypadEvent(){let{order:t,expressions:r}=this.getState(),n=t.length-1,o=t[n],a=r[o];if(a.type==="latex"&&!a.latex)this.focusLatexExpression(o);else{let i=this.addNewLatexExpression(n+1,"");this.focusLatexExpression(i)}}setSettingsMenuOpen(t){this.store.set(["ui","settingsMenuOpen"],t.isOpen)}isSettingsMenuOpen(){return this.getState().ui.settingsMenuOpen}isExpressionFocused(t){return this.getIdOfFocus()===t}isLatexExpressionFocused(t){let r=this.getState().ui.focus;return r.type!=="latex-expression"?!1:r.id===t}isResizeButtonFocused(t,r){let n=this.getState().ui.focus;return n.type!=="matrix-resize-button"?!1:n.id===t&&n.op===r}isAddMatrixButtonFocused(){return this.getState().ui.focus.type==="add-matrix-button"}isMatrixExpressionFocused(t){let r=this.getState().ui.focus;return r.type!=="matrix-cell"?!1:r.id===t}isMatrixExpressionCellFocused(t,r,n){let o=this.getState().ui.focus;return o.type!=="matrix-cell"?!1:o.id===t&&o.row===r&&o.col===n}focusMatrixExpressionCell(t,r,n){this.setFocus({type:"matrix-cell",id:t,row:r,col:n})}focusResizeButton(t,r){this.setFocus({type:"matrix-resize-button",id:t,op:r})}focusAddMatrixButton(){this.setFocus({type:"add-matrix-button"})}focusLatexExpression(t){this.setFocus({type:"latex-expression",id:t})}getIdOfFocus(){let t=this.getState().ui.focus;if(t.type!=="unknown"&&t.type!=="add-matrix-button")return t.id}getIndexOfFocus(){let t=this.getIdOfFocus();return t===void 0?-1:this.getState().order.findIndex(r=>r===t)}isFinalExpressionFocused(){return this.getIndexOfFocus()===this.getState().order.length-1}moveFocusInDirection(t){let r=this.getState().ui.focus;if(r.type==="unknown")return;let n=this.getIndexOfFocus();if(n!==-1)switch(r.type){case"latex-expression":t==="Up"?this.moveFocusFromIndexToIndex(n,n-1):t==="Down"&&this.moveFocusFromIndexToIndex(n,n+1);break;case"matrix-cell":let{lastRow:o,lastCol:a}=this.getSizeOfMatrixExpression(r.id);t==="Up"?r.row>0?this.focusMatrixExpressionCell(r.id,r.row-1,r.col):this.moveFocusFromIndexToIndex(n,n-1):t==="Down"?r.row<o?this.focusMatrixExpressionCell(r.id,r.row+1,r.col):this.moveFocusFromIndexToIndex(n,n+1):t==="Left"?r.col>0?this.focusMatrixExpressionCell(r.id,r.row,r.col-1):r.row>0&&this.focusMatrixExpressionCell(r.id,r.row-1,a):t==="Right"&&(r.col<a?this.focusMatrixExpressionCell(r.id,r.row,r.col+1):r.row<o&&this.focusMatrixExpressionCell(r.id,r.row+1,0));break;case"matrix-resize-button":case"add-matrix-button":break;default:return r}}moveFocusFromIndexToIndex(t,r){let{order:n,expressions:o}=this.getState(),a=n[r],i=o[a];if(i)switch(i.type){case"latex":this.focusLatexExpression(a);break;case"matrix":if(t<r)this.focusMatrixExpressionCell(a,0,0);else{let{lastRow:c,lastCol:l}=this.getSizeOfMatrixExpression(a);this.focusMatrixExpressionCell(a,c,l)}break;default:return i}}attemptToMoveFocusWithBackspace(){let{ui:t,expressions:r,order:n}=this.getState(),o=t.focus;if(o.type==="unknown"||o.type==="add-matrix-button")return!1;let a=this.getIndexOfFocus();if(a===-1)return!1;let i=r[o.id];if(!i)return;let s=n.length;switch(o.type){case"latex-expression":return i.type==="latex"?i.latex||s===1?!1:(a>0?this.moveFocusInDirection("Up"):this.moveFocusInDirection("Down"),this.deleteExpression(o.id),!0):!1;case"matrix-cell":if(i.type==="matrix"){if(i.matrix[o.row][o.col])return!1;if(o.col===0){if(o.row===0){if(s===1)return this.clearAll(),this.focusLastExpression(),!1;a===0?this.moveFocusFromIndexToIndex(0,1):this.moveFocusInDirection("Up"),this.deleteExpression(o.id)}else this.moveFocusInDirection("Left");return!0}else this.moveFocusInDirection("Left")}return!1;case"matrix-resize-button":return!1;default:return o}}firstEnabledResizeOp(t){for(let r of Hi)if(!this.isResizeOpDisabled(t.id,r))return r;return Hi[Hi.length-1]}lastEnabledResizeOp(t){for(let r of Hi.slice().reverse())if(!this.isResizeOpDisabled(t.id,r))return r;return Hi[0]}nextEnabledResizeOp(t,r){let n=!1;for(let o of Hi){if(n&&!this.isResizeOpDisabled(t.id,o))return o;o===r&&(n=!0)}}prevEnabledResizeOp(t,r){let n=!1;for(let o of Hi.slice().reverse()){if(n&&!this.isResizeOpDisabled(t.id,o))return o;o===r&&(n=!0)}}attemptToMoveFocusWithTab({shiftKey:t}){let r=this.getState().ui.focus;if(r.type==="unknown")return!1;let n=this.getIndexOfFocus(),o;if(n!==-1){let a=this.getState().order[n-1];o=a?this.getExpressionById(a):void 0}switch(r.type){case"latex-expression":return t&&o&&o.type==="matrix"?(this.focusResizeButton(o.id,this.lastEnabledResizeOp(o)),!0):!1;case"matrix-cell":if(t)return o&&o.type==="matrix"&&r.row===0&&r.col===0?(this.focusResizeButton(o.id,this.lastEnabledResizeOp(o)),!0):!1;{if(this.getEvaluations()[r.id].error)return!1;let{lastRow:a,lastCol:i}=this.getSizeOfMatrixExpression(r.id);return r.row===a&&r.col===i?(this.focusResizeButton(r.id,this.firstEnabledResizeOp(this.getExpressionById(r.id))),!0):!1}case"matrix-resize-button":if(t){let a=this.prevEnabledResizeOp(this.getExpressionById(r.id),r.op);if(a!==void 0)return this.focusResizeButton(r.id,a),!0;let{lastRow:i,lastCol:s}=this.getSizeOfMatrixExpression(r.id);return this.focusMatrixExpressionCell(r.id,i,s),!0}else{let a=this.nextEnabledResizeOp(this.getExpressionById(r.id),r.op);return a!==void 0?(this.focusResizeButton(r.id,a),!0):this.isFinalExpressionFocused()?(this.focusAddMatrixButton(),!0):n===-1?!1:(this.moveFocusFromIndexToIndex(n,n+1),!0)}case"add-matrix-button":{if(!t)return!1;let a=this.getState().order,i=a[a.length-1];if(!i)return!1;let s=this.getExpressionById(i);return s.type!=="matrix"?!1:(this.focusResizeButton(s.id,this.lastEnabledResizeOp(s)),!0)}}}getSizeOfMatrixExpression(t){let r=this.getExpressionById(t);return r?{lastRow:r.matrix.length-1,lastCol:r.matrix[0].length-1}:{lastRow:0,lastCol:0}}getEvaluations(){let t=this.getState();return this._lastEvaluationState===t?this._evaluations:(this._lastEvaluationState=t,this._evaluations=MP(this._lastEvaluationState),this._evaluations)}getExpressionById(t){return this.getState().expressions[t]}getExpressionOrder(){return this.getState().order}focusFirstExpression(){let t=this.getExpressionOrder()[0];this.focusLatexExpression(t)}focusLastExpression(){let t=this.getExpressionOrder();this.focusLatexExpression(t[t.length-1])}getNumberOfExpressions(){return this.getState().order.length}updateTheComputedWorld(){let t=this.getIdOfFocus();t&&!this.getExpressionById(t)&&this.setFocus({type:"unknown"})}};function lV(e){let t={language:"en",autosize:!0,invertedColors:!1,projectorMode:!1,capExpressionSize:!1,textColor:"#000",backgroundColor:"#fff",fontSize:16,settingsMenu:!0,decimalToFraction:!0};e||(e={});for(let r in e)if(t.hasOwnProperty(r)){let n=r;if(n==="textColor"||n==="backgroundColor"){let o=e[n];if(!o)continue;vl(o)?t[n]=o:console.warn(`Invalid ${n}. Color must be a 3- or 6-character hex color (e.g. #000 or #001111)`)}else if(n==="fontSize"){let o=e[n];if(o===void 0)continue;typeof o!="number"?console.warn(`Invalid ${n}. fontSize must be a number`):t[n]=o}else if(n==="language"){let o=e[n];if(o===void 0)continue;typeof o!="string"?console.warn(`Invalid ${n}. language must be a string`):t[n]=Uf(o)}else t[n]=!!e[n]}return t}function IP(e){return{allowUndo:!!(e&&e.allowUndo)}}var Yg=class extends xl{constructor(t,r){typeof _Desmos!="undefined"&&typeof desmosLocaleData!="undefined"&&_Desmos.supportedLanguages===void 0&&(_Desmos.supportedLanguages=["en"].concat(Object.keys(desmosLocaleData))),super(t),this.rootElt=t;let n=lV(r);this.settings=new KS,this.model=new cd(n),this.controller=new Gl(this.model,this.settings),this.controller.onViewUpdate=()=>this.updateView(),this.setupDomChangeDetector(n.autosize)}updateSettings(t){if(t)for(let r in t)switch(r){case"language":let n=t[r];if(n===void 0)continue;this.controller.dispatch({type:"update-language",language:Uf(n)});break;case"settingsMenu":t.settingsMenu?this.controller.dispatch({type:"enable-settings-menu"}):this.controller.dispatch({type:"disable-settings-menu"});break;case"invertedColors":let o=t[r];if(o===void 0)continue;this.controller.dispatch({type:"update-inverted-colors",invertedColors:o});break;case"projectorMode":{let l=t[r];if(l===void 0)continue;this.controller.dispatch({type:"update-projector-mode",mode:l});break}case"capExpressionSize":let a=t[r];if(a===void 0)return;this.controller.dispatch({type:"update-cap-expression-size",mode:a});break;case"decimalToFraction":this.controller.dispatch({type:"update-decimal-to-fraction",value:!!t[r]});break;case"textColor":let i=t[r];if(i===void 0)continue;if(!vl(i)){console.warn("invalid textColor. Text color must be a 3- or 6-character hex color (e.g. #000 or #001111)");continue}this.controller.dispatch({type:"update-text-color",textColor:i});break;case"backgroundColor":let s=t[r];if(s===void 0)continue;if(!vl(s)){console.warn("invalid backgroundColor. Background color must be a 3- or 6-character hex color (e.g. #000 or #001111)");continue}this.controller.dispatch({type:"update-background-color",backgroundColor:s});break;case"fontSize":let c=t[r];if(c===void 0)continue;if(typeof c!="number"){console.warn(`Invalid ${r}. fontSize must be a number`);continue}this.controller.dispatch({type:"update-font-size",fontSize:c});break}}onCreateView(){let t=ja(Ag,this.rootElt,{controller:()=>this.controller});return this.controller.setRootElement(this.rootElt),t}onDestroyView(){Kc(this.rootElt)}onResizeView(t){this.controller.dispatch({type:"ui/container-resized",size:t})}getState(){return cn(this.controller.getPersistedState())}setState(t,r){let n;typeof t=="string"?n=JSON.parse(t):n=cn(t||{}),this.controller.setStateFromAPI(n,IP(r))}setBlank(t){this.controller.clearFromAPI(IP(t))}focusFirstExpression(){this.controller.focusFirstExpression()}destroy(){this.controller.destroy(),super.destroy()}};function Xx(...e){return new Yg(...e)}Xx.prototype=Yg.prototype;function dV(e){let t=Uv(),r=Xx(e,t);window.Calc=r,r.focusFirstExpression();let n=r.controller;_v(s=>{n.addMetadataToBugsnagReport(s);let c=s.originalError;c&&c.dcgExtraErrorMetaData&&s.addMetadata("extraErrorData",c.dcgExtraErrorMetaData),s.addMetadata("codeEvents",Rv())}),n.dispatch({type:"update-language",language:Ki});let o=new $c("matrix"),a=n.onEventEmitted;n.onEventEmitted=s=>{a==null||a(s),s==="change"&&o.handleUserChangeEvent()},o.start(),ge(document.documentElement).on("keydown",s=>{s.target.closest(".dcg-calc-matrix-main-wrapper")||r.view&&r.view.handleRootKeydown(s)});let i=function(){let s=n.getInvertedColors();document.body.classList.toggle("dcg-inverted-colors",s);let c=n.getBackgroundColor();Go(document.body,{background:c}),Go(e,{borderColor:c})};return r.settings.observeAndSync("invertedColors",i),r.settings.observeAndSync("backgroundColor",i),n}var Ki=Ms();function AP(e){Ki=e,GS(Zx)}var Xg=new sp({showLanguagePicker:!0,allowAllLanguages:!0}),Zx=class extends K{init(){Xg.onViewUpdate=()=>this.update(),Xg.onEventEmitted=t=>{t==="changeLang"&&(this.calcController&&(Ki=Xg.getLanguage(),this.calcController.dispatch({type:"update-language",language:Ki})),document.title=re("matrix-calculator-narration-title"),document.documentElement.lang=Ki)}}template(){return N("div",{children:[u(J,{predicate:()=>window.platform==="www",children:()=>u(Kp,{controller:this.const(Xg),helpLink:this.const("https://help.desmos.com/hc/en-us/articles/4404851938445-Matrix-Calculator"),showPrintIcon:this.const(!1)})}),u("div",{id:"main",class:"dcg-matrix-container",didMount:this.bindFn(this.onCalcContainerMounted)})]})}onCalcContainerMounted(t){this.calcController=dV(t)}};Qa(Ki).then(()=>AP(Ki),()=>AP("en"));window.Desmos.MathQuill=Qo;})();
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
