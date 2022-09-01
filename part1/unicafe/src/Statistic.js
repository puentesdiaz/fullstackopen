export const Statistic = ({ text, value }) => { 
  let sign = (text === "Positive") ? "%" : ""
  return (
      <tr><td>{text}</td><td>{value} {sign}</td></tr>
  )
}