<template>
  <div class="hello">
    <div class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
        
        <label><input type="checkbox" v-model="fullPage">Full page?</label>
        <button @click.prevent="doAjax">fetch Data</button>
    </div>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <div class="row">

      <div class="col-md-4 asd">asd</div>
    <div class="col-md-4 zxc">asd</div>
    <div class="col-md-4">asd</div>
    </div>
    <a href="#" @click.prevent="logout">登出</a>
  </div>
</template>

<script>
 import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';


export default {
  data(){
    return{
      isLoading: false,
                fullPage: true
    }
  },
  components:Loading,
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    logout(){

      const api = `https://vue-course-api.herokuapp.com/logout`; // 'http://localhost:3000/api/casper/products';
      const vm = this;
      // API 伺服器路徑
      // 所申請的 APIPath
      this.$http.post(api).then((response) => {
        console.log(response.data);
        if(response.data.success){
          vm.$router.push('./login')
        }
      });
    },
    doAjax() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                },5000)
            },
            onCancel() {
              console.log('User cancelled the loader.')
            }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.asd{
  color:red
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
