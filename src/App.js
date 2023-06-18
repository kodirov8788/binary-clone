import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Casepage from "./pages/case/Casepage";
import Service from "./pages/service/Service";
import Singlepage from "./pages/singlepage/Singlepage";
import Contact from "./pages/contact/Contact";
import Mediasidebar from "./components/mediaSidebar/Mediasidebar";
import { useState } from "react";

function App() {
  const [openCloseSidebar, setOpenCloseSidebar] = useState(false)

  return (
    <BrowserRouter>
      <Header setOpenCloseSidebar={setOpenCloseSidebar} openCloseSidebar={openCloseSidebar} />
      <Mediasidebar setOpenCloseSidebar={setOpenCloseSidebar} openCloseSidebar={openCloseSidebar} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/case' element={<Casepage />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/project/:id" element={<Singlepage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
