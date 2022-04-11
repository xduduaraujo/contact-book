
<template>
	<RouterView />
</template>

<script lang="ts">
import { RouterView } from 'vue-router';
import { defineComponent, onMounted, provide, reactive, ref } from 'vue';
import { LocalStorageUtils } from '@/utils/local-storage-utils';
import type ContactData from '@/models/contactData';

export default defineComponent({
	name: 'App',
	components: { RouterView },
	setup() {
		onMounted(() => {
			LocalStorageUtils.checkRouterToGoBasedOnContactListInLocalStorage()
		})
		const contacts = LocalStorageUtils.getContactList() || new Array<ContactData>()

		const reactiveContacts = reactive(contacts)


		function deleteContact(contactId: number) {
			const indexOfContactInsideArray = reactiveContacts.findIndex((contactData: ContactData) => contactData.id === contactId)
			reactiveContacts.splice(indexOfContactInsideArray, 1)

			localStorage.setItem('contactData', JSON.stringify(reactiveContacts))

			LocalStorageUtils.checkRouterToGoBasedOnContactListInLocalStorage();
		}

		provide('reactiveContacts', reactiveContacts)
		provide('deleteContact', deleteContact)

		return { reactiveContacts }
	}
})
</script>


<style lang="scss">
@import '@/assets/base.css';
@import '@/assets/overrides.scss';

#app {
	max-width: 100vw;
	margin: 1rem;
	font-weight: normal;
}

header {
	line-height: 1.5;
	max-height: 100vh;
}
</style>
