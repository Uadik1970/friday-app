import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Profile } from './Pages/Profile';
import { Login } from './Pages/Login';
import { Registration } from './Pages/Registration';
import { ErrorPage } from './Pages/ErrorPage';
import { PasswordRecovery } from './Pages/PasswordRecovery';
import { EnteringANewPassword } from './Pages/EnteringANewPassword';
import { Test } from './Pages/Test';
import { Nav } from './Components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path={'/'} element={<Profile />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/registration'} element={<Registration />} />
        <Route path={'/passwordRecovery'} element={<PasswordRecovery />} />
        <Route path={'/enteringANewPassword'} element={<EnteringANewPassword />} />
        {/* <Route path={'/404'} element={<ErrorPage />} /> */}
        <Route path={'/test'} element={<Test />} />
        <Route path={'*'} element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
