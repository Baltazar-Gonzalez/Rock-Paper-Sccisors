import React from "react"
import {GlobalStyle} from "../../styles/GlobalStyles"
import styled from "styled-components"
import Accountant from "../Accountant.js"
import Table from "../Table"

const Div = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 min-height: 100vh;
 padding: 32px;
 span{
   width: 120px;
   height: 45px;
   padding: 10px;
   margin: 0 auto;
   text-align: center;
   border:solid 3px rgba(255, 255, 255, .29);
   border-radius: 10px;
 }
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Div>
      <Accountant/>
      <Table/>
      <span>RULES</span>
    </Div>
    </>
  );
}

export default App;
