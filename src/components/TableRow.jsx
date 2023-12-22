import { formatter } from '../util/investment'

export default function TableRow({ el, investmentCapital }) {
    const { year, interest, valueEndOfYear } = el
    const totalInterest = valueEndOfYear - investmentCapital 

    return (
        <tr>
            <td>{year}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(investmentCapital)}</td>
        </tr>
    )
}