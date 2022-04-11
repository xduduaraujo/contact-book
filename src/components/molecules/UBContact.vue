<template>
	<div class="ub-contact">
		<div class="ub-contact-avatar">
			<UBAvatar :alt="`${contact.name} Avatar`" width="24" height="24" :image="square" />
			<UBText :text="contact.name.charAt(0).toUpperCase()" class="ub-first-letter-of-name" />
		</div>
		<UBText :text="contact.name" class="ub-contact-info" />
		<UBText :text="contact.email" class="ub-contact-info" />
		<UBText :text="contact.telephone" class="ub-contact-info" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UBAvatar from '@atoms/UBAvatar.vue';
import square from '@/assets/square.svg'
import UBText from '@atoms/UBText.vue'

export default defineComponent({
	name: "UBContact",
	components: { UBAvatar, UBText },
	props: {
		contact: {
			type: Object,
			required: true
		}
	},
	setup() {
		return { square }
	}
});
</script>

<style lang="scss" scoped>
.ub-contact {
	display: flex;
	height: 40px;
	border-radius: 4px;
	border: solid 1px var(--ub-white);
	background-color: var(--ub-very-light-pink);
}

.ub-contact-info {
	flex: 4;
	margin: 12px 0 0 47px;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	width: 100px; // some width
	font-size: 14px;
}

.ub-contact-avatar {
	max-width: 48px;
	flex: 1.5;
	position: relative;
	text-align: center;
	color: white;
}

.ub-first-letter-of-name {
	color: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 13px;
	font-family: Roboto;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
}
</style>
