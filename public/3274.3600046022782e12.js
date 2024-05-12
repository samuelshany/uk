"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[3274],{3274:(w,v,r)=>{r.r(v),r.d(v,{CustomerSaleModule:()=>pt});var e=r(6814),g=r(8209),t=r(9291),P=r(5861);const u={api:{create:"purchase/create",get:"purchase?type=customer",getTaxes:"tax",getCustomers:"customer",getProducts:"product",getProductBasedOnWarehouse:"product/",getProductSales:"product/with-stock",getWarehouses:"warehouse",getById:"purchase/",update:"purchase/update/",updateFiles:"purchase/updateFiles",delete:"purchase/",exportCvs:"purchase/export/cvs",exportPdf:"purchase/export/pdf",importAccount:"purchase/import"},page:{list:"",update:"update/:id",updateAttachment:"update-attachment/:id",create:"new",view:"view/:id"}};var f=r(4874);const C=a=>{return{cols:[{field:"id",label:"code",class:""},{field:"invoice_number",label:"invoice_number"},{field:"date",label:"date"},{field:"total",label:"total_sales_amount",format:s=>s.total?s.total:0},{field:"total",label:"total_sales_amount",format:s=>s.total?s.total:0},{field:"is_collected",label:"status",format:s=>s.is_collected?"collected":"pending",custom_class_cel:s=>"0"==s.is_collected?"text-active":"text-non-active",class:"text-center"},{label:"action",actions:[{id:f.C.delete,icon:"money-bill-wave",class:"main-color",customClassCondition:s=>0!=s?.is_collected?"":"d-none"},{id:f.C.delete,icon:"eye",class:"main-color"},{id:f.C.delete,icon:"trash",class:"main-color",fun:(s=(0,P.Z)(function*(o){return yield a.customerSaleService.delete(o)}),function(n){return s.apply(this,arguments)})},{id:f.C.edit,icon:"pen-to-square",class:"main-color",route:"update"}]}],Request:u.api.get};var s};var A=r(5219),b=r(1732),M=r(3562),T=r(8763);let y=(()=>{class a{constructor(o,n,l){this.http=o,this.dynamicDialog=n,this.toastr=l}getById(o){return this.http.get(u.api.getById+o)}getTaxes(o){return this.http.getWithParam(u.api.getTaxes,{limit:"all"})}getCustomers(o){return this.http.getWithParam(u.api.getCustomers,{limit:"all"})}getProducts(o){return this.http.getWithParam(u.api.getProductSales,{limit:"all"})}getWarehouses(o){return this.http.getWithParam(u.api.getWarehouses,{limit:"all"})}create(o){return this.http.post(u.api.create,o)}delete(o){var n=this;return(0,P.Z)(function*(){const l={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...o}},width:"300px",height:"164px"};if(yield n.dynamicDialog.confirm(l))try{const h=yield n.http.delete(u.api.delete+o.id).toPromise();return n.toastr.success(h.message),h}catch(h){throw n.toastr.error(h.error.message),h}})()}update(o){return this.http.post(u.api.update+o.get("id"),o)}updateFiles(o){return this.http.post(u.api.updateFiles,o)}getCustomerSaleById(o){return this.http.get(u.api.getById+o)}}return a.\u0275fac=function(o){return new(o||a)(t.LFG(b.O),t.LFG(M.U),t.LFG(T._W))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var N=r(2377),J=r(359),O=r(4779),c=r(8275),m=r(3999);function i(a,s){if(1&a&&t._UZ(0,"app-button",9),2&a){const o=t.oxw();t.Tol("btn-filter mx-2"),t.Q6J("text","new")("icon",o.icon.PLUS)("iconPos","left")}}const x=function(a){return[a]};let p=(()=>{class a{constructor(o){this.customerSaleService=o,this.tableConfig=C(this),this.permissions=f.C,this.icon=A.dv}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(y))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-list-customer-sale"]],decls:13,vars:10,consts:[[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],["routerLink","new",3,"text","class","icon","iconPos",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[1,"table"],[3,"tableConfig","pagination"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],["routerLink","new",3,"text","icon","iconPos"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,i,1,5,"app-button",3),t.qZA()(),t._UZ(7,"div",4),t.TgZ(8,"div",5),t._UZ(9,"app-table",6),t.qZA(),t.TgZ(10,"div",7),t._UZ(11,"ukt-pagination",null,8),t.qZA()),2&o){const l=t.MAs(12);t.xp6(2),t.Oqu(t.lcZ(3,4,t.lcZ(4,6,"customer_sale_list"))),t.xp6(4),t.Q6J("hasPermissions",t.VKq(8,x,n.permissions.create)),t.xp6(3),t.Q6J("tableConfig",n.tableConfig)("pagination",l)}},dependencies:[g.rH,N.a,J.Q,O.r,c.z,e.rS,m.X$]}),a})(),q=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-customer-sale"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-customer-sale"),t.qZA())},dependencies:[p]}),a})();var F=r(8645),Z=r(9773),_=r(6223),I=r(6785),L=r(7625),E=r(1771),k=r(8614),Q=r(1904),G=r(3838),j=r(6098),Y=r(4896);function B(a,s){if(1&a&&(t.TgZ(0,"div",6),t._UZ(1,"app-button",37),t.qZA()),2&a){const o=t.oxw();t.xp6(1),t.Q6J("text","update_attachment")("iconPos","left")("icon","fa-solid fa-check")("routerLink","/key/sales/customer-sale/update-attachment/"+o.activeId)}}function R(a,s){if(1&a&&(t.TgZ(0,"div")(1,"p",38),t._uU(2),t.qZA()()),2&a){const o=s.$implicit;t.xp6(2),t.Oqu(o.value)}}function W(a,s){if(1&a&&(t.TgZ(0,"p",39),t._uU(1),t.qZA()),2&a){const o=t.oxw();t.xp6(1),t.Oqu(null==o.errors?null:o.errors.assigned_id[0])}}function K(a,s){if(1&a){const o=t.EpF();t.TgZ(0,"div",12)(1,"app-dropdown",40),t.NdJ("onDropDownChange",function(l){t.CHM(o);const d=t.oxw();return t.KtG(d.getPaymentAccounts(l))}),t.qZA()()}if(2&a){const o=t.oxw();t.xp6(1),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","payment_method")("request",o.PaymentConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select")}}function V(a,s){if(1&a&&(t.TgZ(0,"div",12),t._UZ(1,"app-dropdown",41),t.qZA()),2&a){const o=t.oxw();let n;t.xp6(1),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("readOnly",""==(null==(n=o.formGroup.get("payment_type_id"))?null:n.value)||null==(null==(n=o.formGroup.get("payment_type_id"))?null:n.value))("text","payment_accounts")("data",o.payment_accounts)("optionLabel","name")("optionValue","id")("placeholder","select")}}function z(a,s){if(1&a){const o=t.EpF();t.TgZ(0,"div",42)(1,"app-file-upload",43),t.NdJ("onValueChange",function(l){t.CHM(o);const d=t.oxw();return t.KtG(d.onFileSelected(l))}),t.qZA()()}}function H(a,s){if(1&a){const o=t.EpF();t.TgZ(0,"tr",44)(1,"td"),t._UZ(2,"app-text",45),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"app-text",46),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"app-text",46),t.qZA(),t.TgZ(7,"td"),t._UZ(8,"app-text",46),t.qZA(),t.TgZ(9,"td"),t._UZ(10,"app-text",46),t.qZA(),t.TgZ(11,"td",31)(12,"i",47),t.NdJ("click",function(){const d=t.CHM(o).index,h=t.oxw();return t.KtG(h.deleteProductFromList(d))}),t.qZA(),t.TgZ(13,"i",48),t.NdJ("click",function(){const l=t.CHM(o),d=l.$implicit,h=l.index,S=t.oxw();return t.KtG(S.fillDataToUpdateProduct(d.value,h))}),t.qZA()()()}if(2&a){const o=s.$implicit;t.xp6(2),t.Q6J("readOnly",!0)("value",o.value.product_name),t.xp6(2),t.Q6J("readOnly",!0)("value",o.value.quantity)("text","")("placeholder",""),t.xp6(2),t.Q6J("readOnly",!0)("value",o.value.discount)("text","")("placeholder",""),t.xp6(2),t.Q6J("readOnly",!0)("value",o.value.product_price)("text","")("placeholder",""),t.xp6(2),t.Q6J("readOnly",!0)("value",o.value.total_product_price)("text","")("placeholder","")}}function $(a,s){if(1&a){const o=t.EpF();t.TgZ(0,"i",49),t.NdJ("click",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.addProductToList())}),t.qZA()}}function X(a,s){if(1&a){const o=t.EpF();t.TgZ(0,"i",50),t.NdJ("click",function(){t.CHM(o);const l=t.oxw();return t.KtG(l.updateProductOnList())}),t.qZA()}}let U=(()=>{class a{constructor(o,n,l,d,h,S,dt){this.fb=o,this.texesService=n,this.router=l,this.route=d,this.customerSaleService=h,this.toastr=S,this.http=dt,this.permissions=f.C,this.showImportForm=!1,this.isLoading=!1,this.importError=[],this.PaymentConfig=I.D,this.payment_accounts=[],this.customerSaleConfig=u,this.taxes=[],this.warehouses=[],this.customers=[],this.products=[],this.unsubscribe=new F.x,this.formGroup=this.initForm(),this.title="add_new_sale",this.actionSale="create",this.total=0,this.productAction="create",this.savedAccounts=[],this.index=0,this.messageError="",this.values=new FormData,this.fileName="",this.minDate=new Date}ngOnInit(){this.route.snapshot.paramMap.get("id")&&(this.activeId=this.route.snapshot.paramMap.get("id"),this.title="update_sale",this.actionSale="update",this.route.data.pipe((0,Z.R)(this.unsubscribe)).subscribe({next:o=>{this.data=o,this.fillForm(this.data.sale.data)},error:o=>{}})),this.customerSaleService.getTaxes().pipe((0,Z.R)(this.unsubscribe)).subscribe({next:o=>{this.taxes=o.data}}),this.customerSaleService.getProducts().pipe((0,Z.R)(this.unsubscribe)).subscribe({next:o=>{this.products=o.data}}),this.customerSaleService.getCustomers().pipe((0,Z.R)(this.unsubscribe)).subscribe({next:o=>{this.customers=o.data}}),this.customerSaleService.getWarehouses().pipe((0,Z.R)(this.unsubscribe)).subscribe({next:o=>{this.warehouses=o.data}})}initForm(){return this.fb.group({id:[Number],invoice_image:[""],customer_id:["",[_.kI.required]],payment_type_id:["",[_.kI.required]],payment_account_id:["",[_.kI.required]],collection_date:["",[_.kI.required]],invoice_number:["",[_.kI.required]],date:["",[_.kI.required]],warehouse_id:["",[_.kI.required]],products:this.fb.array([]),product:this.fb.group({id:[Number],product_id:[""],quantity:[1,[_.kI.required]],discount:[0],product_name:[""],product_price:[""],total_product_price:[""]})})}get productsAtSale(){return this.formGroup.get("products")}get productAtSale(){return this.formGroup.get("product")}onSubmit(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.productsAtSale.length>=1?(this.convertFormGroupToFormData(),"create"==this.actionSale?this.customerSaleService.create(this.values).subscribe(o=>{this.toastr.success(o.message),this.errors=null,this.clearAllForm(),this.router.navigate(["/key/sales/customer-sale"])},o=>{this.errors=o.error.errors}):this.customerSaleService.update(this.values).subscribe(o=>{this.toastr.success(o.message),this.errors=null,this.clearAllForm(),this.router.navigate(["/key/sales/customer-sale"])},o=>{this.errors=o.error.errors})):this.toastr.error("must_be_add_product_1_at_least")}convertFormGroupToFormData(){this.values.set("id",this.formGroup.get("id")?.value),this.values.set("warehouse_id",this.formGroup.get("warehouse_id")?.value),this.values.set("date",this.formGroup.get("date")?.value),this.values.set("invoice_number",this.formGroup.get("invoice_number")?.value),this.values.set("collection_date",this.formGroup.get("collection_date")?.value),this.values.set("payment_type_id",this.formGroup.get("payment_type_id")?.value),this.values.set("payment_account_id",this.formGroup.get("payment_account_id")?.value),this.values.set("customer_id",this.formGroup.get("customer_id")?.value);let o=this.formGroup.get("products");for(let n=0;n<o.length;n++){const l=o.at(n),d=l.get("discount")?.value,h=l.get("quantity")?.value,S=l.get("product_id")?.value;this.values.set(`products[${n}][discount]`,d),this.values.set(`products[${n}][quantity]`,h),this.values.set(`products[${n}][product_id]`,S)}}getProduct(o){this.product=this.products.filter(n=>n.id==o)[0],this.formGroup.get("product")?.patchValue({product_name:this.product?.name,product_price:this.product?.selling_price})}getProductBasedOnWarehouse(o){let n=o.value;n&&this.http.getWithParam(this.customerSaleConfig.api.getProductBasedOnWarehouse+n).subscribe({next:l=>{this.products=l.data}}),this.product=this.products.filter(l=>l.id==n)[0],this.formGroup.get("product")?.patchValue({product_name:this.product?.name,product_price:this.product?.selling_price})}deleteProductFromList(o){this.productsAtSale.controls.forEach((n,l)=>{l==o&&(this.total-=parseFloat(n.value.total_product_price))}),this.productsAtSale.removeAt(o)}addProductToList(){let o=[];this.productAtSale?.value.product_id&&""!=this.productAtSale?.value.product_id?(o=this.productsAtSale.controls.map(n=>n.value.product_id),o.includes(this.productAtSale?.value.product_id)?this.toastr.error("this_product_is_exist"):this.productAtSale?.value.quantity>0?(this.productsAtSale.push(this.fb.group({product_id:this.productAtSale?.value.product_id,quantity:this.productAtSale?.value.quantity,discount:this.productAtSale?.value.discount,product_name:this.productAtSale?.value.product_name,product_price:this.productAtSale?.value.product_price,total_product_price:((parseFloat(this.productAtSale?.value.product_price)-this.productAtSale?.value.discount/100*parseFloat(this.productAtSale?.value.product_price))*parseInt(this.productAtSale?.value.quantity)).toFixed(2)})),this.clearProductForm()):this.toastr.error("quantity_must_be_1_or_more")):this.toastr.error("select_product"),this.calcTotal()}calcTotal(){this.total=0,this.productsAtSale.controls.forEach(o=>{this.total+=parseFloat(o.value.total_product_price)})}fillForm(o){this.formGroup.patchValue({id:o.id,customer_id:o.purchasable.id,invoice_number:o.invoice_number,date:o.date,warehouse_id:o.stock.id,collection_date:o.collection_date,payment_type_id:o.payment_type_id,payment_account_id:o.payment_account_id}),o.products.forEach(n=>{this.productsAtSale.push(this.fb.group({product_id:n.id,quantity:n.pivot.quantity,discount:n.pivot.discount,product_name:n.name,product_price:n.selling_price,total_product_price:((parseFloat(n?.selling_price)-n.pivot.discount/100*parseFloat(n?.selling_price))*parseInt(n.pivot.quantity)).toFixed(2)}))}),this.total=parseFloat(o.total)}fillDataToUpdateProduct(o,n){this.index=n,this.productAction="update",this.formGroup.get("product")?.patchValue({product_name:o.product_name,product_id:o.product_id,quantity:o.quantity,discount:o.discount,product_price:o.product_price,total_product_price:o.total_product_price})}updateProductOnList(){this.productsAtSale.controls.map((o,n)=>{this.productAtSale?.value?.product_id==o.value.product_id&&(this.index==n?(this.productsAtSale.controls[this.index].patchValue({product_id:this.productAtSale?.value?.product_id,product_name:this.productAtSale?.value?.product_name,quantity:this.productAtSale?.value?.quantity,discount:this.productAtSale?.value?.discount,product_price:this.productAtSale?.value?.product_price,total_product_price:((parseFloat(this.productAtSale?.value.product_price)-this.productAtSale?.value.discount/100*parseFloat(this.productAtSale?.value.product_price))*parseInt(this.productAtSale?.value.quantity)).toFixed(2)}),this.calcTotal(),this.clearProductForm(),this.productAction="create"):this.toastr.error("this_product_is_exist"))})}clearProductForm(){this.productAction="create",this.productAtSale?.patchValue({product_name:[""],product_id:[""],quantity:[""],discount:[0],product_price:[""],total_product_price:[""]})}clearAllForm(){for(;0!==this.productsAtSale.length;)this.productsAtSale.removeAt(0);this.formGroup.reset(),this.total=0;for(const[o,n]of this.values)this.values.delete(o)}onFileSelected(o){if(o.target.files[0])for(const[n,l]of Object.entries(o.target.files))this.values.set(`invoice_image[${n}]`,o.target.files[n])}getPaymentAccounts(o){let n=o.value;n&&this.http.getWithParam(this.PaymentConfig.api.getPaymentAccount+n).subscribe({next:l=>{this.payment_accounts=l.data}})}setMinDateForCollectionDate(o){this.minDate=new Date(o)}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(_.qu),t.Y36(L.N),t.Y36(g.F0),t.Y36(g.gz),t.Y36(y),t.Y36(T._W),t.Y36(b.O))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-new-customer-sale"]],decls:82,vars:86,consts:[[1,"page-card"],[1,"header","row","justify-content-between","align-items-center"],[1,"title","col-md-6"],["routerLink","/key/sales/customer-sale",1,"fa-solid","fa-arrow-left","me-2"],[1,"d-flex","align-items-center","justify-content-end","g-2","col-md-6"],["class","px-1",4,"ngIf"],[1,"px-1"],["routerLink","/key/sales/customer-sale",1,"btn-cancel",3,"iconPos","icon","text"],[1,"btn-filter",3,"text","iconPos","icon","click"],[4,"ngFor","ngForOf"],[3,"formGroup","onSubmit"],[1,"row"],[1,"col-md-6","mt-3"],["ngDefaultControl","","formControlName","invoice_number",3,"text","placeholder"],["ngDefaultControl","","formControlName","customer_id",3,"text","data","optionLabel","optionValue","placeholder"],["class","messageError",4,"ngIf"],[1,"date","col-md-6","mt-3"],["ngDefaultControl","","formControlName","date",3,"text","onDateChange"],["ngDefaultControl","","formControlName","warehouse_id",3,"text","data","optionLabel","optionValue","placeholder","onDropDownChange"],["class","col-md-6 mt-3",4,"ngIf"],["ngDefaultControl","","formControlName","collection_date",3,"readOnly","minDate","text"],["class"," col-md-6",4,"ngIf"],[1,"table-responsive"],[1,"table"],[1,"table-head"],["scope","col",1,"head"],["formArrayName","products",4,"ngFor","ngForOf"],["formGroupName","product"],["formControlName","product_id","placeholder","select",3,"readOnly","data","optionLabel","optionValue","showClear","ngModelChange"],["formControlName","quantity",3,"showButtons","text","placeholder","keydown.enter"],["formControlName","discount",3,"showButtons","text","placeholder","keydown.enter"],[1,"action"],["class","fa-solid fa-plus fs-4 main-color pointer",3,"click",4,"ngIf"],["class","fa-solid fa-check fs-4 main-color mx-2 pointer",3,"click",4,"ngIf"],[1,"fa-solid","fa-cancel","fs-4","text-danger","mx-2","pointer",3,"click"],[1,"title"],[1,"btn-filter","text-light"],[1,"btn-cancel",3,"text","iconPos","icon","routerLink"],[1,"alert","alert-danger","text-center"],[1,"messageError"],["ngDefaultControl","","formControlName","payment_type_id",3,"text","request","optionLabel","optionValue","placeholder","onDropDownChange"],["ngDefaultControl","","formControlName","payment_account_id",3,"readOnly","text","data","optionLabel","optionValue","placeholder"],[1,"col-md-6"],["label","image","ngDefaultControl","","formControlName","invoice_image",3,"onValueChange"],["formArrayName","products"],[3,"readOnly","value"],[3,"readOnly","value","text","placeholder"],[1,"fa-solid","fa-trash","fs-4","text-danger","mx-2","pointer",3,"click"],[1,"fa-solid","fa-pen-to-square","fs-4","main-color","mx-2","pointer",3,"click"],[1,"fa-solid","fa-plus","fs-4","main-color","pointer",3,"click"],[1,"fa-solid","fa-check","fs-4","main-color","mx-2","pointer",3,"click"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._UZ(3,"i",3),t._uU(4),t.ALo(5,"titlecase"),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"div",4),t.YNc(8,B,2,4,"div",5),t.TgZ(9,"div",6),t._UZ(10,"app-button",7),t.qZA(),t.TgZ(11,"div",6)(12,"app-button",8),t.NdJ("click",function(){return n.onSubmit()}),t.qZA()()()(),t.YNc(13,R,3,1,"div",9),t.ALo(14,"keyvalue"),t.TgZ(15,"app-form",10),t.NdJ("onSubmit",function(){return n.onSubmit()}),t.TgZ(16,"div",11)(17,"div",12),t._UZ(18,"app-text",13),t.qZA(),t.TgZ(19,"div",12),t._UZ(20,"app-dropdown",14),t.YNc(21,W,2,1,"p",15),t.qZA(),t.TgZ(22,"div",16)(23,"app-date",17),t.NdJ("onDateChange",function(d){return n.setMinDateForCollectionDate(d)}),t.qZA()(),t.TgZ(24,"div",12)(25,"app-dropdown",18),t.NdJ("onDropDownChange",function(d){return n.getProductBasedOnWarehouse(d)}),t.qZA()(),t.YNc(26,K,2,7,"div",19),t.YNc(27,V,2,8,"div",19),t.TgZ(28,"div",16),t._UZ(29,"app-date",20),t.qZA(),t.YNc(30,z,2,0,"div",21),t.qZA(),t.TgZ(31,"div",22)(32,"table",23)(33,"thead",24)(34,"tr")(35,"th",25),t._uU(36),t.ALo(37,"translate"),t.qZA(),t.TgZ(38,"th",25),t._uU(39),t.ALo(40,"translate"),t.qZA(),t.TgZ(41,"th",25),t._uU(42),t.ALo(43,"translate"),t.qZA(),t.TgZ(44,"th",25),t._uU(45),t.ALo(46,"translate"),t.qZA(),t.TgZ(47,"th",25),t._uU(48),t.ALo(49,"translate"),t.qZA(),t.TgZ(50,"th",25),t._uU(51),t.ALo(52,"translate"),t.qZA()()(),t.TgZ(53,"tbody"),t.YNc(54,H,14,18,"tr",26),t.TgZ(55,"tr",27)(56,"td")(57,"app-dropdown",28),t.NdJ("ngModelChange",function(d){return n.getProduct(d)}),t.qZA()(),t.TgZ(58,"td")(59,"app-number-input",29),t.NdJ("keydown.enter",function(){return n.addProductToList()}),t.qZA()(),t.TgZ(60,"td")(61,"app-number-input",30),t.NdJ("keydown.enter",function(){return n.addProductToList()}),t.qZA()(),t._UZ(62,"td")(63,"td"),t.TgZ(64,"td",31),t.YNc(65,$,1,0,"i",32),t.YNc(66,X,1,0,"i",33),t.TgZ(67,"i",34),t.NdJ("click",function(){return n.clearProductForm()}),t.qZA()()(),t.TgZ(68,"tr",35)(69,"th",36),t._uU(70),t.ALo(71,"translate"),t.qZA(),t.TgZ(72,"th",36),t._uU(73),t.qZA(),t.TgZ(74,"th",36),t._uU(75),t.qZA(),t.TgZ(76,"th",36),t._uU(77),t.qZA(),t.TgZ(78,"th",36),t._uU(79),t.qZA(),t.TgZ(80,"th",36),t._uU(81),t.qZA()()()()()()()),2&o){let l,d;t.xp6(4),t.hij("",t.lcZ(5,66,t.lcZ(6,68,n.title))," "),t.xp6(4),t.Q6J("ngIf","update_sale"==n.title),t.xp6(2),t.Q6J("iconPos","left")("icon","fa-solid fa-ban")("text","cancel"),t.xp6(2),t.Q6J("text","save")("iconPos","left")("icon","fa-solid fa-check"),t.xp6(1),t.Q6J("ngForOf",t.lcZ(14,70,n.errors)),t.xp6(2),t.Q6J("formGroup",n.formGroup),t.xp6(3),t.Tol("d-flex flex-column justify-content-between "),t.Q6J("text","invoice_number")("placeholder",""),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","customer")("data",n.customers)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(1),t.Q6J("ngIf",null==n.errors?null:n.errors.assigned_id),t.xp6(2),t.Tol("d-flex flex-column justify-content-between "),t.Q6J("text","date"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","warehouse")("data",n.warehouses)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(1),t.Q6J("ngIf","create"==n.actionSale),t.xp6(1),t.Q6J("ngIf","create"==n.actionSale),t.xp6(2),t.Tol("d-flex flex-column justify-content-between "),t.Q6J("readOnly",""==(null==(l=n.formGroup.get("date"))?null:l.value)||null==(null==(l=n.formGroup.get("date"))?null:l.value))("minDate",n.minDate)("text","collection_date"),t.xp6(1),t.Q6J("ngIf","add_new_sale"==n.title),t.xp6(6),t.Oqu(t.lcZ(37,72,"product")),t.xp6(3),t.Oqu(t.lcZ(40,74,"quantity")),t.xp6(3),t.hij("",t.lcZ(43,76,"discount")," %"),t.xp6(3),t.Oqu(t.lcZ(46,78,"price")),t.xp6(3),t.Oqu(t.lcZ(49,80,"total_price")),t.xp6(3),t.Oqu(t.lcZ(52,82,"actions")),t.xp6(3),t.Q6J("ngForOf",n.productsAtSale.controls),t.xp6(3),t.Q6J("readOnly",""==(null==(d=n.formGroup.get("warehouse_id"))?null:d.value)||null==(null==(d=n.formGroup.get("warehouse_id"))?null:d.value))("data",n.products)("optionLabel","name")("optionValue","id")("showClear",!0),t.xp6(2),t.Q6J("showButtons",!1)("text","")("placeholder",""),t.xp6(2),t.Q6J("showButtons",!1)("text","")("placeholder",""),t.xp6(4),t.Q6J("ngIf","create"==n.productAction),t.xp6(1),t.Q6J("ngIf","update"==n.productAction),t.xp6(4),t.Oqu(t.lcZ(71,84,"total")),t.xp6(3),t.Oqu(n.total.toFixed(2)),t.xp6(2),t.Oqu(""),t.xp6(2),t.Oqu(""),t.xp6(2),t.Oqu(""),t.xp6(2),t.Oqu("")}},dependencies:[e.sg,e.O5,g.rH,E.U,_.Fj,_.JJ,_.JL,_.sg,_.u,_.x0,_.CE,k.T,Q.D,G.J,j.I,Y.Y,O.r,e.rS,e.Nd,m.X$],styles:["[_nghost-%COMP%]   .main[_ngcontent-%COMP%]{background-color:var(--white);padding:2rem 2.8rem!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .import[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .import[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1.5rem;height:30px}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .import[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:var(--red);font-size:1.4rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   app-form[_ngcontent-%COMP%]   .entry-no[_ngcontent-%COMP%]{padding-right:1.5rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   app-form[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{padding-left:1.5rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   app-form[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]{margin-top:3rem;margin-bottom:5rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   app-form[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{display:flex;padding:17px 5px;border:none}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   app-form[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{background-color:var(--mainColor)!important;color:var(--white);font-size:14px;padding:10px}.head[_ngcontent-%COMP%]{min-width:150px!important}"]}),a})(),D=(()=>{class a{constructor(o){this.customerSaleService=o}resolve(o){return this.customerSaleService.getById(o.params.id)}}return a.\u0275fac=function(o){return new(o||a)(t.LFG(y))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var tt=r(5435);const ot=[{path:u.page.list,component:q},{path:u.page.create,component:U},{path:u.page.update,component:U,resolve:{sale:D}},{path:u.page.updateAttachment,component:(()=>{class a{constructor(o){this.route=o,this.customerSaleConfig=u,this.unsubscribe=new F.x}ngOnInit(){this.route.data.pipe((0,Z.R)(this.unsubscribe)).subscribe({next:o=>{this.data=o.sale.data},error:o=>{}})}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(g.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-attachment-sale-edit"]],decls:1,vars:5,consts:[[3,"filesName","data","listPageRoute","listPageTitle","endPoint"]],template:function(o,n){1&o&&t._UZ(0,"app-update-attachment",0),2&o&&t.Q6J("filesName","invoice_image")("data",n.data)("listPageRoute","/key/sales/customer-sale")("listPageTitle","customer_sale_list")("endPoint",n.customerSaleConfig.api.updateFiles)},dependencies:[tt.f],styles:[".items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;line-height:24px;color:#101828;margin:30px 0;width:100%}.items[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:200px;width:200px;border:1px solid var(--mainColor);border-radius:10px;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.items[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.items[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:198px;border-radius:10px}.items[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]{width:200px;height:200px;border:1px solid var(--mainColor);border-radius:14px;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.items[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.items[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0;width:100%}.items[_ngcontent-%COMP%]   .btn-change[_ngcontent-%COMP%]{background:var(--white);color:var(--mainColor);border:1px solid var(--mainColor);border-radius:3px;margin:6px 0;padding:7px 0;font-size:14px;width:110px}.customFileInput[_ngcontent-%COMP%]::-webkit-file-upload-button{visibility:hidden}.import[_ngcontent-%COMP%]{padding:20px;border:2px solid var(--mainColor);border-radius:8px;margin:10px 0}"]}),a})(),resolve:{sale:D}}];let nt=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.Bz.forChild(ot),g.Bz]}),a})();var at=r(1471),it=r(2115),rt=r(4413),st=r(1890),lt=r(1019),ct=r(8096),ut=r(1383);let pt=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[e.ez,nt,at.X,it.u,rt.e,st.f,lt.i,ct.J,m.aw,ut.m]}),a})()},359:(w,v,r)=>{r.d(v,{Q:()=>O});var e=r(9291),g=r(6814),t=r(3999);function P(c,m){if(1&c){const i=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(i);const p=e.oxw(2);return e.KtG(p.changePage(p.page-1))}),e._UZ(1,"i",13),e._uU(2),e.ALo(3,"translate"),e.qZA()}2&c&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"prev")," "))}function u(c,m){if(1&c){const i=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(i);const p=e.oxw(2);return e.KtG(p.changePage(1))}),e._uU(1),e.qZA()}if(2&c){const i=e.oxw(2);e.Q6J("disabled",1==i.page),e.xp6(1),e.hij(" ",1," ")}}function f(c,m){1&c&&(e.TgZ(0,"span",15),e._uU(1," ..."),e.qZA())}function C(c,m){if(1&c){const i=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(i);const p=e.oxw(2);return e.KtG(p.changePage(p.page-2))}),e._uU(1),e.qZA()}if(2&c){const i=e.oxw(2);e.Q6J("disabled",1==i.page),e.xp6(1),e.hij(" ",i.page-2," ")}}function A(c,m){if(1&c){const i=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(i);const p=e.oxw(2);return e.KtG(p.changePage(p.page-1))}),e._uU(1),e.qZA()}if(2&c){const i=e.oxw(2);e.Q6J("disabled",1==i.page),e.xp6(1),e.hij(" ",i.page-1," ")}}function b(c,m){if(1&c){const i=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(i);const p=e.oxw(2);return e.KtG(p.changePage(p.page+1))}),e._uU(1),e.qZA()}if(2&c){const i=e.oxw(2);e.Q6J("disabled",i.page==i.totalPages),e.xp6(1),e.hij(" ",i.page+1," ")}}function M(c,m){if(1&c){const i=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(i);const p=e.oxw(2);return e.KtG(p.changePage(p.page+2))}),e._uU(1),e.qZA()}if(2&c){const i=e.oxw(2);e.Q6J("disabled",i.page==i.totalPages),e.xp6(1),e.hij(" ",i.page+2," ")}}function T(c,m){1&c&&(e.TgZ(0,"span",15),e._uU(1," ..."),e.qZA())}function y(c,m){if(1&c){const i=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(i);const p=e.oxw(2);return e.KtG(p.changePage(p.totalPages))}),e._uU(1),e.qZA()}if(2&c){const i=e.oxw(2);e.Q6J("disabled",i.page==i.totalPages),e.xp6(1),e.hij(" ",i.totalPages," ")}}function N(c,m){if(1&c){const i=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(i);const p=e.oxw(2);return e.KtG(p.changePage(p.page+1))}),e._uU(1),e.ALo(2,"translate"),e._UZ(3,"i",16),e.qZA()}2&c&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"next")," "))}function J(c,m){if(1&c&&(e.TgZ(0,"div",1)(1,"p",2),e._uU(2),e.ALo(3,"titlecase"),e.ALo(4,"translate"),e.TgZ(5,"span"),e._uU(6),e.qZA()(),e.TgZ(7,"nav",3)(8,"ul",4)(9,"li",5),e.YNc(10,P,4,3,"button",6),e.qZA(),e.TgZ(11,"li",7),e.YNc(12,u,2,2,"button",8),e.YNc(13,f,2,0,"span",9),e.YNc(14,C,2,2,"button",8),e.YNc(15,A,2,2,"button",8),e.TgZ(16,"span",10)(17,"button",11),e._uU(18),e.qZA()(),e.YNc(19,b,2,2,"button",8),e.YNc(20,M,2,2,"button",8),e.YNc(21,T,2,0,"span",9),e.YNc(22,y,2,2,"button",8),e.qZA(),e.TgZ(23,"li",5),e.YNc(24,N,4,3,"button",6),e.qZA()()()()),2&c){const i=e.oxw();e.xp6(2),e.hij("",e.lcZ(3,13,e.lcZ(4,15,"total_items"))," "),e.xp6(4),e.Oqu(i.total),e.xp6(4),e.Q6J("ngIf",i.page>1),e.xp6(2),e.Q6J("ngIf",i.page>3),e.xp6(1),e.Q6J("ngIf",i.page>3),e.xp6(1),e.Q6J("ngIf",i.page>2),e.xp6(1),e.Q6J("ngIf",1!=i.page),e.xp6(3),e.Oqu(i.page),e.xp6(1),e.Q6J("ngIf",i.page!=i.totalPages),e.xp6(1),e.Q6J("ngIf",i.page!=i.totalPages&&i.page!=i.totalPages-1),e.xp6(1),e.Q6J("ngIf",i.page!=i.totalPages&&i.page!=i.totalPages-1&&i.page!=i.totalPages-2),e.xp6(1),e.Q6J("ngIf",i.page!=i.totalPages&&i.page!=i.totalPages-1&&i.page!=i.totalPages-2),e.xp6(2),e.Q6J("ngIf",i.page!=i.totalPages)}}let O=(()=>{class c{constructor(){this.total=0,this.onPaginationChange=new e.vpe,this.rppOptions=[{label:"10",value:10},{label:"30",value:30},{label:"40",value:40}],this.rpp=this.rppOptions[0].value,this.page=1,this.totalPages=0,this.totalClipPages=0}getPage(){return this.page}setTotal(i){this.total=i,this.totalPages=Math.ceil(this.total/this.rpp),this.totalClipPages=Math.ceil(this.totalPages-(this.totalPages-(this.page+1))/2)}changeRPP(){this.page=1,this.onPaginationChange.next({page:this.page,limit:this.rpp})}changePage(i){this.page=i,this.onPaginationChange.next({page:this.page,limit:this.rpp})}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["ukt-pagination"]],inputs:{total:"total",rppOptions:"rppOptions"},outputs:{onPaginationChange:"onPaginationChange"},decls:1,vars:1,consts:[["class","pagination d-flex align-items-center ",4,"ngIf"],[1,"pagination","d-flex","align-items-center"],[1,"total_items"],["aria-label","Page navigation "],[1,"pagination","d-flex","justify-content-between"],[1,"page-item","mx-3"],["class","btn btn-light border-1",3,"click",4,"ngIf"],[1,"page-item","d-flex","gap-3"],["class","btn btn-light border-1",3,"disabled","click",4,"ngIf"],["class","fw-bold mx-2",4,"ngIf"],[1,"page-item"],["disabled","",1,"page-link","rounded","border-1","active"],[1,"btn","btn-light","border-1",3,"click"],[1,"fa-solid","fa-arrow-left","mx-1"],[1,"btn","btn-light","border-1",3,"disabled","click"],[1,"fw-bold","mx-2"],[1,"fa-solid","fa-arrow-right","mx-1"]],template:function(i,x){1&i&&e.YNc(0,J,25,17,"div",0),2&i&&e.Q6J("ngIf",0!=x.totalPages)},dependencies:[g.O5,g.rS,t.X$],styles:[".total_items[_ngcontent-%COMP%]{font-size:14px;margin-top:4px}.total_items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:1px solid var(--mainColor);padding:5px 10px;border-radius:4px}"]}),c})()},2115:(w,v,r)=>{r.d(v,{u:()=>P});var e=r(6814),g=r(3999),t=r(9291);let P=(()=>{class u{}return u.\u0275fac=function(C){return new(C||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[e.ez,g.aw]}),u})()},8096:(w,v,r)=>{r.d(v,{J:()=>f});var e=r(6814),g=r(9624),t=r(4413),P=r(3999),u=r(9291);let f=(()=>{class C{}return C.\u0275fac=function(b){return new(b||C)},C.\u0275mod=u.oAB({type:C}),C.\u0275inj=u.cJS({imports:[e.ez,g.U,t.e,P.aw]}),C})()}}]);