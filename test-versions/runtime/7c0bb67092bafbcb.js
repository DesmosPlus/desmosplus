(()=>{var um=Object.create;var jo=Object.defineProperty;var dm=Object.getOwnPropertyDescriptor;var pm=Object.getOwnPropertyNames;var gm=Object.getPrototypeOf,hm=Object.prototype.hasOwnProperty;var mm=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}},fm=(e,t)=>{for(var r in t)jo(e,r,{get:t[r],enumerable:!0})},bm=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of pm(t))!hm.call(e,a)&&a!==r&&jo(e,a,{get:()=>t[a],enumerable:!(n=dm(t,a))||n.enumerable});return e};var ym=(e,t,r)=>(r=e!=null?um(gm(e)):{},bm(t||!e||!e.__esModule?jo(r,"default",{value:e,enumerable:!0}):r,e));var Yp=mm((jp,Ls)=>{(function(e){if(typeof jp=="object"&&typeof Ls!="undefined")Ls.exports=e();else{var t;typeof window!="undefined"?t=window:typeof global!="undefined"?t=global:typeof self!="undefined"?t=self:t=this,t.Bugsnag=e()}})(function(){var e,t,r,n=function(u){var p;return function(d){return p||u(p={exports:{},parent:d},p.exports),p.exports}},a=n(function(l,u){var p=ul.createUrlFilter,d=ul.getDuration;function m(b,f){return b===void 0&&(b=[]),f===void 0&&(f=window),{name:"requestTracker",load:function(q){try{var v=il(f),T=ll(f),C=p(q,b);return{fetchTracker:v,xhrTracker:T,urlFilter:C,getDuration:d}}catch(A){throw q._logger.error("Failed to load request tracker:",A),new Error("Request tracking is not available: "+A.message)}}}}l.exports={RequestTracker:zo,createFetchTracker:il,createXhrTracker:ll,createUrlFilter:p,getDuration:d,createRequestTrackerPlugin:m}}),o=n(function(l,u){(function(p,d){"use strict";typeof e=="function"&&e.amd?e("stackframe",[],d):typeof u=="object"?l.exports=d():p.StackFrame=d()})(this,function(){"use strict";function p(B){return!isNaN(parseFloat(B))&&isFinite(B)}function d(B){return B.charAt(0).toUpperCase()+B.substring(1)}function m(B){return function(){return this[B]}}var b=["isConstructor","isEval","isNative","isToplevel"],f=["columnNumber","lineNumber"],q=["fileName","functionName","source"],v=["args"],T=["evalOrigin"],C=b.concat(f,q,v,T);function A(B){if(B)for(var D=0;D<C.length;D++)B[C[D]]!==void 0&&this["set"+d(C[D])](B[C[D]])}A.prototype={getArgs:function(){return this.args},setArgs:function(B){if(Object.prototype.toString.call(B)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=B},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(B){if(B instanceof A)this.evalOrigin=B;else if(B instanceof Object)this.evalOrigin=new A(B);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var B=this.getFileName()||"",D=this.getLineNumber()||"",V=this.getColumnNumber()||"",ce=this.getFunctionName()||"";return this.getIsEval()?B?"[eval] ("+B+":"+D+":"+V+")":"[eval]:"+D+":"+V:ce?ce+" ("+B+":"+D+":"+V+")":B+":"+D+":"+V}},A.fromString=function(D){var V=D.indexOf("("),ce=D.lastIndexOf(")"),Ce=D.substring(0,V),me=D.substring(V+1,ce).split(","),Oe=D.substring(ce+1);if(Oe.indexOf("@")===0)var it=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(Oe,""),Ye=it[1],Wo=it[2],Qo=it[3];return new A({functionName:Ce,args:me||void 0,fileName:Ye,lineNumber:Wo||void 0,columnNumber:Qo||void 0})};for(var G=0;G<b.length;G++)A.prototype["get"+d(b[G])]=m(b[G]),A.prototype["set"+d(b[G])]=(function(B){return function(D){this[B]=!!D}})(b[G]);for(var J=0;J<f.length;J++)A.prototype["get"+d(f[J])]=m(f[J]),A.prototype["set"+d(f[J])]=(function(B){return function(D){if(!p(D))throw new TypeError(B+" must be a Number");this[B]=Number(D)}})(f[J]);for(var Z=0;Z<q.length;Z++)A.prototype["get"+d(q[Z])]=m(q[Z]),A.prototype["set"+d(q[Z])]=(function(B){return function(D){this[B]=String(D)}})(q[Z]);return A})}),i=function(l,u,p){for(var d=p,m=0,b=l.length;m<b;m++)d=u(d,l[m],m,l);return d},s=function(l,u){return i(l,function(p,d,m,b){return u(d,m,b)?p.concat(d):p},[])},c=!{toString:null}.propertyIsEnumerable("toString"),g=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],h=function(l){var u=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&u.push(p);if(!c)return u;for(var d=0,m=g.length;d<m;d++)Object.prototype.hasOwnProperty.call(l,g[d])&&u.push(g[d]);return u},y=function(l){return Object.prototype.toString.call(l)==="[object Array]"},w=function(l,u){return i(l,function(p,d,m,b){return p===!0||d===u},!1)},k=function(l,u){return l===void 0&&(l=1),u===void 0&&(u=1/0),function(p){return typeof p=="number"&&parseInt(""+p,10)===p&&p>=l&&p<=u}},_=function(l){return typeof l=="string"&&!!l.length},I=function(l){return typeof l=="function"||y(l)&&s(l,function(u){return typeof u=="function"}).length===l.length},S=["navigation","request","process","log","user","state","error","manual"],L={},P=function(){return{unhandledExceptions:!0,unhandledRejections:!0}};L.schema={apiKey:{defaultValue:function(){return null},message:"is required",validate:_},appVersion:{defaultValue:function(){},message:"should be a string",validate:function(l){return l===void 0||_(l)}},appType:{defaultValue:function(){},message:"should be a string",validate:function(l){return l===void 0||_(l)}},autoDetectErrors:{defaultValue:function(){return!0},message:"should be true|false",validate:function(l){return l===!0||l===!1}},enabledErrorTypes:{defaultValue:function(){return P()},message:"should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",allowPartialObject:!0,validate:function(l){if(typeof l!="object"||!l)return!1;var u=h(l),p=h(P());return!(s(u,function(d){return w(p,d)}).length<u.length||s(h(l),function(d){return typeof l[d]!="boolean"}).length>0)}},onError:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:I},onSession:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:I},onBreadcrumb:{defaultValue:function(){return[]},message:"should be a function or array of functions",validate:I},endpoints:{defaultValue:function(l){return typeof l=="undefined"?{notify:"https://notify.bugsnag.com",sessions:"https://sessions.bugsnag.com"}:{notify:null,sessions:null}},message:"should be an object containing endpoint URLs { notify, sessions }",validate:function(l){return l&&typeof l=="object"&&_(l.notify)&&_(l.sessions)&&s(h(l),function(u){return!w(["notify","sessions"],u)}).length===0}},autoTrackSessions:{defaultValue:function(l){return!0},message:"should be true|false",validate:function(l){return l===!0||l===!1}},enabledReleaseStages:{defaultValue:function(){return null},message:"should be an array of strings",validate:function(l){return l===null||y(l)&&s(l,function(u){return typeof u=="string"}).length===l.length}},releaseStage:{defaultValue:function(){return"production"},message:"should be a string",validate:function(l){return typeof l=="string"&&l.length}},maxBreadcrumbs:{defaultValue:function(){return 25},message:"should be a number \u2264100",validate:function(l){return k(0,100)(l)}},enabledBreadcrumbTypes:{defaultValue:function(){return S},message:"should be null or a list of available breadcrumb types ("+S.join(",")+")",validate:function(l){return l===null||y(l)&&i(l,function(u,p){return u===!1?u:w(S,p)},!0)}},context:{defaultValue:function(){},message:"should be a string",validate:function(l){return l===void 0||typeof l=="string"}},user:{defaultValue:function(){return{}},message:"should be an object with { id, email, name } properties",validate:function(l){return l===null||l&&i(h(l),function(u,p){return u&&w(["id","email","name"],p)},!0)}},metadata:{defaultValue:function(){return{}},message:"should be an object",validate:function(l){return typeof l=="object"&&l!==null}},logger:{defaultValue:function(){},message:"should be null or an object with methods { debug, info, warn, error }",validate:function(l){return!l||l&&i(["debug","info","warn","error"],function(u,p){return u&&typeof l[p]=="function"},!0)}},redactedKeys:{defaultValue:function(){return["password"]},message:"should be an array of strings|regexes",validate:function(l){return y(l)&&l.length===s(l,function(u){return typeof u=="string"||u&&typeof u.test=="function"}).length}},plugins:{defaultValue:function(){return[]},message:"should be an array of plugin objects",validate:function(l){return y(l)&&l.length===s(l,function(u){return u&&typeof u=="object"&&typeof u.load=="function"}).length}},featureFlags:{defaultValue:function(){return[]},message:'should be an array of objects that have a "name" property',validate:function(l){return y(l)&&l.length===s(l,function(u){return u&&typeof u=="object"&&typeof u.name=="string"}).length}},reportUnhandledPromiseRejectionsAsHandled:{defaultValue:function(){return!1},message:"should be true|false",validate:function(l){return l===!0||l===!1}},sendPayloadChecksums:{defaultValue:function(){return!1},message:"should be true|false",validate:function(l){return l===!0||l===!1}}};var $={};(function(l,u){"use strict";typeof e=="function"&&e.amd?e("error-stack-parser",["stackframe"],u):typeof $=="object"?$=u(o({})):l.ErrorStackParser=u(l.StackFrame)})(this,function(u){"use strict";var p=/(^|@)\S+:\d+/,d=/^\s*at .*(\S+:\d+|\(native\))/m,m=/^(eval@)?(\[native code])?$/;return{parse:function(f){if(typeof f.stacktrace!="undefined"||typeof f["opera#sourceloc"]!="undefined")return this.parseOpera(f);if(f.stack&&f.stack.match(d))return this.parseV8OrIE(f);if(f.stack)return this.parseFFOrSafari(f);throw new Error("Cannot parse given Error object")},extractLocation:function(f){if(f.indexOf(":")===-1)return[f];var q=/(.+?)(?::(\d+))?(?::(\d+))?$/,v=q.exec(f.replace(/[()]/g,""));return[v[1],v[2]||void 0,v[3]||void 0]},parseV8OrIE:function(f){var q=f.stack.split(`
`).filter(function(v){return!!v.match(d)},this);return q.map(function(v){v.indexOf("(eval ")>-1&&(v=v.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var T=v.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),C=T.match(/ (\(.+\)$)/);T=C?T.replace(C[0],""):T;var A=this.extractLocation(C?C[1]:T),G=C&&T||void 0,J=["eval","<anonymous>"].indexOf(A[0])>-1?void 0:A[0];return new u({functionName:G,fileName:J,lineNumber:A[1],columnNumber:A[2],source:v})},this)},parseFFOrSafari:function(f){var q=f.stack.split(`
`).filter(function(v){return!v.match(m)},this);return q.map(function(v){if(v.indexOf(" > eval")>-1&&(v=v.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),v.indexOf("@")===-1&&v.indexOf(":")===-1)return new u({functionName:v});var T=/((.*".+"[^@]*)?[^@]*)(?:@)/,C=v.match(T),A=C&&C[1]?C[1]:void 0,G=this.extractLocation(v.replace(T,""));return new u({functionName:A,fileName:G[0],lineNumber:G[1],columnNumber:G[2],source:v})},this)},parseOpera:function(f){return!f.stacktrace||f.message.indexOf(`
`)>-1&&f.message.split(`
`).length>f.stacktrace.split(`
`).length?this.parseOpera9(f):f.stack?this.parseOpera11(f):this.parseOpera10(f)},parseOpera9:function(f){for(var q=/Line (\d+).*script (?:in )?(\S+)/i,v=f.message.split(`
`),T=[],C=2,A=v.length;C<A;C+=2){var G=q.exec(v[C]);G&&T.push(new u({fileName:G[2],lineNumber:G[1],source:v[C]}))}return T},parseOpera10:function(f){for(var q=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,v=f.stacktrace.split(`
`),T=[],C=0,A=v.length;C<A;C+=2){var G=q.exec(v[C]);G&&T.push(new u({functionName:G[3]||void 0,fileName:G[2],lineNumber:G[1],source:v[C]}))}return T},parseOpera11:function(f){var q=f.stack.split(`
`).filter(function(v){return!!v.match(p)&&!v.match(/^Error created at/)},this);return q.map(function(v){var T=v.split("@"),C=this.extractLocation(T.pop()),A=T.shift()||"",G=A.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0,J;A.match(/\(([^)]*)\)/)&&(J=A.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var Z=J===void 0||J==="[arguments not available]"?void 0:J.split(",");return new u({functionName:G,args:Z,fileName:C[0],lineNumber:C[1],columnNumber:C[2],source:v})},this)}}});var K=$,le={};(function(l,u){"use strict";typeof e=="function"&&e.amd?e("stack-generator",["stackframe"],u):typeof le=="object"?le=u(o({})):l.StackGenerator=u(l.StackFrame)})(this,function(l){return{backtrace:function(p){var d=[],m=10;typeof p=="object"&&typeof p.maxStackSize=="number"&&(m=p.maxStackSize);for(var b=arguments.callee;b&&d.length<m&&b.arguments;){for(var f=new Array(b.arguments.length),q=0;q<f.length;++q)f[q]=b.arguments[q];/function(?:\s+([\w$]+))+\s*\(/.test(b.toString())?d.push(new l({functionName:RegExp.$1||void 0,args:f})):d.push(new l({args:f}));try{b=b.caller}catch(v){break}}return d}}});var E=function(l){return!!l&&(!!l.stack||!!l.stacktrace||!!l["opera#sourceloc"])&&typeof(l.stack||l.stacktrace||l["opera#sourceloc"])=="string"&&l.stack!==l.name+": "+l.message},F=function(l,u){return i(l,function(p,d,m,b){return p.concat(u(d,m,b))},[])},j=function(l){for(var u=1;u<arguments.length;u++){var p=arguments[u];for(var d in p)Object.prototype.hasOwnProperty.call(p,d)&&(l[d]=p[d])}return l},M=function(l,u,p,d){var m;if(u){var b;if(p===null)return ne(l,u);typeof p=="object"&&(b=p),typeof p=="string"&&(b=(m={},m[p]=d,m)),b&&(u==="__proto__"||u==="constructor"||u==="prototype"||(l[u]||(l[u]={}),l[u]=j({},l[u],b)))}},O=function(l,u,p){if(typeof u=="string"){if(!p)return l[u];if(l[u])return l[u][p]}},ne=function(l,u,p){if(typeof u=="string"){if(!p){delete l[u];return}u==="__proto__"||u==="constructor"||u==="prototype"||l[u]&&delete l[u][p]}},Ie={add:M,get:O,clear:ne},dt=function(l,u,p,d){var m=d&&d.redactedKeys?d.redactedKeys:[],b=d&&d.redactedPaths?d.redactedPaths:[];return JSON.stringify(Qg(l,m,b),u,p)},je=20,Fg=25e3,Bg=8,Wn="...";function zg(l){return l instanceof Error||/^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(l))}function Hs(l){return"[Throws: "+(l?l.message:"?")+"]"}function Ug(l,u){for(var p=0,d=l.length;p<d;p++)if(l[p]===u)return!0;return!1}function Hg(l,u){for(var p=0,d=l.length;p<d;p++)if(u.indexOf(l[p])===0)return!0;return!1}function Vg(l,u){for(var p=0,d=l.length;p<d;p++)if(typeof l[p]=="string"&&l[p].toLowerCase()===u.toLowerCase()||l[p]&&typeof l[p].test=="function"&&l[p].test(u))return!0;return!1}function Kg(l){return Object.prototype.toString.call(l)==="[object Array]"}function Wg(l,u){try{return l[u]}catch(p){return Hs(p)}}function Qg(l,u,p){var d=[],m=0;function b(f,q){function v(){return q.length>Bg&&m>Fg}if(m++,q.length>je||v())return Wn;if(f===null||typeof f!="object")return f;if(Ug(d,f))return"[Circular]";if(d.push(f),typeof f.toJSON=="function")try{m--;var T=b(f.toJSON(),q);return d.pop(),T}catch(V){return Hs(V)}var C=zg(f);if(C){m--;var A=b({name:f.name,message:f.message},q);return d.pop(),A}if(Kg(f)){for(var G=[],J=0,Z=f.length;J<Z;J++){if(v()){G.push(Wn);break}G.push(b(f[J],q.concat("[]")))}return d.pop(),G}var B={};try{for(var D in f)if(Object.prototype.hasOwnProperty.call(f,D)){if(Hg(p,q.join("."))&&Vg(u,D)){B[D]="[REDACTED]";continue}if(v()){B[D]=Wn;break}B[D]=b(Wg(f,D),q.concat(D))}}catch(V){}return d.pop(),B}return b(l,[])}function Vs(l,u,p,d){if(typeof p=="string"){d===void 0?d=null:d!==null&&typeof d!="string"&&(d=dt(d));var m=u[p];if(typeof m=="number"){l[m]={name:p,variant:d};return}l.push({name:p,variant:d}),u[p]=l.length-1}}function jg(l,u,p){if(y(u)){for(var d=0;d<u.length;++d){var m=u[d];m===null||typeof m!="object"||Vs(l,p,m.name,m.variant)}return l}}function Yg(l){return F(s(l,Boolean),function(u){var p=u.name,d=u.variant,m={featureFlag:p};return typeof d=="string"&&(m.variant=d),m})}function Xg(l,u,p){var d=u[p];typeof d=="number"&&(l[d]=null,delete u[p])}var Qt={add:Vs,clear:Xg,merge:jg,toEventApi:Yg},Zg=Jg;function Jg(l){switch(Object.prototype.toString.call(l)){case"[object Error]":return!0;case"[object Exception]":return!0;case"[object DOMException]":return!0;default:return l instanceof Error}}var Qn=Zg;function No(){return No=Object.assign?Object.assign.bind():function(l){for(var u=1;u<arguments.length;u++){var p=arguments[u];for(var d in p)({}).hasOwnProperty.call(p,d)&&(l[d]=p[d])}return l},No.apply(null,arguments)}var Pt=(function(){function l(p,d,m,b,f){m===void 0&&(m=[]),b===void 0&&(b=rh()),this.apiKey=void 0,this.context=void 0,this.groupingHash=void 0,this.originalError=f,this._handledState=b,this.severity=this._handledState.severity,this.unhandled=this._handledState.unhandled,this.app={},this.device={},this.request={},this.response={},this.breadcrumbs=[],this.threads=[],this._metadata={},this._features=[],this._featuresIndex={},this._user={},this._session=void 0,this._correlation=void 0,this._groupingDiscriminator=void 0,this.errors=[Ws(p,d,l.__type,m)]}var u=l.prototype;return u.addMetadata=function(d,m,b){return Ie.add(this._metadata,d,m,b)},u.setTraceCorrelation=function(d,m){typeof d=="string"&&(this._correlation=No({traceId:d},typeof m=="string"?{spanId:m}:{}))},u.getGroupingDiscriminator=function(){return this._groupingDiscriminator},u.setGroupingDiscriminator=function(d){var m=this._groupingDiscriminator;return(typeof d=="string"||d===null||d===void 0)&&(this._groupingDiscriminator=d),m},u.getMetadata=function(d,m){return Ie.get(this._metadata,d,m)},u.clearMetadata=function(d,m){return Ie.clear(this._metadata,d,m)},u.addFeatureFlag=function(d,m){m===void 0&&(m=null),Qt.add(this._features,this._featuresIndex,d,m)},u.addFeatureFlags=function(d){Qt.merge(this._features,d,this._featuresIndex)},u.getFeatureFlags=function(){return Qt.toEventApi(this._features)},u.clearFeatureFlag=function(d){Qt.clear(this._features,this._featuresIndex,d)},u.clearFeatureFlags=function(){this._features=[],this._featuresIndex={}},u.getUser=function(){return this._user},u.setUser=function(d,m,b){this._user={id:d,email:m,name:b}},u.toJSON=function(){return{payloadVersion:"4",exceptions:F(this.errors,function(d){return j({},d,{message:d.errorMessage})}),severity:this.severity,unhandled:this._handledState.unhandled,severityReason:this._handledState.severityReason,app:this.app,device:this.device,request:this.request,response:this.response,breadcrumbs:this.breadcrumbs,context:this.context,groupingHash:this.groupingHash,groupingDiscriminator:this._groupingDiscriminator,metaData:this._metadata,user:this._user,session:this._session,featureFlags:this.getFeatureFlags(),correlation:this._correlation}},l})(),eh=function(l){var u={file:l.fileName,method:th(l.functionName),lineNumber:l.lineNumber,columnNumber:l.columnNumber,code:void 0,inProject:void 0};return u.lineNumber>-1&&!u.file&&!u.method&&(u.file="global code"),u},th=function(l){return/^global code$/i.test(l)?"global code":l},rh=function(){return{unhandled:!1,severity:"warning",severityReason:{type:"handledException"}}},Ks=function(l){return typeof l=="string"?l:""};function Ws(l,u,p,d){return{errorClass:Ks(l),errorMessage:Ks(u),type:p,stacktrace:i(d,function(m,b){var f=eh(b);try{return JSON.stringify(f)==="{}"?m:m.concat(f)}catch(q){return m}},[])}}function Qs(l){return l.cause?[l].concat(Qs(l.cause)):[l]}Pt.getStacktrace=function(l,u,p){if(E(l))return K.parse(l).slice(u);try{return s(le.backtrace(),function(d){return(d.functionName||"").indexOf("StackGenerator$$")===-1}).slice(1+p)}catch(d){return[]}},Pt.create=function(l,u,p,d,m,b){m===void 0&&(m=0);var f=Ys(l,u,d,b),q=f[0],v=f[1],T;try{var C=Pt.getStacktrace(q,v>0?1+v+m:0,1+m);T=new Pt(q.name,q.message,C,p,l)}catch(Z){T=new Pt(q.name,q.message,[],p,l)}if(q.name==="InvalidError"&&T.addMetadata(""+d,"non-error parameter",js(l)),q.cause){var A,G=Qs(q).slice(1),J=F(G,function(Z){var B=Qn(Z)&&E(Z)?K.parse(Z):[],D=Ys(Z,!0,"error cause"),V=D[0];return V.name==="InvalidError"&&T.addMetadata("error cause",js(Z)),Ws(V.name,V.message,Pt.__type,B)});(A=T.errors).push.apply(A,J)}return T};var js=function(l){return l===null?"null":l===void 0?"undefined":l},Ys=function(l,u,p,d){var m,b=0,f=function(q){var v=p==="error cause"?"was":"received";d&&d.warn(p+" "+v+' a non-error: "'+q+'"');var T=new Error(p+" "+v+' a non-error. See "'+p+'" tab for more detail.');return T.name="InvalidError",T};if(!u)Qn(l)?m=l:(m=f(typeof l),b+=2);else switch(typeof l){case"string":case"number":case"boolean":m=new Error(String(l)),b+=1;break;case"function":m=f("function"),b+=2;break;case"object":l!==null&&Qn(l)?m=l:l!==null&&nh(l)?(m=new Error(l.message||l.errorMessage),m.name=l.name||l.errorClass,b+=1):(m=f(l===null?"null":"unsupported object"),b+=2);break;default:m=f("nothing"),b+=2}if(!E(m))try{throw m}catch(q){E(q)&&(m=q,b=1)}return[m,b]};Pt.__type="browserjs";var nh=function(l){return(typeof l.name=="string"||typeof l.errorClass=="string")&&(typeof l.message=="string"||typeof l.errorMessage=="string")},Po=Pt,ah=(function(){function l(p,d,m,b){b===void 0&&(b=new Date),this.type=m,this.message=p,this.metadata=d,this.timestamp=b}var u=l.prototype;return u.toJSON=function(){return{type:this.type,name:this.message,timestamp:this.timestamp,metaData:this.metadata}},l})(),_o=ah;function oh(l,u){var p="000000000"+l;return p.substr(p.length-u)}var Lo=oh,Xs=typeof window=="object"?window:self,Zs=0;for(var ih in Xs)Object.hasOwnProperty.call(Xs,ih)&&Zs++;var sh=navigator.mimeTypes?navigator.mimeTypes.length:0,lh=Lo((sh+navigator.userAgent.length).toString(36)+Zs.toString(36),4);function ch(){return lh}var uh=ch;function dh(l){return typeof l=="string"&&/^c[a-z0-9]{20,32}$/.test(l)}var ph=dh;function gh(l){var u=4,p=36,d=Math.pow(p,u),m=0;function b(){return Lo((Math.random()*d<<0).toString(p),u)}function f(){return m=m<d?m:0,m++,m-1}function q(){var v="c",T=new Date().getTime().toString(p),C=Lo(f().toString(p),u),A=l(),G=b()+b();return v+T+C+A+G}return q.fingerprint=l,q.isCuid=ph,q}var hh=gh,mh=hh(uh),Ro=mh,fh=(function(){function l(){this.id=Ro(),this.startedAt=new Date,this._handled=0,this._unhandled=0,this._user={},this.app={},this.device={}}var u=l.prototype;return u.getUser=function(){return this._user},u.setUser=function(d,m,b){this._user={id:d,email:m,name:b}},u.toJSON=function(){return{id:this.id,startedAt:this.startedAt,events:{handled:this._handled,unhandled:this._unhandled}}},u._track=function(d){this[d._handledState.unhandled?"_unhandled":"_handled"]+=1},l})(),Io=fh,bh=function(l,u,p){var d=0,m=function(){if(d>=l.length)return p(null,!0);u(l[d],function(b,f){if(b)return p(b);if(f===!1)return p(null,!1);d++,m()})};m()},yh=function(l,u,p,d){var m=function(b,f){if(typeof b!="function")return f(null);try{if(b.length!==2){var q=b(u);return q&&typeof q.then=="function"?q.then(function(v){return setTimeout(function(){return f(null,v)})},function(v){setTimeout(function(){return p(v),f(null,!0)})}):f(null,q)}b(u,function(v,T){if(v)return p(v),f(null);f(null,T)})}catch(v){p(v),f(null)}};bh(l,m,d)},Js=function(l,u,p,d){for(var m=!1,b=l.slice();!m&&b.length;)try{m=b.pop()(u)===!1}catch(f){d.error("Error occurred in "+p+" callback, continuing anyway\u2026"),d.error(f)}return m},xh=Qt.add,vh=Qt.clear,Oo=Qt.merge,wh="00000",kh="https://notify.bugsnag.smartbear.com",qh="https://sessions.bugsnag.smartbear.com",_t=function(){},Sh=(function(){function l(p,d,m,b){var f=this;d===void 0&&(d=L.schema),m===void 0&&(m=[]),this._notifier=b,this._config={},this._schema=d,this._delivery={sendSession:_t,sendEvent:_t},this._logger={debug:_t,info:_t,warn:_t,error:_t},this._plugins={},this._breadcrumbs=[],this._session=null,this._metadata={},this._featuresIndex={},this._features=[],this._context=void 0,this._user={},this._groupingDiscriminator=void 0,this._cbs={e:[],s:[],sp:[],b:[]},this.Client=l,this.Event=Po,this.Breadcrumb=_o,this.Session=Io,this._config=this._configure(p,m),F(m.concat(this._config.plugins),function(T){T&&f._loadPlugin(T)}),this._depth=1;var q=this,v=this.notify;this.notify=function(){return v.apply(q,arguments)}}var u=l.prototype;return u.addMetadata=function(d,m,b){return Ie.add(this._metadata,d,m,b)},u.getMetadata=function(d,m){return Ie.get(this._metadata,d,m)},u.clearMetadata=function(d,m){return Ie.clear(this._metadata,d,m)},u.addFeatureFlag=function(d,m){m===void 0&&(m=null),xh(this._features,this._featuresIndex,d,m)},u.addFeatureFlags=function(d){Oo(this._features,d,this._featuresIndex)},u.clearFeatureFlag=function(d){vh(this._features,this._featuresIndex,d)},u.clearFeatureFlags=function(){this._features=[],this._featuresIndex={}},u.getContext=function(){return this._context},u.setContext=function(d){this._context=d},u.getGroupingDiscriminator=function(){return this._groupingDiscriminator},u.setGroupingDiscriminator=function(d){var m=this._groupingDiscriminator;return(typeof d=="string"||d===null||d===void 0)&&(this._groupingDiscriminator=d),m},u._configure=function(d,m){var b=i(m,function(T,C){return C&&C.configSchema?j({},T,C.configSchema):T},this._schema);d.endpoints||(d.sendPayloadChecksums="sendPayloadChecksums"in d?d.sendPayloadChecksums:!0);var f=i(h(b),function(T,C){var A=b[C].defaultValue(d[C]);if(d[C]!==void 0){var G=b[C].validate(d[C]);G?b[C].allowPartialObject?T.config[C]=j(A,d[C]):T.config[C]=d[C]:(T.errors[C]=b[C].message,T.config[C]=A)}else T.config[C]=A;return T},{errors:{},config:{}}),q=f.errors,v=f.config;if(b.apiKey){if(!v.apiKey)throw new Error("No Bugsnag API Key set");/^[0-9a-f]{32}$/i.test(v.apiKey)||(q.apiKey="should be a string of 32 hexadecimal characters"),d.endpoints===void 0&&v.apiKey.indexOf(wh)===0&&(v.endpoints={notify:kh,sessions:qh})}return this._metadata=j({},v.metadata),Oo(this._features,v.featureFlags,this._featuresIndex),this._user=j({},v.user),this._context=v.context,v.logger&&(this._logger=v.logger),v.onError&&(this._cbs.e=this._cbs.e.concat(v.onError)),v.onBreadcrumb&&(this._cbs.b=this._cbs.b.concat(v.onBreadcrumb)),v.onSession&&(this._cbs.s=this._cbs.s.concat(v.onSession)),h(q).length&&this._logger.warn(Ch(q,d)),v},u.getUser=function(){return this._user},u.setUser=function(d,m,b){this._user={id:d,email:m,name:b}},u._loadPlugin=function(d){var m=d.load(this);d.name&&(this._plugins["~"+d.name+"~"]=m)},u.getPlugin=function(d){return this._plugins["~"+d+"~"]},u._setDelivery=function(d){this._delivery=d(this)},u.startSession=function(){var d=new Io;d.app.releaseStage=this._config.releaseStage,d.app.version=this._config.appVersion,d.app.type=this._config.appType,d._user=j({},this._user);var m=Js(this._cbs.s,d,"onSession",this._logger);return m?(this._logger.debug("Session not started due to onSession callback"),this):this._sessionDelegate.startSession(this,d)},u.addOnError=function(d,m){m===void 0&&(m=!1),this._cbs.e[m?"unshift":"push"](d)},u.removeOnError=function(d){this._cbs.e=s(this._cbs.e,function(m){return m!==d})},u._addOnSessionPayload=function(d){this._cbs.sp.push(d)},u.addOnSession=function(d){this._cbs.s.push(d)},u.removeOnSession=function(d){this._cbs.s=s(this._cbs.s,function(m){return m!==d})},u.addOnBreadcrumb=function(d,m){m===void 0&&(m=!1),this._cbs.b[m?"unshift":"push"](d)},u.removeOnBreadcrumb=function(d){this._cbs.b=s(this._cbs.b,function(m){return m!==d})},u.pauseSession=function(){return this._sessionDelegate.pauseSession(this)},u.resumeSession=function(){return this._sessionDelegate.resumeSession(this)},u.leaveBreadcrumb=function(d,m,b){if(d=typeof d=="string"?d:"",b=typeof b=="string"&&w(S,b)?b:"manual",m=typeof m=="object"&&m!==null?m:{},!!d){var f=new _o(d,m,b),q=Js(this._cbs.b,f,"onBreadcrumb",this._logger);if(q){this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback");return}this._breadcrumbs.push(f),this._breadcrumbs.length>this._config.maxBreadcrumbs&&(this._breadcrumbs=this._breadcrumbs.slice(this._breadcrumbs.length-this._config.maxBreadcrumbs))}},u._isBreadcrumbTypeEnabled=function(d){var m=this._config.enabledBreadcrumbTypes;return m===null||w(m,d)},u.notify=function(d,m,b){b===void 0&&(b=_t);var f=Po.create(d,!0,void 0,"notify()",this._depth+1,this._logger);this._notify(f,m,b)},u._notify=function(d,m,b){var f=this;if(b===void 0&&(b=_t),d.app=j({},d.app,{releaseStage:this._config.releaseStage,version:this._config.appVersion,type:this._config.appType}),d.context=d.context||this._context,d._metadata=j({},d._metadata,this._metadata),d._user=j({},d._user,this._user),d.breadcrumbs=this._breadcrumbs.slice(),d.setGroupingDiscriminator(this._groupingDiscriminator),Oo(d._features,this._features,d._featuresIndex),this._config.enabledReleaseStages!==null&&!w(this._config.enabledReleaseStages,this._config.releaseStage))return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"),b(null,d);var q=d.severity,v=function(C){f._logger.error("Error occurred in onError callback, continuing anyway\u2026"),f._logger.error(C)},T=[].concat(this._cbs.e).concat(m);yh(T,d,v,function(C,A){if(C&&v(C),!A)return f._logger.debug("Event not sent due to onError callback"),b(null,d);f._isBreadcrumbTypeEnabled("error")&&l.prototype.leaveBreadcrumb.call(f,d.errors[0].errorClass,{errorClass:d.errors[0].errorClass,errorMessage:d.errors[0].errorMessage,severity:d.severity},"error"),q!==d.severity&&(d._handledState.severityReason={type:"userCallbackSetSeverity"}),d.unhandled!==d._handledState.unhandled&&(d._handledState.severityReason.unhandledOverridden=!0,d._handledState.unhandled=d.unhandled),f._session&&(f._session._track(d),d._session=f._session),f._delivery.sendEvent({apiKey:d.apiKey||f._config.apiKey,notifier:f._notifier,events:[d]},function(G){return b(G,d)})})},l})(),Ch=function(l,u){var p=new Error(`Invalid configuration
`+F(h(l),function(d){return"  - "+d+" "+l[d]+", got "+Mh(u[d])}).join(`

`));return p},Mh=function(l){switch(typeof l){case"string":case"number":case"object":return JSON.stringify(l);default:return String(l)}},Go=Sh;function $o(){return $o=Object.assign?Object.assign.bind():function(l){for(var u=1;u<arguments.length;u++){var p=arguments[u];for(var d in p)({}).hasOwnProperty.call(p,d)&&(l[d]=p[d])}return l},$o.apply(null,arguments)}var Fo=L.schema,Th={releaseStage:j({},Fo.releaseStage,{defaultValue:function(){return/^localhost(:\d+)?$/.test(window.location.host)?"development":"production"}}),appType:$o({},Fo.appType,{defaultValue:function(){return"browser"}}),logger:j({},Fo.logger,{defaultValue:function(){return typeof console!="undefined"&&typeof console.debug=="function"?Eh():void 0}})},Eh=function(){var l={},u=console.log;return F(["debug","info","warn","error"],function(p){var d=console[p];l[p]=typeof d=="function"?d.bind(console,"[bugsnag]"):u.bind(console,"[bugsnag]")}),l},Ah=function(l,u){return l===void 0&&(l=window),u===void 0&&(u="window onerror"),{load:function(p){if(!p._config.autoDetectErrors||!p._config.enabledErrorTypes.unhandledExceptions)return;function d(b,f,q,v,T){if(q===0&&/Script error\.?/.test(b))p._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z");else{var C={severity:"error",unhandled:!0,severityReason:{type:"unhandledException"}},A;if(T)A=p.Event.create(T,!0,C,u,1),el(A.errors[0].stacktrace,f,q,v);else if(typeof b=="object"&&b!==null&&(!f||typeof f!="string")&&!q&&!v&&!T){var G=b.type?"Event: "+b.type:"Error",J=b.message||b.detail||"";A=p.Event.create({name:G,message:J},!0,C,u,1),A.originalError=b,A.addMetadata(u,{event:b,extraParameters:f})}else A=p.Event.create(b,!0,C,u,1),el(A.errors[0].stacktrace,f,q,v);p._notify(A)}try{m.apply(this,arguments)}catch(Z){}}var m=l.onerror;l.onerror=d}}},el=function(l,u,p,d){l[0]||l.push({});var m=l[0];!m.file&&typeof u=="string"&&(m.file=u),!m.lineNumber&&Bo(p)&&(m.lineNumber=p),m.columnNumber||(Bo(d)?m.columnNumber=d:window.event&&Bo(window.event.errorCharacter)&&(m.columnNumber=window.event.errorCharacter))},Bo=function(l){return typeof l=="number"&&String.call(l)!=="NaN"},Dh,Nh=function(l){l===void 0&&(l=window);var u={load:function(p){if(!(!p._config.autoDetectErrors||!p._config.enabledErrorTypes.unhandledRejections)){var d=function(m){var b=m.reason,f=!1;try{m.detail&&m.detail.reason&&(b=m.detail.reason,f=!0)}catch(T){}var q=!p._config.reportUnhandledPromiseRejectionsAsHandled,v=p.Event.create(b,!1,{severity:"error",unhandled:q,severityReason:{type:"unhandledPromiseRejection"}},"unhandledrejection handler",1,p._logger);f&&F(v.errors[0].stacktrace,Ph(b)),p._notify(v,function(T){if(Qn(T.originalError)&&!T.originalError.stack){var C;T.addMetadata("unhandledRejection handler",(C={},C[Object.prototype.toString.call(T.originalError)]={name:T.originalError.name,message:T.originalError.message,code:T.originalError.code},C))}})};"addEventListener"in l?l.addEventListener("unhandledrejection",d):l.onunhandledrejection=function(m,b){d({detail:{reason:m,promise:b}})},Dh=d}}};return u},Ph=function(l){return function(u){u.file!==l.toString()&&u.method&&(u.method=u.method.replace(/^\s+/,""))}},tl=new Date,_h=function(){tl=new Date},Lh={name:"appDuration",load:function(l){return l.addOnError(function(u){var p=new Date;u.app.duration=p-tl},!0),{reset:_h}}},rl="bugsnag-anonymous-id",Rh=function(l){try{var u=l.localStorage,p=u.getItem(rl);return p&&Ro.isCuid(p)||(p=Ro(),u.setItem(rl,p)),p}catch(d){}},Ih=function(l,u){return l===void 0&&(l=navigator),u===void 0&&(u=window),{load:function(p){var d={locale:l.browserLanguage||l.systemLanguage||l.userLanguage||l.language,userAgent:l.userAgent};u&&u.screen&&u.screen.orientation&&u.screen.orientation.type?d.orientation=u.screen.orientation.type:u&&u.document&&(d.orientation=u.document.documentElement.clientWidth>u.document.documentElement.clientHeight?"landscape":"portrait"),p._config.generateAnonymousId&&(d.id=Rh(u)),p.addOnSession(function(m){m.device=j({},m.device,d),p._config.collectUserIp||nl(m)}),p.addOnError(function(m){m.device=j({},m.device,d,{time:new Date}),p._config.collectUserIp||nl(m)},!0)},configSchema:{generateAnonymousId:{validate:function(p){return p===!0||p===!1},defaultValue:function(){return!0},message:"should be true|false"}}}},nl=function(l){var u=l.getUser();(!u||!u.id)&&l.setUser(l.device.id)},Oh=function(l){return l===void 0&&(l=window),{load:function(u){u.addOnError(function(p){p.context===void 0&&(p.context=l.location.pathname)},!0)}}},Gh=function(l){return l===void 0&&(l=window),{load:function(u){u.addOnError(function(p){p.request&&p.request.url||(p.request=j({},p.request,{url:l.location.href}))},!0)}}},$h={load:function(l){var u=0;l.addOnError(function(p){if(u>=l._config.maxEvents)return l._logger.warn("Cancelling event send due to maxEvents per session limit of "+l._config.maxEvents+" being reached"),!1;u++}),l.resetEventCount=function(){u=0}},configSchema:{maxEvents:{defaultValue:function(){return 10},message:"should be a positive integer \u2264100",validate:function(l){return k(1,100)(l)}}}},al={};al.load=function(l){var u=/^(local-)?dev(elopment)?$/.test(l._config.releaseStage);u||!l._isBreadcrumbTypeEnabled("log")||F(Fh,function(p){var d=console[p];console[p]=function(){for(var m=arguments.length,b=new Array(m),f=0;f<m;f++)b[f]=arguments[f];l.leaveBreadcrumb("Console output",i(b,function(q,v,T){var C="[Unknown value]";try{C=String(v)}catch(A){}if(C==="[object Object]")try{C=JSON.stringify(v)}catch(A){}return q["["+T+"]"]=C,q},{severity:p.indexOf("group")===0?"log":p}),"log"),d.apply(console,b)},console[p]._restore=function(){console[p]=d}})};var Fh=s(["log","debug","info","warn","error"],function(l){return typeof console!="undefined"&&typeof console[l]=="function"}),Bh=(function(){function l(){this.callbacks=[]}var u=l.prototype;return u.onStart=function(d){if(typeof d!="function")throw new Error("RequestTracker onStart callback must be a function");this.callbacks.push(d)},u.start=function(d){var m=this.callbacks.map(function(b){try{return b(d)}catch(f){return console.error("RequestTracker callback error:",f),null}}).filter(function(b){return b&&typeof b=="object"});return{onRequestEnd:function(b){m.forEach(function(f){if(typeof f.onRequestEnd=="function")try{f.onRequestEnd(b)}catch(q){console.error("RequestTracker onRequestEnd callback error:",q)}})},extraRequestHeaders:m.map(function(b){return b.extraRequestHeaders}).filter(function(b){return b&&typeof b=="object"}).reduce(function(b,f){return Object.assign(b,f)},{})}},u._reset=function(){this.callbacks=[]},l})(),zo=Bh,ol=function(l){if(!l)return{};var u={};if(typeof l.entries=="function")for(var p=l.entries(),d=p.next();!d.done;){var m=d.value,b=m[0],f=m[1];u[b]=f,d=p.next()}else l.forEach&&l.forEach(function(q,v){u[v]=q});return u};function zh(l,u){if(u===void 0&&(u={}),!(!("fetch"in l)||l.fetch.polyfill)){if(!l.__bugsnag_fetch_tracker__){var p=new zo,d=l.fetch;l.fetch=function(b,f){f===void 0&&(f={});var q=null,v="GET";b&&typeof b=="object"?(q=b.url,f&&"method"in f?v=f.method:b&&"method"in b&&(v=b.method)):(q=b,f&&"method"in f&&(v=f.method)),v===void 0&&(v="GET");var T={};f&&f.headers&&(f.headers instanceof Headers?T=ol(f.headers):typeof f.headers=="object"&&(T=f.headers));var C=Date.now(),A={url:String(q),method:String(v),startTime:C,type:"fetch",input:b,headers:T,body:f?f.body:void 0},G=p.start(A),J=G.onRequestEnd;return d.call.apply(d,[this].concat(Array.prototype.slice.call(arguments))).then(function(Z){return J({endTime:Date.now(),status:Z.status,state:"success",headers:ol(Z.headers)}),Z},function(Z){throw J({endTime:Date.now(),state:"error",error:Z}),Z})},l.__bugsnag_fetch_tracker__=p}return l.__bugsnag_fetch_tracker__}}var il=zh,Uh=function(l){if(!l)return{};var u=l.trim().split(/[\r\n]+/),p={};return u.forEach(function(d){var m=d.split(": "),b=m.shift(),f=m.join(": ");p[b]=f}),p},sl=function(u){var p=u.response,d=u.responseType;if(p!=null)switch(d){case"arraybuffer":case"blob":return"[Binary Data]";case"document":return"[Document]";case"json":try{return JSON.stringify(p)}catch(m){return"[Unserializable JSON]"}default:return String(p)}};function Hh(l,u){if(u===void 0&&(u={}),!(!("addEventListener"in l.XMLHttpRequest.prototype)||!("WeakMap"in l))){if(!l.__bugsnag_xhr_tracker__){var p=new zo,d=new WeakMap,m=new WeakMap,b=l.XMLHttpRequest.prototype.open,f=l.XMLHttpRequest.prototype.send,q=l.XMLHttpRequest.prototype.setRequestHeader;l.XMLHttpRequest.prototype.open=function(T,C){this&&d.set(this,{method:String(T),url:String(C)}),b.apply(this,arguments)},l.XMLHttpRequest.prototype.setRequestHeader=function(T,C){if(this){var A=d.get(this);A&&(A.headers=A.headers||{},A.headers[String(T)]=(A.headers[String(T)]||"")+String(C))}q.apply(this,arguments)},l.XMLHttpRequest.prototype.send=function(T){var C=this,A=d.get(this);if(A){var G=m.get(this);G&&(this.removeEventListener("load",G.load),this.removeEventListener("error",G.error));var J=Date.now(),Z={url:A.url,method:A.method,startTime:J,type:"xmlhttprequest",body:T,headers:A.headers},B=p.start(Z),D=B.onRequestEnd,V=function(){return Uh(C.getAllResponseHeaders())},ce=function(){D({endTime:Date.now(),status:C.status,state:"success",headers:V(),body:sl(C)})},Ce=function(){D({endTime:Date.now(),state:"error",headers:V(),body:sl(C)})};this.addEventListener("load",ce),this.addEventListener("error",Ce),this&&m.set(this,{load:ce,error:Ce})}f.apply(this,arguments)},l.__bugsnag_xhr_tracker__=p}return l.__bugsnag_xhr_tracker__}}var ll=Hh;function cl(l,u){if(u===void 0&&(u=[]),!l||typeof l!="string")return!0;var p=l.replace(/\?.*$/,"");return w(u,p)}function Vh(l,u){u===void 0&&(u=[]);var p=[l._config.endpoints.notify,l._config.endpoints.sessions].concat(u).filter(Boolean);return function(d){return cl(d,p)}}function Kh(l){return l&&Date.now()-l}var ul={shouldIgnoreUrl:cl,createUrlFilter:Vh,getDuration:Kh},Uo="request",Wh=function(l,u){l===void 0&&(l=[]),u===void 0&&(u=window);var p=[],d={load:function(m){if(!m._isBreadcrumbTypeEnabled("request"))return;var b=m.getPlugin("requestTracker");if(!b)try{var f=a({}),q=f.createRequestTrackerPlugin,v=q(l,u);m._loadPlugin(v),b=m.getPlugin("requestTracker")}catch(C){m._logger.warn("Failed to auto-load request tracker, falling back to direct monkey-patching:",C.message)}if(b)return T(b);function T(C){var A=C.fetchTracker,G=C.xhrTracker,J=C.urlFilter,Z=C.getDuration,B=function(D){if(!J(D.url))return{onRequestEnd:function(V){var ce=Z(D.startTime),Ce={method:D.method,status:V.status,url:D.url,duration:ce},me=D.type==="fetch"?"fetch()":"XMLHttpRequest";V.state==="error"?m.leaveBreadcrumb(me+" error",{method:D.method,url:D.url,duration:ce},Uo):V.status>=400?m.leaveBreadcrumb(me+" failed",Ce,Uo):m.leaveBreadcrumb(me+" succeeded",Ce,Uo)}}};A&&(A.onStart(B),p.push(A._restore)),G&&(G.onStart(B),p.push(G._restore))}}};return d},dl={};dl=function(l){l===void 0&&(l=window);var u={load:function(p){if("addEventListener"in l&&p._isBreadcrumbTypeEnabled("navigation")){var d=function(m){return function(){return p.leaveBreadcrumb(m,{},"navigation")}};l.addEventListener("pagehide",d("Page hidden"),!0),l.addEventListener("pageshow",d("Page shown"),!0),l.addEventListener("load",d("Page loaded"),!0),l.document.addEventListener("DOMContentLoaded",d("DOMContentLoaded"),!0),l.addEventListener("load",function(){return l.addEventListener("popstate",d("Navigated back"),!0)}),l.addEventListener("hashchange",function(m){var b=m.oldURL?{from:jn(m.oldURL,l),to:jn(m.newURL,l),state:gl(l)}:{to:jn(l.location.href,l)};p.leaveBreadcrumb("Hash changed",b,"navigation")},!0),l.history.pushState&&pl(p,l.history,"pushState",l,!0),l.history.replaceState&&pl(p,l.history,"replaceState",l)}}};return u};var jn=function(l,u){var p=u.document.createElement("A");return p.href=l,""+p.pathname+p.search+p.hash},Qh=function(l,u,p,d){var m=jn(l.location.href,l);return{title:p,state:u,prevState:gl(l),to:d||m,from:m}},pl=function(l,u,p,d,m){m===void 0&&(m=!1);var b=u[p];u[p]=function(f,q,v){l.leaveBreadcrumb("History "+p,Qh(d,f,q,v),"navigation"),m&&typeof l.resetEventCount=="function"&&l.resetEventCount(),b.apply(u,[f,q].concat(v!==void 0?v:[]))}},gl=function(l){try{return l.history.state}catch(u){}},jh=function(l){return l===void 0&&(l=window),{load:function(u){"addEventListener"in l&&u._isBreadcrumbTypeEnabled("user")&&l.addEventListener("click",function(p){var d,m;try{d=Xh(p.target),m=hl(p.target,l)}catch(b){d="[hidden]",m="[hidden]",u._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z")}u.leaveBreadcrumb("UI click",{targetText:d,targetSelector:m},"user")},!0)}}},Yh=/^\s*([^\s][\s\S]{0,139}[^\s])?\s*/;function Xh(l){var u=l.textContent||l.innerText||"";return!u&&(l.type==="submit"||l.type==="button")&&(u=l.value),u=u.replace(Yh,"$1"),u.length>140?u.slice(0,135)+"(...)":u}function hl(l,u){var p=[l.tagName];if(l.id&&p.push("#"+l.id),l.className&&l.className.length&&p.push("."+l.className.split(" ").join(".")),!u.document.querySelectorAll||!Array.prototype.indexOf)return p.join("");try{if(u.document.querySelectorAll(p.join("")).length===1)return p.join("")}catch(m){return p.join("")}if(l.parentNode.childNodes.length>1){var d=Array.prototype.indexOf.call(l.parentNode.childNodes,l)+1;p.push(":nth-child("+d+")")}return u.document.querySelectorAll(p.join("")).length===1?p.join(""):l.parentNode?hl(l.parentNode,u)+" > "+p.join(""):p.join("")}var ml=200,fl=5e5,Zh=function(l,u){return l===void 0&&(l=document),u===void 0&&(u=window),{load:function(p){if(!p._config.trackInlineScripts)return;var d=u.location.href,m="",b=!!l.attachEvent,f=b?l.readyState==="complete":l.readyState!=="loading",q=function(){return l.documentElement.outerHTML};m=q();var v=l.onreadystatechange;l.onreadystatechange=function(){l.readyState==="interactive"&&(m=q(),f=!0);try{v.apply(this,arguments)}catch(D){}};var T=null,C=function(D){T=D},A=function(){var D=l.currentScript||T;if(!D&&!f){var V=l.scripts||l.getElementsByTagName("script");D=V[V.length-1]}return D},G=function(D){(!f||!m)&&(m=q());var V=["<!-- DOC START -->"].concat(m.split(`
`)),ce=D-1,Ce=Math.max(ce-3,0),me=Math.min(ce+3,V.length);return i(V.slice(Ce,me),function(Oe,it,Ye){return Oe[Ce+1+Ye]=it.length<=ml?it:it.substr(0,ml),Oe},{})};p.addOnError(function(D){D.errors[0].stacktrace=s(D.errors[0].stacktrace,function(Oe){return!/__trace__$/.test(Oe.method)});var V=D.errors[0].stacktrace[0],ce=function(Oe){return Oe.replace(/#.*$/,"").replace(/\?.*$/,"")};if(!(V&&V.file&&ce(V.file)!==ce(d))){var Ce=A();if(Ce){var me=Ce.innerHTML;D.addMetadata("script","content",me.length<=fl?me:me.substr(0,fl)),V&&V.lineNumber&&(V.code=G(V.lineNumber))}}},!0);var J=F(["setTimeout","setInterval","setImmediate","requestAnimationFrame"],function(D){return Ho(u,D,function(V){return B(V,function(ce){return{get:function(){return ce[0]},replace:function(Ce){ce[0]=Ce}}})})}),Z=J[0];F(["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload","MediaSource","MediaRecorder","MediaStream","ServiceWorker","ServiceWorkerContainer","ServiceWorkerRegistration","BroadcastChannel","RTCPeerConnection","RTCDataChannel","AbortSignal","MediaQueryList","ShadowRoot","FontFaceSet","Animation","PermissionStatus","PaymentRequest","VideoTrackList"],function(D){!u[D]||!u[D].prototype||!Object.prototype.hasOwnProperty.call(u[D].prototype,"addEventListener")||(Ho(u[D].prototype,"addEventListener",function(V){return B(V,bl)}),Ho(u[D].prototype,"removeEventListener",function(V){return B(V,bl,!0)}))});function B(D,V,ce){return ce===void 0&&(ce=!1),function(){for(var Ce=arguments.length,me=new Array(Ce),Oe=0;Oe<Ce;Oe++)me[Oe]=arguments[Oe];try{var it=V(me),Ye=it.get();if(ce&&D.apply(this,me),typeof Ye!="function")return D.apply(this,me);if(Ye.__trace__)it.replace(Ye.__trace__);else{var Wo=A();Ye.__trace__=function(){C(Wo),Z(function(){C(null)},0);for(var wl=arguments.length,kl=new Array(wl),Yn=0;Yn<wl;Yn++)kl[Yn]=arguments[Yn];var cm=Ye.apply(this,kl);return C(null),cm},Ye.__trace__.__trace__=Ye.__trace__,it.replace(Ye.__trace__)}}catch(Qo){}if(D.apply)return D.apply(this,me);switch(me.length){case 1:return D(me[0]);case 2:return D(me[0],me[1]);default:return D()}}}},configSchema:{trackInlineScripts:{validate:function(p){return p===!0||p===!1},defaultValue:function(){return!0},message:"should be true|false"}}}};function Ho(l,u,p){var d=l[u];if(!d)return d;var m=p(d);return l[u]=m,d}function bl(l){var u=!!l[1]&&typeof l[1].handleEvent=="function";return{get:function(){return u?l[1].handleEvent:l[1]},replace:function(p){u?l[1].handleEvent=p:l[1]=p}}}var Jh={load:function(l){l._sessionDelegate=em}},em={startSession:function(l,u){var p=l;return p._session=u,p._pausedSession=null,p._config.enabledReleaseStages!==null&&!w(p._config.enabledReleaseStages,p._config.releaseStage)?(p._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"),p):(p._delivery.sendSession({notifier:p._notifier,device:u.device,app:u.app,sessions:[{id:u.id,startedAt:u.startedAt,user:u._user}]}),p)},resumeSession:function(l){return l._session?l:l._pausedSession?(l._session=l._pausedSession,l._pausedSession=null,l):l.startSession()},pauseSession:function(l){l._pausedSession=l._session,l._session=null}},tm={load:function(l){l._config.collectUserIp||l.addOnError(function(u){u._user&&typeof u._user.id=="undefined"&&delete u._user.id,u._user=j({id:"[REDACTED]"},u._user),u.request=j({clientIp:"[REDACTED]"},u.request)})},configSchema:{collectUserIp:{defaultValue:function(){return!0},message:"should be true|false",validate:function(l){return l===!0||l===!1}}}},Vo={};Vo={load:function(l){l.addOnError(function(u){var p=i(u.errors,function(d,m){return d.concat(m.stacktrace)},[]);F(p,function(d){d.file=rm(d.file)})})}};var rm=Vo._strip=function(l){return typeof l=="string"?l.replace(/\?.*$/,"").replace(/#.*$/,""):l},yr={},yl=["events.[].metaData","events.[].breadcrumbs.[].metaData","events.[].request","events.[].response"];yr.event=function(l,u){var p=dt(l,null,null,{redactedPaths:yl,redactedKeys:u});return p.length>1e6&&(l.events[0]._metadata={notifier:`WARNING!
Serialized payload was `+p.length/1e6+`MB (limit = 1MB)
metadata was removed`},p=dt(l,null,null,{redactedPaths:yl,redactedKeys:u})),p},yr.session=function(l,u){var p=dt(l,null,null);return p};var Ko={};Ko=function(l,u){return u===void 0&&(u=window),{sendEvent:function(p,d){if(d===void 0&&(d=function(){}),l._config.endpoints.notify===null){var m=new Error("Event not sent due to incomplete endpoint configuration");return d(m)}var b=xl(l._config,"notify","4",u),f=yr.event(p,l._config.redactedKeys),q=new u.XDomainRequest;q.onload=function(){d(null)},q.onerror=function(){var v=new Error("Event failed to send");l._logger.error("Event failed to send\u2026",v),f.length>1e6&&l._logger.warn("Event oversized ("+(f.length/1e6).toFixed(2)+" MB)"),d(v)},q.open("POST",b),setTimeout(function(){try{q.send(f)}catch(v){l._logger.error(v),d(v)}},0)},sendSession:function(p,d){if(d===void 0&&(d=function(){}),l._config.endpoints.sessions===null){var m=new Error("Session not sent due to incomplete endpoint configuration");return d(m)}var b=xl(l._config,"sessions","1",u),f=new u.XDomainRequest;f.onload=function(){d(null)},f.open("POST",b),setTimeout(function(){try{f.send(yr.session(p,l._config.redactedKeys))}catch(q){l._logger.error(q),d(q)}},0)}}};var xl=function(l,u,p,d){var m=JSON.parse(JSON.stringify(new Date)),b=nm(l.endpoints[u],d.location.protocol);return b+"?apiKey="+encodeURIComponent(l.apiKey)+"&payloadVersion="+p+"&sentAt="+encodeURIComponent(m)},nm=Ko._matchPageProtocol=function(l,u){return u==="http:"?l.replace(/^https:/,"http:"):l};function vl(l,u){if(l.isSecureContext&&l.crypto&&l.crypto.subtle&&l.crypto.subtle.digest&&typeof TextEncoder=="function"){var p=new TextEncoder().encode(u);return l.crypto.subtle.digest("SHA-1",p).then(function(d){var m=Array.from(new Uint8Array(d)),b=m.map(function(f){return f.toString(16).padStart(2,"0")}).join("");return"sha1 "+b})}return Promise.resolve()}var am=function(l,u){return u===void 0&&(u=window),{sendEvent:function(p,d){d===void 0&&(d=function(){});try{var m=l._config.endpoints.notify;if(m===null){var b=new Error("Event not sent due to incomplete endpoint configuration");return d(b)}var f=new u.XMLHttpRequest,q=yr.event(p,l._config.redactedKeys);f.onreadystatechange=function(){if(f.readyState===u.XMLHttpRequest.DONE){var v=f.status;if(v===0||v>=400){var T=new Error("Request failed with status "+v);l._logger.error("Event failed to send\u2026",T),q.length>1e6&&l._logger.warn("Event oversized ("+(q.length/1e6).toFixed(2)+" MB)"),d(T)}else d(null)}},f.open("POST",m),f.setRequestHeader("Content-Type","application/json"),f.setRequestHeader("Bugsnag-Api-Key",p.apiKey||l._config.apiKey),f.setRequestHeader("Bugsnag-Payload-Version","4"),f.setRequestHeader("Bugsnag-Sent-At",new Date().toISOString()),l._config.sendPayloadChecksums&&typeof Promise!="undefined"&&Promise.toString().indexOf("[native code]")!==-1?vl(u,q).then(function(v){v&&f.setRequestHeader("Bugsnag-Integrity",v),f.send(q)}).catch(function(v){l._logger.error(v),f.send(q)}):f.send(q)}catch(v){l._logger.error(v)}},sendSession:function(p,d){d===void 0&&(d=function(){});try{var m=l._config.endpoints.sessions;if(m===null){var b=new Error("Session not sent due to incomplete endpoint configuration");return d(b)}var f=new u.XMLHttpRequest,q=yr.session(p,l._config.redactedKeys);f.onreadystatechange=function(){if(f.readyState===u.XMLHttpRequest.DONE){var v=f.status;if(v===0||v>=400){var T=new Error("Request failed with status "+v);l._logger.error("Session failed to send\u2026",T),d(T)}else d(null)}},f.open("POST",m),f.setRequestHeader("Content-Type","application/json"),f.setRequestHeader("Bugsnag-Api-Key",l._config.apiKey),f.setRequestHeader("Bugsnag-Payload-Version","1"),f.setRequestHeader("Bugsnag-Sent-At",new Date().toISOString()),l._config.sendPayloadChecksums&&typeof Promise!="undefined"&&Promise.toString().indexOf("[native code]")!==-1?vl(u,q).then(function(v){v&&f.setRequestHeader("Bugsnag-Integrity",v),f.send(q)}).catch(function(v){l._logger.error(v),f.send(q)}):f.send(q)}catch(v){l._logger.error(v)}}}},jt={},om="Bugsnag JavaScript",im="9.0.0",sm="https://github.com/bugsnag/bugsnag-js",lm=j({},L.schema,Th),_e={_client:null,createClient:function(l){typeof l=="string"&&(l={apiKey:l}),l||(l={});var u=[Lh,Ih(),Oh(),Gh(),$h,Jh,tm,Vo,Ah(),Nh(),dl(),jh(),Wh(),al,Zh()],p=new Go(l,lm,u,{name:om,version:im,url:sm});return p._setDelivery(window.XDomainRequest?Ko:am),p._logger.debug("Loaded!"),p.leaveBreadcrumb("Bugsnag loaded",{},"state"),p._config.autoTrackSessions?p.startSession():p},start:function(l){return _e._client?(_e._client._logger.warn("Bugsnag.start() was called more than once. Ignoring."),_e._client):(_e._client=_e.createClient(l),_e._client)},isStarted:function(){return _e._client!=null}};return F(["resetEventCount"].concat(h(Go.prototype)),function(l){/^_/.test(l)||(_e[l]=function(){if(!_e._client)return console.log("Bugsnag."+l+"() was called before Bugsnag.start()");_e._client._depth+=1;var u=_e._client[l].apply(_e._client,arguments);return _e._client._depth-=1,u})}),jt=_e,jt.Client=Go,jt.Event=Po,jt.Session=Io,jt.Breadcrumb=_o,jt.default=_e,jt})});var Yt;function ql(e){Yt=e}function Sl(e,t){Yt==null||Yt.notify(e,t)}function Cl(e,t,r){Yt==null||Yt.leaveBreadcrumb(e,t,r)}function Yo(){var e;return(e=window.__dcgIframeConnect)!=null&&e.shouldSuppressProgrammaticFocus?window.__dcgIframeConnect.shouldSuppressProgrammaticFocus():!1}var xm=/lang=[A-Za-z]+/,vm=/(cl|learn|help).desmos.com/,wm=/^(?:https?:)?(?:\/\/)?([^\s:\/\?]+)/i,km=/(^desmos\.com$)|(\.desmos.com$)/;function qm(e){var n;let[t,r]=(n=wm.exec(e))!=null?n:[];return r}function Xo(e){let t=qm(e);return t?km.test(t):!0}function Tl(e,t){if(e===""||!t||xm.test(e)||vm.test(e)||!Xo(e))return e;let r=encodeURIComponent(t);if(e.length){let n=e.split("#"),a=/\?/.test(e)?`${n[0]}&lang=${r}`:`${n[0]}?lang=${r}`;return n[1]!==void 0?`${a}#${n[1]}`:a}else return`?lang=${r}`}function El(e,t){var n;let r="";return t!==void 0?r=t:typeof window!="undefined"&&window.location&&window.location.search&&(r=(n=new URLSearchParams(window.location.search).get("lang"))!=null?n:""),Tl(e,r)}var wt=[],Sm=Object.getPrototypeOf,Xn=wt.slice,Cm=wt.flat?function(e){return wt.flat.call(e)}:function(e){return wt.concat.apply([],e)},$l=wt.push,Mm=wt.indexOf,ta={},Fl=ta.toString,Zn=ta.hasOwnProperty,Bl=Zn.toString,Tm=Bl.call(Object),xe={},kt=function(t){return typeof t=="function"&&typeof t.nodeType!="number"&&typeof t.item!="function"},qr=function(t){return t!=null&&t===t.window},ye=window.document;function ra(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?ta[Fl.call(e)]||"object":typeof e}var zl="3.6.0",x=function(e,t){return new x.fn.init(e,t)};x.fn=x.prototype={jquery:zl,constructor:x,length:0,toArray:function(){return Xn.call(this)},get:function(e){return e==null?Xn.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return x.each(this,e)},map:function(e){return this.pushStack(x.map(this,function(t,r){return e.call(t,r,t)}))},slice:function(){return this.pushStack(Xn.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(x.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(x.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,r=+e+(e<0?t:0);return this.pushStack(r>=0&&r<t?[this[r]]:[])},end:function(){return this.prevObject||this.constructor()},push:$l,sort:wt.sort,splice:wt.splice};x.extend=x.fn.extend=function(){var e,t,r,n,a,o,i=arguments[0]||{},s=1,c=arguments.length,g=!1;for(typeof i=="boolean"&&(g=i,i=arguments[s]||{},s++),typeof i!="object"&&!kt(i)&&(i={}),s===c&&(i=this,s--);s<c;s++)if((e=arguments[s])!=null)for(t in e)n=e[t],!(t==="__proto__"||i===n)&&(g&&n&&(x.isPlainObject(n)||(a=Array.isArray(n)))?(r=i[t],a&&!Array.isArray(r)?o=[]:!a&&!x.isPlainObject(r)?o={}:o=r,a=!1,i[t]=x.extend(g,o,n)):n!==void 0&&(i[t]=n));return i};x.extend({expando:"jQuery"+(zl+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,r;return!e||Fl.call(e)!=="[object Object]"?!1:(t=Sm(e),t?(r=Zn.call(t,"constructor")&&t.constructor,typeof r=="function"&&Bl.call(r)===Tm):!0)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},each:function(e,t){var r,n=0;if(Zo(e))for(r=e.length;n<r&&t.call(e[n],n,e[n])!==!1;n++);else for(n in e)if(t.call(e[n],n,e[n])===!1)break;return e},makeArray:function(e,t){var r=t||[];return e!=null&&(Zo(Object(e))?x.merge(r,typeof e=="string"?[e]:e):$l.call(r,e)),r},inArray:function(e,t,r){return t==null?-1:Mm.call(t,e,r)},merge:function(e,t){for(var r=+t.length,n=0,a=e.length;n<r;n++)e[a++]=t[n];return e.length=a,e},grep:function(e,t,r){for(var n,a=[],o=0,i=e.length,s=!r;o<i;o++)n=!t(e[o],o),n!==s&&a.push(e[o]);return a},map:function(e,t,r){var n,a,o=0,i=[];if(Zo(e))for(n=e.length;o<n;o++)a=t(e[o],o,r),a!=null&&i.push(a);else for(o in e)a=t(e[o],o,r),a!=null&&i.push(a);return Cm(i)},guid:1,support:xe});typeof Symbol=="function"&&(x.fn[Symbol.iterator]=wt[Symbol.iterator]);x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ta["[object "+t+"]"]=t.toLowerCase()});function Zo(e){var t=!!e&&"length"in e&&e.length,r=ra(e);return kt(e)||qr(e)?!1:r==="array"||t===0||typeof t=="number"&&t>0&&t-1 in e}var Em=(function(e){var t,r,n,a,o,i,s,c=e.document,g=[],h=g.push,y=g.push,w=g.slice,k=/HTML$/i,_=/^[^{]+\{\s*\[native \w/,I=function(){n()};try{y.apply(g=w.call(c.childNodes),c.childNodes),g[c.childNodes.length].nodeType}catch(P){y={apply:g.length?function($,K){h.apply($,w.call(K))}:function($,K){for(var le=$.length,E=0;$[le++]=K[E++];);$.length=le-1}}}function S(){}function L(P){var $=a.createElement("fieldset");try{return!!P($)}catch(K){return!1}finally{$.parentNode&&$.parentNode.removeChild($),$=null}}return t=S.support={},r=S.isXML=function(P){var $=P&&P.namespaceURI,K=P&&(P.ownerDocument||P).documentElement;return!k.test($||K&&K.nodeName||"HTML")},n=S.setDocument=function(P){var $,K,le=P?P.ownerDocument||P:c;return le==a||le.nodeType!==9||!le.documentElement||(a=le,o=a.documentElement,i=!r(a),c!=a&&(K=a.defaultView)&&K.top!==K&&(K.addEventListener?K.addEventListener("unload",I,!1):K.attachEvent&&K.attachEvent("onunload",I)),t.attributes=L(function(E){return E.className="i",!E.getAttribute("className")}),t.getElementsByTagName=L(function(E){return E.appendChild(a.createComment("")),!E.getElementsByTagName("*").length}),$=_.test(o.compareDocumentPosition),s=$||_.test(o.contains)?function(E,F){var j=E.nodeType===9?E.documentElement:E,M=F&&F.parentNode;return E===M||!!(M&&M.nodeType===1&&(j.contains?j.contains(M):E.compareDocumentPosition&&E.compareDocumentPosition(M)&16))}:function(E,F){if(F){for(;F=F.parentNode;)if(F===E)return!0}return!1}),a},S.contains=function(P,$){return(P.ownerDocument||P)!=a&&n(P),s(P,$)},n(),t.sortDetached=L(function(P){return P.compareDocumentPosition(a.createElement("fieldset"))&1}),S})(window);x.contains=Em.contains;function xr(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var Ul,Am=x.fn.init=function(e,t,r){if(!e)return this;if(r=r||Ul,typeof e=="string")throw new Error("$(string) implementation has been removed");if(e.nodeType)return this[0]=e,this.length=1,this;if(kt(e))throw new Error("$(function) implementation has been removed");return x.makeArray(e,this)};Am.prototype=x.fn;Ul=x(ye);var ei=/[^\x20\t\r\n\f]+/g,rn=function(e,t,r,n,a,o,i){var s=0,c=e.length,g=r==null;if(ra(r)==="object"){a=!0;for(s in r)rn(e,t,s,r[s],!0,o,i)}else if(n!==void 0&&(a=!0,kt(n)||(i=!0),g&&(i?(t.call(e,n),t=null):(g=t,t=function(h,y,w){return g.call(x(h),w)})),t))for(;s<c;s++)t(e[s],r,i?n:n.call(e[s],s,t(e[s],r)));return a?e:g?t.call(e):c?t(e[0],r):o},Dm=/^-ms-/,Nm=/-([a-z])/g;function Pm(e,t){return t.toUpperCase()}function xt(e){return e.replace(Dm,"ms-").replace(Nm,Pm)}var Jn=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function nn(){this.expando=x.expando+nn.uid++}nn.uid=1;nn.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Jn(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,r){var n,a=this.cache(e);if(typeof t=="string")a[xt(t)]=r;else for(n in t)a[xt(n)]=t[n];return a},get:function(e,t){return t===void 0?this.cache(e):e[this.expando]&&e[this.expando][xt(t)]},access:function(e,t,r){return t===void 0||t&&typeof t=="string"&&r===void 0?this.get(e,t):(this.set(e,t,r),r!==void 0?r:t)},remove:function(e,t){var r,n=e[this.expando];if(n!==void 0){if(t!==void 0)for(Array.isArray(t)?t=t.map(xt):(t=xt(t),t=t in n?[t]:t.match(ei)||[]),r=t.length;r--;)delete n[t[r]];(t===void 0||x.isEmptyObject(n))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return t!==void 0&&!x.isEmptyObject(t)}};var se=new nn,vt=new nn,_m=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Lm=/[A-Z]/g;function Rm(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:_m.test(e)?JSON.parse(e):e}function Al(e,t,r){var n;if(r===void 0&&e.nodeType===1)if(n="data-"+t.replace(Lm,"-$&").toLowerCase(),r=e.getAttribute(n),typeof r=="string"){try{r=Rm(r)}catch(a){}vt.set(e,t,r)}else r=void 0;return r}x.extend({hasData:function(e){return vt.hasData(e)||se.hasData(e)},data:function(e,t,r){return vt.access(e,t,r)},removeData:function(e,t){vt.remove(e,t)},_data:function(e,t,r){return se.access(e,t,r)},_removeData:function(e,t){se.remove(e,t)}});x.fn.extend({data:function(e,t){var r,n,a,o=this[0],i=o&&o.attributes;if(e===void 0){if(this.length&&(a=vt.get(o),o.nodeType===1&&!se.get(o,"hasDataAttrs"))){for(r=i.length;r--;)i[r]&&(n=i[r].name,n.indexOf("data-")===0&&(n=xt(n.slice(5)),Al(o,n,a[n])));se.set(o,"hasDataAttrs",!0)}return a}return typeof e=="object"?this.each(function(){vt.set(this,e)}):rn(this,function(s){var c;if(o&&s===void 0)return c=vt.get(o,e),c!==void 0||(c=Al(o,e),c!==void 0)?c:void 0;this.each(function(){vt.set(this,e,s)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){vt.remove(this,e)})}});var Hl=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,na=new RegExp("^(?:([+-])=|)("+Hl+")([a-z%]*)$","i"),Lt=["Top","Right","Bottom","Left"],vr=ye.documentElement,Vl=function(e){return x.contains(e.ownerDocument,e)},Im={composed:!0};vr.getRootNode&&(Vl=function(e){return x.contains(e.ownerDocument,e)||e.getRootNode(Im)===e.ownerDocument});function Om(e,t,r,n){var a,o,i=20,s=n?function(){return n.cur()}:function(){return x.css(e,t,"")},c=s(),g=r&&r[3]||(x.cssNumber[t]?"":"px"),h=e.nodeType&&(x.cssNumber[t]||g!=="px"&&+c)&&na.exec(x.css(e,t));if(h&&h[3]!==g){for(c=c/2,g=g||h[3],h=+c||1;i--;)x.style(e,t,h+g),(1-o)*(1-(o=s()/c||.5))<=0&&(i=0),h=h/o;h=h*2,x.style(e,t,h+g),r=r||[]}return r&&(h=+h||+c||0,a=r[1]?h+(r[1]+1)*r[2]:+r[2],n&&(n.unit=g,n.start=h,n.end=a)),a}var Jo=/^(?:checkbox|radio)$/i;(function(){var e=ye.createDocumentFragment(),t=e.appendChild(ye.createElement("div")),r=ye.createElement("input");r.setAttribute("type","radio"),r.setAttribute("checked","checked"),r.setAttribute("name","t"),t.appendChild(r),xe.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",xe.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,t.innerHTML="<option></option>",xe.option=!!t.lastChild})();var Dl=/^([^.]*)(?:\.(.+)|)/;function wr(){return!0}function kr(){return!1}function Gm(e,t){return e===$m()==(t==="focus")}function $m(){try{return ye.activeElement}catch(e){}}function ti(e,t,r,n,a,o){var i,s;if(typeof t=="object"){typeof r!="string"&&(n=n||r,r=void 0);for(s in t)ti(e,s,r,n,t[s],o);return e}if(n==null&&a==null?(a=r,n=r=void 0):a==null&&(typeof r=="string"?(a=n,n=void 0):(a=n,n=r,r=void 0)),a===!1)a=kr;else if(!a)return e;return o===1&&(i=a,a=function(c){return x().off(c),i.apply(this,arguments)},a.guid=i.guid||(i.guid=x.guid++)),e.each(function(){x.event.add(this,t,a,n,r)})}x.event={global:{},add:function(e,t,r,n,a){var o,i,s,c,g,h,y,w,k,_,I,S=se.get(e);if(Jn(e)){if(r.handler&&(o=r,r=o.handler,a=o.selector),a)throw new Error("Support for event delegation has been removed");for(r.guid||(r.guid=x.guid++),(c=S.events)||(c=S.events=Object.create(null)),(i=S.handle)||(i=S.handle=function(L){return typeof x!="undefined"&&x.event.triggered!==L.type?x.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(ei)||[""],g=t.length;g--;)if(s=Dl.exec(t[g])||[],k=I=s[1],_=(s[2]||"").split(".").sort(),!!k){if(y=x.event.special[k]||{},k=(a?y.delegateType:y.bindType)||k,y=x.event.special[k]||{},h=x.extend({type:k,origType:I,data:n,handler:r,guid:r.guid,selector:a,namespace:_.join(".")},o),(w=c[k])||(w=c[k]=[],w.delegateCount=0,(!y.setup||y.setup.call(e,n,_,i)===!1)&&e.addEventListener&&e.addEventListener(k,i)),y.add&&(y.add.call(e,h),h.handler.guid||(h.handler.guid=r.guid)),a)throw new Error("Support for event delegation has been removed");w.push(h),x.event.global[k]=!0}}},remove:function(e,t,r,n,a){var o,i,s,c,g,h,y,w,k,_,I,S=se.hasData(e)&&se.get(e);if(!(!S||!(c=S.events))){for(t=(t||"").match(ei)||[""],g=t.length;g--;){if(s=Dl.exec(t[g])||[],k=I=s[1],_=(s[2]||"").split(".").sort(),!k){for(k in c)x.event.remove(e,k+t[g],r,n,!0);continue}for(y=x.event.special[k]||{},k=(n?y.delegateType:y.bindType)||k,w=c[k]||[],s=s[2]&&new RegExp("(^|\\.)"+_.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=o=w.length;o--;)h=w[o],(a||I===h.origType)&&(!r||r.guid===h.guid)&&(!s||s.test(h.namespace))&&(!n||n===h.selector||n==="**"&&h.selector)&&(w.splice(o,1),h.selector&&w.delegateCount--,y.remove&&y.remove.call(e,h));i&&!w.length&&((!y.teardown||y.teardown.call(e,_,S.handle)===!1)&&x.removeEvent(e,k,S.handle),delete c[k])}x.isEmptyObject(c)&&se.remove(e,"handle events")}},dispatch:function(e){var t,r,n,a,o,i,s=new Array(arguments.length),c=x.event.fix(e),g=(se.get(this,"events")||Object.create(null))[c.type]||[],h=x.event.special[c.type]||{};for(s[0]=c,t=1;t<arguments.length;t++)s[t]=arguments[t];if(c.delegateTarget=this,!(h.preDispatch&&h.preDispatch.call(this,c)===!1)){for(i=x.event.handlers.call(this,c,g),t=0;(a=i[t++])&&!c.isPropagationStopped();)for(c.currentTarget=a.elem,r=0;(o=a.handlers[r++])&&!c.isImmediatePropagationStopped();)(!c.rnamespace||o.namespace===!1||c.rnamespace.test(o.namespace))&&(c.handleObj=o,c.data=o.data,n=((x.event.special[o.origType]||{}).handle||o.handler).apply(a.elem,s),n!==void 0&&(c.result=n)===!1&&(c.preventDefault(),c.stopPropagation()));return h.postDispatch&&h.postDispatch.call(this,c),c.result}},handlers:function(e,t){var r=[],n=t.delegateCount,a=e.target;if(n)throw new Error("Support for event delegtaion has been removed");return a=this,n<t.length&&r.push({elem:a,handlers:t.slice(n)}),r},addProp:function(e,t){Object.defineProperty(x.Event.prototype,e,{enumerable:!0,configurable:!0,get:kt(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(r){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:r})}})},fix:function(e){return e[x.expando]?e:new x.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Jo.test(t.type)&&t.click&&xr(t,"input")&&ea(t,"click",wr),!1},trigger:function(e){var t=this||e;return Jo.test(t.type)&&t.click&&xr(t,"input")&&ea(t,"click"),!0},_default:function(e){var t=e.target;return Jo.test(t.type)&&t.click&&xr(t,"input")&&se.get(t,"click")||xr(t,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}};function ea(e,t,r){if(!r){se.get(e,t)===void 0&&x.event.add(e,t,wr);return}se.set(e,t,!1),x.event.add(e,t,{namespace:!1,handler:function(n){var a,o,i=se.get(this,t);if(n.isTrigger&1&&this[t]){if(i.length)(x.event.special[t]||{}).delegateType&&n.stopPropagation();else if(i=Xn.call(arguments),se.set(this,t,i),a=r(this,t),this[t](),o=se.get(this,t),i!==o||a?se.set(this,t,!1):o={},i!==o)return n.stopImmediatePropagation(),n.preventDefault(),o&&o.value}else i.length&&(se.set(this,t,{value:x.event.trigger(x.extend(i[0],x.Event.prototype),i.slice(1),this)}),n.stopImmediatePropagation())}})}x.removeEvent=function(e,t,r){e.removeEventListener&&e.removeEventListener(t,r)};x.Event=function(e,t){if(!(this instanceof x.Event))return new x.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?wr:kr,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[x.expando]=!0};x.Event.prototype={constructor:x.Event,isDefaultPrevented:kr,isPropagationStopped:kr,isImmediatePropagationStopped:kr,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=wr,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=wr,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=wr,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}};x.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},x.event.addProp);x.each({focus:"focusin",blur:"focusout"},function(e,t){x.event.special[e]={setup:function(){return ea(this,e,Gm),!1},trigger:function(){return ea(this,e),!0},_default:function(){return!0},delegateType:t}});x.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(r){var n,a=this,o=r.relatedTarget,i=r.handleObj;return(!o||o!==a&&!x.contains(a,o))&&(r.type=i.origType,n=i.handler.apply(this,arguments),r.type=t),n}}});x.fn.extend({on:function(e,t,r,n){return ti(this,e,t,r,n)},one:function(e,t,r,n){return ti(this,e,t,r,n,1)},off:function(e,t,r){var n,a;if(e&&e.preventDefault&&e.handleObj)return n=e.handleObj,x(e.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if(typeof e=="object"){for(a in e)this.off(a,t,e[a]);return this}return(t===!1||typeof t=="function")&&(r=t,t=void 0),r===!1&&(r=kr),this.each(function(){x.event.remove(this,e,r,t)})}});var ai=new RegExp("^("+Hl+")(?!px)[a-z%]+$","i"),aa=function(e){var t=e.ownerDocument.defaultView;return(!t||!t.opener)&&(t=window),t.getComputedStyle(e)},Kl=function(e,t,r){var n,a,o={};for(a in t)o[a]=e.style[a],e.style[a]=t[a];n=r.call(e);for(a in t)e.style[a]=o[a];return n},Fm=new RegExp(Lt.join("|"),"i");(function(){function e(){if(g){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",g.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",vr.appendChild(c).appendChild(g);var h=window.getComputedStyle(g);r=h.top!=="1%",s=t(h.marginLeft)===12,g.style.right="60%",o=t(h.right)===36,n=t(h.width)===36,g.style.position="absolute",a=t(g.offsetWidth/3)===12,vr.removeChild(c),g=null}}function t(h){return Math.round(parseFloat(h))}var r,n,a,o,i,s,c=ye.createElement("div"),g=ye.createElement("div");g.style&&(g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",xe.clearCloneStyle=g.style.backgroundClip==="content-box",x.extend(xe,{boxSizingReliable:function(){return e(),n},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),a},reliableTrDimensions:function(){var h,y,w,k;return i==null&&(h=ye.createElement("table"),y=ye.createElement("tr"),w=ye.createElement("div"),h.style.cssText="position:absolute;left:-11111px;border-collapse:separate",y.style.cssText="border:1px solid",y.style.height="1px",w.style.height="9px",w.style.display="block",vr.appendChild(h).appendChild(y).appendChild(w),k=window.getComputedStyle(y),i=parseInt(k.height,10)+parseInt(k.borderTopWidth,10)+parseInt(k.borderBottomWidth,10)===y.offsetHeight,vr.removeChild(h)),i}}))})();function tn(e,t,r){var n,a,o,i,s=e.style;return r=r||aa(e),r&&(i=r.getPropertyValue(t)||r[t],i===""&&!Vl(e)&&(i=x.style(e,t)),!xe.pixelBoxStyles()&&ai.test(i)&&Fm.test(t)&&(n=s.width,a=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=i,i=r.width,s.width=n,s.minWidth=a,s.maxWidth=o)),i!==void 0?i+"":i}function Wl(e,t){return{get:function(){if(e()){delete this.get;return}return(this.get=t).apply(this,arguments)}}}var Nl=["Webkit","Moz","ms"],Ql=ye.createElement("div").style,Pl={};function Bm(e){for(var t=e[0].toUpperCase()+e.slice(1),r=Nl.length;r--;)if(e=Nl[r]+t,e in Ql)return e}function _l(e){var t=x.cssProps[e]||Pl[e];return t||(e in Ql?e:Pl[e]=Bm(e)||e)}var zm=/^(none|table(?!-c[ea]).+)/,Ll=/^--/,Um={position:"absolute",visibility:"hidden",display:"block"},Rl={letterSpacing:"0",fontWeight:"400"};function jl(e,t,r){var n=na.exec(t);return n?Math.max(0,n[2]-(r||0))+(n[3]||"px"):t}function ri(e,t,r,n,a,o){var i=t==="width"?1:0,s=0,c=0;if(r===(n?"border":"content"))return 0;for(;i<4;i+=2)r==="margin"&&(c+=x.css(e,r+Lt[i],!0,a)),n?(r==="content"&&(c-=x.css(e,"padding"+Lt[i],!0,a)),r!=="margin"&&(c-=x.css(e,"border"+Lt[i]+"Width",!0,a))):(c+=x.css(e,"padding"+Lt[i],!0,a),r!=="padding"?c+=x.css(e,"border"+Lt[i]+"Width",!0,a):s+=x.css(e,"border"+Lt[i]+"Width",!0,a));return!n&&o>=0&&(c+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-c-s-.5))||0),c}function Il(e,t,r){var n=aa(e),a=!xe.boxSizingReliable()||r,o=a&&x.css(e,"boxSizing",!1,n)==="border-box",i=o,s=tn(e,t,n),c="offset"+t[0].toUpperCase()+t.slice(1);if(ai.test(s)){if(!r)return s;s="auto"}return(!xe.boxSizingReliable()&&o||!xe.reliableTrDimensions()&&xr(e,"tr")||s==="auto"||!parseFloat(s)&&x.css(e,"display",!1,n)==="inline")&&e.getClientRects().length&&(o=x.css(e,"boxSizing",!1,n)==="border-box",i=c in e,i&&(s=e[c])),s=parseFloat(s)||0,s+ri(e,t,r||(o?"border":"content"),i,n,s)+"px"}x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var r=tn(e,"opacity");return r===""?"1":r}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,r,n){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var a,o,i,s=xt(t),c=Ll.test(t),g=e.style;if(c||(t=_l(s)),i=x.cssHooks[t]||x.cssHooks[s],r!==void 0){if(o=typeof r,o==="string"&&(a=na.exec(r))&&a[1]&&(r=Om(e,t,a),o="number"),r==null||r!==r)return;o==="number"&&!c&&(r+=a&&a[3]||(x.cssNumber[s]?"":"px")),!xe.clearCloneStyle&&r===""&&t.indexOf("background")===0&&(g[t]="inherit"),(!i||!("set"in i)||(r=i.set(e,r,n))!==void 0)&&(c?g.setProperty(t,r):g[t]=r)}else return i&&"get"in i&&(a=i.get(e,!1,n))!==void 0?a:g[t]}},css:function(e,t,r,n){var a,o,i,s=xt(t),c=Ll.test(t);return c||(t=_l(s)),i=x.cssHooks[t]||x.cssHooks[s],i&&"get"in i&&(a=i.get(e,!0,r)),a===void 0&&(a=tn(e,t,n)),a==="normal"&&t in Rl&&(a=Rl[t]),r===""||r?(o=parseFloat(a),r===!0||isFinite(o)?o||0:a):a}});x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(r,n,a){if(n)return zm.test(x.css(r,"display"))&&(!r.getClientRects().length||!r.getBoundingClientRect().width)?Kl(r,Um,function(){return Il(r,t,a)}):Il(r,t,a)},set:function(r,n,a){var o,i=aa(r),s=!xe.scrollboxSize()&&i.position==="absolute",c=s||a,g=c&&x.css(r,"boxSizing",!1,i)==="border-box",h=a?ri(r,t,a,g,i):0;return g&&s&&(h-=Math.ceil(r["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(i[t])-ri(r,t,"border",!1,i)-.5)),h&&(o=na.exec(n))&&(o[3]||"px")!=="px"&&(r.style[t]=n,n=x.css(r,t)),jl(r,n,h)}}});x.cssHooks.marginLeft=Wl(xe.reliableMarginLeft,function(e,t){if(t)return(parseFloat(tn(e,"marginLeft"))||e.getBoundingClientRect().left-Kl(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"});x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(r){for(var n=0,a={},o=typeof r=="string"?r.split(" "):[r];n<4;n++)a[e+Lt[n]+t]=o[n]||o[n-2]||o[0];return a}},e!=="margin"&&(x.cssHooks[e+t].set=jl)});x.fn.extend({css:function(e,t){return rn(this,function(r,n,a){var o,i,s={},c=0;if(Array.isArray(n)){for(o=aa(r),i=n.length;c<i;c++)s[n[c]]=x.css(r,n[c],!1,o);return s}return a!==void 0?x.style(r,n,a):x.css(r,n)},e,t,arguments.length>1)}});(function(){var e=ye.createElement("input"),t=ye.createElement("select"),r=t.appendChild(ye.createElement("option"));e.type="checkbox",xe.checkOn=e.value!=="",xe.optSelected=r.selected,e=ye.createElement("input"),e.value="t",e.type="radio",xe.radioValue=e.value==="t"})();xe.focusin="onfocusin"in window;var Ol=/^(?:focusinfocus|focusoutblur)$/,Gl=function(e){e.stopPropagation()};x.extend(x.event,{trigger:function(e,t,r,n){var a,o,i,s,c,g,h,y,w=[r||ye],k=Zn.call(e,"type")?e.type:e,_=Zn.call(e,"namespace")?e.namespace.split("."):[];if(o=y=i=r=r||ye,!(r.nodeType===3||r.nodeType===8)&&!Ol.test(k+x.event.triggered)&&(k.indexOf(".")>-1&&(_=k.split("."),k=_.shift(),_.sort()),c=k.indexOf(":")<0&&"on"+k,e=e[x.expando]?e:new x.Event(k,typeof e=="object"&&e),e.isTrigger=n?2:3,e.namespace=_.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+_.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=t==null?[e]:x.makeArray(t,[e]),h=x.event.special[k]||{},!(!n&&h.trigger&&h.trigger.apply(r,t)===!1))){if(!n&&!h.noBubble&&!qr(r)){for(s=h.delegateType||k,Ol.test(s+k)||(o=o.parentNode);o;o=o.parentNode)w.push(o),i=o;i===(r.ownerDocument||ye)&&w.push(i.defaultView||i.parentWindow||window)}for(a=0;(o=w[a++])&&!e.isPropagationStopped();)y=o,e.type=a>1?s:h.bindType||k,g=(se.get(o,"events")||Object.create(null))[e.type]&&se.get(o,"handle"),g&&g.apply(o,t),g=c&&o[c],g&&g.apply&&Jn(o)&&(e.result=g.apply(o,t),e.result===!1&&e.preventDefault());return e.type=k,!n&&!e.isDefaultPrevented()&&(!h._default||h._default.apply(w.pop(),t)===!1)&&Jn(r)&&c&&kt(r[k])&&!qr(r)&&(i=r[c],i&&(r[c]=null),x.event.triggered=k,e.isPropagationStopped()&&y.addEventListener(k,Gl),r[k](),e.isPropagationStopped()&&y.removeEventListener(k,Gl),x.event.triggered=void 0,i&&(r[c]=i)),e.result}},simulate:function(e,t,r){var n=x.extend(new x.Event,r,{type:e,isSimulated:!0});x.event.trigger(n,null,t)}});x.fn.extend({trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var r=this[0];if(r)return x.event.trigger(e,t,r,!0)}});xe.focusin||x.each({focus:"focusin",blur:"focusout"},function(e,t){var r=function(n){x.event.simulate(t,n.target,x.event.fix(n))};x.event.special[t]={setup:function(){var n=this.ownerDocument||this.document||this,a=se.access(n,t);a||n.addEventListener(e,r,!0),se.access(n,t,(a||0)+1)},teardown:function(){var n=this.ownerDocument||this.document||this,a=se.access(n,t)-1;a?se.access(n,t,a):(n.removeEventListener(e,r,!0),se.remove(n,t))}}});var Hm=/\[\]$/;function ni(e,t,r,n){var a;if(Array.isArray(t))x.each(t,function(o,i){r||Hm.test(e)?n(e,i):ni(e+"["+(typeof i=="object"&&i!=null?o:"")+"]",i,r,n)});else if(!r&&ra(t)==="object")for(a in t)ni(e+"["+a+"]",t[a],r,n);else n(e,t)}x.param=function(e,t){var r,n=[],a=function(o,i){var s=kt(i)?i():i;n[n.length]=encodeURIComponent(o)+"="+encodeURIComponent(s==null?"":s)};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){a(this.name,this.value)});else for(r in e)ni(r,e[r],t,a);return n.join("&")};x.offset={setOffset:function(e,t,r){var n,a,o,i,s,c,g,h=x.css(e,"position"),y=x(e),w={};h==="static"&&(e.style.position="relative"),s=y.offset(),o=x.css(e,"top"),c=x.css(e,"left"),g=(h==="absolute"||h==="fixed")&&(o+c).indexOf("auto")>-1,g?(n=y.position(),i=n.top,a=n.left):(i=parseFloat(o)||0,a=parseFloat(c)||0),kt(t)&&(t=t.call(e,r,x.extend({},s))),t.top!=null&&(w.top=t.top-s.top+i),t.left!=null&&(w.left=t.left-s.left+a),"using"in t?t.using.call(e,w):y.css(w)}};x.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(a){x.offset.setOffset(this,e,a)});var t,r,n=this[0];if(n)return n.getClientRects().length?(t=n.getBoundingClientRect(),r=n.ownerDocument.defaultView,{top:t.top+r.pageYOffset,left:t.left+r.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,r,n=this[0],a={top:0,left:0};if(x.css(n,"position")==="fixed")t=n.getBoundingClientRect();else{for(t=this.offset(),r=n.ownerDocument,e=n.offsetParent||r.documentElement;e&&(e===r.body||e===r.documentElement)&&x.css(e,"position")==="static";)e=e.parentNode;e&&e!==n&&e.nodeType===1&&(a=x(e).offset(),a.top+=x.css(e,"borderTopWidth",!0),a.left+=x.css(e,"borderLeftWidth",!0))}return{top:t.top-a.top-x.css(n,"marginTop",!0),left:t.left-a.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&x.css(e,"position")==="static";)e=e.offsetParent;return e||vr})}});x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var r=t==="pageYOffset";x.fn[e]=function(n){return rn(this,function(a,o,i){var s;if(qr(a)?s=a:a.nodeType===9&&(s=a.defaultView),i===void 0)return s?s[t]:a[o];s?s.scrollTo(r?s.pageXOffset:i,r?i:s.pageYOffset):a[o]=i},e,n,arguments.length)}});x.each(["top","left"],function(e,t){x.cssHooks[t]=Wl(xe.pixelPosition,function(r,n){if(n)return n=tn(r,t),ai.test(n)?x(r).position()[t]+"px":n})});x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(r,n){x.fn[n]=function(a,o){var i=arguments.length&&(r||typeof a!="boolean"),s=r||(a===!0||o===!0?"margin":"border");return rn(this,function(c,g,h){var y;return qr(c)?n.indexOf("outer")===0?c["inner"+e]:c.document.documentElement["client"+e]:c.nodeType===9?(y=c.documentElement,Math.max(c.body["scroll"+e],y["scroll"+e],c.body["offset"+e],y["offset"+e],y["client"+e])):h===void 0?x.css(c,g,s):x.style(c,g,h,s)},t,i?a:void 0,i)}})});x.fn.extend({bind:function(e,t,r){return this.on(e,null,t,r)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,r,n){return this.on(t,e,r,n)},undelegate:function(e,t,r){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){x.fn[t]=function(r,n){return arguments.length>0?this.on(t,null,r,n):this.trigger(t)}});var Vm=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;x.isArray=Array.isArray;x.parseJSON=JSON.parse;x.nodeName=xr;x.isFunction=kt;x.isWindow=qr;x.camelCase=xt;x.type=ra;x.now=Date.now;x.isNumeric=function(e){var t=x.type(e);return(t==="number"||t==="string")&&!isNaN(e-parseFloat(e))};x.trim=function(e){return e==null?"":(e+"").replace(Vm,"")};var Km=window.jQuery,Wm=window.$;x.noConflict=function(e){return window.$===x&&(window.$=Wm),e&&window.jQuery===x&&(window.jQuery=Km),x};typeof noGlobal=="undefined"&&(window.jQuery=window.$=x);var pe=x;function an(e=void 0){let t=()=>e;return t.isDCGViewConst=!0,t}function Xt(e){return typeof e=="function"&&!!e.isDCGViewConst}function Yl(e){let t=e();if(t!=null)return typeof t=="string"?t:Object.entries(t).filter(([,r])=>r!=null).map(([r,n])=>`${r}:${n}`).join(";")||void 0}function Qm(e){let t=Yl(e);return Xt(e)?{value:t}:{value:t,bindings:{onUpdate:r=>{let n=Yl(e);t!==n&&(Jl(r,"style",n),t=n)}}}}function Xl(e){let t=e();if(t!=null)return typeof t=="string"?t:Object.entries(t).filter(([,r])=>r).map(([r])=>r).join(" ")||void 0}var jm=/\s+/,Ym=new Set;function Zl(e){let t=e==null?void 0:e.trim();return t?new Set(t.split(jm)):Ym}function Xm(e){let t=Xl(e);if(Xt(e))return{value:t};let r=Zl(t);return{value:t,bindings:{onUpdate:n=>{let a=Xl(e);if(t===a)return;let o=Zl(a);for(let i of r)o.has(i)||n.classList.remove(i);for(let i of o)r.has(i)||n.classList.add(i);r=o,t=a}}}}function qt(e){return t=>({bindings:{[e]:t}})}var oi={style:Qm,class:Xm,willMount:qt("willMount"),onMount:qt("onMount"),didMount:qt("didMount"),willUnmount:qt("willUnmount"),onUnmount:qt("onUnmount"),didUnmount:qt("didUnmount"),willUpdate:qt("willUpdate"),onUpdate:qt("onUpdate"),didUpdate:qt("didUpdate")};function Sr(e,t){oi[e]=t}function Zm(e){return oi.hasOwnProperty(e)}var Jm=e=>e.startsWith("on")&&e[2]===e[2].toUpperCase();function ef(e,t){let r=e.toLowerCase(),n=r==="onfocusin"||r==="onfocusout"?r.slice(2):void 0,a;return{bindings:{onMount(o){a=(...i)=>{i[0]&&t.apply(o,i)},n?o.addEventListener(n,a):o[r]=a},willUnmount(o){n&&o.removeEventListener(n,a)}}}}function Jl(e,t,r){return r==null?e.removeAttribute(t):e.setAttribute(t,String(r))}function tf(e,t){let r=t();return Xt(t)?{value:r}:{value:r,bindings:{onUpdate(n){let a=t();a!==r&&(r=a,Jl(n,e,a))}}}}function ec(e,t){if(t==null)return{value:void 0};let r=typeof t=="function"?t:an(t);return Zm(e)?oi[e](r):Jm(e)?ef(e,r):tf(e,r)}var ii=()=>{};ii();function tc(e,t,r){let n=e._bindings[t];e._bindings[t]=n?[...n,r]:[r]}function st(e,t){var n;((n=e._bindings[t])!=null?n:[]).forEach(a=>a())}var Cr=class{findAllRootDOMNodes(){let t=this.findFirstRootDOMNode(),r=this.findLastRootDOMNode(),n=[],a=t;for(;a&&(n.push(a),a!==r);)a=a.nextSibling;return n}},oa=class extends Cr{constructor(t,r){super(),this.tagName=t,this.props=r}findFirstRootDOMNode(){return this._node}findLastRootDOMNode(){return this._node}renderTo(t,r){let n=document.createElement(this.tagName);if(this._node=n,r.bindAttributesTo(n,this.props),t.appendChild(n),"children"in this.props){let a=Array.isArray(this.props.children)?this.props.children:[this.props.children];rc(a,r,n,this)}}},ia=class extends Cr{constructor(t=[]){super(),this.children=t,t.length?this._nodes=[document.createTextNode(""),document.createTextNode("")]:this._nodes=[document.createTextNode("")]}findFirstRootDOMNode(){return this._nodes[0]}findLastRootDOMNode(){return this._nodes.length===2?this._nodes[1]:this._nodes[0]}renderTo(t,r){t.appendChild(this._nodes[0]),rc(this.children,r,t,this),this._nodes.length===2&&t.appendChild(this._nodes[1])}};function rc(e,t,r,n){e.forEach(a=>{if(on(a)){let o=St(a);o.renderTo(r,t),o._parentElement=n;return}if(Xt(a)){r.appendChild(document.createTextNode(String(a())));return}if(typeof a=="function"){t.bindText(r,()=>{let o=a();return o==null?"":typeof o=="string"?o:String(o)});return}r.appendChild(document.createTextNode(String(a)))})}var si=Symbol(),nc=(e,t)=>{e!=null&&(Array.isArray(e)?e.forEach(r=>nc(r,t)):t.push(e))};function on(e){return!!(e!=null&&e.isDCGElementSpec)}function St(e){switch(e.type){case"fragment":return new ia(e.children);case"element":return new oa(e.tagName,e.props);case"view":let t=new e.viewClass(e.props)._construct();return e.viewName&&(t._viewName=e.viewName),t;default:}throw new Error("could not init DCGElementSpec.")}function Xe(e,t={}){let r=[];if("children"in t&&(Array.isArray(t.children)?t.children:[t.children]).forEach(a=>nc(a,r)),e===si)return{isDCGElementSpec:!0,type:"fragment",children:r};if(typeof e=="string")return{isDCGElementSpec:!0,type:"element",tagName:e,props:{...t,children:r}};if(e.IS_DCGVIEW){let n;return r.length===1?n=r[0]:r.length>1&&(n=r),{isDCGElementSpec:!0,type:"view",viewClass:e,props:{...t,children:n}}}throw new Error(`Expected type to be a Fragment symbol, string, or View class, but got ${e}.`)}var sa=e=>e instanceof ve;ii();var ve=class extends Cr{constructor(r){var n,a;super();this._childViews=[];this._bindings={};this._isMounted=!1;this.const=an;this.props=r,this._viewName=(a=(n=this.constructor)==null?void 0:n.name)!=null?a:"Anonymous DCGView"}template(){throw new Error("template() must be implemented")}_construct(){var r;return(r=this.init)==null||r.call(this),this._elementSpec=this.template(),this}bindFn(r){return r.bind(this)}bindIfMounted(r){return this.bindFn((...n)=>{if(this._isMounted)return r.apply(this,n)})}traceViewHierarchy(){let r=[],n=this._parentElement;for(;n;)r.unshift(n),n=n._parentElement;let a=i=>sa(i)&&!(i._viewName==="Switch"&&sa(i._parentElement)&&i._parentElement._viewName==="If")&&!["ForWrapper","SwitchWrapper"].includes(i._viewName),o=[...r,this].filter(a).map((i,s)=>"  ".repeat(s)+"<"+i._viewName+">").join(`
`);return{ancestors:r,formatted:o}}renderTo(r,n){n&&n._childViews.push(this),this._element=St(this._elementSpec),this._element._parentElement=this,this._element.renderTo(r,this)}findFirstRootDOMNode(){return this._element.findFirstRootDOMNode()}findLastRootDOMNode(){return this._element.findLastRootDOMNode()}update(){var r,n,a;if(!this._isMounted)return li("Trying to update view that is not mounted. Ignoring update.",this);this.shouldUpdate&&!this.shouldUpdate()||((r=this.willUpdate)==null||r.call(this),st(this,"willUpdate"),st(this,"onUpdate"),(n=this.onUpdate)==null||n.call(this),this.updateChildren(),st(this,"didUpdate"),(a=this.didUpdate)==null||a.call(this))}updateChildren(){this._childViews.forEach(r=>r.update())}bindText(r,n){let a=n(),o=document.createTextNode(a);r.appendChild(o),tc(this,"onUpdate",()=>{let i=n();a!==i&&(o.nodeValue=i,a=i)})}addAttributeBindingsTo(r,n){Object.entries(n).forEach(([a,o])=>{if(!o)return;if(["onMount","didMount","willUnmount","willUpdate","onUpdate","didUpdate"].includes(a)&&(o=o.bind(null,r)),["willMount","onMount","didMount","willUnmount","onUnmount","didUnmount"].includes(a)){let g=!1,h=o;o=(...y)=>{if(g){li(`${a} is a one-time binding but was called multiple times`,this);return}g=!0,h(...y)}}let c=this._bindings[a];this._bindings[a]=c?[...c,o]:[o]})}bindAttributesTo(r,n){Object.keys(n).filter(a=>a!=="children").forEach(a=>{let o=ec(a,n[a]);"value"in o&&o.value!==void 0&&r.setAttribute(a,String(o.value)),o.bindings&&this.addAttributeBindingsTo(r,o.bindings)})}};ve.IS_DCGVIEW=!0;var ac=[];function ci(e){ac.push(e)}function li(e,t){if(sa(t)){let n=`[${t._viewName}]`,a=t.traceViewHierarchy(),o=a.ancestors.length>0?`
View Hierarchy:
${a.formatted}`:"";e=`${e} ${n}${o}`}let r=new Error(e);console.warn(r),ac.forEach(n=>n(r))}var oc=e=>{let t=e.length,r=new Array(t),n=new Array(t+1),a=0,o;for(let c=0;c<t;c++){if(e[n[a]]<e[c])o=a+1;else{let g=1,h=a-1;for(;g<=h;){let y=Math.ceil((g+h)/2);e[n[y]]<e[c]?g=y+1:h=y-1}o=g}r[c]=n[o-1],n[o]=c,o>a&&(a=o)}let i=new Array(a),s=n[a];for(let c=a-1;c>=0;c--)i[c]=e[s],s=r[s];return i};function ic(e,t){let r=new Map(t.map((c,g)=>[c,g])),n=e.filter(c=>!r.has(c)),a=e.filter(c=>r.has(c)).map(c=>r.get(c)),o=oc(a),i=new Set(o.map(c=>t[c])),s=t.reduceRight((c,g,h)=>{if(!i.has(g)){let y=h+1;c.push({key:g,...y in t?{beforeKey:t[y]}:{}})}return c},[]);return{removes:n,inserts:s}}function ui(e,t,r){if(!t||t.nodeType!==1)throw new Error("Must pass an HTMLElement for the node");if(t._mountedDCGView)throw new Error("This node is already mounted by a view");let n=new e(r)._construct(),a=document.createDocumentFragment();return n.renderTo(a),t.innerHTML="",Mr(n),t._mountedDCGView=n,t.appendChild(a),Tr(n),Er(n),n}function Mr(e){e.willMount&&e.willMount(),st(e,"willMount"),e._childViews.forEach(Mr)}function Tr(e){e._isMounted=!0,e.onMount&&e.onMount(),st(e,"onMount"),e._childViews.forEach(Tr)}function Er(e){e.didMount&&e.didMount(),st(e,"didMount"),e._childViews.forEach(Er)}function sn(e){e.willUnmount&&e.willUnmount(),st(e,"willUnmount"),e._childViews.forEach(sn)}function ln(e){e._isMounted=!1,e._childViews.forEach(ln),st(e,"onUnmount"),e.onUnmount&&e.onUnmount()}function cn(e){e._childViews.forEach(cn),st(e,"didUnmount"),e.didUnmount&&e.didUnmount()}function la(e,t){let r=document.createDocumentFragment();return e.renderTo(r,t),r}function we(e,t,...r){return Xe(e,!("key"in t)&&r.length>=1?{...t,key:r[0]}:t)}function di(e,t,...r){return we(e,t,...r)}var ca=si;var pi=class extends ve{constructor(){super(...arguments);this._viewName="For.Simple"}template(){let{children:r}=this.props;return we(Zt,{each:this.props.each,children:(n,a)=>r(n(),a)},n=>n)}},gi=class extends ve{constructor(){super(...arguments);this._viewName="For.Count"}makeStepsArray(){let r=this.props.from?this.props.from():0,n=Math.floor(this.props.count());return!isFinite(r)||!isFinite(n)?[]:Array.from({length:n},(a,o)=>r+o)}template(){return we(Zt,{each:()=>this.makeStepsArray(),children:r=>this.props.children(r())},r=>r)}},hi=class extends ve{constructor(){super(...arguments);this._viewName="ForWrapper"}template(){return this.props.children}},Zt=class extends ve{constructor(){super(...arguments);this._viewName="For";this._keyToData=new Map;this._keyToView=new Map}getKeys(){this._keyToData.clear();let r=this.props.each(),n=r.map((a,o)=>this.props.key(a,o,r));return n.forEach((a,o)=>{if(this._keyToData.has(a))throw new Error(`The key: ${JSON.stringify(a)} is not unique`);this._keyToData.set(a,{item:r[o],index:o})}),n}createViewForKey(r){let n=this._keyToData.get(r),a=this._viewFunction.call(this,()=>(this._keyToData.has(r)&&(n=this._keyToData.get(r)),n.item),()=>(this._keyToData.has(r)&&(n=this._keyToData.get(r)),n.index));if(on(a)&&a.type==="view"){let i=St(a);return this._keyToView.set(r,i),i}let o=St(Xe(hi,{children:a}));return this._keyToView.set(r,o),o}detachAllRemovedViews(r){let n=this._childViews,a=0;for(let o=0;o<n.length;o++){let i=n[o];r.has(i)?a++:n[o-a]=i}n.splice(n.length-a,a)}updateChildren(){let r=this._keys,n=this.getKeys();this._keys=n;let a=ic(r,n),o=new Set;for(let s=a.removes.length-1;s>=0;s--){let c=a.removes[s],g=this._keyToView.get(c);sn(g),this._keyToView.delete(c),g.findAllRootDOMNodes().forEach(h=>h.remove()),o.add(g)}o.size>0&&(this.detachAllRemovedViews(o),o.forEach(ln),o.forEach(cn));let i=[];for(let s=a.inserts.length-1;s>=0;s--){let c=a.inserts[s].key;if(this._keyToView.has(c))continue;let g=this.createViewForKey(c);la(g,this),i.push(g)}i.forEach(Mr),a.inserts.forEach(s=>{let c=this._keyToView.get(s.key).findAllRootDOMNodes(),g;"beforeKey"in s?g=this._keyToView.get(s.beforeKey).findFirstRootDOMNode():g=this.findLastRootDOMNode(),c.forEach(h=>{g.before(h)})}),i.forEach(Tr),i.forEach(Er);for(let s=0;s<this._childViews.length-i.length;s++)this._childViews[s].update()}renderTo(r,n){var i;super.renderTo(r,n);for(let s of this._keys)this._keyToView.get(s).renderTo(r,this);let a=document.createTextNode("");r.appendChild(a),(i=this._element._nodes[1])==null||i.remove(),this._element._nodes=[this._element._nodes[0],a]}template(){let{children:r}=this.props;return this._viewFunction=r,this._keys=this.getKeys(),this._keys.map(n=>{let a=this.createViewForKey(n);return a._parentElement=this,a}),we(ca,{})}};Zt.Simple=pi,Zt.Count=gi;var mi=class extends ve{constructor(){super(...arguments);this._viewName="SwitchWrapper"}template(){return this.props.children}},Ct=class extends ve{constructor(){super(...arguments);this._viewName="Switch"}updateKey(){this._key=this.props.key()}createViewSpec(){var n;let r=(n=this._viewFunction(this._key))!=null?n:we(ca,{});return Xe(mi,{children:r})}createView(){let r=this.createViewSpec(),n=St(r);return n._parentElement=this,n}template(){let{children:r}=this.props;return this._viewFunction=r,this.updateKey(),this.createViewSpec()}updateChildren(){let r=this._key;this.updateKey();let n=this._key;if(r===n){this._element.update();return}let a=this.findAllRootDOMNodes(),o=document.createTextNode("");a[0].before(o),sn(this._element),this._childViews=[],a.forEach(s=>s.remove()),ln(this._element),cn(this._element),this._element=this.createView();let i=la(this._element,this);Mr(this._element),o.before(i),o.remove(),Tr(this._element),Er(this._element)}};function un(e,t,r){return{...Xe(Ct,{key:()=>{let a=e();return a!=null},children:a=>a?t(e):r==null?void 0:r()}),viewName:"IfDefined"}}function fi(e,t,r){let n=typeof r=="undefined",a,o;return n?(a=e,o=i=>{var c;let s=t;return(c=s[i])==null?void 0:c.call(s,()=>i)}):(a=()=>{let i=e();return i&&i[t]},o=i=>{var c;let s=r;return(c=s[i])==null?void 0:c.call(s,e)}),{...Xe(Ct,{key:a,children:o}),viewName:"SwitchUnion"}}function bi(e,t){return{...fi(()=>e()?"true":"false",t),viewName:"IfElse"}}ci(e=>Sl(e));var sc=e=>{let t=e();if(t!=null)return El(String(t))};Sr("href",e=>{let t=sc(e);return{value:t,bindings:{onUpdate(r){let n=sc(e);if(t!==n){if(t=n,n===void 0){r.removeAttribute("href");return}r.setAttribute("href",n)}}}}});var dn=(e,t,r)=>Sr(e,n=>({value:r,bindings:{onMount(a){pe(a).on(t,n)}}}));dn("onTap","dcg-tap","");dn("onTapStart","dcg-tapstart");dn("onTapMove","dcg-tapmove");dn("onTapEnd","dcg-tapend");dn("onLongHold","dcg-longhold");Sr("ignoreRealClick",e=>({bindings:{onMount(t){pe(t).on("click",r=>{!(r.altKey||r.shiftKey||r.metaKey||r.ctrlKey)&&e()&&r.preventDefault()})}}}));Sr("manageFocus",e=>({bindings:{onMount(t){let r=e();r!=null&&r.shouldBeFocused()&&!Yo()&&t.focus(),t.onfocus=function(n){let a=e();a!=null&&a.shouldBeFocused()||a==null||a.onFocusedChanged(!0,n)},t.onblur=function(n){let a=e();!(a!=null&&a.shouldBeFocused())||n.target===document.activeElement||a.onFocusedChanged(!1,n)}},onUpdate(t){let r=e();if(r===void 0)return;let n=!!(r!=null&&r.shouldBeFocused()),a=document.activeElement===t;n&&!a?Yo()||t.focus():a&&!n&&t.blur()},willUnmount(t){var r;document.activeElement===t&&((r=e())==null||r.onFocusedChanged(!1)),t.onfocus=null,t.onblur=null}}}));function ua(e){let t=[];for(let r of e){if(!r||typeof r!="string")continue;let n=r.split("-")[0];t.push(r),t.push(n);for(let a in pn){let o=pn[a];a.split("-")[0]===n&&o.useAsRoot&&t.push(a)}}return t}var nf="https://docs.google.com/document/d/1gV-WgDjgR9hKKb32ffeUpjwggNAgfqxl0Gsg6xocbok/preview",pn={en:{displayName:"English (US)",userGuideURL:nf,useAsRoot:!1},es:{displayName:"Espa\xF1ol (LATAM)",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_ES-ES.pdf",useAsRoot:!0},et:{displayName:"Eesti",useAsRoot:!1},ru:{displayName:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_RU.pdf",useAsRoot:!1},da:{displayName:"Dansk",useAsRoot:!1},de:{displayName:"Deutsch",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_DE.pdf",useAsRoot:!1},"pt-BR":{displayName:"Portugu\xEAs (Brasil)",useAsRoot:!0},"pt-PT":{displayName:"Portugu\xEAs (Portugal)",useAsRoot:!1},ca:{displayName:"Catal\xE0",useAsRoot:!1},fr:{displayName:"Fran\xE7ais",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_FR.pdf",useAsRoot:!0},"fr-CA":{displayName:"Fran\xE7ais (Canada)",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_FR.pdf",useAsRoot:!0},it:{displayName:"Italiano",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_IT.pdf",useAsRoot:!1},is:{displayName:"\xCDslenska",useAsRoot:!1},nl:{displayName:"Nederlands",useAsRoot:!1},no:{displayName:"Norsk",useAsRoot:!1},"sv-SE":{displayName:"Svenska",useAsRoot:!0},hu:{displayName:"Magyar",useAsRoot:!1},cs:{displayName:"\u010Ce\u0161tina",useAsRoot:!1},pl:{displayName:"Polski",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_PL.pdf",useAsRoot:!1},id:{displayName:"Bahasa Indonesia",useAsRoot:!1},vi:{displayName:"Ti\u1EBFng Vi\u1EC7t",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_VI.pdf",useAsRoot:!1},el:{displayName:"\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_EL.pdf",useAsRoot:!1},uk:{displayName:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",useAsRoot:!1},ka:{displayName:"\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8",useAsRoot:!1},th:{displayName:"\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",useAsRoot:!1},tr:{displayName:"T\xFCrk\xE7e",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_TR.pdf",useAsRoot:!1},"zh-CN":{displayName:"\u7B80\u4F53\u4E2D\u6587",useAsRoot:!0,userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_ZH-CN.pdf"},"zh-TW":{displayName:"\u7E41\u9AD4\u4E2D\u6587",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_ZH-TW.pdf",useAsRoot:!1},ko:{displayName:"\uD55C\uAD6D\uC5B4",useAsRoot:!1},ja:{displayName:"\u65E5\u672C\u8A9E",userGuideURL:"https://www.desmos.com/static-assets/user-guide-pdfs/Desmos_User_Guide_JA.pdf",useAsRoot:!1}};var af=["3d","actions","advancedStyling","audioTraceKeypad","authorFeatures","autoplay","beta3d","clickableObjects","collaborate","complex","crossOriginSaveTest","debugProgressUpdates","decimalToFraction","debug","defaultLogModeRegressions","degreeMode","reflectionArc","disableMouseInteractions","disableWebGL2Support","disableWorkerOnZoom","editOnWeb","expressionsCollapsed","keypadActivated","fastAutoSave","fastAutoSaveForTests","forceEnableGeometryFunctions","forceLogModeRegressions","forceMobile","forceTouchDevice","hidden","invertedColors","jim","lockViewport","logAria","logInternalErrors","showIDs","maintenance","nativeOnscreenKeypad","outofdom","pauseWhenOffscreen","projectorMode","reflectionArc","reloadcss","replaceCommaWith10Exp","replaceRoundWithReciprocal","restrictedEditing","restrictedFunctions","showIDs","showNavigationWarning","showPerformanceMeter","debugCompiler","showQuestsList","showResetButtonOnGraphpaper","simulationFPS","singleExpression","testing","timeInWorker","translucentSurfaces","transparentBackground","typingAsteriskWritesTimesSymbol","ueb","upcomingMaintenance","wireframe","raycastHeatmap","raycastDisableIntervals","showEvaluationCopyButtons","reportPositionNone"],of=["adaptivePeeling","actions","allowComplex","audio","brailleControls","branding","calculus","concat","customRegressions","decimalToFraction","degreeMode","distributions","expressions","expressionsTopbar","folders","functionDefinition","graphpaper","images","intervalComprehensions","invertedColorsControl","keypad","links","logScales","notes","plotImplicits","plotInequalities","plotSingleVariableImplicitEquations","pointsOfInterest","qwertyKeyboard","recursion","settingsMenu","sliders","substitutions","regressionTemplates","tone","trace","zoomButtons","zoomFit"],sf=["debugPeelLayers","nworkers","peelUpsample","recursionDepth","workerThrottle"],lf=["timeoutLoop","translucentOpacity"];var cf=e=>Xo(e)||e==="localhost",lc=e=>{let{search:t,hostname:r}=typeof location!="undefined"?location:typeof window!="undefined"?window.location:new Location;return cf(r)?new URLSearchParams(e!=null?e:t):new URLSearchParams(new URLSearchParams(t).has("lang")?{lang:new URLSearchParams(t).get("lang")}:{} )},cc=e=>{let t=lc(e),r=new Map;for(let[n,a]of t)r.set(n,a!=null?a:"");return r};function Be(e,t=lc()){let r=t.get(e);if(af.includes(e)||e.startsWith("no")&&of.includes(e.slice(2)))return t.has(e)&&r!=="false";if(r!=null){if(sf.includes(e)){let n=parseInt(r,10);return isNaN(n)?void 0:n}if(lf.includes(e)){let n=parseFloat(r);return isNaN(n)?void 0:n}return r}}var uf={pendingRequests:0,completedRequests:0};window.dcgTestOnlyFetchMonitor=uf;function df(){let e=Be("dcgTestOnlyOnBeforeNetworkRequests");if(e)try{let t=window.top;for(;t!=null&&t.opener;)t=t.opener.top;t&&t.dcgOnBeforeNetworkRequests(e)}catch(t){}}df();var pt=class{constructor(t){this.value=t}valueOf(){return this.value}},oe=class extends pt{constructor(t="???"){super(t)}toString(t){return`{${this.value}}`}},Ge=class extends pt{constructor(t,r={}){super(t),this.opts=r}toString(t){if(t)try{return t.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(r){t.reportError(r)}return this.value.toString(10)}},gt=class e extends pt{static supportsValue(t){if(typeof t=="number"||t instanceof Date)return!0;if(t instanceof pt)return e.supportsValue(t.valueOf());if("Temporal"in globalThis){let r=globalThis.Temporal;if(t instanceof r.Instant||t instanceof r.PlainDateTime||t instanceof r.PlainDate||t instanceof r.PlainMonthDay||t instanceof r.PlainTime||t instanceof r.PlainYearMonth)return!0}return!1}constructor(t,r={}){t instanceof e?(r={...t.opts,...r},t=t.value):t instanceof pt&&(t=t.valueOf()),typeof t=="object"&&"calendarId"in t&&r.calendar===void 0&&(r={...r,calendar:t.calendarId}),super(t),this.opts=r}[Symbol.toPrimitive](t){return t==="string"?this.toString():this.toNumber()}toNumber(){let t=this.value;if(typeof t=="number")return t;if(t instanceof Date)return t.getTime();if("epochMilliseconds"in t)return t.epochMilliseconds;if("toZonedDateTime"in t)return t.toZonedDateTime("UTC").epochMilliseconds;throw new TypeError("Unwrapping a non-number value as a number")}toString(t){if(t)try{return t.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(r){t.reportError(r)}return typeof this.value=="number"||this.value instanceof Date?new Date(this.value).toISOString():this.value.toString()}};var dc=100,pf="\u2068",gf="\u2069";function hf(e,t,r){if(r===t||r instanceof Ge&&t instanceof Ge&&r.value===t.value)return!0;if(t instanceof Ge&&typeof r=="string"){let n=e.memoizeIntlObject(Intl.PluralRules,t.opts).select(t.value);if(r===n)return!0}return!1}function pc(e,t,r){return t[r]?Ar(e,t[r].value):(e.reportError(new RangeError("No default")),new oe)}function xi(e,t){let r=[],n=Object.create(null);for(let a of t)a.type==="narg"?n[a.name]=gn(e,a.value):r.push(gn(e,a));return{positional:r,named:n}}function gn(e,t){switch(t.type){case"str":return t.value;case"num":return new Ge(t.value,{minimumFractionDigits:t.precision});case"var":return mf(e,t);case"mesg":return ff(e,t);case"term":return bf(e,t);case"func":return yf(e,t);case"select":return xf(e,t);default:return new oe}}function mf(e,{name:t}){let r;if(e.params)if(Object.prototype.hasOwnProperty.call(e.params,t))r=e.params[t];else return new oe(`$${t}`);else if(e.args&&Object.prototype.hasOwnProperty.call(e.args,t))r=e.args[t];else return e.reportError(new ReferenceError(`Unknown variable: $${t}`)),new oe(`$${t}`);if(r instanceof pt)return r;switch(typeof r){case"string":return r;case"number":return new Ge(r);case"object":if(gt.supportsValue(r))return new gt(r);default:return e.reportError(new TypeError(`Variable type not supported: $${t}, ${typeof r}`)),new oe(`$${t}`)}}function ff(e,{name:t,attr:r}){let n=e.bundle._messages.get(t);if(!n)return e.reportError(new ReferenceError(`Unknown message: ${t}`)),new oe(t);if(r){let a=n.attributes[r];return a?Ar(e,a):(e.reportError(new ReferenceError(`Unknown attribute: ${r}`)),new oe(`${t}.${r}`))}return n.value?Ar(e,n.value):(e.reportError(new ReferenceError(`No value: ${t}`)),new oe(t))}function bf(e,{name:t,attr:r,args:n}){let a=`-${t}`,o=e.bundle._terms.get(a);if(!o)return e.reportError(new ReferenceError(`Unknown term: ${a}`)),new oe(a);if(r){let s=o.attributes[r];if(s){e.params=xi(e,n).named;let c=Ar(e,s);return e.params=null,c}return e.reportError(new ReferenceError(`Unknown attribute: ${r}`)),new oe(`${a}.${r}`)}e.params=xi(e,n).named;let i=Ar(e,o.value);return e.params=null,i}function yf(e,{name:t,args:r}){let n=e.bundle._functions[t];if(!n)return e.reportError(new ReferenceError(`Unknown function: ${t}()`)),new oe(`${t}()`);if(typeof n!="function")return e.reportError(new TypeError(`Function ${t}() is not callable`)),new oe(`${t}()`);try{let a=xi(e,r);return n(a.positional,a.named)}catch(a){return e.reportError(a),new oe(`${t}()`)}}function xf(e,{selector:t,variants:r,star:n}){let a=gn(e,t);if(a instanceof oe)return pc(e,r,n);for(let o of r){let i=gn(e,o.key);if(hf(e,a,i))return Ar(e,o.value)}return pc(e,r,n)}function vi(e,t){if(e.dirty.has(t))return e.reportError(new RangeError("Cyclic reference")),new oe;e.dirty.add(t);let r=[],n=e.bundle._useIsolating&&t.length>1;for(let a of t){if(typeof a=="string"){r.push(e.bundle._transform(a));continue}if(e.placeables++,e.placeables>dc)throw e.dirty.delete(t),new RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${dc}`);n&&r.push(pf),r.push(gn(e,a).toString(e)),n&&r.push(gf)}return e.dirty.delete(t),r.join("")}function Ar(e,t){return typeof t=="string"?e.bundle._transform(t):vi(e,t)}var da=class{constructor(t,r,n){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=t,this.errors=r,this.args=n}reportError(t){if(!this.errors||!(t instanceof Error))throw t;this.errors.push(t)}memoizeIntlObject(t,r){let n=this.bundle._intls.get(t);n||(n={},this.bundle._intls.set(t,n));let a=JSON.stringify(r);return n[a]||(n[a]=new t(this.bundle.locales,r)),n[a]}};function wi(e,t){let r=Object.create(null);for(let[n,a]of Object.entries(e))t.includes(n)&&(r[n]=a.valueOf());return r}var gc=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function hc(e,t){let r=e[0];if(r instanceof oe)return new oe(`NUMBER(${r.valueOf()})`);if(r instanceof Ge)return new Ge(r.valueOf(),{...r.opts,...wi(t,gc)});if(r instanceof gt)return new Ge(r.toNumber(),{...wi(t,gc)});throw new TypeError("Invalid argument to NUMBER")}var vf=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function mc(e,t){let r=e[0];if(r instanceof oe)return new oe(`DATETIME(${r.valueOf()})`);if(r instanceof gt||r instanceof Ge)return new gt(r,wi(t,vf));throw new TypeError("Invalid argument to DATETIME")}var fc=new Map;function bc(e){let t=Array.isArray(e)?e.join(" "):e,r=fc.get(t);return r===void 0&&(r=new Map,fc.set(t,r)),r}var hn=class{constructor(t,{functions:r,useIsolating:n=!0,transform:a=o=>o}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(t)?t:[t],this._functions={NUMBER:hc,DATETIME:mc,...r},this._useIsolating=n,this._transform=a,this._intls=bc(t)}hasMessage(t){return this._messages.has(t)}getMessage(t){return this._messages.get(t)}addResource(t,{allowOverrides:r=!1}={}){let n=[];for(let a=0;a<t.body.length;a++){let o=t.body[a];if(o.id.startsWith("-")){if(r===!1&&this._terms.has(o.id)){n.push(new Error(`Attempt to override an existing term: "${o.id}"`));continue}this._terms.set(o.id,o)}else{if(r===!1&&this._messages.has(o.id)){n.push(new Error(`Attempt to override an existing message: "${o.id}"`));continue}this._messages.set(o.id,o)}}return n}formatPattern(t,r=null,n=null){if(typeof t=="string")return this._transform(t);let a=new da(this,n,r);try{return vi(a,t).toString(a)}catch(o){if(a.errors&&o instanceof Error)return a.errors.push(o),new oe().toString(a);throw o}}};var ki=/^(-?[a-zA-Z][\w-]*) *= */gm,yc=/\.([a-zA-Z][\w-]*) *= */y,wf=/\*?\[/y,qi=/(-?[0-9]+(?:\.([0-9]+))?)/y,kf=/([a-zA-Z][\w-]*)/y,xc=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,qf=/^[A-Z][A-Z0-9_-]*$/,pa=/([^{}\n\r]+)/y,Sf=/([^\\"\n\r]*)/y,vc=/\\([\\"])/y,wc=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,Cf=/^\n+/,kc=/ +$/,Mf=/ *\r?\n/g,Tf=/( *)$/,Ef=/{\s*/y,qc=/\s*}/y,Af=/\[\s*/y,Df=/\s*] */y,Nf=/\s*\(\s*/y,Pf=/\s*->\s*/y,_f=/\s*:\s*/y,Lf=/\s*,?\s*/y,Rf=/\s+/y,Dr=class{constructor(t){this.body=[],ki.lastIndex=0;let r=0;for(;;){let M=ki.exec(t);if(M===null)break;r=ki.lastIndex;try{this.body.push(c(M[1]))}catch(O){if(O instanceof SyntaxError)continue;throw O}}function n(M){return M.lastIndex=r,M.test(t)}function a(M,O){if(t[r]===M)return r++,!0;if(O)throw new O(`Expected ${M}`);return!1}function o(M,O){if(n(M))return r=M.lastIndex,!0;if(O)throw new O(`Expected ${M.toString()}`);return!1}function i(M){M.lastIndex=r;let O=M.exec(t);if(O===null)throw new SyntaxError(`Expected ${M.toString()}`);return r=M.lastIndex,O}function s(M){return i(M)[1]}function c(M){let O=h(),ne=g();if(O===null&&Object.keys(ne).length===0)throw new SyntaxError("Expected message value or attributes");return{id:M,value:O,attributes:ne}}function g(){let M=Object.create(null);for(;n(yc);){let O=s(yc),ne=h();if(ne===null)throw new SyntaxError("Expected attribute value");M[O]=ne}return M}function h(){let M;if(n(pa)&&(M=s(pa)),t[r]==="{"||t[r]==="}")return y(M?[M]:[],1/0);let O=E();return O?M?y([M,O],O.length):(O.value=F(O.value,Cf),y([O],O.length)):M?F(M,kc):null}function y(M=[],O){for(;;){if(n(pa)){M.push(s(pa));continue}if(t[r]==="{"){M.push(w());continue}if(t[r]==="}")throw new SyntaxError("Unbalanced closing brace");let je=E();if(je){M.push(je),O=Math.min(O,je.length);continue}break}let ne=M.length-1,Ie=M[ne];typeof Ie=="string"&&(M[ne]=F(Ie,kc));let dt=[];for(let je of M)je instanceof ga&&(je=je.value.slice(0,je.value.length-O)),je&&dt.push(je);return dt}function w(){o(Ef,SyntaxError);let M=k();if(o(qc))return M;if(o(Pf)){let O=S();return o(qc,SyntaxError),{type:"select",selector:M,...O}}throw new SyntaxError("Unclosed placeable")}function k(){if(t[r]==="{")return w();if(n(xc)){let[,M,O,ne=null]=i(xc);if(M==="$")return{type:"var",name:O};if(o(Nf)){let Ie=_();if(M==="-")return{type:"term",name:O,attr:ne,args:Ie};if(qf.test(O))return{type:"func",name:O,args:Ie};throw new SyntaxError("Function names must be all upper-case")}return M==="-"?{type:"term",name:O,attr:ne,args:[]}:{type:"mesg",name:O,attr:ne}}return P()}function _(){let M=[];for(;;){switch(t[r]){case")":return r++,M;case void 0:throw new SyntaxError("Unclosed argument list")}M.push(I()),o(Lf)}}function I(){let M=k();return M.type!=="mesg"?M:o(_f)?{type:"narg",name:M.name,value:P()}:M}function S(){let M=[],O=0,ne;for(;n(wf);){a("*")&&(ne=O);let Ie=L(),dt=h();if(dt===null)throw new SyntaxError("Expected variant value");M[O++]={key:Ie,value:dt}}if(O===0)return null;if(ne===void 0)throw new SyntaxError("Expected default variant");return{variants:M,star:ne}}function L(){o(Af,SyntaxError);let M;return n(qi)?M=$():M={type:"str",value:s(kf)},o(Df,SyntaxError),M}function P(){if(n(qi))return $();if(t[r]==='"')return K();throw new SyntaxError("Invalid expression")}function $(){let[,M,O=""]=i(qi),ne=O.length;return{type:"num",value:parseFloat(M),precision:ne}}function K(){a('"',SyntaxError);let M="";for(;;){if(M+=s(Sf),t[r]==="\\"){M+=le();continue}if(a('"'))return{type:"str",value:M};throw new SyntaxError("Unclosed string literal")}}function le(){if(n(vc))return s(vc);if(n(wc)){let[,M,O]=i(wc),ne=parseInt(M||O,16);return ne<=55295||57344<=ne?String.fromCodePoint(ne):"\uFFFD"}throw new SyntaxError("Unknown escape sequence")}function E(){let M=r;switch(o(Rf),t[r]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return j(t.slice(M,r))}return t[r-1]===" "?j(t.slice(M,r)):!1}function F(M,O){return M.replace(O,"")}function j(M){let O=M.replace(Mf,`
`),ne=Tf.exec(M)[1].length;return new ga(O,ne)}}},ga=class{constructor(t,r){this.value=t,this.length=r}};function Si(e){return{__isLocalizableNumericValue:!0,value:e}}function Ci(e){return e&&e.__isLocalizableNumericValue}var Of=["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"],ha=class e{constructor(t,r){this.bundles=t,this.onError=r}static fromSources(t,r,n){let a=[];for(let{lang:o,source:i}of t){let s=o.split("-")[0],c=new hn(o,{...n,useIsolating:Of.indexOf(s)>=0});c.addResource(new Dr(i),{allowOverrides:!1}),c.addResource(new Dr(`
l10n-internal-date-day-month-year = {DATETIME($d, month: "short", day: "numeric", year: "numeric")}
l10n-internal-date-day-month = {DATETIME($d, month: "short", day: "numeric")}
l10n-internal-time = {DATETIME($d, minute: "numeric", hour: "numeric")}
      `),{allowOverrides:!1}),a.push(c)}return new e(a,r)}format(t,r){for(let n of this.bundles){if(!n.hasMessage(t))continue;let a=n.getMessage(t);if(!(a!=null&&a.value))return;let o=[],i=n.formatPattern(a.value,this.coerceNumericVariables(r),o);for(let s of o)this.onError(`Error formatting ${t} for locale ${n.locales.join(",")}: ${s}`);return i}this.onError(`Couldn't find message for key ${t} for locales ${this.getLocales().join(",")}`)}formatDate(t,r){return r.showYear?this.format("l10n-internal-date-day-month-year",{d:t}):this.format("l10n-internal-date-day-month",{d:t})}formatTime(t){let r=this.format("l10n-internal-time",{d:t});return this.getLocales()[0]==="en"?r==null?void 0:r.toLowerCase():r}hasTranslation(t,r){for(let n of this.bundles)if(n.locales.indexOf(r)>=0)return n.hasMessage(t);return!1}coerceNumericVariables(t){let r={};for(let n in t){let a=t[n];Ci(a)?r[n]=a.value:typeof a=="number"?r[n]=`${a}`:r[n]=a}return r}getLocales(){return this.bundles.reduce((t,r)=>t.concat(r.locales),[])}};var Sc=`practice-label-test-version = { $entityName } Version
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





























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































`;var Cc="",Mi={},Mc={},Ti={},$f=["ar","hy-AM","hi","tr","xx-XX"];function Tc(e){Cc=e||""}function Ec(e){for(let t in e)delete Ti[t],Mc[t]=e[t]}function ma(e,t){if(t)for(let r in t)t.hasOwnProperty(r)&&(e=e.split("{ $"+r+" }").join(t[r]));return e}function fa(e,t,r){return Ac(e,t!=null?t:{},r!=null?r:Cc)}function Ei(e){function t(r,n){return Ac(r,n!=null?n:{},e())}return t}function Ff(e){let t={};for(let r in e){let n=e[r];n!==void 0&&(t[r]=n)}return t}function Ac(e,t,r){let a=Bf(r).format(e,Ff(t));return a==null?(console.warn(`Could not format string ${e}`),""):a}function Bf(e){let t=Ti[e];if(!t){Mi[e]||(Mi[e]=ua([e]));let r=[];for(let a of Mi[e]){let o=Mc[a];o&&r.push({lang:a,source:o})}let n={};e==="xx-XX"&&(n.transform=a=>a.replace(/[a-z]/gi,"\u2666")),t=Ti[e]=ha.fromSources([...r,{lang:"en",source:Sc}],a=>{console.warn(a)},n)}return t}function Dc(e){return pn.hasOwnProperty(e)||$f.includes(e)}var Uf=typeof desmosLocaleData=="object"?desmosLocaleData:{};function Ai(){let e=ua([Be("lang"),navigator.userLanguage,navigator.language]);for(let t=0;t<e.length;t++){let r=e[t];if(Dc(r))return r}return"en"}Ec(Uf);Tc(Ai());var Hf={real:!0,imag:!0,conj:!0,arg:!0},Nc=Object.keys(Hf);var Pc={segment:!0,line:!0,ray:!0,circle:!0,arc:!0,vector:!0,glider:!0,parallel:!0,perpendicular:!0,center:!0,radius:!0,area:!0,perimeter:!0,start:!0,end:!0,angles:!0,angle:!0,directedangles:!0,directedangle:!0,coterminal:!0,supplement:!0,vertices:!0,segments:!0,intersection:!0,strictintersection:!0,translate:!0,dilate:!0,rotate:!0,reflect:!0,construction:!0,points:!0,lines:!0,circles:!0,arcs:!0,polygons:!0,rays:!0,anglebisector:!0};var Vf={"+":!0,"-":!0,"*":!0,"\\cdot":!0,"\\times":!0,"/":!0,"!":!0,"(":!0,")":!0,"\\{":!0,"\\}":!0,"(|":!0,"|)":!0,"[":!0,"]":!0,",":!0,";":!0,"...":!0,":":!0,"=":!0,">":!0,"<":!0,">=":!0,"<=":!0,"->":!0,"~":!0,"%":!0,".":!0,for:!0,with:!0,and:!0,or:!0,Letter:!0,Decimal:!0,Cmd:!0,TokenNode:!0,Differential:!0,End:!0,Trig:!0,Ln:!0,Log:!0,Int:!0,Sum:!0,Prod:!0,Err:!0};var Jt={"\\lt":"<","\\gt":">","\\le":"<=","\\ge":">=","\\leq":"<=","\\geq":">=","\\ldots":"...","\\sim":"~","\\to":"->","\\cdot":"\\cdot","\\times":"\\times","\\div":"/","\\ln":"Ln","\\log":"Log","\\int":"Int","\\sum":"Sum","\\prod":"Prod","\\backslash":"Err","\\for":"for","\\with":"with","\\and":"and","\\or":"or"},Kf=["sin","cos","tan","cot","sec","csc"];for(let e of Kf)Jt["\\"+e]="Trig",Jt["\\"+e+"h"]="Trig",Jt["\\arc"+e]="Trig",Jt["\\arc"+e+"h"]="Trig",Jt["\\ar"+e+"h"]="Trig";var jq=Object.keys(Vf);var _c=["chisqtest","chisqgof","score","conf","pleft","pright","ztest","zproptest","score","dof","estimate","stderr","null","upper","lower"];var Lc={segment:!0,triangle:!0,vector:!0,start:!0,end:!0,sphere:!0};var Wf={exp:"mq-narration-op-exp",ln:"mq-narration-op-ln",log:"mq-narration-op-log",total:"mq-narration-op-total",length:"mq-narration-op-length",count:"mq-narration-op-count",mean:"mq-narration-op-mean",median:"mq-narration-op-median",quantile:"mq-narration-op-quantile",quartile:"mq-narration-op-quartile",nCr:"mq-narration-op-nCr",nPr:"mq-narration-op-nPr",stats:"mq-narration-op-stats",stdev:"mq-narration-op-stdev",stddev:"mq-narration-op-stddev",stdDev:"mq-narration-op-stdDev",stdevp:"mq-narration-op-stdevp",stddevp:"mq-narration-op-stddevp",stdDevP:"mq-narration-op-stdDevP",mad:"mq-narration-op-mad",var:"mq-narration-op-var",varp:"mq-narration-op-varp",variance:"mq-narration-op-variance",cov:"mq-narration-op-cov",covp:"mq-narration-op-covp",corr:"mq-narration-op-corr",spearman:"mq-narration-op-spearman",lcm:"mq-narration-op-lcm",mcm:"mq-narration-op-mcm",gcd:"mq-narration-op-gcd",mcd:"mq-narration-op-mcd",gcf:"mq-narration-op-gcf",mod:"mq-narration-op-mod",ceil:"mq-narration-op-ceil",floor:"mq-narration-op-floor",round:"mq-narration-op-round",abs:"mq-narration-op-abs",min:"mq-narration-op-min",max:"mq-narration-op-max",sign:"mq-narration-op-sign",signum:"mq-narration-op-signum",sgn:"mq-narration-op-sgn",sin:"mq-narration-op-sin",cos:"mq-narration-op-cos",tan:"mq-narration-op-tan",csc:"mq-narration-op-csc",sec:"mq-narration-op-sec",cot:"mq-narration-op-cot",sinh:"mq-narration-op-sinh",cosh:"mq-narration-op-cosh",tanh:"mq-narration-op-tanh",csch:"mq-narration-op-csch",sech:"mq-narration-op-sech",coth:"mq-narration-op-coth",arcsin:"mq-narration-op-arcsin",arccos:"mq-narration-op-arccos",arctan:"mq-narration-op-arctan",arccsc:"mq-narration-op-arccsc",arcsec:"mq-narration-op-arcsec",arccot:"mq-narration-op-arccot",arcsinh:"mq-narration-op-arcsinh",arccosh:"mq-narration-op-arccosh",arctanh:"mq-narration-op-arctanh",arccsch:"mq-narration-op-arccsch",arcsech:"mq-narration-op-arcsech",arccoth:"mq-narration-op-arccoth",arsinh:"mq-narration-op-arsinh",arcosh:"mq-narration-op-arcosh",artanh:"mq-narration-op-artanh",arcsch:"mq-narration-op-arcsch",arsech:"mq-narration-op-arsech",arcoth:"mq-narration-op-arcoth",polygon:"mq-narration-op-polygon",distance:"mq-narration-op-distance",midpoint:"mq-narration-op-midpoint",sort:"mq-narration-op-sort",shuffle:"mq-narration-op-shuffle",join:"mq-narration-op-join",unique:"mq-narration-op-unique",erf:"mq-narration-op-erf",ttest:"mq-narration-op-ttest",TScore:"mq-narration-op-TScore",tscore:"mq-narration-op-tscore",normaldist:"mq-narration-op-normaldist",tdist:"mq-narration-op-tdist",poissondist:"mq-narration-op-poissondist",binomialdist:"mq-narration-op-binomialdist",uniformdist:"mq-narration-op-uniformdist",chisqdist:"mq-narration-op-chisqdist",geodist:"mq-narration-op-geodist",pdf:"mq-narration-op-pdf",cdf:"mq-narration-op-cdf",random:"mq-narration-op-random",inverseCdf:"mq-narration-op-inverseCdf",inversecdf:"mq-narration-op-inversecdf",histogram:"mq-narration-op-histogram",dotplot:"mq-narration-op-dotplot",boxplot:"mq-narration-op-boxplot",rgb:"mq-narration-op-rgb",hsv:"mq-narration-op-hsv",okhsv:"mq-narration-op-okhsv",oklab:"mq-narration-op-oklab",oklch:"mq-narration-op-oklch",for:"mq-narration-op-for",and:"mq-narration-op-and",or:"mq-narration-op-or",width:"mq-narration-op-width",height:"mq-narration-op-height",with:"mq-narration-op-with",repeat:"mq-narration-op-repeat",real:"mq-narration-op-real",imag:"mq-narration-op-imag",conj:"mq-narration-op-conj",arg:"mq-narration-op-arg",det:"mq-narration-op-det",inv:"mq-narration-op-inv",transpose:"mq-narration-op-transpose",rref:"mq-narration-op-rref",trace:"mq-narration-op-trace",rows:"mq-narration-op-rows",columns:"mq-narration-op-columns",rank:"mq-narration-op-rank",chisqtest:"mq-narration-op-chisqtest",chisqgof:"mq-narration-op-chisqgof",score:"mq-narration-op-score",conf:"mq-narration-op-conf",pleft:"mq-narration-op-pleft",pright:"mq-narration-op-pright",ztest:"mq-narration-op-ztest",zproptest:"mq-narration-op-zproptest",dof:"mq-narration-op-dof",estimate:"mq-narration-op-estimate",stderr:"mq-narration-op-stderr",null:"mq-narration-op-null",upper:"mq-narration-op-upper",lower:"mq-narration-op-lower",segment:"mq-narration-op-segment",line:"mq-narration-op-line",ray:"mq-narration-op-ray",circle:"mq-narration-op-circle",arc:"mq-narration-op-arc",vector:"mq-narration-op-vector",glider:"mq-narration-op-glider",parallel:"mq-narration-op-parallel",perpendicular:"mq-narration-op-perpendicular",center:"mq-narration-op-center",radius:"mq-narration-op-radius",area:"mq-narration-op-area",perimeter:"mq-narration-op-perimeter",start:"mq-narration-op-start",end:"mq-narration-op-end",angles:"mq-narration-op-angles",angle:"mq-narration-op-angle",directedangles:"mq-narration-op-directedangles",directedangle:"mq-narration-op-directedangle",coterminal:"mq-narration-op-coterminal",supplement:"mq-narration-op-supplement",vertices:"mq-narration-op-vertices",segments:"mq-narration-op-segments",intersection:"mq-narration-op-intersection",strictintersection:"mq-narration-op-strictintersection",translate:"mq-narration-op-translate",dilate:"mq-narration-op-dilate",rotate:"mq-narration-op-rotate",reflect:"mq-narration-op-reflect",construction:"mq-narration-op-construction",points:"mq-narration-op-points",lines:"mq-narration-op-lines",circles:"mq-narration-op-circles",arcs:"mq-narration-op-arcs",polygons:"mq-narration-op-polygons",rays:"mq-narration-op-rays",anglebisector:"mq-narration-op-anglebisector",triangle:"mq-narration-op-triangle",sphere:"mq-narration-op-sphere",tone:"mq-narration-op-tone",discretedist:"mq-narration-op-discretedist"},Rc=["exp ln log","total length count mean median quantile quartile nCr nPr stats","stdev stddev stdDev stdevp stddevp stdDevP mad var varp variance cov covp corr spearman","lcm mcm gcd mcd gcf mod ceil floor round abs min max sign signum sgn","sin cos tan csc sec cot","sinh cosh tanh csch sech coth","arcsin arccos arctan arccsc arcsec arccot","arcsinh arccosh arctanh arccsch arcsech arccoth","arsinh arcosh artanh arcsch arsech arcoth","polygon","distance midpoint","sort shuffle join unique","erf","ttest TScore tscore","normaldist tdist poissondist binomialdist uniformdist chisqdist geodist","pdf cdf random inverseCdf inversecdf","histogram dotplot boxplot","rgb hsv okhsv oklab oklch","for","width height","with","and or","repeat","tone",...Nc].join(" "),Qf=["det","inv","transpose","rref","trace","rows","columns","rank"].join(" ");Rc+=" "+Qf;var jf="alpha beta sqrt theta phi rho pi tau nthroot cbrt sum prod integral percent infinity infty cross";function Ic(e){e||(e={});let t=[jf];return e.disallowAns||t.push("ans"),e.disallowFrac||t.push("frac"),e.additionalCommands&&(t=t.concat(e.additionalCommands)),t.join(" ")}function Yf(e){e||(e={});let t=Rc;return e.additionalOperators&&e.additionalOperators.length&&(t=`${t} ${e.additionalOperators.join(" ")}`),e.includeGeometryFunctions&&(t+=" "+Object.keys(Pc).join(" ")),e.include3DFunctions&&(t+=" "+Object.keys(Lc).join(" ")),t+=" "+_c.join(" "),t+=" discretedist",t.split(" ").map(n=>{var o;let a=Wf[n];if(a===void 0&&!((o=e.additionalOperators)!=null&&o.includes(n)))throw new Error(`Programming Error: missing dictionary key for ${n}`);return a?`${n}|${a}`:n}).join(" ")}function Xf(){return"for with and or"}function Zf(){let e="ln log";for(let[t,r]of Object.entries(Jt))r=="Trig"&&(e+=" "+t.replace(/^\\/,""));return e}function Oc(e){return{autoOperatorNames:Yf(e),infixOperatorNames:Xf(),prefixOperatorNames:Zf()}}var Ts={};fm(Ts,{EditableField:()=>xv,MathField:()=>Pp,MqMathFieldApi:()=>In,StaticMath:()=>yv,config:()=>vv,getApiInstanceForElement:()=>Np});function eb(e,t){return e.left<=t&&t<e.right}function er(e,t){let r=0,n=e.length-1;for(;r<=n;){let a=Math.floor((r+n)/2),o=e[a];if(eb(o,t))return o;t<o.left?n=a-1:r=a+1}}function Rt(e,t){return!!er(e,t)}function Ze(e,t){var r;return((r=er(e,t))==null?void 0:r.right)===t+1}function tr(e,t){var r;return((r=er(e,t))==null?void 0:r.left)===t}function tb(e,t,r){let n,a=r.getTrieRoot();for(let o=t;a&&o<e.length;o++){let i=e[o];if(i.type!=="char")break;a=a.followPath(i.latex),a!=null&&a.endWord&&(n=a.endWord)}return n}function Gc(e,t,r){let{children:n,marks:a}=e;if(a.mutable_operatorName=[],a.mutable_infixOperatorName=[],a.mutable_prefixOperatorName=[],!r){for(let o=0;o<n.length;o++){let i=tb(n,o,t.autoOperatorNames);if(i){let s={left:o,right:o+i.length,word:i};a.mutable_operatorName.push(s),t.infixOperatorNames.has(i)?a.mutable_infixOperatorName.push(s):t.prefixOperatorNames.has(i)&&a.mutable_prefixOperatorName.push(s),o+=i.length-1}}return a}}function $c(e){let t=[],r=0;for(let n=0;n<e.length;n++){let a=e[n];a.type==="char"&&a.latex==="."?r+=1:r=0,r===3&&(t.push({left:n-2,right:n+1,word:"..."}),r=0)}return t}function ee(e){return e==="left"?"right":"left"}function Fc(e){return e==="up"?"down":"up"}var ie=class{constructor(t,r){this.group=t,this.index=r}eq(t){return this.group.eq(t.group)&&this.index===t.index}nodeInDirection(t){return t==="left"?this.nodeBefore():this.nodeAfter()}nodeBefore(){return this.group.nthChild(this.index-1)}nodeAfter(){return this.group.nthChild(this.index)}};var Di;function Bc(e,t){if(t<0||t>=e.length)throw new Error("Offset out of bounds");if(!Intl.Segmenter)return{segment:e[t],from:t,to:t+1};Di||(Di=new Intl.Segmenter(void 0,{granularity:"grapheme"}));let n=Di.segment(e).containing(t);if(!n)throw new Error("Intl unreachable: Offset out of bounds");let{segment:a,index:o}=n;return{segment:a,from:o,to:o+a.length}}function*zc(e){yield*Uc(e)}function*Uc(e){yield new ie(e,0);for(let t=0;t<e.children.length;t++){let r=e.children[t],n=Je(r);for(let a=0;a<n;a++){let o=It(r,a);if(o.type!=="group")throw new Error("Non-group containing non-group.");yield*Uc(o)}yield new ie(e,t+1)}}function*ze(e){yield e;for(let t of e.children){let r=Je(t);for(let n=0;n<r;n++){let a=It(t,n);if(a.type!=="group")throw new Error("Non-group containing non-group.");yield*ze(a)}}}function*rr(e){yield e;for(let t of e.children){yield t;let r=Je(t);for(let n=0;n<r;n++){let a=It(t,n);if(a.type!=="group")throw new Error("Non-group containing non-group.");yield*rr(a)}}}function Hc(e){for(let t of rr(e)){let r=Je(t);for(let n=0;n<r;n++)It(t,n).updateParent(t,n)}}function Ni(e){let t=Je(e),r=[];for(let n=0;n<t;n++)r.push(e.nthChild(n));return r}var ba=new Map([["~","\\textasciitilde"],["\\","\\textbackslash"],["`","\\textasciigrave"],["'","\\textquotesingle"],["|","\\textbar"],["<","\\textless"],[">","\\textgreater"],["^","\\textasciicircum"],[" ","\\ "],["$","\\$"],["&","\\&"],["%","\\%"],["#","\\#"],["{","\\{"],["}","\\}"],["_","\\_"]]),rb=new RegExp("["+[...ba.keys()].join("").replace(/[\^\-\]\\]/g,"\\$&")+"]","g"),Qc=new Map;for(let[e,t]of ba)Qc.set(t,e);function jc(e){return e.replace(rb,t=>{let r=ba.get(t);return r.length>2?r+" ":r})}function Yc(e){return/[\r\n\v\f\u2028\u2029]/.test(e)}function nb(e){return e.replace(/[\t\r\n\v\f\u2028\u2029]/g," ")}function ya(e){let t="";e=nb(e),e=e.replace(/ {2,}/g," ");let r=0;for(;r<e.length;){let n=ab(e,r);if(!n)return;r=n.nextPos,t+=n.text}return t}function ab(e,t){let r=t;if(t>=e.length)return;let n=e.charAt(t);if(t+=1,n==="\\")if(Kc(e.charAt(t))){do t+=1;while(Kc(e.charAt(t)));let a=e.slice(r,t);Wc(e.charAt(t))&&t++;let o=Vc(a);return o===void 0?void 0:{nextPos:t,text:o}}else{t+=1;let a=e.slice(r,t),o=Vc(a);return o===void 0?void 0:{nextPos:t,text:o}}else{if(Wc(n))return{nextPos:t,text:" "};if(ba.has(n))return;{let a=e.slice(r,t);return{nextPos:t,text:a}}}}function Vc(e){return Qc.get(e)}function Kc(e){return/^[A-Za-z]$/.test(e)}function Wc(e){return e==" "}function lt(e,t={}){let r=Ee(e,t);return Zc(r)}function Xc(e,t){let r=Jc(e,t);return Zc(r)}function Zc(e){return e.replace(/(\\(?:[a-z](?:\{\{cursor\}\})?)+) (?!(?:\{\{cursor\}\})?[a-z])/gi,"$1")}function ob(e){return/^\\[a-z]+$/i.test(e)?e+" ":e}function ht(e){return e===""?" ":e}var Ot="{{cursor}}";function Jc(e,t,r={}){var o,i;let n="",a="";for(let s of t){let c=s.getIndex(),g=Ee(s,r);if(((o=r.emitCursor)==null?void 0:o.group)===e&&r.emitCursor.index===c&&!a&&(n+=Ot),tr(e.marks.mutable_operatorName,c))a+=g;else if(Ze(e.marks.mutable_operatorName,c)){a+=g,r.emitCursorAtEveryPosition&&(n+=Ot);let h=a;if(r.emitCursorAtEveryPosition)h=a.split("").join(Ot);else if(((i=r.emitCursor)==null?void 0:i.group)===e){let y=c-a.length+2,w=c;if(r.emitCursor.index>=y&&r.emitCursor.index<=w){let k=r.emitCursor.index-y+1;h=a.slice(0,k)+Ot+a.slice(k)}}eu.has(a)?n+="\\"+h+" ":n+="\\operatorname{"+h+"}",a=""}else a?a+=g:(r.emitCursorAtEveryPosition&&(n+=Ot),n+=g)}return n}function Ee(e,t){var r,n;switch(e.type){case"char":return ob(e.latex);case"percentof":return"\\%\\operatorname{of}";case"ans":return"\\operatorname{ans}";case"token":return`\\${e.variant}{`+e.id+"}";case"brackets":{let i=Ee(e.middle,t);return`\\left${e.leftLatex}${i}\\right${e.rightLatex}`}case"sqrt":{let i=e.index?`[${Ee(e.index,t)}]`:"",s=Ee(e.radicand,t);return e.index||(s=ht(s)),`\\sqrt${i}{${s}}`}case"frac":{let i=ht(Ee(e.num,t)),s=ht(Ee(e.den,t));return`\\frac{${i}}{${s}}`}case"binom":{let i=ht(Ee(e.num,t)),s=ht(Ee(e.den,t));return`\\binom{${i}}{${s}}`}case"supsub":let a=e.sub?`_{${ht(Ee(e.sub,t))}}`:"",o=e.sup?`^{${ht(Ee(e.sup,t))}}`:"";return a+o;case"summation":{let i=e.kind,s=Ee(e.sub,t),c=Ee(e.sup,t),g=((r=e.nextSibling())==null?void 0:r.type)==="supsub"?"{}":"";return i+`_{${ht(s)}}^{${ht(c)}}`+g}case"group":{let i=Jc(e,e.children,t);return(t.emitCursorAtEveryPosition||((n=t.emitCursor)==null?void 0:n.group)===e&&t.emitCursor.index===e.children.length)&&(i+=Ot),i}case"style-cmd":{let i=e.val;e.styleParam!==void 0&&(i+="{"+e.styleParam+"}");let s=Ee(e.arg,t);return e.val!=="\\textcolor"&&(s=ht(s)),i+="{"+s+"}",i}case"matrix":{let i="\\begin{bmatrix}",{numRows:s,numCols:c}=e.getDimensions();for(let g=0;g<s;g++){g>0&&(i+="\\\\");for(let h=0;h<c;h++)h>0&&(i+="&"),i+=Ee(e.getChildAt(h,g),t)}return c===1&&e.getChildAt(0,s-1).children.length===0&&(i+="{}"),i+="\\end{bmatrix}",i}case"string":return"\\text{``"+Ee(e.body,t)+"''}";case"text-char":return jc(e.text);default:throw new Error(`Invalid node: ${e.type}`)}}function mn(e){let t=e.group.getRoot();return lt(t,{emitCursor:{group:e.group,index:e.index}}).indexOf(Ot)}function fn(e,t){let r=lt(e,{emitCursorAtEveryPosition:!0}),n=ib(r,t);if(n===void 0)return;let a=0;for(let o of zc(e)){if(a===n)return xa(o)?o:void 0;a+=1}}function xa(e){return!Gt(e.group)||e.index===0||e.index===e.group.children.length?!0:e.index==e.nodeAfter().containingSelection().left.index}function ib(e,t){let r=0,n=0;for(let a of e.matchAll(/\{\{cursor\}\}/g)){if(a.index-r===t)return n;n+=1,r+=a[0].length}}function ru(e){let t=e.group;if(Gt(t)&&(!xa(e.anchor)||!xa(e.head)))throw new Error("Programming Error: selection cannot split a grapheme cluster.")}function et(e){if(!e.matrixPullHandleType)return;let t=e.head.nodeBefore();if((t==null?void 0:t.type)!=="matrix")throw new Error("Programming Error: misplaced pull handle");return t}function*Pi(e){let t=e.group,r=t.parent();for(;r;)yield{group:t,parent:r},t=r.parent(),r=t.parent()}function va(e){for(let{group:t,parent:r}of Pi(e))if(r.type==="matrix")return{cell:t,matrix:r}}function wa(e){let t=et(e);return t?bn(t,"keyboard"):e}function _i(e){let{left:t,right:r,anchor:n,head:a,group:o}=e;return{latex:lt(o.getRoot()),startIndex:mn(t),endIndex:mn(r),anchorIndex:mn(n),headIndex:mn(a)}}function nu(e){let t=He(e);return t.length===0?"":Xc(e.group,t)}function ge(e,t){return t==="left"?e.left:e.right}function te(e){return e.left.eq(e.right)}function R(e){return{anchor:e,head:e,left:e,right:e,group:e.group}}function bn(e,t){let r=e.cursorOnSide("right");return{anchor:r,head:r,left:r,right:r,group:r.group,matrixPullHandleType:t}}function Ue(e,t,r){t=Math.min(t,r),r=Math.max(t,r);let n=new ie(e,t),a=new ie(e,r);return{anchor:n,head:a,left:n,right:a,group:a.group}}function fe(e,t){let r=lb(e,t);if(r===void 0)return;let n=Math.min(t.index,r),a=Math.max(t.index,r),o=new ie(t.group,n),i=new ie(t.group,a);if(e.group.getRoot()!==t.group.getRoot())throw new Error("Programming Error: anchor and head must be from same root");return{anchor:e,head:t,left:o,right:i,group:i.group}}function sb(e,t){return t.group.contains(e.group)}function lb(e,t){let r=t.group.depth();if(!sb(e,t))return;let n;return e.group.depth()===r?n=e.index:(n=e.group.ancestorAtDepth(r+1).getIndex(),n>=t.index&&(n+=1)),n}function ka(e,t){let r=Li(e.group,t.group);if(r.eq(t.group))return fe(e,t);let n=tu(r,e),a=tu(r,t),o=cb(n,a);return fe(e,new ie(r,o))}function cb(e,t){return t.type==="cursor"?t.index:e.index===t.index?e.type==="node"?e.groupIndex<=t.groupIndex?t.index+1:t.index:t.index+1:e.index<t.index?t.index+1:t.index}function tu(e,t){if(t.group.eq(e))return{type:"cursor",index:t.index};{let r=t.group.ancestorAtDepth(e.depth()+2);return{type:"node",index:r.parent().getIndex(),groupIndex:r.getIndex()}}}function Li(e,t){let r=e;for(;!r.contains(t);){let n=r.parent();if(!n)throw new Error("Programming error: tried to take the common ancestor of two groups in different trees.");r=n.parent()}return r}function He(e){let{left:t,right:r,group:n}=e,a=t.index,o=r.index;return n.children.slice(a,o)}function au(e,t){let r=e.group.children;for(let n=e.left.index;n<e.right.index;n++){let a=r[n].find(t);if(a)return a}}function X(e,t){let{root:r,insertedSelections:n}=nr(e,[t]);return{root:r,insertedSelection:n[0]}}function re(e,t){let{root:r,insertedSelection:n}=X(e,[t]),a=n.left.nodeAfter();if(!a||a!==t)throw new Error("Programming error: node not inserted right");return{root:r,inserted:a}}function nr(e,t){let{left:r,right:n,group:a}=e,o=r.index,i=n.index,s=a.children,c=s.slice(0,o).concat(...t,s.slice(i)),g=c.length-s.length,h=U(c);Ri(a,h),yn(a,h,k=>k<=o?k:k>=i?k+g:i+g);let y=[],w=o;for(let k of t)y.push(Ue(h,w,w+k.length)),w+=k.length;return{root:h.getRoot(),insertedSelections:y}}function qa(e){return X(e.containingSelection(),e.middle.children)}function ou(e,t,r){let n=[e.selection].concat(e.tabHistory.selections);ub(n);let{root:a}=X(t,r()),o=pb(a,n);db(n);let i={selections:o.slice(1),dir:e.tabHistory.dir};return e.withRootAndSelection(a,o[0]).withTabHistory(i)}function Ii(e){if(e==="upDown")return{type:"upDown"};if(e.startsWith("head"))return{type:"head",index:parseInt(e.slice(5))};if(e.startsWith("anchor"))return{type:"anchor",index:parseInt(e.slice(7))};throw new Error("Programming Error: Invalid stashed cursor")}function ub(e){let t=0;for(let r of e){let{head:n,anchor:a}=r;$t(n.group,`head-${t}`,n.index),$t(a.group,`anchor-${t}`,a.index),t++}}function db(e){var r,n;let t=0;for(let a of e){let{head:o,anchor:i}=a;(r=o.group.mutable_cursorIndices)==null||r.delete(`head-${t}`),(n=i.group.mutable_cursorIndices)==null||n.delete(`anchor-${t}`),t++}}function pb(e,t){let r=t.length,n=new Array(r),a=new Array(r);for(let i of ze(e)){let s=i;if(s.mutable_cursorIndices)for(let[c,g]of s.mutable_cursorIndices){let h=Ii(c);switch(h.type){case"upDown":break;case"head":if(n[h.index]!==void 0)throw new Error("Programming Error: Duplicate head");n[h.index]=new ie(i,g),s.mutable_cursorIndices.delete(c);break;case"anchor":if(a[h.index]!==void 0)throw new Error("Programming Error: Duplicate anchor");a[h.index]=new ie(i,g),s.mutable_cursorIndices.delete(c);break}}}let o=[];for(let i=0;i<r;i++){let s=n[i],c=a[i];if(s===void 0||c===void 0)throw new Error("Programming Error: Missing head or anchor.");o.push(gb(s,c,t[i]))}return o}function gb(e,t,r){if(r.matrixPullHandleType){let n=e.nodeBefore();if((n==null?void 0:n.type)==="matrix"&&e.eq(t))return bn(n,r.matrixPullHandleType);throw new Error("Programming Error: Invalid pull handle.")}else return ka(t,e)}function iu(e){for(let t of ze(e))t.mutable_upDownGroup&&(t.mutable_upDownGroup=void 0),t.mutable_cursorIndices&&t.mutable_cursorIndices.delete("upDown")}function $t(e,t,r){e.mutable_cursorIndices||(e.mutable_cursorIndices=new Map),e.mutable_cursorIndices.set(t,r)}function yn(e,t,r){if(e.mutable_cursorIndices)for(let[n,a]of e.mutable_cursorIndices){let o=r(a);$t(t,n,o)}}function su(e,t){if(!e.mutable_cursorIndices)return!1;for(let r of e.mutable_cursorIndices.values())if(t(r))return!0;return!1}function*lu(e){for(let t of ze(e))if(t.mutable_cursorIndices){for(let r of t.mutable_cursorIndices.keys())yield r;t.mutable_cursorIndices=void 0}}var Sa=class{constructor(t){this._index=-1;for(let r=0;r<t.length;r++){let n=t[r];n._parent=this,n._index=r}}parent(){return this._parent}getIndex(){return this._index}updateParent(t,r){this._parent=t,this._index=r}getRoot(){let t=this;for(;t.parent();)t=t.parent();if(t.type!=="group")throw new Error("Invariant failed: root is not group");return t}eq(t){return this===t}printLatex(){return lt(this)}siblingInDirection(t){let r=t+this.getIndex(),n=this.parent();if(n&&!(r<0||r>=Je(n)))return It(n,r)}numChildren(){return Je(this)}nextSiblingInDir(t){return t==="right"?this.nextSibling():this.prevSibling()}nextSibling(){return this.siblingInDirection(1)}prevSibling(){return this.siblingInDirection(-1)}nthChild(t){let r=Je(this);return t<0||t>=r?void 0:It(this,t)}firstChild(){return this.nthChild(0)}lastChild(){let t=Je(this);return this.nthChild(t-1)}lastChildInDir(t){return t==="left"?this.firstChild():this.lastChild()}firstCursor(){return new ie(this,0)}lastCursor(){return new ie(this,Je(this))}lastCursorInDir(t){return t==="left"?this.firstCursor():this.lastCursor()}cursorOnSide(t){return t==="left"?new ie(this.parent(),this.getIndex()):new ie(this.parent(),this.getIndex()+1)}allParents(){let t=[];for(let r=this;r!==void 0;r=r.parent())t.push(r);return t}depth(){let t=0,r=this;for(;r.parent();)r=r.parent(),t+=1;return t}ancestorAtDepth(t){let r=this,n=this.depth();if(t<0||t>n)throw new Error(`Invalid depth ${t} for node of depth ${n}`);for(;n>t;)r=r.parent(),n-=1;return r}contains(t){return this.depth()<=t.depth()&&this.eq(t.ancestorAtDepth(this.depth()))}smallestAncestorGroup(){if(this.type==="group")return this;let t=this.parent();if(t===void 0)throw new Error("Programming Error: Non-group as root of the tree.");if(t.type==="group")return t;throw new Error("Programming error: non-group containing non-group.")}containingSelection(){if(this.type==="group")return Ue(this,0,this.numChildren());if(this.type==="text-char")return this.containingGraphemeClusterSelection();{let t=this.parent(),r=this.getIndex();return Ue(t,r,r+1)}}getDomNode(){var t;return this.type==="group"?this.mutable_domNode:(t=this.parent().mutable_domChildren)==null?void 0:t[this.getIndex()]}boundingClientRect(){let t=this.getDomNode();if(t&&t.getClientRects().length!==0)return t.getBoundingClientRect()}find(t){var r;if(t(this))return this;for(let n=0;n<this.numChildren();n++){let a=(r=this.nthChild(n))==null?void 0:r.find(t);if(a)return a}}},Ae=class extends Sa{};function Ri(e,t){if(t.type==="group"!=(e.type==="group"))throw new Error("Cannot replace group with non-group or vice-versa.");let r=e.parent();if(r!==void 0){let n=e.getIndex(),a=bb(r,n,t);Ri(r,a)}}var he=class extends Ae{constructor(r){super([]);this.type="char";this.latex=r}};function Gt(e){var t;return((t=e.parent())==null?void 0:t.type)==="string"}var Nr=class extends Ae{constructor(r){super([]);this.type="text-char";if(this.text=r,r.length!==1)throw new Error(`Char ${JSON.stringify(r)} is not one code unit.`)}containingGraphemeClusterSelection(){let r=this.containingString(),n=this.getIndex(),{from:a,to:o}=Bc(r.fullText(),n);return Ue(this.parent(),a,o)}containingString(){let r=this.parent().parent();if((r==null?void 0:r.type)!=="string")throw new Error("Invariant violation: text-char not inside string");return r}},Ft=class extends Ae{constructor({body:r,ghostSide:n}){super([r]);this.type="string";let a=r.children.find(o=>o.type!=="text-char");if(a)throw new Error(`Unexpected string child of type ${a.type}.`);this.body=r,this.ghostSide=n,this.text=this.body.children.map(o=>o.type!=="text-char"?"":o.text).join("")}fullText(){return this.text}};function zt(e,t){return new Ft({body:e.body,ghostSide:t})}var xn=class extends Sa{constructor(r){r=hb(r);super(r);this.type="group";let n=$c(r);this.marks={mutable_operatorName:[],mutable_infixOperatorName:[],mutable_prefixOperatorName:[],ellipsis:n},this.children=r}};function U(e){return new xn(e)}function cu(e){e.mutable_domChildren=void 0,e.mutable_domNode=void 0,e.marks.mutable_infixOperatorName=[],e.marks.mutable_prefixOperatorName=[],e.marks.mutable_operatorName=[]}function uu(e,t){let r=U(e.children.concat(t.children));return yn(e,r,n=>n),yn(t,r,n=>n+e.children.length),r}function hb(e){let t;for(let r=0;r<e.length;r++){let n=e[r];n.type==="brackets"&&(n.ghostSide==="left"&&r>0||n.ghostSide==="right"&&r<e.length-1)&&(t||(t=Array.from(e)),t[r]=du(n,void 0))}return t!=null?t:e}var Bt=class extends Ae{constructor({radicand:r,index:n}){let a=[];n&&a.push(n),a.push(r);super(a);this.type="sqrt";this.radicand=r,this.index=n}},ke=class extends Ae{constructor({sub:r,sup:n}){let a=[];r&&a.push(r),n&&a.push(n);super(a);this.type="supsub";this.sup=n,this.sub=r}},Mt=class extends Ae{constructor({num:r,den:n}){super([r,n]);this.type="frac";this.num=r,this.den=n}},ar=class extends Ae{constructor({num:r,den:n}){super([r,n]);this.type="binom";this.num=r,this.den=n}},Pr=class extends Ae{constructor(){super([]);this.type="ans"}},Ca=class extends Ae{constructor({variant:r,id:n}){super([]);this.type="token";this.variant=r,this.id=n}},or=class extends Ae{constructor({kind:r,sub:n,sup:a}){let o=[];n&&o.push(n),a&&o.push(a);super(o);this.type="summation";this.kind=r,this.sub=n,this.sup=a}},Ve=class extends Ae{constructor({leftSymbol:r,rightSymbol:n,leftLatex:a,rightLatex:o,ghostSide:i,middle:s}){super([s]);this.type="brackets";this.leftSymbol=r,this.rightSymbol=n,this.leftLatex=a,this.rightLatex=o,this.ghostSide=i,this.middle=s}};function du(e,t){return new Ve({leftSymbol:e.leftSymbol,rightSymbol:e.rightSymbol,leftLatex:e.leftLatex,rightLatex:e.rightLatex,ghostSide:t,middle:e.middle})}function vn(e,t){return new Ve({leftSymbol:e.leftSymbol,rightSymbol:e.rightSymbol,leftLatex:e.leftLatex,rightLatex:e.rightLatex,ghostSide:e.ghostSide,middle:t})}function Oi(e,t,r,n){return new Ve({leftSymbol:t==="left"?r:e.leftSymbol,rightSymbol:t==="right"?r:e.rightSymbol,leftLatex:t==="left"?n:e.leftLatex,rightLatex:t==="right"?n:e.rightLatex,ghostSide:void 0,middle:e.middle})}function Ma(e,t){return t==="left"?e.leftSymbol:e.rightSymbol}function pu(e,t){return t==="left"?e.leftLatex:e.rightLatex}var _r=class extends Ae{constructor(){super([]);this.type="percentof"}},Lr=class extends Ae{constructor({val:r,styleParam:n,arg:a}){super([a]);this.type="style-cmd";this.val=r,this.styleParam=n,this.arg=a}};function Ta(e,t){return e.numCols===t.numCols&&e.numRows===t.numRows}var ct=class e extends Ae{constructor({children:r,numCols:n,resizingInfo:a}){if(r.length===0||r.length%n!==0)throw new Error("Programming Error: invalid child count");super(r);this.type="matrix";this.children=r,this.numCols=n,this.resizingInfo=a}getNumCols(){return this.numCols}getNumRows(){return this.children.length/this.numCols}getDimensions(){return{numCols:this.getNumCols(),numRows:this.getNumRows()}}getChildAt(r,n){if(0<=n&&n<this.getNumRows()&&0<=r&&r<this.numCols)return this.children[n*this.numCols+r]}getPosOfChild(r){if(r.parent()!==this)throw new Error("Programming Error: getPosOfChild on not my child.");let n=r.getIndex(),a=this.numCols;return{x:n%a,y:Math.floor(n/a)}}withResizingStarted(){let r={colThresholds:void 0,rowThresholds:void 0,originalMatrix:this};return new e({children:this.children,numCols:this.numCols,resizingInfo:r})}withResizingDone(){return new e({children:this.children,numCols:this.numCols})}isBeingResized(){return this.resizingInfo!==void 0}};function Je(e){switch(e.type){case"char":case"text-char":case"percentof":case"ans":case"token":return 0;case"brackets":case"string":return 1;case"sqrt":return e.index?2:1;case"frac":case"binom":return 2;case"supsub":case"summation":return(e.sub?1:0)+(e.sup?1:0);case"group":case"matrix":return e.children.length;case"style-cmd":return 1;default:throw new Error(`Invalid node: ${e.type}`)}}function ir(e){return Je(e)===0}function It(e,t){let r=mb(e,t);if(r.type==="group"==(e.type==="group"))throw new Error("Cannot put a group inside a group or non-group inside a non-group.");return r}function gu(e){if(e.type==="group")return e.children;let t=[];for(let r=0;r<e.numChildren();r++)t.push(It(e,r));return t}function Gi(e){let t=0;for(let r of gu(e)){let n=Gi(r);n>t&&(t=n)}return(e.type==="group"?1:0)+t}function $i(e,t){return e.type==="matrix"&&(e.getNumRows()>t||e.getNumCols()>t)?!0:gu(e).some(r=>$i(r,t))}function hu(e){switch(e.type){case"char":case"percentof":case"ans":case"token":return!0;case"text-char":case"group":case"frac":case"binom":case"sqrt":case"supsub":case"summation":case"brackets":case"style-cmd":case"matrix":case"string":return!1;default:throw new Error(`Invalid node: ${e.type}`)}}function mb(e,t){switch(e.type){case"char":case"text-char":case"percentof":case"ans":case"token":break;case"brackets":if(t==0)return e.middle;break;case"string":if(t==0)return e.body;break;case"sqrt":if(e.index){if(t==0)return e.index;if(t==1)return e.radicand}else if(t==0)return e.radicand;break;case"binom":case"frac":if(t==0)return e.num;if(t==1)return e.den;break;case"supsub":case"summation":if(e.sub&&e.sup){if(t==0)return e.sub;if(t==1)return e.sup}else if(e.sub){if(t==0)return e.sub}else if(e.sup){if(t==0)return e.sup}else throw new Error("SupSub or Summation missing sup or sub.");break;case"group":case"matrix":if(0<=t&&t<e.children.length)return e.children[t];break;case"style-cmd":if(t==0)return e.arg;break;default:throw new Error(`Invalid node: ${e.type}`)}throw new Error(`Child not present with index ${t}.`)}function wn(e,t){if(e.index){if(t==0)return"index";if(t==1)return"radicand"}else if(t==0)return"radicand";throw new Error(`Child not present with index ${t}.`)}function sr(e,t){if(e.sub&&e.sup){if(t==0)return"sub";if(t==1)return"sup"}else if(e.sub){if(t==0)return"sub"}else if(e.sup){if(t==0)return"sup"}else throw new Error("SupSub or Summation missing sup or sub.");throw new Error(`Child not present with index ${t}.`)}function Rr(e,t){if(t==0)return"num";if(t==1)return"den";throw new Error(`Child not present with index ${t}.`)}function fb(e,t){switch(e.type){case"char":case"text-char":case"percentof":case"ans":case"token":break;case"brackets":if(t==0)return"middle";break;case"string":if(t==0)return"body";break;case"sqrt":return wn(e,t);case"binom":case"frac":return Rr(e,t);case"supsub":case"summation":return sr(e,t);case"style-cmd":if(t==0)return"arg";break;default:throw new Error(`Invalid node: ${e.type}`)}throw new Error(`Child not present with index ${t}.`)}function bb(e,t,r){if(e.type==="group"){if(r.type==="group")throw new Error("Invariant violation: A group should not have a non-group as child.");let a=e.children.slice(0,t).concat([r],e.children.slice(t+1)),o=U(a);return o.mutable_cursorIndices=e.mutable_cursorIndices,o}if(r.type!=="group")throw new Error("Invariant violation: A non-group should not have a group as child.");if(e.type==="matrix"){let a=Array.from(e.children);return a[t]=r,new ct({children:a,numCols:e.getNumCols()})}if(ir(e))throw new Error("Programming Error: leaves have no children.");let n=fb(e,t);switch(e.type){case"frac":return new Mt({...e,[n]:r});case"binom":return new ar({...e,[n]:r});case"sqrt":return new Bt({...e,[n]:r});case"supsub":return new ke({...e,[n]:r});case"summation":return new or({...e,[n]:r});case"brackets":return new Ve({...e,[n]:r});case"style-cmd":return new Lr({...e,[n]:r});case"string":return new Ft({...e,[n]:r})}}function mu(e,t){switch(e.type){case"brackets":return du(e,t);case"string":return zt(e,t);default:throw new Error(`Programming Error: ${e.type} is not brackets or string`)}}var Ea={" ":"\\ ",pm:"\\pm",mp:"\\mp",times:"\\times",div:"\\div",cdot:"\\cdot",le:"\\le",ge:"\\ge",sim:"\\sim",tildeNbsp:"~",approx:"\\approx",cong:"\\cong",ncong:"\\ncong",nsim:"\\nsim",ne:"\\ne",parallel:"\\parallel",nparallel:"\\nparallel",perp:"\\perp",to:"\\to",forall:"\\forall",square:"\\square",mid:"\\mid",bigcirc:"\\bigcirc",angle:"\\angle",measuredangle:"\\measuredangle",triangle:"\\triangle",degree:"\\degree",parallelogram:"\\parallelogram",infty:"\\infty",backslash:"\\backslash","\\":"\\backslash",$:"\\$","?":"?","!":"!","@":"@","&":"\\&","#":"#","%":"\\%",",":",",".":"."},yb=["alpha","beta","gamma","delta","epsilon","varepsilon","zeta","eta","theta","vartheta","iota","kappa","varkappa","lambda","mu","nu","xi","pi","varpi","rho","varrho","sigma","varsigma","tau","upsilon","phi","varphi","chi","psi","omega","digamma","Gamma","Delta","Theta","Lambda","Xi","Pi","Sigma","Upsilon","Phi","Psi","Omega"],fu={};for(let e of yb){let t="\\"+e;Ea[e]=t,fu[t]=!0}function Ir(e){return Ea[e]||e}function bu(e){if(e.type!=="char")return!1;let t=e.latex;return!!(/^[a-zA-Z]$/.test(t)||fu[t])}var xb={space:" ",bar:"overline",dfrac:"frac",cfrac:"frac",fraction:"frac",choose:"binom",binomial:"binom","\u2211":"sum",summation:"sum","\u220F":"prod",product:"prod",coproduct:"coprod","\u222B":"int",integral:"int",subscript:"_",superscript:"^",supscript:"^",\u03B1:"alpha",\u03B2:"beta",\u03B3:"gamma",\u03B4:"delta","\u03F5":"epsilon",\u03B5:"varepsilon",epsiv:"varepsilon",\u03B6:"zeta",\u03B7:"eta",\u03B8:"theta",thetav:"vartheta",thetasym:"vartheta",\u03D1:"vartheta",\u03B9:"iota",\u03BA:"kappa",kappav:"varkappa",\u03F0:"varkappa",\u03BB:"lambda",\u03BC:"mu",\u03BD:"nu",\u03BE:"xi",\u03C0:"pi",piv:"varpi",\u03D6:"varpi",\u03C1:"rho",rhov:"varrho",\u03F1:"varrho",\u03C3:"sigma",sigmaf:"varsigma",sigmav:"varsigma",\u03C2:"varsigma",\u03C4:"tau",upsi:"upsilon",\u03C5:"upsilon",\u03D5:"phi",\u03C6:"varphi",phiv:"varphi",\u03C7:"chi",\u03C8:"psi",\u03C9:"omega",gammad:"digamma",Gammad:"digamma",\u03DC:"digamma",\u0393:"Gamma",\u0394:"Delta",\u0398:"Theta",\u039B:"Lambda",\u039E:"Xi",\u03A0:"Pi",\u03A3:"Sigma",\u03A5:"Upsilon",Upsi:"Upsilon",upsih:"Upsilon",Upsih:"Upsilon",\u03A6:"Phi",\u03A8:"Psi",\u03A9:"Omega","\u2212":"-","\u2014":"-","\u2013":"-","\xB1":"pm",plusminus:"pm",plusmn:"pm","\u2213":"mp",mnplus:"mp",minusplus:"mp","\xD7":"times",cross:"times","\xF7":"div",divide:"div",divides:"div",sdot:"cdot","~":"sim","\u2241":"nsim","\u2248":"approx","\u2260":"ne",neq:"ne","\u2245":"cong","\u2247":"ncong",gt:">","\u2265":"ge",geq:"ge",lt:"<","\u2264":"le",leq:"le",prime:"'",dprime:"\u2033","\u25EF":"bigcirc","\u2225":"parallel","\u2226":"nparallel","\u27C2":"perp","\u2192":"to","\u2200":"forall","\u2220":"angle",ang:"angle","\u2221":"measuredangle","\u25B3":"triangle","\xB0":"degree","\u25B1":"parallelogram","\u25A1":"square","\u221E":"infty",infin:"infty",infinity:"infty"};function lr(e){return xb[e]||e}var vb={arg:"cmd-operatorname",deg:"cmd-operatorname",det:"cmd-operatorname",dim:"cmd-operatorname",exp:"cmd-operatorname",gcd:"cmd-operatorname",hom:"cmd-operatorname",inf:"cmd-operatorname",ker:"cmd-operatorname",lg:"cmd-operatorname",lim:"cmd-operatorname",ln:"cmd-operatorname",log:"cmd-operatorname",max:"cmd-operatorname",min:"cmd-operatorname",sup:"cmd-operatorname",limsup:"cmd-operatorname",liminf:"cmd-operatorname",injlim:"cmd-operatorname",projlim:"cmd-operatorname",Pr:"cmd-operatorname",arcsinh:"cmd-operatorname",arsinh:"cmd-operatorname",sinh:"cmd-operatorname",arcsin:"cmd-operatorname",sin:"cmd-operatorname",arccosh:"cmd-operatorname",arcosh:"cmd-operatorname",cosh:"cmd-operatorname",arccos:"cmd-operatorname",cos:"cmd-operatorname",arctanh:"cmd-operatorname",artanh:"cmd-operatorname",tanh:"cmd-operatorname",arctan:"cmd-operatorname",tan:"cmd-operatorname",arcsech:"cmd-operatorname",arsech:"cmd-operatorname",sech:"cmd-operatorname",arcsec:"cmd-operatorname",sec:"cmd-operatorname",arccosech:"cmd-operatorname",arcosech:"cmd-operatorname",cosech:"cmd-operatorname",arccosec:"cmd-operatorname",cosec:"cmd-operatorname",arccsch:"cmd-operatorname",arcsch:"cmd-operatorname",csch:"cmd-operatorname",arccsc:"cmd-operatorname",csc:"cmd-operatorname",arccotanh:"cmd-operatorname",arcotanh:"cmd-operatorname",cotanh:"cmd-operatorname",arccotan:"cmd-operatorname",cotan:"cmd-operatorname",arccoth:"cmd-operatorname",arcoth:"cmd-operatorname",coth:"cmd-operatorname",arccot:"cmd-operatorname",cot:"cmd-operatorname",arcctgh:"cmd-operatorname",arctgh:"cmd-operatorname",ctgh:"cmd-operatorname",arcctg:"cmd-operatorname",ctg:"cmd-operatorname",gcf:"cmd-operatorname",hcf:"cmd-operatorname",lcm:"cmd-operatorname",proj:"cmd-operatorname",span:"cmd-operatorname",operatorname:"operatorname",f:"symbol",space:"symbol"," ":"symbol",".":"symbol",prime:"symbol","'":"symbol",dprime:"symbol","\u2033":"fragment",backslash:"symbol",$:"symbol","?":"symbol",square:"symbol",mid:"symbol",",":"symbol","@":"symbol","&":"symbol","%":"percent",parallel:"symbol",nparallel:"symbol",perp:"symbol",alpha:"symbol",beta:"symbol",gamma:"symbol",delta:"symbol",zeta:"symbol",eta:"symbol",theta:"symbol",iota:"symbol",kappa:"symbol",mu:"symbol",nu:"symbol",xi:"symbol",rho:"symbol",sigma:"symbol",tau:"symbol",chi:"symbol",psi:"symbol",omega:"symbol",phi:"symbol",varphi:"symbol",epsilon:"symbol",varepsilon:"symbol",varpi:"symbol",varsigma:"symbol",vartheta:"symbol",upsilon:"symbol",digamma:"symbol",varkappa:"symbol",varrho:"symbol",pi:"symbol",lambda:"symbol",Upsilon:"symbol",Gamma:"symbol",Delta:"symbol",Theta:"symbol",Lambda:"symbol",Xi:"symbol",Pi:"symbol",Sigma:"symbol",Phi:"symbol",Psi:"symbol",Omega:"symbol",forall:"symbol","\u2070":"fragment","\xB9":"fragment","\xB2":"fragment","\xB3":"fragment","\u2074":"fragment","\u2075":"fragment","\u2076":"fragment","\u2077":"fragment","\u2078":"fragment","\u2079":"fragment","\xBC":"fragment","\xBD":"fragment","\xBE":"fragment","\u2153":"fragment","\u2154":"fragment","\u2155":"fragment","\u2156":"fragment","\u2157":"fragment","\u2158":"fragment","\u2159":"fragment","\u215A":"fragment","\u215B":"fragment","\u215C":"fragment","\u215D":"fragment","\u215E":"fragment","\u2150":"fragment","\u2151":"fragment","\u2152":"fragment","\u221A":"fragment","\u2018":"fragment","\u2019":"fragment",\u02BC:"fragment","+":"symbol","-":"symbol",pm:"symbol",mp:"symbol",cdot:"symbol",to:"symbol","<":"symbol",">":"symbol",le:"symbol",ge:"symbol",infty:"symbol",ne:"symbol",times:"symbol",div:"symbol",tildeNbsp:"symbol",sim:"symbol",approx:"symbol",bigcirc:"symbol",angle:"symbol",degree:"symbol",triangle:"symbol",cong:"symbol",measuredangle:"symbol",parallelogram:"symbol",ncong:"symbol",nsim:"symbol",mathrm:"math-command",mathit:"math-command",mathbf:"math-command",mathsf:"math-command",mathtt:"math-command",underline:"math-command",bar:"math-command",overline:"math-command",overrightarrow:"math-command",overleftarrow:"math-command",overleftrightarrow:"math-command",overarc:"math-command",dot:"math-command",textcolor:"textcolor",_:"math-command","^":"math-command",sum:"summation",prod:"summation",coprod:"summation",int:"summation",frac:"math-command-2",over:"math-command",ans:"symbol",percentof:"symbol",percent:"symbol",token:"math-command",tokenName:"math-command",sqrt:"sqrt",hat:"math-command",nthroot:"sqrt",cbrt:"cbrt",vec:"math-command",tilde:"math-command",langle:"solo-bracket",rangle:"solo-bracket",lVert:"solo-bracket",rVert:"solo-bracket",left:"left",right:"right",begin:"begin",text:"text",binomial:"math-command-2",binom:"math-command-2",choose:"math-command-2"},wb={"\u2070":"^0","\xB9":"^1","\xB2":"^2","\xB3":"^3","\u2074":"^4","\u2075":"^5","\u2076":"^6","\u2077":"^7","\u2078":"^8","\u2079":"^9","\xBC":"\\frac14","\xBD":"\\frac12","\xBE":"\\frac34","\u2153":"\\frac13","\u2154":"\\frac23","\u2155":"\\frac15","\u2156":"\\frac25","\u2157":"\\frac35","\u2158":"\\frac45","\u2159":"\\frac16","\u215A":"\\frac56","\u215B":"\\frac18","\u215C":"\\frac38","\u215D":"\\frac58","\u215E":"\\frac78","\u2150":"\\frac17","\u2151":"\\frac19","\u2152":"\\frac{1}{10}","\u221A":"\\sqrt{}","\u2033":"''","\u2018":"'","\u2019":"'",\u02BC:"'"};function yu(e){return vb[e]}function Aa(e){return wb[e]||""}function Fi(e){return e.stream[0]}function kb(e){return{...e,stream:e.stream.slice(1)}}function xu(e){return Fi(e)===void 0}function De(e,t){if(e.stream.startsWith(t))return{val:t,state:{stream:e.stream.slice(t.length)}}}function vu(e){return{stream:e}}function qb(e){return xu(e)?void 0:{val:Fi(e),state:kb(e)}}function rt(e,t){let r=t.exec(e.stream);if(r){let n=r[0];return{val:r[0],state:{stream:e.stream.slice(n.length)}}}else return}function ue(e,t){return{state:e,tree:t}}function Sb(e,t){return{state:e,result:t}}function Cb(e){{let t=De(e,"\\");if(!t)return rt(e,/^[^\\a-z]/i);e=t.state}{let t=rt(e,/^[a-z]+/i);if(t)return t}{let t=rt(e,/^\s+/);if(t)return{val:" ",state:t.state}}{let t=qb(e);if(t)return t}}function Mb(e,t){let r=Cb(e);if(!r)return;e=r.state;let n=lr(r.val);return Tb(e,n)}function Tb(e,t){let r=yu(t);if(r)switch(r){case"cmd-operatorname":return ue(e,t.split("").map(n=>({type:"letter",content:n,latex:n})));case"fragment":{let n=Aa(t);if(!n)return;let a=Da(vu(n));return a?ue(e,a.tree.children):void 0}case"left":{e=Ke(e);let n="",a="";{let c=rt(e,/^(?:[([|]|\\\{|\\langle(?![a-zA-Z])|\\lVert(?![a-zA-Z]))/);if(!c)return;e=c.state,a=c.val,n=a.replace("\\",""),(a==="\\langle"||a==="\\lVert")&&(a+=" ")}let o;{let c=Da(e);if(!c)return;e=c.state,o=c.tree}{let c=De(e,"\\right");if(!c)return;e=c.state,e=Ke(e)}let i="",s="";{let c=rt(e,/^(?:[\])|]|\\\}|\\rangle(?![a-zA-Z])|\\rVert(?![a-zA-Z]))/);if(!c)return;e=c.state,s=c.val,i=s.replace("\\",""),(s==="\\rangle"||s==="\\rVert")&&(s+=" ")}return ue(e,{type:"brackets",leftSymbol:n,leftLatex:a,rightSymbol:i,rightLatex:s,middle:o})}case"right":return;case"solo-bracket":{let n=mt(e);if(!n)return;if(e=n.state,t==="langle"||t==="rangle")return ue(e,{type:"brackets",leftSymbol:"langle",leftLatex:"\\langle ",rightSymbol:"rangle",rightLatex:"\\rangle ",ghostSide:t==="langle"?"right":"left",middle:n.tree});if(t==="lVert"||t==="rVert")return ue(e,{type:"brackets",leftSymbol:"lVert",leftLatex:"\\lVert ",rightSymbol:"rVert",rightLatex:"\\rVert ",ghostSide:t==="lVert"?"right":"left",middle:n.tree});throw new Error("unrecognized. solo-bracket ctrlSeq: "+t)}break;case"math-command":case"math-command-2":{let n=r==="math-command-2"?2:1,a=[];for(let o=0;o<n;o++){let i=mt(e);if(!i)return;e=i.state,a.push(i.tree)}return ue(e,{type:"command",ctrlSeq:t,blocks:a})}case"operatorname":{let n=mt(e);if(!n)return;let a="";for(let o of n.tree.children)if(o.type!=="letter"){a="";break}else a+=o.content;return a==="ans"?ue(n.state,{type:"ans"}):ue(n.state,n.tree.children)}case"percent":{e=Ke(e);let n=De(e,"\\operatorname{of}");return n?ue(n.state,{type:"percentof"}):ue(e,{type:"symbol",content:"%",latex:"\\%"})}case"sqrt":{let n=Ob(e);n&&(e=n.state);let a=mt(e);return a?(e=a.state,ue(e,{type:"sqrt",index:n==null?void 0:n.tree,radicand:a.tree})):void 0}case"cbrt":{let n=mt(e);return n?(e=n.state,ue(e,{type:"sqrt",index:{type:"block",children:[{type:"digit",content:"3"}]},radicand:n.tree})):void 0}case"summation":{let n={type:"block",children:[]},a={type:"block",children:[]};for(;;){e=Ke(e);let o;{let i=rt(e,/^[_^]/);if(!i)break;e=i.state,o=i.val==="_"?"sub":"sup"}{let i=mt(e);if(!i)return;e=i.state;let s=o==="sub"?n.children:a.children;for(let c of i.tree.children)s.push(c)}}switch(t){case"int":case"sum":case"prod":case"coprod":return ue(e,{type:"summation",kind:"\\"+t,sub:n,sup:a});default:throw new Error("Programming Error: summation sub-parser incorrect.")}}case"symbol":return ue(e,{type:"symbol",latex:t,content:t});case"textcolor":{e=Ke(e);{let a=De(e,"{");if(!a)return;e=a.state}let n;{let a=rt(e,/^[#\w\s.,()%-]*/);if(!a)return;e=a.state,n=a.val}{let a=De(e,"}");if(!a)return;e=a.state}{let a=mt(e);return a?(e=a.state,ue(e,{type:"style-cmd",ctrlSeq:"\\textcolor",styleParam:n,arg:a.tree})):void 0}}case"begin":return Lb(e);case"text":return Rb(e);default:return}}function Ke(e){let t=rt(e,/^\s*/);return t?t.state:e}function Eb(e){let t=rt(e,/^[a-z]/i);if(t!=null&&t.val)return ue(t.state,{type:"letter",latex:t.val,content:t.val})}function Ab(e){let t=rt(e,/^[0-9]/);if(t!=null&&t.val)return ue(t.state,{type:"digit",latex:t.val,content:t.val})}function Db(e){let t=rt(e,/^[^${}\\_^]/);if(t!=null&&t.val)return ue(t.state,{type:"symbol",latex:t.val,content:t.val})}function Nb(e){let t=Mb(e);if(t||(t=Eb(e),t)||(t=Ab(e),t)||(t=Db(e),t))return t}function Da(e){let t={type:"block",children:[]},r;for(;r=mt(e);){e=r.state;for(let n of r.tree.children)t.children.push(n)}return e=Ke(e),ue(e,t)}function Pb(e){e=Ke(e);{let t=De(e,"\\end{bmatrix}");if(t)return{state:t.state,result:"\\end{bmatrix}"}}{let t=De(e,"&");if(t)return{state:t.state,result:"&"}}{let t=De(e,"\\\\");if(t)return{state:t.state,result:"\\\\"}}}function _b(e){let t={type:"block",children:[]},r;for(;;){if(r=Pb(e),r!==void 0){e=r.state;break}let n=mt(e);if(!n)return;e=n.state;for(let a of n.tree.children)t.children.push(a)}return e=Ke(e),Sb(e,{tree:t,stopSymbol:r.result})}function Lb(e){{let n=De(e,"{bmatrix}");if(!n)return;e=Ke(n.state)}let t=[],r=[];e:for(;;){if(r.length===0){let a=De(e,"\\end{bmatrix}");if(a){e=a.state;break}}let n=_b(e);if(!n)return;switch(e=Ke(n.state),r.push(n.result.tree),n.result.stopSymbol){case"&":break;case"\\\\":t.push(r),r=[];break;case"\\end{bmatrix}":{t.push(r);break e}}}return ue(e,{type:"matrix",rows:t})}function Rb(e){{let r=De(e,"{");if(!r)return;e=r.state}let t;{let r=rt(e,/^(?:[^}\\]|\\.)*/);if(!r)return;e=r.state;let n=r.val;if(!n.startsWith("``")||!n.endsWith("''")||(t=ya(n.slice(2,-2)),t===void 0))return}{let r=De(e,"}");if(!r)return;e=r.state}return ue(e,{type:"string",text:t})}function Ib(e){{let r=De(e,"{");if(!r)return;e=r.state}let t;{let r=Da(e);if(!r)return;e=r.state,t=r.tree}{let r=De(e,"}");if(!r)return;e=r.state}return ue(e,t)}function mt(e){e=Ke(e);let t=Ib(e);if(t)return t;let r=Nb(e);if(r)return ue(r.state,{type:"block",children:Array.isArray(r.tree)?r.tree:[r.tree]})}function Ob(e){{let r=De(e,"[");if(!r)return;e=r.state}let t=[];{let r;for(;Fi(e)!=="]"&&(r=mt(e));){e=r.state;for(let n of r.tree.children)t.push(n)}}e=Ke(e);{let r=De(e,"]");if(!r)return;e=r.state}return ue(e,{type:"block",children:t})}function Gb(e,t){let r;for(let n=t;n<e.children.length;n++){let a=e.children[n];if(a.type!=="command")return;let o=a.ctrlSeq;if(o!=="_"&&o!=="^")return;e.children.splice(n,1),n-=1,r||(r={type:"supsub",sub:void 0,sup:void 0},n+=1,e.children.splice(n,0,r));let i=o==="_"?"sub":"sup";r[i]||(r[i]={type:"block",children:[]});let s=r[i].children;for(let c of a.blocks[0].children)s.push(c)}}function tt(e,t){for(let r=0;r<e.children.length;r++)Gb(e,r);for(let r of e.children)switch(r.type){case"command":for(let n of r.blocks)tt(n,t);break;case"supsub":r.sub&&tt(r.sub,t),r.sup&&tt(r.sup,t);break;case"summation":r.sub&&tt(r.sub,t),r.sup&&tt(r.sup,t);break;case"brackets":tt(r.middle,t);break;case"sqrt":r.index&&tt(r.index,t),tt(r.radicand,t);break;case"block":tt(r,t);break;case"style-cmd":tt(r.arg,t);break;case"matrix":{for(let n of r.rows)for(let a of n)tt(a,t);break}case"digit":case"ans":case"percentof":case"symbol":case"letter":case"string":break;default:}}function wu(e,t){let r=vu(e),n={type:"block",children:[]};r=Ke(r);let a=Da(r);return!a||(r=a.state,!xu(r))?n:(tt(a.tree,t),a.tree)}var $b={",":!0,";":!0,":":!0},Fb={"+":!0,"-":!0,"\\pm":!0,"\\mp":!0},Bi={"+":!0,"-":!0,"=":!0,"<":!0,">":!0,"\\ge":!0,"\\le":!0,"\\sim":!0,"\\approx":!0,"\\to":!0,"\\ne":!0,"\\cong":!0,"\\ncong":!0,"\\pm":!0,"\\mp":!0,"\\times":!0,"\\div":!0,"\\cdot":!0};function zi(e,t,r){return e.type!=="char"?!1:!!(Bi[e.latex]||Ze(t.marks.mutable_infixOperatorName,r))}function Bb(e){let t=e.parent();if((t==null?void 0:t.type)==="group"){let r=e.getIndex();if(r!==-1)return{group:t,index:r}}throw new Error("could not find groupAndIndex")}function ku(e){var n;let t=e.prevSibling();if(t){let{group:a,index:o}=Bb(t);return!(zi(t,a,o)||Ze(a.marks.mutable_prefixOperatorName,o)||t.type==="char"&&/^(\\ )|[,;:\(\[]$/.test(t.latex)||t.type==="summation")}let r=(n=e.parent())==null?void 0:n.parent();return r&&r.type==="style-cmd"&&r.val==="\\textcolor"?ku(r):!1}function cr(e){if(e.type!=="char")return!1;let t=e.latex;if(t==="+"||t==="-"||t==="\\pm"||t==="\\mp")return ku(e);if(Fb[t]){let r=e.prevSibling();if(r&&r.type==="char"){let n=r.latex;if(!Bi[n]&&!$b[n])return!0}return!1}return!!Bi[t]}function zb(e){return(e==null?void 0:e.type)==="char"&&/^(\\ )|[0-9.]$/.test(e.latex)}function Ui(e){return(e==null?void 0:e.type)==="char"&&e.latex==="\\ "}function Ub(e){return(e==null?void 0:e.type)==="char"&&e.latex==="."}function Pa(e,t){return e.digitGroupingMap.get(t)}function _a(e,t){let r;for(let n=t.length-1;n>=0;n--)zb(t[n])?r||(r=n):r!==void 0&&(Na(e,t,n+1,r),r=void 0);r!==void 0&&Na(e,t,0,r)}function Na(e,t,r,n){for(;Ui(t[r]);)r+=1;for(;Ui(t[n]);)n-=1;if(r>n)return;let a=0,o=0,i=[];for(let c=r;c<=n;c++){let g=t[c];if(Ui(g)?(a+=1,o=0):Ub(g)?(i.push(c),o+=1):o=0,o===3)break}if(o===3){let c=i.pop();i.pop();let g=i.pop();Na(e,t,r,g-1),Na(e,t,c+1,n);return}a>0||i.length>1||(i.length?i[0]!==r&&qu(e,t,r,i[0]-1):qu(e,t,r,n))}function qu(e,t,r,n){let a=0,o=0;for(let s=n;s>=r;s--)o+=1;let i=o%3;i===0&&(i=3);for(let s=n;s>=r;s--){a+=1;let c;o>=4&&(a===o?i===1?c="dcg-mq-group-leading-1":i===2?c="dcg-mq-group-leading-2":c="dcg-mq-group-leading-3":a%3===0&&a!==o&&(c="dcg-mq-group-start"),c||(c="dcg-mq-group-other")),e.digitGroupingMap.set(t[s],c)}}function Hb(){return!!document.querySelector(".immersive-translate-target-wrapper,[data-imt-dynamic-skip],[data-imt-p]")}function Vb(){return!!document.querySelector("wpstranslate-translation,.migaku-sentence,#MigakuShadowDom,#SL_balloon_obj")}function Kb(){return document.designMode==="on"||document.body.isContentEditable}var Wb=[{name:"kick-ass",sel:".KICKASSELEMENT"},{name:"laser-cat",sel:"laser-cat-app"}];function Qb(){var e;return(e=Wb.find(({sel:t})=>document.querySelector(t)))==null?void 0:e.name}var jb=/^((?:chrome|moz|safari-web|ms-browser)-extension):\/\/([^/]+)/;function Su(e){var t;for(let r of e){if(!r)continue;let n=[r,...Array.from(r.querySelectorAll("*"))];for(let a of n){let o=(t=a.getAttribute("src"))!=null?t:a.getAttribute("href"),i=o==null?void 0:o.match(jb);if(i)return i[1]+"://"+i[2]}}}function Cu(e){var t;return Hb()?"immersive-translate":Vb()?"translator":Kb()?"page-editing":(t=Qb())!=null?t:e?"extension":void 0}function Mu(e,t){switch(e){case"immersive-translate":return"Programming Error: Immersive Translate mutated our DOM";case"translator":return"Programming Error: Translation extension mutated our DOM";case"page-editing":return"Programming Error: User edited our DOM as page text";case void 0:return t;default:return"Programming Error: Browser extension injected into our DOM"}}function Tu(){return{docAttrs:document.documentElement.getAttributeNames().join(" "),bodyAttrs:document.body.getAttributeNames().join(" "),bodyChildren:Array.from(document.body.children).map(e=>e.tagName+"#"+e.id+"."+e.className).join(" ").slice(-500)}}function Eu(e,t,r){var s,c;let n=(s=e.mutable_domChildren)!=null?s:[],a=Su([e.mutable_domNode]),o=Cu(a),i=new Error(Mu(o,"Programming error: mutable_domChildren length doesn't match group child count. (Instrumented)"));return i.dcgExtraErrorMetaData={isRoot:t,childCount:e.children.length,domChildCount:n.length,domChildTags:n.map(g=>g.tagName+"."+g.className),firstExtraDomChildIndex:r,groupDomHtml:(c=e.mutable_domNode)==null?void 0:c.outerHTML.slice(0,500),htmlClass:document.documentElement.className,extensionId:a,foreignMutator:o,...Tu()},i}function Au(e,t,r,n){var c,g;let a=Su([t,...r.filter(h=>!n(h)).map(h=>h.parentElement)]),o=Cu(a),i=Mu(o,"Programming Error: Group child dom is not child of group dom. (Instrumented)"),s=new Error(i);return s.dcgExtraErrorMetaData={childParents:r.map(h=>h.parentNode===t?"self":n(h)?"scripted":h.parentElement?h.parentElement.tagName+"."+h.parentElement.className:String(h.parentNode)),childCount:e.children.length,domChildCount:r.length,groupDomHtml:t.outerHTML.slice(0,500),foreignParentHtml:(g=(c=r.find(h=>!n(h)&&h.parentElement))==null?void 0:c.parentElement)==null?void 0:g.outerHTML.slice(0,300),detachedHtml:r.filter(h=>!n(h)).map(h=>h.outerHTML).join("").slice(0,500),htmlClass:document.documentElement.className,extensionId:a,foreignMutator:o,...Tu()},s}function Nu(e,t,r,n,a,o){var le;let i,s=Du(r);if(s){if(i=Du(a),!i||i.prefix!==s.prefix)return!1}else return!1;let c=[...ze(n)],g=[...ze(t)];if(c.length!==g.length)return!1;o==null||o();let h={digitGroupingMap:new Map};_a(h,t.children);let y=i.digits,w=s.digits,k=!1,_=!1;y[0]==="-"&&(k=!0),w[0]==="-"&&(_=!0);let I=n.children.length-y.length,S=(le=n.mutable_domChildren)==null?void 0:le.slice(0,I);if(!S)return!1;let L=n.children[I],P=t.children[I];if(k&&!_){let E=L;if((E==null?void 0:E.type)!=="char"||E.latex!=="-")return!1;let F=E.getDomNode();if(!F)return!1;F.remove()}let $;if(k&&_&&($=L.getDomNode()),!k&&_){$=document.createElement("span"),$.textContent="\u2212";let E=L==null?void 0:L.getDomNode();if(!E)return!1;e.insertBefore($,E)}if($){S.push($);let E=cr(P);$.classList.toggle("dcg-mq-binary-operator",E)}k&&(L=L==null?void 0:L.nextSibling()),_&&(P=P==null?void 0:P.nextSibling());function K(E){let F="dcg-mq-digit",j=Pa(h,E);return j&&(F+=" "+j),F}for(;P&&L;P=P.nextSibling(),L=L.nextSibling()){if((P==null?void 0:P.type)!=="char"||(L==null?void 0:L.type)!=="char")return!1;let E=L.getDomNode();if(!E)return!1;E.textContent!==P.latex&&(E.textContent=P.latex),E.className=K(P),S.push(E)}for(;L;L=L.nextSibling()){let E=L.getDomNode();if(!E)return!1;E.remove()}if(P){let E=document.createDocumentFragment();for(;P;P=P.nextSibling()){if(P.type!=="char")return!1;let F=document.createElement("span");F.className=K(P),F.textContent=P.latex,E.appendChild(F),S.push(F)}e.appendChild(E)}if(S.length!==t.children.length)return!1;for(let E=1;E<g.length;E++)g[E].mutable_domNode=c[E].mutable_domNode,g[E].mutable_domChildren=c[E].mutable_domChildren;return t.mutable_domChildren=S,t.mutable_domNode=e,!0}function Du(e){if(typeof e!="string")return;let t=e.match(/-?[0-9.]+$/g);if(t&&t.length===1)return{latex:e,prefix:e.substring(0,e.length-t[0].length),digits:t[0]}}var kn={"\\ ":"\xA0","~":"\xA0","-":"\u2212","'":"\u2032","\\square":"\u25A1","\\mid":"\u2223","\\parallel":"\u2225","\\nparallel":"\u2226","\\perp":"\u27C2","\\infty":"\u221E","\\approx":"\u2248","\\to":"\u2192","\\ne":"\u2260","\\degree":"\xB0","\\bigcirc":"\u25EF","\\angle":"\u2220","\\triangle":"\u25B3","\\cong":"\u2245","\\measuredangle":"\u2221","\\parallelogram":"\u25B1","\\ncong":"\u2247","\\nsim":"\u2241","\\$":"$","\\%":"%","\\&":"&","\\int":"\u222B","\\sum":"\u2211","\\prod":"\u220F","\\coprod":"\u2210","\\cdot":"\xB7","\\ge":"\u2265","\\geq":"\u2265","\\le":"\u2264","\\sim":"~","\\pm":"\xB1","\\mp":"\u2213","\\times":"\xD7","\\div":"\xF7","\\backslash":"\\","\\varphi":"\u03C6","\\epsilon":"\u03F5","\\varepsilon":"\u03B5","\\varpi":"\u03D6","\\varsigma":"\u03C2","\\vartheta":"\u03D1","\\digamma":"\u03DD","\\varkappa":"\u03F0","\\varrho":"\u03F1","\\alpha":"\u03B1","\\beta":"\u03B2","\\gamma":"\u03B3","\\delta":"\u03B4","\\zeta":"\u03B6","\\eta":"\u03B7","\\theta":"\u03B8","\\iota":"\u03B9","\\kappa":"\u03BA","\\lambda":"\u03BB","\\mu":"\u03BC","\\nu":"\u03BD","\\xi":"\u03BE","\\pi":"\u03C0","\\rho":"\u03C1","\\sigma":"\u03C3","\\tau":"\u03C4","\\upsilon":"\u03C5","\\phi":"\u03D5","\\chi":"\u03C7","\\psi":"\u03C8","\\omega":"\u03C9","\\Gamma":"\u0393","\\Delta":"\u0394","\\Theta":"\u0398","\\Lambda":"\u039B","\\Xi":"\u039E","\\Pi":"\u03A0","\\Sigma":"\u03A3","\\Upsilon":"\u03D2","\\Phi":"\u03A6","\\Psi":"\u03A8","\\Omega":"\u03A9","\\forall":"\u2200"},Yb={"'":"span","\u2033":"span","\\square":"span","\\mid":"span","\\parallel":"span","\\nparallel":"span","\\perp":"span","\\backslash":"span","\\phi":"var","\\varphi":"var","\\epsilon":"var","\\varepsilon":"var","\\varpi":"var","\\varsigma":"var","\\vartheta":"var","\\digamma":"var","\\varkappa":"var","\\varrho":"var","\\alpha":"var","\\beta":"var","\\gamma":"var","\\delta":"var","\\zeta":"var","\\eta":"var","\\theta":"var","\\iota":"var","\\kappa":"var","\\lambda":"span","\\mu":"var","\\nu":"var","\\xi":"var","\\pi":"span","\\rho":"var","\\sigma":"var","\\tau":"var","\\chi":"var","\\psi":"var","\\omega":"var","\\upsilon":"var","\\Gamma":"span","\\Delta":"span","\\Theta":"span","\\Lambda":"span","\\Xi":"span","\\Pi":"span","\\Sigma":"span","\\Phi":"span","\\Psi":"span","\\Omega":"span","\\Upsilon":"var","\\forall":"span",ge:"span",le:"span"," ":"span",".":"span",degree:"span",$:"span",":":"span","`":"span",",":"span",infty:"span",approx:"span"},Xb={"\\pi":"dcg-mq-nonSymbola","\\lambda":"dcg-mq-nonSymbola","@":"dcg-mq-nonSymbola","\\&":"dcg-mq-nonSymbola","\\%":"dcg-mq-nonSymbola",f:"dcg-mq-f",",":"dcg-mq-comma",".":"dcg-mq-digit",0:"dcg-mq-digit",1:"dcg-mq-digit",2:"dcg-mq-digit",3:"dcg-mq-digit",4:"dcg-mq-digit",5:"dcg-mq-digit",6:"dcg-mq-digit",7:"dcg-mq-digit",8:"dcg-mq-digit",9:"dcg-mq-digit"},Zb={"\\Upsilon":"font-family: serif"};function Pu(e){return/^[a-z]$/i.test(e)?"var":Yb[e]||"span"}function _u(e){return e==="\\ "||e===" "?kn["\\ "]:(e=e.trim(),kn[e]||kn["\\"+e]||void 0)}function Lu(e){return Xb[e]}function Ru(e){return Zb[e]}var Ra=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},Oa=Array.prototype,Ki=Object.prototype,Iu=typeof Symbol!="undefined"?Symbol.prototype:null,lC=Oa.push,Jb=Oa.slice,Ia=Ki.toString,ey=Ki.hasOwnProperty,ty=Array.isArray,Ou=Object.keys,Gu=Object.create,ry=Ra.isNaN,cC=Ra.isFinite,Hi=function(){};function qe(e){if(e instanceof qe)return e;if(!(this instanceof qe))return new qe(e);this._wrapped=e}var uC=qe.VERSION="1.10.2";function Ga(e,t,r){if(t===void 0)return e;switch(r==null?3:r){case 1:return function(n){return e.call(t,n)};case 3:return function(n,a,o){return e.call(t,n,a,o)};case 4:return function(n,a,o,i){return e.call(t,n,a,o,i)}}return function(){return e.apply(t,arguments)}}function Bu(e,t,r){return e==null?Ey:Tt(e)?Ga(e,t,r):Sn(e)&&!Ba(e)?Ay(e):Ju(e)}qe.iteratee=zu;function zu(e,t){return Bu(e,t,1/0)}function ur(e,t,r){return qe.iteratee!==zu?qe.iteratee(e,t):Bu(e,t,r)}function nt(e,t){return t=t==null?e.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),n=Array(r),a=0;a<r;a++)n[a]=arguments[a+t];switch(t){case 0:return e.call(this,n);case 1:return e.call(this,arguments[0],n);case 2:return e.call(this,arguments[0],arguments[1],n)}var o=Array(t+1);for(a=0;a<t;a++)o[a]=arguments[a];return o[t]=n,e.apply(this,o)}}function ny(e){if(!Sn(e))return{};if(Gu)return Gu(e);Hi.prototype=e;var t=new Hi;return Hi.prototype=null,t}function Uu(e){return function(t){return t==null?void 0:t[e]}}function Gr(e,t){return e!=null&&ey.call(e,t)}function Hu(e,t){for(var r=t.length,n=0;n<r;n++){if(e==null)return;e=e[t[n]]}return r?e:void 0}var ay=Math.pow(2,53)-1,dr=Uu("length");function $r(e){var t=dr(e);return typeof t=="number"&&t>=0&&t<=ay}function qn(e,t,r){t=Ga(t,r);var n,a;if($r(e))for(n=0,a=e.length;n<a;n++)t(e[n],n,e);else{var o=ft(e);for(n=0,a=o.length;n<a;n++)t(e[o[n]],o[n],e)}return e}function Wi(e,t,r){t=ur(t,r);for(var n=!$r(e)&&ft(e),a=(n||e).length,o=Array(a),i=0;i<a;i++){var s=n?n[i]:i;o[i]=t(e[s],s,e)}return o}function Vu(e){var t=function(r,n,a,o){var i=!$r(r)&&ft(r),s=(i||r).length,c=e>0?0:s-1;for(o||(a=r[i?i[c]:c],c+=e);c>=0&&c<s;c+=e){var g=i?i[c]:c;a=n(a,r[g],g,r)}return a};return function(r,n,a,o){var i=arguments.length>=3;return t(r,Ga(n,o,4),a,i)}}var dC=Vu(1),pC=Vu(-1);function oy(e,t,r){var n=[];return t=ur(t,r),qn(e,function(a,o,i){t(a,o,i)&&n.push(a)}),n}function Or(e,t,r,n){return $r(e)||(e=Zu(e)),(typeof r!="number"||n)&&(r=0),hy(e,t,r)>=0}var gC=nt(function(e,t,r){var n,a;return Tt(t)?a=t:Ba(t)&&(n=t.slice(0,-1),t=t[t.length-1]),Wi(e,function(o){var i=a;if(!i){if(n&&n.length&&(o=Hu(o,n)),o==null)return;i=o[t]}return i==null?i:i.apply(o,r)})});function iy(e,t){return Wi(e,Ju(t))}function sy(e,t,r){var n=-1/0,a=-1/0,o,i;if(t==null||typeof t=="number"&&typeof e[0]!="object"&&e!=null){e=$r(e)?e:Zu(e);for(var s=0,c=e.length;s<c;s++)o=e[s],o!=null&&o>n&&(n=o)}else t=ur(t,r),qn(e,function(g,h,y){i=t(g,h,y),(i>a||i===-1/0&&n===-1/0)&&(n=g,a=i)});return n}function $a(e,t){return function(r,n,a){var o=t?[[],[]]:{};return n=ur(n,a),qn(r,function(i,s){var c=n(i,s,r);e(o,i,c)}),o}}var hC=$a(function(e,t,r){Gr(e,r)?e[r].push(t):e[r]=[t]}),mC=$a(function(e,t,r){e[r]=t}),fC=$a(function(e,t,r){Gr(e,r)?e[r]++:e[r]=1});var bC=$a(function(e,t,r){e[r?0:1].push(t)},!0);function Fr(e,t,r,n){n=n||[];for(var a=n.length,o=0,i=dr(e);o<i;o++){var s=e[o];if($r(s)&&(Ba(s)||Vi(s)))if(t)for(var c=0,g=s.length;c<g;)n[a++]=s[c++];else Fr(s,t,r,n),a=n.length;else r||(n[a++]=s)}return n}var yC=nt(function(e,t){return cy(e,t)});function ly(e,t,r,n){Ty(t)||(n=r,r=t,t=!1),r!=null&&(r=ur(r,n));for(var a=[],o=[],i=0,s=dr(e);i<s;i++){var c=e[i],g=r?r(c,i,e):c;t&&!r?((!i||o!==g)&&a.push(c),o=g):r?Or(o,g)||(o.push(g),a.push(c)):Or(a,c)||a.push(c)}return a}var xC=nt(function(e){return ly(Fr(e,!0,!0))});var cy=nt(function(e,t){return t=Fr(t,!0,!0),oy(e,function(r){return!Or(t,r)})});function uy(e){for(var t=e&&sy(e,dr).length||0,r=Array(t),n=0;n<t;n++)r[n]=iy(e,n);return r}var vC=nt(uy);function Ku(e){return function(t,r,n){r=ur(r,n);for(var a=dr(t),o=e>0?0:a-1;o>=0&&o<a;o+=e)if(r(t[o],o,t))return o;return-1}}var dy=Ku(1),py=Ku(-1);function gy(e,t,r,n){r=ur(r,n,1);for(var a=r(t),o=0,i=dr(e);o<i;){var s=Math.floor((o+i)/2);r(e[s])<a?o=s+1:i=s}return o}function Wu(e,t,r){return function(n,a,o){var i=0,s=dr(n);if(typeof o=="number")e>0?i=o>=0?o:Math.max(o+s,i):s=o>=0?Math.min(o+1,s):o+s+1;else if(r&&o&&s)return o=r(n,a),n[o]===a?o:-1;if(a!==a)return o=t(Jb.call(n,i,s),My),o>=0?o+i:-1;for(o=e>0?i:s-1;o>=0&&o<s;o+=e)if(n[o]===a)return o;return-1}}var hy=Wu(1,dy,gy),wC=Wu(-1,py);function Qu(e,t,r,n,a){if(!(n instanceof t))return e.apply(r,a);var o=ny(e.prototype),i=e.apply(o,a);return Sn(i)?i:o}var my=nt(function(e,t,r){if(!Tt(e))throw new TypeError("Bind must be called on a function");var n=nt(function(a){return Qu(e,n,t,this,r.concat(a))});return n}),Fa=nt(function(e,t){var r=Fa.placeholder,n=function(){for(var a=0,o=t.length,i=Array(o),s=0;s<o;s++)i[s]=t[s]===r?arguments[a++]:t[s];for(;a<arguments.length;)i.push(arguments[a++]);return Qu(e,n,this,this,i)};return n});Fa.placeholder=qe;var kC=nt(function(e,t){t=Fr(t,!1,!1);var r=t.length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var n=t[r];e[n]=my(e[n],e)}});var fy=nt(function(e,t,r){return setTimeout(function(){return e.apply(null,r)},t)}),qC=Fa(fy,qe,1);function ju(e,t,r){var n,a,o,i,s=0;r||(r={});var c=function(){s=r.leading===!1?0:Fu(),n=null,i=e.apply(a,o),n||(a=o=null)},g=function(){var h=Fu();!s&&r.leading===!1&&(s=h);var y=t-(h-s);return a=this,o=arguments,y<=0||y>t?(n&&(clearTimeout(n),n=null),s=h,i=e.apply(a,o),n||(a=o=null)):!n&&r.trailing!==!1&&(n=setTimeout(c,y)),i};return g.cancel=function(){clearTimeout(n),s=0,n=a=o=null},g}function by(e){return function(){return!e.apply(this,arguments)}}function yy(e,t){var r;return function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=null),r}}var SC=Fa(yy,2),Yu=!{toString:null}.propertyIsEnumerable("toString"),$u=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function Xu(e,t){var r=$u.length,n=e.constructor,a=Tt(n)&&n.prototype||Ki,o="constructor";for(Gr(e,o)&&!Or(t,o)&&t.push(o);r--;)o=$u[r],o in e&&e[o]!==a[o]&&!Or(t,o)&&t.push(o)}function ft(e){if(!Sn(e))return[];if(Ou)return Ou(e);var t=[];for(var r in e)Gr(e,r)&&t.push(r);return Yu&&Xu(e,t),t}function Qi(e){if(!Sn(e))return[];var t=[];for(var r in e)t.push(r);return Yu&&Xu(e,t),t}function Zu(e){for(var t=ft(e),r=t.length,n=Array(r),a=0;a<r;a++)n[a]=e[t[a]];return n}function xy(e){for(var t={},r=ft(e),n=0,a=r.length;n<a;n++)t[e[r[n]]]=r[n];return t}function ji(e,t){return function(r){var n=arguments.length;if(t&&(r=Object(r)),n<2||r==null)return r;for(var a=1;a<n;a++)for(var o=arguments[a],i=e(o),s=i.length,c=0;c<s;c++){var g=i[c];(!t||r[g]===void 0)&&(r[g]=o[g])}return r}}var CC=ji(Qi),vy=ji(ft);function wy(e,t,r){return t in r}var Br=nt(function(e,t){var r={},n=t[0];if(e==null)return r;Tt(n)?(t.length>1&&(n=Ga(n,t[1])),t=Qi(e)):(n=wy,t=Fr(t,!1,!1),e=Object(e));for(var a=0,o=t.length;a<o;a++){var i=t[a],s=e[i];n(s,i,e)&&(r[i]=s)}return r}),MC=nt(function(e,t){var r=t[0],n;return Tt(r)?(r=by(r),t.length>1&&(n=t[1])):(t=Wi(Fr(t,!1,!1),String),r=function(a,o){return!Or(t,o)}),Br(e,r,n)}),TC=ji(Qi,!0);function ky(e,t){var r=ft(t),n=r.length;if(e==null)return!n;for(var a=Object(e),o=0;o<n;o++){var i=r[o];if(t[i]!==a[i]||!(i in a))return!1}return!0}function La(e,t,r,n){if(e===t)return e!==0||1/e===1/t;if(e==null||t==null)return!1;if(e!==e)return t!==t;var a=typeof e;return a!=="function"&&a!=="object"&&typeof t!="object"?!1:qy(e,t,r,n)}function qy(e,t,r,n){e instanceof qe&&(e=e._wrapped),t instanceof qe&&(t=t._wrapped);var a=Ia.call(e);if(a!==Ia.call(t))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:+e==0?1/+e===1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return Iu.valueOf.call(e)===Iu.valueOf.call(t)}var o=a==="[object Array]",i=a==="[object Set]",s=a==="[object Map]",c=o||i||s;if(!c){if(typeof e!="object"||typeof t!="object")return!1;var g=e.constructor,h=t.constructor;if(g!==h&&!(Tt(g)&&g instanceof g&&Tt(h)&&h instanceof h)&&"constructor"in e&&"constructor"in t)return!1}r=r||[],n=n||[];for(var y=r.length;y--;)if(r[y]===e)return n[y]===t;if(r.push(e),n.push(t),o){if(y=e.length,y!==t.length)return!1;for(;y--;)if(!La(e[y],t[y],r,n))return!1}else if(s){if(e.size!==t.size)return!1;for(let[_,I]of e.entries())if(!La(I,t.get(_),r,n))return!1}else if(i){if(e.size!==t.size)return!1;for(let _ of e.values())if(!t.has(_))return!1}else{var w=ft(e),k;if(y=w.length,ft(t).length!==y)return!1;for(;y--;)if(k=w[y],!(Gr(t,k)&&La(e[k],t[k],r,n)))return!1}return r.pop(),n.pop(),!0}function zr(e,t){return La(e,t)}function We(e){return function(t){return Ia.call(t)==="[object "+e+"]"}}var Ba=ty||We("Array");function Sn(e){var t=typeof e;return t==="function"||t==="object"&&!!e}var Vi=We("Arguments"),Tt=We("Function"),EC=We("String"),Sy=We("Number"),AC=We("Date"),DC=We("RegExp"),NC=We("Error"),PC=We("Symbol"),_C=We("Map"),LC=We("WeakMap"),RC=We("Set"),IC=We("WeakSet");(function(){Vi(arguments)||(Vi=function(e){return Gr(e,"callee")})})();var Cy=Ra.document&&Ra.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof Cy!="function"&&(Tt=function(e){return typeof e=="function"||!1});function My(e){return Sy(e)&&ry(e)}function Ty(e){return e===!0||e===!1||Ia.call(e)==="[object Boolean]"}function Ey(e){return e}function Ju(e){return Ba(e)?function(t){return Hu(t,e)}:Uu(e)}function Ay(e){return e=vy({},e),function(t){return ky(t,e)}}var Fu=Date.now||function(){return new Date().getTime()},ed={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Dy=xy(ed);function td(e){var t=function(o){return e[o]},r="(?:"+ft(e).join("|")+")",n=RegExp(r),a=RegExp(r,"g");return function(o){return o=o==null?"":""+o,n.test(o)?o.replace(a,t):o}}var OC=td(ed),GC=td(Dy);function rd(e,t){return e._chain?qe(t).chain():t}qn(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=Oa[e];qe.prototype[e]=function(){var r=this._wrapped;return t.apply(r,arguments),(e==="shift"||e==="splice")&&r.length===0&&delete r[0],rd(this,r)}});qn(["concat","join","slice"],function(e){var t=Oa[e];qe.prototype[e]=function(){return rd(this,t.apply(this._wrapped,arguments))}});qe.prototype.value=function(){return this._wrapped};qe.prototype.valueOf=qe.prototype.toJSON=qe.prototype.value;qe.prototype.toString=function(){return String(this._wrapped)};var Cn={sqrt:{width:"",html:'<svg preserveAspectRatio="none" viewBox="0 0 32 54"><path d="M0 33 L7 27 L12.5 47 L13 47 L30 0 L32 0 L13 54 L11 54 L4.5 31 L0 33" /></svg>'},"|":{width:".4em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M4.4 0 L4.4 54 L5.6 54 L5.6 0" /></svg>'},"[":{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 11 24" style="overflow:visible"><path fill="none" stroke="currentColor" stroke-width="0.05em" vector-effect="non-scaling-stroke" d="M8 0.5 L3.5 0.5 L3.5 23.5 L8 23.5" /></svg>'},"]":{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 11 24" style="overflow:visible"><path fill="none" stroke="currentColor" stroke-width="0.05em" vector-effect="non-scaling-stroke" d="M3 0.5 L7.5 0.5 L7.5 23.5 L3 23.5" /></svg>'},"(":{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="3 0 106 186"><path d="M85 0 A61 101 0 0 0 85 186 L75 186 A75 101 0 0 1 75 0" /></svg>'},")":{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="3 0 106 186"><path d="M24 0 A61 101 0 0 1 24 186 L34 186 A75 101 0 0 0 34 0" /></svg>'},"{":{width:".7em",html:'<svg preserveAspectRatio="none" viewBox="10 0 210 350"><path d="M170 0 L170 6 A47 52 0 0 0 123 60 L123 127 A35 48 0 0 1 88 175 A35 48 0 0 1 123 223 L123 290 A47 52 0 0 0 170 344 L170 350 L160 350 A58 49 0 0 1 102 301 L103 220 A45 40 0 0 0 58 180 L58 170 A45 40 0 0 0 103 130 L103 49 A58 49 0 0 1 161 0" /></svg>'},"}":{width:".7em",html:'<svg preserveAspectRatio="none" viewBox="10 0 210 350"><path d="M60 0 L60 6 A47 52 0 0 1 107 60 L107 127 A35 48 0 0 0 142 175 A35 48 0 0 0 107 223 L107 290 A47 52 0 0 1 60 344 L60 350 L70 350 A58 49 0 0 0 128 301 L127 220 A45 40 0 0 1 172 180 L172 170 A45 40 0 0 1 127 130 L127 49 A58 49 0 0 0 70 0" /></svg>'},lVert:{width:".7em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M3.2 0 L3.2 54 L4 54 L4 0 M6.8 0 L6.8 54 L6 54 L6 0" /></svg>'},rVert:{width:".7em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M3.2 0 L3.2 54 L4 54 L4 0 M6.8 0 L6.8 54 L6 54 L6 0" /></svg>'},langle:{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M6.8 0 L3.2 27 L6.8 54 L7.8 54 L4.2 27 L7.8 0" /></svg>'},rangle:{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 10 54"><path d="M3.2 0 L6.8 27 L3.2 54 L2.2 54 L5.8 27 L2.2 0" /></svg>'}},nd={left:{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 11 24" style="overflow:visible"><path fill="none" stroke="currentColor" stroke-width="0.09em" vector-effect="non-scaling-stroke" d="M9.5 0 L3.5 0 L3.5 24 L9.5 24" /></svg>'},right:{width:".55em",html:'<svg preserveAspectRatio="none" viewBox="0 0 11 24" style="overflow:visible"><path fill="none" stroke="currentColor" stroke-width="0.09em" vector-effect="non-scaling-stroke" d="M1.5 0 L7.5 0 L7.5 24 L1.5 24" /></svg>'}};function N(e,t,r,n){let a=document.createElement(t);a.textContent=r,e.appendChild(a),n!=null&&n.style&&a.setAttribute("style",n.style);let o=n==null?void 0:n.className;return o&&(a.className=o),a}function Zi(e){N(e,"span","\u200B",{style:"display:inline-block;width:0"})}function Le(e,t,r){!r||r.children.length===0?(t.className+=" dcg-mq-empty",r&&(r.mutable_domNode=t,r.mutable_domChildren=[])):Ji(e,r,t)}function Ji(e,t,r){_a(e,t.children),t.mutable_domNode=r;let n=[];for(let a=0;a<t.children.length;a++){let o=t.children[a],i=t.children[a+1];if(od(o)&&(i==null?void 0:i.type)==="supsub"){let s=N(r,"span","",{className:"dcg-mq-scripted"+(i.sup?" dcg-mq-scripted-sup":"")+(i.sub?" dcg-mq-scripted-sub":"")}),c=N(s,"span","",{className:"dcg-mq-scripted-base"});n.push(Yi(e,c,t,o,a)),n.push(Yi(e,s,t,i,a+1)),a++}else n.push(Yi(e,r,t,o,a))}t.mutable_domChildren=n}function od(e){return!!e&&!ir(e)}function za(e){let t=e.parentElement,r=t!=null&&t.classList.contains("dcg-mq-scripted-base")?t.parentElement:t;return r!=null&&r.classList.contains("dcg-mq-scripted")?r:void 0}function Yi(e,t,r,n,a){switch(n.type){case"char":let o="";cr(n)&&(o+=" dcg-mq-binary-operator");let s=Pa(e,n);if(s&&(o+=" "+s),tr(r.marks.ellipsis,a)?o+=" dcg-mq-ellipsis-start":Ze(r.marks.ellipsis,a)?o+=" dcg-mq-ellipsis-end":Rt(r.marks.ellipsis,a)&&(o+=" dcg-mq-ellipsis-middle"),tr(r.marks.mutable_operatorName,a))o+=" dcg-mq-operator-name",Xi(r.children[a-1])||(o+=" dcg-mq-first");else if(Ze(r.marks.mutable_operatorName,a)){o+=" dcg-mq-operator-name";let k=r.children[a+1];if(!Xi(k)){let _=Ze(r.marks.mutable_infixOperatorName,a);(k==null?void 0:k.type)==="supsub"||(k.type!=="brackets"||_)&&(o+=" dcg-mq-last")}}else Rt(r.marks.mutable_operatorName,a)&&(o+=" dcg-mq-operator-name");let c=Pu(n.latex),g=_u(n.latex)||n.latex,h=Ru(n.latex),y=Lu(n.latex);return y&&(g==="f"&&o||(o+=" "+y)),N(t,c,g,{className:o,style:h});case"text-char":return N(t,"span",n.text,{className:"dcg-mq-string-char"});case"ans":return N(t,"span","ans",{className:"dcg-mq-ans"});case"token":return $y(e,t,n);case"supsub":return Iy(e,t,n,a,r.marks,r.children[a+1],od(r.children[a-1]));case"brackets":return Fy(e,t,n);case"sqrt":return Oy(e,t,n);case"frac":return Py(e,t,n);case"binom":return _y(e,t,n);case"summation":return Gy(e,t,n);case"group":throw new Error("should not have MQGroup as child of MQGroup");case"percentof":return N(t,"span","% of ",{className:"dcg-mq-nonSymbola dcg-mq-operator-name"});case"style-cmd":return Ry(e,t,n);case"matrix":return Ly(e,t,n);case"string":return By(e,t,n);default:return n}}function Py(e,t,r){let n=N(t,"span","",{className:"dcg-mq-fraction dcg-mq-non-leaf"}),a=N(n,"span","",{className:"dcg-mq-numerator"}),o=N(n,"span","",{className:"dcg-mq-denominator"});return Zi(n),Le(e,a,r.num),Le(e,o,r.den),n}function _y(e,t,r){let n=N(t,"span","",{className:"dcg-mq-bracket-container dcg-mq-non-leaf"}),a=Cn["("],o=Cn[")"];pr(n,a,"dcg-mq-bracket-l dcg-mq-paren");let i=N(n,"span","",{className:"dcg-mq-bracket-middle dcg-mq-non-leaf",style:`margin-left:${a.width}; margin-right:${o.width}`}),s=N(i,"span","",{className:"dcg-mq-array dcg-mq-non-leaf"}),c=N(s,"span",""),g=N(s,"span","");return Le(e,c,r.num),Le(e,g,r.den),pr(n,o,"dcg-mq-bracket-r dcg-mq-paren"),n}function Ly(e,t,r){let n=N(t,"span","",{className:"dcg-mq-matrix__container dcg-mq-non-leaf"}),a=nd.left,o=nd.right;pr(n,a,"dcg-mq-bracket-l dcg-mq-paren");let i=N(n,"span","",{className:"dcg-mq-matrix"}),{numRows:s,numCols:c}=r.getDimensions(),g=e.config.maxResizingMatrixSize,h=e.config.static&&s>g,y=e.config.static&&c>g,w=h?g-1:s,k=y?g-1:c;for(let S=0;S<w;S++){let L=N(i,"span","",{className:"dcg-mq-matrix__row"});for(let P=0;P<k;P++){let $=N(L,"span","",{className:"dcg-mq-matrix__cell-container"}),K=N($,"span","",{className:"dcg-mq-matrix__cell dcg-mq-non-leaf"}),le=r.getChildAt(P,S);Ji(e,le,K),le.children.length===0&&K.classList.add("dcg-mq-matrix__cell--empty")}y&&ad(L)}if(h){let S=N(i,"span","",{className:"dcg-mq-matrix__row"});for(let L=0;L<k+(y?1:0);L++)ad(S)}pr(n,o,"dcg-mq-bracket-r dcg-mq-paren");let _=N(n,"span","",{className:"dcg-mq-matrix__pull-handle"}),I=`${s} \xD7 ${c}`;return N(_,"span",I,{className:"dcg-mq-matrix__dimensions"}),(h||y)&&(n.classList.add("dcg-mq-matrix__container--truncated"),N(n,"span",I,{className:"dcg-mq-matrix__truncated-dimensions"})),n}function ad(e){let t=N(e,"span","",{className:"dcg-mq-matrix__cell-container"}),r=N(t,"span","",{className:"dcg-mq-matrix__cell dcg-mq-non-leaf"});N(r,"span","\u22EF",{className:"dcg-mq-matrix-ellipsis"})}function Ry(e,t,r){return id(t,r,n=>{Le(e,n,r.arg)})}function Iy(e,t,r,n,a,o,i){let c=Ze(a.mutable_operatorName,n-1)&&!Xi(r)&&(o==null?void 0:o.type)!=="brackets",g=N(t,"span","",{className:"dcg-mq-supsub dcg-mq-non-leaf"+(c?" dcg-mq-after-operator-name":"")});if(r.sup){let h=N(g,"span","",{className:"dcg-mq-sup"});Le(e,h,r.sup),r.sub||(g.className+=" dcg-mq-sup-only")}if(r.sub){let h=N(g,"span","",{className:"dcg-mq-sub"});Le(e,h,r.sub)}return r.sub&&!i&&Zi(g),g}function pr(e,t,r=""){let n=N(e,"span","",{className:"dcg-mq-scaled "+r,style:t.width?`width:${t.width}`:void 0});return n.innerHTML=t.html,n}function Oy(e,t,r){let n;if(r.index){n=t=N(t,"span","",{className:"dcg-mq-nthroot-container dcg-mq-non-leaf"});let i=N(t,"sup","",{className:"dcg-mq-nthroot dcg-mq-non-leaf"});Le(e,i,r.index)}let a=N(t,"span","",{className:"dcg-mq-sqrt-container "+(r.index?"dcg-mq-scaled":"dcg-mq-non-leaf")});n!=null||(n=a),pr(a,Cn.sqrt,"dcg-mq-sqrt-prefix");let o=N(a,"span","",{className:"dcg-mq-non-leaf dcg-mq-sqrt-stem"});return Le(e,o,r.radicand),n}function Gy(e,t,r){let n=kn[r.kind];if(!n)throw new Error("could not find summation symbol: "+r.kind);if(r.kind==="\\int"){let a=N(t,"span","",{className:"dcg-mq-int dcg-mq-non-leaf"});N(a,"big",n);let o=N(a,"span","",{className:"dcg-mq-supsub dcg-mq-non-leaf"}),i=N(o,"span","",{className:"dcg-mq-sup"});i=N(i,"span","",{className:"dcg-mq-sup-inner"}),Le(e,i,r.sup);let s=N(o,"span","",{className:"dcg-mq-sub"});return Le(e,s,r.sub),Zi(o),a}else{let a=N(t,"span","",{className:"dcg-mq-large-operator dcg-mq-non-leaf"}),o=N(a,"span","",{className:"dcg-mq-to"});o=N(o,"span",""),Le(e,o,r.sup),N(a,"big",n);let i=N(a,"span","",{className:"dcg-mq-from"});return i=N(i,"span",""),Le(e,i,r.sub),a}}function $y(e,t,r){let n=e.previousTokenNodes.get(r);if(n)return t.appendChild(n),e.currentTokenNodes.set(r,n),n;let a=N(t,"span","",{className:"dcg-mq-ignore-mousedown dcg-mq-token"});return a.setAttribute("data-dcg-mq-token",r.id),e.currentTokenNodes.set(r,a),a}function Fy(e,t,r){let n=Cn[r.leftSymbol],a=Cn[r.rightSymbol],o=r.ghostSide==="left"?" dcg-mq-ghost":"",i=r.ghostSide==="right"?" dcg-mq-ghost":"",s=N(t,"span","",{className:"dcg-mq-non-leaf dcg-mq-bracket-container"});pr(s,n,"dcg-mq-bracket-l dcg-mq-paren"+o);let c="dcg-mq-bracket-middle dcg-mq-non-leaf";r.middle.children.length===0&&e.config.quietEmptyDelimeters.has(r.leftSymbol)&&(c+=" dcg-mq-quiet-delimiter");let g=N(s,"span","",{className:c,style:`margin-left:${n.width};margin-right:${a.width}`});return pr(s,a,"dcg-mq-bracket-r dcg-mq-paren"+i),Le(e,g,r.middle),s}function By(e,t,r){let n=N(t,"span","",{className:"dcg-mq-string"}),a=r.ghostSide==="left"?" dcg-mq-ghost":"";N(n,"span","\u201C",{className:"dcg-mq-string__lquote"+a});let o=N(n,"span","",{className:"dcg-mq-string__body"});Le(e,o,r.body);let i=r.ghostSide==="right"?" dcg-mq-ghost":"";return N(n,"span","\u201D",{className:"dcg-mq-string__rquote"+i}),n}function zy(e,t){var w,k,_;let{selection:r}=e,n=e.mouseDownState.type==="mouse-down-selecting",{left:a,right:o,group:i}=r,s=i.mutable_domNode,c=i.mutable_domChildren;if(!s||!c)throw new Error("Programming Error: We just rendered. Where's the DOM pointers?");let g=I=>{var S;return I.parentNode===s||((S=za(I))==null?void 0:S.parentNode)===s};if(!c.every(g))throw Au(i,s,c,g);let h=et(r);if(r.matrixPullHandleType&&h)return Uy(e,h,r.matrixPullHandleType);let y=e.config.static?void 0:Hy(r);if(a.eq(o)){let I="dcg-mq-cursor";n||(I+=" dcg-mq-should-blink");let S=N(s,"span","\u200B",{className:I}),L=c[a.index];if(L){let E=za(L);E&&L.parentNode===E?(w=E.firstElementChild)==null||w.appendChild(S):L.before(S)}else s.appendChild(S);let P=i.children.length===0,K=((k=i.parent())==null?void 0:k.type)==="matrix"?"dcg-mq-matrix__cell--empty":"dcg-mq-empty";return P&&s.classList.remove(K),e.selectionDom=S,{unSelect:()=>{S.remove(),P&&s.classList.add(K),y==null||y()}}}else{let I="dcg-mq-selection";t&&(I+=" dcg-mq-blur");let S=[],L=[],P=[],$=()=>{if(P.length===0)return;let E=N(s,"span","",{className:I});s.insertBefore(E,P[0]);for(let F of P)E.appendChild(F);L.push(E),P=[]};for(let E=a.index;E<o.index;E++){let F=c[E],j=za(F);j&&E+1<o.index&&za(c[E+1])===j?(P.push(j),E++):j?($(),F.classList.add("dcg-mq-selection"),F.classList.toggle("dcg-mq-blur",t),S.push(F)):P.push(F)}$();let K=c[r.head.eq(o)?o.index-1:a.index];return e.selectionDom=(_=L.find(E=>E.contains(K)))!=null?_:K,{unSelect:()=>{for(let E of S)E.classList.remove("dcg-mq-selection","dcg-mq-blur");for(let E of L){let F=Array.from(E.childNodes),j=F[F.length-1];E.replaceWith(j);for(let M=0;M<F.length-1;M++)s.insertBefore(F[M],j)}y==null||y()}}}}function Uy(e,t,r){let n=t.getDomNode();if(!n)throw new Error("Programming error: No matrix DOM");return n.classList.add("dcg-mq-matrix--resizing"),r==="keyboard"&&n.classList.add("dcg-mq-matrix--resizing-keyboard"),e.mouseDownState.type==="mouse-down-resizing-matrix"&&n.classList.add("dcg-mq-matrix--resizing-drag"),{unSelect:()=>{n.classList.remove("dcg-mq-matrix--resizing"),n.classList.remove("dcg-mq-matrix--resizing-keyboard"),n.classList.remove("dcg-mq-matrix--resizing-drag")}}}function Hy(e){let t=va(e),r=t==null?void 0:t.cell.getDomNode(),n=t==null?void 0:t.matrix.getDomNode();if(!(!r&&!n))return r==null||r.classList.add("dcg-mq-matrix__cell--selected"),n==null||n.classList.add("dcg-mq-matrix--selected"),()=>{r==null||r.classList.remove("dcg-mq-matrix__cell--selected"),n==null||n.classList.remove("dcg-mq-matrix--selected")}}var Ua=class{constructor(t){this.container=t}render(t,r){var c;let{root:n}=t,a=Br(t.config,sd),o=zr(a,this.lastConfig),i=n.mutable_domNode===void 0||!o,s=lt(t.root);i?(o&&this.lastLatex&&this.lastRoot&&Nu(this.container,n,s,this.lastRoot,this.lastLatex,this.unSelect)||this.renderFromScratch(t,a),this.unSelect=this.insertSelection(t,r)):((c=this.unSelect)==null||c.call(this),this.unSelect=this.insertSelection(t,r)),this.lastConfig=a,this.lastLatex=s,this.lastRoot=n}renderFromScratch(t,r){var i;let{root:n}=t,{unsuppressBlurs:a}=Vy(this.container);this.container.innerHTML="";let o={config:r,digitGroupingMap:new Map,previousTokenNodes:(i=this.previousTokenNodes)!=null?i:new Map,currentTokenNodes:new Map};Ji(o,n,this.container),this.previousTokenNodes=o.currentTokenNodes,a()}insertSelection(t,r){let{config:n,selection:a}=t,o=(r!=="focused"||n.static)&&te(a),i=r==="unintentional-blurred";if(!o){let{unSelect:s}=zy(t,i);return s}return()=>{}}};function Xi(e){return!!(!e||e.type==="char"&&e.latex==="."||cr(e)||e.type==="summation")}function Vy(e){let t=document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)?document.activeElement:null,r=o=>o.stopImmediatePropagation(),n=["blur","focusout","focus","focusin"];if(t)for(let o of n)document.addEventListener(o,r,!0);function a(){if(t){t.isConnected&&t.focus();for(let o of n)document.removeEventListener(o,r,!0)}}return{unsuppressBlurs:a}}var ld="\u27A4",Ky="\u02D9",ud={"\\mathrm":Ut("span","dcg-mq-roman dcg-mq-font"),"\\mathit":Ut("i","dcg-mq-font"),"\\mathbf":Ut("b","dcg-mq-font"),"\\mathsf":Ut("span","dcg-mq-sans-serif dcg-mq-font"),"\\mathtt":Ut("span","dcg-mq-monospace dcg-mq-font"),"\\underline":Ut("span","dcg-mq-non-leaf dcg-mq-underline"),"\\overline":Ut("span","dcg-mq-non-leaf dcg-mq-overline"),"\\overrightarrow":es(!1,!0),"\\overleftarrow":es(!0,!1),"\\overleftrightarrow":es(!0,!0),"\\overarc":Ut("span","dcg-mq-non-leaf dcg-mq-overarc"),"\\dot":{makeDOM:(e,t,r)=>{let n=N(e,"span","",{className:"dcg-mq-non-leaf"}),a=N(n,"span","",{className:"dcg-mq-dot-recurring-inner"});N(a,"span",Ky,{className:"dcg-mq-dot-recurring"});let o=N(a,"span","",{className:"dcg-mq-empty-box"});return r(o),n}},"\\textcolor":{makeDOM:(e,t,r)=>{let n=N(e,"span","",{className:"dcg-mq-textcolor",style:`color:${t.styleParam}`});return r(n),n}},"\\vec":cd("\u2192"),"\\tilde":cd("~"),"\\hat":{makeDOM:(e,t,r)=>{let n=N(e,"span","",{className:"dcg-mq-non-leaf"});N(n,"span","^",{className:"dcg-mq-hat-prefix"});let a=N(n,"span","",{className:"dcg-mq-hat-stem"});return r(a),n}}};function dd(e){return ud.hasOwnProperty(e)}function Ut(e,t){return{makeDOM:(r,n,a)=>{let o=N(r,e,"",{className:t});return a(o),o}}}function es(e,t){return{makeDOM:(r,n,a)=>{let o=N(r,"span","",{className:"dcg-mq-non-leaf dcg-mq-overarrow"});return e&&N(o,"span",ld,{className:"dcg-mq-arrow-left-content"}),a(o),t&&N(o,"span",ld,{className:"dcg-mq-arrow-right-content"}),o}}}function cd(e){return{makeDOM:(t,r,n)=>{let a=N(t,"span","",{className:"dcg-mq-non-leaf"});N(a,"span",e,{className:"dcg-mq-diacritic-above"});let o=N(a,"span","",{className:"dcg-mq-diacritic-stem"});return n(o),a}}}function id(e,t,r){return ud[t.val].makeDOM(e,t,r)}function pd(e){return e.type==="style-cmd"&&e.val==="\\mathrm"}function Ha(e,t,r){t.push(r)}function Ne(e,t){let r=[];return gd(e,t,r),U(r)}function gd(e,t,r){for(let n=0;n<t.children.length;n++){let a=t.children[n];switch(a.type){case"digit":Ha(e,r,new he(a.content));break;case"symbol":Ha(e,r,new he(Ir(a.content)));break;case"letter":Ha(e,r,new he(a.content));break;case"sqrt":r.push(new Bt({index:a.index&&Ne(e,a.index),radicand:Ne(e,a.radicand)}));break;case"brackets":r.push(new Ve({leftSymbol:a.leftSymbol,rightSymbol:a.rightSymbol,leftLatex:a.leftLatex,rightLatex:a.rightLatex,ghostSide:a.ghostSide,middle:Ne(e,a.middle)}));break;case"summation":r.push(new or({kind:a.kind,sup:Ne(e,a.sup),sub:Ne(e,a.sub)}));break;case"supsub":r.push(new ke({sup:a.sup&&Ne(e,a.sup),sub:a.sub&&Ne(e,a.sub)}));break;case"command":if(a.ctrlSeq==="frac")r.push(new Mt({num:Ne(e,a.blocks[0]),den:Ne(e,a.blocks[1])}));else if(a.ctrlSeq==="binom")r.push(new ar({num:Ne(e,a.blocks[0]),den:Ne(e,a.blocks[1])}));else if(dd("\\"+a.ctrlSeq))r.push(new Lr({val:"\\"+a.ctrlSeq,styleParam:void 0,arg:Ne(e,a.blocks[0])}));else if(a.ctrlSeq==="token"||a.ctrlSeq==="tokenName"){let i=Ne(e,a.blocks[0]).children.map(s=>s.type==="char"?s.latex:"").join("");r.push(new Ca({variant:a.ctrlSeq,id:i}))}else{let i=Ir(a.ctrlSeq);Ha(e,r,new he(i))}break;case"percentof":r.push(new _r);break;case"ans":r.push(new Pr);break;case"block":gd(e,a,r);break;case"style-cmd":r.push(new Lr({styleParam:a.styleParam,arg:Ne(e,a.arg),val:a.ctrlSeq}));break;case"matrix":{let i=a.rows.length===0?[[{type:"block",children:[]}]]:a.rows,s=i.reduce((g,h)=>Math.max(g,h.length),1),c=[];for(let g of i){for(let h of g)c.push(Ne(e,h));for(let h=g.length;h<s;h++)c.push(U([]))}r.push(new ct({children:c,numCols:s}));break}case"string":{let i=md(a.text);r.push(new Ft({body:i,ghostSide:void 0}));break}default:return a}}}function hd(e){let t=ya(e);return t?md(t):U([])}function md(e){let t=[];for(let r=0;r<e.length;r++)t.push(new Nr(e[r]));return new xn(t)}function Mn(e,t){let r={autoOperatorNames:t.autoOperatorNames},n=wu(e,t.autoOperatorNames),a=Ne(r,n);if(!t.matrices){for(let o of rr(a))if(o.type==="matrix")return U([])}if(!t.strings){for(let o of rr(a))if(o.type==="string")return U([])}return a}function Wy(e,t){let r=er(e.marks.mutable_operatorName,t-1);return(r==null?void 0:r.word)==="log"&&r.right===t}function fd(e,t){return $e(e,{config:t,fracDepth:0})}function $e(e,t,r){Gc(e,t.config,!!(r!=null&&r.isInNonLogSubscript));for(let n=0;n<e.children.length;n++){let a=e.children[n];switch(a.type){case"binom":$e(a.num,t),$e(a.den,t);break;case"frac":t.fracDepth++,a.mutable_fracDepth=t.fracDepth,$e(a.num,t),$e(a.den,t),t.fracDepth--;break;case"brackets":$e(a.middle,t);break;case"supsub":a.sub&&$e(a.sub,t,{isInNonLogSubscript:!Wy(e,n)}),a.sup&&$e(a.sup,t);break;case"sqrt":a.index&&$e(a.index,t),$e(a.radicand,t);break;case"style-cmd":$e(a.arg,t);break;case"summation":a.sub&&$e(a.sub,t),a.sup&&$e(a.sup,t);break;case"char":case"text-char":case"percentof":case"ans":case"token":case"string":break;case"matrix":for(let o of a.children)$e(o,t);break;default:throw new Error(`Invalid node: ${a.type}`)}}}var Qy={"-":"mq-narration-minus","+":"mq-narration-plus","?":"mq-narration-question-mark","<":"mq-narration-less-than",">":"mq-narration-greater-than","\\ge":"mq-narration-greater-than-or-equal-to","\\le":"mq-narration-less-than-or-equal-to","\\sim":"mq-narration-similar","=":"mq-narration-equals","\\approx":"mq-narration-approximately-equal","\\ne":"mq-narration-not-equal","\\ ":"","'":"mq-narration-prime","\u2033":"mq-narration-double-prime","\\pm":"mq-narration-plus-or-minus","\\mp":"mq-narration-minus-or-plus","\\cdot":"mq-narration-times","\\infty":"mq-narration-infinity","\\degree":"mq-narration-degrees","\\cong":"mq-narration-congruent","\\ncong":"mq-narration-not-congruent","\\$":"mq-narration-dollar","\\nparallel":"mq-narration-not-parallel","\\perp":"mq-narration-perpendicular","\\div":"mq-narration-divided-by","\\bigcirc":"mq-narration-circle","\\measuredangle":"mq-narration-measured-angle","\\nsim":"mq-narration-not-similar","\\Upsilon":"mq-narration-capital-upsilon","~":""};function jy(e,t){let r=Qy[e];return r===""?"":r!==void 0?t(r):e.startsWith("\\")?e.slice(1):e}function Yy(e){return e=e.replace(/ +/g," "),e=e.replace(/(\.)([0-9]+)/g,(t,r,n)=>r+n.split("").join(" ").trim()),e.trim()}function Ka(e,t,r){return((/[A-Za-z0-9]$/.test(e)?e+":":e)+" "+t+" "+r).trim()}function at(e,t){let r=e.type==="group"?Pe(e,t):xd(e,t);return Yy(r)}function rs(e,t){if(te(e))return"";let r="";for(let n=e.left.index;n<e.right.index;n++){let a=e.group.nthChild(n);r+=at(a,t),a.type!=="text-char"&&(r+=" ")}return r.trim()}function bd(e,t){let r=rs(e,t);return r===""?t.localize("mq-narration-nothing-selected"):r+" "+t.localize("mq-narration-selected")}function Pe(e,t){var o,i;if(e.children.length===0&&((o=e.parent())==null?void 0:o.type)==="matrix")return"0";let r="",n="",a=e.numChildren();for(let s=0;s<a;s++){let c=e.nthChild(s);if(c.type==="char"){if(tr(e.marks.mutable_operatorName,s)){n+=c.latex;continue}else if(Ze(e.marks.mutable_operatorName,s)){n+=c.latex;let y="",w=(i=t.autoOperatorNames)==null?void 0:i.get(n);typeof w=="string"&&w.startsWith("mq-narration-op")?y=t.localize(w):typeof w=="string"&&w!=""&&(y=w),r+=y||n,r+=" ",n="";continue}else if(n){n+=c.latex;continue}}let g=xd(c,t),h=c.type==="char"?c.latex:"";c.type!=="text-char"&&(h.length!==1||!/^[0-9.]$/.test(h)&&!yd(e))?r+=" "+g+" ":r+=g}return r}function yd(e){let t=e.parent();return t&&pd(t)}function xd(e,t){switch(e.type){case"ans":return" ans";case"percentof":return" "+t.localize("mq-narration-percent-of")+" ";case"style-cmd":return lx(e,t);case"summation":return Zy(e,t);case"token":{let n=e.getDomNode();if(n){let a=[];for(let o of n.children){let i=o.getAttribute("aria-label");typeof i=="string"&&i!==""&&a.push(i.trim())}if(a.length>0)return a.join(" ")}return" "+t.localize("mq-narration-token")+" "+e.id}case"brackets":return ex(e,t);case"sqrt":return tx(e,t);case"binom":{let n=Pe(e.num,t),a=Pe(e.den,t);return t.localize("mq-narration-binomial",{num:n,den:a})}case"frac":return cx(e,t);case"supsub":return nx(e,t);case"char":let r=cr(e);return e.latex==="-"&&!r?" "+t.localize("mq-narration-negative"):e.latex==="+"&&!r?" "+t.localize("mq-narration-positive"):/^[a-z]$/i.test(e.latex)?yd(e.parent())?e.latex:`"${e.latex}"`:jy(e.latex,t.localize);case"matrix":return ax(e,t);case"string":return t.localize("mq-narration-start-string")+" "+e.fullText()+" "+t.localize("mq-narration-end-string");case"text-char":return t.speakSpace&&/^\s$/.test(e.text)?t.localize("mq-narration-space"):e.text;default:return""}}var vd={"\\int":"mq-narration-integral","\\sum":"mq-narration-sum","\\prod":"mq-narration-product","\\coprod":"mq-narration-co-product"},Xy={"\\int":"mq-narration-summation-integral","\\sum":"mq-narration-summation-sum","\\prod":"mq-narration-summation-product","\\coprod":"mq-narration-summation-co-product"};function Zy(e,t){let r=Pe(e.sub,t),n=Pe(e.sup,t);return t.localize(Xy[e.kind],{start:r,end:n})+","}var Va={"(":"parenthesis",")":"parenthesis","|":"pipe","{":"brace","}":"brace","[":"bracket","]":"bracket",langle:"angle-bracket",rangle:"angle-bracket",lVert:"double-vertical-line",rVert:"double-vertical-line"},wd={"angle-bracket":"mq-narration-left-angle-bracket",brace:"mq-narration-left-brace",bracket:"mq-narration-left-bracket","double-vertical-line":"mq-narration-left-double-vertical-line",parenthesis:"mq-narration-left-parenthesis",pipe:"mq-narration-left-pipe"},kd={"angle-bracket":"mq-narration-right-angle-bracket",brace:"mq-narration-right-brace",bracket:"mq-narration-right-bracket","double-vertical-line":"mq-narration-right-double-vertical-line",parenthesis:"mq-narration-right-parenthesis",pipe:"mq-narration-right-pipe"},Jy={"angle-bracket":"mq-narration-block-angle-bracket",brace:"mq-narration-block-brace",bracket:"mq-narration-block-bracket","double-vertical-line":"mq-narration-block-double-vertical-line",parenthesis:"mq-narration-block-parenthesis",pipe:"mq-narration-block-pipe"};function Wa(e,t,r){let n=Ma(e,t),a=Va[n];if(!a)return"";let{leftSymbol:o,rightSymbol:i}=e;return o==="|"&&i==="|"?r.localize(t==="left"?"mq-narration-absolute-value-start":"mq-narration-absolute-value-end"):r.localize(t==="left"?wd[a]:kd[a])}function ex(e,t){let{leftSymbol:r,rightSymbol:n}=e;if(r==="|"&&n==="|")return["",t.localize("mq-narration-absolute-value-start")+",",Pe(e.middle,t)+",",t.localize("mq-narration-absolute-value-end")].join(" ");let a=Va[r],o=Va[n],i=a?t.localize(wd[a]):"",s=o?t.localize(kd[o]):"";return["",i+",",Pe(e.middle,t)+" ,",s].join(" ")}function tx(e,t){let r=Pe(e.radicand,t);if(e.index){if(e.index.children.length===1&&e.index.children[0].type==="char"&&e.index.children[0].latex==="3")return" "+t.localize("mq-narration-cube-root",{radicand:r});{let n=Pe(e.index,t);return" "+t.localize("mq-narration-nth-root",{index:n,radicand:r})}}return" "+t.localize("mq-narration-square-root",{radicand:r})}function rx(e,t){let r=ts(e);if(!Tn.test(r)||t!=null&&t.ignoreShorthand)return;if(r==="0")return t.localize("mq-narration-power-0");if(r==="2")return t.localize("mq-narration-power-squared");if(r==="3")return t.localize("mq-narration-power-cubed");let n=/^([+-]?)(\d{1,3})$/.exec(r);if(n){let[,o,i]=n,s=parseInt(i,10),c=ns(s,t.language),g=`${s}`;return o==="-"?t.localize("mq-narration-power-negative-ordinal",{power:g,category:c}):t.localize("mq-narration-power-ordinal",{power:g,category:c})}let a=Pe(e,t);return t.localize("mq-narration-power",{power:a})}function ns(e,t){return new Intl.PluralRules(t,{type:"ordinal"}).select(e)}function nx(e,t){let r="";if(e.sub){let n=Pe(e.sub,t);r+=" "+t.localize("mq-narration-sub",{sub:n})+" "}if(e.sup){let n=rx(e.sup,t);if(n)r+=n;else{let a=Pe(e.sup,t);r+=" "+t.localize("mq-narration-sup",{sup:a})+" "}}return r}function ax(e,t){let r="",{numRows:n,numCols:a}=e.getDimensions();r+=t.localize("mq-narration-matrix-start",{rows:n,columns:a});let o=t.maxResizingMatrixSize,i=t.static&&n>o,s=t.static&&a>o,c=i?o-1:n,g=s?o-1:a,h=ox(e);for(let y=0;y<c;y++){r+=" "+qd(y,t);for(let w=0;w<g;w++)h||(r+=" "+Sd(w,t)),r+=" "+Pe(e.getChildAt(w,y),t);s&&(r+=" \u22EF")}return i&&(r+=" \u22EF"),r+=" "+t.localize("mq-narration-matrix-end"),r}function ox(e){return e.children.every(t=>t.children.length===0?!0:t.children.length!==1?!1:t.children[0].type==="char")}function qd(e,t){return e+=1,t.localize("mq-narration-matrix-row-start",{index:`${e}`,category:ns(e,t.language)})}function Sd(e,t){return e+=1,t.localize("mq-narration-matrix-column-start",{index:`${e}`,category:ns(e,t.language)})}function ix(e,t){switch(e.val){case"\\textcolor":return" "+e.styleParam;case"\\mathbf":return t.localize("mq-narration-style-bold-font");case"\\mathit":return t.localize("mq-narration-style-italic-font");case"\\mathrm":return"";case"\\mathsf":return t.localize("mq-narration-style-serif-font");case"\\mathtt":return t.localize("mq-narration-style-math-text");case"\\overarc":return t.localize("mq-narration-style-over-arc");case"\\overleftarrow":return t.localize("mq-narration-style-over-left-arrow");case"\\overleftrightarrow":return t.localize("mq-narration-style-over-left-and-right-arrow");case"\\overline":return t.localize("mq-narration-style-overline");case"\\overrightarrow":return t.localize("mq-narration-style-over-right-arrow");case"\\underline":return t.localize("mq-narration-style-underline");case"\\dot":return t.localize("mq-narration-style-dot");case"\\tilde":return t.localize("mq-narration-style-tilde");case"\\hat":return t.localize("mq-narration-style-hat");case"\\vec":return t.localize("mq-narration-style-vec");default:return e.val,""}}function as(e,t){var r;switch(e.val){case"\\textcolor":return t.localize("mq-narration-style-color-start",{color:(r=e.styleParam)!=null?r:""});case"\\mathbf":return t.localize("mq-narration-style-bold-font-start");case"\\mathit":return t.localize("mq-narration-style-italic-font-start");case"\\mathrm":return"";case"\\mathsf":return t.localize("mq-narration-style-serif-font-start");case"\\mathtt":return t.localize("mq-narration-style-math-text-start");case"\\overarc":return t.localize("mq-narration-style-over-arc-start");case"\\overleftarrow":return t.localize("mq-narration-style-over-left-arrow-start");case"\\overleftrightarrow":return t.localize("mq-narration-style-over-left-and-right-arrow-start");case"\\overline":return t.localize("mq-narration-style-overline-start");case"\\overrightarrow":return t.localize("mq-narration-style-over-right-arrow-start");case"\\underline":return t.localize("mq-narration-style-underline-start");case"\\dot":return t.localize("mq-narration-style-dot-start");case"\\tilde":return t.localize("mq-narration-style-tilde-start");case"\\hat":return t.localize("mq-narration-style-hat-start");case"\\vec":return t.localize("mq-narration-style-vec-start");default:return e.val,""}}function sx(e,t){var r;switch(e.val){case"\\textcolor":return t.localize("mq-narration-style-color-end",{color:(r=e.styleParam)!=null?r:""});case"\\mathbf":return t.localize("mq-narration-style-bold-font-end");case"\\mathit":return t.localize("mq-narration-style-italic-font-end");case"\\mathrm":return"";case"\\mathsf":return t.localize("mq-narration-style-serif-font-end");case"\\mathtt":return t.localize("mq-narration-style-math-text-end");case"\\overarc":return t.localize("mq-narration-style-over-arc-end");case"\\overleftarrow":return t.localize("mq-narration-style-over-left-arrow-end");case"\\overleftrightarrow":return t.localize("mq-narration-style-over-left-and-right-arrow-end");case"\\overline":return t.localize("mq-narration-style-overline-end");case"\\overrightarrow":return t.localize("mq-narration-style-over-right-arrow-end");case"\\underline":return t.localize("mq-narration-style-underline-end");case"\\dot":return t.localize("mq-narration-style-dot-end");case"\\tilde":return t.localize("mq-narration-style-tilde-end");case"\\hat":return t.localize("mq-narration-style-hat-end");case"\\vec":return t.localize("mq-narration-style-vec-end");default:return e.val,""}}function lx(e,t){let r=Pe(e.arg,t),n=as(e,t),a=sx(e,t);return n?n+", "+r+" "+a:r}function ts(e){let t="";for(let r of e.children){if(r.type!=="char")return"";t+=r.latex}return t}var Tn=/^[\+\-]?[\d]+$/;function cx(e,t){let r=ts(e.num),n=ts(e.den),a=Pe(e.num,t),o=Pe(e.den,t),i=e.mutable_fracDepth&&e.mutable_fracDepth>1?t.localize("mq-narration-fraction-nested",{num:a,den:o}):t.localize("mq-narration-fraction",{num:a,den:o});if(!(t!=null&&t.ignoreShorthand)&&Tn.test(r)&&Tn.test(n)){let y="";r[0]=="-"&&(y=t.localize("mq-narration-negative")),r[0]=="+"&&(y=t.localize("mq-narration-positive")),i=t.localize("mq-narration-fraction-shorthand",{num:Si(Math.abs(parseInt(r))),den:Si(parseInt(n)),numPrefix:y,full:i})}let s=!1,c;for(c=e.prevSibling();(c==null?void 0:c.type)==="char"&&(c.latex==="\\ "||Tn.test(c.latex));c=c.prevSibling())Tn.test(c.latex)&&(s=!0);let g=c;return s&&!((g==null?void 0:g.type)==="char"&&g.latex===".")?" "+t.localize("mq-narration-fraction-and")+" "+i:i}function Cd(e,t,r){switch(e.type){case"char":case"text-char":case"percentof":case"ans":case"token":return"";case"brackets":if(e.leftLatex==="|"&&e.rightLatex==="|")return r.localize("mq-narration-absolute-value");let n=Va[e.leftLatex];return n?r.localize(Jy[n]):"";case"sqrt":return e.index===void 0?r.localize("mq-narration-root"):r.localize(wn(e,t)==="index"?"mq-narration-index":"mq-narration-radicand");case"binom":return r.localize(Rr(e,t)==="num"?"mq-narration-index-upper":"mq-narration-index-lower");case"frac":return r.localize(Rr(e,t)==="num"?"mq-narration-numerator":"mq-narration-denominator");case"supsub":return r.localize(sr(e,t)==="sub"?"mq-narration-subscript":"mq-narration-superscript");case"summation":return r.localize(sr(e,t)==="sub"?"mq-narration-bound-lower":"mq-narration-bound-upper");case"style-cmd":return ix(e,r);case"matrix":{let{x:a,y:o}=e.getPosOfChild(e.children[t]);return qd(o,r)+" "+Sd(a,r)}case"string":return r.localize("mq-narration-string");default:throw new Error(`Invalid node: ${e.type}`)}}var Ur={"(":")",")":"(","[":"]","]":"[","{":"}","}":"{","\\{":"\\}","\\}":"\\{",langle:"rangle",rangle:"langle","\\langle ":"\\rangle ","\\rangle ":"\\langle ","|":"|",lVert:"rVert",rVert:"lVert","\\lVert ":"\\rVert ","\\rVert ":"\\lVert "};function En(e,t,r,n,a,o){let i=t==="either"?"left":t;if(!te(e.selection))return Md(e,r,a,n,o,i,void 0);let s=e.selection.head,c=e.selection.group;if(t==="left"||t==="either"){let w=s.nodeAfter();if((w==null?void 0:w.type)==="brackets"){let k=Qa(e,w,w.middle.firstCursor(),"left",r,n);if(k)return k}}if(t==="right"||t==="either"){let w=s.nodeBefore();if((w==null?void 0:w.type)==="brackets"){let k=Qa(e,w,w.middle.lastCursor(),"right",a,o);if(k)return k}}let g=c.parent();if((g==null?void 0:g.type)==="brackets"){if(t==="left"||t==="either"){let w=Qa(e,g,s,"left",r,n);if(w)return w}if(t==="right"||t==="either"){let w=Qa(e,g,s,"right",a,o);if(w)return w}}let h=c.lastCursorInDir(ee(i)),y=fe(s,h);return e=e.withSelection(y),Md(e,r,a,n,o,i,ee(i))}function Qa(e,t,r,n,a,o){if(!r.group.eq(t.firstChild()))throw new Error("Programming Error: typedCursor not inside bracketNode");if(t.ghostSide!==n)return;let i=n==="left"?a:t.leftSymbol,s=n==="right"?a:t.rightSymbol;if(!Td(e.config,i,s))return;let c=t.containingSelection(),g=t.firstChild(),h=He(fe(g.lastCursorInDir(n),r)),y=He(fe(g.lastCursorInDir(ee(n)),r)),{insertedSelection:w}=X(c,h),{root:k,inserted:_}=re(R(ge(w,ee(n))),Oi(vn(t,U(y)),n,a,o)),I;return n==="left"?I=_.middle.firstCursor():I=_.containingSelection().right,e=e.withRootAndSelection(k,R(I)),{model:e,inserted:_}}function Td(e,t,r){if(Ur[t]==r)return!0;switch(e.restrictMismatchedBrackets){case"none":return!1;case!1:default:return!0;case!0:return t==="("&&r==="]"||t==="["&&r===")"}}function os(e,t,r,n){let a=n==="right"?t.leftSymbol:r.leftSymbol,o=n==="right"?r.rightSymbol:t.rightSymbol;return Td(e,a,o)}function ja(e,t,r){return Oi(e,r,Ma(t,r),pu(t,r))}function Md(e,t,r,n,a,o,i){let s=He(e.selection),c=new Ve({leftLatex:n,leftSymbol:t,rightLatex:a,rightSymbol:r,ghostSide:i,middle:U(s)}),{root:g,inserted:h}=re(e.selection,c);if(o==="right"){let y=h.cursorOnSide("right");e=e.withRootAndSelection(g,R(y))}else{let w=h.middle.firstCursor();e=e.withRootAndSelection(g,R(w))}return{model:e,inserted:h}}function Ed(e){for(;;){let t=e.root.find(r=>r.type!=="string"?!1:!ux(e,r));if(!t)return e;if(t.type!=="string")throw new Error("Unreachable: expected string");e=e.withSplicedMqTree(t.containingSelection(),()=>[zt(t,void 0)])}}function ux(e,t){if(t.ghostSide===void 0)return!0;if(!te(e.selection))return!1;let r=e.selection.head;switch(t.ghostSide){case"left":return r.eq(t.cursorOnSide("left"));case"right":return r.eq(t.body.lastCursor())}}function Ya(e){return is(e,"selection")}function is(e,t){for(;;){let r=t==="root"?e.root.containingSelection():e.selection,n=au(r,a=>(a.type==="brackets"||a.type==="string")&&!!a.ghostSide);if(!n)break;if(n.type!=="brackets"&&n.type!=="string")throw new Error(`Unreachable: ${n.type} is not brackets or string`);e=e.withSplicedMqTree(n.containingSelection(),()=>[mu(n,void 0)])}return e}function ss(e,t){let r=e.s(t==="frac"?"mq-narration-over":"mq-narration-choose");if(!te(e.selection))return Ad(e,t).withAriaQueueItem(r);e=dx(e,e.selection.head,t);let n=e.selection.group.parent();return(n==null?void 0:n.type)==="frac"&&n.num.numChildren()===0?e.withAriaQueueItem(e.s("mq-narration-start-fraction")):e.withAriaQueueItem(r)}function dx(e,t,r){let n=t,a=e.selection.left;for(;;){let s=a.nodeBefore();if(!s||px(s,s.getIndex(),s.parent()))break;a=s.cursorOnSide("left")}let o=fe(a,n);if(o===void 0)throw new Error("Programming Error: selection should be valid because left and right have the same parent.");let i=e.withSelection(o);return Ad(i,r)}function Ad(e,t){e=Ya(e);let r=He(e.selection),n=t==="frac"?Mt:ar,a=new n({num:U(r),den:U([])}),{root:o,inserted:i}=re(e.selection,a),s=i.num,c=i.den,g=s.children.length===0?s:c,h=R(g.firstCursor());return e.withRootAndSelection(o,h)}function px(e,t,r){switch(e.type){case"summation":return!0;case"group":case"frac":case"binom":case"percentof":case"ans":case"token":case"sqrt":case"supsub":case"brackets":case"style-cmd":case"matrix":case"text-char":case"string":return!1;case"char":return e.latex==="."?Rt(r.marks.ellipsis,t):e.latex==="\\ "||e.latex===";"||e.latex===","||e.latex===":"||zi(e,r,t)}}function Xa(e,t){var y;e=Ya(e);let r=He(e.selection),n=e.selection.left.nodeBefore();if((n==null?void 0:n.type)==="supsub"){X(e.selection,[]);let w=Dd(n,t),k=w.lastCursor(),{root:_,insertedSelection:I}=X(R(k),r),S=R(I.right);return e=e.withRootAndSelection(_,S),e.withAriaQueueDirEndOf("right",w)}if(n===void 0&&e.config.supSubsRequireOperand&&te(e.selection))return e;let a=e.selection.right.nodeAfter();if((a==null?void 0:a.type)==="supsub"){X(e.selection,[]);let w=Dd(a,t),k=w.firstCursor(),{root:_,insertedSelection:I}=X(R(k),r),S=R(I.right);return e=e.withRootAndSelection(_,S),e.withAriaQueueDirEndOf("left",w)}let o=t==="sup"?fx(r):mx(r),{root:i,inserted:s}=re(e.selection,o),c=(y=s.sup)!=null?y:s.sub,g=R(c.lastCursor());e=e.withRootAndSelection(i,g);let h=e.s(t==="sup"?"mq-narration-superscript":"mq-narration-subscript");return e.withAriaQueueItem(h)}function Dd(e,t){return t==="sup"?hx(e):gx(e)}function gx(e){if(e.sub===void 0){let t=new ke({sup:e.sup,sub:U([])});e=re(e.containingSelection(),t).inserted}return e.sub}function hx(e){if(e.sup===void 0){let t=new ke({sup:U([]),sub:e.sub});e=re(e.containingSelection(),t).inserted}return e.sup}function mx(e){return new ke({sup:void 0,sub:U(e)})}function fx(e){return new ke({sup:U(e),sub:void 0})}function bt(e,t,r){let{root:n,inserted:a}=re(t,r),o=a.cursorOnSide("right");return e.withRootAndSelection(n,R(o)).withAriaQueueNode(a,{speakSpace:!0})}var Nd={"\u221A":"sqrt","*":"cdot"};function Za(e,t,r){let a=e.selection.head.nodeBefore();if(!a||a.type!=="char"||a.latex!==t)return;let o=a.containingSelection();return bt(e,o,new he(r))}function bx(e,t){if(e.config.charsThatBreakOutOfSupSub.indexOf(t)>-1&&te(e.selection)){let{group:r,head:n}=e.selection,a=n.nodeBefore(),o=n.nodeAfter();if(a&&!o){let i=r.parent();if(i&&i.type==="supsub"){let s=i.cursorOnSide("right");e=e.withPointSelection(s)}}}return e}function yx(e,t){if(!e.config.autoSubscriptNumerals||!t.match(/^[0-9]$/)||!te(e.selection))return;let{head:r,group:n}=e.selection,a=r.nodeBefore();if(!a)return;let o=n.parent();if((o==null?void 0:o.type)==="supsub"&&o.sub===n)return;let i,s;if((a==null?void 0:a.type)==="supsub"?(i=a,s=i.prevSibling()):s=a,!s||!bu(s))return;let c=s==null?void 0:s.parent(),g=s==null?void 0:s.getIndex();if(Rt(c.marks.mutable_operatorName,g))return;if(!i)return Pd(e,R(r),new ke({sup:void 0,sub:U([new he(t)])}));let h=i.sub?i.sub.children:[];return Pd(e,a.containingSelection(),new ke({sup:i.sup,sub:U(h.concat(new he(t)))}))}function Pd(e,t,r){let{root:n,inserted:a}=re(t,r),o=a.cursorOnSide("right");return e.withRootAndSelection(n,R(o))}function Id(e,t){if(te(e.selection)){let i=(t==='"'||t==="\u201D")&&qx(e);if(i)return i;let s=(t==='"'||t==="\u201C")&&Sx(e);if(s)return s}if(Gt(e.selection.group)){if(t.length!==1)throw new Error(`Char ${JSON.stringify(t)} is not one code unit (typeChar).`);if(Yc(t))return e;let i=new Nr(t);return bt(e,e.selection,i)}if(t.match(/^[0-9]$/)&&!te(e.selection)){let{root:i,insertedSelection:s}=X(e.selection,[]);e=e.withRootAndSelection(i,s)}let r=yx(e,t);if(r)return r;if(e=bx(e,t),t.match(/^[a-zA-Z0-9]$/))return e=bt(e,e.selection,new he(t)),e=xx(e,e.selection.right),e;if(e.config.typingSlashWritesDivisionSymbol&&t==="/")return bt(e,e.selection,new he("\\div"));if(e.config.typingAsteriskWritesTimesSymbol&&t==="*")return bt(e,e.selection,new he("\\times"));switch(t){case"/":return ss(e,"frac");case"^":return Xa(e,"sup");case"_":return Xa(e,"sub");case"(":case")":{let i=t==="("?"left":"right";({model:e}=En(e,i,"(","(",")",")"));let s=e.s(i==="left"?"mq-narration-left-parenthesis":"mq-narration-right-parenthesis");return e.withAriaQueueItem(s)}case"[":case"]":{let i=t==="["?"left":"right";({model:e}=En(e,i,"[","[","]","]"));let s=e.s(i==="left"?"mq-narration-left-bracket":"mq-narration-right-bracket");return e.withAriaQueueItem(s)}case"{":case"}":{let i=t==="{"?"left":"right";({model:e}=En(e,i,"{","\\{","}","\\}"));let s=e.s(i==="left"?"mq-narration-left-brace":"mq-narration-right-brace");return e.withAriaQueueItem(s)}case"|":{({model:e}=En(e,"either","|","|","|","|"));let{head:i,group:s}=e.selection,c=i.nodeBefore(),g=c!=null?c:s.parent();if((g==null?void 0:g.type)!=="brackets")throw new Error("Programming error: bracket expected");let y=Wa(g,c?"right":"left",e.getMathspeakOptions());return e.withAriaQueueItem(y)}case'"':case"\u201C":{if(!e.config.strings)break;let{root:i,inserted:s}=re(e.selection,new Ft({body:U([]),ghostSide:"right"})),c=s.body.firstCursor();return e.withRootAndSelection(i,R(c)).withAriaQueueItem(e.s("mq-narration-start-string"))}case"\u201D":{if(!e.config.strings)break;return e}case"=":{let i=Za(e,">","\\ge");if(i||(i=Za(e,"<","\\le"),i))return i;break}case">":{let i=Za(e,"-","\\to");if(i)return i;break}case"~":{let i=Za(e,"\\sim","\\approx");if(i)return i;break}case`
`:return e;default:{let i=Aa(t);if(i.match(/^\^[0-9]$/)){let s=i[1];return e=Xa(e,"sup"),bt(e,e.selection,new he(s))}else if(i&&!Nd[t]){let s=Mn(i,e.config),c=X(e.selection,s.children),g=R(c.insertedSelection.right);return e.withRootAndSelection(c.root,g)}}}let n=Nd[t]||lr(t);t==="%"&&e.config.typingPercentWritesPercentOf&&(n="percent");let a=Od(e,e.selection,n);if(a)return a;let o=Ir(n);return bt(e,e.selection,new he(o))}function xx(e,t){var y,w;let r=t.group.parent();if((r==null?void 0:r.type)==="supsub"){let k=r.parent(),_=r.getIndex(),I=k.marks.mutable_operatorName,S=t.group===r.sub,L=((y=er(I,_-1))==null?void 0:y.word)==="log";if(S&&!L)return e}let n=(w=t.nodeBefore())==null?void 0:w.getIndex();if(n===void 0)return e;let a=t.group;if(e.config.matrices){let k=kx(e,a,n);if(k!==void 0)return k}let o=wx(a,n,e.config.autoCommands);if(o===void 0)return e;let i=n-o.length+1,s=Ue(a,i,n+1),c=lr(o),g=Od(e,s,c);if(g)return g;let h=Ir(c);return bt(e,s,new he(h))}var vx=["sqrt","nthroot","cbrt","sum","prod","coprod","int","percent","ans","frac","binom","matrix"];function ls(e){return vx.includes(e)}function Od(e,t,r){if(ls(r))switch(r){case"sqrt":case"nthroot":{let n=new Bt({radicand:U([]),index:r==="nthroot"?U([]):void 0}),{root:a,inserted:o}=re(t,n),i=R(o.firstChild().firstCursor());return e.withRootAndSelection(a,i)}case"cbrt":{let n=new Bt({radicand:U([]),index:U([new he("3")])}),{root:a,inserted:o}=re(t,n),i=R(o.radicand.firstCursor());return e.withRootAndSelection(a,i)}case"sum":case"prod":case"coprod":case"int":{let n=new or({kind:"\\"+r,sub:r!=="int"&&e.config.sumStartsWithNEquals?U([new he("n"),new he("=")]):U([]),sup:U([])}),{root:a,inserted:o}=re(t,n),i=R(o.sub.lastCursor());return e.withRootAndSelection(a,i)}case"percent":return bt(e,t,new _r);case"ans":return bt(e,t,new Pr);case"frac":{let n=new Mt({num:U([]),den:U([])}),{root:a,inserted:o}=re(t,n),i=R(o.num.firstCursor());return e.withRootAndSelection(a,i)}case"binom":{let{root:n,insertedSelection:a}=X(t,[]);return e=e.withRootAndSelection(n,a),ss(e,"binom")}case"matrix":return e.config.matrices?Gd(e,t,{numRows:2,numCols:2}):e;default:return}}function wx(e,t,r){let n,a=r.getReverseTrieRoot();for(let o=t;a&&o>=0;o--){let i=e.children[o];if(i.type!=="char"||Rt(e.marks.mutable_operatorName,o))break;a=a.followPath(i.latex),a!=null&&a.endWord&&(n=a.endWord)}return n}var _d=/^[1-9]$/;function kx(e,t,r){if(r<2)return;let n=t.children[r-2];if(n.type!=="char"||n.latex!=="#")return;let a=t.children[r-1];if(a.type!=="char"||!_d.test(a.latex))return;let o=t.children[r];if(o.type!=="char"||!_d.test(o.latex))return;let i=parseInt(a.latex),s=parseInt(o.latex);return Gd(e,Ue(t,r-2,r+1),{numRows:i,numCols:s})}function Gd(e,t,{numRows:r,numCols:n}){let a=[];for(let g=0;g<r*n;g++)a.push(U([]));let o=new ct({children:a,numCols:n}),{root:i,inserted:s}=re(t,o),c=s.getChildAt(0,0).firstCursor();return e.withRootAndSelection(i,R(c)).withAriaQueueItem(e.s("mq-narration-matrix-start",{rows:r,columns:n}))}function qx(e){var o;let t=(o=Ld(e.selection.head.nodeBefore()))!=null?o:e.selection.right.nodeAfter()===void 0&&Ld(e.selection.group.parent());if(!t)return;let{root:r,inserted:n}=re(t.containingSelection(),zt(t,void 0)),a=n.cursorOnSide("right");return e.withRootAndSelection(r,R(a)).withAriaQueueItem(e.s("mq-narration-end-string"))}function Ld(e){if((e==null?void 0:e.type)==="string"&&e.ghostSide==="right")return e}function Sx(e){var o;let t=(o=Rd(e.selection.head.nodeAfter()))!=null?o:Rd(e.selection.group.parent());if(!t)return;let{root:r,inserted:n}=re(t.containingSelection(),zt(t,void 0)),a=n.body.firstCursor();return e.withRootAndSelection(r,R(a)).withAriaQueueItem(e.s("mq-narration-start-string"))}function Rd(e){if((e==null?void 0:e.type)==="string"&&e.ghostSide==="left")return e}var $d=e=>Object.entries(e);var Cx=["autoOperatorNames","prefixOperatorNames","infixOperatorNames"],ds=Cx,sd=["quietEmptyDelimeters","static","maxResizingMatrixSize"],Ja=class e{constructor(){this.children={}}buildPath(t){let r=this.children[t];return r||(r=new e,this.children[t]=r),r}followPath(t){return this.children[t]}},An=class{constructor(){this.trieRoot=new Ja;this.reverseTrieRoot=new Ja;this.map=new Map}getTrieRoot(){return this.trieRoot}getReverseTrieRoot(){return this.reverseTrieRoot}set(t,r){this.map.set(t,r);{let n=this.trieRoot;for(let a=0;a<t.length;a++)n=n.buildPath(t[a]);n.endWord=t}{let n=this.reverseTrieRoot;for(let a=t.length-1;a>=0;a--)n=n.buildPath(t[a]);n.endWord=t}}has(t){return this.map.has(t)}get(t){return this.map.get(t)}keys(){return this.map.keys()}},{BuiltInOpNames:eu,AutoOpNames:Mx}=Tx();function Tx(){let e=new Set,t=new An,r="arg deg det dim exp gcd hom inf ker lg lim ln log max min sup limsup liminf injlim projlim Pr".split(" ");for(let i=0;i<r.length;i+=1){let s=r[i];e.add(s),t.set(s,1)}let n="sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" ");for(let i=0;i<n.length;i+=1)e.add(n[i]);let a="sin cos tan sec cosec csc cotan cot ctg".split(" ");for(let i=0;i<a.length;i+=1)t.set(a[i],1),t.set("arc"+a[i],1),t.set(a[i]+"h",1),t.set("ar"+a[i]+"h",1),t.set("arc"+a[i]+"h",1);let o="gcf hcf lcm proj span".split(" ");for(let i=0;i<o.length;i+=1)t.set(o[i],1);return{BuiltInOpNames:e,AutoOpNames:t}}function ps(e,t){let r={...e};for(let[n,a]of $d(t))switch(n){case"autoOperatorNames":if(a===void 0)break;r[n]=Ex(a);break;case"autoCommands":if(a===void 0)break;r[n]=Fd(a);break;case"leftRightIntoCmdGoes":r[n]=Ax(a);break;case"infixOperatorNames":case"prefixOperatorNames":if(a===void 0)break;r[n]=cs(a);break;case"quietEmptyDelimeters":if(a===void 0)break;r[n]=Bd(a);break;default:r[n]=a;break}return r}function cs(e){if(e.length===0)return new Set;if(typeof e!="string")throw'"'+e+'" not a space-delimited list';if(!/^[a-z]+(?: [a-z]+)*$/i.test(e))throw'"'+e+'" not a space-delimited list of letters';let t=e.split(" "),r=new Set;for(let n=0;n<t.length;n+=1){let a=t[n];if(a.length<2)throw'"'+a+'" not minimum length of 2';r.add(a)}return r}function Ex(e){if(typeof e!="string")throw'"'+e+'" not a space-delimited list';if(!/^[a-z\|\-]+(?: [a-z\|\-]+)*$/i.test(e))throw'"'+e+'" not a space-delimited list of letters or "|"';let t=e.split(" "),r=new An;for(let n=0;n<t.length;n+=1){let a=t[n];if(a.length<2)throw'"'+a+'" not minimum length of 2';if(a.indexOf("|")<0)r.set(a,a);else{let o=a.split("|");if(o.length>2)throw'"'+a+'" has more than 1 mathspeak delimiter';if(o[0].length<2)throw'"'+a[0]+'" not minimum length of 2';o[1].startsWith("mq-narration-op-")?r.set(o[0],o[1]):r.set(o[0],o[1].replace(/-/g," "))}}return r}function Fd(e){if(typeof e!="string"||!/^[a-z]+(?: [a-z]+)*$/i.test(e))throw'"'+e+'" not a space-delimited list of only letters';let t=e.split(" ");t.push("matrix");let r=new An;for(let n=0;n<t.length;n+=1){let a=t[n];if(a.length<2)throw new Error('Autocommand "'+a+'" not minimum length of 2');let o=lr(a);if(!(o in Ea||ls(o)))throw new Error(`Invalid auto-command: ${JSON.stringify(a)}`);r.set(a,1)}return r}function Bd(e){return new Set(e.split(" "))}function Ax(e){if(e==="up")return"up";if(e==="down")return"down";if(e!==void 0)throw'"up" or "down" required for leftRightIntoCmdGoes option, got "'+e+'"'}var us={strings:!1,matrices:!1,maxResizingMatrixSize:9,logAriaAlerts:!1,needsSystemKeypad:!1,resetCursorOnBlur:!1,autoSubscriptNumerals:!1,supSubsRequireOperand:!1,autoCommands:Fd("alpha beta sqrt theta phi rho pi tau nthroot cbrt sum prod integral percent infinity infty cross ans frac"),infixOperatorNames:cs(""),prefixOperatorNames:cs(""),autoOperatorNames:Mx,leftRightIntoCmdGoes:void 0,restrictMismatchedBrackets:!1,typingSlashWritesDivisionSymbol:!1,typingAsteriskWritesTimesSymbol:!1,typingPercentWritesPercentOf:!1,sumStartsWithNEquals:!1,charsThatBreakOutOfSupSub:"",enableDigitGrouping:!1,static:!1,tabindex:void 0,quietEmptyDelimeters:Bd("( ["),scrollAnimationDuration:100,localize:()=>{throw new Error("Programming Error: mq localization function not set")},language:"en"},zd=!1;function Ud(){return zd=!0,us}function Hd(e){if(zd)throw new Error("Cannot update global config after an MQ field has already been instantiated.");us=ps(us,e)}function eo({clientX:e,clientY:t}){return{type:"click",clientX:e,clientY:t}}function gr(e,t){let{clientX:r}=t,n=e.lastChild();if(!n)return e.lastCursor();let a=n,o=a.boundingClientRect();if(o){if(r>o.right)return e.lastCursor();for(;r<o.left;){let i=a.prevSibling();if(!i)break;if(a=i,o=a.boundingClientRect(),!o)return}return Kd(a,t)}}function Kd(e,t){let{clientX:r}=t;if(e.type==="matrix")return Nx(e,t);let n=e.boundingClientRect();if(n){if(ir(e)){let a=n.left+n.width/2,o=r<a?"left":"right",i=e.containingSelection();return ge(i,o)}switch(e.type){case"frac":case"binom":return Vd(e,e.num,e.den,t);case"supsub":case"summation":return!e.sup||!e.sub?gs(e,Ni(e),t):Vd(e,e.sup,e.sub,t);case"sqrt":case"style-cmd":case"brackets":case"string":return gs(e,Ni(e),t);default:return}}}function Vd(e,t,r,n){let a=e.boundingClientRect(),o=t.boundingClientRect(),i=r.boundingClientRect();if(!a||!o||!i)return;let s=Math.max(o.right,i.right),c=Math.min(o.left,i.left);if(n.clientX>(a.right+s)/2)return e.cursorOnSide("right");if(n.clientX<(a.left+c)/2)return e.cursorOnSide("left");switch(n.type){case"click":{let g=n.clientY>(o.bottom+i.top)/2;return gr(g?r:t,n)}case"updown":return n.updown==="up"?gr(r,n):gr(t,n);default:return}}function Dx(e,t){let{numRows:r}=e.getDimensions();if(t.type==="updown")return t.updown==="up"?r-1:0;let n=t.clientY,a=[];for(let i=0;i<r;i++)a.push(e.getChildAt(0,i));let o=Px(n,e,a);if(o)switch(o.type){case"before-container":return 0;case"after-container":return r-1;default:return o.index}}function Nx(e,t){if(!e.boundingClientRect())return;let{numCols:n}=e.getDimensions(),a=Dx(e,t);if(a===void 0)return;let o=[];for(let i=0;i<n;i++)o.push(e.getChildAt(i,a));return gs(e,o,t)}function gs(e,t,r){let{clientX:n}=r,a=_x(n,e,t);if(a)switch(a.type){case"before-container":return e.cursorOnSide("left");case"after-container":return e.cursorOnSide("right");case"before":return t[a.index].firstCursor();case"after":return t[a.index].lastCursor();case"inside":return gr(t[a.index],r);default:return}}function Px(e,t,r){let n=[];for(let i of r){let s=i.boundingClientRect();if(!s)return;n.push({start:s.top,end:s.bottom})}let a=t.boundingClientRect();if(!a)return;let o={start:a.top,end:a.bottom};return Wd(e,o,n)}function _x(e,t,r){let n=[];for(let i of r){let s=i.boundingClientRect();if(!s)return;n.push({start:s.left,end:s.right})}let a=t.boundingClientRect();if(!a)return;let o={start:a.left,end:a.right};return Wd(e,o,n)}function Wd(e,t,r){let n=t.start;for(let i=0;i<r.length;i++)if(e<r[i].start){let s=(n+r[i].start)/2;return e<s?i>0?{type:"after",index:i-1}:{type:"before-container"}:{type:"before",index:i}}else if(e>r[i].end)n=r[i].end;else return{type:"inside",index:i};let a=r.length-1,o=(t.end+r[a].end)/2;return e<o?{type:"after",index:a}:{type:"after-container"}}function to(e,t,r){var a,o,i;let n=(a=ro(e,t))!=null?a:e.root;return n.type==="group"?(o=gr(n,r))!=null?o:n.lastCursor():(i=Kd(n,r))!=null?i:n.cursorOnSide("right")}function ro(e,t){if(e.domToMqNode===void 0)throw new Error("Programming Error: Not yet rendered to DOM.");if(t)for(;;){let r=e.domToMqNode.get(t);if(r)return r;if(!t.parentElement)return;t=t.parentElement}}function Yd(e,t){let r=e.selection;if(!Lx(r)){let n=Qd(r.head,t,"right");if(n)return e.withPointSelection(n).withAriaQueueDirEndOf("left",n.group);let a=Qd(r.head,t,"left");if(a)return e.withPointSelection(a).withAriaQueueDirEndOf("right",a.group)}return Rx(e,t)}function Lx(e){var r;let t=e.group;return((r=t.parent())==null?void 0:r.type)==="matrix"&&e.left.eq(t.firstCursor())&&e.right.eq(t.lastCursor())}function Qd(e,t,r){let n=e.nodeInDirection(r);if(!n)return;let a=t==="up"?no(n):ao(n);if(a)return a.lastCursorInDir(ee(r))}function Rx(e,t){let{head:r,group:n}=e.selection,a=Ox(n,t);if(a===void 0)return e.withPointSelection(e.selection.head);let{ancestor:o,ancestorGroup:i,moveTo:s}=a;if(s){let c=$x(e,i,s,t),g=R(c),h=Ix(n,c);return h&&(g=h.containingSelection()),e.withSelection(g).withAriaQueueNode(g.group,{shouldDescribe:!0})}else{let c=Gx(r,o)?"right":"left";return e.withPointSelection(o.cursorOnSide(c)).withAriaQueueDirOf(c,o)}}function Ix(e,t){let r=t.group,a=Li(e,r).depth(),o=r,i=r.depth(),s;for(let c of o.allParents()){if(c.type==="group"){let g=c.parent();(g==null?void 0:g.type)==="matrix"&&(s=c)}if(i--,i<=a)break}return s}function Ox(e,t){for(;;){let r=e.parent();if(!r)return;if(r.type==="matrix"){let{x:a,y:o}=r.getPosOfChild(e);if(t==="up"&&o>0)return{ancestor:r,ancestorGroup:e,moveTo:r.getChildAt(a,o-1)};if(t==="down"&&o<r.getNumRows()-1)return{ancestor:r,ancestorGroup:e,moveTo:r.getChildAt(a,o+1)}}let n=jd(r,Fc(t));if(n&&n.eq(e)){let a=jd(r,t);return{ancestor:r,ancestorGroup:e,moveTo:a}}e=r.parent()}}function Gx(e,t){if(!e.eq(e.group.lastCursor()))return!1;let r=e.group.parent();if(r===void 0)throw new Error("Programming Error: ancestor is not ancestor of cursor.");let n=r;for(;!n.eq(t);){let a=n.parent();if(!n.eq(a.lastChild()))return!1;let o=a.parent();if(o===void 0)throw new Error("Programming Error: ancestor is not ancestor of cursor.");n=o}return!0}function $x(e,t,r,n){var g;let a=e.selection.head;$t(a.group,"upDown",a.index),t.mutable_upDownGroup=a.group;let o=r.mutable_upDownGroup;if(o){let h=(g=o==null?void 0:o.mutable_cursorIndices)==null?void 0:g.get("upDown");if(h!==void 0)return new ie(o,h)}let i=hs(e);if(i===void 0)return r.lastCursor();let c=gr(r,{type:"updown",updown:n,clientX:i});return c===void 0?r.lastCursor():c}function hs(e){let{selection:t,selectionDom:r}=e;if(!r)return;let n=r.getBoundingClientRect();return t.head.eq(t.right)?n.right:n.left}function jd(e,t){return t==="up"?no(e):ao(e)}function no(e){switch(e.type){case"frac":case"binom":return e.num;case"supsub":case"summation":return e.sup;case"sqrt":case"brackets":case"style-cmd":case"char":case"text-char":case"percentof":case"token":case"ans":case"string":case"matrix":return}}function ao(e){switch(e.type){case"frac":case"binom":return e.den;case"supsub":case"summation":return e.sub;case"sqrt":case"brackets":case"style-cmd":case"char":case"text-char":case"percentof":case"token":case"matrix":case"string":case"ans":return}}function Xd(e,t){let r=e.selection;if(te(r))return Fx(e,r.anchor,t);let n=ge(r,t);return e.withPointSelection(n)}function Fx(e,t,r){let n=t.nodeInDirection(r);return n?Bx(e,n,r):fs(e,t.group,r)}function Bx(e,t,r){var a;if(ir(t)||t.type==="supsub"&&!t.sup&&e.config.autoSubscriptNumerals){let o=t.containingSelection();return e.withPointSelection(ge(o,r)).withAriaQueueBareSelection(o,{speakSpace:!0})}if(t.type==="matrix")return ms(e,t,r);{let o=(a=Zd(e,t))!=null?a:t.lastChildInDir(ee(r)),i=o.lastCursorInDir(ee(r));return e.withPointSelection(i).withAriaQueueDirEndOf(ee(r),o)}}function ms(e,t,r){let n=r==="left"?t.getNumCols()-1:0,a=t.getChildAt(n,0);return hr(e,a)}function fs(e,t,r){let n=t.parent();if(n===void 0)return e.withPointSelection(t.lastCursorInDir(r));if(n.type==="matrix"){let i=bs(n,t,r);return i?hr(e,i):Et(e,n,r)}let a=Zd(e,n),o=t.nextSiblingInDir(r);return!a&&o?e.withPointSelection(o.lastCursorInDir(ee(r))).withAriaQueueDirEndOf(ee(r),o):Et(e,n,r)}function hr(e,t){return e.withSelection(t.containingSelection()).withAriaQueueNode(t,{shouldDescribe:!0})}function Et(e,t,r){return e.withPointSelection(t.cursorOnSide(r)).withAriaQueueDirOf(r,t)}function bs(e,t,r){let{x:n,y:a}=e.getPosOfChild(t);return r==="left"&&n>0?e.getChildAt(n-1,a):r==="right"&&n<e.getNumCols()-1?e.getChildAt(n+1,a):void 0}function Zd(e,t){let r=e.config.leftRightIntoCmdGoes;return r==="up"?no(t):r==="down"?ao(t):void 0}var zx={"\\le":"<","\\ge":">","\\approx":"\\sim","\\to":"-"};function io(e,t){let r=e.selection;if(te(r))return Ux(e,r.anchor,t);let{root:n,insertedSelection:a}=X(r,[]);return e.withRootAndSelection(n,a).withAriaQueueBareSelection(r)}function ep(e,t){let r=e.selection,{head:n,group:a}=r;if(!te(r)||r.head.nodeInDirection(t)===void 0)return io(e,t);let o=a.lastCursorInDir(t),i=fe(n,o),{root:s,insertedSelection:c}=X(i,[]);return e.withRootAndSelection(s,c).withAriaQueueBareSelection(i)}function Ux(e,t,r){let n=t.nodeInDirection(r);return n?Hx(e,n,r):Vx(e,t.group,r)}function oo(e){let t=e.numChildren();for(let r=0;r<t;r++)if(e.nthChild(r).children.length!==0)return!1;return!0}function mr(e,t){let r=t.containingSelection();return tp(e,r)}function tp(e,t){let{root:r,insertedSelection:n}=X(t,[]);return e.withRootAndSelection(r,n).withAriaQueueBareSelection(t)}function Dn(e,t,r){if(t.type==="matrix")return ms(e,t,r);let n=ee(r),a=t.lastChildInDir(n);return e.withPointSelection(a.lastCursorInDir(n)).withAriaQueueDirEndOf(n,a)}function Hx(e,t,r){switch(t.type){case"style-cmd":return oo(t)?mr(e,t):Dn(e,t,r);case"char":{if(r==="left"){let n=zx[t.latex];if(n){let a=t.containingSelection(),{root:o,inserted:i}=re(a,new he(n)),s=R(i.cursorOnSide("right"));return e.withRootAndSelection(o,s).withAriaQueueBareSelection(a)}}return mr(e,t)}case"ans":case"token":case"percentof":return mr(e,t);case"binom":case"frac":case"summation":return oo(t)?mr(e,t):Dn(e,t,r);case"matrix":return Dn(e,t,r);case"sqrt":{if(oo(t))return mr(e,t);if(r==="right"&&!t.index){let n=t.containingSelection(),{root:a,insertedSelection:o}=X(n,t.radicand.children);return e.withRootAndSelection(a,R(o.left)).withAriaQueueBareSelection(n)}return Dn(e,t,r)}case"brackets":return np(e,t,ee(r),!1);case"string":return rp(e,t,ee(r),!1);case"supsub":{if(e.config.autoSubscriptNumerals&&t.sub!==void 0){let n=t.sub,a=n.lastChildInDir(ee(r)),o=t;if(a!==void 0)if(hu(a)){let{root:s,insertedSelection:c}=X(a.containingSelection(),[]);o=c.group.parent();let g=o.cursorOnSide(ee(r));e=e.withRootAndSelection(s,R(g)).withAriaQueueNode(a)}else e=e.withPointSelection(n.lastCursorInDir(ee(r))),e=io(e,r),o=e.selection.group.parent();else e=e.withAriaQueueItem(e.s("mq-narration-empty-subscript-was-deleted"));let i=o;if(i.sub===void 0)return e;if(i.sub.children.length===0)if(i.sup){let s=new ke({sub:void 0,sup:i.sup}),{root:c,insertedSelection:g}=X(o.containingSelection(),[s]),h=ge(g,ee(r));return e.withRootAndSelection(c,R(h))}else{let{root:s,insertedSelection:c}=X(o.containingSelection(),[]);return e.withRootAndSelection(s,c)}else return e}return oo(t)?mr(e,t):Dn(e,t,r)}case"text-char":{let n=t.containingGraphemeClusterSelection();return tp(e,n)}default:throw new Error(`Invalid node: ${t.type}`)}}function Vx(e,t,r){var o,i;let n=t.parent();if(n===void 0)return e;let a=t.getIndex();switch(n.type){case"binom":case"frac":{let s=Rr(n,a),{root:c,insertedSelections:g}=nr(n.containingSelection(),[n.num.children,n.den.children]),h=s==="num"?g[0]:g[1],y=ge(h,r),w=e.s(n.type==="frac"?"mq-narration-over":"mq-narration-choose");return e.withRootAndSelection(c,R(y)).withAriaQueueItem(w)}case"style-cmd":{let{root:s,insertedSelection:c}=X(n.containingSelection(),n.arg.children),g=ge(c,r),h=as(n,e.getMathspeakOptions());return e.withRootAndSelection(s,R(g)).withAriaQueueItem(h)}case"sqrt":{let s=wn(n,a),{root:c,insertedSelections:[g,h]}=nr(n.containingSelection(),[(i=(o=n.index)==null?void 0:o.children)!=null?i:[],n.radicand.children]),w=ge(s==="index"?g:h,r);return e.withRootAndSelection(c,R(w)).withAriaQueueItem(e.s("mq-narration-start-root")+",")}case"summation":{let s=sr(n,a),{root:c,insertedSelections:[g,h]}=nr(n.containingSelection(),[n.sub.children,n.sup.children]),w=ge(s==="sub"?g:h,r),k=e.s(vd[n.kind]);return e.withRootAndSelection(c,R(w)).withAriaQueueItem(k)}case"brackets":return np(e,n,r,!0);case"string":return rp(e,n,r,!0);case"supsub":{let s=sr(n,a);if(s==="sup")if(n.sub){let c=new ke({sub:n.sub,sup:void 0}),{root:g,insertedSelections:[h,y]}=nr(n.containingSelection(),[[c],n.sup.children]),w=ge(y,r);return e.withRootAndSelection(g,R(w)).withAriaQueueItem(e.s("mq-narration-superscript"))}else{let{root:c,insertedSelection:g}=X(n.containingSelection(),n.sup.children),h=ge(g,r);return e.withRootAndSelection(c,R(h)).withAriaQueueItem(e.s("mq-narration-superscript"))}else if(n.sup){let c=new ke({sub:void 0,sup:n.sup}),{root:g,insertedSelections:[h,y]}=nr(n.containingSelection(),[n.sub.children,[c]]),w=ge(h,r);return e.withRootAndSelection(g,R(w)).withAriaQueueItem(e.s("mq-narration-subscript"))}else{let{root:c,insertedSelection:g}=X(n.containingSelection(),n.sub.children),h=ge(g,r);return e.withRootAndSelection(c,R(h)).withAriaQueueItem(e.s("mq-narration-subscript"))}}case"matrix":{let s=bs(n,t,r);return s?hr(e,s):t.children.length===0?mr(e,n):Et(e,n,r)}default:throw new Error(`Invalid node: ${n.type}`)}}function rp(e,t,r,n){let a=r==="left"?e.s("mq-narration-start-string"):e.s("mq-narration-end-string");if(n&&t.body.children.length===0){let{root:g,insertedSelection:h}=X(t.containingSelection(),[]);return e.withRootAndSelection(g,h).withAriaQueueNode(t)}let o=n?r==="right":r==="left";if(t.ghostSide===r||o){let g=Jd(t,r,n);return e.withPointSelection(g).withAriaQueueItem(a)}let{root:i,inserted:s}=re(t.containingSelection(),zt(t,r)),c=Jd(s,r,n);return e.withRootAndSelection(i,R(c)).withAriaQueueItem(a)}function Jd(e,t,r){return r?e.cursorOnSide(t):e.body.lastCursorInDir(t)}function np(e,t,r,n){var i;let a=ee(r),o=Wa(t,r,e.getMathspeakOptions());if(t.ghostSide===a){let{root:s,insertedSelection:c}=qa(t),g=ge(c,r);return e.withRootAndSelection(s,R(g)).withAriaQueueItem(o)}{let s=t.middle.lastChildInDir(a);if((s==null?void 0:s.type)==="brackets"&&s.ghostSide===a&&os(e.config,t,s,r)){let{inserted:c}=re(s.containingSelection(),ja(s,t,a)),g=c.parent().parent();if(g.type!=="brackets")throw new Error("Programming Error: Incorrect mapping");let{root:h,insertedSelection:y}=qa(g),w=ge(y,r);return e.withRootAndSelection(h,R(w)).withAriaQueueItem(o)}}{let s=(i=t.parent())==null?void 0:i.parent();if((s==null?void 0:s.type)==="brackets"&&s.ghostSide===a&&os(e.config,s,t,a)){let c=s.middle,g=He(fe(c.lastCursorInDir(a),t.cursorOnSide(a))),h=t.middle.children,y=He(fe(t.cursorOnSide(r),c.lastCursorInDir(r)));if(r==="right"){let w=vn(ja(t,s,"right"),U(h.concat(y))),{root:k,insertedSelection:_}=X(s.containingSelection(),g.concat(w)),I;if(n&&y.length===0)I=_.right;else{let S=_.right.nodeBefore();if(S!==w)throw new Error("Programming Error: mapping not tracked correctly.");let L=S.middle;I=new ie(L,h.length)}return e.withRootAndSelection(k,R(I)).withAriaQueueItem(o)}else{let w=vn(ja(t,s,"left"),U(y.concat(h))),{root:k,insertedSelection:_}=X(s.containingSelection(),[w].concat(g)),I;if(n&&y.length===0)I=_.left;else{let S=_.left.nodeAfter();if(S!==w)throw new Error("Programming Error: mapping not tracked correctly.");let L=S.middle;I=new ie(L,y.length)}return e.withRootAndSelection(k,R(I)).withAriaQueueItem(o)}}}if(n&&t.ghostSide===void 0){let{root:s,insertedSelection:c}=qa(t),g=ge(c,r);return e.withRootAndSelection(s,R(g)).withAriaQueueItem(o)}{let s=t.middle.children,c=t.parent().lastCursorInDir(r),g=He(fe(t.cursorOnSide(r),c)),h=fe(t.cursorOnSide(ee(r)),c);if(r==="right"){let y=Ur[t.leftLatex],w=Ur[t.leftSymbol];if(y===void 0||w===void 0)throw new Error("Programming error: Bracket not included in OPP_BRACKS");let k=new Ve({leftLatex:t.leftLatex,leftSymbol:t.leftSymbol,rightLatex:y,rightSymbol:w,ghostSide:"right",middle:U(s.concat(g))}),{root:_,inserted:I}=re(h,k),S;return n&&g.length===0?S=I.cursorOnSide("right"):S=new ie(I.middle,s.length),e.withRootAndSelection(_,R(S)).withAriaQueueItem(o)}else{let y=Ur[t.rightLatex],w=Ur[t.rightSymbol];if(y===void 0||w===void 0)throw new Error("Programming error: Bracket not included in OPP_BRACKS");let k=new Ve({leftLatex:y,leftSymbol:w,rightLatex:t.rightLatex,rightSymbol:t.rightSymbol,ghostSide:"left",middle:U(g.concat(s))}),{root:_,inserted:I}=re(h,k),S;return n&&g.length===0?S=I.cursorOnSide("left"):S=new ie(I.middle,g.length),e.withRootAndSelection(_,R(S)).withAriaQueueItem(o)}}}function so(e,t,r){return e.withSelection(bn(t,r)).withAriaQueueItem(ys(e,t))}function ys(e,t){return e.s("mq-narration-matrix-pull-handle",{rows:t.getNumRows(),columns:t.getNumCols()})}var Kx=1.2,Wx=1.3;function op(e){return e=Qx(e),e=jx(e),e}function Qx(e){let t=At(e);if(!t)return e;let r=et(e.selection);return!r||!t.eq(r)?Pn(e,t,()=>t.withResizingDone()):e}function jx(e){let t=et(e.selection);return t?t.isBeingResized()?e:Pn(e,t,()=>t.withResizingStarted()):e}function Pn(e,t,r){return e.withSplicedMqTree(t.containingSelection(),()=>[r()])}function At(e){for(let t of rr(e.root))if(t.type==="matrix"&&t.isBeingResized())return t}function Yx(e,t){for(let r=t.length;r>=0;r--)if(t[r]<e)return r;return 0}function ap(e,t,r){let n=t[t.length-1];return e<n?1+Yx(e,t):t.length+Math.floor((e-n)/r)}function Xx(e,t,r,n,a,o){let i=t.boundingClientRect(),s=t.getDomNode();if(!s||!i)throw new Error("Resizing before rendered");let c=parseFloat(getComputedStyle(s).fontSize),g=ap(n-o.clientX,r.colThresholds,Kx*c),h=ap(a-o.clientY,r.rowThresholds,Wx*c);return _n({numCols:g,numRows:h},e,r.originalMatrix.getDimensions())}function _n({numCols:e,numRows:t},r,n){let a=r.maxResizingMatrixSize;return{numCols:Math.max(1,Math.min(e,Math.max(a,n.numCols))),numRows:Math.max(1,Math.min(t,Math.max(a,n.numRows)))}}function ip(e,t,r,n){let a=At(e);if(!a||!a.resizingInfo)return e;let o=a.resizingInfo.colThresholds;(!o||a.getNumCols()>o.length)&&(o=Jx(a));let i=a.resizingInfo.rowThresholds;(!i||a.getNumRows()>i.length)&&(i=ev(a));let s={colThresholds:o,rowThresholds:i,originalMatrix:a.resizingInfo.originalMatrix},c=Xx(e.config,a,s,t,r,n);return lp(e,a,s,c)}function sp(e,t,r){let n=At(e);if(!n||!n.resizingInfo)return e;let{numCols:a,numRows:o}=n.getDimensions(),i=n.resizingInfo,s=_n({numCols:a+t,numRows:o+r},e.config,i.originalMatrix.getDimensions());return e=lp(e,n,i,s),e.selection.matrixPullHandleType==="mouse"&&(e=e.withSelection(wa(e.selection))),e}function lp(e,t,r,n){return Ta(t.getDimensions(),n)?e:(e=Pn(e,t,()=>xs(t,r,n)),lo(e,n))}function lo(e,{numCols:t,numRows:r}){return e.withAriaQueueItem(e.s("mq-narration-matrix-new-dimensions",{rows:r,columns:t}))}function xs(e,t,{numCols:r,numRows:n}){var i,s;let a=Array(r*n);for(let c=0;c<n;c++)for(let g=0;g<r;g++)a[c*r+g]=(s=(i=t==null?void 0:t.originalMatrix.getChildAt(g,c))!=null?i:e.getChildAt(g,c))!=null?s:U([]);let o=new ct({children:a,numCols:r,resizingInfo:t});return Zx(e,o),o}function Zx(e,t){let{numCols:r,numRows:n}=t.getDimensions(),{numCols:a,numRows:o}=e.getDimensions();if(!(r>=a&&n>=o))for(let i=0;i<o;i++)for(let s=0;s<a;s++){if(s<r&&i<n)continue;let c=e.getChildAt(s,i);for(let g of lu(c)){let h=Ii(g).type;switch(h){case"upDown":break;case"anchor":{let y=Nn(t,{x:s,y:i});$t(y,g,0);break}case"head":{let y=Nn(t,{x:s,y:i});$t(y,g,y.numChildren());break}default:}}}}function Nn(e,{x:t,y:r}){let{numCols:n,numRows:a}=e.getDimensions();return t=Math.max(0,Math.min(n-1,t)),r=Math.max(0,Math.min(a-1,r)),e.getChildAt(t,r)}function Jx(e){let t=e.getNumCols(),r=e.boundingClientRect();if(!r)throw new Error("Resizing before rendered");let n=Array(t);for(let a=0;a<t;a++){let i=e.getChildAt(a,0).boundingClientRect();if(!i)throw new Error("Resizing before rendered");n[a]=(i.left+i.right)/2-r.left}return n}function ev(e){let t=e.getNumRows(),r=Array(t),n=e.boundingClientRect();if(!n)throw new Error("Resizing before rendered");for(let a=0;a<t;a++){let i=e.getChildAt(0,a).boundingClientRect();if(!i)throw new Error("Resizing before rendered");r[a]=(i.top+i.bottom)/2-n.top}return r}function cp(e,t,r){let n=vs(e,t,r);return n?n.type==="matrix"?rv(e,n.matrix,n.cursorPos,t,r):nv(e,n.brackets,t,r):e}function vs(e,t,r){for(let{group:n,parent:a}of Pi(e.selection)){if(a.type==="matrix")return{type:"matrix",matrix:a,cursorPos:a.getPosOfChild(n)};if(a.type==="brackets"&&a.leftSymbol==="["&&a.rightSymbol==="]")return(t>0||r>0)&&e.config.matrices&&!tv(a.middle)?{type:"convert-list",brackets:a}:void 0}}function tv(e){return e.children.some(t=>t.type==="char"&&t.latex===",")}function rv(e,t,r,n,a){let o=t.getDimensions(),i=_n({numCols:o.numCols+n,numRows:o.numRows+a},e.config,o);if(Ta(i,o))return e.withAriaQueueItem(e.s("mq-narration-matrix-invalid-resize",{maxSize:e.config.maxResizingMatrixSize}));let s;if(e=Pn(e,t,()=>(s=xs(t,void 0,i),s)),!s)throw new Error("Programming Error: matrix not created");let{numCols:c,numRows:g}=i;if(c>o.numCols||g>o.numRows){let h=c>o.numCols?c-1:r.x,y=g>o.numRows?g-1:r.y;e=e.withPointSelection(Nn(s,{x:h,y}).firstCursor())}else(r.x>=c||r.y>=g)&&(e=e.withPointSelection(Nn(s,r).lastCursor()));return lo(e,i)}function nv(e,t,r,n){let{numCols:a,numRows:o}=_n({numCols:1+r,numRows:1+n},e.config,{numCols:1,numRows:1});if(a<=1&&o<=1)return e;let i=[t.middle];for(;i.length<a*o;)i.push(U([]));let s=new ct({children:i,numCols:a}),{root:c}=re(t.containingSelection(),s);return e=e.withRootAndSelection(c,R(s.getChildAt(a-1,o-1).firstCursor())),lo(e,{numCols:a,numRows:o})}function Hr(e,t){let{selection:r}=e,n=r.head.nodeInDirection(t);return n?av(e,n,t):ov(e,r.group,t)}function av(e,t,r){let{selection:n}=e,{anchor:a,group:o}=n,i=t.containingSelection(),s=ge(i,r),c=fe(a,s);if(!c)throw new Error("Programming Error: head group did not change, so `makeSelection` should succeed.");if(n.left.eq(c.left)&&n.right.eq(c.right)){let h=o.depth()+2;if(h>a.group.depth())throw new Error("Programming Error: Selection flip despite not being in a bigger group.");let y=a.group.ancestorAtDepth(h);if(y.type!=="group")throw new Error("Programming Error: Violated invariant of alternative group and non-group.");let w=y.lastCursorInDir(ee(r)),k=fe(a,w);if(!k)throw new Error("Programming Error: head group is an ancestor of the anchor group, so `makeSelection` should succeed.");return k}else return c}function ov(e,t,r){let n=t.parent();if(!n)return e.selection;let a=n.cursorOnSide(r),o=fe(e.selection.anchor,a);if(!o)throw new Error("Programming Error: head group is an ancestor of the anchor group, so `makeSelection` should succeed.");return o}function co(e,t){return e.head.nodeInDirection(t)!==void 0}function up(e,t){let r=t==="up"?"left":"right";if(co(e.selection,r))do e=e.withSelection(Hr(e,r));while(co(e.selection,r));else e=e.withSelection(Hr(e,r));return e}function dp(e,t){for(;co(e.selection,t);)e=e.withSelection(Hr(e,t));return e}function pp(e,t){for(;e.selection.group.depth()>0||co(e.selection,t);)e=e.withSelection(Hr(e,t));return e}function uo(e){let t=e.root,r=t.firstCursor(),n=t.lastCursor(),a=fe(n,r);if(!a)throw new Error("Programming Error: selection-all selection should always be valid.");return e.withSelection(a)}function gp(e,t){return((n,a)=>e(n,a,t))}var Ln={selections:[],dir:"right"},po=class e{constructor(t,r,n,a,o,i,s,c){this.ariaLabel="";this.ariaPostLabel="";this.ariaQueue=[];if(this.root=t,ru(r),this.selection=r,this.config=n,this.mouseDownState=a,this.ariaLabel=o,this.ariaPostLabel=i,this.ariaQueue=s,this.tabHistory=c,this.s=gp(this.config.localize,this.config.language),r.group.getRoot()!==t)throw new Error("Programming Error: selection must be inside root");fd(t,this.config)}static empty(){let t=U([]),r=R(t.lastCursor());return new e(t,r,Ud(),{type:"none"},"","",[],Ln)}withConfig(t){return zr(Br(t,ds),Br(this.config,ds))||iv(this.root),new e(this.root,this.selection,t,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withRootAndSelection(t,r){return new e(t,r,this.config,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withSelection(t){return new e(this.root,t,this.config,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withTabHistory(t){return new e(this.root,this.selection,this.config,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,t)}withPointSelection(t){let r=R(t);return this.withSelection(r)}withMouseDownState(t){return new e(this.root,this.selection,this.config,t,this.ariaLabel,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withAriaLabel(t){return new e(this.root,this.selection,this.config,this.mouseDownState,t,this.ariaPostLabel,this.ariaQueue,this.tabHistory)}withAriaPostLabel(t){return new e(this.root,this.selection,this.config,this.mouseDownState,this.ariaLabel,t,this.ariaQueue,this.tabHistory)}withAriaQueue(t){return new e(this.root,this.selection,this.config,this.mouseDownState,this.ariaLabel,this.ariaPostLabel,t,this.tabHistory)}withAriaQueueItem(t){return this.withAriaQueue(this.ariaQueue.concat(t))}withAriaQueueSelection(t){let r=bd(t,this.getMathspeakOptions());return this.withAriaQueueItem(r)}withAriaQueueBareSelection(t,{speakSpace:r=!1}={}){let n=rs(t,this.getMathspeakOptions({speakSpace:r}));return this.withAriaQueueItem(n)}withAriaQueueNode(t,{shouldDescribe:r=!1,speakSpace:n=!1,ignoreShorthand:a=!1}={}){let o=at(t,this.getMathspeakOptions({ignoreShorthand:a,speakSpace:n}));return r&&t.type==="group"&&(o=hp(this,t)+" "+o),this.withAriaQueueItem(o)}withAriaQueueDirOf(t,r){let n=at(r,this.getMathspeakOptions({ignoreShorthand:!0}));return this.withAriaQueueItem(this.s(t==="left"?"mq-narration-before":"mq-narration-after",{expr:n}))}withAriaQueueDirEndOf(t,r){let n=hp(this,r)+" "+at(r,this.getMathspeakOptions());return this.withAriaQueueItem(this.s(t==="left"?"mq-narration-beginning-of":"mq-narration-end-of",{expr:n}))}withSplicedMqTree(t,r){return ou(this,t,r)}markAfterRender(){this.ariaQueue=[],this.domToMqNode=new Map;for(let t of ze(this.root))if(t.mutable_domNode&&this.domToMqNode.set(t.mutable_domNode,t),t.mutable_domChildren)for(let r=0;r<t.mutable_domChildren.length;r++){let n=t.mutable_domChildren[r],a=t.nthChild(r);if(!a)throw Eu(t,t===this.root,r);this.domToMqNode.set(n,a)}}getRawAriaLabel(){return this.ariaLabel}getAriaLabel(){return!this.ariaLabel&&!this.config.static?this.s("mq-narration-math-input"):this.ariaLabel}getAriaPostLabel(){return this.ariaPostLabel}getMathspeakOptions(t){var r,n;return{ignoreShorthand:(r=t==null?void 0:t.ignoreShorthand)!=null?r:!1,autoOperatorNames:this.config.autoOperatorNames,speakSpace:(n=t==null?void 0:t.speakSpace)!=null?n:!1,localize:this.s,language:this.config.language,maxResizingMatrixSize:this.config.maxResizingMatrixSize,static:this.config.static}}};function iv(e){for(let t of ze(e))cu(t)}function hp(e,t){let r=t.parent();return r?Cd(r,t.getIndex(),e.getMathspeakOptions()):e.getAriaLabel()}function ws(e,t){let r=e.selection.group;if(!r.eq(r.getRoot()))return fs(e,r,t)}function mp(e,t){let r=et(e.selection);if(r&&t==="left"){let s=r.getChildAt(r.getNumCols()-1,r.getNumRows()-1);if(s)return hr(e,s).withTabHistory(Ln)}let{selections:n,dir:a}=e.tabHistory,o=n.length;if(o>0&&t!==a){let s=wa(n[o-1]);return e=e.withSelection(s).withTabHistory({selections:n.slice(0,o-1),dir:a}),sv(e,t)}let i=lv(e,t);if(i)return i.withTabHistory({selections:n.concat(e.selection),dir:t})}function sv(e,t){let r=e.selection,n=et(r);if(n)return e.withAriaQueueItem(ys(e,n));if(r.anchor.eq(r.head)){let a=r.head.nodeInDirection(ee(t));return a?e.withAriaQueueDirOf(t,a):e.withAriaQueueDirEndOf(ee(t),r.group)}else return e.withAriaQueueSelection(r)}function lv(e,t){let r=et(e.selection);if(r)return Et(e,r,t);let n=e.selection.group.parent();if((n==null?void 0:n.type)==="matrix"){let a=e.selection.group.nextSiblingInDir(t);return a?hr(e,a):t==="right"?so(e,n,"keyboard"):Et(e,n,t)}else return ws(e,t)}function bp(e){for(;;){let t=!1,r=e.selection;e:for(let n of ze(e.root)){let a=n.numChildren();for(let o=0;o<a-1;o++){let i=n.nthChild(o),s=n.nthChild(o+1);if(i.type==="supsub"&&s.type==="supsub"&&![r.left,r.right,r.anchor].some(c=>i.cursorOnSide("right").eq(c))&&!su(n,c=>c===o+1)){e=e.withSplicedMqTree(Ue(n,o,o+2),()=>[cv(i,s)]),t=!0;break e}}}if(!t)return e}}function cv(e,t){return new ke({sub:fp(e.sub,t.sub),sup:fp(e.sup,t.sup)})}function fp(e,t){var r;return e&&t?uu(e,t):(r=e!=null?e:t)!=null?r:void 0}function yp(e){switch(e.type){case"tick":case"focus":case"blur":case"set-config":case"api-set-latex":case"api-clear-selection":case"api-set-selection":case"mouse-down":case"mouse-move":case"mouse-up":case"set-aria-label":case"set-aria-post-label":return!0;default:return!1}}var Vr=class{constructor(){this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}register(t){let r="ID_"+this._lastID++;return this._callbacks[r]=t,r}unregister(t){this._callbacks[t]||Rn(!1,"Dispatcher.unregister(...): `%s` does not map to a registered callback.",t),delete this._callbacks[t]}waitFor(t){this._isDispatching||Rn(!1,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(let r=0;r<t.length;r++){let n=t[r];if(this._isPending[n]){this._isHandled[n]||Rn(!1,"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",n);continue}this._callbacks[n]||Rn(!1,"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",n),this._invokeCallback(n)}}dispatch(t){this._isDispatching&&Rn(!1,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this._startDispatching(t);try{for(let r in this._callbacks)this._isPending[r]||this._invokeCallback(r)}finally{this._stopDispatching()}}isDispatching(){return this._isDispatching}_invokeCallback(t){this._isPending[t]=!0,this._callbacks[t](this._pendingPayload),this._isHandled[t]=!0}_startDispatching(t){for(let r in this._callbacks)this._isPending[r]=!1,this._isHandled[r]=!1;this._pendingPayload=t,this._isDispatching=!0}_stopDispatching(){delete this._pendingPayload,this._isDispatching=!1}};function Rn(e,t,...r){if(!e){let n;if(t===void 0)n=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let a=0;n=new Error(t.replace(/%s/g,()=>r[a++])),n.name="Invariant Violation"}throw n.framesToPop=1,n}}var go=class{constructor(){this.nextSubscription=0;this.subscriptions=new Map;this.focusState="blurred";this.mostRecentAriaMessage="";this.showGrouping=!0;this._queuedCallbacks=[];this.model=po.empty(),this.dispatcher=new Vr,this.dispatcher.register(t=>{this.onAction(t)})}runAfterDispatch(t){this._queuedCallbacks.push(t)}rejectPaste(t){this.runAfterDispatch(()=>{var r,n;(n=(r=this.model.config).onPasteRejected)==null||n.call(r,t)})}dispatch(t){if(t.type==="focus"&&this.dispatcher.isDispatching()){this.runAfterDispatch(()=>{this.dispatch(t)});return}this.dispatcher.dispatch(t);let r;for(;r=this._queuedCallbacks.shift();)r()}onAction(t){let r=this.model;this.handleAction(t);let n=this.model.root!==r.root;if(this.getConfig().static||r.root.children.length===0?this.showGrouping=!0:n&&(this.showGrouping=!1,this.showGroupingTimeout!==void 0&&clearTimeout(this.showGroupingTimeout),this.showGroupingTimeout=setTimeout(()=>{this.showGroupingTimeout=void 0,this.dispatch({type:"show-grouping"})},1e3)),t.type!=="show-grouping"&&(t.type!=="arrow-up-down"&&iu(this.model.root),t.type!=="tab-dir"&&this.model.tabHistory.selections.length>0&&(this.model=this.model.withTabHistory(Ln))),this.model=Ed(this.model),this.model=bp(this.model),this.model=op(this.model),this.model.config.maxDepth!==void 0){let o=Gi(this.model.root);o>this.model.config.maxDepth&&this.lastDepth!==void 0&&o>this.lastDepth?(this.model=r,Hc(r.root),t.type==="write-latex"&&t.fromPaste&&this.rejectPaste("exceeds-max-depth")):this.lastDepth=o}this.isDragResizingMatrix()&&this.getMatrixBeingResized()===void 0&&(this.model=this.model.withMouseDownState({type:"mouse-down-selecting"})),this.updateViews()}subscribeToChanges(t){let r=this.nextSubscription;return this.nextSubscription+=1,this.subscriptions.set(r,t),()=>{this.subscriptions.delete(r)}}updateViews(){for(let t of this.subscriptions.values())t()}markAfterRender(){this.model.markAfterRender()}handleAction(t){var r,n,a;if(!(this.getConfig().static&&!yp(t)))switch(t.type){case"show-grouping":{this.showGrouping=!0;break}case"focus":this.focusState="focused",this.getConfig().static&&te(this.model.selection)&&(this.model=uo(this.model));break;case"blur":if(t.intentional){if(this.focusState="blurred",this.model.config.resetCursorOnBlur){let o=this.model.selection;this.model=this.model.withPointSelection(this.getRoot().lastCursor()),this.model.selectionBeforeBlur=o}this.model=is(this.model,"root")}else this.focusState="unintentional-blurred";break;case"tick":break;case"set-config":this.model=this.model.withConfig(t.config);break;case"api-set-latex":{this.lastDepth=void 0;let o=Mn(t.latex,this.model.config),i=o.lastCursor(),s=R(i);this.model=this.model.withRootAndSelection(o,s);break}case"api-clear-selection":{this.model=this.model.withPointSelection(this.getSelection().head);break}case"api-set-selection":{let{startIndex:o,endIndex:i,anchorIndex:s,headIndex:c,latex:g}=t.selection;if(lt(this.getRoot())!==g)return;let h,y;if(s!==void 0&&c!==void 0)h=fn(this.getRoot(),s),y=fn(this.getRoot(),c);else{if(o>i)return;h=fn(this.getRoot(),i),y=fn(this.getRoot(),o)}if(h===void 0||y===void 0)return;let w=fe(h,y);if(!w)return;this.model=this.model.withSelection(w);break}case"select-all":{this.model=uo(this.model);break}case"jump-to-field-end":case"jump-to-field-start":{let o=t.type==="jump-to-field-end"?"right":"left",i=this.getRoot(),s=i.lastCursorInDir(o),c=at(i,this.model.getMathspeakOptions()),g=Ka(this.model.getAriaLabel(),c,this.model.getAriaPostLabel()),h=this.model.s(o==="left"?"mq-narration-beginning-of":"mq-narration-end-of",{expr:g});this.model=this.model.withPointSelection(s).withAriaQueueItem(h);break}case"write-latex":{let o;if(Gt(this.getSelection().group)?o=hd(t.latex):o=Mn(t.latex,this.model.config),t.fromPaste){if(o.children.length===0&&t.latex.trim()!==""){this.rejectPaste("unrecognized-latex");break}if($i(o,this.model.config.maxResizingMatrixSize)){this.rejectPaste("matrix-too-large");break}}let{root:i,insertedSelection:s}=X(this.getSelection(),o.children),c=R(s.right);this.model=this.model.withRootAndSelection(i,c),t.fromPaste&&this.runAfterDispatch(()=>{this.model.config.onPaste&&this.model.config.onPaste()});break}case"delete-in-direction":{this.model=io(this.getModel(),t.direction);break}case"ctrl-delete-in-direction":{this.model=ep(this.getModel(),t.direction);break}case"cut-selected":{let{root:o,insertedSelection:i}=X(this.getSelection(),[]);this.model=this.model.withRootAndSelection(o,i),this.runAfterDispatch(()=>{this.model.config.onCut&&this.model.config.onCut()});break}case"arrow-left-right":this.model=Xd(this.model,t.dir);break;case"shift-left-right":{let o=Hr(this.model,t.dir);this.model=this.model.withSelection(o);break}case"arrow-up-down":{this.model=Yd(this.model,t.updown);break}case"shift-up-down":{this.model=up(this.model,t.updown);break}case"home-end":{let o=this.model.selection.group,i=o.lastCursorInDir(t.dir);this.model=this.model.withPointSelection(i).withAriaQueueDirEndOf(t.dir,o);break}case"shift-home-end":{this.model=dp(this.model,t.dir);break}case"ctrl-shift-home-end":{this.model=pp(this.model,t.dir);break}case"escape-dir":{let o=this.getMatrixAtCursor(),i=o?Et(this.model,o,t.direction):ws(this.model,t.direction);i!==void 0&&((r=t.evt)==null||r.preventDefault(),this.model=i);break}case"tab-dir":{let o=mp(this.model,t.direction);o&&((n=t.evt)==null||n.preventDefault(),this.model=o);break}case"mouse-down":{if((a=t.target)!=null&&a.closest(".dcg-mq-matrix__pull-handle")){let i=t.target.closest(".dcg-mq-matrix__container");if(!i)throw new Error("Missing matrix DOM");let s=ro(this.model,i);if(!s||s.type!=="matrix")throw new Error("Missing matrix");this.model=so(this.model,s,"mouse");let c=i.getBoundingClientRect();this.model=this.model.withMouseDownState({type:"mouse-down-resizing-matrix",originalMatrixTopLeft:{clientX:c.left,clientY:c.top}});return}let o=to(this.model,t.target,eo(t));this.model=this.model.withPointSelection(o).withMouseDownState({type:"mouse-down-selecting"});break}case"mouse-move":{if(this.model.mouseDownState.type==="mouse-down-resizing-matrix"){if(!At(this.model))return;let c=this.model.mouseDownState.originalMatrixTopLeft;this.model=ip(this.model,t.clientX,t.clientY,c),this.model=this.model.withMouseDownState({type:"mouse-down-resizing-matrix",originalMatrixTopLeft:c}),this.runAfterDispatch(()=>{var g,h;(h=(g=this.model.config).onMatrixResize)==null||h.call(g)});return}let o=to(this.model,t.target,eo(t));this.model.config.resetCursorOnBlur&&this.getFocusState()!=="focused"&&this.model.selectionBeforeBlur&&(this.model=this.model.withSelection(this.model.selectionBeforeBlur));let i=ka(this.model.selection.anchor,o);this.model=this.model.withSelection(i).withMouseDownState({type:"mouse-down-selecting"}),te(i)||(this.model=this.model.withAriaQueueSelection(i));break}case"mouse-up":{if(this.model=this.model.withMouseDownState({type:"none"}),At(this.model))return;te(this.model.selection)&&(this.getConfig().static?this.model=uo(this.model):this.model=this.model.withAriaQueueNode(this.model.selection.group));break}case"resize-matrix-by-arrow":{this.model=sp(this.model,t.dx,t.dy),this.runAfterDispatch(()=>{var o,i;(i=(o=this.model.config).onMatrixResize)==null||i.call(o)});break}case"resize-matrix-at-cursor":{this.model=cp(this.model,t.dx,t.dy),this.runAfterDispatch(()=>{var o,i;(i=(o=this.model.config).onMatrixResize)==null||i.call(o)});break}case"click-at":{let o=to(this.model,t.target,eo(t));this.model=this.model.withPointSelection(o);break}case"type-char":{this.model=Id(this.model,t.char);break}case"set-aria-label":this.model=this.model.withAriaLabel(t.label);break;case"set-aria-post-label":this.model=this.model.withAriaPostLabel(t.label),this.ariaAlertTimeout!==void 0&&clearTimeout(this.ariaAlertTimeout),t.label!==""&&t.timeout!==void 0&&(this.ariaAlertTimeout=setTimeout(()=>{this.dispatch({type:"speak-aria-post-after-timeout"})},t.timeout));break;case"speak-aria-post-after-timeout":this.getFocusState()==="focused"&&(this.model=this.model.withAriaQueueItem(at(this.getRoot(),this.model.getMathspeakOptions()).trim()+" "+this.model.getAriaPostLabel().trim()));break;case"speak-parent-block":{let o=this.model.selection.group.parent();if(o)this.model=this.model.withAriaQueueNode(o);else{let i=this.model.s("mq-narration-nothing-above");this.model=this.model.withAriaQueueItem(i)}break}case"speak-current-block":{let o=this.model.selection.group;if(o.numChildren()>0)this.model=this.model.withAriaQueueNode(o);else{let i=this.model.s("mq-narration-block-is-empty");this.model=this.model.withAriaQueueItem(i)}break}case"speak-block-dir":{let o=this.model.selection.group.parent(),i=o==null?void 0:o.nextSiblingInDir(t.dir);if(i)this.model=this.model.withAriaQueueNode(i);else if(t.dir==="right"){let s=this.model.s("mq-narration-nothing-to-the-right");this.model=this.model.withAriaQueueItem(s)}else{let s=this.model.s("mq-narration-nothing-to-the-left");this.model=this.model.withAriaQueueItem(s)}break}case"speak-selection":{this.model=this.model.withAriaQueueSelection(this.model.selection);break}case"speak-aria-post":{let o=this.model.getAriaPostLabel();if(o.length>0)this.model=this.model.withAriaQueueItem(o);else{let i=this.model.s("mq-narration-no-answer");this.model=this.model.withAriaQueueItem(i)}break}default:throw new Error(`Invalid action type: ${t.type}`)}}getLatexSelection(){return _i(this.getSelection())}domNodeToSpan(t){let r=ro(this.model,t);if(!r)return;let n=r.type==="group"?Ue(r,0,r.children.length):r.containingSelection();return _i(n)}debugGetCursorSelection(){return this.getSelection()}getSelection(){return this.model.selection}getRoot(){return this.model.root}isSelecting(){return this.model.mouseDownState.type==="mouse-down-selecting"}getFocusState(){return this.focusState}fakeFocus(){this.focusState="focused"}selectedLatex(){return nu(this.getSelection())}getLatex(){return lt(this.getRoot())}getModel(){return this.model}getConfig(){return this.model.config}getAriaLabel(){return this.model.getAriaLabel()}getAriaPostLabel(){return this.model.getAriaPostLabel()}setMostRecentAriaMessage(t){this.mostRecentAriaMessage=t}getMostRecentAriaMessage(){return this.mostRecentAriaMessage}getShowGrouping(){return this.showGrouping&&this.getConfig().enableDigitGrouping}getMatrixBeingResized(){return At(this.model)}getMatrixAtCursor(){var t,r;return(r=et(this.model.selection))!=null?r:(t=va(this.model.selection))==null?void 0:t.matrix}canResizeMatrixAtCursor(t,r){return vs(this.model,t,r)!==void 0}isDragResizingMatrix(){return this.model.mouseDownState.type==="mouse-down-resizing-matrix"}};function xp(e){return crypto.getRandomValues(new Uint8Array(e))}var vp=4096,ho=[],Ht=0,ks;for(;Ht<256;Ht++)ho[Ht]=(Ht+256).toString(16).substring(1);function mo(){(!ks||Ht+16>vp)&&(ks=xp(vp),Ht=0);for(var e=0,t,r="";e<16;e++)t=ks[Ht+e],e==6?r+=ho[t&15|64]:e==8?r+=ho[t&63|128]:r+=ho[t],e&1&&e>1&&e<11&&(r+="-");return Ht+=16,r}var qs;function kp(){return qs===void 0&&(qs=uv()),qs}function uv(){let e=document.createElement("span");e.style.display="inline-block";for(let n=0;n<9;n++)wp(e);let t=wp(e);document.body.appendChild(e);let r=e.getBoundingClientRect().right-t.getBoundingClientRect().right;return e.remove(),r>.05}function wp(e){let t=document.createElement("span");return t.style.display="inline-block",t.innerText="0",t.style.marginLeft="0.7px",e.appendChild(t),t}function qp(){}var Cs=class{constructor(){this.fn=qp}listen(t){this.fn=t,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(this.fn)}listenOnce(t){this.listen((...r)=>{this.clearListener(),t(...r)})}clearListener(){this.fn=qp,clearTimeout(this.timeoutId)}trigger(...t){this.fn(...t)}},dv={8:"Backspace",9:"Tab",10:"Enter",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Esc",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Del",144:"NumLock"},pv={ArrowRight:"Right",ArrowLeft:"Left",ArrowDown:"Down",ArrowUp:"Up",Delete:"Del",Escape:"Esc",UIKeyInputEscape:"Esc"," ":"Spacebar"};function Ss(e){switch(Mp(e)){case"Right":case"Left":case"Down":case"Up":return!0;default:return!1}}function gv(e){return e.length===1&&e>="a"&&e<="z"}function Mp(e){var t;if(e.key===void 0){let r=e.which||e.keyCode;return dv[r]||String.fromCharCode(r)}return gv(e.key)?e.key.toUpperCase():(t=pv[e.key])!=null?t:e.key}function Sp(e){let t=Mp(e),r=[];return e.ctrlKey&&r.push("Ctrl"),e.metaKey&&r.push("Meta"),e.altKey&&r.push("Alt"),e.shiftKey&&r.push("Shift"),r.length?(t!=="Alt"&&t!=="Control"&&t!=="Meta"&&t!=="Shift"&&r.push(t),r.join("-")):t}function Cp(e,t){for(let[r,n]of Object.entries(t)){let a=r;e.addEventListener(a,n)}}function Tp(e,t){let r=null,n=null,a=new Cs;function o(){try{e instanceof HTMLTextAreaElement&&e.select()}catch(S){}}function i(){return!("selectionStart"in e)||!(e instanceof HTMLTextAreaElement)?!1:e.selectionStart!==e.selectionEnd}function s(){t.keystroke(Sp(r),r)}function c(S){a.trigger(S),S.target===e&&(r=S,n=null,Ss(S)&&S.preventDefault(),s())}function g(S){a.trigger(S),S.target===e&&(r&&n&&s(),n=S,Ss(S)?a.listenOnce(w):a.listen(y))}function h(S){a.trigger(S),S.target===e&&r&&!n&&(Ss(S)?a.listenOnce(w):a.listen(y))}function y(){if(i()||!(e instanceof HTMLTextAreaElement))return;let S=e.value;r&&(r.key==="Unidentified"||!r.altKey&&r.ctrlKey&&!r.metaKey&&r.shiftKey&&(r.key==="U"||r.key==="Process"))||(S.length===1?(e.value="",t.typedText(S)):w())}function w(){e instanceof HTMLTextAreaElement&&e.value.length>1&&o()}function k(){r=null,n=null,a.clearListener(),e instanceof HTMLTextAreaElement&&(e.value="")}function _(S){var $,K,le;if(a.trigger(),S.target!==e)return;document.activeElement!==e&&e.focus(),S.preventDefault();let L=($=S.clipboardData)==null?void 0:$.getData("text/plain");!L||(le=(K=t.options).overridePaste)!=null&&le.call(K,S)||t.paste(L)}function I(S){a.trigger(S)}if(t.KIND_OF_MQ==="StaticMath"){Cp(e,{keydown:S=>{t.keystroke(Sp(S),S)}});return}Cp(e,{keydown:c,keypress:g,keyup:h,focusout:k,cut:function(S){var $,K;if(!S.clipboardData||((K=($=t.options).overrideCut)==null?void 0:K.call($,S)))return;let P=t.cut();S.clipboardData.setData("text/plain",P),S.clipboardData.setData("application/x-latex",P),S.preventDefault(),S.stopPropagation()},copy:function(S){var $,K;if(!S.clipboardData||((K=($=t.options).overrideCopy)==null?void 0:K.call($,S)))return;let P=t.copy();S.clipboardData.setData("text/plain",P),S.clipboardData.setData("application/x-latex",P),S.preventDefault()},paste:_,input:I})}function Ep(e,t){let r=Date.now(),n,a=0;function o(){let c=(Date.now()-r)/e;c<=a?s():a=c,t(a,s,i)}function i(){n!==void 0&&cancelAnimationFrame(n),n=void 0}function s(){i(),n=requestAnimationFrame(o)}t(e<=0?1:0,s,i)}function Ap(e){e.isScrolling=!1;let r=e.getRoot().getDomNode();if(!r)return;let n=r.getBoundingClientRect();if(!n)return;let a=hv(e,n,r);if(a===0||a<0&&r.scrollLeft===0||a>0&&r.scrollWidth<=r.scrollLeft+n.width)return;e.cancelScrollHoriz&&(e.cancelScrollHoriz(),e.cancelScrollHoriz=void 0),e.isScrolling=!0;let o=r.scrollLeft,i=e.getModel().config.scrollAnimationDuration;Ep(i,(s,c,g)=>{s>=1?(e.cancelScrollHoriz=void 0,e.isScrolling=!1,r.scrollLeft=Math.round(o+a)):(e.cancelScrollHoriz=g,c(),r.scrollLeft=Math.round(o+s*a)),Ms(e)})}function hv(e,t,r){let n=e.getModel(),a=e.getModel().selection;if(e.isSelecting()&&(a=R(a.head)),e.getFocusState()!=="focused")return-r.scrollLeft;let o=At(e.getModel()),i=o&&mv(t,o);if(i!==void 0)return i;if(te(a)){let s=hs(n);return s===void 0?0:Dp(t,s)}else return fv(t,a)}function mv(e,t){let r=t==null?void 0:t.getDomNode();if(r){for(let n of r.children)if(n.classList.contains("dcg-mq-matrix__pull-handle")){let o=n.getBoundingClientRect().right;return Dp(e,o)}}}function Dp(e,t){return t>e.right-20?t-(e.right-20):t<e.left+20?t-(e.left+20):0}function fv(e,t){var i,s,c,g;let r=(s=(i=t.left.nodeAfter())==null?void 0:i.boundingClientRect())==null?void 0:s.left,n=(g=(c=t.right.nodeBefore())==null?void 0:c.boundingClientRect())==null?void 0:g.right;if(r===void 0||n===void 0)return 0;let a=r-(e.left+20),o=n-(e.right-20);return t.head.eq(t.left)?a<0?a:o>0?r-o<e.left+20?a:o:0:o>0?o:a<0?n-a>e.right-20?o:a:0}function Ms(e){let r=e.getRoot().getDomNode();if(!r)return;let n=!1;e.getFocusState()==="focused"&&(n=r.scrollLeft>0),r.classList.toggle("dcg-mq-editing-overflow-left",n)}var fo=class{constructor(t,r,n){this.scrollHorizQueued=!1;this.firstMessageSent=!1;this.firstMessageTimeout=null;this.controller=t,this.rootElt=r,r.classList.add("dcg-mq-math-mode"),r.translate=!1,r.classList.add("notranslate"),r.childNodes.forEach(k=>k.remove());let a=this.handleMouseDown.bind(this);r.addEventListener("mousedown",a);let o=this.handlePointerDown.bind(this);r.addEventListener("pointerdown",o);let i=document.createElement("span");i.className="dcg-mq-aria-alert",i.ariaLive="assertive",i.ariaAtomic="true",this.ariaAlertElt=i;let s=document.createElement("span");s.className="dcg-mq-textarea",r.appendChild(s);let c=mo(),g=document.createElement("span");g.className="dcg-mq-mathspeak",g.id=c,g.setAttribute("aria-hidden","true"),this.mathspeakElt=g,s.appendChild(g);let h=document.createElement("textarea");h.inputMode="none",h.setAttribute("autocorrect","off"),h.setAttribute("aria-labelledby",c),h.autocapitalize="none",h.spellcheck=!1,h.autocomplete="off",s.appendChild(h),this.textarea=h,Tp(h,n),this.addFocusAndBlurListeners();let y=document.createElement("span"),w=kp()?" dcg-mq-has-spacing-bug":"";y.className="dcg-mq-root-block"+w,y.setAttribute("aria-hidden","true"),r.appendChild(y),this.rootBlock=y,this.updateAttributes(),this.renderer=new Ua(this.rootBlock)}updateAttributes(){this.updateTabIndex(),this.rootBlock.classList.toggle("dcg-mq-show-grouping",this.controller.getShowGrouping());let t=this.controller.getConfig();this.rootElt.classList.toggle("dcg-mq-editable-field",!t.static),t.needsSystemKeypad?this.textarea.removeAttribute("inputmode"):this.textarea.inputMode="none"}updateTabIndex(){let t=this.tabIndex();this.textarea.tabIndex=t;let r=this.controller.getConfig();t<0&&r.static?this.textarea.setAttribute("aria-hidden","true"):this.textarea.removeAttribute("aria-hidden"),t>=0?this.mathspeakElt.setAttribute("aria-hidden","true"):this.mathspeakElt.removeAttribute("aria-hidden")}tabIndex(){let t=this.controller.getConfig();return t.tabindex!==void 0?t.tabindex:t.static?-1:0}containerHasFocus(){return document.activeElement&&this.rootElt.contains(document.activeElement)}updateAriaView(){let t=this.controller.getModel();if(t.ariaQueue.length===0)return;let r=t.ariaQueue.join(" ").replace(/ +(?= )/g,"").trim();this.controller.setMostRecentAriaMessage(r),this.containerHasFocus()&&(t.config.logAriaAlerts&&r&&console.log(r),this.ariaAlertElt.parentNode!==this.rootElt&&this.rootElt.prepend(this.ariaAlertElt),this.firstMessageSent?this.ariaAlertElt.textContent=r:(this.firstMessageTimeout!==null&&clearTimeout(this.firstMessageTimeout),this.firstMessageTimeout=setTimeout(()=>{this.firstMessageSent=!0,this.firstMessageTimeout=null,this.ariaAlertElt.textContent=r},50)))}updateView(){let t=this.controller.getRoot(),r=this.controller.getFocusState(),n=this.controller.getModel();this.updateAttributes(),this.updateAriaView(),this.renderer.render(n,r),this.setTextareaSelection();let a=n.getAriaLabel();if(this.controller.getFocusState()!=="focused"){let s=at(n.root,n.getMathspeakOptions());this.mathspeakElt.textContent=Ka(a,s,n.getAriaPostLabel())}let o=t.children.length===0,i=this.controller.getFocusState()==="focused";this.rootElt.classList.toggle("dcg-mq-focused",i),this.rootBlock.classList.toggle("dcg-mq-hasCursor",i),this.rootBlock.classList.toggle("dcg-mq-empty",o&&!i),this.controller.markAfterRender(),this.scrollHorizQueued||(this.scrollHorizQueued=!0,this.controller.isScrolling=!0,requestAnimationFrame(()=>{this.scrollHorizQueued=!1,Ap(this.controller)})),Ms(this.controller),this.updateResizeCover()}updateResizeCover(){var t;if(this.controller.isDragResizingMatrix()){if(this.resizeCover)return;let r=document.createElement("div");r.className="dcg-mq-resize-cover",this.rootElt.appendChild(r),this.resizeCover=r}else(t=this.resizeCover)==null||t.remove(),this.resizeCover=void 0}setTextareaSelection(){if(document.activeElement!==this.textarea)return;let t=this.controller.getLatexSelection(),r=t.latex.slice(t.startIndex,t.endIndex);this.textarea.value=r,r!==""&&this.textarea.select()}focus(){this.textarea.focus()}blur(){this.textarea.blur()}handlePointerDown(t){if(!t.isPrimary||this.activePullHandlePointerId!==void 0||!(t.target instanceof Element))return;let r=t.target.closest(".dcg-mq-matrix__pull-handle");if(!r)return;t.preventDefault(),this.focus(),this.activePullHandlePointerId=t.pointerId;let n=this.rootElt.ownerDocument,a=i=>{i.pointerId===this.activePullHandlePointerId&&(this.controller.dispatch({type:"mouse-move",clientX:i.clientX,clientY:i.clientY,target:void 0}),this.textarea!==document.activeElement&&this.focus())},o=i=>{i.pointerId===this.activePullHandlePointerId&&(this.activePullHandlePointerId=void 0,n.removeEventListener("pointermove",a),n.removeEventListener("pointerup",o),n.removeEventListener("pointercancel",o),this.controller.dispatch({type:"mouse-up"}))};n.addEventListener("pointermove",a),n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),this.controller.dispatch({type:"mouse-down",target:r,clientX:t.clientX,clientY:t.clientY})}handleMouseDown(t){var h;if(t.target===null||(t.preventDefault(),t.target.closest(".dcg-mq-matrix__pull-handle")))return;let r=this.rootElt.ownerDocument,n=this.controller.getConfig().ignoreNextMousedown;if(n!=null&&n(t)||t.target.closest(".dcg-mq-ignore-mousedown"))return;this.focus();let a,o=this.controller.getConfig().askIfShouldIgnoreMousemove,i=y=>{var w;o!=null&&o(y,this.rootElt)||(a=(w=y.target)!=null?w:void 0)},s=y=>{o!=null&&o(y,this.rootElt)||(this.controller.dispatch({type:"mouse-move",clientX:y.clientX,clientY:y.clientY,target:a}),this.textarea!==document.activeElement&&this.focus(),a=void 0)},c=()=>{this.rootElt.removeEventListener("mousemove",i),r.removeEventListener("mousemove",s),r.removeEventListener("mouseup",g)},g=()=>{c(),this.controller.dispatch({type:"mouse-up"})};this.rootElt.addEventListener("mousemove",i),r.addEventListener("mousemove",s),r.addEventListener("mouseup",g),this.controller.dispatch({type:"mouse-down",target:(h=t.target)!=null?h:void 0,clientX:t.clientX,clientY:t.clientY})}addFocusAndBlurListeners(){this.textarea.addEventListener("focus",()=>{clearTimeout(this.blurTimeout),this.controller.dispatch({type:"focus"})}),this.textarea.addEventListener("blur",()=>{this.blurTimeout=setTimeout(()=>{this.controller.dispatch({type:"blur",intentional:document.hasFocus()})})})}};function Np(e){return e.__dcgMqApiInstance}function bv(e,t){e.__dcgMqApiInstance=t}function yv(e,t){return new In(e,{static:!0,...t})}function Pp(e,t){return new In(e,t)}var xv=Pp,In=class{constructor(t,r){let n=t.textContent;if(this.container=t,this.controller=new go,Np(t)!==void 0)throw new Error("MQ Error: cannot attach another API to the same element.");bv(t,this);let a={keystroke:(o,i)=>{let s=this.controller.getConfig();s.overrideKeystroke?s.overrideKeystroke(o,i):this._keystrokeSingle(o,i)},typedText:o=>{let i=this.controller.getConfig();i.overrideTypedText?i.overrideTypedText(o):this.typedText(o)},paste:o=>this._paste(o),cut:()=>this._cut(),copy:()=>this._copy(),options:{overridePaste:o=>{var i,s,c;return(c=(s=(i=this.controller.getConfig()).overridePaste)==null?void 0:s.call(i,o))!=null?c:!1},overrideCopy:o=>{var i,s,c;return(c=(s=(i=this.controller.getConfig()).overrideCopy)==null?void 0:s.call(i,o))!=null?c:!1},overrideCut:o=>{var i,s,c;return(c=(s=(i=this.controller.getConfig()).overrideCut)==null?void 0:s.call(i,o))!=null?c:!1}},KIND_OF_MQ:"MathField"};this.view=new fo(this.controller,t,a),this.config(r),this.view.updateAttributes(),this.controller.subscribeToChanges(()=>this.view.updateView()),n.trim()&&this.latex(n)}latex(t){return t!==void 0?(this.controller.dispatch({type:"api-set-latex",latex:t}),this):this.controller.getLatex()}mathspeak(){return at(this.controller.getRoot(),this.controller.getModel().getMathspeakOptions()).replace(/ {2,}/g," ")}selection(t){return t?(this.focus(),this.controller.dispatch({type:"api-set-selection",selection:t}),this):this.controller.getLatexSelection()}domNodeToSpan(t){return this.controller.domNodeToSpan(t)}clearSelection(){this.controller.dispatch({type:"api-clear-selection"})}select(){this.focus(),this.controller.dispatch({type:"select-all"})}write(t){return this.controller.dispatch({type:"write-latex",latex:t,fromPaste:!1}),this}keystroke(t,r){let n=t.replace(/^\s+|\s+$/g,"").split(/\s+/);for(let a=0;a<n.length;a+=1)this._keystrokeSingle(n[a],r);return this}_keystrokeSingle(t,r){switch(t){case"Left":case"Right":{r==null||r.preventDefault(),this.controller.getMatrixBeingResized()?this.controller.dispatch({type:"resize-matrix-by-arrow",dx:t==="Left"?-1:1,dy:0}):this.controller.dispatch({type:"arrow-left-right",dir:t==="Left"?"left":"right"});break}case"Up":case"Down":{r==null||r.preventDefault(),this.controller.getMatrixBeingResized()?this.controller.dispatch({type:"resize-matrix-by-arrow",dx:0,dy:t==="Up"?-1:1}):this.controller.dispatch({type:"arrow-up-down",updown:t==="Up"?"up":"down"});break}case"Meta-Shift-Left":case"Meta-Shift-Right":case"Meta-Shift-Up":case"Meta-Shift-Down":case"Ctrl-Shift-Left":case"Ctrl-Shift-Right":case"Ctrl-Shift-Up":case"Ctrl-Shift-Down":{let n=t.endsWith("-Left")?-1:t.endsWith("-Right")?1:0,a=t.endsWith("-Up")?-1:t.endsWith("-Down")?1:0;if(!this.controller.canResizeMatrixAtCursor(n,a))break;r==null||r.preventDefault(),r==null||r.stopPropagation(),this.controller.dispatch({type:"resize-matrix-at-cursor",dx:n,dy:a});break}case"Shift-Left":case"Shift-Right":r==null||r.preventDefault(),this.controller.dispatch({type:"shift-left-right",dir:t==="Shift-Left"?"left":"right"});break;case"Shift-Up":case"Shift-Down":r==null||r.preventDefault(),this.controller.dispatch({type:"shift-up-down",updown:t==="Shift-Up"?"up":"down"});break;case"Home":case"End":r==null||r.preventDefault(),this.controller.dispatch({type:"home-end",dir:t==="Home"?"left":"right"});break;case"Shift-Home":case"Shift-End":r==null||r.preventDefault(),this.controller.dispatch({type:"shift-home-end",dir:t==="Shift-Home"?"left":"right"});break;case"Ctrl-Shift-Home":case"Ctrl-Shift-End":r==null||r.preventDefault(),this.controller.dispatch({type:"ctrl-shift-home-end",dir:t==="Ctrl-Shift-Home"?"left":"right"});break;case"Backspace":case"Del":{r==null||r.preventDefault(),this.controller.dispatch({type:"delete-in-direction",direction:t==="Backspace"?"left":"right"});break}case"Ctrl-Backspace":case"Ctrl-Del":{r==null||r.preventDefault(),this.controller.dispatch({type:"ctrl-delete-in-direction",direction:t==="Ctrl-Backspace"?"left":"right"});break}case"Tab":case"Shift-Tab":{this.controller.dispatch({type:"tab-dir",direction:t==="Tab"?"right":"left",evt:r});break}case"Esc":case"Shift-Esc":{this.controller.dispatch({type:"escape-dir",direction:t==="Esc"?"right":"left",evt:r});break}case"Ctrl-A":case"Meta-A":r==null||r.preventDefault(),this.select();break;case"Ctrl-End":r==null||r.preventDefault(),this.moveToRightEnd();break;case"Ctrl-Home":r==null||r.preventDefault(),this.moveToLeftEnd();break;case"Ctrl-Alt-Left":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-block-dir",dir:"left"});break;case"Ctrl-Alt-Right":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-block-dir",dir:"right"});break;case"Ctrl-Alt-Up":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-parent-block"});break;case"Ctrl-Alt-Down":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-current-block"});break;case"Ctrl-Alt-Shift-Down":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-selection"});break;case"Ctrl-Alt-=":case"Ctrl-Alt-Shift-Right":r==null||r.preventDefault(),this.controller.dispatch({type:"speak-aria-post"});break}}moveToLeftEnd(){return this.controller.dispatch({type:"jump-to-field-start"}),this}moveToRightEnd(){return this.controller.dispatch({type:"jump-to-field-end"}),this}typedText(t){for(let r=0;r<t.length;r+=1)this._typedTextSingle(t.charAt(r));return this}_typedTextSingle(t){this.controller.dispatch({type:"type-char",char:t})}debugGetMostRecentAriaMessage(){return this.controller.getMostRecentAriaMessage()}debugGetCursorSelection(){return this.controller.debugGetCursorSelection()}debugGetRoot(){return this.controller.getRoot()}debugGetModel(){return this.controller.getModel()}focus(){return this.view.focus(),this}fakeFocus(){this.controller.fakeFocus()}blur(){return this.view.blur(),this}subscribeToChanges(t){return this.controller.subscribeToChanges(t)}config(t){let r=this.controller.getConfig(),n=ps(r,t);if(!zr(n,r))return this.controller.dispatch({type:"set-config",config:n}),this}ignoreNextMousedown(t){return this.config({ignoreNextMousedown:t}),this}getAriaLabel(){return this.controller.getAriaLabel()}setAriaLabel(t){return this.controller.getModel().getRawAriaLabel()!==t&&this.controller.dispatch({type:"set-aria-label",label:t}),this}getAriaPostLabel(){return this.controller.getAriaPostLabel()}setAriaPostLabel(t,r){return this.getAriaPostLabel()!==t&&this.controller.dispatch({type:"set-aria-post-label",label:t,timeout:r}),this}clickAt(t,r,n){return this.focus(),this.controller.dispatch({type:"click-at",clientX:t,clientY:r,target:n}),this}isUserSelecting(){return this.controller.isSelecting()}isResizingMatrix(){return this.controller.getMatrixBeingResized()!==void 0}isCursorInMatrix(){return this.controller.getMatrixAtCursor()!==void 0}isScrolling(){return this.controller.isScrolling}el(){return this.container}_paste(t){this.controller.dispatch({type:"write-latex",latex:t,fromPaste:!0})}_copy(){return this.controller.selectedLatex()}_cut(){let t=this.controller.selectedLatex();return this.controller.dispatch({type:"cut-selected"}),t}};function vv(e){Hd(e)}var Es=Ts,_p=!1;function wv(){_p||(Es.config({localize:fa,leftRightIntoCmdGoes:"up",sumStartsWithNEquals:!0,supSubsRequireOperand:!0,charsThatBreakOutOfSupSub:"+-=<>*",autoCommands:Ic({disallowAns:!0}),autoSubscriptNumerals:!0,restrictMismatchedBrackets:"none",typingPercentWritesPercentOf:!0,...Oc(),resetCursorOnBlur:!0,enableDigitGrouping:!0}),_p=!0)}wv();var kv=Object.assign(e=>Es.getApiInstanceForElement(e),Es);var Lp=!1;function Rp(){Lp=!0}function Ip(e){var r,n;if(!Lp)return;let t=["trackEvent",e.category,e.action,e.name,e.value];Be("testing")?(r=window.paqTest)==null||r.push(t):(window._paq=window._paq||[],(n=window._paq)==null||n.push(t))}function As(e){let r=/^\/([^\/?#]*)\/?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/.exec(e);return r==null?{page:void 0,subpage:void 0,params:void 0,hash:void 0}:{page:r[1],subpage:r[2],params:r[3],hash:r[4]}}var Ds=[{page:"testing",title:"Desmos | Testing"}],bo=class{constructor(t){this.dispatch=t,window.onpopstate=()=>{this.dispatch({type:"navigate",path:this.getCurrentURL()})},this.navigateToView(this.getCurrentURL())}getViewFromPage(t){for(let r=0;r<Ds.length;r++)if(Ds[r].page===t)return Ds[r]}getCurrentURL(){return window.location.pathname+window.location.search}navigateToView(t){let r=As(t),n=r.page;if(n===void 0){this.currentPage=void 0,this.currentSubpage=void 0,this.currentParams=void 0;return}this.currentPage=r.page,this.currentSubpage=r.subpage,this.currentParams=r.params;let a=this.getViewFromPage(n);if(!a)return;document.title=a.title;let o=t,i=this.getCurrentURL(),s=As(i);!r.params&&s.params&&(o+="?"+s.params),o!==this.getCurrentURL()&&window.history.pushState({},a.title,o)}};var Y={images:!1,folders:!1,notes:!1,links:!1},ae={links:!1,brailleExpressionDownload:!1},z={brailleExpressionDownload:!1,links:!1},Kr={...Y,defaultLogModeRegressions:!0},Wr={...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,decimalToFraction:!1,distributions:!1,actions:!1,tone:!1,recursion:!1},Se={...ae,qwertyKeyboard:!1,degreeMode:!0,decimalToFraction:!1,functionDefinition:!1},ut={...ae,qwertyKeyboard:!1,degreeMode:!0,functionDefinition:!1},Op={...Y,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,plotImplicits:!1,plotInequalities:!1,sliders:!1,forceLogModeRegressions:!0},Gp={...ae,degreeMode:!0,functionDefinition:!1,allowComplex:!1};var Ns={uid:"default",name:"Practice",graphingConfig:{...Y,restrictedFunctions:!0,degreeMode:!0,tone:!1},scientificConfig:ut,fourFunctionConfig:{...z,additionalFunctions:["sqrt","fraction"]},urlCode:"default",suppressWhenCombiningWithinEntity:!0},Ps=[Ns,{name:"ACT",urlCode:"digital-act",uid:"act",pdfUrl:"static-assets/assessment-pdfs/ACT_Desmos_Calculator.pdf",stateTestName:"ACT and PreACT",graphingConfig:{...Y,capExpressionSize:!0,clearIntoDegreeMode:!0,degreeMode:!0,restrictedFunctions:!0,forceEnableGeometryFunctions:!0}},{svgid:"01",uid:"us-al",name:"Alabama",urlCode:"alabama",pdfUrl:"static-assets/state-pdfs/AL_Desmos_Calculators.pdf",stateTestName:"ACAP Summative",stateTestWebsite:"https://www.alabamaachieves.org/assessment/acap/",scientificConfig:{...ae,degreeMode:!0,allowComplex:!1,functionDefinition:!1},fourFunctionConfig:{...z,decimalToFraction:!0,additionalFunctions:["sqrt","fraction"]}},{svgid:"02",uid:"us-ak",name:"Alaska",urlCode:"alaska",pdfUrl:"static-assets/state-pdfs/AK_Desmos_Calculators.pdf",stateTestName:"AK STAR",stateTestWebsite:"https://education.alaska.gov/assessments/akstar",graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,distributions:!1,allowComplex:!1,regressionTemplates:!1,recursion:!1},scientificConfig:{...Se,allowComplex:!1},fourFunctionConfig:z},{svgid:"04",name:"Arizona",urlCode:"arizona",pdfUrl:"static-assets/state-pdfs/AZ_Desmos_Calculators.pdf",uid:"us-az",stateTestName:"AASA, AzSCI",stateTestWebsite:"https://www.azed.gov/assessment/",fourFunctionConfig:z,scientificConfig:Se},{svgid:"05",name:"Arkansas",urlCode:"arkansas",pdfUrl:"static-assets/state-pdfs/AR_Desmos_Calculators.pdf",uid:"us-ar",stateTestName:"ATLAS 3-10",stateTestWebsite:"https://dese.ade.arkansas.gov/Offices/public-school-accountability/assessment/3-hs-atlas-content-assessments",graphingConfig:{...Y,actions:!1,degreeMode:!0,distributions:!1,qwertyKeyboard:!1,restrictedFunctions:!0,plotSingleVariableImplicitEquations:!1,pasteTableData:!1,brailleControls:!1,zoomFit:!1},scientificConfig:{...ae,qwertyKeyboard:!1,functionDefinition:!1}},{svgid:"06",name:"California",pdfUrl:"static-assets/state-pdfs/CA_Desmos_Calculators.pdf",urlCode:"california",uid:"us-ca",stateTestName:"CAASPP",stateTestWebsite:"https://www.caaspp-elpac.org/",fourFunctionConfig:{...z,additionalFunctions:["fraction"]},scientificConfig:Se,graphingConfig:Wr},{name:"College Board",urlCode:"collegeboard",uid:"collegeboard",pdfUrl:"static-assets/assessment-pdfs/CollegeBoard_Desmos_Calculator.pdf",stateTestName:"SAT Suite and AP Exams",fourFunctionConfig:z,scientificConfig:ae,graphingConfig:Kr},{svgid:"08",name:"Colorado",urlCode:"colorado",pdfUrl:"static-assets/state-pdfs/CO_Desmos_Calculators.pdf",uid:"us-co",stateTestName:"Colorado State SAT Assessment",graphingConfig:Kr,entityNameOverride:{graphing:"Colorado SAT"},stateTestWebsite:"https://www.cde.state.co.us/assessment/sat-psat"},{svgid:"09",name:"Connecticut",urlCode:"connecticut",pdfUrl:"static-assets/state-pdfs/CT_Desmos_Calculators.pdf",uid:"us-ct",stateTestName:"Connecticut Assessments",stateTestWebsite:"https://portal.ct.gov/SDE/Student-Assessment/Main-Assessment/Student-Assessment#:~:text=The%20Connecticut%20Summative%20Assessment%20system,for%20students%20in%20Grade%2011",fourFunctionConfig:{...z,additionalFunctions:["fraction"]},scientificConfig:Se,graphingConfig:{...Kr,defaultLogModeRegressions:!1,recursion:!1,zoomFit:!1,degreeMode:!0,clearIntoDegreeMode:!0,qwertyKeyboard:!1,actions:!1,plotSingleVariableImplicitEquations:!1,restrictedFunctions:!0,distributions:!1,tone:!1}},{svgid:"10",name:"Delaware",urlCode:"delaware",pdfUrl:"static-assets/state-pdfs/DE_Desmos_Calculators.pdf",uid:"us-de",stateTestName:"DeSSA",stateTestWebsite:"https://education.delaware.gov/educators/academic-support/standards-and-assessments/mathematics",fourFunctionConfig:{...z,additionalFunctions:["fraction"]},scientificConfig:Se},{svgid:"12",name:"Florida",urlCode:"florida",pdfUrl:"static-assets/state-pdfs/FL_Desmos_Calculators.pdf",uid:"us-fl",stateTestName:"FAST",stateTestWebsite:"https://flfast.org/",scientificConfig:{...ae,singleExpression:!0,restrictedEditing:!0,degreeMode:!0,decimalToFraction:!1},fourFunctionConfig:{...z,decimalToFraction:!1,settingsMenu:!1,singleExpression:!0,restrictedEditing:!0,additionalFunctions:["sqrt","percent"],brailleControls:!1}},{svgid:"13",name:"Georgia",urlCode:"georgia",pdfUrl:"static-assets/state-pdfs/GA_Desmos_Calculators.pdf",uid:"us-ga",stateTestName:"Georgia Milestones Assessment System",stateTestWebsite:"https://www.gadoe.org/Curriculum-Instruction-and-Assessment/Assessment/Pages/Georgia-Milestones-Assessment-System.aspx",fourFunctionConfig:z,scientificConfig:{...ut,allowComplex:!1},graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,distributions:!1,substitutions:!1,sliders:!1,logScales:!1,allowComplex:!1,recursion:!1}},{svgid:"15",name:"Hawaii",urlCode:"hawaii",pdfUrl:"static-assets/state-pdfs/HI_Desmos_Calculators.pdf",uid:"us-hi",stateTestName:"HSAP",stateTestWebsite:"https://alohahsap.org/",fourFunctionConfig:{...z,additionalFunctions:["fraction"]},scientificConfig:Se,graphingConfig:Wr},{svgid:"16",name:"Idaho",urlCode:"idaho",pdfUrl:"static-assets/state-pdfs/ID_Desmos_Calculators.pdf",uid:"us-id",stateTestName:"ISAT",stateTestWebsite:"https://www.sde.idaho.gov/about-us/departments/assessment-accountability/idaho-standards-achievement-test-isat/",fourFunctionConfig:{...z,additionalFunctions:["fraction"]},scientificConfig:Se,graphingConfig:Wr},{svgid:"17",name:"Illinois",urlCode:"illinois",pdfUrl:"static-assets/state-pdfs/IL_Desmos_Calculators.pdf",entityNameOverride:{graphing:"Illinois ACT"},uid:"us-il",stateTestName:"ACT Illinois State Assessment",stateTestWebsite:"https://www.isbe.net/Pages/HS-Assessment.aspx",graphingConfig:{...Y,capExpressionSize:!0,clearIntoDegreeMode:!0,degreeMode:!0,restrictedFunctions:!0,forceEnableGeometryFunctions:!0}},{svgid:"18",name:"Indiana",urlCode:"indiana",pdfUrl:"static-assets/state-pdfs/IN_Desmos_Calculators.pdf",uid:"us-in",stateTestName:"Indiana Assessments",stateTestWebsite:"https://www.in.gov/doe/students/assessment/",fourFunctionConfig:{...z,additionalFunctions:["fraction"],brailleControls:!1},scientificConfig:{...ae,decimalToFraction:!1,qwertyKeyboard:!1,functionDefinition:!1,degreeMode:!0,brailleControls:!1}},{name:"International Baccalaureate",pdfUrl:"static-assets/assessment-pdfs/IBMYP_Desmos_Calculator.pdf",urlCode:"ibmyp",uid:"ib",assessmentHash:"ib",stateTestName:"IB MYP",scientificConfig:{...ae,functionDefinition:!1,qwertyKeyboard:!1,decimalToFraction:!1,degreeMode:!0,typingAsteriskWritesTimesSymbol:!0,replaceCommaWith10Exp:!0,replaceRoundWithReciprocal:!0}},{svgid:"19",name:"Iowa",urlCode:"iowa",pdfUrl:"static-assets/state-pdfs/IA_Desmos_Calculators.pdf",uid:"us-ia",stateTestName:"ISASP",stateTestWebsite:"https://ia.mypearsonsupport.com/",fourFunctionConfig:{...z,additionalFunctions:["sqrt","percent"]},scientificConfig:{...ae,functionDefinition:!1,degreeMode:!0,decimalToFraction:!1}},{svgid:"20",name:"Kansas",urlCode:"kansas",pdfUrl:"static-assets/state-pdfs/KS_Desmos_Calculators.pdf",uid:"us-ks",stateTestName:"KAP",stateTestWebsite:"https://ksassessments.org/",fourFunctionConfig:{...z,disableParentheses:!0,additionalFunctions:["sqrt","percent"],decimalToFraction:!1},scientificConfig:{...ae,degreeMode:!0,decimalToFraction:!1},graphingConfig:{...Y,pointsOfInterest:!1,decimalToFraction:!1,tone:!1,degreeMode:!0,restrictedFunctions:!0}},{svgid:"21",name:"Kentucky",urlCode:"kentucky",pdfUrl:"static-assets/state-pdfs/KY_Desmos_Calculators.pdf",uid:"us-ky",stateTestName:"Kentucky Assessments",stateTestWebsite:"https://education.ky.gov/AA/Assessments/Pages/default.aspx",fourFunctionConfig:z,scientificConfig:Se,graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,forceEnableGeometryFunctions:!0}},{svgid:"22",name:"Louisiana",urlCode:"louisiana",pdfUrl:"static-assets/state-pdfs/LA_Desmos_Calculators.pdf",uid:"us-la",stateTestName:"LEAP",stateTestWebsite:"https://doe.louisiana.gov/school-system-leaders/measuring-results",graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,distributions:!1,substitutions:!1,sliders:!1,actions:!1,logScales:!1,tone:!1,allowComplex:!1,recursion:!1}},{svgid:"23",name:"Maine",urlCode:"maine",pdfUrl:"static-assets/state-pdfs/ME_Desmos_Calculators.pdf",uid:"us-me",stateTestName:"Maine Through Year Assessment",stateTestWebsite:"https://www.maine.gov/doe/Testing_Accountability/MECAS/NWEA",graphingConfig:{tone:!1,logScales:!1,links:!1},scientificConfig:Se,fourFunctionConfig:z},{svgid:"24",name:"Maryland",urlCode:"maryland",pdfUrl:"static-assets/state-pdfs/MD_Desmos_Calculators.pdf",uid:"us-md",stateTestName:"MCAP",stateTestWebsite:"https://marylandpublicschools.org/about/Pages/DAAIT/Assessment/index.aspx",fourFunctionConfig:{...z,additionalFunctions:["sqrt","percent"]},scientificConfig:{...ae,decimalToFraction:!1,functionDefinition:!1},graphingConfig:{...Y,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,forceEnableGeometryFunctions:!0}},{svgid:"25",name:"Massachusetts",urlCode:"massachusetts",pdfUrl:"static-assets/state-pdfs/MA_Desmos_Calculators.pdf",uid:"us-ma",stateTestName:"MCAS",stateTestWebsite:"https://www.doe.mass.edu/mcas/",scientificConfig:ae,graphingConfig:{...Y,notes:!0,folders:!0,degreeMode:!0,forceEnableGeometryFunctions:!0}},{svgid:"26",name:"Michigan",urlCode:"michigan",pdfUrl:"static-assets/state-pdfs/MI_Desmos_Calculators.pdf",uid:"us-mi",stateTestName:"M-STEP",stateTestWebsite:"https://www.michigan.gov/mde/0,4615,7-140-22709_70117---,00.html",fourFunctionConfig:{...z,brailleControls:!1,additionalFunctions:["sqrt","fraction"]},scientificConfig:{...ae,degreeMode:!0,decimalToFraction:!1,brailleControls:!1,functionDefinition:!1}},{svgid:"27",name:"Minnesota",urlCode:"minnesota",pdfUrl:"static-assets/state-pdfs/MN_Desmos_Calculators.pdf",uid:"us-mn",stateTestName:"Minnesota Statewide Assessments",stateTestWebsite:"https://mn.mypearsonsupport.com/",graphingConfig:{...Y,restrictedFunctions:!0,degreeMode:!0,clearIntoDegreeMode:!0,forceEnableGeometryFunctions:!0,tone:!1,capExpressionSize:!0,recursion:!1},scientificConfig:{...ae,qwertyKeyboard:!1,degreeMode:!0,decimalToFraction:!1,allowComplex:!1,functionDefinition:!1},fourFunctionConfig:z},{svgid:"28",name:"Mississippi",urlCode:"mississippi",pdfUrl:"static-assets/state-pdfs/MS_Desmos_Calculators.pdf",uid:"us-ms",stateTestName:"MAAP",stateTestWebsite:"https://mdek12.org/studentassessment/maap/",graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,distributions:!1,substitutions:!1,tone:!1},scientificConfig:{...ut,allowComplex:!1},fourFunctionConfig:{...z,additionalFunctions:["sqrt","percent"]}},{svgid:"29",name:"Missouri",urlCode:"missouri",pdfUrl:"static-assets/state-pdfs/MO_Desmos_Calculators.pdf",uid:"us-mo",stateTestName:"MAP and EOC",stateTestWebsite:"https://dese.mo.gov/college-career-readiness/assessment",graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,tone:!1,logScales:!1},scientificConfig:{...ae,degreeMode:!0,functionDefinition:!1},fourFunctionConfig:{...z,additionalFunctions:["sqrt","fraction"]}},{svgid:"30",name:"Montana",urlCode:"montana",pdfUrl:"static-assets/state-pdfs/MT_Desmos_Calculators.pdf",uid:"us-mt",stateTestName:"MontCAS",stateTestWebsite:"https://opi.mt.gov/Leadership/Assessment-Accountability/MontCAS/",fourFunctionConfig:{...z,additionalFunctions:["sqrt","fraction"]},scientificConfig:Se,graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,decimalToFraction:!1,distributions:!1,zoomFit:!0,actions:!1,tone:!1,recursion:!1}},{svgid:"31",name:"Nebraska",urlCode:"nebraska",pdfUrl:"static-assets/state-pdfs/NE_Desmos_Calculators.pdf",uid:"us-ne",stateTestName:"NSCAS",stateTestWebsite:"https://connection.nwea.org/s/nebraska?language=en_US",fourFunctionConfig:z,scientificConfig:{...Se,allowComplex:!1}},{svgid:"32",name:"Nevada",urlCode:"nevada",pdfUrl:"static-assets/state-pdfs/NV_Desmos_Calculators.pdf",uid:"us-nv",stateTestName:"Nevada State Assessments",stateTestWebsite:"https://doe.nv.gov/offices/office-of-assessment-data-and-accountability-management-adam/office-of-assessments",fourFunctionConfig:{...z,additionalFunctions:["sqrt","fraction"]},scientificConfig:Se},{svgid:"33",name:"New Hampshire",urlCode:"newhampshire",pdfUrl:"static-assets/state-pdfs/NH_Desmos_Calculators.pdf",uid:"us-nh",stateTestName:"New Hampshire Statewide Assessment System",stateTestWebsite:"https://www.education.nh.gov/who-we-are/division-of-education-and-analytic-resources/bureau-assessment-and-accountability/office-assessment/new-hampshire-statewide-assessment",fourFunctionConfig:{...z,additionalFunctions:["fraction"]},scientificConfig:ut},{uid:"us-nj",svgid:"34",name:"New Jersey",urlCode:"newjersey",pdfUrl:"static-assets/state-pdfs/NJ_Desmos_Calculators.pdf",stateTestName:"NJSLA/NJGPA",stateTestWebsite:"https://www.nj.gov/education/assessment/resources/",fourFunctionConfig:{...z,settingsMenu:!1},scientificConfig:{...ae,singleExpression:!0,restrictedEditing:!0,degreeMode:!0,decimalToFraction:!1},graphingConfig:{...Y,zoomFit:!1,qwertyKeyboard:!1,degreeMode:!0,clearIntoDegreeMode:!0,actions:!1,restrictedFunctions:!0,distributions:!1,plotSingleVariableImplicitEquations:!1}},{svgid:"35",name:"New Mexico",urlCode:"newmexico",pdfUrl:"static-assets/state-pdfs/NM_Desmos_Calculators.pdf",uid:"us-nm",stateTestName:"New Mexico State SAT Assessment",graphingConfig:Kr,entityNameOverride:{graphing:"New Mexico SAT"},stateTestWebsite:"https://web.ped.nm.gov/bureaus/assessment/sat-school-day-resources/"},{svgid:"36",name:"New York",urlCode:"newyork",pdfUrl:"static-assets/state-pdfs/NY_Desmos_Calculators.pdf",uid:"us-ny",stateTestName:"New York Regents",stateTestWebsite:"https://www.nysedregents.org/",graphingConfig:{...Y,restrictedFunctions:!0,degreeMode:!0,tone:!1,clearIntoDegreeMode:!0,defaultLogModeRegressions:!0}},{svgid:"37",name:"North Carolina",urlCode:"northcarolina",pdfUrl:"static-assets/state-pdfs/NC_Desmos_Calculators.pdf",uid:"us-nc",stateTestName:"NCTest",stateTestWebsite:"https://www.dpi.nc.gov/districts-schools/testing-and-school-accountability/state-tests",scientificConfig:ut,graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,forceLogModeRegressions:!0,actions:!1,tone:!1,logScales:!1},fourFunctionConfig:{...z,decimalToFraction:!0,additionalFunctions:["sqrt","fraction"]}},{svgid:"38",name:"North Dakota",urlCode:"northdakota",pdfUrl:"static-assets/state-pdfs/ND_Desmos_Calculators.pdf",uid:"us-nd",stateTestName:"ND A+",stateTestWebsite:"https://ndaplus.mypearsonsupport.com/",fourFunctionConfig:z,scientificConfig:ut,graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,distributions:!1,zoomFit:!1}},{name:"NWEA",pdfUrl:"static-assets/assessment-pdfs/MAPGrowth_Desmos_Calculator.pdf",uid:"nwea-map",assessmentHash:"nwea",stateTestName:"MAP Growth",urlCode:"map",scientificConfig:{...ae,qwertyKeyboard:!1,degreeMode:!0,decimalToFraction:!1},fourFunctionConfig:z},{svgid:"39",name:"Ohio",urlCode:"ohio",pdfUrl:"static-assets/state-pdfs/OH_Desmos_Calculators.pdf",uid:"us-oh",stateTestName:"OST",stateTestWebsite:"https://oh.portal.cambiumast.com/",scientificConfig:ut,graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,distributions:!1,zoomFit:!1}},{svgid:"40",name:"Oklahoma",urlCode:"oklahoma",pdfUrl:"static-assets/state-pdfs/OK_Desmos_Calculators.pdf",uid:"us-ok",stateTestName:"OSTP and CCRA",stateTestWebsite:"https://oklahoma.gov/education/services/assessments.html",fourFunctionConfig:z,scientificConfig:{...ae,degreeMode:!0},graphingConfig:{...Y,notes:!0,folders:!0}},{svgid:"41",name:"Oregon",urlCode:"oregon",pdfUrl:"static-assets/state-pdfs/OR_Desmos_Calculators.pdf",stateTestName:"OSAS",uid:"us-or",stateTestWebsite:"https://osasportal.org",fourFunctionConfig:{...z,additionalFunctions:["fraction"]},scientificConfig:Se,graphingConfig:Wr},{svgid:"42",name:"Pennsylvania",urlCode:"pennsylvania",pdfUrl:"static-assets/state-pdfs/PA_Desmos_Calculators.pdf",stateTestName:"PSSA, Keystone, CDT, and Firefly",uid:"us-pa",stateTestWebsite:"https://www.education.pa.gov/K-12/Assessment%20and%20Accountability/Pages/default.aspx",fourFunctionConfig:z,scientificConfig:{...ut,allowComplex:!1},graphingConfig:{...Y,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,plotImplicits:!1,sliders:!1,actions:!1,substitutions:!1,allowComplex:!1,regressionTemplates:!1,recursion:!1,distributions:!1,tone:!1}},{svgid:"44",name:"Rhode Island",urlCode:"rhodeisland",pdfUrl:"static-assets/state-pdfs/RI_Desmos_Calculators.pdf",uid:"us-ri",stateTestName:"RICAS and NGSA",stateTestWebsite:"https://www.ride.ri.gov/InstructionAssessment/Assessment.aspx",fourFunctionConfig:z,graphingConfig:{...Kr,notes:!0,folders:!0}},{svgid:"45",name:"South Carolina",urlCode:"southcarolina",uid:"us-sc",stateTestName:"SC Ready, EOCEP",pdfUrl:"static-assets/state-pdfs/SC_Desmos_Calculators.pdf",fourFunctionConfig:{...z,decimalToFraction:!0},scientificConfig:ae,graphingConfig:{...Y,sliders:!1,actions:!1,substitutions:!1,forceLogModeRegressions:!0,tone:!1,logScales:!1,recursion:!1,regressionTemplates:!1,distributions:!1},assessmentInfo:[{name:"SC Ready"},{name:"EOCEP"},{name:"Alternate Assessment",onlyShowWhenCombiningWithinEntity:!0}]},{name:"South Carolina Alternate",urlCode:"southcarolina-alternate",suppressWhenCombiningWithinEntity:!0,uid:"us-sc-alt",pdfUrl:"static-assets/state-pdfs/SC_Alternate_Desmos_Calculators.pdf",fourFunctionConfig:z,scientificConfig:Se},{svgid:"46",name:"South Dakota",urlCode:"southdakota",pdfUrl:"static-assets/state-pdfs/SD_Desmos_Calculators.pdf",uid:"us-sd",stateTestName:"South Dakota Assessments",stateTestWebsite:"https://doe.sd.gov/assessment/",fourFunctionConfig:{...z,additionalFunctions:["fraction"]},scientificConfig:Se},{name:"TABE",pdfUrl:"static-assets/assessment-pdfs/TABE_Desmos_Calculator.pdf",uid:"tabe",assessmentHash:"tabe",stateTestName:"TABE",urlCode:"tabe",scientificConfig:{...ae,qwertyKeyboard:!1,degreeMode:!0,decimalToFraction:!1},fourFunctionConfig:z},{svgid:"47",name:"Tennessee",urlCode:"tennessee",pdfUrl:"static-assets/state-pdfs/TN_Desmos_Calculators.pdf",uid:"us-tn",stateTestName:"TCAP",stateTestWebsite:"https://www.livebinders.com/b/2426642",scientificConfig:{...ae,degreeMode:!0,functionDefinition:!1},graphingConfig:{...Y,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,forceLogModeRegressions:!0,logScales:!1},matrixConfig:{}},{svgid:"48",name:"Texas",urlCode:"texas",pdfUrl:"static-assets/state-pdfs/TX_Desmos_Calculators.pdf",uid:"us-tx",stateTestName:"STAAR",graphingConfig:Op,scientificConfig:Gp,stateTestWebsite:"https://tea.texas.gov/data-reports/staar/staar-resources"},{svgid:"49",name:"Utah",urlCode:"utah",pdfUrl:"static-assets/state-pdfs/UT_Desmos_Calculators.pdf",uid:"us-ut",assessmentInfo:[{name:"Aspire Plus",url:"http://utah.mypearsonsupport.com"},{name:"Core Standards Benchmarks",url:"https://www.uen.org/core/math/"}],graphingConfig:{...Y,restrictedFunctions:!0,degreeMode:!0,forceEnableGeometryFunctions:!0},scientificConfig:{...ae,functionDefinition:!1,degreeMode:!0,decimalToFraction:!1}},{svgid:"50",name:"Vermont",urlCode:"vermont",pdfUrl:"static-assets/state-pdfs/VT_Desmos_Calculators.pdf",uid:"us-vt",stateTestName:"CAS",stateTestWebsite:"https://education.vermont.gov/student-learning/assessments",fourFunctionConfig:{...z,additionalFunctions:["sqrt","fraction"]},scientificConfig:{...ae,qwertyKeyboard:!1,degreeMode:!0,decimalToFraction:!1,functionDefinition:!1,allowComplex:!1},graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,decimalToFraction:!1,distributions:!1,zoomFit:!1,actions:!1}},{svgid:"51",name:"Virginia",urlCode:"virginia",pdfUrl:"static-assets/state-pdfs/VA_Desmos_Calculators.pdf",uid:"us-va",stateTestName:"Standards of Learning",stateTestWebsite:"https://www.doe.virginia.gov/teaching-learning-assessment/student-assessment/virginia-sol-assessment-program",graphingConfig:{...Y,restrictedFunctions:!0,degreeMode:!0,clearIntoDegreeMode:!0,forceEnableGeometryFunctions:!0,tone:!1,capExpressionSize:!0,recursion:!1,defaultLogModeRegressions:!0},scientificConfig:{...ae,functionDefinition:!1,decimalToFraction:!1,capExpressionSize:!0,allowComplex:!1},fourFunctionConfig:{...z,capExpressionSize:!0}},{svgid:"53",name:"Washington",urlCode:"washington",pdfUrl:"static-assets/state-pdfs/WA_Desmos_Calculators.pdf",uid:"us-wa",stateTestName:"WCAP Test",stateTestWebsite:"https://wa.portal.cambiumast.com/",fourFunctionConfig:{...z,additionalFunctions:["fraction"]},scientificConfig:Se,graphingConfig:Wr},{svgid:"54",name:"West Virginia",urlCode:"westvirginia",pdfUrl:"static-assets/state-pdfs/WV_Desmos_Calculators.pdf",uid:"us-wv",stateTestName:"WVGSA",stateTestWebsite:"https://wvde.us/assessment/",fourFunctionConfig:{...z,additionalFunctions:["sqrt","fraction"]},scientificConfig:ut},{svgid:"55",name:"Wisconsin",urlCode:"wisconsin",pdfUrl:"static-assets/state-pdfs/WI_Desmos_Calculators.pdf",uid:"us-wi",stateTestName:"Wisconsin Forward Exam",stateTestWebsite:"https://dpi.wi.gov/assessment/forward",fourFunctionConfig:z,scientificConfig:{...ae,degreeMode:!0}},{svgid:"56",name:"Wyoming",urlCode:"wyoming",pdfUrl:"static-assets/state-pdfs/WY_Desmos_Calculators.pdf",uid:"us-wy",stateTestName:"WY-TOPP",stateTestWebsite:"http://wy.mypearsonsupport.com",fourFunctionConfig:{...z,additionalFunctions:["fraction"]},scientificConfig:ut,graphingConfig:{...Y,zoomFit:!1,degreeMode:!0,restrictedFunctions:!0,distributions:!1,qwertyKeyboard:!1}},{name:"Guam",urlCode:"guam",pdfUrl:"static-assets/state-pdfs/GU_Desmos_Calculators.pdf",svgid:"66",uid:"us-gu",stateTestName:"Smarter Balanced Summative",fourFunctionConfig:{...z,additionalFunctions:["sqrt","fraction"]},scientificConfig:Se,graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,decimalToFraction:!1,distributions:!1,zoomFit:!0,actions:!1,tone:!1}},{name:"Quebec",pdfUrl:"static-assets/assessment-pdfs/Quebec_Desmos_Calculator.pdf",urlCode:"quebec",uid:"ca-qc",assessmentHash:"quebec",stateTestName:"Uniform Examinations",graphingConfig:{...Y,actions:!1,plotImplicits:!1,restrictedFunctions:!0,sliders:!1,allowComplex:!1,recursion:!1,distributions:!1}},{svgid:"78",name:"U.S. Virgin Islands",urlCode:"usvirginislands",pdfUrl:"static-assets/state-pdfs/VI_Desmos_Calculators.pdf",uid:"us-vi",stateTestName:"Smarter Balanced Summative",stateTestWebsite:"https://vide.portal.cambiumast.com/",fourFunctionConfig:{...z,additionalFunctions:["fraction"]},scientificConfig:Se,graphingConfig:{...Y,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,plotSingleVariableImplicitEquations:!1,decimalToFraction:!1,distributions:!1,zoomFit:!0,actions:!1,recursion:!1,tone:!1}}];function $p(e){let t=Ps.filter(r=>r.urlCode===e);if(t.length>0)return t[0]}var On=class{raw(t,r){return this.i18n?this.i18n.raw(t,r):ma(t,r)}logEvent(t){Ip(t)}updateViews(){var t;(t=this.onViewUpdate)==null||t.call(this)}getLanguage(){return this.i18n?this.i18n.getLanguage():this.language}handleAction(t){t.type==="navigate"&&this.routerController.navigateToView(t.path)}constructor(t){Rp(),this.dispatcher=new Vr,t?(this.i18n=t,this.s=this.i18n.s):this.s=Ei(()=>this.language),this.dispatch=r=>{Cl("dispatch",{type:r.type}),this.dispatcher.dispatch(r)},this.routerController=new bo(this.dispatch),this.dispatcher.register(r=>{this.handleAction(r),this.updateViews()}),this.language=Ai()}getPage(){return this.routerController.currentPage}getSubpage(){return this.routerController.currentSubpage}getParams(){return this.routerController.currentParams}getCurrentStateCode(){let t=this.getSubpage();if(t!==void 0)return t.split("/")[0]}getCurrentState(){let t=this.getCurrentStateCode();if(t)return $p(t)}getCurrentStateOrDefault(){return this.getCurrentState()||Ns}};var Qr=class extends ve{init(){this.controller=this.props.controller(),this.dispatch=this.controller.dispatch}};var Fp=e=>Object.keys(e);var Me={},Te=cc(),qv={sciKeypad:1,"4fnKeypad":1,singleExpression:1,restrictedEditing:1,degreeMode:1,decimalToFraction:1};typeof Desmos!="undefined"&&Desmos.config&&Fp(qv).forEach(e=>{Desmos.config[e]&&Te.set(e,"true"),Me[e]=Desmos.config[e]});var jr=e=>Be(e,Te),H=e=>{Me[e]=jr(e)},Q=e=>{Me[e]=!jr(`no${e}`)};H("testing");H("maintenance");H("nativeOnscreenKeypad");H("hidden");H("disableMouseInteractions");H("advancedStyling");H("outofdom");Te.has("cacheRenderedSvgs")&&(Me.cacheRenderedSvgs=!0);var Sv=["lang","fontSize","gestureHandling","translucentOpacity","peelUpsample","debugPeelLayers","debug3dRender","recursionDepthLimit"];Sv.forEach(e=>{Te.has(e)&&(Me[e]=Te.get(e))});Te.has("backgroundColor")&&(Me.backgroundColor="#"+Te.get("backgroundColor"));Te.has("textColor")&&(Me.textColor="#"+Te.get("textColor"));Te.has("accentColor")&&(Me.accentColor="#"+Te.get("accentColor"));H("lockViewport");H("authorFeatures");Te.has("degreeMode")&&H("degreeMode");Te.has("nodegreeMode")&&Q("degreeMode");H("wireframe");H("raycastHeatmap");H("raycastDisableIntervals");H("editOnWeb");H("crossOriginSaveTest");H("showResetButtonOnGraphpaper");H("debugProgressUpdates");H("debugCompiler");H("transparentBackground");H("forceLogModeRegressions");H("defaultLogModeRegressions");H("reflectionArc");H("logInternalErrors");H("showIDs");Q("links");Q("trace");Q("zoomFit");H("expressionsCollapsed");H("keypadActivated");H("invertedColors");Q("invertedColorsControl");H("projectorMode");Q("images");Q("folders");Q("settingsMenu");Q("expressionsTopbar");Q("zoomButtons");Q("keypad");Q("graphpaper");Q("expressions");Q("branding");Q("pointsOfInterest");Q("plotSingleVariableImplicitEquations");Q("plotImplicits");Q("plotInequalities");Q("notes");Q("sliders");H("pauseWhenOffscreen");Q("brailleControls");H("audioTraceKeypad");Q("audio");Q("tone");H("showEvaluationCopyButtons");H("reportPositionNone");Q("qwertyKeyboard");H("restrictedFunctions");H("forceEnableGeometryFunctions");Q("functionDefinition");H("singleExpression");H("restrictedEditing");H("replaceCommaWith10Exp");H("replaceRoundWithReciprocal");jr("typingAsteriskWritesTimesSymbol")&&(Me.typingAsteriskWritesTimesSymbol=!0);Q("substitutions");Q("intervalComprehensions");Q("recursion");Q("calculus");Q("logScales");Q("regressionTemplates");Q("distributions");Me["4fnKeypad"]?H("decimalToFraction"):Q("decimalToFraction");H("translucentSurfaces");H("3d");H("disableWorkerOnZoom");H("showPerformanceMeter");Q("adaptivePeeling");H("complex");Q("allowComplex");Q("customRegressions");var Bp;Te.has("additionalFunctions")&&(Me.additionalFunctions=(Bp=Te.get("additionalFunctions"))==null?void 0:Bp.split(","));Te.has("disableParentheses")&&(Me.disableParentheses=!0);Te.has("limitNumberScale")&&(Me.limitNumberScale=!0);jr("actions")?Me.actions=!0:jr("noactions")?Me.actions=!1:jr("clickableObjects")&&(Me.actions=!0);function zp(e){return Me[e]}var yo=mo;var Mv=50,xo=class{constructor(t,r){this.throttledFlushBatchedLogs=ju(async()=>{if(this.requestInFlight||this.batchedLogs.length==0)return;let t=this.batchedLogs.splice(0,Mv);this.requestInFlight=!0;try{await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({events:t})})}catch(r){}this.requestInFlight=!1,this.throttledFlushBatchedLogs()},1e3,{leading:!1});this.batchedLogs=[],this.requestInFlight=!1,this.getSessionData=r,this.apiUrl=t}log(t){this.batchedLogs.push({...this.getSessionData(),...t}),this.throttledFlushBatchedLogs()}};var Tv={event_type:"eventType",source:"browser",app:"knox",user_agent:navigator.userAgent},Ev=new xo("/usage-stats",()=>Tv);function Up(e,t,r){Ev.log({event_type:e,url:document.location.href,payload:JSON.stringify(r),page_load_id:t})}var Av="usage-ping",Hp=15*1e3,Dv=60*1e3,Nv=60*1e3,Pv={scientific:.03,matrix:.8,graphing:.02,"geometry-calculator":.5,fourfunction:.8,"graphing-3d":.4,"assessment-scientific":.5,"assessment-graphing":.3,"assessment-fourfunction":.7,practice:.7,notebook:1,"notebook-view":1},Gn=class{constructor(t){this.samplingInterval={current:Hp,lessFrequent:Dv,moreFrequent:Hp,moreFrequentPeriod:180*1e3};this.sampleStartTime=0;this.minutesOfMathData={lastCheckedMinutesOfMath:Date.now(),lastChangeEventTime:void 0,minutesOfMath:0};this.minutesOfMathCheckInterval=Nv;this.handleFocus=()=>this.onFocus();this.handleBlur=()=>this.onBlur();this.handleVisibilityChange=()=>this.onVisibilityChange();var r;this.samplingProbability=(r=window.sampleProbabilityOverride)!=null?r:Pv[t],this.shouldSample=Math.random()<this.samplingProbability,this.pageLoadId=yo(),this.pageLoadTime=Date.now(),this.focused=document.hasFocus(),this.focused&&(this.focusIntervalStart=Date.now()),this.totalTimeFocused=0,window.addEventListener("focus",this.handleFocus),window.addEventListener("blur",this.handleBlur),document.visibilityState==="visible"&&(this.visibleIntervalStart=Date.now()),this.totalTimeVisible=0,document.addEventListener("visibilitychange",this.handleVisibilityChange),zp("testing")&&(window.usageMonitor=this)}onFocus(){this.focused=!0,this.focusIntervalStart=Date.now()}onBlur(){this.focused=!1,this.addTimeFocused(),this.focusIntervalStart=void 0}onVisibilityChange(){document.visibilityState==="hidden"?(this.addTimeVisible(),this.visibleIntervalStart=void 0):this.visibleIntervalStart=Date.now()}destroy(){this.stop(),window.removeEventListener("focus",this.handleFocus),window.removeEventListener("blur",this.handleBlur),document.removeEventListener("visibilitychange",this.handleVisibilityChange),delete window.usageMonitor}handleUserChangeEvent(){this.minutesOfMathData.lastChangeEventTime=Date.now(),this.getTotalMinutesOfMath()}getUsageData(){return{...{timeSincePageload:this.getTimeSincePageload(),totalTimeFocused:this.getTotalTimeFocused(),totalTimeVisible:this.getTotalTimeVisible(),...this.getTotalMinutesOfMath(),samplingInterval:this.samplingInterval.current,samplingProbability:this.samplingProbability},version:3}}addTimeFocused(){if(this.focusIntervalStart===void 0)return;let t=Date.now(),r=t-this.focusIntervalStart;this.totalTimeFocused+=r,this.focusIntervalStart=t}addTimeVisible(){if(this.visibleIntervalStart===void 0)return;let t=Date.now(),r=t-this.visibleIntervalStart;this.totalTimeVisible+=r,this.visibleIntervalStart=t}getTotalTimeFocused(){return this.focused?(this.addTimeFocused(),this.totalTimeFocused):this.totalTimeFocused}getTotalTimeVisible(){return document.visibilityState==="hidden"?this.totalTimeVisible:(this.addTimeVisible(),this.totalTimeVisible)}start(){if(!this.shouldSample||this.sampleTimeout)return;this.sampleStartTime=Date.now();let t=()=>{this.sampleTimeout!==void 0&&clearTimeout(this.sampleTimeout),this.shouldSample&&(Date.now()-this.sampleStartTime>this.samplingInterval.moreFrequentPeriod&&(this.samplingInterval.current=this.samplingInterval.lessFrequent),this.sampleTimeout=setTimeout(t,this.samplingInterval.current),this.callLogger())};this.sampleTimeout=setTimeout(t)}stop(){this.sampleTimeout!==void 0&&clearTimeout(this.sampleTimeout),this.sampleTimeout=void 0}callLogger(){Up(Av,this.pageLoadId,this.getUsageData())}getTimeSincePageload(){return Date.now()-this.pageLoadTime}setMinutesOfMathCheckInterval(t){this.minutesOfMathCheckInterval=t}overrideSamplingInterval(t){this.samplingInterval={...this.samplingInterval,...t}}setShouldSample(t){this.shouldSample=t,this.start()}getTotalMinutesOfMath(){var r;let t=Date.now();return(!this.minutesOfMathData.lastCheckedMinutesOfMath||t-this.minutesOfMathData.lastCheckedMinutesOfMath>=this.minutesOfMathCheckInterval)&&(((r=this.minutesOfMathData.lastChangeEventTime)!=null?r:0)>t-this.minutesOfMathCheckInterval&&(this.minutesOfMathData.minutesOfMath+=this.minutesOfMathCheckInterval*1/(60*1e3)),this.minutesOfMathData.lastCheckedMinutesOfMath=t),{minutesOfMath:this.minutesOfMathData.minutesOfMath}}};var _v=[],Lv={};for(let e of Ps)_v.push(e.uid),Lv[e.uid]=e;function Vp(e,t){switch(e){case"graphing":return t("practice-link-graphing");case"scientific":return t("practice-link-scientific");case"fourFunction":return t("practice-link-four-function")}}function Kp(e,t,r){var a;if(e.uid==="ib")return"International Baccalaureate\xAE";if(e.uid==="nwea-map")return"NWEA MAP Growth";let n=e.name;return(a=e.entityNameOverride)!=null&&a[t]&&(n=e.entityNameOverride[t]),r("practice-label-test-version",{entityName:n})}var Rv={fourFunction:"assessment-fourfunction",scientific:"assessment-scientific",graphing:"assessment-graphing"},vo=class extends Qr{template(){return di("div",{class:"spa-sample-calculator-view",children:[di("div",{class:"dcg-sample-calculator__header",children:[we("i",{class:"dcg-icon-desmos dcg-sample-calculator__desmos-icon","aria-hidden":"true"}),we("span",{class:"dcg-sample-calculator__calculator-name",children:()=>Vp(this.props.calculatorType(),this.controller.s)}),un(()=>this.props.controller().getCurrentState(),t=>we("span",{class:"dcg-sample-calculator__state-name",children:()=>Kp(t(),this.props.calculatorType(),this.controller.s)}))]}),we("div",{class:()=>({"sample-calculator":!0,"dcg-sample-calculator__graphing":this.props.calculatorType()==="graphing","dcg-sample-calculator__scientific":this.props.calculatorType()==="scientific","dcg-sample-calculator__four-function":this.props.calculatorType()==="fourFunction"}),didMount:this.bindFn(this.didMountCalculator)})]})}didMountCalculator(t){let r=this.controller.getLanguage();switch(this.usageMonitor=new Gn(Rv[this.props.calculatorType()]),this.usageMonitor.start(),this.props.calculatorType()){case"graphing":{let n=Desmos.GraphingCalculator(t,{...this.getGraphingConfig(),language:r});n.observeEvent("change",(a,{isUserInitiated:o})=>{o&&this.usageMonitor.handleUserChangeEvent()}),window.Calc=n;break}case"scientific":{Desmos.ScientificCalculator(t,{...this.getScientificConfig(),language:r}).observeEvent("change",()=>this.usageMonitor.handleUserChangeEvent());break}case"fourFunction":{Desmos.FourFunctionCalculator(t,{...this.getFourFunctionConfig(),language:r}).observeEvent("change",()=>this.usageMonitor.handleUserChangeEvent());break}}}getGraphingConfig(){return this.props.controller().getCurrentStateOrDefault().graphingConfig}getScientificConfig(){return this.props.controller().getCurrentStateOrDefault().scientificConfig}getFourFunctionConfig(){return this.props.controller().getCurrentStateOrDefault().fourFunctionConfig}};var _s=class extends Qr{template(){return we("div",{children:bi(()=>this.props.controller().getPage()==="testing"&&!!this.getCalculatorType(),{true:()=>un(()=>this.getCalculatorType(),t=>we(vo,{controller:this.props.controller,calculatorType:t})),false:()=>we("div",{children:"Unknown View!"})})})}getCalculatorType(){let t=this.props.controller().getSubpage();if(t!==void 0){if(t.match(/graphing/))return"graphing";if(t.match(/scientific/))return"scientific";if(t.match(/fourfunction/))return"fourFunction"}}},Wp=new On,Qp=document.getElementById("spa-container");if(!Qp)throw'Expected to find an element with id="spa-container"';var Iv=ui(_s,Qp,{controller:()=>Wp});Wp.onViewUpdate=()=>Iv.update();var Jp=ym(Yp(),1);var Xp="c36092377d03284490063da5eb3e247140ad7fbb";var cD=navigator.userAgent.match(/MSIE 8.0/i)!==null,uD=navigator.userAgent.match(/MSIE 9.0/i)!==null,dD=navigator.userAgent.match(/MSIE/i)!==null||navigator.userAgent.match(/Trident/i)!==null&&navigator.userAgent.match(/rv:11/i)!==null,pD=navigator.userAgent.match(/Edge/i)!==null,gD=navigator.userAgent.match(/iPad/i)!==null,hD=navigator.userAgent.match(/Mobile|Android/i)!==null||Be("forceMobile"),Gv=navigator.userAgent.match(/Android/i)!==null,ko=navigator.userAgent.match(/(iPad|iPhone|iPod)/i)!==null||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,mD=navigator.userAgent.match(/Chrome/i)!==null,fD=navigator.userAgent.match(/Firefox/i)!==null,bD=navigator.userAgent.match(/^((?!chrome|android).)*safari/i)!==null,$v=navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)!==null,yD=navigator.platform.match(/(Win32)/i)!==null,xD=navigator.userAgent.match(/Touch/i)!==null,vD=navigator.userAgent.match(/Kindle/i)!==null||navigator.userAgent.match(/Silk/i)!==null,wD=navigator.userAgent.match(/KeyWeb/i)!==null,kD=window.parent!==window;var qD=ko||Gv||!!navigator.userAgent.match(/webOS/i)||!!navigator.userAgent.match(/BlackBerry/i)||!!navigator.userAgent.match(/Windows Phone/i)||Be("forceTouchDevice");var wo=(()=>{let e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||"0",10)]:null})(),SD=(()=>{let e=navigator.appVersion.match(/OS X (\d+)_(\d+)_?(\d+)?/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||"0",10)]:null})(),CD=(()=>{let e=navigator.appVersion.match(/Chrom(e|ium)\/([0-9]+)\.([0-9]+)\.?([0-9]+)?/);return e?[parseInt(e[2],10),parseInt(e[3],10),parseInt(e[4]||"0",10)]:null})(),MD=!(!("inputMode"in document.createElement("textarea"))||ko&&wo&&wo[0]<15),TD=(()=>{let e=document.createElement("canvas");return!!(e.getContext&&e.getContext("2d"))})(),ED=window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.location.search.indexOf("prefersReducedMotion")>=0,AD=(()=>{let e=document.createElement("video");return e.canPlayType&&!!e.canPlayType('video/webm; codecs="vp8, vorbis"')})(),Zp,DD=(Zp=window.matchMedia("(forced-colors: active)"))==null?void 0:Zp.matches;function Bv(e){return e.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&")}var zv=["UnhandledRejection","lnrAppboy","socratic","MyAppGet","SymBrowser_","mobincube_","_avast_submit","Cannot redefine property: googletag","jcarousel","SyntaxError: Unexpected identifier 'script'","__gCrWeb.autofill.extractForms","BrowseITEXT","Can't find variable: removeAllHighlights","aAttribruteValue.parentNode.getAttribute","vid_mate_check","GetImageTagSrcFromPoint","Can't find variable: didEnterViewPort","tinyMCE is not defined","div:has(> iframe[id='198230182308109283091823098102938908128390'])","https://asset.goguardian/asset.js","https://utq.vvipquan.com/suv4/rMainB.bundle.js","https://lottingem.com/re.php","promiseReactionJobWithoutPromise","promiseReactionJob","runTaskInternal","wsimtgo.destroy","wsimtgo_device_info.destroy","global code:1:1","global code:43:3","https://www.desmos.com/__DLD__"],Rs=new RegExp(zv.map(Bv).join("|"));function Uv(){let e="production";if(location&&location.hostname){let r=location.hostname.split("."),n=r.slice(0,r.length-2).join(".");r.slice(r.length-2).join(".")==="desmos.com"&&(!n||n==="www"?e="production":e=n)}return e}var qo=class{constructor(){this.numberOfSentErrors=0;this.pageLoadId=yo();this.bugsnagClient=Jp.default.start({apiKey:"7f7807097671acbc4557e64bbf5eb529",maxBreadcrumbs:40,appVersion:Xp,releaseStage:Uv(),onError:t=>this.onError(t),enabledBreadcrumbTypes:["error","navigation","request","user"]})}onError(t){let r=wo;return r&&r[0]<=13||t.originalError instanceof Error&&t.originalError.stack&&Rs.test(t.originalError.stack)||t.errors.some(n=>Rs.test(n.errorClass)||Rs.test(n.errorMessage))?!1:(this.beforeSendCb&&this.beforeSendCb(t),this.attachWebGLReport&&this.attachWebGLReport(t),this.numberOfSentErrors+=1,t.addMetadata("custom",{errorNumber:this.numberOfSentErrors,pageLoadId:this.pageLoadId}),!0)}setBeforeSendCB(t){this.beforeSendCb=t}setAttachWebGLReport(t){this.attachWebGLReport=t}setUserId(t){this.bugsnagClient.setUser(t)}leaveBreadcrumb(t,r,n){if(r){r={...r};for(let a in r)try{r[a]=JSON.stringify(r[a],null,2)}catch(o){r[a]="[[could not stringify]]"}}this.bugsnagClient.leaveBreadcrumb(t,r,n)}notify(t,r){this.bugsnagClient&&this.bugsnagClient.notify(t,n=>(r&&r.metaData&&n.addMetadata("custom",r.metaData),r&&r.context&&(n.context=r.context),r&&r.severity&&(n.severity=r.severity),!0))}};var eg=function(e,t){Object.assign(e.style,t)};var fr=class fr{constructor(){this.handledBy=new Set}static getOrCreate(t){let r=fr.metadataMap.get(t);return r||(r=new fr,fr.metadataMap.set(t,r)),r}static get(t){return fr.metadataMap.get(t)}};fr.metadataMap=new WeakMap;var tg=fr;var Fn={apple:{metaKey:!0},other:{ctrlKey:!0}},$n={apple:{metaKey:!0,shiftKey:!0},other:{ctrlKey:!0,shiftKey:!0}},be={apple:{metaKey:!0,ctrlKey:!0},other:{ctrlKey:!0,altKey:!0}},cg={apple:{ctrlKey:!0,shiftKey:!0},other:{ctrlKey:!0,shiftKey:!0}},ug={apple:{ctrlKey:!0,altKey:!0},other:{ctrlKey:!0,altKey:!0}},Is={apple:{ctrlKey:!0,altKey:!0},other:{ctrlKey:!0,shiftKey:!0}},Qe={apple:{ctrlKey:!0},other:{altKey:!0}},rg={apple:{metaKey:!0},other:{altKey:!0}},Vt={apple:{metaKey:!0,shiftKey:!0},other:{altKey:!0,shiftKey:!0}};var Hv={apple:{altKey:!0,shiftKey:!0},other:{altKey:!0,shiftKey:!0}},Bn={apple:{},other:{}},Vv={apple:{ctrlKey:!0},other:{ctrlKey:!0}},Kv=["F6",Bn];var So={undo:["Z",Fn],redo:[["Z",$n],["Y",Fn]]};var dg={brailleNemeth:["N",Qe],brailleUEB:["U",Qe],toggleSixKeyInput:["6",Qe],exitBraille:[["Q",Qe],["X",Qe]]},BD={...So,clearAll:["L",cg],toggleFractionEvaluation:["A",Vt],toggleDegrees:["D",Qe],...dg},zD={...So,expressionZoomFit:["Z",Hv],toggleFractionEvaluation:["A",Vt],toggleItemHidden:["H",Vt],toggleAuthorMode:["O",Vt],toggleExpressionList:["E",Vt],toggleKeyboardReorder:["M",Vt],collapseAllFolders:["Up",Vt],expandAllFolders:["Down",Vt],collapseFolder:["Up",rg],expandFolder:["Down",rg],openExpressionSearch:["F",Fn],openExpressionSearchRename:["F",$n],focusExpressionList:["E",be],newExpression:["X",be],newNote:["O",be],newFolder:["F",be],newImage:["I",be],newTable:["T",be],newTableRegression:["R",be],focusGeoToolbar:["M",be],openObjectNavigator:["C",be],toggleGraphSettings:["G",be],focusGraphPaper:["P",be],toggleEditListMode:["D",ug],clearGraph:["L",cg],switchPane:Kv,...dg,toggleDegrees:["D",Qe],toggleKeypad:["K",Qe],toggleMute:["M",Qe],zoomIn:[["+",Qe],["=",Qe]],zoomOut:["-",Qe],zoomDefault:["0",Qe],escape:["Esc",Bn],backspace:["Backspace",Bn]};var UD={...So,formattingToolbar:["M",be],backtick:["`",Bn]},HD={escape:["Esc",Bn],insertExpressionCell:["Enter",Fn],...So,save:["S",Fn],formatParagraph:["0",ug],formatTitle:["1",Is],formatHeading:["2",Is],formatSubheading:["3",Is],alignLeft:["L",$n],alignCenter:["E",$n],alignRight:["R",$n],commitGraphCellModal:["Enter",Vv],insertColumnLeft:["[",be],insertColumnRight:["]",be],deleteColumn:[["Backspace",be],["Del",be]],focusFormattingToolbar:["M",be],openCommandPalette:["O",be],focusExpressionListSidebar:["E",be],openPublishedPreviewModal:["V",be]};var Wv="Backspace",Qv="Tab",pg="Enter",gg="Shift",hg="Control",mg="Alt",fg="Meta",bg="CapsLock",yg="Esc",xg="Space",vg="PageUp",wg="PageDown",jv="End",Yv="Home",kg="Left",qg="Up",Sg="Right",Cg="Down",Xv="Del",Zv="F6";var ng={Backspace:Wv,F6:Zv,Tab:Qv,Enter:pg,Shift:gg,Control:hg,Alt:mg,Meta:fg,CapsLock:bg,Escape:yg," ":xg,PageUp:vg,PageDown:wg,End:jv,Home:Yv,ArrowLeft:kg,ArrowUp:qg,ArrowRight:Sg,ArrowDown:Cg,Delete:Xv},Mg=e=>{let t=[gg,mg,hg,bg,fg];return!!e.key&&t.includes(e.key)},Os=e=>lg(e)===pg||lg(e)===xg,ag={UIKeyInputUpArrow:qg,UIKeyInputDownArrow:Cg,UIKeyInputLeftArrow:kg,UIKeyInputRightArrow:Sg,UIKeyInputEscape:yg,UIKeyInputPageUp:vg,UIKeyInputPageDown:wg},Gs=["0123456789abcdefghijklmnopqrstuvwxyz","\xBA\xA1\u2122\xA3\xA2\u221E\xA7\xB6\u2022\xAA\xE5\u222B\xE7\u2202 \u0192\xA9\u02D9 \u2206\u02DA\xAC\xB5 \xF8\u03C0\u0153\xAE\xDF\u2020 \u221A\u2211\u2248\xA5\u03A9","\u201A\u2044\u20AC\u2039\u203A\uFB01\uFB02\u2021\xB0\xB7\xC5\u0131\xC7\xCE\xB4\xCF\u02DD\xD3\u02C6\xD4\uF8FF\xD2\xC2\u02DC\xD8\u220F\u0152\u2030\xCD\u02C7\xA8\u25CA\u201E\u02DB\xC1\xB8"].map(e=>e.split("")),og=Gs[0],ig=Gs[1],sg=Gs[2],Jv={},ew={};for(let e=0;e<og.length;e++){let t=og[e];ig[e]!==" "&&(Jv[ig[e]]=t.toUpperCase()),sg[e]!==" "&&(ew[sg[e]]=t.toUpperCase())}var lg=e=>{if(e.key&&ng[e.key])return ng[e.key];if(e.key&&ag[e.key])return ag[e.key]};var rw=500,nw=document.location.href.indexOf("dcgDebugTouchTracking=dcgYES")!==-1,Kt,Yr;window._touchtracking_id_counter==null&&(window._touchtracking_id_counter=0);window._touchtracking_id_counter+=1;var Hn="touchtracking_id_"+window._touchtracking_id_counter,de=function(e){Yr&&(Yr.value="("+Date.now()+") "+e+`
`+Yr.value)};function Pg(e){if(e.classList.add("dcg-tap-container",Hn),ko&&e.style.setProperty("--dcg-minimum-input-font-size","16px"),nw){Kt&&Kt.remove(),Kt=document.createElement("div"),eg(Kt,{position:"absolute",bottom:"10px",right:"10px"});let t=document.createElement("textarea");t.setAttribute("rows","30"),t.setAttribute("cols","40"),Kt.append(t);let r=document.createElement("div");r.id="dcg-touchtracking-debug-copy",r.classList.add("dcg-btn-blue"),r.innerText="COPY LOGS",Kt.append(r),Yr=Kt.querySelector("textarea"),e.append(Kt),r.addEventListener("mousedown",()=>{Yr&&(Yr.select(),document.execCommand("copy"))},!0),de("monitor touches")}}var Vn=0,ot=1,Zr=2,Un=3,Nt=4,W=Vn,$s={},yt={},Dt=[],Fs=0,zn=null,Mo=null,br=!1,Co=null,Tg=br,Wt=function(e){let t=document.activeElement;e.type.startsWith("key")?Mg(e)||(br=!0):e.type.startsWith("pointer")&&(br=!1);let r=!!(t&&Lg(t));t&&!t.closest(".dcg-tap-container."+Hn)&&(t=null),t!==Co?(Co&&Co.classList.remove("dcg-focus-visible"),t&&(br||r||t.classList.contains("dcg-always-show-focus-visible"))&&t.classList.add("dcg-focus-visible")):Tg!==br&&t&&!r&&(br||t.classList.contains("dcg-always-show-focus-visible")?t.classList.add("dcg-focus-visible"):t.classList.remove("dcg-focus-visible")),Tg=br,Co=t};document.addEventListener("keydown",Wt,{capture:!0});document.addEventListener("keydown",Wt);document.addEventListener("pointerdown",Wt);document.addEventListener("pointerdown",Wt,{capture:!0});document.addEventListener("focusin",Wt,{capture:!0});document.addEventListener("focusin",Wt);document.addEventListener("focusout",Wt,{capture:!0});document.addEventListener("focusout",Wt);var Eg,Fe=[],_g=function(e){let t=[],r=!1;for(let n=e.length-1;n>=0;n--){let a=e[n];a.classList.contains("dcg-touchtracking-prevent-dom-mutations")?r=!0:a.classList.contains("dcg-touchtracking-allow-dom-mutations")&&(r=!1),r||t.push(a)}return t.reverse(),t},Bs=function(e){if(!(e instanceof Element))return[];let t=e.closest(".dcg-tap-container."+Hn);if(!t)return[];let r=e,n=[];for(;r;){if(n.push(r),r===t||r.classList.contains("dcg-stop-touchtracking-class-propagation"))return n;r=r.parentNode}return[]},To=function(e,t){Mo=null,W=e,de("beginMode:"+W),W===ot?Dt=Bs(t.originalEvent.touches[0].target):Dt=Bs(t.target),_g(Dt).forEach(n=>{n.classList.add("dcg-depressed")}),Dt.forEach(n=>{let a=pe(n);a.data({originalScrollTop:a.scrollTop(),originalScrollLeft:a.scrollLeft()})}),yt={}};function Lg(e){let t=["text","password","email","number","url","search"];return e.matches("input")&&t.indexOf(e.type)>=0||e.matches('textarea, [role="textbox"], [contenteditable=true]')}var Kn=function(e){if(!(e instanceof Element))return!1;let t=e.closest(".dcg-tap-container");return t?t.matches(".dcg-tap-container."+Hn):!1},Jr=function(e,t){Mo=null;let r=!1;if(de("endMode:"+W),document.querySelectorAll(".dcg-depressed").forEach(n=>{n.classList.remove("dcg-depressed")}),Dt.forEach(n=>{let a=pe(n),o=a.data("originalScrollTop")-a.scrollTop(),i=a.data("originalScrollLeft")-a.scrollLeft();(o||i)&&(yt.scroll=!0)}),yt["dcg-tapstart"]===1&&yt["dcg-tapend"]===1&&!yt["dcg-tapcancel"]&&!yt.scroll){de("potential dcg-tap");let n=t.changedTouches[0].clientX,a=t.changedTouches[0].clientY;if(e&&!e.device&&n===0&&a===0){de("event appears to be simulated"),r=!0,W=Un;let s=e.target.getBoundingClientRect();n=(s.left+s.right)/2,a=(s.top+s.bottom)/2}de("potential dcg-tap coords:"+n+":"+a);let o=!1,i=!1;for(let s of Dt){if(o)break;let c;if(typeof s.getBoundingClientRect=="function"&&(c=s.getBoundingClientRect()),typeof s.getAttribute=="function"&&s.getAttribute("tapboundary")==="true"&&(o=!0),!(c&&(n<c.left||a<c.top||n>c.right||a>c.bottom))){Mo=s,i=!0,Re("dcg-tap",e,{target:Mo,touches:t.touches,changedTouches:t.changedTouches});break}}de("result of dcg-tap:  did_dispatch="+i+"  did_escape="+o)}W===ot||W===Nt?zn=setTimeout(()=>{zn=null,Fs=new Date().getTime()},1e3):r&&(zn=setTimeout(()=>{zn=null,Fs=new Date().getTime()},100)),Dt=[],W=Vn},Xr=function(){return zn||new Date().getTime()-Fs<500},Rg=function(e){return e.identifier!==void 0?e.identifier:e.pointerId},Ag=function(e){let t=[];for(let r of e)t.push({identifier:Rg(r),x:r.pageX,y:r.pageY,screenX:r.screenX,screenY:r.screenY,pageX:r.pageX,pageY:r.pageY,clientX:r.clientX,clientY:r.clientY,target:r.target});return t},Re=function(e,t,r){let n=Rg(t),a=Ag(r.touches),o=Ag(r.changedTouches);if(de("dispatchEvent:"+e),e==="dcg-tapstart")$s[n]={type:e,pageX:o[0].pageX,pageY:o[0].pageY};else if(e==="dcg-tapmove"){let g=o[0],h=$s[n];if(h&&g.pageX===h.pageX&&g.pageY===h.pageY||(W===ot||W===Nt)&&h&&h.type==="dcg-tapstart"&&Math.abs(h.pageX-g.pageX)+Math.abs(h.pageY-g.pageY)<2)return;$s[n]={type:e,pageX:o[0].pageX,pageY:o[0].pageY}}let i=e.toLowerCase();yt[i]===void 0?yt[i]=1:yt[i]+=1;let s=pe.event.fix(t.originalEvent);s.type=e,s.device=W===ot||W===Nt?"touch":W===Un?"keyboard":"mouse",Be("forceTouchDevice")&&W===Zr&&(s.device="touch"),s.touches=a,s.changedTouches=o,s.target=r.target?r.target:t.target;let c=s.device!=="keyboard"&&yt["dcg-longhold"]>0;s.wasLongheld=function(){return c},clearTimeout(Eg),s.type==="dcg-tapstart"&&s.device!=="keyboard"&&s.touches.length===1&&(Eg=setTimeout(()=>{Re("dcg-longhold",t,r)},rw)),s.target&&s.target.nodeName&&s.target.nodeName.toLowerCase()==="a"&&s.type==="dcg-tap"&&s.device==="keyboard"&&s.target.click&&s.target.click(),de("trigger event:"+s.type),pe(s.target).trigger(s)},Eo=function(e){let t=Dt,r=!!Dt.length,n=document.querySelectorAll(".dcg-tap-container."+Hn+" .dcg-hovered"),a=Array.from(n).filter(Kn),o=[],i=[],s=[];if(e){let c=Bs(e);_g(c).forEach(h=>{(!r||t.indexOf(h)!==-1)&&(a.indexOf(h)===-1&&s.push(h),o.push(h))})}for(let c of a)o.indexOf(c)===-1&&i.push(c);i.forEach(c=>{c&&c.classList.remove("dcg-hovered"),pe(c).trigger("tipsyhide")}),s.forEach(c=>{c&&c.classList.add("dcg-hovered"),pe(c).trigger("tipsyshow")})},Ao=function(e){for(let t of Fe)if(t.pointerId===e)return!0;return!1},zs=function(e){for(let t=0;t<Fe.length;t++)Fe[t].pointerId===e&&Fe.splice(t,1)},Ig=function(e){W===Vn&&To(Nt,e),Us(),Eo(null),Fe.push(e.originalEvent),Re("dcg-tapstart",e,{touches:Fe,changedTouches:[e.originalEvent]})},Dg=function(e){zs(e.originalEvent.pointerId);let t={touches:Fe,changedTouches:[e.originalEvent]};Re("dcg-tapcancel",e,t),Fe.length===0&&Jr(e,t)},Ng=function(e){zs(e.originalEvent.pointerId);let t={touches:Fe,changedTouches:[e.originalEvent]};Re("dcg-tapend",e,t),Fe.length===0&&Jr(e,t)},Do=function(e){return e.originalEvent.pointerType==="touch"},en=function(e,t){e.trim().split(/\s+/).forEach(r=>{let n=aw?{passive:!1}:void 0;document.addEventListener(r,a=>{de("document.on:"+a.type),t(pe.event.fix(a))},n)})};en("pointerdown MSPointerDown",e=>{if(!(W===Zr||W===ot||!Do(e))){if(Ao(e.originalEvent.pointerId)){de("exit. pointer id already exists: "+e.originalEvent.pointerId);return}Ig(e)}});en("pointermove MSPointerMove",e=>{W===Zr||W===ot||!Do(e)||(Ao(e.originalEvent.pointerId)||(de("pointer id already exists: "+e.originalEvent.pointerId),Ig(e)),zs(e.originalEvent.pointerId),Fe.push(e.originalEvent),Re("dcg-tapmove",e,{touches:Fe,changedTouches:[e.originalEvent]}))});pe(document).on("pointercancel MSPointerCancel",e=>{if(de("document.on:"+e.type),W!==Nt||!Do(e)||!Ao(e.originalEvent.pointerId))return;Dg(e);let t;for(;t=Fe.pop();){let r=pe.Event(t,{originalEvent:t});Dg(r)}});pe(document).on("pointerup MSPointerUp",e=>{if(de("document.on:"+e.type),W!==Nt||!Do(e)||!Ao(e.originalEvent.pointerId))return;Ng(e);let t;for(;t=Fe.pop();){let r=pe.Event(t,{originalEvent:t});Ng(r)}});var aw=(function(){let e=!1;try{let t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",()=>{},t),window.removeEventListener("test",()=>{},t)}catch(t){}return e})();en("touchstart",e=>{W===Zr||W===Nt||(Us(),W===Vn&&To(ot,e),Eo(null),Re("dcg-tapstart",e,{touches:e.originalEvent.touches,changedTouches:e.originalEvent.changedTouches}))});en("touchmove",e=>{W===ot&&Re("dcg-tapmove",e,{touches:e.originalEvent.touches,changedTouches:e.originalEvent.changedTouches})});en("touchcancel",e=>{if(W!==ot)return;let t={touches:e.originalEvent.touches,changedTouches:e.originalEvent.changedTouches};Re("dcg-tapcancel",e,t),e.originalEvent.touches.length===0&&Jr(e,t)});en("touchend",e=>{if(W!==ot)return;let t={touches:e.originalEvent.touches,changedTouches:e.originalEvent.changedTouches};Re("dcg-tapend",e,t),e.originalEvent.touches.length===0&&Jr(e,t)});function ow(){return!!(W===ot||W===Nt||Xr())}pe(document).on("mousedown",e=>{if(de("document.on:"+e.type),!(e.button===1||e.button===2)){if(ow()){!e.target.matches("input, textarea, select")&&Kn(e.target)&&e.preventDefault(),de("abort mousedown: "+W+":"+Xr());return}To(Zr,e),Re("dcg-tapstart",e,{touches:[e],changedTouches:[e]})}});var iw=function(e){return!(e instanceof Element)||!Kn(e)||e.closest(".dcg-do-blur")||e.closest(".dcg-text-selectable")?!1:!!e.closest(".dcg-do-not-blur")},Us=function(){try{let e=window.getSelection();if((e==null?void 0:e.rangeCount)===1){let t=e.getRangeAt(0).commonAncestorContainer;t.nodeType===Node.TEXT_NODE&&(t=t.parentNode),t&&t.closest(".dcg-text-selectable")&&e.removeAllRanges()}}catch(e){}};pe(document).on("mousedown",e=>{de("document.on:"+e.type);let t=e.target;iw(t)&&(!Lg(t)||t.classList.contains("dcg-do-not-blur"))&&e.preventDefault(),Us()});pe(document).on("mouseleave",e=>{if(de("document.on:"+e.type),W===Vn){if(Xr()){de("abort mouseleave: "+W+":"+Xr());return}Eo(null)}});pe(document).on("mousemove",e=>{if(de("document.on:"+e.type),!(e.button===1||e.button===2)&&!(W===ot||W===Nt)){if(Xr()){de("abort mousemove: "+W+":"+Xr());return}Eo(e.target),Re("dcg-tapmove",e,{touches:[e],changedTouches:[e]})}});pe(document).on("mouseup",e=>{if(de("document.on:"+e.type),e.button===1||e.button===2||W!==Zr)return;let t={touches:[],changedTouches:[e]};Re("dcg-tapend",e,t),Jr(e,t)});pe(document).on("keydown",e=>{if(de("document.on:"+e.type),!(!Os(e)||!Kn(e.target))&&W!==Un){if(e.target.matches('a:not([ontap]), button:not([ontap]), input:not([type="checkbox"]), textarea, select, [role="textbox"], [contenteditable="true"], summary'))return;e.preventDefault(),To(Un,e),Re("dcg-tapstart",e,{touches:[e],changedTouches:[e]})}});pe(document).on("keyup",e=>{if(de("document.on:"+e.type),!Os(e)||!Kn(e.target)||W!==Un)return;let t={touches:[],changedTouches:[e]};Re("dcg-tapend",e,t),Jr(e,t)});function Og(){var e;return(e=document.fonts)!=null&&e.ready?document.fonts.ready:Promise.resolve()}var Gg=!1;function $g(){Gg||(Gg=!0,window.TestBridge={})}Pg(document.body);Og().then(()=>{document.querySelector(".dcg-loading-div-container").remove(),$g()});})();
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
