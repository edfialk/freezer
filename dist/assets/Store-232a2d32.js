import{u as B,h as E,e as $,c as f,i as R,j as I,w as V,o as c,a,b as e,d,t as r,F as w,r as C,k as h,l as g,m as p}from"./index-7e364e3a.js";import"./lodash-cb444b09.js";const F={class:"text-primary p-5"},M={class:"text-bold text-2xl"},T={key:0,class:"my-5 text-primary text-xl grid gap-5"},z={class:"text-3xl mb-5 text-center"},D={class:"grid gap-3"},G={class:"w-1/2 py-2"},L={class:"flex justify-between py-2"},O=["onClick"],q=e("i",{class:"fa-solid fa-minus"},null,-1),H=[q],J={class:"grow flex justify-center"},K={key:0},P=["onClick"],Q=e("i",{class:"fa-solid fa-plus"},null,-1),U=[Q],W={key:0},X={class:"w-1/2 py-2"},Y={class:"flex justify-between py-2"},Z=["onClick"],ee=e("i",{class:"fa-solid fa-minus"},null,-1),te=[ee],se={class:"grow flex justify-center"},oe={key:0},ne=["onClick"],ce=e("i",{class:"fa-solid fa-plus"},null,-1),ae=[ce],ue={__name:"Store",setup(re){const j=B(),_=E(),i=$(),N=f(()=>i.getters.store(Number(_.params.id))),l=R({items:[]}),S=f(()=>l.items.filter(s=>s.count<s.max).sort((s,o)=>s.name.localeCompare(o.name))),b=f(()=>l.items.filter(s=>s.count>=s.max).sort((s,o)=>s.name.localeCompare(o.name))),x=s=>{const o=l.items.find(t=>t.id==s.id);o.change>0&&o.change--},y=s=>{const o=l.items.find(t=>t.id==s.id);o.change++},A=()=>{const s=l.items.filter(u=>u.change>0).map(u=>(u.count+=u.change,delete u.change,u));i.dispatch("checkout",s);const o="1050757476015-smevo2b2ugucp6ai9l35l0umndvlljac.apps.googleusercontent.com";var t="https://accounts.google.com/o/oauth2/v2/auth",n=document.createElement("form");n.setAttribute("method","GET"),n.setAttribute("action",t);var v={client_id:o,redirect_uri:"https://freezer-7d7ea.web.app/kitty",response_type:"token",scope:"https://www.googleapis.com/auth/photoslibrary.readonly",include_granted_scopes:"true",state:"pass-through value"};for(var k in v){var m=document.createElement("input");m.setAttribute("type","hidden"),m.setAttribute("name",k),m.setAttribute("value",v[k]),n.appendChild(m)}document.body.appendChild(n),n.submit()};return I(()=>{if(i.state.ready){const s=i.getters.itemsByStore(Number(_.params.id));l.items=s.map(o=>({...o,change:0}))}}),V(()=>i.getters.isReady,()=>{const s=i.getters.itemsByStore(Number(_.params.id));l.items=s.map(o=>({...o,change:0}))}),(s,o)=>(c(),a("div",F,[e("div",M,[e("i",{class:"fa-solid fa-arrow-left",onClick:o[0]||(o[0]=t=>d(j).go(-1))})]),d(i).getters.isReady?(c(),a("div",T,[e("h1",z,r(d(N).name),1),e("div",D,[e("table",null,[e("tbody",null,[(c(!0),a(w,null,C(d(S),t=>(c(),a("tr",null,[e("td",G,r(t.name),1),e("td",L,[e("button",{type:"button",class:"focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800",onClick:g(n=>x(t),["stop"])},H,8,O),e("div",J,[p(r(t.count)+" ",1),t.change>0?(c(),a("span",K,"+"+r(t.change),1)):h("",!0),p(" / "+r(t.max),1)]),e("button",{type:"button",class:"focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800",onClick:g(n=>y(t),["stop"])},U,8,P)])]))),256))])]),d(b).length>0?(c(),a("hr",W)):h("",!0),e("table",null,[e("tbody",null,[(c(!0),a(w,null,C(d(b),t=>(c(),a("tr",null,[e("td",X,r(t.name),1),e("td",Y,[e("button",{type:"button",class:"focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800",onClick:g(n=>x(t),["stop"])},te,8,Z),e("div",se,[p(r(t.count)+" ",1),t.change>0?(c(),a("span",oe,"+"+r(t.change),1)):h("",!0),p(" / "+r(t.max),1)]),e("button",{type:"button",class:"focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800",onClick:g(n=>y(t),["stop"])},ae,8,ne)])]))),256))])])]),e("div",null,[e("button",{type:"button",class:"w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-800 shadow-lg shadow-green-800/80 font-medium rounded-lg px-5 py-3 text-center mr-2 mb-2",onClick:A},"Check Out")])])):h("",!0)]))}};export{ue as default};
