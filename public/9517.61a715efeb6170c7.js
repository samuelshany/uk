"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[9517],{9517:(D,x,r)=>{r.r(x),r.d(x,{CustomersModule:()=>Tt});var a=r(6814),Z=r(8209),t=r(9291),g=r(5861);const d_api_create="customer/create",d_api_get="customer",d_api_getUsers="user",d_api_update="customer/update/",d_api_assign="customer/assign/",d_api_delete="customer/",d_api_export="customer/export",d_api_exportExample="customer/export/example",d_api_import="customer/import",d_api_getCurrencies="currency",d_api_getAccounts="account",d_api_getCountries="address/country",d_api_getStates="address/state",d_api_getCities="address/city",d_api_getCountryById="address/country/",d_api_getStateById="address/state/",d_api_getCityById="address/city/";var f=function(i){return i.list="View Customer",i.create="Create Customer",i.update="Edit Customer",i.delete="Delete Customer",i.import="Import Customers",i}(f||{});const b=i=>{return{cols:[{field:"code",label:"code",class:""},{field:"name",label:"name",class:""},{field:"contact",label:"contact",class:"",format:l=>l.contact?l.contact:"-"},{field:"email",label:"email",format:l=>l.email?l.email:"-"},{field:"balance",label:"balance",format:l=>l.balance?l.balance:"0"},{field:"amount",label:"amount",format:l=>l.amount?l.amount:"0"},{field:"credit_limit",label:"credit_limit",format:l=>l.credit_limit?l.credit_limit:"0"},{label:"action",actions:[{id:f.update,icon:"fa-solid fa-person-harassing",class:"main-color",fun:(l=(0,g.Z)(function*(e){return yield i.customersService.openDialogToAssignUser(e)}),function(o){return l.apply(this,arguments)})},{id:f.delete,icon:"trash",class:"main-color",fun:function(){var l=(0,g.Z)(function*(e){return yield i.customersService.delete(e,"delete account")});return function(o){return l.apply(this,arguments)}}()},{id:f.update,icon:"pen-to-square",class:"main-color",fun:function(){var l=(0,g.Z)(function*(e){return yield i.customersService.openDialogToUpdateCustomer(e)});return function(o){return l.apply(this,arguments)}}()}]}],Request:d_api_get};var l};var M=r(5219),h=r(6924),p=r(5946),n=r(6223),u=r(8645),C=r(9773),v=r(5566),O=r(9265),T=r(8763),A=r(5118),Q=r(2305),k=r(8614),E=r(1904),L=r(3838),B=r(5304),S=r(4896),F=r(1771),N=r(4779),y=r(3999);function Y(i,l){if(1&i&&(t.TgZ(0,"p",34),t._uU(1),t.qZA()),2&i){const e=l.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}function P(i,l){if(1&i&&(t.TgZ(0,"div",35),t._UZ(1,"app-dropdown",36),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","parent")("data",e.accounts)("filter",!0)("optionLabel","name_code")("optionValue","id")("placeholder","select")}}function z(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",35)(1,"app-file-upload",37),t.NdJ("onValueChange",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.onFileSelected(s))}),t.qZA()()}2&i&&(t.xp6(1),t.Q6J("multiple",!0)("label","attach_file"))}const J=function(){return{type:"name",length:3}},R=function(){return{type:"phone",length:3}},I=function(){return{type:"description",length:3}},q=function(){return{type:"code",length:3}};function W(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",10)(1,"p",20),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",12),t._UZ(5,"app-text",38),t.qZA(),t.TgZ(6,"div",12),t._UZ(7,"app-text",39),t.qZA(),t.TgZ(8,"div",23),t._UZ(9,"app-text",40),t.qZA(),t.TgZ(10,"div",12)(11,"app-dropdown",41),t.NdJ("ngModelChange",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.getBillingStates(s))}),t.qZA()(),t.TgZ(12,"div",12)(13,"app-dropdown",42),t.NdJ("ngModelChange",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.getBillingCities(s))}),t.qZA()(),t.TgZ(14,"div",12),t._UZ(15,"app-dropdown",43),t.qZA(),t.TgZ(16,"div",12),t._UZ(17,"app-text",44),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,37,"billing_address")),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(39,J))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(40,R)),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(41,I))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","country")("data",e.billingCountries)("optionLabel","name")("optionValue","id")("placeholder","country"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","state")("data",e.billingStates)("optionLabel","name")("optionValue","id")("placeholder","state"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","city")("data",e.billingCities)("optionLabel","name")("optionValue","id")("placeholder","city"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(42,q))("type","text")}}const V=function(){return{type:"phone",length:11}},K=function(){return{type:"email",length:5}};let G=(()=>{class i{constructor(e,o,s,c,m,At){this.accountsService=e,this.fb=o,this.toastr=s,this.config=c,this.dialogRef=m,this.customersService=At,this.unsubscribe=new u.x,this.formGroup=this.initForm(),this.currencies=[],this.accounts=[],this.shippingCountries=[],this.shippingStates=[],this.shippingCities=[],this.getCurrencyRequest=v.w.api.get,this.formData=new FormData,this.billingCountries=[],this.billingStates=[],this.billingCities=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){this.accountsService.getAccountsParents().pipe((0,C.R)(this.unsubscribe)).subscribe({next:e=>{this.accounts=e.data}}),this.customersService.getCurrencies().pipe((0,C.R)(this.unsubscribe)).subscribe({next:e=>{this.currencies=e.data}}),this.customersService.getCountries().pipe((0,C.R)(this.unsubscribe)).subscribe({next:e=>{this.shippingCountries=e.data,this.billingCountries=e.data,this.config.data?.data&&(this.shippingStates=this.shippingCountries.filter(o=>o.id==this.config.data.data.address?.country_id)[0]?.states,this.billingStates=this.billingCountries.filter(o=>o.id==this.config.data.data.billing_address?.country_id)[0].states)}}),this.config.data?.data&&(this.getShippingCities(this.config.data.data.address?.state_id),this.getBillingCities(this.config.data.data.billing_address?.country_id))}initForm(){return this.fb.group({id:[Number],name:["",[n.kI.required]],contact:["",[n.kI.required,n.kI.pattern("^[0-9]{11}$")]],email:["",[n.kI.required,n.kI.pattern("^[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}$")]],currencies:["",[n.kI.required]],parent_account_id:["",[n.kI.required]],tax_id:[""],Shipping_method_id:[""],credit_limit:[""],discount:[""],is_same_shipping_address:[0],address_phone:["",[n.kI.pattern("^[0-9]{11}$")]],address_name:[""],address:["",[n.kI.required]],country_id:["",[n.kI.required]],state_id:["",[n.kI.required]],city_id:["",[n.kI.required]],zip_code:["",[n.kI.required,n.kI.pattern("^[0-9]{5}$")]],billing_address_name:[""],billing_address_phone:["",[n.kI.pattern("^[0-9]{11}$")]],billing_address:["",[n.kI.required]],billing_country_id:["",[n.kI.required]],billing_state_id:["",[n.kI.required]],billing_city_id:["",[n.kI.required]],billing_zip_code:["",[n.kI.required]]})}accept(){console.log(this.formGroup.value),this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?(this.convertFormGroupToFormData(),this.customersService.update(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.errors=e.error.errors}})):(this.convertFormGroupToFormData(),this.customersService.create(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.errors=e.error.errors}}))}reject(e){this.dialogRef.close(e)}getShippingState(e){this.formGroup.patchValue({state_id:[""],city_id:[""]}),this.shippingStates=this.shippingCountries.filter(o=>o.id==e)[0]?.states}getBillingStates(e){this.formGroup.patchValue({billing_state_id:[""],billing_city_id:[""]}),this.billingStates=this.billingCountries.filter(o=>o.id==e)[0].states}getShippingCities(e){e>0&&this.customersService.getStateById(e).pipe((0,C.R)(this.unsubscribe)).subscribe({next:o=>{this.shippingCities=o?.data?.cities}})}getBillingCities(e){e>0&&this.customersService.getStateById(e).pipe((0,C.R)(this.unsubscribe)).subscribe({next:o=>{this.billingCities=o?.data?.cities}})}sameAddress(e){e.checked?(this.formGroup.patchValue({is_same_shipping_address:1}),this.formGroup.get("billing_address")?.clearValidators(),this.formGroup.get("billing_country_id")?.clearValidators(),this.formGroup.get("billing_state_id")?.clearValidators(),this.formGroup.get("billing_city_id")?.clearValidators(),this.formGroup.get("billing_zip_code")?.clearValidators()):(this.formGroup.patchValue({is_same_shipping_address:0}),this.formGroup.get("billing_address")?.setValidators(n.kI.required),this.formGroup.get("billing_country_id")?.setValidators(n.kI.required),this.formGroup.get("billing_state_id")?.setValidators(n.kI.required),this.formGroup.get("billing_city_id")?.setValidators(n.kI.required),this.formGroup.get("billing_zip_code")?.setValidators(n.kI.required)),this.formGroup.get("billing_address")?.updateValueAndValidity(),this.formGroup.get("billing_country_id")?.updateValueAndValidity(),this.formGroup.get("billing_state_id")?.updateValueAndValidity(),this.formGroup.get("billing_city_id")?.updateValueAndValidity(),this.formGroup.get("billing_zip_code")?.updateValueAndValidity()}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,name:this.config.data.data.name,contact:this.config.data.data.contact,email:this.config.data.data.email,currencies:this.config.data.data.currencies.map(e=>e.id),parent_account_id:this.config.data.data.parent_account_id,credit_limit:this.config.data.data.credit_limit,discount:this.config.data.data.discount,is_same_shipping_address:0,address_phone:this.config.data.data.address?.phone,address_name:this.config.data.data.address?.name,address:this.config.data.data.address?.address,country_id:this.config.data.data.address?.country_id,state_id:this.config.data.data.address?.state_id,city_id:this.config.data.data.address?.city_id,zip_code:this.config.data.data.address?.zip_code,billing_address_name:this.config.data.data.billing_address?.name,billing_address_phone:this.config.data.data.billing_address?.phone,billing_address:this.config.data.data.billing_address?.address,billing_country_id:this.config.data.data.billing_address?.country_id,billing_state_id:this.config.data.data.billing_address?.state_id,billing_city_id:this.config.data.data.billing_address?.city_id,billing_zip_code:this.config.data.data.billing_address?.zip_code})}onFileSelected(e){if(e.target.files[0])for(const[o,s]of Object.entries(e.target.files))this.formData.set(`files[${o}]`,e.target.files[o])}convertFormGroupToFormData(){const e=this.formGroup.value;Object.keys(e).forEach(s=>{this.formData.set(s,e[s])}),this.formData.delete("currencies"),this.formGroup.get("currencies")?.value.map((s,c)=>{this.formData.set(`currencies[${c}]`,s)})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(O.i),t.Y36(n.qu),t.Y36(T._W),t.Y36(A.S),t.Y36(A.E7),t.Y36(U))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-new-customer"]],decls:55,vars:94,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"sup-title"],[1,"col-md-6"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","placeholder","","formControlName","contact",1,"d-block",3,"patternMessage","type","text"],["text","email","formControlName","email","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","currencies",3,"text","request","filter","filterBy","optionLabel","optionValue","placeholder"],["class","col-md-12",4,"ngIf"],["ngDefaultControl","","placeholder","","formControlName","credit_limit",1,"d-block",3,"showButtons","mode","text"],["ngDefaultControl","","placeholder","","formControlName","discount",1,"d-block",3,"showButtons","mode","text"],[1,"sup-title","mt-3"],["text","name","formControlName","address_name","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","phone","formControlName","address_phone","ngDefaultControl","","placeholder","",3,"patternMessage"],[1,"col-12"],["text","address","formControlName","address","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","country_id",3,"text","data","optionLabel","optionValue","placeholder","ngModelChange"],["ngDefaultControl","","formControlName","state_id",3,"text","data","optionLabel","optionValue","placeholder","ngModelChange"],["ngDefaultControl","","formControlName","city_id",3,"text","data","optionLabel","optionValue","placeholder"],["text","zip_code","formControlName","zip_code","ngDefaultControl","","placeholder","",3,"patternMessage","type"],[3,"text","change"],["class","row",4,"ngIf"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"],[1,"col-md-12"],["ngDefaultControl","","formControlName","parent_account_id","filterBy","name_code",3,"text","data","filter","optionLabel","optionValue","placeholder"],[3,"multiple","label","onValueChange"],["text","name","formControlName","billing_address_name","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","phone","formControlName","billing_address_phone","ngDefaultControl","","placeholder","",3,"patternMessage"],["text","address","formControlName","billing_address","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","billing_country_id",3,"text","data","optionLabel","optionValue","placeholder","ngModelChange"],["ngDefaultControl","","formControlName","billing_state_id",3,"text","data","optionLabel","optionValue","placeholder","ngModelChange"],["ngDefaultControl","","formControlName","billing_city_id",3,"text","data","optionLabel","optionValue","placeholder"],["text","zip_code","formControlName","billing_zip_code","ngDefaultControl","","placeholder","",3,"patternMessage","type"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return o.accept()}),t.YNc(11,Y,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"p",11),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"div",12),t._UZ(18,"app-text",13),t.qZA(),t.TgZ(19,"div",12),t._UZ(20,"app-text",14),t.qZA(),t.TgZ(21,"div",12),t._UZ(22,"app-text",15),t.qZA(),t.TgZ(23,"div",12),t._UZ(24,"app-multiselect",16),t.qZA(),t.YNc(25,P,2,8,"div",17),t.TgZ(26,"div",12),t._UZ(27,"app-number-input",18),t.qZA(),t.TgZ(28,"div",12),t._UZ(29,"app-number-input",19),t.qZA(),t.YNc(30,z,2,2,"div",17),t.TgZ(31,"p",20),t._uU(32),t.ALo(33,"translate"),t.qZA(),t.TgZ(34,"div",12),t._UZ(35,"app-text",21),t.qZA(),t.TgZ(36,"div",12),t._UZ(37,"app-text",22),t.qZA(),t.TgZ(38,"div",23),t._UZ(39,"app-text",24),t.qZA(),t.TgZ(40,"div",12)(41,"app-dropdown",25),t.NdJ("ngModelChange",function(c){return o.getShippingState(c)}),t.qZA()(),t.TgZ(42,"div",12)(43,"app-dropdown",26),t.NdJ("ngModelChange",function(c){return o.getShippingCities(c)}),t.qZA()(),t.TgZ(44,"div",12),t._UZ(45,"app-dropdown",27),t.qZA(),t.TgZ(46,"div",12),t._UZ(47,"app-text",28),t.qZA(),t.TgZ(48,"app-checkbox",29),t.NdJ("change",function(c){return o.sameAddress(c)}),t.qZA(),t.YNc(49,W,18,43,"div",30),t.qZA(),t.TgZ(50,"div",31)(51,"div",32)(52,"app-button",33),t.NdJ("click",function(){return o.reject(!1)}),t.qZA()(),t.TgZ(53,"div",32)(54,"app-button",33),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e){let s,c;t.xp6(8),t.Oqu(t.lcZ(9,79,null!==(s=o.config.header)&&void 0!==s?s:"")),t.xp6(2),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,81,o.errors)),t.xp6(4),t.Oqu(t.lcZ(16,83,"basic_info")),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(87,J))("type","text"),t.xp6(2),t.Q6J("patternMessage",t.DdM(88,V))("type","tel")("text","phone"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(89,K))("type","email"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","currency")("request",o.getCurrencyRequest)("filter",!0)("filterBy","name")("optionLabel","name")("optionValue","id")("placeholder","currency"),t.xp6(1),t.Q6J("ngIf","add_customer"==o.config.header),t.xp6(2),t.Q6J("showButtons",!1)("mode","currency")("text","credit_limit"),t.xp6(2),t.Q6J("showButtons",!1)("mode","decimal")("text","discount"),t.xp6(1),t.Q6J("ngIf","add_customer"==o.config.header),t.xp6(2),t.Oqu(t.lcZ(33,85,"shipping_address")),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(90,J))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(91,V)),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(92,I))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","country")("data",o.shippingCountries)("optionLabel","name")("optionValue","id")("placeholder","country"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","state")("data",o.shippingStates)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","city")("data",o.shippingCities)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("patternMessage",t.DdM(93,q))("type","text"),t.xp6(1),t.Tol("d-flex align-items-center mt-2  flex-row-reverse justify-content-end gap-2"),t.Q6J("text","billing_same_as_shipping"),t.xp6(1),t.Q6J("ngIf",0==(null==(c=o.formGroup.get("is_same_shipping_address"))?null:c.value)),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==o.config.data?null:o.config.data.acceptLabel)}},dependencies:[a.sg,a.O5,Q.b,k.T,E.D,L.J,B.z,S.Y,F.U,n.Fj,n.JJ,n.JL,n.sg,n.u,N.r,a.Nd,y.X$]}),i})();var $=r(8718);function H(i,l){if(1&i&&(t.TgZ(0,"p",16),t._uU(1),t.qZA()),2&i){const e=l.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}let X=(()=>{class i{constructor(e,o,s,c,m){this.fb=e,this.toastr=o,this.config=s,this.dialogRef=c,this.customersService=m,this.userConfig=$.x,this.unsubscribe=new u.x,this.formGroup=this.initForm(),this.config.data?.data&&this.fillDataToUpdate()}initForm(){return this.fb.group({id:[Number],user_id:[""]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.customersService.assign(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.errors=e.error.errors}})}reject(e){this.dialogRef.close(e)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,user_id:this.config.data.data.user_id})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(n.qu),t.Y36(T._W),t.Y36(A.S),t.Y36(A.E7),t.Y36(U))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-assign-user"]],decls:22,vars:22,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-md-12"],["ngDefaultControl","","formControlName","user_id",3,"request","text","optionLabel","optionValue","placeholder"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"titlecase"),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"app-form",8),t.NdJ("onSubmit",function(){return o.accept()}),t.YNc(12,H,2,1,"p",9),t.ALo(13,"keyvalue"),t.TgZ(14,"div",10)(15,"div",11),t._UZ(16,"app-dropdown",12),t.qZA()(),t.TgZ(17,"div",13)(18,"div",14)(19,"app-button",15),t.NdJ("click",function(){return o.reject(!1)}),t.qZA()(),t.TgZ(20,"div",14)(21,"app-button",15),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e){let s;t.xp6(8),t.Oqu(t.lcZ(9,16,t.lcZ(10,18,null!==(s=o.config.header)&&void 0!==s?s:""))),t.xp6(3),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(13,20,o.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("request",o.userConfig.api.get)("text","user")("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==o.config.data?null:o.config.data.acceptLabel)}},dependencies:[a.sg,L.J,F.U,n.Fj,n.JJ,n.JL,n.sg,n.u,N.r,a.rS,a.Nd,y.X$]}),i})();var tt=r(1732),et=r(3562);let U=(()=>{class i{constructor(e,o,s){this.http=e,this.dynamicDialog=o,this.toastr=s}getAccounts(e){return this.http.get(d_api_getAccounts)}getCurrencies(e){return this.http.get(d_api_getCurrencies)}getCountries(e){return this.http.get(d_api_getCountries)}getStates(e){return this.http.get(d_api_getStates)}getCities(e){return this.http.get(d_api_getCities)}getCountryById(e){return this.http.get(d_api_getCountryById+e)}getStateById(e){return this.http.get(d_api_getStateById+e)}getCityById(e){return this.http.get(d_api_getCityById+e)}openDialogToCreateCustomer(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_customer",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},G)}create(e){return this.http.post(d_api_create,e)}delete(e){var o=this;return(0,g.Z)(function*(){const s={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e}},width:"300px",height:"164px"};if(!(yield o.dynamicDialog.confirm(s)))return!1;try{const m=yield o.http.delete(d_api_delete+e.id).toPromise();return o.toastr.success(m.message),m}catch(m){throw o.toastr.error(m.error.message),m}})()}openDialogToAssignUser(e){const o={showHeader:!1,header:"assign_user",data:{acceptLabel:"assign",rejectLabel:"Cancel",data:{...e}},width:"500px",height:"auto"};return this.dynamicDialog.showDialogWithComponent(o,X)}openDialogToUpdateCustomer(e){var o=this;return(0,g.Z)(function*(){const s={showHeader:!1,header:"update_customer",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"480px",height:"auto"};return yield o.dynamicDialog.showDialogWithComponent(s,G)})()}update(e){return this.http.post(d_api_update+e.get("id"),e)}assign(e){return this.http.post(d_api_assign+e.id,e)}import(e){return this.http.post(d_api_import,e)}export(){return this.http.get(d_api_export)}exportExample(){return this.http.get(d_api_exportExample)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(tt.O),t.LFG(et.U),t.LFG(T._W))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var ot=r(2377),it=r(359),nt=r(5077),at=r(3826),st=r(8275);function rt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",16)(1,"button",17),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ul",18)(5,"li",19),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.exportExample())}),t._uU(6),t.ALo(7,"titlecase"),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"li",19),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.export())}),t._uU(10),t.ALo(11,"titlecase"),t.ALo(12,"translate"),t.qZA()()()}2&i&&(t.xp6(2),t.hij(" ",t.lcZ(3,3,"export")," "),t.xp6(4),t.Oqu(t.lcZ(7,5,t.lcZ(8,7,"example"))),t.xp6(4),t.Oqu(t.lcZ(11,9,t.lcZ(12,11,"data"))))}function lt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"app-button",20),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.openDialogToCreateCustomer())}),t.qZA()}if(2&i){const e=t.oxw();t.Tol("btn-filter"),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}function ct(i,l){if(1&i&&(t.TgZ(0,"div")(1,"span",28),t._uU(2),t.qZA(),t.TgZ(3,"span",28),t._uU(4),t.qZA()()),2&i){const e=l.$implicit;t.xp6(2),t.hij(" row :",e.row_number," "),t.xp6(2),t.Oqu(e.error)}}function pt(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",21),t.YNc(1,ct,5,2,"div",22),t.TgZ(2,"app-file-upload",23),t.NdJ("onValueChange",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.onFileSelected(s))}),t.qZA(),t.TgZ(3,"div",24)(4,"app-button",25),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.import())}),t._UZ(5,"i",26),t.qZA(),t.TgZ(6,"app-button",27),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.closeSectionToImport())}),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.importErrors),t.xp6(1),t.Q6J("multiple",!1)("accept",".csv,.xls,.xlsx")("label","import"),t.xp6(2),t.Q6J("text","save")("loading",e.isLoading),t.xp6(2),t.Q6J("text","cancel")}}const j=function(i){return[i]};let dt=(()=>{class i{constructor(e,o,s){this.customersService=e,this.toastr=o,this.translateService=s,this.showImportForm=!1,this.importErrors=[],this.fileName="",this.values=new FormData,this.isLoading=!1,this.permissions=f,this.icon=M.dv,this.tableConfig=b(this),this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"code",field:"code"},{label:"contact",field:"contact"},{label:"email",field:"email"},{label:"balance",field:"balance"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:p.q.asc,field:p.q.asc},{label:p.q.desc,field:p.q.desc}]}],this.filtersConfig=[{field:"search",label:"search",type:h.W.TEXT,placeholder:"search_by_name_or_code"},{field:"creator_id",label:"created_by",type:h.W.SELECT,options:{value:"id",label:"name"},request:d_api_getUsers,placeholder:"select"},{field:"from",label:"creation_from",type:h.W.DATE},{field:"to",label:"creation_to",type:h.W.DATE},{field:"transaction_from",label:"last_transaction_date_from",type:h.W.DATE},{field:"transaction_to",label:"last_transaction_date_to",type:h.W.DATE}]}openDialogToCreateCustomer(){var e=this;return(0,g.Z)(function*(){(yield e.customersService.openDialogToCreateCustomer())&&(e.tableConfig=b(e))})()}openSectionToImport(){this.showImportForm=!0}closeSectionToImport(){this.fileName="",this.showImportForm=!1,this.importErrors=[]}export(e){this.customersService.export().subscribe(o=>{window.open(o.file_path)})}exportExample(){this.customersService.exportExample().subscribe(e=>{window.open(e.file_path)})}onFileSelected(e){e.target.files[0]&&(this.fileName=e.target.files[0].name,this.values.set("file",e.target.files[0]))}import(){this.fileName?(this.isLoading=!0,this.customersService.import(this.values).subscribe(e=>{this.toastr.success(e.message),this.isLoading=!1,this.fileName="",this.closeSectionToImport(),this.tableConfig=b(this)},e=>{this.isLoading=!1,this.importErrors=e.error.errors,e.error.message&&this.toastr.error(e.error.message)})):this.toastr.error(this.translateService.instant("select_file"))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(U),t.Y36(T._W),t.Y36(y.sK))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-customers"]],decls:19,vars:19,consts:[[1,"d-flex","align-items-center","justify-content-between","mb-2"],[1,"title"],[1,"d-flex","gap-2","align-items-center"],["class","dropdown",4,"hasPermissions"],[3,"text","click"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],["class","import",4,"ngIf"],[1,"d-flex","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[1,"dropdown"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-cancel","dropdown-toggle"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],[1,"pointer","dropdown-item",3,"click"],[3,"text","icon","iconPos","click"],[1,"import"],[4,"ngFor","ngForOf"],[3,"multiple","accept","label","onValueChange"],[1,"d-flex","gap-2","align-items-center","mt-3"],[3,"text","loading","click"],[1,"fa-solid","fa-check","px-2"],[1,"btn-cancel",3,"text","click"],[1,"text-error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,rt,13,13,"div",3),t.TgZ(6,"app-button",4),t.NdJ("click",function(){return o.openSectionToImport()}),t.qZA(),t.YNc(7,lt,1,5,"app-button",5),t.qZA()(),t.YNc(8,pt,7,7,"div",6),t.TgZ(9,"div",7),t._UZ(10,"ukt-sort",8,9)(12,"ukt-filter",10,11),t.qZA(),t.TgZ(14,"div",12),t._UZ(15,"app-table",13),t.qZA(),t.TgZ(16,"div",14),t._UZ(17,"ukt-pagination",null,15),t.qZA()),2&e){const s=t.MAs(11),c=t.MAs(13),m=t.MAs(18);t.xp6(2),t.Oqu(t.lcZ(3,13,"list_of_customers")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(15,j,o.permissions.list)),t.xp6(1),t.Tol("btn-cancel"),t.Q6J("text","import"),t.xp6(1),t.Q6J("hasPermissions",t.VKq(17,j,o.permissions.create)),t.xp6(1),t.Q6J("ngIf",o.showImportForm),t.xp6(2),t.Q6J("SortConfig",o.sortConfig),t.xp6(2),t.Q6J("config",o.filtersConfig),t.xp6(3),t.Q6J("tableConfig",o.tableConfig)("pagination",m)("filter",c)("sort",s)}},dependencies:[a.sg,a.O5,ot.a,S.Y,it.Q,N.r,nt.z,at.x,st.z,a.rS,y.X$],styles:[".dropdown[_ngcontent-%COMP%]{background-color:transparent!important}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent!important;border:1px solid var(--mainColor);font-size:1.5rem;padding:6px}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.5rem}.import[_ngcontent-%COMP%]{padding:20px;border:2px solid var(--mainColor);border-radius:8px;margin:10px 0}"]}),i})();const gt=[{path:"",component:(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-customers"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-customers"),t.qZA())},dependencies:[dt]}),i})(),canActivate:[r(2127).t],data:{permission:f.list}}];let ft=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[Z.Bz.forChild(gt),Z.Bz]}),i})();var ht=r(1471),_t=r(9624),Ct=r(2115),xt=r(4413),bt=r(1890),vt=r(1019),yt=r(8096),Zt=r(1383);let Tt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[a.ez,ft,ht.X,_t.U,Ct.u,xt.e,bt.f,vt.i,yt.J,y.aw,Zt.m]}),i})()},4896:(D,x,r)=>{r.d(x,{Y:()=>w});var a=r(9291),Z=r(67),t=r(6223),g=r(6814),d=r(3999);function f(p,_){1&p&&a._UZ(0,"i",7)}function b(p,_){if(1&p&&(a.TgZ(0,"label",4),a._uU(1),a.ALo(2,"titlecase"),a.ALo(3,"translate"),a.TgZ(4,"span",5),a.YNc(5,f,1,0,"i",6),a.qZA()()),2&p){const n=a.oxw();a.xp6(1),a.hij("",a.lcZ(2,2,a.lcZ(3,4,n.label))," "),a.xp6(4),a.Q6J("ngIf",n.control&&(null==n.control.errors?null:n.control.errors.required))}}function M(p,_){if(1&p&&(a.TgZ(0,"p"),a._uU(1),a.ALo(2,"translate"),a.qZA()),2&p){const n=a.oxw();a.xp6(1),a.Oqu(a.lcZ(2,1,n.selectedFileCount+"files"))}}function h(p,_){if(1&p&&(a.TgZ(0,"p"),a._uU(1),a.ALo(2,"translate"),a.qZA()),2&p){const n=a.oxw();a.xp6(1),a.Oqu(n.selectedFileName?n.selectedFileName:a.lcZ(2,1,n.placeholder))}}let w=(()=>{class p extends Z.t{set clear(n){n&&(this.selectedFileCount=0,this.selectedFileName="",this.value=null)}constructor(n){super(),this.formGroupDirective=n,this.uploadedFiles=[],this.multiple=!0,this.label="Upload",this.placeholder="drag_and_drop_you_file_or_Click_here_to_upload",this.accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx",this.onValueChange=new a.vpe,this.selectedFileName="",this.selectedFileCount=0}onFileSelected(n){this.onValueChange.emit(n),this.selectedFileName=n.target.files[0].name,n.target.files&&n.target.files.length>0&&(this.selectedFileCount=n.target.files.length)}onUpload(n){for(let u of n.files)this.uploadedFiles.push(u)}}return p.\u0275fac=function(n){return new(n||p)(a.Y36(t.sg,8))},p.\u0275cmp=a.Xpm({type:p,selectors:[["app-file-upload"]],inputs:{value:"value",multiple:"multiple",label:"label",placeholder:"placeholder",accept:"accept",clear:"clear"},outputs:{onValueChange:"onValueChange"},features:[a._Bn([{provide:t.JU,useExisting:p,multi:!0},{provide:t.Cf,useExisting:p,multi:!0}]),a.qOj],decls:5,vars:6,consts:[[1,"file-input"],["for","file",4,"ngIf"],[4,"ngIf"],["id","file","type","file","id","file",1,"form-control",3,"multiple","ngModel","accept","ngModelChange","change"],["for","file"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(n,u){1&n&&(a.TgZ(0,"div",0),a.YNc(1,b,6,6,"label",1),a.YNc(2,M,3,3,"p",2),a.YNc(3,h,3,3,"p",2),a.TgZ(4,"input",3),a.NdJ("ngModelChange",function(v){return u.value=v})("change",function(v){return u.onFileSelected(v)}),a.qZA()()),2&n&&(a.xp6(1),a.Q6J("ngIf",u.label),a.xp6(1),a.Q6J("ngIf",u.selectedFileCount>1),a.xp6(1),a.Q6J("ngIf",u.selectedFileCount<=1),a.xp6(1),a.Q6J("multiple",u.multiple)("ngModel",u.value)("accept",u.accept))},dependencies:[g.O5,t.Fj,t.JJ,t.On,g.rS,d.X$],styles:[".file-input[_ngcontent-%COMP%]{position:relative}.file-input[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{position:absolute;left:0;top:0;opacity:0;width:100%;height:100%;min-width:200px!important}.file-input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;padding:8px;border:1px dashed #7ca0c5;border-radius:8px;font-size:14px;cursor:pointer;min-width:200px!important;text-align:center;overflow:hidden}"]}),p})()},8718:(D,x,r)=>{r.d(x,{x:()=>a});const a={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}}}]);