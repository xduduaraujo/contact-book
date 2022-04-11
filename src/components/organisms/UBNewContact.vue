<template>
	<UBCreateContactButton @showModal="showModal" class="ub-contact-button" />
	<UBNewContactModal
		:handleSave="handleSave"
		:handleCancel="handleCancel"
		:isVisible="showNewContactModal"
		:contact="contactData"
		@updateContact="updateContact"
  />
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
import UBNewContactModal from '@molecules/UBNewContactModal.vue';
import UBCreateContactButton from '@molecules/UBCreateContactButton.vue';
import { LocalStorageUtils } from '@/utils/local-storage-utils';
import { useRouter } from 'vue-router';
import type ContactData from '@/models/contactData';

export default defineComponent({
	name: 'UBEmptySchedule',
	components: {
		UBNewContactModal,
		UBCreateContactButton
	},
	setup() {
		const showNewContactModal = ref(false);
		const contactData = ref({} as ContactData);
		const contactDataArray = inject('reactiveContacts') as ContactData[] || new Array<ContactData>()


		function updateContact({ key, value }: { key: string; value: string }): void {
			contactData.value = { ...contactData.value, [key]: value };
		}

		function handleSave(): void {
			(contactDataArray as any).push(contactData.value);
			localStorage.setItem('contactData', JSON.stringify(contactDataArray));

			showNewContactModal.value = false;

			LocalStorageUtils.checkRouterToGoBasedOnContactListInLocalStorage()
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
