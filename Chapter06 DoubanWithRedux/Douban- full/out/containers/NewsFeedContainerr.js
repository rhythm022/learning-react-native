import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsActions';
import NewsFeed from '../components/NewsFeed';
// import { reshapeNews } from '../util/dataTransformations';
import { allNewsSelector } from '../seletors/newsSelectors';
import { addBookmark } from '../actions/bookmarkActions';
const mapStateToProps = (state) => ({
    news: allNewsSelector(state),
});
const mapDispatchToProps = (dispatch) => (bindActionCreators({
    load: loadNews,
    addBookmark,
}, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
//# sourceMappingURL=NewsFeedContainerr.js.map