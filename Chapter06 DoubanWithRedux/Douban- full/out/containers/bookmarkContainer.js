import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewsFeed from '../components/NewsFeed';
import { bookmarkNewsSelector } from '../seletors/bookmarkSelector';
import { loadBookmarks, addBookmark } from '../actions/bookmarkActions';
const mapStateToProps = (state) => ({
    news: bookmarkNewsSelector(state)
});
const mapDispatchToProps = (dispatch) => (bindActionCreators({
    load: loadBookmarks,
    addBookmark,
}, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
//# sourceMappingURL=bookmarkContainer.js.map