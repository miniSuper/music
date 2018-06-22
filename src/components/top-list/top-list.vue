<template>
  <transition name="slide">
    <music-list :rank="rank" :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
import MusicList from 'components/music-list/music-list'
import { ERR_OK } from 'api/config'
import { mapGetters } from 'vuex'
import { createSong } from 'common/js/song'
import { getMusicList } from 'api/rank'
export default {
  data () {
    return {
      songs: [],
      rank: true
    }
  },
  computed: {
    title () {
      return this.topList.topTitle
    },
    bgImage () {
      if (this.songs.length) {
        return this.songs[0].image
      }
      return ''
    },
    ...mapGetters([
      'topList'
    ])
  },
  methods: {
    _getMusicList () {
      if (!this.topList.id) {
        this.$router.push({
          path: '/rank'
        })
        return
      }
      getMusicList(this.topList.id).then(res => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.songlist)
        }
      })
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach((item) => {
        let musicData = item.data
        if (musicData.albumid && musicData.songid) {
          ret.push(createSong(musicData))
        }
      })
      // console.log(ret)
      return ret
    }
  },
  components: {
    MusicList
  },
  created () {
    this._getMusicList()
  }
}
</script>

<style scoped lang="stylus">
</style>
