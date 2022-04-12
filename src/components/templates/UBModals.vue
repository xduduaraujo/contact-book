<template>
  <UBNewContactModal
    :isVisible="showNewContactModal.value"
    :cancelNewContact="cancelNewContact"
    :addNewContact="addNewContact"
  />
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref, inject } from 'vue';
import UBNewContactModal from '@organisms/UBNewContactModal.vue';
import type ContactData from '@/models/contactData';
import { LocalStorageUtils } from '@/utils/local-storage-utils';

export default defineComponent({
  name: 'UBModals',
  components: {
    UBNewContactModal
  },
  setup() {
    const contactData = reactive({} as ContactData);
    const contactDataArray = (inject('reactiveContacts') as ContactData[]) || new Array<ContactData>();
    const showNewContactModal = inject('showNewContactModal') as { value: boolean };

    function addNewContact(): void {
      const contactId = contactDataArray.length ?? 0;
      contactDataArray.push({ id: contactId, ...contactData });

      localStorage.setItem('contactData', JSON.stringify(contactDataArray));

      clearContactDataFromInputs();
      showNewContactModal.value = false;
      LocalStorageUtils.checkRouterToGoBasedOnContactListInLocalStorage();
    }

    function clearContactDataFromInputs(): void {
      Object.keys(contactData).forEach((key) => delete contactData[key as keyof typeof contactData]);
    }

    function cancelNewContact(): void {
      showNewContactModal.value = false;
    }

    provide('contactData', contactData);

    return { showNewContactModal, cancelNewContact, addNewContact };
  }
});
</script>
