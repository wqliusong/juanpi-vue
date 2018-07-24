<template>
  <div id="inScrollBox">
    <ul v-infinite-scroll="loadMore" v-if="inScrollData.length" infinite-scroll-disabled="true">
      <li v-for="i in inScrollData" :key="i">
        <div>
          <img :src="i.pic_url" alt="图片" title="图片">
        </div>
        <div>
          <p>{{i.coupon_tips}}</p>
          <p>{{i.title}}</p>
          <img :src="i.logo_url" alt="图片" title="图片">
          <span>{{i.time_left}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'inScrollBox',
  props: ['inScrollData'],
  data () {
    return {
      list: []
    }
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        console.log(this.inScrollData)
        let last = this.inScrollData[19]
        for (let i = 1; i <= 10; i++) {
          this.inScrollData.push(last + i)
        }
        this.loading = false
      }, 2500)
    }
  }
}
</script>
<style lang="scss">
  #inScrollBox{
    ul{
      padding-top: 3px;
    }
    li{
      height: 233px;
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
          font-size: 16px;
          color: #ff464e;
          margin-left: 10px;
        }
        p:nth-of-type(2){
          font-size: 12px;
           margin-left: 10px;
        }
        span{
          float: right;
          font-size: 12px;
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
