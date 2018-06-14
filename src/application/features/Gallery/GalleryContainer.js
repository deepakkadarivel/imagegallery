import { connect } from 'react-redux';
import GalleryComponent from './GalleryComponent';
import { getGallery } from './galleryActions';

const mapStateToProps = state => {
  return {
    gallery: state.gallery
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGallery() {
      dispatch(getGallery());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryComponent);
