import React from 'react';
import ProjectIndexItem from '../project_index/project_index_item';
import ProjectFeaturedItem from '../project_index/project_featured_item'
import ProjectPages from '../project_index/project_pages'
import { Link } from 'react-router-dom';

class CategoryPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {currentPage: 1};
    this.selectPage = this.selectPage.bind(this);
  }
  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchCategories();
  }

  categories(){
    return(
      <div className='category-links-container'>
        <ul className='category-links'>
          <li><Link to='/projects/category/Arts'>Arts</Link></li>
          <li><a href="">Comics & Illustration</a></li>
          <li><a href="">Design & Tech</a></li>
          <li><a href="">Film</a></li>
          <li><a href="">Food & Craft</a></li>
          <li><a href="">Games</a></li>
          <li><a href="">Music</a></li>
          <li><Link to='/projects/category/Publishing'>Publishing</Link></li>
        </ul>
      </div>
      
    )
  }


  selectPage(num) {
    this.setState({currentPage: num});
  }

  render() {
    // if (!projects) return null;
    const { projects, category} = this.props;
    const array = Object.values(projects);
    
    const filtered = (array) =>{
      let filteredArray = [];
      array.forEach((project) =>{
        if(project.category.name === category){
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
          {this.categories()}
          <div className='category-header'>
            <h1>{category}</h1>
            <h2>Category description</h2>
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
