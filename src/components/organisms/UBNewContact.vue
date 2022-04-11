<template>
	<UBCreateContactButton @showModal="showModal" class="ub-contact-button" />
	<UBNewContactModal
		:handleCancel="handleCancel"
		:isVisible="showNewContactModal"
  />
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref, inject } from 'vue';
import UBNewContactModal from '@molecules/UBNewContactModal.vue';
import UBCreateContactButton from '@molecules/UBCreateContactButton.vue';
import type ContactData from '@/models/contactData';
import { LocalStorageUtils } from '@/utils/local-storage-utils';

export default defineComponent({
	name: 'UBEmptySchedule',
	components: {
		UBNewContactModal,
		UBCreateContactButton
	},
	setup() {
		const contactData = reactive({} as ContactData);
		const showNewContactModal = ref(false);
		const contactDataArray = inject('reactiveContacts') as ContactData[] || new Array<ContactData>()

		const updateContact = (id: number, contactDataParam: ContactData) => {
			const indexOfContactInArray = contactDataArray.findIndex((contactData: ContactData) => contactData.id === id)

			contactDataArray[indexOfContactInArray] = contactDataParam
		}

		function handleSave(): void {
			const contactId = contactDataArray.length ?? 0
			contactDataArray.push({ id: contactId, ...contactData });
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

		provide('contactData', contactData)
		provide('handleContactSave', handleSave)

		return { handleCancel, showModal, showNewContactModal };
	}
});
</script>
