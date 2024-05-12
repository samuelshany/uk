"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[4343],{4343:(J,_,i)=>{i.r(_),i.d(_,{ProductsModule:()=>mt});var n=i(6814),f=i(8209),l=i(5861),m=function(a){return a.create="Create Product",a.view="View Product",a.edit="Edit Product",a.delete="Delete Product",a}(m||{}),d=i(3058);const C=a=>{return{cols:[{field:"code",label:"code",class:""},{field:"name",label:"name",class:""},{field:"quantity",label:"quantity",class:"",format:p=>p?.quantity?p?.quantity:"0"},{field:"selling_price",label:"selling_price",class:"",format:p=>p?.selling_price?p?.selling_price:"-"},{field:"category",label:"category",class:"",format:p=>p.category?p.category.name:"-"},{field:"material",label:"material",class:"",format:p=>p?.material?p.material:"-"},{label:"action",actions:[{id:m.delete,icon:"fa-solid fa-person-harassing",class:"main-color",fun:(p=(0,l.Z)(function*(e){return yield a.productService.openDialogToAssignProduct(e)}),function(o){return p.apply(this,arguments)})},{id:m.delete,icon:"trash",class:"main-color",fun:function(){var p=(0,l.Z)(function*(e){return yield a.productService.delete(e)});return function(o){return p.apply(this,arguments)}}()},{id:m.edit,icon:"pen-to-square",class:"main-color",fun:function(){var p=(0,l.Z)(function*(e){return yield a.productService.openDialogToUpdateProduct(e)});return function(o){return p.apply(this,arguments)}}()}]}],Request:d.s.api.get};var p};var u=i(5946),v=i(6924),b=i(8718),g=i(5219),t=i(9291),r=i(6223),y=i(8645),T=i(336),L=i(1494),N=i(4605),O=i(7553),j=i(7619),M=i(8763),U=i(5118),E=i(1771),I=i(8614),S=i(3838),k=i(5253),V=i(5304),w=i(4896),P=i(4779),D=i(3999);function Y(a,p){if(1&a&&(t.TgZ(0,"p",35),t._uU(1),t.qZA()),2&a){const e=p.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}const A=function(){return{type:"number",length:1}};let Q=(()=>{class a{constructor(e,o,s,h,x){this.fb=e,this.toastr=o,this.config=s,this.dialogRef=h,this.productService=x,this.unsubscribe=new y.x,this.formGroup=this.initForm(),this.brandConfig=T.r,this.SupplierConfig=N.h,this.unitTypeConfig=L.h,this.taxConfig=O.F,this.categoriesConfig=j.t,this.values=new FormData,this.formData=new FormData,this.billingCities=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){}initForm(){return this.fb.group({code:[""],id:[Number],name:["",[r.kI.required]],description:[""],brand_id:[""],suppliers:[""],category_id:[""],unit_id:[""],specs:this.fb.group({height:[""],width:[""],length:[""],material:[""],size:[""],quantity:["",r.kI.pattern("^[0-9]*$")],selling_price:["",[r.kI.required,r.kI.pattern("^[0-9 .]*$")]],purchase_price:["",[r.kI.required,r.kI.pattern("^[0-9 .]*$")]],opening_stock:["",[r.kI.required,r.kI.pattern("^[0-9 .]*$")]],quantity_alert:["",[r.kI.required,r.kI.pattern("^[0-9 .]*$")]]}),taxes_id:[""]})}onFileSelected(e){if(e.target.files[0])for(const[o,s]of Object.entries(e.target.files))this.formData.set(`specs.images[${o}]`,e.target.files[o])}convertSupFormGroupToFormData(e){Object.keys(e.controls).forEach(o=>{const s=this.formGroup.get("specs."+o);this.formData.append("specs."+o,s?.value)})}convertFormGroupToFormData(){Object.keys(this.formGroup.controls).forEach(o=>{const s=this.formGroup.get(o);s instanceof r.cw?this.convertSupFormGroupToFormData(s):this.formData.append(o,s?.value)}),this.formData.delete("suppliers"),this.formGroup.get("suppliers")?.value.map((o,s)=>{this.formData.set(`suppliers[${s}]`,o)})}accept(){console.log(this.formGroup),this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.convertFormGroupToFormData(),this.config.data.data?this.productService.update(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}):this.productService.create(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}))}reject(e){this.dialogRef.close(e)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,code:this.config.data.data?.code,name:this.config.data.data.name,description:this.config.data.data?.description,category_id:this.config.data.data?.category_id,unit_id:this.config.data.data?.unit_id,taxes_id:this.config.data.data?.tax.id,brand_id:this.config.data.data?.brand.id,suppliers:this.config.data.data?.suppliers.map(e=>e.id)}),this.formGroup.get("specs")?.patchValue({image:this.config.data.data?.specs?.image,height:this.config.data.data?.specs?.height,width:this.config.data.data?.specs?.width,length:this.config.data.data?.specs?.length,material:this.config.data.data?.specs?.material,size:this.config.data.data?.specs?.size,quantity:this.config.data.data?.specs?.quantity,opening_stock:this.config.data.data?.specs?.opening_stock,quantity_alert:this.config.data.data?.specs?.quantity_alert,selling_price:this.config.data.data?.selling_price,purchase_price:this.config.data.data?.purchase_price})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(r.qu),t.Y36(M._W),t.Y36(U.S),t.Y36(U.E7),t.Y36(q))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-product-form"]],decls:58,vars:98,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["text","code","formControlName","code","ngDefaultControl","","placeholder","",3,"type"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["text","description","formControlName","description","ngDefaultControl","","placeholder","",3,"type"],["filterBy","name","ngDefaultControl","","formControlName","suppliers",3,"text","filter","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","brand_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","unit_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","taxes_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","category_id",3,"text","request","optionLabel","optionValue","placeholder"],["formGroupName","specs"],["type","type","formControlName","height","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","width","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","length","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","material","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","size","ngDefaultControl","","placeholder","",3,"text"],["text","quantity","formControlName","quantity","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","opening_stock","formControlName","opening_stock","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","quantity_alert","formControlName","quantity_alert","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","selling_price","formControlName","selling_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","purchase_price","formControlName","purchase_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["label","image","ngDefaultControl","",3,"onValueChange"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return o.accept()}),t.YNc(11,Y,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"div",11),t._UZ(15,"app-text",12),t.qZA(),t.TgZ(16,"div",11),t._UZ(17,"app-text",13),t.qZA(),t.TgZ(18,"div",11),t._UZ(19,"app-textarea",14),t.qZA(),t.TgZ(20,"div",11),t._UZ(21,"app-multiselect",15),t.qZA(),t.TgZ(22,"div",11),t._UZ(23,"app-dropdown",16),t.qZA(),t.TgZ(24,"div",11),t._UZ(25,"app-dropdown",17),t.qZA(),t.TgZ(26,"div",11),t._UZ(27,"app-dropdown",18),t.qZA(),t.TgZ(28,"div",11),t._UZ(29,"app-dropdown",19),t.qZA(),t.TgZ(30,"div",20)(31,"div",11),t._UZ(32,"app-text",21),t.qZA(),t.TgZ(33,"div",11),t._UZ(34,"app-text",22),t.qZA(),t.TgZ(35,"div",11),t._UZ(36,"app-text",23),t.qZA(),t.TgZ(37,"div",11),t._UZ(38,"app-text",24),t.qZA(),t.TgZ(39,"div",11),t._UZ(40,"app-text",25),t.qZA(),t.TgZ(41,"div",11),t._UZ(42,"app-text",26),t.qZA(),t.TgZ(43,"div",11),t._UZ(44,"app-text",27),t.qZA(),t.TgZ(45,"div",11),t._UZ(46,"app-text",28),t.qZA(),t.TgZ(47,"div",11),t._UZ(48,"app-text",29),t.qZA(),t.TgZ(49,"div",11),t._UZ(50,"app-text",30),t.qZA(),t.TgZ(51,"div",11)(52,"app-file-upload",31),t.NdJ("onValueChange",function(h){return o.onFileSelected(h)}),t.qZA()()()(),t.TgZ(53,"div",32)(54,"div",33)(55,"app-button",34),t.NdJ("click",function(){return o.reject(!1)}),t.qZA()(),t.TgZ(56,"div",33)(57,"app-button",34),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e){let s;t.xp6(8),t.Oqu(t.lcZ(9,89,null!==(s=o.config.header)&&void 0!==s?s:"")),t.xp6(2),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,91,o.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol(""),t.Q6J("text","supplier")("filter",!0)("request",o.SupplierConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","brand")("request",o.brandConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","unit")("request",o.unitTypeConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","tax")("request",o.taxConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","category")("request",o.categoriesConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","category"),t.xp6(3),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","height"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","width"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","length"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","material"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","size"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(93,A))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(94,A))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(95,A))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(96,A))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(97,A))("type","text"),t.xp6(5),t.Tol("btn-cancel"),t.Q6J("text","cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==o.config.data?null:o.config.data.acceptLabel)}},dependencies:[n.sg,E.U,r.Fj,r.JJ,r.JL,r.sg,r.u,r.x0,I.T,S.J,k.R,V.z,w.Y,P.r,n.Nd,D.X$]}),a})();function B(a,p){if(1&a&&(t.TgZ(0,"p",30),t._uU(1),t.qZA()),2&a){const e=p.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}const F=function(){return{type:"number",length:1}};let W=(()=>{class a{constructor(e,o,s,h,x){this.fb=e,this.toastr=o,this.config=s,this.dialogRef=h,this.productService=x,this.unsubscribe=new y.x,this.formGroup=this.initForm(),this.brandConfig=T.r,this.SupplierConfig=N.h,this.unitTypeConfig=L.h,this.taxConfig=O.F,this.categoriesConfig=j.t,this.formData=new FormData,this.default_specs=[{name:"height"},{name:"width"},{name:"length"},{name:"material"},{name:"size"}],this.billingCities=[],this.config.data?.data&&(this.formData.set("id",this.config.data?.data.id),console.log(this.config.data?.data))}initForm(){return this.fb.group({id:[Number],code:[""],default_spec_name:[""],specs:this.fb.group({height:[""],width:[""],length:[""],material:[""],size:[""],quantity:["",r.kI.pattern("^[0-9]*$")],selling_price:["",[r.kI.required,r.kI.pattern("^[0-9 .]*$")]],purchase_price:["",[r.kI.required,r.kI.pattern("^[0-9 .]*$")]],opening_stock:["",[r.kI.required,r.kI.pattern("^[0-9 .]*$")]],quantity_alert:["",[r.kI.required,r.kI.pattern("^[0-9 .]*$")]],taxes_id:[""]})})}onFileSelected(e){if(e.target.files[0])for(const[o,s]of Object.entries(e.target.files))this.formData.set(`specs.images[${o}]`,e.target.files[o])}convertSupFormGroupToFormData(e){Object.keys(e.controls).forEach(o=>{const s=this.formGroup.get("specs."+o);this.formData.append("specs."+o,s?.value)})}convertFormGroupToFormData(){Object.keys(this.formGroup.controls).forEach(e=>{const o=this.formGroup.get(e);o instanceof r.cw?this.convertSupFormGroupToFormData(o):this.formData.append(e,o?.value)})}reject(e){this.dialogRef.close(e)}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.convertFormGroupToFormData(),this.productService.assign(this.formData).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}))}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(r.qu),t.Y36(M._W),t.Y36(U.S),t.Y36(U.E7),t.Y36(q))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-assign-product"]],decls:49,vars:72,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["type","type","formControlName","code","ngDefaultControl","","placeholder","",3,"text"],["ngDefaultControl","","formControlName","default_spec_name",3,"text","data","optionLabel","optionValue","placeholder"],["formGroupName","specs"],["type","type","formControlName","height","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","width","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","length","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","material","ngDefaultControl","","placeholder","",3,"text"],["type","type","formControlName","size","ngDefaultControl","","placeholder","",3,"text"],["text","quantity","formControlName","quantity","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","selling_price","formControlName","selling_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","purchase_price","formControlName","purchase_price","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","opening_stock","formControlName","opening_stock","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["text","quantity_alert","formControlName","quantity_alert","ngDefaultControl","","placeholder","",3,"patternMessage","type"],["ngDefaultControl","","formControlName","taxes_id",3,"text","request","optionLabel","optionValue","placeholder"],["label","image",3,"onValueChange"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"titlecase"),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"app-form",8),t.NdJ("onSubmit",function(){return o.accept()}),t.YNc(12,B,2,1,"p",9),t.ALo(13,"keyvalue"),t.TgZ(14,"div",10)(15,"div",11),t._UZ(16,"app-text",12),t.qZA(),t.TgZ(17,"div",11),t._UZ(18,"app-dropdown",13),t.qZA(),t.TgZ(19,"div",14)(20,"div",11),t._UZ(21,"app-text",15),t.qZA(),t.TgZ(22,"div",11),t._UZ(23,"app-text",16),t.qZA(),t.TgZ(24,"div",11),t._UZ(25,"app-text",17),t.qZA(),t.TgZ(26,"div",11),t._UZ(27,"app-text",18),t.qZA(),t.TgZ(28,"div",11),t._UZ(29,"app-text",19),t.qZA(),t.TgZ(30,"div",11),t._UZ(31,"app-text",20),t.qZA(),t.TgZ(32,"div",11),t._UZ(33,"app-text",21),t.qZA(),t.TgZ(34,"div",11),t._UZ(35,"app-text",22),t.qZA(),t.TgZ(36,"div",11),t._UZ(37,"app-text",23),t.qZA(),t.TgZ(38,"div",11),t._UZ(39,"app-text",24),t.qZA(),t.TgZ(40,"div",11),t._UZ(41,"app-dropdown",25),t.qZA(),t.TgZ(42,"div",11)(43,"app-file-upload",26),t.NdJ("onValueChange",function(h){return o.onFileSelected(h)}),t.qZA()()()(),t.TgZ(44,"div",27)(45,"div",28)(46,"app-button",29),t.NdJ("click",function(){return o.reject(!1)}),t.qZA()(),t.TgZ(47,"div",28)(48,"app-button",29),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e&&(t.xp6(8),t.Oqu(t.lcZ(9,61,t.lcZ(10,63,"assign_product"))),t.xp6(3),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(13,65,o.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","code"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","spec name")("data",o.default_specs)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(3),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","height"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","width"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","length"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","material"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("text","size"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(67,F))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(68,F))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(69,F))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(70,F))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("patternMessage",t.DdM(71,F))("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","tax")("request",o.taxConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(5),t.Tol("btn-cancel"),t.Q6J("text","cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text","assign"))},dependencies:[n.sg,E.U,r.Fj,r.JJ,r.JL,r.sg,r.u,r.x0,I.T,S.J,w.Y,P.r,n.rS,n.Nd,D.X$]}),a})();var R=i(1732),$=i(3562);let q=(()=>{class a{constructor(e,o,s){this.http=e,this.dynamicDialog=o,this.toaster=s}getProducts(e){return this.http.get(d.s.api.get)}openDialogToCreateUnitType(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_product",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},Q)}create(e){return this.http.post(d.s.api.create,e)}delete(e){var o=this;return(0,l.Z)(function*(){const s={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e},name:"name"},width:"500px",height:"auto"};if(yield o.dynamicDialog.confirm(s))try{const x=yield o.http.delete(d.s.api.delete+e.id).toPromise();return o.toaster.success(x.message),x}catch(x){throw o.toaster.error(x.error.message),x}return!1})()}openDialogToUpdateProduct(e){var o=this;return(0,l.Z)(function*(){const s={showHeader:!1,header:"update_product",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"500px",height:"auto"};return yield o.dynamicDialog.showDialogWithComponent(s,Q)})()}update(e){return this.http.post(d.s.api.update+e.get("id"),e)}import(e){return this.http.post(d.s.api.import,e)}exportExample(){return this.http.get(d.s.api.exportExample)}openDialogToAssignProduct(e){const o={showHeader:!1,header:"assign_product",data:{acceptLabel:"assign",rejectLabel:"Cancel",data:{...e}},width:"500px",height:"auto"};return this.dynamicDialog.showDialogWithComponent(o,W)}assign(e){return this.http.post(d.s.api.assign+e.get("id"),e)}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(R.O),t.LFG($.U),t.LFG(M._W))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var K=i(2377),z=i(359),X=i(5077),H=i(4811),tt=i(8275);function et(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"div",17)(1,"button",18),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ul",19)(5,"li",20),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.exportExample())}),t._uU(6),t.ALo(7,"titlecase"),t.ALo(8,"translate"),t.qZA()()()}2&a&&(t.xp6(2),t.hij(" ",t.lcZ(3,2,"export")," "),t.xp6(4),t.hij(" ",t.lcZ(7,4,t.lcZ(8,6,"example"))," "))}function ot(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"app-button",21),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.openDialogToCreate())}),t.qZA()}if(2&a){const e=t.oxw();t.Tol("btn-filter "),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}function nt(a,p){if(1&a&&(t.TgZ(0,"div")(1,"span",29),t._uU(2),t.qZA(),t.TgZ(3,"span",29),t._uU(4),t.qZA()()),2&a){const e=p.$implicit;t.xp6(2),t.hij(" row :",e.row_number," "),t.xp6(2),t.Oqu(e.error)}}function at(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"div",22),t.YNc(1,nt,5,2,"div",23),t.TgZ(2,"app-file-upload",24),t.NdJ("onValueChange",function(s){t.CHM(e);const h=t.oxw();return t.KtG(h.onFileSelected(s))}),t.qZA(),t.TgZ(3,"div",25)(4,"app-button",26),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.import())}),t._UZ(5,"i",27),t.qZA(),t.TgZ(6,"app-button",28),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.closeSectionToImport())}),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.importErrors),t.xp6(1),t.Q6J("multiple",!1)("accept",".csv,.xls,.xlsx")("label","import"),t.xp6(2),t.Q6J("text","save")("loading",e.isLoading),t.xp6(2),t.Q6J("text","cancel")}}const G=function(a){return[a]},it=[{path:"",component:(()=>{class a{constructor(e,o,s){this.productService=e,this.toastr=o,this.translateService=s,this.showImportForm=!1,this.importErrors=[],this.fileName="",this.values=new FormData,this.isLoading=!1,this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"purchase_price",field:"purchase_price"},{label:"selling_price",field:"selling_price"},{label:"creator",field:"creator_id"},{label:"quantity",field:"quantity"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:u.q.asc,field:u.q.asc},{label:u.q.desc,field:u.q.desc}]}],this.filtersConfig=[{field:"search",label:"search",type:v.W.TEXT,placeholder:"search"},{field:"creator_id",label:"created_by",type:v.W.SELECT,options:{value:"id",label:"name"},request:b.x.api.get,placeholder:"select"},{field:"from",label:"from",type:v.W.DATE},{field:"to",label:"to",type:v.W.DATE}],this.permissions=m,this.tableConfig=C(this),this.icon=g.dv}openDialogToCreate(){var e=this;return(0,l.Z)(function*(){(yield e.productService.openDialogToCreateUnitType())&&(e.tableConfig=C(e))})()}openSectionToImport(){this.showImportForm=!0}closeSectionToImport(){this.fileName="",this.showImportForm=!1,this.importErrors=[]}exportExample(){this.productService.exportExample().subscribe(e=>{window.open(e.file_path)})}onFileSelected(e){e.target.files[0]&&(this.fileName=e.target.files[0].name,this.values.set("file",e.target.files[0]))}import(){this.fileName?(this.isLoading=!0,this.productService.import(this.values).subscribe(e=>{this.toastr.success(e.message),this.isLoading=!1,this.fileName="",this.closeSectionToImport(),this.tableConfig=C(this)},e=>{this.isLoading=!1,this.importErrors=e.error.errors,e.error.message&&this.toastr.error(e.error.message)})):this.toastr.error(this.translateService.instant("select_file"))}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(q),t.Y36(M._W),t.Y36(D.sK))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-list"]],decls:20,vars:19,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex","gap-2"],["class","dropdown",4,"hasPermissions"],[3,"text","click"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],["class","import",4,"ngIf"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table","mt-2"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[1,"dropdown"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-cancel","dropdown-toggle"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],[1,"pointer","dropdown-item",3,"click"],[3,"text","icon","iconPos","click"],[1,"import"],[4,"ngFor","ngForOf"],[3,"multiple","accept","label","onValueChange"],[1,"d-flex","gap-2","align-items-center","mt-3"],[3,"text","loading","click"],[1,"fa-solid","fa-check","px-2"],[1,"btn-cancel",3,"text","click"],[1,"text-error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,et,9,8,"div",4),t.TgZ(7,"app-button",5),t.NdJ("click",function(){return o.openSectionToImport()}),t.qZA(),t.YNc(8,ot,1,5,"app-button",6),t.qZA()(),t.YNc(9,at,7,7,"div",7),t.TgZ(10,"div",8),t._UZ(11,"ukt-sort",9,10)(13,"ukt-filter",11,12),t.qZA(),t.TgZ(15,"div",13),t._UZ(16,"app-table",14),t.qZA(),t.TgZ(17,"div",15),t._UZ(18,"ukt-pagination",null,16),t.qZA()()),2&e){const s=t.MAs(12),h=t.MAs(14),x=t.MAs(19);t.xp6(3),t.Oqu(t.lcZ(4,13,"list_of_products")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(15,G,o.permissions.create)),t.xp6(1),t.Tol("btn-cancel"),t.Q6J("text","import"),t.xp6(1),t.Q6J("hasPermissions",t.VKq(17,G,o.permissions.create)),t.xp6(1),t.Q6J("ngIf",o.showImportForm),t.xp6(2),t.Q6J("SortConfig",o.sortConfig),t.xp6(2),t.Q6J("config",o.filtersConfig),t.xp6(3),t.Q6J("tableConfig",o.tableConfig)("pagination",x)("filter",h)("sort",s)}},dependencies:[n.sg,n.O5,K.a,z.Q,w.Y,P.r,X.z,H.x,tt.z,n.rS,D.X$],styles:[".dropdown[_ngcontent-%COMP%]{background-color:transparent!important}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent!important;border:1px solid var(--mainColor);font-size:1.5rem;padding:6px}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.5rem}.import[_ngcontent-%COMP%]{padding:20px;border:2px solid var(--mainColor);border-radius:8px;margin:10px 0}"]}),a})()}];let rt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[f.Bz.forChild(it),f.Bz]}),a})();var lt=i(8096),st=i(1019),pt=i(1890),ct=i(4413),dt=i(2115),ut=i(1471),ft=i(1383);let mt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[n.ez,rt,ut.X,dt.u,ct.e,pt.f,st.i,lt.J,D.aw,ft.m]}),a})()},1771:(J,_,i)=>{i.d(_,{U:()=>m});var n=i(9291),f=i(6223);const l=["*"];let m=(()=>{class d{constructor(){this.onSubmit=new n.vpe}ngOnChanges(u){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const u=this.getFormData();this.onSubmit.emit(u)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return d.\u0275fac=function(u){return new(u||d)},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[n.TTD],ngContentSelectors:l,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(u,Z){1&u&&(n.F$t(),n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return Z.submit()}),n.Hsn(1),n.qZA()),2&u&&n.Q6J("formGroup",Z.formGroup)},dependencies:[f._Y,f.JL,f.sg]}),d})()},4896:(J,_,i)=>{i.d(_,{Y:()=>b});var n=i(9291),f=i(67),l=i(6223),m=i(6814),d=i(3999);function C(c,g){1&c&&n._UZ(0,"i",7)}function u(c,g){if(1&c&&(n.TgZ(0,"label",4),n._uU(1),n.ALo(2,"titlecase"),n.ALo(3,"translate"),n.TgZ(4,"span",5),n.YNc(5,C,1,0,"i",6),n.qZA()()),2&c){const t=n.oxw();n.xp6(1),n.hij("",n.lcZ(2,2,n.lcZ(3,4,t.label))," "),n.xp6(4),n.Q6J("ngIf",t.control&&(null==t.control.errors?null:t.control.errors.required))}}function Z(c,g){if(1&c&&(n.TgZ(0,"p"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&c){const t=n.oxw();n.xp6(1),n.Oqu(n.lcZ(2,1,t.selectedFileCount+"files"))}}function v(c,g){if(1&c&&(n.TgZ(0,"p"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&c){const t=n.oxw();n.xp6(1),n.Oqu(t.selectedFileName?t.selectedFileName:n.lcZ(2,1,t.placeholder))}}let b=(()=>{class c extends f.t{set clear(t){t&&(this.selectedFileCount=0,this.selectedFileName="",this.value=null)}constructor(t){super(),this.formGroupDirective=t,this.uploadedFiles=[],this.multiple=!0,this.label="Upload",this.placeholder="drag_and_drop_you_file_or_Click_here_to_upload",this.accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx",this.onValueChange=new n.vpe,this.selectedFileName="",this.selectedFileCount=0}onFileSelected(t){this.onValueChange.emit(t),this.selectedFileName=t.target.files[0].name,t.target.files&&t.target.files.length>0&&(this.selectedFileCount=t.target.files.length)}onUpload(t){for(let r of t.files)this.uploadedFiles.push(r)}}return c.\u0275fac=function(t){return new(t||c)(n.Y36(l.sg,8))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-file-upload"]],inputs:{value:"value",multiple:"multiple",label:"label",placeholder:"placeholder",accept:"accept",clear:"clear"},outputs:{onValueChange:"onValueChange"},features:[n._Bn([{provide:l.JU,useExisting:c,multi:!0},{provide:l.Cf,useExisting:c,multi:!0}]),n.qOj],decls:5,vars:6,consts:[[1,"file-input"],["for","file",4,"ngIf"],[4,"ngIf"],["id","file","type","file","id","file",1,"form-control",3,"multiple","ngModel","accept","ngModelChange","change"],["for","file"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0),n.YNc(1,u,6,6,"label",1),n.YNc(2,Z,3,3,"p",2),n.YNc(3,v,3,3,"p",2),n.TgZ(4,"input",3),n.NdJ("ngModelChange",function(T){return r.value=T})("change",function(T){return r.onFileSelected(T)}),n.qZA()()),2&t&&(n.xp6(1),n.Q6J("ngIf",r.label),n.xp6(1),n.Q6J("ngIf",r.selectedFileCount>1),n.xp6(1),n.Q6J("ngIf",r.selectedFileCount<=1),n.xp6(1),n.Q6J("multiple",r.multiple)("ngModel",r.value)("accept",r.accept))},dependencies:[m.O5,l.Fj,l.JJ,l.On,m.rS,d.X$],styles:[".file-input[_ngcontent-%COMP%]{position:relative}.file-input[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{position:absolute;left:0;top:0;opacity:0;width:100%;height:100%;min-width:200px!important}.file-input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;padding:8px;border:1px dashed #7ca0c5;border-radius:8px;font-size:14px;cursor:pointer;min-width:200px!important;text-align:center;overflow:hidden}"]}),c})()},5253:(J,_,i)=>{i.d(_,{R:()=>b});var n=i(67),f=i(6223),l=i(9291),m=i(6814),d=i(6218),C=i(3999);function u(c,g){1&c&&l._UZ(0,"i",6)}function Z(c,g){if(1&c&&(l.TgZ(0,"label"),l._uU(1),l.ALo(2,"titlecase"),l.ALo(3,"translate"),l.TgZ(4,"span",4),l.YNc(5,u,1,0,"i",5),l.qZA()()),2&c){const t=l.oxw();l.xp6(1),l.hij("",l.lcZ(2,2,l.lcZ(3,4,t.text))," "),l.xp6(4),l.Q6J("ngIf",t.control&&(null==t.control.errors?null:t.control.errors.required))}}function v(c,g){if(1&c&&(l.TgZ(0,"span"),l._uU(1),l.qZA()),2&c){const t=l.oxw();l.Tol("text-danger"),l.xp6(1),l.Oqu(t.object.keys(t.control.errors)[0])}}let b=(()=>{class c extends n.t{constructor(t){super(),this.formGroupDirective=t,this.placeholder="",this.rows="2",this.cols="",this.readOnly=!1,this.class="d-flex flex-column justify-content-between",this.object=Object}writeValue(t){this.value=t}onValueChange(t){this.onChange(t.target.value),this.onTouched()}}return c.\u0275fac=function(t){return new(t||c)(l.Y36(f.sg,8))},c.\u0275cmp=l.Xpm({type:c,selectors:[["app-textarea"]],inputs:{value:"value",text:"text",placeholder:"placeholder",rows:"rows",cols:"cols",readOnly:"readOnly",class:"class",type:"type"},features:[l._Bn([{provide:f.JU,useExisting:c,multi:!0},{provide:f.Cf,useExisting:c,multi:!0}]),l.qOj],decls:4,vars:8,consts:[[3,"ngClass"],[4,"ngIf"],["pInputTextarea","",3,"rows","cols","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(t,r){1&t&&(l.TgZ(0,"div",0),l.YNc(1,Z,6,6,"label",1),l.TgZ(2,"textarea",2),l.NdJ("ngModelChange",function(T){return r.value=T})("input",function(T){return r.onValueChange(T)}),l.qZA(),l.YNc(3,v,2,3,"span",3),l.qZA()),2&t&&(l.Q6J("ngClass",r.class),l.xp6(1),l.Q6J("ngIf",r.text),l.xp6(1),l.Q6J("rows",r.rows)("cols",r.cols)("ngModel",r.value)("placeholder",r.placeholder)("disabled",r.readOnly),l.xp6(1),l.Q6J("ngIf",r.control&&r.control.errors&&(r.control.touched||r.formGroupDirective.submitted)))},dependencies:[m.mk,m.O5,f.Fj,f.JJ,f.On,d.g,m.rS,C.X$]}),c})()},8718:(J,_,i)=>{i.d(_,{x:()=>n});const n={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}}}]);