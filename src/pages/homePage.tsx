import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex h-screen flex-col items-center justify-center">
        <p className="font-bold text-6xl p-8">Login or Signup to continue</p>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
            Login
          </button>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 ease-in-out">
            Signup
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
