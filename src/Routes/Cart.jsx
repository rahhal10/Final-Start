import React from 'react'
import '../Css/Cart.css'
import Cart_Products from '../Comp/Cart_Products.jsx'

function Cart() {

    const coursesInCart = [
        {
            id: 1,
            title: "Complete Web Development Bootcamp",
            instructor: "Sarah Johnson",
            duration: "12 weeks",
            lessons: 24,
            rating: 4.9,
            price: 199,
            originalPrice: 299,
            image: "/vite.svg"
        }
    ];
  return (
    <section className="cart-page">
      <div className="cart-container">
        <div className="cart-list">
          <h2>Your Cart</h2>

           
          {coursesInCart.map((coursesInCart) => (
            <Cart_Products key={coursesInCart.id} coursesInCart={coursesInCart} />
          ))}
        

        
        </div>

        <aside className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>$477</span>
          </div>
          <div className="summary-row saving">
            <span>You save</span>
            <span>-$270</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span className="total-amt">$477</span>
          </div>

          <button className="checkout" type="button" aria-label="Proceed to checkout">
            <span>Proceed to Checkout</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="continue" type="button">Continue Shopping</button>

          <div className="guarantee">
            <strong>💡 Learning Guarantee</strong>
            <p>30-day money-back guarantee. Learn with confidence!</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Cart