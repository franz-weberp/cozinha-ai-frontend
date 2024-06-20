<template>
  <C-SvgRender 
    :iconViewBox="iconCollapse.iconViewBox" 
    :iconPath="iconCollapse.iconPath" 
    :colorMode="'rgba(97, 97, 97, 1)'" 
    :height="16"
    :width="16"
  />
</template>

<script setup lang="ts">
import CSvgRender from '@components/common/C-SvgRender.vue'
import { collapse as iconCollapse } from '~/assets/svgs/collapse'
</script>

<style scoped>

</style>