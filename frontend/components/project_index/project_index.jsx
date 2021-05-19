import React from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectFeaturedItem from './project_featured_item';
import ProjectPages from './project_pages';
import CategoryNavContainer from '../category/category_nav_container';

class ProjectIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {currentPage: 1};
    this.selectPage = this.selectPage.bind(this);
  }
  componentDidMount() {
    this.props.fetchProjects();
  }
  selectPage(num) {
    this.setState({currentPage: num});
  }

  render() {
    const { projects, project, array } = this.props;
    const filtered = (array) =>{
      if(this.state.currentPage === 1){
        return array.slice(0, 3)
      } else if (this.state.currentPage === 2){
        return array.slice(3, 6)
      } else {
        return array.slice(6)
      }
    }
    
      
    if (!projects || !project) return null;
      return (
        <div >
          <div className='category-links-container-top'>
            <CategoryNavContainer/>
          </div>
          <div className='projects-header-container'>
            <div className='projects-header'>
              <div id='featured-project'>
                <h1>FEATURED PROJECT</h1>
                <ProjectFeaturedItem
                  project={this.props.project}
                />
              </div>
              <ul className='projects-list-container'>
               <h1>RECOMMENDED FOR YOU</h1>
               <div>
                {filtered(array).map(i => (
                  <ProjectIndexItem
                    project={this.props.projects[i]}
                    key={[i + 1]}
                  />
                  ))}
               </div>
               <div className='page-num-container'>
                 <ProjectPages
                    selectedPage={this.state.currentPage}
                    onPageChosen={this.selectPage}
                  />
               </div>

              </ul>
            </div>
            
             
          </div>
          
        </div>
      );
  }
}

export default ProjectIndex;

