import{a9 as Q,j as Be,F as ye,Y as Me,G as Ce,M as U,m as ke,aj as Te,p as M,r as $,a as Se,ak as ie,q as re,z as te,a4 as Ie,J as V,o as f,c as y,w as p,V as x,b as k,d as g,y as r,t as ue,Q as q,s as ee,v as W,g as O,a0 as F,af as G,x as Le,f as ne,W as oe,T as Ae,a8 as $e,al as be,Z as Ve,a6 as Oe,am as Ee,an as ce,ao as de}from"./index-5_l7CkRI.js";import{c as fe,b as ze,E as Re,a as Pe,P as De,Q as me,R as ve,e as pe}from"./_plugin-vue_export-helper-CGjAqcjE.js";import{E as He}from"./el-input-D-7gbnS0.js";import{o as ge,d as Fe,b as Ue,i as Ke,h as Xe}from"./el-overlay-tQev1vvH.js";import{E as Ne}from"./aria-BUADUvnR.js";const un=(...e)=>o=>{e.forEach(s=>{Q(s)?s(o):s.value=o})},Ye=e=>["",...Be].includes(e),je=(e,o,s,i)=>{let a={offsetX:0,offsetY:0};const t=n=>{const R=n.clientX,P=n.clientY,{offsetX:u,offsetY:D}=a,S=e.value.getBoundingClientRect(),v=S.left,H=S.top,b=S.width,I=S.height,X=document.documentElement.clientWidth,Z=document.documentElement.clientHeight,J=-v+u,_=-H+D,E=X-v-b+u,N=Z-H-I+D,Y=w=>{let B=u+w.clientX-R,L=D+w.clientY-P;i!=null&&i.value||(B=Math.min(Math.max(B,J),E),L=Math.min(Math.max(L,_),N)),a={offsetX:B,offsetY:L},e.value&&(e.value.style.transform=`translate(${fe(B)}, ${fe(L)})`)},j=()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",j)};document.addEventListener("mousemove",Y),document.addEventListener("mouseup",j)},c=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",t)},d=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",t)},m=()=>{a={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return ye(()=>{Me(()=>{s.value?c():d()})}),Ce(()=>{d()}),{resetPosition:m}},se="_trap-focus-children",T=[],he=e=>{if(T.length===0)return;const o=T[T.length-1][se];if(o.length>0&&e.code===Ne.tab){if(o.length===1){e.preventDefault(),document.activeElement!==o[0]&&o[0].focus();return}const s=e.shiftKey,i=e.target===o[0],a=e.target===o[o.length-1];i&&s&&(e.preventDefault(),o[o.length-1].focus()),a&&!s&&(e.preventDefault(),o[0].focus())}},qe={beforeMount(e){e[se]=ge(e),T.push(e),T.length<=1&&document.addEventListener("keydown",he)},updated(e){U(()=>{e[se]=ge(e)})},unmounted(){T.shift(),T.length===0&&document.removeEventListener("keydown",he)}},We=ke({name:"ElMessageBox",directives:{TrapFocus:qe},components:{ElButton:Re,ElFocusTrap:Fe,ElInput:He,ElOverlay:Ue,ElIcon:Pe,...De},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Ye},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:o}){const{locale:s,zIndex:i,ns:a,size:t}=Te("message-box",M(()=>e.buttonSize)),{t:c}=s,{nextZIndex:d}=i,m=$(!1),n=Se({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonLoadingIcon:ie(me),cancelButtonLoadingIcon:ie(me),confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:d()}),R=M(()=>{const l=n.type;return{[a.bm("icon",l)]:l&&ve[l]}}),P=pe(),u=pe(),D=M(()=>n.icon||ve[n.type]||""),S=M(()=>!!n.message),v=$(),H=$(),b=$(),I=$(),X=$(),Z=M(()=>n.confirmButtonClass);re(()=>n.inputValue,async l=>{await U(),e.boxType==="prompt"&&l!==null&&B()},{immediate:!0}),re(()=>m.value,l=>{var h,A;l&&(e.boxType!=="prompt"&&(n.autofocus?b.value=(A=(h=X.value)==null?void 0:h.$el)!=null?A:v.value:b.value=v.value),n.zIndex=d()),e.boxType==="prompt"&&(l?U().then(()=>{var le;I.value&&I.value.$el&&(n.autofocus?b.value=(le=L())!=null?le:v.value:b.value=v.value)}):(n.editorErrorMessage="",n.validateError=!1))});const J=M(()=>e.draggable),_=M(()=>e.overflow);je(v,H,J,_),ye(async()=>{await U(),e.closeOnHashChange&&window.addEventListener("hashchange",E)}),Ce(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",E)});function E(){m.value&&(m.value=!1,U(()=>{n.action&&o("action",n.action)}))}const N=()=>{e.closeOnClickModal&&w(n.distinguishCancelAndClose?"close":"cancel")},Y=Xe(N),j=l=>{if(n.inputType!=="textarea")return l.preventDefault(),w("confirm")},w=l=>{var h;e.boxType==="prompt"&&l==="confirm"&&!B()||(n.action=l,n.beforeClose?(h=n.beforeClose)==null||h.call(n,l,n,E):E())},B=()=>{if(e.boxType==="prompt"){const l=n.inputPattern;if(l&&!l.test(n.inputValue||""))return n.editorErrorMessage=n.inputErrorMessage||c("el.messagebox.error"),n.validateError=!0,!1;const h=n.inputValidator;if(Q(h)){const A=h(n.inputValue);if(A===!1)return n.editorErrorMessage=n.inputErrorMessage||c("el.messagebox.error"),n.validateError=!0,!1;if(te(A))return n.editorErrorMessage=A,n.validateError=!0,!1}}return n.editorErrorMessage="",n.validateError=!1,!0},L=()=>{const l=I.value.$refs;return l.input||l.textarea},ae=()=>{w("close")},we=()=>{e.closeOnPressEscape&&ae()};return e.lockScroll&&Ke(m),{...Ie(n),ns:a,overlayEvent:Y,visible:m,hasMessage:S,typeClass:R,contentId:P,inputId:u,btnSize:t,iconComponent:D,confirmButtonClasses:Z,rootRef:v,focusStartRef:b,headerRef:H,inputRef:I,confirmRef:X,doClose:E,handleClose:ae,onCloseRequested:we,handleWrapperClick:N,handleInputEnter:j,handleAction:w,t:c}}});function Ge(e,o,s,i,a,t){const c=V("el-icon"),d=V("close"),m=V("el-input"),n=V("el-button"),R=V("el-focus-trap"),P=V("el-overlay");return f(),y(Ae,{name:"fade-in-linear",onAfterLeave:u=>e.$emit("vanish"),persisted:""},{default:p(()=>[x(k(P,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:p(()=>[g("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:r(`${e.ns.namespace.value}-overlay-message-box`),onClick:e.overlayEvent.onClick,onMousedown:e.overlayEvent.onMousedown,onMouseup:e.overlayEvent.onMouseup},[k(R,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:p(()=>[g("div",{ref:"rootRef",class:r([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:ue(e.customStyle),tabindex:"-1",onClick:q(()=>{},["stop"])},[e.title!==null&&e.title!==void 0?(f(),ee("div",{key:0,ref:"headerRef",class:r([e.ns.e("header"),{"show-close":e.showClose}])},[g("div",{class:r(e.ns.e("title"))},[e.iconComponent&&e.center?(f(),y(c,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:p(()=>[(f(),y(W(e.iconComponent)))]),_:1},8,["class"])):O("v-if",!0),g("span",null,F(e.title),1)],2),e.showClose?(f(),ee("button",{key:0,type:"button",class:r(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),onKeydown:G(q(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"])},[k(c,{class:r(e.ns.e("close"))},{default:p(()=>[k(d)]),_:1},8,["class"])],42,["aria-label","onClick","onKeydown"])):O("v-if",!0)],2)):O("v-if",!0),g("div",{id:e.contentId,class:r(e.ns.e("content"))},[g("div",{class:r(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(f(),y(c,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:p(()=>[(f(),y(W(e.iconComponent)))]),_:1},8,["class"])):O("v-if",!0),e.hasMessage?(f(),ee("div",{key:1,class:r(e.ns.e("message"))},[Le(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(f(),y(W(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(f(),y(W(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:p(()=>[ne(F(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):O("v-if",!0)],2),x(g("div",{class:r(e.ns.e("input"))},[k(m,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":u=>e.inputValue=u,type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:r({invalid:e.validateError}),onKeydown:G(e.handleInputEnter,["enter"])},null,8,["id","modelValue","onUpdate:modelValue","type","placeholder","aria-invalid","class","onKeydown"]),g("div",{class:r(e.ns.e("errormsg")),style:ue({visibility:e.editorErrorMessage?"visible":"hidden"})},F(e.editorErrorMessage),7)],2),[[oe,e.showInput]])],10,["id"]),g("div",{class:r(e.ns.e("btns"))},[e.showCancelButton?(f(),y(n,{key:0,loading:e.cancelButtonLoading,"loading-icon":e.cancelButtonLoadingIcon,class:r([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:u=>e.handleAction("cancel"),onKeydown:G(q(u=>e.handleAction("cancel"),["prevent"]),["enter"])},{default:p(()=>[ne(F(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","loading-icon","class","round","size","onClick","onKeydown"])):O("v-if",!0),x(k(n,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,"loading-icon":e.confirmButtonLoadingIcon,class:r([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:u=>e.handleAction("confirm"),onKeydown:G(q(u=>e.handleAction("confirm"),["prevent"]),["enter"])},{default:p(()=>[ne(F(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","loading-icon","class","round","disabled","size","onClick","onKeydown"]),[[oe,e.showConfirmButton]])],2)],14,["onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,["aria-label","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["z-index","overlay-class","mask"]),[[oe,e.visible]])]),_:3},8,["onAfterLeave"])}var Qe=ze(We,[["render",Ge],["__file","index.vue"]]);const K=new Map,Ze=e=>{let o=document.body;return e.appendTo&&(te(e.appendTo)&&(o=document.querySelector(e.appendTo)),de(e.appendTo)&&(o=e.appendTo),de(o)||(o=document.body)),o},Je=(e,o,s=null)=>{const i=k(Qe,e,Q(e.message)||be(e.message)?{default:Q(e.message)?e.message:()=>e.message}:null);return i.appContext=s,Ee(i,o),Ze(e).appendChild(o.firstElementChild),i.component},_e=()=>document.createElement("div"),xe=(e,o)=>{const s=_e();e.onVanish=()=>{Ee(null,s),K.delete(a)},e.onAction=t=>{const c=K.get(a);let d;e.showInput?d={value:a.inputValue,action:t}:d=t,e.callback?e.callback(d,i.proxy):t==="cancel"||t==="close"?e.distinguishCancelAndClose&&t!=="cancel"?c.reject("close"):c.reject("cancel"):c.resolve(d)};const i=Je(e,s,o),a=i.proxy;for(const t in e)ce(e,t)&&!ce(a.$props,t)&&(a[t]=e[t]);return a.visible=!0,a};function z(e,o=null){if(!$e)return Promise.reject();let s;return te(e)||be(e)?e={message:e}:s=e.callback,new Promise((i,a)=>{const t=xe(e,o??z._context);K.set(t,{options:e,callback:s,resolve:i,reject:a})})}const en=["alert","confirm","prompt"],nn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};en.forEach(e=>{z[e]=on(e)});function on(e){return(o,s,i,a)=>{let t="";return Ve(s)?(i=s,t=""):Oe(s)?t="":t=s,z(Object.assign({title:t,message:o,type:"",...nn[e]},i,{boxType:e}),a)}}z.close=()=>{K.forEach((e,o)=>{o.doClose()}),K.clear()};z._context=null;const C=z;C.install=e=>{C._context=e._context,e.config.globalProperties.$msgbox=C,e.config.globalProperties.$messageBox=C,e.config.globalProperties.$alert=C.alert,e.config.globalProperties.$confirm=C.confirm,e.config.globalProperties.$prompt=C.prompt};const cn=C;export{cn as E,un as c,je as u};