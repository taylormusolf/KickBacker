import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import React from 'react';
import RewardFormContainer from './reward_new_container'
import RewardPageItem from './reward_page_item'

class RewardPage extends React.Component{
  constructor(props){
    super(props);
  }


  componentDidMount(){
    this.props.fetchRewards();
    this.props.fetchProject(this.props.projectId)
  }

  rewardsFiltered(){
    let projectRewards = [];
    Object.values(this.props.rewards).forEach((reward)=>{
      if(reward.project_id == this.props.projectId){
        projectRewards.push(reward);
      }
    });
    return projectRewards;
  }

  rewardItems(){
    return this.rewardsFiltered().map((reward)=>(
      <RewardPageItem 
        key={reward.id} 
        reward={reward} 
        deleteReward={this.props.deleteReward}
        updateReward={this.props.updateReward}
      />
    ))
  }



  render(){
    if(!this.props.project) return null;
    
    return(
      <div className='reward-page-container'>
        <div className='reward-page-project-title'>Rewards for 
          <strong>
            <Link to={`/projects/${this.props.project.id}`}>
              {this.props.project.title}</Link>
          </strong>
        </div>
        <div className='rewards-page-list'>
          {
            this.rewardsFiltered().length > 0 ? this.rewardItems(): 
            <div className='rewards-page-none'>There are no existing rewards.  Add one below.</div>
          }
        </div>

        <RewardFormContainer 
          projectId={this.props.projectId}
          createReward={this.props.createReward}
        />
      </div>

      
    )
  }

}




export default withRouter(RewardPage);