import {  useEffect, useState } from "react";
import "./App.scss";
import "react-datepicker/dist/react-datepicker.css";
import InputDateTimePicker from "./components/InputDateTimePicker";
import { Helpers } from "./utils/Helpers";
import TargetDateTime from "./components/TargetDateTime";

const App = () => {
  const [targetDate, setTargetDate] = useState<Date | null>(null)
  const [selectTargetDate, setSelectTargetDate] = useState<Date | null>(null)

  const saveTargetDate = async () => {
    if(selectTargetDate) {
      await Helpers.setItemSessionStorage(selectTargetDate.toString())
      setTargetDate(selectTargetDate)
    }
  }

  const targetDateSelected = async (date: Date): Promise<void> => {
    setSelectTargetDate(date)
  }

  const backDateInput = async () => {
    await Helpers.removeItemSessionStorage()
    setTargetDate(null)
  }

  useEffect(() => {
    const loadTargetDate = async (): Promise<void> => {
      const targetDateSaved = await Helpers.getItemSessionStorage()
      if(targetDateSaved) {
        setTargetDate(new Date(targetDateSaved))
        setSelectTargetDate(new Date(targetDateSaved))
      }
    }
    loadTargetDate()
  }, []) 

  return (
    <div className="wrap">       
      {
        targetDate ? (
          <div className="list">
            <TargetDateTime targetDate={targetDate} backDateInput={backDateInput} ></TargetDateTime>
          </div>          
        ) : (
          <div className="create">        
            <InputDateTimePicker saveTargetDate={saveTargetDate} selectTargetDate={selectTargetDate} 
            targetDateSelected={targetDateSelected} />
          </div>
        )
      }
    </div>
  )
}
export default App;
