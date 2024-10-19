import React from 'react';
import './Blog.scss';

const Blog = () => {
  const blogPosts = [
    {
      title: '5 Tips to Boost Your Software Development Productivity',
      date: 'October 1, 2024',
      description:
        'Learn how to enhance your development productivity with these five actionable tips...',
    },
    {
      title: 'The Future of Cloud Computing in 2025',
      date: 'September 18, 2024',
      description:
        'Cloud computing is evolving faster than ever. Here’s what to expect in the next few years...',
    },
    {
      title: 'Why DevOps is Crucial for Modern Software Teams',
      date: 'August 5, 2024',
      description:
        'DevOps practices can greatly accelerate your software delivery. Find out why it matters for your team...',
    },
  ];

  return (
    <section id="blog" className="blog section">
      <div className="container">
        <h2>Our Blog</h2>
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <h3>{post.title}</h3>
              <p className="date">{post.date}</p>
              <p className="description">{post.description}</p>
              <a href="#read-more" className="read-more">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
