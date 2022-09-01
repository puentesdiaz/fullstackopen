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
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {positive} %</p>
    </>
  )

}