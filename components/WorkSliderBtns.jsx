"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSlidesBtns = ({containerStyles, bntStyles, iconsStyles}) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button className={bntStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold />
            </button>
            <button className={bntStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyles}/>
            </button>
        </div>
    );
}
export default WorkSlidesBtns