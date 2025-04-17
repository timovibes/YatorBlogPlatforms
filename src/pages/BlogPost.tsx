
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { mockBlogPosts } from "@/data/mockData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);
  
  useEffect(() => {
    // In a real app, we would fetch the post from an API
    const foundPost = mockBlogPosts.find(p => p.slug === slug);
    setPost(foundPost || null);
  }, [slug]);
  
  if (!post) {
    return (
      <Layout>
        <div className="container max-w-4xl py-10">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <p className="text-muted-foreground">The post you're looking for doesn't exist.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container max-w-4xl py-10 animate-fade-in">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-[40vh] object-cover rounded-lg mb-8" 
        />
        
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
          
          <div className="flex items-center gap-3 mb-8">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover" 
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.author.role}</p>
            </div>
          </div>
        </div>
        
        <div className="blog-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
