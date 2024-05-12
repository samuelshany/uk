"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[2748],{68:(L,v,i)=>{i.d(v,{a:()=>e});const e={api:{create:"account/create",get:"account/with-group/all",getNotParent:"not-parents/accounts",getParent:"parents/accounts",getProfitLossParent:"profit-loss/parent-accounts",getById:"account/",update:"account/update/",delete:"account/",exportExample:"account/export/example",exportExampleSub:"account/export/example/sub",export:"account/export",exportPdf:"account/export/pdf",importAccount:"account/import",importAccountSub:"account/import/sub"},page:{}}},2748:(L,v,i)=>{i.r(v),i.d(v,{FinancialAccountsModule:()=>R});var e=i(6814),g=i(2954),t=i(9291),C=i(5861);const __api_create="profit-loss/create",__api_get="profit-loss",__api_update="profit-loss/update/",__api_delete="profit-loss/";var x=function(a){return a.list="View Financial Periods",a.create="Create Financial Period",a.update="Edit Financial Period",a.delete="Delete Financial Period",a.exportPdf="View Financial Periods",a.exportCvs="View Financial Periods",a.import="View Financial Periods",a}(x||{});const T=a=>{return{cols:[{field:"code",label:"id",class:""},{field:"name",label:"name",class:""},{field:"parent",label:"parent",class:""},{field:"current_amount",label:"current_amount",class:""},{field:"total_amount",label:"total_amount",class:""},{label:"action",actions:[{icon:"trash",class:"main-color",fun:(d=(0,C.Z)(function*(n){return yield a.financialAccountsService.delete(n,"delete journal")}),function(p){return d.apply(this,arguments)}),id:x.delete},{icon:"pen-to-square",class:"main-color",fun:function(){var d=(0,C.Z)(function*(n){return yield a.financialAccountsService.openDialogToUpdate(n)});return function(p){return d.apply(this,arguments)}}(),id:x.update}]}],Request:__api_get};var d};var m=i(6223),D=i(8645),O=i(68),b=i(8763),y=i(5118),A=i(3999),F=i(8614),M=i(3838),E=i(1771),w=i(4779);function l(a,d){if(1&a&&(t.TgZ(0,"p",22),t._uU(1),t.qZA()),2&a){const n=d.$implicit;t.xp6(1),t.hij(" ",n.value," ")}}const f=function(){return{type:"name",length:3}};let c=(()=>{class a{constructor(n,p,h,I,Z){this.fb=n,this.toaster=p,this.financialAccountsService=h,this.config=I,this.dialogRef=Z,this.accountConfig=O.a,this.unsubscribe=new D.x,this.formGroup=this.initForm(),this.config.data?.data&&this.fillDataToUpdate()}reject(n){this.dialogRef.close(n)}initForm(){return this.fb.group({id:[Number],retained_earning_parent_id:["",[m.kI.required]],retained_earning:["",[m.kI.required]],profit_loss_parent_id:["",[m.kI.required]],profit_loss:["",[m.kI.required]]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.financialAccountsService.update(this.formGroup.value).subscribe(n=>{this.toaster.success(n.message),this.dialogRef.close(!0)},n=>{this.toaster.error(n.error.message),this.errors=n.error.errors}):this.financialAccountsService.create(this.formGroup.value).subscribe(n=>{this.toaster.success(n.message),this.dialogRef.close(!0)},n=>{this.toaster.error(n.error.message),this.errors=n.error.errors})}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,retained_earning:this.config.data.data.title,retained_earning_parent_id:this.config.data.data.retained_earning_parent_id,profit_loss_parent_id:this.config.data.data.profit_loss_parent_id,profit_loss:this.config.data.data.profit_loss})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(m.qu),t.Y36(b._W),t.Y36(r),t.Y36(y.S),t.Y36(y.E7))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-new-financial-accounts"]],decls:27,vars:32,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-sm-12","col-md-12"],["text","profit&loss","formControlName","profit_loss","ngDefaultControl","","placeholder","",3,"patternMessage","type"],[1,"my-3"],["ngDefaultControl","","formControlName","profit_loss_parent_id",3,"request","placeholder","optionLabel","optionValue"],["text","retained_earnings","formControlName","retained_earning","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","retained_earning_parent_id",3,"text","request","placeholder","optionLabel","optionValue"],[1,"footer","d-flex","align-items-center","justify-content-between","my-3","gap-2"],[1,"cancel","w-100"],[1,"btn-cancel",3,"text","click"],[1,"create","w-100"],["translate","",3,"text","click"],[1,"text-error"]],template:function(n,p){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return p.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return p.accept()}),t.YNc(11,l,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"div",11),t._UZ(15,"app-text",12),t.qZA(),t.TgZ(16,"div",13),t._UZ(17,"app-dropdown",14),t.qZA(),t.TgZ(18,"div",11),t._UZ(19,"app-text",15),t.qZA(),t.TgZ(20,"div",13),t._UZ(21,"app-dropdown",16),t.qZA()(),t.TgZ(22,"div",17)(23,"div",18)(24,"app-button",19),t.NdJ("click",function(){return p.reject(!1)}),t.qZA()(),t.TgZ(25,"div",20)(26,"app-button",21),t.NdJ("click",function(){return p.accept()}),t.qZA()()()()()),2&n){let h;t.xp6(8),t.Oqu(t.lcZ(9,26,null!==(h=p.config.header)&&void 0!==h?h:"")),t.xp6(2),t.Q6J("formGroup",p.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,28,p.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(30,f))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("request",p.accountConfig.api.getProfitLossParent)("placeholder","select")("optionLabel","name")("optionValue","id"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(31,f))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","")("request",p.accountConfig.api.getProfitLossParent)("placeholder","select")("optionLabel","name")("optionValue","id"),t.xp6(3),t.Q6J("text","Cancel"),t.xp6(2),t.Q6J("text",p.config.data.acceptLabel)}},dependencies:[e.sg,A.Pi,F.T,M.J,E.U,m.Fj,m.JJ,m.JL,m.sg,m.u,w.r,e.Nd,A.X$]}),a})();var o=i(1732),u=i(3562);let r=(()=>{class a{constructor(n,p,h){this.http=n,this.dynamicDialog=p,this.toastr=h}get(n){return this.http.get(__api_get)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_financial_account",data:{acceptLabel:"add",rejectLabel:"cancel"},width:"500px",height:"auto"},c)}create(n){return this.http.post(__api_create,n)}delete(n){var p=this;return(0,C.Z)(function*(){const h={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...n},name:"name"},width:"300px",height:"164px"};return!!(yield p.dynamicDialog.confirm(h))&&p.http.delete(__api_delete+n.id).toPromise().then(Z=>(p.toastr.success(Z.message),Z)).catch(Z=>(p.toastr.error(Z.error.message),Z))})()}openDialogToUpdate(n){var p=this;return(0,C.Z)(function*(){const h={showHeader:!1,header:"update_financial_account",data:{acceptLabel:"update",rejectLabel:"cancel",data:{...n}},width:"480px",height:"auto"};return yield p.dynamicDialog.showDialogWithComponent(h,c)})()}update(n){return this.http.post(__api_update+n.id,n)}}return a.\u0275fac=function(n){return new(n||a)(t.LFG(o.O),t.LFG(u.U),t.LFG(b._W))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var s=i(2377);let U=(()=>{class a{constructor(n){this.financialAccountsService=n,this.tableConfig=T(this)}openDialogToCreate(){var n=this;return(0,C.Z)(function*(){(yield n.financialAccountsService.openDialogToCreate())&&(n.tableConfig=T(n))})()}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(r))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-list-financial-accounts"]],decls:9,vars:4,consts:[[1,"main"],[1,"d-flex","justify-content-between","align-items-center"],[1,"title"],[1,"d-flex","align-items-center"],["text","new",3,"click"],[1,"table"],[3,"tableConfig"]],template:function(n,p){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3)(6,"app-button",4),t.NdJ("click",function(){return p.openDialogToCreate()}),t.qZA()()(),t.TgZ(7,"div",5),t._UZ(8,"app-table",6),t.qZA()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,2,"list_all_of_financial_accounts")),t.xp6(5),t.Q6J("tableConfig",p.tableConfig))},dependencies:[s.a,w.r,A.X$]}),a})();const N=[{path:"",component:(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-financial-accounts"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(n,p){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-financial-accounts"),t.qZA())},dependencies:[U]}),a})()}];let P=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.Bz.forChild(N),g.Bz]}),a})();var j=i(1383),S=i(1890),Y=i(4413),G=i(9624),Q=i(9293),B=i(1471);let R=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[e.ez,P,j.m,A.aw,B.X,Q.Q,G.U,Y.e,S.f]}),a})()},67:(L,v,i)=>{i.d(v,{t:()=>e});class e{constructor(){this.readonly=!1,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.readonly=t}validate(t){return this.control||(this.control=t),null}}},1771:(L,v,i)=>{i.d(v,{U:()=>C});var e=i(9291),g=i(6223);const t=["*"];let C=(()=>{class _{constructor(){this.onSubmit=new e.vpe}ngOnChanges(T){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const T=this.getFormData();this.onSubmit.emit(T)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return _.\u0275fac=function(T){return new(T||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[e.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(T,m){1&T&&(e.F$t(),e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return m.submit()}),e.Hsn(1),e.qZA()),2&T&&e.Q6J("formGroup",m.formGroup)},dependencies:[g._Y,g.JL,g.sg]}),_})()},3838:(L,v,i)=>{i.d(v,{J:()=>c});var e=i(9291),g=i(67),t=i(6223),C=i(1732),_=i(6814),x=i(5219),T=i(3965),m=i(3999);function D(o,u){1&o&&e._UZ(0,"i",6)}function O(o,u){if(1&o&&(e.TgZ(0,"label"),e._uU(1),e.ALo(2,"translate"),e.TgZ(3,"span",4),e.YNc(4,D,1,0,"i",5),e.qZA()()),2&o){const r=e.oxw();e.xp6(1),e.hij("",e.lcZ(2,2,r.text)," "),e.xp6(3),e.Q6J("ngIf",r.control&&(null==r.control.errors?null:r.control.errors.required))}}function b(o,u){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"translate"),e.qZA()),2&o){const r=u.$implicit,s=e.oxw(2);e.xp6(1),e.hij("",e.lcZ(2,2,r[s.optionLabel])," => "),e.xp6(3),e.Oqu(e.lcZ(5,4,r[s.optionLabelGroup]))}}function y(o,u){1&o&&e.YNc(0,b,6,6,"ng-template",7)}function A(o,u){if(1&o&&(e._uU(0),e.ALo(1,"translate"),e.ALo(2,"translate")),2&o){const r=u.$implicit,s=e.oxw(2);e.AsE(" ",e.lcZ(1,2,r[s.optionLabel])," => ",e.lcZ(2,4,r[s.optionLabelGroup])," ")}}function F(o,u){1&o&&e.YNc(0,A,3,6,"ng-template",8)}function M(o,u){if(1&o&&(e._uU(0),e.ALo(1,"translate")),2&o){const r=u.$implicit,s=e.oxw(2);e.hij(" ",e.lcZ(1,1,r[s.optionLabel])," ")}}function E(o,u){1&o&&e.YNc(0,M,2,3,"ng-template",7)}function w(o,u){if(1&o&&(e._uU(0),e.ALo(1,"translate")),2&o){const r=u.$implicit,s=e.oxw(2);e.hij(" ",e.lcZ(1,1,r[s.optionLabel])," ")}}function l(o,u){1&o&&e.YNc(0,w,2,3,"ng-template",8)}function f(o,u){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o){const r=e.oxw();e.Tol("text-danger"),e.xp6(1),e.Oqu(e.lcZ(2,3,r.object.keys(r.control.errors)[0]))}}let c=(()=>{class o extends g.t{constructor(r,s){super(),this.formGroupDirective=r,this.http=s,this.showClear=!1,this.readOnly=!1,this.placeholder="select",this.class="d-flex justify-content-between align-items-center",this.filter=!0,this.viewOption="single",this.onDropDownChange=new e.vpe,this.object=Object}ngOnInit(){this.data||this.http.get(this.request).subscribe({next:r=>{if(!(r.meta&&r.meta.total>10))return this.data=r.data;this.http.getWithParam(this.request,{limit:r.meta.total}).subscribe({next:s=>this.data=s.data})},error:r=>{},complete:()=>{}})}writeValue(r){this.value=r}onValueChange(r){this.onChange(r.value),this.onTouched(),this.onDropDownChange.emit(r)}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(t.sg,8),e.Y36(C.O))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-dropdown"]],inputs:{value:"value",text:"text",data:"data",request:"request",optionLabel:"optionLabel",optionLabelGroup:"optionLabelGroup",optionValue:"optionValue",editable:"editable",showClear:"showClear",readOnly:"readOnly",placeholder:"placeholder",class:"class",filter:"filter",filterBy:"filterBy",viewOption:"viewOption"},outputs:{onDropDownChange:"onDropDownChange"},features:[e._Bn([{provide:t.JU,useExisting:o,multi:!0},{provide:t.Cf,useExisting:o,multi:!0}]),e.qOj],decls:9,vars:19,consts:[[3,"ngClass"],[4,"ngIf"],["appendTo","body",3,"options","ngModel","filter","filterBy","placeholder","editable","showClear","disabled","optionLabel","optionValue","ngModelChange","onChange"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"],["pTemplate","item"],["pTemplate","selectedItem"]],template:function(r,s){1&r&&(e.TgZ(0,"div",0),e.YNc(1,O,5,4,"label",1),e.TgZ(2,"p-dropdown",2),e.NdJ("ngModelChange",function(J){return s.value=J})("onChange",function(J){return s.onValueChange(J)}),e.ALo(3,"translate"),e.YNc(4,y,1,0,null,1),e.YNc(5,F,1,0,null,1),e.YNc(6,E,1,0,null,1),e.YNc(7,l,1,0,null,1),e.qZA(),e.YNc(8,f,3,5,"span",3),e.qZA()),2&r&&(e.Q6J("ngClass",s.class),e.xp6(1),e.Q6J("ngIf",s.text),e.xp6(1),e.Q6J("options",s.data)("ngModel",s.value)("filter",s.filter)("filterBy",s.optionLabel)("placeholder",e.lcZ(3,17,s.placeholder))("editable",s.editable)("showClear",s.showClear)("disabled",s.readOnly)("optionLabel",s.optionLabel)("optionValue",s.optionValue),e.xp6(2),e.Q6J("ngIf","group"==s.viewOption),e.xp6(1),e.Q6J("ngIf","group"==s.viewOption),e.xp6(1),e.Q6J("ngIf","single"==s.viewOption),e.xp6(1),e.Q6J("ngIf","single"==s.viewOption),e.xp6(1),e.Q6J("ngIf",s.control&&s.control.errors&&(s.control.touched||s.formGroupDirective.submitted)))},dependencies:[_.mk,_.O5,t.JJ,t.On,x.jx,T.Lt,m.X$]}),o})()},8614:(L,v,i)=>{i.d(v,{T:()=>w});var e=i(67),g=i(6223),t=i(9291),C=i(6814),_=i(3714),x=i(3999);function T(l,f){1&l&&t._UZ(0,"i",6)}function m(l,f){if(1&l&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"translate"),t.TgZ(3,"span",4),t.YNc(4,T,1,0,"i",5),t.qZA()()),2&l){const c=t.oxw();t.xp6(1),t.hij("",t.lcZ(2,2,c.text)," "),t.xp6(3),t.Q6J("ngIf",c.control&&(null==c.control.errors?null:c.control.errors.required))}}function D(l,f){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&l){const c=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Oqu(t.lcZ(2,3,c.object.keys(c.control.errors)[0]))}}function O(l,f){1&l&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&l&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"must_be_invalid_email")," "))}function b(l,f){1&l&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&l&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_name")," "))}function y(l,f){if(1&l&&(t.TgZ(0,"p"),t.YNc(1,b,3,3,"span",1),t.qZA()),2&l){const c=t.oxw(2);t.xp6(1),t.Q6J("ngIf",c.object.keys(c.control.errors)[0])}}function A(l,f){1&l&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&l&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_description")," "))}function F(l,f){1&l&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&l&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_phone")," "))}function M(l,f){1&l&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&l&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"invalid_data")," "))}function E(l,f){if(1&l&&(t.TgZ(0,"span")(1,"span",7),t.YNc(2,O,3,3,"p",8),t.YNc(3,y,2,1,"p",8),t.YNc(4,A,3,3,"p",8),t.YNc(5,F,3,3,"p",8),t.YNc(6,M,3,3,"p",9),t.qZA()()),2&l){const c=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Q6J("ngSwitch",c.patternMessage.type),t.xp6(1),t.Q6J("ngSwitchCase","email"),t.xp6(1),t.Q6J("ngSwitchCase","name"),t.xp6(1),t.Q6J("ngSwitchCase","description"),t.xp6(1),t.Q6J("ngSwitchCase","phone")}}let w=(()=>{class l extends e.t{constructor(c){super(),this.formGroupDirective=c,this.placeholder="",this.readOnly=!1,this.class="d-flex justify-content-between align-items-center",this.type="text",this.patternMessage={type:"text",length:1},this.object=Object}writeValue(c){this.value=c}onValueChange(c){this.onChange(c.target.value),this.onTouched()}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(g.sg,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-text"]],inputs:{value:"value",text:"text",placeholder:"placeholder",readOnly:"readOnly",class:"class",type:"type",patternMessage:"patternMessage"},features:[t._Bn([{provide:g.JU,useExisting:l,multi:!0},{provide:g.Cf,useExisting:l,multi:!0}]),t.qOj],decls:6,vars:10,consts:[[3,"ngClass"],[4,"ngIf"],["pInputText","",3,"type","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(c,o){1&c&&(t.TgZ(0,"div",0),t.YNc(1,m,5,4,"label",1),t.TgZ(2,"input",2),t.NdJ("ngModelChange",function(r){return o.value=r})("input",function(r){return o.onValueChange(r)}),t.ALo(3,"translate"),t.qZA(),t.YNc(4,D,3,5,"span",3),t.YNc(5,E,7,7,"span",3),t.qZA()),2&c&&(t.Q6J("ngClass",o.class),t.xp6(1),t.Q6J("ngIf",o.text),t.xp6(1),t.Q6J("type",o.type)("ngModel",o.value)("placeholder",t.lcZ(3,8,o.placeholder))("disabled",o.readOnly),t.xp6(2),t.Q6J("ngIf",o.control&&o.control.errors&&"pattern"!=o.object.keys(o.control.errors)[0]&&(o.control.touched||o.formGroupDirective.submitted)),t.xp6(1),t.Q6J("ngIf",o.control&&o.control.errors&&"pattern"==o.object.keys(o.control.errors)[0]&&(o.control.touched||o.formGroupDirective.submitted)))},dependencies:[C.mk,C.O5,C.RF,C.n9,C.ED,g.Fj,g.JJ,g.On,_.o,x.X$]}),l})()}}]);