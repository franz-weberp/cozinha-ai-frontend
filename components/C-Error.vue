<template>
  <div v-if="props.statusCode == 404">
    <p>{{ props.statusCode }} - {{ props.message }}</p>
  </div>

  <div v-else-if="props.statusCode == 500">
    <p>{{ props.statusCode }} - {{ props.message }}</p>
  </div>

  <div v-else>
    <p>{{ props.statusCode }} - {{ props.message }}</p>
  </div>

  <div>
    <button @click="handleError">Voltar</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  statusCode: {
    type: Number,
    required: true
  },

  message: {
    type: String,
    required: true
  }
})

const handleError = () => { clearError({ redirect: '/' }) }
</script>

<style scoped>

</style>