import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FounderPage } from "./pages/FounderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/founder" element={<FounderPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
