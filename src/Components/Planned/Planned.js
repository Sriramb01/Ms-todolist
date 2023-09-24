import React, { useState } from 'react';
import './Planned.css';
import planing from "../../Assets/plan.png";
import pladot from "../../Assets/dots.png";
import plan2p from "../../Assets/plan.png";
import not from '../../Assets/bell.png';
import repe from "../../Assets/rename.png";

function Planned() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className='plannhead1'>
      <div className="planhead">
        <img src={planing} alt="img" className='plan1'/>
        <h4>Planned</h4>
        <img src={pladot} alt="img" className='plan2'/>
      </div>
      <div className="container">
        <div className="up_container_plan">
          <input
            type="radio"
            checked={false} 
          />
          <input
            type="text"
            placeholder='Add a task'
            className='plantext'
            value={task}
            onChange={handleTaskChange}
          />
          
        </div>
        <div className="down_container_plan">
          <div className="plan_images">
            <img src={plan2p} alt="img" className='pn1'/>
            <img src={not} alt="img" className='pn1'/>
            <img src={repe} alt="img" className='pn1'/>
          </div>
          <div className="planbutton">
            
            <button onClick={handleAddTask} className='planbn'>Add</button>
          </div>
                 </div>
      </div>
      <p>Tasks: {tasks.join(', ')}</p>

    </div>
  )
}

export default Planned;
