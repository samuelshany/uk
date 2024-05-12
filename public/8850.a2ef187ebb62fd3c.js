"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[8850],{68:(v,b,n)=>{n.d(b,{a:()=>i});const i={api:{create:"account/create",get:"account/with-group/all",getNotParent:"not-parents/accounts",getParent:"parents/accounts",getProfitLossParent:"profit-loss/parent-accounts",getExpensesParent:"account/parent/expenses",getRevenueParent:"account/parent/revenue",getAssetsParent:"account/parent/assets",getById:"account/",update:"account/update/",delete:"account/",exportExample:"account/export/example",exportExampleSub:"account/export/example/sub",export:"account/export/parent",exportPdf:"account/export/pdf",importAccount:"account/import",importAccountSub:"account/import/sub"},page:{}}},8850:(v,b,n)=>{n.r(b),n.d(b,{SafeAccountModule:()=>et});var i=n(6814),x=n(8209),t=n(9291),m=n(5861),u=function(o){return o.list="View Accounts",o.create="Create Account",o.update="Edit Account",o.delete="Delete Account",o.import="Import Accounts",o.export="Export Accounts",o}(u||{}),g=n(6924),h=n(5946);const f_api_create="account/create",f_api_get="account?is_safe=1",f_api_update="account/update/",f_api_delete="account/",f_api_exportExample="account/export/example",f_api_export="account/export/parent",f_api_importAccount="account/import",C=o=>{return{cols:[{field:"code",label:"code",class:""},{field:"name",label:"name",class:""},{field:"group",label:"account_group",class:""},{field:"parent",label:"account_parent",format:c=>c.parent?c.parent:"-"},{field:"total_debit",label:"balance_debit",format:c=>c.total_debit?c.total_debit:"0"},{field:"total_credit",label:"balance_credit",format:c=>c.total_credit?c.total_credit:"0"},{field:"account_type",label:"account_type"},{label:"action",actions:[{id:u.delete,icon:"trash",class:"main-color",fun:(c=(0,m.Z)(function*(e){return yield o.safeAccountService.delete(e,"delete account")}),function(a){return c.apply(this,arguments)})},{id:u.update,icon:"pen-to-square",class:"main-color",fun:function(){var c=(0,m.Z)(function*(e){return yield o.safeAccountService.openDialogToUpdate(e)});return function(a){return c.apply(this,arguments)}}()}]}],Request:f_api_get,titleRow:"name_code"};var c};var F=n(68),L=n(8645),s=n(6223),S=n(8763),T=n(5118),A=n(3999),J=n(1771),N=n(2305),G=n(8614),U=n(1904),P=n(3838),Z=n(4779);function E(o,c){if(1&o&&(t.TgZ(0,"p",25),t._uU(1),t.qZA()),2&o){const e=c.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}let _=(()=>{class o{constructor(e,a,r,l,p){this.fb=e,this.toastr=a,this.config=r,this.dialogRef=l,this.safeAccountService=p,this.accountConfig=F.a,this.unsubscribe=new L.x,this.formGroup=this.initForm(),this.types=[{name:"Both",id:"both"},{name:"Credit",id:"credit"},{name:"Debit",id:"debit"}],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){}initForm(){return this.fb.group({id:[Number],name:["",[s.kI.required]],opening_balance_debit:[0,[s.kI.required]],opening_balance_credit:[0,[s.kI.required]],account_type:["both",s.kI.required],parent_code:["",s.kI.required],is_parent:[0],is_safe:[1],change_currency:[0]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.safeAccountService.update(this.formGroup.value).subscribe(e=>{this.toastr.success(e.message),this.ClosePopUp(!0)},e=>{this.errors=e.error.errors}):this.safeAccountService.addAccount(this.formGroup.value).subscribe(e=>{this.toastr.success(e.message),this.ClosePopUp(!0)},e=>{this.errors=e.error.errors})}change_currency(e){e.checked?this.formGroup.get("change_currency")?.patchValue(1):this.formGroup.get("change_currency")?.patchValue(0)}ClosePopUp(e){this.dialogRef.close(e)}fillDataToUpdate(){""==this.config.data?.data?.parent_id||null==this.config.data?.data?.parent_id?this.formGroup.addControl("group_id",new s.NI(this.config.data?.data?.group_id)):this.formGroup.addControl("parent_id",new s.NI(this.config.data?.data?.parent_id)),console.log(this.config?.data?.data?.change_currency),this.formGroup.patchValue({id:this.config.data.data.id,name:this.config.data.data.name,parent_code:this.config.data?.data?.parent_code,account_type:this.config.data.data?.account_type,opening_balance_debit:this.config.data.data?.opening_balance_debit,opening_balance_credit:this.config.data.data?.opening_balance_credit})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.qu),t.Y36(S._W),t.Y36(T.S),t.Y36(T.E7),t.Y36(D))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-new-safe-account"]],decls:32,vars:43,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[1,"form"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],[1,"row"],[1,"col-12","my-3"],["ngDefaultControl","","formControlName","parent_code",3,"filter","text","request","optionLabel","optionValue","placeholder"],[1,"my-3"],[3,"value","text","change"],["ngDefaultControl","","placeholder","","formControlName","opening_balance_debit",1,"d-block",3,"showButtons","mode","maxFractionDigits","minFractionDigits","text"],["ngDefaultControl","","placeholder","","formControlName","opening_balance_credit",1,"d-block",3,"showButtons","mode","maxFractionDigits","minFractionDigits","text"],["ngDefaultControl","","formControlName","account_type",3,"text","data","optionLabel","optionValue","placeholder"],[1,"footer","row","g-2","my-3"],[1,"cancel","col-6"],[1,"btn-cancel",3,"text","click"],[1,"create","col-6"],["translate","",3,"text","click"],[1,"text-error"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return a.ClosePopUp(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"titlecase"),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"div",8)(12,"app-form",9),t.NdJ("onSubmit",function(){return a.accept()}),t.YNc(13,E,2,1,"p",10),t.ALo(14,"keyvalue"),t._UZ(15,"app-text",11),t.TgZ(16,"div",12)(17,"div",13),t._UZ(18,"app-dropdown",14),t.qZA(),t.TgZ(19,"div",15)(20,"app-checkbox",16),t.NdJ("change",function(l){return a.change_currency(l)}),t.qZA()()(),t.TgZ(21,"div",13),t._UZ(22,"app-number-input",17),t.qZA(),t.TgZ(23,"div",13),t._UZ(24,"app-number-input",18),t.qZA(),t.TgZ(25,"div",13),t._UZ(26,"app-dropdown",19),t.qZA()(),t.TgZ(27,"div",20)(28,"div",21)(29,"app-button",22),t.NdJ("click",function(){return a.ClosePopUp(!1)}),t.qZA()(),t.TgZ(30,"div",23)(31,"app-button",24),t.NdJ("click",function(){return a.accept()}),t.qZA()()()()()),2&e){let r,l;t.xp6(8),t.Oqu(t.lcZ(9,37,t.lcZ(10,39,null!==(r=a.config.header)&&void 0!==r?r:""))),t.xp6(4),t.Q6J("formGroup",a.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(14,41,a.errors)),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("type","text"),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("filter",!0)("text","parent")("request","groups-accounts")("optionLabel","name_code")("optionValue","code")("placeholder","select"),t.xp6(2),t.Tol("d-flex align-items-center mt-2  flex-row-reverse justify-content-end gap-2"),t.Q6J("value",1==(null==(l=a.formGroup.get("change_currency"))?null:l.value))("text","change-currency"),t.xp6(2),t.Q6J("showButtons",!1)("mode","decimal")("maxFractionDigits",3)("minFractionDigits",2)("text","opening_balance_debit"),t.xp6(2),t.Q6J("showButtons",!1)("mode","decimal")("maxFractionDigits",3)("minFractionDigits",2)("text","opening_balance_credit"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","account_type")("data",a.types)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(3),t.Q6J("text","Cancel"),t.xp6(2),t.Q6J("text",a.config.data.acceptLabel)}},dependencies:[i.sg,A.Pi,J.U,s.Fj,s.JJ,s.JL,s.sg,s.u,N.b,G.T,U.D,P.J,Z.r,i.rS,i.Nd,A.X$]}),o})();var w=n(1732),I=n(3562);let D=(()=>{class o{constructor(e,a,r){this.http=e,this.dynamicDialog=a,this.toastr=r}getAccounts(e){return this.http.get(f_api_get)}openDialogToCreate(e){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_safe_account",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},_)}addAccount(e){return this.http.post(f_api_create,e)}exportExample(){return this.http.get(f_api_exportExample)}export(){return this.http.get(f_api_export)}delete(e){var a=this;return(0,m.Z)(function*(){const r={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e},name:"name"},width:"480px",height:"164px"};if(!(yield a.dynamicDialog.confirm(r)))return!1;try{const p=yield a.http.delete(f_api_delete+e.id).toPromise();return a.toastr.success(p.message),p}catch(p){return a.toastr.error(p.error.message),p}})()}openDialogToUpdate(e,a,r){var l=this;return(0,m.Z)(function*(){const p={showHeader:!1,header:"update_account",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"480px",height:"auto"};return yield l.dynamicDialog.showDialogWithComponent(p,_)})()}update(e){return this.http.post(f_api_update+e.id,e)}importAccount(e){return this.http.post(f_api_importAccount,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(w.O),t.LFG(I.U),t.LFG(S._W))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var O=n(8275),Q=n(2377),j=n(359),M=n(5077),B=n(3826);function V(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"app-button",15),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.createAccount())}),t.qZA()}2&o&&t.Q6J("text","new")}const R=function(o){return[o]};let W=(()=>{class o{constructor(e){this.safeAccountService=e,this.tableConfig=C(this),this.filtersConfig=[{field:"search",label:"search",type:g.W.TEXT,placeholder:"search"},{field:"account_type",label:"Account type",type:g.W.TEXT,placeholder:"Type"},{field:"from",label:"From",type:g.W.DATE,placeholder:"From"},{field:"to",label:"To",type:g.W.DATE}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"code",field:"code"},{label:"account_group",field:"group"},{label:"account_type",field:"account_type"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:h.q.asc,field:h.q.asc},{label:h.q.desc,field:h.q.desc}]}],this.permissions=u}createAccount(){var e=this;return(0,m.Z)(function*(){(yield e.safeAccountService.openDialogToCreate())&&(e.tableConfig=C(e))})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(D))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-safe-accounts"]],decls:19,vars:14,consts:[[1,"page-card"],[1,"d-flex","justify-content-between","pb-5"],[1,"title"],[1,"d-flex","gap-2","align-items-center"],[3,"text","click",4,"hasPermissions"],[1,"d-flex","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],["table",""],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","click"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"titlecase"),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"div",3),t.YNc(7,V,1,1,"app-button",4),t.qZA()(),t.TgZ(8,"div",5),t._UZ(9,"ukt-sort",6,7)(11,"ukt-filter",8,9),t.qZA(),t.TgZ(13,"div",10),t._UZ(14,"app-table",11,12),t.qZA(),t.TgZ(16,"div",13),t._UZ(17,"ukt-pagination",null,14),t.qZA()()),2&e){const r=t.MAs(10),l=t.MAs(12),p=t.MAs(18);t.xp6(3),t.Oqu(t.lcZ(4,8,t.lcZ(5,10,"safe_accounts"))),t.xp6(4),t.Q6J("hasPermissions",t.VKq(12,R,a.permissions.create)),t.xp6(2),t.Q6J("SortConfig",a.sortConfig),t.xp6(2),t.Q6J("config",a.filtersConfig),t.xp6(3),t.Q6J("tableConfig",a.tableConfig)("pagination",p)("filter",l)("sort",r)}},dependencies:[O.z,Q.a,j.Q,Z.r,M.z,B.x,i.rS,A.X$]}),o})();const Y=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-safe-account"]],decls:1,vars:0,template:function(e,a){1&e&&t._UZ(0,"app-list-safe-accounts")},dependencies:[W]}),o})()}];let k=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[x.Bz.forChild(Y),x.Bz]}),o})();var X=n(1383),z=n(1471),H=n(2115),K=n(4413),$=n(1890),q=n(1019),tt=n(8096);let et=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[i.ez,k,X.m,A.aw,z.X,H.u,K.e,$.f,q.i,tt.J]}),o})()},1771:(v,b,n)=>{n.d(b,{U:()=>m});var i=n(9291),x=n(6223);const t=["*"];let m=(()=>{class u{constructor(){this.onSubmit=new i.vpe}ngOnChanges(d){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const d=this.getFormData();this.onSubmit.emit(d)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return u.\u0275fac=function(d){return new(d||u)},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[i.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(d,h){1&d&&(i.F$t(),i.TgZ(0,"form",0),i.NdJ("ngSubmit",function(){return h.submit()}),i.Hsn(1),i.qZA()),2&d&&i.Q6J("formGroup",h.formGroup)},dependencies:[x._Y,x.JL,x.sg]}),u})()}}]);