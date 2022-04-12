<template>
  <UBEmptyScheduleImage class="ub-empty-schedule-img" />
  <UBTextNoContact class="ub-text-no-contact" />
  <UBCreateContactButton class="mt-6" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBEmptyScheduleImage from '@molecules/UBEmptyScheduleImage.vue';
import UBTextNoContact from '@molecules/UBTextNoContact.vue';
import UBCreateContactButton from '@molecules/UBCreateContactButton.vue';

export default defineComponent({
  name: 'UBEmptySchedule',
  components: {
    UBEmptyScheduleImage,
    UBTextNoContact,
    UBCreateContactButton
  }
});
</script>
