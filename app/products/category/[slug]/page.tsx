// app/blogs/categories/[slug]/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

const ParentCategoryPage = () => {
  const { slug } = useParams(); // Get the parent slug from the URL
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      // Fetch sub-categories by parent category slug
      const fetchSubCategories = async () => {
        try {
          const response = await axios.get(`http://192.168.2.12:8000/api/product-categories?filter[parent_slug]=${slug}`); // Adjust this endpoint to match your API
          setSubCategories(response.data.data); // Assuming API returns an array of sub-categories
          setLoading(false);
        } catch (error) {
          console.error('Error fetching sub-categories:', error);
          setLoading(false);
        }
      };

      fetchSubCategories();
    }
  }, [slug]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Sub-Categories for: {slug}
      </h1>

      {subCategories.length > 0 ? (
        <ul className="list-disc pl-5 mt-4">
          {subCategories.map((subCategory) => (
            <li key={subCategory.id} className="mt-2">
              <a href={`/blogs/category/${subCategory.slug}`} className="text-blue-500 hover:underline">
                {subCategory.name.ar}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No sub-categories found for this category.</p>
      )}
    </div>
  );
};

export default ParentCategoryPage;
