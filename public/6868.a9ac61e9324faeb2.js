"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[6868],{68:(Z,d,n)=>{n.d(d,{a:()=>f});const f={api:{create:"account/create",get:"account/with-group/all",getNotParent:"not-parents/accounts",getParent:"parents/accounts",getProfitLossParent:"profit-loss/parent-accounts",getExpensesParent:"account/parent/expenses",getAssetsParent:"account/parent/assets",getById:"account/",update:"account/update/",delete:"account/",exportExample:"account/export/example",exportExampleSub:"account/export/example/sub",export:"account/export/parent",exportPdf:"account/export/pdf",importAccount:"account/import",importAccountSub:"account/import/sub"},page:{}}},8687:(Z,d,n)=>{n.r(d),n.d(d,{StocksModule:()=>ct});var f=n(6814),g=n(2954),p=n(5861),m=function(o){return o.create="Create Stock",o.update="Update Stock",o.delete="Delete Stock",o.view="View Stock",o}(m||{});const u_api_create="stock/create",u_api_get="stock",u_api_update="stock/update/",u_api_delete="stock/",u_api_getProducts="product",h=o=>{return{cols:[{field:"id",label:"code",class:""},{field:"product",label:"product",format:a=>a.product?.name??"",class:""},{field:"opening_stock",label:"opening_stock",class:""},{field:"quantity",label:"quantity",format:a=>a.quantity},{field:"warehouse",label:"warehouse",format:a=>a.warehouse?.name??"",class:""},{field:"purchasing_price",label:"purchase_price",class:""},{field:"selling_price",label:"selling_price",class:""},{label:"action",actions:[{id:m.delete,icon:"trash",class:"main-color",fun:(a=(0,p.Z)(function*(e){return yield o.stockService.delete(e)}),function(r){return a.apply(this,arguments)})},{id:m.update,icon:"pen-to-square",class:"main-color",fun:function(){var a=(0,p.Z)(function*(e){return yield o.stockService.openDialogToUpdate(e)});return function(r){return a.apply(this,arguments)}}()}]}],Request:u_api_get};var a};var C=n(5219),s=n(5946),v=n(6924),L=n(8718),t=n(9291),l=n(6223),U=n(8645),J=n(2572),y=n(8763),S=n(5118),F=n(4472),P=n(1169),I=n(1771),O=n(8614),w=n(3838),E=n(6098),b=n(4779),T=n(3999);function j(o,a){if(1&o&&(t.TgZ(0,"p",22),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.financial_period[0])}}function N(o,a){if(1&o&&(t.TgZ(0,"p",22),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.product_id[0])}}function M(o,a){if(1&o&&(t.TgZ(0,"p",23),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.opening_stock[0])}}function Q(o,a){if(1&o&&(t.TgZ(0,"p",23),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.quantity[0])}}function q(o,a){if(1&o&&(t.TgZ(0,"p",22),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.warehouse_id[0])}}function Y(o,a){if(1&o&&(t.TgZ(0,"p",22),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.purchasing_price[0])}}function W(o,a){if(1&o&&(t.TgZ(0,"p",23),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.selling_price[0])}}let k=(()=>{class o{constructor(e,r,i,x,c,pt,ut){this.fb=e,this.toastr=r,this.config=i,this.dialogRef=x,this.stockService=c,this.productService=pt,this.warehouseService=ut,this.unsubscribe=new U.x,this.formGroup=this.initForm(),this.allWareHouse=[],this.allProducts=[],this.billingCities=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){(0,J.a)([this.productService.getProducts(),this.warehouseService.getWareHouse()]).subscribe(([e,r])=>{this.allProducts=e.data,this.allWareHouse=r.data})}initForm(){return this.fb.group({id:[Number],product_id:["",[l.kI.required]],opening_stock:["",[l.kI.required]],selling_price:["",[l.kI.required]],purchasing_price:["",[l.kI.required]],quantity:["",[l.kI.required]],warehouse_id:["",[l.kI.required]]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.stockService.update(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.errors=e.error.errors}}):this.stockService.create(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.errors=e.error.errors}})}reject(e){this.dialogRef.close(e)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,product_id:this.config.data.data.product_id,opening_stock:this.config.data.data.opening_stock,selling_price:this.config.data.data.selling_price,purchasing_price:this.config.data.data.purchasing_price,quantity:this.config.data.data.quantity,warehouse_id:this.config.data.data.warehouse_id})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.qu),t.Y36(y._W),t.Y36(S.S),t.Y36(S.E7),t.Y36(A),t.Y36(F.M),t.Y36(P.l))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-stock-form"]],decls:36,vars:41,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/inventory-icon.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","error",4,"ngIf"],[1,"row"],[1,"col-12"],["ngDefaultControl","","formControlName","product_id",3,"text","data","optionLabel","optionValue","placeholder"],["text","date","formControlName","opening_stock","ngDefaultControl","","placeholder",""],["class","messageError",4,"ngIf"],["text","quantity","formControlName","quantity","ngDefaultControl","","placeholder",""],["ngDefaultControl","","formControlName","warehouse_id",3,"text","data","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","purchasing_price",3,"text","placeholder"],["text","selling_price","formControlName","selling_price","ngDefaultControl","","placeholder",""],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"error"],[1,"messageError"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return r.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return r.accept()}),t.YNc(11,j,2,1,"p",9),t.TgZ(12,"div",10)(13,"div",11),t._UZ(14,"app-dropdown",12),t.YNc(15,N,2,1,"p",9),t.qZA(),t.TgZ(16,"div",11),t._UZ(17,"app-date",13),t.YNc(18,M,2,1,"p",14),t.qZA(),t.TgZ(19,"div",11),t._UZ(20,"app-text",15),t.YNc(21,Q,2,1,"p",14),t.qZA(),t.TgZ(22,"div",11),t._UZ(23,"app-dropdown",16),t.YNc(24,q,2,1,"p",9),t.qZA(),t.TgZ(25,"div",11),t._UZ(26,"app-text",17),t.YNc(27,Y,2,1,"p",9),t.qZA(),t.TgZ(28,"div",11),t._UZ(29,"app-text",18),t.YNc(30,W,2,1,"p",14),t.qZA()(),t.TgZ(31,"div",19)(32,"div",20)(33,"app-button",21),t.NdJ("click",function(){return r.reject(!1)}),t.qZA()(),t.TgZ(34,"div",20)(35,"app-button",21),t.NdJ("click",function(){return r.accept()}),t.qZA()()()()()),2&e){let i;t.xp6(8),t.Oqu(t.lcZ(9,39,null!==(i=r.config.header)&&void 0!==i?i:"")),t.xp6(2),t.Q6J("formGroup",r.formGroup),t.xp6(1),t.Q6J("ngIf",null==r.errors?null:r.errors.financial_period),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","product")("data",r.allProducts)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(1),t.Q6J("ngIf",null==r.errors?null:r.errors.product_id),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.xp6(1),t.Q6J("ngIf",null==r.errors?null:r.errors.opening_stock),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.xp6(1),t.Q6J("ngIf",null==r.errors?null:r.errors.quantity),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","warehouse")("data",r.allWareHouse)("optionLabel","name")("optionValue","id")("placeholder","warehouse"),t.xp6(1),t.Q6J("ngIf",null==r.errors?null:r.errors.warehouse_id),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","purchase_price")("placeholder",""),t.xp6(1),t.Q6J("ngIf",null==r.errors?null:r.errors.purchasing_price),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.xp6(1),t.Q6J("ngIf",null==r.errors?null:r.errors.selling_price),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==r.config.data?null:r.config.data.acceptLabel)}},dependencies:[f.O5,I.U,l.Fj,l.JJ,l.JL,l.sg,l.u,O.T,w.J,E.I,b.r,T.X$]}),o})();var G=n(1732),B=n(3562);let A=(()=>{class o{constructor(e,r,i){this.http=e,this.dynamicDialog=r,this.toastr=i}getProducts(e){return this.http.get(u_api_getProducts)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_stock",data:{acceptLabel:"add",rejectLabel:"cancel"},width:"500px",height:"auto"},k)}create(e){return this.http.post(u_api_create,e)}delete(e){var r=this;return(0,p.Z)(function*(){const i={showHeader:!0,header:"delete_stock",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e}},width:"300px",height:"auto"};if(yield r.dynamicDialog.confirm(i))try{const c=yield r.http.delete(u_api_delete+e.id).toPromise();return r.toastr.success(c.message),c}catch(c){throw r.toastr.error(c.error.message),c}return!1})()}openDialogToUpdate(e){var r=this;return(0,p.Z)(function*(){const i={showHeader:!1,header:"update_stock",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"500px",height:"auto"};return yield r.dynamicDialog.showDialogWithComponent(i,k)})()}update(e){return this.http.post(u_api_update+e.id,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(G.O),t.LFG(B.U),t.LFG(y._W))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var R=n(2377),V=n(359),H=n(5077),X=n(4811),z=n(8275);function K(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"app-button",14),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.openDialogToCreate())}),t.qZA()}if(2&o){const e=t.oxw();t.Tol("btn-filter"),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}const $=function(o){return[o]},tt=[{path:"",component:(()=>{class o{constructor(e){this.stockService=e,this.tableConfig=h(this),this.reloadData=!1,this.permissions=m,this.icon=C.dv,this.filtersConfig=[{field:"search",label:"search",type:v.W.TEXT,placeholder:"search"},{field:"creator_id",label:"created_by",type:v.W.SELECT,options:{value:"id",label:"name"},request:L.x.api.get,placeholder:"select"},{field:"from",label:"from",type:v.W.DATE},{field:"to",label:"to",type:v.W.DATE}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"id",field:"id"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:s.q.asc,field:s.q.asc},{label:s.q.desc,field:s.q.desc}]}]}openDialogToCreate(){var e=this;return(0,p.Z)(function*(){(yield e.stockService.openDialogToCreate())&&(e.tableConfig=h(e))})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(A))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list"]],decls:17,vars:12,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,K,1,5,"app-button",4),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"ukt-sort",6,7)(10,"ukt-filter",8,9),t.qZA(),t.TgZ(12,"div",10),t._UZ(13,"app-table",11),t.qZA(),t.TgZ(14,"div",12),t._UZ(15,"ukt-pagination",null,13),t.qZA()()),2&e){const i=t.MAs(9),x=t.MAs(11),c=t.MAs(16);t.xp6(3),t.Oqu(t.lcZ(4,8,"list_of_stocks")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(10,$,r.permissions.create)),t.xp6(2),t.Q6J("SortConfig",r.sortConfig),t.xp6(2),t.Q6J("config",r.filtersConfig),t.xp6(3),t.Q6J("tableConfig",r.tableConfig)("pagination",c)("filter",x)("sort",i)}},dependencies:[R.a,V.Q,b.r,H.z,X.x,z.z,T.X$]}),o})()}];let et=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(tt),g.Bz]}),o})();var ot=n(1471),nt=n(2115),rt=n(4413),at=n(1890),it=n(1019),lt=n(8096),st=n(1383);let ct=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.ez,et,ot.X,nt.u,rt.e,at.f,it.i,lt.J,T.aw,st.m]}),o})()},9773:(Z,d,n)=>{n.d(d,{R:()=>u});var f=n(9360),g=n(8251),p=n(4829),m=n(2420);function u(h){return(0,f.e)((C,s)=>{(0,p.Xf)(h).subscribe((0,g.x)(s,()=>s.complete(),m.Z)),!s.closed&&C.subscribe(s)})}}}]);