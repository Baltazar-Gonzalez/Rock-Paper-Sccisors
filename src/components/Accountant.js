import React from "react"
import styled from "styled-components"
import Score from "./Score.js"

const Div = styled.div`
margin:32px;
padding:12px 12px 12px 23px;
border-radius: 8px;
border:solid 3px rgba(255, 255, 255, .29);
display: flex;
justify-content: space-between;
align-items: center;
 h1{
    font-size: 21px;
    color:white; 
    line-height: 16px;
 }
`

const Accountant = () =>{
    return (
    <Div>
        <h1>ROCK <br/> PAPER <br/> SCISSORS</h1>
        <Score/>
    </Div>
    )
}

export default Accountant