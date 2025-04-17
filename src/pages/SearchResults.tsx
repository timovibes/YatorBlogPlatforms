
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import { mockBlogPosts } from "@/data/mockData";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<any[]>([]);
  
  useEffect(() => {
    if (query) {
      const filtered = mockBlogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);
  
  return (
    <Layout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-muted-foreground mb-8">
          {results.length} {results.length === 1 ? 'result' : 'results'} found for "{query}"
        </p>
        
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-2">No results found</h2>
            <p className="text-muted-foreground">
              We couldn't find any posts matching your search.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchResults;
