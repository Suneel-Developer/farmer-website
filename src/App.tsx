import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bridge from "./pages/bridge";
import Address from "./pages/address";
import Mint from "./pages/mint";
import Tutorials from "./pages/tutorials";
import Referral from "./pages/referral";
import Faq from "./pages/faq";
import ConnectWallet from "./pages/connectwallet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mint />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/address" element={<Address />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/connectwallet" element={<ConnectWallet />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
