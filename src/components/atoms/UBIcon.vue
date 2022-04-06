<template>
	<img :alt="alt" :src="image" :width="width" :height="height" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "UBIcon",
	props: {
		width: {
			type: String,
		},
		height: {
			type: String,
		},
		alt: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
});
</script>
