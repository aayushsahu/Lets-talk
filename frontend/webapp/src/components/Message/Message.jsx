import React, {useEffect, useState, memo} from "react";
import { useQueryClient } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import './styles.css';



const MessageComponent = memo(() => {
    
    const navigate = useNavigate();
    var n;
    try{
        const location = useLocation();
        n=location.state.name;
    } catch(err) {
        navigate('/home')
    }

    const sendMessage = () => {
        console.log("Sending message...")
    }

    const token = useQueryClient().getQueryData('user');
    const [name, setName]= useState(n);
    

    const [messages, setMessages] = useState([]);
    const contacts=['Appi','Aayush', "Devand", "Panda", "MG"];

    useEffect(() => {

        const fetchMessages = async () => {
            console.log("Name: ", name);
            const res = await fetch(`http://localhost:7007/api/${name}/messages`, {
                method: 'GET',
                headers: {
                'Authorization' : token,
                }
            });
            const data = await res.json();
            console.log('DATA: ', JSON.stringify(data) )
            setMessages(data);
        }
        fetchMessages();
    }, [name]);
    
    const openChat = async (event) => {
        const nameClicked = event.target.innerText;
        console.log("NameClicked: ", nameClicked);
        const res = await fetch(`http://localhost:7007/api/${nameClicked}/messages`, {
            method: 'GET',
            headers: {
            'Authorization' : token,
            }
        });
        const data = await res.json();
        setName(nameClicked);
        setMessages(data);
    }
    
    return (
        <div className="container" style={{display: "flex", flexDirection:"row"}}>
            <div className="" style={{display: "flex", flexDirection:"column", maxWidth: '30%', width: '25%'}}>
                {contacts.map(c => {
                    return (<div key={c} className="card" onClick={openChat}>
                        <span style={{paddingTop: '3rem', paddingBlockEnd: '1rem'}}>{c}</span>
                    </div>);
                })}
            </div>
            <div className="" style={{display: "flex", flexDirection:"column", height: '100vh', maxHeight: '100%', width: '70%', maxWidth: '75%' }}>
                <div className="container" style={{height: '80vh', overflowY: 'scroll', padding: '1rem'}}>
                    {messages.map((m, index) => {

                        return <div key={index} className="card col-6 p-1 bg-primary" style={{marginLeft : m.sender==='Me' ? 'none' : 'auto'}}>
                            <span className="">
                                {m.message}
                            </span>
                            <span className="float-end" style={{marginLeft : 'auto'}}>
                                {m.sender}
                            </span>
                        </div>
                    })
                    }

                </div>
                <form className="form form-control message-input-form" style={{marginTop: 'auto'}}>
                    <textarea className='input col-12 message-input' rows="4" cols="50" placeholder='Type your message'/>
                    <Button name='Send' onClick={sendMessage}/>
                </form>
            </div>
        </div>);
});

export default MessageComponent;