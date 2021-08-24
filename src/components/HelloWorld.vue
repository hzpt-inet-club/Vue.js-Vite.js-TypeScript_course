<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button">
    count is: {{ }}
  </button>


  <p>
    Edit
    <code class="text">components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup lang="ts">
  const color = "red"
  const font = {
    size:"3em"
  }
import { defineProps } from 'vue'

defineProps({
  msg: String
});

</script>

<style scoped>
a {
  color: #42b983;
}
.text{
  color: v-bind(color);
  font-size: v-bind("font.size");
}
</style>
