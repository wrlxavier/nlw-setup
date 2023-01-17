import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
    <Habit completed={3}/>
    <Habit completed={2}/>
    <Habit completed={1}/>

    </div>
  )
}

export default App


//Componente: serve para reaproveitar/isolar partes da aplicação
//Propriedade: uma informação enviada para modificar um comonente visualmente ou comportamentalmente
