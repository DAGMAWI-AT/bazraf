import React from 'react'
import { counter } from '../../data/Data'
import "../../../App.css"
import CountUp from 'react-countup'
const Counter = () => {
  return (
    <div>
        <div className="hero counter">
            <div className="container grid3 grid4">  
               {counter.map((item, i)=>(
                    <>
                  
                        <div className='box'>

                            <i>{item.icon}</i>
                            <h1 className="heading">
                            <CountUp enableScrollSpy duration={2} end={item.num}/>
                            </h1>
                            <h3 >{item.title}</h3>
                        </div>

                    </>
                 ))}
            </div> 
        </div>
    </div>
  )
}

export default Counter
