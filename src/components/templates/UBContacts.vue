<template>
  <UBScheduleHeader :showNewContactOrganism="true" />

  <div class="ub-empty-schedule-wrapper">
    <UBEmptySchedule />
    dasdsadas
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBEmptySchedule from '@organisms/UBEmptySchedule.vue';
import UBScheduleHeader from '@organisms/UBScheduleHeader.vue';

export default defineComponent({
  name: 'UBContacts',
  components: {
    UBEmptySchedule,
    UBScheduleHeader
  }
});
</script>

<style lang="scss" scoped>
.ub-empty-schedule-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;

  .ub-text-no-contact {
    margin-top: 1.5rem;
  }
}
@media (max-width: 480px) {
  .ub-empty-schedule-wrapper {
    margin-top: 3rem;
  }
  .ub-empty-schedule-img {
    width: 60%;
  }
  .ub-text-no-contact {
    font-size: 0.6rem;
    margin-top: 0.8rem;
  }
}
</style>
