import React from 'react';

class ProjectPages extends React.Component {
  
  render() {
    const selected = this.props.selectedPage;
    const pages = [1, 2, 3];
    const headers = pages.map((page) => {
      const klass = page === selected ? 'active' : '';
      return (
        <li
          key={page}
          className={klass}
          onClick={() => this.props.onPageChosen(page)}>
          {page}
        </li>
        
      );
    });
    return (
      <ul className='num-pages'>
        <li><i className="fas fa-chevron-left"></i></li>
        {headers}
        <li><i className="fas fa-chevron-right"></i></li>
      </ul>
      
    );
 }
}

    

export default ProjectPages;
