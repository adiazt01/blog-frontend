import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginCms = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const { login, authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { username, password } = data;
    login(username, password);
  };

  useEffect(() => {
    if (authenticated) {
      navigate("/admin");
    }
  }, [authenticated]);

  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
      <div className="border border-zinc-300 rounded shadow-xl w-3/5 px-8 py-8">
        <h2 className="text-2xl text-zinc-900 font-bold">Login</h2>
        <p className="text-zinc-600">
          Enter your admin username and password to login
        </p>
        <form
          className="mt-8 flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="border border-zinc-300 rounded shadow-sm w-full h-10 px-2 mt-2"
              {...register("username")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border border-zinc-300 rounded shadow-sm w-full h-10 px-2 mt-2"
              {...register("password")}
            />
          </div>
          <button
            className="mt-12 text-white font-medium shadow py-2 w-3/4 m-auto border rounded-full bg-emerald-700 text-xl"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
