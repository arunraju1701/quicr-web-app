import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import TeleProviders from './pages/TeleProviders'
import AuthProvider from './provider/AuthProvider'
import './App.less'
import { useAuth } from './hooks/useAuth'

function App() {

  return (
    <AuthProvider>
      <div className="App container">
        <Routes>
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />
            <Route path="/" element= {
              <RequireAuth>
                <TeleProviders />
              </RequireAuth>
            } />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  )
}

function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {

    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App
