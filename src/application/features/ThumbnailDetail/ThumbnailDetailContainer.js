import { connect } from 'react-redux';
import ThumbnailDetailComponent from './ThumbnailDetailComponent';

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
)(ThumbnailDetailComponent);
