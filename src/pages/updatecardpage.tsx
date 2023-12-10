import Footer from "../components/Footer";
import Header from "../components/Header";
import UpdateCard from "../components/updatecard";

const UpdateCardPage = () => {
 return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen items-center">
        <UpdateCard/>
      </main>
      <Footer />
    </>
  );
};

export default UpdateCardPage;