import React from 'react'
import styled from 'styled-components'
 
const Div = styled.div`
  background-color:white;
  text-align: center;
  padding: 2px 0;
  border-radius: 8px; 
  width: 90px;
  h4{
    color: #2A45C2;
    font-size:15px;
    margin:8px 8px 4px 8px;
  }
  p{
    color: #565468;
    font-size:40px;
    margin:0;
    font-weight:700;
  }
`
 
const Score = () => {
  return(
      <Div>
        <h4>SCORE</h4>
        <p>12</p>
      </Div>
    )
}
 
export default Score