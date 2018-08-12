<template>
  <div>
    <p>
      <router-link tag="li" to="/car/create" active-class="active"><a>Create car</a></router-link>
    </p>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Maker</th>
        <th scope="col">Model</th>
        <th scope="col">Year</th>
        <th scope="col">Cost</th>
        <th scope="col">Status</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="car in cars">
        <th scope="row">{{ car.order }}</th>
        <td>{{ car.maker }}</td>
        <td>{{ car.model }}</td>
        <td>{{ car.year }}</td>
        <td>USD {{ car.cost }}</td>
        <td>{{ car.status }}</td>
        <td><a @click="editCar(car)">Edit</a> | <a @click="viewCar(car)">View</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {

    data: function() {
      return {
          cars: []
      }
    },
    methods: {
      editCar: function(car) {
        this.$router.push('/car/edit/' + car.id);
      },
      viewCar: function(car) {
        this.$router.push('/car/view/' + car.id);
      }
    },
    created() {
      axios.get('/cars.json')
        .then(response => {

            const data = response.data;

            let i = 1;
            for(let key in data) {

                const car = data[key];
                car.order = i;
                car.id = key;

                this.cars.push(car);

                i++;
            }

        }).catch(error => {
            console.log(error);
      })
    }
  }
</script>
