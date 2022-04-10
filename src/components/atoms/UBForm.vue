<template>
  <form :style="`height:${height}`">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UBForm',
  props: {
    height: {
      type: String,
      default: '200px'
    }
  }
});
</script>
