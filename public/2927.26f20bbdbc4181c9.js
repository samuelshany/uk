"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[2927],{2927:(x,h,a)=>{a.r(h),a.d(h,{ReceiptsInvoicesModule:()=>yt});var c=a(6814),f=a(2954);const u_api_get="purchase-invoice",u_api_getById="purchase-invoice/details/",u_api_update="purchase-invoice/update/",u_api_delete="purchase-invoice/",u_api_getBills="purchase-invoice/",u_api_collect="purchase-invoice-payments/collect/",u_page_list="",u_page_details="details/:id",u_page_collect="collect/:id",u_page_payment="payment/:id";var v=a(5861),d=function(i){return i.create="Create Purchase",i.view="View Purchases",i.edit="Edit Purchase",i.delete="Delete Purchase",i}(d||{});const _=i=>{return{cols:[{field:"id",label:"#Invoice",class:""},{field:"product_name",label:"product_name"},{field:"quantity",label:"quantity"},{field:"supplier_name",label:"supplier"},{field:"total",label:"total_amount"},{field:"created_at",label:"date"},{field:"payment_type_name",label:"payment_method",format:n=>n.payment_type_name?n.payment_type_name:"-"},{field:"status",label:"status",custom_class_cel:n=>"paid"==n.status?"status-approved":"status-pending",class:"text-center"},{label:"action",actions:[{id:d.edit,icon:"fa-solid fa-eye",class:"main-color",route:"details"},{id:d.edit,icon:"fa-solid fa-money-check-dollar",class:"main-color",hideBasedOnCondition:!0,customClassCondition:n=>"-"==n.payment_type_name?"d-none":"tesst",fun:(n=(0,v.Z)(function*(e){return yield i.receiptsInvoicesService.openDialogToSelectPaymentMethod(e)}),function(o){return n.apply(this,arguments)})},{id:d.edit,icon:"fa-solid fa-sack-dollar",class:"fa-solid main-color",route:"details"}]}],Request:u_api_get};var n},m=i=>{return{cols:[{field:"purchase_invoice_id",label:"Bill",class:""},{field:"payment_date",label:"due_date"},{field:"total",label:"total",format:n=>0==n.total?"0 $":n.total},{field:"paid_total",label:"paid_total",format:n=>0==n.paid_total?"0 $":n.paid_total},{field:"remain_total",label:"remain_total",format:n=>0==n.remain_total?"0 $":n.remain_total},{field:"status",label:"status",custom_class_cel:n=>"paid"==n.status?"status-approved":"status-pending"},{label:"action",actions:[{id:d.edit,icon:"fa-solid fa-sack-dollar",class:"main-color",fun:(n=(0,v.Z)(function*(e){return yield i.ReceiptsInvoicesService.openDialogToPayInvoice(e)}),function(o){return n.apply(this,arguments)})}]}],Request:u_api_getBills+i.id+"/payments"};var n};var g=a(6924),A=a(5946),M=a(5219),t=a(9291),s=a(6223),w=a(6785),C=a(8763),I=a(5118),G=a(1732),P=a(1771),E=a(2305),U=a(8614),O=a(1904),D=a(3838),q=a(6098),R=a(4779),y=a(3999);function N(i,n){if(1&i&&(t.TgZ(0,"p",7),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.AsE("",t.lcZ(2,2,t.lcZ(3,4,"total_collections"))," : ",e.totalInvoicesAmount," ")}}function k(i,n){if(1&i&&(t.TgZ(0,"p",20),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,t.lcZ(3,3,e.messageError)),"")}}function Q(i,n){if(1&i&&(t.TgZ(0,"div")(1,"p",21),t._uU(2),t.qZA()()),2&i){const e=n.$implicit;t.xp6(2),t.hij(" ",e.value,"")}}function S(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",25)(1,"div",26)(2,"label",27),t._uU(3),t.ALo(4,"titlecase"),t.ALo(5,"translate"),t.qZA(),t._UZ(6,"app-text",28),t.qZA(),t.TgZ(7,"div",26)(8,"label",27),t._uU(9),t.ALo(10,"titlecase"),t.ALo(11,"translate"),t.qZA(),t._UZ(12,"app-text",28),t.qZA(),t.TgZ(13,"div",29)(14,"p",30),t.NdJ("click",function(){const r=t.CHM(e).index,p=t.oxw(2);return t.KtG(p.deleteInvoiceFromDetailsArray(r))}),t._UZ(15,"i",31),t.qZA()()()}if(2&i){const e=n.$implicit,o=n.index;t.xp6(3),t.AsE("",t.lcZ(4,16,t.lcZ(5,18,"date"))," ",o+1,""),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("value",e.value.date)("readOnly",!0)("text","")("placeholder",""),t.xp6(3),t.AsE("",t.lcZ(10,20,t.lcZ(11,22,"amount"))," ",o+1,""),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("value",e.value.amount)("readOnly",!0)("text","")("placeholder","")}}function j(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",32)(1,"div",12),t._UZ(2,"app-date",33),t.qZA(),t.TgZ(3,"div",12),t._UZ(4,"app-number-input",34),t.qZA(),t.TgZ(5,"div",29)(6,"p",5),t.NdJ("click",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.addInvoiceToDetailsArray())}),t._UZ(7,"i",35),t.qZA()()()}2&i&&(t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","date"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("showButtons",!1)("mode","currency")("text","amount")("placeholder",""))}function B(i,n){if(1&i&&(t.TgZ(0,"div",22),t.YNc(1,S,16,24,"div",23),t.YNc(2,j,8,9,"div",24),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.detailsInvoices.controls),t.xp6(1),t.Q6J("ngIf",e.totalInvoicesAmount<e.total_amount)}}let J=(()=>{class i{constructor(e,o,l,r,p,T){this.fb=e,this.toastr=o,this.config=l,this.dialogRef=r,this.receiptsInvoicesService=p,this.http=T,this.paymentConfig=w.D,this.messageError="",this.formGroup=this.initForm(),this.payment_accounts=[],this.totalInvoicesAmount=0,this.paymentTypes=[{name:"cash",id:"cash"},{name:"credit",id:"credit"}],this.config.data?.data&&this.fillData(this.config.data?.data)}initForm(){return this.fb.group({id:[Number],payment_type_id:["",[s.kI.required]],payment_account_id:["",[s.kI.required]],is_credit:[!1,[s.kI.required]],details:this.fb.array([]),invoice:this.fb.group({date:[""],amount:[""]})})}get detailsInvoices(){return this.formGroup.get("details")}fillData(e){this.total_amount=e.total,this.formGroup.get("id")?.patchValue(e.id)}accept(){this.formGroup.get("is_credit")?.value?this.totalInvoicesAmount==this.total_amount?this.formGroup.invalid?this.formGroup.markAllAsTouched():this.receiptsInvoicesService.selectPaymentMethod(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors,this.toastr.error(e.error.message)}}):this.messageError="total_collections_not_equal_total_amount":this.formGroup.invalid?this.formGroup.markAllAsTouched():this.receiptsInvoicesService.selectPaymentMethod(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors,this.toastr.error(e.error.message)}})}closePopup(e){this.dialogRef.close(e)}addInvoiceToDetailsArray(){this.formGroup.get("invoice")?.invalid?this.formGroup.get("invoice")?.markAllAsTouched():(this.detailsInvoices.push(this.fb.group({date:this.formGroup.get("invoice")?.value.date,amount:this.formGroup.get("invoice")?.value.amount})),this.totalInvoicesAmount+=parseInt(this.formGroup.get("invoice")?.value.amount),this.clearInvoiceForm())}deleteInvoiceFromDetailsArray(e){this.detailsInvoices.controls.forEach((o,l)=>{l==e&&(this.totalInvoicesAmount-=parseInt(o.value.amount))}),this.detailsInvoices.removeAt(e)}clearInvoiceForm(){(this.formGroup.get("is_credit")?.value||this.totalInvoicesAmount==this.total_amount)&&(this.messageError="",this.formGroup.get("invoice.date")?.clearValidators(),this.formGroup.get("invoice.amount")?.clearValidators(),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()),this.formGroup.get("is_credit")?.value&&this.totalInvoicesAmount!=this.total_amount&&(this.formGroup.get("invoice.date")?.setValidators(s.kI.required),this.formGroup.get("invoice.amount")?.setValidators(s.kI.required),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()),this.formGroup.get("invoice")?.reset()}getPaymentAccounts(e){let o=e.value;o&&this.http.getWithParam(this.paymentConfig.api.getPaymentAccount+o).subscribe({next:l=>{this.payment_accounts=l.data},error:l=>{this.payment_accounts=[]}})}is_credit(e){e.checked?(this.formGroup.get("is_credit")?.patchValue(!0),this.formGroup.get("invoice.date")?.setValidators(s.kI.required),this.formGroup.get("invoice.amount")?.setValidators(s.kI.required)):(this.formGroup.get("is_credit")?.patchValue(!1),this.formGroup.get("invoice.date")?.clearValidators(),this.formGroup.get("invoice.amount")?.clearValidators(),this.detailsInvoices.clear()),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.qu),t.Y36(C._W),t.Y36(I.S),t.Y36(I.E7),t.Y36(Z),t.Y36(G.O))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-payment-receipts-invoices"]],decls:31,vars:40,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/purchase -2.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],["class","title",4,"ngIf"],[3,"formGroup"],["class","text-error text-center",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"my-3"],["ngDefaultControl","","formControlName","payment_type_id",3,"text","request","optionLabel","optionValue","placeholder","onDropDownChange"],["ngDefaultControl","","formControlName","payment_account_id",3,"text","data","optionLabel","optionValue","placeholder"],[3,"value","text","change"],["class","credit",4,"ngIf"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error","text-center"],[1,"text-error"],[1,"credit"],["class","group",4,"ngFor","ngForOf"],["formGroupName","invoice","class","group",4,"ngIf"],[1,"group"],[1,"my-2"],["for",""],[3,"value","readOnly","text","placeholder"],[1,"action"],[1,"text-danger",3,"click"],[1,"fa-solid","fa-trash"],["formGroupName","invoice",1,"group"],["ngDefaultControl","","formControlName","date",3,"text"],["formControlName","amount",3,"showButtons","mode","text","placeholder"],[1,"fa-solid","fa-check"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.closePopup(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"p",7),t._uU(11),t.ALo(12,"titlecase"),t.ALo(13,"translate"),t.qZA(),t.YNc(14,N,4,6,"p",8),t.qZA(),t.TgZ(15,"app-form",9),t.YNc(16,k,4,5,"p",10),t.YNc(17,Q,3,1,"div",11),t.ALo(18,"keyvalue"),t.TgZ(19,"div",12)(20,"app-dropdown",13),t.NdJ("onDropDownChange",function(r){return o.getPaymentAccounts(r)}),t.qZA()(),t.TgZ(21,"div"),t._UZ(22,"app-dropdown",14),t.qZA(),t.TgZ(23,"div",12)(24,"app-checkbox",15),t.NdJ("change",function(r){return o.is_credit(r)}),t.qZA()(),t.YNc(25,B,3,2,"div",16),t.TgZ(26,"div",17)(27,"div",18)(28,"app-button",19),t.NdJ("click",function(){return o.closePopup(!1)}),t.qZA()(),t.TgZ(29,"div",18)(30,"app-button",19),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e){let l,r,p,T,L;t.xp6(8),t.Oqu(t.lcZ(9,32,null!==(l=o.config.header)&&void 0!==l?l:"")),t.xp6(3),t.AsE("",t.lcZ(12,34,t.lcZ(13,36,"total_amount"))," : ",o.total_amount," "),t.xp6(3),t.Q6J("ngIf",null==(r=o.formGroup.get("is_credit"))?null:r.value),t.xp6(1),t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Q6J("ngIf",null==(p=o.formGroup.get("is_credit"))?null:p.value),t.xp6(1),t.Q6J("ngForOf",t.lcZ(18,38,o.errors)),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","payment_method")("request",o.paymentConfig.api.get)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","payment_accounts")("data",o.payment_accounts)("optionLabel","name_code")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol("d-flex align-items-center mt-2  flex-row-reverse justify-content-end gap-2"),t.Q6J("value",null==(T=o.formGroup.get("is_credit"))?null:T.value)("text","credit"),t.xp6(1),t.Q6J("ngIf",null==(L=o.formGroup.get("is_credit"))?null:L.value),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==o.config.data?null:o.config.data.acceptLabel)}},dependencies:[c.sg,c.O5,P.U,s.Fj,s.JJ,s.JL,s.sg,s.u,s.x0,E.b,U.T,O.D,D.J,q.I,R.r,c.rS,c.Nd,y.X$],styles:[".main[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.main[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px;margin-top:20px;margin-inline-end:30px;cursor:pointer}"]}),i})();function Y(i,n){if(1&i&&(t.TgZ(0,"p",7),t._uU(1),t.ALo(2,"titlecase"),t.ALo(3,"translate"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.AsE(" ",t.lcZ(2,2,t.lcZ(3,4,"total_collections"))," : ",e.totalInvoicesAmount," ")}}function W(i,n){if(1&i&&(t.TgZ(0,"div")(1,"p",17),t._uU(2),t.qZA()()),2&i){const e=n.$implicit;t.xp6(2),t.Oqu(e.value)}}function X(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",22)(1,"div",23)(2,"label",24),t._uU(3),t.ALo(4,"titlecase"),t.ALo(5,"translate"),t.qZA(),t._UZ(6,"app-text",25),t.qZA(),t.TgZ(7,"div",23)(8,"label",24),t._uU(9),t.ALo(10,"titlecase"),t.ALo(11,"translate"),t.qZA(),t._UZ(12,"app-text",25),t.qZA(),t.TgZ(13,"div",26)(14,"p",27),t.NdJ("click",function(){const r=t.CHM(e).index,p=t.oxw(2);return t.KtG(p.deleteInvoiceFromDetailsArray(r))}),t._UZ(15,"i",28),t.qZA()()()}if(2&i){const e=n.$implicit,o=n.index;t.xp6(3),t.AsE("",t.lcZ(4,16,t.lcZ(5,18,"date"))," ",o+1,""),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("value",e.value.date)("readOnly",!0)("text","")("placeholder",""),t.xp6(3),t.AsE("",t.lcZ(10,20,t.lcZ(11,22,"amount"))," ",o+1,""),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("value",e.value.amount)("readOnly",!0)("text","")("placeholder","")}}function $(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",29)(1,"div",30),t._UZ(2,"app-date",31),t.qZA(),t.TgZ(3,"div",30),t._UZ(4,"app-number-input",32),t.qZA(),t.TgZ(5,"div",26)(6,"p",5),t.NdJ("click",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.addInvoiceToDetailsArray())}),t._UZ(7,"i",33),t.qZA()()()}2&i&&(t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","date"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("showButtons",!1)("mode","currency")("text","amount")("placeholder",""))}function z(i,n){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-number-input",18),t.TgZ(2,"div",19),t.YNc(3,X,16,24,"div",20),t.YNc(4,$,8,9,"div",21),t.qZA()()),2&i){const e=t.oxw();t.xp6(1),t.Tol("mt-5 mb-4"),t.Q6J("showButtons",!1)("mode","currency")("text","amount"),t.xp6(2),t.Q6J("ngForOf",e.detailsInvoices.controls),t.xp6(1),t.Q6J("ngIf",e.totalInvoicesAmount<e.total_amount)}}let K=(()=>{class i{constructor(e,o,l,r,p){this.fb=e,this.toastr=o,this.config=l,this.dialogRef=r,this.ReceiptsInvoicesService=p,this.formGroup=this.initForm(),this.totalInvoicesAmount=0,this.messageError="",this.options=[{id:1,type:"All"},{id:2,type:"Partial"}],this.config.data?.data&&this.fillData(this.config.data?.data)}fillData(e){this.total_amount=e.total}initForm(){return this.fb.group({id:this.config.data.data.id,type:["",[s.kI.required]],amount:[""],details:this.fb.array([]),invoice:this.fb.group({date:[""],amount:[""]})})}accept(){this.total_amount==this.totalInvoicesAmount+parseFloat(this.formGroup.get("amount")?.value)&&(this.formGroup.get("invoice.date")?.clearValidators(),this.formGroup.get("invoice.amount")?.clearValidators(),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()),"All"==this.formGroup.get("type")?.value&&this.detailsInvoices.clear(),this.formGroup.invalid?this.formGroup.markAllAsTouched():this.ReceiptsInvoicesService.collect(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors,this.toastr.error(e.error.message)}})}closePopup(e){this.dialogRef.close(e)}changeType(e){"Partial"==e.value&&this.total_amount!=this.totalInvoicesAmount+parseFloat(this.formGroup.get("amount")?.value)?(this.formGroup.get("invoice.date")?.setValidators(s.kI.required),this.formGroup.get("invoice.amount")?.setValidators(s.kI.required)):(this.formGroup.get("invoice.date")?.clearValidators(),this.formGroup.get("invoice.amount")?.clearValidators()),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()}get detailsInvoices(){return this.formGroup.get("details")}deleteInvoiceFromDetailsArray(e){this.detailsInvoices.controls.forEach((o,l)=>{l==e&&(this.totalInvoicesAmount-=parseInt(o.value.amount))}),this.detailsInvoices.removeAt(e)}addInvoiceToDetailsArray(){this.formGroup.get("invoice")?.invalid?this.formGroup.get("invoice")?.markAllAsTouched():(this.detailsInvoices.push(this.fb.group({date:this.formGroup.get("invoice")?.value.date,amount:this.formGroup.get("invoice")?.value.amount})),this.totalInvoicesAmount+=parseInt(this.formGroup.get("invoice")?.value.amount),this.clearInvoiceForm())}clearInvoiceForm(){("Partial"==this.formGroup.get("type")?.value||this.totalInvoicesAmount==this.total_amount)&&(this.messageError="",this.formGroup.get("invoice.date")?.clearValidators(),this.formGroup.get("invoice.amount")?.clearValidators(),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()),"Partial"==this.formGroup.get("type")?.value&&this.totalInvoicesAmount!=this.total_amount&&(this.formGroup.get("invoice.date")?.setValidators(s.kI.required),this.formGroup.get("invoice.amount")?.setValidators(s.kI.required),this.formGroup.get("invoice.date")?.updateValueAndValidity(),this.formGroup.get("invoice.amount")?.updateValueAndValidity()),this.formGroup.get("invoice")?.reset()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.qu),t.Y36(C._W),t.Y36(I.S),t.Y36(I.E7),t.Y36(Z))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-pay-invoice"]],decls:26,vars:28,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/purchase -2.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup"],["class","title",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"row"],["ngDefaultControl","","formControlName","type",3,"text","data","optionValue","placeholder","optionLabel","onDropDownChange"],[4,"ngIf"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"],["formControlName","amount","placeholder","",3,"showButtons","mode","text"],[1,"credit"],["class","group",4,"ngFor","ngForOf"],["formGroupName","invoice","class","group",4,"ngIf"],[1,"group"],[1,"my-2"],["for",""],[3,"value","readOnly","text","placeholder"],[1,"action"],[1,"text-danger",3,"click"],[1,"fa-solid","fa-trash"],["formGroupName","invoice",1,"group"],[1,"my-3"],["ngDefaultControl","","formControlName","date",3,"text"],["formControlName","amount",3,"showButtons","mode","text","placeholder"],[1,"fa-solid","fa-check"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return o.closePopup(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8)(11,"p",7),t._uU(12),t.ALo(13,"titlecase"),t.ALo(14,"translate"),t.qZA(),t.YNc(15,Y,4,6,"p",9),t.YNc(16,W,3,1,"div",10),t.ALo(17,"keyvalue"),t.TgZ(18,"div",11)(19,"app-dropdown",12),t.NdJ("onDropDownChange",function(r){return o.changeType(r)}),t.qZA(),t.YNc(20,z,5,7,"div",13),t.qZA(),t.TgZ(21,"div",14)(22,"div",15)(23,"app-button",16),t.NdJ("click",function(){return o.closePopup(!1)}),t.qZA()(),t.TgZ(24,"div",15)(25,"app-button",16),t.NdJ("click",function(){return o.accept()}),t.qZA()()()()()),2&e){let l,r,p;t.xp6(8),t.Oqu(t.lcZ(9,20,null!==(l=o.config.header)&&void 0!==l?l:"")),t.xp6(2),t.Q6J("formGroup",o.formGroup),t.xp6(2),t.AsE(" ",t.lcZ(13,22,t.lcZ(14,24,"total_amount"))," : ",o.total_amount," "),t.xp6(3),t.Q6J("ngIf","Partial"==(null==(r=o.formGroup.get("type"))?null:r.value)),t.xp6(1),t.Q6J("ngForOf",t.lcZ(17,26,o.errors)),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","options")("data",o.options)("optionValue","type")("placeholder","select")("optionLabel","type"),t.xp6(1),t.Q6J("ngIf","Partial"==(null==(p=o.formGroup.get("type"))?null:p.value)),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==o.config.data?null:o.config.data.acceptLabel)}},dependencies:[c.sg,c.O5,P.U,s.Fj,s.JJ,s.JL,s.sg,s.u,s.x0,U.T,O.D,D.J,q.I,R.r,c.rS,c.Nd,y.X$],styles:[".main[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.main[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px;margin-top:20px;margin-inline-end:30px;cursor:pointer}"]}),i})();var H=a(3562);let Z=(()=>{class i{constructor(e,o,l){this.http=e,this.dynamicDialog=o,this.toastr=l}get(){return this.http.get(u_api_get)}getById(e){return this.http.get(u_api_getById+e)}delete(e){var o=this;return(0,v.Z)(function*(){const l={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e}},width:"480px",height:"auto"};if(!(yield o.dynamicDialog.confirm(l)))return!1;try{const p=yield o.http.delete(u_api_delete+e.id).toPromise();return o.toastr.success(p.message),p}catch(p){return o.toastr.error(p.error.message),p}})()}getBillsByReceiptsInvoiceId(e){return this.http.get(u_api_getBills+e+"/payments")}openDialogToSelectPaymentMethod(e){var o=this;return(0,v.Z)(function*(){const l={showHeader:!1,header:"payment_method",data:{acceptLabel:"submit",rejectLabel:"Cancel",data:{...e}},height:"auto",width:"500px",styleClass:"financial-dialog"};return yield o.dynamicDialog.showDialogWithComponent(l,J)})()}openDialogToPayInvoice(e){var o=this;return(0,v.Z)(function*(){const l={showHeader:!1,header:"pay_invoice",data:{acceptLabel:"pay",rejectLabel:"Cancel",data:{...e}},height:"auto",width:"500px",styleClass:"financial-dialog"};return yield o.dynamicDialog.showDialogWithComponent(l,K)})()}selectPaymentMethod(e){return this.http.post(u_api_update+e.id,e)}collect(e){return this.http.post(u_api_collect+e.id,e)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(G.O),t.LFG(H.U),t.LFG(C._W))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var V=a(2377),tt=a(359),et=a(5077),ot=a(4811);let it=(()=>{class i{constructor(e){this.receiptsInvoicesService=e,this.tableConfig=_(this),this.filtersConfig=[{field:"search",label:"search",type:g.W.TEXT,placeholder:"search"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"code",field:"code"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:A.q.asc,field:A.q.asc},{label:A.q.desc,field:A.q.desc}]}],this.permissions=d,this.icon=M.dv}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Z))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-receipts-invoices"]],decls:15,vars:9,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","sort","filter"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA()(),t.TgZ(5,"div",3),t._UZ(6,"ukt-sort",4,5)(8,"ukt-filter",6,7),t.qZA(),t.TgZ(10,"div",8),t._UZ(11,"app-table",9),t.qZA(),t.TgZ(12,"div",10),t._UZ(13,"ukt-pagination",null,11),t.qZA()()),2&e){const l=t.MAs(7),r=t.MAs(9),p=t.MAs(14);t.xp6(3),t.Oqu(t.lcZ(4,7,"receipts_invoices_list")),t.xp6(3),t.Q6J("SortConfig",o.sortConfig),t.xp6(2),t.Q6J("config",o.filtersConfig),t.xp6(3),t.Q6J("tableConfig",o.tableConfig)("pagination",p)("sort",l)("filter",r)}},dependencies:[V.a,tt.Q,et.z,ot.x,y.X$]}),i})();var nt=a(8645),at=a(9773);let lt=(()=>{class i{constructor(e,o){this.route=e,this.ReceiptsInvoicesService=o,this.id=2,this.unsubscribe=new nt.x,this.tableConfig=m(this),this.route.params.subscribe(l=>{this.id=l.id,this.tableConfig=m(this),console.log("ID from URL:",this.id)})}ngOnInit(){this.route.data.pipe((0,at.R)(this.unsubscribe)).subscribe({next:e=>{this.data=e.invoice.data}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(f.gz),t.Y36(Z))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-details-receipts-invoices"]],decls:64,vars:15,consts:[[1,"p-5","bg-white"],[1,"d-flex"],["routerLink","/key/purchase/receipts-invoices",1,"pi","pi-arrow-left","px-3","pt-2",2,"font-size","2rem"],["translate","invoice_details",1,"fw-bold","fs-1"],[1,"row","mt-5"],[1,"col-4"],[1,"p-2","rounded-5","detail"],[1,"p-4"],["translate","supplier_contact",1,"fw-bold","mb-4","fs-2"],[1,"invisible"],["translate","billing_info",1,"fw-bold","mb-4","fs-2"],["translate","shipping_info",1,"fw-bold","mb-4","fs-2"],[1,"mt-5","p-2","rounded-5","detail"],["translate","product_info",1,"fw-bold","mb-4","fs-2"],[1,"row","mt-3"],[1,"col"],["translate","product_id",1,"m-0"],[1,"m-0","pt-1"],["translate","quantity",1,"m-0"],["translate","date_of_creation",1,"m-0"],["translate","unit_price",1,"m-0"],["translate","total_amount",1,"m-0"],["translate","Bills",1,"fw-bold","fs-1","mt-5","px-4"],[1,"table"],[3,"tableConfig"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"i",2)(3,"h2",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),t._UZ(8,"h3",8),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA(),t.TgZ(15,"p",9),t._uU(16),t.qZA()()()(),t.TgZ(17,"div",5)(18,"div",6)(19,"div",7),t._UZ(20,"h3",10),t.TgZ(21,"p"),t._uU(22),t.qZA(),t.TgZ(23,"p"),t._uU(24),t.qZA(),t.TgZ(25,"p"),t._uU(26),t.qZA()()()(),t.TgZ(27,"div",5)(28,"div",6)(29,"div",7),t._UZ(30,"h3",11),t.TgZ(31,"p"),t._uU(32),t.qZA(),t.TgZ(33,"p"),t._uU(34),t.qZA(),t.TgZ(35,"p"),t._uU(36),t.qZA()()()()(),t.TgZ(37,"div",12)(38,"div",7),t._UZ(39,"h3",13),t.TgZ(40,"div",14)(41,"div",15),t._UZ(42,"p",16),t.TgZ(43,"p",17),t._uU(44),t.qZA()(),t.TgZ(45,"div",15),t._UZ(46,"p",18),t.TgZ(47,"p",17),t._uU(48),t.qZA()(),t.TgZ(49,"div",15),t._UZ(50,"p",19),t.TgZ(51,"p",17),t._uU(52),t.qZA()(),t.TgZ(53,"div",15),t._UZ(54,"p",20),t.TgZ(55,"p",17),t._uU(56),t.qZA()(),t.TgZ(57,"div",15),t._UZ(58,"p",21),t.TgZ(59,"p",17),t._uU(60,"$123,720.00"),t.qZA()()()()(),t._UZ(61,"h2",22),t.TgZ(62,"div",23),t._UZ(63,"app-table",24),t.qZA()()),2&e&&(t.xp6(10),t.Oqu(null==o.data||null==o.data.supplier?null:o.data.supplier.name),t.xp6(2),t.Oqu(null==o.data||null==o.data.supplier?null:o.data.supplier.email),t.xp6(2),t.Oqu(null==o.data||null==o.data.supplier?null:o.data.supplier.contact),t.xp6(2),t.Oqu(null==o.data||null==o.data.supplier?null:o.data.supplier.name),t.xp6(6),t.Oqu(null==o.data||null==o.data.supplier||null==o.data.supplier.billing_address?null:o.data.supplier.billing_address.address),t.xp6(2),t.Oqu(null==o.data||null==o.data.supplier||null==o.data.supplier.billing_address?null:o.data.supplier.billing_address.country),t.xp6(2),t.Oqu(null==o.data||null==o.data.supplier||null==o.data.supplier.billing_address?null:o.data.supplier.billing_address.phone),t.xp6(6),t.Oqu(null==o.data||null==o.data.supplier||null==o.data.supplier.address?null:o.data.supplier.address.address),t.xp6(2),t.Oqu(null==o.data||null==o.data.supplier||null==o.data.supplier.address?null:o.data.supplier.address.country),t.xp6(2),t.Oqu(null==o.data||null==o.data.supplier||null==o.data.supplier.address?null:o.data.supplier.address.phone),t.xp6(8),t.Oqu(null==o.data||null==o.data.product?null:o.data.product.code),t.xp6(4),t.Oqu(null==o.data?null:o.data.quantity),t.xp6(4),t.Oqu(null==o.data||null==o.data.product?null:o.data.product.created_at),t.xp6(4),t.Oqu(null==o.data||null==o.data.product?null:o.data.product.purchase_price),t.xp6(7),t.Q6J("tableConfig",o.tableConfig))},dependencies:[V.a,y.Pi,f.rH],styles:[".detail[_ngcontent-%COMP%]{background-color:var(--lightGray)}.detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500}i[_ngcontent-%COMP%]{cursor:pointer}"]}),i})(),st=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-collect-receipts-invoices"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"collect-receipts-invoices works!"),t.qZA())}}),i})();const ct=[{path:u_page_list,component:it},{path:u_page_payment,component:J},{path:u_page_details,component:lt,resolve:{invoice:(()=>{class i{constructor(e){this.receiptsInvoicesService=e}resolve(e){return this.receiptsInvoicesService.getById(e.params.id)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(Z))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}},{path:u_page_collect,component:st}];let pt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[f.Bz.forChild(ct),f.Bz]}),i})();var ut=a(1471),dt=a(2115),mt=a(4413),ft=a(1890),vt=a(1019),gt=a(8096),ht=a(1383),_t=a(474);let yt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.ez,ut.X,dt.u,mt.e,ft.f,vt.i,gt.J,ht.m,y.aw,pt,_t._8]}),i})()},1771:(x,h,a)=>{a.d(h,{U:()=>v});var c=a(9291),f=a(6223);const u=["*"];let v=(()=>{class d{constructor(){this.onSubmit=new c.vpe}ngOnChanges(m){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const m=this.getFormData();this.onSubmit.emit(m)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=c.Xpm({type:d,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[c.TTD],ngContentSelectors:u,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(m,g){1&m&&(c.F$t(),c.TgZ(0,"form",0),c.NdJ("ngSubmit",function(){return g.submit()}),c.Hsn(1),c.qZA()),2&m&&c.Q6J("formGroup",g.formGroup)},dependencies:[f._Y,f.JL,f.sg]}),d})()},9773:(x,h,a)=>{a.d(h,{R:()=>d});var c=a(9360),f=a(8251),u=a(4829),v=a(2420);function d(_){return(0,c.e)((m,g)=>{(0,u.Xf)(_).subscribe((0,f.x)(g,()=>g.complete(),v.Z)),!g.closed&&m.subscribe(g)})}}}]);