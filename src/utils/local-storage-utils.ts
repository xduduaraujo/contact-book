import { Rotas } from '@/enums/Rotas';
import type ContactData from '@/models/contactData';
import router from '@/router';

const getContactList = (): ContactData[] => (localStorage.contactData ? JSON.parse(localStorage.contactData) : null);
const contactListHasItems = () => !!getContactList() && getContactList().length > 0;

const LocalStorageUtils = {
	getContactList: () => getContactList(),
	contactListHasItems: () => contactListHasItems(),
	checkRouterToGoBasedOnContactListInLocalStorage: () => contactListHasItems() ? router.push(Rotas.UBContacts) : router.push(Rotas.UBHome)
};

export { LocalStorageUtils };
