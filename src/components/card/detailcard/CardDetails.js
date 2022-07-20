import React,{useEffect,useState} from 'react'
import './carddetail.css'



const CardDetails = () => {


  const [product, setProduct] = useState([]);

  const fetchd = () => {
    try{
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let itemuser = data;
        console.log(itemuser);
        console.log("about")
        console.log(data.id)
        setProduct(itemuser);
      }) }
      
      catch(err){
        console.log(err)
      }
  };
  useEffect(() => {
    fetchd();
  }, []);

  return (
     
    
     
        <div className = "card-wrapper">
      
      
      <div className = "card" key={product.id}>
        {/* <!-- card left --> */}
        <div className = "product-imgs">
          <div className = "img-display">
            <div className = "img-showcase">
              <img src = {product.image} id="pimg"/>
            </div>
          </div>


        </div>
        {/* <!-- card right --> */}


        <div className = "product-content">
          <h2 className = "product-title">{product.title}</h2>
          <a href = "#" className = "product-link">{product.category}</a>
          <div className = "product-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-half"></ion-icon>
           
              <span>{34}(67)</span> 
            
           
          </div>

          <div className = "product-price">
           
            <p className = "new-price">New Price: <span>{product.price}$</span></p>
          </div>

          <div className = "product-detail">
            <h2>about this item: </h2>
            <p>{product.description}</p>
            
          </div>

          <div className = "purchase-info">
            
            <button type = "button" className = "btn">
              Add to Cart <i className = "fas fa-shopping-cart"></i>
            </button>
            <button type = "button" className = "btn">More</button>
          </div>

          <div className = "social-links">
            <p>Share At: </p>
            <a href = "#"alt="icon">
            <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a href = "#"alt="icon">
            <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href = "#"alt="icon">
            <ion-icon name="logo-instagram"></ion-icon>
            </a>
            
            <a href = "#"alt="icon">
            <ion-icon name="logo-pinterest"></ion-icon>
            </a>
          </div>
        </div>
      </div>
     
</div>
        

    
    

  )
}

export default CardDetails