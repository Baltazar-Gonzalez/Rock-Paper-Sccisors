import React from 'react'
import styled from 'styled-components'
 
const Div = styled.div`
 width: 130px;
 height: 125px;
 border: 16px solid ${(props) => props.color.base};
 box-sizing: border-box;
 box-shadow: 0 5px 0 ${(props) => props.color.border};
 border-radius: 50%;
 background-color: white;
 cursor:pointer;
 &:active {
     transform: scale(.9);
 }
 .box{
    width:100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 -4px 0 #babfd4;
    display: flex;
    justify-content: center;
    align-items: center;
 }
`

const colors = {
    paper:{
        base: "#516ef4",
        border: "#2543c3",
    },
    rock:{
        base: "#de3a5a",
        border: "#980e31", 
    },
    scissors:{
        base: "#eca81e",
        border: "#c76c14",
    }
}
 
const Token = ({name}) => {
   return(
       <Div color={colors[name]}>
            <div className="box">
                <img src={`./images/icon-${name}.svg`}/>
            </div>           
       </Div>
   )
}
 
export default Token