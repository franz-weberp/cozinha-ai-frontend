<template>
  <h1>{{ props.headerTitle }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  headerTitle: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>