import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { PostProvider } from "./context/PostsContext";
import { AuthProvider } from "./context/AuthContext";
import { DashboardCMS } from "./page/DashboardCMS";
import { LoginCms } from "./page/LoginCms";
import { PrivateComponent } from "./components/navbar/PrivateRoute";
import { CreatePostPage } from "./page/CreatePostPage";
import { AdminProvider } from "./context/AdminContext";
import { UpdatePostPage } from "./page/UpdatePostPage";
import { PostPage } from "./page/PostPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AdminProvider>
        <PostProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:id" element={<PostPage />} />
              <Route path="/login" element={<LoginCms />} />
              <Route
                path="/admin"
                element={<PrivateComponent component={DashboardCMS} />}
              />
              <Route
                path="/admin/new_post"
                element={<PrivateComponent component={CreatePostPage} />}
              />
              <Route
                path="/admin/posts/:id"
                element={<PrivateComponent component={UpdatePostPage} />}
              />
            </Routes>
          </BrowserRouter>
        </PostProvider>
      </AdminProvider>
    </AuthProvider>
  </React.StrictMode>
);
