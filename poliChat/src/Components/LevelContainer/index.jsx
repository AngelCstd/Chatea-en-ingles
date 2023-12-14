import "./LevelContainer.css"
import { Level } from "../Level";

export function LevelContainer(props) {
    let {title, topicsObject, setShowModal} = props
    let topicsArray = Object.entries(topicsObject)

    return(
        <article className="levelContainer__article">
            <h2 className="levelContainer__title">{title}</h2>
            <div className="levelContainer__container">

            {topicsArray.map(([title, subtopics], id)=>{
                return <Level key={title + id} title={title} subtopics={subtopics} setShowModal={setShowModal} />
            })}
            </div>
        </article>
    )
}