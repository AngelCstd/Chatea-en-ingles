import "./Chat.css"
import { IconSendMessage } from "../../assets/Icon";
import { useState } from "react";

export function Chat() {
    let [message, setMessage] = useState("")

    const handleInputMessage = (e) => {
        setMessage(e.target.value)
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
            </div>
            <form className="chat__inputcontainer">
                <input type="text" value={message} onChange={handleInputMessage} />
                <button><IconSendMessage /></button>
            </form>

        </section>
    )
}