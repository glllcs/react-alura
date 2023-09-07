import { useState } from "react";
import Item from "./Item";
import style from './List.module.scss';

function List() {
    const [tasks, setTasks] = useState([{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'Django',
        time: '01:00:00'
    }, {
        task: 'Machine learning',
        time: '01:00:00'
    }, {
        task: 'Rust',
        time: '01:00:00'
    }, {
        task: 'Data Science',
        time: '01:00:00'
    }]);
    return (
        <aside className={style.tasksList}>
            <h2 onClick={() => {
                setTasks([...tasks, {task: 'Cyber Security', time:'02:00:00'}])
            }}> Daily studies </h2>
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