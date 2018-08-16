<template>
  <div>
    <form>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="text" class="form-control"
               id="email"
               placeholder="E-mail"
               v-model="email"
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control"
               id="password"
               placeholder="Password"
               v-model="password"
        >
      </div>
      <button class="btn btn-primary" type="button" @click="onSubmit">Login</button>
    </form>
  </div>
</template>
<script>

  export default {

    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        onSubmit: function() {
          this.$store.dispatch('login', {
              email: this.email,
              password: this.password
          });
        }
    }

  }
</script>
