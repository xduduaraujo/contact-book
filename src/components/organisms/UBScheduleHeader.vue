<template>
  <header class="wrapper">
    <UBLogo />
    <UBSearchInput />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBLogo from '@molecules/UBLogo.vue';
import UBSearchInput from '@molecules/UBSearchInput.vue';

export default defineComponent({
  name: 'UBScheduleHeader',
  components: {
    UBLogo,
    UBSearchInput
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
    min-height: 100px;
  }
}
</style>
