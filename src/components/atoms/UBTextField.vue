<template>
	<input type="text" :name="name" :id="name" class="search-field" :placeholder="placeholder" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'UBTextField',
	props: {
		name: {
			type: String,
			required: true
		},
		placeholder: {
			type: String
		}
	}
});
</script>

<style lang="scss" scoped>
.search-field {
	width: 1032px;
	height: 32px;
	margin: 0 0 0 228px;
	padding: 7px 8px 6px;
	border-radius: 4px;
	border: none;
	background-color: var(--ub-pale-grey);
}
.search-field::placeholder {
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
}
</style>
