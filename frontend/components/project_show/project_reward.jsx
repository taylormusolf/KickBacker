import React from 'react';

const ProjectReward= props => {
  const{reward} = props
  return(
    <ul className='reward-container'>
      <li className='reward-cost'>Pledge US$ {reward.cost} or more</li>
      <li className='reward-title'>{reward.title}</li>
      <li className='reward-desc'>{reward.description}</li>
      <form className='reward-form' onSubmit={props.handleReward}>
        <label>Pledge amount
        <div className='show-support-input-container'>
          <li className='show-support-dollar'> <p>$</p></li>
          <input className='show-support-input' type="text" onChange={props.update('amount_pledged')}/>
        </div>
          
        </label>
        <input className='reward-support-submit' type="submit" value='Continue'/>
      </form>
      
    </ul>
   
  )  
};

export default ProjectReward;


// <ProjectReward
// reward={reward}
// handleReward={this.handleReward}
// update={this.update}
// key={i}
// />