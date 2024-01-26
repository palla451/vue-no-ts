<script>
import AuthService from "@/services/auth";
import router from "@/router";

export default {
  data() {
    return {
      isAuthenticated: false // Inizialmente l'utente non è autenticato
    };
  },
  async created() {
    try {
      this.isAuthenticated = true;
      await AuthService.checkLoggedIn();
    } catch (error) {
      router.push({ name: 'login' });
      console.error('Errore durante il controllo dello stato di login:', error);
    }
  }
}

</script>

<template>
  <nav>
    <router-link v-if="$route.meta.hideLogin" to="/">Home</router-link> |
    <router-link v-if="$route.meta.hideLogin" to="/about">About</router-link> |

    <router-link v-if="!$route.meta.hideLogin" to="/login">Login</router-link>
  </nav>
  <router-view/>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


