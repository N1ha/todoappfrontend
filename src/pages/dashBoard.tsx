import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DashBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/todo/show")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen justify-center">
        <div className="flex flex-row justify-center items-center flex-wrap">
          {data.map((val, idx) => {
            return <Card key={idx} data={val} />;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DashBoard;
