export const Button = ({ text, setF }) => {

    return (
      <>
        <button onClick={() => { setF()}}>
          {text}
        </button>
      </>
    )
  
  }