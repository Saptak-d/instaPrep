
export default function ShowTopics({setSelectedTopic}){

    let handlesubmit = (topic)=>{
        setSelectedTopic(topic);
    }
      return(
    <div style={{
  display: "flex",
  justifyContent: "space-evenly",
  padding: "20px",
  width: "100%"
}}>
  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 animate-pulse" onClick={()=> handlesubmit("Java")}>JAVA</button>
  <button  onClick={()=> handlesubmit("DBMS")}>DBMS</button>
  <button onClick={()=> handlesubmit("SQL")}>SQL</button>
  <button  onClick={()=> handlesubmit("OS")}>OS</button>
  <button  onClick={()=> handlesubmit("Networking")}>Networking</button>
</div>
      )
}