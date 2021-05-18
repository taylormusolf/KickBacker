import React from "react";

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
          </section>
        )
      } else {
        return(
          <div>No Results</div>
        )
      }
      
    }

  }
  render(){
    return(
      <div className='search-page-container'>
        <section className='search-query-container'>
          <p className='search-query'>Show me <strong>{this.props.query}</strong> projects</p>
        </section>
        {this.results()}
      </div>
    
    )
  }
  
}

export default SearchPage;