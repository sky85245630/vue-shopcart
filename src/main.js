import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'jquery'
import 'popper.js'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import './bus';
import currencyFilter from './filters/currency';
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';
// import dateFilter from './filters/date';

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true
Vue.component('loading',Loading)
Vue.filter('currency', currencyFilter);
VeeValidate.Validator.localize('zh_TW', zhTWValidate);
Vue.use(VeeValidate);
// Vue.filter('date', dateFilter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  console.log('to',to,'from',from,'next',next);
  
  if(to.meta.requiresAuth){
    const api = `https://vue-course-api.herokuapp.com/api/user/check`; // 'http://localhost:3000/api/casper/products';
      axios.post(api).then((response) => {
        console.log(response.data);
        if(response.data.success){
          next();
        }else {
          next({
            path:'/login'
            
          })
        }
      });
  }else{
    // alert('no need Auth')
    next();
  }
  
  next();
})