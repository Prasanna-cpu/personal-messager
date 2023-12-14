import { useState } from "react";
import {addDoc,collection,serverTimestamp} from "firebase/firestore";
import {db,auth} from '../firebase-config'
export const Message=(props)=>{

    const {room}=props
    const [newMessage,setNewMessage]=useState("")
    const messagesRef=collection(db,"messages")
    async function submissisonHandler(e){
        e.preventDefault();
        console.log(newMessage)
        if(newMessage===""){
            return;
        }

        await addDoc(messagesRef,{
            text:newMessage,
            created_time:serverTimestamp(),
            user:auth.currentUser.displayName,
            room:room
        })

        setNewMessage("");


        
    }
    return(
        <div>
            <form className="new-message-form" onSubmit={submissisonHandler}>
                <input className="new-message-input" placeholder="Type your message here"  onChange={(e)=>setNewMessage(e.target.value)} value={newMessage}/>

                <button type="submit" className="send-button">Send</button>

                
            </form>
        </div>
    );
}