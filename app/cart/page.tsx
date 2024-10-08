import { useState } from "react";
import Link from "next/link";

export default function Cart() {
  const [cart, setCart] = useState([
    { id: "1", name: "Product 1", price: 19.99, quantity: 1 },
    { id: "2", name: "Product 2", price: 29.99, quantity: 2 },
  ]);

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">
            <Link href="/">MyShop</Link>
          </div>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-blue-200">
              Home
            </Link>
            <Link href="/products" className="hover:text-blue-200">
              Shop
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Your Cart</h1>

        <div className="bg-white shadow-lg rounded-lg p-6">
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              <ul>
                {cart.map((product) => (
                  <li key={product.id} className="flex justify-between mb-4">
                    <span>
                      {product.name} (x{product.quantity})
                    </span>
                    <span>
                      ${(product.price * product.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between text-xl font-semibold mt-6">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <Link href="/checkout">
                <button className="mt-6 w-full px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          &copy; 2024 MyShop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
