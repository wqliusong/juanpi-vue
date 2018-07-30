<template>
  <div id="navbarBox">
    <div v-on:click="item(selected)" :class="classNb">
      <mt-navbar v-model="selected">
        <mt-tab-item :id="1">精选专场</mt-tab-item>
        <mt-tab-item :id="2">精选单品</mt-tab-item>
      </mt-navbar>
    </div>
    <!-- <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell> -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="1">
        <v-inScroll :inScrollData="listDataZc" :loading="loadingZc" :loadMore="loadMore" :page="pageZc" :noShowHide="noZc"></v-inScroll>
      </mt-tab-container-item>
      <mt-tab-container-item :id="2">
        <v-inScroll :inScrollData="listDataDp" :loading="loadingDp" :loadMore="loadMore" :page="pageDp" :noShowHide="noDp"></v-inScroll>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    listDataZc: state => state.home.listDataZc,
    listDataDp: state => state.home.listDataDp,
    noZc: state => state.home.noZc,
    noDp: state => state.home.noDp
  }),
  created () {
    this.$store.dispatch('home/getScrollDataZc', this.pageZc)
    this.$store.dispatch('home/getScrollDataDp', this.pageDp)
  },
  data () {
    return {
      selected: 1,
      loadingZc: false,
      loadingDp: false,
      // listZc: [],
      // listDp: [],
      pageZc: 1,
      pageDp: 1,
      classNb: 'nbStp'
    }
  },
  methods: {
    item: (selected) => {
      // console.log(selected)
    },
    loadMore: function () {
      // console.log('++', this.selected)
      console.log(this.noZc)
      if (this.selected === 1) {
        this.loadingZc = true
        this.loadingDp = true
        if (this.noZc) {
          console.log('没数据')
        } else {
          setTimeout(() => {
            this.$store.dispatch('home/getScrollDataZc', ++this.pageZc)
            this.loadingZc = false
            console.log('Zc++')
          }, 1000)
        }
      } else if (this.selected === 2) {
        this.loadingZc = true
        this.loadingDp = true
        if (this.noDp) {
          console.log('没数据')
        } else {
          setTimeout(() => {
            this.$store.dispatch('home/getScrollDataDp', ++this.pageDp)
            this.loadingDp = false
            console.log('Dp++')
          }, 1000)
        }
      } else {
        this.loadingDp = true
        this.loadingZc = true
      }
    }
  },
  mounted () {
    let _this = this
    window.addEventListener('scroll', function () {
      // console.log(document.documentElement.scrollTop, document.documentElement.scrollTop > 400, _this.classNb) // 滚动高度
      if (document.body.scrollTop > 400) {
        _this.classNb = 'nbAct'
      } else {
        _this.classNb = 'nbStp'
      }
    })
  }
}
</script>
<style lang="scss">
  .nbAct{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 1000;
  }
  .nbStp{
    width: 100%;
    position: inherit;
  }
</style>
