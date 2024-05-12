"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[7683],{2305:(O,b,o)=>{o.d(b,{b:()=>l});var t=o(9291),s=o(67),m=o(6223),f=o(6814),d=o(8057),M=o(3999);function C(r,v){1&r&&t._UZ(0,"i",6)}function x(r,v){if(1&r&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"translate"),t.TgZ(3,"span",4),t.YNc(4,C,1,0,"i",5),t.qZA()()),2&r){const _=t.oxw();t.xp6(1),t.hij("",t.lcZ(2,2,_.text)," "),t.xp6(3),t.Q6J("ngIf",_.control&&(null==_.control.errors?null:_.control.errors.required))}}function P(r,v){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const _=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Oqu(t.lcZ(2,3,_.object.keys(_.control.errors)[0]))}}let l=(()=>{class r extends s.t{constructor(_){super(),this.formGroupDirective=_,this.readOnly=!1,this.class="d-flex justify-content-between align-items-center",this.change=new t.vpe,this.object=Object}writeValue(_){this.value=_}onValueChange(_){this.onChange(_),this.onTouched(),this.change.emit(_)}}return r.\u0275fac=function(_){return new(_||r)(t.Y36(m.sg,8))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-checkbox"]],inputs:{text:"text",value:"value",readOnly:"readOnly",class:"class"},outputs:{change:"change"},features:[t._Bn([{provide:m.JU,useExisting:r,multi:!0},{provide:m.Cf,useExisting:r,multi:!0}]),t.qOj],decls:4,vars:6,consts:[[3,"ngClass"],[4,"ngIf"],["inputId","binary",3,"ngModel","disabled","binary","ngModelChange","onChange"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(_,h){1&_&&(t.TgZ(0,"div",0),t.YNc(1,x,5,4,"label",1),t.TgZ(2,"p-checkbox",2),t.NdJ("ngModelChange",function(i){return h.value=i})("onChange",function(i){return h.onValueChange(i)}),t.qZA(),t.YNc(3,P,3,5,"span",3),t.qZA()),2&_&&(t.Q6J("ngClass",h.class),t.xp6(1),t.Q6J("ngIf",h.text),t.xp6(1),t.Q6J("ngModel",h.value)("disabled",h.readOnly)("binary",!0),t.xp6(1),t.Q6J("ngIf",h.control&&h.control.errors&&(h.control.touched||h.formGroupDirective.submitted)))},dependencies:[f.mk,f.O5,m.JJ,m.On,d.XZ,M.X$]}),r})()},5077:(O,b,o)=>{o.d(b,{z:()=>I});var t=o(9291),s=o(6924),m=o(5219),f=o(6814),d=o(6223),M=o(2305),C=o(8614),x=o(1904),P=o(3838),l=o(6098),r=o(9246);const v=["*"];let _=(()=>{class a{constructor(){this.sidebarVisible=!1,this.position="left"}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-sidebar"]],inputs:{sidebarVisible:"sidebarVisible",position:"position"},ngContentSelectors:v,decls:2,vars:3,consts:[[3,"visible","position","styleClass","visibleChange"]],template:function(n,g){1&n&&(t.F$t(),t.TgZ(0,"p-sidebar",0),t.NdJ("visibleChange",function(A){return g.sidebarVisible=A}),t.Hsn(1),t.qZA()),2&n&&t.Q6J("visible",g.sidebarVisible)("position","right")("styleClass","p-sidebar")},dependencies:[r.Y]}),a})();var h=o(4779);function Z(a,c){1&a&&t.GkF(0)}function i(a,c){}function T(a,c){1&a&&t.YNc(0,i,0,0,"ng-template")}const e=function(a,c){return{item:a,i:c}};function E(a,c){if(1&a&&(t.ynx(0),t.YNc(1,T,1,0,null,11),t.BQk()),2&a){const n=c.$implicit,g=c.index;t.oxw();const u=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",u)("ngTemplateOutletContext",t.WLB(2,e,n,g))}}function p(a,c){if(1&a){const n=t.EpF();t.TgZ(0,"div")(1,"app-text",14),t.NdJ("ngModelChange",function(u){t.CHM(n);const A=t.oxw().item;return t.KtG(A.value=u)}),t.qZA()()}if(2&a){const n=t.oxw().item;t.xp6(1),t.Tol(""),t.Q6J("text",n.label)("placeholder",n.placeholder)("ngModel",n.value)}}function F(a,c){if(1&a){const n=t.EpF();t.TgZ(0,"div")(1,"app-dropdown",15),t.NdJ("ngModelChange",function(u){t.CHM(n);const A=t.oxw().item;return t.KtG(A.value=u)}),t.qZA()()}if(2&a){const n=t.oxw().item;t.xp6(1),t.Tol(""),t.Q6J("text",n.label)("data",n.data)("request",n.request)("showClear",!0)("ngModel",n.value)("placeholder",n.label)("editable",!1)("optionLabel",n.options.label)("optionValue",n.options.value)("filter",!0)("filterBy",n.options.label)}}function J(a,c){if(1&a){const n=t.EpF();t.TgZ(0,"div")(1,"app-date",14),t.NdJ("ngModelChange",function(u){t.CHM(n);const A=t.oxw().item;return t.KtG(A.value=u)}),t.qZA()()}if(2&a){const n=t.oxw().item;t.xp6(1),t.Tol(""),t.Q6J("text",n.label)("placeholder",n.placeholder)("ngModel",n.value)}}function w(a,c){if(1&a){const n=t.EpF();t.TgZ(0,"div")(1,"app-number-input",16),t.NdJ("ngModelChange",function(u){t.CHM(n);const A=t.oxw().item;return t.KtG(A.value=u)}),t.qZA()()}if(2&a){const n=t.oxw().item;t.xp6(1),t.Tol(""),t.Q6J("text",n.label)("ngModel",n.value)}}function D(a,c){if(1&a){const n=t.EpF();t.TgZ(0,"div")(1,"app-checkbox",16),t.NdJ("ngModelChange",function(u){t.CHM(n);const A=t.oxw().item;return t.KtG(A.value=u)}),t.qZA()()}if(2&a){const n=t.oxw().item;t.xp6(1),t.Tol(""),t.Q6J("text",n.label)("ngModel",n.value)}}function S(a,c){if(1&a&&(t.TgZ(0,"div",12),t.YNc(1,p,2,5,"div",13),t.YNc(2,F,2,13,"div",13),t.YNc(3,J,2,5,"div",13),t.YNc(4,w,2,4,"div",13),t.YNc(5,D,2,4,"div",13),t.qZA()),2&a){const n=c.item,g=t.oxw(2);t.Q6J("ngSwitch",n.type),t.xp6(1),t.Q6J("ngSwitchCase",g.FilterInputTypeEnum.TEXT),t.xp6(1),t.Q6J("ngSwitchCase",g.FilterInputTypeEnum.SELECT),t.xp6(1),t.Q6J("ngSwitchCase",g.FilterInputTypeEnum.DATE),t.xp6(1),t.Q6J("ngSwitchCase",g.FilterInputTypeEnum.NUMBER),t.xp6(1),t.Q6J("ngSwitchCase",g.FilterInputTypeEnum.CHECKBOX)}}function y(a,c){if(1&a){const n=t.EpF();t.TgZ(0,"div",5),t.YNc(1,E,2,5,"ng-container",6),t.YNc(2,S,6,6,"ng-template",null,7,t.W1O),t.TgZ(4,"div",8)(5,"app-button",9),t.NdJ("click",function(){t.CHM(n);const u=t.oxw();return t.KtG(u.applyFilters())}),t.qZA(),t.TgZ(6,"app-button",10),t.NdJ("click",function(){t.CHM(n);const u=t.oxw();return t.KtG(u.clearFilters())}),t.qZA()()()}if(2&a){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.config),t.xp6(4),t.Q6J("text",n.applyBtnLabel)("icon",n.icon.FILTER),t.xp6(1),t.Q6J("text",n.clearBtnLabel)}}let I=(()=>{class a{constructor(){this.onFilterApplied=new t.vpe,this.config=[],this.applyBtnLabel="apply",this.clearBtnLabel="clear",this.filterHeader="filters",this.icon=m.dv,this.sidebarVisible=!1,this.selectedFilters=[],this.appliedFilters=[],this.FilterInputTypeEnum=s.W}toggleSidebar(){this.sidebarVisible=!this.sidebarVisible}getAppliedFilters(){return this.appliedFilters}applyFilters(){this.appliedFilters=[],this.config.forEach(n=>{n.value&&n.field&&this.appliedFilters.push({field:n.field,value:n.value})}),this.onFilterApplied.next(this.appliedFilters),this.toggleSidebar()}clearFilters(){this.appliedFilters=[],this.config.forEach(n=>{n.value=null}),this.onFilterApplied.next(this.appliedFilters),this.toggleSidebar()}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["ukt-filter"]],inputs:{config:"config",applyBtnLabel:"applyBtnLabel",clearBtnLabel:"clearBtnLabel",filterHeader:"filterHeader"},outputs:{onFilterApplied:"onFilterApplied"},decls:6,vars:7,consts:[[3,"text","icon","click"],[1,"d-flex","flex-row","align-items-center","justify-content-center"],[3,"sidebarVisible","position"],[4,"ngTemplateOutlet"],["filterOptions",""],[1,"d-flex","flex-column","align-items-between","justify-content-start"],[4,"ngFor","ngForOf"],["filter",""],[1,"row","p-3","gap-3"],[1,"col-12","btn-filter",3,"text","icon","click"],[1,"col-12",3,"text","click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"text","placeholder","ngModel","ngModelChange"],[3,"text","data","request","showClear","ngModel","placeholder","editable","optionLabel","optionValue","filter","filterBy","ngModelChange"],[3,"text","ngModel","ngModelChange"]],template:function(n,g){if(1&n&&(t.TgZ(0,"app-button",0),t.NdJ("click",function(){return g.toggleSidebar()}),t.qZA(),t.TgZ(1,"div",1)(2,"app-sidebar",2),t.YNc(3,Z,1,0,"ng-container",3),t.qZA()(),t.YNc(4,y,7,4,"ng-template",null,4,t.W1O)),2&n){const u=t.MAs(5);t.Tol("btn-filter"),t.Q6J("text","filter")("icon",g.icon.FILTER),t.xp6(2),t.Q6J("sidebarVisible",g.sidebarVisible)("position","right"),t.xp6(1),t.Q6J("ngTemplateOutlet",u)}},dependencies:[f.sg,f.tP,f.RF,f.n9,d.JJ,d.On,M.b,C.T,x.D,P.J,l.I,_,h.r]}),a})()},6924:(O,b,o)=>{o.d(b,{W:()=>t});var t=function(s){return s.TEXT="TEXT",s.SELECT="SELECT",s.DATE="DATE",s.NUMBER="NUMBER",s.CHECKBOX="CHECKBOX",s}(t||{})},359:(O,b,o)=>{o.d(b,{Q:()=>Z});var t=o(9291),s=o(6814),m=o(3999);function f(i,T){if(1&i){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(e);const p=t.oxw(2);return t.KtG(p.changePage(p.page-1))}),t._UZ(1,"i",13),t._uU(2),t.ALo(3,"translate"),t.qZA()}2&i&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"prev")," "))}function d(i,T){if(1&i){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const p=t.oxw(2);return t.KtG(p.changePage(1))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("disabled",1==e.page),t.xp6(1),t.hij(" ",1," ")}}function M(i,T){1&i&&(t.TgZ(0,"span",15),t._uU(1," ..."),t.qZA())}function C(i,T){if(1&i){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const p=t.oxw(2);return t.KtG(p.changePage(p.page-2))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("disabled",1==e.page),t.xp6(1),t.hij(" ",e.page-2," ")}}function x(i,T){if(1&i){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const p=t.oxw(2);return t.KtG(p.changePage(p.page-1))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("disabled",1==e.page),t.xp6(1),t.hij(" ",e.page-1," ")}}function P(i,T){if(1&i){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const p=t.oxw(2);return t.KtG(p.changePage(p.page+1))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("disabled",e.page==e.totalPages),t.xp6(1),t.hij(" ",e.page+1," ")}}function l(i,T){if(1&i){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const p=t.oxw(2);return t.KtG(p.changePage(p.page+2))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("disabled",e.page==e.totalPages),t.xp6(1),t.hij(" ",e.page+2," ")}}function r(i,T){1&i&&(t.TgZ(0,"span",15),t._uU(1," ..."),t.qZA())}function v(i,T){if(1&i){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const p=t.oxw(2);return t.KtG(p.changePage(p.totalPages))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("disabled",e.page==e.totalPages),t.xp6(1),t.hij(" ",e.totalPages," ")}}function _(i,T){if(1&i){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(e);const p=t.oxw(2);return t.KtG(p.changePage(p.page+1))}),t._uU(1),t.ALo(2,"translate"),t._UZ(3,"i",16),t.qZA()}2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"next")," "))}function h(i,T){if(1&i&&(t.TgZ(0,"div",1)(1,"p",2),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.TgZ(5,"span"),t._uU(6),t.qZA()(),t.TgZ(7,"nav",3)(8,"ul",4)(9,"li",5),t.YNc(10,f,4,3,"button",6),t.qZA(),t.TgZ(11,"li",7),t.YNc(12,d,2,2,"button",8),t.YNc(13,M,2,0,"span",9),t.YNc(14,C,2,2,"button",8),t.YNc(15,x,2,2,"button",8),t.TgZ(16,"span",10)(17,"button",11),t._uU(18),t.qZA()(),t.YNc(19,P,2,2,"button",8),t.YNc(20,l,2,2,"button",8),t.YNc(21,r,2,0,"span",9),t.YNc(22,v,2,2,"button",8),t.qZA(),t.TgZ(23,"li",5),t.YNc(24,_,4,3,"button",6),t.qZA()()()()),2&i){const e=t.oxw();t.xp6(2),t.hij("",t.lcZ(3,13,t.lcZ(4,15,"total_items"))," "),t.xp6(4),t.Oqu(e.total),t.xp6(4),t.Q6J("ngIf",e.page>1),t.xp6(2),t.Q6J("ngIf",e.page>3),t.xp6(1),t.Q6J("ngIf",e.page>3),t.xp6(1),t.Q6J("ngIf",e.page>2),t.xp6(1),t.Q6J("ngIf",1!=e.page),t.xp6(3),t.Oqu(e.page),t.xp6(1),t.Q6J("ngIf",e.page!=e.totalPages),t.xp6(1),t.Q6J("ngIf",e.page!=e.totalPages&&e.page!=e.totalPages-1),t.xp6(1),t.Q6J("ngIf",e.page!=e.totalPages&&e.page!=e.totalPages-1&&e.page!=e.totalPages-2),t.xp6(1),t.Q6J("ngIf",e.page!=e.totalPages&&e.page!=e.totalPages-1&&e.page!=e.totalPages-2),t.xp6(2),t.Q6J("ngIf",e.page!=e.totalPages)}}let Z=(()=>{class i{constructor(){this.total=0,this.onPaginationChange=new t.vpe,this.rppOptions=[{label:"10",value:10},{label:"30",value:30},{label:"40",value:40}],this.rpp=this.rppOptions[0].value,this.page=1,this.totalPages=0,this.totalClipPages=0}getPage(){return this.page}setTotal(e){this.total=e,this.totalPages=Math.ceil(this.total/this.rpp),this.totalClipPages=Math.ceil(this.totalPages-(this.totalPages-(this.page+1))/2)}changeRPP(){this.page=1,this.onPaginationChange.next({page:this.page,limit:this.rpp})}changePage(e){this.page=e,this.onPaginationChange.next({page:this.page,limit:this.rpp})}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ukt-pagination"]],inputs:{total:"total",rppOptions:"rppOptions"},outputs:{onPaginationChange:"onPaginationChange"},decls:1,vars:1,consts:[["class","pagination d-flex align-items-center ",4,"ngIf"],[1,"pagination","d-flex","align-items-center"],[1,"total_items"],["aria-label","Page navigation "],[1,"pagination","d-flex","justify-content-between"],[1,"page-item","mx-3"],["class","btn btn-light border-1",3,"click",4,"ngIf"],[1,"page-item","d-flex","gap-3"],["class","btn btn-light border-1",3,"disabled","click",4,"ngIf"],["class","fw-bold mx-2",4,"ngIf"],[1,"page-item"],["disabled","",1,"page-link","rounded","border-1","active"],[1,"btn","btn-light","border-1",3,"click"],[1,"fa-solid","fa-arrow-left","mx-1"],[1,"btn","btn-light","border-1",3,"disabled","click"],[1,"fw-bold","mx-2"],[1,"fa-solid","fa-arrow-right","mx-1"]],template:function(e,E){1&e&&t.YNc(0,h,25,17,"div",0),2&e&&t.Q6J("ngIf",0!=E.totalPages)},dependencies:[s.O5,s.rS,m.X$],styles:[".total_items[_ngcontent-%COMP%]{font-size:14px;margin-top:4px}.total_items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:1px solid var(--mainColor);padding:5px 10px;border-radius:4px}"]}),i})()},2115:(O,b,o)=>{o.d(b,{u:()=>f});var t=o(6814),s=o(3999),m=o(9291);let f=(()=>{class d{}return d.\u0275fac=function(C){return new(C||d)},d.\u0275mod=m.oAB({type:d}),d.\u0275inj=m.cJS({imports:[t.ez,s.aw]}),d})()},4811:(O,b,o)=>{o.d(b,{x:()=>C});var t=o(9291),s=o(6814),m=o(3838),f=o(6223),d=o(3999);function M(x,P){if(1&x){const l=t.EpF();t.ynx(0),t.TgZ(1,"app-dropdown",2),t.NdJ("ngModelChange",function(v){const h=t.CHM(l).$implicit;return t.KtG(h.value=v)})("onDropDownChange",function(){t.CHM(l);const v=t.oxw();return t.KtG(v.onSortChange())}),t.ALo(2,"translate"),t.qZA(),t.BQk()}if(2&x){const l=P.$implicit;t.xp6(1),t.Q6J("data",l.data)("ngModel",l.value)("optionLabel",l.optionLabel)("optionValue",l.optionValue)("placeholder",t.lcZ(2,6,l.placeholder))("showClear",!0)}}let C=(()=>{class x{constructor(){this.onSortApplied=new t.vpe,this.SortConfig=[],this.appliedSort=[]}onSortChange(){this.appliedSort=[];for(const l of this.SortConfig)"string"==typeof l.value&&""!=l.value&&this.appliedSort.push({field:l.key,value:l.value});this.SortConfig[0].value&&Array.isArray(this.appliedSort)&&(this.SortConfig[1].value||this.appliedSort.push({field:"sort_type",value:"asc"}),this.onSortApplied.next(this.appliedSort))}}return x.\u0275fac=function(l){return new(l||x)},x.\u0275cmp=t.Xpm({type:x,selectors:[["ukt-sort"]],inputs:{SortConfig:"SortConfig"},outputs:{onSortApplied:"onSortApplied"},decls:2,vars:1,consts:[[1,"d-flex","flex-row","align-items-center","justify-content-center","gap-3"],[4,"ngFor","ngForOf"],[3,"data","ngModel","optionLabel","optionValue","placeholder","showClear","ngModelChange","onDropDownChange"]],template:function(l,r){1&l&&(t.TgZ(0,"div",0),t.YNc(1,M,3,8,"ng-container",1),t.qZA()),2&l&&(t.xp6(1),t.Q6J("ngForOf",r.SortConfig))},dependencies:[s.sg,m.J,f.JJ,f.On,d.X$]}),x})()},5946:(O,b,o)=>{o.d(b,{q:()=>t});var t=function(s){return s.asc="asc",s.desc="desc",s}(t||{})},8096:(O,b,o)=>{o.d(b,{J:()=>M});var t=o(6814),s=o(9624),m=o(4413),f=o(3999),d=o(9291);let M=(()=>{class C{}return C.\u0275fac=function(P){return new(P||C)},C.\u0275mod=d.oAB({type:C}),C.\u0275inj=d.cJS({imports:[t.ez,s.U,m.e,f.aw]}),C})()}}]);