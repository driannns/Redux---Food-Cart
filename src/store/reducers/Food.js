import { products } from "../../utils/data";

const initialState = {
  food: products,
  cart: [],
};

const listReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case "ADD_TO_CART":
      const itemInCart = state.cart.find((item) => item.id === payload);
      const newItemCart = state.food.find((item) => item.id === payload);
      if (!itemInCart) {
        return {
          ...state,
          cart: [...state.cart, newItemCart],
        };
      } else {
        return state;
      }
    case "INCREMENT":
      const originalPrice = state.food.find(
        (item) => item.id === payload
      ).harga;
      const incCart = state.cart.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            harga: item.harga + originalPrice,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: incCart,
      };
    case "DECREMENT":
      const originalProduct = state.food.find(
        (item) => item.id === payload
      ).harga;
      const decCart = state.cart.map((item) => {
        if (item.id === payload) {
          const updatedPrice = item.harga - originalProduct;
          if (updatedPrice > 0) {
            return {
              ...item,
              harga: updatedPrice,
            };
          } else {
            return null;
          }
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: decCart,
      };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    case "RESETCART":
      return {
        ...state,
        cart: [],
      };
  }
};

export default listReducer;
