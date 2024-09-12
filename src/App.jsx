import './App.css'
import Listpokemon from "../frontend/components/Listpokemon"

const  App = () => {
  return (
    <div className='App'>
      <h1> Liste de Pokemon </h1>
      <div className='pokemonList'>
      <Listpokemon/>
    </div>
    </div>
    
  )
}

export default App;