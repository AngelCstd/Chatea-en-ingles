import { BarNav } from "./Components/BarNav";
import { Home } from "./Views/Home";
import { Chat } from "./Views/Chat";
import { ErrorView } from "./Views/ErrorView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <BarNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:topic" element={<Chat />} />
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
