import axios from 'axios'
export default {
  getHomeData (cb) {
    axios.get('/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_1406_1371&app_name=zhe&app_version=&platform=&catname=newest_zhe')
      .then(function (res) {
        console.log(res.data.adsInfo.slide_ads.config.slide)
        cb(res)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  // buyProducts (products, cb, errorCb) {
  //   setTimeout(() => {
  //     // simulate random checkout failure.
  //     (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
  //       ? cb()
  //       : errorCb()
  //   }, 100)
  // }
}
