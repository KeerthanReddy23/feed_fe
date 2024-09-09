import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from '../components/PostList';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    const fetchPosts = () => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/posts/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(resp => {
          setPosts(resp.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    };
    fetchPosts();
  }, []);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-600">Error: {error}</div>;

  return (
    <Posts posts={posts}/>
  );
};

export default HomePage;