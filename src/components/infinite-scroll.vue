<template>
  <div id="inScrollBox">
    <ul v-infinite-scroll="loadMore" :id="1">
      <li v-for="i in inScrollData" :key="i">
        <div>
          <img src="" alt="图片" title="图片">
        </div>
        <div>
          <p>标题</p>
          <p>简介</p>
          <i>图标</i>
          <span>详情></span>
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
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        let last = this.inScrollData[this.inScrollData.length - 1]
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
      height: 200px;
      background: #fff;
      width: 49%;
      float: left;
      list-style: none;
      border: 1px solid #ccc;
      margin-left:.3%;
      div:nth-of-type(1){
        height: 70%;
        float: left;
        width: 100%;
        border: 1px solid #000;
      }
      div:nth-of-type(2){
        float: left;
        width: 100%;
        height: 29%;
        p{
          float: left;
          width: 60%;
          height: 50%;
        }
        span{
          float: right;
          font-size: 12px;
          color: #aaa;
          width: auto;
          margin-right: 10px;
        }
      }
    }
  }
</style>
