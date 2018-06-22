<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box @onQueryChange="onQueryChange" ref="searchBox"></search-box>
      <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
        <scroll class="shortcut" ref="shortcut" :data="shortcut">
          <div>
            <div class="hot-key">
              <h1 class="title">热门搜素</h1>
              <ul>
                <li class="item" v-for="item in hotKey" :key="item.index" @click="addQuery(item.k)">
                  <span>{{item.k}}</span>
                </li>
              </ul>
            </div>
            <div class="search-history" v-show="searchHistory.length">
              <h1 class="title">
                <span class="text">搜索历史</span>
                <span class="clear" @click="showConfirm">
                  <i class="icon-clear"></i>
                </span>
              </h1>
              <search-list :searches="searchHistory" @select="addQuery" @delete="deleteSearchHistory"></search-list>
            </div>
          </div>
        </scroll>
      </div>
      <div class="search-result" ref="searchResult" v-show="query">
        <suggest :query="query" ref="suggest" @listScroll="blurInput" @select="saveSearchHistory"></suggest>
      </div>
      <confirm ref="confirm" text="是否清空所有搜索历史" confirmBtnText="清空" @confirm="clearSearchHistory"></confirm>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchBox from 'base/search-box/search-box'
import Suggest from 'components/suggest/suggest'
import SearchList from 'base/search-list/search-list'
import Confirm from 'base/confirm/confirm'
import Scroll from 'base/scroll/scroll'
import { playlistMixin, searchMixin } from 'common/js/mixin'
import { getHotKey } from 'api/search'
import { ERR_OK } from 'api/config'
import { mapActions } from 'vuex'
export default {
  mixins: [playlistMixin, searchMixin],
  data () {
    return {
      hotKey: []
      // query: ''
    }
  },
  computed: {
    shortcut () {
      return this.hotKey.concat(this.searchHistory)
    }
    // ...mapGetters([
    //   'searchHistory'
    // ])
  },
  watch: {
    query (newQuery) {
      if (!newQuery) {
        setTimeout(() => {
          this.$refs.shortcut.refresh()
        }, 20)
      }
    }
  },
  methods: {
    _getHotKey () {
      getHotKey().then(res => {
        if (res.code === ERR_OK) {
          this.hotKey = res.data.hotkey.slice(0, 10)
          // console.log(this.hotKey)
        }
      })
    },
    // following 3 methods has been moved into searchMixin
    // addQuery (query) {
    //   this.$refs.searchBox.setQuery(query)
    // },
    // onQueryChange (newQuery) {
    //   this.query = newQuery
    // },
    // blurInput () {
    //   this.$refs.searchBox.blur()
    // },
    showConfirm () {
      this.$refs.confirm.show()
    },
    // saveSearch (query) {
    //   this.saveSearchHistory(query)
    // },
    // deleteSearch (query) {
    //   console.log('receiveDelete')
    //   this.deleteSearchHistory(query)
    // },
    // clearSearch () {
    //   this.clearSearchHistory()
    // },
    handlePlaylist (playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.shortcutWrapper.style.bottom = bottom
      this.$refs.shortcut.refresh()
      this.$refs.searchResult.style.bottom = bottom
      this.$refs.suggest.refresh()
    },
    ...mapActions([
      // following two lines has been moved into searchMixin
      // 'saveSearchHistory',
      // 'deleteSearchHistory',
      'clearSearchHistory'
    ])
  },
  components: {
    SearchBox,
    Suggest,
    SearchList,
    Confirm,
    Scroll
  },
  created () {
    this.$watch('query', (newVal) => {
      this.$emit('query', newVal)
    })
    this._getHotKey()
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.search
  .search-box-wrapper
    margin 20px

  .shortcut-wrapper
    position fixed
    top 178px
    bottom 0
    left 0
    width 100%

    .shortcut
      height 100%
      overflow hidden

      .hot-key
        margin 0 20px 20px 20px

        .title
          margin-bottom 20px
          font-size $font-size-medium
          color $color-text-l

        .item
          display inline-block
          padding 5px 10px
          margin 0 22px 16px 0
          border-radius 6px
          background $color-highlight-background
          font-size $font-size-medium
          color $color-text-d

      .search-history
        position relative
        margin 0 20px

        .title
          display flex
          align-items center
          height 40px
          font-size $font-size-medium
          color $color-text-l

          .text
            flex 1

          .clear
            display inline-block
            extend-click()
            padding-left 30px
            height 100%

            .icon-clear
              line-height 40px
              font-size $font-size-medium
              color $color-text-d

  .search-result
    position fixed
    width 100%
    top 178px
    bottom 0
    left 0
</style>
