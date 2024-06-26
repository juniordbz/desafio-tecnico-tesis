import { Card } from "./card";

export function SectionServices() {
  return (
    <div className="flex flex-col bg-indigo-50 my-16 md:px-20 px-5 pb-20 ">
      <h1 className=" -mt-5 uppercase  text-3xl text-center mb-28 text-indigo-700 font-bold">
        Serviços
      </h1>
      <div className="grid gap-24 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          label="1"
          content="Prover suporte para a avaliação de novos produtos e tecnologias"
        />
        <Card
          label="2"
          content="Reduzir riscos na utilização de novos produtos e tecnologias"
        />
        <Card
          label="3"
          content="Orientar o mercado na escolha de novos produtos e tecnologias"
        />
        <Card
          label="4"
          content="Estimular o processo de inovação tecnológica"
        />
        <Card
          label="5"
          content="Buscar a concessão de uma aprovação técnica, com base em um documento de avaliação técnica"
        />
      </div>
      <div className="w-full flex justify-center -mb-28">
        <a
          href="#form"
          className=" text-center bg-amber-400 mt-20 rounded-lg p-4 w-80 text-xl text-indigo-700 font-bold"
        >
          Fale com um especialista
        </a>
      </div>
    </div>
  );
}
