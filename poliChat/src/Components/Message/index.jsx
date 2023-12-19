import "./Message.css"

export function Message(props) {
    let {message, from} = props
    let classLi = from == "user"?"message message__user":"message message__bot"

    return(
        <li className={classLi}>
            <p>{message}</p>
        </li>
    )
}