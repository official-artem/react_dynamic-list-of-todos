(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var a=c(4),s=c.n(a),n=c(2),l=(c(9),c(10),c(1)),i=(c(11),c(0)),o=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},d=function(e){var t=e.onChange,c=e.value,a=e.query,s=e.onDeleteQuery,n=e.onFilterChange;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){n(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){t(e.target.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:s})})]})]})},r=function(e){var t=e.todos,c=e.onCLick,a=e.selectedTodo;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,n=e.completed;return Object(i.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:t}),Object(i.jsx)("td",{className:"is-vcentered",children:n&&Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:n?"has-text-success":"has-text-danger",children:s})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(t)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far ".concat(a===t?"fa-eye-slash":"fa-eye")})})})})]},t)}))})]})};function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var b=function(e){var t=e.todo,c=e.onCancelModal,a=Object(l.useState)(null),s=Object(n.a)(a,2),d=s[0],r=s[1];return Object(l.useEffect)((function(){var e;(e=t.userId,j("/users/".concat(e))).then((function(e){r(e),window.console.log(e)}))}),[]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),d?Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(i.jsx)("button",{onClick:function(){c()},type:"button",className:"delete","data-cy":"modal-close"})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(i.jsx)("strong",{className:null!==t&&void 0!==t&&t.completed?"has-text-success":"has-text-danger",children:null!==t&&void 0!==t&&t.completed?"Done":"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===d||void 0===d?void 0:d.name})]})]})]}):Object(i.jsx)(o,{})]})},u=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)(0),u=Object(n.a)(s,2),h=u[0],m=u[1],O=Object(l.useState)(""),x=Object(n.a)(O,2),f=x[0],v=x[1],p=Object(l.useState)("all"),N=Object(n.a)(p,2),y=N[0],g=N[1];Object(l.useEffect)((function(){j("/todos").then((function(e){a(e)}))}),[]);var C=c.find((function(e){return e.id===h})),k=function(e,t,c){return e.filter((function(e){var a,s=e.title.replace(/ /g,"").toLowerCase(),n=t.replace(/ /g,"").toLowerCase(),l=s.includes(n);switch(c){case"active":a=!1===e.completed;break;case"completed":a=!0===e.completed;break;default:a=!0}return a&&l}))}(c,f,y);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(d,{onChange:function(e){v(e)},query:f,value:y,onDeleteQuery:function(){v("")},onFilterChange:function(e){g(e)}})}),Object(i.jsx)("div",{className:"block",children:c.length?Object(i.jsx)(r,{todos:k,selectedTodo:h,onCLick:function(e){m(e)}}):Object(i.jsx)(o,{})})]})})}),C&&Object(i.jsx)(b,{todo:C,onCancelModal:function(){m(0)}})]})};s.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.74294453.chunk.js.map