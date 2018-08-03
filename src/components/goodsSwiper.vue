<template>
  <div class="goodsSwiperBox">
    <mt-swipe :prevent="true" :auto="0" @change="swiperIndex" :show-indicators="false">
      <mt-swipe-item v-for="(i, index) in swiperData" :key="index">
        <!-- <a :href="i.jump_url"><img :src="i.pic" alt=""></a> -->
        {{i}}
      </mt-swipe-item>
    </mt-swipe>
    <div class="page">
      <span></span>/<span></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'goodsSwiper',
  props: ['goodsSwiperData'],
  data () {
    return {
      swiperData: [1, 2, 3, 4]
    }
  },
  methods: {
    swiperIndex (i) {
      console.log(i)
    }
  }
}
</script>
<style lang="scss" scoped>
.goodsSwiperBox{
  width: 100%;
  height: 70vw;
}
img {
  width: 100%;
}
.page{
  width: 20px;
  position: fixed;
  right: 20px;
  top: 65vw;
  background: #ccc;
  display: block;
  width: 16vw;
  text-align: center;
  font-size: 4vw;
}
</style>
