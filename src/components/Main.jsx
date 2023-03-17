
import { Location } from "./Location"

export function Main(props){
    const {locations} = props
    let locationElements = []
    for(let location of locations){
        locationElements.push(<Location key={locations.indexOf(location) + 1} location={location}/>)
    }
    return(
        <main>
            <div className="container">
                <section>
                    {locationElements}
                </section>
            </div>
        </main>
    )
}