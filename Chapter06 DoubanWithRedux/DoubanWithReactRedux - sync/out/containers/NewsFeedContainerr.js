import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsActions';
import NewsFeed from '../components/NewsFeed';
import { allNewsSelector } from '../seletors/newsSelectors';
const mapStateToProps = (state) => ({
    news: allNewsSelector(state),
});
const mapDispatchToProps = (dispatch) => (bindActionCreators({
    loadNews,
}, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
//# sourceMappingURL=NewsFeedContainerr.js.map