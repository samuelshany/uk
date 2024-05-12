"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[4937],{1494:(D,h,n)=>{n.d(h,{h:()=>l});const l={api:{create:"unit-type/create",get:"unit-type",getById:"unit-type/",update:"unit-type/update/",delete:"unit-type/",exportCvs:"unit-type/export/cvs",exportPdf:"unit-type/export/pdf",importAccount:"unit-type/import"},page:{list:"",update:"",create:"",view:"unit-type/view/:id"}}},5894:(D,h,n)=>{n.d(h,{L:()=>L});var l=n(5861),u=n(1494),t=n(6223),v=n(8645),e=n(9291),y=n(8763),g=n(5118),Z=n(6814),C=n(1771),O=n(8614),c=n(5253),T=n(4779),s=n(3999);function d(p,x){if(1&p&&(e.TgZ(0,"p",17),e._uU(1),e.qZA()),2&p){const o=e.oxw();e.xp6(1),e.Oqu(null==o.errors?null:o.errors.name[0])}}function E(p,x){if(1&p&&(e.TgZ(0,"p",17),e._uU(1),e.qZA()),2&p){const o=e.oxw();e.xp6(1),e.Oqu(null==o.errors?null:o.errors.name[0])}}let b=(()=>{class p{constructor(o,r,m,S,U){this.fb=o,this.toastr=r,this.config=m,this.dialogRef=S,this.unitTypeService=U,this.unsubscribe=new v.x,this.formGroup=this.initForm(),this.billingCities=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){}initForm(){return this.fb.group({id:[Number],name:["",[t.kI.required,t.kI.pattern("^[\u0621-\u064a\u0660-\u0669a-zA-Z 0-9 ]{2,}$")]],description:[""]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.unitTypeService.update(this.formGroup.value).subscribe({next:o=>{this.toastr.success(o.message),this.colesPopup(!0)},error:o=>{this.errors=o.error.errors}}):this.unitTypeService.create(this.formGroup.value).subscribe({next:o=>{this.toastr.success(o.message),this.colesPopup(!0)},error:o=>{this.errors=o.error.errors}})}colesPopup(o){this.dialogRef.close(o)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,name:this.config.data.data.name,description:this.config.data.data.description})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return p.\u0275fac=function(o){return new(o||p)(e.Y36(t.qu),e.Y36(y._W),e.Y36(g.S),e.Y36(g.E7),e.Y36(L))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-new-unit-type"]],decls:23,vars:18,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/inventory-icon.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],[1,"row"],[1,"col-12"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["class","messageError",4,"ngIf"],["text","description","formControlName","description","ngDefaultControl","","placeholder","",3,"type"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"messageError"]],template:function(o,r){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"span",5),e.NdJ("click",function(){return r.colesPopup(!1)}),e._UZ(6,"i",6),e.qZA()(),e.TgZ(7,"p",7),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"app-form",8),e.NdJ("onSubmit",function(){return r.accept()}),e.TgZ(11,"div",9)(12,"div",10),e._UZ(13,"app-text",11),e.YNc(14,d,2,1,"p",12),e.qZA(),e.TgZ(15,"div",10),e._UZ(16,"app-textarea",13),e.YNc(17,E,2,1,"p",12),e.qZA()(),e.TgZ(18,"div",14)(19,"div",15)(20,"app-button",16),e.NdJ("click",function(){return r.colesPopup(!1)}),e.qZA()(),e.TgZ(21,"div",15)(22,"app-button",16),e.NdJ("click",function(){return r.accept()}),e.qZA()()()()()),2&o){let m;e.xp6(8),e.Oqu(e.lcZ(9,16,null!==(m=r.config.header)&&void 0!==m?m:"")),e.xp6(2),e.Q6J("formGroup",r.formGroup),e.xp6(3),e.Tol("d-flex flex-column justify-content-between mt-2"),e.Q6J("type","text"),e.xp6(1),e.Q6J("ngIf",null==r.errors?null:r.errors.name),e.xp6(2),e.Tol("d-flex flex-column justify-content-between mt-2"),e.Q6J("type","text"),e.xp6(1),e.Q6J("ngIf",null==r.errors?null:r.errors.name),e.xp6(3),e.Tol("btn-cancel"),e.Q6J("text","Cancel"),e.xp6(2),e.Tol("btn-filter"),e.Q6J("text",null==r.config.data?null:r.config.data.acceptLabel)}},dependencies:[Z.O5,C.U,t.Fj,t.JJ,t.JL,t.sg,t.u,O.T,c.R,T.r,s.X$]}),p})();var J=n(1732),M=n(3562);let L=(()=>{class p{constructor(o,r,m){this.http=o,this.dynamicDialog=r,this.toastr=m}getUnitType(o){return this.http.get(u.h.api.get)}openDialogToCreateUnitType(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_unit_type",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},b)}create(o){return this.http.post(u.h.api.create,o)}delete(o){var r=this;return(0,l.Z)(function*(){const m={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...o},name:"name"},width:"300px",height:"164px"};if(yield r.dynamicDialog.confirm(m))try{const U=yield r.http.delete(u.h.api.delete+o.id).toPromise();return r.toastr.success(U.message),U}catch(U){throw r.toastr.error(U.error.message),U}return!1})()}openDialogToUpdateUnitType(o){var r=this;return(0,l.Z)(function*(){const m={showHeader:!1,header:"update_unit_type",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...o}},width:"480px",height:"auto"};return yield r.dynamicDialog.showDialogWithComponent(m,b)})()}update(o){return this.http.post(u.h.api.update+o.id,o)}}return p.\u0275fac=function(o){return new(o||p)(e.LFG(J.O),e.LFG(M.U),e.LFG(y._W))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},4937:(D,h,n)=>{n.r(h),n.d(h,{UnitTypeModule:()=>B});var l=n(6814),u=n(2954),t=n(9291),v=n(5861),e=n(1494),y=function(i){return i.create="Create UnitType",i.view="View UnitType",i.edit="Edit UnitType",i.delete="Delete UnitType",i}(y||{});const g=i=>{return{cols:[{field:"id",label:"code",class:""},{field:"name",label:"name",class:""},{field:"description",label:"description",format:f=>f.description?f.description:"-"},{label:"action",actions:[{id:y.delete,icon:"trash",class:"main-color",fun:(f=(0,v.Z)(function*(a){return yield i.unitTypeService.delete(a)}),function(A){return f.apply(this,arguments)})},{id:y.edit,icon:"pen-to-square",class:"main-color",fun:function(){var f=(0,v.Z)(function*(a){return yield i.unitTypeService.openDialogToUpdateUnitType(a)});return function(A){return f.apply(this,arguments)}}()}]}],Request:e.h.api.get};var f};var Z=n(5219),C=n(6924),O=n(8718),T=n(5946),d=n(5894),E=n(2377),b=n(359),J=n(4779),M=n(5077),L=n(3826),p=n(8275),x=n(3999);function o(i,f){if(1&i){const a=t.EpF();t.TgZ(0,"app-button",13),t.NdJ("click",function(){t.CHM(a);const I=t.oxw();return t.KtG(I.openDialogToCreate())}),t.qZA()}if(2&i){const a=t.oxw();t.Tol("btn-filter mx-2"),t.Q6J("text","new")("icon",a.icon.PLUS)("iconPos","left")}}const r=function(i){return[i]};let m=(()=>{class i{constructor(a){this.unitTypeService=a,this.tableConfig=g(this),this.permissions=y,this.icon=Z.dv,this.filtersConfig=[{field:"search",label:"search",type:C.W.TEXT,placeholder:"search"},{field:"creator_id",label:"created_by",type:C.W.SELECT,options:{value:"id",label:"name"},request:O.x.api.get,placeholder:"select"},{field:"from",label:"from",type:C.W.DATE},{field:"to",label:"to",type:C.W.DATE}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"id",field:"id"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:T.q.asc,field:T.q.asc},{label:T.q.desc,field:T.q.desc}]}]}openDialogToCreate(){var a=this;return(0,v.Z)(function*(){(yield a.unitTypeService.openDialogToCreateUnitType())&&(a.tableConfig=g(a))})()}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(d.L))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-unit-type"]],decls:17,vars:14,consts:[[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(a,A){if(1&a&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,o,1,5,"app-button",3),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"ukt-sort",5,6)(10,"ukt-filter",7,8),t.qZA(),t.TgZ(12,"div",9),t._UZ(13,"app-table",10),t.qZA(),t.TgZ(14,"div",11),t._UZ(15,"ukt-pagination",null,12),t.qZA()),2&a){const I=t.MAs(9),R=t.MAs(11),W=t.MAs(16);t.xp6(2),t.Oqu(t.lcZ(3,8,t.lcZ(4,10,"list_of_unit_type"))),t.xp6(4),t.Q6J("hasPermissions",t.VKq(12,r,A.permissions.create)),t.xp6(2),t.Q6J("SortConfig",A.sortConfig),t.xp6(2),t.Q6J("config",A.filtersConfig),t.xp6(3),t.Q6J("tableConfig",A.tableConfig)("pagination",W)("filter",R)("sort",I)}},dependencies:[E.a,b.Q,J.r,M.z,L.x,p.z,l.rS,x.X$]}),i})();const U=[{path:"",component:(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-unit-type"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(a,A){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-unit-type"),t.qZA())},dependencies:[m]}),i})()}];let G=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.Bz.forChild(U),u.Bz]}),i})();var N=n(1471),P=n(2115),F=n(4413),_=n(1890),j=n(1019),Q=n(8096),w=n(1383);let B=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.ez,G,N.X,P.u,F.e,_.f,j.i,Q.J,x.aw,w.m]}),i})()},1771:(D,h,n)=>{n.d(h,{U:()=>v});var l=n(9291),u=n(6223);const t=["*"];let v=(()=>{class e{constructor(){this.onSubmit=new l.vpe}ngOnChanges(g){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const g=this.getFormData();this.onSubmit.emit(g)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return e.\u0275fac=function(g){return new(g||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[l.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(g,Z){1&g&&(l.F$t(),l.TgZ(0,"form",0),l.NdJ("ngSubmit",function(){return Z.submit()}),l.Hsn(1),l.qZA()),2&g&&l.Q6J("formGroup",Z.formGroup)},dependencies:[u._Y,u.JL,u.sg]}),e})()},5253:(D,h,n)=>{n.d(h,{R:()=>O});var l=n(67),u=n(6223),t=n(9291),v=n(6814),e=n(6218),y=n(3999);function g(c,T){1&c&&t._UZ(0,"i",6)}function Z(c,T){if(1&c&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"translate"),t.TgZ(3,"span",4),t.YNc(4,g,1,0,"i",5),t.qZA()()),2&c){const s=t.oxw();t.xp6(1),t.hij("",t.lcZ(2,2,s.text)," "),t.xp6(3),t.Q6J("ngIf",s.control&&(null==s.control.errors?null:s.control.errors.required))}}function C(c,T){if(1&c&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&c){const s=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Oqu(s.object.keys(s.control.errors)[0])}}let O=(()=>{class c extends l.t{constructor(s){super(),this.formGroupDirective=s,this.placeholder="",this.rows="2",this.cols="",this.readOnly=!1,this.class="d-flex flex-column justify-content-between",this.object=Object}writeValue(s){this.value=s}onValueChange(s){this.onChange(s.target.value),this.onTouched()}}return c.\u0275fac=function(s){return new(s||c)(t.Y36(u.sg,8))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-textarea"]],inputs:{value:"value",text:"text",placeholder:"placeholder",rows:"rows",cols:"cols",readOnly:"readOnly",class:"class",type:"type"},features:[t._Bn([{provide:u.JU,useExisting:c,multi:!0},{provide:u.Cf,useExisting:c,multi:!0}]),t.qOj],decls:4,vars:8,consts:[[3,"ngClass"],[4,"ngIf"],["pInputTextarea","",3,"rows","cols","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(s,d){1&s&&(t.TgZ(0,"div",0),t.YNc(1,Z,5,4,"label",1),t.TgZ(2,"textarea",2),t.NdJ("ngModelChange",function(b){return d.value=b})("input",function(b){return d.onValueChange(b)}),t.qZA(),t.YNc(3,C,2,3,"span",3),t.qZA()),2&s&&(t.Q6J("ngClass",d.class),t.xp6(1),t.Q6J("ngIf",d.text),t.xp6(1),t.Q6J("rows",d.rows)("cols",d.cols)("ngModel",d.value)("placeholder",d.placeholder)("disabled",d.readOnly),t.xp6(1),t.Q6J("ngIf",d.control&&d.control.errors&&(d.control.touched||d.formGroupDirective.submitted)))},dependencies:[v.mk,v.O5,u.Fj,u.JJ,u.On,e.g,y.X$]}),c})()},8718:(D,h,n)=>{n.d(h,{x:()=>l});const l={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}}}]);