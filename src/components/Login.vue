<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password">
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
    export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleSubmit() {
        // Send login request to server
        axios.post('/api/login', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          // Save authentication token to local storage
          localStorage.setItem('authToken', response.data.token)
          localStorage.setItem('isAuthenticated', true)
          // Redirect to the previous page or home page
          this.$router.push(this.$route.query.redirect || '/')
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
  </script>
  