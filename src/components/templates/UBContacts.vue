<template>
	<UBScheduleHeader :showNewContactOrganism="true" class="ub-schedule-header" />
	<UBContactList :contacts="reactiveContacts"/>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive } from 'vue';
import UBEmptySchedule from '@organisms/UBEmptySchedule.vue';
import UBScheduleHeader from '@organisms/UBScheduleHeader.vue';
import UBContactList from '@organisms/UBContactList.vue';
import { LocalStorageUtils } from '@/utils/local-storage-utils';

export default defineComponent({
	name: 'UBContacts',
	components: {
		UBEmptySchedule,
		UBScheduleHeader,
		UBContactList
	},
	setup() {
		onMounted(() => {
			LocalStorageUtils.checkRouterToGoBasedOnContactListInLocalStorage();
		});

		const contacts = LocalStorageUtils.getContactList()

		const reactiveContacts = reactive(contacts)

		provide('reactiveContacts', reactiveContacts)

		return { reactiveContacts }
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

.ub-schedule-header {
	:deep(.ub-create-contact-button) {
		margin-left: 3.75rem;
		height: 32px
	}
}

@media (max-width: 600px) {
	.ub-schedule-header {
		:deep(.ub-contact-button) {
			margin: 15px 0 15px 0;
		}
	}
}
</style>
