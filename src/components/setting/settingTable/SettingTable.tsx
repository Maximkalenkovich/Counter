import {Button} from "../../button/Button";
import s from './SettingTable.module.css'
import {ChangeEvent, useState} from "react";
import {SettingTableType} from "../../../App";


export const SettingTable: React.FC<SettingTableType> = ({minValueProps, maxValueProps, onSettingsChange}) => {
    const [min, setMin] = useState(minValueProps)
    const [max, setMax] = useState(maxValueProps)

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMin(parseInt(event.target.value));
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMax(Number(event.target.value));
    };

    const handleApplySettings = () => {
        onSettingsChange(min, max);
    };

    return (
        <div>
            <div className={s.table}>
                <label>
                    Max Value:
                    <input type="number" value={max} onChange={handleMaxChange}/>

                </label>
                <br/>
                <label>
                    Start Value:
                    <input  type="number" value={min} onChange={handleMinChange}/>
                </label>
                <br/>
            </div>
            <Button name={'set'} onClick={handleApplySettings} disabled={min<1 && max<1}/>

        </div>
    )

}