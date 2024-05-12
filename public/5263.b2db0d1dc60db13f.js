"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[5263],{5263:(b,v,o)=>{o.r(v),o.d(v,{PackingModule:()=>nt});var c=o(6814),d=o(2954),t=o(9291),g=o(5861),f=o(5219),h=function(n){return n.create="Create Pack",n.view="View Packs",n.edit="Edit Pack",n.delete="Delete Pack",n}(h||{});const u_api_create="pack/create",u_api_get="pack",u_api_update="pack/update/",u_api_delete="pack/",u_api_getProducts="product",m=n=>{return{cols:[{field:"id",label:"code",class:""},{field:"name",label:"name",class:""},{field:"quantity",label:"quantity",format:r=>0==r.quantity?"0":r.quantity},{field:"price",label:"price",format:r=>0==r.price?"0":r.price},{label:"action",actions:[{id:h.delete,icon:"trash",class:"main-color",fun:(r=(0,g.Z)(function*(e){return yield n.packingService.delete(e)}),function(a){return r.apply(this,arguments)})},{id:h.edit,icon:"pen-to-square",class:"main-color",fun:function(){var r=(0,g.Z)(function*(e){return yield n.packingService.openDialogToUpdate(e)});return function(a){return r.apply(this,arguments)}}()}]}],Request:u_api_get};var r};var x=o(6924),P=o(8718),s=o(5946),i=o(6223),l=o(8645),D=o(9773),T=o(8763),M=o(5118),E=o(8614),U=o(1904),J=o(5304),B=o(1771),k=o(4779),A=o(3999);function I(n,r){if(1&n&&(t.TgZ(0,"p",27),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}let O=(()=>{class n{constructor(e,a,p,Z,C){this.fb=e,this.toastr=a,this.config=p,this.dialogRef=Z,this.packingService=C,this.unsubscribe=new l.x,this.formGroup=this.initForm(),this.accounts=[],this.countries=[],this.states=[],this.cities=[],this.products=[],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){this.packingService.getProducts().pipe((0,D.R)(this.unsubscribe)).subscribe({next:e=>{this.products=e.data}})}initForm(){return this.fb.group({id:[Number],name:["",[i.kI.required]],description:[""],quantity:[[""],i.kI.required],material:[[""],i.kI.required],weight:[[""],i.kI.required],width:[[""],i.kI.required],length:[[""],i.kI.required],height:[[""],i.kI.required],price:[[""],i.kI.required],products:[[],[i.kI.required]]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.packingService.update(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors}}):this.packingService.create(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors}})}closePopup(e){this.dialogRef.close(e)}fillDataToUpdate(){this.formGroup.patchValue({id:this.config.data.data.id,name:this.config.data.data.name,description:this.config.data.data.description,quantity:this.config.data.data.quantity,material:this.config.data.data.material,weight:this.config.data.data.dimensions?.weight,width:this.config.data.data.dimensions?.width,length:this.config.data.data.dimensions?.length,height:this.config.data.data.dimensions?.height,price:this.config.data.data.price,products:this.config.data.data.products.map(e=>e.id)})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(T._W),t.Y36(M.S),t.Y36(M.E7),t.Y36(L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-new-packing"]],decls:42,vars:48,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/inventory-icon.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup","onSubmit"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"col-12"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],[1,"col-12","mt-3"],["text","description","formControlName","description","ngDefaultControl","","placeholder",""],["text","quantity","formControlName","quantity","ngDefaultControl","","placeholder","",3,"showButtons"],["text","material","formControlName","material","ngDefaultControl","","placeholder","",3,"type"],["text","weight","formControlName","weight","ngDefaultControl","","placeholder","",3,"showButtons"],["ngDefaultControl","","placeholder","","formControlName","width",1,"d-block",3,"showButtons","text"],["text","length","formControlName","length","ngDefaultControl","","placeholder","",3,"showButtons"],["text","height","formControlName","height","ngDefaultControl","","placeholder","",3,"showButtons"],["text","price","formControlName","price","ngDefaultControl","","placeholder","",3,"showButtons"],["for",""],["ngDefaultControl","","formControlName","products",3,"text","data","optionLabel","optionValue","placeholder"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return a.closePopup(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.NdJ("onSubmit",function(){return a.accept()}),t.YNc(11,I,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"div",11),t._UZ(15,"app-text",12),t.qZA(),t.TgZ(16,"div",13),t._UZ(17,"app-text",14),t.qZA(),t.TgZ(18,"div",13),t._UZ(19,"app-number-input",15),t.qZA(),t.TgZ(20,"div",13),t._UZ(21,"app-text",16),t.qZA(),t.TgZ(22,"div",13),t._UZ(23,"app-number-input",17),t.qZA(),t.TgZ(24,"div",13),t._UZ(25,"app-number-input",18),t.qZA(),t.TgZ(26,"div",13),t._UZ(27,"app-number-input",19),t.qZA(),t.TgZ(28,"div",13),t._UZ(29,"app-number-input",20),t.qZA(),t.TgZ(30,"div",13),t._UZ(31,"app-number-input",21),t.qZA(),t.TgZ(32,"div",13)(33,"label",22),t._uU(34),t.ALo(35,"translate"),t.qZA(),t._UZ(36,"app-multiselect",23),t.qZA()(),t.TgZ(37,"div",24)(38,"div",25)(39,"app-button",26),t.NdJ("click",function(){return a.closePopup(!1)}),t.qZA()(),t.TgZ(40,"div",25)(41,"app-button",26),t.NdJ("click",function(){return a.accept()}),t.qZA()()()()()),2&e){let p;t.xp6(8),t.Oqu(t.lcZ(9,42,null!==(p=a.config.header)&&void 0!==p?p:"")),t.xp6(2),t.Q6J("formGroup",a.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,44,a.errors)),t.xp6(4),t.Tol("d-flex flex-column justify-content-between mt-2"),t.Q6J("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("showButtons",!1),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("type","text"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("showButtons",!1),t.xp6(2),t.Q6J("showButtons",!1)("text","width"),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("showButtons",!1),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("showButtons",!1),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("showButtons",!1),t.xp6(3),t.Oqu(t.lcZ(35,46,"product")),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","")("data",a.products)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==a.config.data?null:a.config.data.acceptLabel)}},dependencies:[c.sg,E.T,U.D,J.z,B.U,i.Fj,i.JJ,i.JL,i.sg,i.u,k.r,c.Nd,A.X$]}),n})();var w=o(1732),N=o(3562);let L=(()=>{class n{constructor(e,a,p){this.http=e,this.dynamicDialog=a,this.toastr=p}getProducts(e){return this.http.get(u_api_getProducts)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_packing",data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},O)}create(e){return this.http.post(u_api_create,e)}delete(e){var a=this;return(0,g.Z)(function*(){const p={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e}},width:"300px",height:"164px"};if(yield a.dynamicDialog.confirm(p))try{const C=yield a.http.delete(u_api_delete+e.id).toPromise();return a.toastr.success(C.message),C}catch(C){throw a.toastr.error(C.error.message),C}return!1})()}openDialogToUpdate(e){var a=this;return(0,g.Z)(function*(){const p={showHeader:!1,header:"update_packing",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"480px",height:"auto"};return yield a.dynamicDialog.showDialogWithComponent(p,O)})()}update(e){return this.http.post(u_api_update+e.id,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w.O),t.LFG(N.U),t.LFG(T._W))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var S=o(2377),F=o(359),j=o(5077),G=o(3826),q=o(8275);function Q(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"app-button",13),t.NdJ("click",function(){t.CHM(e);const p=t.oxw();return t.KtG(p.openDialogToCreate())}),t.qZA()}if(2&n){const e=t.oxw();t.Tol("btn-filter"),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}const W=function(n){return[n]};let R=(()=>{class n{constructor(e){this.packingService=e,this.tableConfig=m(this),this.filtersConfig=[{field:"price",label:"price",type:x.W.TEXT,placeholder:"price"},{field:"creator_id",label:"created_by",type:x.W.SELECT,options:{value:"id",label:"name"},request:P.x.api.get,placeholder:"select"},{field:"quantity_from",label:"quantity_from",type:x.W.TEXT,placeholder:""},{field:"quantity_to",label:"quantity_to",type:x.W.TEXT,placeholder:""}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"quantity",field:"quantity"},{label:"price",field:"price"},{label:"creator",field:"creator_id"},{label:"id",field:"id"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:s.q.asc,field:s.q.asc},{label:s.q.desc,field:s.q.desc}]}],this.reloadData=!1,this.permissions=h,this.icon=f.dv}openDialogToCreate(){var e=this;return(0,g.Z)(function*(){(yield e.packingService.openDialogToCreate())&&(e.tableConfig=m(e))})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-packing"]],decls:16,vars:12,consts:[[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[3,"text","icon","iconPos","click"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,Q,1,5,"app-button",3),t.qZA()(),t.TgZ(6,"div",4),t._UZ(7,"ukt-sort",5,6)(9,"ukt-filter",7,8),t.qZA(),t.TgZ(11,"div",9),t._UZ(12,"app-table",10),t.qZA(),t.TgZ(13,"div",11),t._UZ(14,"ukt-pagination",null,12),t.qZA()),2&e){const p=t.MAs(8),Z=t.MAs(10),C=t.MAs(15);t.xp6(2),t.Oqu(t.lcZ(3,8,"list_of_packing")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(10,W,a.permissions.create)),t.xp6(2),t.Q6J("SortConfig",a.sortConfig),t.xp6(2),t.Q6J("config",a.filtersConfig),t.xp6(3),t.Q6J("tableConfig",a.tableConfig)("pagination",C)("filter",Z)("sort",p)}},dependencies:[S.a,F.Q,k.r,j.z,G.x,q.z,A.X$]}),n})();const K=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-packing"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-packing"),t.qZA())},dependencies:[R]}),n})()}];let V=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(K),d.Bz]}),n})();var Y=o(1471),X=o(9624),z=o(2115),H=o(4413),$=o(1890),tt=o(1019),et=o(8096),ot=o(1383);let nt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,V,Y.X,X.U,z.u,H.e,$.f,tt.i,et.J,A.aw,ot.m]}),n})()},1771:(b,v,o)=>{o.d(v,{U:()=>g});var c=o(9291),d=o(6223);const t=["*"];let g=(()=>{class f{constructor(){this.onSubmit=new c.vpe}ngOnChanges(u){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const u=this.getFormData();this.onSubmit.emit(u)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return f.\u0275fac=function(u){return new(u||f)},f.\u0275cmp=c.Xpm({type:f,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[c.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(u,m){1&u&&(c.F$t(),c.TgZ(0,"form",0),c.NdJ("ngSubmit",function(){return m.submit()}),c.Hsn(1),c.qZA()),2&u&&c.Q6J("formGroup",m.formGroup)},dependencies:[d._Y,d.JL,d.sg]}),f})()},5304:(b,v,o)=>{o.d(v,{z:()=>_});var c=o(67),d=o(6223),t=o(9291),g=o(1732),f=o(6814),h=o(4055),u=o(3999);function m(s,y){1&s&&t._UZ(0,"i",6)}function x(s,y){if(1&s&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"translate"),t.TgZ(3,"span",4),t.YNc(4,m,1,0,"i",5),t.qZA()()),2&s){const i=t.oxw();t.xp6(1),t.hij("",t.lcZ(2,2,i.text)," "),t.xp6(3),t.Q6J("ngIf",i.control&&(null==i.control.errors?null:i.control.errors.required))}}function P(s,y){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&s){const i=t.oxw();t.Tol("text-danger"),t.xp6(1),t.Oqu(t.lcZ(2,3,i.object.keys(i.control.errors)[0]))}}let _=(()=>{class s extends c.t{constructor(i,l){super(),this.formGroupDirective=i,this.http=l,this.readOnly=!1,this.placeholder="",this.filterBy="",this.class="d-flex justify-content-between align-items-center",this.filter=!0,this.filterMatchMode="startsWith",this.object=Object}ngOnInit(){this.data||this.http.get(this.request).subscribe({next:i=>{if(!(i.meta&&i.meta.total>10))return this.data=i.data;this.http.getWithParam(this.request,{limit:i.meta.total}).subscribe({next:l=>this.data=l.data})},error:i=>{},complete:()=>{}})}writeValue(i){this.value=i}onValueChange(i){this.onChange(i.value),this.onTouched()}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(d.sg,8),t.Y36(g.O))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-multiselect"]],inputs:{value:"value",text:"text",data:"data",optionLabel:"optionLabel",optionValue:"optionValue",editable:"editable",readOnly:"readOnly",placeholder:"placeholder",filterBy:"filterBy",request:"request",class:"class",filter:"filter",filterMatchMode:"filterMatchMode"},features:[t._Bn([{provide:d.JU,useExisting:s,multi:!0},{provide:d.Cf,useExisting:s,multi:!0}]),t.qOj],decls:5,vars:15,consts:[[3,"ngClass"],[4,"ngIf"],["appendTo","body",3,"options","ngModel","placeholder","optionLabel","optionValue","filterMatchMode","display","filter","filterBy","disabled","ngModelChange","onChange"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(i,l){1&i&&(t.TgZ(0,"div",0),t.YNc(1,x,5,4,"label",1),t.TgZ(2,"p-multiSelect",2),t.NdJ("ngModelChange",function(T){return l.value=T})("onChange",function(T){return l.onValueChange(T)}),t.ALo(3,"translate"),t.qZA(),t.YNc(4,P,3,5,"span",3),t.qZA()),2&i&&(t.Q6J("ngClass",l.class),t.xp6(1),t.Q6J("ngIf",l.text),t.xp6(1),t.Q6J("options",l.data)("ngModel",l.value)("placeholder",t.lcZ(3,13,l.placeholder))("optionLabel",l.optionLabel)("optionValue",l.optionValue)("filterMatchMode",l.filterMatchMode)("display","chip")("filter",l.filter)("filterBy",l.optionLabel)("disabled",l.readOnly),t.xp6(2),t.Q6J("ngIf",l.control&&l.control.errors&&(l.control.touched||l.formGroupDirective.submitted)))},dependencies:[f.mk,f.O5,d.JJ,d.On,h.NU,u.X$]}),s})()},8718:(b,v,o)=>{o.d(v,{x:()=>c});const c={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}},9773:(b,v,o)=>{o.d(v,{R:()=>f});var c=o(9360),d=o(8251),t=o(4829),g=o(2420);function f(h){return(0,c.e)((u,m)=>{(0,t.Xf)(h).subscribe((0,d.x)(m,()=>m.complete(),g.Z)),!m.closed&&u.subscribe(m)})}}}]);