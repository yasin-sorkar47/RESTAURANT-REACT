import React, { useContext } from 'react'
import { FaPlus, FaMinus  } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { createPortal } from 'react-dom';
import CardContext from '../../data/CardContext';

function Modal() {
    let modalDiv = document.getElementById('modal');

    let CardCnt = useContext(CardContext)

    let price = (n) => {
    return n.toFixed(2);
    }

    let plusHandler = (id, n) => {
        let amount = n + 1;
        let maxNumber = amount <= 20 ? amount : 20;
        CardCnt.updateToCard(id, maxNumber)
    }

    let minusHandler = (id , n) => {
        let amount = n - 1;
        let minNumber = amount >= 0 ? amount : 0 
        CardCnt.updateToCard(id, minNumber) 
    }

    let removeItems = (item) => {
        CardCnt.removeItems(item)

        let activeData = item.id;

        let updateItem = CardCnt.itemsData.map(updateItem => {
          if(updateItem.id == activeData){
            return {
              ...updateItem,
              active: false
            }
          }else{
            return updateItem;
          }
        })
  
        CardCnt.updateItemsData(updateItem);
    }

    let clearItem = (items) => {
        CardCnt.clearItem(items)
    }

  return (
    <>
    {createPortal(<div className="modal fade cart-modal" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h3 className="text-center">Your Cart Items</h3>
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody id="table-item-body">
                              {CardCnt.items.length == 0 ?
                                    <tr>
                                    <td colSpan={6}>
                                        <p className="p-2 text-center mb-0">No Data Found 😢😢</p>
                                    </td>
                                    </tr>
                                    :
                                    CardCnt.items.map((item, index) => {
                                    return  <tr key={index}>
                                        <th>
                                            <img src={item.src} alt={item.alt} />
                                        </th>
                                        <td>
                                            <span>{item.title}</span>
                                        </td>
                                        <td>
                                            <span>${price(item.price)}</span>
                                        </td>
                                        <td>
                                            <div className="amount-area">
                                                <span className="amount">
                                                    {item.amount}
                                                </span>
                                                <span className="plus"
                                                onClick={() => {plusHandler(
                                                    item.id,
                                                    item.amount
                                                )}}
                                                 >
                                                <FaPlus />
                                                </span>
                                                <span className="minus"
                                                onClick={() => {minusHandler(
                                                    item.id,
                                                    item.amount
                                                )}}
                                                >
                                                    <FaMinus />
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span>${price(item.total())}</span>
                                        </td>
                                        <td>
                                            <div className="action">
                                            <RiDeleteBin6Line onClick={() => {removeItems(item)}} />
                                            </div>
                                        </td>
                                            </tr>
                                    })
                                   
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="modal-footer">
                    <h3 className="w-100 text-end pb-3">Total Amount: $<span id="final_total">{CardCnt.totalAmount().toFixed(2)}</span></h3>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Checkout</button>
                    <button id="clear_cart" type="button" onClick={() => {clearItem(CardCnt.items)}} className="btn btn-primary">Clear</button>
                </div>
            </div>
        </div>
    </div>  ,modalDiv)}
    </>
  )
}

export default Modal