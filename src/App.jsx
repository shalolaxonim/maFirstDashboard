import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import News from "./pages/news";
import CreatePage from "./pages/create";
import UpdatePage from "./pages/update";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommentsPage from "./pages/comments";
import Clients from "./pages/clients";

function App() {
  return (
    <div className="p-[50px]">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/comments" element={<CommentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
