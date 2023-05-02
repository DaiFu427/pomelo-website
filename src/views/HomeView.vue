<template>
  <div>
    <h1>柚子列表</h1>
    <ul>
      <li v-for="grapefruit in grapefruits" :key="grapefruit.id">
        {{ grapefruit.name }} - {{ grapefruit.price }}元
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      grapefruits: [],
    };
  },
  mounted() {
    axios.get('/api/grapefruits').then((response) => {
      this.grapefruits = response.data;
    });
  },
};
</script>
