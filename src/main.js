import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//FONTAWESOME ===
import { library } from '@fortawesome/fontawesome-svg-core';

// /* import specific icons */
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faGithub);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
