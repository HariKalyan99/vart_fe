import OpeningPage from "./components/pages/OpeningPage";
import SignupPage from "./components/pages/SignupPage";
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/pages/Dashboard";
import CreateNew from "./components/pages/CreateNew";
import CardDetails from "./components/pages/CardDetails";
import ForgotPwdPage from "./components/pages/ForgotPwdPage";
import ProfilePage from "./components/pages/ProfilePage";



function App() {
  return (
   <div>
      <OpeningPage />
      <SignupPage />
      <LoginPage />
      <ForgotPwdPage />
      <Dashboard />
      <CreateNew />
      <CardDetails />
      <ProfilePage />
   </div>
  )
}

export default App
