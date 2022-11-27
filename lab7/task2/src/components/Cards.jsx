import react from "react";
import GoodsCard from "./GoodsCard.jsx";
import { goodsData } from "../CardsData";
import "../App.css";

export default function Cards() {
  return (
    <div className="Cards">
      <div className="inner_cards">
        {goodsData.map((item, index) => (
          <GoodsCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
