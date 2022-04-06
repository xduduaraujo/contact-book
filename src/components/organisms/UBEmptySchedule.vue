<template>
	<div class="ub-empty-schedule-wrapper">
		<UBEmptyScheduleImageVue class="ub-empty-schedule-img" />
		<UBTextNoContact class="ub-text-no-contact" />
		<UBCreateContactButton />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBEmptyScheduleImageVue from '@molecules/UBEmptyScheduleImage.vue';
import UBTextNoContact from '@molecules/UBTextNoContact.vue';
import UBCreateContactButton from '@molecules/UBCreateContactButton.vue';

export default defineComponent({
	name: 'UBEmptySchedule',
	components: {
		UBEmptyScheduleImageVue,
		UBTextNoContact,
		UBCreateContactButton
	}
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
</style>
