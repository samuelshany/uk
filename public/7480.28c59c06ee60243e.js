"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[7480],{7480:(C,c,l)=>{l.r(c),l.d(c,{InventoryModule:()=>h});var t=l(6814),s=l(2954);const g_api_get="report/inventory";var e=l(9291),r=l(2377),u=l(359),d=l(3999);let m=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-header"]],decls:4,vars:3,consts:[[1,"d-flex","justify-content-start","pb-5"],[1,"title"]],template:function(n,p){1&n&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&n&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"inventory_report")))},dependencies:[d.X$]}),o})();const f=[{path:"",component:(()=>{class o{constructor(){this.tableConfig={cols:[{field:"warehouse_name",label:"warehouse",class:""},{field:"number_of_product",label:"number_of_product",class:""},{field:"total_purchasing_price",label:"total_purchasing_price",class:""},{field:"total_selling_price",label:"total_selling_price",class:""}],Request:g_api_get}}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list"]],decls:6,vars:2,consts:[[1,"table"],[3,"tableConfig","pagination"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""]],template:function(n,p){if(1&n&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0),e._UZ(2,"app-table",1),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"ukt-pagination",null,3),e.qZA()),2&n){const a=e.MAs(5);e.xp6(2),e.Q6J("tableConfig",p.tableConfig)("pagination",a)}},dependencies:[r.a,u.Q,m]}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.Bz.forChild(f),s.Bz]}),o})();var P=l(1471),b=l(2115);let h=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.ez,x,P.X,b.u,d.aw]}),o})()},359:(C,c,l)=>{l.d(c,{Q:()=>h});var t=l(9291),s=l(6814),g=l(3999);function _(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.changePage(a.page-1))}),t._UZ(1,"i",13),t._uU(2),t.ALo(3,"translate"),t.qZA()}2&o&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"prev")," "))}function e(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.changePage(1))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw(2);t.Q6J("disabled",1==n.page),t.xp6(1),t.hij(" ",1," ")}}function r(o,i){1&o&&(t.TgZ(0,"span",15),t._uU(1," ..."),t.qZA())}function u(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.changePage(a.page-2))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw(2);t.Q6J("disabled",1==n.page),t.xp6(1),t.hij(" ",n.page-2," ")}}function d(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.changePage(a.page-1))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw(2);t.Q6J("disabled",1==n.page),t.xp6(1),t.hij(" ",n.page-1," ")}}function m(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.changePage(a.page+1))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw(2);t.Q6J("disabled",n.page==n.totalPages),t.xp6(1),t.hij(" ",n.page+1," ")}}function v(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.changePage(a.page+2))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw(2);t.Q6J("disabled",n.page==n.totalPages),t.xp6(1),t.hij(" ",n.page+2," ")}}function f(o,i){1&o&&(t.TgZ(0,"span",15),t._uU(1," ..."),t.qZA())}function x(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.changePage(a.totalPages))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw(2);t.Q6J("disabled",n.page==n.totalPages),t.xp6(1),t.hij(" ",n.totalPages," ")}}function P(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.changePage(a.page+1))}),t._uU(1),t.ALo(2,"translate"),t._UZ(3,"i",16),t.qZA()}2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"next")," "))}function b(o,i){if(1&o&&(t.TgZ(0,"div",1)(1,"p",2),t._uU(2),t.ALo(3,"translate"),t.TgZ(4,"span"),t._uU(5),t.qZA()(),t.TgZ(6,"nav",3)(7,"ul",4)(8,"li",5),t.YNc(9,_,4,3,"button",6),t.qZA(),t.TgZ(10,"li",7),t.YNc(11,e,2,2,"button",8),t.YNc(12,r,2,0,"span",9),t.YNc(13,u,2,2,"button",8),t.YNc(14,d,2,2,"button",8),t.TgZ(15,"span",10)(16,"button",11),t._uU(17),t.qZA()(),t.YNc(18,m,2,2,"button",8),t.YNc(19,v,2,2,"button",8),t.YNc(20,f,2,0,"span",9),t.YNc(21,x,2,2,"button",8),t.qZA(),t.TgZ(22,"li",5),t.YNc(23,P,4,3,"button",6),t.qZA()()()()),2&o){const n=t.oxw();t.xp6(2),t.hij("",t.lcZ(3,13,"total_items")," "),t.xp6(3),t.Oqu(n.total),t.xp6(4),t.Q6J("ngIf",n.page>1),t.xp6(2),t.Q6J("ngIf",n.page>3),t.xp6(1),t.Q6J("ngIf",n.page>3),t.xp6(1),t.Q6J("ngIf",n.page>2),t.xp6(1),t.Q6J("ngIf",1!=n.page),t.xp6(3),t.Oqu(n.page),t.xp6(1),t.Q6J("ngIf",n.page!=n.totalPages),t.xp6(1),t.Q6J("ngIf",n.page!=n.totalPages&&n.page!=n.totalPages-1),t.xp6(1),t.Q6J("ngIf",n.page!=n.totalPages&&n.page!=n.totalPages-1&&n.page!=n.totalPages-2),t.xp6(1),t.Q6J("ngIf",n.page!=n.totalPages&&n.page!=n.totalPages-1&&n.page!=n.totalPages-2),t.xp6(2),t.Q6J("ngIf",n.page!=n.totalPages)}}let h=(()=>{class o{constructor(){this.total=0,this.onPaginationChange=new t.vpe,this.rppOptions=[{label:"10",value:10},{label:"30",value:30},{label:"40",value:40}],this.rpp=this.rppOptions[0].value,this.page=1,this.totalPages=0,this.totalClipPages=0}getPage(){return this.page}setTotal(n){this.total=n,this.totalPages=Math.ceil(this.total/this.rpp),this.totalClipPages=Math.ceil(this.totalPages-(this.totalPages-(this.page+1))/2)}changeRPP(){this.page=1,this.onPaginationChange.next({page:this.page,limit:this.rpp})}changePage(n){this.page=n,this.onPaginationChange.next({page:this.page,limit:this.rpp})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["ukt-pagination"]],inputs:{total:"total",rppOptions:"rppOptions"},outputs:{onPaginationChange:"onPaginationChange"},decls:1,vars:1,consts:[["class","pagination ",4,"ngIf"],[1,"pagination"],[1,"total_items"],["aria-label","Page navigation "],[1,"pagination","d-flex","justify-content-between"],[1,"page-item","mx-3"],["class","btn btn-light border-1",3,"click",4,"ngIf"],[1,"page-item","d-flex","gap-3"],["class","btn btn-light border-1",3,"disabled","click",4,"ngIf"],["class","fw-bold mx-2",4,"ngIf"],[1,"page-item"],["disabled","",1,"page-link","rounded","border-1","active"],[1,"btn","btn-light","border-1",3,"click"],[1,"fa-solid","fa-arrow-left","mx-1"],[1,"btn","btn-light","border-1",3,"disabled","click"],[1,"fw-bold","mx-2"],[1,"fa-solid","fa-arrow-right","mx-1"]],template:function(n,p){1&n&&t.YNc(0,b,24,15,"div",0),2&n&&t.Q6J("ngIf",0!=p.totalPages)},dependencies:[s.O5,g.X$],styles:[".total_items[_ngcontent-%COMP%]{font-size:14px;margin-top:4px}.total_items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:1px solid var(--mainColor);padding:3px 10px;border-radius:4px}"]}),o})()},2115:(C,c,l)=>{l.d(c,{u:()=>_});var t=l(6814),s=l(3999),g=l(9291);let _=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[t.ez,s.aw]}),e})()}}]);