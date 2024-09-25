// app/components/PostGrid.tsx
import React from 'react';
import { PostGridProps } from '../interfaces/interfaces';


const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
          <a href={`/blogs/${post.slug}`}>
            <img
              src={post.image}
              alt={post.title.ar}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-primary mb-2">{post.title.ar}</h3>
            <p className="text-gray-600">{post.content.ar}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
