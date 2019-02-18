import React from "react";

const Posts = ({match, justProp}) => {
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
      <p>{justProp}</p>
    </div>
  );
};

export default Posts;
