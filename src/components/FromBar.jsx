import { useState } from "react"


export default  function FromBar({setSelectedTopic}){
    let [topic,settopic] = useState("DBMS");
   let handleOnchange = (evn)=>{
      settopic(evn.target.value);
   }
   let submithandle = (evn)=>{
       evn.preventDefault();
        setSelectedTopic(topic);
   }

return (
  <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-8">
    <form onSubmit={submithandle} className="flex flex-col sm:flex-row items-center gap-4">
      <label htmlFor="inputbox" className="text-lg font-semibold text-white w-full sm:w-auto">
        Enter your topic
      </label>

      <input
        id="inputbox"
        type="text"
        onChange={handleOnchange}
        placeholder="Eg: DBMS, React, DSA"
        className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 animate-pulse"
      >
        🔍 Search
      </button>
    </form>
  </div>
)




}