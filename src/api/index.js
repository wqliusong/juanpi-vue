import axios from 'axios'
export default {
  getHomeData (cb) {
    axios.get('/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_1406_1371&app_name=zhe&app_version=&platform=&catname=newest_zhe').then(function (res) {
      console.log(res.data.adsInfo.slide_ads.config.slide)
      cb(res)
    })
      .catch(function (error) {
        console.log(error)
      })
  },
  getHomeList (cb) {
    axios.get('/api/getGoods?page=1&zy_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc').then(function (res) {
      console.log(res)
      cb(res)
    })
      .catch(function (error) {
        console.log(error)
      })
  }
}
