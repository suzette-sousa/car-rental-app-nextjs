import { CustomButtonProps } from "@/types";
import Image from "next/image";

const Button = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default Button;
