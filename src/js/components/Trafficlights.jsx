import React,{useState} from "react";

export const Trafficlights =() => {

    let [counter, setCounter ] = useState(0)
    let [btnGlow, setBtnGlow] = useState("")

    let change =()=>{
   


    if (counter === 0) {
        setContador(1)
        setBtnGlow("btn-danger")
    } else {
        setContador(0)
        setBtnGlow("btn-success")
    }
}

return(
        <>
        <h1>Hooks (estados)</h1>
        
        <button type="button" className={"btn " +btnColor} onClick={incrementar}>{texto}</button>
        <p>El contador es {contador} </p>




        </>
    )

}