<script>
    import NavbarVue from './components/parts/Navbar.vue'
    import { AlertService }  from './services/work/alert';
    import AlertVue from './components/parts/Alert.vue';

    export default {
        components: {
            NavbarVue,
            AlertVue
        },
        setup() {
            const alertService = new AlertService();
            
            return {
                alertService
            }
        }
    }
</script>

<template>
  <AlertVue :alertService="alertService"></AlertVue>
  <NavbarVue></NavbarVue>

  <router-view :alertService="alertService"></router-view>
</template>
