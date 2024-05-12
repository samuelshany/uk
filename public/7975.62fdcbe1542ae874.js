"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[7975],{7975:(U,a,i)=>{i.r(a),i.d(a,{ProfitAndLossModule:()=>q});var s=i(6814),c=i(8209),d=i(6924),t=i(9291);const A_api_get="journal-entries/profit-loss/list";var u=i(1732);let g=(()=>{class o{constructor(n){this.http=n}get(n={}){return this.http.getWithParam(A_api_get,n)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(u.O))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var v=i(5077),Z=i(4779),f=i(3999);function L(o,e){if(1&o&&(t.TgZ(0,"div",6),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"translate"),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.HOy("",t.lcZ(2,4,"from")," : ",n.params.from," ",t.lcZ(3,6,"to")," :",n.params.to,"")}}function h(o,e){1&o&&t.GkF(0)}function x(o,e){if(1&o&&(t.TgZ(0,"div",20)(1,"div",21),t._uU(2),t.qZA(),t.TgZ(3,"div",22),t._uU(4),t.ALo(5,"currency"),t.qZA()()),2&o){const n=e.$implicit;t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(t.lcZ(5,2,n.total))}}function T(o,e){if(1&o&&(t.ynx(0),t.TgZ(1,"div",17),t._uU(2),t.qZA(),t.YNc(3,x,6,4,"div",18),t.TgZ(4,"div",19)(5,"div",15),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"div",16),t._uU(9),t.ALo(10,"currency"),t.qZA()(),t.BQk()),2&o){const n=e.$implicit;t.xp6(2),t.hij(" ",n.name," "),t.xp6(1),t.Q6J("ngForOf",n.accounts),t.xp6(3),t.AsE("",t.lcZ(7,5,"total")," ",n.name,""),t.xp6(3),t.Oqu(t.lcZ(10,7,n.total))}}function _(o,e){if(1&o&&(t.TgZ(0,"div",11)(1,"div",11)(2,"div",12),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",12),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"div",12),t._uU(9),t.ALo(10,"translate"),t.qZA()(),t.YNc(11,T,11,9,"ng-container",13),t.TgZ(12,"div",14)(13,"div",15),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.TgZ(16,"div",16),t._uU(17),t.ALo(18,"currency"),t.qZA()()()),2&o){const n=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,6,"particulars")),t.xp6(3),t.Oqu(t.lcZ(7,8,"amount")),t.xp6(3),t.Oqu(t.lcZ(10,10,"amount")),t.xp6(2),t.Q6J("ngForOf",null==n.report?null:n.report.groups),t.xp6(3),t.Oqu(t.lcZ(15,12,"total_income")),t.xp6(3),t.Oqu(t.lcZ(18,14,n.report.net))}}function P(o,e){1&o&&(t.TgZ(0,"div",23),t._uU(1,"Data Not Found"),t.qZA())}const y=[{path:"",component:(()=>{class o{constructor(n,r){this.profitAndLossService=n,this.http=r,this.filtersConfig=[{field:"from",label:"From",type:d.W.DATE},{field:"to",label:"to",type:d.W.DATE}],this.params={},this.profitAndLossService.get().subscribe(l=>{this.report=l.data})}onFilterApplied(n){this.params={},n.forEach(r=>{this.params[r.field]=r.value}),this.profitAndLossService.get(this.params).subscribe(r=>{this.report=r.data})}export(){this.http.get("groupType/export/tree-view-pdf").subscribe({next:n=>{window.open(n.file_path)}})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g),t.Y36(u.O))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-profit-and-loss"]],decls:15,vars:9,consts:[[1,"report"],[1,"d-flex","justify-content-end","mb-3"],[1,"mx-2"],[3,"text","click"],[3,"config","onFilterApplied"],[1,"row","report-header"],[1,"col-6"],["class","col-6",4,"ngIf"],[4,"ngTemplateOutlet"],["reports",""],["message",""],[1,"row"],[1,"col-4","report-header-text"],[4,"ngFor","ngForOf"],[1,"row","report-header","mb-2"],[1,"col-8","report-footer"],[1,"col-4","report-footer"],[1,"mb-1","report-group-name"],["class","row mb-1",4,"ngFor","ngForOf"],[1,"row","mb-3","report-header"],[1,"row","mb-1"],[1,"col-4","report-body"],[1,"col-8","report-body"],[1,"text-danger","mt-3","d-flex","justify-content-center"]],template:function(n,r){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-button",3),t.NdJ("click",function(){return r.export()}),t.qZA()(),t.TgZ(4,"ukt-filter",4),t.NdJ("onFilterApplied",function(p){return r.onFilterApplied(p)}),t.qZA()(),t.TgZ(5,"div",5)(6,"div",6),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.YNc(9,L,4,8,"div",7),t.qZA(),t.YNc(10,h,1,0,"ng-container",8),t.YNc(11,_,19,16,"ng-template",null,9,t.W1O),t.YNc(13,P,2,0,"ng-template",null,10,t.W1O),t.qZA()),2&n){const l=t.MAs(12),p=t.MAs(14);t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","export"),t.xp6(1),t.Q6J("config",r.filtersConfig),t.xp6(3),t.Oqu(t.lcZ(8,7,"profit_loss")),t.xp6(2),t.Q6J("ngIf",r.params.from),t.xp6(1),t.Q6J("ngTemplateOutlet",(null==r.report||null==r.report.groups?null:r.report.groups.length)>0?l:p)}},dependencies:[s.sg,s.O5,s.tP,v.z,Z.r,s.H9,f.X$]}),o})()}];let O=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(y),c.Bz]}),o})();var C=i(1019),F=i(1890);let q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,O,C.i,f.aw,F.f]}),o})()}}]);