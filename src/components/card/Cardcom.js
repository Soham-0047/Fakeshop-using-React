import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "./card.css";

const Cardcom = () => {
  const [user, setUser] = useState([]);

  const fetchdata = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let itemuser = data;
        console.log(itemuser);
        setUser(itemuser);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="card-content">
      <div className="card-content-wrap">
        {user.map((data) => (
          <div className="product-card" key={data.id}>
            {data.rating.rate>=3.5?(
              <div className="badge">Hot</div>
            ):(
              <div></div>
            )}
            
            <div className="product-tumb">
              <img src={data.image} alt="" />
            </div>
            <div className="product-details">
              <span className="product-catagory">
                {data.category}
                <span>
                  <strong> {data.rating.count}</strong> In Stock
                </span>
              </span>
              <h4>
                <a href="">{data.title}</a>
              </h4>
              
              
              {data.rating.rate>=4.0?(

                 <div className="product-social">
                <ion-icon name="star" id="social"></ion-icon>
                <ion-icon name="star" id="social"></ion-icon>
                <ion-icon name="star" id="social"></ion-icon>
                <ion-icon name="star" id="social"></ion-icon>
                <h5>({data.rating.rate})</h5>
              </div>
               
              ):(

                data.rating.rate>=3.0?(

                  <div className="product-social">
                 <ion-icon name="star" id="social"></ion-icon>
                 <ion-icon name="star" id="social"></ion-icon>
                 <ion-icon name="star" id="social"></ion-icon>
                 
                 <h5>({data.rating.rate})</h5>
               </div>
               ):(
                <div className="product-social">
                <ion-icon name="star" id="social"></ion-icon>
                <ion-icon name="star" id="social"></ion-icon>
                <h5>({data.rating.rate})</h5>
                </div>
               )
               
              )}
             

              <div className="product-bottom-details">
                <div className="product-price">$<span>{data.price}</span></div>

                <div className="product-links">
                  <Link to="/about">
                  <button class="button-86" role="button">
                   <strong>VISIT</strong> 
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardcom;
