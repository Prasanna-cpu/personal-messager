import { useState } from "react";

export const Message=()=>{

    const [newMessage,setNewMessage]=useState("")

    function submissisonHandler(e){
        e.preventDefault();
        console.log(newMessage)
        
    }
    return(
        <div>
            <form className="new-message-form" onSubmit={submissisonHandler}>
                <input className="new-message-input" placeholder="Type your message here"  onChange={(e)=>setNewMessage(e.target.value)}/>

                <button type="submit" className="send-button">Send</button>

                
            </form>
        </div>
    );
}