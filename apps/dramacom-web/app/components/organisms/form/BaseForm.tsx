import type { FC, ReactNode } from "react";

interface FormProps {
  title?: string;
  buttonText: string;
  className?: string;
  children: ReactNode;
}

export const Form: FC<FormProps> = ({
  title = "",
  className = "",
  buttonText,
  children,
}) => {
  return (
    <div className={`${className}`}>
      <div className="w-full m-4 flex justify-center">
        <form className="bg-darkgray shadow-md rounded-2xl px-40 pt-6 pb-8 w-4/5">
          <div className="mb-4">
            <h1 className="text-white text-2xl mb-2">{title}</h1>
          </div>
          {children}
          <div className="flex items-center justify-center mt-5">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
