"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[4837],{6454:(T,h,o)=>{o.d(h,{M8:()=>g,a4:()=>u,eq:()=>t});var t=function(a){return a.view="View Balance Sheet",a.exportPdf="View Balance Sheet",a.exportCvs="View Balance Sheet",a}(t||{}),u=function(a){return a.view="View Profit Loss",a.exportPdf="View Profit Loss",a.exportCvs="View Profit Loss",a}(u||{}),g=function(a){return a.view="View Trial Balance Sheet",a.exportPdf="View Trial Balance Sheet",a.exportCvs="View Trial Balance Sheet",a}(g||{})},4837:(T,h,o)=>{o.r(h),o.d(h,{ReportsModule:()=>c});var t=o(6814),u=o(2954),g=o(6454);const a={balanceSheet:g.eq,trialBalance:g.M8,profitAndLoss:g.a4};var f=o(2127),x=o(6924),C=o(8645),M=o(9773),e=o(9291);const d_api_get="journal-entries/trial-balance/list";var _=o(1732);let p=(()=>{class n{constructor(l){this.http=l}getData(l){return l?this.http.getWithParam(d_api_get,l):this.http.get(d_api_get)}}return n.\u0275fac=function(l){return new(l||n)(e.LFG(_.O))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var m=o(6223),O=o(4779),b=o(5077),Z=o(3999);function y(n,r){if(1&n&&(e.TgZ(0,"p",13),e._uU(1),e.ALo(2,"translate"),e.ALo(3,"translate"),e.qZA()),2&n){const l=e.oxw();e.xp6(1),e.HOy("",e.lcZ(2,4,"from")," : ",l.params.from," ",e.lcZ(3,6,"to")," :",l.params.to,"")}}function A(n,r){if(1&n&&(e.TgZ(0,"p",14),e._uU(1),e.qZA()),2&n){const l=e.oxw();e.xp6(1),e.Oqu(l.message)}}function F(n,r){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA()()),2&n){const l=r.$implicit;e.xp6(2),e.Oqu(l.code),e.xp6(2),e.Oqu(l.total_debit),e.xp6(2),e.Oqu(l.total_credit)}}function E(n,r){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&n){const l=r.$implicit;e.xp6(2),e.Oqu(l.total_debit),e.xp6(2),e.Oqu(l.total_credit)}}function P(n,r){if(1&n&&(e.TgZ(0,"div",15)(1,"table",16)(2,"thead")(3,"tr")(4,"th",17),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"th"),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"th"),e._uU(11),e.ALo(12,"translate"),e.qZA()()(),e.TgZ(13,"tbody"),e.YNc(14,F,7,3,"tr",18),e.TgZ(15,"tr",19)(16,"th",20),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"th",20),e._uU(20),e.qZA(),e.TgZ(21,"th",20),e._uU(22),e.qZA()()()(),e.TgZ(23,"table",21)(24,"thead")(25,"tr")(26,"th"),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"th"),e._uU(30),e.ALo(31,"translate"),e.qZA()()(),e.TgZ(32,"tbody"),e.YNc(33,E,5,2,"tr",18),e.TgZ(34,"tr",19)(35,"th",20),e._uU(36),e.qZA(),e.TgZ(37,"th",20),e._uU(38),e.qZA()()()()()),2&n){const l=e.oxw();e.xp6(5),e.Oqu(e.lcZ(6,12,"Particulars")),e.xp6(3),e.hij("",e.lcZ(9,14,"debit")," LE"),e.xp6(3),e.hij("",e.lcZ(12,16,"credit")," LE"),e.xp6(3),e.Q6J("ngForOf",null==l.data?null:l.data.accounts),e.xp6(3),e.Oqu(e.lcZ(18,18,"Grand Total")),e.xp6(3),e.Oqu("33333 LE"),e.xp6(2),e.Oqu("4444 LE"),e.xp6(5),e.hij("",e.lcZ(28,20,"debit")," USD"),e.xp6(3),e.hij("",e.lcZ(31,22,"credit")," USD"),e.xp6(3),e.Q6J("ngForOf",null==l.data?null:l.data.accounts),e.xp6(3),e.Oqu("122222 $"),e.xp6(2),e.Oqu("123333 $")}}const R=[{path:"currency-report",component:(()=>{class n{constructor(l,s,B,U){this.currencyReportService=l,this.route=s,this.fb=B,this.http=U,this.filtersConfig=[{field:"from",label:"From",type:x.W.DATE,placeholder:"From"},{field:"to",label:"to",type:x.W.DATE,placeholder:"created_at"}],this.unsubscribe=new C.x,this.formGroup=this.initForm(),this.message="Not Found Currency Report",this.params={}}ngOnInit(){this.route.data.pipe((0,M.R)(this.unsubscribe)).subscribe({next:l=>{},error:l=>{}})}initForm(){return this.fb.group({from:[""],to:[""]})}get fromControl(){return this.formGroup.get("from")}get toControl(){return this.formGroup.get("to")}onSubmit(){this.currencyReportService.getData(this.formGroup.value).subscribe({next:l=>{this.data=l.data,this.message=0==this.data.accounts.length?"Not Found Trail Balance":""}})}onFilterApplied(l){this.params={},l.forEach(s=>{this.params[s.field]=s.value}),this.currencyReportService.getData(this.params).subscribe(s=>{this.report=s.data})}export(){this.http.get("groupType/export/tree-view-pdf").subscribe({next:l=>{window.open(l.file_path)}})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return n.\u0275fac=function(l){return new(l||n)(e.Y36(p),e.Y36(u.gz),e.Y36(m.qu),e.Y36(_.O))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-currency-report"]],decls:19,vars:17,consts:[[1,"page-card"],[1,"title"],[1,"d-flex","flex-row","align-items-center","justify-content-end"],[1,"mx-2"],[3,"text","click"],[3,"config","onFilterApplied"],["filter",""],[1,"btn-filter","text-light","box","row","my-3"],[1,"col-sm-6"],[1,"col-sm-6","d-flex"],["class","mx-3",4,"ngIf"],["class","alert text-danger text-center",4,"ngIf"],["class","table-responsive d-flex",4,"ngIf"],[1,"mx-3"],[1,"alert","text-danger","text-center"],[1,"table-responsive","d-flex"],[1,"table","me-3"],[1,"first"],[4,"ngFor","ngForOf"],[1,"total"],[1,""],[1,"table"]],template:function(l,s){1&l&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2),e.ALo(3,"titlecase"),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",2)(6,"div",3)(7,"app-button",4),e.NdJ("click",function(){return s.export()}),e.qZA()(),e.TgZ(8,"ukt-filter",5,6),e.NdJ("onFilterApplied",function(U){return s.onFilterApplied(U)}),e.qZA()(),e.TgZ(10,"div",7)(11,"p",8),e._uU(12),e.ALo(13,"titlecase"),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"div",9),e.YNc(16,y,4,8,"p",10),e.qZA()(),e.YNc(17,A,2,1,"p",11),e.YNc(18,P,39,24,"div",12),e.qZA()),2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,9,e.lcZ(4,11,"currency-report"))),e.xp6(5),e.Tol("btn-cancel"),e.Q6J("text","export"),e.xp6(1),e.Q6J("config",s.filtersConfig),e.xp6(4),e.Oqu(e.lcZ(13,13,e.lcZ(14,15,"currency-report"))),e.xp6(4),e.Q6J("ngIf",s.params.from),e.xp6(1),e.Q6J("ngIf",""!=s.message),e.xp6(1),e.Q6J("ngIf",""!=s.message))},dependencies:[t.sg,t.O5,O.r,b.z,t.rS,Z.X$],styles:["[_nghost-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   .table-responsive[_ngcontent-%COMP%]{font-size:1.4rem}[_nghost-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#979797!important;font-family:var(--Roboto);font-size:14px;font-weight:400;line-height:20px;min-width:160px}[_nghost-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]{min-width:350px}[_nghost-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background-color:var(--color16)!important;height:30px}[_nghost-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{background-color:var(--mainColor)}[_nghost-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-family:var(--Roboto);font-size:14px;font-weight:400;line-height:20px;color:var(--white);background-color:var(--mainColor)}"]}),n})()},{path:"balance-sheet",loadChildren:()=>o.e(70).then(o.bind(o,70)).then(n=>n.BalanceSheetModule),canActivate:[f.t],data:{permission:a.balanceSheet.view}},{path:"trial-balance",loadChildren:()=>Promise.all([o.e(1471),o.e(2487)]).then(o.bind(o,2487)).then(n=>n.TrialBalanceModule),canActivate:[f.t],data:{permission:a.trialBalance.view}},{path:"profit-and-loss",loadChildren:()=>o.e(7975).then(o.bind(o,7975)).then(n=>n.ProfitAndLossModule),canActivate:[f.t],data:{permission:a.profitAndLoss.view}},{path:"sales",loadChildren:()=>Promise.all([o.e(1471),o.e(2377),o.e(665)]).then(o.bind(o,665)).then(n=>n.SalesModule)},{path:"inventory",loadChildren:()=>Promise.all([o.e(1471),o.e(2377),o.e(7480)]).then(o.bind(o,7480)).then(n=>n.InventoryModule)}];let J=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(R),u.Bz]}),n})();var L=o(1383),S=o(1890),i=o(1019);let c=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[t.ez,L.m,J,S.f,i.i,Z.aw]}),n})()},2305:(T,h,o)=>{o.d(h,{b:()=>e});var t=o(9291),u=o(67),g=o(6223),a=o(6814),f=o(8057),x=o(3999);function v(d,_){1&d&&t._UZ(0,"i",6)}function C(d,_){if(1&d&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"translate"),t.TgZ(3,"span",4),t.YNc(4,v,1,0,"i",5),t.qZA()()),2&d){const p=t.oxw();t.xp6(1),t.hij("",t.lcZ(2,2,p.text)," "),t.xp6(3),t.Q6J("ngIf",p.control&&(null==p.control.errors?null:p.control.errors.required))}}function M(d,_){if(1&d&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&d){const p=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Oqu(t.lcZ(2,3,p.object.keys(p.control.errors)[0]))}}let e=(()=>{class d extends u.t{constructor(p){super(),this.formGroupDirective=p,this.readOnly=!1,this.class="d-flex justify-content-between align-items-center",this.change=new t.vpe,this.object=Object}writeValue(p){this.value=p}onValueChange(p){this.onChange(p),this.onTouched(),this.change.emit(p)}}return d.\u0275fac=function(p){return new(p||d)(t.Y36(g.sg,8))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-checkbox"]],inputs:{text:"text",value:"value",readOnly:"readOnly",class:"class"},outputs:{change:"change"},features:[t._Bn([{provide:g.JU,useExisting:d,multi:!0},{provide:g.Cf,useExisting:d,multi:!0}]),t.qOj],decls:4,vars:6,consts:[[3,"ngClass"],[4,"ngIf"],["inputId","binary",3,"ngModel","disabled","binary","ngModelChange","onChange"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(p,m){1&p&&(t.TgZ(0,"div",0),t.YNc(1,C,5,4,"label",1),t.TgZ(2,"p-checkbox",2),t.NdJ("ngModelChange",function(b){return m.value=b})("onChange",function(b){return m.onValueChange(b)}),t.qZA(),t.YNc(3,M,3,5,"span",3),t.qZA()),2&p&&(t.Q6J("ngClass",m.class),t.xp6(1),t.Q6J("ngIf",m.text),t.xp6(1),t.Q6J("ngModel",m.value)("disabled",m.readOnly)("binary",!0),t.xp6(1),t.Q6J("ngIf",m.control&&m.control.errors&&(m.control.touched||m.formGroupDirective.submitted)))},dependencies:[a.mk,a.O5,g.JJ,g.On,f.XZ,x.X$]}),d})()},5077:(T,h,o)=>{o.d(h,{z:()=>S});var t=o(9291),u=o(6924),g=o(5219),a=o(6814),f=o(6223),x=o(2305),v=o(8614),C=o(1904),M=o(3838),e=o(6098),d=o(9246);const _=["*"];let p=(()=>{class i{constructor(){this.sidebarVisible=!1,this.position="left"}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-sidebar"]],inputs:{sidebarVisible:"sidebarVisible",position:"position"},ngContentSelectors:_,decls:2,vars:3,consts:[[3,"visible","position","styleClass","visibleChange"]],template:function(n,r){1&n&&(t.F$t(),t.TgZ(0,"p-sidebar",0),t.NdJ("visibleChange",function(s){return r.sidebarVisible=s}),t.Hsn(1),t.qZA()),2&n&&t.Q6J("visible",r.sidebarVisible)("position","right")("styleClass","p-sidebar")},dependencies:[d.Y]}),i})();var m=o(4779);function O(i,c){1&i&&t.GkF(0)}function b(i,c){}function Z(i,c){1&i&&t.YNc(0,b,0,0,"ng-template")}const y=function(i,c){return{item:i,i:c}};function A(i,c){if(1&i&&(t.ynx(0),t.YNc(1,Z,1,0,null,11),t.BQk()),2&i){const n=c.$implicit,r=c.index;t.oxw();const l=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",l)("ngTemplateOutletContext",t.WLB(2,y,n,r))}}function F(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"div")(1,"app-text",14),t.NdJ("ngModelChange",function(l){t.CHM(n);const s=t.oxw().item;return t.KtG(s.value=l)}),t.qZA()()}if(2&i){const n=t.oxw().item;t.xp6(1),t.Tol(""),t.Q6J("text",n.label)("placeholder",n.placeholder)("ngModel",n.value)}}function E(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"div")(1,"app-dropdown",15),t.NdJ("ngModelChange",function(l){t.CHM(n);const s=t.oxw().item;return t.KtG(s.value=l)}),t.qZA()()}if(2&i){const n=t.oxw().item;t.xp6(1),t.Tol(""),t.Q6J("text",n.label)("data",n.data)("request",n.request)("showClear",!0)("ngModel",n.value)("placeholder",n.label)("editable",!1)("optionLabel",n.options.label)("optionValue",n.options.value)("filter",!0)("filterBy",n.options.label)}}function P(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"div")(1,"app-date",14),t.NdJ("ngModelChange",function(l){t.CHM(n);const s=t.oxw().item;return t.KtG(s.value=l)}),t.qZA()()}if(2&i){const n=t.oxw().item;t.xp6(1),t.Tol(""),t.Q6J("text",n.label)("placeholder",n.placeholder)("ngModel",n.value)}}function N(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"div")(1,"app-number-input",16),t.NdJ("ngModelChange",function(l){t.CHM(n);const s=t.oxw().item;return t.KtG(s.value=l)}),t.qZA()()}if(2&i){const n=t.oxw().item;t.xp6(1),t.Tol(""),t.Q6J("text",n.label)("ngModel",n.value)}}function R(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"div")(1,"app-checkbox",16),t.NdJ("ngModelChange",function(l){t.CHM(n);const s=t.oxw().item;return t.KtG(s.value=l)}),t.qZA()()}if(2&i){const n=t.oxw().item;t.xp6(1),t.Tol(""),t.Q6J("text",n.label)("ngModel",n.value)}}function J(i,c){if(1&i&&(t.TgZ(0,"div",12),t.YNc(1,F,2,5,"div",13),t.YNc(2,E,2,13,"div",13),t.YNc(3,P,2,5,"div",13),t.YNc(4,N,2,4,"div",13),t.YNc(5,R,2,4,"div",13),t.qZA()),2&i){const n=c.item,r=t.oxw(2);t.Q6J("ngSwitch",n.type),t.xp6(1),t.Q6J("ngSwitchCase",r.FilterInputTypeEnum.TEXT),t.xp6(1),t.Q6J("ngSwitchCase",r.FilterInputTypeEnum.SELECT),t.xp6(1),t.Q6J("ngSwitchCase",r.FilterInputTypeEnum.DATE),t.xp6(1),t.Q6J("ngSwitchCase",r.FilterInputTypeEnum.NUMBER),t.xp6(1),t.Q6J("ngSwitchCase",r.FilterInputTypeEnum.CHECKBOX)}}function L(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"div",5),t.YNc(1,A,2,5,"ng-container",6),t.YNc(2,J,6,6,"ng-template",null,7,t.W1O),t.TgZ(4,"div",8)(5,"app-button",9),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.applyFilters())}),t.qZA(),t.TgZ(6,"app-button",10),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.clearFilters())}),t.qZA()()()}if(2&i){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.config),t.xp6(4),t.Q6J("text",n.applyBtnLabel)("icon",n.icon.FILTER),t.xp6(1),t.Q6J("text",n.clearBtnLabel)}}let S=(()=>{class i{constructor(){this.onFilterApplied=new t.vpe,this.config=[],this.applyBtnLabel="apply",this.clearBtnLabel="clear",this.filterHeader="filters",this.icon=g.dv,this.sidebarVisible=!1,this.selectedFilters=[],this.appliedFilters=[],this.FilterInputTypeEnum=u.W}toggleSidebar(){this.sidebarVisible=!this.sidebarVisible}getAppliedFilters(){return this.appliedFilters}applyFilters(){this.appliedFilters=[],this.config.forEach(n=>{n.value&&n.field&&this.appliedFilters.push({field:n.field,value:n.value})}),this.onFilterApplied.next(this.appliedFilters),this.toggleSidebar()}clearFilters(){this.appliedFilters=[],this.config.forEach(n=>{n.value=null}),this.onFilterApplied.next(this.appliedFilters),this.toggleSidebar()}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ukt-filter"]],inputs:{config:"config",applyBtnLabel:"applyBtnLabel",clearBtnLabel:"clearBtnLabel",filterHeader:"filterHeader"},outputs:{onFilterApplied:"onFilterApplied"},decls:6,vars:7,consts:[[3,"text","icon","click"],[1,"d-flex","flex-row","align-items-center","justify-content-center"],[3,"sidebarVisible","position"],[4,"ngTemplateOutlet"],["filterOptions",""],[1,"d-flex","flex-column","align-items-between","justify-content-start"],[4,"ngFor","ngForOf"],["filter",""],[1,"row","p-3","gap-3"],[1,"col-12","btn-filter",3,"text","icon","click"],[1,"col-12",3,"text","click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"text","placeholder","ngModel","ngModelChange"],[3,"text","data","request","showClear","ngModel","placeholder","editable","optionLabel","optionValue","filter","filterBy","ngModelChange"],[3,"text","ngModel","ngModelChange"]],template:function(n,r){if(1&n&&(t.TgZ(0,"app-button",0),t.NdJ("click",function(){return r.toggleSidebar()}),t.qZA(),t.TgZ(1,"div",1)(2,"app-sidebar",2),t.YNc(3,O,1,0,"ng-container",3),t.qZA()(),t.YNc(4,L,7,4,"ng-template",null,4,t.W1O)),2&n){const l=t.MAs(5);t.Tol("btn-filter"),t.Q6J("text","filter")("icon",r.icon.FILTER),t.xp6(2),t.Q6J("sidebarVisible",r.sidebarVisible)("position","right"),t.xp6(1),t.Q6J("ngTemplateOutlet",l)}},dependencies:[a.sg,a.tP,a.RF,a.n9,f.JJ,f.On,x.b,v.T,C.D,M.J,e.I,p,m.r]}),i})()},6924:(T,h,o)=>{o.d(h,{W:()=>t});var t=function(u){return u.TEXT="TEXT",u.SELECT="SELECT",u.DATE="DATE",u.NUMBER="NUMBER",u.CHECKBOX="CHECKBOX",u}(t||{})},9773:(T,h,o)=>{o.d(h,{R:()=>f});var t=o(9360),u=o(8251),g=o(4829),a=o(2420);function f(x){return(0,t.e)((v,C)=>{(0,g.Xf)(x).subscribe((0,u.x)(C,()=>C.complete(),a.Z)),!C.closed&&v.subscribe(C)})}}}]);