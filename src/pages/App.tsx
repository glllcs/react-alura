import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { ITask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelectedTask(selectedTask);
    setTasks(currentTasks => currentTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id
    })));
  }

  function finishTask() {
    if (selectedTask) {
      setSelectedTask(undefined);
      setTasks(currentTasks => currentTasks.map(task => {
        if(task.id == selectedTask.id) {
            return {
              ...task,
              selected: false,
              finished: true
            }
        }
        return task;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks} 
        selectTask={selectTask}
      />
      <Stopwatch 
        selectedTask={selectedTask}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
