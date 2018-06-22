<template>
  <transition name="slide">
    <div class="user-center">
      <div class="back" @click.stop="back">
        <i class="icon-back"></i>
      </div>
      <div class="switches-wrapper">
        <switches :currentIndex="currentIndex" :switches="switches" @onSwitch="onSwitch"></switches>
      </div>
      <div class="play-btn" ref="playBtn">
        <i class="icon-play"></i>
        <span class="text" @click="random">随机播放全部</span>
      </div>
      <div class="list-wrapper" ref="listWrapper">
        <scroll class="list-scroll" ref="songList" :data="favoriteList" v-if="currentIndex===0">
          <div class="list-inner">
            <song-list :songs="favoriteList" @select="selectSong"></song-list>
          </div>
        </scroll>
        <scroll class="list-scroll" ref="searchList" :data="playHistory" v-if="currentIndex===1">
          <div class="list-inner">
            <song-list :songs="playHistory" @select="selectSong"></song-list>
          </div>
        </scroll>
      </div>
      <div class="no-result-wrapper">
        <no-result v-show="noResult" :title="noResultDesc"></no-result>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import Switches from 'base/switches/switches'
import Scroll from 'base/scroll/scroll'
import SongList from 'base/song-list/song-list'
import NoResult from 'base/no-result/no-result'
import { mapGetters, mapActions } from 'vuex'
import Song from 'common/js/song'
import { playlistMixin } from 'common/js/mixin'
export default {
  mixins: [playlistMixin],
  data () {
    return {
      currentIndex: 0,
      switches: [{ name: '我喜欢的' }, { name: '最近播放' }]
      // playList: []
    }
  },
  computed: {
    noResult () {
      return this.currentIndex === 0 ? !this.favoriteList.length : !this.playHistory.length
    },
    noResultDesc () {
      return this.currentIndex === 0 ? '暂无收藏歌曲' : '你还没有听过歌曲'
    },
    ...mapGetters(['favoriteList', 'playHistory'])
  },
  methods: {
    back () {
      this.$router.back()
    },
    onSwitch (index) {
      this.currentIndex = index
    },
    selectSong (song) {
      this.insertSong(new Song(song))
      console.log(new Song(song))
    },
    random () {
      let list = this.currentIndex === 0 ? this.favoriteList.map(item => {
        return new Song(item)
      }) : this.playHistory.map(item => {
        return new Song(item)
      })
      if (list.length === 0) {
        return
      }
      this.playRandom({ list })
      // this.playList = list
    },
    handlePlaylist (playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.listWrapper.style.bottom = bottom
      this.currentIndex === 0 ? this.$refs.songList.refresh() : this.$refs.searchList.refresh()
    },
    ...mapActions([
      'insertSong',
      'playRandom'
    ])
  },
  components: {
    Switches,
    Scroll,
    SongList,
    NoResult
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable'

.user-center
  position fixed
  top 0
  bottom 0
  z-index 100
  width 100%
  background $color-background

  &.slide-enter-active, &.slide-leave-active
    transition all 0.3s

  &.slide-enter, &.slide-leave-to
    transform translate3d(100%, 0, 0)

  .back
    position absolute
    top 0
    left 6px
    z-index 50

    .icon-back
      display block
      padding 10px
      font-size $font-size-large-x
      color $color-theme

  .switches-wrapper
    margin 10px 0 30px 0

  .play-btn
    box-sizing border-box
    width 135px
    padding 7px 0
    margin 0 auto
    text-align center
    border 1px solid $color-text-l
    color $color-text-l
    border-radius 100px
    font-size 0

    .icon-play
      display inline-block
      vertical-align middle
      margin-right 6px
      font-size $font-size-medium-x

    .text
      display inline-block
      vertical-align middle
      font-size $font-size-small

  .list-wrapper
    position absolute
    top 110px
    bottom 0
    width 100%

    .list-scroll
      height 100%
      overflow hidden

      .list-inner
        padding 20px 30px

  .no-result-wrapper
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
</style>
