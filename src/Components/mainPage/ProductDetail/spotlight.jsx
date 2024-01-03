import React from "react";

const ProductDetailSpotlight=()=>{
    return(
        <div className="oderingSection wrapper">
        <div className="produtImages">
          <h2>
            <img src={smallProductImage} alt="productimages" />
          </h2>
        </div>
        <h1 className="imageviewer">
          <img src={productimage} alt="productImage" />
        </h1>
        <div className="productDetails">
          <div className="path">
            <p>
              Shop{" "}
              <span>
                <img src={nxtarrow} alt="path" />
              </span>{" "}
              Women{" "}
              <span>
                <img src={nxtarrow} alt="path" />
              </span>{" "}
              Top
            </p>
          </div>
          <h1>{items&& items.itemName}</h1>
          <div className="rating">
            <div className="stars">
              <img src={rating} alt="rating" />
            </div>
            <div className="comments">
              <i>
                <img src={commentIcon} alt="comments" />
              </i>
              <p>264comments</p>
            </div>
          </div>
          <div className="Sizeselector">
            <div className="heading">
              <p className="main">Select size</p>
              <p className="sub">
                Size Guide
                <i>
                  <img src={nextArrow} alt="arrow" />
                </i>
              </p>
            </div>
            <div className="sizetile">
              {items&&items.size.map((item)=>{
                return<Button buttontxt={item} />
              })}
            </div>
          </div>
          <div className="colorSelector">
            <p className="heading">Colours Available</p>
            <div className="colortile">
              {items&&items.colors.map((item)=>{
                return <i style={{ backgroundColor: item }}></i>
              })}
              
            </div>
          </div>
          <div className="cartOptions">
            <Button buttontxt="Add to cart" image={whitecart} btnfun={AddtoCart} />
            <p className="price">{items&&items.itemPrice}</p>
          </div>
          <div className="services">
            {service.map((item, index) => {
              return (
                <div className="item">
                  <i>
                    <img src={shipping} alt="service" />
                  </i>
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
}