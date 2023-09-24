import React, { useState, useEffect } from 'react';
import './Myday.css';
import sun from "../../Assets/sun.png";
import dot from "../../Assets/dots.png";
import sort from "../../Assets/sort.png";
import grp from "../../Assets/vector.png";
import sug from "../../Assets/bulb.png";
import cal from "../../Assets/plan.png";
import bell from "../../Assets/bell.png";
import rep from "../../Assets/rename.png";
import star from "../../Assets/star.png";

function Myday() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [tasks, setTasks] = useState([]); 
  const [taskText, setTaskText] = useState(''); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
  const formattedDateTime = currentDateTime.toLocaleString(undefined, options);

  
  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  return (
    <div className='day_m'>
      <div className='main'>
        <div className='myday_head'>
          <div className='dayr'>
            <img src={sun} alt='img' className='sun' />
            <h4>My Day </h4>
            <img src={dot} alt='img' className='sun' />
          </div>

          <div className='date'>{formattedDateTime}</div>
        </div>

        <div className='myday_end'>
          <div className='sort_i'>
            <img src={sort} alt='img' className='t1' />
            <p>Sort</p>
          </div>
          <div className='sort_i'>
            <img src={grp} alt='img' className='t1' />
            <p>Group</p>
          </div>
          <div className='sort_i'>
            <img src={sug} alt='img' className='t1' />
            <p>Suggestions</p>
          </div>
        </div>
      </div>

      <div className='task_toolbar_content'>
        <div className='up_content'>
          <input
            type='radio'
            className='radius'
            onChange={(e) => setTaskText(e.target.value)}
            value={taskText}
          />
          <input
            type='text'
            placeholder='Add a Task'
            className='textbox'
            onChange={(e) => setTaskText(e.target.value)}
            value={taskText}
          />
        </div>
        <div className='down_content'>
          <div className='img_con'>
            <img src={cal} alt='img' className='d1' />
            <img src={bell} alt='img' className='d2' />
            <img src={rep} alt='img' className='d1' />
          </div>

          <div className='button'>
            <button onClick={handleAddTask} className='button1'>Add</button>
          </div>
        </div>
      </div>

      <div className='task_list'>
        <h3>Tasks:</h3>
      </div>
      <div className="task_event">
        {tasks.map((task, index) => (
          <div key={index} className='task_container up_content'>
            <div className="sep_con">
            <input type='radio' className='radius' />
            <span>{task}</span>
            </div>
            <img src={star} alt="img"  className='star1'/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Myday;
