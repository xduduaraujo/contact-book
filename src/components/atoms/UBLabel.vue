<template>
  <label :for="name">{{ name }}</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UBLabel',
  props: {
    name: {
      type: String,
      required: true
    }
  }
});
</script>
