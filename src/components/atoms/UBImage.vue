<template>
	<img :alt="alt" :src="image" :width="width" :height="height" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "UBImage",
	setup() { },
	props: {
		width: {
			type: String,
			required: true,
		},
		height: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		}
	},
});
</script>
