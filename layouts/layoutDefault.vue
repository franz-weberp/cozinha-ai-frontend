<template>
  <header>
    <C-Header :headerTitle="props.headerTitle"/>
  </header>

  <main>
    <section>
      <slot name="content"></slot>
    </section>
  </main>
  
  <footer>
    <C-Footer />
  </footer>
</template>

<script setup lang="ts">
import CHeader from '@components/common/C-Header.vue'
import CFooter from '@components/common/C-Footer.vue'

const props = defineProps({
  headerTitle: {
    type: String,
    required: true,
    default: 'Title Page'
  }
})
</script>

<style scoped lang="scss">

</style>