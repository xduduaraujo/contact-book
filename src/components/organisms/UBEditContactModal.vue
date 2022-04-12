<template>
	<UBContactModal :handleCancel="cancelEditContact" :handleSave="editContact" :showModal="isVisible"
		title="Editar contato" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBContactModal from '@molecules/UBContactModal.vue'

export default defineComponent({
	name: 'UBNewContactModal',
	components: {
		UBContactModal
	},
	props: {
		editContact: {
			type: Function,
			required: true
		},
		cancelEditContact: {
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

