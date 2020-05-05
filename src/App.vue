<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'App',
  created() {
    const api = `https://vue-course-api.herokuapp.com/api/louie/products`; // 'http://localhost:3000/api/casper/products';
    // API 伺服器路徑
    // 所申請的 APIPath
    this.$http.get(api).then((response) => {
      console.log(response.data);
    });
  },
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
