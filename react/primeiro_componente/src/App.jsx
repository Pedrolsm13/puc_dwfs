import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoasVindas from './componente/BoasVindas'
import Identificacao from './componente/Identificacao'
import IdentificacaoComParametro from './componente/IdentificacaoComParametro'
import StatusAluno from './componente/StatusAluno'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <BoasVindas></BoasVindas>
      <IdentificacaoComParametro
        nome = "Pedro Lucas"
        sobrenome = "Serra Moura"
        idade = {28}
      ></IdentificacaoComParametro>
      <StatusAluno
        nota = {7}
      />
    </main>
  )
}

export default App
