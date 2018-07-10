<template>
  <div class="swiperBox">
    <mt-swipe>
      <mt-swipe-item v-for="i in swiperData" :key="i.id">
        <a :href="i.jump_url"><img :src="i.pic" alt=""></a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: 'swiper',
  props: ['swiperData']
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
