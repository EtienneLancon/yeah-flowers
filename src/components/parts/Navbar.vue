<script setup>

import InputText from '../nano/InputText.vue'

let search = '';

</script>

<template>
    <div class="box bg-blue">
        <router-link to="/plants" class="button">
            <div>{{ $t('navbar.plants') }}</div>
        </router-link>
        <router-link to="/genus">
            <div class="button">{{$t('navbar.genus')}}</div>
        </router-link>
        <router-link to="/species">
            <div class="button">{{$t('navbar.species')}}</div>
        </router-link>
        <!-- <div class="right"><input type="text"/>là va y avoir une loupe</div> -->
        <InputText class="right" v-model="search"></InputText>
    </div>
</template>

<style scoped>
    .box{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .right{
        margin-left: auto;
        align-self: center;
        padding: 0 10px 0 0;
    }
    a{
        text-decoration: none;
        color: inherit;
        background-color: inherit;
    }
    .button{
        padding: 16px;
        align-self: center;
        cursor: pointer;
    }
    .button:hover{
        font-weight: 500;
        color: #063f8f;
        background-color: white;
    }
</style>