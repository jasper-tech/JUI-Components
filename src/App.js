import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import ResponsiveDashboard from "./components/responsivedash";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/responsivedashboard" element={<ResponsiveDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
