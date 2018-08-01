<template>
  <div id="webFooter">
      <div v-for="i in footerData" :key="i.title" @click="linkTo(i.title)">
        <span><img :src="i.title == actFooter ? i.act_icon : i.bg_icon" alt="i.title" :title="i.title"></span>
        <span v-bind:style="{color: i.title == actFooter ? i.act_color : i.bg_color}">{{i.title}}</span>
      </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'webFooter',
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
    } else if (this.$route.path === '/classify') {
      this.actFooter = '分类'
    } else if (this.$route.path === '/car') {
      this.actFooter = '购物车'
    } else if (this.$route.path === '/myjp') {
      this.actFooter = '我的卷皮'
    }
  },
  methods: {
    linkTo: function (i) {
      console.log(i)
      if (i === '首页') {
        this.$router.push('/')
      } else if (i === '分类') {
        this.$router.push('/classify')
      } else if (i === '购物车') {
        this.$router.push('/car')
      } else if (i === '我的卷皮') {
        this.$router.push('/myjp')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  #webFooter{
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
