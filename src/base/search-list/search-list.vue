<template>
  <div class="search-list" v-show="searches.length">
    <transition-group name="list" tag="ul">
      <li class="search-item" v-for="item in searches" :key="item" @click="selectItem(item)">
        <span class="text">{{item}}</span>
        <span class="icon" @click.stop="deleteOne(item)">
          <i class="icon-delete"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    searches: {
      type: Array,
      default () {
        return []
      }
    }
  },
  // computed: {
  //   searchList () {
  //     let newSearches = []
  //     let searches = this.searches.slice()
  //     searches.forEach(item => {
  //       newSearches.push({
  //         name: item,
  //         id: new Date().getTime().toString().slice(7) + Math.random()
  //       })
  //     })
  //     return newSearches
  //   }
  // },
  methods: {
    selectItem (item) {
      this.$emit('select', item)
      // console.log(item)
    },
    deleteOne (item) {
      this.$emit('delete', item)
      // console.log(item)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable'

.search-list
  .search-item
    display flex
    align-items center
    height 40px
    overflow hidden

    &.list-enter-active, &.list-leave-active
      transition all 0.1s

    &.list-enter, &.list-leave-to
      height 0

    .text
      flex 1
      color $color-text-l

    .icon
      display inline-block
      padding-left 30px
      height 100%
      vertical-align middle
      extend-click()

      .icon-delete
        font-size $font-size-small
        color $color-text-d
        line-height 40px
</style>
