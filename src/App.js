import Vue from 'vue';
import Demo from './demo.vue';
import SlideVuePlugin from 'slide-vue';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

Vue.use(SlideVuePlugin);

new Vue({render: h => h(Demo)}).$mount('#vue-demo');
