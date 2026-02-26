import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import LandingPage from "./pages/LandingPage";
import CoursePage from "./pages/course/CoursePage";
import ModulePage from "./pages/module/ModulePage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Course Routes */}
        <Route path="/disciplina/:courseId" element={<CoursePage />} />

        {/* Module with submodule */}
        <Route
          path="/disciplina/:courseId/modulo/:moduleSlug/:submoduleSlug"
          element={<ModulePage />}
        />

        {/* Module without submodule */}
        <Route
          path="/disciplina/:courseId/modulo/:moduleSlug"
          element={<ModulePage />}
        />

        {/* Legacy redirect */}
        <Route path="/curso/:courseId" element={<Navigate to="/" replace />} />

        {/* 404 - Redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
