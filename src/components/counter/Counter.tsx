import React, { useEffect, useState } from "react";
import { Button } from "../button/Button";
import st from './Counter.module.css';
import { NavLink } from "react-router-dom";

export const Counter: React.FC<{ minValueProps: number; maxValueProps: number }> = ({
                                                                                        minValueProps,
                                                                                        maxValueProps,
                                                                                    }) => {
    const defaultValue = 1;
    const [count, setCount] = useState<number>(minValueProps );

    const increment = () => {
        if (count < maxValueProps) {
            const newValue = count + defaultValue;
            setCount(newValue);
            localStorage.setItem("counter value", JSON.stringify(newValue));
        }
    };

    useEffect(() => {
        const storedValue = localStorage.getItem("counter value");
        if (storedValue) {
            setCount(JSON.parse(storedValue));
        }
    }, []);

    const reset = () => {
        setCount(minValueProps);
    };




    useEffect(() => {
        localStorage.setItem('counter value', JSON.stringify(count))
    }, [count]);

    return (
        <div className={st.counter}>
            <div className={st.table}>
                <h1 className={count === maxValueProps ? st.red : ""}>{count}</h1>
            </div>
            <Button
                name="inc"
                onClick={increment}
                disabled={count === maxValueProps}
            />
            <Button
                name="reset"
                onClick={reset}
                disabled={count === minValueProps}
            />
            <NavLink to='/set'><Button name='SET' onClick={() => { }} /></NavLink>
        </div>
    );
};
