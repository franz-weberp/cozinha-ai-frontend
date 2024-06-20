<template>
  <C-SvgRender 
    :iconViewBox="iconAdd.iconViewBox" 
    :iconPath="iconAdd.iconPath" 
    :colorMode="'rgba(97, 97, 97, 1)'" 
    :height="16"
    :width="16"
  />
</template>

<script setup lang="ts">
import CSvgRender from '@components/common/C-SvgRender.vue'
import { add as iconAdd } from '~/assets/svgs/add'
</script>

<style scoped>

</style>