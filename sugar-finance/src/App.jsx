import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Overview from "./pages/Overview.jsx";
import SugarToken from "./pages/SugarToken.jsx";
import Kingdom from "./pages/Kingdom.jsx";
import Safari from "./pages/Safari.jsx";
import Expedition from "./pages/Expedition.jsx";
import Crafting from "./pages/Crafting.jsx";
import SugarNFTs from "./pages/SugarNFTs.jsx";
import SugarItems from "./pages/SugarItems.jsx";
import AnvilMarket from "./pages/AnvilMarket.jsx";
import Mechanics from "./pages/Mechanics.jsx";
import FAQ from "./pages/FAQ.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/token" element={<SugarToken />} />
        <Route path="/kingdom" element={<Kingdom />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/expedition" element={<Expedition />} />
        <Route path="/crafting" element={<Crafting />} />
        <Route path="/nfts" element={<SugarNFTs />} />
        <Route path="/items" element={<SugarItems />} />
        <Route path="/anvil" element={<AnvilMarket />} />
        <Route path="/mechanics" element={<Mechanics />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
