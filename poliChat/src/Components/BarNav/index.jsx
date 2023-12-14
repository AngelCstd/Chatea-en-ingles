import "./BarNav.css";
import { IconMenu, IconHome, IconHistory, IconChange, IconVocabulary} from "../../assets/Icon";
import { useEffect, useRef, useState } from "react";


export function BarNav() {
    let [showNav, setShowNav] = useState(false);
    let refMenu = useRef(),
        refIconMenu = useRef();

    function handleShowNav() {
        setShowNav(!showNav)
        
    }

    function handleClickOutside(e){
        if(showNav &&  !refMenu.current.contains(e.target)&& !refIconMenu.current.contains(e.target)){
            setShowNav(false)
        }
    }
    useEffect(()=>{
        refMenu.current.classList.toggle("nav__nav--show")
        if(showNav){
            document.addEventListener("click",handleClickOutside)
        }
        return () =>{
            document.removeEventListener("click",handleClickOutside)
        }
    },[showNav])

    return (
        <header className="nav__header">
            <nav ref={refMenu} className="nav__nav">
                <ul className="nav__list">
                    <li className="nav__item nav__item--perfil">
                        <div className="imagen"></div>
                        <div>
                            <h1>Angel Castañeda</h1>
                            <a>Ver perfil</a>
                        </div>
                    </li>
                    <li className="nav__item"><a href="/"><IconHome/><span>Home</span></a></li>
                    <li className="nav__item"><a href="/"><IconHistory/><span>History</span></a></li>
                    <li className="nav__item"><a href="/"><IconChange/><span>Change conversation</span></a></li>
                    <li className="nav__item"><a href="/"><IconVocabulary/><span>Vocabulary</span></a></li>
                </ul>
            </nav>
            <div ref={refIconMenu} className="nav__icon" onClick={handleShowNav} ><IconMenu /></div>
            
        </header>
    )
}