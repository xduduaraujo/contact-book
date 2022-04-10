<template>
  <div class="ub-modal-backdrop" v-if="isVisible">
    <div
      class="ub-modal"
      :style="`height:${height}; width:${width}`"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UBModal',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
      required: true
    },
    height: {
      type: String,
      default: '200px'
    },
    width: {
      type: String,
      default: '200px'
    }
  }
});
</script>

<style lang="scss" scoped>
.ub-modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.ub-modal {
  border-radius: 16px;
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
  background-color: var(--white-two);
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
</style>
