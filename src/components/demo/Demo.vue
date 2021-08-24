<template>
    <div>默认值：{{a.count}}</div>
</template>

<script setup lang="ts">
    import {reactive,computed} from 'vue'
    const a = reactive({
        count:0
    })
</script>