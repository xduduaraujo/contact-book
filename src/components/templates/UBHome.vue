<template>
	<UBScheduleHeader />

	<div class="ub-empty-schedule-wrapper">
		<UBEmptySchedule />
		<UBNewContact />
	</div>
</template>

<script lang="ts">
import UBEmptySchedule from '@organisms/UBEmptySchedule.vue';
import UBScheduleHeader from '@organisms/UBScheduleHeader.vue';
import UBNewContact from '@organisms/UBNewContact.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'UBHome',
	components: {
		UBEmptySchedule,
		UBNewContact,
		UBScheduleHeader
	},

});
</script>

<style lang="scss" scoped>
.ub-empty-schedule-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 7rem;

	.ub-text-no-contact {
		margin-top: 1.5rem;
	}
}

@media (max-width: 480px) {
	.ub-empty-schedule-wrapper {
		margin-top: 3rem;
	}

	.ub-empty-schedule-img {
		width: 60%;
	}

	.ub-text-no-contact {
		font-size: 0.6rem;
		margin-top: 0.8rem;
	}
}

.ub-empty-schedule-wrapper {
	:deep(.ub-contact-button) {
		margin-top: 1.5rem;
	}
}

@media (max-width: 480px) {
	.wrapper {
		:deep(.input-container) {
			margin-top: 1.5rem;
		}
	}
}
</style>
