"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[1519],{1519:(q,_,a)=>{a.r(_),a.d(_,{ProductsModule:()=>Zt});var p=a(6814),d=a(8209),i=a(5861),m=function(n){return n.create="Create Product",n.view="View Product",n.edit="Edit Product",n.delete="Delete Product",n}(m||{}),c=a(3058);const Z=n=>{return{cols:[{field:"code",label:"code",class:""},{field:"name",label:"name",class:""},{field:"quantity",label:"quantity",class:"",format:l=>l?.quantity?l?.quantity:"0"},{field:"selling_price",label:"selling_price",class:"",format:l=>l?.selling_price?l?.selling_price:"-"},{field:"category",label:"category",class:"",format:l=>l.category?l.category.name:"-"},{field:"material",label:"material",class:"",format:l=>l?.material?l.material:"-"},{label:"action",actions:[{id:m.delete,icon:"fa-solid fa-person-harassing",class:"main-color",fun:(l=(0,i.Z)(function*(e){return yield n.productService.openDialogToAssignProduct(e)}),function(o){return l.apply(this,arguments)})},{id:m.delete,icon:"trash",class:"main-color",fun:function(){var l=(0,i.Z)(function*(e){return yield n.productService.delete(e)});return function(o){return l.apply(this,arguments)}}()},{id:m.delete,icon:"eye",route:"/",class:"main-color"},{id:m.edit,icon:"pen-to-square",class:"main-color",fun:function(){var l=(0,i.Z)(function*(e){return yield n.productService.openDialogToUpdateProduct(e)});return function(o){return l.apply(this,arguments)}}()}]}],Request:c.s.api.get};var l};var f=a(5946),T=a(6924),F=a(8718),v=a(5219),t=a(9291),s=a(6223),y=a(8645),b=a(336),M=a(1494),L=a(4605),j=a(7553),S=a(7619),A=a(8763),P=a(5118),N=a(1771),Q=a(8614),E=a(3838),V=a(5253),R=a(5304),O=a(4896),J=a(4779),C=a(3999);function B(n,l){if(1&n&&(t.TgZ(0,"p",35),t._uU(1),t.qZA()),2&n){const e=l.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}const U=function(){return{type:"number",length:1}};let I=(()=>{class n{constructor(e,o,r,g,x){this.fb=e,this.toastr=o,this.config=r,this.dialogRef=g,this.productService=x,this.unsubscribe=new y.x,this.formGroup=this.initForm(),this.brandConfig=b.r,this.SupplierConfig=L.h,this.unitTypeConfig=M.h,this.taxConfig=j.F,this.categoriesConfig=S.t,this.values=new FormData,this.formData=new FormData,this.billingCities=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){}initForm(){return this.fb.group({code:[""],id:[Number],name:["",[s.kI.required]],description:[""],brand_id:[""],suppliers:[""],category_id:[""],unit_id:[""],specs:this.fb.group({height:[""],width:[""],length:[""],material:[""],size:[""],quantity:["",s.kI.pattern("^[0-9]*$")],selling_price:["",[s.kI.pattern("^[0-9 .]*$")]],purchase_price:["",[s.kI.pattern("^[0-9 .]*$")]],opening_stock:["",[s.kI.required,s.kI.pattern("^[0-9 .]*$")]],quantity_alert:["",[s.kI.required,s.kI.pattern("^[0-9 .]*$")]]}),taxes_id:[""]})}onFileSelected(e){if(e.target.files[0])for(const[o,r]of Object.entries(e.target.files))this.formData.set(`specs.images[${o}]`,e.target.files[o])}convertSupFormGroupToFormData(e){Object.keys(e.controls).forEach(o=>{const r=this.formGroup.get("specs."+o);this.formData.append("specs."+o,r?.value)})}convertFormGroupToFormData(){Object.keys(this.formGroup.controls).forEach(o=>{const r=this.formGroup.get(o);r instanceof s.cw?this.convertSupFormGroupToFormData(r):this.formData.append(o,r?.value)}),this.formData.delete("suppliers"),this.formGroup.get("suppliers")?.value.map((o,r)=>{this.formData.set(`suppliers[${r}]`,o)})}accept(){console.log(this.formGroup),this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.convertFormGroupToFormData(),this.config.data.data?this.productService.update(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}):this.productService.create(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}))}reject(e){this.dialogRef.close(e)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,code:this.config.data.data?.code,name:this.config.data.data.name,description:this.config.data.data?.description,category_id:this.config.data.data?.category_id,unit_id:this.config.data.data?.unit_id,taxes_id:this.config.data.data?.tax?.id,brand_id:this.config.data.data?.brand?.id,suppliers:this.config.data.data?.suppliers.map(e=>e.id)}),this.formGroup.get("specs")?.patchValue({image:this.config.data.data?.specs?.image,height:this.config.data.data?.specs?.height,width:this.config.data.data?.specs?.width,length:this.config.data.data?.specs?.length,material:this.config.data.data?.specs?.material,size:this.config.data.data?.specs?.size,quantity:this.config.data.data?.specs?.quantity,opening_stock:this.config.data.data?.specs?.opening_stock,quantity_alert:this.config.data.data?.specs?.quantity_alert,selling_price:this.config.data.data?.selling_price,purchase_price:this.config.data.data?.purchase_price})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.qu),t.Y36(A._W),t.Y36(P.S),t.Y36(P.E7),t.Y36(D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-form"]],decls:58,vars:99,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["text","code","formControlName","code","ngDefaultControl","","placeholder","",3,"type"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["text","description","formControlName","description","ngDefaultControl","","placeholder","",3,"type"],["filterBy","name","ngDefaultControl","","formControlName","suppliers",3,"text","filter","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","brand_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","unit_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","taxes_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","category_id",3,"text","request","optionLabel","optionValue","placeholder"],["formGroupName","specs"],["type","type","formControlName","height","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","width","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","length","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","material","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","size","ngDefaultControl","","placeholder","",3,"text"],["text","quantity","formControlName","quantity","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","opening_stock","formControlName","opening_stock","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","quantity_alert","formControlName","quantity_alert","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","selling_price","formControlName","selling_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","purchase_price","formControlName","purchase_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["label","image","ngDefaultControl","",3,"accept","onValueChange"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return o.accept()}),t.YNc(11,B,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"div",11),t._UZ(15,"app-text",12),t.qZA(),t.TgZ(16,"div",11),t._UZ(17,"app-text",13),t.qZA(),t.TgZ(18,"div",11),t._UZ(19,"app-textarea",14),t.qZA(),t.TgZ(20,"div",11),t._UZ(21,"app-multiselect",15),t.qZA(),t.TgZ(22,"div",11),t._UZ(23,"app-dropdown",16),t.qZA(),t.TgZ(24,"div",11),t._UZ(25,"app-dropdown",17),t.qZA(),t.TgZ(26,"div",11),t._UZ(27,"app-dropdown",18),t.qZA(),t.TgZ(28,"div",11),t._UZ(29,"app-dropdown",19),t.qZA(),t.TgZ(30,"div",20)(31,"div",11),t._UZ(32,"app-text",21),t.qZA(),t.TgZ(33,"div",11),t._UZ(34,"app-text",22),t.qZA(),t.TgZ(35,"div",11),t._UZ(36,"app-text",23),t.qZA(),t.TgZ(37,"div",11),t._UZ(38,"app-text",24),t.qZA(),t.TgZ(39,"div",11),t._UZ(40,"app-text",25),t.qZA(),t.TgZ(41,"div",11),t._UZ(42,"app-text",26),t.qZA(),t.TgZ(43,"div",11),t._UZ(44,"app-text",27),t.qZA(),t.TgZ(45,"div",11),t._UZ(46,"app-text",28),t.qZA(),t.TgZ(47,"div",11),t._UZ(48,"app-text",29),t.qZA(),t.TgZ(49,"div",11),t._UZ(50,"app-text",30),t.qZA(),t.TgZ(51,"div",11)(52,"app-file-upload",31),t.NdJ("onValueChange",function(g){return o.onFileSelected(g)}),t.qZA()()()(),t.TgZ(53,"div",32)(54,"div",33)(55,"app-button",34),t.NdJ("click",function(){return o.reject(!1)}),t.qZA()(),t.TgZ(56,"div",33)(57,"app-button",34),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e){let r;t.xp6(8),t.Oqu(t.lcZ(9,90,null!==(r=o.config.header)&&void 0!==r?r:"")),t.xp6(2),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,92,o.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol(""),t.Q6J("text","supplier")("filter",!0)("request",o.SupplierConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","brand")("request",o.brandConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","unit")("request",o.unitTypeConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","tax")("request",o.taxConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","category")("request",o.categoriesConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","category"),t.xp6(3),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","height"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","width"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","length"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","material"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","size"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(94,U))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(95,U))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(96,U))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(97,U))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(98,U))("type","text"),t.xp6(2),t.Q6J("accept",".jpg,.jpeg,.png"),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==o.config.data?null:o.config.data.acceptLabel)}},dependencies:[p.sg,N.U,s.Fj,s.JJ,s.JL,s.sg,s.u,s.x0,Q.T,E.J,V.R,R.z,O.Y,J.r,p.Nd,C.X$]}),n})();function W(n,l){if(1&n&&(t.TgZ(0,"p",30),t._uU(1),t.qZA()),2&n){const e=l.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}const w=function(){return{type:"number",length:1}};let z=(()=>{class n{constructor(e,o,r,g,x){this.fb=e,this.toastr=o,this.config=r,this.dialogRef=g,this.productService=x,this.unsubscribe=new y.x,this.formGroup=this.initForm(),this.brandConfig=b.r,this.SupplierConfig=L.h,this.unitTypeConfig=M.h,this.taxConfig=j.F,this.categoriesConfig=S.t,this.formData=new FormData,this.default_specs=[{name:"height"},{name:"width"},{name:"length"},{name:"material"},{name:"size"}],this.billingCities=[],this.config.data?.data&&(this.formData.set("id",this.config.data?.data.id),console.log(this.config.data?.data))}initForm(){return this.fb.group({id:[Number],code:[""],default_spec_name:[""],specs:this.fb.group({height:[""],width:[""],length:[""],material:[""],size:[""],quantity:["",s.kI.pattern("^[0-9]*$")],selling_price:["",[s.kI.pattern("^[0-9 .]*$")]],purchase_price:["",[s.kI.pattern("^[0-9 .]*$")]],opening_stock:["",[s.kI.required,s.kI.pattern("^[0-9 .]*$")]],quantity_alert:["",[s.kI.required,s.kI.pattern("^[0-9 .]*$")]],taxes_id:[""]})})}onFileSelected(e){if(e.target.files[0])for(const[o,r]of Object.entries(e.target.files))this.formData.set(`specs.images[${o}]`,e.target.files[o])}convertSupFormGroupToFormData(e){Object.keys(e.controls).forEach(o=>{const r=this.formGroup.get("specs."+o);this.formData.append("specs."+o,r?.value)})}convertFormGroupToFormData(){Object.keys(this.formGroup.controls).forEach(e=>{const o=this.formGroup.get(e);o instanceof s.cw?this.convertSupFormGroupToFormData(o):this.formData.append(e,o?.value)})}reject(e){this.dialogRef.close(e)}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.convertFormGroupToFormData(),this.productService.assign(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.qu),t.Y36(A._W),t.Y36(P.S),t.Y36(P.E7),t.Y36(D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-assign-product"]],decls:49,vars:73,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["type","type","formControlName","code","ngDefaultControl","","placeholder","",3,"text"],["ngDefaultControl","","formControlName","default_spec_name",3,"text","data","optionLabel","optionValue","placeholder"],["formGroupName","specs"],["type","type","formControlName","height","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","width","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","length","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","material","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","size","ngDefaultControl","","placeholder","",3,"text"],["text","quantity","formControlName","quantity","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","selling_price","formControlName","selling_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","purchase_price","formControlName","purchase_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","opening_stock","formControlName","opening_stock","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","quantity_alert","formControlName","quantity_alert","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","taxes_id",3,"text","request","optionLabel","optionValue","placeholder"],["label","image",3,"accept","onValueChange"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"titlecase"),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"app-form",8),t.NdJ("onSubmit",function(){return o.accept()}),t.YNc(12,W,2,1,"p",9),t.ALo(13,"keyvalue"),t.TgZ(14,"div",10)(15,"div",11),t._UZ(16,"app-text",12),t.qZA(),t.TgZ(17,"div",11),t._UZ(18,"app-dropdown",13),t.qZA(),t.TgZ(19,"div",14)(20,"div",11),t._UZ(21,"app-text",15),t.qZA(),t.TgZ(22,"div",11),t._UZ(23,"app-text",16),t.qZA(),t.TgZ(24,"div",11),t._UZ(25,"app-text",17),t.qZA(),t.TgZ(26,"div",11),t._UZ(27,"app-text",18),t.qZA(),t.TgZ(28,"div",11),t._UZ(29,"app-text",19),t.qZA(),t.TgZ(30,"div",11),t._UZ(31,"app-text",20),t.qZA(),t.TgZ(32,"div",11),t._UZ(33,"app-text",21),t.qZA(),t.TgZ(34,"div",11),t._UZ(35,"app-text",22),t.qZA(),t.TgZ(36,"div",11),t._UZ(37,"app-text",23),t.qZA(),t.TgZ(38,"div",11),t._UZ(39,"app-text",24),t.qZA(),t.TgZ(40,"div",11),t._UZ(41,"app-dropdown",25),t.qZA(),t.TgZ(42,"div",11)(43,"app-file-upload",26),t.NdJ("onValueChange",function(g){return o.onFileSelected(g)}),t.qZA()()()(),t.TgZ(44,"div",27)(45,"div",28)(46,"app-button",29),t.NdJ("click",function(){return o.reject(!1)}),t.qZA()(),t.TgZ(47,"div",28)(48,"app-button",29),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e&&(t.xp6(8),t.Oqu(t.lcZ(9,62,t.lcZ(10,64,"assign_product"))),t.xp6(3),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(13,66,o.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","code"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","spec name")("data",o.default_specs)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(3),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","height"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","width"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","length"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","material"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","size"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(68,w))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(69,w))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(70,w))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(71,w))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(72,w))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","tax")("request",o.taxConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Q6J("accept",".jpg,.jpeg,.png"),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text","assign"))},dependencies:[p.sg,N.U,s.Fj,s.JJ,s.JL,s.sg,s.u,s.x0,Q.T,E.J,O.Y,J.r,p.rS,p.Nd,C.X$]}),n})();var $=a(1732),K=a(3562);let D=(()=>{class n{constructor(e,o,r){this.http=e,this.dynamicDialog=o,this.toaster=r}getProducts(e){return this.http.get(c.s.api.get)}openDialogToCreateUnitType(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_product",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},I)}create(e){return this.http.post(c.s.api.create,e)}delete(e){var o=this;return(0,i.Z)(function*(){const r={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e},name:"name"},width:"500px",height:"auto"};if(yield o.dynamicDialog.confirm(r))try{const x=yield o.http.delete(c.s.api.delete+e.id).toPromise();return o.toaster.success(x.message),x}catch(x){throw o.toaster.error(x.error.message),x}return!1})()}openDialogToUpdateProduct(e){var o=this;return(0,i.Z)(function*(){const r={showHeader:!1,header:"update_product",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"500px",height:"auto"};return yield o.dynamicDialog.showDialogWithComponent(r,I)})()}update(e){return this.http.post(c.s.api.update+e.get("id"),e)}import(e){return this.http.post(c.s.api.import,e)}exportExample(){return this.http.get(c.s.api.exportExample)}openDialogToAssignProduct(e){const o={showHeader:!1,header:"assign_product",data:{acceptLabel:"assign",rejectLabel:"Cancel",data:{...e}},width:"500px",height:"auto"};return this.dynamicDialog.showDialogWithComponent(o,z)}assign(e){return this.http.post(c.s.api.assign+e.get("id"),e)}getById(e){return this.http.get(c.s.api.getById+e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG($.O),t.LFG(K.U),t.LFG(A._W))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var X=a(2377),H=a(359),tt=a(5077),et=a(4811),ot=a(8275);function nt(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"div",17)(1,"button",18),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ul",19)(5,"li",20),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.exportExample())}),t._uU(6),t.ALo(7,"titlecase"),t.ALo(8,"translate"),t.qZA()()()}2&n&&(t.xp6(2),t.hij(" ",t.lcZ(3,2,"export")," "),t.xp6(4),t.hij(" ",t.lcZ(7,4,t.lcZ(8,6,"example"))," "))}function at(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"app-button",21),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.openDialogToCreate())}),t.qZA()}if(2&n){const e=t.oxw();t.Tol("btn-filter "),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}function rt(n,l){if(1&n&&(t.TgZ(0,"div")(1,"span",29),t._uU(2),t.qZA(),t.TgZ(3,"span",29),t._uU(4),t.qZA()()),2&n){const e=l.$implicit;t.xp6(2),t.hij(" row :",e.row_number," "),t.xp6(2),t.Oqu(e.error)}}function it(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"div",22),t.YNc(1,rt,5,2,"div",23),t.TgZ(2,"app-file-upload",24),t.NdJ("onValueChange",function(r){t.CHM(e);const g=t.oxw();return t.KtG(g.onFileSelected(r))}),t.qZA(),t.TgZ(3,"div",25)(4,"app-button",26),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.import())}),t._UZ(5,"i",27),t.qZA(),t.TgZ(6,"app-button",28),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.closeSectionToImport())}),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.importErrors),t.xp6(1),t.Q6J("multiple",!1)("accept",".csv,.xls,.xlsx")("label","import"),t.xp6(2),t.Q6J("text","save")("loading",e.isLoading),t.xp6(2),t.Q6J("text","cancel")}}const G=function(n){return[n]};let lt=(()=>{class n{constructor(e,o,r){this.productService=e,this.toastr=o,this.translateService=r,this.showImportForm=!1,this.importErrors=[],this.fileName="",this.values=new FormData,this.isLoading=!1,this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"purchase_price",field:"purchase_price"},{label:"selling_price",field:"selling_price"},{label:"creator",field:"creator_id"},{label:"quantity",field:"quantity"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:f.q.asc,field:f.q.asc},{label:f.q.desc,field:f.q.desc}]}],this.filtersConfig=[{field:"search",label:"search",type:T.W.TEXT,placeholder:"search"},{field:"creator_id",label:"created_by",type:T.W.SELECT,options:{value:"id",label:"name"},request:F.x.api.get,placeholder:"select"},{field:"from",label:"from",type:T.W.DATE},{field:"to",label:"to",type:T.W.DATE}],this.permissions=m,this.tableConfig=Z(this),this.icon=v.dv}openDialogToCreate(){var e=this;return(0,i.Z)(function*(){(yield e.productService.openDialogToCreateUnitType())&&(e.tableConfig=Z(e))})()}openSectionToImport(){this.showImportForm=!0}closeSectionToImport(){this.fileName="",this.showImportForm=!1,this.importErrors=[]}exportExample(){this.productService.exportExample().subscribe(e=>{window.open(e.file_path)})}onFileSelected(e){e.target.files[0]&&(this.fileName=e.target.files[0].name,this.values.set("file",e.target.files[0]))}import(){this.fileName?(this.isLoading=!0,this.productService.import(this.values).subscribe(e=>{this.toastr.success(e.message),this.isLoading=!1,this.fileName="",this.closeSectionToImport(),this.tableConfig=Z(this)},e=>{this.isLoading=!1,this.importErrors=e.error.errors,e.error.message&&this.toastr.error(e.error.message)})):this.toastr.error(this.translateService.instant("select_file"))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(D),t.Y36(A._W),t.Y36(C.sK))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list"]],decls:20,vars:19,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex","gap-2"],["class","dropdown",4,"hasPermissions"],[3,"text","click"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],["class","import",4,"ngIf"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table","mt-2"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[1,"dropdown"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-cancel","dropdown-toggle"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],[1,"pointer","dropdown-item",3,"click"],[3,"text","icon","iconPos","click"],[1,"import"],[4,"ngFor","ngForOf"],[3,"multiple","accept","label","onValueChange"],[1,"d-flex","gap-2","align-items-center","mt-3"],[3,"text","loading","click"],[1,"fa-solid","fa-check","px-2"],[1,"btn-cancel",3,"text","click"],[1,"text-error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,nt,9,8,"div",4),t.TgZ(7,"app-button",5),t.NdJ("click",function(){return o.openSectionToImport()}),t.qZA(),t.YNc(8,at,1,5,"app-button",6),t.qZA()(),t.YNc(9,it,7,7,"div",7),t.TgZ(10,"div",8),t._UZ(11,"ukt-sort",9,10)(13,"ukt-filter",11,12),t.qZA(),t.TgZ(15,"div",13),t._UZ(16,"app-table",14),t.qZA(),t.TgZ(17,"div",15),t._UZ(18,"ukt-pagination",null,16),t.qZA()()),2&e){const r=t.MAs(12),g=t.MAs(14),x=t.MAs(19);t.xp6(3),t.Oqu(t.lcZ(4,13,"list_of_products")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(15,G,o.permissions.create)),t.xp6(1),t.Tol("btn-cancel"),t.Q6J("text","import"),t.xp6(1),t.Q6J("hasPermissions",t.VKq(17,G,o.permissions.create)),t.xp6(1),t.Q6J("ngIf",o.showImportForm),t.xp6(2),t.Q6J("SortConfig",o.sortConfig),t.xp6(2),t.Q6J("config",o.filtersConfig),t.xp6(3),t.Q6J("tableConfig",o.tableConfig)("pagination",x)("filter",g)("sort",r)}},dependencies:[p.sg,p.O5,X.a,H.Q,O.Y,J.r,tt.z,et.x,ot.z,p.rS,C.X$],styles:[".dropdown[_ngcontent-%COMP%]{background-color:transparent!important}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent!important;border:1px solid var(--mainColor);font-size:1.5rem;padding:6px}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.5rem}.import[_ngcontent-%COMP%]{padding:20px;border:2px solid var(--mainColor);border-radius:8px;margin:10px 0}"]}),n})();var k=a(9773);let st=(()=>{class n{constructor(e,o,r){this.productService=e,this.route=o,this.toastr=r,this.icon=v.dv,this.unsubscribe=new y.x}ngOnInit(){this.route.data.pipe((0,k.R)(this.unsubscribe)).subscribe({next:e=>{this.data=e.product.data},error:e=>{}})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(D),t.Y36(d.gz),t.Y36(A._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-show-product"]],decls:77,vars:23,consts:[[1,"p-5","bg-white","mt-3","rounded-5"],[1,"d-flex"],["routerLink","/key/inventory/products",1,"pi","pi-arrow-left","px-3","pt-2",2,"font-size","2rem"],[1,"fw-bold","fs-1"],[1,"d-flex","justify-content-end"],[1,"btn-new",3,"text","iconPos","icon","routerLink"],[1,"row","mt-5","px-5"],[1,"col-md-4"],["width","100%","alt","product image",3,"src"],[1,"col-md-8"],[1,"fs-3","fw-bold"],[1,"fs-4"],[1,"p-5","info","rounded-5","mt-4"],["translate","product_info",1,"fs-3","fw-bold","mb-4"],[1,"row"],[1,"col-lg-2"],[1,"mb-5"],["translate","code",1,"fs-3","fw-bold"],["translate","selling_price",1,"fs-3","fw-bold"],["translate","width",1,"fs-3","fw-bold"],["translate","category",1,"fs-3","fw-bold"],["translate","purchase_price",1,"fs-3","fw-bold"],["translate","hight",1,"fs-3","fw-bold"],["translate","unit",1,"fs-3","fw-bold"],["translate","taxes",1,"fs-3","fw-bold"],["translate","length",1,"fs-3","fw-bold"],["translate","quantity_alert",1,"fs-3","fw-bold"],["translate","size",1,"fs-3","fw-bold"],["translate","opening_stock",1,"fs-3","fw-bold"],["translate","material",1,"fs-3","fw-bold"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"i",2),t.TgZ(3,"h2",3),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"div",4),t._UZ(7,"app-button",5),t.qZA(),t.TgZ(8,"div",6)(9,"div",7),t._UZ(10,"img",8),t.qZA(),t.TgZ(11,"div",9)(12,"h3",10),t._uU(13),t.qZA(),t.TgZ(14,"p",11),t._uU(15),t.qZA()()(),t.TgZ(16,"div",12),t._UZ(17,"h3",13),t.TgZ(18,"div",14)(19,"div",15)(20,"div",16),t._UZ(21,"span",17),t.TgZ(22,"p",11),t._uU(23),t.qZA()(),t.TgZ(24,"div",16),t._UZ(25,"span",18),t.TgZ(26,"p",11),t._uU(27),t.qZA()(),t.TgZ(28,"div"),t._UZ(29,"span",19),t.TgZ(30,"p",11),t._uU(31),t.qZA()()(),t.TgZ(32,"div",15)(33,"div",16),t._UZ(34,"span",20),t.TgZ(35,"p",11),t._uU(36),t.qZA()(),t.TgZ(37,"div",16),t._UZ(38,"span",21),t.TgZ(39,"p",11),t._uU(40),t.qZA()(),t.TgZ(41,"div"),t._UZ(42,"span",22),t.TgZ(43,"p",11),t._uU(44),t.qZA()()(),t.TgZ(45,"div",15)(46,"div",16),t._UZ(47,"span",23),t.TgZ(48,"p",11),t._uU(49),t.qZA()(),t.TgZ(50,"div",16),t._UZ(51,"span",24),t.TgZ(52,"p",11),t._uU(53),t.qZA()(),t.TgZ(54,"div"),t._UZ(55,"span",25),t.TgZ(56,"p",11),t._uU(57),t.qZA()()(),t._UZ(58,"div",15),t.TgZ(59,"div",15)(60,"div",16),t._UZ(61,"span",26),t.TgZ(62,"p",11),t._uU(63),t.qZA()(),t.TgZ(64,"div",16),t._UZ(65,"span",27),t.TgZ(66,"p",11),t._uU(67),t.qZA()()(),t.TgZ(68,"div",15)(69,"div"),t._UZ(70,"span",28),t.TgZ(71,"p",11),t._uU(72),t.qZA()(),t.TgZ(73,"div"),t._UZ(74,"span",29),t.TgZ(75,"p",11),t._uU(76),t.qZA()()()()()()),2&e&&(t.xp6(4),t.Oqu(t.lcZ(5,21,"product_details")),t.xp6(3),t.Q6J("text","update_attachment")("iconPos","left")("icon","fa-solid fa-check")("routerLink","/key/inventory/products/update-attachment/"+o.data.id),t.xp6(3),t.Q6J("src",null==o.data||null==o.data.specs_images[0]?null:o.data.specs_images[0].url,t.LSH),t.xp6(3),t.Oqu(null==o.data?null:o.data.name),t.xp6(2),t.hij(" ",null==o.data?null:o.data.description," "),t.xp6(8),t.hij("#",null==o.data?null:o.data.code,""),t.xp6(4),t.hij("",o.data.selling_price||0," $"),t.xp6(4),t.Oqu((null==o.data||null==o.data.specs?null:o.data.specs.width)||"-"),t.xp6(5),t.Oqu(null==o.data||null==o.data.category?null:o.data.category.name),t.xp6(4),t.hij("",o.data.purchase_price||0," $"),t.xp6(4),t.Oqu((null==o.data||null==o.data.specs?null:o.data.specs.hight)||"-"),t.xp6(5),t.Oqu((null==o.data||null==o.data.unit?null:o.data.unit.name)||"-"),t.xp6(4),t.Oqu(null==o.data||null==o.data.tax?null:o.data.tax.name),t.xp6(4),t.Oqu((null==o.data||null==o.data.spec?null:o.data.spec.length)||"-"),t.xp6(6),t.Oqu((null==o.data||null==o.data.spec?null:o.data.spec.quantity_alert)||"-"),t.xp6(4),t.Oqu((null==o.data||null==o.data.spec?null:o.data.spec.size)||"-"),t.xp6(5),t.Oqu((null==o.data||null==o.data.spec?null:o.data.spec.opening_stock)||"-"),t.xp6(4),t.Oqu((null==o.data||null==o.data.spec?null:o.data.spec.material)||"-"))},dependencies:[d.rH,J.r,C.Pi,C.X$],styles:[".info[_ngcontent-%COMP%]{background-color:#f8f8f8}"]}),n})(),Y=(()=>{class n{constructor(e){this.ProductService=e}resolve(e){return this.ProductService.getById(e.params.id)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(D))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var pt=a(5435);const ct=[{path:"",component:lt},{path:":id",component:st,resolve:{product:Y}},{path:"update-attachment/:id",component:(()=>{class n{constructor(e,o,r){this.productService=e,this.route=o,this.toastr=r,this.icon=v.dv,this.ProductConfig=c.s,this.unsubscribe=new y.x}ngOnInit(){this.route.data.pipe((0,k.R)(this.unsubscribe)).subscribe({next:e=>{this.data=e.product.data},error:e=>{}})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(D),t.Y36(d.gz),t.Y36(A._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-update-attachment"]],decls:1,vars:5,consts:[[3,"data","listPageRoute","listPageTitle","filesName","endPoint"]],template:function(e,o){1&e&&t._UZ(0,"app-update-attachment",0),2&e&&t.Q6J("data",o.data)("listPageRoute","/key/inventory/products")("listPageTitle","update_images_of_product")("filesName","specs_images")("endPoint",o.ProductConfig.api.updateFiles)},dependencies:[pt.f]}),n})(),resolve:{product:Y}}];let dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(ct),d.Bz]}),n})();var ut=a(8096),ft=a(1019),mt=a(1890),gt=a(4413),ht=a(2115),xt=a(1471),_t=a(1383);let Zt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,dt,xt.X,ht.u,gt.e,mt.f,ft.i,ut.J,C.aw,_t.m]}),n})()},1771:(q,_,a)=>{a.d(_,{U:()=>m});var p=a(9291),d=a(6223);const i=["*"];let m=(()=>{class c{constructor(){this.onSubmit=new p.vpe}ngOnChanges(f){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const f=this.getFormData();this.onSubmit.emit(f)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return c.\u0275fac=function(f){return new(f||c)},c.\u0275cmp=p.Xpm({type:c,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[p.TTD],ngContentSelectors:i,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(f,h){1&f&&(p.F$t(),p.TgZ(0,"form",0),p.NdJ("ngSubmit",function(){return h.submit()}),p.Hsn(1),p.qZA()),2&f&&p.Q6J("formGroup",h.formGroup)},dependencies:[d._Y,d.JL,d.sg]}),c})()},5253:(q,_,a)=>{a.d(_,{R:()=>F});var p=a(67),d=a(6223),i=a(9291),m=a(6814),c=a(6218),Z=a(3999);function f(u,v){1&u&&i._UZ(0,"i",6)}function h(u,v){if(1&u&&(i.TgZ(0,"label"),i._uU(1),i.ALo(2,"titlecase"),i.ALo(3,"translate"),i.TgZ(4,"span",4),i.YNc(5,f,1,0,"i",5),i.qZA()()),2&u){const t=i.oxw();i.xp6(1),i.hij("",i.lcZ(2,2,i.lcZ(3,4,t.text))," "),i.xp6(4),i.Q6J("ngIf",t.control&&(null==t.control.errors?null:t.control.errors.required))}}function T(u,v){if(1&u&&(i.TgZ(0,"span"),i._uU(1),i.qZA()),2&u){const t=i.oxw();i.Tol("text-danger"),i.xp6(1),i.Oqu(t.object.keys(t.control.errors)[0])}}let F=(()=>{class u extends p.t{constructor(t){super(),this.formGroupDirective=t,this.placeholder="",this.rows="2",this.cols="",this.readOnly=!1,this.class="d-flex flex-column justify-content-between",this.object=Object}writeValue(t){this.value=t}onValueChange(t){this.onChange(t.target.value),this.onTouched()}}return u.\u0275fac=function(t){return new(t||u)(i.Y36(d.sg,8))},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-textarea"]],inputs:{value:"value",text:"text",placeholder:"placeholder",rows:"rows",cols:"cols",readOnly:"readOnly",class:"class",type:"type"},features:[i._Bn([{provide:d.JU,useExisting:u,multi:!0},{provide:d.Cf,useExisting:u,multi:!0}]),i.qOj],decls:4,vars:8,consts:[[3,"ngClass"],[4,"ngIf"],["pInputTextarea","",3,"rows","cols","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(t,s){1&t&&(i.TgZ(0,"div",0),i.YNc(1,h,6,6,"label",1),i.TgZ(2,"textarea",2),i.NdJ("ngModelChange",function(b){return s.value=b})("input",function(b){return s.onValueChange(b)}),i.qZA(),i.YNc(3,T,2,3,"span",3),i.qZA()),2&t&&(i.Q6J("ngClass",s.class),i.xp6(1),i.Q6J("ngIf",s.text),i.xp6(1),i.Q6J("rows",s.rows)("cols",s.cols)("ngModel",s.value)("placeholder",s.placeholder)("disabled",s.readOnly),i.xp6(1),i.Q6J("ngIf",s.control&&s.control.errors&&(s.control.touched||s.formGroupDirective.submitted)))},dependencies:[m.mk,m.O5,d.Fj,d.JJ,d.On,c.g,m.rS,Z.X$]}),u})()},8718:(q,_,a)=>{a.d(_,{x:()=>p});const p={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}},9773:(q,_,a)=>{a.d(_,{R:()=>c});var p=a(9360),d=a(8251),i=a(4829),m=a(2420);function c(Z){return(0,p.e)((f,h)=>{(0,i.Xf)(Z).subscribe((0,d.x)(h,()=>h.complete(),m.Z)),!h.closed&&f.subscribe(h)})}}}]);