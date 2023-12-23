import List from './List';
import './style.scss';
import { FaCartArrowDown } from "react-icons/fa";
import { dataList } from './data';
import Modal from '../components/Modal';
import { useContext } from 'react';
import CardContext from '../../data/CardContext';


const Header = () => {

    let CardCnt = useContext(CardContext)

    return (
        <>
        <header className="header">
            <div className="container">
            <div className="header-content">
                <div className="logo">
                <div className="logo2 d-inline">
                    <img  src="public/images/logo192.png" alt="image" />
                </div>
                <img src="public/images/logo.png" alt="logo" />
                </div>
                <nav className="list ms-auto d-none d-lg-block">
                <ul>
                    {dataList.map((item, index) => {
                        return <List label={item.label} url={item.url} key={index}/>
                    })}                    
                </ul>
                </nav>
                <div className="cart ms-auto ms-lg-0 ps-3">
                <div className="icon" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                    <FaCartArrowDown />
                    <span id="cartStatus">{CardCnt.items.length}</span>
                </div>
                </div>
            </div>
            </div>
        </header>
        <Modal />
        </>
    )
}

export default Header