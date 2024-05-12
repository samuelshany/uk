"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[1379],{68:(k,u,r)=>{r.d(u,{a:()=>d});const d={api:{create:"account/create",get:"account/with-group/all",getNotParent:"not-parents/accounts",getParent:"parents/accounts",getProfitLossParent:"profit-loss/parent-accounts",getById:"account/",update:"account/update/",delete:"account/",exportExample:"account/export/example",exportExampleSub:"account/export/example/sub",export:"account/export",exportPdf:"account/export/pdf",importAccount:"account/import",importAccountSub:"account/import/sub"},page:{}}},8687:(k,u,r)=>{r.r(u),r.d(u,{StocksModule:()=>ct});var d=r(6814),x=r(2954),c=r(5861),f=function(o){return o.create="Create Stock",o.update="Update Stock",o.delete="Delete Stock",o.view="View Stock",o}(f||{});const p_api_create="stock/create",p_api_get="stock",p_api_update="stock/update/",p_api_delete="stock/",p_api_getProducts="product",C=o=>{return{cols:[{field:"id",label:"code",class:""},{field:"product",label:"product",format:a=>a.product?.name??"",class:""},{field:"opening_stock",label:"opening_stock",class:""},{field:"quantity",label:"quantity",format:a=>a.quantity},{field:"warehouse",label:"warehouse",format:a=>a.warehouse?.name??"",class:""},{field:"purchasing_price",label:"purchase_price",class:""},{field:"selling_price",label:"selling_price",class:""},{label:"action",actions:[{id:f.delete,icon:"trash",class:"main-color",fun:(a=(0,c.Z)(function*(e){return yield o.stockService.delete(e)}),function(n){return a.apply(this,arguments)})},{id:f.update,icon:"pen-to-square",class:"main-color",fun:function(){var a=(0,c.Z)(function*(e){return yield o.stockService.openDialogToUpdate(e)});return function(n){return a.apply(this,arguments)}}()}]}],Request:p_api_get};var a};var A=r(5219),m=r(5946),g=r(6924),J=r(8718),t=r(9291),l=r(6223),U=r(8645),w=r(2572),Z=r(8763),y=r(5118),D=r(6983),j=r(1169),q=r(1771),I=r(8614),N=r(3838),_=r(6098),T=r(4779),v=r(3999);function Q(o,a){if(1&o&&(t.TgZ(0,"p",22),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.financial_period[0])}}function O(o,a){if(1&o&&(t.TgZ(0,"p",22),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.product_id[0])}}function P(o,a){if(1&o&&(t.TgZ(0,"p",23),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.opening_stock[0])}}function Y(o,a){if(1&o&&(t.TgZ(0,"p",23),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.quantity[0])}}function G(o,a){if(1&o&&(t.TgZ(0,"p",22),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.warehouse_id[0])}}function M(o,a){if(1&o&&(t.TgZ(0,"p",22),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.purchasing_price[0])}}function W(o,a){if(1&o&&(t.TgZ(0,"p",23),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.selling_price[0])}}let b=(()=>{class o{constructor(e,n,i,h,s,pt,ut){this.fb=e,this.toastr=n,this.config=i,this.dialogRef=h,this.stockService=s,this.productService=pt,this.warehouseService=ut,this.unsubscribe=new U.x,this.formGroup=this.initForm(),this.allWareHouse=[],this.allProducts=[],this.billingCities=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){(0,w.a)([this.productService.getProducts(),this.warehouseService.getWareHouse()]).subscribe(([e,n])=>{this.allProducts=e.data,this.allWareHouse=n.data})}initForm(){return this.fb.group({id:[Number],product_id:["",[l.kI.required]],opening_stock:["",[l.kI.required]],selling_price:["",[l.kI.required]],purchasing_price:["",[l.kI.required]],quantity:["",[l.kI.required]],warehouse_id:["",[l.kI.required]]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.stockService.update(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.errors=e.error.errors}}):this.stockService.create(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.reject(!0)},error:e=>{this.errors=e.error.errors}})}reject(e){this.dialogRef.close(e)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,product_id:this.config.data.data.product_id,opening_stock:this.config.data.data.opening_stock,selling_price:this.config.data.data.selling_price,purchasing_price:this.config.data.data.purchasing_price,quantity:this.config.data.data.quantity,warehouse_id:this.config.data.data.warehouse_id})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.qu),t.Y36(Z._W),t.Y36(y.S),t.Y36(y.E7),t.Y36(S),t.Y36(D.M),t.Y36(j.l))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-stock-form"]],decls:36,vars:41,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/inventory-icon.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","error",4,"ngIf"],[1,"row"],[1,"col-12"],["ngDefaultControl","","formControlName","product_id",3,"text","data","optionLabel","optionValue","placeholder"],["text","date","formControlName","opening_stock","ngDefaultControl","","placeholder",""],["class","messageError",4,"ngIf"],["text","quantity","formControlName","quantity","ngDefaultControl","","placeholder",""],["ngDefaultControl","","formControlName","warehouse_id",3,"text","data","optionLabel","optionValue","placeholder"],["ngDefaultControl","","formControlName","purchasing_price",3,"text","placeholder"],["text","selling_price","formControlName","selling_price","ngDefaultControl","","placeholder",""],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"error"],[1,"messageError"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return n.reject(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return n.accept()}),t.YNc(11,Q,2,1,"p",9),t.TgZ(12,"div",10)(13,"div",11),t._UZ(14,"app-dropdown",12),t.YNc(15,O,2,1,"p",9),t.qZA(),t.TgZ(16,"div",11),t._UZ(17,"app-date",13),t.YNc(18,P,2,1,"p",14),t.qZA(),t.TgZ(19,"div",11),t._UZ(20,"app-text",15),t.YNc(21,Y,2,1,"p",14),t.qZA(),t.TgZ(22,"div",11),t._UZ(23,"app-dropdown",16),t.YNc(24,G,2,1,"p",9),t.qZA(),t.TgZ(25,"div",11),t._UZ(26,"app-text",17),t.YNc(27,M,2,1,"p",9),t.qZA(),t.TgZ(28,"div",11),t._UZ(29,"app-text",18),t.YNc(30,W,2,1,"p",14),t.qZA()(),t.TgZ(31,"div",19)(32,"div",20)(33,"app-button",21),t.NdJ("click",function(){return n.reject(!1)}),t.qZA()(),t.TgZ(34,"div",20)(35,"app-button",21),t.NdJ("click",function(){return n.accept()}),t.qZA()()()()()),2&e){let i;t.xp6(8),t.Oqu(t.lcZ(9,39,null!==(i=n.config.header)&&void 0!==i?i:"")),t.xp6(2),t.Q6J("formGroup",n.formGroup),t.xp6(1),t.Q6J("ngIf",null==n.errors?null:n.errors.financial_period),t.xp6(3),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","product")("data",n.allProducts)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(1),t.Q6J("ngIf",null==n.errors?null:n.errors.product_id),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.xp6(1),t.Q6J("ngIf",null==n.errors?null:n.errors.opening_stock),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.xp6(1),t.Q6J("ngIf",null==n.errors?null:n.errors.quantity),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","warehouse")("data",n.allWareHouse)("optionLabel","name")("optionValue","id")("placeholder","warehouse"),t.xp6(1),t.Q6J("ngIf",null==n.errors?null:n.errors.warehouse_id),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","purchase_price")("placeholder",""),t.xp6(1),t.Q6J("ngIf",null==n.errors?null:n.errors.purchasing_price),t.xp6(2),t.Tol("d-flex flex-column justify-content-between mt-2"),t.xp6(1),t.Q6J("ngIf",null==n.errors?null:n.errors.selling_price),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==n.config.data?null:n.config.data.acceptLabel)}},dependencies:[d.O5,q.U,l.Fj,l.JJ,l.JL,l.sg,l.u,I.T,N.J,_.I,T.r,v.X$]}),o})();var E=r(1732),V=r(3562);let S=(()=>{class o{constructor(e,n,i){this.http=e,this.dynamicDialog=n,this.toastr=i}getProducts(e){return this.http.get(p_api_getProducts)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_stock",data:{acceptLabel:"add",rejectLabel:"cancel"},width:"500px",height:"auto"},b)}create(e){return this.http.post(p_api_create,e)}delete(e){var n=this;return(0,c.Z)(function*(){const i={showHeader:!0,header:"delete_stock",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e}},width:"300px",height:"auto"};if(yield n.dynamicDialog.confirm(i))try{const s=yield n.http.delete(p_api_delete+e.id).toPromise();return n.toastr.success(s.message),s}catch(s){throw n.toastr.error(s.error.message),s}return!1})()}openDialogToUpdate(e){var n=this;return(0,c.Z)(function*(){const i={showHeader:!1,header:"update_stock",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"500px",height:"auto"};return yield n.dynamicDialog.showDialogWithComponent(i,b)})()}update(e){return this.http.post(p_api_update+e.id,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(E.O),t.LFG(V.U),t.LFG(Z._W))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var H=r(2377),B=r(359),z=r(5077),R=r(3826),X=r(8275);function K(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"app-button",14),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.openDialogToCreate())}),t.qZA()}if(2&o){const e=t.oxw();t.Tol("btn-filter"),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}const $=function(o){return[o]},tt=[{path:"",component:(()=>{class o{constructor(e){this.stockService=e,this.tableConfig=C(this),this.reloadData=!1,this.permissions=f,this.icon=A.dv,this.filtersConfig=[{field:"search",label:"search",type:g.W.TEXT,placeholder:"search"},{field:"creator_id",label:"created_by",type:g.W.SELECT,options:{value:"id",label:"name"},request:J.x.api.get,placeholder:"select"},{field:"from",label:"from",type:g.W.DATE},{field:"to",label:"to",type:g.W.DATE}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"id",field:"id"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:m.q.asc,field:m.q.asc},{label:m.q.desc,field:m.q.desc}]}]}openDialogToCreate(){var e=this;return(0,c.Z)(function*(){(yield e.stockService.openDialogToCreate())&&(e.tableConfig=C(e))})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(S))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list"]],decls:17,vars:12,consts:[[1,"page-card"],[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,K,1,5,"app-button",4),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"ukt-sort",6,7)(10,"ukt-filter",8,9),t.qZA(),t.TgZ(12,"div",10),t._UZ(13,"app-table",11),t.qZA(),t.TgZ(14,"div",12),t._UZ(15,"ukt-pagination",null,13),t.qZA()()),2&e){const i=t.MAs(9),h=t.MAs(11),s=t.MAs(16);t.xp6(3),t.Oqu(t.lcZ(4,8,"list_of_stocks")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(10,$,n.permissions.create)),t.xp6(2),t.Q6J("SortConfig",n.sortConfig),t.xp6(2),t.Q6J("config",n.filtersConfig),t.xp6(3),t.Q6J("tableConfig",n.tableConfig)("pagination",s)("filter",h)("sort",i)}},dependencies:[H.a,B.Q,T.r,z.z,R.x,X.z,v.X$]}),o})()}];let et=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[x.Bz.forChild(tt),x.Bz]}),o})();var ot=r(1471),nt=r(2115),rt=r(4413),at=r(1890),it=r(1019),lt=r(8096),st=r(1383);let ct=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,et,ot.X,nt.u,rt.e,at.f,it.i,lt.J,v.aw,st.m]}),o})()}}]);