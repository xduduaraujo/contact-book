<template>
  <UBEmptyScheduleImage class="ub-empty-schedule-img" />
  <UBTextNoContact class="ub-text-no-contact" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBEmptyScheduleImage from '@molecules/UBEmptyScheduleImage.vue';
import UBTextNoContact from '@molecules/UBTextNoContact.vue';

export default defineComponent({
  name: 'UBEmptySchedule',
  components: {
    UBEmptyScheduleImage,
    UBTextNoContact
  }
});
</script>
