"use strict";(self.webpackChunknpa=self.webpackChunknpa||[]).push([[328],{7328:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var i=t(74165),r=t(15861),s=t(70885),l=t(72791),a=t(45041),c=t(68461),o=t(29798),d=t(80184),u=function(e){var n=e.limit,t=e.setLimit,i=function(e){e.preventDefault();var n=e.target,i=n.closest("li"),r=n.closest(".liketuner__limit");null!==i&&void 0!==i&&i.textContent&&i?((0,c.J)(e,"li"),t(i.textContent.toString().replace("Count:","")),(0,o.$)(".liketuner__limit ul").remove("add")):r&&((0,o.$)(".liketuner__limit ul").toggle("add"),(0,o.$)(".liketuner__limit").toggle("add"))};return(0,d.jsx)("div",{className:"liketuner",children:(0,d.jsx)("div",{className:"liketuner__row",children:(0,d.jsx)("div",{className:"liketuner__blocks",children:(0,d.jsx)("div",{className:"liketuner__block",children:(0,d.jsxs)("div",{className:"liketuner__limit",children:[(0,d.jsxs)("div",{onClick:i,className:"liketuner__number",children:[(0,d.jsx)("p",{children:"Limit "}),(0,d.jsx)("p",{className:"liketuner__arrow",children:">"})]}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{className:4==+n?"add":"",onClick:i,children:(0,d.jsx)("p",{className:"mini",children:"Count: 4"})}),(0,d.jsx)("li",{className:8==+n?"add":"",onClick:i,children:(0,d.jsx)("p",{className:"mini",children:"Count: 8"})}),(0,d.jsx)("li",{className:12==+n?"add":"",onClick:i,children:(0,d.jsx)("p",{className:"mini",children:"Count: 12"})})]})]})})})})})},m=t(44233),p=t(38953),v=function(e){var n=e.limit,t=(0,m.CG)((function(e){return e.favorite})),s=t.productsLimit,l=t.loading,a=(0,m.TL)();function c(){return(c=(0,r.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=s.length+ +n,a((0,p.yJ)({limit:t.toString()}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.jsx)("div",{className:"likepagination",children:(0,d.jsx)("div",{className:"likepagination__wrap",children:(0,d.jsx)("div",{className:"likepagination__btn",onClick:function(){return c.apply(this,arguments)},children:l?(0,d.jsx)(o.gb,{}):(0,d.jsx)("p",{className:"",children:"Show more"})})})})},h=t(72438),f=function(){var e=(0,m.TL)(),n=(0,m.CG)((function(e){return e.favorite})),t=n.products,c=n.productsLimit,f=n.loading,x=(0,l.useState)("8"),g=(0,s.Z)(x,2),j=g[0],_=g[1];function b(){return(b=(0,r.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e((0,p.yJ)({limit:j}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function N(){return(N=(0,r.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.length!=c.length&&c.length-1>=0&&e((0,p.yJ)({limit:j}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,l.useEffect)((function(){!function(){b.apply(this,arguments)}(),document.title="Favorite goods"}),[]),(0,l.useEffect)((function(){!function(){N.apply(this,arguments)}()}),[t.length]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"likesGoods",children:[(0,d.jsx)("div",{className:"indentstart"}),(0,d.jsx)(o.Dx,{name:"Favorites"}),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(h.Z,{classname:"like",children:[(0,d.jsx)(u,{setLimit:_,limit:j}),(0,d.jsx)(o.OR,{isLoading:f,children:(0,d.jsx)(a.Z,{like:!0})}),+t.length>+j&&+t.length>+c.length&&(0,d.jsx)(v,{limit:j})]})})]})})}},72438:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(80184),r=function(e){var n=e.classname,t=void 0===n?"":n,r=e.children;return(0,i.jsx)("div",{className:"goodsrow",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"goodsrow__row",children:(0,i.jsx)("div",{className:"goodsrow__container ".concat(t),children:r})})})})}},98563:function(e,n,t){t.d(n,{G8:function(){return h},G2:function(){return f},pb:function(){return x}});t(72791);var i=t(43504),r=t(87152),s=t(77092),l=t(66130),a=t(29798),c=(t(4676),t(15880),t(80184)),o=function(e){var n=e.product;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.tq,{observer:!0,observeParents:!0,pagination:{clickable:!0},modules:[r.tl],className:Array.from(Object.values(JSON.parse(null===n||void 0===n?void 0:n.deviceimg.img))).length<=1?"SwiperProduct notpagination":"SwiperProduct",allowTouchMove:!0,children:Array.from(Object.values(JSON.parse(null===n||void 0===n?void 0:n.deviceimg.img))).map((function(e,n){return(0,c.jsx)(s.o5,{children:(0,c.jsxs)("div",{className:"product__img load",children:[(0,c.jsx)("div",{className:"product__load"}),(0,c.jsx)("img",{src:"".concat(l.Ok.API_URL).concat(e),onLoad:function(n){return d(n,e,".product__img")}})]})},n)}))})})},d=function(e,n,t){var i=e.target;(0,a.$)(i.closest(t)).take().style.backgroundImage="url(".concat(l.Ok.API_URL).concat(n,")"),(0,a.$)(i.closest(t)).remove("load"),i.remove(),(0,a.$)(".product__table").remove("load")},u=t(68219),m=t(44233),p=t(19757),v=t(96368),h=function(e){var n,t,r,s,l=e.product,d=(0,a.vm)(a.yX),h=(0,m.TL)(),g=(0,m.CG)((function(e){return e.basket})).products;function j(e,n){h((0,p.ID)({isActive:!0,component:e,subCom:n}))}return(0,c.jsxs)("div",{className:"product__item",children:[(0,c.jsxs)("div",{className:"product__blockimage",children:[(0,c.jsx)(o,{product:l}),(0,c.jsx)("div",{className:"product__heart",children:(0,c.jsx)(a.ZY,{id:l.id,model:j})}),l.sale>0&&(0,c.jsx)("div",{className:"product__sale",children:(0,c.jsxs)("div",{className:"product__saleback",children:[(0,c.jsx)("div",{className:"product__saleground"}),(0,c.jsx)("div",{className:"product__saletext",children:(0,c.jsxs)("p",{className:"mini",children:["-",l.sale,"%"]})})]})}),(0,c.jsx)("div",{className:"product__rating rating",children:(0,c.jsxs)("div",{className:"rating__body",children:[(0,c.jsx)("div",{className:"rating__star",children:(0,c.jsx)(u.r,{})}),(0,c.jsx)("div",{className:"rating__text",children:(0,c.jsx)("p",{className:"mini",children:x(l.ratings)||0})})]})})]}),(0,c.jsxs)("div",{className:"product__text",children:[(0,c.jsx)("div",{className:l.sale>0?"product__price add":"product__price",children:(0,c.jsx)(f,{product:l})}),(0,c.jsx)("div",{className:"product__textbottom",children:(0,c.jsx)("div",{translate:"no",className:"product__name",children:(0,c.jsxs)("p",{className:"mini",children:[(0,c.jsxs)("span",{"data-type-string":!0,children:[l.name.length<=30?l.name:l.name.split("").filter((function(e,n){return n<=29})).join(""),l.name.length>30&&(0,c.jsx)("span",{title:l.name.split("").filter((function(e,n){return n>29})).join(""),children:"..."})," ","/"," "]}),(0,c.jsxs)("span",{className:"product__category ",children:[(null===l||void 0===l||null===(n=l.brand)||void 0===n?void 0:n.name.length)<=30?null===l||void 0===l||null===(t=l.brand)||void 0===t?void 0:t.name:null===l||void 0===l||null===(r=l.brand)||void 0===r?void 0:r.name.split("").filter((function(e,n){return n<=30})).join("")," ",(null===l||void 0===l||null===(s=l.brand)||void 0===s?void 0:s.length)>30&&(0,c.jsx)("span",{title:null===l||void 0===l?void 0:l.brand.split("").filter((function(e,n){return n>29})).join(""),children:"..."})]})]})})})]}),(0,c.jsx)(i.rU,{to:"/shop/item/".concat(l.id),onClick:function(){document.documentElement.scrollIntoView(!0)},className:"product__viewmore",children:(0,c.jsx)("p",{className:"big",children:"review"})}),(0,c.jsx)(d,{product:l,model:j,show:(0,v.OB)(g,(null===l||void 0===l?void 0:l.id)||0)>0})]})},f=function(e){var n=e.product;return(0,c.jsx)(c.Fragment,{children:n.sale>0?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("p",{className:"big","data-type-number":!0,children:["$",(+n.price-+n.price/100*n.sale).toFixed(1).replace(/\.0/,"")]}),(0,c.jsxs)("p",{"data-type-number":!0,children:["$",n.price]})]}):(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("p",{className:"big","data-type-number":!0,children:["$",n.price]})})})},x=function(e){if(e.length>0){var n=0,t=0,i=0,r=0,s=0;return e.map((function(e){switch(e.quantity){case 5:n+=1;break;case 4:t+=1;break;case 3:i+=1;break;case 2:r+=1;break;case 1:s+=1}})),+((5*n+4*t+3*i+2*r+s)/e.length).toFixed(0)}}},45041:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(70885),r=t(98563),s=(t(72791),t(43504)),l=t(44233),a=t(14849),c=t(80184),o=function(){var e=(0,l.CG)((function(e){return e.device})),n=e.pages,t=(e.page,(0,l.TL)()),i=u(),r=function(e){var r,s=n;+(s=(null===(r=e.target)||void 0===r?void 0:r.closest(".pagination__back")).dataset.back?+s-1+"":+s+1+"")>=1&&+s<=+n&&(i("page",s.toString()),t((0,a.oO)({page:s.toString()})),document.documentElement.scrollIntoView({block:"start",behavior:"smooth"}))};return(0,c.jsx)("div",{className:"pagination",children:(0,c.jsxs)("div",{className:"pagination__wrap",children:[(0,c.jsx)("div",{onClick:r,"data-back":!0,className:"pagination__back",children:(0,c.jsxs)("p",{children:[(0,c.jsxs)("span",{children:["<","\xa0"]})," Back"]})}),(0,c.jsx)("ul",{children:function(){for(var e=new Map,t=1;t<=+n;t++)e.set(t,(0,c.jsx)(d,{children:t.toString()},t));return Array.from(e.values())}()}),(0,c.jsx)("div",{onClick:r,"data-next":!0,className:"pagination__back",children:(0,c.jsxs)("p",{children:["Next ",(0,c.jsxs)("span",{children:["\xa0",">"]})]})})]})})},d=function(e){var n=e.children,t=(0,l.CG)((function(e){return e.device})).page,r=(0,s.lr)(),o=(0,i.Z)(r,2),d=(o[0],o[1],(0,l.TL)()),m=u(),p=t;return(0,c.jsx)("li",{onClick:function(){m("page",n.toString()),d((0,a.oO)({page:n})),document.documentElement.scrollIntoView({block:"start",behavior:"smooth"})},className:+n===+p?"add":"",children:(0,c.jsx)("p",{className:"big",children:n})})},u=function(){var e=(0,s.lr)(),n=(0,i.Z)(e,2),t=n[0],r=n[1];return function(e,n){t.set(e,n),r(t)}},m=t(29798),p=(t(99630),function(e){var n=e.like,t=void 0!==n&&n,a=(0,l.CG)((function(e){return e.device})),d=a.goods,u=a.pages,p=(0,l.CG)((function(e){return e.favorite})).products,v=(0,s.lr)(),h=(0,i.Z)(v,1)[0];return(0,c.jsxs)("div",{className:"product__table load",children:[(0,c.jsx)("div",{className:"product__goods",children:function(){var e,n=[];return e=t?p:h.has("sale")?d.filter((function(e){return e.sale>0})):d,p.length<=0&&(0,m.$)(".product__table").remove("load"),e.map((function(e){n.push((0,c.jsx)(r.G8,{product:e},e.name))})),n}()}),+u>1&&!t&&(0,c.jsx)(o,{})]})})},68461:function(e,n,t){function i(e,n){for(var t,i,r=[],s=e.target.closest(n);s.previousSibling;)1==(s=s.previousSibling).nodeType&&r.push(s);for(s=e.target.closest(n);s.nextSibling;)1==(s=s.nextSibling).nodeType&&r.push(s);r.map((function(e){var t;null===e||void 0===e||null===(t=e.closest(n))||void 0===t||t.classList.remove("add")})),null===(t=e.target.closest(n))||void 0===t||null===(i=t.closest(n))||void 0===i||i.classList.toggle("add")}function r(e,n){var t,i,r,s=e.target,l=s.closest("ul");s.closest('li[data-type="All"]')?Array.from(null===l||void 0===l?void 0:l.querySelectorAll("li.add")).forEach((function(e){e.classList.remove("add")})):(null===(t=s.closest(n))||void 0===t||t.classList.toggle("add"),null===l||void 0===l||null===(i=l.querySelector('li[data-type="All"]'))||void 0===i||i.classList.remove("add"));null!==l&&void 0!==l&&l.querySelector("li.add")||(null===l||void 0===l||null===(r=l.querySelector('li[data-type="All"]'))||void 0===r||r.classList.add("add"))}t.d(n,{J:function(){return i},l:function(){return r}})},15880:function(){},99630:function(){},68219:function(e,n,t){t.d(n,{r:function(){return o}});var i,r=t(72791),s=["title","titleId"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function c(e,n){var t=e.title,c=e.titleId,o=a(e,s);return r.createElement("svg",l({width:239,height:232,viewBox:"0 0 239 232",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":c},o),t?r.createElement("title",{id:c},t):null,i||(i=r.createElement("path",{d:"M153.965 71.8254L155.926 75.8664L160.37 76.5227L225.403 86.1277L225.422 86.1306L225.442 86.1333C227.596 86.4415 229.48 87.9889 230.2 90.1582C230.904 92.3192 230.349 94.678 228.71 96.3358L181.588 142.604L178.429 145.707L179.161 150.075L190.292 216.485C190.676 218.792 189.725 221.055 187.914 222.342L187.898 222.354L187.881 222.366C186.009 223.71 183.553 223.859 181.59 222.814C181.589 222.813 181.588 222.813 181.587 222.812L123.483 191.78L119.477 189.64L115.472 191.781L57.4439 222.797C57.4396 222.799 57.4353 222.802 57.4309 222.804C55.3956 223.873 52.9316 223.698 51.0757 222.366C49.2402 221.048 48.3111 218.77 48.6985 216.553L48.7037 216.524L48.7086 216.494L59.8416 150.075L60.5737 145.707L57.4132 142.604L10.2812 96.3336C8.65454 94.6912 8.09223 92.3328 8.80223 90.143C9.50962 87.9922 11.3664 86.4461 13.5608 86.1346L13.585 86.1311L13.6092 86.1276L78.588 76.5225L83.0276 75.8663L84.9896 71.8301L114.135 11.8755L114.143 11.8584L114.151 11.8412C115.128 9.80897 117.21 8.5 119.479 8.5C121.808 8.5 123.881 9.82251 124.851 11.8412L124.858 11.856L124.865 11.8709L153.965 71.8254Z"})))}var o=r.forwardRef(c);t.p}}]);
//# sourceMappingURL=328.583505d5.chunk.js.map