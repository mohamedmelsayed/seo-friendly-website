// app/contexts/ProductCategoryContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Category } from '../interfaces/interfaces';
import axiosInstance from '../utils/axiosConfig';

// Define the shape of the context data
interface ProductCategoryContextType {
  productCategories: Category[];
  loading: boolean;
  error: string | null; // Add an error state
}

// Create the context
const ProductCategoryContext = createContext<ProductCategoryContextType | undefined>(undefined);

// Create a custom hook for using the ProductCategoryContext
export const useProductCategories = () => {
  const context = useContext(ProductCategoryContext);
  if (!context) {
    throw new Error("useProductCategories must be used within a ProductCategoryProvider");
  }
  return context;
};

// Create a provider component
export const ProductCategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [productCategories, setProductCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch categories once when the provider mounts
    const fetchCategories = async () => {
      try {
        setLoading(true); // Ensure loading state is set correctly
        const response = await axiosInstance.get(`/api/product-categories`);
        
        // Assuming API response is structured as { data: [...] }
        if (response.data && response.data.data) {
          setProductCategories(response.data.data);
        } else {
          console.error('Unexpected API response structure:', response.data);
          setProductCategories([]);
        }
      } catch (error) {
        console.error('Error fetching product categories:', error);
        setError('Failed to load product categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <ProductCategoryContext.Provider value={{ productCategories, loading, error }}>
      {children}
    </ProductCategoryContext.Provider>
  );
};
