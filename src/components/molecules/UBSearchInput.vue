<template>
	<UBTextField name="searchInput" placeholder="Buscar..." />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBTextField from '@atoms/UBTextField.vue';

export default defineComponent({
	name: 'UBSearchInput',
	components: {
		UBTextField
	}
});
</script>

<style lang="scss" scoped>
</style>
