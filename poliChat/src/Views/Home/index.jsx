import "./Home.css"
import { LevelContainer } from "../../Components/LevelContainer";
import { useEffect, useRef, useState } from "react";
import { Subtopic } from "../../Components/Subtopic";

let json = [
    {
        "Nivel Básico": {
            "Saludos y presentaciones": [
                "Saludos formales e informales",
                "Presentarse a sí mismo",
                "Preguntar y responder sobre el nombre y la nacionalidad"
            ],
            "Alfabeto y pronunciación": [
                "Aprender la pronunciación de las letras",
                "Sonidos vocales y consonantes en inglés"
            ],
            "Números y fechas": [
                "Aprender los números del 1 al 100",
                "Hablar sobre la fecha y la hora"
            ],
            "Vocabulario básico": [
                "Colores",
                "Días de la semana",
                "Meses del año",
                "Números cardinales y ordinales"
            ],
            "Preguntas y respuestas básicas": [
                "Cómo hacer preguntas simples (¿Qué?, ¿Dónde?, ¿Cuándo?, ¿Quién?, ¿Por qué?, ¿Cómo?)",
                "Responder preguntas de manera concisa"
            ],
            "Expresiones cotidianas": [
                "Saludos comunes",
                "Pedir y dar las gracias",
                "Pedir ayuda"
            ],
            "Pedir y dar direcciones sencillas": [
                "Preguntar cómo llegar a lugares básicos (por ejemplo, la tienda, la escuela)",
                "Dar direcciones simples"
            ]
        }
    },
    {
        "Nivel Intermedio": {
            "Tiempo presente": [
                "Presente simple (I go, he/she goes)",
                "Presente continuo (I am going)"
            ],
            "Vocabulario ampliado": [
                "Alimentos y bebidas",
                "Ropa y accesorios",
                "Lugares de la ciudad",
                "Actividades diarias"
            ],
            "Hobbies e intereses": [
                "Hablar sobre lo que te gusta hacer en tu tiempo libre",
                "Preguntar sobre los pasatiempos de otras personas"
            ],
            "Pasado simple": [
                "Uso de verbos regulares e irregulares en el pasado",
                "Narrar eventos pasados"
            ],
            "Familia y amigos": [
                "Describir a tu familia y amigos",
                "Relatar anécdotas familiares"
            ],
            "Expresar preferencias y gustos": [
                "Usar 'I like', 'I love', 'I prefer', etc.",
                "Hablar sobre tus comidas, películas o músicas favoritas"
            ],
            "Planificación e invitaciones": [
                "Hacer planes para el futuro",
                "Invitar a amigos a eventos o salidas"
            ]
        }
    },
    {
        "Nivel Avanzado": {
            "Futuro": [
                "Uso de 'will', 'going to', 'present continuous for future'",
                "Hablar sobre planes y predicciones futuras"
            ],
            "Expresar opiniones y argumentar": [
                "Desarrollar habilidades de debate",
                "Explicar tu punto de vista en temas diversos"
            ],
            "Experiencias pasadas": [
                "Uso de 'present perfect' y 'past perfect'",
                "Hablar sobre experiencias de vida"
            ],
            "Condicionales": [
                "Zero, first, second, third conditionals",
                "Hablar sobre situaciones hipotéticas y sus resultados"
            ],
            "Viajes y lugares": [
                "Hablar sobre destinos de viaje",
                "Dar recomendaciones turísticas"
            ],
            "Temas actuales y eventos mundiales": [
                "Comentar noticias y eventos actuales",
                "Conversar sobre cuestiones globales"
            ],
            "Phrasal verbs y modismos": [
                "Aprender y usar expresiones idiomáticas",
                "Entender el significado figurado de las frases"
            ],
            "Narrar historias y anécdotas": [
                "Contar anécdotas interesantes",
                "Desarrollar habilidades de narración"
            ]
        }
    },
    {
        "Nivel Avanzado Superior": {
            "Discutir temas controversiales": [
                "Abordar temas políticos, sociales y éticos",
                "Practicar la discusión respetuosa y el intercambio de opiniones"
            ],
            "Tiempos verbales avanzados": [
                "Uso de tiempos perfectos (present perfect continuous, past perfect continuous)",
                "Estudio de tiempos verbales menos comunes (future perfect, conditional perfect)"
            ],
            "Vocabulario especializado": [
                "Aprender terminología específica para áreas de interés personal o profesional",
                "Desarrollar un vocabulario técnico o académico"
            ],
            "Entender acentos y dialectos regionales": [
                "Familiarizarte con las diferencias de pronunciación y vocabulario en distintas regiones de habla inglesa",
                "Mejorar la comprensión auditiva en contextos diversos"
            ],
            "Participar en debates y discusiones formales": [
                "Aprender a estructurar argumentos de manera lógica",
                "Participar en debates y discusiones académicas o profesionales"
            ],
            "Habilidades de escucha activa": [
                "Entender y responder de manera efectiva durante conversaciones grupales o en presentaciones",
                "Identificar detalles clave y matices en discursos hablados"
            ],
            "Redacción y presentaciones en inglés": [
                "Desarrollar habilidades de escritura avanzada",
                "Preparar y dar presentaciones formales en inglés"
            ]
        }
    }
]
export function Home() {
    let [subtopics, setSubtopics] = useState([])
    let [topicTitle, setTopicTitle] = useState("")
    let [showSubtopics, setShowSubtopics] = useState(false)
    let refModal = useRef();

    const handleSetShowModal = (levelChild) => {
        let [title, subtopics] = levelChild
        setSubtopics(subtopics)
        setTopicTitle(title)
        setShowSubtopics(true)
    }

    const handleHiddenModal = (e)=>{
        if(e.target == refModal.current){
            setShowSubtopics(false)
        }
        
    }

    useEffect(()=>{
        if (showSubtopics) {
            document.addEventListener("click",handleHiddenModal)
        }
        return ()=>{
            document.removeEventListener("click",handleHiddenModal)
        }
    },[showSubtopics])

    return (
        <section className="home__section">
            {json.map((level, id) => {
                let [title, topics] = Object.entries(level)[0]
                return <LevelContainer key={title + id} topicsObject={topics} title={title} setShowModal={handleSetShowModal} />
            })}
            {showSubtopics ?
                (<div  ref={refModal} className="home__modal--background">
                    <div className="home__modal">
                        <h3>{topicTitle}</h3>
                        <ul className="modal__subtopics">
                            {subtopics.map((current, id) => {
                                return <Subtopic key={current + id} title={current} />
                            })}
                        </ul>
                    </div>
                </div>)
                : <></>}
        </section>
    )
}