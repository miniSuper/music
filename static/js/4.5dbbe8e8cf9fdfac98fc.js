webpackJsonp([4],{NSSj:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("4YfN"),s=e.n(i),o=e("kvay"),a=e("9rMa"),r=e("m40h"),c=e("PvFA"),u={data:function(){return{songs:[]}},computed:s()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},Object(a.c)(["disc"])),methods:{_getSongList:function(){var t=this;this.disc.dissid?Object(r.c)(this.disc.dissid).then(function(n){t.songs=t._normalizeSongs(n.cdlist[0].songlist)}):this.$router.push("/recommend")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){t.songid&&t.albumid&&n.push(Object(c.a)(t))}),n}},components:{MusicList:o.a},created:function(){this._getSongList()}},d={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var f=e("vSla")(u,d,!1,function(t){e("OOQu")},"data-v-d35f0498",null);n.default=f.exports},OOQu:function(t,n){},m40h:function(t,n,e){"use strict";n.b=function(){var t=a()({},c.b,{platform:"h5",uni:0,needNewCode:1});return Object(r.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,c.c)},n.a=function(){var t=a()({},c.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return d.a.get("/api/getDiscList",{params:t}).then(function(t){return s.a.resolve(t.data)})},n.c=function(t){var n=a()({},c.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,format:"json",g_tk:5381,loginUin:0,hostUin:0,notice:0,platform:"yqq",needNewCode:0});return d.a.get("/api/songlist",{params:n}).then(function(t){return s.a.resolve(t.data)})};var i=e("rVsN"),s=e.n(i),o=e("aA9S"),a=e.n(o),r=e("Gak4"),c=e("T452"),u=e("aozt"),d=e.n(u)}});
//# sourceMappingURL=4.5dbbe8e8cf9fdfac98fc.js.map