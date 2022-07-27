<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1 style="text-align: center;">{{ msg }}</h1>

  <div class="card" style="text-align: center;">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
</style>