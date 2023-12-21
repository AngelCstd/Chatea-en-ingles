import "./ErrorView.css"
import { Link } from "react-router-dom";

export function ErrorView() {
    return(
        <section className="section__404">
            <h1>Error 404</h1>
            <h2>Look like you´re lost</h2>
            <Link to="/">Go to home</Link>
        </section>
    )
}