import AddCard from "../components/AddCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AddCardPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen items-center">
        <AddCard />
      </main>
      <Footer />
    </>
  );
};

export default AddCardPage;
