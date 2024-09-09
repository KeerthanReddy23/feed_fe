import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
      <ul className="space-y-6">
        {posts.map((post) => (
          <Post key={post.postid} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;