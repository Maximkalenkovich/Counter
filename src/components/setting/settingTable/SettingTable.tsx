import {Button} from "../../button/Button";
import s from './SettingTable.module.css'
import {ChangeEvent, useState} from "react";
import {SettingTableType} from "../../../App";
import {NavLink} from "react-router-dom";

export const SettingTable: React.FC<SettingTableType> = ({ minValueProps, maxValueProps, onSettingsChange }) => {
    const [min, setMin] = useState<number>(minValueProps);
    const [max, setMax] = useState<number>(maxValueProps);
    const [isError, setIsError] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;

        let parsedValue = parseInt(value);
        setMin((prevMin) => (name === 'min' ? parsedValue : prevMin));
        setMax((prevMax) => (name === 'max' ? parsedValue : prevMax));
        setIsError(parsedValue < 0 || (name === 'min' && parsedValue === max) || 
            (name === 'max' && parsedValue === min) || (parsedValue === undefined) );
    };


    const handleApplySettings = () => {
        onSettingsChange(min, max);
    };

    return (
        <div className={s.setting}>
            <div className={s.table}>
                <label>
                    <span className={s.title}>Max Value:</span>
                    <input type="number"
                           className={isError ? s.inputError : ''} name="max"
                           value={max}
                           onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    <span className={s.title}>Start Value:</span>
                    <input
                        type="number"
                        name="min"
                        className={isError ? s.inputError : ''}
                        value={min}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
            </div>
            <Button name={'set'} onClick={handleApplySettings} disabled={min < 0 || max < 1 || max <= min || undefined} />
            <NavLink to='/counter'><Button name={'counter'} onClick={()=>{}}/></NavLink>
        </div>
    );
};
