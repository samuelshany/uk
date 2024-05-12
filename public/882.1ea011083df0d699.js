"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[882],{7563:(x,d,n)=>{n.d(d,{c:()=>r});const r={api:{create:"role/create",get:"role",getById:"role/",update:"role/update/",delete:"role/"},page:{listRole:"",updateRole:"update/:id",viewRole:"view/:id",createRole:"new"}}},882:(x,d,n)=>{n.r(d),n.d(d,{RolesModule:()=>he});var r=n(6814),a=n(8209),m=n(6223),g=n(8645),u=n(9773),h=n(5219),e=n(9291),p=n(8763),y=n(5861),T=n(5619),f=n(7563),S=n(3562),G=n(1732);let M=(()=>{class o{constructor(t,s,l){this.dynamicDialog=t,this.http=s,this.toastr=l,this.latestRoles=new T.X([]),this.displaySingleRole=new T.X({})}getRoles(t){return this.http.get(f.c.api.get)}getRoleById(t){return this.http.get(f.c.api.getById+t)}getLatestRoles(){return this.latestRoles}setLatestRoles(t){return this.latestRoles.next(t)}addRole(t){return this.http.post(f.c.api.create,t)}deleteRole(t,s,l){var c=this;return(0,y.Z)(function*(){const v={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...t}},width:"480px",height:"164px"};if(yield c.dynamicDialog.confirm(v))try{const b=yield c.http.delete(f.c.api.delete+t.id).toPromise();return c.toastr.success(b.message),b}catch(b){throw c.toastr.error(b.error.message),b}return!1})()}updateRole(t,s){return this.http.post(f.c.api.update+t.id,t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(S.U),e.LFG(G.O),e.LFG(p._W))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var J=n(4858),B=n(1771),I=n(2305),A=n(8614),L=n(1935),U=n(4779),_=n(3999);function w(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"li")(1,"app-checkbox",25),e.NdJ("change",function(){const c=e.CHM(t).$implicit,v=e.oxw().$implicit,C=e.oxw(2);return e.KtG(C.selectSinglePermission(c,v))}),e.qZA()()}if(2&o){const t=i.$implicit,s=e.oxw(3);e.xp6(1),e.Q6J("text",t.name)("value",s.formGroup.value.permissions.includes(t.id))}}function Q(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",23)(1,"div",24)(2,"app-checkbox",25),e.NdJ("change",function(l){const v=e.CHM(t).$implicit,C=e.oxw(2);return e.KtG(C.selectListOfPermission(l,v))}),e.qZA()(),e.TgZ(3,"div",26)(4,"ul"),e.YNc(5,w,2,2,"li",27),e.qZA()()()}if(2&o){const t=i.$implicit,s=e.oxw(2);e.xp6(2),e.Q6J("text",t.name)("value",s.haveAllPermission(t)),e.xp6(3),e.Q6J("ngForOf",t.permissions)}}function W(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",17)(2,"div",18)(3,"p",19),e._uU(4),e.qZA(),e.TgZ(5,"app-icon",20),e.NdJ("click",function(){e.CHM(t);const l=e.MAs(7),c=e.oxw();return e.KtG(c.showPermission(l))}),e.qZA()(),e.TgZ(6,"div",null,21),e.YNc(8,Q,6,3,"div",22),e.qZA()()()}if(2&o){const t=i.$implicit,s=e.MAs(7);e.xp6(4),e.Oqu(t.name),e.xp6(1),e.Q6J("type","solid")("icon",s.classList.contains("d-none")?"caret-up":"caret-down"),e.xp6(3),e.Q6J("ngForOf",t.permission_categories)}}let E=(()=>{class o{constructor(t,s,l,c,v,C){this.toastr=t,this.router=s,this.route=l,this.rolesService=c,this.formBuilder=v,this.permissionsService=C,this.title="create_role",this.appLayout=this.router.routerState.snapshot.url.split("/")[1],this.allPermissions=[],this.formGroup=this.initForm(),this.unsubscribe=new g.x,this.readonly=!1,this.icon=h.dv}ngOnInit(){this.route.snapshot.paramMap.get("id")&&(this.readonly=!0,this.title="update_role",this.route.data.pipe((0,u.R)(this.unsubscribe)).subscribe({next:t=>{this.data=this.prepareData(t.role.data),this.formGroup.patchValue({...this.data})},error:t=>{}})),this.permissionsService.getAllPermission().pipe((0,u.R)(this.unsubscribe)).subscribe({next:t=>{this.allPermissions=t.data},error:t=>{},complete:()=>{}})}initForm(){return this.formBuilder.group({id:[Number],name:["",[m.kI.required]],permissions:[[],m.kI.minLength(1)],users:[Number]})}prepareData(t){return t.permissions=t.permissions?.map(s=>s.id),t}get name(){return this.formGroup.get("name")}showPermission(t){t.classList.contains("d-none")?t.classList.remove("d-none"):t.classList.add("d-none")}selectSinglePermission(t,s){let l=this.formGroup.value.permissions.indexOf(t.id);l>-1?this.formGroup.value.permissions.splice(l,1):this.formGroup.value.permissions.push(t.id),this.haveAllPermission(s)}onSubmit(){this.formGroup.markAllAsTouched(),!this.formGroup.invalid&&(this.route.snapshot.paramMap.get("id")?this.rolesService.updateRole(this.formGroup.value,this.data.id).subscribe({next:t=>{this.toastr.success(t.message)},error:t=>{this.toastr.error(t.error.message)},complete:()=>{this.router.navigate([`${this.appLayout}/roles`])}}):this.rolesService.addRole(this.formGroup.value).subscribe({next:t=>{this.toastr.success(t.message)},error:t=>{this.toastr.error(t.error.message)},complete:()=>{this.router.navigate([`${this.appLayout}/roles`])}}))}selectListOfPermission(t,s){s.permissions.forEach(t.checked?l=>{this.formGroup.value.permissions.includes(l.id)||this.formGroup.value.permissions.push(l.id)}:l=>{this.formGroup.value.permissions.includes(l.id)&&(this.formGroup.value.permissions=this.formGroup.value.permissions.filter(c=>c!=l.id))})}haveAllPermission(t){return t.permissions.every(s=>this.formGroup.value.permissions.includes(s.id))}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p._W),e.Y36(a.F0),e.Y36(a.gz),e.Y36(M),e.Y36(m.qu),e.Y36(J.q))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-update-role"]],decls:20,vars:20,consts:[[1,"d-flex","justify-content-start","align-items-center","gap-4","pb-2"],[1,"link",3,"routerLink"],[1,"fa-solid","fa-arrow-left"],[1,"title"],[1,"d-flex","justify-content-between","align-items-center","mt-2"],[1,"fw-semibold"],[1,"d-flex"],[1,"mx-2"],[3,"routerLink","text"],[3,"text","icon","click"],[1,"px-2","fa-solid","fa-plus"],[1,"add-new","row","my-3"],[3,"formGroup","onSubmit"],["ngDefaultControl","","formControlName","name",3,"placeholder"],[1,"row"],["class","px-3 col-md-4 col-sm-6",4,"ngFor","ngForOf"],[1,"px-3","col-md-4","col-sm-6"],[1,"card"],[1,"d-flex","justify-content-between","p-2"],[1,"fw-bold"],[3,"type","icon","click"],["categories",""],["class","card mt-3",4,"ngFor","ngForOf"],[1,"card","mt-3"],[1,"card-header","w-100","bg-white"],["ngDefaultControl","",3,"text","value","change"],[1,"card-body","m-0","p-0"],[4,"ngFor","ngForOf"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"a",1),e._UZ(2,"i",2),e.qZA(),e.TgZ(3,"h5",3),e._uU(4),e.ALo(5,"translate"),e.qZA()(),e.TgZ(6,"div",4)(7,"h2",5),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"div",6)(11,"div",7),e._UZ(12,"app-button",8),e.qZA(),e.TgZ(13,"app-button",9),e.NdJ("click",function(){return s.onSubmit()}),e._UZ(14,"i",10),e.qZA()()(),e.TgZ(15,"div",11)(16,"app-form",12),e.NdJ("onSubmit",function(){return s.onSubmit()}),e._UZ(17,"app-text",13),e.TgZ(18,"div",14),e.YNc(19,W,9,4,"div",15),e.qZA()()()),2&t&&(e.xp6(1),e.MGl("routerLink","/",s.appLayout,"/roles"),e.xp6(3),e.Oqu(e.lcZ(5,16,"roles")),e.xp6(4),e.Oqu(e.lcZ(9,18,s.title)),e.xp6(4),e.Tol("btn-cancel"),e.MGl("routerLink","/",s.appLayout,"/roles"),e.Q6J("text","Cancel"),e.xp6(1),e.Tol("btn-filter"),e.Q6J("text","Save")("icon",s.icon.PLUS),e.xp6(3),e.Q6J("formGroup",s.formGroup),e.xp6(1),e.Tol("m-2"),e.Q6J("placeholder","role_name"),e.xp6(2),e.Q6J("ngForOf",s.allPermissions))},dependencies:[r.sg,a.rH,B.U,m.Fj,m.JJ,m.JL,m.sg,m.u,I.b,A.T,L.o,U.r,_.X$],styles:["ul[_ngcontent-%COMP%]{margin:10px 5px 5px;padding:0 5px 5px 15px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-block:5px}"]}),o})();var O=n(438);let Y=(()=>{class o{constructor(){this.permissions=O.M,this.icon=h.dv}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-role-header"]],decls:7,vars:5,consts:[[1,"d-flex","justify-content-between","pb-5"],[1,"title"],[1,"new-btn"],["routerLink","new",3,"text","icon"],["type","solid"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2)(5,"app-button",3),e._UZ(6,"app-icon",4),e.qZA()()()),2&t&&(e.xp6(2),e.Oqu(e.lcZ(3,3,"roles_list")),e.xp6(3),e.Q6J("text","new")("icon",s.icon.PLUS))},dependencies:[a.rH,L.o,U.r,_.X$],styles:["[_nghost-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   .role-title[_ngcontent-%COMP%]{color:var(--mainColor);font-size:19px;font-weight:600}"]}),o})();var P=n(7824);const z=o=>{return{cols:[{field:"id",label:"id",class:"title"},{field:"name",label:"name",class:"title"},{field:"created_at",label:"created_at",class:"title"},{label:"action",class:"title",actions:[{id:O.M.delete,icon:"trash",class:"main-color",fun:(i=(0,y.Z)(function*(t){return yield o.rolesService.deleteRole(t,"delete-role")}),function(s){return i.apply(this,arguments)})},{id:O.M.update,icon:"pen-to-square",route:"update",class:"main-color"},{id:O.M.viewPermissions,icon:"eye",route:"view",class:"main-color"}]}],Request:f.c.api.get};var i};var R=n(6924),Z=n(5946),F=n(1882),X=n(2377),$=n(359),H=n(5077),V=n(4811);let k=(()=>{class o{constructor(t,s){this.rolesService=t,this.sharedService=s,this.fileConfig={fileName:"Role",fileOption:[P.o.export,P.o.import,P.o.print],import:{maxFileSize:33333,multiple:!0,accept:"",url:""},export:{type:[{key:"Pdf",value:"Pdf"},{key:"Csv",value:"Csv"},{key:"Exil",value:"Exil"}]},print:{}},this.tableConfig=z(this),this.filtersConfig=[{label:"name",field:"search",type:R.W.TEXT,placeholder:"name"},{label:"from",field:"from",type:R.W.DATE,placeholder:"from"},{label:"to",field:"to",type:R.W.DATE,placeholder:"to"},{label:"created_by",field:"creator_id",type:R.W.SELECT,options:{value:"id",label:"name"},request:f.c.api.get,placeholder:"created_by"},{label:"search",field:"search",type:R.W.TEXT,placeholder:"search"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"role",field:"role"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:Z.q.asc,field:Z.q.asc},{label:Z.q.desc,field:Z.q.desc}]}],this.appLayout="",this.unsubscribe=new g.x}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(M),e.Y36(F.F))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-role-list"]],decls:11,vars:6,consts:[[1,"d-flex","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],["table",""],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""]],template:function(t,s){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"ukt-sort",1,2)(3,"ukt-filter",3,4),e.qZA(),e.TgZ(5,"div",5),e._UZ(6,"app-table",6,7),e.qZA(),e.TgZ(8,"div",8),e._UZ(9,"ukt-pagination",null,9),e.qZA()),2&t){const l=e.MAs(2),c=e.MAs(4),v=e.MAs(10);e.xp6(1),e.Q6J("SortConfig",s.sortConfig),e.xp6(2),e.Q6J("config",s.filtersConfig),e.xp6(3),e.Q6J("tableConfig",s.tableConfig)("pagination",v)("filter",c)("sort",l)}},dependencies:[X.a,$.Q,H.z,V.x]}),o})(),q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-roles"]],decls:4,vars:0,consts:[[1,"col"],[1,"page-card","bg-white"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-role-header")(3,"app-role-list"),e.qZA()())},dependencies:[Y,k]}),o})();var ee=n(1904);function te(o,i){if(1&o&&(e.TgZ(0,"li",11),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.hij(" ",t.name," ")}}let oe=(()=>{class o{constructor(t,s){this.route=t,this.sharedService=s,this.appLayout="",this.unsubscribe=new g.x}ngOnInit(){this.route.data.pipe((0,u.R)(this.unsubscribe)).subscribe({next:t=>{this.data=t.role.data},error:t=>{}})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.gz),e.Y36(F.F))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-view-role-permission"]],decls:15,vars:18,consts:[[1,"row","py-3","m-2"],[1,"col-12","my-5"],["routerLink","/key/roles",1,"link"],[1,"fa-solid","fa-arrow-left"],[1,"col-3"],[3,"value","readOnly","text"],[1,"offset-5","col-4"],[3,"showButtons","readOnly","value","text"],[1,"row","permissions"],[1,"row"],["class","col-6 col-sm-4 col-md-3 p-3 permission-name",4,"ngFor","ngForOf"],[1,"col-6","col-sm-4","col-md-3","p-3","permission-name"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e._UZ(3,"i",3),e._uU(4),e.ALo(5,"translate"),e.qZA()(),e.TgZ(6,"div",4),e._UZ(7,"app-text",5),e.qZA(),e.TgZ(8,"div",6),e._UZ(9,"app-number-input",7),e.qZA()(),e.TgZ(10,"h3",8),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"ul",9),e.YNc(14,te,2,1,"li",10),e.qZA()),2&t&&(e.xp6(4),e.hij(" ",e.lcZ(5,14,"Roles")," "),e.xp6(3),e.Tol("d-flex gap-5 align-items-center"),e.Q6J("value",s.data.name)("readOnly",!0)("text","Role"),e.xp6(2),e.Tol("d-flex gap-5 align-items-center"),e.Q6J("showButtons",!1)("readOnly",!0)("value",s.data.users)("text","users"),e.xp6(2),e.Oqu(e.lcZ(12,16,"permissions")),e.xp6(3),e.Q6J("ngForOf",s.data.permissions))},dependencies:[r.sg,a.rH,A.T,ee.D,_.X$],styles:["[_nghost-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--mainColor)}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   .role[_ngcontent-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   .permission-name[_ngcontent-%COMP%]{color:#656565}[_nghost-%COMP%]   .permissions[_ngcontent-%COMP%]{font-family:var(--Roboto);font-weight:600;font-size:2rem;line-height:19px;margin:3rem 0}"]}),o})(),D=(()=>{class o{constructor(t){this.rolesService=t}resolve(t){return this.rolesService.getRoleById(t.params.id)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(M))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const ne=[{path:f.c.page.listRole,component:q},{path:f.c.page.updateRole,component:E,resolve:{role:D}},{path:f.c.page.viewRole,component:oe,resolve:{role:D}},{path:f.c.page.createRole,component:E}];let se=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.Bz.forChild(ne),a.Bz]}),o})();var ie=n(1383),re=n(1471),le=n(9293),ae=n(2115),pe=n(3992),ce=n(4413),me=n(1019),ue=n(8096),de=n(1890),fe=n(6145);let he=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,se,ce.e,ie.m,re.X,le.Q,ae.u,pe.Z,me.i,ue.J,de.f,fe.n,_.aw]}),o})()},6145:(x,d,n)=>{n.d(d,{n:()=>e});var r=n(6814),a=n(4819),m=n(1890),g=n(9624),u=n(3999),h=n(9291);let e=(()=>{class p{}return p.\u0275fac=function(T){return new(T||p)},p.\u0275mod=h.oAB({type:p}),p.\u0275inj=h.cJS({imports:[r.ez,a.O,g.U,m.f,u.aw]}),p})()},7824:(x,d,n)=>{n.d(d,{o:()=>r});var r=function(a){return a.export="export",a.import="import",a.print="print",a}(r||{})},1771:(x,d,n)=>{n.d(d,{U:()=>g});var r=n(9291),a=n(6223);const m=["*"];let g=(()=>{class u{constructor(){this.onSubmit=new r.vpe}ngOnChanges(e){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const e=this.getFormData();this.onSubmit.emit(e)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=r.Xpm({type:u,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[r.TTD],ngContentSelectors:m,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(e,p){1&e&&(r.F$t(),r.TgZ(0,"form",0),r.NdJ("ngSubmit",function(){return p.submit()}),r.Hsn(1),r.qZA()),2&e&&r.Q6J("formGroup",p.formGroup)},dependencies:[a._Y,a.JL,a.sg]}),u})()},9773:(x,d,n)=>{n.d(d,{R:()=>u});var r=n(9360),a=n(8251),m=n(4829),g=n(2420);function u(h){return(0,r.e)((e,p)=>{(0,m.Xf)(h).subscribe((0,a.x)(p,()=>p.complete(),g.Z)),!p.closed&&e.subscribe(p)})}}}]);