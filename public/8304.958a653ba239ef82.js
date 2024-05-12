"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[8304],{8304:(M,_,a)=>{a.r(_),a.d(_,{BankAccountModule:()=>ft});var n=a(6814),C=a(8209),t=a(9291),f=a(5861),m=function(o){return o.list="View BankAccounts",o.create="Create BankAccount",o.update="Edit BankAccount",o.delete="Delete BankAccount",o.exportPdf="Generate PDF BankAccounts",o.exportCvs="Export BankAccounts",o}(m||{}),A=a(5219);const d={api:{create:"bankAccount/create",get:"bankAccount",getUsers:"user",getCurrencies:"currency",getTypes:"bankAccount/types/list",getById:"bankAccount/",update:"bankAccount/update/",delete:"bankAccount/",export:"bankAccount/export",exportExample:"bankAccount/export/example",import:"bankAccount/import"},page:{list:"",update:"",create:"",view:"payment/view/:id"}},x=o=>{return{cols:[{field:"id",label:"code",class:""},{field:"name",label:"name",class:""},{field:"current_balance",label:"current_balance",class:"",format:i=>i.current_balance?i.current_balance:"-"},{field:"bank_branch",label:"bank_branch",format:i=>i.bank_branch?i.bank_branch:"-"},{field:"creator",label:"created_by",class:"",format:i=>i.creator?i.creator:"-"},{field:"created_at",label:"created_at",class:"",format:i=>i.created_at?i.created_at:"-"},{label:"action",actions:[{id:m.delete,icon:"trash",class:"main-color",fun:(i=(0,f.Z)(function*(e){return yield o.bankAccountsService.delete(e)}),function(r){return i.apply(this,arguments)})},{id:m.update,icon:"pen-to-square",class:"main-color",fun:function(){var i=(0,f.Z)(function*(e){return yield o.bankAccountsService.openDialogToUpdate(e)});return function(r){return i.apply(this,arguments)}}()}]}],Request:d.api.get};var i};var b=a(5946),p=a(6924),u=a(8718),s=a(6223),P=a(68),T=a(8763),O=a(5118),B=a(2305),L=a(8614),F=a(1904),E=a(3838),J=a(1771),Z=a(4779),y=a(3999);function U(o,i){if(1&o&&(t.TgZ(0,"p",27),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}function N(o,i){1&o&&(t.TgZ(0,"div",11),t._UZ(1,"app-number-input",28),t.qZA()),2&o&&(t.xp6(1),t.Q6J("showButtons",!1)("text","account_number"))}const S=function(){return{type:"phone",length:11}};function w(o,i){1&o&&(t.TgZ(0,"div",11),t._UZ(1,"app-text",29),t.qZA()),2&o&&(t.xp6(1),t.Q6J("patternMessage",t.DdM(2,S))("text","wallet_number"))}function Q(o,i){1&o&&(t.TgZ(0,"div",19),t._UZ(1,"app-number-input",30),t.qZA()),2&o&&(t.xp6(1),t.Q6J("mode","decimal")("maxFractionDigits",3)("minFractionDigits",2)("showButtons",!1)("text","current_balance"))}function G(o,i){if(1&o&&(t.TgZ(0,"div",19),t._UZ(1,"app-dropdown",31),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Tol(""),t.Q6J("text","Status")("data",e.status)}}function V(o,i){if(1&o&&(t.TgZ(0,"div",19),t._UZ(1,"app-dropdown",32),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Tol(""),t.Q6J("filterBy","name_code")("filter",!0)("text","parent_account_id")("request",e.accountsConfig.api.getAssetsParent)}}function W(o,i){if(1&o&&(t.TgZ(0,"div",19),t._UZ(1,"app-dropdown",33),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Tol(""),t.Q6J("filterBy","name_code")("filter",!0)("text","parent_expenses_account_id")("request",e.accountsConfig.api.getExpensesParent)}}function Y(o,i){if(1&o&&(t.TgZ(0,"div",19),t._UZ(1,"app-dropdown",34),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Tol(""),t.Q6J("filterBy","name_code")("filter",!0)("text","parent_revenue_account_id")("request",e.accountsConfig.api.getRevenueParent)}}function q(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"app-checkbox",35),t.NdJ("change",function(c){t.CHM(e);const g=t.oxw();return t.KtG(g.change_currency(c))}),t.qZA()}if(2&o){const e=t.oxw();let r;t.Tol("d-flex align-items-center mt-2  flex-row-reverse justify-content-end gap-2"),t.Q6J("value",1==(null==(r=e.formGroup.get("change_currency"))?null:r.value))("text","change-currency")}}let k=(()=>{class o{constructor(e,r,c,g,v){this.fb=e,this.toastr=r,this.dynamicDialogConfig=c,this.dialogRef=g,this.bankAccountsService=v,this.accountsConfig=P.a,this.formGroup=this.initForm(),this.bankConfig=d,this.permissions=m,this.hidden=!0,this.isWallet=!1,this.status=[{id:"Active",name:"Active"},{id:"In-Active",name:"In-Active"}],this.currencies={data:[]},this.defaultCurrency=!1,this.dynamicDialogConfig.data?.data&&this.fillDataToUpdate(this.dynamicDialogConfig.data?.data)}ngOnInit(){this.bankAccountsService.getUsers().subscribe(e=>{this.users=e.data}),this.bankAccountsService.getTypes().subscribe(e=>{this.account_types=e.data})}selectType(e){this.hidden=!1,"wallet"==e.value?(this.isWallet=!0,this.formGroup.get("phone")?.setValidators([s.kI.required,s.kI.pattern("^[0-9]{1,}$"),s.kI.minLength(11),s.kI.maxLength(11)]),this.formGroup.get("account_number")?.setValue(""),this.formGroup.get("account_number")?.clearValidators()):(this.isWallet=!1,this.formGroup.get("account_number")?.setValidators([s.kI.required,this.numberMinLengthValidator(10),this.numberMaxLengthValidator(20)]),this.formGroup.get("phone")?.setValue(""),this.formGroup.get("phone")?.clearValidators()),this.formGroup.get("phone")?.updateValueAndValidity(),this.formGroup.get("account_number")?.updateValueAndValidity()}fillDataToUpdate(e){this.formGroup.patchValue({id:e.id,name:e?.name,bank_branch:e?.bank_branch,account_number:e?.account_number,account_type:e?.account_type,currency_id:e?.currency_id,holder_name:e?.holder_name,status:e?.status,phone:e?.phone,current_balance:e?.current_balance,authorized_by:e?.authorized_by,parent_account_id:e?.parent_account_id,parent_expenses_account_id:e?.parent_expenses_account_id,parent_revenue_account_id:e?.parent_revenue_account_id,change_currency:e?.change_currency})}numberMaxLengthValidator(e){return r=>{const c=r.value;if(null==c||isNaN(c))return null;const g=c.toString();return g.length>e?{maxlength:{actualLength:g.length,requiredLength:e}}:null}}numberMinLengthValidator(e){return r=>{const c=r.value;if(null==c||isNaN(c))return null;const g=c.toString();return g.length<e?{minlength:{actualLength:g.length,requiredLength:e}}:null}}initForm(){return this.fb.group({id:[Number],name:["",[s.kI.required]],account_number:[""],phone:[""],currency_id:["",s.kI.required],account_type:["",s.kI.required],chart_of_account:[""],authorized_by:[""],current_balance:[""],bank_branch:[""],holder_name:[""],status:[""],parent_account_id:["",s.kI.required],parent_expenses_account_id:["",s.kI.required],parent_revenue_account_id:[""],change_currency:[0]})}accept(){console.log(this.formGroup),this.formGroup.invalid?this.formGroup.markAllAsTouched():this.dynamicDialogConfig.data.data?this.bankAccountsService.update(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors,this.toastr.error(e.error.message)}}):this.bankAccountsService.create(this.formGroup.value).subscribe({next:e=>{this.toastr.success(e.message),this.closePopup(!0)},error:e=>{this.errors=e.error.errors,this.toastr.error(e.error.message)}})}change_currency(e){e.checked?this.formGroup.get("change_currency")?.patchValue(1):this.formGroup.get("change_currency")?.patchValue(0)}closePopup(e){this.dialogRef.close(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.qu),t.Y36(T._W),t.Y36(O.S),t.Y36(O.E7),t.Y36(D))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-bank-account"]],decls:39,vars:41,consts:[[1,"main"],[1,"header"],[1,"d-flex","justify-content-between"],[1,"icon"],["src","../assets/Tabs/Icon/Active/craete-bank.png","alt","img"],[3,"click"],[1,"fa-solid","fa-xmark","pointer","fs-1"],[1,"title"],[3,"formGroup"],["class","text-error",4,"ngFor","ngForOf"],[1,"row"],[1,"mb-5","col-sm-12"],["formControlName","name","ngDefaultControl","","placeholder","",3,"text"],["formControlName","bank_branch","ngDefaultControl","","placeholder","",3,"text"],[1,"mb-5","col-12"],["formControlName","holder_name","ngDefaultControl","","placeholder","",3,"text"],["formControlName","authorized_by","ngDefaultControl","",3,"text"],[1,"mb-3","col-12"],["placeholder","select","optionLabel","name","optionValue","id","formControlName","currency_id","ngDefaultControl","",3,"text","request"],[1,"mb-3","col-sm-12"],["placeholder","select","optionLabel","label","optionValue","name","formControlName","account_type",3,"text","data","onDropDownChange"],["class","mb-5 col-sm-12",4,"ngIf"],["class","mb-3 col-sm-12",4,"ngIf"],[3,"value","class","text","change",4,"ngIf"],[1,"row","g-2","my-2"],[1,"col-6"],[3,"text","click"],[1,"text-error"],["ngDefaultControl","","placeholder","","formControlName","account_number",1,"d-block",3,"showButtons","text"],["ngDefaultControl","","placeholder","","formControlName","phone",1,"d-block",3,"patternMessage","text"],["ngDefaultControl","","placeholder","","formControlName","current_balance",1,"d-block",3,"mode","maxFractionDigits","minFractionDigits","showButtons","text"],["placeholder","select","optionLabel","name","optionValue","id","formControlName","status",3,"text","data"],["placeholder","select","optionLabel","name_code","optionValue","id","formControlName","parent_account_id",3,"filterBy","filter","text","request"],["placeholder","select","optionLabel","name_code","optionValue","id","formControlName","parent_expenses_account_id",3,"filterBy","filter","text","request"],["placeholder","select","optionLabel","name_code","optionValue","id","formControlName","parent_revenue_account_id",3,"filterBy","filter","text","request"],[3,"value","text","change"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span",5),t.NdJ("click",function(){return r.closePopup(!1)}),t._UZ(6,"i",6),t.qZA()(),t.TgZ(7,"p",7),t._uU(8),t.ALo(9,"translate"),t.qZA()(),t.TgZ(10,"app-form",8),t.YNc(11,U,2,1,"p",9),t.ALo(12,"keyvalue"),t.TgZ(13,"div",10)(14,"div",11),t._UZ(15,"app-text",12),t.qZA(),t.TgZ(16,"div",11),t._UZ(17,"app-text",13),t.qZA(),t.TgZ(18,"div",14),t._UZ(19,"app-text",15),t.qZA(),t.TgZ(20,"div",14),t._UZ(21,"app-text",16),t.qZA(),t.TgZ(22,"div",17),t._UZ(23,"app-dropdown",18),t.qZA(),t.TgZ(24,"div",19)(25,"app-dropdown",20),t.NdJ("onDropDownChange",function(g){return r.selectType(g)}),t.qZA()(),t.YNc(26,N,2,2,"div",21),t.YNc(27,w,2,3,"div",21),t.YNc(28,Q,2,5,"div",22),t.YNc(29,G,2,4,"div",22),t.YNc(30,V,2,6,"div",22),t.YNc(31,W,2,6,"div",22),t.YNc(32,Y,2,6,"div",22),t.YNc(33,q,1,4,"app-checkbox",23),t.qZA(),t.TgZ(34,"div",24)(35,"div",25)(36,"app-button",26),t.NdJ("click",function(){return r.closePopup(!1)}),t.qZA()(),t.TgZ(37,"div",25)(38,"app-button",26),t.NdJ("click",function(){return r.accept()}),t.qZA()()()()()),2&e){let c;t.xp6(8),t.Oqu(t.lcZ(9,37,null!==(c=r.dynamicDialogConfig.header)&&void 0!==c?c:"")),t.xp6(2),t.Q6J("formGroup",r.formGroup),t.xp6(1),t.Q6J("ngForOf",t.lcZ(12,39,r.errors)),t.xp6(4),t.Tol(""),t.Q6J("text","name"),t.xp6(2),t.Tol(""),t.Q6J("text","bank_branch"),t.xp6(2),t.Tol(""),t.Q6J("text","holder_name"),t.xp6(2),t.Tol(""),t.Q6J("text","authorized_by"),t.xp6(2),t.Tol(""),t.Q6J("text","account_currency")("request",r.bankConfig.api.getCurrencies),t.xp6(2),t.Tol(""),t.Q6J("text","account_type")("data",r.account_types),t.xp6(1),t.Q6J("ngIf",!r.hidden&&!r.isWallet),t.xp6(1),t.Q6J("ngIf",!r.hidden&&r.isWallet),t.xp6(1),t.Q6J("ngIf","update_bank"==r.dynamicDialogConfig.header),t.xp6(1),t.Q6J("ngIf","update_bank"==r.dynamicDialogConfig.header),t.xp6(1),t.Q6J("ngIf","add_bank"==r.dynamicDialogConfig.header),t.xp6(1),t.Q6J("ngIf","add_bank"==r.dynamicDialogConfig.header),t.xp6(1),t.Q6J("ngIf","add_bank"==r.dynamicDialogConfig.header),t.xp6(1),t.Q6J("ngIf","add_bank"==r.dynamicDialogConfig.header),t.xp6(3),t.Tol("btn-cancel"),t.Q6J("text","Cancel"),t.xp6(2),t.Tol("btn-filter"),t.Q6J("text",null==r.dynamicDialogConfig.data?null:r.dynamicDialogConfig.data.acceptLabel)}},dependencies:[n.sg,n.O5,s.Fj,s.JJ,s.JL,s.sg,s.u,B.b,L.T,F.D,E.J,J.U,Z.r,n.Nd,y.X$],styles:["[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:600;font-size:1.8rem;line-height:24px;color:var(--mainColor)}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .title-model[_ngcontent-%COMP%]{padding:1rem!important;font-style:normal;font-weight:600;font-size:1.8rem;line-height:28px;color:var(--mainColor)}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:500;color:#344054}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:1.6rem!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{font-size:1.6rem!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .auth[_ngcontent-%COMP%]   .auth-input[_ngcontent-%COMP%]{position:relative;border:1px solid #ced4da;border-radius:5px;display:flex;justify-content:space-between;align-items:center}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .auth[_ngcontent-%COMP%]   .auth-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1.5rem!important;padding:7px!important;border:none!important;outline:none!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .auth[_ngcontent-%COMP%]   .auth-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .auth[_ngcontent-%COMP%]   .auth-input[_ngcontent-%COMP%]   .addAuth[_ngcontent-%COMP%]{position:absolute;top:30;right:0}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .auth[_ngcontent-%COMP%]   .auth-name[_ngcontent-%COMP%]{background-color:#c6dfe2!important;border-radius:24px!important;padding:6px 15px;margin:.5rem 1rem!important;font-size:1.2rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .auth[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{font-size:1.2rem;color:var(--red)}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     app-select-option select{background-color:var(--white)!important;border:1px solid #ced4da!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     app-input input{background-color:var(--white)!important;border:1px solid #ced4da!important}html[dir=rtl]   [_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{margin-right:.5em}html[dir=rtl]   [_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{margin-left:.5rem}html[dir=rtl]   [_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{float:right}"]}),o})();var z=a(1732),K=a(3562);let D=(()=>{class o{constructor(e,r,c){this.http=e,this.dynamicDialog=r,this.toastr=c}get(e){return this.http.get(d.api.get)}getTypes(e){return this.http.get(d.api.getTypes)}getUsers(e){return this.http.get(d.api.getUsers)}getCurrencies(e){return this.http.get(d.api.getCurrencies)}openDialogToCreate(){return this.dynamicDialog.showDialogWithComponent({showHeader:!1,header:"add_bank",data:{acceptLabel:"add",rejectLabel:"cancel"},width:"500px",height:"auto"},k)}create(e){return this.http.post(d.api.create,e)}delete(e){var r=this;return(0,f.Z)(function*(){const c={showHeader:!1,header:"delete",data:{message:"do_you_want_to_delete",acceptLabel:"delete",rejectLabel:"close",data:{...e},name:"name"},width:"300px",height:"164px"};return!!(yield r.dynamicDialog.confirm(c))&&r.http.delete(d.api.delete+e.id).toPromise().then(v=>(r.toastr.success(v.message),v)).catch(v=>(r.toastr.error(v.error.message),v))})()}openDialogToUpdate(e){var r=this;return(0,f.Z)(function*(){const c={showHeader:!1,header:"update_bank",data:{acceptLabel:"update",rejectLabel:"cancel",data:{...e}},width:"480px",height:"auto"};return yield r.dynamicDialog.showDialogWithComponent(c,k)})()}update(e){return this.http.post(d.api.update+e.id,e)}import(e){return this.http.post(d.api.import,e)}export(){return this.http.get(d.api.export)}exportExample(){return this.http.get(d.api.exportExample)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(z.O),t.LFG(K.U),t.LFG(T._W))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var R=a(8275),j=a(991),X=a(2377),H=a(359),$=a(5077),tt=a(3826);function et(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",16)(1,"button",17),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ul",18)(5,"li",19),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.exportExample())}),t._uU(6),t.ALo(7,"titlecase"),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"li",19),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.export())}),t._uU(10),t.ALo(11,"titlecase"),t.ALo(12,"translate"),t.qZA()()()}2&o&&(t.xp6(2),t.hij(" ",t.lcZ(3,3,"export")," "),t.xp6(4),t.Oqu(t.lcZ(7,5,t.lcZ(8,7,"example"))),t.xp6(4),t.Oqu(t.lcZ(11,9,t.lcZ(12,11,"data"))))}function nt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"app-button",20),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.openDialogToCreate())}),t.qZA()}if(2&o){const e=t.oxw();t.Tol("btn-filter"),t.Q6J("text","new")("icon",e.icon.PLUS)("iconPos","left")}}function ot(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"app-import-data",21),t.NdJ("onlCoseSectionImport",function(c){t.CHM(e);const g=t.oxw();return t.KtG(g.closeSectionToImport(c))}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("endPoint",e.fileConfig.api.import)}}const I=function(o){return[o]};let at=(()=>{class o{constructor(e){this.bankAccountsService=e,this.showImportForm=!1,this.fileConfig=d,this.tableConfig=x(this),this.filtersConfig=[{field:"search",label:"search",type:p.W.TEXT,placeholder:"search"},{field:"name",label:"name",type:p.W.TEXT,placeholder:""},{field:"creator_id",label:"creator",type:p.W.SELECT,options:{value:"id",label:"name"},request:u.x.api.get,placeholder:"select"},{field:"balance_from",label:"balance_from",type:p.W.TEXT,placeholder:""},{field:"balance_to",label:"balance_to",type:p.W.TEXT,placeholder:""},{field:"from",label:"from",type:p.W.DATE,placeholder:"From"},{field:"to",label:"to",type:p.W.DATE}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"Name",field:"name"},{label:"code",field:"code"},{label:"account_number",field:"account_number"},{label:"account_type",field:"account_type"},{label:"opening_balance",field:"opening_balance"},{label:"current_balance",field:"current_balance"},{label:"created_at",field:"created_at"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_type",data:[{label:b.q.asc,field:b.q.asc},{label:b.q.desc,field:b.q.desc}]}],this.permissions=m,this.icon=A.dv}openDialogToCreate(){var e=this;return(0,f.Z)(function*(){(yield e.bankAccountsService.openDialogToCreate())&&(e.tableConfig=x(e))})()}openSectionToImport(){this.showImportForm=!0}closeSectionToImport(e){e?(this.showImportForm=!1,this.tableConfig=x(this)):this.showImportForm=!1}export(e){this.bankAccountsService.export().subscribe(r=>{window.open(r.file_path)})}exportExample(){this.bankAccountsService.exportExample().subscribe(e=>{window.open(e.file_path)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(D))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-bank-account"]],decls:19,vars:19,consts:[[1,"d-flex","align-items-center","justify-content-between"],[1,"title"],[1,"d-flex","gap-2","align-items-center"],["class","dropdown",4,"hasPermissions"],[3,"text","click"],[3,"text","class","icon","iconPos","click",4,"hasPermissions"],[4,"ngIf"],[1,"d-flex","flex-row","align-items-center","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"filter","sort","tableConfig","pagination"],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""],[1,"dropdown"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-cancel","dropdown-toggle"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],[1,"pointer","dropdown-item",3,"click"],[3,"text","icon","iconPos","click"],[3,"endPoint","onlCoseSectionImport"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,et,13,13,"div",3),t.TgZ(6,"app-button",4),t.NdJ("click",function(){return r.openSectionToImport()}),t.qZA(),t.YNc(7,nt,1,5,"app-button",5),t.qZA()(),t.YNc(8,ot,2,1,"div",6),t.TgZ(9,"div",7),t._UZ(10,"ukt-sort",8,9)(12,"ukt-filter",10,11),t.qZA(),t.TgZ(14,"div",12),t._UZ(15,"app-table",13),t.qZA(),t.TgZ(16,"div",14),t._UZ(17,"ukt-pagination",null,15),t.qZA()),2&e){const c=t.MAs(11),g=t.MAs(13),v=t.MAs(18);t.xp6(2),t.Oqu(t.lcZ(3,13,"list_of_bank_account")),t.xp6(3),t.Q6J("hasPermissions",t.VKq(15,I,r.permissions.list)),t.xp6(1),t.Tol("btn-cancel"),t.Q6J("text","import"),t.xp6(1),t.Q6J("hasPermissions",t.VKq(17,I,r.permissions.create)),t.xp6(1),t.Q6J("ngIf",r.showImportForm),t.xp6(2),t.Q6J("SortConfig",r.sortConfig),t.xp6(2),t.Q6J("config",r.filtersConfig),t.xp6(3),t.Q6J("filter",g)("sort",c)("tableConfig",r.tableConfig)("pagination",v)}},dependencies:[n.O5,R.z,j.M,Z.r,X.a,H.Q,$.z,tt.x,n.rS,y.X$],styles:[".dropdown[_ngcontent-%COMP%]{background-color:transparent!important}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent!important;border:1px solid var(--mainColor);font-size:1.5rem;padding:6px}.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.5rem}.import[_ngcontent-%COMP%]{padding:20px;border:2px solid var(--mainColor);border-radius:8px;margin:10px 0}"]}),o})();const rt=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-bank-account"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-bank-account"),t.qZA())},dependencies:[at]}),o})()}];let it=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[C.Bz.forChild(rt),C.Bz]}),o})();var ct=a(1383),lt=a(9624),st=a(1890),pt=a(4413),ut=a(1471),dt=a(2115),mt=a(1019),gt=a(8096);let ft=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[n.ez,it,s.UX,ct.m,lt.U,pt.e,st.f,y.aw,ut.X,dt.u,mt.i,gt.J]}),o})()},68:(M,_,a)=>{a.d(_,{a:()=>n});const n={api:{create:"account/create",get:"account/with-group/all",getNotParent:"not-parents/accounts",getParent:"parents/accounts",getProfitLossParent:"profit-loss/parent-accounts",getExpensesParent:"account/parent/expenses",getRevenueParent:"account/parent/revenue",getAssetsParent:"account/parent/assets",getById:"account/",update:"account/update/",delete:"account/",exportExample:"account/export/example",exportExampleSub:"account/export/example/sub",export:"account/export/parent",exportPdf:"account/export/pdf",importAccount:"account/import",importAccountSub:"account/import/sub"},page:{}}},1771:(M,_,a)=>{a.d(_,{U:()=>f});var n=a(9291),C=a(6223);const t=["*"];let f=(()=>{class m{constructor(){this.onSubmit=new n.vpe}ngOnChanges(d){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const d=this.getFormData();this.onSubmit.emit(d)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return m.\u0275fac=function(d){return new(d||m)},m.\u0275cmp=n.Xpm({type:m,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[n.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(d,x){1&d&&(n.F$t(),n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return x.submit()}),n.Hsn(1),n.qZA()),2&d&&n.Q6J("formGroup",x.formGroup)},dependencies:[C._Y,C.JL,C.sg]}),m})()},4896:(M,_,a)=>{a.d(_,{Y:()=>h});var n=a(9291),C=a(67),t=a(6223),f=a(6814),m=a(3999);function A(p,u){1&p&&n._UZ(0,"i",7)}function d(p,u){if(1&p&&(n.TgZ(0,"label",4),n._uU(1),n.ALo(2,"titlecase"),n.ALo(3,"translate"),n.TgZ(4,"span",5),n.YNc(5,A,1,0,"i",6),n.qZA()()),2&p){const l=n.oxw();n.xp6(1),n.hij("",n.lcZ(2,2,n.lcZ(3,4,l.label))," "),n.xp6(4),n.Q6J("ngIf",l.control&&(null==l.control.errors?null:l.control.errors.required))}}function x(p,u){if(1&p&&(n.TgZ(0,"p"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&p){const l=n.oxw();n.xp6(1),n.Oqu(n.lcZ(2,1,l.selectedFileCount+"files"))}}function b(p,u){if(1&p&&(n.TgZ(0,"p"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&p){const l=n.oxw();n.xp6(1),n.Oqu(l.selectedFileName?l.selectedFileName:n.lcZ(2,1,l.placeholder))}}let h=(()=>{class p extends C.t{set clear(l){l&&(this.selectedFileCount=0,this.selectedFileName="",this.value=null)}constructor(l){super(),this.formGroupDirective=l,this.uploadedFiles=[],this.multiple=!0,this.label="Upload",this.placeholder="drag_and_drop_you_file_or_Click_here_to_upload",this.accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx",this.onValueChange=new n.vpe,this.selectedFileName="",this.selectedFileCount=0}onFileSelected(l){this.onValueChange.emit(l),this.selectedFileName=l.target.files[0].name,l.target.files&&l.target.files.length>0&&(this.selectedFileCount=l.target.files.length)}onUpload(l){for(let s of l.files)this.uploadedFiles.push(s)}reset(){}}return p.\u0275fac=function(l){return new(l||p)(n.Y36(t.sg,8))},p.\u0275cmp=n.Xpm({type:p,selectors:[["app-file-upload"]],inputs:{value:"value",multiple:"multiple",label:"label",placeholder:"placeholder",accept:"accept",clear:"clear"},outputs:{onValueChange:"onValueChange"},features:[n._Bn([{provide:t.JU,useExisting:p,multi:!0},{provide:t.Cf,useExisting:p,multi:!0}]),n.qOj],decls:5,vars:6,consts:[[1,"file-input"],["for","file",4,"ngIf"],[4,"ngIf"],["id","file","type","file","id","file",1,"form-control",3,"multiple","ngModel","accept","ngModelChange","change"],["for","file"],[1,"required-aster"],["class","fa-solid fa-asterisk",4,"ngIf"],[1,"fa-solid","fa-asterisk"]],template:function(l,s){1&l&&(n.TgZ(0,"div",0),n.YNc(1,d,6,6,"label",1),n.YNc(2,x,3,3,"p",2),n.YNc(3,b,3,3,"p",2),n.TgZ(4,"input",3),n.NdJ("ngModelChange",function(T){return s.value=T})("change",function(T){return s.onFileSelected(T)}),n.qZA()()),2&l&&(n.xp6(1),n.Q6J("ngIf",s.label),n.xp6(1),n.Q6J("ngIf",s.selectedFileCount>1),n.xp6(1),n.Q6J("ngIf",s.selectedFileCount<=1),n.xp6(1),n.Q6J("multiple",s.multiple)("ngModel",s.value)("accept",s.accept))},dependencies:[f.O5,t.Fj,t.JJ,t.On,f.rS,m.X$],styles:[".text-danger[_ngcontent-%COMP%]{font-size:14px}.file-input[_ngcontent-%COMP%]{position:relative}.file-input[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{position:absolute;left:0;top:0;opacity:0;width:100%;height:100%;min-width:200px!important}.file-input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;padding:8px;border:1px dashed #7ca0c5;border-radius:8px;font-size:14px;cursor:pointer;min-width:200px!important;text-align:center;overflow:hidden}"]}),p})()},991:(M,_,a)=>{a.d(_,{M:()=>b});var n=a(9291),C=a(8763),t=a(1732),f=a(3999),m=a(6814),A=a(707),d=a(4896);function x(h,p){if(1&h&&(n.TgZ(0,"div")(1,"span",6),n._uU(2),n.qZA(),n.TgZ(3,"span",6),n._uU(4),n.qZA()()),2&h){const u=p.$implicit;n.xp6(2),n.hij(" row :",u.row_number," "),n.xp6(2),n.Oqu(u.error)}}let b=(()=>{class h{constructor(u,l,s){this.toastr=u,this.http=l,this.translateService=s,this.endPoint="",this.onDataLoaded=new n.vpe,this.onlCoseSectionImport=new n.vpe,this.showImportForm=!1,this.importErrors=[],this.fileName="",this.values=new FormData,this.clear=!1}onFileSelected(u){console.log(u.target),u.target.files[0]&&(this.fileName=u.target.files[0].name,this.values.set("file",u.target.files[0]))}import(){this.fileName?this.http.post(this.endPoint,this.values).subscribe(u=>{this.toastr.success(u.message),this.closeSectionToImport(!0)},u=>{this.importErrors=u.error.errors,this.clear=!0,this.fileName="",u.error.message&&this.toastr.error(u.error.message)}):this.toastr.error(this.translateService.instant("select_file")),this.clear=!1}closeSectionToImport(u){this.fileName="",this.importErrors=[],this.onlCoseSectionImport.emit(u)}}return h.\u0275fac=function(u){return new(u||h)(n.Y36(C._W),n.Y36(t.O),n.Y36(f.sK))},h.\u0275cmp=n.Xpm({type:h,selectors:[["app-import-data"]],inputs:{endPoint:"endPoint"},outputs:{onDataLoaded:"onDataLoaded",onlCoseSectionImport:"onlCoseSectionImport"},decls:10,vars:15,consts:[[1,"import"],[4,"ngFor","ngForOf"],[3,"multiple","accept","label","clear","onValueChange"],[1,"d-flex","gap-2","align-items-center","mt-3"],[3,"label","onClick"],["styleClass","btn-cancel",3,"label","onClick"],[1,"text-error"]],template:function(u,l){1&u&&(n.TgZ(0,"div",0),n.YNc(1,x,5,2,"div",1),n.TgZ(2,"app-file-upload",2),n.NdJ("onValueChange",function(P){return l.onFileSelected(P)}),n.qZA(),n.TgZ(3,"div",3)(4,"p-button",4),n.NdJ("onClick",function(){return l.import()}),n.ALo(5,"titlecase"),n.ALo(6,"translate"),n.qZA(),n.TgZ(7,"p-button",5),n.NdJ("onClick",function(){return l.closeSectionToImport(!1)}),n.ALo(8,"titlecase"),n.ALo(9,"translate"),n.qZA()()()),2&u&&(n.xp6(1),n.Q6J("ngForOf",l.importErrors),n.xp6(1),n.Q6J("multiple",!1)("accept",".csv,.xls,.xlsx")("label","import")("clear",l.clear),n.xp6(2),n.Q6J("label",n.lcZ(5,7,n.lcZ(6,9,"save"))),n.xp6(3),n.Q6J("label",n.lcZ(8,11,n.lcZ(9,13,"cancel"))))},dependencies:[m.sg,A.zx,d.Y,m.rS,f.X$],styles:[".import[_ngcontent-%COMP%]{padding:20px;border:2px solid var(--mainColor);border-radius:8px;margin:10px 0}"]}),h})()},8718:(M,_,a)=>{a.d(_,{x:()=>n});const n={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}}}]);