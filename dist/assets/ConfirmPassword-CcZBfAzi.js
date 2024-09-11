import{T as d,o as m,e as n,w as t,a as r,u as a,Z as f,d as s,f as c,b as u,n as p}from"./app-CYxUQwMA.js";import{_ as w}from"./GuestLayout-Bz6hVvZZ.js";import{_,a as b,b as g}from"./TextInput-BZjmawdp.js";import{_ as x}from"./PrimaryButton-YFVbl584.js";import"ziggy-js";const v={class:"flex flex-col overflow-y-auto md:flex-row"},y={class:"flex items-center justify-center p-6 sm:p-12 md:w-1/2"},h={class:"w-full"},V={class:"flex justify-end mt-4"},T={__name:"ConfirmPassword",setup(C){const e=d({password:""}),i=()=>{e.post(route("password.confirm"),{onFinish:()=>e.reset()})};return($,o)=>(m(),n(w,null,{default:t(()=>[r(a(f),{title:"Confirm Password"}),s("div",v,[o[3]||(o[3]=s("div",{class:"h-32 md:h-auto md:w-1/2"},[s("img",{"aria-hidden":"true",class:"object-cover w-full h-full",src:"{{ asset('images/forgot-password-office.jpeg') }}",alt:"Office"})],-1)),s("div",y,[s("div",h,[o[2]||(o[2]=s("h1",{class:"mb-4 font-semibold text-gray-700 dark:text-gray-200"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),s("form",{onSubmit:c(i,["prevent"])},[s("div",null,[r(_,{for:"password",value:"Password"}),r(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(e).password,"onUpdate:modelValue":o[0]||(o[0]=l=>a(e).password=l),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),r(g,{class:"mt-2",message:a(e).errors.password},null,8,["message"])]),s("div",V,[r(x,{class:p(["ml-4",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:t(()=>o[1]||(o[1]=[u(" Confirm ")])),_:1},8,["class","disabled"])])],32)])])])]),_:1}))}};export{T as default};
