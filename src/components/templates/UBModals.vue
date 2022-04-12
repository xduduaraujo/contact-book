<template>
	<UBNewContactModal
		:isVisible="showNewContactModal.value"
		:cancelNewContact="closeModals"
		:addNewContact="addNewContact" />

	<UBDeleteContactModal
		:isVisible="showDeleteContactModal.value"
		:cancelDeleteContact="closeModals"
		:deleteContact="deleteContact" />
</template>

<script lang="ts">
import { defineComponent, provide, reactive, inject } from 'vue';
import UBNewContactModal from '@organisms/UBNewContactModal.vue';
import UBDeleteContactModal from '@organisms/UBDeleteContactModal.vue';
import type ContactData from '@/models/contactData';
import { LocalStorageUtils } from '@/utils/local-storage-utils';

export default defineComponent({
	name: 'UBModals',
	components: {
		UBNewContactModal,
		UBDeleteContactModal
	},
	setup() {
		const contactData = reactive({} as ContactData);


		const contactDataArray = (inject('reactiveContacts') as ContactData[]) || new Array<ContactData>();
		const showNewContactModal = inject('showNewContactModal') as { value: boolean };
		const showEditContactModal = inject('showEditContactModal') as { value: boolean };
		const showDeleteContactModal = inject('showDeleteContactModal') as { value: boolean };
		const deleteContact = inject('deleteContact') as Function


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

		function closeModals(): void {
			showNewContactModal.value = false;
			showEditContactModal.value = false;
			showDeleteContactModal.value = false;
		}


		provide('contactData', contactData);

		return { showNewContactModal, showDeleteContactModal, closeModals, addNewContact, deleteContact };
	}
});
</script>
