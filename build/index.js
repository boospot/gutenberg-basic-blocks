!function(e){var t={};function i(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:c})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=React},function(e,t,i){"use strict";i.r(t);var c=i(0),a=i(1),o=i.n(a);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c])}return e}).apply(this,arguments)}var s=o.a.createElement("path",{d:"M42.9 38.3V38c2.9-.6 4.3-2.2 4.3-4.8V21.6c0-5.4-2.7-8.2-8-8.2H23.3c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v22.1h-5.7c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.7 0 1.2-.4 1.4-1H29v20.7h-5.6c-.2-.6-.7-1-1.4-1-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.7 0 1.2-.4 1.4-1H41c4.6 0 6.8-2.2 6.8-6.7v-8.4c.1-2.6-1.6-4.3-4.9-5.2zm-8-19.4h3.6c1.8 0 2.7 1.1 2.7 3.3v9.9c0 2.2-1.2 3.3-3.4 3.3H35V18.9zm6.9 32.2c0 1.3-.8 1.9-2.4 1.9h-4.5V40.8h3.3c2.4 0 3.6 1.1 3.6 3.2v7.1z"}),r=function(e){return o.a.createElement("svg",l({viewBox:"0 0 72 72"},e),s)};var n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA3MiA3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzIgNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00Mi45LDM4LjNWMzhjMi45LTAuNiw0LjMtMi4yLDQuMy00LjhWMjEuNmMwLTUuNC0yLjctOC4yLTgtOC4ySDIzLjNjLTAuMi0wLjYtMC43LTEtMS40LTENCgljLTAuOCwwLTEuNCwwLjYtMS40LDEuNHMwLjYsMS40LDEuNCwxLjRjMC43LDAsMS4yLTAuNCwxLjQtMWg1Ljd2MjIuMWgtNS43Yy0wLjItMC42LTAuNy0xLTEuNC0xYy0wLjgsMC0xLjQsMC42LTEuNCwxLjQNCglzMC42LDEuNCwxLjQsMS40YzAuNywwLDEuMi0wLjQsMS40LTFoNS43djIwLjdoLTUuNmMtMC4yLTAuNi0wLjctMS0xLjQtMWMtMC44LDAtMS40LDAuNi0xLjQsMS40YzAsMC44LDAuNiwxLjQsMS40LDEuNA0KCWMwLjcsMCwxLjItMC40LDEuNC0xaDUuN3YwSDQxYzQuNiwwLDYuOC0yLjIsNi44LTYuN3YtOC40QzQ3LjksNDAuOSw0Ni4yLDM5LjIsNDIuOSwzOC4zeiBNMzQuOSwxOC45aDMuNmMxLjgsMCwyLjcsMS4xLDIuNywzLjMNCgl2OS45YzAsMi4yLTEuMiwzLjMtMy40LDMuM2gtMi44VjE4Ljl6IE00MS44LDUxLjFjMCwxLjMtMC44LDEuOS0yLjQsMS45aC00LjVWNDAuOGgzLjNjMi40LDAsMy42LDEuMSwzLjYsMy4yVjUxLjF6Ii8+DQo8L3N2Zz4NCg==",u=wp.i18n.__;(0,wp.blocks.registerBlockType)("gbb/static",{title:u("Like & Subscribe","gbb"),icon:{src:r},category:"gbb",edit:function(){return Object(c.createElement)("div",{className:"gbb-block gbb-static"},Object(c.createElement)("figure",{className:"gbb-logo"},Object(c.createElement)("img",{src:n,alt:"logo"})),Object(c.createElement)("div",{className:"gbb-info"},Object(c.createElement)("h3",{className:"gbb-title"},u("The Binaryville Podcast","gbb")),Object(c.createElement)("div",{className:"gbb-cta"},Object(c.createElement)("a",{href:"#"},u("Like & Subscribe!","gbb")))))},save:function(){return Object(c.createElement)("div",{className:"gbb-block gbb-static"},Object(c.createElement)("figure",{className:"gbb-logo"},Object(c.createElement)("img",{src:n,alt:"logo"})),Object(c.createElement)("div",{className:"gbb-info"},Object(c.createElement)("h3",{className:"gbb-title"},u("The Binaryville Podcast","gbb")),Object(c.createElement)("div",{className:"gbb-cta"},Object(c.createElement)("a",{href:"/subscribe"},u("Like & Subscribe!","gbb")))))}});var d=wp.i18n.__,j=wp.blocks.registerBlockType,L=wp.editor.RichText;j("gbb/editable",{title:d("Custom Title","gbb"),icon:{src:r},category:"gbb",attributes:{epsiodeTitle:{type:"string",source:"html",selector:".gbb-title"}},edit:function(e){console.info(e);var t=e.attributes.epsiodeTitle,i=e.className,a=e.setAttributes;return Object(c.createElement)("div",{className:"".concat(i," gbb-block gbb-editable")},Object(c.createElement)("figure",{className:"gbb-logo"},Object(c.createElement)("img",{src:n,alt:"logo"})),Object(c.createElement)("div",{className:"gbb-info"},Object(c.createElement)("div",{className:"gbb-nameplate"},d("The Binaryville Podcast","gbb")),Object(c.createElement)("h3",{className:"gbb-title"},Object(c.createElement)(L,{placeholder:d("Podcast episode title","gbb"),value:t,onChange:function(e){a({epsiodeTitle:e})}})),Object(c.createElement)("div",{className:"gbb-cta"},Object(c.createElement)("a",{href:"#"},d("Like & Subscribe!","gbb")))))},save:function(e){return Object(c.createElement)("div",{className:"gbb-block gbb-static"},Object(c.createElement)("figure",{className:"gbb-logo"},Object(c.createElement)("img",{src:n,alt:"logo"})),Object(c.createElement)("div",{className:"gbb-info"},Object(c.createElement)("div",{className:"gbb-nameplate"},d("The Binaryville Podcast","gbb")),Object(c.createElement)("h3",{className:"gbb-title"},Object(c.createElement)(L.Content,{value:e.attributes.epsiodeTitle})),Object(c.createElement)("div",{className:"gbb-cta"},Object(c.createElement)("a",{href:"/subscribe"},d("Like & Subscribe!","gbb")))))}})}]);