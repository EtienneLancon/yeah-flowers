import Plants from './components/view/plants/Plants.vue'
import PlantsDetail from './components/view/plants/PlantsDetail.vue'
import Genus from './components/view/genus/Genus.vue'
// import Genus from './components/view/genus/GenusDetail.vue'
import Species from './components/view/species/Species.vue'
import SpeciesDetail from './components/view/species/SpeciesDetail.vue'

const routes = [
    { path: '/', redirect: '/plants' },
    { path: '/plants/:id', component: PlantsDetail },
    { path: '/plants', component: Plants },
    // { path: '/genus/:id', component: GenusDetail },
    { path: '/genus', component: Genus },
    { path: '/species', component: Species },
    { path: '/species/:id', component: SpeciesDetail },
  ];

export default routes;