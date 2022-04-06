<template>
  <UBEmptySchedule />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBEmptySchedule from '@organisms/UBEmptySchedule.vue';

export default defineComponent({
  name: 'UBHome',
  components: {
    UBEmptySchedule
  }
});
</script>

<style lang="scss" scoped></style>
