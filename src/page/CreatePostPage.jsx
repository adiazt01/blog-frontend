import { useForm } from "react-hook-form";
import { LayoutCMS } from "../layout/LayoutCMS";
import { AdminContext } from "../context/AdminContext";
import { useContext } from "react";

export const CreatePostPage = () => {
  const { register, handleSubmit } = useForm();
  const { createPost } = useContext(AdminContext);

  const onSubmit = (data) => {
    createPost(data)
  };

  const handleInput = (e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <LayoutCMS>
      <div className="border border-zinc-200 shadow">
        <div className="p-8">
          <h1 className="text-zinc-900 text-2xl font-semibold">Create Post</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col p-8">
            <label htmlFor="title" className="text-zinc-900 font-semibold">
              Title
            </label>
            <input
              type="text"
              {...register("title")}
              id="title"
              className="border mt-2 border-zinc-200 rounded-sm p-2"
            />
          </div>
          <div className="flex flex-col p-8">
            <label htmlFor="content" className="text-zinc-900 font-semibold">
              Content
            </label>
            <textarea
              name="content"
              id="content"
              {...register("content")}
              cols="30"
              onChange={handleInput}
              className="border mt-2 border-zinc-200 rounded-sm p-2"
            ></textarea>
          </div>
          <div className="flex flex-col p-8">
            <label htmlFor="tags" className="text-zinc-900 font-semibold">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              {...register("tags")}
              className="border mt-2 border-zinc-200 rounded-sm p-2"
            />
          </div>
          <div className="flex flex-col p-8">
            <button className="bg-green-900 text-white font-semibold rounded-sm p-2">
              Create post
            </button>
          </div>
        </form>
      </div>
    </LayoutCMS>
  );
};
