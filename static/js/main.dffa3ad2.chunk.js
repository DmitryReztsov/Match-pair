(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,a,n){},14:function(e,a,n){"use strict";n.r(a);var d=n(1),t=n(7),c=n.n(t),i=n(2),r=n(5),l=n(0);var u=function(e){var a="";return e.hidden&&(a="cardHidden"),Object(l.jsx)("div",{className:"card "+a,onClick:e.onClick,children:e.value})};var s=function(e){var a=Object(d.useState)(e.cells),n=Object(r.a)(a,2),t=n[0],c=n[1],s=Object(d.useState)(0),o=Object(r.a)(s,2),v=o[0],h=o[1],j=Object(d.useState)([]),b=Object(r.a)(j,2),f=b[0],O=b[1],m=function(e){return Object(l.jsx)(u,{value:t[e].value,hidden:t[e].hidden,onClick:function(){return p(e)}})},p=function(e){if(t[e].hidden){var a=Object(i.a)(t);a[e].hidden=!1,c(a),h(v+1),O((function(){return[].concat(Object(i.a)(f),[t[e]])}))}};Object(d.useEffect)((function(){if(console.log(v,f),2==v){if(f[0].value!=f[1].value)return x(),function(){h(0),O((function(){return[]}))};h(0),O((function(){return[]}))}}));var x=function(){for(var e=Object(i.a)(t),a=0;a<e.length;a++)e[a].hidden=!0;c(e)};return Object(l.jsxs)("div",{className:"board",children:[Object(l.jsxs)("div",{className:"board__row",children:[m(0),m(1),m(2),m(3)]}),Object(l.jsxs)("div",{className:"board__row",children:[m(4),m(5),m(6),m(7)]}),Object(l.jsxs)("div",{className:"board__row",children:[m(8),m(9),m(10),m(11)]}),Object(l.jsxs)("div",{className:"board__row",children:[m(12),m(13),m(14),m(15)]})]})},o=[{value:1,hidden:!0},{value:1,hidden:!0},{value:2,hidden:!0},{value:2,hidden:!0},{value:3,hidden:!0},{value:3,hidden:!0},{value:4,hidden:!0},{value:4,hidden:!0},{value:5,hidden:!0},{value:5,hidden:!0},{value:6,hidden:!0},{value:6,hidden:!0},{value:7,hidden:!0},{value:7,hidden:!0},{value:8,hidden:!0},{value:8,hidden:!0}];var v=function(e){return Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("h1",{className:"game__title",children:"Match Card!"}),Object(l.jsx)("p",{className:"game__description",children:"Reload page for restart"}),Object(l.jsx)(s,{cells:function(e){for(var a=Object(i.a)(e),n=a.length-1;n>0;n--){var d=Math.floor(Math.random()*(n+1)),t=[a[d].value,a[n].value];a[n].value=t[0],a[d].value=t[1]}return a}(o)})]})};n(13);c.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dffa3ad2.chunk.js.map