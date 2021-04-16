import React from 'react';
import { Link } from 'react-router-dom';
import Headers from './project_headers'
// import ProjectReward from './project_reward'

class ProjectShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedPane: 0};
    this.backing = this.props.backing;
    this.backing.project_id = this.props.match.params.projectId;
    this.selectTab = this.selectTab.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSupport = this.handleSupport.bind(this);
    this.handleReward = this.handleReward.bind(this);
  }
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  selectTab(num) {
    this.setState({selectedPane: num});
  }

  handleDelete(e) {
    this.props.deleteProject(this.props.project.id)
        .then(action => {
            return this.props.history.push(`/`)
        }) 
  }

  handleSupport(e){
    e.preventDefault();
    if (this.props.session !== this.props.project.creator.id){
      this.props.createBacking(this.backing)
        .then((action) => window.location.reload());
    }
  }

  handleRewardInput(rewardId=null){
    return e=> {
      this.backing.reward_id = rewardId
    }
  }

  handleReward(e){
    e.preventDefault();
    if (!this.props.project || !this.props.session) return null;
    if (this.props.session !== this.props.project.creator.id){
      this.props.createBacking(this.backing)
        .then((action) => window.location.reload());
    }
  }

  handleScrollRewards(e){
    e.preventDefault();
    const ele = document.getElementById('rewards')
    ele.scrollIntoView({
        behavior: "smooth"
      })
  }

  update(field) {
    return e => this.backing[field] = e.target.value;
  }

  selectedContent(){
    if(this.state.selectedPane === 0){
      return(
        <article>
          <h1>Story:</h1>
          {this.props.project.campaign}
        </article>
      )
    } else if(this.state.selectedPane === 1){
        if(this.props.project.faq === ''){
          return(
            <article>
              <h1>Frequently Asked Questions:</h1>
              Looks like there aren't any frequently asked questions yet. Ask the project creator directly.
            </article>
          )
        } else {
          return(
            <article>
              <h1>Frequently Asked Questions:</h1>
              {this.props.project.faq}
            </article>
          )
        }
    } else {
        if(this.props.project.updates === ''){
          return(
            <article>
              <h1>Updates:</h1>
              Looks like there aren't any updates yet.
            </article>
          )
        } else {
          return(
            <article>
              <h1>Updates:</h1>
              {this.props.project.updates}
            </article>
          )
        }
    }
  }

  daysLeft(endDate){
    const today = new Date();
    const endingDate = new Date(endDate);
     if(today > endingDate){
      return 0;
    }
    const diffTime = Math.abs(endingDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
   
    return diffDays;
  }

  signedIn(){
    return this.props.session !== null;
  }

  isCreator(){
    return this.props.session === this.props.project.creator.id
  }

  projectOver(){
    return this.daysLeft(this.props.project) === 0;
  }

  isBacker(){
    if(this.props.project.backings){
    const backings = Object.values(this.props.project.backings);
    let backers = [];
    
    backings.forEach((backing)=>{
      backers.push(backing.backer_id);
    })
    return backers.includes(this.props.session)
    }else{
      return false
    }
  }

  creatorControls(){
    
    if(this.isCreator()){
      return (
        <section className='show-edit-links'>
          <p>Creator Controls:</p>
          <span  className='backed-project-edit'><div id='show-edit'><Link to={`/projects/${this.props.project.id}/edit`}>Edit </Link></div></span>
          <span><button className='backed-project-delete' onClick={this.handleDelete}>Delete</button></span>
        </section>
      )
        
    }else {
      return (
        null
      )
    
    }
  }

  backerSubmitEligible(){
    if(this.signedIn() && !this.isCreator() && !this.projectOver() && !this.isBacker()){
      return(
        <input className='reward-support-submit' type="submit" value='Continue'/>
      )
    } else {
      return(
        <div className='reward-support-submit-disabled'>Continue</div>
      )
    }
    
  }

  backerMessage(){
    if(this.isBacker()){
      return (<div>You backed this project!</div>)
    }
  }

  rewardErrorMessage(){
    if(this.isCreator()){
      return (
        <p className='reward-error'>You cannot back your own project</p>
      )
    } else if(this.isBacker()){
      return (
        <p className='reward-error'>You have already backed this project</p>
      )
    } else if(!this.signedIn()){
      return (
        <p className='reward-error'>You must be signed in to back a project</p>
      )
    }  
  }

  // projectEndedMessage(){
  //   if(this.projectOver()){
  //     return (
  //       <p>Project has ended.</p>
  //     )
  //   }
  // }

  checkNullBeforeLength(obj){
    if (!obj){
      return null
    } else {
      return Object.values(obj).length
    }
  }


  

  
  
  render() {
    const {project} = this.props;
    const pane = this.props.panes[this.state.selectedPane];
    if (!project) return null;
    const funding = (project) =>{
      let sum = fundingTotal(project);
      let num = Math.floor((sum)/(this.props.project.funding_goal)*100)
      if (num > 100){
        num = 100
      }
      return num.toString() + '%'
    }
    const fundingTotal = (project) =>{
      let sum = 0;
      if(project.backings){
        Object.values(project.backings).forEach((backing) =>{
          sum += backing.amount_pledged
        })
      }
      return sum;
    }
    const backers = (project)=>{
      if(project.backings){
        let num = Object.values(project.backings).length
      return num
      } else{
        return 0;
      }
    }
    const deadline = () =>{
      let d = new Date(project.end_date.slice(0,10));
      let date = d.toString();
      return date;
    }

    const rewards = () => {
      if(!project.rewards) return null;
      Object.values(project.rewards).map((reward, i)=> (
        <ul className='reward-container' key={i}>
          
          <li className='reward-cost'>Pledge US$ {reward.cost} or more</li>
          <li className='reward-title'>{reward.title}</li>
          <li className='reward-desc'>{reward.description}</li>
          <form className='reward-form' onSubmit={this.handleReward}>
            <label>Pledge amount
            <div className='show-support-input-container'>
              <li className='show-support-dollar'> <p>$</p></li>
              <input className='show-support-input' type="number" min={reward.cost} placeholder={reward.cost} onChange={this.update('amount_pledged')} onInput={this.handleRewardInput(reward.id)}/>
            </div>
              
            </label>
            {this.rewardErrorMessage()}
            {this.backerSubmitEligible()}
          </form>
          
        </ul>
      ))
    }

    return (
      <div className='show-page'>
        <div className='show-backer-message'>{this.backerMessage()}</div>
        <div className='show-backer-creator-controls'>{this.creatorControls()}</div>
        <div className='show-header'>
          
          <div className='show-title'>
            <h1>{project.title}</h1>
            <h2>{project.description}</h2>
          </div>
          <section className='show-top-main'>
            <div className='show-img-container'>
              <img src={project.photo_url}/>
              <ul className='under-photo-items'>
                <li><i className="far fa-compass"></i>  {project.category.name}</li>
                <li><i className="fas fa-map-marker-alt"></i> {project.location}</li>
              </ul>
            </div>
                    
            <ul className='show-side-bar'>
              <ul className='show-side-subbar'>
                <div className='show-subbar-sub'>
                  <li className='show-list-funding' style={{width: funding(project)}}><h1></h1></li>
                  <li className='show-pledged-total'>${fundingTotal(project)}</li>
                  <li className='show-goal-total'>pledged of ${project.funding_goal} goal</li>
                </div>
                <div className='show-subbar-sub'>
                  <li className='show-backer-total'>{backers(project)}</li>
                  <li className='show-text-total'>backers</li>
                </div>
                <div className='show-subbar-sub'>
                  <li className='show-days-total'>{this.daysLeft(project.end_date)}</li>
                <li className='show-text-total'>days to go</li>
                </div>
                
              </ul>
              
              <button onClick={this.handleScrollRewards} className='show-back-button'>Back this project</button>
              <li className='small-text under-back-button'>All or nothing. This project will only be funded if it reaches its goal by {deadline()} </li>
            </ul>
          </section>
        </div>
        <div className='show-main-container'>
        <div className='show-main'>
          <div className='show-tabs'>
            <Headers
              selectedPane={this.state.selectedPane}
              onTabChosen={this.selectTab}
              panes={this.props.panes}
              />
          </div>
          <div className='show-section-container'>
            <section className='show-section'>
              <div className='show-tab-content'>
                {this.selectedContent()}
              </div>
              <ul className='show-rewards-side-bar'>
                <ul className='show-rewards-creator'>
                  <li className='show-rewards-creator-name'>{project.creator.username}</li>
                  <li className='show-rewards-creator-bio'>{this.checkNullBeforeLength(project.creator.projects)} Created / {this.checkNullBeforeLength(project.creator.backings)} Backed</li>
                  <li className='show-rewards-creator-bio'>{project.creator.bio}</li>
                </ul>
                <ul>
                  <h1 id='rewards' className='show-support'>Support</h1>
                  <form className='show-support-form' onSubmit={this.handleSupport}>
                    
                    <h2 className='show-support-1'>Pledge without a reward</h2>
                    <div className='show-support-input-container'>
                      <li className='show-support-dollar'> <p>$</p></li>
                      <input className='show-support-input' type="number" min='5' placeholder='Pledge any amount' onChange={this.update('amount_pledged')}/>
                    </div>
                    <div className='show-line-container'>
                      <p className='show-line-1'>Back it because you believe in it.</p>
                      <p className='show-line-2'>Support the project for no reward, just because it speaks to you</p>
                    </div>
                    {this.rewardErrorMessage()}
                    {this.backerSubmitEligible()}
                  </form>
                  
                </ul>
                <ul>
                  {rewards()}
                </ul>
              </ul>
            </section>
          </div>
          
          
        </div>
        </div>
        
      </div>
      );
    
  }
}

export default ProjectShow;

