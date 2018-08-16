<template>
  <div>
    <h1>Create a car</h1>
    <form>
      <div class="form-group">
        <label for="maker">Maker</label>
        <input type="text" class="form-control"
               id="maker"
               aria-describedby="makerHelp"
               placeholder="Enter maker"
               v-model.trim="maker"
               @input="$v.maker.$touch()"
               :class="{invalid: $v.maker.$error}"
        >
        <p :class="{'error-message': $v.maker.$error}" v-if="$v.maker.$error">Please input Maker name</p>
        <small id="makerHelp" class="form-text text-muted">Makers: Toyota, Honda, Kia, etc.</small>
        <p>{{ $v.maker }}</p>
      </div>
      <div class="form-group">
        <label for="model">Model</label>
        <input type="text"
               class="form-control"
               id="model"
               aria-describedby="modelHelp"
               placeholder="Enter model"
               v-model.trim="model"
               @input="$v.model.$touch()"
               :class="{invalid: $v.model.$error}"
        >
        <p :class="{'error-message': $v.model.$error}" v-if="$v.model.$error">Please input Model name</p>
        <small id="modelHelp" class="form-text text-muted">Models: Celica, CRV, Cerato, etc.</small>
        <p>{{ $v.model }}</p>
      </div>
      <div class="form-group">
        <label for="year">Year</label>
        <input type="text"
               class="form-control"
               id="year"
               aria-describedby="yearHelp"
               placeholder="Enter year"
               v-model.number="year"
               @input="$v.year.$touch()"
               :class="{invalid: $v.year.$error}"
        >
        <p :class="{'error-message': $v.year.$required}" v-if="$v.year.$error">Please input Year</p>
        <p :class="{'error-message': !$v.year.$numeric}" v-if="$v.year.$error">Please input 4 digits Year</p>
        <small id="yearHelp" class="form-text text-muted">Use 4 digits: 1964, 2018.</small>
      </div>
      <div class="form-group">
        <label for="cost">Cost</label>
        <input type="text"
               class="form-control"
               id="cost"
               aria-describedby="costHelp"
               placeholder="Enter cost"
               v-model.trim="cost"
               @input="$v.cost.$touch()"
               :class="{invalid: $v.cost.$error}"
        >
        <p :class="{'error-message': !$v.year.$numeric}" v-if="$v.year.$error">Please input a number</p>
        <small id="costHelp" class="form-text text-muted">Use "," for thousands and "." for decimals.</small>
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <select class="form-control"
                id="status"
                aria-describedby="statusHelp"
                v-model="status"

        >
          <option>-- Select a status --</option>
          <option>New</option>
          <option>Used</option>
        </select>
        <small id="statusHelp" class="form-text text-muted">Previously used or not.</small>
      </div>

      <button type="button" class="btn btn-primary" @click="goBack">Back</button>
      <button class="btn btn-primary" type="button" @click="onSubmit">Save Car</button>
    </form>
  </div>
</template>
<script>

  import axiosContent from '../../config/content';
  import { required, email, minValue, minLength, numeric } from 'vuelidate/lib/validators';

  export default {
      data: function() {
        return {
          "maker": "",
          "model": "",
          "year": "",
          "cost": "",
          "status": ""
        }
      },
      validations: {
        maker: {
          required
        },
        model: {
          required
        },
        year: {
            required,
            numeric,
            minLength: minLength(4),

        },
        cost: {
            required
        },
        status: {
            required
        }
      },
      methods: {
          goBack() {
            this.$router.push('/cars');
          },

          onSubmit() {

          console.log("onSubmit...");

          const carData = {
            'maker': this.maker,
            'model': this.model,
            'year': this.year,
            'cost': this.cost,
            'status': this.status
          }

          console.log(carData);

            axiosContent.post('/cars.json?auth='+this.$store.state.tokenId, carData)
            .then( response => console.log(response))
            .catch( error => console.log(error))
        }
      },


  }
</script>
<style scoped>
  .invalid {
    border: 1px red dashed;
    background-color: #ffccbc;
  }

  .error-message {
    color: red;
  }
</style>
