<template>
	<div class="input-container">
		<UBTextField name="searchInput" placeholder="Buscar..." class="ub-search-input" v-model="val"
			@input="handleInput" />
		<UBIcon alt="Search Icon" :image="searchIcon" width="16" height="16" class="ub-search-icon" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UBTextField from '@atoms/UBTextField.vue';
import UBIcon from '@atoms/UBIcon.vue';
import searchIcon from '@/assets/search-icon.svg';

export default defineComponent({
	name: 'UBSearchInput',
	emits: ['update:value'],
	components: {
		UBTextField,
		UBIcon
	},
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
	setup(props, { emit }) {

		const val = ref('')

		function handleInput() {
			emit('update:value', val)
		}

		return { val, searchIcon, handleInput };
	}
});
</script>

<style lang="scss" scoped>
@media (min-width: 600px) and (max-width: 1439px) {
	.ub-search-input {
		margin: 0 0 0 3.75rem;
	}
}

.input-container {
	display: flex;
	width: 100%;
	position: relative;
}

.ub-search-icon {
	position: absolute;
	right: 0;
	margin: 0.5rem;
}
</style>
