import{m as W,_ as $,t as C,M as V,v as q,r as i,x as L,O as J,R as x,Q as j,o as R,c as A,w as F,a8 as Z,d as M,F as k,e as y,A as O,a9 as ee,T as te,aA as ae,z as G,b as K,a2 as le,s as se,p as N,y as X,L as oe,a as re,c6 as ne,N as ie,X as U,bn as ce,D as ue,B as ve,g as fe,H as Y,af as me,ah as de,I as pe}from"./index-T3F7Jh6l.js";import{t as he,f as be}from"./_plugin-vue_export-helper-BsPb1rl_.js";const H=4,ye={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},ge=({move:g,size:c,bar:r})=>({[r.size]:c,transform:`translate${r.axis}(${g}%)`}),D=Symbol("scrollbarContextKey"),Se=W({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),we="Thumb",ze=C({__name:"thumb",props:Se,setup(g){const c=g,r=V(D),l=q("scrollbar");r||he(we,"can not inject scrollbar context");const n=i(),u=i(),m=i({}),d=i(!1);let f=!1,p=!1,a=ae?document.onselectstart:null;const t=L(()=>ye[c.vertical?"vertical":"horizontal"]),s=L(()=>ge({size:c.size,move:c.move,bar:t.value})),v=L(()=>n.value[t.value.offset]**2/r.wrapElement[t.value.scrollSize]/c.ratio/u.value[t.value.offset]),h=o=>{var _;if(o.stopPropagation(),o.ctrlKey||[1,2].includes(o.button))return;(_=window.getSelection())==null||_.removeAllRanges(),w(o);const T=o.currentTarget;T&&(m.value[t.value.axis]=T[t.value.offset]-(o[t.value.client]-T.getBoundingClientRect()[t.value.direction]))},E=o=>{if(!u.value||!n.value||!r.wrapElement)return;const _=Math.abs(o.target.getBoundingClientRect()[t.value.direction]-o[t.value.client]),T=u.value[t.value.offset]/2,B=(_-T)*100*v.value/n.value[t.value.offset];r.wrapElement[t.value.scroll]=B*r.wrapElement[t.value.scrollSize]/100},w=o=>{o.stopImmediatePropagation(),f=!0,document.addEventListener("mousemove",S),document.addEventListener("mouseup",b),a=document.onselectstart,document.onselectstart=()=>!1},S=o=>{if(!n.value||!u.value||f===!1)return;const _=m.value[t.value.axis];if(!_)return;const T=(n.value.getBoundingClientRect()[t.value.direction]-o[t.value.client])*-1,B=u.value[t.value.offset]-_,Q=(T-B)*100*v.value/n.value[t.value.offset];r.wrapElement[t.value.scroll]=Q*r.wrapElement[t.value.scrollSize]/100},b=()=>{f=!1,m.value[t.value.axis]=0,document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",b),e(),p&&(d.value=!1)},P=()=>{p=!1,d.value=!!c.size},z=()=>{p=!0,d.value=f};J(()=>{e(),document.removeEventListener("mouseup",b)});const e=()=>{document.onselectstart!==a&&(document.onselectstart=a)};return x(j(r,"scrollbarElement"),"mousemove",P),x(j(r,"scrollbarElement"),"mouseleave",z),(o,_)=>(R(),A(te,{name:y(l).b("fade"),persisted:""},{default:F(()=>[Z(M("div",{ref_key:"instance",ref:n,class:k([y(l).e("bar"),y(l).is(y(t).key)]),onMousedown:E},[M("div",{ref_key:"thumb",ref:u,class:k(y(l).e("thumb")),style:O(y(s)),onMousedown:h},null,38)],34),[[ee,o.always||d.value]])]),_:1},8,["name"]))}});var I=$(ze,[["__file","thumb.vue"]]);const _e=W({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),Ee=C({__name:"bar",props:_e,setup(g,{expose:c}){const r=g,l=V(D),n=i(0),u=i(0),m=i(""),d=i(""),f=i(1),p=i(1);return c({handleScroll:s=>{if(s){const v=s.offsetHeight-H,h=s.offsetWidth-H;u.value=s.scrollTop*100/v*f.value,n.value=s.scrollLeft*100/h*p.value}},update:()=>{const s=l==null?void 0:l.wrapElement;if(!s)return;const v=s.offsetHeight-H,h=s.offsetWidth-H,E=v**2/s.scrollHeight,w=h**2/s.scrollWidth,S=Math.max(E,r.minSize),b=Math.max(w,r.minSize);f.value=E/(v-E)/(S/(v-S)),p.value=w/(h-w)/(b/(h-b)),d.value=S+H<v?`${S}px`:"",m.value=b+H<h?`${b}px`:""}}),(s,v)=>(R(),G(le,null,[K(I,{move:n.value,ratio:p.value,size:m.value,always:s.always},null,8,["move","ratio","size","always"]),K(I,{move:u.value,ratio:f.value,size:d.value,vertical:"",always:s.always},null,8,["move","ratio","size","always"])],64))}});var Te=$(Ee,[["__file","bar.vue"]]);const He=W({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:se([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},tabindex:{type:[String,Number],default:void 0},id:String,role:String,...be(["ariaLabel","ariaOrientation"])}),Le={scroll:({scrollTop:g,scrollLeft:c})=>[g,c].every(N)},Ne="ElScrollbar",Re=C({name:Ne}),ke=C({...Re,props:He,emits:Le,setup(g,{expose:c,emit:r}){const l=g,n=q("scrollbar");let u,m,d=0,f=0;const p=i(),a=i(),t=i(),s=i(),v=L(()=>{const e={};return l.height&&(e.height=Y(l.height)),l.maxHeight&&(e.maxHeight=Y(l.maxHeight)),[l.wrapStyle,e]}),h=L(()=>[l.wrapClass,n.e("wrap"),{[n.em("wrap","hidden-default")]:!l.native}]),E=L(()=>[n.e("view"),l.viewClass]),w=()=>{var e;a.value&&((e=s.value)==null||e.handleScroll(a.value),d=a.value.scrollTop,f=a.value.scrollLeft,r("scroll",{scrollTop:a.value.scrollTop,scrollLeft:a.value.scrollLeft}))};function S(e,o){me(e)?a.value.scrollTo(e):N(e)&&N(o)&&a.value.scrollTo(e,o)}const b=e=>{N(e)&&(a.value.scrollTop=e)},P=e=>{N(e)&&(a.value.scrollLeft=e)},z=()=>{var e;(e=s.value)==null||e.update()};return X(()=>l.noresize,e=>{e?(u==null||u(),m==null||m()):({stop:u}=de(t,z),m=x("resize",z))},{immediate:!0}),X(()=>[l.maxHeight,l.height],()=>{l.native||U(()=>{var e;z(),a.value&&((e=s.value)==null||e.handleScroll(a.value))})}),oe(D,re({scrollbarElement:p,wrapElement:a})),ne(()=>{a.value&&(a.value.scrollTop=d,a.value.scrollLeft=f)}),ie(()=>{l.native||U(()=>{z()})}),ce(()=>z()),c({wrapRef:a,update:z,scrollTo:S,setScrollTop:b,setScrollLeft:P,handleScroll:w}),(e,o)=>(R(),G("div",{ref_key:"scrollbarRef",ref:p,class:k(y(n).b())},[M("div",{ref_key:"wrapRef",ref:a,class:k(y(h)),style:O(y(v)),tabindex:e.tabindex,onScroll:w},[(R(),A(ve(e.tag),{id:e.id,ref_key:"resizeRef",ref:t,class:k(y(E)),style:O(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:F(()=>[ue(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],46,["tabindex"]),e.native?fe("v-if",!0):(R(),A(Te,{key:0,ref_key:"barRef",ref:s,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}});var Ce=$(ke,[["__file","scrollbar.vue"]]);const xe=pe(Ce);export{xe as E};