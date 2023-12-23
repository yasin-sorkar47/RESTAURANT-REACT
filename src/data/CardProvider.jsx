import React, { useState } from "react";
import CardContext from "./CardContext";
import { CardData } from "../sections/Card/data";

function CardProvider(props) {
  let [items, setItems] = useState([]);
  let [itemsData, setItemsData] = useState(CardData);
  //Add to Card Handler
  let addToCard = (item) => {
    let updateItem = items;

    let existData = items.find((data) => {
      return data.id == item.id;
    });

    if (!existData) {
      updateItem = [...items, item];
      setItems(updateItem);
    }
  };

  //Update To Card
  let updateToCard = (id, amount) => {
    let updateCard = items.map((item) => {
      if (id == item.id) {
        return {
          ...item,
          amount: amount,
          total: function () {
            return this.price * this.amount;
          },
        };
      } else {
        return item;
      }
    });

    setItems(updateCard);
  };

  //Remove to Card Handler
  let removeItems = (item) => {
    let remove = items.filter((data) => {
      return data.id != item.id;
    });

    setItems(remove);
  };

  let updateItemsData = (data) => {
    setItemsData(data);
  };

  //Clear To Card
  let clearItem = (items) => {
    setItems([]);

    let updateItemsData = itemsData.map((updateItem) => {
      return {
        ...updateItem,
        active: false,
      };
    });

    setItemsData(updateItemsData);
  };

  //Total Amount
  let totalAmount = () => {
    let itemList = items.map((item) => {
      return item.total();
    });

    let finalAmount = itemList.reduce((prev, current) => {
      return prev + current;
    }, 0);

    return finalAmount;
  };

  let CardContextValues = {
    items: items,
    itemsData: itemsData,
    updateItemsData: updateItemsData,
    totalAmount: totalAmount,
    addToCard: addToCard,
    updateToCard: updateToCard,
    removeItems: removeItems,
    clearItem: clearItem,
  };

  return (
    <CardContext.Provider value={CardContextValues}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardProvider;
