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
      // <ul className='tab-header'>
      //   {headers}
      // </ul>
      null
    );
 }
}

    

export default ProjectPages;
