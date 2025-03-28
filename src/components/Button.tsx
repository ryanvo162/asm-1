interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button
      type="button"
      className="w-full py-[10px] px-5 bg-[#FFCE22] hover:bg-[#FFD84D] transition-colors duration-200 text-[14px] text-black rounded"
    >
      {label}
    </button>
  );
};

export default Button;
