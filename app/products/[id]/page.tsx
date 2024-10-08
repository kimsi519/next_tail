"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetail() {
  const { id } = useParams();

  const product = {
    id,
    name: `Product ${id}`,
    description: `This is the description for Product ${id}. It is an amazing product that offers great value and features.`,
    price: 39.99,
    image: "https://via.placeholder.com/600x400",
  };

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
            <Link href="/about" className="hover:text-blue-200">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-200">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-96 object-cover"
              src={product.image}
              alt={product.name}
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-700 mt-4">{product.description}</p>
            <p className="text-2xl font-semibold text-blue-600 mt-6">
              ${product.price.toFixed(2)}
            </p>

            <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; 2024 MyShop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
