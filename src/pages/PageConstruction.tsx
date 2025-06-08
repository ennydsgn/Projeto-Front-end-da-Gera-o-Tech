import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./Layout";
import page from "../assets/page-gray.gif";

export default function PageInConstruction() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRedirect = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return (
    <Layout>
      <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-pulse">
          ⚠ Página em construção ⚠
        </h1>
        <img
          src={page}
          alt="Página em construção"
          className="w-full max-w-md mb-8 drop-shadow-md"
        />
        <button
          onClick={handleRedirect}
          className="px-6 py-3 bg-primary text-light-gray-3 rounded-lg font-semibold transition-all hover:bg-error hover:scale-105 focus:outline-none focus:ring-2 focus:ring-error"
        >
          Voltar para a Home
        </button>
      </section>
    </Layout>
  );
}