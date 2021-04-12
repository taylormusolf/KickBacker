import React from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectFeaturedItem from './project_featured_item'
import ProjectPages from './project_featured_item'

class ProjectIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {currentPage: 1};
    this.selectPage = this.selectPage.bind(this);
  }
  componentDidMount() {
    this.props.fetchProjects();
  }

  categories(){
    return(
      <div className='category-links-container'>
          <ul className='category-links'>
          <li><a href="">Arts</a></li>
          <li><a href="">Comics & Illustration</a></li>
          <li><a href="">Design & Tech</a></li>
          <li><a href="">Film</a></li>
          <li><a href="">Food & Craft</a></li>
          <li><a href="">Games</a></li>
          <li><a href="">Music</a></li>
          <li><a href="">Publishing</a></li>
        </ul>
      </div>
      
    )
  }

  selectPage(num) {
    this.setState({currentPage: num});
  }

  render() {
    const { projects, project, array } = this.props;
    if (!projects || !project) return null;
      return (
        <div >
          {this.categories()}
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
                {array.map(i => (
                  <ProjectIndexItem
                    project={this.props.projects[i]}
                    key={[i + 1]}
                  />
                  ))}
               </div>
               {/* <div>
                 <ProjectPages
                    selectedPage={this.state.selectedPage}
                    onPageChosen={this.selectPage}
                  />
               </div> */}

              </ul>
            </div>
            
             
          </div>
          
        </div>
      );
  }
}

export default ProjectIndex;

