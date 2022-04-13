import type ContactData from '@/models/contactData';

export const ObjectUtils = {
  sortArrayOfContactDataByName: (array: Array<ContactData>) =>
    array.sort((a, b) => {
      if (a.name && b.name) return a.name.localeCompare(b.name);
      else if (a.name) return -1;
      else return 1;
    })
};

export default ObjectUtils;
