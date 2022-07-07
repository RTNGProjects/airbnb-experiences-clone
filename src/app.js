import React from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cardElements = data.map(elements => 
        <Card
            key={elements.id}
            item={elements}
            // {...item}
        /> 

    )


    return (
        <div>
            <Navbar />
            <Main />
            <section className="cards-list">
                {cardElements}
            </section>
        </div>
    )
}