import { useDispatch, useSelector } from "react-redux";
import { uploadAsset } from "../features/assets/assetSlice";
import Navbar from "../components/Navbar";

export default function Employee() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((s) => s.users);
  const assets = useSelector((s) => s.assets.list);

  return (
    <>
      <Navbar />

      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Upload Asset</h2>

        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <input
            type="file"
            className="block w-full text-sm border rounded p-2"
            onChange={(e) =>
              dispatch(
                uploadAsset({
                  file: e.target.files[0].name,
                  username: currentUser.username,
                })
              )
            }
          />
        </div>

        <h3 className="text-xl font-semibold mb-2">My Assets</h3>

        <div className="space-y-3">
          {assets
            .filter((a) => a.username === currentUser.username)
            .map((a) => (
              <div
                key={a.id}
                className="flex justify-between bg-gray-50 border p-3 rounded"
              >
                <span>{a.file}</span>
                <span
                  className={`font-semibold ${
                    a.status === "Approved"
                      ? "text-green-600"
                      : a.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {a.status}
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
