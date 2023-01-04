<script>
    import Search from '../../parts/Search.vue';
    import { Genus } from '../../../services/http/genus';

    export default
    {
        props: ['alertService'],
        setup(props) {
            const service = new Genus(props.alertService);

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