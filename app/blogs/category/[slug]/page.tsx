// app/blogs/categories/[slug]/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { BlogPost, Category } from '@/app/interfaces/interfaces';
import axiosInstance from '@/app/utils/axiosConfig';
import SubCategories from '@/app/components/SubCategories';
import PostGrid from '@/app/components/PostGrid';

const ParentCategoryPage = () => {
  const { slug } = useParams(); // Get the parent slug from the URL
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      // Fetch sub-categories by parent category slug
      const fetchSubCategoriesAndBlogs = async () => {
        try {
          // Fetch subcategories
          const subCategoryResponse = await axiosInstance.get(`/api/blog-categories?filter[parent_slug]=${slug}`);
          setSubCategories(subCategoryResponse.data.data);

          // Fetch blogs/posts filtered by the main category slug
          const blogResponse = await axiosInstance.get(`/api/blogs?filter[category_slug]=${slug}&include=category`);
          setBlogs(blogResponse.data.data);

          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };

      fetchSubCategoriesAndBlogs();
    }
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="container mx-auto px-4 py-8">
      <SubCategories categories={subCategories} loading={loading} />
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Latest Blogs</h2>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <PostGrid posts={blogs} />
        )}
      </div>
    </div>
  );
};

export default ParentCategoryPage;
