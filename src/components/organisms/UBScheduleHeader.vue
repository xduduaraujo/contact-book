<template>
	<header class="wrapper">
		<UBLogo class="ub-logo" />
		<UBCreateContactButton v-if="showNewContactButton" class="ub-new-contact" />
		<UBSearchInput :items="contacts.data" @update:value="handleEvent"
			:class="`${showNewContactButton ? 'ub-si-with-button' : 'ub-si-without-button'}`" />
	</header>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import UBLogo from '@molecules/UBLogo.vue';
import UBSearchInput from '@molecules/UBSearchInput.vue';
import UBCreateContactButton from '@molecules/UBCreateContactButton.vue';
import type ContactData from '@/models/contactData';

export default defineComponent({
	name: 'UBScheduleHeader',
	components: {
		UBLogo,
		UBSearchInput,
		UBCreateContactButton
	},
	props: {
		showNewContactButton: {
			type: Boolean,
			default: false
		}
	},
	setup() {
		const contacts = inject('reactiveContacts') as { data: ContactData[] };
		const filter = inject('filterForContacts') as { value: string }
		const filterContacts = inject('filterContacts') as Function

		const handleEvent = (value: string) => {
			filter.value = value
			filterContacts()
		}

		return { contacts, filter, filterContacts, handleEvent }
	}
});
</script>

<style lang="scss" scoped>
@media (min-width: 1440px) {
	:deep(.ub-si-with-button .ub-search-input) {
		margin: 0 0 0 1.5rem;
	}
}

@media (min-width: 1440px) {
	:deep(.ub-si-without-button .ub-search-input) {
		margin: 0 0 0 14.25rem;
	}
}

.wrapper {
	display: flex;
	align-items: center;
}

@media (max-width: 600px) {
	.wrapper {
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		min-height: 6.25rem;
	}

	.ub-new-contact {
		margin: 10px 0 10px 0 !important;
	}
}

.ub-logo {
	flex: 1;
}

.ub-new-contact {
	max-width: 144px;
	flex: 3;
}

.ub-si-with-button {
	flex: 6;
}

.ub-si-without-button {
	flex: 6;
}
</style>
