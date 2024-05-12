"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[2344],{68:(A,v,o)=>{o.d(v,{a:()=>c});const c={api:{create:"account/create",get:"account/with-group/all",getNotParent:"not-parents/accounts",getParent:"parents/accounts",getProfitLossParent:"profit-loss/parent-accounts",getExpensesParent:"account/parent/expenses",getRevenueParent:"account/parent/revenue",getAssetsParent:"account/parent/assets",getById:"account/",update:"account/update/",delete:"account/",exportExample:"account/export/example",exportExampleSub:"account/export/example/sub",export:"account/export/parent",exportPdf:"account/export/pdf",importAccount:"account/import",importAccountSub:"account/import/sub"},page:{}}},2344:(A,v,o)=>{o.r(v),o.d(v,{UnitsModule:()=>et});var c=o(6814),d=o(8209),i=o(5861),m=o(6655),f=function(n){return n.create="Create Unit",n.view="View Units",n.edit="Edit Unit",n.delete="Delete Unit",n}(f||{});const x=n=>{return{cols:[{field:"id",label:"id",class:""},{field:"name",label:"name",class:""},{field:"description",label:"description",format:s=>s.description?s.description:"-"},{label:"action",actions:[{id:f.delete,icon:"trash",class:"main-color",fun:(s=(0,i.Z)(function*(e){return yield n.unitsService.delete(e,"delete Unit")}),function(a){return s.apply(this,arguments)})},{id:f.edit,icon:"pen-to-square",class:"main-color",fun:function(){var s=(0,i.Z)(function*(e){return yield n.unitsService.openDialogToUpdate(e)});return function(a){return s.apply(this,arguments)}}()}]}],Request:m.R.api.get};var s};var g=o(5219),C=o(6924),T=o(5946),t=o(9291),r=o(6223),p=o(8645),D=o(68),y=o(8763),_=o(5118),E=o(1771),M=o(8614),S=o(5253),O=o(4779),Z=o(3999);function N(n,s){if(1&n&&(t.TgZ(0,"div",16),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}function P(n,s){if(1&n&&(t.TgZ(0,"p",17),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(null==e.serverValidation?null:e.serverValidation.name[0])}}function I(n,s){if(1&n&&(t.TgZ(0,"p",17),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(null==e.serverValidation?null:e.serverValidation.description[0])}}let L=(()=>{class n{constructor(e,a,l,b,h){this.fb=e,this.toaster=a,this.unitsService=l,this.config=b,this.dialogRef=h,this.unsubscribe=new p.x,this.formGroup=this.initForm(),this.isLoading=!1,this.units=[],this.accountConfig=D.a,this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){this.unitsService.get().subscribe(e=>{this.units=e.data})}reject(e){this.dialogRef.close(e)}initForm(){return this.fb.group({id:[Number],name:["",[r.kI.required,r.kI.minLength(1)]],description:["",r.kI.required]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.isLoading=!0,this.config.data.data?this.unitsService.update(this.formGroup.value).subscribe(e=>{this.toaster.success(e.message),this.dialogRef.close(!0)},e=>{this.errors=e.error.errors,this.isLoading=!1}):this.unitsService.create(this.formGroup.value).subscribe(e=>{this.toaster.success(e.message),this.dialogRef.close(!0)},e=>{this.errors=e.error.errors,this.isLoading=!1}))}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data?.id,name:this.config.data.data?.name,description:this.config.data.data?.description})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(y._W),t.Y36(J),t.Y36(_.S),t.Y36(_.E7))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-new-unit"]],decls:24,vars:21,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/inventory-icon.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],["translate","",1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["class","error",4,"ngIf"],["text","description","formControlName","description","ngDefaultControl","","placeholder","",3,"type"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"],[1,"error"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return a.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return a.accept()}),t.YNc(11,N,2,1,"div",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div"),t._UZ(14,"app-text",10),t.YNc(15,P,2,1,"p",11),t.qZA(),t.TgZ(16,"div"),t._UZ(17,"app-textarea",12),t.YNc(18,I,2,1,"p",11),t.qZA(),t.TgZ(19,"div",13)(20,"div",14)(21,"app-button",15),t.NdJ("click",function(){return a.reject(!1)}),t.qZA()(),t.TgZ(22,"div",14)(23,"app-button",15),t.NdJ("click",function(){return a.accept()}),t.qZA()()()()()),2&e){let l;t.xp6(8),t.Oqu(t.lcZ(9,17,null!==(l=a.config.header)&&void 0!==l?l:"")),t.xp6(2),t.Q6J("formGroup",a.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,19,a.errors)),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("type","text"),t.xp6(1),t.Q6J("ngIf",null==a.serverValidation?null:a.serverValidation.name),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("type","text"),t.xp6(1),t.Q6J("ngIf",null==a.serverValidation?null:a.serverValidation.description),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==a.config.data?null:a.config.data.acceptLabel)}},dependencies:[c.sg,c.O5,E.U,r.Fj,r.JJ,r.JL,r.sg,r.u,M.T,S.R,O.r,Z.Pi,c.Nd,Z.X$]}),n})();var F=o(1732),G=o(3562);let J=(()=>{class n{constructor(e,a,l){this.http=e,this.dynamicDialog=a,this.toastr=l}get(e){return this.http.get(m.R.api.get)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_unit",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},L)}create(e){return this.http.post(m.R.api.create,e)}delete(e){var a=this;return(0,i.Z)(function*(){const l={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e},name:"name"},width:"500px",height:"auto"};if(yield a.dynamicDialog.confirm(l))try{const h=yield a.http.delete(m.R.api.delete+e.id).toPromise();return a.toastr.success(h.message),h}catch(h){throw a.toastr.error(h.error.message),h}return!1})()}openDialogToUpdate(e){var a=this;return(0,i.Z)(function*(){const l={showHeader:!1,header:"update_unit",data:{acceptLabel:"update",rejectLabel:"cancel",data:{...e}},height:"330px",width:"auto"};return yield a.dynamicDialog.showDialogWithComponent(l,L)})()}update(e){return this.http.post(m.R.api.update+e.id,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(F.O),t.LFG(G.U),t.LFG(y._W))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var j=o(2377),R=o(359),Q=o(5077),w=o(3826),V=o(8275);function Y(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"app-button",14),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.openDialogToCreate())}),t.qZA()}if(2&n){const e=t.oxw();t.Tol("btn-filter"),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}const B=function(n){return[n]},W=[{path:"",component:(()=>{class n{constructor(e){this.unitsService=e,this.tableConfig=x(this),this.filtersConfig=[{field:"search",label:"search",type:C.W.TEXT,placeholder:"search"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"id",field:"id"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:T.q.asc,field:T.q.asc},{label:T.q.desc,field:T.q.desc}]}],this.permissions=f,this.icon=g.dv}openDialogToCreate(){var e=this;return(0,i.Z)(function*(){(yield e.unitsService.openDialogToCreate())&&(e.tableConfig=x(e))})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(J))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-units"]],decls:17,vars:12,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,Y,1,5,"app-button",4),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"ukt-sort",6,7)(10,"ukt-filter",8,9),t.qZA(),t.TgZ(12,"div",10),t._UZ(13,"app-table",11),t.qZA(),t.TgZ(14,"div",12),t._UZ(15,"ukt-pagination",null,13),t.qZA()()),2&e){const l=t.MAs(9),b=t.MAs(11),h=t.MAs(16);t.xp6(3),t.Oqu(t.lcZ(4,8,"units_list")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(10,B,a.permissions.create)),t.xp6(2),t.Q6J("SortConfig",a.sortConfig),t.xp6(2),t.Q6J("config",a.filtersConfig),t.xp6(3),t.Q6J("tableConfig",a.tableConfig)("pagination",h)("filter",b)("sort",l)}},dependencies:[j.a,R.Q,O.r,Q.z,w.x,V.z,Z.X$]}),n})()}];let K=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(W),d.Bz]}),n})();var X=o(4413),z=o(1890),H=o(1019),$=o(2115),k=o(8096),q=o(1471),tt=o(1383);let et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,K,q.X,$.u,X.e,z.f,H.i,k.J,Z.aw,tt.m]}),n})()},1771:(A,v,o)=>{o.d(v,{U:()=>m});var c=o(9291),d=o(6223);const i=["*"];let m=(()=>{class f{constructor(){this.onSubmit=new c.vpe}ngOnChanges(g){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const g=this.getFormData();this.onSubmit.emit(g)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return f.\u0275fac=function(g){return new(g||f)},f.\u0275cmp=c.Xpm({type:f,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[c.TTD],ngContentSelectors:i,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(g,C){1&g&&(c.F$t(),c.TgZ(0,"form",0),c.NdJ("ngSubmit",function(){return C.submit()}),c.Hsn(1),c.qZA()),2&g&&c.Q6J("formGroup",C.formGroup)},dependencies:[d._Y,d.JL,d.sg]}),f})()},5253:(A,v,o)=>{o.d(v,{R:()=>T});var c=o(67),d=o(6223),i=o(9291),m=o(6814),f=o(6218),x=o(3999);function g(u,t){1&u&&i._UZ(0,"i",6)}function C(u,t){if(1&u&&(i.TgZ(0,"label"),i._uU(1),i.ALo(2,"titlecase"),i.ALo(3,"translate"),i.TgZ(4,"span",4),i.YNc(5,g,1,0,"i",5),i.qZA()()),2&u){const r=i.oxw();i.xp6(1),i.hij("",i.lcZ(2,2,i.lcZ(3,4,r.text))," "),i.xp6(4),i.Q6J("ngIf",r.control&&(null==r.control.errors?null:r.control.errors.required))}}function U(u,t){if(1&u&&(i.TgZ(0,"span"),i._uU(1),i.qZA()),2&u){const r=i.oxw();i.Tol("text-danger"),i.xp6(1),i.Oqu(r.object.keys(r.control.errors)[0])}}let T=(()=>{class u extends c.t{constructor(r){super(),this.formGroupDirective=r,this.placeholder="",this.rows="2",this.cols="",this.readOnly=!1,this.class="d-flex flex-column justify-content-between",this.object=Object}writeValue(r){this.value=r}onValueChange(r){this.onChange(r.target.value),this.onTouched()}}return u.\u0275fac=function(r){return new(r||u)(i.Y36(d.sg,8))},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-textarea"]],inputs:{value:"value",text:"text",placeholder:"placeholder",rows:"rows",cols:"cols",readOnly:"readOnly",class:"class",type:"type"},features:[i._Bn([{provide:d.JU,useExisting:u,multi:!0},{provide:d.Cf,useExisting:u,multi:!0}]),i.qOj],decls:4,vars:8,consts:[[3,"ngClass"],[4,"ngIf"],["pInputTextarea","",3,"rows","cols","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(r,p){1&r&&(i.TgZ(0,"div",0),i.YNc(1,C,6,6,"label",1),i.TgZ(2,"textarea",2),i.NdJ("ngModelChange",function(y){return p.value=y})("input",function(y){return p.onValueChange(y)}),i.qZA(),i.YNc(3,U,2,3,"span",3),i.qZA()),2&r&&(i.Q6J("ngClass",p.class),i.xp6(1),i.Q6J("ngIf",p.text),i.xp6(1),i.Q6J("rows",p.rows)("cols",p.cols)("ngModel",p.value)("placeholder",p.placeholder)("disabled",p.readOnly),i.xp6(1),i.Q6J("ngIf",p.control&&p.control.errors&&(p.control.touched||p.formGroupDirective.submitted)))},dependencies:[m.mk,m.O5,d.Fj,d.JJ,d.On,f.g,m.rS,x.X$],styles:[".text-danger[_ngcontent-%COMP%]{font-size:14px}"]}),u})()}}]);