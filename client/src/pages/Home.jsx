// client/src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">MovieRecs</h1>
      <p className="text-lg mb-8">Discover and manage your favorite movies</p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-white text-indigo-700 px-4 py-2 rounded shadow hover:bg-gray-100"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-white text-purple-700 px-4 py-2 rounded shadow hover:bg-gray-100"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
