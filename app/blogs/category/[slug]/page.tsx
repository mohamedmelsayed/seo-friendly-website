// app/blogs/categories/[slug]/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

const CategoryBlogsPage = () => {
  const { slug } = useParams(); // Use useParams to get dynamic parameters
  const [blogs, setBlogs] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      // Fetch blog posts by category slug
      const fetchBlogsByCategory = async () => {
        try {
          const response = await axios.get(`http://192.168.2.12:8000/api/blogs?category=${slug}`); // Adjust this endpoint to match your API
          setBlogs(response.data.data); // Assume API returns an array of blog posts
          setCategoryName(response.data.categoryName); // Assume API returns the category name
          setLoading(false);
        } catch (error) {
          console.error('Error fetching blogs by category:', error);
          setLoading(false);
        }
      };

      fetchBlogsByCategory();
    }
  }, [slug]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Blogs in Category: {categoryName}
      </h1>

      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md p-4 rounded-lg">
              <a href={`/blogs/${blog.slug}`}>
                <h2 className="text-xl font-bold hover:underline">{blog.title}</h2>
              </a>
              {/* <p className="text-gray-600 mt-2">{blog.excerpt}</p> */}
              <a href={`/blogs/${blog.slug}`} className="text-blue-500 hover:underline mt-4 inline-block">
                Read more
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs found in this category.</p>
      )}
    </div>
  );
};

export default CategoryBlogsPage;
