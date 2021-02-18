import React, { useEffect, useState } from "react";
import s from "./Carousele.module.css";
import Panel from "../Panel/Panel";
import { initialData } from "../../data";
import {
    setItemToStorage,
    getItemFromStorage,
} from "../../hooks/useLocalStorage";

const Carousele = () => {
    const dataFromStorage = JSON.parse(getItemFromStorage("data"));
    const [data, setData] = useState(dataFromStorage || initialData);
    const [translate, setTranslate] = useState(0);
    const [navigator, setNavigator] = useState(0);

    const scrollLeft = () => {
        if (translate > 0 && navigator > 0) {
            setTranslate((prev) => prev - 100);
            setNavigator((prev) => prev - 1);
        }
    };

    const scrollRight = () => {
        if (navigator < data.length - 1) {
            setTranslate((prev) => prev + 100);
            setNavigator((prev) => prev + 1);
        }
    };

    const increaseLikeCount = () => {
        let items = [...data];
        let item = { ...items[navigator] };
        item.likes = item.likes + 1;
        item.isLiked = true;
        items[navigator] = item;
        setData(items);
    };

    const decreaseLikeCount = () => {
        let items = [...data];
        let item = { ...items[navigator] };
        if (item.likes > 0) {
            item.likes = item.likes - 1;
            item.isLiked = false;
        }
        items[navigator] = item;
        setData(items);
    };

    const panelProps = data[navigator];
    const actionsProps = {
        quantity: data.length - 1,
        addLike: increaseLikeCount,
        removeLike: decreaseLikeCount,
        goLeft: scrollLeft,
        goRight: scrollRight,
    };

    useEffect(() => {
        const stringifiedData = JSON.stringify(data);
        setItemToStorage("data", stringifiedData);
    }, [data]);

    return (
        <div className={s.container}>
            <div
                className={s.wrapper}
                style={{ transform: `translateX(-${translate}%)` }}
            >
                {data.map((item) => (
                    <div className={s.item} key={item.id}>
                        <img
                            className={s.image}
                            src={item.image}
                            alt="Warsaw"
                        />
                    </div>
                ))}
            </div>
            <Panel {...panelProps} {...actionsProps} />
        </div>
    );
};

export default Carousele;
