import React, { useEffect, useState } from "react";
import "../styles/goto_cart.css";
import { Link } from "react-router-dom";
const Goto_cart = () => {
  const [Item, setItem] = useState([]);

  const [count,setcount] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("cart") != null) {
      let text;
      let count1 = 0;
      text = JSON.parse(localStorage.getItem("cart"));
      console.log(text);
      setItem(text);
      text.map((d)=>
      (
        count1 = count1 + d.price
      ))
      setcount(count1)
      
    }
    
  }, []);

  const deleteByIndex = (index) => {
    let items = [...Item];
    console.log(index);
    let updatedItems = items.filter((val) => val.id !== index);
    setItem(updatedItems);
    let count1 = 0;
    updatedItems.map((d)=>
      (
        count1 = count1 + d.price

      ))
      setcount(count1)
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    //date.now
  };

  return (
    <div className="goto_cart_box">
      <h1>Your Cart</h1>
      {Item &&
        Item.map((v) => (
          <div key={v.id} className="gotocart_item">
            {v.data}
            
          
          
            <p style={{
              color:"gray",
              position: "absolute",
              right: "620px",
              }}>{v.price}</p>
            <button
              onClick={() => deleteByIndex(v.id)}
              style={{
                backgroundColor: "red",
                color: "white",
          
                border: "1px solid gray",
                position: "absolute",
                right: "520px",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      <br />
      <br />
      <Link to="/selectdateservice">
        <button className="gotocart_btn">RS {count    }{"   "} Proceed to Pay</button>
      </Link>
      <br />
      <br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> 
      <br />
    </div>
  );
};

export default Goto_cart;
