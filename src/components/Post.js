import React, { useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userState } from '../Recoil/atoms';

const Post = ({ post }) => {
  const user = useRecoilValue(userState);
  const [liked, setLiked] = useState(post.liked_users?.includes(user.userid));
  const [totalLikes, setTotalLikes] = useState(post.total_likes);

  const accessToken = localStorage.getItem('access');

  const handleLike = async () => {
    try {
      if (liked) {
        setLiked(false);
        setTotalLikes((prevLikes) => prevLikes - 1);
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/like/`, {
          postid: post.postid,
          userid: user.userid,
          like: 'unlike',
        },
        {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
        });
      } else {
        setLiked(true);
        setTotalLikes((prevLikes) => prevLikes + 1);
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/like/`, {
          postid: post.postid,
          userid: user.userid,
          like: 'like',
        },
        {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
        });
      }
    } catch (error) {
      console.error("Error in like/unlike action:", error);
      setLiked((prevLiked) => !prevLiked);
      setTotalLikes((prevLikes) => (liked ? prevLikes + 1 : prevLikes - 1));
    }
  };

  return (
    <li className="bg-white p-6 rounded-lg shadow-lg relative cursor-pointer"
      onDoubleClick={handleLike} >
      <p className="text-2xl font-semibold mb-2">{post.place}</p>
      <img
        src={`${process.env.REACT_APP_BACKEND_URL}${post.image}`}
        alt={post.caption}
        className="w-full h-auto rounded-md mb-4"
      />
      <p className="text-gray-700">
        <strong>Tags:</strong> {post.tags}
      </p>
      <p className="text-gray-700 mb-2">{post.caption}</p>
      <p className="text-gray-500 text-sm mb-6">
        {new Date(post.date_posted).toLocaleString()}
      </p>
      <div className="absolute bottom-3 left-4 flex items-center">
        <svg
          onClick={handleLike}
          className={`w-8 h-8 cursor-pointer ${liked ? 'text-red-500' : 'text-black'}`}
          fill={liked ? 'red' : 'white'}
          stroke={liked ? 'red' : 'black'}
          strokeWidth="1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        {totalLikes > 0 && (
          <p className="ml-2 text-gray-700">{totalLikes}</p>
        )}
      </div>
    </li>
  );
};

export default Post;