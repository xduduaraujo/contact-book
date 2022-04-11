<template>
	<div class="ub-contactlist-header">
		<div class="_blank" />
		<UBText text="Contatos" class="ub-text" />
		<UBText text="E-mail" class="ub-text" />
		<UBText text="Telefone" class="ub-text" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBText from '@atoms/UBText.vue';

export default defineComponent({
	name: "UBContactListHeader",
	components: { UBText }
});
</script>

<style lang="scss" scoped>
.ub-contactlist-header {
	display: flex;
	height: 40px;
	margin-top: 1rem;
	border-radius: 4px;
	border: solid 1px var(--ub-white);
	background-color: var(--ub-white-two);
}

.ub-text {
	width: 36px;
	height: 15px;
	font-family: Roboto;
	font-size: 13px;
	color: var(--ub-bluey-grey);
	flex: 4;
	margin: 1rem 0 0 47px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	width: 100px;
}

._blank {
	max-width: 48px;
	min-width: 40px;
	flex: 1.5
}
</style>
