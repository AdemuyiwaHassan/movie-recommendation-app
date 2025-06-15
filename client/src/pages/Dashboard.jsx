import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/api/users/me`, {
        headers: { Authorization: token },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      });
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64 text-xl font-medium text-gray-600">
        Loading user info...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Welcome, {user.username}
      </h1>

      {/* Favorites */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🎞️ Favorites
        </h2>
        {user.favorites.length === 0 ? (
          <p className="text-gray-500">No favorite movies yet.</p>
        ) : (
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {user.favorites.map((id, index) => (
              <li
                key={index}
                className="bg-white rounded-lg shadow p-4 text-center"
              >
                {id}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Watchlist */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          📺 Watchlist
        </h2>
        {user.watchlist.length === 0 ? (
          <p className="text-gray-500">No movies in your watchlist.</p>
        ) : (
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {user.watchlist.map((id, index) => (
              <li
                key={index}
                className="bg-white rounded-lg shadow p-4 text-center"
              >
                {id}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Reviews */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          📝 Your Reviews
        </h2>
        {user.reviews.length === 0 ? (
          <p className="text-gray-500">No reviews submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {user.reviews.map((r, index) => (
              <li key={index} className="bg-white shadow p-4 rounded-lg">
                <p className="font-semibold text-indigo-700 mb-1">
                  {r.movieId}
                </p>
                <p className="text-gray-700 mb-1">{r.review}</p>
                <p className="text-sm text-gray-500">Rating: {r.rating} / 5</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
