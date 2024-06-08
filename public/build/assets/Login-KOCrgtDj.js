import{j as e,W as d,Y as c}from"./app-2gy1TP21.js";import{L as x}from"./Logo-Bdda49Ee.js";import{L as h}from"./LoadingButton-CB2ePhRr.js";import{F as o,T as l}from"./FieldGroup-B2fEqxsK.js";import"./index-CzQdIGGl.js";function p({label:t,name:s,...a}){return e.jsxs("label",{className:"flex items-center select-none",htmlFor:s,children:[e.jsx("input",{id:s,name:s,type:"checkbox",className:"mr-2 form-checkbox rounded text-indigo-600 focus:ring-indigo-600",...a}),e.jsx("span",{className:"text-sm",children:t})]})}function w(){const{data:t,setData:s,errors:a,post:i,processing:n}=d({email:"johndoe@example.com",password:"secret",remember:!0});function m(r){r.preventDefault(),i(route("login.store"))}return e.jsxs("div",{className:"flex items-center justify-center min-h-screen p-6 bg-indigo-900",children:[e.jsx(c,{title:"Login"}),e.jsxs("div",{className:"w-full max-w-md",children:[e.jsx(x,{className:"block w-full max-w-xs mx-auto text-white fill-current",height:50}),e.jsxs("form",{onSubmit:m,className:"mt-8 overflow-hidden bg-white rounded-lg shadow-xl",children:[e.jsxs("div",{className:"px-10 py-12",children:[e.jsx("h1",{className:"text-3xl font-bold text-center",children:"Welcome Back!"}),e.jsx("div",{className:"w-24 mx-auto mt-6 border-b-2"}),e.jsxs("div",{className:"grid gap-6",children:[e.jsx(o,{label:"Email",name:"email",error:a.email,children:e.jsx(l,{name:"email",type:"email",error:a.email,value:t.email,onChange:r=>s("email",r.target.value)})}),e.jsx(o,{label:"Password",name:"password",error:a.password,children:e.jsx(l,{type:"password",error:a.password,value:t.password,onChange:r=>s("password",r.target.value)})}),e.jsx(o,{children:e.jsx(p,{label:"Remember Me",name:"remember",id:"remember",checked:t.remember,onChange:r=>s("remember",r.target.checked)})})]})]}),e.jsxs("div",{className:"flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200",children:[e.jsx("a",{className:"hover:underline",tabIndex:-1,href:"#reset-password",children:"Forgot password?"}),e.jsx(h,{type:"submit",loading:n,className:"btn-indigo",children:"Login"})]})]})]})]})}export{w as default};