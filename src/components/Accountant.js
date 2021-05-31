import React from "react"
import styled from "styled-components"
import Score from "./Score.js"

const Div = styled.div`
margin:32px auto;
padding:12px 12px 12px 23px;
border-radius: 8px;
border:solid 3px rgba(255, 255, 255, .29);
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 700px;
 h1{
    font-size: 21px;
    color:white; 
    line-height: 16px;
 }
 @media screen and (min-width: 768px){
    padding:20px 20px 20px 34px;
  h1{
    font-size: 36px;
    line-height: 0.8;
  }
}
`

const Accountant = ({score}) =>{
    return (
    <Div>
        <h1>ROCK <br/> PAPER <br/> SCISSORS</h1>
        <Score score={score}/>
    </Div>
    )
}

export default Accountant