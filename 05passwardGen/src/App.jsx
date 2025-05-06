import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

    const [length, setLength] = useState(5);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const passwordGen = useCallback(() => {

        let pass = "";

        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numAllowed) str += "1234567890";
        if (charAllowed) str += "!@#$%^&*()_+`~";

        for(let i = 1; i <= length; i ++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char);
        }
        setPassword(pass)
    }, [length, numAllowed, charAllowed, setPassword]);

    useEffect(() => { passwordGen() }, [length, numAllowed, charAllowed, passwordGen]);

    const copyToClipboard = useCallback(() => {
        passwordRef.current.select();
        window.navigator.clipboard.writeText(password)
    }, [password])

    return (
        <Fragment>
            <div className="body-ele">
                
                <h1 className="text-4xl text-center text-white">Password Generator</h1>

                <div className="password-container">
                    <div className="input-copy">
                        <input type="text" value={password} placeholder="Create Custom Password" ref={passwordRef} readOnly/>
                        <label className="copy" onClick={copyToClipboard} >Copy</label>
                    </div>

                    <div className="password-dependence">
                        <div className="range-lagel">
                            <input type="range" value={length} min={5} max={15} onChange={(e) => setLength(e.target.value)}/>
                            <label>Length: {length}</label>
                        </div>
                    
                        <div className="num-label">
                            <input id="numCheckbox" type="checkbox" defaultValue={numAllowed} onChange={() => { setNumAllowed((prev) => !prev) }} />
                            <label htmlFor="numCheckbox" >Number</label>
                        </div>
                    
                        <div className="char-label">
                            <input id="charCheckbox" type="checkbox" defaultValue={charAllowed} onChange={() => { setCharAllowed((prev) => !prev) }} />
                            <label htmlFor="charCheckbox" >Charater</label>
                        </div>
                    </div>

                </div>
            
            </div>

        </Fragment>
    )    
}

export default App
