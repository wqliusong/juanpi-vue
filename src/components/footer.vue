<template>
  <div id="footer">
      <div v-for="i in footerData" :key="i.title">
        <span><img :src="i.title == actFooter ? i.act_icon : i.bg_icon" alt="i.title" :title="i.title"></span>
        <span v-bind:style="{color: i.title == actFooter ? i.act_color : i.bg_color}">{{i.title}}</span>
      </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'footer',
  data () {
    return {
      actFooter: ''
    }
  },
  computed: mapState({
    footerData: state => state.home.footerData
  }),
  created () {
    this.$store.dispatch('home/getFooterData')
  },
  mounted () {
    if (this.$route.path === '/') {
      this.actFooter = '首页'
    } else if (this.$route.path === '/class') {
      this.actFooter = '分类'
    } else if (this.$route.path === '/car') {
      this.actFooter = '购物车'
    } else if (this.$route.path === '/my') {
      this.actFooter = '我的卷皮'
    }
  }
}
</script>
<style lang="scss" scoped>
  #footer{
    width: 100%;
    height: 11vw;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    div{
      height: 100%;
      width: 25%;
      float: left;
      span{
        float: left;
        width: 100%;
      }
      span:nth-of-type(1){
        height: 60%;
        img{
          height: 90%;
          margin-left: 38%;
        }
      }
      span:nth-of-type(2){
        height: 40%;
        text-align: center;
        font-size: 3vw;
      }
    }
  }
</style>
