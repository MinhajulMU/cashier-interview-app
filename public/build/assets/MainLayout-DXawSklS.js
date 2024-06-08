import{j as e,a as r,r as l,q as m,Y as p}from"./app-2gy1TP21.js";import{c}from"./index-CzQdIGGl.js";import{c as a,F as u}from"./FlashMessages-Bxd5lyky.js";import{L as y}from"./Logo-Bdda49Ee.js";function o({icon:s,link:t,text:i}){const n=route().current(t+"*"),h=c({"text-white":n,"text-indigo-400 group-hover:text-white":!n}),x=c({"text-white":n,"text-indigo-200 group-hover:text-white":!n});return e.jsx("div",{className:"mb-4",children:e.jsxs(r,{href:route(t),className:"flex items-center group py-3 space-x-3",children:[e.jsx("div",{className:h,children:s}),e.jsx("div",{className:x,children:i})]})})}/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=a("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=a("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=a("CircleGauge",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=a("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=a("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=a("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);function d({className:s}){return e.jsxs("div",{className:s,children:[e.jsx(o,{text:"Dashboard",link:"dashboard",icon:e.jsx(j,{size:20})}),e.jsx(o,{text:"Organizations",link:"organizations",icon:e.jsx(f,{size:20})}),e.jsx(o,{text:"Contacts",link:"contacts",icon:e.jsx(w,{size:20})}),e.jsx(o,{text:"Reports",link:"reports",icon:e.jsx(k,{size:20})})]})}const N=()=>{const[s,t]=l.useState(!1);return e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-indigo-900 md:flex-shrink-0 md:w-56 md:justify-center",children:[e.jsx(r,{className:"mt-1",href:"/",children:e.jsx(y,{className:"text-white fill-current",width:"120",height:"28"})}),e.jsxs("div",{className:"relative md:hidden",children:[e.jsx(v,{color:"white",size:32,onClick:()=>t(!0),className:"cursor-pointer"}),e.jsxs("div",{className:`${s?"":"hidden"} absolute right-0 z-20`,children:[e.jsx(d,{className:"relative z-20 px-8 py-4 pb-2 mt-2 bg-indigo-800 rounded shadow-lg"}),e.jsx("div",{onClick:()=>{t(!1)},className:"fixed inset-0 z-10 bg-black opacity-25"})]})]})]})},b=()=>{const{auth:s}=m().props,[t,i]=l.useState(!1);return e.jsxs("div",{className:"flex items-center justify-between w-full p-4 text-sm bg-white border-b md:py-0 md:px-12 d:text-md",children:[e.jsx("div",{className:"mt-1 mr-4",children:s.user.account.name}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center cursor-pointer select-none group",onClick:()=>i(!0),children:[e.jsxs("div",{className:"mr-1 text-gray-800 whitespace-nowrap group-hover:text-indigo-600 focus:text-indigo-600",children:[e.jsx("span",{children:s.user.first_name}),e.jsx("span",{className:"hidden ml-1 md:inline",children:s.user.last_name})]}),e.jsx(g,{size:20,className:"text-gray-800 group-hover:text-indigo-600"})]}),e.jsxs("div",{className:t?"":"hidden",children:[e.jsxs("div",{className:"absolute top-0 right-0 left-auto z-20 py-2 mt-8 text-sm whitespace-nowrap bg-white rounded shadow-xl",children:[e.jsx(r,{href:route("users.edit",s.user.id),className:"block px-6 py-2 hover:bg-indigo-600 hover:text-white",onClick:()=>i(!1),children:"My Profile"}),e.jsx(r,{href:route("users"),className:"block px-6 py-2 hover:bg-indigo-600 hover:text-white",onClick:()=>i(!1),children:"Manage Users"}),e.jsx(r,{as:"button",href:route("logout"),method:"delete",className:"block w-full px-6 py-2 text-left focus:outline-none hover:bg-indigo-600 hover:text-white",children:"Logout"})]}),e.jsx("div",{onClick:()=>{i(!1)},className:"fixed inset-0 z-10 bg-black opacity-25"})]})]})]})};function O({title:s,children:t}){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:s}),e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"flex flex-col h-screen",children:[e.jsxs("div",{className:"md:flex",children:[e.jsx(N,{}),e.jsx(b,{})]}),e.jsxs("div",{className:"flex flex-grow overflow-hidden",children:[e.jsx(d,{className:"flex-shrink-0 hidden w-56 p-12 overflow-y-auto bg-indigo-800 md:block"}),e.jsxs("div",{className:"w-full px-4 py-8 overflow-hidden overflow-y-auto md:p-12","scroll-region":"true",children:[e.jsx(u,{}),t]})]})]})})]})}export{g as C,O as M};
