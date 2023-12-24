import React from "react";
import Button from "../../button";
import { emptyWishlist } from "../../../assets/images/images";
import MsgPage from "../MsgPage/msgContainer";
import WishListitem from "./wishlistItem";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const products = useSelector((state) => state.Wishlist.value);
  console.log("productss,,,", products);

  return (
    <div className="wishlist">
      <h1 className="heading">Wishlist</h1>
      <div className="wishlistcontainer">
        {products?.length > 0 ? (
          <>
            {products &&
              products.map((item) => {
                const { itemName, itemPrice, id } = item;
                return (
                  <WishListitem
                    itemName={itemName}
                    itemPrice={itemPrice}
                    id={id}
                    item={item}
                  />
                );
              })}
          </>
        ) : (
          <MsgPage
            msgimg={emptyWishlist}
            msg={"Your wishlist is empty."}
            submsg={
              "You don’t have any products in the wishlist yet. You will find a lot of interesting products on our Shop page."
            }
            buttontext={"Continue Shopping"}
            path={'/details'}
          />
        )}
      </div>
    </div>
  );
};
export default Wishlist;
