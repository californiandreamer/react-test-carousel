import React from "react";
import s from "./Panel.module.css";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import minusImg from "../../assets/icons/minus.svg";
import plusImg from "../../assets/icons/plus.svg";
import heartEmpty from "../../assets/icons/heart-empty.png";
import heartFilled from "../../assets/icons/heart-filled.png";

const Panel = ({
    id,
    title,
    description,
    isLiked,
    likes,
    quantity,
    addLike,
    removeLike,
    goLeft,
    goRight,
}) => {
    return (
        <div className={s.container}>
            <button
                className={s.button}
                onClick={goLeft}
                disabled={id === 0 ? true : false}
            >
                <img className={s.buttonImg} src={arrowLeft} alt="left" />
            </button>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <div className={s.title}>{title}</div>
                    <div className={s.description}>{description}</div>
                </div>
                <div className={s.likes}>
                    <button className={s.likesButton} onClick={removeLike}>
                        <img
                            className={s.likesButtonImg}
                            src={minusImg}
                            alt="minus"
                        />
                    </button>
                    <button className={s.heartButton}>
                        <img
                            className={s.heartButtonImg}
                            src={isLiked ? heartFilled : heartEmpty}
                            alt="like"
                        />
                        <span
                            className={
                                isLiked ? s.likesCount : s.likesCountWhite
                            }
                        >
                            {likes}
                        </span>
                    </button>
                    <button className={s.likesButton} onClick={addLike}>
                        <img
                            className={s.likesButtonImg}
                            src={plusImg}
                            alt="plus"
                        />
                    </button>
                </div>
            </div>
            <button
                className={s.button}
                onClick={goRight}
                disabled={id === quantity ? true : false}
            >
                <img className={s.buttonImg} src={arrowRight} alt="right" />
            </button>
        </div>
    );
};

export default Panel;
