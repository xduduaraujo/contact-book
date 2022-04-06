<template>
  <UBImage alt="Empty Schedule" :image="emptySchedule" width="237" height="200" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBImage from '@atoms/UBImage.vue';
import emptySchedule from '@/assets/empty-schedule.svg';

export default defineComponent({
  name: 'UBLogo',
  setup() {
    return { emptySchedule };
  },
  components: {
    UBImage
  }
});
</script>
