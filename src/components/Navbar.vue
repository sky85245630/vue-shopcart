<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="logout">Sign out</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/dashboard.scss';
</style>

<script>
export default {
  methods:{
    logout(){
      const api = `https://vue-course-api.herokuapp.com/logout`; // 'http://localhost:3000/api/casper/products';
      const vm = this;
      // API 伺服器路徑
      // 所申請的 APIPath
      this.$http.post(api,vm.user).then((response) => {
        console.log(response.data);
        if(response.data.success){
          vm.$router.push('login')
        }
      });
    }
  }
}
</script>