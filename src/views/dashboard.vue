<template>
  <div>
    <Navbar></Navbar>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
          <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          asdasdasd
        <router-view></router-view>

        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Alert from '../components/alertMessage';

export default {
  components: {
    Navbar,
    Sidebar,
    Alert,
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/dashboard.scss';
</style>
