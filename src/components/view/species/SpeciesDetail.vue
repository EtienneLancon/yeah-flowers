<script>
    import { Species } from '../../../services/http/species';
    import { BoolDir } from '../../../directives/booldir'

    export default
    {
        props:['alertService'],
        data(){
            return{
                data: {}
            }
        },
        setup(props) {
            const booldir = new BoolDir();
            const service = new Species(props.alertService);

            return {
                booldir,
                service
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
            <table class="tabledetail">
                <tbody>
                    <tr>
                        <td>{{ $t('species.genus') }}</td>
                        <td>{{ data.genus }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t('species.scientific_name') }}</td>
                        <td>{{ data.scientific_name }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t('species.family_common_name') }}</td>
                        <td>{{ data.family_common_name ?? $t('common.unknown')}}</td>
                    </tr>
                </tbody>
            </table>
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
    img{
        max-width: 40vw;
    }
</style>