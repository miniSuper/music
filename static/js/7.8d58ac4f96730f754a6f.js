webpackJsonp([7],{fgmJ:function(t,s){},"qP2/":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("4YfN"),i=e.n(n),r=e("AyDw"),a=e("qwAB"),c=e("ZV4u"),o=e("tRvw"),l=e("9rMa"),u=e("PvFA"),h={mixins:[e("F4+m").b],data:function(){return{currentIndex:0,switches:[{name:"我喜欢的"},{name:"最近播放"}]}},computed:i()({noResult:function(){return 0===this.currentIndex?!this.favoriteList.length:!this.playHistory.length},noResultDesc:function(){return 0===this.currentIndex?"暂无收藏歌曲":"你还没有听过歌曲"}},Object(l.c)(["favoriteList","playHistory"])),methods:i()({back:function(){this.$router.back()},onSwitch:function(t){this.currentIndex=t},selectSong:function(t){this.insertSong(new u.b(t)),console.log(new u.b(t))},random:function(){var t=0===this.currentIndex?this.favoriteList.map(function(t){return new u.b(t)}):this.playHistory.map(function(t){return new u.b(t)});0!==t.length&&this.playRandom({list:t})},handlePlaylist:function(t){var s=t.length>0?"60px":"";this.$refs.listWrapper.style.bottom=s,0===this.currentIndex?this.$refs.songList.refresh():this.$refs.searchList.refresh()}},Object(l.b)(["insertSong","playRandom"])),components:{Switches:r.a,Scroll:a.a,SongList:c.a,NoResult:o.a}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"slide"}},[e("div",{staticClass:"user-center"},[e("div",{staticClass:"back",on:{click:function(s){return s.stopPropagation(),t.back(s)}}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("div",{staticClass:"switches-wrapper"},[e("switches",{attrs:{currentIndex:t.currentIndex,switches:t.switches},on:{onSwitch:t.onSwitch}})],1),t._v(" "),e("div",{ref:"playBtn",staticClass:"play-btn"},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text",on:{click:t.random}},[t._v("随机播放全部")])]),t._v(" "),e("div",{ref:"listWrapper",staticClass:"list-wrapper"},[0===t.currentIndex?e("scroll",{ref:"songList",staticClass:"list-scroll",attrs:{data:t.favoriteList}},[e("div",{staticClass:"list-inner"},[e("song-list",{attrs:{songs:t.favoriteList},on:{select:t.selectSong}})],1)]):t._e(),t._v(" "),1===t.currentIndex?e("scroll",{ref:"searchList",staticClass:"list-scroll",attrs:{data:t.playHistory}},[e("div",{staticClass:"list-inner"},[e("song-list",{attrs:{songs:t.playHistory},on:{select:t.selectSong}})],1)]):t._e()],1),t._v(" "),e("div",{staticClass:"no-result-wrapper"},[e("no-result",{directives:[{name:"show",rawName:"v-show",value:t.noResult,expression:"noResult"}],attrs:{title:t.noResultDesc}})],1)])])},staticRenderFns:[]};var f=e("vSla")(h,d,!1,function(t){e("fgmJ")},"data-v-812cf48e",null);s.default=f.exports}});
//# sourceMappingURL=7.8d58ac4f96730f754a6f.js.map