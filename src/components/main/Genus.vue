<script>
    import Search from '../parts/Search.vue';
    import { Genus } from './../../http/genus';

    export default
    {
        setup() {
            const service = new Genus();

            const searchForm = {
                name: ''
            }

            return {
                service,
                searchForm
            };
        },
        components:{
            Search
        }
    }
    
</script>
<template>
    <Search :service="service" :form="searchForm"></Search>
</template>