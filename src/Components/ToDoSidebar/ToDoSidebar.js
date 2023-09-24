
import React from 'react';
import { useNavigate } from 'react-router-dom';
import star from "../../Assets/star.png";
import './ToDoSidebar.css';
import sd from "../../Assets/menu.png";
import sn from "../../Assets/sun.png";
import im from "../../Assets/star.png";
import pl from "../../Assets/plan.png";
import as from "../../Assets/assign.png";
import hm from "../../Assets/home.png";
import plu from "../../Assets/plus.png";
import msg from "../../Assets/message.png";
import plan from "../../Assets/plan.png";
import grp from "../../Assets/groupt.png";
import attach from "../../Assets/attach.png";
import tic from "../../Assets/tick.png";

function ToDoSidebar() {
  const navigate = useNavigate();
  const [taskCount, setTaskCount] = React.useState(0);

  const handleNavigate = (str) => {
    navigate(str);
  };

  const handleTaskAdded = () => {
    setTaskCount(taskCount + 1);
  };

  return (
    <div>
      <div className="ToDoside_head">
        <img src={sd} alt="img" className='i1' />
        <p className='p1' onClick={() => handleNavigate('/gg')}>
          <img src={sn} alt="img" className='i2' />My day
        </p>
        <p className='p1' onClick={() => handleNavigate('/Imp')}>
          <img src={im} alt="img" className='i2' />Important ({taskCount})
        </p>
        <p className='p1' onClick={()=>handleNavigate('/plan')}>
          <img src={pl} alt="img" className='i2' />Planned
        </p>
        <p className='p1'>
          <img src={as} alt="img" className='i2' />Assigned to me
        </p>
        <p className='p1'>
          <img src={hm} alt="img" className='i2' />Tasks
        </p>
      </div>

      <div className="side_mid">
        <img src={plu} alt="img" />
        <p className='new_list'>New list</p>
      </div>
      <div className="middle_gap"></div>
      <div className="side_end">
        <img src={msg} alt="img" className='e1' />
        <img src={plan} alt="img" className='e1' />
        <img src={grp} alt="img" className='e1' />
        <img src={attach} alt="img" className='e1' />
        <img src={tic} alt="img" className='e1' />
      </div>
    </div>
  );
}

export default ToDoSidebar;
