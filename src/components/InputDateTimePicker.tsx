import { useEffect, useState } from "react";
import DateTimePicker, {registerLocale} from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import { InputDateTimeInterface } from "../interfaces/InputDateTimeInterface";
registerLocale('pt-BR', ptBR)

const InputDateTimePicker  = ({ saveTargetDate, targetDateSelected, selectTargetDate }: InputDateTimeInterface) => {
  return (
    <>
      <DateTimePicker
        locale="pt-BR"
        selected={selectTargetDate}
        onChange={(date: Date) => targetDateSelected(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="dd/MM/yyyy hh:mm aa"
        placeholderText="Inserir a data alvo"
      />
      <button onClick={() => saveTargetDate()}>Salvar</button>
    </>
  )
}

export default InputDateTimePicker