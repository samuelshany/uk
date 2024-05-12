"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[2649],{2649:(q,_,i)=>{i.r(_),i.d(_,{OrderModule:()=>ie});var p=i(6814),c=i(8209),n=i(6924),d=i(5946),g=i(5861);const v_api_create="purchase/create",v_api_get="http://localhost:4200/assets/api/data.json",v_api_getById="purchase/";var m=function(t){return t.create="Create Purchase",t.view="View Purchases",t.edit="Edit Purchase",t.delete="Delete Purchase",t}(m||{});const x=t=>{return{cols:[{field:"id",label:"code",class:""},{field:"supplier_name",label:"supplier_name"},{field:"delivery_date",label:"delivery_date"},{field:"quantity",label:"quantity"},{field:"note",label:"note",format:a=>a.note?a.note:"-"},{field:"total_amount",label:"total_amount"},{label:"action",actions:[{id:m.delete,icon:"print",class:"main-color",fun:(a=(0,g.Z)(function*(o){return yield t.receiptOrderService.delete(o)}),function(r){return a.apply(this,arguments)})},{id:m.edit,icon:"eye",class:"main-color",route:"receipt-order/view/"}]}],Request:v_api_get};var a};var s=i(5219),e=i(9291),l=i(2377),u=i(359),A=i(5077),y=i(3826),C=i(3999);let L=(()=>{class t{constructor(){this.icon=s.dv}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-list-categories"]],inputs:{cat:"cat"},decls:9,vars:8,consts:[[1,"options-cat","d-md-flex","justify-content-between","align-items-center"],[1,"col-xl-8","table-responsive"],[1,"row","options","rounded-pill","p-1"],["routerLink","/key/inventory/order",3,"ngClass"],["routerLink","/key/inventory/order/delivery-order",3,"ngClass"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"span",4),e._uU(7),e.ALo(8,"translate"),e.qZA()()()()),2&o&&(e.xp6(3),e.Q6J("ngClass","receipt_order"==r.cat?"col-6 rounded-pill pointer active-option":"col-6 rounded-pill pointer"),e.xp6(1),e.Oqu(e.lcZ(5,4,"receipt_order")),e.xp6(2),e.Q6J("ngClass","delivery_order"==r.cat?"col-6 rounded-pill pointer active-option":"col-6 rounded-pill pointer"),e.xp6(1),e.Oqu(e.lcZ(8,6,"delivery_order")))},dependencies:[p.mk,c.rH,C.X$],styles:["[_nghost-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   .options-cat[_ngcontent-%COMP%]{margin:2rem 0}[_nghost-%COMP%]   .options-cat[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{border:2px solid var(--mainColor);margin:5px}[_nghost-%COMP%]   .options-cat[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:center;padding:4px;min-width:130px}[_nghost-%COMP%]   .options-cat[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .active-option[_ngcontent-%COMP%]{background-color:var(--mainColor);color:#fff;padding:4px}"]}),t})(),M=(()=>{class t{constructor(){this.tableConfig=x(this),this.filtersConfig=[{field:"search",label:"search",type:n.W.TEXT,placeholder:"search"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"code",field:"code"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:d.q.asc,field:d.q.asc},{label:d.q.desc,field:d.q.desc}]}],this.permissions=m,this.icon=s.dv}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-receipt-order-list"]],decls:16,vars:9,consts:[[1,"page-card"],["cat","receipt_order"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","sort","filter"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""]],template:function(o,r){if(1&o&&(e.TgZ(0,"div",0),e._UZ(1,"app-list-categories",1),e.TgZ(2,"div",2)(3,"h5",3),e._uU(4),e.ALo(5,"translate"),e.qZA()(),e.TgZ(6,"div",4),e._UZ(7,"ukt-sort",5,6)(9,"ukt-filter",7,8),e.qZA(),e.TgZ(11,"div",9),e._UZ(12,"app-table",10),e.qZA(),e.TgZ(13,"div",11),e._UZ(14,"ukt-pagination",null,12),e.qZA()()),2&o){const f=e.MAs(8),O=e.MAs(10),b=e.MAs(15);e.xp6(4),e.Oqu(e.lcZ(5,7,"receipt_orders_list")),e.xp6(3),e.Q6J("SortConfig",r.sortConfig),e.xp6(2),e.Q6J("config",r.filtersConfig),e.xp6(3),e.Q6J("tableConfig",r.tableConfig)("pagination",b)("sort",f)("filter",O)}},dependencies:[l.a,u.Q,A.z,y.x,L,C.X$]}),t})();const P=t=>({cols:[{field:"id",label:"code",class:""},{field:"product_name",label:"product_name"},{field:"quantity",label:"quantity"},{field:"total_amount",label:"total_amount"}],actions:[],Request:v_api_get});var h=i(6223),D=i(8763),w=i(5118),F=i(1904),I=i(3838),Q=i(5253),S=i(1771),U=i(4779);function G(t,a){if(1&t&&(e.TgZ(0,"div")(1,"p",21),e._uU(2),e.qZA()()),2&t){const o=a.$implicit;e.xp6(2),e.Oqu(o.value)}}let J=(()=>{class t{constructor(o,r,f,O,b){this.fb=o,this.toastr=r,this.config=f,this.dialogRef=O,this.receiptOrderService=b,this.formGroup=this.initForm(),this.otherReasons=!0,this.config.data?.data&&this.fillDataToUpdate(this.config.data?.data)}switchReason(o){this.otherReasons=!o.target.value}initForm(){return this.fb.group({id:[Number],product_id:["",[h.kI.required]],quantity:["",[h.kI.required]],delivery_date:["",h.kI.required],notes:[""]})}fillDataToUpdate(o){this.formGroup.patchValue({id:o.id,product_id:o?.product_id,delivery_date:o?.delivery_date,quantity:o?.quantity,notes:o?.notes})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.receiptOrderService.create(this.formGroup.value).subscribe({next:o=>{this.toastr.success(o.message),this.closePopup(!0)},error:o=>{this.errors=o.error.errors,this.toastr.error(o.error.message)}})}closePopup(o){this.dialogRef.close(o)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(h.qu),e.Y36(D._W),e.Y36(w.S),e.Y36(w.E7),e.Y36(R))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-confirm-receipt-order"]],decls:30,vars:30,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/purchase -2.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup"],[4,"ngFor","ngForOf"],[1,"row"],[1,"row","quantity"],[1,"col-6","mt-4"],[1,"col-6"],["formControlName","quantity","ngDefaultControl","",3,"mode","maxFractionDigits","minFractionDigits","showButtons","text"],[1,"mb-5","col-12"],["filterBy","name","ngDefaultControl","","formControlName","reason",3,"text","filter","optionLabel","optionValue","placeholder"],[1,"mb-5","col-sm-12"],["formControlName","reason","ngDefaultControl","","placeholder","",3,"text"],[1,"row","g-2","my-2"],[3,"text","click"],[1,"text-error"]],template:function(o,r){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"span",5),e.NdJ("click",function(){return r.closePopup(!1)}),e._UZ(6,"i",6),e.qZA()(),e.TgZ(7,"p",7),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"app-form",8),e.YNc(11,G,3,1,"div",9),e.ALo(12,"keyvalue"),e.TgZ(13,"div",10)(14,"div",11)(15,"div",12)(16,"p"),e._uU(17,"Product Name"),e.qZA()(),e.TgZ(18,"div",13)(19,"div"),e._UZ(20,"app-number-input",14),e.qZA()()(),e.TgZ(21,"div",15),e._UZ(22,"app-dropdown",16),e.qZA(),e.TgZ(23,"div",17),e._UZ(24,"app-textarea",18),e.qZA()(),e.TgZ(25,"div",19)(26,"div",13)(27,"app-button",20),e.NdJ("click",function(){return r.closePopup(!1)}),e.qZA()(),e.TgZ(28,"div",13)(29,"app-button",20),e.NdJ("click",function(){return r.accept()}),e.qZA()()()()()),2&o){let f;e.xp6(8),e.Oqu(e.lcZ(9,26,null!==(f=r.config.header)&&void 0!==f?f:"")),e.xp6(2),e.Q6J("formGroup",r.formGroup),e.xp6(1),e.Q6J("ngForOf",e.lcZ(12,28,r.errors)),e.xp6(9),e.Tol(""),e.Q6J("mode","decimal")("maxFractionDigits",3)("minFractionDigits",2)("showButtons",!1)("text","quantity"),e.xp6(2),e.Tol(""),e.Q6J("text","reason")("filter",!0)("optionLabel","name")("optionValue","id")("placeholder","select"),e.xp6(2),e.Tol(""),e.Q6J("text","other_reason"),e.xp6(3),e.Tol("btn-cancel"),e.Q6J("text","Cancel"),e.xp6(2),e.Tol("btn-filter"),e.Q6J("text",null==r.config.data?null:r.config.data.acceptLabel)}},dependencies:[p.sg,F.D,I.J,Q.R,S.U,h.Fj,h.JJ,h.JL,h.sg,h.u,U.r,p.Nd,C.X$],styles:[".quantity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px!important}"]}),t})();var B=i(1732),j=i(3562);let R=(()=>{class t{constructor(o,r,f){this.http=o,this.dynamicDialog=r,this.toastr=f}get(){return this.http.get("http://localhost:4200/assets/api/data.json")}getById(o){return this.http.get(v_api_getById+o)}openDialogToCreate(){var o=this;return(0,g.Z)(function*(){return yield o.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"confirm_receiving",data:{acceptLabel:"send",rejectLabel:"Cancel"},width:"480px",height:"h-100"},J)})()}create(o){const{id:r}=o;return this.http.post(v_api_create+r,o)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(B.O),e.LFG(j.U),e.LFG(D._W))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),V=(()=>{class t{constructor(o){this.receiptOrderService=o,this.icon=s.dv,this.permissions=m,this.tableConfig=P()}openDialogToCreate(){this.receiptOrderService.openDialogToCreate()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(R))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-view-receipt-order"]],decls:57,vars:26,consts:[[1,"p-5","bg-white"],[1,"d-flex"],["routerLink","/key/purchase/receipts-invoices",1,"pi","pi-arrow-left","px-3","pt-2",2,"font-size","2rem"],[1,"fw-bold","fs-1"],[1,"btns"],[3,"text","icon","iconPos","click"],[1,"row","mt-5"],[1,"col-4"],[1,"p-2","rounded-5","detail"],[1,"p-4"],[1,"fw-bold","mb-4","fs-2"],[1,"invisible"],[1,"fw-bold","fs-1","mt-5","px-4"],[1,"table"],[3,"tableConfig"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2),e.TgZ(3,"h2",3),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"div",4)(7,"app-button",5),e.NdJ("click",function(){return r.openDialogToCreate()}),e.qZA(),e.TgZ(8,"app-button",5),e.NdJ("click",function(){return r.openDialogToCreate()}),e.qZA()()(),e.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"h3",10),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"p"),e._uU(17,"Name here"),e.qZA(),e.TgZ(18,"p"),e._uU(19,"Mail@mail.com"),e.qZA(),e.TgZ(20,"p"),e._uU(21,"0123456789"),e.qZA(),e.TgZ(22,"p",11),e._uU(23,"0123456789"),e.qZA()()()(),e.TgZ(24,"div",7)(25,"div",8)(26,"div",9)(27,"h3",10),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"p"),e._uU(31,"Billing Info"),e.qZA(),e.TgZ(32,"p"),e._uU(33,"Address here"),e.qZA(),e.TgZ(34,"p"),e._uU(35,"Egypt"),e.qZA(),e.TgZ(36,"p"),e._uU(37,"0123456789"),e.qZA()()()(),e.TgZ(38,"div",7)(39,"div",8)(40,"div",9)(41,"h3",10),e._uU(42),e.ALo(43,"translate"),e.qZA(),e.TgZ(44,"p"),e._uU(45,"Billing Info"),e.qZA(),e.TgZ(46,"p"),e._uU(47,"Address here"),e.qZA(),e.TgZ(48,"p"),e._uU(49,"Egypt"),e.qZA(),e.TgZ(50,"p"),e._uU(51,"0123456789"),e.qZA()()()()(),e.TgZ(52,"h2",12),e._uU(53),e.ALo(54,"translate"),e.qZA(),e.TgZ(55,"div",13),e._UZ(56,"app-table",14),e.qZA()()),2&o&&(e.xp6(4),e.hij("",e.lcZ(5,16,"invoice_details")," "),e.xp6(3),e.Tol("btn-filter d-inline-block "),e.Q6J("text","done")("icon",r.icon.PLUS)("iconPos","left"),e.xp6(1),e.Tol("btn-cancel d-inline-block "),e.Q6J("text","print")("icon",r.icon.CHECK)("iconPos","left"),e.xp6(6),e.Oqu(e.lcZ(15,18,"supplier_contact")),e.xp6(14),e.Oqu(e.lcZ(29,20,"billing_info")),e.xp6(14),e.Oqu(e.lcZ(43,22,"shipping_info")),e.xp6(11),e.Oqu(e.lcZ(54,24,"items_details")),e.xp6(3),e.Q6J("tableConfig",r.tableConfig))},dependencies:[l.a,U.r,c.rH,C.X$],styles:[".detail[_ngcontent-%COMP%]{background-color:var(--lightGray)}.detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500}i[_ngcontent-%COMP%]{cursor:pointer}.btns[_ngcontent-%COMP%]{margin-left:auto;display:flex;gap:10px}"]}),t})();const k_api_get="http://localhost:4200/assets/api/data.json",N=t=>{return{cols:[{field:"id",label:"code",class:""},{field:"supplier_name",label:"customer_name"},{field:"delivery_date",label:"delivery_date"},{field:"quantity",label:"quantity"},{field:"note",label:"note",format:a=>a.note?a.note:"-"},{field:"total_amount",label:"total_amount"},{label:"action",actions:[{id:m.delete,icon:"print",class:"main-color",fun:(a=(0,g.Z)(function*(o){return yield t.receiptOrderService.delete(o)}),function(r){return a.apply(this,arguments)})},{id:m.edit,icon:"eye",class:"main-color",route:"view/"}]}],Request:k_api_get};var a};var E=function(t){return t.create="Create Purchase",t.view="View Purchases",t.edit="Edit Purchase",t.delete="Delete Purchase",t}(E||{});const Y=[{path:"",component:M},{path:"receipt-order",component:M},{path:"delivery-order",component:(()=>{class t{constructor(){this.tableConfig=N(this),this.filtersConfig=[{field:"search",label:"search",type:n.W.TEXT,placeholder:"search"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"code",field:"code"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:d.q.asc,field:d.q.asc},{label:d.q.desc,field:d.q.desc}]}],this.permissions=E,this.icon=s.dv}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-list-delivery-order"]],decls:16,vars:9,consts:[[1,"page-card"],["cat","delivery_order"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","sort","filter"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""]],template:function(o,r){if(1&o&&(e.TgZ(0,"div",0),e._UZ(1,"app-list-categories",1),e.TgZ(2,"div",2)(3,"h5",3),e._uU(4),e.ALo(5,"translate"),e.qZA()(),e.TgZ(6,"div",4),e._UZ(7,"ukt-sort",5,6)(9,"ukt-filter",7,8),e.qZA(),e.TgZ(11,"div",9),e._UZ(12,"app-table",10),e.qZA(),e.TgZ(13,"div",11),e._UZ(14,"ukt-pagination",null,12),e.qZA()()),2&o){const f=e.MAs(8),O=e.MAs(10),b=e.MAs(15);e.xp6(4),e.Oqu(e.lcZ(5,7,"delivery_orders_list")),e.xp6(3),e.Q6J("SortConfig",r.sortConfig),e.xp6(2),e.Q6J("config",r.filtersConfig),e.xp6(3),e.Q6J("tableConfig",r.tableConfig)("pagination",b)("sort",f)("filter",O)}},dependencies:[l.a,u.Q,A.z,y.x,L,C.X$]}),t})()},{path:"receipt-order/view/:id",component:V},{path:"receipt-order/confirm/:id",component:J},{path:"delivery-order/view/:id",component:(()=>{class t{constructor(){this.icon=s.dv,this.permissions=m,this.tableConfig=P()}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-view-delivery-order"]],decls:56,vars:21,consts:[[1,"p-5","bg-white"],[1,"d-flex"],["routerLink","/key/purchase/receipts-invoices",1,"pi","pi-arrow-left","px-3","pt-2",2,"font-size","2rem"],[1,"fw-bold","fs-1"],[1,"inventory-view-btns"],[3,"text","icon","iconPos"],[1,"row","mt-5"],[1,"col-4"],[1,"p-2","rounded-5","detail"],[1,"p-4"],[1,"fw-bold","mb-4","fs-2"],[1,"invisible"],[1,"fw-bold","fs-1","mt-5","px-4"],[1,"table"],[3,"tableConfig"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"i",2),e.TgZ(3,"h2",3),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"div",4),e._UZ(7,"app-button",5),e.qZA()(),e.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"h3",10),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"p"),e._uU(16,"Name here"),e.qZA(),e.TgZ(17,"p"),e._uU(18,"Mail@mail.com"),e.qZA(),e.TgZ(19,"p"),e._uU(20,"0123456789"),e.qZA(),e.TgZ(21,"p",11),e._uU(22,"0123456789"),e.qZA()()()(),e.TgZ(23,"div",7)(24,"div",8)(25,"div",9)(26,"h3",10),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"p"),e._uU(30,"Billing Info"),e.qZA(),e.TgZ(31,"p"),e._uU(32,"Address here"),e.qZA(),e.TgZ(33,"p"),e._uU(34,"Egypt"),e.qZA(),e.TgZ(35,"p"),e._uU(36,"0123456789"),e.qZA()()()(),e.TgZ(37,"div",7)(38,"div",8)(39,"div",9)(40,"h3",10),e._uU(41),e.ALo(42,"translate"),e.qZA(),e.TgZ(43,"p"),e._uU(44,"Billing Info"),e.qZA(),e.TgZ(45,"p"),e._uU(46,"Address here"),e.qZA(),e.TgZ(47,"p"),e._uU(48,"Egypt"),e.qZA(),e.TgZ(49,"p"),e._uU(50,"0123456789"),e.qZA()()()()(),e.TgZ(51,"h2",12),e._uU(52),e.ALo(53,"translate"),e.qZA(),e.TgZ(54,"div",13),e._UZ(55,"app-table",14),e.qZA()()),2&o&&(e.xp6(4),e.hij("",e.lcZ(5,11,"invoice_details")," "),e.xp6(3),e.Tol("btn-cancel d-inline-block "),e.Q6J("text","print")("icon",r.icon.CHECK)("iconPos","left"),e.xp6(6),e.Oqu(e.lcZ(14,13,"supplier_contact")),e.xp6(14),e.Oqu(e.lcZ(28,15,"billing_info")),e.xp6(14),e.Oqu(e.lcZ(42,17,"shipping_info")),e.xp6(11),e.Oqu(e.lcZ(53,19,"items_details")),e.xp6(3),e.Q6J("tableConfig",r.tableConfig))},dependencies:[l.a,U.r,c.rH,C.X$],styles:[".detail[_ngcontent-%COMP%]{background-color:var(--lightGray)}.detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:500}i[_ngcontent-%COMP%]{cursor:pointer}"]}),t})()}];let z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(Y),c.Bz]}),t})();var K=i(4413),$=i(1890),H=i(9624),ee=i(1019),te=i(2115),oe=i(8096),ne=i(1471);let ie=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,C.aw,ne.X,H.U,te.u,K.e,$.f,ee.i,oe.J,s.m8,z]}),t})()},1771:(q,_,i)=>{i.d(_,{U:()=>Z});var p=i(9291),c=i(6223);const n=["*"];let Z=(()=>{class d{constructor(){this.onSubmit=new p.vpe}ngOnChanges(g){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const g=this.getFormData();this.onSubmit.emit(g)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return d.\u0275fac=function(g){return new(g||d)},d.\u0275cmp=p.Xpm({type:d,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[p.TTD],ngContentSelectors:n,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(g,v){1&g&&(p.F$t(),p.TgZ(0,"form",0),p.NdJ("ngSubmit",function(){return v.submit()}),p.Hsn(1),p.qZA()),2&g&&p.Q6J("formGroup",v.formGroup)},dependencies:[c._Y,c.JL,c.sg]}),d})()},5253:(q,_,i)=>{i.d(_,{R:()=>x});var p=i(67),c=i(6223),n=i(9291),Z=i(6814),d=i(6218),T=i(3999);function g(s,e){1&s&&n._UZ(0,"i",6)}function v(s,e){if(1&s&&(n.TgZ(0,"label"),n._uU(1),n.ALo(2,"titlecase"),n.ALo(3,"translate"),n.TgZ(4,"span",4),n.YNc(5,g,1,0,"i",5),n.qZA()()),2&s){const l=n.oxw();n.xp6(1),n.hij("",n.lcZ(2,2,n.lcZ(3,4,l.text))," "),n.xp6(4),n.Q6J("ngIf",l.control&&(null==l.control.errors?null:l.control.errors.required))}}function m(s,e){if(1&s&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&s){const l=n.oxw();n.Tol("text-danger"),n.xp6(1),n.Oqu(l.object.keys(l.control.errors)[0])}}let x=(()=>{class s extends p.t{constructor(l){super(),this.formGroupDirective=l,this.placeholder="",this.rows="2",this.cols="",this.readOnly=!1,this.class="d-flex flex-column justify-content-between",this.object=Object}writeValue(l){this.value=l}onValueChange(l){this.onChange(l.target.value),this.onTouched()}}return s.\u0275fac=function(l){return new(l||s)(n.Y36(c.sg,8))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-textarea"]],inputs:{value:"value",text:"text",placeholder:"placeholder",rows:"rows",cols:"cols",readOnly:"readOnly",class:"class",type:"type"},features:[n._Bn([{provide:c.JU,useExisting:s,multi:!0},{provide:c.Cf,useExisting:s,multi:!0}]),n.qOj],decls:4,vars:8,consts:[[3,"ngClass"],[4,"ngIf"],["pInputTextarea","",3,"rows","cols","ngModel","placeholder","disabled","ngModelChange","input"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(l,u){1&l&&(n.TgZ(0,"div",0),n.YNc(1,v,6,6,"label",1),n.TgZ(2,"textarea",2),n.NdJ("ngModelChange",function(y){return u.value=y})("input",function(y){return u.onValueChange(y)}),n.qZA(),n.YNc(3,m,2,3,"span",3),n.qZA()),2&l&&(n.Q6J("ngClass",u.class),n.xp6(1),n.Q6J("ngIf",u.text),n.xp6(1),n.Q6J("rows",u.rows)("cols",u.cols)("ngModel",u.value)("placeholder",u.placeholder)("disabled",u.readOnly),n.xp6(1),n.Q6J("ngIf",u.control&&u.control.errors&&(u.control.touched||u.formGroupDirective.submitted)))},dependencies:[Z.mk,Z.O5,c.Fj,c.JJ,c.On,d.g,Z.rS,T.X$]}),s})()}}]);