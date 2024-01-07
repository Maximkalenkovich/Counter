import React, { useState } from 'react';
import './App.css';
import { Counter } from "./components/counter/Counter";
import { SettingTable } from "./components/setting/settingTable/SettingTable";


export type SettingTableType = {
    minValueProps: number
    maxValueProps: number
    onSettingsChange: (newMin: number, newMax: number) => void;
}

function App() {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    const handleSettingsChange = (newMin: number, newMax: number) => {
        setMinValue(newMin);
        setMaxValue(newMax);
    };

    return (
        <div className="App">
            <SettingTable minValueProps={minValue} maxValueProps={maxValue} onSettingsChange={handleSettingsChange} />
            <Counter minValueProps={minValue} maxValueProps={maxValue}  />
        </div>
    );
}

export default App;
