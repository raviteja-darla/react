import { useState } from 'react'
import { Fragment } from 'react'
import Button from './Component/Button'
import './App.css'

function App() {

    const [color, setColor] = useState("white")
    let btnList  = [
        { id : 1, btnName : "Red", className : "bg-red-400", func : () => setColor("Red") },
        { id : 2, btnName : "Green", className : "bg-green-400", func : () => setColor("Green") },
        { id : 3, btnName : "Blue", className : "bg-blue-400", func : () => setColor("Blue") },
        { id : 4, btnName : "Black", className : "bg-gray-500", func : () => setColor("Black") },
        { id : 5, btnName : "Pink", className : "bg-pink-400", func : () => setColor("Pink") },
        { id : 6, btnName : "Yellow", className : "bg-yellow-400", func : () => setColor("Yellow") },
        { id : 7, btnName : "Purple", className : "bg-purple-400", func : () => setColor("Purple") },
    ]


    return (
        <Fragment>
            <div className="w-full h-screen duration-200 bg-change-container" style={{background : color}}>
                <div className="btn-container">
                    {
                        btnList.map(btn => <Button key={btn.id} btnName={btn.btnName} className={btn.className} onClick={btn.func} />)
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default App
