import React, {useState} from "react"
import {GlobalStyle} from "../../styles/GlobalStyles"
import styled from "styled-components"
import Accountant from "../Accountant.js"
import Table from "../Table"
import Rules from "../Rules"


const Div = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 min-height: 100vh;
 padding: 32px;
 
`

function App() {
  const [score, setScore] = useState(0)
  const newScore = () =>{
    setScore(score+1)
  }
  return (
    <>
      <GlobalStyle/>
      <Div>
        <Accountant score={score}/>
        <Table newScore={newScore}/>
        <Rules/>
      </Div>
    </>
  );
}

export default App;
