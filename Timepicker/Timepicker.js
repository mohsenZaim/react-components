!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-components",["React"],t):"object"==typeof exports?exports["react-components"]=t(require("react")):e["react-components"]=t(e.React)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=533)}({0:function(t,n){t.exports=e},2:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},3:function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,l=0,p=[],u=n(4);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function m(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function d(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),p.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);t>=0&&p.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),d(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=l++;n=c||(c=v(t)),r=E.bind(null,n,a,!1),o=E.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),d(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&f(m(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var k,y=(k=[],function(e,t){return k[e]=t,k.filter(Boolean).join("\n")});function E(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},4:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},489:function(e,t,n){var r=n(490);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(e.exports=r.locals)},490:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".custom-timepicker {\n  display: inline-block; }\n  .custom-timepicker > [class*=timepicker-] {\n    display: inline-block;\n    position: relative;\n    text-align: center;\n    margin: 0 2px; }\n    .custom-timepicker > [class*=timepicker-] .timepicker-input {\n      width: 40px;\n      display: inline-block;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      box-shadow: none;\n      border: 1px solid #fff;\n      text-align: center;\n      -webkit-appearance: none;\n      -moz-appearance: textfield;\n      appearance: none; }\n      .custom-timepicker > [class*=timepicker-] .timepicker-input:active {\n        box-shadow: none; }\n      .custom-timepicker > [class*=timepicker-] .timepicker-input::-webkit-inner-spin-button, .custom-timepicker > [class*=timepicker-] .timepicker-input::-webkit-textfield-decoration-container {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none; }\n    .custom-timepicker > [class*=timepicker-] > [class*=triangle-] {\n      cursor: pointer;\n      border: 1px solid #fff;\n      position: relative;\n      -webkit-transition: background-color 200ms, border 200ms;\n      -moz-transition: background-color 200ms, border 200ms;\n      -o-transition: background-color 200ms, border 200ms;\n      transition: background-color 200ms, border 200ms; }\n      .custom-timepicker > [class*=timepicker-] > [class*=triangle-] svg {\n        fill: #41B0EE;\n        position: relative;\n        width: 30px;\n        height: 30px;\n        -webkit-transition: color 200ms;\n        -moz-transition: color 200ms;\n        -o-transition: color 200ms;\n        transition: color 200ms; }\n        .custom-timepicker > [class*=timepicker-] > [class*=triangle-] svg:hover {\n          color: #007AC7; }\n      .custom-timepicker > [class*=timepicker-] > [class*=triangle-]:hover {\n        background-color: #41B0EE;\n        border: 1px solid #41B0EE; }\n        .custom-timepicker > [class*=timepicker-] > [class*=triangle-]:hover svg {\n          fill: #fff; }\n      .custom-timepicker > [class*=timepicker-] > [class*=triangle-]:active {\n        background-color: #0092E1; }\n    .custom-timepicker > [class*=timepicker-] .triangle-after svg {\n      top: 3px; }\n    .custom-timepicker > [class*=timepicker-]:hover {\n      outline: 1px solid #41B0EE; }\n    .custom-timepicker > [class*=timepicker-]:last-child .timepicker-input {\n      background-color: #fff;\n      color: #000;\n      cursor: default; }\n",""])},533:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n(0),i=(n(489),o.createElement("svg",{name:"angle-up",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},o.createElement("path",{d:"M136.5 185.1l116 117.8c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L128 224.7 27.6 326.9c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l116-117.8c4.7-4.6 12.3-4.6 17 .1z"}))),a=o.createElement("svg",{name:"angle-down",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},o.createElement("path",{d:"M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"})),s=function(e){function t(t){var n=e.call(this,t)||this;return n.handleClick=n.handleClick.bind(n),n.handleChange=n.handleChange.bind(n),n}return r.b(t,e),t.prototype.handleClick=function(e,t,n){var o=r.a({},n);switch(e){case"HOURS":var i=n.hours;switch(t){case"INCREMENT":i=12===i?1:i+1;break;case"DECREMENT":i=1===i?12:i-1}o.hours=i;break;case"MINUTES":var a=n.minutes;switch(t){case"INCREMENT":a=59===a?0:a+1;break;case"DECREMENT":a=0===a?59:a-1}o.minutes=a;break;case"DAYPERIOD":var s=n.dayperiod;switch(s){case"AM":s="PM";break;case"PM":s="AM"}o.dayperiod=s}return o},t.prototype.handleChange=function(e,t,n){var o=r.a({},n);if("number"==typeof t){switch(e){case"HOURS":var i=void 0;i=t>12?12:t<1?1:t,o.hours=i;break;case"MINUTES":var a=void 0;a=t>59?59:t<0?0:t,o.minutes=a}return o}return null},t.prototype.render=function(){var e=this;return o.createElement("div",{className:"custom-timepicker"+(this.props.className?" "+this.props.className:"")},o.createElement("div",{className:"timepicker-hours"},o.createElement("div",{className:"triangle-before",onClick:function(){e.props.onChange(e.handleClick("HOURS","INCREMENT",e.props.value))}},i),o.createElement("input",{type:"number",name:this.props.name+"-hours",className:"timepicker-input",value:this.props.value.hours<10?"0"+this.props.value.hours:String(this.props.value.hours),onChange:function(t){e.props.onChange(e.handleChange("HOURS",Number(t.target.value),e.props.value))}}),o.createElement("div",{className:"triangle-after",onClick:function(){e.props.onChange(e.handleClick("HOURS","DECREMENT",e.props.value))}},a)),o.createElement("div",{className:"timepicker-minutes"},o.createElement("div",{className:"triangle-before",onClick:function(){e.props.onChange(e.handleClick("MINUTES","INCREMENT",e.props.value))}},i),o.createElement("input",{type:"number",name:this.props.name+"-minutes",className:"timepicker-input",value:this.props.value.minutes<10?"0"+this.props.value.minutes:String(this.props.value.minutes),onChange:function(t){e.props.onChange(e.handleChange("MINUTES",Number(t.target.value),e.props.value))}}),o.createElement("div",{className:"triangle-after",onClick:function(){e.props.onChange(e.handleClick("MINUTES","DECREMENT",e.props.value))}},a)),o.createElement("div",{className:"timepicker-dayperiod"},o.createElement("div",{className:"triangle-before",onClick:function(){e.props.onChange(e.handleClick("DAYPERIOD","INCREMENT",e.props.value))}},i),o.createElement("input",{type:"text",name:this.props.name+"-dayperiod",className:"timepicker-input",readOnly:!0,disabled:!0,value:this.props.value.dayperiod}),o.createElement("div",{className:"triangle-after",onClick:function(){e.props.onChange(e.handleClick("DAYPERIOD","DECREMENT",e.props.value))}},a)))},t}(o.Component);n.d(t,"Timepicker",function(){return s})},6:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)}}})});