<template>
	<UBEmptyScheduleImage class="ub-empty-schedule-img" />
	<UBTextNoContact class="ub-text-no-contact" />
	<UBCreateContactButton @showModal="showModal" />
	<UBNewContactModal
		:handleSave="handleSave"
		:handleCancel="handleCancel"
		:isVisible="showNewContactModal"
	/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UBEmptyScheduleImage from '@molecules/UBEmptyScheduleImage.vue';
import UBTextNoContact from '@molecules/UBTextNoContact.vue';
import UBNewContactModal from '@molecules/UBNewContactModal.vue';
import UBCreateContactButton from '@molecules/UBCreateContactButton.vue';


export default defineComponent({
	name: 'UBEmptySchedule',
	components: {
		UBEmptyScheduleImage,
		UBTextNoContact,
		UBNewContactModal,
		UBCreateContactButton
	},
	setup() {
		const showNewContactModal = ref(false)

		function handleSave(): void {
			showNewContactModal.value = false
		}

		function handleCancel(): void {
			showNewContactModal.value = false
		}


		function showModal(): void {
			showNewContactModal.value = true;
		};

		return { handleSave, handleCancel, showModal, showNewContactModal }
	}
});
</script>
