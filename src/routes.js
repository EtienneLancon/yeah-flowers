import Plants from './components/main/Plants.vue'
import Genus from './components/main/Genus.vue'

const routes = [
    { path: '/', redirect: '/plants' },
    { path: '/plants', component: Plants },
    { path: '/genus', component: Genus },
  ];

export default routes;