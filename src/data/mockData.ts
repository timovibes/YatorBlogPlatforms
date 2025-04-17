
export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  readTime: number;
  category: string;
  categorySlug: string;
  author: Author;
  featured?: boolean;
}

export const authors: Author[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Editor",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "2",
    name: "Samantha Lee",
    role: "Writer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "Tech Writer",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "4",
    name: "Emma Rodriguez",
    role: "Senior Editor",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development in 2024",
    slug: "future-web-development-2024",
    excerpt: "Explore the emerging trends that are reshaping how we build for the web, from AI-assisted coding to new frameworks.",
    content: `
      <p>The web development landscape is constantly evolving, with new tools, frameworks, and methodologies emerging at a rapid pace. As we move through 2024, several key trends are reshaping how developers approach their craft.</p>
      
      <h2>AI-Assisted Development</h2>
      <p>Perhaps the most transformative shift has been the integration of AI tools into the development workflow. From GitHub Copilot to more specialized tools that can generate entire components from descriptions, AI is becoming an invaluable pair-programmer.</p>
      
      <h2>The Rise of Edge Computing</h2>
      <p>With platforms like Vercel, Netlify, and Cloudflare Workers gaining popularity, more applications are leveraging edge computing to deliver faster, more resilient experiences to users worldwide.</p>
      
      <h2>WebAssembly Goes Mainstream</h2>
      <p>No longer just an experimental technology, WebAssembly is now being used in production to bring high-performance applications to the browser, from video editing tools to complex data visualizations.</p>
      
      <h2>The Return to Server-Side Rendering</h2>
      <p>Frameworks like Next.js, Remix, and Astro have popularized a hybrid approach that combines the best of server rendering with client-side interactivity, offering improved performance and SEO benefits.</p>
      
      <h2>Conclusion</h2>
      <p>The web platform continues to mature, offering developers more power and flexibility than ever before. By staying informed about these trends and selectively adopting new tools and techniques, developers can create faster, more engaging, and more accessible web experiences.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "2024-04-10",
    readTime: 8,
    category: "Technology",
    categorySlug: "technology",
    author: authors[2],
    featured: true
  },
  {
    id: "2",
    title: "Sustainable Design Practices for Digital Products",
    slug: "sustainable-design-digital-products",
    excerpt: "How designers can create beautiful experiences that also minimize environmental impact through thoughtful choices.",
    content: `
      <p>As awareness of our environmental impact grows, designers are increasingly considering the sustainability of their digital products. From energy-efficient color schemes to optimized images and reduced data usage, sustainable design is becoming a priority.</p>
      
      <h2>The Carbon Footprint of Digital Design</h2>
      <p>Every website and app consumes energy, both in data centers and on users' devices. By making conscious design choices, we can significantly reduce this footprint while still delivering exceptional user experiences.</p>
      
      <h2>Practical Strategies for Sustainable Design</h2>
      <ul>
        <li>Optimize image sizes and use modern formats like WebP and AVIF</li>
        <li>Choose system fonts to reduce loading times</li>
        <li>Implement dark mode, which can reduce energy consumption on OLED screens</li>
        <li>Build for performance to minimize processing power needs</li>
        <li>Design for durability rather than constant updates</li>
      </ul>
      
      <h2>Measuring Your Impact</h2>
      <p>Tools like Website Carbon Calculator can help you assess and track the environmental impact of your digital products, making it easier to set and achieve sustainability goals.</p>
      
      <h2>Conclusion</h2>
      <p>Sustainable design doesn't mean compromising on aesthetics or functionality. By making thoughtful choices throughout the design process, we can create beautiful, effective digital products that tread more lightly on our planet.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "2024-04-05",
    readTime: 6,
    category: "Design",
    categorySlug: "design",
    author: authors[1],
    featured: true
  },
  {
    id: "3",
    title: "Building a Morning Routine That Actually Works",
    slug: "effective-morning-routine",
    excerpt: "Discover how to create a personalized morning routine that energizes you and sets a positive tone for the day.",
    content: `
      <p>We've all heard about the morning routines of successful people—5 AM wake-ups, cold plunges, and meditation sessions before most of us have even hit the snooze button. But the truth is, an effective morning routine is one that works for <em>you</em>, not one that mimics someone else's habits.</p>
      
      <h2>Start With Your Chronotype</h2>
      <p>Not everyone is naturally a morning person. Understanding your chronotype—your body's natural tendency to sleep and wake at certain times—can help you design a routine that works with your biology rather than against it.</p>
      
      <h2>The Power of Consistency</h2>
      <p>More important than specific activities is consistency. Your body and mind benefit from predictable patterns, which help regulate your circadian rhythm and hormonal balance.</p>
      
      <h2>Components of an Effective Morning Routine</h2>
      <ol>
        <li>Hydration: Start with water to rehydrate after sleep</li>
        <li>Movement: Even gentle stretching signals to your body that it's time to be active</li>
        <li>Mindfulness: Set intentions for the day</li>
        <li>Nutrition: Fuel your body with foods that provide steady energy</li>
      </ol>
      
      <h2>Experiment and Adjust</h2>
      <p>The perfect morning routine isn't static—it evolves with your needs and circumstances. Don't be afraid to try different approaches and adjust based on what makes you feel most centered and prepared for the day ahead.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "2024-03-28",
    readTime: 5,
    category: "Lifestyle",
    categorySlug: "lifestyle",
    author: authors[3]
  },
  {
    id: "4",
    title: "Understanding Modern JavaScript Frameworks",
    slug: "modern-javascript-frameworks-explained",
    excerpt: "A comprehensive comparison of React, Vue, Angular, and Svelte to help you choose the right tool for your next project.",
    content: `
      <p>The JavaScript ecosystem continues to evolve rapidly, with frameworks and libraries coming and going. However, a few have established themselves as the leading options for building modern web applications. Let's explore the strengths and considerations for each.</p>
      
      <h2>React: Flexibility and Ecosystem</h2>
      <p>Meta's React remains the most widely used library, valued for its flexibility and extensive ecosystem. Its component-based approach and virtual DOM implementation have influenced virtually every other modern framework.</p>
      
      <h2>Vue: Progressive Adoption</h2>
      <p>Vue has carved out a strong position by emphasizing simplicity and progressive adoption. Its template-based approach feels familiar to developers coming from traditional web development backgrounds.</p>
      
      <h2>Angular: Full-Featured Framework</h2>
      <p>While sometimes criticized for its complexity, Angular provides a complete solution with strong opinions about structure, testing, and tooling, making it a favorite for enterprise applications.</p>
      
      <h2>Svelte: Compile-Time Magic</h2>
      <p>The newcomer, Svelte, has gained attention for its compile-time approach that eliminates the need for a virtual DOM, potentially offering performance benefits and a smoother developer experience.</p>
      
      <h2>Making Your Choice</h2>
      <p>When selecting a framework, consider your team's experience, the project's requirements, performance needs, and long-term maintenance. Sometimes, the best choice isn't the most popular or powerful framework, but the one that best matches your specific context.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "2024-03-20",
    readTime: 10,
    category: "Technology",
    categorySlug: "technology",
    author: authors[0]
  },
  {
    id: "5",
    title: "The Psychology of Color in Digital Interfaces",
    slug: "psychology-color-digital-interfaces",
    excerpt: "How different colors affect user perception and behavior, with practical tips for effective color selection in UI design.",
    content: `
      <p>Color is more than just a visual element—it's a powerful tool that can influence emotions, guide attention, and even affect decision-making. Understanding the psychological impact of color is essential for creating effective digital interfaces.</p>
      
      <h2>The Emotional Impact of Colors</h2>
      <p>Different colors evoke different emotional responses. Blues tend to create feelings of trust and security, while reds can evoke excitement or urgency. Yellows often convey optimism, and greens are associated with growth and health.</p>
      
      <h2>Cultural Considerations</h2>
      <p>It's important to remember that color associations can vary significantly across cultures. What represents good fortune in one culture might symbolize mourning in another. For global products, research and testing are crucial.</p>
      
      <h2>Accessibility and Color</h2>
      <p>Approximately 8% of men and 0.5% of women have some form of color vision deficiency. Ensuring sufficient contrast and never relying solely on color to convey important information helps create inclusive designs.</p>
      
      <h2>Practical Color Selection Tips</h2>
      <ul>
        <li>Start with your brand colors as a foundation</li>
        <li>Use color purposefully to direct attention to key actions</li>
        <li>Create a systematic color palette with clear roles for each color</li>
        <li>Test your color scheme under different lighting conditions and devices</li>
      </ul>
      
      <h2>Building an Effective Color System</h2>
      <p>A thoughtful color system goes beyond primary brand colors to include functional colors for feedback, status indicators, and hierarchy. This systematic approach ensures consistency and reduces decision fatigue during the design process.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "2024-03-15",
    readTime: 7,
    category: "Design",
    categorySlug: "design",
    author: authors[1]
  },
  {
    id: "6",
    title: "Financial Planning for Freelancers",
    slug: "financial-planning-freelancers",
    excerpt: "Essential strategies for managing irregular income, saving for taxes, and building financial stability as a self-employed professional.",
    content: `
      <p>Freelancing offers incredible freedom and flexibility, but it also comes with unique financial challenges. Without the stability of a regular paycheck and employer benefits, freelancers need to be especially proactive about their financial planning.</p>
      
      <h2>Managing Irregular Income</h2>
      <p>One of the biggest challenges for freelancers is dealing with income that fluctuates from month to month. Creating a budget based on your lowest earning months rather than your averages can help ensure you can always cover essentials.</p>
      
      <h2>The Tax Challenge</h2>
      <p>As a freelancer, you're responsible for calculating and paying your own taxes, typically through quarterly estimated tax payments. Setting aside 25-30% of each payment you receive in a separate account can prevent tax-time surprises.</p>
      
      <h2>Building Your Safety Net</h2>
      <p>Financial experts typically recommend that employees have 3-6 months of expenses saved in an emergency fund. For freelancers with variable income, aiming for 6-12 months provides better security during slow periods or when dealing with late-paying clients.</p>
      
      <h2>Retirement Planning Without an Employer</h2>
      <p>Without access to employer-sponsored retirement plans, freelancers need to set up their own retirement savings. Options like Solo 401(k)s, SEP IRAs, and Roth IRAs offer tax advantages that can help self-employed individuals prepare for the future.</p>
      
      <h2>Separating Business and Personal</h2>
      <p>Maintaining separate business and personal accounts not only simplifies tax preparation but also gives you a clearer picture of your business's financial health and makes it easier to track deductible expenses.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "2024-03-08",
    readTime: 9,
    category: "Business",
    categorySlug: "business",
    author: authors[3]
  }
];
