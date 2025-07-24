import { useState } from "react"


export default  function FromBar({setSelectedTopic ,setopvalue}){
    let [topic,settopic] = useState("DBMS");
    const [val,setval] = useState(30);
   let handleOnchange = (evn)=>{
      settopic(evn.target.value);
   }
   let submithandle = (evn)=>{
       evn.preventDefault();
        setSelectedTopic(topic);
        setopvalue(val);
   }
   let handleVal = (evn) =>{
      setval(evn.target.value) 
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
        className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border focus:bg-gray-800    border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />
 <select
   onChange={handleVal} value={val}    className="w-full sm:w-24 h-8 px-4 text-sm text-center bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
>
  <option value="20">20</option>
  <option value="40">40</option>
  <option value="60">60</option>
  <option value="80">80</option>

</select>



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