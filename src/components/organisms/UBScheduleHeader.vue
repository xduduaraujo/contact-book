<template>
  <header class="wrapper">
    <UBLogo />
    <UBNewContact v-if="showNewContactOrganism" />
    <UBSearchInput />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBLogo from '@molecules/UBLogo.vue';
import UBSearchInput from '@molecules/UBSearchInput.vue';
import UBNewContact from '@organisms/UBNewContact.vue';

export default defineComponent({
  name: 'UBScheduleHeader',
  components: {
    UBLogo,
    UBSearchInput,
    UBNewContact
  },
  props: {
    showNewContactOrganism: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  padding: 10px;
}
@media (max-width: 480px) {
  .wrapper {
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    min-height: 6.25rem;
  }
}
</style>
