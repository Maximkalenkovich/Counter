import {SettingInput} from "../input/Input";
import {Button} from "../../button/Button";
import s from './SettingTable.module.css'



export const SettingTable = () =>{
    return(
        <div>
            <div className={s.table}>
                <span className={s.maxvalue}> Max value:  <SettingInput /></span>
                <span className={s.startvalue}>Start value: <SettingInput /></span>

            </div>
          <Button name={'set'} onClick={()=>{}} />

        </div>
    )

}