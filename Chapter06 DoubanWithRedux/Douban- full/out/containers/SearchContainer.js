import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../components/search';
import { searchNewsSelector } from '../seletors/newsSelectors';
import { searchNews } from '../actions/newsActions';
const mapStateToProps = (state) => ({
    filteredNews: searchNewsSelector(state)
});
const mapDispatchToProps = (dispatch) => (bindActionCreators({
    searchNews
}, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Search);
//# sourceMappingURL=SearchContainer.js.map