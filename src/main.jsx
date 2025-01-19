import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage.jsx'
import SignupPage from './components/pages/SignupPage.jsx'
import Dashboard from './components/pages/Dashboard.jsx'
import CreateNew from './components/pages/CreateNew.jsx'
import CardDetails from './components/pages/CardDetails.jsx'
import OpeningPage from './components/pages/OpeningPage.jsx'
import ProfilePage from './components/pages/ProfilePage.jsx'
import ForgotPwdPage from './components/pages/ForgotPwdPage.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />, children: [
    {path: "/", element: <OpeningPage />},
    {path: "/register", element: <SignupPage />},
    {path: "/login", element: <LoginPage />},
    {path: "/forgot-pwd", element: <ForgotPwdPage />},
    {path: "/dashboard", element: <Dashboard />},
    {path: "/create", element: <CreateNew />},
    {path: "/details/:id", element: <CardDetails />},
    {path: "/profile/:id", element: <ProfilePage />},
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
