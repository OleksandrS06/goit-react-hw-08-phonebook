import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import Form from './ContactAddForm/ContactAddForm';
// import ContactsList from './ContactsList/ContactsList';
// import Filter from './Filter';
// import {
//   getContactsValue,
//   getErrorValue,
//   getIsLoadingValue,
// } from 'redux/contactsSlice/contactsSlice';
// import { getContactsThunk } from 'redux/operations/contactThunk';
// import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import PageNotFound from 'pages/404/404';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

// const App2 = () => {
//   let contacts = useSelector(getContactsValue);
//   let isLoading = useSelector(getIsLoadingValue);
//   let error = useSelector(getErrorValue);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getContactsThunk());
//   }, [dispatch]);

//   return (
//     <div className="wrapper">
//       <h1 className="heading">Phonebook</h1>
//       <Form />
//       {contacts.length > 0 ? (
//         <>
//           <h2>Find Contacts</h2>
//           <Filter />
//           <ContactsList />
//         </>
//       ) : (
//         <p>There are no any contacts at the moment</p>
//       )}
//       {isLoading && <Loader />}
//       {error && <h2>{error}</h2>}
//     </div>
//   );
// };

export default App;
