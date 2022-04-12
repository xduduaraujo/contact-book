<template>
	<button type="button" :color="color" :background-color="backgroundColor" @click="handleClick()" :disabled="disabled">
		<slot />
		<span>{{ text }}</span>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'UBButton',
	props: {
		color: {
			type: String,
			default: '#000'
		},
		backgroundColor: {
			type: String,
			default: '#f0f0f0'
		},
		text: {
			type: String,
			required: true
		},
		handleClick: {
			type: Function,
			required: true
		},
		disabled: {
			type: Boolean,
			default: false
		}
	}
});
</script>

<style lang="scss" scoped>
button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 144px;
	height: 40px;
	font-family: 'Roboto';
	font-weight: 500;
	border-radius: 20px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.16);
	border: 1px rgba(255, 255, 255, 0.16);
	justify-content: space-evenly;
	padding: 0;
}

button:hover {
	cursor: pointer;
}

button:disabled {
	opacity: 0.32;
}
</style>
