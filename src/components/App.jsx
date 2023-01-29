import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import PageNotFound from 'pages/404/404';
import ProtectedContactsPage from 'pages/ContactsPage/ContactsPage';
import ProtectedRegisterPage from 'pages/RegisterPage/RegisterPage';
import ProtectedLoginPage from 'pages/LoginPage/LoginPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<ProtectedRegisterPage />} />
        <Route path="login" element={<ProtectedLoginPage />} />
        <Route path="contacts" element={<ProtectedContactsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
