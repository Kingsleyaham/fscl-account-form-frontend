import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CorporateAccount from "./pages/CorporateAccount";
import Home from "./pages/Home";
import IndividualAccount from "./pages/IndividualAccount";
import JointAccount from "./pages/JointAccount";
import NotFound from "./pages/NotFound";
import ClientUpdate from "./pages/ClientUpdate";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Site loading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/individual" element={<IndividualAccount />} />
          <Route path="/joint" element={<JointAccount />} />
          <Route path="/corporate" element={<CorporateAccount />} />
          <Route path="/client_update" element={<ClientUpdate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
