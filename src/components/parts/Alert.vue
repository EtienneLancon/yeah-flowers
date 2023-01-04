<script>
  export default {
    props: ['alertService'],
    data () {
      return {
        alert: {
          type: '',
          iconSize: 0,
          iconStyle: '',
          header: '',
          message: '',
          show: false
        }
      }
    },
    mounted(){
        this.alertService.ref = this.$refs.alert;
    },
    methods: {
      showAlert (type, iconSize, iconStyle, header, message) {
        // this.alert.type = type
        // this.alert.iconSize = iconSize
        // this.alert.iconStyle = iconStyle
        // this.alert.header = header
        // this.alert.message = message
        // this.alert.show = true
        // setTimeout(() => {
        //   this.alert.show = false
        // }, this.closeIn)

        this.$refs.alert.showAlert(type, iconSize, iconStyle, header, message)
      }
    }
  }
</script>
<template>
  <div>
    <!-- <button 
        @click="showAlert(
            this.type, // There are 4 types of alert: success, info, warning, error
            this.message,
            this.header // Size of the icon (px)
            // 'solid', // Icon styles: now only 2 styles 'solid' and 'regular'
            // 'Success 200', // Header of the alert
            // 'toto',
            // 'tutu' // Message of the alert
        )"
    >
        Click to Success alert
    </button> -->

    <vue-basic-alert 
       :duration="500"
       :closeIn="5000"
       ref="alert" />
  </div>
</template>