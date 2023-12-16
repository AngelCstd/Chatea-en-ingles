import "./Message.css"

export function Message(props) {
    let {message} = props
    let classLi = "message message__user"

    return(
        <li className={classLi}>
            <p>{message}</p>
        </li>
    )
}