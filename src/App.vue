<template>
  <RouterView />
  <div class="ub-modal-backdrop" v-if="modalIsOpened.value" />
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
      // LocalStorageUtils.checkRouterToGoBasedOnContactListInLocalStorage()
    });
    const contacts = LocalStorageUtils.getContactList() || new Array<ContactData>();

    const reactiveContacts = reactive(contacts);
    const modalIsOpened = reactive({ value: false });

    function deleteContact(contactId: number): void {
      const indexOfContactInsideArray = reactiveContacts.findIndex(
        (contactData: ContactData) => contactData.id === contactId
      );
      reactiveContacts.splice(indexOfContactInsideArray, 1);

      localStorage.setItem('contactData', JSON.stringify(reactiveContacts));

      LocalStorageUtils.checkRouterToGoBasedOnContactListInLocalStorage();
    }

    function closeModal(): void {
      modalIsOpened.value = false;
    }

    function openModal(): void {
      modalIsOpened.value = true;
    }

    provide('reactiveContacts', reactiveContacts);
    provide('deleteContact', deleteContact);
    provide('modalIsOpened', modalIsOpened);
    provide('closeModal', closeModal);
    provide('openModal', openModal);

    return { reactiveContacts, modalIsOpened };
  }
});
</script>

<style lang="scss">
@import '@/assets/base.css';
@import '@/assets/overrides.scss';

.ub-modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

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
