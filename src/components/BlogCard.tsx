
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/mockData";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="blog-card overflow-hidden rounded-lg border bg-card">
      <Link to={`/post/${post.slug}`}>
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="h-48 w-full object-cover"
        />
      </Link>
      <div className="p-4 md:p-5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Link 
            to={`/category/${post.categorySlug}`}
            className="text-blog-accent hover:underline"
          >
            {post.category}
          </Link>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        
        <Link to={`/post/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-accent transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-3">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-8 h-8 rounded-full object-cover" 
          />
          <div className="text-sm">
            <p className="font-medium">{post.author.name}</p>
            <p className="text-muted-foreground">{post.readTime} min read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
