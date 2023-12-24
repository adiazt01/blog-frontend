import { useContext } from "react";
import { PostContext } from "../context/PostsContext";
import { LayoutBlog } from "../layout/LayoutBlog";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
};

export const Home = () => {
  const { blogs } = useContext(PostContext);
  return (
    <LayoutBlog>
      <div className="grid my-auto px-2 items-center grid-cols-1 gap-4 w-full">
        {blogs && blogs.length === 0 && (
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg py-4 px-6">
            <h2 className="text-2xl font-bold my-2">No blogs found</h2>
            <p className="text-gray-500 text-sm my-2">
              Please try again later.
            </p>
          </div>
        )}
        {blogs && blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg py-4 px-6"
          >
            <img
              className="h-48 w-full object-cover"
              src={blog.image}
              alt={blog.title}
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold my-2">{blog.title}</h2>
              <p className="text-gray-500 text-sm my-2">
                {truncateText(blog.body, 100)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </LayoutBlog>
  );
};
