import { useRef } from "react"

function RefExemple () {

    const inputRef = useRef(null)

   const handleclick = () => {
    inputRef.current.focus()
    console.log(inputRef.current)
   }

    return (
        <div>
{/* Prop Ref Pega o elemento nativo do DOM e vincula ao nosso useRef toda vez q for renderizado */}
            <input ref={inputRef} type="text" /> 
            <button onClick={handleclick}>Focar No Input</button>
        </div>
    )
}

export default RefExemple