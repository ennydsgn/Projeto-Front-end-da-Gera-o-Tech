import Layout from "./Layout";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import FilterProduct from "../components/FilterProduct";
import { CiFilter } from "react-icons/ci";
import { useState } from "react";

export default function ProductPage() {
    const [showMobileFilter, setShowMobileFilter] = useState(false);

    const toggleFilter = () => setShowMobileFilter(prev => !prev);

    const filterGroups = [
        {
            title: "Marca",
            type: "checkbox",
            options: [
                { text: 'Adidas', value: 'adidas' },
                { text: 'Balenciaga', value: 'balenciaga' },
                { text: 'K-Swiss', value: 'K-Swiss' },
                { text: 'Nike', value: 'Nike' },
                { text: 'Puma', value: 'Puma' },
            ],
        },
        {
            title: "Gênero",
            type: "checkbox",
            options: [
                { text: 'Masculino', value: 'Masculino' },
                { text: 'Feminino', value: 'Feminino' },
                { text: 'Unisex', value: 'Unisex' },
            ],
        },
        {
            title: "Categoria",
            type: "checkbox",
            options: [
                { text: 'Esporte e lazer', value: 'Esporte e lazer' },
                { text: 'Casual', value: 'Casual' },
                { text: 'Utilitário', value: 'Utilitário' },
                { text: 'Corrida', value: 'Corrida' },
            ],
        },
        {
            title: "Condição",
            type: "radio",
            options: [
                { text: 'Novo', value: 'Novo' },
                { text: 'Usado', value: 'Usado' },
            ],
        },
    ];

    const SidebarFilters = () => (
        <div className="bg-white h-fit px-5 py-6 rounded-lg shadow-md w-[260px]">
            <h2 className="text-base font-bold text-dark-gray-2 mb-4">Filtrar por</h2>
            <hr className="mb-5 bg-light-gray-2" />
            {filterGroups.map((group, idx) => (
                <FilterGroup
                    key={idx}
                    title={group.title}
                    inputType={group.type}
                    options={group.options}
                />
            ))}
        </div>
    );

    return (
        <Layout>
            <Section className="bg-light-gray-3 pt-20 md:pt-0">
                {/* Cabeçalho */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 py-6 md:py-14">
                    <p className="text-base text-dark-gray-2">
                        <span className="font-bold">Resultados para "Tênis"</span>
                    </p>
                    <div className="flex items-center gap-2">
                        <FilterProduct />
                        <button
                            onClick={toggleFilter}
                            className="bg-primary p-2 rounded-md md:hidden"
                            aria-label="Abrir filtros"
                        >
                            <CiFilter size={28} className="text-white" />
                        </button>
                    </div>
                </div>

                {/* Conteúdo principal */}
                <div className="flex md:gap-8 px-6 pb-20">
                    {/* Sidebar de filtros (Desktop) */}
                    <div className="hidden md:block">
                        <SidebarFilters />
                    </div>

                    {/* Listagem de produtos */}
                    <ProductListing len={12} />
                </div>

                {/* Filtro mobile - Modal lateral */}
                {showMobileFilter && (
                    <div className="fixed inset-0 z-50 flex justify-start bg-black/50">
                        <div className="bg-white h-full w-3/4 sm:w-2/5 px-6 py-5 overflow-y-auto animate-slide-in">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-base font-bold text-dark-gray-2">Filtrar por</h2>
                                <button
                                    onClick={toggleFilter}
                                    className="text-sm text-error font-semibold"
                                >
                                    Fechar ✕
                                </button>
                            </div>
                            <hr className="mb-5 bg-light-gray-2" />
                            {filterGroups.map((group, idx) => (
                                <FilterGroup
                                    key={idx}
                                    title={group.title}
                                    inputType={group.type}
                                    options={group.options}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </Section>
        </Layout>
    );
}