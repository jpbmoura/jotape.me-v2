import { Routes, Route, Navigate } from "react-router-dom";

import Blog from "./blog";
import About from "./about";
import AHumbleGuideToColorPalette from "@/articles/aHumbleGuideToColorPalette";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/blog" />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/*" element={<ArticleRoutes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export const ArticleRoutes = () => {
  return (
    <Routes>
      <Route
        path="/a-humble-guide-to-color-palette"
        element={<AHumbleGuideToColorPalette />}
      />
    </Routes>
  );
};
