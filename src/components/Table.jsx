import TableRow from "./TableRow";

export default function Table({ data, initialInvestment }) {
    let investmentCapital = initialInvestment
    return(
        <section>
            <table id="result">
                <thead>
                    <tr>
                        <th>Ano</th>
                        <th>Valor Investido</th>
                        <th>Interesse (Ano)</th>
                        <th>Interesse Total</th>
                        <th>Capital Investido</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(el => {
                        investmentCapital += el.annualInvestment
                        return <TableRow key={el.year} el={el} investmentCapital={investmentCapital}/>
                    })}
                </tbody>
            </table>
        </section>
    )
}