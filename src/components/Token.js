import React from 'react'
import styled, {keyframes} from 'styled-components'

const shadow = keyframes`
    to{
        box-shadow: 0 0 0 40px rgba(255,255,255,.03), 0 0 0 80px rgba(255,255,255,.02), 0 0 0 120px rgba(255,255,255,.01);
        transform: rotateY(360deg) scale(1.1);
    }
`

const Div = styled.div`
 width: 130px;
 height: 125px;
 padding:${({name}) => (name==="default") ? "16px" : 0};
 border: 16px solid ${(props) => props.color.base};
 box-sizing: border-box;
 box-shadow: 0 5px 0 ${(props) => props.color.border};
 border-radius: 50%;
 cursor:pointer;
 animation: 1s ${({isShadowAnimated}) => (isShadowAnimated) ? shadow : ""} forwards;
 ${({isShadowAnimated}) => (isShadowAnimated) ? "box-shadow: 0 0 0 0px rgba(255,255,255,.03), 0 0 0 0px rgba(255,255,255,.02), 0 0 0 0px rgba(255,255,255,.01); ": null}
 &:active {
     transform: scale(.9);
 }
 .box{
    background-color: ${({name}) => (name==="default") ? "#122343" : "white"};
    width:100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 -4px 0 ${({name}) => (name==="default") ? "transparent" : "#babfd4"};
    display: flex;
    justify-content: center;
    align-items: center;
 }
 @media screen and (min-width: 768px) {
    width: 180px;
    height: 175px;
    border: 20px solid ${(props) => props.color.base};
    box-shadow: 0 8px 0 ${(props) => props.color.border};
    .box{
    box-shadow: 0 -6px 0 ${({name}) => (name==="default") ? "transparent" : "#babfd4"};
    }
    img{
        width:50%;
    }
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
    },
    default:{
        base: "122343",
        border: "122343", 
    }
}
 
const Token = ({name = "default", onClick, isShadowAnimated = false}) => {
    const handleClick = () =>{
       if(onClick){
           onClick(name)
        } 
    }


   return(
       <Div color={colors[name]} onClick={handleClick} name={name} isShadowAnimated={isShadowAnimated} >
            <div className="box">
                {(name==="default")? null:
                <img src={`./images/icon-${name}.svg`}/>}
            </div>           
       </Div>
   )
}
 
export default Token