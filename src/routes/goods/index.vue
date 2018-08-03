<template>
  <div id="goods">
    <div id="goodsSwiperBox">
      <v-goosSwiper :swiperData="goodsData.skuData.sku"></v-goosSwiper>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default{
  name: 'goods',
  data () {
    return {

    }
  },
  computed: mapState({
    goodsData: state => state.goods.goodsData
  }),
  created () {
    console.log(this.$route.query.id)
    this.$store.dispatch('goods/getGoodsData', this.$route.query.id)
  }
}
</script>
<style lang="scss">
#goodsSwiperBox{
  width: 100%;
  height: 200px;
}
</style>
