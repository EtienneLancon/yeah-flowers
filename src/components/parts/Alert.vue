<script>
  export default {
    props: ['alertService'],
    mounted(){
        this.alertService.ref = this.$refs.alert;
    },
  }
</script>
<template>
  <div>
    <vue-basic-alert 
       :duration="500"
       :closeIn="5000"
       ref="alert" />
  </div>
</template>