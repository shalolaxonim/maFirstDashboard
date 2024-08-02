import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import News from "./pages/news";
import CreatePage from "./pages/create";

function App() {
  return (
    <div className="p-[50px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
