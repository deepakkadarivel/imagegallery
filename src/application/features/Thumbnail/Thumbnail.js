import React from 'react';
import PropTypes from 'prop-types';

import './thumbnail.css';

const Thumbnail = props => {
  const { imageUrl, title, description, onClick } = props;

  return (
    <div className="thumbnail" onClick={onClick}>
      <img src={imageUrl} alt={title} style="width:100%" />
      <div className="container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

Thumbnail.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func
};

export default Thumbnail;
