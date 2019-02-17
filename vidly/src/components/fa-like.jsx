import React from 'react';

const FaLike = ({ isLiked, onClick }) => {
  return (
    <i
      style={{ cursor: 'pointer' }}
      className={`fa fa-heart${!isLiked ? '-o' : ''}`}
      onClick={onClick}
    />
  );
};

export default FaLike;
