"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[1519],{7553:(P,_,r)=>{r.d(_,{F:()=>u});const u={api:{create:"tax/create",get:"tax",getModules:"module",getById:"tax/",update:"tax/update/",delete:"tax/",exportCvs:"tax/export/cvs",exportPdf:"tax/export/pdf",import:"tax/import"},page:{list:"",view:"view/:id",history:"history"}}},1519:(P,_,r)=>{r.r(_),r.d(_,{ProductsModule:()=>vt});var u=r(6814),f=r(8209),n=r(5861),g=function(a){return a.create="Create Product",a.view="View Product",a.edit="Edit Product",a.delete="Delete Product",a}(g||{}),m=r(3058);const C=a=>{return{cols:[{field:"code",label:"code",class:""},{field:"name",label:"name",class:""},{field:"quantity",label:"quantity",class:"",format:s=>s?.quantity?s?.quantity:"0"},{field:"selling_price",label:"selling_price",class:"",format:s=>s?.selling_price?s?.selling_price:"-"},{field:"category",label:"category",class:"",format:s=>s.category?s.category.name:"-"},{field:"material",label:"material",class:"",format:s=>s?.material?s.material:"-"},{label:"action",actions:[{id:g.delete,icon:"fa-solid fa-copy",class:"main-color",fun:(s=(0,n.Z)(function*(e){return yield a.productService.openDialogToAssignProduct(e)}),function(o){return s.apply(this,arguments)})},{id:g.delete,icon:"trash",class:"main-color",fun:function(){var s=(0,n.Z)(function*(e){return yield a.productService.delete(e)});return function(o){return s.apply(this,arguments)}}()},{id:g.delete,icon:"eye",route:"/",class:"main-color"},{id:g.edit,icon:"pen-to-square",class:"main-color",fun:function(){var s=(0,n.Z)(function*(e){return yield a.productService.openDialogToUpdateProduct(e)});return function(o){return s.apply(this,arguments)}}()}]}],Request:m.s.api.get,titleRow:"name"};var s};var Z=r(5946),v=r(6924),w=r(8718),c=r(5219),t=r(9291),i=r(6223),p=r(8645),T=r(336),b=r(1494),j=r(4605),F=r(7553),N=r(7619),A=r(8763),J=r(5118),S=r(1771),I=r(8614),Q=r(3838),Y=r(5253),B=r(5304),L=r(4896),O=r(4779),y=r(3999);function R(a,s){if(1&a&&(t.TgZ(0,"p",35),t._uU(1),t.qZA()),2&a){const e=s.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}const M=function(){return{type:"number",length:1}};let E=(()=>{class a{constructor(e,o,l,h,x){this.fb=e,this.toastr=o,this.config=l,this.dialogRef=h,this.productService=x,this.unsubscribe=new p.x,this.formGroup=this.initForm(),this.brandConfig=T.r,this.SupplierConfig=j.h,this.unitTypeConfig=b.h,this.taxConfig=F.F,this.categoriesConfig=N.t,this.values=new FormData,this.formData=new FormData,this.billingCities=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){}initForm(){return this.fb.group({code:[""],id:[Number],name:["",[i.kI.required]],description:[""],brand_id:[""],suppliers:[""],category_id:[""],unit_id:[""],specs:this.fb.group({height:[""],width:[""],length:[""],material:[""],size:[""],quantity:["",i.kI.pattern("^[0-9]*$")],selling_price:["",[i.kI.pattern("^[0-9 .]*$")]],purchase_price:["",[i.kI.pattern("^[0-9 .]*$")]],opening_stock:["",[i.kI.required,i.kI.pattern("^[0-9 .]*$")]],quantity_alert:["",[i.kI.required,i.kI.pattern("^[0-9 .]*$")]]}),taxes_id:[""]})}onFileSelected(e){if(e.target.files[0])for(const[o,l]of Object.entries(e.target.files))this.formData.set(`specs.images[${o}]`,e.target.files[o])}convertSupFormGroupToFormData(e){Object.keys(e.controls).forEach(o=>{const l=this.formGroup.get("specs."+o);this.formData.append("specs."+o,l?.value)})}convertFormGroupToFormData(){Object.keys(this.formGroup.controls).forEach(o=>{const l=this.formGroup.get(o);l instanceof i.cw?this.convertSupFormGroupToFormData(l):this.formData.append(o,l?.value)}),this.formData.delete("suppliers"),this.formGroup.get("suppliers")?.value.map((o,l)=>{this.formData.set(`suppliers[${l}]`,o)})}accept(){console.log(this.formGroup),this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.convertFormGroupToFormData(),this.config.data.data?this.productService.update(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}):this.productService.create(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}))}reject(e){this.dialogRef.close(e)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,code:this.config.data.data?.code,name:this.config.data.data.name,description:this.config.data.data?.description,category_id:this.config.data.data?.category_id,unit_id:this.config.data.data?.unit_id,taxes_id:this.config.data.data?.tax?.id,brand_id:this.config.data.data?.brand?.id,suppliers:this.config.data.data?.suppliers.map(e=>e.id)}),this.formGroup.get("specs")?.patchValue({image:this.config.data.data?.specs?.image,height:this.config.data.data?.specs?.height,width:this.config.data.data?.specs?.width,length:this.config.data.data?.specs?.length,material:this.config.data.data?.specs?.material,size:this.config.data.data?.specs?.size,quantity:this.config.data.data?.specs?.quantity,opening_stock:this.config.data.data?.specs?.opening_stock,quantity_alert:this.config.data.data?.specs?.quantity_alert,selling_price:this.config.data.data?.selling_price,purchase_price:this.config.data.data?.purchase_price})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(i.qu),t.Y36(A._W),t.Y36(J.S),t.Y36(J.E7),t.Y36(U))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-product-form"]],decls:58,vars:99,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["text","code","formControlName","code","ngDefaultControl","","placeholder","",3,"type"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["text","description","formControlName","description","ngDefaultControl","","placeholder","",3,"type"],["filterBy","name","ngDefaultControl","","formControlName","suppliers",3,"text","filter","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","brand_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","unit_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","taxes_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","category_id",3,"text","request","optionLabel","optionValue","placeholder"],["formGroupName","specs"],["type","type","formControlName","height","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","width","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","length","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","material","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","size","ngDefaultControl","","placeholder","",3,"text"],["text","quantity","formControlName","quantity","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","opening_stock","formControlName","opening_stock","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","quantity_alert","formControlName","quantity_alert","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","selling_price","formControlName","selling_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","purchase_price","formControlName","purchase_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["label","image","ngDefaultControl","",3,"accept","onValueChange"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return o.accept()}),t.YNc(11,R,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"div",11),t._UZ(15,"app-text",12),t.qZA(),t.TgZ(16,"div",11),t._UZ(17,"app-text",13),t.qZA(),t.TgZ(18,"div",11),t._UZ(19,"app-textarea",14),t.qZA(),t.TgZ(20,"div",11),t._UZ(21,"app-multiselect",15),t.qZA(),t.TgZ(22,"div",11),t._UZ(23,"app-dropdown",16),t.qZA(),t.TgZ(24,"div",11),t._UZ(25,"app-dropdown",17),t.qZA(),t.TgZ(26,"div",11),t._UZ(27,"app-dropdown",18),t.qZA(),t.TgZ(28,"div",11),t._UZ(29,"app-dropdown",19),t.qZA(),t.TgZ(30,"div",20)(31,"div",11),t._UZ(32,"app-text",21),t.qZA(),t.TgZ(33,"div",11),t._UZ(34,"app-text",22),t.qZA(),t.TgZ(35,"div",11),t._UZ(36,"app-text",23),t.qZA(),t.TgZ(37,"div",11),t._UZ(38,"app-text",24),t.qZA(),t.TgZ(39,"div",11),t._UZ(40,"app-text",25),t.qZA(),t.TgZ(41,"div",11),t._UZ(42,"app-text",26),t.qZA(),t.TgZ(43,"div",11),t._UZ(44,"app-text",27),t.qZA(),t.TgZ(45,"div",11),t._UZ(46,"app-text",28),t.qZA(),t.TgZ(47,"div",11),t._UZ(48,"app-text",29),t.qZA(),t.TgZ(49,"div",11),t._UZ(50,"app-text",30),t.qZA(),t.TgZ(51,"div",11)(52,"app-file-upload",31),t.NdJ("onValueChange",function(h){return o.onFileSelected(h)}),t.qZA()()()(),t.TgZ(53,"div",32)(54,"div",33)(55,"app-button",34),t.NdJ("click",function(){return o.reject(!1)}),t.qZA()(),t.TgZ(56,"div",33)(57,"app-button",34),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e){let l;t.xp6(8),t.Oqu(t.lcZ(9,90,null!==(l=o.config.header)&&void 0!==l?l:"")),t.xp6(2),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,92,o.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol(""),t.Q6J("text","supplier")("filter",!0)("request",o.SupplierConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","brand")("request",o.brandConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","unit")("request",o.unitTypeConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","tax")("request",o.taxConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","category")("request",o.categoriesConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","category"),t.xp6(3),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","height"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","width"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","length"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","material"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","size"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(94,M))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(95,M))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(96,M))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(97,M))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(98,M))("type","text"),t.xp6(2),t.Q6J("accept",".jpg,.jpeg,.png"),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==o.config.data?null:o.config.data.acceptLabel)}},dependencies:[u.sg,S.U,i.Fj,i.JJ,i.JL,i.sg,i.u,i.x0,I.T,Q.J,Y.R,B.z,L.Y,O.r,u.Nd,y.X$]}),a})();function z(a,s){if(1&a&&(t.TgZ(0,"p",30),t._uU(1),t.qZA()),2&a){const e=s.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}const q=function(){return{type:"number",length:1}};let W=(()=>{class a{constructor(e,o,l,h,x){this.fb=e,this.toastr=o,this.config=l,this.dialogRef=h,this.productService=x,this.unsubscribe=new p.x,this.formGroup=this.initForm(),this.brandConfig=T.r,this.SupplierConfig=j.h,this.unitTypeConfig=b.h,this.taxConfig=F.F,this.categoriesConfig=N.t,this.formData=new FormData,this.default_specs=[{name:"height"},{name:"width"},{name:"length"},{name:"material"},{name:"size"}],this.billingCities=[],this.config.data?.data&&(this.formData.set("id",this.config.data?.data.id),console.log(this.config.data?.data))}initForm(){return this.fb.group({id:[Number],code:[""],default_spec_name:[""],specs:this.fb.group({height:[""],width:[""],length:[""],material:[""],size:[""],quantity:["",i.kI.pattern("^[0-9]*$")],selling_price:["",[i.kI.pattern("^[0-9 .]*$")]],purchase_price:["",[i.kI.pattern("^[0-9 .]*$")]],opening_stock:["",[i.kI.required,i.kI.pattern("^[0-9 .]*$")]],quantity_alert:["",[i.kI.required,i.kI.pattern("^[0-9 .]*$")]],taxes_id:[""]})})}onFileSelected(e){if(e.target.files[0])for(const[o,l]of Object.entries(e.target.files))this.formData.set(`specs.images[${o}]`,e.target.files[o])}convertSupFormGroupToFormData(e){Object.keys(e.controls).forEach(o=>{const l=this.formGroup.get("specs."+o);this.formData.append("specs."+o,l?.value)})}convertFormGroupToFormData(){Object.keys(this.formGroup.controls).forEach(e=>{const o=this.formGroup.get(e);o instanceof i.cw?this.convertSupFormGroupToFormData(o):this.formData.append(e,o?.value)})}reject(e){this.dialogRef.close(e)}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.convertFormGroupToFormData(),this.productService.assign(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}))}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(i.qu),t.Y36(A._W),t.Y36(J.S),t.Y36(J.E7),t.Y36(U))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-assign-product"]],decls:49,vars:73,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["type","type","formControlName","code","ngDefaultControl","","placeholder","",3,"text"],["ngDefaultControl","","formControlName","default_spec_name",3,"text","data","optionLabel","optionValue","placeholder"],["formGroupName","specs"],["type","type","formControlName","height","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","width","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","length","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","material","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","size","ngDefaultControl","","placeholder","",3,"text"],["text","quantity","formControlName","quantity","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","selling_price","formControlName","selling_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","purchase_price","formControlName","purchase_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","opening_stock","formControlName","opening_stock","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","quantity_alert","formControlName","quantity_alert","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","taxes_id",3,"text","request","optionLabel","optionValue","placeholder"],["label","image",3,"accept","onValueChange"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"titlecase"),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"app-form",8),t.NdJ("onSubmit",function(){return o.accept()}),t.YNc(12,z,2,1,"p",9),t.ALo(13,"keyvalue"),t.TgZ(14,"div",10)(15,"div",11),t._UZ(16,"app-text",12),t.qZA(),t.TgZ(17,"div",11),t._UZ(18,"app-dropdown",13),t.qZA(),t.TgZ(19,"div",14)(20,"div",11),t._UZ(21,"app-text",15),t.qZA(),t.TgZ(22,"div",11),t._UZ(23,"app-text",16),t.qZA(),t.TgZ(24,"div",11),t._UZ(25,"app-text",17),t.qZA(),t.TgZ(26,"div",11),t._UZ(27,"app-text",18),t.qZA(),t.TgZ(28,"div",11),t._UZ(29,"app-text",19),t.qZA(),t.TgZ(30,"div",11),t._UZ(31,"app-text",20),t.qZA(),t.TgZ(32,"div",11),t._UZ(33,"app-text",21),t.qZA(),t.TgZ(34,"div",11),t._UZ(35,"app-text",22),t.qZA(),t.TgZ(36,"div",11),t._UZ(37,"app-text",23),t.qZA(),t.TgZ(38,"div",11),t._UZ(39,"app-text",24),t.qZA(),t.TgZ(40,"div",11),t._UZ(41,"app-dropdown",25),t.qZA(),t.TgZ(42,"div",11)(43,"app-file-upload",26),t.NdJ("onValueChange",function(h){return o.onFileSelected(h)}),t.qZA()()()(),t.TgZ(44,"div",27)(45,"div",28)(46,"app-button",29),t.NdJ("click",function(){return o.reject(!1)}),t.qZA()(),t.TgZ(47,"div",28)(48,"app-button",29),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e&&(t.xp6(8),t.Oqu(t.lcZ(9,62,t.lcZ(10,64,"assign_product"))),t.xp6(3),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(13,66,o.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","code"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","spec name")("data",o.default_specs)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(3),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","height"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","width"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","length"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","material"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","size"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(68,q))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(69,q))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(70,q))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(71,q))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(72,q))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","tax")("request",o.taxConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Q6J("accept",".jpg,.jpeg,.png"),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text","assign"))},dependencies:[u.sg,S.U,i.Fj,i.JJ,i.JL,i.sg,i.u,i.x0,I.T,Q.J,L.Y,O.r,u.rS,u.Nd,y.X$]}),a})();var $=r(1732),K=r(3562);let U=(()=>{class a{constructor(e,o,l){this.http=e,this.dynamicDialog=o,this.toaster=l}getProducts(e){return this.http.get(m.s.api.get)}openDialogToCreateUnitType(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_product",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},E)}create(e){return this.http.post(m.s.api.create,e)}delete(e){var o=this;return(0,n.Z)(function*(){const l={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e},name:"name"},width:"500px",height:"auto"};if(yield o.dynamicDialog.confirm(l))try{const x=yield o.http.delete(m.s.api.delete+e.id).toPromise();return o.toaster.success(x.message),x}catch(x){throw o.toaster.error(x.error.message),x}return!1})()}openDialogToUpdateProduct(e){var o=this;return(0,n.Z)(function*(){const l={showHeader:!1,header:"update_product",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"500px",height:"auto"};return yield o.dynamicDialog.showDialogWithComponent(l,E)})()}update(e){return this.http.post(m.s.api.update+e.get("id"),e)}import(e){return this.http.post(m.s.api.import,e)}exportExample(){return this.http.get(m.s.api.exportExample)}openDialogToAssignProduct(e){const o={showHeader:!1,header:"assign_product",data:{acceptLabel:"assign",rejectLabel:"Cancel",data:{...e}},width:"500px",height:"auto"};return this.dynamicDialog.showDialogWithComponent(o,W)}assign(e){return this.http.post(m.s.api.assign+e.get("id"),e)}getById(e){return this.http.get(m.s.api.getById+e)}}return a.\u0275fac=function(e){return new(e||a)(t.LFG($.O),t.LFG(K.U),t.LFG(A._W))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var X=r(2377),H=r(359),tt=r(5077),et=r(3826),ot=r(8275);function nt(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"div",17)(1,"button",18),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ul",19)(5,"li",20),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.exportExample())}),t._uU(6),t.ALo(7,"titlecase"),t.ALo(8,"translate"),t.qZA()()()}2&a&&(t.xp6(2),t.hij(" ",t.lcZ(3,2,"export")," "),t.xp6(4),t.hij(" ",t.lcZ(7,4,t.lcZ(8,6,"example"))," "))}function at(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"app-button",21),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.openDialogToCreate())}),t.qZA()}if(2&a){const e=t.oxw();t.Tol("btn-filter "),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}function it(a,s){if(1&a&&(t.TgZ(0,"div")(1,"span",29),t._uU(2),t.qZA(),t.TgZ(3,"span",29),t._uU(4),t.qZA()()),2&a){const e=s.$implicit;t.xp6(2),t.hij(" row :",e.row_number," "),t.xp6(2),t.Oqu(e.error)}}function rt(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"div",22),t.YNc(1,it,5,2,"div",23),t.TgZ(2,"app-file-upload",24),t.NdJ("onValueChange",function(l){t.CHM(e);const h=t.oxw();return t.KtG(h.onFileSelected(l))}),t.qZA(),t.TgZ(3,"div",25)(4,"app-button",26),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.import())}),t._UZ(5,"i",27),t.qZA(),t.TgZ(6,"app-button",28),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.closeSectionToImport())}),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.importErrors),t.xp6(1),t.Q6J("multiple",!1)("accept",".csv,.xls,.xlsx")("label","import"),t.xp6(2),t.Q6J("text","save")("loading",e.isLoading),t.xp6(2),t.Q6J("text","cancel")}}const k=function(a){return[a]};let lt=(()=>{class a{constructor(e,o,l){this.productService=e,this.toastr=o,this.translateService=l,this.showImportForm=!1,this.importErrors=[],this.fileName="",this.values=new FormData,this.isLoading=!1,this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"purchase_price",field:"purchase_price"},{label:"selling_price",field:"selling_price"},{label:"creator",field:"creator_id"},{label:"quantity",field:"quantity"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:Z.q.asc,field:Z.q.asc},{label:Z.q.desc,field:Z.q.desc}]}],this.filtersConfig=[{field:"search",label:"search",type:v.W.TEXT,placeholder:"search"},{field:"creator_id",label:"created_by",type:v.W.SELECT,options:{value:"id",label:"name"},request:w.x.api.get,placeholder:"select"},{field:"from",label:"from",type:v.W.DATE},{field:"to",label:"to",type:v.W.DATE}],this.permissions=g,this.tableConfig=C(this),this.icon=c.dv}openDialogToCreate(){var e=this;return(0,n.Z)(function*(){(yield e.productService.openDialogToCreateUnitType())&&(e.tableConfig=C(e))})()}openSectionToImport(){this.showImportForm=!0}closeSectionToImport(){this.fileName="",this.showImportForm=!1,this.importErrors=[]}exportExample(){this.productService.exportExample().subscribe(e=>{window.open(e.file_path)})}onFileSelected(e){e.target.files[0]&&(this.fileName=e.target.files[0].name,this.values.set("file",e.target.files[0]))}import(){this.fileName?(this.isLoading=!0,this.productService.import(this.values).subscribe(e=>{this.toastr.success(e.message),this.isLoading=!1,this.fileName="",this.closeSectionToImport(),this.tableConfig=C(this)},e=>{this.isLoading=!1,this.importErrors=e.error.errors,e.error.message&&this.toastr.error(e.error.message)})):this.toastr.error(this.translateService.instant("select_file"))}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(U),t.Y36(A._W),t.Y36(y.sK))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-list"]],decls:20,vars:19,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex","gap-2"],["class","dropdown",4,"hasPermissions"],[3,"text","click"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],["class","import",4,"ngIf"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table","mt-2"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[1,"dropdown"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-cancel","dropdown-toggle"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],[1,"pointer","dropdown-item",3,"click"],[3,"text","icon","iconPos","click"],[1,"import"],[4,"ngFor","ngForOf"],[3,"multiple","accept","label","onValueChange"],[1,"d-flex","gap-2","align-items-center","mt-3"],[3,"text","loading","click"],[1,"fa-solid","fa-check","px-2"],[1,"btn-cancel",3,"text","click"],[1,"text-error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,nt,9,8,"div",4),t.TgZ(7,"app-button",5),t.NdJ("click",function(){return o.openSectionToImport()}),t.qZA(),t.YNc(8,at,1,5,"app-button",6),t.qZA()(),t.YNc(9,rt,7,7,"div",7),t.TgZ(10,"div",8),t._UZ(11,"ukt-sort",9,10)(13,"ukt-filter",11,12),t.qZA(),t.TgZ(15,"div",13),t._UZ(16,"app-table",14),t.qZA(),t.TgZ(17,"div",15),t._UZ(18,"ukt-pagination",null,16),t.qZA()()),2&e){const l=t.MAs(12),h=t.MAs(14),x=t.MAs(19);t.xp6(3),t.Oqu(t.lcZ(4,13,"list_of_products")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(15,k,o.permissions.create)),t.xp6(1),t.Tol("btn-cancel"),t.Q6J("text","import"),t.xp6(1),t.Q6J("hasPermissions",t.VKq(17,k,o.permissions.create)),t.xp6(1),t.Q6J("ngIf",o.showImportForm),t.xp6(2),t.Q6J("SortConfig",o.sortConfig),t.xp6(2),t.Q6J("config",o.filtersConfig),t.xp6(3),t.Q6J("tableConfig",o.tableConfig)("pagination",x)("filter",h)("sort",l)}},dependencies:[u.sg,u.O5,X.a,H.Q,L.Y,O.r,tt.z,et.x,ot.z,u.rS,y.X$],styles:[".dropdown[_ngcontent-%COMP%]{background-color:transparent!important}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent!important;border:1px solid var(--mainColor);font-size:1.5rem;padding:6px}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.5rem}.import[_ngcontent-%COMP%]{padding:20px;border:2px solid var(--mainColor);border-radius:8px;margin:10px 0}"]}),a})();var G=r(9773);function st(a,s){if(1&a&&(t.TgZ(0,"div",29),t._UZ(1,"img",30),t.qZA()),2&a){const e=s.$implicit;t.xp6(1),t.Q6J("src",null==e?null:e.url,t.LSH)}}let pt=(()=>{class a{constructor(e,o,l){this.productService=e,this.route=o,this.toastr=l,this.icon=c.dv,this.unsubscribe=new p.x}ngOnInit(){this.route.data.pipe((0,G.R)(this.unsubscribe)).subscribe({next:e=>{this.data=e.product.data,this.data2=this.data?.specs},error:e=>{}})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(U),t.Y36(f.gz),t.Y36(A._W))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-show-product"]],decls:76,vars:23,consts:[[1,"p-5","bg-white","mt-3","rounded-5"],[1,"d-flex"],["routerLink","/key/inventory/products",1,"pi","pi-arrow-left","px-3","pt-2",2,"font-size","2rem"],[1,"fw-bold","fs-1"],[1,"d-flex","justify-content-end"],[1,"btn-new",3,"text","iconPos","icon","routerLink"],[1,"row","mt-5","px-5"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-12","mt-5"],[1,"fs-3","fw-bold"],[1,"fs-4"],[1,"p-5","info","rounded-5","mt-4"],["translate","product_info",1,"fs-3","fw-bold","mb-4"],[1,"row"],[1,"col-lg-2"],[1,"mb-5"],["translate","code",1,"fs-3","fw-bold"],["translate","selling_price",1,"fs-3","fw-bold"],["translate","width",1,"fs-3","fw-bold"],["translate","category",1,"fs-3","fw-bold"],["translate","purchase_price",1,"fs-3","fw-bold"],["translate","hight",1,"fs-3","fw-bold"],["translate","unit",1,"fs-3","fw-bold"],["translate","taxes",1,"fs-3","fw-bold"],["translate","length",1,"fs-3","fw-bold"],["translate","quantity_alert",1,"fs-3","fw-bold"],["translate","size",1,"fs-3","fw-bold"],["translate","opening_stock",1,"fs-3","fw-bold"],["translate","material",1,"fs-3","fw-bold"],[1,"col-md-4"],["width","100%","alt","product image",3,"src"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"i",2),t.TgZ(3,"h2",3),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"div",4),t._UZ(7,"app-button",5),t.qZA(),t.TgZ(8,"div",6),t.YNc(9,st,2,1,"div",7),t.TgZ(10,"div",8)(11,"h3",9),t._uU(12),t.qZA(),t.TgZ(13,"p",10),t._uU(14),t.qZA()()(),t.TgZ(15,"div",11),t._UZ(16,"h3",12),t.TgZ(17,"div",13)(18,"div",14)(19,"div",15),t._UZ(20,"span",16),t.TgZ(21,"p",10),t._uU(22),t.qZA()(),t.TgZ(23,"div",15),t._UZ(24,"span",17),t.TgZ(25,"p",10),t._uU(26),t.qZA()(),t.TgZ(27,"div"),t._UZ(28,"span",18),t.TgZ(29,"p",10),t._uU(30),t.qZA()()(),t.TgZ(31,"div",14)(32,"div",15),t._UZ(33,"span",19),t.TgZ(34,"p",10),t._uU(35),t.qZA()(),t.TgZ(36,"div",15),t._UZ(37,"span",20),t.TgZ(38,"p",10),t._uU(39),t.qZA()(),t.TgZ(40,"div"),t._UZ(41,"span",21),t.TgZ(42,"p",10),t._uU(43),t.qZA()()(),t.TgZ(44,"div",14)(45,"div",15),t._UZ(46,"span",22),t.TgZ(47,"p",10),t._uU(48),t.qZA()(),t.TgZ(49,"div",15),t._UZ(50,"span",23),t.TgZ(51,"p",10),t._uU(52),t.qZA()(),t.TgZ(53,"div"),t._UZ(54,"span",24),t.TgZ(55,"p",10),t._uU(56),t.qZA()()(),t._UZ(57,"div",14),t.TgZ(58,"div",14)(59,"div",15),t._UZ(60,"span",25),t.TgZ(61,"p",10),t._uU(62),t.qZA()(),t.TgZ(63,"div",15),t._UZ(64,"span",26),t.TgZ(65,"p",10),t._uU(66),t.qZA()()(),t.TgZ(67,"div",14)(68,"div"),t._UZ(69,"span",27),t.TgZ(70,"p",10),t._uU(71),t.qZA()(),t.TgZ(72,"div"),t._UZ(73,"span",28),t.TgZ(74,"p",10),t._uU(75),t.qZA()()()()()()),2&e&&(t.xp6(4),t.Oqu(t.lcZ(5,21,"product_details")),t.xp6(3),t.Q6J("text","update_attachment")("iconPos","left")("icon","fa-solid fa-check")("routerLink","/key/inventory/products/update-attachment/"+o.data.id),t.xp6(2),t.Q6J("ngForOf",null==o.data?null:o.data.specs_images),t.xp6(3),t.Oqu(null==o.data?null:o.data.name),t.xp6(2),t.hij(" ",null==o.data?null:o.data.description," "),t.xp6(8),t.hij("#",null==o.data?null:o.data.code,""),t.xp6(4),t.hij("",o.data.selling_price||0," $"),t.xp6(4),t.Oqu((null==o.data2?null:o.data2.width)||"-"),t.xp6(5),t.Oqu(null==o.data||null==o.data.category?null:o.data.category.name),t.xp6(4),t.hij("",o.data.purchase_price||0," $"),t.xp6(4),t.Oqu((null==o.data2?null:o.data2.hight)||"-"),t.xp6(5),t.Oqu((null==o.data||null==o.data.unit?null:o.data.unit.name)||"-"),t.xp6(4),t.Oqu(null==o.data||null==o.data.tax?null:o.data.tax.name),t.xp6(4),t.Oqu((null==o.data2?null:o.data2.length)||"-"),t.xp6(6),t.Oqu((null==o.data2?null:o.data2.quantity_alert)||"-"),t.xp6(4),t.Oqu((null==o.data2?null:o.data2.size)||"-"),t.xp6(5),t.Oqu((null==o.data2?null:o.data2.opening_stock)||"-"),t.xp6(4),t.Oqu((null==o.data2?null:o.data2.material)||"-"))},dependencies:[u.sg,f.rH,O.r,y.Pi,y.X$],styles:[".info[_ngcontent-%COMP%]{background-color:#f8f8f8}"]}),a})(),V=(()=>{class a{constructor(e){this.ProductService=e}resolve(e){return this.ProductService.getById(e.params.id)}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(U))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var ct=r(5435);const dt=[{path:"",component:lt},{path:":id",component:pt,resolve:{product:V}},{path:"update-attachment/:id",component:(()=>{class a{constructor(e,o,l){this.productService=e,this.route=o,this.toastr=l,this.icon=c.dv,this.ProductConfig=m.s,this.unsubscribe=new p.x}ngOnInit(){this.route.data.pipe((0,G.R)(this.unsubscribe)).subscribe({next:e=>{this.data=e.product.data},error:e=>{}})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(U),t.Y36(f.gz),t.Y36(A._W))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-product-update-attachment"]],decls:1,vars:5,consts:[[3,"data","listPageRoute","listPageTitle","filesName","endPoint"]],template:function(e,o){1&e&&t._UZ(0,"app-update-attachment",0),2&e&&t.Q6J("data",o.data)("listPageRoute","/key/inventory/products")("listPageTitle","update_images_of_product")("filesName","specs_images")("endPoint",o.ProductConfig.api.updateFiles)},dependencies:[ct.f]}),a})(),resolve:{product:V}}];let ut=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[f.Bz.forChild(dt),f.Bz]}),a})();var ft=r(8096),mt=r(1019),gt=r(1890),ht=r(4413),xt=r(2115),_t=r(1471),Zt=r(1383);let vt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[u.ez,ut,_t.X,xt.u,ht.e,gt.f,mt.i,ft.J,y.aw,Zt.m]}),a})()},5304:(P,_,r)=>{r.d(_,{z:()=>d});var u=r(67),f=r(6223),n=r(9291),g=r(1732),m=r(6814),C=r(4055),Z=r(3999);function D(c,t){1&c&&n._UZ(0,"i",6)}function v(c,t){if(1&c&&(n.TgZ(0,"label"),n._uU(1),n.ALo(2,"titlecase"),n.ALo(3,"translate"),n.TgZ(4,"span",4),n.YNc(5,D,1,0,"i",5),n.qZA()()),2&c){const i=n.oxw();n.xp6(1),n.hij("",n.lcZ(2,2,n.lcZ(3,4,i.text))," "),n.xp6(4),n.Q6J("ngIf",i.control&&(null==i.control.errors?null:i.control.errors.required))}}function w(c,t){if(1&c&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&c){const i=n.oxw();n.Tol("text-danger"),n.xp6(1),n.Oqu(n.lcZ(2,3,i.object.keys(i.control.errors)[0]))}}let d=(()=>{class c extends u.t{constructor(i,p){super(),this.formGroupDirective=i,this.http=p,this.valueToUpdate=[],this.readOnly=!1,this.placeholder="",this.filterBy="",this.class="d-flex justify-content-between align-items-center",this.filter=!0,this.filterMatchMode="contains",this.object=Object}ngOnInit(){!this.data&&this.request?this.http.getWithParam(this.request,{limit:"all"}).subscribe({next:i=>{this.data=i.data,this.writeValue(this.valueToUpdate)},error:i=>{}}):this.writeValue(this.valueToUpdate)}writeValue(i){this.data&&(this.value=i)}onValueChange(i){this.onChange(i.value),this.onTouched()}}return c.\u0275fac=function(i){return new(i||c)(n.Y36(f.sg,8),n.Y36(g.O))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-multiselect"]],inputs:{value:"value",text:"text",data:"data",optionLabel:"optionLabel",optionValue:"optionValue",editable:"editable",readOnly:"readOnly",placeholder:"placeholder",filterBy:"filterBy",request:"request",class:"class",filter:"filter",filterMatchMode:"filterMatchMode"},features:[n._Bn([{provide:f.JU,useExisting:c,multi:!0},{provide:f.Cf,useExisting:c,multi:!0}]),n.qOj],decls:5,vars:18,consts:[[3,"ngClass"],[4,"ngIf"],["appendTo","body",3,"options","ngModel","placeholder","optionLabel","optionValue","filterMatchMode","display","filter","filterBy","disabled","virtualScroll","scrollHeight","itemSize","ngModelChange","onChange"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(i,p){1&i&&(n.TgZ(0,"div",0),n.YNc(1,v,6,6,"label",1),n.TgZ(2,"p-multiSelect",2),n.NdJ("ngModelChange",function(b){return p.value=b})("onChange",function(b){return p.onValueChange(b)}),n.ALo(3,"translate"),n.qZA(),n.YNc(4,w,3,5,"span",3),n.qZA()),2&i&&(n.Q6J("ngClass",p.class),n.xp6(1),n.Q6J("ngIf",p.text),n.xp6(1),n.Q6J("options",p.data)("ngModel",p.value)("placeholder",n.lcZ(3,16,p.placeholder))("optionLabel",p.optionLabel)("optionValue",p.optionValue)("filterMatchMode",p.filterMatchMode)("display","chip")("filter",p.filter)("filterBy",p.optionLabel)("disabled",p.readOnly)("virtualScroll",!0)("scrollHeight","200px")("itemSize",30),n.xp6(2),n.Q6J("ngIf",p.control&&p.control.errors&&(p.control.touched||p.formGroupDirective.submitted)))},dependencies:[m.mk,m.O5,f.JJ,f.On,C.NU,m.rS,Z.X$],styles:[".text-danger[_ngcontent-%COMP%]{font-size:14px}"]}),c})()},5253:(P,_,r)=>{r.d(_,{R:()=>w});var u=r(67),f=r(6223),n=r(9291),g=r(6814),m=r(6218),C=r(3999);function Z(d,c){1&d&&n._UZ(0,"i",6)}function D(d,c){if(1&d&&(n.TgZ(0,"label"),n._uU(1),n.ALo(2,"titlecase"),n.ALo(3,"translate"),n.TgZ(4,"span",4),n.YNc(5,Z,1,0,"i",5),n.qZA()()),2&d){const t=n.oxw();n.xp6(1),n.hij("",n.lcZ(2,2,n.lcZ(3,4,t.text))," "),n.xp6(4),n.Q6J("ngIf",t.control&&(null==t.control.errors?null:t.control.errors.required))}}function v(d,c){if(1&d&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&d){const t=n.oxw();n.Tol("text-danger"),n.xp6(1),n.Oqu(t.object.keys(t.control.errors)[0])}}let w=(()=>{class d extends u.t{constructor(t){super(),this.formGroupDirective=t,this.placeholder="",this.rows="2",this.cols="",this.readOnly=!1,this.class="d-flex flex-column justify-content-between",this.object=Object}writeValue(t){this.value=t}onValueChange(t){this.onChange(t.target.value),this.onTouched()}}return d.\u0275fac=function(t){return new(t||d)(n.Y36(f.sg,8))},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-textarea"]],inputs:{value:"value",text:"text",placeholder:"placeholder",rows:"rows",cols:"cols",readOnly:"readOnly",class:"class",type:"type"},features:[n._Bn([{provide:f.JU,useExisting:d,multi:!0},{provide:f.Cf,useExisting:d,multi:!0}]),n.qOj],decls:4,vars:8,consts:[[3,"ngClass"],[4,"ngIf"],["pInputTextarea","",3,"rows","cols","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0),n.YNc(1,D,6,6,"label",1),n.TgZ(2,"textarea",2),n.NdJ("ngModelChange",function(T){return i.value=T})("input",function(T){return i.onValueChange(T)}),n.qZA(),n.YNc(3,v,2,3,"span",3),n.qZA()),2&t&&(n.Q6J("ngClass",i.class),n.xp6(1),n.Q6J("ngIf",i.text),n.xp6(1),n.Q6J("rows",i.rows)("cols",i.cols)("ngModel",i.value)("placeholder",i.placeholder)("disabled",i.readOnly),n.xp6(1),n.Q6J("ngIf",i.control&&i.control.errors&&(i.control.touched||i.formGroupDirective.submitted)))},dependencies:[g.mk,g.O5,f.Fj,f.JJ,f.On,m.g,g.rS,C.X$],styles:[".text-danger[_ngcontent-%COMP%]{font-size:14px}"]}),d})()},8718:(P,_,r)=>{r.d(_,{x:()=>u});const u={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}}}]);