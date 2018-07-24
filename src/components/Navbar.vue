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
       <v-inScroll :inScrollData="listDataZc"></v-inScroll>
      </mt-tab-container-item>
      <mt-tab-container-item :id="2">
        <v-inScroll :inScrollData="listDataDp"></v-inScroll>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    listDataDp: state => state.home.listDataDp,
    listDataZc: state => state.home.listDataZc
  }),
  created () {
    this.$store.dispatch('home/getScrollDataZc', 1)
    this.$store.dispatch('home/getScrollDataDp', 1)
  },
  data () {
    return {
      selected: 1
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
