"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[2377],{2377:(O,T,r)=>{r.d(T,{a:()=>ct});var c=r(5861),d=r(8645),f=r(5219),t=r(9291),b=r(1732),m=r(6814),s=r(6023),g=r(2954),p=r(1935),C=r(8275);function h(e,o){1&e&&t.GkF(0)}function x(e,o){if(1&e&&t._UZ(0,"app-icon",7),2&e){const n=t.oxw(2).$implicit;t.Tol(n.class),t.Q6J("icon",n.icon)}}function A(e,o){if(1&e&&(t.ynx(0),t.YNc(1,x,1,3,"app-icon",6),t.BQk()),2&e){const n=t.oxw(3);t.xp6(1),t.Q6J("ngIf",!n.data.isFixed)}}const v=function(e){return[e]};function w(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const l=t.CHM(n).$implicit,_=t.oxw(2);return t.KtG(_.execute(l))}),t.YNc(1,A,2,1,"ng-container",5),t.qZA()}if(2&e){const n=o.$implicit;t.Tol(n.customClassCondition),t.xp6(1),t.Q6J("hasPermissions",t.VKq(3,v,n.id||"defaultValue"))}}function Z(e,o){if(1&e&&t.YNc(0,w,2,5,"a",3),2&e){const n=t.oxw();t.Q6J("ngForOf",n.actions)}}function F(e,o){if(1&e&&t._UZ(0,"app-icon",7),2&e){const n=t.oxw().$implicit;t.Tol(n.class),t.Q6J("icon",n.icon)}}function N(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"li",4),t.NdJ("click",function(){const l=t.CHM(n).$implicit,_=t.oxw(2);return t.KtG(_.execute(l))}),t.TgZ(1,"a",14),t.YNc(2,F,1,3,"app-icon",6),t.qZA()()}if(2&e){const n=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!n.data.isFixed)}}function M(e,o){if(1&e&&(t.TgZ(0,"div",8)(1,"i",9),t._UZ(2,"app-icon",10),t.qZA(),t.TgZ(3,"ul",11)(4,"div",12),t.YNc(5,N,3,1,"li",13),t.qZA()()()),2&e){const n=t.oxw();t.xp6(5),t.Q6J("ngForOf",n.actions)}}let Y=(()=>{class e{constructor(n){this.router=n,this.actions=[],this.onActionEmit=new t.vpe}ngOnInit(){}ngOnChanges(n){n.data&&this.prepareData()}execute(n,i){var a=this;return(0,c.Z)(function*(){if("function"==typeof n.fun)try{(yield n.fun(a.data))&&a.onActionEmit.emit()}catch{}if(n.route)return a.router.navigate([a.router.url+"/"+n.route,a.data.id])})()}prepareData(){var n=this;return(0,c.Z)(function*(){return n.actions.map((i,a)=>{i.customClassCondition&&"function"==typeof i.customClassCondition&&i.customClassCondition&&(i.customClassCondition=i.customClassCondition(n.data))})})()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-table-action"]],inputs:{actions:"actions",data:"data"},outputs:{onActionEmit:"onActionEmit"},features:[t.TTD],decls:5,vars:1,consts:[[4,"ngTemplateOutlet"],["single",""],["multi",""],[3,"class","click",4,"ngFor","ngForOf"],[3,"click"],[4,"hasPermissions"],["type","solid",3,"icon","class",4,"ngIf"],["type","solid",3,"icon"],[1,"dropdown","position-absolute"],["data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle"],["type","solid","icon","ellipsis-h"],[1,"dropdown-menu"],[1,"d-flex"],[3,"click",4,"ngFor","ngForOf"],[1,"dropdown-item"]],template:function(n,i){if(1&n&&(t.YNc(0,h,1,0,"ng-container",0),t.YNc(1,Z,1,1,"ng-template",null,1,t.W1O),t.YNc(3,M,6,1,"ng-template",null,2,t.W1O)),2&n){const a=t.MAs(2),l=t.MAs(4);t.Q6J("ngTemplateOutlet",i.actions.length>4?l:a)}},dependencies:[m.sg,m.O5,m.tP,p.o,C.z]}),e})();var J=r(3999);function y(e,o){1&e&&t.GkF(0)}function Q(e,o){1&e&&t.GkF(0)}function P(e,o){if(1&e&&(t._uU(0),t.ALo(1,"translate")),2&e){const n=t.oxw().$implicit;t.Oqu(t.lcZ(1,1,n.label))}}function k(e,o){if(1&e&&(t.TgZ(0,"th",12),t.YNc(1,Q,1,0,"ng-container",0),t.YNc(2,P,2,3,"ng-template",null,13,t.W1O),t.qZA()),2&e){const n=o.$implicit,i=t.MAs(3);t.Q6J("ngClass",n.class),t.xp6(1),t.Q6J("ngTemplateOutlet",i)}}function D(e,o){1&e&&t.GkF(0)}const E=function(e,o){return{row:e,i:o}};function S(e,o){if(1&e&&(t.TgZ(0,"tr"),t.YNc(1,D,1,0,"ng-container",14),t.qZA()),2&e){const n=o.$implicit,i=o.index;t.oxw(3);const a=t.MAs(8);t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.WLB(2,E,n,i))}}function I(e,o){if(1&e&&(t.TgZ(0,"table",9)(1,"thead")(2,"tr"),t.YNc(3,k,4,2,"th",10),t.qZA()(),t.TgZ(4,"tbody"),t.YNc(5,S,2,5,"tr",11),t.qZA()()),2&e){const n=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",n.tableConfig.cols),t.xp6(2),t.Q6J("ngForOf",n.data)}}function U(e,o){if(1&e&&t.YNc(0,I,6,2,"table",8),2&e){const n=t.oxw();t.Q6J("ngIf",!n._loading)}}function G(e,o){1&e&&t.GkF(0)}function W(e,o){if(1&e&&(t._uU(0),t.ALo(1,"translate"),t._UZ(2,"p-sortIcon",22)),2&e){const n=t.oxw().$implicit;t.hij("",t.lcZ(1,2,n.label)," "),t.xp6(2),t.Q6J("field",n.field)}}function $(e,o){if(1&e&&(t.TgZ(0,"th",21),t.YNc(1,G,1,0,"ng-container",0),t.YNc(2,W,3,4,"ng-template",null,13,t.W1O),t.qZA()),2&e){const n=o.$implicit,i=t.MAs(3);t.Q6J("pSortableColumn",n.field)("ngClass",n.class),t.xp6(1),t.Q6J("ngTemplateOutlet",i)}}function q(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"th",19),t._UZ(2,"p-tableHeaderCheckbox"),t.qZA(),t.YNc(3,$,4,3,"th",20),t.qZA()),2&e){const n=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",n.tableConfig.cols)}}function H(e,o){1&e&&t.GkF(0)}const K=function(e,o){return{row:e,index:o}};function R(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"p-tableCheckbox",23),t.qZA(),t.YNc(3,H,1,0,"ng-container",14),t.qZA()),2&e){const n=o.$implicit,i=o.$implicit;t.oxw(2);const a=t.MAs(8);t.xp6(2),t.Q6J("value",n),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.WLB(3,K,n,i))}}const L=function(){return["name"]};function z(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"p-table",15,16),t.NdJ("selectionChange",function(a){t.CHM(n);const l=t.oxw();return t.KtG(l.selectedItem=a)})("sortFunction",function(a){t.CHM(n);const l=t.oxw();return t.KtG(l.customSort(a))}),t.YNc(2,q,4,1,"ng-template",17),t.YNc(3,R,4,6,"ng-template",18),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("value",n.data)("rows",n._paginationData.limit)("paginator",!1)("globalFilterFields",t.DdM(8,L))("selection",n.selectedItem)("rowHover",!0)("showCurrentPageReport",!0)("customSort",!0)}}function B(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"div",24)(2,"h1",25),t._uU(3,"Something Wrong"),t._UZ(4,"br"),t._uU(5," reload"),t.qZA(),t.TgZ(6,"span",26),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.reload())}),t._UZ(7,"i",27),t._uU(8," Reload The Table"),t.qZA()()()}}function j(e,o){1&e&&(t.TgZ(0,"div")(1,"div",28)(2,"h1",25),t._uU(3,"No Data Found . . . "),t.qZA()()())}function X(e,o){1&e&&t.GkF(0)}const V=function(e,o,n){return{col:e,i:o,row:n}};function tt(e,o){if(1&e&&(t.TgZ(0,"td"),t.YNc(1,X,1,0,"ng-container",14),t.qZA()),2&e){const n=o.$implicit,i=o.index,a=t.oxw().row;t.oxw();const l=t.MAs(10),_=t.MAs(12);t.Tol("field "+a[n.custom_class_cel]),t.xp6(1),t.Q6J("ngTemplateOutlet",a[n.field]?l:_)("ngTemplateOutletContext",t.kEZ(4,V,n,i,a))}}function nt(e,o){if(1&e&&t.YNc(0,tt,2,8,"td",29),2&e){const n=t.oxw();t.Q6J("ngForOf",n.tableConfig.cols)}}function et(e,o){1&e&&t.GkF(0)}const ot=function(e,o,n){return{col:e,index:o,row:n}};function it(e,o){if(1&e&&(t.YNc(0,et,1,0,"ng-container",14),t._uU(1)),2&e){const n=o.col,i=o.row,a=o.index;t.oxw();const l=t.MAs(14);t.Q6J("ngTemplateOutlet",n.haveLogo?l:null)("ngTemplateOutletContext",t.kEZ(3,ot,n,a,i)),t.xp6(1),t.hij(" ",i[n.field],"\n")}}function at(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"app-table-action",30),t.NdJ("onActionEmit",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.reload())}),t.qZA()}if(2&e){const i=o.row;t.Q6J("actions",o.col.actions)("data",i)}}function lt(e,o){1&e&&t._UZ(0,"img",31),2&e&&t.Q6J("src",o.row.thumbnail,t.LSH)}let ct=(()=>{class e{constructor(n){this.http=n,this.data=[],this.mode="basic",this.unsubscribe=new d.x,this._loading=!0,this._errored=!1,this._paginationData={page:1,limit:10},this._filterData=[],this._sortData=[],this.params={}}ngOnChanges(n){!n.data&&"string"==typeof this.tableConfig.Request&&this.execute(),(n.config||n.data)&&this.prepareData(),n.data&&this.loading(!1),n.pagination&&this.handlePaginationChanges(),n.filter&&this.handleFilterChanges(),n.sort&&this.handleSortChanges()}handlePaginationChanges(){this._paginationSubscription&&this._paginationSubscription.unsubscribe(),this._paginationSubscription=this.pagination?.onPaginationChange.subscribe(n=>{this._paginationData=n,this.params={...this.params,...n},this.execute()})}execute(){var n=this;return(0,c.Z)(function*(){n.loading(!0),n._subscription&&n._subscription.unsubscribe(),n._subscription=yield n.http.getWithParam(n.tableConfig.Request,n.params).subscribe({next:i=>{n.data=i.data,n.meta=i.meta,n.pagination?.setTotal(i.meta.total??0)},error:i=>{n._errored=!0,n.data=[],n.loading(!1)},complete:()=>{n.prepareData(),setTimeout(()=>{n.loading(!1)})}})})()}reload(){var n=this;return(0,c.Z)(function*(){n.tableConfig.Request&&(yield n.execute())})()}loading(n=!0){this._loading=n}prepareData(){var n=this;return(0,c.Z)(function*(){return n.tableConfig.cols.map((i,a)=>{i.format&&i.field&&n.data.forEach(l=>{l[i.field]=i.format(l)}),i.custom_class_cel&&i.field&&n.data.forEach(l=>{l[i.custom_class_cel]=i.custom_class_cel(l)})})})()}handleFilterChanges(){this._filtersSubscription&&this._filtersSubscription.unsubscribe(),this._filtersSubscription=this.filter?.onFilterApplied.subscribe(n=>{if(n.length>0){this.params=this._paginationData;for(const i of n)""!=i.value&&i.field&&(this.params[i.field]=i.value)}else this.params=this._paginationData;this._filterData=n,this.pagination?.changePage(1)})}handleSortChanges(){this._sortSubscription&&this._sortSubscription.unsubscribe(),this._sortSubscription=this.sort?.onSortApplied.subscribe(n=>{if(n.length>0)for(const i of n)""!=i.value&&i.field&&(this.params[i.field]=i.value);this._sortData=n,this.execute()})}customSort(n){n.data.sort((i,a)=>{let l=i[n.field],_=a[n.field],u=null;return u=null==l&&null!=_?-1:null!=l&&null==_?1:null==l&&null==_?0:"string"==typeof l&&"string"==typeof _?l.localeCompare(_):l<_?-1:l>_?1:0,n.order*u})}ngOnDestroy(){this.data=[],this.unsubscribe.next(!0),this.unsubscribe.complete()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(b.O))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-table"]],inputs:{pagination:"pagination",filter:"filter",sort:"sort",tableConfig:"tableConfig",data:"data",mode:"mode"},features:[t._Bn([f.ez,f.YP]),t.TTD],decls:15,vars:3,consts:[[4,"ngTemplateOutlet"],["basic",""],["advanced",""],[4,"ngIf"],["field",""],["value",""],["action",""],["haveLogo",""],["class","table responsiveTable",4,"ngIf"],[1,"table","responsiveTable"],["scope","col",3,"ngClass",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col",3,"ngClass"],["header",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rows","paginator","globalFilterFields","tableStyle","selection","rowHover","showCurrentPageReport","customSort","selectionChange","sortFunction"],["dt",""],["pTemplate","header"],["pTemplate","body"],[2,"width","4rem"],["scope","col",3,"pSortableColumn","ngClass",4,"ngFor","ngForOf"],["scope","col",3,"pSortableColumn","ngClass"],[3,"field"],[3,"value"],[1,"error-container"],[1,"error-title"],[1,"error-reload-button",3,"click"],[1,"pi","pi-refresh"],[1,"no-data"],[3,"class",4,"ngFor","ngForOf"],[3,"actions","data","onActionEmit"],["alt","img",3,"src"]],template:function(n,i){if(1&n&&(t.YNc(0,y,1,0,"ng-container",0),t.YNc(1,U,1,1,"ng-template",null,1,t.W1O),t.YNc(3,z,4,9,"ng-template",null,2,t.W1O),t.YNc(5,B,9,0,"div",3),t.YNc(6,j,4,0,"div",3),t.YNc(7,nt,1,1,"ng-template",null,4,t.W1O),t.YNc(9,it,2,7,"ng-template",null,5,t.W1O),t.YNc(11,at,1,2,"ng-template",null,6,t.W1O),t.YNc(13,lt,1,1,"ng-template",null,7,t.W1O)),2&n){const a=t.MAs(2),l=t.MAs(4);t.Q6J("ngTemplateOutlet","basic"===i.mode?a:l),t.xp6(5),t.Q6J("ngIf",i._errored),t.xp6(1),t.Q6J("ngIf",!i._errored&&0===i.data.length)}},dependencies:[m.mk,m.sg,m.O5,m.tP,s.iA,f.jx,s.lQ,s.fz,s.UA,s.Mo,Y,J.X$],styles:["table[_ngcontent-%COMP%]{height:100%;padding:2rem 2.8rem!important}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .row-active[_ngcontent-%COMP%]{background:#C6DFE2!important}table[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:var(--text-font-size);font-weight:500;line-height:var(--page-title-line-height);letter-spacing:var(--page-title-letter-spacing);text-align:start;color:var(--color13)}table[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:20px;letter-spacing:0em;text-align:start;color:var(--color14)}table[_ngcontent-%COMP%]   .text-active[_ngcontent-%COMP%]{width:-moz-fit-content!important;width:fit-content!important;background:#C6DFE2;border-radius:17px;color:#00798c;font-weight:500px!important;text-align:center}table[_ngcontent-%COMP%]   .text-non-active[_ngcontent-%COMP%]{width:-moz-fit-content!important;width:fit-content!important;background:#C6DFE2;border-radius:17px;color:#bd3d44;font-weight:500px!important;text-align:center}"]}),e})()},1935:(O,T,r)=>{r.d(T,{o:()=>m});var c=r(9291),d=r(6814);function f(s,g){1&s&&c.GkF(0)}function t(s,g){if(1&s&&c._UZ(0,"i",3),2&s){const p=c.oxw();c.Gre("fa-solid fa-",p.icon," px-2"),c.Q6J("ngClass",p.class)}}function b(s,g){if(1&s&&c._UZ(0,"i"),2&s){const p=c.oxw();c.Gre("fa-regular fa-",p.icon," px-2")}}let m=(()=>{class s{}return s.\u0275fac=function(p){return new(p||s)},s.\u0275cmp=c.Xpm({type:s,selectors:[["app-icon"]],inputs:{type:"type",icon:"icon",class:"class"},decls:5,vars:1,consts:[[4,"ngTemplateOutlet"],["solid",""],["regular",""],[3,"ngClass"]],template:function(p,C){if(1&p&&(c.YNc(0,f,1,0,"ng-container",0),c.YNc(1,t,1,4,"ng-template",null,1,c.W1O),c.YNc(3,b,1,3,"ng-template",null,2,c.W1O)),2&p){const h=c.MAs(2),x=c.MAs(4);c.Q6J("ngTemplateOutlet","solid"==C.type?h:x)}},dependencies:[d.mk,d.tP],styles:["i[_ngcontent-%COMP%]{cursor:pointer}"]}),s})()}}]);