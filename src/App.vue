<template>
  <layout-main></layout-main>
</template>

<script>
import Main from './layout/Main.vue';

export default {
  data: function() {
    return {

    }
  },
  components: {
    layoutMain: Main
  },

  created() {
      console.log("autologin")
      this.$store.dispatch('autoLogin', {
          'token': localStorage.getItem('cacheTokenId'),
          'userId': localStorage.getItem('cacheUserId')
      })
  }
}
</script>

<style lang="scss">
</style>
