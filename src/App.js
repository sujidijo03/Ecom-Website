import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from './Components/AuthoProvider';
import LoginPage from './Components/LoginPage';
import UnauthorizedPage from './Components/Unauthorized';
import PrivateRoute from './Components/PrivateRoute';
import AdminDashboard from './Components/AdminDashboard';
import VendorDashboard from './Components/VendorDashboard';
import StaffDashboard from './Components/StaffDashboard';
import UserDashboard from './Components/UserDashboard';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/unauthorized' element={<UnauthorizedPage/>}/>
          <Route
            path='/admin/dashboard' element={
            <PrivateRoute roles={["admin"]}>
              <AdminDashboard/>
            </PrivateRoute>
          }
          />
          <Route path='/vendor/dashboard'
          element={
            <PrivateRoute roles={["vendor"]}>
              <VendorDashboard/>
            </PrivateRoute>
          }/>
          <Route
          path='/staff/dashboard'
          element={
            <PrivateRoute roles={["staff"]}>
              <StaffDashboard/>
            </PrivateRoute>
          }/>
          <Route
          path='/user/dashboard'
          element={
            <PrivateRoute roles={["user"]}>
              <UserDashboard/>
            </PrivateRoute>
          }/>
          <Route path='*' element={<Navigate to="/login" />}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App