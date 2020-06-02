<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'App',
  created() {
    // this.check();
  },
  methods:{
    //檢查用戶是否仍持續登入
    // check() {
    //   const api = `https://vue-course-api.herokuapp.com/api/user/check`;
    //   this.$http.post(api).then(response => {
    //     console.log(response.data);
    //   });
    // },
  }
};
</script>
<style lang="scss">
@import 'bootstrap/scss/bootstrap';


.zxc{
  color:blue
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
