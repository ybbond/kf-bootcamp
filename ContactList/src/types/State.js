// @flow

export type Contact = {
  id: string,
  name: string,
  phoneNumber: string,
};

export type State = {
  contacts: Array<Contact>,
  searchValue: string,
  selectedIndex: number,
  selectedContact: Contact,
};
