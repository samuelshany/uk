"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[8938],{68:(k,T,n)=>{n.d(T,{a:()=>c});const c={api:{create:"account/create",get:"account/with-group/all",getNotParent:"not-parents/accounts",getParent:"parents/accounts",getProfitLossParent:"profit-loss/parent-accounts",getExpensesParent:"account/parent/expenses",getAssetsParent:"account/parent/assets",getById:"account/",update:"account/update/",delete:"account/",exportExample:"account/export/example",exportExampleSub:"account/export/example/sub",export:"account/export/parent",exportPdf:"account/export/pdf",importAccount:"account/import",importAccountSub:"account/import/sub"},page:{}}},8938:(k,T,n)=>{n.r(T),n.d(T,{WorkTypesModule:()=>et});var c=n(6814),d=n(8209),r=n(5861),m=n(3271),f=function(o){return o.create="Create Work Type",o.view="View Work Types",o.edit="Edit Work Type",o.delete="Delete Work Type",o}(f||{});const v=o=>{return{cols:[{field:"id",label:"id",class:""},{field:"name",label:"name",class:""},{field:"description",label:"description",format:s=>s.description?s.description:"-"},{label:"action",actions:[{id:f.delete,icon:"trash",class:"main-color",fun:(s=(0,r.Z)(function*(e){return yield o.workTypesService.delete(e,"delete WorkType")}),function(a){return s.apply(this,arguments)})},{id:f.edit,icon:"pen-to-square",class:"main-color",fun:function(){var s=(0,r.Z)(function*(e){return yield o.workTypesService.openDialogToUpdate(e)});return function(a){return s.apply(this,arguments)}}()}]}],Request:m.K.api.get};var s};var g=n(5219),y=n(6924),x=n(5946),t=n(9291),i=n(6223),u=n(8645),_=n(68),C=n(8763),D=n(5118),w=n(1771),J=n(8614),E=n(5253),W=n(4779),b=n(3999);function S(o,s){if(1&o&&(t.TgZ(0,"div",16),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}function M(o,s){if(1&o&&(t.TgZ(0,"p",17),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.serverValidation?null:e.serverValidation.name[0])}}function U(o,s){if(1&o&&(t.TgZ(0,"p",17),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.serverValidation?null:e.serverValidation.description[0])}}let L=(()=>{class o{constructor(e,a,l,A,h){this.fb=e,this.toaster=a,this.workTypesService=l,this.config=A,this.dialogRef=h,this.unsubscribe=new u.x,this.formGroup=this.initForm(),this.isLoading=!1,this.workTypes=[],this.accountConfig=_.a,this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){this.workTypesService.get().subscribe(e=>{this.workTypes=e.data})}reject(e){this.dialogRef.close(e)}initForm(){return this.fb.group({id:[Number],name:["",[i.kI.required,i.kI.minLength(1)]],description:["",i.kI.required]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.isLoading=!0,this.config.data.data?this.workTypesService.update(this.formGroup.value).subscribe(e=>{this.toaster.success(e.message),this.dialogRef.close(!0)},e=>{this.errors=e.error.errors,this.isLoading=!1}):this.workTypesService.create(this.formGroup.value).subscribe(e=>{this.toaster.success(e.message),this.dialogRef.close(!0)},e=>{this.errors=e.error.errors,this.isLoading=!1}))}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data?.id,name:this.config.data.data?.name,description:this.config.data.data?.description})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(C._W),t.Y36(O),t.Y36(D.S),t.Y36(D.E7))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-new-work-type"]],decls:24,vars:21,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/inventory-icon.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],["translate","",1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["class","error",4,"ngIf"],["text","description","formControlName","description","ngDefaultControl","","placeholder","",3,"type"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"],[1,"error"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return a.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return a.accept()}),t.YNc(11,S,2,1,"div",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div"),t._UZ(14,"app-text",10),t.YNc(15,M,2,1,"p",11),t.qZA(),t.TgZ(16,"div"),t._UZ(17,"app-textarea",12),t.YNc(18,U,2,1,"p",11),t.qZA(),t.TgZ(19,"div",13)(20,"div",14)(21,"app-button",15),t.NdJ("click",function(){return a.reject(!1)}),t.qZA()(),t.TgZ(22,"div",14)(23,"app-button",15),t.NdJ("click",function(){return a.accept()}),t.qZA()()()()()),2&e){let l;t.xp6(8),t.Oqu(t.lcZ(9,17,null!==(l=a.config.header)&&void 0!==l?l:"")),t.xp6(2),t.Q6J("formGroup",a.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,19,a.errors)),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("type","text"),t.xp6(1),t.Q6J("ngIf",null==a.serverValidation?null:a.serverValidation.name),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("type","text"),t.xp6(1),t.Q6J("ngIf",null==a.serverValidation?null:a.serverValidation.description),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==a.config.data?null:a.config.data.acceptLabel)}},dependencies:[c.sg,c.O5,w.U,i.Fj,i.JJ,i.JL,i.sg,i.u,J.T,E.R,W.r,b.Pi,c.Nd,b.X$]}),o})();var N=n(1732),I=n(3562);let O=(()=>{class o{constructor(e,a,l){this.http=e,this.dynamicDialog=a,this.toastr=l}get(e){return this.http.get(m.K.api.get)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_work_type",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},L)}create(e){return this.http.post(m.K.api.create,e)}delete(e){var a=this;return(0,r.Z)(function*(){const l={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e},name:"name"},width:"500px",height:"auto"};if(yield a.dynamicDialog.confirm(l))try{const h=yield a.http.delete(m.K.api.delete+e.id).toPromise();return a.toastr.success(h.message),h}catch(h){throw a.toastr.error(h.error.message),h}return!1})()}openDialogToUpdate(e){var a=this;return(0,r.Z)(function*(){const l={showHeader:!1,header:"update_work_type",data:{acceptLabel:"update",rejectLabel:"cancel",data:{...e}},height:"330px",width:"auto"};return yield a.dynamicDialog.showDialogWithComponent(l,L)})()}update(e){return this.http.post(m.K.api.update+e.id,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(N.O),t.LFG(I.U),t.LFG(C._W))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var P=n(2377),F=n(359),G=n(5077),j=n(3826),Q=n(8275);function R(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-button",14),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.openDialogToCreate())}),t.qZA()}if(2&o){const e=t.oxw();t.Tol("btn-filter"),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}const V=function(o){return[o]},Y=[{path:"",component:(()=>{class o{constructor(e){this.workTypesService=e,this.tableConfig=v(this),this.filtersConfig=[{field:"search",label:"search",type:y.W.TEXT,placeholder:"search"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"id",field:"id"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:x.q.asc,field:x.q.asc},{label:x.q.desc,field:x.q.desc}]}],this.permissions=f,this.icon=g.dv}openDialogToCreate(){var e=this;return(0,r.Z)(function*(){(yield e.workTypesService.openDialogToCreate())&&(e.tableConfig=v(e))})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(O))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-work-types"]],decls:17,vars:12,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,R,1,5,"app-button",4),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"ukt-sort",6,7)(10,"ukt-filter",8,9),t.qZA(),t.TgZ(12,"div",10),t._UZ(13,"app-table",11),t.qZA(),t.TgZ(14,"div",12),t._UZ(15,"ukt-pagination",null,13),t.qZA()()),2&e){const l=t.MAs(9),A=t.MAs(11),h=t.MAs(16);t.xp6(3),t.Oqu(t.lcZ(4,8,"work_types_list")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(10,V,a.permissions.create)),t.xp6(2),t.Q6J("SortConfig",a.sortConfig),t.xp6(2),t.Q6J("config",a.filtersConfig),t.xp6(3),t.Q6J("tableConfig",a.tableConfig)("pagination",h)("filter",A)("sort",l)}},dependencies:[P.a,F.Q,W.r,G.z,j.x,Q.z,b.X$]}),o})()}];let B=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(Y),d.Bz]}),o})();var K=n(4413),X=n(1890),z=n(1019),H=n(2115),$=n(8096),q=n(1471),tt=n(1383);let et=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,B,q.X,H.u,K.e,X.f,z.i,$.J,b.aw,tt.m]}),o})()},1771:(k,T,n)=>{n.d(T,{U:()=>m});var c=n(9291),d=n(6223);const r=["*"];let m=(()=>{class f{constructor(){this.onSubmit=new c.vpe}ngOnChanges(g){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const g=this.getFormData();this.onSubmit.emit(g)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return f.\u0275fac=function(g){return new(g||f)},f.\u0275cmp=c.Xpm({type:f,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[c.TTD],ngContentSelectors:r,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(g,y){1&g&&(c.F$t(),c.TgZ(0,"form",0),c.NdJ("ngSubmit",function(){return y.submit()}),c.Hsn(1),c.qZA()),2&g&&c.Q6J("formGroup",y.formGroup)},dependencies:[d._Y,d.JL,d.sg]}),f})()},5253:(k,T,n)=>{n.d(T,{R:()=>x});var c=n(67),d=n(6223),r=n(9291),m=n(6814),f=n(6218),v=n(3999);function g(p,t){1&p&&r._UZ(0,"i",6)}function y(p,t){if(1&p&&(r.TgZ(0,"label"),r._uU(1),r.ALo(2,"titlecase"),r.ALo(3,"translate"),r.TgZ(4,"span",4),r.YNc(5,g,1,0,"i",5),r.qZA()()),2&p){const i=r.oxw();r.xp6(1),r.hij("",r.lcZ(2,2,r.lcZ(3,4,i.text))," "),r.xp6(4),r.Q6J("ngIf",i.control&&(null==i.control.errors?null:i.control.errors.required))}}function Z(p,t){if(1&p&&(r.TgZ(0,"span"),r._uU(1),r.qZA()),2&p){const i=r.oxw();r.Tol("text-danger"),r.xp6(1),r.Oqu(i.object.keys(i.control.errors)[0])}}let x=(()=>{class p extends c.t{constructor(i){super(),this.formGroupDirective=i,this.placeholder="",this.rows="2",this.cols="",this.readOnly=!1,this.class="d-flex flex-column justify-content-between",this.object=Object}writeValue(i){this.value=i}onValueChange(i){this.onChange(i.target.value),this.onTouched()}}return p.\u0275fac=function(i){return new(i||p)(r.Y36(d.sg,8))},p.\u0275cmp=r.Xpm({type:p,selectors:[["app-textarea"]],inputs:{value:"value",text:"text",placeholder:"placeholder",rows:"rows",cols:"cols",readOnly:"readOnly",class:"class",type:"type"},features:[r._Bn([{provide:d.JU,useExisting:p,multi:!0},{provide:d.Cf,useExisting:p,multi:!0}]),r.qOj],decls:4,vars:8,consts:[[3,"ngClass"],[4,"ngIf"],["pInputTextarea","",3,"rows","cols","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(i,u){1&i&&(r.TgZ(0,"div",0),r.YNc(1,y,6,6,"label",1),r.TgZ(2,"textarea",2),r.NdJ("ngModelChange",function(C){return u.value=C})("input",function(C){return u.onValueChange(C)}),r.qZA(),r.YNc(3,Z,2,3,"span",3),r.qZA()),2&i&&(r.Q6J("ngClass",u.class),r.xp6(1),r.Q6J("ngIf",u.text),r.xp6(1),r.Q6J("rows",u.rows)("cols",u.cols)("ngModel",u.value)("placeholder",u.placeholder)("disabled",u.readOnly),r.xp6(1),r.Q6J("ngIf",u.control&&u.control.errors&&(u.control.touched||u.formGroupDirective.submitted)))},dependencies:[m.mk,m.O5,d.Fj,d.JJ,d.On,f.g,m.rS,v.X$]}),p})()}}]);