import React from 'react';

class ProjectPages extends React.Component {
  leftChevron(){
    if(this.props.selectedPage !== 1){
      this.props.onPageChosen(this.props.selectedPage - 1)
    }
  }
  rightChevron(){
    if(this.props.selectedPage !== 3){
      this.props.onPageChosen(this.props.selectedPage + 1)
    }
  }
  render() {
    const selected = this.props.selectedPage;
    const grayLeft = selected === 1 ? 'gray' : '';
    const grayRight = selected === 3 ? 'gray' : '';
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
        <li id={grayLeft} onClick={()=> this.leftChevron()}><i className="fas fa-chevron-left" ></i></li>
        {headers}
        <li id={grayRight} onClick={()=> this.rightChevron()}><i className="fas fa-chevron-right"></i></li>
      </ul>
      
    );
 }
}

    

export default ProjectPages;
