"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[1047],{1047:(M,f,o)=>{o.r(f),o.d(f,{CompanyModule:()=>it});var s=o(6814),l=o(8209),t=o(9291),O=o(1882),e=o(5861),C=o(5619);const m_api_create="company/create",m_api_get="company",m_api_getUsers="user",m_api_getModules="module",m_api_getById="company/",m_api_update="company/update/",m_api_delete="company/";var c=o(6223),P=o(8718),Z=o(7165),A=o(8763),b=o(5118),U=o(4779),G=o(1771),I=o(8614),D=o(3838),F=o(5304),T=o(3999);function L(a,d){if(1&a&&(t.TgZ(0,"p",20),t._uU(1),t.qZA()),2&a){const n=d.$implicit;t.xp6(1),t.hij(" ",n.value,"\n")}}let u=(()=>{class a{constructor(n,i,g,E,y,st){this.formBuilder=n,this.usersService=i,this.companyService=g,this.toastr=E,this.dynamiconfig=y,this.dialogRef=st,this.title="add_company",this.formGroup=this.initForm(),this.getUserRequest=P.x.api.get,this.status=[{key:"Active",value:"Active"},{key:"In-Active",value:"In-Active"}],this.dynamiconfig.data?.data&&(this.title="update_company",this.patchData(this.dynamiconfig.data.data))}ngOnInit(){this.companyService.getUsers().subscribe(n=>{this.users=n.data}),this.companyService.getModules().subscribe(n=>{this.modules=n})}accept(){this.formGroup.markAllAsTouched(),this.formGroup.invalid||(this.dynamiconfig.data.data?this.companyService.update(this.formGroup.value).subscribe({next:n=>{this.toastr.success(n.message),this.close(!0)},error:n=>{this.toastr.error(n.error.message),this.errors=n.error.errors}}):this.companyService.create(this.formGroup.value).subscribe({next:n=>{this.toastr.success(n.message),this.close(!0)},error:n=>{this.toastr.error(n.error.message),this.errors=n.error.errors}}))}close(n){this.dialogRef.close(n)}patchData(n){this.formGroup.patchValue({id:n.id,name:n.name,status:n.status,user_id:n.user.id,description:n.description,modules:n.modules.map(i=>i.id)})}initForm(){return this.formBuilder.group({id:[""],name:["",[c.kI.required]],status:["",[c.kI.required]],user_id:["",[c.kI.required]],description:[""],modules:["",[c.kI.required]]})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(c.qu),t.Y36(Z.f),t.Y36(p),t.Y36(A._W),t.Y36(b.S),t.Y36(b.E7))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-add-new"]],decls:29,vars:41,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/company.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["formControlName","name","ngDefaultControl","","placeholder","",3,"text"],["ngDefaultControl","","formControlName","modules",3,"text","data","optionLabel","optionValue","placeholder"],["formControlName","description","ngDefaultControl","","placeholder","",3,"text"],[1,"col-6"],["ngDefaultControl","","formControlName","status",3,"text","data","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","user_id",3,"filter","text","request","optionLabel","optionValue","placeholder"],[1,"row","g-2","my-2"],[3,"text","click"],[1,"text-error"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return i.close(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()()(),t.TgZ(10,"app-form",8),t.YNc(11,L,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"div",11),t._UZ(15,"app-text",12),t.qZA(),t.TgZ(16,"div",11),t._UZ(17,"app-multiselect",13),t.qZA(),t.TgZ(18,"div",11),t._UZ(19,"app-text",14),t.qZA(),t.TgZ(20,"div",15),t._UZ(21,"app-dropdown",16),t.qZA(),t.TgZ(22,"div",15),t._UZ(23,"app-dropdown",17),t.qZA()(),t.TgZ(24,"div",18)(25,"div",15)(26,"app-button",19),t.NdJ("click",function(){return i.close(!1)}),t.qZA()(),t.TgZ(27,"div",15)(28,"app-button",19),t.NdJ("click",function(){return i.accept()}),t.qZA()()()()),2&n){let g;t.xp6(8),t.Oqu(t.lcZ(9,37,null!==(g=i.dynamiconfig.header)&&void 0!==g?g:"")),t.xp6(2),t.Q6J("formGroup",i.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,39,i.errors)),t.xp6(4),t.Tol(""),t.Q6J("text","name"),t.xp6(2),t.Tol(""),t.Q6J("text","modules")("data",i.modules)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol(""),t.Q6J("text","description"),t.xp6(2),t.Tol(""),t.Q6J("text","status")("data",i.status)("optionLabel","key")("optionValue","value")("placeholder","Status"),t.xp6(2),t.Tol(""),t.Q6J("filter",!0)("text","assigned")("request",i.getUserRequest)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==i.dynamiconfig.data?null:i.dynamiconfig.data.acceptLabel)}},dependencies:[s.sg,U.r,G.U,c.Fj,c.JJ,c.JL,c.sg,c.u,I.T,D.J,F.z,s.Nd,T.X$],styles:["[_nghost-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:500;color:#344054}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:11px 24px 28px 0;font-size:1.9rem;font-weight:600!important;color:var(--mainColor)}[_nghost-%COMP%]   .title-form[_ngcontent-%COMP%]{font-size:19px;color:#202124;font-weight:700}[_nghost-%COMP%]   .form-add[_ngcontent-%COMP%]{background-color:#0f5fa5!important}[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.6rem!important;background-color:transparent!important}[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.6rem!important}[_nghost-%COMP%]   .m-name[_ngcontent-%COMP%]{background-color:#c6dfe2!important;border-radius:24px!important;padding:6px 15px;margin:.5rem 1rem!important;font-size:1.3rem}"]}),a})();var x=o(1732),r=o(3562);let p=(()=>{class a{constructor(n,i,g){this.http=n,this.dynamicDialog=i,this.toastr=g,this.companies=new C.X([])}get(){return this.http.get(m_api_get)}getUsers(){return this.http.get(m_api_getUsers)}getModules(){return this.http.get(m_api_getModules)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_company",data:{acceptLabel:"add",rejectLabel:"cancel"},width:"500px",height:"auto"},u)}delete(n){var i=this;return(0,e.Z)(function*(){const g={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...n}},width:"300px",height:"164px"};return!!(yield i.dynamicDialog.confirm(g))&&i.http.delete(m_api_delete+n.id).toPromise().then(y=>(i.toastr.success(y.message),y)).catch(y=>(i.toastr.error(y.error.message),y))})()}openDialogToUpdate(n){var i=this;return(0,e.Z)(function*(){const g={showHeader:!1,header:"update_company",data:{acceptLabel:"update",rejectLabel:"cancel",data:{...n}},width:"480px",height:"auto"};return yield i.dynamicDialog.showDialogWithComponent(g,u)})()}create(n){return this.http.post(m_api_create,n)}getById(n){return this.http.get(m_api_getById+n)}update(n){return this.http.post(m_api_update+n.id,n)}}return a.\u0275fac=function(n){return new(n||a)(t.LFG(x.O),t.LFG(r.U),t.LFG(A._W))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var h=o(5219),_=o(7824),N=function(a){return a.list="View Companies",a.create="Create Company",a.update="Edit Company",a.delete="Delete Company",a}(N||{});let w=1;const R=a=>{return{cols:[{field:"id",label:"no",class:"title",format:()=>w++},{field:"name",label:"name",class:"title"},{field:"status",label:"status",class:"title"},{field:"assigned",label:"Assigned",class:"title",format:d=>d.user.name},{label:"action",class:"title",actions:[{icon:"trash",class:"main-color",fun:(d=(0,e.Z)(function*(n){return yield a.companyService.delete(n)}),function(i){return d.apply(this,arguments)}),id:N.delete},{icon:"pen-to-square",class:"main-color",fun:function(){var d=(0,e.Z)(function*(n){return yield a.companyService.openDialogToUpdate(n)});return function(i){return d.apply(this,arguments)}}(),id:N.update}]}],Request:m_api_get};var d};var J=o(6924),B=o(5),S=o(5946),W=o(2377),V=o(359),Y=o(3826),j=o(5077);let k=(()=>{class a{constructor(n){this.companyService=n,this.fileConfig={fileName:"Role",fileOption:[_.o.export,_.o.print],export:{type:[{key:"Pdf",value:"Pdf"},{key:"Csv",value:"Csv"},{key:"Exil",value:"Exil"}]},print:{}},this.tableConfig=R(this),this.filtersConfig=[{label:"Assigned",field:"assigned_id",type:J.W.SELECT,options:{value:"id",label:"name"},request:B.Z.userConfig.api.get,placeholder:"select"},{label:"from",field:"from",type:J.W.DATE,placeholder:"from"},{label:"to",field:"to",type:J.W.DATE,placeholder:"to"},{label:"search",field:"search",type:J.W.TEXT,placeholder:"search"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"status",field:"status"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:S.q.asc,field:S.q.asc},{label:S.q.desc,field:S.q.desc}]}],this.icon=h.dv}openDialogToCreate(){var n=this;return(0,e.Z)(function*(){(yield n.companyService.openDialogToCreate())&&(n.tableConfig=R(n))})()}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(p))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-list"]],decls:16,vars:10,consts:[[1,"d-flex","justify-content-between","pb-5"],[1,"title"],["text","new",3,"icon","click"],[1,"d-flex","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],["table",""],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"app-button",2),t.NdJ("click",function(){return i.openDialogToCreate()}),t.qZA()(),t.TgZ(5,"div",3),t._UZ(6,"ukt-sort",4,5)(8,"ukt-filter",6,7),t.qZA(),t.TgZ(10,"div",8),t._UZ(11,"app-table",9,10),t.qZA(),t.TgZ(13,"div",11),t._UZ(14,"ukt-pagination",null,12),t.qZA()),2&n){const g=t.MAs(7),E=t.MAs(9),y=t.MAs(15);t.xp6(2),t.Oqu(t.lcZ(3,8,"list_of_company")),t.xp6(2),t.Q6J("icon",i.icon.PLUS),t.xp6(2),t.Q6J("SortConfig",i.sortConfig),t.xp6(2),t.Q6J("config",i.filtersConfig),t.xp6(3),t.Q6J("tableConfig",i.tableConfig)("pagination",y)("filter",E)("sort",g)}},dependencies:[U.r,W.a,V.Q,Y.x,j.z,T.X$],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto&display=swap";[_nghost-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   .e-toast-container[_ngcontent-%COMP%]   .e-toast[_ngcontent-%COMP%]   .e-toast-message[_ngcontent-%COMP%]   .e-toast-content[_ngcontent-%COMP%]{font-size:2rem}[_nghost-%COMP%]   .table-head[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#fff;color:#979797;font-size:1.5rem;font-weight:400!important;min-width:180px!important}[_nghost-%COMP%]   .t-body[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:1.4rem;color:#2e2e2e;background-color:var(--lightGray)}[_nghost-%COMP%]   .t-body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{color:var(--mainColor)!important}[_nghost-%COMP%]   .statue[_ngcontent-%COMP%]{background-color:#f7d6d3;color:#0080ff}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]{width:150px}[_nghost-%COMP%]   .action[_ngcontent-%COMP%]{width:70px;font-size:1.4rem}[_nghost-%COMP%]   .Assigned-employee[_ngcontent-%COMP%]{width:180px;min-width:180px}[_nghost-%COMP%]   .statue-company[_ngcontent-%COMP%]{min-width:100px!important}[_nghost-%COMP%]   .test[_ngcontent-%COMP%]{color:red!important}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.4rem}[_nghost-%COMP%]   .modal-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.8rem}[_nghost-%COMP%]   .modal-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   .modal-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:1.4rem}@media screen and (max-width: 992px){.actions[_ngcontent-%COMP%]{width:auto}.statue-company[_ngcontent-%COMP%]{min-width:100px!important}}']}),a})();const X=[{path:"",component:(()=>{class a{constructor(n,i){this.sharedService=n,this.companyService=i}ngOnInit(){this.companyService.get().subscribe(n=>{})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(O.F),t.Y36(p))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-company"]],decls:3,vars:0,consts:[[1,"col"],[1,"page-card","bg-white"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-list"),t.qZA()())},dependencies:[k],styles:["[_nghost-%COMP%]   .companies[_ngcontent-%COMP%]{background-color:var(--white)}"]}),a})()}];let K=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[l.Bz.forChild(X),l.Bz]}),a})();var H=o(4413),$=o(9624),q=o(1890),tt=o(1471),et=o(2115),ot=o(8096),nt=o(1019),at=o(6145),rt=o(3992);let it=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[s.ez,K,q.f,tt.X,et.u,ot.J,nt.i,at.n,H.e,$.U,T.aw,rt.Z]}),a})()},7563:(M,f,o)=>{o.d(f,{c:()=>s});const s={api:{create:"role/create",get:"role",getById:"role/",update:"role/update/",delete:"role/"},page:{listRole:"",updateRole:"update/:id",viewRole:"view/:id",createRole:"new"}}},6145:(M,f,o)=>{o.d(f,{n:()=>m});var s=o(6814),l=o(4819),t=o(1890),O=o(9624),e=o(3999),C=o(9291);let m=(()=>{class c{}return c.\u0275fac=function(Z){return new(Z||c)},c.\u0275mod=C.oAB({type:c}),c.\u0275inj=C.cJS({imports:[s.ez,l.O,O.U,t.f,e.aw]}),c})()},7824:(M,f,o)=>{o.d(f,{o:()=>s});var s=function(l){return l.export="export",l.import="import",l.print="print",l}(s||{})},1771:(M,f,o)=>{o.d(f,{U:()=>O});var s=o(9291),l=o(6223);const t=["*"];let O=(()=>{class e{constructor(){this.onSubmit=new s.vpe}ngOnChanges(m){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const m=this.getFormData();this.onSubmit.emit(m)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return e.\u0275fac=function(m){return new(m||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[s.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(m,c){1&m&&(s.F$t(),s.TgZ(0,"form",0),s.NdJ("ngSubmit",function(){return c.submit()}),s.Hsn(1),s.qZA()),2&m&&s.Q6J("formGroup",c.formGroup)},dependencies:[l._Y,l.JL,l.sg]}),e})()},8718:(M,f,o)=>{o.d(f,{x:()=>s});const s={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}},5:(M,f,o)=>{o.d(f,{Z:()=>l});const l={userConfig:o(8718).x}},7165:(M,f,o)=>{o.d(f,{f:()=>L});var s=o(5861),l=o(6223),t=o(8718),O=o(7563),e=o(9291),C=o(8763),m=o(5118),c=o(6814),P=o(1771),Z=o(8614),A=o(3838),b=o(4779),U=o(3999);function G(u,x){if(1&u&&(e.TgZ(0,"div",12),e._UZ(1,"app-dropdown",19),e.qZA()),2&u){const r=e.oxw();e.xp6(1),e.Tol(""),e.Q6J("text","parent")("request",r.userRequest)("optionLabel","name")("optionValue","id")}}const I=function(){return{type:"name",length:1}};let D=(()=>{class u{constructor(r,p,h,_,v){this.formBuilder=r,this.usersService=p,this.toastr=h,this.dynamiconfig=_,this.dialogRef=v,this.formGroup=this.initForm(),this.rolesRequest=O.c.api.get,this.userRequest=t.x.api.get,this.status=[{key:"Active",value:"Active"},{key:"Suspended",value:"Suspended"},{key:"Disable",value:"Disable"}],this.dynamiconfig.data?.data&&this.patchData(this.dynamiconfig.data.data)}accept(){this.formGroup.markAllAsTouched(),this.formGroup.invalid||(this.dynamiconfig.data.data?this.usersService.update(this.formGroup.value).subscribe({next:r=>{this.toastr.success(r.message),this.close(!0)},error:r=>{this.toastr.error(r.error.message)}}):this.usersService.create(this.formGroup.value).subscribe({next:r=>{this.toastr.success(r.message),this.close(!0)},error:r=>{this.toastr.error(r.error.message)}}))}close(r){this.dialogRef.close(r)}patchData(r){this.formGroup.patchValue({...r})}initForm(){return this.formBuilder.group({id:[""],name:["",[l.kI.required]],email:["",[l.kI.required,l.kI.pattern("^[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}$")]],status:["",[l.kI.required]],phone:["",[l.kI.required,l.kI.pattern("^[0-9]{11}$")]],parent_id:[""],role_id:[""]})}addValidators(){this.formGroup.get("parent_id").setValidators([l.kI.required])}}return u.\u0275fac=function(r){return new(r||u)(e.Y36(l.qu),e.Y36(L),e.Y36(C._W),e.Y36(m.S),e.Y36(m.E7))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-users-update"]],decls:27,vars:34,consts:[[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/Users.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup"],[1,"row"],[1,"col-12"],["formControlName","name","placeholder","Name",3,"patternMessage","text"],["formControlName","email","placeholder","Email",3,"text"],[1,"col-6"],["formControlName","phone","placeholder","Phone",3,"text"],["formControlName","status","placeholder","Status",3,"text","data","optionLabel","optionValue"],["formControlName","role_id","placeholder","Role",3,"text","request","optionLabel","optionValue"],["class","col-6",4,"ngIf"],[1,"row","g-2","my-2"],[3,"text","click"],["formControlName","parent_id","placeholder","parent",3,"text","request","optionLabel","optionValue"]],template:function(r,p){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"span",4),e.NdJ("click",function(){return p.close(!1)}),e._UZ(5,"i",5),e.qZA()(),e.TgZ(6,"p",6),e._uU(7),e.ALo(8,"translate"),e.qZA()(),e.TgZ(9,"app-form",7)(10,"div",8)(11,"div",9),e._UZ(12,"app-text",10),e.qZA(),e.TgZ(13,"div",9),e._UZ(14,"app-text",11),e.qZA(),e.TgZ(15,"div",12),e._UZ(16,"app-text",13),e.qZA(),e.TgZ(17,"div",12),e._UZ(18,"app-dropdown",14),e.qZA(),e.TgZ(19,"div",12),e._UZ(20,"app-dropdown",15),e.qZA(),e.YNc(21,G,2,6,"div",16),e.qZA(),e.TgZ(22,"div",17)(23,"div",12)(24,"app-button",18),e.NdJ("click",function(){return p.close(!1)}),e.qZA()(),e.TgZ(25,"div",12)(26,"app-button",18),e.NdJ("click",function(){return p.accept()}),e.qZA()()()()),2&r){let h;e.xp6(7),e.Oqu(e.lcZ(8,31,null!==(h=p.dynamiconfig.header)&&void 0!==h?h:"")),e.xp6(2),e.Q6J("formGroup",p.formGroup),e.xp6(3),e.Tol(""),e.Q6J("patternMessage",e.DdM(33,I))("text","Name"),e.xp6(2),e.Tol(""),e.Q6J("text","Email"),e.xp6(2),e.Tol(""),e.Q6J("text","Phone"),e.xp6(2),e.Tol(""),e.Q6J("text","Status")("data",p.status)("optionLabel","key")("optionValue","value"),e.xp6(2),e.Tol(""),e.Q6J("text","Role")("request",p.rolesRequest)("optionLabel","name")("optionValue","id"),e.xp6(1),e.Q6J("ngIf",null==p.dynamiconfig.data?null:p.dynamiconfig.data.data),e.xp6(3),e.Tol("btn-cancel"),e.Q6J("text","Cancel"),e.xp6(2),e.Tol("btn-filter"),e.Q6J("text",null==p.dynamiconfig.data?null:p.dynamiconfig.data.acceptLabel)}},dependencies:[c.O5,P.U,l.JJ,l.JL,l.sg,l.u,Z.T,A.J,b.r,U.X$]}),u})();var F=o(1732),T=o(3562);let L=(()=>{class u{constructor(r,p,h){this.http=r,this.dynamicDialog=p,this.toastr=h}get(){return this.http.get(t.x.api.get)}export(){return this.http.get(t.x.api.export)}openDialogToCreateUser(){var r=this;return(0,s.Z)(function*(){return r.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_user",data:{acceptLabel:"add",rejectLabel:"cancel"},width:"500px",height:"auto"},D)})()}create(r){return this.http.post(t.x.api.create,r)}getById(r){return this.http.get(t.x.api.getById+r)}delete(r){var p=this;return(0,s.Z)(function*(){const h={showHeader:!1,header:"delete",closable:!0,data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...r}},width:"300px",height:"164px"};if(!(yield p.dynamicDialog.confirm(h)))return!1;try{const v=yield p.http.delete(t.x.api.delete+r.id).toPromise();return p.toastr.success(v.message),v}catch(v){throw p.toastr.error(v.error.message),v}})()}openDialogToUpdateUser(r){var p=this;return(0,s.Z)(function*(){const h={showHeader:!1,header:"update",data:{message:"do_you_want_to_delete",acceptLabel:"update",rejectLabel:"cancel",data:{...r}},width:"480px",height:"auto"};return yield p.dynamicDialog.showDialogWithComponent(h,D)})()}update(r){return this.http.post(t.x.api.update+r.id,r)}}return u.\u0275fac=function(r){return new(r||u)(e.LFG(F.O),e.LFG(T.U),e.LFG(C._W))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);