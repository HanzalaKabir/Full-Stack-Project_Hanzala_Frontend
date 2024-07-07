import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer";

const initialValue = {
  wishlist: [],
};

const wishlistContext = createContext(initialValue);

const WishlistProvider = ({ children }) => {
  const [{ wishlist }, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialValue
  );

  return (
    <wishlistContext.Provider value={{ wishlist, wishlistDispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { useWishlist, WishlistProvider };
