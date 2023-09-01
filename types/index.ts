import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  btnType?: "button" | "submit";
  containerStyles?: string;
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturer {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
