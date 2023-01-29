import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/operations/contactThunk';

import {
  getContactsValue,
  getErrorValue,
  getIsLoadingValue,
} from 'redux/contactsSlice/contactsSlice';

import Form from 'components/ContactAddForm/ContactAddForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import Loader from 'components/Loader/Loader';
import WithAuthRedirect from 'hoc/WithAuthRedirect';

const ContactsPage = () => {
  let contacts = useSelector(getContactsValue);
  let isLoading = useSelector(getIsLoadingValue);
  let error = useSelector(getErrorValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <section className="wrapper">
      <h1 className="heading">Phonebook</h1>
      <Form />
      {contacts.length > 0 ? (
        <>
          <h2>Find Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>There are no any contacts at the moment</p>
      )}
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
    </section>
  );
};

const ProtectedContactsPage = WithAuthRedirect(ContactsPage, '/login');

// export default ContactsPage;
export default ProtectedContactsPage;
