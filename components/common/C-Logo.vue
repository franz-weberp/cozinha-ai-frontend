<template>
  <C-SvgRender 
    :iconViewBox="iconLogo.iconViewBox" 
    :iconPath="iconLogo.iconPath" 
    :colorMode="'rgba(97, 97, 97, 1)'" 
    :height="16"
    :width="16"
  />
</template>

<script setup lang="ts">
import CSvgRender from '@components/common/C-SvgRender.vue'
import { logo as iconLogo } from '~/assets/svgs/logo'
</script>

<style scoped>

</style>