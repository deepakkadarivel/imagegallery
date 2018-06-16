import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import Loader from '../Loader/Loader';
import './gallery.css';
import Thumbnail from '../Thumbnail/Thumbnail';
import FilterModalContainer from '../FilterModal/FilterModalContainer';

class GalleryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: this.props.gallery.thumbnails
    };
  }

  componentWillMount() {
    this.props.getGallery();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gallery !== this.props.gallery) {
      this.setState({
        thumbnails: nextProps.gallery.thumbnails
      });
    }
  }

  static isImage(type) {
    return (
      type === 'image/gif' ||
      type === 'image/png' ||
      type === 'image/jpeg' ||
      type === 'image/jpg'
    );
  }

  setSelectedThumbnail(thumbnail, image) {
    this.props.setSelectedThumbnail(thumbnail);
    this.props.setSelectedThumbnailImage(image);
  }

  renderGallery() {
    return this.state.thumbnails.map(thumbnail => {
      if (GalleryComponent.isImage(thumbnail.type)) {
        return (
          <Thumbnail
            key={thumbnail.id}
            imageUrl={thumbnail.link}
            title={thumbnail.title}
            onClick={() => this.setSelectedThumbnail(thumbnail, thumbnail.link)}
          />
        );
      } else if (thumbnail.images) {
        return thumbnail.images.map(thumb => {
          if (GalleryComponent.isImage(thumb.type)) {
            return (
              <Thumbnail
                key={thumb.id}
                imageUrl={thumb.link}
                title={thumbnail.title}
                onClick={() => this.setSelectedThumbnail(thumbnail, thumb.link)}
              />
            );
          }
          return null;
        });
      }
      return null;
    });
  }

  render() {
    const breakpointColumnsObj = {
      default: 5,
      1100: 4,
      700: 2,
      500: 1
    };
    return (
      <div className="GalleryComponent">
        {this.props.gallery.promise.getGallery.isPending && <Loader />}
        {this.props.isFilterModalVisible && <FilterModalContainer />}
        {!this.props.gallery.promise.getGallery.isPending && (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {this.renderGallery()}
          </Masonry>
        )}
      </div>
    );
  }
}

GalleryComponent.propTypes = {
  gallery: PropTypes.object,
  getGallery: PropTypes.func,
  setSelectedThumbnail: PropTypes.func,
  setSelectedThumbnailImage: PropTypes.func,
  isFilterModalVisible: PropTypes.bool
};

export default GalleryComponent;
