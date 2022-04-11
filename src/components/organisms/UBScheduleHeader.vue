<template>
	<header class="wrapper">
		<UBLogo class="ub-logo" />
		<UBNewContact v-if="showNewContactOrganism" class="ub-new-contact" />
		<UBSearchInput :class="`${showNewContactOrganism ? 'ub-si-with-button' : 'ub-si-without-button'}`" />
		</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBLogo from '@molecules/UBLogo.vue';
import UBSearchInput from '@molecules/UBSearchInput.vue';
import UBNewContact from '@organisms/UBNewContact.vue';

export default defineComponent({
	name: 'UBScheduleHeader',
	components: {
		UBLogo,
		UBSearchInput,
		UBNewContact
	},
	props: {
		showNewContactOrganism: {
			type: Boolean,
			default: false
		}
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
}

.ub-logo {
	flex: 1
}

.ub-new-contact {
	flex: 3
}

.ub-si-with-button {
	flex: 6
}

.ub-si-without-button {
	flex: 6
}
</style>
