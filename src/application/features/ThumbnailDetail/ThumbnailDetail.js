import React from 'react';
import './detail.css';
import PropTypes from 'prop-types';

const ThumbnailDetail = props => {
  return (
    <div className="thumbnail-detail">
      {props.selectedThumbnailImage && (
        <div className="detail-card">
          <img
            src={props.selectedThumbnailImage}
            alt={props.selectedThumbnail.title}
          />
          <div className="container">
            <h5>{props.selectedThumbnail.title}</h5>
            {props.selectedThumbnail.description && (
              <p>{props.selectedThumbnail.description}</p>
            )}
            <p>
              <span id="upvote" /> {props.selectedThumbnail.ups}
              <span id="downvote" /> {props.selectedThumbnail.downs}
              <span id="score" /> {props.selectedThumbnail.score}
            </p>
          </div>
        </div>
      )}
      {!props.selectedThumbnailImage && (
        <div>Nothing to display. Select an image from Gallery</div>
      )}
    </div>
  );
};

ThumbnailDetail.propTypes = {
  selectedThumbnail: PropTypes.object,
  selectedThumbnailImage: PropTypes.string
};

export default ThumbnailDetail;
