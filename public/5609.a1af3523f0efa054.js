"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[5609],{5609:(O,v,n)=>{n.r(v),n.d(v,{CurrenciesModule:()=>ye});var s=n(6814),d=n(8209),e=n(9291),m=n(5861),u=function(o){return o.list="View Currencies",o.create="Create Currency",o.update="Edit Currency",o.delete="Delete Currency",o.listCode="Get Codes",o}(u||{}),h=n(5219),l=n(5566);const c=o=>{return{cols:[{field:"code",label:"code",class:"default"},{field:"name",label:"name",class:"default"},{field:"symbol",label:"symbol",class:"default"},{field:"price",label:"change_rate",class:"default"},{field:"price_rate",label:"pricing_type",class:"default"},{field:"default",label:"default",format:a=>1==a.default?"Default":" ",custom_class_cel:a=>"Default"==a.default?"text-active":"",class:"text-center"},{field:"creator",label:"created_by",class:""},{field:"created_at",label:"created_at",class:""},{label:"action",actions:[{id:u.delete,icon:"trash",class:"main-color",fun:(a=(0,m.Z)(function*(t){return yield o.currenciesService.delete(t)}),function(r){return a.apply(this,arguments)})},{id:u.update,icon:"pen-to-square",class:"main-color",fun:function(){var a=(0,m.Z)(function*(t){return yield o.currenciesService.openDialogToUpdate(t)});return function(r){return a.apply(this,arguments)}}()},{id:u.update,icon:"fa-solid fa-clock-rotate-left",class:"main-color",route:"history"}]}],Request:l.w.api.get,titleRow:"name"};var a},_=o=>({cols:[{field:"code",label:"code",class:"default"},{field:"name",label:"name",class:"default"},{field:"symbol",label:"symbol",class:"default"},{field:"price",label:"change_rate",class:"default"},{field:"price_rate",label:"pricing_type",class:"default"},{field:"editor",label:"editor",class:""},{field:"updated_at",label:"updated_at",class:""}],Request:l.w.api.getChangeRete+o.id});var f=n(6924),y=n(5946),Z=n(5619),w=n(6306),Q=n(8504),C=n(6223),P=n(5118),D=n(8763),R=n(1771),B=n(2305),W=n(8614),j=n(1904),Y=n(3838),z=n(6098),A=n(4779),M=n(3999);function K(o,a){if(1&o&&(e.TgZ(0,"p",19),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.value," ")}}function V(o,a){1&o&&(e.TgZ(0,"div",11),e._UZ(1,"app-number-input",20),e.qZA()),2&o&&(e.xp6(1),e.Tol(""),e.Q6J("mode","decimal")("maxFractionDigits",3)("minFractionDigits",2)("showButtons",!1)("text","price"))}function X(o,a){if(1&o&&(e.TgZ(0,"div",11),e._UZ(1,"app-dropdown",21),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Tol(""),e.Q6J("data",t.backup_changes)("text","backup_changes")}}function H(o,a){1&o&&(e.TgZ(0,"div",11),e._UZ(1,"app-date",22),e.qZA()),2&o&&(e.xp6(1),e.Tol(""))}function k(o,a){1&o&&(e.TgZ(0,"div",11),e._UZ(1,"app-date",23),e.qZA()),2&o&&(e.xp6(1),e.Tol(""),e.Q6J("text","to"))}function $(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",11)(1,"app-checkbox",24),e.NdJ("change",function(i){e.CHM(t);const g=e.oxw();return e.KtG(g.setDefault(i))}),e.qZA()()}if(2&o){const t=e.oxw();let r;e.xp6(1),e.Tol("d-flex align-items-center mt-2  flex-row-reverse justify-content-end gap-2"),e.Q6J("value",1==(null==(r=t.formGroup.get("default"))?null:r.value))("text","default")}}let E=(()=>{class o{constructor(t,r,i,g,p){this.config=t,this.dialogRef=r,this.toastr=i,this.currenciesService=g,this.fb=p,this.permissions=u,this.isSubmitted=!1,this.action="",this.priceType=[{name:"Official",id:"Official"},{name:"Custom",id:"Custom"}],this.backup_changes=[{name:"every 12 hours",id:"12_hours_per_day"},{name:"every 24 hours",id:"24_hours_per_day"},{name:"Custom",id:"Custom"}],this.formGroup=this.fb.group({id:[Number],name:["",[C.kI.required]],code:["",[C.kI.required]],price_rate:["Custom",[C.kI.required]],price:[""],from:[""],to:[""],backup_changes:["12_pm_every_day"],default:[0]}),this.config.data?.data&&(this.fillDataToUpdate(),console.log(this.config.data?.data))}ngOnInit(){this.currenciesService.getAction().subscribe(t=>{this.action=t}),this.currenciesService.getCodesFromServer().subscribe(t=>{this.currenciesService.setCodes(t),this.codes=t.data})}setDefault(t){t.checked?this.formGroup.get("default")?.patchValue(1):this.formGroup.get("default")?.patchValue(0)}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.currenciesService.update(this.formGroup.value).subscribe({next:t=>{this.toastr.success(t.message),this.closePopup(!0)},error:t=>{this.toastr.error(t.error.message),this.errors=t.error.errors}}):this.currenciesService.create(this.formGroup.value).subscribe({next:t=>{this.toastr.success(t.message),this.closePopup(!0)},error:t=>{this.toastr.error(t.error.message),this.errors=t.error.errors}})}closePopup(t){this.dialogRef.close(t)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,name:this.config.data.data.name,price:this.config.data.data?.price,price_rate:this.config.data.data?.price_rate,backup_changes:this.config.data.data?.backup_changes,code:this.config.data.data.code}),"Default"==this.config.data.data.default?this.formGroup.get("default")?.patchValue(1):this.formGroup.get("default")?.patchValue(0)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(P.S),e.Y36(P.E7),e.Y36(D._W),e.Y36(b),e.Y36(C.qu))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-new-currency"]],decls:30,vars:30,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/currency/currency.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"mb-5"],["formControlName","name","label","Currency Name","placeholder","",3,"text"],["placeholder","select","formControlName","code","ngDefaultControl","","optionLabel","code","optionValue","code",3,"filter","data","text"],["formControlName","price_rate","ngDefaultControl","","optionLabel","name","placeholder","select","optionValue","id",3,"data","text"],["class","mb-5",4,"ngIf"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"],["formControlName","price","ngDefaultControl","","placeholder","",3,"mode","maxFractionDigits","minFractionDigits","showButtons","text"],["placeholder","select","formControlName","backup_changes","ngDefaultControl","","optionLabel","name","optionValue","id",3,"data","text"],["formControlName","from","ngDefaultControl","","text","from","placeholder","from"],["formControlName","to","ngDefaultControl","","placeholder","to",3,"text"],[3,"value","text","change"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"span",5),e.NdJ("click",function(){return r.closePopup(!1)}),e._UZ(6,"i",6),e.qZA()(),e.TgZ(7,"p",7),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"app-form",8),e.NdJ("onSubmit",function(){return r.accept()}),e.YNc(11,K,2,1,"p",9),e.ALo(12,"keyvalue"),e.TgZ(13,"div",10)(14,"div",11),e._UZ(15,"app-text",12),e.qZA(),e.TgZ(16,"div",11),e._UZ(17,"app-dropdown",13),e.qZA(),e.TgZ(18,"div",11),e._UZ(19,"app-dropdown",14),e.qZA(),e.YNc(20,V,2,7,"div",15),e.YNc(21,X,2,4,"div",15),e.YNc(22,H,2,2,"div",15),e.YNc(23,k,2,3,"div",15),e.YNc(24,$,2,4,"div",15),e.qZA(),e.TgZ(25,"div",16)(26,"div",17)(27,"app-button",18),e.NdJ("click",function(){return r.closePopup(!1)}),e.qZA()(),e.TgZ(28,"div",17)(29,"app-button",18),e.NdJ("click",function(){return r.accept()}),e.qZA()()()()()),2&t){let i,g,p,T,x;e.xp6(8),e.Oqu(e.lcZ(9,26,null!==(i=r.config.header)&&void 0!==i?i:"")),e.xp6(2),e.Q6J("formGroup",r.formGroup),e.xp6(1),e.Q6J("ngForOf",e.lcZ(12,28,r.errors)),e.xp6(4),e.Tol(""),e.Q6J("text","name"),e.xp6(2),e.Tol(""),e.Q6J("filter",!0)("data",r.codes)("text","code"),e.xp6(2),e.Tol(""),e.Q6J("data",r.priceType)("text","pricing_type"),e.xp6(1),e.Q6J("ngIf","Custom"==(null==(g=r.formGroup.get("price_rate"))?null:g.value)),e.xp6(1),e.Q6J("ngIf","Official"==(null==(p=r.formGroup.get("price_rate"))?null:p.value)),e.xp6(1),e.Q6J("ngIf","Official"==(null==(T=r.formGroup.get("price_rate"))?null:T.value)&&"Custom"==(null==(T=r.formGroup.get("backup_changes"))?null:T.value)),e.xp6(1),e.Q6J("ngIf","Official"==(null==(x=r.formGroup.get("price_rate"))?null:x.value)&&"Custom"==(null==(x=r.formGroup.get("backup_changes"))?null:x.value)),e.xp6(1),e.Q6J("ngIf","update_currency"==r.config.header),e.xp6(3),e.Tol("btn-cancel"),e.Q6J("text","Cancel"),e.xp6(2),e.Tol("btn-filter"),e.Q6J("text",null==r.config.data?null:r.config.data.acceptLabel)}},dependencies:[s.sg,s.O5,R.U,C.Fj,C.JJ,C.JL,C.sg,C.u,B.b,W.T,j.D,Y.J,z.I,A.r,s.Nd,M.X$],styles:["[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:600;font-size:1.8rem;line-height:24px;color:var(--mainColor)}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .title-model[_ngcontent-%COMP%]{padding:1rem!important;font-style:normal;font-weight:600;font-size:1.8rem;line-height:28px;color:var(--mainColor)}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:500;color:#344054}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:1.6rem!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{font-size:1.6rem!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     app-input input{height:30px!important}"]}),o})();var q=n(9862),ee=n(3562);let b=(()=>{class o{constructor(t,r,i){this.http=t,this.dynamicDialog=r,this.toastr=i,this.codes=new Z.X({}),this.action=new Z.X("create")}getCodesFromServer(){return this.http.get("currency/codes/all").pipe((0,w.K)(t=>(0,Q._)(()=>t.message||"some error from server ")))}update(t){return this.http.post("currency/update/"+t.id,t)}getCurrencies(){return this.http.get(l.w.api.get)}getById(t){return this.http.get(l.w.api.getById+t)}getCodes(){return this.codes}setCodes(t){this.codes.next(t)}getAction(){return this.action}setAction(t){this.action.next(t)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_currency",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},E)}create(t){return this.http.post(l.w.api.create,t)}delete(t){var r=this;return(0,m.Z)(function*(){const i={showHeader:!0,header:"delete_currency",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...t}},width:"300px",height:"164px"};return!!(yield r.dynamicDialog.confirm(i))&&r.http.delete(l.w.api.delete+t.id).toPromise().then(p=>(r.toastr.success(p.message),p)).catch(p=>(r.toastr.error(p.error.message),p))})()}openDialogToUpdate(t){var r=this;return(0,m.Z)(function*(){const i={showHeader:!1,header:"update_currency",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...t}},width:"480px",height:"auto"};return yield r.dynamicDialog.showDialogWithComponent(i,E)})()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(q.eN),e.LFG(ee.U),e.LFG(D._W))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var S=n(2377),L=n(359),U=n(3826),J=n(5077),te=n(8275);function oe(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"app-button",13),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.openDialogToCreate())}),e.qZA()}if(2&o){const t=e.oxw();e.Tol("btn-filter"),e.Q6J("text","new")("icon",t.icon.PLUS)("iconPos","left")}}const ne=function(o){return[o]};let re=(()=>{class o{constructor(t){this.currenciesService=t,this.tableConfig=c(this),this.filtersConfig=[{field:"search",label:"search",type:f.W.TEXT,placeholder:"search"},{field:"name",label:"name",type:f.W.TEXT,placeholder:"name"},{field:"code",label:"code",type:f.W.SELECT,options:{value:"code",label:"code"},request:l.w.api.getCodes},{field:"price_rate",label:"pricing_type",type:f.W.SELECT,options:{value:"id",label:"name"},data:[{name:"Official",id:"Official"},{name:"Custom",id:"Custom"}]},{label:"from",field:"from",type:f.W.DATE,placeholder:"from"},{label:"to",field:"to",type:f.W.DATE,placeholder:"to"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"Sort By",data:[{label:"Name",field:"name"},{label:"code",field:"code"},{label:"price",field:"price"},{label:"symbol",field:"symbol"},{label:"created_at",field:"created_at"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"Sort Type",data:[{label:y.q.asc,field:y.q.asc},{label:y.q.desc,field:y.q.desc}]}],this.permissions=u,this.icon=h.dv}openDialogToCreate(){var t=this;return(0,m.Z)(function*(){(yield t.currenciesService.openDialogToCreate())&&(t.tableConfig=c(t))})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-currencies"]],decls:16,vars:12,consts:[[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,oe,1,5,"app-button",3),e.qZA()(),e.TgZ(6,"div",4),e._UZ(7,"ukt-sort",5,6)(9,"ukt-filter",7,8),e.qZA(),e.TgZ(11,"div",9),e._UZ(12,"app-table",10),e.qZA(),e.TgZ(13,"div",11),e._UZ(14,"ukt-pagination",null,12),e.qZA()),2&t){const i=e.MAs(8),g=e.MAs(10),p=e.MAs(15);e.xp6(2),e.Oqu(e.lcZ(3,8,"list_of_currency")),e.xp6(3),e.Q6J("hasPermissions",e.VKq(10,ne,r.permissions.create)),e.xp6(2),e.Q6J("SortConfig",r.sortConfig),e.xp6(2),e.Q6J("config",r.filtersConfig),e.xp6(3),e.Q6J("tableConfig",r.tableConfig)("pagination",p)("filter",g)("sort",i)}},dependencies:[S.a,L.Q,U.x,J.z,A.r,te.z,M.X$],styles:["[_nghost-%COMP%]   .table[_ngcontent-%COMP%]   app-table[_ngcontent-%COMP%]     .responsiveTable{margin-top:30px;background:rgb(248,248,248)}[_nghost-%COMP%]   .table[_ngcontent-%COMP%]   app-table[_ngcontent-%COMP%]     tbody tr{background:rgb(248,248,248)}[_nghost-%COMP%]   .table[_ngcontent-%COMP%]   app-table[_ngcontent-%COMP%]     tbody tr .text-active{text-align:center}"]}),o})(),ae=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-currencies"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-list-currencies"),e.qZA())},dependencies:[re]}),o})();var ie=n(8645),le=n(9773);const se=[{path:"",component:ae},{path:"history/:id",component:(()=>{class o{constructor(t,r){this.currenciesService=t,this.route=r,this.tableConfig=_(this),this.filtersConfig=[{field:"search",label:"search",type:f.W.TEXT,placeholder:"search"},{field:"price_rate",label:"pricing_type",type:f.W.SELECT,options:{value:"id",label:"name"},data:[{name:"Official",id:"Official"},{name:"Custom",id:"Custom"}]},{label:"from",field:"from",type:f.W.DATE,placeholder:"from"},{label:"to",field:"to",type:f.W.DATE,placeholder:"to"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"Sort By",data:[{label:"price",field:"price"},{label:"created_at",field:"created_at"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"Sort Type",data:[{label:y.q.asc,field:y.q.asc},{label:y.q.desc,field:y.q.desc}]}],this.unsubscribe=new ie.x}ngOnInit(){this.route.data.pipe((0,le.R)(this.unsubscribe)).subscribe({next:t=>{this.data=t.currency.data},error:t=>{}}),this.route.params.subscribe(t=>{this.id=t.id,this.tableConfig=_(this)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b),e.Y36(d.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-history-currencies"]],decls:15,vars:7,consts:[[1,"page-card"],[1,"mb-4"],[1,"title"],["routerLink","/key/configuration/currencies/",1,"pi","pi-arrow-left","px-3","pt-2","pointer",2,"font-size","1.6rem"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),e._UZ(3,"i",3),e._uU(4),e.qZA()(),e.TgZ(5,"div",4),e._UZ(6,"ukt-sort",5,6)(8,"ukt-filter",7,8),e.qZA(),e.TgZ(10,"div",9),e._UZ(11,"app-table",10),e.qZA(),e.TgZ(12,"div",11),e._UZ(13,"ukt-pagination",null,12),e.qZA()()),2&t){const i=e.MAs(7),g=e.MAs(9),p=e.MAs(14);e.xp6(4),e.hij(" ",r.data.name," "),e.xp6(2),e.Q6J("SortConfig",r.sortConfig),e.xp6(2),e.Q6J("config",r.filtersConfig),e.xp6(3),e.Q6J("tableConfig",r.tableConfig)("pagination",p)("filter",g)("sort",i)}},dependencies:[d.rH,S.a,L.Q,U.x,J.z],styles:["[_nghost-%COMP%]   .table[_ngcontent-%COMP%]   app-table[_ngcontent-%COMP%]     .responsiveTable{margin-top:30px;background:rgb(248,248,248)}[_nghost-%COMP%]   .table[_ngcontent-%COMP%]   app-table[_ngcontent-%COMP%]     .responsiveTable thead tr .default{min-width:100px!important}[_nghost-%COMP%]   .table[_ngcontent-%COMP%]   app-table[_ngcontent-%COMP%]     .responsiveTable tbody tr{background:rgb(248,248,248)}[_nghost-%COMP%]   .table[_ngcontent-%COMP%]   app-table[_ngcontent-%COMP%]     .responsiveTable tbody tr .text-active{text-align:center}"]}),o})(),resolve:{currency:(()=>{class o{constructor(t){this.currenciesService=t}resolve(t){return this.currenciesService.getById(t.params.id)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(b))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}];let ce=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(se),d.Bz]}),o})();var ue=n(1383),pe=n(1471),de=n(2115),fe=n(8096),me=n(1890),ge=n(6145),he=n(4413),Ce=n(9624),ve=n(1019);let ye=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.ez,ce,he.e,Ce.U,pe.X,de.u,fe.J,ve.i,me.f,ge.n,M.aw,ue.m]}),o})()},6145:(O,v,n)=>{n.d(v,{n:()=>l});var s=n(6814),d=n(4819),e=n(1890),m=n(9624),u=n(3999),h=n(9291);let l=(()=>{class c{}return c.\u0275fac=function(f){return new(f||c)},c.\u0275mod=h.oAB({type:c}),c.\u0275inj=h.cJS({imports:[s.ez,d.O,m.U,e.f,u.aw]}),c})()},1771:(O,v,n)=>{n.d(v,{U:()=>m});var s=n(9291),d=n(6223);const e=["*"];let m=(()=>{class u{constructor(){this.onSubmit=new s.vpe}ngOnChanges(l){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const l=this.getFormData();this.onSubmit.emit(l)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return u.\u0275fac=function(l){return new(l||u)},u.\u0275cmp=s.Xpm({type:u,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[s.TTD],ngContentSelectors:e,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(l,c){1&l&&(s.F$t(),s.TgZ(0,"form",0),s.NdJ("ngSubmit",function(){return c.submit()}),s.Hsn(1),s.qZA()),2&l&&s.Q6J("formGroup",c.formGroup)},dependencies:[d._Y,d.JL,d.sg]}),u})()},9773:(O,v,n)=>{n.d(v,{R:()=>u});var s=n(9360),d=n(8251),e=n(4829),m=n(2420);function u(h){return(0,s.e)((l,c)=>{(0,e.Xf)(h).subscribe((0,d.x)(c,()=>c.complete(),m.Z)),!c.closed&&l.subscribe(c)})}}}]);