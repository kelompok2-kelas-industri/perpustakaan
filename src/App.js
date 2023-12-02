import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Auth/Login";
import Admin from "./Pages/Admin";
import User from "./Pages/User/User";
import Error from "./Pages/Error";
import Registerasi from "./Pages/Registrasi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/registrasi" element={<Registerasi />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;