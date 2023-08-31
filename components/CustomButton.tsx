"use client";

import Image from "next/image";
import { CustomButtonProps } from "@types";

const Button = ({ containerStyles, title, handleClick }: CustomButtonProps) => (
  <button
    disabled={false}
    type={"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1`}>{title}</span>
  </button>
);

export default Button;