(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{15057:function(e,t){"use strict";t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some(function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t})}return!0}},94509:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(70843).Z)("CloudUpload",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]])},3428:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(70843).Z)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]])},18314:function(e,t,n){"use strict";var r=n(41811);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},74404:function(e,t,n){e.exports=n(18314)()},41811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},54739:function(e,t,n){"use strict";n.d(t,{uI:function(){return Q}});var r=n(2265),o=n(74404),i=n.n(o),a=n(69703),c=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function u(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=c.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var l=[".DS_Store","Thumbs.db"];function s(e){return"object"==typeof e&&null!==e}function f(e){return e.filter(function(e){return -1===l.indexOf(e.name)})}function p(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function d(e){if("function"!=typeof e.webkitGetAsEntry)return m(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?g(t):m(e)}function m(e){var t=e.getAsFile();return t?Promise.resolve(u(t)):Promise.reject("".concat(e," is not a File"))}function v(e){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(t){return[2,e.isDirectory?g(e):function(e){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(t){return[2,new Promise(function(t,n){e.file(function(n){t(u(n,e.fullPath))},function(e){n(e)})})]})})}(e)]})})}function g(e){var t=e.createReader();return new Promise(function(e,n){var r=[];!function o(){var i=this;t.readEntries(function(t){return(0,a.mG)(i,void 0,void 0,function(){var i;return(0,a.Jh)(this,function(a){switch(a.label){case 0:if(t.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return e(a.sent()),[3,4];case 3:return n(a.sent()),[3,4];case 4:return[3,6];case 5:i=Promise.all(t.map(v)),r.push(i),o(),a.label=6;case 6:return[2]}})})},function(e){n(e)})}()})}var y=n(15057);function b(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){w(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||x(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var A=function(e){var t=Array.isArray(e=Array.isArray(e)&&1===e.length?e[0]:e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},k=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},E=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},F={code:"too-many-files",message:"Too many files"};function P(e,t){var n="application/x-moz-file"===e.type||(0,y.Z)(e,t);return[n,n?null:A(t)]}function S(e,t,n){if(C(e.size)){if(C(t)&&C(n)){if(e.size>n)return[!1,k(n)];if(e.size<t)return[!1,E(t)]}else if(C(t)&&e.size<t)return[!1,E(t)];else if(C(n)&&e.size>n)return[!1,k(n)]}return[!0,null]}function C(e){return null!=e}function z(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function R(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(e){return"Files"===e||"application/x-moz-file"===e}):!!e.target&&!!e.target.files}function T(e){e.preventDefault()}function I(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some(function(t){return!z(e)&&t&&t.apply(void 0,[e].concat(r)),z(e)})}}function _(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function M(e){return/^.*\.[\w]+$/.test(e)}var L=["children"],B=["open"],K=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],G=["refKey","onChange","onClick"];function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||W(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(e,t)}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach(function(t){H(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var $=(0,r.forwardRef)(function(e,t){var n=e.children,o=Q(N(e,L)),i=o.open,a=N(o,B);return(0,r.useImperativeHandle)(t,function(){return{open:i}},[i]),r.createElement(r.Fragment,null,n(q(q({},a),{},{open:i})))});$.displayName="Dropzone";var V={disabled:!1,getFilesFromEvent:function(e){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(t){return s(e)&&s(e.dataTransfer)?[2,function(e,t){return(0,a.mG)(this,void 0,void 0,function(){var n;return(0,a.Jh)(this,function(r){switch(r.label){case 0:if(!e.items)return[3,2];if(n=p(e.items).filter(function(e){return"file"===e.kind}),"drop"!==t)return[2,n];return[4,Promise.all(n.map(d))];case 1:return[2,f(function e(t){return t.reduce(function(t,n){return(0,a.ev)((0,a.ev)([],(0,a.CR)(t),!1),(0,a.CR)(Array.isArray(n)?e(n):[n]),!1)},[])}(r.sent()))];case 2:return[2,f(p(e.files).map(function(e){return u(e)}))]}})})}(e.dataTransfer,e.type)]:s(e)&&s(e.target)?[2,p(e.target.files).map(function(e){return u(e)})]:Array.isArray(e)&&e.every(function(e){return"getFile"in e&&"function"==typeof e.getFile})?[2,function(e){return(0,a.mG)(this,void 0,void 0,function(){return(0,a.Jh)(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(e){return e.getFile()}))];case 1:return[2,t.sent().map(function(e){return u(e)})]}})})}(e)]:[2,[]]})})},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};$.defaultProps=V,$.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var Y={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=q(q({},V),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,u=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,m=t.onDropAccepted,v=t.onDropRejected,g=t.onFileDialogCancel,y=t.onFileDialogOpen,h=t.useFsAccessApi,x=t.autoFocus,j=t.preventDropOnDocument,A=t.noClick,k=t.noKeyboard,E=t.noDrag,L=t.noDragEventsBubbling,B=t.onError,J=t.validator,$=(0,r.useMemo)(function(){return function(e){if(C(e))return Object.entries(e).reduce(function(e,t){var n=O(t,2),r=n[0],o=n[1];return[].concat(b(e),[r],b(o))},[]).filter(function(e){return _(e)||M(e)}).join(",")}(n)},[n]),Q=(0,r.useMemo)(function(){return C(n)?[{description:"Files",accept:Object.entries(n).filter(function(e){var t=O(e,2),n=t[0],r=t[1],o=!0;return _(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(M)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(e,t){var n=O(t,2),r=n[0],o=n[1];return D(D({},e),{},w({},r,o))},{})}]:n},[n]),et=(0,r.useMemo)(function(){return"function"==typeof y?y:ee},[y]),en=(0,r.useMemo)(function(){return"function"==typeof g?g:ee},[g]),er=(0,r.useRef)(null),eo=(0,r.useRef)(null),ei=U((0,r.useReducer)(X,Y),2),ea=ei[0],ec=ei[1],eu=ea.isFocused,el=ea.isFileDialogActive,es=(0,r.useRef)("undefined"!=typeof window&&window.isSecureContext&&h&&"showOpenFilePicker"in window),ef=function(){!es.current&&el&&setTimeout(function(){eo.current&&!eo.current.files.length&&(ec({type:"closeDialog"}),en())},300)};(0,r.useEffect)(function(){return window.addEventListener("focus",ef,!1),function(){window.removeEventListener("focus",ef,!1)}},[eo,el,en,es]);var ep=(0,r.useRef)([]),ed=function(e){er.current&&er.current.contains(e.target)||(e.preventDefault(),ep.current=[])};(0,r.useEffect)(function(){return j&&(document.addEventListener("dragover",T,!1),document.addEventListener("drop",ed,!1)),function(){j&&(document.removeEventListener("dragover",T),document.removeEventListener("drop",ed))}},[er,j]),(0,r.useEffect)(function(){return!o&&x&&er.current&&er.current.focus(),function(){}},[er,x,o]);var em=(0,r.useCallback)(function(e){B?B(e):console.error(e)},[B]),ev=(0,r.useCallback)(function(e){var t;e.preventDefault(),e.persist(),eF(e),ep.current=[].concat(function(e){if(Array.isArray(e))return Z(e)}(t=ep.current)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||W(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.target]),R(e)&&Promise.resolve(i(e)).then(function(t){if(!z(e)||L){var n,r,o,i,f,p,d,m,v=t.length,g=v>0&&(r=(n={files:t,accept:$,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:J}).files,o=n.accept,i=n.minSize,f=n.maxSize,p=n.multiple,d=n.maxFiles,m=n.validator,(!!p||!(r.length>1))&&(!p||!(d>=1)||!(r.length>d))&&r.every(function(e){var t=O(P(e,o),1)[0],n=O(S(e,i,f),1)[0],r=m?m(e):null;return t&&n&&!r}));ec({isDragAccept:g,isDragReject:v>0&&!g,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}}).catch(function(e){return em(e)})},[i,s,em,L,$,c,a,u,l,J]),eg=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eF(e);var t=R(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&p&&p(e),!1},[p,L]),ey=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eF(e);var t=ep.current.filter(function(e){return er.current&&er.current.contains(e)}),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),ep.current=t,!(t.length>0)&&(ec({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),R(e)&&f&&f(e))},[er,f,L]),eb=(0,r.useCallback)(function(e,t){var n=[],r=[];e.forEach(function(e){var t=U(P(e,$),2),o=t[0],i=t[1],u=U(S(e,c,a),2),l=u[0],s=u[1],f=J?J(e):null;if(o&&l&&!f)n.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter(function(e){return e})})}}),(!u&&n.length>1||u&&l>=1&&n.length>l)&&(n.forEach(function(e){r.push({file:e,errors:[F]})}),n.splice(0)),ec({acceptedFiles:n,fileRejections:r,type:"setFiles"}),d&&d(n,r,t),r.length>0&&v&&v(r,t),n.length>0&&m&&m(n,t)},[ec,u,$,c,a,l,d,m,v,J]),eh=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),eF(e),ep.current=[],R(e)&&Promise.resolve(i(e)).then(function(t){(!z(e)||L)&&eb(t,e)}).catch(function(e){return em(e)}),ec({type:"reset"})},[i,eb,em,L]),eD=(0,r.useCallback)(function(){if(es.current){ec({type:"openDialog"}),et(),window.showOpenFilePicker({multiple:u,types:Q}).then(function(e){return i(e)}).then(function(e){eb(e,null),ec({type:"closeDialog"})}).catch(function(e){e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)?(en(e),ec({type:"closeDialog"})):e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)?(es.current=!1,eo.current?(eo.current.value=null,eo.current.click()):em(Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):em(e)});return}eo.current&&(ec({type:"openDialog"}),et(),eo.current.value=null,eo.current.click())},[ec,et,en,h,eb,em,Q,u]),ew=(0,r.useCallback)(function(e){er.current&&er.current.isEqualNode(e.target)&&(" "===e.key||"Enter"===e.key||32===e.keyCode||13===e.keyCode)&&(e.preventDefault(),eD())},[er,eD]),eO=(0,r.useCallback)(function(){ec({type:"focus"})},[]),ex=(0,r.useCallback)(function(){ec({type:"blur"})},[]),ej=(0,r.useCallback)(function(){A||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return -1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/")}()?setTimeout(eD,0):eD())},[A,eD]),eA=function(e){return o?null:e},ek=function(e){return k?null:eA(e)},eE=function(e){return E?null:eA(e)},eF=function(e){L&&e.stopPropagation()},eP=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.role,r=e.onKeyDown,i=e.onFocus,a=e.onBlur,c=e.onClick,u=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=N(e,K);return q(q(H({onKeyDown:ek(I(r,ew)),onFocus:ek(I(i,eO)),onBlur:ek(I(a,ex)),onClick:eA(I(c,ej)),onDragEnter:eE(I(u,ev)),onDragOver:eE(I(l,eg)),onDragLeave:eE(I(s,ey)),onDrop:eE(I(f,eh)),role:"string"==typeof n&&""!==n?n:"presentation"},void 0===t?"ref":t,er),o||k?{}:{tabIndex:0}),p)}},[er,ew,eO,ex,ej,ev,eg,ey,eh,k,E,o]),eS=(0,r.useCallback)(function(e){e.stopPropagation()},[]),eC=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.onChange,r=e.onClick,o=N(e,G);return q(q({},H({accept:$,multiple:u,type:"file",style:{display:"none"},onChange:eA(I(n,eh)),onClick:eA(I(r,eS)),tabIndex:-1},void 0===t?"ref":t,eo)),o)}},[eo,n,u,eh,o]);return q(q({},ea),{},{isFocused:eu&&!o,getRootProps:eP,getInputProps:eC,rootRef:er,inputRef:eo,open:eA(eD)})}function X(e,t){switch(t.type){case"focus":return q(q({},e),{},{isFocused:!0});case"blur":return q(q({},e),{},{isFocused:!1});case"openDialog":return q(q({},Y),{},{isFileDialogActive:!0});case"closeDialog":return q(q({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return q(q({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return q(q({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return q({},Y);default:return e}}function ee(){}}}]);