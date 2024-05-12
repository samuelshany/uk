"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[6140],{6140:(me,y,n)=>{n.r(y),n.d(y,{SuppliersModule:()=>de});var x=n(6814),v=n(2954),e=n(9291);let S=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-suppliers"]],decls:3,vars:0,consts:[[1,"page-card"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-header-suppliers")(2,"app-list-suppliers"),e.qZA())}}),r})();var J=n(2127),u=function(r){return r.list="View Suppliers",r.create="Create Supplier",r.update="Edit Supplier",r.delete="Delete Supplier",r.import="Import Suppliers",r}(u||{});const I=[{path:"",component:S,canActivate:[J.t],data:{permission:u.list}}];let U=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[v.Bz.forChild(I),v.Bz]}),r})();var d=n(5861);const s_api_create="supplier/create",s_api_get="supplier",s_api_getUsers="user",s_api_update="supplier/update/",s_api_delete="supplier/",s_api_getCurrencies="currency",s_api_getAccounts="account",s_api_getCountries="address/country",s_api_getStates="address/state",s_api_getCities="address/city",s_api_getCountryById="address/country/",s_api_getStateById="address/state/",s_api_getCityById="address/city/",b=r=>{return{cols:[{field:"code",label:"code",class:""},{field:"name",label:"name",class:""},{field:"contact",label:"contact",class:""},{field:"email",label:"email"},{field:"balance",label:"balance",format:o=>o.balance?o.balance:"0"},{field:"prefix",label:"prefix",format:o=>o.prefix?o.prefix:"-"},{label:"action",actions:[{id:u.delete,icon:"trash",class:"main-color",fun:(o=(0,d.Z)(function*(t){return yield r.supplierService.delete(t)}),function(i){return o.apply(this,arguments)})},{id:u.update,icon:"pen-to-square",class:"main-color",fun:function(){var o=(0,d.Z)(function*(t){return yield r.supplierService.openDialogToUpdateSupplier(t)});return function(i){return o.apply(this,arguments)}}()}]}],Request:s_api_get};var o};var L=n(5219),c=n(6924),f=n(5946),w=n(5566),l=n(6223),Q=n(8645),m=n(9773),j=n(6433),Z=n(8763),T=n(5118),B=n(8614),Y=n(3838),O=n(1771),A=n(4779),h=n(3999);function F(r,o){if(1&r&&(e.TgZ(0,"p",21),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(null==t.errorCreateCustomer?null:t.errorCreateCustomer.name[0])}}function G(r,o){if(1&r&&(e.TgZ(0,"p",21),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(null==t.errorCreateCustomer?null:t.errorCreateCustomer.contact[0])}}function q(r,o){if(1&r&&(e.TgZ(0,"p",21),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(null==t.errorCreateCustomer?null:t.errorCreateCustomer.email[0])}}function M(r,o){if(1&r&&(e.TgZ(0,"p",21),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(null==t.errorCreateCustomer?null:t.errorCreateCustomer.currency_id[0])}}function R(r,o){if(1&r&&(e.TgZ(0,"p",21),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.Oqu(null==t.errorCreateCustomer?null:t.errorCreateCustomer.parent_account_id[0])}}function E(r,o){if(1&r&&(e.TgZ(0,"div",10),e._UZ(1,"app-dropdown",22),e.YNc(2,R,2,1,"p",12),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("text","parent")("data",t.accounts)("filter",!0)("optionLabel","name_code")("optionValue","id")("placeholder","select"),e.xp6(1),e.Q6J("ngIf",null==t.errorCreateCustomer?null:t.errorCreateCustomer.parent_account_id)}}function z(r,o){if(1&r&&(e.TgZ(0,"p",21),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(null==t.errorCreateCustomer?null:t.errorCreateCustomer.prefix[0])}}const V=function(){return{type:"email",length:5}};let N=(()=>{class r{constructor(t,i,a,g,p,fe){this.accountsService=t,this.fb=i,this.toastr=a,this.config=g,this.dialogRef=p,this.supplierService=fe,this.unsubscribe=new Q.x,this.formGroup=this.initForm(),this.currencies=[],this.accounts=[],this.shippingCountries=[],this.shippingStates=[],this.shippingCities=[],this.getCurrencyRequest=w.w.api.get,this.billingCountries=[],this.billingStates=[],this.billingCities=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){this.accountsService.getAccountsParents().pipe((0,m.R)(this.unsubscribe)).subscribe({next:t=>{this.accounts=t.data}}),this.supplierService.getCurrencies().pipe((0,m.R)(this.unsubscribe)).subscribe({next:t=>{this.currencies=t.data}}),this.supplierService.getCountries().pipe((0,m.R)(this.unsubscribe)).subscribe({next:t=>{this.shippingCountries=t.data,this.billingCountries=t.data,this.config.data?.data&&(this.shippingStates=this.shippingCountries.filter(i=>i.id==this.config.data.data.address?.country_id)[0]?.states)}}),this.config.data?.data&&this.getShippingCities(this.config.data.data.address?.state_id)}initForm(){return this.fb.group({id:[Number],name:["",[l.kI.required,l.kI.pattern("^[\u0621-\u064a\u0660-\u0669a-zA-Z 0-9  @#$%^&*s]{2,50}$")]],contact:["",[l.kI.required]],email:["",[l.kI.required,l.kI.pattern("^[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}$")]],currency_id:["",[l.kI.required]],parent_account_id:["",[l.kI.required]],prefix:[""]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.supplierService.update(this.formGroup.value).subscribe({next:t=>{this.toastr.success(t.message),this.reject(!0)},error:t=>{this.errorCreateCustomer=t.error.errors}}):this.supplierService.create(this.formGroup.value).subscribe({next:t=>{this.toastr.success(t.message),this.reject(!0)},error:t=>{this.errorCreateCustomer=t.error.errors}})}reject(t){this.dialogRef.close(t)}getShippingState(t){this.formGroup.patchValue({state_id:[""],city_id:[""]}),this.shippingStates=this.shippingCountries.filter(i=>i.id==t)[0]?.states}getShippingCities(t){t>0&&this.supplierService.getStateById(t).pipe((0,m.R)(this.unsubscribe)).subscribe({next:i=>{this.shippingCities=i?.data?.cities}})}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,name:this.config.data.data.name,prefix:this.config.data.data.prefix,contact:this.config.data.data.contact,email:this.config.data.data.email,currency_id:this.config.data.data.currency_id,parent_account_id:this.config.data.data.parent_account_id})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(j.i),e.Y36(l.qu),e.Y36(Z._W),e.Y36(T.S),e.Y36(T.E7),e.Y36(C))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-new-supplier"]],decls:33,vars:39,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],[1,"row"],[1,"col-md-6"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["class","messageError",4,"ngIf"],["ngDefaultControl","","placeholder","","formControlName","contact",1,"d-block",3,"type","text"],["text","email","formControlName","email","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","currency_id",3,"text","request","filter","filterBy","optionLabel","optionValue","placeholder"],["class","col-md-6",4,"ngIf"],["text","prefix","formControlName","prefix","ngDefaultControl","","placeholder","",3,"type","disabled"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"messageError"],["ngDefaultControl","","formControlName","parent_account_id","filterBy","name_code",3,"text","data","filter","optionLabel","optionValue","placeholder"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"span",5),e.NdJ("click",function(){return i.reject(!1)}),e._UZ(6,"i",6),e.qZA()(),e.TgZ(7,"p",7),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"app-form",8),e.NdJ("onSubmit",function(){return i.accept()}),e.TgZ(11,"div",9)(12,"div",10),e._UZ(13,"app-text",11),e.YNc(14,F,2,1,"p",12),e.qZA(),e.TgZ(15,"div",10),e._UZ(16,"app-text",13),e.YNc(17,G,2,1,"p",12),e.qZA(),e.TgZ(18,"div",10),e._UZ(19,"app-text",14),e.YNc(20,q,2,1,"p",12),e.qZA(),e.TgZ(21,"div",10),e._UZ(22,"app-dropdown",15),e.YNc(23,M,2,1,"p",12),e.qZA(),e.YNc(24,E,3,9,"div",16),e.TgZ(25,"div",10),e._UZ(26,"app-text",17),e.YNc(27,z,2,1,"p",12),e.qZA()(),e.TgZ(28,"div",18)(29,"div",19)(30,"app-button",20),e.NdJ("click",function(){return i.reject(!1)}),e.qZA()(),e.TgZ(31,"div",19)(32,"app-button",20),e.NdJ("click",function(){return i.accept()}),e.qZA()()()()()),2&t){let a;e.xp6(8),e.Oqu(e.lcZ(9,36,null!==(a=i.config.header)&&void 0!==a?a:"")),e.xp6(2),e.Q6J("formGroup",i.formGroup),e.xp6(3),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("type","text"),e.xp6(1),e.Q6J("ngIf",null==i.errorCreateCustomer?null:i.errorCreateCustomer.name),e.xp6(2),e.Q6J("type","number")("text","contact"),e.xp6(1),e.Q6J("ngIf",null==i.errorCreateCustomer?null:i.errorCreateCustomer.contact),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("patternMessage",e.DdM(38,V))("type","email"),e.xp6(1),e.Q6J("ngIf",null==i.errorCreateCustomer?null:i.errorCreateCustomer.email),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("text","currency")("request",i.getCurrencyRequest)("filter",!0)("filterBy","name")("optionLabel","name")("optionValue","id")("placeholder","select"),e.xp6(1),e.Q6J("ngIf",null==i.errorCreateCustomer?null:i.errorCreateCustomer.currency_id),e.xp6(1),e.Q6J("ngIf","add_supplier"==i.config.header),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("type","text")("disabled",!(null!=i.config.data&&null!=i.config.data.data&&i.config.data.data.can_update_prefix)&&"update_supplier"==i.config.header),e.xp6(1),e.Q6J("ngIf",null==i.errorCreateCustomer?null:i.errorCreateCustomer.prefix),e.xp6(3),e.Tol("btn-cancel"),e.Q6J("text","Cancel"),e.xp6(2),e.Tol("btn-filter"),e.Q6J("text",null==i.config.data?null:i.config.data.acceptLabel)}},dependencies:[x.O5,B.T,Y.J,O.U,l.Fj,l.JJ,l.JL,l.sg,l.u,A.r,h.X$]}),r})();var W=n(1732),H=n(3562);let C=(()=>{class r{constructor(t,i,a){this.http=t,this.dynamicDialog=i,this.toastr=a}getAccounts(t){return this.http.get(s_api_getAccounts)}getCurrencies(t){return this.http.get(s_api_getCurrencies)}getCountries(t){return this.http.get(s_api_getCountries)}getStates(t){return this.http.get(s_api_getStates)}getCities(t){return this.http.get(s_api_getCities)}getCountryById(t){return this.http.get(s_api_getCountryById+t)}getStateById(t){return this.http.get(s_api_getStateById+t)}getCityById(t){return this.http.get(s_api_getCityById+t)}openDialogToCreateSupplier(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_supplier",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},N)}create(t){return this.http.post(s_api_create,t)}delete(t){var i=this;return(0,d.Z)(function*(){const a={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...t},name:"name"},width:"300px",height:"164px"};if(!(yield i.dynamicDialog.confirm(a)))return!1;try{const p=yield i.http.delete(s_api_delete+t.id).toPromise();return i.toastr.success(p.message),p}catch(p){throw i.toastr.error(p.error.message),p}})()}openDialogToUpdateSupplier(t){var i=this;return(0,d.Z)(function*(){const a={showHeader:!1,header:"update_supplier",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...t}},width:"480px",height:"auto"};return yield i.dynamicDialog.showDialogWithComponent(a,N)})()}update(t){return this.http.post(s_api_update+t.id,t)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(W.O),e.LFG(H.U),e.LFG(Z._W))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var X=n(2377),P=n(359),$=n(5077),K=n(3826),k=n(8275);function ee(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"app-button",13),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.openDialogToCreateSupplier())}),e.qZA()}if(2&r){const t=e.oxw();e.Tol("btn-filter "),e.Q6J("text","new")("icon",t.icon.PLUS)("iconPos","left")}}const te=function(r){return[r]};let re=(()=>{class r{constructor(t){this.supplierService=t,this.tableConfig=b(this),this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"code",field:"code"},{label:"contact",field:"contact"},{label:"email",field:"email"},{label:"balance",field:"balance"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:f.q.asc,field:f.q.asc},{label:f.q.desc,field:f.q.desc}]}],this.filtersConfig=[{field:"search",label:"search",type:c.W.TEXT,placeholder:"search_by_name_or_code"},{field:"creator_id",label:"created_by",type:c.W.SELECT,options:{value:"id",label:"name"},request:s_api_getUsers,placeholder:"select"},{field:"from",label:"creation_from",type:c.W.DATE},{field:"to",label:"creation_to",type:c.W.DATE},{field:"transaction_from",label:"last_transaction_date_from",type:c.W.DATE},{field:"transaction_to",label:"last_transaction_date_to",type:c.W.DATE}],this.permissions=u,this.icon=L.dv}openDialogToCreateSupplier(){var t=this;return(0,d.Z)(function*(){(yield t.supplierService.openDialogToCreateSupplier())&&(t.tableConfig=b(t))})()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(C))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-list-suppliers"]],decls:16,vars:12,consts:[[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,ee,1,5,"app-button",3),e.qZA()(),e.TgZ(6,"div",4),e._UZ(7,"ukt-sort",5,6)(9,"ukt-filter",7,8),e.qZA(),e.TgZ(11,"div",9),e._UZ(12,"app-table",10),e.qZA(),e.TgZ(13,"div",11),e._UZ(14,"ukt-pagination",null,12),e.qZA()),2&t){const a=e.MAs(8),g=e.MAs(10),p=e.MAs(15);e.xp6(2),e.Oqu(e.lcZ(3,8,"list_of_suppliers")),e.xp6(3),e.Q6J("hasPermissions",e.VKq(10,te,i.permissions.create)),e.xp6(2),e.Q6J("SortConfig",i.sortConfig),e.xp6(2),e.Q6J("config",i.filtersConfig),e.xp6(3),e.Q6J("tableConfig",i.tableConfig)("pagination",p)("filter",g)("sort",a)}},dependencies:[X.a,P.Q,A.r,$.z,K.x,k.z,h.X$]}),r})(),ie=(()=>{class r{constructor(t){this.supplierService=t}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(C))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-header-suppliers"]],decls:0,vars:0,template:function(t,i){}}),r})();var ne=n(1471),oe=n(9624),ae=n(2115),se=n(4413),le=n(1890),pe=n(1019),ce=n(8096),ue=n(1383);let de=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[x.ez,U,ne.X,oe.U,ae.u,se.e,le.f,pe.i,ce.J,h.aw,ue.m]}),r})();e.B6R(S,[re,ie],[])}}]);