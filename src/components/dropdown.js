import React, { useEffect, useState } from "react";


const data = [
    {
        question: "question1",
        answer: "abcdefg"
    },
    {
        question: "question1",
        answer: "abcdefg"
    },
    {
        question: "question1",
        answer: "abcdefg"
    },
    {
        question: "question1",
        answer: "abcdefg"
    }]
const Dropdown = () => {
    const [show, setshow] = useState(false);

    const handle = ()=>{
        setshow(!show)

    }
    return (
        <div>
            <h1 className="head"> Common Car services Questions in delhi</h1>
            <div className="accordian">
                <div>Question <button onClick={handle}>click</button></div>
                {show && <p>answer</p>}

            </div>


        </div>
    )
}

export default Dropdown