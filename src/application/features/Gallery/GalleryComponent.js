import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import './gallery.css';
import Thumbnail from '../Thumbnail/Thumbnail';

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

  renderGallery() {
    return this.state.thumbnails.map(thumbnail => {
      if (
        thumbnail.type === 'image/gif' ||
        thumbnail.type === 'image/png' ||
        thumbnail.type === 'image/jpeg' ||
        thumbnail.type === 'image/jpg'
      ) {
        return (
          <Thumbnail
            key={thumbnail.id}
            imageUrl={thumbnail.link}
            title={thumbnail.title}
          />
        );
      }
      if (thumbnail.images) {
        return thumbnail.images.map(thumb => {
          if (
            thumb.type === 'image/gif' ||
            thumb.type === 'image/png' ||
            thumb.type === 'image/jpeg' ||
            thumb.type === 'image/jpg'
          ) {
            return (
              <Thumbnail
                key={thumb.id}
                imageUrl={thumb.link}
                title={thumbnail.title}
              />
            );
          }
        });
      }
    });
  }

  render() {
    return (
      <div className="GalleryComponent">
        {this.props.gallery.promise.getGallery.isPending && <Loader />}
        <div className="gallery">{this.renderGallery()}</div>
      </div>
    );
  }
}

GalleryComponent.propTypes = {
  gallery: PropTypes.object,
  getGallery: PropTypes.func
};

export default GalleryComponent;
