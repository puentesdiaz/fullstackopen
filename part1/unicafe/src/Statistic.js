export const Statistic = ({ text, value }) => { 

  let sign = (text === "Positive") ? "%" : ""
  return (
    <>
      <p>{text} {value} {sign}</p>
    </>
  )

}