import{r as d,j as e}from"./app-2gy1TP21.js";function p(r){const n=Math.floor(Math.log(r)/Math.log(1024));return Number((r/Math.pow(1024,n)).toFixed(2))+" "+["B","kB","MB","GB","TB"][n]}function h({name:r,error:n,onChange:t}){const o=d.useRef(null),[s,l]=d.useState(null);function f(){var i;(i=o==null?void 0:o.current)==null||i.click()}function x(){l(null),t==null||t(null)}function m(i){var u;const c=((u=i.currentTarget)==null?void 0:u.files)[0]||null;l(c),t==null||t(c)}return e.jsxs("div",{className:`form-input w-full focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 border-gray-300 rounded p-0 ${n&&"border-red-400 focus:border-red-400 focus:ring-red-400"}`,children:[e.jsx("input",{id:r,ref:o,type:"file",className:"hidden",onChange:m}),!s&&e.jsx("div",{className:"p-2",children:e.jsx(a,{text:"Browse",onClick:f})}),s&&e.jsxs("div",{className:"flex items-center justify-between p-2",children:[e.jsxs("div",{className:"flex-1 pr-1",children:[s==null?void 0:s.name,e.jsxs("span",{className:"ml-1 text-xs text-gray-600",children:["(",p(s==null?void 0:s.size),")"]})]}),e.jsx(a,{text:"Remove",onClick:x})]})]})}function a({text:r,onClick:n,...t}){return e.jsx("button",{...t,type:"button",className:"px-4 py-1 text-xs font-medium text-white bg-gray-600 rounded-sm focus:outline-none hover:bg-gray-700",onClick:n,children:r})}export{h as F};
