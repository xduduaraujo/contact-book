<template>
	<UBModal :isVisible="showModal" width="432px" height="207px">
		<div class="ub-delete-contact-modal-header">
			<UBTitle text="Excluir contato" class="modal-header" />
		</div>

		<div class="ub-delete-contact-modal-body">
			<UBText text="Deseja realmente excluir o contato?" />
		</div>

		<UBFooter width="100%" class="ub-delete-contact-modal-footer">
			<UBButton :handleClick="cancelDeleteContact" text="Cancelar" class="btn-cancel" />
			<UBButton :handleClick="deleteContact" text="Excluir" class="btn-delete" />
		</UBFooter>
	</UBModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBText from '@atoms/UBText.vue';
import UBTitle from '@atoms/UBTitle.vue';
import UBFooter from '@atoms/UBFooter.vue';
import UBButton from '@atoms/UBButton.vue';
import UBModal from '@atoms/UBModal.vue'

export default defineComponent({
	name: 'UBDeleteContactModal',
	components: {
		UBText,
		UBTitle,
		UBFooter,
		UBButton,
		UBModal
	},
	props: {
		cancelDeleteContact: {
			type: Function,
			required: true
		},
		deleteContact: {
			type: Function,
			required: true
		},
		showModal: {
			type: Boolean,
			default: false
		}
	}
});
</script>

<style lang="scss" scoped>
.ub-delete-contact-modal-header {
	display: flex;
	height: 2.97rem;
	align-items: center;
	border-bottom: solid 1px #c0c3d2;
}

.ub-delete-contact-modal-body {
	width: 432px;
	height: 92.5px;
	border-bottom: solid 1px #c0c3d2;
}

.ub-delete-contact-modal-body {
	:deep(.ub-text) {
		display: flex;
		font-size: 14px;
		width: 222px;
		height: 16px;
		margin: 19.5px 18px 57px 24px;
	}
}

.ub-delete-contact-modal-footer {
	display: flex;
	height: 3.94rem;
	justify-content: flex-end;
}


.btn-cancel {
	width: 56px;
	height: 16px;
	margin: 23px 16px 8px 18px;
	font-family: Roboto;
	font-size: 14px;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #fa7268;
	background: none;
	border: none;
	box-shadow: none;
}

.btn-delete {
	width: 72px;
	height: 32px;
	margin: 15px 16px 0;
	padding: 8px 16px;
	border-radius: 16px;
	box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px var(--black-8), inset 0 0 0 0.5px var(--black-8),
		0 2px 4px 0.5px rgba(0, 0, 0, 0.16);
	background-color: #fa7268;
	border: none;
	color: white;
}

button {
	cursor: pointer;
}
</style>
