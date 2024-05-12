"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[8511],{6731:(b,d,n)=>{n.r(d),n.d(d,{ConfigurationModule:()=>it});var a=n(6814),c=n(8209),m=n(5861),C=n(5219),p=n(438),h=n(2897),r=n(9300),f=function(e){return e.create="Create Purchase",e.view="View Purchases",e.edit="Edit Purchase",e.delete="Delete Purchase",e}(f||{});const v=e=>{return{cols:[{field:"id",label:"code ",class:""},{field:"status_name",label:"status_name",class:""},{field:"color",label:"color"},{label:"action",actions:[{id:f.delete,icon:"trash",class:"main-color",fun:(s=(0,m.Z)(function*(o){return yield e.configrationService.deleteConfigration(o,"delete-configration")}),function(i){return s.apply(this,arguments)})},{id:f.edit,icon:"pen-to-square",class:"main-color",fun:function(){var s=(0,m.Z)(function*(o){return yield e.configrationService.openDialogToUpdate(o)});return function(i){return s.apply(this,arguments)}}()}]}],Request:r.W.api.get};var s};var A=n(6924),D=n(5946),J=n(8645),t=n(9291),x=n(5619),g=n(6223),F=n(1732),L=n(8763),S=n(5118),W=n(1771),B=n(2305),j=n(8614),M=n(4779),Z=n(3999);function I(e,s){if(1&e&&(t.TgZ(0,"div",20),t._uU(1),t.qZA()),2&e){const o=s.$implicit;t.xp6(1),t.hij(" ",o.value," ")}}let O=(()=>{class e{constructor(o,i,l,u,y,E){this.http=o,this.fb=i,this.toastr=l,this.dynamicDialogConfig=u,this.dialogRef=y,this.configrationService=E,this.payment_accounts=[],this.formGroup=this.initForm(),this.configrationConfig=r.W,this.dynamicDialogConfig.data?.data&&(console.log(this.dynamicDialogConfig.data?.data),this.fillDataToUpdate(this.dynamicDialogConfig.data?.data))}ngOnInit(){}initForm(){return this.fb.group({id:[Number],status_name:["",g.kI.required],final_state:[!1],color:["#000000",g.kI.required]})}changeStatus(o){o.checked?this.formGroup.get("final_state")?.setValue(!0):this.formGroup.get("final_state")?.setValue(!1)}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.dynamicDialogConfig.data.data?this.configrationService.update(this.formGroup.value).subscribe({next:o=>{this.toastr.success(o.message),this.closePopup(!0)},error:o=>{this.errors=o.error.errors,this.toastr.error(o.error.message)}}):this.configrationService.create(this.formGroup.value).subscribe({next:o=>{this.toastr.success(o.message),this.closePopup(!0)},error:o=>{this.errors=o.error.errors,this.toastr.error(o.error.message)}})}fillDataToUpdate(o){this.formGroup.patchValue({id:o.id,color:o.color,final_state:o.final_state,status_name:o.status_name})}closePopup(o){this.dialogRef.close(o)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(F.O),t.Y36(g.qu),t.Y36(L._W),t.Y36(S.S),t.Y36(S.E7),t.Y36(U))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-configration-form"]],decls:26,vars:19,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/purchase -2.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"mb-3","col-12"],["formControlName","status_name","ngDefaultControl","","text","status_name","placeholder",""],[1,"mb-3","col-6"],["for","color","translate","color",1,"fs-3","px-5"],["type","color","formControlName","color","id","color",2,"vertical-align","middle"],["text","final-state","formControlName","final_state",3,"change"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return i.closePopup(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.YNc(11,I,2,1,"div",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"div",11),t._UZ(15,"app-text",12),t.qZA(),t.TgZ(16,"div",13),t._UZ(17,"label",14)(18,"input",15),t.qZA(),t.TgZ(19,"div",13)(20,"app-checkbox",16),t.NdJ("change",function(u){return i.changeStatus(u)}),t.qZA()()(),t.TgZ(21,"div",17)(22,"div",18)(23,"app-button",19),t.NdJ("click",function(){return i.closePopup(!1)}),t.qZA()(),t.TgZ(24,"div",18)(25,"app-button",19),t.NdJ("click",function(){return i.accept()}),t.qZA()()()()()),2&o){let l;t.xp6(8),t.Oqu(t.lcZ(9,15,null!==(l=i.dynamicDialogConfig.header)&&void 0!==l?l:"")),t.xp6(2),t.Q6J("formGroup",i.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,17,i.errors)),t.xp6(4),t.Tol(""),t.xp6(5),t.Akn("vertical-align: middle"),t.Tol(" d-flex align-items-center mt-2  flex-row-reverse justify-content-end gap-2"),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==i.dynamicDialogConfig.data?null:i.dynamicDialogConfig.data.acceptLabel)}},dependencies:[a.sg,W.U,g.Fj,g.JJ,g.JL,g.sg,g.u,B.b,j.T,M.r,Z.Pi,a.Nd,Z.X$]}),e})();var N=n(3562);let U=(()=>{class e{constructor(o,i,l){this.dynamicDialog=o,this.http=i,this.toastr=l,this.latestConfigration=new x.X([]),this.displaySingleConfigration=new x.X({})}getConfigration(o){return this.http.get(r.W.api.get)}getConfigrationById(o){return this.http.get(r.W.api.getById+o)}getLatestConfigration(){return this.latestConfigration}setLatestConfigration(o){return this.latestConfigration.next(o)}create(o){return this.http.post(r.W.api.create,o)}deleteConfigration(o,i,l){var u=this;return(0,m.Z)(function*(){const y={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...o}},width:"480px",height:"164px"};if(yield u.dynamicDialog.confirm(y))try{const T=yield u.http.delete(r.W.api.delete+o.id).toPromise();return u.toastr.success(T.message),T}catch(T){throw u.toastr.error(T.error.message),T}return!1})()}update(o,i){return this.http.post(r.W.api.update+o.id,o)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_configration",data:{acceptLabel:"add",rejectLabel:"cancel"},width:"500px",height:"auto"},O)}openDialogToUpdate(o){var i=this;return(0,m.Z)(function*(){const l={showHeader:!1,header:"update_configration",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...o}},width:"480px",height:"auto"};return yield i.dynamicDialog.showDialogWithComponent(l,O)})()}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(N.U),t.LFG(F.O),t.LFG(L._W))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var R=n(1882),Q=n(2377),Y=n(1935),X=n(359),K=n(5077),z=n(3826);const V=[{path:"",component:(()=>{class e{constructor(o,i){this.configrationService=o,this.sharedService=i,this.permissions=p.M,this.icon=C.dv,this.fileConfig=(0,h.k)(),this.tableConfig=v(this),this.filtersConfig=[{field:"search",label:"search",type:A.W.TEXT,placeholder:"search"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"code",field:"code"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:D.q.asc,field:D.q.asc},{label:D.q.desc,field:D.q.desc}]}],this.appLayout="",this.unsubscribe=new J.x}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}openDialogToCreate(){var o=this;return(0,m.Z)(function*(){(yield o.configrationService.openDialogToCreate())&&(o.tableConfig=v(o))})()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(U),t.Y36(R.F))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-configration-list"]],decls:19,vars:11,consts:[[1,"page-card"],[1,"d-flex","justify-content-between","pb-5"],[1,"title"],[1,"new-btn"],[3,"text","icon","click"],["type","solid"],[1,"d-flex","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],["table",""],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3)(6,"app-button",4),t.NdJ("click",function(){return i.openDialogToCreate()}),t._UZ(7,"app-icon",5),t.qZA()()(),t.TgZ(8,"div",6),t._UZ(9,"ukt-sort",7,8)(11,"ukt-filter",9,10),t.qZA(),t.TgZ(13,"div",11),t._UZ(14,"app-table",12,13),t.qZA(),t.TgZ(16,"div",14),t._UZ(17,"ukt-pagination",null,15),t.qZA()()),2&o){const l=t.MAs(10),u=t.MAs(12),y=t.MAs(18);t.xp6(3),t.Oqu(t.lcZ(4,9,"configration-list")),t.xp6(3),t.Q6J("text","new")("icon",i.icon.PLUS),t.xp6(3),t.Q6J("SortConfig",i.sortConfig),t.xp6(2),t.Q6J("config",i.filtersConfig),t.xp6(3),t.Q6J("tableConfig",i.tableConfig)("pagination",y)("filter",u)("sort",l)}},dependencies:[Q.a,Y.o,X.Q,K.z,z.x,M.r,Z.X$]}),e})()}];let H=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(V),c.Bz]}),e})();var $=n(4413),_=n(1471),k=n(9293),w=n(2115),q=n(3992),tt=n(1019),ot=n(8096),nt=n(1890),et=n(6145);let it=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,H,$.e,C.m8,_.X,k.Q,w.u,q.Z,tt.i,ot.J,nt.f,et.n,Z.aw]}),e})()},6145:(b,d,n)=>{n.d(d,{n:()=>r});var a=n(6814),c=n(4819),m=n(1890),C=n(9624),p=n(3999),h=n(9291);let r=(()=>{class f{}return f.\u0275fac=function(A){return new(A||f)},f.\u0275mod=h.oAB({type:f}),f.\u0275inj=h.cJS({imports:[a.ez,c.O,C.U,m.f,p.aw]}),f})()},7824:(b,d,n)=>{n.d(d,{o:()=>a});var a=function(c){return c.export="export",c.import="import",c.print="print",c}(a||{})},1771:(b,d,n)=>{n.d(d,{U:()=>C});var a=n(9291),c=n(6223);const m=["*"];let C=(()=>{class p{constructor(){this.onSubmit=new a.vpe}ngOnChanges(r){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const r=this.getFormData();this.onSubmit.emit(r)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return p.\u0275fac=function(r){return new(r||p)},p.\u0275cmp=a.Xpm({type:p,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[a.TTD],ngContentSelectors:m,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(r,f){1&r&&(a.F$t(),a.TgZ(0,"form",0),a.NdJ("ngSubmit",function(){return f.submit()}),a.Hsn(1),a.qZA()),2&r&&a.Q6J("formGroup",f.formGroup)},dependencies:[c._Y,c.JL,c.sg]}),p})()}}]);