<template>
  <UBEmptyScheduleImageVue />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBEmptyScheduleImageVue from '@molecules/UBEmptyScheduleImage.vue';

export default defineComponent({
  name: 'UBEmptySchedule',
  components: {
    UBEmptyScheduleImageVue
  }
});
</script>

<style lang="scss" scoped></style>
