(this.webpackJsonpapicor=this.webpackJsonpapicor||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/kod.2138f062.png"},28:function(e,t,a){e.exports=a(56)},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(25),r=a.n(l),o=a(8),i=a(1),s=a(26),m=a.n(s),u=function(){return c.a.createElement("nav",{className:"navbar navbar-light bg-light"},c.a.createElement(o.b,{className:"navbar-brand",to:"/"},c.a.createElement("p",null,c.a.createElement("img",{src:m.a,width:"40",height:"40",className:"d-inline-block align-top mr-2",alt:"Logo"}),"Come to the Little K\xf3viD.")))},E=a(11),d=a(10),p=a.n(d),h=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){p.a.get("https://covid19api.io/api/v1/BrazilCasesByRegion").then((function(e){l(e.data.data[0].table)}),[])})),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"State"),c.a.createElement("th",{scope:"col"},"Cases"))),c.a.createElement("tbody",null,a.map((function(e){return c.a.createElement("tr",{key:e.state},c.a.createElement("td",null,e.state),c.a.createElement("td",null,e.cases))})))))},b=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){p.a.get("https://covid19api.io/api/v1/AllReports").then((function(e){var t=e.data.reports[0].table[0];Object.keys(t).forEach((function(e){l(t)}))}),[])})),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"State"),c.a.createElement("th",{scope:"col"},"Cases"))),c.a.createElement("tbody",null,a.map((function(e){return c.a.createElement("tr",{key:e.Country},c.a.createElement("td",null,c.a.createElement(o.b,{to:"/countries/".concat(e.Country)},e.Country)),c.a.createElement("td",null,e.TotalCases))})))))};var f=function(){return c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement(i.a,{path:"/",exact:!0,component:b}),c.a.createElement(i.a,{path:"/countries/",component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.7f52dfc9.chunk.js.map