import React from "react";

const Button = () => {
  return (
    <div className="w-full border-t border-zinc-600 flex items-center gap-5">
      <button className="mt-20 px-12 py-6 rounded-full border border-zinc-600 text-lg text-white font-semibold">
        info@dennissnellenberg.com
      </button>
      <button className="mt-20 px-12 py-6 rounded-full border border-zinc-600 text-lg text-white font-semibold">
        +91 87374 88792
      </button>
    </div>
  );
};

export default Button;
