import React, { Component } from 'react';
import './detail.css';
import PropTypes from 'prop-types';

class ThumbnailDetailComponent extends Component {
  render() {
    return (
      <div className="thumbnail-detail">
        <div className="detail-card">
          <img
            src={this.props.selectedThumbnailImage}
            alt={this.props.selectedThumbnail.title}
          />
          <div className="container">
            <p>{this.props.selectedThumbnail.title}</p>
          </div>
        </div>
      </div>
    );
  }
}

ThumbnailDetailComponent.propTypes = {
  selectedThumbnail: PropTypes.object,
  selectedThumbnailImage: PropTypes.string
};

export default ThumbnailDetailComponent;
