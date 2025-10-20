import React, { useState } from "react";

export const Trafficlights = () => {

    let [counter, setCounter] = useState(0)
    let [btnGlow, setBtnGlow] = useState("btn-success")



    let change = () => {

        if (counter === 0) {
            setCounter(1)
            setBtnGlow("btn-danger")
        } else {
            setCounter(0)
            setBtnGlow("btn-success")
        }
    }

    return (
        <>
        <div className="container1"></div>
            <div className="container d-flex flex-column" >
                <div className="row">
                    <div className="col-12">

                        <button type="button" className={"btn " + btnGlow} onClick={change}></button>
                    </div>
                    <div className="col-12">
                        <button type="button" className={"btn " + btnGlow} onClick={change}></button></div>
                    <div className="col-12">
                        <button type="button" className={"btn " + btnGlow} onClick={change}></button>
                    </div>
                </div>
            </div>



        </>
    )

}