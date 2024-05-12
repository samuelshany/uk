"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[5657],{68:(P,d,n)=>{n.d(d,{a:()=>c});const c={api:{create:"account/create",get:"account/with-group/all",getNotParent:"not-parents/accounts",getParent:"parents/accounts",getProfitLossParent:"profit-loss/parent-accounts",getExpensesParent:"account/parent/expenses",getAssetsParent:"account/parent/assets",getById:"account/",update:"account/update/",delete:"account/",exportExample:"account/export/example",exportExampleSub:"account/export/example/sub",export:"account/export/parent",exportPdf:"account/export/pdf",importAccount:"account/import",importAccountSub:"account/import/sub"},page:{}}},5657:(P,d,n)=>{n.r(d),n.d(d,{PaymentModule:()=>ot});var c=n(6814),f=n(8209),t=n(9291),m=n(5861),u=n(5219),p=n(6785),s=n(6223),g=n(8645),Z=n(68),b=n(8763),A=n(5118),J=n(8614),F=n(3838),N=n(5304),G=n(1771),D=n(4779),C=n(3999);function U(o,i){if(1&o&&(t.TgZ(0,"p",19),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}let S=(()=>{class o{constructor(e,a,r,v,l){this.fb=e,this.toastr=a,this.config=r,this.dialogRef=v,this.paymentService=l,this.accountsConfig=Z.a,this.types=[{name:"cash",id:"cash"},{name:"credit",id:"credit"}],this.unsubscribe=new g.x,this.formGroup=this.initForm(),this.accounts=[],this.countries=[],this.states=[],this.cities=[],this.users=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){}initForm(){return this.fb.group({id:[Number],name:["",[s.kI.required]],type:["",[s.kI.required]],accounts:["",[s.kI.required]]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.paymentService.update(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors}}):this.paymentService.create(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors}})}closePopup(e){this.dialogRef.close(e)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,name:this.config.data.data.name,type:this.config.data.data?.type,accounts:this.config.data.data.accounts.map(e=>e.id)})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.qu),t.Y36(b._W),t.Y36(A.S),t.Y36(A.E7),t.Y36(T))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-new-payment"]],decls:26,vars:27,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/inventory-icon.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],[1,"col-12","my-3"],["placeholder","select","optionLabel","name","optionValue","id","formControlName","type",3,"text","data"],["placeholder","select","filterBy","name_code","optionLabel","name_code","optionValue","id","formControlName","accounts",3,"filter","text","request"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return a.closePopup(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"titlecase"),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"app-form",8),t.NdJ("onSubmit",function(){return a.accept()}),t.YNc(12,U,2,1,"p",9),t.ALo(13,"keyvalue"),t.TgZ(14,"div",10)(15,"div",11),t._UZ(16,"app-text",12),t.qZA(),t.TgZ(17,"div",13),t._UZ(18,"app-dropdown",14),t.qZA(),t.TgZ(19,"div",11),t._UZ(20,"app-multiselect",15),t.qZA()(),t.TgZ(21,"div",16)(22,"div",17)(23,"app-button",18),t.NdJ("click",function(){return a.closePopup(!1)}),t.qZA()(),t.TgZ(24,"div",17)(25,"app-button",18),t.NdJ("click",function(){return a.accept()}),t.qZA()()()()()),2&e){let r;t.xp6(8),t.Oqu(t.lcZ(9,21,t.lcZ(10,23,null!==(r=a.config.header)&&void 0!==r?r:""))),t.xp6(3),t.Q6J("formGroup",a.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(13,25,a.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol(""),t.Q6J("text","type")("data",a.types),t.xp6(2),t.Tol(""),t.Q6J("filter",!0)("text","account_id")("request",a.accountsConfig.api.getNotParent),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==a.config.data?null:a.config.data.acceptLabel)}},dependencies:[c.sg,J.T,F.J,N.z,G.U,s.Fj,s.JJ,s.JL,s.sg,s.u,D.r,c.rS,c.Nd,C.X$]}),o})();var O=n(1732),E=n(3562);let T=(()=>{class o{constructor(e,a,r){this.http=e,this.dynamicDialog=a,this.toastr=r}getPayment(e){return this.http.get(p.D.api.get)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_payment",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},S)}create(e){return this.http.post(p.D.api.create,e)}delete(e){var a=this;return(0,m.Z)(function*(){const r={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e}},width:"300px",height:"164px"};return!!(yield a.dynamicDialog.confirm(r))&&a.http.delete(p.D.api.delete+e.id).toPromise().then(l=>(a.toastr.success(l.message),l)).catch(l=>(a.toastr.error(l.error.message),l))})()}openDialogToUpdate(e){var a=this;return(0,m.Z)(function*(){const r={showHeader:!1,header:"update_warehouse",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"480px",height:"auto"};return yield a.dynamicDialog.showDialogWithComponent(r,S)})()}update(e){return this.http.post(p.D.api.update+e.id,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(O.O),t.LFG(E.U),t.LFG(b._W))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var h=function(o){return o.create="Create PaymentType",o.view="View PaymentType",o.edit="Edit PaymentType",o.delete="Delete PaymentType",o}(h||{});const L=o=>{return{cols:[{field:"id",label:"code",class:""},{field:"name",label:"name",class:""},{field:"type",label:"type",format:i=>i.type?i.type:"cash",class:""},{label:"action",actions:[{id:h.delete,icon:"trash",class:"main-color",fun:(i=(0,m.Z)(function*(e){return yield o.paymentService.delete(e)}),function(a){return i.apply(this,arguments)})},{id:h.edit,icon:"pen-to-square",class:"main-color",fun:function(){var i=(0,m.Z)(function*(e){return yield o.paymentService.openDialogToUpdate(e)});return function(a){return i.apply(this,arguments)}}()}]}],Request:p.D.api.get};var i};var x=n(6924),y=n(5946),j=n(2377),I=n(359),w=n(5077),B=n(3826),Y=n(8275);function W(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"app-button",13),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.openDialogToCreate())}),t.qZA()}if(2&o){const e=t.oxw();t.Tol("btn-filter"),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}const R=function(o){return[o]};let X=(()=>{class o{constructor(e){this.paymentService=e,this.tableConfig=L(this),this.filtersConfig=[{field:"search",label:"search",type:x.W.TEXT,placeholder:"search"},{label:"from",field:"from",type:x.W.DATE,placeholder:"from"},{label:"to",field:"to",type:x.W.DATE,placeholder:"to"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"Sort By",data:[{label:"Name",field:"name"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"Sort Type",data:[{label:y.q.asc,field:y.q.asc},{label:y.q.desc,field:y.q.desc}]}],this.permissions=h,this.icon=u.dv}openDialogToCreate(){var e=this;return(0,m.Z)(function*(){(yield e.paymentService.openDialogToCreate())&&(e.tableConfig=L(e))})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-payment"]],decls:16,vars:12,consts:[[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,W,1,5,"app-button",3),t.qZA()(),t.TgZ(6,"div",4),t._UZ(7,"ukt-sort",5,6)(9,"ukt-filter",7,8),t.qZA(),t.TgZ(11,"div",9),t._UZ(12,"app-table",10),t.qZA(),t.TgZ(13,"div",11),t._UZ(14,"ukt-pagination",null,12),t.qZA()),2&e){const r=t.MAs(8),v=t.MAs(10),l=t.MAs(15);t.xp6(2),t.Oqu(t.lcZ(3,8,"list_of_payment")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(10,R,a.permissions.create)),t.xp6(2),t.Q6J("SortConfig",a.sortConfig),t.xp6(2),t.Q6J("config",a.filtersConfig),t.xp6(3),t.Q6J("tableConfig",a.tableConfig)("pagination",l)("filter",v)("sort",r)}},dependencies:[j.a,I.Q,D.r,w.z,B.x,Y.z,C.X$]}),o})();const z=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-payment"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-payment"),t.qZA())},dependencies:[X]}),o})()}];let V=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.Bz.forChild(z),f.Bz]}),o})();var H=n(9624),K=n(2115),$=n(4413),k=n(1890),q=n(1019),_=n(8096),tt=n(1471),et=n(1383);let ot=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,V,tt.X,H.U,K.u,$.e,k.f,q.i,_.J,C.aw,et.m]}),o})()},1771:(P,d,n)=>{n.d(d,{U:()=>m});var c=n(9291),f=n(6223);const t=["*"];let m=(()=>{class u{constructor(){this.onSubmit=new c.vpe}ngOnChanges(s){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const s=this.getFormData();this.onSubmit.emit(s)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return u.\u0275fac=function(s){return new(s||u)},u.\u0275cmp=c.Xpm({type:u,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[c.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(s,g){1&s&&(c.F$t(),c.TgZ(0,"form",0),c.NdJ("ngSubmit",function(){return g.submit()}),c.Hsn(1),c.qZA()),2&s&&c.Q6J("formGroup",g.formGroup)},dependencies:[f._Y,f.JL,f.sg]}),u})()}}]);