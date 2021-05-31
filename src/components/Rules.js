import React, {useState} from 'react'
import styled from 'styled-components'
import Button from "./Button"
import Modal from "./Modal"

const Div = styled.div`
    text-align: center;
@media screen and (min-width: 1024px){
    position: fixed;
    bottom: 2em;
    right: 2em;
 }
`
 
const Rules = () => {
    const [state, setState] = useState({isOpen:false})
    const onOpenModal = () => {
        setState({isOpen:true})
    }
    const onCloseModal = () => {
        setState({isOpen:false})
    }

   return(
       <Div>
           <Modal isOpen={state.isOpen} onClose={onCloseModal}/>
           <Button onClick={onOpenModal} className="button">RULES</Button>
       </Div>
   )
}
 
export default Rules