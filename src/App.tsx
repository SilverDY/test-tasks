import React, {useState} from 'react';
import './App.css';
import {FirstTask} from "./tasks/FirstTask";
import {SecondTask} from "./tasks/SecondTask";
import {ThirdTask} from "./tasks/ThirdTask";
import {FourthTask} from "./tasks/FourthTask";

function App() {
  const [currentTask, setCurrentTask] = useState(1);

  const renderTask = () => {
    switch (currentTask) {
      case 1:
        return <FirstTask />
      case 2:
        return <SecondTask />
      case 3:
        return <ThirdTask />
      case 4:
        return <FourthTask />
      default:
        return <FirstTask />
    }
  }
  return (
    <div className="App">
      <ul className="App-list">
        <li className="App-list-item" onClick={() => setCurrentTask(1)}>Task 1</li>
        <li className="App-list-item" onClick={() => setCurrentTask(2)}>Task 2</li>
        <li className="App-list-item" onClick={() => setCurrentTask(3)}>Task 3</li>
        <li className="App-list-item" onClick={() => setCurrentTask(4)}>Task 4 (optional)</li>
      </ul>

      <div className="App-content">
        <div>Task №{currentTask}</div>
        {renderTask()}
      </div>
    </div>
  );
}

export default App;
