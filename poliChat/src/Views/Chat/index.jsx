import "./Chat.css"
import { IconSendMessage } from "../../assets/Icon";
import { useState } from "react";
import { Message } from "../../Components/Message";

export function Chat() {
    let [messageInput, setMessageInput] = useState("")
    let [messages, setMessages] = useState([])

    const handleInputMessage = (e) => {
        setMessageInput(e.target.value)
    }
    const handleAddMessage = (e) => {
        e.preventDefault()
        if (messageInput) {
            let newArray = messages,
            newMessage = {
                from: "user",
                message: messageInput,
                //Arreglar esto con id unicos
                id: (Math.random()*10000)}
            newArray.push(newMessage)
            setMessages(newArray)
            setMessageInput("")
        }
    }

    return (
        <section className="chat__section">
            <div className="chat__messages">
                <article className="chat__details">
                    <div className="chat__details--imagen"></div>
                    <h1 className="chat__details--topic chat__details--titles">
                        Topic
                    </h1>
                    <h2 className="chat__details--subtopic chat__details--titles">
                        Subtopic
                    </h2>
                </article>
                <ul className="chat__container">
                    {messages.map(({from, id, message}) => {
                        return <Message key={id} message={message} />
                    })}
                </ul>
            </div>
            <form className="chat__inputcontainer" onSubmit={handleAddMessage}>
                <input type="text" placeholder="Write your message..." value={messageInput} onChange={handleInputMessage} />
                <button><IconSendMessage /></button>
            </form>

        </section>
    )
}