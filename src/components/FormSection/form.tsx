"use client";
import InputMask from "react-input-mask";
import { TextInput } from "../TextInput";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email({ message: "O email inserido não é válido." }),
  name: z
    .string({ required_error: "O nome deve ter no mínimo 3 caracteres." })
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres." }),
  company: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, { message: "Campo obrigatório" }),
  phone: z
    .string({
      required_error:
        "O número de telefone deve estar no formato (99) 99999-9999",
    })
    .min(1, "O telefone é obrigatório")
    .refine((value) => {
      const numberWithoutMask = value.replace(/\D/g, "");
      return numberWithoutMask.length === 11;
    }, "Telefone inválido")
    .transform((value) => {
      return value.replace(/\D/g, "");
    }),
});

type FormSchema = z.infer<typeof formSchema>;

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  async function handleContatForm(data: FormSchema) {
    try {
      await console.log(data);
    } catch (error: any) {}
  }

  return (
    <div className=" bg-white rounded-lg shadow-md p-10 max-w-md">
      <h1 className="font-bold text-2xl mb-10 text-indigo-700">
        Informe seus dados para falar com um especialista:
      </h1>
      <div>
        <form
          onSubmit={handleSubmit(handleContatForm)}
          className=" flex flex-col gap-4 "
        >
          <TextInput
            label="Nome:"
            placeholder="Digite seu nome"
            {...register("name")}
            error={errors.name?.message}
          />
          <TextInput
            label="E-mail:"
            placeholder="Digite seu email"
            {...register("email")}
            error={errors.email?.message}
          />
          <TextInput
            label="Empresa:"
            placeholder="Digite o nome da empresa"
            {...register("company")}
            error={errors.company?.message}
          />

          <InputMask mask="(99) 99999-9999" {...register("phone")}>
            {(inputProps) => (
              <TextInput
                type="tel"
                label="Telefone:"
                placeholder="Digite seu telefone"
                error={errors.phone?.message}
                {...register("phone")}
                {...inputProps}
              />
            )}
          </InputMask>

          <button
            type="submit"
            disabled={isSubmitting}
            className="text-sm md:text-base uppercase mt-10 col-span-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded disabled:bg-indigo-200"
          >
            Fale com um especialista
          </button>
        </form>
      </div>
    </div>
  );
}
