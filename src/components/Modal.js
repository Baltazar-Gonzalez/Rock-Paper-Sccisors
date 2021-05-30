import React from 'react'
import ReactDom from "react-dom"
import styled from 'styled-components'
 
const Div = styled.div`
    color: black;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    flex-direction: column;
    align-items: center;
h2{
    color: #3B4262;
    margin-bottom: 30px;
}
.container {
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 10rem;
    background-color: #ffffff;
    padding: 1rem;
    width: 400px;
    min-width: 200px;
    justify-content: space-between;

  }
.closeButton{
    margin-top: 25px;
}
`
 
const Modal = ({isOpen, onClose}) => {
    if(!isOpen){
        return null
    }
   return(
       ReactDom.createPortal(
       <Div>
           <div className="container">
                <h2>RULES</h2>
                <img src="./images/image-rules.svg" alt="rules"/>
                <img className="closeButton" src="./images/icon-close.svg" alt="close" onClick={onClose}/>
           </div>
       </Div>,
       document.getElementById("modal")
   ))
}
 
export default Modal