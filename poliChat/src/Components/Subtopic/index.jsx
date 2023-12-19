import "./Subtopic.css"
import { Link } from "react-router-dom";

export function Subtopic(props) {
    return(
        <li className="subtopic__container">
            <Link to={"/chat"}>{props.title}</Link>
        </li>
    )
}