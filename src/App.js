import { Routes, Route } from "react-router-dom";
import DemoLogin from "./pages/DemoLogin";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import "./assets/style.css";


function App() {
  return (
    <Routes>
      {/* Demo Login Page */}
      <Route path="/" element={<DemoLogin />} />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
