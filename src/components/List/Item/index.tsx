import { ITask } from "../../../types/task";
import style from "../List.module.scss";

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
            onClick={() => selectTask({
                task,
                time,
                selected,
                finished,
                id
            })}
            className={`${style.item} ${selected ? style.selectedIem : ''}`}
        >
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}