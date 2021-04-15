import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchProjects} from '../../actions/project_actions';



const mapStateToProps = state => {
  let projects = Object.values(state.entities.projects)
  let array = [];

  //set featured project based on hour of the day
  // let d = new Date();
  // let cof = d.getHours()/30
  // let index = Math.floor(cof *(projects.length))
  
  
  //random featured project
  // let index = Math.floor(Math.random()*(projects.length))

  //not random
  let index = 0;
  
  //random 9 projects
  // if(projects.length){
  //   while(array.length < 9){
  //     let rand = Math.floor(Math.random()*(projects.length))
  //     if (rand !== index && !array.includes(rand)){
  //       array.push(rand);
  //     }
  //   };
  // }

  //not random
  if(projects.length){
    let i = 1;
    while(array.length < 9){
      array.push(i);
      i += 1;
    };
  }

  //set 9 projects for hour
  // if(projects.length){
  //   let rand = Math.floor(Math.random()*(projects.length))
  //   while(array.length < 9){
  //     if (rand !== index && !array.includes(rand)){
  //       array.push(rand);
  //       rand = Math.floor(rand *(projects.length))
  //     }
  //   };
  // }
  // debugger
  return{
      projects: projects,
      project: projects[index],
      array: array,
      type: 'main'
    }
  
}

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);