<template>
  <div>
    <header>
      My Garage
    </header>
    <ul class="nav nav-pills">
      <router-link tag="li" to="/" active-class="active"><a>Home</a></router-link>
      <router-link tag="li" to="/cars" active-class="active" v-if="isLoggedIn"><a>Cars</a></router-link>
      <router-link tag="li" to="/login" active-class="active" v-if="!isLoggedIn"><a>Login</a></router-link>
      <router-link tag="li" to="/register" active-class="active" v-if="!isLoggedIn"><a>Register</a></router-link>
      <router-link tag="li" to="/about" active-class="active"><a>About us</a></router-link>
      <li v-if="isLoggedIn">
        <button type="button" @click="logout">
          Logout
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    methods: {
        logout() {
            console.log('logging out')
            this.$store.dispatch('logout')

            this.$router.replace('/login')
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
    }
  }
</script>

