import React from "react"
import {GlobalStyle} from "../../styles/GlobalStyles"
import styled from "styled-components"
import Accountant from "../Accountant.js"
import Table from "../Table"
import Rules from "../Rules"

const Div = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 min-height: 100vh;
 padding: 32px;
 
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Div>
      <Accountant/>
      <Table/>
      <Rules/>
    </Div>
    </>
  );
}

export default App;
