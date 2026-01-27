import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table className="text-white mx-auto mt-6 border-collapse text-center">
      <thead>
        <tr>
          <th className="p-2">Year</th>
          <th className="p-2">Investment Value</th>
          <th className="p-2">Interest (Year)</th>
          <th className="p-2">Total Interest</th>
          <th className="p-2">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          const investedCapital =
            initialInvestment +
            yearData.annualInvestment * yearData.year;

          return (
            <tr key={yearData.year}>
              <td className="p-2">{yearData.year}</td>
              <td className="p-2">
                {formatter.format(yearData.valueEndOfYear)}
              </td>
              <td className="p-2">
                {formatter.format(yearData.interest)}
              </td>
              <td className="p-2">
                {formatter.format(totalInterest)}
              </td>
              <td className="p-2">
                {formatter.format(investedCapital)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
