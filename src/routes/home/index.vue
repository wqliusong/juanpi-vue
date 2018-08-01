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
    <v-footer>
    </v-footer>
    <div @click="goTop" id="goTop" v-show="showHide">TOP</div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      showHide: false
    }
  },
  computed: mapState({
    multiBlockData: state => state.home.multiData,
    swiperData: state => state.home.swiperData
  }),
  created () {
    this.$store.dispatch('home/getSwiperData')
    this.$store.dispatch('home/getMultiData')
  },
  mounted () {
    console.log(this)
    var _this = this
    window.addEventListener('scroll', function (e) {
      // console.log(document.body.scrollTop, document.body.scrollTop > 1000, _this.showHide, _this) // 滚动高度
      if (document.body.scrollTop > 1000) {
        _this.showHide = true
      } else {
        _this.showHide = false
      }
    })
  },
  methods: {
    goTop: function () {
      console.log(document.body.scrollTop, document.body.offsetTop)
      document.body.scrollTop = 0
    }
  }
}
</script>
<style lang="scss" scoped>
#home {
  padding-bottom: 11vw;
  .downApp {
    height: 16vw;
    background: white;
    img {
      width: 100%;
    }
  }
  .search-class {
    float: left;
    background-color: #fff;
    height:9vw;
    width: 100%;
    .search {
      width: 85%;
      margin-left: 5%;
      border-radius: 5px;
      height: 8vw;
      background: #eee;
      i {
        margin-left: 7px;
        float: left;
        font-size: 3vw !important;
      }
      img {
        width: 7vw;
        float: left;
        margin: 1.5vw 1.5vw 0 1.5vw;
      }
      span {
        font-size: 3vw;
        float: left;
        color: rgb(182, 182, 182);
        line-height: 8vw;
        height: 8vw;
      }
      float: left;
    }
    .category {
      float: right;
      width: 10%;
      height: 8vw;
      img {
        width: 100%;
        margin: 0;
      }
    }
  }
  .swiperBox {
    height: 38vw;
    width: 100%;
    float: left;
  }
  #multiBox{
    width: 100%;
    height: 22vw;
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
  #goTop{
    position: fixed;
    right: 25px;
    bottom: 20vw;
    width: 11vw;
    height: 11vw;
    background: #fff;
    border: 1px solid #888;
    border-radius: 10px;
    color: #000;
    font-size: 5vw;
    text-align: center;
    line-height: 11vw;
  }
  background-color: #f4f4f8;

}
</style>
