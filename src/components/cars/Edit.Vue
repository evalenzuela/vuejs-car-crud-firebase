<template>
  <div>
    <h1>Edit a car</h1>
    <form>
      <div class="form-group">
        <label for="maker">Maker</label>
        <input type="text" class="form-control" id="maker" aria-describedby="makerHelp" placeholder="Enter maker" v-model="car.maker">
        <small id="makerHelp" class="form-text text-muted">Makers: Toyota, Honda, Kia, etc.</small>
      </div>
      <div class="form-group">
        <label for="model">Model</label>
        <input type="text" class="form-control" id="model" aria-describedby="modelHelp" placeholder="Enter model" v-model="car.model">
        <small id="modelHelp" class="form-text text-muted">Models: Celica, CRV, Cerato, etc.</small>
      </div>
      <div class="form-group">
        <label for="year">Year</label>
        <input type="text" class="form-control" id="year" aria-describedby="yearHelp" placeholder="Enter year" v-model="car.year">
        <small id="yearHelp" class="form-text text-muted">Use 4 digits: 1964, 2018.</small>
      </div>
      <div class="form-group">
        <label for="cost">Cost</label>
        <input type="text" class="form-control" id="cost" aria-describedby="costHelp" placeholder="Enter cost" v-model="car.cost">
        <small id="costHelp" class="form-text text-muted">Use "," for thousands and "." for decimals.</small>
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <select class="form-control" id="status" aria-describedby="statusHelp" v-model="car.status">
          <option>-- Select a status --</option>
          <option>New</option>
          <option>Used</option>
        </select>
        <small id="statusHelp" class="form-text text-muted">Previously used or not.</small>
      </div>

      <button type="button" class="btn btn-primary" @click="goBack">Back</button>
      <button type="button" class="btn btn-primary" @click="onSubmit">Save Car</button>
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
      },
      onSubmit() {
        axiosContent.put('/cars/' + this.$route.params.id + '.json?auth='+this.$store.state.tokenId, this.car)
          .then(response => {
              console.log(response);
          })
          .catch(error => {
              console.log(error);
          })
      }
    },
    created() {
      console.log(this.$store.state.tokenId)
      axiosContent.get('/cars/' + this.$route.params.id + '.json?auth='+this.$store.state.tokenId)
        .then(response => {
          console.log(response.data);
          const data = response.data;
          this.car = data;
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
</script>
