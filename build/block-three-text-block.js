!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=108)}({1:function(e,t){e.exports=React},108:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(3),o=a(1),l=a.n(o),c=a(2),i=a(5),s=a(32);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=React.createElement("svg",{className:"custom-icon custom-icon-cube",viewBox:"0 0 40 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},React.createElement("g",{transform:"matrix(1,0,0,1,-1.1686,0.622128)"},React.createElement("path",{d:"M37.485,28.953L21.699,38.067L21.699,19.797L37.485,10.683L37.485,28.953ZM21.218,19.821L21.218,38.065L5.435,28.953L5.435,10.709L21.218,19.821ZM37.207,10.288L21.438,19.392L5.691,10.301L21.46,1.197L37.207,10.288Z"}))),d=a(78);Object(n.registerBlockType)(d.name,m(m({},d),{},{icon:f,apiVersion:2,edit:function(e){var t=e.attributes,a=e.setAttributes,n=e.isSelected,p=e.clientId,m=wp.data,b=(m.select,m.dispatch),f=wp.blocks;f.onSelectionChange,f.getSelectedBlock,Object(o.useEffect)((function(){n&&b("three-object-environment-events").setFocusEvent(p)}),[n]);var d,h,v=(d=Object(o.useState)(""),h=2,function(e){if(Array.isArray(e))return e}(d)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o=[],_n=!0,l=!1;try{for(a=a.call(e);!(_n=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);_n=!0);}catch(e){l=!0,r=e}finally{try{_n||null==a.return||a.return()}finally{if(l)throw r}}return o}}(d,h)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}(d,h)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return v[0],v[1],wp.editor.mediaUpload,l.a.createElement("div",Object(i.useBlockProps)(),l.a.createElement(i.InspectorControls,{key:"setting"},l.a.createElement(c.Panel,{header:Object(r.__)("Settings","three-text-block")},l.a.createElement(c.PanelBody,{title:Object(r.__)("Text Attributes","three-object-viewer"),icon:s.a,initialOpen:!0},l.a.createElement(c.PanelRow,null,l.a.createElement(c.TextareaControl,{label:Object(r.__)("Text","three-object-viewer"),help:Object(r.__)("Write here.","three-object-viewer"),value:t.textContent,onChange:function(e){a({textContent:e})}})),l.a.createElement(c.PanelRow,null,l.a.createElement(i.ColorPalette,{value:t.textColor,label:Object(r.__)("Text Color","three-object-viewer"),onChange:function(e){a({textColor:e})}})),l.a.createElement(c.PanelRow,null,l.a.createElement("legend",{className:"blocks-base-control__label"},Object(r.__)("Position","three-object-viewer"))),l.a.createElement(c.PanelRow,null,l.a.createElement(c.TextControl,{className:"position-inputs",label:"X",value:t.positionX,onChange:function(e){a({positionX:e})}}),l.a.createElement(c.TextControl,{className:"position-inputs",label:"Y",value:t.positionY,onChange:function(e){a({positionY:e})}}),l.a.createElement(c.TextControl,{className:"position-inputs",label:"Z",value:t.positionZ,onChange:function(e){a({positionZ:e})}})),l.a.createElement(c.PanelRow,null,l.a.createElement("legend",{className:"blocks-base-control__label"},Object(r.__)("Rotation","three-object-viewer"))),l.a.createElement(c.PanelRow,null,l.a.createElement(c.TextControl,{className:"position-inputs",label:"X",value:t.rotationX,onChange:function(e){a({rotationX:e})}}),l.a.createElement(c.TextControl,{className:"position-inputs",label:"Y",value:t.rotationY,onChange:function(e){a({rotationY:e})}}),l.a.createElement(c.TextControl,{className:"position-inputs",label:"Z",value:t.rotationZ,onChange:function(e){a({rotationZ:e})}})),l.a.createElement(c.PanelRow,null,l.a.createElement("legend",{className:"blocks-base-control__label"},Object(r.__)("Scale","three-object-viewer"))),l.a.createElement(c.PanelRow,null,l.a.createElement(c.TextControl,{className:"position-inputs",label:"X",value:t.scaleX,onChange:function(e){a({scaleX:e})}}),l.a.createElement(c.TextControl,{className:"position-inputs",label:"Y",value:t.scaleY,onChange:function(e){a({scaleY:e})}}),l.a.createElement(c.TextControl,{className:"position-inputs",label:"Z",value:t.scaleZ,onChange:function(e){a({scaleZ:e})}}))))),l.a.createElement(l.a.Fragment,null,(t.threeObjectUrl,l.a.createElement("div",{className:"three-object-viewer-inner"},l.a.createElement("div",{className:"three-object-viewer-inner-edit-container"},l.a.createElement("svg",{className:"custom-icon custom-icon-cube",viewBox:"0 0 40 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{transform:"matrix(1,0,0,1,-1.1686,0.622128)"},l.a.createElement("path",{d:"M37.485,28.953L21.699,38.067L21.699,19.797L37.485,10.683L37.485,28.953ZM21.218,19.821L21.218,38.065L5.435,28.953L5.435,10.709L21.218,19.821ZM37.207,10.288L21.438,19.392L5.691,10.301L21.46,1.197L37.207,10.288Z"}))),l.a.createElement("p",null,l.a.createElement("b",null,Object(r.__)("Text Block","three-object-viewer"))))))))},save:function(e){var t=e.attributes;return React.createElement("div",i.useBlockProps.save(),React.createElement(React.Fragment,null,React.createElement("div",{className:"three-object-three-app-three-text-block"},React.createElement("p",{className:"three-text-content"},t.textContent),React.createElement("p",{className:"three-text-positionX"},t.positionX),React.createElement("p",{className:"three-text-positionY"},t.positionY),React.createElement("p",{className:"three-text-positionZ"},t.positionZ),React.createElement("p",{className:"three-text-rotationX"},t.rotationX),React.createElement("p",{className:"three-text-rotationY"},t.rotationY),React.createElement("p",{className:"three-text-rotationZ"},t.rotationZ),React.createElement("p",{className:"three-text-scaleX"},t.scaleX),React.createElement("p",{className:"three-text-scaleY"},t.scaleY),React.createElement("p",{className:"three-text-scaleZ"},t.scaleZ),React.createElement("p",{className:"three-text-color"},t.textColor))))},deprecated:[{attributes:{bg_color:{type:"string",default:"#FFFFFF"},zoom:{type:"integer",default:90},scale:{type:"integer",default:1},positionX:{type:"integer",default:0},positionY:{type:"integer",default:0},rotationY:{type:"integer",default:0},threeObjectUrl:{type:"string",default:null},hasZoom:{type:"bool",default:!1},hasTip:{type:"bool",default:!0},deviceTarget:{type:"string",default:"2d"}},save:function(e){return React.createElement("div",i.useBlockProps.save(),React.createElement(React.Fragment,null,React.createElement("div",{className:"three-object-three-app"},React.createElement("p",{className:"three-object-block-device-target"},e.attributes.deviceTarget),React.createElement("p",{className:"three-object-block-url"},e.attributes.threeObjectUrl),React.createElement("p",{className:"three-object-scale"},e.attributes.scale),React.createElement("p",{className:"three-object-background-color"},e.attributes.bg_color),React.createElement("p",{className:"three-object-zoom"},e.attributes.zoom),React.createElement("p",{className:"three-object-has-zoom"},e.attributes.hasZoom?1:0),React.createElement("p",{className:"three-object-has-tip"},e.attributes.hasTip?1:0),React.createElement("p",{className:"three-object-position-y"},e.attributes.positionY),React.createElement("p",{className:"three-object-rotation-y"},e.attributes.rotationY),React.createElement("p",{className:"three-object-scale"},e.attributes.scale))))}},{attributes:{bg_color:{type:"string",default:"#FFFFFF"},zoom:{type:"integer",default:90},scale:{type:"integer",default:1},positionX:{type:"integer",default:0},positionY:{type:"integer",default:0},rotationY:{type:"integer",default:0},threeObjectUrl:{type:"string",default:null},hasZoom:{type:"bool",default:!1},hasTip:{type:"bool",default:!0},deviceTarget:{type:"string",default:"2d"},animations:{type:"string",default:""}},save:function(e){return React.createElement("div",i.useBlockProps.save(),React.createElement(React.Fragment,null,React.createElement("div",{className:"three-object-three-app"},React.createElement("p",{className:"three-object-block-device-target"},e.attributes.deviceTarget),React.createElement("p",{className:"three-object-block-url"},e.attributes.threeObjectUrl),React.createElement("p",{className:"three-object-scale"},e.attributes.scale),React.createElement("p",{className:"three-object-background-color"},e.attributes.bg_color),React.createElement("p",{className:"three-object-zoom"},e.attributes.zoom),React.createElement("p",{className:"three-object-has-zoom"},e.attributes.hasZoom?1:0),React.createElement("p",{className:"three-object-has-tip"},e.attributes.hasTip?1:0),React.createElement("p",{className:"three-object-position-y"},e.attributes.positionY),React.createElement("p",{className:"three-object-rotation-y"},e.attributes.rotationY),React.createElement("p",{className:"three-object-scale"},e.attributes.scale),React.createElement("p",{className:"three-object-animations"},e.attributes.animations))))}}]}))},11:function(e,t){e.exports=window.wp.blocks},2:function(e,t){e.exports=window.wp.components},3:function(e,t){e.exports=window.wp.i18n},32:function(e,t,a){"use strict";var n=a(6),r=a(7);const o=Object(n.createElement)(r.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(r.Path,{d:"M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z"}));t.a=o},5:function(e,t){e.exports=window.wp.blockEditor},6:function(e,t){e.exports=window.wp.element},7:function(e,t){e.exports=window.wp.primitives},78:function(e){e.exports=JSON.parse('{"name":"three-object-viewer/three-text-block","attributes":{"scaleX":{"type":"int","default":1},"scaleY":{"type":"int","default":1},"scaleZ":{"type":"int","default":1},"positionX":{"type":"int","default":0},"positionY":{"type":"int","default":0},"positionZ":{"type":"int","default":0},"rotationX":{"type":"int","default":0},"rotationY":{"type":"int","default":0},"rotationZ":{"type":"int","default":0},"threeObjectUrl":{"type":"string","default":null},"destinationUrl":{"type":"string","default":null},"textContent":{"type":"string","default":null},"textColor":{"type":"string","default":"0x000000"},"animations":{"type":"string","default":""},"collidable":{"type":"boolean","default":false}},"category":"design","parent":["three-object-viewer/environment"],"apiVersion":2,"supports":{"html":false,"multiple":true},"textdomain":"three-object-viewer","editorScript":"file:../../build/block-three-text-block.js","editorStyle":"file:../../build/block-three-text-block.css","style":"file:../../build/block-three-text-block.css"}')}});