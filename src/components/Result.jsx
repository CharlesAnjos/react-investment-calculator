import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({ userInput }) {

  const annualData = calculateInvestmentResults(userInput);
  const initialInvestment = 
    annualData[0].valueEndOfYear - 
    annualData[0].interest - 
    annualData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((row, index) => {
          const totalInterest = 
            row.valueEndOfYear - 
            (row.annualInvestment * row.year) - 
            initialInvestment;
          const totalAmmountInvested = row.valueEndOfYear - totalInterest
          return (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}