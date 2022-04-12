<template>
	<UBButton text="Criar contato" class="ub-create-contact-button" :handleClick="openNewContactModal">
		<UBIcon alt="Plus Icon" :image="plusIcon" width="16" height="16" />
		</UBButton>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import UBButton from '@atoms/UBButton.vue';
import UBIcon from '@atoms/UBIcon.vue';
import plusIcon from '@/assets/plus.svg';

export default defineComponent({
	name: 'UBCreateContactButton',
	components: {
		UBButton,
		UBIcon
	},

	setup() {
		const showNewContactModal = inject('showNewContactModal')

		const openNewContactModal = () => {
			showNewContactModal.value = !showNewContactModal.value
		}

		return { plusIcon, openNewContactModal };
	}
});
</script>

<style lang="scss" scoped>
.ub-create-contact-button {
	color: var(--ub-orange);
	font-size: 0.875rem;
	background-color: var(--ub-light-yellowish-green);
}
</style>
