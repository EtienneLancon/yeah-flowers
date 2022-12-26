<script setup>
    
    defineProps(['modelValue', 'rlabel', 'llabel'])
    defineEmits(['update:modelValue'])
    
</script>

<template>
    <div>
        <label class="llabel" v-if="llabel">{{ llabel }}</label>
        <input
            type="text"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <label class="rlabel" v-if="rlabel">{{ rlabel }}</label>
    </div>
</template>

<style scoped>
    input{
        border-radius: 0;
        border-style: solid;
        border-color: #8F6006;
        border-width: 1px;
    }
    input:focus{
        outline: none;
    }
    .llabel{
        padding-right: 16px;
    }
    .rlabel{
        padding-left: 16px;
    }
</style>