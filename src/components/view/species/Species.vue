<script>
    import Search from '../../parts/Search.vue';
    import { Species } from '../../../services/http/species';
    import { ref } from 'vue';

    export default
    {
        props: ['alertService'],
        setup(props) {
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

            const service = new Species(props.alertService);

            return {
                searchForm,
                data,
                displayFields,
                service
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
                    <th v-for="field in displayFields">{{$t('species.'+field)}}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="plant in data.data" @dblclick="$router.push({path: '/species/'+plant.id})">
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