import React, { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

const App = () => {
const [tasks, setTasks] = useState(
[
  {
    id: 1,
    text: '리액트 공부하기',
    day: '2021. 12. 30 pm 1:30',
    reminder: true,
  },
  {
    id: 2,
    text: '회사 업무파악',
    day: '2021. 12. 30 pm 3:00',
    reminder: true,
  },
  {
    id: 3,
    text: '내일의 발전 vue.js 기존코드 파악',
    day: '2021. 12. 30 pm 4:00',
    reminder: true,
  },
  {
    id: 4,
    text: '개발공부하기',
    day: '2021. 12. 30 pm 5:00',
    reminder: false,
  }
]
);

//add task
const addTask = (task) => {
  console.log(task)
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//delete task
const deleteTask = (id) => {
  // console.log('delete',id);
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  // console.log(id)
  setTasks(
    tasks.map((task) => task.id === id ? 
    { ...task, reminder: !task.reminder} : task
    )
  )
}
    return (
      <div className="container">
        <Header />
        <AddTask onAdd={addTask}/>
        {tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
        : (
          'no tasks to show'
        )}
      </div>
    )
}
export default App;
