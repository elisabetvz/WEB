(function(t){var K;(function(d,f){"function"===typeof define&&define.amd?define(function(){return f(d)}):f(d)})(this,function(d){K=function(){function f(a){return null==a?String(a):r[M.call(a)]||"object"}function g(a){return"function"==f(a)}function h(a){return null!=a&&a==a.window}function y(a){return"object"==f(a)}function n(a){return y(a)&&!h(a)&&Object.getPrototypeOf(a)==Object.prototype}function p(a){var e=!!a&&"length"in a&&a.length,b=m.type(a);return"function"!=b&&!h(a)&&("array"==b||0===e||
"number"==typeof e&&0<e&&e-1 in a)}function R(a){return v.call(a,function(a){return null!=a})}function S(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function A(a){return a in U?U[a]:U[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function t(a,e){return"number"!=typeof e||X[S(a)]?e:e+"px"}function H(a){return"children"in a?k.call(a.children):m.map(a.childNodes,function(a){if(1==a.nodeType)return a})}function N(a,
e){var b,l=a?a.length:0;for(b=0;b<l;b++)this[b]=a[b];this.length=l;this.selector=e||""}function O(a,e,b){for(z in e)b&&(n(e[z])||Y(e[z]))?(n(e[z])&&!n(a[z])&&(a[z]={}),Y(e[z])&&!Y(a[z])&&(a[z]=[]),O(a[z],e[z],b)):e[z]!==w&&(a[z]=e[z])}function I(a,e){return null==e?m(a):m(a).filter(e)}function E(a,e,b,l){return g(e)?e.call(a,b,l):e}function F(a,e){var b=a.className||"",l=b&&b.baseVal!==w;if(e===w)return l?b.baseVal:b;l?b.baseVal=e:a.className=e}function c(a){try{return a?"true"==a||("false"==a?!1:
"null"==a?null:+a+""==a?+a:/^[\[\{]/.test(a)?m.parseJSON(a):a):a}catch(ka){return a}}function J(a,e){e(a);for(var b=0,l=a.childNodes.length;b<l;b++)J(a.childNodes[b],e)}var w,z,L,D=[],C=D.concat,v=D.filter,k=D.slice,u=d.document,G={},U={},X={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},V=/^\s*<(\w+|!)[^>]*>/,x=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,W=/^(?:body|html)$/i,ba=/([A-Z])/g,Z="val css html text data width height offset".split(" "),
Q=u.createElement("table"),b=u.createElement("tr"),a={tr:u.createElement("tbody"),tbody:Q,thead:Q,tfoot:Q,td:b,th:b,"*":u.createElement("div")},e=/complete|loaded|interactive/,l=/^[\w-]*$/,r={},M=r.toString,B={},ca=u.createElement("div"),ja={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},
Y=Array.isArray||function(a){return a instanceof Array};B.matches=function(a,e){if(!e||!a||1!==a.nodeType)return!1;var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(b)return b.call(a,e);var l=a.parentNode;(b=!l)&&(l=ca).appendChild(a);e=~B.qsa(l,e).indexOf(a);b&&ca.removeChild(a);return e};var fa=function(a){return a.replace(/-+(.)?/g,function(a,e){return e?e.toUpperCase():""})};var ha=function(a){return v.call(a,function(e,b){return a.indexOf(e)==
b})};B.fragment=function(e,b,l){var r;x.test(e)&&(r=m(u.createElement(RegExp.$1)));if(!r){e.replace&&(e=e.replace(aa,"<$1></$2>"));b===w&&(b=V.test(e)&&RegExp.$1);b in a||(b="*");var c=a[b];c.innerHTML=""+e;r=m.each(k.call(c.childNodes),function(){c.removeChild(this)})}if(n(l)){var ia=m(r);m.each(l,function(a,e){if(-1<Z.indexOf(a))ia[a](e);else ia.attr(a,e)})}return r};B.Z=function(a,e){return new N(a,e)};B.isZ=function(a){return a instanceof B.Z};B.init=function(a,e){if(a)if("string"==typeof a)if(a=
a.trim(),"<"==a[0]&&V.test(a))e=B.fragment(a,RegExp.$1,e),a=null;else{if(e!==w)return m(e).find(a);e=B.qsa(u,a)}else{if(g(a))return m(u).ready(a);if(B.isZ(a))return a;if(Y(a))e=R(a);else if(y(a))e=[a],a=null;else if(V.test(a))e=B.fragment(a.trim(),RegExp.$1,e),a=null;else{if(e!==w)return m(e).find(a);e=B.qsa(u,a)}}else return B.Z();return B.Z(e,a)};var m=function(a,e){return B.init(a,e)};m.extend=function(a){var e=k.call(arguments,1);if("boolean"==typeof a){var b=a;a=e.shift()}e.forEach(function(e){O(a,
e,b)});return a};B.qsa=function(a,e){var b,r="#"==e[0],c=!r&&"."==e[0],M=r||c?e.slice(1):e,f=l.test(M);return a.getElementById&&f&&r?(b=a.getElementById(M))?[b]:[]:1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType?[]:k.call(f&&!r&&a.getElementsByClassName?c?a.getElementsByClassName(M):a.getElementsByTagName(e):a.querySelectorAll(e))};m.contains=u.documentElement.contains?function(a,e){return a!==e&&a.contains(e)}:function(a,e){for(;e&&(e=e.parentNode);)if(e===a)return!0;return!1};m.type=f;m.isFunction=
g;m.isWindow=h;m.isArray=Y;m.isPlainObject=n;m.isEmptyObject=function(a){for(var e in a)return!1;return!0};m.isNumeric=function(a){var e=Number(a),b=typeof a;return null!=a&&"boolean"!=b&&("string"!=b||a.length)&&!isNaN(e)&&isFinite(e)||!1};m.inArray=function(a,e,b){return D.indexOf.call(e,a,b)};m.camelCase=fa;m.trim=function(a){return null==a?"":String.prototype.trim.call(a)};m.uuid=0;m.support={};m.expr={};m.noop=function(){};m.map=function(a,e){var b=[],l;if(p(a))for(l=0;l<a.length;l++){var r=
e(a[l],l);null!=r&&b.push(r)}else for(l in a)r=e(a[l],l),null!=r&&b.push(r);return 0<b.length?m.fn.concat.apply([],b):b};m.each=function(a,e){var b;if(p(a))for(b=0;b<a.length&&!1!==e.call(a[b],b,a[b]);b++);else for(b in a)if(!1===e.call(a[b],b,a[b]))break;return a};m.grep=function(a,e){return v.call(a,e)};d.JSON&&(m.parseJSON=JSON.parse);m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,e){r["[object "+e+"]"]=e.toLowerCase()});m.fn={constructor:B.Z,length:0,
forEach:D.forEach,reduce:D.reduce,push:D.push,sort:D.sort,splice:D.splice,indexOf:D.indexOf,concat:function(){var a,e=[];for(a=0;a<arguments.length;a++){var b=arguments[a];e[a]=B.isZ(b)?b.toArray():b}return C.apply(B.isZ(this)?this.toArray():this,e)},map:function(a){return m(m.map(this,function(e,b){return a.call(e,b,e)}))},slice:function(){return m(k.apply(this,arguments))},ready:function(a){e.test(u.readyState)&&u.body?a(m):u.addEventListener("DOMContentLoaded",function(){a(m)},!1);return this},
get:function(a){return a===w?k.call(this):this[0<=a?a:a+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(a){D.every.call(this,function(e,b){return!1!==a.call(e,b,e)});return this},filter:function(a){return g(a)?this.not(this.not(a)):m(v.call(this,function(e){return B.matches(e,a)}))},add:function(a,e){return m(ha(this.concat(m(a,e))))},is:function(a){return 0<
this.length&&B.matches(this[0],a)},not:function(a){var e=[];if(g(a)&&a.call!==w)this.each(function(b){a.call(this,b)||e.push(this)});else{var b="string"==typeof a?this.filter(a):p(a)&&g(a.item)?k.call(a):m(a);this.forEach(function(a){0>b.indexOf(a)&&e.push(a)})}return m(e)},has:function(a){return this.filter(function(){return y(a)?m.contains(this,a):m(this).find(a).size()})},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!y(a)?a:m(a)},last:function(){var a=
this[this.length-1];return a&&!y(a)?a:m(a)},find:function(a){var e=this;return a?"object"==typeof a?m(a).filter(function(){var a=this;return D.some.call(e,function(e){return m.contains(e,a)})}):1==this.length?m(B.qsa(this[0],a)):this.map(function(){return B.qsa(this,a)}):m()},closest:function(a,e){var b=[],l="object"==typeof a&&m(a);this.each(function(r,c){for(;c&&!(l?0<=l.indexOf(c):B.matches(c,a));)c=c!==e&&!(null!=c&&c.nodeType==c.DOCUMENT_NODE)&&c.parentNode;c&&0>b.indexOf(c)&&b.push(c)});return m(b)},
parents:function(a){for(var e=[],b=this;0<b.length;)b=m.map(b,function(a){if((a=a.parentNode)&&(null==a||a.nodeType!=a.DOCUMENT_NODE)&&0>e.indexOf(a))return e.push(a),a});return I(e,a)},parent:function(a){return I(ha(this.pluck("parentNode")),a)},children:function(a){return I(this.map(function(){return H(this)}),a)},contents:function(){return this.map(function(){return this.contentDocument||k.call(this.childNodes)})},siblings:function(a){return I(this.map(function(a,e){return v.call(H(e.parentNode),
function(a){return a!==e})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return m.map(this,function(e){return e[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display="");if("none"==getComputedStyle(this,"").getPropertyValue("display")){var a=this.style,e=this.nodeName;if(!G[e]){var b=u.createElement(e);u.body.appendChild(b);var l=getComputedStyle(b,"").getPropertyValue("display");b.parentNode.removeChild(b);"none"==
l&&(l="block");G[e]=l}a.display=G[e]}})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var e=g(a);if(this[0]&&!e)var b=m(a).get(0),l=b.parentNode||1<this.length;return this.each(function(r){m(this).wrapAll(e?a.call(this,r):l?b.cloneNode(!0):b)})},wrapAll:function(a){if(this[0]){m(this[0]).before(a=m(a));for(var e;(e=a.children()).length;)a=e.first();m(a).append(this)}return this},wrapInner:function(a){var e=g(a);return this.each(function(b){var l=m(this),r=l.contents();
b=e?a.call(this,b):a;r.length?r.wrapAll(b):l.append(b)})},unwrap:function(){this.parent().each(function(){m(this).replaceWith(m(this).children())});return this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(a){return this.each(function(){var e=m(this);(a===w?"none"==e.css("display"):a)?e.show():e.hide()})},prev:function(a){return m(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return m(this.pluck("nextElementSibling")).filter(a||
"*")},html:function(a){return 0 in arguments?this.each(function(e){var b=this.innerHTML;m(this).empty().append(E(this,a,e,b))}):0 in this?this[0].innerHTML:null},text:function(a){return 0 in arguments?this.each(function(e){e=E(this,a,e,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this.pluck("textContent").join(""):null},attr:function(a,e){var b;return"string"!=typeof a||1 in arguments?this.each(function(b){if(1===this.nodeType)if(y(a))for(z in a){var l=z;b=a[z];null==b?this.removeAttribute(l):
this.setAttribute(l,b)}else l=a,b=E(this,e,b,this.getAttribute(a)),null==b?this.removeAttribute(l):this.setAttribute(l,b)}):0 in this&&1==this[0].nodeType&&null!=(b=this[0].getAttribute(a))?b:w},removeAttr:function(a){return this.each(function(){1===this.nodeType&&a.split(" ").forEach(function(a){this.removeAttribute(a)},this)})},prop:function(a,e){a=ja[a]||a;return 1 in arguments?this.each(function(b){this[a]=E(this,e,b,this[a])}):this[0]&&this[0][a]},removeProp:function(a){a=ja[a]||a;return this.each(function(){delete this[a]})},
data:function(a,e){var b="data-"+a.replace(ba,"-$1").toLowerCase();b=1 in arguments?this.attr(b,e):this.attr(b);return null!==b?c(b):w},val:function(a){return 0 in arguments?(null==a&&(a=""),this.each(function(e){this.value=E(this,a,e,this.value)})):this[0]&&(this[0].multiple?m(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(a){if(a)return this.each(function(e){var b=m(this);e=E(this,a,e,b.offset());var l=b.offsetParent().offset();e=
{top:e.top-l.top,left:e.left-l.left};"static"==b.css("position")&&(e.position="relative");b.css(e)});if(!this.length)return null;if(u.documentElement!==this[0]&&!m.contains(u.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+d.pageXOffset,top:e.top+d.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(a,e){if(2>arguments.length){var b=this[0];if("string"==typeof a)return b?b.style[fa(a)]||getComputedStyle(b,"").getPropertyValue(a):
void 0;if(Y(a)){if(!b)return;var l={},r=getComputedStyle(b,"");m.each(a,function(a,e){l[e]=b.style[fa(e)]||r.getPropertyValue(e)});return l}}var c="";if("string"==f(a))e||0===e?c=S(a)+":"+t(a,e):this.each(function(){this.style.removeProperty(S(a))});else for(z in a)a[z]||0===a[z]?c+=S(z)+":"+t(z,a[z])+";":this.each(function(){this.style.removeProperty(S(z))});return this.each(function(){this.style.cssText+=";"+c})},index:function(a){return a?this.indexOf(m(a)[0]):this.parent().children().indexOf(this[0])},
hasClass:function(a){return a?D.some.call(this,function(a){return this.test(F(a))},A(a)):!1},addClass:function(a){return a?this.each(function(e){if("className"in this){L=[];var b=F(this);E(this,a,e,b).split(/\s+/g).forEach(function(a){m(this).hasClass(a)||L.push(a)},this);L.length&&F(this,b+(b?" ":"")+L.join(" "))}}):this},removeClass:function(a){return this.each(function(e){if("className"in this){if(a===w)return F(this,"");L=F(this);E(this,a,e,L).split(/\s+/g).forEach(function(a){L=L.replace(A(a),
" ")});F(this,L.trim())}})},toggleClass:function(a,e){return a?this.each(function(b){var l=m(this);E(this,a,b,F(this)).split(/\s+/g).forEach(function(a){(e===w?!l.hasClass(a):e)?l.addClass(a):l.removeClass(a)})}):this},scrollTop:function(a){if(this.length){var e="scrollTop"in this[0];return a===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=a}:function(){this.scrollTo(this.scrollX,a)})}},scrollLeft:function(a){if(this.length){var e="scrollLeft"in this[0];return a===
w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=a}:function(){this.scrollTo(a,this.scrollY)})}},position:function(){if(this.length){var a=this[0],e=this.offsetParent(),b=this.offset(),l=W.test(e[0].nodeName)?{top:0,left:0}:e.offset();b.top-=parseFloat(m(a).css("margin-top"))||0;b.left-=parseFloat(m(a).css("margin-left"))||0;l.top+=parseFloat(m(e[0]).css("border-top-width"))||0;l.left+=parseFloat(m(e[0]).css("border-left-width"))||0;return{top:b.top-l.top,left:b.left-
l.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||u.body;a&&!W.test(a.nodeName)&&"static"==m(a).css("position");)a=a.offsetParent;return a})}};m.fn.detach=m.fn.remove;["width","height"].forEach(function(a){var e=a.replace(/./,function(a){return a[0].toUpperCase()});m.fn[a]=function(b){var l,r=this[0];return b===w?h(r)?r["inner"+e]:null!=r&&r.nodeType==r.DOCUMENT_NODE?r.documentElement["scroll"+e]:(l=this.offset())&&l[a]:this.each(function(e){r=m(this);r.css(a,
E(this,b,e,r[a]()))})}});["after","prepend","before","append"].forEach(function(a,e){var b=e%2;m.fn[a]=function(){var a,l=m.map(arguments,function(e){var b=[];a=f(e);return"array"==a?(e.forEach(function(a){if(a.nodeType!==w)return b.push(a);if(m.zepto.isZ(a))return b=b.concat(a.get());b=b.concat(B.fragment(a))}),b):"object"==a||null==e?e:B.fragment(e)}),r,c=1<this.length;return 1>l.length?this:this.each(function(a,M){r=b?M:M.parentNode;M=0==e?M.nextSibling:1==e?M.firstChild:2==e?M:null;var f=m.contains(u.documentElement,
r);l.forEach(function(a){if(c)a=a.cloneNode(!0);else if(!r)return m(a).remove();r.insertBefore(a,M);f&&J(a,function(a){if(!(null==a.nodeName||"SCRIPT"!==a.nodeName.toUpperCase()||a.type&&"text/javascript"!==a.type||a.src)){var e=a.ownerDocument?a.ownerDocument.defaultView:d;e.eval.call(e,a.innerHTML)}})})})};m.fn[b?a+"To":"insert"+(e?"Before":"After")]=function(e){m(e)[a](this);return this}});B.Z.prototype=N.prototype=m.fn;B.uniq=ha;B.deserializeValue=c;m.zepto=B;return m}();(function(f){function g(c){return c._zid||
(c._zid=t++)}function h(c,f,d,h){f=n(f);if(f.ns)var v=new RegExp("(?:^| )"+f.ns.replace(" "," .* ?")+"(?: |$)");return(E[g(c)]||[]).filter(function(c){return c&&(!f.e||c.e==f.e)&&(!f.ns||v.test(c.ns))&&(!d||g(c.fn)===g(d))&&(!h||c.sel==h)})}function n(c){c=(""+c).split(".");return{e:c[0],ns:c.slice(1).sort().join(" ")}}function p(f){return w[f]||c&&J[f]||f}function T(d,k,h,G,q,y,z){var v=g(d),u=E[v]||(E[v]=[]);k.split(/\s/).forEach(function(g){if("ready"==g)return f(document).ready(h);var k=n(g);
k.fn=h;k.sel=q;k.e in w&&(h=function(c){var b=c.relatedTarget;if(!b||b!==this&&!f.contains(this,b))return k.fn.apply(this,arguments)});var v=(k.del=y)||h;k.proxy=function(c){c=S(c);if(!c.isImmediatePropagationStopped()){c.data=G;var b=v.apply(d,c._args==H?[c]:[c].concat(c._args));!1===b&&(c.preventDefault(),c.stopPropagation());return b}};k.i=u.length;u.push(k);"addEventListener"in d&&d.addEventListener(p(k.e),k.proxy,k.del&&!c&&k.e in J||!!z)})}function R(f,d,u,G,q){var k=g(f);(d||"").split(/\s/).forEach(function(d){h(f,
d,u,G).forEach(function(d){delete E[k][d.i];"removeEventListener"in f&&f.removeEventListener(p(d.e),d.proxy,d.del&&!c&&d.e in J||!!q)})})}function S(c,d){if(d||!c.isDefaultPrevented)if(d||(d=c),f.each(C,function(f,g){var k=d[f];c[f]=function(){this[g]=z;return k&&k.apply(d,arguments)};c[g]=L}),c.timeStamp||(c.timeStamp=Date.now()),d.defaultPrevented!==H?d.defaultPrevented:"returnValue"in d?!1===d.returnValue:d.getPreventDefault&&d.getPreventDefault())c.isDefaultPrevented=z;return c}function A(c){var f,
d={originalEvent:c};for(f in c)D.test(f)||c[f]===H||(d[f]=c[f]);return S(d,c)}var t=1,H,N=Array.prototype.slice,O=f.isFunction,I=function(c){return"string"==typeof c},E={},F={},c="onfocusin"in d,J={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};F.click=F.mousedown=F.mouseup=F.mousemove="MouseEvents";f.event={add:T,remove:R};f.proxy=function(c,d){var k=2 in arguments&&N.call(arguments,2);if(O(c)){var v=function(){return c.apply(d,k?k.concat(N.call(arguments)):arguments)};
v._zid=g(c);return v}if(I(d))return k?(k.unshift(c[d],c),f.proxy.apply(null,k)):f.proxy(c[d],c);throw new TypeError("expected function");};f.fn.bind=function(c,f,d){return this.on(c,f,d)};f.fn.unbind=function(c,f){return this.off(c,f)};f.fn.one=function(c,f,d,g){return this.on(c,f,d,g,1)};var z=function(){return!0},L=function(){return!1},D=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,C={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};
f.fn.delegate=function(c,f,d){return this.on(f,c,d)};f.fn.undelegate=function(c,f,d){return this.off(f,c,d)};f.fn.live=function(c,d){f(document.body).delegate(this.selector,c,d);return this};f.fn.die=function(c,d){f(document.body).undelegate(this.selector,c,d);return this};f.fn.on=function(c,d,g,h,q){var k,v,u=this;if(c&&!I(c))return f.each(c,function(c,f){u.on(c,d,g,f,q)}),u;I(d)||O(h)||!1===h||(h=g,g=d,d=H);if(h===H||!1===g)h=g,g=H;!1===h&&(h=L);return u.each(function(u,G){q&&(k=function(c){R(G,
c.type,h);return h.apply(this,arguments)});d&&(v=function(c){var g=f(c.target).closest(d,G).get(0);if(g&&g!==G){var v=f.extend(A(c),{currentTarget:g,liveFired:G});return(k||h).apply(g,[v].concat(N.call(arguments,1)))}});T(G,c,h,g,d,v||k)})};f.fn.off=function(c,d,g){var k=this;if(c&&!I(c))return f.each(c,function(c,f){k.off(c,d,f)}),k;I(d)||O(g)||!1===g||(g=d,d=H);!1===g&&(g=L);return k.each(function(){R(this,c,g,d)})};f.fn.trigger=function(c,d){c=I(c)||f.isPlainObject(c)?f.Event(c):S(c);c._args=d;
return this.each(function(){if(c.type in J&&"function"==typeof this[c.type])this[c.type]();else"dispatchEvent"in this?this.dispatchEvent(c):f(this).triggerHandler(c,d)})};f.fn.triggerHandler=function(c,d){var g,k;this.each(function(v,u){g=A(I(c)?f.Event(c):c);g._args=d;g.target=u;f.each(h(u,c.type||c),function(c,d){k=d.proxy(g);if(g.isImmediatePropagationStopped())return!1})});return k};"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(c){f.fn[c]=
function(d){return 0 in arguments?this.bind(c,d):this.trigger(c)}});f.Event=function(c,d){I(c)||(d=c,c=d.type);var f=document.createEvent(F[c]||"Events"),g=!0;if(d)for(var k in d)"bubbles"==k?g=!!d[k]:f[k]=d[k];f.initEvent(c,g,!0);return S(f)}})(K);(function(f){function g(c,d,g,h){if(c.global)return c=d||E,g=f.Event(g),f(c).trigger(g,h),!g.isDefaultPrevented()}function h(c){c.global&&0===f.active++&&g(c,null,"ajaxStart")}function n(c,d){var f=d.context;if(!1===d.beforeSend.call(f,c,d)||!1===g(d,f,
"ajaxBeforeSend",[c,d]))return!1;g(d,f,"ajaxSend",[c,d])}function p(c,d,f,h){var k=f.context;f.success.call(k,c,"success",d);h&&h.resolveWith(k,[c,"success",d]);g(f,k,"ajaxSuccess",[d,f,c]);R("success",d,f)}function T(c,d,f,h,q){var k=h.context;h.error.call(k,f,d,c);q&&q.rejectWith(k,[f,d,c]);g(h,k,"ajaxError",[f,h,c||d]);R(d,f,h)}function R(c,d,h){var k=h.context;h.complete.call(k,d,c);g(h,k,"ajaxComplete",[d,h]);h.global&&!--f.active&&g(h,null,"ajaxStop")}function t(){}function A(c){c&&(c=c.split(";",
2)[0]);return c&&("text/html"==c?"html":"application/json"==c?"json":w.test(c)?"script":z.test(c)&&"xml")||"text"}function C(c,d){return""==d?c:(c+"&"+d).replace(/[&?]{1,2}/,"?")}function H(c){c.processData&&c.data&&"string"!=f.type(c.data)&&(c.data=f.param(c.data,c.traditional));!c.data||c.type&&"GET"!=c.type.toUpperCase()&&"jsonp"!=c.dataType||(c.url=C(c.url,c.data),c.data=void 0)}function N(c,d,g,h){f.isFunction(d)&&(h=g,g=d,d=void 0);f.isFunction(g)||(h=g,g=void 0);return{url:c,data:d,success:g,
dataType:h}}function O(c,d,g,h){var k,q=f.isArray(d),v=f.isPlainObject(d);f.each(d,function(d,u){k=f.type(u);h&&(d=g?h:h+"["+(v||"object"==k||"array"==k?d:"")+"]");!h&&q?c.add(u.name,u.value):"array"==k||!g&&"object"==k?O(c,u,g,d):c.add(d,u)})}var I=+new Date,E=d.document,F,c,J=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,z=/^(?:text|application)\/xml/i,L=/^\s*$/,D=E.createElement("a");D.href=d.location.href;f.active=0;f.ajaxJSONP=function(c,g){if(!("type"in
c))return f.ajax(c);var h=c.jsonpCallback,k=(f.isFunction(h)?h():h)||"Zepto"+I++,q=E.createElement("script"),v=d[k],y,x=function(c){f(q).triggerHandler("error",c||"abort")},w={abort:x},z;g&&g.promise(w);f(q).on("load error",function(h,u){clearTimeout(z);f(q).off().remove();"error"!=h.type&&y?p(y[0],w,c,g):T(null,u||"error",w,c,g);d[k]=v;y&&f.isFunction(v)&&v(y[0]);v=y=void 0});if(!1===n(w,c))return x("abort"),w;d[k]=function(){y=arguments};q.src=c.url.replace(/\?(.+)=\?/,"?$1="+k);E.head.appendChild(q);
0<c.timeout&&(z=setTimeout(function(){x("timeout")},c.timeout));return w};f.ajaxSettings={type:"GET",beforeSend:t,success:t,error:t,complete:t,context:null,global:!0,xhr:function(){return new d.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:t};f.ajax=function(g){var k=f.extend({},g||{}),q=f.Deferred&&
f.Deferred();for(F in f.ajaxSettings)void 0===k[F]&&(k[F]=f.ajaxSettings[F]);h(k);if(!k.crossDomain){var v=E.createElement("a");v.href=k.url;v.href=v.href;k.crossDomain=D.protocol+"//"+D.host!==v.protocol+"//"+v.host}k.url||(k.url=d.location.toString());-1<(v=k.url.indexOf("#"))&&(k.url=k.url.slice(0,v));H(k);var y=k.dataType;(v=/\?.+=\?/.test(k.url))&&(y="jsonp");!1!==k.cache&&(g&&!0===g.cache||"script"!=y&&"jsonp"!=y)||(k.url=C(k.url,"_="+Date.now()));if("jsonp"==y)return v||(k.url=C(k.url,k.jsonp?
k.jsonp+"=?":!1===k.jsonp?"":"callback=?")),f.ajaxJSONP(k,q);g=k.accepts[y];var w={};v=function(c,d){w[c.toLowerCase()]=[c,d]};var z=/^([\w-]+:)\/\//.test(k.url)?RegExp.$1:d.location.protocol,x=k.xhr(),R=x.setRequestHeader,ea;q&&q.promise(x);k.crossDomain||v("X-Requested-With","XMLHttpRequest");v("Accept",g||"*/*");if(g=k.mimeType||g)-1<g.indexOf(",")&&(g=g.split(",",2)[0]),x.overrideMimeType&&x.overrideMimeType(g);(k.contentType||!1!==k.contentType&&k.data&&"GET"!=k.type.toUpperCase())&&v("Content-Type",
k.contentType||"application/x-www-form-urlencoded");if(k.headers)for(c in k.headers)v(c,k.headers[c]);x.setRequestHeader=v;x.onreadystatechange=function(){if(4==x.readyState){x.onreadystatechange=t;clearTimeout(ea);var c=!1;if(200<=x.status&&300>x.status||304==x.status||0==x.status&&"file:"==z){y=y||A(k.mimeType||x.getResponseHeader("content-type"));if("arraybuffer"==x.responseType||"blob"==x.responseType)var d=x.response;else{d=x.responseText;try{d=k.dataFilter==t?d:k.dataFilter.call(k.context,d,
y),"script"==y?(0,eval)(d):"xml"==y?d=x.responseXML:"json"==y&&(d=L.test(d)?null:f.parseJSON(d))}catch(Q){c=Q}if(c)return T(c,"parsererror",x,k,q)}p(d,x,k,q)}else T(x.statusText||null,x.status?"error":"abort",x,k,q)}};if(!1===n(x,k))return x.abort(),T(null,"abort",x,k,q),x;x.open(k.type,k.url,"async"in k?k.async:!0,k.username,k.password);if(k.xhrFields)for(c in k.xhrFields)x[c]=k.xhrFields[c];for(c in w)R.apply(x,w[c]);0<k.timeout&&(ea=setTimeout(function(){x.onreadystatechange=t;x.abort();T(null,
"timeout",x,k,q)},k.timeout));x.send(k.data?k.data:null);return x};f.get=function(){return f.ajax(N.apply(null,arguments))};f.post=function(){var c=N.apply(null,arguments);c.type="POST";return f.ajax(c)};f.getJSON=function(){var c=N.apply(null,arguments);c.dataType="json";return f.ajax(c)};f.fn.load=function(c,d,g){if(!this.length)return this;var h=this,k=c.split(/\s/);c=N(c,d,g);var q=c.success;if(1<k.length){c.url=k[0];var y=k[1]}c.success=function(c){h.html(y?f("<div>").html(c.replace(J,"")).find(y):
c);q&&q.apply(h,arguments)};f.ajax(c);return this};var K=encodeURIComponent;f.param=function(c,d){var g=[];g.add=function(c,d){f.isFunction(d)&&(d=d());null==d&&(d="");this.push(K(c)+"="+K(d))};O(g,c,d);return g.join("&").replace(/%20/g,"+")}})(K);(function(d){d.fn.serializeArray=function(){var f,h,y=[],n=function(d){if(d.forEach)return d.forEach(n);y.push({name:f,value:d})};this[0]&&d.each(this[0].elements,function(g,q){h=q.type;(f=q.name)&&"fieldset"!=q.nodeName.toLowerCase()&&!q.disabled&&"submit"!=
h&&"reset"!=h&&"button"!=h&&"file"!=h&&("radio"!=h&&"checkbox"!=h||q.checked)&&n(d(q).val())});return y};d.fn.serialize=function(){var d=[];this.serializeArray().forEach(function(f){d.push(encodeURIComponent(f.name)+"="+encodeURIComponent(f.value))});return d.join("&")};d.fn.submit=function(f){if(0 in arguments)this.bind("submit",f);else if(this.length){var g=d.Event("submit");this.eq(0).trigger(g);g.isDefaultPrevented()||this.get(0).submit()}return this}})(K);(function(){try{getComputedStyle(void 0)}catch(g){var f=
getComputedStyle;d.getComputedStyle=function(d,g){try{return f(d,g)}catch(ea){return null}}}})();return K});(function(){function d(a){return function(e,b,d,f){b=J(b,f,4);var l=!k(e)&&c.keys(e),r=(l||e).length,g=0<a?0:r-1;3>arguments.length&&(d=e[l?l[g]:g],g+=a);for(var M=b,h=d;0<=g&&g<r;g+=a){var q=l?l[g]:g;h=M(h,e[q],q,e)}return h}}function f(a){return function(e,b,c){b=w(b,c);c=v(e);for(var l=0<a?0:c-1;0<=l&&l<c;l+=a)if(b(e[l],l,e))return l;return-1}}function g(a,e,b){return function(l,d,f){var r=
0,g=v(l);if("number"==typeof f)0<a?r=0<=f?f:Math.max(f+g,r):g=0<=f?Math.min(f+1,g):f+g+1;else if(b&&f&&g)return f=b(l,d),l[f]===d?f:-1;if(d!==d)return f=e(A.call(l,r,g),c.isNaN),0<=f?f+r:-1;for(f=0<a?r:g-1;0<=f&&f<g;f+=a)if(l[f]===d)return f;return-1}}function h(a,e){var b=V.length,d=a.constructor;d=c.isFunction(d)&&d.prototype||t;var f="constructor";for(c.has(a,f)&&!c.contains(e,f)&&e.push(f);b--;)f=V[b],f in a&&a[f]!==d[f]&&!c.contains(e,f)&&e.push(f)}var y=this,n=y._,p=Array.prototype,t=Object.prototype,
C=p.push,A=p.slice,K=t.toString,H=t.hasOwnProperty,N=Array.isArray,O=Object.keys,I=Function.prototype.bind,E=Object.create,F=function(){},c=function(a){if(a instanceof c)return a;if(!(this instanceof c))return new c(a);this._wrapped=a};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=c),exports._=c):y._=c;c.VERSION="1.8.3";var J=function(a,e,b){if(void 0===e)return a;switch(null==b?3:b){case 1:return function(b){return a.call(e,b)};case 2:return function(b,
c){return a.call(e,b,c)};case 3:return function(b,c,l){return a.call(e,b,c,l)};case 4:return function(b,c,l,d){return a.call(e,b,c,l,d)}}return function(){return a.apply(e,arguments)}},w=function(a,e,b){return null==a?c.identity:c.isFunction(a)?J(a,e,b):c.isObject(a)?c.matcher(a):c.property(a)};c.iteratee=function(a,e){return w(a,e,Infinity)};var z=function(a,e){return function(b){var c=arguments.length;if(2>c||null==b)return b;for(var l=1;l<c;l++)for(var d=arguments[l],f=a(d),g=f.length,h=0;h<g;h++){var k=
f[h];e&&void 0!==b[k]||(b[k]=d[k])}return b}},L=function(a){if(!c.isObject(a))return{};if(E)return E(a);F.prototype=a;a=new F;F.prototype=null;return a},D=function(a){return function(e){return null==e?void 0:e[a]}},P=Math.pow(2,53)-1,v=D("length"),k=function(a){a=v(a);return"number"==typeof a&&0<=a&&a<=P};c.each=c.forEach=function(a,e,b){e=J(e,b);var l;if(k(a))for(b=0,l=a.length;b<l;b++)e(a[b],b,a);else{var d=c.keys(a);b=0;for(l=d.length;b<l;b++)e(a[d[b]],d[b],a)}return a};c.map=c.collect=function(a,
e,b){e=w(e,b);b=!k(a)&&c.keys(a);for(var l=(b||a).length,d=Array(l),f=0;f<l;f++){var g=b?b[f]:f;d[f]=e(a[g],g,a)}return d};c.reduce=c.foldl=c.inject=d(1);c.reduceRight=c.foldr=d(-1);c.find=c.detect=function(a,e,b){e=k(a)?c.findIndex(a,e,b):c.findKey(a,e,b);if(void 0!==e&&-1!==e)return a[e]};c.filter=c.select=function(a,e,b){var l=[];e=w(e,b);c.each(a,function(a,b,c){e(a,b,c)&&l.push(a)});return l};c.reject=function(a,e,b){return c.filter(a,c.negate(w(e)),b)};c.every=c.all=function(a,e,b){e=w(e,b);
b=!k(a)&&c.keys(a);for(var l=(b||a).length,d=0;d<l;d++){var f=b?b[d]:d;if(!e(a[f],f,a))return!1}return!0};c.some=c.any=function(a,e,b){e=w(e,b);b=!k(a)&&c.keys(a);for(var l=(b||a).length,d=0;d<l;d++){var f=b?b[d]:d;if(e(a[f],f,a))return!0}return!1};c.contains=c.includes=c.include=function(a,e,b,d){k(a)||(a=c.values(a));if("number"!=typeof b||d)b=0;return 0<=c.indexOf(a,e,b)};c.invoke=function(a,e){var b=A.call(arguments,2),d=c.isFunction(e);return c.map(a,function(a){var c=d?e:a[e];return null==c?
c:c.apply(a,b)})};c.pluck=function(a,e){return c.map(a,c.property(e))};c.where=function(a,e){return c.filter(a,c.matcher(e))};c.findWhere=function(a,e){return c.find(a,c.matcher(e))};c.max=function(a,e,b){var d=-Infinity,l=-Infinity,f;if(null==e&&null!=a){a=k(a)?a:c.values(a);for(var g=0,h=a.length;g<h;g++)b=a[g],b>d&&(d=b)}else e=w(e,b),c.each(a,function(a,b,c){f=e(a,b,c);if(f>l||-Infinity===f&&-Infinity===d)d=a,l=f});return d};c.min=function(a,e,b){var d=Infinity,l=Infinity,f;if(null==e&&null!=
a){a=k(a)?a:c.values(a);for(var g=0,h=a.length;g<h;g++)b=a[g],b<d&&(d=b)}else e=w(e,b),c.each(a,function(a,b,c){f=e(a,b,c);if(f<l||Infinity===f&&Infinity===d)d=a,l=f});return d};c.shuffle=function(a){a=k(a)?a:c.values(a);for(var e=a.length,b=Array(e),d=0,f;d<e;d++)f=c.random(0,d),f!==d&&(b[d]=b[f]),b[f]=a[d];return b};c.sample=function(a,e,b){return null==e||b?(k(a)||(a=c.values(a)),a[c.random(a.length-1)]):c.shuffle(a).slice(0,Math.max(0,e))};c.sortBy=function(a,e,b){e=w(e,b);return c.pluck(c.map(a,
function(a,b,c){return{value:a,index:b,criteria:e(a,b,c)}}).sort(function(a,e){var b=a.criteria,c=e.criteria;if(b!==c){if(b>c||void 0===b)return 1;if(b<c||void 0===c)return-1}return a.index-e.index}),"value")};var u=function(a){return function(e,b,d){var l={};b=w(b,d);c.each(e,function(c,d){d=b(c,d,e);a(l,c,d)});return l}};c.groupBy=u(function(a,e,b){c.has(a,b)?a[b].push(e):a[b]=[e]});c.indexBy=u(function(a,e,b){a[b]=e});c.countBy=u(function(a,e,b){c.has(a,b)?a[b]++:a[b]=1});c.toArray=function(a){return a?
c.isArray(a)?A.call(a):k(a)?c.map(a,c.identity):c.values(a):[]};c.size=function(a){return null==a?0:k(a)?a.length:c.keys(a).length};c.partition=function(a,e,b){e=w(e,b);var d=[],l=[];c.each(a,function(a,b,c){(e(a,b,c)?d:l).push(a)});return[d,l]};c.first=c.head=c.take=function(a,e,b){if(null!=a)return null==e||b?a[0]:c.initial(a,a.length-e)};c.initial=function(a,e,b){return A.call(a,0,Math.max(0,a.length-(null==e||b?1:e)))};c.last=function(a,e,b){if(null!=a)return null==e||b?a[a.length-1]:c.rest(a,
Math.max(0,a.length-e))};c.rest=c.tail=c.drop=function(a,e,b){return A.call(a,null==e||b?1:e)};c.compact=function(a){return c.filter(a,c.identity)};var G=function(a,e,b,d){var l=[],f=0;d=d||0;for(var g=v(a);d<g;d++){var r=a[d];if(k(r)&&(c.isArray(r)||c.isArguments(r))){e||(r=G(r,e,b));var h=0,q=r.length;for(l.length+=q;h<q;)l[f++]=r[h++]}else b||(l[f++]=r)}return l};c.flatten=function(a,e){return G(a,e,!1)};c.without=function(a){return c.difference(a,A.call(arguments,1))};c.uniq=c.unique=function(a,
e,b,d){c.isBoolean(e)||(d=b,b=e,e=!1);null!=b&&(b=w(b,d));d=[];for(var l=[],f=0,g=v(a);f<g;f++){var r=a[f],h=b?b(r,f,a):r;e?(f&&l===h||d.push(r),l=h):b?c.contains(l,h)||(l.push(h),d.push(r)):c.contains(d,r)||d.push(r)}return d};c.union=function(){return c.uniq(G(arguments,!0,!0))};c.intersection=function(a){for(var e=[],b=arguments.length,d=0,f=v(a);d<f;d++){var g=a[d];if(!c.contains(e,g)){for(var h=1;h<b&&c.contains(arguments[h],g);h++);h===b&&e.push(g)}}return e};c.difference=function(a){var e=
G(arguments,!0,!0,1);return c.filter(a,function(a){return!c.contains(e,a)})};c.zip=function(){return c.unzip(arguments)};c.unzip=function(a){for(var e=a&&c.max(a,v).length||0,b=Array(e),d=0;d<e;d++)b[d]=c.pluck(a,d);return b};c.object=function(a,e){for(var b={},c=0,d=v(a);c<d;c++)e?b[a[c]]=e[c]:b[a[c][0]]=a[c][1];return b};c.findIndex=f(1);c.findLastIndex=f(-1);c.sortedIndex=function(a,e,b,c){b=w(b,c,1);e=b(e);c=0;for(var d=v(a);c<d;){var f=Math.floor((c+d)/2);b(a[f])<e?c=f+1:d=f}return c};c.indexOf=
g(1,c.findIndex,c.sortedIndex);c.lastIndexOf=g(-1,c.findLastIndex);c.range=function(a,e,b){null==e&&(e=a||0,a=0);b=b||1;e=Math.max(Math.ceil((e-a)/b),0);for(var c=Array(e),d=0;d<e;d++,a+=b)c[d]=a;return c};var U=function(a,e,b,d,f){if(!(d instanceof e))return a.apply(b,f);e=L(a.prototype);a=a.apply(e,f);return c.isObject(a)?a:e};c.bind=function(a,e){if(I&&a.bind===I)return I.apply(a,A.call(arguments,1));if(!c.isFunction(a))throw new TypeError("Bind must be called on a function");var b=A.call(arguments,
2),d=function(){return U(a,d,e,this,b.concat(A.call(arguments)))};return d};c.partial=function(a){var e=A.call(arguments,1),b=function(){for(var d=0,f=e.length,l=Array(f),g=0;g<f;g++)l[g]=e[g]===c?arguments[d++]:e[g];for(;d<arguments.length;)l.push(arguments[d++]);return U(a,b,this,this,l)};return b};c.bindAll=function(a){var e,b=arguments.length;if(1>=b)throw Error("bindAll must be passed function names");for(e=1;e<b;e++){var d=arguments[e];a[d]=c.bind(a[d],a)}return a};c.memoize=function(a,b){var e=
function(d){var f=e.cache,l=""+(b?b.apply(this,arguments):d);c.has(f,l)||(f[l]=a.apply(this,arguments));return f[l]};e.cache={};return e};c.delay=function(a,b){var e=A.call(arguments,2);return setTimeout(function(){return a.apply(null,e)},b)};c.defer=c.partial(c.delay,c,1);c.throttle=function(a,b,d){var e,f,l,g=null,h=0;d||(d={});var k=function(){h=!1===d.leading?0:c.now();g=null;l=a.apply(e,f);g||(e=f=null)};return function(){var r=c.now();h||!1!==d.leading||(h=r);var M=b-(r-h);e=this;f=arguments;
0>=M||M>b?(g&&(clearTimeout(g),g=null),h=r,l=a.apply(e,f),g||(e=f=null)):g||!1===d.trailing||(g=setTimeout(k,M));return l}};c.debounce=function(a,b,d){var e,f,l,g,h,k=function(){var r=c.now()-g;r<b&&0<=r?e=setTimeout(k,b-r):(e=null,d||(h=a.apply(l,f),e||(l=f=null)))};return function(){l=this;f=arguments;g=c.now();var r=d&&!e;e||(e=setTimeout(k,b));r&&(h=a.apply(l,f),l=f=null);return h}};c.wrap=function(a,b){return c.partial(b,a)};c.negate=function(a){return function(){return!a.apply(this,arguments)}};
c.compose=function(){var a=arguments,b=a.length-1;return function(){for(var e=b,c=a[b].apply(this,arguments);e--;)c=a[e].call(this,c);return c}};c.after=function(a,b){return function(){if(1>--a)return b.apply(this,arguments)}};c.before=function(a,b){var e;return function(){0<--a&&(e=b.apply(this,arguments));1>=a&&(b=null);return e}};c.once=c.partial(c.before,2);var X=!{toString:null}.propertyIsEnumerable("toString"),V="valueOf isPrototypeOf toString propertyIsEnumerable hasOwnProperty toLocaleString".split(" ");
c.keys=function(a){if(!c.isObject(a))return[];if(O)return O(a);var b=[],d;for(d in a)c.has(a,d)&&b.push(d);X&&h(a,b);return b};c.allKeys=function(a){if(!c.isObject(a))return[];var b=[],d;for(d in a)b.push(d);X&&h(a,b);return b};c.values=function(a){for(var b=c.keys(a),d=b.length,f=Array(d),g=0;g<d;g++)f[g]=a[b[g]];return f};c.mapObject=function(a,b,d){b=w(b,d);d=c.keys(a);for(var e=d.length,f={},l,g=0;g<e;g++)l=d[g],f[l]=b(a[l],l,a);return f};c.pairs=function(a){for(var b=c.keys(a),d=b.length,f=Array(d),
g=0;g<d;g++)f[g]=[b[g],a[b[g]]];return f};c.invert=function(a){for(var b={},d=c.keys(a),f=0,g=d.length;f<g;f++)b[a[d[f]]]=d[f];return b};c.functions=c.methods=function(a){var b=[],d;for(d in a)c.isFunction(a[d])&&b.push(d);return b.sort()};c.extend=z(c.allKeys);c.extendOwn=c.assign=z(c.keys);c.findKey=function(a,b,d){b=w(b,d);d=c.keys(a);for(var e,f=0,g=d.length;f<g;f++)if(e=d[f],b(a[e],e,a))return e};c.pick=function(a,b,d){var e={},f=a;if(null==f)return e;if(c.isFunction(b)){var g=c.allKeys(f);var l=
J(b,d)}else g=G(arguments,!1,!1,1),l=function(a,b,e){return b in e},f=Object(f);for(var h=0,k=g.length;h<k;h++){var q=g[h],y=f[q];l(y,q,f)&&(e[q]=y)}return e};c.omit=function(a,b,d){if(c.isFunction(b))b=c.negate(b);else{var e=c.map(G(arguments,!1,!1,1),String);b=function(a,b){return!c.contains(e,b)}}return c.pick(a,b,d)};c.defaults=z(c.allKeys,!0);c.create=function(a,b){a=L(a);b&&c.extendOwn(a,b);return a};c.clone=function(a){return c.isObject(a)?c.isArray(a)?a.slice():c.extend({},a):a};c.tap=function(a,
b){b(a);return a};c.isMatch=function(a,b){var e=c.keys(b),d=e.length;if(null==a)return!d;a=Object(a);for(var f=0;f<d;f++){var g=e[f];if(b[g]!==a[g]||!(g in a))return!1}return!0};var x=function(a,b,d,f){if(a===b)return 0!==a||1/a===1/b;if(null==a||null==b)return a===b;a instanceof c&&(a=a._wrapped);b instanceof c&&(b=b._wrapped);var e=K.call(a);if(e!==K.call(b))return!1;switch(e){case "[object RegExp]":case "[object String]":return""+a===""+b;case "[object Number]":return+a!==+a?+b!==+b:0===+a?1/+a===
1/b:+a===+b;case "[object Date]":case "[object Boolean]":return+a===+b}e="[object Array]"===e;if(!e){if("object"!=typeof a||"object"!=typeof b)return!1;var g=a.constructor,l=b.constructor;if(g!==l&&!(c.isFunction(g)&&g instanceof g&&c.isFunction(l)&&l instanceof l)&&"constructor"in a&&"constructor"in b)return!1}d=d||[];f=f||[];for(g=d.length;g--;)if(d[g]===a)return f[g]===b;d.push(a);f.push(b);if(e){g=a.length;if(g!==b.length)return!1;for(;g--;)if(!x(a[g],b[g],d,f))return!1}else{e=c.keys(a);g=e.length;
if(c.keys(b).length!==g)return!1;for(;g--;)if(l=e[g],!c.has(b,l)||!x(a[l],b[l],d,f))return!1}d.pop();f.pop();return!0};c.isEqual=function(a,b){return x(a,b)};c.isEmpty=function(a){return null==a?!0:k(a)&&(c.isArray(a)||c.isString(a)||c.isArguments(a))?0===a.length:0===c.keys(a).length};c.isElement=function(a){return!(!a||1!==a.nodeType)};c.isArray=N||function(a){return"[object Array]"===K.call(a)};c.isObject=function(a){var b=typeof a;return"function"===b||"object"===b&&!!a};c.each("Arguments Function String Number Date RegExp Error".split(" "),
function(a){c["is"+a]=function(b){return K.call(b)==="[object "+a+"]"}});c.isArguments(arguments)||(c.isArguments=function(a){return c.has(a,"callee")});"function"!=typeof/./&&"object"!=typeof Int8Array&&(c.isFunction=function(a){return"function"==typeof a||!1});c.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};c.isNaN=function(a){return c.isNumber(a)&&a!==+a};c.isBoolean=function(a){return!0===a||!1===a||"[object Boolean]"===K.call(a)};c.isNull=function(a){return null===a};c.isUndefined=
function(a){return void 0===a};c.has=function(a,b){return null!=a&&H.call(a,b)};c.noConflict=function(){y._=n;return this};c.identity=function(a){return a};c.constant=function(a){return function(){return a}};c.noop=function(){};c.property=D;c.propertyOf=function(a){return null==a?function(){}:function(b){return a[b]}};c.matcher=c.matches=function(a){a=c.extendOwn({},a);return function(b){return c.isMatch(b,a)}};c.times=function(a,b,c){var e=Array(Math.max(0,a));b=J(b,c,1);for(c=0;c<a;c++)e[c]=b(c);
return e};c.random=function(a,b){null==b&&(b=a,a=0);return a+Math.floor(Math.random()*(b-a+1))};c.now=Date.now||function(){return(new Date).getTime()};N={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};z=c.invert(N);D=function(a){var b=function(b){return a[b]},d="(?:"+c.keys(a).join("|")+")",f=RegExp(d),g=RegExp(d,"g");return function(a){a=null==a?"":""+a;return f.test(a)?a.replace(g,b):a}};c.escape=D(N);c.unescape=D(z);c.result=function(a,b,d){b=null==a?void 0:a[b];void 0===
b&&(b=d);return c.isFunction(b)?b.call(a):b};var aa=0;c.uniqueId=function(a){var b=++aa+"";return a?a+b:b};c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var W=/(.)^/,ba={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Z=/\\|'|\r|\n|\u2028|\u2029/g,Q=function(a){return"\\"+ba[a]};c.template=function(a,b,d){!b&&d&&(b=d);b=c.defaults({},b,c.templateSettings);d=RegExp([(b.escape||W).source,(b.interpolate||W).source,(b.evaluate||
W).source].join("|")+"|$","g");var e=0,f="__p+='";a.replace(d,function(b,c,d,g,l){f+=a.slice(e,l).replace(Z,Q);e=l+b.length;c?f+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'":d?f+="'+\n((__t=("+d+"))==null?'':__t)+\n'":g&&(f+="';\n"+g+"\n__p+='");return b});f+="';\n";b.variable||(f="with(obj||{}){\n"+f+"}\n");f="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+f+"return __p;\n";try{var g=new Function(b.variable||"obj","_",f)}catch(ca){throw ca.source=f,
ca;}d=function(a){return g.call(this,a,c)};d.source="function("+(b.variable||"obj")+"){\n"+f+"}";return d};c.chain=function(a){a=c(a);a._chain=!0;return a};var b=function(a,b){return a._chain?c(b).chain():b};c.mixin=function(a){c.each(c.functions(a),function(e){var d=c[e]=a[e];c.prototype[e]=function(){var a=[this._wrapped];C.apply(a,arguments);return b(this,d.apply(c,a))}})};c.mixin(c);c.each("pop push reverse shift sort splice unshift".split(" "),function(a){var e=p[a];c.prototype[a]=function(){var c=
this._wrapped;e.apply(c,arguments);"shift"!==a&&"splice"!==a||0!==c.length||delete c[0];return b(this,c)}});c.each(["concat","join","slice"],function(a){var e=p[a];c.prototype[a]=function(){return b(this,e.apply(this._wrapped,arguments))}});c.prototype.value=function(){return this._wrapped};c.prototype.valueOf=c.prototype.toJSON=c.prototype.value;c.prototype.toString=function(){return""+this._wrapped};"function"===typeof define&&define.amd&&define("underscore",[],function(){return c})}).call(this);
(function(d){var f="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;if("function"===typeof define&&define.amd)h.define(["underscore","jquery","exports"],function(g,h,q){f.Backbone=d(f,q,g,h)});else if("undefined"!==typeof exports){var g=require("underscore");try{var q=require("jquery")}catch(y){}d(f,exports,g,q)}else f.Backbone=d(f,{},f._,K)})(function(d,f,g,h){var q=d.Backbone,n=Array.prototype.slice;f.VERSION="1.3.3";f.$=h;f.noConflict=function(){d.Backbone=
q;return this};f.emulateHTTP=!1;f.emulateJSON=!1;var p=function(b,a,e){switch(b){case 1:return function(){return g[a](this[e])};case 2:return function(b){return g[a](this[e],b)};case 3:return function(b,c){return g[a](this[e],K(b,this),c)};case 4:return function(b,c,d){return g[a](this[e],K(b,this),c,d)};default:return function(){var b=n.call(arguments);b.unshift(this[e]);return g[a].apply(g,b)}}},C=function(b,a,e){g.each(a,function(a,c){g[c]&&(b.prototype[c]=p(a,c,e))})},K=function(b,a){return g.isFunction(b)?
b:g.isObject(b)&&!a._isModel(b)?A(b):g.isString(b)?function(a){return a.get(b)}:b},A=function(b){var a=g.matches(b);return function(b){return a(b.attributes)}};h=f.Events={};var P=/\s+/,H=function(b,a,e,c,d){var f=0,l;if(e&&"object"===typeof e)for(void 0!==c&&("context"in d)&&void 0===d.context&&(d.context=c),l=g.keys(e);f<l.length;f++)a=H(b,a,l[f],e[l[f]],d);else if(e&&P.test(e))for(l=e.split(P);f<l.length;f++)a=b(a,l[f],c,d);else a=b(a,e,c,d);return a};h.on=function(b,a,e){return N(this,b,a,e)};
var N=function(b,a,e,c,d){b._events=H(O,b._events||{},a,e,{context:c,ctx:b,listening:d});d&&((b._listeners||(b._listeners={}))[d.id]=d);return b};h.listenTo=function(b,a,e){if(!b)return this;var c=b._listenId||(b._listenId=g.uniqueId("l")),d=this._listeningTo||(this._listeningTo={}),f=d[c];f||(f=this._listenId||(this._listenId=g.uniqueId("l")),f=d[c]={obj:b,objId:c,id:f,listeningTo:d,count:0});N(b,a,e,this,f);return this};var O=function(b,a,e,c){if(e){a=b[a]||(b[a]=[]);var d=c.context,f=c.ctx;(c=
c.listening)&&c.count++;a.push({callback:e,context:d,ctx:d||f,listening:c})}return b};h.off=function(b,a,e){if(!this._events)return this;this._events=H(I,this._events,b,a,{context:e,listeners:this._listeners});return this};h.stopListening=function(b,a,e){var c=this._listeningTo;if(!c)return this;b=b?[b._listenId]:g.keys(c);for(var d=0;d<b.length;d++){var f=c[b[d]];if(!f)break;f.obj.off(a,e,this)}return this};var I=function(b,a,e,c){if(b){var d=0,f=c.context;c=c.listeners;if(a||e||f){for(var l=a?[a]:
g.keys(b);d<l.length;d++){a=l[d];var h=b[a];if(!h)break;for(var k=[],q=0;q<h.length;q++){var n=h[q];e&&e!==n.callback&&e!==n.callback._callback||f&&f!==n.context?k.push(n):(n=n.listening)&&0===--n.count&&(delete c[n.id],delete n.listeningTo[n.objId])}k.length?b[a]=k:delete b[a]}return b}for(b=g.keys(c);d<b.length;d++)n=c[b[d]],delete c[n.id],delete n.listeningTo[n.objId]}};h.once=function(b,a,e){var c=H(E,{},b,a,g.bind(this.off,this));"string"===typeof b&&null==e&&(a=void 0);return this.on(c,a,e)};
h.listenToOnce=function(b,a,e){a=H(E,{},a,e,g.bind(this.stopListening,this,b));return this.listenTo(b,a)};var E=function(b,a,e,c){if(e){var d=b[a]=g.once(function(){c(a,d);e.apply(this,arguments)});d._callback=e}return b};h.trigger=function(b){if(!this._events)return this;for(var a=Math.max(0,arguments.length-1),e=Array(a),c=0;c<a;c++)e[c]=arguments[c+1];H(F,this._events,b,void 0,e);return this};var F=function(b,a,e,d){if(b){e=b[a];var f=b.all;e&&f&&(f=f.slice());e&&c(e,d);f&&c(f,[a].concat(d))}return b},
c=function(b,a){var e,c=-1,d=b.length,f=a[0],g=a[1],h=a[2];switch(a.length){case 0:for(;++c<d;)(e=b[c]).callback.call(e.ctx);break;case 1:for(;++c<d;)(e=b[c]).callback.call(e.ctx,f);break;case 2:for(;++c<d;)(e=b[c]).callback.call(e.ctx,f,g);break;case 3:for(;++c<d;)(e=b[c]).callback.call(e.ctx,f,g,h);break;default:for(;++c<d;)(e=b[c]).callback.apply(e.ctx,a)}};h.bind=h.on;h.unbind=h.off;g.extend(f,h);var J=f.Model=function(b,a){var e=b||{};a||(a={});this.cid=g.uniqueId(this.cidPrefix);this.attributes=
{};a.collection&&(this.collection=a.collection);a.parse&&(e=this.parse(e,a)||{});var c=g.result(this,"defaults");e=g.defaults(g.extend({},c,e),c);this.set(e,a);this.changed={};this.initialize.apply(this,arguments)};g.extend(J.prototype,h,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(b){return g.clone(this.attributes)},sync:function(){return f.sync.apply(this,arguments)},get:function(b){return this.attributes[b]},escape:function(b){return g.escape(this.get(b))},
has:function(b){return null!=this.get(b)},matches:function(b){return!!g.iteratee(b,this)(this.attributes)},set:function(b,a,e){if(null==b)return this;if("object"===typeof b){var c=b;e=a}else(c={})[b]=a;e||(e={});if(!this._validate(c,e))return!1;var d=e.unset;b=e.silent;var f=[],h=this._changing;this._changing=!0;h||(this._previousAttributes=g.clone(this.attributes),this.changed={});var k=this.attributes,q=this.changed,n=this._previousAttributes,p;for(p in c)a=c[p],g.isEqual(k[p],a)||f.push(p),g.isEqual(n[p],
a)?delete q[p]:q[p]=a,d?delete k[p]:k[p]=a;this.idAttribute in c&&(this.id=this.get(this.idAttribute));if(!b)for(f.length&&(this._pending=e),a=0;a<f.length;a++)this.trigger("change:"+f[a],this,k[f[a]],e);if(h)return this;if(!b)for(;this._pending;)e=this._pending,this._pending=!1,this.trigger("change",this,e);this._changing=this._pending=!1;return this},unset:function(b,a){return this.set(b,void 0,g.extend({},a,{unset:!0}))},clear:function(b){var a={},e;for(e in this.attributes)a[e]=void 0;return this.set(a,
g.extend({},b,{unset:!0}))},hasChanged:function(b){return null==b?!g.isEmpty(this.changed):g.has(this.changed,b)},changedAttributes:function(b){if(!b)return this.hasChanged()?g.clone(this.changed):!1;var a=this._changing?this._previousAttributes:this.attributes,e={},c;for(c in b){var d=b[c];g.isEqual(a[c],d)||(e[c]=d)}return g.size(e)?e:!1},previous:function(b){return null!=b&&this._previousAttributes?this._previousAttributes[b]:null},previousAttributes:function(){return g.clone(this._previousAttributes)},
fetch:function(b){b=g.extend({parse:!0},b);var a=this,e=b.success;b.success=function(c){var d=b.parse?a.parse(c,b):c;if(!a.set(d,b))return!1;e&&e.call(b.context,a,c,b);a.trigger("sync",a,c,b)};Q(this,b);return this.sync("read",this,b)},save:function(b,a,c){if(null==b||"object"===typeof b){var e=b;c=a}else(e={})[b]=a;c=g.extend({validate:!0,parse:!0},c);var d=c.wait;if(e&&!d){if(!this.set(e,c))return!1}else if(!this._validate(e,c))return!1;var f=this,h=c.success,k=this.attributes;c.success=function(a){f.attributes=
k;var b=c.parse?f.parse(a,c):a;d&&(b=g.extend({},e,b));if(b&&!f.set(b,c))return!1;h&&h.call(c.context,f,a,c);f.trigger("sync",f,a,c)};Q(this,c);e&&d&&(this.attributes=g.extend({},k,e));b=this.isNew()?"create":c.patch?"patch":"update";"patch"!==b||c.attrs||(c.attrs=e);b=this.sync(b,this,c);this.attributes=k;return b},destroy:function(b){b=b?g.clone(b):{};var a=this,c=b.success,d=b.wait,f=function(){a.stopListening();a.trigger("destroy",a,a.collection,b)};b.success=function(e){d&&f();c&&c.call(b.context,
a,e,b);a.isNew()||a.trigger("sync",a,e,b)};var h=!1;this.isNew()?g.defer(b.success):(Q(this,b),h=this.sync("delete",this,b));d||f();return h},url:function(){var b=g.result(this,"urlRoot")||g.result(this.collection,"url")||Z();if(this.isNew())return b;var a=this.get(this.idAttribute);return b.replace(/[^\/]$/,"$&/")+encodeURIComponent(a)},parse:function(b,a){return b},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(b){return this._validate({},
g.extend({},b,{validate:!0}))},_validate:function(b,a){if(!a.validate||!this.validate)return!0;b=g.extend({},this.attributes,b);b=this.validationError=this.validate(b,a)||null;if(!b)return!0;this.trigger("invalid",this,b,g.extend(a,{validationError:b}));return!1}});C(J,{keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1},"attributes");var w=f.Collection=function(b,a){a||(a={});a.model&&(this.model=a.model);void 0!==a.comparator&&(this.comparator=a.comparator);this._reset();this.initialize.apply(this,
arguments);b&&this.reset(b,g.extend({silent:!0},a))},z={add:!0,remove:!0,merge:!0},L={add:!0,remove:!1},D=function(b,a,c){c=Math.min(Math.max(c,0),b.length);var e=Array(b.length-c),d=a.length,f;for(f=0;f<e.length;f++)e[f]=b[f+c];for(f=0;f<d;f++)b[f+c]=a[f];for(f=0;f<e.length;f++)b[f+d+c]=e[f]};g.extend(w.prototype,h,{model:J,initialize:function(){},toJSON:function(b){return this.map(function(a){return a.toJSON(b)})},sync:function(){return f.sync.apply(this,arguments)},add:function(b,a){return this.set(b,
g.extend({merge:!1},a,L))},remove:function(b,a){a=g.extend({},a);var c=!g.isArray(b);b=c?[b]:b.slice();b=this._removeModels(b,a);!a.silent&&b.length&&(a.changes={added:[],merged:[],removed:b},this.trigger("update",this,a));return c?b[0]:b},set:function(b,a){if(null!=b){a=g.extend({},z,a);a.parse&&!this._isModel(b)&&(b=this.parse(b,a)||[]);var c=!g.isArray(b);b=c?[b]:b.slice();var d=a.at;null!=d&&(d=+d);d>this.length&&(d=this.length);0>d&&(d+=this.length+1);var f=[],h=[],k=[],q=[],n={},p=a.add,y=a.merge,
v=a.remove,m=!1,w=this.comparator&&null==d&&!1!==a.sort,x=g.isString(this.comparator)?this.comparator:null,u;for(u=0;u<b.length;u++){var t=b[u];var A=this.get(t);A?(y&&t!==A&&(t=this._isModel(t)?t.attributes:t,a.parse&&(t=A.parse(t,a)),A.set(t,a),k.push(A),w&&!m&&(m=A.hasChanged(x))),n[A.cid]||(n[A.cid]=!0,f.push(A)),b[u]=A):p&&(t=b[u]=this._prepareModel(t,a))&&(h.push(t),this._addReference(t,a),n[t.cid]=!0,f.push(t))}if(v){for(u=0;u<this.length;u++)t=this.models[u],n[t.cid]||q.push(t);q.length&&
this._removeModels(q,a)}n=!1;f.length&&!w&&p&&v?(n=this.length!==f.length||g.some(this.models,function(a,b){return a!==f[b]}),this.models.length=0,D(this.models,f,0),this.length=this.models.length):h.length&&(w&&(m=!0),D(this.models,h,null==d?this.length:d),this.length=this.models.length);m&&this.sort({silent:!0});if(!a.silent){for(u=0;u<h.length;u++)null!=d&&(a.index=d+u),t=h[u],t.trigger("add",t,this,a);(m||n)&&this.trigger("sort",this,a);if(h.length||q.length||k.length)a.changes={added:h,removed:q,
merged:k},this.trigger("update",this,a)}return c?b[0]:b}},reset:function(b,a){a=a?g.clone(a):{};for(var c=0;c<this.models.length;c++)this._removeReference(this.models[c],a);a.previousModels=this.models;this._reset();b=this.add(b,g.extend({silent:!0},a));a.silent||this.trigger("reset",this,a);return b},push:function(b,a){return this.add(b,g.extend({at:this.length},a))},pop:function(b){var a=this.at(this.length-1);return this.remove(a,b)},unshift:function(b,a){return this.add(b,g.extend({at:0},a))},
shift:function(b){var a=this.at(0);return this.remove(a,b)},slice:function(){return n.apply(this.models,arguments)},get:function(b){if(null!=b)return this._byId[b]||this._byId[this.modelId(b.attributes||b)]||b.cid&&this._byId[b.cid]},has:function(b){return null!=this.get(b)},at:function(b){0>b&&(b+=this.length);return this.models[b]},where:function(b,a){return this[a?"find":"filter"](b)},findWhere:function(b){return this.where(b,!0)},sort:function(b){var a=this.comparator;if(!a)throw Error("Cannot sort a set without a comparator");
b||(b={});var c=a.length;g.isFunction(a)&&(a=g.bind(a,this));1===c||g.isString(a)?this.models=this.sortBy(a):this.models.sort(a);b.silent||this.trigger("sort",this,b);return this},pluck:function(b){return this.map(b+"")},fetch:function(b){b=g.extend({parse:!0},b);var a=b.success,c=this;b.success=function(d){c[b.reset?"reset":"set"](d,b);a&&a.call(b.context,c,d,b);c.trigger("sync",c,d,b)};Q(this,b);return this.sync("read",this,b)},create:function(b,a){a=a?g.clone(a):{};var c=a.wait;b=this._prepareModel(b,
a);if(!b)return!1;c||this.add(b,a);var d=this,f=a.success;a.success=function(a,b,e){c&&d.add(a,e);f&&f.call(e.context,a,b,e)};b.save(null,a);return b},parse:function(b,a){return b},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(b){return b[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(b,a){if(this._isModel(b))return b.collection||(b.collection=
this),b;a=a?g.clone(a):{};a.collection=this;b=new this.model(b,a);if(!b.validationError)return b;this.trigger("invalid",this,b.validationError,a);return!1},_removeModels:function(b,a){for(var c=[],d=0;d<b.length;d++){var f=this.get(b[d]);if(f){var g=this.indexOf(f);this.models.splice(g,1);this.length--;delete this._byId[f.cid];var h=this.modelId(f.attributes);null!=h&&delete this._byId[h];a.silent||(a.index=g,f.trigger("remove",f,this,a));c.push(f);this._removeReference(f,a)}}return c},_isModel:function(b){return b instanceof
J},_addReference:function(b,a){this._byId[b.cid]=b;a=this.modelId(b.attributes);null!=a&&(this._byId[a]=b);b.on("all",this._onModelEvent,this)},_removeReference:function(b,a){delete this._byId[b.cid];a=this.modelId(b.attributes);null!=a&&delete this._byId[a];this===b.collection&&delete b.collection;b.off("all",this._onModelEvent,this)},_onModelEvent:function(b,a,c,d){if(a){if(("add"===b||"remove"===b)&&c!==this)return;"destroy"===b&&this.remove(a,d);if("change"===b){var e=this.modelId(a.previousAttributes()),
f=this.modelId(a.attributes);e!==f&&(null!=e&&delete this._byId[e],null!=f&&(this._byId[f]=a))}}this.trigger.apply(this,arguments)}});C(w,{forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,
partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3},"models");C=f.View=function(b){this.cid=g.uniqueId("view");g.extend(this,g.pick(b,v));this._ensureElement();this.initialize.apply(this,arguments)};var da=/^(\S+)\s*(.*)$/,v="model collection el id attributes className tagName events".split(" ");g.extend(C.prototype,h,{tagName:"div",$:function(b){return this.$el.find(b)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();
return this},_removeElement:function(){this.$el.remove()},setElement:function(b){this.undelegateEvents();this._setElement(b);this.delegateEvents();return this},_setElement:function(b){this.$el=b instanceof f.$?b:f.$(b);this.el=this.$el[0]},delegateEvents:function(b){b||(b=g.result(this,"events"));if(!b)return this;this.undelegateEvents();for(var a in b){var c=b[a];g.isFunction(c)||(c=this[c]);if(c){var d=a.match(da);this.delegate(d[1],d[2],g.bind(c,this))}}return this},delegate:function(b,a,c){this.$el.on(b+
".delegateEvents"+this.cid,a,c);return this},undelegateEvents:function(){this.$el&&this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(b,a,c){this.$el.off(b+".delegateEvents"+this.cid,a,c);return this},_createElement:function(b){return document.createElement(b)},_ensureElement:function(){if(this.el)this.setElement(g.result(this,"el"));else{var b=g.extend({},g.result(this,"attributes"));this.id&&(b.id=g.result(this,"id"));this.className&&(b["class"]=g.result(this,"className"));
this.setElement(this._createElement(g.result(this,"tagName")));this._setAttributes(b)}},_setAttributes:function(b){this.$el.attr(b)}});f.sync=function(b,a,c){var d=k[b];g.defaults(c||(c={}),{emulateHTTP:f.emulateHTTP,emulateJSON:f.emulateJSON});var e={type:d,dataType:"json"};c.url||(e.url=g.result(a,"url")||Z());null!=c.data||!a||"create"!==b&&"update"!==b&&"patch"!==b||(e.contentType="application/json",e.data=JSON.stringify(c.attrs||a.toJSON(c)));c.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",
e.data=e.data?{model:e.data}:{});if(c.emulateHTTP&&("PUT"===d||"DELETE"===d||"PATCH"===d)){e.type="POST";c.emulateJSON&&(e.data._method=d);var h=c.beforeSend;c.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d);if(h)return h.apply(this,arguments)}}"GET"===e.type||c.emulateJSON||(e.processData=!1);var q=c.error;c.error=function(a,b,d){c.textStatus=b;c.errorThrown=d;q&&q.call(c.context,a,b,d)};b=c.xhr=f.ajax(g.extend(e,c));a.trigger("request",a,b,c);return b};var k={create:"POST",
update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};f.ajax=function(){return f.$.ajax.apply(f.$,arguments)};var u=f.Router=function(b){b||(b={});b.routes&&(this.routes=b.routes);this._bindRoutes();this.initialize.apply(this,arguments)},G=/\((.*?)\)/g,U=/(\(\?)?:\w+/g,X=/\*\w+/g,V=/[\-{}\[\]+?.,\\\^$|#\s]/g;g.extend(u.prototype,h,{initialize:function(){},route:function(b,a,c){g.isRegExp(b)||(b=this._routeToRegExp(b));g.isFunction(a)&&(c=a,a="");c||(c=this[a]);var d=this;f.history.route(b,function(e){e=
d._extractParameters(b,e);!1!==d.execute(c,e,a)&&(d.trigger.apply(d,["route:"+a].concat(e)),d.trigger("route",a,e),f.history.trigger("route",d,a,e))});return this},execute:function(b,a,c){b&&b.apply(this,a)},navigate:function(b,a){f.history.navigate(b,a);return this},_bindRoutes:function(){if(this.routes){this.routes=g.result(this,"routes");for(var b,a=g.keys(this.routes);null!=(b=a.pop());)this.route(b,this.routes[b])}},_routeToRegExp:function(b){b=b.replace(V,"\\$&").replace(G,"(?:$1)?").replace(U,
function(a,b){return b?a:"([^/?]+)"}).replace(X,"([^?]*?)");return new RegExp("^"+b+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(b,a){var c=b.exec(a).slice(1);return g.map(c,function(a,b){return b===c.length-1?a||null:a?decodeURIComponent(a):null})}});var x=f.History=function(){this.handlers=[];this.checkUrl=g.bind(this.checkUrl,this);"undefined"!==typeof t&&(this.location=t.location,this.history=t.history)},aa=/^[#\/]|\s+$/g,W=/^\/+|\/+$/g,ba=/#.*$/;x.started=!1;g.extend(x.prototype,h,{interval:50,
atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root&&!this.getSearch()},matchRoot:function(){return this.decodeFragment(this.location.pathname).slice(0,this.root.length-1)+"/"===this.root},decodeFragment:function(b){return decodeURI(b.replace(/%25/g,"%2525"))},getSearch:function(){var b=this.location.href.replace(/#.*/,"").match(/\?.+/);return b?b[0]:""},getHash:function(b){return(b=(b||this).location.href.match(/#(.*)$/))?b[1]:""},getPath:function(){var b=this.decodeFragment(this.location.pathname+
this.getSearch()).slice(this.root.length-1);return"/"===b.charAt(0)?b.slice(1):b},getFragment:function(b){null==b&&(b=this._usePushState||!this._wantsHashChange?this.getPath():this.getHash());return b.replace(aa,"")},start:function(b){if(x.started)throw Error("Backbone.history has already been started");x.started=!0;this.options=g.extend({root:"/"},this.options,b);this.root=this.options.root;this._wantsHashChange=!1!==this.options.hashChange;this._hasHashChange="onhashchange"in t&&(void 0===document.documentMode||
7<document.documentMode);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!(!this.history||!this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(W,"/");if(this._wantsHashChange&&this._wantsPushState)if(this._hasPushState||this.atRoot())this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0});else return b=
this.root.slice(0,-1)||"/",this.location.replace(b+"#"+this.getPath()),!0;this._hasHashChange||!this._wantsHashChange||this._usePushState||(this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1,b=document.body,b=b.insertBefore(this.iframe,b.firstChild).contentWindow,b.document.open(),b.document.close(),b.location.hash="#"+this.fragment);b=t.addEventListener||function(a,b){return attachEvent("on"+a,b)};this._usePushState?
b("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?b("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));if(!this.options.silent)return this.loadUrl()},stop:function(){var b=t.removeEventListener||function(a,b){return detachEvent("on"+a,b)};this._usePushState?b("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&b("hashchange",this.checkUrl,!1);this.iframe&&(document.body.removeChild(this.iframe),this.iframe=
null);this._checkUrlInterval&&clearInterval(this._checkUrlInterval);x.started=!1},route:function(b,a){this.handlers.unshift({route:b,callback:a})},checkUrl:function(b){b=this.getFragment();b===this.fragment&&this.iframe&&(b=this.getHash(this.iframe.contentWindow));if(b===this.fragment)return!1;this.iframe&&this.navigate(b);this.loadUrl()},loadUrl:function(b){if(!this.matchRoot())return!1;b=this.fragment=this.getFragment(b);return g.some(this.handlers,function(a){if(a.route.test(b))return a.callback(b),
!0})},navigate:function(b,a){if(!x.started)return!1;a&&!0!==a||(a={trigger:!!a});b=this.getFragment(b||"");var c=this.root;if(""===b||"?"===b.charAt(0))c=c.slice(0,-1)||"/";c+=b;b=this.decodeFragment(b.replace(ba,""));if(this.fragment!==b){this.fragment=b;if(this._usePushState)this.history[a.replace?"replaceState":"pushState"]({},document.title,c);else if(this._wantsHashChange)this._updateHash(this.location,b,a.replace),this.iframe&&b!==this.getHash(this.iframe.contentWindow)&&(c=this.iframe.contentWindow,
a.replace||(c.document.open(),c.document.close()),this._updateHash(c.location,b,a.replace));else return this.location.assign(c);if(a.trigger)return this.loadUrl(b)}},_updateHash:function(b,a,c){c?(c=b.href.replace(/(javascript:|#).*$/,""),b.replace(c+"#"+a)):b.hash="#"+a}});f.history=new x;J.extend=w.extend=u.extend=C.extend=x.extend=function(b,a){var c=this;var d=b&&g.has(b,"constructor")?b.constructor:function(){return c.apply(this,arguments)};g.extend(d,c,a);d.prototype=g.create(c.prototype,b);
d.prototype.constructor=d;d.__super__=c.prototype;return d};var Z=function(){throw Error('A "url" property or function must be specified');},Q=function(b,a){var c=a.error;a.error=function(d){c&&c.call(a.context,b,d,a);b.trigger("error",b,d,a)}};return f});var n=t._.noConflict(),P=t.Backbone.noConflict(),p=K,h={};h.core=h.core||{};h.core.LOGGING_ENABLED=!0;h.core.log=function(){if(h.core.LOGGING_ENABLED&&"undefined"!==typeof console&&!n.isNull(console)&&"function"===typeof console.log){var d=["[Klaviyo / Onsite]"].concat([].slice.call(arguments));
console.log.apply(console,d)}};h.core.parseQueryString=function(d){for(var f={},g=/\+/g,h=/([^&=]+)=?([^&]*)/g,n;n=h.exec(d);)f[decodeURIComponent(n[1].replace(g," "))]=decodeURIComponent(n[2].replace(g," "));return f};h.core.insertCSS=function(d){var f=document.createElement("style");p("head").get(0).appendChild(f);f.styleSheet?f.styleSheet.cssText=d:f.appendChild(document.createTextNode(d))};h.core.templates={_cache:{},register:function(d,f){this._cache[d]=n.template(f)},render:function(d,f){return this._cache[d](f||
{})}};h.platforms=h.platforms||{};h.platforms.shopify=h.platforms.shopify||{};h.platforms.shopify.ADD_TO_CART_FORM_ID='form[action="/cart/add"]';h.platforms.shopify.ADD_TO_CART_BUTTON_ID=h.platforms.shopify.ADD_TO_CART_FORM_ID+' button[type="submit"]';h.platforms.shopify.isProductPage=function(d){d||(d=t.location.toString());return!!d.match(/\/products\//)};h.platforms.shopify.isCollectionsPage=function(d,f){d||(d=t.location.toString());if(Array.isArray(f)&&0<f.length){for(var g=0;g<f.length;g++)if(d.match(f[g]))return!0;
return!!d.match(/\/collections\//)}};h.platforms.shopify.isVariantOutOfStock=function(d,f,g){return h.platforms.shopify.isVariantOutOfInventory(f,g)&&h.platforms.shopify.isVariantUnavailableBasedOnInventoryManagementPolicy(f,g)&&h.platforms.shopify.isVariantUnavailableBasedOnPreorderPolicy(f,g)&&h.platforms.shopify.isVariantUnavailableBasedOnSellThroughPolicy(f,g)&&h.platforms.shopify.isVariantIncludedBasedOnTags(d,g.include_on_tags,g.exclude_on_tags)};h.platforms.shopify.isVariantOutOfInventory=
function(d,f){return n.isNull(d.inventory_quantity)||n.isUndefined(d.inventory_quantity)?!d.available:d.inventory_quantity<f.inventory_quantity_threshold};h.platforms.shopify.isVariantUnavailableBasedOnInventoryManagementPolicy=function(d,f){return f.is_allow_for_unmanaged_inventory?!0:!!d.inventory_management};h.platforms.shopify.isVariantUnavailableBasedOnPreorderPolicy=function(d,f){return f.is_allow_for_preorder?!0:!d.available};h.platforms.shopify.isVariantUnavailableBasedOnSellThroughPolicy=
function(d,f){return f.display_on_policy_continue||"continue"!=d.inventory_policy?!0:!1};h.platforms.shopify.isVariantIncludedBasedOnTags=function(d,f,g){return g.length&&d.tags.length&&n.intersection(d.tags,g).length||f.length&&(!n.intersection(d.tags,f).length||!d.tags.length)?!1:!0};h.platforms.shopify.findSelectedVariantId=function(){var d=t.location.search.substring(1);return(d=h.core.parseQueryString(d).variant)?d:p('[name="id"]').val()};h.platforms.shopify.isValidVariant=function(d){return"number"!=
typeof parseInt(d)?!1:!0};h.platforms.shopify.productDetailsUrl=function(d){return n.isUndefined(d.product_handle)?"//"+(t.location.hostname.toString()+t.location.pathname.toString().replace(/\/$/,""))+".js":"//"+t.location.hostname.toString()+"/products/"+d.product_handle+".js"};h.platforms.shopify.format_product_json=function(d){return d};h.platforms.bigcommerce=h.platforms.bigcommerce||{};h.platforms.bigcommerce.ADD_TO_CART_FORM_ID='form[action$="//'+t.location.hostname+'/cart.php"]';h.platforms.bigcommerce.ADD_TO_CART_BUTTON_ID=
h.platforms.bigcommerce.ADD_TO_CART_FORM_ID+' input[type="submit"]';h.platforms.bigcommerce.INVENTORY_TRACKING_TYPES=["simple","product","variant","sku"];h.platforms.bigcommerce.OPTION_NAME_ELEMENT='input[name^="attribute"]';h.platforms.bigcommerce.DROPDOWN_NAME_ELEMENT='select[name^="attribute"] option';h.platforms.bigcommerce.PRODUCT_ID_ELEMENT='input[name="product_id"]';h.platforms.bigcommerce.isProductPage=function(d){try{return page_type=document.querySelector("meta[property='og:type']").getAttribute("content"),
"product"==page_type}catch(f){return!1}};h.platforms.bigcommerce.isCollectionsPage=function(d,f){return!1};h.platforms.bigcommerce.isVariantOutOfStock=function(d,f,g){return h.platforms.bigcommerce.isVariantTrackableBasedOnInventoryManagementPolicy(d)&&h.platforms.bigcommerce.isVariantOutOfInventory(f,g)&&h.platforms.bigcommerce.isVariantAvailable(f,g)&&h.platforms.bigcommerce.isVariantIncludedBasedOnTags(d,g.include_on_tags,g.exclude_on_tags)};h.platforms.bigcommerce.isVariantOutOfInventory=function(d,
f){return n.isNull(d.inventory_quantity)||n.isUndefined(d.inventory_quantity)?!d.available:d.inventory_quantity<f.inventory_quantity_threshold};h.platforms.bigcommerce.isVariantTrackableBasedOnInventoryManagementPolicy=function(d){return h.platforms.bigcommerce.INVENTORY_TRACKING_TYPES.includes(d.inventory_policy)};h.platforms.bigcommerce.isVariantAvailable=function(d,f){return d.available};h.platforms.bigcommerce.isVariantIncludedBasedOnTags=function(d,f,g){return g.length&&d.tags.length&&n.intersection(d.tags,
g).length||f.length&&(!n.intersection(d.tags,f).length||!d.tags.length)?!1:!0};h.platforms.bigcommerce.findSelectedVariantId=function(){var d=[],f=n.map([h.platforms.bigcommerce.ADD_TO_CART_FORM_ID+" "+h.platforms.bigcommerce.OPTION_NAME_ELEMENT,h.platforms.bigcommerce.ADD_TO_CART_FORM_ID+" "+h.platforms.bigcommerce.DROPDOWN_NAME_ELEMENT],function(d){return d+":checked"}).join();f=p(f);h.platforms.bigcommerce.selected_variant_id=null;if(!n.isEmpty(f))return n.each(f,function(f,h){f=p(f);f.is("option")?
d.push(f.parent().attr("name")+"="+f.val()):d.push(f.attr("name")+"="+f.val())}),product_id=h.platforms.bigcommerce.productId(),variant_option_url="//"+t.location.hostname+"/remote/v1/product-attributes/"+product_id,parameters="action=add&qty[]=1&product_id="+product_id+"&"+d.join("&"),parameters=encodeURI(parameters),p.ajax({url:variant_option_url,type:"POST",headers:{"x-xsrf-token":t.BCData&&t.BCData.csrf_token?t.BCData.csrf_token:""},dataType:"json",data:parameters,success:function(d){try{d.data.purchasable&&
(h.platforms.bigcommerce.selected_variant_id=d.data.v3_variant_id)}catch(q){}}}),null};h.platforms.bigcommerce.isValidVariant=function(d){return!0};h.platforms.bigcommerce.productId=function(){product_id_element=h.platforms.bigcommerce.ADD_TO_CART_FORM_ID+" "+h.platforms.bigcommerce.PRODUCT_ID_ELEMENT;return p(product_id_element).val()};h.platforms.bigcommerce.productDetailsUrl=function(d){product_id=h.platforms.bigcommerce.productId();return"https://fast.a.klaviyo.com/api/v1/catalog/bigcommerce/product-variants?a="+
d.account_id+"&p="+product_id};h.platforms.bigcommerce.format_product_json=function(d){data=d.data;product={id:data.product_id,title:data.product_title,inventory_policy:data.inventory_tracking,variants:[]};n.each(data.variants,function(d,g){variant_title=n.isEmpty(d.title)?d.sku:d.title;product.variants.push({id:d.external_id,title:variant_title,available:d.availability,inventory_quantity:d.inventory_quantity,is_allow_for_preorder:d.availability})});return product};h.components=h.components||{};h.components.back_in_stock=
h.components.back_in_stock||{};h.components.back_in_stock.BASE_CSS='body, html { background: transparent;-webkit-font-smoothing: antialiased;height: 100%;}html {font-family: sans-serif;font-size: 14px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}body {margin: 0;font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size: 14px;line-height: 1.5;color: #222;overflow: hidden;-moz-transition: background-color 0.15s linear;-webkit-transition: background-color 0.15s linear;-o-transition: background-color 0.15s linear;transition: background-color 0.15s cubic-bezier(0.785, 0.135, 0.150, 0.860);}body.fadein {background: rgba(0, 0, 0, 0.65);}a {background-color: transparent;}a:active,a:hover {outline: 0;}h1 {font-size: 2em;margin: 0.67em 0;}h3 { font-size: 24px;}h4 {  font-size: 18px;  margin-top: 10px;  margin-bottom: 10px;}h3, h4 {  font-family: inherit;  font-weight: 500;  line-height: 1.1;  color: inherit;}button,input,optgroup,select,textarea {color: inherit;font: inherit;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;}button {overflow: visible;}button,select {text-transform: none;}button {-webkit-appearance: button;cursor: pointer;}button[disabled] {opacity: 0.6;}button::-moz-focus-inner,input::-moz-focus-inner {border: 0;padding: 0;}input {line-height: normal;}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button {height: auto;}* {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}*:before,*:after {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}#container {position: relative;background: white;padding: 12px 18px 40px 18px;}.fade {opacity: 0;-webkit-transition: opacity 0.15s linear;-o-transition: opacity 0.15s linear;transition: opacity 0.15s linear;}.fade.in {opacity: 1;}.modal {  overflow-x: hidden;  overflow-y: auto;  position: fixed;  top: 0;  right: 0;  bottom: 0;  left: 0;  z-index: 999;  -webkit-overflow-scrolling: touch;  outline: 0;}.modal-title {  margin: 0;  font-size: 24px;  line-height: 1.5;}.clearfix:before,.clearfix:after {  content: " ";  display: table;}.clearfix:after {  clear: both;}.form-control {  display: block;  width: 100%;  height: 34px;  padding: 6px 12px;  font-size: 14px;  line-height: 1.5;  color: #222;  background-color: #fff;  background-image: none;  border: 1px solid #ccc;  border-radius: 2px;  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;}.input-lg {  font-size: 14px;  height: 46px;  padding: 10px 16px;  line-height: 1.3333333;}.submit-container {  margin-top: 20px;}.form-group {  margin-bottom: 15px;}.btn {  display: inline-block;  padding: 8px 12px;  margin-bottom: 0;  font-size: 14px;  font-weight: bold;  line-height: 1.5;  text-align: center;  white-space: nowrap;  vertical-align: middle;  -ms-touch-action: manipulation;  touch-action: manipulation;  cursor: pointer;  -webkit-user-select: none;  -moz-user-select: none;  -ms-user-select: none;  user-select: none;  background-image: none;  border: 1px solid transparent;  border-radius: 2px;}.btn-success {  width: 100%;  color: #fff;  background-color: #439fdb;  border-color: #439fdb;}.btn-lg {  line-height: 24px;  font-size: 15px;  padding: 14px;  line-height: 1.3333333;}.close {  -webkit-appearance: none;  padding: 0;  cursor: pointer;  background: 0 0;  border: 0;  position: absolute;  top: 7px;  right: 15px;  font-size: 30px;  font-weight: 700;  line-height: 1;  color: #ccc;  text-shadow: 0 1px 0 #fff;}.alert {  padding: 6px 11px;  font-size: 13px;  margin: 15px 0;  border: 1px solid transparent;  border-radius: 2px;}.alert-success {  color: #1B9500;  background-color: #d3efcd;  border-color: #d3efcd;}.alert-success a {   color: #1B9500;}.alert-danger {  color: #C72E2F;  background-color: #fcd6d7;  border-color: #fcd6d7;}.pull-right {  float: right;}.text-right {  text-align: right;}.small-print {  font-size: 14px;  line-height: 1.5;}.small-print a {  color: inherit;  text-decoration: underline;}.powered-by {  opacity: 0.8;}.product-title {  margin-bottom: 20px;}.accepts_marketing {  opacity: 0.835;  font-size: 13px;}.accepts_marketing input {  margin-right: 10px;}.completed_message, .error_message {  display: none;}.complete .completed_message {  display: block;}#klaviyo-bis-modal.in {  position: relative;  z-index: 999;  height: 100%;  overflow: hidden;  overflow-y: auto;  -webkit-overflow-scrolling: touch;}@media only screen and (min-width:500px) {  #klaviyo-bis-modal {    max-width: 460px;    margin: auto;  }  #container {    border-radius: 3px;    padding: 30px 40px;  }}@media only screen and (min-width:992px) {  #container {    margin-top: 100px;  }}';
h.components=h.components||{};h.components.back_in_stock=h.components.back_in_stock||{};h.components.back_in_stock.DEFAULT_SETTINGS={trigger:{replace_sold_out:!1,replace_anchor:!1,alternate_anchor:null,product_page_text:"Notify Me When Available",product_page_class:"btn",product_page_text_align:"center",product_page_margin:"0px",product_page_width:"auto",collection_page_class:"btn",collection_page_text_align:"center",collection_page_width:"200px",collection_page_text:"Notify Me When Available",collection_page_padding:"inherit"},
modal:{headline:"{product_name}",body_content:"Enter your email address and we'll let you know when it's back.",email_field_label:"Email",is_quantity_field_enabled:!1,quantity_field_label:"Quantity Required",button_label:"Notify me when available",newsletter_subscribe_label:"Add me to your email list.",subscription_success_label:"You're in! We'll let you know when it's back.",footer_content:"",close_label:"Close",is_powered_by_link:!1,styles:h.components.back_in_stock.BASE_CSS,additional_styles:"",
z_index:999999,drop_background_color:"#000",background_color:"#fff",font_family:'"Helvetica Neue", Helvetica, Arial, sans-serif;',headers_font_family:'"Helvetica Neue", Helvetica, Arial, sans-serif;',text_color:"#222",button_text_color:"#fff",button_background_color:"#439fdb",close_button_color:"#ccc",error_background_color:"#fcd6d7",error_text_color:"#C72E2F",success_background_color:"#d3efcd",success_text_color:"#1B9500",subscribe_checked:!0}};h.components.back_in_stock.Settings=P.Model.extend({defaults:{exclude_on_tags:"",
include_on_tags:"",display_on_policy_continue:!1,inventory_quantity_threshold:1,is_allow_for_preorder:!0,is_allow_for_unmanaged_inventory:!0,variant_id_element:null,variant_id_attribute:null}});h.components.back_in_stock.Main=P.Model.extend();h.components.back_in_stock.MainView=P.View.extend({events:{change:"variantChange","click .klaviyo-bis-trigger":"handleBISTriggerClick"},settings:function(){return this.model.get("settings")},initialize:function(d){d=this.settings().get("platform");var f=this.settings().get("is_quick_view");
this.platform_implementation=h.platforms[d];this.model.set("is_quick_view",f);this.model.set("collection_urls",this.settings().get("collection_urls"));if(this.platform_implementation.isProductPage())this.model.set("is_on_collections_page",!1),this.createProductPageTrigger();else if(this.platform_implementation.isCollectionsPage(null,this.model.get("collection_urls")))this.model.set("is_on_collections_page",!0),this.createCollectionPageTriggers();else{this.model.set("is_on_other_page",!0);return}this.model.set("is_on_other_page",
!1)},getProductJSON:function(d,f){var g=this;p.getJSON(d,function(d,p,t){d=g.platform_implementation.format_product_json(d);p=d.variants;var q=[],y={},C={};g.model.set("product",d);n.each(p,function(d,f){g.isVariantOutOfStock(d)&&q.push(d);y[d.id]=d;C[d.title]=d});g.model.set({variants:p,unavailable_variants:q,variants_by_id:y,variants_by_title:C});h.core.log("Variants: ",p.length,"Unavailable Variants: ",q.length);f()})},createProductPageTrigger:function(){var d=this,f=d.$(".klaviyo-bis-trigger"),
g={account_id:d.settings().get("account")};g=d.platform_implementation.productDetailsUrl(g);d.getProductJSON(g,function(){if(d.model.get("unavailable_variants").length){d.prepareTriggerElement(f);if(!f.length){d.trigger.renderProductPageTrigger();var g=p(d.platform_implementation.ADD_TO_CART_BUTTON_ID).eq(0),h=d.trigger.model.get("alternate_anchor"),t="#"+h;!n.isNull(h)&&p(t).length?(g=p(t).eq(0),g.append(d.trigger.$el),d.sold_out_button=g):!0!==d.trigger.model.get("replace_anchor")&&!0!==d.trigger.model.get("replace_sold_out")||
!g.length?d.$(d.platform_implementation.ADD_TO_CART_FORM_ID).eq(0).append(d.trigger.$el):(d.sold_out_button=g,d.sold_out_button.parent().append(d.trigger.$el))}d.createModal();d.variantChange()}})},createCollectionPageTriggers:function(){var d=this,f=this.$(".klaviyo-bis-trigger"),g=this.$(".klaviyo-product-container");g.length&&(d.prepareTriggerElement(f),f.length||(d.trigger.prepareCollectionPageHelpers(),d.trigger.renderCollectionPageTrigger(),n.each(g,function(f){f=p(f).data("klaviyo-handle");
var g=d.trigger.$el.clone(),h=p('.klaviyo-product-container[data-klaviyo-handle="'+f+'"] .klaviyo-button-container'),n=h.parent().parent();g.data("klaviyo-handle",f);h.append(g);"static"==n.css("position")&&n.css("position","relative")}),d.createModal()))},prepareTriggerElement:function(d){var f=this.settings(),g={};n.defaults(g,f.get("trigger"),h.components.back_in_stock.DEFAULT_SETTINGS.trigger);this.trigger=d.length?new h.components.back_in_stock.TriggerView({el:d,model:new h.components.back_in_stock.Trigger(g)}):
new h.components.back_in_stock.TriggerView({el:p("<a/>"),model:new h.components.back_in_stock.Trigger(g)})},createModal:function(){var d=this.settings(),f={};parent_body_font_family=p("body").css("font-family");parent_body_font_color=p("body").css("color");parent_headers_font_family=p("h1,h2,h3").eq(0).css("font-family");parent_button=p(".klaviyo-bis-trigger").eq(0);parent_button_text_color=parent_button.css("color");parent_button_background_color=parent_button.css("background-color");n.isUndefined(parent_body_font_family)||
(h.components.back_in_stock.DEFAULT_SETTINGS.modal.font_family=parent_body_font_family);n.isUndefined(parent_body_font_color)||(h.components.back_in_stock.DEFAULT_SETTINGS.modal.text_color=parent_body_font_color);n.isUndefined(parent_headers_font_family)||(h.components.back_in_stock.DEFAULT_SETTINGS.modal.headers_font_family=parent_headers_font_family);n.isUndefined(parent_button_text_color)||(h.components.back_in_stock.DEFAULT_SETTINGS.modal.button_text_color=parent_button_text_color);n.isUndefined(parent_button_background_color)||
(h.components.back_in_stock.DEFAULT_SETTINGS.modal.button_background_color=parent_button_background_color);n.defaults(f,d.get("modal"),h.components.back_in_stock.DEFAULT_SETTINGS.modal);n.extend(f,{account:d.get("account"),list:d.get("list"),platform:d.get("platform"),api_hostname:d.get("api_hostname"),is_quick_view:d.get("is_quick_view"),collection_urls:d.get("collection_urls")});this.modal=new h.components.back_in_stock.ModalView({el:p("<iframe />"),model:new h.components.back_in_stock.Modal(f)});
this.modal.render();this.$el.append(this.modal.$el)},variantChange:function(d){if(!this.model.get("is_on_other_page")&&!this.model.get("is_on_collections_page")&&this.trigger instanceof P.View){d=1==this.model.get("variants").length?this.model.get("variants")[0].id:this.platform_implementation.findSelectedVariantId();if(!this.platform_implementation.isValidVariant(d)){var f=this.settings(),g=f.get("variant_id_element");f=f.get("variant_id_attribute");g&&f&&(d=p(document).find(g).attr(f))}if(n.isNull(d)){var h=
this;for(i=0;3>i;i++)n.delay(function(){return h.setVariantAndShowUI(h.platform_implementation.selected_variant_id)},1E3)}else this.setVariantAndShowUI(d)}},setVariantAndShowUI:function(d){if(n.isUndefined(d)||n.isNull(d))this.trigger.hide(),n.isUndefined(this.sold_out_button)||this.sold_out_button.show();else{this.model.get("product");var f=this.model.get("variants_by_id")[d]||this.model.get("variants")[0];if(!d||isNaN(d))d=f&&f.id;h.core.log("Selected Variant: "+d);this.model.set("selected_variant_id",
d);this.modal.setSelectedVariantId(d);f||this.trigger.hide();this.isVariantOutOfStock(f)?(n.isUndefined(this.sold_out_button)||!this.trigger.model.get("replace_anchor")&&!this.trigger.model.get("replace_sold_out")||this.sold_out_button.hide(),this.trigger.show()):(this.trigger.hide(),n.isUndefined(this.sold_out_button)||this.sold_out_button.show())}},isVariantOutOfStock:function(d){var f=this.settings();f={inventory_quantity_threshold:f.get("inventory_quantity_threshold"),is_allow_for_preorder:f.get("is_allow_for_preorder"),
is_allow_for_unmanaged_inventory:f.get("is_allow_for_unmanaged_inventory"),display_on_policy_continue:f.get("display_on_policy_continue"),exclude_on_tags:this.cleanTags(f.get("exclude_on_tags")),include_on_tags:this.cleanTags(f.get("include_on_tags")),is_quick_view:f.get("is_quick_view"),collection_urls:f.get("collection_urls")};return this.platform_implementation.isVariantOutOfStock(this.model.get("product"),d,f)},cleanTags:function(d){try{var f=d.split(",").filter(String)}catch(g){console.log("Tags not read because invalid format.  Please supply strings for included and excluded tags. If there are multiple values, please delimit with commas."),
f=[]}return f.map(function(d){return d.trim()})},handleBISTriggerClick:function(d){d&&d.preventDefault()&&d.stopPropagation();var f=this;if(this.model.get("is_on_collections_page")){var g=p(d.currentTarget).data("klaviyo-handle"),h=p(p(d.currentTarget).data("klaviyo-quickview-variant")).val();d=f.platform_implementation.productDetailsUrl({product_handle:g});var t=this.model.get("is_quick_view");f.getProductJSON(d,function(){(!n.isUndefined(h)&&n.isUndefined(this.modal)||t)&&f.createModal();f.showModal(h)})}else f.showModal()},
showModal:function(d){var f=this.model.get("product");d=this.model.get("selected_variant_id")||d||this.model.get("unavailable_variants")[0].id;d=this.model.get("variants_by_id")[d];var g=this.model.get("variants").length,h=this.model.get("unavailable_variants");this.modal.renderForm(f,d,g,h);this.modal.show()}});h.components.back_in_stock.create=function(d,f){d=new h.components.back_in_stock.Settings(d);d.set(f);return new h.components.back_in_stock.MainView({el:document.body,model:new h.components.back_in_stock.Main({settings:d})})};
h.components=h.components||{};h.components.back_in_stock=h.components.back_in_stock||{};h.components.back_in_stock.Trigger=P.Model.extend({});h.components.back_in_stock.TriggerView=P.View.extend({initialize:function(d){},prepareCollectionPageHelpers:function(){var d=p(".klaviyo-product-container"),f=p(".klaviyo-button-container"),g={display:"inline-block",position:"absolute !important",top:"50%",left:"50%",opacity:"0","text-align":this.model.get("collection_page_text_align"),width:this.model.get("collection_page_width")};
klaviyo_button_width=g.width.match(/\d+/);g["margin-left"]="-"+Math.round(klaviyo_button_width/2)+"px";d.css({overflow:"visible !important",position:"initial !important"});f.css(g);d.parent().mouseover(function(){p(this).find(f).css("opacity","1")}).mouseout(function(){p(this).find(f).css("opacity","0")})},renderCollectionPageTrigger:function(){var d=this.model;this.$el.attr("class",d.get("collection_page_class")).addClass("klaviyo-bis-trigger").attr("href","#").text(d.get("collection_page_text")).css("padding",
d.get("collection_page_padding")).css("text-align",d.get("collection_page_text_align"))},renderProductPageTrigger:function(){var d=this.model;this.$el.attr("class",d.get("product_page_class")).addClass("klaviyo-bis-trigger").attr("href","#").text(d.get("product_page_text")).css("text-align",d.get("product_page_text_align")).css("margin",d.get("product_page_margin")).css("width",d.get("product_page_width"))},show:function(){this.$el.show()},hide:function(){this.$el.hide()}});h.components=h.components||
{};h.components.back_in_stock=h.components.back_in_stock||{};n.each({"back_in_stock_document.html":'<!doctype html>\x3c!--[if lt IE 7]> <html class="ie6"> <![endif]--\x3e\x3c!--[if IE 7]> <html class="ie7"> <![endif]--\x3e\x3c!--[if IE 8]> <html class="ie8"> <![endif]--\x3e\x3c!--[if gt IE 8]>\x3c!--\x3e <html> \x3c!--<![endif]--\x3e<head><meta name="viewport" content="width=device-width"><style><%= styles %>#container {background: <%= theme.background_color %>;}body {font-family: <%= theme.font_family %>;color: <%= theme.text_color %>;}body.fadein {background: rgba( <%= theme.fade_color_rgb %>, 0.65);}h3 {font-family: <%= theme.headers_font_family %>;}.btn {color: <%= theme.button_text_color %>;background-color: <%= theme.button_background_color %>;border-color: <%= theme.button_background_color %>;}.close {color: <%= theme.close_button_color %>;}.alert-danger {border-color: <%= theme.failure_background_color %>;background-color: <%= theme.failure_background_color %>;color: <%= theme.failure_text_color %>;}.alert-success {background-color: <%= theme.success_background_color %>;border-color: <%= theme.success_background_color %>;color: <%= theme.success_text_color %>;}.alert-success a {color: <%= theme.success_text_color %>;}</style><% if (additional_styles) { %><style><%= additional_styles %></style><% } %></head><body class="klaviyo-bis-close"><div id="klaviyo-bis-modal"><div class="" id="container"><button type="button" class="close klaviyo-bis-close" data-dismiss="modal">&times;</button><h3 class="modal-title"><%= headline %></h3><p><%= body_content %></p><form action="#" class="form-horizontal clearfix"><div class="form-group"><div id="variant_select" class="col-sm-12"><input type="hidden" id="product" value="<%= product.id %>" /></input><select id="variants" class="selectpicker form-control input-lg"><% _.each(unavailable_variants, function (variant) { %><option value="<%= variant.id %>"><%= variant.title %></option><% }) %></select></div></div><div class="form-group"><div class="col-sm-12"><input type="email" id="email" placeholder="<%= email_field_label %>" class="form-control input-lg" value="" /></input></div><div id="newsletter_subscription"><p><input type="checkbox" id="subscribe_for_newsletter" <%= newsletter_subscribe_checked %>><label for="subscribe_for_newsletter" style="margin-left:10px;"><%= newsletter_subscribe_label %></label></p></div></div><div class="control-group clearfix submit-container"><button type="submit" class="btn btn-success btn-lg col-xs-12"><%= button_label %></button></div><div id="error_message" class="error_message alert alert-danger"></div><div id="completed_message" class="completed_message alert alert-success"><%= subscription_success_label %> <a href="#" class="klaviyo-bis-close"><%= close_label %></a></div></form><p class="small-print"><%= footer_content %></p><% if (is_powered_by_link) { %><p class="small-print powered-by text-right">Powered by <a href="https://www.klaviyo.com" target="_blank">Klaviyo</a></p><% } %></div></div>'},
function(d,f){h.core.templates.register(f,d)});h.components.back_in_stock.Modal=P.Model.extend();h.components.back_in_stock.ModalView=P.View.extend({initialize:function(d){},iframeDocument:function(){var d=this.$el[0];return d.contentDocument||d.contentWindow.document},setSelectedVariantId:function(d){this.model.set("selected_variant_id",d)},render:function(d,f){this.$el.attr({id:"klaviyo-bis-iframe",frameBorder:0,src:"about:blank",allowTransparency:!1}).css({position:"fixed",width:"100%",height:"100%",
top:0,left:0,border:"0",overflow:"hidden","z-index":this.model.get("z_index"),background:"none"}).hide()},renderForm:function(d,f,g,q){var t=this;q=h.core.templates.render("back_in_stock_document.html",{variant:f,product:d,unavailable_variants:q,headline:this.model.get("headline").replace("{product_name}",d.title),body_content:this.model.get("body_content").replace("{product_name}",d.title),email_field_label:this.model.get("email_field_label"),email:"",newsletter_subscribe_label:this.model.get("newsletter_subscribe_label"),
newsletter_subscribe_checked:this.model.get("subscribe_checked")?"checked":"",is_quantity_field_enabled:this.model.get("is_quantity_field_enabled"),quantity_required_label:this.model.get("quantity_field_label"),button_label:this.model.get("button_label"),footer_content:this.model.get("footer_content").replace("{product_name}",d.title),close_label:this.model.get("close_label"),is_powered_by_link:this.model.get("is_powered_by_link"),subscription_success_label:this.model.get("subscription_success_label").replace("{product_name}",
d.title),styles:this.model.get("styles"),additional_styles:this.model.get("additional_styles"),theme:{drop_background_color:this.model.get("drop_background_color"),background_color:this.model.get("background_color"),font_family:this.model.get("font_family"),headers_font_family:this.model.get("headers_font_family"),text_color:this.model.get("text_color"),button_text_color:this.model.get("button_text_color"),button_background_color:this.model.get("button_background_color"),close_button_color:this.model.get("close_button_color"),
error_background_color:this.model.get("error_background_color"),error_text_color:this.model.get("error_text_color"),success_background_color:this.model.get("success_background_color"),success_text_color:this.model.get("success_text_color")}});d=this.iframeDocument();d.open();d.write(q);d.close();q=function(d){p(d.target).hasClass("klaviyo-bis-close")&&(d.preventDefault(),t.hide())};p(d).find("body").on("click",n.bind(q,this)).on("touchend",n.bind(q,this)).find("form").on("submit",n.bind(this.validateAndSubmitForm,
this));1===g?p(d).find("#variant_select").hide():p(d).find('#variant_select option[value="'+f.id+'"]').prop("selected",!0);this.model.get("list")||p(d).find("#newsletter_subscription").hide()},validateAndSubmitForm:function(d){d.preventDefault();var f=this,g=p(d.currentTarget);d=this.iframeDocument();var h=p(d).find("#email").val(),n=p(d).find("#subscribe_for_newsletter").prop("checked")&&"none"!==p(d).find("#newsletter_subscription")[0].style.display;/@/.test(h)&&(g.find("button").attr("disabled",
!0),this.hideErrorMessage(),this.hideSuccessMessage(),g="//"+this.model.get("api_hostname")+"/onsite/components/back-in-stock/subscribe",p.post(g,{a:this.model.get("account"),email:h,g:this.model.get("list"),variant:p(d).find("#variants").val(),product:p(d).find("#product").val(),platform:this.model.get("platform"),subscribe_for_newsletter:n},function(d,g,h){d.success?(p(f.iframeDocument()).find("form").find("button").hide(),f.showSuccessMessage()):(p(f.iframeDocument()).find("form").find("button").removeAttr("disabled"),
f.showErrorMessage(d.errors.join(" ")))}))},showSuccessMessage:function(){p(this.iframeDocument()).find("#completed_message").show();n.delay(n.bind(this.hide,this),3E5)},hideSuccessMessage:function(){p(this.iframeDocument()).find("#completed_message").hide()},showErrorMessage:function(d){p(this.iframeDocument()).find("#error_message").text(d).show()},hideErrorMessage:function(){p(this.iframeDocument()).find("#error_message").hide()},show:function(){this.$el.show();p(this.iframeDocument()).find("body").addClass("fadein").find('[name="email"]').focus()},
hide:function(){this.$el.hide();this.hideSuccessMessage();p(this.iframeDocument()).find("body").addClass("fadein")}});h.components=h.components||{};var da={backinstock:h.components.back_in_stock.create};h.components.Router={_settings:{api_hostname:"a.klaviyo.com",logging:!0,account:null,list:null,platform:null},_components:{},init:function(d){n.extend(this._settings,d)},logging:function(d){h.core.LOGGING_ENABLED=!!d},enable:function(d,f){this._components[d]||da[d]&&(this._components[d]=da[d](this._settings,
f))}};var C=t.klaviyo;C&&C._initialized||(n.isArray(C)||(t.klaviyo=[],C=t.klaviyo),n.each(["init","logging","enable"],function(d){C[d]=function(){var f=[].slice.call(arguments);return C.push([d].concat(f))}}),K(function(d){h.core.log("Initializing.");for(d=function(d){h.core.log("Executing: "+d[0]);if(n.isArray(d)&&d&&h.components.Router[d[0]])return h.components.Router[d[0]].apply(h.components.Router,d.slice(1))};C.length;)d(C.shift());C.push=d;C._initialized=!0}))})(window);

var instantClick,InstantClick=instantClick=function(a,b,c){function w(a){var b=a.indexOf("#");return b<0?a:a.substr(0,b)}function x(a){for(;a&&"A"!=a.nodeName;)a=a.parentNode;return a}function y(a){do{if(!a.hasAttribute)break;if(a.hasAttribute("data-instant"))return!1;if(a.hasAttribute("data-no-instant"))return!0}while(a=a.parentNode);return!1}function z(a){var c=b.protocol+"//"+b.host;return!(a.target||a.hasAttribute("download")||0!=a.href.indexOf(c+"/")||a.href.indexOf("#")>-1&&w(a.href)==e||y(a))}function A(a,b,c,d){for(var e=!1,f=0;f<v[a].length;f++)if("receive"==a){var g=v[a][f](b,c,d);g&&("body"in g&&(c=g.body),"title"in g&&(d=g.title),e=g)}else v[a][f](b,c,d);return e}function B(b,c,f,g,h){if(0!=c&&a.documentElement.replaceChild(c,a.body),f){history.pushState(null,null,f);var i=f.indexOf("#"),j=i>-1&&a.getElementById(f.substr(i+1)),k=0;if(j)for(;j.offsetParent;)k+=j.offsetTop,j=j.offsetParent;scrollTo(0,k),e=w(f)}else scrollTo(0,g);d&&a.title==b?a.title=b+String.fromCharCode(160):a.title=b,L(),h?A("restore"):A("change",!1)}function C(){q=!1,r=!1}function D(a){return a.replace(/<noscript[\s\S]+?<\/noscript>/gi,"")}function E(a){if(!(i>+new Date-500)){var b=x(a.target);b&&z(b)&&M(b.href)}}function F(a){if(!(i>+new Date-500)){var b=x(a.target);b&&z(b)&&(b.addEventListener("mouseout",I),u?(f=b.href,g=setTimeout(M,u)):M(b.href))}}function G(a){i=+new Date;var b=x(a.target);b&&z(b)&&(t?b.removeEventListener("mousedown",E):b.removeEventListener("mouseover",F),M(b.href))}function H(a){var b=x(a.target);b&&z(b)&&(a.which>1||a.metaKey||a.ctrlKey||(a.preventDefault(),N(b.href)))}function I(){return g?(clearTimeout(g),void(g=!1)):void(q&&!r&&(k.abort(),C()))}function J(){if(!(k.readyState<4)&&0!=k.status){if(p.ready=+new Date-p.start,k.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var b=a.implementation.createHTMLDocument("");b.documentElement.innerHTML=D(k.responseText),m=b.title,o=b.body;var c=A("receive",l,o,m);c&&("body"in c&&(o=c.body),"title"in c&&(m=c.title));var d=w(l);j[d]={body:o,title:m,scrollY:d in j?j[d].scrollY:0};for(var g,h,e=b.head.children,f=0,i=0;i<e.length;i++)if(g=e[i],g.hasAttribute("data-instant-track")){h=g.getAttribute("href")||g.getAttribute("src")||g.innerHTML;for(var q=0;q<s.length;q++)s[q]==h&&f++}f!=s.length&&(n=!0)}else n=!0;r&&(r=!1,N(l))}}function K(){if(!h)return void(b.href=b.href);var a=w(b.href);if(a!=e){if(!(a in j))return void(b.href=b.href);j[e].scrollY=pageYOffset,e=a,B(j[a].title,!1,!1,j[a].scrollY,!0)}}function L(b){if(a.body.addEventListener("touchstart",G,!0),t?a.body.addEventListener("mousedown",E,!0):a.body.addEventListener("mouseover",F,!0),a.body.addEventListener("click",H,!0),!b)for(var d,e,f,g,c=a.body.getElementsByTagName("script"),h=0,i=c.length;h<i;h++)d=c[h],d.hasAttribute("data-no-instant")||(e=a.createElement("script"),d.src&&(e.src=d.src),d.innerHTML&&(e.innerHTML=d.innerHTML),f=d.parentNode,g=d.nextSibling,f.removeChild(d),f.insertBefore(e,g))}function M(a){!t&&"display"in p&&+new Date-(p.start+p.display)<100||(g&&(clearTimeout(g),g=!1),a||(a=f),q&&(a==l||r)||(q=!0,r=!1,l=a,o=!1,n=!1,p={start:+new Date},A("fetch"),k.open("GET",a),k.send()))}function N(a){return"display"in p||(p.display=+new Date-p.start),g||!q?g&&l&&l!=a?void(b.href=a):(M(a),A("wait"),void(r=!0)):r?void(b.href=a):n?void(b.href=l):o?(j[e].scrollY=pageYOffset,C(),void B(m,o,l)):(A("wait"),void(r=!0))}function P(c){if(!e){if(!O)return void A("change",!0);"mousedown"==c?t=!0:"number"==typeof c&&(u=c),e=w(b.href),j[e]={body:a.body,title:a.title,scrollY:pageYOffset};for(var f,g,d=a.head.children,h=0;h<d.length;h++)f=d[h],f.hasAttribute("data-instant-track")&&(g=f.getAttribute("href")||f.getAttribute("src")||f.innerHTML,s.push(g));k=new XMLHttpRequest,k.addEventListener("readystatechange",J),L(!0),A("change",!0),window.addEventListener("load",function(){setTimeout(function(){window.addEventListener("popstate",K,!1)},0)},!1)}}function Q(a,b){v[a].push(b)}var e,f,g,i,k,t,u,d=c.indexOf(" CriOS/")>-1,h=!1,j={},l=!1,m=!1,n=!1,o=!1,p={},q=!1,r=!1,s=[],v={fetch:[],receive:[],wait:[],change:[],restore:[]},O="pushState"in history&&(!c.match("Android")||c.match("Chrome/"))&&"file:"!=b.protocol;return{supported:O,init:P,on:Q}}(document,location,navigator.userAgent);!function(){function g(){a=document.createElement("div"),a.id="instantclick",b=document.createElement("div"),b.id="instantclick-bar",a.appendChild(b);var d=["Webkit","Moz","O"];if(c="transform",!(c in b.style))for(var e=0;e<d.length;e++)d[e]+"Transform"in b.style&&(c=d[e]+"Transform");var g="transition";if(!(g in b.style))for(var e=0;e<d.length;e++)d[e]+"Transition"in b.style&&(g="-"+d[e].toLowerCase()+"-"+g);var h=document.createElement("style");h.innerHTML="#instantclick{color:#29d;position:"+(f?"absolute":"fixed")+";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;"+g+":opacity 1s}\n#instantclick-bar{background:currentColor;width:100%;margin-left:-100%;height:2px;"+g+":all 1s}",document.head.insertBefore(h,document.head.firstChild),f&&(n(),addEventListener("resize",n),addEventListener("scroll",n))}function h(){d=0,a.style.opacity="0",k(),setTimeout(i,0),e=setTimeout(j,500)}function i(){d=10,a.style.opacity="1",k()}function j(){d+=1+2*Math.random(),d>99?d=99:e=setTimeout(j,500),k()}function k(){b.style[c]="translate("+d+"%)",document.getElementById(a.id)||document.body.appendChild(a)}function l(){clearTimeout(e)}function m(){document.getElementById(a.id)&&document.body.removeChild(a)}function n(){a.style.left=pageXOffset+"px",a.style.width=document.body.clientWidth+"px",a.style.top=pageYOffset+"px";var b="orientation"in window&&90==Math.abs(orientation),d=innerWidth/screen[b?"height":"width"]*1.34;a.style[c]="scaleY("+d+")"}var a,b,c,d,e,f="createTouch"in document;instantClick.on("change",function(a){a&&instantClick.supported?g():a||l()}),instantClick.on("wait",h),instantClick.on("restore",m)}();

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*============================================================================
  Image functions
==============================================================================*/

var usePageDots = false;

var imageFunctions = {
  zoom: function(zoomParent, enableTouch, magnify){
    var activateZoom = $(zoomParent).data('zoom');
    if (activateZoom){
      $(zoomParent + ' img')
          .wrap('<span style="display:inline-block"></span>')
          .css('display', 'block')
          .parent()
          .zoom({
            touch: enableTouch,
            magnify: magnify ? magnify : 1
      });
    }
  },
  linkGalleryAndCarousel: function($gallery, $carousel){

    $carousel.find('.gallery-cell:nth-child(1)').addClass('is-nav-selected');

    //EVENT - click on carousel item to slide gallery
    $carousel.on( 'click', '.gallery-cell', function() {
        var index = $(this).index();
        $carousel.find('.is-nav-selected').removeClass('is-nav-selected');
        $(this).addClass('is-nav-selected');
        $gallery.flickity( 'select', index );
    });

    //EVENT - update carousel based on gallery index
    $gallery.on( 'select.flickity', function() {
      var galleryData = $(this).data('flickity');
      if (galleryData){
        $carousel.find('.is-nav-selected').removeClass('is-nav-selected');
        $carousel.find('.gallery-cell:nth-child(' + (galleryData.selectedIndex + 1) + ')').addClass('is-nav-selected');
      }
    });
  },
  fullWidth: function(images, imageContainer){
    $(images).each(function(){
      var $image = $(this),
          alt = $image.attr('alt'),
          src = $image.attr('src');

      if (alt.indexOf("[") >= 0){

        //remove from description
        $image.remove();

        //find shortcode values and remove from alt
        var shortcodes = alt.match(/\[(.*?)\]/ig);
        alt = alt.replace(/\[(.*?)\]/ig, '');

        //remove brackets from shortcode to be used as classes
        var captionClass = $.map( shortcodes, function( value, index ) {
            value = value.replace(/[\[\]']+/g,'');
            return value;
        });

        //markup for caption

        var caption = [
            '<div class="position-' + (captionClass.length ? captionClass : 'center') + ' caption js-caption">',
              '<div class="caption-content caption-background-false align-' + (captionClass.length ? captionClass : 'center') + '">',
                '<p class="headline">' + alt + '</p>',
              '</div>',
            '</div>'
        ].join('');

        //image attributes added
        $image.attr({
          alt: alt,
          class: 'lazyload blur-up',
          src: src,
          dataSizes: 'auto'
        });

        var image = $image.prop('outerHTML')
        var banner =  '<div class="banner">' + image + caption + '</div>'

        $(imageContainer).append(banner);
      }
    })
  },
  showSecondaryImage: function(){
    if ($(window).width() > 798) {
      $('body').on("mouseenter", ".swap-true", function() {
        $(this).toggleClass('toggle-images');
      });

      $('body').on("mouseleave", ".swap-true", function() {
        $(this).toggleClass('toggle-images');
      });
    }
  }
}

/*============================================================================
  Recently Viewed
==============================================================================*/

var recentlyViewed = {
  init: function(){

    var productHandle,
        rvCookie,
        rvProducts,
        displayProducts,
        rvProductArray;

    if ($('.js-product_section[data-rv-handle]').length){
      productHandle = $('.js-product_section').data('rv-handle').toString();
      rvCookie = Cookies.get('recentlyViewed');
      rvProducts = recentlyViewed.getCookieProducts(rvCookie, productHandle);
    } else if ($('.recently-viewed__section').length){
      rvCookie = Cookies.get('recentlyViewed');
      rvProducts = recentlyViewed.getCookieProducts(rvCookie, productHandle);
    } else if ($('.collection-template-section .js-sidebar-recently-viewed').length){
      rvCookie = Cookies.get('recentlyViewed');
      rvProducts = recentlyViewed.getCookieProducts(rvCookie, productHandle);
    }

    if (rvProducts){
      rvProductArray = unescape(rvProducts).split(',');
    }

    if (productHandle){

      if(!$.inArray(productHandle, rvProductArray) !== -1){
        displayProducts = [];
        rvProductArray.unshift(productHandle);
        $.each(rvProductArray, function(i, el){
            if($.inArray(el, displayProducts) === -1) displayProducts.push(el);
        });
      }

      recentlyViewed.setCookieProducts(displayProducts);
    } else {
      displayProducts = rvProductArray;
    }

    if ($('.recently-viewed__section').length){
      var parent = '.recently-viewed__section';
      recentlyViewed.getProductInformation(parent, displayProducts);
    } else if ($('.js-recently-viewed .rv-main').length){
      var parent = '.js-recently-viewed';
      recentlyViewed.getProductInformation(parent, displayProducts, productHandle);
    }

    if ($('.sidebar .js-sidebar-recently-viewed').length){
      var parent = '.sidebar .js-sidebar-recently-viewed';
      if (productHandle){
        recentlyViewed.getProductInformation(parent, displayProducts, productHandle);
      } else {
        recentlyViewed.getProductInformation(parent, displayProducts);
      }
      $('.js-sidebar-recently-viewed.hidden').parents('.sidebar-block').hide();
    }

  },
  getCookieProducts: function(rvCookie, productHandle){

    if (!rvCookie && productHandle) {
      Cookies.set('recentlyViewed', productHandle, { expires: 30, path: '/' });
      rvCookie = Cookies.get('recentlyViewed');
    } else {
      rvCookie = Cookies.get('recentlyViewed');
    }

    return rvCookie;

  },
  setCookieProducts: function(rvProductArray){
    Cookies.set('recentlyViewed', escape(rvProductArray.join(',')), { expires: 30, path: '/' });
  },
  getProductInformation: function(parent, displayProducts, productHandle){

    if (productHandle){
      displayProducts.splice( $.inArray(productHandle, displayProducts), 1 );
    }

    var productLimit = $(parent).data('visible-products');

    if (productLimit && displayProducts){
      displayProducts = displayProducts.slice(0, productLimit);
    }

    $.each(displayProducts, function (index, value) {

      if (value){
        $(parent).removeClass('hidden');

        $(parent).parents('.sidebar-block').show();

        $.ajax({
          type: 'GET',
          url: '/products/' + value  + '?view=rv',
          success: function(data) {

            var rvProduct = $(data).find('.js-recently-viewed-product');

            $(parent).find(' .rv-box-' + index ).append(rvProduct);

            //Convert pricing
            

           },
           error: function(x, t, m) {
            console.log(x);
            console.log(t);
            console.log(m);
           },
           dataType: "html"
        });
      }

      if ($(parent).find('.rv-main').hasClass('js-rv-slider')){
        if (displayProducts.length <= productLimit) {
          $('.js-rv-slider .gallery-cell').eq(displayProducts.length).nextAll().addBack().remove();
        } else {
          $('.js-rv-slider .gallery-cell').eq(productLimit).nextAll().addBack().remove();
        }
        recentlyViewed.createSlider(parent, productLimit);
      } else if ($(parent).find('.rv-main').hasClass('js-rv-grid')){
        if (displayProducts.length <= productLimit) {
          $('.js-rv-grid .thumbnail').eq(displayProducts.length).nextAll().addBack().remove();
        } else {
          $('.js-rv-grid .thumbnail').eq(productLimit).nextAll().addBack().remove();
        }
      }
    });
  },

  createSlider: function(el, productsAvailable){

    var products_per_slide = $('.js-rv-slider').data('products-per-slide');
    var products_limit = $('.js-rv-slider').data('products-limit');
    var products_available = productsAvailable;
    var indexProductsAvailable = productsAvailable - 1;
    var rvProductstoShow = $('.js-rv-slider').find('.gallery-cell');
    var cellAlign,
        draggable,
        prevNext,
        wrapAround,
        initialIndex;

    if (products_per_slide == "2" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "4" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "6" && products_available > products_per_slide && products_limit > products_per_slide){
      cellAlign = "left";
    } else {
      cellAlign = "center";
    }

    if (products_available > products_per_slide && products_limit > products_per_slide) {
      draggable = true;
      prevNext = true;
      wrapAround = true;
    } else {
      draggable = false;
      prevNext = false;
      wrapAround = false;
    }

    if (products_per_slide == "2" && products_available > products_per_slide || products_per_slide == "4" && products_available > products_per_slide || products_per_slide == "6" && products_available > products_per_slide){
      initialIndex = 0;
    } else if (products_per_slide == "3" && products_available) {
      initialIndex = 1;
    } else if (products_per_slide == "5" && products_available) {
      initialIndex = 2;
    } else if (products_per_slide == "7" && products_available) {
      initialIndex = 3;
    }

    if ($(window).width() <= 798) {

      cellAlign = "center";
      initialIndex = 1;

      if (rvProductstoShow.length <= 2){
        draggable = false;
        prevNext = false;
        wrapAround = false;
      } else if (products_available > 3 && products_limit > 3) {
        draggable = true;
        prevNext = true;
        wrapAround = true;
      } else {
        draggable = false;
        prevNext = false;
        wrapAround = false;
      }

      $('.js-rv-slider').parents('.even-num-slides').removeClass('even-num-slides');
    }

    $('.js-rv-slider').flickity({
      "lazyLoad": 2,
      "imagesLoaded": true,
      "draggable": draggable,
      "prevNextButtons": prevNext,
      "wrapAround": wrapAround,
      "cellAlign": cellAlign,
      "pageDots": usePageDots,
      "contain": true,
      "freeScroll": true,
      "arrowShape": arrowSize,
      "initialIndex": initialIndex
    });

    $('.js-rv-slider').addClass('slider-initialized');
  }
}

/*============================================================================
  Featured collection section
==============================================================================*/

var featuredCollectionSection = {
  init: function(){
    $('.js-product-slider .products-slider').each(function (index, value) {
      var products_per_slide = $(this).data('products-per-slide');
      var products_limit = $(this).data('products-limit');
      var products_available = $(this).data('products-available');
      var cellAlign,
          draggable,
          prevNext,
          wrapAround,
          initialIndex;

      if (products_per_slide == "2" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "4" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "6" && products_available > products_per_slide && products_limit > products_per_slide){
        cellAlign = "left";
      } else {
        cellAlign = "center";
      }

      if (products_available > products_per_slide && products_limit > products_per_slide) {
        draggable = true;
        prevNext = true;
        wrapAround = true;
      } else {
        draggable = false;
        prevNext = false;
        wrapAround = false;
      }

      if (products_per_slide == "2" && products_available > products_per_slide || products_per_slide == "4" && products_available > products_per_slide || products_per_slide == "6" && products_available > products_per_slide){
        initialIndex = 0;
      } else if (products_per_slide == "3" && products_available) {
        initialIndex = 1;
      } else if (products_per_slide == "5" && products_available) {
        initialIndex = 2;
      } else if (products_per_slide == "7" && products_available) {
        initialIndex = 3;
      }

      if ($(window).width() <= 798) {
        cellAlign = "center";
        draggable = true;
        prevNext = true;
        wrapAround = true;
        initialIndex = 1;

        $(this).parents('.even-num-slides').removeClass('even-num-slides');
      }

      $(this).flickity({
        "lazyLoad": 2,
        "imagesLoaded": true,
        "draggable": draggable,
        "prevNextButtons": prevNext,
        "wrapAround": wrapAround,
        "cellAlign": cellAlign,
        "pageDots": usePageDots,
        "contain": true,
        "freeScroll": true,
        "arrowShape": arrowSize,
        "initialIndex": initialIndex
      });

      $(this).addClass('slider-initialized');
    });
  },
  unload: function($target){
    var $slider = $target.find('.js-product-slider');
    if ($slider.hasClass('flickity-enabled')){
      $slider.flickity('destroy');
    }
  }
}

var featuredPromotions = {
  init: function(){
    if ($(window).width() > 798 || $(window).width() == 0) {
      $('.feature-overlay').hover(function(){
        $(this).find('.feature-details').slideDown('100', function(){
          $(this).addClass('reveal-details');
        });
      }, function(){
        $(this).find('.feature-details').removeClass('reveal-details');
        $(this).find('.feature-details').slideUp('100');
      });

      $('.js-featured-promotions').each(function (index, value){
        var $promos = $(this);
        var animationStyle = $(this).data('promo-animation');

        $promos.waypoint(function() {
          $(this.element).find(".feature-section").addClass("animated " + animationStyle);
        }, { offset: '80%' });
      });
    }
  }
}

/*============================================================================
  Slideshow section
==============================================================================*/

var slideshow = {
  init: function(){

    $('.js-homepage-slideshow').each(function (index, value){
      var $homepageSlider = $(this);
      var settings = {
        slideshowSpeed: $homepageSlider.data('slideshow-speed')*1000,
        slideshowTextAnimation: $homepageSlider.data('slideshow-text-animation'),
        adaptiveHeight: $homepageSlider.data('adaptive-height')
      }

      //initiate the slideshow
      if (!$homepageSlider.hasClass('flickity-enabled')){
        var arrowShow = $homepageSlider.find('.gallery-cell').length === 1 ? false : true;
        $homepageSlider.flickity({
                    adaptiveHeight: settings.adaptiveHeight,
                    wrapAround: true,
                    cellAlign: 'left',
                    imagesLoaded: true,
                    prevNextButtons: arrowShow,
                    draggable: arrowShow,
                    pageDots: usePageDots,
                    autoPlay: settings.slideshowSpeed,
                    arrowShape: arrowSize
                  });

        if (settings.slideshowTextAnimation != ''){
          var flkty = $homepageSlider.data('flickity');
          setTimeout(function() {
            $homepageSlider.find('.gallery-cell:nth-child(1) .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
          }, 400);

          $homepageSlider.on( 'select.flickity', function() {
            if($homepageSlider.is(':visible')) {
              var currentSlide = flkty.selectedIndex + 1;
              setTimeout(function() {
                $homepageSlider.find('.caption-content').removeClass('animated ' + settings.slideshowTextAnimation);
                $homepageSlider.find('.gallery-cell:nth-child(' + currentSlide + ') .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
              }, 400);
            }
          });
        }
      }

      if ($homepageSlider.find('.gallery-cell').length > 1) {
        $homepageSlider.addClass('multi-image');
      } else {
        $homepageSlider.addClass('single-image');
      }

      $homepageSlider.find('.gallery-cell').each(function(){
        var buttonWidth = 0;
        $(this).find('.action_button').each(function(){
          $button = $(this);
          if($(this).width() > buttonWidth){
              buttonWidth = $(this).width();
          }
        });
        $(this).find('.action_button').width(buttonWidth);
      });

    });
  },
  unload: function($target){

    var $slider = $target.find('.js-homepage-slideshow');
    $slider.flickity('destroy');

  }
}

  /*============================================================================
    Testimonial
  ==============================================================================*/

var testimonial = {
  init: function(){

    $('.js-testimonial').each(function (index, value){
      var $testimonialSlider = $(this);
      var settings = {
        slideshowSpeed: $testimonialSlider.data('slideshow-speed')*1000,
        slideshowTextAnimation: $testimonialSlider.data('slideshow-text-animation')
      }

      if( $('.testimonial-image').length > 0){
        $('.testimonial-block').each(function(){
          if( $(this).find('.testimonial-image').length == 0){
            var theBlock = $(this).closest('.testimonial-block');
            $(theBlock).addClass('set-testimonial-height');
          }
        })
      }

      //initiate the slideshow
      if (!$testimonialSlider.hasClass('flickity-enabled')){
        var arrowShow = $testimonialSlider.find('.gallery-cell').length === 1 ? false : true;
        $testimonialSlider.flickity({
                        wrapAround: true,
                        cellAlign: 'left',
                        imagesLoaded: true,
                        prevNextButtons: arrowShow,
                        draggable: arrowShow,
                        pageDots: usePageDots,
                        autoPlay: settings.slideshowSpeed,
                        arrowShape: arrowSize
                      });

        if (settings.slideshowTextAnimation != ''){
          var flkty = $testimonialSlider.data('flickity');
          setTimeout(function() {
            $testimonialSlider.find('.gallery-cell:nth-child(1) .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
          }, 400);

          $testimonialSlider.on( 'select.flickity', function() {
            if($testimonialSlider.is(':visible')) {
              var currentSlide = flkty.selectedIndex + 1;
              setTimeout(function() {
                $testimonialSlider.find('.caption-content').removeClass('animated ' + settings.slideshowTextAnimation);
                $testimonialSlider.find('.gallery-cell:nth-child(' + currentSlide + ') .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
              }, 400);
            }
          });
        }
      }

      if ($testimonialSlider.find('.gallery-cell').length > 1) {
        $testimonialSlider.addClass('multi-image');
      } else {
        $testimonialSlider.addClass('single-image');
      }

      $testimonialSlider.find('.gallery-cell').each(function(){
        var buttonWidth = 0;
        $(this).find('.action_button').each(function(){
          $button = $(this);
          if($(this).width() > buttonWidth){
              buttonWidth = $(this).width();
          }
        });
        $(this).find('.action_button').width(buttonWidth);
      });

    });
  },

  unload: function($target){
    var $slider = $target.find('.js-testimonial');

    $slider.flickity('destroy');

  }
}

  /*============================================================================
    Gallery section
  ==============================================================================*/

  var gallery = {
    init: function(){

      $('.gallery-horizontal').find('.gallery-image-wrapper').each(function(){
        var wrapper = $(this);
        var images = $(this).find("img");
        var imgWidth,
            imgHeight;

       $("<img />").attr("src", $(images).attr("src")).on('load', function() {
         imgWidth = this.width;
         imgHeight = this.height;

          $(wrapper).css("flex-basis", imgWidth * 200 / imgHeight);
          $(wrapper).css("flex-grow", imgWidth * 200 / imgHeight);
          $(wrapper).find("i").css("padding-bottom", imgHeight / imgWidth * 100 + '%');
      });
    });

      //initialize lightbox
      lightboxGallery.init();

    }
  }

/*============================================================================
  Video section
==============================================================================*/

//check to see if HTML5 video is supported
var supports_video = function(){
  return !!document.createElement('video').canPlayType;
}

var videoSection = {
  init: function(){

    var $videoElement,
        settings;

    //Check for videos that are set to autoplay
    $('.homepage-video').each(function (index, value) {
      if ($('.homepage-video').length && supports_video()) {

        $videoElement = $(this);

        settings = videoSection.getVideoSettings($videoElement);

        if (is_touch_device() && $(window).width() <= 798 && settings.posterImage === false || $(window).width() <= 798 && settings.posterImage === false) {
          //add video element on small screens if there is no poster image
          videoSection.appendFrame($videoElement, settings);
        } else if (settings.autoPlayVideo && $(window).width() > 798){
          //add video element when autoplay is true and it's on a larger screen
          videoSection.appendFrame($videoElement, settings);
        } else if (settings.autoPlayVideo === false && settings.posterImage === false){
          //add video element when autoplay is false but there is no poster image
          videoSection.appendFrame($videoElement, settings);
        } else {
          //Show poster image on smaller sceens and when it exists
          $videoElement.find('.homepage-video__placeholder').show();
          $videoElement.find('.placeholder-svg--video').show();
        }

      }
    });

    //Attach event listener for videos
    $('body').on('click', '.video__play-button', function(e) {
      $videoElement = $(this).parents('.video-section').find('.homepage-video');
      $(this).fadeOut();
      settings = videoSection.getVideoSettings($videoElement);
      if ($videoElement.find('.mediaWrapper').length < 1 && $videoElement.find('video').length < 1){
        videoSection.appendFrame($videoElement, settings);
      }
    });

    $('body').on('click', '[data-play-video]', function(e) {
      $videoElement = $(this).parents('.video-section').find('.homepage-video');
      $(this).fadeOut();
      settings = videoSection.getVideoSettings($videoElement);
      if ($videoElement.find('.mediaWrapper').length < 1 && $videoElement.find('video').length < 1){
        videoSection.appendFrame($videoElement, settings);
      }
    });
  },
  getVideoSettings: function($videoElement){
    var settings = {
      container: $videoElement.find('.homepage-video'),
      header: $videoElement.find('.homepage-video--media'),
      posterImage: $videoElement.data('poster-image'),
      videoText: $videoElement.find('.homepage-video--media .caption'),
      videoTrigger: $videoElement.find("[data-play-video]"),
      autoPlayVideo: $videoElement.data('autoplay'),
      displayTextOverVideo: $videoElement.data('display-text-over-video'),
      autoloop: $videoElement.data('autoloop'),
      id: $videoElement.attr('data-video-src'),
      aspectRatio: $videoElement.attr('data-aspect-ratio').split(":"),
      provider: $videoElement.attr('data-provider').toLowerCase(),
      videoMP4: $videoElement.attr('data-video-mp4'),
      videoOGV: $videoElement.attr('data-video-ogv')
    }
    return settings;
  },
  createFrame: function(settings){
    var autoloop,
        controls,
        html,
        autoplay,
        poster = '';

    if(settings.provider === 'youtube') {
      if (settings.autoloop){
        autoloop = '1&iv_load_policy=3&playlist='+settings.id;
      } else {
        autoloop = 0;
      }

      if (settings.posterImage === false && settings.autoPlayVideo === false){
        autoplay = 0;
      } else {
        autoplay = 1;
      }

      controls = 1;

      html = '<iframe src="//www.youtube.com/embed/'+settings.id+'?&autoplay='+autoplay+'&loop='+autoloop+'&rel=0&hd=1&showinfo=0&color=white&controls=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>';
    }
    else if(settings.provider === 'vimeo') {

      if (settings.posterImage === false && settings.autoPlayVideo === false){
        autoplay = 0;
      } else {
        autoplay = 1;
      }

      if (settings.autoloop){
        autoloop = 1;
      } else {
        autoloop = 0;
      }
      html = '<iframe src="//player.vimeo.com/video/'+settings.id+'?loop='+autoloop+'&amp;title=0&amp;byline=0&amp;portrait=0&amp;color=3d96d2&autoplay='+autoplay+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>';
    }
    else if(settings.provider === 'html5') {

      if (settings.posterImage !== false){
        poster = ' poster="https://' + settings.posterImage;
      }

      if (settings.posterImage === false && settings.autoPlayVideo === false && is_touch_device() === 0){
        autoplay = ' ';
      } else if (settings.autoPlayVideo && settings.posterImage !== false){
        poster = ' poster="https://' + settings.posterImage;
        autoplay = ' autoplay ';
      } else {
        autoplay = ' autoplay ';
      }

      if (settings.autoloop){
        autoloop = ' loop="loop" ';
      }

      controls = '';

      html = '<video '+ controls + autoplay + autoloop + poster +' id="video" onclick="this.paused?this.play():this.pause();" ><source src="'+settings.videoMP4+'" type="video/mp4"><source src="'+settings.videoOGV+'" type="video/ogg" ></video>';
    }
    return html;
  },
  appendFrame: function($videoElement, settings){

    var mediaWrapper;

    if (settings.displayTextOverVideo === false){
      settings.videoText.fadeOut();
    }

    $videoElement.find('.video__play-button').fadeOut();


    $videoElement.append(videoSection.createFrame(settings));

    if (settings.provider != 'html5'){
      var paddingBottomValue = settings.aspectRatio[1] / settings.aspectRatio[0] * 100 + '%';

      $videoElement.find('iframe').mediaWrapper({
        intrinsic: false,
        baseWidth : settings.aspectRatio[0],
        baseHeight: settings.aspectRatio[1]
      });

      $videoElement.css({
        height: 0,
        paddingBottom: paddingBottomValue
      });

    } else {
      $videoElement.find('.homepage-video__image').hide();
    }

  },
  unload: function($target){
    $target.find('[data-play-video]').off('click');
  }
}

var cart = {
  init: function(){
    if ($('#cart_form .tos_agree').length) {
      //Terms of service on cart page
      $('body').on('click', "#cart_form input[type='submit']", function() {
        if ($(this).parents('form').find('.tos_agree').is(':checked')) {
          $(this).submit();
        } else {
          var warning = '<p class="warning animated bounceIn">' + "You must agree with the terms and conditions to checkout." + '</p>';
          if ($('p.warning').length == 0) {
            $(this).before(warning);
          }
          return false;
        }
      });
    }
  }
}

/*============================================================================
  Product page
==============================================================================*/

selectCallback = function(variant, selector) {
  var $product = $('.product-' + selector.product.id);
  var $notify_form = $('.notify-form-' + selector.product.id);
  var $productForm = $('.product_form', $product);
  var variantInventory = $productForm.data('variant-inventory');

  //Image Variant feature
   if (variant && variant.featured_image && $product.is(":visible")) {
    var $sliders = $('.product_gallery', $product);
    $sliders.each(function() {
      var $slider = $(this);
      var $sliderInstance = Flickity.data(this);
      if ($slider.is(":visible") && $sliderInstance != undefined ) {
        var index = $('[data-image-id="' + variant.featured_image.id + '"]').data('index');
        $sliderInstance.select( index, false, true );
      }
    });
  }

  if (variant) {
    if (variantInventory) {
      variantInventory.forEach(function(v){
        if (v.id === variant.id) {
          variant.inventory_quantity = v.inventory_quantity;
          variant.inventory_management = v.inventory_management;
          variant.inventory_policy = v.inventory_policy;
        }
      });
    }

    $('.sku span', $product).text(variant.sku);

    
      for (var i=0,length=variant.options.length; i<length; i++) {
        var radioButton = $productForm.find('.swatch[data-option-index="' + escape(i) + '"] :radio[value="' + variant.options[i].replace(/\"/g,'\\"') +'"]');
        if (radioButton.length) {
          radioButton.get(0).checked = true;
        }
      }
    
  }

  if (variant && variant.available == true) {
    if(variant.price < variant.compare_at_price){
      $('.was_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.compare_at_price, $productForm.data('money-format')) + '</span>');
      $('.savings', $product).html("You Save" + ' ' + parseInt(((variant.compare_at_price - variant.price) * 100) / variant.compare_at_price) + '% (' + '<span class="money">' + Shopify.formatMoney(variant.compare_at_price - variant.price, $productForm.data('money-format')) + '</span>)');
      $('.current_price', $product).parent().addClass('sale');
    } else {
      $('.was_price', $product).html('');
      $('.savings', $product).html('');
      $('.current_price', $product).parent().removeClass('sale');
    }

    if (variant.inventory_management && variant.inventory_quantity > 0) {
      
      
    } else {
      $('.items_left', $product).text('');
      $('.quantity', $product).removeAttr('max');
    }

    $('.sold_out', $product).text('');
    if (variant.price > 0) {
      $('.current_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.price, $productForm.data('money-format')) + '</span>');
    } else {
      $('.current_price', $product).html("Free");
    }
    $('.add_to_cart', $product).removeClass('disabled').removeAttr('disabled').find('span').text($('.add_to_cart', $product).data('label'));
    $('.shopify-payment-button', $product).show();
    $notify_form.hide();
  } else {
    var message = variant ? "Sold Out" : "Unavailable";
    $('.was_price', $product).text('');
    $('.savings', $product).text('');
    $('.current_price', $product).text('');
    $('.items_left', $product).text('');
    $('.quantity', $product).removeAttr('max');
    $('.sold_out', $product).text(message);
    $('.add_to_cart', $product).addClass('disabled').attr('disabled', 'disabled').find('span').text(message);
    $('.shopify-payment-button', $product).hide();
    if (variant) {
      $notify_form.fadeIn();
    }
  }

  
};

var productPage = {
  init: function(){

    var draggable = true;
    var prevNextButtons = true;
    var autoplay = $('.product_gallery').data('autoplay');

    setTimeout(function(){
     imageFunctions.linkGalleryAndCarousel($('.js-product-page-gallery .product_gallery'), $('.js-product-page-gallery .product_gallery_nav'));
    }, 1000);
    imageFunctions.zoom('.product_gallery', false);

    if($('.js-full-width-product-images').length){
      imageFunctions.fullWidth('.product-template .product .description img', '.js-full-width-product-images');
    }

    if ($('.product_gallery').hasClass('single-image')){
      draggable = false;
      prevNextButtons = false;
    }

    $('.product_gallery').flickity({
      "adaptiveHeight": true,
      "wrapAround": "true",
      "cellAlign": "left",
      "draggable": draggable,
      "contain": true,
      "imagesLoaded": true,
      "lazyLoad": 2,
      "pageDots": usePageDots,
      "prevNextButtons": prevNextButtons,
      "autoPlay": autoplay ? 6000 : false,
      "selectedAttraction": 0.01,
      "friction": 0.15,
      "arrowShape": arrowSize
    });

    $(".js-product_section .product_form_options").each(function() {
     new Shopify.OptionSelectors($(this).data("select-id"), { product: $(this).data("product"), onVariantSelected: selectCallback, enableHistoryState: $(this).data("enable-state") });
    });

    var $notify_form = $('.notify_form .contact-form');
    $notify_form.each(function() {
      var $nf = $(this);
      $nf.on("submit", function (e) {
        if($('input[name="challenge"]', $nf).val() !== "true") {
          $.ajax({
            type: $nf.attr('method'),
            url: $nf.attr('action'),
            data: $nf.serialize(),
            success: function (data) {
              $nf.fadeOut("slow", function(){
                $nf.prev('.message').html("Thanks! We will notify you when this product becomes available!");
              });
            },
            error: function(data) {
              $('input[name="challenge"]', $nf).val('true');
              $nf.submit();
            }
          });
          e.preventDefault();
        }
      });
    });

    
      $('body').on('change', '.swatch :radio', function() {
        var optionIndex = $(this).closest('.swatch').attr('data-option-index');
        var optionValue = $(this).val();
        var parentForm = $(this).closest('.product_form');


        if (parentForm.siblings('.notify_form').length){
          var notifyForm = parentForm.siblings('.notify_form');
        } else {
          //quick shop
          var notifyForm = $('.js-notify-form');
        }

        var option1 = parentForm.find('.swatch_options input:checked').eq(0).val();
        var option2 = parentForm.find('.swatch_options input:checked').eq(1).val() || '';
        var option3 = parentForm.find('.swatch_options input:checked').eq(2).val() || '';

        if (option1 && option2 && option3){
          var notifyMessage = option1 + ' / ' + option2 + ' / ' + option3;
        } else if (option1 && option2){
          var notifyMessage = option1 + ' / ' + option2;
        } else {
          var notifyMessage = option1;
        }


        notifyForm.find(".notify_form_message").attr("value", notifyForm.find(".notify_form_message").data('body') + " - " + notifyMessage );

        $(this)
          .closest('form')
          .find('.single-option-selector')
          .eq(optionIndex)
          .val(optionValue)
          .trigger('change');
      });
    

    //initialize lightbox
    lightboxGallery.init();

  },
  productSwatches: function(){
    //Swatches linked with selected options
      
      if ($('.js-product_section').length){
        var $productForms = $('.js-product_section').find('.product_form');
        $productForms.addClass('is-visible');

        //Loop through each product and set the initial option value state

        $productForms.each(function(){
          var JSONData = $(this).data('product');
          var productID = $(this).data('product-id');
          var productSection = '.product-' + productID + ' .js-product_section';
          var swatchOptions = $(this).find('.swatch_options .swatch');
          if (swatchOptions.length > 1){
            Shopify.linkOptionSelectors(JSONData, productSection);
          }
        });
      }

      //Add click event when there is more than one product on the page (eg. Collection in Detail)
      if ($('.js-product_section').length > 1){
        $('body').on('click', '.swatch-element', function(){
          var swatchValue = $(this).data('value');

          $(this)
          .siblings('input[value="'+ swatchValue.replace(/\"/g,'\\"') +'"]')
          .prop("checked", true)
          .trigger("change");

          var JSONData = $(this).parents('.product_form').data('product');
          var productID = $(this).parents('.product_form').data('product-id');
          var productSection = '.product-' + productID + ' .js-product_section';
          var swatchOptions = $(this).parents('.product_form').find('.swatch_options .swatch');
          if (swatchOptions.length > 1){
            Shopify.linkOptionSelectors(JSONData, productSection);
          }
        })
      }
    
  },
  relatedProducts: function(){

    $('.js-related-products-slider .products-slider').each(function (index, value) {
      var products_per_slide = $(this).data('products-per-slide');
      var products_limit = $(this).data('products-limit');
      var products_available = $(this).data('products-available');
      var cellAlign,
          draggable,
          prevNext,
          wrapAround,
          initialIndex;

      if (products_per_slide == "2" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "4" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "6" && products_available > products_per_slide && products_limit > products_per_slide){
        cellAlign = "left";
      } else {
        cellAlign = "center";
      }

      if (products_available > products_per_slide && products_limit > products_per_slide) {
        draggable = true;
        prevNext = true;
        wrapAround = true;
      } else {
        draggable = false;
        prevNext = false;
        wrapAround = false;
      }

      if (products_per_slide == "2" && products_available > products_per_slide || products_per_slide == "4" && products_available > products_per_slide || products_per_slide == "6" && products_available > products_per_slide){
        initialIndex = 0;
      } else if (products_per_slide == "3" && products_available) {
        initialIndex = 1;
      } else if (products_per_slide == "5" && products_available) {
        initialIndex = 2;
      } else if (products_per_slide == "7" && products_available) {
        initialIndex = 3;
      }

      if ($(window).width() <= 798) {
        cellAlign = "center";
        draggable = true;
        prevNext = true;
        wrapAround = true;
        initialIndex = 1;

        $(this).parents('.even-num-slides').removeClass('even-num-slides');
      }

      $(this).flickity({
        "lazyLoad": 2,
        "imagesLoaded": true,
        "draggable": draggable,
        "cellAlign": cellAlign,
        "prevNextButtons": prevNext,
        "wrapAround": wrapAround,
        "pageDots": usePageDots,
        "contain": true,
        "freeScroll": true,
        "arrowShape": arrowSize,
        "initialIndex": initialIndex
      });
    });
  },
  initializeQuantityBox: function(){

    $('body').on('click', '.js-change-quantity', function() {
        var $this = $(this),
            $input = $(this).siblings('input'),
            val = parseInt($input.val()),
            valMax = 100000000000000000000000000000,
            valMin = $input.attr('min') || 0;

        if ($input.attr('max') != null){
          valMax = $input.attr('max');
        }

        if(isNaN(val) || val < valMin) {
            $input.val(valMin);
            return false;
        } else if (val > valMax) {
            $input.val(valMax);
            return false;
        }

        if($this.data('func') == 'plus') {
            if(val < valMax) $input.val(val + 1);
        } else {
            if(val > valMin) $input.val(val - 1);
            if($this.parents(".cart_item").length) {
              if (val - 1 == 0) {
                $this.closest('.cart_item').addClass('animated fadeOutUp')
              }
            }
        }
        $input.trigger('change');

    });
  },
  unload: function($target){

    var $slider = $target.find('.products-slider');
    $slider.flickity('destroy');

  }
}

/*============================================================================
  Newsletter Popup
==============================================================================*/

var newsletter_popup = {
  init: function(){
    var popup = Cookies.get('popup');
    var cookie_enabled = true;

    if (cookie_enabled && popup == 'open') {
      return false;
    } else {
      newsletter_popup.open();
    }
    if (cookie_enabled) {
      Cookies.set('popup', 'open', { expires: 14 });
    }
  },
  open: function(){
    if (false || $(window).width() > 798) {
      setTimeout( function() {
        $('[data-remodal-id=newsletter]').remodal().open();
      },
      0*1000);
    }
  }
}

/*============================================================================
  Header section
==============================================================================*/

var header = {
  init: function(){

    var closeDropdown = function() {
      $('body').removeClass('is-active');
      $('.dropdown_link').removeClass('active_link');
      $('.dropdown_container').hide();
      $('.mobile_nav').find('div').removeClass('open');
    };

    var closeMiniCart = function() {
      $('body').removeClass('is-active').removeClass('blocked-scroll');
      $('.dropdown_link').toggleClass('active_link');
      $('.cart_container').removeClass('active_link');
    };

    var openMiniCart = function($cart_container) {
    	$('body').addClass('blocked-scroll');
      $('.mobile_nav div').removeClass('open');
      $('.dropdown_link').removeClass('active_link');
      $cart_container.addClass('active_link');
    };

    //Vertical menu enabled
    if ($('.dropdown_link--vertical').length){
      $('.dropdown_link--vertical, .vertical-menu_submenu').on('mouseover', function(e) {
        var $dropdown = $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
        var clickCount = $(this).attr('data-click-count');

        $('.active_link').removeClass('active_link');
        if(!$(this).hasClass('active_link')) {
          $(this).children('a').addClass('active_link');
          $('.is-absolute').parent().removeClass('feature_image');
        }
      });

      //Enable touch on parent link if on touch device and desktop menu is visible
      if(is_touch_device()){
        $('.vertical-menu .sublink a, .vertical-menu_submenu .sublink a').on('touchstart click', function(e) {
          e.stopPropagation();

          var verticalMenu = $(this);

          if(e.type == "touchstart") {
            clicked = true;
            if($(this).attr('data-click-count') < 1) {
              openDropdown(verticalMenu);
              e.preventDefault();
            }
          }
          else if(e.type == "click" && !clicked) {
            if($(this).attr('data-click-count') < 1) {
              openDropdown(verticalMenu);
              e.preventDefault();
            }
          }
          else {
            clicked = false;
          }

          function openDropdown(verticalMenu) {

            var $dropdownMegaMenu = $(verticalMenu).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
            var $dropdownVertical = $(verticalMenu).next('.vertical-menu_submenu');
            var clickCount = $(verticalMenu).attr('data-click-count');

            $('.dropdown_link--vertical').not(verticalMenu).attr('data-click-count', 0);
            $('.dropdown_link--vertical').attr('data-no-instant', true);
            $('.dropdown_container').hide();

            $dropdownMegaMenu.show();
            $('.vertical-menu_submenu').removeClass('is-visible');
            $dropdownVertical.addClass('is-visible');

            //capture touch event
            if (e.type == 'touchstart'){
              clickCount++;
              $(verticalMenu).attr('data-click-count', clickCount);

              if (clickCount < 2){
                e.preventDefault();
                e.stopPropagation();
                return false;
              }
            }
          }
        });
      }
    }

    if ($('.promo_banner').length){
      var promo_banner = Cookies.get('promo_banner');

      if (promo_banner != 'dismiss') {
        $('body').addClass('promo_banner-show');
        $('.promo_banner').on('click', '.promo_banner-close', function(){
          $('body').removeClass('promo_banner-show');
          Cookies.set('promo_banner', 'dismiss', { expires: 30 });
        });
      }
    }

    //offscreen check for menu
    $('.vertical-menu_submenu, .vertical-menu_sub-submenu').each(function() {
      if($(this).is(':off-right')) {
        $(this).addClass('vertical-menu--align-right');
      }
    });

    //Click anywhere outside of dropdown to close
    $('html').on('click', function(event) {
      if (!$(event.target).closest('.cart_container').length && $('.cart_content').is(':visible')) {

        closeMiniCart();
      }

      if (!$(event.target).closest('.dropdown_container').length && $('.dropdown').is(':visible')) {

        closeDropdown();
      }

    });

    //Only apply on larger screen sizes
    if ($(window).width() > 798) {
      if ($('.header').hasClass('header-fixed--true')){

        //offset scroll position
        $('body').on('click', '.banner a[href^="#"]', function(e) {
            e.preventDefault();
            var anchorLink = $(this).attr('href');
            var headerHeight = $('.main_nav_wrapper.sticky_nav').outerHeight();
            $('html, body').animate({
              scrollTop: $(anchorLink).offset().top - headerHeight
            }, 2000);
        });

        if (!$('.main_nav_wrapper').hasClass('sticky_nav')) {
          var sticky_nav = new Headhesive('.main_nav_wrapper', {
            offset: 700,
            throttle: 300,
            classes: {
              clone: 'sticky_nav',
              stick: 'sticky_nav--stick',
              unstick: 'sticky_nav--unstick'
            },
            onInit: function() {
              $(".sticky_nav .secondary_logo").css('display', 'none');
              $(".sticky_nav .primary_logo").css('display', 'block');
              $(".sticky_nav .icon-search").css('display', 'block');
              $(".sticky_nav .search_container").css('display', 'none');
              $(".sticky_nav .nav:last").prepend($(".header .cart_container").clone());
              
                var sticky_nav_height = $(".sticky_nav").height() + 5;
              
              $(".sticky_nav .mini_cart").css("height", $(".sticky_nav").height() + 5);
              $(".sticky_nav .cart_content").css("top", $(".sticky_nav").height());
            },
            onUnstick: function() {
              $('.cart_container').removeClass('active_link');
            }
          });
        }
      } else {
        $('.header-fixed--true').removeClass('header-fixed--true');
        if ($('.main_nav_wrapper').length > 1) {
          $('.main_nav_wrapper').first().remove();
        }
      }

      if ($('img.primary_logo:visible')){
        $('.logo img', $(".feature_image .header")).attr('src', $('.logo img').data('src-home'));
      } else {
        $('.logo img').attr('src', $('.logo img').data('src'));
      }
    //Mobile menu
    } else {
      if ($('#header').hasClass('mobile_nav-fixed--true')){
        $('body').addClass('mobile_nav-fixed--true');

        //offset scroll position
        $('body').on('click', '.banner a[href^="#"]', function(e) {
            e.preventDefault();
            var anchorLink = $(this).attr('href');
            var headerHeight = $('#header').outerHeight();
            $('html, body').animate({
              scrollTop: $(anchorLink).offset().top - headerHeight
            }, 2000);
        });
      } else {
        $('body').addClass('mobile_nav-fixed--false');
      }
    }

    //avoid cart_content duplicating
    if($('.cart_content').length <= 2) {
      $('#header .cart_container').append($('.cart_content').clone());
    }

    if ( is_touch_device() || $(window).width() <= 798 ) {

      $('.dropdown_link').attr('data-no-instant', true);

      $('body').on('click', '.dropdown_link', function(e) {
        $('.nav a').removeClass('active_link');

        if ($('#header').is(':visible')) {
          var $dropdown = $(this).parents("#header").find('[data-dropdown="' + $(this).data("dropdown-rel") + '"]')

            if(!$(this).hasClass('mini_cart')) {
              $('.cart_container').removeClass('active_link');
            }

        } else {

          if($(this).hasClass("icon-search")) {
            window.location = $(this).attr("href");
            return false;
          }

          var $dropdown = $(this).parents(".main_nav").find('[data-dropdown="' + $(this).data("dropdown-rel") + '"]')
        }

        if ($dropdown.is(':visible') || $dropdown.attr('class') === undefined) {
          $dropdown.hide();
          $('body').removeClass('is-active');
        } else {
          $('.dropdown_container').hide();
          if(!$(this).hasClass('cart_container')) {
            $('.is-absolute').parent().removeClass('feature_image');
          }
          $dropdown.show();
          $('body').addClass('is-active');
          $('.mobile_nav').find('div').removeClass('open');
        }

        if ($dropdown.is(':visible')) {
          e.stopPropagation();
          return false;
        }
      });

      $('body').on("click", '.mobile_nav', function() {
        $(this).find('div').toggleClass('open');
      });

      //Toggle mini-cart with menu icon
      $(".mini_cart").on("click", function(e) {
        var $cart_container = $(this).parent();
        if($cart_container.hasClass('active_link')) {
          closeMiniCart();
          $('body').removeClass('blocked-scroll');
        } else {
          openMiniCart($cart_container);
          $('body').addClass('blocked-scroll');
        }

        if (is_touch_device() || $(window).width() <= 798) {
          e.preventDefault();
        }
      });

      $('.cart_content__continue-shopping').on('click', function(e){
        closeMiniCart();
      })

    } else {

      $(".nav a, .logo a").not(".cart_content a").on("mouseenter", function() {
        if(!$(this).hasClass("active_link")) {
          $('.dropdown_container').hide();
          $('.active_link').removeClass('active_link');
          $('.is-absolute').parent().addClass('feature_image');
        }
      });

      $('.main_nav, .top_bar, .cart_container').on("mouseleave", function() {
        if ( $(window).width() > 798) {
          $('.dropdown_container').hide();
        }
        $('.active_link').removeClass('active_link');
        $('.is-absolute').parent().addClass('feature_image');
      });

      $('.dropdown_link, .dropdown_link--vertical').attr('data-click-count', 0);

      $('.dropdown_link').on('mouseover touchstart', function(e) {
        if ( $(window).width() > 798) {
          $('.dropdown_container').hide();
        }

        var $dropdown = $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
        var clickCount = $(this).attr('data-click-count');

        $('.active_link').removeClass('active_link');

        if(!$(this).hasClass('active_link')) {
          $dropdown.show();

          if($(this).hasClass('mini_cart')) {
            $(this).parent('.cart_container').addClass('active_link');
          } else {
            if ( $(window).width() > 798) {
              $(this).addClass('active_link');
            }
            $('.is-absolute').parent().removeClass('feature_image');
          }
        }

        //Enable touch on parent link if on touch device and desktop menu is visible
        if(is_touch_device()){
          $('.dropdown_link').not(this).attr('data-click-count', 0);
          $('.dropdown_link').attr('data-no-instant', true);


          //capture touch event
          if (e.type == 'touchstart'){
            clickCount++;
            $(this).attr('data-click-count', clickCount);

            if (clickCount < 2){
              e.preventDefault();
              e.stopPropagation();
              return false;
            }
          }
        }

      });

    }

  },
  removeDataAttributes: function(target){
    if($(target).length){
      var i,
          $target = $(target),
          attrName,
          dataAttrsToDelete = [],
          dataAttrs = $target.get(0).attributes,
          dataAttrsLen = dataAttrs.length;

      for (i=0; i<dataAttrsLen; i++) {
        if ( 'data-' === dataAttrs[i].name.substring(0,5) ) {
          dataAttrsToDelete.push(dataAttrs[i].name);
        }
      }
      $.each( dataAttrsToDelete, function( index, attrName ) {
        $target.removeAttr( attrName );
      })
    }
  },
  loadMegaMenu: function(){

    //Remove old mega-menus so that theme-editor works properly
    $('.sticky_nav .mega-menu').remove();
    $('.header .mega-menu').remove();

    //Clone the mega menu from section into sticky_nav
    $('.mega-menu-container .mega-menu')
      .clone()
      .appendTo('.sticky_nav .main_nav');
    //Remove theme-editor data-attributes
    header.removeDataAttributes('.sticky_nav .mega-menu.dropdown_container .dropdown_column');

    //Loop through mega-menus to add arrow to parent
    $('.mega-menu-container .mega-menu').each(function(index){
      var megaMenuValue = $(this).data("dropdown");
      $('[data-dropdown-rel="' + megaMenuValue + '"]')
        .find('span')
        .remove();

      $('[data-dropdown-rel="' + megaMenuValue + '"]')
        .not('.icon-search')
        .append(' <span class="icon-down-arrow"></span>')
        .addClass('mega-menu-parent')
        .addClass('dropdown_link')
        .removeClass('top_link');

      $('[data-dropdown="' + megaMenuValue + '"]').each(function(index){
        if (!$(this).hasClass('mega-menu')) {
          $(this).remove();
        }
      });

      $(this).clone().appendTo('.header .main_nav');
    });

    //Remove default mega menus if vertical menus are selected
    if ($('.dropdown_link--vertical').length){
      $('.dropdown_link--vertical.mega-menu-parent + .vertical-menu_submenu').remove();
      $('.dropdown_link--vertical:not(.mega-menu-parent)').each(function(index){
        var megaMenuValue = $(this).data('dropdown-rel');
        $('[data-dropdown="' + megaMenuValue + '"]').remove();
      })
    }

    $('.mega-menu-parent').on('mouseenter', function() {

      if(!$(this).hasClass('active_link')) {
        $('.dropdown_container').hide();
        $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]').toggle();

        $(this).addClass('active_link');
        $('.is-absolute').parent().removeClass('feature_image');

      }
    });

    //Remove theme-editor data-attributes
    header.removeDataAttributes('.header .mega-menu.dropdown_container .dropdown_column');

    if (is_touch_device() || $(window).width() <= 798) {
      $('.dropdown_link').attr('data-no-instant', true);
    }

    header.loadMobileMegaMenu();
  },
  loadMobileMegaMenu: function() {

    //Loop through mega menus and add to mobile menu
    $('.mega-menu-container .mobile-mega-menu').each(function(index){
      $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"]').find('span').remove();
      $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"] > a').append(' <span class="right icon-down-arrow"></span>').attr('data-no-instant', 'true');
      $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"]').addClass('mobile-mega-menu-parent sublink');
      $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"]').append(this);
      $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"] > ul').each(function(index){
        if (!$(this).hasClass('mobile-mega-menu')) {
          $(this).remove();
        }
      });
    });
  },
  unloadMegaMenu: function(){
    $('.header .mega-menu').remove();
    $('.mega-menu-container .mega-menu').each(function(index){
      var menuParent = $(this).data('dropdown');
      $('.mega-menu-parent[data-dropdown-rel="' + $(this).data("dropdown") + '"]').find('.icon-down-arrow').remove();
    });
  },
  unload: function() {
    $('body').off('click', '.mobile_nav');
    $('body').off('click', '.dropdown_link');
    $('html').off('click');
    $('.mini_cart').off('click');
    $('.cart_content__continue-shopping').off('click');
    $('body').off('click', '.banner a[href^="#"]');
  }
}

/*============================================================================
  Load More Search items
==============================================================================*/

var enableLoadMoreSearch = function(){
  $('body').on('click', '.js-load-more a', function(e){
    enableInfiniteSearchScroll();
    e.stopPropagation();
    return false;
  });
}

var enableInfiniteSearchScroll = function(){
  if ($('.search-matrix').length) {
    var infiniteSearchScroll = new Waypoint.Infinite({
      element: $('.search-matrix')[0],
      items: '.search-matrix',
      more: '.load-more__btn',
      loadingClass: 'loading-in-progress',
      onBeforePageLoad: function(){
        $('.js-load-more').hide();
      },
      onAfterPageLoad: function(data){
        
        
      }
    })
  }
}

/*============================================================================
  Load More Products
==============================================================================*/

var enableLoadMoreProducts = function(){
  $('body').on('click', '.js-load-more a', function(e){
    enableInfiniteScroll();
    e.stopPropagation();
    return false;
  });
}

var enableInfiniteScroll = function(){
  if ($('.collection-matrix').length) {
    var infiniteScroll = new Waypoint.Infinite({
      element: $('.collection-matrix')[0],
      items: '.collection-matrix',
      more: '.load-more__btn',
      loadingClass: 'loading-in-progress',
      onBeforePageLoad: function(){
        $('.js-load-more').hide();
      },
      onAfterPageLoad: function(data){
        
        
      }
    })
  }
}

/*============================================================================
  Filter Products with AJAX
==============================================================================*/

Shopify.queryParams = {};
if (location.search.length) {
 for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
    aKeyValue = aCouples[i].split('=');
    if (aKeyValue.length > 1) {
     Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
    }
  }
}

var quickFilter = {
  init: function(){
    var selectedOptions = [],
        query = '',
        currentTags = '',
        siteUrl = 'https://' + $.url('hostname'),
        url1 = $.url('1') ? '/' + $.url('1') + '/' : '',
        url2 = $.url('2') ? $.url('2') + '/' : '',
        url3 = $.url('3'),
        path = url1 + url2;

    //Handle dropdowns if they exist
    if ($('#sort-by').length){
      query = $('#sort-by').val();
    } else {
      query = url('?sort_by');
    }

    if ($('#tag_filter').length){

      if ($('#tag_filter').data('default-collection') != $('#tag_filter').val()){
        urlTag = $('#tag_filter').val().substr($('#tag_filter').val().lastIndexOf('/') + 1);

        if (urlTag != 'all'){
          if ($.inArray( urlTag, selectedOptions ) > -1){
            //Do nothing
          } else {
            selectedOptions.unshift(urlTag);
          }
        }
      }
    }

    //Add all checkbox values to array
    $('[data-option-filter] input:checked').each(function (){
      selectedOptions.push($(this).val());
    });
    selectedOptions = $.makeArray(selectedOptions);

    //Loop through tags to create string to update page url
    $.each(selectedOptions, function(i, value){

      if (i != selectedOptions.length - 1) {
        currentTags += selectedOptions[i] + '+';
      } else {
        currentTags += selectedOptions[i];
      }

    });

    Shopify.queryParams.sort_by = query;
    query = '?' + $.param(Shopify.queryParams);

    quickFilter.processUrl(path, currentTags, query);
  },
  updateView: function(filterURL) {

    $.ajax({
       type: 'GET',
       url: filterURL,
       beforeSend: function() {
          $(".collection-matrix").addClass('fadeOut animated loading-in-progress filter-loading');
          Waypoint.destroyAll()
       },
       success: function(data) {
          $(".collection-matrix").removeClass('loading-in-progress');
          $(".collection-matrix").removeClass('filter-loading');
          var filteredBreadcrumb = $(data).find('.breadcrumb_text').html();
          $('.breadcrumb_text').html(filteredBreadcrumb);

          var filteredPagination = $(data).find('.paginate').html();
          $('.paginate').html(filteredPagination);

          var filteredSidebar = $(data).find('.sidebar').html();
          $('.sidebar').html(filteredSidebar);

          var filteredPageLinks = $(data).find('.paginate').html();
          $('.paginate').empty();
          $('.paginate').html(filteredPageLinks);

          var filteredData = $(data).find('.collection-matrix');
          $('.collection-matrix').remove();
          filteredData.insertBefore( $('.load-more__icon') );

          window.history && window.history.pushState && window.history.pushState("", "", filterURL);

          if ($('.sidebar__collection-filter').length){
            collectionSidebarFilter.init();
          }

          

          

          
       },
       error: function(x, t, m) {
        console.log(x);
        console.log(t);
        console.log(m);
        location.replace(location.protocol + '//' + location.host + filterURL);

       },
       dataType: "html"
    });
  },
  processUrl: function(path, tags, query){

    var query = query.replace(/\page=(\w+)&/, ''),
        urlString = '';

    urlString = path + tags + query;

    quickFilter.updateView(urlString);

  }
}

$('#sort-by').val($('#sort-by').data('default-sort'));

$('body')
  .on('change', '#tag_filter, #sort-by', function() {
    quickFilter.init();
});

$('body')
  .on('change', '#blog_filter', function() {
    var url = $(this).val();
    window.location = url;
});

$('input, select, textarea').on('focus blur', function(event) {
  $('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1,maximum-scale=' + (event.type == 'blur' ? 10 : 1));
});

/*============================================================================
  Search autocomplete
==============================================================================*/

var searchAutocomplete = {
  init: function(){

    var currentAjaxRequest = null;
    var shopURL = $('body').data('shop-url');

    
      var searchPath = shopURL + '/search?type=product&q=';
    

    //Submit wildcard searches
    $(".search_form, .search__form").on("submit", function(e){
      var formValue = $(this).find('input[name="q"]').val();
      var cleanFormValue = encodeURI(formValue);

      e.preventDefault();

      if(cleanFormValue == null) {
        window.location.href = '/search';
      } else {
        window.location.href = searchPath + cleanFormValue + '*';
      }
    });

    var searchForms = $('form.search_form, form.search, form.header_search_form').each(function() {

      var input = $(this).find('input[name="q"]');

      // Adding a list for showing search results.
      $('<div class="search__results-wrapper"><ul class="search__results"></ul></div>').appendTo($(this));
      // Listening to keyup and change on the text field within these search forms.
      input.attr('autocomplete', 'off').bind('keyup change', function() {

        if(input.val() == '') {
          $('.search__results').hide();
          $('.search__results').empty();
        }

        var term = $(this).val();
        var cleanTerm = encodeURI(term);

        var form = $(this).closest('form');
        var searchURL =  searchPath + cleanTerm;

        var resultsList = form.find('.search__results');

        if (term.length >= 3) {

          if (currentAjaxRequest != null) currentAjaxRequest.abort();

          currentAjaxRequest = $.getJSON(searchURL +'*&view=json', function(data) {
            resultsList.empty();

            // If we have no results.
            if(data.results_count == 0) {
              resultsList.hide();
            } else {
              // If we have results.
              $.each(data.results, function(index, item) {
                if(index >= 5) {
                  return false;
                }

                var link = $('<a></a>').attr('href', item.url);

                //Collect collection handles if product
                if(item.object_type == 'product') {

                  var collectionHandles = [];
                  for(i=0; i < item.collections.length; i++) {
                    collectionHandles.push(item.collections[i].handle);
                  }

                  if($.inArray('coming-soon', collectionHandles) != -1) {
                    var itemPrice = "Coming Soon";
                  } else {
                    if(item.available == true) {

                      if(item.raw_compare > item.raw_price ) {
                        var itemPrice = '<span class="was_price">' + item.compare + '</span> ' + item.price;
                      } else {
                        if(item.price_varies && item.price_min > 0) {
                          var itemPrice = "from" + ' ' + item.price;
                        } else if(item.price > 0 || item.raw_price > 0) {
                          var itemPrice = item.price;
                        } else {
                          var itemPrice = 'Free';
                        }
                      }
                    } else {
                      var itemPrice = "Sold Out";
                    }
                  }

                  if(item.thumbnail != 'NULL') {
                    link.append('<div class="thumbnail"><img class="lazyload blur-up" src="' + item.thumbnail + '" /></div>');
                  }
                  link.append('<div class="title">' + item.title + '<br><span class="item-pricing">'+ itemPrice +'</span></div>');


                } else if(item.object_type == 'article') {
                  if(item.thumbnail != 'NULL') {
                    link.append('<div class="thumbnail"><img class="lazyload blur-up" src="' + item.thumbnail + '" /></div>');
                  }
                  link.append('<div class="title">' + item.title + '<br><span class="item-pricing">'+ item.text_content +'</span></div>');

                } else if(item.object_type == 'page') {
                  link.append('<div class="title">' + item.title + '<br><span class="item-pricing">'+ item.text_content +'</span></div>');
                }

                link.wrap('<li class="item-result result--' + item.object_type + '"></li>');
                resultsList.append(link.parent());
              });
              // The Ajax request will return at the most 5 results.
              // If there are more than 5, let's link to the search results page.
              if(data.results_count >= 5) {
                resultsList.append('<li class="all-results"><span class="title see-all"><a href="' + searchURL + '*">' + "View all results" + ' (' + data.results_count + ')</a></span></li>');
              }
              resultsList.fadeIn(200);
            }
          })
        }
      });
    });

    // Clicking outside makes the results disappear.
    $(document).on('click', function(e){
      var container = $('[data-autocomplete-true]');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('[data-autocomplete-true]').find('.search__results-wrapper').hide();
      }
    });

    $('[data-autocomplete-true] input').on('focus', function(){
      $('.search__results-wrapper').hide();
      $(this).parents('[data-autocomplete-true]').find('.search__results-wrapper').show();
    });
  },
  unload: function() {
    $('body').off('focus', '[data-autocomplete-true] input');
  }
}

/*============================================================================
  Sidebar filter on collection pages
==============================================================================*/

var collectionSidebarFilter = {
  init: function(){

    $('.filter-active-tag input:checked').parents('.filter-active-tag').siblings('.filter-all-tags').hide();
    $('.toggle-all--true .toggle_list .filter-active-tag input:checked').parents('ul.toggle_list').prev().click();

    //Hide filters if types or vendors is in URL (can't be combined)
    if ($.url(2) === 'types' || $.url(2) === 'vendors'){
      $('.sidebar__collection-filter').remove();
    }

    $('.sidebar-block:empty').prev().css('border-bottom', 'none');

  },
  clearAllFilters: function(){
    $('[data-option-filter] input').attr('checked', false);
    $('[data-option-filter] input').trigger('change');
  },
  clearSelectedFilter: function(optionFilter){
    optionFilter.find('[data-option-filter] input').attr('checked', false);
    optionFilter.find('[data-option-filter] input').trigger('change');
  }
}

//Check the checkbox values
$('body').on('change', '[data-option-filter] input', function(){
  quickFilter.init();
  $("html, body").animate({
    scrollTop: ($('#pagecontent').offset().top)
  }, 500);
})

$('body').on('click', '[data-reset-filters]', function(){
  collectionSidebarFilter.clearAllFilters();
});

$('body').on('click', '[data-clear-filter]', function(){
  var selectedOption = $(this).parents('.filter-active-tag');
  collectionSidebarFilter.clearSelectedFilter(selectedOption);
});

/*============================================================================
  FAQ
==============================================================================*/
var faqAccordion = {
  init: function(){
    var flg = 0;
    var $faqHeading = $('.faqAccordion > dt > button');
    $('.faqAccordion > dd').attr('aria-hidden',true);
    $faqHeading.attr('aria-expanded',false);
    $faqHeading.on('click activate',function(){
      if( flg ) return false;
      flg = 1;
      var state = $(this).attr('aria-expanded') === 'false' ? true : false;
      $(this).attr('aria-expanded',state);
      $(this).parent().next().slideToggle(function(){
        flg = 0;
      });
        $(this).parent().next().attr('aria-hidden',!state);
      return false;
    });
    $faqHeading.on('keydown',function(event){
      var keyCode = event.keyCode || e.which;
      if (keyCode === 13){
        $(this).trigger('activate');
      }
    });
  }
}

/*============================================================================
  Utilities
==============================================================================*/


  var arrowSize = {
    x0: 10,
    x1: 60, y1: 50,
    x2: 62, y2: 40,
    x3: 22
  }


//compatibility with gallery using remodal
var lightboxGallery = {
  init: function(){
    //compatibility with gallery using remodal
    if ($('.lightbox img').length) {
      var currentSlide;
      var $lightboxImages = $('a.lightbox');
      var groups = [];

      //get all lightbox images and divide into groups based on rel attribute
      $lightboxImages.each(function(index){
        groups.push($(this).attr('rel'));
        groups = groups.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
      })

      //loop through gallery groups and create modals
      $.each(groups, function(index, value){

        //Loop through images and add link to remodal
        $('.lightbox[rel=' + value + ']').attr('data-remodal-target', 'lightbox-id-' + index );

        var lightboxModal = [
          '<div class="remodal remodal-lightbox js-remodal-lightbox js-lightbox-' + index + '" data-rel="' + value + '" data-remodal-id="lightbox-id-' + index + '" data-remodal-options="hashTracking: false">',
            '<a data-remodal-action="close" class="remodal-close"></a>',
            '<div class="lightbox-gallery"></div>',
          '</div>'
        ].join('');

        //Add modal lightbox to page to be populated by lightboxImageGallery
        $('body').append(lightboxModal);

        $('.lightbox[rel=' + value + ']').each(function(index){
          $(this).attr('data-image-id', index);
          $(this).attr('data-no-instant', '');
        });

      });

    }
  }
}

var utils = {
  createAccordion: function(container, tab, content){
    var $container = $(container);
    var $tab = $(container).find(tab);
    var $content = $(container).find(content);
    var specificTab = container + ' ' + tab;

    //Check to see if need to rearrange product tabs to create accordion (backwards compatible)
    if (container.indexOf(".accordion-tabs") >= 0){
      var rearrangedTabs = $.map($tab, function(v, i) { return [v, $content[i]]; });
      $container.empty();

      $.each(rearrangedTabs, function (index, value) {
        $container.append(this);
      });

      $content.removeClass('active');
      $container.find('.active').next().slideToggle();

      tab = container + '> a';
    }

    $(container).children('a').each(function(i, tab) {
      var tab = $(this);
      var tabValue = tab.attr('href'); //get tab id
      tab.attr('data-tab-value', tabValue); //set tab id in data attribute
      tab.removeAttr("href"); //remove href (to prevent url hash update)
    });

    $(container).find(tab + '.active').next().slideToggle();
    $('body').on('click', specificTab, function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    });
  },
  mobileAccordion: function(container, tab, content){
    $container = $(container);
    $tab = $(container).find(tab);
    $content = $(container).find(content);

    $(tab + '.active').next().slideToggle();

    $('body').on('click', tab, function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    });
  },
  mobileParentActiveAccordion: function(container, tab, content){
    $container = $(container);
    $tab = $(container).find(tab);
    $content = $(container).find(content);

    $(tab + '.active').parent().next().slideToggle();

    $('body').on('click', tab, function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).parent().next().slideToggle();
    });
  },
  initializeTabs: function(){
    $('ul.tabs > li > a').attr('data-no-instant', true);
    $('body').on('click', 'ul.tabs > li > a', function(e) {
      e.preventDefault();
      var contentLocation = $(this).attr('href');
      if(contentLocation.charAt(0)=="#") {
        $('ul.tabs > li > a.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents('ul.tabs').next().find(contentLocation).show().css({'display': 'block'}).addClass('active').siblings().hide().removeClass('active');
      }
    });
  },
  pageBannerCheck: function(){
    //check for header banner
    if (!$('.page_banner').length > 0 || $('.header').hasClass('header-background--solid')) {
      $('.feature_image').removeClass('feature_image');
      $('.header.is-absolute').removeClass('is-absolute');
      //hide secondary logo
      $('.secondary_logo--true').find('.secondary_logo').css('display', 'none');
      $('.secondary_logo--true').find('.primary_logo').css('display', 'block');
    } else {
      $('.header').parent().addClass('feature_image');
      $('.header').addClass('is-absolute');
      //check for secondary logo
      if ($('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').css('display', 'block');
        $('.secondary_logo--true').find('.primary_logo').css('display', 'none');
      }
    }

    //check for section that uses header banner on home page
    if ($('.index-sections').children().first().hasClass('under-menu')) {
      if (!$('.header').hasClass('header-background--solid')) {
        $('.index .header').parent().addClass('feature_image');
        $('.index .header').addClass('is-absolute');
      }
      //check for secondary logo
      if ($('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').show();
        $('.secondary_logo--true').find('.primary_logo').hide();
      }
    } else {
      $('.index .feature_image').removeClass('feature_image');
      $('.index .header.is-absolute').removeClass('is-absolute');
      //hide secondary logo
      if (!$('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').hide();
        $('.secondary_logo--true').find('.primary_logo').show();
      }
    }

    //check for section that uses header banner on the page details template
    if ($('.detail-sections').children().first().hasClass('under-menu')) {
      if (!$('.header').hasClass('header-background--solid')) {
        $('[class^="page-details"] .header').parent().addClass('feature_image');
        $('[class^="page-details"] .header').addClass('is-absolute');
      }

      //check for secondary logo
      if ($('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').show();
        $('.secondary_logo--true').find('.primary_logo').hide();
      }
    } else {
      $('[class^="page-details"] .feature_image').removeClass('feature_image');
      $('[class^="page-details"] .header.is-absolute').removeClass('is-absolute');

      //hide secondary logo
      if (!$('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').hide();
        $('.secondary_logo--true').find('.primary_logo').show();
      }
    }
  },
  resizeActionButtons: function(){
    $('.js-caption:visible').each(function(){
      var buttonWidth = 0;
      $(this).find('.action_button').each(function(){
        $button = $(this);
        if($(this).width() > buttonWidth){
            buttonWidth = $(this).width();
        }
      });
      $(this).find('.action_button').width(buttonWidth);
    });
  }
}

var sliderBlock = {
  select: function(blockId, $parentSection){
    var $blocks = $parentSection.find('.gallery-cell');
    var blockIdsArray = $blocks.map(function() {
      return String($(this).data('block-id'));
    });
    var $slider = $parentSection.find('.js-homepage-slideshow');
    var settings = {
      slideshowTextAnimation: $slider.data('slideshow-text-animation')
    }
    var flkty = $slider.data('flickity');

    $slider.flickity('pausePlayer');

    for(var i = 0; i < blockIdsArray.length; i++){
      if(blockIdsArray[i] === blockId){
        var currentSlide = i;
        if (currentSlide !== flkty.selectedIndex){
          $slider.flickity( 'select', parseInt(currentSlide), false, true);
        }
      }
    }
  },
  deselect: function($parentSection){
    var $slider = $parentSection.find('.flexslider').data('flexslider');
    if($slider) {
      $slider.flickity('unpausePlayer');
    }
  }
}

//document ready
$(function() {

  var oldFlickityCreate = window.Flickity.prototype._create;

  window.Flickity.prototype._create = function(){
    var that = this;
    if(this.element.addEventListener){
      this.element.addEventListener('load', function(){
        that.onresize();
      }, true);
    }
    this._create = oldFlickityCreate;
    return oldFlickityCreate.apply(this, arguments);
  };

  header.loadMegaMenu();
  header.init();
  
    searchAutocomplete.init();
  
  utils.pageBannerCheck();
  slideshow.init();
  testimonial.init();
  gallery.init();
  videoSection.init();
  featuredPromotions.init();
  featuredCollectionSection.init();
  collectionSidebarFilter.init();
  cart.init();

  productPage.initializeQuantityBox();
  productPage.init();
  productPage.relatedProducts();

  recentlyViewed.init();

  // Setup a timer
  var resizeTimeout;

  // Listen for resize events
  window.addEventListener('resize', function ( event ) {

    // If timer is null, reset it to 66ms and run your functions.
    // Otherwise, wait until timer is cleared
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {

        // Reset timeout
        resizeTimeout = null;

        // Run our resize functions
        if($(window).width() <= 798) {
          cart.init();
          header.unload();
          header.init();
        }

      }, 66);
    }
  }, false);

  //Search input hiding
  //get current input
  var currentValue = $(".search_form input[name='q']").val()
  //return amount without *
  if ($(".search_form input[name='q']").length > 0){
    $(".search_form input[name='q']").val( currentValue.replace('*', '') );
  }

  //Set current slide
  $('body').on('click', '.lightbox', function(){
    currentSlide = $(this).data('image-id');
  });

  //Detecting swipe vs tap
  $(document).bind("touchstart", function (e) {
    touchStartPos = $(window).scrollTop();
  }).bind("touchend", function (e) {
      var distance = touchStartPos - $(window).scrollTop();
      if (distance > 20 || distance < -20) {
          e.preventDefault;
      }
  });

  //detect when a remodal lightbox is opened
  $('body').on('opened', '.js-remodal-lightbox', function() {

    var $currentLightbox = $(this);
    var group = $(this).data('rel');
    var $groupImages = $('.lightbox[rel=' + group + ']').parent().clone();
    var arrowShow = $groupImages.length === 1 ? false : true;
    var draggable = $groupImages.length === 1 ? false : true;
    var flktyEnabled = $currentLightbox.find('.lightbox-gallery').hasClass('flickity-enabled');

    var elem = $currentLightbox.find('.lightbox-gallery')[0];

    $(this).find('a.lightbox')
      .removeAttr('href')
      .removeAttr('data-remodal-target');

    var flktyGallery = new Flickity( elem, {
      "wrapAround": "true",
      "cellAlign": "center",
      "contain": true,
      "imagesLoaded": true,
      "lazyLoad": 2,
      "pageDots": usePageDots,
      "draggable": draggable,
      "prevNextButtons": arrowShow,
      "arrowShape": arrowSize,
      "adaptiveHeight": true
    });


    if (!flktyEnabled){
      flktyGallery.insert($groupImages);
    }

    flktyGallery.select(currentSlide, false, true );

    elem.focus();

    $currentLightbox.find('.overlay').remove();
    $currentLightbox.find('.zoomImg').remove();
    $currentLightbox.find('img')
      .removeClass('lazyautosizes')
      .attr('sizes', '2000px')
      .css('opacity', '1');

  });

  //Set current slide
  $('body').on('click', '.lightbox', function(){
    currentSlide = $(this).data('image-id');
  });

  $('body').on('click', '.sidebar .parent-link--false', function(e) {
    e.preventDefault();
    $menu = $(this).parent('li');
    $menu.find('.menu-toggle').toggleClass('active');
    $menu.find('ul').slideToggle();
  });

  $('body').on('closed', '.js-remodal-lightbox', function () {
    var $currentLightbox = $(this);
    $currentLightbox.find('img').css('opacity', '0');
  });

  

  if(window.location.pathname.indexOf('/comments') != -1) {
    $('html,body').animate({scrollTop: $("#new-comment").offset().top-140},'slow');
  }

  $('body').on('mouseenter', '.icon-search', function() {
    $('.search-terms').focus();
  });

  $('body').on('click', '.icon-search', function() {
    $('input.search-terms').focus();
  });

  $('body').on('click', '.search-submit', function() {
    $(this).parent().submit();
  });

  if ($(window).width() > 798) {
    $(".animate_right").waypoint(function() {
      $(this.element).addClass("animated fadeInRight");
    }, { offset: '70%' });
    $(".animate_left").waypoint(function() {
      $(this.element).addClass("animated fadeInLeft");
    }, { offset: '70%' });
    $(".animate_up").waypoint(function() {
      $(this.element).addClass("animated fadeInUp");
    }, { offset: '70%' });
    $(".animate_down").waypoint(function() {
      $(this.element).addClass("animated fadeInDown");
    }, { offset: '70%' });
  }

  //backwards compatibility with flexslider
  $('.slider, .flexslider').find('li').unwrap();
  $('.slider, .flexslider').flickity({
    pageDots: usePageDots,
    imagesLoaded: true,
    arrowShape: arrowSize,
    lazyLoad: 2
  });

  utils.createAccordion('.toggle-all--true', 'h4.toggle', 'ul.toggle_list');
  utils.createAccordion('.footer_menu', 'h6', 'ul');
  utils.createAccordion('.footer_content', 'h6', 'div.toggle_content');
  utils.createAccordion('.product_section .accordion-tabs', '.tabs li > a', '.tabs-content li');

  utils.mobileParentActiveAccordion('#mobile_menu', 'li.sublink > a.parent-link--true span', 'li.sublink ul');
  utils.mobileAccordion('#mobile_menu', 'li.sublink > a.parent-link--false', 'li.sublink ul');

  utils.initializeTabs();
  utils.resizeActionButtons();
  faqAccordion.init();

  $(window).on('resize', function() {
    utils.resizeActionButtons();
  });

  //Sidebar toggle check
  if ($(window).width() <= 798) {
    utils.createAccordion('.toggle-all--false', 'h4.toggle', 'ul.toggle_list');
  }

  $('body').on('click', '.menu-toggle', function(e) {
    var $content = $(this).next('ul');
    $content.slideToggle();
    $(this).toggleClass('active');
    $(this).attr('aria-expanded', $(this).attr('aria-expanded') == 'true' ? 'false' : 'true');
  });

  if ($('.shopify-section.page-details-section, .shopify-section.product-details-section').length){
    // Don't apply mediaWrapper
  } else if ($('body').hasClass('index')) {
    $('.featured-products-section iframe[src*=youtube], .featured-products-section iframe[src*=vimeo]').mediaWrapper({
      intrinsic: true
    });
  } else {
    $('iframe[src*=youtube], iframe[src*=vimeo]').mediaWrapper({
      intrinsic: true
    });
  }

  if ($(window).width() >= 959) {
    var modal_width = '870px';
    if($(window).width() >= 1200 || $('html').hasClass('ie')) {
      modal_width = '1110px'
    }
  }

  

  //Terms of service settings for minicart
  

  


  

  var $contact_form = $('.newsletter .contact-form');
  $contact_form.each(function() {
    var $cf = $(this);
    $cf.on('submit', function (e) {
      if($('input[name="challenge"]', $cf).val() !== "true") {
        $.ajax({
          type: $cf.attr('method'),
          url: $cf.attr('action'),
          data: $cf.serialize(),
          success: function (data) {
            $cf.fadeOut("slow", function(){
              $cf.prev('.message').html("Thank you for joining our mailing list!");
            });
          },
          error: function(data) {
            $('input[name="challenge"]', $cf).val('true');
            $cf.submit();
          }
        });
        e.preventDefault();
      }
    });
  });

  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });

  
    enableLoadMoreProducts();
  

  

  

  



  /*============================================================================
    Quick Shop
  ==============================================================================*/

  var globalQuickShopProduct;

  $('body').on('change', '.currencies', function(e) {
      $('[data-initial-modal-price]').attr('data-initial-modal-price', '');
  });

  $('body').on('change', '.js-quick-shop select', function(e) {
    var currentVariant = $('.js-quick-shop select[name="id"]').val();
    if (currentVariant && globalQuickShopProduct){
      quickShop.updateVariant(currentVariant);
    }
  });

  var quickShop = {
    init: function(){
      //Quick-shop variables
      var productData;
      var productForm;
      var notifyForm;

      //EVENT - click on quick-shop
      $('body').on('click', '.js-quick-shop-link', function(e){
        e.preventDefault();

        //split image info into two arrays
        var arr = $(this).data('images').trim('||').split('||');
        var imageIds = [];
        var imageAlts = [];
        for (var i = 0; i < arr.length; i += 2) {
            imageIds.push(arr[i]);
            arr[i+1] && imageAlts.push(arr[i + 1]);
        }

        //Set productData based on data attributes
        productData = {
          handle: $(this).data('handle'),
          product_id: $(this).data('id'),
          single_variant: $(this).attr('data-single-variant'),
          product_in_collection_url: $(this).data('url'),
          escaped_title: $(this).data('title'),
          details_text: $(this).data('details-text'),
          full_description: $(this).data('full-description'),
          regular_description: $(this).data('regular-description'),
          image_ids: imageIds.filter(function(v){return v!==''}),
          image_alts: imageAlts,
          collection_handles: $(this).data('collection-handles').trim(',').split(','),
          money_format: $(this).data('money-format')
        }

        if (!$('.js-gallery-modal').hasClass('flickity-enabled')){
          $('.js-gallery-modal').flickity({
            "wrapAround": "true",
            "cellAlign": "left",
            "contain": true,
            "imagesLoaded": true,
            "lazyLoad": 2,
            "pageDots": usePageDots,
            "prevNextButtons": true,
            "autoPlay": autoplay,
            "selectedAttraction": 0.01,
            "friction": 0.15,
            "arrowShape": arrowSize
          });
        }

        //Find current product and notify forms
        notifyForm = $(this).next('.js-forms').find('.notify_form');
        productForm = $(this).next('.js-forms').find('.product_form');
        //Add Product Ids to parent container so form will work
        $('.quick-shop .container').attr('class', 'container section product-' + productData.product_id);
        $('.quick-shop .container').attr('id', 'product-' + productData.product_id);
        $('.quick-shop .container').attr('data-id', productData.product_id);
        //Function to send attribute data to API
        quickShop.retrieveProductInfo(productData);

      });

      //EVENT - modal is open
      $('body').on('opened', '.js-quick-shop', function () {

        //Copy form data to modal
        $('.remodal.quick-shop .js-product-form').html(productForm);
        $('.remodal.quick-shop .js-notify-form').html(notifyForm);

        //Initiate selectCallback
        if($(productForm).hasClass("product_form_options") && !$(productForm).hasClass("viewed")) {
          new Shopify.OptionSelectors($(productForm).data("select-id"), { product: $(productForm).data("product"), onVariantSelected: selectCallback, enableHistoryState: $(productForm).data("enable-state") });
        } else {
          
        }

        
          var JSONData = $(productForm).data("product");
          var swatchOptions = $(productForm).find('.swatch_options .swatch');
          if (swatchOptions.length > 1){
            Shopify.linkOptionSelectors(JSONData, '.js-quick-shop');
          }
        

        utils.initializeTabs();
        $('.js-quick-shop select[name="id"]').trigger('change');

      });

      //EVENT - modal is closed
      $('body').on('closed', '.js-quick-shop', function (e) {

        var insertedProductForm = $('.js-quick-shop .product_form');
        var insertedNotifyForm = $('.js-quick-shop .notify_form');

        //Copy form data back to product loop and add .viewed
        $('.form-holder-'+ productData.product_id).append(insertedProductForm);
        $('.form-holder-'+ productData.product_id).append(insertedNotifyForm);
        $('.form-holder-'+ productData.product_id +' .product_form').addClass('viewed');
        $('.form-holder-'+ productData.product_id +' .notify_form').addClass('viewed');
        var variantPrice = $('.js-current-price .money').text();
        $('.js-quick-shop-link[data-id=' + productData.product_id + ']').attr('data-initial-modal-price', variantPrice);
        $('.js-current-price, .js-was-price, .js-savings').empty();

        if ($('.js-product_section').length){
          var $productForm = $('.js-product_section').find('.product_form');

          //Set the option value state back to product
          var JSONData = $productForm.data('product');
          var productID = $productForm.data('product-id');
          var productSection = '.product-' + productID + ' .js-product_section';
          var swatchOptions = $productForm.find('.swatch_options .swatch');
          if (swatchOptions.length > 1){
            Shopify.linkOptionSelectors(JSONData, productSection);
          }
        }

      });

    },
    retrieveProductInfo: function(productData){

      $.ajax({
        dataType: "json",
        async: false,
        cache: false,
        url: "/products/" + productData.handle + ".js",
        success: function(product) {
          var product = $.extend({}, product, productData); //Create new object combining info
          quickShop.populateGallery(product);

          globalQuickShopProduct = product;

          quickShop.updateVariant(product.variants[0].id.toString());

        }
      });

    },
    updateVariant: function(variant){

      $('.js-sale-banner, .js-sold-out, .js-current-price, .js-was-price, .js-savings, .js-new-banner, .js-pre-order-banner').empty();

      if (globalQuickShopProduct != 'undefined'){
        var product = globalQuickShopProduct;

        $('.modal_price, .js-notify-form').show();

        //Title and Vendor
        $('.js-product-title').html('<a href="'+ product.product_in_collection_url +'" title="'+ product.escaped_title +'">'+ product.title +'</a>');
        $('.js-product-vendor')
        .html('<a href="/collections/vendors?q=' + product.vendor +'">' + product.vendor + '</a>');

        //Product Description
        $('.js-full-description').html(product.full_description);
        $('.js-regular-description').html(product.regular_description);
        var productDetails = '<a href="'+ product.product_in_collection_url +'" class="secondary_button" title="'+ product.escaped_title +' Details">'+ product.details_text +'</a>';
        $('.js-product-details').html(productDetails);

        //Collection banners
        $.each( product.collection_handles, function( value, index ) {
          if (this.toString() == 'new'){
            $('.js-new-banner').html("New");
          }
          if (this.toString() == 'pre-order'){
            $('.js-pre-order-banner').html("Pre-Order");
          }
          if (this.toString() == 'coming-soon'){
            product.price = "Coming Soon";
          }

        });

        if (product.single_variant == 'true'){

        //No variants
          //Sale Banner
          
            if (product.compare_at_price > product.price){
             $('.js-sale-banner').html("Sale");
            }
          

          //Sale
          if (product.compare_at_price > product.price) {
            $('.js-current-price').addClass('sale');
          } else {
            $('.js-current-price').removeClass('sale');
          }

          //Availability
          if (product.available == false){
            $('.js-sold-out').html("Sold Out");
          }

          //Price
          if (product.available == true) {

            if (product.compare_at_price > product.price) {
              $('.js-was-price').html('<span class="money">' + Shopify.formatMoney(product.compare_at_price, product.money_format)  + '</span>');
              $('.js-savings').html("You Save" + ' ' + parseInt(((product.compare_at_price - product.price) * 100) / product.compare_at_price) + '% (' + '<span class="money">' + Shopify.formatMoney(product.compare_at_price - product.price, product.money_format) + '</span>)');
            }

            if (product.price == "Coming Soon"){
              $('.js-current-price').html("Coming Soon");
            } else if (product.price) {
              $('.js-current-price').html('<span class="money">' + Shopify.formatMoney(product.price, product.money_format) + '</span>');
            } else {
              $('.js-current-price').html('Free');
            }
          }
        } else {
          //Variant loop
          for (var i = 0; i < product.variants.length; i++) {
            if (variant == product.variants[i].id.toString()){
              //Sale Banner
              
                if (product.variants[i].compare_at_price > product.variants[i].price){
                 $('.js-sale-banner').html("Sale");
                }
              

              //Sale
              if (product.variants[i].compare_at_price > product.variants[i].price) {
                $('.js-current-price').addClass('sale');
              } else {
                $('.js-current-price').removeClass('sale');
              }

              //Availability
              if (product.variants[i].available == false){
                $('.js-sold-out').html("Sold Out");
              }

              //Price
              if (product.variants[i].available == true) {

                if (product.variants[i].compare_at_price > product.variants[i].price) {
                  $('.js-was-price').html('<span class="money">' + Shopify.formatMoney(product.variants[i].compare_at_price, product.money_format) + '</span>');
                  $('.js-savings').html("You Save" + ' ' + parseInt(((product.variants[i].compare_at_price - product.variants[i].price) * 100) / product.variants[i].compare_at_price) + '% (' + '<span class="money">' + Shopify.formatMoney(product.variants[i].compare_at_price - product.variants[i].price, product.money_format) + '</span>)');
                }

                if (product.variants[i].price == "Coming Soon"){
                  $('.js-current-price').html("Coming Soon");
                } else if (product.variants[i].price) {
                  $('.js-current-price').html('<span class="money">' + Shopify.formatMoney(product.variants[i].price, product.money_format) + '</span>');
                } else {
                  $('.js-current-price').html('Free');
                }
              }
            }
          }
        }
      }

      

      $('.js-quick-shop .text-modal-wrap iframe[src*=youtube], .js-quick-shop .text-modal-wrap iframe[src*=vimeo]').mediaWrapper({
        intrinsic: true
      });

    },
    populateGallery: function(product){

      //Find gallery and carousel
      var $gallery = $('.js-gallery-modal');
      var $carousel = $('.js-gallery-carousel');

      //EVENT - modal closed
      $(document).on('closed', '.js-quick-shop', function (e) {
        $gallery.flickity( 'remove', $('.js-gallery-modal .gallery-cell') );
        $carousel.empty();
      });

      //Add gallery images based on product info from API
      function addMainGalleryImages(multiImage){

        $.each( product.images, function( i, imgPath ){

          var imgGrande = imgPath.replace(/(\.[^.]*)$/, "_grande$1").replace('http:', '');
          var img1024x1024 = imgPath.replace(/(\.[^.]*)$/, "_1024x1024$1").replace('http:', '');
          var img2048x2048 = imgPath.replace(/(\.[^.]*)$/, "_2048x2048$1").replace('http:', '');
          var alt = product.image_alts[i];
          var cellContent;

          if (alt.indexOf("youtube") >= 0){
            cellContent = '<div class="video-container youtube"><div>' + alt + '</div></div>';
          } else if (alt.indexOf("vimeo") >= 0) {
            cellContent = '<div class="video-container vimeo"><div>' + alt + '</div></div>';
          } else {
            cellContent = '<img src="'+ imgGrande + '" data-src="' + img1024x1024 + '" alt="' + alt + '" data-image-id="' + product.image_ids[i].trim() + '" data-index="' + i + '" srcset="' + imgGrande + ' 600w, ' + img1024x1024 + ' 1024w, ' + img2048x2048 + ' 2048w" sizes="(min-width: 800px) 50vw, 100vw"/>';
          }

          var $cellElems = $('<div class="gallery-cell">'+ cellContent +'</div>');
          $gallery.flickity( 'append', $cellElems );
        });

        $gallery.removeClass('single-image multi-image').addClass(multiImage ? 'multi-image' : 'single-image');

      }

      //Add carousel images based on product info from API
      function addCarouselGalleryImages(){
        $.each( product.images, function( i, imgPath ){
          var carouselSizedImg = imgPath.replace(/(\.[^.]*)$/, "_grande$1").replace('http:', '');

          var img = '<img src="'+ carouselSizedImg + '" alt="' + escape(product.image_alts[i]) + '" />';
          var $carouselCellElems = $('<div class="gallery-cell">'+ img +'</div>');
          $carousel.append($carouselCellElems);
        });

        imageFunctions.linkGalleryAndCarousel($gallery, $carousel);

      }

      //Check how many images are returned from API - addMainGalleryImages() takes true or false based on whether gallery slider is multi-image (shows prev/next arrows)
      var multiImage;

      if(product.images.length > 1){
        multiImage = true;
        addMainGalleryImages(multiImage);
        addCarouselGalleryImages();
      } else {
        multiImage = false;
        addMainGalleryImages(multiImage);
      }

      imageFunctions.zoom('.js-gallery-modal', false);

    }
  }

  

  /*============================================================================
    Start of cart-related functionality
  ==============================================================================*/

  function ajaxSubmitCart(cart) {
    $cart = cart;
    $.ajax({
      url: '/cart/update.js',
      dataType: 'json',
      cache: false,
      type: 'post',
      data: $cart.serialize(),
      success: function (data) {
        refreshCart(data);
      }
    });
  }

  function ajaxUpdateCart(lineID, quantity, parent) {
    $.ajax({
      url: '/cart/change.js',
      dataType: 'json',
      cache: false,
      type: 'post',
      data: { quantity: quantity, line: lineID },
      success: function (data) {
        refreshCart(data);

        var lineIDIndex = lineID - 1;

        //check to see if there are correct amount of products in array
        if (typeof data.items[lineIDIndex] === "undefined"){
          var updated_quantity = 0;
        } else {
          var updated_quantity = data.items[lineIDIndex].quantity;
        }

        if(quantity > 0 && quantity != updated_quantity) {
          if (updated_quantity == 1) {
            items_left_text = "item left";
          } else {
            items_left_text = "items left";
          }

          $('.warning--quantity').remove();

          var warning = '<p class="warning warning--quantity animated bounceIn">' + updated_quantity + ' ' + items_left_text + '</p>';
          parent.find("input[data-line-id='" + lineID + "']").parent().after(warning);
          parent.find("input[data-line-id='" + lineID + "']").val(updated_quantity);
        } else if (parent.is('#cart_form')) {
          $("#cart_form").submit();
        }
      }
    });
  }

  function refreshCart(cart) {
    $(".cart_count").empty();
    $cartBtn = $(".cart_count");
    var value = $cartBtn.text() || '0';
    var cart_items_html = "";
    var cart_action_html = "";
    var cart_savings_html = "";
    var $cart = $(".cart_content form");
    var discounted_price_total = 0;
    var total_savings = 0;

    $cartBtn.text(value.replace(/[0-9]+/,cart.item_count));

    if (cart.item_count == 0) {
      $('.js-empty-cart__message').removeClass('hidden');
      $('.js-cart_content__form').addClass('hidden');
    } else {
      $('.js-empty-cart__message').addClass('hidden');
      $('.js-cart_content__form').removeClass('hidden');

      $.each(cart.items, function(index, item) {
        var line_id = index + 1;
        cart_items_html += '<li class="cart_item clearfix">' +
          '<a href="' + item.url +'">';
        if (item.image) {
          cart_items_html += '<div class="cart_image">' +
              '<img src="' + item.image.replace(/(\.[^.]*)$/, "_compact$1").replace('http:', '') + '" alt="' + htmlEncode(item.title) + '" />' +
            '</div>';
        }
		cart_items_html += '</a>';
        cart_items_html += '<div class="cart_item__title"><div class="item_title">';
        cart_items_html += '<a href="' + item.url +'">' + item.title;

        if(item.properties) {
          $.each(item.properties, function(title, value) {
            if (value) {
              cart_items_html += '<div class="line-item">' + title +': ' + value + '</div>';
            }
          });
        }
        cart_items_html += '</a>'
        cart_items_html += '<strong class="right price">';

        

        cart_items_html += '<span class="money">' + Shopify.formatMoney(item.price, $('body').data('money-format')) + '</span></strong>' + '</div>';
        cart_items_html += '</div>';

        cart_items_html += '<div class="left product-quantity-box">' +
            '<span class="ss-icon product-minus js-change-quantity" data-func="minus"><span class="icon-minus"></span></span>' +
            '<input type="number" min="0" class="quantity" name="updates[]" id="updates_' + item.id + '" value="' + item.quantity +'" data-line-id="' + line_id +'" />' +
            '<span class="ss-icon product-plus js-change-quantity" data-func="plus"><span class="icon-plus"></span></span>' +
          '</div>' +
        '</div>';

        

      });

      cart_action_html += '<span class="right"><span class="money">' + Shopify.formatMoney(cart.total_price, $('body').data('money-format')) + '</span></span>' +
          '<span>Subtotal</span>';

      if(total_savings > 0 ) {
        cart_savings_html = '<span class="right"><span class="money">' + Shopify.formatMoney(total_savings - discounted_price_total, $('body').data('money-format')) + '</span></span>' +
            '<span>Total Savings</span>';
      } else {
        cart_savings_html = "";
      }
    }

    $('.js-cart_items').html(cart_items_html);
    $('.js-cart_subtotal').html(cart_action_html);
    $('.js-cart_savings').html(cart_savings_html);

    
  }

  $('body').on("change", "#cart_form input.quantity", function() {
    ajaxUpdateCart($(this).data('line-id'), $(this).val(), $(this).parents('#cart_form'));
  });

  $('body').on("change", ".cart_content input.quantity", function() {
    ajaxUpdateCart($(this).data('line-id'), $(this).val(), $(this).parents('.cart_content'));
  });

  
    $('body').on('submit', ".product_form form", function(e) {
      e.preventDefault();
      var $addToCartForm = $(this);
      var $addToCartBtn = $addToCartForm.find('.add_to_cart');

      $.ajax({
        url: '/cart/add.js',
        dataType: 'json',
        cache: false,
        type: 'post',
        data: $addToCartForm.serialize(),
        beforeSend: function() {
          $addToCartBtn.attr('disabled', 'disabled').addClass('disabled');
          $addToCartBtn.find('span').removeClass("fadeInDown").addClass('animated zoomOut');
        },
        success: function(itemData) {
          $addToCartBtn.find('.checkmark').addClass('checkmark-active');

          window.setTimeout(function(){
            $addToCartBtn.removeAttr('disabled').removeClass('disabled');
            $addToCartBtn.find('.checkmark').removeClass('checkmark-active');
            $addToCartBtn.find('span').removeClass('zoomOut').addClass('fadeInDown');
          }, 1000);

          $.ajax({
            url: '/cart.js',
            dataType: "json",
            cache: false,
            success: function(cart) {
              refreshCart(cart);
              if($('html').hasClass("remodal-is-locked")) {
                $('.remodal-close').click();
              }

//               if($('#header').is(':visible')) {
//                 $('#header .cart_container').addClass('active_link');
//               } else if ($('.sticky_nav--stick').length) {
//                 $('.sticky_nav .cart_container').addClass('active_link');
//               } else {
//                 $('.top_bar .cart_container').addClass('active_link');
//               }
              
              $('body').addClass('cartisopen');

              //block scrolling on mobile
              if ($(window).width() <= 798) {
                var $cart_container = $(this).parent();
                if($cart_container.hasClass('active_link')) {
                  $('body').addClass('blocked-scroll');
                } else {
                  $('body').addClass('blocked-scroll');
                }
              }
            }
          });
        },
        error: function(XMLHttpRequest) {
          var response = eval('(' + XMLHttpRequest.responseText + ')');
          response = response.description;
          $('.warning').remove();

          var warning = '<p class="warning animated bounceIn">' + response.replace('All 1 ', 'All ') + '</p>';
          $addToCartForm.after(warning);
          $addToCartBtn.removeAttr('disabled').removeClass('disabled');
          $addToCartBtn.find('span').text("Add to Cart").removeClass('zoomOut').addClass('zoomIn');
        }
      });

      return false;
    });
  

  //Swatches linked with selected options
  
    if ($('.js-product_section').length){
      var $productForms = $('.js-product_section').find('.product_form');
      $productForms.addClass('is-visible');

      //Loop through each product and set the initial option value state
      $productForms.each(function(){
        var JSONData = $(this).data('product');
        var productID = $(this).data('product-id');
        var productSection = '.product-' + productID + ' .js-product_section';
        var swatchOptions = $(this).find('.swatch_options .swatch');
        if (swatchOptions.length > 1){
          Shopify.linkOptionSelectors(JSONData, productSection);
        }
      });
    }

    //Add click event when there is more than one product on the page (eg. Collection in Detail)
    if ($('.js-product_section').length > 1){
      $('body').on('click', '.swatch-element', function(){
        var swatchValue = $(this).data('value');

        $(this)
        .siblings('input[value="'+ swatchValue.replace(/\"/g,'\\"') +'"]')
        .prop("checked", true)
        .trigger("change");

        var JSONData = $(this).parents('.product_form').data('product');
        var productID = $(this).parents('.product_form').data('product-id');
        var productSection = '.product-' + productID + ' .js-product_section';
        var swatchOptions = $(this).parents('.product_form').find('.swatch_options .swatch');
        if (swatchOptions.length > 1){
          Shopify.linkOptionSelectors(JSONData, productSection);
        }
      })
    }
  

});

/*============================================================================
  Swatch options - second and third swatch 'sold-out' will update based on availability of previous options selected
==============================================================================*/

Shopify.updateOptionsInSelector = function(selectorIndex, parent) {

  switch (selectorIndex) {
    case 0:
      var key = 'root';
      var selector = $(parent + ' .single-option-selector:eq(0)');
      break;
    case 1:
      var key = $(parent + ' .single-option-selector:eq(0)').val();
      var selector = $(parent + ' .single-option-selector:eq(1)');
      break;
    case 2:
      var key = $(parent + ' .single-option-selector:eq(0)').val();
      key += ' / ' + $(parent + ' .single-option-selector:eq(1)').val();
      var selector = $(parent + ' .single-option-selector:eq(2)');
  }

  var availableOptions = Shopify.optionsMap[key];

  $(parent + ' .swatch[data-option-index="' + selectorIndex + '"] .swatch-element').each(function() {
    if ($.inArray($(this).attr('data-value'), availableOptions) !== -1) {
      $(this).removeClass('soldout').find(':radio').removeAttr('disabled','disabled').removeAttr('checked');
    }
    else {
      $(this).addClass('soldout').find(':radio').removeAttr('checked').attr('disabled','disabled');
    }
  });

};

Shopify.linkOptionSelectors = function(product, parent) {
    // Building our mapping object.
    Shopify.optionsMap = {};
    for (var i=0; i<product.variants.length; i++) {
      var variant = product.variants[i];
      if (variant.available) {
        // Gathering values for the 1st drop-down.
        Shopify.optionsMap['root'] = Shopify.optionsMap['root'] || [];
        Shopify.optionsMap['root'].push(variant.option1);
        Shopify.optionsMap['root'] = Shopify.uniq(Shopify.optionsMap['root']);
        // Gathering values for the 2nd drop-down.
        if (product.options.length > 1) {
          var key = variant.option1;
          Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
          Shopify.optionsMap[key].push(variant.option2);
          Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
        }
        // Gathering values for the 3rd drop-down.
        if (product.options.length === 3) {
          var key = variant.option1 + ' / ' + variant.option2;
          Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
          Shopify.optionsMap[key].push(variant.option3);
          Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
        }
      }
    }
    // Update options right away.
    Shopify.updateOptionsInSelector(0, parent);
    if (product.options.length > 1) Shopify.updateOptionsInSelector(1, parent);
    if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
    // When there is an update in the first dropdown.
    $(parent + " .single-option-selector:eq(0)").change(function() {
      Shopify.updateOptionsInSelector(1, parent);
      if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
      return true;
    });
    // When there is an update in the second dropdown.
    $(parent + " .single-option-selector:eq(1)").change(function() {
      if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
      return true;
    });
};

//Used for cart functionality
function htmlEncode(value){
    if (value) {
        return $('<div/>').text(value).html();
    } else {
        return '';
    }
}

//Check if device is touch-enabled
function is_touch_device() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
};

/* option_selection.js */
function floatToString(t,e){var o=t.toFixed(e).toString();return o.match(/^\.\d+/)?"0"+o:o}if("undefined"==typeof Shopify)var Shopify={};Shopify.each=function(t,e){for(var o=0;o<t.length;o++)e(t[o],o)},Shopify.map=function(t,e){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],i));return o},Shopify.arrayIncludes=function(t,e){for(var o=0;o<t.length;o++)if(t[o]==e)return!0;return!1},Shopify.uniq=function(t){for(var e=[],o=0;o<t.length;o++)Shopify.arrayIncludes(e,t[o])||e.push(t[o]);return e},Shopify.isDefined=function(t){return"undefined"==typeof t?!1:!0},Shopify.getClass=function(t){return Object.prototype.toString.call(t).slice(8,-1)},Shopify.extend=function(t,e){function o(){}o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t,t.baseConstructor=e,t.superClass=e.prototype},Shopify.locationSearch=function(){return window.location.search},Shopify.locationHash=function(){return window.location.hash},Shopify.replaceState=function(t){window.history.replaceState({},document.title,t)},Shopify.urlParam=function(t){var e=RegExp("[?&]"+t+"=([^&#]*)").exec(Shopify.locationSearch());return e&&decodeURIComponent(e[1].replace(/\+/g," "))},Shopify.newState=function(t,e){var o;return o=Shopify.urlParam(t)?Shopify.locationSearch().replace(RegExp("("+t+"=)[^&#]+"),"$1"+e):""===Shopify.locationSearch()?"?"+t+"="+e:Shopify.locationSearch()+"&"+t+"="+e,o+Shopify.locationHash()},Shopify.setParam=function(t,e){Shopify.replaceState(Shopify.newState(t,e))},Shopify.Product=function(t){Shopify.isDefined(t)&&this.update(t)},Shopify.Product.prototype.update=function(t){for(property in t)this[property]=t[property]},Shopify.Product.prototype.optionNames=function(){return"Array"==Shopify.getClass(this.options)?this.options:[]},Shopify.Product.prototype.optionValues=function(t){if(!Shopify.isDefined(this.variants))return null;var e=Shopify.map(this.variants,function(e){var o="option"+(t+1);return void 0==e[o]?null:e[o]});return null==e[0]?null:Shopify.uniq(e)},Shopify.Product.prototype.getVariant=function(t){var e=null;return t.length!=this.options.length?e:(Shopify.each(this.variants,function(o){for(var i=!0,r=0;r<t.length;r++){var n="option"+(r+1);o[n]!=t[r]&&(i=!1)}return 1==i?void(e=o):void 0}),e)},Shopify.Product.prototype.getVariantById=function(t){for(var e=0;e<this.variants.length;e++){var o=this.variants[e];if(t==o.id)return o}return null},Shopify.money_format="$",Shopify.formatMoney=function(t,e){function o(t,e){return"undefined"==typeof t?e:t}function i(t,e,i,r){if(e=o(e,2),i=o(i,","),r=o(r,"."),isNaN(t)||null==t)return 0;t=(t/100).toFixed(e);var n=t.split("."),a=n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+i),s=n[1]?r+n[1]:"";return a+s}"string"==typeof t&&(t=t.replace(".",""));var r="",n=/\{\{\s*(\w+)\s*\}\}/,a=e||this.money_format;switch(a.match(n)[1]){case"amount":r=i(t,2);break;case"amount_no_decimals":r=i(t,0);break;case"amount_with_comma_separator":r=i(t,2,".",",");break;case"amount_no_decimals_with_comma_separator":r=i(t,0,".",",")}return a.replace(n,r)},Shopify.OptionSelectors=function(t,e){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=t,this.product=new Shopify.Product(e.product),this.onVariantSelected=Shopify.isDefined(e.onVariantSelected)?e.onVariantSelected:function(){},this.replaceSelector(t),this.initDropdown(),e.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var t={initialLoad:!0},e=this.selectVariantFromDropdown(t);if(!e){var o=this;setTimeout(function(){o.selectVariantFromParams(t)||o.fireOnChangeForFirstDropdown.call(o,t)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(t){this.selectors[0].element.onchange(t)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(t){var e=this.selectVariantFromParams(t);e||this.selectVariantFromDropdown(t)},Shopify.OptionSelectors.prototype.replaceSelector=function(t){var e=document.getElementById(t),o=e.parentNode;Shopify.each(this.buildSelectors(),function(t){o.insertBefore(t,e)}),e.style.display="none",this.variantIdField=e},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(t){var e=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(e||(e=document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')),!e)return!1;var o=e.value;return this.selectVariant(o,t)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(t){var e=Shopify.urlParam("variant");return this.selectVariant(e,t)},Shopify.OptionSelectors.prototype.selectVariant=function(t,e){var o=this.product.getVariantById(t);if(null==o)return!1;for(var i=0;i<this.selectors.length;i++){var r=this.selectors[i].element,n=r.getAttribute("data-option"),a=o[n];null!=a&&this.optionExistInSelect(r,a)&&(r.value=a)}return"undefined"!=typeof jQuery?jQuery(this.selectors[0].element).trigger("change",e):this.selectors[0].element.onchange(e),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(t,e){for(var o=0;o<t.options.length;o++)if(t.options[o].value==e)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(t,e){Shopify.isDefined(e)&&this.setMessageElement(e),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var o=document.getElementById(t);Shopify.each(this.buildSelectors(),function(t){o.appendChild(t)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var t=0;t<this.product.optionNames().length;t++){var e=new Shopify.SingleOptionSelector(this,t,this.product.optionNames()[t],this.product.optionValues(t));e.element.disabled=!1,this.selectors.push(e)}var o=this.selectorDivClass,i=this.product.optionNames(),r=Shopify.map(this.selectors,function(t){var e=document.createElement("div");if(e.setAttribute("class",o),i.length>1){var r=document.createElement("label");r.htmlFor=t.element.id,r.innerHTML=t.name,e.appendChild(r)}return e.appendChild(t.element),e});return r},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var t=[],e=0;e<this.selectors.length;e++){var o=this.selectors[e].element.value;t.push(o)}return t},Shopify.OptionSelectors.prototype.updateSelectors=function(t,e){var o=this.selectedValues(),i=this.product.getVariant(o);i?(this.variantIdField.disabled=!1,this.variantIdField.value=i.id):this.variantIdField.disabled=!0,this.onVariantSelected(i,this,e),null!=this.historyState&&this.historyState.onVariantChange(i,this,e)},Shopify.OptionSelectorsFromDOM=function(t,e){var o=e.optionNames||[],i=e.priceFieldExists||!0,r=e.delimiter||"/",n=this.createProductFromSelector(t,o,i,r);e.product=n,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,t,e)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(t,e,o,i){if(!Shopify.isDefined(o))var o=!0;if(!Shopify.isDefined(i))var i="/";var r=document.getElementById(t),n=r.childNodes,a=(r.parentNode,e.length),s=[];Shopify.each(n,function(t,r){if(1==t.nodeType&&"option"==t.tagName.toLowerCase()){var n=t.innerHTML.split(new RegExp("\\s*\\"+i+"\\s*"));0==e.length&&(a=n.length-(o?1:0));var p=n.slice(0,a),l=o?n[a]:"",c=(t.getAttribute("value"),{available:t.disabled?!1:!0,id:parseFloat(t.value),price:l,option1:p[0],option2:p[1],option3:p[2]});s.push(c)}});var p={variants:s};if(0==e.length){p.options=[];for(var l=0;a>l;l++)p.options[l]="option "+(l+1)}else p.options=e;return p},Shopify.SingleOptionSelector=function(t,e,o,i){this.multiSelector=t,this.values=i,this.index=e,this.name=o,this.element=document.createElement("select");for(var r=0;r<i.length;r++){var n=document.createElement("option");n.value=i[r],n.innerHTML=i[r],this.element.appendChild(n)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(e+1)),this.element.id=t.domIdPrefix+"-option-"+e,this.element.onchange=function(o,i){i=i||{},t.updateSelectors(e,i)},!0},Shopify.Image={preload:function(t,e){for(var o=0;o<t.length;o++){var i=t[o];this.loadImage(this.getSizedImageUrl(i,e))}},loadImage:function(t){(new Image).src=t},switchImage:function(t,e,o){if(t&&e){var i=this.imageSize(e.src),r=this.getSizedImageUrl(t.src,i);o?o(r,t,e):e.src=r}},imageSize:function(t){var e=t.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);return null!=e?e[1]:null},getSizedImageUrl:function(t,e){if(null==e)return t;if("master"==e)return this.removeProtocol(t);var o=t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null!=o){var i=t.split(o[0]),r=o[0];return this.removeProtocol(i[0]+"_"+e+r)}return null},removeProtocol:function(t){return t.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(t){this.browserSupports()&&this.register(t)},Shopify.OptionSelectors.HistoryState.prototype.register=function(t){window.addEventListener("popstate",function(e){t.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(t,e,o){this.browserSupports()&&(!t||o.initialLoad||o.popStateCall||Shopify.setParam("variant",t.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};

/*
 * jQuery offscreen plugin
 *
 * Copyright Cory LaViska for A Beautiful Site, LLC
 *
 * @license: http://opensource.org/licenses/MIT
 *
 */
(function($) {
  $.extend($.expr[':'], {
    'off-top': function(el) {
      return $(el).offset().top < $(window).scrollTop();
    },
    'off-right': function(el) {
      return $(el).offset().left + $(el).outerWidth() - $(window).scrollLeft() > $(window).width();
    },
    'off-bottom': function(el) {
      return $(el).offset().top + $(el).outerHeight() - $(window).scrollTop() > $(window).height();
    },
    'off-left': function(el) {
      return $(el).offset().left < $(window).scrollLeft();
    },
    'off-screen': function(el) {
      return $(el).is(':off-top, :off-right, :off-bottom, :off-left');
    }
  });
})(jQuery);

/*!
  Zoom 1.7.15
  license: MIT
  http://www.jacklmoore.com/zoom
*/
(function($){var defaults={url:false,callback:false,target:false,duration:120,on:"mouseover",touch:true,onZoomIn:false,onZoomOut:false,magnify:1};$.zoom=function(target,source,img,magnify){var targetHeight,targetWidth,sourceHeight,sourceWidth,xRatio,yRatio,offset,$target=$(target),position=$target.css("position"),$source=$(source);$target.css("position",/(absolute|fixed)/.test(position)?position:"relative");$target.css("overflow","hidden");img.style.width=img.style.height="";$(img).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:img.width*magnify,height:img.height*magnify,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(target);return{init:function(){targetWidth=$target.outerWidth();targetHeight=$target.outerHeight();if(source===$target[0]){sourceWidth=targetWidth;sourceHeight=targetHeight}else{sourceWidth=$source.outerWidth();sourceHeight=$source.outerHeight()}xRatio=(img.width-targetWidth)/sourceWidth;yRatio=(img.height-targetHeight)/sourceHeight;offset=$source.offset()},move:function(e){var left=e.pageX-offset.left,top=e.pageY-offset.top;top=Math.max(Math.min(top,sourceHeight),0);left=Math.max(Math.min(left,sourceWidth),0);img.style.left=left*-xRatio+"px";img.style.top=top*-yRatio+"px"}}};$.fn.zoom=function(options){return this.each(function(){var settings=$.extend({},defaults,options||{}),target=settings.target||this,source=this,$source=$(source),$target=$(target),img=document.createElement("img"),$img=$(img),mousemove="mousemove.zoom",clicked=false,touched=false,$urlElement;if(!settings.url){$urlElement=$source.find("img");if($urlElement[0]){settings.url=$urlElement.data("src")||$urlElement.attr("src")}if(!settings.url){return}}(function(){var position=$target.css("position");var overflow=$target.css("overflow");$source.one("zoom.destroy",function(){$source.off(".zoom");$target.css("position",position);$target.css("overflow",overflow);$img.remove()})})();img.onload=function(){var zoom=$.zoom(target,source,img,settings.magnify);function start(e){zoom.init();zoom.move(e);$img.stop().fadeTo($.support.opacity?settings.duration:0,1,$.isFunction(settings.onZoomIn)?settings.onZoomIn.call(img):false)}function stop(){$img.stop().fadeTo(settings.duration,0,$.isFunction(settings.onZoomOut)?settings.onZoomOut.call(img):false)}if(settings.on==="grab"){$source.on("mousedown.zoom",function(e){if(e.which===1){$(document).one("mouseup.zoom",function(){stop();$(document).off(mousemove,zoom.move)});start(e);$(document).on(mousemove,zoom.move);e.preventDefault()}})}else if(settings.on==="click"){$source.on("click.zoom",function(e){if(clicked){return}else{clicked=true;start(e);$(document).on(mousemove,zoom.move);$(document).one("click.zoom",function(){stop();clicked=false;$(document).off(mousemove,zoom.move)});return false}})}else if(settings.on==="toggle"){$source.on("click.zoom",function(e){if(clicked){stop()}else{start(e)}clicked=!clicked})}else if(settings.on==="mouseover"){zoom.init();$source.on("mouseenter.zoom",start).on("mouseleave.zoom",stop).on(mousemove,zoom.move)}if(settings.touch){$source.on("touchstart.zoom",function(e){e.preventDefault();if(touched){touched=false;stop()}else{touched=true;start(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])}}).on("touchmove.zoom",function(e){e.preventDefault();zoom.move(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])}).on("touchend.zoom",function(e){e.preventDefault();if(touched){touched=false;stop()}})}if($.isFunction(settings.callback)){settings.callback.call(img)}};img.src=settings.url})};$.fn.zoom.defaults=defaults})(window.jQuery);

/*
 *  Remodal - v1.1.0
 *  Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;e<c;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return b}function d(){if(b(document.body).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}}function f(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;e<c;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||"false"!==d&&d),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b('[data-remodal-id="'+d+'"]')}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=d,f=this;f.settings=b.extend({},t,c),f.index=b[p].lookup.push(f)-1,f.state=u.CLOSED,f.$overlay=b("."+k("overlay")),null!==f.settings.appendTo&&f.settings.appendTo.length&&(e=b(f.settings.appendTo)),f.$overlay.length||(f.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),e.append(f.$overlay)),f.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),f.$modal=a.addClass(q+" "+k("is-initialized")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).attr("tabindex","-1"),f.$wrapper=b("<div>").addClass(k("wrapper")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).hide().append(f.$modal),e.append(f.$wrapper),f.$wrapper.on("click."+q,'[data-remodal-action="close"]',function(a){a.preventDefault(),f.close()}),f.$wrapper.on("click."+q,'[data-remodal-action="cancel"]',function(a){a.preventDefault(),f.$modal.trigger(v.CANCELLATION),f.settings.closeOnCancel&&f.close(v.CANCELLATION)}),f.$wrapper.on("click."+q,'[data-remodal-action="confirm"]',function(a){a.preventDefault(),f.$modal.trigger(v.CONFIRMATION),f.settings.closeOnConfirm&&f.close(v.CONFIRMATION)}),f.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&f.settings.closeOnOutsideClick&&f.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}(),x=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-remodal-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(c.settings.hashTracking&&c.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-remodal-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b('body').on("click","[data-remodal-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-remodal-target"),e=b('[data-remodal-id="'+d+'"]');b[p].lookup[e.data(p)].open()}),b('body').find("."+q).each(function(a,c){var d=b(c),e=d.data("remodal-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b('body').on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});

/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */

!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(e){}if(n===g){c=C;break}n||(c[g]=C)}catch(e){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});

/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/*!
Waypoints Infinite Scroll Shortcut - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(n){this.options=i.extend({},t.defaults,n),this.container=this.options.element,"auto"!==this.options.container&&(this.container=this.options.container),this.$container=i(this.container),this.$more=i(this.options.more),this.$more.length&&(this.setupHandler(),this.waypoint=new o(this.options))}var i=window.jQuery,o=window.Waypoint;t.prototype.setupHandler=function(){this.options.handler=i.proxy(function(){this.options.onBeforePageLoad(),this.destroy(),this.$container.addClass(this.options.loadingClass),i.get(i(this.options.more).attr("href"),i.proxy(function(t){var n=i(i.parseHTML(t)),e=n.find(this.options.more),s=n.find(this.options.items);s.length||(s=n.filter(this.options.items)),this.$container.append(s),this.$container.removeClass(this.options.loadingClass),e.length||(e=n.filter(this.options.more)),e.length?(this.$more.replaceWith(e),this.$more=e,this.waypoint=new o(this.options)):this.$more.remove(),this.options.onAfterPageLoad(s)},this))},this)},t.prototype.destroy=function(){this.waypoint&&this.waypoint.destroy()},t.defaults={container:"auto",items:".infinite-item",more:".infinite-more-link",offset:"bottom-in-view",loadingClass:"infinite-loading",onBeforePageLoad:i.noop,onAfterPageLoad:i.noop},o.Infinite=t}();

// mediaWrapper.js: Simple responsive iframes
// MIT license http://www.opensource.org/licenses/mit-license.php/
// @author Matthew A. K. Smith http://www.akselkreis.com

!function(t){t.fn.mediaWrapper=function(i){var e=t.extend({intrinsic:!0,baseWidth:16,baseHeight:9},i);return this.each(function(){var i="";i=1==e.intrinsic&&""!==t(this).attr("width")&&""!==t(this).attr("height")?t(this).attr("height")/t(this).attr("width")*100:e.baseHeight/e.baseWidth*100,t(this).wrap('<div class="mediaWrapper" style="position: relative; width: 100%; height: 0; padding: '+i+'% 0 0 0; " />').css({position:"absolute",width:"100%",height:"100%",top:"0",left:"0"})})}}(jQuery);

/*
 * Pointer Events Polyfill: Adds support for the style attribute "pointer-events: none" to browsers without this feature (namely, IE).
 * (c) 2013, Kent Mewhort, licensed under BSD. See LICENSE.txt for details.
 */

function PointerEventsPolyfill(t){if(this.options={selector:"*",mouseEvents:["click","dblclick","mousedown","mouseup"],usePolyfillIf:function(){if("Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent;if(null!=t.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)){var e=parseFloat(RegExp.$1);if(11>e)return!0}}return!1}},t){var e=this;$.each(t,function(t,n){e.options[t]=n})}this.options.usePolyfillIf()&&this.register_mouse_events()}PointerEventsPolyfill.initialize=function(t){return null==PointerEventsPolyfill.singleton&&(PointerEventsPolyfill.singleton=new PointerEventsPolyfill(t)),PointerEventsPolyfill.singleton},PointerEventsPolyfill.prototype.register_mouse_events=function(){$(document).on(this.options.mouseEvents.join(" "),this.options.selector,function(t){if("none"==$(this).css("pointer-events")){var e=$(this).css("display");$(this).css("display","none");var n=document.elementFromPoint(t.clientX,t.clientY);return e?$(this).css("display",e):$(this).css("display",""),t.target=n,$(n).trigger(t),!1}return!0})};

/*!
 * Flickity PACKAGED v2.0.10
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,o,a){function h(t,e,n){var s,o="$()."+i+'("'+e+'")';return t.each(function(t,h){var l=a.data(h,i);if(!l)return void r(i+" not initialized. Cannot call methods, i.e. "+o);var c=l[e];if(!c||"_"==e.charAt(0))return void r(o+" is not a valid method");var d=c.apply(l,n);s=void 0===s?d:s}),void 0!==s?s:t}function l(t,e){t.each(function(t,n){var s=a.data(n,i);s?(s.option(e),s._init()):(s=new o(n,e),a.data(n,i,s))})}a=a||e||t.jQuery,a&&(o.prototype.option||(o.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=s.call(arguments,1);return h(this,t,e)}return l(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var s=Array.prototype.slice,o=t.console,r="undefined"==typeof o?function(){}:function(t){o.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return n.indexOf(e)==-1&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return n!=-1&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s],r=n&&n[o];r&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<l;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function s(){if(!c){c=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var s=n(e);o.isBoxSizeOuter=r=200==t(s.width),i.removeChild(e)}}function o(e){if(s(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var o=n(e);if("none"==o.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var c=a.isBorderBox="border-box"==o.boxSizing,d=0;d<l;d++){var u=h[d],f=o[u],p=parseFloat(f);a[u]=isNaN(p)?0:p}var v=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,m=a.marginLeft+a.marginRight,y=a.marginTop+a.marginBottom,E=a.borderLeftWidth+a.borderRightWidth,S=a.borderTopWidth+a.borderBottomWidth,b=c&&r,x=t(o.width);x!==!1&&(a.width=x+(b?0:v+E));var C=t(o.height);return C!==!1&&(a.height=C+(b?0:g+S)),a.innerWidth=a.width-(v+E),a.innerHeight=a.height-(g+S),a.outerWidth=a.width+m,a.outerHeight=a.height+y,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],l=h.length,c=!1;return o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],s=n+"MatchesSelector";if(t[s])return s}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void s.push(t);e(t,n)&&s.push(t);for(var i=t.querySelectorAll(n),o=0;o<i.length;o++)s.push(i[o])}}),s},i.debounceMethod=function(t,e,i){var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];t&&clearTimeout(t);var e=arguments,o=this;this[s]=setTimeout(function(){n.apply(o,e),delete o[s]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,s){i.docReady(function(){var o=i.toDashed(s),r="data-"+o,a=document.querySelectorAll("["+r+"]"),h=document.querySelectorAll(".js-"+o),l=i.makeArray(a).concat(i.makeArray(h)),c=r+"-options",d=t.jQuery;l.forEach(function(t){var i,o=t.getAttribute(r)||t.getAttribute(c);try{i=o&&JSON.parse(o)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var h=new e(t,i);d&&d.data(t,s,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("get-size")):(t.Flickity=t.Flickity||{},t.Flickity.Cell=e(t,t.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.x=0,this.shift=0},n.destroy=function(){this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.changeSelectedClass("add")},e.unselect=function(){this.changeSelectedClass("remove")},e.changeSelectedClass=function(t){this.cells.forEach(function(e){e.element.classList[t]("is-selected")})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("fizzy-ui-utils")):(t.Flickity=t.Flickity||{},t.Flickity.animatePrototype=e(t,t.fizzyUIUtils))}(window,function(t,e){var i=t.requestAnimationFrame||t.webkitRequestAnimationFrame,n=0;i||(i=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),s=setTimeout(t,i);return n=e+i,s});var s={};s.startAnimation=function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},s.animate=function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;i(function(){e.animate()})}};var o=function(){var t=document.documentElement.style;return"string"==typeof t.transform?"transform":"WebkitTransform"}();return s.positionSlider=function(){var t=this.x;this.options.wrapAround&&this.cells.length>1&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),t+=this.cursorPosition,t=this.options.rightToLeft&&o?-t:t;var i=this.getPositionValue(t);this.slider.style[o]=this.isAnimating?"translate3d("+i+",0,0)":"translateX("+i+")";var n=this.slides[0];if(n){var s=-this.x-n.target,r=s/this.slidesWidth;this.dispatchEvent("scroll",null,[r,s])}},s.positionSliderAtSelected=function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.positionSlider())},s.getPositionValue=function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},s.settle=function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle"))},s.shiftWrapCells=function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},s._shiftCells=function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=e>0?i:0;s.wrapShift(o),e-=s.size.outerWidth}},s._unshiftCells=function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},s.integratePhysics=function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},s.applyForce=function(t){this.velocity+=t},s.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},s.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())},s.applyDragForce=function(){if(this.isPointerDown){var t=this.dragX-this.x,e=t-this.velocity;this.applyForce(e)}},s.applySelectedAttraction=function(){if(!this.isPointerDown&&!this.isFreeScrolling&&this.cells.length){var t=this.selectedSlide.target*-1-this.x,e=t*this.options.selectedAttraction;this.applyForce(e)}},s}),function(t,e){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(i,n,s,o,r,a){return e(t,i,n,s,o,r,a)});else if("object"==typeof module&&module.exports)module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var i=t.Flickity;t.Flickity=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,i.Cell,i.Slide,i.animatePrototype)}}(window,function(t,e,i,n,s,o,r){function a(t,e){for(t=n.makeArray(t);t.length;)e.appendChild(t.shift())}function h(t,e){var i=n.getQueryElement(t);if(!i)return void(d&&d.error("Bad element for Flickity: "+(i||t)));if(this.element=i,this.element.flickityGUID){var s=f[this.element.flickityGUID];return s.option(e),s}l&&(this.$element=l(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e),this._create()}var l=t.jQuery,c=t.getComputedStyle,d=t.console,u=0,f={};h.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},h.createMethods=[];var p=h.prototype;n.extend(p,e.prototype),p._create=function(){var e=this.guid=++u;this.element.flickityGUID=e,f[e]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&t.addEventListener("resize",this),h.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){n.extend(this.options,t)},p.activate=function(){if(!this.isActive){this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize();var t=this._filterFindCellElements(this.element.children);a(t,this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate");var e,i=this.options.initialIndex;e=this.isInitActivated?this.selectedIndex:void 0!==i&&this.cells[i]?i:0,this.select(e,!1,!0),this.isInitActivated=!0}},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return n.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){var e=this._filterFindCellElements(t),i=e.map(function(t){return new s(t,this)},this);return i},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t?this.maxCellHeight||0:0;var e=0;if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var t=new o(this);this.slides.push(t);var e="left"==this.originSide,i=e?"marginRight":"marginLeft",n=this._getCanCellFit();this.cells.forEach(function(e,s){if(!t.cells.length)return void t.addCell(e);var r=t.outerWidth-t.firstMargin+(e.size.outerWidth-e.size[i]);n.call(this,s,r)?t.addCell(e):(t.updateTarget(),t=new o(this),this.slides.push(t),t.addCell(e))},this),t.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!==0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=i(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var v={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=v[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];t>0;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),l&&this.$element){t+=this.options.namespaceJQueryEvents?".flickity":"";var s=t;if(e){var o=l.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=n.modulo(t,this.slides.length)),this.slides[t]&&(this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select"),this.dispatchEvent("cellSelect")))},p._wrapSelect=function(t){var e=this.slides.length,i=this.options.wrapAround&&e>1;if(!i)return t;var s=n.modulo(t,e),o=Math.abs(s-this.selectedIndex),r=Math.abs(s+e-this.selectedIndex),a=Math.abs(s-e-this.selectedIndex);!this.isDragSelect&&r<o?t+=e:!this.isDragSelect&&a<o&&(t-=e),t<0?this.x-=this.slideableWidth:t>=e&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),this.selectedSlide=t,t.select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectCell=function(t,e,i){var n;"number"==typeof t?n=this.cells[t]:("string"==typeof t&&(t=this.element.querySelector(t)),n=this.getCell(t));for(var s=0;n&&s<this.slides.length;s++){var o=this.slides[s],r=o.cells.indexOf(n);if(r!=-1)return void this.select(s,e,i)}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getCell(t);i&&e.push(i)},this),e},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e?e:(t=n.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(1+2*t>=i)return this.getCellElements();for(var s=[],o=e-t;o<=e+t;o++){var r=this.options.wrapAround?n.modulo(o,i):o,a=this.slides[r];a&&(s=s.concat(a.getCellElements()))}return s},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){this.emitEvent("childUIPointerDown",[t])},p.onresize=function(){this.watchCSS(),this.resize()},n.debounceMethod(h,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=n.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){var t=this.options.watchCSS;if(t){var e=c(this.element,":after").content;e.indexOf("flickity")!=-1?this.activate():this.deactivate()}},p.onkeydown=function(t){if(this.options.accessibility&&(!document.activeElement||document.activeElement==this.element))if(37==t.keyCode){var e=this.options.rightToLeft?"next":"previous";this.uiChange(),this[e]()}else if(39==t.keyCode){var i=this.options.rightToLeft?"previous":"next";this.uiChange(),this[i]()}},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.cells.forEach(function(t){t.destroy()}),this.unselectSelectedSlide(),this.element.removeChild(this.viewport),a(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),t.removeEventListener("resize",this),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete f[this.guid]},n.extend(p,r),h.data=function(t){t=n.getQueryElement(t);var e=t&&t.flickityGUID;return e&&f[e]},n.htmlInit(h,"flickity"),l&&l.bridget&&l.bridget("flickity",h),h.setJQuery=function(t){l=t},h.Cell=s,h}),function(t,e){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.Unipointer=e(t,t.EvEmitter)}(window,function(t,e){function i(){}function n(){}var s=n.prototype=Object.create(e.prototype);s.bindStartEvent=function(t){this._bindStartEvent(t,!0)},s.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},s._bindStartEvent=function(e,i){i=void 0===i||!!i;var n=i?"addEventListener":"removeEventListener";t.PointerEvent?e[n]("pointerdown",this):(e[n]("mousedown",this),e[n]("touchstart",this))},s.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},s.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},s.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},s.onpointerdown=function(t){this._pointerDown(t,t)},s._pointerDown=function(t,e){this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},s.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var o={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return s._bindPostStartEvents=function(e){if(e){var i=o[e.type];i.forEach(function(e){t.addEventListener(e,this)},this),this._boundPointerEvents=i}},s._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(e){t.removeEventListener(e,this)},this),delete this._boundPointerEvents)},s.onmousemove=function(t){this._pointerMove(t,t)},s.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},s.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},s._pointerMove=function(t,e){this.pointerMove(t,e)},s.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},s.onmouseup=function(t){this._pointerUp(t,t)},s.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},s.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},s._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},s.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},s._pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this._unbindPostStartEvents(),this.pointerDone()},s.pointerDone=i,s.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},s.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},s._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},s.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},n}),function(t,e){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("unipointer")):t.Unidragger=e(t,t.Unipointer)}(window,function(t,e){function i(){}var n=i.prototype=Object.create(e.prototype);return n.bindHandles=function(){this._bindHandles(!0)},n.unbindHandles=function(){this._bindHandles(!1)},n._bindHandles=function(e){e=void 0===e||!!e;for(var i=e?"addEventListener":"removeEventListener",n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,e),s[i]("click",this),t.PointerEvent&&(s.style.touchAction=e?this._touchActionValue:"")}},n._touchActionValue="none",n.pointerDown=function(t,e){if("INPUT"==t.target.nodeName&&"range"==t.target.type)return this.isPointerDown=!1,void delete this.pointerIdentifier;this._dragPointerDown(t,e);var i=document.activeElement;i&&i.blur&&i.blur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])},n._dragPointerDown=function(t,i){this.pointerDownPoint=e.getPointerPoint(i);var n=this.canPreventDefaultOnPointerDown(t,i);n&&t.preventDefault()},n.canPreventDefaultOnPointerDown=function(t){return"SELECT"!=t.target.nodeName},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},n._dragPointerMove=function(t,i){var n=e.getPointerPoint(i),s={x:n.x-this.pointerDownPoint.x,y:n.y-this.pointerDownPoint.y};return!this.isDragging&&this.hasDragStarted(s)&&this._dragStart(t,i),s},n.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},n._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},n._dragStart=function(t,i){this.isDragging=!0,this.dragStartPoint=e.getPointerPoint(i),this.isPreventingClicks=!0,this.dragStart(t,i)},n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},n._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},n.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},n._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},n.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},n._staticClick=function(t,e){if(!this.isIgnoringMouseUp||"mouseup"!=t.type){var i=t.target.nodeName;"INPUT"!=i&&"TEXTAREA"!=i||t.target.focus(),this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400))}},n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},i.getPointerPoint=e.getPointerPoint,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):t.Flickity=e(t,t.Flickity,t.Unidragger,t.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=d[t.target.nodeName];return e||i||n}function o(){return{x:t.pageXOffset,y:t.pageYOffset}}n.extend(e.defaults,{draggable:!0,dragThreshold:3}),e.createMethods.push("_createDrag");var r=e.prototype;n.extend(r,i.prototype),r._touchActionValue="pan-y";var a="createTouch"in document,h=!1;r._createDrag=function(){this.on("activate",this.bindDrag),this.on("uiChange",this._uiChangeDrag),this.on("childUIPointerDown",this._childUIPointerDownDrag),this.on("deactivate",this.unbindDrag),a&&!h&&(t.addEventListener("touchmove",function(){}),h=!0)},r.bindDrag=function(){this.options.draggable&&!this.isDragBound&&(this.element.classList.add("is-draggable"),this.handles=[this.viewport],this.bindHandles(),this.isDragBound=!0)},r.unbindDrag=function(){this.isDragBound&&(this.element.classList.remove("is-draggable"),this.unbindHandles(),delete this.isDragBound)},r._uiChangeDrag=function(){delete this.isFreeScrolling},r._childUIPointerDownDrag=function(t){t.preventDefault(),this.pointerDownFocus(t)};var l={TEXTAREA:!0,INPUT:!0,OPTION:!0},c={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};r.pointerDown=function(e,i){var n=l[e.target.nodeName]&&!c[e.target.type];if(n)return this.isPointerDown=!1,void delete this.pointerIdentifier;this._dragPointerDown(e,i);var s=document.activeElement;s&&s.blur&&s!=this.element&&s!=document.body&&s.blur(),this.pointerDownFocus(e),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this._bindPostStartEvents(e),this.pointerDownScroll=o(),t.addEventListener("scroll",this),this.dispatchEvent("pointerDown",e,[i])},r.pointerDownFocus=function(e){var i=s(e);if(this.options.accessibility&&!i){var n=t.pageYOffset;this.element.focus(),t.pageYOffset!=n&&t.scrollTo(t.pageXOffset,n)}};var d={INPUT:!0,SELECT:!0};return r.canPreventDefaultOnPointerDown=function(t){var e=s(t);return!e},r.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},r.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},r.pointerDone=function(){t.removeEventListener("scroll",this),delete this.pointerDownScroll},r.dragStart=function(e,i){this.dragStartPosition=this.x,this.startAnimation(),t.removeEventListener("scroll",this),this.dispatchEvent("dragStart",e,[i])},r.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},r.dragMove=function(t,e,i){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1,s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=s>o?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])},r.dragEnd=function(t,e){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])},r.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1),s=i.distance<n.distance?i.index:n.index;
return s},r._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,e=this.getSlideDistance(-t,n),null!==e);)e=Math.abs(e);return{distance:s,index:n-i}},r.getSlideDistance=function(t,e){var i=this.slides.length,s=this.options.wrapAround&&i>1,o=s?n.modulo(e,i):e,r=this.slides[o];if(!r)return null;var a=s?this.slideableWidth*Math.floor(e/i):0;return t-(r.target+a)},r.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return t>0&&e>0?1:t<0&&e<0?-1:0},r.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},r.onscroll=function(){var t=o(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(Math.abs(e)>3||Math.abs(i)>3)&&this._pointerDone()},e}),function(t,e){"function"==typeof define&&define.amd?define("tap-listener/tap-listener",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("unipointer")):t.TapListener=e(t,t.Unipointer)}(window,function(t,e){function i(t){this.bindTap(t)}var n=i.prototype=Object.create(e.prototype);return n.bindTap=function(t){t&&(this.unbindTap(),this.tapElement=t,this._bindStartEvent(t,!0))},n.unbindTap=function(){this.tapElement&&(this._bindStartEvent(this.tapElement,!0),delete this.tapElement)},n.pointerUp=function(i,n){if(!this.isIgnoringMouseUp||"mouseup"!=i.type){var s=e.getPointerPoint(n),o=this.tapElement.getBoundingClientRect(),r=t.pageXOffset,a=t.pageYOffset,h=s.x>=o.left+r&&s.x<=o.right+r&&s.y>=o.top+a&&s.y<=o.bottom+a;if(h&&this.emitEvent("tap",[i,n]),"mouseup"!=i.type){this.isIgnoringMouseUp=!0;var l=this;setTimeout(function(){delete l.isIgnoringMouseUp},400)}}},n.destroy=function(){this.pointerDone(),this.unbindTap()},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";function s(t,e){this.direction=t,this.parent=e,this._create()}function o(t){return"string"==typeof t?t:"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}var r="http://www.w3.org/2000/svg";s.prototype=new i,s.prototype._create=function(){this.isEnabled=!0,this.isPrevious=this.direction==-1;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"previous":"next");var i=this.createSVG();e.appendChild(i),this.on("tap",this.onTap),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.bindTap(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},s.prototype.deactivate=function(){this.parent.element.removeChild(this.element),i.prototype.destroy.call(this),this.element.removeEventListener("click",this)},s.prototype.createSVG=function(){var t=document.createElementNS(r,"svg");t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(r,"path"),i=o(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},s.prototype.onTap=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},s.prototype.handleEvent=n.handleEvent,s.prototype.onclick=function(){var t=document.activeElement;t&&t==this.element&&this.onTap()},s.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},s.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},s.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&t.length>1)return void this.enable();var e=t.length?t.length-1:0,i=this.isPrevious?0:e,n=this.parent.selectedIndex==i?"disable":"enable";this[n]()},s.prototype.destroy=function(){this.deactivate()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var a=e.prototype;return a._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new s((-1),this),this.nextButton=new s(1,this),this.on("activate",this.activatePrevNextButtons))},a.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},a.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}s.prototype=new i,s.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.on("tap",this.onTap),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.bindTap(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.parent.element.removeChild(this.holder),i.prototype.destroy.call(this)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;t>0?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[];t;){var n=document.createElement("li");n.className="dot",e.appendChild(n),i.push(n),t--}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){var e=this.dots.splice(this.dots.length-t,t);e.forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot"),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected")},s.prototype.onTap=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):e(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",o&&(this.onVisibilityChange=function(){this.visibilityChange()}.bind(this),this.onVisibilityPlay=function(){this.visibilityPlay()}.bind(this))}var s,o;"hidden"in document?(s="hidden",o="visibilitychange"):"webkitHidden"in document&&(s="webkitHidden",o="webkitvisibilitychange"),n.prototype=Object.create(t.prototype),n.prototype.play=function(){if("playing"!=this.state){var t=document[s];if(o&&t)return void document.addEventListener(o,this.onVisibilityPlay);this.state="playing",o&&document.addEventListener(o,this.onVisibilityChange),this.tick()}},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),o&&document.removeEventListener(o,this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){var t=document[s];this[t?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener(o,this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var r=i.prototype;return r._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},r.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},r.playPlayer=function(){this.player.play()},r.stopPlayer=function(){this.player.stop()},r.pausePlayer=function(){this.player.pause()},r.unpausePlayer=function(){this.player.unpause()},r.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},r.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},r.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){function n(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}var s=e.prototype;return s.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var s=this.cells.length;e=void 0===e?s:e;var o=n(i),r=e==s;if(r)this.slider.appendChild(o);else{var a=this.cells[e].element;this.slider.insertBefore(o,a)}if(0===e)this.cells=i.concat(this.cells);else if(r)this.cells=this.cells.concat(i);else{var h=this.cells.splice(e,s-e);this.cells=this.cells.concat(i).concat(h)}this._sizeCells(i);var l=e>this.selectedIndex?0:i.length;this._cellAddedRemoved(e,l)}},s.append=function(t){this.insert(t,this.cells.length)},s.prepend=function(t){this.insert(t,0)},s.remove=function(t){var e,n,s=this.getCells(t),o=0,r=s.length;for(e=0;e<r;e++){n=s[e];var a=this.cells.indexOf(n)<this.selectedIndex;o-=a?1:0}for(e=0;e<r;e++)n=s[e],n.remove(),i.removeFrom(this.cells,n);s.length&&this._cellAddedRemoved(0,o)},s._cellAddedRemoved=function(t,e){e=e||0,this.selectedIndex+=e,this.selectedIndex=Math.max(0,Math.min(this.slides.length-1,this.selectedIndex)),this.cellChange(t,!0),this.emitEvent("cellAddedRemoved",[t,e])},s.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},s.cellChange=function(t,e){var i=this.slideableWidth;if(this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("cellChange",[t]),this.options.freeScroll){var n=i-this.slideableWidth;this.x+=n*this.cellAlign,this.positionSlider()}else e&&this.positionSliderAtSelected(),this.select(this.selectedIndex)},e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){"use strict";function n(t){if("IMG"==t.nodeName&&t.getAttribute("data-flickity-lazyload"))return[t];var e=t.querySelectorAll("img[data-flickity-lazyload]");return i.makeArray(e)}function s(t,e){this.img=t,this.flickity=e,this.load()}e.createMethods.push("_createLazyload");var o=e.prototype;return o._createLazyload=function(){this.on("select",this.lazyLoad)},o.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),o=[];i.forEach(function(t){var e=n(t);o=o.concat(e)}),o.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=i.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.img.getAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(t,e){function i(t,e,i){return(e-t)*i+t}t.createMethods.push("_createAsNavFor");var n=t.prototype;return n._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},n.setNavCompanion=function(i){i=e.getQueryElement(i);var n=t.data(i);if(n&&n!=this){this.navCompanion=n;var s=this;this.onNavCompanionSelect=function(){s.navCompanionSelect()},n.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},n.navCompanionSelect=function(t){if(this.navCompanion){var e=this.navCompanion.selectedCells[0],n=this.navCompanion.cells.indexOf(e),s=n+this.navCompanion.selectedCells.length-1,o=Math.floor(i(n,s,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var r=this.cells.slice(n,s+1);this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},n.changeNavSelectedClass=function(t){this.navSelectedElements.forEach(function(e){e.classList[t]("is-nav-selected")})},n.activateAsNavFor=function(){this.navCompanionSelect(!0)},n.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},n.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},n.deactivateAsNavFor=function(){this.removeNavSelectedElements()},n.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function s(t,e,o){return this instanceof s?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?o=e:i(this.options,e),o&&this.on("always",o),this.getImages(),a&&(this.jqDeferred=new a.Deferred),void setTimeout(function(){this.check()}.bind(this))):new s(t,e,o)}function o(t){this.img=t}function r(t,e){this.url=t,this.element=e,this.img=new Image}var a=t.jQuery,h=t.console;s.prototype=Object.create(e.prototype),s.prototype.options={},s.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},s.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&l[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var l={1:!0,9:!0,11:!0};return s.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},s.prototype.addImage=function(t){var e=new o(t);this.images.push(e)},s.prototype.addBackground=function(t,e){var i=new r(t,e);this.images.push(i)},s.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},s.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&h&&h.log("progress: "+i,t,e)},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},o.prototype=Object.create(e.prototype),o.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},o.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},o.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},o.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},o.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},o.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},r.prototype=Object.create(o.prototype),r.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},r.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},s.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(a=e,a.fn.imagesLoaded=function(t,e){var i=new s(this,t,e);return i.jqDeferred.promise(a(this))})},s.makeJQueryPlugin(),s}),function(t,e){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("flickity"),require("imagesloaded")):t.Flickity=e(t,t.Flickity,t.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){function t(t,i){var n=e.getParentCell(i.img);e.cellSizeChange(n&&n.element),e.options.freeScroll||e.positionSliderAtSelected()}if(this.options.imagesLoaded){var e=this;i(this.slider).on("progress",t)}},e});

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);

/*!
 * Headhesive.js v1.2.3 - An on-demand sticky header
 * Author: Copyright (c) Mark Goodyear <@markgdyr> <http://markgoodyear.com>
 * Url: http://markgoodyear.com/labs/headhesive
 * License: MIT
 */
!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e()}):"object"==typeof exports?module.exports=e():t.Headhesive=e()}(this,function(){"use strict";var t=function(e,s){for(var o in s)s.hasOwnProperty(o)&&(e[o]="object"==typeof s[o]?t(e[o],s[o]):s[o]);return e},e=function(t,e){var s,o,i,n=Date.now||function(){return(new Date).getTime()},l=null,c=0,r=function(){c=n(),l=null,i=t.apply(s,o),s=o=null};return function(){var f=n(),h=e-(f-c);return s=this,o=arguments,0>=h?(clearTimeout(l),l=null,c=f,i=t.apply(s,o),s=o=null):l||(l=setTimeout(r,h)),i}},s=function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},o=function(t,e){for(var s=0,o=t.offsetHeight;t;)s+=t.offsetTop,t=t.offsetParent;return"bottom"===e&&(s+=o),s},i=function(e,s){"querySelector"in document&&"addEventListener"in window&&(this.visible=!1,this.options={offset:300,offsetSide:"top",classes:{clone:"headhesive",stick:"headhesive--stick",unstick:"headhesive--unstick"},throttle:250,onInit:function(){},onStick:function(){},onUnstick:function(){},onDestroy:function(){}},this.elem="string"==typeof e?document.querySelector(e):e,this.options=t(this.options,s),this.init())};return i.prototype={constructor:i,init:function(){if(this.clonedElem=this.elem.cloneNode(!0),this.clonedElem.className+=" "+this.options.classes.clone,document.body.insertBefore(this.clonedElem,document.body.firstChild),"number"==typeof this.options.offset)this.scrollOffset=this.options.offset;else{if("string"!=typeof this.options.offset)throw new Error("Invalid offset: "+this.options.offset);this._setScrollOffset()}this._throttleUpdate=e(this.update.bind(this),this.options.throttle),this._throttleScrollOffset=e(this._setScrollOffset.bind(this),this.options.throttle),window.addEventListener("scroll",this._throttleUpdate,!1),window.addEventListener("resize",this._throttleScrollOffset,!1),this.options.onInit.call(this)},_setScrollOffset:function(){"string"==typeof this.options.offset&&(this.scrollOffset=o(document.querySelector(this.options.offset),this.options.offsetSide))},destroy:function(){document.body.removeChild(this.clonedElem),window.removeEventListener("scroll",this._throttleUpdate),window.removeEventListener("resize",this._throttleScrollOffset),this.options.onDestroy.call(this)},stick:function(){this.visible||(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.unstick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.stick,this.visible=!0,this.options.onStick.call(this))},unstick:function(){this.visible&&(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.stick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.unstick,this.visible=!1,this.options.onUnstick.call(this))},update:function(){s()>this.scrollOffset?this.stick():this.unstick()}},i});

  /*! js-url - v2.5.0 - 2017-04-22 */
  !function(){var a=function(){function a(){}function b(a){return decodeURIComponent(a.replace(/\+/g," "))}function c(a,b){var c=a.charAt(0),d=b.split(c);return c===a?d:(a=parseInt(a.substring(1),10),d[a<0?d.length+a:a-1])}function d(a,c){for(var d=a.charAt(0),e=c.split("&"),f=[],g={},h=[],i=a.substring(1),j=0,k=e.length;j<k;j++)if(f=e[j].match(/(.*?)=(.*)/),f||(f=[e[j],e[j],""]),""!==f[1].replace(/\s/g,"")){if(f[2]=b(f[2]||""),i===f[1])return f[2];h=f[1].match(/(.*)\[([0-9]+)\]/),h?(g[h[1]]=g[h[1]]||[],g[h[1]][h[2]]=f[2]):g[f[1]]=f[2]}return d===a?g:g[i]}return function(b,e){var f,g={};if("tld?"===b)return a();if(e=e||window.location.toString(),!b)return e;if(b=b.toString(),f=e.match(/^mailto:([^\/].+)/))g.protocol="mailto",g.email=f[1];else{if((f=e.match(/(.*?)\/#\!(.*)/))&&(e=f[1]+f[2]),(f=e.match(/(.*?)#(.*)/))&&(g.hash=f[2],e=f[1]),g.hash&&b.match(/^#/))return d(b,g.hash);if((f=e.match(/(.*?)\?(.*)/))&&(g.query=f[2],e=f[1]),g.query&&b.match(/^\?/))return d(b,g.query);if((f=e.match(/(.*?)\:?\/\/(.*)/))&&(g.protocol=f[1].toLowerCase(),e=f[2]),(f=e.match(/(.*?)(\/.*)/))&&(g.path=f[2],e=f[1]),g.path=(g.path||"").replace(/^([^\/])/,"/$1"),b.match(/^[\-0-9]+$/)&&(b=b.replace(/^([^\/])/,"/$1")),b.match(/^\//))return c(b,g.path.substring(1));if(f=c("/-1",g.path.substring(1)),f&&(f=f.match(/(.*?)\.(.*)/))&&(g.file=f[0],g.filename=f[1],g.fileext=f[2]),(f=e.match(/(.*)\:([0-9]+)$/))&&(g.port=f[2],e=f[1]),(f=e.match(/(.*?)@(.*)/))&&(g.auth=f[1],e=f[2]),g.auth&&(f=g.auth.match(/(.*)\:(.*)/),g.user=f?f[1]:g.auth,g.pass=f?f[2]:void 0),g.hostname=e.toLowerCase(),"."===b.charAt(0))return c(b,g.hostname);a()&&(f=g.hostname.match(a()),f&&(g.tld=f[3],g.domain=f[2]?f[2]+"."+f[3]:void 0,g.sub=f[1]||void 0)),g.port=g.port||("https"===g.protocol?"443":"80"),g.protocol=g.protocol||("443"===g.port?"https":"http")}return b in g?g[b]:"{}"===b?g:void 0}}();"function"==typeof window.define&&window.define.amd?window.define("js-url",[],function(){return a}):("undefined"!=typeof window.jQuery&&window.jQuery.extend({url:function(a,b){return window.url(a,b)}}),window.url=a)}();


  /*============================================================================
    Home page - social media
  ==============================================================================*/

  var social = {
    twitter: function(){
      if (!window.twttr){
        //Initialize twitter feed
        window.twttr = (function (d,s,id) {
        var t, js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
        js.src="https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
        return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
        }(document, "script", "twitter-wjs"));
      }

      if (window.twttr) {
        window.twttr.ready(function (twttr) {
          twttr.widgets.load(
            document.getElementById("twitter-timeline")
          );
        });
      }
    },
    unload: function(){

    }
  }

  var instagram = {
    loadContent: function(s){
      if(s.clientID) {
        var url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+s.clientID;

        $.ajax({
          type: 'GET',
          url: url,
          dataType: 'jsonp',
          success: function(data) {

            if(data.meta.code === 200 && data.data.length) {
              var data = data.data;
              var count = 0;
              s.el.empty();

              for(var i = 0; i < data.length; i++) {
                var thisMedia = data[i], item;

                var url = thisMedia.images.low_resolution.url;

                if(!thisMedia.images.low_resolution.url.indexOf("null") > -1) {
                  item = '<div class="il-photo__img instagram__bg" style="background-image:url('+url+')" data-filter="'+thisMedia.filter+'" /></div>';
                  item = '<a href="'+thisMedia.link+'" target="_blank" class="instagram__link">'+item+'</a>';
                }

                if(thisMedia.videos) {
                  item = '<div class="instagram__video instagram__bg" style="background-image:url('+url+')" data-filter="'+thisMedia.filter+'" /></div>';
                  item = '<a href="'+thisMedia.link+'" target="_blank" class="instagram__link instagram__video-link">'+item+'</a>';
                }

                if(item) {
                  item = '<div class="four columns instagram__item">'+item+'</div>';
                }
                if(item !== '') {
                  s.el.append(item);
                  count++;
                }
                if(count == s.limit) {
                  break;
                }
              }
            }
          },
          error: function() {
          }
        });
      }
    }
  }

  $('.social-feeds-wrap').each(function (index, value) {

    social.twitter();

    var $target = $(this).find(".js-instafeed");
    instagram.loadContent({
      el: $target,
      clientID: $target.data('client-id'),
      limit: $target.data('count')
    });
  });
$(document)
  .on('shopify:block:select', function(e){

    var blockId = e.detail.blockId;
    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('slideshow-section') || $parentSection.hasClass('testimonial-section')){
      sliderBlock.select(blockId, $parentSection);
    }

    if ($parentSection.hasClass('product-template')){
      
    }

    utils.resizeActionButtons();

});

$(document)
  .on('shopify:block:deselect', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('slideshow-section') || $parentSection.hasClass('testimonial-section')){
      sliderBlock.deselect($parentSection)
    }

});

$(document)
  .on('shopify:section:reorder', function(e){

    utils.pageBannerCheck();

});

$(document)
  .on('shopify:section:load', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    utils.pageBannerCheck();

    

    if ($parentSection.hasClass('social-feeds-section')){
      $('.social-feeds-wrap').each(function (index, value) {

        social.twitter();

        var $target = $(this).find(".js-instafeed");
        instagram.loadContent({
          el: $target,
          clientID: $target.data('client-id'),
          limit: $target.data('count')
        });
      });
    }

    if ($parentSection.hasClass('faq-section')){
      faqAccordion.init();
    }

    if ($parentSection.hasClass('cart-section')){
      cart.init();
    }

    if ($parentSection.hasClass('featured-promotions-section')){
      featuredPromotions.init();
    }

    if ($parentSection.hasClass('slideshow-section')){
      slideshow.init();
    }

    
      if ($parentSection.hasClass('search-section')){
        searchAutocomplete.init();
      }
    


    if ($parentSection.hasClass('testimonial-section')){
      testimonial.init();
    }

    if ($parentSection.hasClass('image-gallery-section')){
      gallery.init();
    }

    if ($parentSection.hasClass('featured-products-section')){
      productPage.initializeQuantityBox();
      productPage.productSwatches();
      productPage.init();
      
    }

    if ($parentSection.hasClass('featured-collection-section')){
      featuredCollectionSection.init();
    }

    if ($parentSection.hasClass('video-section')){
      videoSection.init();
    }

    if ($parentSection.hasClass('recently-viewed')){
      recentlyViewed.init('.js-recently-viewed');
    }

    if ($parentSection.hasClass('product-template')){
      productPage.init();
      productPage.productSwatches();
      productPage.relatedProducts();
      recentlyViewed.init();
      
    }

    if ($parentSection.hasClass('article-template-section')){
      if(window.location.pathname.indexOf('/comments') != -1) {
        $('html,body').animate({scrollTop: $("#new-comment").offset().top-140},'slow');
      }
    }

    if ($parentSection.hasClass('collection-template-section')){
      collectionSidebarFilter.init();
    }

    if ($parentSection.hasClass('search-template-section')){
      collection.init();
      
        searchAutocomplete.init();
      
      collectionSidebarFilter.init();
    }

    if ($parentSection.hasClass('header-section')){
      header.init();
      header.loadMegaMenu();
    }

    if ($parentSection.hasClass('mega-menu-section')){
      header.loadMegaMenu();
    }

    if ($parentSection.hasClass('page-details-section')) {
      featuredCollectionSection.init();
      videoSection.init();
    }

    if ($parentSection.hasClass('product-details-section')) {
      featuredCollectionSection.init();
      videoSection.init();
    }
});


$(document)
  .on('shopify:section:unload', function(e){

    var $target = $(e.target);
    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('header-section')){
      header.unload($target);
      header.unloadMegaMenu();
    }

    if ($parentSection.hasClass('slideshow-section')){
      slideshow.unload($target);
    }

    if ($parentSection.hasClass('testimonial-section')){
      testimonial.unload($target);
    }

    if ($parentSection.hasClass('video-section')){
      videoSection.unload($target);
    }

    if ($parentSection.hasClass('search-section')){
      searchAutocomplete.unload($target);
    }

    if ($parentSection.hasClass('product-template')){
      productPage.unload($target);
    }

    if ($parentSection.hasClass('mega-menu-section')){
      header.unloadMegaMenu();
    }

    if ($parentSection.hasClass('page-details-section')) {
      videoSection.unload($target);
    }

    if ($parentSection.hasClass('product-details-section')) {
      videoSection.unload($target);
    }

});

$(document)
  .on('shopify:section:select', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('social-feeds-section')){
      $('.social-feeds-wrap').each(function (index, value) {
        social.twitter();
      });
    }

    if ($parentSection.hasClass('mega-menu-section')){
      var megaMenuParent = $('.header .' + e.detail.sectionId).data('dropdown');
      setTimeout(function() {
        $('a.mega-menu-parent[data-dropdown-rel="' + megaMenuParent + '"]').trigger('mouseenter');
        $('a.mega-menu-parent[data-dropdown-rel="' + megaMenuParent + '"]').parents('header').addClass('editor-hover--true');
        header.removeDataAttributes('.header .mega-menu.dropdown_container .dropdown_column');
      }, 10);
    }

    if ($parentSection.hasClass('featured-collection-section')){
      featuredCollectionSection.unload($parentSection);
      featuredCollectionSection.init();
    }

    utils.pageBannerCheck();
    var evt = document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(evt);
});

$(document)
  .on('shopify:section:deselect', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('mega-menu-section')){
      var megaMenuParent = $('.header .' + e.detail.sectionId).data('dropdown');
      $('a.mega-menu-parent[data-dropdown-rel="' + megaMenuParent + '"]').trigger('mouseout');
      $('a.mega-menu-parent[data-dropdown-rel="' + megaMenuParent + '"]').parents('header').removeClass('editor-hover--true');
    }
});


$(document).ready(function(){
  
  $('body').on('click', '.bc-hamburger-menu', function(){
    let navmenu = $('body').find('.bc-nav-menu');
    if(navmenu.hasClass('active')){
      navmenu.removeClass('active')
    } else {
      navmenu.addClass('active')
    }
  });
  
  $('.bctextwithslider').each(function(){
    let $slider = $(this);
    $slider.flickity({
      "lazyLoad": 1,
      "imagesLoaded": true,
      "draggable": true,
      "prevNextButtons": true,
      "pageDots": false,
      "contain": true,
      "freeScroll": true
    });
  });
  
  $('body').on('click', '.bc-acc-head', function(){
    let $this = $(this);
    let $box = $this.closest('.bc-acc-box');
    let $content = $box.find('.bc-acc-content');
    if($content.hasClass('active')){
      $content.removeClass('active');
      $content.slideUp();
    } else {
      $content.addClass('active');
      $content.slideDown();
    }
  })
  
  $('body').on('click', '.cart_empty_content', function(){
    $('body').removeClass('cartisopen');
  })
  
  $('body').on('click', '.bc-cart-continue-shopping', function(){
    $('body').removeClass('cartisopen');
  })
  
  $('body').on('click', '.bc-cart-icon', function(){
    $('body').addClass('cartisopen');
  })
  
  if($('body').hasClass('index')){
    let $window = $(window);
    let $windowWidth = $window.width();
    if($windowWidth >= 768){
      let $header = $('.bc-new-header');
      let $indexSections = $('.index-sections');
      let $headerPositionTop = $header.offset().top;
      let $headerHeight = $header.height();
      $window.scroll(function(){
        if($window.scrollTop() >= $headerPositionTop){
          $indexSections.css('padding-top', $headerHeight + 'px');
          $header.addClass('bc-sticky');
        } else {
          $indexSections.css('padding-top', '0px');
          $header.removeClass('bc-sticky');
        }
      });
    }
  } else {
    $('body').css('padding-top', $('.bc-new-header').height() + 'px');
  }
  
});

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */(function(n,r){"use strict";typeof module=="object"&&typeof module.exports=="object"?module.exports=n.document?r(n,!0):function(s){if(!s.document)throw new Error("jQuery requires a window with a document");return r(s)}:r(n)})(typeof window!="undefined"?window:this,function(n,r){"use strict";var s=[],h=n.document,l=Object.getPrototypeOf,f=s.slice,d=s.concat,m=s.push,w=s.indexOf,_={},E=_.toString,A=_.hasOwnProperty,S=A.toString,T=S.call(Object),j={},L=function(o){return typeof o=="function"&&typeof o.nodeType!="number"},C=function(o){return o!=null&&o===o.window},O={type:!0,src:!0,noModule:!0};function F(t,o,a){var c,p=(o=o||h).createElement("script");if(p.text=t,a)for(c in O)a[c]&&(p[c]=a[c]);o.head.appendChild(p).parentNode.removeChild(p)}function U(t){return t==null?t+"":typeof t=="object"||typeof t=="function"?_[E.call(t)]||"object":typeof t}var G="3.3.1",u=function(t,o){return new u.fn.init(t,o)},ce=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;u.fn=u.prototype={jquery:"3.3.1",constructor:u,length:0,toArray:function(){return f.call(this)},get:function(t){return t==null?f.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var o=u.merge(this.constructor(),t);return o.prevObject=this,o},each:function(t){return u.each(this,t)},map:function(t){return this.pushStack(u.map(this,function(o,a){return t.call(o,a,o)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var o=this.length,a=+t+(t<0?o:0);return this.pushStack(a>=0&&a<o?[this[a]]:[])},end:function(){return this.prevObject||this.constructor()},push:m,sort:s.sort,splice:s.splice},u.extend=u.fn.extend=function(){var t,o,a,c,p,g,v=arguments[0]||{},x=1,k=arguments.length,I=!1;for(typeof v=="boolean"&&(I=v,v=arguments[x]||{},x++),typeof v=="object"||L(v)||(v={}),x===k&&(v=this,x--);x<k;x++)if((t=arguments[x])!=null)for(o in t)a=v[o],v!==(c=t[o])&&(I&&c&&(u.isPlainObject(c)||(p=Array.isArray(c)))?(p?(p=!1,g=a&&Array.isArray(a)?a:[]):g=a&&u.isPlainObject(a)?a:{},v[o]=u.extend(I,g,c)):c!==void 0&&(v[o]=c));return v},u.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var o,a;return!(!t||E.call(t)!=="[object Object]")&&(!(o=l(t))||typeof(a=A.call(o,"constructor")&&o.constructor)=="function"&&S.call(a)===T)},isEmptyObject:function(t){var o;for(o in t)return!1;return!0},globalEval:function(t){F(t)},each:function(t,o){var a,c=0;if(ve(t))for(a=t.length;c<a&&o.call(t[c],c,t[c])!==!1;c++);else for(c in t)if(o.call(t[c],c,t[c])===!1)break;return t},trim:function(t){return t==null?"":(t+"").replace(ce,"")},makeArray:function(t,o){var a=o||[];return t!=null&&(ve(Object(t))?u.merge(a,typeof t=="string"?[t]:t):m.call(a,t)),a},inArray:function(t,o,a){return o==null?-1:w.call(o,t,a)},merge:function(t,o){for(var a=+o.length,c=0,p=t.length;c<a;c++)t[p++]=o[c];return t.length=p,t},grep:function(t,o,a){for(var c,p=[],g=0,v=t.length,x=!a;g<v;g++)(c=!o(t[g],g))!==x&&p.push(t[g]);return p},map:function(t,o,a){var c,p,g=0,v=[];if(ve(t))for(c=t.length;g<c;g++)(p=o(t[g],g,a))!=null&&v.push(p);else for(g in t)(p=o(t[g],g,a))!=null&&v.push(p);return d.apply([],v)},guid:1,support:j}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=s[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,o){_["[object "+o+"]"]=o.toLowerCase()});function ve(t){var o=!!t&&"length"in t&&t.length,a=U(t);return!L(t)&&!C(t)&&(a==="array"||o===0||typeof o=="number"&&o>0&&o-1 in t)}var H=function(t){var o,a,c,p,g,v,x,k,I,M,V,N,z,K,ae,te,we,be,Ae,ue="sizzle"+1*new Date,re=t.document,Te=0,de=0,ye=Vt(),dt=Vt(),it=Vt(),Oe=function(y,b){return y===b&&(V=!0),0},ut={}.hasOwnProperty,Pe=[],Ue=Pe.pop,nt=Pe.push,$e=Pe.push,Li=Pe.slice,Qe=function(y,b){for(var D=0,q=y.length;D<q;D++)if(y[D]===b)return D;return-1},Wt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",he="[\\x20\\t\\r\\n\\f]",Xe="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",Ni="\\["+he+"*("+Xe+")(?:"+he+"*([*^$|!~]?=)"+he+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Xe+"))|)"+he+"*\\]",Rt=":("+Xe+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ni+")*)|.*)\\)|)",On=new RegExp(he+"+","g"),Ct=new RegExp("^"+he+"+|((?:^|[^\\\\])(?:\\\\.)*)"+he+"+$","g"),qn=new RegExp("^"+he+"*,"+he+"*"),zn=new RegExp("^"+he+"*([>+~]|"+he+")"+he+"*"),Mn=new RegExp("="+he+`*([^\\]'"]*?)`+he+"*\\]","g"),Fn=new RegExp(Rt),Hn=new RegExp("^"+Xe+"$"),_t={ID:new RegExp("^#("+Xe+")"),CLASS:new RegExp("^\\.("+Xe+")"),TAG:new RegExp("^("+Xe+"|[*])"),ATTR:new RegExp("^"+Ni),PSEUDO:new RegExp("^"+Rt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+he+"*(even|odd|(([+-]|)(\\d*)n|)"+he+"*(?:([+-]|)"+he+"*(\\d+)|))"+he+"*\\)|)","i"),bool:new RegExp("^(?:"+Wt+")$","i"),needsContext:new RegExp("^"+he+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+he+"*((?:-\\d)?\\d*)"+he+"*\\)|)(?=[^-]|$)","i")},Bn=/^(?:input|select|textarea|button)$/i,Wn=/^h\d$/i,ht=/^[^{]+\{\s*\[native \w/,Rn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ut=/[+~]/,We=new RegExp("\\\\([\\da-f]{1,6}"+he+"?|("+he+")|.)","ig"),Re=function(y,b,D){var q="0x"+b-65536;return q!==q||D?b:q<0?String.fromCharCode(q+65536):String.fromCharCode(q>>10|55296,1023&q|56320)},Oi=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,qi=function(y,b){return b?y==="\0"?"\uFFFD":y.slice(0,-1)+"\\"+y.charCodeAt(y.length-1).toString(16)+" ":"\\"+y},zi=function(){N()},Un=Et(function(y){return y.disabled===!0&&("form"in y||"label"in y)},{dir:"parentNode",next:"legend"});try{$e.apply(Pe=Li.call(re.childNodes),re.childNodes),Pe[re.childNodes.length].nodeType}catch{$e={apply:Pe.length?function(b,D){nt.apply(b,Li.call(D))}:function(b,D){for(var q=b.length,P=0;b[q++]=D[P++];);b.length=q-1}}}function fe(y,b,D,q){var P,B,R,Q,Y,ie,ee,oe=b&&b.ownerDocument,le=b?b.nodeType:9;if(D=D||[],typeof y!="string"||!y||le!==1&&le!==9&&le!==11)return D;if(!q&&((b?b.ownerDocument||b:re)!==z&&N(b),b=b||z,ae)){if(le!==11&&(Y=Rn.exec(y)))if(P=Y[1]){if(le===9){if(!(R=b.getElementById(P)))return D;if(R.id===P)return D.push(R),D}else if(oe&&(R=oe.getElementById(P))&&Ae(b,R)&&R.id===P)return D.push(R),D}else{if(Y[2])return $e.apply(D,b.getElementsByTagName(y)),D;if((P=Y[3])&&a.getElementsByClassName&&b.getElementsByClassName)return $e.apply(D,b.getElementsByClassName(P)),D}if(a.qsa&&!it[y+" "]&&(!te||!te.test(y))){if(le!==1)oe=b,ee=y;else if(b.nodeName.toLowerCase()!=="object"){for((Q=b.getAttribute("id"))?Q=Q.replace(Oi,qi):b.setAttribute("id",Q=ue),B=(ie=v(y)).length;B--;)ie[B]="#"+Q+" "+kt(ie[B]);ee=ie.join(","),oe=Ut.test(y)&&Qt(b.parentNode)||b}if(ee)try{return $e.apply(D,oe.querySelectorAll(ee)),D}catch{}finally{Q===ue&&b.removeAttribute("id")}}}return k(y.replace(Ct,"$1"),b,D,q)}function Vt(){var y=[];function b(D,q){return y.push(D+" ")>c.cacheLength&&delete b[y.shift()],b[D+" "]=q}return b}function qe(y){return y[ue]=!0,y}function Fe(y){var b=z.createElement("fieldset");try{return!!y(b)}catch{return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function Gt(y,b){for(var D=y.split("|"),q=D.length;q--;)c.attrHandle[D[q]]=b}function Mi(y,b){var D=b&&y,q=D&&y.nodeType===1&&b.nodeType===1&&y.sourceIndex-b.sourceIndex;if(q)return q;if(D){for(;D=D.nextSibling;)if(D===b)return-1}return y?1:-1}function Vn(y){return function(b){return b.nodeName.toLowerCase()==="input"&&b.type===y}}function Gn(y){return function(b){var D=b.nodeName.toLowerCase();return(D==="input"||D==="button")&&b.type===y}}function Fi(y){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===y:b.disabled===y:b.isDisabled===y||b.isDisabled!==!y&&Un(b)===y:b.disabled===y:"label"in b&&b.disabled===y}}function Ye(y){return qe(function(b){return b=+b,qe(function(D,q){for(var P,B=y([],D.length,b),R=B.length;R--;)D[P=B[R]]&&(D[P]=!(q[P]=D[P]))})})}function Qt(y){return y&&typeof y.getElementsByTagName!="undefined"&&y}a=fe.support={},g=fe.isXML=function(y){var b=y&&(y.ownerDocument||y).documentElement;return!!b&&b.nodeName!=="HTML"},N=fe.setDocument=function(y){var b,D,q=y?y.ownerDocument||y:re;return q!==z&&q.nodeType===9&&q.documentElement&&(z=q,K=z.documentElement,ae=!g(z),re!==z&&(D=z.defaultView)&&D.top!==D&&(D.addEventListener?D.addEventListener("unload",zi,!1):D.attachEvent&&D.attachEvent("onunload",zi)),a.attributes=Fe(function(P){return P.className="i",!P.getAttribute("className")}),a.getElementsByTagName=Fe(function(P){return P.appendChild(z.createComment("")),!P.getElementsByTagName("*").length}),a.getElementsByClassName=ht.test(z.getElementsByClassName),a.getById=Fe(function(P){return K.appendChild(P).id=ue,!z.getElementsByName||!z.getElementsByName(ue).length}),a.getById?(c.filter.ID=function(P){var B=P.replace(We,Re);return function(R){return R.getAttribute("id")===B}},c.find.ID=function(P,B){if(typeof B.getElementById!="undefined"&&ae){var R=B.getElementById(P);return R?[R]:[]}}):(c.filter.ID=function(P){var B=P.replace(We,Re);return function(R){var Q=typeof R.getAttributeNode!="undefined"&&R.getAttributeNode("id");return Q&&Q.value===B}},c.find.ID=function(P,B){if(typeof B.getElementById!="undefined"&&ae){var R,Q,Y,ie=B.getElementById(P);if(ie){if((R=ie.getAttributeNode("id"))&&R.value===P)return[ie];for(Y=B.getElementsByName(P),Q=0;ie=Y[Q++];)if((R=ie.getAttributeNode("id"))&&R.value===P)return[ie]}return[]}}),c.find.TAG=a.getElementsByTagName?function(P,B){return typeof B.getElementsByTagName!="undefined"?B.getElementsByTagName(P):a.qsa?B.querySelectorAll(P):void 0}:function(P,B){var R,Q=[],Y=0,ie=B.getElementsByTagName(P);if(P==="*"){for(;R=ie[Y++];)R.nodeType===1&&Q.push(R);return Q}return ie},c.find.CLASS=a.getElementsByClassName&&function(P,B){if(typeof B.getElementsByClassName!="undefined"&&ae)return B.getElementsByClassName(P)},we=[],te=[],(a.qsa=ht.test(z.querySelectorAll))&&(Fe(function(P){K.appendChild(P).innerHTML="<a id='"+ue+"'></a><select id='"+ue+"-\r\\' msallowcapture=''><option selected=''></option></select>",P.querySelectorAll("[msallowcapture^='']").length&&te.push("[*^$]="+he+`*(?:''|"")`),P.querySelectorAll("[selected]").length||te.push("\\["+he+"*(?:value|"+Wt+")"),P.querySelectorAll("[id~="+ue+"-]").length||te.push("~="),P.querySelectorAll(":checked").length||te.push(":checked"),P.querySelectorAll("a#"+ue+"+*").length||te.push(".#.+[+~]")}),Fe(function(P){P.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var B=z.createElement("input");B.setAttribute("type","hidden"),P.appendChild(B).setAttribute("name","D"),P.querySelectorAll("[name=d]").length&&te.push("name"+he+"*[*^$|!~]?="),P.querySelectorAll(":enabled").length!==2&&te.push(":enabled",":disabled"),K.appendChild(P).disabled=!0,P.querySelectorAll(":disabled").length!==2&&te.push(":enabled",":disabled"),P.querySelectorAll("*,:x"),te.push(",.*:")})),(a.matchesSelector=ht.test(be=K.matches||K.webkitMatchesSelector||K.mozMatchesSelector||K.oMatchesSelector||K.msMatchesSelector))&&Fe(function(P){a.disconnectedMatch=be.call(P,"*"),be.call(P,"[s!='']:x"),we.push("!=",Rt)}),te=te.length&&new RegExp(te.join("|")),we=we.length&&new RegExp(we.join("|")),b=ht.test(K.compareDocumentPosition),Ae=b||ht.test(K.contains)?function(P,B){var R=P.nodeType===9?P.documentElement:P,Q=B&&B.parentNode;return P===Q||!(!Q||Q.nodeType!==1||!(R.contains?R.contains(Q):P.compareDocumentPosition&&16&P.compareDocumentPosition(Q)))}:function(P,B){if(B){for(;B=B.parentNode;)if(B===P)return!0}return!1},Oe=b?function(P,B){if(P===B)return V=!0,0;var R=!P.compareDocumentPosition-!B.compareDocumentPosition;return R||(1&(R=(P.ownerDocument||P)===(B.ownerDocument||B)?P.compareDocumentPosition(B):1)||!a.sortDetached&&B.compareDocumentPosition(P)===R?P===z||P.ownerDocument===re&&Ae(re,P)?-1:B===z||B.ownerDocument===re&&Ae(re,B)?1:M?Qe(M,P)-Qe(M,B):0:4&R?-1:1)}:function(P,B){if(P===B)return V=!0,0;var R,Q=0,Y=P.parentNode,ie=B.parentNode,ee=[P],oe=[B];if(!Y||!ie)return P===z?-1:B===z?1:Y?-1:ie?1:M?Qe(M,P)-Qe(M,B):0;if(Y===ie)return Mi(P,B);for(R=P;R=R.parentNode;)ee.unshift(R);for(R=B;R=R.parentNode;)oe.unshift(R);for(;ee[Q]===oe[Q];)Q++;return Q?Mi(ee[Q],oe[Q]):ee[Q]===re?-1:oe[Q]===re?1:0}),z},fe.matches=function(y,b){return fe(y,null,null,b)},fe.matchesSelector=function(y,b){if((y.ownerDocument||y)!==z&&N(y),b=b.replace(Mn,"='$1']"),a.matchesSelector&&ae&&!it[b+" "]&&(!we||!we.test(b))&&(!te||!te.test(b)))try{var D=be.call(y,b);if(D||a.disconnectedMatch||y.document&&y.document.nodeType!==11)return D}catch{}return fe(b,z,null,[y]).length>0},fe.contains=function(y,b){return(y.ownerDocument||y)!==z&&N(y),Ae(y,b)},fe.attr=function(y,b){(y.ownerDocument||y)!==z&&N(y);var D=c.attrHandle[b.toLowerCase()],q=D&&ut.call(c.attrHandle,b.toLowerCase())?D(y,b,!ae):void 0;return q!==void 0?q:a.attributes||!ae?y.getAttribute(b):(q=y.getAttributeNode(b))&&q.specified?q.value:null},fe.escape=function(y){return(y+"").replace(Oi,qi)},fe.error=function(y){throw new Error("Syntax error, unrecognized expression: "+y)},fe.uniqueSort=function(y){var b,D=[],q=0,P=0;if(V=!a.detectDuplicates,M=!a.sortStable&&y.slice(0),y.sort(Oe),V){for(;b=y[P++];)b===y[P]&&(q=D.push(P));for(;q--;)y.splice(D[q],1)}return M=null,y},p=fe.getText=function(y){var b,D="",q=0,P=y.nodeType;if(P){if(P===1||P===9||P===11){if(typeof y.textContent=="string")return y.textContent;for(y=y.firstChild;y;y=y.nextSibling)D+=p(y)}else if(P===3||P===4)return y.nodeValue}else for(;b=y[q++];)D+=p(b);return D},(c=fe.selectors={cacheLength:50,createPseudo:qe,match:_t,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(y){return y[1]=y[1].replace(We,Re),y[3]=(y[3]||y[4]||y[5]||"").replace(We,Re),y[2]==="~="&&(y[3]=" "+y[3]+" "),y.slice(0,4)},CHILD:function(y){return y[1]=y[1].toLowerCase(),y[1].slice(0,3)==="nth"?(y[3]||fe.error(y[0]),y[4]=+(y[4]?y[5]+(y[6]||1):2*(y[3]==="even"||y[3]==="odd")),y[5]=+(y[7]+y[8]||y[3]==="odd")):y[3]&&fe.error(y[0]),y},PSEUDO:function(y){var b,D=!y[6]&&y[2];return _t.CHILD.test(y[0])?null:(y[3]?y[2]=y[4]||y[5]||"":D&&Fn.test(D)&&(b=v(D,!0))&&(b=D.indexOf(")",D.length-b)-D.length)&&(y[0]=y[0].slice(0,b),y[2]=D.slice(0,b)),y.slice(0,3))}},filter:{TAG:function(y){var b=y.replace(We,Re).toLowerCase();return y==="*"?function(){return!0}:function(D){return D.nodeName&&D.nodeName.toLowerCase()===b}},CLASS:function(y){var b=ye[y+" "];return b||(b=new RegExp("(^|"+he+")"+y+"("+he+"|$)"))&&ye(y,function(D){return b.test(typeof D.className=="string"&&D.className||typeof D.getAttribute!="undefined"&&D.getAttribute("class")||"")})},ATTR:function(y,b,D){return function(q){var P=fe.attr(q,y);return P==null?b==="!=":!b||(P+="",b==="="?P===D:b==="!="?P!==D:b==="^="?D&&P.indexOf(D)===0:b==="*="?D&&P.indexOf(D)>-1:b==="$="?D&&P.slice(-D.length)===D:b==="~="?(" "+P.replace(On," ")+" ").indexOf(D)>-1:b==="|="&&(P===D||P.slice(0,D.length+1)===D+"-"))}},CHILD:function(y,b,D,q,P){var B=y.slice(0,3)!=="nth",R=y.slice(-4)!=="last",Q=b==="of-type";return q===1&&P===0?function(Y){return!!Y.parentNode}:function(Y,ie,ee){var oe,le,me,ne,xe,Se,De=B!==R?"nextSibling":"previousSibling",ge=Y.parentNode,ft=Q&&Y.nodeName.toLowerCase(),pt=!ee&&!Q,Ie=!1;if(ge){if(B){for(;De;){for(ne=Y;ne=ne[De];)if(Q?ne.nodeName.toLowerCase()===ft:ne.nodeType===1)return!1;Se=De=y==="only"&&!Se&&"nextSibling"}return!0}if(Se=[R?ge.firstChild:ge.lastChild],R&&pt){for(Ie=(xe=(oe=(le=(me=(ne=ge)[ue]||(ne[ue]={}))[ne.uniqueID]||(me[ne.uniqueID]={}))[y]||[])[0]===Te&&oe[1])&&oe[2],ne=xe&&ge.childNodes[xe];ne=++xe&&ne&&ne[De]||(Ie=xe=0)||Se.pop();)if(ne.nodeType===1&&++Ie&&ne===Y){le[y]=[Te,xe,Ie];break}}else if(pt&&(Ie=xe=(oe=(le=(me=(ne=Y)[ue]||(ne[ue]={}))[ne.uniqueID]||(me[ne.uniqueID]={}))[y]||[])[0]===Te&&oe[1]),Ie===!1)for(;(ne=++xe&&ne&&ne[De]||(Ie=xe=0)||Se.pop())&&!((Q?ne.nodeName.toLowerCase()===ft:ne.nodeType===1)&&++Ie&&(pt&&((le=(me=ne[ue]||(ne[ue]={}))[ne.uniqueID]||(me[ne.uniqueID]={}))[y]=[Te,Ie]),ne===Y)););return(Ie-=P)===q||Ie%q==0&&Ie/q>=0}}},PSEUDO:function(y,b){var D,q=c.pseudos[y]||c.setFilters[y.toLowerCase()]||fe.error("unsupported pseudo: "+y);return q[ue]?q(b):q.length>1?(D=[y,y,"",b],c.setFilters.hasOwnProperty(y.toLowerCase())?qe(function(P,B){for(var R,Q=q(P,b),Y=Q.length;Y--;)P[R=Qe(P,Q[Y])]=!(B[R]=Q[Y])}):function(P){return q(P,0,D)}):q}},pseudos:{not:qe(function(y){var b=[],D=[],q=x(y.replace(Ct,"$1"));return q[ue]?qe(function(P,B,R,Q){for(var Y,ie=q(P,null,Q,[]),ee=P.length;ee--;)(Y=ie[ee])&&(P[ee]=!(B[ee]=Y))}):function(P,B,R){return b[0]=P,q(b,null,R,D),b[0]=null,!D.pop()}}),has:qe(function(y){return function(b){return fe(y,b).length>0}}),contains:qe(function(y){return y=y.replace(We,Re),function(b){return(b.textContent||b.innerText||p(b)).indexOf(y)>-1}}),lang:qe(function(y){return Hn.test(y||"")||fe.error("unsupported lang: "+y),y=y.replace(We,Re).toLowerCase(),function(b){var D;do if(D=ae?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(D=D.toLowerCase())===y||D.indexOf(y+"-")===0;while((b=b.parentNode)&&b.nodeType===1);return!1}}),target:function(y){var b=t.location&&t.location.hash;return b&&b.slice(1)===y.id},root:function(y){return y===K},focus:function(y){return y===z.activeElement&&(!z.hasFocus||z.hasFocus())&&!!(y.type||y.href||~y.tabIndex)},enabled:Fi(!1),disabled:Fi(!0),checked:function(y){var b=y.nodeName.toLowerCase();return b==="input"&&!!y.checked||b==="option"&&!!y.selected},selected:function(y){return y.parentNode&&y.parentNode.selectedIndex,y.selected===!0},empty:function(y){for(y=y.firstChild;y;y=y.nextSibling)if(y.nodeType<6)return!1;return!0},parent:function(y){return!c.pseudos.empty(y)},header:function(y){return Wn.test(y.nodeName)},input:function(y){return Bn.test(y.nodeName)},button:function(y){var b=y.nodeName.toLowerCase();return b==="input"&&y.type==="button"||b==="button"},text:function(y){var b;return y.nodeName.toLowerCase()==="input"&&y.type==="text"&&((b=y.getAttribute("type"))==null||b.toLowerCase()==="text")},first:Ye(function(){return[0]}),last:Ye(function(y,b){return[b-1]}),eq:Ye(function(y,b,D){return[D<0?D+b:D]}),even:Ye(function(y,b){for(var D=0;D<b;D+=2)y.push(D);return y}),odd:Ye(function(y,b){for(var D=1;D<b;D+=2)y.push(D);return y}),lt:Ye(function(y,b,D){for(var q=D<0?D+b:D;--q>=0;)y.push(q);return y}),gt:Ye(function(y,b,D){for(var q=D<0?D+b:D;++q<b;)y.push(q);return y})}}).pseudos.nth=c.pseudos.eq;for(o in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.pseudos[o]=Vn(o);for(o in{submit:!0,reset:!0})c.pseudos[o]=Gn(o);function Hi(){}Hi.prototype=c.filters=c.pseudos,c.setFilters=new Hi,v=fe.tokenize=function(y,b){var D,q,P,B,R,Q,Y,ie=dt[y+" "];if(ie)return b?0:ie.slice(0);for(R=y,Q=[],Y=c.preFilter;R;){D&&!(q=qn.exec(R))||(q&&(R=R.slice(q[0].length)||R),Q.push(P=[])),D=!1,(q=zn.exec(R))&&(D=q.shift(),P.push({value:D,type:q[0].replace(Ct," ")}),R=R.slice(D.length));for(B in c.filter)!(q=_t[B].exec(R))||Y[B]&&!(q=Y[B](q))||(D=q.shift(),P.push({value:D,type:B,matches:q}),R=R.slice(D.length));if(!D)break}return b?R.length:R?fe.error(y):dt(y,Q).slice(0)};function kt(y){for(var b=0,D=y.length,q="";b<D;b++)q+=y[b].value;return q}function Et(y,b,D){var q=b.dir,P=b.next,B=P||q,R=D&&B==="parentNode",Q=de++;return b.first?function(Y,ie,ee){for(;Y=Y[q];)if(Y.nodeType===1||R)return y(Y,ie,ee);return!1}:function(Y,ie,ee){var oe,le,me,ne=[Te,Q];if(ee){for(;Y=Y[q];)if((Y.nodeType===1||R)&&y(Y,ie,ee))return!0}else for(;Y=Y[q];)if(Y.nodeType===1||R)if(me=Y[ue]||(Y[ue]={}),le=me[Y.uniqueID]||(me[Y.uniqueID]={}),P&&P===Y.nodeName.toLowerCase())Y=Y[q]||Y;else{if((oe=le[B])&&oe[0]===Te&&oe[1]===Q)return ne[2]=oe[2];if(le[B]=ne,ne[2]=y(Y,ie,ee))return!0}return!1}}function Xt(y){return y.length>1?function(b,D,q){for(var P=y.length;P--;)if(!y[P](b,D,q))return!1;return!0}:y[0]}function Qn(y,b,D){for(var q=0,P=b.length;q<P;q++)fe(y,b[q],D);return D}function Tt(y,b,D,q,P){for(var B,R=[],Q=0,Y=y.length,ie=b!=null;Q<Y;Q++)(B=y[Q])&&(D&&!D(B,q,P)||(R.push(B),ie&&b.push(Q)));return R}function Yt(y,b,D,q,P,B){return q&&!q[ue]&&(q=Yt(q)),P&&!P[ue]&&(P=Yt(P,B)),qe(function(R,Q,Y,ie){var ee,oe,le,me=[],ne=[],xe=Q.length,Se=R||Qn(b||"*",Y.nodeType?[Y]:Y,[]),De=!y||!R&&b?Se:Tt(Se,me,y,Y,ie),ge=D?P||(R?y:xe||q)?[]:Q:De;if(D&&D(De,ge,Y,ie),q)for(ee=Tt(ge,ne),q(ee,[],Y,ie),oe=ee.length;oe--;)(le=ee[oe])&&(ge[ne[oe]]=!(De[ne[oe]]=le));if(R){if(P||y){if(P){for(ee=[],oe=ge.length;oe--;)(le=ge[oe])&&ee.push(De[oe]=le);P(null,ge=[],ee,ie)}for(oe=ge.length;oe--;)(le=ge[oe])&&(ee=P?Qe(R,le):me[oe])>-1&&(R[ee]=!(Q[ee]=le))}}else ge=Tt(ge===Q?ge.splice(xe,ge.length):ge),P?P(null,Q,ge,ie):$e.apply(Q,ge)})}function Jt(y){for(var b,D,q,P=y.length,B=c.relative[y[0].type],R=B||c.relative[" "],Q=B?1:0,Y=Et(function(oe){return oe===b},R,!0),ie=Et(function(oe){return Qe(b,oe)>-1},R,!0),ee=[function(oe,le,me){var ne=!B&&(me||le!==I)||((b=le).nodeType?Y(oe,le,me):ie(oe,le,me));return b=null,ne}];Q<P;Q++)if(D=c.relative[y[Q].type])ee=[Et(Xt(ee),D)];else{if((D=c.filter[y[Q].type].apply(null,y[Q].matches))[ue]){for(q=++Q;q<P&&!c.relative[y[q].type];q++);return Yt(Q>1&&Xt(ee),Q>1&&kt(y.slice(0,Q-1).concat({value:y[Q-2].type===" "?"*":""})).replace(Ct,"$1"),D,Q<q&&Jt(y.slice(Q,q)),q<P&&Jt(y=y.slice(q)),q<P&&kt(y))}ee.push(D)}return Xt(ee)}function Xn(y,b){var D=b.length>0,q=y.length>0,P=function(B,R,Q,Y,ie){var ee,oe,le,me=0,ne="0",xe=B&&[],Se=[],De=I,ge=B||q&&c.find.TAG("*",ie),ft=Te+=De==null?1:Math.random()||.1,pt=ge.length;for(ie&&(I=R===z||R||ie);ne!==pt&&(ee=ge[ne])!=null;ne++){if(q&&ee){for(oe=0,R||ee.ownerDocument===z||(N(ee),Q=!ae);le=y[oe++];)if(le(ee,R||z,Q)){Y.push(ee);break}ie&&(Te=ft)}D&&((ee=!le&&ee)&&me--,B&&xe.push(ee))}if(me+=ne,D&&ne!==me){for(oe=0;le=b[oe++];)le(xe,Se,R,Q);if(B){if(me>0)for(;ne--;)xe[ne]||Se[ne]||(Se[ne]=Ue.call(Y));Se=Tt(Se)}$e.apply(Y,Se),ie&&!B&&Se.length>0&&me+b.length>1&&fe.uniqueSort(Y)}return ie&&(Te=ft,I=De),xe};return D?qe(P):P}return x=fe.compile=function(y,b){var D,q=[],P=[],B=it[y+" "];if(!B){for(b||(b=v(y)),D=b.length;D--;)(B=Jt(b[D]))[ue]?q.push(B):P.push(B);(B=it(y,Xn(P,q))).selector=y}return B},k=fe.select=function(y,b,D,q){var P,B,R,Q,Y,ie=typeof y=="function"&&y,ee=!q&&v(y=ie.selector||y);if(D=D||[],ee.length===1){if((B=ee[0]=ee[0].slice(0)).length>2&&(R=B[0]).type==="ID"&&b.nodeType===9&&ae&&c.relative[B[1].type]){if(!(b=(c.find.ID(R.matches[0].replace(We,Re),b)||[])[0]))return D;ie&&(b=b.parentNode),y=y.slice(B.shift().value.length)}for(P=_t.needsContext.test(y)?0:B.length;P--&&(R=B[P],!c.relative[Q=R.type]);)if((Y=c.find[Q])&&(q=Y(R.matches[0].replace(We,Re),Ut.test(B[0].type)&&Qt(b.parentNode)||b))){if(B.splice(P,1),!(y=q.length&&kt(B)))return $e.apply(D,q),D;break}}return(ie||x(y,ee))(q,b,!ae,D,!b||Ut.test(y)&&Qt(b.parentNode)||b),D},a.sortStable=ue.split("").sort(Oe).join("")===ue,a.detectDuplicates=!!V,N(),a.sortDetached=Fe(function(y){return 1&y.compareDocumentPosition(z.createElement("fieldset"))}),Fe(function(y){return y.innerHTML="<a href='#'></a>",y.firstChild.getAttribute("href")==="#"})||Gt("type|href|height|width",function(y,b,D){if(!D)return y.getAttribute(b,b.toLowerCase()==="type"?1:2)}),a.attributes&&Fe(function(y){return y.innerHTML="<input/>",y.firstChild.setAttribute("value",""),y.firstChild.getAttribute("value")===""})||Gt("value",function(y,b,D){if(!D&&y.nodeName.toLowerCase()==="input")return y.defaultValue}),Fe(function(y){return y.getAttribute("disabled")==null})||Gt(Wt,function(y,b,D){var q;if(!D)return y[b]===!0?b.toLowerCase():(q=y.getAttributeNode(b))&&q.specified?q.value:null}),fe}(n);u.find=H,u.expr=H.selectors,u.expr[":"]=u.expr.pseudos,u.uniqueSort=u.unique=H.uniqueSort,u.text=H.getText,u.isXMLDoc=H.isXML,u.contains=H.contains,u.escapeSelector=H.escape;var W=function(t,o,a){for(var c=[],p=a!==void 0;(t=t[o])&&t.nodeType!==9;)if(t.nodeType===1){if(p&&u(t).is(a))break;c.push(t)}return c},Z=function(t,o){for(var a=[];t;t=t.nextSibling)t.nodeType===1&&t!==o&&a.push(t);return a},J=u.expr.match.needsContext;function X(t,o){return t.nodeName&&t.nodeName.toLowerCase()===o.toLowerCase()}var pe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ce(t,o,a){return L(o)?u.grep(t,function(c,p){return!!o.call(c,p,c)!==a}):o.nodeType?u.grep(t,function(c){return c===o!==a}):typeof o!="string"?u.grep(t,function(c){return w.call(o,c)>-1!==a}):u.filter(o,t,a)}u.filter=function(t,o,a){var c=o[0];return a&&(t=":not("+t+")"),o.length===1&&c.nodeType===1?u.find.matchesSelector(c,t)?[c]:[]:u.find.matches(t,u.grep(o,function(p){return p.nodeType===1}))},u.fn.extend({find:function(t){var o,a,c=this.length,p=this;if(typeof t!="string")return this.pushStack(u(t).filter(function(){for(o=0;o<c;o++)if(u.contains(p[o],this))return!0}));for(a=this.pushStack([]),o=0;o<c;o++)u.find(t,p[o],a);return c>1?u.uniqueSort(a):a},filter:function(t){return this.pushStack(Ce(this,t||[],!1))},not:function(t){return this.pushStack(Ce(this,t||[],!0))},is:function(t){return!!Ce(this,typeof t=="string"&&J.test(t)?u(t):t||[],!1).length}});var Le,At=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(u.fn.init=function(t,o,a){var c,p;if(!t)return this;if(a=a||Le,typeof t=="string"){if(!(c=t[0]==="<"&&t[t.length-1]===">"&&t.length>=3?[null,t,null]:At.exec(t))||!c[1]&&o)return!o||o.jquery?(o||a).find(t):this.constructor(o).find(t);if(c[1]){if(o=o instanceof u?o[0]:o,u.merge(this,u.parseHTML(c[1],o&&o.nodeType?o.ownerDocument||o:h,!0)),pe.test(c[1])&&u.isPlainObject(o))for(c in o)L(this[c])?this[c](o[c]):this.attr(c,o[c]);return this}return(p=h.getElementById(c[2]))&&(this[0]=p,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):L(t)?a.ready!==void 0?a.ready(t):t(u):u.makeArray(t,this)}).prototype=u.fn,Le=u(h);var Bi=/^(?:parents|prev(?:Until|All))/,Wi={children:!0,contents:!0,next:!0,prev:!0};u.fn.extend({has:function(t){var o=u(t,this),a=o.length;return this.filter(function(){for(var c=0;c<a;c++)if(u.contains(this,o[c]))return!0})},closest:function(t,o){var a,c=0,p=this.length,g=[],v=typeof t!="string"&&u(t);if(!J.test(t)){for(;c<p;c++)for(a=this[c];a&&a!==o;a=a.parentNode)if(a.nodeType<11&&(v?v.index(a)>-1:a.nodeType===1&&u.find.matchesSelector(a,t))){g.push(a);break}}return this.pushStack(g.length>1?u.uniqueSort(g):g)},index:function(t){return t?typeof t=="string"?w.call(u(t),this[0]):w.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,o){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(t,o))))},addBack:function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}});function Zt(t,o){for(;(t=t[o])&&t.nodeType!==1;);return t}u.each({parent:function(t){var o=t.parentNode;return o&&o.nodeType!==11?o:null},parents:function(t){return W(t,"parentNode")},parentsUntil:function(t,o,a){return W(t,"parentNode",a)},next:function(t){return Zt(t,"nextSibling")},prev:function(t){return Zt(t,"previousSibling")},nextAll:function(t){return W(t,"nextSibling")},prevAll:function(t){return W(t,"previousSibling")},nextUntil:function(t,o,a){return W(t,"nextSibling",a)},prevUntil:function(t,o,a){return W(t,"previousSibling",a)},siblings:function(t){return Z((t.parentNode||{}).firstChild,t)},children:function(t){return Z(t.firstChild)},contents:function(t){return X(t,"iframe")?t.contentDocument:(X(t,"template")&&(t=t.content||t),u.merge([],t.childNodes))}},function(t,o){u.fn[t]=function(a,c){var p=u.map(this,o,a);return t.slice(-5)!=="Until"&&(c=a),c&&typeof c=="string"&&(p=u.filter(c,p)),this.length>1&&(Wi[t]||u.uniqueSort(p),Bi.test(t)&&p.reverse()),this.pushStack(p)}});var ze=/[^\x20\t\r\n\f]+/g;function Ri(t){var o={};return u.each(t.match(ze)||[],function(a,c){o[c]=!0}),o}u.Callbacks=function(t){t=typeof t=="string"?Ri(t):u.extend({},t);var o,a,c,p,g=[],v=[],x=-1,k=function(){for(p=p||t.once,c=o=!0;v.length;x=-1)for(a=v.shift();++x<g.length;)g[x].apply(a[0],a[1])===!1&&t.stopOnFalse&&(x=g.length,a=!1);t.memory||(a=!1),o=!1,p&&(g=a?[]:"")},I={add:function(){return g&&(a&&!o&&(x=g.length-1,v.push(a)),function M(V){u.each(V,function(N,z){L(z)?t.unique&&I.has(z)||g.push(z):z&&z.length&&U(z)!=="string"&&M(z)})}(arguments),a&&!o&&k()),this},remove:function(){return u.each(arguments,function(M,V){for(var N;(N=u.inArray(V,g,N))>-1;)g.splice(N,1),N<=x&&x--}),this},has:function(M){return M?u.inArray(M,g)>-1:g.length>0},empty:function(){return g&&(g=[]),this},disable:function(){return p=v=[],g=a="",this},disabled:function(){return!g},lock:function(){return p=v=[],a||o||(g=a=""),this},locked:function(){return!!p},fireWith:function(M,V){return p||(V=[M,(V=V||[]).slice?V.slice():V],v.push(V),o||k()),this},fire:function(){return I.fireWith(this,arguments),this},fired:function(){return!!c}};return I};function Je(t){return t}function mt(t){throw t}function Kt(t,o,a,c){var p;try{t&&L(p=t.promise)?p.call(t).done(o).fail(a):t&&L(p=t.then)?p.call(t,o,a):o.apply(void 0,[t].slice(c))}catch(g){a.apply(void 0,[g])}}u.extend({Deferred:function(t){var o=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],a="pending",c={state:function(){return a},always:function(){return p.done(arguments).fail(arguments),this},catch:function(g){return c.then(null,g)},pipe:function(){var g=arguments;return u.Deferred(function(v){u.each(o,function(x,k){var I=L(g[k[4]])&&g[k[4]];p[k[1]](function(){var M=I&&I.apply(this,arguments);M&&L(M.promise)?M.promise().progress(v.notify).done(v.resolve).fail(v.reject):v[k[0]+"With"](this,I?[M]:arguments)})}),g=null}).promise()},then:function(g,v,x){var k=0;function I(M,V,N,z){return function(){var K=this,ae=arguments,te=function(){var be,Ae;if(!(M<k)){if((be=N.apply(K,ae))===V.promise())throw new TypeError("Thenable self-resolution");Ae=be&&(typeof be=="object"||typeof be=="function")&&be.then,L(Ae)?z?Ae.call(be,I(k,V,Je,z),I(k,V,mt,z)):(k++,Ae.call(be,I(k,V,Je,z),I(k,V,mt,z),I(k,V,Je,V.notifyWith))):(N!==Je&&(K=void 0,ae=[be]),(z||V.resolveWith)(K,ae))}},we=z?te:function(){try{te()}catch(be){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(be,we.stackTrace),M+1>=k&&(N!==mt&&(K=void 0,ae=[be]),V.rejectWith(K,ae))}};M?we():(u.Deferred.getStackHook&&(we.stackTrace=u.Deferred.getStackHook()),n.setTimeout(we))}}return u.Deferred(function(M){o[0][3].add(I(0,M,L(x)?x:Je,M.notifyWith)),o[1][3].add(I(0,M,L(g)?g:Je)),o[2][3].add(I(0,M,L(v)?v:mt))}).promise()},promise:function(g){return g!=null?u.extend(g,c):c}},p={};return u.each(o,function(g,v){var x=v[2],k=v[5];c[v[1]]=x.add,k&&x.add(function(){a=k},o[3-g][2].disable,o[3-g][3].disable,o[0][2].lock,o[0][3].lock),x.add(v[3].fire),p[v[0]]=function(){return p[v[0]+"With"](this===p?void 0:this,arguments),this},p[v[0]+"With"]=x.fireWith}),c.promise(p),t&&t.call(p,p),p},when:function(t){var o=arguments.length,a=o,c=Array(a),p=f.call(arguments),g=u.Deferred(),v=function(x){return function(k){c[x]=this,p[x]=arguments.length>1?f.call(arguments):k,--o||g.resolveWith(c,p)}};if(o<=1&&(Kt(t,g.done(v(a)).resolve,g.reject,!o),g.state()==="pending"||L(p[a]&&p[a].then)))return g.then();for(;a--;)Kt(p[a],v(a),g.reject);return g.promise()}});var Ui=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(t,o){n.console&&n.console.warn&&t&&Ui.test(t.name)&&n.console.warn("jQuery.Deferred exception: "+t.message,t.stack,o)},u.readyException=function(t){n.setTimeout(function(){throw t})};var Dt=u.Deferred();u.fn.ready=function(t){return Dt.then(t).catch(function(o){u.readyException(o)}),this},u.extend({isReady:!1,readyWait:1,ready:function(t){(t===!0?--u.readyWait:u.isReady)||(u.isReady=!0,t!==!0&&--u.readyWait>0||Dt.resolveWith(h,[u]))}}),u.ready.then=Dt.then;function gt(){h.removeEventListener("DOMContentLoaded",gt),n.removeEventListener("load",gt),u.ready()}h.readyState==="complete"||h.readyState!=="loading"&&!h.documentElement.doScroll?n.setTimeout(u.ready):(h.addEventListener("DOMContentLoaded",gt),n.addEventListener("load",gt));var He=function(t,o,a,c,p,g,v){var x=0,k=t.length,I=a==null;if(U(a)==="object"){p=!0;for(x in a)He(t,o,x,a[x],!0,g,v)}else if(c!==void 0&&(p=!0,L(c)||(v=!0),I&&(v?(o.call(t,c),o=null):(I=o,o=function(M,V,N){return I.call(u(M),N)})),o))for(;x<k;x++)o(t[x],a,v?c:c.call(t[x],x,o(t[x],a)));return p?t:I?o.call(t):k?o(t[0],a):g},Vi=/^-ms-/,Gi=/-([a-z])/g;function Qi(t,o){return o.toUpperCase()}function Me(t){return t.replace(Vi,"ms-").replace(Gi,Qi)}var vt=function(t){return t.nodeType===1||t.nodeType===9||!+t.nodeType};function ot(){this.expando=u.expando+ot.uid++}ot.uid=1,ot.prototype={cache:function(t){var o=t[this.expando];return o||(o={},vt(t)&&(t.nodeType?t[this.expando]=o:Object.defineProperty(t,this.expando,{value:o,configurable:!0}))),o},set:function(t,o,a){var c,p=this.cache(t);if(typeof o=="string")p[Me(o)]=a;else for(c in o)p[Me(c)]=o[c];return p},get:function(t,o){return o===void 0?this.cache(t):t[this.expando]&&t[this.expando][Me(o)]},access:function(t,o,a){return o===void 0||o&&typeof o=="string"&&a===void 0?this.get(t,o):(this.set(t,o,a),a!==void 0?a:o)},remove:function(t,o){var a,c=t[this.expando];if(c!==void 0){if(o!==void 0)for(a=(o=Array.isArray(o)?o.map(Me):(o=Me(o))in c?[o]:o.match(ze)||[]).length;a--;)delete c[o[a]];(o===void 0||u.isEmptyObject(c))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var o=t[this.expando];return o!==void 0&&!u.isEmptyObject(o)}};var se=new ot,_e=new ot,Xi=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Yi=/[A-Z]/g;function Ji(t){return t==="true"||t!=="false"&&(t==="null"?null:t===+t+""?+t:Xi.test(t)?JSON.parse(t):t)}function ei(t,o,a){var c;if(a===void 0&&t.nodeType===1)if(c="data-"+o.replace(Yi,"-$&").toLowerCase(),typeof(a=t.getAttribute(c))=="string"){try{a=Ji(a)}catch{}_e.set(t,o,a)}else a=void 0;return a}u.extend({hasData:function(t){return _e.hasData(t)||se.hasData(t)},data:function(t,o,a){return _e.access(t,o,a)},removeData:function(t,o){_e.remove(t,o)},_data:function(t,o,a){return se.access(t,o,a)},_removeData:function(t,o){se.remove(t,o)}}),u.fn.extend({data:function(t,o){var a,c,p,g=this[0],v=g&&g.attributes;if(t===void 0){if(this.length&&(p=_e.get(g),g.nodeType===1&&!se.get(g,"hasDataAttrs"))){for(a=v.length;a--;)v[a]&&(c=v[a].name).indexOf("data-")===0&&(c=Me(c.slice(5)),ei(g,c,p[c]));se.set(g,"hasDataAttrs",!0)}return p}return typeof t=="object"?this.each(function(){_e.set(this,t)}):He(this,function(x){var k;if(g&&x===void 0){if((k=_e.get(g,t))!==void 0||(k=ei(g,t))!==void 0)return k}else this.each(function(){_e.set(this,t,x)})},null,o,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){_e.remove(this,t)})}}),u.extend({queue:function(t,o,a){var c;if(t)return o=(o||"fx")+"queue",c=se.get(t,o),a&&(!c||Array.isArray(a)?c=se.access(t,o,u.makeArray(a)):c.push(a)),c||[]},dequeue:function(t,o){o=o||"fx";var a=u.queue(t,o),c=a.length,p=a.shift(),g=u._queueHooks(t,o),v=function(){u.dequeue(t,o)};p==="inprogress"&&(p=a.shift(),c--),p&&(o==="fx"&&a.unshift("inprogress"),delete g.stop,p.call(t,v,g)),!c&&g&&g.empty.fire()},_queueHooks:function(t,o){var a=o+"queueHooks";return se.get(t,a)||se.access(t,a,{empty:u.Callbacks("once memory").add(function(){se.remove(t,[o+"queue",a])})})}}),u.fn.extend({queue:function(t,o){var a=2;return typeof t!="string"&&(o=t,t="fx",a--),arguments.length<a?u.queue(this[0],t):o===void 0?this:this.each(function(){var c=u.queue(this,t,o);u._queueHooks(this,t),t==="fx"&&c[0]!=="inprogress"&&u.dequeue(this,t)})},dequeue:function(t){return this.each(function(){u.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,o){var a,c=1,p=u.Deferred(),g=this,v=this.length,x=function(){--c||p.resolveWith(g,[g])};for(typeof t!="string"&&(o=t,t=void 0),t=t||"fx";v--;)(a=se.get(g[v],t+"queueHooks"))&&a.empty&&(c++,a.empty.add(x));return x(),p.promise(o)}});var ti=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,rt=new RegExp("^(?:([+-])=|)("+ti+")([a-z%]*)$","i"),Be=["Top","Right","Bottom","Left"],yt=function(t,o){return(t=o||t).style.display==="none"||t.style.display===""&&u.contains(t.ownerDocument,t)&&u.css(t,"display")==="none"},ii=function(t,o,a,c){var p,g,v={};for(g in o)v[g]=t.style[g],t.style[g]=o[g];p=a.apply(t,c||[]);for(g in o)t.style[g]=v[g];return p};function ni(t,o,a,c){var p,g,v=20,x=c?function(){return c.cur()}:function(){return u.css(t,o,"")},k=x(),I=a&&a[3]||(u.cssNumber[o]?"":"px"),M=(u.cssNumber[o]||I!=="px"&&+k)&&rt.exec(u.css(t,o));if(M&&M[3]!==I){for(k/=2,I=I||M[3],M=+k||1;v--;)u.style(t,o,M+I),(1-g)*(1-(g=x()/k||.5))<=0&&(v=0),M/=g;M*=2,u.style(t,o,M+I),a=a||[]}return a&&(M=+M||+k||0,p=a[1]?M+(a[1]+1)*a[2]:+a[2],c&&(c.unit=I,c.start=M,c.end=p)),p}var oi={};function Zi(t){var o,a=t.ownerDocument,c=t.nodeName,p=oi[c];return p||(o=a.body.appendChild(a.createElement(c)),p=u.css(o,"display"),o.parentNode.removeChild(o),p==="none"&&(p="block"),oi[c]=p,p)}function Ze(t,o){for(var a,c,p=[],g=0,v=t.length;g<v;g++)(c=t[g]).style&&(a=c.style.display,o?(a==="none"&&(p[g]=se.get(c,"display")||null,p[g]||(c.style.display="")),c.style.display===""&&yt(c)&&(p[g]=Zi(c))):a!=="none"&&(p[g]="none",se.set(c,"display",a)));for(g=0;g<v;g++)p[g]!=null&&(t[g].style.display=p[g]);return t}u.fn.extend({show:function(){return Ze(this,!0)},hide:function(){return Ze(this)},toggle:function(t){return typeof t=="boolean"?t?this.show():this.hide():this.each(function(){yt(this)?u(this).show():u(this).hide()})}});var ri=/^(?:checkbox|radio)$/i,ai=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,si=/^$|^module$|\/(?:java|ecma)script/i,je={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};je.optgroup=je.option,je.tbody=je.tfoot=je.colgroup=je.caption=je.thead,je.th=je.td;function ke(t,o){var a;return a=typeof t.getElementsByTagName!="undefined"?t.getElementsByTagName(o||"*"):typeof t.querySelectorAll!="undefined"?t.querySelectorAll(o||"*"):[],o===void 0||o&&X(t,o)?u.merge([t],a):a}function jt(t,o){for(var a=0,c=t.length;a<c;a++)se.set(t[a],"globalEval",!o||se.get(o[a],"globalEval"))}var Ki=/<|&#?\w+;/;function li(t,o,a,c,p){for(var g,v,x,k,I,M,V=o.createDocumentFragment(),N=[],z=0,K=t.length;z<K;z++)if((g=t[z])||g===0)if(U(g)==="object")u.merge(N,g.nodeType?[g]:g);else if(Ki.test(g)){for(v=v||V.appendChild(o.createElement("div")),x=(ai.exec(g)||["",""])[1].toLowerCase(),k=je[x]||je._default,v.innerHTML=k[1]+u.htmlPrefilter(g)+k[2],M=k[0];M--;)v=v.lastChild;u.merge(N,v.childNodes),(v=V.firstChild).textContent=""}else N.push(o.createTextNode(g));for(V.textContent="",z=0;g=N[z++];)if(c&&u.inArray(g,c)>-1)p&&p.push(g);else if(I=u.contains(g.ownerDocument,g),v=ke(V.appendChild(g),"script"),I&&jt(v),a)for(M=0;g=v[M++];)si.test(g.type||"")&&a.push(g);return V}(function(){var t=h.createDocumentFragment().appendChild(h.createElement("div")),o=h.createElement("input");o.setAttribute("type","radio"),o.setAttribute("checked","checked"),o.setAttribute("name","t"),t.appendChild(o),j.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",j.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue})();var wt=h.documentElement,en=/^key/,tn=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ci=/^([^.]*)(?:\.(.+)|)/;function bt(){return!0}function Ke(){return!1}function di(){try{return h.activeElement}catch{}}function Pt(t,o,a,c,p,g){var v,x;if(typeof o=="object"){typeof a!="string"&&(c=c||a,a=void 0);for(x in o)Pt(t,x,a,c,o[x],g);return t}if(c==null&&p==null?(p=a,c=a=void 0):p==null&&(typeof a=="string"?(p=c,c=void 0):(p=c,c=a,a=void 0)),p===!1)p=Ke;else if(!p)return t;return g===1&&(v=p,(p=function(k){return u().off(k),v.apply(this,arguments)}).guid=v.guid||(v.guid=u.guid++)),t.each(function(){u.event.add(this,o,p,c,a)})}u.event={global:{},add:function(t,o,a,c,p){var g,v,x,k,I,M,V,N,z,K,ae,te=se.get(t);if(te)for(a.handler&&(a=(g=a).handler,p=g.selector),p&&u.find.matchesSelector(wt,p),a.guid||(a.guid=u.guid++),(k=te.events)||(k=te.events={}),(v=te.handle)||(v=te.handle=function(we){return typeof u!="undefined"&&u.event.triggered!==we.type?u.event.dispatch.apply(t,arguments):void 0}),I=(o=(o||"").match(ze)||[""]).length;I--;)z=ae=(x=ci.exec(o[I])||[])[1],K=(x[2]||"").split(".").sort(),z&&(V=u.event.special[z]||{},z=(p?V.delegateType:V.bindType)||z,V=u.event.special[z]||{},M=u.extend({type:z,origType:ae,data:c,handler:a,guid:a.guid,selector:p,needsContext:p&&u.expr.match.needsContext.test(p),namespace:K.join(".")},g),(N=k[z])||((N=k[z]=[]).delegateCount=0,V.setup&&V.setup.call(t,c,K,v)!==!1||t.addEventListener&&t.addEventListener(z,v)),V.add&&(V.add.call(t,M),M.handler.guid||(M.handler.guid=a.guid)),p?N.splice(N.delegateCount++,0,M):N.push(M),u.event.global[z]=!0)},remove:function(t,o,a,c,p){var g,v,x,k,I,M,V,N,z,K,ae,te=se.hasData(t)&&se.get(t);if(te&&(k=te.events)){for(I=(o=(o||"").match(ze)||[""]).length;I--;)if(x=ci.exec(o[I])||[],z=ae=x[1],K=(x[2]||"").split(".").sort(),z){for(V=u.event.special[z]||{},N=k[z=(c?V.delegateType:V.bindType)||z]||[],x=x[2]&&new RegExp("(^|\\.)"+K.join("\\.(?:.*\\.|)")+"(\\.|$)"),v=g=N.length;g--;)M=N[g],!p&&ae!==M.origType||a&&a.guid!==M.guid||x&&!x.test(M.namespace)||c&&c!==M.selector&&(c!=="**"||!M.selector)||(N.splice(g,1),M.selector&&N.delegateCount--,V.remove&&V.remove.call(t,M));v&&!N.length&&(V.teardown&&V.teardown.call(t,K,te.handle)!==!1||u.removeEvent(t,z,te.handle),delete k[z])}else for(z in k)u.event.remove(t,z+o[I],a,c,!0);u.isEmptyObject(k)&&se.remove(t,"handle events")}},dispatch:function(t){var o=u.event.fix(t),a,c,p,g,v,x,k=new Array(arguments.length),I=(se.get(this,"events")||{})[o.type]||[],M=u.event.special[o.type]||{};for(k[0]=o,a=1;a<arguments.length;a++)k[a]=arguments[a];if(o.delegateTarget=this,!M.preDispatch||M.preDispatch.call(this,o)!==!1){for(x=u.event.handlers.call(this,o,I),a=0;(g=x[a++])&&!o.isPropagationStopped();)for(o.currentTarget=g.elem,c=0;(v=g.handlers[c++])&&!o.isImmediatePropagationStopped();)o.rnamespace&&!o.rnamespace.test(v.namespace)||(o.handleObj=v,o.data=v.data,(p=((u.event.special[v.origType]||{}).handle||v.handler).apply(g.elem,k))!==void 0&&(o.result=p)===!1&&(o.preventDefault(),o.stopPropagation()));return M.postDispatch&&M.postDispatch.call(this,o),o.result}},handlers:function(t,o){var a,c,p,g,v,x=[],k=o.delegateCount,I=t.target;if(k&&I.nodeType&&!(t.type==="click"&&t.button>=1)){for(;I!==this;I=I.parentNode||this)if(I.nodeType===1&&(t.type!=="click"||I.disabled!==!0)){for(g=[],v={},a=0;a<k;a++)v[p=(c=o[a]).selector+" "]===void 0&&(v[p]=c.needsContext?u(p,this).index(I)>-1:u.find(p,this,null,[I]).length),v[p]&&g.push(c);g.length&&x.push({elem:I,handlers:g})}}return I=this,k<o.length&&x.push({elem:I,handlers:o.slice(k)}),x},addProp:function(t,o){Object.defineProperty(u.Event.prototype,t,{enumerable:!0,configurable:!0,get:L(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(a){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:a})}})},fix:function(t){return t[u.expando]?t:new u.Event(t)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==di()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===di()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&X(this,"input"))return this.click(),!1},_default:function(t){return X(t.target,"a")}},beforeunload:{postDispatch:function(t){t.result!==void 0&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},u.removeEvent=function(t,o,a){t.removeEventListener&&t.removeEventListener(o,a)},u.Event=function(t,o){if(!(this instanceof u.Event))return new u.Event(t,o);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.defaultPrevented===void 0&&t.returnValue===!1?bt:Ke,this.target=t.target&&t.target.nodeType===3?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,o&&u.extend(this,o),this.timeStamp=t&&t.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:Ke,isPropagationStopped:Ke,isImmediatePropagationStopped:Ke,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=bt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=bt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=bt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var o=t.button;return t.which==null&&en.test(t.type)?t.charCode!=null?t.charCode:t.keyCode:!t.which&&o!==void 0&&tn.test(t.type)?1&o?1:2&o?3:4&o?2:0:t.which}},u.event.addProp),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,o){u.event.special[t]={delegateType:o,bindType:o,handle:function(a){var c,p=this,g=a.relatedTarget,v=a.handleObj;return g&&(g===p||u.contains(p,g))||(a.type=v.origType,c=v.handler.apply(this,arguments),a.type=o),c}}}),u.fn.extend({on:function(t,o,a,c){return Pt(this,t,o,a,c)},one:function(t,o,a,c){return Pt(this,t,o,a,c,1)},off:function(t,o,a){var c,p;if(t&&t.preventDefault&&t.handleObj)return c=t.handleObj,u(t.delegateTarget).off(c.namespace?c.origType+"."+c.namespace:c.origType,c.selector,c.handler),this;if(typeof t=="object"){for(p in t)this.off(p,o,t[p]);return this}return o!==!1&&typeof o!="function"||(a=o,o=void 0),a===!1&&(a=Ke),this.each(function(){u.event.remove(this,t,a,o)})}});var nn=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,on=/<script|<style|<link/i,rn=/checked\s*(?:[^=]|=\s*.checked.)/i,an=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function ui(t,o){return X(t,"table")&&X(o.nodeType!==11?o:o.firstChild,"tr")&&u(t).children("tbody")[0]||t}function sn(t){return t.type=(t.getAttribute("type")!==null)+"/"+t.type,t}function ln(t){return(t.type||"").slice(0,5)==="true/"?t.type=t.type.slice(5):t.removeAttribute("type"),t}function hi(t,o){var a,c,p,g,v,x,k,I;if(o.nodeType===1){if(se.hasData(t)&&(g=se.access(t),v=se.set(o,g),I=g.events)){delete v.handle,v.events={};for(p in I)for(a=0,c=I[p].length;a<c;a++)u.event.add(o,p,I[p][a])}_e.hasData(t)&&(x=_e.access(t),k=u.extend({},x),_e.set(o,k))}}function cn(t,o){var a=o.nodeName.toLowerCase();a==="input"&&ri.test(t.type)?o.checked=t.checked:a!=="input"&&a!=="textarea"||(o.defaultValue=t.defaultValue)}function et(t,o,a,c){o=d.apply([],o);var p,g,v,x,k,I,M=0,V=t.length,N=V-1,z=o[0],K=L(z);if(K||V>1&&typeof z=="string"&&!j.checkClone&&rn.test(z))return t.each(function(ae){var te=t.eq(ae);K&&(o[0]=z.call(this,ae,te.html())),et(te,o,a,c)});if(V&&(p=li(o,t[0].ownerDocument,!1,t,c),g=p.firstChild,p.childNodes.length===1&&(p=g),g||c)){for(x=(v=u.map(ke(p,"script"),sn)).length;M<V;M++)k=p,M!==N&&(k=u.clone(k,!0,!0),x&&u.merge(v,ke(k,"script"))),a.call(t[M],k,M);if(x)for(I=v[v.length-1].ownerDocument,u.map(v,ln),M=0;M<x;M++)k=v[M],si.test(k.type||"")&&!se.access(k,"globalEval")&&u.contains(I,k)&&(k.src&&(k.type||"").toLowerCase()!=="module"?u._evalUrl&&u._evalUrl(k.src):F(k.textContent.replace(an,""),I,k))}return t}function fi(t,o,a){for(var c,p=o?u.filter(o,t):t,g=0;(c=p[g])!=null;g++)a||c.nodeType!==1||u.cleanData(ke(c)),c.parentNode&&(a&&u.contains(c.ownerDocument,c)&&jt(ke(c,"script")),c.parentNode.removeChild(c));return t}u.extend({htmlPrefilter:function(t){return t.replace(nn,"<$1></$2>")},clone:function(t,o,a){var c,p,g,v,x=t.cloneNode(!0),k=u.contains(t.ownerDocument,t);if(!(j.noCloneChecked||t.nodeType!==1&&t.nodeType!==11||u.isXMLDoc(t)))for(v=ke(x),c=0,p=(g=ke(t)).length;c<p;c++)cn(g[c],v[c]);if(o)if(a)for(g=g||ke(t),v=v||ke(x),c=0,p=g.length;c<p;c++)hi(g[c],v[c]);else hi(t,x);return(v=ke(x,"script")).length>0&&jt(v,!k&&ke(t,"script")),x},cleanData:function(t){for(var o,a,c,p=u.event.special,g=0;(a=t[g])!==void 0;g++)if(vt(a)){if(o=a[se.expando]){if(o.events)for(c in o.events)p[c]?u.event.remove(a,c):u.removeEvent(a,c,o.handle);a[se.expando]=void 0}a[_e.expando]&&(a[_e.expando]=void 0)}}}),u.fn.extend({detach:function(t){return fi(this,t,!0)},remove:function(t){return fi(this,t)},text:function(t){return He(this,function(o){return o===void 0?u.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=o)})},null,t,arguments.length)},append:function(){return et(this,arguments,function(t){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||ui(this,t).appendChild(t)})},prepend:function(){return et(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=ui(this,t);o.insertBefore(t,o.firstChild)}})},before:function(){return et(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return et(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,o=0;(t=this[o])!=null;o++)t.nodeType===1&&(u.cleanData(ke(t,!1)),t.textContent="");return this},clone:function(t,o){return t=t!=null&&t,o=o??t,this.map(function(){return u.clone(this,t,o)})},html:function(t){return He(this,function(o){var a=this[0]||{},c=0,p=this.length;if(o===void 0&&a.nodeType===1)return a.innerHTML;if(typeof o=="string"&&!on.test(o)&&!je[(ai.exec(o)||["",""])[1].toLowerCase()]){o=u.htmlPrefilter(o);try{for(;c<p;c++)(a=this[c]||{}).nodeType===1&&(u.cleanData(ke(a,!1)),a.innerHTML=o);a=0}catch{}}a&&this.empty().append(o)},null,t,arguments.length)},replaceWith:function(){var t=[];return et(this,arguments,function(o){var a=this.parentNode;u.inArray(this,t)<0&&(u.cleanData(ke(this)),a&&a.replaceChild(o,this))},t)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,o){u.fn[t]=function(a){for(var c,p=[],g=u(a),v=g.length-1,x=0;x<=v;x++)c=x===v?this:this.clone(!0),u(g[x])[o](c),m.apply(p,c.get());return this.pushStack(p)}});var It=new RegExp("^("+ti+")(?!px)[a-z%]+$","i"),$t=function(t){var o=t.ownerDocument.defaultView;return o&&o.opener||(o=n),o.getComputedStyle(t)},dn=new RegExp(Be.join("|"),"i");(function(){function t(){if(k){x.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",k.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",wt.appendChild(x).appendChild(k);var I=n.getComputedStyle(k);a=I.top!=="1%",v=o(I.marginLeft)===12,k.style.right="60%",g=o(I.right)===36,c=o(I.width)===36,k.style.position="absolute",p=k.offsetWidth===36||"absolute",wt.removeChild(x),k=null}}function o(I){return Math.round(parseFloat(I))}var a,c,p,g,v,x=h.createElement("div"),k=h.createElement("div");k.style&&(k.style.backgroundClip="content-box",k.cloneNode(!0).style.backgroundClip="",j.clearCloneStyle=k.style.backgroundClip==="content-box",u.extend(j,{boxSizingReliable:function(){return t(),c},pixelBoxStyles:function(){return t(),g},pixelPosition:function(){return t(),a},reliableMarginLeft:function(){return t(),v},scrollboxSize:function(){return t(),p}}))})();function at(t,o,a){var c,p,g,v,x=t.style;return(a=a||$t(t))&&((v=a.getPropertyValue(o)||a[o])!==""||u.contains(t.ownerDocument,t)||(v=u.style(t,o)),!j.pixelBoxStyles()&&It.test(v)&&dn.test(o)&&(c=x.width,p=x.minWidth,g=x.maxWidth,x.minWidth=x.maxWidth=x.width=v,v=a.width,x.width=c,x.minWidth=p,x.maxWidth=g)),v!==void 0?v+"":v}function pi(t,o){return{get:function(){if(!t())return(this.get=o).apply(this,arguments);delete this.get}}}var un=/^(none|table(?!-c[ea]).+)/,mi=/^--/,hn={position:"absolute",visibility:"hidden",display:"block"},gi={letterSpacing:"0",fontWeight:"400"},vi=["Webkit","Moz","ms"],yi=h.createElement("div").style;function fn(t){if(t in yi)return t;for(var o=t[0].toUpperCase()+t.slice(1),a=vi.length;a--;)if((t=vi[a]+o)in yi)return t}function wi(t){var o=u.cssProps[t];return o||(o=u.cssProps[t]=fn(t)||t),o}function bi(t,o,a){var c=rt.exec(o);return c?Math.max(0,c[2]-(a||0))+(c[3]||"px"):o}function Lt(t,o,a,c,p,g){var v=o==="width"?1:0,x=0,k=0;if(a===(c?"border":"content"))return 0;for(;v<4;v+=2)a==="margin"&&(k+=u.css(t,a+Be[v],!0,p)),c?(a==="content"&&(k-=u.css(t,"padding"+Be[v],!0,p)),a!=="margin"&&(k-=u.css(t,"border"+Be[v]+"Width",!0,p))):(k+=u.css(t,"padding"+Be[v],!0,p),a!=="padding"?k+=u.css(t,"border"+Be[v]+"Width",!0,p):x+=u.css(t,"border"+Be[v]+"Width",!0,p));return!c&&g>=0&&(k+=Math.max(0,Math.ceil(t["offset"+o[0].toUpperCase()+o.slice(1)]-g-k-x-.5))),k}function $i(t,o,a){var c=$t(t),p=at(t,o,c),g=u.css(t,"boxSizing",!1,c)==="border-box",v=g;if(It.test(p)){if(!a)return p;p="auto"}return v=v&&(j.boxSizingReliable()||p===t.style[o]),(p==="auto"||!parseFloat(p)&&u.css(t,"display",!1,c)==="inline")&&(p=t["offset"+o[0].toUpperCase()+o.slice(1)],v=!0),(p=parseFloat(p)||0)+Lt(t,o,a||(g?"border":"content"),v,c,p)+"px"}u.extend({cssHooks:{opacity:{get:function(t,o){if(o){var a=at(t,"opacity");return a===""?"1":a}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,o,a,c){if(t&&t.nodeType!==3&&t.nodeType!==8&&t.style){var p,g,v,x=Me(o),k=mi.test(o),I=t.style;if(k||(o=wi(x)),v=u.cssHooks[o]||u.cssHooks[x],a===void 0)return v&&"get"in v&&(p=v.get(t,!1,c))!==void 0?p:I[o];(g=typeof a)=="string"&&(p=rt.exec(a))&&p[1]&&(a=ni(t,o,p),g="number"),a!=null&&a===a&&(g==="number"&&(a+=p&&p[3]||(u.cssNumber[x]?"":"px")),j.clearCloneStyle||a!==""||o.indexOf("background")!==0||(I[o]="inherit"),v&&"set"in v&&(a=v.set(t,a,c))===void 0||(k?I.setProperty(o,a):I[o]=a))}},css:function(t,o,a,c){var p,g,v,x=Me(o);return mi.test(o)||(o=wi(x)),(v=u.cssHooks[o]||u.cssHooks[x])&&"get"in v&&(p=v.get(t,!0,a)),p===void 0&&(p=at(t,o,c)),p==="normal"&&o in gi&&(p=gi[o]),a===""||a?(g=parseFloat(p),a===!0||isFinite(g)?g||0:p):p}}),u.each(["height","width"],function(t,o){u.cssHooks[o]={get:function(a,c,p){if(c)return!un.test(u.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$i(a,o,p):ii(a,hn,function(){return $i(a,o,p)})},set:function(a,c,p){var g,v=$t(a),x=u.css(a,"boxSizing",!1,v)==="border-box",k=p&&Lt(a,o,p,x,v);return x&&j.scrollboxSize()===v.position&&(k-=Math.ceil(a["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(v[o])-Lt(a,o,"border",!1,v)-.5)),k&&(g=rt.exec(c))&&(g[3]||"px")!=="px"&&(a.style[o]=c,c=u.css(a,o)),bi(a,c,k)}}}),u.cssHooks.marginLeft=pi(j.reliableMarginLeft,function(t,o){if(o)return(parseFloat(at(t,"marginLeft"))||t.getBoundingClientRect().left-ii(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(t,o){u.cssHooks[t+o]={expand:function(a){for(var c=0,p={},g=typeof a=="string"?a.split(" "):[a];c<4;c++)p[t+Be[c]+o]=g[c]||g[c-2]||g[0];return p}},t!=="margin"&&(u.cssHooks[t+o].set=bi)}),u.fn.extend({css:function(t,o){return He(this,function(a,c,p){var g,v,x={},k=0;if(Array.isArray(c)){for(g=$t(a),v=c.length;k<v;k++)x[c[k]]=u.css(a,c[k],!1,g);return x}return p!==void 0?u.style(a,c,p):u.css(a,c)},t,o,arguments.length>1)}});function Ee(t,o,a,c,p){return new Ee.prototype.init(t,o,a,c,p)}u.Tween=Ee,Ee.prototype={constructor:Ee,init:function(t,o,a,c,p,g){this.elem=t,this.prop=a,this.easing=p||u.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=c,this.unit=g||(u.cssNumber[a]?"":"px")},cur:function(){var t=Ee.propHooks[this.prop];return t&&t.get?t.get(this):Ee.propHooks._default.get(this)},run:function(t){var o,a=Ee.propHooks[this.prop];return this.options.duration?this.pos=o=u.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=o=t,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),a&&a.set?a.set(this):Ee.propHooks._default.set(this),this}},Ee.prototype.init.prototype=Ee.prototype,Ee.propHooks={_default:{get:function(t){var o;return t.elem.nodeType!==1||t.elem[t.prop]!=null&&t.elem.style[t.prop]==null?t.elem[t.prop]:(o=u.css(t.elem,t.prop,""))&&o!=="auto"?o:0},set:function(t){u.fx.step[t.prop]?u.fx.step[t.prop](t):t.elem.nodeType!==1||t.elem.style[u.cssProps[t.prop]]==null&&!u.cssHooks[t.prop]?t.elem[t.prop]=t.now:u.style(t.elem,t.prop,t.now+t.unit)}}},Ee.propHooks.scrollTop=Ee.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},u.easing={linear:function(t){return t},swing:function(t){return .5-Math.cos(t*Math.PI)/2},_default:"swing"},u.fx=Ee.prototype.init,u.fx.step={};var tt,xt,pn=/^(?:toggle|show|hide)$/,mn=/queueHooks$/;function Nt(){xt&&(h.hidden===!1&&n.requestAnimationFrame?n.requestAnimationFrame(Nt):n.setTimeout(Nt,u.fx.interval),u.fx.tick())}function xi(){return n.setTimeout(function(){tt=void 0}),tt=Date.now()}function St(t,o){var a,c=0,p={height:t};for(o=o?1:0;c<4;c+=2-o)p["margin"+(a=Be[c])]=p["padding"+a]=t;return o&&(p.opacity=p.width=t),p}function Si(t,o,a){for(var c,p=(Ne.tweeners[o]||[]).concat(Ne.tweeners["*"]),g=0,v=p.length;g<v;g++)if(c=p[g].call(a,o,t))return c}function gn(t,o,a){var c,p,g,v,x,k,I,M,V="width"in o||"height"in o,N=this,z={},K=t.style,ae=t.nodeType&&yt(t),te=se.get(t,"fxshow");a.queue||((v=u._queueHooks(t,"fx")).unqueued==null&&(v.unqueued=0,x=v.empty.fire,v.empty.fire=function(){v.unqueued||x()}),v.unqueued++,N.always(function(){N.always(function(){v.unqueued--,u.queue(t,"fx").length||v.empty.fire()})}));for(c in o)if(p=o[c],pn.test(p)){if(delete o[c],g=g||p==="toggle",p===(ae?"hide":"show")){if(p!=="show"||!te||te[c]===void 0)continue;ae=!0}z[c]=te&&te[c]||u.style(t,c)}if((k=!u.isEmptyObject(o))||!u.isEmptyObject(z)){V&&t.nodeType===1&&(a.overflow=[K.overflow,K.overflowX,K.overflowY],(I=te&&te.display)==null&&(I=se.get(t,"display")),(M=u.css(t,"display"))==="none"&&(I?M=I:(Ze([t],!0),I=t.style.display||I,M=u.css(t,"display"),Ze([t]))),(M==="inline"||M==="inline-block"&&I!=null)&&u.css(t,"float")==="none"&&(k||(N.done(function(){K.display=I}),I==null&&(M=K.display,I=M==="none"?"":M)),K.display="inline-block")),a.overflow&&(K.overflow="hidden",N.always(function(){K.overflow=a.overflow[0],K.overflowX=a.overflow[1],K.overflowY=a.overflow[2]})),k=!1;for(c in z)k||(te?"hidden"in te&&(ae=te.hidden):te=se.access(t,"fxshow",{display:I}),g&&(te.hidden=!ae),ae&&Ze([t],!0),N.done(function(){ae||Ze([t]),se.remove(t,"fxshow");for(c in z)u.style(t,c,z[c])})),k=Si(ae?te[c]:0,c,N),c in te||(te[c]=k.start,ae&&(k.end=k.start,k.start=0))}}function vn(t,o){var a,c,p,g,v;for(a in t)if(c=Me(a),p=o[c],g=t[a],Array.isArray(g)&&(p=g[1],g=t[a]=g[0]),a!==c&&(t[c]=g,delete t[a]),(v=u.cssHooks[c])&&"expand"in v){g=v.expand(g),delete t[c];for(a in g)a in t||(t[a]=g[a],o[a]=p)}else o[c]=p}function Ne(t,o,a){var c,p,g=0,v=Ne.prefilters.length,x=u.Deferred().always(function(){delete k.elem}),k=function(){if(p)return!1;for(var V=tt||xi(),N=Math.max(0,I.startTime+I.duration-V),z=1-(N/I.duration||0),K=0,ae=I.tweens.length;K<ae;K++)I.tweens[K].run(z);return x.notifyWith(t,[I,z,N]),z<1&&ae?N:(ae||x.notifyWith(t,[I,1,0]),x.resolveWith(t,[I]),!1)},I=x.promise({elem:t,props:u.extend({},o),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},a),originalProperties:o,originalOptions:a,startTime:tt||xi(),duration:a.duration,tweens:[],createTween:function(V,N){var z=u.Tween(t,I.opts,V,N,I.opts.specialEasing[V]||I.opts.easing);return I.tweens.push(z),z},stop:function(V){var N=0,z=V?I.tweens.length:0;if(p)return this;for(p=!0;N<z;N++)I.tweens[N].run(1);return V?(x.notifyWith(t,[I,1,0]),x.resolveWith(t,[I,V])):x.rejectWith(t,[I,V]),this}}),M=I.props;for(vn(M,I.opts.specialEasing);g<v;g++)if(c=Ne.prefilters[g].call(I,t,M,I.opts))return L(c.stop)&&(u._queueHooks(I.elem,I.opts.queue).stop=c.stop.bind(c)),c;return u.map(M,Si,I),L(I.opts.start)&&I.opts.start.call(t,I),I.progress(I.opts.progress).done(I.opts.done,I.opts.complete).fail(I.opts.fail).always(I.opts.always),u.fx.timer(u.extend(k,{elem:t,anim:I,queue:I.opts.queue})),I}u.Animation=u.extend(Ne,{tweeners:{"*":[function(t,o){var a=this.createTween(t,o);return ni(a.elem,t,rt.exec(o),a),a}]},tweener:function(t,o){L(t)?(o=t,t=["*"]):t=t.match(ze);for(var a,c=0,p=t.length;c<p;c++)a=t[c],Ne.tweeners[a]=Ne.tweeners[a]||[],Ne.tweeners[a].unshift(o)},prefilters:[gn],prefilter:function(t,o){o?Ne.prefilters.unshift(t):Ne.prefilters.push(t)}}),u.speed=function(t,o,a){var c=t&&typeof t=="object"?u.extend({},t):{complete:a||!a&&o||L(t)&&t,duration:t,easing:a&&o||o&&!L(o)&&o};return u.fx.off?c.duration=0:typeof c.duration!="number"&&(c.duration in u.fx.speeds?c.duration=u.fx.speeds[c.duration]:c.duration=u.fx.speeds._default),c.queue!=null&&c.queue!==!0||(c.queue="fx"),c.old=c.complete,c.complete=function(){L(c.old)&&c.old.call(this),c.queue&&u.dequeue(this,c.queue)},c},u.fn.extend({fadeTo:function(t,o,a,c){return this.filter(yt).css("opacity",0).show().end().animate({opacity:o},t,a,c)},animate:function(t,o,a,c){var p=u.isEmptyObject(t),g=u.speed(o,a,c),v=function(){var x=Ne(this,u.extend({},t),g);(p||se.get(this,"finish"))&&x.stop(!0)};return v.finish=v,p||g.queue===!1?this.each(v):this.queue(g.queue,v)},stop:function(t,o,a){var c=function(p){var g=p.stop;delete p.stop,g(a)};return typeof t!="string"&&(a=o,o=t,t=void 0),o&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var p=!0,g=t!=null&&t+"queueHooks",v=u.timers,x=se.get(this);if(g)x[g]&&x[g].stop&&c(x[g]);else for(g in x)x[g]&&x[g].stop&&mn.test(g)&&c(x[g]);for(g=v.length;g--;)v[g].elem!==this||t!=null&&v[g].queue!==t||(v[g].anim.stop(a),p=!1,v.splice(g,1));!p&&a||u.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var o,a=se.get(this),c=a[t+"queue"],p=a[t+"queueHooks"],g=u.timers,v=c?c.length:0;for(a.finish=!0,u.queue(this,t,[]),p&&p.stop&&p.stop.call(this,!0),o=g.length;o--;)g[o].elem===this&&g[o].queue===t&&(g[o].anim.stop(!0),g.splice(o,1));for(o=0;o<v;o++)c[o]&&c[o].finish&&c[o].finish.call(this);delete a.finish})}}),u.each(["toggle","show","hide"],function(t,o){var a=u.fn[o];u.fn[o]=function(c,p,g){return c==null||typeof c=="boolean"?a.apply(this,arguments):this.animate(St(o,!0),c,p,g)}}),u.each({slideDown:St("show"),slideUp:St("hide"),slideToggle:St("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,o){u.fn[t]=function(a,c,p){return this.animate(o,a,c,p)}}),u.timers=[],u.fx.tick=function(){var t,o=0,a=u.timers;for(tt=Date.now();o<a.length;o++)(t=a[o])()||a[o]!==t||a.splice(o--,1);a.length||u.fx.stop(),tt=void 0},u.fx.timer=function(t){u.timers.push(t),u.fx.start()},u.fx.interval=13,u.fx.start=function(){xt||(xt=!0,Nt())},u.fx.stop=function(){xt=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(t,o){return t=u.fx&&u.fx.speeds[t]||t,o=o||"fx",this.queue(o,function(a,c){var p=n.setTimeout(a,t);c.stop=function(){n.clearTimeout(p)}})},function(){var t=h.createElement("input"),o=h.createElement("select").appendChild(h.createElement("option"));t.type="checkbox",j.checkOn=t.value!=="",j.optSelected=o.selected,(t=h.createElement("input")).value="t",t.type="radio",j.radioValue=t.value==="t"}();var Ci,st=u.expr.attrHandle;u.fn.extend({attr:function(t,o){return He(this,u.attr,t,o,arguments.length>1)},removeAttr:function(t){return this.each(function(){u.removeAttr(this,t)})}}),u.extend({attr:function(t,o,a){var c,p,g=t.nodeType;if(g!==3&&g!==8&&g!==2)return typeof t.getAttribute=="undefined"?u.prop(t,o,a):(g===1&&u.isXMLDoc(t)||(p=u.attrHooks[o.toLowerCase()]||(u.expr.match.bool.test(o)?Ci:void 0)),a!==void 0?a===null?void u.removeAttr(t,o):p&&"set"in p&&(c=p.set(t,a,o))!==void 0?c:(t.setAttribute(o,a+""),a):p&&"get"in p&&(c=p.get(t,o))!==null?c:(c=u.find.attr(t,o))==null?void 0:c)},attrHooks:{type:{set:function(t,o){if(!j.radioValue&&o==="radio"&&X(t,"input")){var a=t.value;return t.setAttribute("type",o),a&&(t.value=a),o}}}},removeAttr:function(t,o){var a,c=0,p=o&&o.match(ze);if(p&&t.nodeType===1)for(;a=p[c++];)t.removeAttribute(a)}}),Ci={set:function(t,o,a){return o===!1?u.removeAttr(t,a):t.setAttribute(a,a),a}},u.each(u.expr.match.bool.source.match(/\w+/g),function(t,o){var a=st[o]||u.find.attr;st[o]=function(c,p,g){var v,x,k=p.toLowerCase();return g||(x=st[k],st[k]=v,v=a(c,p,g)!=null?k:null,st[k]=x),v}});var yn=/^(?:input|select|textarea|button)$/i,wn=/^(?:a|area)$/i;u.fn.extend({prop:function(t,o){return He(this,u.prop,t,o,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[u.propFix[t]||t]})}}),u.extend({prop:function(t,o,a){var c,p,g=t.nodeType;if(g!==3&&g!==8&&g!==2)return g===1&&u.isXMLDoc(t)||(o=u.propFix[o]||o,p=u.propHooks[o]),a!==void 0?p&&"set"in p&&(c=p.set(t,a,o))!==void 0?c:t[o]=a:p&&"get"in p&&(c=p.get(t,o))!==null?c:t[o]},propHooks:{tabIndex:{get:function(t){var o=u.find.attr(t,"tabindex");return o?parseInt(o,10):yn.test(t.nodeName)||wn.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),j.optSelected||(u.propHooks.selected={get:function(t){var o=t.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(t){var o=t.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this});function Ve(t){return(t.match(ze)||[]).join(" ")}function Ge(t){return t.getAttribute&&t.getAttribute("class")||""}function Ot(t){return Array.isArray(t)?t:typeof t=="string"?t.match(ze)||[]:[]}u.fn.extend({addClass:function(t){var o,a,c,p,g,v,x,k=0;if(L(t))return this.each(function(I){u(this).addClass(t.call(this,I,Ge(this)))});if((o=Ot(t)).length){for(;a=this[k++];)if(p=Ge(a),c=a.nodeType===1&&" "+Ve(p)+" "){for(v=0;g=o[v++];)c.indexOf(" "+g+" ")<0&&(c+=g+" ");p!==(x=Ve(c))&&a.setAttribute("class",x)}}return this},removeClass:function(t){var o,a,c,p,g,v,x,k=0;if(L(t))return this.each(function(I){u(this).removeClass(t.call(this,I,Ge(this)))});if(!arguments.length)return this.attr("class","");if((o=Ot(t)).length){for(;a=this[k++];)if(p=Ge(a),c=a.nodeType===1&&" "+Ve(p)+" "){for(v=0;g=o[v++];)for(;c.indexOf(" "+g+" ")>-1;)c=c.replace(" "+g+" "," ");p!==(x=Ve(c))&&a.setAttribute("class",x)}}return this},toggleClass:function(t,o){var a=typeof t,c=a==="string"||Array.isArray(t);return typeof o=="boolean"&&c?o?this.addClass(t):this.removeClass(t):L(t)?this.each(function(p){u(this).toggleClass(t.call(this,p,Ge(this),o),o)}):this.each(function(){var p,g,v,x;if(c)for(g=0,v=u(this),x=Ot(t);p=x[g++];)v.hasClass(p)?v.removeClass(p):v.addClass(p);else t!==void 0&&a!=="boolean"||((p=Ge(this))&&se.set(this,"__className__",p),this.setAttribute&&this.setAttribute("class",p||t===!1?"":se.get(this,"__className__")||""))})},hasClass:function(t){var o,a,c=0;for(o=" "+t+" ";a=this[c++];)if(a.nodeType===1&&(" "+Ve(Ge(a))+" ").indexOf(o)>-1)return!0;return!1}});var bn=/\r/g;u.fn.extend({val:function(t){var o,a,c,p=this[0];{if(arguments.length)return c=L(t),this.each(function(g){var v;this.nodeType===1&&((v=c?t.call(this,g,u(this).val()):t)==null?v="":typeof v=="number"?v+="":Array.isArray(v)&&(v=u.map(v,function(x){return x==null?"":x+""})),(o=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()])&&"set"in o&&o.set(this,v,"value")!==void 0||(this.value=v))});if(p)return(o=u.valHooks[p.type]||u.valHooks[p.nodeName.toLowerCase()])&&"get"in o&&(a=o.get(p,"value"))!==void 0?a:typeof(a=p.value)=="string"?a.replace(bn,""):a??""}}}),u.extend({valHooks:{option:{get:function(t){var o=u.find.attr(t,"value");return o??Ve(u.text(t))}},select:{get:function(t){var o,a,c,p=t.options,g=t.selectedIndex,v=t.type==="select-one",x=v?null:[],k=v?g+1:p.length;for(c=g<0?k:v?g:0;c<k;c++)if(((a=p[c]).selected||c===g)&&!a.disabled&&(!a.parentNode.disabled||!X(a.parentNode,"optgroup"))){if(o=u(a).val(),v)return o;x.push(o)}return x},set:function(t,o){for(var a,c,p=t.options,g=u.makeArray(o),v=p.length;v--;)((c=p[v]).selected=u.inArray(u.valHooks.option.get(c),g)>-1)&&(a=!0);return a||(t.selectedIndex=-1),g}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(t,o){if(Array.isArray(o))return t.checked=u.inArray(u(t).val(),o)>-1}},j.checkOn||(u.valHooks[this].get=function(t){return t.getAttribute("value")===null?"on":t.value})}),j.focusin="onfocusin"in n;var _i=/^(?:focusinfocus|focusoutblur)$/,ki=function(t){t.stopPropagation()};u.extend(u.event,{trigger:function(t,o,a,c){var p,g,v,x,k,I,M,V,N=[a||h],z=A.call(t,"type")?t.type:t,K=A.call(t,"namespace")?t.namespace.split("."):[];if(g=V=v=a=a||h,a.nodeType!==3&&a.nodeType!==8&&!_i.test(z+u.event.triggered)&&(z.indexOf(".")>-1&&(z=(K=z.split(".")).shift(),K.sort()),k=z.indexOf(":")<0&&"on"+z,t=t[u.expando]?t:new u.Event(z,typeof t=="object"&&t),t.isTrigger=c?2:3,t.namespace=K.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+K.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=a),o=o==null?[t]:u.makeArray(o,[t]),M=u.event.special[z]||{},c||!M.trigger||M.trigger.apply(a,o)!==!1)){if(!c&&!M.noBubble&&!C(a)){for(x=M.delegateType||z,_i.test(x+z)||(g=g.parentNode);g;g=g.parentNode)N.push(g),v=g;v===(a.ownerDocument||h)&&N.push(v.defaultView||v.parentWindow||n)}for(p=0;(g=N[p++])&&!t.isPropagationStopped();)V=g,t.type=p>1?x:M.bindType||z,(I=(se.get(g,"events")||{})[t.type]&&se.get(g,"handle"))&&I.apply(g,o),(I=k&&g[k])&&I.apply&&vt(g)&&(t.result=I.apply(g,o),t.result===!1&&t.preventDefault());return t.type=z,c||t.isDefaultPrevented()||M._default&&M._default.apply(N.pop(),o)!==!1||!vt(a)||k&&L(a[z])&&!C(a)&&((v=a[k])&&(a[k]=null),u.event.triggered=z,t.isPropagationStopped()&&V.addEventListener(z,ki),a[z](),t.isPropagationStopped()&&V.removeEventListener(z,ki),u.event.triggered=void 0,v&&(a[k]=v)),t.result}},simulate:function(t,o,a){var c=u.extend(new u.Event,a,{type:t,isSimulated:!0});u.event.trigger(c,null,o)}}),u.fn.extend({trigger:function(t,o){return this.each(function(){u.event.trigger(t,o,this)})},triggerHandler:function(t,o){var a=this[0];if(a)return u.event.trigger(t,o,a,!0)}}),j.focusin||u.each({focus:"focusin",blur:"focusout"},function(t,o){var a=function(c){u.event.simulate(o,c.target,u.event.fix(c))};u.event.special[o]={setup:function(){var c=this.ownerDocument||this,p=se.access(c,o);p||c.addEventListener(t,a,!0),se.access(c,o,(p||0)+1)},teardown:function(){var c=this.ownerDocument||this,p=se.access(c,o)-1;p?se.access(c,o,p):(c.removeEventListener(t,a,!0),se.remove(c,o))}}});var lt=n.location,Ei=Date.now(),qt=/\?/;u.parseXML=function(t){var o;if(!t||typeof t!="string")return null;try{o=new n.DOMParser().parseFromString(t,"text/xml")}catch{o=void 0}return o&&!o.getElementsByTagName("parsererror").length||u.error("Invalid XML: "+t),o};var $n=/\[\]$/,Ti=/\r?\n/g,xn=/^(?:submit|button|image|reset|file)$/i,Sn=/^(?:input|select|textarea|keygen)/i;function zt(t,o,a,c){var p;if(Array.isArray(o))u.each(o,function(g,v){a||$n.test(t)?c(t,v):zt(t+"["+(typeof v=="object"&&v!=null?g:"")+"]",v,a,c)});else if(a||U(o)!=="object")c(t,o);else for(p in o)zt(t+"["+p+"]",o[p],a,c)}u.param=function(t,o){var a,c=[],p=function(g,v){var x=L(v)?v():v;c[c.length]=encodeURIComponent(g)+"="+encodeURIComponent(x??"")};if(Array.isArray(t)||t.jquery&&!u.isPlainObject(t))u.each(t,function(){p(this.name,this.value)});else for(a in t)zt(a,t[a],o,p);return c.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=u.prop(this,"elements");return t?u.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!u(this).is(":disabled")&&Sn.test(this.nodeName)&&!xn.test(t)&&(this.checked||!ri.test(t))}).map(function(t,o){var a=u(this).val();return a==null?null:Array.isArray(a)?u.map(a,function(c){return{name:o.name,value:c.replace(Ti,`\r
`)}}):{name:o.name,value:a.replace(Ti,`\r
`)}}).get()}});var Cn=/%20/g,_n=/#.*$/,kn=/([?&])_=[^&]*/,En=/^(.*?):[ \t]*([^\r\n]*)$/gm,Tn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,An=/^(?:GET|HEAD)$/,Dn=/^\/\//,Ai={},Mt={},Di="*/".concat("*"),Ft=h.createElement("a");Ft.href=lt.href;function ji(t){return function(o,a){typeof o!="string"&&(a=o,o="*");var c,p=0,g=o.toLowerCase().match(ze)||[];if(L(a))for(;c=g[p++];)c[0]==="+"?(c=c.slice(1)||"*",(t[c]=t[c]||[]).unshift(a)):(t[c]=t[c]||[]).push(a)}}function Pi(t,o,a,c){var p={},g=t===Mt;function v(x){var k;return p[x]=!0,u.each(t[x]||[],function(I,M){var V=M(o,a,c);return typeof V!="string"||g||p[V]?g?!(k=V):void 0:(o.dataTypes.unshift(V),v(V),!1)}),k}return v(o.dataTypes[0])||!p["*"]&&v("*")}function Ht(t,o){var a,c,p=u.ajaxSettings.flatOptions||{};for(a in o)o[a]!==void 0&&((p[a]?t:c||(c={}))[a]=o[a]);return c&&u.extend(!0,t,c),t}function jn(t,o,a){for(var c,p,g,v,x=t.contents,k=t.dataTypes;k[0]==="*";)k.shift(),c===void 0&&(c=t.mimeType||o.getResponseHeader("Content-Type"));if(c){for(p in x)if(x[p]&&x[p].test(c)){k.unshift(p);break}}if(k[0]in a)g=k[0];else{for(p in a){if(!k[0]||t.converters[p+" "+k[0]]){g=p;break}v||(v=p)}g=g||v}if(g)return g!==k[0]&&k.unshift(g),a[g]}function Pn(t,o,a,c){var p,g,v,x,k,I={},M=t.dataTypes.slice();if(M[1])for(v in t.converters)I[v.toLowerCase()]=t.converters[v];for(g=M.shift();g;)if(t.responseFields[g]&&(a[t.responseFields[g]]=o),!k&&c&&t.dataFilter&&(o=t.dataFilter(o,t.dataType)),k=g,g=M.shift()){if(g==="*")g=k;else if(k!=="*"&&k!==g){if(!(v=I[k+" "+g]||I["* "+g])){for(p in I)if((x=p.split(" "))[1]===g&&(v=I[k+" "+x[0]]||I["* "+x[0]])){v===!0?v=I[p]:I[p]!==!0&&(g=x[0],M.unshift(x[1]));break}}if(v!==!0)if(v&&t.throws)o=v(o);else try{o=v(o)}catch(V){return{state:"parsererror",error:v?V:"No conversion from "+k+" to "+g}}}}return{state:"success",data:o}}u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:lt.href,type:"GET",isLocal:Tn.test(lt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Di,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,o){return o?Ht(Ht(t,u.ajaxSettings),o):Ht(u.ajaxSettings,t)},ajaxPrefilter:ji(Ai),ajaxTransport:ji(Mt),ajax:function(t,o){typeof t=="object"&&(o=t,t=void 0),o=o||{};var a,c,p,g,v,x,k,I,M,V,N=u.ajaxSetup({},o),z=N.context||N,K=N.context&&(z.nodeType||z.jquery)?u(z):u.event,ae=u.Deferred(),te=u.Callbacks("once memory"),we=N.statusCode||{},be={},Ae={},ue="canceled",re={readyState:0,getResponseHeader:function(de){var ye;if(k){if(!g)for(g={};ye=En.exec(p);)g[ye[1].toLowerCase()]=ye[2];ye=g[de.toLowerCase()]}return ye??null},getAllResponseHeaders:function(){return k?p:null},setRequestHeader:function(de,ye){return k==null&&(de=Ae[de.toLowerCase()]=Ae[de.toLowerCase()]||de,be[de]=ye),this},overrideMimeType:function(de){return k==null&&(N.mimeType=de),this},statusCode:function(de){var ye;if(de)if(k)re.always(de[re.status]);else for(ye in de)we[ye]=[we[ye],de[ye]];return this},abort:function(de){var ye=de||ue;return a&&a.abort(ye),Te(0,ye),this}};if(ae.promise(re),N.url=((t||N.url||lt.href)+"").replace(Dn,lt.protocol+"//"),N.type=o.method||o.type||N.method||N.type,N.dataTypes=(N.dataType||"*").toLowerCase().match(ze)||[""],N.crossDomain==null){x=h.createElement("a");try{x.href=N.url,x.href=x.href,N.crossDomain=Ft.protocol+"//"+Ft.host!=x.protocol+"//"+x.host}catch{N.crossDomain=!0}}if(N.data&&N.processData&&typeof N.data!="string"&&(N.data=u.param(N.data,N.traditional)),Pi(Ai,N,o,re),k)return re;(I=u.event&&N.global)&&u.active++==0&&u.event.trigger("ajaxStart"),N.type=N.type.toUpperCase(),N.hasContent=!An.test(N.type),c=N.url.replace(_n,""),N.hasContent?N.data&&N.processData&&(N.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(N.data=N.data.replace(Cn,"+")):(V=N.url.slice(c.length),N.data&&(N.processData||typeof N.data=="string")&&(c+=(qt.test(c)?"&":"?")+N.data,delete N.data),N.cache===!1&&(c=c.replace(kn,"$1"),V=(qt.test(c)?"&":"?")+"_="+Ei+++V),N.url=c+V),N.ifModified&&(u.lastModified[c]&&re.setRequestHeader("If-Modified-Since",u.lastModified[c]),u.etag[c]&&re.setRequestHeader("If-None-Match",u.etag[c])),(N.data&&N.hasContent&&N.contentType!==!1||o.contentType)&&re.setRequestHeader("Content-Type",N.contentType),re.setRequestHeader("Accept",N.dataTypes[0]&&N.accepts[N.dataTypes[0]]?N.accepts[N.dataTypes[0]]+(N.dataTypes[0]!=="*"?", "+Di+"; q=0.01":""):N.accepts["*"]);for(M in N.headers)re.setRequestHeader(M,N.headers[M]);if(N.beforeSend&&(N.beforeSend.call(z,re,N)===!1||k))return re.abort();if(ue="abort",te.add(N.complete),re.done(N.success),re.fail(N.error),a=Pi(Mt,N,o,re)){if(re.readyState=1,I&&K.trigger("ajaxSend",[re,N]),k)return re;N.async&&N.timeout>0&&(v=n.setTimeout(function(){re.abort("timeout")},N.timeout));try{k=!1,a.send(be,Te)}catch(de){if(k)throw de;Te(-1,de)}}else Te(-1,"No Transport");function Te(de,ye,dt,it){var Oe,ut,Pe,Ue,nt,$e=ye;k||(k=!0,v&&n.clearTimeout(v),a=void 0,p=it||"",re.readyState=de>0?4:0,Oe=de>=200&&de<300||de===304,dt&&(Ue=jn(N,re,dt)),Ue=Pn(N,Ue,re,Oe),Oe?(N.ifModified&&((nt=re.getResponseHeader("Last-Modified"))&&(u.lastModified[c]=nt),(nt=re.getResponseHeader("etag"))&&(u.etag[c]=nt)),de===204||N.type==="HEAD"?$e="nocontent":de===304?$e="notmodified":($e=Ue.state,ut=Ue.data,Oe=!(Pe=Ue.error))):(Pe=$e,!de&&$e||($e="error",de<0&&(de=0))),re.status=de,re.statusText=(ye||$e)+"",Oe?ae.resolveWith(z,[ut,$e,re]):ae.rejectWith(z,[re,$e,Pe]),re.statusCode(we),we=void 0,I&&K.trigger(Oe?"ajaxSuccess":"ajaxError",[re,N,Oe?ut:Pe]),te.fireWith(z,[re,$e]),I&&(K.trigger("ajaxComplete",[re,N]),--u.active||u.event.trigger("ajaxStop")))}return re},getJSON:function(t,o,a){return u.get(t,o,a,"json")},getScript:function(t,o){return u.get(t,void 0,o,"script")}}),u.each(["get","post"],function(t,o){u[o]=function(a,c,p,g){return L(c)&&(g=g||p,p=c,c=void 0),u.ajax(u.extend({url:a,type:o,dataType:g,data:c,success:p},u.isPlainObject(a)&&a))}}),u._evalUrl=function(t){return u.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},u.fn.extend({wrapAll:function(t){var o;return this[0]&&(L(t)&&(t=t.call(this[0])),o=u(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(t){return L(t)?this.each(function(o){u(this).wrapInner(t.call(this,o))}):this.each(function(){var o=u(this),a=o.contents();a.length?a.wrapAll(t):o.append(t)})},wrap:function(t){var o=L(t);return this.each(function(a){u(this).wrapAll(o?t.call(this,a):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(t){return!u.expr.pseudos.visible(t)},u.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch{}};var In={0:200,1223:204},ct=u.ajaxSettings.xhr();j.cors=!!ct&&"withCredentials"in ct,j.ajax=ct=!!ct,u.ajaxTransport(function(t){var o,a;if(j.cors||ct&&!t.crossDomain)return{send:function(c,p){var g,v=t.xhr();if(v.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(g in t.xhrFields)v[g]=t.xhrFields[g];t.mimeType&&v.overrideMimeType&&v.overrideMimeType(t.mimeType),t.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(g in c)v.setRequestHeader(g,c[g]);o=function(x){return function(){o&&(o=a=v.onload=v.onerror=v.onabort=v.ontimeout=v.onreadystatechange=null,x==="abort"?v.abort():x==="error"?typeof v.status!="number"?p(0,"error"):p(v.status,v.statusText):p(In[v.status]||v.status,v.statusText,(v.responseType||"text")!=="text"||typeof v.responseText!="string"?{binary:v.response}:{text:v.responseText},v.getAllResponseHeaders()))}},v.onload=o(),a=v.onerror=v.ontimeout=o("error"),v.onabort!==void 0?v.onabort=a:v.onreadystatechange=function(){v.readyState===4&&n.setTimeout(function(){o&&a()})},o=o("abort");try{v.send(t.hasContent&&t.data||null)}catch(x){if(o)throw x}},abort:function(){o&&o()}}}),u.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return u.globalEval(t),t}}}),u.ajaxPrefilter("script",function(t){t.cache===void 0&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),u.ajaxTransport("script",function(t){if(t.crossDomain){var o,a;return{send:function(c,p){o=u("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",a=function(g){o.remove(),a=null,g&&p(g.type==="error"?404:200,g.type)}),h.head.appendChild(o[0])},abort:function(){a&&a()}}}});var Ii=[],Bt=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Ii.pop()||u.expando+"_"+Ei++;return this[t]=!0,t}}),u.ajaxPrefilter("json jsonp",function(t,o,a){var c,p,g,v=t.jsonp!==!1&&(Bt.test(t.url)?"url":typeof t.data=="string"&&(t.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Bt.test(t.data)&&"data");if(v||t.dataTypes[0]==="jsonp")return c=t.jsonpCallback=L(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,v?t[v]=t[v].replace(Bt,"$1"+c):t.jsonp!==!1&&(t.url+=(qt.test(t.url)?"&":"?")+t.jsonp+"="+c),t.converters["script json"]=function(){return g||u.error(c+" was not called"),g[0]},t.dataTypes[0]="json",p=n[c],n[c]=function(){g=arguments},a.always(function(){p===void 0?u(n).removeProp(c):n[c]=p,t[c]&&(t.jsonpCallback=o.jsonpCallback,Ii.push(c)),g&&L(p)&&p(g[0]),g=p=void 0}),"script"}),j.createHTMLDocument=function(){var t=h.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",t.childNodes.length===2}(),u.parseHTML=function(t,o,a){if(typeof t!="string")return[];typeof o=="boolean"&&(a=o,o=!1);var c,p,g;return o||(j.createHTMLDocument?((c=(o=h.implementation.createHTMLDocument("")).createElement("base")).href=h.location.href,o.head.appendChild(c)):o=h),p=pe.exec(t),g=!a&&[],p?[o.createElement(p[1])]:(p=li([t],o,g),g&&g.length&&u(g).remove(),u.merge([],p.childNodes))},u.fn.load=function(t,o,a){var c,p,g,v=this,x=t.indexOf(" ");return x>-1&&(c=Ve(t.slice(x)),t=t.slice(0,x)),L(o)?(a=o,o=void 0):o&&typeof o=="object"&&(p="POST"),v.length>0&&u.ajax({url:t,type:p||"GET",dataType:"html",data:o}).done(function(k){g=arguments,v.html(c?u("<div>").append(u.parseHTML(k)).find(c):k)}).always(a&&function(k,I){v.each(function(){a.apply(this,g||[k.responseText,I,k])})}),this},u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,o){u.fn[o]=function(a){return this.on(o,a)}}),u.expr.pseudos.animated=function(t){return u.grep(u.timers,function(o){return t===o.elem}).length},u.offset={setOffset:function(t,o,a){var c,p,g,v,x,k,I,M=u.css(t,"position"),V=u(t),N={};M==="static"&&(t.style.position="relative"),x=V.offset(),g=u.css(t,"top"),k=u.css(t,"left"),(I=(M==="absolute"||M==="fixed")&&(g+k).indexOf("auto")>-1)?(v=(c=V.position()).top,p=c.left):(v=parseFloat(g)||0,p=parseFloat(k)||0),L(o)&&(o=o.call(t,a,u.extend({},x))),o.top!=null&&(N.top=o.top-x.top+v),o.left!=null&&(N.left=o.left-x.left+p),"using"in o?o.using.call(t,N):V.css(N)}},u.fn.extend({offset:function(t){if(arguments.length)return t===void 0?this:this.each(function(p){u.offset.setOffset(this,t,p)});var o,a,c=this[0];if(c)return c.getClientRects().length?(o=c.getBoundingClientRect(),a=c.ownerDocument.defaultView,{top:o.top+a.pageYOffset,left:o.left+a.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var t,o,a,c=this[0],p={top:0,left:0};if(u.css(c,"position")==="fixed")o=c.getBoundingClientRect();else{for(o=this.offset(),a=c.ownerDocument,t=c.offsetParent||a.documentElement;t&&(t===a.body||t===a.documentElement)&&u.css(t,"position")==="static";)t=t.parentNode;t&&t!==c&&t.nodeType===1&&((p=u(t).offset()).top+=u.css(t,"borderTopWidth",!0),p.left+=u.css(t,"borderLeftWidth",!0))}return{top:o.top-p.top-u.css(c,"marginTop",!0),left:o.left-p.left-u.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&u.css(t,"position")==="static";)t=t.offsetParent;return t||wt})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,o){var a=o==="pageYOffset";u.fn[t]=function(c){return He(this,function(p,g,v){var x;if(C(p)?x=p:p.nodeType===9&&(x=p.defaultView),v===void 0)return x?x[o]:p[g];x?x.scrollTo(a?x.pageXOffset:v,a?v:x.pageYOffset):p[g]=v},t,c,arguments.length)}}),u.each(["top","left"],function(t,o){u.cssHooks[o]=pi(j.pixelPosition,function(a,c){if(c)return c=at(a,o),It.test(c)?u(a).position()[o]+"px":c})}),u.each({Height:"height",Width:"width"},function(t,o){u.each({padding:"inner"+t,content:o,"":"outer"+t},function(a,c){u.fn[c]=function(p,g){var v=arguments.length&&(a||typeof p!="boolean"),x=a||(p===!0||g===!0?"margin":"border");return He(this,function(k,I,M){var V;return C(k)?c.indexOf("outer")===0?k["inner"+t]:k.document.documentElement["client"+t]:k.nodeType===9?(V=k.documentElement,Math.max(k.body["scroll"+t],V["scroll"+t],k.body["offset"+t],V["offset"+t],V["client"+t])):M===void 0?u.css(k,I,x):u.style(k,I,M,x)},o,v?p:void 0,v)}})}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,o){u.fn[o]=function(a,c){return arguments.length>0?this.on(o,null,a,c):this.trigger(o)}}),u.fn.extend({hover:function(t,o){return this.mouseenter(t).mouseleave(o||t)}}),u.fn.extend({bind:function(t,o,a){return this.on(t,null,o,a)},unbind:function(t,o){return this.off(t,null,o)},delegate:function(t,o,a,c){return this.on(o,t,a,c)},undelegate:function(t,o,a){return arguments.length===1?this.off(t,"**"):this.off(o,t||"**",a)}}),u.proxy=function(t,o){var a,c,p;if(typeof o=="string"&&(a=t[o],o=t,t=a),L(t))return c=f.call(arguments,2),p=function(){return t.apply(o||this,c.concat(f.call(arguments)))},p.guid=t.guid=t.guid||u.guid++,p},u.holdReady=function(t){t?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=X,u.isFunction=L,u.isWindow=C,u.camelCase=Me,u.type=U,u.now=Date.now,u.isNumeric=function(t){var o=u.type(t);return(o==="number"||o==="string")&&!isNaN(t-parseFloat(t))},typeof define=="function"&&define.amd&&define("jquery",[],function(){return u});var Ln=n.jQuery,Nn=n.$;return u.noConflict=function(t){return n.$===u&&(n.$=Nn),t&&n.jQuery===u&&(n.jQuery=Ln),u},r||(n.jQuery=n.$=u),u});var usePageDots=!1,imageFunctions={zoom:function(n,r,s){var h=$(n).data("zoom");h&&$(n+" img").wrap('<span style="display:inline-block"></span>').css("display","block").parent().zoom({touch:r,magnify:s||1})},linkGalleryAndCarousel:function(n,r){r.find(".gallery-cell:nth-child(1)").addClass("is-nav-selected"),r.on("click",".gallery-cell",function(){var s=$(this).index();r.find(".is-nav-selected").removeClass("is-nav-selected"),$(this).addClass("is-nav-selected"),n.flickity("select",s)}),n.on("select.flickity",function(){var s=$(this).data("flickity");s&&(r.find(".is-nav-selected").removeClass("is-nav-selected"),r.find(".gallery-cell:nth-child("+(s.selectedIndex+1)+")").addClass("is-nav-selected"))})},fullWidth:function(n,r){$(n).each(function(){var s=$(this),h=s.attr("alt"),l=s.attr("src");if(h.indexOf("[")>=0){s.remove();var f=h.match(/\[(.*?)\]/ig);h=h.replace(/\[(.*?)\]/ig,"");var d=$.map(f,function(E,A){return E=E.replace(/[\[\]']+/g,""),E}),m=['<div class="position-'+(d.length?d:"center")+' caption js-caption">','<div class="caption-content caption-background-false align-'+(d.length?d:"center")+'">','<p class="headline">'+h+"</p>","</div>","</div>"].join("");s.attr({alt:h,class:"lazyload blur-up",src:l,dataSizes:"auto"});var w=s.prop("outerHTML"),_='<div class="banner">'+w+m+"</div>";$(r).append(_)}})},showSecondaryImage:function(){$(window).width()>798&&($("body").on("mouseenter",".swap-true",function(){$(this).toggleClass("toggle-images")}),$("body").on("mouseleave",".swap-true",function(){$(this).toggleClass("toggle-images")}))}},recentlyViewed={init:function(){var n,r,s,h,l;if($(".js-product_section[data-rv-handle]").length?(n=$(".js-product_section").data("rv-handle").toString(),r=Cookies.get("recentlyViewed"),s=recentlyViewed.getCookieProducts(r,n)):($(".recently-viewed__section").length||$(".collection-template-section .js-sidebar-recently-viewed").length)&&(r=Cookies.get("recentlyViewed"),s=recentlyViewed.getCookieProducts(r,n)),s&&(l=unescape(s).split(",")),n?(!$.inArray(n,l)!==-1&&(h=[],l.unshift(n),$.each(l,function(d,m){$.inArray(m,h)===-1&&h.push(m)})),recentlyViewed.setCookieProducts(h)):h=l,$(".recently-viewed__section").length){var f=".recently-viewed__section";recentlyViewed.getProductInformation(f,h)}else if($(".js-recently-viewed .rv-main").length){var f=".js-recently-viewed";recentlyViewed.getProductInformation(f,h,n)}if($(".sidebar .js-sidebar-recently-viewed").length){var f=".sidebar .js-sidebar-recently-viewed";n?recentlyViewed.getProductInformation(f,h,n):recentlyViewed.getProductInformation(f,h),$(".js-sidebar-recently-viewed.hidden").parents(".sidebar-block").hide()}},getCookieProducts:function(n,r){return!n&&r&&Cookies.set("recentlyViewed",r,{expires:30,path:"/"}),n=Cookies.get("recentlyViewed"),n},setCookieProducts:function(n){Cookies.set("recentlyViewed",escape(n.join(",")),{expires:30,path:"/"})},getProductInformation:function(n,r,s){s&&r.splice($.inArray(s,r),1);var h=$(n).data("visible-products");h&&r&&(r=r.slice(0,h)),$.each(r,function(l,f){f&&($(n).removeClass("hidden"),$(n).parents(".sidebar-block").show(),$.ajax({type:"GET",url:"/products/"+f+"?view=rv",success:function(d){var m=$(d).find(".js-recently-viewed-product");$(n).find(" .rv-box-"+l).append(m)},error:function(d,m,w){console.log(d),console.log(m),console.log(w)},dataType:"html"})),$(n).find(".rv-main").hasClass("js-rv-slider")?(r.length<=h?$(".js-rv-slider .gallery-cell").eq(r.length).nextAll().addBack().remove():$(".js-rv-slider .gallery-cell").eq(h).nextAll().addBack().remove(),recentlyViewed.createSlider(n,h)):$(n).find(".rv-main").hasClass("js-rv-grid")&&(r.length<=h?$(".js-rv-grid .thumbnail").eq(r.length).nextAll().addBack().remove():$(".js-rv-grid .thumbnail").eq(h).nextAll().addBack().remove())})},createSlider:function(n,r){var s=$(".js-rv-slider").data("products-per-slide"),h=$(".js-rv-slider").data("products-limit"),l=r,f=r-1,d=$(".js-rv-slider").find(".gallery-cell"),m,w,_,E,A;s=="2"&&l>s&&h>s||s=="4"&&l>s&&h>s||s=="6"&&l>s&&h>s?m="left":m="center",l>s&&h>s?(w=!0,_=!0,E=!0):(w=!1,_=!1,E=!1),s=="2"&&l>s||s=="4"&&l>s||s=="6"&&l>s?A=0:s=="3"&&l?A=1:s=="5"&&l?A=2:s=="7"&&l&&(A=3),$(window).width()<=798&&(m="center",A=1,d.length<=2?(w=!1,_=!1,E=!1):l>3&&h>3?(w=!0,_=!0,E=!0):(w=!1,_=!1,E=!1),$(".js-rv-slider").parents(".even-num-slides").removeClass("even-num-slides")),$(".js-rv-slider").flickity({lazyLoad:2,imagesLoaded:!0,draggable:w,prevNextButtons:_,wrapAround:E,cellAlign:m,pageDots:usePageDots,contain:!0,freeScroll:!0,arrowShape:arrowSize,initialIndex:A}),$(".js-rv-slider").addClass("slider-initialized")}},featuredCollectionSection={init:function(){$(".js-product-slider .products-slider").each(function(n,r){var s=$(this).data("products-per-slide"),h=$(this).data("products-limit"),l=$(this).data("products-available"),f,d,m,w,_;s=="2"&&l>s&&h>s||s=="4"&&l>s&&h>s||s=="6"&&l>s&&h>s?f="left":f="center",l>s&&h>s?(d=!0,m=!0,w=!0):(d=!1,m=!1,w=!1),s=="2"&&l>s||s=="4"&&l>s||s=="6"&&l>s?_=0:s=="3"&&l?_=1:s=="5"&&l?_=2:s=="7"&&l&&(_=3),$(window).width()<=798&&(f="center",d=!0,m=!0,w=!0,_=1,$(this).parents(".even-num-slides").removeClass("even-num-slides")),$(this).flickity({lazyLoad:2,imagesLoaded:!0,draggable:d,prevNextButtons:m,wrapAround:w,cellAlign:f,pageDots:usePageDots,contain:!0,freeScroll:!0,arrowShape:arrowSize,initialIndex:_}),$(this).addClass("slider-initialized")})},unload:function(n){var r=n.find(".js-product-slider");r.hasClass("flickity-enabled")&&r.flickity("destroy")}},featuredPromotions={init:function(){($(window).width()>798||$(window).width()==0)&&($(".feature-overlay").hover(function(){$(this).find(".feature-details").slideDown("100",function(){$(this).addClass("reveal-details")})},function(){$(this).find(".feature-details").removeClass("reveal-details"),$(this).find(".feature-details").slideUp("100")}),$(".js-featured-promotions").each(function(n,r){var s=$(this),h=$(this).data("promo-animation");s.waypoint(function(){$(this.element).find(".feature-section").addClass("animated "+h)},{offset:"80%"})}))}},slideshow={init:function(){$(".js-homepage-slideshow").each(function(n,r){var s=$(this),h={slideshowSpeed:s.data("slideshow-speed")*1e3,slideshowTextAnimation:s.data("slideshow-text-animation"),adaptiveHeight:s.data("adaptive-height")};if(!s.hasClass("flickity-enabled")){var l=s.find(".gallery-cell").length!==1;if(s.flickity({adaptiveHeight:h.adaptiveHeight,wrapAround:!0,cellAlign:"left",imagesLoaded:!0,prevNextButtons:l,draggable:l,pageDots:usePageDots,autoPlay:h.slideshowSpeed,arrowShape:arrowSize}),h.slideshowTextAnimation!=""){var f=s.data("flickity");setTimeout(function(){s.find(".gallery-cell:nth-child(1) .caption-content").addClass("animated "+h.slideshowTextAnimation)},400),s.on("select.flickity",function(){if(s.is(":visible")){var d=f.selectedIndex+1;setTimeout(function(){s.find(".caption-content").removeClass("animated "+h.slideshowTextAnimation),s.find(".gallery-cell:nth-child("+d+") .caption-content").addClass("animated "+h.slideshowTextAnimation)},400)}})}}s.find(".gallery-cell").length>1?s.addClass("multi-image"):s.addClass("single-image"),s.find(".gallery-cell").each(function(){var d=0;$(this).find(".action_button").each(function(){$button=$(this),$(this).width()>d&&(d=$(this).width())}),$(this).find(".action_button").width(d)})})},unload:function(n){var r=n.find(".js-homepage-slideshow");r.flickity("destroy")}},testimonial={init:function(){$(".js-testimonial").each(function(n,r){var s=$(this),h={slideshowSpeed:s.data("slideshow-speed")*1e3,slideshowTextAnimation:s.data("slideshow-text-animation")};if($(".testimonial-image").length>0&&$(".testimonial-block").each(function(){if($(this).find(".testimonial-image").length==0){var d=$(this).closest(".testimonial-block");$(d).addClass("set-testimonial-height")}}),!s.hasClass("flickity-enabled")){var l=s.find(".gallery-cell").length!==1;if(s.flickity({wrapAround:!0,cellAlign:"left",imagesLoaded:!0,prevNextButtons:l,draggable:l,pageDots:usePageDots,autoPlay:h.slideshowSpeed,arrowShape:arrowSize}),h.slideshowTextAnimation!=""){var f=s.data("flickity");setTimeout(function(){s.find(".gallery-cell:nth-child(1) .caption-content").addClass("animated "+h.slideshowTextAnimation)},400),s.on("select.flickity",function(){if(s.is(":visible")){var d=f.selectedIndex+1;setTimeout(function(){s.find(".caption-content").removeClass("animated "+h.slideshowTextAnimation),s.find(".gallery-cell:nth-child("+d+") .caption-content").addClass("animated "+h.slideshowTextAnimation)},400)}})}}s.find(".gallery-cell").length>1?s.addClass("multi-image"):s.addClass("single-image"),s.find(".gallery-cell").each(function(){var d=0;$(this).find(".action_button").each(function(){$button=$(this),$(this).width()>d&&(d=$(this).width())}),$(this).find(".action_button").width(d)})})},unload:function(n){var r=n.find(".js-testimonial");r.flickity("destroy")}},gallery={init:function(){$(".gallery-horizontal").find(".gallery-image-wrapper").each(function(){var n=$(this),r=$(this).find("img"),s,h;$("<img />").attr("src",$(r).attr("src")).on("load",function(){s=this.width,h=this.height,$(n).css("flex-basis",s*200/h),$(n).css("flex-grow",s*200/h),$(n).find("i").css("padding-bottom",h/s*100+"%")})}),lightboxGallery.init()}},supports_video=function(){return!!document.createElement("video").canPlayType},videoSection={init:function(){var n,r;$(".homepage-video").each(function(s,h){$(".homepage-video").length&&supports_video()&&(n=$(this),r=videoSection.getVideoSettings(n),is_touch_device()&&$(window).width()<=798&&r.posterImage===!1||$(window).width()<=798&&r.posterImage===!1||r.autoPlayVideo&&$(window).width()>798||r.autoPlayVideo===!1&&r.posterImage===!1?videoSection.appendFrame(n,r):(n.find(".homepage-video__placeholder").show(),n.find(".placeholder-svg--video").show()))}),$("body").on("click",".video__play-button",function(s){n=$(this).parents(".video-section").find(".homepage-video"),$(this).fadeOut(),r=videoSection.getVideoSettings(n),n.find(".mediaWrapper").length<1&&n.find("video").length<1&&videoSection.appendFrame(n,r)}),$("body").on("click","[data-play-video]",function(s){n=$(this).parents(".video-section").find(".homepage-video"),$(this).fadeOut(),r=videoSection.getVideoSettings(n),n.find(".mediaWrapper").length<1&&n.find("video").length<1&&videoSection.appendFrame(n,r)})},getVideoSettings:function(n){var r={container:n.find(".homepage-video"),header:n.find(".homepage-video--media"),posterImage:n.data("poster-image"),videoText:n.find(".homepage-video--media .caption"),videoTrigger:n.find("[data-play-video]"),autoPlayVideo:n.data("autoplay"),displayTextOverVideo:n.data("display-text-over-video"),autoloop:n.data("autoloop"),id:n.attr("data-video-src"),aspectRatio:n.attr("data-aspect-ratio").split(":"),provider:n.attr("data-provider").toLowerCase(),videoMP4:n.attr("data-video-mp4"),videoOGV:n.attr("data-video-ogv")};return r},createFrame:function(n){var r,s,h,l,f="";return n.provider==="youtube"?(n.autoloop?r="1&iv_load_policy=3&playlist="+n.id:r=0,n.posterImage===!1&&n.autoPlayVideo===!1?l=0:l=1,s=1,h='<iframe src="//www.youtube.com/embed/'+n.id+"?&autoplay="+l+"&loop="+r+'&rel=0&hd=1&showinfo=0&color=white&controls=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>'):n.provider==="vimeo"?(n.posterImage===!1&&n.autoPlayVideo===!1?l=0:l=1,n.autoloop?r=1:r=0,h='<iframe src="//player.vimeo.com/video/'+n.id+"?loop="+r+"&amp;title=0&amp;byline=0&amp;portrait=0&amp;color=3d96d2&autoplay="+l+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>'):n.provider==="html5"&&(n.posterImage!==!1&&(f=' poster="https://'+n.posterImage),n.posterImage===!1&&n.autoPlayVideo===!1&&is_touch_device()===0?l=" ":(n.autoPlayVideo&&n.posterImage!==!1&&(f=' poster="https://'+n.posterImage),l=" autoplay "),n.autoloop&&(r=' loop="loop" '),s="",h="<video "+s+l+r+f+' id="video" onclick="this.paused?this.play():this.pause();" ><source src="'+n.videoMP4+'" type="video/mp4"><source src="'+n.videoOGV+'" type="video/ogg" ></video>'),h},appendFrame:function(n,r){var s;if(r.displayTextOverVideo===!1&&r.videoText.fadeOut(),n.find(".video__play-button").fadeOut(),n.append(videoSection.createFrame(r)),r.provider!="html5"){var h=r.aspectRatio[1]/r.aspectRatio[0]*100+"%";n.find("iframe").mediaWrapper({intrinsic:!1,baseWidth:r.aspectRatio[0],baseHeight:r.aspectRatio[1]}),n.css({height:0,paddingBottom:h})}else n.find(".homepage-video__image").hide()},unload:function(n){n.find("[data-play-video]").off("click")}},cart={init:function(){$("#cart_form .tos_agree").length&&$("body").on("click","#cart_form input[type='submit']",function(){if($(this).parents("form").find(".tos_agree").is(":checked"))$(this).submit();else{var n='<p class="warning animated bounceIn">You must agree with the terms and conditions to checkout.</p>';return $("p.warning").length==0&&$(this).before(n),!1}})}};selectCallback=function(n,r){var s=$(".product-"+r.product.id),h=$(".notify-form-"+r.product.id),l=$(".product_form",s),f=l.data("variant-inventory");if(n&&n.featured_image&&s.is(":visible")){var d=$(".product_gallery",s);d.each(function(){var A=$(this),S=Flickity.data(this);if(A.is(":visible")&&S!=null){var T=$('[data-image-id="'+n.featured_image.id+'"]').data("index");S.select(T,!1,!0)}})}if(n){f&&f.forEach(function(A){A.id===n.id&&(n.inventory_quantity=A.inventory_quantity,n.inventory_management=A.inventory_management,n.inventory_policy=A.inventory_policy)}),$(".sku span",s).text(n.sku);for(var m=0,w=n.options.length;m<w;m++){var _=l.find('.swatch[data-option-index="'+escape(m)+'"] :radio[value="'+n.options[m].replace(/\"/g,'\\"')+'"]');_.length&&(_.get(0).checked=!0)}}if(n&&n.available==!0)n.price<n.compare_at_price?($(".was_price",s).html('<span class="money">'+Shopify.formatMoney(n.compare_at_price,l.data("money-format"))+"</span>"),$(".savings",s).html("You Save "+parseInt((n.compare_at_price-n.price)*100/n.compare_at_price)+'% (<span class="money">'+Shopify.formatMoney(n.compare_at_price-n.price,l.data("money-format"))+"</span>)"),$(".current_price",s).parent().addClass("sale")):($(".was_price",s).html(""),$(".savings",s).html(""),$(".current_price",s).parent().removeClass("sale")),n.inventory_management&&n.inventory_quantity>0||($(".items_left",s).text(""),$(".quantity",s).removeAttr("max")),$(".sold_out",s).text(""),n.price>0?$(".current_price",s).html('<span class="money">'+Shopify.formatMoney(n.price,l.data("money-format"))+"</span>"):$(".current_price",s).html("Free"),$(".add_to_cart",s).removeClass("disabled").removeAttr("disabled").find("span").text($(".add_to_cart",s).data("label")),$(".shopify-payment-button",s).show(),h.hide();else{var E=n?"Sold Out":"Unavailable";$(".was_price",s).text(""),$(".savings",s).text(""),$(".current_price",s).text(""),$(".items_left",s).text(""),$(".quantity",s).removeAttr("max"),$(".sold_out",s).text(E),$(".add_to_cart",s).addClass("disabled").attr("disabled","disabled").find("span").text(E),$(".shopify-payment-button",s).hide(),n&&h.fadeIn()}};var productPage={init:function(){var n=!0,r=!0,s=$(".product_gallery").data("autoplay");setTimeout(function(){imageFunctions.linkGalleryAndCarousel($(".js-product-page-gallery .product_gallery"),$(".js-product-page-gallery .product_gallery_nav"))},1e3),imageFunctions.zoom(".product_gallery",!1),$(".js-full-width-product-images").length&&imageFunctions.fullWidth(".product-template .product .description img",".js-full-width-product-images"),$(".product_gallery").hasClass("single-image")&&(n=!1,r=!1),$(".product_gallery").flickity({adaptiveHeight:!0,wrapAround:"true",cellAlign:"left",draggable:n,contain:!0,imagesLoaded:!0,lazyLoad:2,pageDots:usePageDots,prevNextButtons:r,autoPlay:s?6e3:!1,selectedAttraction:.01,friction:.15,arrowShape:arrowSize}),$(".js-product_section .product_form_options").each(function(){new Shopify.OptionSelectors($(this).data("select-id"),{product:$(this).data("product"),onVariantSelected:selectCallback,enableHistoryState:$(this).data("enable-state")})});var h=$(".notify_form .contact-form");h.each(function(){var l=$(this);l.on("submit",function(f){$('input[name="challenge"]',l).val()!=="true"&&($.ajax({type:l.attr("method"),url:l.attr("action"),data:l.serialize(),success:function(d){l.fadeOut("slow",function(){l.prev(".message").html("Thanks! We will notify you when this product becomes available!")})},error:function(d){$('input[name="challenge"]',l).val("true"),l.submit()}}),f.preventDefault())})}),$("body").on("change",".swatch :radio",function(){var l=$(this).closest(".swatch").attr("data-option-index"),f=$(this).val(),d=$(this).closest(".product_form");if(d.siblings(".notify_form").length)var m=d.siblings(".notify_form");else var m=$(".js-notify-form");var w=d.find(".swatch_options input:checked").eq(0).val(),_=d.find(".swatch_options input:checked").eq(1).val()||"",E=d.find(".swatch_options input:checked").eq(2).val()||"";if(w&&_&&E)var A=w+" / "+_+" / "+E;else if(w&&_)var A=w+" / "+_;else var A=w;m.find(".notify_form_message").attr("value",m.find(".notify_form_message").data("body")+" - "+A),$(this).closest("form").find(".single-option-selector").eq(l).val(f).trigger("change")}),lightboxGallery.init()},productSwatches:function(){if($(".js-product_section").length){var n=$(".js-product_section").find(".product_form");n.addClass("is-visible"),n.each(function(){var r=$(this).data("product"),s=$(this).data("product-id"),h=".product-"+s+" .js-product_section",l=$(this).find(".swatch_options .swatch");l.length>1&&Shopify.linkOptionSelectors(r,h)})}$(".js-product_section").length>1&&$("body").on("click",".swatch-element",function(){var r=$(this).data("value");$(this).siblings('input[value="'+r.replace(/\"/g,'\\"')+'"]').prop("checked",!0).trigger("change");var s=$(this).parents(".product_form").data("product"),h=$(this).parents(".product_form").data("product-id"),l=".product-"+h+" .js-product_section",f=$(this).parents(".product_form").find(".swatch_options .swatch");f.length>1&&Shopify.linkOptionSelectors(s,l)})},relatedProducts:function(){$(".js-related-products-slider .products-slider").each(function(n,r){var s=$(this).data("products-per-slide"),h=$(this).data("products-limit"),l=$(this).data("products-available"),f,d,m,w,_;s=="2"&&l>s&&h>s||s=="4"&&l>s&&h>s||s=="6"&&l>s&&h>s?f="left":f="center",l>s&&h>s?(d=!0,m=!0,w=!0):(d=!1,m=!1,w=!1),s=="2"&&l>s||s=="4"&&l>s||s=="6"&&l>s?_=0:s=="3"&&l?_=1:s=="5"&&l?_=2:s=="7"&&l&&(_=3),$(window).width()<=798&&(f="center",d=!0,m=!0,w=!0,_=1,$(this).parents(".even-num-slides").removeClass("even-num-slides")),$(this).flickity({lazyLoad:2,imagesLoaded:!0,draggable:d,cellAlign:f,prevNextButtons:m,wrapAround:w,pageDots:usePageDots,contain:!0,freeScroll:!0,arrowShape:arrowSize,initialIndex:_})})},initializeQuantityBox:function(){$("body").on("click",".js-change-quantity",function(){var n=$(this),r=$(this).siblings("input"),s=parseInt(r.val()),h=1e29,l=r.attr("min")||0;if(r.attr("max")!=null&&(h=r.attr("max")),isNaN(s)||s<l)return r.val(l),!1;if(s>h)return r.val(h),!1;n.data("func")=="plus"?s<h&&r.val(s+1):(s>l&&r.val(s-1),n.parents(".cart_item").length&&s-1==0&&n.closest(".cart_item").addClass("animated fadeOutUp")),r.trigger("change")})},unload:function(n){var r=n.find(".products-slider");r.flickity("destroy")}},newsletter_popup={init:function(){var n=Cookies.get("popup"),r=!0;if(r&&n=="open")return!1;newsletter_popup.open(),r&&Cookies.set("popup","open",{expires:14})},open:function(){$(window).width()>798&&setTimeout(function(){$("[data-remodal-id=newsletter]").remodal().open()},0*1e3)}},header={init:function(){var n=function(){$("body").removeClass("is-active"),$(".dropdown_link").removeClass("active_link"),$(".dropdown_container").hide(),$(".mobile_nav").find("div").removeClass("open")},r=function(){$("body").removeClass("is-active").removeClass("blocked-scroll"),$(".dropdown_link").toggleClass("active_link"),$(".cart_container").removeClass("active_link")},s=function(f){$("body").addClass("blocked-scroll"),$(".mobile_nav div").removeClass("open"),$(".dropdown_link").removeClass("active_link"),f.addClass("active_link")};if($(".dropdown_link--vertical").length&&($(".dropdown_link--vertical, .vertical-menu_submenu").on("mouseover",function(f){var d=$(this).parents(".main_nav").find('[data-dropdown="'+$(this).data("dropdown-rel")+'"]'),m=$(this).attr("data-click-count");$(".active_link").removeClass("active_link"),$(this).hasClass("active_link")||($(this).children("a").addClass("active_link"),$(".is-absolute").parent().removeClass("feature_image"))}),is_touch_device()&&$(".vertical-menu .sublink a, .vertical-menu_submenu .sublink a").on("touchstart click",function(f){f.stopPropagation();var d=$(this);f.type=="touchstart"?(clicked=!0,$(this).attr("data-click-count")<1&&(m(d),f.preventDefault())):f.type=="click"&&!clicked?$(this).attr("data-click-count")<1&&(m(d),f.preventDefault()):clicked=!1;function m(w){var _=$(w).parents(".main_nav").find('[data-dropdown="'+$(this).data("dropdown-rel")+'"]'),E=$(w).next(".vertical-menu_submenu"),A=$(w).attr("data-click-count");if($(".dropdown_link--vertical").not(w).attr("data-click-count",0),$(".dropdown_link--vertical").attr("data-no-instant",!0),$(".dropdown_container").hide(),_.show(),$(".vertical-menu_submenu").removeClass("is-visible"),E.addClass("is-visible"),f.type=="touchstart"&&(A++,$(w).attr("data-click-count",A),A<2))return f.preventDefault(),f.stopPropagation(),!1}})),$(".promo_banner").length){var h=Cookies.get("promo_banner");h!="dismiss"&&($("body").addClass("promo_banner-show"),$(".promo_banner").on("click",".promo_banner-close",function(){$("body").removeClass("promo_banner-show"),Cookies.set("promo_banner","dismiss",{expires:30})}))}if($(".vertical-menu_submenu, .vertical-menu_sub-submenu").each(function(){$(this).is(":off-right")&&$(this).addClass("vertical-menu--align-right")}),$("html").on("click",function(f){!$(f.target).closest(".cart_container").length&&$(".cart_content").is(":visible")&&r(),!$(f.target).closest(".dropdown_container").length&&$(".dropdown").is(":visible")&&n()}),$(window).width()>798){if($(".header").hasClass("header-fixed--true")){if($("body").on("click",'.banner a[href^="#"]',function(f){f.preventDefault();var d=$(this).attr("href"),m=$(".main_nav_wrapper.sticky_nav").outerHeight();$("html, body").animate({scrollTop:$(d).offset().top-m},2e3)}),!$(".main_nav_wrapper").hasClass("sticky_nav"))var l=new Headhesive(".main_nav_wrapper",{offset:700,throttle:300,classes:{clone:"sticky_nav",stick:"sticky_nav--stick",unstick:"sticky_nav--unstick"},onInit:function(){$(".sticky_nav .secondary_logo").css("display","none"),$(".sticky_nav .primary_logo").css("display","block"),$(".sticky_nav .icon-search").css("display","block"),$(".sticky_nav .search_container").css("display","none"),$(".sticky_nav .nav:last").prepend($(".header .cart_container").clone());var f=$(".sticky_nav").height()+5;$(".sticky_nav .mini_cart").css("height",$(".sticky_nav").height()+5),$(".sticky_nav .cart_content").css("top",$(".sticky_nav").height())},onUnstick:function(){$(".cart_container").removeClass("active_link")}})}else $(".header-fixed--true").removeClass("header-fixed--true"),$(".main_nav_wrapper").length>1&&$(".main_nav_wrapper").first().remove();$("img.primary_logo:visible")?$(".logo img",$(".feature_image .header")).attr("src",$(".logo img").data("src-home")):$(".logo img").attr("src",$(".logo img").data("src"))}else $("#header").hasClass("mobile_nav-fixed--true")?($("body").addClass("mobile_nav-fixed--true"),$("body").on("click",'.banner a[href^="#"]',function(f){f.preventDefault();var d=$(this).attr("href"),m=$("#header").outerHeight();$("html, body").animate({scrollTop:$(d).offset().top-m},2e3)})):$("body").addClass("mobile_nav-fixed--false");$(".cart_content").length<=2&&$("#header .cart_container").append($(".cart_content").clone()),is_touch_device()||$(window).width()<=798?($(".dropdown_link").attr("data-no-instant",!0),$("body").on("click",".dropdown_link",function(f){if($(".nav a").removeClass("active_link"),$("#header").is(":visible")){var d=$(this).parents("#header").find('[data-dropdown="'+$(this).data("dropdown-rel")+'"]');$(this).hasClass("mini_cart")||$(".cart_container").removeClass("active_link")}else{if($(this).hasClass("icon-search"))return window.location=$(this).attr("href"),!1;var d=$(this).parents(".main_nav").find('[data-dropdown="'+$(this).data("dropdown-rel")+'"]')}if(d.is(":visible")||d.attr("class")===void 0?(d.hide(),$("body").removeClass("is-active")):($(".dropdown_container").hide(),$(this).hasClass("cart_container")||$(".is-absolute").parent().removeClass("feature_image"),d.show(),$("body").addClass("is-active"),$(".mobile_nav").find("div").removeClass("open")),d.is(":visible"))return f.stopPropagation(),!1}),$("body").on("click",".mobile_nav",function(){$(this).find("div").toggleClass("open")}),$(".mini_cart").on("click",function(f){var d=$(this).parent();d.hasClass("active_link")?(r(),$("body").removeClass("blocked-scroll")):(s(d),$("body").addClass("blocked-scroll")),(is_touch_device()||$(window).width()<=798)&&f.preventDefault()}),$(".cart_content__continue-shopping").on("click",function(f){r()})):($(".nav a, .logo a").not(".cart_content a").on("mouseenter",function(){$(this).hasClass("active_link")||($(".dropdown_container").hide(),$(".active_link").removeClass("active_link"),$(".is-absolute").parent().addClass("feature_image"))}),$(".main_nav, .top_bar, .cart_container").on("mouseleave",function(){$(window).width()>798&&$(".dropdown_container").hide(),$(".active_link").removeClass("active_link"),$(".is-absolute").parent().addClass("feature_image")}),$(".dropdown_link, .dropdown_link--vertical").attr("data-click-count",0),$(".dropdown_link").on("mouseover touchstart",function(f){$(window).width()>798&&$(".dropdown_container").hide();var d=$(this).parents(".main_nav").find('[data-dropdown="'+$(this).data("dropdown-rel")+'"]'),m=$(this).attr("data-click-count");if($(".active_link").removeClass("active_link"),$(this).hasClass("active_link")||(d.show(),$(this).hasClass("mini_cart")?$(this).parent(".cart_container").addClass("active_link"):($(window).width()>798&&$(this).addClass("active_link"),$(".is-absolute").parent().removeClass("feature_image"))),is_touch_device()&&($(".dropdown_link").not(this).attr("data-click-count",0),$(".dropdown_link").attr("data-no-instant",!0),f.type=="touchstart"&&(m++,$(this).attr("data-click-count",m),m<2)))return f.preventDefault(),f.stopPropagation(),!1}))},removeDataAttributes:function(n){if($(n).length){var r,s=$(n),h,l=[],f=s.get(0).attributes,d=f.length;for(r=0;r<d;r++)f[r].name.substring(0,5)==="data-"&&l.push(f[r].name);$.each(l,function(m,w){s.removeAttr(w)})}},loadMegaMenu:function(){$(".sticky_nav .mega-menu").remove(),$(".header .mega-menu").remove(),$(".mega-menu-container .mega-menu").clone().appendTo(".sticky_nav .main_nav"),header.removeDataAttributes(".sticky_nav .mega-menu.dropdown_container .dropdown_column"),$(".mega-menu-container .mega-menu").each(function(n){var r=$(this).data("dropdown");$('[data-dropdown-rel="'+r+'"]').find("span").remove(),$('[data-dropdown-rel="'+r+'"]').not(".icon-search").append(' <span class="icon-down-arrow"></span>').addClass("mega-menu-parent").addClass("dropdown_link").removeClass("top_link"),$('[data-dropdown="'+r+'"]').each(function(s){$(this).hasClass("mega-menu")||$(this).remove()}),$(this).clone().appendTo(".header .main_nav")}),$(".dropdown_link--vertical").length&&($(".dropdown_link--vertical.mega-menu-parent + .vertical-menu_submenu").remove(),$(".dropdown_link--vertical:not(.mega-menu-parent)").each(function(n){var r=$(this).data("dropdown-rel");$('[data-dropdown="'+r+'"]').remove()})),$(".mega-menu-parent").on("mouseenter",function(){$(this).hasClass("active_link")||($(".dropdown_container").hide(),$(this).parents(".main_nav").find('[data-dropdown="'+$(this).data("dropdown-rel")+'"]').toggle(),$(this).addClass("active_link"),$(".is-absolute").parent().removeClass("feature_image"))}),header.removeDataAttributes(".header .mega-menu.dropdown_container .dropdown_column"),(is_touch_device()||$(window).width()<=798)&&$(".dropdown_link").attr("data-no-instant",!0),header.loadMobileMegaMenu()},loadMobileMegaMenu:function(){$(".mega-menu-container .mobile-mega-menu").each(function(n){$('[data-mobile-dropdown-rel="'+$(this).data("mobile-dropdown")+'"]').find("span").remove(),$('[data-mobile-dropdown-rel="'+$(this).data("mobile-dropdown")+'"] > a').append(' <span class="right icon-down-arrow"></span>').attr("data-no-instant","true"),$('[data-mobile-dropdown-rel="'+$(this).data("mobile-dropdown")+'"]').addClass("mobile-mega-menu-parent sublink"),$('[data-mobile-dropdown-rel="'+$(this).data("mobile-dropdown")+'"]').append(this),$('[data-mobile-dropdown-rel="'+$(this).data("mobile-dropdown")+'"] > ul').each(function(r){$(this).hasClass("mobile-mega-menu")||$(this).remove()})})},unloadMegaMenu:function(){$(".header .mega-menu").remove(),$(".mega-menu-container .mega-menu").each(function(n){var r=$(this).data("dropdown");$('.mega-menu-parent[data-dropdown-rel="'+$(this).data("dropdown")+'"]').find(".icon-down-arrow").remove()})},unload:function(){$("body").off("click",".mobile_nav"),$("body").off("click",".dropdown_link"),$("html").off("click"),$(".mini_cart").off("click"),$(".cart_content__continue-shopping").off("click"),$("body").off("click",'.banner a[href^="#"]')}},enableLoadMoreSearch=function(){$("body").on("click",".js-load-more a",function(n){return enableInfiniteSearchScroll(),n.stopPropagation(),!1})},enableInfiniteSearchScroll=function(){if($(".search-matrix").length)var n=new Waypoint.Infinite({element:$(".search-matrix")[0],items:".search-matrix",more:".load-more__btn",loadingClass:"loading-in-progress",onBeforePageLoad:function(){$(".js-load-more").hide()},onAfterPageLoad:function(r){}})},enableLoadMoreProducts=function(){$("body").on("click",".js-load-more a",function(n){return enableInfiniteScroll(),n.stopPropagation(),!1})},enableInfiniteScroll=function(){if($(".collection-matrix").length)var n=new Waypoint.Infinite({element:$(".collection-matrix")[0],items:".collection-matrix",more:".load-more__btn",loadingClass:"loading-in-progress",onBeforePageLoad:function(){$(".js-load-more").hide()},onAfterPageLoad:function(r){}})};if(Shopify.queryParams={},location.search.length)for(var aKeyValue,i=0,aCouples=location.search.substr(1).split("&");i<aCouples.length;i++)aKeyValue=aCouples[i].split("="),aKeyValue.length>1&&(Shopify.queryParams[decodeURIComponent(aKeyValue[0])]=decodeURIComponent(aKeyValue[1]));var quickFilter={init:function(){var n=[],r="",s="",h="https://"+$.url("hostname"),l=$.url("1")?"/"+$.url("1")+"/":"",f=$.url("2")?$.url("2")+"/":"",d=$.url("3"),m=l+f;$("#sort-by").length?r=$("#sort-by").val():r=url("?sort_by"),$("#tag_filter").length&&$("#tag_filter").data("default-collection")!=$("#tag_filter").val()&&(urlTag=$("#tag_filter").val().substr($("#tag_filter").val().lastIndexOf("/")+1),urlTag!="all"&&($.inArray(urlTag,n)>-1||n.unshift(urlTag))),$("[data-option-filter] input:checked").each(function(){n.push($(this).val())}),n=$.makeArray(n),$.each(n,function(w,_){w!=n.length-1?s+=n[w]+"+":s+=n[w]}),Shopify.queryParams.sort_by=r,r="?"+$.param(Shopify.queryParams),quickFilter.processUrl(m,s,r)},updateView:function(n){$.ajax({type:"GET",url:n,beforeSend:function(){$(".collection-matrix").addClass("fadeOut animated loading-in-progress filter-loading"),Waypoint.destroyAll()},success:function(r){$(".collection-matrix").removeClass("loading-in-progress"),$(".collection-matrix").removeClass("filter-loading");var s=$(r).find(".breadcrumb_text").html();$(".breadcrumb_text").html(s);var h=$(r).find(".paginate").html();$(".paginate").html(h);var l=$(r).find(".sidebar").html();$(".sidebar").html(l);var f=$(r).find(".paginate").html();$(".paginate").empty(),$(".paginate").html(f);var d=$(r).find(".collection-matrix");$(".collection-matrix").remove(),d.insertBefore($(".load-more__icon")),window.history&&window.history.pushState&&window.history.pushState("","",n),$(".sidebar__collection-filter").length&&collectionSidebarFilter.init()},error:function(r,s,h){console.log(r),console.log(s),console.log(h),location.replace(location.protocol+"//"+location.host+n)},dataType:"html"})},processUrl:function(n,r,h){var h=h.replace(/\page=(\w+)&/,""),l="";l=n+r+h,quickFilter.updateView(l)}};$("#sort-by").val($("#sort-by").data("default-sort")),$("body").on("change","#tag_filter, #sort-by",function(){quickFilter.init()}),$("body").on("change","#blog_filter",function(){var n=$(this).val();window.location=n}),$("input, select, textarea").on("focus blur",function(n){$("meta[name=viewport]").attr("content","width=device-width,initial-scale=1,maximum-scale="+(n.type=="blur"?10:1))});var searchAutocomplete={init:function(){var n=null,r=$("body").data("shop-url"),s=r+"/search?type=product&q=";$(".search_form, .search__form").on("submit",function(l){var f=$(this).find('input[name="q"]').val(),d=encodeURI(f);l.preventDefault(),d==null?window.location.href="/search":window.location.href=s+d+"*"});var h=$("form.search_form, form.search, form.header_search_form").each(function(){var l=$(this).find('input[name="q"]');$('<div class="search__results-wrapper"><ul class="search__results"></ul></div>').appendTo($(this)),l.attr("autocomplete","off").bind("keyup change",function(){l.val()==""&&($(".search__results").hide(),$(".search__results").empty());var f=$(this).val(),d=encodeURI(f),m=$(this).closest("form"),w=s+d,_=m.find(".search__results");f.length>=3&&(n!=null&&n.abort(),n=$.getJSON(w+"*&view=json",function(E){_.empty(),E.results_count==0?_.hide():($.each(E.results,function(A,S){if(A>=5)return!1;var T=$("<a></a>").attr("href",S.url);if(S.object_type=="product"){var j=[];for(i=0;i<S.collections.length;i++)j.push(S.collections[i].handle);if($.inArray("coming-soon",j)!=-1)var L="Coming Soon";else if(S.available==!0)if(S.raw_compare>S.raw_price)var L='<span class="was_price">'+S.compare+"</span> "+S.price;else if(S.price_varies&&S.price_min>0)var L="from "+S.price;else if(S.price>0||S.raw_price>0)var L=S.price;else var L="Free";else var L="Sold Out";S.thumbnail!="NULL"&&T.append('<div class="thumbnail"><img class="lazyload blur-up" src="'+S.thumbnail+'" /></div>'),T.append('<div class="title">'+S.title+'<br><span class="item-pricing">'+L+"</span></div>")}else S.object_type=="article"?(S.thumbnail!="NULL"&&T.append('<div class="thumbnail"><img class="lazyload blur-up" src="'+S.thumbnail+'" /></div>'),T.append('<div class="title">'+S.title+'<br><span class="item-pricing">'+S.text_content+"</span></div>")):S.object_type=="page"&&T.append('<div class="title">'+S.title+'<br><span class="item-pricing">'+S.text_content+"</span></div>");T.wrap('<li class="item-result result--'+S.object_type+'"></li>'),_.append(T.parent())}),E.results_count>=5&&_.append('<li class="all-results"><span class="title see-all"><a href="'+w+'*">View all results ('+E.results_count+")</a></span></li>"),_.fadeIn(200))}))})});$(document).on("click",function(l){var f=$("[data-autocomplete-true]");!f.is(l.target)&&f.has(l.target).length===0&&$("[data-autocomplete-true]").find(".search__results-wrapper").hide()}),$("[data-autocomplete-true] input").on("focus",function(){$(".search__results-wrapper").hide(),$(this).parents("[data-autocomplete-true]").find(".search__results-wrapper").show()})},unload:function(){$("body").off("focus","[data-autocomplete-true] input")}},collectionSidebarFilter={init:function(){$(".filter-active-tag input:checked").parents(".filter-active-tag").siblings(".filter-all-tags").hide(),$(".toggle-all--true .toggle_list .filter-active-tag input:checked").parents("ul.toggle_list").prev().click(),($.url(2)==="types"||$.url(2)==="vendors")&&$(".sidebar__collection-filter").remove(),$(".sidebar-block:empty").prev().css("border-bottom","none")},clearAllFilters:function(){$("[data-option-filter] input").attr("checked",!1),$("[data-option-filter] input").trigger("change")},clearSelectedFilter:function(n){n.find("[data-option-filter] input").attr("checked",!1),n.find("[data-option-filter] input").trigger("change")}};$("body").on("change","[data-option-filter] input",function(){quickFilter.init(),$("html, body").animate({scrollTop:$("#pagecontent").offset().top},500)}),$("body").on("click","[data-reset-filters]",function(){collectionSidebarFilter.clearAllFilters()}),$("body").on("click","[data-clear-filter]",function(){var n=$(this).parents(".filter-active-tag");collectionSidebarFilter.clearSelectedFilter(n)});var faqAccordion={init:function(){var n=0,r=$(".faqAccordion > dt > button");$(".faqAccordion > dd").attr("aria-hidden",!0),r.attr("aria-expanded",!1),r.on("click activate",function(){if(n)return!1;n=1;var s=$(this).attr("aria-expanded")==="false";return $(this).attr("aria-expanded",s),$(this).parent().next().slideToggle(function(){n=0}),$(this).parent().next().attr("aria-hidden",!s),!1}),r.on("keydown",function(s){var h=s.keyCode||e.which;h===13&&$(this).trigger("activate")})}},arrowSize={x0:10,x1:60,y1:50,x2:62,y2:40,x3:22},lightboxGallery={init:function(){if($(".lightbox img").length){var n,r=$("a.lightbox"),s=[];r.each(function(h){s.push($(this).attr("rel")),s=s.filter(function(l,f,d){return d.indexOf(l)===f})}),$.each(s,function(h,l){$(".lightbox[rel="+l+"]").attr("data-remodal-target","lightbox-id-"+h);var f=['<div class="remodal remodal-lightbox js-remodal-lightbox js-lightbox-'+h+'" data-rel="'+l+'" data-remodal-id="lightbox-id-'+h+'" data-remodal-options="hashTracking: false">','<a data-remodal-action="close" class="remodal-close"></a>','<div class="lightbox-gallery"></div>',"</div>"].join("");$("body").append(f),$(".lightbox[rel="+l+"]").each(function(d){$(this).attr("data-image-id",d),$(this).attr("data-no-instant","")})})}}},utils={createAccordion:function(n,r,s){var h=$(n),l=$(n).find(r),f=$(n).find(s),d=n+" "+r;if(n.indexOf(".accordion-tabs")>=0){var m=$.map(l,function(w,_){return[w,f[_]]});h.empty(),$.each(m,function(w,_){h.append(this)}),f.removeClass("active"),h.find(".active").next().slideToggle(),r=n+"> a"}$(n).children("a").each(function(w,E){var E=$(this),A=E.attr("href");E.attr("data-tab-value",A),E.removeAttr("href")}),$(n).find(r+".active").next().slideToggle(),$("body").on("click",d,function(w){w.preventDefault(),$(this).toggleClass("active"),$(this).next().slideToggle()})},mobileAccordion:function(n,r,s){$container=$(n),$tab=$(n).find(r),$content=$(n).find(s),$(r+".active").next().slideToggle(),$("body").on("click",r,function(h){h.preventDefault(),$(this).toggleClass("active"),$(this).next().slideToggle()})},mobileParentActiveAccordion:function(n,r,s){$container=$(n),$tab=$(n).find(r),$content=$(n).find(s),$(r+".active").parent().next().slideToggle(),$("body").on("click",r,function(h){h.preventDefault(),$(this).toggleClass("active"),$(this).parent().next().slideToggle()})},initializeTabs:function(){$("ul.tabs > li > a").attr("data-no-instant",!0),$("body").on("click","ul.tabs > li > a",function(n){n.preventDefault();var r=$(this).attr("href");r.charAt(0)=="#"&&($("ul.tabs > li > a.active").removeClass("active"),$(this).addClass("active"),$(this).parents("ul.tabs").next().find(r).show().css({display:"block"}).addClass("active").siblings().hide().removeClass("active"))})},pageBannerCheck:function(){!$(".page_banner").length>0||$(".header").hasClass("header-background--solid")?($(".feature_image").removeClass("feature_image"),$(".header.is-absolute").removeClass("is-absolute"),$(".secondary_logo--true").find(".secondary_logo").css("display","none"),$(".secondary_logo--true").find(".primary_logo").css("display","block")):($(".header").parent().addClass("feature_image"),$(".header").addClass("is-absolute"),$("header.feature_image").hasClass("secondary_logo--true")&&($(".secondary_logo--true").find(".secondary_logo").css("display","block"),$(".secondary_logo--true").find(".primary_logo").css("display","none"))),$(".index-sections").children().first().hasClass("under-menu")?($(".header").hasClass("header-background--solid")||($(".index .header").parent().addClass("feature_image"),$(".index .header").addClass("is-absolute")),$("header.feature_image").hasClass("secondary_logo--true")&&($(".secondary_logo--true").find(".secondary_logo").show(),$(".secondary_logo--true").find(".primary_logo").hide())):($(".index .feature_image").removeClass("feature_image"),$(".index .header.is-absolute").removeClass("is-absolute"),$("header.feature_image").hasClass("secondary_logo--true")||($(".secondary_logo--true").find(".secondary_logo").hide(),$(".secondary_logo--true").find(".primary_logo").show())),$(".detail-sections").children().first().hasClass("under-menu")?($(".header").hasClass("header-background--solid")||($('[class^="page-details"] .header').parent().addClass("feature_image"),$('[class^="page-details"] .header').addClass("is-absolute")),$("header.feature_image").hasClass("secondary_logo--true")&&($(".secondary_logo--true").find(".secondary_logo").show(),$(".secondary_logo--true").find(".primary_logo").hide())):($('[class^="page-details"] .feature_image').removeClass("feature_image"),$('[class^="page-details"] .header.is-absolute').removeClass("is-absolute"),$("header.feature_image").hasClass("secondary_logo--true")||($(".secondary_logo--true").find(".secondary_logo").hide(),$(".secondary_logo--true").find(".primary_logo").show()))},resizeActionButtons:function(){$(".js-caption:visible").each(function(){var n=0;$(this).find(".action_button").each(function(){$button=$(this),$(this).width()>n&&(n=$(this).width())}),$(this).find(".action_button").width(n)})}},sliderBlock={select:function(n,r){var s=r.find(".gallery-cell"),h=s.map(function(){return String($(this).data("block-id"))}),l=r.find(".js-homepage-slideshow"),f={slideshowTextAnimation:l.data("slideshow-text-animation")},d=l.data("flickity");l.flickity("pausePlayer");for(var m=0;m<h.length;m++)if(h[m]===n){var w=m;w!==d.selectedIndex&&l.flickity("select",parseInt(w),!1,!0)}},deselect:function(n){var r=n.find(".flexslider").data("flexslider");r&&r.flickity("unpausePlayer")}};$(function(){var oldFlickityCreate=window.Flickity.prototype._create;window.Flickity.prototype._create=function(){var n=this;return this.element.addEventListener&&this.element.addEventListener("load",function(){n.onresize()},!0),this._create=oldFlickityCreate,oldFlickityCreate.apply(this,arguments)},header.loadMegaMenu(),header.init(),searchAutocomplete.init(),utils.pageBannerCheck(),slideshow.init(),testimonial.init(),gallery.init(),videoSection.init(),featuredPromotions.init(),featuredCollectionSection.init(),collectionSidebarFilter.init(),cart.init(),productPage.initializeQuantityBox(),productPage.init(),productPage.relatedProducts(),recentlyViewed.init();var resizeTimeout;window.addEventListener("resize",function(n){resizeTimeout||(resizeTimeout=setTimeout(function(){resizeTimeout=null,$(window).width()<=798&&(cart.init(),header.unload(),header.init())},66))},!1);var currentValue=$(".search_form input[name='q']").val();if($(".search_form input[name='q']").length>0&&$(".search_form input[name='q']").val(currentValue.replace("*","")),$("body").on("click",".lightbox",function(){currentSlide=$(this).data("image-id")}),$(document).bind("touchstart",function(n){touchStartPos=$(window).scrollTop()}).bind("touchend",function(n){var r=touchStartPos-$(window).scrollTop();(r>20||r<-20)&&n.preventDefault}),$("body").on("opened",".js-remodal-lightbox",function(){var n=$(this),r=$(this).data("rel"),s=$(".lightbox[rel="+r+"]").parent().clone(),h=s.length!==1,l=s.length!==1,f=n.find(".lightbox-gallery").hasClass("flickity-enabled"),d=n.find(".lightbox-gallery")[0];$(this).find("a.lightbox").removeAttr("href").removeAttr("data-remodal-target");var m=new Flickity(d,{wrapAround:"true",cellAlign:"center",contain:!0,imagesLoaded:!0,lazyLoad:2,pageDots:usePageDots,draggable:l,prevNextButtons:h,arrowShape:arrowSize,adaptiveHeight:!0});f||m.insert(s),m.select(currentSlide,!1,!0),d.focus(),n.find(".overlay").remove(),n.find(".zoomImg").remove(),n.find("img").removeClass("lazyautosizes").attr("sizes","2000px").css("opacity","1")}),$("body").on("click",".lightbox",function(){currentSlide=$(this).data("image-id")}),$("body").on("click",".sidebar .parent-link--false",function(n){n.preventDefault(),$menu=$(this).parent("li"),$menu.find(".menu-toggle").toggleClass("active"),$menu.find("ul").slideToggle()}),$("body").on("closed",".js-remodal-lightbox",function(){var n=$(this);n.find("img").css("opacity","0")}),window.location.pathname.indexOf("/comments")!=-1&&$("html,body").animate({scrollTop:$("#new-comment").offset().top-140},"slow"),$("body").on("mouseenter",".icon-search",function(){$(".search-terms").focus()}),$("body").on("click",".icon-search",function(){$("input.search-terms").focus()}),$("body").on("click",".search-submit",function(){$(this).parent().submit()}),$(window).width()>798&&($(".animate_right").waypoint(function(){$(this.element).addClass("animated fadeInRight")},{offset:"70%"}),$(".animate_left").waypoint(function(){$(this.element).addClass("animated fadeInLeft")},{offset:"70%"}),$(".animate_up").waypoint(function(){$(this.element).addClass("animated fadeInUp")},{offset:"70%"}),$(".animate_down").waypoint(function(){$(this.element).addClass("animated fadeInDown")},{offset:"70%"})),$(".slider, .flexslider").find("li").unwrap(),$(".slider, .flexslider").flickity({pageDots:usePageDots,imagesLoaded:!0,arrowShape:arrowSize,lazyLoad:2}),utils.createAccordion(".toggle-all--true","h4.toggle","ul.toggle_list"),utils.createAccordion(".footer_menu","h6","ul"),utils.createAccordion(".footer_content","h6","div.toggle_content"),utils.createAccordion(".product_section .accordion-tabs",".tabs li > a",".tabs-content li"),utils.mobileParentActiveAccordion("#mobile_menu","li.sublink > a.parent-link--true span","li.sublink ul"),utils.mobileAccordion("#mobile_menu","li.sublink > a.parent-link--false","li.sublink ul"),utils.initializeTabs(),utils.resizeActionButtons(),faqAccordion.init(),$(window).on("resize",function(){utils.resizeActionButtons()}),$(window).width()<=798&&utils.createAccordion(".toggle-all--false","h4.toggle","ul.toggle_list"),$("body").on("click",".menu-toggle",function(n){var r=$(this).next("ul");r.slideToggle(),$(this).toggleClass("active"),$(this).attr("aria-expanded",$(this).attr("aria-expanded")=="true"?"false":"true")}),$(".shopify-section.page-details-section, .shopify-section.product-details-section").length||($("body").hasClass("index")?$(".featured-products-section iframe[src*=youtube], .featured-products-section iframe[src*=vimeo]").mediaWrapper({intrinsic:!0}):$("iframe[src*=youtube], iframe[src*=vimeo]").mediaWrapper({intrinsic:!0})),$(window).width()>=959){var modal_width="870px";($(window).width()>=1200||$("html").hasClass("ie"))&&(modal_width="1110px")}var $contact_form=$(".newsletter .contact-form");$contact_form.each(function(){var n=$(this);n.on("submit",function(r){$('input[name="challenge"]',n).val()!=="true"&&($.ajax({type:n.attr("method"),url:n.attr("action"),data:n.serialize(),success:function(s){n.fadeOut("slow",function(){n.prev(".message").html("Thank you for joining our mailing list!")})},error:function(s){$('input[name="challenge"]',n).val("true"),n.submit()}}),r.preventDefault())})}),$(".maps").click(function(){$(".maps iframe").css("pointer-events","auto")}),enableLoadMoreProducts();var globalQuickShopProduct;$("body").on("change",".currencies",function(n){$("[data-initial-modal-price]").attr("data-initial-modal-price","")}),$("body").on("change",".js-quick-shop select",function(n){var r=$('.js-quick-shop select[name="id"]').val();r&&globalQuickShopProduct&&quickShop.updateVariant(r)});var quickShop={init:function(){var n,r,s;$("body").on("click",".js-quick-shop-link",function(h){h.preventDefault();for(var l=$(this).data("images").trim("||").split("||"),f=[],d=[],m=0;m<l.length;m+=2)f.push(l[m]),l[m+1]&&d.push(l[m+1]);n={handle:$(this).data("handle"),product_id:$(this).data("id"),single_variant:$(this).attr("data-single-variant"),product_in_collection_url:$(this).data("url"),escaped_title:$(this).data("title"),details_text:$(this).data("details-text"),full_description:$(this).data("full-description"),regular_description:$(this).data("regular-description"),image_ids:f.filter(function(w){return w!==""}),image_alts:d,collection_handles:$(this).data("collection-handles").trim(",").split(","),money_format:$(this).data("money-format")},$(".js-gallery-modal").hasClass("flickity-enabled")||$(".js-gallery-modal").flickity({wrapAround:"true",cellAlign:"left",contain:!0,imagesLoaded:!0,lazyLoad:2,pageDots:usePageDots,prevNextButtons:!0,autoPlay:autoplay,selectedAttraction:.01,friction:.15,arrowShape:arrowSize}),s=$(this).next(".js-forms").find(".notify_form"),r=$(this).next(".js-forms").find(".product_form"),$(".quick-shop .container").attr("class","container section product-"+n.product_id),$(".quick-shop .container").attr("id","product-"+n.product_id),$(".quick-shop .container").attr("data-id",n.product_id),quickShop.retrieveProductInfo(n)}),$("body").on("opened",".js-quick-shop",function(){$(".remodal.quick-shop .js-product-form").html(r),$(".remodal.quick-shop .js-notify-form").html(s),$(r).hasClass("product_form_options")&&!$(r).hasClass("viewed")&&new Shopify.OptionSelectors($(r).data("select-id"),{product:$(r).data("product"),onVariantSelected:selectCallback,enableHistoryState:$(r).data("enable-state")});var h=$(r).data("product"),l=$(r).find(".swatch_options .swatch");l.length>1&&Shopify.linkOptionSelectors(h,".js-quick-shop"),utils.initializeTabs(),$('.js-quick-shop select[name="id"]').trigger("change")}),$("body").on("closed",".js-quick-shop",function(h){var l=$(".js-quick-shop .product_form"),f=$(".js-quick-shop .notify_form");$(".form-holder-"+n.product_id).append(l),$(".form-holder-"+n.product_id).append(f),$(".form-holder-"+n.product_id+" .product_form").addClass("viewed"),$(".form-holder-"+n.product_id+" .notify_form").addClass("viewed");var d=$(".js-current-price .money").text();if($(".js-quick-shop-link[data-id="+n.product_id+"]").attr("data-initial-modal-price",d),$(".js-current-price, .js-was-price, .js-savings").empty(),$(".js-product_section").length){var m=$(".js-product_section").find(".product_form"),w=m.data("product"),_=m.data("product-id"),E=".product-"+_+" .js-product_section",A=m.find(".swatch_options .swatch");A.length>1&&Shopify.linkOptionSelectors(w,E)}})},retrieveProductInfo:function(n){$.ajax({dataType:"json",async:!1,cache:!1,url:"/products/"+n.handle+".js",success:function(s){var s=$.extend({},s,n);quickShop.populateGallery(s),globalQuickShopProduct=s,quickShop.updateVariant(s.variants[0].id.toString())}})},updateVariant:function(n){if($(".js-sale-banner, .js-sold-out, .js-current-price, .js-was-price, .js-savings, .js-new-banner, .js-pre-order-banner").empty(),globalQuickShopProduct!="undefined"){var r=globalQuickShopProduct;$(".modal_price, .js-notify-form").show(),$(".js-product-title").html('<a href="'+r.product_in_collection_url+'" title="'+r.escaped_title+'">'+r.title+"</a>"),$(".js-product-vendor").html('<a href="/collections/vendors?q='+r.vendor+'">'+r.vendor+"</a>"),$(".js-full-description").html(r.full_description),$(".js-regular-description").html(r.regular_description);var s='<a href="'+r.product_in_collection_url+'" class="secondary_button" title="'+r.escaped_title+' Details">'+r.details_text+"</a>";if($(".js-product-details").html(s),$.each(r.collection_handles,function(l,f){this.toString()=="new"&&$(".js-new-banner").html("New"),this.toString()=="pre-order"&&$(".js-pre-order-banner").html("Pre-Order"),this.toString()=="coming-soon"&&(r.price="Coming Soon")}),r.single_variant=="true")r.compare_at_price>r.price&&$(".js-sale-banner").html("Sale"),r.compare_at_price>r.price?$(".js-current-price").addClass("sale"):$(".js-current-price").removeClass("sale"),r.available==!1&&$(".js-sold-out").html("Sold Out"),r.available==!0&&(r.compare_at_price>r.price&&($(".js-was-price").html('<span class="money">'+Shopify.formatMoney(r.compare_at_price,r.money_format)+"</span>"),$(".js-savings").html("You Save "+parseInt((r.compare_at_price-r.price)*100/r.compare_at_price)+'% (<span class="money">'+Shopify.formatMoney(r.compare_at_price-r.price,r.money_format)+"</span>)")),r.price=="Coming Soon"?$(".js-current-price").html("Coming Soon"):r.price?$(".js-current-price").html('<span class="money">'+Shopify.formatMoney(r.price,r.money_format)+"</span>"):$(".js-current-price").html("Free"));else for(var h=0;h<r.variants.length;h++)n==r.variants[h].id.toString()&&(r.variants[h].compare_at_price>r.variants[h].price&&$(".js-sale-banner").html("Sale"),r.variants[h].compare_at_price>r.variants[h].price?$(".js-current-price").addClass("sale"):$(".js-current-price").removeClass("sale"),r.variants[h].available==!1&&$(".js-sold-out").html("Sold Out"),r.variants[h].available==!0&&(r.variants[h].compare_at_price>r.variants[h].price&&($(".js-was-price").html('<span class="money">'+Shopify.formatMoney(r.variants[h].compare_at_price,r.money_format)+"</span>"),$(".js-savings").html("You Save "+parseInt((r.variants[h].compare_at_price-r.variants[h].price)*100/r.variants[h].compare_at_price)+'% (<span class="money">'+Shopify.formatMoney(r.variants[h].compare_at_price-r.variants[h].price,r.money_format)+"</span>)")),r.variants[h].price=="Coming Soon"?$(".js-current-price").html("Coming Soon"):r.variants[h].price?$(".js-current-price").html('<span class="money">'+Shopify.formatMoney(r.variants[h].price,r.money_format)+"</span>"):$(".js-current-price").html("Free")))}$(".js-quick-shop .text-modal-wrap iframe[src*=youtube], .js-quick-shop .text-modal-wrap iframe[src*=vimeo]").mediaWrapper({intrinsic:!0})},populateGallery:function(n){var r=$(".js-gallery-modal"),s=$(".js-gallery-carousel");$(document).on("closed",".js-quick-shop",function(d){r.flickity("remove",$(".js-gallery-modal .gallery-cell")),s.empty()});function h(d){$.each(n.images,function(m,w){var _=w.replace(/(\.[^.]*)$/,"_grande$1").replace("http:",""),E=w.replace(/(\.[^.]*)$/,"_1024x1024$1").replace("http:",""),A=w.replace(/(\.[^.]*)$/,"_2048x2048$1").replace("http:",""),S=n.image_alts[m],T;S.indexOf("youtube")>=0?T='<div class="video-container youtube"><div>'+S+"</div></div>":S.indexOf("vimeo")>=0?T='<div class="video-container vimeo"><div>'+S+"</div></div>":T='<img src="'+_+'" data-src="'+E+'" alt="'+S+'" data-image-id="'+n.image_ids[m].trim()+'" data-index="'+m+'" srcset="'+_+" 600w, "+E+" 1024w, "+A+' 2048w" sizes="(min-width: 800px) 50vw, 100vw"/>';var j=$('<div class="gallery-cell">'+T+"</div>");r.flickity("append",j)}),r.removeClass("single-image multi-image").addClass(d?"multi-image":"single-image")}function l(){$.each(n.images,function(d,m){var w=m.replace(/(\.[^.]*)$/,"_grande$1").replace("http:",""),_='<img src="'+w+'" alt="'+escape(n.image_alts[d])+'" />',E=$('<div class="gallery-cell">'+_+"</div>");s.append(E)}),imageFunctions.linkGalleryAndCarousel(r,s)}var f;n.images.length>1?(f=!0,h(f),l()):(f=!1,h(f)),imageFunctions.zoom(".js-gallery-modal",!1)}};function ajaxSubmitCart(n){$cart=n,$.ajax({url:"/cart/update.js",dataType:"json",cache:!1,type:"post",data:$cart.serialize(),success:function(r){refreshCart(r)}})}function ajaxUpdateCart(n,r,s){$.ajax({url:"/cart/change.js",dataType:"json",cache:!1,type:"post",data:{quantity:r,line:n},success:function(h){refreshCart(h);var l=n-1;if(typeof h.items[l]=="undefined")var f=0;else var f=h.items[l].quantity;if(r>0&&r!=f){f==1?items_left_text="item left":items_left_text="items left",$(".warning--quantity").remove();var d='<p class="warning warning--quantity animated bounceIn">'+f+" "+items_left_text+"</p>";s.find("input[data-line-id='"+n+"']").parent().after(d),s.find("input[data-line-id='"+n+"']").val(f)}else s.is("#cart_form")&&$("#cart_form").submit()}})}function refreshCart(n){$(".cart_count").empty(),$cartBtn=$(".cart_count");var r=$cartBtn.text()||"0",s="",h="",l="",f=$(".cart_content form"),d=0,m=0;$cartBtn.text(r.replace(/[0-9]+/,n.item_count)),n.item_count==0?($(".js-empty-cart__message").removeClass("hidden"),$(".js-cart_content__form").addClass("hidden")):($(".js-empty-cart__message").addClass("hidden"),$(".js-cart_content__form").removeClass("hidden"),$.each(n.items,function(w,_){var E=w+1;s+='<li class="cart_item clearfix"><a href="'+_.url+'">',_.image&&(s+='<div class="cart_image"><img src="'+_.image.replace(/(\.[^.]*)$/,"_compact$1").replace("http:","")+'" alt="'+htmlEncode(_.title)+'" /></div>'),s+="</a>",s+='<div class="cart_item__title"><div class="item_title">',s+='<a href="'+_.url+'">'+_.title,_.properties&&$.each(_.properties,function(A,S){S&&(s+='<div class="line-item">'+A+": "+S+"</div>")}),s+="</a>",s+='<strong class="right price">',s+='<span class="money">'+Shopify.formatMoney(_.price,$("body").data("money-format"))+"</span></strong></div>",s+="</div>",s+='<div class="left product-quantity-box"><span class="ss-icon product-minus js-change-quantity" data-func="minus"><span class="icon-minus"></span></span><input type="number" min="0" class="quantity" name="updates[]" id="updates_'+_.id+'" value="'+_.quantity+'" data-line-id="'+E+'" /><span class="ss-icon product-plus js-change-quantity" data-func="plus"><span class="icon-plus"></span></span></div></div>'}),h+='<span class="right"><span class="money">'+Shopify.formatMoney(n.total_price,$("body").data("money-format"))+"</span></span><span>Subtotal</span>",m>0?l='<span class="right"><span class="money">'+Shopify.formatMoney(m-d,$("body").data("money-format"))+"</span></span><span>Total Savings</span>":l=""),$(".js-cart_items").html(s),$(".js-cart_subtotal").html(h),$(".js-cart_savings").html(l)}if($("body").on("change","#cart_form input.quantity",function(){ajaxUpdateCart($(this).data("line-id"),$(this).val(),$(this).parents("#cart_form"))}),$("body").on("change",".cart_content input.quantity",function(){ajaxUpdateCart($(this).data("line-id"),$(this).val(),$(this).parents(".cart_content"))}),$("body").on("submit",".product_form form",function(e){e.preventDefault();var $addToCartForm=$(this),$addToCartBtn=$addToCartForm.find(".add_to_cart");return $.ajax({url:"/cart/add.js",dataType:"json",cache:!1,type:"post",data:$addToCartForm.serialize(),beforeSend:function(){$addToCartBtn.attr("disabled","disabled").addClass("disabled"),$addToCartBtn.find("span").removeClass("fadeInDown").addClass("animated zoomOut")},success:function(n){$addToCartBtn.find(".checkmark").addClass("checkmark-active"),window.setTimeout(function(){$addToCartBtn.removeAttr("disabled").removeClass("disabled"),$addToCartBtn.find(".checkmark").removeClass("checkmark-active"),$addToCartBtn.find("span").removeClass("zoomOut").addClass("fadeInDown")},1e3),$.ajax({url:"/cart.js",dataType:"json",cache:!1,success:function(r){if(refreshCart(r),$("html").hasClass("remodal-is-locked")&&$(".remodal-close").click(),$("body").addClass("cartisopen"),$(window).width()<=798){var s=$(this).parent();s.hasClass("active_link"),$("body").addClass("blocked-scroll")}}})},error:function(XMLHttpRequest){var response=eval("("+XMLHttpRequest.responseText+")");response=response.description,$(".warning").remove();var warning='<p class="warning animated bounceIn">'+response.replace("All 1 ","All ")+"</p>";$addToCartForm.after(warning),$addToCartBtn.removeAttr("disabled").removeClass("disabled"),$addToCartBtn.find("span").text("Add to Cart").removeClass("zoomOut").addClass("zoomIn")}}),!1}),$(".js-product_section").length){var $productForms=$(".js-product_section").find(".product_form");$productForms.addClass("is-visible"),$productForms.each(function(){var n=$(this).data("product"),r=$(this).data("product-id"),s=".product-"+r+" .js-product_section",h=$(this).find(".swatch_options .swatch");h.length>1&&Shopify.linkOptionSelectors(n,s)})}$(".js-product_section").length>1&&$("body").on("click",".swatch-element",function(){var n=$(this).data("value");$(this).siblings('input[value="'+n.replace(/\"/g,'\\"')+'"]').prop("checked",!0).trigger("change");var r=$(this).parents(".product_form").data("product"),s=$(this).parents(".product_form").data("product-id"),h=".product-"+s+" .js-product_section",l=$(this).parents(".product_form").find(".swatch_options .swatch");l.length>1&&Shopify.linkOptionSelectors(r,h)})}),Shopify.updateOptionsInSelector=function(n,r){switch(n){case 0:var s="root",h=$(r+" .single-option-selector:eq(0)");break;case 1:var s=$(r+" .single-option-selector:eq(0)").val(),h=$(r+" .single-option-selector:eq(1)");break;case 2:var s=$(r+" .single-option-selector:eq(0)").val();s+=" / "+$(r+" .single-option-selector:eq(1)").val();var h=$(r+" .single-option-selector:eq(2)")}var l=Shopify.optionsMap[s];$(r+' .swatch[data-option-index="'+n+'"] .swatch-element').each(function(){$.inArray($(this).attr("data-value"),l)!==-1?$(this).removeClass("soldout").find(":radio").removeAttr("disabled","disabled").removeAttr("checked"):$(this).addClass("soldout").find(":radio").removeAttr("checked").attr("disabled","disabled")})},Shopify.linkOptionSelectors=function(n,r){Shopify.optionsMap={};for(var s=0;s<n.variants.length;s++){var h=n.variants[s];if(h.available){if(Shopify.optionsMap.root=Shopify.optionsMap.root||[],Shopify.optionsMap.root.push(h.option1),Shopify.optionsMap.root=Shopify.uniq(Shopify.optionsMap.root),n.options.length>1){var l=h.option1;Shopify.optionsMap[l]=Shopify.optionsMap[l]||[],Shopify.optionsMap[l].push(h.option2),Shopify.optionsMap[l]=Shopify.uniq(Shopify.optionsMap[l])}if(n.options.length===3){var l=h.option1+" / "+h.option2;Shopify.optionsMap[l]=Shopify.optionsMap[l]||[],Shopify.optionsMap[l].push(h.option3),Shopify.optionsMap[l]=Shopify.uniq(Shopify.optionsMap[l])}}}Shopify.updateOptionsInSelector(0,r),n.options.length>1&&Shopify.updateOptionsInSelector(1,r),n.options.length===3&&Shopify.updateOptionsInSelector(2,r),$(r+" .single-option-selector:eq(0)").change(function(){return Shopify.updateOptionsInSelector(1,r),n.options.length===3&&Shopify.updateOptionsInSelector(2,r),!0}),$(r+" .single-option-selector:eq(1)").change(function(){return n.options.length===3&&Shopify.updateOptionsInSelector(2,r),!0})};function htmlEncode(n){return n?$("<div/>").text(n).html():""}function is_touch_device(){return"ontouchstart"in window||navigator.maxTouchPoints}function floatToString(n,r){var s=n.toFixed(r).toString();return s.match(/^\.\d+/)?"0"+s:s}if(typeof Shopify=="undefined")var Shopify={};Shopify.each=function(n,r){for(var s=0;s<n.length;s++)r(n[s],s)},Shopify.map=function(n,r){for(var s=[],h=0;h<n.length;h++)s.push(r(n[h],h));return s},Shopify.arrayIncludes=function(n,r){for(var s=0;s<n.length;s++)if(n[s]==r)return!0;return!1},Shopify.uniq=function(n){for(var r=[],s=0;s<n.length;s++)Shopify.arrayIncludes(r,n[s])||r.push(n[s]);return r},Shopify.isDefined=function(n){return typeof n!="undefined"},Shopify.getClass=function(n){return Object.prototype.toString.call(n).slice(8,-1)},Shopify.extend=function(n,r){function s(){}s.prototype=r.prototype,n.prototype=new s,n.prototype.constructor=n,n.baseConstructor=r,n.superClass=r.prototype},Shopify.locationSearch=function(){return window.location.search},Shopify.locationHash=function(){return window.location.hash},Shopify.replaceState=function(n){window.history.replaceState({},document.title,n)},Shopify.urlParam=function(n){var r=RegExp("[?&]"+n+"=([^&#]*)").exec(Shopify.locationSearch());return r&&decodeURIComponent(r[1].replace(/\+/g," "))},Shopify.newState=function(n,r){var s;return s=Shopify.urlParam(n)?Shopify.locationSearch().replace(RegExp("("+n+"=)[^&#]+"),"$1"+r):Shopify.locationSearch()===""?"?"+n+"="+r:Shopify.locationSearch()+"&"+n+"="+r,s+Shopify.locationHash()},Shopify.setParam=function(n,r){Shopify.replaceState(Shopify.newState(n,r))},Shopify.Product=function(n){Shopify.isDefined(n)&&this.update(n)},Shopify.Product.prototype.update=function(n){for(property in n)this[property]=n[property]},Shopify.Product.prototype.optionNames=function(){return Shopify.getClass(this.options)=="Array"?this.options:[]},Shopify.Product.prototype.optionValues=function(n){if(!Shopify.isDefined(this.variants))return null;var r=Shopify.map(this.variants,function(s){var h="option"+(n+1);return s[h]==null?null:s[h]});return r[0]==null?null:Shopify.uniq(r)},Shopify.Product.prototype.getVariant=function(n){var r=null;return n.length!=this.options.length||Shopify.each(this.variants,function(s){for(var h=!0,l=0;l<n.length;l++){var f="option"+(l+1);s[f]!=n[l]&&(h=!1)}return h==1?void(r=s):void 0}),r},Shopify.Product.prototype.getVariantById=function(n){for(var r=0;r<this.variants.length;r++){var s=this.variants[r];if(n==s.id)return s}return null},Shopify.money_format="$",Shopify.formatMoney=function(n,r){function s(m,w){return typeof m=="undefined"?w:m}function h(m,w,_,E){if(w=s(w,2),_=s(_,","),E=s(E,"."),isNaN(m)||m==null)return 0;m=(m/100).toFixed(w);var A=m.split("."),S=A[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+_),T=A[1]?E+A[1]:"";return S+T}typeof n=="string"&&(n=n.replace(".",""));var l="",f=/\{\{\s*(\w+)\s*\}\}/,d=r||this.money_format;switch(d.match(f)[1]){case"amount":l=h(n,2);break;case"amount_no_decimals":l=h(n,0);break;case"amount_with_comma_separator":l=h(n,2,".",",");break;case"amount_no_decimals_with_comma_separator":l=h(n,0,".",",")}return d.replace(f,l)},Shopify.OptionSelectors=function(n,r){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=n,this.product=new Shopify.Product(r.product),this.onVariantSelected=Shopify.isDefined(r.onVariantSelected)?r.onVariantSelected:function(){},this.replaceSelector(n),this.initDropdown(),r.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var n={initialLoad:!0},r=this.selectVariantFromDropdown(n);if(!r){var s=this;setTimeout(function(){s.selectVariantFromParams(n)||s.fireOnChangeForFirstDropdown.call(s,n)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(n){this.selectors[0].element.onchange(n)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(n){var r=this.selectVariantFromParams(n);r||this.selectVariantFromDropdown(n)},Shopify.OptionSelectors.prototype.replaceSelector=function(n){var r=document.getElementById(n),s=r.parentNode;Shopify.each(this.buildSelectors(),function(h){s.insertBefore(h,r)}),r.style.display="none",this.variantIdField=r},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(n){var r=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(r||(r=document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')),!r)return!1;var s=r.value;return this.selectVariant(s,n)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(n){var r=Shopify.urlParam("variant");return this.selectVariant(r,n)},Shopify.OptionSelectors.prototype.selectVariant=function(n,r){var s=this.product.getVariantById(n);if(s==null)return!1;for(var h=0;h<this.selectors.length;h++){var l=this.selectors[h].element,f=l.getAttribute("data-option"),d=s[f];d!=null&&this.optionExistInSelect(l,d)&&(l.value=d)}return typeof jQuery!="undefined"?jQuery(this.selectors[0].element).trigger("change",r):this.selectors[0].element.onchange(r),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(n,r){for(var s=0;s<n.options.length;s++)if(n.options[s].value==r)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(n,r){Shopify.isDefined(r)&&this.setMessageElement(r),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var s=document.getElementById(n);Shopify.each(this.buildSelectors(),function(h){s.appendChild(h)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var n=0;n<this.product.optionNames().length;n++){var r=new Shopify.SingleOptionSelector(this,n,this.product.optionNames()[n],this.product.optionValues(n));r.element.disabled=!1,this.selectors.push(r)}var s=this.selectorDivClass,h=this.product.optionNames(),l=Shopify.map(this.selectors,function(f){var d=document.createElement("div");if(d.setAttribute("class",s),h.length>1){var m=document.createElement("label");m.htmlFor=f.element.id,m.innerHTML=f.name,d.appendChild(m)}return d.appendChild(f.element),d});return l},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var n=[],r=0;r<this.selectors.length;r++){var s=this.selectors[r].element.value;n.push(s)}return n},Shopify.OptionSelectors.prototype.updateSelectors=function(n,r){var s=this.selectedValues(),h=this.product.getVariant(s);h?(this.variantIdField.disabled=!1,this.variantIdField.value=h.id):this.variantIdField.disabled=!0,this.onVariantSelected(h,this,r),this.historyState!=null&&this.historyState.onVariantChange(h,this,r)},Shopify.OptionSelectorsFromDOM=function(n,r){var s=r.optionNames||[],h=r.priceFieldExists||!0,l=r.delimiter||"/",f=this.createProductFromSelector(n,s,h,l);r.product=f,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,n,r)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(n,r,l,f){if(!Shopify.isDefined(l))var l=!0;if(!Shopify.isDefined(f))var f="/";var d=document.getElementById(n),m=d.childNodes,w=(d.parentNode,r.length),_=[];Shopify.each(m,function(S,T){if(S.nodeType==1&&S.tagName.toLowerCase()=="option"){var j=S.innerHTML.split(new RegExp("\\s*\\"+f+"\\s*"));r.length==0&&(w=j.length-(l?1:0));var L=j.slice(0,w),C=l?j[w]:"",O=(S.getAttribute("value"),{available:!S.disabled,id:parseFloat(S.value),price:C,option1:L[0],option2:L[1],option3:L[2]});_.push(O)}});var E={variants:_};if(r.length==0){E.options=[];for(var A=0;w>A;A++)E.options[A]="option "+(A+1)}else E.options=r;return E},Shopify.SingleOptionSelector=function(n,r,s,h){this.multiSelector=n,this.values=h,this.index=r,this.name=s,this.element=document.createElement("select");for(var l=0;l<h.length;l++){var f=document.createElement("option");f.value=h[l],f.innerHTML=h[l],this.element.appendChild(f)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(r+1)),this.element.id=n.domIdPrefix+"-option-"+r,this.element.onchange=function(d,m){m=m||{},n.updateSelectors(r,m)},!0},Shopify.Image={preload:function(n,r){for(var s=0;s<n.length;s++){var h=n[s];this.loadImage(this.getSizedImageUrl(h,r))}},loadImage:function(n){new Image().src=n},switchImage:function(n,r,s){if(n&&r){var h=this.imageSize(r.src),l=this.getSizedImageUrl(n.src,h);s?s(l,n,r):r.src=l}},imageSize:function(n){var r=n.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);return r!=null?r[1]:null},getSizedImageUrl:function(n,r){if(r==null)return n;if(r=="master")return this.removeProtocol(n);var s=n.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(s!=null){var h=n.split(s[0]),l=s[0];return this.removeProtocol(h[0]+"_"+r+l)}return null},removeProtocol:function(n){return n.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(n){this.browserSupports()&&this.register(n)},Shopify.OptionSelectors.HistoryState.prototype.register=function(n){window.addEventListener("popstate",function(r){n.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(n,r,s){this.browserSupports()&&(!n||s.initialLoad||s.popStateCall||Shopify.setParam("variant",n.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};/*
 * jQuery offscreen plugin
 *
 * Copyright Cory LaViska for A Beautiful Site, LLC
 *
 * @license: http://opensource.org/licenses/MIT
 *
 */(function(n){n.extend(n.expr[":"],{"off-top":function(r){return n(r).offset().top<n(window).scrollTop()},"off-right":function(r){return n(r).offset().left+n(r).outerWidth()-n(window).scrollLeft()>n(window).width()},"off-bottom":function(r){return n(r).offset().top+n(r).outerHeight()-n(window).scrollTop()>n(window).height()},"off-left":function(r){return n(r).offset().left<n(window).scrollLeft()},"off-screen":function(r){return n(r).is(":off-top, :off-right, :off-bottom, :off-left")}})})(jQuery);/*!
  Zoom 1.7.15
  license: MIT
  http://www.jacklmoore.com/zoom
*/(function(n){var r={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};n.zoom=function(s,h,l,f){var d,m,w,_,E,A,S,T=n(s),j=T.css("position"),L=n(h);return T.css("position",/(absolute|fixed)/.test(j)?j:"relative"),T.css("overflow","hidden"),l.style.width=l.style.height="",n(l).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:l.width*f,height:l.height*f,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(s),{init:function(){m=T.outerWidth(),d=T.outerHeight(),h===T[0]?(_=m,w=d):(_=L.outerWidth(),w=L.outerHeight()),E=(l.width-m)/_,A=(l.height-d)/w,S=L.offset()},move:function(C){var O=C.pageX-S.left,F=C.pageY-S.top;F=Math.max(Math.min(F,w),0),O=Math.max(Math.min(O,_),0),l.style.left=O*-E+"px",l.style.top=F*-A+"px"}}},n.fn.zoom=function(s){return this.each(function(){var h=n.extend({},r,s||{}),l=h.target||this,f=this,d=n(f),m=n(l),w=document.createElement("img"),_=n(w),E="mousemove.zoom",A=!1,S=!1,T;!h.url&&(T=d.find("img"),T[0]&&(h.url=T.data("src")||T.attr("src")),!h.url)||(function(){var j=m.css("position"),L=m.css("overflow");d.one("zoom.destroy",function(){d.off(".zoom"),m.css("position",j),m.css("overflow",L),_.remove()})}(),w.onload=function(){var j=n.zoom(l,f,w,h.magnify);function L(O){j.init(),j.move(O),_.stop().fadeTo(n.support.opacity?h.duration:0,1,n.isFunction(h.onZoomIn)?h.onZoomIn.call(w):!1)}function C(){_.stop().fadeTo(h.duration,0,n.isFunction(h.onZoomOut)?h.onZoomOut.call(w):!1)}h.on==="grab"?d.on("mousedown.zoom",function(O){O.which===1&&(n(document).one("mouseup.zoom",function(){C(),n(document).off(E,j.move)}),L(O),n(document).on(E,j.move),O.preventDefault())}):h.on==="click"?d.on("click.zoom",function(O){if(!A)return A=!0,L(O),n(document).on(E,j.move),n(document).one("click.zoom",function(){C(),A=!1,n(document).off(E,j.move)}),!1}):h.on==="toggle"?d.on("click.zoom",function(O){A?C():L(O),A=!A}):h.on==="mouseover"&&(j.init(),d.on("mouseenter.zoom",L).on("mouseleave.zoom",C).on(E,j.move)),h.touch&&d.on("touchstart.zoom",function(O){O.preventDefault(),S?(S=!1,C()):(S=!0,L(O.originalEvent.touches[0]||O.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(O){O.preventDefault(),j.move(O.originalEvent.touches[0]||O.originalEvent.changedTouches[0])}).on("touchend.zoom",function(O){O.preventDefault(),S&&(S=!1,C())}),n.isFunction(h.callback)&&h.callback.call(w)},w.src=h.url)})},n.fn.zoom.defaults=r})(window.jQuery),function(n,r){typeof define=="function"&&define.amd?define(["jquery"],function(s){return r(n,s)}):typeof exports=="object"?r(n,require("jquery")):r(n,n.jQuery||n.Zepto)}(this,function(n,r){"use strict";function s(H){if(ce&&H.css("animation-name")==="none"&&H.css("-webkit-animation-name")==="none"&&H.css("-moz-animation-name")==="none"&&H.css("-o-animation-name")==="none"&&H.css("-ms-animation-name")==="none")return 0;var W,Z,J,X,pe=H.css("animation-duration")||H.css("-webkit-animation-duration")||H.css("-moz-animation-duration")||H.css("-o-animation-duration")||H.css("-ms-animation-duration")||"0s",Ce=H.css("animation-delay")||H.css("-webkit-animation-delay")||H.css("-moz-animation-delay")||H.css("-o-animation-delay")||H.css("-ms-animation-delay")||"0s",Le=H.css("animation-iteration-count")||H.css("-webkit-animation-iteration-count")||H.css("-moz-animation-iteration-count")||H.css("-o-animation-iteration-count")||H.css("-ms-animation-iteration-count")||"1";for(pe=pe.split(", "),Ce=Ce.split(", "),Le=Le.split(", "),X=0,Z=pe.length,W=Number.NEGATIVE_INFINITY;X<Z;X++)J=parseFloat(pe[X])*parseInt(Le[X],10)+parseFloat(Ce[X]),J>W&&(W=J);return W}function h(){if(r(document.body).height()<=r(window).height())return 0;var H,W,Z=document.createElement("div"),J=document.createElement("div");return Z.style.visibility="hidden",Z.style.width="100px",document.body.appendChild(Z),H=Z.offsetWidth,Z.style.overflow="scroll",J.style.width="100%",Z.appendChild(J),W=J.offsetWidth,Z.parentNode.removeChild(Z),H-W}function l(){if(!ve){var H,W,Z=r("html"),J=E("is-locked");Z.hasClass(J)||(W=r(document.body),H=parseInt(W.css("padding-right"),10)+h(),W.css("padding-right",H+"px"),Z.addClass(J))}}function f(){if(!ve){var H,W,Z=r("html"),J=E("is-locked");Z.hasClass(J)&&(W=r(document.body),H=parseInt(W.css("padding-right"),10)-h(),W.css("padding-right",H+"px"),Z.removeClass(J))}}function d(H,W,Z,J){var X=E("is",W),pe=[E("is",G.CLOSING),E("is",G.OPENING),E("is",G.CLOSED),E("is",G.OPENED)].join(" ");H.$bg.removeClass(pe).addClass(X),H.$overlay.removeClass(pe).addClass(X),H.$wrapper.removeClass(pe).addClass(X),H.$modal.removeClass(pe).addClass(X),H.state=W,!Z&&H.$modal.trigger({type:W,reason:J},[{reason:J}])}function m(H,W,Z){var J=0,X=function(Ce){Ce.target===this&&J++},pe=function(Ce){Ce.target===this&&--J===0&&(r.each(["$bg","$overlay","$wrapper","$modal"],function(Le,At){Z[At].off(O+" "+F)}),W())};r.each(["$bg","$overlay","$wrapper","$modal"],function(Ce,Le){Z[Le].on(O,X).on(F,pe)}),H(),s(Z.$bg)===0&&s(Z.$overlay)===0&&s(Z.$wrapper)===0&&s(Z.$modal)===0&&(r.each(["$bg","$overlay","$wrapper","$modal"],function(Ce,Le){Z[Le].off(O+" "+F)}),W())}function w(H){H.state!==G.CLOSED&&(r.each(["$bg","$overlay","$wrapper","$modal"],function(W,Z){H[Z].off(O+" "+F)}),H.$bg.removeClass(H.settings.modifier),H.$overlay.removeClass(H.settings.modifier).hide(),H.$wrapper.hide(),f(),d(H,G.CLOSED,!0))}function _(H){var W,Z,J,X,pe={};for(H=H.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),W=H.split(","),X=0,Z=W.length;X<Z;X++)W[X]=W[X].split(":"),J=W[X][1],(typeof J=="string"||J instanceof String)&&(J=J==="true"||J!=="false"&&J),(typeof J=="string"||J instanceof String)&&(J=isNaN(J)?J:+J),pe[W[X][0]]=J;return pe}function E(){for(var H=C,W=0;W<arguments.length;++W)H+="-"+arguments[W];return H}function A(){var H,W,Z=location.hash.replace("#","");if(Z){try{W=r('[data-remodal-id="'+Z+'"]')}catch{}W&&W.length&&(H=r[L].lookup[W.data(L)],H&&H.settings.hashTracking&&H.open())}else T&&T.state===G.OPENED&&T.settings.hashTracking&&T.close()}function S(H,W){var Z=r(document.body),J=Z,X=this;X.settings=r.extend({},U,W),X.index=r[L].lookup.push(X)-1,X.state=G.CLOSED,X.$overlay=r("."+E("overlay")),X.settings.appendTo!==null&&X.settings.appendTo.length&&(J=r(X.settings.appendTo)),X.$overlay.length||(X.$overlay=r("<div>").addClass(E("overlay")+" "+E("is",G.CLOSED)).hide(),J.append(X.$overlay)),X.$bg=r("."+E("bg")).addClass(E("is",G.CLOSED)),X.$modal=H.addClass(C+" "+E("is-initialized")+" "+X.settings.modifier+" "+E("is",G.CLOSED)).attr("tabindex","-1"),X.$wrapper=r("<div>").addClass(E("wrapper")+" "+X.settings.modifier+" "+E("is",G.CLOSED)).hide().append(X.$modal),J.append(X.$wrapper),X.$wrapper.on("click."+C,'[data-remodal-action="close"]',function(pe){pe.preventDefault(),X.close()}),X.$wrapper.on("click."+C,'[data-remodal-action="cancel"]',function(pe){pe.preventDefault(),X.$modal.trigger(u.CANCELLATION),X.settings.closeOnCancel&&X.close(u.CANCELLATION)}),X.$wrapper.on("click."+C,'[data-remodal-action="confirm"]',function(pe){pe.preventDefault(),X.$modal.trigger(u.CONFIRMATION),X.settings.closeOnConfirm&&X.close(u.CONFIRMATION)}),X.$wrapper.on("click."+C,function(pe){var Ce=r(pe.target);Ce.hasClass(E("wrapper"))&&X.settings.closeOnOutsideClick&&X.close()})}var T,j,L="remodal",C=n.REMODAL_GLOBALS&&n.REMODAL_GLOBALS.NAMESPACE||L,O=r.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(H){return H+"."+C}).join(" "),F=r.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(H){return H+"."+C}).join(" "),U=r.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},n.REMODAL_GLOBALS&&n.REMODAL_GLOBALS.DEFAULTS),G={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},u={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},ce=function(){var H=document.createElement("div").style;return H.animationName!==void 0||H.WebkitAnimationName!==void 0||H.MozAnimationName!==void 0||H.msAnimationName!==void 0||H.OAnimationName!==void 0}(),ve=/iPad|iPhone|iPod/.test(navigator.platform);S.prototype.open=function(){var H,W=this;W.state!==G.OPENING&&W.state!==G.CLOSING&&(H=W.$modal.attr("data-remodal-id"),H&&W.settings.hashTracking&&(j=r(window).scrollTop(),location.hash=H),T&&T!==W&&w(T),T=W,l(),W.$bg.addClass(W.settings.modifier),W.$overlay.addClass(W.settings.modifier).show(),W.$wrapper.show().scrollTop(0),W.$modal.focus(),m(function(){d(W,G.OPENING)},function(){d(W,G.OPENED)},W))},S.prototype.close=function(H){var W=this;W.state!==G.OPENING&&W.state!==G.CLOSING&&(W.settings.hashTracking&&W.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",r(window).scrollTop(j)),m(function(){d(W,G.CLOSING,!1,H)},function(){W.$bg.removeClass(W.settings.modifier),W.$overlay.removeClass(W.settings.modifier).hide(),W.$wrapper.hide(),f(),d(W,G.CLOSED,!1,H)},W))},S.prototype.getState=function(){return this.state},S.prototype.destroy=function(){var H,W=r[L].lookup;w(this),this.$wrapper.remove(),delete W[this.index],H=r.grep(W,function(Z){return!!Z}).length,H===0&&(this.$overlay.remove(),this.$bg.removeClass(E("is",G.CLOSING)+" "+E("is",G.OPENING)+" "+E("is",G.CLOSED)+" "+E("is",G.OPENED)))},r[L]={lookup:[]},r.fn[L]=function(H){var W,Z;return this.each(function(J,X){Z=r(X),Z.data(L)==null?(W=new S(Z,H),Z.data(L,W.index),W.settings.hashTracking&&Z.attr("data-remodal-id")===location.hash.substr(1)&&W.open()):W=r[L].lookup[Z.data(L)]}),W},r(document).ready(function(){r("body").on("click","[data-remodal-target]",function(H){H.preventDefault();var W=H.currentTarget,Z=W.getAttribute("data-remodal-target"),J=r('[data-remodal-id="'+Z+'"]');r[L].lookup[J.data(L)].open()}),r("body").find("."+C).each(function(H,W){var Z=r(W),J=Z.data("remodal-options");J?(typeof J=="string"||J instanceof String)&&(J=_(J)):J={},Z[L](J)}),r("body").on("keydown."+C,function(H){T&&T.settings.closeOnEscape&&T.state===G.OPENED&&H.keyCode===27&&T.close()}),r(window).on("hashchange."+C,A)})});/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */(function(n){var r=!1;if(typeof define=="function"&&define.amd&&(define(n),r=!0),typeof exports=="object"&&(module.exports=n(),r=!0),!r){var s=window.Cookies,h=window.Cookies=n();h.noConflict=function(){return window.Cookies=s,h}}})(function(){function n(){for(var s=0,h={};s<arguments.length;s++){var l=arguments[s];for(var f in l)h[f]=l[f]}return h}function r(s){function h(l,f,d){var m;if(typeof document!="undefined"){if(arguments.length>1){if(typeof(d=n({path:"/"},h.defaults,d)).expires=="number"){var w=new Date;w.setMilliseconds(w.getMilliseconds()+864e5*d.expires),d.expires=w}d.expires=d.expires?d.expires.toUTCString():"";try{m=JSON.stringify(f),/^[\{\[]/.test(m)&&(f=m)}catch{}f=s.write?s.write(f,l):encodeURIComponent(String(f)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),l=(l=(l=encodeURIComponent(String(l))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var _="";for(var E in d)d[E]&&(_+="; "+E,d[E]!==!0&&(_+="="+d[E]));return document.cookie=l+"="+f+_}l||(m={});for(var A=document.cookie?document.cookie.split("; "):[],S=/(%[0-9A-Z]{2})+/g,T=0;T<A.length;T++){var j=A[T].split("="),L=j.slice(1).join("=");L.charAt(0)==='"'&&(L=L.slice(1,-1));try{var C=j[0].replace(S,decodeURIComponent);if(L=s.read?s.read(L,C):s(L,C)||L.replace(S,decodeURIComponent),this.json)try{L=JSON.parse(L)}catch{}if(l===C){m=L;break}l||(m[C]=L)}catch{}}return m}}return h.set=h,h.get=function(l){return h.call(h,l)},h.getJSON=function(){return h.apply({json:!0},[].slice.call(arguments))},h.defaults={},h.remove=function(l,f){h(l,"",n(f,{expires:-1}))},h.withConverter=r,h}return r(function(){})});/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/(function(){"use strict";function n(h){if(!h)throw new Error("No options passed to Waypoint constructor");if(!h.element)throw new Error("No element option passed to Waypoint constructor");if(!h.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+r,this.options=n.Adapter.extend({},n.defaults,h),this.element=this.options.element,this.adapter=new n.Adapter(this.element),this.callback=h.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=n.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=n.Context.findOrCreateByElement(this.options.context),n.offsetAliases[this.options.offset]&&(this.options.offset=n.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),s[this.key]=this,r+=1}var r=0,s={};n.prototype.queueTrigger=function(h){this.group.queueTrigger(this,h)},n.prototype.trigger=function(h){this.enabled&&this.callback&&this.callback.apply(this,h)},n.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete s[this.key]},n.prototype.disable=function(){return this.enabled=!1,this},n.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},n.prototype.next=function(){return this.group.next(this)},n.prototype.previous=function(){return this.group.previous(this)},n.invokeAll=function(h){var l=[];for(var f in s)l.push(s[f]);for(var d=0,m=l.length;m>d;d++)l[d][h]()},n.destroyAll=function(){n.invokeAll("destroy")},n.disableAll=function(){n.invokeAll("disable")},n.enableAll=function(){n.invokeAll("enable")},n.refreshAll=function(){n.Context.refreshAll()},n.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},n.viewportWidth=function(){return document.documentElement.clientWidth},n.adapters=[],n.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},n.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=n})(),function(){"use strict";function n(d){window.setTimeout(d,1e3/60)}function r(d){this.element=d,this.Adapter=l.Adapter,this.adapter=new this.Adapter(d),this.key="waypoint-context-"+s,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},d.waypointContextKey=this.key,h[d.waypointContextKey]=this,s+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var s=0,h={},l=window.Waypoint,f=window.onload;r.prototype.add=function(d){var m=d.options.horizontal?"horizontal":"vertical";this.waypoints[m][d.key]=d,this.refresh()},r.prototype.checkEmpty=function(){var d=this.Adapter.isEmptyObject(this.waypoints.horizontal),m=this.Adapter.isEmptyObject(this.waypoints.vertical);d&&m&&(this.adapter.off(".waypoints"),delete h[this.key])},r.prototype.createThrottledResizeHandler=function(){function d(){m.handleResize(),m.didResize=!1}var m=this;this.adapter.on("resize.waypoints",function(){m.didResize||(m.didResize=!0,l.requestAnimationFrame(d))})},r.prototype.createThrottledScrollHandler=function(){function d(){m.handleScroll(),m.didScroll=!1}var m=this;this.adapter.on("scroll.waypoints",function(){(!m.didScroll||l.isTouch)&&(m.didScroll=!0,l.requestAnimationFrame(d))})},r.prototype.handleResize=function(){l.Context.refreshAll()},r.prototype.handleScroll=function(){var d={},m={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var w in m){var _=m[w],E=_.newScroll>_.oldScroll,A=E?_.forward:_.backward;for(var S in this.waypoints[w]){var T=this.waypoints[w][S],j=_.oldScroll<T.triggerPoint,L=_.newScroll>=T.triggerPoint,C=j&&L,O=!j&&!L;(C||O)&&(T.queueTrigger(A),d[T.group.id]=T.group)}}for(var F in d)d[F].flushTriggers();this.oldScroll={x:m.horizontal.newScroll,y:m.vertical.newScroll}},r.prototype.innerHeight=function(){return this.element==this.element.window?l.viewportHeight():this.adapter.innerHeight()},r.prototype.remove=function(d){delete this.waypoints[d.axis][d.key],this.checkEmpty()},r.prototype.innerWidth=function(){return this.element==this.element.window?l.viewportWidth():this.adapter.innerWidth()},r.prototype.destroy=function(){var d=[];for(var m in this.waypoints)for(var w in this.waypoints[m])d.push(this.waypoints[m][w]);for(var _=0,E=d.length;E>_;_++)d[_].destroy()},r.prototype.refresh=function(){var d,m=this.element==this.element.window,w=m?void 0:this.adapter.offset(),_={};this.handleScroll(),d={horizontal:{contextOffset:m?0:w.left,contextScroll:m?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:m?0:w.top,contextScroll:m?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var E in d){var A=d[E];for(var S in this.waypoints[E]){var T,j,L,C,O,F=this.waypoints[E][S],U=F.options.offset,G=F.triggerPoint,u=0,ce=G==null;F.element!==F.element.window&&(u=F.adapter.offset()[A.offsetProp]),typeof U=="function"?U=U.apply(F):typeof U=="string"&&(U=parseFloat(U),F.options.offset.indexOf("%")>-1&&(U=Math.ceil(A.contextDimension*U/100))),T=A.contextScroll-A.contextOffset,F.triggerPoint=u+T-U,j=G<A.oldScroll,L=F.triggerPoint>=A.oldScroll,C=j&&L,O=!j&&!L,!ce&&C?(F.queueTrigger(A.backward),_[F.group.id]=F.group):(!ce&&O||ce&&A.oldScroll>=F.triggerPoint)&&(F.queueTrigger(A.forward),_[F.group.id]=F.group)}}return l.requestAnimationFrame(function(){for(var ve in _)_[ve].flushTriggers()}),this},r.findOrCreateByElement=function(d){return r.findByElement(d)||new r(d)},r.refreshAll=function(){for(var d in h)h[d].refresh()},r.findByElement=function(d){return h[d.waypointContextKey]},window.onload=function(){f&&f(),r.refreshAll()},l.requestAnimationFrame=function(d){var m=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||n;m.call(window,d)},l.Context=r}(),function(){"use strict";function n(f,d){return f.triggerPoint-d.triggerPoint}function r(f,d){return d.triggerPoint-f.triggerPoint}function s(f){this.name=f.name,this.axis=f.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),h[this.axis][this.name]=this}var h={vertical:{},horizontal:{}},l=window.Waypoint;s.prototype.add=function(f){this.waypoints.push(f)},s.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},s.prototype.flushTriggers=function(){for(var f in this.triggerQueues){var d=this.triggerQueues[f],m=f==="up"||f==="left";d.sort(m?r:n);for(var w=0,_=d.length;_>w;w+=1){var E=d[w];(E.options.continuous||w===d.length-1)&&E.trigger([f])}}this.clearTriggerQueues()},s.prototype.next=function(f){this.waypoints.sort(n);var d=l.Adapter.inArray(f,this.waypoints),m=d===this.waypoints.length-1;return m?null:this.waypoints[d+1]},s.prototype.previous=function(f){this.waypoints.sort(n);var d=l.Adapter.inArray(f,this.waypoints);return d?this.waypoints[d-1]:null},s.prototype.queueTrigger=function(f,d){this.triggerQueues[d].push(f)},s.prototype.remove=function(f){var d=l.Adapter.inArray(f,this.waypoints);d>-1&&this.waypoints.splice(d,1)},s.prototype.first=function(){return this.waypoints[0]},s.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},s.findOrCreate=function(f){return h[f.axis][f.name]||new s(f)},l.Group=s}(),function(){"use strict";function n(h){this.$element=r(h)}var r=window.jQuery,s=window.Waypoint;r.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(h,l){n.prototype[l]=function(){var f=Array.prototype.slice.call(arguments);return this.$element[l].apply(this.$element,f)}}),r.each(["extend","inArray","isEmptyObject"],function(h,l){n[l]=r[l]}),s.adapters.push({name:"jquery",Adapter:n}),s.Adapter=n}(),function(){"use strict";function n(s){return function(){var h=[],l=arguments[0];return s.isFunction(arguments[0])&&(l=s.extend({},arguments[1]),l.handler=arguments[0]),this.each(function(){var f=s.extend({},l,{element:this});typeof f.context=="string"&&(f.context=s(this).closest(f.context)[0]),h.push(new r(f))}),h}}var r=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=n(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=n(window.Zepto))}();/*!
Waypoints Infinite Scroll Shortcut - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/(function(){"use strict";function n(h){this.options=r.extend({},n.defaults,h),this.container=this.options.element,this.options.container!=="auto"&&(this.container=this.options.container),this.$container=r(this.container),this.$more=r(this.options.more),this.$more.length&&(this.setupHandler(),this.waypoint=new s(this.options))}var r=window.jQuery,s=window.Waypoint;n.prototype.setupHandler=function(){this.options.handler=r.proxy(function(){this.options.onBeforePageLoad(),this.destroy(),this.$container.addClass(this.options.loadingClass),r.get(r(this.options.more).attr("href"),r.proxy(function(h){var l=r(r.parseHTML(h)),f=l.find(this.options.more),d=l.find(this.options.items);d.length||(d=l.filter(this.options.items)),this.$container.append(d),this.$container.removeClass(this.options.loadingClass),f.length||(f=l.filter(this.options.more)),f.length?(this.$more.replaceWith(f),this.$more=f,this.waypoint=new s(this.options)):this.$more.remove(),this.options.onAfterPageLoad(d)},this))},this)},n.prototype.destroy=function(){this.waypoint&&this.waypoint.destroy()},n.defaults={container:"auto",items:".infinite-item",more:".infinite-more-link",offset:"bottom-in-view",loadingClass:"infinite-loading",onBeforePageLoad:r.noop,onAfterPageLoad:r.noop},s.Infinite=n})(),function(n){n.fn.mediaWrapper=function(r){var s=n.extend({intrinsic:!0,baseWidth:16,baseHeight:9},r);return this.each(function(){var h="";h=s.intrinsic==1&&n(this).attr("width")!==""&&n(this).attr("height")!==""?n(this).attr("height")/n(this).attr("width")*100:s.baseHeight/s.baseWidth*100,n(this).wrap('<div class="mediaWrapper" style="position: relative; width: 100%; height: 0; padding: '+h+'% 0 0 0; " />').css({position:"absolute",width:"100%",height:"100%",top:"0",left:"0"})})}}(jQuery);function PointerEventsPolyfill(n){if(this.options={selector:"*",mouseEvents:["click","dblclick","mousedown","mouseup"],usePolyfillIf:function(){if(navigator.appName=="Microsoft Internet Explorer"){var s=navigator.userAgent;if(s.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)!=null){var h=parseFloat(RegExp.$1);if(11>h)return!0}}return!1}},n){var r=this;$.each(n,function(s,h){r.options[s]=h})}this.options.usePolyfillIf()&&this.register_mouse_events()}PointerEventsPolyfill.initialize=function(n){return PointerEventsPolyfill.singleton==null&&(PointerEventsPolyfill.singleton=new PointerEventsPolyfill(n)),PointerEventsPolyfill.singleton},PointerEventsPolyfill.prototype.register_mouse_events=function(){$(document).on(this.options.mouseEvents.join(" "),this.options.selector,function(n){if($(this).css("pointer-events")=="none"){var r=$(this).css("display");$(this).css("display","none");var s=document.elementFromPoint(n.clientX,n.clientY);return r?$(this).css("display",r):$(this).css("display",""),n.target=s,$(s).trigger(n),!1}return!0})};/*!
 * Flickity PACKAGED v2.0.10
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2017 Metafizzy
 */(function(n,r){typeof define=="function"&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(s){return r(n,s)}):typeof module=="object"&&module.exports?module.exports=r(n,require("jquery")):n.jQueryBridget=r(n,n.jQuery)})(window,function(n,r){"use strict";function s(m,w,_){function E(S,T,j){var L,C="$()."+m+'("'+T+'")';return S.each(function(O,F){var U=_.data(F,m);if(!U)return void d(m+" not initialized. Cannot call methods, i.e. "+C);var G=U[T];if(!G||T.charAt(0)=="_")return void d(C+" is not a valid method");var u=G.apply(U,j);L=L===void 0?u:L}),L!==void 0?L:S}function A(S,T){S.each(function(j,L){var C=_.data(L,m);C?(C.option(T),C._init()):(C=new w(L,T),_.data(L,m,C))})}_=_||r||n.jQuery,_&&(w.prototype.option||(w.prototype.option=function(S){_.isPlainObject(S)&&(this.options=_.extend(!0,this.options,S))}),_.fn[m]=function(S){if(typeof S=="string"){var T=l.call(arguments,1);return E(this,S,T)}return A(this,S),this},h(_))}function h(m){!m||m&&m.bridget||(m.bridget=s)}var l=Array.prototype.slice,f=n.console,d=typeof f=="undefined"?function(){}:function(m){f.error(m)};return h(r||n.jQuery),s}),function(n,r){typeof define=="function"&&define.amd?define("ev-emitter/ev-emitter",r):typeof module=="object"&&module.exports?module.exports=r():n.EvEmitter=r()}(typeof window!="undefined"?window:this,function(){function n(){}var r=n.prototype;return r.on=function(s,h){if(s&&h){var l=this._events=this._events||{},f=l[s]=l[s]||[];return f.indexOf(h)==-1&&f.push(h),this}},r.once=function(s,h){if(s&&h){this.on(s,h);var l=this._onceEvents=this._onceEvents||{},f=l[s]=l[s]||{};return f[h]=!0,this}},r.off=function(s,h){var l=this._events&&this._events[s];if(l&&l.length){var f=l.indexOf(h);return f!=-1&&l.splice(f,1),this}},r.emitEvent=function(s,h){var l=this._events&&this._events[s];if(l&&l.length){l=l.slice(0),h=h||[];for(var f=this._onceEvents&&this._onceEvents[s],d=0;d<l.length;d++){var m=l[d],w=f&&f[m];w&&(this.off(s,m),delete f[m]),m.apply(this,h)}return this}},r.allOff=function(){delete this._events,delete this._onceEvents},n}),function(n,r){"use strict";typeof define=="function"&&define.amd?define("get-size/get-size",[],function(){return r()}):typeof module=="object"&&module.exports?module.exports=r():n.getSize=r()}(window,function(){"use strict";function n(A){var S=parseFloat(A),T=A.indexOf("%")==-1&&!isNaN(S);return T&&S}function r(){}function s(){for(var A={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},S=0;S<_;S++){var T=w[S];A[T]=0}return A}function h(A){var S=getComputedStyle(A);return S||m("Style returned "+S+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),S}function l(){if(!E){E=!0;var A=document.createElement("div");A.style.width="200px",A.style.padding="1px 2px 3px 4px",A.style.borderStyle="solid",A.style.borderWidth="1px 2px 3px 4px",A.style.boxSizing="border-box";var S=document.body||document.documentElement;S.appendChild(A);var T=h(A);f.isBoxSizeOuter=d=n(T.width)==200,S.removeChild(A)}}function f(A){if(l(),typeof A=="string"&&(A=document.querySelector(A)),A&&typeof A=="object"&&A.nodeType){var S=h(A);if(S.display=="none")return s();var T={};T.width=A.offsetWidth,T.height=A.offsetHeight;for(var j=T.isBorderBox=S.boxSizing=="border-box",L=0;L<_;L++){var C=w[L],O=S[C],F=parseFloat(O);T[C]=isNaN(F)?0:F}var U=T.paddingLeft+T.paddingRight,G=T.paddingTop+T.paddingBottom,u=T.marginLeft+T.marginRight,ce=T.marginTop+T.marginBottom,ve=T.borderLeftWidth+T.borderRightWidth,H=T.borderTopWidth+T.borderBottomWidth,W=j&&d,Z=n(S.width);Z!==!1&&(T.width=Z+(W?0:U+ve));var J=n(S.height);return J!==!1&&(T.height=J+(W?0:G+H)),T.innerWidth=T.width-(U+ve),T.innerHeight=T.height-(G+H),T.outerWidth=T.width+u,T.outerHeight=T.height+ce,T}}var d,m=typeof console=="undefined"?r:function(A){console.error(A)},w=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],_=w.length,E=!1;return f}),function(n,r){"use strict";typeof define=="function"&&define.amd?define("desandro-matches-selector/matches-selector",r):typeof module=="object"&&module.exports?module.exports=r():n.matchesSelector=r()}(window,function(){"use strict";var n=function(){var r=window.Element.prototype;if(r.matches)return"matches";if(r.matchesSelector)return"matchesSelector";for(var s=["webkit","moz","ms","o"],h=0;h<s.length;h++){var l=s[h],f=l+"MatchesSelector";if(r[f])return f}}();return function(r,s){return r[n](s)}}),function(n,r){typeof define=="function"&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(s){return r(n,s)}):typeof module=="object"&&module.exports?module.exports=r(n,require("desandro-matches-selector")):n.fizzyUIUtils=r(n,n.matchesSelector)}(window,function(n,r){var s={};s.extend=function(l,f){for(var d in f)l[d]=f[d];return l},s.modulo=function(l,f){return(l%f+f)%f},s.makeArray=function(l){var f=[];if(Array.isArray(l))f=l;else if(l&&typeof l=="object"&&typeof l.length=="number")for(var d=0;d<l.length;d++)f.push(l[d]);else f.push(l);return f},s.removeFrom=function(l,f){var d=l.indexOf(f);d!=-1&&l.splice(d,1)},s.getParent=function(l,f){for(;l.parentNode&&l!=document.body;)if(l=l.parentNode,r(l,f))return l},s.getQueryElement=function(l){return typeof l=="string"?document.querySelector(l):l},s.handleEvent=function(l){var f="on"+l.type;this[f]&&this[f](l)},s.filterFindElements=function(l,f){l=s.makeArray(l);var d=[];return l.forEach(function(m){if(m instanceof HTMLElement){if(!f)return void d.push(m);r(m,f)&&d.push(m);for(var w=m.querySelectorAll(f),_=0;_<w.length;_++)d.push(w[_])}}),d},s.debounceMethod=function(l,f,d){var m=l.prototype[f],w=f+"Timeout";l.prototype[f]=function(){var _=this[w];_&&clearTimeout(_);var E=arguments,A=this;this[w]=setTimeout(function(){m.apply(A,E),delete A[w]},d||100)}},s.docReady=function(l){var f=document.readyState;f=="complete"||f=="interactive"?setTimeout(l):document.addEventListener("DOMContentLoaded",l)},s.toDashed=function(l){return l.replace(/(.)([A-Z])/g,function(f,d,m){return d+"-"+m}).toLowerCase()};var h=n.console;return s.htmlInit=function(l,f){s.docReady(function(){var d=s.toDashed(f),m="data-"+d,w=document.querySelectorAll("["+m+"]"),_=document.querySelectorAll(".js-"+d),E=s.makeArray(w).concat(s.makeArray(_)),A=m+"-options",S=n.jQuery;E.forEach(function(T){var j,L=T.getAttribute(m)||T.getAttribute(A);try{j=L&&JSON.parse(L)}catch(O){return void(h&&h.error("Error parsing "+m+" on "+T.className+": "+O))}var C=new l(T,j);S&&S.data(T,f,C)})})},s}),function(n,r){typeof define=="function"&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(s){return r(n,s)}):typeof module=="object"&&module.exports?module.exports=r(n,require("get-size")):(n.Flickity=n.Flickity||{},n.Flickity.Cell=r(n,n.getSize))}(window,function(n,r){function s(l,f){this.element=l,this.parent=f,this.create()}var h=s.prototype;return h.create=function(){this.element.style.position="absolute",this.x=0,this.shift=0},h.destroy=function(){this.element.style.position="";var l=this.parent.originSide;this.element.style[l]=""},h.getSize=function(){this.size=r(this.element)},h.setPosition=function(l){this.x=l,this.updateTarget(),this.renderPosition(l)},h.updateTarget=h.setDefaultTarget=function(){var l=this.parent.originSide=="left"?"marginLeft":"marginRight";this.target=this.x+this.size[l]+this.size.width*this.parent.cellAlign},h.renderPosition=function(l){var f=this.parent.originSide;this.element.style[f]=this.parent.getPositionValue(l)},h.wrapShift=function(l){this.shift=l,this.renderPosition(this.x+this.parent.slideableWidth*l)},h.remove=function(){this.element.parentNode.removeChild(this.element)},s}),function(n,r){typeof define=="function"&&define.amd?define("flickity/js/slide",r):typeof module=="object"&&module.exports?module.exports=r():(n.Flickity=n.Flickity||{},n.Flickity.Slide=r())}(window,function(){"use strict";function n(s){this.parent=s,this.isOriginLeft=s.originSide=="left",this.cells=[],this.outerWidth=0,this.height=0}var r=n.prototype;return r.addCell=function(s){if(this.cells.push(s),this.outerWidth+=s.size.outerWidth,this.height=Math.max(s.size.outerHeight,this.height),this.cells.length==1){this.x=s.x;var h=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=s.size[h]}},r.updateTarget=function(){var s=this.isOriginLeft?"marginRight":"marginLeft",h=this.getLastCell(),l=h?h.size[s]:0,f=this.outerWidth-(this.firstMargin+l);this.target=this.x+this.firstMargin+f*this.parent.cellAlign},r.getLastCell=function(){return this.cells[this.cells.length-1]},r.select=function(){this.changeSelectedClass("add")},r.unselect=function(){this.changeSelectedClass("remove")},r.changeSelectedClass=function(s){this.cells.forEach(function(h){h.element.classList[s]("is-selected")})},r.getCellElements=function(){return this.cells.map(function(s){return s.element})},n}),function(n,r){typeof define=="function"&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(s){return r(n,s)}):typeof module=="object"&&module.exports?module.exports=r(n,require("fizzy-ui-utils")):(n.Flickity=n.Flickity||{},n.Flickity.animatePrototype=r(n,n.fizzyUIUtils))}(window,function(n,r){var s=n.requestAnimationFrame||n.webkitRequestAnimationFrame,h=0;s||(s=function(d){var m=new Date().getTime(),w=Math.max(0,16-(m-h)),_=setTimeout(d,w);return h=m+w,_});var l={};l.startAnimation=function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},l.animate=function(){this.applyDragForce(),this.applySelectedAttraction();var d=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(d),this.isAnimating){var m=this;s(function(){m.animate()})}};var f=function(){var d=document.documentElement.style;return typeof d.transform=="string"?"transform":"WebkitTransform"}();return l.positionSlider=function(){var d=this.x;this.options.wrapAround&&this.cells.length>1&&(d=r.modulo(d,this.slideableWidth),d-=this.slideableWidth,this.shiftWrapCells(d)),d+=this.cursorPosition,d=this.options.rightToLeft&&f?-d:d;var m=this.getPositionValue(d);this.slider.style[f]=this.isAnimating?"translate3d("+m+",0,0)":"translateX("+m+")";var w=this.slides[0];if(w){var _=-this.x-w.target,E=_/this.slidesWidth;this.dispatchEvent("scroll",null,[E,_])}},l.positionSliderAtSelected=function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.positionSlider())},l.getPositionValue=function(d){return this.options.percentPosition?.01*Math.round(d/this.size.innerWidth*1e4)+"%":Math.round(d)+"px"},l.settle=function(d){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*d)||this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle"))},l.shiftWrapCells=function(d){var m=this.cursorPosition+d;this._shiftCells(this.beforeShiftCells,m,-1);var w=this.size.innerWidth-(d+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,w,1)},l._shiftCells=function(d,m,w){for(var _=0;_<d.length;_++){var E=d[_],A=m>0?w:0;E.wrapShift(A),m-=E.size.outerWidth}},l._unshiftCells=function(d){if(d&&d.length)for(var m=0;m<d.length;m++)d[m].wrapShift(0)},l.integratePhysics=function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},l.applyForce=function(d){this.velocity+=d},l.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},l.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())},l.applyDragForce=function(){if(this.isPointerDown){var d=this.dragX-this.x,m=d-this.velocity;this.applyForce(m)}},l.applySelectedAttraction=function(){if(!this.isPointerDown&&!this.isFreeScrolling&&this.cells.length){var d=this.selectedSlide.target*-1-this.x,m=d*this.options.selectedAttraction;this.applyForce(m)}},l}),function(n,r){if(typeof define=="function"&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(h,l,f,d,m,w){return r(n,h,l,f,d,m,w)});else if(typeof module=="object"&&module.exports)module.exports=r(n,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var s=n.Flickity;n.Flickity=r(n,n.EvEmitter,n.getSize,n.fizzyUIUtils,s.Cell,s.Slide,s.animatePrototype)}}(window,function(n,r,s,h,l,f,d){function m(C,O){for(C=h.makeArray(C);C.length;)O.appendChild(C.shift())}function w(C,O){var F=h.getQueryElement(C);if(!F)return void(A&&A.error("Bad element for Flickity: "+(F||C)));if(this.element=F,this.element.flickityGUID){var U=T[this.element.flickityGUID];return U.option(O),U}_&&(this.$element=_(this.element)),this.options=h.extend({},this.constructor.defaults),this.option(O),this._create()}var _=n.jQuery,E=n.getComputedStyle,A=n.console,S=0,T={};w.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},w.createMethods=[];var j=w.prototype;h.extend(j,r.prototype),j._create=function(){var C=this.guid=++S;this.element.flickityGUID=C,T[C]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),w.createMethods.forEach(function(O){this[O]()},this),this.options.watchCSS?this.watchCSS():this.activate()},j.option=function(C){h.extend(this.options,C)},j.activate=function(){if(!this.isActive){this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize();var C=this._filterFindCellElements(this.element.children);m(C,this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate");var O,F=this.options.initialIndex;O=this.isInitActivated?this.selectedIndex:F!==void 0&&this.cells[F]?F:0,this.select(O,!1,!0),this.isInitActivated=!0}},j._createSlider=function(){var C=document.createElement("div");C.className="flickity-slider",C.style[this.originSide]=0,this.slider=C},j._filterFindCellElements=function(C){return h.filterFindElements(C,this.options.cellSelector)},j.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},j._makeCells=function(C){var O=this._filterFindCellElements(C),F=O.map(function(U){return new l(U,this)},this);return F},j.getLastCell=function(){return this.cells[this.cells.length-1]},j.getLastSlide=function(){return this.slides[this.slides.length-1]},j.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},j._positionCells=function(C){C=C||0,this.maxCellHeight=C&&this.maxCellHeight||0;var O=0;if(C>0){var F=this.cells[C-1];O=F.x+F.size.outerWidth}for(var U=this.cells.length,G=C;G<U;G++){var u=this.cells[G];u.setPosition(O),O+=u.size.outerWidth,this.maxCellHeight=Math.max(u.size.outerHeight,this.maxCellHeight)}this.slideableWidth=O,this.updateSlides(),this._containSlides(),this.slidesWidth=U?this.getLastSlide().target-this.slides[0].target:0},j._sizeCells=function(C){C.forEach(function(O){O.getSize()})},j.updateSlides=function(){if(this.slides=[],this.cells.length){var C=new f(this);this.slides.push(C);var O=this.originSide=="left",F=O?"marginRight":"marginLeft",U=this._getCanCellFit();this.cells.forEach(function(G,u){if(!C.cells.length)return void C.addCell(G);var ce=C.outerWidth-C.firstMargin+(G.size.outerWidth-G.size[F]);U.call(this,u,ce)||(C.updateTarget(),C=new f(this),this.slides.push(C)),C.addCell(G)},this),C.updateTarget(),this.updateSelectedSlide()}},j._getCanCellFit=function(){var C=this.options.groupCells;if(!C)return function(){return!1};if(typeof C=="number"){var O=parseInt(C,10);return function(G){return G%O!==0}}var F=typeof C=="string"&&C.match(/^(\d+)%$/),U=F?parseInt(F[1],10)/100:1;return function(G,u){return u<=(this.size.innerWidth+1)*U}},j._init=j.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},j.getSize=function(){this.size=s(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var L={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return j.setCellAlign=function(){var C=L[this.options.cellAlign];this.cellAlign=C?C[this.originSide]:this.options.cellAlign},j.setGallerySize=function(){if(this.options.setGallerySize){var C=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=C+"px"}},j._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var C=this.cursorPosition,O=this.cells.length-1;this.beforeShiftCells=this._getGapCells(C,O,-1),C=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(C,0,1)}},j._getGapCells=function(C,O,F){for(var U=[];C>0;){var G=this.cells[O];if(!G)break;U.push(G),O+=F,C-=G.size.outerWidth}return U},j._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var C=this.options.rightToLeft,O=C?"marginRight":"marginLeft",F=C?"marginLeft":"marginRight",U=this.slideableWidth-this.getLastCell().size[F],G=U<this.size.innerWidth,u=this.cursorPosition+this.cells[0].size[O],ce=U-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(ve){G?ve.target=U*this.cellAlign:(ve.target=Math.max(ve.target,u),ve.target=Math.min(ve.target,ce))},this)}},j.dispatchEvent=function(C,O,F){var U=O?[O].concat(F):F;if(this.emitEvent(C,U),_&&this.$element){C+=this.options.namespaceJQueryEvents?".flickity":"";var G=C;if(O){var u=_.Event(O);u.type=C,G=u}this.$element.trigger(G,F)}},j.select=function(C,O,F){this.isActive&&(C=parseInt(C,10),this._wrapSelect(C),(this.options.wrapAround||O)&&(C=h.modulo(C,this.slides.length)),this.slides[C]&&(this.selectedIndex=C,this.updateSelectedSlide(),F?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select"),this.dispatchEvent("cellSelect")))},j._wrapSelect=function(C){var O=this.slides.length,F=this.options.wrapAround&&O>1;if(!F)return C;var U=h.modulo(C,O),G=Math.abs(U-this.selectedIndex),u=Math.abs(U+O-this.selectedIndex),ce=Math.abs(U-O-this.selectedIndex);!this.isDragSelect&&u<G?C+=O:!this.isDragSelect&&ce<G&&(C-=O),C<0?this.x-=this.slideableWidth:C>=O&&(this.x+=this.slideableWidth)},j.previous=function(C,O){this.select(this.selectedIndex-1,C,O)},j.next=function(C,O){this.select(this.selectedIndex+1,C,O)},j.updateSelectedSlide=function(){var C=this.slides[this.selectedIndex];C&&(this.unselectSelectedSlide(),this.selectedSlide=C,C.select(),this.selectedCells=C.cells,this.selectedElements=C.getCellElements(),this.selectedCell=C.cells[0],this.selectedElement=this.selectedElements[0])},j.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},j.selectCell=function(C,O,F){var U;typeof C=="number"?U=this.cells[C]:(typeof C=="string"&&(C=this.element.querySelector(C)),U=this.getCell(C));for(var G=0;U&&G<this.slides.length;G++){var u=this.slides[G],ce=u.cells.indexOf(U);if(ce!=-1)return void this.select(G,O,F)}},j.getCell=function(C){for(var O=0;O<this.cells.length;O++){var F=this.cells[O];if(F.element==C)return F}},j.getCells=function(C){C=h.makeArray(C);var O=[];return C.forEach(function(F){var U=this.getCell(F);U&&O.push(U)},this),O},j.getCellElements=function(){return this.cells.map(function(C){return C.element})},j.getParentCell=function(C){var O=this.getCell(C);return O||(C=h.getParent(C,".flickity-slider > *"),this.getCell(C))},j.getAdjacentCellElements=function(C,O){if(!C)return this.selectedSlide.getCellElements();O=O===void 0?this.selectedIndex:O;var F=this.slides.length;if(1+2*C>=F)return this.getCellElements();for(var U=[],G=O-C;G<=O+C;G++){var u=this.options.wrapAround?h.modulo(G,F):G,ce=this.slides[u];ce&&(U=U.concat(ce.getCellElements()))}return U},j.uiChange=function(){this.emitEvent("uiChange")},j.childUIPointerDown=function(C){this.emitEvent("childUIPointerDown",[C])},j.onresize=function(){this.watchCSS(),this.resize()},h.debounceMethod(w,"onresize",150),j.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=h.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var C=this.selectedElements&&this.selectedElements[0];this.selectCell(C,!1,!0)}},j.watchCSS=function(){var C=this.options.watchCSS;if(C){var O=E(this.element,":after").content;O.indexOf("flickity")!=-1?this.activate():this.deactivate()}},j.onkeydown=function(C){if(this.options.accessibility&&(!document.activeElement||document.activeElement==this.element)){if(C.keyCode==37){var O=this.options.rightToLeft?"next":"previous";this.uiChange(),this[O]()}else if(C.keyCode==39){var F=this.options.rightToLeft?"previous":"next";this.uiChange(),this[F]()}}},j.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.cells.forEach(function(C){C.destroy()}),this.unselectSelectedSlide(),this.element.removeChild(this.viewport),m(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},j.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.emitEvent("destroy"),_&&this.$element&&_.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete T[this.guid]},h.extend(j,d),w.data=function(C){C=h.getQueryElement(C);var O=C&&C.flickityGUID;return O&&T[O]},h.htmlInit(w,"flickity"),_&&_.bridget&&_.bridget("flickity",w),w.setJQuery=function(C){_=C},w.Cell=l,w}),function(n,r){typeof define=="function"&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(s){return r(n,s)}):typeof module=="object"&&module.exports?module.exports=r(n,require("ev-emitter")):n.Unipointer=r(n,n.EvEmitter)}(window,function(n,r){function s(){}function h(){}var l=h.prototype=Object.create(r.prototype);l.bindStartEvent=function(d){this._bindStartEvent(d,!0)},l.unbindStartEvent=function(d){this._bindStartEvent(d,!1)},l._bindStartEvent=function(d,m){m=m===void 0||!!m;var w=m?"addEventListener":"removeEventListener";n.PointerEvent?d[w]("pointerdown",this):(d[w]("mousedown",this),d[w]("touchstart",this))},l.handleEvent=function(d){var m="on"+d.type;this[m]&&this[m](d)},l.getTouch=function(d){for(var m=0;m<d.length;m++){var w=d[m];if(w.identifier==this.pointerIdentifier)return w}},l.onmousedown=function(d){var m=d.button;m&&m!==0&&m!==1||this._pointerDown(d,d)},l.ontouchstart=function(d){this._pointerDown(d,d.changedTouches[0])},l.onpointerdown=function(d){this._pointerDown(d,d)},l._pointerDown=function(d,m){this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=m.pointerId!==void 0?m.pointerId:m.identifier,this.pointerDown(d,m))},l.pointerDown=function(d,m){this._bindPostStartEvents(d),this.emitEvent("pointerDown",[d,m])};var f={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return l._bindPostStartEvents=function(d){if(d){var m=f[d.type];m.forEach(function(w){n.addEventListener(w,this)},this),this._boundPointerEvents=m}},l._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(d){n.removeEventListener(d,this)},this),delete this._boundPointerEvents)},l.onmousemove=function(d){this._pointerMove(d,d)},l.onpointermove=function(d){d.pointerId==this.pointerIdentifier&&this._pointerMove(d,d)},l.ontouchmove=function(d){var m=this.getTouch(d.changedTouches);m&&this._pointerMove(d,m)},l._pointerMove=function(d,m){this.pointerMove(d,m)},l.pointerMove=function(d,m){this.emitEvent("pointerMove",[d,m])},l.onmouseup=function(d){this._pointerUp(d,d)},l.onpointerup=function(d){d.pointerId==this.pointerIdentifier&&this._pointerUp(d,d)},l.ontouchend=function(d){var m=this.getTouch(d.changedTouches);m&&this._pointerUp(d,m)},l._pointerUp=function(d,m){this._pointerDone(),this.pointerUp(d,m)},l.pointerUp=function(d,m){this.emitEvent("pointerUp",[d,m])},l._pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this._unbindPostStartEvents(),this.pointerDone()},l.pointerDone=s,l.onpointercancel=function(d){d.pointerId==this.pointerIdentifier&&this._pointerCancel(d,d)},l.ontouchcancel=function(d){var m=this.getTouch(d.changedTouches);m&&this._pointerCancel(d,m)},l._pointerCancel=function(d,m){this._pointerDone(),this.pointerCancel(d,m)},l.pointerCancel=function(d,m){this.emitEvent("pointerCancel",[d,m])},h.getPointerPoint=function(d){return{x:d.pageX,y:d.pageY}},h}),function(n,r){typeof define=="function"&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(s){return r(n,s)}):typeof module=="object"&&module.exports?module.exports=r(n,require("unipointer")):n.Unidragger=r(n,n.Unipointer)}(window,function(n,r){function s(){}var h=s.prototype=Object.create(r.prototype);return h.bindHandles=function(){this._bindHandles(!0)},h.unbindHandles=function(){this._bindHandles(!1)},h._bindHandles=function(l){l=l===void 0||!!l;for(var f=l?"addEventListener":"removeEventListener",d=0;d<this.handles.length;d++){var m=this.handles[d];this._bindStartEvent(m,l),m[f]("click",this),n.PointerEvent&&(m.style.touchAction=l?this._touchActionValue:"")}},h._touchActionValue="none",h.pointerDown=function(l,f){if(l.target.nodeName=="INPUT"&&l.target.type=="range")return this.isPointerDown=!1,void delete this.pointerIdentifier;this._dragPointerDown(l,f);var d=document.activeElement;d&&d.blur&&d.blur(),this._bindPostStartEvents(l),this.emitEvent("pointerDown",[l,f])},h._dragPointerDown=function(l,f){this.pointerDownPoint=r.getPointerPoint(f);var d=this.canPreventDefaultOnPointerDown(l,f);d&&l.preventDefault()},h.canPreventDefaultOnPointerDown=function(l){return l.target.nodeName!="SELECT"},h.pointerMove=function(l,f){var d=this._dragPointerMove(l,f);this.emitEvent("pointerMove",[l,f,d]),this._dragMove(l,f,d)},h._dragPointerMove=function(l,f){var d=r.getPointerPoint(f),m={x:d.x-this.pointerDownPoint.x,y:d.y-this.pointerDownPoint.y};return!this.isDragging&&this.hasDragStarted(m)&&this._dragStart(l,f),m},h.hasDragStarted=function(l){return Math.abs(l.x)>3||Math.abs(l.y)>3},h.pointerUp=function(l,f){this.emitEvent("pointerUp",[l,f]),this._dragPointerUp(l,f)},h._dragPointerUp=function(l,f){this.isDragging?this._dragEnd(l,f):this._staticClick(l,f)},h._dragStart=function(l,f){this.isDragging=!0,this.dragStartPoint=r.getPointerPoint(f),this.isPreventingClicks=!0,this.dragStart(l,f)},h.dragStart=function(l,f){this.emitEvent("dragStart",[l,f])},h._dragMove=function(l,f,d){this.isDragging&&this.dragMove(l,f,d)},h.dragMove=function(l,f,d){l.preventDefault(),this.emitEvent("dragMove",[l,f,d])},h._dragEnd=function(l,f){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(l,f)},h.dragEnd=function(l,f){this.emitEvent("dragEnd",[l,f])},h.onclick=function(l){this.isPreventingClicks&&l.preventDefault()},h._staticClick=function(l,f){if(!this.isIgnoringMouseUp||l.type!="mouseup"){var d=l.target.nodeName;d!="INPUT"&&d!="TEXTAREA"||l.target.focus(),this.staticClick(l,f),l.type!="mouseup"&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400))}},h.staticClick=function(l,f){this.emitEvent("staticClick",[l,f])},s.getPointerPoint=r.getPointerPoint,s}),function(n,r){typeof define=="function"&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(s,h,l){return r(n,s,h,l)}):typeof module=="object"&&module.exports?module.exports=r(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=r(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(n,r,s,h){function l(S){var T=S.type=="touchstart",j=S.pointerType=="touch",L=A[S.target.nodeName];return T||j||L}function f(){return{x:n.pageXOffset,y:n.pageYOffset}}h.extend(r.defaults,{draggable:!0,dragThreshold:3}),r.createMethods.push("_createDrag");var d=r.prototype;h.extend(d,s.prototype),d._touchActionValue="pan-y";var m="createTouch"in document,w=!1;d._createDrag=function(){this.on("activate",this.bindDrag),this.on("uiChange",this._uiChangeDrag),this.on("childUIPointerDown",this._childUIPointerDownDrag),this.on("deactivate",this.unbindDrag),m&&!w&&(n.addEventListener("touchmove",function(){}),w=!0)},d.bindDrag=function(){this.options.draggable&&!this.isDragBound&&(this.element.classList.add("is-draggable"),this.handles=[this.viewport],this.bindHandles(),this.isDragBound=!0)},d.unbindDrag=function(){this.isDragBound&&(this.element.classList.remove("is-draggable"),this.unbindHandles(),delete this.isDragBound)},d._uiChangeDrag=function(){delete this.isFreeScrolling},d._childUIPointerDownDrag=function(S){S.preventDefault(),this.pointerDownFocus(S)};var _={TEXTAREA:!0,INPUT:!0,OPTION:!0},E={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};d.pointerDown=function(S,T){var j=_[S.target.nodeName]&&!E[S.target.type];if(j)return this.isPointerDown=!1,void delete this.pointerIdentifier;this._dragPointerDown(S,T);var L=document.activeElement;L&&L.blur&&L!=this.element&&L!=document.body&&L.blur(),this.pointerDownFocus(S),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this._bindPostStartEvents(S),this.pointerDownScroll=f(),n.addEventListener("scroll",this),this.dispatchEvent("pointerDown",S,[T])},d.pointerDownFocus=function(S){var T=l(S);if(this.options.accessibility&&!T){var j=n.pageYOffset;this.element.focus(),n.pageYOffset!=j&&n.scrollTo(n.pageXOffset,j)}};var A={INPUT:!0,SELECT:!0};return d.canPreventDefaultOnPointerDown=function(S){var T=l(S);return!T},d.hasDragStarted=function(S){return Math.abs(S.x)>this.options.dragThreshold},d.pointerUp=function(S,T){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",S,[T]),this._dragPointerUp(S,T)},d.pointerDone=function(){n.removeEventListener("scroll",this),delete this.pointerDownScroll},d.dragStart=function(S,T){this.dragStartPosition=this.x,this.startAnimation(),n.removeEventListener("scroll",this),this.dispatchEvent("dragStart",S,[T])},d.pointerMove=function(S,T){var j=this._dragPointerMove(S,T);this.dispatchEvent("pointerMove",S,[T,j]),this._dragMove(S,T,j)},d.dragMove=function(S,T,j){S.preventDefault(),this.previousDragX=this.dragX;var L=this.options.rightToLeft?-1:1,C=this.dragStartPosition+j.x*L;if(!this.options.wrapAround&&this.slides.length){var O=Math.max(-this.slides[0].target,this.dragStartPosition);C=C>O?.5*(C+O):C;var F=Math.min(-this.getLastSlide().target,this.dragStartPosition);C=C<F?.5*(C+F):C}this.dragX=C,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",S,[T,j])},d.dragEnd=function(S,T){this.options.freeScroll&&(this.isFreeScrolling=!0);var j=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var L=this.getRestingPosition();this.isFreeScrolling=-L>this.slides[0].target&&-L<this.getLastSlide().target}else this.options.freeScroll||j!=this.selectedIndex||(j+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(j),delete this.isDragSelect,this.dispatchEvent("dragEnd",S,[T])},d.dragEndRestingSelect=function(){var S=this.getRestingPosition(),T=Math.abs(this.getSlideDistance(-S,this.selectedIndex)),j=this._getClosestResting(S,T,1),L=this._getClosestResting(S,T,-1),C=j.distance<L.distance?j.index:L.index;return C},d._getClosestResting=function(S,T,j){for(var L=this.selectedIndex,C=1/0,O=this.options.contain&&!this.options.wrapAround?function(F,U){return F<=U}:function(F,U){return F<U};O(T,C)&&(L+=j,C=T,T=this.getSlideDistance(-S,L),T!==null);)T=Math.abs(T);return{distance:C,index:L-j}},d.getSlideDistance=function(S,T){var j=this.slides.length,L=this.options.wrapAround&&j>1,C=L?h.modulo(T,j):T,O=this.slides[C];if(!O)return null;var F=L?this.slideableWidth*Math.floor(T/j):0;return S-(O.target+F)},d.dragEndBoostSelect=function(){if(this.previousDragX===void 0||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;var S=this.getSlideDistance(-this.dragX,this.selectedIndex),T=this.previousDragX-this.dragX;return S>0&&T>0?1:S<0&&T<0?-1:0},d.staticClick=function(S,T){var j=this.getParentCell(S.target),L=j&&j.element,C=j&&this.cells.indexOf(j);this.dispatchEvent("staticClick",S,[T,L,C])},d.onscroll=function(){var S=f(),T=this.pointerDownScroll.x-S.x,j=this.pointerDownScroll.y-S.y;(Math.abs(T)>3||Math.abs(j)>3)&&this._pointerDone()},r}),function(n,r){typeof define=="function"&&define.amd?define("tap-listener/tap-listener",["unipointer/unipointer"],function(s){return r(n,s)}):typeof module=="object"&&module.exports?module.exports=r(n,require("unipointer")):n.TapListener=r(n,n.Unipointer)}(window,function(n,r){function s(l){this.bindTap(l)}var h=s.prototype=Object.create(r.prototype);return h.bindTap=function(l){l&&(this.unbindTap(),this.tapElement=l,this._bindStartEvent(l,!0))},h.unbindTap=function(){this.tapElement&&(this._bindStartEvent(this.tapElement,!0),delete this.tapElement)},h.pointerUp=function(l,f){if(!this.isIgnoringMouseUp||l.type!="mouseup"){var d=r.getPointerPoint(f),m=this.tapElement.getBoundingClientRect(),w=n.pageXOffset,_=n.pageYOffset,E=d.x>=m.left+w&&d.x<=m.right+w&&d.y>=m.top+_&&d.y<=m.bottom+_;if(E&&this.emitEvent("tap",[l,f]),l.type!="mouseup"){this.isIgnoringMouseUp=!0;var A=this;setTimeout(function(){delete A.isIgnoringMouseUp},400)}}},h.destroy=function(){this.pointerDone(),this.unbindTap()},s}),function(n,r){typeof define=="function"&&define.amd?define("flickity/js/prev-next-button",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(s,h,l){return r(n,s,h,l)}):typeof module=="object"&&module.exports?module.exports=r(n,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):r(n,n.Flickity,n.TapListener,n.fizzyUIUtils)}(window,function(n,r,s,h){"use strict";function l(w,_){this.direction=w,this.parent=_,this._create()}function f(w){return typeof w=="string"?w:"M "+w.x0+",50 L "+w.x1+","+(w.y1+50)+" L "+w.x2+","+(w.y2+50)+" L "+w.x3+",50  L "+w.x2+","+(50-w.y2)+" L "+w.x1+","+(50-w.y1)+" Z"}var d="http://www.w3.org/2000/svg";l.prototype=new s,l.prototype._create=function(){this.isEnabled=!0,this.isPrevious=this.direction==-1;var w=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==w;var _=this.element=document.createElement("button");_.className="flickity-prev-next-button",_.className+=this.isPrevious?" previous":" next",_.setAttribute("type","button"),this.disable(),_.setAttribute("aria-label",this.isPrevious?"previous":"next");var E=this.createSVG();_.appendChild(E),this.on("tap",this.onTap),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},l.prototype.activate=function(){this.bindTap(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},l.prototype.deactivate=function(){this.parent.element.removeChild(this.element),s.prototype.destroy.call(this),this.element.removeEventListener("click",this)},l.prototype.createSVG=function(){var w=document.createElementNS(d,"svg");w.setAttribute("viewBox","0 0 100 100");var _=document.createElementNS(d,"path"),E=f(this.parent.options.arrowShape);return _.setAttribute("d",E),_.setAttribute("class","arrow"),this.isLeft||_.setAttribute("transform","translate(100, 100) rotate(180) "),w.appendChild(_),w},l.prototype.onTap=function(){if(this.isEnabled){this.parent.uiChange();var w=this.isPrevious?"previous":"next";this.parent[w]()}},l.prototype.handleEvent=h.handleEvent,l.prototype.onclick=function(){var w=document.activeElement;w&&w==this.element&&this.onTap()},l.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},l.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},l.prototype.update=function(){var w=this.parent.slides;if(this.parent.options.wrapAround&&w.length>1)return void this.enable();var _=w.length?w.length-1:0,E=this.isPrevious?0:_,A=this.parent.selectedIndex==E?"disable":"enable";this[A]()},l.prototype.destroy=function(){this.deactivate()},h.extend(r.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),r.createMethods.push("_createPrevNextButtons");var m=r.prototype;return m._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new l(-1,this),this.nextButton=new l(1,this),this.on("activate",this.activatePrevNextButtons))},m.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},m.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},r.PrevNextButton=l,r}),function(n,r){typeof define=="function"&&define.amd?define("flickity/js/page-dots",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(s,h,l){return r(n,s,h,l)}):typeof module=="object"&&module.exports?module.exports=r(n,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):r(n,n.Flickity,n.TapListener,n.fizzyUIUtils)}(window,function(n,r,s,h){function l(d){this.parent=d,this._create()}l.prototype=new s,l.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.on("tap",this.onTap),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},l.prototype.activate=function(){this.setDots(),this.bindTap(this.holder),this.parent.element.appendChild(this.holder)},l.prototype.deactivate=function(){this.parent.element.removeChild(this.holder),s.prototype.destroy.call(this)},l.prototype.setDots=function(){var d=this.parent.slides.length-this.dots.length;d>0?this.addDots(d):d<0&&this.removeDots(-d)},l.prototype.addDots=function(d){for(var m=document.createDocumentFragment(),w=[];d;){var _=document.createElement("li");_.className="dot",m.appendChild(_),w.push(_),d--}this.holder.appendChild(m),this.dots=this.dots.concat(w)},l.prototype.removeDots=function(d){var m=this.dots.splice(this.dots.length-d,d);m.forEach(function(w){this.holder.removeChild(w)},this)},l.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot"),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected")},l.prototype.onTap=function(d){var m=d.target;if(m.nodeName=="LI"){this.parent.uiChange();var w=this.dots.indexOf(m);this.parent.select(w)}},l.prototype.destroy=function(){this.deactivate()},r.PageDots=l,h.extend(r.defaults,{pageDots:!0}),r.createMethods.push("_createPageDots");var f=r.prototype;return f._createPageDots=function(){this.options.pageDots&&(this.pageDots=new l(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},f.activatePageDots=function(){this.pageDots.activate()},f.updateSelectedPageDots=function(){this.pageDots.updateSelected()},f.updatePageDots=function(){this.pageDots.setDots()},f.deactivatePageDots=function(){this.pageDots.deactivate()},r.PageDots=l,r}),function(n,r){typeof define=="function"&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(s,h,l){return r(s,h,l)}):typeof module=="object"&&module.exports?module.exports=r(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):r(n.EvEmitter,n.fizzyUIUtils,n.Flickity)}(window,function(n,r,s){function h(m){this.parent=m,this.state="stopped",f&&(this.onVisibilityChange=function(){this.visibilityChange()}.bind(this),this.onVisibilityPlay=function(){this.visibilityPlay()}.bind(this))}var l,f;"hidden"in document?(l="hidden",f="visibilitychange"):"webkitHidden"in document&&(l="webkitHidden",f="webkitvisibilitychange"),h.prototype=Object.create(n.prototype),h.prototype.play=function(){if(this.state!="playing"){var m=document[l];if(f&&m)return void document.addEventListener(f,this.onVisibilityPlay);this.state="playing",f&&document.addEventListener(f,this.onVisibilityChange),this.tick()}},h.prototype.tick=function(){if(this.state=="playing"){var m=this.parent.options.autoPlay;m=typeof m=="number"?m:3e3;var w=this;this.clear(),this.timeout=setTimeout(function(){w.parent.next(!0),w.tick()},m)}},h.prototype.stop=function(){this.state="stopped",this.clear(),f&&document.removeEventListener(f,this.onVisibilityChange)},h.prototype.clear=function(){clearTimeout(this.timeout)},h.prototype.pause=function(){this.state=="playing"&&(this.state="paused",this.clear())},h.prototype.unpause=function(){this.state=="paused"&&this.play()},h.prototype.visibilityChange=function(){var m=document[l];this[m?"pause":"unpause"]()},h.prototype.visibilityPlay=function(){this.play(),document.removeEventListener(f,this.onVisibilityPlay)},r.extend(s.defaults,{pauseAutoPlayOnHover:!0}),s.createMethods.push("_createPlayer");var d=s.prototype;return d._createPlayer=function(){this.player=new h(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},d.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},d.playPlayer=function(){this.player.play()},d.stopPlayer=function(){this.player.stop()},d.pausePlayer=function(){this.player.pause()},d.unpausePlayer=function(){this.player.unpause()},d.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},d.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},d.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},s.Player=h,s}),function(n,r){typeof define=="function"&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(s,h){return r(n,s,h)}):typeof module=="object"&&module.exports?module.exports=r(n,require("./flickity"),require("fizzy-ui-utils")):r(n,n.Flickity,n.fizzyUIUtils)}(window,function(n,r,s){function h(f){var d=document.createDocumentFragment();return f.forEach(function(m){d.appendChild(m.element)}),d}var l=r.prototype;return l.insert=function(f,d){var m=this._makeCells(f);if(m&&m.length){var w=this.cells.length;d=d===void 0?w:d;var _=h(m),E=d==w;if(E)this.slider.appendChild(_);else{var A=this.cells[d].element;this.slider.insertBefore(_,A)}if(d===0)this.cells=m.concat(this.cells);else if(E)this.cells=this.cells.concat(m);else{var S=this.cells.splice(d,w-d);this.cells=this.cells.concat(m).concat(S)}this._sizeCells(m);var T=d>this.selectedIndex?0:m.length;this._cellAddedRemoved(d,T)}},l.append=function(f){this.insert(f,this.cells.length)},l.prepend=function(f){this.insert(f,0)},l.remove=function(f){var d,m,w=this.getCells(f),_=0,E=w.length;for(d=0;d<E;d++){m=w[d];var A=this.cells.indexOf(m)<this.selectedIndex;_-=A?1:0}for(d=0;d<E;d++)m=w[d],m.remove(),s.removeFrom(this.cells,m);w.length&&this._cellAddedRemoved(0,_)},l._cellAddedRemoved=function(f,d){d=d||0,this.selectedIndex+=d,this.selectedIndex=Math.max(0,Math.min(this.slides.length-1,this.selectedIndex)),this.cellChange(f,!0),this.emitEvent("cellAddedRemoved",[f,d])},l.cellSizeChange=function(f){var d=this.getCell(f);if(d){d.getSize();var m=this.cells.indexOf(d);this.cellChange(m)}},l.cellChange=function(f,d){var m=this.slideableWidth;if(this._positionCells(f),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("cellChange",[f]),this.options.freeScroll){var w=m-this.slideableWidth;this.x+=w*this.cellAlign,this.positionSlider()}else d&&this.positionSliderAtSelected(),this.select(this.selectedIndex)},r}),function(n,r){typeof define=="function"&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(s,h){return r(n,s,h)}):typeof module=="object"&&module.exports?module.exports=r(n,require("./flickity"),require("fizzy-ui-utils")):r(n,n.Flickity,n.fizzyUIUtils)}(window,function(n,r,s){"use strict";function h(d){if(d.nodeName=="IMG"&&d.getAttribute("data-flickity-lazyload"))return[d];var m=d.querySelectorAll("img[data-flickity-lazyload]");return s.makeArray(m)}function l(d,m){this.img=d,this.flickity=m,this.load()}r.createMethods.push("_createLazyload");var f=r.prototype;return f._createLazyload=function(){this.on("select",this.lazyLoad)},f.lazyLoad=function(){var d=this.options.lazyLoad;if(d){var m=typeof d=="number"?d:0,w=this.getAdjacentCellElements(m),_=[];w.forEach(function(E){var A=h(E);_=_.concat(A)}),_.forEach(function(E){new l(E,this)},this)}},l.prototype.handleEvent=s.handleEvent,l.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.img.getAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload")},l.prototype.onload=function(d){this.complete(d,"flickity-lazyloaded")},l.prototype.onerror=function(d){this.complete(d,"flickity-lazyerror")},l.prototype.complete=function(d,m){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var w=this.flickity.getParentCell(this.img),_=w&&w.element;this.flickity.cellSizeChange(_),this.img.classList.add(m),this.flickity.dispatchEvent("lazyLoad",d,_)},r.LazyLoader=l,r}),function(n,r){typeof define=="function"&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],r):typeof module=="object"&&module.exports&&(module.exports=r(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(n){return n}),function(n,r){typeof define=="function"&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],r):typeof module=="object"&&module.exports?module.exports=r(require("flickity"),require("fizzy-ui-utils")):n.Flickity=r(n.Flickity,n.fizzyUIUtils)}(window,function(n,r){function s(l,f,d){return(f-l)*d+l}n.createMethods.push("_createAsNavFor");var h=n.prototype;return h._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var l=this.options.asNavFor;if(l){var f=this;setTimeout(function(){f.setNavCompanion(l)})}},h.setNavCompanion=function(l){l=r.getQueryElement(l);var f=n.data(l);if(f&&f!=this){this.navCompanion=f;var d=this;this.onNavCompanionSelect=function(){d.navCompanionSelect()},f.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},h.navCompanionSelect=function(l){if(this.navCompanion){var f=this.navCompanion.selectedCells[0],d=this.navCompanion.cells.indexOf(f),m=d+this.navCompanion.selectedCells.length-1,w=Math.floor(s(d,m,this.navCompanion.cellAlign));if(this.selectCell(w,!1,l),this.removeNavSelectedElements(),!(w>=this.cells.length)){var _=this.cells.slice(d,m+1);this.navSelectedElements=_.map(function(E){return E.element}),this.changeNavSelectedClass("add")}}},h.changeNavSelectedClass=function(l){this.navSelectedElements.forEach(function(f){f.classList[l]("is-nav-selected")})},h.activateAsNavFor=function(){this.navCompanionSelect(!0)},h.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},h.onNavStaticClick=function(l,f,d,m){typeof m=="number"&&this.navCompanion.selectCell(m)},h.deactivateAsNavFor=function(){this.removeNavSelectedElements()},h.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(n,r){"use strict";typeof define=="function"&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(s){return r(n,s)}):typeof module=="object"&&module.exports?module.exports=r(n,require("ev-emitter")):n.imagesLoaded=r(n,n.EvEmitter)}(typeof window!="undefined"?window:this,function(n,r){function s(E,A){for(var S in A)E[S]=A[S];return E}function h(E){var A=[];if(Array.isArray(E))A=E;else if(typeof E.length=="number")for(var S=0;S<E.length;S++)A.push(E[S]);else A.push(E);return A}function l(E,A,S){return this instanceof l?(typeof E=="string"&&(E=document.querySelectorAll(E)),this.elements=h(E),this.options=s({},this.options),typeof A=="function"?S=A:s(this.options,A),S&&this.on("always",S),this.getImages(),m&&(this.jqDeferred=new m.Deferred),void setTimeout(function(){this.check()}.bind(this))):new l(E,A,S)}function f(E){this.img=E}function d(E,A){this.url=E,this.element=A,this.img=new Image}var m=n.jQuery,w=n.console;l.prototype=Object.create(r.prototype),l.prototype.options={},l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},l.prototype.addElementImages=function(E){E.nodeName=="IMG"&&this.addImage(E),this.options.background===!0&&this.addElementBackgroundImages(E);var A=E.nodeType;if(A&&_[A]){for(var S=E.querySelectorAll("img"),T=0;T<S.length;T++){var j=S[T];this.addImage(j)}if(typeof this.options.background=="string"){var L=E.querySelectorAll(this.options.background);for(T=0;T<L.length;T++){var C=L[T];this.addElementBackgroundImages(C)}}}};var _={1:!0,9:!0,11:!0};return l.prototype.addElementBackgroundImages=function(E){var A=getComputedStyle(E);if(A)for(var S=/url\((['"])?(.*?)\1\)/gi,T=S.exec(A.backgroundImage);T!==null;){var j=T&&T[2];j&&this.addBackground(j,E),T=S.exec(A.backgroundImage)}},l.prototype.addImage=function(E){var A=new f(E);this.images.push(A)},l.prototype.addBackground=function(E,A){var S=new d(E,A);this.images.push(S)},l.prototype.check=function(){function E(S,T,j){setTimeout(function(){A.progress(S,T,j)})}var A=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(S){S.once("progress",E),S.check()}):void this.complete()},l.prototype.progress=function(E,A,S){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!E.isLoaded,this.emitEvent("progress",[this,E,A]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,E),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&w&&w.log("progress: "+S,E,A)},l.prototype.complete=function(){var E=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(E,[this]),this.emitEvent("always",[this]),this.jqDeferred){var A=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[A](this)}},f.prototype=Object.create(r.prototype),f.prototype.check=function(){var E=this.getIsImageComplete();return E?void this.confirm(this.img.naturalWidth!==0,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},f.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth!==void 0},f.prototype.confirm=function(E,A){this.isLoaded=E,this.emitEvent("progress",[this,this.img,A])},f.prototype.handleEvent=function(E){var A="on"+E.type;this[A]&&this[A](E)},f.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},f.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},f.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype=Object.create(f.prototype),d.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var E=this.getIsImageComplete();E&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},d.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype.confirm=function(E,A){this.isLoaded=E,this.emitEvent("progress",[this,this.element,A])},l.makeJQueryPlugin=function(E){E=E||n.jQuery,E&&(m=E,m.fn.imagesLoaded=function(A,S){var T=new l(this,A,S);return T.jqDeferred.promise(m(this))})},l.makeJQueryPlugin(),l}),function(n,r){typeof define=="function"&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(s,h){return r(n,s,h)}):typeof module=="object"&&module.exports?module.exports=r(n,require("flickity"),require("imagesloaded")):n.Flickity=r(n,n.Flickity,n.imagesLoaded)}(window,function(n,r,s){"use strict";r.createMethods.push("_createImagesLoaded");var h=r.prototype;return h._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},h.imagesLoaded=function(){function l(d,m){var w=f.getParentCell(m.img);f.cellSizeChange(w&&w.element),f.options.freeScroll||f.positionSliderAtSelected()}if(this.options.imagesLoaded){var f=this;s(this.slider).on("progress",l)}},r});/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/(function(n,r,s){function h(F,U){return typeof F===U}function l(){var F,U,G,u,ce,ve,H;for(var W in E)if(E.hasOwnProperty(W)){if(F=[],U=E[W],U.name&&(F.push(U.name.toLowerCase()),U.options&&U.options.aliases&&U.options.aliases.length))for(G=0;G<U.options.aliases.length;G++)F.push(U.options.aliases[G].toLowerCase());for(u=h(U.fn,"function")?U.fn():U.fn,ce=0;ce<F.length;ce++)ve=F[ce],H=ve.split("."),H.length===1?S[H[0]]=u:(!S[H[0]]||S[H[0]]instanceof Boolean||(S[H[0]]=new Boolean(S[H[0]])),S[H[0]][H[1]]=u),_.push((u?"":"no-")+H.join("-"))}}function f(F){var U=T.className,G=S._config.classPrefix||"";if(j&&(U=U.baseVal),S._config.enableJSClass){var u=new RegExp("(^|\\s)"+G+"no-js(\\s|$)");U=U.replace(u,"$1"+G+"js$2")}S._config.enableClasses&&(U+=" "+G+F.join(" "+G),j?T.className.baseVal=U:T.className=U)}function d(){return typeof r.createElement!="function"?r.createElement(arguments[0]):j?r.createElementNS.call(r,"http://www.w3.org/2000/svg",arguments[0]):r.createElement.apply(r,arguments)}function m(){var F=r.body;return F||(F=d(j?"svg":"body"),F.fake=!0),F}function w(F,U,G,u){var ce,ve,H,W,Z="modernizr",J=d("div"),X=m();if(parseInt(G,10))for(;G--;)H=d("div"),H.id=u?u[G]:Z+(G+1),J.appendChild(H);return ce=d("style"),ce.type="text/css",ce.id="s"+Z,(X.fake?X:J).appendChild(ce),X.appendChild(J),ce.styleSheet?ce.styleSheet.cssText=F:ce.appendChild(r.createTextNode(F)),J.id=Z,X.fake&&(X.style.background="",X.style.overflow="hidden",W=T.style.overflow,T.style.overflow="hidden",T.appendChild(X)),ve=U(J,F),X.fake?(X.parentNode.removeChild(X),T.style.overflow=W,T.offsetHeight):J.parentNode.removeChild(J),!!ve}var _=[],E=[],A={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(F,U){var G=this;setTimeout(function(){U(G[F])},0)},addTest:function(F,U,G){E.push({name:F,fn:U,options:G})},addAsyncTest:function(F){E.push({name:null,fn:F})}},S=function(){};S.prototype=A,S=new S;var T=r.documentElement,j=T.nodeName.toLowerCase()==="svg",L=A._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];A._prefixes=L;var C=A.testStyles=w;S.addTest("touchevents",function(){var F;if("ontouchstart"in n||n.DocumentTouch&&r instanceof DocumentTouch)F=!0;else{var U=["@media (",L.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");C(U,function(G){F=G.offsetTop===9})}return F}),l(),f(_),delete A.addTest,delete A.addAsyncTest;for(var O=0;O<S._q.length;O++)S._q[O]();n.Modernizr=S})(window,document);/*!
 * Headhesive.js v1.2.3 - An on-demand sticky header
 * Author: Copyright (c) Mark Goodyear <@markgdyr> <http://markgoodyear.com>
 * Url: http://markgoodyear.com/labs/headhesive
 * License: MIT
 */(function(n,r){typeof define=="function"&&define.amd?define([],function(){return r()}):typeof exports=="object"?module.exports=r():n.Headhesive=r()})(this,function(){"use strict";var n=function(f,d){for(var m in d)d.hasOwnProperty(m)&&(f[m]=typeof d[m]=="object"?n(f[m],d[m]):d[m]);return f},r=function(f,d){var m,w,_,E=Date.now||function(){return new Date().getTime()},A=null,S=0,T=function(){S=E(),A=null,_=f.apply(m,w),m=w=null};return function(){var j=E(),L=d-(j-S);return m=this,w=arguments,0>=L?(clearTimeout(A),A=null,S=j,_=f.apply(m,w),m=w=null):A||(A=setTimeout(T,L)),_}},s=function(){return window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},h=function(f,d){for(var m=0,w=f.offsetHeight;f;)m+=f.offsetTop,f=f.offsetParent;return d==="bottom"&&(m+=w),m},l=function(f,d){"querySelector"in document&&"addEventListener"in window&&(this.visible=!1,this.options={offset:300,offsetSide:"top",classes:{clone:"headhesive",stick:"headhesive--stick",unstick:"headhesive--unstick"},throttle:250,onInit:function(){},onStick:function(){},onUnstick:function(){},onDestroy:function(){}},this.elem=typeof f=="string"?document.querySelector(f):f,this.options=n(this.options,d),this.init())};return l.prototype={constructor:l,init:function(){if(this.clonedElem=this.elem.cloneNode(!0),this.clonedElem.className+=" "+this.options.classes.clone,document.body.insertBefore(this.clonedElem,document.body.firstChild),typeof this.options.offset=="number")this.scrollOffset=this.options.offset;else{if(typeof this.options.offset!="string")throw new Error("Invalid offset: "+this.options.offset);this._setScrollOffset()}this._throttleUpdate=r(this.update.bind(this),this.options.throttle),this._throttleScrollOffset=r(this._setScrollOffset.bind(this),this.options.throttle),window.addEventListener("scroll",this._throttleUpdate,!1),window.addEventListener("resize",this._throttleScrollOffset,!1),this.options.onInit.call(this)},_setScrollOffset:function(){typeof this.options.offset=="string"&&(this.scrollOffset=h(document.querySelector(this.options.offset),this.options.offsetSide))},destroy:function(){document.body.removeChild(this.clonedElem),window.removeEventListener("scroll",this._throttleUpdate),window.removeEventListener("resize",this._throttleScrollOffset),this.options.onDestroy.call(this)},stick:function(){this.visible||(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.unstick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.stick,this.visible=!0,this.options.onStick.call(this))},unstick:function(){this.visible&&(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.stick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.unstick,this.visible=!1,this.options.onUnstick.call(this))},update:function(){s()>this.scrollOffset?this.stick():this.unstick()}},l});/*! js-url - v2.5.0 - 2017-04-22 */(function(){var n=function(){function r(){}function s(f){return decodeURIComponent(f.replace(/\+/g," "))}function h(f,d){var m=f.charAt(0),w=d.split(m);return m===f?w:(f=parseInt(f.substring(1),10),w[f<0?w.length+f:f-1])}function l(f,d){for(var m=f.charAt(0),w=d.split("&"),_=[],E={},A=[],S=f.substring(1),T=0,j=w.length;T<j;T++)if(_=w[T].match(/(.*?)=(.*)/),_||(_=[w[T],w[T],""]),_[1].replace(/\s/g,"")!==""){if(_[2]=s(_[2]||""),S===_[1])return _[2];A=_[1].match(/(.*)\[([0-9]+)\]/),A?(E[A[1]]=E[A[1]]||[],E[A[1]][A[2]]=_[2]):E[_[1]]=_[2]}return m===f?E:E[S]}return function(f,d){var m,w={};if(f==="tld?")return void 0;if(d=d||window.location.toString(),!f)return d;if(f=f.toString(),m=d.match(/^mailto:([^\/].+)/))w.protocol="mailto",w.email=m[1];else{if((m=d.match(/(.*?)\/#\!(.*)/))&&(d=m[1]+m[2]),(m=d.match(/(.*?)#(.*)/))&&(w.hash=m[2],d=m[1]),w.hash&&f.match(/^#/))return l(f,w.hash);if((m=d.match(/(.*?)\?(.*)/))&&(w.query=m[2],d=m[1]),w.query&&f.match(/^\?/))return l(f,w.query);if((m=d.match(/(.*?)\:?\/\/(.*)/))&&(w.protocol=m[1].toLowerCase(),d=m[2]),(m=d.match(/(.*?)(\/.*)/))&&(w.path=m[2],d=m[1]),w.path=(w.path||"").replace(/^([^\/])/,"/$1"),f.match(/^[\-0-9]+$/)&&(f=f.replace(/^([^\/])/,"/$1")),f.match(/^\//))return h(f,w.path.substring(1));if(m=h("/-1",w.path.substring(1)),m&&(m=m.match(/(.*?)\.(.*)/))&&(w.file=m[0],w.filename=m[1],w.fileext=m[2]),(m=d.match(/(.*)\:([0-9]+)$/))&&(w.port=m[2],d=m[1]),(m=d.match(/(.*?)@(.*)/))&&(w.auth=m[1],d=m[2]),w.auth&&(m=w.auth.match(/(.*)\:(.*)/),w.user=m?m[1]:w.auth,w.pass=m?m[2]:void 0),w.hostname=d.toLowerCase(),f.charAt(0)===".")return h(f,w.hostname);void 0&&(m=w.hostname.match(void 0),m&&(w.tld=m[3],w.domain=m[2]?m[2]+"."+m[3]:void 0,w.sub=m[1]||void 0)),w.port=w.port||(w.protocol==="https"?"443":"80"),w.protocol=w.protocol||(w.port==="443"?"https":"http")}return f in w?w[f]:f==="{}"?w:void 0}}();typeof window.define=="function"&&window.define.amd?window.define("js-url",[],function(){return n}):(typeof window.jQuery!="undefined"&&window.jQuery.extend({url:function(r,s){return window.url(r,s)}}),window.url=n)})();var social={twitter:function(){window.twttr||(window.twttr=function(n,r,s){var h,l,f=n.getElementsByTagName(r)[0];if(!n.getElementById(s))return l=n.createElement(r),l.id=s,l.src="https://platform.twitter.com/widgets.js",f.parentNode.insertBefore(l,f),window.twttr||(h={_e:[],ready:function(d){h._e.push(d)}})}(document,"script","twitter-wjs")),window.twttr&&window.twttr.ready(function(n){n.widgets.load(document.getElementById("twitter-timeline"))})},unload:function(){}},instagram={loadContent:function(n){if(n.clientID){var r="https://api.instagram.com/v1/users/self/media/recent/?access_token="+n.clientID;$.ajax({type:"GET",url:r,dataType:"jsonp",success:function(s){if(s.meta.code===200&&s.data.length){var s=s.data,h=0;n.el.empty();for(var l=0;l<s.length;l++){var f=s[l],d,m=f.images.low_resolution.url;if(!f.images.low_resolution.url.indexOf("null")>-1&&(d='<div class="il-photo__img instagram__bg" style="background-image:url('+m+')" data-filter="'+f.filter+'" /></div>',d='<a href="'+f.link+'" target="_blank" class="instagram__link">'+d+"</a>"),f.videos&&(d='<div class="instagram__video instagram__bg" style="background-image:url('+m+')" data-filter="'+f.filter+'" /></div>',d='<a href="'+f.link+'" target="_blank" class="instagram__link instagram__video-link">'+d+"</a>"),d&&(d='<div class="four columns instagram__item">'+d+"</div>"),d!==""&&(n.el.append(d),h++),h==n.limit)break}}},error:function(){}})}}};$(".social-feeds-wrap").each(function(n,r){social.twitter();var s=$(this).find(".js-instafeed");instagram.loadContent({el:s,clientID:s.data("client-id"),limit:s.data("count")})}),$(document).on("shopify:block:select",function(n){var r=n.detail.blockId,s=$("#shopify-section-"+n.detail.sectionId);(s.hasClass("slideshow-section")||s.hasClass("testimonial-section"))&&sliderBlock.select(r,s),s.hasClass("product-template"),utils.resizeActionButtons()}),$(document).on("shopify:block:deselect",function(n){var r=$("#shopify-section-"+n.detail.sectionId);(r.hasClass("slideshow-section")||r.hasClass("testimonial-section"))&&sliderBlock.deselect(r)}),$(document).on("shopify:section:reorder",function(n){utils.pageBannerCheck()}),$(document).on("shopify:section:load",function(n){var r=$("#shopify-section-"+n.detail.sectionId);utils.pageBannerCheck(),r.hasClass("social-feeds-section")&&$(".social-feeds-wrap").each(function(s,h){social.twitter();var l=$(this).find(".js-instafeed");instagram.loadContent({el:l,clientID:l.data("client-id"),limit:l.data("count")})}),r.hasClass("faq-section")&&faqAccordion.init(),r.hasClass("cart-section")&&cart.init(),r.hasClass("featured-promotions-section")&&featuredPromotions.init(),r.hasClass("slideshow-section")&&slideshow.init(),r.hasClass("search-section")&&searchAutocomplete.init(),r.hasClass("testimonial-section")&&testimonial.init(),r.hasClass("image-gallery-section")&&gallery.init(),r.hasClass("featured-products-section")&&(productPage.initializeQuantityBox(),productPage.productSwatches(),productPage.init()),r.hasClass("featured-collection-section")&&featuredCollectionSection.init(),r.hasClass("video-section")&&videoSection.init(),r.hasClass("recently-viewed")&&recentlyViewed.init(".js-recently-viewed"),r.hasClass("product-template")&&(productPage.init(),productPage.productSwatches(),productPage.relatedProducts(),recentlyViewed.init()),r.hasClass("article-template-section")&&window.location.pathname.indexOf("/comments")!=-1&&$("html,body").animate({scrollTop:$("#new-comment").offset().top-140},"slow"),r.hasClass("collection-template-section")&&collectionSidebarFilter.init(),r.hasClass("search-template-section")&&(collection.init(),searchAutocomplete.init(),collectionSidebarFilter.init()),r.hasClass("header-section")&&(header.init(),header.loadMegaMenu()),r.hasClass("mega-menu-section")&&header.loadMegaMenu(),r.hasClass("page-details-section")&&(featuredCollectionSection.init(),videoSection.init()),r.hasClass("product-details-section")&&(featuredCollectionSection.init(),videoSection.init())}),$(document).on("shopify:section:unload",function(n){var r=$(n.target),s=$("#shopify-section-"+n.detail.sectionId);s.hasClass("header-section")&&(header.unload(r),header.unloadMegaMenu()),s.hasClass("slideshow-section")&&slideshow.unload(r),s.hasClass("testimonial-section")&&testimonial.unload(r),s.hasClass("video-section")&&videoSection.unload(r),s.hasClass("search-section")&&searchAutocomplete.unload(r),s.hasClass("product-template")&&productPage.unload(r),s.hasClass("mega-menu-section")&&header.unloadMegaMenu(),s.hasClass("page-details-section")&&videoSection.unload(r),s.hasClass("product-details-section")&&videoSection.unload(r)}),$(document).on("shopify:section:select",function(n){var r=$("#shopify-section-"+n.detail.sectionId);if(r.hasClass("social-feeds-section")&&$(".social-feeds-wrap").each(function(l,f){social.twitter()}),r.hasClass("mega-menu-section")){var s=$(".header ."+n.detail.sectionId).data("dropdown");setTimeout(function(){$('a.mega-menu-parent[data-dropdown-rel="'+s+'"]').trigger("mouseenter"),$('a.mega-menu-parent[data-dropdown-rel="'+s+'"]').parents("header").addClass("editor-hover--true"),header.removeDataAttributes(".header .mega-menu.dropdown_container .dropdown_column")},10)}r.hasClass("featured-collection-section")&&(featuredCollectionSection.unload(r),featuredCollectionSection.init()),utils.pageBannerCheck();var h=document.createEvent("UIEvents");h.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(h)}),$(document).on("shopify:section:deselect",function(n){var r=$("#shopify-section-"+n.detail.sectionId);if(r.hasClass("mega-menu-section")){var s=$(".header ."+n.detail.sectionId).data("dropdown");$('a.mega-menu-parent[data-dropdown-rel="'+s+'"]').trigger("mouseout"),$('a.mega-menu-parent[data-dropdown-rel="'+s+'"]').parents("header").removeClass("editor-hover--true")}}),$(document).ready(function(){if($("body").on("click",".bc-hamburger-menu",function(){let n=$("body").find(".bc-nav-menu");n.hasClass("active")?n.removeClass("active"):n.addClass("active")}),$(".bctextwithslider").each(function(){$(this).flickity({lazyLoad:1,imagesLoaded:!0,draggable:!0,prevNextButtons:!0,pageDots:!1,contain:!0,freeScroll:!0})}),$("body").on("click",".bc-acc-head",function(){let s=$(this).closest(".bc-acc-box").find(".bc-acc-content");s.hasClass("active")?(s.removeClass("active"),s.slideUp()):(s.addClass("active"),s.slideDown())}),$("body").on("click",".cart_empty_content",function(){$("body").removeClass("cartisopen")}),$("body").on("click",".bc-cart-continue-shopping",function(){$("body").removeClass("cartisopen")}),$("body").on("click",".bc-cart-icon",function(){$("body").addClass("cartisopen")}),$("body").hasClass("index")){let n=$(window);if(n.width()>=768){let s=$(".bc-new-header"),h=$(".index-sections"),l=s.offset().top,f=s.height();n.scroll(function(){n.scrollTop()>=l?(h.css("padding-top",f+"px"),s.addClass("bc-sticky")):(h.css("padding-top","0px"),s.removeClass("bc-sticky"))})}}else $("body").css("padding-top",$(".bc-new-header").height()+"px")});
//# sourceMappingURL=/s/files/1/0560/6601/5425/t/2/assets/app.js.map?v=7424240658621831814
