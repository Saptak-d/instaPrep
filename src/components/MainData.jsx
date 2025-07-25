import { useState ,useEffect } from "react"
import FromBar from "./FromBar";
import DisplayResult from "./DisplayResult ";
import ShowTopics from "./ShowTopics ";
import { fetchGeminiResponse } from "../API/gemini";



export default function MainData(){

     const [selectedTopic, setSelectedTopic] = useState("");
    const [resp, setresp] = useState(null); 
    const [loading, setLoading] = useState(false);
    const[opvalue,setopvalue] = useState(30);

     useEffect(()=>{
       
        if(selectedTopic && opvalue){
              setLoading(true);
               setresp(null);
            const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
          
          fetchGeminiResponse(selectedTopic,API_KEY,opvalue).
           then((response)=>{
             console.log("Gemini Response:", response); 
             setresp(response)
            setLoading(false);
           }).catch(err=>console.log("api error"));
        }
     },[selectedTopic,opvalue]);


    return(
        <div className="w-full min-h-screen bg-gray-900 text-white text-center p-8">

                <FromBar setSelectedTopic={setSelectedTopic} setopvalue={setopvalue} /> <br />
           
                 <ShowTopics setSelectedTopic={setSelectedTopic}/>       

                 <DisplayResult data={resp} loading ={loading} topic={selectedTopic} />
        </div>
    )
}