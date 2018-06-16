import { connect } from 'react-redux';
import ThumbnailDetail from './ThumbnailDetail';

const mapStateToProps = state => {
  return {
    selectedThumbnail: state.gallery.selectedThumbnail,
    selectedThumbnailImage: state.gallery.selectedThumbnailImage
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThumbnailDetail);
