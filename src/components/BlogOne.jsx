import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../constants';
import './Blog.css';

const App = () => {
  const { id } = useParams();
  const history = useNavigate();

  // Find the current blog post
  const currentIndex = projects.findIndex((blog) => blog.id == id);
  const currentBlog = projects[currentIndex];

  // Function to navigate to the next blog post
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    const nextBlog = projects[nextIndex];
    history(`/blog/${nextBlog.id}`);
  };

  // Function to navigate to the previous blog post
  const handlePrevious = () => {
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
    const previousBlog = projects[previousIndex];
    history(`/blog/${previousBlog.id}`);
  };

  return (
    <div className="blog-container">
      <img className="blog-image" src={currentBlog.image} alt="Blog Image" />
      <div className="blog-content">
        <h1 className="blog-title">{currentBlog.name}</h1>
        <p className="blog-description">{currentBlog.description}</p>
      </div>
      <div className="navigation-buttons">
        <button className="icon-button" onClick={handlePrevious}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button" onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
