import { Rotas } from '@/enums/Rotas';
import { useRouter } from 'vue-router';

const getContactList = () => JSON.parse(localStorage.getItem('contactData') as string);
const contactListHasItems = () => !!getContactList();
const router = useRouter()

const LocalStorageUtils = {
  getContactList: () => getContactList(),
  contactListHasItems: () => contactListHasItems(),
  pushToContactListIfHaveContactsInLocalStorage: () => contactListHasItems() && router.push(Rotas.UBContacts)
};

export { LocalStorageUtils };
