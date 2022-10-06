import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./pages/info/Info";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PhoneLogin from "./pages/auth/PhoneLogin";
import PhoneVerify from "./pages/auth/PhoneVerify";
import AnimalRegister from "./pages/auth/AnimalRegister";
import AnammneisisRegister from "./pages/auth/AnamnesisRegister";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Confirmationcon from "./pages/confirmationcon/Confirmationcon";
import CreditCardChoose from "./pages/confirmationcon/CreditCardChoose";
import SaleConfirmed from "./pages/saleConfirmed/SaleConfirmed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/auth/phoneLogin" element={<PhoneLogin />} />
        <Route path="/auth/phoneVerify" element={<PhoneVerify />} />
        <Route path="/auth/animalRegister" element={<AnimalRegister />} />
        <Route
          path="/auth/anamneisisRegister"
          element={<AnammneisisRegister />}
        />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/profile/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/confirmationcon" element={<Confirmationcon />} />
        <Route
          path="/confirmationcon/creditCardChoose"
          element={<CreditCardChoose />}
        />
        <Route path="/saleConfirmed" element={<SaleConfirmed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
