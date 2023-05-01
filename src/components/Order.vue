<template>
    <div>
      <h1>Order Pomelo</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" v-model="quantity">
        </div>
        <div>
          <label for="address">Address:</label>
          <textarea id="address" v-model="address"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Order',
    data() {
      return {
        quantity: 1,
        address: ''
      }
    },
    methods: {
      handleSubmit() {
        // Send order request to server
        const authToken = localStorage.getItem('authToken')
        axios.post('/api/order', {
          quantity: this.quantity,
          address: this.address
        }, {
          headers: { 'Authorization': `Bearer ${authToken}` }
        })
        .then(response => {
          alert('Order submitted successfully!')
          // Redirect to the home page
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }
  </script>
  