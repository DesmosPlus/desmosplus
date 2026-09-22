(()=>{var yx=Object.create;var Hl=Object.defineProperty;var bx=Object.getOwnPropertyDescriptor;var xx=Object.getOwnPropertyNames;var Tx=Object.getPrototypeOf,wx=Object.prototype.hasOwnProperty;var vx=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),nd=(e,t)=>{for(var r in t)Hl(e,r,{get:t[r],enumerable:!0})},Mx=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of xx(t))!wx.call(e,o)&&o!==r&&Hl(e,o,{get:()=>t[o],enumerable:!(n=bx(t,o))||n.enumerable});return e};var Sx=(e,t,r)=>(r=e!=null?yx(Tx(e)):{},Mx(t||!e||!e.__esModule?Hl(r,"default",{value:e,enumerable:!0}):r,e));var cy=vx((ly,cp)=>{(function(e){if(typeof ly=="object"&&typeof cp!="undefined")cp.exports=e();else{var t;typeof window!="undefined"?t=window:typeof global!="undefined"?t=global:typeof self!="undefined"?t=self:t=this,t.Bugsnag=e()}})(function(){var e,t,r,n=["navigation","request","process","log","user","state","error","manual"],o=function(l,u,d){for(var p=d,y=0,T=l.length;y<T;y++)p=u(p,l[y],y,l);return p},a=function(l,u){return o(l,function(d,p,y,T){return u(p,y,T)?d.concat(p):d},[])},i=function(l,u){return o(l,function(d,p,y,T){return d===!0||p===u},!1)},s=function(l){return Object.prototype.toString.call(l)==="[object Array]"},c=!{toString:null}.propertyIsEnumerable("toString"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],h=function(l){var u=[],d;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&u.push(d);if(!c)return u;for(var p=0,y=f.length;p<y;p++)Object.prototype.hasOwnProperty.call(l,f[p])&&u.push(f[p]);return u},w=function(l,u){return l===void 0&&(l=1),u===void 0&&(u=1/0),function(d){return typeof d=="number"&&parseInt(""+d,10)===d&&d>=l&&d<=u}},N=function(l){return typeof l=="function"||s(l)&&a(l,function(u){return typeof u=="function"}).length===l.length},I=function(l){return typeof l=="string"&&!!l.length},$={},C=function(){return{unhandledExceptions:!0,unhandledRejections:!0}};$.schema={apiKey:{defaultValue:function(){return null},message:"is required",validate:I},appVersion:{defaultValue:function(){},message:"should be a string",validate:function(l){return l===void 0||I(l)}},appType:{defaultValue:function(){},message:"should be a string",validate:function(l){return l===void 0||I(l)}},autoDetectErrors:{defaultValue:function(){return!0},message:"should be true|false",validate:function(l){return l===!0||l===!1}},enabledErrorTypes:{defaultValue:function(){return C()},message:"should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",allowPartialObject:!0,validate:function(l){if(typeof l!="object"||!l)return!1;var u=h(l),d=h(C());return!(a(u,function(p){return i(d,p)}).length<u.length||a(h(l),function(p){return typeof l[p]!="boolean"}).length>0)}},onError:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:N},onSession:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:N},onBreadcrumb:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:N},endpoints:{defaultValue:function(l){return typeof l=="undefined"?{notify:"https://notify.bugsnag.com",sessions:"https://sessions.bugsnag.com"}:{notify:null,sessions:null}},message:"should be an object containing endpoint URLs { notify, sessions }",validate:function(l){return l&&typeof l=="object"&&I(l.notify)&&I(l.sessions)&&a(h(l),function(u){return!i(["notify","sessions"],u)}).length===0}},autoTrackSessions:{defaultValue:function(l){return!0},message:"should be true|false",validate:function(l){return l===!0||l===!1}},enabledReleaseStages:{defaultValue:function(){return null},message:"should be an array of strings",validate:function(l){return l===null||s(l)&&a(l,function(u){return typeof u=="string"}).length===l.length}},releaseStage:{defaultValue:function(){return"production"},message:"should be a string",validate:function(l){return typeof l=="string"&&l.length}},maxBreadcrumbs:{defaultValue:function(){return 25},message:"should be a number \u2264100",validate:function(l){return w(0,100)(l)}},enabledBreadcrumbTypes:{defaultValue:function(){return n},message:"should be null or a list of available breadcrumb types ("+n.join(",")+")",validate:function(l){return l===null||s(l)&&o(l,function(u,d){return u===!1?u:i(n,d)},!0)}},context:{defaultValue:function(){},message:"should be a string",validate:function(l){return l===void 0||typeof l=="string"}},user:{defaultValue:function(){return{}},message:"should be an object with { id, email, name } properties",validate:function(l){return l===null||l&&o(h(l),function(u,d){return u&&i(["id","email","name"],d)},!0)}},metadata:{defaultValue:function(){return{}},message:"should be an object",validate:function(l){return typeof l=="object"&&l!==null}},logger:{defaultValue:function(){},message:"should be null or an object with methods { debug, info, warn, error }",validate:function(l){return!l||l&&o(["debug","info","warn","error"],function(u,d){return u&&typeof l[d]=="function"},!0)}},redactedKeys:{defaultValue:function(){return["password"]},message:"should be an array of strings|regexes",validate:function(l){return s(l)&&l.length===a(l,function(u){return typeof u=="string"||u&&typeof u.test=="function"}).length}},plugins:{defaultValue:function(){return[]},message:"should be an array of plugin objects",validate:function(l){return s(l)&&l.length===a(l,function(u){return u&&typeof u=="object"&&typeof u.load=="function"}).length}},featureFlags:{defaultValue:function(){return[]},message:'should be an array of objects that have a "name" property',validate:function(l){return s(l)&&l.length===a(l,function(u){return u&&typeof u=="object"&&typeof u.name=="string"}).length}},reportUnhandledPromiseRejectionsAsHandled:{defaultValue:function(){return!1},message:"should be true|false",validate:function(l){return l===!0||l===!1}},sendPayloadChecksums:{defaultValue:function(){return!1},message:"should be true|false",validate:function(l){return l===!0||l===!1}}};var M=function(l){for(var u=1;u<arguments.length;u++){var d=arguments[u];for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(l[p]=d[p])}return l},S=function(l,u){return o(l,function(d,p,y,T){return d.concat(u(p,y,T))},[])};function _(){return _=Object.assign?Object.assign.bind():function(l){for(var u=1;u<arguments.length;u++){var d=arguments[u];for(var p in d)({}).hasOwnProperty.call(d,p)&&(l[p]=d[p])}return l},_.apply(null,arguments)}var B=$.schema,W={releaseStage:M({},B.releaseStage,{defaultValue:function(){return/^localhost(:\d+)?$/.test(window.location.host)?"development":"production"}}),appType:_({},B.appType,{defaultValue:function(){return"browser"}}),logger:M({},B.logger,{defaultValue:function(){return typeof console!="undefined"&&typeof console.debug=="function"?me():void 0}})},me=function(){var l={},u=console.log;return S(["debug","info","warn","error"],function(d){var p=console[d];l[d]=typeof p=="function"?p.bind(console,"[bugsnag]"):u.bind(console,"[bugsnag]")}),l},q=function(){function l(d,p,y,T){T===void 0&&(T=new Date),this.type=y,this.message=d,this.metadata=p,this.timestamp=T}var u=l.prototype;return u.toJSON=function(){return{type:this.type,name:this.message,timestamp:this.timestamp,metaData:this.metadata}},l}(),D=q,P={};(function(l,u){"use strict";typeof e=="function"&&e.amd?e("stackframe",[],u):typeof P=="object"?P=u():l.StackFrame=u()})(this,function(){"use strict";function l(j){return!isNaN(parseFloat(j))&&isFinite(j)}function u(j){return j.charAt(0).toUpperCase()+j.substring(1)}function d(j){return function(){return this[j]}}var p=["isConstructor","isEval","isNative","isToplevel"],y=["columnNumber","lineNumber"],T=["fileName","functionName","source"],b=["args"],O=["evalOrigin"],E=p.concat(y,T,b,O);function F(j){if(j)for(var Z=0;Z<E.length;Z++)j[E[Z]]!==void 0&&this["set"+u(E[Z])](j[E[Z]])}F.prototype={getArgs:function(){return this.args},setArgs:function(j){if(Object.prototype.toString.call(j)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=j},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(j){if(j instanceof F)this.evalOrigin=j;else if(j instanceof Object)this.evalOrigin=new F(j);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var j=this.getFileName()||"",Z=this.getLineNumber()||"",xe=this.getColumnNumber()||"",Y=this.getFunctionName()||"";return this.getIsEval()?j?"[eval] ("+j+":"+Z+":"+xe+")":"[eval]:"+Z+":"+xe:Y?Y+" ("+j+":"+Z+":"+xe+")":j+":"+Z+":"+xe}},F.fromString=function(Z){var xe=Z.indexOf("("),Y=Z.lastIndexOf(")"),le=Z.substring(0,xe),Be=Z.substring(xe+1,Y).split(","),Ce=Z.substring(Y+1);if(Ce.indexOf("@")===0)var kt=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(Ce,""),Ye=kt[1],yn=kt[2],Ho=kt[3];return new F({functionName:le,args:Be||void 0,fileName:Ye,lineNumber:yn||void 0,columnNumber:Ho||void 0})};for(var G=0;G<p.length;G++)F.prototype["get"+u(p[G])]=d(p[G]),F.prototype["set"+u(p[G])]=function(j){return function(Z){this[j]=!!Z}}(p[G]);for(var H=0;H<y.length;H++)F.prototype["get"+u(y[H])]=d(y[H]),F.prototype["set"+u(y[H])]=function(j){return function(Z){if(!l(Z))throw new TypeError(j+" must be a Number");this[j]=Number(Z)}}(y[H]);for(var J=0;J<T.length;J++)F.prototype["get"+u(T[J])]=d(T[J]),F.prototype["set"+u(T[J])]=function(j){return function(Z){this[j]=String(Z)}}(T[J]);return F});var x={};(function(l,u){"use strict";typeof e=="function"&&e.amd?e("stack-generator",["stackframe"],u):typeof x=="object"?x=u(P):l.StackGenerator=u(l.StackFrame)})(this,function(l){return{backtrace:function(d){var p=[],y=10;typeof d=="object"&&typeof d.maxStackSize=="number"&&(y=d.maxStackSize);for(var T=arguments.callee;T&&p.length<y&&T.arguments;){for(var b=new Array(T.arguments.length),O=0;O<b.length;++O)b[O]=T.arguments[O];/function(?:\s+([\w$]+))+\s*\(/.test(T.toString())?p.push(new l({functionName:RegExp.$1||void 0,args:b})):p.push(new l({args:b}));try{T=T.caller}catch(E){break}}return p}}});var z={};(function(l,u){"use strict";typeof e=="function"&&e.amd?e("error-stack-parser",["stackframe"],u):typeof z=="object"?z=u(P):l.ErrorStackParser=u(l.StackFrame)})(this,function(u){"use strict";var d=/(^|@)\S+:\d+/,p=/^\s*at .*(\S+:\d+|\(native\))/m,y=/^(eval@)?(\[native code])?$/;return{parse:function(b){if(typeof b.stacktrace!="undefined"||typeof b["opera#sourceloc"]!="undefined")return this.parseOpera(b);if(b.stack&&b.stack.match(p))return this.parseV8OrIE(b);if(b.stack)return this.parseFFOrSafari(b);throw new Error("Cannot parse given Error object")},extractLocation:function(b){if(b.indexOf(":")===-1)return[b];var O=/(.+?)(?::(\d+))?(?::(\d+))?$/,E=O.exec(b.replace(/[()]/g,""));return[E[1],E[2]||void 0,E[3]||void 0]},parseV8OrIE:function(b){var O=b.stack.split(`
`).filter(function(E){return!!E.match(p)},this);return O.map(function(E){E.indexOf("(eval ")>-1&&(E=E.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(\),.*$)/g,""));var F=E.replace(/^\s+/,"").replace(/\(eval code/g,"("),G=F.match(/ (\((.+):(\d+):(\d+)\)$)/);F=G?F.replace(G[0],""):F;var H=F.split(/\s+/).slice(1),J=this.extractLocation(G?G[1]:H.pop()),j=H.join(" ")||void 0,Z=["eval","<anonymous>"].indexOf(J[0])>-1?void 0:J[0];return new u({functionName:j,fileName:Z,lineNumber:J[1],columnNumber:J[2],source:E})},this)},parseFFOrSafari:function(b){var O=b.stack.split(`
`).filter(function(E){return!E.match(y)},this);return O.map(function(E){if(E.indexOf(" > eval")>-1&&(E=E.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),E.indexOf("@")===-1&&E.indexOf(":")===-1)return new u({functionName:E});var F=/((.*".+"[^@]*)?[^@]*)(?:@)/,G=E.match(F),H=G&&G[1]?G[1]:void 0,J=this.extractLocation(E.replace(F,""));return new u({functionName:H,fileName:J[0],lineNumber:J[1],columnNumber:J[2],source:E})},this)},parseOpera:function(b){return!b.stacktrace||b.message.indexOf(`
`)>-1&&b.message.split(`
`).length>b.stacktrace.split(`
`).length?this.parseOpera9(b):b.stack?this.parseOpera11(b):this.parseOpera10(b)},parseOpera9:function(b){for(var O=/Line (\d+).*script (?:in )?(\S+)/i,E=b.message.split(`
`),F=[],G=2,H=E.length;G<H;G+=2){var J=O.exec(E[G]);J&&F.push(new u({fileName:J[2],lineNumber:J[1],source:E[G]}))}return F},parseOpera10:function(b){for(var O=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,E=b.stacktrace.split(`
`),F=[],G=0,H=E.length;G<H;G+=2){var J=O.exec(E[G]);J&&F.push(new u({functionName:J[3]||void 0,fileName:J[2],lineNumber:J[1],source:E[G]}))}return F},parseOpera11:function(b){var O=b.stack.split(`
`).filter(function(E){return!!E.match(d)&&!E.match(/^Error created at/)},this);return O.map(function(E){var F=E.split("@"),G=this.extractLocation(F.pop()),H=F.shift()||"",J=H.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0,j;H.match(/\(([^)]*)\)/)&&(j=H.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var Z=j===void 0||j==="[arguments not available]"?void 0:j.split(",");return new u({functionName:J,args:Z,fileName:G[0],lineNumber:G[1],columnNumber:G[2],source:E})},this)}}});var fe=z,Dt=function(l,u,d,p){var y=p&&p.redactedKeys?p.redactedKeys:[],T=p&&p.redactedPaths?p.redactedPaths:[];return JSON.stringify(ib(l,y,T),u,d)},fn=20,Lt=25e3,Jy=8,Qa="...";function eb(l){return l instanceof Error||/^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(l))}function xp(l){return"[Throws: "+(l?l.message:"?")+"]"}function tb(l,u){for(var d=0,p=l.length;d<p;d++)if(l[d]===u)return!0;return!1}function rb(l,u){for(var d=0,p=l.length;d<p;d++)if(u.indexOf(l[d])===0)return!0;return!1}function nb(l,u){for(var d=0,p=l.length;d<p;d++)if(typeof l[d]=="string"&&l[d].toLowerCase()===u.toLowerCase()||l[d]&&typeof l[d].test=="function"&&l[d].test(u))return!0;return!1}function ob(l){return Object.prototype.toString.call(l)==="[object Array]"}function ab(l,u){try{return l[u]}catch(d){return xp(d)}}function ib(l,u,d){var p=[],y=0;function T(b,O){function E(){return O.length>Jy&&y>Lt}if(y++,O.length>fn||E())return Qa;if(b===null||typeof b!="object")return b;if(tb(p,b))return"[Circular]";if(p.push(b),typeof b.toJSON=="function")try{y--;var F=T(b.toJSON(),O);return p.pop(),F}catch(le){return xp(le)}var G=eb(b);if(G){y--;var H=T({name:b.name,message:b.message},O);return p.pop(),H}if(ob(b)){for(var J=[],j=0,Z=b.length;j<Z;j++){if(E()){J.push(Qa);break}J.push(T(b[j],O.concat("[]")))}return p.pop(),J}var xe={};try{for(var Y in b)if(Object.prototype.hasOwnProperty.call(b,Y)){if(rb(d,O.join("."))&&nb(u,Y)){xe[Y]="[REDACTED]";continue}if(E()){xe[Y]=Qa;break}xe[Y]=T(ab(b,Y),O.concat(Y))}}catch(le){}return p.pop(),xe}return T(l,[])}function Tp(l,u,d,p){if(typeof d=="string"){p===void 0?p=null:p!==null&&typeof p!="string"&&(p=Dt(p));var y=u[d];if(typeof y=="number"){l[y]={name:d,variant:p};return}l.push({name:d,variant:p}),u[d]=l.length-1}}function sb(l,u,d){if(s(u)){for(var p=0;p<u.length;++p){var y=u[p];y===null||typeof y!="object"||Tp(l,d,y.name,y.variant)}return l}}function lb(l){return S(a(l,Boolean),function(u){var d=u.name,p=u.variant,y={featureFlag:d};return typeof p=="string"&&(y.variant=p),y})}function cb(l,u,d){var p=u[d];typeof p=="number"&&(l[p]=null,delete u[d])}var gn={add:Tp,clear:cb,merge:sb,toEventApi:lb},Ya=function(l){return!!l&&(!!l.stack||!!l.stacktrace||!!l["opera#sourceloc"])&&typeof(l.stack||l.stacktrace||l["opera#sourceloc"])=="string"&&l.stack!==l.name+": "+l.message},ub=pb;function pb(l){switch(Object.prototype.toString.call(l)){case"[object Error]":return!0;case"[object Exception]":return!0;case"[object DOMException]":return!0;default:return l instanceof Error}}var Xa=ub,db=function(l,u,d,p){var y;if(u){var T;if(d===null)return wp(l,u);typeof d=="object"&&(T=d),typeof d=="string"&&(T=(y={},y[d]=p,y)),T&&(u==="__proto__"||u==="constructor"||u==="prototype"||(l[u]||(l[u]={}),l[u]=M({},l[u],T)))}},mb=function(l,u,d){if(typeof u=="string"){if(!d)return l[u];if(l[u])return l[u][d]}},wp=function(l,u,d){if(typeof u=="string"){if(!d){delete l[u];return}u==="__proto__"||u==="constructor"||u==="prototype"||l[u]&&delete l[u][d]}},Hn={add:db,get:mb,clear:wp};function Al(){return Al=Object.assign?Object.assign.bind():function(l){for(var u=1;u<arguments.length;u++){var d=arguments[u];for(var p in d)({}).hasOwnProperty.call(d,p)&&(l[p]=d[p])}return l},Al.apply(null,arguments)}var Vr=function(){function l(d,p,y,T,b){y===void 0&&(y=[]),T===void 0&&(T=hb()),this.apiKey=void 0,this.context=void 0,this.groupingHash=void 0,this.originalError=b,this._handledState=T,this.severity=this._handledState.severity,this.unhandled=this._handledState.unhandled,this.app={},this.device={},this.request={},this.response={},this.breadcrumbs=[],this.threads=[],this._metadata={},this._features=[],this._featuresIndex={},this._user={},this._session=void 0,this._correlation=void 0,this._groupingDiscriminator=void 0,this.errors=[Mp(d,p,l.__type,y)]}var u=l.prototype;return u.addMetadata=function(p,y,T){return Hn.add(this._metadata,p,y,T)},u.setTraceCorrelation=function(p,y){typeof p=="string"&&(this._correlation=Al({traceId:p},typeof y=="string"?{spanId:y}:{}))},u.getGroupingDiscriminator=function(){return this._groupingDiscriminator},u.setGroupingDiscriminator=function(p){var y=this._groupingDiscriminator;return(typeof p=="string"||p===null||p===void 0)&&(this._groupingDiscriminator=p),y},u.getMetadata=function(p,y){return Hn.get(this._metadata,p,y)},u.clearMetadata=function(p,y){return Hn.clear(this._metadata,p,y)},u.addFeatureFlag=function(p,y){y===void 0&&(y=null),gn.add(this._features,this._featuresIndex,p,y)},u.addFeatureFlags=function(p){gn.merge(this._features,p,this._featuresIndex)},u.getFeatureFlags=function(){return gn.toEventApi(this._features)},u.clearFeatureFlag=function(p){gn.clear(this._features,this._featuresIndex,p)},u.clearFeatureFlags=function(){this._features=[],this._featuresIndex={}},u.getUser=function(){return this._user},u.setUser=function(p,y,T){this._user={id:p,email:y,name:T}},u.toJSON=function(){return{payloadVersion:"4",exceptions:S(this.errors,function(p){return M({},p,{message:p.errorMessage})}),severity:this.severity,unhandled:this._handledState.unhandled,severityReason:this._handledState.severityReason,app:this.app,device:this.device,request:this.request,response:this.response,breadcrumbs:this.breadcrumbs,context:this.context,groupingHash:this.groupingHash,groupingDiscriminator:this._groupingDiscriminator,metaData:this._metadata,user:this._user,session:this._session,featureFlags:this.getFeatureFlags(),correlation:this._correlation}},l}(),fb=function(l){var u={file:l.fileName,method:gb(l.functionName),lineNumber:l.lineNumber,columnNumber:l.columnNumber,code:void 0,inProject:void 0};return u.lineNumber>-1&&!u.file&&!u.method&&(u.file="global code"),u},gb=function(l){return/^global code$/i.test(l)?"global code":l},hb=function(){return{unhandled:!1,severity:"warning",severityReason:{type:"handledException"}}},vp=function(l){return typeof l=="string"?l:""};function Mp(l,u,d,p){return{errorClass:vp(l),errorMessage:vp(u),type:d,stacktrace:o(p,function(y,T){var b=fb(T);try{return JSON.stringify(b)==="{}"?y:y.concat(b)}catch(O){return y}},[])}}function Sp(l){return l.cause?[l].concat(Sp(l.cause)):[l]}Vr.getStacktrace=function(l,u,d){if(Ya(l))return fe.parse(l).slice(u);try{return a(x.backtrace(),function(p){return(p.functionName||"").indexOf("StackGenerator$$")===-1}).slice(1+d)}catch(p){return[]}},Vr.create=function(l,u,d,p,y,T){y===void 0&&(y=0);var b=kp(l,u,p,T),O=b[0],E=b[1],F;try{var G=Vr.getStacktrace(O,E>0?1+E+y:0,1+y);F=new Vr(O.name,O.message,G,d,l)}catch(Z){F=new Vr(O.name,O.message,[],d,l)}if(O.name==="InvalidError"&&F.addMetadata(""+p,"non-error parameter",Cp(l)),O.cause){var H,J=Sp(O).slice(1),j=S(J,function(Z){var xe=Xa(Z)&&Ya(Z)?fe.parse(Z):[],Y=kp(Z,!0,"error cause"),le=Y[0];return le.name==="InvalidError"&&F.addMetadata("error cause",Cp(Z)),Mp(le.name,le.message,Vr.__type,xe)});(H=F.errors).push.apply(H,j)}return F};var Cp=function(l){return l===null?"null":l===void 0?"undefined":l},kp=function(l,u,d,p){var y,T=0,b=function(O){var E=d==="error cause"?"was":"received";p&&p.warn(d+" "+E+' a non-error: "'+O+'"');var F=new Error(d+" "+E+' a non-error. See "'+d+'" tab for more detail.');return F.name="InvalidError",F};if(!u)Xa(l)?y=l:(y=b(typeof l),T+=2);else switch(typeof l){case"string":case"number":case"boolean":y=new Error(String(l)),T+=1;break;case"function":y=b("function"),T+=2;break;case"object":l!==null&&Xa(l)?y=l:l!==null&&yb(l)?(y=new Error(l.message||l.errorMessage),y.name=l.name||l.errorClass,T+=1):(y=b(l===null?"null":"unsupported object"),T+=2);break;default:y=b("nothing"),T+=2}if(!Ya(y))try{throw y}catch(O){Ya(O)&&(y=O,T=1)}return[y,T]};Vr.__type="browserjs";var yb=function(l){return(typeof l.name=="string"||typeof l.errorClass=="string")&&(typeof l.message=="string"||typeof l.errorMessage=="string")},Pl=Vr,bb=function(l,u,d){var p=0,y=function(){if(p>=l.length)return d(null,!0);u(l[p],function(T,b){if(T)return d(T);if(b===!1)return d(null,!1);p++,y()})};y()},xb=function(l,u,d,p){var y=function(T,b){if(typeof T!="function")return b(null);try{if(T.length!==2){var O=T(u);return O&&typeof O.then=="function"?O.then(function(E){return setTimeout(function(){return b(null,E)})},function(E){setTimeout(function(){return d(E),b(null,!0)})}):b(null,O)}T(u,function(E,F){if(E)return d(E),b(null);b(null,F)})}catch(E){d(E),b(null)}};bb(l,y,p)},qp=function(l,u,d,p){for(var y=!1,T=l.slice();!y&&T.length;)try{y=T.pop()(u)===!1}catch(b){p.error("Error occurred in "+d+" callback, continuing anyway\u2026"),p.error(b)}return y},Rl=function(u,d){var p="000000000"+u;return p.substr(p.length-d)},Ep=typeof window=="object"?window:self,Np=0;for(var Tb in Ep)Object.hasOwnProperty.call(Ep,Tb)&&Np++;var wb=navigator.mimeTypes?navigator.mimeTypes.length:0,vb=Rl((wb+navigator.userAgent.length).toString(36)+Np.toString(36),4),Ip=function(){return vb},Mb=function(u){return typeof u=="string"&&/^c[a-z0-9]{20,32}$/.test(u)},zo=0,Dl=4,Za=36,Ap=Math.pow(Za,Dl);function Pp(){return Rl((Math.random()*Ap<<0).toString(Za),Dl)}function Sb(){return zo=zo<Ap?zo:0,zo++,zo-1}function Ll(){var l="c",u=new Date().getTime().toString(Za),d=Rl(Sb().toString(Za),Dl),p=Ip(),y=Pp()+Pp();return l+u+d+p+y}Ll.fingerprint=Ip,Ll.isCuid=Mb;var Rp=Ll,Cb=function(){function l(){this.id=Rp(),this.startedAt=new Date,this._handled=0,this._unhandled=0,this._user={},this.app={},this.device={}}var u=l.prototype;return u.getUser=function(){return this._user},u.setUser=function(p,y,T){this._user={id:p,email:y,name:T}},u.toJSON=function(){return{id:this.id,startedAt:this.startedAt,events:{handled:this._handled,unhandled:this._unhandled}}},u._track=function(p){this[p._handledState.unhandled?"_unhandled":"_handled"]+=1},l}(),Ol=Cb,kb=gn.add,qb=gn.clear,_l=gn.merge,Eb="00000",Nb="https://notify.bugsnag.smartbear.com",Ib="https://sessions.bugsnag.smartbear.com",Ur=function(){},Ab=function(){function l(d,p,y,T){var b=this;p===void 0&&(p=$.schema),y===void 0&&(y=[]),this._notifier=T,this._config={},this._schema=p,this._delivery={sendSession:Ur,sendEvent:Ur},this._logger={debug:Ur,info:Ur,warn:Ur,error:Ur},this._plugins={},this._breadcrumbs=[],this._session=null,this._metadata={},this._featuresIndex={},this._features=[],this._context=void 0,this._user={},this._groupingDiscriminator=void 0,this._cbs={e:[],s:[],sp:[],b:[]},this.Client=l,this.Event=Pl,this.Breadcrumb=D,this.Session=Ol,this._config=this._configure(d,y),S(y.concat(this._config.plugins),function(F){F&&b._loadPlugin(F)}),this._depth=1;var O=this,E=this.notify;this.notify=function(){return E.apply(O,arguments)}}var u=l.prototype;return u.addMetadata=function(p,y,T){return Hn.add(this._metadata,p,y,T)},u.getMetadata=function(p,y){return Hn.get(this._metadata,p,y)},u.clearMetadata=function(p,y){return Hn.clear(this._metadata,p,y)},u.addFeatureFlag=function(p,y){y===void 0&&(y=null),kb(this._features,this._featuresIndex,p,y)},u.addFeatureFlags=function(p){_l(this._features,p,this._featuresIndex)},u.clearFeatureFlag=function(p){qb(this._features,this._featuresIndex,p)},u.clearFeatureFlags=function(){this._features=[],this._featuresIndex={}},u.getContext=function(){return this._context},u.setContext=function(p){this._context=p},u.getGroupingDiscriminator=function(){return this._groupingDiscriminator},u.setGroupingDiscriminator=function(p){var y=this._groupingDiscriminator;return(typeof p=="string"||p===null||p===void 0)&&(this._groupingDiscriminator=p),y},u._configure=function(p,y){var T=o(y,function(F,G){return G&&G.configSchema?M({},F,G.configSchema):F},this._schema);p.endpoints||(p.sendPayloadChecksums="sendPayloadChecksums"in p?p.sendPayloadChecksums:!0);var b=o(h(T),function(F,G){var H=T[G].defaultValue(p[G]);if(p[G]!==void 0){var J=T[G].validate(p[G]);J?T[G].allowPartialObject?F.config[G]=M(H,p[G]):F.config[G]=p[G]:(F.errors[G]=T[G].message,F.config[G]=H)}else F.config[G]=H;return F},{errors:{},config:{}}),O=b.errors,E=b.config;if(T.apiKey){if(!E.apiKey)throw new Error("No Bugsnag API Key set");/^[0-9a-f]{32}$/i.test(E.apiKey)||(O.apiKey="should be a string of 32 hexadecimal characters"),p.endpoints===void 0&&E.apiKey.indexOf(Eb)===0&&(E.endpoints={notify:Nb,sessions:Ib})}return this._metadata=M({},E.metadata),_l(this._features,E.featureFlags,this._featuresIndex),this._user=M({},E.user),this._context=E.context,E.logger&&(this._logger=E.logger),E.onError&&(this._cbs.e=this._cbs.e.concat(E.onError)),E.onBreadcrumb&&(this._cbs.b=this._cbs.b.concat(E.onBreadcrumb)),E.onSession&&(this._cbs.s=this._cbs.s.concat(E.onSession)),h(O).length&&this._logger.warn(Pb(O,p)),E},u.getUser=function(){return this._user},u.setUser=function(p,y,T){this._user={id:p,email:y,name:T}},u._loadPlugin=function(p){var y=p.load(this);p.name&&(this._plugins["~"+p.name+"~"]=y)},u.getPlugin=function(p){return this._plugins["~"+p+"~"]},u._setDelivery=function(p){this._delivery=p(this)},u.startSession=function(){var p=new Ol;p.app.releaseStage=this._config.releaseStage,p.app.version=this._config.appVersion,p.app.type=this._config.appType,p._user=M({},this._user);var y=qp(this._cbs.s,p,"onSession",this._logger);return y?(this._logger.debug("Session not started due to onSession callback"),this):this._sessionDelegate.startSession(this,p)},u.addOnError=function(p,y){y===void 0&&(y=!1),this._cbs.e[y?"unshift":"push"](p)},u.removeOnError=function(p){this._cbs.e=a(this._cbs.e,function(y){return y!==p})},u._addOnSessionPayload=function(p){this._cbs.sp.push(p)},u.addOnSession=function(p){this._cbs.s.push(p)},u.removeOnSession=function(p){this._cbs.s=a(this._cbs.s,function(y){return y!==p})},u.addOnBreadcrumb=function(p,y){y===void 0&&(y=!1),this._cbs.b[y?"unshift":"push"](p)},u.removeOnBreadcrumb=function(p){this._cbs.b=a(this._cbs.b,function(y){return y!==p})},u.pauseSession=function(){return this._sessionDelegate.pauseSession(this)},u.resumeSession=function(){return this._sessionDelegate.resumeSession(this)},u.leaveBreadcrumb=function(p,y,T){if(p=typeof p=="string"?p:"",T=typeof T=="string"&&i(n,T)?T:"manual",y=typeof y=="object"&&y!==null?y:{},!!p){var b=new D(p,y,T),O=qp(this._cbs.b,b,"onBreadcrumb",this._logger);if(O){this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback");return}this._breadcrumbs.push(b),this._breadcrumbs.length>this._config.maxBreadcrumbs&&(this._breadcrumbs=this._breadcrumbs.slice(this._breadcrumbs.length-this._config.maxBreadcrumbs))}},u._isBreadcrumbTypeEnabled=function(p){var y=this._config.enabledBreadcrumbTypes;return y===null||i(y,p)},u.notify=function(p,y,T){T===void 0&&(T=Ur);var b=Pl.create(p,!0,void 0,"notify()",this._depth+1,this._logger);this._notify(b,y,T)},u._notify=function(p,y,T){var b=this;if(T===void 0&&(T=Ur),p.app=M({},p.app,{releaseStage:this._config.releaseStage,version:this._config.appVersion,type:this._config.appType}),p.context=p.context||this._context,p._metadata=M({},p._metadata,this._metadata),p._user=M({},p._user,this._user),p.breadcrumbs=this._breadcrumbs.slice(),p.setGroupingDiscriminator(this._groupingDiscriminator),_l(p._features,this._features,p._featuresIndex),this._config.enabledReleaseStages!==null&&!i(this._config.enabledReleaseStages,this._config.releaseStage))return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"),T(null,p);var O=p.severity,E=function(G){b._logger.error("Error occurred in onError callback, continuing anyway\u2026"),b._logger.error(G)},F=[].concat(this._cbs.e).concat(y);xb(F,p,E,function(G,H){if(G&&E(G),!H)return b._logger.debug("Event not sent due to onError callback"),T(null,p);b._isBreadcrumbTypeEnabled("error")&&l.prototype.leaveBreadcrumb.call(b,p.errors[0].errorClass,{errorClass:p.errors[0].errorClass,errorMessage:p.errors[0].errorMessage,severity:p.severity},"error"),O!==p.severity&&(p._handledState.severityReason={type:"userCallbackSetSeverity"}),p.unhandled!==p._handledState.unhandled&&(p._handledState.severityReason.unhandledOverridden=!0,p._handledState.unhandled=p.unhandled),b._session&&(b._session._track(p),p._session=b._session),b._delivery.sendEvent({apiKey:p.apiKey||b._config.apiKey,notifier:b._notifier,events:[p]},function(J){return T(J,p)})})},l}(),Pb=function(l,u){var d=new Error(`Invalid configuration
`+S(h(l),function(p){return"  - "+p+" "+l[p]+", got "+Rb(u[p])}).join(`

`));return d},Rb=function(l){switch(typeof l){case"string":case"number":case"object":return JSON.stringify(l);default:return String(l)}},Fl=Ab,Wn={},Dp=["events.[].metaData","events.[].breadcrumbs.[].metaData","events.[].request","events.[].response"];Wn.event=function(l,u){var d=Dt(l,null,null,{redactedPaths:Dp,redactedKeys:u});return d.length>1e6&&(l.events[0]._metadata={notifier:`WARNING!
Serialized payload was `+d.length/1e6+`MB (limit = 1MB)
metadata was removed`},d=Dt(l,null,null,{redactedPaths:Dp,redactedKeys:u})),d},Wn.session=function(l,u){var d=Dt(l,null,null);return d};var Bl={};Bl=function(l,u){return u===void 0&&(u=window),{sendEvent:function(d,p){if(p===void 0&&(p=function(){}),l._config.endpoints.notify===null){var y=new Error("Event not sent due to incomplete endpoint configuration");return p(y)}var T=Lp(l._config,"notify","4",u),b=Wn.event(d,l._config.redactedKeys),O=new u.XDomainRequest;O.onload=function(){p(null)},O.onerror=function(){var E=new Error("Event failed to send");l._logger.error("Event failed to send\u2026",E),b.length>1e6&&l._logger.warn("Event oversized ("+(b.length/1e6).toFixed(2)+" MB)"),p(E)},O.open("POST",T),setTimeout(function(){try{O.send(b)}catch(E){l._logger.error(E),p(E)}},0)},sendSession:function(d,p){if(p===void 0&&(p=function(){}),l._config.endpoints.sessions===null){var y=new Error("Session not sent due to incomplete endpoint configuration");return p(y)}var T=Lp(l._config,"sessions","1",u),b=new u.XDomainRequest;b.onload=function(){p(null)},b.open("POST",T),setTimeout(function(){try{b.send(Wn.session(d,l._config.redactedKeys))}catch(O){l._logger.error(O),p(O)}},0)}}};var Lp=function(l,u,d,p){var y=JSON.parse(JSON.stringify(new Date)),T=Db(l.endpoints[u],p.location.protocol);return T+"?apiKey="+encodeURIComponent(l.apiKey)+"&payloadVersion="+d+"&sentAt="+encodeURIComponent(y)},Db=Bl._matchPageProtocol=function(l,u){return u==="http:"?l.replace(/^https:/,"http:"):l};function Op(l,u){if(l.isSecureContext&&l.crypto&&l.crypto.subtle&&l.crypto.subtle.digest&&typeof TextEncoder=="function"){var d=new TextEncoder().encode(u);return l.crypto.subtle.digest("SHA-1",d).then(function(p){var y=Array.from(new Uint8Array(p)),T=y.map(function(b){return b.toString(16).padStart(2,"0")}).join("");return"sha1 "+T})}return Promise.resolve()}var Lb=function(l,u){return u===void 0&&(u=window),{sendEvent:function(d,p){p===void 0&&(p=function(){});try{var y=l._config.endpoints.notify;if(y===null){var T=new Error("Event not sent due to incomplete endpoint configuration");return p(T)}var b=new u.XMLHttpRequest,O=Wn.event(d,l._config.redactedKeys);b.onreadystatechange=function(){if(b.readyState===u.XMLHttpRequest.DONE){var E=b.status;if(E===0||E>=400){var F=new Error("Request failed with status "+E);l._logger.error("Event failed to send\u2026",F),O.length>1e6&&l._logger.warn("Event oversized ("+(O.length/1e6).toFixed(2)+" MB)"),p(F)}else p(null)}},b.open("POST",y),b.setRequestHeader("Content-Type","application/json"),b.setRequestHeader("Bugsnag-Api-Key",d.apiKey||l._config.apiKey),b.setRequestHeader("Bugsnag-Payload-Version","4"),b.setRequestHeader("Bugsnag-Sent-At",new Date().toISOString()),l._config.sendPayloadChecksums&&typeof Promise!="undefined"&&Promise.toString().indexOf("[native code]")!==-1?Op(u,O).then(function(E){E&&b.setRequestHeader("Bugsnag-Integrity",E),b.send(O)}).catch(function(E){l._logger.error(E),b.send(O)}):b.send(O)}catch(E){l._logger.error(E)}},sendSession:function(d,p){p===void 0&&(p=function(){});try{var y=l._config.endpoints.sessions;if(y===null){var T=new Error("Session not sent due to incomplete endpoint configuration");return p(T)}var b=new u.XMLHttpRequest,O=Wn.session(d,l._config.redactedKeys);b.onreadystatechange=function(){if(b.readyState===u.XMLHttpRequest.DONE){var E=b.status;if(E===0||E>=400){var F=new Error("Request failed with status "+E);l._logger.error("Session failed to send\u2026",F),p(F)}else p(null)}},b.open("POST",y),b.setRequestHeader("Content-Type","application/json"),b.setRequestHeader("Bugsnag-Api-Key",l._config.apiKey),b.setRequestHeader("Bugsnag-Payload-Version","1"),b.setRequestHeader("Bugsnag-Sent-At",new Date().toISOString()),l._config.sendPayloadChecksums&&typeof Promise!="undefined"&&Promise.toString().indexOf("[native code]")!==-1?Op(u,O).then(function(E){E&&b.setRequestHeader("Bugsnag-Integrity",E),b.send(O)}).catch(function(E){l._logger.error(E),b.send(O)}):b.send(O)}catch(E){l._logger.error(E)}}}},_p=new Date,Ob=function(){_p=new Date},_b={name:"appDuration",load:function(l){return l.addOnError(function(u){var d=new Date;u.app.duration=d-_p},!0),{reset:Ob}}},Fb=function(l){return l===void 0&&(l=window),{load:function(u){u.addOnError(function(d){d.context===void 0&&(d.context=l.location.pathname)},!0)}}},Fp="bugsnag-anonymous-id",Bb=function(l){try{var u=l.localStorage,d=u.getItem(Fp);return d&&/^c[a-z0-9]{20,32}$/.test(d)||(d=Rp(),u.setItem(Fp,d)),d}catch(p){}},Gb=function(l,u){return l===void 0&&(l=navigator),u===void 0&&(u=window),{load:function(d){var p={locale:l.browserLanguage||l.systemLanguage||l.userLanguage||l.language,userAgent:l.userAgent};u&&u.screen&&u.screen.orientation&&u.screen.orientation.type?p.orientation=u.screen.orientation.type:u&&u.document&&(p.orientation=u.document.documentElement.clientWidth>u.document.documentElement.clientHeight?"landscape":"portrait"),d._config.generateAnonymousId&&(p.id=Bb(u)),d.addOnSession(function(y){y.device=M({},y.device,p),d._config.collectUserIp||Bp(y)}),d.addOnError(function(y){y.device=M({},y.device,p,{time:new Date}),d._config.collectUserIp||Bp(y)},!0)},configSchema:{generateAnonymousId:{validate:function(d){return d===!0||d===!1},defaultValue:function(){return!0},message:"should be true|false"}}}},Bp=function(l){var u=l.getUser();(!u||!u.id)&&l.setUser(l.device.id)},$b=function(l){return l===void 0&&(l=window),{load:function(u){u.addOnError(function(d){d.request&&d.request.url||(d.request=M({},d.request,{url:l.location.href}))},!0)}}},Vb={load:function(l){l._sessionDelegate=Ub}},Ub={startSession:function(l,u){var d=l;return d._session=u,d._pausedSession=null,d._config.enabledReleaseStages!==null&&!i(d._config.enabledReleaseStages,d._config.releaseStage)?(d._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"),d):(d._delivery.sendSession({notifier:d._notifier,device:u.device,app:u.app,sessions:[{id:u.id,startedAt:u.startedAt,user:u._user}]}),d)},resumeSession:function(l){return l._session?l:l._pausedSession?(l._session=l._pausedSession,l._pausedSession=null,l):l.startSession()},pauseSession:function(l){l._pausedSession=l._session,l._session=null}},zb={load:function(l){l._config.collectUserIp||l.addOnError(function(u){u._user&&typeof u._user.id=="undefined"&&delete u._user.id,u._user=M({id:"[REDACTED]"},u._user),u.request=M({clientIp:"[REDACTED]"},u.request)})},configSchema:{collectUserIp:{defaultValue:function(){return!0},message:"should be true|false",validate:function(l){return l===!0||l===!1}}}},Gp={};Gp.load=function(l){var u=/^(local-)?dev(elopment)?$/.test(l._config.releaseStage);u||!l._isBreadcrumbTypeEnabled("log")||S(Hb,function(d){var p=console[d];console[d]=function(){for(var y=arguments.length,T=new Array(y),b=0;b<y;b++)T[b]=arguments[b];l.leaveBreadcrumb("Console output",o(T,function(O,E,F){var G="[Unknown value]";try{G=String(E)}catch(H){}if(G==="[object Object]")try{G=JSON.stringify(E)}catch(H){}return O["["+F+"]"]=G,O},{severity:d.indexOf("group")===0?"log":d}),"log"),p.apply(console,T)},console[d]._restore=function(){console[d]=p}})};var Hb=a(["log","debug","info","warn","error"],function(l){return typeof console!="undefined"&&typeof console[l]=="function"}),$p=200,Vp=5e5,Wb=function(l,u){return l===void 0&&(l=document),u===void 0&&(u=window),{load:function(d){if(!d._config.trackInlineScripts)return;var p=u.location.href,y="",T=!!l.attachEvent,b=T?l.readyState==="complete":l.readyState!=="loading",O=function(){return l.documentElement.outerHTML};y=O();var E=l.onreadystatechange;l.onreadystatechange=function(){l.readyState==="interactive"&&(y=O(),b=!0);try{E.apply(this,arguments)}catch(Y){}};var F=null,G=function(Y){F=Y},H=function(){var Y=l.currentScript||F;if(!Y&&!b){var le=l.scripts||l.getElementsByTagName("script");Y=le[le.length-1]}return Y},J=function(Y){(!b||!y)&&(y=O());var le=["<!-- DOC START -->"].concat(y.split(`
`)),Be=Y-1,Ce=Math.max(Be-3,0),kt=Math.min(Be+3,le.length);return o(le.slice(Ce,kt),function(Ye,yn,Ho){return Ye[Ce+1+Ho]=yn.length<=$p?yn:yn.substr(0,$p),Ye},{})};d.addOnError(function(Y){Y.errors[0].stacktrace=a(Y.errors[0].stacktrace,function(Ye){return!/__trace__$/.test(Ye.method)});var le=Y.errors[0].stacktrace[0],Be=function(Ye){return Ye.replace(/#.*$/,"").replace(/\?.*$/,"")};if(!(le&&le.file&&Be(le.file)!==Be(p))){var Ce=H();if(Ce){var kt=Ce.innerHTML;Y.addMetadata("script","content",kt.length<=Vp?kt:kt.substr(0,Vp)),le&&le.lineNumber&&(le.code=J(le.lineNumber))}}},!0);var j=S(["setTimeout","setInterval","setImmediate","requestAnimationFrame"],function(Y){return Gl(u,Y,function(le){return xe(le,function(Be){return{get:function(){return Be[0]},replace:function(Ce){Be[0]=Ce}}})})}),Z=j[0];S(["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],function(Y){!u[Y]||!u[Y].prototype||!Object.prototype.hasOwnProperty.call(u[Y].prototype,"addEventListener")||(Gl(u[Y].prototype,"addEventListener",function(le){return xe(le,Up)}),Gl(u[Y].prototype,"removeEventListener",function(le){return xe(le,Up,!0)}))});function xe(Y,le,Be){return Be===void 0&&(Be=!1),function(){var Ce=[].slice.call(arguments);try{var kt=le(Ce),Ye=kt.get();if(Be&&Y.apply(this,Ce),typeof Ye!="function")return Y.apply(this,Ce);if(Ye.__trace__)kt.replace(Ye.__trace__);else{var yn=H();Ye.__trace__=function(){G(yn),Z(function(){G(null)},0);var hx=Ye.apply(this,arguments);return G(null),hx},Ye.__trace__.__trace__=Ye.__trace__,kt.replace(Ye.__trace__)}}catch(Ho){}if(Y.apply)return Y.apply(this,Ce);switch(Ce.length){case 1:return Y(Ce[0]);case 2:return Y(Ce[0],Ce[1]);default:return Y()}}}},configSchema:{trackInlineScripts:{validate:function(d){return d===!0||d===!1},defaultValue:function(){return!0},message:"should be true|false"}}}};function Gl(l,u,d){var p=l[u];if(!p)return p;var y=d(p);return l[u]=y,p}function Up(l){var u=!!l[1]&&typeof l[1].handleEvent=="function";return{get:function(){return u?l[1].handleEvent:l[1]},replace:function(d){u?l[1].handleEvent=d:l[1]=d}}}var Kb=function(l){return l===void 0&&(l=window),{load:function(u){"addEventListener"in l&&u._isBreadcrumbTypeEnabled("user")&&l.addEventListener("click",function(d){var p,y;try{p=Qb(d.target),y=zp(d.target,l)}catch(T){p="[hidden]",y="[hidden]",u._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z")}u.leaveBreadcrumb("UI click",{targetText:p,targetSelector:y},"user")},!0)}}},jb=/^\s*([^\s][\s\S]{0,139}[^\s])?\s*/;function Qb(l){var u=l.textContent||l.innerText||"";return!u&&(l.type==="submit"||l.type==="button")&&(u=l.value),u=u.replace(jb,"$1"),u.length>140?u.slice(0,135)+"(...)":u}function zp(l,u){var d=[l.tagName];if(l.id&&d.push("#"+l.id),l.className&&l.className.length&&d.push("."+l.className.split(" ").join(".")),!u.document.querySelectorAll||!Array.prototype.indexOf)return d.join("");try{if(u.document.querySelectorAll(d.join("")).length===1)return d.join("")}catch(y){return d.join("")}if(l.parentNode.childNodes.length>1){var p=Array.prototype.indexOf.call(l.parentNode.childNodes,l)+1;d.push(":nth-child("+p+")")}return u.document.querySelectorAll(d.join("")).length===1?d.join(""):l.parentNode?zp(l.parentNode,u)+" > "+d.join(""):d.join("")}var Hp={};Hp=function(l){l===void 0&&(l=window);var u={load:function(d){if("addEventListener"in l&&d._isBreadcrumbTypeEnabled("navigation")){var p=function(y){return function(){return d.leaveBreadcrumb(y,{},"navigation")}};l.addEventListener("pagehide",p("Page hidden"),!0),l.addEventListener("pageshow",p("Page shown"),!0),l.addEventListener("load",p("Page loaded"),!0),l.document.addEventListener("DOMContentLoaded",p("DOMContentLoaded"),!0),l.addEventListener("load",function(){return l.addEventListener("popstate",p("Navigated back"),!0)}),l.addEventListener("hashchange",function(y){var T=y.oldURL?{from:Ja(y.oldURL,l),to:Ja(y.newURL,l),state:Kp(l)}:{to:Ja(l.location.href,l)};d.leaveBreadcrumb("Hash changed",T,"navigation")},!0),l.history.pushState&&Wp(d,l.history,"pushState",l,!0),l.history.replaceState&&Wp(d,l.history,"replaceState",l)}}};return u};var Ja=function(l,u){var d=u.document.createElement("A");return d.href=l,""+d.pathname+d.search+d.hash},Yb=function(l,u,d,p){var y=Ja(l.location.href,l);return{title:d,state:u,prevState:Kp(l),to:p||y,from:y}},Wp=function(l,u,d,p,y){y===void 0&&(y=!1);var T=u[d];u[d]=function(b,O,E){l.leaveBreadcrumb("History "+d,Yb(p,b,O,E),"navigation"),y&&typeof l.resetEventCount=="function"&&l.resetEventCount(),T.apply(u,[b,O].concat(E!==void 0?E:[]))}},Kp=function(l){try{return l.history.state}catch(u){}},jp=function(l){if(!l)return{};var u={};if(typeof l.entries=="function")for(var d=l.entries(),p=d.next();!p.done;){var y=p.value,T=y[0],b=y[1];u[T]=b,p=d.next()}else l.forEach&&l.forEach(function(O,E){u[E]=O});return u},Xb=function(){function l(){this.callbacks=[]}var u=l.prototype;return u.onStart=function(p){if(typeof p!="function")throw new Error("RequestTracker onStart callback must be a function");this.callbacks.push(p)},u.start=function(p){var y=this.callbacks.map(function(T){try{return T(p)}catch(b){return console.error("RequestTracker callback error:",b),null}}).filter(function(T){return T&&typeof T=="object"});return{onRequestEnd:function(T){y.forEach(function(b){if(typeof b.onRequestEnd=="function")try{b.onRequestEnd(T)}catch(O){console.error("RequestTracker onRequestEnd callback error:",O)}})},extraRequestHeaders:y.map(function(T){return T.extraRequestHeaders}).filter(function(T){return T&&typeof T=="object"}).reduce(function(T,b){return Object.assign(T,b)},{})}},u._reset=function(){this.callbacks=[]},l}(),$l=Xb;function Zb(l,u){if(u===void 0&&(u={}),!(!("fetch"in l)||l.fetch.polyfill)){if(!l.__bugsnag_fetch_tracker__){var d=new $l,p=l.fetch;l.fetch=function(T,b){b===void 0&&(b={});var O=null,E="GET";T&&typeof T=="object"?(O=T.url,b&&"method"in b?E=b.method:T&&"method"in T&&(E=T.method)):(O=T,b&&"method"in b&&(E=b.method)),E===void 0&&(E="GET");var F={};b&&b.headers&&(b.headers instanceof Headers?F=jp(b.headers):typeof b.headers=="object"&&(F=b.headers));var G=Date.now(),H={url:String(O),method:String(E),startTime:G,type:"fetch",input:T,headers:F,body:b?b.body:void 0},J=d.start(H),j=J.onRequestEnd;return p.call.apply(p,[this].concat(Array.prototype.slice.call(arguments))).then(function(Z){return j({endTime:Date.now(),status:Z.status,state:"success",headers:jp(Z.headers)}),Z},function(Z){throw j({endTime:Date.now(),state:"error",error:Z}),Z})},l.__bugsnag_fetch_tracker__=d}return l.__bugsnag_fetch_tracker__}}var Qp=Zb;function Yp(l,u){if(u===void 0&&(u=[]),!l||typeof l!="string")return!0;var d=l.replace(/\?.*$/,"");return i(u,d)}function Jb(l,u){u===void 0&&(u=[]);var d=[l._config.endpoints.notify,l._config.endpoints.sessions].concat(u).filter(Boolean);return function(p){return Yp(p,d)}}function ex(l){return l&&Date.now()-l}var Xp={shouldIgnoreUrl:Yp,createUrlFilter:Jb,getDuration:ex},tx=function(l){if(!l)return{};var u=l.trim().split(/[\r\n]+/),d={};return u.forEach(function(p){var y=p.split(": "),T=y.shift(),b=y.join(": ");d[T]=b}),d},Zp=function(u){var d=u.response,p=u.responseType;if(d!=null)switch(p){case"arraybuffer":case"blob":return"[Binary Data]";case"document":return"[Document]";case"json":try{return JSON.stringify(d)}catch(y){return"[Unserializable JSON]"}case"text":case"":default:return String(d)}};function rx(l,u){if(u===void 0&&(u={}),!(!("addEventListener"in l.XMLHttpRequest.prototype)||!("WeakMap"in l))){if(!l.__bugsnag_xhr_tracker__){var d=new $l,p=new WeakMap,y=new WeakMap,T=l.XMLHttpRequest.prototype.open,b=l.XMLHttpRequest.prototype.send,O=l.XMLHttpRequest.prototype.setRequestHeader;l.XMLHttpRequest.prototype.open=function(F,G){this&&p.set(this,{method:String(F),url:String(G)}),T.apply(this,arguments)},l.XMLHttpRequest.prototype.setRequestHeader=function(F,G){if(this){var H=p.get(this);H&&(H.headers=H.headers||{},H.headers[String(F)]=(H.headers[String(F)]||"")+String(G))}O.apply(this,arguments)},l.XMLHttpRequest.prototype.send=function(F){var G=this,H=p.get(this);if(H){var J=y.get(this);J&&(this.removeEventListener("load",J.load),this.removeEventListener("error",J.error));var j=Date.now(),Z={url:H.url,method:H.method,startTime:j,type:"xmlhttprequest",body:F,headers:H.headers},xe=d.start(Z),Y=xe.onRequestEnd,le=function(){return tx(G.getAllResponseHeaders())},Be=function(){Y({endTime:Date.now(),status:G.status,state:"success",headers:le(),body:Zp(G)})},Ce=function(){Y({endTime:Date.now(),state:"error",headers:le(),body:Zp(G)})};this.addEventListener("load",Be),this.addEventListener("error",Ce),this&&y.set(this,{load:Be,error:Ce})}b.apply(this,arguments)},l.__bugsnag_xhr_tracker__=d}return l.__bugsnag_xhr_tracker__}}var Jp=rx,ed=Xp.createUrlFilter,td=Xp.getDuration;function nx(l,u){return l===void 0&&(l=[]),u===void 0&&(u=window),{name:"requestTracker",load:function(d){try{var p=Qp(u),y=Jp(u),T=ed(d,l);return{fetchTracker:p,xhrTracker:y,urlFilter:T,getDuration:td}}catch(b){throw d._logger.error("Failed to load request tracker:",b),new Error("Request tracking is not available: "+b.message)}}}}var ox={RequestTracker:$l,createFetchTracker:Qp,createXhrTracker:Jp,createUrlFilter:ed,getDuration:td,createRequestTrackerPlugin:nx},Vl="request",ax=function(l,u){l===void 0&&(l=[]),u===void 0&&(u=window);var d=[],p={load:function(y){if(!y._isBreadcrumbTypeEnabled("request"))return;var T=y.getPlugin("requestTracker");if(!T)try{var b=ox.createRequestTrackerPlugin,O=b(l,u);y._loadPlugin(O),T=y.getPlugin("requestTracker")}catch(F){y._logger.warn("Failed to auto-load request tracker, falling back to direct monkey-patching:",F.message)}if(T)return E(T);function E(F){var G=F.fetchTracker,H=F.xhrTracker,J=F.urlFilter,j=F.getDuration,Z=function(xe){if(!J(xe.url))return{onRequestEnd:function(Y){var le=j(xe.startTime),Be={method:xe.method,status:Y.status,url:xe.url,duration:le},Ce=xe.type==="fetch"?"fetch()":"XMLHttpRequest";Y.state==="error"?y.leaveBreadcrumb(Ce+" error",{method:xe.method,url:xe.url,duration:le},Vl):Y.status>=400?y.leaveBreadcrumb(Ce+" failed",Be,Vl):y.leaveBreadcrumb(Ce+" succeeded",Be,Vl)}}};G&&(G.onStart(Z),d.push(G._restore)),H&&(H.onStart(Z),d.push(H._restore))}}};return p},ix={load:function(l){var u=0;l.addOnError(function(d){if(u>=l._config.maxEvents)return l._logger.warn("Cancelling event send due to maxEvents per session limit of "+l._config.maxEvents+" being reached"),!1;u++}),l.resetEventCount=function(){u=0}},configSchema:{maxEvents:{defaultValue:function(){return 10},message:"should be a positive integer \u2264100",validate:function(l){return w(1,100)(l)}}}},Ul={};Ul={load:function(l){l.addOnError(function(u){var d=o(u.errors,function(p,y){return p.concat(y.stacktrace)},[]);S(d,function(p){p.file=sx(p.file)})})}};var sx=Ul._strip=function(l){return typeof l=="string"?l.replace(/\?.*$/,"").replace(/#.*$/,""):l},lx=function(l,u){return l===void 0&&(l=window),u===void 0&&(u="window onerror"),{load:function(d){if(!d._config.autoDetectErrors||!d._config.enabledErrorTypes.unhandledExceptions)return;function p(T,b,O,E,F){if(O===0&&/Script error\.?/.test(T))d._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z");else{var G={severity:"error",unhandled:!0,severityReason:{type:"unhandledException"}},H;if(F)H=d.Event.create(F,!0,G,u,1),rd(H.errors[0].stacktrace,b,O,E);else if(typeof T=="object"&&T!==null&&(!b||typeof b!="string")&&!O&&!E&&!F){var J=T.type?"Event: "+T.type:"Error",j=T.message||T.detail||"";H=d.Event.create({name:J,message:j},!0,G,u,1),H.originalError=T,H.addMetadata(u,{event:T,extraParameters:b})}else H=d.Event.create(T,!0,G,u,1),rd(H.errors[0].stacktrace,b,O,E);d._notify(H)}try{y.apply(this,arguments)}catch(Z){}}var y=l.onerror;l.onerror=p}}},rd=function(l,u,d,p){l[0]||l.push({});var y=l[0];!y.file&&typeof u=="string"&&(y.file=u),!y.lineNumber&&zl(d)&&(y.lineNumber=d),y.columnNumber||(zl(p)?y.columnNumber=p:window.event&&zl(window.event.errorCharacter)&&(y.columnNumber=window.event.errorCharacter))},zl=function(l){return typeof l=="number"&&String.call(l)!=="NaN"},cx,ux=function(l){l===void 0&&(l=window);var u={load:function(d){if(!(!d._config.autoDetectErrors||!d._config.enabledErrorTypes.unhandledRejections)){var p=function(y){var T=y.reason,b=!1;try{y.detail&&y.detail.reason&&(T=y.detail.reason,b=!0)}catch(F){}var O=!d._config.reportUnhandledPromiseRejectionsAsHandled,E=d.Event.create(T,!1,{severity:"error",unhandled:O,severityReason:{type:"unhandledPromiseRejection"}},"unhandledrejection handler",1,d._logger);b&&S(E.errors[0].stacktrace,px(T)),d._notify(E,function(F){if(Xa(F.originalError)&&!F.originalError.stack){var G;F.addMetadata("unhandledRejection handler",(G={},G[Object.prototype.toString.call(F.originalError)]={name:F.originalError.name,message:F.originalError.message,code:F.originalError.code},G))}})};"addEventListener"in l?l.addEventListener("unhandledrejection",p):l.onunhandledrejection=function(y,T){p({detail:{reason:y,promise:T}})},cx=p}}};return u},px=function(l){return function(u){u.file!==l.toString()&&u.method&&(u.method=u.method.replace(/^\s+/,""))}},hn={},dx="Bugsnag JavaScript",mx="8.8.1",fx="https://github.com/bugsnag/bugsnag-js",gx=M({},$.schema,W),ut={_client:null,createClient:function(l){typeof l=="string"&&(l={apiKey:l}),l||(l={});var u=[_b,Gb(),Fb(),$b(),ix,Vb,zb,Ul,lx(),ux(),Hp(),Kb(),ax(),Gp,Wb()],d=new Fl(l,gx,u,{name:dx,version:mx,url:fx});return d._setDelivery(window.XDomainRequest?Bl:Lb),d._logger.debug("Loaded!"),d.leaveBreadcrumb("Bugsnag loaded",{},"state"),d._config.autoTrackSessions?d.startSession():d},start:function(l){return ut._client?(ut._client._logger.warn("Bugsnag.start() was called more than once. Ignoring."),ut._client):(ut._client=ut.createClient(l),ut._client)},isStarted:function(){return ut._client!=null}};return S(["resetEventCount"].concat(h(Fl.prototype)),function(l){/^_/.test(l)||(ut[l]=function(){if(!ut._client)return console.log("Bugsnag."+l+"() was called before Bugsnag.start()");ut._client._depth+=1;var u=ut._client[l].apply(ut._client,arguments);return ut._client._depth-=1,u})}),hn=ut,hn.Client=Fl,hn.Event=Pl,hn.Session=Ol,hn.Breadcrumb=D,hn.default=ut,hn})});var bn;function od(e){bn=e}function ad(e,t){bn==null||bn.notify(e,t)}function id(e,t,r){bn==null||bn.leaveBreadcrumb(e,t,r)}function Wl(){var e;return(e=window.__dcgIframeConnect)!=null&&e.shouldSuppressProgrammaticFocus?window.__dcgIframeConnect.shouldSuppressProgrammaticFocus():!1}var Cx=/lang=[A-Za-z]+/,kx=/(cl|learn|help).desmos.com/,qx=/^(?:https?:)?(?:\/\/)?([^\s:\/\?]+)/i,Ex=/(^desmos\.com$)|(\.desmos.com$)/;function Nx(e){var n;let[t,r]=(n=qx.exec(e))!=null?n:[];return r}function Kl(e){let t=Nx(e);return t?Ex.test(t):!0}function ld(e,t){if(e===""||!t||Cx.test(e)||kx.test(e)||!Kl(e))return e;let r=encodeURIComponent(t);if(e.length){let n=e.split("#"),o=/\?/.test(e)?`${n[0]}&lang=${r}`:`${n[0]}?lang=${r}`;return n[1]!==void 0?`${o}#${n[1]}`:o}else return`?lang=${r}`}function cd(e,t){var n;let r="";return t!==void 0?r=t:typeof window!="undefined"&&window.location&&window.location.search&&(r=(n=new URLSearchParams(window.location.search).get("lang"))!=null?n:""),ld(e,r)}var vr=[],Ix=Object.getPrototypeOf,ei=vr.slice,Ax=vr.flat?function(e){return vr.flat.call(e)}:function(e){return vr.concat.apply([],e)},Td=vr.push,Px=vr.indexOf,oi={},wd=oi.toString,ti=oi.hasOwnProperty,vd=ti.toString,Rx=vd.call(Object),Ue={},Mr=function(t){return typeof t=="function"&&typeof t.nodeType!="number"&&typeof t.item!="function"},Xn=function(t){return t!=null&&t===t.window},Ve=window.document;function ai(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?oi[wd.call(e)]||"object":typeof e}var Md="3.6.0",v=function(e,t){return new v.fn.init(e,t)};v.fn=v.prototype={jquery:Md,constructor:v,length:0,toArray:function(){return ei.call(this)},get:function(e){return e==null?ei.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=v.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return v.each(this,e)},map:function(e){return this.pushStack(v.map(this,function(t,r){return e.call(t,r,t)}))},slice:function(){return this.pushStack(ei.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(v.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(v.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,r=+e+(e<0?t:0);return this.pushStack(r>=0&&r<t?[this[r]]:[])},end:function(){return this.prevObject||this.constructor()},push:Td,sort:vr.sort,splice:vr.splice};v.extend=v.fn.extend=function(){var e,t,r,n,o,a,i=arguments[0]||{},s=1,c=arguments.length,f=!1;for(typeof i=="boolean"&&(f=i,i=arguments[s]||{},s++),typeof i!="object"&&!Mr(i)&&(i={}),s===c&&(i=this,s--);s<c;s++)if((e=arguments[s])!=null)for(t in e)n=e[t],!(t==="__proto__"||i===n)&&(f&&n&&(v.isPlainObject(n)||(o=Array.isArray(n)))?(r=i[t],o&&!Array.isArray(r)?a=[]:!o&&!v.isPlainObject(r)?a={}:a=r,o=!1,i[t]=v.extend(f,a,n)):n!==void 0&&(i[t]=n));return i};v.extend({expando:"jQuery"+(Md+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,r;return!e||wd.call(e)!=="[object Object]"?!1:(t=Ix(e),t?(r=ti.call(t,"constructor")&&t.constructor,typeof r=="function"&&vd.call(r)===Rx):!0)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},each:function(e,t){var r,n=0;if(jl(e))for(r=e.length;n<r&&t.call(e[n],n,e[n])!==!1;n++);else for(n in e)if(t.call(e[n],n,e[n])===!1)break;return e},makeArray:function(e,t){var r=t||[];return e!=null&&(jl(Object(e))?v.merge(r,typeof e=="string"?[e]:e):Td.call(r,e)),r},inArray:function(e,t,r){return t==null?-1:Px.call(t,e,r)},merge:function(e,t){for(var r=+t.length,n=0,o=e.length;n<r;n++)e[o++]=t[n];return e.length=o,e},grep:function(e,t,r){for(var n,o=[],a=0,i=e.length,s=!r;a<i;a++)n=!t(e[a],a),n!==s&&o.push(e[a]);return o},map:function(e,t,r){var n,o,a=0,i=[];if(jl(e))for(n=e.length;a<n;a++)o=t(e[a],a,r),o!=null&&i.push(o);else for(a in e)o=t(e[a],a,r),o!=null&&i.push(o);return Ax(i)},guid:1,support:Ue});typeof Symbol=="function"&&(v.fn[Symbol.iterator]=vr[Symbol.iterator]);v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){oi["[object "+t+"]"]=t.toLowerCase()});function jl(e){var t=!!e&&"length"in e&&e.length,r=ai(e);return Mr(e)||Xn(e)?!1:r==="array"||t===0||typeof t=="number"&&t>0&&t-1 in e}var Dx=function(e){var t,r,n,o,a,i,s,c=e.document,f=[],h=f.push,w=f.push,N=f.slice,I=/HTML$/i,$=/^[^{]+\{\s*\[native \w/,C=function(){n()};try{w.apply(f=N.call(c.childNodes),c.childNodes),f[c.childNodes.length].nodeType}catch(_){w={apply:f.length?function(B,W){h.apply(B,N.call(W))}:function(B,W){for(var me=B.length,q=0;B[me++]=W[q++];);B.length=me-1}}}function M(){}function S(_){var B=o.createElement("fieldset");try{return!!_(B)}catch(W){return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}return t=M.support={},r=M.isXML=function(_){var B=_&&_.namespaceURI,W=_&&(_.ownerDocument||_).documentElement;return!I.test(B||W&&W.nodeName||"HTML")},n=M.setDocument=function(_){var B,W,me=_?_.ownerDocument||_:c;return me==o||me.nodeType!==9||!me.documentElement||(o=me,a=o.documentElement,i=!r(o),c!=o&&(W=o.defaultView)&&W.top!==W&&(W.addEventListener?W.addEventListener("unload",C,!1):W.attachEvent&&W.attachEvent("onunload",C)),t.attributes=S(function(q){return q.className="i",!q.getAttribute("className")}),t.getElementsByTagName=S(function(q){return q.appendChild(o.createComment("")),!q.getElementsByTagName("*").length}),B=$.test(a.compareDocumentPosition),s=B||$.test(a.contains)?function(q,D){var P=q.nodeType===9?q.documentElement:q,x=D&&D.parentNode;return q===x||!!(x&&x.nodeType===1&&(P.contains?P.contains(x):q.compareDocumentPosition&&q.compareDocumentPosition(x)&16))}:function(q,D){if(D){for(;D=D.parentNode;)if(D===q)return!0}return!1}),o},M.contains=function(_,B){return(_.ownerDocument||_)!=o&&n(_),s(_,B)},n(),t.sortDetached=S(function(_){return _.compareDocumentPosition(o.createElement("fieldset"))&1}),M}(window);v.contains=Dx.contains;function Kn(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var Sd,Lx=v.fn.init=function(e,t,r){if(!e)return this;if(r=r||Sd,typeof e=="string")throw new Error("$(string) implementation has been removed");if(e.nodeType)return this[0]=e,this.length=1,this;if(Mr(e))throw new Error("$(function) implementation has been removed");return v.makeArray(e,this)};Lx.prototype=v.fn;Sd=v(Ve);var Yl=/[^\x20\t\r\n\f]+/g,Ko=function(e,t,r,n,o,a,i){var s=0,c=e.length,f=r==null;if(ai(r)==="object"){o=!0;for(s in r)Ko(e,t,s,r[s],!0,a,i)}else if(n!==void 0&&(o=!0,Mr(n)||(i=!0),f&&(i?(t.call(e,n),t=null):(f=t,t=function(h,w,N){return f.call(v(h),N)})),t))for(;s<c;s++)t(e[s],r,i?n:n.call(e[s],s,t(e[s],r)));return o?e:f?t.call(e):c?t(e[0],r):a},Ox=/^-ms-/,_x=/-([a-z])/g;function Fx(e,t){return t.toUpperCase()}function Tr(e){return e.replace(Ox,"ms-").replace(_x,Fx)}var ri=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function jo(){this.expando=v.expando+jo.uid++}jo.uid=1;jo.prototype={cache:function(e){var t=e[this.expando];return t||(t={},ri(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,r){var n,o=this.cache(e);if(typeof t=="string")o[Tr(t)]=r;else for(n in t)o[Tr(n)]=t[n];return o},get:function(e,t){return t===void 0?this.cache(e):e[this.expando]&&e[this.expando][Tr(t)]},access:function(e,t,r){return t===void 0||t&&typeof t=="string"&&r===void 0?this.get(e,t):(this.set(e,t,r),r!==void 0?r:t)},remove:function(e,t){var r,n=e[this.expando];if(n!==void 0){if(t!==void 0)for(Array.isArray(t)?t=t.map(Tr):(t=Tr(t),t=t in n?[t]:t.match(Yl)||[]),r=t.length;r--;)delete n[t[r]];(t===void 0||v.isEmptyObject(n))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return t!==void 0&&!v.isEmptyObject(t)}};var Ie=new jo,wr=new jo,Bx=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Gx=/[A-Z]/g;function $x(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:Bx.test(e)?JSON.parse(e):e}function ud(e,t,r){var n;if(r===void 0&&e.nodeType===1)if(n="data-"+t.replace(Gx,"-$&").toLowerCase(),r=e.getAttribute(n),typeof r=="string"){try{r=$x(r)}catch(o){}wr.set(e,t,r)}else r=void 0;return r}v.extend({hasData:function(e){return wr.hasData(e)||Ie.hasData(e)},data:function(e,t,r){return wr.access(e,t,r)},removeData:function(e,t){wr.remove(e,t)},_data:function(e,t,r){return Ie.access(e,t,r)},_removeData:function(e,t){Ie.remove(e,t)}});v.fn.extend({data:function(e,t){var r,n,o,a=this[0],i=a&&a.attributes;if(e===void 0){if(this.length&&(o=wr.get(a),a.nodeType===1&&!Ie.get(a,"hasDataAttrs"))){for(r=i.length;r--;)i[r]&&(n=i[r].name,n.indexOf("data-")===0&&(n=Tr(n.slice(5)),ud(a,n,o[n])));Ie.set(a,"hasDataAttrs",!0)}return o}return typeof e=="object"?this.each(function(){wr.set(this,e)}):Ko(this,function(s){var c;if(a&&s===void 0)return c=wr.get(a,e),c!==void 0||(c=ud(a,e),c!==void 0)?c:void 0;this.each(function(){wr.set(this,e,s)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){wr.remove(this,e)})}});var Cd=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ii=new RegExp("^(?:([+-])=|)("+Cd+")([a-z%]*)$","i"),zr=["Top","Right","Bottom","Left"],jn=Ve.documentElement,kd=function(e){return v.contains(e.ownerDocument,e)},Vx={composed:!0};jn.getRootNode&&(kd=function(e){return v.contains(e.ownerDocument,e)||e.getRootNode(Vx)===e.ownerDocument});function Ux(e,t,r,n){var o,a,i=20,s=n?function(){return n.cur()}:function(){return v.css(e,t,"")},c=s(),f=r&&r[3]||(v.cssNumber[t]?"":"px"),h=e.nodeType&&(v.cssNumber[t]||f!=="px"&&+c)&&ii.exec(v.css(e,t));if(h&&h[3]!==f){for(c=c/2,f=f||h[3],h=+c||1;i--;)v.style(e,t,h+f),(1-a)*(1-(a=s()/c||.5))<=0&&(i=0),h=h/a;h=h*2,v.style(e,t,h+f),r=r||[]}return r&&(h=+h||+c||0,o=r[1]?h+(r[1]+1)*r[2]:+r[2],n&&(n.unit=f,n.start=h,n.end=o)),o}var Ql=/^(?:checkbox|radio)$/i;(function(){var e=Ve.createDocumentFragment(),t=e.appendChild(Ve.createElement("div")),r=Ve.createElement("input");r.setAttribute("type","radio"),r.setAttribute("checked","checked"),r.setAttribute("name","t"),t.appendChild(r),Ue.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Ue.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,t.innerHTML="<option></option>",Ue.option=!!t.lastChild})();var pd=/^([^.]*)(?:\.(.+)|)/;function Qn(){return!0}function Yn(){return!1}function zx(e,t){return e===Hx()==(t==="focus")}function Hx(){try{return Ve.activeElement}catch(e){}}function Xl(e,t,r,n,o,a){var i,s;if(typeof t=="object"){typeof r!="string"&&(n=n||r,r=void 0);for(s in t)Xl(e,s,r,n,t[s],a);return e}if(n==null&&o==null?(o=r,n=r=void 0):o==null&&(typeof r=="string"?(o=n,n=void 0):(o=n,n=r,r=void 0)),o===!1)o=Yn;else if(!o)return e;return a===1&&(i=o,o=function(c){return v().off(c),i.apply(this,arguments)},o.guid=i.guid||(i.guid=v.guid++)),e.each(function(){v.event.add(this,t,o,n,r)})}v.event={global:{},add:function(e,t,r,n,o){var a,i,s,c,f,h,w,N,I,$,C,M=Ie.get(e);if(ri(e)){if(r.handler&&(a=r,r=a.handler,o=a.selector),o)throw new Error("Support for event delegation has been removed");for(r.guid||(r.guid=v.guid++),(c=M.events)||(c=M.events=Object.create(null)),(i=M.handle)||(i=M.handle=function(S){return typeof v!="undefined"&&v.event.triggered!==S.type?v.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Yl)||[""],f=t.length;f--;)if(s=pd.exec(t[f])||[],I=C=s[1],$=(s[2]||"").split(".").sort(),!!I){if(w=v.event.special[I]||{},I=(o?w.delegateType:w.bindType)||I,w=v.event.special[I]||{},h=v.extend({type:I,origType:C,data:n,handler:r,guid:r.guid,selector:o,namespace:$.join(".")},a),(N=c[I])||(N=c[I]=[],N.delegateCount=0,(!w.setup||w.setup.call(e,n,$,i)===!1)&&e.addEventListener&&e.addEventListener(I,i)),w.add&&(w.add.call(e,h),h.handler.guid||(h.handler.guid=r.guid)),o)throw new Error("Support for event delegation has been removed");N.push(h),v.event.global[I]=!0}}},remove:function(e,t,r,n,o){var a,i,s,c,f,h,w,N,I,$,C,M=Ie.hasData(e)&&Ie.get(e);if(!(!M||!(c=M.events))){for(t=(t||"").match(Yl)||[""],f=t.length;f--;){if(s=pd.exec(t[f])||[],I=C=s[1],$=(s[2]||"").split(".").sort(),!I){for(I in c)v.event.remove(e,I+t[f],r,n,!0);continue}for(w=v.event.special[I]||{},I=(n?w.delegateType:w.bindType)||I,N=c[I]||[],s=s[2]&&new RegExp("(^|\\.)"+$.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=a=N.length;a--;)h=N[a],(o||C===h.origType)&&(!r||r.guid===h.guid)&&(!s||s.test(h.namespace))&&(!n||n===h.selector||n==="**"&&h.selector)&&(N.splice(a,1),h.selector&&N.delegateCount--,w.remove&&w.remove.call(e,h));i&&!N.length&&((!w.teardown||w.teardown.call(e,$,M.handle)===!1)&&v.removeEvent(e,I,M.handle),delete c[I])}v.isEmptyObject(c)&&Ie.remove(e,"handle events")}},dispatch:function(e){var t,r,n,o,a,i,s=new Array(arguments.length),c=v.event.fix(e),f=(Ie.get(this,"events")||Object.create(null))[c.type]||[],h=v.event.special[c.type]||{};for(s[0]=c,t=1;t<arguments.length;t++)s[t]=arguments[t];if(c.delegateTarget=this,!(h.preDispatch&&h.preDispatch.call(this,c)===!1)){for(i=v.event.handlers.call(this,c,f),t=0;(o=i[t++])&&!c.isPropagationStopped();)for(c.currentTarget=o.elem,r=0;(a=o.handlers[r++])&&!c.isImmediatePropagationStopped();)(!c.rnamespace||a.namespace===!1||c.rnamespace.test(a.namespace))&&(c.handleObj=a,c.data=a.data,n=((v.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,s),n!==void 0&&(c.result=n)===!1&&(c.preventDefault(),c.stopPropagation()));return h.postDispatch&&h.postDispatch.call(this,c),c.result}},handlers:function(e,t){var r=[],n=t.delegateCount,o=e.target;if(n)throw new Error("Support for event delegtaion has been removed");return o=this,n<t.length&&r.push({elem:o,handlers:t.slice(n)}),r},addProp:function(e,t){Object.defineProperty(v.Event.prototype,e,{enumerable:!0,configurable:!0,get:Mr(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(r){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r})}})},fix:function(e){return e[v.expando]?e:new v.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Ql.test(t.type)&&t.click&&Kn(t,"input")&&ni(t,"click",Qn),!1},trigger:function(e){var t=this||e;return Ql.test(t.type)&&t.click&&Kn(t,"input")&&ni(t,"click"),!0},_default:function(e){var t=e.target;return Ql.test(t.type)&&t.click&&Kn(t,"input")&&Ie.get(t,"click")||Kn(t,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}};function ni(e,t,r){if(!r){Ie.get(e,t)===void 0&&v.event.add(e,t,Qn);return}Ie.set(e,t,!1),v.event.add(e,t,{namespace:!1,handler:function(n){var o,a,i=Ie.get(this,t);if(n.isTrigger&1&&this[t]){if(i.length)(v.event.special[t]||{}).delegateType&&n.stopPropagation();else if(i=ei.call(arguments),Ie.set(this,t,i),o=r(this,t),this[t](),a=Ie.get(this,t),i!==a||o?Ie.set(this,t,!1):a={},i!==a)return n.stopImmediatePropagation(),n.preventDefault(),a&&a.value}else i.length&&(Ie.set(this,t,{value:v.event.trigger(v.extend(i[0],v.Event.prototype),i.slice(1),this)}),n.stopImmediatePropagation())}})}v.removeEvent=function(e,t,r){e.removeEventListener&&e.removeEventListener(t,r)};v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?Qn:Yn,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[v.expando]=!0};v.Event.prototype={constructor:v.Event,isDefaultPrevented:Yn,isPropagationStopped:Yn,isImmediatePropagationStopped:Yn,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Qn,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Qn,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Qn,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}};v.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},v.event.addProp);v.each({focus:"focusin",blur:"focusout"},function(e,t){v.event.special[e]={setup:function(){return ni(this,e,zx),!1},trigger:function(){return ni(this,e),!0},_default:function(){return!0},delegateType:t}});v.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(r){var n,o=this,a=r.relatedTarget,i=r.handleObj;return(!a||a!==o&&!v.contains(o,a))&&(r.type=i.origType,n=i.handler.apply(this,arguments),r.type=t),n}}});v.fn.extend({on:function(e,t,r,n){return Xl(this,e,t,r,n)},one:function(e,t,r,n){return Xl(this,e,t,r,n,1)},off:function(e,t,r){var n,o;if(e&&e.preventDefault&&e.handleObj)return n=e.handleObj,v(e.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if(typeof e=="object"){for(o in e)this.off(o,t,e[o]);return this}return(t===!1||typeof t=="function")&&(r=t,t=void 0),r===!1&&(r=Yn),this.each(function(){v.event.remove(this,e,r,t)})}});var ec=new RegExp("^("+Cd+")(?!px)[a-z%]+$","i"),si=function(e){var t=e.ownerDocument.defaultView;return(!t||!t.opener)&&(t=window),t.getComputedStyle(e)},qd=function(e,t,r){var n,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];n=r.call(e);for(o in t)e.style[o]=a[o];return n},Wx=new RegExp(zr.join("|"),"i");(function(){function e(){if(f){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",f.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",jn.appendChild(c).appendChild(f);var h=window.getComputedStyle(f);r=h.top!=="1%",s=t(h.marginLeft)===12,f.style.right="60%",a=t(h.right)===36,n=t(h.width)===36,f.style.position="absolute",o=t(f.offsetWidth/3)===12,jn.removeChild(c),f=null}}function t(h){return Math.round(parseFloat(h))}var r,n,o,a,i,s,c=Ve.createElement("div"),f=Ve.createElement("div");f.style&&(f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",Ue.clearCloneStyle=f.style.backgroundClip==="content-box",v.extend(Ue,{boxSizingReliable:function(){return e(),n},pixelBoxStyles:function(){return e(),a},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var h,w,N,I;return i==null&&(h=Ve.createElement("table"),w=Ve.createElement("tr"),N=Ve.createElement("div"),h.style.cssText="position:absolute;left:-11111px;border-collapse:separate",w.style.cssText="border:1px solid",w.style.height="1px",N.style.height="9px",N.style.display="block",jn.appendChild(h).appendChild(w).appendChild(N),I=window.getComputedStyle(w),i=parseInt(I.height,10)+parseInt(I.borderTopWidth,10)+parseInt(I.borderBottomWidth,10)===w.offsetHeight,jn.removeChild(h)),i}}))})();function Wo(e,t,r){var n,o,a,i,s=e.style;return r=r||si(e),r&&(i=r.getPropertyValue(t)||r[t],i===""&&!kd(e)&&(i=v.style(e,t)),!Ue.pixelBoxStyles()&&ec.test(i)&&Wx.test(t)&&(n=s.width,o=s.minWidth,a=s.maxWidth,s.minWidth=s.maxWidth=s.width=i,i=r.width,s.width=n,s.minWidth=o,s.maxWidth=a)),i!==void 0?i+"":i}function Ed(e,t){return{get:function(){if(e()){delete this.get;return}return(this.get=t).apply(this,arguments)}}}var dd=["Webkit","Moz","ms"],Nd=Ve.createElement("div").style,md={};function Kx(e){for(var t=e[0].toUpperCase()+e.slice(1),r=dd.length;r--;)if(e=dd[r]+t,e in Nd)return e}function fd(e){var t=v.cssProps[e]||md[e];return t||(e in Nd?e:md[e]=Kx(e)||e)}var jx=/^(none|table(?!-c[ea]).+)/,gd=/^--/,Qx={position:"absolute",visibility:"hidden",display:"block"},hd={letterSpacing:"0",fontWeight:"400"};function Id(e,t,r){var n=ii.exec(t);return n?Math.max(0,n[2]-(r||0))+(n[3]||"px"):t}function Zl(e,t,r,n,o,a){var i=t==="width"?1:0,s=0,c=0;if(r===(n?"border":"content"))return 0;for(;i<4;i+=2)r==="margin"&&(c+=v.css(e,r+zr[i],!0,o)),n?(r==="content"&&(c-=v.css(e,"padding"+zr[i],!0,o)),r!=="margin"&&(c-=v.css(e,"border"+zr[i]+"Width",!0,o))):(c+=v.css(e,"padding"+zr[i],!0,o),r!=="padding"?c+=v.css(e,"border"+zr[i]+"Width",!0,o):s+=v.css(e,"border"+zr[i]+"Width",!0,o));return!n&&a>=0&&(c+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-a-c-s-.5))||0),c}function yd(e,t,r){var n=si(e),o=!Ue.boxSizingReliable()||r,a=o&&v.css(e,"boxSizing",!1,n)==="border-box",i=a,s=Wo(e,t,n),c="offset"+t[0].toUpperCase()+t.slice(1);if(ec.test(s)){if(!r)return s;s="auto"}return(!Ue.boxSizingReliable()&&a||!Ue.reliableTrDimensions()&&Kn(e,"tr")||s==="auto"||!parseFloat(s)&&v.css(e,"display",!1,n)==="inline")&&e.getClientRects().length&&(a=v.css(e,"boxSizing",!1,n)==="border-box",i=c in e,i&&(s=e[c])),s=parseFloat(s)||0,s+Zl(e,t,r||(a?"border":"content"),i,n,s)+"px"}v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var r=Wo(e,"opacity");return r===""?"1":r}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,r,n){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var o,a,i,s=Tr(t),c=gd.test(t),f=e.style;if(c||(t=fd(s)),i=v.cssHooks[t]||v.cssHooks[s],r!==void 0){if(a=typeof r,a==="string"&&(o=ii.exec(r))&&o[1]&&(r=Ux(e,t,o),a="number"),r==null||r!==r)return;a==="number"&&!c&&(r+=o&&o[3]||(v.cssNumber[s]?"":"px")),!Ue.clearCloneStyle&&r===""&&t.indexOf("background")===0&&(f[t]="inherit"),(!i||!("set"in i)||(r=i.set(e,r,n))!==void 0)&&(c?f.setProperty(t,r):f[t]=r)}else return i&&"get"in i&&(o=i.get(e,!1,n))!==void 0?o:f[t]}},css:function(e,t,r,n){var o,a,i,s=Tr(t),c=gd.test(t);return c||(t=fd(s)),i=v.cssHooks[t]||v.cssHooks[s],i&&"get"in i&&(o=i.get(e,!0,r)),o===void 0&&(o=Wo(e,t,n)),o==="normal"&&t in hd&&(o=hd[t]),r===""||r?(a=parseFloat(o),r===!0||isFinite(a)?a||0:o):o}});v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(r,n,o){if(n)return jx.test(v.css(r,"display"))&&(!r.getClientRects().length||!r.getBoundingClientRect().width)?qd(r,Qx,function(){return yd(r,t,o)}):yd(r,t,o)},set:function(r,n,o){var a,i=si(r),s=!Ue.scrollboxSize()&&i.position==="absolute",c=s||o,f=c&&v.css(r,"boxSizing",!1,i)==="border-box",h=o?Zl(r,t,o,f,i):0;return f&&s&&(h-=Math.ceil(r["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(i[t])-Zl(r,t,"border",!1,i)-.5)),h&&(a=ii.exec(n))&&(a[3]||"px")!=="px"&&(r.style[t]=n,n=v.css(r,t)),Id(r,n,h)}}});v.cssHooks.marginLeft=Ed(Ue.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Wo(e,"marginLeft"))||e.getBoundingClientRect().left-qd(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"});v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(r){for(var n=0,o={},a=typeof r=="string"?r.split(" "):[r];n<4;n++)o[e+zr[n]+t]=a[n]||a[n-2]||a[0];return o}},e!=="margin"&&(v.cssHooks[e+t].set=Id)});v.fn.extend({css:function(e,t){return Ko(this,function(r,n,o){var a,i,s={},c=0;if(Array.isArray(n)){for(a=si(r),i=n.length;c<i;c++)s[n[c]]=v.css(r,n[c],!1,a);return s}return o!==void 0?v.style(r,n,o):v.css(r,n)},e,t,arguments.length>1)}});(function(){var e=Ve.createElement("input"),t=Ve.createElement("select"),r=t.appendChild(Ve.createElement("option"));e.type="checkbox",Ue.checkOn=e.value!=="",Ue.optSelected=r.selected,e=Ve.createElement("input"),e.value="t",e.type="radio",Ue.radioValue=e.value==="t"})();Ue.focusin="onfocusin"in window;var bd=/^(?:focusinfocus|focusoutblur)$/,xd=function(e){e.stopPropagation()};v.extend(v.event,{trigger:function(e,t,r,n){var o,a,i,s,c,f,h,w,N=[r||Ve],I=ti.call(e,"type")?e.type:e,$=ti.call(e,"namespace")?e.namespace.split("."):[];if(a=w=i=r=r||Ve,!(r.nodeType===3||r.nodeType===8)&&!bd.test(I+v.event.triggered)&&(I.indexOf(".")>-1&&($=I.split("."),I=$.shift(),$.sort()),c=I.indexOf(":")<0&&"on"+I,e=e[v.expando]?e:new v.Event(I,typeof e=="object"&&e),e.isTrigger=n?2:3,e.namespace=$.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+$.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=t==null?[e]:v.makeArray(t,[e]),h=v.event.special[I]||{},!(!n&&h.trigger&&h.trigger.apply(r,t)===!1))){if(!n&&!h.noBubble&&!Xn(r)){for(s=h.delegateType||I,bd.test(s+I)||(a=a.parentNode);a;a=a.parentNode)N.push(a),i=a;i===(r.ownerDocument||Ve)&&N.push(i.defaultView||i.parentWindow||window)}for(o=0;(a=N[o++])&&!e.isPropagationStopped();)w=a,e.type=o>1?s:h.bindType||I,f=(Ie.get(a,"events")||Object.create(null))[e.type]&&Ie.get(a,"handle"),f&&f.apply(a,t),f=c&&a[c],f&&f.apply&&ri(a)&&(e.result=f.apply(a,t),e.result===!1&&e.preventDefault());return e.type=I,!n&&!e.isDefaultPrevented()&&(!h._default||h._default.apply(N.pop(),t)===!1)&&ri(r)&&c&&Mr(r[I])&&!Xn(r)&&(i=r[c],i&&(r[c]=null),v.event.triggered=I,e.isPropagationStopped()&&w.addEventListener(I,xd),r[I](),e.isPropagationStopped()&&w.removeEventListener(I,xd),v.event.triggered=void 0,i&&(r[c]=i)),e.result}},simulate:function(e,t,r){var n=v.extend(new v.Event,r,{type:e,isSimulated:!0});v.event.trigger(n,null,t)}});v.fn.extend({trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){var r=this[0];if(r)return v.event.trigger(e,t,r,!0)}});Ue.focusin||v.each({focus:"focusin",blur:"focusout"},function(e,t){var r=function(n){v.event.simulate(t,n.target,v.event.fix(n))};v.event.special[t]={setup:function(){var n=this.ownerDocument||this.document||this,o=Ie.access(n,t);o||n.addEventListener(e,r,!0),Ie.access(n,t,(o||0)+1)},teardown:function(){var n=this.ownerDocument||this.document||this,o=Ie.access(n,t)-1;o?Ie.access(n,t,o):(n.removeEventListener(e,r,!0),Ie.remove(n,t))}}});var Yx=/\[\]$/;function Jl(e,t,r,n){var o;if(Array.isArray(t))v.each(t,function(a,i){r||Yx.test(e)?n(e,i):Jl(e+"["+(typeof i=="object"&&i!=null?a:"")+"]",i,r,n)});else if(!r&&ai(t)==="object")for(o in t)Jl(e+"["+o+"]",t[o],r,n);else n(e,t)}v.param=function(e,t){var r,n=[],o=function(a,i){var s=Mr(i)?i():i;n[n.length]=encodeURIComponent(a)+"="+encodeURIComponent(s==null?"":s)};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){o(this.name,this.value)});else for(r in e)Jl(r,e[r],t,o);return n.join("&")};v.offset={setOffset:function(e,t,r){var n,o,a,i,s,c,f,h=v.css(e,"position"),w=v(e),N={};h==="static"&&(e.style.position="relative"),s=w.offset(),a=v.css(e,"top"),c=v.css(e,"left"),f=(h==="absolute"||h==="fixed")&&(a+c).indexOf("auto")>-1,f?(n=w.position(),i=n.top,o=n.left):(i=parseFloat(a)||0,o=parseFloat(c)||0),Mr(t)&&(t=t.call(e,r,v.extend({},s))),t.top!=null&&(N.top=t.top-s.top+i),t.left!=null&&(N.left=t.left-s.left+o),"using"in t?t.using.call(e,N):w.css(N)}};v.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(o){v.offset.setOffset(this,e,o)});var t,r,n=this[0];if(n)return n.getClientRects().length?(t=n.getBoundingClientRect(),r=n.ownerDocument.defaultView,{top:t.top+r.pageYOffset,left:t.left+r.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,r,n=this[0],o={top:0,left:0};if(v.css(n,"position")==="fixed")t=n.getBoundingClientRect();else{for(t=this.offset(),r=n.ownerDocument,e=n.offsetParent||r.documentElement;e&&(e===r.body||e===r.documentElement)&&v.css(e,"position")==="static";)e=e.parentNode;e&&e!==n&&e.nodeType===1&&(o=v(e).offset(),o.top+=v.css(e,"borderTopWidth",!0),o.left+=v.css(e,"borderLeftWidth",!0))}return{top:t.top-o.top-v.css(n,"marginTop",!0),left:t.left-o.left-v.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&v.css(e,"position")==="static";)e=e.offsetParent;return e||jn})}});v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var r=t==="pageYOffset";v.fn[e]=function(n){return Ko(this,function(o,a,i){var s;if(Xn(o)?s=o:o.nodeType===9&&(s=o.defaultView),i===void 0)return s?s[t]:o[a];s?s.scrollTo(r?s.pageXOffset:i,r?i:s.pageYOffset):o[a]=i},e,n,arguments.length)}});v.each(["top","left"],function(e,t){v.cssHooks[t]=Ed(Ue.pixelPosition,function(r,n){if(n)return n=Wo(r,t),ec.test(n)?v(r).position()[t]+"px":n})});v.each({Height:"height",Width:"width"},function(e,t){v.each({padding:"inner"+e,content:t,"":"outer"+e},function(r,n){v.fn[n]=function(o,a){var i=arguments.length&&(r||typeof o!="boolean"),s=r||(o===!0||a===!0?"margin":"border");return Ko(this,function(c,f,h){var w;return Xn(c)?n.indexOf("outer")===0?c["inner"+e]:c.document.documentElement["client"+e]:c.nodeType===9?(w=c.documentElement,Math.max(c.body["scroll"+e],w["scroll"+e],c.body["offset"+e],w["offset"+e],w["client"+e])):h===void 0?v.css(c,f,s):v.style(c,f,h,s)},t,i?o:void 0,i)}})});v.fn.extend({bind:function(e,t,r){return this.on(e,null,t,r)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,r,n){return this.on(t,e,r,n)},undelegate:function(e,t,r){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){v.fn[t]=function(r,n){return arguments.length>0?this.on(t,null,r,n):this.trigger(t)}});var Xx=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;v.isArray=Array.isArray;v.parseJSON=JSON.parse;v.nodeName=Kn;v.isFunction=Mr;v.isWindow=Xn;v.camelCase=Tr;v.type=ai;v.now=Date.now;v.isNumeric=function(e){var t=v.type(e);return(t==="number"||t==="string")&&!isNaN(e-parseFloat(e))};v.trim=function(e){return e==null?"":(e+"").replace(Xx,"")};var Zx=window.jQuery,Jx=window.$;v.noConflict=function(e){return window.$===v&&(window.$=Jx),e&&window.jQuery===v&&(window.jQuery=Zx),v};typeof noGlobal=="undefined"&&(window.jQuery=window.$=v);var Le=v;function Qo(e=void 0){let t=()=>e;return t.isDCGViewConst=!0,t}function xn(e){return typeof e=="function"&&!!e.isDCGViewConst}function Ad(e){let t=e();if(t!=null)return typeof t=="string"?t:Object.entries(t).filter(([,r])=>r!=null).map(([r,n])=>`${r}:${n}`).join(";")||void 0}function eT(e){let t=Ad(e);return xn(e)?{value:t}:{value:t,bindings:{onUpdate:r=>{let n=Ad(e);t!==n&&(Dd(r,"style",n),t=n)}}}}function Pd(e){let t=e();if(t!=null)return typeof t=="string"?t:Object.entries(t).filter(([,r])=>r).map(([r])=>r).join(" ")||void 0}var tT=/\s+/,rT=new Set;function Rd(e){let t=e==null?void 0:e.trim();return t?new Set(t.split(tT)):rT}function nT(e){let t=Pd(e);if(xn(e))return{value:t};let r=Rd(t);return{value:t,bindings:{onUpdate:n=>{let o=Pd(e);if(t===o)return;let a=Rd(o);for(let i of r)a.has(i)||n.classList.remove(i);for(let i of a)r.has(i)||n.classList.add(i);r=a,t=o}}}}function Sr(e){return t=>({bindings:{[e]:t}})}var tc={style:eT,class:nT,willMount:Sr("willMount"),onMount:Sr("onMount"),didMount:Sr("didMount"),willUnmount:Sr("willUnmount"),onUnmount:Sr("onUnmount"),didUnmount:Sr("didUnmount"),willUpdate:Sr("willUpdate"),onUpdate:Sr("onUpdate"),didUpdate:Sr("didUpdate")};function Zn(e,t){tc[e]=t}function oT(e){return tc.hasOwnProperty(e)}var aT=e=>e.startsWith("on")&&e[2]===e[2].toUpperCase();function iT(e,t){let r=e.toLowerCase(),n=r==="onfocusin"||r==="onfocusout"?r.slice(2):void 0,o;return{bindings:{onMount(a){o=(...i)=>{i[0]&&t.apply(a,i)},n?a.addEventListener(n,o):a[r]=o},willUnmount(a){n&&a.removeEventListener(n,o)}}}}function Dd(e,t,r){return r==null?e.removeAttribute(t):e.setAttribute(t,String(r))}function sT(e,t){let r=t();return xn(t)?{value:r}:{value:r,bindings:{onUpdate(n){let o=t();o!==r&&(r=o,Dd(n,e,o))}}}}function Ld(e,t){if(t==null)return{value:void 0};let r=typeof t=="function"?t:Qo(t);return oT(e)?tc[e](r):aT(e)?iT(e,r):sT(e,r)}var rc=()=>{};rc();function Od(e,t,r){let n=e._bindings[t];e._bindings[t]=n?[...n,r]:[r]}function Jt(e,t){var n;((n=e._bindings[t])!=null?n:[]).forEach(o=>o())}var Jn=class{findAllRootDOMNodes(){let t=this.findFirstRootDOMNode(),r=this.findLastRootDOMNode(),n=[],o=t;for(;o&&(n.push(o),o!==r);)o=o.nextSibling;return n}},li=class extends Jn{constructor(t,r){super(),this.tagName=t,this.props=r}findFirstRootDOMNode(){return this._node}findLastRootDOMNode(){return this._node}renderTo(t,r){let n=document.createElement(this.tagName);if(this._node=n,r.bindAttributesTo(n,this.props),t.appendChild(n),"children"in this.props){let o=Array.isArray(this.props.children)?this.props.children:[this.props.children];_d(o,r,n,this)}}},ci=class extends Jn{constructor(t=[]){super(),this.children=t,t.length?this._nodes=[document.createTextNode(""),document.createTextNode("")]:this._nodes=[document.createTextNode("")]}findFirstRootDOMNode(){return this._nodes[0]}findLastRootDOMNode(){return this._nodes.length===2?this._nodes[1]:this._nodes[0]}renderTo(t,r){t.appendChild(this._nodes[0]),_d(this.children,r,t,this),this._nodes.length===2&&t.appendChild(this._nodes[1])}};function _d(e,t,r,n){e.forEach(o=>{if(Yo(o)){let a=Cr(o);a.renderTo(r,t),a._parentElement=n;return}if(xn(o)){r.appendChild(document.createTextNode(String(o())));return}if(typeof o=="function"){t.bindText(r,()=>{let a=o();return a==null?"":typeof a=="string"?a:String(a)});return}r.appendChild(document.createTextNode(String(o)))})}var nc=Symbol(),Fd=(e,t)=>{e!=null&&(Array.isArray(e)?e.forEach(r=>Fd(r,t)):t.push(e))};function Yo(e){return!!(e!=null&&e.isDCGElementSpec)}function Cr(e){switch(e.type){case"fragment":return new ci(e.children);case"element":return new li(e.tagName,e.props);case"view":let t=new e.viewClass(e.props)._construct();return e.viewName&&(t._viewName=e.viewName),t;default:}throw new Error("could not init DCGElementSpec.")}function Ot(e,t={}){let r=[];if("children"in t&&(Array.isArray(t.children)?t.children:[t.children]).forEach(o=>Fd(o,r)),e===nc)return{isDCGElementSpec:!0,type:"fragment",children:r};if(typeof e=="string")return{isDCGElementSpec:!0,type:"element",tagName:e,props:{...t,children:r}};if(e.IS_DCGVIEW){let n;return r.length===1?n=r[0]:r.length>1&&(n=r),{isDCGElementSpec:!0,type:"view",viewClass:e,props:{...t,children:n}}}throw new Error(`Expected type to be a Fragment symbol, string, or View class, but got ${e}.`)}var ui=e=>e instanceof ze;rc();var ze=class extends Jn{constructor(r){var n,o;super();this._childViews=[];this._bindings={};this._isMounted=!1;this.const=Qo;this.props=r,this._viewName=(o=(n=this.constructor)==null?void 0:n.name)!=null?o:"Anonymous DCGView"}template(){throw new Error("template() must be implemented")}_construct(){var r;return(r=this.init)==null||r.call(this),this._elementSpec=this.template(),this}bindFn(r){return r.bind(this)}bindIfMounted(r){return this.bindFn((...n)=>{if(this._isMounted)return r.apply(this,n)})}traceViewHierarchy(){let r=[],n=this._parentElement;for(;n;)r.unshift(n),n=n._parentElement;let o=i=>ui(i)&&!(i._viewName==="Switch"&&ui(i._parentElement)&&i._parentElement._viewName==="If")&&!["ForWrapper","SwitchWrapper"].includes(i._viewName),a=[...r,this].filter(o).map((i,s)=>"  ".repeat(s)+"<"+i._viewName+">").join(`
`);return{ancestors:r,formatted:a}}renderTo(r,n){n&&n._childViews.push(this),this._element=Cr(this._elementSpec),this._element._parentElement=this,this._element.renderTo(r,this)}findFirstRootDOMNode(){return this._element.findFirstRootDOMNode()}findLastRootDOMNode(){return this._element.findLastRootDOMNode()}update(){var r,n,o;if(!this._isMounted)return oc("Trying to update view that is not mounted. Ignoring update.",this);this.shouldUpdate&&!this.shouldUpdate()||((r=this.willUpdate)==null||r.call(this),Jt(this,"willUpdate"),Jt(this,"onUpdate"),(n=this.onUpdate)==null||n.call(this),this.updateChildren(),Jt(this,"didUpdate"),(o=this.didUpdate)==null||o.call(this))}updateChildren(){this._childViews.forEach(r=>r.update())}bindText(r,n){let o=n(),a=document.createTextNode(o);r.appendChild(a),Od(this,"onUpdate",()=>{let i=n();o!==i&&(a.nodeValue=i,o=i)})}addAttributeBindingsTo(r,n){Object.entries(n).forEach(([o,a])=>{if(!a)return;if(["onMount","didMount","willUnmount","willUpdate","onUpdate","didUpdate"].includes(o)&&(a=a.bind(null,r)),["willMount","onMount","didMount","willUnmount","onUnmount","didUnmount"].includes(o)){let f=!1,h=a;a=(...w)=>{if(f){oc(`${o} is a one-time binding but was called multiple times`,this);return}f=!0,h(...w)}}let c=this._bindings[o];this._bindings[o]=c?[...c,a]:[a]})}bindAttributesTo(r,n){Object.keys(n).filter(o=>o!=="children").forEach(o=>{let a=Ld(o,n[o]);"value"in a&&a.value!==void 0&&r.setAttribute(o,String(a.value)),a.bindings&&this.addAttributeBindingsTo(r,a.bindings)})}};ze.IS_DCGVIEW=!0;var Bd=[];function ac(e){Bd.push(e)}function oc(e,t){if(ui(t)){let n=`[${t._viewName}]`,o=t.traceViewHierarchy(),a=o.ancestors.length>0?`
View Hierarchy:
${o.formatted}`:"";e=`${e} ${n}${a}`}let r=new Error(e);console.warn(r),Bd.forEach(n=>n(r))}var Gd=e=>{let t=e.length,r=new Array(t),n=new Array(t+1),o=0,a;for(let c=0;c<t;c++){if(e[n[o]]<e[c])a=o+1;else{let f=1,h=o-1;for(;f<=h;){let w=Math.ceil((f+h)/2);e[n[w]]<e[c]?f=w+1:h=w-1}a=f}r[c]=n[a-1],n[a]=c,a>o&&(o=a)}let i=new Array(o),s=n[o];for(let c=o-1;c>=0;c--)i[c]=e[s],s=r[s];return i};function $d(e,t){let r=new Map(t.map((c,f)=>[c,f])),n=e.filter(c=>!r.has(c)),o=e.filter(c=>r.has(c)).map(c=>r.get(c)),a=Gd(o),i=new Set(a.map(c=>t[c])),s=t.reduceRight((c,f,h)=>{if(!i.has(f)){let w=h+1;c.push({key:f,...w in t?{beforeKey:t[w]}:{}})}return c},[]);return{removes:n,inserts:s}}function ic(e,t,r){if(!t||t.nodeType!==1)throw new Error("Must pass an HTMLElement for the node");if(t._mountedDCGView)throw new Error("This node is already mounted by a view");let n=new e(r)._construct(),o=document.createDocumentFragment();return n.renderTo(o),t.innerHTML="",eo(n),t._mountedDCGView=n,t.appendChild(o),to(n),ro(n),n}function eo(e){e.willMount&&e.willMount(),Jt(e,"willMount"),e._childViews.forEach(eo)}function to(e){e._isMounted=!0,e.onMount&&e.onMount(),Jt(e,"onMount"),e._childViews.forEach(to)}function ro(e){e.didMount&&e.didMount(),Jt(e,"didMount"),e._childViews.forEach(ro)}function Xo(e){e.willUnmount&&e.willUnmount(),Jt(e,"willUnmount"),e._childViews.forEach(Xo)}function Zo(e){e._isMounted=!1,e._childViews.forEach(Zo),Jt(e,"onUnmount"),e.onUnmount&&e.onUnmount()}function Jo(e){e._childViews.forEach(Jo),Jt(e,"didUnmount"),e.didUnmount&&e.didUnmount()}function pi(e,t){let r=document.createDocumentFragment();return e.renderTo(r,t),r}function He(e,t,...r){return Ot(e,!("key"in t)&&r.length>=1?{...t,key:r[0]}:t)}function sc(e,t,...r){return He(e,t,...r)}var di=nc;var lc=class extends ze{constructor(){super(...arguments);this._viewName="For.Simple"}template(){let{children:r}=this.props;return He(Tn,{each:this.props.each,children:(n,o)=>r(n(),o)},n=>n)}},cc=class extends ze{constructor(){super(...arguments);this._viewName="For.Count"}makeStepsArray(){let r=this.props.from?this.props.from():0,n=Math.floor(this.props.count());return!isFinite(r)||!isFinite(n)?[]:Array.from({length:n},(o,a)=>r+a)}template(){return He(Tn,{each:()=>this.makeStepsArray(),children:r=>this.props.children(r())},r=>r)}},uc=class extends ze{constructor(){super(...arguments);this._viewName="ForWrapper"}template(){return this.props.children}},Tn=class extends ze{constructor(){super(...arguments);this._viewName="For";this._keyToData=new Map;this._keyToView=new Map}getKeys(){this._keyToData.clear();let r=this.props.each(),n=r.map((o,a)=>this.props.key(o,a,r));return n.forEach((o,a)=>{if(this._keyToData.has(o))throw new Error(`The key: ${JSON.stringify(o)} is not unique`);this._keyToData.set(o,{item:r[a],index:a})}),n}createViewForKey(r){let n=this._keyToData.get(r),o=this._viewFunction.call(this,()=>(this._keyToData.has(r)&&(n=this._keyToData.get(r)),n.item),()=>(this._keyToData.has(r)&&(n=this._keyToData.get(r)),n.index));if(Yo(o)&&o.type==="view"){let i=Cr(o);return this._keyToView.set(r,i),i}let a=Cr(Ot(uc,{children:o}));return this._keyToView.set(r,a),a}detachAllRemovedViews(r){let n=this._childViews,o=0;for(let a=0;a<n.length;a++){let i=n[a];r.has(i)?o++:n[a-o]=i}n.splice(n.length-o,o)}updateChildren(){let r=this._keys,n=this.getKeys();this._keys=n;let o=$d(r,n),a=new Set;for(let s=o.removes.length-1;s>=0;s--){let c=o.removes[s],f=this._keyToView.get(c);Xo(f),this._keyToView.delete(c),f.findAllRootDOMNodes().forEach(h=>h.remove()),a.add(f)}a.size>0&&(this.detachAllRemovedViews(a),a.forEach(Zo),a.forEach(Jo));let i=[];for(let s=o.inserts.length-1;s>=0;s--){let c=o.inserts[s].key;if(this._keyToView.has(c))continue;let f=this.createViewForKey(c);pi(f,this),i.push(f)}i.forEach(eo),o.inserts.forEach(s=>{let c=this._keyToView.get(s.key).findAllRootDOMNodes(),f;"beforeKey"in s?f=this._keyToView.get(s.beforeKey).findFirstRootDOMNode():f=this.findLastRootDOMNode(),c.forEach(h=>{f.before(h)})}),i.forEach(to),i.forEach(ro);for(let s=0;s<this._childViews.length-i.length;s++)this._childViews[s].update()}renderTo(r,n){var i;super.renderTo(r,n);for(let s of this._keys)this._keyToView.get(s).renderTo(r,this);let o=document.createTextNode("");r.appendChild(o),(i=this._element._nodes[1])==null||i.remove(),this._element._nodes=[this._element._nodes[0],o]}template(){let{children:r}=this.props;return this._viewFunction=r,this._keys=this.getKeys(),this._keys.map(n=>{let o=this.createViewForKey(n);return o._parentElement=this,o}),He(di,{})}};Tn.Simple=lc,Tn.Count=cc;var pc=class extends ze{constructor(){super(...arguments);this._viewName="SwitchWrapper"}template(){return this.props.children}},kr=class extends ze{constructor(){super(...arguments);this._viewName="Switch"}updateKey(){this._key=this.props.key()}createViewSpec(){var n;let r=(n=this._viewFunction(this._key))!=null?n:He(di,{});return Ot(pc,{children:r})}createView(){let r=this.createViewSpec(),n=Cr(r);return n._parentElement=this,n}template(){let{children:r}=this.props;return this._viewFunction=r,this.updateKey(),this.createViewSpec()}updateChildren(){let r=this._key;this.updateKey();let n=this._key;if(r===n){this._element.update();return}let o=this.findAllRootDOMNodes(),a=document.createTextNode("");o[0].before(a),Xo(this._element),this._childViews=[],o.forEach(s=>s.remove()),Zo(this._element),Jo(this._element),this._element=this.createView();let i=pi(this._element,this);eo(this._element),a.before(i),a.remove(),to(this._element),ro(this._element)}};function ea(e,t,r){return{...Ot(kr,{key:()=>{let o=e();return o!=null},children:o=>o?t(e):r==null?void 0:r()}),viewName:"IfDefined"}}function dc(e,t,r){let n=typeof r=="undefined",o,a;return n?(o=e,a=i=>{var c;let s=t;return(c=s[i])==null?void 0:c.call(s,()=>i)}):(o=()=>{let i=e();return i&&i[t]},a=i=>{var c;let s=r;return(c=s[i])==null?void 0:c.call(s,e)}),{...Ot(kr,{key:o,children:a}),viewName:"SwitchUnion"}}function mc(e,t){return{...dc(()=>e()?"true":"false",t),viewName:"IfElse"}}ac(e=>ad(e));var Vd=e=>{let t=e();if(t!=null)return cd(String(t))};Zn("href",e=>{let t=Vd(e);return{value:t,bindings:{onUpdate(r){let n=Vd(e);if(t!==n){if(t=n,n===void 0){r.removeAttribute("href");return}r.setAttribute("href",n)}}}}});var ta=(e,t,r)=>Zn(e,n=>({value:r,bindings:{onMount(o){Le(o).on(t,n)}}}));ta("onTap","dcg-tap","");ta("onTapStart","dcg-tapstart");ta("onTapMove","dcg-tapmove");ta("onTapEnd","dcg-tapend");ta("onLongHold","dcg-longhold");Zn("ignoreRealClick",e=>({bindings:{onMount(t){Le(t).on("click",r=>{!(r.altKey||r.shiftKey||r.metaKey||r.ctrlKey)&&e()&&r.preventDefault()})}}}));Zn("manageFocus",e=>({bindings:{onMount(t){let r=e();r!=null&&r.shouldBeFocused()&&!Wl()&&t.focus(),t.onfocus=function(n){let o=e();o!=null&&o.shouldBeFocused()||o==null||o.onFocusedChanged(!0,n)},t.onblur=function(n){let o=e();!(o!=null&&o.shouldBeFocused())||n.target===document.activeElement||o.onFocusedChanged(!1,n)}},onUpdate(t){let r=e();if(r===void 0)return;let n=!!(r!=null&&r.shouldBeFocused()),o=document.activeElement===t;n&&!o?Wl()||t.focus():o&&!n&&t.blur()},willUnmount(t){var r;document.activeElement===t&&((r=e())==null||r.onFocusedChanged(!1)),t.onfocus=null,t.onblur=null}}}));function mi(e){let t=[];for(let r of e){if(!r||typeof r!="string")continue;let n=r.split("-")[0];t.push(r),t.push(n);for(let o in ra){let a=ra[o];o.split("-")[0]===n&&a.useAsRoot&&t.push(o)}}return t}var cT="https://docs.google.com/document/d/1gV-WgDjgR9hKKb32ffeUpjwggNAgfqxl0Gsg6xocbok/preview",ra={en:{displayName:"English (US)",userGuideURL:cT,useAsRoot:!1},es:{displayName:"Espa\xF1ol (LATAM)",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_ES-ES.pdf",useAsRoot:!0},et:{displayName:"Eesti",useAsRoot:!1},ru:{displayName:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_RU.pdf",useAsRoot:!1},da:{displayName:"Dansk",useAsRoot:!1},de:{displayName:"Deutsch",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_DE.pdf",useAsRoot:!1},"pt-BR":{displayName:"Portugu\xEAs (Brasil)",useAsRoot:!0},"pt-PT":{displayName:"Portugu\xEAs (Portugal)",useAsRoot:!1},ca:{displayName:"Catal\xE0",useAsRoot:!1},fr:{displayName:"Fran\xE7ais",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_FR.pdf",useAsRoot:!0},"fr-CA":{displayName:"Fran\xE7ais (Canada)",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_FR.pdf",useAsRoot:!0},it:{displayName:"Italiano",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_IT.pdf",useAsRoot:!1},is:{displayName:"\xCDslenska",useAsRoot:!1},nl:{displayName:"Nederlands",useAsRoot:!1},no:{displayName:"Norsk",useAsRoot:!1},"sv-SE":{displayName:"Svenska",useAsRoot:!0},hu:{displayName:"Magyar",useAsRoot:!1},cs:{displayName:"\u010Ce\u0161tina",useAsRoot:!1},pl:{displayName:"Polski",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_PL.pdf",useAsRoot:!1},id:{displayName:"Bahasa Indonesia",useAsRoot:!1},vi:{displayName:"Ti\u1EBFng Vi\u1EC7t",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_VI.pdf",useAsRoot:!1},el:{displayName:"\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_EL.pdf",useAsRoot:!1},uk:{displayName:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",useAsRoot:!1},ka:{displayName:"\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8",useAsRoot:!1},th:{displayName:"\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",useAsRoot:!1},tr:{displayName:"T\xFCrk\xE7e",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_TR.pdf",useAsRoot:!1},"zh-CN":{displayName:"\u7B80\u4F53\u4E2D\u6587",useAsRoot:!0,userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_ZH-CN.pdf"},"zh-TW":{displayName:"\u7E41\u9AD4\u4E2D\u6587",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_ZH-TW.pdf",useAsRoot:!1},ko:{displayName:"\uD55C\uAD6D\uC5B4",useAsRoot:!1},ja:{displayName:"\u65E5\u672C\u8A9E",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_JA.pdf",useAsRoot:!1}};var uT=["3d","actions","advancedStyling","audioTraceKeypad","authorFeatures","autoplay","beta3d","clickableObjects","collaborate","complex","crossOriginSaveTest","debugProgressUpdates","decimalToFraction","debug","defaultLogModeRegressions","degreeMode","reflectionArc","disableMouseInteractions","disableWebGL2Support","disableWorkerOnZoom","editOnWeb","expressionsCollapsed","keypadActivated","fastAutoSave","fastAutoSaveForTests","forceEnableGeometryFunctions","forceLogModeRegressions","forceMobile","forceTouchDevice","hidden","invertedColors","jim","lockViewport","logAria","logInternalErrors","showIDs","maintenance","nativeOnscreenKeypad","outofdom","pauseWhenOffscreen","projectorMode","reflectionArc","reloadcss","replaceCommaWith10Exp","replaceRoundWithReciprocal","restrictedEditing","restrictedFunctions","showIDs","showNavigationWarning","showPerformanceMeter","debugCompiler","showQuestsList","showResetButtonOnGraphpaper","simulationFPS","singleExpression","testing","timeInWorker","translucentSurfaces","transparentBackground","typingAsteriskWritesTimesSymbol","ueb","upcomingMaintenance","wireframe","raycastHeatmap","raycastDisableIntervals","showEvaluationCopyButtons","reportPositionNone"],pT=["adaptivePeeling","actions","allowComplex","audio","brailleControls","branding","calculus","concat","customRegressions","decimalToFraction","degreeMode","distributions","expressions","expressionsTopbar","folders","functionDefinition","graphpaper","images","intervalComprehensions","invertedColorsControl","keypad","links","logScales","notes","plotImplicits","plotInequalities","plotSingleVariableImplicitEquations","pointsOfInterest","qwertyKeyboard","recursion","settingsMenu","sliders","substitutions","regressionTemplates","tone","trace","zoomButtons","zoomFit"],dT=["debugPeelLayers","nworkers","peelUpsample","recursionDepth","workerThrottle"],mT=["timeoutLoop","translucentOpacity"];var fT=e=>Kl(e)||e==="localhost",Ud=e=>{let{search:t,hostname:r}=typeof location!="undefined"?location:typeof window!="undefined"?window.location:new Location;return fT(r)?new URLSearchParams(e!=null?e:t):new URLSearchParams(new URLSearchParams(t).has("lang")?{lang:new URLSearchParams(t).get("lang")}:{} )},zd=e=>{let t=Ud(e),r=new Map;for(let[n,o]of t)r.set(n,o!=null?o:"");return r};function qt(e,t=Ud()){let r=t.get(e);if(uT.includes(e)||e.startsWith("no")&&pT.includes(e.slice(2)))return t.has(e)&&r!=="false";if(r!=null){if(dT.includes(e)){let n=parseInt(r,10);return isNaN(n)?void 0:n}if(mT.includes(e)){let n=parseFloat(r);return isNaN(n)?void 0:n}return r}}var gT={pendingRequests:0,completedRequests:0};window.dcgTestOnlyFetchMonitor=gT;function hT(){let e=qt("dcgTestOnlyOnBeforeNetworkRequests");if(e)try{let t=window.top;for(;t!=null&&t.opener;)t=t.opener.top;t&&t.dcgOnBeforeNetworkRequests(e)}catch(t){}}hT();var cr=class{constructor(t){this.value=t}valueOf(){return this.value}},ke=class extends cr{constructor(t="???"){super(t)}toString(t){return`{${this.value}}`}},wt=class extends cr{constructor(t,r={}){super(t),this.opts=r}toString(t){if(t)try{return t.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(r){t.reportError(r)}return this.value.toString(10)}},ur=class e extends cr{static supportsValue(t){if(typeof t=="number"||t instanceof Date)return!0;if(t instanceof cr)return e.supportsValue(t.valueOf());if("Temporal"in globalThis){let r=globalThis.Temporal;if(t instanceof r.Instant||t instanceof r.PlainDateTime||t instanceof r.PlainDate||t instanceof r.PlainMonthDay||t instanceof r.PlainTime||t instanceof r.PlainYearMonth)return!0}return!1}constructor(t,r={}){t instanceof e?(r={...t.opts,...r},t=t.value):t instanceof cr&&(t=t.valueOf()),typeof t=="object"&&"calendarId"in t&&r.calendar===void 0&&(r={...r,calendar:t.calendarId}),super(t),this.opts=r}[Symbol.toPrimitive](t){return t==="string"?this.toString():this.toNumber()}toNumber(){let t=this.value;if(typeof t=="number")return t;if(t instanceof Date)return t.getTime();if("epochMilliseconds"in t)return t.epochMilliseconds;if("toZonedDateTime"in t)return t.toZonedDateTime("UTC").epochMilliseconds;throw new TypeError("Unwrapping a non-number value as a number")}toString(t){if(t)try{return t.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(r){t.reportError(r)}return typeof this.value=="number"||this.value instanceof Date?new Date(this.value).toISOString():this.value.toString()}};var Wd=100,yT="\u2068",bT="\u2069";function xT(e,t,r){if(r===t||r instanceof wt&&t instanceof wt&&r.value===t.value)return!0;if(t instanceof wt&&typeof r=="string"){let n=e.memoizeIntlObject(Intl.PluralRules,t.opts).select(t.value);if(r===n)return!0}return!1}function Kd(e,t,r){return t[r]?no(e,t[r].value):(e.reportError(new RangeError("No default")),new ke)}function gc(e,t){let r=[],n=Object.create(null);for(let o of t)o.type==="narg"?n[o.name]=na(e,o.value):r.push(na(e,o));return{positional:r,named:n}}function na(e,t){switch(t.type){case"str":return t.value;case"num":return new wt(t.value,{minimumFractionDigits:t.precision});case"var":return TT(e,t);case"mesg":return wT(e,t);case"term":return vT(e,t);case"func":return MT(e,t);case"select":return ST(e,t);default:return new ke}}function TT(e,{name:t}){let r;if(e.params)if(Object.prototype.hasOwnProperty.call(e.params,t))r=e.params[t];else return new ke(`$${t}`);else if(e.args&&Object.prototype.hasOwnProperty.call(e.args,t))r=e.args[t];else return e.reportError(new ReferenceError(`Unknown variable: $${t}`)),new ke(`$${t}`);if(r instanceof cr)return r;switch(typeof r){case"string":return r;case"number":return new wt(r);case"object":if(ur.supportsValue(r))return new ur(r);default:return e.reportError(new TypeError(`Variable type not supported: $${t}, ${typeof r}`)),new ke(`$${t}`)}}function wT(e,{name:t,attr:r}){let n=e.bundle._messages.get(t);if(!n)return e.reportError(new ReferenceError(`Unknown message: ${t}`)),new ke(t);if(r){let o=n.attributes[r];return o?no(e,o):(e.reportError(new ReferenceError(`Unknown attribute: ${r}`)),new ke(`${t}.${r}`))}return n.value?no(e,n.value):(e.reportError(new ReferenceError(`No value: ${t}`)),new ke(t))}function vT(e,{name:t,attr:r,args:n}){let o=`-${t}`,a=e.bundle._terms.get(o);if(!a)return e.reportError(new ReferenceError(`Unknown term: ${o}`)),new ke(o);if(r){let s=a.attributes[r];if(s){e.params=gc(e,n).named;let c=no(e,s);return e.params=null,c}return e.reportError(new ReferenceError(`Unknown attribute: ${r}`)),new ke(`${o}.${r}`)}e.params=gc(e,n).named;let i=no(e,a.value);return e.params=null,i}function MT(e,{name:t,args:r}){let n=e.bundle._functions[t];if(!n)return e.reportError(new ReferenceError(`Unknown function: ${t}()`)),new ke(`${t}()`);if(typeof n!="function")return e.reportError(new TypeError(`Function ${t}() is not callable`)),new ke(`${t}()`);try{let o=gc(e,r);return n(o.positional,o.named)}catch(o){return e.reportError(o),new ke(`${t}()`)}}function ST(e,{selector:t,variants:r,star:n}){let o=na(e,t);if(o instanceof ke)return Kd(e,r,n);for(let a of r){let i=na(e,a.key);if(xT(e,o,i))return no(e,a.value)}return Kd(e,r,n)}function hc(e,t){if(e.dirty.has(t))return e.reportError(new RangeError("Cyclic reference")),new ke;e.dirty.add(t);let r=[],n=e.bundle._useIsolating&&t.length>1;for(let o of t){if(typeof o=="string"){r.push(e.bundle._transform(o));continue}if(e.placeables++,e.placeables>Wd)throw e.dirty.delete(t),new RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${Wd}`);n&&r.push(yT),r.push(na(e,o).toString(e)),n&&r.push(bT)}return e.dirty.delete(t),r.join("")}function no(e,t){return typeof t=="string"?e.bundle._transform(t):hc(e,t)}var fi=class{constructor(t,r,n){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=t,this.errors=r,this.args=n}reportError(t){if(!this.errors||!(t instanceof Error))throw t;this.errors.push(t)}memoizeIntlObject(t,r){let n=this.bundle._intls.get(t);n||(n={},this.bundle._intls.set(t,n));let o=JSON.stringify(r);return n[o]||(n[o]=new t(this.bundle.locales,r)),n[o]}};function yc(e,t){let r=Object.create(null);for(let[n,o]of Object.entries(e))t.includes(n)&&(r[n]=o.valueOf());return r}var jd=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function Qd(e,t){let r=e[0];if(r instanceof ke)return new ke(`NUMBER(${r.valueOf()})`);if(r instanceof wt)return new wt(r.valueOf(),{...r.opts,...yc(t,jd)});if(r instanceof ur)return new wt(r.toNumber(),{...yc(t,jd)});throw new TypeError("Invalid argument to NUMBER")}var CT=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function Yd(e,t){let r=e[0];if(r instanceof ke)return new ke(`DATETIME(${r.valueOf()})`);if(r instanceof ur||r instanceof wt)return new ur(r,yc(t,CT));throw new TypeError("Invalid argument to DATETIME")}var Xd=new Map;function Zd(e){let t=Array.isArray(e)?e.join(" "):e,r=Xd.get(t);return r===void 0&&(r=new Map,Xd.set(t,r)),r}var oa=class{constructor(t,{functions:r,useIsolating:n=!0,transform:o=a=>a}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(t)?t:[t],this._functions={NUMBER:Qd,DATETIME:Yd,...r},this._useIsolating=n,this._transform=o,this._intls=Zd(t)}hasMessage(t){return this._messages.has(t)}getMessage(t){return this._messages.get(t)}addResource(t,{allowOverrides:r=!1}={}){let n=[];for(let o=0;o<t.body.length;o++){let a=t.body[o];if(a.id.startsWith("-")){if(r===!1&&this._terms.has(a.id)){n.push(new Error(`Attempt to override an existing term: "${a.id}"`));continue}this._terms.set(a.id,a)}else{if(r===!1&&this._messages.has(a.id)){n.push(new Error(`Attempt to override an existing message: "${a.id}"`));continue}this._messages.set(a.id,a)}}return n}formatPattern(t,r=null,n=null){if(typeof t=="string")return this._transform(t);let o=new fi(this,n,r);try{return hc(o,t).toString(o)}catch(a){if(o.errors&&a instanceof Error)return o.errors.push(a),new ke().toString(o);throw a}}};var bc=/^(-?[a-zA-Z][\w-]*) *= */gm,Jd=/\.([a-zA-Z][\w-]*) *= */y,kT=/\*?\[/y,xc=/(-?[0-9]+(?:\.([0-9]+))?)/y,qT=/([a-zA-Z][\w-]*)/y,em=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,ET=/^[A-Z][A-Z0-9_-]*$/,gi=/([^{}\n\r]+)/y,NT=/([^\\"\n\r]*)/y,tm=/\\([\\"])/y,rm=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,IT=/^\n+/,nm=/ +$/,AT=/ *\r?\n/g,PT=/( *)$/,RT=/{\s*/y,om=/\s*}/y,DT=/\[\s*/y,LT=/\s*] */y,OT=/\s*\(\s*/y,_T=/\s*->\s*/y,FT=/\s*:\s*/y,BT=/\s*,?\s*/y,GT=/\s+/y,oo=class{constructor(t){this.body=[],bc.lastIndex=0;let r=0;for(;;){let x=bc.exec(t);if(x===null)break;r=bc.lastIndex;try{this.body.push(c(x[1]))}catch(z){if(z instanceof SyntaxError)continue;throw z}}function n(x){return x.lastIndex=r,x.test(t)}function o(x,z){if(t[r]===x)return r++,!0;if(z)throw new z(`Expected ${x}`);return!1}function a(x,z){if(n(x))return r=x.lastIndex,!0;if(z)throw new z(`Expected ${x.toString()}`);return!1}function i(x){x.lastIndex=r;let z=x.exec(t);if(z===null)throw new SyntaxError(`Expected ${x.toString()}`);return r=x.lastIndex,z}function s(x){return i(x)[1]}function c(x){let z=h(),fe=f();if(z===null&&Object.keys(fe).length===0)throw new SyntaxError("Expected message value or attributes");return{id:x,value:z,attributes:fe}}function f(){let x=Object.create(null);for(;n(Jd);){let z=s(Jd),fe=h();if(fe===null)throw new SyntaxError("Expected attribute value");x[z]=fe}return x}function h(){let x;if(n(gi)&&(x=s(gi)),t[r]==="{"||t[r]==="}")return w(x?[x]:[],1/0);let z=q();return z?x?w([x,z],z.length):(z.value=D(z.value,IT),w([z],z.length)):x?D(x,nm):null}function w(x=[],z){for(;;){if(n(gi)){x.push(s(gi));continue}if(t[r]==="{"){x.push(N());continue}if(t[r]==="}")throw new SyntaxError("Unbalanced closing brace");let Lt=q();if(Lt){x.push(Lt),z=Math.min(z,Lt.length);continue}break}let fe=x.length-1,Dt=x[fe];typeof Dt=="string"&&(x[fe]=D(Dt,nm));let fn=[];for(let Lt of x)Lt instanceof hi&&(Lt=Lt.value.slice(0,Lt.value.length-z)),Lt&&fn.push(Lt);return fn}function N(){a(RT,SyntaxError);let x=I();if(a(om))return x;if(a(_T)){let z=M();return a(om,SyntaxError),{type:"select",selector:x,...z}}throw new SyntaxError("Unclosed placeable")}function I(){if(t[r]==="{")return N();if(n(em)){let[,x,z,fe=null]=i(em);if(x==="$")return{type:"var",name:z};if(a(OT)){let Dt=$();if(x==="-")return{type:"term",name:z,attr:fe,args:Dt};if(ET.test(z))return{type:"func",name:z,args:Dt};throw new SyntaxError("Function names must be all upper-case")}return x==="-"?{type:"term",name:z,attr:fe,args:[]}:{type:"mesg",name:z,attr:fe}}return _()}function $(){let x=[];for(;;){switch(t[r]){case")":return r++,x;case void 0:throw new SyntaxError("Unclosed argument list")}x.push(C()),a(BT)}}function C(){let x=I();return x.type!=="mesg"?x:a(FT)?{type:"narg",name:x.name,value:_()}:x}function M(){let x=[],z=0,fe;for(;n(kT);){o("*")&&(fe=z);let Dt=S(),fn=h();if(fn===null)throw new SyntaxError("Expected variant value");x[z++]={key:Dt,value:fn}}if(z===0)return null;if(fe===void 0)throw new SyntaxError("Expected default variant");return{variants:x,star:fe}}function S(){a(DT,SyntaxError);let x;return n(xc)?x=B():x={type:"str",value:s(qT)},a(LT,SyntaxError),x}function _(){if(n(xc))return B();if(t[r]==='"')return W();throw new SyntaxError("Invalid expression")}function B(){let[,x,z=""]=i(xc),fe=z.length;return{type:"num",value:parseFloat(x),precision:fe}}function W(){o('"',SyntaxError);let x="";for(;;){if(x+=s(NT),t[r]==="\\"){x+=me();continue}if(o('"'))return{type:"str",value:x};throw new SyntaxError("Unclosed string literal")}}function me(){if(n(tm))return s(tm);if(n(rm)){let[,x,z]=i(rm),fe=parseInt(x||z,16);return fe<=55295||57344<=fe?String.fromCodePoint(fe):"\uFFFD"}throw new SyntaxError("Unknown escape sequence")}function q(){let x=r;switch(a(GT),t[r]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return P(t.slice(x,r))}return t[r-1]===" "?P(t.slice(x,r)):!1}function D(x,z){return x.replace(z,"")}function P(x){let z=x.replace(AT,`
`),fe=PT.exec(x)[1].length;return new hi(z,fe)}}},hi=class{constructor(t,r){this.value=t,this.length=r}};function yi(e){return{__isLocalizableNumericValue:!0,value:e}}function Tc(e){return e&&e.__isLocalizableNumericValue}var VT=["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"],bi=class e{constructor(t,r){this.bundles=t,this.onError=r}static fromSources(t,r,n){let o=[];for(let{lang:a,source:i}of t){let s=a.split("-")[0],c=new oa(a,{...n,useIsolating:VT.indexOf(s)>=0});c.addResource(new oo(i),{allowOverrides:!1}),c.addResource(new oo(`
l10n-internal-date-day-month-year = {DATETIME($d, month: "short", day: "numeric", year: "numeric")}
l10n-internal-date-day-month = {DATETIME($d, month: "short", day: "numeric")}
l10n-internal-time = {DATETIME($d, minute: "numeric", hour: "numeric")}
      `),{allowOverrides:!1}),o.push(c)}return new e(o,r)}format(t,r){for(let n of this.bundles){if(!n.hasMessage(t))continue;let o=n.getMessage(t);if(!(o!=null&&o.value))return;let a=[],i=n.formatPattern(o.value,this.coerceNumericVariables(r),a);for(let s of a)this.onError(`Error formatting ${t} for locale ${n.locales.join(",")}: ${s}`);return i}this.onError(`Couldn't find message for key ${t} for locales ${this.getLocales().join(",")}`)}formatDate(t,r){return r.showYear?this.format("l10n-internal-date-day-month-year",{d:t}):this.format("l10n-internal-date-day-month",{d:t})}formatTime(t){let r=this.format("l10n-internal-time",{d:t});return this.getLocales()[0]==="en"?r==null?void 0:r.toLowerCase():r}hasTranslation(t,r){for(let n of this.bundles)if(n.locales.indexOf(r)>=0)return n.hasMessage(t);return!1}coerceNumericVariables(t){let r={};for(let n in t){let o=t[n];Tc(o)?r[n]=o.value:typeof o=="number"?r[n]=`${o}`:r[n]=o}return r}getLocales(){return this.bundles.reduce((t,r)=>t.concat(r.locales),[])}};var am=`shared-calculator-error-internal-error = [internal] { $msg }
shared-calculator-error-parse-error = Sorry, I don't understand this.
practice-label-test-version = { $entityName } Version
practice-link-four-function = Four Function Calculator
practice-link-graphing = Graphing Calculator
practice-link-scientific = Scientific Calculator
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




























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































`;var im="",wc={},sm={},vc={},zT=["ar","hy-AM","hi","tr","xx-XX"];function lm(e){im=e||""}function cm(e){for(let t in e)delete vc[t],sm[t]=e[t]}function xi(e,t){if(t)for(let r in t)t.hasOwnProperty(r)&&(e=e.split("{ $"+r+" }").join(t[r]));return e}function Ti(e,t,r){return um(e,t!=null?t:{},r!=null?r:im)}function Mc(e){function t(r,n){return um(r,n!=null?n:{},e())}return t}function HT(e){let t={};for(let r in e){let n=e[r];n!==void 0&&(t[r]=n)}return t}function um(e,t,r){let o=WT(r).format(e,HT(t));return o==null?(console.warn(`Could not format string ${e}`),""):o}function WT(e){let t=vc[e];if(!t){wc[e]||(wc[e]=mi([e]));let r=[];for(let o of wc[e]){let a=sm[o];a&&r.push({lang:o,source:a})}let n={};e==="xx-XX"&&(n.transform=o=>o.replace(/[a-z]/gi,"\u2666")),t=vc[e]=bi.fromSources([...r,{lang:"en",source:am}],o=>{console.warn(o)},n)}return t}function pm(e){return ra.hasOwnProperty(e)||zT.includes(e)}var jT=typeof desmosLocaleData=="object"?desmosLocaleData:{};function Sc(){let e=mi([qt("lang"),navigator.userLanguage,navigator.language]);for(let t=0;t<e.length;t++){let r=e[t];if(pm(r))return r}return"en"}cm(jT);lm(Sc());var Cc={real:!0,imag:!0,conj:!0,arg:!0},kc=Object.keys(Cc);var qr=e=>Object.keys(e);var QT=function(){"use strict";function e(C,M){let S=(C&65535)+(M&65535);return(C>>16)+(M>>16)+(S>>16)<<16|S&65535}function t(C,M){return C<<M|C>>>32-M}function r(C,M,S,_,B,W){return e(t(e(e(M,C),e(_,W)),B),S)}function n(C,M,S,_,B,W,me){return r(M&S|~M&_,C,M,B,W,me)}function o(C,M,S,_,B,W,me){return r(M&_|S&~_,C,M,B,W,me)}function a(C,M,S,_,B,W,me){return r(M^S^_,C,M,B,W,me)}function i(C,M,S,_,B,W,me){return r(S^(M|~_),C,M,B,W,me)}function s(C,M){C[M>>5]|=128<<M%32,C[(M+64>>>9<<4)+14]=M;let S,_,B,W,me,q=1732584193,D=-271733879,P=-1732584194,x=271733878;for(S=0;S<C.length;S+=16)_=q,B=D,W=P,me=x,q=n(q,D,P,x,C[S],7,-680876936),x=n(x,q,D,P,C[S+1],12,-389564586),P=n(P,x,q,D,C[S+2],17,606105819),D=n(D,P,x,q,C[S+3],22,-1044525330),q=n(q,D,P,x,C[S+4],7,-176418897),x=n(x,q,D,P,C[S+5],12,1200080426),P=n(P,x,q,D,C[S+6],17,-1473231341),D=n(D,P,x,q,C[S+7],22,-45705983),q=n(q,D,P,x,C[S+8],7,1770035416),x=n(x,q,D,P,C[S+9],12,-1958414417),P=n(P,x,q,D,C[S+10],17,-42063),D=n(D,P,x,q,C[S+11],22,-1990404162),q=n(q,D,P,x,C[S+12],7,1804603682),x=n(x,q,D,P,C[S+13],12,-40341101),P=n(P,x,q,D,C[S+14],17,-1502002290),D=n(D,P,x,q,C[S+15],22,1236535329),q=o(q,D,P,x,C[S+1],5,-165796510),x=o(x,q,D,P,C[S+6],9,-1069501632),P=o(P,x,q,D,C[S+11],14,643717713),D=o(D,P,x,q,C[S],20,-373897302),q=o(q,D,P,x,C[S+5],5,-701558691),x=o(x,q,D,P,C[S+10],9,38016083),P=o(P,x,q,D,C[S+15],14,-660478335),D=o(D,P,x,q,C[S+4],20,-405537848),q=o(q,D,P,x,C[S+9],5,568446438),x=o(x,q,D,P,C[S+14],9,-1019803690),P=o(P,x,q,D,C[S+3],14,-187363961),D=o(D,P,x,q,C[S+8],20,1163531501),q=o(q,D,P,x,C[S+13],5,-1444681467),x=o(x,q,D,P,C[S+2],9,-51403784),P=o(P,x,q,D,C[S+7],14,1735328473),D=o(D,P,x,q,C[S+12],20,-1926607734),q=a(q,D,P,x,C[S+5],4,-378558),x=a(x,q,D,P,C[S+8],11,-2022574463),P=a(P,x,q,D,C[S+11],16,1839030562),D=a(D,P,x,q,C[S+14],23,-35309556),q=a(q,D,P,x,C[S+1],4,-1530992060),x=a(x,q,D,P,C[S+4],11,1272893353),P=a(P,x,q,D,C[S+7],16,-155497632),D=a(D,P,x,q,C[S+10],23,-1094730640),q=a(q,D,P,x,C[S+13],4,681279174),x=a(x,q,D,P,C[S],11,-358537222),P=a(P,x,q,D,C[S+3],16,-722521979),D=a(D,P,x,q,C[S+6],23,76029189),q=a(q,D,P,x,C[S+9],4,-640364487),x=a(x,q,D,P,C[S+12],11,-421815835),P=a(P,x,q,D,C[S+15],16,530742520),D=a(D,P,x,q,C[S+2],23,-995338651),q=i(q,D,P,x,C[S],6,-198630844),x=i(x,q,D,P,C[S+7],10,1126891415),P=i(P,x,q,D,C[S+14],15,-1416354905),D=i(D,P,x,q,C[S+5],21,-57434055),q=i(q,D,P,x,C[S+12],6,1700485571),x=i(x,q,D,P,C[S+3],10,-1894986606),P=i(P,x,q,D,C[S+10],15,-1051523),D=i(D,P,x,q,C[S+1],21,-2054922799),q=i(q,D,P,x,C[S+8],6,1873313359),x=i(x,q,D,P,C[S+15],10,-30611744),P=i(P,x,q,D,C[S+6],15,-1560198380),D=i(D,P,x,q,C[S+13],21,1309151649),q=i(q,D,P,x,C[S+4],6,-145523070),x=i(x,q,D,P,C[S+11],10,-1120210379),P=i(P,x,q,D,C[S+2],15,718787259),D=i(D,P,x,q,C[S+9],21,-343485551),q=e(q,_),D=e(D,B),P=e(P,W),x=e(x,me);return[q,D,P,x]}function c(C){let M,S="",_=C.length*32;for(M=0;M<_;M+=8)S+=String.fromCharCode(C[M>>5]>>>M%32&255);return S}function f(C){let M,S=[];for(S[(C.length>>2)-1]=void 0,M=0;M<S.length;M+=1)S[M]=0;let _=C.length*8;for(M=0;M<_;M+=8)S[M>>5]|=(C.charCodeAt(M/8)&255)<<M%32;return S}function h(C){return c(s(f(C),C.length*8))}function w(C){let M="0123456789abcdef",S="",_,B;for(B=0;B<C.length;B+=1)_=C.charCodeAt(B),S+=M.charAt(_>>>4&15)+M.charAt(_&15);return S}function N(C){return unescape(encodeURIComponent(C))}function I(C){return h(N(C))}function $(C){return w(I(C))}return $}();function Ec(e,t){if(!isFinite(e)||!isFinite(t))return NaN;if(e=Math.round(e),t=Math.round(t),e<0&&(e=-e),t<0&&(t=-t),t>e){let n=t;t=e,e=n}if(t===0)return e;let r=e%t;for(;r>0;)e=t,t=r,r=e%t;return t}var vi=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},Si=Array.prototype,Ac=Object.prototype,fm=typeof Symbol!="undefined"?Symbol.prototype:null,Oq=Si.push,JT=Si.slice,Mi=Ac.toString,ew=Ac.hasOwnProperty,tw=Array.isArray,gm=Object.keys,hm=Object.create,rw=vi.isNaN,_q=vi.isFinite,Nc=function(){};function We(e){if(e instanceof We)return e;if(!(this instanceof We))return new We(e);this._wrapped=e}var Fq=We.VERSION="1.10.2";function Ci(e,t,r){if(t===void 0)return e;switch(r==null?3:r){case 1:return function(n){return e.call(t,n)};case 3:return function(n,o,a){return e.call(t,n,o,a)};case 4:return function(n,o,a,i){return e.call(t,n,o,a,i)}}return function(){return e.apply(t,arguments)}}function xm(e,t,r){return e==null?Ew:Er(e)?Ci(e,t,r):ia(e)&&!Ei(e)?Nw(e):Am(e)}We.iteratee=Tm;function Tm(e,t){return xm(e,t,1/0)}function wn(e,t,r){return We.iteratee!==Tm?We.iteratee(e,t):xm(e,t,r)}function _t(e,t){return t=t==null?e.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),n=Array(r),o=0;o<r;o++)n[o]=arguments[o+t];switch(t){case 0:return e.call(this,n);case 1:return e.call(this,arguments[0],n);case 2:return e.call(this,arguments[0],arguments[1],n)}var a=Array(t+1);for(o=0;o<t;o++)a[o]=arguments[o];return a[t]=n,e.apply(this,a)}}function nw(e){if(!ia(e))return{};if(hm)return hm(e);Nc.prototype=e;var t=new Nc;return Nc.prototype=null,t}function wm(e){return function(t){return t==null?void 0:t[e]}}function io(e,t){return e!=null&&ew.call(e,t)}function vm(e,t){for(var r=t.length,n=0;n<r;n++){if(e==null)return;e=e[t[n]]}return r?e:void 0}var ow=Math.pow(2,53)-1,vn=wm("length");function so(e){var t=vn(e);return typeof t=="number"&&t>=0&&t<=ow}function aa(e,t,r){t=Ci(t,r);var n,o;if(so(e))for(n=0,o=e.length;n<o;n++)t(e[n],n,e);else{var a=pr(e);for(n=0,o=a.length;n<o;n++)t(e[a[n]],a[n],e)}return e}function Pc(e,t,r){t=wn(t,r);for(var n=!so(e)&&pr(e),o=(n||e).length,a=Array(o),i=0;i<o;i++){var s=n?n[i]:i;a[i]=t(e[s],s,e)}return a}function Mm(e){var t=function(r,n,o,a){var i=!so(r)&&pr(r),s=(i||r).length,c=e>0?0:s-1;for(a||(o=r[i?i[c]:c],c+=e);c>=0&&c<s;c+=e){var f=i?i[c]:c;o=n(o,r[f],f,r)}return o};return function(r,n,o,a){var i=arguments.length>=3;return t(r,Ci(n,a,4),o,i)}}var Bq=Mm(1),Gq=Mm(-1);function aw(e,t,r){var n=[];return t=wn(t,r),aa(e,function(o,a,i){t(o,a,i)&&n.push(o)}),n}function ao(e,t,r,n){return so(e)||(e=Im(e)),(typeof r!="number"||n)&&(r=0),fw(e,t,r)>=0}var $q=_t(function(e,t,r){var n,o;return Er(t)?o=t:Ei(t)&&(n=t.slice(0,-1),t=t[t.length-1]),Pc(e,function(a){var i=o;if(!i){if(n&&n.length&&(a=vm(a,n)),a==null)return;i=a[t]}return i==null?i:i.apply(a,r)})});function iw(e,t){return Pc(e,Am(t))}function sw(e,t,r){var n=-1/0,o=-1/0,a,i;if(t==null||typeof t=="number"&&typeof e[0]!="object"&&e!=null){e=so(e)?e:Im(e);for(var s=0,c=e.length;s<c;s++)a=e[s],a!=null&&a>n&&(n=a)}else t=wn(t,r),aa(e,function(f,h,w){i=t(f,h,w),(i>o||i===-1/0&&n===-1/0)&&(n=f,o=i)});return n}function ki(e,t){return function(r,n,o){var a=t?[[],[]]:{};return n=wn(n,o),aa(r,function(i,s){var c=n(i,s,r);e(a,i,c)}),a}}var Vq=ki(function(e,t,r){io(e,r)?e[r].push(t):e[r]=[t]}),Uq=ki(function(e,t,r){e[r]=t}),zq=ki(function(e,t,r){io(e,r)?e[r]++:e[r]=1});var Hq=ki(function(e,t,r){e[r?0:1].push(t)},!0);function lo(e,t,r,n){n=n||[];for(var o=n.length,a=0,i=vn(e);a<i;a++){var s=e[a];if(so(s)&&(Ei(s)||Ic(s)))if(t)for(var c=0,f=s.length;c<f;)n[o++]=s[c++];else lo(s,t,r,n),o=n.length;else r||(n[o++]=s)}return n}var Wq=_t(function(e,t){return cw(e,t)});function lw(e,t,r,n){qw(t)||(n=r,r=t,t=!1),r!=null&&(r=wn(r,n));for(var o=[],a=[],i=0,s=vn(e);i<s;i++){var c=e[i],f=r?r(c,i,e):c;t&&!r?((!i||a!==f)&&o.push(c),a=f):r?ao(a,f)||(a.push(f),o.push(c)):ao(o,c)||o.push(c)}return o}var Kq=_t(function(e){return lw(lo(e,!0,!0))});var cw=_t(function(e,t){return t=lo(t,!0,!0),aw(e,function(r){return!ao(t,r)})});function uw(e){for(var t=e&&sw(e,vn).length||0,r=Array(t),n=0;n<t;n++)r[n]=iw(e,n);return r}var jq=_t(uw);function Sm(e){return function(t,r,n){r=wn(r,n);for(var o=vn(t),a=e>0?0:o-1;a>=0&&a<o;a+=e)if(r(t[a],a,t))return a;return-1}}var pw=Sm(1),dw=Sm(-1);function mw(e,t,r,n){r=wn(r,n,1);for(var o=r(t),a=0,i=vn(e);a<i;){var s=Math.floor((a+i)/2);r(e[s])<o?a=s+1:i=s}return a}function Cm(e,t,r){return function(n,o,a){var i=0,s=vn(n);if(typeof a=="number")e>0?i=a>=0?a:Math.max(a+s,i):s=a>=0?Math.min(a+1,s):a+s+1;else if(r&&a&&s)return a=r(n,o),n[a]===o?a:-1;if(o!==o)return a=t(JT.call(n,i,s),kw),a>=0?a+i:-1;for(a=e>0?i:s-1;a>=0&&a<s;a+=e)if(n[a]===o)return a;return-1}}var fw=Cm(1,pw,mw),Qq=Cm(-1,dw);function km(e,t,r,n,o){if(!(n instanceof t))return e.apply(r,o);var a=nw(e.prototype),i=e.apply(a,o);return ia(i)?i:a}var gw=_t(function(e,t,r){if(!Er(e))throw new TypeError("Bind must be called on a function");var n=_t(function(o){return km(e,n,t,this,r.concat(o))});return n}),qi=_t(function(e,t){var r=qi.placeholder,n=function(){for(var o=0,a=t.length,i=Array(a),s=0;s<a;s++)i[s]=t[s]===r?arguments[o++]:t[s];for(;o<arguments.length;)i.push(arguments[o++]);return km(e,n,this,this,i)};return n});qi.placeholder=We;var Yq=_t(function(e,t){t=lo(t,!1,!1);var r=t.length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var n=t[r];e[n]=gw(e[n],e)}});var hw=_t(function(e,t,r){return setTimeout(function(){return e.apply(null,r)},t)}),Xq=qi(hw,We,1);function qm(e,t,r){var n,o,a,i,s=0;r||(r={});var c=function(){s=r.leading===!1?0:bm(),n=null,i=e.apply(o,a),n||(o=a=null)},f=function(){var h=bm();!s&&r.leading===!1&&(s=h);var w=t-(h-s);return o=this,a=arguments,w<=0||w>t?(n&&(clearTimeout(n),n=null),s=h,i=e.apply(o,a),n||(o=a=null)):!n&&r.trailing!==!1&&(n=setTimeout(c,w)),i};return f.cancel=function(){clearTimeout(n),s=0,n=o=a=null},f}function yw(e){return function(){return!e.apply(this,arguments)}}function bw(e,t){var r;return function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=null),r}}var Zq=qi(bw,2),Em=!{toString:null}.propertyIsEnumerable("toString"),ym=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function Nm(e,t){var r=ym.length,n=e.constructor,o=Er(n)&&n.prototype||Ac,a="constructor";for(io(e,a)&&!ao(t,a)&&t.push(a);r--;)a=ym[r],a in e&&e[a]!==o[a]&&!ao(t,a)&&t.push(a)}function pr(e){if(!ia(e))return[];if(gm)return gm(e);var t=[];for(var r in e)io(e,r)&&t.push(r);return Em&&Nm(e,t),t}function Rc(e){if(!ia(e))return[];var t=[];for(var r in e)t.push(r);return Em&&Nm(e,t),t}function Im(e){for(var t=pr(e),r=t.length,n=Array(r),o=0;o<r;o++)n[o]=e[t[o]];return n}function xw(e){for(var t={},r=pr(e),n=0,o=r.length;n<o;n++)t[e[r[n]]]=r[n];return t}function Dc(e,t){return function(r){var n=arguments.length;if(t&&(r=Object(r)),n<2||r==null)return r;for(var o=1;o<n;o++)for(var a=arguments[o],i=e(a),s=i.length,c=0;c<s;c++){var f=i[c];(!t||r[f]===void 0)&&(r[f]=a[f])}return r}}var Jq=Dc(Rc),Tw=Dc(pr);function ww(e,t,r){return t in r}var co=_t(function(e,t){var r={},n=t[0];if(e==null)return r;Er(n)?(t.length>1&&(n=Ci(n,t[1])),t=Rc(e)):(n=ww,t=lo(t,!1,!1),e=Object(e));for(var o=0,a=t.length;o<a;o++){var i=t[o],s=e[i];n(s,i,e)&&(r[i]=s)}return r}),eE=_t(function(e,t){var r=t[0],n;return Er(r)?(r=yw(r),t.length>1&&(n=t[1])):(t=Pc(lo(t,!1,!1),String),r=function(o,a){return!ao(t,a)}),co(e,r,n)}),tE=Dc(Rc,!0);function vw(e,t){var r=pr(t),n=r.length;if(e==null)return!n;for(var o=Object(e),a=0;a<n;a++){var i=r[a];if(t[i]!==o[i]||!(i in o))return!1}return!0}function wi(e,t,r,n){if(e===t)return e!==0||1/e===1/t;if(e==null||t==null)return!1;if(e!==e)return t!==t;var o=typeof e;return o!=="function"&&o!=="object"&&typeof t!="object"?!1:Mw(e,t,r,n)}function Mw(e,t,r,n){e instanceof We&&(e=e._wrapped),t instanceof We&&(t=t._wrapped);var o=Mi.call(e);if(o!==Mi.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:+e==0?1/+e===1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return fm.valueOf.call(e)===fm.valueOf.call(t)}var a=o==="[object Array]",i=o==="[object Set]",s=o==="[object Map]",c=a||i||s;if(!c){if(typeof e!="object"||typeof t!="object")return!1;var f=e.constructor,h=t.constructor;if(f!==h&&!(Er(f)&&f instanceof f&&Er(h)&&h instanceof h)&&"constructor"in e&&"constructor"in t)return!1}r=r||[],n=n||[];for(var w=r.length;w--;)if(r[w]===e)return n[w]===t;if(r.push(e),n.push(t),a){if(w=e.length,w!==t.length)return!1;for(;w--;)if(!wi(e[w],t[w],r,n))return!1}else if(s){if(e.size!==t.size)return!1;for(let[$,C]of e.entries())if(!wi(C,t.get($),r,n))return!1}else if(i){if(e.size!==t.size)return!1;for(let $ of e.values())if(!t.has($))return!1}else{var N=pr(e),I;if(w=N.length,pr(t).length!==w)return!1;for(;w--;)if(I=N[w],!(io(t,I)&&wi(e[I],t[I],r,n)))return!1}return r.pop(),n.pop(),!0}function Mn(e,t){return wi(e,t)}function Et(e){return function(t){return Mi.call(t)==="[object "+e+"]"}}var Ei=tw||Et("Array");function ia(e){var t=typeof e;return t==="function"||t==="object"&&!!e}var Ic=Et("Arguments"),Er=Et("Function"),rE=Et("String"),Sw=Et("Number"),nE=Et("Date"),oE=Et("RegExp"),aE=Et("Error"),iE=Et("Symbol"),sE=Et("Map"),lE=Et("WeakMap"),cE=Et("Set"),uE=Et("WeakSet");(function(){Ic(arguments)||(Ic=function(e){return io(e,"callee")})})();var Cw=vi.document&&vi.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof Cw!="function"&&(Er=function(e){return typeof e=="function"||!1});function kw(e){return Sw(e)&&rw(e)}function qw(e){return e===!0||e===!1||Mi.call(e)==="[object Boolean]"}function Ew(e){return e}function Am(e){return Ei(e)?function(t){return vm(t,e)}:wm(e)}function Nw(e){return e=Tw({},e),function(t){return vw(t,e)}}var bm=Date.now||function(){return new Date().getTime()},Pm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Iw=xw(Pm);function Rm(e){var t=function(a){return e[a]},r="(?:"+pr(e).join("|")+")",n=RegExp(r),o=RegExp(r,"g");return function(a){return a=a==null?"":""+a,n.test(a)?a.replace(o,t):a}}var Aw=Rm(Pm),pE=Rm(Iw);function Dm(e,t){return e._chain?We(t).chain():t}aa(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=Si[e];We.prototype[e]=function(){var r=this._wrapped;return t.apply(r,arguments),(e==="shift"||e==="splice")&&r.length===0&&delete r[0],Dm(this,r)}});aa(["concat","join","slice"],function(e){var t=Si[e];We.prototype[e]=function(){return Dm(this,t.apply(this._wrapped,arguments))}});We.prototype.value=function(){return this._wrapped};We.prototype.valueOf=We.prototype.toJSON=We.prototype.value;We.prototype.toString=function(){return String(this._wrapped)};function Lm(e,t){return e===Hr&&Ft(t)||t===Xe&&Ft(e)||t===pt&&!Ft(e)?!0:e===t}function Ni(e,t){if(e===void 0)return!1;if(Lm(e,t))return!0;Ft(e)&&Ft(t)&&t!==Hr&&(e=uo(e),t=uo(t));let r=t;switch(e){case Te:case ge:case er:case m:case k:case ee:return r===m||r===k;default:return!1}}function Om(e,t){return t===m&&e===k||t===U&&e===dt?!1:Ni(e,t)}function Ii(e,t){return{key:e,vars:t}}var pt=0,m=1,dr=2,L=3,mt=4,po=5,Xe=6,U=7,mo=8,Ir=9,Cn=10,Hr=11,Lc=12,Ke=13,Bt=14,Ai=15,be=16,Pi=17,we=18,fo=19,he=20,Ri=21,de=22,Di=23,ue=24,Li=25,Ae=26,Oi=27,Te=28,go=29,ge=30,ho=31,ie=32,_i=33,Pe=34,Fi=35,er=36,Bi=37,k=38,dt=39,kn=40,yo=41,ee=42,Ar=43,Wr=50,Gi=51,Gt=60,$i=61,tt=62,Vi=63,rt=64,Ui=65,ft=66,zi=67,gt=68,Hi=69,ht=70,Wi=71,yt=72,Ki=73,nt=76,ji=77,Kr=78,Qi=79,jr=80,Yi=81,tr=82,Xi=83,$t=84,Zi=85,oe=100,bo=101,bt=102,Ji=103,Qr=104,es=105,Yr=106,ts=107,ot=108,rs=109,sa=200,la=201,ca=202,ua=203,ns=204,os=205,as=206,is=207,pa=208,da=209,ss=210,ls=211,Rw={Any:pt,Number:m,Bool:dr,Complex:k,ListOfComplex:dt,Point:L,Point3D:oe,Distribution:mt,Action:po,ListOfAny:Xe,ListOfNumber:U,ListOfBool:mo,ListOfPoint:Ir,ListOfPoint3D:bo,ListOfDistribution:Cn,EmptyList:Hr,ErrorType:Lc,SeedType:Ke,RGBColor:Bt,ListOfColor:Ai,Polygon:be,ListOfPolygon:Pi,TrapezoidDescriptor:kn,ListOfTrapezoidDescriptor:yo,Matrix:ee,ListOfMatrix:Ar,Segment:we,ListOfSegment:fo,Circle:he,ListOfCircle:Ri,Arc:de,ListOfArc:Di,Line:ue,ListOfLine:Li,Ray:Ae,ListOfRay:Oi,Vector:Pe,ListOfVector:Fi,Restriction:er,ListOfRestriction:Bi,AngleMarker:Te,ListOfAngleMarker:go,DirectedAngleMarker:ge,ListOfDirectedAngleMarker:ho,Transformation:ie,ListOfTransformation:_i,Segment3D:bt,ListOfSegment3D:Ji,Triangle3D:Qr,ListOfTriangle3D:es,Sphere3D:Yr,ListOfSphere3D:ts,Vector3D:ot,ListOfVector3D:rs,Tone:Wr,ListOfTone:Gi,ConfidenceInterval:Gt,ListOfConfidenceInterval:$i,OneSampleTInference:tt,ListOfOneSampleTInference:Vi,TwoSampleTInference:rt,ListOfTwoSampleTInference:Ui,RegressionTInference:nt,ListOfRegressionTInference:ji,OneSampleZInference:ft,ListOfOneSampleZInference:zi,TwoSampleZInference:gt,ListOfTwoSampleZInference:Hi,OneProportionZInference:ht,ListOfOneProportionZInference:Wi,TwoProportionZInference:yt,ListOfTwoProportionZInference:Ki,ChiSquareGoodnessOfFit:Kr,ListOfChiSquareGoodnessOfFit:Qi,ChiSquareIndependence:jr,ListOfChiSquareIndependence:Yi,ZSignificanceTest:tr,ListOfZSignificanceTest:Xi,TSignificanceTest:$t,ListOfTSignificanceTest:Zi,MapIntervalPoint:sa,MapIntervalComplex:pa,MapIntervalPoint3D:la,MapInterval2DPoint:ca,MapInterval2DComplex:da,MapInterval2DPoint3D:ua,ListOfMapIntervalPoint:ns,ListOfMapIntervalComplex:ss,ListOfMapIntervalPoint3D:os,ListOfMapInterval2DPoint:as,ListOfMapInterval2DComplex:ls,ListOfMapInterval2DPoint3D:is},Fm={[L]:[["x",m],["y",m]],[oe]:[["x",m],["y",m],["z",m]],[k]:[["real",m],["imag",m]],[Gt]:[["min",m],["max",m],["standardError",m],["dof",m]],[tt]:[["count",m],["mean",m],["stdev",m],["dof",m]],[rt]:[["count1",m],["mean1",m],["stdev1",m],["count2",m],["mean2",m],["stdev2",m],["dof",m]],[nt]:[["pointEstimate",m],["standardError",m],["dof",m]],[ft]:[["count",m],["mean",m],["stdevp",m]],[gt]:[["count1",m],["mean1",m],["stdevp1",m],["count2",m],["mean2",m],["stdevp2",m]],[ht]:[["successes",m],["count",m]],[yt]:[["successes1",m],["count1",m],["successes2",m],["count2",m]],[tr]:[["p",m],["score",m],["hypothesis",m],["pleft",m],["pright",m]],[$t]:[["p",m],["score",m],["hypothesis",m],["pleft",m],["pright",m],["dof",m]],[Kr]:[["p",m],["score",m],["dof",m],["observed",U],["expected",U],["contributions",U],["total",m]],[jr]:[["p",m],["score",m],["dof",m],["observed",U],["expected",U],["contributions",U],["rows",m],["columns",m],["rowTotals",U],["columnTotals",U],["total",m]],[kn]:[["l0",m],["l1",m],["r0",m],["r1",m],["b0",m],["b1",m],["b2",m],["b3",m],["t0",m],["t1",m],["t2",m],["t3",m]]};function Dw(){let e={};for(let[t,r]of Object.entries(Fm))e[t]=r.map(n=>n[1]);return e}function Lw(){let e={};for(let[t,r]of Object.entries(Fm))e[t]=r.map(n=>n[0]);return e}var Ow=Dw(),fE=Lw();var Ge=class e{constructor(t,{coerceComplexToReal:r}){this.types=t,this.coerceComplexToReal=r}static of(t,r={coerceComplexToReal:!0}){return new e(t,r)}getTypes(){return this.types}},gE=Object.values(Rw),_w=Object.keys(Ow).map(parseFloat),hE=Ge.of(_w);function cs(e){if(Ft(e))return e===Hr?"EmptyList":`ListOf${cs(uo(e))}`;switch(e){case pt:return"Any";case m:return"Number";case dr:return"Bool";case k:return"Complex";case L:return"Point";case oe:return"Point3D";case mt:return"Distribution";case Gt:return"ConfidenceInterval";case tt:return"OneSampleTInference";case rt:return"TwoSampleTInference";case nt:return"RegressionTInference";case ft:return"OneSampleZInference";case gt:return"TwoSampleZInference";case ht:return"OneProportionZInference";case yt:return"TwoProportionZInference";case tr:return"ZSignificanceTest";case $t:return"TSignificanceTest";case Kr:return"ChiSquareGoodnessOfFit";case jr:return"ChiSquareIndependence";case po:return"Action";case Lc:return"ErrorType";case Ke:return"SeedType";case Bt:return"RGBColor";case be:return"Polygon";case kn:return"TrapezoidDescriptor";case ee:return"Matrix";case we:return"Segment";case he:return"Circle";case de:return"Arc";case ue:return"Line";case Ae:return"Ray";case Pe:return"Vector";case er:return"Restriction";case Te:return"Angle";case ge:return"DirectedAngle";case ie:return"Transformation";case bt:return"Segment3D";case ot:return"Vector3D";case Qr:return"Triangle3D";case Yr:return"Sphere3D";case Wr:return"Tone";case sa:return"MapIntervalPoint";case pa:return"MapIntervalComplex";case la:return"MapIntervalPoint3D";case ca:return"MapInterval2ToPoint";case da:return"MapInterval2ToComplex";case ua:return"MapInterval2DPoint3D";default:let t=e;throw new Error(`Invalid type: ${t}`)}}var Fw=[Xe,U,mo,dt,Bi,Ir,bo,Cn,Hr,Ai,Pi,yo,Ar,fo,Ri,Di,Li,Oi,Fi,go,ho,_i,Ji,rs,es,ts,Gi,$i,Vi,Ui,ji,zi,Hi,Wi,Ki,Xi,Zi,Qi,Yi,ns,ss,os,as,ls,is],Pr=Ge.of(Fw,{coerceComplexToReal:!1}),Oc={[Xe]:pt,[Hr]:m,[U]:m,[mo]:dr,[dt]:k,[Bi]:er,[Ir]:L,[bo]:oe,[Cn]:mt,[Ai]:Bt,[Pi]:be,[yo]:kn,[Ar]:ee,[fo]:we,[Ri]:he,[Di]:de,[Li]:ue,[Oi]:Ae,[Fi]:Pe,[go]:Te,[ho]:ge,[_i]:ie,[Ji]:bt,[rs]:ot,[es]:Qr,[ts]:Yr,[Gi]:Wr,[$i]:Gt,[Vi]:tt,[Ui]:rt,[ji]:nt,[zi]:ft,[Hi]:gt,[Wi]:ht,[Ki]:yt,[Xi]:tr,[Zi]:$t,[Qi]:Kr,[Yi]:jr,[ns]:sa,[ss]:pa,[os]:la,[as]:ca,[ls]:da,[is]:ua},Bm=Ge.of(Object.values(Oc));function Ft(e){return e===void 0?!1:e in Oc}function uo(e){if(!Ft(e))throw new Error("Type "+cs(e)+" does not implement elementType.");return Oc[e]}function Nr(e){if(!Sn(e))throw new Error("Type "+cs(e)+" does not implement listType.");switch(e){case pt:return Xe;case m:return U;case dr:return mo;case k:return dt;case er:return Bi;case L:return Ir;case oe:return bo;case mt:return Cn;case Bt:return Ai;case be:return Pi;case kn:return yo;case ee:return Ar;case we:return fo;case he:return Ri;case de:return Di;case ue:return Li;case Ae:return Oi;case Pe:return Fi;case Te:return go;case ge:return ho;case ie:return _i;case bt:return Ji;case ot:return rs;case Qr:return es;case Yr:return ts;case Wr:return Gi;case Gt:return $i;case tt:return Vi;case rt:return Ui;case nt:return ji;case ft:return zi;case gt:return Hi;case ht:return Wi;case yt:return Ki;case tr:return Xi;case $t:return Zi;case Kr:return Qi;case jr:return Yi;case sa:return ns;case pa:return ss;case la:return os;case ca:return as;case da:return ls;case ua:return is;default:throw new Error(`Invalid type: ${e}`)}}function Sn(e){if(Ft(e))return!1;switch(e){case Ke:case po:case Lc:return!1;default:return!0}}var yE=Ge.of([ue,Ae,we,Pe]),bE=Ge.of([Pe,ot]),Gm=Ge.of([Te,ge]);var xE={[L]:sa,[k]:pa,[oe]:la},TE={[L]:ca,[k]:da,[oe]:ua};var CE=Symbol("UNKNOWN_RETURN_TYPE");function $m(e){return typeof e=="object"&&e.type==="variadic"}var _c=class{constructor(t,r){this.argTypes=t,this.productContext=r,this.minArity=this.argTypes.length,this.maxArity=this.argTypes.length}argTypeAtIndex(t){if(!(t>this.argTypes.length-1))return this.argTypes[t]}matches(t){return Vm(this,t)}satisfiesPolicy(t){return t.is3dProduct()?this.productContext["3d"]:t.isGeometryEnabled()?this.productContext.geometry:this.productContext.graphing}},Fc=class{constructor(t,r){this.maxArity=void 0;this.productContext=r,this.initial=t.initial,this.rest=t.rest,this.minArity=this.initial.length}argTypeAtIndex(t){return t<this.initial.length?this.initial[t]:this.rest}matches(t){return Vm(this,t)}satisfiesPolicy(t){return t.is3dProduct()?this.productContext["3d"]:t.isGeometryEnabled()?this.productContext.geometry:this.productContext.graphing}};function Vm(e,t){return e.maxArity!==void 0&&e.maxArity<t.length?!1:!!t.every((r,n)=>{if(r===void 0)return!0;let o=e.argTypeAtIndex(n);return o===void 0?!1:Gw(r,o)})}var us=class{constructor(t){this.coerceComplexToReal=!1;this.arg=t}getTypes(){return typeof this.arg=="number"?[this.arg]:this.arg.getTypes()}},ae=new us(m),$c=new us(U),Bc=class{constructor(t){typeof t=="number"?(this.coerceComplexToReal=t===m,this.nodeTypes=[Nr(t)]):(this.coerceComplexToReal=t.coerceComplexToReal,this.nodeTypes=t.getTypes().map(Nr))}getTypes(){return this.nodeTypes}};function ps(e){return new Bc(e)}var Gc=class{constructor(t){if(typeof t=="number")this.coerceComplexToReal=t===m,this.nodeTypes=[t,Nr(t)];else{this.coerceComplexToReal=t.coerceComplexToReal,this.nodeTypes=[];for(let r of t.getTypes())this.nodeTypes.push(r,Nr(r))}}getTypes(){return this.nodeTypes}};function Rr(e){return new Gc(e)}function Ze(e,t={}){let r={geometry:!0,"3d":!0,graphing:!0,...t};return $m(e)?new Fc(e,r):new _c(e,r)}function A(e,t={}){return $m(e)?Ze({type:"variadic",initial:e.initial.map(Rr),rest:Rr(e.rest)},t):Ze(e.map(Rr),t)}function Gw(e,t){if(typeof t=="number")return Ni(e,t);{let r=t.getTypes();return t.coerceComplexToReal?r.some(n=>Ni(e,n)):r.some(n=>Om(e,n))}}var Um={smallCutoff:1e-6,bigCutoff:1e9,digits:12},GE={...Um,smallCutoff:1e-4,bigCutoff:1e6,digits:9,scientificNotationDigits:4,spaceConstrained:!0},$E={...Um,smallCutoff:.001,bigCutoff:1e6,digits:4,spaceConstrained:!0};function Vc(e){let t=e.match(/\\token(?:Name)?\{(\d+)\}/);return t?`$${t[1]}`:(e=e.replace(/\\operatorname\{(.*)\}/,"$1"),e.replace(/[{}\\]/g,""))}var Vw=()=>({type:"empty"}),Hm=()=>Uw([-1/0,1/0]);var Uw=e=>zw(e,!1),zw=(e,t)=>isNaN(e[0])||isNaN(e[1])||e[1]<e[0]?Vw():{type:"interval",bounds:e,tight:t};function Wm(e,t,r){return{input:e,start:t,end:r}}function Km(e){return e.input.slice(e.start,e.end)}var Xr=class{constructor(){this.tableFrameID=void 0;this.clearDependencies(),this._exports=[],this.metaData={extraDepNodes:[]},this.userData={}}clearDependencies(){this._dependencies=[],this._optionalDependencies=[],this._scope={definitions:[],dependencies:[],substitutionDependencies:[],scopes:[]},this._updateSymbols=[]}setInputSpan(t){this._inputSpan=t}getInputString(){return this._inputSpan===void 0?"":Km(this._inputSpan)}getInputSpan(){return this._inputSpan}shouldExportAns(){return!1}getAnsVariable(){return this.shouldExportAns()&&this.userData&&this.userData.hasOwnProperty("index")?["ans_"+this.userData.index]:[]}addDependency(t){this._dependencies.indexOf(t)===-1&&this._dependencies.push(t),this._scope.dependencies.indexOf(t)===-1&&this._scope.dependencies.push(t)}addDependencies(t){for(let r=0;r<t.length;r++)this.addDependency(t[r])}addOptionalDependencies(t){for(let r=0;r<t.length;r++){let n=t[r];this._dependencies.indexOf(n)===-1&&this._dependencies.push(n),this._optionalDependencies.indexOf(n)===-1&&this._optionalDependencies.push(n)}}addUpdateSymbol(t){this._dependencies.indexOf(t)===-1&&this._dependencies.push(t),this._updateSymbols.indexOf(t)===-1&&this._updateSymbols.push(t)}addSubstitutionDependencies(t){for(let r=0;r<t.length;r++){let n=t[r];if(this._dependencies.indexOf(n)===-1)throw new Error("Programming error: substitution dependency "+n+" must also be registered as a regular dependency");this._scope.substitutionDependencies.indexOf(n)===-1&&this._scope.substitutionDependencies.push(n)}}mergeDependencies(...t){for(let r=0;r<t.length;r++){let n=t[r];for(let o=0;o<n._dependencies.length;o++)this._dependencies.indexOf(n._dependencies[o])===-1&&this._dependencies.push(n._dependencies[o]);for(let o=0;o<n._updateSymbols.length;o++)this._updateSymbols.indexOf(n._updateSymbols[o])===-1&&this._updateSymbols.push(n._updateSymbols[o]);for(let o=0;o<n._scope.dependencies.length;o++)this._scope.dependencies.indexOf(n._scope.dependencies[o])===-1&&this._scope.dependencies.push(n._scope.dependencies[o]);for(let o=0;o<n._scope.substitutionDependencies.length;o++)this._scope.substitutionDependencies.indexOf(n._scope.substitutionDependencies[o])===-1&&this._scope.substitutionDependencies.push(n._scope.substitutionDependencies[o]);this.addOptionalDependencies(n.getOptionalDependencies()),Array.prototype.push.apply(this._scope.scopes,n._scope.scopes)}}mergeDependenciesInScope(t,r,n,o){let a=n.getScope(),i={kind:t,definitions:r,dependencies:a.dependencies,substitutionDependencies:a.substitutionDependencies,scopes:a.scopes,functionDefinitionSymbol:o==null?void 0:o.functionDefinitionSymbol};this._scope.scopes.push(i);for(let s=0;s<n._dependencies.length;s++){let c=n._dependencies[s];!r.includes(c)&&!this._dependencies.includes(c)&&this._dependencies.push(c)}for(let s=0;s<n._updateSymbols.length;s++)this._updateSymbols.indexOf(n._updateSymbols[s])===-1&&this._updateSymbols.push(n._updateSymbols[s]);this.addOptionalDependencies(n.getOptionalDependencies())}getDependencies(){return this._dependencies}graphmodeDependencies(t,r){return this.getDependencies()}getOptionalDependencies(){return this._optionalDependencies}getUpdateSymbols(){return this._updateSymbols}getScope(){return this._scope}dependsOn(t){return this._dependencies.indexOf(t)>-1}getExports(t){let r=this._exports||[],n=this.getIdref();return n&&(r=r.concat([n])),t.ansEnabled()&&(r=r.concat(this.getAnsVariable())),r}getIdref(){var r;if(!this.userData)return;let t=(r=this.userData.unprefixedId)!=null?r:this.userData.id;return t?`idref_${t}`:void 0}getLegalExports(t){return this.getExports(t).filter(r=>!t.assignmentForbidden(r))}exportsSymbol(t){return this._exports.indexOf(t)>-1}getOperator(){return this.operator||"="}isInequality(){return!1}isShadeBetween(){return!1}shouldPromoteToSlider(t){return!1}getSliderVariables(t,r,n){let o=t.sliderVariables(n!=null?n:r.getDependencies());return r.valueType===L||r.valueType===Ir||r.valueType===oe||r.valueType===bo||r.valueType===k||r.valueType===dt?t.is3dPolicy()?o.includes("t")&&!o.includes("u")&&!o.includes("v")?o.filter(a=>a!="t"):!o.includes("t")&&(o.includes("u")||o.includes("v"))?o.filter(a=>a!="u"&&a!="v"):o:o.filter(a=>!t.validParametricVariable(a)):o}asValue(){}boundDomain(t){return Hm()}getCursorContext(){}asCompilerValue(){}substitute(t){}getExpressionType(t,r){}tableInfo(t,r){}getGraphMode(t,r){}getMoveStrategy(t,r,n,o){}};var ma=class extends Xr{constructor(r){super();this.type="Error";this.isError=!0;this.isList=!1;this.blocksExport=!1;this._msg=r,this.blocksExport=!0}evaluateOnce(r){return this._msg}getError(){return this._msg}setDependencies(r){return this.addDependencies(r),this}setActionValue(r){this.actionValue=r}allowExport(){return this.blocksExport=!1,this}setCursorContext(r){this.cursorContext=r}getCursorContext(){return this.cursorContext}};var Qm=!1;function Qw(...e){Qm&&console.error(...e)}function ds(e){if(Qm){let t=e instanceof Error?e:new Error(`${e}`);return Qw(t.stack),new ma(Ii("shared-calculator-error-internal-error",{msg:t.message}))}return new ma(Ii("shared-calculator-error-parse-error"))}var Xm=1;function Yw(){return Xm+=1,Xm}var xo=class e{constructor(t){this.map=new Map;this.dependencyOrder=void 0;this.frameContext=void 0;this.moduleID=void 0;this.lastChanged=new Map;this.isMarkedCacheAnchor=!1;this.regressionParameterSymbols=new Set;this.parent=t}markPersistentCacheAnchor(){this.isMarkedCacheAnchor=!0}isCacheAnchor(){return this.isMarkedCacheAnchor||this.parent===void 0}getParent(){return this.parent}symbolLastChanged(t){let r=0,n=this;do{let o=n.lastChanged.get(t);o!==void 0&&o>r&&(r=o),n=n.parent}while(n!==void 0);return r}*chainRegressionParameterSymbols(){let t=this;do yield*t.regressionParameterSymbols,t=t.parent;while(t!==void 0)}get(t){let r=this;do{let n=r.map.get(t);if(n!==void 0)return n;if(r.map.has(t))return;r=r.parent}while(r!==void 0)}has(t){let r=this;do{if(r.map.has(t))return!0;r=r.parent}while(r!==void 0);return!1}hasOwn(t){return this.map.has(t)}markSymbolRevised(t){this.lastChanged.set(t,Yw())}set(t,r){this.markSymbolRevised(t),r!==void 0&&r.type==="RegressionParameter"?this.regressionParameterSymbols.add(t):this.regressionParameterSymbols.delete(t),this.map.set(t,r)}delete(t){this.markSymbolRevised(t),this.regressionParameterSymbols.delete(t),this.map.delete(t)}ownKeys(){return this.map.keys()}ownEntries(){return this.map.entries()}*allEntries(){let t=new Set,r=this;do{for(let n of r.map)t.has(n[0])||(t.add(n[0]),yield n);r=r.parent}while(r!==void 0)}setParent(t){this.parent=t}setDependencyOrder(t){this.dependencyOrder=t}getDependencyOrder(){let t=this;do{if(t.dependencyOrder)return t.dependencyOrder;t=t.parent}while(t!==void 0);throw ds("Missing dependency order.")}setFrameContext(t){this.frameContext=t}getFrameContext(){let t=this;do{if(t.frameContext)return t.frameContext;t=t.parent}while(t!==void 0);throw ds("Missing frame context.")}setModuleID(t){this.moduleID=t}getModuleID(){let t=this;do{if(t.moduleID)return t.moduleID;t=t.parent}while(t!==void 0);throw ds("Missing module ID.")}childFrame(t){let r=new e(this);if(t)for(let n of qr(t))r.set(n,t[n]);return r}snapshot(){return new Map(this.map)}};var Zm=[dr,er,m,k,L,oe,bt,ot,Qr,Yr,po,Bt,be,kn,we,he,de,ue,Ae,Pe,Te,ge,ie,Wr,Gt,tr,$t,tt,rt,nt,ft,gt,ht,yt],Uc=[...Zm,ee],SN=new Set(Uc),CN=new Set(Zm),kN=Ge.of(Uc.filter(e=>Sn(e))),qN=Ge.of(Uc.filter(e=>!Sn(e)));var NN=Math.pow(2,-52);var{PI:rv,tan:nv,hypot:ov}=Math;var av=50/8,iv=950,sv=134e3;var lv=av*nv(rv/180*28),cv=iv*ov(1,lv),aI=cv*(sv/4);var fI=(Math.sqrt(5)-1)/2;var pv=3.154019550531224,nf=Math.pow(2,-13),of=nf*nf,SI=of*of;var af=32,dv=[],Wc=[];function mv(e,t){for(let r=af;r>0;r--){let n=pv/af*r,o=Math.sinh(n),a=Math.cosh(Math.PI/2*o),i=1/(Math.exp(Math.PI/2*o)*a),s=Math.cosh(n)/(a*a);e.push(i),t.push(s)}}mv(dv,Wc);var sf=0;for(let e=0;e<Wc.length;e++)sf+=Wc[e];var CI=1/(1+2*sf);var To=1,vt=2,ms=3,ga=4;function Q(e,t,r){return{l:e,u:t,deco:r}}function Or(e,t){return{l:e,u:t}}var Kc={Cold:0,Unknown:1,Hot:2};var gs={};nd(gs,{ANY_NUMBER:()=>Ev,abs:()=>Qc,add:()=>bf,and:()=>Hv,cos:()=>jv,dContinuous:()=>ga,dDefined:()=>ms,dNaN:()=>To,dUnionNaN:()=>vt,div:()=>Tf,equal:()=>Wv,greater:()=>Vv,greaterEqual:()=>Uv,guardValue:()=>Rv,hypot:()=>Fv,ibool:()=>rr,ifloat:()=>Zr,less:()=>Gv,lessEqual:()=>$v,max:()=>Zv,min:()=>Xv,mod:()=>Yv,mul:()=>Yc,neg:()=>yf,or:()=>zv,pow:()=>Ov,sin:()=>wf,sqrt:()=>_v,square:()=>Bv,sub:()=>xf,ternary:()=>Kv});var{min:Ut,max:Mt,PI:ha,round:qv,floor:ys}=Math,hf=Q(0,0,1),Ev=Q(-1/0,1/0,2),uf=340282347e30,pf=2**-126;function df(e){return e<-uf?-1/0:e>uf?1/0:e}function Nv(e){let t=df(e.l),r=df(e.u);return t===e.l&&r===e.u?e:Q(t,r,fr(e.deco))}function Iv(e){return e.l>0&&e.l<pf?Q(0,e.u,e.deco):e.u<0&&e.u>-pf?Q(e.l,0,e.deco):e}function Av(e){return Iv(Nv(e))}function Pv(e){return typeof e=="object"&&e!==null&&"deco"in e}function Rv(e){return Pv(e)?Av(e):e}function nr(e,t){return Ut(e,t)}function fr(e){return nr(e,2)}function Vt(e){return nr(e,3)}function Zr(e,t){return Q(e,e,t)}function rr(e){return Or(e,e)}function yf(e){return Q(-e.u,-e.l,e.deco)}function bf(e,t){let r=nr(e.deco,t.deco);return e.u===1/0&&t.l===-1/0||e.l===-1/0&&t.u===1/0?Q(-1/0,1/0,fr(r)):Q(e.l+t.l,e.u+t.u,r)}function xf(e,t){let r=nr(e.deco,t.deco);return e.u===1/0&&t.u===1/0||e.l===-1/0&&t.l===-1/0?Q(-1/0,1/0,fr(r)):Q(e.l-t.u,e.u-t.l,r)}function jc(e,t,r,n,o){return Q(Ut(e,Ut(t,Ut(r,n))),Mt(e,Mt(t,Mt(r,n))),o)}function mf(e){return e.l<=0&&e.u>=0}function ff(e){return e.l===-1/0||e.u===1/0}function Yc(e,t){let r=nr(e.deco,t.deco);return mf(e)&&ff(t)||mf(t)&&ff(e)?Q(-1/0,1/0,fr(r)):jc(e.l*t.l,e.l*t.u,e.u*t.l,e.u*t.u,r)}function Dv(e){return e.l>0||e.u<0?Q(1/e.u,1/e.l,e.deco):e.l<0&&e.u>0?Q(-1/0,1/0,Vt(e.deco)):e.u==0?Q(-1/0,1/0,Vt(e.deco)):Q(1/e.u,1/0,e.deco)}function Tf(e,t){return Yc(e,Dv(t))}function Lv(e){return e-ys(e)}function gf(e,t){return e-t*ys(e/t)}function hs(e){return e>=3?4:e}function Ov(e,t){let r=nr(t.deco,e.deco);if(e.l<0&&t.l==t.u&&Lv(t.l)==0){let n=t.l;return n==0?Zr(1,hs(r)):n>0?gf(n,2)==1?Q(-Math.pow(-e.l,n),Math.pow(Math.abs(e.u),n)*Math.sign(e.u),r):e.u>0?Q(0,Math.pow(Mt(-e.l,e.u),n),r):Q(Math.pow(-e.u,n),Math.pow(-e.l,n),r):gf(n,2)==1?e.u>0?Q(-1/0,1/0,r):e.u==0?Q(-1/0,-Math.pow(-e.l,n),r):Q(-Math.pow(-e.u,n),-Math.pow(-e.l,n),r):e.u>0?Q(Ut(Math.pow(-e.l,n),Math.pow(e.u,n)),1/0,r):e.u==0?Q(Math.pow(-e.l,n),1/0,r):Q(Math.pow(-e.l,n),Math.pow(-e.u,n),r)}if(e.u<0)return hf;if(e.l<0&&(r=fr(e.deco)),e.u==0)return t.l>0?Zr(0,hs(r)):t.l==0?t.u>0?Q(0,1,Vt(r)):Zr(1,hs(r)):t.u>0?Q(0,1/0,Vt(r)):t.u==0?Q(1,1/0,Vt(r)):Zr(1/0,hs(r));if(e.l<=0){if(t.u<=0)return t.l==0?Zr(1,r):e.u<1?Q(Math.pow(e.u,t.u),1/0,Vt(r)):Q(Math.pow(e.u,t.l),1/0,Vt(r));if(t.l<0)return Q(0,1/0,Vt(r));if(t.l==0)return Q(0,Mt(1,Math.pow(e.u,t.u)),Vt(r));if(e.l<0)return jc(0,0,Math.pow(e.u,t.l),Math.pow(e.u,t.u),r)}return jc(Math.pow(e.l,t.l),Math.pow(e.l,t.u),Math.pow(e.u,t.l),Math.pow(e.u,t.u),r)}function _v(e){return e.u<0?hf:e.u==0?Zr(0,e.l==0?e.deco:fr(e.deco)):e.l<0?Q(0,Math.sqrt(e.u),fr(e.deco)):Q(Math.sqrt(e.l),Math.sqrt(e.u),e.deco)}function Qc(e){return e.l>=0?e:e.u<=0?yf(e):Q(0,Mt(-e.l,e.u),e.deco)}function Fv(e,t){let r=Qc(e),n=Qc(t);return Q(Math.hypot(r.l,n.l),Math.hypot(r.u,n.u),nr(e.deco,t.deco))}function Bv(e){if(e.u<=0)return Q(e.u*e.u,e.l*e.l,e.deco);if(e.l>=0)return Q(e.l*e.l,e.u*e.u,e.deco);let t=Mt(-e.l,e.u);return Q(0,t*t,e.deco)}function Gv(e,t){return e.l>=t.u?rr(!1):e.u<t.l&&e.deco>2&&t.deco>2?rr(!0):Or(!1,!0)}function $v(e,t){return e.l>t.u?rr(!1):e.u<=t.l&&e.deco>2&&t.deco>2?rr(!0):Or(!1,!0)}function Vv(e,t){return e.u<=t.l?rr(!1):e.l>t.u&&e.deco>2&&t.deco>2?rr(!0):Or(!1,!0)}function Uv(e,t){return e.u<t.l?rr(!1):e.l>=t.u&&e.deco>2&&t.deco>2?rr(!0):Or(!1,!0)}function zv(e,t){return Or(e.l||t.l,e.u||t.u)}function Hv(e,t){return Or(e.l&&t.l,e.u&&t.u)}function Wv(e,t){return e.l==e.u&&e.u==t.l&&t.l==t.u&&e.deco>2&&t.deco>2?rr(!0):e.l<=t.u&&t.l<=e.u?Or(!1,!0):rr(!1)}function Kv(e,t,r){if(e.l)return t;if(!e.u)return r;if(t.deco==1)return Q(r.l,r.u,fr(r.deco));if(r.deco==1)return Q(t.l,t.u,fr(t.deco));{let n=Vt(nr(t.deco,r.deco));return Q(Ut(t.l,r.l),Mt(t.u,r.u),n)}}function wf(e){let t=ha*qv(e.l/ha)+ha*1.5;if(t<e.u)return Q(-1,1,e.deco);t-=ha;let r=Math.sin(e.l),n=Math.sin(e.u),o=Q(Ut(r,n),Mt(r,n),e.deco);if(t<e.u){let a=Math.sin(t);return Q(Ut(o.l,a),Mt(o.u,a),e.deco)}return o}function jv(e){return wf(bf(e,Zr(ha/2,4)))}function Qv(e){let t=ys(e.l),r=ys(e.u);return Q(t,r,t==r?e.deco:Vt(e.deco))}function Yv(e,t){let r=Ut(0,t.l),n=Mt(0,t.u);if(t.l<=0&&t.u>=0||!isFinite(e.l)||!isFinite(e.u)||!isFinite(t.l)||!isFinite(t.u))return Q(r,n,fr(nr(e.deco,t.deco)));let o=xf(e,Yc(t,Qv(Tf(e,t)))),a=Mt(o.l,r),i=Ut(o.u,n);return a<=i?Q(a,i,o.deco):Q(r,n,Vt(o.deco))}function Xv(e,t){return Q(Ut(e.l,t.l),Ut(e.u,t.u),nr(e.deco,t.deco))}function Zv(e,t){return Q(Mt(e.l,t.l),Mt(e.u,t.u),nr(e.deco,t.deco))}var{cosh:MP,sinh:SP,tanh:CP,acosh:kP,asinh:qP,atanh:EP,expm1:NP,log1p:IP,sign:AP,hypot:PP}=Math;var RP=Symbol("DIVERGES");var bs=class bs{constructor(t=bs.defaultLimit,r){this.currentSize=0;this.limit=t,this.computeSize=r,this.cache=new Map}get(t){let r=this.cache.get(t);return r&&(this.cache.delete(t),this.cache.set(t,r)),r==null?void 0:r.value}set(t,r){let n=this.computeSize?this.computeSize(r):1;if(this.currentSize+n>=this.limit){let o=this.cache.keys().next().value;o&&this.cache.delete(o)}this.cache.set(t,{size:n,value:r})}};bs.defaultLimit=1e5;var vf=bs,eM=1e4,DP=eM*2;var LP=Math.pow(2,27)+1;var OP=[1/6,-1/30,1/42,-1/30,5/66,-691/2730,7/6,-3617/510,43867/798,-174611/330,854513/138,-236364091/2730,8553103/6,-23749461029/870];var _P=1/Math.PI;var FP=[1/4,1/96,-1/384,-1/10240,19/368640,79/61931520,-55/49545216,-2339/118908518400,11813/475634073600,677/1993133260800,-2117/3720515420160];var BP=Math.sqrt(Number.MAX_VALUE)/4;function tM(e,t){return{n:e,d:t,__float:e/t}}function fa(e){return typeof e=="object"&&typeof e.n=="number"&&typeof e.d=="number"}var Mf=Math.pow(2,53)-1;function qn(e){return fa(e)?e.__float:+e}function mr(e,t){if(!isFinite(e)||!isFinite(t)||t===0||Math.floor(e)!==e||Math.floor(t)!==t||Math.abs(e)>Mf||Math.abs(t)>Mf)return e/t;t<0&&(e=-e,t=-t);let r=Ec(e,t);return tM(e/r,t/r)}var or=class extends Xr{constructor(t,r){if(!Array.isArray(t))throw new TypeError("Argument to expression constructor must be an Array.");super(),this.args=t,(!r||!r.skipRegisterDependencies)&&this.registerDependencies()}shouldExportAns(){return!0}registerDependencies(){for(let t=0;t<this.args.length;t++)this.mergeDependencies(this.args[t])}copyWithArgs(t){throw new Error(`Programming Error: copyWithArgs not implemented for ${this.constructor.name}`)}};var Xc=class extends or{constructor(t){super([]),typeof t=="number"&&(t=mr(t,1)),this._constantValue=t}asValue(){let t=this._constantValue;return typeof t=="boolean"?t:qn(t)}asCompilerValue(){return this._constantValue}scalarExprString(){return this.asValue()>0?String(this.asValue()):"("+String(this.asValue())+")"}isNaN(){let t=this.asValue();return typeof t=="number"&&isNaN(t)}},ar=class extends Xc{constructor(){super(...arguments);this.type="Constant"}};function tu(e){if(!fa(e))throw new Error("Programming Error: numeric constants should be rational");return{type:1,valueType:m,value:e,mobility:Kc.Cold}}var _r=tu(mr(0,1)),Jr=tu(mr(1,1)),So=tu(mr(1,2));function X(e){return e.map(t=>A(t))}function zt(e){return e.map(t=>Ze(t))}function R(e,t){var I,$,C,M,S;let r=t==null?void 0:t.defaultArguments,n=1/0,o=0,a=(I=r==null?void 0:r.length)!=null?I:0;for(let _ of e){let B=_.minArity-a;B<n&&(n=B);let W=($=_.maxArity)!=null?$:1/0;W>o&&(o=W)}let i=(C=t==null?void 0:t.fallthroughUnlessDistribution)!=null?C:!1,s=(M=t==null?void 0:t.allowDotCall)!=null?M:!1,c=(S=t==null?void 0:t.isSeeded)!=null?S:!1,f=t==null?void 0:t.minArityExampleArgs,h=t==null?void 0:t.maxArityExampleArgs,w=t==null?void 0:t.dotMinArityExampleArgs,N=t==null?void 0:t.dotMaxArityExampleArgs;return{minArity:n,getSignatures:_=>e.filter(B=>B.satisfiesPolicy(_)),maxArity:o,defaultArguments:r,fallthroughUnlessDistribution:i,minArityExampleArgs:f,maxArityExampleArgs:h,dotMinArityExampleArgs:w,dotMaxArityExampleArgs:N,allowDotCall:s,isSeeded:c}}function ya(){return R(X([{type:"variadic",initial:[],rest:pt}]),{})}var xs=Ge.of([we,he,ue,Ae,de]),Zc=Ge.of([we,ue,Ae,Pe]),vo=Ge.of([L,we,he,ue,Ae,Pe,de,be,Te,ge,ie]),Jc=Ge.of([...Pr.types.filter(e=>e!==Cn),mt]),eu=Ge.of([pt,Xe],{coerceComplexToReal:!1});function ve(e){return[Ze([ps(e)]),Ze([e]),A({type:"variadic",initial:[e,e],rest:e})]}function Mo(e){return[Ze([ps(e),ps(e)])]}var ru={midpoint:R([...X([[L,L],[we]]),...X([[oe,oe],[bt]])],{allowDotCall:!0}),segment:R([A([L,L]),A([oe,oe])]),vector:R([A([L,L]),A([oe,oe])]),sphere:R([A([L,m]),A([oe,m])]),distance:R(X([[L,L],[oe,oe]])),glider:R(X([[Ge.of([we,he,ue,Ae,de,be]),m]])),circle:R(X([[L,we],[L,L],[L,m]]),{}),center:R(X([[he],[de]]),{allowDotCall:!0}),radius:R(X([[he],[de]]),{allowDotCall:!0}),intersection:R(X([[xs,xs]])),strictintersection:R(X([[xs,xs]])),parallel:R(X([[Zc,L]])),perpendicular:R(X([[Zc,L]])),anglebisector:R(X([[Gm]])),start:R([A([Pe]),A([ot])],{allowDotCall:!0}),end:R([A([Pe]),A([ot])],{allowDotCall:!0}),area:R([A([be])]),length:R([Ze([Pr],{geometry:!1,"3d":!1}),A([bt]),A([ot]),A([we]),A([Pe]),A([de]),Ze({type:"variadic",initial:[pt],rest:pt},{geometry:!1,"3d":!1})],{allowDotCall:!0}),translate:R(X([[vo,Pe],[vo,L,L]])),dilate:R(X([[vo,L,m]])),rotate:R(X([[vo,L,m]])),reflect:R(X([[vo,Zc]])),apply:R(X([[ie,vo]])),points:R([]),lines:R([]),circles:R([]),arcs:R([]),polygons:R([]),rays:R([]),vectors:R([]),angle:R(X([[L,L,L]])),directedangle:R(X([[L,L,L]])),angles:R(zt([[be]]),{allowDotCall:!0}),perimeter:R(X([[be]]),{allowDotCall:!0}),directedangles:R(zt([[be]]),{allowDotCall:!0}),coterminal:R(X([[Te],[ge]])),round:R([...X([[ae],[ae,m]]),...X([[k],[k,m]])]),mod:R([...X([[ae,ae]]),...X([[k,k]])]),floor:R([...X([[ae]]),...X([[k]])]),ceil:R([...X([[ae]]),...X([[k]])]),abs:R([...X([[ae]]),...X([[k]])]),sign:R([A([ae]),A([k])]),coerceToReal:R([...X([[pt]])]),real:R([A([k])],{allowDotCall:!0}),imag:R([A([k])],{allowDotCall:!0}),conj:R([...X([[ae]]),...X([[k]])]),exp:R([A([ae]),A([k])]),sin:R([A([ae]),A([k])]),cos:R([A([ae]),A([k])]),tan:R([A([ae]),A([k])]),sinh:R([A([ae]),A([k])]),cosh:R([A([ae]),A([k])]),tanh:R([A([ae]),A([k])]),sec:R([A([ae]),A([k])]),csc:R([A([ae]),A([k])]),cot:R([A([ae]),A([k])]),sech:R([A([ae]),A([k])]),csch:R([A([ae]),A([k])]),coth:R([A([ae]),A([k])]),arctan:R([A([ae]),A([k]),...X([[m,m]])]),arcsinh:R([A([ae]),A([k])]),arccot:R([A([ae]),A([k])]),arccsch:R([A([ae]),A([k])]),nthroot:R([...X([[m,m]])]),complexNthRoot:R([...X([[k,k]])]),repeat:R(zt([[Bm,m],[Pr,U]])),sort:R(zt([[$c],[dt],[Pr,$c],[Pr,dt]]),{minArityExampleArgs:"([3,2,1])",maxArityExampleArgs:"([1,2,3],[3,2,1])",dotMaxArityExampleArgs:"([3,4])",allowDotCall:!0}),shuffle:R(zt([[Ke,Pr],[Ke,Pr,m]]),{minArityExampleArgs:"([1,2,3])",maxArityExampleArgs:"([1,2,3],2)",dotMaxArityExampleArgs:"(2)",allowDotCall:!0,isSeeded:!0}),join:R(zt([{type:"variadic",initial:[eu,eu],rest:eu}]),{minArityExampleArgs:"([1,2],[3,4])",dotMinArityExampleArgs:"([3,4])",allowDotCall:!0}),unique:R(zt([[Ge.of(Pr.types.filter(e=>e!==Cn&&e!==Xe),{coerceComplexToReal:!1})]]),{minArityExampleArgs:"([1,2,3])",maxArityExampleArgs:"([1,2,3])",allowDotCall:!0}),normaldist:R(X([[m,m]]),{defaultArguments:[_r,Jr]}),tdist:R(X([[m,m,m]]),{defaultArguments:[_r,Jr]}),chisqdist:R(X([[m]])),binomialdist:R(X([[m,m]]),{defaultArguments:[So]}),poissondist:R(X([[m]])),geodist:R(X([[m]]),{defaultArguments:[So]}),uniformdist:R(X([[m,m]]),{defaultArguments:[_r,Jr]}),discretedist:R(zt([[U],[U,U]])),pdf:R(X([[mt,m]]),{allowDotCall:!0}),cdf:R(X([[mt,m],[mt,m,m]]),{allowDotCall:!0}),median:R([...X([[mt]]),...ve(m)],{fallthroughUnlessDistribution:!0,allowDotCall:!0}),stdev:R([...X([[mt]]),...ve(ae),...ve(k)],{fallthroughUnlessDistribution:!0,allowDotCall:!0}),stdevp:R([...ve(ae),...ve(k)],{allowDotCall:!0}),var:R([...X([[mt]]),...ve(ae),...ve(k)],{fallthroughUnlessDistribution:!0,allowDotCall:!0}),cov:R([...Mo(ae),...Mo(k)]),covp:R([...Mo(ae),...Mo(k)]),corr:R([...Mo(ae),...Mo(k)]),quantile:R([...X([[mt,m]]),Ze([U,Rr(m)])],{fallthroughUnlessDistribution:!0,allowDotCall:!0,minArityExampleArgs:"([1,2,3], 1)",maxArityExampleArgs:"([1,2,3], 1)",dotMinArityExampleArgs:"(x)",dotMaxArityExampleArgs:"(x)"}),random:R([Ze([Ke]),...zt([[Ke,m],[Ke,m,m],[Ke,Jc],[Ke,Jc,m],[Ke,Jc,m,m]])],{allowDotCall:!0,isSeeded:!0}),polygon:R([Ze([]),...ve(L),...zt([[U,U],[m,U],[U,m]])]),total:R([...ve(ae),...ve(k),...ve(L),...ve(oe)],{allowDotCall:!0}),mean:R([A([mt]),...ve(ae),...ve(k),...ve(L),...ve(oe)],{fallthroughUnlessDistribution:!0,allowDotCall:!0}),varp:R([A([mt]),...ve(ae),...ve(k)],{fallthroughUnlessDistribution:!0,allowDotCall:!0}),mad:R([...ve(ae),...ve(k)]),lcm:R([...ve(ae),...ve(k)],{allowDotCall:!0}),gcd:R([...ve(ae),...ve(k)],{allowDotCall:!0}),min:R([...ve(m),A([Gt])],{allowDotCall:!0}),lower:R([A([Gt])],{allowDotCall:!0}),max:R([...ve(m),A([Gt])],{allowDotCall:!0}),upper:R([A([Gt])],{allowDotCall:!0}),ztest:R([Ze([U,Rr(m)]),A([m,m,m]),Ze([U,Rr(m),U,Rr(m)]),A([m,m,m,m,m,m])]),zproptest:R(X([[m,m],[m,m,m,m]])),ttest:R([Ze([U]),A([m,m,m]),Ze([U,U]),A([m,m,m,m,m,m])]),null:R([A([tt,m]),A([rt,m]),A([nt,m]),A([ft,m]),A([gt,m]),A([ht,m]),A([yt,m])],{allowDotCall:!0}),conf:R([A([tt,m]),A([rt,m]),A([nt,m]),A([ft,m]),A([gt,m]),A([ht,m]),A([yt,m])],{allowDotCall:!0}),score:R([A([tr]),A([$t]),A([tt]),A([rt]),A([nt]),A([ft]),A([gt]),A([ht]),A([yt]),A([Kr]),A([jr])],{allowDotCall:!0}),pleft:R([A([tr]),A([$t]),A([tt]),A([rt]),A([nt]),A([ft]),A([gt]),A([ht]),A([yt])],{allowDotCall:!0}),pright:R([A([tr]),A([$t]),A([tt]),A([rt]),A([nt]),A([ft]),A([gt]),A([ht]),A([yt])],{allowDotCall:!0}),dof:R([A([tt]),A([rt]),A([nt]),A([$t]),A([Kr]),A([jr])],{allowDotCall:!0}),stderr:R([A([tt]),A([rt]),A([nt]),A([ft]),A([gt]),A([ht]),A([yt])],{allowDotCall:!0}),estimate:R([A([tt]),A([rt]),A([nt]),A([ft]),A([gt]),A([ht]),A([yt])],{allowDotCall:!0}),chisqtest:R(zt([{type:"variadic",initial:[U,U],rest:U}])),chisqgof:R(zt([[U],[U,U]])),histogram:ya(),dotplot:ya(),boxplot:ya(),stats:ya(),inv:ya()};function rM(e){switch(e){case"default":case"trig":case"inverseTrig":case"trig2":case"never-broadcast":return[m];case"reducer":return[U];case"doubleReducer":return[U,U];case"parameterizedReducer":return[U,m];case"color":return[m,m,m]}}function nM(e){switch(e){case"default":case"trig":case"inverseTrig":case"trig2":case"doubleReducer":case"color":case"never-broadcast":return!1;case"reducer":case"parameterizedReducer":return!0}}function oM(e,t,r){return e==="reducer"?1/0:t+r}function g(e,t,r){var I,$,C,M,S;r===void 0&&(r={});let n=(I=r.tag)!=null?I:"default",o=($=r.argumentTypes)!=null?$:rM(n),a=r.defaultArguments?r.defaultArguments.length:0,i=o.length-a,s=oM(n,i,a),c=(C=r.allowDotCall)!=null?C:nM(n),f=(M=r.noPeel)!=null?M:!1,{defaultArguments:h,minArityExampleArgs:w,maxArityExampleArgs:N}=r;return{module:e,symbol:t,argumentTypes:o,defaultArguments:h,returnType:(S=r.returnType)!=null?S:m,tag:n,minArity:i,maxArity:s,allowDotCall:c,noPeel:f,minArityExampleArgs:w,maxArityExampleArgs:N,intervalName:r.intervalName}}function Sf(e){let t;return e in Ts&&(t=Ts[e].tag),t==="trig"||t==="trig2"||t==="inverseTrig"?!0:e==="angle"||e==="angles"||e==="directedangle"||e==="directedangles"||e==="rotate"}var Ts={sin:g("BuiltIn","sin",{tag:"trig",intervalName:"IBuiltIn.sin"}),cos:g("BuiltIn","cos",{tag:"trig",intervalName:"IBuiltIn.cos"}),tan:g("BuiltIn","tan",{tag:"trig"}),cot:g("BuiltIn","cot",{tag:"trig"}),sec:g("BuiltIn","sec",{tag:"trig"}),csc:g("BuiltIn","csc",{tag:"trig"}),arcsin:g("Math","asin",{tag:"inverseTrig"}),arccos:g("Math","acos",{tag:"inverseTrig"}),arctan:g("Math","atan2",{argumentTypes:[m,m],tag:"inverseTrig"}),arccot:g("BuiltIn","acot",{tag:"inverseTrig"}),arcsec:g("BuiltIn","asec",{tag:"inverseTrig"}),arccsc:g("BuiltIn","acsc",{tag:"inverseTrig"}),sinh:g("BuiltIn","sinh"),cosh:g("BuiltIn","cosh"),tanh:g("BuiltIn","tanh"),coth:g("BuiltIn","coth"),sech:g("BuiltIn","sech"),csch:g("BuiltIn","csch"),arcsinh:g("BuiltIn","asinh"),arccosh:g("BuiltIn","acosh"),arctanh:g("BuiltIn","atanh"),arccoth:g("BuiltIn","acoth"),arcsech:g("BuiltIn","asech"),arccsch:g("BuiltIn","acsch"),sqrt:g("Math","sqrt",{intervalName:"IBuiltIn.sqrt"}),rtxsqpone:g("BuiltIn","sqrtxsqp1"),rtxsqmone:g("BuiltIn","sqrtxsqm1"),hypot:g("BuiltIn","hypot",{argumentTypes:[m,m],intervalName:"IBuiltIn.hypot"}),log:g("BuiltIn","common_log"),logbase:g("BuiltIn","log_base",{argumentTypes:[m,m]}),ln:g("BuiltIn","log"),exp:g("Math","exp"),floor:g("Math","floor"),complexFloor:g("BuiltIn","complexFloor",{argumentTypes:[k],returnType:k}),ceil:g("Math","ceil"),complexCeil:g("BuiltIn","complexCeil",{argumentTypes:[k],returnType:k}),round:g("Math","round"),complexRound:g("BuiltIn","complexRound",{argumentTypes:[k],returnType:k}),abs:g("Math","abs",{intervalName:"IBuiltIn.abs"}),sign:g("BuiltIn","sign"),mod:g("BuiltIn","mod",{argumentTypes:[m,m],intervalName:"IBuiltIn.mod"}),complexMod:g("BuiltIn","complexMod",{argumentTypes:[k,k],returnType:k}),nCr:g("BuiltIn","nCr",{argumentTypes:[m,m]}),nPr:g("BuiltIn","nPr",{argumentTypes:[m,m]}),factorial:g("BuiltIn","factorial"),polyGamma:g("BuiltIn","polyGamma",{argumentTypes:[m,m]}),lcm:g("BuiltIn","listLCM",{tag:"reducer"}),complexLCM:g("BuiltIn","complexListLCM",{argumentTypes:[dt],returnType:k,tag:"reducer"}),gcd:g("BuiltIn","listGCD",{tag:"reducer"}),complexGCD:g("BuiltIn","complexListGCD",{argumentTypes:[dt],returnType:k,tag:"reducer"}),distance:g("BuiltIn","distance",{argumentTypes:[L,L]}),polygon:g("BuiltIn","polygon",{tag:"reducer",argumentTypes:[Ir],returnType:be}),rowMatrix:g("BuiltIn","rowMatrix",{argumentTypes:[U],returnType:ee,tag:"never-broadcast"}),vcat:g("BuiltIn","vcat",{argumentTypes:[Ar],returnType:ee,tag:"never-broadcast"}),rows:g("BuiltIn","rows",{argumentTypes:[ee],returnType:Ar,tag:"never-broadcast",allowDotCall:!0}),hcat:g("BuiltIn","hcat",{argumentTypes:[Ar],returnType:ee,tag:"never-broadcast"}),assertColCount:g("BuiltIn","assertColCount",{argumentTypes:[ee,m],returnType:ee,tag:"never-broadcast"}),zeroMatrix:g("BuiltIn","zeroMatrix",{argumentTypes:[m,m],returnType:ee,tag:"never-broadcast"}),columns:g("BuiltIn","columns",{argumentTypes:[ee],returnType:Ar,tag:"never-broadcast",allowDotCall:!0}),matrixAdd:g("BuiltIn","matrixAdd",{argumentTypes:[ee,ee],returnType:ee}),matrixSubtract:g("BuiltIn","matrixSubtract",{argumentTypes:[ee,ee],returnType:ee}),matrixMultiply:g("BuiltIn","matrixMultiply",{argumentTypes:[ee,ee],returnType:ee}),matrixPow:g("BuiltIn","matrixPow",{argumentTypes:[ee,m],returnType:ee}),matrixNegate:g("BuiltIn","matrixNegate",{argumentTypes:[ee],returnType:ee}),matrixScale:g("BuiltIn","matrixScale",{argumentTypes:[ee,m],returnType:ee}),matrixScalarDivide:g("BuiltIn","matrixScalarDivide",{argumentTypes:[ee,m],returnType:ee}),det:g("BuiltIn","det",{argumentTypes:[ee],returnType:m,allowDotCall:!0}),trace:g("BuiltIn","trace",{argumentTypes:[ee],returnType:m,allowDotCall:!0,noPeel:!0}),rref:g("BuiltIn","rref",{argumentTypes:[ee],returnType:ee,allowDotCall:!0}),transpose:g("BuiltIn","transpose",{argumentTypes:[ee],returnType:ee,allowDotCall:!0}),matrixElement:g("BuiltIn","matrixElement",{argumentTypes:[ee,m,m],returnType:m,tag:"never-broadcast",noPeel:!0}),rowCount:g("BuiltIn","rowCount",{argumentTypes:[ee],returnType:m,noPeel:!0}),colCount:g("BuiltIn","colCount",{argumentTypes:[ee],returnType:m,noPeel:!0}),submatrix:g("BuiltIn","submatrix",{argumentTypes:[ee,U,U],returnType:ee,tag:"never-broadcast",noPeel:!0}),trapezoidalPartition:g("BuiltIn","trapezoidalPartition",{argumentTypes:[be],returnType:yo,noPeel:!0}),pointDet:g("BuiltIn","pointDet",{argumentTypes:[L,L]}),pointDot:g("BuiltIn","pointDot",{argumentTypes:[L,L]}),pointPerp:g("BuiltIn","pointPerp",{argumentTypes:[L],returnType:L}),complexMultiplyPoints:g("BuiltIn","complexMultiplyPoints",{argumentTypes:[L,L],returnType:L}),segment:g("BuiltIn","segment",{argumentTypes:[L,L],returnType:we}),line:g("BuiltIn","line",{argumentTypes:[L,L],returnType:ue}),ray:g("BuiltIn","ray",{argumentTypes:[L,L],returnType:Ae}),vector:g("BuiltIn","vector",{argumentTypes:[L,L],returnType:Pe}),vectorThreeD:g("BuiltIn","vectorThreeD",{argumentTypes:[oe,oe],returnType:ot}),mathVector:g("BuiltIn","mathVector",{argumentTypes:[L,L],returnType:Pe}),mathVectorThreeD:g("BuiltIn","mathVectorThreeD",{argumentTypes:[oe,oe],returnType:ot}),vectorDisplacementAsPoint:g("BuiltIn","vectorDisplacementAsPoint",{argumentTypes:[Pe],returnType:L,noPeel:!0}),vectorThreeDDisplacementAsPoint:g("BuiltIn","vectorThreeDDisplacementAsPoint",{argumentTypes:[ot],returnType:oe,noPeel:!0}),basePointFromVector:g("BuiltIn","basePointFromVector",{argumentTypes:[Pe],returnType:L,noPeel:!0}),basePointFromVectorThreeD:g("BuiltIn","basePointFromVectorThreeD",{argumentTypes:[ot],returnType:oe,noPeel:!0}),circle:g("BuiltIn","circle",{argumentTypes:[L,m],returnType:he}),center:g("BuiltIn","center",{argumentTypes:[he],returnType:L,allowDotCall:!0,noPeel:!0}),radius:g("BuiltIn","radius",{argumentTypes:[he],returnType:m,allowDotCall:!0,noPeel:!0}),arc:g("BuiltIn","arc",{argumentTypes:[L,L,L],returnType:de}),arcCenter:g("BuiltIn","arcCenter",{argumentTypes:[de],returnType:L}),arcFirstPoint:g("BuiltIn","arcFirstPoint",{argumentTypes:[de],returnType:L,noPeel:!0}),arcMiddlePoint:g("BuiltIn","arcMiddlePoint",{argumentTypes:[de],returnType:L,noPeel:!0}),arcThirdPoint:g("BuiltIn","arcThirdPoint",{argumentTypes:[de],returnType:L,noPeel:!0}),arcOmega:g("BuiltIn","arcOmega",{argumentTypes:[de],returnType:m}),undirectedAngleMarker:g("BuiltIn","undirectedAngleMarker",{argumentTypes:[ge],returnType:Te}),directedAngleMarker:g("BuiltIn","directedAngleMarker",{argumentTypes:[L,m,m,m],returnType:ge}),directedCoterminalAngle:g("BuiltIn","directedCoterminalAngle",{argumentTypes:[ge],returnType:ge}),undirectedCoterminalAngle:g("BuiltIn","undirectedCoterminalAngle",{argumentTypes:[Te],returnType:Te}),supplement:g("BuiltIn","supplementAngle",{argumentTypes:[ge],returnType:ge}),directedAngleMarkerRawDelta:g("BuiltIn","angleMarkerRawDelta",{argumentTypes:[ge],returnType:m,noPeel:!0}),undirectedAngleMarkerRawDelta:g("BuiltIn","angleMarkerRawDelta",{argumentTypes:[Te],returnType:m,noPeel:!0}),directedAngleMarkerMultiplier:g("BuiltIn","angleMarkerMultiplier",{argumentTypes:[ge],returnType:m,noPeel:!0}),undirectedAngleMarkerMultiplier:g("BuiltIn","angleMarkerMultiplier",{argumentTypes:[Te],returnType:m,noPeel:!0}),polygonInteriorUndirectedAngles:g("BuiltIn","polygonInteriorUndirectedAngles",{argumentTypes:[be,m],returnType:go,allowDotCall:!0,tag:"never-broadcast"}),polygonInteriorDirectedAngles:g("BuiltIn","polygonInteriorDirectedAngles",{argumentTypes:[be,m],returnType:ho,allowDotCall:!0,tag:"never-broadcast"}),vertices:g("BuiltIn","vertices",{argumentTypes:[be],returnType:Ir,allowDotCall:!0,tag:"never-broadcast"}),segments:g("BuiltIn","polygonEdges",{argumentTypes:[be],returnType:fo,allowDotCall:!0,tag:"never-broadcast"}),scaleTangentTransformation:g("BuiltIn","scaleTangentTransformation",{argumentTypes:[ie,m],returnType:be}),scaleTangentPolygon:g("BuiltIn","scaleTangentPolygon",{argumentTypes:[be,m],returnType:be}),scaleTangentSegment:g("BuiltIn","scaleTangentSegment",{argumentTypes:[we,m],returnType:we}),scaleTangentLine:g("BuiltIn","scaleTangentLine",{argumentTypes:[ue,m],returnType:ue}),scaleTangentRay:g("BuiltIn","scaleTangentRay",{argumentTypes:[Ae,m],returnType:Ae}),scaleTangentCircle:g("BuiltIn","scaleTangentCircle",{argumentTypes:[he,m],returnType:he}),scaleTangentArc:g("BuiltIn","scaleTangentArc",{argumentTypes:[de,m],returnType:he}),scaleTangentDirectedAngleMarker:g("BuiltIn","scaleTangentAngle",{argumentTypes:[ge,m],returnType:ge}),scaleTangentUndirectedAngleMarker:g("BuiltIn","scaleTangentAngle",{argumentTypes:[Te,m],returnType:Te}),addTangentPolygon:g("BuiltIn","addTangentPolygon",{argumentTypes:[be,be],returnType:be}),addTangentSegment:g("BuiltIn","addTangentSegment",{argumentTypes:[we,we],returnType:we}),addTangentSegmentThreeD:g("BuiltIn","addTangentSegmentThreeD",{argumentTypes:[bt,bt],returnType:bt}),addTangentLine:g("BuiltIn","addTangentLine",{argumentTypes:[ue,ue],returnType:ue}),addTangentRay:g("BuiltIn","addTangentRay",{argumentTypes:[Ae,Ae],returnType:Ae}),addTangentVector:g("BuiltIn","addTangentVector",{argumentTypes:[Pe,Pe],returnType:Pe}),addTangentCircle:g("BuiltIn","addTangentCircle",{argumentTypes:[he,he],returnType:he}),addTangentArc:g("BuiltIn","addTangentArc",{argumentTypes:[de,de],returnType:de}),addTangentTransformation:g("BuiltIn","addTangentTransformation",{argumentTypes:[ie,ie],returnType:ie}),addTangentDirectedAngleMarker:g("BuiltIn","addTangentAngle",{argumentTypes:[ge,ge],returnType:ge}),addTangentUndirectedAngleMarker:g("BuiltIn","addTangentAngle",{argumentTypes:[Te,Te],returnType:Te}),segmentGlider:g("BuiltIn","segmentGlider",{argumentTypes:[we,m],returnType:L}),segmentThreeDGlider:g("BuiltIn","segmentThreeDGlider",{argumentTypes:[bt,m],returnType:oe}),lineGlider:g("BuiltIn","lineGlider",{argumentTypes:[ue,m],returnType:L}),rayGlider:g("BuiltIn","rayGlider",{argumentTypes:[Ae,m],returnType:L}),circleGlider:g("BuiltIn","circleGlider",{argumentTypes:[he,m],returnType:L}),arcGlider:g("BuiltIn","arcGlider",{argumentTypes:[de,m],returnType:L}),polygonEdgeByParameter:g("BuiltIn","polygonEdgeByParameter",{argumentTypes:[be,m],returnType:we,noPeel:!0}),polygonGlider:g("BuiltIn","polygonGlider",{argumentTypes:[be,m],returnType:L,noPeel:!0}),chooseNonIncidentPoint:g("BuiltIn","chooseNonIncidentPoint",{argumentTypes:[L,L,L],returnType:L,noPeel:!0}),circleCircleIntersection:g("BuiltIn","circleCircleIntersection",{argumentTypes:[he,he,m],returnType:L}),circleArcIntersection:g("BuiltIn","circleArcIntersection",{argumentTypes:[he,de,m],returnType:L}),circleLineIntersection:g("BuiltIn","circleLineIntersection",{argumentTypes:[he,ue,m],returnType:L}),arcCircleIntersection:g("BuiltIn","arcCircleIntersection",{argumentTypes:[de,he,m],returnType:L}),arcArcIntersection:g("BuiltIn","arcArcIntersection",{argumentTypes:[de,de,m],returnType:L}),arcLineIntersection:g("BuiltIn","arcLineIntersection",{argumentTypes:[de,ue,m],returnType:L}),lineCircleIntersection:g("BuiltIn","lineCircleIntersection",{argumentTypes:[ue,he,m],returnType:L}),lineArcIntersection:g("BuiltIn","lineArcIntersection",{argumentTypes:[ue,de,m],returnType:L}),lineLineIntersection:g("BuiltIn","lineLineIntersection",{argumentTypes:[ue,ue,m],returnType:L}),lineFromSegment:g("BuiltIn","identity",{argumentTypes:[we],returnType:ue}),lineFromRay:g("BuiltIn","identity",{argumentTypes:[Ae],returnType:ue}),parallel:g("BuiltIn","parallel",{argumentTypes:[ue,L],returnType:ue}),perpendicular:g("BuiltIn","perpendicular",{argumentTypes:[ue,L],returnType:ue}),anglebisector:g("BuiltIn","anglebisector",{argumentTypes:[Te],returnType:Ae}),directedanglebisector:g("BuiltIn","anglebisector",{argumentTypes:[ge],returnType:Ae}),rawTransform:g("BuiltIn","rawTransform",{argumentTypes:[L,L],returnType:ie}),rawTransformConj:g("BuiltIn","rawTransformConj",{argumentTypes:[L,L],returnType:ie}),transformWithoutTranslation:g("BuiltIn","transformWithoutTranslation",{argumentTypes:[ie],returnType:ie,noPeel:!0}),transformScaleFactor:g("BuiltIn","transformScaleFactor",{argumentTypes:[ie],returnType:L,noPeel:!0}),translation:g("BuiltIn","translation",{argumentTypes:[L],returnType:ie}),dilation:g("BuiltIn","dilation",{argumentTypes:[L,m],returnType:ie}),rotation:g("BuiltIn","rotation",{tag:"trig2",argumentTypes:[L,m],returnType:ie}),reflection:g("BuiltIn","reflection",{argumentTypes:[ue],returnType:ie}),compose:g("BuiltIn","composeTransformation",{argumentTypes:[ie,ie],returnType:ie}),inverse:g("BuiltIn","invertTransformation",{argumentTypes:[ie],returnType:ie}),transformPoint:g("BuiltIn","transformPoint",{argumentTypes:[ie,L],returnType:L}),transformSegment:g("BuiltIn","transformSegment",{argumentTypes:[ie,we],returnType:we}),transformLine:g("BuiltIn","transformLine",{argumentTypes:[ie,ue],returnType:ue}),transformRay:g("BuiltIn","transformRay",{argumentTypes:[ie,Ae],returnType:Ae}),transformVector:g("BuiltIn","transformVector",{argumentTypes:[ie,Pe],returnType:Pe}),transformCircle:g("BuiltIn","transformCircle",{argumentTypes:[ie,he],returnType:he}),transformArc:g("BuiltIn","transformArc",{argumentTypes:[ie,de],returnType:de}),transformPolygon:g("BuiltIn","transformPolygon",{argumentTypes:[ie,be],returnType:be}),transformAngleMarker:g("BuiltIn","transformAngleMarker",{argumentTypes:[ie,Te],returnType:Te}),transformDirectedAngleMarker:g("BuiltIn","transformAngleMarker",{argumentTypes:[ie,ge],returnType:ge}),distanceThreeD:g("BuiltIn","distanceThreeD",{argumentTypes:[oe,oe]}),segmentThreeD:g("BuiltIn","segmentThreeD",{argumentTypes:[oe,oe],returnType:bt}),triangle:g("BuiltIn","triangle",{argumentTypes:[oe,oe,oe],returnType:Qr}),sphere:g("BuiltIn","sphere",{argumentTypes:[oe,m],returnType:Yr}),mean:g("BuiltIn","mean",{tag:"reducer"}),total:g("BuiltIn","total",{tag:"reducer"}),cumulativeSum:g("BuiltIn","cumulativeSum",{argumentTypes:[U],returnType:U,tag:"never-broadcast"}),stdev:g("BuiltIn","stdev",{tag:"reducer"}),stdevp:g("BuiltIn","stdevp",{tag:"reducer"}),mad:g("BuiltIn","mad",{tag:"reducer"}),count:g("BuiltIn","listLength",{tag:"reducer",argumentTypes:[Xe],noPeel:!0}),listMin:g("BuiltIn","listMin",{tag:"reducer"}),listMax:g("BuiltIn","listMax",{tag:"reducer"}),min:g("Math","min",{argumentTypes:[m,m],returnType:m,intervalName:"IBuiltIn.min"}),max:g("Math","max",{argumentTypes:[m,m],returnType:m,intervalName:"IBuiltIn.max"}),argmin:g("BuiltIn","argMin",{tag:"reducer",noPeel:!0}),argmax:g("BuiltIn","argMax",{tag:"reducer",noPeel:!0}),median:g("BuiltIn","median",{tag:"reducer"}),var:g("BuiltIn","variance",{tag:"reducer"}),varp:g("BuiltIn","varp",{tag:"reducer"}),cov:g("BuiltIn","cov",{tag:"doubleReducer",noPeel:!0}),covp:g("BuiltIn","covp",{tag:"doubleReducer",noPeel:!0}),corr:g("BuiltIn","corr",{tag:"doubleReducer",noPeel:!0}),spearman:g("BuiltIn","spearman",{tag:"doubleReducer",noPeel:!0}),quantile:g("BuiltIn","quantile",{tag:"parameterizedReducer"}),quartile:g("BuiltIn","quartile",{tag:"parameterizedReducer"}),upperQuantileIndex:g("BuiltIn","upperQuantileIndex",{tag:"parameterizedReducer",noPeel:!0}),lowerQuantileIndex:g("BuiltIn","lowerQuantileIndex",{tag:"parameterizedReducer",noPeel:!0}),quartileIndex:g("BuiltIn","quartileIndex",{tag:"parameterizedReducer",noPeel:!0}),upperQuartileIndex:g("BuiltIn","upperQuartileIndex",{tag:"parameterizedReducer",noPeel:!0}),lowerQuartileIndex:g("BuiltIn","lowerQuartileIndex",{tag:"parameterizedReducer",noPeel:!0}),sortedLastLessIndex:g("BuiltIn","sortedLastLessIndex",{tag:"parameterizedReducer",noPeel:!0}),sortedLastLessEqualIndex:g("BuiltIn","sortedLastLessEqualIndex",{tag:"parameterizedReducer",noPeel:!0}),normalcdf:g("BuiltIn","normalcdf",{argumentTypes:[m,m,m,m],defaultArguments:[_r,Jr]}),normalpdf:g("BuiltIn","normalpdf",{argumentTypes:[m,m,m],defaultArguments:[_r,Jr]}),binomcdf:g("BuiltIn","binomcdf",{argumentTypes:[m,m,m,m],defaultArguments:[So]}),binompdf:g("BuiltIn","binompdf",{argumentTypes:[m,m,m],defaultArguments:[So]}),poissoncdf:g("BuiltIn","poissoncdf",{argumentTypes:[m,m,m]}),poissonpdf:g("BuiltIn","poissonpdf",{argumentTypes:[m,m]}),geocdf:g("BuiltIn","geocdf",{argumentTypes:[m,m,m]}),geopdf:g("BuiltIn","geopdf",{argumentTypes:[m,m]}),uniformcdf:g("BuiltIn","uniformcdf",{argumentTypes:[m,m,m,m],defaultArguments:[_r,Jr]}),uniformpdf:g("BuiltIn","uniformpdf",{argumentTypes:[m,m,m],defaultArguments:[_r,Jr]}),invT:g("BuiltIn","invT",{argumentTypes:[m,m]}),invPoisson:g("BuiltIn","invPoisson",{argumentTypes:[m,m]}),invGeo:g("BuiltIn","invGeo",{argumentTypes:[m,m]}),invBinom:g("BuiltIn","invBinom",{argumentTypes:[m,m,m]}),invUniform:g("BuiltIn","invUniform",{argumentTypes:[m,m,m]}),tpdf:g("BuiltIn","tpdf",{argumentTypes:[m,m]}),tcdf:g("BuiltIn","tcdf",{argumentTypes:[m,m,m,m,m]}),erf:g("BuiltIn","erf"),invNorm:g("BuiltIn","invNorm"),tscore:g("BuiltIn","tscore",{tag:"parameterizedReducer",defaultArguments:[_r]}),normalSample:g("BuiltIn","normalSample",{argumentTypes:[Ke,m,m]}),uniformSample:g("BuiltIn","uniformSample",{argumentTypes:[Ke,m,m]}),tSample:g("BuiltIn","tSample",{argumentTypes:[Ke,m]}),poissonSample:g("BuiltIn","poissonSample",{argumentTypes:[Ke,m]}),binomSample:g("BuiltIn","binomSample",{argumentTypes:[Ke,m,m]}),rgb:g("BuiltIn","rgb",{returnType:Bt,tag:"color"}),hsv:g("BuiltIn","hsv",{returnType:Bt,tag:"color"}),okhsv:g("BuiltIn","okhsv",{returnType:Bt,tag:"color"}),oklab:g("BuiltIn","oklab",{returnType:Bt,tag:"color"}),oklch:g("BuiltIn","oklch",{returnType:Bt,tag:"color"}),tone:g("BuiltIn","tone",{argumentTypes:[m,m],returnType:Wr,defaultArguments:[So],minArityExampleArgs:"(440)",maxArityExampleArgs:"(440, 0.5)"}),validateRangeLength:g("BuiltIn","validateRangeLength",{returnType:m,argumentTypes:[U,U,m,m],tag:"never-broadcast",noPeel:!0}),validateSampleCount:g("BuiltIn","validateSampleCount",{returnType:m,argumentTypes:[m],noPeel:!0}),repeat:g("BuiltIn","repeat",{argumentTypes:[pt,m],returnType:e=>Nr(e[0]),tag:"never-broadcast",noPeel:!0}),frequencyList:g("BuiltIn","frequencyList",{argumentTypes:[Xe,U],returnType:e=>e[0],tag:"never-broadcast",noPeel:!0}),repeatAssert:g("BuiltIn","repeatAssert",{argumentTypes:[pt,m],returnType:e=>Nr(e[0]),tag:"never-broadcast",noPeel:!0}),frequencyListAssert:g("BuiltIn","frequencyListAssert",{argumentTypes:[Xe,U],returnType:e=>e[0],tag:"never-broadcast",noPeel:!0}),select:g("BuiltIn","select",{argumentTypes:[Xe,mo],returnType:e=>e[0],tag:"never-broadcast",noPeel:!0}),shuffle:g("BuiltIn","shuffle",{argumentTypes:[Ke,Xe],returnType:e=>e[1],tag:"never-broadcast"}),sortPerm:g("BuiltIn","sortPerm",{argumentTypes:[U],returnType:U,tag:"never-broadcast",noPeel:!0}),complexSortPerm:g("BuiltIn","complexSortPerm",{argumentTypes:[dt],returnType:U,tag:"never-broadcast",noPeel:!0}),elementsAt:g("BuiltIn","elementsAt",{argumentTypes:[Xe,U],returnType:e=>e[0],tag:"never-broadcast",noPeel:!0}),uniquePerm:g("BuiltIn","uniquePerm",{argumentTypes:[Xe],returnType:U,tag:"never-broadcast",noPeel:!0}),restriction:g("BuiltIn","restriction",{argumentTypes:[dr],returnType:er}),restrictionToBoolean:g("BuiltIn","restrictionToBoolean",{argumentTypes:[er],returnType:dr}),complex:g("BuiltIn","complex",{argumentTypes:[m,m],returnType:k}),arg:g("BuiltIn","arg",{argumentTypes:[k],returnType:m}),wirtingerEqualOrWarning:g("BuiltIn","wirtingerEqualOrWarning",{argumentTypes:[k,k],returnType:k,noPeel:!0}),complexDivide:g("BuiltIn","complexDivide",{argumentTypes:[k,k],returnType:k}),peelableCoerceComplexToReal:g("BuiltIn","coerceComplexToReal",{argumentTypes:[k],returnType:m}),peelableCoerceComplexToRealWithTolerance:g("BuiltIn","coerceComplexToReal",{argumentTypes:[k],returnType:m}),coerceComplexToReal:g("BuiltIn","coerceComplexToReal",{argumentTypes:[k],returnType:m}),coerceComplexToRealWithTolerance:g("BuiltIn","coerceComplexToRealWithTolerance",{argumentTypes:[k],returnType:m}),coerceRealToComplex:g("BuiltIn","coerceRealToComplex",{argumentTypes:[m],returnType:k}),coerceMatrixToNumber:g("BuiltIn","coerceMatrixToNumber",{argumentTypes:[ee],returnType:m}),complexSqrt:g("BuiltIn","complexSqrt",{argumentTypes:[k],returnType:k}),complexLn:g("BuiltIn","complexLog",{argumentTypes:[k],returnType:k}),complexLogbase:g("BuiltIn","complexLogbase",{argumentTypes:[k,k],returnType:k}),complexLog:g("BuiltIn","complexCommonLog",{argumentTypes:[k],returnType:k}),complexExp:g("BuiltIn","complexExp",{argumentTypes:[k],returnType:k}),complexPow:g("BuiltIn","complexPow",{argumentTypes:[k,k],returnType:k}),complexSin:g("BuiltIn","complexSin",{argumentTypes:[k],returnType:k}),complexCos:g("BuiltIn","complexCos",{argumentTypes:[k],returnType:k}),complexTan:g("BuiltIn","complexTan",{argumentTypes:[k],returnType:k}),complexSinh:g("BuiltIn","complexSinh",{argumentTypes:[k],returnType:k}),complexCosh:g("BuiltIn","complexCosh",{argumentTypes:[k],returnType:k}),complexTanh:g("BuiltIn","complexTanh",{argumentTypes:[k],returnType:k}),complexSec:g("BuiltIn","complexSec",{argumentTypes:[k],returnType:k}),complexCsc:g("BuiltIn","complexCsc",{argumentTypes:[k],returnType:k}),complexCot:g("BuiltIn","complexCot",{argumentTypes:[k],returnType:k}),complexSech:g("BuiltIn","complexSech",{argumentTypes:[k],returnType:k}),complexCsch:g("BuiltIn","complexCsch",{argumentTypes:[k],returnType:k}),complexCoth:g("BuiltIn","complexCoth",{argumentTypes:[k],returnType:k}),complexArcsin:g("BuiltIn","complexAsin",{argumentTypes:[k],returnType:k}),complexArccos:g("BuiltIn","complexAcos",{argumentTypes:[k],returnType:k}),complexArctan:g("BuiltIn","complexAtan",{argumentTypes:[k],returnType:k}),complexArcsec:g("BuiltIn","complexAsec",{argumentTypes:[k],returnType:k}),complexArccsc:g("BuiltIn","complexAcsc",{argumentTypes:[k],returnType:k}),complexArccot:g("BuiltIn","complexAcot",{argumentTypes:[k],returnType:k}),complexArcsinh:g("BuiltIn","complexAsinh",{argumentTypes:[k],returnType:k}),complexArccosh:g("BuiltIn","complexAcosh",{argumentTypes:[k],returnType:k}),complexArctanh:g("BuiltIn","complexAtanh",{argumentTypes:[k],returnType:k}),complexArcsech:g("BuiltIn","complexAsech",{argumentTypes:[k],returnType:k}),complexArccsch:g("BuiltIn","complexAcsch",{argumentTypes:[k],returnType:k}),complexArccoth:g("BuiltIn","complexAcoth",{argumentTypes:[k],returnType:k}),angleVertex:g("BuiltIn","angleVertex",{argumentTypes:[Te],returnType:L,noPeel:!0}),angleStart:g("BuiltIn","angleStart",{argumentTypes:[Te],returnType:m,noPeel:!0}),directedAngleVertex:g("BuiltIn","angleVertex",{argumentTypes:[ge],returnType:L,noPeel:!0}),directedAngleStart:g("BuiltIn","angleStart",{argumentTypes:[ge],returnType:m,noPeel:!0}),chisqIndependenceRowTotals:g("BuiltIn","chisqIndependenceRowTotals",{argumentTypes:[U,m,m],returnType:U,tag:"never-broadcast"}),chisqIndependenceColTotals:g("BuiltIn","chisqIndependenceColTotals",{argumentTypes:[U,m,m],returnType:U,tag:"never-broadcast"}),chisqIndependenceExpectedValues:g("BuiltIn","chisqIndependenceExpectedValues",{argumentTypes:[U,U],returnType:U,tag:"never-broadcast"}),chisqcdf:g("BuiltIn","chisqcdf",{argumentTypes:[m,m,m],returnType:m}),chisqpdf:g("BuiltIn","chisqpdf",{argumentTypes:[m,m],returnType:m}),invChisq:g("BuiltIn","invChisq",{argumentTypes:[m,m]})};var nu=class extends or{constructor(t){super([]),this._symbol=Vc(t),this._errorSymbol=this._symbol,this.addDependency(this._symbol)}setInputSpan(t){super.setInputSpan(t),this._errorSymbol=Vc(this.getInputString())}getInputSpan(){return this._inputSpan===void 0?Wm(this._symbol,0,this._symbol.length):this._inputSpan}},ws=class extends nu{constructor(){super(...arguments);this.type="Identifier"}};var ou=class extends or{constructor(t,r){super(r,{skipRegisterDependencies:!0}),typeof t=="string"&&(t=new ws(t)),this._identifier=t,this._symbol=t._symbol,this._errorSymbol=t._errorSymbol==="logbase"?"log":t._errorSymbol,this.registerDependencies()}registerDependencies(){this.addDependency(this._symbol),super.registerDependencies(),Sf(this._symbol)&&this.addDependency("trigAngleMultiplier")}},vs=class extends ou{constructor(){super(...arguments);this.type="FunctionCall"}};var au=class extends or{slot(t){return this.args[t]}},Ms=class extends au{constructor(){super(...arguments);this.type="ParenSeq"}};var iu={pi:new ar(Math.PI),tau:new ar(2*Math.PI),e:new ar(Math.E),trigAngleMultiplier:new ar(mr(1,1)),ambiguousSupTIsTranspose:new ar(!1),infty:new ar(1/0),identityTransformation:new vs("translation",[new Ms([new ar(0),new ar(0)])])};var ba=class extends Xr{constructor(){super(...arguments);this.type="Placeholder"}};var Lr=new xo;for(let e of qr(iu))Lr.set(e,iu[e]);for(let e of qr(Ts))Lr.set(e,new ba);for(let e of qr(ru))Lr.set(e,new ba);var Ss={segment:!0,line:!0,ray:!0,circle:!0,arc:!0,vector:!0,glider:!0,parallel:!0,perpendicular:!0,center:!0,radius:!0,area:!0,perimeter:!0,start:!0,end:!0,angles:!0,angle:!0,directedangles:!0,directedangle:!0,coterminal:!0,supplement:!0,vertices:!0,segments:!0,intersection:!0,strictintersection:!0,translate:!0,dilate:!0,rotate:!0,reflect:!0,construction:!0,points:!0,lines:!0,circles:!0,arcs:!0,polygons:!0,rays:!0,anglebisector:!0};var su={segment:!0,triangle:!0,vector:!0,start:!0,end:!0,sphere:!0};var iM=["csc","sec","cot","arccsc","arcsec","arccot","csch","sech","coth","arccsch","arcsech","arccoth","mad","cov","covp","distance","midpoint"],Cf=["histogram","dotplot","boxplot"],IR=[...Cf,"polygon"],lu=["chisqtest","chisqgof","score","conf","pleft","pright","ztest","zproptest","score","dof","estimate","stderr","null","upper","lower"],sM=lu.map(e=>e.split("|")[0]),lM=["erf","ttest|t-test","tscore|t-score","normaldist|normal-distribution","tdist|t-distribution","chisqdist|chi-square-distribution","poissondist|poisson-distribution","binomialdist|binomial-distribution","geodist|geometric-distribution","pdf","cdf","random",...Cf,...sM],cM=lM.map(e=>e.split("|")[0]);var uM=Object.keys(Ss).filter(e=>e!=="construction"),pM=Object.keys(Cc);function Cs(e,t){for(let r of e)if(!t.hasOwn(r))throw new Error("Programming Error: key '"+r+`' does not exist in table. Must be one of:
`+[...t.ownKeys()].join(`
`))}Cs(iM,Lr);Cs(cM,Lr);Cs(uM,Lr);Cs(pM,Lr);var dM={"+":!0,"-":!0,"*":!0,"\\cdot":!0,"\\times":!0,"/":!0,"!":!0,"(":!0,")":!0,"\\{":!0,"\\}":!0,"(|":!0,"|)":!0,"[":!0,"]":!0,",":!0,";":!0,"...":!0,":":!0,"=":!0,">":!0,"<":!0,">=":!0,"<=":!0,"->":!0,"~":!0,"%":!0,".":!0,for:!0,with:!0,and:!0,or:!0,Letter:!0,Decimal:!0,Cmd:!0,TokenNode:!0,Differential:!0,End:!0,Trig:!0,Ln:!0,Log:!0,Int:!0,Sum:!0,Prod:!0,Err:!0};var Nn={"\\lt":"<","\\gt":">","\\le":"<=","\\ge":">=","\\leq":"<=","\\geq":">=","\\ldots":"...","\\sim":"~","\\to":"->","\\cdot":"\\cdot","\\times":"\\times","\\div":"/","\\ln":"Ln","\\log":"Log","\\int":"Int","\\sum":"Sum","\\prod":"Prod","\\backslash":"Err","\\for":"for","\\with":"with","\\and":"and","\\or":"or"},mM=["sin","cos","tan","cot","sec","csc"];for(let e of mM)Nn["\\"+e]="Trig",Nn["\\"+e+"h"]="Trig",Nn["\\arc"+e]="Trig",Nn["\\arc"+e+"h"]="Trig",Nn["\\ar"+e+"h"]="Trig";var PR=Object.keys(dM);var fM={exp:"mq-narration-op-exp",ln:"mq-narration-op-ln",log:"mq-narration-op-log",total:"mq-narration-op-total",length:"mq-narration-op-length",count:"mq-narration-op-count",mean:"mq-narration-op-mean",median:"mq-narration-op-median",quantile:"mq-narration-op-quantile",quartile:"mq-narration-op-quartile",nCr:"mq-narration-op-nCr",nPr:"mq-narration-op-nPr",stats:"mq-narration-op-stats",stdev:"mq-narration-op-stdev",stddev:"mq-narration-op-stddev",stdDev:"mq-narration-op-stdDev",stdevp:"mq-narration-op-stdevp",stddevp:"mq-narration-op-stddevp",stdDevP:"mq-narration-op-stdDevP",mad:"mq-narration-op-mad",var:"mq-narration-op-var",varp:"mq-narration-op-varp",variance:"mq-narration-op-variance",cov:"mq-narration-op-cov",covp:"mq-narration-op-covp",corr:"mq-narration-op-corr",spearman:"mq-narration-op-spearman",lcm:"mq-narration-op-lcm",mcm:"mq-narration-op-mcm",gcd:"mq-narration-op-gcd",mcd:"mq-narration-op-mcd",gcf:"mq-narration-op-gcf",mod:"mq-narration-op-mod",ceil:"mq-narration-op-ceil",floor:"mq-narration-op-floor",round:"mq-narration-op-round",abs:"mq-narration-op-abs",min:"mq-narration-op-min",max:"mq-narration-op-max",sign:"mq-narration-op-sign",signum:"mq-narration-op-signum",sgn:"mq-narration-op-sgn",sin:"mq-narration-op-sin",cos:"mq-narration-op-cos",tan:"mq-narration-op-tan",csc:"mq-narration-op-csc",sec:"mq-narration-op-sec",cot:"mq-narration-op-cot",sinh:"mq-narration-op-sinh",cosh:"mq-narration-op-cosh",tanh:"mq-narration-op-tanh",csch:"mq-narration-op-csch",sech:"mq-narration-op-sech",coth:"mq-narration-op-coth",arcsin:"mq-narration-op-arcsin",arccos:"mq-narration-op-arccos",arctan:"mq-narration-op-arctan",arccsc:"mq-narration-op-arccsc",arcsec:"mq-narration-op-arcsec",arccot:"mq-narration-op-arccot",arcsinh:"mq-narration-op-arcsinh",arccosh:"mq-narration-op-arccosh",arctanh:"mq-narration-op-arctanh",arccsch:"mq-narration-op-arccsch",arcsech:"mq-narration-op-arcsech",arccoth:"mq-narration-op-arccoth",arsinh:"mq-narration-op-arsinh",arcosh:"mq-narration-op-arcosh",artanh:"mq-narration-op-artanh",arcsch:"mq-narration-op-arcsch",arsech:"mq-narration-op-arsech",arcoth:"mq-narration-op-arcoth",polygon:"mq-narration-op-polygon",distance:"mq-narration-op-distance",midpoint:"mq-narration-op-midpoint",sort:"mq-narration-op-sort",shuffle:"mq-narration-op-shuffle",join:"mq-narration-op-join",unique:"mq-narration-op-unique",erf:"mq-narration-op-erf",ttest:"mq-narration-op-ttest",TScore:"mq-narration-op-TScore",tscore:"mq-narration-op-tscore",normaldist:"mq-narration-op-normaldist",tdist:"mq-narration-op-tdist",poissondist:"mq-narration-op-poissondist",binomialdist:"mq-narration-op-binomialdist",uniformdist:"mq-narration-op-uniformdist",chisqdist:"mq-narration-op-chisqdist",geodist:"mq-narration-op-geodist",pdf:"mq-narration-op-pdf",cdf:"mq-narration-op-cdf",random:"mq-narration-op-random",inverseCdf:"mq-narration-op-inverseCdf",inversecdf:"mq-narration-op-inversecdf",histogram:"mq-narration-op-histogram",dotplot:"mq-narration-op-dotplot",boxplot:"mq-narration-op-boxplot",rgb:"mq-narration-op-rgb",hsv:"mq-narration-op-hsv",okhsv:"mq-narration-op-okhsv",oklab:"mq-narration-op-oklab",oklch:"mq-narration-op-oklch",for:"mq-narration-op-for",and:"mq-narration-op-and",or:"mq-narration-op-or",width:"mq-narration-op-width",height:"mq-narration-op-height",with:"mq-narration-op-with",repeat:"mq-narration-op-repeat",real:"mq-narration-op-real",imag:"mq-narration-op-imag",conj:"mq-narration-op-conj",arg:"mq-narration-op-arg",det:"mq-narration-op-det",inv:"mq-narration-op-inv",transpose:"mq-narration-op-transpose",rref:"mq-narration-op-rref",trace:"mq-narration-op-trace",rows:"mq-narration-op-rows",columns:"mq-narration-op-columns",chisqtest:"mq-narration-op-chisqtest",chisqgof:"mq-narration-op-chisqgof",score:"mq-narration-op-score",conf:"mq-narration-op-conf",pleft:"mq-narration-op-pleft",pright:"mq-narration-op-pright",ztest:"mq-narration-op-ztest",zproptest:"mq-narration-op-zproptest",dof:"mq-narration-op-dof",estimate:"mq-narration-op-estimate",stderr:"mq-narration-op-stderr",null:"mq-narration-op-null",upper:"mq-narration-op-upper",lower:"mq-narration-op-lower",segment:"mq-narration-op-segment",line:"mq-narration-op-line",ray:"mq-narration-op-ray",circle:"mq-narration-op-circle",arc:"mq-narration-op-arc",vector:"mq-narration-op-vector",glider:"mq-narration-op-glider",parallel:"mq-narration-op-parallel",perpendicular:"mq-narration-op-perpendicular",center:"mq-narration-op-center",radius:"mq-narration-op-radius",area:"mq-narration-op-area",perimeter:"mq-narration-op-perimeter",start:"mq-narration-op-start",end:"mq-narration-op-end",angles:"mq-narration-op-angles",angle:"mq-narration-op-angle",directedangles:"mq-narration-op-directedangles",directedangle:"mq-narration-op-directedangle",coterminal:"mq-narration-op-coterminal",supplement:"mq-narration-op-supplement",vertices:"mq-narration-op-vertices",segments:"mq-narration-op-segments",intersection:"mq-narration-op-intersection",strictintersection:"mq-narration-op-strictintersection",translate:"mq-narration-op-translate",dilate:"mq-narration-op-dilate",rotate:"mq-narration-op-rotate",reflect:"mq-narration-op-reflect",construction:"mq-narration-op-construction",points:"mq-narration-op-points",lines:"mq-narration-op-lines",circles:"mq-narration-op-circles",arcs:"mq-narration-op-arcs",polygons:"mq-narration-op-polygons",rays:"mq-narration-op-rays",anglebisector:"mq-narration-op-anglebisector",triangle:"mq-narration-op-triangle",sphere:"mq-narration-op-sphere",tone:"mq-narration-op-tone",discretedist:"mq-narration-op-discretedist"},kf=["exp ln log","total length count mean median quantile quartile nCr nPr stats","stdev stddev stdDev stdevp stddevp stdDevP mad var varp variance cov covp corr spearman","lcm mcm gcd mcd gcf mod ceil floor round abs min max sign signum sgn","sin cos tan csc sec cot","sinh cosh tanh csch sech coth","arcsin arccos arctan arccsc arcsec arccot","arcsinh arccosh arctanh arccsch arcsech arccoth","arsinh arcosh artanh arcsch arsech arcoth","polygon","distance midpoint","sort shuffle join unique","erf","ttest TScore tscore","normaldist tdist poissondist binomialdist uniformdist chisqdist geodist","pdf cdf random inverseCdf inversecdf","histogram dotplot boxplot","rgb hsv okhsv oklab oklch","for","width height","with","and or","repeat","tone",...kc].join(" "),gM=["det","inv","transpose","rref","trace"].join(" ");kf+=" "+gM;var hM=["rows","columns"].join(" "),yM="alpha beta sqrt theta phi rho pi tau nthroot cbrt sum prod integral percent infinity infty cross";function qf(e){e||(e={});let t=[yM];return e.disallowAns||t.push("ans"),e.disallowFrac||t.push("frac"),e.additionalCommands&&(t=t.concat(e.additionalCommands)),t.join(" ")}function bM(e){e||(e={});let t=kf;return e.additionalOperators&&e.additionalOperators.length&&(t=`${t} ${e.additionalOperators.join(" ")}`),e.includeGeometryFunctions&&(t+=" "+Object.keys(Ss).join(" ")),e.include3DFunctions&&(t+=" "+Object.keys(su).join(" ")),e.include2026MatrixFunctions&&(t+=" "+hM),t+=" "+lu.join(" "),t+=" discretedist",t.split(" ").map(n=>{var a;let o=fM[n];if(o===void 0&&!((a=e.additionalOperators)!=null&&a.includes(n)))throw new Error(`Programming Error: missing dictionary key for ${n}`);return o?`${n}|${o}`:n}).join(" ")}function xM(){return"for with and or"}function TM(){let e="ln log";for(let[t,r]of Object.entries(Nn))r=="Trig"&&(e+=" "+t.replace(/^\\/,""));return e}function Ef(e){return{autoOperatorNames:bM(e),infixOperatorNames:xM(),prefixOperatorNames:TM()}}var rp={};nd(rp,{EditableField:()=>rk,MathField:()=>Wh,MqMathFieldApi:()=>Ba,StaticMath:()=>tk,config:()=>nk,getApiInstanceForElement:()=>Hh});function vM(e,t){return e.left<=t&&t<e.right}function In(e,t){let r=0,n=e.length-1;for(;r<=n;){let o=Math.floor((r+n)/2),a=e[o];if(vM(a,t))return a;t<a.left?n=o-1:r=o+1}}function en(e,t){return!!In(e,t)}function Ht(e,t){var r;return((r=In(e,t))==null?void 0:r.right)===t+1}function An(e,t){var r;return((r=In(e,t))==null?void 0:r.left)===t}function MM(e,t,r){let n,o=r.getTrieRoot();for(let a=t;o&&a<e.length;a++){let i=e[a];if(i.type!=="char")break;o=o.followPath(i.latex),o!=null&&o.endWord&&(n=o.endWord)}return n}function Nf(e,t,r){let{children:n,marks:o}=e;if(o.mutable_operatorName=[],o.mutable_infixOperatorName=[],o.mutable_prefixOperatorName=[],!r){for(let a=0;a<n.length;a++){let i=MM(n,a,t.autoOperatorNames);if(i){let s={left:a,right:a+i.length,word:i};o.mutable_operatorName.push(s),t.infixOperatorNames.has(i)?o.mutable_infixOperatorName.push(s):t.prefixOperatorNames.has(i)&&o.mutable_prefixOperatorName.push(s),a+=i.length-1}}return o}}function If(e){let t=[],r=0;for(let n=0;n<e.length;n++){let o=e[n];o.type==="char"&&o.latex==="."?r+=1:r=0,r===3&&(t.push({left:n-2,right:n+1,word:"..."}),r=0)}return t}function Me(e){return e==="left"?"right":"left"}function Af(e){return e==="up"?"down":"up"}var qe=class{constructor(t,r){this.group=t,this.index=r}eq(t){return this.group.eq(t.group)&&this.index===t.index}nodeInDirection(t){return t==="left"?this.nodeBefore():this.nodeAfter()}nodeBefore(){return this.group.nthChild(this.index-1)}nodeAfter(){return this.group.nthChild(this.index)}};var cu;function Pf(e,t){if(t<0||t>=e.length)throw new Error("Offset out of bounds");if(!Intl.Segmenter)return{segment:e[t],from:t,to:t+1};cu||(cu=new Intl.Segmenter(void 0,{granularity:"grapheme"}));let n=cu.segment(e).containing(t);if(!n)throw new Error("Intl unreachable: Offset out of bounds");let{segment:o,index:a}=n;return{segment:o,from:a,to:a+o.length}}function*Rf(e){yield*Df(e)}function*Df(e){yield new qe(e,0);for(let t=0;t<e.children.length;t++){let r=e.children[t],n=Wt(r);for(let o=0;o<n;o++){let a=tn(r,o);if(a.type!=="group")throw new Error("Non-group containing non-group.");yield*Df(a)}yield new qe(e,t+1)}}function*Nt(e){yield e;for(let t of e.children){let r=Wt(t);for(let n=0;n<r;n++){let o=tn(t,n);if(o.type!=="group")throw new Error("Non-group containing non-group.");yield*Nt(o)}}}function*Pn(e){yield e;for(let t of e.children){yield t;let r=Wt(t);for(let n=0;n<r;n++){let o=tn(t,n);if(o.type!=="group")throw new Error("Non-group containing non-group.");yield*Pn(o)}}}function Lf(e){for(let t of Pn(e)){let r=Wt(t);for(let n=0;n<r;n++)tn(t,n).updateParent(t,n)}}function uu(e){let t=Wt(e),r=[];for(let n=0;n<t;n++)r.push(e.nthChild(n));return r}var ks=new Map([["~","\\textasciitilde"],["\\","\\textbackslash"],["`","\\textasciigrave"],["'","\\textquotesingle"],["|","\\textbar"],["<","\\textless"],[">","\\textgreater"],["^","\\textasciicircum"],[" ","\\ "],["$","\\$"],["&","\\&"],["%","\\%"],["#","\\#"],["{","\\{"],["}","\\}"],["_","\\_"]]),SM=new RegExp("["+[...ks.keys()].join("").replace(/[\^\-\]\\]/g,"\\$&")+"]","g"),Bf=new Map;for(let[e,t]of ks)Bf.set(t,e);function Gf(e){return e.replace(SM,t=>{let r=ks.get(t);return r.length>2?r+" ":r})}function $f(e){return/[\r\n\v\f\u2028\u2029]/.test(e)}function CM(e){return e.replace(/[\t\r\n\v\f\u2028\u2029]/g," ")}function qs(e){let t="";e=CM(e),e=e.replace(/ {2,}/g," ");let r=0;for(;r<e.length;){let n=kM(e,r);if(!n)return;r=n.nextPos,t+=n.text}return t}function kM(e,t){let r=t;if(t>=e.length)return;let n=e.charAt(t);if(t+=1,n==="\\")if(_f(e.charAt(t))){do t+=1;while(_f(e.charAt(t)));let o=e.slice(r,t);Ff(e.charAt(t))&&t++;let a=Of(o);return a===void 0?void 0:{nextPos:t,text:a}}else{t+=1;let o=e.slice(r,t),a=Of(o);return a===void 0?void 0:{nextPos:t,text:a}}else{if(Ff(n))return{nextPos:t,text:" "};if(ks.has(n))return;{let o=e.slice(r,t);return{nextPos:t,text:o}}}}function Of(e){return Bf.get(e)}function _f(e){return/^[A-Za-z]$/.test(e)}function Ff(e){return e==" "}function ir(e,t={}){let r=at(e,t);return Uf(r)}function Vf(e,t){let r=zf(e,t);return Uf(r)}function Uf(e){return e.replace(/(\\(?:[a-z](?:\{\{cursor\}\})?)+) (?!(?:\{\{cursor\}\})?[a-z])/gi,"$1")}function qM(e){return/^\\[a-z]+$/i.test(e)?e+" ":e}function gr(e){return e===""?" ":e}var rn="{{cursor}}";function zf(e,t,r={}){var a,i;let n="",o="";for(let s of t){let c=s.getIndex(),f=at(s,r);if(((a=r.emitCursor)==null?void 0:a.group)===e&&r.emitCursor.index===c&&!o&&(n+=rn),An(e.marks.mutable_operatorName,c))o+=f;else if(Ht(e.marks.mutable_operatorName,c)){o+=f,r.emitCursorAtEveryPosition&&(n+=rn);let h=o;if(r.emitCursorAtEveryPosition)h=o.split("").join(rn);else if(((i=r.emitCursor)==null?void 0:i.group)===e){let w=c-o.length+2,N=c;if(r.emitCursor.index>=w&&r.emitCursor.index<=N){let I=r.emitCursor.index-w+1;h=o.slice(0,I)+rn+o.slice(I)}}Hf.has(o)?n+="\\"+h+" ":n+="\\operatorname{"+h+"}",o=""}else o?o+=f:(r.emitCursorAtEveryPosition&&(n+=rn),n+=f)}return n}function at(e,t){var r,n;switch(e.type){case"char":return qM(e.latex);case"percentof":return"\\%\\operatorname{of}";case"ans":return"\\operatorname{ans}";case"token":return`\\${e.variant}{`+e.id+"}";case"brackets":{let i=at(e.middle,t);return`\\left${e.leftLatex}${i}\\right${e.rightLatex}`}case"sqrt":{let i=e.index?`[${at(e.index,t)}]`:"",s=at(e.radicand,t);return e.index||(s=gr(s)),`\\sqrt${i}{${s}}`}case"frac":{let i=gr(at(e.num,t)),s=gr(at(e.den,t));return`\\frac{${i}}{${s}}`}case"binom":{let i=gr(at(e.num,t)),s=gr(at(e.den,t));return`\\binom{${i}}{${s}}`}case"supsub":let o=e.sub?`_{${gr(at(e.sub,t))}}`:"",a=e.sup?`^{${gr(at(e.sup,t))}}`:"";return o+a;case"summation":{let i=e.kind,s=at(e.sub,t),c=at(e.sup,t),f=((r=e.nextSibling())==null?void 0:r.type)==="supsub"?"{}":"";return i+`_{${gr(s)}}^{${gr(c)}}`+f}case"group":{let i=zf(e,e.children,t);return(t.emitCursorAtEveryPosition||((n=t.emitCursor)==null?void 0:n.group)===e&&t.emitCursor.index===e.children.length)&&(i+=rn),i}case"style-cmd":{let i=e.val;e.styleParam!==void 0&&(i+="{"+e.styleParam+"}");let s=at(e.arg,t);return e.val!=="\\textcolor"&&(s=gr(s)),i+="{"+s+"}",i}case"matrix":{let i="\\begin{bmatrix}",{numRows:s,numCols:c}=e.getDimensions();for(let f=0;f<s;f++){f>0&&(i+="\\\\");for(let h=0;h<c;h++)h>0&&(i+="&"),i+=at(e.getChildAt(h,f),t)}return c===1&&e.getChildAt(0,s-1).children.length===0&&(i+="{}"),i+="\\end{bmatrix}",i}case"string":return"\\text{``"+at(e.body,t)+"''}";case"text-char":return Gf(e.text);default:throw new Error(`Invalid node: ${e.type}`)}}function xa(e){let t=e.group.getRoot();return ir(t,{emitCursor:{group:e.group,index:e.index}}).indexOf(rn)}function Ta(e,t){let r=ir(e,{emitCursorAtEveryPosition:!0}),n=EM(r,t);if(n===void 0)return;let o=0;for(let a of Rf(e)){if(o===n)return Es(a)?a:void 0;o+=1}}function Es(e){return!nn(e.group)||e.index===0||e.index===e.group.children.length?!0:e.index==e.nodeAfter().containingSelection().left.index}function EM(e,t){let r=0,n=0;for(let o of e.matchAll(/\{\{cursor\}\}/g)){if(o.index-r===t)return n;n+=1,r+=o[0].length}}function Wf(e,t,r){let n=[e.selection].concat(e.tabHistory.selections);NM(n);let{root:o}=ye(t,r()),a=AM(o,n);IM(n);let i={selections:a.slice(1),dir:e.tabHistory.dir};return e.withRootAndSelection(o,a[0]).withTabHistory(i)}function pu(e){if(e==="upDown")return{type:"upDown"};if(e.startsWith("head"))return{type:"head",index:parseInt(e.slice(5))};if(e.startsWith("anchor"))return{type:"anchor",index:parseInt(e.slice(7))};throw new Error("Programming Error: Invalid stashed cursor")}function NM(e){let t=0;for(let r of e){let{head:n,anchor:o}=r;on(n.group,`head-${t}`,n.index),on(o.group,`anchor-${t}`,o.index),t++}}function IM(e){var r,n;let t=0;for(let o of e){let{head:a,anchor:i}=o;(r=a.group.mutable_cursorIndices)==null||r.delete(`head-${t}`),(n=i.group.mutable_cursorIndices)==null||n.delete(`anchor-${t}`),t++}}function AM(e,t){let r=t.length,n=new Array(r),o=new Array(r);for(let i of Nt(e)){let s=i;if(s.mutable_cursorIndices)for(let[c,f]of s.mutable_cursorIndices){let h=pu(c);switch(h.type){case"upDown":break;case"head":if(n[h.index]!==void 0)throw new Error("Programming Error: Duplicate head");n[h.index]=new qe(i,f),s.mutable_cursorIndices.delete(c);break;case"anchor":if(o[h.index]!==void 0)throw new Error("Programming Error: Duplicate anchor");o[h.index]=new qe(i,f),s.mutable_cursorIndices.delete(c);break}}}let a=[];for(let i=0;i<r;i++){let s=n[i],c=o[i];if(s===void 0||c===void 0)throw new Error("Programming Error: Missing head or anchor.");a.push(PM(s,c,t[i]))}return a}function PM(e,t,r){if(r.matrixPullHandleType){let n=e.nodeBefore();if((n==null?void 0:n.type)==="matrix"&&e.eq(t))return va(n,r.matrixPullHandleType);throw new Error("Programming Error: Invalid pull handle.")}else return Ns(t,e)}function Kf(e){for(let t of Nt(e))t.mutable_upDownGroup&&(t.mutable_upDownGroup=void 0),t.mutable_cursorIndices&&t.mutable_cursorIndices.delete("upDown")}function on(e,t,r){e.mutable_cursorIndices||(e.mutable_cursorIndices=new Map),e.mutable_cursorIndices.set(t,r)}function wa(e,t,r){if(e.mutable_cursorIndices)for(let[n,o]of e.mutable_cursorIndices){let a=r(o);on(t,n,a)}}function jf(e,t){if(!e.mutable_cursorIndices)return!1;for(let r of e.mutable_cursorIndices.values())if(t(r))return!0;return!1}function*Qf(e){for(let t of Nt(e))if(t.mutable_cursorIndices){for(let r of t.mutable_cursorIndices.keys())yield r;t.mutable_cursorIndices=void 0}}function Xf(e){let t=e.group;if(nn(t)&&(!Es(e.anchor)||!Es(e.head)))throw new Error("Programming Error: selection cannot split a grapheme cluster.")}function Kt(e){if(!e.matrixPullHandleType)return;let t=e.head.nodeBefore();if((t==null?void 0:t.type)!=="matrix")throw new Error("Programming Error: misplaced pull handle");return t}function*du(e){let t=e.group,r=t.parent();for(;r;)yield{group:t,parent:r},t=r.parent(),r=t.parent()}function Is(e){for(let{group:t,parent:r}of du(e))if(r.type==="matrix")return{cell:t,matrix:r}}function As(e){let t=Kt(e);return t?va(t,"keyboard"):e}function mu(e){let{left:t,right:r,anchor:n,head:o,group:a}=e;return{latex:ir(a.getRoot()),startIndex:xa(t),endIndex:xa(r),anchorIndex:xa(n),headIndex:xa(o)}}function Zf(e){let t=It(e);return t.length===0?"":Vf(e.group,t)}function Oe(e,t){return t==="left"?e.left:e.right}function Ee(e){return e.left.eq(e.right)}function K(e){return{anchor:e,head:e,left:e,right:e,group:e.group}}function va(e,t){let r=e.cursorOnSide("right");return{anchor:r,head:r,left:r,right:r,group:r.group,matrixPullHandleType:t}}function jt(e,t,r){t=Math.min(t,r),r=Math.max(t,r);let n=new qe(e,t),o=new qe(e,r);return{anchor:n,head:o,left:n,right:o,group:o.group}}function Fe(e,t){let r=DM(e,t);if(r===void 0)return;let n=Math.min(t.index,r),o=Math.max(t.index,r),a=new qe(t.group,n),i=new qe(t.group,o);if(e.group.getRoot()!==t.group.getRoot())throw new Error("Programming Error: anchor and head must be from same root");return{anchor:e,head:t,left:a,right:i,group:i.group}}function RM(e,t){return t.group.contains(e.group)}function DM(e,t){let r=t.group.depth();if(!RM(e,t))return;let n;return e.group.depth()===r?n=e.index:(n=e.group.ancestorAtDepth(r+1).getIndex(),n>=t.index&&(n+=1)),n}function Ns(e,t){let r=fu(e.group,t.group);if(r.eq(t.group))return Fe(e,t);let n=Yf(r,e),o=Yf(r,t),a=LM(n,o);return Fe(e,new qe(r,a))}function LM(e,t){return t.type==="cursor"?t.index:e.index===t.index?e.type==="node"?e.groupIndex<=t.groupIndex?t.index+1:t.index:t.index+1:e.index<t.index?t.index+1:t.index}function Yf(e,t){if(t.group.eq(e))return{type:"cursor",index:t.index};{let r=t.group.ancestorAtDepth(e.depth()+2);return{type:"node",index:r.parent().getIndex(),groupIndex:r.getIndex()}}}function fu(e,t){let r=e;for(;!r.contains(t);){let n=r.parent();if(!n)throw new Error("Programming error: tried to take the common ancestor of two groups in different trees.");r=n.parent()}return r}function ye(e,t){let{root:r,insertedSelections:n}=Rn(e,[t]);return{root:r,insertedSelection:n[0]}}function Ne(e,t){let{root:r,insertedSelection:n}=ye(e,[t]),o=n.left.nodeAfter();if(!o||o!==t)throw new Error("Programming error: node not inserted right");return{root:r,inserted:o}}function Rn(e,t){let{left:r,right:n,group:o}=e,a=r.index,i=n.index,s=o.children,c=s.slice(0,a).concat(...t,s.slice(i)),f=c.length-s.length,h=re(c);hu(o,h),wa(o,h,I=>I<=a?I:I>=i?I+f:i+f);let w=[],N=a;for(let I of t)w.push(jt(h,N,N+I.length)),N+=I.length;return{root:h.getRoot(),insertedSelections:w}}function Ps(e){return ye(e.containingSelection(),e.middle.children)}function It(e){let{left:t,right:r,group:n}=e,o=t.index,a=r.index;return n.children.slice(o,a)}function OM(e,t){let r=e.group.children;for(let n=e.left.index;n<e.right.index;n++){let o=r[n].find(t);if(o)return o}}function Rs(e){return gu(e,"selection")}function gu(e,t){for(;;){let r=t==="root"?e.root.containingSelection():e.selection,n=OM(r,o=>(o.type==="brackets"||o.type==="string")&&!!o.ghostSide);if(!n)break;if(n.type!=="brackets"&&n.type!=="string")throw new Error(`Unreachable: ${n.type} is not brackets or string`);e=e.withSplicedMqTree(n.containingSelection(),()=>[Jf(n,void 0)])}return e}var Ds=class{constructor(t){this._index=-1;for(let r=0;r<t.length;r++){let n=t[r];n._parent=this,n._index=r}}parent(){return this._parent}getIndex(){return this._index}updateParent(t,r){this._parent=t,this._index=r}getRoot(){let t=this;for(;t.parent();)t=t.parent();if(t.type!=="group")throw new Error("Invariant failed: root is not group");return t}eq(t){return this===t}printLatex(){return ir(this)}siblingInDirection(t){let r=t+this.getIndex(),n=this.parent();if(n&&!(r<0||r>=Wt(n)))return tn(n,r)}numChildren(){return Wt(this)}nextSiblingInDir(t){return t==="right"?this.nextSibling():this.prevSibling()}nextSibling(){return this.siblingInDirection(1)}prevSibling(){return this.siblingInDirection(-1)}nthChild(t){let r=Wt(this);return t<0||t>=r?void 0:tn(this,t)}firstChild(){return this.nthChild(0)}lastChild(){let t=Wt(this);return this.nthChild(t-1)}lastChildInDir(t){return t==="left"?this.firstChild():this.lastChild()}firstCursor(){return new qe(this,0)}lastCursor(){return new qe(this,Wt(this))}lastCursorInDir(t){return t==="left"?this.firstCursor():this.lastCursor()}cursorOnSide(t){return t==="left"?new qe(this.parent(),this.getIndex()):new qe(this.parent(),this.getIndex()+1)}allParents(){let t=[];for(let r=this;r!==void 0;r=r.parent())t.push(r);return t}depth(){let t=0,r=this;for(;r.parent();)r=r.parent(),t+=1;return t}ancestorAtDepth(t){let r=this,n=this.depth();if(t<0||t>n)throw new Error(`Invalid depth ${t} for node of depth ${n}`);for(;n>t;)r=r.parent(),n-=1;return r}contains(t){return this.depth()<=t.depth()&&this.eq(t.ancestorAtDepth(this.depth()))}smallestAncestorGroup(){if(this.type==="group")return this;let t=this.parent();if(t===void 0)throw new Error("Programming Error: Non-group as root of the tree.");if(t.type==="group")return t;throw new Error("Programming error: non-group containing non-group.")}containingSelection(){if(this.type==="group")return jt(this,0,this.numChildren());if(this.type==="text-char")return this.containingGraphemeClusterSelection();{let t=this.parent(),r=this.getIndex();return jt(t,r,r+1)}}getDomNode(){var t;return this.type==="group"?this.mutable_domNode:(t=this.parent().mutable_domChildren)==null?void 0:t[this.getIndex()]}boundingClientRect(){let t=this.getDomNode();if(t&&t.getClientRects().length!==0)return t.getBoundingClientRect()}find(t){var r;if(t(this))return this;for(let n=0;n<this.numChildren();n++){let o=(r=this.nthChild(n))==null?void 0:r.find(t);if(o)return o}}},it=class extends Ds{};function hu(e,t){if(t.type==="group"!=(e.type==="group"))throw new Error("Cannot replace group with non-group or vice-versa.");let r=e.parent();if(r!==void 0){let n=e.getIndex(),o=GM(r,n,t);hu(r,o)}}var _e=class extends it{constructor(r){super([]);this.type="char";this.latex=r}};function nn(e){var t;return((t=e.parent())==null?void 0:t.type)==="string"}var Co=class extends it{constructor(r){super([]);this.type="text-char";if(this.text=r,r.length!==1)throw new Error(`Char ${JSON.stringify(r)} is not one code unit.`)}containingGraphemeClusterSelection(){let r=this.containingString(),n=this.getIndex(),{from:o,to:a}=Pf(r.fullText(),n);return jt(this.parent(),o,a)}containingString(){let r=this.parent().parent();if((r==null?void 0:r.type)!=="string")throw new Error("Invariant violation: text-char not inside string");return r}},an=class extends it{constructor({body:r,ghostSide:n}){super([r]);this.type="string";let o=r.children.find(a=>a.type!=="text-char");if(o)throw new Error(`Unexpected string child of type ${o.type}.`);this.body=r,this.ghostSide=n,this.text=this.body.children.map(a=>a.type!=="text-char"?"":a.text).join("")}fullText(){return this.text}};function Sa(e,t){return new an({body:e.body,ghostSide:t})}var Ma=class extends Ds{constructor(r){r=_M(r);super(r);this.type="group";let n=If(r);this.marks={mutable_operatorName:[],mutable_infixOperatorName:[],mutable_prefixOperatorName:[],ellipsis:n},this.children=r}};function re(e){return new Ma(e)}function eg(e){e.mutable_domChildren=void 0,e.mutable_domNode=void 0,e.marks.mutable_infixOperatorName=[],e.marks.mutable_prefixOperatorName=[],e.marks.mutable_operatorName=[]}function tg(e,t){let r=re(e.children.concat(t.children));return wa(e,r,n=>n),wa(t,r,n=>n+e.children.length),r}function _M(e){let t;for(let r=0;r<e.length;r++){let n=e[r];n.type==="brackets"&&(n.ghostSide==="left"&&r>0||n.ghostSide==="right"&&r<e.length-1)&&(t||(t=Array.from(e)),t[r]=rg(n,void 0))}return t!=null?t:e}var sn=class extends it{constructor({radicand:r,index:n}){let o=[];n&&o.push(n),o.push(r);super(o);this.type="sqrt";this.radicand=r,this.index=n}},je=class extends it{constructor({sub:r,sup:n}){let o=[];r&&o.push(r),n&&o.push(n);super(o);this.type="supsub";this.sup=n,this.sub=r}},Fr=class extends it{constructor({num:r,den:n}){super([r,n]);this.type="frac";this.num=r,this.den=n}},Dn=class extends it{constructor({num:r,den:n}){super([r,n]);this.type="binom";this.num=r,this.den=n}},ko=class extends it{constructor(){super([]);this.type="ans"}},Ls=class extends it{constructor({variant:r,id:n}){super([]);this.type="token";this.variant=r,this.id=n}},Ln=class extends it{constructor({kind:r,sub:n,sup:o}){let a=[];n&&a.push(n),o&&a.push(o);super(a);this.type="summation";this.kind=r,this.sub=n,this.sup=o}},At=class extends it{constructor({leftSymbol:r,rightSymbol:n,leftLatex:o,rightLatex:a,ghostSide:i,middle:s}){super([s]);this.type="brackets";this.leftSymbol=r,this.rightSymbol=n,this.leftLatex=o,this.rightLatex=a,this.ghostSide=i,this.middle=s}};function rg(e,t){return new At({leftSymbol:e.leftSymbol,rightSymbol:e.rightSymbol,leftLatex:e.leftLatex,rightLatex:e.rightLatex,ghostSide:t,middle:e.middle})}function Ca(e,t){return new At({leftSymbol:e.leftSymbol,rightSymbol:e.rightSymbol,leftLatex:e.leftLatex,rightLatex:e.rightLatex,ghostSide:e.ghostSide,middle:t})}function yu(e,t,r,n){return new At({leftSymbol:t==="left"?r:e.leftSymbol,rightSymbol:t==="right"?r:e.rightSymbol,leftLatex:t==="left"?n:e.leftLatex,rightLatex:t==="right"?n:e.rightLatex,ghostSide:void 0,middle:e.middle})}function Os(e,t){return t==="left"?e.leftSymbol:e.rightSymbol}function ng(e,t){return t==="left"?e.leftLatex:e.rightLatex}var qo=class extends it{constructor(){super([]);this.type="percentof"}},Eo=class extends it{constructor({val:r,styleParam:n,arg:o}){super([o]);this.type="style-cmd";this.val=r,this.styleParam=n,this.arg=o}};function _s(e,t){return e.numCols===t.numCols&&e.numRows===t.numRows}var sr=class e extends it{constructor({children:r,numCols:n,resizingInfo:o}){if(r.length===0||r.length%n!==0)throw new Error("Programming Error: invalid child count");super(r);this.type="matrix";this.children=r,this.numCols=n,this.resizingInfo=o}getNumCols(){return this.numCols}getNumRows(){return this.children.length/this.numCols}getDimensions(){return{numCols:this.getNumCols(),numRows:this.getNumRows()}}getChildAt(r,n){if(0<=n&&n<this.getNumRows()&&0<=r&&r<this.numCols)return this.children[n*this.numCols+r]}getPosOfChild(r){if(r.parent()!==this)throw new Error("Programming Error: getPosOfChild on not my child.");let n=r.getIndex(),o=this.numCols;return{x:n%o,y:Math.floor(n/o)}}withResizingStarted(){let r={colThresholds:void 0,rowThresholds:void 0,originalMatrix:this};return new e({children:this.children,numCols:this.numCols,resizingInfo:r})}withResizingDone(){return new e({children:this.children,numCols:this.numCols})}isBeingResized(){return this.resizingInfo!==void 0}};function Wt(e){switch(e.type){case"char":case"text-char":case"percentof":case"ans":case"token":return 0;case"brackets":case"string":return 1;case"sqrt":return e.index?2:1;case"frac":case"binom":return 2;case"supsub":case"summation":return(e.sub?1:0)+(e.sup?1:0);case"group":case"matrix":return e.children.length;case"style-cmd":return 1;default:throw new Error(`Invalid node: ${e.type}`)}}function On(e){return Wt(e)===0}function tn(e,t){let r=FM(e,t);if(r.type==="group"==(e.type==="group"))throw new Error("Cannot put a group inside a group or non-group inside a non-group.");return r}function og(e){if(e.type==="group")return e.children;let t=[];for(let r=0;r<e.numChildren();r++)t.push(tn(e,r));return t}function bu(e){let t=0;for(let r of og(e)){let n=bu(r);n>t&&(t=n)}return(e.type==="group"?1:0)+t}function xu(e,t){return e.type==="matrix"&&(e.getNumRows()>t||e.getNumCols()>t)?!0:og(e).some(r=>xu(r,t))}function ag(e){switch(e.type){case"char":case"percentof":case"ans":case"token":return!0;case"text-char":case"group":case"frac":case"binom":case"sqrt":case"supsub":case"summation":case"brackets":case"style-cmd":case"matrix":case"string":return!1;default:throw new Error(`Invalid node: ${e.type}`)}}function FM(e,t){switch(e.type){case"char":case"text-char":case"percentof":case"ans":case"token":break;case"brackets":if(t==0)return e.middle;break;case"string":if(t==0)return e.body;break;case"sqrt":if(e.index){if(t==0)return e.index;if(t==1)return e.radicand}else if(t==0)return e.radicand;break;case"binom":case"frac":if(t==0)return e.num;if(t==1)return e.den;break;case"supsub":case"summation":if(e.sub&&e.sup){if(t==0)return e.sub;if(t==1)return e.sup}else if(e.sub){if(t==0)return e.sub}else if(e.sup){if(t==0)return e.sup}else throw new Error("SupSub or Summation missing sup or sub.");break;case"group":case"matrix":if(0<=t&&t<e.children.length)return e.children[t];break;case"style-cmd":if(t==0)return e.arg;break;default:throw new Error(`Invalid node: ${e.type}`)}throw new Error(`Child not present with index ${t}.`)}function ka(e,t){if(e.index){if(t==0)return"index";if(t==1)return"radicand"}else if(t==0)return"radicand";throw new Error(`Child not present with index ${t}.`)}function _n(e,t){if(e.sub&&e.sup){if(t==0)return"sub";if(t==1)return"sup"}else if(e.sub){if(t==0)return"sub"}else if(e.sup){if(t==0)return"sup"}else throw new Error("SupSub or Summation missing sup or sub.");throw new Error(`Child not present with index ${t}.`)}function No(e,t){if(t==0)return"num";if(t==1)return"den";throw new Error(`Child not present with index ${t}.`)}function BM(e,t){switch(e.type){case"char":case"text-char":case"percentof":case"ans":case"token":break;case"brackets":if(t==0)return"middle";break;case"string":if(t==0)return"body";break;case"sqrt":return ka(e,t);case"binom":case"frac":return No(e,t);case"supsub":case"summation":return _n(e,t);case"style-cmd":if(t==0)return"arg";break;default:throw new Error(`Invalid node: ${e.type}`)}throw new Error(`Child not present with index ${t}.`)}function GM(e,t,r){if(e.type==="group"){if(r.type==="group")throw new Error("Invariant violation: A group should not have a non-group as child.");let o=e.children.slice(0,t).concat([r],e.children.slice(t+1)),a=re(o);return a.mutable_cursorIndices=e.mutable_cursorIndices,a}if(r.type!=="group")throw new Error("Invariant violation: A non-group should not have a group as child.");if(e.type==="matrix"){let o=Array.from(e.children);return o[t]=r,new sr({children:o,numCols:e.getNumCols()})}if(On(e))throw new Error("Programming Error: leaves have no children.");let n=BM(e,t);switch(e.type){case"frac":return new Fr({...e,[n]:r});case"binom":return new Dn({...e,[n]:r});case"sqrt":return new sn({...e,[n]:r});case"supsub":return new je({...e,[n]:r});case"summation":return new Ln({...e,[n]:r});case"brackets":return new At({...e,[n]:r});case"style-cmd":return new Eo({...e,[n]:r});case"string":return new an({...e,[n]:r})}}function Jf(e,t){switch(e.type){case"brackets":return rg(e,t);case"string":return Sa(e,t);default:throw new Error(`Programming Error: ${e.type} is not brackets or string`)}}var Fs={" ":"\\ ",pm:"\\pm",mp:"\\mp",times:"\\times",div:"\\div",cdot:"\\cdot",le:"\\le",ge:"\\ge",sim:"\\sim",tildeNbsp:"~",approx:"\\approx",cong:"\\cong",ncong:"\\ncong",nsim:"\\nsim",ne:"\\ne",parallel:"\\parallel",nparallel:"\\nparallel",perp:"\\perp",to:"\\to",forall:"\\forall",square:"\\square",mid:"\\mid",bigcirc:"\\bigcirc",angle:"\\angle",measuredangle:"\\measuredangle",triangle:"\\triangle",degree:"\\degree",parallelogram:"\\parallelogram",infty:"\\infty",backslash:"\\backslash","\\":"\\backslash",$:"\\$","?":"?","!":"!","@":"@","&":"\\&","#":"#","%":"\\%",",":",",".":"."},$M=["alpha","beta","gamma","delta","epsilon","varepsilon","zeta","eta","theta","vartheta","iota","kappa","varkappa","lambda","mu","nu","xi","pi","varpi","rho","varrho","sigma","varsigma","tau","upsilon","phi","varphi","chi","psi","omega","digamma","Gamma","Delta","Theta","Lambda","Xi","Pi","Sigma","Upsilon","Phi","Psi","Omega"],ig={};for(let e of $M){let t="\\"+e;Fs[e]=t,ig[t]=!0}function Io(e){return Fs[e]||e}function sg(e){if(e.type!=="char")return!1;let t=e.latex;return!!(/^[a-zA-Z]$/.test(t)||ig[t])}var VM={space:" ",bar:"overline",dfrac:"frac",cfrac:"frac",fraction:"frac",choose:"binom",binomial:"binom","\u2211":"sum",summation:"sum","\u220F":"prod",product:"prod",coproduct:"coprod","\u222B":"int",integral:"int",subscript:"_",superscript:"^",supscript:"^",\u03B1:"alpha",\u03B2:"beta",\u03B3:"gamma",\u03B4:"delta","\u03F5":"epsilon",\u03B5:"varepsilon",epsiv:"varepsilon",\u03B6:"zeta",\u03B7:"eta",\u03B8:"theta",thetav:"vartheta",thetasym:"vartheta",\u03D1:"vartheta",\u03B9:"iota",\u03BA:"kappa",kappav:"varkappa",\u03F0:"varkappa",\u03BB:"lambda",\u03BC:"mu",\u03BD:"nu",\u03BE:"xi",\u03C0:"pi",piv:"varpi",\u03D6:"varpi",\u03C1:"rho",rhov:"varrho",\u03F1:"varrho",\u03C3:"sigma",sigmaf:"varsigma",sigmav:"varsigma",\u03C2:"varsigma",\u03C4:"tau",upsi:"upsilon",\u03C5:"upsilon",\u03D5:"phi",\u03C6:"varphi",phiv:"varphi",\u03C7:"chi",\u03C8:"psi",\u03C9:"omega",gammad:"digamma",Gammad:"digamma",\u03DC:"digamma",\u0393:"Gamma",\u0394:"Delta",\u0398:"Theta",\u039B:"Lambda",\u039E:"Xi",\u03A0:"Pi",\u03A3:"Sigma",\u03A5:"Upsilon",Upsi:"Upsilon",upsih:"Upsilon",Upsih:"Upsilon",\u03A6:"Phi",\u03A8:"Psi",\u03A9:"Omega","\u2212":"-","\u2014":"-","\u2013":"-","\xB1":"pm",plusminus:"pm",plusmn:"pm","\u2213":"mp",mnplus:"mp",minusplus:"mp","\xD7":"times",cross:"times","\xF7":"div",divide:"div",divides:"div",sdot:"cdot","~":"sim","\u2241":"nsim","\u2248":"approx","\u2260":"ne",neq:"ne","\u2245":"cong","\u2247":"ncong",gt:">","\u2265":"ge",geq:"ge",lt:"<","\u2264":"le",leq:"le",prime:"'",dprime:"\u2033","\u25EF":"bigcirc","\u2225":"parallel","\u2226":"nparallel","\u27C2":"perp","\u2192":"to","\u2200":"forall","\u2220":"angle",ang:"angle","\u2221":"measuredangle","\u25B3":"triangle","\xB0":"degree","\u25B1":"parallelogram","\u25A1":"square","\u221E":"infty",infin:"infty",infinity:"infty"};function Fn(e){return VM[e]||e}var UM={arg:"cmd-operatorname",deg:"cmd-operatorname",det:"cmd-operatorname",dim:"cmd-operatorname",exp:"cmd-operatorname",gcd:"cmd-operatorname",hom:"cmd-operatorname",inf:"cmd-operatorname",ker:"cmd-operatorname",lg:"cmd-operatorname",lim:"cmd-operatorname",ln:"cmd-operatorname",log:"cmd-operatorname",max:"cmd-operatorname",min:"cmd-operatorname",sup:"cmd-operatorname",limsup:"cmd-operatorname",liminf:"cmd-operatorname",injlim:"cmd-operatorname",projlim:"cmd-operatorname",Pr:"cmd-operatorname",arcsinh:"cmd-operatorname",arsinh:"cmd-operatorname",sinh:"cmd-operatorname",arcsin:"cmd-operatorname",sin:"cmd-operatorname",arccosh:"cmd-operatorname",arcosh:"cmd-operatorname",cosh:"cmd-operatorname",arccos:"cmd-operatorname",cos:"cmd-operatorname",arctanh:"cmd-operatorname",artanh:"cmd-operatorname",tanh:"cmd-operatorname",arctan:"cmd-operatorname",tan:"cmd-operatorname",arcsech:"cmd-operatorname",arsech:"cmd-operatorname",sech:"cmd-operatorname",arcsec:"cmd-operatorname",sec:"cmd-operatorname",arccosech:"cmd-operatorname",arcosech:"cmd-operatorname",cosech:"cmd-operatorname",arccosec:"cmd-operatorname",cosec:"cmd-operatorname",arccsch:"cmd-operatorname",arcsch:"cmd-operatorname",csch:"cmd-operatorname",arccsc:"cmd-operatorname",csc:"cmd-operatorname",arccotanh:"cmd-operatorname",arcotanh:"cmd-operatorname",cotanh:"cmd-operatorname",arccotan:"cmd-operatorname",cotan:"cmd-operatorname",arccoth:"cmd-operatorname",arcoth:"cmd-operatorname",coth:"cmd-operatorname",arccot:"cmd-operatorname",cot:"cmd-operatorname",arcctgh:"cmd-operatorname",arctgh:"cmd-operatorname",ctgh:"cmd-operatorname",arcctg:"cmd-operatorname",ctg:"cmd-operatorname",gcf:"cmd-operatorname",hcf:"cmd-operatorname",lcm:"cmd-operatorname",proj:"cmd-operatorname",span:"cmd-operatorname",operatorname:"operatorname",f:"symbol",space:"symbol"," ":"symbol",".":"symbol",prime:"symbol","'":"symbol",dprime:"symbol","\u2033":"fragment",backslash:"symbol",$:"symbol","?":"symbol",square:"symbol",mid:"symbol",",":"symbol","@":"symbol","&":"symbol","%":"percent",parallel:"symbol",nparallel:"symbol",perp:"symbol",alpha:"symbol",beta:"symbol",gamma:"symbol",delta:"symbol",zeta:"symbol",eta:"symbol",theta:"symbol",iota:"symbol",kappa:"symbol",mu:"symbol",nu:"symbol",xi:"symbol",rho:"symbol",sigma:"symbol",tau:"symbol",chi:"symbol",psi:"symbol",omega:"symbol",phi:"symbol",varphi:"symbol",epsilon:"symbol",varepsilon:"symbol",varpi:"symbol",varsigma:"symbol",vartheta:"symbol",upsilon:"symbol",digamma:"symbol",varkappa:"symbol",varrho:"symbol",pi:"symbol",lambda:"symbol",Upsilon:"symbol",Gamma:"symbol",Delta:"symbol",Theta:"symbol",Lambda:"symbol",Xi:"symbol",Pi:"symbol",Sigma:"symbol",Phi:"symbol",Psi:"symbol",Omega:"symbol",forall:"symbol","\u2070":"fragment","\xB9":"fragment","\xB2":"fragment","\xB3":"fragment","\u2074":"fragment","\u2075":"fragment","\u2076":"fragment","\u2077":"fragment","\u2078":"fragment","\u2079":"fragment","\xBC":"fragment","\xBD":"fragment","\xBE":"fragment","\u2153":"fragment","\u2154":"fragment","\u2155":"fragment","\u2156":"fragment","\u2157":"fragment","\u2158":"fragment","\u2159":"fragment","\u215A":"fragment","\u215B":"fragment","\u215C":"fragment","\u215D":"fragment","\u215E":"fragment","\u2150":"fragment","\u2151":"fragment","\u2152":"fragment","\u221A":"fragment","\u2018":"fragment","\u2019":"fragment",\u02BC:"fragment","+":"symbol","-":"symbol",pm:"symbol",mp:"symbol",cdot:"symbol",to:"symbol","<":"symbol",">":"symbol",le:"symbol",ge:"symbol",infty:"symbol",ne:"symbol",times:"symbol",div:"symbol",tildeNbsp:"symbol",sim:"symbol",approx:"symbol",bigcirc:"symbol",angle:"symbol",degree:"symbol",triangle:"symbol",cong:"symbol",measuredangle:"symbol",parallelogram:"symbol",ncong:"symbol",nsim:"symbol",mathrm:"math-command",mathit:"math-command",mathbf:"math-command",mathsf:"math-command",mathtt:"math-command",underline:"math-command",bar:"math-command",overline:"math-command",overrightarrow:"math-command",overleftarrow:"math-command",overleftrightarrow:"math-command",overarc:"math-command",dot:"math-command",textcolor:"textcolor",_:"math-command","^":"math-command",sum:"summation",prod:"summation",coprod:"summation",int:"summation",frac:"math-command-2",over:"math-command",ans:"symbol",percentof:"symbol",percent:"symbol",token:"math-command",tokenName:"math-command",sqrt:"sqrt",hat:"math-command",nthroot:"sqrt",cbrt:"cbrt",vec:"math-command",tilde:"math-command",langle:"solo-bracket",rangle:"solo-bracket",lVert:"solo-bracket",rVert:"solo-bracket",left:"left",right:"right",begin:"begin",text:"text",binomial:"math-command-2",binom:"math-command-2",choose:"math-command-2"},zM={"\u2070":"^0","\xB9":"^1","\xB2":"^2","\xB3":"^3","\u2074":"^4","\u2075":"^5","\u2076":"^6","\u2077":"^7","\u2078":"^8","\u2079":"^9","\xBC":"\\frac14","\xBD":"\\frac12","\xBE":"\\frac34","\u2153":"\\frac13","\u2154":"\\frac23","\u2155":"\\frac15","\u2156":"\\frac25","\u2157":"\\frac35","\u2158":"\\frac45","\u2159":"\\frac16","\u215A":"\\frac56","\u215B":"\\frac18","\u215C":"\\frac38","\u215D":"\\frac58","\u215E":"\\frac78","\u2150":"\\frac17","\u2151":"\\frac19","\u2152":"\\frac{1}{10}","\u221A":"\\sqrt{}","\u2033":"''","\u2018":"'","\u2019":"'",\u02BC:"'"};function lg(e){return UM[e]}function Bs(e){return zM[e]||""}function Tu(e){return e.stream[0]}function HM(e){return{...e,stream:e.stream.slice(1)}}function cg(e){return Tu(e)===void 0}function st(e,t){if(e.stream.startsWith(t))return{val:t,state:{stream:e.stream.slice(t.length)}}}function ug(e){return{stream:e}}function WM(e){return cg(e)?void 0:{val:Tu(e),state:HM(e)}}function Yt(e,t){let r=t.exec(e.stream);if(r){let n=r[0];return{val:r[0],state:{stream:e.stream.slice(n.length)}}}else return}function Re(e,t){return{state:e,tree:t}}function KM(e,t){return{state:e,result:t}}function jM(e){{let t=st(e,"\\");if(!t)return Yt(e,/^[^\\a-z]/i);e=t.state}{let t=Yt(e,/^[a-z]+/i);if(t)return t}{let t=Yt(e,/^\s+/);if(t)return{val:" ",state:t.state}}{let t=WM(e);if(t)return t}}function QM(e,t){let r=jM(e);if(!r)return;e=r.state;let n=Fn(r.val);return YM(e,n)}function YM(e,t){let r=lg(t);if(r)switch(r){case"cmd-operatorname":return Re(e,t.split("").map(n=>({type:"letter",content:n,latex:n})));case"fragment":{let n=Bs(t);if(!n)return;let o=Gs(ug(n));return o?Re(e,o.tree.children):void 0}case"left":{e=Pt(e);let n="",o="";{let c=Yt(e,/^(?:[([|]|\\\{|\\langle(?![a-zA-Z])|\\lVert(?![a-zA-Z]))/);if(!c)return;e=c.state,o=c.val,n=o.replace("\\",""),(o==="\\langle"||o==="\\lVert")&&(o+=" ")}let a;{let c=Gs(e);if(!c)return;e=c.state,a=c.tree}{let c=st(e,"\\right");if(!c)return;e=c.state,e=Pt(e)}let i="",s="";{let c=Yt(e,/^(?:[\])|]|\\\}|\\rangle(?![a-zA-Z])|\\rVert(?![a-zA-Z]))/);if(!c)return;e=c.state,s=c.val,i=s.replace("\\",""),(s==="\\rangle"||s==="\\rVert")&&(s+=" ")}return Re(e,{type:"brackets",leftSymbol:n,leftLatex:o,rightSymbol:i,rightLatex:s,middle:a})}case"right":return;case"solo-bracket":{let n=hr(e);if(!n)return;if(e=n.state,t==="langle"||t==="rangle")return Re(e,{type:"brackets",leftSymbol:"langle",leftLatex:"\\langle ",rightSymbol:"rangle",rightLatex:"\\rangle ",ghostSide:t==="langle"?"right":"left",middle:n.tree});if(t==="lVert"||t==="rVert")return Re(e,{type:"brackets",leftSymbol:"lVert",leftLatex:"\\lVert ",rightSymbol:"rVert",rightLatex:"\\rVert ",ghostSide:t==="lVert"?"right":"left",middle:n.tree});throw new Error("unrecognized. solo-bracket ctrlSeq: "+t)}break;case"math-command":case"math-command-2":{let n=r==="math-command-2"?2:1,o=[];for(let a=0;a<n;a++){let i=hr(e);if(!i)return;e=i.state,o.push(i.tree)}return Re(e,{type:"command",ctrlSeq:t,blocks:o})}case"operatorname":{let n=hr(e);if(!n)return;let o="";for(let a of n.tree.children)if(a.type!=="letter"){o="";break}else o+=a.content;return o==="ans"?Re(n.state,{type:"ans"}):Re(n.state,n.tree.children)}case"percent":{e=Pt(e);let n=st(e,"\\operatorname{of}");return n?Re(n.state,{type:"percentof"}):Re(e,{type:"symbol",content:"%",latex:"\\%"})}case"sqrt":{let n=iS(e);n&&(e=n.state);let o=hr(e);return o?(e=o.state,Re(e,{type:"sqrt",index:n==null?void 0:n.tree,radicand:o.tree})):void 0}case"cbrt":{let n=hr(e);return n?(e=n.state,Re(e,{type:"sqrt",index:{type:"block",children:[{type:"digit",content:"3"}]},radicand:n.tree})):void 0}case"summation":{let n={type:"block",children:[]},o={type:"block",children:[]};for(;;){e=Pt(e);let a;{let i=Yt(e,/^[_^]/);if(!i)break;e=i.state,a=i.val==="_"?"sub":"sup"}{let i=hr(e);if(!i)return;e=i.state;let s=a==="sub"?n.children:o.children;for(let c of i.tree.children)s.push(c)}}switch(t){case"int":case"sum":case"prod":case"coprod":return Re(e,{type:"summation",kind:"\\"+t,sub:n,sup:o});default:throw new Error("Programming Error: summation sub-parser incorrect.")}}case"symbol":return Re(e,{type:"symbol",latex:t,content:t});case"textcolor":{e=Pt(e);{let o=st(e,"{");if(!o)return;e=o.state}let n;{let o=Yt(e,/^[#\w\s.,()%-]*/);if(!o)return;e=o.state,n=o.val}{let o=st(e,"}");if(!o)return;e=o.state}{let o=hr(e);return o?(e=o.state,Re(e,{type:"style-cmd",ctrlSeq:"\\textcolor",styleParam:n,arg:o.tree})):void 0}}case"begin":return nS(e);case"text":return oS(e);default:return}}function Pt(e){let t=Yt(e,/^\s*/);return t?t.state:e}function XM(e){let t=Yt(e,/^[a-z]/i);if(t!=null&&t.val)return Re(t.state,{type:"letter",latex:t.val,content:t.val})}function ZM(e){let t=Yt(e,/^[0-9]/);if(t!=null&&t.val)return Re(t.state,{type:"digit",latex:t.val,content:t.val})}function JM(e){let t=Yt(e,/^[^${}\\_^]/);if(t!=null&&t.val)return Re(t.state,{type:"symbol",latex:t.val,content:t.val})}function eS(e){let t=QM(e);if(t||(t=XM(e),t)||(t=ZM(e),t)||(t=JM(e),t))return t}function Gs(e){let t={type:"block",children:[]},r;for(;r=hr(e);){e=r.state;for(let n of r.tree.children)t.children.push(n)}return e=Pt(e),Re(e,t)}function tS(e){e=Pt(e);{let t=st(e,"\\end{bmatrix}");if(t)return{state:t.state,result:"\\end{bmatrix}"}}{let t=st(e,"&");if(t)return{state:t.state,result:"&"}}{let t=st(e,"\\\\");if(t)return{state:t.state,result:"\\\\"}}}function rS(e){let t={type:"block",children:[]},r;for(;;){if(r=tS(e),r!==void 0){e=r.state;break}let n=hr(e);if(!n)return;e=n.state;for(let o of n.tree.children)t.children.push(o)}return e=Pt(e),KM(e,{tree:t,stopSymbol:r.result})}function nS(e){{let n=st(e,"{bmatrix}");if(!n)return;e=Pt(n.state)}let t=[],r=[];e:for(;;){if(r.length===0){let o=st(e,"\\end{bmatrix}");if(o){e=o.state;break}}let n=rS(e);if(!n)return;switch(e=Pt(n.state),r.push(n.result.tree),n.result.stopSymbol){case"&":break;case"\\\\":t.push(r),r=[];break;case"\\end{bmatrix}":{t.push(r);break e}}}return Re(e,{type:"matrix",rows:t})}function oS(e){{let r=st(e,"{");if(!r)return;e=r.state}let t;{let r=Yt(e,/^(?:[^}\\]|\\.)*/);if(!r)return;e=r.state;let n=r.val;if(!n.startsWith("``")||!n.endsWith("''")||(t=qs(n.slice(2,-2)),t===void 0))return}{let r=st(e,"}");if(!r)return;e=r.state}return Re(e,{type:"string",text:t})}function aS(e){{let r=st(e,"{");if(!r)return;e=r.state}let t;{let r=Gs(e);if(!r)return;e=r.state,t=r.tree}{let r=st(e,"}");if(!r)return;e=r.state}return Re(e,t)}function hr(e){e=Pt(e);let t=aS(e);if(t)return t;let r=eS(e);if(r)return Re(r.state,{type:"block",children:Array.isArray(r.tree)?r.tree:[r.tree]})}function iS(e){{let r=st(e,"[");if(!r)return;e=r.state}let t=[];{let r;for(;Tu(e)!=="]"&&(r=hr(e));){e=r.state;for(let n of r.tree.children)t.push(n)}}e=Pt(e);{let r=st(e,"]");if(!r)return;e=r.state}return Re(e,{type:"block",children:t})}function sS(e,t){let r;for(let n=t;n<e.children.length;n++){let o=e.children[n];if(o.type!=="command")return;let a=o.ctrlSeq;if(a!=="_"&&a!=="^")return;e.children.splice(n,1),n-=1,r||(r={type:"supsub",sub:void 0,sup:void 0},n+=1,e.children.splice(n,0,r));let i=a==="_"?"sub":"sup";r[i]||(r[i]={type:"block",children:[]});let s=r[i].children;for(let c of o.blocks[0].children)s.push(c)}}function Qt(e,t){for(let r=0;r<e.children.length;r++)sS(e,r);for(let r of e.children)switch(r.type){case"command":for(let n of r.blocks)Qt(n,t);break;case"supsub":r.sub&&Qt(r.sub,t),r.sup&&Qt(r.sup,t);break;case"summation":r.sub&&Qt(r.sub,t),r.sup&&Qt(r.sup,t);break;case"brackets":Qt(r.middle,t);break;case"sqrt":r.index&&Qt(r.index,t),Qt(r.radicand,t);break;case"block":Qt(r,t);break;case"style-cmd":Qt(r.arg,t);break;case"matrix":{for(let n of r.rows)for(let o of n)Qt(o,t);break}case"digit":case"ans":case"percentof":case"symbol":case"letter":case"string":break;default:}}function pg(e,t){let r=ug(e),n={type:"block",children:[]};r=Pt(r);let o=Gs(r);return!o||(r=o.state,!cg(r))?n:(Qt(o.tree,t),o.tree)}var lS={",":!0,";":!0,":":!0},cS={"+":!0,"-":!0,"\\pm":!0,"\\mp":!0},wu={"+":!0,"-":!0,"=":!0,"<":!0,">":!0,"\\ge":!0,"\\le":!0,"\\sim":!0,"\\approx":!0,"\\to":!0,"\\ne":!0,"\\cong":!0,"\\ncong":!0,"\\pm":!0,"\\mp":!0,"\\times":!0,"\\div":!0,"\\cdot":!0};function vu(e,t,r){return e.type!=="char"?!1:!!(wu[e.latex]||Ht(t.marks.mutable_infixOperatorName,r))}function uS(e){let t=e.parent();if((t==null?void 0:t.type)==="group"){let r=e.getIndex();if(r!==-1)return{group:t,index:r}}throw new Error("could not find groupAndIndex")}function dg(e){var n;let t=e.prevSibling();if(t){let{group:o,index:a}=uS(t);return!(vu(t,o,a)||Ht(o.marks.mutable_prefixOperatorName,a)||t.type==="char"&&/^(\\ )|[,;:\(\[]$/.test(t.latex)||t.type==="summation")}let r=(n=e.parent())==null?void 0:n.parent();return r&&r.type==="style-cmd"&&r.val==="\\textcolor"?dg(r):!1}function Bn(e){if(e.type!=="char")return!1;let t=e.latex;if(t==="+"||t==="-"||t==="\\pm"||t==="\\mp")return dg(e);if(cS[t]){let r=e.prevSibling();if(r&&r.type==="char"){let n=r.latex;if(!wu[n]&&!lS[n])return!0}return!1}return!!wu[t]}function pS(e){return(e==null?void 0:e.type)==="char"&&/^(\\ )|[0-9.]$/.test(e.latex)}function Mu(e){return(e==null?void 0:e.type)==="char"&&e.latex==="\\ "}function dS(e){return(e==null?void 0:e.type)==="char"&&e.latex==="."}function Vs(e,t){return e.digitGroupingMap.get(t)}function Us(e,t){let r;for(let n=t.length-1;n>=0;n--)pS(t[n])?r||(r=n):r!==void 0&&($s(e,t,n+1,r),r=void 0);r!==void 0&&$s(e,t,0,r)}function $s(e,t,r,n){for(;Mu(t[r]);)r+=1;for(;Mu(t[n]);)n-=1;if(r>n)return;let o=0,a=0,i=[];for(let c=r;c<=n;c++){let f=t[c];if(Mu(f)?(o+=1,a=0):dS(f)?(i.push(c),a+=1):a=0,a===3)break}if(a===3){let c=i.pop();i.pop();let f=i.pop();$s(e,t,r,f-1),$s(e,t,c+1,n);return}o>0||i.length>1||(i.length?i[0]!==r&&mg(e,t,r,i[0]-1):mg(e,t,r,n))}function mg(e,t,r,n){let o=0,a=0;for(let s=n;s>=r;s--)a+=1;let i=a%3;i===0&&(i=3);for(let s=n;s>=r;s--){o+=1;let c;a>=4&&(o===a?i===1?c="dcg-mq-group-leading-1":i===2?c="dcg-mq-group-leading-2":c="dcg-mq-group-leading-3":o%3===0&&o!==a&&(c="dcg-mq-group-start"),c||(c="dcg-mq-group-other")),e.digitGroupingMap.set(t[s],c)}}function gg(e,t,r,n,o,a){var me;let i,s=fg(r);if(s){if(i=fg(o),!i||i.prefix!==s.prefix)return!1}else return!1;let c=[...Nt(n)],f=[...Nt(t)];if(c.length!==f.length)return!1;a==null||a();let h={digitGroupingMap:new Map};Us(h,t.children);let w=i.digits,N=s.digits,I=!1,$=!1;w[0]==="-"&&(I=!0),N[0]==="-"&&($=!0);let C=n.children.length-w.length,M=(me=n.mutable_domChildren)==null?void 0:me.slice(0,C);if(!M)return!1;let S=n.children[C],_=t.children[C];if(I&&!$){let q=S;if((q==null?void 0:q.type)!=="char"||q.latex!=="-")return!1;let D=q.getDomNode();if(!D)return!1;D.remove()}let B;if(I&&$&&(B=S.getDomNode()),!I&&$){B=document.createElement("span"),B.textContent="\u2212";let q=S==null?void 0:S.getDomNode();if(!q)return!1;e.insertBefore(B,q)}if(B){M.push(B);let q=Bn(_);B.classList.toggle("dcg-mq-binary-operator",q)}I&&(S=S==null?void 0:S.nextSibling()),$&&(_=_==null?void 0:_.nextSibling());function W(q){let D="dcg-mq-digit",P=Vs(h,q);return P&&(D+=" "+P),D}for(;_&&S;_=_.nextSibling(),S=S.nextSibling()){if((_==null?void 0:_.type)!=="char"||(S==null?void 0:S.type)!=="char")return!1;let q=S.getDomNode();if(!q)return!1;q.textContent!==_.latex&&(q.textContent=_.latex),q.className=W(_),M.push(q)}for(;S;S=S.nextSibling()){let q=S.getDomNode();if(!q)return!1;q.remove()}if(_){let q=document.createDocumentFragment();for(;_;_=_.nextSibling()){if(_.type!=="char")return!1;let D=document.createElement("span");D.className=W(_),D.textContent=_.latex,q.appendChild(D),M.push(D)}e.appendChild(q)}if(M.length!==t.children.length)return!1;for(let q=1;q<f.length;q++)f[q].mutable_domNode=c[q].mutable_domNode,f[q].mutable_domChildren=c[q].mutable_domChildren;return t.mutable_domChildren=M,t.mutable_domNode=e,!0}function fg(e){if(typeof e!="string")return;let t=e.match(/-?[0-9.]+$/g);if(t&&t.length===1)return{latex:e,prefix:e.substring(0,e.length-t[0].length),digits:t[0]}}function hg(e,t){return(n,o)=>e(n,o,t)}var mS={"-":"mq-narration-minus","+":"mq-narration-plus","?":"mq-narration-question-mark","<":"mq-narration-less-than",">":"mq-narration-greater-than","\\ge":"mq-narration-greater-than-or-equal-to","\\le":"mq-narration-less-than-or-equal-to","\\sim":"mq-narration-similar","=":"mq-narration-equals","\\approx":"mq-narration-approximately-equal","\\ne":"mq-narration-not-equal","\\ ":"","'":"mq-narration-prime","\u2033":"mq-narration-double-prime","\\pm":"mq-narration-plus-or-minus","\\mp":"mq-narration-minus-or-plus","\\cdot":"mq-narration-times","\\infty":"mq-narration-infinity","\\degree":"mq-narration-degrees","\\cong":"mq-narration-congruent","\\ncong":"mq-narration-not-congruent","\\$":"mq-narration-dollar","\\nparallel":"mq-narration-not-parallel","\\perp":"mq-narration-perpendicular","\\div":"mq-narration-divided-by","\\bigcirc":"mq-narration-circle","\\measuredangle":"mq-narration-measured-angle","\\nsim":"mq-narration-not-similar","\\Upsilon":"mq-narration-capital-upsilon","~":""};function fS(e,t){let r=mS[e];return r===""?"":r!==void 0?t(r):e.startsWith("\\")?e.slice(1):e}function gS(e){return e=e.replace(/ +/g," "),e=e.replace(/(\.)([0-9]+)/g,(t,r,n)=>r+n.split("").join(" ").trim()),e.trim()}function Hs(e,t,r){return((/[A-Za-z0-9]$/.test(e)?e+":":e)+" "+t+" "+r).trim()}function Xt(e,t){let r=e.type==="group"?lt(e,t):xg(e,t);return gS(r)}function Cu(e,t){if(Ee(e))return"";let r="";for(let n=e.left.index;n<e.right.index;n++){let o=e.group.nthChild(n);r+=Xt(o,t),o.type!=="text-char"&&(r+=" ")}return r.trim()}function yg(e,t){let r=Cu(e,t);return r===""?t.localize("mq-narration-nothing-selected"):r+" "+t.localize("mq-narration-selected")}function lt(e,t){var a,i;if(e.children.length===0&&((a=e.parent())==null?void 0:a.type)==="matrix")return"0";let r="",n="",o=e.numChildren();for(let s=0;s<o;s++){let c=e.nthChild(s);if(c.type==="char"){if(An(e.marks.mutable_operatorName,s)){n+=c.latex;continue}else if(Ht(e.marks.mutable_operatorName,s)){n+=c.latex;let w="",N=(i=t.autoOperatorNames)==null?void 0:i.get(n);typeof N=="string"&&N.startsWith("mq-narration-op")?w=t.localize(N):typeof N=="string"&&N!=""&&(w=N),r+=w||n,r+=" ",n="";continue}else if(n){n+=c.latex;continue}}let f=xg(c,t),h=c.type==="char"?c.latex:"";c.type!=="text-char"&&(h.length!==1||!/^[0-9.]$/.test(h)&&!bg(e))?r+=" "+f+" ":r+=f}return r}function bg(e){let t=e.parent();return t&&kg(t)}function xg(e,t){switch(e.type){case"ans":return" ans";case"percentof":return" "+t.localize("mq-narration-percent-of")+" ";case"style-cmd":return qS(e,t);case"summation":return yS(e,t);case"token":{let n=e.getDomNode();if(n){let o=[];for(let a of n.children){let i=a.getAttribute("aria-label");typeof i=="string"&&i!==""&&o.push(i.trim())}if(o.length>0)return o.join(" ")}return" "+t.localize("mq-narration-token")+" "+e.id}case"brackets":return xS(e,t);case"sqrt":return TS(e,t);case"binom":{let n=lt(e.num,t),o=lt(e.den,t);return t.localize("mq-narration-binomial",{num:n,den:o})}case"frac":return ES(e,t);case"supsub":return vS(e,t);case"char":let r=Bn(e);return e.latex==="-"&&!r?" "+t.localize("mq-narration-negative"):e.latex==="+"&&!r?" "+t.localize("mq-narration-positive"):/^[a-z]$/i.test(e.latex)?bg(e.parent())?e.latex:`"${e.latex}"`:fS(e.latex,t.localize);case"matrix":return MS(e,t);case"string":return t.localize("mq-narration-start-string")+" "+e.fullText()+" "+t.localize("mq-narration-end-string");case"text-char":return t.speakSpace&&/^\s$/.test(e.text)?t.localize("mq-narration-space"):e.text;default:return""}}var Tg={"\\int":"mq-narration-integral","\\sum":"mq-narration-sum","\\prod":"mq-narration-product","\\coprod":"mq-narration-co-product"},hS={"\\int":"mq-narration-summation-integral","\\sum":"mq-narration-summation-sum","\\prod":"mq-narration-summation-product","\\coprod":"mq-narration-summation-co-product"};function yS(e,t){let r=lt(e.sub,t),n=lt(e.sup,t);return t.localize(hS[e.kind],{start:r,end:n})+","}var zs={"(":"parenthesis",")":"parenthesis","|":"pipe","{":"brace","}":"brace","[":"bracket","]":"bracket",langle:"angle-bracket",rangle:"angle-bracket",lVert:"double-vertical-line",rVert:"double-vertical-line"},wg={"angle-bracket":"mq-narration-left-angle-bracket",brace:"mq-narration-left-brace",bracket:"mq-narration-left-bracket","double-vertical-line":"mq-narration-left-double-vertical-line",parenthesis:"mq-narration-left-parenthesis",pipe:"mq-narration-left-pipe"},vg={"angle-bracket":"mq-narration-right-angle-bracket",brace:"mq-narration-right-brace",bracket:"mq-narration-right-bracket","double-vertical-line":"mq-narration-right-double-vertical-line",parenthesis:"mq-narration-right-parenthesis",pipe:"mq-narration-right-pipe"},bS={"angle-bracket":"mq-narration-block-angle-bracket",brace:"mq-narration-block-brace",bracket:"mq-narration-block-bracket","double-vertical-line":"mq-narration-block-double-vertical-line",parenthesis:"mq-narration-block-parenthesis",pipe:"mq-narration-block-pipe"};function Ws(e,t,r){let n=Os(e,t),o=zs[n];if(!o)return"";let{leftSymbol:a,rightSymbol:i}=e;return a==="|"&&i==="|"?r.localize(t==="left"?"mq-narration-absolute-value-start":"mq-narration-absolute-value-end"):r.localize(t==="left"?wg[o]:vg[o])}function xS(e,t){let{leftSymbol:r,rightSymbol:n}=e;if(r==="|"&&n==="|")return["",t.localize("mq-narration-absolute-value-start")+",",lt(e.middle,t)+",",t.localize("mq-narration-absolute-value-end")].join(" ");let o=zs[r],a=zs[n],i=o?t.localize(wg[o]):"",s=a?t.localize(vg[a]):"";return["",i+",",lt(e.middle,t)+" ,",s].join(" ")}function TS(e,t){let r=lt(e.radicand,t);if(e.index){if(e.index.children.length===1&&e.index.children[0].type==="char"&&e.index.children[0].latex==="3")return" "+t.localize("mq-narration-cube-root",{radicand:r});{let n=lt(e.index,t);return" "+t.localize("mq-narration-nth-root",{index:n,radicand:r})}}return" "+t.localize("mq-narration-square-root",{radicand:r})}function wS(e,t){let r=Su(e);if(!qa.test(r)||t!=null&&t.ignoreShorthand)return;if(r==="0")return t.localize("mq-narration-power-0");if(r==="2")return t.localize("mq-narration-power-squared");if(r==="3")return t.localize("mq-narration-power-cubed");let n=/^([+-]?)(\d{1,3})$/.exec(r);if(n){let[,a,i]=n,s=parseInt(i,10),c=ku(s,t.language),f=`${s}`;return a==="-"?t.localize("mq-narration-power-negative-ordinal",{power:f,category:c}):t.localize("mq-narration-power-ordinal",{power:f,category:c})}let o=lt(e,t);return t.localize("mq-narration-power",{power:o})}function ku(e,t){return new Intl.PluralRules(t,{type:"ordinal"}).select(e)}function vS(e,t){let r="";if(e.sub){let n=lt(e.sub,t);r+=" "+t.localize("mq-narration-sub",{sub:n})+" "}if(e.sup){let n=wS(e.sup,t);if(n)r+=n;else{let o=lt(e.sup,t);r+=" "+t.localize("mq-narration-sup",{sup:o})+" "}}return r}function MS(e,t){let r="",{numRows:n,numCols:o}=e.getDimensions();r+=t.localize("mq-narration-matrix-start",{rows:n,columns:o});let a=t.maxResizingMatrixSize,i=t.static&&n>a,s=t.static&&o>a,c=i?a-1:n,f=s?a-1:o,h=SS(e);for(let w=0;w<c;w++){r+=" "+Mg(w,t);for(let N=0;N<f;N++)h||(r+=" "+Sg(N,t)),r+=" "+lt(e.getChildAt(N,w),t);s&&(r+=" \u22EF")}return i&&(r+=" \u22EF"),r+=" "+t.localize("mq-narration-matrix-end"),r}function SS(e){return e.children.every(t=>t.children.length===0?!0:t.children.length!==1?!1:t.children[0].type==="char")}function Mg(e,t){return e+=1,t.localize("mq-narration-matrix-row-start",{index:`${e}`,category:ku(e,t.language)})}function Sg(e,t){return e+=1,t.localize("mq-narration-matrix-column-start",{index:`${e}`,category:ku(e,t.language)})}function CS(e,t){switch(e.val){case"\\textcolor":return" "+e.styleParam;case"\\mathbf":return t.localize("mq-narration-style-bold-font");case"\\mathit":return t.localize("mq-narration-style-italic-font");case"\\mathrm":return"";case"\\mathsf":return t.localize("mq-narration-style-serif-font");case"\\mathtt":return t.localize("mq-narration-style-math-text");case"\\overarc":return t.localize("mq-narration-style-over-arc");case"\\overleftarrow":return t.localize("mq-narration-style-over-left-arrow");case"\\overleftrightarrow":return t.localize("mq-narration-style-over-left-and-right-arrow");case"\\overline":return t.localize("mq-narration-style-overline");case"\\overrightarrow":return t.localize("mq-narration-style-over-right-arrow");case"\\underline":return t.localize("mq-narration-style-underline");case"\\dot":return t.localize("mq-narration-style-dot");case"\\tilde":return t.localize("mq-narration-style-tilde");case"\\hat":return t.localize("mq-narration-style-hat");case"\\vec":return t.localize("mq-narration-style-vec");default:return e.val,""}}function qu(e,t){var r;switch(e.val){case"\\textcolor":return t.localize("mq-narration-style-color-start",{color:(r=e.styleParam)!=null?r:""});case"\\mathbf":return t.localize("mq-narration-style-bold-font-start");case"\\mathit":return t.localize("mq-narration-style-italic-font-start");case"\\mathrm":return"";case"\\mathsf":return t.localize("mq-narration-style-serif-font-start");case"\\mathtt":return t.localize("mq-narration-style-math-text-start");case"\\overarc":return t.localize("mq-narration-style-over-arc-start");case"\\overleftarrow":return t.localize("mq-narration-style-over-left-arrow-start");case"\\overleftrightarrow":return t.localize("mq-narration-style-over-left-and-right-arrow-start");case"\\overline":return t.localize("mq-narration-style-overline-start");case"\\overrightarrow":return t.localize("mq-narration-style-over-right-arrow-start");case"\\underline":return t.localize("mq-narration-style-underline-start");case"\\dot":return t.localize("mq-narration-style-dot-start");case"\\tilde":return t.localize("mq-narration-style-tilde-start");case"\\hat":return t.localize("mq-narration-style-hat-start");case"\\vec":return t.localize("mq-narration-style-vec-start");default:return e.val,""}}function kS(e,t){var r;switch(e.val){case"\\textcolor":return t.localize("mq-narration-style-color-end",{color:(r=e.styleParam)!=null?r:""});case"\\mathbf":return t.localize("mq-narration-style-bold-font-end");case"\\mathit":return t.localize("mq-narration-style-italic-font-end");case"\\mathrm":return"";case"\\mathsf":return t.localize("mq-narration-style-serif-font-end");case"\\mathtt":return t.localize("mq-narration-style-math-text-end");case"\\overarc":return t.localize("mq-narration-style-over-arc-end");case"\\overleftarrow":return t.localize("mq-narration-style-over-left-arrow-end");case"\\overleftrightarrow":return t.localize("mq-narration-style-over-left-and-right-arrow-end");case"\\overline":return t.localize("mq-narration-style-overline-end");case"\\overrightarrow":return t.localize("mq-narration-style-over-right-arrow-end");case"\\underline":return t.localize("mq-narration-style-underline-end");case"\\dot":return t.localize("mq-narration-style-dot-end");case"\\tilde":return t.localize("mq-narration-style-tilde-end");case"\\hat":return t.localize("mq-narration-style-hat-end");case"\\vec":return t.localize("mq-narration-style-vec-end");default:return e.val,""}}function qS(e,t){let r=lt(e.arg,t),n=qu(e,t),o=kS(e,t);return n?n+", "+r+" "+o:r}function Su(e){let t="";for(let r of e.children){if(r.type!=="char")return"";t+=r.latex}return t}var qa=/^[\+\-]?[\d]+$/;function ES(e,t){let r=Su(e.num),n=Su(e.den),o=lt(e.num,t),a=lt(e.den,t),i=e.mutable_fracDepth&&e.mutable_fracDepth>1?t.localize("mq-narration-fraction-nested",{num:o,den:a}):t.localize("mq-narration-fraction",{num:o,den:a});if(!(t!=null&&t.ignoreShorthand)&&qa.test(r)&&qa.test(n)){let w="";r[0]=="-"&&(w=t.localize("mq-narration-negative")),r[0]=="+"&&(w=t.localize("mq-narration-positive")),i=t.localize("mq-narration-fraction-shorthand",{num:yi(Math.abs(parseInt(r))),den:yi(parseInt(n)),numPrefix:w,full:i})}let s=!1,c;for(c=e.prevSibling();(c==null?void 0:c.type)==="char"&&(c.latex==="\\ "||qa.test(c.latex));c=c.prevSibling())qa.test(c.latex)&&(s=!0);let f=c;return s&&!((f==null?void 0:f.type)==="char"&&f.latex===".")?" "+t.localize("mq-narration-fraction-and")+" "+i:i}function Cg(e,t,r){switch(e.type){case"char":case"text-char":case"percentof":case"ans":case"token":return"";case"brackets":if(e.leftLatex==="|"&&e.rightLatex==="|")return r.localize("mq-narration-absolute-value");let n=zs[e.leftLatex];return n?r.localize(bS[n]):"";case"sqrt":return e.index===void 0?r.localize("mq-narration-root"):r.localize(ka(e,t)==="index"?"mq-narration-index":"mq-narration-radicand");case"binom":return r.localize(No(e,t)==="num"?"mq-narration-index-upper":"mq-narration-index-lower");case"frac":return r.localize(No(e,t)==="num"?"mq-narration-numerator":"mq-narration-denominator");case"supsub":return r.localize(_n(e,t)==="sub"?"mq-narration-subscript":"mq-narration-superscript");case"summation":return r.localize(_n(e,t)==="sub"?"mq-narration-bound-lower":"mq-narration-bound-upper");case"style-cmd":return CS(e,r);case"matrix":{let{x:o,y:a}=e.getPosOfChild(e.children[t]);return Mg(a,r)+" "+Sg(o,r)}case"string":return r.localize("mq-narration-string");default:throw new Error(`Invalid node: ${e.type}`)}}var Ea={selections:[],dir:"right"},Ks=class e{constructor(t,r,n,o,a,i,s,c){this.ariaLabel="";this.ariaPostLabel="";this.ariaQueue=[];if(this.root=t,Xf(r),this.selection=r,this.config=n,this.mouseDownState=o,this.ariaLabel=a,this.ariaPostLabel=i,this.ariaQueue=s,this.tabHistory=c,this.s=hg(this.config.localize,this.config.language),r.group.getRoot()!==t)throw new Error("Programming Error: selection must be inside root");Eg(t,this.config)}static empty(){let t=re([]),r=K(t.lastCursor());return new e(t,r,Ng(),{type:"none"},"","",[],Ea)}withConfig(t){return Mn(co(t,Eu),co(this.config,Eu))||NS(this.root),new e(this.root,this.selection,t,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withRootAndSelection(t,r){return new e(t,r,this.config,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withSelection(t){return new e(this.root,t,this.config,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withTabHistory(t){return new e(this.root,this.selection,this.config,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,t)}withPointSelection(t){let r=K(t);return this.withSelection(r)}withMouseDownState(t){return new e(this.root,this.selection,this.config,t,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withAriaLabel(t){return new e(this.root,this.selection,this.config,this.mouseDownState,t,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withAriaPostLabel(t){return new e(this.root,this.selection,this.config,this.mouseDownState,this.ariaLabel,t,this.ariaQueue,this.tabHistory)}withAriaQueue(t){return new e(this.root,this.selection,this.config,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,t,this.tabHistory)}withAriaQueueItem(t){return this.withAriaQueue(this.ariaQueue.concat(t))}withAriaQueueSelection(t){let r=yg(t,this.getMathspeakOptions());return this.withAriaQueueItem(r)}withAriaQueueBareSelection(t,{speakSpace:r=!1}={}){let n=Cu(t,this.getMathspeakOptions({speakSpace:r}));return this.withAriaQueueItem(n)}withAriaQueueNode(t,{shouldDescribe:r=!1,speakSpace:n=!1,ignoreShorthand:o=!1}={}){let a=Xt(t,this.getMathspeakOptions({ignoreShorthand:o,speakSpace:n}));return r&&t.type==="group"&&(a=qg(this,t)+" "+a),this.withAriaQueueItem(a)}withAriaQueueDirOf(t,r){let n=Xt(r,this.getMathspeakOptions({ignoreShorthand:!0}));return this.withAriaQueueItem(this.s(t==="left"?"mq-narration-before":"mq-narration-after",{expr:n}))}withAriaQueueDirEndOf(t,r){let n=qg(this,r)+" "+Xt(r,this.getMathspeakOptions());return this.withAriaQueueItem(this.s(t==="left"?"mq-narration-beginning-of":"mq-narration-end-of",{expr:n}))}withSplicedMqTree(t,r){return Wf(this,t,r)}markAfterRender(){var t;this.ariaQueue=[],this.domToMqNode=new Map;for(let r of Nt(this.root))if(r.mutable_domNode&&this.domToMqNode.set(r.mutable_domNode,r),r.mutable_domChildren)for(let n=0;n<r.mutable_domChildren.length;n++){let o=r.mutable_domChildren[n],a=r.nthChild(n);if(!a){let i=new Error(Nu()?"Programming Error: Translation extension mutated our DOM":"Programming error: mutable_domChildren length doesn't match group child count. (Instrumented)");throw i.dcgExtraErrorMetaData={isRoot:r===this.root,childCount:r.children.length,domChildCount:r.mutable_domChildren.length,domChildTags:r.mutable_domChildren.map(s=>s.tagName+"."+s.className),firstExtraDomChildIndex:n,groupDomHtml:(t=r.mutable_domNode)==null?void 0:t.outerHTML.slice(0,500),htmlClass:document.documentElement.className,...Iu()},i}this.domToMqNode.set(o,a)}}getRawAriaLabel(){return this.ariaLabel}getAriaLabel(){return!this.ariaLabel&&!this.config.static?this.s("mq-narration-math-input"):this.ariaLabel}getAriaPostLabel(){return this.ariaPostLabel}getMathspeakOptions(t){var r,n;return{ignoreShorthand:(r=t==null?void 0:t.ignoreShorthand)!=null?r:!1,autoOperatorNames:this.config.autoOperatorNames,speakSpace:(n=t==null?void 0:t.speakSpace)!=null?n:!1,localize:this.s,language:this.config.language,maxResizingMatrixSize:this.config.maxResizingMatrixSize,static:this.config.static}}};function Nu(){return!!document.querySelector(".immersive-translate-target-wrapper,[data-imt-dynamic-skip],[data-imt-p]")}function Iu(){return{docAttrs:document.documentElement.getAttributeNames().join(" "),bodyAttrs:document.body.getAttributeNames().join(" "),bodyChildren:Array.from(document.body.children).map(e=>e.tagName+"#"+e.id+"."+e.className).join(" ").slice(-500)}}function NS(e){for(let t of Nt(e))eg(t)}function qg(e,t){let r=t.parent();return r?Cg(r,t.getIndex(),e.getMathspeakOptions()):e.getAriaLabel()}var Na={"\\ ":"\xA0","~":"\xA0","-":"\u2212","'":"\u2032","\\square":"\u25A1","\\mid":"\u2223","\\parallel":"\u2225","\\nparallel":"\u2226","\\perp":"\u27C2","\\infty":"\u221E","\\approx":"\u2248","\\to":"\u2192","\\ne":"\u2260","\\degree":"\xB0","\\bigcirc":"\u25EF","\\angle":"\u2220","\\triangle":"\u25B3","\\cong":"\u2245","\\measuredangle":"\u2221","\\parallelogram":"\u25B1","\\ncong":"\u2247","\\nsim":"\u2241","\\$":"$","\\%":"%","\\&":"&","\\int":"\u222B","\\sum":"\u2211","\\prod":"\u220F","\\coprod":"\u2210","\\cdot":"\xB7","\\ge":"\u2265","\\geq":"\u2265","\\le":"\u2264","\\sim":"~","\\pm":"\xB1","\\mp":"\u2213","\\times":"\xD7","\\div":"\xF7","\\backslash":"\\","\\varphi":"\u03C6","\\epsilon":"\u03F5","\\varepsilon":"\u03B5","\\varpi":"\u03D6","\\varsigma":"\u03C2","\\vartheta":"\u03D1","\\digamma":"\u03DD","\\varkappa":"\u03F0","\\varrho":"\u03F1","\\alpha":"\u03B1","\\beta":"\u03B2","\\gamma":"\u03B3","\\delta":"\u03B4","\\zeta":"\u03B6","\\eta":"\u03B7","\\theta":"\u03B8","\\iota":"\u03B9","\\kappa":"\u03BA","\\lambda":"\u03BB","\\mu":"\u03BC","\\nu":"\u03BD","\\xi":"\u03BE","\\pi":"\u03C0","\\rho":"\u03C1","\\sigma":"\u03C3","\\tau":"\u03C4","\\upsilon":"\u03C5","\\phi":"\u03D5","\\chi":"\u03C7","\\psi":"\u03C8","\\omega":"\u03C9","\\Gamma":"\u0393","\\Delta":"\u0394","\\Theta":"\u0398","\\Lambda":"\u039B","\\Xi":"\u039E","\\Pi":"\u03A0","\\Sigma":"\u03A3","\\Upsilon":"\u03D2","\\Phi":"\u03A6","\\Psi":"\u03A8","\\Omega":"\u03A9","\\forall":"\u2200"},IS={"'":"span","\u2033":"span","\\square":"span","\\mid":"span","\\parallel":"span","\\nparallel":"span","\\perp":"span","\\backslash":"span","\\phi":"var","\\varphi":"var","\\epsilon":"var","\\varepsilon":"var","\\varpi":"var","\\varsigma":"var","\\vartheta":"var","\\digamma":"var","\\varkappa":"var","\\varrho":"var","\\alpha":"var","\\beta":"var","\\gamma":"var","\\delta":"var","\\zeta":"var","\\eta":"var","\\theta":"var","\\iota":"var","\\kappa":"var","\\lambda":"span","\\mu":"var","\\nu":"var","\\xi":"var","\\pi":"span","\\rho":"var","\\sigma":"var","\\tau":"var","\\chi":"var","\\psi":"var","\\omega":"var","\\upsilon":"var","\\Gamma":"span","\\Delta":"span","\\Theta":"span","\\Lambda":"span","\\Xi":"span","\\Pi":"span","\\Sigma":"span","\\Phi":"span","\\Psi":"span","\\Omega":"span","\\Upsilon":"var","\\forall":"span",ge:"span",le:"span"," ":"span",".":"span",degree:"span",$:"span",":":"span","`":"span",",":"span",infty:"span",approx:"span"},AS={"\\pi":"dcg-mq-nonSymbola","\\lambda":"dcg-mq-nonSymbola","@":"dcg-mq-nonSymbola","\\&":"dcg-mq-nonSymbola","\\%":"dcg-mq-nonSymbola",f:"dcg-mq-f",",":"dcg-mq-comma",".":"dcg-mq-digit",0:"dcg-mq-digit",1:"dcg-mq-digit",2:"dcg-mq-digit",3:"dcg-mq-digit",4:"dcg-mq-digit",5:"dcg-mq-digit",6:"dcg-mq-digit",7:"dcg-mq-digit",8:"dcg-mq-digit",9:"dcg-mq-digit"},PS={"\\Upsilon":"font-family: serif"};function Ig(e){return/^[a-z]$/i.test(e)?"var":IS[e]||"span"}function Ag(e){return e==="\\ "||e===" "?Na["\\ "]:(e=e.trim(),Na[e]||Na["\\"+e]||void 0)}function Pg(e){return AS[e]}function Rg(e){return PS[e]}var Ia={sqrt:{width:"",html:'<svg preserveAspectRatio="none" viewBox="0 0 32 54"><path d="M0 33 L7 27 L12.5 47 L13 47 L30 0 L32 0 L13 54 L11 54 L4.5 31 L0 33" /></svg>'},"|":{width:".4em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M4.4 0 L4.4 54 L5.6 54 L5.6 0" /></svg>'},"[":{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 11 24" style="overflow:visible"><path fill="none" stroke="currentColor" stroke-width="0.05em" vector-effect="non-scaling-stroke" d="M8 0.5 L3.5 0.5 L3.5 23.5 L8 23.5" /></svg>'},"]":{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 11 24" style="overflow:visible"><path fill="none" stroke="currentColor" stroke-width="0.05em" vector-effect="non-scaling-stroke" d="M3 0.5 L7.5 0.5 L7.5 23.5 L3 23.5" /></svg>'},"(":{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="3 0 106 186"><path d="M85 0 A61 101 0 0 0 85 186 L75 186 A75 101 0 0 1 75 0" /></svg>'},")":{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="3 0 106 186"><path d="M24 0 A61 101 0 0 1 24 186 L34 186 A75 101 0 0 0 34 0" /></svg>'},"{":{width:".7em",html:'<svg preserveAspectRatio="none" viewBox="10 0 210 350"><path d="M170 0 L170 6 A47 52 0 0 0 123 60 L123 127 A35 48 0 0 1 88 175 A35 48 0 0 1 123 223 L123 290 A47 52 0 0 0 170 344 L170 350 L160 350 A58 49 0 0 1 102 301 L103 220 A45 40 0 0 0 58 180 L58 170 A45 40 0 0 0 103 130 L103 49 A58 49 0 0 1 161 0" /></svg>'},"}":{width:".7em",html:'<svg preserveAspectRatio="none" viewBox="10 0 210 350"><path d="M60 0 L60 6 A47 52 0 0 1 107 60 L107 127 A35 48 0 0 0 142 175 A35 48 0 0 0 107 223 L107 290 A47 52 0 0 1 60 344 L60 350 L70 350 A58 49 0 0 0 128 301 L127 220 A45 40 0 0 1 172 180 L172 170 A45 40 0 0 1 127 130 L127 49 A58 49 0 0 0 70 0" /></svg>'},lVert:{width:".7em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M3.2 0 L3.2 54 L4 54 L4 0 M6.8 0 L6.8 54 L6 54 L6 0" /></svg>'},rVert:{width:".7em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M3.2 0 L3.2 54 L4 54 L4 0 M6.8 0 L6.8 54 L6 54 L6 0" /></svg>'},langle:{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M6.8 0 L3.2 27 L6.8 54 L7.8 54 L4.2 27 L7.8 0" /></svg>'},rangle:{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M3.2 0 L6.8 27 L3.2 54 L2.2 54 L5.8 27 L2.2 0" /></svg>'}},Dg={left:{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 11 24" style="overflow:visible"><path fill="none" stroke="currentColor" stroke-width="0.09em" vector-effect="non-scaling-stroke" d="M9.5 0 L3.5 0 L3.5 24 L9.5 24" /></svg>'},right:{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 11 24" style="overflow:visible"><path fill="none" stroke="currentColor" stroke-width="0.09em" vector-effect="non-scaling-stroke" d="M1.5 0 L7.5 0 L7.5 24 L1.5 24" /></svg>'}};function V(e,t,r,n){let o=document.createElement(t);o.textContent=r,e.appendChild(o),n!=null&&n.style&&o.setAttribute("style",n.style);let a=n==null?void 0:n.className;return a&&(o.className=a),o}function Ru(e){V(e,"span","\u200B",{style:"display:inline-block;width:0"})}function xt(e,t,r){!r||r.children.length===0?(t.className+=" dcg-mq-empty",r&&(r.mutable_domNode=t,r.mutable_domChildren=[])):Du(e,r,t)}function Du(e,t,r){Us(e,t.children),t.mutable_domNode=r;let n=[];for(let o=0;o<t.children.length;o++){let a=t.children[o],i=t.children[o+1];if(Og(a)&&(i==null?void 0:i.type)==="supsub"){let s=V(r,"span","",{className:"dcg-mq-scripted"+(i.sup?" dcg-mq-scripted-sup":"")+(i.sub?" dcg-mq-scripted-sub":"")}),c=V(s,"span","",{className:"dcg-mq-scripted-base"});n.push(Au(e,c,t,a,o)),n.push(Au(e,s,t,i,o+1)),o++}else n.push(Au(e,r,t,a,o))}t.mutable_domChildren=n}function Og(e){return!!e&&!On(e)}function js(e){let t=e.parentElement,r=t!=null&&t.classList.contains("dcg-mq-scripted-base")?t.parentElement:t;return r!=null&&r.classList.contains("dcg-mq-scripted")?r:void 0}function Au(e,t,r,n,o){switch(n.type){case"char":let a="";Bn(n)&&(a+=" dcg-mq-binary-operator");let s=Vs(e,n);if(s&&(a+=" "+s),An(r.marks.ellipsis,o)?a+=" dcg-mq-ellipsis-start":Ht(r.marks.ellipsis,o)?a+=" dcg-mq-ellipsis-end":en(r.marks.ellipsis,o)&&(a+=" dcg-mq-ellipsis-middle"),An(r.marks.mutable_operatorName,o))a+=" dcg-mq-operator-name",Pu(r.children[o-1])||(a+=" dcg-mq-first");else if(Ht(r.marks.mutable_operatorName,o)){a+=" dcg-mq-operator-name";let I=r.children[o+1];if(!Pu(I)){let $=Ht(r.marks.mutable_infixOperatorName,o);(I==null?void 0:I.type)==="supsub"||(I.type!=="brackets"||$)&&(a+=" dcg-mq-last")}}else en(r.marks.mutable_operatorName,o)&&(a+=" dcg-mq-operator-name");let c=Ig(n.latex),f=Ag(n.latex)||n.latex,h=Rg(n.latex),w=Pg(n.latex);return w&&(f==="f"&&a||(a+=" "+w)),V(t,c,f,{className:a,style:h});case"text-char":return V(t,"span",n.text,{className:"dcg-mq-string-char"});case"ans":return V(t,"span","ans",{className:"dcg-mq-ans"});case"token":return GS(e,t,n);case"supsub":return _S(e,t,n,o,r.marks,r.children[o+1],Og(r.children[o-1]));case"brackets":return $S(e,t,n);case"sqrt":return FS(e,t,n);case"frac":return RS(e,t,n);case"binom":return DS(e,t,n);case"summation":return BS(e,t,n);case"group":throw new Error("should not have MQGroup as child of MQGroup");case"percentof":return V(t,"span","% of ",{className:"dcg-mq-nonSymbola dcg-mq-operator-name"});case"style-cmd":return OS(e,t,n);case"matrix":return LS(e,t,n);case"string":return VS(e,t,n);default:return n}}function RS(e,t,r){let n=V(t,"span","",{className:"dcg-mq-fraction dcg-mq-non-leaf"}),o=V(n,"span","",{className:"dcg-mq-numerator"}),a=V(n,"span","",{className:"dcg-mq-denominator"});return Ru(n),xt(e,o,r.num),xt(e,a,r.den),n}function DS(e,t,r){let n=V(t,"span","",{className:"dcg-mq-bracket-container dcg-mq-non-leaf"}),o=Ia["("],a=Ia[")"];Gn(n,o,"dcg-mq-bracket-l dcg-mq-paren");let i=V(n,"span","",{className:"dcg-mq-bracket-middle dcg-mq-non-leaf",style:`margin-left:${o.width}; margin-right:${a.width}`}),s=V(i,"span","",{className:"dcg-mq-array dcg-mq-non-leaf"}),c=V(s,"span",""),f=V(s,"span","");return xt(e,c,r.num),xt(e,f,r.den),Gn(n,a,"dcg-mq-bracket-r dcg-mq-paren"),n}function LS(e,t,r){let n=V(t,"span","",{className:"dcg-mq-matrix__container dcg-mq-non-leaf"}),o=Dg.left,a=Dg.right;Gn(n,o,"dcg-mq-bracket-l dcg-mq-paren");let i=V(n,"span","",{className:"dcg-mq-matrix"}),{numRows:s,numCols:c}=r.getDimensions(),f=e.config.maxResizingMatrixSize,h=e.config.static&&s>f,w=e.config.static&&c>f,N=h?f-1:s,I=w?f-1:c;for(let $=0;$<N;$++){let C=V(i,"span","",{className:"dcg-mq-matrix__row"});for(let M=0;M<I;M++){let S=V(C,"span","",{className:"dcg-mq-matrix__cell-container"}),_=V(S,"span","",{className:"dcg-mq-matrix__cell dcg-mq-non-leaf"}),B=r.getChildAt(M,$);Du(e,B,_),B.children.length===0&&_.classList.add("dcg-mq-matrix__cell--empty")}w&&Lg(C)}if(h){let $=V(i,"span","",{className:"dcg-mq-matrix__row"});for(let C=0;C<I+(w?1:0);C++)Lg($)}return Gn(n,a,"dcg-mq-bracket-r dcg-mq-paren"),V(n,"span","",{className:"dcg-mq-matrix__pull-handle"}),n}function Lg(e){let t=V(e,"span","",{className:"dcg-mq-matrix__cell-container"}),r=V(t,"span","",{className:"dcg-mq-matrix__cell dcg-mq-non-leaf"});V(r,"span","\u22EF",{className:"dcg-mq-matrix-ellipsis"})}function OS(e,t,r){return _g(t,r,n=>{xt(e,n,r.arg)})}function _S(e,t,r,n,o,a,i){let c=Ht(o.mutable_operatorName,n-1)&&!Pu(r)&&(a==null?void 0:a.type)!=="brackets",f=V(t,"span","",{className:"dcg-mq-supsub dcg-mq-non-leaf"+(c?" dcg-mq-after-operator-name":"")});if(r.sup){let h=V(f,"span","",{className:"dcg-mq-sup"});xt(e,h,r.sup),r.sub||(f.className+=" dcg-mq-sup-only")}if(r.sub){let h=V(f,"span","",{className:"dcg-mq-sub"});xt(e,h,r.sub)}return r.sub&&!i&&Ru(f),f}function Gn(e,t,r=""){let n=V(e,"span","",{className:"dcg-mq-scaled "+r,style:t.width?`width:${t.width}`:void 0});return n.innerHTML=t.html,n}function FS(e,t,r){let n;if(r.index){n=t=V(t,"span","",{className:"dcg-mq-nthroot-container dcg-mq-non-leaf"});let i=V(t,"sup","",{className:"dcg-mq-nthroot dcg-mq-non-leaf"});xt(e,i,r.index)}let o=V(t,"span","",{className:"dcg-mq-sqrt-container "+(r.index?"dcg-mq-scaled":"dcg-mq-non-leaf")});n!=null||(n=o),Gn(o,Ia.sqrt,"dcg-mq-sqrt-prefix");let a=V(o,"span","",{className:"dcg-mq-non-leaf dcg-mq-sqrt-stem"});return xt(e,a,r.radicand),n}function BS(e,t,r){let n=Na[r.kind];if(!n)throw new Error("could not find summation symbol: "+r.kind);if(r.kind==="\\int"){let o=V(t,"span","",{className:"dcg-mq-int dcg-mq-non-leaf"});V(o,"big",n);let a=V(o,"span","",{className:"dcg-mq-supsub dcg-mq-non-leaf"}),i=V(a,"span","",{className:"dcg-mq-sup"});i=V(i,"span","",{className:"dcg-mq-sup-inner"}),xt(e,i,r.sup);let s=V(a,"span","",{className:"dcg-mq-sub"});return xt(e,s,r.sub),Ru(a),o}else{let o=V(t,"span","",{className:"dcg-mq-large-operator dcg-mq-non-leaf"}),a=V(o,"span","",{className:"dcg-mq-to"});a=V(a,"span",""),xt(e,a,r.sup),V(o,"big",n);let i=V(o,"span","",{className:"dcg-mq-from"});return i=V(i,"span",""),xt(e,i,r.sub),o}}function GS(e,t,r){let n=e.previousTokenNodes.get(r);if(n)return t.appendChild(n),e.currentTokenNodes.set(r,n),n;let o=V(t,"span","",{className:"dcg-mq-ignore-mousedown dcg-mq-token"});return o.setAttribute("data-dcg-mq-token",r.id),e.currentTokenNodes.set(r,o),o}function $S(e,t,r){let n=Ia[r.leftSymbol],o=Ia[r.rightSymbol],a=r.ghostSide==="left"?" dcg-mq-ghost":"",i=r.ghostSide==="right"?" dcg-mq-ghost":"",s=V(t,"span","",{className:"dcg-mq-non-leaf dcg-mq-bracket-container"});Gn(s,n,"dcg-mq-bracket-l dcg-mq-paren"+a);let c="dcg-mq-bracket-middle dcg-mq-non-leaf";r.middle.children.length===0&&e.config.quietEmptyDelimeters.has(r.leftSymbol)&&(c+=" dcg-mq-quiet-delimiter");let f=V(s,"span","",{className:c,style:`margin-left:${n.width};margin-right:${o.width}`});return Gn(s,o,"dcg-mq-bracket-r dcg-mq-paren"+i),xt(e,f,r.middle),s}function VS(e,t,r){let n=V(t,"span","",{className:"dcg-mq-string"}),o=r.ghostSide==="left"?" dcg-mq-ghost":"";V(n,"span","\u201C",{className:"dcg-mq-string__lquote"+o});let a=V(n,"span","",{className:"dcg-mq-string__body"});xt(e,a,r.body);let i=r.ghostSide==="right"?" dcg-mq-ghost":"";return V(n,"span","\u201D",{className:"dcg-mq-string__rquote"+i}),n}function US(e,t){var N,I,$,C,M;let{selection:r}=e,n=e.mouseDownState.type==="mouse-down-selecting",{left:o,right:a,group:i}=r,s=i.mutable_domNode,c=i.mutable_domChildren;if(!s||!c)throw new Error("Programming Error: We just rendered. Where's the DOM pointers?");let f=S=>{var _;return S.parentNode===s||((_=js(S))==null?void 0:_.parentNode)===s};if(!c.every(f)){let S=Nu()?"Programming Error: Translation extension mutated our DOM":"Programming Error: Group child dom is not child of group dom. (Instrumented)",_=new Error(S);throw _.dcgExtraErrorMetaData={childParents:c.map(B=>B.parentNode===s?"self":f(B)?"scripted":B.parentElement?B.parentElement.tagName+"."+B.parentElement.className:String(B.parentNode)),childCount:i.children.length,domChildCount:c.length,groupDomHtml:s.outerHTML.slice(0,500),foreignParentHtml:(I=(N=c.find(B=>!f(B)&&B.parentElement))==null?void 0:N.parentElement)==null?void 0:I.outerHTML.slice(0,300),detachedHtml:c.filter(B=>!f(B)).map(B=>B.outerHTML).join("").slice(0,500),htmlClass:document.documentElement.className,...Iu()},_}let h=Kt(r);if(r.matrixPullHandleType&&h)return zS(e,h,r.matrixPullHandleType);let w=e.config.static?void 0:HS(r);if(o.eq(a)){let S="dcg-mq-cursor";n||(S+=" dcg-mq-should-blink");let _=V(s,"span","\u200B",{className:S}),B=c[o.index];if(B){let P=js(B);P&&B.parentNode===P?($=P.firstElementChild)==null||$.appendChild(_):B.before(_)}else s.appendChild(_);let W=i.children.length===0,q=((C=i.parent())==null?void 0:C.type)==="matrix"?"dcg-mq-matrix__cell--empty":"dcg-mq-empty";return W&&s.classList.remove(q),e.selectionDom=_,{unSelect:()=>{_.remove(),W&&s.classList.add(q),w==null||w()}}}else{let S="dcg-mq-selection";t&&(S+=" dcg-mq-blur");let _=[],B=[],W=[],me=()=>{if(W.length===0)return;let P=V(s,"span","",{className:S});s.insertBefore(P,W[0]);for(let x of W)P.appendChild(x);B.push(P),W=[]};for(let P=o.index;P<a.index;P++){let x=c[P],z=js(x);z&&P+1<a.index&&js(c[P+1])===z?(W.push(z),P++):z?(me(),x.classList.add("dcg-mq-selection"),x.classList.toggle("dcg-mq-blur",t),_.push(x)):W.push(x)}me();let q=c[r.head.eq(a)?a.index-1:o.index];return e.selectionDom=(M=B.find(P=>P.contains(q)))!=null?M:q,{unSelect:()=>{for(let P of _)P.classList.remove("dcg-mq-selection","dcg-mq-blur");for(let P of B){let x=Array.from(P.childNodes),z=x[x.length-1];P.replaceWith(z);for(let fe=0;fe<x.length-1;fe++)s.insertBefore(x[fe],z)}w==null||w()}}}}function zS(e,t,r){let n=t.getDomNode();if(!n)throw new Error("Programming error: No matrix DOM");return n.classList.add("dcg-mq-matrix--resizing"),r==="keyboard"&&n.classList.add("dcg-mq-matrix--resizing-keyboard"),e.mouseDownState.type==="mouse-down-resizing-matrix"&&n.classList.add("dcg-mq-matrix--resizing-drag"),{unSelect:()=>{n.classList.remove("dcg-mq-matrix--resizing"),n.classList.remove("dcg-mq-matrix--resizing-keyboard"),n.classList.remove("dcg-mq-matrix--resizing-drag")}}}function HS(e){let t=Is(e),r=t==null?void 0:t.cell.getDomNode(),n=t==null?void 0:t.matrix.getDomNode();if(!(!r&&!n))return r==null||r.classList.add("dcg-mq-matrix__cell--selected"),n==null||n.classList.add("dcg-mq-matrix--selected"),()=>{r==null||r.classList.remove("dcg-mq-matrix__cell--selected"),n==null||n.classList.remove("dcg-mq-matrix--selected")}}var Qs=class{constructor(t){this.container=t}render(t,r){var c;let{root:n}=t,o=co(t.config,Fg),a=Mn(o,this.lastConfig),i=n.mutable_domNode===void 0||!a,s=ir(t.root);i?(a&&this.lastLatex&&this.lastRoot&&gg(this.container,n,s,this.lastRoot,this.lastLatex,this.unSelect)||this.renderFromScratch(t,o),this.unSelect=this.insertSelection(t,r)):((c=this.unSelect)==null||c.call(this),this.unSelect=this.insertSelection(t,r)),this.lastConfig=o,this.lastLatex=s,this.lastRoot=n}renderFromScratch(t,r){var i;let{root:n}=t,{unsuppressBlurs:o}=WS(this.container);this.container.innerHTML="";let a={config:r,digitGroupingMap:new Map,previousTokenNodes:(i=this.previousTokenNodes)!=null?i:new Map,currentTokenNodes:new Map};Du(a,n,this.container),this.previousTokenNodes=a.currentTokenNodes,o()}insertSelection(t,r){let{config:n,selection:o}=t,a=(r!=="focused"||n.static)&&Ee(o),i=r==="unintentional-blurred";if(!a){let{unSelect:s}=US(t,i);return s}return()=>{}}};function Pu(e){return!!(!e||e.type==="char"&&e.latex==="."||Bn(e)||e.type==="summation")}function WS(e){let t=document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)?document.activeElement:null,r=a=>a.stopImmediatePropagation(),n=["blur","focusout","focus","focusin"];if(t)for(let a of n)document.addEventListener(a,r,!0);function o(){if(t){t.isConnected&&t.focus();for(let a of n)document.removeEventListener(a,r,!0)}}return{unsuppressBlurs:o}}var Bg="\u27A4",KS="\u02D9",$g={"\\mathrm":ln("span","dcg-mq-roman dcg-mq-font"),"\\mathit":ln("i","dcg-mq-font"),"\\mathbf":ln("b","dcg-mq-font"),"\\mathsf":ln("span","dcg-mq-sans-serif dcg-mq-font"),"\\mathtt":ln("span","dcg-mq-monospace dcg-mq-font"),"\\underline":ln("span","dcg-mq-non-leaf dcg-mq-underline"),"\\overline":ln("span","dcg-mq-non-leaf dcg-mq-overline"),"\\overrightarrow":Lu(!1,!0),"\\overleftarrow":Lu(!0,!1),"\\overleftrightarrow":Lu(!0,!0),"\\overarc":ln("span","dcg-mq-non-leaf dcg-mq-overarc"),"\\dot":{makeDOM:(e,t,r)=>{let n=V(e,"span","",{className:"dcg-mq-non-leaf"}),o=V(n,"span","",{className:"dcg-mq-dot-recurring-inner"});V(o,"span",KS,{className:"dcg-mq-dot-recurring"});let a=V(o,"span","",{className:"dcg-mq-empty-box"});return r(a),n}},"\\textcolor":{makeDOM:(e,t,r)=>{let n=V(e,"span","",{className:"dcg-mq-textcolor",style:`color:${t.styleParam}`});return r(n),n}},"\\vec":Gg("\u2192"),"\\tilde":Gg("~"),"\\hat":{makeDOM:(e,t,r)=>{let n=V(e,"span","",{className:"dcg-mq-non-leaf"});V(n,"span","^",{className:"dcg-mq-hat-prefix"});let o=V(n,"span","",{className:"dcg-mq-hat-stem"});return r(o),n}}};function Vg(e){return $g.hasOwnProperty(e)}function ln(e,t){return{makeDOM:(r,n,o)=>{let a=V(r,e,"",{className:t});return o(a),a}}}function Lu(e,t){return{makeDOM:(r,n,o)=>{let a=V(r,"span","",{className:"dcg-mq-non-leaf dcg-mq-overarrow"});return e&&V(a,"span",Bg,{className:"dcg-mq-arrow-left-content"}),o(a),t&&V(a,"span",Bg,{className:"dcg-mq-arrow-right-content"}),a}}}function Gg(e){return{makeDOM:(t,r,n)=>{let o=V(t,"span","",{className:"dcg-mq-non-leaf"});V(o,"span",e,{className:"dcg-mq-diacritic-above"});let a=V(o,"span","",{className:"dcg-mq-diacritic-stem"});return n(a),o}}}function _g(e,t,r){return $g[t.val].makeDOM(e,t,r)}function kg(e){return e.type==="style-cmd"&&e.val==="\\mathrm"}function Ys(e,t,r){t.push(r)}function ct(e,t){let r=[];return Ug(e,t,r),re(r)}function Ug(e,t,r){for(let n=0;n<t.children.length;n++){let o=t.children[n];switch(o.type){case"digit":Ys(e,r,new _e(o.content));break;case"symbol":Ys(e,r,new _e(Io(o.content)));break;case"letter":Ys(e,r,new _e(o.content));break;case"sqrt":r.push(new sn({index:o.index&&ct(e,o.index),radicand:ct(e,o.radicand)}));break;case"brackets":r.push(new At({leftSymbol:o.leftSymbol,rightSymbol:o.rightSymbol,leftLatex:o.leftLatex,rightLatex:o.rightLatex,ghostSide:o.ghostSide,middle:ct(e,o.middle)}));break;case"summation":r.push(new Ln({kind:o.kind,sup:ct(e,o.sup),sub:ct(e,o.sub)}));break;case"supsub":r.push(new je({sup:o.sup&&ct(e,o.sup),sub:o.sub&&ct(e,o.sub)}));break;case"command":if(o.ctrlSeq==="frac")r.push(new Fr({num:ct(e,o.blocks[0]),den:ct(e,o.blocks[1])}));else if(o.ctrlSeq==="binom")r.push(new Dn({num:ct(e,o.blocks[0]),den:ct(e,o.blocks[1])}));else if(Vg("\\"+o.ctrlSeq))r.push(new Eo({val:"\\"+o.ctrlSeq,styleParam:void 0,arg:ct(e,o.blocks[0])}));else if(o.ctrlSeq==="token"||o.ctrlSeq==="tokenName"){let i=ct(e,o.blocks[0]).children.map(s=>s.type==="char"?s.latex:"").join("");r.push(new Ls({variant:o.ctrlSeq,id:i}))}else{let i=Io(o.ctrlSeq);Ys(e,r,new _e(i))}break;case"percentof":r.push(new qo);break;case"ans":r.push(new ko);break;case"block":Ug(e,o,r);break;case"style-cmd":r.push(new Eo({styleParam:o.styleParam,arg:ct(e,o.arg),val:o.ctrlSeq}));break;case"matrix":{let i=o.rows.length===0?[[{type:"block",children:[]}]]:o.rows,s=i.reduce((f,h)=>Math.max(f,h.length),1),c=[];for(let f of i){for(let h of f)c.push(ct(e,h));for(let h=f.length;h<s;h++)c.push(re([]))}r.push(new sr({children:c,numCols:s}));break}case"string":{let i=Hg(o.text);r.push(new an({body:i,ghostSide:void 0}));break}default:return o}}}function zg(e){let t=qs(e);return t?Hg(t):re([])}function Hg(e){let t=[];for(let r=0;r<e.length;r++)t.push(new Co(e[r]));return new Ma(t)}function Aa(e,t){let r={autoOperatorNames:t.autoOperatorNames},n=pg(e,t.autoOperatorNames),o=ct(r,n);if(!t.matrices){for(let a of Pn(o))if(a.type==="matrix")return re([])}if(!t.strings){for(let a of Pn(o))if(a.type==="string")return re([])}return o}function jS(e,t){let r=In(e.marks.mutable_operatorName,t-1);return(r==null?void 0:r.word)==="log"&&r.right===t}function Eg(e,t){return St(e,{config:t,fracDepth:0})}function St(e,t,r){Nf(e,t.config,!!(r!=null&&r.isInNonLogSubscript));for(let n=0;n<e.children.length;n++){let o=e.children[n];switch(o.type){case"binom":St(o.num,t),St(o.den,t);break;case"frac":t.fracDepth++,o.mutable_fracDepth=t.fracDepth,St(o.num,t),St(o.den,t),t.fracDepth--;break;case"brackets":St(o.middle,t);break;case"supsub":o.sub&&St(o.sub,t,{isInNonLogSubscript:!jS(e,n)}),o.sup&&St(o.sup,t);break;case"sqrt":o.index&&St(o.index,t),St(o.radicand,t);break;case"style-cmd":St(o.arg,t);break;case"summation":o.sub&&St(o.sub,t),o.sup&&St(o.sup,t);break;case"char":case"text-char":case"percentof":case"ans":case"token":case"string":break;case"matrix":for(let a of o.children)St(a,t);break;default:throw new Error(`Invalid node: ${o.type}`)}}}var Ao={"(":")",")":"(","[":"]","]":"[","{":"}","}":"{","\\{":"\\}","\\}":"\\{",langle:"rangle",rangle:"langle","\\langle ":"\\rangle ","\\rangle ":"\\langle ","|":"|",lVert:"rVert",rVert:"lVert","\\lVert ":"\\rVert ","\\rVert ":"\\lVert "};function Pa(e,t,r,n,o,a){let i=t==="either"?"left":t;if(!Ee(e.selection))return Wg(e,r,o,n,a,i,void 0);let s=e.selection.head,c=e.selection.group;if(t==="left"||t==="either"){let N=s.nodeAfter();if((N==null?void 0:N.type)==="brackets"){let I=Xs(e,N,N.middle.firstCursor(),"left",r,n);if(I)return I}}if(t==="right"||t==="either"){let N=s.nodeBefore();if((N==null?void 0:N.type)==="brackets"){let I=Xs(e,N,N.middle.lastCursor(),"right",o,a);if(I)return I}}let f=c.parent();if((f==null?void 0:f.type)==="brackets"){if(t==="left"||t==="either"){let N=Xs(e,f,s,"left",r,n);if(N)return N}if(t==="right"||t==="either"){let N=Xs(e,f,s,"right",o,a);if(N)return N}}let h=c.lastCursorInDir(Me(i)),w=Fe(s,h);return e=e.withSelection(w),Wg(e,r,o,n,a,i,Me(i))}function Xs(e,t,r,n,o,a){if(!r.group.eq(t.firstChild()))throw new Error("Programming Error: typedCursor not inside bracketNode");if(t.ghostSide!==n)return;let i=n==="left"?o:t.leftSymbol,s=n==="right"?o:t.rightSymbol;if(!Kg(e.config,i,s))return;let c=t.containingSelection(),f=t.firstChild(),h=It(Fe(f.lastCursorInDir(n),r)),w=It(Fe(f.lastCursorInDir(Me(n)),r)),{insertedSelection:N}=ye(c,h),{root:I,inserted:$}=Ne(K(Oe(N,Me(n))),yu(Ca(t,re(w)),n,o,a)),C;return n==="left"?C=$.middle.firstCursor():C=$.containingSelection().right,e=e.withRootAndSelection(I,K(C)),{model:e,inserted:$}}function Kg(e,t,r){if(Ao[t]==r)return!0;switch(e.restrictMismatchedBrackets){case"none":return!1;case!1:default:return!0;case!0:return t==="("&&r==="]"||t==="["&&r===")"}}function Ou(e,t,r,n){let o=n==="right"?t.leftSymbol:r.leftSymbol,a=n==="right"?r.rightSymbol:t.rightSymbol;return Kg(e,o,a)}function Zs(e,t,r){return yu(e,r,Os(t,r),ng(t,r))}function Wg(e,t,r,n,o,a,i){let s=It(e.selection),c=new At({leftLatex:n,leftSymbol:t,rightLatex:o,rightSymbol:r,ghostSide:i,middle:re(s)}),{root:f,inserted:h}=Ne(e.selection,c);if(a==="right"){let w=h.cursorOnSide("right");e=e.withRootAndSelection(f,K(w))}else{let N=h.middle.firstCursor();e=e.withRootAndSelection(f,K(N))}return{model:e,inserted:h}}function _u(e,t){let r=e.s(t==="frac"?"mq-narration-over":"mq-narration-choose");if(!Ee(e.selection))return jg(e,t).withAriaQueueItem(r);e=QS(e,e.selection.head,t);let n=e.selection.group.parent();return(n==null?void 0:n.type)==="frac"&&n.num.numChildren()===0?e.withAriaQueueItem(e.s("mq-narration-start-fraction")):e.withAriaQueueItem(r)}function QS(e,t,r){let n=t,o=e.selection.left;for(;;){let s=o.nodeBefore();if(!s||YS(s,s.getIndex(),s.parent()))break;o=s.cursorOnSide("left")}let a=Fe(o,n);if(a===void 0)throw new Error("Programming Error: selection should be valid because left and right have the same parent.");let i=e.withSelection(a);return jg(i,r)}function jg(e,t){e=Rs(e);let r=It(e.selection),n=t==="frac"?Fr:Dn,o=new n({num:re(r),den:re([])}),{root:a,inserted:i}=Ne(e.selection,o),s=i.num,c=i.den,f=s.children.length===0?s:c,h=K(f.firstCursor());return e.withRootAndSelection(a,h)}function YS(e,t,r){switch(e.type){case"summation":return!0;case"group":case"frac":case"binom":case"percentof":case"ans":case"token":case"sqrt":case"supsub":case"brackets":case"style-cmd":case"matrix":case"text-char":case"string":return!1;case"char":return e.latex==="."?en(r.marks.ellipsis,t):e.latex==="\\ "||e.latex===";"||e.latex===","||e.latex===":"||vu(e,r,t)}}function Js(e,t){var w;e=Rs(e);let r=It(e.selection),n=e.selection.left.nodeBefore();if((n==null?void 0:n.type)==="supsub"){ye(e.selection,[]);let N=Qg(n,t),I=N.lastCursor(),{root:$,insertedSelection:C}=ye(K(I),r),M=K(C.right);return e=e.withRootAndSelection($,M),e.withAriaQueueDirEndOf("right",N)}if(n===void 0&&e.config.supSubsRequireOperand&&Ee(e.selection))return e;let o=e.selection.right.nodeAfter();if((o==null?void 0:o.type)==="supsub"){ye(e.selection,[]);let N=Qg(o,t),I=N.firstCursor(),{root:$,insertedSelection:C}=ye(K(I),r),M=K(C.right);return e=e.withRootAndSelection($,M),e.withAriaQueueDirEndOf("left",N)}let a=t==="sup"?eC(r):JS(r),{root:i,inserted:s}=Ne(e.selection,a),c=(w=s.sup)!=null?w:s.sub,f=K(c.lastCursor());e=e.withRootAndSelection(i,f);let h=e.s(t==="sup"?"mq-narration-superscript":"mq-narration-subscript");return e.withAriaQueueItem(h)}function Qg(e,t){return t==="sup"?ZS(e):XS(e)}function XS(e){if(e.sub===void 0){let t=new je({sup:e.sup,sub:re([])});e=Ne(e.containingSelection(),t).inserted}return e.sub}function ZS(e){if(e.sup===void 0){let t=new je({sup:re([]),sub:e.sub});e=Ne(e.containingSelection(),t).inserted}return e.sup}function JS(e){return new je({sup:void 0,sub:re(e)})}function eC(e){return new je({sup:re(e),sub:void 0})}function yr(e,t,r){let{root:n,inserted:o}=Ne(t,r),a=o.cursorOnSide("right");return e.withRootAndSelection(n,K(a)).withAriaQueueNode(o,{speakSpace:!0})}var Yg={"\u221A":"sqrt","*":"cdot"};function el(e,t,r){let o=e.selection.head.nodeBefore();if(!o||o.type!=="char"||o.latex!==t)return;let a=o.containingSelection();return yr(e,a,new _e(r))}function tC(e,t){if(e.config.charsThatBreakOutOfSupSub.indexOf(t)>-1&&Ee(e.selection)){let{group:r,head:n}=e.selection,o=n.nodeBefore(),a=n.nodeAfter();if(o&&!a){let i=r.parent();if(i&&i.type==="supsub"){let s=i.cursorOnSide("right");e=e.withPointSelection(s)}}}return e}function rC(e,t){if(!e.config.autoSubscriptNumerals||!t.match(/^[0-9]$/)||!Ee(e.selection))return;let{head:r,group:n}=e.selection,o=r.nodeBefore();if(!o)return;let a=n.parent();if((a==null?void 0:a.type)==="supsub"&&a.sub===n)return;let i,s;if((o==null?void 0:o.type)==="supsub"?(i=o,s=i.prevSibling()):s=o,!s||!sg(s))return;let c=s==null?void 0:s.parent(),f=s==null?void 0:s.getIndex();if(en(c.marks.mutable_operatorName,f))return;if(!i)return Xg(e,K(r),new je({sup:void 0,sub:re([new _e(t)])}));let h=i.sub?i.sub.children:[];return Xg(e,o.containingSelection(),new je({sup:i.sup,sub:re(h.concat(new _e(t)))}))}function Xg(e,t,r){let{root:n,inserted:o}=Ne(t,r),a=o.cursorOnSide("right");return e.withRootAndSelection(n,K(a))}function eh(e,t){if((t==='"'||t==="\u201D")&&Ee(e.selection)){let i=sC(e);if(i)return i}if(nn(e.selection.group)){if(t.length!==1)throw new Error(`Char ${JSON.stringify(t)} is not one code unit (typeChar).`);if($f(t))return e;let i=new Co(t);return yr(e,e.selection,i)}if(t.match(/^[0-9]$/)&&!Ee(e.selection)){let{root:i,insertedSelection:s}=ye(e.selection,[]);e=e.withRootAndSelection(i,s)}let r=rC(e,t);if(r)return r;if(e=tC(e,t),t.match(/^[a-zA-Z0-9]$/))return e=yr(e,e.selection,new _e(t)),e=nC(e,e.selection.right),e;if(e.config.typingSlashWritesDivisionSymbol&&t==="/")return yr(e,e.selection,new _e("\\div"));if(e.config.typingAsteriskWritesTimesSymbol&&t==="*")return yr(e,e.selection,new _e("\\times"));switch(t){case"/":return _u(e,"frac");case"^":return Js(e,"sup");case"_":return Js(e,"sub");case"(":case")":{let i=t==="("?"left":"right";({model:e}=Pa(e,i,"(","(",")",")"));let s=e.s(i==="left"?"mq-narration-left-parenthesis":"mq-narration-right-parenthesis");return e.withAriaQueueItem(s)}case"[":case"]":{let i=t==="["?"left":"right";({model:e}=Pa(e,i,"[","[","]","]"));let s=e.s(i==="left"?"mq-narration-left-bracket":"mq-narration-right-bracket");return e.withAriaQueueItem(s)}case"{":case"}":{let i=t==="{"?"left":"right";({model:e}=Pa(e,i,"{","\\{","}","\\}"));let s=e.s(i==="left"?"mq-narration-left-brace":"mq-narration-right-brace");return e.withAriaQueueItem(s)}case"|":{({model:e}=Pa(e,"either","|","|","|","|"));let{head:i,group:s}=e.selection,c=i.nodeBefore(),f=c!=null?c:s.parent();if((f==null?void 0:f.type)!=="brackets")throw new Error("Programming error: bracket expected");let w=Ws(f,c?"right":"left",e.getMathspeakOptions());return e.withAriaQueueItem(w)}case'"':case"\u201C":{if(!e.config.strings)break;let{root:i,inserted:s}=Ne(e.selection,new an({body:re([]),ghostSide:"right"})),c=s.body.firstCursor();return e.withRootAndSelection(i,K(c)).withAriaQueueItem(e.s("mq-narration-start-string"))}case"\u201D":{if(!e.config.strings)break;return e}case"=":{let i=el(e,">","\\ge");if(i||(i=el(e,"<","\\le"),i))return i;break}case">":{let i=el(e,"-","\\to");if(i)return i;break}case"~":{let i=el(e,"\\sim","\\approx");if(i)return i;break}case`
`:return e;default:{let i=Bs(t);if(i.match(/^\^[0-9]$/)){let s=i[1];return e=Js(e,"sup"),yr(e,e.selection,new _e(s))}else if(i&&!Yg[t]){let s=Aa(i,e.config),c=ye(e.selection,s.children),f=K(c.insertedSelection.right);return e.withRootAndSelection(c.root,f)}}}let n=Yg[t]||Fn(t);t==="%"&&e.config.typingPercentWritesPercentOf&&(n="percent");let o=th(e,e.selection,n);if(o)return o;let a=Io(n);return yr(e,e.selection,new _e(a))}function nC(e,t){var w,N;let r=t.group.parent();if((r==null?void 0:r.type)==="supsub"){let I=r.parent(),$=r.getIndex(),C=I.marks.mutable_operatorName,M=t.group===r.sub,S=((w=In(C,$-1))==null?void 0:w.word)==="log";if(M&&!S)return e}let n=(N=t.nodeBefore())==null?void 0:N.getIndex();if(n===void 0)return e;let o=t.group;if(e.config.matrices){let I=iC(e,o,n);if(I!==void 0)return I}let a=aC(o,n,e.config.autoCommands);if(a===void 0)return e;let i=n-a.length+1,s=jt(o,i,n+1),c=Fn(a),f=th(e,s,c);if(f)return f;let h=Io(c);return yr(e,s,new _e(h))}var oC=["sqrt","nthroot","cbrt","sum","prod","coprod","int","percent","ans","frac","binom","matrix"];function Fu(e){return oC.includes(e)}function th(e,t,r){if(Fu(r))switch(r){case"sqrt":case"nthroot":{let n=new sn({radicand:re([]),index:r==="nthroot"?re([]):void 0}),{root:o,inserted:a}=Ne(t,n),i=K(a.firstChild().firstCursor());return e.withRootAndSelection(o,i)}case"cbrt":{let n=new sn({radicand:re([]),index:re([new _e("3")])}),{root:o,inserted:a}=Ne(t,n),i=K(a.radicand.firstCursor());return e.withRootAndSelection(o,i)}case"sum":case"prod":case"coprod":case"int":{let n=new Ln({kind:"\\"+r,sub:r!=="int"&&e.config.sumStartsWithNEquals?re([new _e("n"),new _e("=")]):re([]),sup:re([])}),{root:o,inserted:a}=Ne(t,n),i=K(a.sub.lastCursor());return e.withRootAndSelection(o,i)}case"percent":return yr(e,t,new qo);case"ans":return yr(e,t,new ko);case"frac":{let n=new Fr({num:re([]),den:re([])}),{root:o,inserted:a}=Ne(t,n),i=K(a.num.firstCursor());return e.withRootAndSelection(o,i)}case"binom":{let{root:n,insertedSelection:o}=ye(t,[]);return e=e.withRootAndSelection(n,o),_u(e,"binom")}case"matrix":return e.config.matrices?rh(e,t,{numRows:2,numCols:2}):e;default:return}}function aC(e,t,r){let n,o=r.getReverseTrieRoot();for(let a=t;o&&a>=0;a--){let i=e.children[a];if(i.type!=="char"||en(e.marks.mutable_operatorName,a))break;o=o.followPath(i.latex),o!=null&&o.endWord&&(n=o.endWord)}return n}var Zg=/^[1-9]$/;function iC(e,t,r){if(r<2)return;let n=t.children[r-2];if(n.type!=="char"||n.latex!=="#")return;let o=t.children[r-1];if(o.type!=="char"||!Zg.test(o.latex))return;let a=t.children[r];if(a.type!=="char"||!Zg.test(a.latex))return;let i=parseInt(o.latex),s=parseInt(a.latex);return rh(e,jt(t,r-2,r+1),{numRows:i,numCols:s})}function rh(e,t,{numRows:r,numCols:n}){let o=[];for(let f=0;f<r*n;f++)o.push(re([]));let a=new sr({children:o,numCols:n}),{root:i,inserted:s}=Ne(t,a),c=s.getChildAt(0,0).firstCursor();return e.withRootAndSelection(i,K(c)).withAriaQueueItem(e.s("mq-narration-matrix-start",{rows:r,columns:n}))}function sC(e){var a;let t=(a=Jg(e.selection.head.nodeBefore()))!=null?a:e.selection.right.nodeAfter()===void 0&&Jg(e.selection.group.parent());if(!t)return;let{root:r,inserted:n}=Ne(t.containingSelection(),Sa(t,void 0)),o=n.cursorOnSide("right");return e.withRootAndSelection(r,K(o)).withAriaQueueItem(e.s("mq-narration-end-string"))}function Jg(e){if((e==null?void 0:e.type)==="string"&&e.ghostSide==="right")return e}var nh=e=>Object.entries(e);var lC=["autoOperatorNames","prefixOperatorNames","infixOperatorNames"],Eu=lC,Fg=["quietEmptyDelimeters","static","maxResizingMatrixSize"],tl=class e{constructor(){this.children={}}buildPath(t){let r=this.children[t];return r||(r=new e,this.children[t]=r),r}followPath(t){return this.children[t]}},Ra=class{constructor(){this.trieRoot=new tl;this.reverseTrieRoot=new tl;this.map=new Map}getTrieRoot(){return this.trieRoot}getReverseTrieRoot(){return this.reverseTrieRoot}set(t,r){this.map.set(t,r);{let n=this.trieRoot;for(let o=0;o<t.length;o++)n=n.buildPath(t[o]);n.endWord=t}{let n=this.reverseTrieRoot;for(let o=t.length-1;o>=0;o--)n=n.buildPath(t[o]);n.endWord=t}}has(t){return this.map.has(t)}get(t){return this.map.get(t)}keys(){return this.map.keys()}},{BuiltInOpNames:Hf,AutoOpNames:cC}=uC();function uC(){let e=new Set,t=new Ra,r="arg deg det dim exp gcd hom inf ker lg lim ln log max min sup limsup liminf injlim projlim Pr".split(" ");for(let i=0;i<r.length;i+=1){let s=r[i];e.add(s),t.set(s,1)}let n="sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" ");for(let i=0;i<n.length;i+=1)e.add(n[i]);let o="sin cos tan sec cosec csc cotan cot ctg".split(" ");for(let i=0;i<o.length;i+=1)t.set(o[i],1),t.set("arc"+o[i],1),t.set(o[i]+"h",1),t.set("ar"+o[i]+"h",1),t.set("arc"+o[i]+"h",1);let a="gcf hcf lcm proj span".split(" ");for(let i=0;i<a.length;i+=1)t.set(a[i],1);return{BuiltInOpNames:e,AutoOpNames:t}}function $u(e,t){let r={...e};for(let[n,o]of nh(t))switch(n){case"autoOperatorNames":if(o===void 0)break;r[n]=pC(o);break;case"autoCommands":if(o===void 0)break;r[n]=oh(o);break;case"leftRightIntoCmdGoes":r[n]=dC(o);break;case"infixOperatorNames":case"prefixOperatorNames":if(o===void 0)break;r[n]=Bu(o);break;case"quietEmptyDelimeters":if(o===void 0)break;r[n]=ah(o);break;default:r[n]=o;break}return r}function Bu(e){if(e.length===0)return new Set;if(typeof e!="string")throw'"'+e+'" not a space-delimited list';if(!/^[a-z]+(?: [a-z]+)*$/i.test(e))throw'"'+e+'" not a space-delimited list of letters';let t=e.split(" "),r=new Set;for(let n=0;n<t.length;n+=1){let o=t[n];if(o.length<2)throw'"'+o+'" not minimum length of 2';r.add(o)}return r}function pC(e){if(typeof e!="string")throw'"'+e+'" not a space-delimited list';if(!/^[a-z\|\-]+(?: [a-z\|\-]+)*$/i.test(e))throw'"'+e+'" not a space-delimited list of letters or "|"';let t=e.split(" "),r=new Ra;for(let n=0;n<t.length;n+=1){let o=t[n];if(o.length<2)throw'"'+o+'" not minimum length of 2';if(o.indexOf("|")<0)r.set(o,o);else{let a=o.split("|");if(a.length>2)throw'"'+o+'" has more than 1 mathspeak delimiter';if(a[0].length<2)throw'"'+o[0]+'" not minimum length of 2';a[1].startsWith("mq-narration-op-")?r.set(a[0],a[1]):r.set(a[0],a[1].replace(/-/g," "))}}return r}function oh(e){if(typeof e!="string"||!/^[a-z]+(?: [a-z]+)*$/i.test(e))throw'"'+e+'" not a space-delimited list of only letters';let t=e.split(" ");t.push("matrix");let r=new Ra;for(let n=0;n<t.length;n+=1){let o=t[n];if(o.length<2)throw new Error('Autocommand "'+o+'" not minimum length of 2');let a=Fn(o);if(!(a in Fs||Fu(a)))throw new Error(`Invalid auto-command: ${JSON.stringify(o)}`);r.set(o,1)}return r}function ah(e){return new Set(e.split(" "))}function dC(e){if(e==="up")return"up";if(e==="down")return"down";if(e!==void 0)throw'"up" or "down" required for leftRightIntoCmdGoes option, got "'+e+'"'}var Gu={strings:!1,matrices:!1,maxResizingMatrixSize:9,logAriaAlerts:!1,needsSystemKeypad:!1,resetCursorOnBlur:!1,autoSubscriptNumerals:!1,supSubsRequireOperand:!1,autoCommands:oh("alpha beta sqrt theta phi rho pi tau nthroot cbrt sum prod integral percent infinity infty cross ans frac"),infixOperatorNames:Bu(""),prefixOperatorNames:Bu(""),autoOperatorNames:cC,leftRightIntoCmdGoes:void 0,restrictMismatchedBrackets:!1,typingSlashWritesDivisionSymbol:!1,typingAsteriskWritesTimesSymbol:!1,typingPercentWritesPercentOf:!1,sumStartsWithNEquals:!1,charsThatBreakOutOfSupSub:"",enableDigitGrouping:!1,static:!1,tabindex:void 0,quietEmptyDelimeters:ah("( ["),scrollAnimationDuration:100,localize:()=>{throw new Error("Programming Error: mq localization function not set")},language:"en"},ih=!1;function Ng(){return ih=!0,Gu}function sh(e){if(ih)throw new Error("Cannot update global config after an MQ field has already been instantiated.");Gu=$u(Gu,e)}function rl({clientX:e,clientY:t}){return{type:"click",clientX:e,clientY:t}}function $n(e,t){let{clientX:r}=t,n=e.lastChild();if(!n)return e.lastCursor();let o=n,a=o.boundingClientRect();if(a){if(r>a.right)return e.lastCursor();for(;r<a.left;){let i=o.prevSibling();if(!i)break;if(o=i,a=o.boundingClientRect(),!a)return}return ch(o,t)}}function ch(e,t){let{clientX:r}=t;if(e.type==="matrix")return fC(e,t);let n=e.boundingClientRect();if(n){if(On(e)){let o=n.left+n.width/2,a=r<o?"left":"right",i=e.containingSelection();return Oe(i,a)}switch(e.type){case"frac":case"binom":return lh(e,e.num,e.den,t);case"supsub":case"summation":return!e.sup||!e.sub?Vu(e,uu(e),t):lh(e,e.sup,e.sub,t);case"sqrt":case"style-cmd":case"brackets":case"string":return Vu(e,uu(e),t);default:return}}}function lh(e,t,r,n){let o=e.boundingClientRect(),a=t.boundingClientRect(),i=r.boundingClientRect();if(!o||!a||!i)return;let s=Math.max(a.right,i.right),c=Math.min(a.left,i.left);if(n.clientX>(o.right+s)/2)return e.cursorOnSide("right");if(n.clientX<(o.left+c)/2)return e.cursorOnSide("left");switch(n.type){case"click":{let f=n.clientY>(a.bottom+i.top)/2;return $n(f?r:t,n)}case"updown":return n.updown==="up"?$n(r,n):$n(t,n);default:return}}function mC(e,t){let{numRows:r}=e.getDimensions();if(t.type==="updown")return t.updown==="up"?r-1:0;let n=t.clientY,o=[];for(let i=0;i<r;i++)o.push(e.getChildAt(0,i));let a=gC(n,e,o);if(a)switch(a.type){case"before-container":return 0;case"after-container":return r-1;default:return a.index}}function fC(e,t){if(!e.boundingClientRect())return;let{numCols:n}=e.getDimensions(),o=mC(e,t);if(o===void 0)return;let a=[];for(let i=0;i<n;i++)a.push(e.getChildAt(i,o));return Vu(e,a,t)}function Vu(e,t,r){let{clientX:n}=r,o=hC(n,e,t);if(o)switch(o.type){case"before-container":return e.cursorOnSide("left");case"after-container":return e.cursorOnSide("right");case"before":return t[o.index].firstCursor();case"after":return t[o.index].lastCursor();case"inside":return $n(t[o.index],r);default:return}}function gC(e,t,r){let n=[];for(let i of r){let s=i.boundingClientRect();if(!s)return;n.push({start:s.top,end:s.bottom})}let o=t.boundingClientRect();if(!o)return;let a={start:o.top,end:o.bottom};return uh(e,a,n)}function hC(e,t,r){let n=[];for(let i of r){let s=i.boundingClientRect();if(!s)return;n.push({start:s.left,end:s.right})}let o=t.boundingClientRect();if(!o)return;let a={start:o.left,end:o.right};return uh(e,a,n)}function uh(e,t,r){let n=t.start;for(let i=0;i<r.length;i++)if(e<r[i].start){let s=(n+r[i].start)/2;return e<s?i>0?{type:"after",index:i-1}:{type:"before-container"}:{type:"before",index:i}}else if(e>r[i].end)n=r[i].end;else return{type:"inside",index:i};let o=r.length-1,a=(t.end+r[o].end)/2;return e<a?{type:"after",index:o}:{type:"after-container"}}function nl(e,t,r){var o,a,i;let n=(o=ol(e,t))!=null?o:e.root;return n.type==="group"?(a=$n(n,r))!=null?a:n.lastCursor():(i=ch(n,r))!=null?i:n.cursorOnSide("right")}function ol(e,t){if(e.domToMqNode===void 0)throw new Error("Programming Error: Not yet rendered to DOM.");if(t)for(;;){let r=e.domToMqNode.get(t);if(r)return r;if(!t.parentElement)return;t=t.parentElement}}function mh(e,t){let r=e.selection;if(!yC(r)){let n=ph(r.head,t,"right");if(n)return e.withPointSelection(n).withAriaQueueDirEndOf("left",n.group);let o=ph(r.head,t,"left");if(o)return e.withPointSelection(o).withAriaQueueDirEndOf("right",o.group)}return bC(e,t)}function yC(e){var r;let t=e.group;return((r=t.parent())==null?void 0:r.type)==="matrix"&&e.left.eq(t.firstCursor())&&e.right.eq(t.lastCursor())}function ph(e,t,r){let n=e.nodeInDirection(r);if(!n)return;let o=t==="up"?al(n):il(n);if(o)return o.lastCursorInDir(Me(r))}function bC(e,t){let{head:r,group:n}=e.selection,o=TC(n,t);if(o===void 0)return e.withPointSelection(e.selection.head);let{ancestor:a,ancestorGroup:i,moveTo:s}=o;if(s){let c=vC(e,i,s,t),f=K(c),h=xC(n,c);return h&&(f=h.containingSelection()),e.withSelection(f).withAriaQueueNode(f.group,{shouldDescribe:!0})}else{let c=wC(r,a)?"right":"left";return e.withPointSelection(a.cursorOnSide(c)).withAriaQueueDirOf(c,a)}}function xC(e,t){let r=t.group,o=fu(e,r).depth(),a=r,i=r.depth(),s;for(let c of a.allParents()){if(c.type==="group"){let f=c.parent();(f==null?void 0:f.type)==="matrix"&&(s=c)}if(i--,i<=o)break}return s}function TC(e,t){for(;;){let r=e.parent();if(!r)return;if(r.type==="matrix"){let{x:o,y:a}=r.getPosOfChild(e);if(t==="up"&&a>0)return{ancestor:r,ancestorGroup:e,moveTo:r.getChildAt(o,a-1)};if(t==="down"&&a<r.getNumRows()-1)return{ancestor:r,ancestorGroup:e,moveTo:r.getChildAt(o,a+1)}}let n=dh(r,Af(t));if(n&&n.eq(e)){let o=dh(r,t);return{ancestor:r,ancestorGroup:e,moveTo:o}}e=r.parent()}}function wC(e,t){if(!e.eq(e.group.lastCursor()))return!1;let r=e.group.parent();if(r===void 0)throw new Error("Programming Error: ancestor is not ancestor of cursor.");let n=r;for(;!n.eq(t);){let o=n.parent();if(!n.eq(o.lastChild()))return!1;let a=o.parent();if(a===void 0)throw new Error("Programming Error: ancestor is not ancestor of cursor.");n=a}return!0}function vC(e,t,r,n){var f;let o=e.selection.head;on(o.group,"upDown",o.index),t.mutable_upDownGroup=o.group;let a=r.mutable_upDownGroup;if(a){let h=(f=a==null?void 0:a.mutable_cursorIndices)==null?void 0:f.get("upDown");if(h!==void 0)return new qe(a,h)}let i=Uu(e);if(i===void 0)return r.lastCursor();let c=$n(r,{type:"updown",updown:n,clientX:i});return c===void 0?r.lastCursor():c}function Uu(e){let{selection:t,selectionDom:r}=e;if(!r)return;let n=r.getBoundingClientRect();return t.head.eq(t.right)?n.right:n.left}function dh(e,t){return t==="up"?al(e):il(e)}function al(e){switch(e.type){case"frac":case"binom":return e.num;case"supsub":case"summation":return e.sup;case"sqrt":case"brackets":case"style-cmd":case"char":case"text-char":case"percentof":case"token":case"ans":case"string":case"matrix":return}}function il(e){switch(e.type){case"frac":case"binom":return e.den;case"supsub":case"summation":return e.sub;case"sqrt":case"brackets":case"style-cmd":case"char":case"text-char":case"percentof":case"token":case"matrix":case"string":case"ans":return}}function fh(e,t){let r=e.selection;if(Ee(r))return MC(e,r.anchor,t);let n=Oe(r,t);return e.withPointSelection(n)}function MC(e,t,r){let n=t.nodeInDirection(r);return n?SC(e,n,r):Hu(e,t.group,r)}function SC(e,t,r){var o;if(On(t)||t.type==="supsub"&&!t.sup&&e.config.autoSubscriptNumerals){let a=t.containingSelection();return e.withPointSelection(Oe(a,r)).withAriaQueueBareSelection(a,{speakSpace:!0})}if(t.type==="matrix")return zu(e,t,r);{let a=(o=gh(e,t))!=null?o:t.lastChildInDir(Me(r)),i=a.lastCursorInDir(Me(r));return e.withPointSelection(i).withAriaQueueDirEndOf(Me(r),a)}}function zu(e,t,r){let n=r==="left"?t.getNumCols()-1:0,o=t.getChildAt(n,0);return Vn(e,o)}function Hu(e,t,r){let n=t.parent();if(n===void 0)return e.withPointSelection(t.lastCursorInDir(r));if(n.type==="matrix"){let i=Wu(n,t,r);return i?Vn(e,i):br(e,n,r)}let o=gh(e,n),a=t.nextSiblingInDir(r);return!o&&a?e.withPointSelection(a.lastCursorInDir(Me(r))).withAriaQueueDirEndOf(Me(r),a):br(e,n,r)}function Vn(e,t){return e.withSelection(t.containingSelection()).withAriaQueueNode(t,{shouldDescribe:!0})}function br(e,t,r){return e.withPointSelection(t.cursorOnSide(r)).withAriaQueueDirOf(r,t)}function Wu(e,t,r){let{x:n,y:o}=e.getPosOfChild(t);return r==="left"&&n>0?e.getChildAt(n-1,o):r==="right"&&n<e.getNumCols()-1?e.getChildAt(n+1,o):void 0}function gh(e,t){let r=e.config.leftRightIntoCmdGoes;return r==="up"?al(t):r==="down"?il(t):void 0}var CC={"\\le":"<","\\ge":">","\\approx":"\\sim","\\to":"-"};function ll(e,t){let r=e.selection;if(Ee(r))return kC(e,r.anchor,t);let{root:n,insertedSelection:o}=ye(r,[]);return e.withRootAndSelection(n,o).withAriaQueueBareSelection(r)}function hh(e,t){let r=e.selection,{head:n,group:o}=r;if(!Ee(r)||r.head.nodeInDirection(t)===void 0)return ll(e,t);let a=o.lastCursorInDir(t),i=Fe(n,a),{root:s,insertedSelection:c}=ye(i,[]);return e.withRootAndSelection(s,c).withAriaQueueBareSelection(i)}function kC(e,t,r){let n=t.nodeInDirection(r);return n?qC(e,n,r):EC(e,t.group,r)}function sl(e){let t=e.numChildren();for(let r=0;r<t;r++)if(e.nthChild(r).children.length!==0)return!1;return!0}function cn(e,t){let r=t.containingSelection();return yh(e,r)}function yh(e,t){let{root:r,insertedSelection:n}=ye(t,[]);return e.withRootAndSelection(r,n).withAriaQueueBareSelection(t)}function Da(e,t,r){if(t.type==="matrix")return zu(e,t,r);let n=Me(r),o=t.lastChildInDir(n);return e.withPointSelection(o.lastCursorInDir(n)).withAriaQueueDirEndOf(n,o)}function qC(e,t,r){switch(t.type){case"style-cmd":case"string":return sl(t)?cn(e,t):Da(e,t,r);case"char":{if(r==="left"){let n=CC[t.latex];if(n){let o=t.containingSelection(),{root:a,inserted:i}=Ne(o,new _e(n)),s=K(i.cursorOnSide("right"));return e.withRootAndSelection(a,s).withAriaQueueBareSelection(o)}}return cn(e,t)}case"ans":case"token":case"percentof":return cn(e,t);case"binom":case"frac":case"summation":return sl(t)?cn(e,t):Da(e,t,r);case"matrix":return Da(e,t,r);case"sqrt":{if(sl(t))return cn(e,t);if(r==="right"&&!t.index){let n=t.containingSelection(),{root:o,insertedSelection:a}=ye(n,t.radicand.children);return e.withRootAndSelection(o,K(a.left)).withAriaQueueBareSelection(n)}return Da(e,t,r)}case"brackets":return bh(e,t,Me(r),!1);case"supsub":{if(e.config.autoSubscriptNumerals&&t.sub!==void 0){let n=t.sub,o=n.lastChildInDir(Me(r)),a=t;if(o!==void 0)if(ag(o)){let{root:s,insertedSelection:c}=ye(o.containingSelection(),[]);a=c.group.parent();let f=a.cursorOnSide(Me(r));e=e.withRootAndSelection(s,K(f)).withAriaQueueNode(o)}else e=e.withPointSelection(n.lastCursorInDir(Me(r))),e=ll(e,r),a=e.selection.group.parent();else e=e.withAriaQueueItem(e.s("mq-narration-empty-subscript-was-deleted"));let i=a;if(i.sub===void 0)return e;if(i.sub.children.length===0)if(i.sup){let s=new je({sub:void 0,sup:i.sup}),{root:c,insertedSelection:f}=ye(a.containingSelection(),[s]),h=Oe(f,Me(r));return e.withRootAndSelection(c,K(h))}else{let{root:s,insertedSelection:c}=ye(a.containingSelection(),[]);return e.withRootAndSelection(s,c)}else return e}return sl(t)?cn(e,t):Da(e,t,r)}case"text-char":{let n=t.containingGraphemeClusterSelection();return yh(e,n)}default:throw new Error(`Invalid node: ${t.type}`)}}function EC(e,t,r){var a,i;let n=t.parent();if(n===void 0)return e;let o=t.getIndex();switch(n.type){case"binom":case"frac":{let s=No(n,o),{root:c,insertedSelections:f}=Rn(n.containingSelection(),[n.num.children,n.den.children]),h=s==="num"?f[0]:f[1],w=Oe(h,r),N=e.s(n.type==="frac"?"mq-narration-over":"mq-narration-choose");return e.withRootAndSelection(c,K(w)).withAriaQueueItem(N)}case"style-cmd":{let{root:s,insertedSelection:c}=ye(n.containingSelection(),n.arg.children),f=Oe(c,r),h=qu(n,e.getMathspeakOptions());return e.withRootAndSelection(s,K(f)).withAriaQueueItem(h)}case"sqrt":{let s=ka(n,o),{root:c,insertedSelections:[f,h]}=Rn(n.containingSelection(),[(i=(a=n.index)==null?void 0:a.children)!=null?i:[],n.radicand.children]),N=Oe(s==="index"?f:h,r);return e.withRootAndSelection(c,K(N)).withAriaQueueItem(e.s("mq-narration-start-root")+",")}case"summation":{let s=_n(n,o),{root:c,insertedSelections:[f,h]}=Rn(n.containingSelection(),[n.sub.children,n.sup.children]),N=Oe(s==="sub"?f:h,r),I=e.s(Tg[n.kind]);return e.withRootAndSelection(c,K(N)).withAriaQueueItem(I)}case"brackets":return bh(e,n,r,!0);case"supsub":{let s=_n(n,o);if(s==="sup")if(n.sub){let c=new je({sub:n.sub,sup:void 0}),{root:f,insertedSelections:[h,w]}=Rn(n.containingSelection(),[[c],n.sup.children]),N=Oe(w,r);return e.withRootAndSelection(f,K(N)).withAriaQueueItem(e.s("mq-narration-superscript"))}else{let{root:c,insertedSelection:f}=ye(n.containingSelection(),n.sup.children),h=Oe(f,r);return e.withRootAndSelection(c,K(h)).withAriaQueueItem(e.s("mq-narration-superscript"))}else if(n.sup){let c=new je({sub:void 0,sup:n.sup}),{root:f,insertedSelections:[h,w]}=Rn(n.containingSelection(),[n.sub.children,[c]]),N=Oe(h,r);return e.withRootAndSelection(f,K(N)).withAriaQueueItem(e.s("mq-narration-subscript"))}else{let{root:c,insertedSelection:f}=ye(n.containingSelection(),n.sub.children),h=Oe(f,r);return e.withRootAndSelection(c,K(h)).withAriaQueueItem(e.s("mq-narration-subscript"))}}case"matrix":{let s=Wu(n,t,r);return s?Vn(e,s):t.children.length===0?cn(e,n):br(e,n,r)}case"string":return t.children.length===0?cn(e,n):br(e,n,r);default:throw new Error(`Invalid node: ${n.type}`)}}function bh(e,t,r,n){var i;let o=Me(r),a=Ws(t,r,e.getMathspeakOptions());if(t.ghostSide===o){let{root:s,insertedSelection:c}=Ps(t),f=Oe(c,r);return e.withRootAndSelection(s,K(f)).withAriaQueueItem(a)}{let s=t.middle.lastChildInDir(o);if((s==null?void 0:s.type)==="brackets"&&s.ghostSide===o&&Ou(e.config,t,s,r)){let{inserted:c}=Ne(s.containingSelection(),Zs(s,t,o)),f=c.parent().parent();if(f.type!=="brackets")throw new Error("Programming Error: Incorrect mapping");let{root:h,insertedSelection:w}=Ps(f),N=Oe(w,r);return e.withRootAndSelection(h,K(N)).withAriaQueueItem(a)}}{let s=(i=t.parent())==null?void 0:i.parent();if((s==null?void 0:s.type)==="brackets"&&s.ghostSide===o&&Ou(e.config,s,t,o)){let c=s.middle,f=It(Fe(c.lastCursorInDir(o),t.cursorOnSide(o))),h=t.middle.children,w=It(Fe(t.cursorOnSide(r),c.lastCursorInDir(r)));if(r==="right"){let N=Ca(Zs(t,s,"right"),re(h.concat(w))),{root:I,insertedSelection:$}=ye(s.containingSelection(),f.concat(N)),C;if(n&&w.length===0)C=$.right;else{let M=$.right.nodeBefore();if(M!==N)throw new Error("Programming Error: mapping not tracked correctly.");let S=M.middle;C=new qe(S,h.length)}return e.withRootAndSelection(I,K(C)).withAriaQueueItem(a)}else{let N=Ca(Zs(t,s,"left"),re(w.concat(h))),{root:I,insertedSelection:$}=ye(s.containingSelection(),[N].concat(f)),C;if(n&&w.length===0)C=$.left;else{let M=$.left.nodeAfter();if(M!==N)throw new Error("Programming Error: mapping not tracked correctly.");let S=M.middle;C=new qe(S,w.length)}return e.withRootAndSelection(I,K(C)).withAriaQueueItem(a)}}}if(n&&t.ghostSide===void 0){let{root:s,insertedSelection:c}=Ps(t),f=Oe(c,r);return e.withRootAndSelection(s,K(f)).withAriaQueueItem(a)}{let s=t.middle.children,c=t.parent().lastCursorInDir(r),f=It(Fe(t.cursorOnSide(r),c)),h=Fe(t.cursorOnSide(Me(r)),c);if(r==="right"){let w=Ao[t.leftLatex],N=Ao[t.leftSymbol];if(w===void 0||N===void 0)throw new Error("Programming error: Bracket not included in OPP_BRACKS");let I=new At({leftLatex:t.leftLatex,leftSymbol:t.leftSymbol,rightLatex:w,rightSymbol:N,ghostSide:"right",middle:re(s.concat(f))}),{root:$,inserted:C}=Ne(h,I),M;return n&&f.length===0?M=C.cursorOnSide("right"):M=new qe(C.middle,s.length),e.withRootAndSelection($,K(M)).withAriaQueueItem(a)}else{let w=Ao[t.rightLatex],N=Ao[t.rightSymbol];if(w===void 0||N===void 0)throw new Error("Programming error: Bracket not included in OPP_BRACKS");let I=new At({leftLatex:w,leftSymbol:N,rightLatex:t.rightLatex,rightSymbol:t.rightSymbol,ghostSide:"left",middle:re(f.concat(s))}),{root:$,inserted:C}=Ne(h,I),M;return n&&f.length===0?M=C.cursorOnSide("left"):M=new qe(C.middle,f.length),e.withRootAndSelection($,K(M)).withAriaQueueItem(a)}}}function cl(e,t,r){return e.withSelection(va(t,r)).withAriaQueueItem(Ku(e,t))}function Ku(e,t){return e.s("mq-narration-matrix-pull-handle",{rows:t.getNumRows(),columns:t.getNumCols()})}var NC=1.2,IC=1.3;function Th(e){return e=AC(e),e=PC(e),e}function AC(e){let t=Br(e);if(!t)return e;let r=Kt(e.selection);return!r||!t.eq(r)?Oa(e,t,()=>t.withResizingDone()):e}function PC(e){let t=Kt(e.selection);return t?t.isBeingResized()?e:Oa(e,t,()=>t.withResizingStarted()):e}function Oa(e,t,r){return e.withSplicedMqTree(t.containingSelection(),()=>[r()])}function Br(e){for(let t of Pn(e.root))if(t.type==="matrix"&&t.isBeingResized())return t}function RC(e,t){for(let r=t.length;r>=0;r--)if(t[r]<e)return r;return 0}function xh(e,t,r){let n=t[t.length-1];return e<n?1+RC(e,t):t.length+Math.floor((e-n)/r)}function DC(e,t,r,n,o,a){let i=t.boundingClientRect(),s=t.getDomNode();if(!s||!i)throw new Error("Resizing before rendered");let c=parseFloat(getComputedStyle(s).fontSize),f=xh(n-a.clientX,r.colThresholds,NC*c),h=xh(o-a.clientY,r.rowThresholds,IC*c);return _a({numCols:f,numRows:h},e,r.originalMatrix.getDimensions())}function _a({numCols:e,numRows:t},r,n){let o=r.maxResizingMatrixSize;return{numCols:Math.max(1,Math.min(e,Math.max(o,n.numCols))),numRows:Math.max(1,Math.min(t,Math.max(o,n.numRows)))}}function wh(e,t,r,n){let o=Br(e);if(!o||!o.resizingInfo)return e;let a=o.resizingInfo.colThresholds;(!a||o.getNumCols()>a.length)&&(a=OC(o));let i=o.resizingInfo.rowThresholds;(!i||o.getNumRows()>i.length)&&(i=_C(o));let s={colThresholds:a,rowThresholds:i,originalMatrix:o.resizingInfo.originalMatrix},c=DC(e.config,o,s,t,r,n);return Mh(e,o,s,c)}function vh(e,t,r){let n=Br(e);if(!n||!n.resizingInfo)return e;let{numCols:o,numRows:a}=n.getDimensions(),i=n.resizingInfo,s=_a({numCols:o+t,numRows:a+r},e.config,i.originalMatrix.getDimensions());return e=Mh(e,n,i,s),e.selection.matrixPullHandleType==="mouse"&&(e=e.withSelection(As(e.selection))),e}function Mh(e,t,r,n){return _s(t.getDimensions(),n)?e:(e=Oa(e,t,()=>ju(t,r,n)),ul(e,n))}function ul(e,{numCols:t,numRows:r}){return e.withAriaQueueItem(e.s("mq-narration-matrix-new-dimensions",{rows:r,columns:t}))}function ju(e,t,{numCols:r,numRows:n}){var i,s;let o=Array(r*n);for(let c=0;c<n;c++)for(let f=0;f<r;f++)o[c*r+f]=(s=(i=t==null?void 0:t.originalMatrix.getChildAt(f,c))!=null?i:e.getChildAt(f,c))!=null?s:re([]);let a=new sr({children:o,numCols:r,resizingInfo:t});return LC(e,a),a}function LC(e,t){let{numCols:r,numRows:n}=t.getDimensions(),{numCols:o,numRows:a}=e.getDimensions();if(!(r>=o&&n>=a))for(let i=0;i<a;i++)for(let s=0;s<o;s++){if(s<r&&i<n)continue;let c=e.getChildAt(s,i);for(let f of Qf(c)){let h=pu(f).type;switch(h){case"upDown":break;case"anchor":{let w=La(t,{x:s,y:i});on(w,f,0);break}case"head":{let w=La(t,{x:s,y:i});on(w,f,w.numChildren());break}default:}}}}function La(e,{x:t,y:r}){let{numCols:n,numRows:o}=e.getDimensions();return t=Math.max(0,Math.min(n-1,t)),r=Math.max(0,Math.min(o-1,r)),e.getChildAt(t,r)}function OC(e){let t=e.getNumCols(),r=e.boundingClientRect();if(!r)throw new Error("Resizing before rendered");let n=Array(t);for(let o=0;o<t;o++){let i=e.getChildAt(o,0).boundingClientRect();if(!i)throw new Error("Resizing before rendered");n[o]=(i.left+i.right)/2-r.left}return n}function _C(e){let t=e.getNumRows(),r=Array(t),n=e.boundingClientRect();if(!n)throw new Error("Resizing before rendered");for(let o=0;o<t;o++){let i=e.getChildAt(0,o).boundingClientRect();if(!i)throw new Error("Resizing before rendered");r[o]=(i.top+i.bottom)/2-n.top}return r}function Sh(e,t,r){let n=Qu(e,t,r);return n?n.type==="matrix"?BC(e,n.matrix,n.cursorPos,t,r):GC(e,n.brackets,t,r):e}function Qu(e,t,r){for(let{group:n,parent:o}of du(e.selection)){if(o.type==="matrix")return{type:"matrix",matrix:o,cursorPos:o.getPosOfChild(n)};if(o.type==="brackets"&&o.leftSymbol==="["&&o.rightSymbol==="]")return(t>0||r>0)&&e.config.matrices&&!FC(o.middle)?{type:"convert-list",brackets:o}:void 0}}function FC(e){return e.children.some(t=>t.type==="char"&&t.latex===",")}function BC(e,t,r,n,o){let a=t.getDimensions(),i=_a({numCols:a.numCols+n,numRows:a.numRows+o},e.config,a);if(_s(i,a))return e.withAriaQueueItem(e.s("mq-narration-matrix-invalid-resize",{maxSize:e.config.maxResizingMatrixSize}));let s;if(e=Oa(e,t,()=>(s=ju(t,void 0,i),s)),!s)throw new Error("Programming Error: matrix not created");let{numCols:c,numRows:f}=i;if(c>a.numCols||f>a.numRows){let h=c>a.numCols?c-1:r.x,w=f>a.numRows?f-1:r.y;e=e.withPointSelection(La(s,{x:h,y:w}).firstCursor())}else(r.x>=c||r.y>=f)&&(e=e.withPointSelection(La(s,r).lastCursor()));return ul(e,i)}function GC(e,t,r,n){let{numCols:o,numRows:a}=_a({numCols:1+r,numRows:1+n},e.config,{numCols:1,numRows:1});if(o<=1&&a<=1)return e;let i=[t.middle];for(;i.length<o*a;)i.push(re([]));let s=new sr({children:i,numCols:o}),{root:c}=Ne(t.containingSelection(),s);return e=e.withRootAndSelection(c,K(s.getChildAt(o-1,a-1).firstCursor())),ul(e,{numCols:o,numRows:a})}function Po(e,t){let{selection:r}=e,n=r.head.nodeInDirection(t);return n?$C(e,n,t):VC(e,r.group,t)}function $C(e,t,r){let{selection:n}=e,{anchor:o,group:a}=n,i=t.containingSelection(),s=Oe(i,r),c=Fe(o,s);if(!c)throw new Error("Programming Error: head group did not change, so `makeSelection` should succeed.");if(n.left.eq(c.left)&&n.right.eq(c.right)){let h=a.depth()+2;if(h>o.group.depth())throw new Error("Programming Error: Selection flip despite not being in a bigger group.");let w=o.group.ancestorAtDepth(h);if(w.type!=="group")throw new Error("Programming Error: Violated invariant of alternative group and non-group.");let N=w.lastCursorInDir(Me(r)),I=Fe(o,N);if(!I)throw new Error("Programming Error: head group is an ancestor of the anchor group, so `makeSelection` should succeed.");return I}else return c}function VC(e,t,r){let n=t.parent();if(!n)return e.selection;let o=n.cursorOnSide(r),a=Fe(e.selection.anchor,o);if(!a)throw new Error("Programming Error: head group is an ancestor of the anchor group, so `makeSelection` should succeed.");return a}function pl(e,t){return e.head.nodeInDirection(t)!==void 0}function Ch(e,t){let r=t==="up"?"left":"right";if(pl(e.selection,r))do e=e.withSelection(Po(e,r));while(pl(e.selection,r));else e=e.withSelection(Po(e,r));return e}function kh(e,t){for(;pl(e.selection,t);)e=e.withSelection(Po(e,t));return e}function qh(e,t){for(;e.selection.group.depth()>0||pl(e.selection,t);)e=e.withSelection(Po(e,t));return e}function dl(e){let t=e.root,r=t.firstCursor(),n=t.lastCursor(),o=Fe(n,r);if(!o)throw new Error("Programming Error: selection-all selection should always be valid.");return e.withSelection(o)}function Yu(e,t){let r=e.selection.group;if(!r.eq(r.getRoot()))return Hu(e,r,t)}function Eh(e,t){let r=Kt(e.selection);if(r&&t==="left"){let s=r.getChildAt(r.getNumCols()-1,r.getNumRows()-1);if(s)return Vn(e,s).withTabHistory(Ea)}let{selections:n,dir:o}=e.tabHistory,a=n.length;if(a>0&&t!==o){let s=As(n[a-1]);return e=e.withSelection(s).withTabHistory({selections:n.slice(0,a-1),dir:o}),UC(e,t)}let i=zC(e,t);if(i)return i.withTabHistory({selections:n.concat(e.selection),dir:t})}function UC(e,t){let r=e.selection,n=Kt(r);if(n)return e.withAriaQueueItem(Ku(e,n));if(r.anchor.eq(r.head)){let o=r.head.nodeInDirection(Me(t));return o?e.withAriaQueueDirOf(t,o):e.withAriaQueueDirEndOf(Me(t),r.group)}else return e.withAriaQueueSelection(r)}function zC(e,t){let r=Kt(e.selection);if(r)return br(e,r,t);let n=e.selection.group.parent();if((n==null?void 0:n.type)==="matrix"){let o=e.selection.group.nextSiblingInDir(t);return o?Vn(e,o):t==="right"?cl(e,n,"keyboard"):br(e,n,t)}else return Yu(e,t)}function Ih(e){for(;;){let t=!1,r=e.selection;e:for(let n of Nt(e.root)){let o=n.numChildren();for(let a=0;a<o-1;a++){let i=n.nthChild(a),s=n.nthChild(a+1);if(i.type==="supsub"&&s.type==="supsub"&&![r.left,r.right,r.anchor].some(c=>i.cursorOnSide("right").eq(c))&&!jf(n,c=>c===a+1)){e=e.withSplicedMqTree(jt(n,a,a+2),()=>[HC(i,s)]),t=!0;break e}}}if(!t)return e}}function HC(e,t){return new je({sub:Nh(e.sub,t.sub),sup:Nh(e.sup,t.sup)})}function Nh(e,t){var r;return e&&t?tg(e,t):(r=e!=null?e:t)!=null?r:void 0}function Ah(e){switch(e.type){case"tick":case"focus":case"blur":case"set-config":case"api-set-latex":case"api-clear-selection":case"api-set-selection":case"mouse-down":case"mouse-move":case"mouse-up":case"set-aria-label":case"set-aria-post-label":return!0;default:return!1}}function Ph(e){for(;;){let t=e.root.find(r=>r.type!=="string"||e.selection.group.eq(r.body)?!1:r.ghostSide==="left"&&!!r.prevSibling()||r.ghostSide==="right"&&!!r.nextSibling());if(!t)return e;if(t.type!=="string")throw new Error("Unreachable: expected string");e=e.withSplicedMqTree(t.containingSelection(),()=>[Sa(t,void 0)])}}var WC="ID_",Ro=class{constructor(){this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}register(t){let r=WC+this._lastID++;return this._callbacks[r]=t,r}unregister(t){this._callbacks[t]||Fa(!1,"Dispatcher.unregister(...): `%s` does not map to a registered callback.",t),delete this._callbacks[t]}waitFor(t){this._isDispatching||Fa(!1,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(let r=0;r<t.length;r++){let n=t[r];if(this._isPending[n]){this._isHandled[n]||Fa(!1,"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",n);continue}this._callbacks[n]||Fa(!1,"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",n),this._invokeCallback(n)}}dispatch(t){this._isDispatching&&Fa(!1,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this._startDispatching(t);try{for(let r in this._callbacks)this._isPending[r]||this._invokeCallback(r)}finally{this._stopDispatching()}}isDispatching(){return this._isDispatching}_invokeCallback(t){this._isPending[t]=!0,this._callbacks[t](this._pendingPayload),this._isHandled[t]=!0}_startDispatching(t){for(let r in this._callbacks)this._isPending[r]=!1,this._isHandled[r]=!1;this._pendingPayload=t,this._isDispatching=!0}_stopDispatching(){delete this._pendingPayload,this._isDispatching=!1}};function Fa(e,t,...r){if(!e){let n;if(t===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let o=0;n=new Error(t.replace(/%s/g,()=>r[o++])),n.name="Invariant Violation"}throw n.framesToPop=1,n}}var ml=class{constructor(){this.nextSubscription=0;this.subscriptions=new Map;this.focusState="blurred";this.mostRecentAriaMessage="";this.showGrouping=!0;this._queuedCallbacks=[];this.model=Ks.empty(),this.dispatcher=new Ro,this.dispatcher.register(t=>{this.onAction(t)})}runAfterDispatch(t){this._queuedCallbacks.push(t)}rejectPaste(t){this.runAfterDispatch(()=>{var r,n;(n=(r=this.model.config).onPasteRejected)==null||n.call(r,t)})}dispatch(t){if(t.type==="focus"&&this.dispatcher.isDispatching()){this.runAfterDispatch(()=>{this.dispatch(t)});return}this.dispatcher.dispatch(t);let r;for(;r=this._queuedCallbacks.shift();)r()}onAction(t){let r=this.model;if(this.handleAction(t),this.getConfig().static||r.root.children.length===0?this.showGrouping=!0:this.model.root!==r.root&&(this.showGrouping=!1,this.showGroupingTimeout!==void 0&&clearTimeout(this.showGroupingTimeout),this.showGroupingTimeout=setTimeout(()=>{this.showGroupingTimeout=void 0,this.dispatch({type:"show-grouping"})},1e3)),t.type!=="show-grouping"&&(t.type!=="arrow-up-down"&&Kf(this.model.root),t.type!=="tab-dir"&&this.model.tabHistory.selections.length>0&&(this.model=this.model.withTabHistory(Ea))),this.model=Ph(this.model),this.model=Ih(this.model),this.model=Th(this.model),this.model.config.maxDepth!==void 0){let o=bu(this.model.root);o>this.model.config.maxDepth&&this.lastDepth!==void 0&&o>this.lastDepth?(this.model=r,Lf(r.root),t.type==="write-latex"&&t.fromPaste&&this.rejectPaste("exceeds-max-depth")):this.lastDepth=o}this.isDragResizingMatrix()&&this.getMatrixBeingResized()===void 0&&(this.model=this.model.withMouseDownState({type:"mouse-down-selecting"})),this.updateViews()}subscribeToChanges(t){let r=this.nextSubscription;return this.nextSubscription+=1,this.subscriptions.set(r,t),()=>{this.subscriptions.delete(r)}}updateViews(){for(let t of this.subscriptions.values())t()}markAfterRender(){this.model.markAfterRender()}handleAction(t){var r,n,o;if(!(this.getConfig().static&&!Ah(t)))switch(t.type){case"show-grouping":{this.showGrouping=!0;break}case"focus":this.focusState="focused",this.getConfig().static&&Ee(this.model.selection)&&(this.model=dl(this.model));break;case"blur":if(t.intentional){if(this.focusState="blurred",this.model.config.resetCursorOnBlur){let a=this.model.selection;this.model=this.model.withPointSelection(this.getRoot().lastCursor()),this.model.selectionBeforeBlur=a}this.model=gu(this.model,"root")}else this.focusState="unintentional-blurred";break;case"tick":break;case"set-config":this.model=this.model.withConfig(t.config);break;case"api-set-latex":{this.lastDepth=void 0;let a=Aa(t.latex,this.model.config),i=a.lastCursor(),s=K(i);this.model=this.model.withRootAndSelection(a,s);break}case"api-clear-selection":{this.model=this.model.withPointSelection(this.getSelection().head);break}case"api-set-selection":{let{startIndex:a,endIndex:i,anchorIndex:s,headIndex:c,latex:f}=t.selection;if(ir(this.getRoot())!==f)return;let h,w;if(s!==void 0&&c!==void 0)h=Ta(this.getRoot(),s),w=Ta(this.getRoot(),c);else{if(a>i)return;h=Ta(this.getRoot(),i),w=Ta(this.getRoot(),a)}if(h===void 0||w===void 0)return;let N=Fe(h,w);if(!N)return;this.model=this.model.withSelection(N);break}case"select-all":{this.model=dl(this.model);break}case"jump-to-field-end":case"jump-to-field-start":{let a=t.type==="jump-to-field-end"?"right":"left",i=this.getRoot(),s=i.lastCursorInDir(a),c=Xt(i,this.model.getMathspeakOptions()),f=Hs(this.model.getAriaLabel(),c,this.model.getAriaPostLabel()),h=this.model.s(a==="left"?"mq-narration-beginning-of":"mq-narration-end-of",{expr:f});this.model=this.model.withPointSelection(s).withAriaQueueItem(h);break}case"write-latex":{let a;if(nn(this.getSelection().group)?a=zg(t.latex):a=Aa(t.latex,this.model.config),t.fromPaste){if(a.children.length===0&&t.latex.trim()!==""){this.rejectPaste("unrecognized-latex");break}if(xu(a,this.model.config.maxResizingMatrixSize)){this.rejectPaste("matrix-too-large");break}}let{root:i,insertedSelection:s}=ye(this.getSelection(),a.children),c=K(s.right);this.model=this.model.withRootAndSelection(i,c),t.fromPaste&&this.runAfterDispatch(()=>{this.model.config.onPaste&&this.model.config.onPaste()});break}case"delete-in-direction":{this.model=ll(this.getModel(),t.direction);break}case"ctrl-delete-in-direction":{this.model=hh(this.getModel(),t.direction);break}case"cut-selected":{let{root:a,insertedSelection:i}=ye(this.getSelection(),[]);this.model=this.model.withRootAndSelection(a,i),this.runAfterDispatch(()=>{this.model.config.onCut&&this.model.config.onCut()});break}case"arrow-left-right":this.model=fh(this.model,t.dir);break;case"shift-left-right":{let a=Po(this.model,t.dir);this.model=this.model.withSelection(a);break}case"arrow-up-down":{this.model=mh(this.model,t.updown);break}case"shift-up-down":{this.model=Ch(this.model,t.updown);break}case"home-end":{let a=this.model.selection.group,i=a.lastCursorInDir(t.dir);this.model=this.model.withPointSelection(i).withAriaQueueDirEndOf(t.dir,a);break}case"shift-home-end":{this.model=kh(this.model,t.dir);break}case"ctrl-shift-home-end":{this.model=qh(this.model,t.dir);break}case"escape-dir":{let a=this.getMatrixAtCursor(),i=a?br(this.model,a,t.direction):Yu(this.model,t.direction);i!==void 0&&((r=t.evt)==null||r.preventDefault(),this.model=i);break}case"tab-dir":{let a=Eh(this.model,t.direction);a&&((n=t.evt)==null||n.preventDefault(),this.model=a);break}case"mouse-down":{if((o=t.target)!=null&&o.closest(".dcg-mq-matrix__pull-handle")){let i=t.target.closest(".dcg-mq-matrix__container");if(!i)throw new Error("Missing matrix DOM");let s=ol(this.model,i);if(!s||s.type!=="matrix")throw new Error("Missing matrix");this.model=cl(this.model,s,"mouse");let c=i.getBoundingClientRect();this.model=this.model.withMouseDownState({type:"mouse-down-resizing-matrix",originalMatrixTopLeft:{clientX:c.left,clientY:c.top}});return}let a=nl(this.model,t.target,rl(t));this.model=this.model.withPointSelection(a).withMouseDownState({type:"mouse-down-selecting"});break}case"mouse-move":{if(this.model.mouseDownState.type==="mouse-down-resizing-matrix"){if(!Br(this.model))return;let c=this.model.mouseDownState.originalMatrixTopLeft;this.model=wh(this.model,t.clientX,t.clientY,c),this.model=this.model.withMouseDownState({type:"mouse-down-resizing-matrix",originalMatrixTopLeft:c}),this.runAfterDispatch(()=>{var f,h;(h=(f=this.model.config).onMatrixResize)==null||h.call(f)});return}let a=nl(this.model,t.target,rl(t));this.model.config.resetCursorOnBlur&&this.getFocusState()!=="focused"&&this.model.selectionBeforeBlur&&(this.model=this.model.withSelection(this.model.selectionBeforeBlur));let i=Ns(this.model.selection.anchor,a);this.model=this.model.withSelection(i).withMouseDownState({type:"mouse-down-selecting"}),Ee(i)||(this.model=this.model.withAriaQueueSelection(i));break}case"mouse-up":{if(this.model=this.model.withMouseDownState({type:"none"}),Br(this.model))return;Ee(this.model.selection)&&(this.getConfig().static?this.model=dl(this.model):this.model=this.model.withAriaQueueNode(this.model.selection.group));break}case"resize-matrix-by-arrow":{this.model=vh(this.model,t.dx,t.dy),this.runAfterDispatch(()=>{var a,i;(i=(a=this.model.config).onMatrixResize)==null||i.call(a)});break}case"resize-matrix-at-cursor":{this.model=Sh(this.model,t.dx,t.dy),this.runAfterDispatch(()=>{var a,i;(i=(a=this.model.config).onMatrixResize)==null||i.call(a)});break}case"click-at":{let a=nl(this.model,t.target,rl(t));this.model=this.model.withPointSelection(a);break}case"type-char":{this.model=eh(this.model,t.char);break}case"set-aria-label":this.model=this.model.withAriaLabel(t.label);break;case"set-aria-post-label":this.model=this.model.withAriaPostLabel(t.label),this.ariaAlertTimeout!==void 0&&clearTimeout(this.ariaAlertTimeout),t.label!==""&&t.timeout!==void 0&&(this.ariaAlertTimeout=setTimeout(()=>{this.dispatch({type:"speak-aria-post-after-timeout"})},t.timeout));break;case"speak-aria-post-after-timeout":this.getFocusState()==="focused"&&(this.model=this.model.withAriaQueueItem(Xt(this.getRoot(),this.model.getMathspeakOptions()).trim()+" "+this.model.getAriaPostLabel().trim()));break;case"speak-parent-block":{let a=this.model.selection.group.parent();if(a)this.model=this.model.withAriaQueueNode(a);else{let i=this.model.s("mq-narration-nothing-above");this.model=this.model.withAriaQueueItem(i)}break}case"speak-current-block":{let a=this.model.selection.group;if(a.numChildren()>0)this.model=this.model.withAriaQueueNode(a);else{let i=this.model.s("mq-narration-block-is-empty");this.model=this.model.withAriaQueueItem(i)}break}case"speak-block-dir":{let a=this.model.selection.group.parent(),i=a==null?void 0:a.nextSiblingInDir(t.dir);if(i)this.model=this.model.withAriaQueueNode(i);else if(t.dir==="right"){let s=this.model.s("mq-narration-nothing-to-the-right");this.model=this.model.withAriaQueueItem(s)}else{let s=this.model.s("mq-narration-nothing-to-the-left");this.model=this.model.withAriaQueueItem(s)}break}case"speak-selection":{this.model=this.model.withAriaQueueSelection(this.model.selection);break}case"speak-aria-post":{let a=this.model.getAriaPostLabel();if(a.length>0)this.model=this.model.withAriaQueueItem(a);else{let i=this.model.s("mq-narration-no-answer");this.model=this.model.withAriaQueueItem(i)}break}default:throw new Error(`Invalid action type: ${t.type}`)}}getLatexSelection(){return mu(this.getSelection())}domNodeToSpan(t){let r=ol(this.model,t);if(!r)return;let n=r.type==="group"?jt(r,0,r.children.length):r.containingSelection();return mu(n)}debugGetCursorSelection(){return this.getSelection()}getSelection(){return this.model.selection}getRoot(){return this.model.root}isSelecting(){return this.model.mouseDownState.type==="mouse-down-selecting"}getFocusState(){return this.focusState}fakeFocus(){this.focusState="focused"}selectedLatex(){return Zf(this.getSelection())}getLatex(){return ir(this.getRoot())}getModel(){return this.model}getConfig(){return this.model.config}getAriaLabel(){return this.model.getAriaLabel()}getAriaPostLabel(){return this.model.getAriaPostLabel()}setMostRecentAriaMessage(t){this.mostRecentAriaMessage=t}getMostRecentAriaMessage(){return this.mostRecentAriaMessage}getShowGrouping(){return this.showGrouping&&this.getConfig().enableDigitGrouping}getMatrixBeingResized(){return Br(this.model)}getMatrixAtCursor(){var t,r;return(r=Kt(this.model.selection))!=null?r:(t=Is(this.model.selection))==null?void 0:t.matrix}canResizeMatrixAtCursor(t,r){return Qu(this.model,t,r)!==void 0}isDragResizingMatrix(){return this.model.mouseDownState.type==="mouse-down-resizing-matrix"}};function Rh(e){return crypto.getRandomValues(new Uint8Array(e))}var Dh=4096,fl=[],un=0,Xu;for(;un<256;un++)fl[un]=(un+256).toString(16).substring(1);function gl(){(!Xu||un+16>Dh)&&(Xu=Rh(Dh),un=0);for(var e=0,t,r="";e<16;e++)t=Xu[un+e],e==6?r+=fl[t&15|64]:e==8?r+=fl[t&63|128]:r+=fl[t],e&1&&e>1&&e<11&&(r+="-");return un+=16,r}var Zu;function Oh(){return Zu===void 0&&(Zu=KC()),Zu}function KC(){let e=document.createElement("span");e.style.display="inline-block";for(let n=0;n<9;n++)Lh(e);let t=Lh(e);document.body.appendChild(e);let r=e.getBoundingClientRect().right-t.getBoundingClientRect().right;return e.remove(),r>.05}function Lh(e){let t=document.createElement("span");return t.style.display="inline-block",t.innerText="0",t.style.marginLeft="0.7px",e.appendChild(t),t}function _h(){}var ep=class{constructor(){this.fn=_h}listen(t){this.fn=t,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(this.fn)}listenOnce(t){this.listen((...r)=>{this.clearListener(),t(...r)})}clearListener(){this.fn=_h,clearTimeout(this.timeoutId)}trigger(...t){this.fn(...t)}},jC={8:"Backspace",9:"Tab",10:"Enter",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Esc",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Del",144:"NumLock"},QC={ArrowRight:"Right",ArrowLeft:"Left",ArrowDown:"Down",ArrowUp:"Up",Delete:"Del",Escape:"Esc",UIKeyInputEscape:"Esc"," ":"Spacebar"};function Ju(e){switch(Gh(e)){case"Right":case"Left":case"Down":case"Up":return!0;default:return!1}}function YC(e){return e.length===1&&e>="a"&&e<="z"}function Gh(e){var t;if(e.key===void 0){let r=e.which||e.keyCode;return jC[r]||String.fromCharCode(r)}return YC(e.key)?e.key.toUpperCase():(t=QC[e.key])!=null?t:e.key}function Fh(e){let t=Gh(e),r=[];return e.ctrlKey&&r.push("Ctrl"),e.metaKey&&r.push("Meta"),e.altKey&&r.push("Alt"),e.shiftKey&&r.push("Shift"),r.length?(t!=="Alt"&&t!=="Control"&&t!=="Meta"&&t!=="Shift"&&r.push(t),r.join("-")):t}function Bh(e,t){for(let[r,n]of Object.entries(t)){let o=r;e.addEventListener(o,n)}}function $h(e,t){let r=null,n=null,o=new ep;function a(){try{e instanceof HTMLTextAreaElement&&e.select()}catch(M){}}function i(){return!("selectionStart"in e)||!(e instanceof HTMLTextAreaElement)?!1:e.selectionStart!==e.selectionEnd}function s(){t.keystroke(Fh(r),r)}function c(M){o.trigger(M),M.target===e&&(r=M,n=null,Ju(M)&&M.preventDefault(),s())}function f(M){o.trigger(M),M.target===e&&(r&&n&&s(),n=M,Ju(M)?o.listenOnce(N):o.listen(w))}function h(M){o.trigger(M),M.target===e&&r&&!n&&(Ju(M)?o.listenOnce(N):o.listen(w))}function w(){if(i()||!(e instanceof HTMLTextAreaElement))return;let M=e.value;r&&(r.key==="Unidentified"||!r.altKey&&r.ctrlKey&&!r.metaKey&&r.shiftKey&&(r.key==="U"||r.key==="Process"))||(M.length===1?(e.value="",t.typedText(M)):N())}function N(){e instanceof HTMLTextAreaElement&&e.value.length>1&&a()}function I(){r=null,n=null,o.clearListener(),e instanceof HTMLTextAreaElement&&(e.value="")}function $(M){var B,W,me;if(o.trigger(),M.target!==e)return;document.activeElement!==e&&e.focus(),M.preventDefault();let S=(B=M.clipboardData)==null?void 0:B.getData("text/plain");!S||(me=(W=t.options).overridePaste)!=null&&me.call(W,M)||t.paste(S)}function C(M){o.trigger(M)}if(t.KIND_OF_MQ==="StaticMath"){Bh(e,{keydown:M=>{t.keystroke(Fh(M),M)}});return}Bh(e,{keydown:c,keypress:f,keyup:h,focusout:I,cut:function(M){var B,W;if(!M.clipboardData||((W=(B=t.options).overrideCut)==null?void 0:W.call(B,M)))return;let _=t.cut();M.clipboardData.setData("text/plain",_),M.clipboardData.setData("application/x-latex",_),M.preventDefault(),M.stopPropagation()},copy:function(M){var B,W;if(!M.clipboardData||((W=(B=t.options).overrideCopy)==null?void 0:W.call(B,M)))return;let _=t.copy();M.clipboardData.setData("text/plain",_),M.clipboardData.setData("application/x-latex",_),M.preventDefault()},paste:$,input:C})}function Vh(e,t){let r=Date.now(),n,o=0;function a(){let c=(Date.now()-r)/e;c<=o?s():o=c,t(o,s,i)}function i(){n!==void 0&&cancelAnimationFrame(n),n=void 0}function s(){i(),n=requestAnimationFrame(a)}t(e<=0?1:0,s,i)}function Uh(e){e.isScrolling=!1;let r=e.getRoot().getDomNode();if(!r)return;let n=r.getBoundingClientRect();if(!n)return;let o=XC(e,n,r);if(o===0||o<0&&r.scrollLeft===0||o>0&&r.scrollWidth<=r.scrollLeft+n.width)return;e.cancelScrollHoriz&&(e.cancelScrollHoriz(),e.cancelScrollHoriz=void 0),e.isScrolling=!0;let a=r.scrollLeft,i=e.getModel().config.scrollAnimationDuration;Vh(i,(s,c,f)=>{s>=1?(e.cancelScrollHoriz=void 0,e.isScrolling=!1,r.scrollLeft=Math.round(a+o)):(e.cancelScrollHoriz=f,c(),r.scrollLeft=Math.round(a+s*o)),tp(e)})}function XC(e,t,r){let n=e.getModel(),o=e.getModel().selection;if(e.isSelecting()&&(o=K(o.head)),e.getFocusState()!=="focused")return-r.scrollLeft;let a=Br(e.getModel()),i=a&&ZC(t,a);if(i!==void 0)return i;if(Ee(o)){let s=Uu(n);return s===void 0?0:zh(t,s)}else return JC(t,o)}function ZC(e,t){let r=t==null?void 0:t.getDomNode();if(r){for(let n of r.children)if(n.classList.contains("dcg-mq-matrix__pull-handle")){let a=n.getBoundingClientRect().right;return zh(e,a)}}}function zh(e,t){return t>e.right-20?t-(e.right-20):t<e.left+20?t-(e.left+20):0}function JC(e,t){var i,s,c,f;let r=(s=(i=t.left.nodeAfter())==null?void 0:i.boundingClientRect())==null?void 0:s.left,n=(f=(c=t.right.nodeBefore())==null?void 0:c.boundingClientRect())==null?void 0:f.right;if(r===void 0||n===void 0)return 0;let o=r-(e.left+20),a=n-(e.right-20);return t.head.eq(t.left)?o<0?o:a>0?r-a<e.left+20?o:a:0:a>0?a:o<0?n-o>e.right-20?a:o:0}function tp(e){let r=e.getRoot().getDomNode();if(!r)return;let n=!1;e.getFocusState()==="focused"&&(n=r.scrollLeft>0),r.classList.toggle("dcg-mq-editing-overflow-left",n)}var hl=class{constructor(t,r,n){this.scrollHorizQueued=!1;this.firstMessageSent=!1;this.firstMessageTimeout=null;this.controller=t,this.rootElt=r,r.classList.add("dcg-mq-math-mode"),r.translate=!1,r.classList.add("notranslate"),r.childNodes.forEach(I=>I.remove());let o=this.handleMouseDown.bind(this);r.addEventListener("mousedown",o);let a=this.handlePointerDown.bind(this);r.addEventListener("pointerdown",a);let i=document.createElement("span");i.className="dcg-mq-aria-alert",i.ariaLive="assertive",i.ariaAtomic="true",this.ariaAlertElt=i;let s=document.createElement("span");s.className="dcg-mq-textarea",r.appendChild(s);let c=gl(),f=document.createElement("span");f.className="dcg-mq-mathspeak",f.id=c,f.setAttribute("aria-hidden","true"),this.mathspeakElt=f,s.appendChild(f);let h=document.createElement("textarea");h.inputMode="none",h.setAttribute("autocorrect","off"),h.setAttribute("aria-labelledby",c),h.autocapitalize="none",h.spellcheck=!1,h.autocomplete="off",s.appendChild(h),this.textarea=h,$h(h,n),this.addFocusAndBlurListeners();let w=document.createElement("span"),N=Oh()?" dcg-mq-has-spacing-bug":"";w.className="dcg-mq-root-block"+N,w.setAttribute("aria-hidden","true"),r.appendChild(w),this.rootBlock=w,this.updateAttributes(),this.renderer=new Qs(this.rootBlock)}updateAttributes(){this.updateTabIndex(),this.rootBlock.classList.toggle("dcg-mq-show-grouping",this.controller.getShowGrouping());let t=this.controller.getConfig();this.rootElt.classList.toggle("dcg-mq-editable-field",!t.static),t.needsSystemKeypad?this.textarea.removeAttribute("inputmode"):this.textarea.inputMode="none"}updateTabIndex(){let t=this.tabIndex();this.textarea.tabIndex=t;let r=this.controller.getConfig();t<0&&r.static?this.textarea.setAttribute("aria-hidden","true"):this.textarea.removeAttribute("aria-hidden"),t>=0?this.mathspeakElt.setAttribute("aria-hidden","true"):this.mathspeakElt.removeAttribute("aria-hidden")}tabIndex(){let t=this.controller.getConfig();return t.tabindex!==void 0?t.tabindex:t.static?-1:0}containerHasFocus(){return document.activeElement&&this.rootElt.contains(document.activeElement)}updateAriaView(){let t=this.controller.getModel();if(t.ariaQueue.length===0)return;let r=t.ariaQueue.join(" ").replace(/ +(?= )/g,"").trim();this.controller.setMostRecentAriaMessage(r),this.containerHasFocus()&&(t.config.logAriaAlerts&&r&&console.log(r),this.ariaAlertElt.parentNode!==this.rootElt&&this.rootElt.prepend(this.ariaAlertElt),this.firstMessageSent?this.ariaAlertElt.textContent=r:(this.firstMessageTimeout!==null&&clearTimeout(this.firstMessageTimeout),this.firstMessageTimeout=setTimeout(()=>{this.firstMessageSent=!0,this.firstMessageTimeout=null,this.ariaAlertElt.textContent=r},50)))}updateView(){let t=this.controller.getRoot(),r=this.controller.getFocusState(),n=this.controller.getModel();this.updateAttributes(),this.updateAriaView(),this.renderer.render(n,r),this.setTextareaSelection();let o=n.getAriaLabel();if(this.controller.getFocusState()!=="focused"){let s=Xt(n.root,n.getMathspeakOptions());this.mathspeakElt.textContent=Hs(o,s,n.getAriaPostLabel())}let a=t.children.length===0,i=this.controller.getFocusState()==="focused";this.rootElt.classList.toggle("dcg-mq-focused",i),this.rootBlock.classList.toggle("dcg-mq-hasCursor",i),this.rootBlock.classList.toggle("dcg-mq-empty",a&&!i),this.controller.markAfterRender(),this.scrollHorizQueued||(this.scrollHorizQueued=!0,this.controller.isScrolling=!0,requestAnimationFrame(()=>{this.scrollHorizQueued=!1,Uh(this.controller)})),tp(this.controller),this.updateResizeCover()}updateResizeCover(){var t;if(this.controller.isDragResizingMatrix()){if(this.resizeCover)return;let r=document.createElement("div");r.className="dcg-mq-resize-cover",this.rootElt.appendChild(r),this.resizeCover=r}else(t=this.resizeCover)==null||t.remove(),this.resizeCover=void 0}setTextareaSelection(){if(document.activeElement!==this.textarea)return;let t=this.controller.getLatexSelection(),r=t.latex.slice(t.startIndex,t.endIndex);this.textarea.value=r,r!==""&&this.textarea.select()}focus(){this.textarea.focus()}blur(){this.textarea.blur()}handlePointerDown(t){if(!t.isPrimary||this.activePullHandlePointerId!==void 0||!(t.target instanceof Element))return;let r=t.target.closest(".dcg-mq-matrix__pull-handle");if(!r)return;t.preventDefault(),this.focus(),this.activePullHandlePointerId=t.pointerId;let n=this.rootElt.ownerDocument,o=i=>{i.pointerId===this.activePullHandlePointerId&&(this.controller.dispatch({type:"mouse-move",clientX:i.clientX,clientY:i.clientY,target:void 0}),this.textarea!==document.activeElement&&this.focus())},a=i=>{i.pointerId===this.activePullHandlePointerId&&(this.activePullHandlePointerId=void 0,n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",a),n.removeEventListener("pointercancel",a),this.controller.dispatch({type:"mouse-up"}))};n.addEventListener("pointermove",o),n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),this.controller.dispatch({type:"mouse-down",target:r,clientX:t.clientX,clientY:t.clientY})}handleMouseDown(t){var h;if(t.target===null||(t.preventDefault(),t.target.closest(".dcg-mq-matrix__pull-handle")))return;let r=this.rootElt.ownerDocument,n=this.controller.getConfig().ignoreNextMousedown;if(n!=null&&n(t)||t.target.closest(".dcg-mq-ignore-mousedown"))return;this.focus();let o,a=this.controller.getConfig().askIfShouldIgnoreMousemove,i=w=>{var N;a!=null&&a(w,this.rootElt)||(o=(N=w.target)!=null?N:void 0)},s=w=>{a!=null&&a(w,this.rootElt)||(this.controller.dispatch({type:"mouse-move",clientX:w.clientX,clientY:w.clientY,target:o}),this.textarea!==document.activeElement&&this.focus(),o=void 0)},c=()=>{this.rootElt.removeEventListener("mousemove",i),r.removeEventListener("mousemove",s),r.removeEventListener("mouseup",f)},f=()=>{c(),this.controller.dispatch({type:"mouse-up"})};this.rootElt.addEventListener("mousemove",i),r.addEventListener("mousemove",s),r.addEventListener("mouseup",f),this.controller.dispatch({type:"mouse-down",target:(h=t.target)!=null?h:void 0,clientX:t.clientX,clientY:t.clientY})}addFocusAndBlurListeners(){this.textarea.addEventListener("focus",()=>{clearTimeout(this.blurTimeout),this.controller.dispatch({type:"focus"})}),this.textarea.addEventListener("blur",()=>{this.blurTimeout=setTimeout(()=>{this.controller.dispatch({type:"blur",intentional:document.hasFocus()})})})}};function Hh(e){return e.__dcgMqApiInstance}function ek(e,t){e.__dcgMqApiInstance=t}function tk(e,t){return new Ba(e,{static:!0,...t})}function Wh(e,t){return new Ba(e,t)}var rk=Wh,Ba=class{constructor(t,r){let n=t.textContent;if(this.container=t,this.controller=new ml,Hh(t)!==void 0)throw new Error("MQ Error: cannot attach another API to the same element.");ek(t,this);let o={keystroke:(a,i)=>{let s=this.controller.getConfig();s.overrideKeystroke?s.overrideKeystroke(a,i):this._keystrokeSingle(a,i)},typedText:a=>{let i=this.controller.getConfig();i.overrideTypedText?i.overrideTypedText(a):this.typedText(a)},paste:a=>this._paste(a),cut:()=>this._cut(),copy:()=>this._copy(),options:{overridePaste:a=>{var i,s,c;return(c=(s=(i=this.controller.getConfig()).overridePaste)==null?void 0:s.call(i,a))!=null?c:!1},overrideCopy:a=>{var i,s,c;return(c=(s=(i=this.controller.getConfig()).overrideCopy)==null?void 0:s.call(i,a))!=null?c:!1},overrideCut:a=>{var i,s,c;return(c=(s=(i=this.controller.getConfig()).overrideCut)==null?void 0:s.call(i,a))!=null?c:!1}},KIND_OF_MQ:"MathField"};this.view=new hl(this.controller,t,o),this.config(r),this.view.updateAttributes(),this.controller.subscribeToChanges(()=>this.view.updateView()),n.trim()&&this.latex(n)}latex(t){return t!==void 0?(this.controller.dispatch({type:"api-set-latex",latex:t}),this):this.controller.getLatex()}mathspeak(){return Xt(this.controller.getRoot(),this.controller.getModel().getMathspeakOptions()).replace(/ {2,}/g," ")}selection(t){return t?(this.focus(),this.controller.dispatch({type:"api-set-selection",selection:t}),this):this.controller.getLatexSelection()}domNodeToSpan(t){return this.controller.domNodeToSpan(t)}clearSelection(){this.controller.dispatch({type:"api-clear-selection"})}select(){this.focus(),this.controller.dispatch({type:"select-all"})}write(t){return this.controller.dispatch({type:"write-latex",latex:t,fromPaste:!1}),this}keystroke(t,r){let n=t.replace(/^\s+|\s+$/g,"").split(/\s+/);for(let o=0;o<n.length;o+=1)this._keystrokeSingle(n[o],r);return this}_keystrokeSingle(t,r){switch(t){case"Left":case"Right":{r==null||r.preventDefault(),this.controller.getMatrixBeingResized()?this.controller.dispatch({type:"resize-matrix-by-arrow",dx:t==="Left"?-1:1,dy:0}):this.controller.dispatch({type:"arrow-left-right",dir:t==="Left"?"left":"right"});break}case"Up":case"Down":{r==null||r.preventDefault(),this.controller.getMatrixBeingResized()?this.controller.dispatch({type:"resize-matrix-by-arrow",dx:0,dy:t==="Up"?-1:1}):this.controller.dispatch({type:"arrow-up-down",updown:t==="Up"?"up":"down"});break}case"Meta-Shift-Left":case"Meta-Shift-Right":case"Meta-Shift-Up":case"Meta-Shift-Down":case"Ctrl-Shift-Left":case"Ctrl-Shift-Right":case"Ctrl-Shift-Up":case"Ctrl-Shift-Down":{let n=t.endsWith("-Left")?-1:t.endsWith("-Right")?1:0,o=t.endsWith("-Up")?-1:t.endsWith("-Down")?1:0;if(!this.controller.canResizeMatrixAtCursor(n,o))break;r==null||r.preventDefault(),r==null||r.stopPropagation(),this.controller.dispatch({type:"resize-matrix-at-cursor",dx:n,dy:o});break}case"Shift-Left":case"Shift-Right":r==null||r.preventDefault(),this.controller.dispatch({type:"shift-left-right",dir:t==="Shift-Left"?"left":"right"});break;case"Shift-Up":case"Shift-Down":r==null||r.preventDefault(),this.controller.dispatch({type:"shift-up-down",updown:t==="Shift-Up"?"up":"down"});break;case"Home":case"End":r==null||r.preventDefault(),this.controller.dispatch({type:"home-end",dir:t==="Home"?"left":"right"});break;case"Shift-Home":case"Shift-End":r==null||r.preventDefault(),this.controller.dispatch({type:"shift-home-end",dir:t==="Shift-Home"?"left":"right"});break;case"Ctrl-Shift-Home":case"Ctrl-Shift-End":r==null||r.preventDefault(),this.controller.dispatch({type:"ctrl-shift-home-end",dir:t==="Ctrl-Shift-Home"?"left":"right"});break;case"Backspace":case"Del":{r==null||r.preventDefault(),this.controller.dispatch({type:"delete-in-direction",direction:t==="Backspace"?"left":"right"});break}case"Ctrl-Backspace":case"Ctrl-Del":{r==null||r.preventDefault(),this.controller.dispatch({type:"ctrl-delete-in-direction",direction:t==="Ctrl-Backspace"?"left":"right"});break}case"Tab":case"Shift-Tab":{this.controller.dispatch({type:"tab-dir",direction:t==="Tab"?"right":"left",evt:r});break}case"Esc":case"Shift-Esc":{this.controller.dispatch({type:"escape-dir",direction:t==="Esc"?"right":"left",evt:r});break}case"Ctrl-A":case"Meta-A":r==null||r.preventDefault(),this.select();break;case"Ctrl-End":r==null||r.preventDefault(),this.moveToRightEnd();break;case"Ctrl-Home":r==null||r.preventDefault(),this.moveToLeftEnd();break;case"Ctrl-Alt-Left":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-block-dir",dir:"left"});break;case"Ctrl-Alt-Right":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-block-dir",dir:"right"});break;case"Ctrl-Alt-Up":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-parent-block"});break;case"Ctrl-Alt-Down":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-current-block"});break;case"Ctrl-Alt-Shift-Down":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-selection"});break;case"Ctrl-Alt-=":case"Ctrl-Alt-Shift-Right":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-aria-post"});break}}moveToLeftEnd(){return this.controller.dispatch({type:"jump-to-field-start"}),this}moveToRightEnd(){return this.controller.dispatch({type:"jump-to-field-end"}),this}typedText(t){for(let r=0;r<t.length;r+=1)this._typedTextSingle(t.charAt(r));return this}_typedTextSingle(t){this.controller.dispatch({type:"type-char",char:t})}debugGetMostRecentAriaMessage(){return this.controller.getMostRecentAriaMessage()}debugGetCursorSelection(){return this.controller.debugGetCursorSelection()}debugGetRoot(){return this.controller.getRoot()}debugGetModel(){return this.controller.getModel()}focus(){return this.view.focus(),this}fakeFocus(){this.controller.fakeFocus()}blur(){return this.view.blur(),this}subscribeToChanges(t){return this.controller.subscribeToChanges(t)}config(t){let r=this.controller.getConfig(),n=$u(r,t);if(!Mn(n,r))return this.controller.dispatch({type:"set-config",config:n}),this}ignoreNextMousedown(t){return this.config({ignoreNextMousedown:t}),this}getAriaLabel(){return this.controller.getAriaLabel()}setAriaLabel(t){return this.controller.getModel().getRawAriaLabel()!==t&&this.controller.dispatch({type:"set-aria-label",label:t}),this}getAriaPostLabel(){return this.controller.getAriaPostLabel()}setAriaPostLabel(t,r){return this.getAriaPostLabel()!==t&&this.controller.dispatch({type:"set-aria-post-label",label:t,timeout:r}),this}clickAt(t,r,n){return this.focus(),this.controller.dispatch({type:"click-at",clientX:t,clientY:r,target:n}),this}isUserSelecting(){return this.controller.isSelecting()}isResizingMatrix(){return this.controller.getMatrixBeingResized()!==void 0}isCursorInMatrix(){return this.controller.getMatrixAtCursor()!==void 0}isScrolling(){return this.controller.isScrolling}el(){return this.container}_paste(t){this.controller.dispatch({type:"write-latex",latex:t,fromPaste:!0})}_copy(){return this.controller.selectedLatex()}_cut(){let t=this.controller.selectedLatex();return this.controller.dispatch({type:"cut-selected"}),t}};function nk(e){sh(e)}var np=rp,Kh=!1;function ok(){Kh||(np.config({localize:Ti,leftRightIntoCmdGoes:"up",sumStartsWithNEquals:!0,supSubsRequireOperand:!0,charsThatBreakOutOfSupSub:"+-=<>*",autoCommands:qf({disallowAns:!0}),autoSubscriptNumerals:!0,restrictMismatchedBrackets:"none",typingPercentWritesPercentOf:!0,...Ef(),resetCursorOnBlur:!0,enableDigitGrouping:!0}),Kh=!0)}ok();var ak=Object.assign(e=>np.getApiInstanceForElement(e),np);var jh=!1;function Qh(){jh=!0}function Yh(e){var r,n;if(!jh)return;let t=["trackEvent",e.category,e.action,e.name,e.value];qt("testing")?(r=window.paqTest)==null||r.push(t):(window._paq=window._paq||[],(n=window._paq)==null||n.push(t))}function op(e){let r=/^\/([^\/?#]*)\/?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/.exec(e);return r==null?{page:void 0,subpage:void 0,params:void 0,hash:void 0}:{page:r[1],subpage:r[2],params:r[3],hash:r[4]}}var ap=[{page:"testing",title:"Desmos | Testing"}],yl=class{constructor(t){this.dispatch=t,window.onpopstate=()=>{this.dispatch({type:"navigate",path:this.getCurrentURL()})},this.navigateToView(this.getCurrentURL())}getViewFromPage(t){for(let r=0;r<ap.length;r++)if(ap[r].page===t)return ap[r]}getCurrentURL(){return window.location.pathname+window.location.search}navigateToView(t){let r=op(t),n=r.page;if(n===void 0){this.currentPage=void 0,this.currentSubpage=void 0,this.currentParams=void 0;return}this.currentPage=r.page,this.currentSubpage=r.subpage,this.currentParams=r.params;let o=this.getViewFromPage(n);if(!o)return;document.title=o.title;let a=t,i=this.getCurrentURL(),s=op(i);!r.params&&s.params&&(a+="?"+s.params),a!==this.getCurrentURL()&&window.history.pushState({},o.title,a)}};var pe={images:!1,folders:!1,notes:!1,links:!1},Se={links:!1,brailleExpressionDownload:!1},te={brailleExpressionDownload:!1,links:!1},Do={...pe,defaultLogModeRegressions:!0},Lo={...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,decimalToFraction:!1,distributions:!1,actions:!1,tone:!1,recursion:!1},Qe={...Se,qwertyKeyboard:!1,degreeMode:!0,decimalToFraction:!1,functionDefinition:!1},lr={...Se,qwertyKeyboard:!1,degreeMode:!0,functionDefinition:!1},Xh={...pe,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,plotImplicits:!1,plotInequalities:!1,sliders:!1,forceLogModeRegressions:!0},Zh={...Se,degreeMode:!0,functionDefinition:!1,allowComplex:!1};var ip={uid:"default",name:"Practice",graphingConfig:{...pe,restrictedFunctions:!0,degreeMode:!0,tone:!1},scientificConfig:lr,fourFunctionConfig:{...te,additionalFunctions:["sqrt","fraction"]},urlCode:"default",suppressWhenCombiningWithinEntity:!0},sp=[ip,{name:"ACT",urlCode:"digital-act",uid:"act",pdfUrl:"static-assets/assessment-pdfs/ACT_Desmos_Calculator.pdf",stateTestName:"ACT and PreACT",graphingConfig:{...pe,capExpressionSize:!0,clearIntoDegreeMode:!0,degreeMode:!0,restrictedFunctions:!0,forceEnableGeometryFunctions:!0}},{svgid:"01",uid:"us-al",name:"Alabama",urlCode:"alabama",pdfUrl:"static-assets/state-pdfs/AL_Desmos_Calculators.pdf",stateTestName:"ACAP Summative",stateTestWebsite:"https://www.alabamaachieves.org/assessment/acap/",scientificConfig:{...Se,degreeMode:!0,allowComplex:!1,functionDefinition:!1},fourFunctionConfig:{...te,decimalToFraction:!0,additionalFunctions:["sqrt","fraction"]}},{svgid:"02",uid:"us-ak",name:"Alaska",urlCode:"alaska",pdfUrl:"static-assets/state-pdfs/AK_Desmos_Calculators.pdf",stateTestName:"AK STAR",stateTestWebsite:"https://education.alaska.gov/assessments/akstar",graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,distributions:!1,allowComplex:!1,regressionTemplates:!1,recursion:!1},scientificConfig:{...Qe,allowComplex:!1},fourFunctionConfig:te},{svgid:"04",name:"Arizona",urlCode:"arizona",pdfUrl:"static-assets/state-pdfs/AZ_Desmos_Calculators.pdf",uid:"us-az",stateTestName:"AASA, AzSCI",stateTestWebsite:"https://www.azed.gov/assessment/",fourFunctionConfig:te,scientificConfig:Qe},{svgid:"05",name:"Arkansas",urlCode:"arkansas",pdfUrl:"static-assets/state-pdfs/AR_Desmos_Calculators.pdf",uid:"us-ar",stateTestName:"ATLAS 3-10",stateTestWebsite:"https://dese.ade.arkansas.gov/Offices/public-school-accountability/assessment/3-hs-atlas-content-assessments",graphingConfig:{...pe,actions:!1,degreeMode:!0,distributions:!1,qwertyKeyboard:!1,restrictedFunctions:!0,plotSingleVariableImplicitEquations:!1,pasteTableData:!1,brailleControls:!1,zoomFit:!1},scientificConfig:{...Se,qwertyKeyboard:!1,functionDefinition:!1}},{svgid:"06",name:"California",pdfUrl:"static-assets/state-pdfs/CA_Desmos_Calculators.pdf",urlCode:"california",uid:"us-ca",stateTestName:"CAASPP",stateTestWebsite:"https://www.caaspp-elpac.org/",fourFunctionConfig:{...te,additionalFunctions:["fraction"]},scientificConfig:Qe,graphingConfig:Lo},{name:"College Board",urlCode:"collegeboard",uid:"collegeboard",pdfUrl:"static-assets/assessment-pdfs/CollegeBoard_Desmos_Calculator.pdf",stateTestName:"SAT Suite and AP Exams",fourFunctionConfig:te,scientificConfig:Se,graphingConfig:Do},{svgid:"08",name:"Colorado",urlCode:"colorado",pdfUrl:"static-assets/state-pdfs/CO_Desmos_Calculators.pdf",uid:"us-co",stateTestName:"Colorado State SAT Assessment",graphingConfig:Do,entityNameOverride:{graphing:"Colorado SAT"},stateTestWebsite:"https://www.cde.state.co.us/assessment/sat-psat"},{svgid:"09",name:"Connecticut",urlCode:"connecticut",pdfUrl:"static-assets/state-pdfs/CT_Desmos_Calculators.pdf",uid:"us-ct",stateTestName:"Connecticut Assessments",stateTestWebsite:"https://portal.ct.gov/SDE/Student-Assessment/Main-Assessment/Student-Assessment#:~:text=The%20Connecticut%20Summative%20Assessment%20system,for%20students%20in%20Grade%2011",fourFunctionConfig:{...te,additionalFunctions:["fraction"]},scientificConfig:Qe,graphingConfig:{...Do,defaultLogModeRegressions:!1,recursion:!1,zoomFit:!1,degreeMode:!0,clearIntoDegreeMode:!0,qwertyKeyboard:!1,actions:!1,plotSingleVariableImplicitEquations:!1,restrictedFunctions:!0,distributions:!1,tone:!1}},{svgid:"10",name:"Delaware",urlCode:"delaware",pdfUrl:"static-assets/state-pdfs/DE_Desmos_Calculators.pdf",uid:"us-de",stateTestName:"DeSSA",stateTestWebsite:"https://education.delaware.gov/educators/academic-support/standards-and-assessments/mathematics",fourFunctionConfig:{...te,additionalFunctions:["fraction"]},scientificConfig:Qe},{svgid:"12",name:"Florida",urlCode:"florida",pdfUrl:"static-assets/state-pdfs/FL_Desmos_Calculators.pdf",uid:"us-fl",stateTestName:"FAST",stateTestWebsite:"https://flfast.org/",scientificConfig:{...Se,singleExpression:!0,restrictedEditing:!0,degreeMode:!0,decimalToFraction:!1},fourFunctionConfig:{...te,decimalToFraction:!1,settingsMenu:!1,singleExpression:!0,restrictedEditing:!0,additionalFunctions:["sqrt","percent"],brailleControls:!1}},{svgid:"13",name:"Georgia",urlCode:"georgia",pdfUrl:"static-assets/state-pdfs/GA_Desmos_Calculators.pdf",uid:"us-ga",stateTestName:"Georgia Milestones Assessment System",stateTestWebsite:"https://www.gadoe.org/Curriculum-Instruction-and-Assessment/Assessment/Pages/Georgia-Milestones-Assessment-System.aspx",fourFunctionConfig:te,scientificConfig:{...lr,allowComplex:!1},graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,distributions:!1,substitutions:!1,sliders:!1,logScales:!1,allowComplex:!1,recursion:!1}},{svgid:"15",name:"Hawaii",urlCode:"hawaii",pdfUrl:"static-assets/state-pdfs/HI_Desmos_Calculators.pdf",uid:"us-hi",stateTestName:"HSAP",stateTestWebsite:"https://alohahsap.org/",fourFunctionConfig:{...te,additionalFunctions:["fraction"]},scientificConfig:Qe,graphingConfig:Lo},{svgid:"16",name:"Idaho",urlCode:"idaho",pdfUrl:"static-assets/state-pdfs/ID_Desmos_Calculators.pdf",uid:"us-id",stateTestName:"ISAT",stateTestWebsite:"https://www.sde.idaho.gov/about-us/departments/assessment-accountability/idaho-standards-achievement-test-isat/",fourFunctionConfig:{...te,additionalFunctions:["fraction"]},scientificConfig:Qe,graphingConfig:Lo},{svgid:"17",name:"Illinois",urlCode:"illinois",pdfUrl:"static-assets/state-pdfs/IL_Desmos_Calculators.pdf",entityNameOverride:{graphing:"Illinois ACT"},uid:"us-il",stateTestName:"ACT Illinois State Assessment",stateTestWebsite:"https://www.isbe.net/Pages/HS-Assessment.aspx",graphingConfig:{...pe,capExpressionSize:!0,clearIntoDegreeMode:!0,degreeMode:!0,restrictedFunctions:!0,forceEnableGeometryFunctions:!0}},{svgid:"18",name:"Indiana",urlCode:"indiana",pdfUrl:"static-assets/state-pdfs/IN_Desmos_Calculators.pdf",uid:"us-in",stateTestName:"Indiana Assessments",stateTestWebsite:"https://www.in.gov/doe/students/assessment/",fourFunctionConfig:{...te,additionalFunctions:["fraction"],brailleControls:!1},scientificConfig:{...Se,decimalToFraction:!1,qwertyKeyboard:!1,functionDefinition:!1,degreeMode:!0,brailleControls:!1}},{name:"International Baccalaureate",pdfUrl:"static-assets/assessment-pdfs/IBMYP_Desmos_Calculator.pdf",urlCode:"ibmyp",uid:"ib",assessmentHash:"ib",stateTestName:"IB MYP",scientificConfig:{...Se,functionDefinition:!1,qwertyKeyboard:!1,decimalToFraction:!1,degreeMode:!0,typingAsteriskWritesTimesSymbol:!0,replaceCommaWith10Exp:!0,replaceRoundWithReciprocal:!0}},{svgid:"19",name:"Iowa",urlCode:"iowa",pdfUrl:"static-assets/state-pdfs/IA_Desmos_Calculators.pdf",uid:"us-ia",stateTestName:"ISASP",stateTestWebsite:"https://ia.mypearsonsupport.com/",fourFunctionConfig:{...te,additionalFunctions:["sqrt","percent"]},scientificConfig:{...Se,functionDefinition:!1,degreeMode:!0,decimalToFraction:!1}},{svgid:"20",name:"Kansas",urlCode:"kansas",pdfUrl:"static-assets/state-pdfs/KS_Desmos_Calculators.pdf",uid:"us-ks",stateTestName:"KAP",stateTestWebsite:"https://ksassessments.org/",fourFunctionConfig:{...te,disableParentheses:!0,additionalFunctions:["sqrt","percent"],decimalToFraction:!1},scientificConfig:{...Se,degreeMode:!0,decimalToFraction:!1},graphingConfig:{...pe,pointsOfInterest:!1,decimalToFraction:!1,tone:!1,degreeMode:!0,restrictedFunctions:!0}},{svgid:"21",name:"Kentucky",urlCode:"kentucky",pdfUrl:"static-assets/state-pdfs/KY_Desmos_Calculators.pdf",uid:"us-ky",stateTestName:"Kentucky Assessments",stateTestWebsite:"https://education.ky.gov/AA/Assessments/Pages/default.aspx",fourFunctionConfig:te,scientificConfig:Qe,graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,forceEnableGeometryFunctions:!0}},{svgid:"22",name:"Louisiana",urlCode:"louisiana",pdfUrl:"static-assets/state-pdfs/LA_Desmos_Calculators.pdf",uid:"us-la",stateTestName:"LEAP",stateTestWebsite:"https://doe.louisiana.gov/school-system-leaders/measuring-results",graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,distributions:!1,substitutions:!1,sliders:!1,actions:!1,logScales:!1,tone:!1,allowComplex:!1,recursion:!1}},{svgid:"23",name:"Maine",urlCode:"maine",pdfUrl:"static-assets/state-pdfs/ME_Desmos_Calculators.pdf",uid:"us-me",stateTestName:"Maine Through Year Assessment",stateTestWebsite:"https://www.maine.gov/doe/Testing_Accountability/MECAS/NWEA",graphingConfig:{tone:!1,logScales:!1,links:!1},scientificConfig:Qe,fourFunctionConfig:te},{svgid:"24",name:"Maryland",urlCode:"maryland",pdfUrl:"static-assets/state-pdfs/MD_Desmos_Calculators.pdf",uid:"us-md",stateTestName:"MCAP",stateTestWebsite:"https://marylandpublicschools.org/about/Pages/DAAIT/Assessment/index.aspx",fourFunctionConfig:{...te,additionalFunctions:["sqrt","percent"]},scientificConfig:{...Se,decimalToFraction:!1,functionDefinition:!1},graphingConfig:{...pe,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,forceEnableGeometryFunctions:!0}},{svgid:"25",name:"Massachusetts",urlCode:"massachusetts",pdfUrl:"static-assets/state-pdfs/MA_Desmos_Calculators.pdf",uid:"us-ma",stateTestName:"MCAS",stateTestWebsite:"https://www.doe.mass.edu/mcas/",scientificConfig:Se,graphingConfig:{...pe,notes:!0,folders:!0,degreeMode:!0,forceEnableGeometryFunctions:!0}},{svgid:"26",name:"Michigan",urlCode:"michigan",pdfUrl:"static-assets/state-pdfs/MI_Desmos_Calculators.pdf",uid:"us-mi",stateTestName:"M-STEP",stateTestWebsite:"https://www.michigan.gov/mde/0,4615,7-140-22709_70117---,00.html",fourFunctionConfig:{...te,brailleControls:!1,additionalFunctions:["sqrt","fraction"]},scientificConfig:{...Se,degreeMode:!0,decimalToFraction:!1,brailleControls:!1,functionDefinition:!1}},{svgid:"27",name:"Minnesota",urlCode:"minnesota",pdfUrl:"static-assets/state-pdfs/MN_Desmos_Calculators.pdf",uid:"us-mn",stateTestName:"Minnesota Statewide Assessments",stateTestWebsite:"https://mn.mypearsonsupport.com/",graphingConfig:{...pe,restrictedFunctions:!0,degreeMode:!0,clearIntoDegreeMode:!0,forceEnableGeometryFunctions:!0,tone:!1,capExpressionSize:!0,recursion:!1},scientificConfig:{...Se,qwertyKeyboard:!1,degreeMode:!0,decimalToFraction:!1,allowComplex:!1,functionDefinition:!1},fourFunctionConfig:te},{svgid:"28",name:"Mississippi",urlCode:"mississippi",pdfUrl:"static-assets/state-pdfs/MS_Desmos_Calculators.pdf",uid:"us-ms",stateTestName:"MAAP",stateTestWebsite:"https://mdek12.org/studentassessment/maap/",graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,distributions:!1,substitutions:!1,tone:!1},scientificConfig:{...lr,allowComplex:!1},fourFunctionConfig:{...te,additionalFunctions:["sqrt","percent"]}},{svgid:"29",name:"Missouri",urlCode:"missouri",pdfUrl:"static-assets/state-pdfs/MO_Desmos_Calculators.pdf",uid:"us-mo",stateTestName:"MAP and EOC",stateTestWebsite:"https://dese.mo.gov/college-career-readiness/assessment",graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,tone:!1,logScales:!1},scientificConfig:{...Se,degreeMode:!0,functionDefinition:!1},fourFunctionConfig:{...te,additionalFunctions:["sqrt","fraction"]}},{svgid:"30",name:"Montana",urlCode:"montana",pdfUrl:"static-assets/state-pdfs/MT_Desmos_Calculators.pdf",uid:"us-mt",stateTestName:"MontCAS",stateTestWebsite:"https://opi.mt.gov/Leadership/Assessment-Accountability/MontCAS/",fourFunctionConfig:{...te,additionalFunctions:["sqrt","fraction"]},scientificConfig:Qe,graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,decimalToFraction:!1,distributions:!1,zoomFit:!0,actions:!1,tone:!1,recursion:!1}},{svgid:"31",name:"Nebraska",urlCode:"nebraska",pdfUrl:"static-assets/state-pdfs/NE_Desmos_Calculators.pdf",uid:"us-ne",stateTestName:"NSCAS",stateTestWebsite:"https://connection.nwea.org/s/nebraska?language=en_US",fourFunctionConfig:te,scientificConfig:{...Qe,allowComplex:!1}},{svgid:"32",name:"Nevada",urlCode:"nevada",pdfUrl:"static-assets/state-pdfs/NV_Desmos_Calculators.pdf",uid:"us-nv",stateTestName:"Nevada State Assessments",stateTestWebsite:"https://doe.nv.gov/offices/office-of-assessment-data-and-accountability-management-adam/office-of-assessments",fourFunctionConfig:{...te,additionalFunctions:["sqrt","fraction"]},scientificConfig:Qe},{svgid:"33",name:"New Hampshire",urlCode:"newhampshire",pdfUrl:"static-assets/state-pdfs/NH_Desmos_Calculators.pdf",uid:"us-nh",stateTestName:"New Hampshire Statewide Assessment System",stateTestWebsite:"https://www.education.nh.gov/who-we-are/division-of-education-and-analytic-resources/bureau-assessment-and-accountability/office-assessment/new-hampshire-statewide-assessment",fourFunctionConfig:{...te,additionalFunctions:["fraction"]},scientificConfig:lr},{uid:"us-nj",svgid:"34",name:"New Jersey",urlCode:"newjersey",pdfUrl:"static-assets/state-pdfs/NJ_Desmos_Calculators.pdf",stateTestName:"NJSLA/NJGPA",stateTestWebsite:"https://www.nj.gov/education/assessment/resources/",fourFunctionConfig:{...te,settingsMenu:!1},scientificConfig:{...Se,singleExpression:!0,restrictedEditing:!0,degreeMode:!0,decimalToFraction:!1},graphingConfig:{...pe,zoomFit:!1,qwertyKeyboard:!1,degreeMode:!0,clearIntoDegreeMode:!0,actions:!1,restrictedFunctions:!0,distributions:!1,plotSingleVariableImplicitEquations:!1}},{svgid:"35",name:"New Mexico",urlCode:"newmexico",pdfUrl:"static-assets/state-pdfs/NM_Desmos_Calculators.pdf",uid:"us-nm",stateTestName:"New Mexico State SAT Assessment",graphingConfig:Do,entityNameOverride:{graphing:"New Mexico SAT"},stateTestWebsite:"https://web.ped.nm.gov/bureaus/assessment/sat-school-day-resources/"},{svgid:"36",name:"New York",urlCode:"newyork",pdfUrl:"static-assets/state-pdfs/NY_Desmos_Calculators.pdf",uid:"us-ny",stateTestName:"New York Regents",stateTestWebsite:"https://www.nysedregents.org/",graphingConfig:{...pe,restrictedFunctions:!0,degreeMode:!0,tone:!1,clearIntoDegreeMode:!0,defaultLogModeRegressions:!0}},{svgid:"37",name:"North Carolina",urlCode:"northcarolina",pdfUrl:"static-assets/state-pdfs/NC_Desmos_Calculators.pdf",uid:"us-nc",stateTestName:"NCTest",stateTestWebsite:"https://www.dpi.nc.gov/districts-schools/testing-and-school-accountability/state-tests",scientificConfig:lr,graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,forceLogModeRegressions:!0,actions:!1,tone:!1,logScales:!1},fourFunctionConfig:{...te,decimalToFraction:!0,additionalFunctions:["sqrt","fraction"]}},{svgid:"38",name:"North Dakota",urlCode:"northdakota",pdfUrl:"static-assets/state-pdfs/ND_Desmos_Calculators.pdf",uid:"us-nd",stateTestName:"ND A+",stateTestWebsite:"https://ndaplus.mypearsonsupport.com/",fourFunctionConfig:te,scientificConfig:lr,graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,distributions:!1,zoomFit:!1}},{name:"NWEA",pdfUrl:"static-assets/assessment-pdfs/MAPGrowth_Desmos_Calculator.pdf",uid:"nwea-map",assessmentHash:"nwea",stateTestName:"MAP Growth",urlCode:"map",scientificConfig:{...Se,qwertyKeyboard:!1,degreeMode:!0,decimalToFraction:!1},fourFunctionConfig:te},{svgid:"39",name:"Ohio",urlCode:"ohio",pdfUrl:"static-assets/state-pdfs/OH_Desmos_Calculators.pdf",uid:"us-oh",stateTestName:"OST",stateTestWebsite:"https://oh.portal.cambiumast.com/",scientificConfig:lr,graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,distributions:!1,zoomFit:!1}},{svgid:"40",name:"Oklahoma",urlCode:"oklahoma",pdfUrl:"static-assets/state-pdfs/OK_Desmos_Calculators.pdf",uid:"us-ok",stateTestName:"OSTP and CCRA",stateTestWebsite:"https://oklahoma.gov/education/services/assessments.html",fourFunctionConfig:te,scientificConfig:{...Se,degreeMode:!0},graphingConfig:{...pe,notes:!0,folders:!0}},{svgid:"41",name:"Oregon",urlCode:"oregon",pdfUrl:"static-assets/state-pdfs/OR_Desmos_Calculators.pdf",stateTestName:"OSAS",uid:"us-or",stateTestWebsite:"https://osasportal.org",fourFunctionConfig:{...te,additionalFunctions:["fraction"]},scientificConfig:Qe,graphingConfig:Lo},{svgid:"42",name:"Pennsylvania",urlCode:"pennsylvania",pdfUrl:"static-assets/state-pdfs/PA_Desmos_Calculators.pdf",stateTestName:"PSSA, Keystone, CDT, and Firefly",uid:"us-pa",stateTestWebsite:"https://www.education.pa.gov/K-12/Assessment%20and%20Accountability/Pages/default.aspx",fourFunctionConfig:te,scientificConfig:{...lr,allowComplex:!1},graphingConfig:{...pe,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,plotImplicits:!1,sliders:!1,actions:!1,substitutions:!1,allowComplex:!1,regressionTemplates:!1,recursion:!1,distributions:!1,tone:!1}},{svgid:"44",name:"Rhode Island",urlCode:"rhodeisland",pdfUrl:"static-assets/state-pdfs/RI_Desmos_Calculators.pdf",uid:"us-ri",stateTestName:"RICAS and NGSA",stateTestWebsite:"https://www.ride.ri.gov/InstructionAssessment/Assessment.aspx",fourFunctionConfig:te,graphingConfig:{...Do,notes:!0,folders:!0}},{svgid:"45",name:"South Carolina",urlCode:"southcarolina",uid:"us-sc",stateTestName:"SC Ready, EOCEP",pdfUrl:"static-assets/state-pdfs/SC_Desmos_Calculators.pdf",fourFunctionConfig:{...te,decimalToFraction:!0},scientificConfig:Se,graphingConfig:{...pe,sliders:!1,actions:!1,substitutions:!1,forceLogModeRegressions:!0,tone:!1,logScales:!1,recursion:!1,regressionTemplates:!1,distributions:!1},assessmentInfo:[{name:"SC Ready"},{name:"EOCEP"},{name:"Alternate Assessment",onlyShowWhenCombiningWithinEntity:!0}]},{name:"South Carolina Alternate",urlCode:"southcarolina-alternate",suppressWhenCombiningWithinEntity:!0,uid:"us-sc-alt",pdfUrl:"static-assets/state-pdfs/SC_Alternate_Desmos_Calculators.pdf",fourFunctionConfig:te,scientificConfig:Qe},{svgid:"46",name:"South Dakota",urlCode:"southdakota",pdfUrl:"static-assets/state-pdfs/SD_Desmos_Calculators.pdf",uid:"us-sd",stateTestName:"South Dakota Assessments",stateTestWebsite:"https://doe.sd.gov/assessment/",fourFunctionConfig:{...te,additionalFunctions:["fraction"]},scientificConfig:Qe},{name:"TABE",pdfUrl:"static-assets/assessment-pdfs/TABE_Desmos_Calculator.pdf",uid:"tabe",assessmentHash:"tabe",stateTestName:"TABE",urlCode:"tabe",scientificConfig:{...Se,qwertyKeyboard:!1,degreeMode:!0,decimalToFraction:!1},fourFunctionConfig:te},{svgid:"47",name:"Tennessee",urlCode:"tennessee",pdfUrl:"static-assets/state-pdfs/TN_Desmos_Calculators.pdf",uid:"us-tn",stateTestName:"TCAP",stateTestWebsite:"https://www.livebinders.com/b/2426642",scientificConfig:{...Se,degreeMode:!0,functionDefinition:!1},graphingConfig:{...pe,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,forceLogModeRegressions:!0,logScales:!1},matrixConfig:{}},{svgid:"48",name:"Texas",urlCode:"texas",pdfUrl:"static-assets/state-pdfs/TX_Desmos_Calculators.pdf",uid:"us-tx",stateTestName:"STAAR",graphingConfig:Xh,scientificConfig:Zh,stateTestWebsite:"https://tea.texas.gov/data-reports/staar/staar-resources"},{svgid:"49",name:"Utah",urlCode:"utah",pdfUrl:"static-assets/state-pdfs/UT_Desmos_Calculators.pdf",uid:"us-ut",assessmentInfo:[{name:"Aspire Plus",url:"http://utah.mypearsonsupport.com"},{name:"Core Standards Benchmarks",url:"https://www.uen.org/core/math/"}],graphingConfig:{...pe,restrictedFunctions:!0,degreeMode:!0,forceEnableGeometryFunctions:!0},scientificConfig:{...Se,functionDefinition:!1,degreeMode:!0,decimalToFraction:!1}},{svgid:"50",name:"Vermont",urlCode:"vermont",pdfUrl:"static-assets/state-pdfs/VT_Desmos_Calculators.pdf",uid:"us-vt",stateTestName:"CAS",stateTestWebsite:"https://education.vermont.gov/student-learning/assessments",fourFunctionConfig:{...te,additionalFunctions:["sqrt","fraction"]},scientificConfig:{...Se,qwertyKeyboard:!1,degreeMode:!0,decimalToFraction:!1,functionDefinition:!1,allowComplex:!1},graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,decimalToFraction:!1,distributions:!1,zoomFit:!1,actions:!1}},{svgid:"51",name:"Virginia",urlCode:"virginia",pdfUrl:"static-assets/state-pdfs/VA_Desmos_Calculators.pdf",uid:"us-va",stateTestName:"Standards of Learning",stateTestWebsite:"https://www.doe.virginia.gov/teaching-learning-assessment/student-assessment/virginia-sol-assessment-program",graphingConfig:{...pe,restrictedFunctions:!0,degreeMode:!0,clearIntoDegreeMode:!0,forceEnableGeometryFunctions:!0,tone:!1,capExpressionSize:!0,recursion:!1,defaultLogModeRegressions:!0},scientificConfig:{...Se,functionDefinition:!1,decimalToFraction:!1,capExpressionSize:!0,allowComplex:!1},fourFunctionConfig:{...te,capExpressionSize:!0}},{svgid:"53",name:"Washington",urlCode:"washington",pdfUrl:"static-assets/state-pdfs/WA_Desmos_Calculators.pdf",uid:"us-wa",stateTestName:"WCAP Test",stateTestWebsite:"https://wa.portal.cambiumast.com/",fourFunctionConfig:{...te,additionalFunctions:["fraction"]},scientificConfig:Qe,graphingConfig:Lo},{svgid:"54",name:"West Virginia",urlCode:"westvirginia",pdfUrl:"static-assets/state-pdfs/WV_Desmos_Calculators.pdf",uid:"us-wv",stateTestName:"WVGSA",stateTestWebsite:"https://wvde.us/assessment/",fourFunctionConfig:{...te,additionalFunctions:["sqrt","fraction"]},scientificConfig:lr},{svgid:"55",name:"Wisconsin",urlCode:"wisconsin",pdfUrl:"static-assets/state-pdfs/WI_Desmos_Calculators.pdf",uid:"us-wi",stateTestName:"Wisconsin Forward Exam",stateTestWebsite:"https://dpi.wi.gov/assessment/forward",fourFunctionConfig:te,scientificConfig:{...Se,degreeMode:!0}},{svgid:"56",name:"Wyoming",urlCode:"wyoming",pdfUrl:"static-assets/state-pdfs/WY_Desmos_Calculators.pdf",uid:"us-wy",stateTestName:"WY-TOPP",stateTestWebsite:"http://wy.mypearsonsupport.com",fourFunctionConfig:{...te,additionalFunctions:["fraction"]},scientificConfig:lr,graphingConfig:{...pe,zoomFit:!1,degreeMode:!0,restrictedFunctions:!0,distributions:!1,qwertyKeyboard:!1}},{name:"Guam",urlCode:"guam",pdfUrl:"static-assets/state-pdfs/GU_Desmos_Calculators.pdf",svgid:"66",uid:"us-gu",stateTestName:"Smarter Balanced Summative",fourFunctionConfig:{...te,additionalFunctions:["sqrt","fraction"]},scientificConfig:Qe,graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,decimalToFraction:!1,distributions:!1,zoomFit:!0,actions:!1,tone:!1}},{name:"Quebec",pdfUrl:"static-assets/assessment-pdfs/Quebec_Desmos_Calculator.pdf",urlCode:"quebec",uid:"ca-qc",assessmentHash:"quebec",stateTestName:"Uniform Examinations",graphingConfig:{...pe,actions:!1,plotImplicits:!1,restrictedFunctions:!0,sliders:!1,allowComplex:!1,recursion:!1,distributions:!1}},{svgid:"78",name:"U.S. Virgin Islands",urlCode:"usvirginislands",pdfUrl:"static-assets/state-pdfs/VI_Desmos_Calculators.pdf",uid:"us-vi",stateTestName:"Smarter Balanced Summative",stateTestWebsite:"https://vide.portal.cambiumast.com/",fourFunctionConfig:{...te,additionalFunctions:["fraction"]},scientificConfig:Qe,graphingConfig:{...pe,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,decimalToFraction:!1,distributions:!1,zoomFit:!0,actions:!1,recursion:!1,tone:!1}}];function Jh(e){let t=sp.filter(r=>r.urlCode===e);if(t.length>0)return t[0]}var Ga=class{raw(t,r){return this.i18n?this.i18n.raw(t,r):xi(t,r)}logEvent(t){Yh(t)}updateViews(){var t;(t=this.onViewUpdate)==null||t.call(this)}getLanguage(){return this.i18n?this.i18n.getLanguage():this.language}handleAction(t){switch(t.type){case"navigate":this.routerController.navigateToView(t.path);break}}constructor(t){Qh(),this.dispatcher=new Ro,t?(this.i18n=t,this.s=this.i18n.s):this.s=Mc(()=>this.language),this.dispatch=r=>{id("dispatch",{type:r.type}),this.dispatcher.dispatch(r)},this.routerController=new yl(this.dispatch),this.dispatcher.register(r=>{this.handleAction(r),this.updateViews()}),this.language=Sc()}getPage(){return this.routerController.currentPage}getSubpage(){return this.routerController.currentSubpage}getParams(){return this.routerController.currentParams}getCurrentStateCode(){let t=this.getSubpage();if(t!==void 0)return t.split("/")[0]}getCurrentState(){let t=this.getCurrentStateCode();if(t)return Jh(t)}getCurrentStateOrDefault(){return this.getCurrentState()||ip}};var Oo=class extends ze{init(){this.controller=this.props.controller(),this.dispatch=this.controller.dispatch}};var Je={},et=zd(),ik={sciKeypad:1,"4fnKeypad":1,singleExpression:1,restrictedEditing:1,degreeMode:1,decimalToFraction:1};typeof Desmos!="undefined"&&Desmos.config&&qr(ik).forEach(e=>{Desmos.config[e]&&et.set(e,"true"),Je[e]=Desmos.config[e]});var _o=e=>qt(e,et),ne=e=>{Je[e]=_o(e)},ce=e=>{Je[e]=!_o(`no${e}`)};ne("testing");ne("maintenance");ne("nativeOnscreenKeypad");ne("hidden");ne("disableMouseInteractions");ne("advancedStyling");ne("outofdom");et.has("cacheRenderedSvgs")&&(Je.cacheRenderedSvgs=!0);var sk=["lang","fontSize","gestureHandling","translucentOpacity","peelUpsample","debugPeelLayers","debug3dRender","recursionDepthLimit"];sk.forEach(e=>{et.has(e)&&(Je[e]=et.get(e))});et.has("backgroundColor")&&(Je.backgroundColor="#"+et.get("backgroundColor"));et.has("textColor")&&(Je.textColor="#"+et.get("textColor"));et.has("accentColor")&&(Je.accentColor="#"+et.get("accentColor"));ne("lockViewport");ne("authorFeatures");et.has("degreeMode")&&ne("degreeMode");et.has("nodegreeMode")&&ce("degreeMode");ne("wireframe");ne("raycastHeatmap");ne("raycastDisableIntervals");ne("editOnWeb");ne("crossOriginSaveTest");ne("showResetButtonOnGraphpaper");ne("debugProgressUpdates");ne("debugCompiler");ne("transparentBackground");ne("forceLogModeRegressions");ne("defaultLogModeRegressions");ne("reflectionArc");ne("logInternalErrors");ne("showIDs");ce("links");ce("trace");ce("zoomFit");ne("expressionsCollapsed");ne("keypadActivated");ne("invertedColors");ce("invertedColorsControl");ne("projectorMode");ce("images");ce("folders");ce("settingsMenu");ce("expressionsTopbar");ce("zoomButtons");ce("keypad");ce("graphpaper");ce("expressions");ce("branding");ce("pointsOfInterest");ce("plotSingleVariableImplicitEquations");ce("plotImplicits");ce("plotInequalities");ce("notes");ce("sliders");ne("pauseWhenOffscreen");ce("brailleControls");ne("audioTraceKeypad");ce("audio");ce("tone");ne("showEvaluationCopyButtons");ne("reportPositionNone");ce("qwertyKeyboard");ne("restrictedFunctions");ne("forceEnableGeometryFunctions");ce("functionDefinition");ne("singleExpression");ne("restrictedEditing");ne("replaceCommaWith10Exp");ne("replaceRoundWithReciprocal");_o("typingAsteriskWritesTimesSymbol")&&(Je.typingAsteriskWritesTimesSymbol=!0);ce("substitutions");ce("intervalComprehensions");ce("recursion");ce("calculus");ce("logScales");ce("regressionTemplates");ce("distributions");Je["4fnKeypad"]?ne("decimalToFraction"):ce("decimalToFraction");ne("translucentSurfaces");ne("3d");ne("disableWorkerOnZoom");ne("showPerformanceMeter");ce("adaptivePeeling");ne("complex");ce("allowComplex");ce("customRegressions");var ey;et.has("additionalFunctions")&&(Je.additionalFunctions=(ey=et.get("additionalFunctions"))==null?void 0:ey.split(","));et.has("disableParentheses")&&(Je.disableParentheses=!0);et.has("limitNumberScale")&&(Je.limitNumberScale=!0);_o("actions")?Je.actions=!0:_o("noactions")?Je.actions=!1:_o("clickableObjects")&&(Je.actions=!0);function ty(e){return Je[e]}var bl=gl;var ck=50,xl=class{constructor(t,r){this.throttledFlushBatchedLogs=qm(async()=>{if(this.requestInFlight||this.batchedLogs.length==0)return;let t=this.batchedLogs.splice(0,ck);this.requestInFlight=!0;try{await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({events:t})})}catch(r){}this.requestInFlight=!1,this.throttledFlushBatchedLogs()},1e3,{leading:!1});this.batchedLogs=[],this.requestInFlight=!1,this.getSessionData=r,this.apiUrl=t}log(t){this.batchedLogs.push({...this.getSessionData(),...t}),this.throttledFlushBatchedLogs()}};var uk={event_type:"eventType",source:"browser",app:"knox",user_agent:navigator.userAgent},pk=new xl("/usage-stats",()=>uk);function ry(e,t,r){pk.log({event_type:e,url:document.location.href,payload:JSON.stringify(r),page_load_id:t})}var dk="usage-ping",ny=15*1e3,mk=60*1e3,fk=60*1e3,gk={scientific:.03,matrix:.8,graphing:.02,"geometry-calculator":.5,fourfunction:.8,"graphing-3d":.4,"assessment-scientific":.5,"assessment-graphing":.3,"assessment-fourfunction":.7,practice:.7,notebook:1,"notebook-view":1},$a=class{constructor(t){this.samplingInterval={current:ny,lessFrequent:mk,moreFrequent:ny,moreFrequentPeriod:3*60*1e3};this.sampleStartTime=0;this.minutesOfMathData={lastCheckedMinutesOfMath:Date.now(),lastChangeEventTime:void 0,minutesOfMath:0};this.minutesOfMathCheckInterval=fk;this.handleFocus=()=>this.onFocus();this.handleBlur=()=>this.onBlur();this.handleVisibilityChange=()=>this.onVisibilityChange();var r;this.samplingProbability=(r=window.sampleProbabilityOverride)!=null?r:gk[t],this.shouldSample=Math.random()<this.samplingProbability,this.pageLoadId=bl(),this.pageLoadTime=Date.now(),this.focused=document.hasFocus(),this.focused&&(this.focusIntervalStart=Date.now()),this.totalTimeFocused=0,window.addEventListener("focus",this.handleFocus),window.addEventListener("blur",this.handleBlur),document.visibilityState==="visible"&&(this.visibleIntervalStart=Date.now()),this.totalTimeVisible=0,document.addEventListener("visibilitychange",this.handleVisibilityChange),ty("testing")&&(window.usageMonitor=this)}onFocus(){this.focused=!0,this.focusIntervalStart=Date.now()}onBlur(){this.focused=!1,this.addTimeFocused(),this.focusIntervalStart=void 0}onVisibilityChange(){document.visibilityState==="hidden"?(this.addTimeVisible(),this.visibleIntervalStart=void 0):this.visibleIntervalStart=Date.now()}destroy(){this.stop(),window.removeEventListener("focus",this.handleFocus),window.removeEventListener("blur",this.handleBlur),document.removeEventListener("visibilitychange",this.handleVisibilityChange),delete window.usageMonitor}handleUserChangeEvent(){this.minutesOfMathData.lastChangeEventTime=Date.now(),this.getTotalMinutesOfMath()}getUsageData(){return{...{timeSincePageload:this.getTimeSincePageload(),totalTimeFocused:this.getTotalTimeFocused(),totalTimeVisible:this.getTotalTimeVisible(),...this.getTotalMinutesOfMath(),samplingInterval:this.samplingInterval.current,samplingProbability:this.samplingProbability},version:3}}addTimeFocused(){if(this.focusIntervalStart===void 0)return;let t=Date.now(),r=t-this.focusIntervalStart;this.totalTimeFocused+=r,this.focusIntervalStart=t}addTimeVisible(){if(this.visibleIntervalStart===void 0)return;let t=Date.now(),r=t-this.visibleIntervalStart;this.totalTimeVisible+=r,this.visibleIntervalStart=t}getTotalTimeFocused(){return this.focused?(this.addTimeFocused(),this.totalTimeFocused):this.totalTimeFocused}getTotalTimeVisible(){return document.visibilityState==="hidden"?this.totalTimeVisible:(this.addTimeVisible(),this.totalTimeVisible)}start(){if(!this.shouldSample||this.sampleTimeout)return;this.sampleStartTime=Date.now();let t=()=>{this.sampleTimeout!==void 0&&clearTimeout(this.sampleTimeout),this.shouldSample&&(Date.now()-this.sampleStartTime>this.samplingInterval.moreFrequentPeriod&&(this.samplingInterval.current=this.samplingInterval.lessFrequent),this.sampleTimeout=setTimeout(t,this.samplingInterval.current),this.callLogger())};this.sampleTimeout=setTimeout(t)}stop(){this.sampleTimeout!==void 0&&clearTimeout(this.sampleTimeout),this.sampleTimeout=void 0}callLogger(){ry(dk,this.pageLoadId,this.getUsageData())}getTimeSincePageload(){return Date.now()-this.pageLoadTime}setMinutesOfMathCheckInterval(t){this.minutesOfMathCheckInterval=t}overrideSamplingInterval(t){this.samplingInterval={...this.samplingInterval,...t}}setShouldSample(t){this.shouldSample=t,this.start()}getTotalMinutesOfMath(){var r;let t=Date.now();return(!this.minutesOfMathData.lastCheckedMinutesOfMath||t-this.minutesOfMathData.lastCheckedMinutesOfMath>=this.minutesOfMathCheckInterval)&&(((r=this.minutesOfMathData.lastChangeEventTime)!=null?r:0)>t-this.minutesOfMathCheckInterval&&(this.minutesOfMathData.minutesOfMath+=this.minutesOfMathCheckInterval*1/(60*1e3)),this.minutesOfMathData.lastCheckedMinutesOfMath=t),{minutesOfMath:this.minutesOfMathData.minutesOfMath}}};var hk=[],yk={};for(let e of sp)hk.push(e.uid),yk[e.uid]=e;function oy(e,t){switch(e){case"graphing":return t("practice-link-graphing");case"scientific":return t("practice-link-scientific");case"fourFunction":return t("practice-link-four-function")}}function ay(e,t,r){var o;if(e.uid==="ib")return"International Baccalaureate\xAE";if(e.uid==="nwea-map")return"NWEA MAP Growth";let n=e.name;return(o=e.entityNameOverride)!=null&&o[t]&&(n=e.entityNameOverride[t]),r("practice-label-test-version",{entityName:n})}var bk={fourFunction:"assessment-fourfunction",scientific:"assessment-scientific",graphing:"assessment-graphing"},Tl=class extends Oo{template(){return sc("div",{class:"spa-sample-calculator-view",children:[sc("div",{class:"dcg-sample-calculator__header",children:[He("i",{class:"dcg-icon-desmos dcg-sample-calculator__desmos-icon","aria-hidden":"true"}),He("span",{class:"dcg-sample-calculator__calculator-name",children:()=>oy(this.props.calculatorType(),this.controller.s)}),ea(()=>this.props.controller().getCurrentState(),t=>He("span",{class:"dcg-sample-calculator__state-name",children:()=>ay(t(),this.props.calculatorType(),this.controller.s)}))]}),He("div",{class:()=>({"sample-calculator":!0,"dcg-sample-calculator__graphing":this.props.calculatorType()==="graphing","dcg-sample-calculator__scientific":this.props.calculatorType()==="scientific","dcg-sample-calculator__four-function":this.props.calculatorType()==="fourFunction"}),didMount:this.bindFn(this.didMountCalculator)})]})}didMountCalculator(t){let r=this.controller.getLanguage();switch(this.usageMonitor=new $a(bk[this.props.calculatorType()]),this.usageMonitor.start(),this.props.calculatorType()){case"graphing":{let n=Desmos.GraphingCalculator(t,{...this.getGraphingConfig(),language:r});n.observeEvent("change",(o,{isUserInitiated:a})=>{a&&this.usageMonitor.handleUserChangeEvent()}),window.Calc=n;break}case"scientific":{Desmos.ScientificCalculator(t,{...this.getScientificConfig(),language:r}).observeEvent("change",()=>this.usageMonitor.handleUserChangeEvent());break}case"fourFunction":{Desmos.FourFunctionCalculator(t,{...this.getFourFunctionConfig(),language:r}).observeEvent("change",()=>this.usageMonitor.handleUserChangeEvent());break}}}getGraphingConfig(){return this.props.controller().getCurrentStateOrDefault().graphingConfig}getScientificConfig(){return this.props.controller().getCurrentStateOrDefault().scientificConfig}getFourFunctionConfig(){return this.props.controller().getCurrentStateOrDefault().fourFunctionConfig}};var lp=class extends Oo{template(){return He("div",{children:mc(()=>this.props.controller().getPage()==="testing"&&!!this.getCalculatorType(),{true:()=>ea(()=>this.getCalculatorType(),t=>He(Tl,{controller:this.props.controller,calculatorType:t})),false:()=>He("div",{children:"Unknown View!"})})})}getCalculatorType(){let t=this.props.controller().getSubpage();if(t!==void 0){if(t.match(/graphing/))return"graphing";if(t.match(/scientific/))return"scientific";if(t.match(/fourfunction/))return"fourFunction"}}},iy=new Ga,sy=document.getElementById("spa-container");if(!sy)throw'Expected to find an element with id="spa-container"';var xk=ic(lp,sy,{controller:()=>iy});iy.onViewUpdate=()=>xk.update();var dy=Sx(cy(),1);var uy="0ba2adc74c564993a6ece5acf59d0b625ab66c66";var YF=navigator.userAgent.match(/MSIE 8.0/i)!==null,XF=navigator.userAgent.match(/MSIE 9.0/i)!==null,ZF=navigator.userAgent.match(/MSIE/i)!==null||navigator.userAgent.match(/Trident/i)!==null&&navigator.userAgent.match(/rv:11/i)!==null,JF=navigator.userAgent.match(/Edge/i)!==null,e2=navigator.userAgent.match(/iPad/i)!==null,t2=navigator.userAgent.match(/Mobile|Android/i)!==null||qt("forceMobile"),wk=navigator.userAgent.match(/Android/i)!==null,vl=navigator.userAgent.match(/(iPad|iPhone|iPod)/i)!==null||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,r2=navigator.userAgent.match(/Chrome/i)!==null,n2=navigator.userAgent.match(/Firefox/i)!==null,o2=navigator.userAgent.match(/^((?!chrome|android).)*safari/i)!==null,vk=navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)!==null,a2=navigator.platform.match(/(Win32)/i)!==null,i2=navigator.userAgent.match(/Touch/i)!==null,s2=navigator.userAgent.match(/Kindle/i)!==null||navigator.userAgent.match(/Silk/i)!==null,l2=navigator.userAgent.match(/KeyWeb/i)!==null,c2=window.parent!==window;var u2=vl||wk||!!navigator.userAgent.match(/webOS/i)||!!navigator.userAgent.match(/BlackBerry/i)||!!navigator.userAgent.match(/Windows Phone/i)||qt("forceTouchDevice");var wl=(()=>{let e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||"0",10)]:null})(),p2=(()=>{let e=navigator.appVersion.match(/OS X (\d+)_(\d+)_?(\d+)?/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||"0",10)]:null})(),d2=(()=>{let e=navigator.appVersion.match(/Chrom(e|ium)\/([0-9]+)\.([0-9]+)\.?([0-9]+)?/);return e?[parseInt(e[2],10),parseInt(e[3],10),parseInt(e[4]||"0",10)]:null})(),m2=!(!("inputMode"in document.createElement("textarea"))||vl&&wl&&wl[0]<15),f2=(()=>{let e=document.createElement("canvas");return!!(e.getContext&&e.getContext("2d"))})(),g2=window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.location.search.indexOf("prefersReducedMotion")>=0,h2=(()=>{let e=document.createElement("video");return e.canPlayType&&!!e.canPlayType('video/webm; codecs="vp8, vorbis"')})(),py,y2=(py=window.matchMedia("(forced-colors: active)"))==null?void 0:py.matches;function Sk(e){return e.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&")}var Ck=["UnhandledRejection","lnrAppboy","socratic","MyAppGet","SymBrowser_","mobincube_","_avast_submit","Cannot redefine property: googletag","jcarousel","SyntaxError: Unexpected identifier 'script'","__gCrWeb.autofill.extractForms","BrowseITEXT","Can't find variable: removeAllHighlights","aAttribruteValue.parentNode.getAttribute","vid_mate_check","GetImageTagSrcFromPoint","Can't find variable: didEnterViewPort","tinyMCE is not defined","div:has(> iframe[id='198230182308109283091823098102938908128390'])","https://asset.goguardian/asset.js","https://utq.vvipquan.com/suv4/rMainB.bundle.js","https://lottingem.com/re.php","promiseReactionJobWithoutPromise","promiseReactionJob","runTaskInternal","wsimtgo.destroy","wsimtgo_device_info.destroy","global code:1:1","global code:43:3","https://www.desmos.com/__DLD__"],up=new RegExp(Ck.map(Sk).join("|"));function kk(){let e="production";if(location&&location.hostname){let r=location.hostname.split("."),n=r.slice(0,r.length-2).join(".");r.slice(r.length-2).join(".")==="desmos.com"&&(!n||n==="www"?e="production":e=n)}return e}var Ml=class{constructor(){this.numberOfSentErrors=0;this.pageLoadId=bl();this.bugsnagClient=dy.default.start({apiKey:"7f7807097671acbc4557e64bbf5eb529",maxBreadcrumbs:40,appVersion:uy,releaseStage:kk(),onError:t=>this.onError(t),enabledBreadcrumbTypes:["error","navigation","request","user"]})}onError(t){let r=wl;return r&&r[0]<=13||t.originalError instanceof Error&&t.originalError.stack&&up.test(t.originalError.stack)||t.errors.some(n=>up.test(n.errorClass)||up.test(n.errorMessage))?!1:(this.beforeSendCb&&this.beforeSendCb(t),this.attachWebGLReport&&this.attachWebGLReport(t),this.numberOfSentErrors+=1,t.addMetadata("custom",{errorNumber:this.numberOfSentErrors,pageLoadId:this.pageLoadId}),!0)}setBeforeSendCB(t){this.beforeSendCb=t}setAttachWebGLReport(t){this.attachWebGLReport=t}setUserId(t){this.bugsnagClient.setUser(t)}leaveBreadcrumb(t,r,n){if(r){r={...r};for(let o in r)try{r[o]=JSON.stringify(r[o],null,2)}catch(a){r[o]="[[could not stringify]]"}}this.bugsnagClient.leaveBreadcrumb(t,r,n)}notify(t,r){this.bugsnagClient&&this.bugsnagClient.notify(t,n=>(r&&r.metaData&&n.addMetadata("custom",r.metaData),r&&r.context&&(n.context=r.context),r&&r.severity&&(n.severity=r.severity),!0))}};var my=function(e,t){Object.assign(e.style,t)};var C2=Symbol("HANDLE_EVENT_GLOBAL_NAMESPACE"),Un=class Un{constructor(){this.handledBy=new Set}static getOrCreate(t){let r=Un.metadataMap.get(t);return r||(r=new Un,Un.metadataMap.set(t,r)),r}static get(t){return Un.metadataMap.get(t)}};Un.metadataMap=new WeakMap;var fy=Un;var Fo={apple:{metaKey:!0},other:{ctrlKey:!0}},Va={apple:{metaKey:!0,shiftKey:!0},other:{ctrlKey:!0,shiftKey:!0}},$e={apple:{metaKey:!0,ctrlKey:!0},other:{ctrlKey:!0,altKey:!0}},vy={apple:{ctrlKey:!0,shiftKey:!0},other:{ctrlKey:!0,shiftKey:!0}},My={apple:{ctrlKey:!0,altKey:!0},other:{ctrlKey:!0,altKey:!0}},pp={apple:{ctrlKey:!0,altKey:!0},other:{ctrlKey:!0,shiftKey:!0}},Rt={apple:{ctrlKey:!0},other:{altKey:!0}},gy={apple:{metaKey:!0},other:{altKey:!0}},pn={apple:{metaKey:!0,shiftKey:!0},other:{altKey:!0,shiftKey:!0}};var qk={apple:{altKey:!0,shiftKey:!0},other:{altKey:!0,shiftKey:!0}},Ua={apple:{},other:{}},Ek={apple:{ctrlKey:!0},other:{ctrlKey:!0}},Nk=["F6",Ua];var Sl={undo:["Z",Fo],redo:[["Z",Va],["Y",Fo]]};var Sy={brailleNemeth:["N",Rt],brailleUEB:["U",Rt],toggleSixKeyInput:["6",Rt],exitBraille:[["Q",Rt],["X",Rt]]},N2={...Sl,clearAll:["L",vy],toggleFractionEvaluation:["A",pn],toggleDegrees:["D",Rt],...Sy},I2={...Sl,expressionZoomFit:["Z",qk],toggleFractionEvaluation:["A",pn],toggleItemHidden:["H",pn],toggleAuthorMode:["O",pn],toggleExpressionList:["E",pn],toggleKeyboardReorder:["M",pn],collapseAllFolders:["Up",pn],expandAllFolders:["Down",pn],collapseFolder:["Up",gy],expandFolder:["Down",gy],openExpressionSearch:["F",Fo],openExpressionSearchRename:["F",Va],focusExpressionList:["E",$e],newExpression:["X",$e],newNote:["O",$e],newFolder:["F",$e],newImage:["I",$e],newTable:["T",$e],newTableRegression:["R",$e],focusGeoToolbar:["M",$e],openObjectNavigator:["C",$e],toggleGraphSettings:["G",$e],focusGraphPaper:["P",$e],toggleEditListMode:["D",My],clearGraph:["L",vy],switchPane:Nk,...Sy,toggleDegrees:["D",Rt],toggleKeypad:["K",Rt],toggleMute:["M",Rt],zoomIn:[["+",Rt],["=",Rt]],zoomOut:["-",Rt],zoomDefault:["0",Rt],escape:["Esc",Ua],backspace:["Backspace",Ua]};var A2={...Sl,formattingToolbar:["M",$e],backtick:["`",Ua]},P2={escape:["Esc",Ua],insertExpressionCell:["Enter",Fo],...Sl,save:["S",Fo],formatParagraph:["0",My],formatTitle:["1",pp],formatHeading:["2",pp],formatSubheading:["3",pp],alignLeft:["L",Va],alignCenter:["E",Va],alignRight:["R",Va],commitGraphCellModal:["Enter",Ek],insertColumnLeft:["[",$e],insertColumnRight:["]",$e],deleteColumn:[["Backspace",$e],["Del",$e]],focusFormattingToolbar:["M",$e],openCommandPalette:["O",$e],focusExpressionListSidebar:["E",$e],selectAll:["A",Fo],openPublishedPreviewModal:["V",$e]};var Ik="Backspace",Ak="Tab",Cy="Enter",ky="Shift",qy="Control",Ey="Alt",Ny="Meta",Iy="CapsLock",Ay="Esc",Py="Space",Ry="PageUp",Dy="PageDown",Pk="End",Rk="Home",Ly="Left",Oy="Up",_y="Right",Fy="Down",Dk="Del",Lk="F6";var hy={Backspace:Ik,F6:Lk,Tab:Ak,Enter:Cy,Shift:ky,Control:qy,Alt:Ey,Meta:Ny,CapsLock:Iy,Escape:Ay," ":Py,PageUp:Ry,PageDown:Dy,End:Pk,Home:Rk,ArrowLeft:Ly,ArrowUp:Oy,ArrowRight:_y,ArrowDown:Fy,Delete:Dk},By=e=>{let t=[ky,Ey,qy,Iy,Ny];return!!e.key&&t.includes(e.key)},dp=e=>wy(e)===Cy||wy(e)===Py,yy={UIKeyInputUpArrow:Oy,UIKeyInputDownArrow:Fy,UIKeyInputLeftArrow:Ly,UIKeyInputRightArrow:_y,UIKeyInputEscape:Ay,UIKeyInputPageUp:Ry,UIKeyInputPageDown:Dy},mp=["0123456789abcdefghijklmnopqrstuvwxyz","\xBA\xA1\u2122\xA3\xA2\u221E\xA7\xB6\u2022\xAA\xE5\u222B\xE7\u2202 \u0192\xA9\u02D9 \u2206\u02DA\xAC\xB5 \xF8\u03C0\u0153\xAE\xDF\u2020 \u221A\u2211\u2248\xA5\u03A9","\u201A\u2044\u20AC\u2039\u203A\uFB01\uFB02\u2021\xB0\xB7\xC5\u0131\xC7\xCE\xB4\xCF\u02DD\xD3\u02C6\xD4\uF8FF\xD2\xC2\u02DC\xD8\u220F\u0152\u2030\xCD\u02C7\xA8\u25CA\u201E\u02DB\xC1\xB8"].map(e=>e.split("")),by=mp[0],xy=mp[1],Ty=mp[2],Ok={},_k={};for(let e=0;e<by.length;e++){let t=by[e];xy[e]!==" "&&(Ok[xy[e]]=t.toUpperCase()),Ty[e]!==" "&&(_k[Ty[e]]=t.toUpperCase())}var wy=e=>{if(e.key&&hy[e.key])return hy[e.key];if(e.key&&yy[e.key])return yy[e.key]};var Bk=500,Gk=document.location.href.indexOf("dcgDebugTouchTracking=dcgYES")!==-1,dn,Bo;window._touchtracking_id_counter==null&&(window._touchtracking_id_counter=0);window._touchtracking_id_counter+=1;var Wa="touchtracking_id_"+window._touchtracking_id_counter,De=function(e){Bo&&(Bo.value="("+Date.now()+") "+e+`
`+Bo.value)};function Hy(e){if(e.classList.add("dcg-tap-container",Wa),vl&&e.style.setProperty("--dcg-minimum-input-font-size","16px"),Gk){dn&&dn.remove(),dn=document.createElement("div"),my(dn,{position:"absolute",bottom:"10px",right:"10px"});let t=document.createElement("textarea");t.setAttribute("rows","30"),t.setAttribute("cols","40"),dn.append(t);let r=document.createElement("div");r.id="dcg-touchtracking-debug-copy",r.classList.add("dcg-btn-blue"),r.innerText="COPY LOGS",dn.append(r),Bo=dn.querySelector("textarea"),e.append(dn),r.addEventListener("mousedown",()=>{Bo&&(Bo.select(),document.execCommand("copy"))},!0),De("monitor touches")}}var Ka=0,Zt=1,$o=2,Ha=3,$r=4,se=Ka,fp={},xr={},Gr=[],gp=0,za=null,kl=null,zn=!1,Cl=null,Gy=zn,mn=function(e){let t=document.activeElement;e.type.startsWith("key")?By(e)||(zn=!0):e.type.startsWith("pointer")&&(zn=!1);let r=!!(t&&Ky(t));t&&!t.closest(".dcg-tap-container."+Wa)&&(t=null),t!==Cl?(Cl&&Cl.classList.remove("dcg-focus-visible"),t&&(zn||r||t.classList.contains("dcg-always-show-focus-visible"))&&t.classList.add("dcg-focus-visible")):Gy!==zn&&t&&!r&&(zn||t.classList.contains("dcg-always-show-focus-visible")?t.classList.add("dcg-focus-visible"):t.classList.remove("dcg-focus-visible")),Gy=zn,Cl=t};document.addEventListener("keydown",mn,{capture:!0});document.addEventListener("keydown",mn);document.addEventListener("pointerdown",mn);document.addEventListener("pointerdown",mn,{capture:!0});document.addEventListener("focusin",mn,{capture:!0});document.addEventListener("focusin",mn);document.addEventListener("focusout",mn,{capture:!0});document.addEventListener("focusout",mn);var $y,Ct=[],Wy=function(e){let t=[],r=!1;for(let n=e.length-1;n>=0;n--){let o=e[n];o.classList.contains("dcg-touchtracking-prevent-dom-mutations")?r=!0:o.classList.contains("dcg-touchtracking-allow-dom-mutations")&&(r=!1),r||t.push(o)}return t.reverse(),t},hp=function(e){if(!(e instanceof Element))return[];let t=e.closest(".dcg-tap-container."+Wa);if(!t)return[];let r=e,n=[];for(;r;){if(n.push(r),r===t||r.classList.contains("dcg-stop-touchtracking-class-propagation"))return n;r=r.parentNode}return[]},ql=function(e,t){kl=null,se=e,De("beginMode:"+se),se===Zt?Gr=hp(t.originalEvent.touches[0].target):Gr=hp(t.target),Wy(Gr).forEach(n=>{n.classList.add("dcg-depressed")}),Gr.forEach(n=>{let o=Le(n);o.data({originalScrollTop:o.scrollTop(),originalScrollLeft:o.scrollLeft()})}),xr={}};function Ky(e){let t=["text","password","email","number","url","search"];return e.matches("input")&&t.indexOf(e.type)>=0||e.matches('textarea, [role="textbox"], [contenteditable=true]')}var ja=function(e){if(!(e instanceof Element))return!1;let t=e.closest(".dcg-tap-container");return t?t.matches(".dcg-tap-container."+Wa):!1},Vo=function(e,t){kl=null;let r=!1;if(De("endMode:"+se),document.querySelectorAll(".dcg-depressed").forEach(n=>{n.classList.remove("dcg-depressed")}),Gr.forEach(n=>{let o=Le(n),a=o.data("originalScrollTop")-o.scrollTop(),i=o.data("originalScrollLeft")-o.scrollLeft();(a||i)&&(xr.scroll=!0)}),xr["dcg-tapstart"]===1&&xr["dcg-tapend"]===1&&!xr["dcg-tapcancel"]&&!xr.scroll){De("potential dcg-tap");let n=t.changedTouches[0].clientX,o=t.changedTouches[0].clientY;if(e&&!e.device&&n===0&&o===0){De("event appears to be simulated"),r=!0,se=Ha;let s=e.target.getBoundingClientRect();n=(s.left+s.right)/2,o=(s.top+s.bottom)/2}De("potential dcg-tap coords:"+n+":"+o);let a=!1,i=!1;for(let s of Gr){if(a)break;let c;if(typeof s.getBoundingClientRect=="function"&&(c=s.getBoundingClientRect()),typeof s.getAttribute=="function"&&s.getAttribute("tapboundary")==="true"&&(a=!0),!(c&&(n<c.left||o<c.top||n>c.right||o>c.bottom))){kl=s,i=!0,Tt("dcg-tap",e,{target:kl,touches:t.touches,changedTouches:t.changedTouches});break}}De("result of dcg-tap:  did_dispatch="+i+"  did_escape="+a)}se===Zt||se===$r?za=setTimeout(()=>{za=null,gp=new Date().getTime()},1e3):r&&(za=setTimeout(()=>{za=null,gp=new Date().getTime()},100)),Gr=[],se=Ka},Go=function(){return za||new Date().getTime()-gp<500},jy=function(e){return e.identifier!==void 0?e.identifier:e.pointerId},Vy=function(e){let t=[];for(let r of e)t.push({identifier:jy(r),x:r.pageX,y:r.pageY,screenX:r.screenX,screenY:r.screenY,pageX:r.pageX,pageY:r.pageY,clientX:r.clientX,clientY:r.clientY,target:r.target});return t},Tt=function(e,t,r){let n=jy(t),o=Vy(r.touches),a=Vy(r.changedTouches);if(De("dispatchEvent:"+e),e==="dcg-tapstart")fp[n]={type:e,pageX:a[0].pageX,pageY:a[0].pageY};else if(e==="dcg-tapmove"){let f=a[0],h=fp[n];if(h&&f.pageX===h.pageX&&f.pageY===h.pageY||(se===Zt||se===$r)&&h&&h.type==="dcg-tapstart"&&Math.abs(h.pageX-f.pageX)+Math.abs(h.pageY-f.pageY)<2)return;fp[n]={type:e,pageX:a[0].pageX,pageY:a[0].pageY}}let i=e.toLowerCase();xr[i]===void 0?xr[i]=1:xr[i]+=1;let s=Le.event.fix(t.originalEvent);s.type=e,s.device=se===Zt||se===$r?"touch":se===Ha?"keyboard":"mouse",qt("forceTouchDevice")&&se===$o&&(s.device="touch"),s.touches=o,s.changedTouches=a,s.target=r.target?r.target:t.target;let c=s.device!=="keyboard"&&xr["dcg-longhold"]>0;s.wasLongheld=function(){return c},clearTimeout($y),s.type==="dcg-tapstart"&&s.device!=="keyboard"&&s.touches.length===1&&($y=setTimeout(()=>{Tt("dcg-longhold",t,r)},Bk)),s.target&&s.target.nodeName&&s.target.nodeName.toLowerCase()==="a"&&s.type==="dcg-tap"&&s.device==="keyboard"&&s.target.click&&s.target.click(),De("trigger event:"+s.type),Le(s.target).trigger(s)},El=function(e){let t=Gr,r=!!Gr.length,n=document.querySelectorAll(".dcg-tap-container."+Wa+" .dcg-hovered"),o=Array.from(n).filter(ja),a=[],i=[],s=[];if(e){let c=hp(e);Wy(c).forEach(h=>{(!r||t.indexOf(h)!==-1)&&(o.indexOf(h)===-1&&s.push(h),a.push(h))})}for(let c of o)a.indexOf(c)===-1&&i.push(c);i.forEach(c=>{c&&c.classList.remove("dcg-hovered"),Le(c).trigger("tipsyhide")}),s.forEach(c=>{c&&c.classList.add("dcg-hovered"),Le(c).trigger("tipsyshow")})},Nl=function(e){for(let t of Ct)if(t.pointerId===e)return!0;return!1},yp=function(e){for(let t=0;t<Ct.length;t++)Ct[t].pointerId===e&&Ct.splice(t,1)},Qy=function(e){se===Ka&&ql($r,e),bp(),El(null),Ct.push(e.originalEvent),Tt("dcg-tapstart",e,{touches:Ct,changedTouches:[e.originalEvent]})},Uy=function(e){yp(e.originalEvent.pointerId);let t={touches:Ct,changedTouches:[e.originalEvent]};Tt("dcg-tapcancel",e,t),Ct.length===0&&Vo(e,t)},zy=function(e){yp(e.originalEvent.pointerId);let t={touches:Ct,changedTouches:[e.originalEvent]};Tt("dcg-tapend",e,t),Ct.length===0&&Vo(e,t)},Il=function(e){return e.originalEvent.pointerType==="touch"},Uo=function(e,t){e.trim().split(/\s+/).forEach(r=>{let n=$k?{passive:!1}:void 0;document.addEventListener(r,o=>{De("document.on:"+o.type),t(Le.event.fix(o))},n)})};Uo("pointerdown MSPointerDown",e=>{if(!(se===$o||se===Zt||!Il(e))){if(Nl(e.originalEvent.pointerId)){De("exit. pointer id already exists: "+e.originalEvent.pointerId);return}Qy(e)}});Uo("pointermove MSPointerMove",e=>{se===$o||se===Zt||!Il(e)||(Nl(e.originalEvent.pointerId)||(De("pointer id already exists: "+e.originalEvent.pointerId),Qy(e)),yp(e.originalEvent.pointerId),Ct.push(e.originalEvent),Tt("dcg-tapmove",e,{touches:Ct,changedTouches:[e.originalEvent]}))});Le(document).on("pointercancel MSPointerCancel",e=>{if(De("document.on:"+e.type),se!==$r||!Il(e)||!Nl(e.originalEvent.pointerId))return;Uy(e);let t;for(;t=Ct.pop();){let r=Le.Event(t,{originalEvent:t});Uy(r)}});Le(document).on("pointerup MSPointerUp",e=>{if(De("document.on:"+e.type),se!==$r||!Il(e)||!Nl(e.originalEvent.pointerId))return;zy(e);let t;for(;t=Ct.pop();){let r=Le.Event(t,{originalEvent:t});zy(r)}});var $k=function(){let e=!1;try{let t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",()=>{},t),window.removeEventListener("test",()=>{},t)}catch(t){}return e}();Uo("touchstart",e=>{se===$o||se===$r||(bp(),se===Ka&&ql(Zt,e),El(null),Tt("dcg-tapstart",e,{touches:e.originalEvent.touches,changedTouches:e.originalEvent.changedTouches}))});Uo("touchmove",e=>{se===Zt&&Tt("dcg-tapmove",e,{touches:e.originalEvent.touches,changedTouches:e.originalEvent.changedTouches})});Uo("touchcancel",e=>{if(se!==Zt)return;let t={touches:e.originalEvent.touches,changedTouches:e.originalEvent.changedTouches};Tt("dcg-tapcancel",e,t),e.originalEvent.touches.length===0&&Vo(e,t)});Uo("touchend",e=>{if(se!==Zt)return;let t={touches:e.originalEvent.touches,changedTouches:e.originalEvent.changedTouches};Tt("dcg-tapend",e,t),e.originalEvent.touches.length===0&&Vo(e,t)});function Vk(){return!!(se===Zt||se===$r||Go())}Le(document).on("mousedown",e=>{if(De("document.on:"+e.type),!(e.button===1||e.button===2)){if(Vk()){!e.target.matches("input, textarea, select")&&ja(e.target)&&e.preventDefault(),De("abort mousedown: "+se+":"+Go());return}ql($o,e),Tt("dcg-tapstart",e,{touches:[e],changedTouches:[e]})}});var Uk=function(e){return!(e instanceof Element)||!ja(e)||e.closest(".dcg-do-blur")||e.closest(".dcg-text-selectable")?!1:!!e.closest(".dcg-do-not-blur")},bp=function(){try{let e=window.getSelection();if((e==null?void 0:e.rangeCount)===1){let t=e.getRangeAt(0).commonAncestorContainer;t.nodeType===Node.TEXT_NODE&&(t=t.parentNode),t&&t.closest(".dcg-text-selectable")&&e.removeAllRanges()}}catch(e){}};Le(document).on("mousedown",e=>{De("document.on:"+e.type);let t=e.target;Uk(t)&&(!Ky(t)||t.classList.contains("dcg-do-not-blur"))&&e.preventDefault(),bp()});Le(document).on("mouseleave",e=>{if(De("document.on:"+e.type),se===Ka){if(Go()){De("abort mouseleave: "+se+":"+Go());return}El(null)}});Le(document).on("mousemove",e=>{if(De("document.on:"+e.type),!(e.button===1||e.button===2)&&!(se===Zt||se===$r)){if(Go()){De("abort mousemove: "+se+":"+Go());return}El(e.target),Tt("dcg-tapmove",e,{touches:[e],changedTouches:[e]})}});Le(document).on("mouseup",e=>{if(De("document.on:"+e.type),e.button===1||e.button===2||se!==$o)return;let t={touches:[],changedTouches:[e]};Tt("dcg-tapend",e,t),Vo(e,t)});Le(document).on("keydown",e=>{if(De("document.on:"+e.type),!(!dp(e)||!ja(e.target))&&se!==Ha){if(e.target.matches('a:not([ontap]), button:not([ontap]), input:not([type="checkbox"]), textarea, select, [role="textbox"], [contenteditable="true"], summary'))return;e.preventDefault(),ql(Ha,e),Tt("dcg-tapstart",e,{touches:[e],changedTouches:[e]})}});Le(document).on("keyup",e=>{if(De("document.on:"+e.type),!dp(e)||!ja(e.target)||se!==Ha)return;let t={touches:[],changedTouches:[e]};Tt("dcg-tapend",e,t),Vo(e,t)});function Yy(){var e;return(e=document.fonts)!=null&&e.ready?document.fonts.ready:Promise.resolve()}var Xy=!1;function Zy(){Xy||(Xy=!0,window.TestBridge={})}Hy(document.body);Yy().then(()=>{document.querySelector(".dcg-loading-div-container").remove(),Zy()});})();
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
