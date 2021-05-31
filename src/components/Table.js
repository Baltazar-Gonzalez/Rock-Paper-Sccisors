import React, {useState} from 'react'
import styled from 'styled-components'
import {WhiteButton} from "./Button"
import Token from './Token'

const Div = styled.div`
 display: grid;
 margin-bottom:20px;
 grid-template-columns: 130px 130px;
 justify-content: center;
 justify-items: center;
 flex-wrap: wrap;
 grid-gap: 20px 50px;
 background-image: ${({playing}) => playing ? "none": "url(./images/bg-triangle.svg)"};
 background-repeat: no-repeat;
 background-size: 200px;
 background-position: center;
 & div:nth-of-type(3){
     grid-column: span 2;
 }
 .in-game{
     text-align:center;
     p{
         margin-top: 20px;
         letter-spacing: 1px;
         font-size: 14px;
     }
 }
 .results{
    text-align: center;
    h2{
        
    }
 }
 @media screen and (min-width: 768px) {
    grid-gap: 40px 140px;
    background-size: 320px;


 }
`
 
const Table = ({newScore}) => {
    const [playing, setPlaying] = useState(false)
    const [pick, setPick] = useState("")
    const [housePick, setHousePick] = useState("default")
    const [results, setResults] = useState(false)
    function getRandomInt(min, max) {
        return (Math.floor(Math.random() * (max - min)) + min)
      }
    const launchHousePick = () => {
        return new Promise ((resolve, reject) => {
            let pick
            const interval = setInterval(() => { 
                pick = elements[getRandomInt(0,3)]
                setHousePick(pick)
            }, 100)
            setTimeout(() => {
                clearInterval(interval)
                resolve(pick)
            }, 2000)
        })
        
        
        
    }
    const onClick = async(name) => { 
        setPlaying(true)
        setPick(name)
        const house = await launchHousePick()
        const results = playWithIA(name, house)
        setResults(results)
        if(results === "WIN"){
            newScore()

        }
    }
    const playWithIA = (pick, housePick) =>{
        if(housePick === pick){
            return"DRAW"
        }
        if(pick === "paper"){
            if(housePick === "scissors"){
                return"LOSE"
            }
            if(housePick === "rock"){
                return"WIN"
            }
        }
        if(pick === "scissors"){
            if(housePick === "paper"){
                return"WIN"
            }
            if(housePick === "rock"){
                return"LOSE"
            }
        }
        if(pick === "rock"){
            if(housePick === "paper"){
                return"LOSE"
            }
            if(housePick === "scissors"){
                return"WIN"
            }
        }
    }
    const handleTryAgain = () =>{
        setPlaying(false)
        setPick("")
        setHousePick("default")
        setResults(false)

    }
    
   const elements = [
       "paper",
       "scissors",
       "rock"
   ]
    

   return(
       <Div playing={playing}>
        {!playing ? (
           <>
            <Token name="paper" onClick={onClick}/>
            <Token name="scissors" onClick={onClick}/>
            <Token name="rock" onClick={onClick}/>
           </>):
            <>
                <div className="in-game">
                    <Token name={pick} isShadowAnimated={(results==="WIN")}/>
                    <p>YOU PICKED</p>
                </div>
                <div className="in-game">
                    <Token name={housePick} isShadowAnimated={(results==="LOSE")}/>
                    <p>THE HOUSE PICKED</p>
                </div>
                <div className="results">
                    {results && (
                        <>
                        <h2>YOU {results}</h2>
                        <WhiteButton onClick={handleTryAgain}>PLAY AGAIN</WhiteButton>
                        </>
                    )
                    }
                </div>
            </>
           }
       </Div>
   )
}
 
export default Table