import {Button} from "../../button/Button";
import s from './SettingTable.module.css'
import {ChangeEvent, useState} from "react";
import {SettingTableType} from "../../../App";
import {NavLink} from "react-router-dom";

export const SettingTable: React.FC<SettingTableType> = ({ minValueProps, maxValueProps, onSettingsChange }) => {
    const [min, setMin] = useState(minValueProps);
    const [max, setMax] = useState(maxValueProps);
    const [isError, setIsError] = useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;

        let parsedValue = parseInt(value);

        setMin((prevMin) => (name === 'min' ? parsedValue : prevMin));
        setMax((prevMax) => (name === 'max' ? parsedValue : prevMax));
        setIsError(parsedValue < 0 || (name === 'min' && parsedValue === max) || (name === 'max' && parsedValue === min) );
    };


    const handleApplySettings = () => {
        onSettingsChange(min, max);
    };

    return (
        <div className={'setting'}>
            <div className={s.table}>
                <label>
                    Max Value:
                    <input type="number" className={isError ? s.inputError : ''} name="max" value={max} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Start Value:
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
            <Button name={'set'} onClick={handleApplySettings} disabled={min < 0 || max < 1 || max <= min} />
            <NavLink to='/counter'><Button name={'counter'} onClick={()=>{}}/></NavLink>
        </div>
    );
};
