<!-- <script>
    import { Plants } from './../../../http/plants';
    import { BoolDir } from '../../../directives/booldir'

    export default
    {
        data(){
            return{
                data: {}
            }
        },
        setup() {
            const service = new Plants();
            const booldir = new BoolDir();

            return {
                service,
                booldir
            }
        },
        created(){
            this.service.get(this.$route.params.id).then(res => this.data = res.data)
        }
    }
</script>
<template>
    <div v-if="data" class="box">
        <img :src="data.image_url"/>
        <div class="text">
            <div class="title">{{data.scientific_name}}</div>
            <div>
                <div>{{ $t('plants.vegetable') }}</div>
                <div>{{ $t(booldir.strBool(data.vegetable)) }}</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .box{
        display: flex;
        padding: 2em;
    }
    .text{
        flex-grow: 100;
        text-align: center;
    }
    .title{
        font-size: 2em;
    }
</style> -->