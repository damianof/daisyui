(window.webpackJsonp=window.webpackJsonp||[]).push([[98,6,11,44],{406:function(t,e,n){var o=n(18),l="["+n(407)+"]",r=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},407:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},408:function(t,e,n){"use strict";n.r(e);var o={props:{classes:String}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(408).default})},409:function(t,e,n){"use strict";var o=n(10),l=n(4),r=n(82),c=n(14),d=n(12),f=n(36),h=n(163),v=n(61),m=n(5),y=n(63),_=n(62).f,C=n(26).f,x=n(13).f,w=n(406).trim,S="Number",I=l.Number,E=I.prototype,T=f(y(E))==S,N=function(t){var e,n,o,l,r,c,d,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=w(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+f}for(c=(r=f.slice(2)).length,d=0;d<c;d++)if((code=r.charCodeAt(d))<48||code>l)return NaN;return parseInt(r,o)}return+f};if(r(S,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var O,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(T?m((function(){E.valueOf.call(n)})):f(n)!=S)?h(new I(N(e)),n,k):N(e)},A=o?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;A.length>D;D++)d(I,O=A[D])&&!d(k,O)&&x(k,O,C(I,O));k.prototype=E,E.constructor=k,c(l,S,k)}},410:function(t,e,n){"use strict";n.r(e);n(40),n(409),n(22),n(39),n(64),n(114),n(37),n(38),n(164),n(48),n(162),n(83),n(49);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},411:function(t,e,n){n(412)},412:function(t,e,n){"use strict";var o=n(2),l=n(18),r=n(84),c=n(85),d=n(165),f=n(3),h=n(23),v=f("replace"),m=RegExp.prototype,y=Math.max,_=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};o({target:"String",proto:!0},{replaceAll:function(t,e){var n,o,f,C,x,w,S,I,E=l(this),T=0,N=0,O="";if(null!=t){if((n=r(t))&&!~String(l("flags"in m?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(o=t[v]))return o.call(t,E,e);if(h&&n)return String(E).replace(t,e)}for(f=String(E),C=String(t),(x="function"==typeof e)||(e=String(e)),w=C.length,S=y(1,w),T=_(f,C,0);-1!==T;)I=x?String(e(C,T,f)):d(C,f,T,[],void 0,e),O+=f.slice(N,T)+I,N=T+w,T=_(f,C,T+S);return N<f.length&&(O+=f.slice(N)),O}})},413:function(t,e,n){"use strict";var o=n(2),l=n(406).trim;o({target:"String",proto:!0,forced:n(414)("trim")},{trim:function(){return l(this)}})},414:function(t,e,n){var o=n(5),l=n(407);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!="​᠎"[t]()||l[t].name!==t}))}},415:function(t,e,n){"use strict";n.r(e);n(411),n(413),n(114);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var o,l=new Array(1+n++).join("  "),r=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+l),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+r),e.appendChild(o));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html",staticStyle:{display:"block","overflow-x":"auto",padding:"0.5em",color:"#abb2bf",background:"#282c34"}})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(410).default})},508:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{DAISYUI_VERSION:"1.22.0"}},head:function(){return{title:"daisyUI — Customize components",meta:[{hid:"description",name:"description",content:"How to customize daisyUI Tailwind CSS components"}]}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("Wrapper",{attrs:{nocode:""}},[n("p",{staticClass:"max-w-4xl mb-4"},[t._v("\n      daisyUI components comes with many variants necessary for design systems and you won't usually need to customize anything but you can still add Tailwind's utility classes to customize components.\n    ")]),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n      Let's say, you wanna customize this button:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v('<button class="'),n("span",{staticClass:"text-info"},[t._v("btn btn-primary")]),t._v('">daisyUI Button</button>')])])])]),t._v(" "),n("div",{staticClass:"w-full my-2"},[n("button",{staticClass:"btn btn-primary"},[t._v("daisyUI Button")])]),t._v(" "),n("p",{staticClass:"max-w-4xl my-4"},[t._v("\n      You just need to add Tailwind's utility classes:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v('<button class="'),n("span",{staticClass:"text-info"},[t._v("btn btn-primary")]),t._v(" "),n("span",{staticClass:"text-success"},[t._v("rounded-full")]),t._v('">daisyUI Button customized</button>')])])])]),t._v(" "),n("div",{staticClass:"w-full my-2"},[n("button",{staticClass:"rounded-full btn btn-primary"},[t._v("daisyUI Button customized")])]),t._v(" "),n("p",{staticClass:"max-w-4xl my-4"},[t._v("\n      You can also customize components on your CSS file, using Tailwind's "),n("span",{staticClass:"badge badge-outline"},[t._v("@apply")]),t._v(" directive.\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v(".btn {\n    "),n("span",{staticClass:"text-success"},[t._v("@apply rounded-full")]),t._v(";\n  }")])])])]),t._v(" "),n("h2",{staticClass:"mt-20 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Design components")]),t._v(" "),n("span",[t._v("from scratch")])]),t._v(" "),n("p",{staticClass:"max-w-4xl my-4"},[t._v("\n      If you want to design everything and apply your very own style, you can use daisyUI "),n("span",{staticClass:"badge badge-outline"},[t._v("base")]),t._v(" (unstyled UI) version. It has no colors and no visual style but components will have a skeleton style which makes your job easier.\n    ")]),t._v(" "),n("p",{staticClass:"max-w-4xl my-4"},[t._v("\n      On your "),n("span",{staticClass:"badge badge-outline"},[t._v("tailwind.config.js")]),t._v(" file, you just need to set "),n("span",{staticClass:"badge badge-outline"},[t._v("styled: false")]),t._v(".\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("module.exports = {\n\n    plugins: [\n      require('daisyui'),\n    ],\n    daisyui: {\n      "),n("span",{staticClass:"badge badge-primary"},[t._v("styled: false,")]),t._v("\n    },\n\n  }")])])])]),t._v(" "),n("p",{staticClass:"max-w-4xl my-4"},[t._v("\n      Or use "),n("span",{staticClass:"badge badge-outline"},[t._v("unstyled.css")]),t._v(" from CDN:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"text-sm shadow-lg mockup-code"},[n("pre",[n("code",[n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v('<link href="')]),t._v("https://cdn.jsdelivr.net/npm/daisyui@"+t._s(t.DAISYUI_VERSION)+"/dist/unstyled.css"),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v('" rel="stylesheet" />')])])])])])]),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200"},[n("NuxtLink",{staticClass:"text-xs btn-lg btn lg:text-lg",attrs:{to:"/docs/default-themes"}},[t._v("\n      Next: Themes\n      "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Customize components")]),t._v(" "),n("span",[t._v("with utility classes")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(408).default,Wrapper:n(415).default,Icon:n(115).default})}}]);