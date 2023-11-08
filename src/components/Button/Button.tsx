"use client";

// Library imports
import Image from "next/image";
import { useDispatch } from "react-redux";

// CSS imports
import style from "@/components/Button/Button.module.scss";

// Redux imports
import { addCard } from "@/redux/slices/cardSlice";

// Assets
import addImage from "../../../public/assets/Images/Icons/add.svg";

interface ButtonElements {
  children: string;
}

export default function Button({ children }: ButtonElements) {
  // Hooks
  const cardDispatch = useDispatch();

  /////////////////////// Return Method ///////////////////////

  return (
    <button
      className={`${style.btnOfButton} btnOfButton`}
      onClick={() => cardDispatch(addCard())}
    >
      <Image
        className={`${style.addImageOfButton} addImageOfButton`}
        src={addImage}
        alt="add-image"
      />
      <p className={`${style.textOfButton} textOfButton`}>{children}</p>
    </button>
  );
}
