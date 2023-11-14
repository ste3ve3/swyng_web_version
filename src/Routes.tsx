import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
