(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),c=(a(12),a(2));a(13);var s=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"Employee-Directory"))};a(14);var m=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))},i=(a(15),a(3)),u=Object(n.createContext)(null);a(16);var E=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useContext)(u),s=o.employees,m=o.setDisplayedEmployees;return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{value:a,onChange:function(e){var t=e.target.value;l(t);var a=s.filter(function(e){return-1!==e.firstName.toLowerCase().indexOf(t.toLowerCase())});m(Object(i.a)(a))},name:"term",list:"term",type:"text",className:"form-control",placeholder:"Search by Name",id:"term"})))};var f=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Employee Directory"),r.a.createElement(E,null))},d=[{firstName:"James",lastName:"Potter",age:31,email:"jamespotter@asu.edu",role:"Software Engineer"},{firstName:"John",lastName:"Williams",age:45,email:"johnwilliams@udr.edu",role:"UI/UX Designer"},{firstName:"Paul",lastName:"Pope",age:65,email:"paulpope@brs.edu",role:"Sales Manager"},{firstName:"Ringo",lastName:"Galantis",age:49,email:"ringogalantis@bec.edu",role:"Software Engineer"},{firstName:"George",lastName:"Haroldson",age:34,email:"georgeharoldson@uci.edu",role:"Software Engineer"}];var p=function(){var e=Object(n.useContext)(u),t=e.displayedEmployees,a=e.setDisplayedEmployees,l=e.employees;return r.a.createElement("table",{className:"table table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return l.sort(function(e,t){return e.firstName<t.firstName?-1:1}),void a(Object(i.a)(l))},scope:"col"},r.a.createElement("button",null,"First Name")),r.a.createElement("th",{scope:"col"},"Last Name"),r.a.createElement("th",{onClick:function(){return l.sort(function(e,t){return e.age-t.age}),void a(Object(i.a)(l))},scope:"col"},r.a.createElement("button",null,"Age")),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Role"))),r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.age),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.role))})))};var g=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),i=Object(c.a)(o,2),E=i[0],g=i[1];return Object(n.useEffect)(function(){new Promise(function(e){e(d)}).then(function(e){l(e),g(e)})},[]),r.a.createElement("div",null,r.a.createElement(u.Provider,{value:{employees:a,setEmployees:l,displayedEmployees:E,setDisplayedEmployees:g}},r.a.createElement(f,null),r.a.createElement(m,null,r.a.createElement(p,null)),r.a.createElement(s,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[7,1,2]]]);
//# sourceMappingURL=main.fd3c94e4.chunk.js.map