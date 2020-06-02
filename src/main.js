import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'jquery'
import 'popper.js'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true


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