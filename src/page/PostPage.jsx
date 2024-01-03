import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { formatDate } from "../libs/formaters";
import remarkGfm from "remark-gfm";
import { LayoutBlog } from "../layout/LayoutBlog";
import { PostContext } from "../context/PostsContext";
import styles from "../css/PostPage.module.css";

export const PostPage = () => {
  const { getPost } = useContext(PostContext);
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setLoading(false);
    };
    fetchPost();
  }, [getPost, id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
      </div>
    );
  }

  return (
    <div>
      <LayoutBlog>
        <div className={styles["markdown-content"]}>
          <h2 className="text-6xl tracking-wider font-bold text-center">{post.title}</h2>
          <p className="text-left ml-2 mt-8 text-gray-500">
            {formatDate(post.createdAt)}
          </p>
          <hr className="mt-4 mb-8" />
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </LayoutBlog>
    </div>
  );
};
