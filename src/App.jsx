import { useState } from 'react'

import Header from "./components/Header"
import Table from "./components/Table"
import UserInput from "./components/UserInput"

import { calculateInvestmentResults } from './util/investment'

const INITIAL_INVESTMENT = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}

function App() {
  const [ investment, setInvestment ] = useState(INITIAL_INVESTMENT)

  const annualData = calculateInvestmentResults(investment)

  return (
    <>
      <Header />
      <UserInput 
        investment={investment}
        setInvestment={setInvestment}
      />
      <Table data={annualData} initialInvestment={investment.initialInvestment}/>
    </>
  )
}

export default App
