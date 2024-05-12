"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[7519],{7519:(j,T,a)=>{a.r(T),a.d(T,{CategoriesModule:()=>te});var p=a(6814),u=a(2954),n=a(5861);const g_api_create="project-management-category/create",g_api_get="project-management-category",g_api_update="project-management-category/update/",g_api_delete="project-management-category/";var d=function(o){return o.create="Create Project Management Category",o.view="View Project Management Categories",o.edit="Edit Project Management Category",o.delete="Delete Project Management Category",o}(d||{});const C=o=>{return{cols:[{field:"id",label:"id",class:""},{field:"name",label:"category_name",class:""},{field:"description",label:"description",format:s=>s.description?s.description:"-"},{label:"action",actions:[{id:d.delete,icon:"trash",class:"main-color",fun:(s=(0,n.Z)(function*(t){return yield o.categoriesService.delete(t,"delete category")}),function(i){return s.apply(this,arguments)})},{id:d.edit,icon:"pen-to-square",class:"main-color",fun:function(){var s=(0,n.Z)(function*(t){return yield o.categoriesService.openDialogToUpdateCategory(t)});return function(i){return s.apply(this,arguments)}}()}]}],Request:g_api_get};var s};var f=a(5219),v=a(6924),x=a(5946),e=a(9291),r=a(6223),m=a(8645),_=a(8763),Z=a(5118),J=a(1771),M=a(8614),E=a(5253),L=a(4779),D=a(3999);function U(o,s){if(1&o&&(e.TgZ(0,"div",16),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.xp6(1),e.hij(" ",t.value," ")}}function S(o,s){if(1&o&&(e.TgZ(0,"p",17),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(null==t.serverValidation?null:t.serverValidation.name[0])}}function I(o,s){if(1&o&&(e.TgZ(0,"p",17),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(null==t.serverValidation?null:t.serverValidation.description[0])}}let O=(()=>{class o{constructor(t,i,c,h,y){this.fb=t,this.toaster=i,this.categoriesService=c,this.config=h,this.dialogRef=y,this.unsubscribe=new m.x,this.formGroup=this.initForm(),this.isLoading=!1,this.categories=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){this.categoriesService.getCategories().subscribe(t=>{this.categories=t.data})}reject(t){this.dialogRef.close(t)}initForm(){return this.fb.group({id:[Number],name:["",[r.kI.required,r.kI.minLength(1),r.kI.maxLength(50)]],description:["",r.kI.required]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.isLoading=!0,this.config.data.data?this.categoriesService.update(this.formGroup.value).subscribe(t=>{this.toaster.success(t.message),this.dialogRef.close(!0)},t=>{this.errors=t.error.errors,this.isLoading=!1}):this.categoriesService.create(this.formGroup.value).subscribe(t=>{this.toaster.success(t.message),this.dialogRef.close(!0)},t=>{this.errors=t.error.errors,this.isLoading=!1}))}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data?.id,name:this.config.data.data?.name,description:this.config.data.data?.description})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(_._W),e.Y36(F),e.Y36(Z.S),e.Y36(Z.E7))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-categories-form"]],decls:24,vars:21,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/inventory-icon.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],["translate","",1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["class","error",4,"ngIf"],["text","description","formControlName","description","ngDefaultControl","","placeholder","",3,"type"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"],[1,"error"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"span",5),e.NdJ("click",function(){return i.reject(!1)}),e._UZ(6,"i",6),e.qZA()(),e.TgZ(7,"p",7),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"app-form",8),e.NdJ("onSubmit",function(){return i.accept()}),e.YNc(11,U,2,1,"div",9),e.ALo(12,"keyvalue"),e.TgZ(13,"div"),e._UZ(14,"app-text",10),e.YNc(15,S,2,1,"p",11),e.qZA(),e.TgZ(16,"div"),e._UZ(17,"app-textarea",12),e.YNc(18,I,2,1,"p",11),e.qZA(),e.TgZ(19,"div",13)(20,"div",14)(21,"app-button",15),e.NdJ("click",function(){return i.reject(!1)}),e.qZA()(),e.TgZ(22,"div",14)(23,"app-button",15),e.NdJ("click",function(){return i.accept()}),e.qZA()()()()()),2&t){let c;e.xp6(8),e.Oqu(e.lcZ(9,17,null!==(c=i.config.header)&&void 0!==c?c:"")),e.xp6(2),e.Q6J("formGroup",i.formGroup),e.xp6(1),e.Q6J("ngForOf",e.lcZ(12,19,i.errors)),e.xp6(3),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("type","text"),e.xp6(1),e.Q6J("ngIf",null==i.serverValidation?null:i.serverValidation.name),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("type","text"),e.xp6(1),e.Q6J("ngIf",null==i.serverValidation?null:i.serverValidation.description),e.xp6(3),e.Tol("btn-cancel"),e.Q6J("text","Cancel"),e.xp6(2),e.Tol("btn-filter"),e.Q6J("text",null==i.config.data?null:i.config.data.acceptLabel)}},dependencies:[p.sg,p.O5,J.U,r.Fj,r.JJ,r.JL,r.sg,r.u,M.T,E.R,L.r,D.Pi,p.Nd,D.X$]}),o})();var G=a(1732),P=a(3562);let F=(()=>{class o{constructor(t,i,c){this.http=t,this.dynamicDialog=i,this.toastr=c}getCategories(t){return this.http.get(g_api_get)}openDialogToCreateCategory(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_category",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},O)}create(t){return this.http.post(g_api_create,t)}delete(t,i,c){var h=this;return(0,n.Z)(function*(){const y={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...t},name:"name"},width:"500px",height:"auto"};if(yield h.dynamicDialog.confirm(y))try{const b=yield h.http.delete(g_api_delete+t.id).toPromise();return h.toastr.success(b.message),b}catch(b){throw h.toastr.error(b.error.message),b}return!1})()}openDialogToUpdateCategory(t,i,c){var h=this;return(0,n.Z)(function*(){const y={showHeader:!1,header:"update_category",data:{acceptLabel:"update",rejectLabel:"cancel",data:{...t}},height:"330px",width:"auto"};return yield h.dynamicDialog.showDialogWithComponent(y,O)})()}update(t){return this.http.post(g_api_update+t.id,t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(G.O),e.LFG(P.U),e.LFG(_._W))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var N=a(2377),Q=a(359),R=a(5077),V=a(4811),Y=a(8275);function B(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"app-button",14),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.openDialogToCreate())}),e.qZA()}if(2&o){const t=e.oxw();e.Tol("btn-filter"),e.Q6J("text","new")("icon",t.icon.PLUS)("iconPos","left")}}const W=function(o){return[o]},K=[{path:"",component:(()=>{class o{constructor(t){this.categoriesService=t,this.tableConfig=C(this),this.filtersConfig=[{field:"search",label:"search",type:v.W.TEXT,placeholder:"search"},{field:"from",label:"from",type:v.W.DATE},{field:"to",label:"to",type:v.W.DATE}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"id",field:"id"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:x.q.asc,field:x.q.asc},{label:x.q.desc,field:x.q.desc}]}],this.permissions=d,this.icon=f.dv}openDialogToCreate(){var t=this;return(0,n.Z)(function*(){(yield t.categoriesService.openDialogToCreateCategory())&&(t.tableConfig=C(t))})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(F))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list"]],decls:17,vars:12,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",3),e.YNc(6,B,1,5,"app-button",4),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"ukt-sort",6,7)(10,"ukt-filter",8,9),e.qZA(),e.TgZ(12,"div",10),e._UZ(13,"app-table",11),e.qZA(),e.TgZ(14,"div",12),e._UZ(15,"ukt-pagination",null,13),e.qZA()()),2&t){const c=e.MAs(9),h=e.MAs(11),y=e.MAs(16);e.xp6(3),e.Oqu(e.lcZ(4,8,"categories")),e.xp6(3),e.Q6J("hasPermissions",e.VKq(10,W,i.permissions.create)),e.xp6(2),e.Q6J("SortConfig",i.sortConfig),e.xp6(2),e.Q6J("config",i.filtersConfig),e.xp6(3),e.Q6J("tableConfig",i.tableConfig)("pagination",y)("filter",h)("sort",c)}},dependencies:[N.a,Q.Q,L.r,R.z,V.x,Y.z,D.X$]}),o})()}];let w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(K),u.Bz]}),o})();var X=a(1471),z=a(2115),H=a(4413),$=a(1890),k=a(1019),q=a(8096),ee=a(1383);let te=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,w,X.X,z.u,H.e,$.f,k.i,q.J,ee.m,D.aw]}),o})()},1771:(j,T,a)=>{a.d(T,{U:()=>g});var p=a(9291),u=a(6223);const n=["*"];let g=(()=>{class d{constructor(){this.onSubmit=new p.vpe}ngOnChanges(f){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const f=this.getFormData();this.onSubmit.emit(f)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return d.\u0275fac=function(f){return new(f||d)},d.\u0275cmp=p.Xpm({type:d,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[p.TTD],ngContentSelectors:n,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(f,v){1&f&&(p.F$t(),p.TgZ(0,"form",0),p.NdJ("ngSubmit",function(){return v.submit()}),p.Hsn(1),p.qZA()),2&f&&p.Q6J("formGroup",v.formGroup)},dependencies:[u._Y,u.JL,u.sg]}),d})()},5253:(j,T,a)=>{a.d(T,{R:()=>x});var p=a(67),u=a(6223),n=a(9291),g=a(6814),d=a(6218),C=a(3999);function f(l,e){1&l&&n._UZ(0,"i",6)}function v(l,e){if(1&l&&(n.TgZ(0,"label"),n._uU(1),n.ALo(2,"titlecase"),n.ALo(3,"translate"),n.TgZ(4,"span",4),n.YNc(5,f,1,0,"i",5),n.qZA()()),2&l){const r=n.oxw();n.xp6(1),n.hij("",n.lcZ(2,2,n.lcZ(3,4,r.text))," "),n.xp6(4),n.Q6J("ngIf",r.control&&(null==r.control.errors?null:r.control.errors.required))}}function A(l,e){if(1&l&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&l){const r=n.oxw();n.Tol("text-danger"),n.xp6(1),n.Oqu(r.object.keys(r.control.errors)[0])}}let x=(()=>{class l extends p.t{constructor(r){super(),this.formGroupDirective=r,this.placeholder="",this.rows="2",this.cols="",this.readOnly=!1,this.class="d-flex flex-column justify-content-between",this.object=Object}writeValue(r){this.value=r}onValueChange(r){this.onChange(r.target.value),this.onTouched()}}return l.\u0275fac=function(r){return new(r||l)(n.Y36(u.sg,8))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-textarea"]],inputs:{value:"value",text:"text",placeholder:"placeholder",rows:"rows",cols:"cols",readOnly:"readOnly",class:"class",type:"type"},features:[n._Bn([{provide:u.JU,useExisting:l,multi:!0},{provide:u.Cf,useExisting:l,multi:!0}]),n.qOj],decls:4,vars:8,consts:[[3,"ngClass"],[4,"ngIf"],["pInputTextarea","",3,"rows","cols","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(r,m){1&r&&(n.TgZ(0,"div",0),n.YNc(1,v,6,6,"label",1),n.TgZ(2,"textarea",2),n.NdJ("ngModelChange",function(Z){return m.value=Z})("input",function(Z){return m.onValueChange(Z)}),n.qZA(),n.YNc(3,A,2,3,"span",3),n.qZA()),2&r&&(n.Q6J("ngClass",m.class),n.xp6(1),n.Q6J("ngIf",m.text),n.xp6(1),n.Q6J("rows",m.rows)("cols",m.cols)("ngModel",m.value)("placeholder",m.placeholder)("disabled",m.readOnly),n.xp6(1),n.Q6J("ngIf",m.control&&m.control.errors&&(m.control.touched||m.formGroupDirective.submitted)))},dependencies:[g.mk,g.O5,u.Fj,u.JJ,u.On,d.g,g.rS,C.X$]}),l})()}}]);