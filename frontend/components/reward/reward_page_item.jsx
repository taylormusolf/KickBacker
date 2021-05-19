import React from 'react';


const RewardPageItem = props => {
  return(
    <li className='reward-page-item'>
      <ul>
        <li className='reward-page-item-title'>
          {props.reward.title}
        </li>
        <li className='reward-page-item-desc'>{props.reward.description}</li>
        <li className='reward-page-item-cost'>{props.reward.cost}</li>
        <li className='reward-page-item-edit'>Edit</li>
        <li className='reward-page-item-delete'>Delete</li>
      </ul>
      
    </li>
  )  
};

export default RewardPageItem;