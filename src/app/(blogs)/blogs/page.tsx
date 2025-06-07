// import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid3X3, LayoutGrid, List } from "lucide-react"
import BlogCard from "@/components/shared/blog-card"
import { blogs } from "@/lib/blogs"

// This would typically come from a CMS or database
// const blogPosts = [
//   {
//     id: 1,
//     title: "7 ways to optimize your robotics project for efficiency",
//     excerpt: "Learn the professional techniques to make your robotics projects more efficient and reliable.",
//     image: "https://i.ibb.co/LXXQs1x2/6-17.webp",
//     category: "Tips & Tricks",
//     date: "March 15, 2025",
//     slug: "optimize-robotics-project-efficiency",
//   },
//   {
//     id: 2,
//     title: "Inside a professional robotics lab: Organization tips",
//     excerpt: "Discover how professional robotics labs organize their workspace for maximum productivity.",
//     image: "https://i.ibb.co/LXXQs1x2/6-17.webp",
//     category: "Workspace",
//     date: "March 10, 2025",
//     slug: "inside-professional-robotics-lab",
//   },
//   {
//     id: 3,
//     title: "Design your first autonomous robot: A beginner's guide",
//     excerpt: "A step-by-step guide to designing and building your first autonomous robot from scratch.",
//     image: "https://i.ibb.co/LXXQs1x2/6-17.webp",
//     category: "Tutorials",
//     date: "March 5, 2025",
//     slug: "design-first-autonomous-robot",
//   },
//   {
//     id: 4,
//     title: "Modern sensor technology is revolutionizing robotics",
//     excerpt: "How the latest sensor technologies are changing what's possible in robotics projects.",
//     image: "https://i.ibb.co/LXXQs1x2/6-17.webp",
//     category: "Technology",
//     date: "February 28, 2025",
//     slug: "modern-sensor-technology",
//   },
//   {
//     id: 5,
//     title: "AI integration in robotics: What you need to know",
//     excerpt: "The essential guide to integrating artificial intelligence into your robotics projects.",
//     image: "https://i.ibb.co/LXXQs1x2/6-17.webp",
//     category: "AI & Robotics",
//     date: "February 20, 2025",
//     slug: "ai-integration-robotics",
//   },
//   {
//     id: 6,
//     title: "Building robots for educational purposes: Best practices",
//     excerpt: "How to create effective educational robots that help students learn STEM concepts.",
//     image: "https://i.ibb.co/LXXQs1x2/6-17.webp",
//     category: "Education",
//     date: "February 15, 2025",
//     slug: "educational-robotics-best-practices",
//   },
//   {
//     id: 7,
//     title: "The future of home robotics: Trends to watch",
//     excerpt: "Emerging trends that will shape the next generation of home robotics and automation.",
//     image: "https://i.ibb.co/LXXQs1x2/6-17.webp",
//     category: "Trends",
//     date: "February 10, 2025",
//     slug: "future-home-robotics-trends",
//   },
//   {
//     id: 8,
//     title: "Robotics competitions: How to prepare and win",
//     excerpt: "Expert strategies for preparing your team and robot for competitive robotics events.",
//     image: "https://i.ibb.co/LXXQs1x2/6-17.webp",
//     category: "Competitions",
//     date: "February 5, 2025",
//     slug: "robotics-competitions-preparation",
//   },
//   {
//     id: 9,
//     title: "Sustainable practices in robotics engineering",
//     excerpt: "How to incorporate eco-friendly approaches in your robotics projects and reduce environmental impact.",
//     image: "https://i.ibb.co/LXXQs1x2/6-17.webp",
//     category: "Sustainability",
//     date: "January 30, 2025",
//     slug: "sustainable-robotics-engineering",
//   },
// ]

export default function BlogsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 border-b">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/80"></div>

        <div className="container relative mx-auto text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Latest news and design inspiration from the world of robotics
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b pb-4">
            <div className="flex items-center gap-2">
              <Link href="/blogs" className="text-sm font-medium hover:text-primary transition-colors">
                All Blog
              </Link>
              <Link
                href="/blogs/featured"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Featured
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <span className="text-sm mr-2">Sort by:</span>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[140px] h-9">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-none rounded-l-md">
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-none">
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-none rounded-r-md">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center">
            <Button variant="outline">Show more</Button>
          </div>
        </div>
      </section>
      
    </main>
  )
}
