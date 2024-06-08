import{r as a,j as t,q as g}from"./app-2gy1TP21.js";import{c as f}from"./index-CzQdIGGl.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=(...e)=>e.filter((s,r,o)=>!!s&&o.indexOf(s)===r).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=a.forwardRef(({color:e="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:n="",children:c,iconNode:i,...u},x)=>a.createElement("svg",{ref:x,...w,width:s,height:s,stroke:e,strokeWidth:o?Number(r)*24/Number(s):r,className:d("lucide",n),...u},[...i.map(([p,h])=>a.createElement(p,h)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(e,s)=>{const r=a.forwardRef(({className:o,...n},c)=>a.createElement(y,{ref:c,iconNode:s,className:d(`lucide-${k(e)}`,o),...n}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=l("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=l("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=l("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=l("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function A({color:e,onClick:s}){const r=f("block -mr-2 fill-current",{"text-red-700 group-hover:text-red-800":e==="red","text-green-700 group-hover:text-green-800":e==="green"});return t.jsx("button",{onClick:s,type:"button",className:"focus:outline-none group p-2",children:t.jsx(v,{size:16,className:r})})}function m({icon:e,action:s,message:r,variant:o,onClose:n}){const c={success:"green",error:"red",warning:"yellow"}[o||"success"],i={success:"bg-green-500 text-white",error:"bg-red-500 text-white",warning:"bg-yellow-500 text-yellow-800"}[o||"success"],u={success:t.jsx(b,{size:20}),error:t.jsx(j,{size:20}),warning:t.jsx(C,{size:20})}[o||"success"];return t.jsxs("div",{className:`${i} px-4 mb-8 flex items-center justify-between rounded max-w-3xl`,children:[t.jsxs("div",{className:"flex items-center space-x-2",children:[e||u,t.jsx("div",{className:"py-4 text-sm font-medium",children:r})]}),s,n&&t.jsx(A,{onClick:n,color:c})]})}function z(){const[e,s]=a.useState(!0),{flash:r,errors:o}=g().props,n=Object.keys(o).length;return a.useEffect(()=>{s(!0)},[r,o]),t.jsxs(t.Fragment,{children:[r.success&&e&&t.jsx(m,{variant:"success",message:r.success,onClose:()=>s(!1)}),r.error&&e&&t.jsx(m,{variant:"error",message:r.error,onClose:()=>s(!1)}),n>0&&e&&t.jsx(m,{variant:"error",message:"There are "+n+" form errors.",onClose:()=>s(!1)})]})}export{m as A,z as F,l as c};
