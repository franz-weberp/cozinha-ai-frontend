<template>
  <div class="accordion">
    <div class="accordion-header" @click="change(expandedStatus)">
      <C-IconCollapse />
      {{ panel.data.title }}
      <C-IconEdit />
      <C-IconAdd />
    </div>

    <div class="step" :class="expandedClass">
      <ul>
        <li 
          v-for="(step, stepIndex) in panel.data.steps" 
          :key="stepIndex"
          class="accordion-content"
        >
          <p>{{ composableIncrement(stepIndex) }}. {{ step }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { composableIncrement } from '@composables/composableIncrement'
import { composableToggle } from '@composables/composableToggle'
import { composableCollapsable } from '@composables/composableCollapsable'
import type { Accordion } from '@interfaces/accordion'

import CIconCollapse from '@components/C-IconCollapse'
import CIconEdit from '@components/C-IconEdit'
import CIconAdd from '@components/C-IconAdd'

const props = defineProps({
  dataAccordion: {
    type: Object as () => Accordion,
    required: true,
    default: () => ({
      title: 'Title Accordion',
      steps: ['Step']
    })
  }
})

const panel = ref({ data: props.dataAccordion, expandedStatus: true, class: '-open' })
const expandedStatus = computed(() => panel.value.expandedStatus)
const expandedClass = computed(() => panel.value.class)

const change = (param) => { 
  panel.value.expandedStatus = composableToggle(param)
  changeClass(panel.value.expandedStatus)
}

const changeClass = (param) => { panel.value.class = composableCollapsable(param) }
</script>

<style scoped lang="scss">
.accordion-header { cursor: pointer; }

.-open {
  height: 100px;
  opacity: 1;
  transition: height 1000ms cubic-bezier(0.6, -1, 0.3, 2), opacity 750ms 500ms ease-in;
}

.-closed {
  height: 0;
  opacity: 0;
  transition: height 750ms cubic-bezier(0.6, -1, 0.3, 2), opacity 300ms ease-in;
}
</style>