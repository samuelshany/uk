"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[2040],{2040:(_,v,a)=>{a.r(v),a.d(v,{ClausesModule:()=>ee});var u=a(6814),d=a(8209),o=a(5861),m=a(2823),f=function(n){return n.create="Create Clause",n.view="View Clauses",n.edit="Edit Clause",n.delete="Delete Clause",n}(f||{});const C=n=>{return{cols:[{field:"id",label:"id",class:""},{field:"name",label:"name",class:""},{field:"description",label:"description",format:r=>r.description?r.description:"-"},{label:"action",actions:[{id:f.delete,icon:"trash",class:"main-color",fun:(r=(0,o.Z)(function*(t){return yield n.clausesService.delete(t,"delete Clause")}),function(s){return r.apply(this,arguments)})},{id:f.edit,icon:"pen-to-square",class:"main-color",fun:function(){var r=(0,o.Z)(function*(t){return yield n.clausesService.openDialogToUpdate(t)});return function(s){return r.apply(this,arguments)}}()}]}],Request:m.N.api.get};var r};var g=a(5219),T=a(6924),x=a(5946),e=a(9291),i=a(6223),p=a(8645),b=a(8763),y=a(5118),N=a(1771),M=a(8614),U=a(5253),O=a(4779),A=a(3999);function S(n,r){if(1&n&&(e.TgZ(0,"div",16),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t.value," ")}}function E(n,r){if(1&n&&(e.TgZ(0,"p",17),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(null==t.serverValidation?null:t.serverValidation.name[0])}}function F(n,r){if(1&n&&(e.TgZ(0,"p",17),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(null==t.serverValidation?null:t.serverValidation.description[0])}}let L=(()=>{class n{constructor(t,s,l,D,h){this.fb=t,this.toaster=s,this.clausesService=l,this.config=D,this.dialogRef=h,this.unsubscribe=new p.x,this.formGroup=this.initForm(),this.isLoading=!1,this.clauses=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){this.clausesService.get().subscribe(t=>{this.clauses=t.data})}reject(t){this.dialogRef.close(t)}initForm(){return this.fb.group({id:[Number],name:["",[i.kI.required,i.kI.minLength(1)]],description:["",i.kI.required]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.isLoading=!0,this.config.data.data?this.clausesService.update(this.formGroup.value).subscribe(t=>{this.toaster.success(t.message),this.dialogRef.close(!0)},t=>{this.errors=t.error.errors,this.isLoading=!1}):this.clausesService.create(this.formGroup.value).subscribe(t=>{this.toaster.success(t.message),this.dialogRef.close(!0)},t=>{this.errors=t.error.errors,this.isLoading=!1}))}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data?.id,name:this.config.data.data?.name,description:this.config.data.data?.description})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(i.qu),e.Y36(b._W),e.Y36(J),e.Y36(y.S),e.Y36(y.E7))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-new-clause"]],decls:24,vars:21,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/inventory-icon.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],["translate","",1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["class","error",4,"ngIf"],["text","description","formControlName","description","ngDefaultControl","","placeholder","",3,"type"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"],[1,"error"]],template:function(t,s){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"span",5),e.NdJ("click",function(){return s.reject(!1)}),e._UZ(6,"i",6),e.qZA()(),e.TgZ(7,"p",7),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"app-form",8),e.NdJ("onSubmit",function(){return s.accept()}),e.YNc(11,S,2,1,"div",9),e.ALo(12,"keyvalue"),e.TgZ(13,"div"),e._UZ(14,"app-text",10),e.YNc(15,E,2,1,"p",11),e.qZA(),e.TgZ(16,"div"),e._UZ(17,"app-textarea",12),e.YNc(18,F,2,1,"p",11),e.qZA(),e.TgZ(19,"div",13)(20,"div",14)(21,"app-button",15),e.NdJ("click",function(){return s.reject(!1)}),e.qZA()(),e.TgZ(22,"div",14)(23,"app-button",15),e.NdJ("click",function(){return s.accept()}),e.qZA()()()()()),2&t){let l;e.xp6(8),e.Oqu(e.lcZ(9,17,null!==(l=s.config.header)&&void 0!==l?l:"")),e.xp6(2),e.Q6J("formGroup",s.formGroup),e.xp6(1),e.Q6J("ngForOf",e.lcZ(12,19,s.errors)),e.xp6(3),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("type","text"),e.xp6(1),e.Q6J("ngIf",null==s.serverValidation?null:s.serverValidation.name),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("type","text"),e.xp6(1),e.Q6J("ngIf",null==s.serverValidation?null:s.serverValidation.description),e.xp6(3),e.Tol("btn-cancel"),e.Q6J("text","Cancel"),e.xp6(2),e.Tol("btn-filter"),e.Q6J("text",null==s.config.data?null:s.config.data.acceptLabel)}},dependencies:[u.sg,u.O5,N.U,i.Fj,i.JJ,i.JL,i.sg,i.u,M.T,U.R,O.r,A.Pi,u.Nd,A.X$]}),n})();var I=a(1732),G=a(3562);let J=(()=>{class n{constructor(t,s,l){this.http=t,this.dynamicDialog=s,this.toastr=l}get(t){return this.http.get(m.N.api.get)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_clause",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},L)}create(t){return this.http.post(m.N.api.create,t)}delete(t){var s=this;return(0,o.Z)(function*(){const l={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...t},name:"name"},width:"500px",height:"auto"};if(yield s.dynamicDialog.confirm(l))try{const h=yield s.http.delete(m.N.api.delete+t.id).toPromise();return s.toastr.success(h.message),h}catch(h){throw s.toastr.error(h.error.message),h}return!1})()}openDialogToUpdate(t){var s=this;return(0,o.Z)(function*(){const l={showHeader:!1,header:"update_clause",data:{acceptLabel:"update",rejectLabel:"cancel",data:{...t}},height:"330px",width:"auto"};return yield s.dynamicDialog.showDialogWithComponent(l,L)})()}update(t){return this.http.post(m.N.api.update+t.id,t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(I.O),e.LFG(G.U),e.LFG(b._W))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var j=a(2377),P=a(359),Q=a(5077),w=a(4811),R=a(8275);function V(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"app-button",14),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.openDialogToCreate())}),e.qZA()}if(2&n){const t=e.oxw();e.Tol("btn-filter"),e.Q6J("text","new")("icon",t.icon.PLUS)("iconPos","left")}}const Y=function(n){return[n]},B=[{path:"",component:(()=>{class n{constructor(t){this.clausesService=t,this.tableConfig=C(this),this.filtersConfig=[{field:"search",label:"search",type:T.W.TEXT,placeholder:"search"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"id",field:"id"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:x.q.asc,field:x.q.asc},{label:x.q.desc,field:x.q.desc}]}],this.permissions=f,this.icon=g.dv}openDialogToCreate(){var t=this;return(0,o.Z)(function*(){(yield t.clausesService.openDialogToCreate())&&(t.tableConfig=C(t))})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-clauses"]],decls:17,vars:12,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(t,s){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",3),e.YNc(6,V,1,5,"app-button",4),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"ukt-sort",6,7)(10,"ukt-filter",8,9),e.qZA(),e.TgZ(12,"div",10),e._UZ(13,"app-table",11),e.qZA(),e.TgZ(14,"div",12),e._UZ(15,"ukt-pagination",null,13),e.qZA()()),2&t){const l=e.MAs(9),D=e.MAs(11),h=e.MAs(16);e.xp6(3),e.Oqu(e.lcZ(4,8,"clauses_list")),e.xp6(3),e.Q6J("hasPermissions",e.VKq(10,Y,s.permissions.create)),e.xp6(2),e.Q6J("SortConfig",s.sortConfig),e.xp6(2),e.Q6J("config",s.filtersConfig),e.xp6(3),e.Q6J("tableConfig",s.tableConfig)("pagination",h)("filter",D)("sort",l)}},dependencies:[j.a,P.Q,O.r,Q.z,w.x,R.z,A.X$]}),n})()}];let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(B),d.Bz]}),n})();var K=a(4413),X=a(1890),z=a(1019),H=a(2115),$=a(8096),q=a(1471),k=a(1383);let ee=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,W,q.X,H.u,K.e,X.f,z.i,$.J,A.aw,k.m]}),n})()},1771:(_,v,a)=>{a.d(v,{U:()=>m});var u=a(9291),d=a(6223);const o=["*"];let m=(()=>{class f{constructor(){this.onSubmit=new u.vpe}ngOnChanges(g){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const g=this.getFormData();this.onSubmit.emit(g)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return f.\u0275fac=function(g){return new(g||f)},f.\u0275cmp=u.Xpm({type:f,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[u.TTD],ngContentSelectors:o,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(g,T){1&g&&(u.F$t(),u.TgZ(0,"form",0),u.NdJ("ngSubmit",function(){return T.submit()}),u.Hsn(1),u.qZA()),2&g&&u.Q6J("formGroup",T.formGroup)},dependencies:[d._Y,d.JL,d.sg]}),f})()},5253:(_,v,a)=>{a.d(v,{R:()=>x});var u=a(67),d=a(6223),o=a(9291),m=a(6814),f=a(6218),C=a(3999);function g(c,e){1&c&&o._UZ(0,"i",6)}function T(c,e){if(1&c&&(o.TgZ(0,"label"),o._uU(1),o.ALo(2,"titlecase"),o.ALo(3,"translate"),o.TgZ(4,"span",4),o.YNc(5,g,1,0,"i",5),o.qZA()()),2&c){const i=o.oxw();o.xp6(1),o.hij("",o.lcZ(2,2,o.lcZ(3,4,i.text))," "),o.xp6(4),o.Q6J("ngIf",i.control&&(null==i.control.errors?null:i.control.errors.required))}}function Z(c,e){if(1&c&&(o.TgZ(0,"span"),o._uU(1),o.qZA()),2&c){const i=o.oxw();o.Tol("text-danger"),o.xp6(1),o.Oqu(i.object.keys(i.control.errors)[0])}}let x=(()=>{class c extends u.t{constructor(i){super(),this.formGroupDirective=i,this.placeholder="",this.rows="2",this.cols="",this.readOnly=!1,this.class="d-flex flex-column justify-content-between",this.object=Object}writeValue(i){this.value=i}onValueChange(i){this.onChange(i.target.value),this.onTouched()}}return c.\u0275fac=function(i){return new(i||c)(o.Y36(d.sg,8))},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-textarea"]],inputs:{value:"value",text:"text",placeholder:"placeholder",rows:"rows",cols:"cols",readOnly:"readOnly",class:"class",type:"type"},features:[o._Bn([{provide:d.JU,useExisting:c,multi:!0},{provide:d.Cf,useExisting:c,multi:!0}]),o.qOj],decls:4,vars:8,consts:[[3,"ngClass"],[4,"ngIf"],["pInputTextarea","",3,"rows","cols","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(i,p){1&i&&(o.TgZ(0,"div",0),o.YNc(1,T,6,6,"label",1),o.TgZ(2,"textarea",2),o.NdJ("ngModelChange",function(y){return p.value=y})("input",function(y){return p.onValueChange(y)}),o.qZA(),o.YNc(3,Z,2,3,"span",3),o.qZA()),2&i&&(o.Q6J("ngClass",p.class),o.xp6(1),o.Q6J("ngIf",p.text),o.xp6(1),o.Q6J("rows",p.rows)("cols",p.cols)("ngModel",p.value)("placeholder",p.placeholder)("disabled",p.readOnly),o.xp6(1),o.Q6J("ngIf",p.control&&p.control.errors&&(p.control.touched||p.formGroupDirective.submitted)))},dependencies:[m.mk,m.O5,d.Fj,d.JJ,d.On,f.g,m.rS,C.X$]}),c})()}}]);