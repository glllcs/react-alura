import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}

export default function Item(
    { 
        task, 
        time, 
        selected, 
        finished, 
        id,
        selectTask,
    }: Props) {
    return (
        <li 
            onClick={() => !finished && selectTask({
                task,
                time,
                selected,
                finished,
                id
            })}
            className={`${style.item} ${selected && style.selectedIem} ${finished && style.finishedItem}`}
        >
            <h3>{task}</h3>
            <span>{time}</span>
            {/* conditional render */}
            {finished && <span className={style.check} aria-label="completed task"></span>}
        </li>
    )
}