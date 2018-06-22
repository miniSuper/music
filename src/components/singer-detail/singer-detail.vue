<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
import MusicList from 'components/music-list/music-list'
import { ERR_OK } from 'api/config'
import { getSingerDetail } from 'api/singer'
import { mapGetters } from 'vuex'
import { createSong } from 'common/js/song'
export default {
  computed: {
    title () {
      return this.singer.name
    },
    bgImage () {
      return this.singer.avatar
    },
    ...mapGetters(['singer'])
  },
  data () {
    return {
      songs: []
    }
  },
  methods: {
    _getSinerDetail () {
      if (!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id).then(res => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.data.list)
        }
        // console.log(res.data.list)
      })
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach(item => {
        let { musicData } = item
        if (musicData.songid && musicData.albumid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  components: {
    MusicList
  },
  created () {
    this._getSinerDetail()
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable'

.slide-enter-active, .slide-leave-active
  transition all 0.3s ease-in-out

.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
</style>
