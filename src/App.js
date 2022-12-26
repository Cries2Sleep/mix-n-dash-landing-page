import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import Main from "./components/MainPage";
import BartenderList from "./components/bartenderList";
import Nav from "./Nav";



function App() {
  return (
    <BrowserRouter >
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="bartenders" element={<BartenderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;