import React, { Component } from 'react';
import './detail.css';
import PropTypes from 'prop-types';

class ThumbnailDetailComponent extends Component {
  render() {
    return (
      <div className="thumbnail-detail">
        {this.props.selectedThumbnailImage && (
          <div className="detail-card">
            <img
              src={this.props.selectedThumbnailImage}
              alt={this.props.selectedThumbnail.title}
            />
            <div className="container">
              <h5>{this.props.selectedThumbnail.title}</h5>
              {this.props.selectedThumbnail.description && (
                <p>{this.props.selectedThumbnail.description}</p>
              )}
              <p>
                <span id="upvote" /> {this.props.selectedThumbnail.ups}
                <span id="downvote" /> {this.props.selectedThumbnail.downs}
                <span id="score" /> {this.props.selectedThumbnail.score}
              </p>
            </div>
          </div>
        )}
        {!this.props.selectedThumbnailImage && (
          <div>Nothing to display. Select an image from Gallery</div>
        )}
      </div>
    );
  }
}

ThumbnailDetailComponent.propTypes = {
  selectedThumbnail: PropTypes.object,
  selectedThumbnailImage: PropTypes.string
};

export default ThumbnailDetailComponent;
