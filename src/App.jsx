import { Header } from "./components/Header"
import { Main } from "./components/Main"
import {data} from './data'
import { Footer } from "./components/Footer"

function App(){
    return (
        <>
            <Header />
            <Main locations={data}/>
            <Footer />
        </>
    )
}

export default App