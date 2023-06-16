import React, { useRef } from "react";
// import Images from ''
function Counter() {
    const myRef = useRef(1);
    const newQtyref = useRef(1)
    const priceRef = useRef(549);
    const newPriceRef = useRef(870)
    // console.log(parseInt(priceRef.current.innerHTML));
    const handleIncrement = () => {
        myRef.current.innerHTML = parseInt(myRef.current.innerHTML) + 1;
        priceRef.current.innerHTML = parseInt(priceRef.current.innerHTML) + 549;
    };
    const handleDecrement = () => {
            myRef.current.innerHTML = parseInt(myRef.current.innerHTML) - 1;
            priceRef.current.innerHTML = parseInt(priceRef.current.innerHTML) - 549;
    }
    const handleNewIncrement = () => {
        newQtyref.current.innerHTML = parseInt(newQtyref.current.innerHTML) + 1;
        newPriceRef.current.innerHTML = parseInt(newPriceRef.current.innerHTML) + 870;
    };
    const handleNewDecrement = () => {
        newQtyref.current.innerHTML = parseInt(newQtyref.current.innerHTML) - 1;
        newPriceRef.current.innerHTML = parseInt(newPriceRef.current.innerHTML) - 870;
    };
    return (
        <div className="cart-page">
            <div className="shopping-cart">
                <h1 className="title">Shopping Bag</h1>
                <div className="item">
                    <div className="buttons">
                        <span className="delete-btn"></span>
                        <span className="like-btn"></span>
                    </div>
                    <div className="image">
                        <div className="img"></div>
                    </div>
                    <div className="description">
                        <span>Common Projects</span>
                        <span>Bball High</span>
                        <span>White</span>
                    </div>
                    <div className="quantity">
                        <button
                            className="plus-btn"
                            type="button"
                            onClick={handleIncrement}
                        >
                            INc
                        </button>
                        <p ref={myRef}>{myRef.current}</p>
                        <button
                            className="plus-btn"
                            type="button"
                            onClick={handleDecrement}
                        >
                            Dec
                        </button>
                    </div>
                    <div className="total-price" ref={priceRef}>{priceRef.current}</div>
                </div>
                <div className="item">
                    <div className="buttons">
                        <span className="delete-btn"></span>
                        <span className="like-btn"></span>
                    </div>
                    <div className="image">
                        <div className="img"></div>
                    </div>
                    <div className="description">
                        <span>Maison Margiela</span>
                        <span>Future Sneakers</span>
                        <span>White</span>
                    </div>
                    <div className="quantity">
                        <button className="plus-btn" type="button" name="button" onClick={handleNewIncrement}>
                            Inc
                        </button>
                        <p ref={newQtyref}>{newQtyref.current}</p>
                        <button className="minus-btn" type="button" name="button" onClick={handleNewDecrement}>
                            Dec
                        </button>
                    </div>
                    <div className="total-price" ref={newPriceRef}>{newPriceRef.current}</div>
                </div>
            </div>
        </div>
    );
}

export default Counter;
