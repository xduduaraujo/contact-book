<template>
	<span class="ub-text">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'UBText',
	props: {
		text: {
			type: String,
			required: true
		}
	}
});
</script>

<style lang="scss" scoped>
.ub-text {
	text-align: center;
	color: var(--ub-dark);
}
</style>
