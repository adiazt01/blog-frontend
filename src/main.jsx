import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./page/Home";
import { PostProvider } from "./context/PostsContext";
import { AuthProvider } from "./context/AuthContext";
import { DashboardCMS } from "./page/DashboardCMS";
import { LoginCms } from "./page/LoginCms";
import { PrivateComponent } from "./components/navbar/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginCms />} />
            <Route path="/admin" element={<PrivateComponent component={DashboardCMS} />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </PostProvider>
  </React.StrictMode>
);
