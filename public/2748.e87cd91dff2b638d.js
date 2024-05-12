"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[2748],{68:(w,T,i)=>{i.d(T,{a:()=>e});const e={api:{create:"account/create",get:"account/with-group/all",getNotParent:"not-parents/accounts",getParent:"parents/accounts",getProfitLossParent:"profit-loss/parent-accounts",getExpensesParent:"account/parent/expenses",getAssetsParent:"account/parent/assets",getById:"account/",update:"account/update/",delete:"account/",exportExample:"account/export/example",exportExampleSub:"account/export/example/sub",export:"account/export/parent",exportPdf:"account/export/pdf",importAccount:"account/import",importAccountSub:"account/import/sub"},page:{}}},2748:(w,T,i)=>{i.r(T),i.d(T,{FinancialAccountsModule:()=>R});var e=i(6814),m=i(2954),t=i(9291),h=i(5861);const g_api_create="profit-loss/create",g_api_get="profit-loss",g_api_update="profit-loss/update/",g_api_delete="profit-loss/";var x=function(a){return a.list="View Financial Periods",a.create="Create Financial Period",a.update="Edit Financial Period",a.delete="Delete Financial Period",a.exportPdf="View Financial Periods",a.exportCvs="View Financial Periods",a.import="View Financial Periods",a}(x||{});const C=a=>{return{cols:[{field:"code",label:"id",class:""},{field:"name",label:"name",class:""},{field:"parent",label:"parent",class:""},{field:"current_amount",label:"current_amount",class:""},{field:"total_amount",label:"total_amount",class:""},{label:"action",actions:[{icon:"trash",class:"main-color",fun:(u=(0,h.Z)(function*(n){return yield a.financialAccountsService.delete(n,"delete journal")}),function(s){return u.apply(this,arguments)}),id:x.delete},{icon:"pen-to-square",class:"main-color",fun:function(){var u=(0,h.Z)(function*(n){return yield a.financialAccountsService.openDialogToUpdate(n)});return function(s){return u.apply(this,arguments)}}(),id:x.update}]}],Request:g_api_get};var u};var d=i(6223),D=i(8645),O=i(68),y=i(8763),b=i(5118),Z=i(3999),F=i(8614),c=i(3838),v=i(1771),r=i(4779);function o(a,u){if(1&a&&(t.TgZ(0,"p",17),t._uU(1),t.qZA()),2&a){const n=u.$implicit;t.xp6(1),t.hij(" ",n.value," ")}}const f=function(){return{type:"name",length:3}};function l(a,u){if(1&a&&(t.TgZ(0,"div")(1,"div",18),t._UZ(2,"app-text",19),t.qZA(),t.TgZ(3,"div",20),t._UZ(4,"app-dropdown",21),t.qZA()()),2&a){const n=t.oxw();t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(10,f))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("request",n.accountConfig.api.getProfitLossParent)("placeholder","select")("optionLabel","name")("optionValue","id")}}function p(a,u){if(1&a&&(t.TgZ(0,"div")(1,"div",18),t._UZ(2,"app-text",22),t.qZA(),t.TgZ(3,"div",20),t._UZ(4,"app-dropdown",23),t.qZA()()),2&a){const n=t.oxw();t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(11,f))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","")("request",n.accountConfig.api.getProfitLossParent)("placeholder","select")("optionLabel","name")("optionValue","id")}}let E=(()=>{class a{constructor(n,s,_,M,A){this.fb=n,this.toaster=s,this.financialAccountsService=_,this.config=M,this.dialogRef=A,this.accountConfig=O.a,this.unsubscribe=new D.x,this.formGroup=this.initForm(),this.config.data?.data&&this.fillDataToUpdate()}reject(n){this.dialogRef.close(n)}initForm(){return this.fb.group({id:[Number],account_for:[null],retained_earning_parent_id:["",[d.kI.required]],retained_earning:["",[d.kI.required]],profit_loss_parent_id:["",[d.kI.required]],profit_loss:["",[d.kI.required]]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.financialAccountsService.update(this.formGroup.value).subscribe(n=>{this.toaster.success(n.message),this.dialogRef.close(!0)},n=>{this.toaster.error(n.error.message),this.errors=n.error.errors}):this.financialAccountsService.create(this.formGroup.value).subscribe(n=>{this.toaster.success(n.message),this.dialogRef.close(!0)},n=>{this.toaster.error(n.error.message),this.errors=n.error.errors})}fillDataToUpdate(){console.log(),"profit_loss"==this.config.data.data.account_for?(this.formGroup.patchValue({id:this.config.data.data.id,retained_earning:null,retained_earning_parent_id:null,profit_loss_parent_id:this.config.data.data.parent_id,profit_loss:this.config.data.data.name,account_for:this.config.data.data.account_for}),this.formGroup.get("retained_earning_parent_id")?.clearValidators(),this.formGroup.get("retained_earning")?.clearValidators()):(this.formGroup.patchValue({id:this.config.data.data.id,retained_earning:this.config.data.data.name,retained_earning_parent_id:this.config.data.data.parent_id,profit_loss_parent_id:null,profit_loss:null,account_for:this.config.data.data.account_for}),this.formGroup.get("profit_loss_parent_id")?.clearValidators(),this.formGroup.get("profit_loss")?.clearValidators()),this.formGroup.get("profit_loss_parent_id")?.updateValueAndValidity(),this.formGroup.get("profit_loss")?.updateValueAndValidity(),this.formGroup.get("retained_earning_parent_id")?.updateValueAndValidity(),this.formGroup.get("retained_earning")?.updateValueAndValidity()}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(d.qu),t.Y36(y._W),t.Y36(J),t.Y36(b.S),t.Y36(b.E7))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-new-financial-accounts"]],decls:21,vars:11,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[4,"ngIf"],[1,"footer","d-flex","align-items-center","justify-content-between","my-3","gap-2"],[1,"cancel","w-100"],[1,"btn-cancel",3,"text","click"],[1,"create","w-100"],["translate","",3,"text","click"],[1,"text-error"],[1,"col-sm-12","col-md-12"],["text","profit&loss","formControlName","profit_loss","ngDefaultControl","","placeholder","",3,"patternMessage","type"],[1,"my-3"],["ngDefaultControl","","formControlName","profit_loss_parent_id",3,"request","placeholder","optionLabel","optionValue"],["text","retained_earnings","formControlName","retained_earning","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","retained_earning_parent_id",3,"text","request","placeholder","optionLabel","optionValue"]],template:function(n,s){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return s.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return s.accept()}),t.YNc(11,o,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10),t.YNc(14,l,5,11,"div",11),t.YNc(15,p,5,12,"div",11),t.qZA(),t.TgZ(16,"div",12)(17,"div",13)(18,"app-button",14),t.NdJ("click",function(){return s.reject(!1)}),t.qZA()(),t.TgZ(19,"div",15)(20,"app-button",16),t.NdJ("click",function(){return s.accept()}),t.qZA()()()()()),2&n){let _,M,A;t.xp6(8),t.Oqu(t.lcZ(9,7,null!==(_=s.config.header)&&void 0!==_?_:"")),t.xp6(2),t.Q6J("formGroup",s.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,9,s.errors)),t.xp6(3),t.Q6J("ngIf","retained_earning"!=(null==(M=s.formGroup.get("account_for"))?null:M.value)),t.xp6(1),t.Q6J("ngIf","profit_loss"!=(null==(A=s.formGroup.get("account_for"))?null:A.value)),t.xp6(3),t.Q6J("text","Cancel"),t.xp6(2),t.Q6J("text",s.config.data.acceptLabel)}},dependencies:[e.sg,e.O5,Z.Pi,F.T,c.J,v.U,d.Fj,d.JJ,d.JL,d.sg,d.u,r.r,e.Nd,Z.X$]}),a})();var L=i(1732),U=i(3562);let J=(()=>{class a{constructor(n,s,_){this.http=n,this.dynamicDialog=s,this.toastr=_}get(n){return this.http.get(g_api_get)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_financial_account",data:{acceptLabel:"add",rejectLabel:"cancel"},width:"500px",height:"auto"},E)}create(n){return this.http.post(g_api_create,n)}delete(n){var s=this;return(0,h.Z)(function*(){const _={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...n},name:"name"},width:"300px",height:"164px"};return!!(yield s.dynamicDialog.confirm(_))&&s.http.delete(g_api_delete+n.id).toPromise().then(A=>(s.toastr.success(A.message),A)).catch(A=>(s.toastr.error(A.error.message),A))})()}openDialogToUpdate(n){var s=this;return(0,h.Z)(function*(){const _={showHeader:!1,header:"update_financial_account",data:{acceptLabel:"update",rejectLabel:"cancel",data:{...n}},width:"480px",height:"auto"};return yield s.dynamicDialog.showDialogWithComponent(_,E)})()}update(n){return this.http.post(g_api_update+n.id,n)}}return a.\u0275fac=function(n){return new(n||a)(t.LFG(L.O),t.LFG(U.U),t.LFG(y._W))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var I=i(2377);let P=(()=>{class a{constructor(n){this.financialAccountsService=n,this.tableConfig=C(this)}openDialogToCreate(){var n=this;return(0,h.Z)(function*(){(yield n.financialAccountsService.openDialogToCreate())&&(n.tableConfig=C(n))})()}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(J))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-list-financial-accounts"]],decls:9,vars:4,consts:[[1,"main"],[1,"d-flex","justify-content-between","align-items-center"],[1,"title"],[1,"d-flex","align-items-center"],["text","new",3,"click"],[1,"table"],[3,"tableConfig"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3)(6,"app-button",4),t.NdJ("click",function(){return s.openDialogToCreate()}),t.qZA()()(),t.TgZ(7,"div",5),t._UZ(8,"app-table",6),t.qZA()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,2,"list_all_of_financial_accounts")),t.xp6(5),t.Q6J("tableConfig",s.tableConfig))},dependencies:[I.a,r.r,Z.X$]}),a})();const N=[{path:"",component:(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-financial-accounts"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-financial-accounts"),t.qZA())},dependencies:[P]}),a})()}];let j=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.Bz.forChild(N),m.Bz]}),a})();var G=i(1383),S=i(1890),V=i(4413),Q=i(9624),Y=i(9293),B=i(1471);let R=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[e.ez,j,G.m,Z.aw,B.X,Y.Q,Q.U,V.e,S.f]}),a})()},67:(w,T,i)=>{i.d(T,{t:()=>e});class e{constructor(){this.readonly=!1,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.readonly=t}validate(t){return this.control||(this.control=t),null}}},1771:(w,T,i)=>{i.d(T,{U:()=>h});var e=i(9291),m=i(6223);const t=["*"];let h=(()=>{class g{constructor(){this.onSubmit=new e.vpe}ngOnChanges(C){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const C=this.getFormData();this.onSubmit.emit(C)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return g.\u0275fac=function(C){return new(C||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[e.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(C,d){1&C&&(e.F$t(),e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return d.submit()}),e.Hsn(1),e.qZA()),2&C&&e.Q6J("formGroup",d.formGroup)},dependencies:[m._Y,m.JL,m.sg]}),g})()},3838:(w,T,i)=>{i.d(T,{J:()=>F});var e=i(9291),m=i(67),t=i(6223),h=i(1732),g=i(6814),x=i(5219),C=i(3965),d=i(3999);function D(c,v){1&c&&e._UZ(0,"i",8)}function O(c,v){if(1&c&&(e.TgZ(0,"label"),e._uU(1),e.ALo(2,"translate"),e.TgZ(3,"span",6),e.YNc(4,D,1,0,"i",7),e.qZA()()),2&c){const r=e.oxw();e.xp6(1),e.hij("",e.lcZ(2,2,r.text)," "),e.xp6(3),e.Q6J("ngIf",r.control&&(null==r.control.errors?null:r.control.errors.required))}}function y(c,v){if(1&c&&(e._uU(0),e.ALo(1,"translate")),2&c){const r=v.$implicit,o=e.oxw();e.hij(" ",e.lcZ(1,1,r[o.optionLabel])," ")}}function b(c,v){if(1&c&&(e._uU(0),e.ALo(1,"translate")),2&c){const r=v.$implicit,o=e.oxw();e.hij(" ",e.lcZ(1,1,r[o.optionLabel])," ")}}function Z(c,v){if(1&c&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&c){const r=e.oxw();e.Tol("text-danger"),e.xp6(1),e.Oqu(e.lcZ(2,3,r.object.keys(r.control.errors)[0]))}}let F=(()=>{class c extends m.t{constructor(r,o){super(),this.formGroupDirective=r,this.http=o,this.showClear=!1,this.readOnly=!1,this.placeholder="select",this.class="d-flex justify-content-between align-items-center",this.filter=!0,this.viewOption="single",this.onDropDownChange=new e.vpe,this.object=Object}ngOnInit(){this.data||this.http.get(this.request).subscribe({next:r=>{if(!(r.meta&&r.meta.total>10))return this.data=r.data;this.http.getWithParam(this.request,{limit:r.meta.total}).subscribe({next:o=>this.data=o.data})},error:r=>{},complete:()=>{}})}writeValue(r){this.value=r}onValueChange(r){this.onChange(r.value),this.onTouched(),this.onDropDownChange.emit(r)}}return c.\u0275fac=function(r){return new(r||c)(e.Y36(t.sg,8),e.Y36(h.O))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-dropdown"]],inputs:{value:"value",text:"text",data:"data",request:"request",optionLabel:"optionLabel",optionValue:"optionValue",editable:"editable",showClear:"showClear",readOnly:"readOnly",placeholder:"placeholder",class:"class",filter:"filter",filterBy:"filterBy",viewOption:"viewOption"},outputs:{onDropDownChange:"onDropDownChange"},features:[e._Bn([{provide:t.JU,useExisting:c,multi:!0},{provide:t.Cf,useExisting:c,multi:!0}]),e.qOj],decls:7,vars:15,consts:[[3,"ngClass"],[4,"ngIf"],["appendTo","body",3,"options","ngModel","filter","filterBy","placeholder","editable","showClear","disabled","optionLabel","optionValue","ngModelChange","onChange"],["pTemplate","item"],["pTemplate","selectedItem"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0),e.YNc(1,O,5,4,"label",1),e.TgZ(2,"p-dropdown",2),e.NdJ("ngModelChange",function(l){return o.value=l})("onChange",function(l){return o.onValueChange(l)}),e.ALo(3,"translate"),e.YNc(4,y,2,3,"ng-template",3),e.YNc(5,b,2,3,"ng-template",4),e.qZA(),e.YNc(6,Z,3,5,"span",5),e.qZA()),2&r&&(e.Q6J("ngClass",o.class),e.xp6(1),e.Q6J("ngIf",o.text),e.xp6(1),e.Q6J("options",o.data)("ngModel",o.value)("filter",o.filter)("filterBy",o.optionLabel)("placeholder",e.lcZ(3,13,o.placeholder))("editable",o.editable)("showClear",o.showClear)("disabled",o.readOnly)("optionLabel",o.optionLabel)("optionValue",o.optionValue),e.xp6(4),e.Q6J("ngIf",o.control&&o.control.errors&&(o.control.touched||o.formGroupDirective.submitted)))},dependencies:[g.mk,g.O5,t.JJ,t.On,x.jx,C.Lt,d.X$]}),c})()},8614:(w,T,i)=>{i.d(T,{T:()=>r});var e=i(67),m=i(6223),t=i(9291),h=i(6814),g=i(3714),x=i(3999);function C(o,f){1&o&&t._UZ(0,"i",6)}function d(o,f){if(1&o&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"translate"),t.TgZ(3,"span",4),t.YNc(4,C,1,0,"i",5),t.qZA()()),2&o){const l=t.oxw();t.xp6(1),t.hij("",t.lcZ(2,2,l.text)," "),t.xp6(3),t.Q6J("ngIf",l.control&&(null==l.control.errors?null:l.control.errors.required))}}function D(o,f){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const l=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Oqu(t.lcZ(2,3,l.object.keys(l.control.errors)[0]))}}function O(o,f){1&o&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"must_be_invalid_email")," "))}function y(o,f){1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_name")," "))}function b(o,f){if(1&o&&(t.TgZ(0,"p"),t.YNc(1,y,3,3,"span",1),t.qZA()),2&o){const l=t.oxw(2);t.xp6(1),t.Q6J("ngIf",l.object.keys(l.control.errors)[0])}}function Z(o,f){1&o&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_description")," "))}function F(o,f){1&o&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_phone")," "))}function c(o,f){1&o&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_data")," "))}function v(o,f){if(1&o&&(t.TgZ(0,"span")(1,"span",7),t.YNc(2,O,3,3,"p",8),t.YNc(3,b,2,1,"p",8),t.YNc(4,Z,3,3,"p",8),t.YNc(5,F,3,3,"p",8),t.YNc(6,c,3,3,"p",9),t.qZA()()),2&o){const l=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Q6J("ngSwitch",l.patternMessage.type),t.xp6(1),t.Q6J("ngSwitchCase","email"),t.xp6(1),t.Q6J("ngSwitchCase","name"),t.xp6(1),t.Q6J("ngSwitchCase","description"),t.xp6(1),t.Q6J("ngSwitchCase","phone")}}let r=(()=>{class o extends e.t{constructor(l){super(),this.formGroupDirective=l,this.placeholder="",this.readOnly=!1,this.class="d-flex justify-content-between align-items-center",this.type="text",this.patternMessage={type:"text",length:1},this.object=Object}writeValue(l){this.value=l}onValueChange(l){this.onChange(l.target.value),this.onTouched()}}return o.\u0275fac=function(l){return new(l||o)(t.Y36(m.sg,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-text"]],inputs:{value:"value",text:"text",placeholder:"placeholder",readOnly:"readOnly",class:"class",type:"type",patternMessage:"patternMessage"},features:[t._Bn([{provide:m.JU,useExisting:o,multi:!0},{provide:m.Cf,useExisting:o,multi:!0}]),t.qOj],decls:6,vars:10,consts:[[3,"ngClass"],[4,"ngIf"],["pInputText","",3,"type","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(l,p){1&l&&(t.TgZ(0,"div",0),t.YNc(1,d,5,4,"label",1),t.TgZ(2,"input",2),t.NdJ("ngModelChange",function(L){return p.value=L})("input",function(L){return p.onValueChange(L)}),t.ALo(3,"translate"),t.qZA(),t.YNc(4,D,3,5,"span",3),t.YNc(5,v,7,7,"span",3),t.qZA()),2&l&&(t.Q6J("ngClass",p.class),t.xp6(1),t.Q6J("ngIf",p.text),t.xp6(1),t.Q6J("type",p.type)("ngModel",p.value)("placeholder",t.lcZ(3,8,p.placeholder))("disabled",p.readOnly),t.xp6(2),t.Q6J("ngIf",p.control&&p.control.errors&&"pattern"!=p.object.keys(p.control.errors)[0]&&(p.control.touched||p.formGroupDirective.submitted)),t.xp6(1),t.Q6J("ngIf",p.control&&p.control.errors&&"pattern"==p.object.keys(p.control.errors)[0]&&(p.control.touched||p.formGroupDirective.submitted)))},dependencies:[h.mk,h.O5,h.RF,h.n9,h.ED,m.Fj,m.JJ,m.On,g.o,x.X$]}),o})()}}]);