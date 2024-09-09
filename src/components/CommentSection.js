import React, { useState } from 'react';

const CommentSection = ({ comments }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComments = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button 
        onClick={toggleComments}
        className="flex items-center mt-4 cursor-pointer text-blue-600"
      >
        <svg 
          className="w-6 h-6 mr-2" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 21c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8c0 1.486-.404 2.873-1.108 4.069L22 20.01 16 16a7.963 7.963 0 01-4 1c-.374 0-.744-.033-1.109-.092C11.873 15.596 11 13.836 11 12h.01M9 21h3v2c0 2.485 4 3 4 3s-4-.515-4-3v-2M9 21v-2c0-1.33-1.167-2-2-2H5.16c-.694 0-1.197-.681-1.112-1.364l.345-2.758C4.535 13.121 6 12.344 8 12v9z"/>
        </svg>
        {isOpen ? 'Hide Comments' : 'Show Comments'}
      </button>
      
      {isOpen && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-lg">
          {comments.map((comment, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{comment.user}:</p>
              <p>{comment.text}</p>
              {comment.replies && (
                <div className="ml-4 mt-2">
                  {comment.replies.map((reply, replyIndex) => (
                    <div key={replyIndex} className="mt-2">
                      <p className="font-semibold">{reply.user}:</p>
                      <p>{reply.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentSection;