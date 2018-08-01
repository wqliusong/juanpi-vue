<template>
  <div id="classify">
    <div id="search">
      <div>
        <img src="http://jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-1&sv=449ce9ee" alt="">
        <span>搜索商品</span>
      </div>
    </div>
    <ul id="classList" v-if="classifyData.length">
      <li v-for="(i, index) in classifyData" :key="index" @click="getListNum(index)">
        {{i.name}}
      </li>
    </ul>
    <ul id="classInfo" v-if="classifyData.length">
      <li v-for="(i, index) in classifyData[listNum].secondCateList" :key="index">
       <img :src="'http://s2.juancdn.com' + i.icon" alt="">
       <span>{{i.name}}</span>
       <i>{{i.icon_type == '0' ? '' : i.icon_type == 1 ? 'HOT' : 'NEW'}}</i>
      </li>
    </ul>
    <v-footer>
    </v-footer>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default{
  name: 'classify',
  data () {
    return {
      listNum: 0
    }
  },
  methods: {
    getListNum: function (index) {
      console.log(index)
      this.listNum = index
    }
  },
  computed: mapState({
    classifyData: state => state.classify.classifyData
  }),
  created () {
    this.$store.dispatch('classify/getClassify')
  },
  mounted () {
    console.log(this.classifyData)
  }
}
</script>
<style lang="scss">
#classify{
  li{
    list-style: none;
  }
  #search{
    width: 100%;
    height: 13vw;
    background: #fff;
    float: left;
    div{
      float: left;
      width: 94%;
      background: #fff;
      border-radius: 4px;
      height: 8vw;
      margin-top: 3vw;
      border: 1px solid #ccc;
      margin-left: 3%;
      img{
        height: 85%;
        float: left;
        margin:0 2%;
        margin-top: .8%;
      }
      span{
        float: left;
        height: 100%;
        font-size: 3.5vw;
        color: #999;
        line-height: 7vw;
      }
    }
  }
  #classList{
    width: 26%;
    float: left;
    background: #fff;
    padding-bottom: 11vw;
    li{
      float: left;
      width: 100%;
      height: 12vw;
      line-height: 12vw;
      padding-left: 15%;
      background: #f7f7f7;
      font-size: 3.5vw;
      border-bottom: 1px solid #eee;
    }
  }
  #classInfo{
    width: 74%;
    float: left;
    background: #fff;
    padding-bottom: 11vw;
    li{
      float: left;
      width: 33.3%;
      height: 30vw;
      font-size: 3vw;
      position: relative;
      img{
        width: 66%;
        float: left;
        margin-left: 17%;
        margin-top: 10%;
      }
      span{
        float: left;
        width: 100%;
        text-align: center;
      }
    }
    i{
      position: absolute;
      right: 3%;
      top: 0;
      background: pink;
      border-radius: 50%;
      display: block;
      width: 8vw;
      height: 8vw;
      text-align: center;
      line-height: 8vw;
      font-style: normal;
    }
  }
}
</style>
