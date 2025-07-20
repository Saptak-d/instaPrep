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

return(
   <div>
      <form onSubmit={submithandle}>
        <label className=" text-lg  font-bold text-gray-800 " htmlFor="inputbox">Enter your topic</label>
        <br/> 
            <input className="border-2 rounded" type="text" id="inputbox"  value={topic}  onChange={handleOnchange}/> <br /> <br />
            <button style={{color:"white" ,backgroundColor:"red", border:"1px solid black" ,borderRadius:"10px"}}>Search</button>
       </form>

   </div>
)



}