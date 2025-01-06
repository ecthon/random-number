import { InputHTMLAttributes, forwardRef } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col items-center gap-2 justify-center rounded-lg w-full">
        <p className="font-bold uppercase text-zinc-500">{label}</p>
        <input
          ref={ref}
          className="flex text-center text-white font-bold ring-0 focus:ring-0 focus:outline-none text-4xl max-sm:text-3xl items-center justify-center w-full h-[56px] rounded-lg border-none bg-[#111012]"
          {...props}
        />
        {/* {error && <span className="text-red-500 text-[11px]">{error}</span>} */}
      </div>
    );
  }
);

FormField.displayName = "FormField";