<template>
	<div class="ub-contact-list">
		<UBContactListHeader />
		<UBContact v-for="contact in contacts" :key="contact.id" :contact="contact" class="highlight" />
	</div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import UBContactListHeader from '@molecules/UBContactListHeader.vue';
import UBContact from '@molecules/UBContact.vue';
import type ContactData from '@/models/contactData';

export default defineComponent({
	name: 'UBContactList',
	components: {
		UBContactListHeader,
		UBContact
	},
	props: {
		contacts: {
			type: Array as PropType<Array<ContactData>>,
			required: true
		}
	}
});
</script>

<style lang="scss" scoped>
@keyframes yellow-fade {
	0% {
		background: var(--ub-very-light-pink);
	}

	100% {
		background: none;
	}
}

.highlight {
	animation: yellow-fade 10s ease-in 1;
}

.highlight:hover {
	background: var(--ub-very-light-pink);
}
</style>
