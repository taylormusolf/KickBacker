import { connect } from 'react-redux';
import React from 'react';
import SearchPage from './search_page';
import { fetchProjects} from '../../actions/project_actions';


const mapStateToProps = (state, ownProps) =>{
  return{
    query: ownProps.match.params.query,
    projects: state.entities.projects
  }
}

const mapDispatchoProps = (dispatch) =>({
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps, mapDispatchoProps)(SearchPage);