<template>
  <NuxtLayout name="layout-default" :headerTitle="'Lets Cook'">
    <template #content>
      <p>Let's Cook</p>
      <C-Accordion :dataAccordion="mockAccordionLetsCook"/>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import CAccordion from '@components/common/C-Accordion.vue'
import { accordion as mockAccordionLetsCook } from '@mock/mockAccordionLetsCook'

</script>

<style scoped>

</style>