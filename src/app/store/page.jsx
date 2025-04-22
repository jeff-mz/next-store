import ProductCard from "@/components/ProductCard";

const StorePage = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default StorePage;
