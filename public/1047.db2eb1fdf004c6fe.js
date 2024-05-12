"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[1047],{1047:(T,h,o)=>{o.r(h),o.d(h,{CompanyModule:()=>rt});var l=o(6814),s=o(8209),t=o(9291),O=o(1882),e=o(5861),_=o(5619);const m_api_create="company/create",m_api_get="company",m_api_getUsers="user",m_api_getModules="module",m_api_getById="company/",m_api_update="company/update/",m_api_delete="company/";var d=o(6223),Z=o(8718),A=o(7165),D=o(8763),f=o(5118),M=o(4779),c=o(1771),u=o(8614),L=o(3838),b=o(5304),E=o(3999);function S(a,g){if(1&a&&(t.TgZ(0,"p",20),t._uU(1),t.qZA()),2&a){const n=g.$implicit;t.xp6(1),t.hij(" ",n.value,"\n")}}let C=(()=>{class a{constructor(n,r,v,G,P,st){this.formBuilder=n,this.usersService=r,this.companyService=v,this.toastr=G,this.dynamiconfig=P,this.dialogRef=st,this.title="add_company",this.formGroup=this.initForm(),this.getUserRequest=Z.x.api.get,this.status=[{key:"Active",value:"Active"},{key:"In-Active",value:"In-Active"}],this.dynamiconfig.data?.data&&(this.title="update_company",this.patchData(this.dynamiconfig.data.data))}ngOnInit(){this.companyService.getUsers().subscribe(n=>{this.users=n.data}),this.companyService.getModules().subscribe(n=>{this.modules=n})}accept(){this.formGroup.markAllAsTouched(),this.formGroup.invalid||(this.dynamiconfig.data.data?this.companyService.update(this.formGroup.value).subscribe({next:n=>{this.toastr.success(n.message),this.close(!0)},error:n=>{this.toastr.error(n.error.message),this.errors=n.error.errors}}):this.companyService.create(this.formGroup.value).subscribe({next:n=>{this.toastr.success(n.message),this.close(!0)},error:n=>{this.toastr.error(n.error.message),this.errors=n.error.errors}}))}close(n){this.dialogRef.close(n)}patchData(n){this.formGroup.patchValue({id:n.id,name:n.name,status:n.status,user_id:n.user.id,description:n.description,modules:n.modules.map(r=>r.id)})}initForm(){return this.formBuilder.group({id:[""],name:["",[d.kI.required]],status:["",[d.kI.required]],user_id:["",[d.kI.required]],description:[""],modules:["",[d.kI.required]]})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(d.qu),t.Y36(A.f),t.Y36(p),t.Y36(D._W),t.Y36(f.S),t.Y36(f.E7))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-add-new"]],decls:29,vars:41,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/company.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["formControlName","name","ngDefaultControl","","placeholder","",3,"text"],["ngDefaultControl","","formControlName","modules",3,"text","data","optionLabel","optionValue","placeholder"],["formControlName","description","ngDefaultControl","","placeholder","",3,"text"],[1,"col-6"],["ngDefaultControl","","formControlName","status",3,"text","data","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","user_id",3,"filter","text","request","optionLabel","optionValue","placeholder"],[1,"row","g-2","my-2"],[3,"text","click"],[1,"text-error"]],template:function(n,r){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return r.close(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()()(),t.TgZ(10,"app-form",8),t.YNc(11,S,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"div",11),t._UZ(15,"app-text",12),t.qZA(),t.TgZ(16,"div",11),t._UZ(17,"app-multiselect",13),t.qZA(),t.TgZ(18,"div",11),t._UZ(19,"app-text",14),t.qZA(),t.TgZ(20,"div",15),t._UZ(21,"app-dropdown",16),t.qZA(),t.TgZ(22,"div",15),t._UZ(23,"app-dropdown",17),t.qZA()(),t.TgZ(24,"div",18)(25,"div",15)(26,"app-button",19),t.NdJ("click",function(){return r.close(!1)}),t.qZA()(),t.TgZ(27,"div",15)(28,"app-button",19),t.NdJ("click",function(){return r.accept()}),t.qZA()()()()),2&n){let v;t.xp6(8),t.Oqu(t.lcZ(9,37,null!==(v=r.dynamiconfig.header)&&void 0!==v?v:"")),t.xp6(2),t.Q6J("formGroup",r.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,39,r.errors)),t.xp6(4),t.Tol(""),t.Q6J("text","name"),t.xp6(2),t.Tol(""),t.Q6J("text","modules")("data",r.modules)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol(""),t.Q6J("text","description"),t.xp6(2),t.Tol(""),t.Q6J("text","status")("data",r.status)("optionLabel","key")("optionValue","value")("placeholder","Status"),t.xp6(2),t.Tol(""),t.Q6J("filter",!0)("text","assigned")("request",r.getUserRequest)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==r.dynamiconfig.data?null:r.dynamiconfig.data.acceptLabel)}},dependencies:[l.sg,M.r,c.U,d.Fj,d.JJ,d.JL,d.sg,d.u,u.T,L.J,b.z,l.Nd,E.X$],styles:["[_nghost-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:500;color:#344054}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:11px 24px 28px 0;font-size:1.9rem;font-weight:600!important;color:var(--mainColor)}[_nghost-%COMP%]   .title-form[_ngcontent-%COMP%]{font-size:19px;color:#202124;font-weight:700}[_nghost-%COMP%]   .form-add[_ngcontent-%COMP%]{background-color:#0f5fa5!important}[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.6rem!important;background-color:transparent!important}[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.6rem!important}[_nghost-%COMP%]   .m-name[_ngcontent-%COMP%]{background-color:#c6dfe2!important;border-radius:24px!important;padding:6px 15px;margin:.5rem 1rem!important;font-size:1.3rem}"]}),a})();var U=o(1732),i=o(3562);let p=(()=>{class a{constructor(n,r,v){this.http=n,this.dynamicDialog=r,this.toastr=v,this.companies=new _.X([])}get(){return this.http.get(m_api_get)}getUsers(){return this.http.get(m_api_getUsers)}getModules(){return this.http.get(m_api_getModules)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_company",data:{acceptLabel:"add",rejectLabel:"cancel"},width:"500px",height:"auto"},C)}delete(n){var r=this;return(0,e.Z)(function*(){const v={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...n}},width:"300px",height:"164px"};return!!(yield r.dynamicDialog.confirm(v))&&r.http.delete(m_api_delete+n.id).toPromise().then(P=>(r.toastr.success(P.message),P)).catch(P=>(r.toastr.error(P.error.message),P))})()}openDialogToUpdate(n){var r=this;return(0,e.Z)(function*(){const v={showHeader:!1,header:"update_company",data:{acceptLabel:"update",rejectLabel:"cancel",data:{...n}},width:"480px",height:"auto"};return yield r.dynamicDialog.showDialogWithComponent(v,C)})()}create(n){return this.http.post(m_api_create,n)}getById(n){return this.http.get(m_api_getById+n)}update(n){return this.http.post(m_api_update+n.id,n)}}return a.\u0275fac=function(n){return new(n||a)(t.LFG(U.O),t.LFG(i.U),t.LFG(D._W))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var y=o(5219),I=o(7824),R=function(a){return a.list="View Companies",a.create="Create Company",a.update="Edit Company",a.delete="Delete Company",a}(R||{});let F=1;const N=a=>{return{cols:[{field:"id",label:"no",class:"title",format:()=>F++},{field:"name",label:"name",class:"title"},{field:"status",label:"status",class:"title"},{field:"assigned",label:"Assigned",class:"title",format:g=>g.user.name},{label:"action",class:"title",actions:[{icon:"trash",class:"main-color",fun:(g=(0,e.Z)(function*(n){return yield a.companyService.delete(n)}),function(r){return g.apply(this,arguments)}),id:R.delete},{icon:"pen-to-square",class:"main-color",fun:function(){var g=(0,e.Z)(function*(n){return yield a.companyService.openDialogToUpdate(n)});return function(r){return g.apply(this,arguments)}}(),id:R.update}]}],Request:m_api_get};var g};var J=o(6924),w=o(5),B=o(5946),W=o(2377),V=o(359),Y=o(3826),j=o(5077);let K=(()=>{class a{constructor(n){this.companyService=n,this.fileConfig={fileName:"Role",fileOption:[I.o.export,I.o.print],export:{type:[{key:"Pdf",value:"Pdf"},{key:"Csv",value:"Csv"},{key:"Exil",value:"Exil"}]},print:{}},this.tableConfig=N(this),this.filtersConfig=[{label:"Assigned",field:"assigned_id",type:J.W.SELECT,options:{value:"id",label:"name"},request:w.Z.userConfig.api.get,placeholder:"select"},{label:"from",field:"from",type:J.W.DATE,placeholder:"from"},{label:"to",field:"to",type:J.W.DATE,placeholder:"to"},{label:"search",field:"search",type:J.W.TEXT,placeholder:"search"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"status",field:"status"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:B.q.asc,field:B.q.asc},{label:B.q.desc,field:B.q.desc}]}],this.icon=y.dv}openDialogToCreate(){var n=this;return(0,e.Z)(function*(){(yield n.companyService.openDialogToCreate())&&(n.tableConfig=N(n))})()}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(p))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-list"]],decls:16,vars:10,consts:[[1,"d-flex","justify-content-between","pb-5"],[1,"title"],["text","new",3,"icon","click"],[1,"d-flex","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],["table",""],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""]],template:function(n,r){if(1&n&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"app-button",2),t.NdJ("click",function(){return r.openDialogToCreate()}),t.qZA()(),t.TgZ(5,"div",3),t._UZ(6,"ukt-sort",4,5)(8,"ukt-filter",6,7),t.qZA(),t.TgZ(10,"div",8),t._UZ(11,"app-table",9,10),t.qZA(),t.TgZ(13,"div",11),t._UZ(14,"ukt-pagination",null,12),t.qZA()),2&n){const v=t.MAs(7),G=t.MAs(9),P=t.MAs(15);t.xp6(2),t.Oqu(t.lcZ(3,8,"list_of_company")),t.xp6(2),t.Q6J("icon",r.icon.PLUS),t.xp6(2),t.Q6J("SortConfig",r.sortConfig),t.xp6(2),t.Q6J("config",r.filtersConfig),t.xp6(3),t.Q6J("tableConfig",r.tableConfig)("pagination",P)("filter",G)("sort",v)}},dependencies:[M.r,W.a,V.Q,Y.x,j.z,E.X$],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto&display=swap";[_nghost-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   .e-toast-container[_ngcontent-%COMP%]   .e-toast[_ngcontent-%COMP%]   .e-toast-message[_ngcontent-%COMP%]   .e-toast-content[_ngcontent-%COMP%]{font-size:2rem}[_nghost-%COMP%]   .table-head[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#fff;color:#979797;font-size:1.5rem;font-weight:400!important;min-width:180px!important}[_nghost-%COMP%]   .t-body[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:1.4rem;color:#2e2e2e;background-color:var(--lightGray)}[_nghost-%COMP%]   .t-body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{color:var(--mainColor)!important}[_nghost-%COMP%]   .statue[_ngcontent-%COMP%]{background-color:#f7d6d3;color:#0080ff}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]{width:150px}[_nghost-%COMP%]   .action[_ngcontent-%COMP%]{width:70px;font-size:1.4rem}[_nghost-%COMP%]   .Assigned-employee[_ngcontent-%COMP%]{width:180px;min-width:180px}[_nghost-%COMP%]   .statue-company[_ngcontent-%COMP%]{min-width:100px!important}[_nghost-%COMP%]   .test[_ngcontent-%COMP%]{color:red!important}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.4rem}[_nghost-%COMP%]   .modal-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.8rem}[_nghost-%COMP%]   .modal-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   .modal-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:1.4rem}@media screen and (max-width: 992px){.actions[_ngcontent-%COMP%]{width:auto}.statue-company[_ngcontent-%COMP%]{min-width:100px!important}}']}),a})();const X=[{path:"",component:(()=>{class a{constructor(n,r){this.sharedService=n,this.companyService=r}ngOnInit(){this.companyService.get().subscribe(n=>{})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(O.F),t.Y36(p))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-company"]],decls:3,vars:0,consts:[[1,"col"],[1,"page-card","bg-white"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-list"),t.qZA()())},dependencies:[K],styles:["[_nghost-%COMP%]   .companies[_ngcontent-%COMP%]{background-color:var(--white)}"]}),a})()}];let H=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[s.Bz.forChild(X),s.Bz]}),a})();var k=o(4413),$=o(9624),q=o(1890),tt=o(1471),et=o(2115),ot=o(8096),nt=o(1019),at=o(6145),it=o(3992);let rt=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[l.ez,H,q.f,tt.X,et.u,ot.J,nt.i,at.n,k.e,$.U,E.aw,it.Z]}),a})()},7563:(T,h,o)=>{o.d(h,{c:()=>l});const l={api:{create:"role/create",get:"role",getById:"role/",update:"role/update/",delete:"role/"},page:{listRole:"",updateRole:"update/:id",viewRole:"view/:id",createRole:"new"}}},6145:(T,h,o)=>{o.d(h,{n:()=>m});var l=o(6814),s=o(4819),t=o(1890),O=o(9624),e=o(3999),_=o(9291);let m=(()=>{class d{}return d.\u0275fac=function(A){return new(A||d)},d.\u0275mod=_.oAB({type:d}),d.\u0275inj=_.cJS({imports:[l.ez,s.O,O.U,t.f,e.aw]}),d})()},7824:(T,h,o)=>{o.d(h,{o:()=>l});var l=function(s){return s.export="export",s.import="import",s.print="print",s}(l||{})},1771:(T,h,o)=>{o.d(h,{U:()=>O});var l=o(9291),s=o(6223);const t=["*"];let O=(()=>{class e{constructor(){this.onSubmit=new l.vpe}ngOnChanges(m){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const m=this.getFormData();this.onSubmit.emit(m)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[l.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(m,d){1&m&&(l.F$t(),l.TgZ(0,"form",0),l.NdJ("ngSubmit",function(){return d.submit()}),l.Hsn(1),l.qZA()),2&m&&l.Q6J("formGroup",d.formGroup)},dependencies:[s._Y,s.JL,s.sg]}),e})()},5304:(T,h,o)=>{o.d(h,{z:()=>D});var l=o(67),s=o(6223),t=o(9291),O=o(1732),e=o(6814),_=o(4055),m=o(3999);function d(f,M){1&f&&t._UZ(0,"i",6)}function Z(f,M){if(1&f&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.TgZ(4,"span",4),t.YNc(5,d,1,0,"i",5),t.qZA()()),2&f){const c=t.oxw();t.xp6(1),t.hij("",t.lcZ(2,2,t.lcZ(3,4,c.text))," "),t.xp6(4),t.Q6J("ngIf",c.control&&(null==c.control.errors?null:c.control.errors.required))}}function A(f,M){if(1&f&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&f){const c=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Oqu(t.lcZ(2,3,c.object.keys(c.control.errors)[0]))}}let D=(()=>{class f extends l.t{constructor(c,u){super(),this.formGroupDirective=c,this.http=u,this.valueToUpdate=[],this.readOnly=!1,this.placeholder="",this.filterBy="",this.class="d-flex justify-content-between align-items-center",this.filter=!0,this.filterMatchMode="contains",this.object=Object,this.scrollHeight="100px"}ngOnInit(){!this.data&&this.request?this.http.getWithParam(this.request,{limit:"all"}).subscribe({next:c=>{this.data=c.data,this.writeValue(this.valueToUpdate),this.data?.length>4&&(this.scrollHeight="200px")},error:c=>{}}):this.writeValue(this.valueToUpdate)}writeValue(c){this.data&&(this.value=c)}onValueChange(c){this.onChange(c.value),this.onTouched()}ngOnChanges(c){c.data&&this.data?.length>4&&(this.scrollHeight="200px")}}return f.\u0275fac=function(c){return new(c||f)(t.Y36(s.sg,8),t.Y36(O.O))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-multiselect"]],inputs:{value:"value",text:"text",data:"data",optionLabel:"optionLabel",optionValue:"optionValue",editable:"editable",readOnly:"readOnly",placeholder:"placeholder",filterBy:"filterBy",request:"request",class:"class",filter:"filter",filterMatchMode:"filterMatchMode"},features:[t._Bn([{provide:s.JU,useExisting:f,multi:!0},{provide:s.Cf,useExisting:f,multi:!0}]),t.qOj,t.TTD],decls:5,vars:18,consts:[[3,"ngClass"],[4,"ngIf"],["appendTo","body",3,"options","ngModel","placeholder","optionLabel","optionValue","filterMatchMode","display","filter","filterBy","disabled","virtualScroll","scrollHeight","virtualScrollItemSize","ngModelChange","onChange"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(c,u){1&c&&(t.TgZ(0,"div",0),t.YNc(1,Z,6,6,"label",1),t.TgZ(2,"p-multiSelect",2),t.NdJ("ngModelChange",function(b){return u.value=b})("onChange",function(b){return u.onValueChange(b)}),t.ALo(3,"translate"),t.qZA(),t.YNc(4,A,3,5,"span",3),t.qZA()),2&c&&(t.Q6J("ngClass",u.class),t.xp6(1),t.Q6J("ngIf",u.text),t.xp6(1),t.Q6J("options",u.data)("ngModel",u.value)("placeholder",t.lcZ(3,16,u.placeholder))("optionLabel",u.optionLabel)("optionValue",u.optionValue)("filterMatchMode",u.filterMatchMode)("display","chip")("filter",u.filter)("filterBy",u.optionLabel)("disabled",u.readOnly)("virtualScroll",!0)("scrollHeight",u.scrollHeight)("virtualScrollItemSize",30),t.xp6(2),t.Q6J("ngIf",u.control&&u.control.errors&&(u.control.touched||u.formGroupDirective.submitted)))},dependencies:[e.mk,e.O5,s.JJ,s.On,_.NU,e.rS,m.X$],styles:[".text-danger[_ngcontent-%COMP%]{font-size:14px}"]}),f})()},8718:(T,h,o)=>{o.d(h,{x:()=>l});const l={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}},5:(T,h,o)=>{o.d(h,{Z:()=>s});const s={userConfig:o(8718).x}},7165:(T,h,o)=>{o.d(h,{f:()=>S});var l=o(5861),s=o(6223),t=o(8718),O=o(7563),e=o(9291),_=o(8763),m=o(5118),d=o(6814),Z=o(1771),A=o(8614),D=o(3838),f=o(4779),M=o(3999);function c(C,U){if(1&C&&(e.TgZ(0,"div",12),e._UZ(1,"app-dropdown",20),e.qZA()),2&C){const i=e.oxw();e.xp6(1),e.Tol(""),e.Q6J("text","parent")("request",i.userRequest)("optionLabel","name")("optionValue","id")}}const u=function(){return{type:"name",length:1}};let L=(()=>{class C{constructor(i,p,y,I,x){this.formBuilder=i,this.usersService=p,this.toastr=y,this.dynamiconfig=I,this.dialogRef=x,this.formGroup=this.initForm(),this.rolesRequest=O.c.api.get,this.userRequest=t.x.api.get,this.status=[{key:"Active",value:"Active"},{key:"Suspended",value:"Suspended"},{key:"in_active",value:"Disable"}],this.dynamiconfig.data?.data&&this.patchData(this.dynamiconfig.data.data)}accept(){this.formGroup.markAllAsTouched(),this.formGroup.invalid||(this.dynamiconfig.data.data?this.usersService.update(this.formGroup.value).subscribe({next:i=>{this.toastr.success(i.message),this.close(!0)},error:i=>{this.toastr.error(i.error.message)}}):this.usersService.create(this.formGroup.value).subscribe({next:i=>{this.toastr.success(i.message),this.close(!0)},error:i=>{this.toastr.error(i.error.message)}}))}close(i){this.dialogRef.close(i)}patchData(i){this.formGroup.patchValue({...i})}initForm(){return this.formBuilder.group({id:[""],name:["",[s.kI.required]],email:["",[s.kI.required,s.kI.pattern("^[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}$")]],status:["",[s.kI.required]],phone:["",[s.kI.required,s.kI.pattern("^[0-9]{11}$")]],parent_id:[""],role_id:[""]})}addValidators(){this.formGroup.get("parent_id").setValidators([s.kI.required])}}return C.\u0275fac=function(i){return new(i||C)(e.Y36(s.qu),e.Y36(S),e.Y36(_._W),e.Y36(m.S),e.Y36(m.E7))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-users-update"]],decls:27,vars:34,consts:[[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/Users.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup"],[1,"row"],[1,"col-12","my-2"],["formControlName","name","placeholder","Name",3,"patternMessage","text"],["formControlName","email","placeholder","Email",3,"text"],[1,"col-6","my-2"],["formControlName","phone","placeholder","Phone",3,"text"],["formControlName","status","placeholder","Status",3,"text","data","optionLabel","optionValue"],["formControlName","role_id","placeholder","Role",3,"text","request","optionLabel","optionValue"],["class","col-6 my-2 ",4,"ngIf"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],["formControlName","parent_id","placeholder","parent",3,"text","request","optionLabel","optionValue"]],template:function(i,p){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"span",4),e.NdJ("click",function(){return p.close(!1)}),e._UZ(5,"i",5),e.qZA()(),e.TgZ(6,"p",6),e._uU(7),e.ALo(8,"translate"),e.qZA()(),e.TgZ(9,"app-form",7)(10,"div",8)(11,"div",9),e._UZ(12,"app-text",10),e.qZA(),e.TgZ(13,"div",9),e._UZ(14,"app-text",11),e.qZA(),e.TgZ(15,"div",12),e._UZ(16,"app-text",13),e.qZA(),e.TgZ(17,"div",12),e._UZ(18,"app-dropdown",14),e.qZA(),e.TgZ(19,"div",12),e._UZ(20,"app-dropdown",15),e.qZA(),e.YNc(21,c,2,6,"div",16),e.qZA(),e.TgZ(22,"div",17)(23,"div",18)(24,"app-button",19),e.NdJ("click",function(){return p.close(!1)}),e.qZA()(),e.TgZ(25,"div",18)(26,"app-button",19),e.NdJ("click",function(){return p.accept()}),e.qZA()()()()),2&i){let y;e.xp6(7),e.Oqu(e.lcZ(8,31,null!==(y=p.dynamiconfig.header)&&void 0!==y?y:"")),e.xp6(2),e.Q6J("formGroup",p.formGroup),e.xp6(3),e.Tol(""),e.Q6J("patternMessage",e.DdM(33,u))("text","Name"),e.xp6(2),e.Tol(""),e.Q6J("text","Email"),e.xp6(2),e.Tol(""),e.Q6J("text","Phone"),e.xp6(2),e.Tol(""),e.Q6J("text","Status")("data",p.status)("optionLabel","key")("optionValue","value"),e.xp6(2),e.Tol(""),e.Q6J("text","Role")("request",p.rolesRequest)("optionLabel","name")("optionValue","id"),e.xp6(1),e.Q6J("ngIf",null==p.dynamiconfig.data?null:p.dynamiconfig.data.data),e.xp6(3),e.Tol("btn-cancel"),e.Q6J("text","Cancel"),e.xp6(2),e.Tol("btn-filter"),e.Q6J("text",null==p.dynamiconfig.data?null:p.dynamiconfig.data.acceptLabel)}},dependencies:[d.O5,Z.U,s.JJ,s.JL,s.sg,s.u,A.T,D.J,f.r,M.X$]}),C})();var b=o(1732),E=o(3562);let S=(()=>{class C{constructor(i,p,y){this.http=i,this.dynamicDialog=p,this.toastr=y}get(){return this.http.get(t.x.api.get)}export(){return this.http.get(t.x.api.export)}openDialogToCreateUser(){var i=this;return(0,l.Z)(function*(){return i.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_user",data:{acceptLabel:"add",rejectLabel:"cancel"},width:"500px",height:"auto"},L)})()}create(i){return this.http.post(t.x.api.create,i)}getById(i){return this.http.get(t.x.api.getById+i)}delete(i){var p=this;return(0,l.Z)(function*(){const y={showHeader:!1,header:"delete",closable:!0,data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...i}},width:"300px",height:"164px"};if(!(yield p.dynamicDialog.confirm(y)))return!1;try{const x=yield p.http.delete(t.x.api.delete+i.id).toPromise();return p.toastr.success(x.message),x}catch(x){throw p.toastr.error(x.error.message),x}})()}openDialogToUpdateUser(i){var p=this;return(0,l.Z)(function*(){const y={showHeader:!1,header:"update",data:{message:"do_you_want_to_delete",acceptLabel:"update",rejectLabel:"cancel",data:{...i}},width:"480px",height:"auto"};return yield p.dynamicDialog.showDialogWithComponent(y,L)})()}update(i){return this.http.post(t.x.api.update+i.id,i)}}return C.\u0275fac=function(i){return new(i||C)(e.LFG(b.O),e.LFG(E.U),e.LFG(_._W))},C.\u0275prov=e.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})()}}]);