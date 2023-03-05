import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const [result, setResult] = useState("");

    function handleClick(e) {
        setResult(result.concat(e.target.value));
    }

    function changeSign() {
        if (result > 0) {
            setResult(-result);
        } else {
            setResult(Math.abs(result));
        }
    }

    function clear() {
        setResult("");
    }

    function percent() {
        setResult(result / 100);
    }

    function calculate() {
        try {
            setResult(eval(result).toFixed(4).toString());
        } catch (err) {
            setResult("Error")
        }
    }

    return (
        <div className="container">
            <form>
                <input type="text" placeholder="0" value={result} />
            </form>
            <div>
                <button onClick={clear}>AC</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={percent}>%</button>
                <button className="orange" onClick={handleClick} value={"/"}>÷</button>
            </div>
            <div>
                <button className="gray" onClick={handleClick} value={7}>7</button>
                <button className="gray" onClick={handleClick} value={8}>8</button>
                <button className="gray" onClick={handleClick} value={9}>9</button>
                <button className="orange" onClick={handleClick} value={"*"}>X</button>
            </div>
            <div>
                <button className="gray" onClick={handleClick} value={4}>4</button>
                <button className="gray" onClick={handleClick} value={5}>5</button>
                <button className="gray" onClick={handleClick} value={6}>6</button>
                <button className="orange" onClick={handleClick} value={"-"}>-</button>
            </div>
            <div>
                <button className="gray" onClick={handleClick} value={1}>1</button>
                <button className="gray" onClick={handleClick} value={2}>2</button>
                <button className="gray" onClick={handleClick} value={3}>3</button>
                <button className="orange" onClick={handleClick} value={"+"}>+</button>
            </div>
            <div>
                <button className="button-zero gray" onClick={handleClick} value={0}>0</button>
                <button className="gray" onClick={handleClick} value={"."}>.</button>
                <button className="orange" onClick={calculate}>=</button>
            </div>
        </div>
    );
}

export default Calculator