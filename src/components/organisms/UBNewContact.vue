<template>
  <UBCreateContactButton @showModal="showModal" class="ub-create-contact-button" />
  <UBNewContactModal
    :handleSave="handleSave"
    :handleCancel="handleCancel"
    :isVisible="showNewContactModal"
    :contact="contactData"
    @updateContact="updateContact"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UBNewContactModal from '@molecules/UBNewContactModal.vue';
import UBCreateContactButton from '@molecules/UBCreateContactButton.vue';
import type ContactData from '@/models/contactData';
import { useRouter } from 'vue-router';
import { Rotas } from '@/enums/Rotas';

export default defineComponent({
  name: 'UBEmptySchedule',
  components: {
    UBNewContactModal,
    UBCreateContactButton
  },
  setup() {
    const showNewContactModal = ref(false);
    const contactData = ref({} as ContactData);

    function updateContact({ key, value }: { key: string; value: string }): void {
      contactData.value = { ...contactData.value, [key]: value };
    }

    function handleSave(): void {
      let contactDataArray = new Array<ContactData>();

      contactDataArray = JSON.parse(localStorage.getItem('contactData')!) || [];
      contactDataArray.push(contactData.value);
      localStorage.setItem('contactData', JSON.stringify(contactDataArray));

      showNewContactModal.value = false;

      useRouter().push(Rotas.UBContacts);
    }

    function handleCancel(): void {
      showNewContactModal.value = false;
    }

    function showModal(): void {
      showNewContactModal.value = true;
    }

    return { handleSave, handleCancel, showModal, showNewContactModal, contactData, updateContact };
  }
});
</script>
