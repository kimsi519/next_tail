"use client";
import { useState } from "react";
import Link from "next/link";
export default function Cart() {
  const [cart, setCart] = useState([
    { id: "1", name: "옷1번", price: 18000, quantity: 1 },
    { id: "2", name: "옷2번", price: 17000, quantity: 2 },
  ]);
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">
            <Link href="/"></Link>
          </div>
        </div>
        <nav className="space-x-6">
          <Link href="/">홈</Link>
          <Link href="/products">상품들</Link>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-600">
          __님의 장바구니
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-6">
          {cart.length === 0 ? (
            <p className="text-gray-600">장바구니가 비어있습니다</p>
          ) : (
            <div>
              <ul>
                {cart.map((product) => (
                  <li className="flex justify-between">
                    <span>
                      {product.name} (x{product.quantity})
                    </span>
                    <span>${product.price * product.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span>{totalPrice}</span>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
