import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Log-in" Component={Login} />
        <Route path="/Sign-up" Component={Signup} />
        <Route path="/Profile" Component={Profile} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
