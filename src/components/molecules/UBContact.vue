<template>
	<div class="ub-contact">
		<div class="ub-contact-avatar">
			<UBAvatar :alt="`${contact.name} Avatar`" width="24" height="24" :image="square" v-if="contact.name" />
			<UBText :text="contact.name?.charAt(0).toUpperCase()" class="ub-first-letter-of-name" />
		</div>
		<UBText :text="contact.name" class="ub-contact-info" />
		<UBText :text="contact.email" class="ub-contact-info" />
		<UBText :text="contact.telephone" class="ub-contact-info" />
		<UBIcon alt="Edit Icon" :image="edit" width="16" height="16" class="ub-edit-icon" :onClick="() => { }" />
		<UBIcon
			alt="Delete Icon"
			:image="deleteIcon"
			width="16"
			height="16"
			class="ub-delete-icon"
			:onClick="openDeleteContactModal" />
	</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import UBAvatar from '@atoms/UBAvatar.vue';
import UBIcon from '@atoms/UBIcon.vue';
import square from '@/assets/square.svg';
import edit from '@/assets/edit.svg';
import deleteIcon from '@/assets/delete.svg';
import UBText from '@atoms/UBText.vue';
import type ContactData from '@/models/contactData';

export default defineComponent({
	name: 'UBContact',
	components: { UBAvatar, UBText, UBIcon },
	props: {
		contact: {
			type: Object,
			required: true
		}
	},
	setup(props) {
		const showDeleteContactModal = inject('showDeleteContactModal') as { value: boolean }
		const contactIdToBeDeleted = inject('contactIdToBeDeleted') as { value: number }

		const openDeleteContactModal = () => {
			showDeleteContactModal.value = true
			contactIdToBeDeleted.value = props.contact.id
			console.log(contactIdToBeDeleted)
		}

		return { square, deleteIcon, edit, openDeleteContactModal };
	}
});
</script>

<style lang="scss" scoped>
.ub-contact {
	display: flex;
	height: 40px;
	border-radius: 4px;
	border: solid 1px var(--ub-white);
}

.ub-contact-info {
	flex: 4;
	margin: 12px 0 0 0;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	width: 100px;
	font-size: 14px;
}

.ub-contact-avatar {
	max-width: 48px;
	flex: 1.5;
	position: relative;
	text-align: center;
	color: white;
}

.ub-edit-icon {
	max-width: 16px;
	flex: 0.5;
	position: relative;
	text-align: center;
	margin: 12px 12px 12px 12px;
}

.ub-delete-icon {
	max-width: 16px;
	flex: 0.5;
	position: relative;
	text-align: center;
	margin: 12px 12px 12px 12px;
}

@media (max-width: 280px) {
	.ub-delete-icon {
		display: none;
	}

	.ub-edit-icon {
		display: none;
	}
}

.ub-first-letter-of-name {
	color: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 13px;
	font-family: Roboto;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
}
</style>
