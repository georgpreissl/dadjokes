(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{185:function(e,t,n){"use strict";n.r(t);n(34);var o=n(5),r=n(44),c=n.n(r),d={data:function(){return{joke:{}}},components:{},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Accept:"application/json"}},t.prev=1,t.next=4,c.a.get("https://icanhazdadjoke.com/j/".concat(e.$route.params.id),n);case 4:o=t.sent,e.joke=o.data.joke,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},head:function(){return{title:"DadJokes",meta:[{hid:"description",name:"description",content:"jobobobobob"}]}}},l=n(15),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nuxt-link",{attrs:{to:"/jokes"}},[e._v("Back to Jokes")]),e._v(" "),n("h1",[e._v(e._s(e.joke))]),e._v(" "),n("small",[e._v(e._s(e.$route.params.id))])],1)}),[],!1,null,null,null);t.default=component.exports}}]);