<template>
  <div style="width: 100%; height: 100vh;">
    <div style="width: 2%;">
      <Menu :model="items" />
    </div>
    <h1 style="text-align: center; width: 100%;">Robin Jain</h1>
    <p style="text-align: center; border: 2px dotted gray; width: 50%; margin: 0 auto;">
      Hello and welcome to my page! I am an fullstack developer working towards gaining expertise in the domain of cyber security.
      I love writing about finance, feel free to check out my resume to find out more about my current role and experience.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menu from 'primevue/menu';
import Button from "primevue/button";



const items = ref([
  { label: 'Resume', icon: 'pi pi-user' },
  { label: 'Posts', icon: 'pi pi-book' }
]);
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
