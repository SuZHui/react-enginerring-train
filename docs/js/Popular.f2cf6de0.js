"use strict";(self.webpackChunkreact_enginerring_train=self.webpackChunkreact_enginerring_train||[]).push([[702],{6702:(e,t,r)=>{r.d(t,{Z:()=>s});var n,a=r(9669),A=r.n(a),o=r(5773),i=r(958),l=r(821),c=(r(7294),A().create({}));c.interceptors.response.use((function(e){return e.data}),(function(e){if(A().isCancel(e))console.log("Request canceled",e);else if(!n){var t=(r="Request failed",e.response&&e.response.data?r=e.response.data.message||r:e.message&&(r=e.message),r);n=o.Z.error({title:"Error",content:t,afterClose:function(){return n=null}})}var r;return Promise.reject(e)}));const s={getList:function(e){e="all"!==e.toLowerCase()?"+language:".concat(e):"";return(0,i.ZP)((function(t){return"https://api.github.com/search/repositories?q=stars:%3E1".concat(e,"&sort=stars&order=desc&type=Repositories&per_page=30&page=").concat(t+1)}),(function(e){return c.get(e)}),{shouldRetryOnError:!1,revalidateFirstPage:!1})},getUser:function(e){return c.get("https://api.github.com/users/".concat(e))},getUser2:function(e){var t=e?"https://api.github.com/users/".concat(e):null;return(0,l.ZP)(t,(function(e){return c.get(e)}),{shouldRetryOnError:!1,revalidateOnFocus:!1})}}},8655:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var n=r(7294),a=r(1577),A=r(1382),o=r(8533),i=r(9711),l=r(5697),c=r.n(l),s=["All","JavaScript","Ruby","Java","CSS","Python"];function E(e){var t=e.type;return n.createElement("div",null,n.createElement("div",{className:"w-100 tc mb4"},s.map((function(e){var r="pointer dim f5 mh2 fw6";return t===e&&(r+=" red"),n.createElement(i.rU,{className:r,key:e,to:"/?type=".concat(e)},e)}))))}E.propTypes={type:c().string.isRequired};var u=r(2161),g=r(1635),m=r(8868),Q=r(7625),d=r(1436);function f(e){var t=e.index,r=e.owner,a=e.open_issues_count,o=e.stargazers_count,i=e.forks,l=e.html_url;return n.createElement("a",{href:l,target:"_blank",className:"db br1 bg-light-gray mb4 pv3 shadow-hover no-underline color-inherit w-80 center",rel:"noreferrer"},n.createElement("div",{className:"flex flex-column justify-center items-center"},n.createElement("h2",{className:"mb2 mt0"},"#",t),n.createElement(m.Z,{src:r.avatar_url,preview:!1,width:"100px",height:"100px",placeholder:n.createElement("div",{className:"w-100 h-100 tc"},n.createElement(A.Z,null)),fallback:"data:image/png;base64,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"}),n.createElement("h4",{className:"f4 mt3 mb1 red"},r.login),n.createElement("div",{className:"ph4 tl w-100 f5"},n.createElement("p",{className:"mv2 flex items-center",title:r.login},n.createElement(Q.G,{icon:d.ILF,color:"#ffbf74",fixedWidth:!0}),n.createElement("span",{className:"ml2 flex-auto-l truncate"},r.login)),n.createElement("p",{className:"mv2 flex items-center"},n.createElement(Q.G,{icon:d.Tab,color:"#ffd701",fixedWidth:!0}),n.createElement("span",{className:"ml2"},o)),n.createElement("p",{className:"mv2 flex items-center"},n.createElement(Q.G,{icon:d.mh3,color:"#8dc6f3",fixedWidth:!0}),n.createElement("span",{className:"ml2"},i)),n.createElement("p",{className:"mv2 flex items-center"},n.createElement(Q.G,{icon:d.eHv,color:"#f18d95",fixedWidth:!0}),n.createElement("span",{className:"ml2"},a)))))}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function p(e){var t=e.list;return n.createElement(u.Z,{className:"flex items-center justify-around pv3",wrap:!0},t.map((function(e,t){return n.createElement(g.Z,{key:e.id+e.name+t,lg:6,md:8,sm:12,xs:24},n.createElement(f,h({},e,{index:t+1})))})))}f.propTypes={index:c().number.isRequired,owner:c().object.isRequired,open_issues_count:c().number.isRequired,stargazers_count:c().number.isRequired,forks:c().number.isRequired,html_url:c().string.isRequired},p.propTypes={list:c().arrayOf(c().object).isRequired};var y=r(6702);function B(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,A=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(A.push(n.value),!t||A.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return A}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function C(){var e=N((0,i.lr)(),1)[0].get("type")||"All",t=function(e){var t=(0,n.useRef)([]),r=y.Z.getList(e),a=r.data,A=r.error,o=r.size,i=r.setSize,l=r.mutate;return t.current=a?a.reduce((function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).items,r=void 0===t?[]:t;return e.push.apply(e,B(r)),e}),[]):[],{isLoading:!a&&!A||!!(o>0&&a&&void 0===a[o-1]),isError:!!A,list:t.current,loadMore:function(){return i(o+1)},reload:function(){return l(a)}}}(e),r=t.list,l=t.isLoading,c=t.isError,s=t.loadMore,u=t.reload;return n.createElement("div",{className:"popular pt5 flex flex-column"},n.createElement(E,{type:e}),n.createElement("div",{id:"scrollable",className:"flex-auto overflow-y-auto"},n.createElement(o.Z,{dataLength:r.length,hasMore:r.length<90,next:s,loader:n.createElement("div",{className:"tc mv4"},l?c?n.createElement(a.Z,{type:"primary",onClick:u},"重新加载"):n.createElement(A.Z,{size:"large"}):c?n.createElement(a.Z,{type:"primary",onClick:u},"重新加载"):null),endMessage:n.createElement("div",{className:"tc mv4"},"已经到最后了！"),scrollableTarget:"scrollable"},n.createElement(p,{list:r}))))}}}]);
//# sourceMappingURL=Popular.f2cf6de0.js.map