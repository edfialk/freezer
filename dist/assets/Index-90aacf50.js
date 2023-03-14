import{u as f,c as x,o as u,a as i,b as e,t as l,n as v,d as k,e as y,f as c,F as w,r as C,g as S}from"./index-5abd09c0.js";const B={class:"name"},$={class:"count"},d={__name:"StoreBlock",props:["name","count","id","need"],setup(b){const t=b,a=f(),m=s=>{a.push(`/store/${t.id}`)},p=x(()=>{let s={};return t.need>0?s["bg-red-400"]=!0:s["bg-light"]=!0,s});return(s,g)=>(u(),i("div",{class:v(["store",k(p)]),onClick:m},[e("span",B,l(t.name),1),e("span",$,l(t.count),1)],2))}},F={class:"grid grid-cols-2 gap-1"},I=S('<div class="relative grow mr-2"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="search" id="default-search" class="block w-full outline-none p-4 pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Items" required><button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button></div>',1),N={class:"mx-2"},V={class:"w-full text-primary text-l"},z=["onClick"],A={class:"py-2"},M={class:"text-right"},q={__name:"Index",setup(b){const t=y(),a=f(),m=x(()=>t.state.items.sort((n,r)=>n.name.localeCompare(r.name))),p=n=>{a.push(`/item/${n}`)},s=()=>a.push("/add-item"),g=n=>{const r=t.getters.itemsByStore(n);return r.reduce((h,_)=>_.count/_.max<=.5?++h:h,0)/r.length};return(n,r)=>(u(),i("div",null,[e("div",F,[c(d,{name:"Costco",id:1,need:g(1)},null,8,["need"]),c(d,{name:"Fred Meyer",id:2,need:g(2)},null,8,["need"]),c(d,{name:"Trader Joe's",id:3}),c(d,{name:"Whole Foods",id:4})]),e("form",null,[e("div",{class:"my-2 flex"},[I,e("button",{type:"submit",class:"text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800",onClick:s},"Add")])]),e("div",N,[e("table",V,[e("tbody",null,[(u(!0),i(w,null,C(k(m),o=>(u(),i("tr",{onClick:h=>p(o.id),class:v({"font-bold text-red-400":o.count/o.max<=.5})},[e("td",A,l(o.name),1),e("td",M,l(o.count)+" / "+l(o.max),1)],10,z))),256))])])])]))}};export{q as default};