import React, { useState } from "react";

export const Trafficlights = () => {



    let [color, setColor] = useState("btn-danger")
    let [colorY, setColorY] = useState("btn-warning")
    let [colorG, setColorG] = useState("btn-success")



    let change = () => {
        setColor("btn-danger glow")

        setColorY("btn-warning")
        setColorG("btn-success")


    }

    let changeY = () => {
        setColorY(" btn-warning glow")

        setColor("btn-danger")
        setColorG("btn-success")



    }

    let changeG = () => {
        setColorG("btn-success glow")

        setColor("btn-danger")
        setColorY("btn-warning")


    }


    return (
        <>
            <div className="container1"></div>
            <div className="container d-flex flex-column" >
                <div className="row">
                    <div className="col-12">

                        <button type="button" className={"btn " + color} onClick={change}></button>
                    </div>
                    <div className="col-12">
                        <button type="button" className={"btn " + colorY} onClick={changeY}></button></div>
                    <div className="col-12">
                        <button type="button" className={"btn " + colorG} onClick={changeG}></button>
                    </div>
                </div>
            </div>



        </>
    )

}