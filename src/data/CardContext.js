import { createContext } from "react"

let CardContext = createContext({
    items: [],
    itemsData: [],
    updateItemsData: (items) => {},
    totalAmount: 0,
    addToCard: (item) => {},
    updateToCard: (id, amount) => {},
    removeItems: (item) => {},
    clearItem: (item) => {}
})

export default CardContext