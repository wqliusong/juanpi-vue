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
       <v-inScroll :inScrollData="data1"></v-inScroll>
      </mt-tab-container-item>
      <mt-tab-container-item :id="2">
        <v-inScroll :inScrollData="data2"></v-inScroll>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    listData: state => state.home.listData
  }),
  created () {
    this.$store.dispatch('home/getScrollData')
  },
  data () {
    return {
      selected: 1,
      data1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      data2: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      data3: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    }
  },
  methods: {
    item: (selected) => {
      console.log(selected)
    }
  }
}
</script>
<style lang="scss">
</style>
