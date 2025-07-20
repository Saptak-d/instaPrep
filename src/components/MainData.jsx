import { useState ,useEffect } from "react"
import FromBar from "./FromBar";
import DisplayResult from "./DisplayResult ";
import ShowTopics from "./ShowTopics ";
import { fetchGeminiResponse } from "../API/gemini";



export default function MainData(){

     const [selectedTopic, setSelectedTopic] = useState("");
    const [resp, setresp] = useState(null); 
    const [loading, setLoading] = useState(false);

     useEffect(()=>{
       
        if(selectedTopic){
              setLoading(true);
               setresp(null);
            const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
          fetchGeminiResponse(selectedTopic,API_KEY).
           then((response)=>{
             console.log("Gemini Response:", response); 
             setresp(response)
            setLoading(false);
           }).catch(err=>console.log("api error"));
        }
     },[selectedTopic]);


    return(
        <div className="bg-amber-100 text-center">

                <FromBar setSelectedTopic={setSelectedTopic} />
           
                 <ShowTopics setSelectedTopic={setSelectedTopic}/>       

                 <DisplayResult data={resp} loading ={loading} topic={selectedTopic} />
        </div>
    )
}