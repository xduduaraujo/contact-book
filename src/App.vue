<template>
  <RouterView />
  <div class="ub-modal-backdrop" v-show="modalIsOpened">
    <UBModals />
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router';
import { defineComponent, onMounted, provide, reactive, computed } from 'vue';
import { LocalStorageUtils } from '@/utils/local-storage-utils';
import UBModals from '@templates/UBModals.vue';
import type ContactData from '@/models/contactData';
import ObjectUtils from '@/utils/object-utils';
import StringUtils from '@/utils/string-utils';

export default defineComponent({
  name: 'App',
  components: { RouterView, UBModals },
  setup() {
    onMounted(() => {
      LocalStorageUtils.checkRouterToGoBasedOnContactListInLocalStorage();
    });

    const contactData = reactive({} as ContactData);

    const contacts = LocalStorageUtils.getContactList() || new Array<ContactData>();

    const filterForContacts = reactive({ value: '' });

    const reactiveContacts = reactive({
      data: ObjectUtils.sortArrayOfContactDataByName(contacts)
    });

    const contactIdToBeDeleted = reactive({ value: null });
    const contactIdToBeEdited = reactive({ value: null });

    const showNewContactModal = reactive({ value: false });
    const showEditContactModal = reactive({ value: false });
    const showDeleteContactModal = reactive({ value: false });

    const modalIsOpened = computed(
      () => showNewContactModal.value || showEditContactModal.value || showDeleteContactModal.value
    );

    function addNewContact(): void {
      reactiveContacts.data = ObjectUtils.sortArrayOfContactDataByName(contacts);

      const contactId = StringUtils.generateId();

      reactiveContacts.data.push({ id: contactId, ...contactData });

      localStorage.setItem('contactData', JSON.stringify(reactiveContacts.data));

      handleContactsChange();
      clearContactDataFromInputs();
      filterContacts();
    }

    function deleteContact(): void {
      reactiveContacts.data = ObjectUtils.sortArrayOfContactDataByName(contacts);

      const indexOfContactInsideArray = reactiveContacts.data.findIndex(
        (contactData: ContactData) => contactData.id === contactIdToBeDeleted.value
      );

      reactiveContacts.data.splice(indexOfContactInsideArray, 1);

      localStorage.setItem('contactData', JSON.stringify(reactiveContacts.data));

      handleContactsChange();
    }

    function updateContact(): void {
      contactIdToBeDeleted.value = contactIdToBeEdited.value;
      console.log(contactIdToBeDeleted);

      deleteContact();
      addNewContact();
      handleContactsChange();
    }

    function filterContacts(): void {
      reactiveContacts.data = ObjectUtils.sortArrayOfContactDataByName(contacts);

      reactiveContacts.data = reactiveContacts.data.filter(
        (contactData: ContactData) =>
          (contactData.name && contactData.name.toUpperCase().includes(filterForContacts.value.toUpperCase())) ||
          (contactData.email && contactData.email.toUpperCase().includes(filterForContacts.value.toUpperCase())) ||
          (contactData.telephone && cleanMaskForTelephone(contactData.telephone).includes(filterForContacts.value))
      );
    }

    function cleanMaskForTelephone(telephone: string): string {
      return telephone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
    }

    function clearContactDataFromInputs(): void {
      Object.keys(contactData).forEach((key) => delete contactData[key as keyof typeof contactData]);
    }

    function closeModals(): void {
      showNewContactModal.value = false;
      showEditContactModal.value = false;
      showDeleteContactModal.value = false;
    }

    function resetIdToBeDeletedAndEdited() {
      contactIdToBeDeleted.value = null;
      contactIdToBeEdited.value = null;
    }

    function handleContactsChange() {
      closeModals();
      ObjectUtils.sortArrayOfContactDataByName(reactiveContacts.data);
      LocalStorageUtils.checkRouterToGoBasedOnContactListInLocalStorage();
      resetIdToBeDeletedAndEdited();
    }

    provide('contactData', contactData);

    provide('reactiveContacts', reactiveContacts);

    provide('filterForContacts', filterForContacts);

    provide('deleteContact', deleteContact);
    provide('addNewContact', addNewContact);
    provide('updateContact', updateContact);
    provide('filterContacts', filterContacts);
    provide('closeModals', closeModals);

    provide('contactIdToBeDeleted', contactIdToBeDeleted);
    provide('contactIdToBeEdited', contactIdToBeEdited);

    provide('showNewContactModal', showNewContactModal);
    provide('showEditContactModal', showEditContactModal);
    provide('showDeleteContactModal', showDeleteContactModal);

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
