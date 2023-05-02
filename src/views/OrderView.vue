<template>
    <div>
      <h1>下訂單</h1>
      <form @submit.prevent="submitOrder">
        <label>
          姓名：
          <input type="text" v-model="name" />
        </label>
        <label>
          電話：
          <input type="text" v-model="phone" />
        </label>
        <label>
          數量：
          <input type="number" v-model="quantity" />
        </label>
        <button type="submit">下訂單</button>
      </form>
    </div>
  </template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      phone: "",
      quantity: 1
    };
  },
  methods: {
    submitOrder() {
      const orderData = {
        name: this.name,
        phone: this.phone,
        quantity: this.quantity
      };
      axios.post("https://example.com/api/orders", orderData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>