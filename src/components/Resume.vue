<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <Card style="overflow: hidden; width: 50%;">
      <template #header>
          <i class="pi pi-graduation-cap" style="font-size: 2em;"></i>
      </template>
      <template #title>Msc Cybsersecurity</template>
      <template #subtitle>
        <div style="display: flex; justify-content: space-between;">
          <span>University of Strathclyde, Glasgow</span>
          <span>2024-2025</span>
        </div></template>
      <template #content>
              <ul>
                <li>First honors</li>
                <li>Programme representative</li>
                <li>Relevant modules: Security Protocols and Threat Models, Advanced Human Centred Security</li>
              </ul>
      </template>
    </Card>
  </div>
</template>


<script setup>
import Card from 'primevue/card';

</script>
