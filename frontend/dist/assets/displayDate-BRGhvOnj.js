import{$ as t,a0 as e,r as a,N as n,j as r,M as i,z as o,a2 as s,bP as l,cD as h,cl as p}from"./index-DyR0ftVW.js";function d(e){return t("MuiSkeleton",e)}e("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const u=p`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,m=p`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,c="string"!=typeof u?h`
        animation: ${u} 2s ease-in-out 0.5s infinite;
      `:null,f="string"!=typeof m?h`
        &::after {
          animation: ${m} 2s linear 0.5s infinite;
        }
      `:null,g=i("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],!1!==a.animation&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(l(({theme:t})=>{const e=(a=t.shape.borderRadius,String(a).match(/[\d.\-+]*\s*(.*)/)[1]||""||"px");var a;const n=(r=t.shape.borderRadius,parseFloat(r));var r;return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${e}/${Math.round(n/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:t})=>t.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:t})=>t.hasChildren&&!t.width,style:{maxWidth:"fit-content"}},{props:({ownerState:t})=>t.hasChildren&&!t.height,style:{height:"auto"}},{props:{animation:"pulse"},style:c||{animation:`${u} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(\n                90deg,\n                transparent,\n                ${(t.vars||t).palette.action.hover},\n                transparent\n              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:f||{"&::after":{animation:`${m} 2s linear 0.5s infinite`}}}]}})),v=a.forwardRef(function(t,e){const a=n({props:t,name:"MuiSkeleton"}),{animation:i="pulse",className:l,component:h="span",height:p,style:u,variant:m="text",width:c,...f}=a,v={...a,animation:i,component:h,variant:m,hasChildren:Boolean(f.children)},w=(t=>{const{classes:e,variant:a,animation:n,hasChildren:r,width:i,height:o}=t;return s({root:["root",a,n,r&&"withChildren",r&&!i&&"fitContent",r&&!o&&"heightAuto"]},d,e)})(v);return r.jsx(g,{as:h,ref:e,className:o(w.root,l),ownerState:v,...f,style:{width:c,height:p,...u}})}),w=t=>{if(!t)return"N/A";try{const e=new Date(t);return isNaN(e.getTime())?"N/A":e.toISOString().split("T")[0]}catch(e){return"N/A"}};export{v as S,w as f};
