(this["webpackJsonpnasa-app"]=this["webpackJsonpnasa-app"]||[]).push([[0],{158:function(e,t,a){},234:function(e,t,a){},236:function(e,t,a){},258:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(35),i=a.n(r),s=a(21),o=a.n(s),l=a(41),u=a(142),j=(a(158),a(145)),d=a(17),b=a(140),O=a(87),h=a(136),p=a.n(h),f=a(137),x=a.n(f),m=a(49),v=a.n(m),g=a(40),y=(a(234),a(32)),k=a(5),I=a(2);function N(e){var t=Object(g.b)(),a=e.date,n=Object(g.c)((function(e){return e.likes[a]}));return Object(I.jsx)("div",{className:"like-btn-container",children:Object(I.jsx)("button",{"aria-label":n?"un-like":"like",className:"like-button "+(n?"liked":"not-liked"),onClick:function(){var e;t(n?function(e){return function(){var t=Object(l.a)(o.a.mark((function t(a,n){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"LIKES/UNLIKE",payload:e}),c=n().likes,localStorage.setItem("likes",JSON.stringify(Object(k.a)(Object(k.a)({},c),{},Object(y.a)({},e,!1))));case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a):(e=a,function(){var t=Object(l.a)(o.a.mark((function t(a,n){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"LIKES/LIKE",payload:e}),c=n().likes,localStorage.setItem("likes",JSON.stringify(Object(k.a)(Object(k.a)({},c),{},Object(y.a)({},e,!0))));case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()))},children:Object(I.jsx)("i",{"aria-hidden":"true",title:n?"un-like this post":"like this post",className:"fas fa-heart"})})})}a(236);var S=a(139),E=a.n(S);function L(e){var t=e.post,a=Object(n.useState)(!1),c=Object(d.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(!1),o=Object(d.a)(s,2),l=o[0],u=o[1],j=function(){u(!l)};return Object(I.jsx)(x.a,{partialVisibility:!0,onChange:function(e){r||i(e)},children:Object(I.jsxs)("div",{className:"image-container",children:[Object(I.jsx)(N,{date:t.date}),Object(I.jsxs)(b.a,{children:[Object(I.jsxs)(O.a,{xs:12,md:4,className:"text-container",children:[Object(I.jsx)("h5",{children:Object(I.jsx)("em",{children:v()(t.date).format("MMMM DD, YYYY")})}),r&&!l&&Object(I.jsx)(p.a,{maxDelay:40,delayMap:[{at:/(\.)/,delay:300}],typing:1,fixed:!0,children:Object(I.jsxs)("span",{children:[E.a.truncate(t.explanation,{length:350,separator:" ",omission:" "}),Object(I.jsx)("button",{className:"link",onClick:j,href:"#",children:"...Read More"})]})}),r&&l&&Object(I.jsxs)("span",{children:[t.explanation," ",Object(I.jsx)("button",{className:"link",onClick:j,href:"#",children:"...Show Less"})]})]}),Object(I.jsxs)(O.a,{xs:12,md:8,children:[Object(I.jsx)("img",{style:{display:"inline"},src:t.thumbnail_url||t.url,alt:t.title}),Object(I.jsxs)("small",{children:["image copyright ".concat(t.copyright)," ",t.hdurl&&Object(I.jsx)("a",{href:t.hdurl,rel:"noreferrer",target:"_blank",children:"full size image"})]})]})]})]})})}var w=a(50),P=a(141),C=a.n(P);function K(){var e=Object(n.useState)(v()()),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){c(v()())}),1e3);return function(){clearInterval(e)}})),Object(I.jsx)("h1",{className:"time",children:a.format("h:mm:ss")})}function M(){var e=Object(w.useInfiniteQuery)("posts",function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.pageParam,n=void 0===a?0:a,e.next=3,C.a.get("/posts/?page=".concat(n));case 3:return c=e.sent,(r=c.data).nextId=n+1,r.previousId=n>0?n-1:null,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{getPreviousPageParam:function(e){var t;return null!==(t=e.previousId)&&void 0!==t&&t},getNextPageParam:function(e){var t;return null!==(t=e.nextId)&&void 0!==t&&t}});return Object(I.jsxs)(u.a,{fluid:!0,children:[Object(I.jsxs)("header",{children:[Object(I.jsx)("h1",{className:"title",children:"NASA DAILY BRIEF"}),Object(I.jsx)(K,{})]}),Object(I.jsxs)("main",{children:[!e.isFetched&&Object(I.jsx)("i",{className:"fas fa-atom fa-spin loading-icon"}),e.isFetched&&e.data.pages.map((function(e){return e.map((function(e){return Object(I.jsx)(L,{post:e},e.date)}))})),e.isFetched&&e.hasNextPage&&Object(I.jsx)(j.a,{className:"load-more-button",onClick:function(){e.fetchNextPage()},children:e.isFetchingNextPage?"Loading...":"Load More"})]}),e.isFetched&&Object(I.jsx)("footer",{children:"Content Courtesy of NASA APOD API \u2022\xa0Copyright 2021 James Bakker"})]})}var A=a(36),D={};var F=Object(A.combineReducers)({likes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIKES/LIKE":return Object(k.a)(Object(k.a)({},e),{},Object(y.a)({},t.payload,!0));case"LIKES/UNLIKE":return Object(k.a)(Object(k.a)({},e),{},Object(y.a)({},t.payload,!1));case"LIKES/SET":return Object(k.a)({},t.payload);default:return Object(k.a)({},e)}}}),J=F,Y=a(143),B=a(144),Q=Object(A.compose)(Object(A.applyMiddleware)(Y.a)),R=Object(A.createStore)(J,Object(B.composeWithDevTools)(Q)),T=new w.QueryClient;i.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(g.a,{store:R,children:Object(I.jsx)(w.QueryClientProvider,{client:T,children:Object(I.jsx)(M,{})})})}),document.getElementById("root"))}},[[258,1,2]]]);
//# sourceMappingURL=main.d9308a35.chunk.js.map