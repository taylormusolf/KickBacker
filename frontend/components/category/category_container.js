import { connect } from 'react-redux';
import CategoryPage from './category_page'
import { fetchProjects} from '../../actions/project_actions';
import {fetchCategories, fetchCategory} from '../../actions/category_actions'


const mapStateToProps = (state, ownProps) => {
  return{
      projects: state.entities.projects,
      categories: state.entities.categories,
      category: ownProps.match.params.categoryName
    }
  
}

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchCategory: (categoryId) => dispatch(fetchCategory(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);