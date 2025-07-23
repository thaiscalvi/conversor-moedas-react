import { useState } from 'react'
import './App.css'

function App() {
    const [moeda, setMoeda] = useState("")
    const [resultado, setResultado] = useState("")
    const [trocar, setTrocar] = useState("reais")

    const handleClickResultado =() => {
      if (trocar === "reais"){
        setResultado ((moeda/6).toFixed(2))
      } else {
        setResultado((moeda * 6).toFixed(2))
      }
    }

    const handleClickTrocar = () => {
      if (trocar === "reais") {
        setTrocar("dollar")
      } else {
        setTrocar("reais")
      }
    }

    const handleClickLimpar = () => {
      setMoeda("")
      setResultado("")
      setTrocar("reais")
    }


  return (
    <>
     <div className="container">

      <h1 className="titulo">Conversor de Moeda</h1>

        <input type="number" 
         className="input-moeda"
        placeholder={trocar === "reais" ? "Digite o valor em R$" : "Digite o valor em $"}
        value={moeda}
        onChange={({target}) => setMoeda(target.value)}
        />

        <div className="resultado">
          <p>{trocar === "reais" ? "Valor em $" : "Valor em R$"}{resultado}</p>
        </div>

       <button className="btn-trocar" onClick={handleClickTrocar}>Trocar</button>
       <button className="btn-converter" onClick={handleClickResultado}>Converter</button>
       <button  className="btn-limpar" onClick={handleClickLimpar}>Limpar</button>

    </div>
    </>
  )
}

export default App
