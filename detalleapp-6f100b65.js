import{_ as d}from"./logo-80a8da4e.js";import{_ as r,r as l,o as i,c as n,b as s,a as e,w as _,d as m,f as h,t as c}from"./index-4ea004f4.js";import{F as v}from"./footer-7ae1119f.js";const p={},g={class:"sticky-top"},u=h('<div class="header bg-white"><div class="container"><div class="row align-items-center"><div class="col-md-2"><img src="'+d+'" alt="logo" class="instituto img-fluid" width="80px"></div><div class="col-md-10"><h1 class="display-6"> Detalles de Aplicacion </h1></div></div></div></div>',1),f={class:"navbar navbar-expand-lg navbar-dark bg-dark"},b={class:"container"},$={class:"navbar-nav"},k={class:"nav-item"};function w(a,t){const o=l("router-link");return i(),n("header",g,[u,s("nav",f,[s("div",b,[s("ul",$,[s("li",k,[e(o,{to:"/aplicacion",class:"nav-link"},{default:_(()=>[m("APLICACION")]),_:1})])])])])])}const x=r(p,[["render",w]]),N={class:"container mt-4"},y={class:"row"},C={class:"col-lg-6 offset-lg-3"},D={class:"card"},I={class:"row g-0"},S={class:"col-md-6"},V=["src"],A={class:"col-md-6"},B={class:"card-body"},O={class:"card-title"},F={class:"card-text"},j={data(){return{nombre:this.$route.params.nombre,image:null}},created(){const a=localStorage.getItem("imageData");a&&(this.image=JSON.parse(a))}},L=Object.assign(j,{__name:"detalleapp",setup(a){return(t,o)=>(i(),n("div",null,[e(x),s("div",N,[s("div",y,[s("div",C,[s("div",D,[s("div",I,[s("div",S,[s("img",{src:`/src/assets/${t.image.url}`,class:"card-img-top",alt:"Imagen"},null,8,V)]),s("div",A,[s("div",B,[s("h2",O,c(t.image.name),1),s("p",F,c(t.image.descripcion),1)])])])])])])]),e(v)]))}});export{L as default};
