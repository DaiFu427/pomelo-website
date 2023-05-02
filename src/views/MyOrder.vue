<template>
    <div>
      <h1>我的訂單</h1>
      <ul>
        <li v-for="order in orders" :key="order.id">
          {{ order.name }} - {{ order.phone }} - {{ order.quantity }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        orders: [],
      };
    },
    mounted() {
        const token = localStorage.getItem('token');
        axios.get('https://api.example.com/orders', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        this.orders = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>
  