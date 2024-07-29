import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import News from "./pages/news";

function App() {
  return (
    <div className="p-[50px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
