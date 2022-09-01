import { Statistic } from "./Statistic"
export const Statistics = ({ good, neutral, bad, all, average, positive }) => {

  const head = <h1>Statistics</h1>
  if (all === 0) {
    return (
      <>
        {head}
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      {head}
      <table>
        <thead></thead>
        <tbody>
          <Statistic text={"Good"} value={good} />
          <Statistic text={"Neutral"} value={neutral} />
          <Statistic text={"Bad"} value={bad} />
          <Statistic text={"All"} value={all} />
          <Statistic text={"Average"} value={average} />
          <Statistic text={"Positive"} value={positive} />
        </tbody>
      </table>

    </>
  )

}