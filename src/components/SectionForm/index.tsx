import { MoveRight } from "lucide-react";
import { Form } from "./form";

export function SectionForm() {
  return (
    <div className="grid items-center grid-cols-2 w-full bg-gradient-to-b from-indigo-700 to-indigo-900 px-20 py-14">
      <div>
        <h1 className="font-bold text-3xl text-white">
          Desenvolvimento e gestão de <br />
          serviços tecnológicos!
        </h1>
        <div className="text-white font-medium flex flex-col gap-3 mt-10 ">
          <div className="flex gap-1 items-center">
            <MoveRight className="text-emerald-500 size-8" />
            <span>Gestão técnica de Programas Setoriais da Qualidade</span>
          </div>
          <div className="flex gap-1 items-center">
            <MoveRight className="text-emerald-500 size-8" />
            <span>Avaliação de produtos inovadores para construção civil</span>
          </div>
          <div className="flex gap-1 items-center">
            <MoveRight className="text-emerald-500 size-8" />
            <span>Realização de ensaios de materiais de construção</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Form />
      </div>
    </div>
  );
}
