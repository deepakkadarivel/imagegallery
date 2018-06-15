import React from 'react';
import PropTypes from 'prop-types';

import './thumbnail.css';

const Thumbnail = props => {
  const { imageUrl, title, description, onClick } = props;

  return (
    <div className="thumbnail" onClick={onClick}>
      <img src={imageUrl} alt={title} />
      <div className="container">
        <p>{title}</p>
      </div>
    </div>
  );
};

Thumbnail.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Thumbnail;
