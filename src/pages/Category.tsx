
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import { mockBlogPosts } from "@/data/mockData";

const Category = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [categoryPosts, setCategoryPosts] = useState<any[]>([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  
  useEffect(() => {
    if (categorySlug) {
      const filtered = mockBlogPosts.filter(post => 
        post.categorySlug.toLowerCase() === categorySlug.toLowerCase()
      );
      
      setCategoryPosts(filtered);
      
      if (filtered.length > 0) {
        setCategoryTitle(filtered[0].category);
      }
    }
  }, [categorySlug]);
  
  return (
    <Layout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-2">{categoryTitle}</h1>
        <p className="text-muted-foreground mb-8">
          Browse all articles in this category
        </p>
        
        {categoryPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-2">No posts found</h2>
            <p className="text-muted-foreground">
              We couldn't find any posts in this category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Category;
