<template>
	<UBModal :isVisible="showModal" width="432px" height="342px">
		<UBTitle text="Criar novo contato" class="modal-header" />

		<UBForm height="227.5px">
			<p v-for="item in inputs" :key="item.input">
				<UBLabel :name="item.label" />
				<UBTextField
					width="384px"
					:name="item.input"
					class="ub-text-field"
					backgroundColor="#ffffff"
					border="solid 1px #c0c3d2"
					v-model="contactData[item.input]"
					v-maska="item.mask" />
			</p>
		</UBForm>

		<UBFooter width="100%" class="modal-footer">
			<UBButton :handleClick="cancelNewContact" text="Cancelar" class="btn-cancel" />
			<UBButton :handleClick="addNewContact" text="Salvar" :disabled="!formIsValid()" class="btn-save" />
		</UBFooter>
	</UBModal>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from 'vue';
import UBForm from '@atoms/UBForm.vue';
import UBModal from '@atoms/UBModal.vue';
import UBLabel from '@atoms/UBLabel.vue';
import UBTextField from '@atoms/UBTextField.vue';
import UBTitle from '@atoms/UBTitle.vue';
import UBFooter from '@atoms/UBFooter.vue';
import UBButton from '@atoms/UBButton.vue';
import type ContactData from '@/models/contactData';
import customMask from '@/utils/custom-mask-utils';

export default defineComponent({
	name: 'UBNewContactModal',
	components: {
		UBForm,
		UBModal,
		UBLabel,
		UBTextField,
		UBTitle,
		UBFooter,
		UBButton
	},
	props: {
		addNewContact: {
			type: Function,
			required: true
		},
		cancelNewContact: {
			type: Function,
			required: true
		},
		showModal: {
			type: Boolean,
			default: false
		}
	},
	setup() {
		const inputs = [
			{ input: 'name', label: 'Nome', mask: customMask.constructor('N', 15) },
			{ input: 'email', label: 'E-mail', mask: customMask.constructor('E', 40) },
			{ input: 'telephone', label: 'Telefone', mask: ['(##) #####-####', '(##) ####-####'] }
		];

		const contactData = inject('contactData') as ContactData;

		const formIsValid = () => !!contactData.name || !!contactData.email || !!(contactData.telephone && contactData.telephone.length >= 14)

		return { inputs, contactData, formIsValid };
	}
});
</script>

<style lang="scss" scoped>
@media (max-width: 480px) {
	.ub-text-field {
		max-width: 80%;
	}
}

form {
	border-bottom: solid 1px #c0c3d2;
}

form>p {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 0;
	max-height: 51.25px;
	margin-top: 14px;
}

form>p:first-child {
	margin-top: 19.5px;
}

input {
	width: 384px;
	height: 32px;
	margin: 0px 24px 0px;
	border-radius: 4px;
	border: solid 1px #c0c3d2;
	background-color: #ffffff;
}

form>p:last-child>input {
	max-width: 128px;
}

label {
	margin-left: 24px;
}

.modal-header {
	display: flex;
	height: 2.97rem;
	align-items: center;
	border-bottom: solid 1px #c0c3d2;
}

.modal-footer {
	display: flex;
	height: 3.94rem;
	justify-content: flex-end;
}

.modal-body {
	position: relative;
	padding: 20px 10px;
}

.btn-cancel {
	width: 56px;
	height: 16px;
	margin: 23px 16px 8px 120px;
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

.btn-save {
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
