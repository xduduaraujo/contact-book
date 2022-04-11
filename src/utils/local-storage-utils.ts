import { Rotas } from '@/enums/Rotas';
import router from '@/router';

const getContactList = () => (localStorage.contactData ? JSON.parse(localStorage.contactData) : null);
const contactListHasItems = () => !!getContactList();

const LocalStorageUtils = {
	getContactList: () => getContactList(),
	contactListHasItems: () => contactListHasItems(),
	checkRouterToGoBasedOnContactListInLocalStorage: () => contactListHasItems() ? router.push(Rotas.UBContacts) : router.push(Rotas.UBHome)
};

export { LocalStorageUtils };
