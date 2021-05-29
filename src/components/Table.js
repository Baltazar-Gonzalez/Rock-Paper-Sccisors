import React from 'react'
import styled from 'styled-components'
import Token from './Token'

const Div = styled.div`
 display: grid;
 margin-bottom:20px;
 grid-template-columns: 130px 130px;
 justify-content: center;
 justify-items: center;
 flex-wrap: wrap;
 grid-gap: 20px 50px;
 background-image: url("./images/bg-triangle.svg");
 background-repeat: no-repeat;
 background-size: 200px;
 background-position: center;
 & div:nth-of-type(3){
     grid-column: span 2;
 }
`
 
const Table = () => {
   return(
       <Div>
           <Token name="paper"/>
           <Token name="scissors"/>
           <Token name="rock"/>
       </Div>
   )
}
 
export default Table