(this.webpackJsonpgoogle_clone=this.webpackJsonpgoogle_clone||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(22),i=c.n(n),r=(c(60),c(5)),l=c(4),o=(c(61),c(62),c(46)),j=c.n(o),d=c(89),h=c(40),b=c(21),u=c(30),O=c.n(u),m=c(45),x=c.n(m),g=(c(63),c(88)),p=c(2),v=Object(s.createContext)(),_=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(p.jsx)(v.Provider,{value:Object(s.useReducer)(t,c),children:a})},f=function(){return Object(s.useContext)(v)},N=c(38),y="SET_SEARCH_TERM",w=function(e,t){switch(console.log(t),t.type){case y:return Object(N.a)(Object(N.a)({},e),{},{term:t.term});default:return e}};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=f(),c=Object(b.a)(t,2);Object(h.a)(c[0]);var a=c[1],n=Object(s.useState)(""),i=Object(b.a)(n,2),r=i[0],o=i[1],j=Object(l.f)(),d=function(e){e.preventDefault(),j.push("/search"),a({type:y,term:r})};return Object(p.jsxs)("form",{className:"search",children:[Object(p.jsxs)("div",{className:"search__input",children:[Object(p.jsx)(O.a,{className:"search__inputIcon"}),Object(p.jsx)("input",{value:r,onChange:function(e){return o(e.target.value)}}),Object(p.jsx)(x.a,{})]}),e?Object(p.jsxs)("div",{className:"search_button",children:[Object(p.jsx)(g.a,{className:"search__buttonhidden",type:"submit",onClick:d,variant:"outlined",children:"Google Search"}),Object(p.jsx)(g.a,{className:"search__buttonhidden",variant:"outlined",children:"I'm Feeling Lucky"})]}):Object(p.jsxs)("div",{className:"search_button",children:[Object(p.jsx)(g.a,{type:"submit",onClick:d,variant:"outlined",children:"Google Search"}),Object(p.jsx)(g.a,{variant:"outlined",children:"I'm Feeling Lucky"})]})]})};var k=function(){return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsxs)("div",{className:"home__header",children:[Object(p.jsxs)("div",{className:"home__headingLift",children:[Object(p.jsx)(r.b,{to:"/about",children:"About"}),Object(p.jsx)(r.b,{to:"/store",children:"Store"})]}),Object(p.jsxs)("div",{className:"home__headingRight",children:[Object(p.jsx)(r.b,{to:"/gmail",children:"Gmail"}),Object(p.jsx)(r.b,{to:"/images",children:"Images"}),Object(p.jsx)(j.a,{}),Object(p.jsx)(d.a,{children:Object(p.jsx)("img",{className:"photo",src:"https://avatars.githubusercontent.com/u/75248200?v=4",alt:""})})]})]}),Object(p.jsx)("div",{className:"home__body",children:Object(p.jsx)("img",{src:"https://uwaterloo.ca/events/sites/ca.events/files/styles/wide-body-750px-wide/public/uploads/images/google-logo.jpg?itok=abYgzODd",alt:"icon"})}),Object(p.jsx)("div",{className:"home__inputontainer",children:Object(p.jsx)(S,{})})]})},P=(c(71),c(37)),I=c.n(P),C=c(47),L=function(e){var t=Object(s.useState)(null),c=Object(b.a)(t,2),a=c[0],n=c[1];return Object(s.useEffect)((function(){(function(){var t=Object(C.a)(I.a.mark((function t(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyAjTlVekLVhoK2h3R2zMbRbLnOl8_4VA7Y","&cx=").concat("3bba802c0b98506c5","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){n(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),{data:a}},T=c(48),R=c.n(T),A=c(49),F=c.n(A),E=c(50),M=c.n(E),z=c(51),B=c.n(z),D=c(52),G=c.n(D);var V=function(){var e=f(),t=Object(b.a)(e,2),c=t[0].term,s=(t[1],L(c).data);return Object(p.jsxs)("div",{className:"searchPage",children:[Object(p.jsxs)("div",{className:"searchPage__header",children:[Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("img",{className:"searchPage__logo",src:"https://uwaterloo.ca/events/sites/ca.events/files/styles/wide-body-750px-wide/public/uploads/images/google-logo.jpg?itok=abYgzODd",alt:"icon"})}),Object(p.jsxs)("div",{className:"searchPage__headerBody",children:[Object(p.jsx)(S,{hideButtons:!0}),Object(p.jsxs)("div",{className:"searchPage__options",children:[Object(p.jsxs)("div",{className:"searchpage__optionsleft",children:[Object(p.jsxs)("div",{className:"searchpage__option",children:[Object(p.jsx)(O.a,{}),Object(p.jsx)(r.b,{to:"/all",children:"All"})]}),Object(p.jsxs)("div",{className:"searchpage__option",children:[Object(p.jsx)(R.a,{}),Object(p.jsx)(r.b,{to:"/news",children:"News"})]}),Object(p.jsxs)("div",{className:"searchpage__option",children:[Object(p.jsx)(F.a,{}),Object(p.jsx)(r.b,{to:"/images",children:"Images"})]}),Object(p.jsxs)("div",{className:"searchpage__option",children:[Object(p.jsx)(M.a,{}),Object(p.jsx)(r.b,{to:"/shopping",children:"Shopping"})]}),Object(p.jsxs)("div",{className:"searchpage__option",children:[Object(p.jsx)(B.a,{}),Object(p.jsx)(r.b,{to:"/maps",children:"Maps"})]}),Object(p.jsxs)("div",{className:"searchpage__option",children:[Object(p.jsx)(G.a,{}),Object(p.jsx)(r.b,{to:"/more",children:"More"})]})]}),Object(p.jsxs)("div",{className:"searchpage__optionRight",children:[Object(p.jsx)("div",{className:"searchpage__option",children:Object(p.jsx)(r.b,{to:"/settings",children:"Settings"})}),Object(p.jsx)("div",{className:"searchpage__option",children:Object(p.jsx)(r.b,{to:"/tool",children:"Tools"})})]})]})]})]}),c&&Object(p.jsxs)("div",{className:"searchPage__results",children:[Object(p.jsxs)("p",{className:"searchPage__resultsCount",children:["About ",null===s||void 0===s?void 0:s.searchInformation.formattedTotalResults," results (",null===s||void 0===s?void 0:s.searchInformation.formattedSeacrhTime," seconds) for ",c]}),null===s||void 0===s?void 0:s.items.map((function(e){var t,c,s,a,n,i;return Object(p.jsxs)("div",{className:"searchPage_result",children:[Object(p.jsxs)("a",{className:"searchPage__resultLink",href:e.link,children:[(null===(t=e.pagemap)||void 0===t||null===(c=t.cse_image)||void 0===c?void 0:c.length)>0&&(null===(s=e.pagemap)||void 0===s||null===(a=s.cse_image[0])||void 0===a?void 0:a.src)&&Object(p.jsx)("img",{className:"searchPage__resultImage",src:null===(n=e.pagemap)||void 0===n||null===(i=n.cse_image[0])||void 0===i?void 0:i.src,alt:""}),e.displayLink]}),Object(p.jsx)("a",{className:"search__resultTitle",href:e.link,children:Object(p.jsx)("h2",{children:e.title})}),Object(p.jsx)("p",{className:"search__resultSnippet",children:e.snippet})]})}))]})]})};var Y=function(){return Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(r.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/search",children:Object(p.jsx)(V,{})}),Object(p.jsx)(l.a,{path:"/",children:Object(p.jsx)(k,{})})]})})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(_,{initialState:{term:null},reducer:w,children:Object(p.jsx)(Y,{})})}),document.getElementById("root")),J()}},[[73,1,2]]]);
//# sourceMappingURL=main.d3b18755.chunk.js.map