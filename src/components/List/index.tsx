import { useState } from "react";
import { ITask } from "../../types/task";
import Item from "./Item";
import style from './List.module.scss';

interface Props {
    tasks: ITask[]
    selectTask: (selectedTask: ITask) => void
}

function List({ tasks, selectTask }: Props) {
    return (
        <aside className={style.tasksList}>
            <h2> Daily studies </h2>
            <ul>
                {tasks.map((item) => (
                    <Item
                        selectTask={selectTask}
                        key={item.id}
                        // task={item.task}
                        // time={item.time}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;