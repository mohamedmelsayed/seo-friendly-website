// app/components/SubCategories.tsx
"use client";

import React from 'react';
import { SubCategoriesProps } from '../interfaces/interfaces';


const SubCategories: React.FC<SubCategoriesProps> = ({ categories, loading }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-primary mb-4">Blog Categories</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-disc pl-5 mt-4">
          {categories.map((category) => (
            <li key={category.id} className="mt-2">
              <a href={`/blogs/category/${category.slug}`} className="text-blue-500 hover:underline">
                {category.name.ar}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubCategories;
