"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[2377],{2377:(O,b,s)=>{s.d(b,{a:()=>rt});var c=s(5861),d=s(8645),f=s(5219),t=s(9291),C=s(1732),p=s(6814),r=s(6023),m=s(8209),g=s(1935),x=s(8275);function h(e,i){1&e&&t.GkF(0)}function T(e,i){if(1&e&&t._UZ(0,"app-icon",7),2&e){const n=t.oxw(2).$implicit;t.Tol(n.class),t.Q6J("icon",n.icon)}}function w(e,i){if(1&e&&(t.ynx(0),t.YNc(1,T,1,3,"app-icon",6),t.BQk()),2&e){const n=t.oxw(3);t.xp6(1),t.Q6J("ngIf",!n.data.isFixed)}}const A=function(e){return[e]};function v(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const l=t.CHM(n).$implicit,_=t.oxw(2);return t.KtG(_.execute(l))}),t.YNc(1,w,2,1,"ng-container",5),t.qZA()}if(2&e){const n=i.$implicit,o=t.oxw(2);t.Q6J("ngClass",o.getConditionClass(n,o.data)),t.xp6(1),t.Q6J("hasPermissions",t.VKq(2,A,n.id||"defaultValue"))}}function Z(e,i){if(1&e&&t.YNc(0,v,2,4,"a",3),2&e){const n=t.oxw();t.Q6J("ngForOf",n.actions)}}function F(e,i){if(1&e&&t._UZ(0,"app-icon",7),2&e){const n=t.oxw().$implicit;t.Tol(n.class),t.Q6J("icon",n.icon)}}function M(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"li",14),t.NdJ("click",function(){const l=t.CHM(n).$implicit,_=t.oxw(2);return t.KtG(_.execute(l))}),t.TgZ(1,"a",15),t.YNc(2,F,1,3,"app-icon",6),t.qZA()()}if(2&e){const n=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!n.data.isFixed)}}function y(e,i){if(1&e&&(t.TgZ(0,"div",8)(1,"i",9),t._UZ(2,"app-icon",10),t.qZA(),t.TgZ(3,"ul",11)(4,"div",12),t.YNc(5,M,3,1,"li",13),t.qZA()()()),2&e){const n=t.oxw();t.xp6(5),t.Q6J("ngForOf",n.actions)}}let N=(()=>{class e{constructor(n){this.router=n,this.actions=[],this.onActionEmit=new t.vpe,this.dynamicClass={}}ngOnInit(){}ngOnChanges(n){}execute(n,o){var a=this;return(0,c.Z)(function*(){if("function"==typeof n.fun)try{(yield n.fun(a.data))&&a.onActionEmit.emit()}catch{}if(n.route)return a.router.navigate([a.router.url+"/"+n.route,a.data.id])})()}prepareData(n){var o=this;return(0,c.Z)(function*(){return o.actions.map((a,l)=>{"function"==typeof a.condition&&(a.condition=a.condition(n),console.log(a.condition))})})()}getConditionClass(n,o){if("function"==typeof n.condition&&(n.hideBasedOnCondition=n.condition(o),n.hideBasedOnCondition))return n.classCondition}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-table-action"]],inputs:{actions:"actions",data:"data"},outputs:{onActionEmit:"onActionEmit"},features:[t.TTD],decls:5,vars:1,consts:[[4,"ngTemplateOutlet"],["single",""],["multi",""],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"],[4,"hasPermissions"],["type","solid",3,"icon","class",4,"ngIf"],["type","solid",3,"icon"],[1,"dropdown","position-absolute"],["data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle"],["type","solid","icon","ellipsis-h"],[1,"dropdown-menu"],[1,"d-flex"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"dropdown-item"]],template:function(n,o){if(1&n&&(t.YNc(0,h,1,0,"ng-container",0),t.YNc(1,Z,1,1,"ng-template",null,1,t.W1O),t.YNc(3,y,6,1,"ng-template",null,2,t.W1O)),2&n){const a=t.MAs(2),l=t.MAs(4);t.Q6J("ngTemplateOutlet",o.actions.length>6?l:a)}},dependencies:[p.mk,p.sg,p.O5,p.tP,g.o,x.z]}),e})();var P=s(3999);function J(e,i){1&e&&t.GkF(0)}function Y(e,i){1&e&&t.GkF(0)}function Q(e,i){if(1&e&&(t._uU(0),t.ALo(1,"translate")),2&e){const n=t.oxw().$implicit;t.Oqu(t.lcZ(1,1,n.label))}}function k(e,i){if(1&e&&(t.TgZ(0,"th",12),t.YNc(1,Y,1,0,"ng-container",0),t.YNc(2,Q,2,3,"ng-template",null,13,t.W1O),t.qZA()),2&e){const n=i.$implicit,o=t.MAs(3);t.Q6J("ngClass",n.class),t.xp6(1),t.Q6J("ngTemplateOutlet",o)}}function E(e,i){1&e&&t.GkF(0)}const S=function(e,i){return{row:e,i}};function D(e,i){if(1&e&&(t.TgZ(0,"tr",14),t.YNc(1,E,1,0,"ng-container",15),t.qZA()),2&e){const n=i.$implicit,o=i.index,a=t.oxw(3),l=t.MAs(8);t.Q6J("title",n[a.tableConfig.titleRow]),t.xp6(1),t.Q6J("ngTemplateOutlet",l)("ngTemplateOutletContext",t.WLB(3,S,n,o))}}function I(e,i){if(1&e&&(t.TgZ(0,"table",9)(1,"thead")(2,"tr"),t.YNc(3,k,4,2,"th",10),t.qZA()(),t.TgZ(4,"tbody"),t.YNc(5,D,2,6,"tr",11),t.qZA()()),2&e){const n=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",n.tableConfig.cols),t.xp6(2),t.Q6J("ngForOf",n.data)}}function U(e,i){if(1&e&&t.YNc(0,I,6,2,"table",8),2&e){const n=t.oxw();t.Q6J("ngIf",!n._loading)}}function G(e,i){1&e&&t.GkF(0)}function W(e,i){if(1&e&&(t._uU(0),t.ALo(1,"translate"),t._UZ(2,"p-sortIcon",23)),2&e){const n=t.oxw().$implicit;t.hij("",t.lcZ(1,2,n.label)," "),t.xp6(2),t.Q6J("field",n.field)}}function $(e,i){if(1&e&&(t.TgZ(0,"th",22),t.YNc(1,G,1,0,"ng-container",0),t.YNc(2,W,3,4,"ng-template",null,13,t.W1O),t.qZA()),2&e){const n=i.$implicit,o=t.MAs(3);t.Q6J("pSortableColumn",n.field)("ngClass",n.class),t.xp6(1),t.Q6J("ngTemplateOutlet",o)}}function R(e,i){if(1&e&&(t.TgZ(0,"tr")(1,"th",20),t._UZ(2,"p-tableHeaderCheckbox"),t.qZA(),t.YNc(3,$,4,3,"th",21),t.qZA()),2&e){const n=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",n.tableConfig.cols)}}function q(e,i){1&e&&t.GkF(0)}const K=function(e,i){return{row:e,index:i}};function L(e,i){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"p-tableCheckbox",24),t.qZA(),t.YNc(3,q,1,0,"ng-container",15),t.qZA()),2&e){const n=i.$implicit,o=i.$implicit;t.oxw(2);const a=t.MAs(8);t.xp6(2),t.Q6J("value",n),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.WLB(3,K,n,o))}}const H=function(){return["name"]};function z(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"p-table",16,17),t.NdJ("selectionChange",function(a){t.CHM(n);const l=t.oxw();return t.KtG(l.selectedItem=a)})("sortFunction",function(a){t.CHM(n);const l=t.oxw();return t.KtG(l.customSort(a))}),t.YNc(2,R,4,1,"ng-template",18),t.YNc(3,L,4,6,"ng-template",19),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("value",n.data)("rows",n._paginationData.limit)("paginator",!1)("globalFilterFields",t.DdM(8,H))("selection",n.selectedItem)("rowHover",!0)("showCurrentPageReport",!0)("customSort",!0)}}function B(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"div",25)(2,"h1",26),t._uU(3," Something Wrong"),t._UZ(4,"br"),t._uU(5," reload "),t.qZA(),t.TgZ(6,"span",27),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.reload())}),t._UZ(7,"i",28),t._uU(8," Reload The Table"),t.qZA()()()}}function j(e,i){1&e&&(t.TgZ(0,"div")(1,"div",29)(2,"h1",26),t._uU(3),t.ALo(4,"titlecase"),t.ALo(5,"translate"),t.qZA()()()),2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,1,t.lcZ(5,3,"data_not_found"))," . . . "))}function X(e,i){1&e&&t.GkF(0)}const V=function(e){return{"background-color":e}},tt=function(e,i,n){return{col:e,i,row:n}};function nt(e,i){if(1&e&&(t.TgZ(0,"td",31)(1,"div"),t.YNc(2,X,1,0,"ng-container",15),t.qZA()()),2&e){const n=i.$implicit,o=i.index,a=t.oxw().row;t.oxw();const l=t.MAs(10),_=t.MAs(12);t.Tol("field "+a[n.custom_class_cel]),t.Q6J("ngStyle",t.VKq(15,V,a[n.bgColor]?a[n.bgColor]:"")),t.xp6(1),t.Udp("background-color","color"===n.field?a.color:null)("color","color"===n.field?"transparent":null)("width","color"===n.field?"20px":null)("height","color"===n.field?"20px":null)("border-radius","color"===n.field?"50%":null),t.xp6(1),t.Q6J("ngTemplateOutlet",a[n.field]?l:_)("ngTemplateOutletContext",t.kEZ(17,tt,n,o,a))}}function et(e,i){if(1&e&&t.YNc(0,nt,3,21,"td",30),2&e){const n=t.oxw();t.Q6J("ngForOf",n.tableConfig.cols)}}function ot(e,i){1&e&&t.GkF(0)}const it=function(e,i,n){return{col:e,index:i,row:n}};function at(e,i){if(1&e&&(t.YNc(0,ot,1,0,"ng-container",15),t._uU(1)),2&e){const n=i.col,o=i.row,a=i.index;t.oxw();const l=t.MAs(14);t.Q6J("ngTemplateOutlet",n.haveLogo?l:null)("ngTemplateOutletContext",t.kEZ(3,it,n,a,o)),t.xp6(1),t.hij(" ",o[n.field],"\n")}}function lt(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"app-table-action",32),t.NdJ("onActionEmit",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.reload())}),t.qZA()}if(2&e){const o=i.row;t.Q6J("actions",i.col.actions)("data",o)}}function ct(e,i){1&e&&t._UZ(0,"img",33),2&e&&t.Q6J("src",i.row.thumbnail,t.LSH)}let rt=(()=>{class e{constructor(n){this.http=n,this.data=[],this.mode="basic",this.unsubscribe=new d.x,this._loading=!0,this._errored=!1,this._paginationData={page:1,limit:10},this._filterData=[],this._sortData=[],this.params={}}ngOnInit(){this.tableConfig.titleRow||(this.tableConfig.titleRow="id")}ngOnChanges(n){!n.data&&"string"==typeof this.tableConfig.Request&&this.execute(),(n.config||n.data)&&this.prepareData(),n.data&&(this.loading(!1),this.prepareData()),n.pagination&&this.handlePaginationChanges(),n.filter&&this.handleFilterChanges(),n.sort&&this.handleSortChanges()}handlePaginationChanges(){this._paginationSubscription&&this._paginationSubscription.unsubscribe(),this._paginationSubscription=this.pagination?.onPaginationChange.subscribe(n=>{this._paginationData=n,this.params={...this.params,...n},this.execute()})}execute(){var n=this;return(0,c.Z)(function*(){n.loading(!0),n._subscription&&n._subscription.unsubscribe(),n._subscription=yield n.http.getWithParam(n.tableConfig.Request,n.params).subscribe({next:o=>{n.data=o.data,n.meta=o.meta,n.pagination?.setTotal(o.meta.total??0),n._errored=!1},error:o=>{n._errored=!0,n.data=[],n.loading(!1)},complete:()=>{n.prepareData(),setTimeout(()=>{n.loading(!1)})}})})()}reload(){var n=this;return(0,c.Z)(function*(){n.tableConfig.Request&&(yield n.execute())})()}loading(n=!0){this._loading=n}prepareData(){var n=this;return(0,c.Z)(function*(){return n.tableConfig.cols.map((o,a)=>{o.format&&o.field&&n.data.forEach(l=>{l[o.field]=o.format(l)}),o.custom_class_cel&&o.field&&n.data.forEach(l=>{l[o.custom_class_cel]=o.custom_class_cel(l)}),o.bgColor&&o.field&&n.data.forEach(l=>{l[o.bgColor]=o.bgColor(l)})})})()}handleFilterChanges(){this._filtersSubscription&&this._filtersSubscription.unsubscribe(),this._filtersSubscription=this.filter?.onFilterApplied.subscribe(n=>{if(n.length>0){this.params=this._paginationData;for(const o of n)""!=o.value&&o.field&&(this.params[o.field]=o.value)}else this.params=this._paginationData;this._filterData=n,this.pagination?.changePage(1)})}handleSortChanges(){this._sortSubscription&&this._sortSubscription.unsubscribe(),this._sortSubscription=this.sort?.onSortApplied.subscribe(n=>{if(n.length>0)for(const o of n)""!=o.value&&o.field&&(this.params[o.field]=o.value);this._sortData=n,this.execute()})}customSort(n){n.data.sort((o,a)=>{let l=o[n.field],_=a[n.field],u=null;return u=null==l&&null!=_?-1:null!=l&&null==_?1:null==l&&null==_?0:"string"==typeof l&&"string"==typeof _?l.localeCompare(_):l<_?-1:l>_?1:0,n.order*u})}ngOnDestroy(){this.data=[],this.unsubscribe.next(!0),this.unsubscribe.complete()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.O))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-table"]],inputs:{pagination:"pagination",filter:"filter",sort:"sort",tableConfig:"tableConfig",data:"data",mode:"mode"},features:[t._Bn([f.ez,f.YP]),t.TTD],decls:15,vars:3,consts:[[4,"ngTemplateOutlet"],["basic",""],["advanced",""],[4,"ngIf"],["field",""],["value",""],["action",""],["haveLogo",""],["class","table responsiveTable",4,"ngIf"],[1,"table","responsiveTable"],["scope","col",3,"ngClass",4,"ngFor","ngForOf"],[3,"title",4,"ngFor","ngForOf"],["scope","col",3,"ngClass"],["header",""],[3,"title"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rows","paginator","globalFilterFields","tableStyle","selection","rowHover","showCurrentPageReport","customSort","selectionChange","sortFunction"],["dt",""],["pTemplate","header"],["pTemplate","body"],[2,"width","4rem"],["scope","col",3,"pSortableColumn","ngClass",4,"ngFor","ngForOf"],["scope","col",3,"pSortableColumn","ngClass"],[3,"field"],[3,"value"],[1,"error-container"],[1,"error-title"],[1,"error-reload-button",3,"click"],[1,"pi","pi-refresh"],[1,"no-data"],[3,"ngStyle","class",4,"ngFor","ngForOf"],[3,"ngStyle"],[3,"actions","data","onActionEmit"],["alt","img",3,"src"]],template:function(n,o){if(1&n&&(t.YNc(0,J,1,0,"ng-container",0),t.YNc(1,U,1,1,"ng-template",null,1,t.W1O),t.YNc(3,z,4,9,"ng-template",null,2,t.W1O),t.YNc(5,B,9,0,"div",3),t.YNc(6,j,6,5,"div",3),t.YNc(7,et,1,1,"ng-template",null,4,t.W1O),t.YNc(9,at,2,7,"ng-template",null,5,t.W1O),t.YNc(11,lt,1,2,"ng-template",null,6,t.W1O),t.YNc(13,ct,1,1,"ng-template",null,7,t.W1O)),2&n){const a=t.MAs(2),l=t.MAs(4);t.Q6J("ngTemplateOutlet","basic"===o.mode?a:l),t.xp6(5),t.Q6J("ngIf",o._errored),t.xp6(1),t.Q6J("ngIf",!o._errored&&0===o.data.length)}},dependencies:[p.mk,p.sg,p.O5,p.tP,p.PC,r.iA,f.jx,r.lQ,r.fz,r.UA,r.Mo,N,p.rS,P.X$],styles:["table[_ngcontent-%COMP%]{height:100%;padding:2rem 2.8rem!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .row-active[_ngcontent-%COMP%]{background:#C6DFE2!important}table[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:var(--text-font-size);font-weight:500;line-height:var(--page-title-line-height);letter-spacing:var(--page-title-letter-spacing);text-align:start;color:var(--color13)}table[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:20px;letter-spacing:0em;text-align:start;color:var(--color14)}table[_ngcontent-%COMP%]   .text-active[_ngcontent-%COMP%]{width:-moz-fit-content!important;width:fit-content!important;background:#C6DFE2;border-radius:17px;color:#00798c;font-weight:500px!important;text-align:center}table[_ngcontent-%COMP%]   .text-non-active[_ngcontent-%COMP%]{width:-moz-fit-content!important;width:fit-content!important;background:#C6DFE2;border-radius:17px;color:#bd3d44;font-weight:500px!important;text-align:center}table[_ngcontent-%COMP%]   .status-canceled[_ngcontent-%COMP%]{color:#bd3d44;background:#C6DFE2;border-radius:17px;font-weight:500px!important;text-align:center}table[_ngcontent-%COMP%]   .status-pending[_ngcontent-%COMP%]{color:#515151;background:rgba(250,255,0,.2588235294);border-radius:17px;font-weight:500px!important;text-align:center}table[_ngcontent-%COMP%]   .status-empty[_ngcontent-%COMP%]{border-radius:17px;font-weight:500px!important;text-align:center}table[_ngcontent-%COMP%]   .status-approved[_ngcontent-%COMP%]{color:#00798c;background:#C6DFE2;border-radius:17px;font-weight:500px!important;text-align:center}"]}),e})()},1935:(O,b,s)=>{s.d(b,{o:()=>p});var c=s(9291),d=s(6814);function f(r,m){1&r&&c.GkF(0)}function t(r,m){if(1&r&&c._UZ(0,"i",3),2&r){const g=c.oxw();c.Gre("fa-solid fa-",g.icon," px-2"),c.Q6J("ngClass",g.class)}}function C(r,m){if(1&r&&c._UZ(0,"i"),2&r){const g=c.oxw();c.Gre("fa-regular fa-",g.icon," px-2")}}let p=(()=>{class r{}return r.\u0275fac=function(g){return new(g||r)},r.\u0275cmp=c.Xpm({type:r,selectors:[["app-icon"]],inputs:{type:"type",icon:"icon",class:"class"},decls:5,vars:1,consts:[[4,"ngTemplateOutlet"],["solid",""],["regular",""],[3,"ngClass"]],template:function(g,x){if(1&g&&(c.YNc(0,f,1,0,"ng-container",0),c.YNc(1,t,1,4,"ng-template",null,1,c.W1O),c.YNc(3,C,1,3,"ng-template",null,2,c.W1O)),2&g){const h=c.MAs(2),T=c.MAs(4);c.Q6J("ngTemplateOutlet","solid"==x.type?h:T)}},dependencies:[d.mk,d.tP],styles:["i[_ngcontent-%COMP%]{cursor:pointer}"]}),r})()}}]);