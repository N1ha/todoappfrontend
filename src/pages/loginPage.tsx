import { useForm } from "react-hook-form";
import { API } from "../constants/ApiUrl";
import Header from "../components/Header";
import Footer from "../components/Footer";

type loginInput = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<loginInput>();

  const submitHandler = (data: loginInput) => {
    fetch(API.login, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((response) => console.log(response));
  };

  return (
    <>
    <Header/>
    <main className="flex h-screen flex-col items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            name="username"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Login
        </button>
      </form>
    </div>
    </main>
    <Footer/>
    </>
  );
};

export default LoginPage;
