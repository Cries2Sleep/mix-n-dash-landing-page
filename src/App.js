import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import Main from "./components/MainPage";
import BartenderList from "./components/bartenderList";
import Nav from "./components/Nav";

import Katie from "./components/bartenderAccounts/katie/katie"
import Sam from "./components/bartenderAccounts/sam"
import Jasmine from "./components/bartenderAccounts/jasmine/jasmine"



function App() {
  return (
    <BrowserRouter >
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="bartenders">
          <Route path="" element={<BartenderList />} />
          <Route path="katie" element={<Katie />} />
          <Route path="sam" element={<Sam />} />
          <Route path="jasmine" element={<Jasmine />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;