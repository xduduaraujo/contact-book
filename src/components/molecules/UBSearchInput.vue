<template>
  <div class="input-container">
    <UBTextField name="searchInput" placeholder="Buscar..." class="ub-search-input" />
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
@media (min-width: 600px) and (max-width: 1439px) {
  .ub-search-input {
    margin: 0 0 0 3.75rem;
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
  margin: 0.5rem;
}
</style>
