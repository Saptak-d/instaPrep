
export default function ShowTopics({setSelectedTopic}){

    let handlesubmit = (topic)=>{
        setSelectedTopic(topic);
    }
     return (
  <div className="flex flex-wrap gap-4 justify-center sm:justify-evenly p-4 w-full">
    <button
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 animate-pulse"
      onClick={() => handlesubmit("Java")}
    >
      Top 30 JAVA
    </button>
    <button
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 animate-pulse"
      onClick={() => handlesubmit("DBMS")}
    >
      Top 30 DBMS
    </button>
    <button
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 animate-pulse"
      onClick={() => handlesubmit("SQL")}
    >
      Top 30 SQL
    </button>
    <button
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 animate-pulse"
      onClick={() => handlesubmit("OS")}
    >
      Top 30 OS
    </button>
    <button
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 animate-pulse"
      onClick={() => handlesubmit("Networking")}
    >
      Top 30 Networking
    </button>
    <button
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 animate-pulse"
      onClick={() => handlesubmit("OOPS")}
    >
      Top 30 OOPS
    </button>
  </div>
)}
