"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[9823],{6304:(u,p,n)=>{n.r(p),n.d(p,{TaxesModule:()=>Q});var a=n(6814),s=n(2954),t=n(9291),f=n(5861),r=n(6223),g=n(7824),l=n(7553),d=n(9768);const C=e=>{return{cols:[{field:"id",label:"id",class:"title"},{field:"name",label:"name",class:"title"},{field:"percentage",label:"percentage",class:"title"},{field:"creator",label:"creator",class:"title"},{field:"created_at",label:"created_at",class:"title"},{field:"updated_at",label:"updated_at",class:"title"},{label:"action",class:"title",actions:[{icon:"trash",class:"main-color",fun:(i=(0,f.Z)(function*(o){return yield e.texesService.delete(o)}),function(m){return i.apply(this,arguments)}),id:d.f.delete},{icon:"pen-to-square",class:"main-color",fun:function(){var i=(0,f.Z)(function*(o){return yield e.texesService.openDialogToUpdate(o)});return function(m){return i.apply(this,arguments)}}(),id:d.f.update}]}],Request:l.F.api.get};var i};var M=n(6924),_=n(8718),O=n(5946),x=n(5219),T=n(7625),b=n(4858),A=n(2377),D=n(359),E=n(5077),Z=n(4811),F=n(4779),h=n(3999);let S=(()=>{class e{constructor(o,m,P){this.texesService=o,this.formBuilder=m,this.permissionsService=P,this.fileConfig={fileName:"Role",fileOption:[g.o.export,g.o.print],export:{type:[{key:"Pdf",value:"Pdf"},{key:"Csv",value:"Csv"},{key:"Exil",value:"Exil"}]},print:{}},this.tableConfig=C(this),this.filtersConfig=[{label:"search",field:"search",type:M.W.TEXT,placeholder:"search"},{label:"From",field:"from",type:M.W.DATE,placeholder:"From"},{label:"To",field:"to",type:M.W.DATE,placeholder:"To"},{label:"Created By",field:"creator_id",type:M.W.SELECT,options:{value:"id",label:"name"},request:_.x.api.get,placeholder:"Created By"}],this.sortConfig=[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"sort_by",data:[{label:"name",field:"name"},{label:"percentage",field:"percentage"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"sort_by",data:[{label:O.q.asc,field:O.q.asc},{label:O.q.desc,field:O.q.desc}]}],this.icon=x.dv,this.updateUserForm=this.formBuilder.group({name:["",[r.kI.required]],email:["",[r.kI.required,r.kI.pattern("^[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}$")]],status:["",[r.kI.required]],phone:["",[r.kI.required,r.kI.pattern("^[0-9]{11}$")]],parent_id:[""],role_id:["",[r.kI.required]]})}openDialogToCreate(){var o=this;return(0,f.Z)(function*(){(yield o.texesService.openDialogToCreate())&&(o.tableConfig=C(o))})()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(T.N),t.Y36(r.qu),t.Y36(b.q))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list-texes"]],decls:16,vars:10,consts:[[1,"d-flex","justify-content-between","pb-5"],[1,"title"],["text","new",3,"icon","click"],[1,"d-flex","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],["table",""],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""]],template:function(o,m){if(1&o&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"app-button",2),t.NdJ("click",function(){return m.openDialogToCreate()}),t.qZA()(),t.TgZ(5,"div",3),t._UZ(6,"ukt-sort",4,5)(8,"ukt-filter",6,7),t.qZA(),t.TgZ(10,"div",8),t._UZ(11,"app-table",9,10),t.qZA(),t.TgZ(13,"div",11),t._UZ(14,"ukt-pagination",null,12),t.qZA()),2&o){const P=t.MAs(7),H=t.MAs(9),N=t.MAs(15);t.xp6(2),t.Oqu(t.lcZ(3,8,"list_of_taxes")),t.xp6(2),t.Q6J("icon",m.icon.PLUS),t.xp6(2),t.Q6J("SortConfig",m.sortConfig),t.xp6(2),t.Q6J("config",m.filtersConfig),t.xp6(3),t.Q6J("tableConfig",m.tableConfig)("pagination",N)("filter",H)("sort",P)}},dependencies:[A.a,D.Q,E.z,Z.x,F.r,h.X$],styles:["[_nghost-%COMP%]   .main[_ngcontent-%COMP%]{padding:4rem 1rem!important;font-size:1.6rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .main-filter[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);margin:1rem 0!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .main-filter[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{color:var(--mainColor);font-size:1.4rem!important;padding:.8rem!important;font-weight:600}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .main-filter[_ngcontent-%COMP%]   .sort-type[_ngcontent-%COMP%]{color:#b7a4a4}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .main-filter[_ngcontent-%COMP%]   .sort-type[_ngcontent-%COMP%]   .active-type[_ngcontent-%COMP%]{color:var(--mainColor)}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .main-filter[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr)}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .main-filter[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:1.4rem!important;padding:.8rem!important;font-weight:600;background-color:#f1f1f1;margin:1rem 0!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], [_nghost-%COMP%]   .main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   .main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], [_nghost-%COMP%]   .main[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .table-head[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#fff;color:#979797;font-size:1.5rem;min-width:180px!important;font-weight:400!important;font-style:normal!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .t-body[_ngcontent-%COMP%]{font-size:1.4rem;color:#2e2e2e;background-color:var(--lightGray);font-weight:400!important;font-style:normal!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .t-body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{color:var(--mainColor)!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .t-body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .module[_ngcontent-%COMP%]{background-color:#c6dfe2!important;padding:.5rem;border-radius:10px!important;margin:5px}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   .main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .modal.fade[_ngcontent-%COMP%]{z-index:1100!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%], [_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{z-index:1099!important}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:var(--mainColor);font-weight:500}@media screen and (max-width: 992px){.actions[_ngcontent-%COMP%]{width:auto}}"]}),e})();const L=[{path:l.F.page.list,component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-taxes"]],decls:2,vars:0,consts:[[1,"page-card"]],template:function(o,m){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-list-texes"),t.qZA())},dependencies:[S]}),e})()},{path:l.F.page.history,component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-history-texes"]],decls:2,vars:0,template:function(o,m){1&o&&(t.TgZ(0,"p"),t._uU(1,"history-texes works!"),t.qZA())}}),e})()}];let z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(L),s.Bz]}),e})();var I=n(1471),R=n(2115),G=n(1019),J=n(8096),W=n(6145),K=n(4413),X=n(9624),j=n(1890);let Q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,z,h.aw,K.e,X.U,I.X,R.u,G.i,J.J,W.n,j.f]}),e})()},6145:(u,p,n)=>{n.d(p,{n:()=>c});var a=n(6814),s=n(4819),t=n(1890),f=n(9624),r=n(3999),g=n(9291);let c=(()=>{class l{}return l.\u0275fac=function(C){return new(C||l)},l.\u0275mod=g.oAB({type:l}),l.\u0275inj=g.cJS({imports:[a.ez,s.O,f.U,t.f,r.aw]}),l})()},7824:(u,p,n)=>{n.d(p,{o:()=>a});var a=function(s){return s.export="export",s.import="import",s.print="print",s}(a||{})},1771:(u,p,n)=>{n.d(p,{U:()=>f});var a=n(9291),s=n(6223);const t=["*"];let f=(()=>{class r{constructor(){this.onSubmit=new a.vpe}ngOnChanges(c){}getFormData(){return"function"==typeof this.formData?this.formData(this.formGroup.value):{...this.formGroup.value}}reset(){this.formGroup.reset()}submit(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const c=this.getFormData();this.onSubmit.emit(c)}ngAfterContentInit(){}ngAfterContentChecked(){}ngOnDestroy(){}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-form"]],inputs:{formGroup:"formGroup",formData:"formData"},outputs:{onSubmit:"onSubmit"},features:[a.TTD],ngContentSelectors:t,decls:2,vars:1,consts:[[3,"formGroup","ngSubmit"]],template:function(c,l){1&c&&(a.F$t(),a.TgZ(0,"form",0),a.NdJ("ngSubmit",function(){return l.submit()}),a.Hsn(1),a.qZA()),2&c&&a.Q6J("formGroup",l.formGroup)},dependencies:[s._Y,s.JL,s.sg]}),r})()},8718:(u,p,n)=>{n.d(p,{x:()=>a});const a={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}}}]);