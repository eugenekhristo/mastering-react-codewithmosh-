import React from 'react';

const FaLike = ({ isLiked, onLikeToggle }) => {
  return (
    <i
      style={{ cursor: 'pointer' }}
      className={`fa fa-heart${!isLiked ? '-o' : ''}`}
      onClick={() => onLikeToggle(!isLiked)}
    />
  );
};

export default FaLike;
