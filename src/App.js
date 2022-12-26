import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import Main from "./MainPage";
import Nav from "./Nav";



function App() {
  return (
    <BrowserRouter >
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;