<template>
	<UBText text="Nenhum contato foi criado ainda" class="mt-6"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBText from '@atoms/UBText.vue';

export default defineComponent({
	name: 'UBTextNoContact',
	components: {
		UBText
	}
});
</script>

<style lang="scss" scoped>
</style>
