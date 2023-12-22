import investmentImage from '../assets/investment-calculator-logo.png' 

export default function Header() {
    return (
        <header id='header'>
            <img src={investmentImage} alt="Logo da calculadora de investimentos" />
            <h1>Calculadora de Investimentos</h1>
        </header>
    )
}