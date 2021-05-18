import React from "react";
import ProjectSearchItem from './project_search_item'

class SearchPage extends React.Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.fetchProjects();
  }
  results(){
    const{projects} = this.props;
    const projectResults = [];
    if(projects){
      Object.values(projects).forEach((project) =>{
        if(project.title.toLowerCase().includes(this.props.query.toLowerCase())
        || project.category.name.toLowerCase().includes(this.props.query.toLowerCase())
        ){
          projectResults.push(project);
        }
      });
      if(projectResults.length > 0){
        return(
          <section className='search-results'>
            <h1>Explore <strong>{projectResults.length} projects</strong></h1>
            <div className='search-projects-container'>
              {projectResults.map(project => (
                <ProjectSearchItem
                  project={project}
                  key={[project.id]}
                />
              ))}
            </div>
          </section>
        )
      } else {
        return(
          <div>
            <div className='search-no-results'>
              <h1><i className="fas fa-exclamation-circle"></i> We can't find projects that match your search</h1>
              <h2>Check out a collection of popular and recommended options below</h2>
            </div>
            <section className='search-results'>
              <h1>Explore <strong>{Object.values(projects).length} projects</strong></h1>
              <div className='search-projects-container'>
                {Object.values(projects).map(project => (
                  <ProjectSearchItem
                    project={project}
                    key={[project.id]}
                  />
                ))}
            </div>
            </section>
          </div>
          
          
        )
      }
      
    }

  }
  render(){
    return(
      <div className='search-page-container'>
        <section className='search-query-container'>
          <p className='search-query'>
            Show me 
            <strong className='search-word'>{this.props.query}</strong> 
            projects
          </p>
        </section>
        <div className='search-results-container'>
          {this.results()}
        </div>
        
      </div>
    
    )
  }
  
}

export default SearchPage;