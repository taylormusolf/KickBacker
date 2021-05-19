import React from 'react';
import ProjectIndexItem from '../project_index/project_index_item';
import ProjectFeaturedItem from '../project_index/project_featured_item'
import ProjectPages from '../project_index/project_pages'
import CategoryNavContainer from './category_nav_container'

class CategoryPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {currentPage: 1};
    this.selectPage = this.selectPage.bind(this);
  }
  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchCategory(this.props.match.params.categoryId);
  }


  selectPage(num) {
    this.setState({currentPage: num});
  }

  render() {
    const { projects, category} = this.props;
    if (!category) return null;
    const array = Object.values(projects);
    
    const filtered = (array) =>{
      let filteredArray = [];
      array.forEach((project) =>{
        if(project.category.name === category.name){
          filteredArray.push(project);
        }
      });
      return filteredArray;
    }
    
    const categoryFeatured = filtered(array)[0];
    const categoryProjects = filtered(array).slice(1);
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const selected = (array) =>{
      if(this.state.currentPage === 1){
        return array.slice(0, 3)
      } else if (this.state.currentPage === 2){
        return array.slice(3, 6)
      } else {
        return array.slice(6, 9)
      }
    }
    
      return (
        <div className='category-page-container'>
          <div className='category-links-container-top'>
            <CategoryNavContainer/>
          </div>
          <div className='category-header'>
            <h1>{category.name}</h1>
            <h2>{category.description}</h2>
          </div>
          <div className='projects-header-container'>
            <div className='projects-header'>
              <div id='featured-project'>
                <h1>FEATURED PROJECT</h1>
                <ProjectFeaturedItem
                  project={categoryFeatured}
                />
              </div>
              <ul className='projects-list-container'>
               <h1>RECOMMENDED FOR YOU</h1>
               <div>
                {selected(numArray).map(i => (
                  <ProjectIndexItem
                    project={categoryProjects[i]}
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

export default CategoryPage;
