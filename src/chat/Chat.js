import React,{useState,useEffect,useRef} from 'react'
import NavBar from '../navbar/Navbar'
import db from '../firebase'
import { auth } from '../firebase'
import SendMessage from './SendMessage'




export default function Chat() {
    const scroll=useRef()
    const [messages,setMessages]=useState([]);
    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').onSnapshot=(snapshot=>{
            setMessages=snapshot.doc.map(doc=>doc.data()
            )})
    },[])
    return (
        <div>
            <NavBar />
            <div className="msgs">
            Chat goes her
            {messages.map((id,text,photoURL)=>{
                <div>
                   <div key={id} >
                        <img src={photoURL} alt=""></img>
                        <p>{text}</p> 
                   </div> 
                   <SendMessage scroll={scroll}/>
                   <div ref={scroll}></div>
                </div>
            })}
            </div>
        </div>  
    )
}