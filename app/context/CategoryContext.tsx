// app/contexts/BlogsCategoryContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Category } from '../interfaces/interfaces';
import axiosInstance from '../utils/axiosConfig';

// Define the shape of the context data
interface BlogsCategoryContextType {
  blogCategories: Category[];
  loading: boolean;
}

// Create the context
const BlogsCategoryContext = createContext<BlogsCategoryContextType | undefined>(undefined);

// Create a custom hook for using the BlogsCategoryContext
export const useBlogsCategories = () => {
  const context = useContext(BlogsCategoryContext);
  if (!context) {
    throw new Error("useBlogsCategories must be used within a BlogsCategoryProvider");
  }
  return context;
};

// Create a provider component
export const BlogsCategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blogCategories, setBlogCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch categories once when the provider mounts
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get(`/api/blog-categories`);
        setBlogCategories(response.data.data); // Assuming API response has data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <BlogsCategoryContext.Provider value={{ blogCategories, loading }}>
      {children}
    </BlogsCategoryContext.Provider>
  );
};
