import './styles/auth.css';
import './styles/chat.css';
import './App.css';
import React, { useState,useRef } from 'react'
import {Authentication} from './components/Authentication'
import {Message} from './components/Messaging'
import Cookies from 'universal-cookie'
const cookies=new Cookies()
const App = () => {
  const [isAuth,setIsAuth]=useState(cookies.get("auth-token"))
  const [room,setRoom]=useState(null)
  const roomInputRef=useRef(null)
  if(!isAuth){
       return (
         <div>
           <Authentication setIsAuth={setIsAuth}/>
         </div>
       );
  }

  return (<div> 
    {room ?
     (<div><Message/></div>):
     (<div className='room'>
        <label>Enter Room Name:</label>
        <input ref={roomInputRef}/>
        <button onClick={()=>{setRoom(roomInputRef.current.value);}}>Enter Room</button>
      </div>)}
    </div>);
}

export default App