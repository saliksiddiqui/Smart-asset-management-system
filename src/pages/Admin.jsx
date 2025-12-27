import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

export default function Admin() {
  const assets = useSelector((s) => s.assets.list);

  return (
    <>
      <Navbar />

      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">All Assets</h2>

        <div className="space-y-3">
          {assets.map((a) => (
            <div
              key={a.id}
              className="bg-white border rounded p-4 shadow-sm"
            >
              <p className="font-semibold">{a.file}</p>
              <p className="text-sm text-gray-600">
                User: <b>{a.username}</b>
              </p>
              <p className="text-sm">
                Status: <b>{a.status}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
