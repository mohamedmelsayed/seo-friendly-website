// app/contexts/CombinedProviders.tsx
"use client";

import React from 'react';
import { ProductCategoryProvider } from './ProductCategoryContext';
import { BlogsCategoryProvider } from './CategoryContext';

interface CombinedProvidersProps {
  children: React.ReactNode;
}

const CombinedProviders: React.FC<CombinedProvidersProps> = ({ children }) => {
  return (
    <ProductCategoryProvider>
      <BlogsCategoryProvider>
        {children}
      </BlogsCategoryProvider>
    </ProductCategoryProvider>
  );
};

export default CombinedProviders;
