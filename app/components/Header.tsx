// app/components/Header.tsx
"use client"; // Add this at the top

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useBlogsCategories } from '../context/CategoryContext';
import { useProductCategories } from '../context/ProductCategoryContext';

const Header = () => {
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  const [showSubMenu, setShowSubMenu] = useState(false);
  const { blogCategories } = useBlogsCategories(); // Access blogCategories from context
  const { productCategories } = useProductCategories(); // Access blogCategories from context
  const [showSubMenuBlog, setShowSubMenuBlog] = useState(false);
 

  

  return (
    <header className="bg-primary text-white p-4 tajwal-bold">
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
                  {productCategories.length > 0 ? (
                    productCategories.map((category) => (
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
