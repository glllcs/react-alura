import Item from "./Item";
import style from './List.module.scss';

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