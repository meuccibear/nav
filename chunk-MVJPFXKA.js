import{a as oe}from"./chunk-FCIJWVXR.js";import{a as Q,b as X}from"./chunk-2S7XLEM4.js";import{d as Y,f as Z,h as ee,i as te,j as ie,k as ne,l as re}from"./chunk-R3ECWPUE.js";import"./chunk-EO5ZR4BL.js";import{l as G,m as K}from"./chunk-3KYWHEYH.js";import"./chunk-SSG34WYX.js";import{F as x}from"./chunk-BMXHMW63.js";import{f as R,i as J}from"./chunk-MU6BIBS2.js";import{a as O,b as $,c as B}from"./chunk-O3LBA2ME.js";import"./chunk-VA3AG5CJ.js";import"./chunk-HTHUUHTA.js";import{b as W}from"./chunk-7SVJZNJS.js";import{Hb as q,Wb as v,jb as F,mb as U,pb as A,xb as j,zb as H}from"./chunk-7PPSX2H5.js";import{Ac as w,Da as l,Ea as p,Ec as f,Fc as S,Gc as y,Gd as k,Hc as L,Nb as C,Pb as _,Zd as D,bc as a,cc as m,dc as N,fe as u,hc as z,kc as g,lb as T,mc as d,od as E,pb as o,pd as V,qb as M,xb as I,xd as P,yc as c,zc as h}from"./chunk-YGKTXWQN.js";function me(s,n){if(s&1){let e=z();a(0,"input",21),y("ngModelChange",function(i){l(e);let r=d().$implicit;return S(r.url,i)||(r.url=i),p(i)}),m()}if(s&2){let e=d().$implicit;f("ngModel",e.url)}}function se(s,n){if(s&1&&N(0,"img",22),s&2){let e=d().$implicit;_("src",e.icon,T)}}function ce(s,n){if(s&1){let e=z();a(0,"a",23),g("nzOnConfirm",function(){l(e);let i=d().index,r=d();return p(r.handleDelete(i))}),c(1),m()}if(s&2){let e=d(2);_("nzPopconfirmTitle",e.$t("_confirmDel")),o(),w(" ",e.$t("_del")," ")}}function le(s,n){if(s&1){let e=z();a(0,"tr")(1,"td",6)(2,"input",7),y("ngModelChange",function(i){let r=l(e).$implicit;return S(r.name,i)||(r.name=i),p(i)}),m()(),a(3,"td",8),C(4,me,1,1,"input",9),m(),a(5,"td",10),C(6,se,1,1,"img",11),a(7,"input",12),y("ngModelChange",function(i){let r=l(e).$implicit;return S(r.icon,i)||(r.icon=i),p(i)}),m(),a(8,"app-upload",13),g("onChange",function(i){let r=l(e).index,ae=d();return p(ae.onChangeUpload(i,r))}),m()(),a(9,"td",8)(10,"input",14),y("ngModelChange",function(i){let r=l(e).$implicit;return S(r.placeholder,i)||(r.placeholder=i),p(i)}),m()(),a(11,"td",15)(12,"nz-switch",16),y("ngModelChange",function(i){let r=l(e).$implicit;return S(r.blocked,i)||(r.blocked=i),p(i)}),m()(),a(13,"td",17)(14,"a",18),g("click",function(){let i=l(e).index,r=d();return p(r.moveUp(i))}),c(15),m(),a(16,"a",19),g("click",function(){let i=l(e).index,r=d();return p(r.moveDown(i))}),c(17),m(),C(18,ce,2,2,"a",20),m()()}if(s&2){let e=n.$implicit,t=d();o(2),f("ngModel",e.name),o(2),_("ngIf",!e.isInner),o(2),_("ngIf",e.icon),o(),f("ngModel",e.icon),o(3),f("ngModel",e.placeholder),o(2),f("ngModel",e.blocked),o(3),h(t.$t("_moveUp")),o(2),h(t.$t("_moveDown")),o(),_("ngIf",!e.isInner)}}var b=class s{constructor(n,e){this.message=n;this.modal=e}$t=u;searchList=D;submitting=!1;handleAdd(){this.searchList.some(e=>!e.name.trim())||this.searchList.unshift({name:"",url:"",icon:"",placeholder:"",blocked:!1,isInner:!1})}handleDelete(n){this.searchList.splice(n,1)}moveUp(n){if(n===0)return;let e=this.searchList[n],t=this.searchList[n-1];this.searchList[n-1]=e,this.searchList[n]=t}moveDown(n){if(n===this.searchList.length-1)return;let e=this.searchList[n],t=this.searchList[n+1];this.searchList[n+1]=e,this.searchList[n]=t}handleSubmit(){this.submitting||this.modal.info({nzTitle:u("_syncDataOut"),nzOkText:u("_confirmSync"),nzContent:u("_confirmSyncTip"),nzOnOk:()=>{let n={};if(this.searchList.forEach(e=>{e.name.trim()&&(n[e.name]=null)}),Object.keys(n).length!==this.searchList.length){this.message.error(u("_repeatAdd"));return}this.submitting=!0,q({message:"update search",content:JSON.stringify(this.searchList),path:k}).then(()=>{this.message.success(u("_saveSuccess"))}).finally(()=>{this.submitting=!1})}})}trackByItem(n,e){return e.name}onChangeUpload(n,e){this.searchList[e].icon=n.cdn}static \u0275fac=function(e){return new(e||s)(M(v),M(x))};static \u0275cmp=I({type:s,selectors:[["system-tag"]],features:[L([x,v])],decls:25,vars:14,consts:[["basicTable",""],["nz-button","",1,"add-btn",3,"click","nzLoading"],["nz-button","","nzType","primary",3,"click","nzLoading"],[1,"mb12"],[3,"nzData"],[4,"ngFor","ngForOf","ngForTrackBy"],["width","150px"],["nz-input","","maxlength","10",3,"ngModelChange","ngModel"],["width","220px"],["nz-input","",3,"ngModel","ngModelChange",4,"ngIf"],["width","260px",1,"whitespace-nowrap"],["class","icon",3,"src",4,"ngIf"],["nz-input","","type","text",2,"width","180px",3,"ngModelChange","ngModel"],[3,"onChange"],["nz-input","","maxlength","50",3,"ngModelChange","ngModel"],["width","100px"],[3,"ngModelChange","ngModel"],[1,"select-none"],[3,"click"],[1,"ml-2.5",3,"click"],["nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom","class","ml-2.5 color-red",3,"nzPopconfirmTitle","nzOnConfirm",4,"ngIf"],["nz-input","",3,"ngModelChange","ngModel"],[1,"icon",3,"src"],["nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"ml-2.5","color-red",3,"nzOnConfirm","nzPopconfirmTitle"]],template:function(e,t){if(e&1){let i=z();a(0,"button",1),g("click",function(){return l(i),p(t.handleAdd())}),c(1),m(),a(2,"button",2),g("click",function(){return l(i),p(t.handleSubmit())}),c(3),m(),a(4,"div",3)(5,"b"),c(6),m()(),a(7,"nz-table",4,0)(9,"thead")(10,"tr")(11,"th"),c(12),m(),a(13,"th"),c(14),m(),a(15,"th"),c(16),m(),a(17,"th"),c(18),m(),a(19,"th"),c(20),m(),a(21,"th"),c(22),m()()(),a(23,"tbody"),C(24,le,19,9,"tr",5),m()()}e&2&&(_("nzLoading",t.submitting),o(),w(" ",t.$t("_addRow"),`
`),o(),_("nzLoading",t.submitting),o(),w(" ",t.$t("_save"),`
`),o(3),h(t.$t("_buildTip")),o(),_("nzData",t.searchList),o(5),h(t.$t("_engineName")),o(2),h(t.$t("_engineUrl")),o(2),h(t.$t("_icon")),o(2),h(t.$t("_desc")),o(2),h(t.$t("_isDisable")),o(2),h(t.$t("_action")),o(2),_("ngForOf",t.searchList)("ngForTrackBy",t.trackByItem))},dependencies:[H,F,U,j,A,P,E,V,B,$,O,W,re,te,Y,Z,ne,ee,ie,J,R,oe,X,Q,K,G],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.icon[_ngcontent-%COMP%]{width:30px;height:30px;margin-right:10px;object-fit:cover}  #file{vertical-align:middle;margin-left:10px}  #file .anticon{font-size:20px}"]})};export{b as default};
