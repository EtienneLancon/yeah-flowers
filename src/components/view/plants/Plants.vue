<script>
    import { ref } from 'vue';
    import Search from '../../parts/Search.vue';
    import { Plants } from '../../../http/plants';

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

            const displayFields = ['common_name',
                                    'scientific_name',
                                    'year',
                                    'status',
                                    'rank',
                                    'family_common_name',
                                    'genus']

            const data = ref(null)

            return {
                service,
                searchForm,
                data,
                displayFields
            };
        },
        components:{
            Search
        }
    }
    
</script>
<template>
    <Search v-bind:service="service" :form="searchForm" @result="(result) => data = result"></Search>
    <div v-if="!!data">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="field in displayFields">{{$t('plants.'+field)}}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="plant in data.data" @dblclick="$router.push({path: '/plants/'+plant.id})">
                    <td v-for="field in displayFields">{{ plant[field] }}</td>
                    <td><img :src="plant.image_url" :alt="plant.scientific_name"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    div{
        display: flex;
        justify-content: center ;
    }
    img{
        max-height: 10vh;
    }
    .table{
        cursor: pointer;
    }
</style>