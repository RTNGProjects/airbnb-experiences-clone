import React from "react"
// import photogrid from "../images/photo-grid.png"

export default function Main() {
    return (
        <main className="main-container">
            <img src={require("../images/photo-grid.png")} alt="" className="main--photogrid"/>
            <h1 className="main-title">Online Experiences</h1>
            <p className="main-content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </main>
    )
}