import Plants from './components/view/plants/Plants.vue'
import PlantsDetail from './components/view/plants/PlantsDetail.vue'
import Genus from './components/view/genus/Genus.vue'
// import Genus from './components/view/genus/GenusDetail.vue'

const routes = [
    { path: '/', redirect: '/plants' },
    { path: '/plants/:id', component: PlantsDetail },
    { path: '/plants', component: Plants },
    // { path: '/genus/:id', component: GenusDetail },
    { path: '/genus', component: Genus },
  ];

export default routes;