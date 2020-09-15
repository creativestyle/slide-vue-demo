import Vue from 'vue';
import Demo from './demo.vue';
import SlideVuePlugin from 'slide-vue';

Vue.use(SlideVuePlugin);

new Vue({render: h => h(Demo)}).$mount('#vue-demo');
