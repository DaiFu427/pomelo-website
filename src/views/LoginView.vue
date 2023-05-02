<template>
    <div>
      <h1>登入</h1>
      <form @submit.prevent="submitLoginForm">
        <label>
          用戶名：
          <input type="text" v-model="username" />
        </label>
        <label>
          密碼：
          <input type="password" v-model="password" />
        </label>
        <button type="submit">登入</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      submitLoginForm() {
        axios.post('/api/login', {
          username: this.username,
          password: this.password,
        }).then((response) => {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/my-orders');
        }).catch((error) => {
          console.error(error);
        });
      },
    },
  };
  </script>
  