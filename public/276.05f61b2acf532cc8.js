"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[276],{276:(y,m,o)=>{o.r(m),o.d(m,{BrandModule:()=>tt});var s=o(6814),d=o(2954),t=o(9291),g=o(5861),u=o(336),v=function(n){return n.create="Create Brand",n.view="View Brand",n.edit="Edit Brand",n.delete="Delete Brand",n}(v||{});const f=n=>{return{cols:[{field:"id",label:"code",class:""},{field:"name",label:"name",class:""},{field:"description",label:"description",format:r=>r.description?r.description:"-"},{field:"prefix",label:"prefix",format:r=>r.prefix?r.prefix:"-"},{label:"action",actions:[{id:v.delete,icon:"trash",class:"main-color",fun:(r=(0,g.Z)(function*(e){return yield n.brandService.delete(e)}),function(a){return r.apply(this,arguments)})},{id:v.edit,icon:"pen-to-square",class:"main-color",fun:function(){var r=(0,g.Z)(function*(e){return yield n.brandService.openDialogToUpdate(e)});return function(a){return r.apply(this,arguments)}}()}]}],Request:u.r.api.get};var r};var T=o(5219),C=o(6924),B=o(8718),h=o(5946),i=o(6223),A=o(8645),b=o(8763),_=o(5118),U=o(1771),E=o(8614),M=o(5253),O=o(4779),D=o(3999);function S(n,r){if(1&n&&(t.TgZ(0,"p",19),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}let J=(()=>{class n{constructor(e,a,c,Z,x){this.fb=e,this.toastr=a,this.config=c,this.dialogRef=Z,this.brandService=x,this.unsubscribe=new A.x,this.formGroup=this.initForm(),this.billingCities=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){}initForm(){return this.fb.group({id:[Number],name:["",[i.kI.required]],prefix:["",[i.kI.pattern("^[A-Za-z0-9]{1,}$")]],description:[""]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.brandService.update(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.colesPopup(!0)},error:e=>{this.errors=e.error.errors}}):this.brandService.create(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.colesPopup(!0)},error:e=>{this.errors=e.error.errors}})}colesPopup(e){this.dialogRef.close(e)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,name:this.config.data.data.name,description:this.config.data.data.description,prefix:this.config.data.data.prefix})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(b._W),t.Y36(_.S),t.Y36(_.E7),t.Y36(L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-new-brand"]],decls:25,vars:22,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/inventory-icon.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-md-6"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["text","prefix","formControlName","prefix","ngDefaultControl","","placeholder","",3,"type"],[1,"col-12"],["text","description","formControlName","description","ngDefaultControl","","placeholder","",3,"type"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return a.colesPopup(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return a.accept()}),t.YNc(11,S,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"div",11),t._UZ(15,"app-text",12),t.qZA(),t.TgZ(16,"div",11),t._UZ(17,"app-text",13),t.qZA(),t.TgZ(18,"div",14),t._UZ(19,"app-textarea",15),t.qZA()(),t.TgZ(20,"div",16)(21,"div",17)(22,"app-button",18),t.NdJ("click",function(){return a.colesPopup(!1)}),t.qZA()(),t.TgZ(23,"div",17)(24,"app-button",18),t.NdJ("click",function(){return a.accept()}),t.qZA()()()()()),2&e){let c;t.xp6(8),t.Oqu(t.lcZ(9,18,null!==(c=a.config.header)&&void 0!==c?c:"")),t.xp6(2),t.Q6J("formGroup",a.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,20,a.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","prefix"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==a.config.data?null:a.config.data.acceptLabel)}},dependencies:[s.sg,U.U,i.Fj,i.JJ,i.JL,i.sg,i.u,E.T,M.R,O.r,s.Nd,D.X$]}),n})();var F=o(1732),N=o(3562);let L=(()=>{class n{constructor(e,a,c){this.http=e,this.dynamicDialog=a,this.toastr=c}getUnitType(e){return this.http.get(u.r.api.get)}openDialogToCreateUnitType(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_brand",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},J)}create(e){return this.http.post(u.r.api.create,e)}delete(e){var a=this;return(0,g.Z)(function*(){const c={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e},name:"name"},width:"300px",height:"164px"};if(yield a.dynamicDialog.confirm(c))try{const x=yield a.http.delete(u.r.api.delete+e.id).toPromise();return a.toastr.success(x.message),x}catch(x){throw a.toastr.error(x.error.message),x}return!1})()}openDialogToUpdate(e){var a=this;return(0,g.Z)(function*(){const c={showHeader:!1,header:"update_brand",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"480px",height:"auto"};return yield a.dynamicDialog.showDialogWithComponent(c,J)})()}update(e){return this.http.post(u.r.api.update+e.id,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(F.O),t.LFG(N.U),t.LFG(b._W))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var G=o(2377),P=o(359),I=o(5077),j=o(4811),w=o(8275);function Q(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"app-button",13),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.openDialogToCreate())}),t.qZA()}if(2&n){const e=t.oxw();t.Tol("btn-filter"),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}const R=function(n){return[n]};let W=(()=>{class n{constructor(e){this.brandService=e,this.tableConfig=f(this),this.permissions=v,this.icon=T.dv,this.filtersConfig=[{field:"search",label:"search",type:C.W.TEXT,placeholder:"search"},{field:"creator_id",label:"created_by",type:C.W.SELECT,options:{value:"id",label:"name"},request:B.x.api.get,placeholder:"select"},{field:"from",label:"from",type:C.W.DATE},{field:"to",label:"to",type:C.W.DATE}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"id",field:"id"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:h.q.asc,field:h.q.asc},{label:h.q.desc,field:h.q.desc}]}]}openDialogToCreate(){var e=this;return(0,g.Z)(function*(){(yield e.brandService.openDialogToCreateUnitType())&&(e.tableConfig=f(e))})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-brands"]],decls:17,vars:14,consts:[[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,Q,1,5,"app-button",3),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"ukt-sort",5,6)(10,"ukt-filter",7,8),t.qZA(),t.TgZ(12,"div",9),t._UZ(13,"app-table",10),t.qZA(),t.TgZ(14,"div",11),t._UZ(15,"ukt-pagination",null,12),t.qZA()),2&e){const c=t.MAs(9),Z=t.MAs(11),x=t.MAs(16);t.xp6(2),t.Oqu(t.lcZ(3,8,t.lcZ(4,10,"list_of_brands"))),t.xp6(4),t.Q6J("hasPermissions",t.VKq(12,R,a.permissions.create)),t.xp6(2),t.Q6J("SortConfig",a.sortConfig),t.xp6(2),t.Q6J("config",a.filtersConfig),t.xp6(3),t.Q6J("tableConfig",a.tableConfig)("pagination",x)("filter",Z)("sort",c)}},dependencies:[G.a,P.Q,O.r,I.z,j.x,w.z,s.rS,D.X$]}),n})();const Y=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-brand"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-brands"),t.qZA())},dependencies:[W]}),n})()}];let K=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(Y),d.Bz]}),n})();var X=o(1471),V=o(2115),z=o(4413),$=o(1890),H=o(1019),k=o(8096),q=o(1383);let tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,K,X.X,V.u,z.e,$.f,H.i,k.J,D.aw,q.m]}),n})()},336:(y,m,o)=>{o.d(m,{r:()=>s});const s={api:{create:"brand/create",get:"brand",getById:"brand/",update:"brand/update/",delete:"brand/"},page:{list:"",update:"",create:"",view:"brand/view/:id"}}},1771:(y,m,o)=>{o.d(m,{U:()=>g});var s=o(9291),d=o(6223);const t=["*"];let g=(()=>{class u{constructor(){this.onSubmit=new s.vpe}ngOnChanges(f){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const f=this.getFormData();this.onSubmit.emit(f)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return u.\u0275fac=function(f){return new(f||u)},u.\u0275cmp=s.Xpm({type:u,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[s.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(f,T){1&f&&(s.F$t(),s.TgZ(0,"form",0),s.NdJ("ngSubmit",function(){return T.submit()}),s.Hsn(1),s.qZA()),2&f&&s.Q6J("formGroup",T.formGroup)},dependencies:[d._Y,d.JL,d.sg]}),u})()},5253:(y,m,o)=>{o.d(m,{R:()=>B});var s=o(67),d=o(6223),t=o(9291),g=o(6814),u=o(6218),v=o(3999);function f(p,h){1&p&&t._UZ(0,"i",6)}function T(p,h){if(1&p&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"translate"),t.TgZ(3,"span",4),t.YNc(4,f,1,0,"i",5),t.qZA()()),2&p){const l=t.oxw();t.xp6(1),t.hij("",t.lcZ(2,2,l.text)," "),t.xp6(3),t.Q6J("ngIf",l.control&&(null==l.control.errors?null:l.control.errors.required))}}function C(p,h){if(1&p&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&p){const l=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Oqu(l.object.keys(l.control.errors)[0])}}let B=(()=>{class p extends s.t{constructor(l){super(),this.formGroupDirective=l,this.placeholder="",this.rows="2",this.cols="",this.readOnly=!1,this.class="d-flex flex-column justify-content-between",this.object=Object}writeValue(l){this.value=l}onValueChange(l){this.onChange(l.target.value),this.onTouched()}}return p.\u0275fac=function(l){return new(l||p)(t.Y36(d.sg,8))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-textarea"]],inputs:{value:"value",text:"text",placeholder:"placeholder",rows:"rows",cols:"cols",readOnly:"readOnly",class:"class",type:"type"},features:[t._Bn([{provide:d.JU,useExisting:p,multi:!0},{provide:d.Cf,useExisting:p,multi:!0}]),t.qOj],decls:4,vars:8,consts:[[3,"ngClass"],[4,"ngIf"],["pInputTextarea","",3,"rows","cols","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(l,i){1&l&&(t.TgZ(0,"div",0),t.YNc(1,T,5,4,"label",1),t.TgZ(2,"textarea",2),t.NdJ("ngModelChange",function(b){return i.value=b})("input",function(b){return i.onValueChange(b)}),t.qZA(),t.YNc(3,C,2,3,"span",3),t.qZA()),2&l&&(t.Q6J("ngClass",i.class),t.xp6(1),t.Q6J("ngIf",i.text),t.xp6(1),t.Q6J("rows",i.rows)("cols",i.cols)("ngModel",i.value)("placeholder",i.placeholder)("disabled",i.readOnly),t.xp6(1),t.Q6J("ngIf",i.control&&i.control.errors&&(i.control.touched||i.formGroupDirective.submitted)))},dependencies:[g.mk,g.O5,d.Fj,d.JJ,d.On,u.g,v.X$]}),p})()},8718:(y,m,o)=>{o.d(m,{x:()=>s});const s={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}}}]);