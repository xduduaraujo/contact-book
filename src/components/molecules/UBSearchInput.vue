<template>
  <div class="input-container">
    <UBTextField name="searchInput" placeholder="Buscar..." class="ub-text-field" />
    <UBIcon alt="Search Icon" :image="searchIcon" width="16" height="16" class="ub-search-icon" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBTextField from '@atoms/UBTextField.vue';
import UBIcon from '@atoms/UBIcon.vue';
import searchIcon from '@/assets/search-icon.svg';

export default defineComponent({
  name: 'UBSearchInput',
  components: {
    UBTextField,
    UBIcon
  },
  setup() {
    return { searchIcon };
  }
});
</script>

<style lang="scss" scoped>
@media (min-width: 1440px) {
  .ub-text-field {
    margin: 0 0 0 228px;
  }
}
@media (min-width: 480px) and (max-width: 1439px) {
  .ub-text-field {
    margin: 0 0 0 60px;
  }
}
.input-container {
  display: flex;
  width: 100%;
  position: relative;
}
.ub-search-icon {
  position: absolute;
  right: 0;
  margin: 8px;
}
</style>
