import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsActions';
import NewsFeed from '../components/NewsFeed';

import { reshapeNews } from '../util/dataTransformations';
import { allNewsSelector } from '../seletors/newsSelectors'


const mapStateToProps = (state: any) => ({
  news: allNewsSelector(state),
});

const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    loadNews,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
