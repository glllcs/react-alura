import React from "react";
import './style.scss';

function List() {
    const tasks = [{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'Javascript',
        time: '01:00:00'
    }, {
        task: 'Typescript',
        time: '01:30:00'
    }, {
        task: 'Rust',
        time: '03:00:00'
    }]
    return (
        <aside className="tasksList">
            <h2> Daily studies </h2>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index} className="item">
                        <h3>{item.task}</h3>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;