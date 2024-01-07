import React, {useState} from "react";
import {Button} from "../button/Button";
import st from './Counter.module.css'



export const Counter: React.FC<{ minValueProps: number; maxValueProps: number }> = ({
                                                                                        minValueProps,
                                                                                        maxValueProps,
                                                                                    }) => {
    const defaultValue = 1;
    const [count, setCount] = useState(minValueProps);

    const increment = () => {
        if (count < maxValueProps) {
            setCount(count + defaultValue);
        }
    };

    const reset = () => {
        setCount(minValueProps);
    };

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
        </div>
    );
};
