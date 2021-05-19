import { connect } from 'react-redux';
import CategoryPage from './category_page'
import { fetchProjects} from '../../actions/project_actions';
import {fetchCategories, fetchCategory} from '../../actions/category_actions'


const mapStateToProps = (state, ownProps) => {
  return{
      projects: state.entities.projects,
      category: state.entities.categories[ownProps.match.params.categoryId]
    }
  
}

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchCategory: (categoryId) => dispatch(fetchCategory(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);