import Vue from 'vue/dist/vue.esm';
import Vuetify from 'vuetify'
import vueResource from 'vue-resource'
import draggable from 'vuedraggable'

// This the .vue file that we will create next
import HomeDragAndDropView from 'views/home/drag_and_drop.vue';

Vue.use(Vuetify)
Vue.use(vueResource)
Vue.component('draggable', draggable);

const integrationIndex = new Vue({
    el: '#home-drag_and_drop-view',
    components: {
        draggable,
        'home-drag_and_drop-view': HomeDragAndDropView
    }
});