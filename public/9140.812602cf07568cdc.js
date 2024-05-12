"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[9140],{7824:(d,s,n)=>{n.d(s,{o:()=>a});var a=function(r){return r.export="export",r.import="import",r.print="print",r}(a||{})},8718:(d,s,n)=>{n.d(s,{x:()=>a});const a={api:{create:"user/create",get:"user",getById:"user/",update:"user/update/",delete:"user/",exportCvs:"user/export/cvs",exportPdf:"user/export/pdf",import:"user/import",export:"user/data/export"},page:{list:"",view:"view/:id"}}},5:(d,s,n)=>{n.d(s,{Z:()=>r});const r={userConfig:n(8718).x}},9598:(d,s,n)=>{n.d(s,{v:()=>a});const a={api:{create:"tenant/create",get:"tenant",getById:"tenant/",update:"tenant/update/",delete:"tenant/",exportCvs:"tenant/export/cvs",exportPdf:"tenant/export/pdf",import:"tenant/import"},page:{list:"",view:"view/:id"}}},2341:(d,s,n)=>{n.d(s,{a:()=>t});var a=n(6924),r=n(5);const t=()=>[{label:"Industry",field:"industry_type",type:a.W.SELECT,options:{value:"value",label:"label"},data:[{value:"ERP System",label:"ERP System"},{value:"Schools",label:"Schools"},{value:"Health",label:"Health"},{value:"Retail",label:"Retail"}],placeholder:"Industry"},{label:"Plan",field:"plan",type:a.W.SELECT,options:{value:"value",label:"label"},data:[{value:"Enterprise",label:"Enterprise"},{value:"Business",label:"Business"},{value:"Starter",label:"Starter"},{value:"Premium",label:"Premium"}],placeholder:"Plan"},{label:"Assigned",field:"assigned_id",type:a.W.SELECT,options:{value:"id",label:"name"},request:r.Z.userConfig.api.get,placeholder:"Plan"},{label:"From",field:"from",type:a.W.DATE,placeholder:"From"},{label:"To",field:"to",type:a.W.DATE,placeholder:"To"},{label:"Name",field:"name",type:a.W.TEXT,placeholder:"Name"},{label:"search",field:"search",type:a.W.TEXT,placeholder:"search"}]},9795:(d,s,n)=>{n.d(s,{L:()=>v});var a=n(5861),r=n(9598);let t=1;const v=m=>{return{cols:[{field:"id",label:"no",class:"title",format:()=>t++},{field:"name",label:"Name",class:"title"},{field:"email",label:"Email",class:"title"},{field:"status",label:"Status",class:"title"},{field:"plan",label:"Plan",class:"title"},{field:"industry_type",label:"Industry",class:"title"},{field:"assigned",label:"Assigned",class:"title"},{label:"action",class:"title",actions:[{icon:"trash",class:"main-color",fun:(u=(0,a.Z)(function*(f){return yield m.tenantService.delete(f,"delete-role")}),function(C){return u.apply(this,arguments)})},{icon:"pen-to-square",class:"main-color",fun:function(){var u=(0,a.Z)(function*(f){return yield m.tenantService.openDialogToUpdateUser(f)});return function(C){return u.apply(this,arguments)}}()}]}],Request:r.v.api.get};var u}},7155:(d,s,n)=>{n.d(s,{d:()=>r});var a=n(5946);const r=()=>[{optionLabel:"label",optionValue:"field",key:"sort_by",placeholder:"Sort By",data:[{label:"name",field:"name"},{label:"Status",field:"status"},{label:"Plan",field:"plan"},{label:"Assigned",field:"assigned"},{label:"Status",field:"status"}]},{optionLabel:"label",optionValue:"field",key:"sort_type",placeholder:"Sort Type",data:[{label:a.q.asc,field:a.q.asc},{label:a.q.desc,field:a.q.desc}]}]},9140:(d,s,n)=>{n.r(s),n.d(s,{TenantsModule:()=>k});var a=n(6814),r=n(2954),t=n(9291),v=n(7155),m=n(2341),u=n(9795),f=n(2897),C=n(5219);let P=(()=>{class e{constructor(){}getTenantForHostname(o){return o.split(".")[0]}getTenant(){return this.getTenantForHostname(location.hostname)}addTenantToHeaders(o){return o.append("X-Tenant-ID",this.getTenant())}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=n(4779),x=n(2377),b=n(359),M=n(4811),O=n(5077),_=n(7824),y=n(5769),E=n(3838),A=n(749);function Z(e,l){1&e&&t.GkF(0)}function F(e,l){1&e&&t.GkF(0)}function S(e,l){1&e&&t.GkF(0)}function D(e,l){if(1&e){const o=t.EpF();t.TgZ(0,"div")(1,"app-dropdown",6),t.NdJ("onDropDownChange",function(p){t.CHM(o);const c=t.oxw();return t.KtG(c.exports(p))}),t.qZA()()}if(2&e){const o=l.fileConfig;t.xp6(1),t.Q6J("data",o.export.type)("optionLabel","key")("optionValue","value")("placeholder","export")}}function J(e,l){if(1&e&&(t.TgZ(0,"p",9),t._uU(1),t.qZA()),2&e){const o=t.oxw(2);t.xp6(1),t.hij(" ",o.fileConfig.import.error," ")}}function L(e,l){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"ukt-file-upload",7),t.YNc(2,J,2,1,"p",8),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("draggable",o.draggable)("fileConfig",o.fileConfig.import),t.xp6(1),t.Q6J("ngIf",o.fileConfig.import.error)}}function R(e,l){if(1&e){const o=t.EpF();t.TgZ(0,"div")(1,"app-button",10),t.NdJ("click",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.printPage())}),t.qZA()()}if(2&e){const o=t.oxw();t.xp6(1),t.Q6J("icon",o.icon.PRINT)("text","print")}}const U=function(e){return{fileConfig:e}};let B=(()=>{class e{constructor(o){this.FileService=o,this.option=_.o,this.options=[_.o.export,_.o.import,_.o.print],this.draggable=!1,this.icon=C.dv}ngOnChanges(o){}exports(o){const i=this.data.data.map(p=>this.data.tableConfig.cols.reduce((c,g)=>(g.field&&(c[g.field]=p[g.field]),c),{}));switch(o.value){case"Pdf":this.FileService.exportPdf(this.fileConfig.fileName,i,this.data.tableConfig.cols);break;case"Csv":this.FileService.exportCsv(this.fileConfig.fileName,i,this.data.tableConfig.cols);break;case"Exil":this.FileService.exportExcel(this.fileConfig.fileName,i)}}printPage(){this.FileService.print()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(y.I))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-file"]],inputs:{fileConfig:"fileConfig",options:"options",data:"data",draggable:"draggable"},features:[t.TTD],decls:10,vars:6,consts:[[1,"d-flex","justify-content-end","gap-3","mb-3"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["export",""],["import",""],["print",""],[3,"data","optionLabel","optionValue","placeholder","onDropDownChange"],[3,"draggable","fileConfig"],["class","text-danger p-2",4,"ngIf"],[1,"text-danger","p-2"],[3,"icon","text","click"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0),t.YNc(1,Z,1,0,"ng-container",1),t.YNc(2,F,1,0,"ng-container",2),t.YNc(3,S,1,0,"ng-container",2),t.qZA(),t.YNc(4,D,2,4,"ng-template",null,3,t.W1O),t.YNc(6,L,3,3,"ng-template",null,4,t.W1O),t.YNc(8,R,2,2,"ng-template",null,5,t.W1O)),2&o){const p=t.MAs(5),c=t.MAs(7),g=t.MAs(9);t.xp6(1),t.Q6J("ngTemplateOutlet",i.fileConfig.fileOption.includes(i.option.export)?p:null)("ngTemplateOutletContext",t.VKq(4,U,i.fileConfig)),t.xp6(1),t.Q6J("ngTemplateOutlet",i.fileConfig.fileOption.includes(i.option.import)?c:null),t.xp6(1),t.Q6J("ngTemplateOutlet",i.fileConfig.fileOption.includes(i.option.print)?g:null)}},dependencies:[a.O5,a.tP,E.J,h.r,A.Y]}),e})();var T=n(3999);let N=(()=>{class e{constructor(o){this.tenantService=o,this.fileConfig=(0,f.k)(),this.tableConfig=(0,u.L)(this),this.filtersConfig=(0,m.a)(),this.sortConfig=(0,v.d)(),this.icon=C.dv}create(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(P))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tenant-table"]],decls:19,vars:12,consts:[[1,"d-flex","justify-content-between","pb-5"],[1,"title"],["text","new",3,"icon","click"],[1,"d-flex","justify-content-end"],[3,"data","fileConfig"],["file",""],[1,"d-flex","justify-content-between"],[3,"SortConfig"],["sort",""],[3,"config"],["filter",""],[1,"table"],[3,"tableConfig","pagination","filter","sort"],["table",""],[1,"d-flex","align-items-center","justify-content-center"],["pagination",""]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"h5",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"app-button",2),t.NdJ("click",function(){return i.create()}),t.qZA()(),t.TgZ(5,"div",3),t._UZ(6,"app-file",4,5),t.qZA(),t.TgZ(8,"div",6),t._UZ(9,"ukt-sort",7,8)(11,"ukt-filter",9,10),t.qZA(),t.TgZ(13,"div",11),t._UZ(14,"app-table",12,13),t.qZA(),t.TgZ(16,"div",14),t._UZ(17,"ukt-pagination",null,15),t.qZA()),2&o){const p=t.MAs(10),c=t.MAs(12),g=t.MAs(15),G=t.MAs(18);t.xp6(2),t.Oqu(t.lcZ(3,10,"tenant_list")),t.xp6(2),t.Q6J("icon",i.icon.PLUS),t.xp6(2),t.Q6J("data",g)("fileConfig",i.fileConfig),t.xp6(3),t.Q6J("SortConfig",i.sortConfig),t.xp6(2),t.Q6J("config",i.filtersConfig),t.xp6(3),t.Q6J("tableConfig",i.tableConfig)("pagination",G)("filter",c)("sort",p)}},dependencies:[h.r,x.a,b.Q,M.x,O.z,B,T.X$],styles:['@import"https://fonts.googleapis.com/css2?family=Roboto&display=swap";[_nghost-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   .table-head[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:var(--white);color:#979797;font-size:1.5rem;font-weight:400!important;min-width:180px!important}[_nghost-%COMP%]   .t-body[_ngcontent-%COMP%]{font-family:var(--Roboto);font-size:14px;color:#2e2e2e;background-color:var(--lightGray)}[_nghost-%COMP%]   .t-body[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{color:var(--mainColor)!important}[_nghost-%COMP%]   .statue[_ngcontent-%COMP%]{background-color:#f7d6d3;color:#0080ff}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]{width:150px}[_nghost-%COMP%]   .action[_ngcontent-%COMP%]{width:30px;font-size:1.4rem}[_nghost-%COMP%]   .Assigned-employee[_ngcontent-%COMP%]{width:180px;min-width:180px}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.4rem}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:1.4rem}[_nghost-%COMP%]   .modal-content[_ngcontent-%COMP%]{padding:.5rem}[_nghost-%COMP%]   .modal-content[_ngcontent-%COMP%]   .title-form[_ngcontent-%COMP%]{font-size:1.9rem;color:var(--mainColor)}@media screen and (max-width: 992px){[_nghost-%COMP%]   .actions[_ngcontent-%COMP%]{width:auto}}']}),e})();const W=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tenants"]],decls:3,vars:0,consts:[[1,"col"],[1,"page-card","bg-white"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-tenant-table"),t.qZA()())},dependencies:[N],styles:["[_nghost-%COMP%]   .tenant[_ngcontent-%COMP%]{background-color:var(--white)!important}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.Bz.forChild(W),r.Bz]}),e})();var I=n(8096),Q=n(1019),z=n(1471),Y=n(6145),K=n(2115),j=n(1890),X=n(4413);let k=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,w,j.f,z.X,K.u,I.J,Q.i,Y.n,X.e,T.aw]}),e})()}}]);