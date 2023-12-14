import "./Level.css"

export function Level(props) {
    let {title, subtopics, setShowModal} = props

    const handleShowModal = ()=>{
        setShowModal([title,subtopics])
    }
    return(
        <div className="level__div" onClick={handleShowModal}>
            <div className="level__imagen"></div>
            <p className="level__title">{title}</p>
        </div>
    )
}