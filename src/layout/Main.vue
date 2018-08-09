<template>
  <div>
    <layout-header></layout-header>
    <layout-footer></layout-footer>
    </body>
  </div>
</template>
<script>

  import Header from './partials/Header.vue';
  import Footer from './partials/Footer.vue';

  export default {

      components: {
          layoutHeader: Header,
          layoutFooter: Footer
      }

  }

</script>
