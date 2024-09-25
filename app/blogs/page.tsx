// app/blogs/page.tsx
"use client";

import React from 'react';
import { useBlogsCategories } from '../context/CategoryContext';

const BlogsPage = () => {
  const { blogCategories, loading } = useBlogsCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Blog Categories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-disc pl-5 mt-4">
          {blogCategories.map((category) => (
            <li key={category.id} className="mt-2">
              <a href={`/blogs/category/${category.slug}`} className="text-blue-500 hover:underline">
                {category.name.ar}
              </a>
            </li>
          ))}
        </ul>
      )
      
      }
    </div>
  );
};

export default BlogsPage;
