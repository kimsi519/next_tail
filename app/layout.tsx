import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export default function RootLayout() {
  const products = [
    {
      id: "1",
      name: "옷1번",
      price: 19000,
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: "2",
      name: "옷2번",
      price: 18000,
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: "3",
      name: "옷3번",
      price: 17000,
      image: "https://via.placeholder.com/400x300",
    },
  ];

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {product.name}
                    </h2>
                    <p className="text-gray-600">{product.price}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-900 text-white rounded transition">
                      상세보기
                    </button>
                  </div>
                </div>
              ))}
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
