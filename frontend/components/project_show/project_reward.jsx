import React from 'react';

const ProjectReward= props => {
  const{reward} = props
  return(
    <ul className='reward-container'>
      <li className='reward-cost'>Pledge US$ {reward.cost} or more</li>
      <li className='reward-title'>{reward.title}</li>
      <li className='reward-desc'>{reward.description}</li>
      <form className='reward-form'>
        <label>Pledge amount
        <div className='show-support-input-container'>
          <li className='show-support-dollar'> <p>$</p></li>
          <input className='show-support-input' type="text"/>
        </div>
          
        </label>
        <input className='reward-support-submit' type="submit" value='Continue'/>
      </form>
      
    </ul>
   
  )  
};

export default ProjectReward;