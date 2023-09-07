import { useState } from "react";
import { ITask } from "../../types/task";
import Item from "./Item";
import style from './List.module.scss';

function List({ tasks }: { tasks: ITask[]}) {
    return (
        <aside className={style.tasksList}>
            <h2> Daily studies </h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        key={index}
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