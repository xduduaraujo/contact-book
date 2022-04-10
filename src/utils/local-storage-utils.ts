import { Rotas } from '@/enums/Rotas';
import { useRouter } from 'vue-router';

const getContactList = () => (localStorage.contactData ? JSON.parse(localStorage.contactData) : null);
const contactListHasItems = () => !!getContactList();

const LocalStorageUtils = {
  getContactList: () => getContactList(),
  contactListHasItems: () => contactListHasItems(),
  pushToContactListIfHaveContactsInLocalStorage: () => contactListHasItems() && useRouter().push(Rotas.UBContacts)
};

export { LocalStorageUtils };
