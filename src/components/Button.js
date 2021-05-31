import React from 'react'
import styled from 'styled-components'
 
const Div = styled.div`
   display: inline-flex;
   justify-content: center;
   padding: 10px;
   text-align: center;
   border:solid 3px rgba(255, 255, 255, .29);
   border-radius: 10px;
   cursor: pointer;
   letter-spacing: 2.5px;
   min-width: 128px;
   :hover{
     background: white;
     color: #2A45C2;
   }
`
 
export const WhiteButton = styled(Div)`
    background: white;
    color: #2A45C2;
    min-width: 220px;
`

const Button = ({children, ...props}) => {
   return(
       <Div {...props}>
           {children}
       </Div>
   )
}
 
export default Button