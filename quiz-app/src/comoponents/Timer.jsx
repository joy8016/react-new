import React, { useEffect, useState } from 'react'

const Timer = ({setISover}) => {
    const [leftTime, setLeftTime]=useState(5);
    const[displayTime, setdisplayTime]=useState('');
  
    // console.log(leftTime);

    //left time logic

    useEffect(()=>{
     let intervalId= setInterval(() => {
        setLeftTime(prev=>{
          if(prev <=0){
            clearInterval(intervalId);
            setISover(true);
            return 0;
          }
          return prev -1;

        })
        
      }, 1000);
    },[])



    //time format logic

    useEffect(()=>{
      if(leftTime === 0){
        setISover(true);
      }
      let formatedTime = (`${Math.floor(leftTime/60).toString().padStart(2,0)} : ${Math.floor(leftTime%60).toString().padStart(2,0)}`)
      setdisplayTime(formatedTime);
      
    },[leftTime])

  return (
    <div>
        🕐 Time Left: {displayTime}
       
      
    </div>
  )
}

export default Timer
