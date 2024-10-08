"use client";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams();

  const product = {
    id,
    name: `상품 ${id} 번`,
    description: `이상품은 ${id}번 상품입니다. 놀라운 상품입니다`,
    price: 17000,
    image: "https://via.placeholder.com/600x400",
  };

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-400 text-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-2xl font-bold">
                <a href="#">Home</a>
              </div>
              <nav className="space-x-6">
                <a href="#" className="hover:text-blue-900">
                  Room1
                </a>
                <a href="#" className="hover:text-blue-900">
                  Room2
                </a>
                <a href="#" className="hover:text-blue-900">
                  Room3
                </a>
                <a href="#" className="hover:text-blue-900">
                  Room4
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-grow container mx-auto py-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-lg shadow-lg">
                <img
                  className="w-full h-96 object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-gray-800">
                  {product.name}
                </h1>
                <p className="text-gray-700 mt-4">{product.description}</p>
                <p className="text-2xl font-semibold text-blue-600 mt-6">
                  {product.price}
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-900 transition">
                  장바구니 이동
                </button>
              </div>
            </div>
          </main>

          <footer className="bg-gray-400 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
              2024 TailWind Test. All rights reserved
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
