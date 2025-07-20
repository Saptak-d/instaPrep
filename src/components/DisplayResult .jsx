export default function DisplayResult({ data, loading,topic }) {
  if (loading) {
    return <p className="text-blue-600 text-lg">Loading...</p>;
  }

  if (data === null) {
    return <p className="text-gray-500">Please select a topic to get started.</p>;
  }

  if (Array.isArray(data) && data.length === 0) {
    return <p className="text-red-600">No data available.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-white mb-4">Interview Questions of  - {topic}</h2>

      {data.map((item, index) => (
        <div key={index} className="mb-8">
          <h4 className="text-gray-200 font-bold">Q{index + 1}: {item.question}</h4>
          <p className="text-white bg-gray-800 p-2 rounded mt-1">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
