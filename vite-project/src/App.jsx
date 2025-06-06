import React, { useState } from 'react';
import './App.css';
import Task from './task'; 
function App() {
  const [tasks, setTasks] = useState(['Estudar React', 'Fazer exercício', 'Caminhar']);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask(''); 
        }
  };

  return (
    <div className="App">
      <h1>Minha Lista de Tarefas</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma nova tarefa..."
        />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;