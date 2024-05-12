"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[5657],{68:(L,y,o)=>{o.d(y,{a:()=>c});const c={api:{create:"account/create",get:"account/with-group/all",getNotParent:"not-parents/accounts",getParent:"parents/accounts",getProfitLossParent:"profit-loss/parent-accounts",getById:"account/",update:"account/update/",delete:"account/",exportExample:"account/export/example",exportExampleSub:"account/export/example/sub",export:"account/export",exportPdf:"account/export/pdf",importAccount:"account/import",importAccountSub:"account/import/sub"},page:{}}},5657:(L,y,o)=>{o.r(y),o.d(y,{PaymentModule:()=>et});var c=o(6814),m=o(2954),t=o(9291),h=o(5861),d=o(5219),f=o(6785),p=o(6223),C=o(8645),b=o(68),Z=o(8763),x=o(5118),u=o(8614),v=o(5304),i=o(1771),r=o(4779),T=o(3999);function P(n,s){if(1&n&&(t.TgZ(0,"p",17),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}let E=(()=>{class n{constructor(e,a,l,D,g){this.fb=e,this.toastr=a,this.config=l,this.dialogRef=D,this.paymentService=g,this.accountsConfig=b.a,this.unsubscribe=new C.x,this.formGroup=this.initForm(),this.accounts=[],this.countries=[],this.states=[],this.cities=[],this.users=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){}initForm(){return this.fb.group({id:[Number],name:["",[p.kI.required]],accounts:["",[p.kI.required]]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.paymentService.update(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors}}):this.paymentService.create(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors}})}closePopup(e){this.dialogRef.close(e)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,name:this.config.data.data.name,accounts:this.config.data.data.accounts.map(e=>e.id)})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.qu),t.Y36(Z._W),t.Y36(x.S),t.Y36(x.E7),t.Y36(_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-new-payment"]],decls:24,vars:23,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/inventory-icon.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["placeholder","select","filterBy","name_code","optionLabel","name_code","optionValue","id","formControlName","accounts",3,"filter","text","request"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return a.closePopup(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"titlecase"),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"app-form",8),t.NdJ("onSubmit",function(){return a.accept()}),t.YNc(12,P,2,1,"p",9),t.ALo(13,"keyvalue"),t.TgZ(14,"div",10)(15,"div",11),t._UZ(16,"app-text",12),t.qZA(),t.TgZ(17,"div",11),t._UZ(18,"app-multiselect",13),t.qZA()(),t.TgZ(19,"div",14)(20,"div",15)(21,"app-button",16),t.NdJ("click",function(){return a.closePopup(!1)}),t.qZA()(),t.TgZ(22,"div",15)(23,"app-button",16),t.NdJ("click",function(){return a.accept()}),t.qZA()()()()()),2&e){let l;t.xp6(8),t.Oqu(t.lcZ(9,17,t.lcZ(10,19,null!==(l=a.config.header)&&void 0!==l?l:""))),t.xp6(3),t.Q6J("formGroup",a.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(13,21,a.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol(""),t.Q6J("filter",!0)("text","account_id")("request",a.accountsConfig.api.getNotParent),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==a.config.data?null:a.config.data.acceptLabel)}},dependencies:[c.sg,u.T,v.z,i.U,p.Fj,p.JJ,p.JL,p.sg,p.u,r.r,c.rS,c.Nd,T.X$]}),n})();var J=o(1732),U=o(3562);let _=(()=>{class n{constructor(e,a,l){this.http=e,this.dynamicDialog=a,this.toastr=l}getPayment(e){return this.http.get(f.D.api.get)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_payment",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},E)}create(e){return this.http.post(f.D.api.create,e)}delete(e){var a=this;return(0,h.Z)(function*(){const l={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e}},width:"300px",height:"164px"};return!!(yield a.dynamicDialog.confirm(l))&&a.http.delete(f.D.api.delete+e.id).toPromise().then(g=>(a.toastr.success(g.message),g)).catch(g=>(a.toastr.error(g.error.message),g))})()}openDialogToUpdate(e){var a=this;return(0,h.Z)(function*(){const l={showHeader:!1,header:"update_warehouse",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"480px",height:"auto"};return yield a.dynamicDialog.showDialogWithComponent(l,E)})()}update(e){return this.http.post(f.D.api.update+e.id,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(J.O),t.LFG(U.U),t.LFG(Z._W))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var M=function(n){return n.create="Create PaymentType",n.view="View PaymentType",n.edit="Edit PaymentType",n.delete="Delete PaymentType",n}(M||{});const S=n=>{return{cols:[{field:"id",label:"code",class:""},{field:"name",label:"name",class:""},{label:"action",actions:[{id:M.delete,icon:"trash",class:"main-color",fun:(s=(0,h.Z)(function*(e){return yield n.paymentService.delete(e)}),function(a){return s.apply(this,arguments)})},{id:M.edit,icon:"pen-to-square",class:"main-color",fun:function(){var s=(0,h.Z)(function*(e){return yield n.paymentService.openDialogToUpdate(e)});return function(a){return s.apply(this,arguments)}}()}]}],Request:f.D.api.get};var s};var O=o(6924),A=o(5946),G=o(2377),I=o(359),B=o(5077),j=o(3826),Q=o(8275);function W(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"app-button",13),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.openDialogToCreate())}),t.qZA()}if(2&n){const e=t.oxw();t.Tol("btn-filter"),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}const R=function(n){return[n]};let Y=(()=>{class n{constructor(e){this.paymentService=e,this.tableConfig=S(this),this.filtersConfig=[{field:"search",label:"search",type:O.W.TEXT,placeholder:"search"},{label:"from",field:"from",type:O.W.DATE,placeholder:"from"},{label:"to",field:"to",type:O.W.DATE,placeholder:"to"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"Sort By",data:[{label:"Name",field:"name"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"Sort Type",data:[{label:A.q.asc,field:A.q.asc},{label:A.q.desc,field:A.q.desc}]}],this.permissions=M,this.icon=d.dv}openDialogToCreate(){var e=this;return(0,h.Z)(function*(){(yield e.paymentService.openDialogToCreate())&&(e.tableConfig=S(e))})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-payment"]],decls:16,vars:12,consts:[[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,W,1,5,"app-button",3),t.qZA()(),t.TgZ(6,"div",4),t._UZ(7,"ukt-sort",5,6)(9,"ukt-filter",7,8),t.qZA(),t.TgZ(11,"div",9),t._UZ(12,"app-table",10),t.qZA(),t.TgZ(13,"div",11),t._UZ(14,"ukt-pagination",null,12),t.qZA()),2&e){const l=t.MAs(8),D=t.MAs(10),g=t.MAs(15);t.xp6(2),t.Oqu(t.lcZ(3,8,"list_of_payment")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(10,R,a.permissions.create)),t.xp6(2),t.Q6J("SortConfig",a.sortConfig),t.xp6(2),t.Q6J("config",a.filtersConfig),t.xp6(3),t.Q6J("tableConfig",a.tableConfig)("pagination",g)("filter",D)("sort",l)}},dependencies:[G.a,I.Q,r.r,B.z,j.x,Q.z,T.X$]}),n})();const V=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-payment"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-payment"),t.qZA())},dependencies:[Y]}),n})()}];let K=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(V),m.Bz]}),n})();var X=o(9624),w=o(2115),z=o(4413),H=o(1890),$=o(1019),q=o(8096),k=o(1471),tt=o(1383);let et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,K,k.X,X.U,w.u,z.e,H.f,$.i,q.J,T.aw,tt.m]}),n})()},1771:(L,y,o)=>{o.d(y,{U:()=>h});var c=o(9291),m=o(6223);const t=["*"];let h=(()=>{class d{constructor(){this.onSubmit=new c.vpe}ngOnChanges(p){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const p=this.getFormData();this.onSubmit.emit(p)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return d.\u0275fac=function(p){return new(p||d)},d.\u0275cmp=c.Xpm({type:d,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[c.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(p,C){1&p&&(c.F$t(),c.TgZ(0,"form",0),c.NdJ("ngSubmit",function(){return C.submit()}),c.Hsn(1),c.qZA()),2&p&&c.Q6J("formGroup",C.formGroup)},dependencies:[m._Y,m.JL,m.sg]}),d})()},5304:(L,y,o)=>{o.d(y,{z:()=>x});var c=o(67),m=o(6223),t=o(9291),h=o(1732),d=o(6814),f=o(4055),p=o(3999);function C(u,v){1&u&&t._UZ(0,"i",6)}function b(u,v){if(1&u&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"translate"),t.TgZ(3,"span",4),t.YNc(4,C,1,0,"i",5),t.qZA()()),2&u){const i=t.oxw();t.xp6(1),t.hij("",t.lcZ(2,2,i.text)," "),t.xp6(3),t.Q6J("ngIf",i.control&&(null==i.control.errors?null:i.control.errors.required))}}function Z(u,v){if(1&u&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&u){const i=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Oqu(t.lcZ(2,3,i.object.keys(i.control.errors)[0]))}}let x=(()=>{class u extends c.t{constructor(i,r){super(),this.formGroupDirective=i,this.http=r,this.readOnly=!1,this.placeholder="",this.filterBy="",this.class="d-flex justify-content-between align-items-center",this.filter=!0,this.filterMatchMode="startsWith",this.object=Object}ngOnInit(){this.data||this.http.get(this.request).subscribe({next:i=>{if(!(i.meta&&i.meta.total>10))return this.data=i.data;this.http.getWithParam(this.request,{limit:i.meta.total}).subscribe({next:r=>this.data=r.data})},error:i=>{},complete:()=>{}})}writeValue(i){this.value=i}onValueChange(i){this.onChange(i.value),this.onTouched()}}return u.\u0275fac=function(i){return new(i||u)(t.Y36(m.sg,8),t.Y36(h.O))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-multiselect"]],inputs:{value:"value",text:"text",data:"data",optionLabel:"optionLabel",optionValue:"optionValue",editable:"editable",readOnly:"readOnly",placeholder:"placeholder",filterBy:"filterBy",request:"request",class:"class",filter:"filter",filterMatchMode:"filterMatchMode"},features:[t._Bn([{provide:m.JU,useExisting:u,multi:!0},{provide:m.Cf,useExisting:u,multi:!0}]),t.qOj],decls:5,vars:15,consts:[[3,"ngClass"],[4,"ngIf"],["appendTo","body",3,"options","ngModel","placeholder","optionLabel","optionValue","filterMatchMode","display","filter","filterBy","disabled","ngModelChange","onChange"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0),t.YNc(1,b,5,4,"label",1),t.TgZ(2,"p-multiSelect",2),t.NdJ("ngModelChange",function(P){return r.value=P})("onChange",function(P){return r.onValueChange(P)}),t.ALo(3,"translate"),t.qZA(),t.YNc(4,Z,3,5,"span",3),t.qZA()),2&i&&(t.Q6J("ngClass",r.class),t.xp6(1),t.Q6J("ngIf",r.text),t.xp6(1),t.Q6J("options",r.data)("ngModel",r.value)("placeholder",t.lcZ(3,13,r.placeholder))("optionLabel",r.optionLabel)("optionValue",r.optionValue)("filterMatchMode",r.filterMatchMode)("display","chip")("filter",r.filter)("filterBy",r.optionLabel)("disabled",r.readOnly),t.xp6(2),t.Q6J("ngIf",r.control&&r.control.errors&&(r.control.touched||r.formGroupDirective.submitted)))},dependencies:[d.mk,d.O5,m.JJ,m.On,f.NU,p.X$]}),u})()}}]);