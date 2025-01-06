"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowClockwise } from "@phosphor-icons/react";
import { DrawFormData, DrawFormSchema } from "@/types/types";
import { FormField } from "./FormField";

interface DrawFormProps {
  onSubmit: (data: DrawFormData) => void;
  hasResults: boolean;
}

export function DrawForm({ onSubmit, hasResults }: DrawFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DrawFormData>({
    resolver: zodResolver(DrawFormSchema),
    defaultValues: {
      quantity: 1,
      from: 1,
      to: 100
    }
  });

  return (
    <form 
      className="flex w-[500px] max-sm:w-full flex-col gap-8 items-center max-sm:px-"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-5xl max-sm:text-3xl font-bold leading-tight mb-5 text-white">
        Sorteador de números. 🎰
      </h1>
      
      <div className="flex gap-4">
        <FormField
          label="Número(s)"
          error={errors.quantity?.message}
          {...register("quantity", { valueAsNumber: true })}
        />
        <FormField
          label="De"
          error={errors.from?.message}
          {...register("from", { valueAsNumber: true })}
        />
        <FormField
          label="Até"
          error={errors.to?.message}
          {...register("to", { valueAsNumber: true })}
        />
      </div>

      <Button type="submit" className="w-full h-[56px] bg-[#24222E] hover:bg-[#1d1b25]">
        {hasResults ? "Sortear novamente" : "Sortear"}
        {hasResults ? (
          <ArrowClockwise className="w-6 h-6 ml-2" />
        ) : (
          <ArrowRight className="w-6 h-6 ml-2" />
        )}
      </Button>
    </form>
  );
}