import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons"

function Header(){
    return(
        <header><h1><FontAwesomeIcon icon={faEarthAsia}/>my travel journal</h1></header>
    )
}

export {Header}