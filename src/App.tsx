import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {SettingTable} from "./components/setting/settingTable/SettingTable";
import {Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";


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
            <Routes>
                     <Route path={'/'} element={<Navigate to={'/counter'} />}></Route>
                <Route path="/set" element={<SettingTable minValueProps={minValue} maxValueProps={maxValue}
                                                         onSettingsChange={handleSettingsChange}/>}/>

                <Route path="/counter" element={<Counter minValueProps={minValue} maxValueProps={maxValue}/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>


            </Routes>

        </div>
    );
}

export default App;
