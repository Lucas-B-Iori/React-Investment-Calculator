import Input from "./Input";

export default function UserInput({ investment, setInvestment }) {
    return(
        <section id="user-input" className="input-group">
            <Input text="Investimento Inicial" state={investment} setState={setInvestment} type="initialInvestment"/>
            <Input text="Investimento Anual" state={investment} setState={setInvestment} type="annualInvestment"/>
            <Input text="Retorno Esperado" state={investment} setState={setInvestment} type="expectedReturn"/>
            <Input text="Duração" state={investment} setState={setInvestment} type="duration"/>
        </section>
    )
}