"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[7593],{488:(g,l,n)=>{n.d(l,{k:()=>i});var a=n(7824);const i=()=>({fileName:"account",fileOption:[a.o.import],import:{maxFileSize:9999999,multiple:!0,accept:"",url:"account/import"}})},68:(g,l,n)=>{n.d(l,{a:()=>a});const a={api:{create:"account/create",get:"account",getNotParent:"not-parents/accounts",getParent:"parents/accounts",getById:"account/",update:"account/update/",delete:"account/",exportExample:"account/export/example",exportExampleSub:"account/export/example/sub",exportCvs:"account/export/cvs",exportPdf:"account/export/pdf",importAccount:"account/import",importAccountSub:"account/import/sub"},page:{}}},5052:(g,l,n)=>{n.d(l,{a:()=>i});var a=n(6924);const i=()=>[{field:"search",label:"search",type:a.W.TEXT,placeholder:"search"},{field:"account_type",label:"Account type",type:a.W.TEXT,placeholder:"Type"},{field:"from",label:"From",type:a.W.DATE,placeholder:"From"},{field:"to",label:"To",type:a.W.DATE}]},9245:(g,l,n)=>{n.d(l,{Z:()=>s});var a=n(68),i=n(8323),c=n(8730),C=n(5052),_=n(488);const s={accountConfig:a.a,list:i.p,sort:c.D,filters_Config:C.a,file_Config:_.k}},8323:(g,l,n)=>{n.d(l,{p:()=>C});var a=n(5861),i=n(9686),c=n(68);const C=_=>{return{cols:[{field:"code",label:"code",class:""},{field:"name",label:"name",class:""},{field:"group",label:"account_group",class:""},{field:"parent",label:"account_parent",format:s=>s.parent?s.parent:"-"},{field:"is_parent",label:"is_parent",format:s=>s.is_parent?s.is_parent:"0"},{field:"opening_balance",label:"opening_balance",class:""},{field:"account_type",label:"account_type",format:s=>s.account_type?s.account_type:"-"},{label:"action",actions:[{id:i.m.delete,icon:"trash",class:"main-color",fun:(s=(0,a.Z)(function*(h){return yield _.accountsService.delete(h,"delete account")}),function(t){return s.apply(this,arguments)})},{id:i.m.update,icon:"pen-to-square",class:"main-color",fun:function(){var s=(0,a.Z)(function*(h){return yield _.accountsService.openDialogToUpdateAccount(h)});return function(t){return s.apply(this,arguments)}}()}]}],Request:c.a.api.get};var s}},8730:(g,l,n)=>{n.d(l,{D:()=>i});var a=n(5946);const i=()=>[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"code",field:"code"},{label:"account_group",field:"group"},{label:"parent",field:"parent"},{label:"opening_balance",field:"opening_balance"},{label:"account_type",field:"account_type"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:a.q.asc,field:a.q.asc},{label:a.q.desc,field:a.q.desc}]}]},9686:(g,l,n)=>{n.d(l,{m:()=>a});var a=function(i){return i.list="View Accounts",i.create="Create Account",i.update="Edit Account",i.delete="Delete Account",i.import="Import Accounts",i}(a||{})},6433:(g,l,n)=>{n.d(l,{i:()=>A});var a=n(5861),i=n(5619),c=n(6223),C=n(8645),_=n(9773),s=n(3641),h=n(68),t=n(9291),x=n(8763),O=n(2525),b=n(5118),P=n(6814),v=n(3999),T=n(2305),M=n(8614),Z=n(1904),D=n(3838),E=n(1771),N=n(4779);function L(o,u){if(1&o&&(t.TgZ(0,"p",21),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(null==e.errors?null:e.errors.name[0])}}function I(o,u){if(1&o&&(t.TgZ(0,"p",21),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(null==e.errors?null:e.errors.group_id[0])}}function w(o,u){if(1&o&&(t.TgZ(0,"div",22),t._UZ(1,"app-dropdown",23),t.YNc(2,I,2,1,"p",11),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("filter",!0)("text","group")("request",e.getGroupRequest)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(1),t.Q6J("ngIf",null==e.errors?null:e.errors.group_id)}}function U(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"div",24)(1,"app-checkbox",25),t.NdJ("change",function(p){t.CHM(e);const m=t.oxw();return t.KtG(m.is_parent(p))}),t.qZA()()}2&o&&(t.xp6(1),t.Tol("d-flex align-items-center mt-2  flex-row-reverse justify-content-end gap-2"),t.Q6J("text","parent"))}function G(o,u){if(1&o&&(t.TgZ(0,"p",21),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(null==e.errors?null:e.errors.parent_id[0])}}function V(o,u){if(1&o&&(t.TgZ(0,"p",21),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(null==e.errors?null:e.errors.opening_balance[0])}}function J(o,u){if(1&o&&(t.TgZ(0,"p",21),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(null==e.errors?null:e.errors.account_type[0])}}function R(o,u){if(1&o&&(t.TgZ(0,"div",26)(1,"div",22),t._UZ(2,"app-dropdown",27),t.YNc(3,G,2,1,"p",11),t.qZA(),t.TgZ(4,"div",22),t._UZ(5,"app-number-input",28),t.YNc(6,V,2,1,"p",11),t.qZA(),t.TgZ(7,"div",22),t._UZ(8,"app-dropdown",29),t.YNc(9,J,2,1,"p",11),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","Parent")("request",e.getAccountRequest.api.getParent)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(1),t.Q6J("ngIf",null==e.errors?null:e.errors.parent_id),t.xp6(2),t.Q6J("showButtons",!1)("mode","currency")("text","opening_balance"),t.xp6(1),t.Q6J("ngIf",null==e.errors?null:e.errors.opening_balance),t.xp6(2),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("text","account_type")("data",e.types)("optionLabel","name")("optionValue","id")("placeholder","select"),t.xp6(1),t.Q6J("ngIf",null==e.errors?null:e.errors.account_type)}}let y=(()=>{class o{constructor(e,r,p,m,d,W){this.fb=e,this.toastr=r,this.accountsService=p,this.groupService=m,this.config=d,this.dialogRef=W,this.getGroupRequest=s.l.api.get,this.getAccountRequest=h.a,this.unsubscribe=new C.x,this.formGroup=this.initForm(),this.isLoading=!1,this.types=[{name:"Both",id:"both"},{name:"Credit",id:"credit"},{name:"Debit",id:"debit"}],this.config.data?.data&&this.fillDataToUpdate()}ngOnInit(){this.accountsService.getAccounts().pipe((0,_.R)(this.unsubscribe)).subscribe({next:e=>{this.allAccounts=e.data}}),this.groupService.getGroup().pipe((0,_.R)(this.unsubscribe)).subscribe({next:e=>{this.allGroups=e.data}})}initForm(){return this.fb.group({id:[Number],name:["",[c.kI.required]],group_id:[null],opening_balance:[0,[c.kI.required,c.kI.pattern("^[0-9.]+$")]],parent_id:[null,c.kI.required],account_type:["both",c.kI.required],is_parent:[0]})}accept(){this.formGroup.invalid?this.formGroup.markAllAsTouched():(this.isLoading=!0,this.config.data.data?this.accountsService.update(this.formGroup.value).subscribe(e=>{this.toastr.success(e.message),this.ClosePopUp(!0),this.isLoading=!1},e=>{this.errors=e.error.errors,this.isLoading=!1}):this.accountsService.addAccount(this.formGroup.value).subscribe(e=>{this.toastr.success(e.message),this.ClosePopUp(!0),this.isLoading=!1},e=>{this.errors=e.error.errors,this.isLoading=!1}))}is_parent(e){e.checked?(this.formGroup.get("is_parent")?.patchValue(1),this.formGroup.get("opening_balance")?.clearValidators(),this.formGroup.get("account_type")?.clearValidators(),this.formGroup.get("parent_id")?.clearValidators(),this.formGroup.get("group_id")?.setValidators(c.kI.required)):(this.formGroup.get("is_parent")?.patchValue(0),this.formGroup.get("opening_balance")?.setValidators([c.kI.required,c.kI.pattern("^[0-9.]+$")]),this.formGroup.get("account_type")?.setValidators(c.kI.required),this.formGroup.get("parent_id")?.setValidators(c.kI.required),this.formGroup.get("group_id")?.clearValidators()),this.formGroup.get("opening_balance")?.updateValueAndValidity(),this.formGroup.get("account_type")?.updateValueAndValidity(),this.formGroup.get("parent_id")?.updateValueAndValidity(),this.formGroup.get("group_id")?.updateValueAndValidity()}ClosePopUp(e){this.dialogRef.close(e)}fillDataToUpdate(){this.is_parent({checked:Number(this.config.data?.data?.is_parent)}),Number(this.config.data?.data?.is_parent)?this.formGroup.patchValue({id:this.config.data.data.id,name:this.config.data.data.name,group_id:this.config?.data?.data?.group_id,is_parent:this.config?.data?.data?.is_parent}):this.formGroup.patchValue({id:this.config.data.data.id,name:this.config.data.data.name,parent_id:this.config.data?.data?.parent_id,account_type:this.config.data.data?.account_type,opening_balance:this.config.data.data?.opening_balance,is_parent:this.config?.data?.data?.is_parent})}ngOnDestroy(){this.unsubscribe.next(!0),this.unsubscribe.complete()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.qu),t.Y36(x._W),t.Y36(A),t.Y36(O.l),t.Y36(b.S),t.Y36(b.E7))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-new-account"]],decls:23,vars:13,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[1,"form"],[3,"formGroup","onSubmit"],["text","name","formControlName","name","ngDefaultControl","","placeholder","",3,"type"],["class","error",4,"ngIf"],[1,"row"],["class","col-12 my-3",4,"ngIf"],["class","my-3",4,"ngIf"],["class","row g-2 my-3",4,"ngIf"],[1,"footer","my-3"],[1,"cancel"],[1,"btn-cancel",3,"text","click"],[1,"create"],["translate","",3,"text","click"],[1,"error"],[1,"col-12","my-3"],["ngDefaultControl","","formControlName","group_id",3,"filter","text","request","optionLabel","optionValue","placeholder"],[1,"my-3"],[3,"text","change"],[1,"row","g-2","my-3"],["ngDefaultControl","","formControlName","parent_id",3,"text","request","optionLabel","optionValue","placeholder"],["ngDefaultControl","","placeholder","","formControlName","opening_balance",1,"d-block",3,"showButtons","mode","text"],["ngDefaultControl","","formControlName","account_type",3,"text","data","optionLabel","optionValue","placeholder"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return r.ClosePopUp(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"div",8)(11,"app-form",9),t.NdJ("onSubmit",function(){return r.accept()}),t._UZ(12,"app-text",10),t.YNc(13,L,2,1,"p",11),t.TgZ(14,"div",12),t.YNc(15,w,3,9,"div",13),t.YNc(16,U,2,3,"div",14),t.qZA(),t.YNc(17,R,10,20,"div",15),t.TgZ(18,"div",16)(19,"div",17)(20,"app-button",18),t.NdJ("click",function(){return r.ClosePopUp(!1)}),t.qZA()(),t.TgZ(21,"div",19)(22,"app-button",20),t.NdJ("click",function(){return r.accept()}),t.qZA()()()()()()),2&e){let p,m,d;t.xp6(8),t.Oqu(t.lcZ(9,11,null!==(p=r.config.header)&&void 0!==p?p:"")),t.xp6(3),t.Q6J("formGroup",r.formGroup),t.xp6(1),t.Tol("d-flex flex-column justify-content-between"),t.Q6J("type","text"),t.xp6(1),t.Q6J("ngIf",null==r.errors?null:r.errors.name),t.xp6(2),t.Q6J("ngIf","1"==(null==(m=r.formGroup.get("is_parent"))?null:m.value)),t.xp6(1),t.Q6J("ngIf","update"!=r.config.data.acceptLabel),t.xp6(1),t.Q6J("ngIf","0"==(null==(d=r.formGroup.get("is_parent"))?null:d.value)),t.xp6(3),t.Q6J("text","Cancel"),t.xp6(2),t.Q6J("text",r.config.data.acceptLabel)}},dependencies:[P.O5,c.Fj,c.JJ,c.JL,c.sg,c.u,v.Pi,T.b,M.T,Z.D,D.J,E.U,N.r,v.X$],styles:["[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{margin:1rem 0rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:600;font-size:1.8rem;line-height:24px;color:var(--mainColor);margin:2rem 0rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{font-size:1.4rem;color:var(--red)}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-top:1rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:1.6rem;background-color:var(--white);border:1px solid var(--mainColor);margin-bottom:1rem;height:50px}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{outline:none}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;margin:1rem 0;gap:20px}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{width:50%;padding-right:5px}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%]{width:50%;padding-left:5px}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%]     app-submit-btn .submit-btn{margin:0!important;max-width:100%}"]}),o})();var f=n(9245),k=n(1732),S=n(3562);let A=(()=>{class o{constructor(e,r,p){this.http=e,this.dynamicDialog=r,this.toastr=p,this.latestAccounts=new i.X([])}getAccounts(e){return this.http.get(f.Z.accountConfig.api.get)}getAccountsParents(e){return this.http.get(f.Z.accountConfig.api.getParent)}getAccountsNotParent(e){return this.http.get(f.Z.accountConfig.api.getNotParent)}openDialogToCreateAccount(e){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:e,data:{acceptLabel:"Add",rejectLabel:"Cancel"},width:"500px",height:"auto"},y)}addAccount(e){return this.http.post(f.Z.accountConfig.api.create,e)}bulkDelete(e){}exportExample(){return this.http.get(f.Z.accountConfig.api.exportExample)}delete(e){var r=this;return(0,a.Z)(function*(){const p={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e},name:"name"},width:"480px",height:"164px"};if(!(yield r.dynamicDialog.confirm(p)))return!1;try{const d=yield r.http.delete(f.Z.accountConfig.api.delete+e.id).toPromise();return r.toastr.success(d.message),d}catch(d){return r.toastr.error(d.error.message),d}})()}openDialogToUpdateAccount(e,r,p){var m=this;return(0,a.Z)(function*(){const d={showHeader:!1,header:"update_account",data:{acceptLabel:"update",rejectLabel:"Cancel",data:{...e}},width:"480px",height:"auto"};return yield m.dynamicDialog.showDialogWithComponent(d,y)})()}update(e){return this.http.post(f.Z.accountConfig.api.update+e.id,e)}importAccount(e){return this.http.post(f.Z.accountConfig.api.importAccount,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(k.O),t.LFG(S.U),t.LFG(x._W))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},7824:(g,l,n)=>{n.d(l,{o:()=>a});var a=function(i){return i.export="export",i.import="import",i.print="print",i}(a||{})}}]);