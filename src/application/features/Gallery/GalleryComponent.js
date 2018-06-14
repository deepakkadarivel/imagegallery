import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GalleryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.gallery.posts,
      getGalleryPromise: this.props.gallery.promise.getGallery
    };
  }

  componentWillMount() {
    this.props.getGallery();
  }

  render() {
    return <div className="GalleryComponent" />;
  }
}

GalleryComponent.propTypes = {
  gallery: PropTypes.object,
  getGallery: PropTypes.func
};

export default GalleryComponent;
