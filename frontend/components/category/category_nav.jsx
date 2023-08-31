import React from 'react';
import { Link } from 'react-router-dom';

class CategoryNav extends React.Component{

  // componentDidMount(){
  //   this.props.fetchCategories();
  // }

  render(){
    return(
      <div className='category-links-container'>
        <ul className='category-links'>
          {Object.values(this.props.categories).map((category)=>(
            <li key={category.id}><Link to={`/projects/category/${category.id}`}>{category.name}</Link></li>
          ))}
        </ul>
      </div>   
    )
  }

}

export default CategoryNav;