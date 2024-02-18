import { useState } from "react";
import Login from "./features/auth/Login"
import Quiz from "./features/quiz"
import { login, logout, profile } from "./features/auth/services/auth";

function App() {
  const [auth, setAuth] = useState(profile() || null);

  const onLogin = (data) => {
    login(data);
    setAuth(data);
  };

  const onLogout = () => {
    logout();
    setAuth(null);
  };
  
  return auth == null ? <Login onLogin={onLogin} onLogout={onLogout} /> : <Quiz duration={10} onLogout={onLogout} /> 
}

export default App
