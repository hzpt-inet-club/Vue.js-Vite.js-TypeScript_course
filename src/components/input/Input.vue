<template>
    <input type="text" v-model="a">
    <br>
    <span>{{a}}</span>
    <br>
    <n-button>123</n-button>
    <n-button type="error">Error</n-button>
</template>

<script lang="ts" setup>
    import {reactive,computed,ref} from 'vue'
    const a = ref("INet")
</script>