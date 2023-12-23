import React, { useContext, useState } from "react";
import CardItem from "./CardItem";
import CardContext from "../../data/CardContext";

function Card() {
  let CardCnt = useContext(CardContext);

  let addToCardHandler = (item) => {
    CardCnt.addToCard({
      ...item,
      amount: 1,
      total: function () {
        return this.price * this.amount;
      },
    });

    let activeData = item.id;

    let updateItem = CardCnt.itemsData.map((updateItem) => {
      if (updateItem.id == activeData) {
        return {
          ...updateItem,
          active: true,
        };
      } else {
        return updateItem;
      }
    });
    CardCnt.updateItemsData(updateItem);
  };

  return (
    <>
      {CardCnt.itemsData.map((item, index) => {
        return (
          <CardItem
            key={index}
            id={item.id}
            src={item.src}
            alt={item.alt}
            title={item.title}
            price={item.price}
            ratting={item.ratting}
            onClick={addToCardHandler}
            active={item.active}
          />
        );
      })}
    </>
  );
}

export default Card;
