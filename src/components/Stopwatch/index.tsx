import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss"
import { timeToSeconds } from "../../common/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
    selectedTask: ITask | undefined
    finishTask: () => void
}

export default function Stopwatch({ selectedTask, finishTask }: Props) {
    const [time, setTime] = useState<number>();

    // set time only when selectedTask changes
    useEffect(() => {
        if (selectedTask?.time) {
            setTime(timeToSeconds(selectedTask.time))
        }
        finishTask();
    }, [selectedTask])

    function countdown(counter: number = 0) {
        setTimeout(() => {
            if(counter > 0) {
                setTime(counter - 1);
                return countdown(counter - 1);
            }
        }, 1000);
    }

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Choose a card and start stopwatch</p>
            <div className={style.watchWrapper}>
                <Watch time={time}/>
            </div>
            <div>
                <Button onClick={() => countdown(time)}>
                    Start
                </Button>
            </div>
        </div>
    )
}