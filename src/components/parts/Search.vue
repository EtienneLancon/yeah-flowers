<script>
    import InputText from '../nano/InputText.vue';

    export default
    {
        props: ['service', 'form'],
        emits: ['result'],
        data() {
            return {
                keys: [],
            };
        },
        created(){
            this.keys = Object.keys(this.form)
        },
        methods:{
            async getResult(){
                const res = await this.service.filter(this.form)
                this.$emit('result', res)
            }
        },
        components:{
            InputText
        }
    }
</script>

<template>
    <div class="box bd-marroon">
        <div class="inputdiv" v-for="key in keys">
            <InputText :llabel="$t('search.'+key)" v-model="this.form[key]"></InputText>
        </div>
        <button class="btn" @click="getResult">{{$t('search.button')}}</button>
    </div>
</template>

<style scoped>
    .box{
        width: 96%;
        margin: 1%;
        padding: 1%;
        border-width: 1px;
        border-style: solid;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .inputdiv{
        margin-left: 1em;
    }

    .btn{
        margin-left: 16px;
    }
</style>