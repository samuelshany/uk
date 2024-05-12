"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[8403],{8403:(A,P,a)=>{a.r(P),a.d(P,{ProjectPhasesModule:()=>ee});var p=a(6814),d=a(8209),n=a(5861),m=a(3012),f=function(o){return o.create="Create Project Phase",o.view="View Project Phases",o.edit="Edit Project Phase",o.delete="Delete Project Phase",o}(f||{});const v=o=>{return{cols:[{field:"id",label:"id",class:""},{field:"name",label:"name",class:""},{field:"description",label:"description",format:i=>i.description?i.description:"-"},{label:"action",actions:[{id:f.delete,icon:"trash",class:"main-color",fun:(i=(0,n.Z)(function*(t){return yield o.projectPhasesService.delete(t,"delete ProjectPhase")}),function(s){return i.apply(this,arguments)})},{id:f.edit,icon:"pen-to-square",class:"main-color",fun:function(){var i=(0,n.Z)(function*(t){return yield o.projectPhasesService.openDialogToUpdate(t)});return function(s){return i.apply(this,arguments)}}()}]}],Request:m.N.api.get};var i};var h=a(5219),C=a(6924),T=a(5946),e=a(9291),r=a(6223),u=a(8645),y=a(8763),x=a(5118),O=a(1771),J=a(8614),N=a(5253),_=a(4779),Z=a(3999);function M(o,i){if(1&o&&(e.TgZ(0,"div",16),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.hij(" ",t.value," ")}}function U(o,i){if(1&o&&(e.TgZ(0,"p",17),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(null==t.serverValidation?null:t.serverValidation.name[0])}}function S(o,i){if(1&o&&(e.TgZ(0,"p",17),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(null==t.serverValidation?null:t.serverValidation.description[0])}}let D=(()=>{class o{constructor(t,s,l,b,g){this.fb=t,this.toaster=s,this.projectPhasesService=l,this.config=b,this.dialogRef=g,this.unsubscribe=new u.x,this.formGroup=this.initForm(),this.isLoading=!1,this.projectPhases=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){this.projectPhasesService.get().subscribe(t=>{this.projectPhases=t.data})}reject(t){this.dialogRef.close(t)}initForm(){return this.fb.group({id:[Number],name:["",[r.kI.required,r.kI.minLength(1),r.kI.maxLength(50)]],description:["",r.kI.required]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.isLoading=!0,this.config.data.data?this.projectPhasesService.update(this.formGroup.value).subscribe(t=>{this.toaster.success(t.message),this.dialogRef.close(!0)},t=>{this.errors=t.error.errors,this.isLoading=!1}):this.projectPhasesService.create(this.formGroup.value).subscribe(t=>{this.toaster.success(t.message),this.dialogRef.close(!0)},t=>{this.errors=t.error.errors,this.isLoading=!1}))}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data?.id,name:this.config.data.data?.name,description:this.config.data.data?.description})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(y._W),e.Y36(L),e.Y36(x.S),e.Y36(x.E7))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-new-project-phases"]],decls:24,vars:21,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/inventory-icon.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],["translate","",1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["class","error",4,"ngIf"],["text","description","formControlName","description","ngDefaultControl","","placeholder","",3,"type"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"],[1,"error"]],template:function(t,s){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"span",5),e.NdJ("click",function(){return s.reject(!1)}),e._UZ(6,"i",6),e.qZA()(),e.TgZ(7,"p",7),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"app-form",8),e.NdJ("onSubmit",function(){return s.accept()}),e.YNc(11,M,2,1,"div",9),e.ALo(12,"keyvalue"),e.TgZ(13,"div"),e._UZ(14,"app-text",10),e.YNc(15,U,2,1,"p",11),e.qZA(),e.TgZ(16,"div"),e._UZ(17,"app-textarea",12),e.YNc(18,S,2,1,"p",11),e.qZA(),e.TgZ(19,"div",13)(20,"div",14)(21,"app-button",15),e.NdJ("click",function(){return s.reject(!1)}),e.qZA()(),e.TgZ(22,"div",14)(23,"app-button",15),e.NdJ("click",function(){return s.accept()}),e.qZA()()()()()),2&t){let l;e.xp6(8),e.Oqu(e.lcZ(9,17,null!==(l=s.config.header)&&void 0!==l?l:"")),e.xp6(2),e.Q6J("formGroup",s.formGroup),e.xp6(1),e.Q6J("ngForOf",e.lcZ(12,19,s.errors)),e.xp6(3),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("type","text"),e.xp6(1),e.Q6J("ngIf",null==s.serverValidation?null:s.serverValidation.name),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("type","text"),e.xp6(1),e.Q6J("ngIf",null==s.serverValidation?null:s.serverValidation.description),e.xp6(3),e.Tol("btn-cancel"),e.Q6J("text","Cancel"),e.xp6(2),e.Tol("btn-filter"),e.Q6J("text",null==s.config.data?null:s.config.data.acceptLabel)}},dependencies:[p.sg,p.O5,O.U,r.Fj,r.JJ,r.JL,r.sg,r.u,J.T,N.R,_.r,Z.Pi,p.Nd,Z.X$]}),o})();var E=a(1732),I=a(3562);let L=(()=>{class o{constructor(t,s,l){this.http=t,this.dynamicDialog=s,this.toastr=l}get(t){return this.http.get(m.N.api.get)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_project_phase",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},D)}create(t){return this.http.post(m.N.api.create,t)}delete(t){var s=this;return(0,n.Z)(function*(){const l={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...t},name:"name"},width:"500px",height:"auto"};if(yield s.dynamicDialog.confirm(l))try{const g=yield s.http.delete(m.N.api.delete+t.id).toPromise();return s.toastr.success(g.message),g}catch(g){throw s.toastr.error(g.error.message),g}return!1})()}openDialogToUpdate(t){var s=this;return(0,n.Z)(function*(){const l={showHeader:!1,header:"update_project_phase",data:{acceptLabel:"update",rejectLabel:"cancel",data:{...t}},height:"330px",width:"auto"};return yield s.dynamicDialog.showDialogWithComponent(l,D)})()}update(t){return this.http.post(m.N.api.update+t.id,t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(E.O),e.LFG(I.U),e.LFG(y._W))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var F=a(2377),G=a(359),Q=a(5077),w=a(4811),R=a(8275);function V(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"app-button",14),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.openDialogToCreate())}),e.qZA()}if(2&o){const t=e.oxw();e.Tol("btn-filter"),e.Q6J("text","new")("icon",t.icon.PLUS)("iconPos","left")}}const Y=function(o){return[o]},B=[{path:"",component:(()=>{class o{constructor(t){this.projectPhasesService=t,this.tableConfig=v(this),this.filtersConfig=[{field:"search",label:"search",type:C.W.TEXT,placeholder:"search"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"id",field:"id"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:T.q.asc,field:T.q.asc},{label:T.q.desc,field:T.q.desc}]}],this.permissions=f,this.icon=h.dv}openDialogToCreate(){var t=this;return(0,n.Z)(function*(){(yield t.projectPhasesService.openDialogToCreate())&&(t.tableConfig=v(t))})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(L))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-project-phases"]],decls:17,vars:12,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(t,s){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",3),e.YNc(6,V,1,5,"app-button",4),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"ukt-sort",6,7)(10,"ukt-filter",8,9),e.qZA(),e.TgZ(12,"div",10),e._UZ(13,"app-table",11),e.qZA(),e.TgZ(14,"div",12),e._UZ(15,"ukt-pagination",null,13),e.qZA()()),2&t){const l=e.MAs(9),b=e.MAs(11),g=e.MAs(16);e.xp6(3),e.Oqu(e.lcZ(4,8,"projects_phase_list")),e.xp6(3),e.Q6J("hasPermissions",e.VKq(10,Y,s.permissions.create)),e.xp6(2),e.Q6J("SortConfig",s.sortConfig),e.xp6(2),e.Q6J("config",s.filtersConfig),e.xp6(3),e.Q6J("tableConfig",s.tableConfig)("pagination",g)("filter",b)("sort",l)}},dependencies:[F.a,G.Q,_.r,Q.z,w.x,R.z,Z.X$]}),o})()}];let W=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(B),d.Bz]}),o})();var K=a(4413),X=a(1890),z=a(1019),H=a(2115),$=a(8096),k=a(1471),q=a(1383);let ee=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,k.X,H.u,K.e,X.f,z.i,$.J,q.m,Z.aw,W]}),o})()},1771:(A,P,a)=>{a.d(P,{U:()=>m});var p=a(9291),d=a(6223);const n=["*"];let m=(()=>{class f{constructor(){this.onSubmit=new p.vpe}ngOnChanges(h){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const h=this.getFormData();this.onSubmit.emit(h)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return f.\u0275fac=function(h){return new(h||f)},f.\u0275cmp=p.Xpm({type:f,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[p.TTD],ngContentSelectors:n,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(h,C){1&h&&(p.F$t(),p.TgZ(0,"form",0),p.NdJ("ngSubmit",function(){return C.submit()}),p.Hsn(1),p.qZA()),2&h&&p.Q6J("formGroup",C.formGroup)},dependencies:[d._Y,d.JL,d.sg]}),f})()},5253:(A,P,a)=>{a.d(P,{R:()=>T});var p=a(67),d=a(6223),n=a(9291),m=a(6814),f=a(6218),v=a(3999);function h(c,e){1&c&&n._UZ(0,"i",6)}function C(c,e){if(1&c&&(n.TgZ(0,"label"),n._uU(1),n.ALo(2,"titlecase"),n.ALo(3,"translate"),n.TgZ(4,"span",4),n.YNc(5,h,1,0,"i",5),n.qZA()()),2&c){const r=n.oxw();n.xp6(1),n.hij("",n.lcZ(2,2,n.lcZ(3,4,r.text))," "),n.xp6(4),n.Q6J("ngIf",r.control&&(null==r.control.errors?null:r.control.errors.required))}}function j(c,e){if(1&c&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&c){const r=n.oxw();n.Tol("text-danger"),n.xp6(1),n.Oqu(r.object.keys(r.control.errors)[0])}}let T=(()=>{class c extends p.t{constructor(r){super(),this.formGroupDirective=r,this.placeholder="",this.rows="2",this.cols="",this.readOnly=!1,this.class="d-flex flex-column justify-content-between",this.object=Object}writeValue(r){this.value=r}onValueChange(r){this.onChange(r.target.value),this.onTouched()}}return c.\u0275fac=function(r){return new(r||c)(n.Y36(d.sg,8))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-textarea"]],inputs:{value:"value",text:"text",placeholder:"placeholder",rows:"rows",cols:"cols",readOnly:"readOnly",class:"class",type:"type"},features:[n._Bn([{provide:d.JU,useExisting:c,multi:!0},{provide:d.Cf,useExisting:c,multi:!0}]),n.qOj],decls:4,vars:8,consts:[[3,"ngClass"],[4,"ngIf"],["pInputTextarea","",3,"rows","cols","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(r,u){1&r&&(n.TgZ(0,"div",0),n.YNc(1,C,6,6,"label",1),n.TgZ(2,"textarea",2),n.NdJ("ngModelChange",function(x){return u.value=x})("input",function(x){return u.onValueChange(x)}),n.qZA(),n.YNc(3,j,2,3,"span",3),n.qZA()),2&r&&(n.Q6J("ngClass",u.class),n.xp6(1),n.Q6J("ngIf",u.text),n.xp6(1),n.Q6J("rows",u.rows)("cols",u.cols)("ngModel",u.value)("placeholder",u.placeholder)("disabled",u.readOnly),n.xp6(1),n.Q6J("ngIf",u.control&&u.control.errors&&(u.control.touched||u.formGroupDirective.submitted)))},dependencies:[m.mk,m.O5,d.Fj,d.JJ,d.On,f.g,m.rS,v.X$]}),c})()}}]);