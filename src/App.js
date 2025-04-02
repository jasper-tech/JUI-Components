import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import ResponsiveDashboard from "./components/res-dashboard";
import ResponsiveSidebar from "./components/res-sidebar";
import ResponsiveHeader from "./components/res-header";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/responsivedashboard" element={<ResponsiveDashboard />} />
        <Route path="/responsivesidebar" element={<ResponsiveSidebar />} />
        <Route path="/responsiveheader" element={<ResponsiveHeader />} />
      </Routes>
    </Router>
  );
};

export default App;
