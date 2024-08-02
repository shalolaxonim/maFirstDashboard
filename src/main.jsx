import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LayoutMine from "./components/layout/index.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LayoutMine>
          <App />
        </LayoutMine>
      </BrowserRouter>
    </QueryClientProvider>
  // </React.StrictMode>
);
