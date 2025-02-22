import{R as le,S as ue,X as pe,Z as de,ba as me,eb as fe}from"./chunk-7PPSX2H5.js";import{$b as J,Aa as T,Ca as C,Hb as m,Hc as ce,Ja as y,Jc as ae,Mb as L,Nb as f,Pa as S,Pb as g,Qa as O,Qb as b,Rb as z,Tb as Y,Uc as _,Xc as R,Yb as D,Zc as I,_a as H,_b as G,ac as K,bc as E,cc as j,dc as X,gc as ee,ha as h,la as w,mc as l,n as V,na as N,nc as A,oc as P,pb as u,q as x,qa as v,qb as p,qc as te,r as U,rb as Q,s as k,sc as ne,ta as s,tc as ie,ud as se,w as W,x as M,xb as d,yc as oe,zb as F,zc as re}from"./chunk-YGKTXWQN.js";function ve(e){e||(T(ve),e=s(y));let r=new V(t=>e.onDestroy(t.next.bind(t)));return t=>t.pipe(h(r))}function $(e,r){let t=!r?.manualCleanup;t&&!r?.injector&&T($);let n=t?r?.injector?.get(y)??s(y):null,i=Ce(r?.equal),o;r?.requireSync?o=m({kind:0},{equal:i}):o=m({kind:1,value:r?.initialValue},{equal:i});let c=e.subscribe({next:a=>o.set({kind:1,value:a}),error:a=>{if(r?.rejectErrors)throw a;o.set({kind:2,error:a})}});if(r?.requireSync&&o().kind===0)throw new w(601,!1);return n?.onDestroy(c.unsubscribe.bind(c)),I(()=>{let a=o();switch(a.kind){case 1:return a.value;case 2:throw a.error;case 0:throw new w(601,!1)}},{equal:r?.equal})}function Ce(e=Object.is){return(r,t)=>r.kind===1&&t.kind===1&&e(r.value,t.value)}var ze=["*"],De=e=>({$implicit:e});function _e(e,r){if(e&1&&oe(0),e&2){let t=l(3);re(t.nzSplit)}}function Ie(e,r){if(e&1&&(E(0,"span",3),f(1,_e,1,1,"ng-template",4),j()),e&2){let t=l(),n=t.$index,i=t.$count,o=l();b("margin-bottom",o.nzDirection==="vertical"?n===i-1?null:o.spaceSize:null,"px")("margin-right",o.nzDirection==="horizontal"?n===i-1?null:o.spaceSize:null,"px"),u(),g("nzStringTemplateOutlet",o.nzSplit)("nzStringTemplateOutletContext",ae(6,De,n))}}function xe(e,r){if(e&1&&(E(0,"div",0),ee(1,1),j(),f(2,Ie,2,8,"span",2)),e&2){let t=r.$implicit,n=r.$index,i=r.$count,o=l();b("margin-bottom",o.nzDirection==="vertical"?n===i-1?null:o.spaceSize:null,"px")("margin-right",o.nzDirection==="horizontal"?n===i-1?null:o.spaceSize:null,"px"),u(),g("ngTemplateOutlet",t),u(),D(o.nzSplit&&n!==i-1?2:-1)}}var ke=new v("NZ_SPACE_COMPACT_SIZE"),he=new v("NZ_SPACE_COMPACT_ITEMS"),Me=new v("NZ_SPACE_COMPACT_ITEM_TYPE"),we=(()=>{class e{nzBlock=S(!1,{transform:R});nzDirection=S("horizontal");nzSize=S("default");elementRef=s(O);static \u0275fac=function(n){return new(n||e)};static \u0275cmp=d({type:e,selectors:[["nz-space-compact"]],hostAttrs:[1,"ant-space-compact"],hostVars:4,hostBindings:function(n,i){n&2&&z("ant-space-compact-block",i.nzBlock())("ant-space-compact-vertical",i.nzDirection()==="vertical")},inputs:{nzBlock:[1,"nzBlock"],nzDirection:[1,"nzDirection"],nzSize:[1,"nzSize"]},exportAs:["nzSpaceCompact"],features:[ce([{provide:ke,useFactory:()=>s(e).nzSize},{provide:he,useFactory:()=>m([])}])],ngContentSelectors:ze,decls:1,vars:0,template:function(n,i){n&1&&(A(),P(0))},encapsulation:2,changeDetection:0})}return e})(),gt=(()=>{class e{spaceCompactCmp=s(we,{host:!0,optional:!0});items=s(he,{host:!0,optional:!0});type=s(Me);elementRef=s(O);directionality=s(me);dir=$(this.directionality.change,{initialValue:this.directionality.value});get parentElement(){return this.elementRef.nativeElement?.parentElement}class=I(()=>{if(!this.spaceCompactCmp||!this.items||this.parentElement!==this.spaceCompactCmp.elementRef.nativeElement)return null;let t=this.items(),n=this.spaceCompactCmp.nzDirection(),i=[Ne(this.type,n,this.dir()==="rtl")],o=t.indexOf(this),c=t.findIndex(a=>a);return o===c?i.push(Te(this.type,n)):o===t.length-1&&i.push(Oe(this.type,n)),i});constructor(){!this.spaceCompactCmp||!this.items||H(()=>{if(this.parentElement===this.spaceCompactCmp.elementRef.nativeElement){let t=Array.from(this.parentElement.children).indexOf(this.elementRef.nativeElement);this.items.update(n=>{let i=n.slice();return i.splice(t,0,this),i})}})}ngOnDestroy(){this.items?.update(t=>t.filter(n=>n!==this))}static \u0275fac=function(n){return new(n||e)};static \u0275dir=F({type:e,hostVars:2,hostBindings:function(n,i){n&2&&Y(i.class())},exportAs:["nzSpaceCompactItem"]})}return e})();function q(e,r,t){return`ant-${e}-compact-${r==="vertical"?"vertical-":""}${t}`}function Ne(e,r,t){let n=t?"-rtl":"";return`${q(e,r,"item")}${n}`}function Te(e,r){return q(e,r,"first-item")}function Oe(e,r){return q(e,r,"last-item")}var Fe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275dir=F({type:e,selectors:[["","nzSpaceItem",""]]})}return e})(),Ee="space",ge={small:8,middle:16,large:24},zt=(()=>{let e,r=[],t=[];return class B{static{let i=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;e=[ue()],W(null,null,e,{kind:"field",name:"nzSize",static:!1,private:!1,access:{has:o=>"nzSize"in o,get:o=>o.nzSize,set:(o,c)=>{o.nzSize=c}},metadata:i},r,t),i&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i})}nzConfigService;cdr;_nzModuleName=Ee;nzDirection="horizontal";nzAlign;nzSplit=null;nzWrap=!1;nzSize=M(this,r,"small");items=M(this,t);mergedAlign;spaceSize=ge.small;destroy$=new x;constructor(i,o){this.nzConfigService=i,this.cdr=o}updateSpaceItems(){let i=typeof this.nzSize=="string"?ge[this.nzSize]:this.nzSize;this.spaceSize=i/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=this.nzAlign===void 0&&this.nzDirection==="horizontal"?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe(h(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}static \u0275fac=function(o){return new(o||B)(p(le),p(_))};static \u0275cmp=d({type:B,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(o,c,a){if(o&1&&te(a,Fe,4,Q),o&2){let Z;ne(Z=ie())&&(c.items=Z)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(o,c){o&2&&(b("flex-wrap",c.nzWrap?"wrap":null),z("ant-space-horizontal",c.nzDirection==="horizontal")("ant-space-vertical",c.nzDirection==="vertical")("ant-space-align-start",c.mergedAlign==="start")("ant-space-align-end",c.mergedAlign==="end")("ant-space-align-center",c.mergedAlign==="center")("ant-space-align-baseline",c.mergedAlign==="baseline"))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:[2,"nzWrap","nzWrap",R],nzSize:"nzSize"},exportAs:["nzSpace"],features:[L,C],ngContentSelectors:ze,decls:3,vars:0,consts:[[1,"ant-space-item"],[3,"ngTemplateOutlet"],[1,"ant-space-split",3,"margin-bottom","margin-right"],[1,"ant-space-split"],[3,"nzStringTemplateOutlet","nzStringTemplateOutletContext"]],template:function(o,c){o&1&&(A(),P(0),J(1,xe,3,6,null,null,G)),o&2&&(u(),K(c.items))},dependencies:[se,fe],encapsulation:2,changeDetection:0})}})();function je(e,r){if(e&1&&X(0,"nz-icon",0),e&2){let t=l();g("nzType",t.iconType)}}var St=(()=>{class e{formStatusChanges=new k(1);static \u0275fac=function(n){return new(n||e)};static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})(),bt=(()=>{class e{noFormStatus=new U(!1);static \u0275fac=function(n){return new(n||e)};static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})(),Ae={error:"close-circle-fill",validating:"loading",success:"check-circle-fill",warning:"exclamation-circle-fill"},Dt=(()=>{class e{cdr;status="";constructor(t){this.cdr=t}iconType=null;ngOnChanges(t){this.updateIcon()}updateIcon(){this.iconType=this.status?Ae[this.status]:null,this.cdr.markForCheck()}static \u0275fac=function(n){return new(n||e)(p(_))};static \u0275cmp=d({type:e,selectors:[["nz-form-item-feedback-icon"]],hostAttrs:[1,"ant-form-item-feedback-icon"],hostVars:8,hostBindings:function(n,i){n&2&&z("ant-form-item-feedback-icon-error",i.status==="error")("ant-form-item-feedback-icon-warning",i.status==="warning")("ant-form-item-feedback-icon-success",i.status==="success")("ant-form-item-feedback-icon-validating",i.status==="validating")},inputs:{status:"status"},exportAs:["nzFormFeedbackIcon"],features:[C],decls:1,vars:1,consts:[[3,"nzType"]],template:function(n,i){n&1&&f(0,je,1,1,"nz-icon",0),n&2&&D(i.iconType?0:-1)},dependencies:[de,pe],encapsulation:2,changeDetection:0})}return e})();export{ve as a,$ as b,ke as c,Me as d,gt as e,St as f,bt as g,Dt as h};
