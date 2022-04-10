import { Rotas } from '@/enums/Rotas';
import router from '@/router';

const getContactList = () => JSON.parse(localStorage.getItem('contactData') as string);
const contactListHasItems = () => !!getContactList();

const LocalStorageUtils = {
  getContactList: () => getContactList(),
  contactListHasItems: () => contactListHasItems(),
  pushToContactListIfHaveContactsInLocalStorage: () => contactListHasItems() && router.push(Rotas.UBContacts)
};

export { LocalStorageUtils };
