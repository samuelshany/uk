"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[2748],{68:(L,x,a)=>{a.d(x,{a:()=>e});const e={api:{create:"account/create",get:"account/with-group/all",getNotParent:"not-parents/accounts",getParent:"parents/accounts",getProfitLossParent:"profit-loss/parent-accounts",getExpensesParent:"account/parent/expenses",getAssetsParent:"account/parent/assets",getById:"account/",update:"account/update/",delete:"account/",exportExample:"account/export/example",exportExampleSub:"account/export/example/sub",export:"account/export/parent",exportPdf:"account/export/pdf",importAccount:"account/import",importAccountSub:"account/import/sub"},page:{}}},2748:(L,x,a)=>{a.r(x),a.d(x,{FinancialAccountsModule:()=>R});var e=a(6814),g=a(8209),t=a(9291),h=a(5861);const m_api_create="profit-loss/create",m_api_get="profit-loss",m_api_update="profit-loss/update/",m_api_delete="profit-loss/";var A=function(o){return o.list="View Financial Periods",o.create="Create Financial Period",o.update="Edit Financial Period",o.delete="Delete Financial Period",o.exportPdf="View Financial Periods",o.exportCvs="View Financial Periods",o.import="View Financial Periods",o}(A||{});const v=o=>{return{cols:[{field:"code",label:"id",class:""},{field:"name",label:"name",class:""},{field:"parent",label:"parent",class:""},{field:"current_amount",label:"current_amount",class:""},{field:"total_amount",label:"total_amount",class:""},{label:"action",actions:[{icon:"trash",class:"main-color",fun:(d=(0,h.Z)(function*(n){return yield o.financialAccountsService.delete(n,"delete journal")}),function(s){return d.apply(this,arguments)}),id:A.delete},{icon:"pen-to-square",class:"main-color",fun:function(){var d=(0,h.Z)(function*(n){return yield o.financialAccountsService.openDialogToUpdate(n)});return function(s){return d.apply(this,arguments)}}(),id:A.update}]}],Request:m_api_get};var d};var _=a(6223),y=a(8645),O=a(68),b=a(8763),w=a(5118),D=a(3999),F=a(8614),c=a(3838),T=a(1771),r=a(4779);function l(o,d){if(1&o&&(t.TgZ(0,"p",17),t._uU(1),t.qZA()),2&o){const n=d.$implicit;t.xp6(1),t.hij(" ",n.value," ")}}const i=function(){return{type:"name",length:3}};function f(o,d){if(1&o&&(t.TgZ(0,"div")(1,"div",18),t._UZ(2,"app-text",19),t.qZA(),t.TgZ(3,"div",20),t._UZ(4,"app-dropdown",21),t.qZA()()),2&o){const n=t.oxw();t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(10,i))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("request",n.accountConfig.api.getProfitLossParent)("placeholder","select")("optionLabel","name")("optionValue","id")}}function p(o,d){if(1&o&&(t.TgZ(0,"div")(1,"div",18),t._UZ(2,"app-text",22),t.qZA(),t.TgZ(3,"div",20),t._UZ(4,"app-dropdown",23),t.qZA()()),2&o){const n=t.oxw();t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(11,i))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","")("request",n.accountConfig.api.getProfitLossParent)("placeholder","select")("optionLabel","name")("optionValue","id")}}let u=(()=>{class o{constructor(n,s,C,E,Z){this.fb=n,this.toaster=s,this.financialAccountsService=C,this.config=E,this.dialogRef=Z,this.accountConfig=O.a,this.unsubscribe=new y.x,this.formGroup=this.initForm(),this.config.data?.data&&this.fillDataToUpdate()}reject(n){this.dialogRef.close(n)}initForm(){return this.fb.group({id:[Number],account_for:[null],retained_earning_parent_id:["",[_.kI.required]],retained_earning:["",[_.kI.required]],profit_loss_parent_id:["",[_.kI.required]],profit_loss:["",[_.kI.required]]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.financialAccountsService.update(this.formGroup.value).subscribe(n=>{this.toaster.success(n.message),this.dialogRef.close(!0)},n=>{this.toaster.error(n.error.message),this.errors=n.error.errors}):this.financialAccountsService.create(this.formGroup.value).subscribe(n=>{this.toaster.success(n.message),this.dialogRef.close(!0)},n=>{this.toaster.error(n.error.message),this.errors=n.error.errors})}fillDataToUpdate(){console.log(),"profit_loss"==this.config.data.data.account_for?(this.formGroup.patchValue({id:this.config.data.data.id,retained_earning:null,retained_earning_parent_id:null,profit_loss_parent_id:this.config.data.data.parent_id,profit_loss:this.config.data.data.name,account_for:this.config.data.data.account_for}),this.formGroup.get("retained_earning_parent_id")?.clearValidators(),this.formGroup.get("retained_earning")?.clearValidators()):(this.formGroup.patchValue({id:this.config.data.data.id,retained_earning:this.config.data.data.name,retained_earning_parent_id:this.config.data.data.parent_id,profit_loss_parent_id:null,profit_loss:null,account_for:this.config.data.data.account_for}),this.formGroup.get("profit_loss_parent_id")?.clearValidators(),this.formGroup.get("profit_loss")?.clearValidators()),this.formGroup.get("profit_loss_parent_id")?.updateValueAndValidity(),this.formGroup.get("profit_loss")?.updateValueAndValidity(),this.formGroup.get("retained_earning_parent_id")?.updateValueAndValidity(),this.formGroup.get("retained_earning")?.updateValueAndValidity()}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(_.qu),t.Y36(b._W),t.Y36(U),t.Y36(w.S),t.Y36(w.E7))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-new-financial-accounts"]],decls:21,vars:11,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[4,"ngIf"],[1,"footer","d-flex","align-items-center","justify-content-between","my-3","gap-2"],[1,"cancel","w-100"],[1,"btn-cancel",3,"text","click"],[1,"create","w-100"],["translate","",3,"text","click"],[1,"text-error"],[1,"col-sm-12","col-md-12"],["text","profit&loss","formControlName","profit_loss","ngDefaultControl","","placeholder","",3,"patternMessage","type"],[1,"my-3"],["ngDefaultControl","","formControlName","profit_loss_parent_id",3,"request","placeholder","optionLabel","optionValue"],["text","retained_earnings","formControlName","retained_earning","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","retained_earning_parent_id",3,"text","request","placeholder","optionLabel","optionValue"]],template:function(n,s){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return s.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return s.accept()}),t.YNc(11,l,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10),t.YNc(14,f,5,11,"div",11),t.YNc(15,p,5,12,"div",11),t.qZA(),t.TgZ(16,"div",12)(17,"div",13)(18,"app-button",14),t.NdJ("click",function(){return s.reject(!1)}),t.qZA()(),t.TgZ(19,"div",15)(20,"app-button",16),t.NdJ("click",function(){return s.accept()}),t.qZA()()()()()),2&n){let C,E,Z;t.xp6(8),t.Oqu(t.lcZ(9,7,null!==(C=s.config.header)&&void 0!==C?C:"")),t.xp6(2),t.Q6J("formGroup",s.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,9,s.errors)),t.xp6(3),t.Q6J("ngIf","retained_earning"!=(null==(E=s.formGroup.get("account_for"))?null:E.value)),t.xp6(1),t.Q6J("ngIf","profit_loss"!=(null==(Z=s.formGroup.get("account_for"))?null:Z.value)),t.xp6(3),t.Q6J("text","Cancel"),t.xp6(2),t.Q6J("text",s.config.data.acceptLabel)}},dependencies:[e.sg,e.O5,D.Pi,F.T,c.J,T.U,_.Fj,_.JJ,_.JL,_.sg,_.u,r.r,e.Nd,D.X$]}),o})();var J=a(1732),M=a(3562);let U=(()=>{class o{constructor(n,s,C){this.http=n,this.dynamicDialog=s,this.toastr=C}get(n){return this.http.get(m_api_get)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_financial_account",data:{acceptLabel:"add",rejectLabel:"cancel"},width:"500px",height:"auto"},u)}create(n){return this.http.post(m_api_create,n)}delete(n){var s=this;return(0,h.Z)(function*(){const C={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...n},name:"name"},width:"300px",height:"164px"};return!!(yield s.dynamicDialog.confirm(C))&&s.http.delete(m_api_delete+n.id).toPromise().then(Z=>(s.toastr.success(Z.message),Z)).catch(Z=>(s.toastr.error(Z.error.message),Z))})()}openDialogToUpdate(n){var s=this;return(0,h.Z)(function*(){const C={showHeader:!1,header:"update_financial_account",data:{acceptLabel:"update",rejectLabel:"cancel",data:{...n}},width:"480px",height:"auto"};return yield s.dynamicDialog.showDialogWithComponent(C,u)})()}update(n){return this.http.post(m_api_update+n.id,n)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(J.O),t.LFG(M.U),t.LFG(b._W))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var I=a(2377);let P=(()=>{class o{constructor(n){this.financialAccountsService=n,this.tableConfig=v(this)}openDialogToCreate(){var n=this;return(0,h.Z)(function*(){(yield n.financialAccountsService.openDialogToCreate())&&(n.tableConfig=v(n))})()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(U))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-financial-accounts"]],decls:9,vars:4,consts:[[1,"main"],[1,"d-flex","justify-content-between","align-items-center"],[1,"title"],[1,"d-flex","align-items-center"],["text","new",3,"click"],[1,"table"],[3,"tableConfig"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3)(6,"app-button",4),t.NdJ("click",function(){return s.openDialogToCreate()}),t.qZA()()(),t.TgZ(7,"div",5),t._UZ(8,"app-table",6),t.qZA()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,2,"list_all_of_financial_accounts")),t.xp6(5),t.Q6J("tableConfig",s.tableConfig))},dependencies:[I.a,r.r,D.X$]}),o})();const N=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-financial-accounts"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-financial-accounts"),t.qZA())},dependencies:[P]}),o})()}];let j=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(N),g.Bz]}),o})();var G=a(1383),S=a(1890),V=a(4413),Q=a(9624),Y=a(9293),B=a(1471);let R=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[e.ez,j,G.m,D.aw,B.X,Y.Q,Q.U,V.e,S.f]}),o})()},67:(L,x,a)=>{a.d(x,{t:()=>e});class e{constructor(){this.readonly=!1,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.readonly=t}validate(t){return this.control||(this.control=t),null}}},1771:(L,x,a)=>{a.d(x,{U:()=>h});var e=a(9291),g=a(6223);const t=["*"];let h=(()=>{class m{constructor(){this.onSubmit=new e.vpe}ngOnChanges(v){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const v=this.getFormData();this.onSubmit.emit(v)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return m.\u0275fac=function(v){return new(v||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[e.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(v,_){1&v&&(e.F$t(),e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return _.submit()}),e.Hsn(1),e.qZA()),2&v&&e.Q6J("formGroup",_.formGroup)},dependencies:[g._Y,g.JL,g.sg]}),m})()},3838:(L,x,a)=>{a.d(x,{J:()=>F});var e=a(9291),g=a(67),t=a(6223),h=a(1732),m=a(6814),A=a(5219),v=a(3965),_=a(3999);function y(c,T){1&c&&e._UZ(0,"i",8)}function O(c,T){if(1&c&&(e.TgZ(0,"label"),e._uU(1),e.ALo(2,"titlecase"),e.ALo(3,"translate"),e.TgZ(4,"span",6),e.YNc(5,y,1,0,"i",7),e.qZA()()),2&c){const r=e.oxw();e.xp6(1),e.hij("",e.lcZ(2,2,e.lcZ(3,4,r.text))," "),e.xp6(4),e.Q6J("ngIf",r.control&&(null==r.control.errors?null:r.control.errors.required))}}function b(c,T){if(1&c&&(e._uU(0),e.ALo(1,"translate")),2&c){const r=T.$implicit,l=e.oxw();e.hij(" ",e.lcZ(1,1,r[l.optionLabel])," ")}}function w(c,T){if(1&c&&(e._uU(0),e.ALo(1,"translate")),2&c){const r=T.$implicit,l=e.oxw();e.hij(" ",e.lcZ(1,1,r[l.optionLabel])," ")}}function D(c,T){if(1&c&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&c){const r=e.oxw();e.Tol("text-danger"),e.xp6(1),e.Oqu(e.lcZ(2,3,r.object.keys(r.control.errors)[0]))}}let F=(()=>{class c extends g.t{constructor(r,l){super(),this.formGroupDirective=r,this.http=l,this.showClear=!1,this.readOnly=!1,this.placeholder="select",this.class="d-flex justify-content-between align-items-center",this.filter=!0,this.viewOption="single",this.onDropDownChange=new e.vpe,this.object=Object}ngOnInit(){!this.data&&this.request&&this.http.getWithParam(this.request,{limit:"all"}).subscribe({next:r=>this.data=r.data,error:r=>{},complete:()=>{}})}writeValue(r){this.value=r}onValueChange(r){this.onChange(r.value),this.onTouched(),this.onDropDownChange.emit(r)}}return c.\u0275fac=function(r){return new(r||c)(e.Y36(t.sg,8),e.Y36(h.O))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-dropdown"]],inputs:{value:"value",text:"text",data:"data",request:"request",optionLabel:"optionLabel",optionValue:"optionValue",editable:"editable",showClear:"showClear",readOnly:"readOnly",placeholder:"placeholder",class:"class",filter:"filter",filterBy:"filterBy",viewOption:"viewOption"},outputs:{onDropDownChange:"onDropDownChange"},features:[e._Bn([{provide:t.JU,useExisting:c,multi:!0},{provide:t.Cf,useExisting:c,multi:!0}]),e.qOj],decls:7,vars:15,consts:[[3,"ngClass"],[4,"ngIf"],["appendTo","body",3,"options","ngModel","filter","filterBy","placeholder","editable","showClear","disabled","optionLabel","optionValue","ngModelChange","onChange"],["pTemplate","item"],["pTemplate","selectedItem"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(r,l){1&r&&(e.TgZ(0,"div",0),e.YNc(1,O,6,6,"label",1),e.TgZ(2,"p-dropdown",2),e.NdJ("ngModelChange",function(f){return l.value=f})("onChange",function(f){return l.onValueChange(f)}),e.ALo(3,"translate"),e.YNc(4,b,2,3,"ng-template",3),e.YNc(5,w,2,3,"ng-template",4),e.qZA(),e.YNc(6,D,3,5,"span",5),e.qZA()),2&r&&(e.Q6J("ngClass",l.class),e.xp6(1),e.Q6J("ngIf",l.text),e.xp6(1),e.Q6J("options",l.data)("ngModel",l.value)("filter",l.filter)("filterBy",l.optionLabel)("placeholder",e.lcZ(3,13,l.placeholder))("editable",l.editable)("showClear",l.showClear)("disabled",l.readOnly)("optionLabel",l.optionLabel)("optionValue",l.optionValue),e.xp6(4),e.Q6J("ngIf",l.control&&l.control.errors&&(l.control.touched||l.formGroupDirective.submitted)))},dependencies:[m.mk,m.O5,t.JJ,t.On,A.jx,v.Lt,m.rS,_.X$]}),c})()},8614:(L,x,a)=>{a.d(x,{T:()=>l});var e=a(67),g=a(6223),t=a(9291),h=a(6814),m=a(3714),A=a(3999);function v(i,f){1&i&&t._UZ(0,"i",6)}function _(i,f){if(1&i&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.TgZ(4,"span",4),t.YNc(5,v,1,0,"i",5),t.qZA()()),2&i){const p=t.oxw();t.xp6(1),t.hij("",t.lcZ(2,2,t.lcZ(3,4,p.text))," "),t.xp6(4),t.Q6J("ngIf",p.control&&(null==p.control.errors?null:p.control.errors.required))}}function y(i,f){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i){const p=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Oqu(t.lcZ(2,3,p.object.keys(p.control.errors)[0]))}}function O(i,f){1&i&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"must_be_invalid_email")," "))}function b(i,f){1&i&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"must_be_number_only")," "))}function w(i,f){1&i&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_name")," "))}function D(i,f){if(1&i&&(t.TgZ(0,"p"),t.YNc(1,w,3,3,"span",1),t.qZA()),2&i){const p=t.oxw(2);t.xp6(1),t.Q6J("ngIf",p.object.keys(p.control.errors)[0])}}function F(i,f){1&i&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_description")," "))}function c(i,f){1&i&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_phone")," "))}function T(i,f){1&i&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_data")," "))}function r(i,f){if(1&i&&(t.TgZ(0,"span")(1,"span",7),t.YNc(2,O,3,3,"p",8),t.YNc(3,b,3,3,"p",8),t.YNc(4,D,2,1,"p",8),t.YNc(5,F,3,3,"p",8),t.YNc(6,c,3,3,"p",8),t.YNc(7,T,3,3,"p",9),t.qZA()()),2&i){const p=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Q6J("ngSwitch",p.patternMessage.type),t.xp6(1),t.Q6J("ngSwitchCase","email"),t.xp6(1),t.Q6J("ngSwitchCase","number"),t.xp6(1),t.Q6J("ngSwitchCase","name"),t.xp6(1),t.Q6J("ngSwitchCase","description"),t.xp6(1),t.Q6J("ngSwitchCase","phone")}}let l=(()=>{class i extends e.t{constructor(p){super(),this.formGroupDirective=p,this.placeholder="",this.readOnly=!1,this.class="d-flex justify-content-between align-items-center",this.type="text",this.patternMessage={type:"text",length:1},this.object=Object}writeValue(p){this.value=p}onValueChange(p){this.onChange(p.target.value),this.onTouched()}}return i.\u0275fac=function(p){return new(p||i)(t.Y36(g.sg,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-text"]],inputs:{value:"value",text:"text",placeholder:"placeholder",readOnly:"readOnly",class:"class",type:"type",patternMessage:"patternMessage"},features:[t._Bn([{provide:g.JU,useExisting:i,multi:!0},{provide:g.Cf,useExisting:i,multi:!0}]),t.qOj],decls:6,vars:10,consts:[[3,"ngClass"],[4,"ngIf"],["pInputText","",3,"type","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(p,u){1&p&&(t.TgZ(0,"div",0),t.YNc(1,_,6,6,"label",1),t.TgZ(2,"input",2),t.NdJ("ngModelChange",function(M){return u.value=M})("input",function(M){return u.onValueChange(M)}),t.ALo(3,"translate"),t.qZA(),t.YNc(4,y,3,5,"span",3),t.YNc(5,r,8,8,"span",3),t.qZA()),2&p&&(t.Q6J("ngClass",u.class),t.xp6(1),t.Q6J("ngIf",u.text),t.xp6(1),t.Q6J("type",u.type)("ngModel",u.value)("placeholder",t.lcZ(3,8,u.placeholder))("disabled",u.readOnly),t.xp6(2),t.Q6J("ngIf",u.control&&u.control.errors&&"pattern"!=u.object.keys(u.control.errors)[0]&&(u.control.touched||u.formGroupDirective.submitted)),t.xp6(1),t.Q6J("ngIf",u.control&&u.control.errors&&"pattern"==u.object.keys(u.control.errors)[0]&&(u.control.touched||u.formGroupDirective.submitted)))},dependencies:[h.mk,h.O5,h.RF,h.n9,h.ED,g.Fj,g.JJ,g.On,m.o,h.rS,A.X$]}),i})()}}]);