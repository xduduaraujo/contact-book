<template>
	<header class="wrapper">
		<UBLogo />
		<UBSearchInput />
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UBLogo from '@molecules/UBLogo.vue'
import UBSearchInput from '@molecules/UBSearchInput.vue'

export default defineComponent({
	name: "UBScheduleHeader",
	components: {
		UBLogo,
		UBSearchInput
	}
});
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	padding: 10px;
	min-width: 90vw;
}
</style>
