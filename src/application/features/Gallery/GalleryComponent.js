import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import './gallery.css';

class GalleryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.gallery.posts
    };
  }

  componentWillMount() {
    this.props.getGallery();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gallery !== this.props.gallery) {
      this.setState({
        posts: nextProps.gallery.posts
      });
    }
  }

  render() {
    return (
      <div className="GalleryComponent">
        {this.props.gallery.promise.getGallery.isPending && <Loader />}
      </div>
    );
  }
}

GalleryComponent.propTypes = {
  gallery: PropTypes.object,
  getGallery: PropTypes.func
};

export default GalleryComponent;
