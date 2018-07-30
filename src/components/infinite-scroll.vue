<template>
  <div id="inScrollBox">
    <ul class="mui-table-view" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
      <li v-for="i in inScrollData" :key="i.goods_id">
        <div>
          <img :src="i.pic_url" alt="图片" title="图片">
        </div>
        <div>
          <p v-bind:style="{width: i.logo_url ? zc : dp}">{{i.coupon_tips ? i.coupon_tips : "¥" + i.cprice}}</p>
          <p v-show="i.logo_url ? false : true" style="font-size:3vw;color:#aaa;text-decoration:line-through;line-height:24px;">¥{{i.oprice}}</p>
          <p>{{i.title}}</p>
          <img :src="i.logo_url" v-show="i.logo_url ? true : false" alt="图片" title="图片">
          <span>{{i.time_left}}</span>
        </div>
      </li>
    </ul>
    <div id="noShowHide" v-show="noShowHide">没有东西了</div>
  </div>
</template>
<script>
export default {
  name: 'inScrollBox',
  props: ['inScrollData', 'loading', 'loadMore', 'page', 'noShowHide'],
  data () {
    return {
      zc: '60%',
      dp: '25%'
    }
  },
  mounted () {
    console.log(this.list)
  }
}
</script>
<style lang="scss">
  #inScrollBox{
    #noShowHide{
      width: 100%;
      background: #fff;
      line-height: 10vw;
      height: 10vw;
      text-align: center;
      float: left;
      border-top: 1px solid #eee;
    }
    ul{
      padding-top: 3px;
    }
    li{
      height: 60vw;
      background: #fff;
      width: 49%;
      float: left;
      list-style: none;
      div:nth-of-type(1){
        height: 80%;
        float: left;
        width: 100%;
        img{
          width: 100%;
        }
      }
      div:nth-of-type(2){
        float: left;
        width: 100%;
        height: 20%;
        position: relative;
        p{
          float: left;
          width: 60%;
          height: 50%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 2px 0;
        }
        p:nth-of-type(1){
          font-size: 4vw;
          color: #ff464e;
          margin-left: 10px;
        }
        p:nth-of-type(3){
          font-size: 3vw;
          margin-left: 10px;
        }
        span{
          float: right;
          font-size: 3vw;
          color: #aaa;
          width: auto;
          margin-right: 10px;
        }
        img{
          width: 26%;
          position: absolute;
          right: 10px;
          bottom: 80%;
          background: #fff;
          border: 1px solid #ddd;
        }
      }
    }
    li:nth-of-type(odd){
      margin-right: 1.5%
    }
  }
</style>
