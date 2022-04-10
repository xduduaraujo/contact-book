<template>
  <UBEmptyScheduleImage class="ub-empty-schedule-img" />
  <UBTextNoContact class="ub-text-no-contact" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UBEmptyScheduleImage from '@molecules/UBEmptyScheduleImage.vue';
import UBTextNoContact from '@molecules/UBTextNoContact.vue';
import UBNewContactModal from '@molecules/UBNewContactModal.vue';
import UBCreateContactButton from '@molecules/UBCreateContactButton.vue';
import type ContactData from '@/models/contactData';

export default defineComponent({
  name: 'UBEmptySchedule',
  components: {
    UBEmptyScheduleImage,
    UBTextNoContact,
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
