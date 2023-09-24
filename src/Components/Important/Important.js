import React, { useState } from 'react';
import star from "../../Assets/star.png";
import './Important.css';
import dot from "../../Assets/dots.png";
import sort from "../../Assets/sort.png";
import cal from "../../Assets/plan.png";
import bell from "../../Assets/bell.png";
import rep from "../../Assets/rename.png";
import sta from "../../Assets/star1.png";

function Important() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className='main_imp'>
      <div className="imp_head">
        <div className="imp_star">
          <img src={star} alt="img" className='star2'/>
          <p>Important</p>
          <img src={dot} alt="img" className='dot2' />
        </div>
        <div className="imp_sort">
          <img src={sort} alt="img" className='sort3' />
          <p>Sort</p>
        </div>
      </div>
      
      <div className="imp_page_down">
        <div className="down1">
          <input
            type="radio"
            className='radius'
          />
          <input
            type="text"
            name="textbox"
            className="radius2"
            placeholder='Add a Task'
            value={newTask}
            onChange={handleTaskInputChange}
          />
        </div>
        <div className="down2">
          <div className="img_down">
            <img src={cal} alt='img' className='d1' />
            <img src={bell} alt='img' className='d2' />
            <img src={rep} alt='img' className='d3' />
          </div>
          <div className="starblue">
            <button className='Add' onClick={handleAddTask}>Add</button>
          </div>
        </div>
      </div>
      
      
      <div className="task-list">
        <p>Tasks:</p>
        {tasks.map((task, index) => (
          <div key={index} className='Input_cont'>{task}
          <div className="fill_star">
           <img src={sta} alt="img" className='Sta1'/>
            </div>
            </div>
        
        

        ))}
      </div>
    </div>
  );
}

export default Important;