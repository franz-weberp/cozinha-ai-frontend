<template>
  <NuxtLayout name="layout-default" :headerTitle="'Error Page'">
    <template #content>
      <C-Error v-if="error" :statusCode="error.statusCode" :message="error.message" />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app"
import CError from '@components/C-Error.vue'

const props = defineProps({ error: Object as () => NuxtError })

</script>

<style scoped>

</style>