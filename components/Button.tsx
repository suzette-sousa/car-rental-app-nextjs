import { CustomButtonProps } from "@/types";
import Image from "next/image";

export default function Button({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
}
