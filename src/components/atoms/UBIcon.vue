<template>
	<img :alt="alt" :src="image" :width="width" :height="height" @click="onClick()" :class="`${isClickable ? 'clickable' : ''}`"/>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
	name: 'UBIcon',
	props: {
		width: {
			type: String
		},
		height: {
			type: String
		},
		alt: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		onClick: {
			type: Function
		},
	},
	setup(props) {
		const isClickable = computed(() => !!props.onClick)

		return { isClickable }
	}
});
</script>

<style lang="scss" scoped>
.clickable {
	cursor: pointer
}
</style>
