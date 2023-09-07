import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss"
import { timeToSeconds } from "../../common/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
    selectedTask: ITask | undefined
}

export default function Stopwatch({ selectedTask }: Props) {
    const [time, setTime] = useState<number>();

    // set time only when selectedTask changes
    useEffect(() => {
        if (selectedTask?.time) {
            setTime(timeToSeconds(selectedTask.time))
        }
    }, [selectedTask])

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Choose a card and start stopwatch</p>
            <div className={style.watchWrapper}>
                <Watch time={time}/>
            </div>
            <div>
                <Button>Start</Button>
            </div>
        </div>
    )
}