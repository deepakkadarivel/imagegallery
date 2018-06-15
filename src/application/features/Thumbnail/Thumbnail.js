import React from 'react';
import PropTypes from 'prop-types';

import './thumbnail.css';
import { Link } from 'react-router-dom';

const Thumbnail = props => {
  const { imageUrl, title, onClick } = props;

  return (
    <div className="thumbnail" onClick={onClick}>
      <Link to="/detail">
        <img src={imageUrl} alt={title} />
      </Link>
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
