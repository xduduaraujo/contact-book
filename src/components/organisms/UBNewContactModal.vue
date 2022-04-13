<template>
  <UBContactModal
    :handleCancel="cancelNewContact"
    :handleSave="addNewContact"
    :showModal="isVisible"
    title="Criar novo contato"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBContactModal from '@molecules/UBContactModal.vue';

export default defineComponent({
  name: 'UBNewContactModal',
  components: {
    UBContactModal
  },
  props: {
    addNewContact: {
      type: Function,
      required: true
    },
    cancelNewContact: {
      type: Function,
      required: true
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  }
});
</script>
