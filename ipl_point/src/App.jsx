import React, { useEffect, useState } from "react";

const App = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndSort = async () => {
      try {
        const res = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
        );
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} – ${res.statusText}`);
        }
        const data = await res.json();

        // Sort ascending by NRR (numerical):
        const sorted = data
          .slice() // copy array
          .sort((a, b) => {
            return parseFloat(a.NRR) - parseFloat(b.NRR);
          });

        setTeams(sorted);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message || "Unknown error");
        setLoading(false);
      }
    };

    fetchAndSort();
  }, []);

  if (loading) {
    return <p className="text-center py-8">Loading points table…</p>;
  }
  if (error) {
    return (
      <p className="text-center text-red-600 py-8">
        Failed to load data: {error}
      </p>
    );
  }

  return (
    <div className="p-4 mx-auto flex flex-col items-center justify-center w-screen h-0-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        IPL 2022 Points Table (sorted by NRR ascending)
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
             
              <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 text-left">
                #
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 text-left">
                Team
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 text-center">
                Matches
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 text-center">
                Won
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 text-center">
                Lost
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 text-center">
                Tied
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 text-center">
                Points
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 text-center">
                NRR
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {teams.map((t, idx) => {
              
              const {
                Team,
                Matches,
                Won,
                Lost,
                Tied,
                Points,
                NRR,
              } = t;

             
              const displayNRR = parseFloat(NRR).toFixed(3);

              return (
                <tr key={Team}>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                    {idx + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800">
                    {Team}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700 text-center">
                    {Matches}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700 text-center">
                    {Won}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700 text-center">
                    {Lost}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700 text-center">
                    {Tied}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700 text-center">
                    {Points}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700 text-center">
                    {displayNRR}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
