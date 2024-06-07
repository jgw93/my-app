import React from "react";
import "./EmotionItem.css";

const EmotiomItem=({id, img, name, onClick, isSelected})=>{
    const handleOnClick=()=>{
        onClick(id);
    }
    return(
        <div className={["EmotionItem", 
            isSelected? `EmotionItem_on_${id}`:`EmotionItem_off`,].join(" ")} 
            onClick={handleOnClick}>
            <img alt={`emotion${id}`} src={img} />
             <span>{name}</span>
        </div>
        // <div className="EmotionItem" onClick={handleOnClick}>
        //     <img alt={`emotion${id}`} src={img} />
        //     <span>{name}</span>
        // </div>
    );
};
export default EmotiomItem;