<template>
  <footer :style="`width:${width}`">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UBFooter',
  props: {
    width: {
      type: String,
      default: '200px'
    }
  }
});
</script>
