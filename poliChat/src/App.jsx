import { BarNav } from "./Components/BarNav";
import { Home } from "./Views/Home";
import { Chat } from "./Views/Chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <BarNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
