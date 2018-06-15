import { connect } from 'react-redux';
import GalleryComponent from './GalleryComponent';
import {
  getGallery,
  setSelectedThumbnail,
  setSelectedThumbnailImage
} from './galleryActions';

const mapStateToProps = state => {
  return {
    gallery: state.gallery
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGallery() {
      dispatch(getGallery());
    },
    setSelectedThumbnail(thumbnail) {
      dispatch(setSelectedThumbnail(thumbnail));
    },
    setSelectedThumbnailImage(image) {
      dispatch(setSelectedThumbnailImage(image));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryComponent);
