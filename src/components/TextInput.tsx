import { forwardRef, HTMLAttributes } from "react";

interface ITextInputProps extends HTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
  placeholder: string;
}

export const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[100px,1fr]">
        <label className="text-blue-700 font-medium md:text-base text-sm">
          {label}
        </label>
        <input
          type="text"
          className="placeholder:text-xs w-full rounded-md border border-zinc-300 h-8 px-2 bg-indigo-50"
          ref={ref}
          {...rest}
        />
        {error && <span className="text-red-500 col-span-2">{error}</span>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
