<template>
  <C-Logo/>
  <C-HeaderTitle :headerTitle="props.headerTitle"/>
  <C-Notification />
</template>

<script setup lang="ts">
import CLogo from '@components/common/C-Logo.vue'
import CHeaderTitle from '~/components/common/C-HeaderTitle.vue'
import CNotification from '@components/common/C-Notification.vue'

const props = defineProps({
  headerTitle: {
    type: String,
    required: true
  },

  // iconNotification: {
  //   type: String,
  //   required: true,
  //   default: 'defaultNotification.svg'
  // },

  // amountNotification: {
  //   type: Number,
  //   required: true,
  //   default: 0
  // }
})
</script>

<style scoped>

</style>