<template>
  <header class="ub-title" id="ubTitle">
    <h1 name="title">{{ text }}</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UBTitle',
  props: {
    text: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.ub-title h1 {
  width: 132px;
  height: 19px;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 1rem;
  color: var(--dark);
}
</style>
