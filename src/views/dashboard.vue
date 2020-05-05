<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid">
      <div class="row">
          <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          asdasdasd
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/dashboard.scss';
</style>
