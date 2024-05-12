"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[7625],{7553:(v,m,o)=>{o.d(m,{F:()=>u});const u={api:{create:"tax/create",get:"tax",getModules:"module",getById:"tax/",update:"tax/update/",delete:"tax/",exportCvs:"tax/export/cvs",exportPdf:"tax/export/pdf",import:"tax/import"},page:{list:"",view:"view/:id",history:"history"}}},9768:(v,m,o)=>{o.d(m,{f:()=>u});var u=function(s){return s.list="View Taxes",s.create="Create Tax",s.update="Edit Tax",s.delete="Delete Tax",s}(u||{})},7625:(v,m,o)=>{o.d(m,{N:()=>A});var u=o(5861),s=o(7553),n=o(5619),P=o(6306),C=o(8504),d=o(6223),T=o(9768),t=o(9291),_=o(8763),x=o(5118),O=o(6814),l=o(1771),h=o(8614),i=o(5304),r=o(4779),b=o(3999);function M(c,f){if(1&c&&(t.TgZ(0,"p",19),t._uU(1),t.qZA()),2&c){const e=f.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}let Z=(()=>{class c{constructor(e,a,p,y,g){this.texesService=e,this.fb=a,this.toastr=p,this.config=y,this.dialogRef=g,this.formGroup=this.initForm(),this.permissions=T.f,this.selectedModules=[],this.isSubmitted=!1,this.isLoading=!1,this.action="",this.config.data?.data&&this.fillDataToUpdate(this.config.data?.data)}ngOnInit(){this.texesService.getAction().subscribe(e=>{this.action=e}),this.texesService.getModules().subscribe(e=>{this.modules=e},e=>{})}initForm(){return this.fb.group({id:[Number],name:["",[d.kI.required]],modules:["",d.kI.required],percentage:this.fb.control("",[d.kI.required,d.kI.pattern("^[0-9.]+$")])})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():this.config.data.data?this.texesService.update(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.toastr.error(e.error.message),this.errors=e.error.errors}}):this.texesService.create(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors,this.toastr.error(e.error.message)}})}closePopup(e){this.dialogRef.close(e)}fillDataToUpdate(e){this.formGroup.patchValue({id:e.id,name:e.name,percentage:e.percentage,modules:e.modules.map(a=>a.id)})}}return c.\u0275fac=function(e){return new(e||c)(t.Y36(A),t.Y36(d.qu),t.Y36(_._W),t.Y36(x.S),t.Y36(x.E7))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-add-texes"]],decls:25,vars:28,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/texes/texes.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"mb-5","col-12"],["formControlName","name",3,"text","placeholder"],[1,"col-12","mb-5"],["ngDefaultControl","","formControlName","modules",3,"text","data","optionLabel","optionValue","placeholder"],["formControlName","percentage",3,"text","placeholder"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return a.closePopup(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.YNc(11,M,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"div",11),t._UZ(15,"app-text",12),t.qZA(),t.TgZ(16,"div",13),t._UZ(17,"app-multiselect",14),t.qZA(),t.TgZ(18,"div",11),t._UZ(19,"app-text",15),t.qZA()(),t.TgZ(20,"div",16)(21,"div",17)(22,"app-button",18),t.NdJ("click",function(){return a.closePopup(!1)}),t.qZA()(),t.TgZ(23,"div",17)(24,"app-button",18),t.NdJ("click",function(){return a.accept()}),t.qZA()()()()()),2&e){let p;t.xp6(8),t.Oqu(t.lcZ(9,24,null!==(p=a.config.header)&&void 0!==p?p:"")),t.xp6(2),t.Q6J("formGroup",a.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,26,a.errors)),t.xp6(4),t.Tol(""),t.Q6J("text","name")("placeholder",""),t.xp6(2),t.Tol(""),t.Q6J("text","modules")("data",a.modules)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(2),t.Tol(""),t.Q6J("text","percentage")("placeholder",""),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==a.config.data?null:a.config.data.acceptLabel)}},dependencies:[O.sg,l.U,d.Fj,d.JJ,d.JL,d.sg,d.u,h.T,i.z,r.r,O.Nd,b.X$],styles:["[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:600;font-size:1.8rem;line-height:24px;color:var(--mainColor)}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .title-model[_ngcontent-%COMP%]{padding:1rem!important;font-style:normal;font-weight:600;font-size:1.8rem;line-height:28px;color:var(--mainColor)}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:500;color:#344054}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:1.6rem!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{font-size:1.6rem!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.6rem!important;background-color:transparent!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.6rem!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1.5rem!important;padding:7px!important;border:none!important;outline:none!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .auth-name[_ngcontent-%COMP%]{background-color:#c6dfe2!important;border-radius:24px!important;padding:6px 15px;margin:.5rem 1rem!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     app-select-option select{background-color:var(--white)!important;border:1px solid #ced4da!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     app-input input{background-color:var(--white)!important;border:1px solid #ced4da!important}"]}),c})();var L=o(1732),D=o(3562);let A=(()=>{class c{constructor(e,a,p){this.http=e,this.dynamicDialog=a,this.toastr=p,this.texes=new n.X({}),this.modules=new n.X([]),this.action=new n.X("create")}get(e){return this.http.get(s.F.api.get)}getModules(){return this.http.get(s.F.api.getModules)}addTex(e){return this.http.post("tax/create",e).pipe((0,P.K)(a=>(0,C._)(()=>a||"some error from server ")))}updateTex(e){return this.http.post(s.F.api.update+e.id,e)}getAction(){return this.action}setAction(e){this.action.next(e)}getTaxes(){return this.texes}setTexes(e){this.texes.next(e)}setModules(e){this.modules.next(e)}getAllTexes(){return this.http.get("tax?limit=99999")}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_tax",data:{acceptLabel:"add",rejectLabel:"cancel"},width:"500px",height:"auto"},Z)}create(e){return this.http.post(s.F.api.create,e)}delete(e){var a=this;return(0,u.Z)(function*(){const p={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e}},width:"300px",height:"164px"};return!!(yield a.dynamicDialog.confirm(p))&&a.http.delete(s.F.api.delete+e.id).toPromise().then(g=>(a.toastr.success(g.message),g)).catch(g=>(a.toastr.error(g.error.message),g))})()}openDialogToUpdate(e){var a=this;return(0,u.Z)(function*(){const p={showHeader:!1,header:"update_tax",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"480px",height:"auto"};return yield a.dynamicDialog.showDialogWithComponent(p,Z)})()}update(e){return this.http.post(s.F.api.update+e.id,e)}}return c.\u0275fac=function(e){return new(e||c)(t.LFG(L.O),t.LFG(D.U),t.LFG(_._W))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},5304:(v,m,o)=>{o.d(m,{z:()=>O});var u=o(67),s=o(6223),n=o(9291),P=o(1732),C=o(6814),d=o(4055),T=o(3999);function t(l,h){1&l&&n._UZ(0,"i",6)}function _(l,h){if(1&l&&(n.TgZ(0,"label"),n._uU(1),n.ALo(2,"titlecase"),n.ALo(3,"translate"),n.TgZ(4,"span",4),n.YNc(5,t,1,0,"i",5),n.qZA()()),2&l){const i=n.oxw();n.xp6(1),n.hij("",n.lcZ(2,2,n.lcZ(3,4,i.text))," "),n.xp6(4),n.Q6J("ngIf",i.control&&(null==i.control.errors?null:i.control.errors.required))}}function x(l,h){if(1&l&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&l){const i=n.oxw();n.Tol("text-danger"),n.xp6(1),n.Oqu(n.lcZ(2,3,i.object.keys(i.control.errors)[0]))}}let O=(()=>{class l extends u.t{constructor(i,r){super(),this.formGroupDirective=i,this.http=r,this.valueToUpdate=[],this.readOnly=!1,this.placeholder="",this.filterBy="",this.class="d-flex justify-content-between align-items-center",this.filter=!0,this.filterMatchMode="contains",this.object=Object}ngOnInit(){!this.data&&this.request?this.http.getWithParam(this.request,{limit:"all"}).subscribe({next:i=>{this.data=i.data,this.writeValue(this.valueToUpdate)},error:i=>{}}):this.writeValue(this.valueToUpdate)}writeValue(i){this.data&&(this.value=i)}onValueChange(i){this.onChange(i.value),this.onTouched()}}return l.\u0275fac=function(i){return new(i||l)(n.Y36(s.sg,8),n.Y36(P.O))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-multiselect"]],inputs:{value:"value",text:"text",data:"data",optionLabel:"optionLabel",optionValue:"optionValue",editable:"editable",readOnly:"readOnly",placeholder:"placeholder",filterBy:"filterBy",request:"request",class:"class",filter:"filter",filterMatchMode:"filterMatchMode"},features:[n._Bn([{provide:s.JU,useExisting:l,multi:!0},{provide:s.Cf,useExisting:l,multi:!0}]),n.qOj],decls:5,vars:15,consts:[[3,"ngClass"],[4,"ngIf"],["appendTo","body",3,"options","ngModel","placeholder","optionLabel","optionValue","filterMatchMode","display","filter","filterBy","disabled","ngModelChange","onChange"],[3,"class",4,"ngIf"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(i,r){1&i&&(n.TgZ(0,"div",0),n.YNc(1,_,6,6,"label",1),n.TgZ(2,"p-multiSelect",2),n.NdJ("ngModelChange",function(M){return r.value=M})("onChange",function(M){return r.onValueChange(M)}),n.ALo(3,"translate"),n.qZA(),n.YNc(4,x,3,5,"span",3),n.qZA()),2&i&&(n.Q6J("ngClass",r.class),n.xp6(1),n.Q6J("ngIf",r.text),n.xp6(1),n.Q6J("options",r.data)("ngModel",r.value)("placeholder",n.lcZ(3,13,r.placeholder))("optionLabel",r.optionLabel)("optionValue",r.optionValue)("filterMatchMode",r.filterMatchMode)("display","chip")("filter",r.filter)("filterBy",r.optionLabel)("disabled",r.readOnly),n.xp6(2),n.Q6J("ngIf",r.control&&r.control.errors&&(r.control.touched||r.formGroupDirective.submitted)))},dependencies:[C.mk,C.O5,s.JJ,s.On,d.NU,C.rS,T.X$]}),l})()}}]);