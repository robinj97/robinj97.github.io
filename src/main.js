import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import 'primeicons/primeicons.css';
import '../style.css';
const app = createApp(App);
app.use(PrimeVue, {
  // Default theme configuration
  theme: {
      preset: Aura,
      options: {
          prefix: 'p',
          cssLayer: false
      }
  }
});
app.mount('#app');
