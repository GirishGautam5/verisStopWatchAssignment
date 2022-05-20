import React, { useRef, useState} from 'react'

export default function Timer() {
    const [timer, setTime] = useState(0);
    const [isTimerStart, setIsTimerStart] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

   
    const useCount = useRef(null);
    const onClickhandler=()=>{
        setIsTimerStart(true);
        setIsPaused(true);
        useCount.current = setInterval(()=>{
            setTime((timer)=>  timer +1 )
        }, 1)
    }
    const stophandler=()=>{
        clearInterval(useCount.current)
    }
    const pauseHandler=()=>{
        clearInterval(useCount.current)
        setIsPaused(false)
    }
    const continuehandler=()=>{
        setIsPaused(true);
        useCount.current = setInterval(()=>{
            setTime((timer)=> timer +1)
        }, 1)
    }
     const formatTime = (timer) => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
      
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }
  return (
    <div>
         <h1>{formatTime(timer)}</h1>
        {!isTimerStart && !isPaused ? 
 <button onClick={onClickhandler}>Start</button>:
 <button onClick={pauseHandler}>Pause</button>
    }
       
        <button onClick={stophandler}>Stop</button>
      
        <button onClick={continuehandler}>continue</button>
    </div>
  )
}
