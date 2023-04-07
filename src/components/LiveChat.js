import React,{useEffect,useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import ChatMessage from "./ChatMessage";
import {addMessage} from '../utils/chatSlice';
import {generateRandomName, makeRandomMessage} from "../utils/helper"

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.message);

    const [liveMessage,setLiveMessage] = useState("");

    // API POLLING
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("API POLLING");
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20),
            }))
        }, 500);

        return ()=> clearInterval(timer);
    },[])
  return (
    <>
    <div className="mx-2 p-2 border border-black w-full h-[500px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
        {/* dont use key as id */}
       {chatMessages.map((c,i)=>
        <ChatMessage key={i} name={c.name} message={c.message}/>
       ) 
      }
      </div>
     
    </div>
     <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{e.preventDefault()
        console.log(liveMessage)
        dispatch(
            addMessage({
                name: "Ashish Singh",
                message: liveMessage,
            })
        );
        setLiveMessage("")
    }}
    
    >
            <input type="text" className="border border-black w-[270px] px-2" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} placeholder="Enter a Message..."/>
            <button className="border border-black px-2 mx-2 h-[30px] bg-green-100"> Send </button>
     </form>
     
    </>
  )
}

export default LiveChat;

