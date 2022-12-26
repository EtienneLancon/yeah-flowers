<script setup>
    // import { onMounted } from 'vue'
    // import BaseHttp from './http/http.js'
    import NavbarVue from './components/parts/Navbar.vue'

    // onMounted(() => {
    //   (new BaseHttp()).getToken();
    // })


</script>

<template>
  <NavbarVue></NavbarVue>

  <router-view></router-view>
</template>
