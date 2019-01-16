webpackJsonp([1],{HFVf:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),r=n("Gu7T"),i=n.n(r);var o,u,a,c={name:"Search",data:function(){return{keyword:"",isFocused:!1}},computed:{isActive:function(){return this.keyword.length>0}},watch:{keyword:(o=function(){this.$emit("keyword-change",this.keyword)},u=300,a=null,function(){clearTimeout(a);var e=arguments,t=this;a=setTimeout(function(){o.apply(t,e)},u)})},methods:{onFocus:function(){this.isFocused=!0},onBlur:function(){this.isFocused=!1}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search",class:{"search--active":e.isActive}},[n("label",{staticClass:"search__label",class:{"search--focus":e.isFocused},attrs:{for:"search"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"search__input",attrs:{id:"search",type:"search",autocomplete:"off",placeholder:"Type to search gifs"},domProps:{value:e.keyword},on:{focus:e.onFocus,blur:e.onBlur,input:function(t){t.target.composing||(e.keyword=t.target.value)}}})])])},staticRenderFns:[]};var h=n("VU/8")(c,l,!1,function(e){n("hm01")},null,null).exports,d={name:"SearchResult",props:{result:{type:Object,required:!0}},data:function(){return{isLoaded:!1,elementWidth:null}},computed:{backgroundColor:function(){return this.isLoaded?"none":"#"+(16777215*Math.random()<<0).toString(16)},height:function(){var e=(this.elementWidth?this.elementWidth:this.result.images.fixed_width.height)/this.result.images.fixed_width.width,t=Math.floor(this.result.images.fixed_width.height*e)+"px";return this.isLoaded?"auto":t}},mounted:function(){this.elementWidth=this.$refs.container.clientWidth},methods:{onLoad:function(){this.isLoaded=!0}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"search-result"},[n("div",{staticClass:"search-result__gif-container",style:{background:e.backgroundColor,height:e.height}},[n("span",{staticClass:"search-result__title"},[e._v(e._s(e.result.title))]),e._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:e.isLoaded,expression:"isLoaded"}],attrs:{src:e.result.images.fixed_width.url},on:{load:e.onLoad}})])])},staticRenderFns:[]};var m={name:"SearchResults",components:{SearchResult:n("VU/8")(d,f,!1,function(e){n("HFVf")},null,null).exports},props:{results:{type:Array,required:!0},numberOfColumns:{type:Number,required:!0}},computed:{columns:function(){var e,t,n=[].concat(i()(Array(this.numberOfColumns).keys())).map(function(e){return{id:e,elements:[]}}),s=(e=this.numberOfColumns,t=0,{getIndex:function(){return t>=e&&(t=0),t++}});return this.results.forEach(function(e){n[s.getIndex()].elements.push(e)}),n},columnWidth:function(){return 100/this.numberOfColumns+"%"}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-results"},e._l(e.columns,function(t){return n("div",{key:t.id,staticClass:"search-results__column",style:{width:e.columnWidth}},e._l(t.elements,function(e){return n("search-result",{key:e.id,attrs:{result:e}})}),1)}),0)},staticRenderFns:[]};var v=n("VU/8")(m,p,!1,function(e){n("Vbmq")},null,null).exports,g={name:"InfiniteScroll",props:{offset:{type:Number,default:10},threshold:{type:Number,default:1}},data:function(){return{observer:null}},mounted:function(){var e=this,t={rootMargin:this.offset+"px",threshold:this.threshold};this.observer=new IntersectionObserver(function(t){t[0].isIntersecting&&e.$emit("in-viewport")},t),this.observer.observe(this.$el)},destroyed:function(){this.observer.disconnect()}},_={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"infinite-scroll"})},staticRenderFns:[]};var w=n("VU/8")(g,_,!1,function(e){n("woav")},null,null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loading-indicator"},[t("img",{attrs:{src:"/static/spinner.svg"}})])}]};var b=n("VU/8")({name:"LoadingIndicator"},y,!1,function(e){n("U7vj")},null,null).exports,C=n("woOf"),k=n.n(C),L=n("//Fk"),x=n.n(L),R=n("fZjL"),S=n.n(R),F="https://api.giphy.com",O="v1",I="CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6";function T(e){return{id:e.id,title:e.title,images:(t=e.images,{fixed_width:(n=t.fixed_width,{url:n.url,width:n.width,height:n.height,mp4:n.mp4,webp:n.webp})})};var t,n}function $(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[]}).data.map(T)}function E(e,t){return function(e,t,n){var s="?",r=[];return S()(n).forEach(function(e){r.push(e+"="+encodeURIComponent(n[e]))}),s+=r.join("&"),fetch(t+s,{method:e}).then(function(e){return e.ok?e.json():x.a.reject(e.status,e.statusText)}).catch(console.error)}("GET",F+("/"+O+"/"+e),k()({},t,{api_key:I}))}var M={name:"Meowber",components:{Search:h,SearchResults:v,InfiniteScroll:w,LoadingIndicator:b},data:function(){return{results:[],numberOfColumns:3,currentKeyword:"",isLoading:!1,hasRecords:!0}},methods:{onKeywordChange:function(e){var t=this;e?(this.currentKeyword=e,this.performSearch(e).then(function(e){t.results=e})):(this.results=[],this.hasRecords=!0)},performSearch:function(e){var t,n,s,r=this;return this.isLoading=!0,(t=e,n=25,s=this.results.length,E("gifs/search",{q:t,limit:n,offset:s}).then($)).then(function(e){return r.isLoading=!1,0===e.length&&(r.hasRecords=!1),e}).catch(function(e){r.isLoading=!1,console.error(e)})},loadMoreResults:function(){var e=this;!this.isLoading&&this.hasRecords&&this.results.length&&this.performSearch(this.currentKeyword).then(function(t){var n;(n=e.results).push.apply(n,i()(t))})},useOneColumnLayout:function(){this.numberOfColumns=1},useThreeColumnsLayout:function(){this.numberOfColumns=3}}},V={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Search",{on:{"keyword-change":e.onKeywordChange}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.results.length,expression:"results.length"}],staticClass:"options"},[n("button",{staticClass:"button fi icon-onecolumn",on:{click:e.useOneColumnLayout}}),e._v(" "),n("button",{staticClass:"button fi icon-multicolumn",on:{click:e.useThreeColumnsLayout}})]),e._v(" "),n("SearchResults",{attrs:{results:e.results,"number-of-columns":e.numberOfColumns}}),e._v(" "),e.isLoading?n("LoadingIndicator"):e._e(),e._v(" "),e.results.length?n("InfiniteScroll",{attrs:{offset:150,threshold:.5},on:{"in-viewport":e.loadMoreResults}}):e._e()],1)},staticRenderFns:[]};var U=n("VU/8")(M,V,!1,function(e){n("SouI")},null,null).exports;n("uMhA"),s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:U},template:"<App/>"})},SouI:function(e,t){},U7vj:function(e,t){},Vbmq:function(e,t){},hm01:function(e,t){},uMhA:function(e,t){},woav:function(e,t){}},["NHnr"]);