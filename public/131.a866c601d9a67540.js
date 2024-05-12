"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[131],{131:(A,_,i)=>{i.r(_),i.d(_,{ProductsModule:()=>ht});var a=i(6814),u=i(8209),r=i(5861),m=function(n){return n.create="Create Product",n.view="View Product",n.edit="Edit Product",n.delete="Delete Product",n}(m||{}),d=i(3058);const x=n=>{return{cols:[{field:"code",label:"code",class:""},{field:"name",label:"name",class:""},{field:"quantity",label:"quantity",class:"",format:p=>p?.quantity?p?.quantity:"0"},{field:"selling_price",label:"selling_price",class:"",format:p=>p?.selling_price?p?.selling_price:"-"},{field:"category",label:"category",class:"",format:p=>p.category?p.category.name:"-"},{field:"material",label:"material",class:"",format:p=>p?.material?p.material:"-"},{label:"action",actions:[{id:m.delete,icon:"fa-solid fa-person-harassing",class:"main-color",fun:(p=(0,r.Z)(function*(e){return yield n.productService.openDialogToAssignProduct(e)}),function(o){return p.apply(this,arguments)})},{id:m.delete,icon:"trash",class:"main-color",fun:function(){var p=(0,r.Z)(function*(e){return yield n.productService.delete(e)});return function(o){return p.apply(this,arguments)}}()},{id:m.delete,icon:"eye",route:"/",class:"main-color"},{id:m.edit,icon:"pen-to-square",class:"main-color",fun:function(){var p=(0,r.Z)(function*(e){return yield n.productService.openDialogToUpdateProduct(e)});return function(o){return p.apply(this,arguments)}}()}]}],Request:d.s.api.get};var p};var f=i(5946),C=i(6924),D=i(8718),g=i(5219),t=i(9291),l=i(6223),y=i(8645),T=i(336),P=i(1494),L=i(4605),j=i(7553),E=i(7619),U=i(8763),M=i(5118),N=i(1771),I=i(8614),S=i(3838),k=i(5253),Y=i(5304),O=i(4896),J=i(4779),b=i(3999);function V(n,p){if(1&n&&(t.TgZ(0,"p",35),t._uU(1),t.qZA()),2&n){const e=p.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}const F=function(){return{type:"number",length:1}};let Q=(()=>{class n{constructor(e,o,s,Z,v){this.fb=e,this.toastr=o,this.config=s,this.dialogRef=Z,this.productService=v,this.unsubscribe=new y.x,this.formGroup=this.initForm(),this.brandConfig=T.r,this.SupplierConfig=L.h,this.unitTypeConfig=P.h,this.taxConfig=j.F,this.categoriesConfig=E.t,this.values=new FormData,this.formData=new FormData,this.billingCities=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){}initForm(){return this.fb.group({code:[""],id:[Number],name:["",[l.kI.required]],description:[""],brand_id:[""],suppliers:[""],category_id:[""],unit_id:[""],specs:this.fb.group({height:[""],width:[""],length:[""],material:[""],size:[""],quantity:["",l.kI.pattern("^[0-9]*$")],selling_price:["",[l.kI.required,l.kI.pattern("^[0-9 .]*$")]],purchase_price:["",[l.kI.required,l.kI.pattern("^[0-9 .]*$")]],opening_stock:["",[l.kI.required,l.kI.pattern("^[0-9 .]*$")]],quantity_alert:["",[l.kI.required,l.kI.pattern("^[0-9 .]*$")]]}),taxes_id:[""]})}onFileSelected(e){if(e.target.files[0])for(const[o,s]of Object.entries(e.target.files))this.formData.set(`specs.images[${o}]`,e.target.files[o])}convertSupFormGroupToFormData(e){Object.keys(e.controls).forEach(o=>{const s=this.formGroup.get("specs."+o);this.formData.append("specs."+o,s?.value)})}convertFormGroupToFormData(){Object.keys(this.formGroup.controls).forEach(o=>{const s=this.formGroup.get(o);s instanceof l.cw?this.convertSupFormGroupToFormData(s):this.formData.append(o,s?.value)}),this.formData.delete("suppliers"),this.formGroup.get("suppliers")?.value.map((o,s)=>{this.formData.set(`suppliers[${s}]`,o)})}accept(){console.log(this.formGroup),this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.convertFormGroupToFormData(),this.config.data.data?this.productService.update(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}):this.productService.create(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}))}reject(e){this.dialogRef.close(e)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,code:this.config.data.data?.code,name:this.config.data.data.name,description:this.config.data.data?.description,category_id:this.config.data.data?.category_id,unit_id:this.config.data.data?.unit_id,taxes_id:this.config.data.data?.tax.id,brand_id:this.config.data.data?.brand.id,suppliers:this.config.data.data?.suppliers.map(e=>e.id)}),this.formGroup.get("specs")?.patchValue({image:this.config.data.data?.specs?.image,height:this.config.data.data?.specs?.height,width:this.config.data.data?.specs?.width,length:this.config.data.data?.specs?.length,material:this.config.data.data?.specs?.material,size:this.config.data.data?.specs?.size,quantity:this.config.data.data?.specs?.quantity,opening_stock:this.config.data.data?.specs?.opening_stock,quantity_alert:this.config.data.data?.specs?.quantity_alert,selling_price:this.config.data.data?.selling_price,purchase_price:this.config.data.data?.purchase_price})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.qu),t.Y36(U._W),t.Y36(M.S),t.Y36(M.E7),t.Y36(q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-form"]],decls:58,vars:99,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["text","code","formControlName","code","ngDefaultControl","","placeholder","",3,"type"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["text","description","formControlName","description","ngDefaultControl","","placeholder","",3,"type"],["filterBy","name","ngDefaultControl","","formControlName","suppliers",3,"text","filter","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","brand_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","unit_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","taxes_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","category_id",3,"text","request","optionLabel","optionValue","placeholder"],["formGroupName","specs"],["type","type","formControlName","height","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","width","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","length","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","material","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","size","ngDefaultControl","","placeholder","",3,"text"],["text","quantity","formControlName","quantity","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","opening_stock","formControlName","opening_stock","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","quantity_alert","formControlName","quantity_alert","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","selling_price","formControlName","selling_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","purchase_price","formControlName","purchase_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["label","image","ngDefaultControl","",3,"accept","onValueChange"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return o.accept()}),t.YNc(11,V,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"div",11),t._UZ(15,"app-text",12),t.qZA(),t.TgZ(16,"div",11),t._UZ(17,"app-text",13),t.qZA(),t.TgZ(18,"div",11),t._UZ(19,"app-textarea",14),t.qZA(),t.TgZ(20,"div",11),t._UZ(21,"app-multiselect",15),t.qZA(),t.TgZ(22,"div",11),t._UZ(23,"app-dropdown",16),t.qZA(),t.TgZ(24,"div",11),t._UZ(25,"app-dropdown",17),t.qZA(),t.TgZ(26,"div",11),t._UZ(27,"app-dropdown",18),t.qZA(),t.TgZ(28,"div",11),t._UZ(29,"app-dropdown",19),t.qZA(),t.TgZ(30,"div",20)(31,"div",11),t._UZ(32,"app-text",21),t.qZA(),t.TgZ(33,"div",11),t._UZ(34,"app-text",22),t.qZA(),t.TgZ(35,"div",11),t._UZ(36,"app-text",23),t.qZA(),t.TgZ(37,"div",11),t._UZ(38,"app-text",24),t.qZA(),t.TgZ(39,"div",11),t._UZ(40,"app-text",25),t.qZA(),t.TgZ(41,"div",11),t._UZ(42,"app-text",26),t.qZA(),t.TgZ(43,"div",11),t._UZ(44,"app-text",27),t.qZA(),t.TgZ(45,"div",11),t._UZ(46,"app-text",28),t.qZA(),t.TgZ(47,"div",11),t._UZ(48,"app-text",29),t.qZA(),t.TgZ(49,"div",11),t._UZ(50,"app-text",30),t.qZA(),t.TgZ(51,"div",11)(52,"app-file-upload",31),t.NdJ("onValueChange",function(Z){return o.onFileSelected(Z)}),t.qZA()()()(),t.TgZ(53,"div",32)(54,"div",33)(55,"app-button",34),t.NdJ("click",function(){return o.reject(!1)}),t.qZA()(),t.TgZ(56,"div",33)(57,"app-button",34),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e){let s;t.xp6(8),t.Oqu(t.lcZ(9,90,null!==(s=o.config.header)&&void 0!==s?s:"")),t.xp6(2),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,92,o.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol(""),t.Q6J("text","supplier")("filter",!0)("request",o.SupplierConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","brand")("request",o.brandConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","unit")("request",o.unitTypeConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","tax")("request",o.taxConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","category")("request",o.categoriesConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","category"),t.xp6(3),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","height"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","width"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","length"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","material"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","size"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(94,F))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(95,F))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(96,F))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(97,F))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(98,F))("type","text"),t.xp6(2),t.Q6J("accept",".jpg,.jpeg,.png"),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==o.config.data?null:o.config.data.acceptLabel)}},dependencies:[a.sg,N.U,l.Fj,l.JJ,l.JL,l.sg,l.u,l.x0,I.T,S.J,k.R,Y.z,O.Y,J.r,a.Nd,b.X$]}),n})();function R(n,p){if(1&n&&(t.TgZ(0,"p",30),t._uU(1),t.qZA()),2&n){const e=p.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}const w=function(){return{type:"number",length:1}};let B=(()=>{class n{constructor(e,o,s,Z,v){this.fb=e,this.toastr=o,this.config=s,this.dialogRef=Z,this.productService=v,this.unsubscribe=new y.x,this.formGroup=this.initForm(),this.brandConfig=T.r,this.SupplierConfig=L.h,this.unitTypeConfig=P.h,this.taxConfig=j.F,this.categoriesConfig=E.t,this.formData=new FormData,this.default_specs=[{name:"height"},{name:"width"},{name:"length"},{name:"material"},{name:"size"}],this.billingCities=[],this.config.data?.data&&(this.formData.set("id",this.config.data?.data.id),console.log(this.config.data?.data))}initForm(){return this.fb.group({id:[Number],code:[""],default_spec_name:[""],specs:this.fb.group({height:[""],width:[""],length:[""],material:[""],size:[""],quantity:["",l.kI.pattern("^[0-9]*$")],selling_price:["",[l.kI.required,l.kI.pattern("^[0-9 .]*$")]],purchase_price:["",[l.kI.required,l.kI.pattern("^[0-9 .]*$")]],opening_stock:["",[l.kI.required,l.kI.pattern("^[0-9 .]*$")]],quantity_alert:["",[l.kI.required,l.kI.pattern("^[0-9 .]*$")]],taxes_id:[""]})})}onFileSelected(e){if(e.target.files[0])for(const[o,s]of Object.entries(e.target.files))this.formData.set(`specs.images[${o}]`,e.target.files[o])}convertSupFormGroupToFormData(e){Object.keys(e.controls).forEach(o=>{const s=this.formGroup.get("specs."+o);this.formData.append("specs."+o,s?.value)})}convertFormGroupToFormData(){Object.keys(this.formGroup.controls).forEach(e=>{const o=this.formGroup.get(e);o instanceof l.cw?this.convertSupFormGroupToFormData(o):this.formData.append(e,o?.value)})}reject(e){this.dialogRef.close(e)}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.convertFormGroupToFormData(),this.productService.assign(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.qu),t.Y36(U._W),t.Y36(M.S),t.Y36(M.E7),t.Y36(q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-assign-product"]],decls:49,vars:73,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["type","type","formControlName","code","ngDefaultControl","","placeholder","",3,"text"],["ngDefaultControl","","formControlName","default_spec_name",3,"text","data","optionLabel","optionValue","placeholder"],["formGroupName","specs"],["type","type","formControlName","height","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","width","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","length","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","material","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","size","ngDefaultControl","","placeholder","",3,"text"],["text","quantity","formControlName","quantity","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","selling_price","formControlName","selling_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","purchase_price","formControlName","purchase_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","opening_stock","formControlName","opening_stock","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","quantity_alert","formControlName","quantity_alert","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","taxes_id",3,"text","request","optionLabel","optionValue","placeholder"],["label","image",3,"accept","onValueChange"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"titlecase"),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"app-form",8),t.NdJ("onSubmit",function(){return o.accept()}),t.YNc(12,R,2,1,"p",9),t.ALo(13,"keyvalue"),t.TgZ(14,"div",10)(15,"div",11),t._UZ(16,"app-text",12),t.qZA(),t.TgZ(17,"div",11),t._UZ(18,"app-dropdown",13),t.qZA(),t.TgZ(19,"div",14)(20,"div",11),t._UZ(21,"app-text",15),t.qZA(),t.TgZ(22,"div",11),t._UZ(23,"app-text",16),t.qZA(),t.TgZ(24,"div",11),t._UZ(25,"app-text",17),t.qZA(),t.TgZ(26,"div",11),t._UZ(27,"app-text",18),t.qZA(),t.TgZ(28,"div",11),t._UZ(29,"app-text",19),t.qZA(),t.TgZ(30,"div",11),t._UZ(31,"app-text",20),t.qZA(),t.TgZ(32,"div",11),t._UZ(33,"app-text",21),t.qZA(),t.TgZ(34,"div",11),t._UZ(35,"app-text",22),t.qZA(),t.TgZ(36,"div",11),t._UZ(37,"app-text",23),t.qZA(),t.TgZ(38,"div",11),t._UZ(39,"app-text",24),t.qZA(),t.TgZ(40,"div",11),t._UZ(41,"app-dropdown",25),t.qZA(),t.TgZ(42,"div",11)(43,"app-file-upload",26),t.NdJ("onValueChange",function(Z){return o.onFileSelected(Z)}),t.qZA()()()(),t.TgZ(44,"div",27)(45,"div",28)(46,"app-button",29),t.NdJ("click",function(){return o.reject(!1)}),t.qZA()(),t.TgZ(47,"div",28)(48,"app-button",29),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e&&(t.xp6(8),t.Oqu(t.lcZ(9,62,t.lcZ(10,64,"assign_product"))),t.xp6(3),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(13,66,o.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","code"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","spec name")("data",o.default_specs)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(3),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","height"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","width"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","length"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","material"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","size"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(68,w))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(69,w))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(70,w))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(71,w))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(72,w))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","tax")("request",o.taxConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Q6J("accept",".jpg,.jpeg,.png"),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text","assign"))},dependencies:[a.sg,N.U,l.Fj,l.JJ,l.JL,l.sg,l.u,l.x0,I.T,S.J,O.Y,J.r,a.rS,a.Nd,b.X$]}),n})();var W=i(1732),K=i(3562);let q=(()=>{class n{constructor(e,o,s){this.http=e,this.dynamicDialog=o,this.toaster=s}getProducts(e){return this.http.get(d.s.api.get)}openDialogToCreateUnitType(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_product",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},Q)}create(e){return this.http.post(d.s.api.create,e)}delete(e){var o=this;return(0,r.Z)(function*(){const s={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e},name:"name"},width:"500px",height:"auto"};if(yield o.dynamicDialog.confirm(s))try{const v=yield o.http.delete(d.s.api.delete+e.id).toPromise();return o.toaster.success(v.message),v}catch(v){throw o.toaster.error(v.error.message),v}return!1})()}openDialogToUpdateProduct(e){var o=this;return(0,r.Z)(function*(){const s={showHeader:!1,header:"update_product",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"500px",height:"auto"};return yield o.dynamicDialog.showDialogWithComponent(s,Q)})()}update(e){return this.http.post(d.s.api.update+e.get("id"),e)}import(e){return this.http.post(d.s.api.import,e)}exportExample(){return this.http.get(d.s.api.exportExample)}openDialogToAssignProduct(e){const o={showHeader:!1,header:"assign_product",data:{acceptLabel:"assign",rejectLabel:"Cancel",data:{...e}},width:"500px",height:"auto"};return this.dynamicDialog.showDialogWithComponent(o,B)}assign(e){return this.http.post(d.s.api.assign+e.get("id"),e)}getById(e){return this.http.get(d.s.api.getById+e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(W.O),t.LFG(K.U),t.LFG(U._W))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var $=i(2377),z=i(359),X=i(5077),H=i(4811),tt=i(8275);function et(n,p){if(1&n){const e=t.EpF();t.TgZ(0,"div",17)(1,"button",18),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ul",19)(5,"li",20),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.exportExample())}),t._uU(6),t.ALo(7,"titlecase"),t.ALo(8,"translate"),t.qZA()()()}2&n&&(t.xp6(2),t.hij(" ",t.lcZ(3,2,"export")," "),t.xp6(4),t.hij(" ",t.lcZ(7,4,t.lcZ(8,6,"example"))," "))}function ot(n,p){if(1&n){const e=t.EpF();t.TgZ(0,"app-button",21),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.openDialogToCreate())}),t.qZA()}if(2&n){const e=t.oxw();t.Tol("btn-filter "),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}function nt(n,p){if(1&n&&(t.TgZ(0,"div")(1,"span",29),t._uU(2),t.qZA(),t.TgZ(3,"span",29),t._uU(4),t.qZA()()),2&n){const e=p.$implicit;t.xp6(2),t.hij(" row :",e.row_number," "),t.xp6(2),t.Oqu(e.error)}}function at(n,p){if(1&n){const e=t.EpF();t.TgZ(0,"div",22),t.YNc(1,nt,5,2,"div",23),t.TgZ(2,"app-file-upload",24),t.NdJ("onValueChange",function(s){t.CHM(e);const Z=t.oxw();return t.KtG(Z.onFileSelected(s))}),t.qZA(),t.TgZ(3,"div",25)(4,"app-button",26),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.import())}),t._UZ(5,"i",27),t.qZA(),t.TgZ(6,"app-button",28),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.closeSectionToImport())}),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.importErrors),t.xp6(1),t.Q6J("multiple",!1)("accept",".csv,.xls,.xlsx")("label","import"),t.xp6(2),t.Q6J("text","save")("loading",e.isLoading),t.xp6(2),t.Q6J("text","cancel")}}const G=function(n){return[n]};let it=(()=>{class n{constructor(e,o,s){this.productService=e,this.toastr=o,this.translateService=s,this.showImportForm=!1,this.importErrors=[],this.fileName="",this.values=new FormData,this.isLoading=!1,this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"purchase_price",field:"purchase_price"},{label:"selling_price",field:"selling_price"},{label:"creator",field:"creator_id"},{label:"quantity",field:"quantity"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:f.q.asc,field:f.q.asc},{label:f.q.desc,field:f.q.desc}]}],this.filtersConfig=[{field:"search",label:"search",type:C.W.TEXT,placeholder:"search"},{field:"creator_id",label:"created_by",type:C.W.SELECT,options:{value:"id",label:"name"},request:D.x.api.get,placeholder:"select"},{field:"from",label:"from",type:C.W.DATE},{field:"to",label:"to",type:C.W.DATE}],this.permissions=m,this.tableConfig=x(this),this.icon=g.dv}openDialogToCreate(){var e=this;return(0,r.Z)(function*(){(yield e.productService.openDialogToCreateUnitType())&&(e.tableConfig=x(e))})()}openSectionToImport(){this.showImportForm=!0}closeSectionToImport(){this.fileName="",this.showImportForm=!1,this.importErrors=[]}exportExample(){this.productService.exportExample().subscribe(e=>{window.open(e.file_path)})}onFileSelected(e){e.target.files[0]&&(this.fileName=e.target.files[0].name,this.values.set("file",e.target.files[0]))}import(){this.fileName?(this.isLoading=!0,this.productService.import(this.values).subscribe(e=>{this.toastr.success(e.message),this.isLoading=!1,this.fileName="",this.closeSectionToImport(),this.tableConfig=x(this)},e=>{this.isLoading=!1,this.importErrors=e.error.errors,e.error.message&&this.toastr.error(e.error.message)})):this.toastr.error(this.translateService.instant("select_file"))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(q),t.Y36(U._W),t.Y36(b.sK))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list"]],decls:20,vars:19,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex","gap-2"],["class","dropdown",4,"hasPermissions"],[3,"text","click"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],["class","import",4,"ngIf"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table","mt-2"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[1,"dropdown"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-cancel","dropdown-toggle"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],[1,"pointer","dropdown-item",3,"click"],[3,"text","icon","iconPos","click"],[1,"import"],[4,"ngFor","ngForOf"],[3,"multiple","accept","label","onValueChange"],[1,"d-flex","gap-2","align-items-center","mt-3"],[3,"text","loading","click"],[1,"fa-solid","fa-check","px-2"],[1,"btn-cancel",3,"text","click"],[1,"text-error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,et,9,8,"div",4),t.TgZ(7,"app-button",5),t.NdJ("click",function(){return o.openSectionToImport()}),t.qZA(),t.YNc(8,ot,1,5,"app-button",6),t.qZA()(),t.YNc(9,at,7,7,"div",7),t.TgZ(10,"div",8),t._UZ(11,"ukt-sort",9,10)(13,"ukt-filter",11,12),t.qZA(),t.TgZ(15,"div",13),t._UZ(16,"app-table",14),t.qZA(),t.TgZ(17,"div",15),t._UZ(18,"ukt-pagination",null,16),t.qZA()()),2&e){const s=t.MAs(12),Z=t.MAs(14),v=t.MAs(19);t.xp6(3),t.Oqu(t.lcZ(4,13,"list_of_products")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(15,G,o.permissions.create)),t.xp6(1),t.Tol("btn-cancel"),t.Q6J("text","import"),t.xp6(1),t.Q6J("hasPermissions",t.VKq(17,G,o.permissions.create)),t.xp6(1),t.Q6J("ngIf",o.showImportForm),t.xp6(2),t.Q6J("SortConfig",o.sortConfig),t.xp6(2),t.Q6J("config",o.filtersConfig),t.xp6(3),t.Q6J("tableConfig",o.tableConfig)("pagination",v)("filter",Z)("sort",s)}},dependencies:[a.sg,a.O5,$.a,z.Q,O.Y,J.r,X.z,H.x,tt.z,a.rS,b.X$],styles:[".dropdown[_ngcontent-%COMP%]{background-color:transparent!important}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent!important;border:1px solid var(--mainColor);font-size:1.5rem;padding:6px}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.5rem}.import[_ngcontent-%COMP%]{padding:20px;border:2px solid var(--mainColor);border-radius:8px;margin:10px 0}"]}),n})();var lt=i(9773);const rt=[{path:"",component:it},{path:":id",component:(()=>{class n{constructor(e,o,s){this.productService=e,this.route=o,this.toastr=s,this.icon=g.dv,this.unsubscribe=new y.x}ngOnInit(){this.route.data.pipe((0,lt.R)(this.unsubscribe)).subscribe({next:e=>{this.data=e.product.data},error:e=>{}})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(q),t.Y36(u.gz),t.Y36(U._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-show-product"]],decls:75,vars:19,consts:[[1,"p-5","bg-white","mt-3","rounded-5"],[1,"d-flex"],["routerLink","/key/inventory/products",1,"pi","pi-arrow-left","px-3","pt-2",2,"font-size","2rem"],[1,"fw-bold","fs-1"],[1,"row","mt-5","px-5"],[1,"col-md-4"],["width","100%","alt","product image",3,"src"],[1,"col-md-8"],[1,"fs-3","fw-bold"],[1,"fs-4"],[1,"p-5","info","rounded-5","mt-4"],["translate","product_info",1,"fs-3","fw-bold","mb-4"],[1,"row"],[1,"col-lg-2"],[1,"mb-5"],["translate","code",1,"fs-3","fw-bold"],["translate","selling_price",1,"fs-3","fw-bold"],["translate","width",1,"fs-3","fw-bold"],["translate","category",1,"fs-3","fw-bold"],["translate","purchase_price",1,"fs-3","fw-bold"],["translate","hight",1,"fs-3","fw-bold"],["translate","unit",1,"fs-3","fw-bold"],["translate","taxes",1,"fs-3","fw-bold"],["translate","length",1,"fs-3","fw-bold"],["translate","quantity_alert",1,"fs-3","fw-bold"],["translate","size",1,"fs-3","fw-bold"],["translate","opening_stock",1,"fs-3","fw-bold"],["translate","material",1,"fs-3","fw-bold"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"i",2),t.TgZ(3,"h2",3),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5),t._UZ(8,"img",6),t.qZA(),t.TgZ(9,"div",7)(10,"h3",8),t._uU(11),t.qZA(),t.TgZ(12,"p",9),t._uU(13),t.qZA()()(),t.TgZ(14,"div",10),t._UZ(15,"h3",11),t.TgZ(16,"div",12)(17,"div",13)(18,"div",14),t._UZ(19,"span",15),t.TgZ(20,"p",9),t._uU(21),t.qZA()(),t.TgZ(22,"div",14),t._UZ(23,"span",16),t.TgZ(24,"p",9),t._uU(25),t.qZA()(),t.TgZ(26,"div"),t._UZ(27,"span",17),t.TgZ(28,"p",9),t._uU(29),t.qZA()()(),t.TgZ(30,"div",13)(31,"div",14),t._UZ(32,"span",18),t.TgZ(33,"p",9),t._uU(34),t.qZA()(),t.TgZ(35,"div",14),t._UZ(36,"span",19),t.TgZ(37,"p",9),t._uU(38),t.qZA()(),t.TgZ(39,"div"),t._UZ(40,"span",20),t.TgZ(41,"p",9),t._uU(42),t.qZA()()(),t.TgZ(43,"div",13)(44,"div",14),t._UZ(45,"span",21),t.TgZ(46,"p",9),t._uU(47),t.qZA()(),t.TgZ(48,"div",14),t._UZ(49,"span",22),t.TgZ(50,"p",9),t._uU(51),t.qZA()(),t.TgZ(52,"div"),t._UZ(53,"span",23),t.TgZ(54,"p",9),t._uU(55),t.qZA()()(),t._UZ(56,"div",13),t.TgZ(57,"div",13)(58,"div",14),t._UZ(59,"span",24),t.TgZ(60,"p",9),t._uU(61),t.qZA()(),t.TgZ(62,"div",14),t._UZ(63,"span",25),t.TgZ(64,"p",9),t._uU(65),t.qZA()()(),t.TgZ(66,"div",13)(67,"div"),t._UZ(68,"span",26),t.TgZ(69,"p",9),t._uU(70),t.qZA()(),t.TgZ(71,"div"),t._UZ(72,"span",27),t.TgZ(73,"p",9),t._uU(74),t.qZA()()()()()()),2&e&&(t.xp6(4),t.Oqu(t.lcZ(5,17,"product_details")),t.xp6(4),t.Q6J("src",null==o.data||null==o.data.specs_images[0]?null:o.data.specs_images[0].url,t.LSH),t.xp6(3),t.Oqu(o.data.name),t.xp6(2),t.hij(" ",o.data.description," "),t.xp6(8),t.hij("#",o.data.code,""),t.xp6(4),t.hij("",o.data.selling_price||0," $"),t.xp6(4),t.Oqu((null==o.data||null==o.data.specs?null:o.data.specs.width)||"-"),t.xp6(5),t.Oqu(null==o.data?null:o.data.category.name),t.xp6(4),t.hij("",o.data.purchase_price||0," $"),t.xp6(4),t.Oqu((null==o.data||null==o.data.specs?null:o.data.specs.hight)||"-"),t.xp6(5),t.Oqu(o.data.unit.name||"-"),t.xp6(4),t.Oqu(null==o.data||null==o.data.tax?null:o.data.tax.name),t.xp6(4),t.Oqu((null==o.data||null==o.data.spec?null:o.data.spec.length)||"-"),t.xp6(6),t.Oqu((null==o.data||null==o.data.spec?null:o.data.spec.quantity_alert)||"-"),t.xp6(4),t.Oqu((null==o.data||null==o.data.spec?null:o.data.spec.size)||"-"),t.xp6(5),t.Oqu((null==o.data||null==o.data.spec?null:o.data.spec.opening_stock)||"-"),t.xp6(4),t.Oqu((null==o.data||null==o.data.spec?null:o.data.spec.material)||"-"))},dependencies:[u.rH,b.Pi,b.X$],styles:[".info[_ngcontent-%COMP%]{background-color:#f8f8f8}"]}),n})(),resolve:{product:(()=>{class n{constructor(e){this.ProductService=e}resolve(e){return this.ProductService.getById(e.params.id)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(q))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}];let st=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(rt),u.Bz]}),n})();var pt=i(8096),ct=i(1019),dt=i(1890),ut=i(4413),ft=i(2115),mt=i(1471),gt=i(1383);let ht=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.ez,st,mt.X,ft.u,ut.e,dt.f,ct.i,pt.J,b.aw,gt.m]}),n})()},1771:(A,_,i)=>{i.d(_,{U:()=>m});var a=i(9291),u=i(6223);const r=["*"];let m=(()=>{class d{constructor(){this.onSubmit=new a.vpe}ngOnChanges(f){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const f=this.getFormData();this.onSubmit.emit(f)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return d.\u0275fac=function(f){return new(f||d)},d.\u0275cmp=a.Xpm({type:d,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[a.TTD],ngContentSelectors:r,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(f,h){1&f&&(a.F$t(),a.TgZ(0,"form",0),a.NdJ("ngSubmit",function(){return h.submit()}),a.Hsn(1),a.qZA()),2&f&&a.Q6J("formGroup",h.formGroup)},dependencies:[u._Y,u.JL,u.sg]}),d})()},4896:(A,_,i)=>{i.d(_,{Y:()=>D});var a=i(9291),u=i(67),r=i(6223),m=i(6814),d=i(3999);function x(c,g){1&c&&a._UZ(0,"i",7)}function f(c,g){if(1&c&&(a.TgZ(0,"label",4),a._uU(1),a.ALo(2,"titlecase"),a.ALo(3,"translate"),a.TgZ(4,"span",5),a.YNc(5,x,1,0,"i",6),a.qZA()()),2&c){const t=a.oxw();a.xp6(1),a.hij("",a.lcZ(2,2,a.lcZ(3,4,t.label))," "),a.xp6(4),a.Q6J("ngIf",t.control&&(null==t.control.errors?null:t.control.errors.required))}}function h(c,g){if(1&c&&(a.TgZ(0,"p"),a._uU(1),a.ALo(2,"translate"),a.qZA()),2&c){const t=a.oxw();a.xp6(1),a.Oqu(a.lcZ(2,1,t.selectedFileCount+"files"))}}function C(c,g){if(1&c&&(a.TgZ(0,"p"),a._uU(1),a.ALo(2,"translate"),a.qZA()),2&c){const t=a.oxw();a.xp6(1),a.Oqu(t.selectedFileName?t.selectedFileName:a.lcZ(2,1,t.placeholder))}}let D=(()=>{class c extends u.t{set clear(t){t&&(this.selectedFileCount=0,this.selectedFileName="",this.value=null)}constructor(t){super(),this.formGroupDirective=t,this.uploadedFiles=[],this.multiple=!0,this.label="Upload",this.placeholder="drag_and_drop_you_file_or_Click_here_to_upload",this.accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx",this.onValueChange=new a.vpe,this.selectedFileName="",this.selectedFileCount=0}onFileSelected(t){this.onValueChange.emit(t),this.selectedFileName=t.target.files[0].name,t.target.files&&t.target.files.length>0&&(this.selectedFileCount=t.target.files.length)}onUpload(t){for(let l of t.files)this.uploadedFiles.push(l)}}return c.\u0275fac=function(t){return new(t||c)(a.Y36(r.sg,8))},c.\u0275cmp=a.Xpm({type:c,selectors:[["app-file-upload"]],inputs:{value:"value",multiple:"multiple",label:"label",placeholder:"placeholder",accept:"accept",clear:"clear"},outputs:{onValueChange:"onValueChange"},features:[a._Bn([{provide:r.JU,useExisting:c,multi:!0},{provide:r.Cf,useExisting:c,multi:!0}]),a.qOj],decls:5,vars:6,consts:[[1,"file-input"],["for","file",4,"ngIf"],[4,"ngIf"],["id","file","type","file","id","file",1,"form-control",3,"multiple","ngModel","accept","ngModelChange","change"],["for","file"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(t,l){1&t&&(a.TgZ(0,"div",0),a.YNc(1,f,6,6,"label",1),a.YNc(2,h,3,3,"p",2),a.YNc(3,C,3,3,"p",2),a.TgZ(4,"input",3),a.NdJ("ngModelChange",function(T){return l.value=T})("change",function(T){return l.onFileSelected(T)}),a.qZA()()),2&t&&(a.xp6(1),a.Q6J("ngIf",l.label),a.xp6(1),a.Q6J("ngIf",l.selectedFileCount>1),a.xp6(1),a.Q6J("ngIf",l.selectedFileCount<=1),a.xp6(1),a.Q6J("multiple",l.multiple)("ngModel",l.value)("accept",l.accept))},dependencies:[m.O5,r.Fj,r.JJ,r.On,m.rS,d.X$],styles:[".file-input[_ngcontent-%COMP%]{position:relative}.file-input[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{position:absolute;left:0;top:0;opacity:0;width:100%;height:100%;min-width:200px!important}.file-input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;padding:8px;border:1px dashed #7ca0c5;border-radius:8px;font-size:14px;cursor:pointer;min-width:200px!important;text-align:center;overflow:hidden}"]}),c})()},5253:(A,_,i)=>{i.d(_,{R:()=>D});var a=i(67),u=i(6223),r=i(9291),m=i(6814),d=i(6218),x=i(3999);function f(c,g){1&c&&r._UZ(0,"i",6)}function h(c,g){if(1&c&&(r.TgZ(0,"label"),r._uU(1),r.ALo(2,"titlecase"),r.ALo(3,"translate"),r.TgZ(4,"span",4),r.YNc(5,f,1,0,"i",5),r.qZA()()),2&c){const t=r.oxw();r.xp6(1),r.hij("",r.lcZ(2,2,r.lcZ(3,4,t.text))," "),r.xp6(4),r.Q6J("ngIf",t.control&&(null==t.control.errors?null:t.control.errors.required))}}function C(c,g){if(1&c&&(r.TgZ(0,"span"),r._uU(1),r.qZA()),2&c){const t=r.oxw();r.Tol("text-danger"),r.xp6(1),r.Oqu(t.object.keys(t.control.errors)[0])}}let D=(()=>{class c extends a.t{constructor(t){super(),this.formGroupDirective=t,this.placeholder="",this.rows="2",this.cols="",this.readOnly=!1,this.class="d-flex flex-column justify-content-between",this.object=Object}writeValue(t){this.value=t}onValueChange(t){this.onChange(t.target.value),this.onTouched()}}return c.\u0275fac=function(t){return new(t||c)(r.Y36(u.sg,8))},c.\u0275cmp=r.Xpm({type:c,selectors:[["app-textarea"]],inputs:{value:"value",text:"text",placeholder:"placeholder",rows:"rows",cols:"cols",readOnly:"readOnly",class:"class",type:"type"},features:[r._Bn([{provide:u.JU,useExisting:c,multi:!0},{provide:u.Cf,useExisting:c,multi:!0}]),r.qOj],decls:4,vars:8,consts:[[3,"ngClass"],[4,"ngIf"],["pInputTextarea","",3,"rows","cols","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(t,l){1&t&&(r.TgZ(0,"div",0),r.YNc(1,h,6,6,"label",1),r.TgZ(2,"textarea",2),r.NdJ("ngModelChange",function(T){return l.value=T})("input",function(T){return l.onValueChange(T)}),r.qZA(),r.YNc(3,C,2,3,"span",3),r.qZA()),2&t&&(r.Q6J("ngClass",l.class),r.xp6(1),r.Q6J("ngIf",l.text),r.xp6(1),r.Q6J("rows",l.rows)("cols",l.cols)("ngModel",l.value)("placeholder",l.placeholder)("disabled",l.readOnly),r.xp6(1),r.Q6J("ngIf",l.control&&l.control.errors&&(l.control.touched||l.formGroupDirective.submitted)))},dependencies:[m.mk,m.O5,u.Fj,u.JJ,u.On,d.g,m.rS,x.X$]}),c})()},8718:(A,_,i)=>{i.d(_,{x:()=>a});const a={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}},9773:(A,_,i)=>{i.d(_,{R:()=>d});var a=i(9360),u=i(8251),r=i(4829),m=i(2420);function d(x){return(0,a.e)((f,h)=>{(0,r.Xf)(x).subscribe((0,u.x)(h,()=>h.complete(),m.Z)),!h.closed&&f.subscribe(h)})}}}]);