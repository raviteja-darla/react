import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
    let cardList = [
        { id : 1, username : "Darla Raviteja", role : "Front End Developer", age : 26, btntext : "Visit Me" },
        { id : 2, username : "Darla Divya Sree", role : "Court Master", age : 26, btntext : "Click Me" },
        { id : 3, username : "Somway", role : "Subect Matter Expert", age : 29, btntext : "Click Me" }
    ]
    return (        
        <>
            <h1 className="bg-red-400 rounded-xl mb-1.5 p-2 text-black">Hi Raviteja</h1>
            <div className="cards-container">
                {
                    cardList.map(card => <Card key={card.id} username={card.username} role={card.role} age={card.age} /> )
                }
            </div>
        </>
    )
}

export default App
