(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{351:function(t,e,n){"use strict";n.r(e);n(48);var r=n(11),l=(n(70),{props:{gallery:{type:Object,default:function(){}}},data:function(){return{urls:this.gallery.photos.map(function(data){return"".concat(data.url.replace("/uploads",""))})}},mounted:function(){var image=document.getElementById("image"),t=this.urls;console.log(t);var e=t[Math.floor(Math.random()*t.length)];image.src=e}}),c=n(37),o={components:{ImageShow:Object(c.a)(l,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{id:"image",src:"#",alt:"",srcset:""}})])}],!1,null,null,null).exports},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,l,c,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.payload,r=e.$axios,l=e.params,n){t.next=7;break}return c="/galleries/".concat(l.id),t.next=5,r.get(c);case 5:o=t.sent,n=o.data;case 7:return t.abrupt("return",{gallery:n});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},f=Object(c.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("image-show",{attrs:{gallery:this.gallery}})},[],!1,null,null,null);e.default=f.exports}}]);