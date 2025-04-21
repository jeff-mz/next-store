import IncreaseDecreaseBtn from "@/components/IncreaseDecreaseBtn";
import Link from "next/link";

const SingleProduct = async ({ params }) => {
  const id = await params.id;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    // Return a 404 page if product not found
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  const data = await response.json();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
      <div className="mb-8">
        <Link
          className="bg-blue-600 text-white py-2 px-4 text-base rounded outline-0 border-0 hover:outline-0 hover:border-0 "
          href="/store"
        >
          Go Back
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-square">
              <img
                src={data.image}
                alt={data.title}
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-3xl font-bold text-gray-900">
                ${data.price?.toFixed(2) || "29.99"}
              </span>
            </div>
            <p className="text-gray-700">{data.description}</p>
          </div>

          <div className="space-y-4">
            {/* Add to Cart Button */}
            <IncreaseDecreaseBtn data={data} />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-lg font-medium text-gray-900">Customer reviews</h2>
        <div className="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
          {[1, 2, 3].map((review) => (
            <div
              key={review}
              className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
            >
              <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:items-start xl:gap-x-8">
                <div className="flex items-center">
                  <p className="ml-3 text-sm text-gray-700">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    This product exceeded my expectations. The quality is
                    outstanding and it arrived quickly.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
