(function(t){function e(e){for(var o,c,l=e[0],i=e[1],s=e[2],u=0,f=[];u<l.length;u++)c=l[u],a[c]&&f.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},a={app:0},r=[];function c(t){return l.p+"js/"+({}[t]||t)+"."+{f820:"4f6a4a1f"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=a[t]=[e,o]});e.push(n[2]=o);var r,i=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(t),r=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,n[1](c)}a[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:s})},12e4);s.onerror=s.onload=r,i.appendChild(s)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2896:function(t,e,n){"use strict";var o=n("72b9"),a=n.n(o);a.a},"54ee":function(t,e,n){"use strict";var o=n("b7a7"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container",attrs:{id:"app"}},[n("router-view")],1)])},r=[],c=n("2877"),l={},i=Object(c["a"])(l,a,r,!1,null,null,null),s=i.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 center-align"},[n("Clock")],1)]),n("div",{staticClass:"row white-text"},[n("Calendar"),n("div",{staticClass:"col l1 s12"}),n("Stocks"),n("JournalModal")],1)])},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{attrs:{id:"time"}},[t._v(t._s(t.time))])},h=[],m={name:"Clock",data:function(){return{time:"hello"}},mounted:function(){var t=this;setInterval(function(){var e=new Date,n=e.getHours()%12,o=(e.getMinutes()<10?"0":"")+e.getMinutes(),a=(e.getSeconds()<10?"0":"")+e.getSeconds();n=0==n?12:n,t.$data.time=n+":"+o+":"+a},1e3)}},v=m,g=(n("54ee"),Object(c["a"])(v,p,h,!1,null,"1650d949",null)),y=g.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col s12 l5 z-depth-3 white-text",attrs:{id:"stocks"}},t._l(t.stocks,function(e){return n("div",{key:e.id,staticClass:"row flow-text",attrs:{id:"indivStock"}},[n("p",{staticClass:"col s4 left-align stockName"},[t._v(t._s(e.stock))]),n("p",{staticClass:"col s5 right-align"},[t._v("$ "+t._s(e.price))]),n("p",{staticClass:"col s3 right-align",class:e.color},[t._v(t._s(e.percent)+"%")])])}))},b=[],x=n("bc3a"),w=n.n(x),_="https://api.iextrading.com/1.0/stock/",C={name:"Stocks",data:function(){return{stocks:[{stock:"Apple",ticker:"aapl",price:null,percent:null,color:"white-text"},{stock:"Google",ticker:"goog",price:null,percent:null,color:"white-text"},{stock:"Tesla",ticker:"tsla",price:null,percent:null,color:"white-text"},{stock:"Amazon",ticker:"amzn",price:null,percent:null,color:"white-text"},{stock:"Microsoft",ticker:"msft",price:null,percent:null,color:"white-text"},{stock:"Facebook",ticker:"fb",price:null,percent:null,color:"white-text"},{stock:"Netflix",ticker:"nflx",price:null,percent:null,color:"white-text"}]}},methods:{getStockPrice:function(t){return w.a.get("".concat(_).concat(this.stocks[t].ticker,"/price"))},getStockPercentage:function(t){return w.a.get("".concat(_).concat(this.stocks[t].ticker,"/previous"))},updateAllStockData:function(){for(var t=this,e=function(e){w.a.all([t.getStockPrice(e),t.getStockPercentage(e)]).then(w.a.spread(function(n,o){t.stocks[e].price=n.data.toFixed(2),t.stocks[e].percent=o.data.changePercent.toFixed(2),t.stocks[e].color=t.stocks[e].percent>=0?"green-text":"red-text"}))},n=0;n<this.stocks.length;n++)e(n)}},mounted:function(){this.updateAllStockData(),setInterval(this.updateAllStockData,3e4)}},S=C,j=(n("e984"),Object(c["a"])(S,k,b,!1,null,"4aeb2e6c",null)),O=j.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calendar col s12 l5 z-depth-3 white-text"},[n("div",{attrs:{id:"month"}},[t._v(t._s(t.monthLabels[t.monthIndex]))]),t._l(t.firstDayOfMonth,function(t){return n("div",{key:t+100})}),t._l(t.daysInMonths[t.monthIndex],function(e){return n("div",{key:e,staticClass:"day center-align"},[n("div",{class:{"highlight-day":e===t.today.getDate()},on:{click:function(n){t.openModal(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])])})],2)},J=[],P={name:"Calendar",data:function(){var t=new Date;return{today:t,monthIndex:t.getMonth(),firstDayOfMonth:new Date(t.getFullYear(),t.getMonth(),1).getDay(),daysInMonths:[31,28,31,30,31,30,31,31,30,31,30,31],modal:null,dayLabels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthLabels:["January","February","March","April","May","June","July","August","September","October","November","December"]}},methods:{initModal:function(){var t=document.querySelectorAll(".modal");M.Modal.init(t),this.modal=M.Modal.getInstance(t[0])},openModal:function(t){W.$emit("dateSelected",this.monthIndex+1,t,this.today.getFullYear()),this.modal.open()}},mounted:function(){this.initModal()}},D=P,$=(n("6d36"),Object(c["a"])(D,T,J,!1,null,"df91d80c",null)),E=$.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",attrs:{id:"journalModal"}},[n("div",{staticClass:"modal-content green-text"},[n("h4",{staticClass:"center-align"},[t._v(t._s(t.date))]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentJournalText,expression:"currentJournalText"}],staticClass:"materialize-textarea green-text flow-text",attrs:{spellcheck:"false",id:"journalEntry"},domProps:{value:t.currentJournalText},on:{input:function(e){e.target.composing||(t.currentJournalText=e.target.value)}}})]),n("div",{staticClass:"modal-footer"},[n("p",{staticClass:"modal-close waves-effect waves-green btn blue",attrs:{id:"saveBtn"},on:{click:function(e){t.save()}}},[t._v("Save")])])])},I=[],F={name:"JournalModal",data:function(){return{date:null,day:null,month:null,year:null,currentJournalText:""}},created:function(){var t=this;W.$on("dateSelected",function(e,n,o){t.date="".concat(e," - ").concat(n," - ").concat(o),t.month=e,t.day=n,t.year=o,w.a.get("/journal/".concat(t.month,"/").concat(t.day,"/").concat(t.year)).then(function(e){t.currentJournalText=e.data}).catch(function(){window.location.href="/GoogleLogin"})})},methods:{save:function(){w.a.put("/journal/".concat(this.month,"/").concat(this.day,"/").concat(this.year),{body:this.currentJournalText}).catch(function(){window.location.href="/GoogleLogin"})}}},L=F,z=(n("2896"),Object(c["a"])(L,A,I,!1,null,"4058c6d5",null)),N=z.exports,B={name:"home",data:function(){return{info:null}},components:{Clock:y,Stocks:O,Calendar:E,JournalModal:N}},G=B,q=(n("cccb"),Object(c["a"])(G,d,f,!1,null,null,null)),Y=q.exports;o["a"].use(u["a"]);var H=new u["a"]({mode:"history",routes:[{path:"/",name:"home",component:Y},{path:"/about",name:"about",component:function(){return n.e("f820").then(n.bind(null,"f820"))}}]});n.d(e,"dateBus",function(){return W}),o["a"].config.productionTip=!1;var W=new o["a"];new o["a"]({router:H,render:function(t){return t(s)}}).$mount("#app")},"6ade":function(t,e,n){},"6d36":function(t,e,n){"use strict";var o=n("6ade"),a=n.n(o);a.a},"72b9":function(t,e,n){},b7a7:function(t,e,n){},b861:function(t,e,n){},cccb:function(t,e,n){"use strict";var o=n("b861"),a=n.n(o);a.a},e3f4:function(t,e,n){},e984:function(t,e,n){"use strict";var o=n("e3f4"),a=n.n(o);a.a}});
//# sourceMappingURL=app.6965dc82.js.map