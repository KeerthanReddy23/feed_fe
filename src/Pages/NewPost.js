import React, { useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../Recoil/atoms";

const NewPost = () => {
  const [tags, setTags] = useState('');
  const [place, setPlace] = useState('');
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const user = useRecoilValue(userState)
  const accessToken = localStorage.getItem('access');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('tags', tags);
    formData.append('place', place);
    formData.append('caption', caption);
    formData.append('userid',user.userid);

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/new-post/`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(resp => {
        console.log(resp.data);
        setTags('');
        setPlace('');
        setCaption('');
        setImage(null);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e)=>setImage(e.target.files[0])}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e)=>setTags(e.target.value)}
            placeholder="Enter tags separated by commas"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Place</label>
          <input
            type="text"
            value={place}
            onChange={(e)=>setPlace(e.target.value)}
            placeholder="Enter the place"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Caption</label>
          <textarea
            value={caption}
            onChange={(e)=>setCaption(e.target.value)}
            placeholder="Write a caption..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;