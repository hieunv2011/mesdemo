import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import MachineDashboard from "./pages/MachineDashboard";
import PowerDashboard from "./pages/PowerDashboard";
import LineDashboard from "./pages/LineDashboard";
import StateDashboard from "./pages/StateDashboard";
import ReportDashboard from "./pages/ReportDashboard";
import Websocket from "./pages/Websocket";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/machine" element={<MachineDashboard />} />
          <Route path="/power" element={<PowerDashboard />} />
          <Route path="/line" element={<LineDashboard />} />
          <Route path="/state" element={<StateDashboard />} />
          <Route path="/report" element={<ReportDashboard />} />
          <Route path="/ws" element={<Websocket />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
