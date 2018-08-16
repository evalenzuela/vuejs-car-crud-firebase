<template>
  <div>
    <form>
      <div class="form-group">
        <label for="first_name">First Name</label>
        <input type="text" class="form-control"
               id="first_name"
               placeholder="First Name"
               v-model="user.firstName"
        >
      </div>
      <div class="form-group">
        <label for="last_name">Last Name</label>
        <input type="text" class="form-control"
               id="last_name"
               placeholder="Last Name"
               v-model="user.lastName"
        >
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="text" class="form-control"
               id="email"
               placeholder="E-mail"
               v-model="user.email"
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control"
               id="password"
               placeholder="Password"
               v-model="user.password"
        >
      </div>
      <button class="btn btn-primary" type="button" @click="onSubmit">Register</button>
    </form>
  </div>
</template>
<script>

  export default {

      data() {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        }
      },
      methods: {
          onSubmit: function () {

              this.$store.dispatch('register', {
                  email: this.user.email,
                  password: this.user.password
              })
          }
      }

  }

</script>
