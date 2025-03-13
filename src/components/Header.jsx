import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { itemContext } from '../context/ItemContext';

const Header = () => {
    const { itemsInCart, totalPrice } = useContext(itemContext);

    return (
        <div className="header">
            <h1 className="gfg">GFG Fruit & Vegetable Market</h1>

            <div className="cart-section">
                <h3 className="total-price">Total Price: ₹{totalPrice}</h3>

                <div className="cart-num">
                    <FontAwesomeIcon icon={faCartShopping} size="2x" />
                    <div className="cart-items">{itemsInCart}</div>
                </div>

                <button className="buy-now-btn">Buy Now</button>
            </div>
        </div>
    );
};

export default Header;
