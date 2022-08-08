import { useEffect, useState } from "react";
import { TargetDateTimeInterface } from "../interfaces/TargetDateTimeInterface";
import { Helpers } from "../utils/Helpers";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { DateTimeInterface } from "../interfaces/DateTimeInterface";
const TargetDateTime = ({ targetDate, backDateInput }: TargetDateTimeInterface) => {
    let timeoutID = 0
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    
    const [datasTimes, setDateTimes] = useState<DateTimeInterface>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const timeCalculated = () => {
        const timeLeft = targetDate.getTime() - new Date().getTime()
        if(timeLeft > 0) {
            setDateTimes(current => {
                return {
                    ...current,
                    days: Math.floor(timeLeft / day),
                    hours: Math.floor((timeLeft % (day)) / (hour)),
                    minutes: Math.floor((timeLeft % (hour)) / (minute)),
                    seconds: Math.floor((timeLeft % (minute)) / second)
                }
            })            
        } else {
            window.clearTimeout(timeoutID)
        }
    }

    useEffect(() => {   
        const timeoutID = setTimeout(() => {
            timeCalculated()
        }, 1000)      
        return () => {
            window.clearTimeout(timeoutID)
        }        
    }, [datasTimes])
        
    return (
        <>
            <div className="container">
                <div className="back">
                    <div className="icon" onClick={() => backDateInput()}>
                        <AiOutlineArrowLeft title="Voltar" style={{color:"#fff", width: "30px", height: "30px"}} />
                     </div>
                </div>
                <div className="dateTime">          
                    <div className="box">
                        <div>{Helpers.convertValueToTwoDigits(datasTimes.days)}</div>
                        <div>Dias</div>
                    </div>
                    <div className="box">
                        <div>{Helpers.convertValueToTwoDigits(datasTimes.hours)}</div>
                        <div>Horas</div>
                    </div>
                    <div className="box">
                        <div>{Helpers.convertValueToTwoDigits(datasTimes.minutes)}</div>
                        <div>Minutos</div>
                    </div>
                    <div className="box">
                        <div>{Helpers.convertValueToTwoDigits(datasTimes.seconds)}</div>
                        <div>Segundos</div>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default TargetDateTime