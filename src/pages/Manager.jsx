import { useDispatch, useSelector } from "react-redux";
import { approveAsset, rejectAsset } from "../features/assets/assetSlice";
import Navbar from "../components/Navbar";

export default function Manager() {
  const dispatch = useDispatch();
  const assets = useSelector((s) => s.assets.list);

  return (
    <>
      <Navbar />

      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Pending Assets</h2>

        <div className="space-y-4">
          {assets.map((a) => (
            <div
              key={a.id}
              className="bg-white shadow rounded p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{a.file}</p>
                <p className="text-sm text-gray-600">
                  Uploaded by: <b>{a.username}</b>
                </p>
                <p className="text-sm">
                  Status: <b>{a.status}</b>
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => dispatch(approveAsset(a.id))}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => dispatch(rejectAsset(a.id))}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
