"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[8510],{8510:(x,g,a)=>{a.r(g),a.d(g,{ReceiptsInvoicesModule:()=>Zt});var r=a(6814),d=a(8209),A=a(5219),h=a(6924),m=a(8718),u=a(5946),_=a(5861);const v_api_get="sales-invoice",v_api_getById="sales-invoice/details/",v_api_getInvoiceDetails="sales-invoice-payments/",v_api_update="sales-invoice/update/",v_api_delete="receiptsInvoices/",v_api_getBills="sales-invoice/",v_api_collect="sales-invoice-payments/collect/";var I=function(n){return n.create="Create Purchase",n.view="View Purchases",n.edit="Edit Purchase",n.delete="Delete Purchase",n}(I||{});const L=n=>{return{cols:[{field:"invoice_number",label:"#Invoice ",class:"",format:i=>i.invoice_number?i.invoice_number:"-"},{field:"customer_name",label:"customer_name",class:""},{field:"created_at.split",label:"delivery_date",format:i=>i.created_at?i.created_at.split(" ")[0]:"-"},{field:"quantity",label:"quantity",format:i=>i.quantity?i.quantity:"0"},{field:"total",label:"total_amount",format:i=>i.total?i.total:"0.00"},{field:"status",label:"status",custom_class_cel:i=>"approved"==i.status?"status-approved":"pending"==i.status?"status-pending":"status-canceled",class:"text-center"},{label:"action",actions:[{id:I.edit,icon:"fa-solid fa-eye",class:"main-color",route:"details"},{id:I.edit,icon:"fa-solid fa-money-check-dollar",class:"main-color",fun:(i=(0,_.Z)(function*(e){return yield n.receiptsInvoicesService.openDialogToSelectPaymentMethod(e)}),function(o){return i.apply(this,arguments)})},{id:I.edit,icon:"fa-solid fa-sack-dollar",class:"fa-solid main-color",route:"details"}]}],Request:v_api_get};var i},G=n=>{return{cols:[{field:"sales_invoice_id",label:"Bill",class:"",format:i=>null==i.sales_invoice_id?"-":i.sales_invoice_id},{field:"payment_date",label:"due_date"},{field:"total",label:"total",format:i=>0==i.total?"0 $":i.total},{field:"paid_total",label:"paid_total",format:i=>0==i.paid_total?"0 $":i.paid_total},{field:"remain_total",label:"remain_total",format:i=>0==i.remain_total?"0 $":i.remain_total},{field:"status",label:"status",custom_class_cel:i=>"paid"==i.status?"status-approved":"status-pending"},{label:"action",actions:[{id:I.edit,icon:"fa-solid fa-eye",class:"main-color",fun:(i=(0,_.Z)(function*(e){return yield n.ReceiptsInvoicesService.openDialogToDetails(e)}),function(o){return i.apply(this,arguments)})},{id:I.edit,icon:"fa-solid fa-money-check-dollar",class:"main-color",classCondition:"d-none",hideBasedOnCondition:!0,condition:i=>"pending"!=i.status,fun:function(){var i=(0,_.Z)(function*(e){return yield n.ReceiptsInvoicesService.openDialogToCollectInvoice(e)});return function(o){return i.apply(this,arguments)}}()}]}],Request:v_api_getBills+n.id+"/payments"};var i};var t=a(9291),c=a(6223),M=a(6785),b=a(8763),y=a(5118),D=a(1732),U=a(4779),O=a(1771),P=a(8614),q=a(1904),R=a(3838),F=a(6098),Z=a(3999);function V(n,i){if(1&n&&(t.TgZ(0,"p",7),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.AsE(" ",t.lcZ(2,2,t.lcZ(3,4,"total_collections"))," : ",e.totalInvoicesAmount," ")}}function w(n,i){if(1&n&&(t.TgZ(0,"p",19),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,t.lcZ(3,3,e.messageError))," ")}}function E(n,i){if(1&n&&(t.TgZ(0,"div")(1,"p",20),t._uU(2),t.qZA()()),2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.value)}}function N(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",24)(1,"div",25)(2,"label",26),t._uU(3),t.ALo(4,"titlecase"),t.ALo(5,"translate"),t.qZA(),t._UZ(6,"app-text",27),t.qZA(),t.TgZ(7,"div",25)(8,"label",26),t._uU(9),t.ALo(10,"titlecase"),t.ALo(11,"translate"),t.qZA(),t._UZ(12,"app-text",27),t.qZA(),t.TgZ(13,"div",28)(14,"p",29),t.NdJ("click",function(){const s=t.CHM(e).index,p=t.oxw(2);return t.KtG(p.deleteInvoiceFromDetailsArray(s))}),t._UZ(15,"i",30),t.qZA()()()}if(2&n){const e=i.$implicit,o=i.index;t.xp6(3),t.AsE("",t.lcZ(4,16,t.lcZ(5,18,"date"))," ",o+1,""),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("value",e.value.date)("readOnly",!0)("text","")("placeholder",""),t.xp6(3),t.AsE("",t.lcZ(10,20,t.lcZ(11,22,"amount"))," ",o+1,""),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("value",e.value.amount)("readOnly",!0)("text","")("placeholder","")}}function S(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",31)(1,"div",12),t._UZ(2,"app-date",32),t.qZA(),t.TgZ(3,"div",12),t._UZ(4,"app-number-input",33),t.qZA(),t.TgZ(5,"div",28)(6,"p",5),t.NdJ("click",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.addInvoiceToDetailsArray())}),t._UZ(7,"i",34),t.qZA()()()}2&n&&(t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","date"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("showButtons",!1)("mode","currency")("text","amount")("placeholder",""))}function Q(n,i){if(1&n&&(t.TgZ(0,"div",21),t.YNc(1,N,16,24,"div",22),t.YNc(2,S,8,9,"div",23),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.detailsInvoices.controls),t.xp6(1),t.Q6J("ngIf",e.totalInvoicesAmount<e.total_amount)}}let Y=(()=>{class n{constructor(e,o,l,s,p,At){this.fb=e,this.toastr=o,this.config=l,this.dialogRef=s,this.receiptsInvoicesService=p,this.http=At,this.paymentConfig=M.D,this.messageError="",this.formGroup=this.initForm(),this.payment_accounts=[],this.payment_methods=[],this.totalInvoicesAmount=0,this.getPaymentMethods(),this.config.data?.data&&this.fillData(this.config.data?.data)}getPaymentMethods(){this.http.get(this.paymentConfig.api.get).subscribe({next:e=>{this.payment_methods=e.data},error:e=>{this.payment_methods=[]}})}initForm(){return this.fb.group({id:[Number],payment_type_id:["",[c.kI.required]],payment_account_id:["",[c.kI.required]],details:this.fb.array([]),invoice:this.fb.group({date:[""],amount:[""]})})}get detailsInvoices(){return this.formGroup.get("details")}fillData(e){this.total_amount=e.total,this.formGroup.get("id")?.patchValue(e.id)}accept(){"credit"==this.paymentType?(console.log(this.formGroup),this.totalInvoicesAmount==this.total_amount?this.formGroup.invalid?this.formGroup.markAllAsTouched():this.receiptsInvoicesService.selectPaymentMethod(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors,this.toastr.error(e.error.message)}}):this.messageError="total_collections_not_equal_total_amount"):this.formGroup.invalid?this.formGroup.markAllAsTouched():this.receiptsInvoicesService.selectPaymentMethod(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors,this.toastr.error(e.error.message)}})}closePopup(e){this.dialogRef.close(e)}addInvoiceToDetailsArray(){this.formGroup.get("invoice")?.invalid?this.formGroup.get("invoice")?.markAllAsTouched():(this.detailsInvoices.push(this.fb.group({date:this.formGroup.get("invoice")?.value.date,amount:this.formGroup.get("invoice")?.value.amount})),this.totalInvoicesAmount+=parseFloat(this.formGroup.get("invoice")?.value.amount),this.clearInvoiceForm())}deleteInvoiceFromDetailsArray(e){this.detailsInvoices.controls.forEach((o,l)=>{l==e&&(this.totalInvoicesAmount-=parseFloat(o.value.amount))}),this.detailsInvoices.removeAt(e)}clearInvoiceForm(){("credit"==this.paymentType||this.totalInvoicesAmount==this.total_amount)&&(this.messageError="",this.formGroup.get("invoice.date")?.clearValidators(),this.formGroup.get("invoice.amount")?.clearValidators(),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()),"credit"==this.paymentType&&this.totalInvoicesAmount!=this.total_amount&&(this.formGroup.get("invoice.date")?.setValidators(c.kI.required),this.formGroup.get("invoice.amount")?.setValidators(c.kI.required),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()),this.formGroup.get("invoice")?.reset()}getPaymentAccounts(e){let o=e.value;o&&this.http.getWithParam(this.paymentConfig.api.getPaymentAccount+o,{limit:"all"}).subscribe({next:s=>{this.payment_accounts=s.data},error:s=>{this.payment_accounts=[]}});let l=this.payment_methods.find(s=>s.id==o);this.paymentType=l?.type,console.log(this.paymentType)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.qu),t.Y36(b._W),t.Y36(y.S),t.Y36(y.E7),t.Y36(T),t.Y36(D.O))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-payment-receipts-invoices"]],decls:30,vars:36,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/purchase -2.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],["class","title",4,"ngIf"],[3,"formGroup"],["class","text-error text-center",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"my-3"],["ngDefaultControl","","formControlName","payment_type_id",3,"text","data","optionLabel","optionValue","placeholder","onDropDownChange"],["ngDefaultControl","","formControlName","payment_account_id",3,"text","data","optionLabel","optionValue","placeholder"],["class","credit",4,"ngIf"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error","text-center"],[1,"text-error"],[1,"credit"],["class","group",4,"ngFor","ngForOf"],["formGroupName","invoice","class","group",4,"ngIf"],[1,"group"],[1,"my-2"],["for",""],[3,"value","readOnly","text","placeholder"],[1,"action"],[1,"text-danger",3,"click"],[1,"fa-solid","fa-trash"],["formGroupName","invoice",1,"group"],["ngDefaultControl","","formControlName","date",3,"text"],["formControlName","amount",3,"showButtons","mode","text","placeholder"],[1,"fa-solid","fa-check"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.closePopup(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"p",7),t._uU(11),t.ALo(12,"titlecase"),t.ALo(13,"translate"),t.qZA(),t.YNc(14,V,4,6,"p",8),t.qZA(),t.TgZ(15,"app-form",9),t.YNc(16,w,4,5,"p",10),t.YNc(17,E,3,1,"div",11),t.ALo(18,"keyvalue"),t.TgZ(19,"div")(20,"div",12)(21,"app-dropdown",13),t.NdJ("onDropDownChange",function(s){return o.getPaymentAccounts(s)}),t.qZA()(),t.TgZ(22,"div"),t._UZ(23,"app-dropdown",14),t.qZA()(),t.YNc(24,Q,3,2,"div",15),t.TgZ(25,"div",16)(26,"div",17)(27,"app-button",18),t.NdJ("click",function(){return o.closePopup(!1)}),t.qZA()(),t.TgZ(28,"div",17)(29,"app-button",18),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e){let l;t.xp6(8),t.Oqu(t.lcZ(9,28,null!==(l=o.config.header)&&void 0!==l?l:"")),t.xp6(3),t.AsE(" ",t.lcZ(12,30,t.lcZ(13,32,"total_amount"))," : ",o.total_amount," "),t.xp6(3),t.Q6J("ngIf","credit"==o.paymentType),t.xp6(1),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("ngIf","credit"==o.paymentType),t.xp6(1),t.Q6J("ngForOf",t.lcZ(18,34,o.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","payment_method")("data",o.payment_methods)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","payment_accounts")("data",o.payment_accounts)("optionLabel","name_code")("optionValue","id")("placeholder","select"),t.xp6(1),t.Q6J("ngIf","credit"==o.paymentType),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==o.config.data?null:o.config.data.acceptLabel)}},dependencies:[r.sg,r.O5,U.r,O.U,c.Fj,c.JJ,c.JL,c.sg,c.u,c.x0,P.T,q.D,R.J,F.I,r.rS,r.Nd,Z.X$],styles:[".main[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.main[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px;margin-top:20px;margin-inline-end:30px;cursor:pointer}"]}),n})(),k=(()=>{class n{constructor(e,o,l,s){this.dynamicDialogConfig=e,this.dialogRef=o,this.config=l,this._ReceiptsInvoicesService=s,this.data=this.config.data.data}closePopup(e){this.dialogRef.close(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y.S),t.Y36(y.E7),t.Y36(y.S),t.Y36(T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-invoice-details"]],decls:22,vars:6,consts:[[1,"main"],[1,"pb-3"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/purchase -2.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title","pb-2","fs-2"],[1,"mt-3"],["translate","options",1,"fs-3","fw-bold"],[1,"px-4","fs-4"],[1,"mt-5"],["translate","amount",1,"fs-3","fw-bold"],["translate","date",1,"fs-3","fw-bold"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.closePopup(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"div",8),t._UZ(11,"p",9),t.TgZ(12,"span",10),t._uU(13),t.qZA()(),t.TgZ(14,"div",11),t._UZ(15,"p",12),t.TgZ(16,"span",10),t._uU(17),t.qZA()(),t.TgZ(18,"div",11),t._UZ(19,"p",13),t.TgZ(20,"span",10),t._uU(21),t.qZA()()()()),2&e&&(t.xp6(8),t.Oqu(t.lcZ(9,4,"invoice_details")),t.xp6(5),t.Oqu(o.data.status),t.xp6(4),t.Oqu(o.data.remain_total),t.xp6(4),t.Oqu(o.data.payment_date))},dependencies:[Z.Pi,Z.X$],styles:[".title[_ngcontent-%COMP%]{font-weight:600!important;font-size:1.8rem!important;line-height:24px;color:var(--mainColor)}"]}),n})();function j(n,i){if(1&n&&(t.TgZ(0,"p",9),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.AsE(" ",t.lcZ(2,2,t.lcZ(3,4,"total_collections"))," : ",e.totalInvoicesAmount," ")}}function B(n,i){if(1&n&&(t.TgZ(0,"div")(1,"p",18),t._uU(2),t.qZA()()),2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.value)}}function W(n,i){1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-number-input",19),t.qZA()),2&n&&(t.xp6(1),t.Tol("mt-5 mb-4"),t.Q6J("showButtons",!1)("mode","currency")("text","amount"))}function $(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",23)(1,"div",24)(2,"label",25),t._uU(3),t.ALo(4,"titlecase"),t.ALo(5,"translate"),t.qZA(),t._UZ(6,"app-text",26),t.qZA(),t.TgZ(7,"div",24)(8,"label",25),t._uU(9),t.ALo(10,"titlecase"),t.ALo(11,"translate"),t.qZA(),t._UZ(12,"app-text",26),t.qZA(),t.TgZ(13,"div",27)(14,"p",28),t.NdJ("click",function(){const s=t.CHM(e).index,p=t.oxw(2);return t.KtG(p.deleteInvoiceFromDetailsArray(s))}),t._UZ(15,"i",29),t.qZA()()()}if(2&n){const e=i.$implicit,o=i.index;t.xp6(3),t.AsE("",t.lcZ(4,16,t.lcZ(5,18,"date"))," ",o+1,""),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("value",e.value.date)("readOnly",!0)("text","")("placeholder",""),t.xp6(3),t.AsE("",t.lcZ(10,20,t.lcZ(11,22,"amount"))," ",o+1,""),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("value",e.value.amount)("readOnly",!0)("text","")("placeholder","")}}function X(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",30)(1,"div",31),t._UZ(2,"app-date",32),t.qZA(),t.TgZ(3,"div",31),t._UZ(4,"app-number-input",33),t.qZA(),t.TgZ(5,"div",27)(6,"p",5),t.NdJ("click",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.addInvoiceToDetailsArray())}),t._UZ(7,"i",34),t.qZA()()()}2&n&&(t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","date"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("showButtons",!1)("mode","currency")("text","amount")("placeholder",""))}function z(n,i){if(1&n&&(t.TgZ(0,"div")(1,"div",20),t.YNc(2,$,16,24,"div",21),t.YNc(3,X,8,9,"div",22),t.qZA()()),2&n){const e=t.oxw();let o;t.xp6(2),t.Q6J("ngForOf",e.detailsInvoices.controls),t.xp6(1),t.Q6J("ngIf",e.totalInvoicesAmount+(null==(o=e.formGroup.get("amount"))?null:o.value)<e.total_amount)}}let H=(()=>{class n{constructor(e,o,l,s,p){this.fb=e,this.toastr=o,this.config=l,this.dialogRef=s,this.ReceiptsInvoicesService=p,this.formGroup=this.initForm(),this.totalInvoicesAmount=0,this.messageError="",this.options=[{id:1,type:"All"},{id:2,type:"Partial"}],this.config.data?.data&&this.fillData(this.config.data?.data)}fillData(e){this.total_amount=e.total}initForm(){return this.fb.group({id:this.config.data.data.id,type:["",[c.kI.required]],amount:[""],details:this.fb.array([]),invoice:this.fb.group({date:[""],amount:[""]})})}accept(){this.total_amount==this.totalInvoicesAmount+parseFloat(this.formGroup.get("amount")?.value)&&(this.formGroup.get("invoice.date")?.clearValidators(),this.formGroup.get("invoice.amount")?.clearValidators(),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()),"All"==this.formGroup.get("type")?.value&&this.detailsInvoices.clear(),this.formGroup.invalid?this.formGroup.markAllAsTouched():this.ReceiptsInvoicesService.collect(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors,this.toastr.error(e.error.message)}})}closePopup(e){this.dialogRef.close(e)}changeType(e){"Partial"==e.value&&this.total_amount!=this.totalInvoicesAmount+parseFloat(this.formGroup.get("amount")?.value)?(this.formGroup.get("invoice.date")?.setValidators(c.kI.required),this.formGroup.get("invoice.amount")?.setValidators(c.kI.required)):(this.formGroup.get("invoice.date")?.clearValidators(),this.formGroup.get("invoice.amount")?.clearValidators()),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()}get detailsInvoices(){return this.formGroup.get("details")}deleteInvoiceFromDetailsArray(e){this.detailsInvoices.controls.forEach((o,l)=>{l==e&&(this.totalInvoicesAmount-=parseFloat(o.value.amount))}),this.detailsInvoices.removeAt(e)}addInvoiceToDetailsArray(){this.formGroup.get("invoice")?.invalid?this.formGroup.get("invoice")?.markAllAsTouched():(this.detailsInvoices.push(this.fb.group({date:this.formGroup.get("invoice")?.value.date,amount:this.formGroup.get("invoice")?.value.amount})),this.totalInvoicesAmount+=parseFloat(this.formGroup.get("invoice")?.value.amount),this.clearInvoiceForm())}clearInvoiceForm(){("Partial"==this.formGroup.get("type")?.value||this.totalInvoicesAmount==this.total_amount)&&(this.messageError="",this.formGroup.get("invoice.date")?.clearValidators(),this.formGroup.get("invoice.amount")?.clearValidators(),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()),"Partial"==this.formGroup.get("type")?.value&&this.totalInvoicesAmount!=this.total_amount&&(this.formGroup.get("invoice.date")?.setValidators(c.kI.required),this.formGroup.get("invoice.amount")?.setValidators(c.kI.required),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()),this.formGroup.get("invoice")?.reset()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.qu),t.Y36(b._W),t.Y36(y.S),t.Y36(y.E7),t.Y36(T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-collect-invoice"]],decls:27,vars:29,consts:[[1,"main"],[1,"pb-3"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/purchase -2.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title","pb-2","fs-2"],[3,"formGroup"],[1,"title"],["class","title",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"row"],["ngDefaultControl","","formControlName","type",3,"text","data","optionValue","placeholder","optionLabel","onDropDownChange"],[4,"ngIf"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"],["formControlName","amount","placeholder","",3,"showButtons","mode","text"],[1,"credit"],["class","group",4,"ngFor","ngForOf"],["formGroupName","invoice","class","group",4,"ngIf"],[1,"group"],[1,"my-2"],["for",""],[3,"value","readOnly","text","placeholder"],[1,"action"],[1,"text-danger",3,"click"],[1,"fa-solid","fa-trash"],["formGroupName","invoice",1,"group"],[1,"my-3"],["ngDefaultControl","","formControlName","date",3,"text"],["formControlName","amount",3,"showButtons","mode","text","placeholder"],[1,"fa-solid","fa-check"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.closePopup(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"app-form",8)(11,"p",9),t._uU(12),t.ALo(13,"titlecase"),t.ALo(14,"translate"),t.qZA(),t.YNc(15,j,4,6,"p",10),t.YNc(16,B,3,1,"div",11),t.ALo(17,"keyvalue"),t.TgZ(18,"div",12)(19,"app-dropdown",13),t.NdJ("onDropDownChange",function(s){return o.changeType(s)}),t.qZA(),t.YNc(20,W,2,5,"div",14),t.YNc(21,z,4,2,"div",14),t.qZA(),t.TgZ(22,"div",15)(23,"div",16)(24,"app-button",17),t.NdJ("click",function(){return o.closePopup(!1)}),t.qZA()(),t.TgZ(25,"div",16)(26,"app-button",17),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()()),2&e){let l,s,p;t.xp6(8),t.Oqu(t.lcZ(9,21,"collect_invoice")),t.xp6(2),t.Q6J("formGroup",o.formGroup),t.xp6(2),t.AsE(" ",t.lcZ(13,23,t.lcZ(14,25,"total_amount"))," : ",o.total_amount," "),t.xp6(3),t.Q6J("ngIf","Partial"==(null==(l=o.formGroup.get("type"))?null:l.value)),t.xp6(1),t.Q6J("ngForOf",t.lcZ(17,27,o.errors)),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","options")("data",o.options)("optionValue","type")("placeholder","select")("optionLabel","type"),t.xp6(1),t.Q6J("ngIf","All"==(null==(s=o.formGroup.get("type"))?null:s.value)||"Partial"==(null==(s=o.formGroup.get("type"))?null:s.value)),t.xp6(1),t.Q6J("ngIf","Partial"==(null==(p=o.formGroup.get("type"))?null:p.value)),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==o.config.data?null:o.config.data.acceptLabel)}},dependencies:[r.sg,r.O5,U.r,O.U,c.Fj,c.JJ,c.JL,c.sg,c.u,c.x0,P.T,q.D,R.J,F.I,r.rS,r.Nd,Z.X$],styles:[".main[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.main[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px;margin-top:20px;margin-inline-end:30px;cursor:pointer}"]}),n})();var K=a(3562);let T=(()=>{class n{constructor(e,o,l){this.http=e,this.dynamicDialog=o,this.toastr=l}get(){return this.http.get(v_api_get)}getById(e){return this.http.get(v_api_getById+e)}delete(e){var o=this;return(0,_.Z)(function*(){const l={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e}},width:"480px",height:"auto"};if(!(yield o.dynamicDialog.confirm(l)))return!1;try{const p=yield o.http.delete(v_api_delete+e.id).toPromise();return o.toastr.success(p.message),p}catch(p){return o.toastr.error(p.error.message),p}})()}getBillsByReceiptsInvoiceId(e){return this.http.get(v_api_getBills+e+"/payments")}getInvoiceDetails(e){return this.http.get(v_api_getInvoiceDetails+e)}openDialogToSelectPaymentMethod(e){var o=this;return(0,_.Z)(function*(){const l={showHeader:!1,header:"payment_method",data:{acceptLabel:"submit",rejectLabel:"Cancel",data:{...e}},height:"auto",width:"500px",styleClass:"financial-dialog"};return yield o.dynamicDialog.showDialogWithComponent(l,Y)})()}openDialogToDetails(e){var o=this;return(0,_.Z)(function*(){const l={showHeader:!1,header:"invoice_details",data:{acceptLabel:"pay",rejectLabel:"Cancel",data:{...e}},height:"auto",width:"500px",styleClass:"financial-dialog"};return yield o.dynamicDialog.showDialogWithComponent(l,k)})()}openDialogToCollectInvoice(e){var o=this;return(0,_.Z)(function*(){const l={showHeader:!1,header:"collect_invoice",data:{acceptLabel:"Collect ",rejectLabel:"Cancel",data:{...e}},height:"auto",width:"500px",styleClass:"financial-dialog"};return yield o.dynamicDialog.showDialogWithComponent(l,H)})()}selectPaymentMethod(e){return this.http.post(v_api_update+e.id,e)}collect(e){return this.http.post(v_api_collect+e.id,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(D.O),t.LFG(K.U),t.LFG(b._W))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var tt=a(5077),et=a(3826),J=a(2377),ot=a(359);let nt=(()=>{class n{constructor(e){this.receiptsInvoicesService=e,this.icon=A.dv,this.tableConfig=L(this),this.filtersConfig=[{field:"search",label:"search",type:h.W.TEXT,placeholder:"search"},{field:"creator_id",label:"created_by",type:h.W.SELECT,options:{value:"id",label:"name"},request:m.x.api.get,placeholder:"select"},{field:"from",label:"from",type:h.W.DATE},{field:"to",label:"to",type:h.W.DATE}],this.Sort=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by"},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:u.q.asc,field:u.q.asc},{label:u.q.desc,field:u.q.desc}]}]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-receipts-invoices"]],decls:15,vars:9,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title","pb-4"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA()(),t.TgZ(5,"div",3),t._UZ(6,"ukt-sort",4,5)(8,"ukt-filter",6,7),t.qZA(),t.TgZ(10,"div",8),t._UZ(11,"app-table",9),t.qZA(),t.TgZ(12,"div",10),t._UZ(13,"ukt-pagination",null,11),t.qZA()()),2&e){const l=t.MAs(7),s=t.MAs(9),p=t.MAs(14);t.xp6(3),t.Oqu(t.lcZ(4,7,"receipts_invoices_list")),t.xp6(3),t.Q6J("SortConfig",o.Sort),t.xp6(2),t.Q6J("config",o.filtersConfig),t.xp6(3),t.Q6J("tableConfig",o.tableConfig)("pagination",p)("filter",s)("sort",l)}},dependencies:[tt.z,et.x,J.a,ot.Q,Z.X$]}),n})();var it=a(7451),at=a(8645),lt=a(9773);function st(n,i){if(1&n&&(t.TgZ(0,"div",17)(1,"div",18),t._UZ(2,"p",19),t.TgZ(3,"p",20),t._uU(4),t.qZA()(),t.TgZ(5,"div",18),t._UZ(6,"p",21),t.TgZ(7,"p",20),t._uU(8),t.qZA()(),t.TgZ(9,"div",18),t._UZ(10,"p",22),t.TgZ(11,"p",20),t._uU(12),t.qZA()(),t.TgZ(13,"div",18),t._UZ(14,"p",23),t.TgZ(15,"p",20),t._uU(16),t.qZA()()()),2&n){const e=i.$implicit;t.xp6(4),t.Oqu(null==e||null==e.product?null:e.product.code),t.xp6(4),t.Oqu(null==e?null:e.quantity),t.xp6(4),t.Oqu(null==e||null==e.product?null:e.product.created_at),t.xp6(4),t.hij("",null==e?null:e.total,"$")}}const pt=[{path:"",component:nt},{path:it.Y.page.details,component:(()=>{class n{constructor(e,o){this.route=e,this.ReceiptsInvoicesService=o,this.id=2,this.unsubscribe=new at.x,this.tableConfig=G(this),this.route.params.subscribe(l=>{this.id=l.id,this.tableConfig=G(this),console.log("ID from URL:",this.id)})}ngOnInit(){this.route.data.pipe((0,lt.R)(this.unsubscribe)).subscribe({next:e=>{this.data=e.invoice.data,console.log(this.data)}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.gz),t.Y36(T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-details-receipts-invoices"]],decls:42,vars:11,consts:[[1,"p-5","bg-white"],[1,"d-flex"],["routerLink","/key/sales/receipts-invoices",1,"pi","pi-arrow-left","px-3","pt-2",2,"font-size","2rem"],["translate","invoice_details",1,"fw-bold","fs-1"],[1,"row","mt-5"],[1,"col-4"],[1,"p-2","rounded-5","detail"],[1,"p-4"],["translate","customer_contact",1,"fw-bold","mb-4","fs-2"],["translate","billing_info",1,"fw-bold","mb-4","fs-2"],["translate","shipping_info",1,"fw-bold","mb-4","fs-2"],[1,"mt-5","p-2","rounded-5","detail"],["translate","product_info",1,"fw-bold","mb-4","fs-2"],["class","row mt-3",4,"ngFor","ngForOf"],["translate","Bills",1,"fw-bold","fs-1","mt-5","px-4"],[1,"table"],[3,"tableConfig"],[1,"row","mt-3"],[1,"col"],["translate","product_id",1,"m-0"],[1,"m-0","pt-1"],["translate","quantity",1,"m-0"],["translate","date_of_creation",1,"m-0"],["translate","total_amount",1,"m-0"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"i",2)(3,"h2",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),t._UZ(8,"h3",8),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA()()()(),t.TgZ(15,"div",5)(16,"div",6)(17,"div",7),t._UZ(18,"h3",9),t.TgZ(19,"p"),t._uU(20),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.qZA(),t.TgZ(23,"p"),t._uU(24),t.qZA()()()(),t.TgZ(25,"div",5)(26,"div",6)(27,"div",7),t._UZ(28,"h3",10),t.TgZ(29,"p"),t._uU(30),t.qZA(),t.TgZ(31,"p"),t._uU(32),t.qZA(),t.TgZ(33,"p"),t._uU(34),t.qZA()()()()(),t.TgZ(35,"div",11)(36,"div",7),t._UZ(37,"h3",12),t.YNc(38,st,17,4,"div",13),t.qZA()(),t._UZ(39,"h2",14),t.TgZ(40,"div",15),t._UZ(41,"app-table",16),t.qZA()()),2&e&&(t.xp6(10),t.Oqu(null==o.data||null==o.data.customer?null:o.data.customer.name),t.xp6(2),t.Oqu(null==o.data||null==o.data.customer?null:o.data.customer.email),t.xp6(2),t.Oqu(null==o.data||null==o.data.customer?null:o.data.customer.contact),t.xp6(6),t.Oqu(null==o.data||null==o.data.customer||null==o.data.customer.billing_address?null:o.data.customer.billing_address.address),t.xp6(2),t.Oqu(null==o.data||null==o.data.customer||null==o.data.customer.billing_address?null:o.data.customer.billing_address.country),t.xp6(2),t.Oqu(null==o.data||null==o.data.customer||null==o.data.customer.billing_address?null:o.data.customer.billing_address.phone),t.xp6(6),t.Oqu(null==o.data||null==o.data.customer||null==o.data.customer.address?null:o.data.customer.address.address),t.xp6(2),t.Oqu(null==o.data||null==o.data.customer||null==o.data.customer.address?null:o.data.customer.address.country),t.xp6(2),t.Oqu(null==o.data||null==o.data.customer||null==o.data.customer.address?null:o.data.customer.address.phone),t.xp6(4),t.Q6J("ngForOf",o.data.products),t.xp6(3),t.Q6J("tableConfig",o.tableConfig))},dependencies:[r.sg,J.a,Z.Pi,d.rH],styles:[".detail[_ngcontent-%COMP%]{background-color:var(--lightGray)}.detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500}i[_ngcontent-%COMP%]{cursor:pointer}"]}),n})(),resolve:{invoice:(()=>{class n{constructor(e){this.receiptsInvoicesService=e}resolve(e){return this.receiptsInvoicesService.getById(e.params.id)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(T))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}];let ut=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(pt),d.Bz]}),n})();var dt=a(1019),mt=a(8096),ft=a(1471),vt=a(2115),gt=a(1890),ht=a(474),_t=a(4413),yt=a(1865);let Zt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,A.m8,dt.i,mt.J,ft.X,Z.aw,vt.u,gt.f,ut,ht._8,_t.e,yt.cc]}),n})()},1771:(x,g,a)=>{a.d(g,{U:()=>h});var r=a(9291),d=a(6223);const A=["*"];let h=(()=>{class m{constructor(){this.onSubmit=new r.vpe}ngOnChanges(u){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const u=this.getFormData();this.onSubmit.emit(u)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return m.\u0275fac=function(u){return new(u||m)},m.\u0275cmp=r.Xpm({type:m,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[r.TTD],ngContentSelectors:A,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(u,f){1&u&&(r.F$t(),r.TgZ(0,"form",0),r.NdJ("ngSubmit",function(){return f.submit()}),r.Hsn(1),r.qZA()),2&u&&r.Q6J("formGroup",f.formGroup)},dependencies:[d._Y,d.JL,d.sg]}),m})()},8718:(x,g,a)=>{a.d(g,{x:()=>r});const r={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}},9773:(x,g,a)=>{a.d(g,{R:()=>m});var r=a(9360),d=a(8251),A=a(4829),h=a(2420);function m(C){return(0,r.e)((u,f)=>{(0,A.Xf)(C).subscribe((0,d.x)(f,()=>f.complete(),h.Z)),!f.closed&&u.subscribe(f)})}}}]);