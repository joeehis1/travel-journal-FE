import { Header } from "./components/Header"
import { Main } from "./components/Main"
import {data} from './data'


function App(){
    return (
        <>
            <Header />
            <Main locations={data}/>
        </>
    )
}

export default App