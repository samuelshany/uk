"use strict";(self.webpackChunkkey=self.webpackChunkkey||[]).push([[5130],{5130:(M,r,s)=>{s.r(r),s.d(r,{DownloadsModule:()=>A});var d=s(6814),a=s(8209),o=s(9291),c=s(3885),i=s(3999);function p(t,e){if(1&t){const n=o.EpF();o.TgZ(0,"div",6),o._uU(1," > "),o.TgZ(2,"app-image-card",7),o.NdJ("click",function(){const T=o.CHM(n).$implicit,L=o.oxw();return o.KtG(L.download(T.url))}),o.qZA()()}if(2&t){const n=e.$implicit;o.xp6(2),o.Q6J("title",n.name)("src","assets/icons-forms/file-download.png")}}function f(t,e){1&t&&(o.TgZ(0,"h3",8),o._uU(1,"No Data found"),o.qZA())}let g=(()=>{class t{constructor(n){this.route=n,this.title="",this.data=[]}ngOnInit(){this.route.data.subscribe(n=>{this.data=n.downloads.data,this.title=n.downloads.module})}download(n){}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(a.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-download"]],decls:8,vars:5,consts:[[1,"header","row","justify-content-between","align-items-center"],["routerLink","/key/data-center/downloads",1,"title","col-md-6","pointer"],[1,"fa-solid","fa-arrow-left","me-2"],[1,"row"],["class","col-md-4 col-sm-6 col-lg-4 my-2",4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],[1,"col-md-4","col-sm-6","col-lg-4","my-2"],[3,"title","src","click"],[1,"text-center"]],template:function(n,l){1&n&&(o.TgZ(0,"div",0)(1,"h5",1),o._UZ(2,"i",2),o._uU(3),o.ALo(4,"translate"),o.qZA()(),o.TgZ(5,"div",3),o.YNc(6,p,3,2,"div",4),o.YNc(7,f,2,0,"h3",5),o.qZA()),2&n&&(o.xp6(3),o.hij("",o.lcZ(4,3,l.title)," "),o.xp6(3),o.Q6J("ngForOf",l.data),o.xp6(1),o.Q6J("ngIf",0==(null==l.data?null:l.data.length)))},dependencies:[d.sg,d.O5,a.rH,c.A,i.X$]}),t})();var w=s(5219);const m_get="data-center/modules";var h=s(9862);let u=(()=>{class t{constructor(n){this.http=n}getAllModules(){return this.http.get(m_get)}getDownloadsForModule(n){return this.http.get(`${m_get}/${n}`)}}return t.\u0275fac=function(n){return new(n||t)(o.LFG(h.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function v(t,e){if(1&t&&(o.TgZ(0,"div",4),o._UZ(1,"app-image-card",5),o.qZA()),2&t){const n=e.$implicit;o.xp6(1),o.Q6J("title",n.name)("src","assets/icons-forms/forms.png")("routerLink","/key/data-center/downloads/"+n.id)}}const y=[{path:"",component:(()=>{class t{constructor(n){this.downloadsService=n,this.showImportForm=!1,this.isLoading=!1,this.importError=[],this.icon=w.dv,this.data=[]}ngOnInit(){this.downloadsService.getAllModules().subscribe(n=>{this.data=n.modules})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(u))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-list"]],decls:6,vars:4,consts:[[1,"d-flex","justify-content-between","align-items-center"],[1,"title"],[1,"row"],["class","col-md-4 col-sm-6 my-2",4,"ngFor","ngForOf"],[1,"col-md-4","col-sm-6","my-2"],[3,"title","src","routerLink"]],template:function(n,l){1&n&&(o.TgZ(0,"div",0)(1,"h5",1),o._uU(2),o.ALo(3,"translate"),o.qZA()(),o.TgZ(4,"div",2),o.YNc(5,v,2,3,"div",3),o.qZA()),2&n&&(o.xp6(2),o.Oqu(o.lcZ(3,2,"downloadable_modules_list")),o.xp6(3),o.Q6J("ngForOf",l.data))},dependencies:[d.sg,a.rH,c.A,i.X$]}),t})()},{path:":id",component:g,resolve:{downloads:(t,e)=>(0,o.f3M)(u).getDownloadsForModule(t.params.id)}}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[a.Bz.forChild(y),a.Bz]}),t})();var D=s(1383),Z=s(1890),F=s(1471);let A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.ez,C,Z.f,i.aw,D.m,F.X]}),t})()}}]);