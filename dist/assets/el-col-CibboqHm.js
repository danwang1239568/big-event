import{i as g,m as p,n as _,p as o,D as R,o as $,c as h,w as v,x as w,y as j,e as c,t as N,v as x,A as C,l as u,E as S,k as b,Z as K}from"./index-5_l7CkRI.js";import{b as E,m as r}from"./_plugin-vue_export-helper-CGjAqcjE.js";const O=Symbol("rowContextKey"),k=["start","center","end","space-around","space-between","space-evenly"],P=["top","middle","bottom"],A=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:k,default:"start"},align:{type:String,values:P}}),B=p({name:"ElRow"}),D=p({...B,props:A,setup(f){const e=f,l=_("row"),a=o(()=>e.gutter);R(O,{gutter:a});const i=o(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t}),d=o(()=>[l.b(),l.is(`justify-${e.justify}`,e.justify!=="start"),l.is(`align-${e.align}`,!!e.align)]);return(t,m)=>($(),h(x(t.tag),{class:j(c(d)),style:N(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var L=E(D,[["__file","row.vue"]]);const H=C(L),I=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),J=p({name:"ElCol"}),T=p({...J,props:I,setup(f){const e=f,{gutter:l}=S(O,{gutter:o(()=>0)}),a=_("col"),i=o(()=>{const t={};return l.value&&(t.paddingLeft=t.paddingRight=`${l.value/2}px`),t}),d=o(()=>{const t=[];return["span","offset","pull","push"].forEach(s=>{const n=e[s];b(n)&&(s==="span"?t.push(a.b(`${e[s]}`)):n>0&&t.push(a.b(`${s}-${e[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(e[s])?t.push(a.b(`${s}-${e[s]}`)):K(e[s])&&Object.entries(e[s]).forEach(([n,y])=>{t.push(n!=="span"?a.b(`${s}-${n}-${y}`):a.b(`${s}-${y}`))})}),l.value&&t.push(a.is("guttered")),[a.b(),t]});return(t,m)=>($(),h(x(t.tag),{class:j(c(d)),style:N(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var Z=E(T,[["__file","col.vue"]]);const M=C(Z);export{M as E,H as a};