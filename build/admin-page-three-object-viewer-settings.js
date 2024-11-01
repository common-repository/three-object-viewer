!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=112)}({1:function(e,t){e.exports=React},112:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(6),l=n(3);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t,n,r,a,c,l){try{var o=e[c](l),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,a)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],_n=!0,l=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);_n=!0);}catch(e){l=!0,a=e}finally{try{_n||null==n.return||n.return()}finally{if(l)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e){var t,n=e.getSettings,r=e.updateSettings,a=f(Object(c.useState)({}),2),o=a[0],i=a[1],s=f(Object(c.useState)(!0),2),p=s[0],b=s[1],d=f(Object(c.useState)(!1),2),v=d[0],R=d[1],h=f(Object(c.useState)(!1),2),y=h[0],E=h[1],j=f(Object(c.useState)(),2);j[0],j[1],Object(c.useEffect)((function(){n().then((function(e){i(e),b(!1)}))}),[n,i]);var w=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E(!0),e.next=4,r(o);case 4:n=e.sent,i(n),setTimeout((function(){E(!1)}),1500);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function l(e){m(c,r,a,l,o,"next",e)}function o(e){m(c,r,a,l,o,"throw",e)}l(void 0)}))});return function(_x){return t.apply(this,arguments)}}();return p?React.createElement("div",{className:"spinner",style:{visibility:"visible"}}):React.createElement(React.Fragment,null,React.createElement("form",{autocomplete:"off"},React.createElement("table",{class:"form-table"},React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,React.createElement("div",null,React.createElement("h2",null,Object(l.__)("3OV Settings","three-object-viewer"))),React.createElement("div",null,React.createElement("p",null,Object(l.__)("Here you can manage the settings for 3OV to tweak global configuration options and save your API keys for connected serivces.","three-object-viewer"))))),React.createElement("tr",null,React.createElement("td",null,React.createElement("h3",null,Object(l.__)("Avatar Settings","three-object-viewer")))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",{htmlFor:"defaultVRM"},React.createElement("b",null,Object(l.__)("Default animation","three-object-viewer"))))),React.createElement("tr",null,React.createElement("td",null,o.defaultVRM?o.defaultVRM:Object(l.__)("No custom default animation set","three-object-viewer"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),t||(t=wp.media({title:Object(l.__)("Select or Upload Media","three-object-viewer"),button:{text:Object(l.__)("Use this media","three-object-viewer")},multiple:!1})).on("select",(function(){var e=t.state().get("selection").first().toJSON();i(u(u({},o),{},{defaultVRM:e.url}))})),t.open()}},Object(l.__)("Set Default Animation","three-object-viewer")))),React.createElement("tr",null,React.createElement("td",null,React.createElement("button",{type:"button",onClick:function(){i(u(u({},o),{},{defaultVRM:""}))}},Object(l.__)("Clear Default Animation","three-object-viewer")))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",{htmlFor:"defaultAvatar"},React.createElement("b",null,"Default Avatar")),React.createElement("p",null,"View our  ",React.createElement("a",{href:"https://3ov.xyz/resource/recommended-avatars/"},"Avatar Resource Page")," for some 3OV compatible avatars."))),React.createElement("tr",null,React.createElement("td",null,o.defaultAvatar?o.defaultAvatar:Object(l.__)("No custom default avatar set","three-object-viewer"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),t||(t=wp.media({title:Object(l.__)("Select or Upload Media","three-object-viewer"),button:{text:Object(l.__)("Use this media","three-object-viewer")},multiple:!1})).on("select",(function(){var e=t.state().get("selection").first().toJSON();i(u(u({},o),{},{defaultAvatar:e.url}))})),t.open()}},Object(l.__)("Set Default Avatar","three-object-viewer")))),React.createElement("tr",null,React.createElement("td",null,React.createElement("button",{type:"button",onClick:function(){i(u(u({},o),{},{defaultAvatar:""}))}},Object(l.__)("Clear Default Avatar","three-object-viewer")))),React.createElement("tr",null,React.createElement("td",null,React.createElement("h3",null,Object(l.__)("AI Settings","three-object-viewer")))),React.createElement("tr",null,React.createElement("td",null,Object(l.__)("NPC Settings","three-object-viewer"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",{htmlFor:"enabled"},Object(l.__)("Enable","three-object-viewer")),React.createElement("input",{id:"enabled",type:"checkbox",name:"enabled",value:o.enabled,checked:o.enabled,onChange:function(e){i(u(u({},o),{},{enabled:e.target.checked}))}}))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",{htmlFor:"networkWorker"},Object(l.__)("AI Endpoint URL","three-object-viewer")),React.createElement("input",{id:"networkWorker",type:"input",className:"regular-text",name:"networkWorker",autoComplete:"off",value:o.networkWorker,onChange:function(e){i(u(u({},o),{},{networkWorker:e.target.value}))}}))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",{htmlFor:"openApiKey"},Object(l.__)("OpenAI API Token","three-object-viewer")),v?React.createElement("input",{id:"openApiKey",type:"text",name:"openApiKey",autoComplete:"off",value:o.openApiKey,onChange:function(e){i(u(u({},o),{},{openApiKey:e.target.value}))}}):React.createElement("input",{id:"openApiKey",type:"password",name:"openApiKey",autoComplete:"off",value:o.openApiKey,onChange:function(e){i(u(u({},o),{},{openApiKey:e.target.value}))}}),React.createElement("button",{type:"button",onClick:function(){return R(!v)}},v?"Hide":"Show"," Key"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",{htmlFor:"aiType"},Object(l.__)("AI Access Level","three-object-viewer")),React.createElement("select",{id:"aiType",name:"aiType",value:o.allowPublicAI,onChange:function(e){i(u(u({},o),{},{allowPublicAI:e.target.value}))}},React.createElement("option",{value:"public"},Object(l.__)("Public","three-object-viewer")),React.createElement("option",{value:"loggedIn"},Object(l.__)("Logged In","three-object-viewer"))))),React.createElement("tr",null,React.createElement("td",null,React.createElement("input",{id:"save",className:"button button-small button-primary",type:"submit",name:"enabled",onClick:w}),y&&React.createElement("span",{style:{color:"green",paddingLeft:"10px"},className:"save-indicator"},Object(l.__)("Saving...","three-object-viewer"))))))))}var b=n(56),d=n.n(b);function v(e,t,n,r,a,c,l){try{var o=e[c](l),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,a)}function R(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function l(e){v(c,r,a,l,o,"next",e)}function o(e){v(c,r,a,l,o,"throw",e)}l(void 0)}))}}window.addEventListener("load",R(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="/three-object-viewer/v1/three-object-viewer-settings/",n=function(){var e=R(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()({path:t,method:"GET"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=R(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d()({path:t,data:n,method:"POST"}),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})));return function(_x){return e.apply(this,arguments)}}(),Object(c.render)(a.a.createElement(p,{getSettings:n,updateSettings:r}),document.getElementById("three-object-viewer-settings"));case 4:case"end":return e.stop()}}),e)}))))},3:function(e,t){e.exports=window.wp.i18n},56:function(e,t){e.exports=window.wp.apiFetch},6:function(e,t){e.exports=window.wp.element}});