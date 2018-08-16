<template>
  <div>
    <h1>View car</h1>
    <form>
      <div class="form-group">
        <label>Maker: </label>
        <span>{{ car.maker }}</span>
      </div>
      <div class="form-group">
        <label>Model: </label>
        {{ car.model }}
      </div>
      <div class="form-group">
        <label>Year: </label>
        {{ car.year }}
      </div>
      <div class="form-group">
        <label>Cost: </label>
        {{ car.cost }}
      </div>
      <div class="form-group">
        <label>Status: </label>
        {{ car.status }}
      </div>

      <button type="button" class="btn btn-primary" @click="goBack">Back</button>
    </form>
  </div>
</template>
<script>

  import axiosContent from '../../config/content';

  export default {
      data: function() {
        return {
          car: {
            maker: null,
            model: null,
            year: null,
            status: null,
            cost: null
          }
        }
      },
      methods: {
        goBack() {
            this.$router.push('/cars')
        }
      },
      created() {
         axiosContent.get('/cars/' + this.$route.params.id + '.json?auth='+this.$store.state.tokenId)
           .then(response => {
               this.car = response.data;
           })
           .catch(error => {
               console.log(error)
           })
      }
  }
</script>
