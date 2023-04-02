import React, { useState } from "react";
import "./Buttons.css"
import BackspaceIcon from '@mui/icons-material/Backspace';

function Buttons() {
    const [result, setResult] = useState("");

    const handleClick = (event) => {
        setResult(result.concat(event.target.value));
    }

    const clearDisplay = () => {
        setResult("");
    }

    const backspace = () => {
        setResult(result.slice(0, result.length-1));
    }

    const calculate = () => {
        setResult(eval(result).toString());
    }

    return (
        <div className="buttons_container_main">
            <input type="text" placeholder="0" value={result} />
            <div className="buttons_container">
                <button className="buttons_clear" onClick={clearDisplay}>CE</button>
                <button className="buttons_all" onClick={backspace}><BackspaceIcon /></button>
                <button value="%" className="buttons_all" onClick={handleClick}>%</button>
                <button value="/" className="buttons_operator" onClick={handleClick}>/</button>
            </div>
            <div className="buttons_container">
                <button value="7" className="buttons_all" onClick={handleClick}>7</button>
                <button value="8" className="buttons_all" onClick={handleClick}>8</button>
                <button value="9" className="buttons_all" onClick={handleClick}>9</button>
                <button value="*" className="buttons_operator" onClick={handleClick}>*</button>
            </div>
            <div className="buttons_container">
                <button value="4" className="buttons_all" onClick={handleClick}>4</button>
                <button value="5" className="buttons_all" onClick={handleClick}>5</button>
                <button value="6" className="buttons_all" onClick={handleClick}>6</button>
                <button value="-" className="buttons_operator" onClick={handleClick}>-</button>
            </div>
            <div className="buttons_container">
                <button value="1" className="buttons_all" onClick={handleClick}>1</button>
                <button value="2" className="buttons_all" onClick={handleClick}>2</button>
                <button value="3" className="buttons_all" onClick={handleClick}>3</button>
                <button value="+" className="buttons_operator" onClick={handleClick}>+</button>
            </div>
            <div className="buttons_container">
                <button value="0" className="buttons_all" onClick={handleClick}>0</button>
                <button value="00" className="buttons_all" onClick={handleClick}>00</button>
                <button value="." className="buttons_all" onClick={handleClick}>.</button>
                <button className="buttons_result" onClick={calculate}>=</button>
            </div>
        </div>
    );
}

export default Buttons;