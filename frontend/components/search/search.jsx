import React from "react";

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = ({query: ''})
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e){
    if(e.keyCode === 13){
      this.setState({query: ''});
      this.props.closeModal();
      this.props.history.push(`/projects/search/${this.state.query}`)
    }
  }
  handleUpdate(field){
    return e => this.setState({[field]: e.target.value})
  }
  render(){
    return(
      <div className='search-container'>
        <input className='search-input' 
          type="text" 
          placeholder='Search for projects or categories'
          onKeyDown={this.handleSearch}
          value={this.state.query}
          onChange={this.handleUpdate('query')}/>
        <div className='search-close' onClick={() => this.props.closeModal()}><i className="fas fa-times"></i></div>
      </div>
    )
    
    
  }
}


export default Search;