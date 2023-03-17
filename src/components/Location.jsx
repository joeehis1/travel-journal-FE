import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export function Location(props){
    const{title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props.location
    console.log(title)
    return (
        <div className="tile">
            <img className="image" src={imageUrl} alt="" />
            <p className="location"><FontAwesomeIcon className="icon" icon={faLocationDot}/>{location}</p>
            <a className="url" href={googleMapsUrl}>View on Google Maps</a>
            <h2 className="title">{title}</h2>
            <p className="date">
                <time dateTime="">{startDate}</time> - <time dateTime="">{endDate}</time>
            </p>
            <p className="description">
                {description}
            </p>
        </div>
    )
}