<template>
  <C-SvgRender 
    :iconViewBox="iconEdit.iconViewBox" 
    :iconPath="iconEdit.iconPath" 
    :colorMode="'rgba(97, 97, 97, 1)'" 
    :height="16"
    :width="16"
  />
</template>

<script setup lang="ts">
import CSvgRender from '@components/common/C-SvgRender.vue'
import { edit as iconEdit } from '~/assets/svgs/edit'
</script>

<style scoped>

</style>