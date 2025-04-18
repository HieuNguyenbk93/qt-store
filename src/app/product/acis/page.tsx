import ImageSlider from '@/Components/ImageSlider';
import { acisProducts } from '@/constants/acisProducts';
import Link from 'next/link';
// import Image from 'next/image';

export default function AcisProducts() {
  // Sample product data
  const products = acisProducts

  return (
    <div className="min-h-screen bg-blue-900 text-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Page Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
          Thiết bị nhà thông minh ACIS
        </h1>

        {/* Product List */}
        <div className="space-y-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg bg-white shadow-lg ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Description Column */}
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                {product.requiresQuotation ? (
                  <></>
                ) : (
                  <p className="text-lg font-bold text-blue-900">
                    Giá: {product.price}
                  </p>
                )}
                <Link href="/contact">
                  <button className="bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition">
                    Yêu Cầu Báo Giá
                  </button>
                </Link>
              </div>

              {/* Image Column */}
              <div className="md:w-1/2 flex justify-center">
                {/* <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-contain rounded-md"
                /> */}
                <ImageSlider images={product.image} alt={product.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}