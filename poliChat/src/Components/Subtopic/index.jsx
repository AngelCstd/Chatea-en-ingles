import "./Subtopic.css"

export function Subtopic(props) {
    return(
        <li className="subtopic__container">
            <a href="/">{props.title}</a>
        </li>
    )
}