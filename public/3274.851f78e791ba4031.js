"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[3274],{3274:(M,C,r)=>{r.r(C),r.d(C,{CustomerSaleModule:()=>mt});var e=r(6814),g=r(8209),t=r(9291),P=r(5861);const p={api:{create:"purchase/create",get:"purchase?type=customer",getTaxes:"tax",getCustomers:"customer",getProducts:"product",getStocks:"stock",getById:"purchase/",update:"purchase/update/",updateFiles:"purchase/updateFiles",delete:"purchase/",exportCvs:"purchase/export/cvs",exportPdf:"purchase/export/pdf",importAccount:"purchase/import"},page:{list:"",update:"update/:id",updateAttachment:"update-attachment/:id",create:"new",view:"view/:id"}};var f=r(4874);const x=n=>{return{cols:[{field:"id",label:"code",class:""},{field:"invoice_number",label:"invoice_number"},{field:"date",label:"date"},{field:"total",label:"total_sales_amount",format:s=>s.total?s.total:0},{field:"total",label:"total_sales_amount",format:s=>s.total?s.total:0},{field:"is_collected",label:"status",format:s=>s.is_collected?"collected":"pending",custom_class_cel:s=>"0"==s.is_collected?"text-active":"text-non-active",class:"text-center"},{label:"action",actions:[{id:f.C.delete,icon:"money-bill-wave",class:"main-color",customClassCondition:s=>0!=s?.is_collected?"":"d-none"},{id:f.C.delete,icon:"eye",class:"main-color"},{id:f.C.delete,icon:"trash",class:"main-color",fun:(s=(0,P.Z)(function*(o){return yield n.customerSaleService.delete(o)}),function(a){return s.apply(this,arguments)})},{id:f.C.edit,icon:"pen-to-square",class:"main-color",route:"update"}]}],Request:p.api.get};var s};var Z=r(5219),A=r(5619),y=r(1732),w=r(3562),O=r(8763);let S=(()=>{class n{constructor(o,a,c){this.http=o,this.dynamicDialog=a,this.toastr=c,this.latestJournals=new A.X([])}getCustomerSales(o){return this.http.get(p.api.get)}getById(o){return this.http.get(p.api.getById+o)}getTaxes(o){return this.http.get(p.api.getTaxes)}getCustomers(o){return this.http.get(p.api.getCustomers)}getProducts(o){return this.http.get(p.api.getProducts)}getStocks(o){return this.http.get(p.api.getStocks)}create(o){return this.http.post(p.api.create,o)}delete(o){var a=this;return(0,P.Z)(function*(){const c={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...o}},width:"300px",height:"164px"};if(yield a.dynamicDialog.confirm(c))try{const h=yield a.http.delete(p.api.delete+o.id).toPromise();return a.toastr.success(h.message),h}catch(h){throw a.toastr.error(h.error.message),h}})()}update(o){return this.http.post(p.api.update+o.get("id"),o)}updateFiles(o){return this.http.post(p.api.updateFiles,o)}getCustomerSaleById(o){return this.http.get(p.api.getById+o)}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(y.O),t.LFG(w.U),t.LFG(O._W))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var N=r(2377),J=r(359),l=r(4779),m=r(8275),i=r(3999);function v(n,s){if(1&n&&t._UZ(0,"app-button",9),2&n){const o=t.oxw();t.Tol("btn-filter mx-2"),t.Q6J("text","new")("icon",o.icon.PLUS)("iconPos","left")}}const u=function(n){return[n]};let I=(()=>{class n{constructor(o){this.customerSaleService=o,this.tableConfig=x(this),this.permissions=f.C,this.icon=Z.dv}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(S))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-customer-sale"]],decls:13,vars:10,consts:[[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],["routerLink","new",3,"text","class","icon","iconPos",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[1,"table"],[3,"tableConfig","pagination"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],["routerLink","new",3,"text","icon","iconPos"]],template:function(o,a){if(1&o&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"titlecase"),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,v,1,5,"app-button",3),t.qZA()(),t._UZ(7,"div",4),t.TgZ(8,"div",5),t._UZ(9,"app-table",6),t.qZA(),t.TgZ(10,"div",7),t._UZ(11,"ukt-pagination",null,8),t.qZA()),2&o){const c=t.MAs(12);t.xp6(2),t.Oqu(t.lcZ(3,4,t.lcZ(4,6,"customer_sale_list"))),t.xp6(4),t.Q6J("hasPermissions",t.VKq(8,u,a.permissions.create)),t.xp6(3),t.Q6J("tableConfig",a.tableConfig)("pagination",c)}},dependencies:[g.rH,N.a,J.Q,l.r,m.z,e.rS,i.X$]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-customer-sale"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-customer-sale"),t.qZA())},dependencies:[I]}),n})();var F=r(8645),b=r(9773),d=r(6223),k=r(6785),E=r(7625),Q=r(1771),D=r(8614),G=r(1904),Y=r(3838),j=r(6098),B=r(4896);function R(n,s){if(1&n&&(t.TgZ(0,"div",6),t._UZ(1,"app-button",37),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("text","update_attachment")("iconPos","left")("icon","fa-solid fa-check")("routerLink","/key/sales/customer-sale/update-attachment/"+o.activeId)}}function K(n,s){if(1&n&&(t.TgZ(0,"div")(1,"p",38),t._uU(2),t.qZA()()),2&n){const o=s.$implicit;t.xp6(2),t.Oqu(o.value)}}function V(n,s){if(1&n&&(t.TgZ(0,"p",39),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(null==o.errors?null:o.errors.assigned_id[0])}}function z(n,s){if(1&n&&(t.TgZ(0,"p",39),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(null==o.errors?null:o.errors.assigned_id[0])}}function H(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"div",12)(1,"app-dropdown",40),t.NdJ("onDropDownChange",function(c){t.CHM(o);const _=t.oxw();return t.KtG(_.getPaymentAccounts(c))}),t.qZA()()}if(2&n){const o=t.oxw();t.xp6(1),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","payment_method")("request",o.PaymentConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select")}}function W(n,s){if(1&n&&(t.TgZ(0,"div",12),t._UZ(1,"app-dropdown",41),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","payment_accounts")("data",o.payment_accounts)("optionLabel","name")("optionValue","id")("placeholder","select")}}function X(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"div",42)(1,"app-file-upload",43),t.NdJ("onValueChange",function(c){t.CHM(o);const _=t.oxw();return t.KtG(_.onFileSelected(c))}),t.qZA()()}}function $(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"tr",44)(1,"td"),t._UZ(2,"app-text",45),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"app-text",46),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"app-text",46),t.qZA(),t.TgZ(7,"td"),t._UZ(8,"app-text",46),t.qZA(),t.TgZ(9,"td"),t._UZ(10,"app-text",46),t.qZA(),t.TgZ(11,"td",31)(12,"i",47),t.NdJ("click",function(){const _=t.CHM(o).index,h=t.oxw();return t.KtG(h.deleteProductFromList(_))}),t.qZA(),t.TgZ(13,"i",48),t.NdJ("click",function(){const c=t.CHM(o),_=c.$implicit,h=c.index,T=t.oxw();return t.KtG(T.fillDataToUpdateProduct(_.value,h))}),t.qZA()()()}if(2&n){const o=s.$implicit;t.xp6(2),t.Q6J("readOnly",!0)("value",o.value.product_name),t.xp6(2),t.Q6J("readOnly",!0)("value",o.value.quantity)("text","")("placeholder",""),t.xp6(2),t.Q6J("readOnly",!0)("value",o.value.discount)("text","")("placeholder",""),t.xp6(2),t.Q6J("readOnly",!0)("value",o.value.product_price)("text","")("placeholder",""),t.xp6(2),t.Q6J("readOnly",!0)("value",o.value.total_product_price)("text","")("placeholder","")}}function tt(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"i",49),t.NdJ("click",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.addProductToList())}),t.qZA()}}function et(n,s){if(1&n){const o=t.EpF();t.TgZ(0,"i",50),t.NdJ("click",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.updateProductOnList())}),t.qZA()}}let U=(()=>{class n{constructor(o,a,c,_,h,T,gt){this.fb=o,this.texesService=a,this.router=c,this.route=_,this.customerSaleService=h,this.toastr=T,this.http=gt,this.permissions=f.C,this.showImportForm=!1,this.isLoading=!1,this.importError=[],this.PaymentConfig=k.D,this.payment_accounts=[],this.taxes=[],this.stocks=[],this.customers=[],this.products=[],this.unsubscribe=new F.x,this.formGroup=this.initForm(),this.title="add_new_sale",this.actionSale="create",this.total=0,this.productAction="create",this.savedAccounts=[],this.index=0,this.messageError="",this.values=new FormData,this.fileName=""}ngOnInit(){this.route.snapshot.paramMap.get("id")&&(this.activeId=this.route.snapshot.paramMap.get("id"),this.title="update_sale",this.actionSale="update",this.route.data.pipe((0,b.R)(this.unsubscribe)).subscribe({next:o=>{this.data=o,this.fillForm(this.data.sale.data)},error:o=>{}})),this.customerSaleService.getTaxes().pipe((0,b.R)(this.unsubscribe)).subscribe({next:o=>{this.taxes=o.data}}),this.customerSaleService.getProducts().pipe((0,b.R)(this.unsubscribe)).subscribe({next:o=>{this.products=o.data}}),this.customerSaleService.getCustomers().pipe((0,b.R)(this.unsubscribe)).subscribe({next:o=>{this.customers=o.data}}),this.customerSaleService.getStocks().pipe((0,b.R)(this.unsubscribe)).subscribe({next:o=>{this.stocks=o.data}})}initForm(){return this.fb.group({id:[Number],invoice_image:[""],customer_id:["",[d.kI.required]],payment_type_id:["",[d.kI.required]],payment_account_id:["",[d.kI.required]],collection_date:["",[d.kI.required]],invoice_number:["",[d.kI.required]],date:["",[d.kI.required]],stock_id:["",[d.kI.required]],products:this.fb.array([]),product:this.fb.group({id:[Number],product_id:[""],quantity:[1,[d.kI.required]],discount:[0],product_name:[""],product_price:[""],total_product_price:[""]})})}get productsAtSale(){return this.formGroup.get("products")}get productAtSale(){return this.formGroup.get("product")}onSubmit(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.productsAtSale.length>=1?(this.convertFormGroupToFormData(),"create"==this.actionSale?this.customerSaleService.create(this.values).subscribe(o=>{this.toastr.success(o.message),this.errors=null,this.clearAllForm(),this.router.navigate(["/key/sales/customer-sale"])},o=>{this.errors=o.error.errors}):this.customerSaleService.update(this.values).subscribe(o=>{this.toastr.success(o.message),this.errors=null,this.clearAllForm(),this.router.navigate(["/key/sales/customer-sale"])},o=>{this.errors=o.error.errors})):this.toastr.error("must_be_add_product_1_at_least")}convertFormGroupToFormData(){this.values.set("id",this.formGroup.get("id")?.value),this.values.set("stock_id",this.formGroup.get("stock_id")?.value),this.values.set("date",this.formGroup.get("date")?.value),this.values.set("invoice_number",this.formGroup.get("invoice_number")?.value),this.values.set("collection_date",this.formGroup.get("collection_date")?.value),this.values.set("payment_type_id",this.formGroup.get("payment_type_id")?.value),this.values.set("payment_account_id",this.formGroup.get("payment_account_id")?.value),this.values.set("customer_id",this.formGroup.get("customer_id")?.value);let o=this.formGroup.get("products");for(let a=0;a<o.length;a++){const c=o.at(a),_=c.get("discount")?.value,h=c.get("quantity")?.value,T=c.get("product_id")?.value;this.values.set(`products[${a}][discount]`,_),this.values.set(`products[${a}][quantity]`,h),this.values.set(`products[${a}][product_id]`,T)}}getProduct(o){this.product=this.products.filter(a=>a.id==o)[0],this.formGroup.get("product")?.patchValue({product_name:this.product?.name,product_price:this.product?.selling_price})}deleteProductFromList(o){this.productsAtSale.controls.forEach((a,c)=>{c==o&&(this.total-=parseFloat(a.value.total_product_price))}),this.productsAtSale.removeAt(o)}addProductToList(){let o=[];this.productAtSale?.value.product_id&&""!=this.productAtSale?.value.product_id?(o=this.productsAtSale.controls.map(a=>a.value.product_id),o.includes(this.productAtSale?.value.product_id)?this.toastr.error("this_product_is_exist"):this.productAtSale?.value.quantity>0?(this.productsAtSale.push(this.fb.group({product_id:this.productAtSale?.value.product_id,quantity:this.productAtSale?.value.quantity,discount:this.productAtSale?.value.discount,product_name:this.productAtSale?.value.product_name,product_price:this.productAtSale?.value.product_price,total_product_price:((parseFloat(this.productAtSale?.value.product_price)-this.productAtSale?.value.discount/100*parseFloat(this.productAtSale?.value.product_price))*parseInt(this.productAtSale?.value.quantity)).toFixed(2)})),this.clearProductForm()):this.toastr.error("quantity_must_be_1_or_more")):this.toastr.error("select_product"),this.calcTotal()}calcTotal(){this.total=0,this.productsAtSale.controls.forEach(o=>{this.total+=parseFloat(o.value.total_product_price)})}fillForm(o){this.formGroup.patchValue({id:o.id,customer_id:o.purchasable.id,invoice_number:o.invoice_number,date:o.date,stock_id:o.stock.id,collection_date:o.collection_date,payment_type_id:o.payment_type_id,payment_account_id:o.payment_account_id}),o.products.forEach(a=>{this.productsAtSale.push(this.fb.group({product_id:a.id,quantity:a.pivot.quantity,discount:a.pivot.discount,product_name:a.name,product_price:a.selling_price,total_product_price:((parseFloat(a?.selling_price)-a.pivot.discount/100*parseFloat(a?.selling_price))*parseInt(a.pivot.quantity)).toFixed(2)}))}),this.total=parseFloat(o.total)}fillDataToUpdateProduct(o,a){this.index=a,this.productAction="update",this.formGroup.get("product")?.patchValue({product_name:o.product_name,product_id:o.product_id,quantity:o.quantity,discount:o.discount,product_price:o.product_price,total_product_price:o.total_product_price})}updateProductOnList(){this.productsAtSale.controls.map((o,a)=>{this.productAtSale?.value?.product_id==o.value.product_id&&(this.index==a?(this.productsAtSale.controls[this.index].patchValue({product_id:this.productAtSale?.value?.product_id,product_name:this.productAtSale?.value?.product_name,quantity:this.productAtSale?.value?.quantity,discount:this.productAtSale?.value?.discount,product_price:this.productAtSale?.value?.product_price,total_product_price:((parseFloat(this.productAtSale?.value.product_price)-this.productAtSale?.value.discount/100*parseFloat(this.productAtSale?.value.product_price))*parseInt(this.productAtSale?.value.quantity)).toFixed(2)}),this.calcTotal(),this.clearProductForm(),this.productAction="create"):this.toastr.error("this_product_is_exist"))})}clearProductForm(){this.productAction="create",this.productAtSale?.patchValue({product_name:[""],product_id:[""],quantity:[""],discount:[0],product_price:[""],total_product_price:[""]})}clearAllForm(){for(;0!==this.productsAtSale.length;)this.productsAtSale.removeAt(0);this.formGroup.reset(),this.total=0;for(const[o,a]of this.values)this.values.delete(o)}onFileSelected(o){if(o.target.files[0])for(const[a,c]of Object.entries(o.target.files))this.values.set(`invoice_image[${a}]`,o.target.files[a])}getPaymentAccounts(o){let a=o.value;a&&this.http.getWithParam(this.PaymentConfig.api.getPaymentAccount+a).subscribe({next:c=>{this.payment_accounts=c.data}})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(d.qu),t.Y36(E.N),t.Y36(g.F0),t.Y36(g.gz),t.Y36(S),t.Y36(O._W),t.Y36(y.O))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-new-customer-sale"]],decls:83,vars:84,consts:[[1,"page-card"],[1,"header","row","justify-content-between","align-items-center"],[1,"title","col-md-6"],["routerLink","/key/sales/customer-sale",1,"fa-solid","fa-arrow-left","me-2"],[1,"d-flex","align-items-center","justify-content-end","g-2","col-md-6"],["class","px-1",4,"ngIf"],[1,"px-1"],["routerLink","/key/sales/customer-sale",1,"btn-cancel",3,"iconPos","icon","text"],[1,"btn-filter",3,"text","iconPos","icon","click"],[4,"ngFor","ngForOf"],[3,"formGroup","onSubmit"],[1,"row"],[1,"col-md-6","mt-3"],["ngDefaultControl","","formControlName","invoice_number",3,"text","placeholder"],["ngDefaultControl","","formControlName","customer_id",3,"text","data","optionLabel","optionValue","placeholder"],["class","messageError",4,"ngIf"],[1,"date","col-md-6","mt-3"],["ngDefaultControl","","formControlName","date",3,"text"],["ngDefaultControl","","formControlName","stock_id",3,"text","data","optionLabel","optionValue","placeholder"],["class","col-md-6 mt-3",4,"ngIf"],["ngDefaultControl","","formControlName","collection_date",3,"text"],["class"," col-md-6",4,"ngIf"],[1,"table-responsive"],[1,"table"],[1,"table-head"],["scope","col",1,"head"],["formArrayName","products",4,"ngFor","ngForOf"],["formGroupName","product"],["formControlName","product_id","placeholder","select",3,"data","optionLabel","optionValue","showClear","ngModelChange"],["formControlName","quantity",3,"showButtons","text","placeholder"],["formControlName","discount",3,"showButtons","text","placeholder"],[1,"action"],[1,"fa-solid","fa-cancel","fs-4","text-danger","mx-2","pointer",3,"click"],["class","fa-solid fa-plus fs-4 main-color pointer",3,"click",4,"ngIf"],["class","fa-solid fa-check fs-4 main-color mx-2 pointer",3,"click",4,"ngIf"],[1,"title"],[1,"btn-filter","text-light"],[1,"btn-cancel",3,"text","iconPos","icon","routerLink"],[1,"alert","alert-danger","text-center"],[1,"messageError"],["ngDefaultControl","","formControlName","payment_type_id",3,"text","request","optionLabel","optionValue","placeholder","onDropDownChange"],["ngDefaultControl","","formControlName","payment_account_id",3,"text","data","optionLabel","optionValue","placeholder"],[1,"col-md-6"],["label","image","ngDefaultControl","","formControlName","invoice_image",3,"onValueChange"],["formArrayName","products"],[3,"readOnly","value"],[3,"readOnly","value","text","placeholder"],[1,"fa-solid","fa-trash","fs-4","text-danger","mx-2","pointer",3,"click"],[1,"fa-solid","fa-pen-to-square","fs-4","main-color","mx-2","pointer",3,"click"],[1,"fa-solid","fa-plus","fs-4","main-color","pointer",3,"click"],[1,"fa-solid","fa-check","fs-4","main-color","mx-2","pointer",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._UZ(3,"i",3),t._uU(4),t.ALo(5,"titlecase"),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"div",4),t.YNc(8,R,2,4,"div",5),t.TgZ(9,"div",6),t._UZ(10,"app-button",7),t.qZA(),t.TgZ(11,"div",6)(12,"app-button",8),t.NdJ("click",function(){return a.onSubmit()}),t.qZA()()()(),t.YNc(13,K,3,1,"div",9),t.ALo(14,"keyvalue"),t.TgZ(15,"app-form",10),t.NdJ("onSubmit",function(){return a.onSubmit()}),t.TgZ(16,"div",11)(17,"div",12),t._UZ(18,"app-text",13),t.qZA(),t.TgZ(19,"div",12),t._UZ(20,"app-dropdown",14),t.YNc(21,V,2,1,"p",15),t.qZA(),t.TgZ(22,"div",16),t._UZ(23,"app-date",17),t.qZA(),t.TgZ(24,"div",12),t._UZ(25,"app-dropdown",18),t.YNc(26,z,2,1,"p",15),t.qZA(),t.YNc(27,H,2,7,"div",19),t.YNc(28,W,2,7,"div",19),t.TgZ(29,"div",16),t._UZ(30,"app-date",20),t.qZA(),t.YNc(31,X,2,0,"div",21),t.qZA(),t.TgZ(32,"div",22)(33,"table",23)(34,"thead",24)(35,"tr")(36,"th",25),t._uU(37),t.ALo(38,"translate"),t.qZA(),t.TgZ(39,"th",25),t._uU(40),t.ALo(41,"translate"),t.qZA(),t.TgZ(42,"th",25),t._uU(43),t.ALo(44,"translate"),t.qZA(),t.TgZ(45,"th",25),t._uU(46),t.ALo(47,"translate"),t.qZA(),t.TgZ(48,"th",25),t._uU(49),t.ALo(50,"translate"),t.qZA(),t.TgZ(51,"th",25),t._uU(52),t.ALo(53,"translate"),t.qZA()()(),t.TgZ(54,"tbody"),t.YNc(55,$,14,18,"tr",26),t.TgZ(56,"tr",27)(57,"td")(58,"app-dropdown",28),t.NdJ("ngModelChange",function(_){return a.getProduct(_)}),t.qZA()(),t.TgZ(59,"td"),t._UZ(60,"app-number-input",29),t.qZA(),t.TgZ(61,"td"),t._UZ(62,"app-number-input",30),t.qZA(),t._UZ(63,"td")(64,"td"),t.TgZ(65,"td",31)(66,"i",32),t.NdJ("click",function(){return a.clearProductForm()}),t.qZA(),t.YNc(67,tt,1,0,"i",33),t.YNc(68,et,1,0,"i",34),t.qZA()(),t.TgZ(69,"tr",35)(70,"th",36),t._uU(71),t.ALo(72,"translate"),t.qZA(),t.TgZ(73,"th",36),t._uU(74),t.qZA(),t.TgZ(75,"th",36),t._uU(76),t.qZA(),t.TgZ(77,"th",36),t._uU(78),t.qZA(),t.TgZ(79,"th",36),t._uU(80),t.qZA(),t.TgZ(81,"th",36),t._uU(82),t.qZA()()()()()()()),2&o&&(t.xp6(4),t.hij("",t.lcZ(5,64,t.lcZ(6,66,a.title))," "),t.xp6(4),t.Q6J("ngIf","update_sale"==a.title),t.xp6(2),t.Q6J("iconPos","left")("icon","fa-solid fa-ban")("text","cancel"),t.xp6(2),t.Q6J("text","save")("iconPos","left")("icon","fa-solid fa-check"),t.xp6(1),t.Q6J("ngForOf",t.lcZ(14,68,a.errors)),t.xp6(2),t.Q6J("formGroup",a.formGroup),t.xp6(3),t.Tol("d-flex flex-column justify-content-between "),t.Q6J("text","invoice_number")("placeholder",""),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","customer")("data",a.customers)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(1),t.Q6J("ngIf",null==a.errors?null:a.errors.assigned_id),t.xp6(2),t.Tol("d-flex flex-column justify-content-between "),t.Q6J("text","date"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","stock")("data",a.stocks)("optionLabel","id")("optionValue","id")("placeholder","select"),t.xp6(1),t.Q6J("ngIf",null==a.errors?null:a.errors.assigned_id),t.xp6(1),t.Q6J("ngIf","create"==a.actionSale),t.xp6(1),t.Q6J("ngIf","create"==a.actionSale),t.xp6(2),t.Tol("d-flex flex-column justify-content-between "),t.Q6J("text","collection_date"),t.xp6(1),t.Q6J("ngIf","add_new_sale"==a.title),t.xp6(6),t.Oqu(t.lcZ(38,70,"product")),t.xp6(3),t.Oqu(t.lcZ(41,72,"quantity")),t.xp6(3),t.Oqu(t.lcZ(44,74,"discount")),t.xp6(3),t.Oqu(t.lcZ(47,76,"price")),t.xp6(3),t.Oqu(t.lcZ(50,78,"total_price")),t.xp6(3),t.Oqu(t.lcZ(53,80,"actions")),t.xp6(3),t.Q6J("ngForOf",a.productsAtSale.controls),t.xp6(3),t.Q6J("data",a.products)("optionLabel","name")("optionValue","id")("showClear",!0),t.xp6(2),t.Q6J("showButtons",!1)("text","")("placeholder",""),t.xp6(2),t.Q6J("showButtons",!1)("text","")("placeholder",""),t.xp6(5),t.Q6J("ngIf","create"==a.productAction),t.xp6(1),t.Q6J("ngIf","update"==a.productAction),t.xp6(3),t.Oqu(t.lcZ(72,82,"total")),t.xp6(3),t.Oqu(a.total.toFixed(2)),t.xp6(2),t.Oqu(""),t.xp6(2),t.Oqu(""),t.xp6(2),t.Oqu(""),t.xp6(2),t.Oqu(""))},dependencies:[e.sg,e.O5,g.rH,Q.U,d.Fj,d.JJ,d.JL,d.sg,d.u,d.x0,d.CE,D.T,G.D,Y.J,j.I,B.Y,l.r,e.rS,e.Nd,i.X$],styles:["[_nghost-%COMP%]   .main[_ngcontent-%COMP%]{background-color:var(--white);padding:2rem 2.8rem!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .import[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .import[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1.5rem;height:30px}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .import[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:var(--red);font-size:1.4rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   app-form[_ngcontent-%COMP%]   .entry-no[_ngcontent-%COMP%]{padding-right:1.5rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   app-form[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{padding-left:1.5rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   app-form[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]{margin-top:3rem;margin-bottom:5rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   app-form[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{display:flex;padding:17px 5px;border:none}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   app-form[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{background-color:var(--mainColor)!important;color:var(--white);font-size:14px;padding:10px}.head[_ngcontent-%COMP%]{min-width:150px!important}"]}),n})(),q=(()=>{class n{constructor(o){this.customerSaleService=o}resolve(o){return this.customerSaleService.getById(o.params.id)}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(S))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var ot=r(5435);const at=[{path:p.page.list,component:L},{path:p.page.create,component:U},{path:p.page.update,component:U,resolve:{sale:q}},{path:p.page.updateAttachment,component:(()=>{class n{constructor(o){this.route=o,this.customerSaleConfig=p,this.unsubscribe=new F.x}ngOnInit(){this.route.data.pipe((0,b.R)(this.unsubscribe)).subscribe({next:o=>{this.data=o.sale.data},error:o=>{}})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(g.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-attachment-sale-edit"]],decls:1,vars:5,consts:[[3,"filesName","data","listPageRoute","listPageTitle","endPoint"]],template:function(o,a){1&o&&t._UZ(0,"app-update-attachment",0),2&o&&t.Q6J("filesName","invoice_image")("data",a.data)("listPageRoute","/key/sales/customer-sale")("listPageTitle","customer_sale_list")("endPoint",a.customerSaleConfig.api.updateFiles)},dependencies:[ot.f],styles:[".items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-weight:600;line-height:24px;color:#101828;margin:30px 0;width:100%}.items[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:200px;width:200px;border:1px solid var(--mainColor);border-radius:10px;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.items[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.items[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:198px;border-radius:10px}.items[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]{width:200px;height:200px;border:1px solid var(--mainColor);border-radius:14px;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.items[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.items[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0;width:100%}.items[_ngcontent-%COMP%]   .btn-change[_ngcontent-%COMP%]{background:var(--white);color:var(--mainColor);border:1px solid var(--mainColor);border-radius:3px;margin:6px 0;padding:7px 0;font-size:14px;width:110px}.customFileInput[_ngcontent-%COMP%]::-webkit-file-upload-button{visibility:hidden}.import[_ngcontent-%COMP%]{padding:20px;border:2px solid var(--mainColor);border-radius:8px;margin:10px 0}"]}),n})(),resolve:{sale:q}}];let it=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(at),g.Bz]}),n})();var rt=r(1471),st=r(2115),lt=r(4413),ct=r(1890),pt=r(1019),ut=r(8096),dt=r(1383);let mt=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[e.ez,it,rt.X,st.u,lt.e,ct.f,pt.i,ut.J,i.aw,dt.m]}),n})()},359:(M,C,r)=>{r.d(C,{Q:()=>J});var e=r(9291),g=r(6814),t=r(3999);function P(l,m){if(1&l){const i=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(i);const u=e.oxw(2);return e.KtG(u.changePage(u.page-1))}),e._UZ(1,"i",13),e._uU(2),e.ALo(3,"translate"),e.qZA()}2&l&&(e.xp6(2),e.hij(" ",e.lcZ(3,1,"prev")," "))}function p(l,m){if(1&l){const i=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(i);const u=e.oxw(2);return e.KtG(u.changePage(1))}),e._uU(1),e.qZA()}if(2&l){const i=e.oxw(2);e.Q6J("disabled",1==i.page),e.xp6(1),e.hij(" ",1," ")}}function f(l,m){1&l&&(e.TgZ(0,"span",15),e._uU(1," ..."),e.qZA())}function x(l,m){if(1&l){const i=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(i);const u=e.oxw(2);return e.KtG(u.changePage(u.page-2))}),e._uU(1),e.qZA()}if(2&l){const i=e.oxw(2);e.Q6J("disabled",1==i.page),e.xp6(1),e.hij(" ",i.page-2," ")}}function Z(l,m){if(1&l){const i=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(i);const u=e.oxw(2);return e.KtG(u.changePage(u.page-1))}),e._uU(1),e.qZA()}if(2&l){const i=e.oxw(2);e.Q6J("disabled",1==i.page),e.xp6(1),e.hij(" ",i.page-1," ")}}function A(l,m){if(1&l){const i=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(i);const u=e.oxw(2);return e.KtG(u.changePage(u.page+1))}),e._uU(1),e.qZA()}if(2&l){const i=e.oxw(2);e.Q6J("disabled",i.page==i.totalPages),e.xp6(1),e.hij(" ",i.page+1," ")}}function y(l,m){if(1&l){const i=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(i);const u=e.oxw(2);return e.KtG(u.changePage(u.page+2))}),e._uU(1),e.qZA()}if(2&l){const i=e.oxw(2);e.Q6J("disabled",i.page==i.totalPages),e.xp6(1),e.hij(" ",i.page+2," ")}}function w(l,m){1&l&&(e.TgZ(0,"span",15),e._uU(1," ..."),e.qZA())}function O(l,m){if(1&l){const i=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(i);const u=e.oxw(2);return e.KtG(u.changePage(u.totalPages))}),e._uU(1),e.qZA()}if(2&l){const i=e.oxw(2);e.Q6J("disabled",i.page==i.totalPages),e.xp6(1),e.hij(" ",i.totalPages," ")}}function S(l,m){if(1&l){const i=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(i);const u=e.oxw(2);return e.KtG(u.changePage(u.page+1))}),e._uU(1),e.ALo(2,"translate"),e._UZ(3,"i",16),e.qZA()}2&l&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"next")," "))}function N(l,m){if(1&l&&(e.TgZ(0,"div",1)(1,"p",2),e._uU(2),e.ALo(3,"titlecase"),e.ALo(4,"translate"),e.TgZ(5,"span"),e._uU(6),e.qZA()(),e.TgZ(7,"nav",3)(8,"ul",4)(9,"li",5),e.YNc(10,P,4,3,"button",6),e.qZA(),e.TgZ(11,"li",7),e.YNc(12,p,2,2,"button",8),e.YNc(13,f,2,0,"span",9),e.YNc(14,x,2,2,"button",8),e.YNc(15,Z,2,2,"button",8),e.TgZ(16,"span",10)(17,"button",11),e._uU(18),e.qZA()(),e.YNc(19,A,2,2,"button",8),e.YNc(20,y,2,2,"button",8),e.YNc(21,w,2,0,"span",9),e.YNc(22,O,2,2,"button",8),e.qZA(),e.TgZ(23,"li",5),e.YNc(24,S,4,3,"button",6),e.qZA()()()()),2&l){const i=e.oxw();e.xp6(2),e.hij("",e.lcZ(3,13,e.lcZ(4,15,"total_items"))," "),e.xp6(4),e.Oqu(i.total),e.xp6(4),e.Q6J("ngIf",i.page>1),e.xp6(2),e.Q6J("ngIf",i.page>3),e.xp6(1),e.Q6J("ngIf",i.page>3),e.xp6(1),e.Q6J("ngIf",i.page>2),e.xp6(1),e.Q6J("ngIf",1!=i.page),e.xp6(3),e.Oqu(i.page),e.xp6(1),e.Q6J("ngIf",i.page!=i.totalPages),e.xp6(1),e.Q6J("ngIf",i.page!=i.totalPages&&i.page!=i.totalPages-1),e.xp6(1),e.Q6J("ngIf",i.page!=i.totalPages&&i.page!=i.totalPages-1&&i.page!=i.totalPages-2),e.xp6(1),e.Q6J("ngIf",i.page!=i.totalPages&&i.page!=i.totalPages-1&&i.page!=i.totalPages-2),e.xp6(2),e.Q6J("ngIf",i.page!=i.totalPages)}}let J=(()=>{class l{constructor(){this.total=0,this.onPaginationChange=new e.vpe,this.rppOptions=[{label:"10",value:10},{label:"30",value:30},{label:"40",value:40}],this.rpp=this.rppOptions[0].value,this.page=1,this.totalPages=0,this.totalClipPages=0}getPage(){return this.page}setTotal(i){this.total=i,this.totalPages=Math.ceil(this.total/this.rpp),this.totalClipPages=Math.ceil(this.totalPages-(this.totalPages-(this.page+1))/2)}changeRPP(){this.page=1,this.onPaginationChange.next({page:this.page,limit:this.rpp})}changePage(i){this.page=i,this.onPaginationChange.next({page:this.page,limit:this.rpp})}}return l.\u0275fac=function(i){return new(i||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["ukt-pagination"]],inputs:{total:"total",rppOptions:"rppOptions"},outputs:{onPaginationChange:"onPaginationChange"},decls:1,vars:1,consts:[["class","pagination d-flex align-items-center ",4,"ngIf"],[1,"pagination","d-flex","align-items-center"],[1,"total_items"],["aria-label","Page navigation "],[1,"pagination","d-flex","justify-content-between"],[1,"page-item","mx-3"],["class","btn btn-light border-1",3,"click",4,"ngIf"],[1,"page-item","d-flex","gap-3"],["class","btn btn-light border-1",3,"disabled","click",4,"ngIf"],["class","fw-bold mx-2",4,"ngIf"],[1,"page-item"],["disabled","",1,"page-link","rounded","border-1","active"],[1,"btn","btn-light","border-1",3,"click"],[1,"fa-solid","fa-arrow-left","mx-1"],[1,"btn","btn-light","border-1",3,"disabled","click"],[1,"fw-bold","mx-2"],[1,"fa-solid","fa-arrow-right","mx-1"]],template:function(i,v){1&i&&e.YNc(0,N,25,17,"div",0),2&i&&e.Q6J("ngIf",0!=v.totalPages)},dependencies:[g.O5,g.rS,t.X$],styles:[".total_items[_ngcontent-%COMP%]{font-size:14px;margin-top:4px}.total_items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:1px solid var(--mainColor);padding:5px 10px;border-radius:4px}"]}),l})()},2115:(M,C,r)=>{r.d(C,{u:()=>P});var e=r(6814),g=r(3999),t=r(9291);let P=(()=>{class p{}return p.\u0275fac=function(x){return new(x||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[e.ez,g.aw]}),p})()},8096:(M,C,r)=>{r.d(C,{J:()=>f});var e=r(6814),g=r(9624),t=r(4413),P=r(3999),p=r(9291);let f=(()=>{class x{}return x.\u0275fac=function(A){return new(A||x)},x.\u0275mod=p.oAB({type:x}),x.\u0275inj=p.cJS({imports:[e.ez,g.U,t.e,P.aw]}),x})()}}]);