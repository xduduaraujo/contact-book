<template>
	<input
		type="text"
		:style="`width:${width}; background-color:${backgroundColor}; border:${border}`"
		:name="name"
		:id="name"
		class="ub-text-field"
		v-model="text"
		:placeholder="placeholder" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'UBTextField',
	props: {
		name: {
			type: String,
			required: true
		},
		placeholder: {
			type: String
		},
		width: {
			type: String,
			default: '100%'
		},
		border: {
			type: String
		},
		backgroundColor: {
			type: String
		}
	},
	setup() {
		const text = ref('');

		return { text };
	}
});
</script>

<style lang="scss" scoped>
.ub-text-field {
	width: 100%;
	height: 32px;
	padding: 7px 8px 6px;
	border-radius: 4px;
	border: none;
	background-color: var(--ub-pale-grey);
}

.ub-text-field::placeholder {
	width: 63px;
	height: 19px;
	margin: 0 937px 0 0;
	font-family: Roboto;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: var(--ub-bluey-grey);
}

input:focus {
	outline: solid 1px var(--ub-orange);
	border: none !important;
}
</style>
