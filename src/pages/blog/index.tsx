import BlogCard from "@/components/blogCard";

const blogPosts = [
  {
    title: "Humilde guia sobre Paleta de Cores",
    content: (
      <div className="flex flex-row justify-evenly w-full h-full rounded-3xl">
        <div className="bg-[#480032] h-full w-2/6"></div>
        <div className="bg-[#DF0054] h-full w-2/6"></div>
        <div className="bg-[#FF8B6A] h-full w-1/6"></div>
        <div className="bg-[#FFD6C2] h-full w-1/6"></div>
      </div>
    ),
    date: "03/04/1998",
  },
];

const Blog = () => {
  return (
    <div className="flex grow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {blogPosts.map((post) => (
          <BlogCard
            routePath="a-humble-guide-to-color-palette"
            key={post.title}
            title={post.title}
            content={post.content}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
