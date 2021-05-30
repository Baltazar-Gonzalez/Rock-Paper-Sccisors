import React, {useState} from 'react'
import styled from 'styled-components'
import Button from "./Button"
import Modal from "./Modal"

const Div = styled.div`
   margin: 0 auto;
 
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
           <Button onClick={onOpenModal}>RULES</Button>
       </Div>
   )
}
 
export default Rules