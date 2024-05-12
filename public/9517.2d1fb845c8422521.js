"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[9517],{9517:(J,b,s)=>{s.r(b),s.d(b,{CustomersModule:()=>Te});var a=s(6814),_=s(2954),e=s(9291),f=s(5861);const g_api_create="customer/create",g_api_get="customer",g_api_getUsers="user",g_api_update="customer/update/",g_api_assign="customer/assign/",g_api_delete="customer/",g_api_export="customer/export",g_api_exportExample="customer/export/example",g_api_import="customer/import",g_api_getCurrencies="currency",g_api_getAccounts="account",g_api_getCountries="address/country",g_api_getStates="address/state",g_api_getCities="address/city",g_api_getCountryById="address/country/",g_api_getStateById="address/state/",g_api_getCityById="address/city/";var C=function(i){return i.list="View Customer",i.create="Create Customer",i.update="Edit Customer",i.delete="Delete Customer",i.import="Import Customers",i}(C||{});const v=i=>{return{cols:[{field:"code",label:"code",class:""},{field:"name",label:"name",class:""},{field:"contact",label:"contact",class:"",format:l=>l.contact?l.contact:"-"},{field:"email",label:"email",format:l=>l.email?l.email:"-"},{field:"balance",label:"balance",format:l=>l.balance?l.balance:"0"},{field:"amount",label:"amount",format:l=>l.amount?l.amount:"0"},{field:"credit_limit",label:"credit_limit",format:l=>l.credit_limit?l.credit_limit:"0"},{label:"action",actions:[{id:C.update,icon:"fa-solid fa-person-harassing",class:"main-color",fun:(l=(0,f.Z)(function*(t){return yield i.customersService.openDialogToAssignUser(t)}),function(o){return l.apply(this,arguments)})},{id:C.delete,icon:"trash",class:"main-color",fun:function(){var l=(0,f.Z)(function*(t){return yield i.customersService.delete(t,"delete account")});return function(o){return l.apply(this,arguments)}}()},{id:C.update,icon:"pen-to-square",class:"main-color",fun:function(){var l=(0,f.Z)(function*(t){return yield i.customersService.openDialogToUpdateCustomer(t)});return function(o){return l.apply(this,arguments)}}()}]}],Request:g_api_get};var l};var Z=s(5219),x=s(6924),d=s(5946),n=s(6223),c=s(8645),p=s(9773),y=s(5566),A=s(9265),U=s(8763),D=s(5118),Q=s(2305),G=s(8614),B=s(1904),I=s(3838),k=s(5304),S=s(4896),O=s(1771),L=s(4779),M=s(3999);function P(i,l){if(1&i&&(e.TgZ(0,"p",34),e._uU(1),e.qZA()),2&i){const t=l.$implicit;e.xp6(1),e.hij(" ",t.value," ")}}function Y(i,l){if(1&i&&(e.TgZ(0,"div",35),e._UZ(1,"app-dropdown",36),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("text","parent")("data",t.accounts)("filter",!0)("optionLabel","name_code")("optionValue","id")("placeholder","select")}}function z(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",35)(1,"app-file-upload",37),e.NdJ("onValueChange",function(r){e.CHM(t);const m=e.oxw();return e.KtG(m.onFileSelected(r))}),e.qZA()()}2&i&&(e.xp6(1),e.Q6J("multiple",!0)("label","attach_file"))}const N=function(){return{type:"name",length:3}},R=function(){return{type:"phone",length:3}},F=function(){return{type:"description",length:3}},q=function(){return{type:"code",length:3}};function W(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",10)(1,"p",20),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",12),e._UZ(5,"app-text",38),e.qZA(),e.TgZ(6,"div",12),e._UZ(7,"app-text",39),e.qZA(),e.TgZ(8,"div",23),e._UZ(9,"app-text",40),e.qZA(),e.TgZ(10,"div",12)(11,"app-dropdown",41),e.NdJ("ngModelChange",function(r){e.CHM(t);const m=e.oxw();return e.KtG(m.getBillingStates(r))}),e.qZA()(),e.TgZ(12,"div",12)(13,"app-dropdown",42),e.NdJ("ngModelChange",function(r){e.CHM(t);const m=e.oxw();return e.KtG(m.getBillingCities(r))}),e.qZA()(),e.TgZ(14,"div",12),e._UZ(15,"app-dropdown",43),e.qZA(),e.TgZ(16,"div",12),e._UZ(17,"app-text",44),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,37,"billing_address")),e.xp6(3),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("patternMessage",e.DdM(39,N))("type","text"),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("patternMessage",e.DdM(40,R)),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("patternMessage",e.DdM(41,F))("type","text"),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("text","country")("data",t.billingCountries)("optionLabel","name")("optionValue","id")("placeholder","country"),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("text","state")("data",t.billingStates)("optionLabel","name")("optionValue","id")("placeholder","state"),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("text","city")("data",t.billingCities)("optionLabel","name")("optionValue","id")("placeholder","city"),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("patternMessage",e.DdM(42,q))("type","text")}}const V=function(){return{type:"phone",length:11}},K=function(){return{type:"email",length:5}};let E=(()=>{class i{constructor(t,o,r,m,h,Ae){this.accountsService=t,this.fb=o,this.toastr=r,this.config=m,this.dialogRef=h,this.customersService=Ae,this.unsubscribe=new c.x,this.formGroup=this.initForm(),this.currencies=[],this.accounts=[],this.shippingCountries=[],this.shippingStates=[],this.shippingCities=[],this.getCurrencyRequest=y.w.api.get,this.formData=new FormData,this.billingCountries=[],this.billingStates=[],this.billingCities=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){this.accountsService.getAccountsParents().pipe((0,p.R)(this.unsubscribe)).subscribe({next:t=>{this.accounts=t.data}}),this.customersService.getCurrencies().pipe((0,p.R)(this.unsubscribe)).subscribe({next:t=>{this.currencies=t.data}}),this.customersService.getCountries().pipe((0,p.R)(this.unsubscribe)).subscribe({next:t=>{this.shippingCountries=t.data,this.billingCountries=t.data,this.config.data?.data&&(this.shippingStates=this.shippingCountries.filter(o=>o.id==this.config.data.data.address?.country_id)[0]?.states,this.billingStates=this.billingCountries.filter(o=>o.id==this.config.data.data.billing_address?.country_id)[0].states)}}),this.config.data?.data&&(this.getShippingCities(this.config.data.data.address?.state_id),this.getBillingCities(this.config.data.data.billing_address?.country_id))}initForm(){return this.fb.group({id:[Number],name:["",[n.kI.required]],contact:["",[n.kI.required]],email:["",[n.kI.required,n.kI.pattern("^[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}$")]],currencies:["",[n.kI.required]],parent_account_id:["",[n.kI.required]],opening_balance:[0,[n.kI.required]],credit_limit:[0],is_same_shipping_address:[0],address_phone:[""],address_name:[""],address:["",[n.kI.required]],country_id:["",[n.kI.required]],state_id:["",[n.kI.required]],city_id:["",[n.kI.required]],zip_code:["",[n.kI.required]],billing_address_name:[""],billing_address_phone:[""],billing_address:["",[n.kI.required]],billing_country_id:["",[n.kI.required]],billing_state_id:["",[n.kI.required]],billing_city_id:["",[n.kI.required]],billing_zip_code:["",[n.kI.required]]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?(this.convertFormGroupToFormData(),this.customersService.update(this.formData).subscribe({next:t=>{this.toastr.success(t.message),this.reject(!0)},error:t=>{this.errors=t.error.errors}})):(this.convertFormGroupToFormData(),this.customersService.create(this.formData).subscribe({next:t=>{this.toastr.success(t.message),this.reject(!0)},error:t=>{this.errors=t.error.errors}}))}reject(t){this.dialogRef.close(t)}getShippingState(t){this.formGroup.patchValue({state_id:[""],city_id:[""]}),this.shippingStates=this.shippingCountries.filter(o=>o.id==t)[0]?.states}getBillingStates(t){this.formGroup.patchValue({billing_state_id:[""],billing_city_id:[""]}),this.billingStates=this.billingCountries.filter(o=>o.id==t)[0].states}getShippingCities(t){t>0&&this.customersService.getStateById(t).pipe((0,p.R)(this.unsubscribe)).subscribe({next:o=>{this.shippingCities=o?.data?.cities}})}getBillingCities(t){t>0&&this.customersService.getStateById(t).pipe((0,p.R)(this.unsubscribe)).subscribe({next:o=>{this.billingCities=o?.data?.cities}})}sameAddress(t){t.checked?(this.formGroup.patchValue({is_same_shipping_address:1}),this.formGroup.get("billing_address")?.clearValidators(),this.formGroup.get("billing_country_id")?.clearValidators(),this.formGroup.get("billing_state_id")?.clearValidators(),this.formGroup.get("billing_city_id")?.clearValidators(),this.formGroup.get("billing_zip_code")?.clearValidators()):(this.formGroup.patchValue({is_same_shipping_address:0}),this.formGroup.get("billing_address")?.setValidators(n.kI.required),this.formGroup.get("billing_country_id")?.setValidators(n.kI.required),this.formGroup.get("billing_state_id")?.setValidators(n.kI.required),this.formGroup.get("billing_city_id")?.setValidators(n.kI.required),this.formGroup.get("billing_zip_code")?.setValidators(n.kI.required)),this.formGroup.get("billing_address")?.updateValueAndValidity(),this.formGroup.get("billing_country_id")?.updateValueAndValidity(),this.formGroup.get("billing_state_id")?.updateValueAndValidity(),this.formGroup.get("billing_city_id")?.updateValueAndValidity(),this.formGroup.get("billing_zip_code")?.updateValueAndValidity()}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,name:this.config.data.data.name,contact:this.config.data.data.contact,email:this.config.data.data.email,currencies:this.config.data.data.currencies.map(t=>t.id),parent_account_id:this.config.data.data.parent_account_id,opening_balance:this.config.data.data.opening_balance,credit_limit:this.config.data.data.credit_limit,is_same_shipping_address:0,address_phone:this.config.data.data.address?.phone,address_name:this.config.data.data.address?.name,address:this.config.data.data.address?.address,country_id:this.config.data.data.address?.country_id,state_id:this.config.data.data.address?.state_id,city_id:this.config.data.data.address?.city_id,zip_code:this.config.data.data.address?.zip_code,billing_address_name:this.config.data.data.billing_address?.name,billing_address_phone:this.config.data.data.billing_address?.phone,billing_address:this.config.data.data.billing_address?.address,billing_country_id:this.config.data.data.billing_address?.country_id,billing_state_id:this.config.data.data.billing_address?.state_id,billing_city_id:this.config.data.data.billing_address?.city_id,billing_zip_code:this.config.data.data.billing_address?.zip_code})}onFileSelected(t){if(t.target.files[0])for(const[o,r]of Object.entries(t.target.files))this.formData.set(`files[${o}]`,t.target.files[o])}convertFormGroupToFormData(){const t=this.formGroup.value;Object.keys(t).forEach(o=>{this.formData.set(o,t[o])})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(A.i),e.Y36(n.qu),e.Y36(U._W),e.Y36(D.S),e.Y36(D.E7),e.Y36(w))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-new-customer"]],decls:55,vars:94,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"sup-title"],[1,"col-md-6"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","placeholder","","formControlName","contact",1,"d-block",3,"patternMessage","type","text"],["text","email","formControlName","email","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","currencies",3,"text","request","filter","filterBy","optionLabel","optionValue","placeholder"],["class","col-md-12",4,"ngIf"],["ngDefaultControl","","placeholder","","formControlName","opening_balance",1,"d-block",3,"showButtons","mode","text"],["ngDefaultControl","","placeholder","","formControlName","credit_limit",1,"d-block",3,"showButtons","mode","text"],[1,"sup-title","mt-3"],["text","name","formControlName","address_name","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","phone","formControlName","address_phone","ngDefaultControl","","placeholder","",3,"patternMessage"],[1,"col-12"],["text","address","formControlName","address","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","country_id",3,"text","data","optionLabel","optionValue","placeholder","ngModelChange"],["ngDefaultControl","","formControlName","state_id",3,"text","data","optionLabel","optionValue","placeholder","ngModelChange"],["ngDefaultControl","","formControlName","city_id",3,"text","data","optionLabel","optionValue","placeholder"],["text","zip_code","formControlName","zip_code","ngDefaultControl","","placeholder","",3,"patternMessage","type"],[3,"text","change"],["class","row",4,"ngIf"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"],[1,"col-md-12"],["ngDefaultControl","","formControlName","parent_account_id","filterBy","name_code",3,"text","data","filter","optionLabel","optionValue","placeholder"],[3,"multiple","label","onValueChange"],["text","name","formControlName","billing_address_name","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","phone","formControlName","billing_address_phone","ngDefaultControl","","placeholder","",3,"patternMessage"],["text","address","formControlName","billing_address","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","billing_country_id",3,"text","data","optionLabel","optionValue","placeholder","ngModelChange"],["ngDefaultControl","","formControlName","billing_state_id",3,"text","data","optionLabel","optionValue","placeholder","ngModelChange"],["ngDefaultControl","","formControlName","billing_city_id",3,"text","data","optionLabel","optionValue","placeholder"],["text","zip_code","formControlName","billing_zip_code","ngDefaultControl","","placeholder","",3,"patternMessage","type"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"span",5),e.NdJ("click",function(){return o.reject(!1)}),e._UZ(6,"i",6),e.qZA()(),e.TgZ(7,"p",7),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"app-form",8),e.NdJ("onSubmit",function(){return o.accept()}),e.YNc(11,P,2,1,"p",9),e.ALo(12,"keyvalue"),e.TgZ(13,"div",10)(14,"p",11),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"div",12),e._UZ(18,"app-text",13),e.qZA(),e.TgZ(19,"div",12),e._UZ(20,"app-text",14),e.qZA(),e.TgZ(21,"div",12),e._UZ(22,"app-text",15),e.qZA(),e.TgZ(23,"div",12),e._UZ(24,"app-multiselect",16),e.qZA(),e.YNc(25,Y,2,8,"div",17),e.TgZ(26,"div",12),e._UZ(27,"app-number-input",18),e.qZA(),e.TgZ(28,"div",12),e._UZ(29,"app-number-input",19),e.qZA(),e.YNc(30,z,2,2,"div",17),e.TgZ(31,"p",20),e._uU(32),e.ALo(33,"translate"),e.qZA(),e.TgZ(34,"div",12),e._UZ(35,"app-text",21),e.qZA(),e.TgZ(36,"div",12),e._UZ(37,"app-text",22),e.qZA(),e.TgZ(38,"div",23),e._UZ(39,"app-text",24),e.qZA(),e.TgZ(40,"div",12)(41,"app-dropdown",25),e.NdJ("ngModelChange",function(m){return o.getShippingState(m)}),e.qZA()(),e.TgZ(42,"div",12)(43,"app-dropdown",26),e.NdJ("ngModelChange",function(m){return o.getShippingCities(m)}),e.qZA()(),e.TgZ(44,"div",12),e._UZ(45,"app-dropdown",27),e.qZA(),e.TgZ(46,"div",12),e._UZ(47,"app-text",28),e.qZA(),e.TgZ(48,"app-checkbox",29),e.NdJ("change",function(m){return o.sameAddress(m)}),e.qZA(),e.YNc(49,W,18,43,"div",30),e.qZA(),e.TgZ(50,"div",31)(51,"div",32)(52,"app-button",33),e.NdJ("click",function(){return o.reject(!1)}),e.qZA()(),e.TgZ(53,"div",32)(54,"app-button",33),e.NdJ("click",function(){return o.accept()}),e.qZA()()()()()),2&t){let r,m;e.xp6(8),e.Oqu(e.lcZ(9,79,null!==(r=o.config.header)&&void 0!==r?r:"")),e.xp6(2),e.Q6J("formGroup",o.formGroup),e.xp6(1),e.Q6J("ngForOf",e.lcZ(12,81,o.errors)),e.xp6(4),e.Oqu(e.lcZ(16,83,"basic_info")),e.xp6(3),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("patternMessage",e.DdM(87,N))("type","text"),e.xp6(2),e.Q6J("patternMessage",e.DdM(88,V))("type","tel")("text","contact"),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("patternMessage",e.DdM(89,K))("type","email"),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("text","currency")("request",o.getCurrencyRequest)("filter",!0)("filterBy","name")("optionLabel","name")("optionValue","id")("placeholder","currency"),e.xp6(1),e.Q6J("ngIf","add_customer"==o.config.header),e.xp6(2),e.Q6J("showButtons",!1)("mode","currency")("text","opening_balance"),e.xp6(2),e.Q6J("showButtons",!1)("mode","currency")("text","credit_limit"),e.xp6(1),e.Q6J("ngIf","add_customer"==o.config.header),e.xp6(2),e.Oqu(e.lcZ(33,85,"shipping_address")),e.xp6(3),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("patternMessage",e.DdM(90,N))("type","text"),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("patternMessage",e.DdM(91,V)),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("patternMessage",e.DdM(92,F))("type","text"),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("text","country")("data",o.shippingCountries)("optionLabel","name")("optionValue","id")("placeholder","country"),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("text","state")("data",o.shippingStates)("optionLabel","name")("optionValue","id")("placeholder","select"),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("text","city")("data",o.shippingCities)("optionLabel","name")("optionValue","id")("placeholder","select"),e.xp6(2),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("patternMessage",e.DdM(93,q))("type","text"),e.xp6(1),e.Tol("d-flex align-items-center mt-2  flex-row-reverse justify-content-end gap-2"),e.Q6J("text","billing_same_as_shipping"),e.xp6(1),e.Q6J("ngIf",0==(null==(m=o.formGroup.get("is_same_shipping_address"))?null:m.value)),e.xp6(3),e.Tol("btn-cancel"),e.Q6J("text","Cancel"),e.xp6(2),e.Tol("btn-filter"),e.Q6J("text",null==o.config.data?null:o.config.data.acceptLabel)}},dependencies:[a.sg,a.O5,Q.b,G.T,B.D,I.J,k.z,S.Y,O.U,n.Fj,n.JJ,n.JL,n.sg,n.u,L.r,a.Nd,M.X$]}),i})();var H=s(8718);function X(i,l){if(1&i&&(e.TgZ(0,"p",16),e._uU(1),e.qZA()),2&i){const t=l.$implicit;e.xp6(1),e.hij(" ",t.value," ")}}let $=(()=>{class i{constructor(t,o,r,m,h){this.fb=t,this.toastr=o,this.config=r,this.dialogRef=m,this.customersService=h,this.userConfig=H.x,this.unsubscribe=new c.x,this.formGroup=this.initForm(),this.config.data?.data&&this.fillDataToUpdate()}initForm(){return this.fb.group({id:[Number],user_id:[""]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.customersService.assign(this.formGroup.value).subscribe({next:t=>{this.toastr.success(t.message),this.reject(!0)},error:t=>{this.errors=t.error.errors}})}reject(t){this.dialogRef.close(t)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,user_id:this.config.data.data.user_id})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(n.qu),e.Y36(U._W),e.Y36(D.S),e.Y36(D.E7),e.Y36(w))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-assign-user"]],decls:22,vars:22,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-md-12"],["ngDefaultControl","","formControlName","user_id",3,"request","text","optionLabel","optionValue","placeholder"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"span",5),e.NdJ("click",function(){return o.reject(!1)}),e._UZ(6,"i",6),e.qZA()(),e.TgZ(7,"p",7),e._uU(8),e.ALo(9,"titlecase"),e.ALo(10,"translate"),e.qZA()(),e.TgZ(11,"app-form",8),e.NdJ("onSubmit",function(){return o.accept()}),e.YNc(12,X,2,1,"p",9),e.ALo(13,"keyvalue"),e.TgZ(14,"div",10)(15,"div",11),e._UZ(16,"app-dropdown",12),e.qZA()(),e.TgZ(17,"div",13)(18,"div",14)(19,"app-button",15),e.NdJ("click",function(){return o.reject(!1)}),e.qZA()(),e.TgZ(20,"div",14)(21,"app-button",15),e.NdJ("click",function(){return o.accept()}),e.qZA()()()()()),2&t){let r;e.xp6(8),e.Oqu(e.lcZ(9,16,e.lcZ(10,18,null!==(r=o.config.header)&&void 0!==r?r:""))),e.xp6(3),e.Q6J("formGroup",o.formGroup),e.xp6(1),e.Q6J("ngForOf",e.lcZ(13,20,o.errors)),e.xp6(4),e.Tol("d-flex flex-column justify-content-between"),e.Q6J("request",o.userConfig.api.get)("text","user")("optionLabel","name")("optionValue","id")("placeholder","select"),e.xp6(3),e.Tol("btn-cancel"),e.Q6J("text","Cancel"),e.xp6(2),e.Tol("btn-filter"),e.Q6J("text",null==o.config.data?null:o.config.data.acceptLabel)}},dependencies:[a.sg,I.J,O.U,n.Fj,n.JJ,n.JL,n.sg,n.u,L.r,a.rS,a.Nd,M.X$]}),i})();var ee=s(1732),te=s(3562);let w=(()=>{class i{constructor(t,o,r){this.http=t,this.dynamicDialog=o,this.toastr=r}getAccounts(t){return this.http.get(g_api_getAccounts)}getCurrencies(t){return this.http.get(g_api_getCurrencies)}getCountries(t){return this.http.get(g_api_getCountries)}getStates(t){return this.http.get(g_api_getStates)}getCities(t){return this.http.get(g_api_getCities)}getCountryById(t){return this.http.get(g_api_getCountryById+t)}getStateById(t){return this.http.get(g_api_getStateById+t)}getCityById(t){return this.http.get(g_api_getCityById+t)}openDialogToCreateCustomer(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_customer",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},E)}create(t){return this.http.post(g_api_create,t)}delete(t){var o=this;return(0,f.Z)(function*(){const r={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...t}},width:"300px",height:"164px"};if(!(yield o.dynamicDialog.confirm(r)))return!1;try{const h=yield o.http.delete(g_api_delete+t.id).toPromise();return o.toastr.success(h.message),h}catch(h){throw o.toastr.error(h.error.message),h}})()}openDialogToAssignUser(t){const o={showHeader:!1,header:"assign_user",data:{acceptLabel:"assign",rejectLabel:"Cancel",data:{...t}},width:"500px",height:"auto"};return this.dynamicDialog.showDialogWithComponent(o,$)}openDialogToUpdateCustomer(t){var o=this;return(0,f.Z)(function*(){const r={showHeader:!1,header:"update_customer",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...t}},width:"480px",height:"auto"};return yield o.dynamicDialog.showDialogWithComponent(r,E)})()}update(t){return this.http.post(g_api_update+t.id,t)}assign(t){return this.http.post(g_api_assign+t.id,t)}import(t){return this.http.post(g_api_import,t)}export(){return this.http.get(g_api_export)}exportExample(){return this.http.get(g_api_exportExample)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(ee.O),e.LFG(te.U),e.LFG(U._W))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var oe=s(2377),ie=s(359),ne=s(5077),ae=s(3826),se=s(8275);function re(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",16)(1,"button",17),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"ul",18)(5,"li",19),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.exportExample())}),e._uU(6),e.ALo(7,"titlecase"),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"li",19),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.export())}),e._uU(10),e.ALo(11,"titlecase"),e.ALo(12,"translate"),e.qZA()()()}2&i&&(e.xp6(2),e.hij(" ",e.lcZ(3,3,"export")," "),e.xp6(4),e.Oqu(e.lcZ(7,5,e.lcZ(8,7,"example"))),e.xp6(4),e.Oqu(e.lcZ(11,9,e.lcZ(12,11,"data"))))}function le(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"app-button",20),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.openDialogToCreateCustomer())}),e.qZA()}if(2&i){const t=e.oxw();e.Tol("btn-filter"),e.Q6J("text","new")("icon",t.icon.PLUS)("iconPos","left")}}function ce(i,l){if(1&i&&(e.TgZ(0,"div")(1,"span",28),e._uU(2),e.qZA(),e.TgZ(3,"span",28),e._uU(4),e.qZA()()),2&i){const t=l.$implicit;e.xp6(2),e.hij(" row :",t.row_number," "),e.xp6(2),e.Oqu(t.error)}}function pe(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",21),e.YNc(1,ce,5,2,"div",22),e.TgZ(2,"app-file-upload",23),e.NdJ("onValueChange",function(r){e.CHM(t);const m=e.oxw();return e.KtG(m.onFileSelected(r))}),e.qZA(),e.TgZ(3,"div",24)(4,"app-button",25),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.import())}),e._UZ(5,"i",26),e.qZA(),e.TgZ(6,"app-button",27),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.closeSectionToImport())}),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.importErrors),e.xp6(1),e.Q6J("multiple",!1)("accept",".csv,.xls,.xlsx")("label","import"),e.xp6(2),e.Q6J("text","save")("loading",t.isLoading),e.xp6(2),e.Q6J("text","cancel")}}const j=function(i){return[i]};let de=(()=>{class i{constructor(t,o,r){this.customersService=t,this.toastr=o,this.translateService=r,this.showImportForm=!1,this.importErrors=[],this.fileName="",this.values=new FormData,this.isLoading=!1,this.permissions=C,this.icon=Z.dv,this.tableConfig=v(this),this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"code",field:"code"},{label:"contact",field:"contact"},{label:"email",field:"email"},{label:"balance",field:"balance"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:d.q.asc,field:d.q.asc},{label:d.q.desc,field:d.q.desc}]}],this.filtersConfig=[{field:"search",label:"search",type:x.W.TEXT,placeholder:"search_by_name_or_code"},{field:"creator_id",label:"created_by",type:x.W.SELECT,options:{value:"id",label:"name"},request:g_api_getUsers,placeholder:"select"},{field:"from",label:"creation_from",type:x.W.DATE},{field:"to",label:"creation_to",type:x.W.DATE},{field:"transaction_from",label:"last_transaction_date_from",type:x.W.DATE},{field:"transaction_to",label:"last_transaction_date_to",type:x.W.DATE}]}openDialogToCreateCustomer(){var t=this;return(0,f.Z)(function*(){(yield t.customersService.openDialogToCreateCustomer())&&(t.tableConfig=v(t))})()}openSectionToImport(){this.showImportForm=!0}closeSectionToImport(){this.fileName="",this.showImportForm=!1,this.importErrors=[]}export(t){this.customersService.export().subscribe(o=>{window.open(o.file_path)})}exportExample(){this.customersService.exportExample().subscribe(t=>{window.open(t.file_path)})}onFileSelected(t){t.target.files[0]&&(this.fileName=t.target.files[0].name,this.values.set("file",t.target.files[0]))}import(){this.fileName?(this.isLoading=!0,this.customersService.import(this.values).subscribe(t=>{this.toastr.success(t.message),this.isLoading=!1,this.fileName="",this.closeSectionToImport(),this.tableConfig=v(this)},t=>{this.isLoading=!1,this.importErrors=t.error.errors,t.error.message&&this.toastr.error(t.error.message)})):this.toastr.error(this.translateService.instant("select_file"))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(w),e.Y36(U._W),e.Y36(M.sK))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-list-customers"]],decls:19,vars:19,consts:[[1,"d-flex","align-items-center","justify-content-between","mb-2"],[1,"title"],[1,"d-flex","gap-2","align-items-center"],["class","dropdown",4,"hasPermissions"],[3,"text","click"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],["class","import",4,"ngIf"],[1,"d-flex","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[1,"dropdown"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-cancel","dropdown-toggle"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],[1,"pointer","dropdown-item",3,"click"],[3,"text","icon","iconPos","click"],[1,"import"],[4,"ngFor","ngForOf"],[3,"multiple","accept","label","onValueChange"],[1,"d-flex","gap-2","align-items-center","mt-3"],[3,"text","loading","click"],[1,"fa-solid","fa-check","px-2"],[1,"btn-cancel",3,"text","click"],[1,"text-error"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,re,13,13,"div",3),e.TgZ(6,"app-button",4),e.NdJ("click",function(){return o.openSectionToImport()}),e.qZA(),e.YNc(7,le,1,5,"app-button",5),e.qZA()(),e.YNc(8,pe,7,7,"div",6),e.TgZ(9,"div",7),e._UZ(10,"ukt-sort",8,9)(12,"ukt-filter",10,11),e.qZA(),e.TgZ(14,"div",12),e._UZ(15,"app-table",13),e.qZA(),e.TgZ(16,"div",14),e._UZ(17,"ukt-pagination",null,15),e.qZA()),2&t){const r=e.MAs(11),m=e.MAs(13),h=e.MAs(18);e.xp6(2),e.Oqu(e.lcZ(3,13,"list_of_customers")),e.xp6(3),e.Q6J("hasPermissions",e.VKq(15,j,o.permissions.list)),e.xp6(1),e.Tol("btn-cancel"),e.Q6J("text","import"),e.xp6(1),e.Q6J("hasPermissions",e.VKq(17,j,o.permissions.create)),e.xp6(1),e.Q6J("ngIf",o.showImportForm),e.xp6(2),e.Q6J("SortConfig",o.sortConfig),e.xp6(2),e.Q6J("config",o.filtersConfig),e.xp6(3),e.Q6J("tableConfig",o.tableConfig)("pagination",h)("filter",m)("sort",r)}},dependencies:[a.sg,a.O5,oe.a,S.Y,ie.Q,L.r,ne.z,ae.x,se.z,a.rS,M.X$],styles:[".dropdown[_ngcontent-%COMP%]{background-color:transparent!important}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent!important;border:1px solid var(--mainColor);font-size:1.5rem;padding:6px}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.5rem}.import[_ngcontent-%COMP%]{padding:20px;border:2px solid var(--mainColor);border-radius:8px;margin:10px 0}"]}),i})();const ge=[{path:"",component:(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-customers"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-list-customers"),e.qZA())},dependencies:[de]}),i})(),canActivate:[s(2127).t],data:{permission:C.list}}];let fe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[_.Bz.forChild(ge),_.Bz]}),i})();var he=s(1471),_e=s(9624),Ce=s(2115),xe=s(4413),be=s(1890),ve=s(1019),ye=s(8096),Ze=s(1383);let Te=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.ez,fe,he.X,_e.U,Ce.u,xe.e,be.f,ve.i,ye.J,M.aw,Ze.m]}),i})()},4896:(J,b,s)=>{s.d(b,{Y:()=>T});var a=s(9291),_=s(67),e=s(6223),f=s(6814),g=s(3999);function C(d,u){1&d&&a._UZ(0,"i",7)}function v(d,u){if(1&d&&(a.TgZ(0,"label",4),a._uU(1),a.ALo(2,"titlecase"),a.ALo(3,"translate"),a.TgZ(4,"span",5),a.YNc(5,C,1,0,"i",6),a.qZA()()),2&d){const n=a.oxw();a.xp6(1),a.hij("",a.lcZ(2,2,a.lcZ(3,4,n.label))," "),a.xp6(4),a.Q6J("ngIf",n.control&&(null==n.control.errors?null:n.control.errors.required))}}function Z(d,u){if(1&d&&(a.TgZ(0,"p"),a._uU(1),a.ALo(2,"translate"),a.qZA()),2&d){const n=a.oxw();a.xp6(1),a.Oqu(a.lcZ(2,1,n.selectedFileCount+"files"))}}function x(d,u){if(1&d&&(a.TgZ(0,"p"),a._uU(1),a.ALo(2,"translate"),a.qZA()),2&d){const n=a.oxw();a.xp6(1),a.Oqu(n.selectedFileName?n.selectedFileName:a.lcZ(2,1,n.placeholder))}}let T=(()=>{class d extends _.t{set clear(n){n&&(this.selectedFileCount=0,this.selectedFileName="",this.value=null)}constructor(n){super(),this.formGroupDirective=n,this.uploadedFiles=[],this.multiple=!0,this.label="Upload",this.placeholder="drag_and_drop_you_file_or_Click_here_to_upload",this.accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx",this.onValueChange=new a.vpe,this.selectedFileName="",this.selectedFileCount=0}onFileSelected(n){this.onValueChange.emit(n),this.selectedFileName=n.target.files[0].name,n.target.files&&n.target.files.length>0&&(this.selectedFileCount=n.target.files.length)}onUpload(n){for(let c of n.files)this.uploadedFiles.push(c)}}return d.\u0275fac=function(n){return new(n||d)(a.Y36(e.sg,8))},d.\u0275cmp=a.Xpm({type:d,selectors:[["app-file-upload"]],inputs:{value:"value",multiple:"multiple",label:"label",placeholder:"placeholder",accept:"accept",clear:"clear"},outputs:{onValueChange:"onValueChange"},features:[a._Bn([{provide:e.JU,useExisting:d,multi:!0},{provide:e.Cf,useExisting:d,multi:!0}]),a.qOj],decls:5,vars:6,consts:[[1,"file-input"],["for","file",4,"ngIf"],[4,"ngIf"],["id","file","type","file","id","file",1,"form-control",3,"multiple","ngModel","accept","ngModelChange","change"],["for","file"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(n,c){1&n&&(a.TgZ(0,"div",0),a.YNc(1,v,6,6,"label",1),a.YNc(2,Z,3,3,"p",2),a.YNc(3,x,3,3,"p",2),a.TgZ(4,"input",3),a.NdJ("ngModelChange",function(y){return c.value=y})("change",function(y){return c.onFileSelected(y)}),a.qZA()()),2&n&&(a.xp6(1),a.Q6J("ngIf",c.label),a.xp6(1),a.Q6J("ngIf",c.selectedFileCount>1),a.xp6(1),a.Q6J("ngIf",c.selectedFileCount<=1),a.xp6(1),a.Q6J("multiple",c.multiple)("ngModel",c.value)("accept",c.accept))},dependencies:[f.O5,e.Fj,e.JJ,e.On,f.rS,g.X$],styles:[".file-input[_ngcontent-%COMP%]{position:relative}.file-input[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{position:absolute;left:0;top:0;opacity:0;width:100%;height:100%;min-width:200px!important}.file-input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;padding:8px;border:1px dashed #7ca0c5;border-radius:8px;font-size:14px;cursor:pointer;min-width:200px!important;text-align:center;overflow:hidden}"]}),d})()},5304:(J,b,s)=>{s.d(b,{z:()=>d});var a=s(67),_=s(6223),e=s(9291),f=s(1732),g=s(6814),C=s(4055),v=s(3999);function Z(u,n){1&u&&e._UZ(0,"i",6)}function x(u,n){if(1&u&&(e.TgZ(0,"label"),e._uU(1),e.ALo(2,"translate"),e.TgZ(3,"span",4),e.YNc(4,Z,1,0,"i",5),e.qZA()()),2&u){const c=e.oxw();e.xp6(1),e.hij("",e.lcZ(2,2,c.text)," "),e.xp6(3),e.Q6J("ngIf",c.control&&(null==c.control.errors?null:c.control.errors.required))}}function T(u,n){if(1&u&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&u){const c=e.oxw();e.Tol("text-danger"),e.xp6(1),e.Oqu(e.lcZ(2,3,c.object.keys(c.control.errors)[0]))}}let d=(()=>{class u extends a.t{constructor(c,p){super(),this.formGroupDirective=c,this.http=p,this.readOnly=!1,this.placeholder="",this.filterBy="",this.class="d-flex justify-content-between align-items-center",this.filter=!0,this.filterMatchMode="startsWith",this.object=Object}ngOnInit(){this.data||this.http.get(this.request).subscribe({next:c=>{if(!(c.meta&&c.meta.total>10))return this.data=c.data;this.http.getWithParam(this.request,{limit:c.meta.total}).subscribe({next:p=>this.data=p.data})},error:c=>{},complete:()=>{}})}writeValue(c){this.value=c}onValueChange(c){this.onChange(c.value),this.onTouched()}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(_.sg,8),e.Y36(f.O))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-multiselect"]],inputs:{value:"value",text:"text",data:"data",optionLabel:"optionLabel",optionValue:"optionValue",editable:"editable",readOnly:"readOnly",placeholder:"placeholder",filterBy:"filterBy",request:"request",class:"class",filter:"filter",filterMatchMode:"filterMatchMode"},features:[e._Bn([{provide:_.JU,useExisting:u,multi:!0},{provide:_.Cf,useExisting:u,multi:!0}]),e.qOj],decls:5,vars:15,consts:[[3,"ngClass"],[4,"ngIf"],["appendTo","body",3,"options","ngModel","placeholder","optionLabel","optionValue","filterMatchMode","display","filter","filterBy","disabled","ngModelChange","onChange"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(c,p){1&c&&(e.TgZ(0,"div",0),e.YNc(1,x,5,4,"label",1),e.TgZ(2,"p-multiSelect",2),e.NdJ("ngModelChange",function(A){return p.value=A})("onChange",function(A){return p.onValueChange(A)}),e.ALo(3,"translate"),e.qZA(),e.YNc(4,T,3,5,"span",3),e.qZA()),2&c&&(e.Q6J("ngClass",p.class),e.xp6(1),e.Q6J("ngIf",p.text),e.xp6(1),e.Q6J("options",p.data)("ngModel",p.value)("placeholder",e.lcZ(3,13,p.placeholder))("optionLabel",p.optionLabel)("optionValue",p.optionValue)("filterMatchMode",p.filterMatchMode)("display","chip")("filter",p.filter)("filterBy",p.optionLabel)("disabled",p.readOnly),e.xp6(2),e.Q6J("ngIf",p.control&&p.control.errors&&(p.control.touched||p.formGroupDirective.submitted)))},dependencies:[g.mk,g.O5,_.JJ,_.On,C.NU,v.X$]}),u})()},8718:(J,b,s)=>{s.d(b,{x:()=>a});const a={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}}}]);