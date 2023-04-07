import React from 'react'
import user from "../assets/icons/user.svg"

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-sm">
         <img src={user} alt="user-icon" className='w-[2.2rem] ' />
         <span className="font-bold px-2">{name} : </span>
         <span>{message}</span>
    </div>
  )
}

export default ChatMessage