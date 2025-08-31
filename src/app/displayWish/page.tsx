"use client";
import { useSearchParams } from "next/navigation";
import { Doto } from "next/font/google";
import "./display-wish.css";

const doto = Doto({
    subsets: ["latin"],
    weight: "900"
})

const DisplayWish = () => {
    const searchParams = useSearchParams();
    const wish = searchParams.get('wish');

    return (
        <div className="marquee-container">
        <p className={`${doto.className} marquee-text`}>{wish}</p>
        </div>
    )
}

export default DisplayWish;