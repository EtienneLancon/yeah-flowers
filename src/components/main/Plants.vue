<script>
    import { ref, watchEffect } from 'vue';
    import Search from '../parts/Search.vue';
    import { Plants } from './../../http/plants';

    export default
    {
        setup() {
            const service = new Plants();

            const searchForm = {
                common_name: '',
                scientific_name: '',
                genus_name: '',
                family_name: ''
            }

            const data = ref(null)

            watchEffect(() => {
                if (data.value) {
                    // do something when data is loaded
                }
            })

            return {
                service,
                searchForm,
                data
            };
        },
        methods:{
            display(result){
                this.data = result
                console.log(this.data)
            }
        },
        components:{
            Search
        }
    }
    
</script>
<template>
    <Search v-bind:service="service" :form="searchForm" @result="display"></Search>
    <div>{{ JSON.stringify(data?.data) }}</div>
</template>