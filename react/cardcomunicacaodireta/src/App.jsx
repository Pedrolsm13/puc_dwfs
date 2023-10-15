import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NumAleatorio from './component/NumAleatorio'
import Card1 from './component/Card1'
import Card2 from './component/Card2'
import Veiculos from './component/Veiculos'
import CaractVeiculos from './component/CaractVeiculos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main id='cards'>
      <h1>React: Componentes Básicos</h1>
      <NumAleatorio min={2} max={50}></NumAleatorio>
      <Card1 titulo="Ex 1 - Passagem de parâmetros via props" texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus consequuntur velit accusantium tempora veniam, ab ea quod delectus earum ut? Neque consectetur nobis rerum accusantium unde dolore fugiat alias dicta."></Card1>
      <Card2 titulo="Ex 2 - Passar outro componente" texto="Geração de números aletórios">
        <NumAleatorio min={2} max={50}></NumAleatorio>
      </Card2>
      <Veiculos titulo="Veículos" motor="Hibrido">
        <CaractVeiculos motor="Combustão" cambio="Manual" carroceria="Sedan"></CaractVeiculos>
        <CaractVeiculos motor="Elétrico" cambio="Automático" carroceria="Hatch"></CaractVeiculos>

      </Veiculos>
    </main>
  )
}

export default App
