import Vue from 'vue/dist/vue.esm';
import Vuetify from 'vuetify'
import vueResource from 'vue-resource'
import draggable from 'vuedraggable'

// This the .vue file that we will create next
import HomeReorderView from 'views/home/reorder.vue';

Vue.use(Vuetify)
Vue.use(vueResource)
Vue.component('draggable', draggable);

const integrationIndex = new Vue({
    el: '#home-reorder-view',
    components: {
        draggable,
        'home-reorder-view': HomeReorderView
    }
});