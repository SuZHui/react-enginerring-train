"use strict";(self.webpackChunkreact_enginerring_train=self.webpackChunkreact_enginerring_train||[]).push([[359],{1204:(e,r,t)=>{t.d(r,{Z:()=>p});var n,a=t(9669),o=t.n(a),i=t(5773),A=t(958),l=t(821),s=["data","mutate"];function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Q=o().create({});Q.interceptors.response.use((function(e){return e.data}),(function(e){if(o().isCancel(e))console.info("Request canceled",e);else if(!n){var r=(t="Request failed",e.response&&e.response.data?t=e.response.data.message||t:e.message&&(t=e.message),t);n=i.Z.error({title:"Error",content:r,afterClose:function(){n=null}})}var t;return Promise.reject(e)}));const p={getList:function(e){var r="all"!==e.toLowerCase()?"+language:".concat(e):"",t=(0,A.ZP)((function(e){return"https://api.github.com/search/repositories?q=stars:%3E1".concat(r,"&sort=stars&order=desc&type=Repositories&per_page=30&page=").concat(e+1)}),(function(e){return Q.get(e)}),{shouldRetryOnError:!1,revalidateFirstPage:!1}),n=t.data,a=t.mutate;return g(g({},m(t,s)),{},{data:Array.isArray(n)?n.reduce((function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.items,n=void 0===t?[]:t;return e.push.apply(e,c(n)),e}),[]):[],reload:function(){return a(n)}})},getUser:function(e){return Q.get("https://api.github.com/users/".concat(e))},getUser2:function(e){var r=e?"https://api.github.com/users/".concat(e):null;return(0,l.ZP)(r,(function(e){return Q.get(e)}),{shouldRetryOnError:!1,revalidateOnFocus:!1})}}},423:(e,r,t)=>{t.r(r),t.d(r,{default:()=>N});var n=t(7294),a=t(9711),o=t(6974),i=t(5773),A=t(2161),l=t(1635),s=t(1577),c=t(1204);function u(e){var r=c.Z.getUser2(e),t=r.data,n=r.error,a=r.isValidating;return{player:t,isLoading:a,isError:!!n||!t&&!a,refresh:r.mutate}}var E=t(5697),g=t.n(E),f=t(8868),m=t(1382),Q=t(7625),p=t(1436);function d(e){var r=e.status,t=e.avatar_url,a=e.location,o=e.following,i=e.followers,A=e.html_url,l=e.public_repos;return n.createElement("a",{href:A,target:"_blank",className:"db br1 bg-light-gray mb4 pv4 shadow-hover no-underline color-inherit w-80 center",rel:"noreferrer"},n.createElement("div",{className:"flex flex-column justify-center items-center"},n.createElement("h2",{className:"mb2 mt0"},r),n.createElement(f.Z,{src:t,preview:!1,width:"120px",height:"120px",placeholder:n.createElement("div",{className:"w-100 h-100 tc"},n.createElement(m.Z,null)),fallback:"data:image/png;base64,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"}),n.createElement("h4",{className:"f4 mt3 mb1 red"},"Scores: ",l),n.createElement("div",{className:"ph4 tl w-100 f5"},n.createElement("p",{className:"mv2 flex items-center",title:a},n.createElement(Q.G,{icon:p.$40,color:"#ffbf74",fixedWidth:!0}),n.createElement("span",{className:"ml2 flex-auto-l truncate"},a)),n.createElement("p",{className:"mv2 flex items-center"},n.createElement(Q.G,{icon:p.FVb,color:"#ffd701",fixedWidth:!0}),n.createElement("span",{className:"ml2"},i)),n.createElement("p",{className:"mv2 flex items-center"},n.createElement(Q.G,{icon:p.FKd,color:"#8dc6f3",fixedWidth:!0}),n.createElement("span",{className:"ml2"},o)),n.createElement("p",{className:"mv2 flex items-center"},n.createElement(Q.G,{icon:p.dT$,color:"#f18d95",fixedWidth:!0}),n.createElement("span",{className:"ml2"},l)))))}d.defaultProps={status:null,location:null},d.propTypes={status:g().string,location:g().string,avatar_url:g().string.isRequired,following:g().number.isRequired,followers:g().number.isRequired,html_url:g().string.isRequired,public_repos:g().number.isRequired},d.STATUS={WIN:"Winner",LOSE:"Loser",TIE:"Tie"};var y=t(4277);function h(e){var r=e.isLoading;return n.createElement("div",{className:"pv6 tc"},r?n.createElement(m.Z,null):n.createElement(y.Z,null))}function b(){return b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},b.apply(this,arguments)}function B(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,a,o=[],i=!0,A=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){A=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(A)throw a}}return o}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function N(){var e=(0,o.s0)(),r=function(){e("/battle")},t=B((0,a.lr)(),1)[0],c=u(t.get("p1")),E=u(t.get("p2"));(0,n.useEffect)((function(){(c.isError||E.isError)&&i.Z.error({title:"错误",content:"未找到Player，将返回Battle页面。",onOk:r,okText:"返回"})}),[c.isError,E.isError]);var g=B((0,n.useMemo)((function(){if(!c.player||!E.player)return[null,null];var e=Math.max(c.player.public_repos,E.player.public_repos),r=[c.player.public_repos,E.player.public_repos];return r.every((function(r){return r===e}))?[d.STATUS.TIE,d.STATUS.TIE]:r.map((function(r){return r===e?d.STATUS.WIN:d.STATUS.LOSE}))}),[c,E]),2),f=g[0],m=g[1];return n.createElement("div",{className:"page pt5 overflow-y-auto"},n.createElement(A.Z,{className:"mt4",justify:"center"},n.createElement(l.Z,{xs:18,sm:10,md:8,lg:6,xl:6,xxl:4},c.isError||c.isLoading?n.createElement(h,{isLoading:c.isLoading}):n.createElement(d,b({status:f},c.player))),n.createElement(l.Z,{xs:18,sm:{span:10,offset:2},md:{span:8,offset:6},lg:{span:6,offset:5},xl:{span:6,offset:6},xxl:{span:4,offset:4}},E.isError||E.isLoading?n.createElement(h,{isLoading:E.isLoading}):n.createElement(d,b({status:m},E.player)))),n.createElement(A.Z,{justify:"center"},n.createElement(s.Z,{size:"large",onClick:r,type:"primary"},"Reset")))}h.propTypes={isLoading:g().bool.isRequired}}}]);
//# sourceMappingURL=Result.35512305.js.map