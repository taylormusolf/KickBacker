import { connect } from 'react-redux';
// import {fetchCategories} from '../../actions/category_actions'
import CategoryNav from './category_nav'

const mapStateToProps = (state) => {
  return{
      categories: state.entities.categories,
    }
  
}

const mapDispatchToProps = dispatch => ({
  // fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNav);