import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "10 Ways Technology is Transforming Indian Schools in 2024",
    excerpt: "Discover how modern ed-tech solutions are reshaping the educational landscape across India.",
    category: "EdTech Trends",
    date: "Jan 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "A Complete Guide to Digital Fee Management for Schools",
    excerpt: "Learn how to streamline your school's fee collection process with digital tools and automation.",
    category: "School Management Tips",
    date: "Jan 10, 2024",
    readTime: "7 min read",
  },
  {
    title: "SchoolYantra Launches Transport Tracking Feature",
    excerpt: "Real-time school bus tracking is now available for all Enterprise plan subscribers.",
    category: "Product Updates",
    date: "Jan 5, 2024",
    readTime: "3 min read",
  },
  {
    title: "How to Improve Parent-Teacher Communication",
    excerpt: "Effective strategies and tools for building stronger connections between parents and teachers.",
    category: "School Management Tips",
    date: "Dec 28, 2023",
    readTime: "6 min read",
  },
  {
    title: "The Future of AI in Education Management",
    excerpt: "Exploring how artificial intelligence can automate routine tasks and provide insights for educators.",
    category: "EdTech Trends",
    date: "Dec 20, 2023",
    readTime: "8 min read",
  },
  {
    title: "SchoolYantra's Year in Review: 2023",
    excerpt: "A look back at our milestones, new features, and the schools we've helped transform this year.",
    category: "Product Updates",
    date: "Dec 15, 2023",
    readTime: "4 min read",
  },
];

const getCategoryStyle = (category: string) => {
  switch (category) {
    case "EdTech Trends":
      return "bg-primary/10 text-primary hover:bg-primary/20";
    case "School Management Tips":
      return "bg-accent/10 text-accent hover:bg-accent/20";
    case "Product Updates":
      return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
    default:
      return "";
  }
};

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="section-padding text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and updates from the world of school management and education technology.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <Card
                  key={i}
                  className="group hover:shadow-md hover:border-primary/20 transition-all cursor-pointer overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                      <span className="text-primary-foreground text-2xl font-bold">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className={getCategoryStyle(post.category)}>
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {post.date}
                      </div>
                      <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
