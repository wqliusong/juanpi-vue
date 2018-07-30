<template>
  <div id="home">
    <div class="downApp">
      <img src="//jp.juancdn.com/jpwebapp/images/go_load_new.png" alt="">
    </div>
    <div class="search-class">
      <div class="search">
        <i class="iconfont icon-search"></i>
        <img src="https://s1.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png" alt="">
        <span>搜索</span>
      </div>
      <div class="category">
        <img src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png" alt="">
      </div>
    </div>
    <div id="swiperBox">
      <v-swiper :swiperData="swiperData"></v-swiper>
    </div>
    <div id="multiBox" v-if="multiBlockData.length">
      <div  v-for="i in multiBlockData[0].data" :key="i.child[0].bd_id">
        <a href="">
          <img :src="i.child[0].pic" alt="">
        </a>
      </div>
    </div>
    <div id="multiad" v-if="multiBlockData.length">
      <img :src="multiBlockData[1].data[0].child[0].pic" alt="">
    </div>
    <div id="multiad2" v-if="multiBlockData.length > 2">
      <img :src="multiBlockData[2].data[0].child[0].pic" alt="">
    </div>
    <div id="navbarBox">
      <v-navbar></v-navbar>
    </div>
    <div id="footer">
      <div v-for="i in footerData" :key="i.title">
        <span><img :src="i.title == actFooter ? i.act_icon : i.bg_icon" alt="i.title" :title="i.title"></span>
        <span v-bind:style="{color: i.title == actFooter ? i.act_color : i.bg_color}">{{i.title}}</span>
      </div>
    </div>
    <div @click="goTop" id="goTop" v-show="showHide">TOP</div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      showHide: false,
      actFooter: ''
    }
  },
  computed: mapState({
    multiBlockData: state => state.home.multiData,
    swiperData: state => state.home.swiperData,
    footerData: state => state.home.footerData
  }),
  created () {
    this.$store.dispatch('home/getSwiperData')
    this.$store.dispatch('home/getMultiData')
    this.$store.dispatch('home/getFooterData')
  },
  mounted () {
    console.log(this)
    if (this.$route.path === '/') {
      this.actFooter = '首页'
    } else if (this.$route.path === '/class') {
      this.actFooter = '分类'
    } else if (this.$route.path === '/car') {
      this.actFooter = '购物车'
    } else if (this.$route.path === '/my') {
      this.actFooter = '我的卷皮'
    }
    var _this = this
    window.addEventListener('scroll', function () {
      // console.log(document.documentElement.scrollTop, document.documentElement.scrollTop > 1000, _this.showHide, _this) // 滚动高度
      if (document.documentElement.scrollTop > 1000) {
        _this.showHide = true
      } else {
        _this.showHide = false
      }
    })
  },
  methods: {
    goTop: function () {
      console.log(document.body.scrollTop, document.body.offsetTop)
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style lang="scss" scoped>
#home {
  padding-bottom: 40px;
  #footer{
    width: 100%;
    height: 40px;
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
        font-size: 12px;
      }
    }
  }
  #goTop{
    position: fixed;
    right: 25px;
    bottom: 100px;
    width: 50px;
    height: 50px;
    background: #fff;
    border: 1px solid #888;
    border-radius: 10px;
    color: #000;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
  }
  background-color: #f4f4f8;
  .downApp {
    height: 60px;
    background: white;
    img {
      width: 100%;
    }
  }
  .search-class {
    background-color: #fff;
    height: 2.1em;
    width: 100%;
    .search {
      width: 85%;
      margin-left: 5%;
      border-radius: 5px;
      i {
        margin-left: 7px;
        float: left;
        font-size: 12px !important;
      }
      img {
        width: 1.5rem;
        float: left;
        margin: 5px 5px 0 5px;
      }
      span {
        font-size: 12px;
        float: left;
        color: rgb(182, 182, 182);
      }
      line-height: 1.88rem;
      background-color: #e9e9e99c;
      float: left;
    }
    .category {
      float: right;
      width: 10%;
      height:30px;
      img {
        width: 100%;
        margin: 0;
      }
    }
  }
  .swiperBox {
    height: 146px;
    width: 100%;
    float: left;
  }
  #multiBox{
    width: 100%;
    height: 83px;
    background: #ccc;
    float: left;
    div{
      width: 25%;
      float: left;
      img{
        width: 100%;
      }
    }
  }
  #multiad{
    width: 100%;
    padding: 3px 0;
    img{
      width: 100%;
      background-color: #fff;
      margin-top: 7px;
    }
  }
  #multiad2{
    width: 100%;
    padding: 5px 0;
    img{
      width: 100%;
      background-color: #fff;
    }
  }
}
</style>
