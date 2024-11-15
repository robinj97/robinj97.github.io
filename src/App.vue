<template>
      <div style="width: 2%;">
        <Menu :model="items" />
      </div>
    <router-view></router-view> <!-- This will render the matched component for the route -->
</template>

<script setup>
import Home from './components/Home.vue';
import { ref } from "vue";
import { useRouter } from 'vue-router';
import Menu from 'primevue/menu';
const router = useRouter();

const items = ref([
  { label: 'Home', icon: 'pi pi-home', command: () => router.push('/') },
  { label: 'Resume', icon: 'pi pi-user', command: () => router.push('/cv') },
  { label: 'LinkedIn', icon: 'pi pi-linkedin', command: () => window.open('https://www.linkedin.com/in/robin-jain/', '_blank') },
  { label: 'GitHub', icon: 'pi pi-github', command: () => window.open('https://github.com/robinj97','_blank') },
  { label: 'Contact', icon: 'pi pi-envelope' },
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
