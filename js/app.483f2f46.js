(function(t){function e(e){for(var n,i,s=e[0],o=e[1],l=e[2],b=0,d=[];b<s.length;b++)i=s[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==c[o]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},c={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/TouristAttractionInTaiwan/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0299":function(t,e,a){},"02e8":function(t,e,a){"use strict";a("eede")},1:function(t,e){},2817:function(t,e,a){},2824:function(t,e,a){"use strict";a("7a18")},"376e":function(t,e,a){},"3ab6":function(t,e,a){"use strict";a("376e")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("b107"),a("cd74");var n=a("7b17"),c=a("7a23"),r={class:"navbar navbar-light bg-warning py-4 mb-4"},i={class:"container-fluid flex-column justify-content-center flex-lg-row justify-content-lg-between"},s=Object(c["f"])("a",{class:"navbar-brand h1 fw-bold",href:"#"},[Object(c["f"])("span",{class:"text-logo"},"Taiwan"),Object(c["f"])("span",{class:"text-white"}," GO")],-1),o={class:"w-auto input-group mx-auto"},l=Object(c["f"])("button",{class:"btn btn-white text-danger dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," 熱門景點 ",-1),u=Object(c["f"])("li",null,[Object(c["f"])("a",{class:"dropdown-item",href:"#","data-type":"ScenicSpot"},"熱門景點")],-1),b=Object(c["f"])("li",null,[Object(c["f"])("a",{class:"dropdown-item",href:"#","data-type":"Activity"},"熱門活動")],-1),d=[u,b],f=Object(c["f"])("i",{class:"bi bi-geo-alt fs-5 px-3 fw-bolder"},null,-1),p=[f],j=Object(c["g"])('<footer class="mt-5 bg-warning container-fluid p-4"><div class="row"><div class="col-12 small fw-bold d-flex flex-row justify-content-center"><ul class="list-unstyled mx-md-4 mx-2"><li class="my-4"><a href="#" class="text-decoration-none text-dark">關於 Taiwan GO</a></li></ul><ul class="list-unstyled mx-md-4 mx-2"><li class="my-4"><a href="#" class="text-decoration-none text-dark">投稿說明</a></li><li class="my-4"><a href="#" class="text-decoration-none text-dark">版權所有</a></li></ul><ul class="list-unstyled mx-md-4 mx-2"><li class="my-4"><a href="#" class="text-decoration-none text-dark">最新消息</a></li><li class="my-4"><a href="#" class="text-decoration-none text-dark">展覽資訊</a></li><li class="my-4"><a href="#" class="text-decoration-none text-dark">景點告示</a></li></ul><ul class="list-unstyled mx-md-4 mx-2"><li class="my-4"><a href="#" class="text-decoration-none text-dark">友善旅遊</a></li></ul><ul class="list-unstyled mx-4"><li class="my-4"><a href="#" class="text-decoration-none text-dark">活動行事曆</a></li></ul></div><div class="col-6 offset-md-2 text-start"><a class="h2 text-decoration-none fw-bold" href="#"><span class="text-logo">Taiwan</span><span class="text-white"> GO</span></a></div></div></footer>',1);function O(t,e,a,n,u,b){var f=Object(c["D"])("router-view");return Object(c["w"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("nav",r,[Object(c["f"])("div",i,[s,Object(c["f"])("div",o,[Object(c["K"])(Object(c["f"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return n.searchLocation=t}),type:"text",class:"form-control rounded-end rounded-pill border-end border-danger",placeholder:"你想去哪裡？","aria-label":"你想去哪裡？"},null,512),[[c["H"],n.searchLocation]]),l,Object(c["f"])("ul",{class:"dropdown-menu dropdown-menu-end",onClick:e[1]||(e[1]=Object(c["L"])((function(){return n.changeType&&n.changeType.apply(n,arguments)}),["prevent"]))},d),Object(c["f"])("button",{class:"btn btn-success rounded-start rounded-pill",type:"button",onClick:e[2]||(e[2]=Object(c["L"])((function(){return n.toSearch&&n.toSearch.apply(n,arguments)}),["prevent"]))},p)])])]),Object(c["i"])(f),j],64)}a("ac1f"),a("841c");var m=a("5502"),v=a("6c02"),h={name:"App",setup:function(){var t=Object(v["c"])(),e=Object(m["b"])(),a=Object(c["b"])({get:function(){return e.state.search.city},set:function(t){e.commit("changeSearchCity",t)}}),n=Object(c["b"])((function(){return e.state.search.type})),r=function(t){e.commit("changeSearchType",t.target.dataset.type)},i=function(){e.dispatch("getSearchData"),t.push("/search")};return{searchLocation:a,searchType:n,changeType:r,toSearch:i}}},y=(a("8031"),a("6b0d")),g=a.n(y);const w=g()(h,[["render",O]]);var x=w,S={class:"container"};function C(t,e,a,n,r,i){var s=Object(c["D"])("News"),o=Object(c["D"])("Banner"),l=Object(c["D"])("RandomTwoCity"),u=Object(c["D"])("PopularAttraction"),b=Object(c["D"])("Comment"),d=Object(c["D"])("ActivityWarning"),f=Object(c["D"])("Post");return Object(c["w"])(),Object(c["e"])(c["a"],null,[Object(c["i"])(s,{class:"my-5"}),Object(c["i"])(o),Object(c["f"])("div",S,[Object(c["i"])(l,{class:"my-5"}),Object(c["i"])(u,{class:"my-5"}),Object(c["i"])(b,{class:"my-5"}),Object(c["i"])(d,{class:"my-5"}),Object(c["i"])(f,{class:"my-5"})])],64)}var D=function(t){return Object(c["z"])("data-v-92564e16"),t=t(),Object(c["x"])(),t},T={type:"button",class:"btn btn-danger text-nowrap"},k=D((function(){return Object(c["f"])("i",{class:"bi bi-exclamation-triangle-fill fs-5 pe-2"},null,-1)}));function P(t,e,a,n,r,i){var s=Object(c["D"])("swiper-slide"),o=Object(c["D"])("swiper");return Object(c["w"])(),Object(c["d"])(o,{slidesPerView:"auto",spaceBetween:20,class:"myNewsSwiper"},{default:Object(c["J"])((function(){return[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["C"])(n.slides,(function(t){return Object(c["w"])(),Object(c["d"])(s,{key:t.ID},{default:Object(c["J"])((function(){return[Object(c["f"])("button",T,[k,Object(c["h"])(" "+Object(c["F"])(t.Name),1)])]})),_:2},1024)})),128))]})),_:1})}var _=a("90ea"),A=a("a16a"),I=a("6d3b"),R=a("5dc8");I["a"].use([R["a"]]);var $={components:{Swiper:_["a"],SwiperSlide:A["a"]},setup:function(){var t=Object(m["b"])();t.dispatch("getCancelActivities");var e=Object(c["b"])((function(){return t.state.cancelActivities}));return{slides:e}}};a("96f0");const L=g()($,[["render",P],["__scopeId","data-v-92564e16"]]);var J=L,N={class:"banner"},F={href:"#"},B=["src","alt"];function E(t,e,a,n,r,i){var s=Object(c["D"])("swiper-slide"),o=Object(c["D"])("swiper");return Object(c["w"])(),Object(c["e"])("div",N,[Object(c["i"])(o,{class:"myBannerSwiper",loop:!0,slidesPerView:1.2,spaceBetween:20,centeredSlides:!0,observer:!0,pagination:{clickable:!0},autoplay:{delay:1e5,disableOnInteraction:!1}},{default:Object(c["J"])((function(){return[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["C"])(n.slides,(function(t){return Object(c["w"])(),Object(c["d"])(s,{key:t.location},{default:Object(c["J"])((function(){return[Object(c["f"])("a",F,[Object(c["f"])("img",{class:"rounded-3 img-fluid",src:t.picture,alt:t.pictureDescription},null,8,B)])]})),_:2},1024)})),128))]})),_:1},8,["slidesPerView"])])}var V=a("d17a"),G=a("8343");I["a"].use([V["a"],R["a"],G["a"]]);var U={components:{Swiper:_["a"],SwiperSlide:A["a"]},setup:function(){var t=Object(c["A"])([{location:"Kaohsiung",picture:"./assets/home/banner2.png",pictureDescription:"駁二特區"},{location:"Tainan",picture:"./assets/home/banner3.png",pictureDescription:"台南奇美博物館"},{location:"TaitungCounty",picture:"./assets/home/banner1.png",pictureDescription:"110年夜訪小野柳環教課程活動"}]);return{slides:t}}};a("aa65");const M=g()(U,[["render",E],["__scopeId","data-v-b5582f98"]]);var z=M,H=function(t){return Object(c["z"])("data-v-323fa7be"),t=t(),Object(c["x"])(),t},K={class:"RandomTwoCity py-3"},W=H((function(){return Object(c["f"])("h4",{class:"fw-bold lh-lg mb-5"},[Object(c["h"])(" 從台灣發現更多美好"),Object(c["f"])("br"),Object(c["h"])(" 兩大城市 教你拍起 EMO 圖！ ")],-1)})),q={class:"row"},Y={class:"card bg-warning border-0 mb-3 shadow"},Q=["src","alt"],X={class:"card-body p-4"},Z={class:"card-title fw-bold mb-4"},tt={class:"card-text text-end"},et={class:"btn btn-sm bg-transparent text-secondary ps-2"};function at(t,e,a,n,r,i){return Object(c["w"])(),Object(c["e"])("div",K,[W,Object(c["f"])("div",q,[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["C"])(n.cities,(function(t){return Object(c["w"])(),Object(c["e"])("div",{class:"col-12 col-md-6",key:t.ID},[Object(c["f"])("div",Y,[Object(c["f"])("img",{src:t.Picture.PictureUrl1,class:"card-img-top",alt:t.Picture.PictureDescription1},null,8,Q),Object(c["f"])("div",X,[Object(c["f"])("h5",Z," 2021 "+Object(c["F"])(t.City)+"旅遊景點 一日遊 ",1),Object(c["f"])("p",tt,[Object(c["f"])("button",et," 一起了解，你從未發現"+Object(c["F"])(t.City),1)])])])])})),128))])])}var nt={name:"Random",setup:function(){var t=Object(m["b"])(),e=Object(c["b"])((function(){return t.state.randomTwoCity}));return{cities:e}}};a("6236");const ct=g()(nt,[["render",at],["__scopeId","data-v-323fa7be"]]);var rt=ct,it=function(t){return Object(c["z"])("data-v-41309fb2"),t=t(),Object(c["x"])(),t},st={class:"PopularAttraction"},ot=Object(c["g"])('<div class="title d-flex justify-content-between align-items-center position-relative" data-v-41309fb2><span class="h4 text-start" data-v-41309fb2>人氣景點探索</span><span class="position-absolute navigation" data-v-41309fb2><button class="btn btn-success rounded-circle navigation-button-prev text-center align-middle disabled" data-v-41309fb2><i class="bi bi-chevron-left" data-v-41309fb2></i></button><span class="px-4" data-v-41309fb2>1/4</span><button class="btn btn-success rounded-circle navigation-button-next" data-v-41309fb2><i class="bi bi-chevron-right" data-v-41309fb2></i></button></span></div>',1),lt=["src","alt"],ut={class:"swiper-slide-title position-absolute px-2 py-4 rounded-start text-nowrap h4 text-dark"},bt={class:"my-3 fw-lighter"},dt=it((function(){return Object(c["f"])("div",{class:"d-grid gap-2 col-12 col-md-4 mx-auto"},[Object(c["f"])("button",{class:"btn btn-success btn py-2"},[Object(c["f"])("span",{class:"px-3"},"了解更多詳情"),Object(c["f"])("i",{class:"bi bi-arrow-right fw-bold"})])],-1)}));function ft(t,e,a,n,r,i){var s=Object(c["D"])("router-link"),o=Object(c["D"])("swiper-slide"),l=Object(c["D"])("swiper");return Object(c["w"])(),Object(c["e"])("div",st,[ot,Object(c["i"])(l,{breakpoints:{375:{slidesPerView:1.6,spaceBetween:15},768:{slidesPerView:3,spaceBetween:25},1024:{slidesPerView:4,spaceBetween:35}},loop:!0,ref:"attractionSwiper",class:"mySwiper my-5"},{default:Object(c["J"])((function(){return[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["C"])(n.slides,(function(t,e){return Object(c["w"])(),Object(c["d"])(o,{class:"position-relative",key:t.ID,"data-id":t.ID},{default:Object(c["J"])((function(){return[Object(c["i"])(s,{to:{name:"Location",params:{id:t.ID}}},{default:Object(c["J"])((function(){return[Object(c["f"])("img",{class:"rounded-3 img-fluid",src:t.Picture.PictureUrl1,alt:t.Picture.PictureDescription1},null,8,lt),Object(c["f"])("span",ut,Object(c["F"])(t.City.substring(0,2)),1)]})),_:2},1032,["to"]),Object(c["f"])("p",bt,Object(c["F"])(t.Name),1)]})),_:2},1032,["data-id"])})),128))]})),_:1},8,["breakpoints"]),dt])}a("41fa");var pt=a("75ac");I["a"].use([V["a"],R["a"],pt["a"],G["a"]]);var jt={components:{Swiper:_["a"],SwiperSlide:A["a"]},setup:function(){var t=Object(m["b"])();t.dispatch("getCountryTopRecommand");var e=Object(c["b"])((function(){return t.state.countryTopRecommand}));return{slides:e}}};a("a6ab");const Ot=g()(jt,[["render",ft],["__scopeId","data-v-41309fb2"]]);var mt=Ot,vt=function(t){return Object(c["z"])("data-v-c492da6e"),t=t(),Object(c["x"])(),t},ht={class:"comments py-5"},yt=Object(c["g"])('<div class="position-relative mb-5" data-v-c492da6e><span class="h4" data-v-c492da6e>〔 投稿專區 〕</span><span class="position-absolute navigation" data-v-c492da6e><button class="btn btn-success rounded-circle navigation-button-prev text-center align-middle disabled" data-v-c492da6e><i class="bi bi-chevron-left" data-v-c492da6e></i></button><span class="px-4" data-v-c492da6e>1/4</span><button class="btn btn-success rounded-circle navigation-button-next" data-v-c492da6e><i class="bi bi-chevron-right" data-v-c492da6e></i></button></span></div>',1),gt=["src"],wt={class:"border border-danger text-start my-4 p-3 rounded-2"},xt={class:"h5 text-truncate fw-bold"},St=vt((function(){return Object(c["f"])("span",{class:"h4 pe-3"},"Q",-1)})),Ct={class:"text-truncate"},Dt=vt((function(){return Object(c["f"])("div",{class:"text-end"},[Object(c["f"])("button",{class:"btn text-danger p-0"},[Object(c["f"])("i",{class:"bi bi-arrow-right-circle h3"})])],-1)})),Tt=vt((function(){return Object(c["f"])("div",{class:"d-grid gap-2 col-12 col-md-4 mx-auto"},[Object(c["f"])("button",{class:"btn btn-success btn py-2"},[Object(c["f"])("span",{class:"px-3"},"了解更多詳情"),Object(c["f"])("i",{class:"bi bi-arrow-right fw-bold"})])],-1)}));function kt(t,e,a,n,r,i){var s=Object(c["D"])("swiper-slide"),o=Object(c["D"])("swiper");return Object(c["w"])(),Object(c["e"])("div",ht,[yt,Object(c["i"])(o,{breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:30}},loop:!0,class:"mySwiper mb-5"},{default:Object(c["J"])((function(){return[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["C"])(r.comments,(function(t){return Object(c["w"])(),Object(c["d"])(s,{key:t.id},{default:Object(c["J"])((function(){return[Object(c["f"])("img",{class:"rounded-3 img-fluid",src:t.picture,alt:""},null,8,gt),Object(c["f"])("div",wt,[Object(c["f"])("p",xt,[St,Object(c["h"])(Object(c["F"])(t.title),1)]),Object(c["f"])("p",Ct,Object(c["F"])(t.content),1),Dt])]})),_:2},1024)})),128))]})),_:1}),Tt])}I["a"].use([V["a"],R["a"],pt["a"],G["a"]]);var Pt={components:{Swiper:_["a"],SwiperSlide:A["a"]},data:function(){return{comments:[{id:1,title:"關於墾丁回憶",content:"人與景點猶如夏天般的炙熱，是我所熟悉墾丁。",picture:"./assets/home/nathaniel-yeo-X7TmA-H8dbs-unsplash.jpg"},{id:2,title:"對於台北巷弄早午餐？",content:"台北的巷弄藏著不同風格早午餐，是我每次來到台北的動力，穿越過蜿蜒小弄裡，鋪陳的洗石子地磚讓我們緩慢了腳步，時間，在這裡似乎也躡起了腳尖輕聲慢走。",picture:"./assets/home/joyce-romero-okhOnEMWkVU-unsplash.jpg"},{id:3,title:"廟的文化",content:"每當去不同的地方，就一定要到附近的廟宇感受不同的背景時空及信仰。",picture:"./assets/home/charles-postiaux-TnUG2pWraPE-unsplash.jpg"}]}}};a("2824");const _t=g()(Pt,[["render",kt],["__scopeId","data-v-c492da6e"]]);var At=_t,It=function(t){return Object(c["z"])("data-v-5d0f24c9"),t=t(),Object(c["x"])(),t},Rt={class:"activityWarning"},$t=It((function(){return Object(c["f"])("div",{class:"h4 mb-5"},"〔 活動告示 〕",-1)})),Lt={class:"list-group"},Jt={class:"row align-items-center g-3"},Nt={class:"col-5 col-xl-3 fs-4 fw-bold"},Ft={class:"col-7 col-xl-3"},Bt={class:"col-12 col-xl-6 text-start px-3"},Et={class:"text-break mt-2"},Vt=It((function(){return Object(c["f"])("div",{class:"d-grid gap-2 col-12 col-xl-4 mx-auto mt-4"},[Object(c["f"])("button",{class:"btn btn-success btn py-2"},[Object(c["f"])("span",{class:"px-3"},"了解更多詳情"),Object(c["f"])("i",{class:"bi bi-arrow-right fw-bold"})])],-1)}));function Gt(t,e,a,n,r,i){return Object(c["w"])(),Object(c["e"])("div",Rt,[$t,Object(c["f"])("ul",Lt,[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["C"])(n.events,(function(t,e){return Object(c["w"])(),Object(c["e"])("li",{class:"list-group-item bg-warning border-0 container py-4 mb-3",style:{"--bs-bg-opacity":"0.3"},key:t.ID},[Object(c["f"])("div",Jt,[Object(c["f"])("div",Nt,Object(c["F"])(new Date(t.StartTime).toLocaleDateString("ko-KR",{year:"numeric",month:"numeric",day:"numeric"})),1),Object(c["f"])("div",Ft,[Object(c["f"])("span",{class:Object(c["o"])(["text-white btn-sm rounded-1 px-5 py-2 activityWarning-alert",e%3===0?"bg-danger":"",e%3===1?"bg-info":"",e%3===2?"bg-warning":""])},"疫情說明",2)]),Object(c["f"])("div",Bt,[Object(c["f"])("div",null,Object(c["F"])(t.Name),1),Object(c["f"])("p",Et,Object(c["F"])(t.Description.substring(1,50))+"... ",1)])])])})),128))]),Vt])}var Ut={components:{},setup:function(){var t=Object(m["b"])();t.dispatch("getCancelActivities");var e=Object(c["b"])((function(){return t.state.cancelActivities}));return{events:e}}};a("9612");const Mt=g()(Ut,[["render",Gt],["__scopeId","data-v-5d0f24c9"]]);var zt=Mt,Ht={class:"container"},Kt=Object(c["g"])('<div class="row justify-content-center" data-v-7cd76f04><div class="col-12 col-md-5" data-v-7cd76f04><div class="card border-0 bg-warning p-4" data-v-7cd76f04><div class="card-body" data-v-7cd76f04><p class="card-title h4 fw-bold mb-5" data-v-7cd76f04>募集</p><span class="h5 card-subtitle fw-bold" data-v-7cd76f04>歡迎投稿 讓台灣更美好</span><p class="my-4 text-start" data-v-7cd76f04> 號召熱愛台灣的旅遊人，需要你們熱情投稿來創造台灣旅遊勝地。台灣有許多未被發現美好景點，不管是鄉村、網美以及廟宇的景點等等，都需要你們一起分享！ </p><div class="d-grid gap-2 col-12 mx-auto" data-v-7cd76f04><button class="btn btn-success btn py-2" data-v-7cd76f04><span class="px-3" data-v-7cd76f04>了解更多詳情</span><i class="bi bi-arrow-right fw-bold" data-v-7cd76f04></i></button></div></div></div></div></div>',1),Wt=[Kt];function qt(t,e){return Object(c["w"])(),Object(c["e"])("div",Ht,Wt)}a("3ab6");const Yt={},Qt=g()(Yt,[["render",qt],["__scopeId","data-v-7cd76f04"]]);var Xt=Qt,Zt={name:"Home",components:{News:J,Banner:z,RandomTwoCity:rt,PopularAttraction:mt,Comment:At,ActivityWarning:zt,Post:Xt}};const te=g()(Zt,[["render",C]]);var ee=te,ae=(a("b0c0"),function(t){return Object(c["z"])("data-v-653737aa"),t=t(),Object(c["x"])(),t}),ne={class:"search container-md"},ce=Object(c["g"])('<nav aria-label="breadcrumb" data-v-653737aa><ol class="breadcrumb" data-v-653737aa><li class="breadcrumb-item" data-v-653737aa><a href="#" class="text-dark text-decoration-none" data-v-653737aa>首頁</a></li><li class="breadcrumb-item active" aria-current="page" data-v-653737aa><span class="border-bottom border-dark" data-v-653737aa>人氣景點探索</span></li></ol></nav><h4 data-v-653737aa>景點列表</h4>',2),re={class:"options"},ie={class:"mt-4 d-flex flex-column flex-md-row justify-content-center align-items-center"},se={class:"dropdown m-2 my-lg-0"},oe=ae((function(){return Object(c["f"])("button",{class:"btn btn-outline-danger border-1 dropdown-toggle px-5",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"}," 地區 ",-1)})),le=["data-city"],ue={class:"row row-cols-1 row-cols-md-3 g-4 mt-5"},be={class:"card border-0"},de=["src","alt"],fe={class:"card-title position-absolute px-2 py-4 rounded-start text-nowrap h4"};function pe(t,e,a,n,r,i){var s=Object(c["D"])("router-link");return Object(c["w"])(),Object(c["e"])("div",ne,[ce,Object(c["f"])("h6",null,Object(c["F"])(n.location),1),Object(c["f"])("div",re,[Object(c["f"])("div",ie,[Object(c["f"])("div",se,[oe,Object(c["f"])("ul",{class:"dropdown-menu border-0","aria-labelledby":"dropdownMenuButton1",onClick:e[0]||(e[0]=Object(c["L"])((function(){return n.changeLocation&&n.changeLocation.apply(n,arguments)}),["prevent"]))},[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["C"])(n.countries,(function(t){return Object(c["w"])(),Object(c["e"])("li",{class:"text-center",key:t.value},[Object(c["f"])("a",{class:"dropdown-item rounded w-75 mx-auto",href:"#","data-city":t.name},Object(c["F"])(t.name),9,le)])})),128))])]),Object(c["f"])("div",{class:"d-flex flex-wrap justify-content-center align-items-center",onClick:e[1]||(e[1]=Object(c["L"])((function(){return n.changeType&&n.changeType.apply(n,arguments)}),["prevent"]))},[Object(c["f"])("div",{class:Object(c["o"])(["btn border-1 m-2","ScenicSpot"===n.searchType?"btn-danger":"btn-outline-danger"]),"data-type":"ScenicSpot"}," 熱門景點 ",2),Object(c["f"])("div",{class:Object(c["o"])(["btn border-1 m-2","Activity"===n.searchType?"btn-danger":"btn-outline-danger"]),"data-type":"Activity"}," 熱門活動 ",2)])])]),Object(c["f"])("div",ue,[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["C"])(n.SearchData,(function(t){return Object(c["w"])(),Object(c["e"])("div",{class:"col",key:t.ID},[Object(c["f"])("div",be,[Object(c["i"])(s,{to:{name:"Location",params:{id:t.ID}},class:"text-dark",style:{height:"300px",width:"100%"}},{default:Object(c["J"])((function(){return[Object(c["f"])("img",{src:t.Picture.PictureUrl1,alt:t.Picture.PictureDescription1,class:"rounded-3 w-100 h-100"},null,8,de),Object(c["f"])("span",fe,Object(c["F"])(t.City.substring(0,2)),1)]})),_:2},1032,["to"])])])})),128))])])}var je={name:"Search",setup:function(){var t=Object(m["b"])(),e=Object(c["b"])((function(){return t.state.country})),a=Object(c["b"])((function(){return t.state.search.city}));t.dispatch("getSearchData");var n=Object(c["b"])((function(){return t.state.search.data})),r=function(e){t.commit("changeSearchCity",e.target.dataset.city),t.dispatch("getSearchData")},i=Object(c["b"])((function(){return t.state.search.type})),s=function(e){t.commit("changeSearchType",e.target.dataset.type),t.dispatch("getSearchData")};return{countries:e,SearchData:n,location:a,changeLocation:r,searchType:i,changeType:s}}};a("02e8");const Oe=g()(je,[["render",pe],["__scopeId","data-v-653737aa"]]);var me=Oe,ve=function(t){return Object(c["z"])("data-v-28bb53fa"),t=t(),Object(c["x"])(),t},he={class:"container"},ye={class:"my-5"},ge=["src","alt"],we={class:"mt-5 text-start py-4"},xe=ve((function(){return Object(c["f"])("hr",null,null,-1)})),Se=ve((function(){return Object(c["f"])("h4",{class:"mt-5 text-start"},"如何前往？",-1)})),Ce={class:"text-start py-4 mb-5"};function De(t,e,a,n,r,i){return Object(c["w"])(),Object(c["e"])("div",he,[Object(c["f"])("h3",ye,"〔 "+Object(c["F"])(n.location.Name)+" 〕",1),Object(c["f"])("img",{src:n.location.Picture.PictureUrl1,class:"w-100 rounded-3",alt:n.location.Picture.PictureDescription1},null,8,ge),Object(c["f"])("p",we,Object(c["F"])(n.location.DescriptionDetail),1),xe,Se,Object(c["f"])("p",Ce,Object(c["F"])(n.location.TravelInfo),1)])}var Te={name:"Location",setup:function(){var t=Object(m["b"])(),e=Object(v["c"])();t.dispatch("getLocation",e.currentRoute.value.params.id);var a=Object(c["b"])((function(){return t.state.location}));return{location:a}}};a("8f37");const ke=g()(Te,[["render",De],["__scopeId","data-v-28bb53fa"]]);var Pe=ke,_e=[{path:"/",name:"Home",component:ee},{path:"/search",name:"Search",component:me},{path:"/location/:id",name:"Location",component:Pe}],Ae=Object(v["a"])({history:Object(v["b"])(),routes:_e}),Ie=Ae,Re=a("1da1"),$e=a("2909"),Le=(a("96cf"),a("99af"),a("d3b7"),a("159b"),a("caad"),a("2532"),a("1abe")),Je=a.n(Le),Ne=a("1132"),Fe=a.n(Ne),Be=Object(m["a"])({state:{api:{base_url:"https://ptx.transportdata.tw/MOTC/v2/Tourism",id:"0c672be3679e4f1e8441118a50a5d9f3",key:"ovFaA4lsqC5GyOKZHEEo_IS1Vt4"},search:{city:"",type:"ScenicSpot",data:[]},country:[{name:"臺北市",value:"Taipei"},{name:"新北市",value:"NewTaipei"},{name:"桃園市",value:"Taoyuan"},{name:"臺中市",value:"Taichung"},{name:"臺南市",value:"Tainan"},{name:"高雄市",value:"Kaohsiung"},{name:"新竹縣",value:"HsinchuCounty"},{name:"新竹市",value:"Hsinchu"},{name:"基隆市",value:"Keelung"},{name:"苗栗縣",value:"MiaoliCounty"},{name:"彰化縣",value:"ChanghuaCounty"},{name:"南投縣",value:"NantouCounty"},{name:"雲林縣",value:"YunlinCounty"},{name:"嘉義縣",value:"ChiayiCounty"},{name:"嘉義市",value:"Chiayi"},{name:"屏東縣",value:"PingtungCounty"},{name:"宜蘭縣",value:"YilanCounty"},{name:"花蓮縣",value:"HualienCounty"},{name:"臺東縣",value:"TaitungCounty"},{name:"澎湖縣",value:"PenghuCounty"},{name:"金門縣",value:"KinmenCounty"},{name:"連江縣",value:"LienchiangCounty"}],cancelActivities:[],countryTopRecommand:[],randomTwoCity:[],location:{}},getters:{headers:function(t){var e=(new Date).toUTCString(),a=Je()("x-date: "+e,t.api.key),n=Fe.a.stringify(a),c={Authorization:'hmac username="'.concat(t.api.id,'", algorithm="hmac-sha1", headers="x-date", signature="').concat(n,'"'),"x-date":e};return c}},mutations:{getCancelActivities:function(t,e){t.cancelActivities=e},getCountryTopRecommand:function(t,e){t.countryTopRecommand=[].concat(Object($e["a"])(t.countryTopRecommand),[e]),"臺北市"!==e.City&&"高雄市"!==e.City||(t.randomTwoCity=[].concat(Object($e["a"])(t.randomTwoCity),[e]))},changeSearchCity:function(t,e){t.search.city=e},changeSearchType:function(t,e){t.search.type=e},getSearchData:function(t,e){t.search.data=[],t.search.data=e},getLocation:function(t,e){t.location=e}},actions:{getCountryTopRecommand:function(t){var e=t.commit,a=t.state,n=t.getters;a.country.forEach(function(){var t=Object(Re["a"])(regeneratorRuntime.mark((function t(c){var r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="".concat(a.api.base_url,"/ScenicSpot/").concat(c.value,"?$select=ID,Name,City,Picture&$filter=Picture/PictureUrl1 ne null&$top=1&$format=JSON"),t.next=3,fetch(r,{method:"GET",headers:n.headers});case 3:return i=t.sent,t.next=6,i.json();case 6:s=t.sent,i.ok&&0!==s.length&&void 0!==s&&e.apply(void 0,["getCountryTopRecommand"].concat(Object($e["a"])(s)));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getCancelActivities:function(t){return Object(Re["a"])(regeneratorRuntime.mark((function e(){var a,n,c,r,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,n=t.state,c=t.getters,r="".concat(n.api.base_url,"/Activity?$select=Name,Description,ID&$filter=contains(ActivityName ,'取消') and Description ne '無'&$top=5&$format=JSON"),e.next=4,fetch(r,{method:"GET",headers:c.headers});case 4:return i=e.sent,e.next=7,i.json();case 7:s=e.sent,i.ok&&a("getCancelActivities",s);case 9:case"end":return e.stop()}}),e)})))()},getSearchData:function(t){var e=arguments;return Object(Re["a"])(regeneratorRuntime.mark((function a(){var n,c,r,i,s,o,l,u,b,d,f,p,j;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.commit,c=t.state,r=t.getters,i=e.length>1&&void 0!==e[1]?e[1]:1,s=c.search,o=s.city,l=s.type,u="".concat(c.api.base_url,"/Activity?$select=Picture,City,ID&$filter=contains(City, '").concat(o,"') and Picture/PictureUrl1 ne null and Description ne '無'&$skip=").concat(12*(i-1),"&$top=12&$format=JSON"),b="".concat(c.api.base_url,"/ScenicSpot?$select=Picture,City,ID&$filter=contains(City, '").concat(o,"') and Picture/PictureUrl1 ne null and Description ne '無'&$skip=").concat(12*(i-1),"&$top=12&$format=JSON"),"Activity"!==l){a.next=15;break}return a.next=8,fetch(u,{method:"GET",headers:r.headers});case 8:return d=a.sent,a.next=11,d.json();case 11:f=a.sent,n("getSearchData",f),a.next=23;break;case 15:if("ScenicSpot"!==l){a.next=23;break}return a.next=18,fetch(b,{method:"GET",headers:r.headers});case 18:return p=a.sent,a.next=21,p.json();case 21:j=a.sent,n("getSearchData",j);case 23:case"end":return a.stop()}}),a)})))()},getLocation:function(t,e){return Object(Re["a"])(regeneratorRuntime.mark((function a(){var n,c,r,i,s,o,l,u,b;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.commit,c=t.state,r=t.getters,i="".concat(c.api.base_url,"/ScenicSpot?$filter=ID eq '").concat(e,"'&$format=JSON"),s="".concat(c.api.base_url,"/Activity?$filter=ID eq '").concat(e,"'&$format=JSON"),!e.includes("C1")){a.next=13;break}return a.next=6,fetch(i,{method:"GET",headers:r.headers});case 6:return o=a.sent,a.next=9,o.json();case 9:l=a.sent,n.apply(void 0,["getLocation"].concat(Object($e["a"])(l))),a.next=21;break;case 13:if(!e.includes("C2")){a.next=21;break}return a.next=16,fetch(s,{method:"GET",headers:r.headers});case 16:return u=a.sent,a.next=19,u.json();case 19:b=a.sent,n.apply(void 0,["getLocation"].concat(Object($e["a"])(b)));case 21:case"end":return a.stop()}}),a)})))()}}}),Ee=Object(c["c"])(x);Ee.use(n),Ee.use(Be).use(Ie).mount("#app")},6236:function(t,e,a){"use strict";a("c5cf")},"7a18":function(t,e,a){},8031:function(t,e,a){"use strict";a("8fd7")},"8b58":function(t,e,a){},"8f37":function(t,e,a){"use strict";a("8b58")},"8fd7":function(t,e,a){},9612:function(t,e,a){"use strict";a("d2bc")},"96f0":function(t,e,a){"use strict";a("a2bd")},a2bd:function(t,e,a){},a6ab:function(t,e,a){"use strict";a("0299")},aa65:function(t,e,a){"use strict";a("2817")},b107:function(t,e,a){},c5cf:function(t,e,a){},d2bc:function(t,e,a){},eede:function(t,e,a){}});
//# sourceMappingURL=app.483f2f46.js.map