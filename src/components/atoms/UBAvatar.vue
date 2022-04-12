<template>
  <img :alt="alt" :src="image" :width="width" :height="height" class="ub-avatar" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UBAvatar',
  props: {
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.ub-avatar {
  vertical-align: middle;
  border-radius: 50%;
  margin: 8px;
}
</style>
