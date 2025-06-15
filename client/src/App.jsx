import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen min-w-screen bg-gray-100 text-gray-900">
        <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">🎬 MovieApp</h1>
          <div className="space-x-4">
            <a
              href="/"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Home
            </a>
            <a
              href="/dashboard"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Dashboard
            </a>
            <a
              href="/login"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Register
            </a>
          </div>
        </nav>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
