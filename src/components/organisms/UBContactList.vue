<template>
	<div class="ub-contact-list">
		<UBContactListHeader />
		<UBContact v-for="contact in contacts" :contact="contact" />
	</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import UBContactListHeader from '@molecules/UBContactListHeader.vue'
import UBContact from '@molecules/UBContact.vue'

export default defineComponent({
	name: 'UBContactList',
	components: {
		UBContactListHeader,
		UBContact
	},
	props: {
		contacts: {
			type: Array,
			required: true
		}
	}
});
</script>

