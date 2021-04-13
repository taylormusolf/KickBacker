import React from 'react';

const ProjectReward= props => {
  const{reward} = props
  return(
    <ul className='reward-container'>
      <li className='reward-cost'>Pledge US$ {reward.cost} or more</li>
      <li className='reward-title'>{reward.title}</li>
      <li className='reward-desc'>{reward.description}</li>
      <label>Pledge amount
        $ <input type="text"/>
      </label>
      <input className='hidden' type="submit" value='Continue'/>
    </ul>
   
  )  
};

export default ProjectReward;