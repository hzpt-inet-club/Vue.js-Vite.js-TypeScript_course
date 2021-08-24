<template>
    <div>默认值：{{a.count}}</div>
    <div>{{a.sum}}</div>
    <button @click="add()">按钮</button>
    <div>{{b}}</div>
</template>

<script lang="ts" setup>
import {reactive,computed,ref} from 'vue'

type Result = {
        count:number,
        sum:number
    }
    const a:Result = reactive({
        count:100,
        sum: computed(() => a.count * 2)
    })

    const b = ref(10)

    function add(){
        a.count++;
        b.value++
    }
</script>