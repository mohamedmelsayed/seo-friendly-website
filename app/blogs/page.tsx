// app/blogs/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useBlogsCategories } from '../context/CategoryContext';
import SubCategories from '../components/SubCategories';
import PostGrid from '../components/PostGrid';
import axios from 'axios';
import axiosInstance from '../utils/axiosConfig';

const BlogsPage = () => {
  const { blogCategories, loading } = useBlogsCategories();
  const [posts, setPosts] = useState([]);
  const [postLoading, setPostLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get(`/api/blogs`);
        setPosts(response.data.data); // Assuming the API response contains the data in response.data.data
        setPostLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPostLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <SubCategories categories={blogCategories} loading={loading} />
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Latest Blogs</h2>
        {postLoading ? (
          <p>Loading posts...</p>
        ) : (
          <PostGrid posts={posts} />
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
