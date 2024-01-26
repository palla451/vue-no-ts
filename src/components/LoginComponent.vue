<script>
export default {
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    handleLogin(){
      this.$store.dispatch('login',{'username': this.username, 'password': this.password });
    }
  }
}
</script>

<template>
<div id="login">
  <h1>Login</h1>
  <form @submit.prevent="handleLogin">
    <div>
      <label>username </label>
      <input type="text" v-model="username" name="username">
    </div>
    <div>
      <label>password </label>
      <input type="password" v-model="password" name="password">
    </div>

    <button type="submit">login</button>
  </form>
</div>
</template>

<style scoped lang="scss">

</style>
