import React, {useState} from "react";
import {Button} from "../button/Button";
import st from './Table.module.css'

export const Table = () => {

//чисто чтобы цифры не писать
    const defaultValue = 1

    // чисто для функий инкримента и ресет
    const maxValue = 5
    const minValue = 1


    const [count, setCount] = useState(0)

    //создаем инкримент для добавления данных +1
    const increment = () => {
        if (count < maxValue) {
            return setCount(count + defaultValue)
        }
    }

    // функция ресет для зануления
    const reset = () => {
        return setCount(0)
    }

    return (
        <div className={st.counter}>
            {/*стиль для цифпры счетчика, чтобы красным горело*/}
<div className={st.table}>
    <h1 className={count == 5 ? st.red : ''}>{count}</h1>
</div>

            {/*реализация кнопки*/}
            <Button name={'inc'} onClick={increment} disabled={count === maxValue}/>
            <Button name={'reset'} onClick={reset} disabled={count < minValue}/>
        </div>

    )
}