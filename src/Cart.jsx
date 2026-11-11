import React from "react";

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(item => item.id === action.item.id)
      if (existing) {
        return state.map(item =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, { ...action.item, quantity: 1 }]
    }

    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id)

    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}

function Cart({ cart, onRemove, onClear }) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <aside className="cart">
      <h2>Your Order</h2>

      {cart.length === 0 ? (
        <p style={{ color: "gray" }}>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => onRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>

          <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
          <button onClick={onClear}>Clear cart</button>
        </>
      )}
    </aside>
  );
}

export default Cart;