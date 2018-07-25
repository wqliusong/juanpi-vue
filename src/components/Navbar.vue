<template>
  <div id="navbarBox">
    <div v-on:click="item(selected)">
      <mt-navbar v-model="selected">
        <mt-tab-item :id="1">精选专场</mt-tab-item>
        <mt-tab-item :id="2">精选单品</mt-tab-item>
      </mt-navbar>
    </div>
    <!-- <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell> -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="1">
        <v-inScroll :inScrollData="listDataZc" :loading="loadingZc" :loadMore="loadMore" :page="pageZc" :list="listZc"></v-inScroll>
      </mt-tab-container-item>
      <mt-tab-container-item :id="2">
        <v-inScroll :inScrollData="listDataDp" :loading="loadingDp" :loadMore="loadMore" :page="pageDp" :list="listDp"></v-inScroll>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    listDataZc: state => state.home.listDataZc,
    listDataDp: state => state.home.listDataDp
  }),
  created () {
    this.$store.dispatch('home/getScrollDataZc', 1)
    this.$store.dispatch('home/getScrollDataDp', 1)
  },
  data () {
    return {
      selected: 1,
      loadingZc: false,
      loadingDp: false,
      listZc: [],
      listDp: [],
      pageZc: 1,
      pageDp: 1
    }
  },
  methods: {
    item: (selected) => {
      // console.log(selected)
    },
    loadMore: function () {
      console.log('++', this.selected)
      if (this.selected === 1) {
        this.loadingZc = false
        this.loadingDp = true
        if (this.listDataZc.length === 0) {
          console.log('没数据')
          this.loadingZc = true
        } else {
          let last = this.listZc[this.listDataZc.length - 1]
          for (let i = 1; i <= 10; i++) {
            this.listZc.push(last + i)
          }
        }
        console.log('Zc++')
      } else if (this.selected === 2) {
        this.loadingZc = true
        this.loadingDp = false
        console.log('Dp++')
      } else {
        this.loadingDp = true
        this.loadingZc = true
      }
    }
  }
}
</script>
<style lang="scss">
</style>
