import React from 'react';


const RewardPageItem = props => {
  return(
    <li className='reward-page-item'>
      <ul className='reward-page-item-details'>
        <li className='reward-page-item-title'><strong>Reward Title:</strong> {props.reward.title}</li>
        <li className='reward-page-item-desc'><strong>Description:</strong> {props.reward.description}</li>
        <li className='reward-page-item-cost'><strong>Cost:</strong> ${props.reward.cost}.00</li>
        {/* <li className='reward-page-item-edit'>Edit</li> */}
        <button className='reward-page-item-delete' onClick={()=>props.deleteReward(props.reward.id)}>Delete</button>
      </ul>
      
    </li>
  )  
};

export default RewardPageItem;