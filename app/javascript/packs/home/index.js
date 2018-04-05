import Vue from 'vue/dist/vue.esm';
import Vuetify from 'vuetify'
import vueResource from 'vue-resource'

// This the .vue file that we will create next
import HomeIndexView from 'views/home/index.vue';

Vue.use(Vuetify)
Vue.use(vueResource)

const integrationIndex = new Vue({
    el: '#home-index-view',
    components: {
        'home-index-view': HomeIndexView
    }
});