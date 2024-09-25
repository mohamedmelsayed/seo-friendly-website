// app/components/Header.tsx
"use client"; // Add this at the top

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useBlogsCategories } from '../context/CategoryContext';

const Header = () => {
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  const [categories, setCategories] = useState([]);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const { blogCategories, loading } = useBlogsCategories(); // Access blogCategories from context
  const [showSubMenuBlog, setShowSubMenuBlog] = useState(false);
  useEffect(() => {
    // Fetch product categories from the API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://192.168.2.12:8000/api/product-categories'); // Replace with your actual API endpoint
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    
    fetchCategories();
  }, []);

  

  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">مجموعة محمد</Link>
        <div className="space-x-4 relative">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          {/* blogs Menu Item */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setShowSubMenuBlog(true)}
            onMouseLeave={() => setShowSubMenuBlog(false)}
          >
            <Link href="/blogs" className="hover:underline">
              Blogs
            </Link>
            {showSubMenuBlog && (
              <div className="absolute left-0 mt-2 bg-white text-black p-4 shadow-lg z-10">
                <ul>
                  {blogCategories.length > 0 ? (
                    blogCategories.map((category) => (
                      <li key={category.id} className="hover:bg-gray-100 p-2">
                        <Link href={`/blogs/category/${category.slug}`}>
                          {category.name.ar}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="p-2">No Categories Found</li>
                  )}
                </ul>
              </div>
            )}
          </div>
          {/* Products Menu Item */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
          >
            <Link href="/products" className="hover:underline">
              Products
            </Link>
            {showSubMenu && (
              <div className="absolute left-0 mt-2 bg-white text-black p-4 shadow-lg z-10">
                <ul>
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <li key={category.id} className="hover:bg-gray-100 p-2">
                        <Link href={`/products/categories/${category.slug}`}>
                          {category.name.ar}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="p-2">No Categories Found</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
