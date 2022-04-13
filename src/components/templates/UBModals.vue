<template>
  <UBNewContactModal
    :isVisible="showNewContactModal.value"
    :cancelNewContact="closeModals"
    :addNewContact="addNewContact"
  />

  <UBDeleteContactModal
    :isVisible="showDeleteContactModal.value"
    :cancelDeleteContact="closeModals"
    :deleteContact="deleteContact"
  />

  <UBEditContactModal
    :isVisible="showEditContactModal.value"
    :cancelEditContact="closeModals"
    :editContact="updateContact"
  />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import UBNewContactModal from '@organisms/UBNewContactModal.vue';
import UBDeleteContactModal from '@organisms/UBDeleteContactModal.vue';
import UBEditContactModal from '@organisms/UBEditContactModal.vue';

export default defineComponent({
  name: 'UBModals',
  components: {
    UBNewContactModal,
    UBDeleteContactModal,
    UBEditContactModal
  },
  setup() {
    const showNewContactModal = inject('showNewContactModal') as { value: boolean };
    const showEditContactModal = inject('showEditContactModal') as { value: boolean };
    const showDeleteContactModal = inject('showDeleteContactModal') as { value: boolean };
    const deleteContact = inject('deleteContact') as Function;
    const addNewContact = inject('addNewContact') as Function;
    const updateContact = inject('updateContact') as Function;
    const closeModals = inject('closeModals') as Function;

    return {
      showNewContactModal,
      showDeleteContactModal,
      showEditContactModal,
      closeModals,
      addNewContact,
      deleteContact,
      updateContact
    };
  }
});
</script>
